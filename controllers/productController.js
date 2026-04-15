import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"
import csvtojson from 'csvtojson'   // npm install csvtojson
import fs from 'fs-extra'
import path from 'path'
import unzipper from 'unzipper'

const csv = () => csvtojson()

const DEFAULT_COLOR_HEX = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#EF4444',
    navy: '#1E3A5F',
    'royal blue': '#3B82F6',
    'forest green': '#166534',
    olive: '#4D7C0F',
    yellow: '#EAB308',
    pink: '#EC4899',
    lavender: '#8B5CF6',
    orange: '#F97316',
    brown: '#92400E',
    cream: '#FFFDD0',
    gray: '#9CA3AF',
    charcoal: '#374151',
    maroon: '#7F1D1D',
    'antique brown': '#8A5A44',
}

const resolveColorHex = (rawName = '') => {
    const normalized = String(rawName).trim().toLowerCase().replace(/\s+/g, ' ')
    const compact = normalized.replace(/[\s_-]+/g, '')

    if (DEFAULT_COLOR_HEX[normalized]) return DEFAULT_COLOR_HEX[normalized]

    const aliasMap = {
        navyblue: 'royal blue',
        forestgreen: 'forest green',
        antiquebrown: 'antique brown',
    }

    const aliasKey = aliasMap[compact]
    if (aliasKey && DEFAULT_COLOR_HEX[aliasKey]) return DEFAULT_COLOR_HEX[aliasKey]

    return '#000000'
}

