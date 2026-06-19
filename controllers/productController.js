import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"
import csvtojson from 'csvtojson'   // npm install csvtojson
import fs from 'fs-extra'
import path from 'path'
import unzipper from 'unzipper'
import { generateSeoSlug } from "../utils/slugify.js"
import mongoose from "mongoose";

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

const parseItemDetailsField = (value = "") => {
    if (!value) return [];

    try {
        return JSON.parse(value)
            .filter(item => item.title?.trim() && item.value?.trim());
    } catch (e) {

        return value
            .split("::")
            .map(item => {
                const [title, val] = item.split(":");

                return {
                    title: title?.trim(),
                    value: val?.trim()
                };
            })
            .filter(item =>
                item.title &&
                item.value
            );
    }
};

// function for add product
const addProduct = async (req, res) => {
    try {

        const { sku, name, description, detailedDescription, itemDetails, price, discountPrice, discountActive, category, subCategory, sizes, color, bestseller } = req.body


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

        let parsedItemDetails = []

        try {

            parsedItemDetails = itemDetails
                ? JSON.parse(itemDetails).filter(
                    item =>
                        item.title?.trim() &&
                        item.value?.trim()
                )
                : []

        } catch (e) {

            return res.json({
                success: false,
                message: "Invalid itemDetails format"
            })

        }

        const normalizedSku = sku.trim().toUpperCase();

        const existingSku = await productModel.findOne({
            sku: normalizedSku
        });

        if (existingSku) {
            return res.json({
                success: false,
                message: "SKU already exists"
            });
        }


        const productData = {
            sku: normalizedSku,
            slug: generateSeoSlug(name, category, subCategory, normalizedSku), // ✅
            name,
            description,
            detailedDescription,
            itemDetails: parsedItemDetails,
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
// const singleProduct = async (req, res) => {
//     try {

//         const { productId } = req.body
//         const product = await productModel.findById(productId)
//         if (!product) {
//             return res.json({ success: false, message: "Product not found" })
//         }

//         // ✅ Convert to plain object
//         const productObj = product.toObject()

//         // ✅ IMPORTANT: Ensure sizes are objects (not strings)
//         if (productObj.sizes && productObj.sizes.length > 0) {
//             productObj.sizes = productObj.sizes.map(sizeItem => {
//                 // If it's already an object with size property, return it
//                 if (typeof sizeItem === 'object' && sizeItem.size) {
//                     return {
//                         size: sizeItem.size,
//                         priceMultiplier: sizeItem.priceMultiplier || 1,
//                         stock: sizeItem.stock || 0,
//                         customPrice: sizeItem.customPrice ?? 0,        // ✅ Add
//                         useCustomPrice: sizeItem.useCustomPrice ?? false // ✅ Add
//                     }
//                 }
//                 // If it's a string (old format), convert it
//                 if (typeof sizeItem === 'string') {
//                     return {
//                         size: sizeItem,
//                         priceMultiplier: 1,
//                         stock: 0
//                     }
//                 }
//                 return sizeItem
//             })
//         }
//         res.json({ success: true, product: productObj })

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }


const singleProduct = async (req, res) => {
    try {

        const { productId } = req.body;

        let product = null;

        if (mongoose.Types.ObjectId.isValid(productId)) {
            product = await productModel.findById(productId);
        } else {
            product = await productModel.findOne({
                slug: productId
            });
        }

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            product
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};


const updateProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);

        if (!product) {
            return res.json({ success: false, message: "Product not found" });
        }

        const {
            sku, name, description, detailedDescription, itemDetails,
            price, discountPrice, category, subCategory,
            sizes, color, bestseller,
            existingImages  // ✅ Frontend se existing images aa rahi hain
        } = req.body;

        const normalizedSku = sku
            ? sku.trim().toUpperCase()
            : product.sku;

        if (
            normalizedSku &&
            normalizedSku !== product.sku
        ) {
            const exists = await productModel.findOne({
                sku: normalizedSku,
                _id: { $ne: productId }
            });

            if (exists) {
                return res.json({
                    success: false,
                    message: "SKU already exists"
                });
            }
        }
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

        let parsedItemDetails = product.itemDetails || []

        if (itemDetails) {

            try {

                parsedItemDetails = JSON.parse(itemDetails)
                    .filter(
                        item =>
                            item.title?.trim() &&
                            item.value?.trim()
                    )

            } catch (e) {

                return res.json({
                    success: false,
                    message: "Invalid itemDetails format"
                })

            }

        }

        // ✅ ADD THESE 4 LINES before updatedData
        const finalName = name ?? product.name;
        const finalCategory = category ?? product.category;
        const finalSubCategory = subCategory ?? product.subCategory;
        const slug = generateSeoSlug(finalName, finalCategory, finalSubCategory, normalizedSku);

        // ══════════════════════════════════
        // UPDATE
        // ══════════════════════════════════
        const updatedData = {
            sku: normalizedSku,
            slug,
            name: name ?? product.name,
            description: description ?? product.description,
            detailedDescription: detailedDescription ?? product.detailedDescription,
            itemDetails: parsedItemDetails,
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



const bulkUploadProducts = async (req, res) => {
    try {

        if (!req.file) {
            return res.json({
                success: false,
                message: "No file uploaded"
            });
        }

        const filePath = req.file.path;
        let jsonData = [];

        const isCsv =
            req.file.mimetype === "text/csv" ||
            req.file.mimetype === "application/vnd.ms-excel" ||
            req.file.originalname.toLowerCase().endsWith(".csv");

        if (isCsv) {
            jsonData = await csv().fromFile(filePath);
        } else {
            jsonData = JSON.parse(
                fs.readFileSync(filePath, "utf-8")
            );
        }

        let inserted = 0;
        let updated = 0;

        for (const item of jsonData) {

            // SKU REQUIRED
            if (!item.sku) {
                console.log(`SKU missing for ${item.name}`);
                continue;
            }

            let uploadedImages = [];

            if (item.image) {

                const images = item.image
                    .split(",")
                    .map((i) => i.trim());

                for (let img of images) {
                    try {

                        const result =
                            await cloudinary.uploader.upload(img, {
                                resource_type: "image",
                            });

                        uploadedImages.push(
                            result.secure_url
                        );

                    } catch (err) {
                        console.log(
                            "Image Upload Error:",
                            img
                        );
                    }
                }
            }

            const parsedSizes = parseBulkSizes(item.sizes);

            // let parsedItemDetails = [];

            // try {

            //     parsedItemDetails = item.itemDetails
            //         ? JSON.parse(item.itemDetails)
            //             .filter(
            //                 d =>
            //                     d.title?.trim() &&
            //                     d.value?.trim()
            //             )
            //         : [];

            // } catch (e) {

            //     console.log(
            //         `Invalid itemDetails for SKU ${item.sku}`
            //     );

            // }

            const parsedItemDetails = parseItemDetailsField(item.itemDetails);

            const productData = {
                sku: item.sku.trim().toUpperCase(),
                slug: generateSeoSlug(        // ✅ ADD THIS
                    item.name,
                    item.category,
                    item.subCategory,
                    item.sku.trim().toUpperCase()
                ),
                name: item.name,
                description: item.description,
                detailedDescription: item.detailedDescription || "",
                itemDetails: parsedItemDetails,
                price: Number(item.price),

                discountPrice:
                    item.discountPrice
                        ? Number(item.discountPrice)
                        : 0,

                // discountActive:
                //     item.discountPrice &&
                //     Number(item.discountPrice) > 0,
                discountActive: item.discountPrice && Number(item.discountPrice) > 0 ? true : false,

                category: item.category,
                subCategory: item.subCategory,

                bestseller:
                    String(item.bestseller).toLowerCase() ===
                    "true",

                sizes: parsedSizes,

                color: normalizeColorInput(
                    item.color
                ),

                image: uploadedImages,

                date: Date.now(),
            };

            const existing =
                await productModel.findOne({
                    sku: item.sku.trim().toUpperCase(),
                });

            if (existing && uploadedImages.length === 0) {
                productData.image = existing.image;
            }

            if (existing) {

                await productModel.updateOne(
                    {
                        sku: item.sku.trim().toUpperCase(),
                    },
                    {
                        $set: productData,
                    }
                );

                updated++;

            } else {

                await productModel.create(
                    productData
                );

                inserted++;
            }
        }

        fs.unlinkSync(filePath);

        return res.json({
            success: true,
            message: `${inserted} new products added, ${updated} products updated`,
            inserted,
            updated,
        });

    } catch (error) {

        console.log(error);

        return res.json({
            success: false,
            message: error.message,
        });
    }
};


// BULK UPLOAD WITH ZIP

const bulkUploadZipProducts = async (req, res) => {
    try {

        if (!req.files || !req.files.csv || !req.files.images) {
            return res.json({
                success: false,
                message: "CSV and ZIP are required"
            });
        }

        const csvPath = req.files.csv[0].path;
        const zipPath = req.files.images[0].path;

        const extractDir = "temp/images";

        await fs.ensureDir(extractDir);

        await fs
            .createReadStream(zipPath)
            .pipe(
                unzipper.Extract({
                    path: extractDir
                })
            )
            .promise();

        const products = await csv().fromFile(csvPath);

        let inserted = 0;
        let updated = 0;

        for (const item of products) {

            if (!item.sku) {
                console.log(`SKU missing for ${item.name}`);
                continue;
            }

            let uploadedImages = [];

            const imageFilenames = item.image
                ? item.image.split(",")
                : [];

            for (let filename of imageFilenames) {

                filename = filename.trim();

                const localPath = path.join(
                    extractDir,
                    filename
                );

                if (fs.existsSync(localPath)) {

                    try {

                        const uploaded =
                            await cloudinary.uploader.upload(
                                localPath,
                                {
                                    resource_type: "image",
                                    folder: "bulk_upload"
                                }
                            );

                        uploadedImages.push(
                            uploaded.secure_url
                        );

                    } catch (err) {

                        console.log(
                            "Upload failed:",
                            filename,
                            err.message
                        );

                    }
                }
            }

            const parsedSizes =
                parseBulkSizes(item.sizes);

            // let parsedItemDetails = [];

            // try {

            //     parsedItemDetails = item.itemDetails
            //         ? JSON.parse(item.itemDetails)
            //             .filter(
            //                 d =>
            //                     d.title?.trim() &&
            //                     d.value?.trim()
            //             )
            //         : [];

            // } catch (e) {

            //     console.log(
            //         `Invalid itemDetails for SKU ${item.sku}`
            //     );

            // }

            const parsedItemDetails =
                parseItemDetailsField(item.itemDetails);

            const productData = {

                sku: item.sku.trim().toUpperCase(),
                slug: generateSeoSlug(        // ✅ ADD THIS
                    item.name,
                    item.category,
                    item.subCategory,
                    item.sku.trim().toUpperCase()
                ),

                name: item.name,

                description: item.description,

                detailedDescription:
                    item.detailedDescription || "",

                itemDetails: parsedItemDetails,

                price: Number(item.price),

                discountPrice:
                    item.discountPrice
                        ? Number(item.discountPrice)
                        : 0,

                discountActive:
                    item.discountPrice &&
                        Number(item.discountPrice) > 0
                        ? true
                        : false,

                category: item.category,

                subCategory: item.subCategory,

                bestseller:
                    String(item.bestseller)
                        .toLowerCase() === "true",

                sizes: parsedSizes,

                color:
                    normalizeColorInput(
                        item.color
                    ),

                image: uploadedImages,

                date: Date.now(),
            };

            const existing =
                await productModel.findOne({
                    sku: productData.sku
                });

            if (existing) {

                // image preserve
                if (
                    uploadedImages.length === 0
                ) {
                    productData.image =
                        existing.image;
                }

                await productModel.updateOne(
                    {
                        sku: productData.sku
                    },
                    {
                        $set: productData
                    }
                );

                updated++;

            } else {

                await productModel.create(
                    productData
                );

                inserted++;
            }
        }

        fs.unlinkSync(csvPath);
        fs.unlinkSync(zipPath);

        await fs.remove(extractDir);

        return res.json({
            success: true,
            message: `${inserted} new products added, ${updated} products updated`,
            inserted,
            updated
        });

    } catch (err) {

        console.log(err);

        return res.json({
            success: false,
            message: err.message
        });
    }
};


const getProductBySlug = async (req, res) => {
    try {

        const { slug } = req.params;

        const product = await productModel.findOne({
            slug
        });

        console.log("PRODUCT =", product);

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            product
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

const getProductBySku = async (req, res) => {
    try {

        const product = await productModel.findOne({
            sku: req.params.sku.toUpperCase()
        });

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            product
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export { listProducts, addProduct, removeProduct, singleProduct, updateProduct, bulkUploadProducts, bulkUploadZipProducts, getProductBySlug, getProductBySku }