const normalizeHex = (value = '') => {
    const raw = String(value).trim().replace(/^#/, '').toUpperCase()
    if (/^[0-9A-F]{3}$/.test(raw) || /^[0-9A-F]{6}$/.test(raw)) return `#${raw}`
    return ''
}

const parseColorToken = (token = '') => {
    const raw = String(token).trim()
    if (!raw) return null

    // Supported custom color formats:
    // 1) White:#F6F6FC
    // 2) White|#F6F6FC
    // 3) White#F6F6FC
    // 4) White(#F6F6FC)
    let name = raw
    let hexCandidate = ''

    if (raw.includes('|')) {
        const [n, h] = raw.split('|')
        name = (n || '').trim()
        hexCandidate = (h || '').trim()
    } else if (raw.includes(':')) {
        const [n, h] = raw.split(':')
        name = (n || '').trim()
        hexCandidate = (h || '').trim()
    } else {
        const parenMatch = raw.match(/^(.*?)\((#?[0-9a-fA-F]{3,6})\)$/)
        if (parenMatch) {
            name = (parenMatch[1] || '').trim()
            hexCandidate = (parenMatch[2] || '').trim()
        } else {
            const hashMatch = raw.match(/^(.*?)(#?[0-9a-fA-F]{3,6})$/)
            if (hashMatch && hashMatch[1]?.trim()) {
                name = hashMatch[1].trim()
                hexCandidate = hashMatch[2]
            }
        }
    }

    name = name.replace(/\s+/g, ' ').trim()
    if (!name) return null

    const normalizedHex = normalizeHex(hexCandidate)
    return {
        name,
        hex: normalizedHex || resolveColorHex(name),
    }
}

const normalizeColorInput = (colorValue) => {
    if (!colorValue) return []
    if (Array.isArray(colorValue)) {
        return colorValue.flatMap((item) => normalizeColorInput(item))
    }
    if (typeof colorValue === 'string') {
        const parsed = colorValue
            .split(',')
            .map((token) => parseColorToken(token))
            .filter(Boolean)

        const seen = new Set()
        return parsed.filter((c) => {
            const key = c.name.toLowerCase()
            if (seen.has(key)) return false
            seen.add(key)
            return true
        })
    }
    if (typeof colorValue === 'object') {
        const name = String(colorValue.name || colorValue.value || '').trim()
        if (!name) return []
        return [{
            name,
            hex: normalizeHex(colorValue.hex) || resolveColorHex(name)
        }]
    }
    return []
}

const parseBulkSizes = (sizesValue = '') => {
    if (!sizesValue || typeof sizesValue !== 'string') return []

    return sizesValue
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
        .map((entry) => {
            // Supported formats:
            // 1) size:multiplier
            // 2) size:multiplier:stock
            // 3) size:multiplier:stock:customPrice
            // 4) size:multiplier:stock:customPrice:useCustomPrice
            // 5) size:customPrice:stock:custom
            // 6) size:custom:customPrice:stock
            const parts = entry.split(':').map((p) => p.trim())
            const size = parts[0]
            if (!size) return null

            const base = {
                size,
                priceMultiplier: 1,
                stock: 0,
                customPrice: 0,
                useCustomPrice: false,
            }

            const p1 = parts[1]?.toLowerCase()
            const p2 = parts[2]
            const p3 = parts[3]
            const p4 = parts[4]

            // Explicit custom mode: size:custom:2499:10
            if (p1 === 'custom') {
                base.customPrice = Number(p2) || 0
                base.stock = Number.isNaN(parseInt(p3, 10)) ? 0 : parseInt(p3, 10)
                base.useCustomPrice = true
                return base
            }

            // Explicit custom mode: size:2499:10:custom
            if (parts.length >= 4 && p3?.toLowerCase() === 'custom') {
                base.customPrice = Number(parts[1]) || 0
                base.stock = Number.isNaN(parseInt(parts[2], 10)) ? 0 : parseInt(parts[2], 10)
                base.useCustomPrice = true
                return base
            }

            // Shorthand custom mode: size:2499:10
            // If first numeric value is > 2 and stock is present, treat it as customPrice.
            if (parts.length >= 3 && Number(parts[1]) > 2) {
                base.customPrice = Number(parts[1]) || 0
                base.stock = Number.isNaN(parseInt(parts[2], 10)) ? 0 : parseInt(parts[2], 10)
                base.useCustomPrice = true
                return base
            }

            // Multiplier mode + optional stock/custom
            base.priceMultiplier = Number(parts[1]) || 1
            if (parts[2] !== undefined && parts[2] !== '') {
                base.stock = Number.isNaN(parseInt(parts[2], 10)) ? 0 : parseInt(parts[2], 10)
            }

            // Backward-compatible implicit custom mode when customPrice is provided.
            if (parts[3] !== undefined && parts[3] !== '') {
                base.customPrice = Number(parts[3]) || 0
                base.useCustomPrice = true
            }

            if (parts[4] !== undefined && parts[4] !== '') {
                base.useCustomPrice = parts[4].toLowerCase() === 'true'
            }

            return base
        })
        .filter(Boolean)
}

// function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, detailedDescription, price, discountPrice, discountActive, category, subCategory, sizes, color, bestseller } = req.body

        // Validate price
        const numericPrice = Number(price)
        const numericDiscount = discountPrice !== undefined && discountPrice !== "" ? Number(discountPrice) : 0

        if (isNaN(numericPrice) || numericPrice < 0) {
            return res.json({ success: false, message: "Invalid product price" })
        }
        if (numericDiscount < 0) {
            return res.json({ success: false, message: "Invalid discount price" })
        }
        if (numericDiscount > 0 && numericDiscount >= numericPrice) {
            return res.json({ success: false, message: "Discount price must be less than product price" })
        }

        // Upload images
        const images = req.files || [];

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {
                    resource_type: 'image'
                });
                return result.secure_url;
            })
        );

        // ✅ PARSE SIZES WITH PRICE MULTIPLIERS
        let parsedSizes = []
        try {
            parsedSizes = JSON.parse(sizes)
            // Validate that sizes are in correct format
            parsedSizes = parsedSizes.map(sizeObj => ({
                size: sizeObj.size,
                priceMultiplier: sizeObj.priceMultiplier || 1,
                stock: sizeObj.stock || 0,
                customPrice: sizeObj.customPrice ?? 0,        // ✅ Add
                useCustomPrice: sizeObj.useCustomPrice ?? false // ✅ Add
            }))
        } catch (e) {
            return res.json({ success: false, message: "Invalid sizes format. Expected: [{size:'S', priceMultiplier:1, stock:10}]" })
        }


        const productData = {
            name,
            description,
            detailedDescription,
            category,
            subCategory,
            price: Number(price),
            discountPrice: numericDiscount,
            discountActive: numericDiscount > 0,
            bestseller: bestseller === "true" ? true : false,
            // sizes: JSON.parse(sizes),
            sizes: parsedSizes, // ✅ NOW STORES OBJECTS WITH MULTIPLIERS
            color: JSON.parse(color),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for list product
const listProducts = async (req, res) => {
    try {

        const products = await productModel.find({});
        res.json({ success: true, products })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for removing product
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Product Removed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {

        const { productId } = req.body
        const product = await productModel.findById(productId)
        if (!product) {
            return res.json({ success: false, message: "Product not found" })
        }

        // ✅ Convert to plain object
        const productObj = product.toObject()

        // ✅ IMPORTANT: Ensure sizes are objects (not strings)
        if (productObj.sizes && productObj.sizes.length > 0) {
            productObj.sizes = productObj.sizes.map(sizeItem => {
                // If it's already an object with size property, return it
                if (typeof sizeItem === 'object' && sizeItem.size) {
                    return {
                        size: sizeItem.size,
                        priceMultiplier: sizeItem.priceMultiplier || 1,
                        stock: sizeItem.stock || 0,
                        customPrice: sizeItem.customPrice ?? 0,        // ✅ Add
                        useCustomPrice: sizeItem.useCustomPrice ?? false // ✅ Add
                    }
                }
                // If it's a string (old format), convert it
                if (typeof sizeItem === 'string') {
                    return {
                        size: sizeItem,
                        priceMultiplier: 1,
                        stock: 0
                    }
                }
                return sizeItem
            })
        }
        res.json({ success: true, product: productObj })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// UPDATE PRODUCT
// const updateProduct = async (req, res) => {
//     try {
//         const { productId } = req.body
//         const product = await productModel.findById(productId)

//         if (!product) {
//             return res.json({ success: false, message: "Product not found" })
//         }

//         const {
//             name,
//             description,
//             detailedDescription,
//             price,
//             category,
//             discountPrice,
//             subCategory,
//             sizes,
//             color,
//             bestseller
//         } = req.body

//         // Handle images
//         // const newImagesRaw = [
//         //   req.files?.image1?.[0],
//         //   req.files?.image2?.[0],
//         //   req.files?.image3?.[0],
//         //   req.files?.image4?.[0],
//         //   req.files?.image5?.[0]
//         // ].filter(Boolean)

//         // let newImageUrls = []

//         const newImagesRaw = req.files || [];

//         if (newImagesRaw.length > 0) {
//             newImageUrls = await Promise.all(
//                 newImagesRaw.map(async (img) => {
//                     const uploaded = await cloudinary.uploader.upload(img.path, {
//                         resource_type: "image",
//                     })
//                     return uploaded.secure_url
//                 })
//             )
//         }

//         const updatedImages = newImagesRaw.length > 0 ? newImageUrls : product.image

//         // Handle discount
//         const numericDiscount =
//             discountPrice !== undefined && discountPrice !== ""
//                 ? Number(discountPrice)
//                 : null

//         const finalDiscountPrice =
//             numericDiscount !== null ? numericDiscount : product.discountPrice

//         const finalDiscountActive =
//             numericDiscount !== null
//                 ? numericDiscount > 0
//                 : product.discountActive

//         // ✅ PARSE SIZES WITH MULTIPLIERS
//         let parsedSizes = product.sizes
//         if (sizes) {
//             try {
//                 parsedSizes = JSON.parse(sizes)
//                 parsedSizes = parsedSizes.map(sizeObj => ({
//                     size: sizeObj.size,
//                     priceMultiplier: sizeObj.priceMultiplier || 1,
//                     stock: sizeObj.stock || 0
//                 }))
//             } catch (e) {
//                 return res.json({ success: false, message: "Invalid sizes format" })
//             }
//         }

//         const updatedData = {
//             name: name ?? product.name,
//             description: description ?? product.description,
//             detailedDescription: detailedDescription ?? product.detailedDescription,
//             price: price ? Number(price) : product.price,
//             discountPrice: finalDiscountPrice,
//             discountActive: finalDiscountActive,
//             category: category ?? product.category,
//             subCategory: subCategory ?? product.subCategory,
//             bestseller: bestseller !== undefined ? bestseller === "true" : product.bestseller,
//             image: updatedImages,
//             sizes: parsedSizes, // ✅ UPDATE SIZES WITH MULTIPLIERS
//             color: color ? JSON.parse(color) : product.color,
//             updatedAt: Date.now(),
//         }

//         await productModel.findByIdAndUpdate(productId, updatedData, { new: true })

//         res.json({ success: true, message: "Product updated successfully" })

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }



// const updateProduct = async (req, res) => {
//     try {
//         const { productId } = req.body;
//         const product = await productModel.findById(productId);

//         if (!product) {
//             return res.json({ success: false, message: "Product not found" });
//         }

//         const {
//             name, description, detailedDescription,
//             price, discountPrice, category, subCategory,
//             sizes, color, bestseller
//         } = req.body;

//         // ✅ FIX 1 - newImageUrls properly declare karo
//         const newImagesRaw = req.files || [];
//         let newImageUrls = []; // ← ye missing tha!

//         if (newImagesRaw.length > 0) {
//             newImageUrls = await Promise.all(
//                 newImagesRaw.map(async (img) => {
//                     const uploaded = await cloudinary.uploader.upload(img.path, {
//                         resource_type: "image",
//                     });
//                     return uploaded.secure_url;
//                 })
//             );
//         }

//         // ✅ FIX 2 - Existing images + new images merge karo
//         // Agar new images aaye → existing ke saath append karo, replace mat karo
//         let updatedImages;
//         if (newImagesRaw.length > 0) {
//             // Existing images rakho + new images add karo, max 10
//             updatedImages = [...product.image, ...newImageUrls].slice(0, 10);
//         } else {
//             updatedImages = product.image;
//         }

//         // Discount handle
//         const numericDiscount = discountPrice !== undefined && discountPrice !== ""
//             ? Number(discountPrice) : null;
//         const finalDiscountPrice = numericDiscount !== null ? numericDiscount : product.discountPrice;
//         const finalDiscountActive = numericDiscount !== null ? numericDiscount > 0 : product.discountActive;

//         // ✅ FIX 3 - parsedSizes me customPrice & useCustomPrice bhi rakho
//         let parsedSizes = product.sizes;
//         if (sizes) {
//             try {
//                 parsedSizes = JSON.parse(sizes).map(sizeObj => ({
//                     size: sizeObj.size,
//                     priceMultiplier: sizeObj.priceMultiplier || 1,
//                     stock: sizeObj.stock || 0,
//                     customPrice: sizeObj.useCustomPrice ? Number(sizeObj.customPrice) : 0,
//                     // customPrice: sizeObj.customPrice || 0,      // ✅ Added
//                     useCustomPrice: sizeObj.useCustomPrice || false, // ✅ Added
//                 }));
//             } catch (e) {
//                 return res.json({ success: false, message: "Invalid sizes format" });
//             }
//         }

//         const updatedData = {
//             name: name ?? product.name,
//             description: description ?? product.description,
//             detailedDescription: detailedDescription ?? product.detailedDescription,
//             price: price ? Number(price) : product.price,
//             discountPrice: finalDiscountPrice,
//             discountActive: finalDiscountActive,
//             category: category ?? product.category,
//             subCategory: subCategory ?? product.subCategory,
//             bestseller: bestseller !== undefined ? bestseller === "true" : product.bestseller,
//             image: updatedImages,
//             sizes: parsedSizes,
//             color: color ? JSON.parse(color) : product.color,
//             updatedAt: Date.now(),
//         };

//         await productModel.findByIdAndUpdate(productId, updatedData, { new: true });
//         res.json({ success: true, message: "Product updated successfully" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };



const updateProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);

        if (!product) {
            return res.json({ success: false, message: "Product not found" });
        }

        const {
            name, description, detailedDescription,
            price, discountPrice, category, subCategory,
            sizes, color, bestseller,
            existingImages  // ✅ Frontend se existing images aa rahi hain
        } = req.body;

        // ══════════════════════════════════
        // ✅ IMAGE HANDLING - DELETE + ADD
        // ══════════════════════════════════

        // Step 1: Jo images user ne rakhi hain (delete nahi ki)
        const keptImages = existingImages
            ? JSON.parse(existingImages)
            : product.image;

        // Step 2: New files upload karo Cloudinary pe
        const newImagesRaw = req.files || [];
        let newImageUrls = [];

        if (newImagesRaw.length > 0) {
            newImageUrls = await Promise.all(
                newImagesRaw.map(async (img) => {
                    const uploaded = await cloudinary.uploader.upload(img.path, {
                        resource_type: "image",
                    });
                    return uploaded.secure_url;
                })
            );
        }

        // Step 3: Kept existing + new uploaded = final, max 10
        const updatedImages = [...keptImages, ...newImageUrls].slice(0, 10);

        // ══════════════════════════════════
        // DISCOUNT HANDLE
        // ══════════════════════════════════
        const numericDiscount = discountPrice !== undefined && discountPrice !== ""
            ? Number(discountPrice) : null;
        const finalDiscountPrice = numericDiscount !== null ? numericDiscount : product.discountPrice;
        const finalDiscountActive = numericDiscount !== null ? numericDiscount > 0 : product.discountActive;

        // ══════════════════════════════════
        // ✅ SIZES - customPrice & useCustomPrice properly save
        // ══════════════════════════════════
        let parsedSizes = product.sizes;
        if (sizes) {
            try {
                parsedSizes = JSON.parse(sizes).map(sizeObj => ({
                    size: sizeObj.size,
                    priceMultiplier: sizeObj.priceMultiplier || 1,
                    stock: sizeObj.stock || 0,
                    // ✅ useCustomPrice true hai toh customPrice rakho, warna 0
                    customPrice: sizeObj.useCustomPrice ? Number(sizeObj.customPrice) || 0 : 0,
                    // useCustomPrice: Boolean(sizeObj.useCustomPrice),
                    useCustomPrice: sizeObj.useCustomPrice === true || sizeObj.useCustomPrice === "true",
                }));
            } catch (e) {
                return res.json({ success: false, message: "Invalid sizes format" });
            }
        }

        // ══════════════════════════════════
        // UPDATE
        // ══════════════════════════════════
        const updatedData = {
            name: name ?? product.name,
            description: description ?? product.description,
            detailedDescription: detailedDescription ?? product.detailedDescription,
            price: price ? Number(price) : product.price,
            discountPrice: finalDiscountPrice,
            discountActive: finalDiscountActive,
            category: category ?? product.category,
            subCategory: subCategory ?? product.subCategory,
            bestseller: bestseller !== undefined ? bestseller === "true" : product.bestseller,
            image: updatedImages,
            sizes: parsedSizes,
            color: color ? JSON.parse(color) : product.color,
            updatedAt: Date.now(),
        };

        await productModel.findByIdAndUpdate(productId, updatedData, { new: true });
        res.json({ success: true, message: "Product updated successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// BULK UPLOAD
const bulkUploadProducts = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({ success: false, message: "No file uploaded" })
        }

        const filePath = req.file.path
        let jsonData = []

        const isCsv = req.file.mimetype === "text/csv" || req.file.mimetype === "application/vnd.ms-excel" || req.file.originalname.toLowerCase().endsWith('.csv');
        if (isCsv) {
            jsonData = await csv().fromFile(filePath)
        } else {
            jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"))
        }

        const formattedProducts = await Promise.all(
            jsonData.map(async (item) => {
                let uploadedImages = []

                if (item.image) {
                    const images = item.image.split(",").map((i) => i.trim())

                    for (let img of images) {
                        try {
                            const result = await cloudinary.uploader.upload(img, {
                                resource_type: "image",
                            })
                            uploadedImages.push(result.secure_url)
                        } catch (err) {
                            console.log("Error uploading image:", img, err)
                        }
                    }
                }

                const parsedSizes = parseBulkSizes(item.sizes)

                return {
                    name: item.name,
                    description: item.description,
                    detailedDescription: item.detailedDescription || "",
                    price: Number(item.price),
                    discountPrice: item.discountPrice ? Number(item.discountPrice) : 0,
                    discountActive: item.discountPrice && Number(item.discountPrice) > 0 ? true : false,
                    category: item.category,
                    subCategory: item.subCategory,
                    bestseller: item.bestseller === "true",
                    sizes: parsedSizes, // ✅ WITH MULTIPLIERS
                    color: normalizeColorInput(item.color),
                    image: uploadedImages,
                    date: Date.now(),
                }
            })
        )

        await productModel.insertMany(formattedProducts)
        fs.unlinkSync(filePath)

        res.json({
            success: true,
            message: `${formattedProducts.length} products uploaded successfully`,
        })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// BULK UPLOAD WITH ZIP
const bulkUploadZipProducts = async (req, res) => {
    try {
        if (!req.files || !req.files.csv || !req.files.images) {
            return res.json({ success: false, message: "CSV and ZIP are required" })
        }

        const csvPath = req.files.csv[0].path
        const zipPath = req.files.images[0].path
        const extractDir = "temp/images"

        await fs.ensureDir(extractDir)
        await fs
            .createReadStream(zipPath)
            .pipe(unzipper.Extract({ path: extractDir }))
            .promise()

        const products = await csv().fromFile(csvPath)
        const finalProducts = []

        for (let item of products) {
            let imageFilenames = item.image ? item.image.split(",") : []
            let uploadedImages = []

            for (let filename of imageFilenames) {
                filename = filename.trim()
                const localPath = path.join(extractDir, filename)

                if (fs.existsSync(localPath)) {
                    try {
                        const uploaded = await cloudinary.uploader.upload(localPath, {
                            resource_type: "image",
                            folder: "bulk_upload",
                        })
                        uploadedImages.push(uploaded.secure_url)
                    } catch (err) {
                        console.log("Upload failed:", filename, err.message)
                    }
                }
            }

            const parsedSizes = parseBulkSizes(item.sizes)

            finalProducts.push({
                name: item.name,
                description: item.description,
                detailedDescription: item.detailedDescription || "",
                price: Number(item.price),
                discountPrice: item.discountPrice ? Number(item.discountPrice) : 0,
                discountActive: item.discountPrice && Number(item.discountPrice) > 0 ? true : false,
                category: item.category,
                subCategory: item.subCategory,
                bestseller: item.bestseller === "true",
                sizes: parsedSizes, // ✅ WITH MULTIPLIERS
                color: normalizeColorInput(item.color),
                image: uploadedImages,
                date: Date.now(),
            })
        }

        await productModel.insertMany(finalProducts)
        fs.unlinkSync(csvPath)
        fs.unlinkSync(zipPath)
        await fs.remove(extractDir)

        res.json({
            success: true,
            message: `${finalProducts.length} products uploaded successfully`,
        })
    } catch (err) {
        console.log(err)
        res.json({ success: false, message: err.message })
    }
}

export { listProducts, addProduct, removeProduct, singleProduct, updateProduct, bulkUploadProducts, bulkUploadZipProducts }


