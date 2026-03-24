
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// // import { assets } from "../assets/assets";
// import { backendUrl } from "../../App";
// import { assets } from "../../assets/assets";

// const UpdateProduct = ({ token }) => {
//     const { id } = useParams();

//     // IMAGE STATES
//     const [image1, setImage1] = useState(null);
//     const [image2, setImage2] = useState(null);
//     const [image3, setImage3] = useState(null);
//     const [image4, setImage4] = useState(null);
//     const [image5, setImage5] = useState(null);

//     const [existingImages, setExistingImages] = useState([]);

//     // PRODUCT FIELDS
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [detailedDescription, setDetailedDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [discountPrice, setDiscountPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestseller, setBestseller] = useState(false);

//     // ✅ Colors
//     const [colors, setColors] = useState([]);
//     const [newColorName, setNewColorName] = useState("");
//     const [newColorHex, setNewColorHex] = useState("#000000");
//     const [colorInputMode, setColorInputMode] = useState("both"); // "both", "nameOnly", "hexOnly"

//     // ✅ NEW: Size type selector
//     const [sizeType, setSizeType] = useState("standard");

//     // ✅ Standard sizes with custom price option
//     const [standardSizes, setStandardSizes] = useState({
//         XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//         S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//         M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//         L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//         XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//         XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//         "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false }
//     });
//     const [enabledStandardSizes, setEnabledStandardSizes] = useState([]);

//     // ✅ NEW: Inch-based sizes with custom price option
//     const [inchSizes, setInchSizes] = useState([]);
//     const [newInchSize, setNewInchSize] = useState("");
//     const [newInchMultiplier, setNewInchMultiplier] = useState(1.0);
//     const [newInchStock, setNewInchStock] = useState(0);
//     const [newInchCustomPrice, setNewInchCustomPrice] = useState("");
//     const [newInchUseCustomPrice, setNewInchUseCustomPrice] = useState(false);

//     // FETCH PRODUCT DATA
//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await axios.post(backendUrl + "/api/product/single", {
//                     productId: id,
//                 });

//                 if (response.data.success) {
//                     const p = response.data.product;

//                     setName(p.name);
//                     setDescription(p.description);
//                     setDetailedDescription(p.detailedDescription);
//                     setPrice(p.price);
//                     setDiscountPrice(p.discountPrice || "");
//                     setCategory(p.category);
//                     setSubCategory(p.subCategory);
//                     setBestseller(p.bestseller);
//                     setExistingImages(p.image);

//                     // ✅ Load colors
//                     if (p.color && p.color.length > 0) {
//                         const formattedColors = p.color.map(colorItem => {
//                             if (typeof colorItem === 'string') {
//                                 return { name: colorItem, hex: '#808080' };
//                             }
//                             return { name: colorItem.name, hex: colorItem.hex };
//                         });
//                         setColors(formattedColors);
//                     }

//                     // ✅ Load sizes (detect type and format)
//                     if (p.sizes && p.sizes.length > 0) {
//                         // Detect if standard or inch-based
//                         const firstSize = p.sizes[0];
//                         const isStandard = typeof firstSize === 'string'
//                             ? ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].includes(firstSize)
//                             : ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].includes(firstSize.size);

//                         if (isStandard) {
//                             // Standard sizes format
//                             setSizeType("standard");
//                             const enabledList = [];
//                             const newSizeObj = { ...standardSizes };

//                             p.sizes.forEach(sizeItem => {
//                                 const sizeLabel = typeof sizeItem === 'string' ? sizeItem : sizeItem.size;
//                                 enabledList.push(sizeLabel);
//                                 newSizeObj[sizeLabel] = {
//                                     multiplier: (typeof sizeItem === 'object' ? sizeItem.priceMultiplier : 1) || 1,
//                                     stock: (typeof sizeItem === 'object' ? sizeItem.stock : 0) || 0,
//                                     customPrice: (typeof sizeItem === 'object' ? sizeItem.customPrice : "") || "",
//                                     useCustomPrice: (typeof sizeItem === 'object' ? sizeItem.useCustomPrice : false) || false
//                                 };
//                             });

//                             setEnabledStandardSizes(enabledList);
//                             setStandardSizes(newSizeObj);
//                         } else {
//                             // Inch-based sizes format
//                             setSizeType("inch");
//                             const inchArray = p.sizes.map(sizeItem => ({
//                                 size: typeof sizeItem === 'string' ? sizeItem : sizeItem.size,
//                                 multiplier: (typeof sizeItem === 'object' ? sizeItem.priceMultiplier : 1) || 1,
//                                 stock: (typeof sizeItem === 'object' ? sizeItem.stock : 0) || 0,
//                                 customPrice: (typeof sizeItem === 'object' ? sizeItem.customPrice : "") || "",
//                                 useCustomPrice: (typeof sizeItem === 'object' ? sizeItem.useCustomPrice : false) || false
//                             }));
//                             setInchSizes(inchArray);
//                         }
//                     }
//                 }
//             } catch (error) {
//                 toast.error("Failed to load product");
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     // ✅ Color handlers
//     const handleAddColor = () => {
//         // Validate based on input mode
//         if (colorInputMode === "both") {
//             if (!newColorName.trim()) {
//                 toast.error("Please enter color name");
//                 return;
//             }
//             if (!newColorHex) {
//                 toast.error("Please select a color");
//                 return;
//             }
//         } else if (colorInputMode === "nameOnly") {
//             if (!newColorName.trim()) {
//                 toast.error("Please enter color name");
//                 return;
//             }
//         } else if (colorInputMode === "hexOnly") {
//             if (!newColorHex) {
//                 toast.error("Please select a color");
//                 return;
//             }
//         }

//         // Check for duplicates
//         const colorToAdd = {
//             name: newColorName.trim() || `Color-${colors.length + 1}`,
//             hex: newColorHex || '#808080'
//         };

//         if (colors.some(c => c.name.toLowerCase() === colorToAdd.name.toLowerCase())) {
//             toast.error("This color name already exists");
//             return;
//         }

//         setColors([...colors, colorToAdd]);
//         setNewColorName("");
//         setNewColorHex("#000000");
//         toast.success("Color added!");
//     };

//     const handleRemoveColor = (colorName) => {
//         setColors(colors.filter(c => c.name !== colorName));
//     };

//     const handleEditColor = (index, field, value) => {
//         const updated = [...colors];
//         updated[index][field] = value;
//         setColors(updated);
//     };

//     // ✅ Standard size handlers
//     const handleStandardSizeToggle = (sizeKey) => {
//         setEnabledStandardSizes(prev =>
//             prev.includes(sizeKey)
//                 ? prev.filter(s => s !== sizeKey)
//                 : [...prev, sizeKey]
//         );
//     };

//     const handleStandardSizeMultiplierChange = (sizeKey, value) => {
//         setStandardSizes(prev => ({
//             ...prev,
//             [sizeKey]: {
//                 ...prev[sizeKey],
//                 multiplier: parseFloat(value) || 1
//             }
//         }));
//     };

//     const handleStandardSizeStockChange = (sizeKey, value) => {
//         setStandardSizes(prev => ({
//             ...prev,
//             [sizeKey]: {
//                 ...prev[sizeKey],
//                 stock: parseInt(value) || 0
//             }
//         }));
//     };

//     const handleStandardSizeCustomPriceChange = (sizeKey, value) => {
//         setStandardSizes(prev => ({
//             ...prev,
//             [sizeKey]: {
//                 ...prev[sizeKey],
//                 customPrice: value
//             }
//         }));
//     };

//     const handleStandardSizeToggleCustomPrice = (sizeKey) => {
//         setStandardSizes(prev => ({
//             ...prev,
//             [sizeKey]: {
//                 ...prev[sizeKey],
//                 useCustomPrice: !prev[sizeKey].useCustomPrice
//             }
//         }));
//     };

//     // ✅ Inch size handlers
//     const handleAddInchSize = () => {
//         if (!newInchSize.trim()) {
//             toast.error("Please enter inch size");
//             return;
//         }

//         if (inchSizes.some(s => s.size === newInchSize)) {
//             toast.error("This inch size already exists");
//             return;
//         }

//         setInchSizes([...inchSizes, {
//             size: newInchSize,
//             multiplier: newInchMultiplier,
//             stock: newInchStock,
//             customPrice: newInchCustomPrice,
//             useCustomPrice: newInchUseCustomPrice
//         }]);

//         setNewInchSize("");
//         setNewInchMultiplier(1.0);
//         setNewInchStock(0);
//         setNewInchCustomPrice("");
//         setNewInchUseCustomPrice(false);
//         toast.success("Inch size added!");
//     };

//     const handleRemoveInchSize = (sizeLabel) => {
//         setInchSizes(inchSizes.filter(s => s.size !== sizeLabel));
//     };

//     const handleInchSizeMultiplierChange = (index, value) => {
//         const updated = [...inchSizes];
//         updated[index].multiplier = parseFloat(value) || 1;
//         setInchSizes(updated);
//     };

//     const handleInchSizeStockChange = (index, value) => {
//         const updated = [...inchSizes];
//         updated[index].stock = parseInt(value) || 0;
//         setInchSizes(updated);
//     };

//     const handleInchSizeCustomPriceChange = (index, value) => {
//         const updated = [...inchSizes];
//         updated[index].customPrice = value;
//         setInchSizes(updated);
//     };

//     const handleInchSizeToggleCustomPrice = (index) => {
//         const updated = [...inchSizes];
//         updated[index].useCustomPrice = !updated[index].useCustomPrice;
//         setInchSizes(updated);
//     };

//     // ✅ Calculate final price (either custom or multiplier-based)
//     const calculateFinalPrice = (sizeData) => {
//         if (sizeData.useCustomPrice && sizeData.customPrice) {
//             return parseFloat(sizeData.customPrice);
//         }
//         return parseFloat(price || 0) * sizeData.multiplier;
//     };

//     // ✅ Format sizes for submission
//     const formatSizesForSubmit = () => {
//         if (sizeType === "standard") {
//             return enabledStandardSizes.map(sizeKey => ({
//                 size: sizeKey,
//                 priceMultiplier: standardSizes[sizeKey].multiplier,
//                 stock: standardSizes[sizeKey].stock,
//                 customPrice: standardSizes[sizeKey].customPrice,
//                 useCustomPrice: standardSizes[sizeKey].useCustomPrice
//             }));
//         } else {
//             return inchSizes.map(sizeObj => ({
//                 size: sizeObj.size,
//                 priceMultiplier: sizeObj.multiplier,
//                 stock: sizeObj.stock,
//                 customPrice: sizeObj.customPrice,
//                 useCustomPrice: sizeObj.useCustomPrice
//             }));
//         }
//     };

//     // UPDATE PRODUCT
//     const updateHandler = async (e) => {
//         e.preventDefault();

//         try {
//             if (sizeType === "standard" && enabledStandardSizes.length === 0) {
//                 return toast.error("Please select at least one standard size");
//             }

//             if (sizeType === "inch" && inchSizes.length === 0) {
//                 return toast.error("Please add at least one inch-based size");
//             }

//             if (colors.length === 0) {
//                 return toast.error("Please add at least one color");
//             }

//             const formData = new FormData();

//             formData.append("productId", id);
//             formData.append("name", name);
//             formData.append("description", description);
//             formData.append("detailedDescription", detailedDescription);
//             formData.append("price", price);
//             formData.append("discountPrice", discountPrice || "");
//             formData.append("category", category);
//             formData.append("subCategory", subCategory);
//             formData.append("bestseller", bestseller);

//             formData.append("sizes", JSON.stringify(formatSizesForSubmit()));
//             formData.append("color", JSON.stringify(colors));

//             if (image1) formData.append("image1", image1);
//             if (image2) formData.append("image2", image2);
//             if (image3) formData.append("image3", image3);
//             if (image4) formData.append("image4", image4);
//             if (image5) formData.append("image5", image5);

//             const response = await axios.post(
//                 backendUrl + "/api/product/update",
//                 formData,
//                 { headers: { token } }
//             );

//             if (response.data.success) {
//                 toast.success("Product updated successfully!");
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (err) {
//             console.log(err);
//             toast.error("Update failed!");
//         }
//     };

//     return (
//         <form onSubmit={updateHandler} className="flex flex-col w-full gap-4">
//             <h2 className="text-xl font-semibold mb-2">Update Product</h2>

//             {/* EXISTING IMAGES */}
//             <div>
//                 <p className="mb-2">Existing Images</p>
//                 <div className="flex gap-2 flex-wrap">
//                     {existingImages.map((img, i) => (
//                         <img
//                             key={i}
//                             src={img}
//                             alt=""
//                             className="w-24 h-24 rounded object-cover border"
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* UPLOAD NEW IMAGES */}
//             <div>
//                 <p className="mb-2">Upload New Images</p>

//                 <div className="flex gap-4 flex-wrap">

//                     {[image1, image2, image3, image4, image5].map((img, index) => {
//                         const setter = [setImage1, setImage2, setImage3, setImage4, setImage5][index];
//                         const inputId = "updImage" + (index + 1);

//                         return (
//                             <label key={index} htmlFor={inputId} className="flex flex-col items-center">
//                                 <img
//                                     className="cursor-pointer border-2 border-dashed rounded-lg w-24 h-24 object-cover hover:border-black transition"
//                                     src={img ? URL.createObjectURL(img) : assets.upload_area}
//                                     alt=""
//                                 />
//                                 {img && (
//                                     <p className="text-xs mt-1 w-24 text-center truncate">
//                                         {img.name}
//                                     </p>
//                                 )}
//                                 <input
//                                     type="file"
//                                     id={inputId}
//                                     hidden
//                                     onChange={(e) => setter(e.target.files[0])}
//                                 />
//                             </label>
//                         );
//                     })}

//                 </div>
//             </div>

//             {/* NAME */}
//             <div className="w-full">
//                 <p>Product Name</p>
//                 <input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full max-w-[500px] px-3 py-2 border"
//                     required
//                 />
//             </div>

//             {/* DESCRIPTION */}
//             <div className="w-full">
//                 <p>Description</p>
//                 <textarea
//                     className="w-full max-w-[500px] px-3 py-2 border"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//             </div>

//             {/* DETAILED DESCRIPTION */}
//             <div className="w-full">
//                 <p>Detailed Description</p>
//                 <ReactQuill
//                     theme="snow"
//                     value={detailedDescription}
//                     onChange={setDetailedDescription}
//                     className="bg-white max-w-[700px]"
//                     style={{ height: "250px", marginBottom: "40px" }}
//                 />
//             </div>

//             {/* CATEGORY */}
//             <div>
//                 <p>Category</p>
//                 <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="px-3 py-2 border"
//                 >
//                     <option>Men</option>
//                     <option>Women</option>
//                     <option>Others</option>
//                 </select>
//             </div>

//             {/* SUBCATEGORY */}
//             <div>
//                 <p>Sub Category</p>
//                 <select
//                     value={subCategory}
//                     onChange={(e) => setSubCategory(e.target.value)}
//                     className="px-3 py-2 border"
//                 >
//                     {category === "Others" ? (
//                         <>
//                             <option>Chair Cover</option>
//                             <option>Cushion Cover</option>
//                             <option>Aprons</option>
//                             <option>Desk Mat</option>
//                             <option>Pillow</option>
//                         </>
//                     ) : (
//                         <>
//                             <option>Topwear</option>
//                             <option>Bottomwear</option>
//                             <option>Winterwear</option>
//                         </>
//                     )}
//                 </select>
//             </div>

//             {/* PRICE */}
//             <div>
//                 <p>Price (Base)</p>
//                 <input
//                     type="number"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     className="px-3 py-2 border"
//                     required
//                 />
//                 <p className='text-xs text-gray-500 mt-1'>Base price before size multipliers (or use custom price per size)</p>
//             </div>

//             {/* DISCOUNT PRICE */}
//             <div>
//                 <p>Discount Price (optional)</p>
//                 <input
//                     type="number"
//                     value={discountPrice}
//                     onChange={(e) => setDiscountPrice(e.target.value)}
//                     className="px-3 py-2 border"
//                     placeholder="Enter discount price"
//                 />
//             </div>

//             {/* ✅ CUSTOM COLORS - FLEXIBLE INPUT */}
//             <div className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200">
//                 <p className='mb-4 font-medium text-gray-700'>Product Colors (Flexible)</p>

//                 {/* Color Input Mode Selector */}
//                 <div className="mb-4 p-3 bg-white rounded-lg border border-gray-300">
//                     <p className='text-sm font-medium text-gray-700 mb-2'>Color Input Mode:</p>
//                     <div className="flex gap-3 flex-wrap">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input
//                                 type="radio"
//                                 value="both"
//                                 checked={colorInputMode === "both"}
//                                 onChange={(e) => setColorInputMode(e.target.value)}
//                                 className="w-4 h-4"
//                             />
//                             <span className="text-sm">Name + Hex</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input
//                                 type="radio"
//                                 value="nameOnly"
//                                 checked={colorInputMode === "nameOnly"}
//                                 onChange={(e) => setColorInputMode(e.target.value)}
//                                 className="w-4 h-4"
//                             />
//                             <span className="text-sm">Name Only</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input
//                                 type="radio"
//                                 value="hexOnly"
//                                 checked={colorInputMode === "hexOnly"}
//                                 onChange={(e) => setColorInputMode(e.target.value)}
//                                 className="w-4 h-4"
//                             />
//                             <span className="text-sm">Hex Only</span>
//                         </label>
//                     </div>
//                 </div>

//                 {/* Add Color Section */}
//                 <div className="flex gap-2 mb-4 flex-wrap items-end p-3 bg-white rounded-lg border border-gray-300">
//                     {(colorInputMode === "both" || colorInputMode === "nameOnly") && (
//                         <div>
//                             <label className='text-sm text-gray-600 font-medium'>Color Name</label>
//                             <input
//                                 type="text"
//                                 value={newColorName}
//                                 onChange={(e) => setNewColorName(e.target.value)}
//                                 placeholder="e.g., Navy Blue, Red, Green"
//                                 className='border p-2 rounded mt-1 w-48'
//                             />
//                         </div>
//                     )}

//                     {(colorInputMode === "both" || colorInputMode === "hexOnly") && (
//                         <div>
//                             <label className='text-sm text-gray-600 font-medium'>Color Picker</label>
//                             <div className="flex gap-2 items-center mt-1">
//                                 <input
//                                     type="color"
//                                     value={newColorHex}
//                                     onChange={(e) => setNewColorHex(e.target.value)}
//                                     className='w-20 h-10 border rounded cursor-pointer'
//                                     title={newColorHex}
//                                 />
//                                 <input
//                                     type="text"
//                                     value={newColorHex}
//                                     onChange={(e) => setNewColorHex(e.target.value)}
//                                     placeholder="#000000"
//                                     className='border p-2 rounded w-28'
//                                     pattern="^#[0-9A-Fa-f]{6}$"
//                                 />
//                             </div>
//                         </div>
//                     )}

//                     <button
//                         type="button"
//                         onClick={handleAddColor}
//                         className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
//                     >
//                         + Add Color
//                     </button>
//                 </div>

//                 {/* Display Added Colors */}
//                 <div className="space-y-2">
//                     <p className='text-sm font-medium text-gray-700'>Added Colors ({colors.length}):</p>

//                     {colors.length === 0 ? (
//                         <p className='text-sm text-gray-500 italic p-3 bg-white rounded border border-gray-200'>
//                             No colors added yet. Add colors using the form above.
//                         </p>
//                     ) : (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                             {colors.map((color, index) => (
//                                 <div
//                                     key={index}
//                                     className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 transition"
//                                 >
//                                     {/* Color Preview */}
//                                     <div className="flex-shrink-0">
//                                         <input
//                                             type="color"
//                                             value={color.hex}
//                                             onChange={(e) => handleEditColor(index, 'hex', e.target.value)}
//                                             className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer"
//                                             title="Click to edit color"
//                                         />
//                                     </div>

//                                     {/* Color Details */}
//                                     <div className="flex-grow">
//                                         <input
//                                             type="text"
//                                             value={color.name}
//                                             onChange={(e) => handleEditColor(index, 'name', e.target.value)}
//                                             className="w-full font-medium text-sm border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none px-1 py-0.5"
//                                             placeholder="Color name"
//                                         />
//                                         <input
//                                             type="text"
//                                             value={color.hex}
//                                             onChange={(e) => handleEditColor(index, 'hex', e.target.value)}
//                                             className="w-full text-xs text-gray-500 border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none px-1 py-0.5 mt-1"
//                                             pattern="^#[0-9A-Fa-f]{6}$"
//                                             placeholder="#000000"
//                                         />
//                                     </div>

//                                     {/* Remove Button */}
//                                     <button
//                                         type="button"
//                                         onClick={() => handleRemoveColor(color.name)}
//                                         className='flex-shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition'
//                                         title="Remove color"
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Quick Color Presets */}
//                 <div className="mt-4 p-3 bg-white rounded-lg border border-gray-300">
//                     <p className='text-sm font-medium text-gray-700 mb-2'>Quick Add Presets:</p>
//                     <div className="flex gap-2 flex-wrap">
//                         {[
//                             { name: "Black", hex: "#000000" },
//                             { name: "White", hex: "#FFFFFF" },
//                             { name: "Red", hex: "#FF0000" },
//                             { name: "Blue", hex: "#0000FF" },
//                             { name: "Green", hex: "#00FF00" },
//                             { name: "Yellow", hex: "#FFFF00" },
//                             { name: "Navy Blue", hex: "#000080" },
//                             { name: "Brown", hex: "#8B4513" },
//                             { name: "Pink", hex: "#FFC0CB" },
//                             { name: "Purple", hex: "#800080" },
//                             { name: "Orange", hex: "#FFA500" },
//                             { name: "Gray", hex: "#808080" }
//                         ].map((preset, idx) => (
//                             <button
//                                 key={idx}
//                                 type="button"
//                                 onClick={() => {
//                                     if (!colors.some(c => c.name.toLowerCase() === preset.name.toLowerCase())) {
//                                         setColors([...colors, preset]);
//                                         toast.success(`${preset.name} added!`);
//                                     } else {
//                                         toast.info(`${preset.name} already exists`);
//                                     }
//                                 }}
//                                 className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50 transition text-sm"
//                                 title={`Add ${preset.name} (${preset.hex})`}
//                             >
//                                 <div
//                                     className="w-4 h-4 rounded border border-gray-300"
//                                     style={{ backgroundColor: preset.hex }}
//                                 />
//                                 <span>{preset.name}</span>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ✅ SIZE TYPE SELECTOR */}
//             <div className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200">
//                 <p className='mb-4 font-medium text-gray-700'>Size Type</p>

//                 <div className="flex gap-4 mb-4">
//                     <label className="flex items-center gap-2 cursor-pointer">
//                         <input
//                             type="radio"
//                             value="standard"
//                             checked={sizeType === "standard"}
//                             onChange={(e) => setSizeType(e.target.value)}
//                             className="w-4 h-4"
//                         />
//                         <span className="text-sm">Standard Sizes (XS, S, M, L, XL, XXL, 3XL)</span>
//                     </label>

//                     <label className="flex items-center gap-2 cursor-pointer">
//                         <input
//                             type="radio"
//                             value="inch"
//                             checked={sizeType === "inch"}
//                             onChange={(e) => setSizeType(e.target.value)}
//                             className="w-4 h-4"
//                         />
//                         <span className="text-sm">Inch-Based Sizes (14x14, 18x18, etc.)</span>
//                     </label>
//                 </div>
//             </div>

//             {/* ✅ STANDARD SIZES */}
//             {sizeType === "standard" && (
//                 <div className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <p className='mb-4 font-medium text-gray-700'>Product Sizes (Standard)</p>

//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                         {Object.keys(standardSizes).map((sizeKey) => (
//                             <div key={sizeKey} className={`p-3 border-2 rounded-lg transition-all ${enabledStandardSizes.includes(sizeKey)
//                                 ? 'border-blue-500 bg-blue-50'
//                                 : 'border-gray-200 bg-white'
//                                 }`}>

//                                 <div className='flex items-center gap-2 mb-3'>
//                                     <input
//                                         type="checkbox"
//                                         id={`size-${sizeKey}`}
//                                         checked={enabledStandardSizes.includes(sizeKey)}
//                                         onChange={() => handleStandardSizeToggle(sizeKey)}
//                                         className='w-5 h-5 cursor-pointer'
//                                     />
//                                     <label htmlFor={`size-${sizeKey}`} className='font-semibold text-lg cursor-pointer'>
//                                         Size {sizeKey}
//                                     </label>
//                                 </div>

//                                 {enabledStandardSizes.includes(sizeKey) && (
//                                     <div className='space-y-3'>
//                                         {/* Toggle between multiplier and custom price */}
//                                         <div className='flex items-center gap-2 p-2 bg-white rounded border'>
//                                             <input
//                                                 type="checkbox"
//                                                 id={`custom-price-${sizeKey}`}
//                                                 checked={standardSizes[sizeKey].useCustomPrice}
//                                                 onChange={() => handleStandardSizeToggleCustomPrice(sizeKey)}
//                                                 className='w-4 h-4 cursor-pointer'
//                                             />
//                                             <label htmlFor={`custom-price-${sizeKey}`} className='text-sm font-medium cursor-pointer'>
//                                                 Use Custom Price
//                                             </label>
//                                         </div>

//                                         {standardSizes[sizeKey].useCustomPrice ? (
//                                             // Custom Price Input
//                                             <div>
//                                                 <label className='text-sm text-gray-600 font-medium'>Custom Price (₹)</label>
//                                                 <input
//                                                     type="number"
//                                                     step="0.01"
//                                                     min="0"
//                                                     value={standardSizes[sizeKey].customPrice}
//                                                     onChange={(e) => handleStandardSizeCustomPriceChange(sizeKey, e.target.value)}
//                                                     className='w-full px-2 py-1 border border-gray-300 rounded'
//                                                     placeholder='Enter custom price'
//                                                 />
//                                                 <p className='text-xs text-green-600 mt-1 font-medium'>
//                                                     Final price: ₹{standardSizes[sizeKey].customPrice || '0'}
//                                                 </p>
//                                             </div>
//                                         ) : (
//                                             // Multiplier Input
//                                             <div>
//                                                 <label className='text-sm text-gray-600'>Price Multiplier</label>
//                                                 <input
//                                                     type="number"
//                                                     step="0.1"
//                                                     min="0.5"
//                                                     max="2"
//                                                     value={standardSizes[sizeKey].multiplier}
//                                                     onChange={(e) => handleStandardSizeMultiplierChange(sizeKey, e.target.value)}
//                                                     className='w-full px-2 py-1 border border-gray-300 rounded'
//                                                     placeholder='1.0'
//                                                 />
//                                                 <p className='text-xs text-gray-500 mt-1'>
//                                                     Final price: ₹{calculateFinalPrice(standardSizes[sizeKey]).toFixed(2)}
//                                                 </p>
//                                             </div>
//                                         )}

//                                         <div>
//                                             <label className='text-sm text-gray-600'>Stock Quantity</label>
//                                             <input
//                                                 type="number"
//                                                 min="0"
//                                                 value={standardSizes[sizeKey].stock}
//                                                 onChange={(e) => handleStandardSizeStockChange(sizeKey, e.target.value)}
//                                                 className='w-full px-2 py-1 border border-gray-300 rounded'
//                                                 placeholder='0'
//                                             />
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {enabledStandardSizes.length > 0 && (
//                         <div className='mt-4 p-3 bg-blue-100 rounded-lg'>
//                             <p className='text-sm font-medium text-blue-900'>Selected Sizes:</p>
//                             <div className='flex gap-2 mt-2 flex-wrap'>
//                                 {enabledStandardSizes.map(sizeKey => (
//                                     <span key={sizeKey} className='px-3 py-1 bg-blue-500 text-white text-sm rounded-full'>
//                                         {sizeKey} - ₹{calculateFinalPrice(standardSizes[sizeKey]).toFixed(2)}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             )}

//             {/* ✅ INCH-BASED SIZES */}
//             {sizeType === "inch" && (
//                 <div className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <p className='mb-4 font-medium text-gray-700'>Product Sizes (Inch-Based)</p>

//                     <div className="flex gap-2 mb-4 flex-wrap items-end">
//                         <div>
//                             <label className='text-sm text-gray-600'>Size (Inch)</label>
//                             <input
//                                 type="text"
//                                 value={newInchSize}
//                                 onChange={(e) => setNewInchSize(e.target.value)}
//                                 placeholder="e.g., 14x14, 18x18"
//                                 className='border p-2 rounded mt-1'
//                             />
//                         </div>

//                         <div>
//                             <label className='text-sm text-gray-600'>Stock</label>
//                             <input
//                                 type="number"
//                                 min="0"
//                                 value={newInchStock}
//                                 onChange={(e) => setNewInchStock(parseInt(e.target.value) || 0)}
//                                 className='border p-2 rounded mt-1 w-20'
//                                 placeholder='0'
//                             />
//                         </div>

//                         <div className='flex items-center gap-2 p-2 border rounded bg-white'>
//                             <input
//                                 type="checkbox"
//                                 id="new-inch-custom-price"
//                                 checked={newInchUseCustomPrice}
//                                 onChange={(e) => setNewInchUseCustomPrice(e.target.checked)}
//                                 className='w-4 h-4 cursor-pointer'
//                             />
//                             <label htmlFor="new-inch-custom-price" className='text-sm cursor-pointer'>
//                                 Custom Price
//                             </label>
//                         </div>

//                         {newInchUseCustomPrice ? (
//                             <div>
//                                 <label className='text-sm text-gray-600'>Custom Price (₹)</label>
//                                 <input
//                                     type="number"
//                                     step="0.01"
//                                     min="0"
//                                     value={newInchCustomPrice}
//                                     onChange={(e) => setNewInchCustomPrice(e.target.value)}
//                                     className='border p-2 rounded mt-1 w-28'
//                                     placeholder='0.00'
//                                 />
//                             </div>
//                         ) : (
//                             <div>
//                                 <label className='text-sm text-gray-600'>Price Multiplier</label>
//                                 <input
//                                     type="number"
//                                     step="0.1"
//                                     min="0.5"
//                                     max="2"
//                                     value={newInchMultiplier}
//                                     onChange={(e) => setNewInchMultiplier(parseFloat(e.target.value) || 1)}
//                                     className='border p-2 rounded mt-1 w-24'
//                                     placeholder='1.0'
//                                 />
//                             </div>
//                         )}

//                         <button
//                             type="button"
//                             onClick={handleAddInchSize}
//                             className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
//                         >
//                             + Add Size
//                         </button>
//                     </div>

//                     <div className="flex flex-wrap gap-3 mb-4">
//                         {inchSizes.map((sizeObj, index) => (
//                             <div
//                                 key={index}
//                                 className="p-3 border-2 border-gray-300 rounded-lg bg-white"
//                             >
//                                 <div className="flex items-center justify-between gap-3 mb-2">
//                                     <span className="font-semibold">{sizeObj.size} Inch</span>
//                                     <button
//                                         type="button"
//                                         onClick={() => handleRemoveInchSize(sizeObj.size)}
//                                         className='text-red-500 text-sm hover:underline'
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>

//                                 <div className="space-y-2 text-sm">
//                                     {/* Toggle custom price */}
//                                     <div className='flex items-center gap-2 p-1.5 bg-gray-50 rounded'>
//                                         <input
//                                             type="checkbox"
//                                             id={`inch-custom-${index}`}
//                                             checked={sizeObj.useCustomPrice}
//                                             onChange={() => handleInchSizeToggleCustomPrice(index)}
//                                             className='w-4 h-4 cursor-pointer'
//                                         />
//                                         <label htmlFor={`inch-custom-${index}`} className='text-xs cursor-pointer font-medium'>
//                                             Use Custom Price
//                                         </label>
//                                     </div>

//                                     {sizeObj.useCustomPrice ? (
//                                         <div>
//                                             <label className='text-gray-600 font-medium'>Custom Price (₹)</label>
//                                             <input
//                                                 type="number"
//                                                 step="0.01"
//                                                 min="0"
//                                                 value={sizeObj.customPrice}
//                                                 onChange={(e) => handleInchSizeCustomPriceChange(index, e.target.value)}
//                                                 className='w-full px-2 py-1 border border-gray-300 rounded'
//                                                 placeholder='0.00'
//                                             />
//                                             <p className='text-xs text-green-600 mt-1 font-medium'>
//                                                 Final: ₹{sizeObj.customPrice || '0'}
//                                             </p>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <label className='text-gray-600'>Multiplier</label>
//                                             <input
//                                                 type="number"
//                                                 step="0.1"
//                                                 min="0.5"
//                                                 max="2"
//                                                 value={sizeObj.multiplier}
//                                                 onChange={(e) => handleInchSizeMultiplierChange(index, e.target.value)}
//                                                 className='w-full px-2 py-1 border border-gray-300 rounded'
//                                             />
//                                             <p className='text-xs text-gray-500 mt-1'>
//                                                 Final: ₹{calculateFinalPrice(sizeObj).toFixed(2)}
//                                             </p>
//                                         </div>
//                                     )}

//                                     <div>
//                                         <label className='text-gray-600'>Stock</label>
//                                         <input
//                                             type="number"
//                                             min="0"
//                                             value={sizeObj.stock}
//                                             onChange={(e) => handleInchSizeStockChange(index, e.target.value)}
//                                             className='w-full px-2 py-1 border border-gray-300 rounded'
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {inchSizes.length === 0 && (
//                         <p className='text-sm text-gray-500 italic'>No inch-based sizes added yet</p>
//                     )}

//                     {inchSizes.length > 0 && (
//                         <div className='p-3 bg-blue-100 rounded-lg'>
//                             <p className='text-sm font-medium text-blue-900'>Added Sizes:</p>
//                             <div className='flex gap-2 mt-2 flex-wrap'>
//                                 {inchSizes.map((sizeObj, idx) => (
//                                     <span key={idx} className='px-3 py-1 bg-blue-500 text-white text-sm rounded-full'>
//                                         {sizeObj.size}" - ₹{calculateFinalPrice(sizeObj).toFixed(2)}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             )}

//             {/* BESTSELLER */}
//             <div className="flex gap-2 mt-2">
//                 <input
//                     type="checkbox"
//                     checked={bestseller}
//                     onChange={() => setBestseller(!bestseller)}
//                     id="bestseller"
//                 />
//                 <label htmlFor="bestseller">Add to bestseller</label>
//             </div>

//             <button className="w-32 py-3 bg-black text-white rounded mt-3 hover:bg-gray-800">
//                 UPDATE PRODUCT
//             </button>
//         </form>
//     );
// };

// export default UpdateProduct;





// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { backendUrl } from "../../App";
// import { assets } from "../../assets/assets";

// /* ─── Google Fonts injection ─────────────────────────────── */
// const FontLink = () => (
//     <link
//         href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@600&display=swap"
//         rel="stylesheet"
//     />
// );

// /* ─── Colour presets ─────────────────────────────────────── */
// const PRESETS = [
//     { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
//     { name: "Red", hex: "#EF4444" }, { name: "Navy", hex: "#1E3A5F" },
//     { name: "Royal Blue", hex: "#3B82F6" }, { name: "Green", hex: "#166534" },
//     { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
//     { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" },
//     { name: "Brown", hex: "#92400E" }, { name: "Gray", hex: "#9CA3AF" },
// ];

// const INIT_STD = {
//     XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//     L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//     XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//     XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//     "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
// };

// /* ─── Image Lightbox ─────────────────────────────────────── */
// const Lightbox = ({ imgs, start, onClose }) => {
//     const [cur, setCur] = useState(start);
//     useEffect(() => {
//         const h = (e) => {
//             if (e.key === "Escape") onClose();
//             if (e.key === "ArrowLeft") setCur(p => Math.max(0, p - 1));
//             if (e.key === "ArrowRight") setCur(p => Math.min(imgs.length - 1, p + 1));
//         };
//         window.addEventListener("keydown", h);
//         return () => window.removeEventListener("keydown", h);
//     }, [imgs.length, onClose]);

//     return (
//         <div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
//             onClick={onClose}
//         >
//             <div className="relative flex flex-col items-center gap-4 max-w-[90vw]" onClick={e => e.stopPropagation()}>
//                 {/* Close */}
//                 <button
//                     onClick={onClose}
//                     className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-gray-800 shadow-lg hover:rotate-90 transition-transform z-10"
//                 >✕</button>

//                 <img src={imgs[cur]} alt="" className="max-w-[80vw] max-h-[72vh] rounded-xl object-contain shadow-2xl" />

//                 {cur > 0 && (
//                     <button onClick={() => setCur(p => p - 1)} className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white text-xl transition">‹</button>
//                 )}
//                 {cur < imgs.length - 1 && (
//                     <button onClick={() => setCur(p => p + 1)} className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white text-xl transition">›</button>
//                 )}

//                 {imgs.length > 1 && (
//                     <div className="flex gap-2">
//                         {imgs.map((img, i) => (
//                             <img key={i} src={img} alt="" onClick={() => setCur(i)}
//                                 className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition ${i === cur ? "border-white opacity-100" : "border-transparent opacity-50"}`}
//                             />
//                         ))}
//                     </div>
//                 )}
//                 <p className="text-white/60 text-xs">{cur + 1} / {imgs.length} &nbsp;·&nbsp; Press ← → to navigate · Esc to close</p>
//             </div>
//         </div>
//     );
// };

// /* ─── Section Card ───────────────────────────────────────── */
// const Card = ({ icon, title, subtitle, children, action }) => (
//     <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
//             <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-base flex-shrink-0">{icon}</div>
//                 <div>
//                     <h3 className="text-sm font-bold text-gray-900 leading-none">{title}</h3>
//                     {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
//                 </div>
//             </div>
//             {action}
//         </div>
//         <div className="p-6">{children}</div>
//     </div>
// );

// /* ─── Field Label ────────────────────────────────────────── */
// const Label = ({ children, required }) => (
//     <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
//         {children}{required && <span className="text-red-500 ml-0.5">*</span>}
//     </label>
// );

// /* ─── Input ──────────────────────────────────────────────── */
// const Input = ({ className = "", ...props }) => (
//     <input
//         className={`w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/5 transition ${className}`}
//         {...props}
//     />
// );

// /* ─── Select ─────────────────────────────────────────────── */
// const Sel = ({ className = "", ...props }) => (
//     <select
//         className={`w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 focus:outline-none focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/5 transition appearance-none cursor-pointer ${className}`}
//         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
//         {...props}
//     />
// );

// /* ─── Toggle Switch ──────────────────────────────────────── */
// const Toggle = ({ on, onChange, label }) => (
//     <div
//         className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition"
//         onClick={onChange}
//     >
//         <span className="text-sm font-medium text-gray-700">{label}</span>
//         <div className={`w-10 h-[22px] rounded-full relative transition-colors ${on ? "bg-gray-900" : "bg-gray-300"}`}>
//             <div className={`absolute top-[3px] w-4 h-4 bg-white rounded-full shadow transition-transform ${on ? "translate-x-5" : "translate-x-[3px]"}`} />
//         </div>
//     </div>
// );

// /* ═══════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════════════════════ */
// const UpdateProduct = ({ token }) => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     /* image states */
//     const [newImages, setNewImages] = useState([null, null, null, null, null]);
//     const [existingImages, setExisting] = useState([]);
//     const [lightbox, setLightbox] = useState(null); // { imgs, start }

//     /* basic fields */
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [detDesc, setDetDesc] = useState("");
//     const [price, setPrice] = useState("");
//     const [discPrice, setDiscPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCat] = useState("Topwear");
//     const [bestseller, setBest] = useState(false);

//     /* colors */
//     const [colors, setColors] = useState([]);
//     const [newCName, setNewCName] = useState("");
//     const [newCHex, setNewCHex] = useState("#000000");
//     const [colorMode, setColorMode] = useState("both");

//     /* sizes */
//     const [sizeType, setSizeType] = useState("standard");
//     const [stdSizes, setStdSizes] = useState(INIT_STD);
//     const [enabledSz, setEnabledSz] = useState([]);
//     const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState("");
//     const [niMult, setNiMult] = useState(1.0);
//     const [niStock, setNiStock] = useState(0);
//     const [niPrice, setNiPrice] = useState("");
//     const [niCustom, setNiCustom] = useState(false);

//     /* ui */
//     const [loading, setLoading] = useState(true);
//     const [saving, setSaving] = useState(false);
//     const [progress, setProgress] = useState(0);

//     /* ── Fetch product ── */
//     useEffect(() => {
//         const fetch = async () => {
//             setLoading(true);
//             try {
//                 const res = await axios.post(backendUrl + "/api/product/single", { productId: id });
//                 if (res.data.success) {
//                     const p = res.data.product;
//                     setName(p.name || "");
//                     setDescription(p.description || "");
//                     setDetDesc(p.detailedDescription || "");
//                     setPrice(p.price || "");
//                     setDiscPrice(p.discountPrice || "");
//                     setCategory(p.category || "Men");
//                     setSubCat(p.subCategory || "Topwear");
//                     setBest(p.bestseller || false);
//                     setExisting(Array.isArray(p.image) ? p.image.filter(Boolean) : [p.image].filter(Boolean));

//                     if (p.color?.length) {
//                         setColors(p.color.map(c => typeof c === "string" ? { name: c, hex: "#808080" } : { name: c.name, hex: c.hex }));
//                     }

//                     if (p.sizes?.length) {
//                         const first = p.sizes[0];
//                         const isStd = ["XS", "S", "M", "L", "XL", "XXL", "3XL"].includes(typeof first === "string" ? first : first.size);
//                         if (isStd) {
//                             setSizeType("standard");
//                             const en = []; const obj = { ...INIT_STD };
//                             p.sizes.forEach(s => {
//                                 const k = typeof s === "string" ? s : s.size;
//                                 en.push(k);
//                                 obj[k] = {
//                                     multiplier: (typeof s === "object" ? s.priceMultiplier : 1) || 1,
//                                     stock: (typeof s === "object" ? s.stock : 0) || 0,
//                                     customPrice: (typeof s === "object" ? s.customPrice : "") || "",
//                                     useCustomPrice: (typeof s === "object" ? s.useCustomPrice : false) || false,
//                                 };
//                             });
//                             setEnabledSz(en); setStdSizes(obj);
//                         } else {
//                             setSizeType("inch");
//                             setInchSizes(p.sizes.map(s => ({
//                                 size: typeof s === "string" ? s : s.size,
//                                 multiplier: (typeof s === "object" ? s.priceMultiplier : 1) || 1,
//                                 stock: (typeof s === "object" ? s.stock : 0) || 0,
//                                 customPrice: (typeof s === "object" ? s.customPrice : "") || "",
//                                 useCustomPrice: (typeof s === "object" ? s.useCustomPrice : false) || false,
//                             })));
//                         }
//                     }
//                 } else toast.error("Failed to load product");
//             } catch { toast.error("Failed to load product"); }
//             finally { setLoading(false); }
//         };
//         fetch();
//     }, [id]);

//     /* ── Progress ── */
//     useEffect(() => {
//         let s = 0;
//         if (name.trim()) s += 15;
//         if (description.trim()) s += 10;
//         if (price) s += 15;
//         if (existingImages.length || newImages.some(Boolean)) s += 15;
//         if (colors.length) s += 15;
//         const hasSz = sizeType === "standard" ? enabledSz.length > 0 : inchSizes.length > 0;
//         if (hasSz) s += 20;
//         if (detDesc) s += 10;
//         setProgress(Math.min(100, s));
//     }, [name, description, price, existingImages, newImages, colors, enabledSz, inchSizes, detDesc, sizeType]);

//     /* ── Helpers ── */
//     const calcPrice = (d) => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;

//     const setImg = (i, f) => { const n = [...newImages]; n[i] = f; setNewImages(n); };
//     const clearImg = (i) => { const n = [...newImages]; n[i] = null; setNewImages(n); };

//     /* ── Color handlers ── */
//     const addColor = () => {
//         if (colorMode !== "hexOnly" && !newCName.trim()) return toast.error("Enter color name");
//         const c = { name: newCName.trim() || `Color-${colors.length + 1}`, hex: newCHex || "#808080" };
//         if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color exists");
//         setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added`);
//     };
//     const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = (p) => colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())
//         ? toast.info(`${p.name} already added`)
//         : (setColors([...colors, p]), toast.success(`${p.name} added!`));

//     /* ── Std size handlers ── */
//     const toggleSz = (k) => setEnabledSz(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k]);
//     const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === "stock" ? parseInt(v) || 0 : f === "multiplier" ? parseFloat(v) || 1 : v } }));
//     const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));

//     /* ── Inch size handlers ── */
//     const addInch = () => {
//         if (!niSize.trim()) return toast.error("Enter size");
//         if (inchSizes.some(s => s.size === niSize)) return toast.error("Size exists");
//         setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
//         setNiSize(""); setNiMult(1); setNiStock(0); setNiPrice(""); setNiCustom(false);
//         toast.success("Size added!");
//     };
//     const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === "useCustomPrice") u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === "stock") u[i].stock = parseInt(v) || 0; else if (f === "multiplier") u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };

//     /* ── Format sizes ── */
//     const fmtSizes = () => sizeType === "standard"
//         ? enabledSz.map(k => ({ size: k, priceMultiplier: stdSizes[k].multiplier, stock: stdSizes[k].stock, customPrice: stdSizes[k].customPrice, useCustomPrice: stdSizes[k].useCustomPrice }))
//         : inchSizes.map(s => ({ size: s.size, priceMultiplier: s.multiplier, stock: s.stock, customPrice: s.customPrice, useCustomPrice: s.useCustomPrice }));

//     /* ── Submit ── */
//     const onSubmit = async (e) => {
//         e.preventDefault();
//         if (sizeType === "standard" && enabledSz.length === 0) return toast.error("Select at least one size");
//         if (sizeType === "inch" && inchSizes.length === 0) return toast.error("Add at least one size");
//         if (colors.length === 0) return toast.error("Add at least one color");
//         if (!price || isNaN(+price) || +price <= 0) return toast.error("Valid base price required");

//         setSaving(true);
//         try {
//             const fd = new FormData();
//             fd.append("productId", id);
//             fd.append("name", name.trim());
//             fd.append("description", description.trim());
//             fd.append("detailedDescription", detDesc);
//             fd.append("price", price);
//             fd.append("discountPrice", discPrice || "");
//             fd.append("category", category);
//             fd.append("subCategory", subCategory);
//             fd.append("bestseller", bestseller);
//             fd.append("sizes", JSON.stringify(fmtSizes()));
//             fd.append("color", JSON.stringify(colors));
//             newImages.forEach((img, i) => { if (img) fd.append(`image${i + 1}`, img); });

//             const res = await axios.post(backendUrl + "/api/product/update", fd, { headers: { token } });
//             if (res.data.success) toast.success("Product updated successfully!");
//             else toast.error(res.data.message);
//         } catch { toast.error("Update failed!"); }
//         finally { setSaving(false); }
//     };

//     const discount = discPrice && price && +discPrice < +price ? Math.round((1 - discPrice / price) * 100) : null;
//     const allImgs = [...existingImages, ...newImages.filter(Boolean).map(f => URL.createObjectURL(f))];
//     const uploadedNew = newImages.filter(Boolean).length;

//     /* ─────────────────────────────────────────────────────── */
//     if (loading) return (
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//             <div className="text-center">
//                 <div className="w-10 h-10 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
//                 <p className="text-sm text-gray-500 font-medium">Loading product…</p>
//             </div>
//         </div>
//     );

//     return (
//         <div className="min-h-screen bg-[#f9f9f7]" style={{ fontFamily: "'Outfit', sans-serif" }}>
//             <FontLink />

//             {/* ── STICKY TOP BAR ── */}
//             <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-7 h-[60px] flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                     <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition text-sm">←</button>
//                     <div className="w-px h-5 bg-gray-200" />
//                     <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-semibold text-gray-900">Edit Product</h1>
//                     <div className="w-px h-5 bg-gray-200" />
//                     <span className="text-xs text-gray-400 font-medium">{progress}% complete</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
//                         Cancel
//                     </button>
//                     <button
//                         type="button"
//                         onClick={onSubmit}
//                         disabled={saving}
//                         className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 disabled:opacity-60 transition shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
//                     >
//                         {saving ? <><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</> : <>💾 Save Changes</>}
//                     </button>
//                 </div>
//             </div>

//             <form onSubmit={onSubmit}>
//                 <div className="grid grid-cols-1 xl:grid-cols-[1fr_310px] gap-5 p-7 max-w-[1400px] items-start">

//                     {/* ═════ LEFT COLUMN ═════ */}
//                     <div className="space-y-5">

//                         {/* ── BASIC INFO ── */}
//                         <Card icon="📝" title="Basic Information" subtitle="Name, description & categorisation">
//                             <div className="space-y-4">
//                                 {/* Name */}
//                                 <div>
//                                     <Label required>Product Name</Label>
//                                     <div className="relative">
//                                         <Input
//                                             type="text" maxLength={100} placeholder="e.g. Classic Oxford Shirt"
//                                             value={name} onChange={e => setName(e.target.value)} required
//                                             className={name.length > 90 ? "border-red-300" : ""}
//                                         />
//                                         <span className={`absolute right-3 bottom-2.5 text-[10px] font-medium ${name.length > 90 ? "text-red-400" : "text-gray-400"}`}>{name.length}/100</span>
//                                     </div>
//                                 </div>

//                                 {/* Short desc */}
//                                 <div>
//                                     <Label required>Short Description</Label>
//                                     <div className="relative">
//                                         <textarea
//                                             maxLength={300} rows={3} placeholder="Brief description for listings…"
//                                             value={description} onChange={e => setDescription(e.target.value)} required
//                                             className={`w-full border rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/5 transition resize-none ${description.length > 280 ? "border-red-300" : "border-gray-200"}`}
//                                         />
//                                         <span className={`absolute right-3 bottom-2.5 text-[10px] font-medium ${description.length > 280 ? "text-red-400" : "text-gray-400"}`}>{description.length}/300</span>
//                                     </div>
//                                 </div>

//                                 {/* Row */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                                     <div>
//                                         <Label>Category</Label>
//                                         <Sel value={category} onChange={e => { setCategory(e.target.value); setSubCat(e.target.value === "Others" ? "Cushion Cover" : "Topwear"); }}>
//                                             <option>Men</option><option>Women</option><option>Others</option>
//                                         </Sel>
//                                     </div>
//                                     <div>
//                                         <Label>Sub Category</Label>
//                                         <Sel value={subCategory} onChange={e => setSubCat(e.target.value)}>
//                                             {category === "Others"
//                                                 ? <><option>Cushion Cover</option><option>Aprons</option><option>Desk Mat</option><option>Pillow</option><option>Chair Cover</option></>
//                                                 : <><option>Topwear</option><option>Bottomwear</option><option>Winterwear</option></>
//                                             }
//                                         </Sel>
//                                     </div>
//                                     <div>
//                                         <Label>SKU / Code</Label>
//                                         <Input type="text" placeholder="Auto-generated" />
//                                     </div>
//                                 </div>

//                                 {/* Detailed desc */}
//                                 <div>
//                                     <Label>Detailed Description</Label>
//                                     <div className="quill-admin rounded-xl overflow-hidden border border-gray-200">
//                                         <ReactQuill theme="snow" value={detDesc} onChange={setDetDesc} style={{ fontFamily: "'Outfit', sans-serif" }} />
//                                     </div>
//                                     <p className="text-xs text-gray-400 mt-1.5">Shown on product detail page — add specs, care instructions, materials</p>
//                                 </div>
//                             </div>
//                         </Card>

//                         {/* ── IMAGES ── */}
//                         <Card
//                             icon="🖼️"
//                             title="Product Images"
//                             subtitle={`${existingImages.length} existing · ${uploadedNew} new replacement${uploadedNew !== 1 ? "s" : ""}`}
//                             action={allImgs.length > 0 && (
//                                 <button type="button" onClick={() => setLightbox({ imgs: allImgs, start: 0 })}
//                                     className="px-3 py-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
//                                     🔍 View All
//                                 </button>
//                             )}
//                         >
//                             {/* Existing images */}
//                             {existingImages.length > 0 && (
//                                 <div className="mb-5">
//                                     <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Current Images</p>
//                                     <div className="flex gap-3 flex-wrap">
//                                         {existingImages.map((img, i) => (
//                                             <div key={i} className="group relative w-20 h-20 rounded-xl overflow-hidden border border-gray-200 cursor-pointer" onClick={() => setLightbox({ imgs: existingImages, start: i })}>
//                                                 <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
//                                                 {i === 0 && <span className="absolute top-1 left-1 bg-gray-900/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">MAIN</span>}
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                                                     <span className="text-white text-xs">🔍</span>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <p className="text-xs text-gray-400 mt-2">Click any image to view full size. Upload below to replace.</p>
//                                 </div>
//                             )}

//                             {/* Upload new */}
//                             <div>
//                                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Replace / Add New Images</p>
//                                 <div className="grid grid-cols-5 gap-2.5">
//                                     {newImages.map((img, i) => (
//                                         <div key={i} className="relative">
//                                             <label htmlFor={`ni-${i}`} className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition overflow-hidden ${img ? "border-solid border-gray-300 bg-black" : "border-dashed border-gray-200 bg-gray-50 hover:border-gray-500 hover:bg-gray-100"}`}>
//                                                 {img ? (
//                                                     <>
//                                                         <img src={URL.createObjectURL(img)} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-60 transition" />
//                                                         <span className="absolute top-1.5 right-1.5 bg-black/50 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">{i + 1}</span>
//                                                     </>
//                                                 ) : (
//                                                     <>
//                                                         <span className="text-xl text-gray-300">+</span>
//                                                         <span className="text-[9px] text-gray-400 mt-0.5 font-medium">Slot {i + 1}</span>
//                                                     </>
//                                                 )}
//                                             </label>
//                                             {img && (
//                                                 <button type="button" onClick={() => clearImg(i)}
//                                                     className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold hover:bg-red-600 transition shadow">✕</button>
//                                             )}
//                                             <input type="file" id={`ni-${i}`} hidden accept="image/*" onChange={e => { if (e.target.files[0]) setImg(i, e.target.files[0]); e.target.value = ""; }} />
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <p className="text-xs text-gray-400 mt-2.5">Uploading new images will replace the corresponding existing slots. PNG, JPG, WEBP · 800×800px recommended.</p>
//                             </div>
//                         </Card>

//                         {/* ── COLORS ── */}
//                         <Card icon="🎨" title={`Color Variants`} subtitle={`${colors.length} color${colors.length !== 1 ? "s" : ""} added`}>
//                             {/* Mode selector */}
//                             <div className="flex gap-2 flex-wrap mb-4">
//                                 {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
//                                     <label key={v} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border cursor-pointer text-xs font-semibold transition ${colorMode === v ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-600 hover:border-gray-400"}`}>
//                                         <input type="radio" className="hidden" value={v} checked={colorMode === v} onChange={() => setColorMode(v)} />
//                                         {l}
//                                     </label>
//                                 ))}
//                             </div>

//                             {/* Add color */}
//                             <div className="flex flex-wrap gap-3 items-end p-4 bg-gray-50 border border-gray-200 rounded-xl mb-4">
//                                 {(colorMode === "both" || colorMode === "nameOnly") && (
//                                     <div className="flex-1 min-w-[150px]">
//                                         <Label>Color Name</Label>
//                                         <Input type="text" placeholder="e.g., Navy Blue" value={newCName}
//                                             onChange={e => setNewCName(e.target.value)}
//                                             onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addColor())}
//                                         />
//                                     </div>
//                                 )}
//                                 {(colorMode === "both" || colorMode === "hexOnly") && (
//                                     <div>
//                                         <Label>Pick Color</Label>
//                                         <div className="flex gap-2 items-center">
//                                             <input type="color" value={newCHex} onChange={e => setNewCHex(e.target.value)}
//                                                 className="w-11 h-[42px] rounded-xl border border-gray-200 cursor-pointer p-1" />
//                                             <Input type="text" value={newCHex} onChange={e => setNewCHex(e.target.value)} className="w-[100px]" />
//                                         </div>
//                                     </div>
//                                 )}
//                                 <button type="button" onClick={addColor}
//                                     className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition whitespace-nowrap">
//                                     + Add
//                                 </button>
//                             </div>

//                             {/* Color list */}
//                             {colors.length === 0 ? (
//                                 <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
//                                     <div className="text-3xl mb-2">🎨</div>
//                                     <p className="text-sm text-gray-400">No colors added yet</p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-2 mb-4">
//                                     {colors.map((c, i) => (
//                                         <div key={i} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition bg-white">
//                                             <input type="color" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)}
//                                                 className="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer p-0.5 flex-shrink-0" />
//                                             <div className="flex-1 min-w-0">
//                                                 <input type="text" value={c.name} onChange={e => edColor(i, "name", e.target.value)}
//                                                     className="w-full text-sm font-semibold text-gray-900 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-900 focus:outline-none px-1 py-0.5 rounded" />
//                                                 <input type="text" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)}
//                                                     className="w-full text-xs text-gray-400 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-900 focus:outline-none px-1 mt-0.5 rounded" />
//                                             </div>
//                                             <div className="w-6 h-6 rounded-full flex-shrink-0 border border-black/10" style={{ backgroundColor: c.hex }} />
//                                             <button type="button" onClick={() => rmColor(c.name)}
//                                                 className="px-2 py-1 text-xs font-semibold text-red-500 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition flex-shrink-0">✕</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Presets */}
//                             <div className="pt-3 border-t border-gray-100">
//                                 <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2.5">Quick Presets</p>
//                                 <div className="flex flex-wrap gap-1.5">
//                                     {PRESETS.map((p, i) => {
//                                         const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
//                                         return (
//                                             <button key={i} type="button" onClick={() => addPreset(p)}
//                                                 className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-medium transition ${added ? "border-green-300 bg-green-50 text-green-700" : "border-gray-200 text-gray-600 hover:border-gray-900 hover:bg-gray-50"}`}>
//                                                 <div className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0" style={{ backgroundColor: p.hex }} />
//                                                 {p.name}{added && " ✓"}
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </Card>

//                         {/* ── SIZES ── */}
//                         <Card icon="📐" title="Sizes & Inventory" subtitle="Manage sizes, stock & pricing per size">
//                             {/* Size type radio */}
//                             <div className="flex gap-2 mb-6">
//                                 {[["standard", "👕 Standard (XS–3XL)"], ["inch", "📏 Inch-Based"]].map(([v, l]) => (
//                                     <label key={v} className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer text-sm font-semibold transition ${sizeType === v ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-600 hover:border-gray-400"}`}>
//                                         <input type="radio" className="hidden" value={v} checked={sizeType === v} onChange={() => setSizeType(v)} />
//                                         {l}
//                                     </label>
//                                 ))}
//                             </div>

//                             {/* Standard sizes */}
//                             {sizeType === "standard" && (
//                                 <>
//                                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                                         {Object.keys(stdSizes).map(k => {
//                                             const on = enabledSz.includes(k);
//                                             const d = stdSizes[k];
//                                             return (
//                                                 <div key={k} className={`rounded-xl border-2 p-3 transition cursor-pointer ${on ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-white hover:border-gray-400"}`}
//                                                     onClick={() => !on && toggleSz(k)}>
//                                                     <div className="flex items-center gap-2 mb-2.5">
//                                                         <input type="checkbox" checked={on} onChange={() => toggleSz(k)}
//                                                             onClick={e => e.stopPropagation()}
//                                                             className="w-4 h-4 accent-gray-900 cursor-pointer" />
//                                                         <span className={`inline-flex items-center justify-center min-w-[32px] h-6 rounded-md text-xs font-bold px-2 ${on ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}>{k}</span>
//                                                         {on && d.stock > 0 && <span className="text-[9px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded-full">{d.stock}×</span>}
//                                                     </div>

//                                                     {on && (
//                                                         <div onClick={e => e.stopPropagation()} className="space-y-2">
//                                                             <label className="flex items-center gap-1.5 text-xs font-medium text-gray-600 cursor-pointer">
//                                                                 <input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} className="w-3.5 h-3.5 accent-gray-900" />
//                                                                 Custom Price
//                                                             </label>

//                                                             {d.useCustomPrice ? (
//                                                                 <div>
//                                                                     <input type="number" step="0.01" min="0" value={d.customPrice}
//                                                                         onChange={e => setSzF(k, "customPrice", e.target.value)}
//                                                                         placeholder="₹ price"
//                                                                         className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-gray-900 bg-white" />
//                                                                     <p className="text-[10px] text-green-600 font-bold mt-1">₹ {d.customPrice || "—"}</p>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div>
//                                                                     <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier}
//                                                                         onChange={e => setSzF(k, "multiplier", e.target.value)}
//                                                                         className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-gray-900 bg-white" />
//                                                                     <p className="text-[10px] text-green-600 font-bold mt-1">₹ {calcPrice(d).toFixed(2)}</p>
//                                                                 </div>
//                                                             )}

//                                                             <input type="number" min="0" value={d.stock}
//                                                                 onChange={e => setSzF(k, "stock", e.target.value)}
//                                                                 placeholder="Stock qty"
//                                                                 className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-gray-900 bg-white" />
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>

//                                     {enabledSz.length > 0 && (
//                                         <div className="mt-4 p-3 bg-gray-900 rounded-xl flex flex-wrap gap-2">
//                                             {enabledSz.map(k => (
//                                                 <span key={k} className="px-3 py-1 bg-white text-gray-900 text-xs font-bold rounded-full">
//                                                     {k} · ₹{calcPrice(stdSizes[k]).toFixed(2)} · {stdSizes[k].stock}×
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     )}

//                                     {/* Quick actions */}
//                                     <div className="mt-3 flex gap-2 flex-wrap">
//                                         {[["S/M/L/XL", ["S", "M", "L", "XL"]], ["All", Object.keys(stdSizes)]].map(([l, sz]) => (
//                                             <button key={l} type="button" onClick={() => setEnabledSz(sz)}
//                                                 className="px-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg text-gray-600 hover:border-gray-900 hover:bg-gray-50 transition">
//                                                 Select {l}
//                                             </button>
//                                         ))}
//                                         <button type="button" onClick={() => setEnabledSz([])}
//                                             className="px-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg text-gray-600 hover:border-red-300 hover:text-red-600 transition">
//                                             Clear All
//                                         </button>
//                                     </div>
//                                 </>
//                             )}

//                             {/* Inch sizes */}
//                             {sizeType === "inch" && (
//                                 <>
//                                     <div className="flex flex-wrap gap-3 items-end p-4 bg-gray-50 border border-gray-200 rounded-xl mb-4">
//                                         <div>
//                                             <Label>Size Label</Label>
//                                             <Input type="text" placeholder="e.g. 14x14" value={niSize} onChange={e => setNiSize(e.target.value)} className="w-28" />
//                                         </div>
//                                         <div>
//                                             <Label>Stock</Label>
//                                             <Input type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} className="w-20" />
//                                         </div>
//                                         <label className="flex items-center gap-2 text-xs font-medium text-gray-600 cursor-pointer self-end pb-2.5">
//                                             <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} className="w-4 h-4 accent-gray-900" />
//                                             Custom Price
//                                         </label>
//                                         {niCustom
//                                             ? <div><Label>Price (₹)</Label><Input type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} className="w-24" /></div>
//                                             : <div><Label>Multiplier</Label><Input type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} className="w-20" /></div>
//                                         }
//                                         <button type="button" onClick={addInch}
//                                             className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition self-end">
//                                             + Add
//                                         </button>
//                                     </div>

//                                     {inchSizes.length === 0 ? (
//                                         <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl">
//                                             <div className="text-3xl mb-2">📏</div>
//                                             <p className="text-sm text-gray-400">No sizes added yet</p>
//                                         </div>
//                                     ) : (
//                                         <div className="flex flex-wrap gap-3">
//                                             {inchSizes.map((s, i) => (
//                                                 <div key={i} className="border border-gray-200 rounded-xl p-3 bg-white w-40">
//                                                     <div className="flex items-center justify-between mb-2.5">
//                                                         <span className="text-sm font-bold text-gray-900">{s.size}"</span>
//                                                         <button type="button" onClick={() => rmInch(s.size)}
//                                                             className="w-5 h-5 rounded-full bg-red-50 border border-red-200 text-red-500 text-[10px] flex items-center justify-center hover:bg-red-100 transition">✕</button>
//                                                     </div>
//                                                     <label className="flex items-center gap-1.5 text-xs font-medium text-gray-600 mb-2 cursor-pointer">
//                                                         <input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, "useCustomPrice")} className="w-3.5 h-3.5 accent-gray-900" />
//                                                         Custom
//                                                     </label>
//                                                     {s.useCustomPrice
//                                                         ? <div><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, "customPrice", e.target.value)} className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-gray-900" />
//                                                             <p className="text-[10px] text-green-600 font-bold mt-1">₹ {s.customPrice || "—"}</p></div>
//                                                         : <div><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, "multiplier", e.target.value)} className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-gray-900" />
//                                                             <p className="text-[10px] text-green-600 font-bold mt-1">₹ {((+price || 0) * s.multiplier).toFixed(2)}</p></div>
//                                                     }
//                                                     <input type="number" min="0" value={s.stock} onChange={e => edInch(i, "stock", e.target.value)}
//                                                         placeholder="Stock" className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs font-medium focus:outline-none focus:border-gray-900 mt-2" />
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </Card>
//                     </div>

//                     {/* ═════ RIGHT SIDEBAR ═════ */}
//                     <div className="space-y-4">

//                         {/* Save / publish */}
//                         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">🚀</div>
//                                 <div>
//                                     <p className="text-sm font-bold text-gray-900">Save Changes</p>
//                                     <p className="text-xs text-gray-400">Update product on store</p>
//                                 </div>
//                             </div>

//                             {/* Progress bar */}
//                             <p className="text-xs font-medium text-gray-500 mb-1.5">Completion: <strong className="text-gray-900">{progress}%</strong></p>
//                             <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
//                                 <div className="h-full bg-gray-900 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
//                             </div>

//                             <Toggle on={bestseller} onChange={() => setBest(p => !p)} label="⭐ Mark as Bestseller" />

//                             <button type="submit" disabled={saving}
//                                 className="w-full mt-3 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 disabled:opacity-60 transition flex items-center justify-center gap-2 shadow hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
//                                 {saving ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</> : "💾 Save Changes"}
//                             </button>
//                             <button type="button" onClick={() => navigate(-1)}
//                                 className="w-full mt-2 py-2.5 text-sm font-semibold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
//                                 Cancel
//                             </button>
//                         </div>

//                         {/* Pricing */}
//                         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">💰</div>
//                                 <p className="text-sm font-bold text-gray-900">Pricing</p>
//                             </div>
//                             <div className="space-y-3">
//                                 <div>
//                                     <Label required>Base Price (₹)</Label>
//                                     <Input type="number" placeholder="0.00" value={price} onChange={e => setPrice(e.target.value)} required />
//                                     <p className="text-xs text-gray-400 mt-1">Used for size multiplier calculations</p>
//                                 </div>
//                                 <div>
//                                     <Label>Sale Price (₹)</Label>
//                                     <Input type="number" placeholder="0.00" value={discPrice} onChange={e => setDiscPrice(e.target.value)} />
//                                 </div>
//                                 {discount && (
//                                     <div className="flex items-center justify-between p-2.5 bg-green-50 border border-green-200 rounded-xl">
//                                         <span className="text-xs font-semibold text-green-700">💸 Discount active</span>
//                                         <span className="text-xs font-bold text-green-700 bg-green-200 px-2 py-0.5 rounded-full">{discount}% off</span>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Live Summary */}
//                         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">📊</div>
//                                 <div>
//                                     <p className="text-sm font-bold text-gray-900">Summary</p>
//                                     <p className="text-xs text-gray-400">Live overview</p>
//                                 </div>
//                             </div>
//                             <div className="space-y-0">
//                                 {[
//                                     ["Name", name || <span className="text-gray-300 italic">Not set</span>],
//                                     ["Category", `${category} › ${subCategory}`],
//                                     ["Base Price", price ? `₹${price}` : <span className="text-gray-300">—</span>],
//                                     ["Sale Price", discPrice ? `₹${discPrice}` : <span className="text-gray-300">—</span>],
//                                     ["Colors", colors.length > 0
//                                         ? <div className="flex gap-1 flex-wrap justify-end">{colors.map((c, i) => <div key={i} title={c.name} className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: c.hex }} />)}</div>
//                                         : <span className="text-gray-300">—</span>],
//                                     ["Sizes", sizeType === "standard"
//                                         ? (enabledSz.length ? enabledSz.join(", ") : <span className="text-gray-300">None</span>)
//                                         : (inchSizes.length ? inchSizes.map(s => s.size).join(", ") : <span className="text-gray-300">None</span>)],
//                                     ["Images", <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${existingImages.length > 0 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{existingImages.length} existing · {uploadedNew} new</span>],
//                                     ["Bestseller", bestseller
//                                         ? <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">⭐ Yes</span>
//                                         : <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">No</span>],
//                                 ].map(([k, v], i) => (
//                                     <div key={i} className="flex justify-between items-start py-2.5 border-b border-gray-100 last:border-b-0 gap-3 text-xs">
//                                         <span className="font-medium text-gray-400 flex-shrink-0">{k}</span>
//                                         <span className="font-semibold text-gray-900 text-right break-all">{v}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quick Actions */}
//                         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
//                             <p className="text-sm font-bold text-gray-900 mb-3">⚡ Quick Actions</p>
//                             <div className="space-y-2">
//                                 {[
//                                     ["🎨 Add basic colors", () => {
//                                         const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4);
//                                         setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added`);
//                                     }],
//                                     ["👕 Select S/M/L/XL", () => { setEnabledSz(["S", "M", "L", "XL"]); setSizeType("standard"); toast.success("S/M/L/XL selected"); }],
//                                     ["✅ Select all sizes", () => { setEnabledSz(Object.keys(stdSizes)); setSizeType("standard"); toast.success("All sizes selected"); }],
//                                     ["🗑 Clear all colors", () => { setColors([]); toast.info("Colors cleared"); }],
//                                 ].map(([l, fn], i) => (
//                                     <button key={i} type="button" onClick={fn}
//                                         className="w-full text-left px-3 py-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition">
//                                         {l}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Tips */}
//                         <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
//                             <p className="text-sm font-bold text-blue-800 mb-2">💡 Tips</p>
//                             <ul className="text-xs text-blue-700 space-y-1.5 leading-relaxed list-disc pl-4">
//                                 <li>Click existing images to view full size</li>
//                                 <li>Upload new images to replace slots</li>
//                                 <li>First image is the primary thumbnail</li>
//                                 <li>Press Enter after color name to add</li>
//                                 <li>Changes only save when you click "Save"</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//             {/* ── LIGHTBOX ── */}
//             {lightbox && <Lightbox imgs={lightbox.imgs} start={lightbox.start} onClose={() => setLightbox(null)} />}

//             {/* ── Quill overrides ── */}
//             <style>{`
//         .quill-admin .ql-toolbar { border-radius: 12px 12px 0 0; border: 1.5px solid #e5e7eb; background: #f9fafb; }
//         .quill-admin .ql-container { border-radius: 0 0 12px 12px; border: 1.5px solid #e5e7eb; border-top: none; font-family: 'Outfit', sans-serif; font-size: 14px; }
//         .quill-admin .ql-editor { min-height: 160px; }
//         .quill-admin .ql-editor:focus { outline: none; }
//       `}</style>
//         </div>
//     );
// };

// export default UpdateProduct;





// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { backendUrl } from "../../App";
// import {
//     TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
//     TbX, TbPlus, TbTrash, TbCheck, TbAlertTriangle,
//     TbDeviceFloppy, TbRocket, TbEye, TbChevronLeft,
//     TbStar, TbInfoCircle, TbBolt, TbTag, TbEdit,
//     TbArrowLeft, TbRefresh, TbCloudUpload
// } from "react-icons/tb";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// /* ═══════════════════ CONSTANTS ═══════════════════ */
// const PRESETS = [
//     { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
//     { name: "Red", hex: "#EF4444" }, { name: "Navy", hex: "#1E3A5F" },
//     { name: "Royal Blue", hex: "#3B82F6" }, { name: "Green", hex: "#166534" },
//     { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
//     { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" },
//     { name: "Brown", hex: "#92400E" }, { name: "Gray", hex: "#9CA3AF" },
// ];

// const INIT_STD = {
//     XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//     L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//     XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//     XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//     "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
// };

// /* ═══════════════════ LIGHTBOX ═══════════════════ */
// const Lightbox = ({ imgs, start, onClose }) => {
//     const [cur, setCur] = useState(start);
//     useEffect(() => {
//         const h = (e) => {
//             if (e.key === "Escape") onClose();
//             if (e.key === "ArrowLeft") setCur(p => Math.max(0, p - 1));
//             if (e.key === "ArrowRight") setCur(p => Math.min(imgs.length - 1, p + 1));
//         };
//         window.addEventListener("keydown", h);
//         return () => window.removeEventListener("keydown", h);
//     }, [imgs.length, onClose]);

//     return (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/88 backdrop-blur-sm" onClick={onClose}>
//             <div className="relative flex flex-col items-center gap-4 max-w-[90vw]" onClick={e => e.stopPropagation()}>
//                 <button onClick={onClose} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg hover:rotate-90 transition-transform z-10">
//                     <TbX size={14} className="text-gray-800" />
//                 </button>
//                 <img src={imgs[cur]} alt="" className="max-w-[80vw] max-h-[72vh] rounded-xl object-contain shadow-2xl" />
//                 {cur > 0 && <button onClick={() => setCur(p => p - 1)} className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronLeft size={22} /></button>}
//                 {cur < imgs.length - 1 && <button onClick={() => setCur(p => p + 1)} className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronRight size={22} /></button>}
//                 {imgs.length > 1 && (
//                     <div className="flex gap-2 flex-wrap justify-center max-w-[80vw]">
//                         {imgs.map((img, i) => <img key={i} src={img} alt="" onClick={() => setCur(i)} className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${i === cur ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-75"}`} />)}
//                     </div>
//                 )}
//                 <p className="text-white/50 text-xs">{cur + 1} / {imgs.length} · Esc to close</p>
//             </div>
//         </div>
//     );
// };

// /* ═══════════════════ CARD ═══════════════════ */
// const Card = ({ icon, title, subtitle, badge, children, action }) => (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-5">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
//             <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">{icon}</div>
//                 <div>
//                     <div className="flex items-center gap-2">
//                         <span className="text-[14px] font-bold text-gray-900">{title}</span>
//                         {badge}
//                     </div>
//                     {subtitle && <p className="text-[11.5px] text-gray-400 mt-0.5">{subtitle}</p>}
//                 </div>
//             </div>
//             {action}
//         </div>
//         <div className="p-6">{children}</div>
//     </div>
// );

// /* ═══════════════════ FIELD ═══════════════════ */
// const Field = ({ label, required, hint, children }) => (
//     <div className="mb-5 last:mb-0">
//         {label && <label className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">{label}{required && <span className="text-red-500 text-sm">*</span>}</label>}
//         {children}
//         {hint && <p className="text-[11.5px] text-gray-400 mt-1.5">{hint}</p>}
//     </div>
// );

// const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13.5px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all";
// const selectCls = inputCls + " appearance-none cursor-pointer bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=')] bg-no-repeat bg-[right_12px_center] pr-9";

// /* ═══════════════════ SKELETON ═══════════════════ */
// const Skeleton = () => (
//     <div className="min-h-screen bg-[#f7f7f5]">
//         <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gray-100 rounded-xl animate-pulse" />
//                 <div className="w-px h-5 bg-gray-200" />
//                 <div className="w-32 h-5 bg-gray-100 rounded-lg animate-pulse" />
//             </div>
//             <div className="flex gap-2">
//                 <div className="w-24 h-9 bg-gray-100 rounded-xl animate-pulse" />
//                 <div className="w-32 h-9 bg-gray-100 rounded-xl animate-pulse" />
//             </div>
//         </div>
//         <div className="p-6 grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 max-w-[1400px]">
//             <div className="space-y-5">
//                 {[280, 220, 200, 260].map((h, i) => <div key={i} className="bg-white rounded-2xl border border-gray-100 animate-pulse" style={{ height: h }} />)}
//             </div>
//             <div className="space-y-4">
//                 {[180, 160, 200].map((h, i) => <div key={i} className="bg-white rounded-2xl border border-gray-100 animate-pulse" style={{ height: h }} />)}
//             </div>
//         </div>
//     </div>
// );

// /* ═══════════════════ MAIN ═══════════════════ */
// const UpdateProduct = ({ token }) => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     /* image state — 10 slots, each slot = { existing: url | null, newFile: File | null } */
//     const [slots, setSlots] = useState(Array(10).fill(null).map(() => ({ existing: null, newFile: null })));
//     const [dragging, setDragging] = useState(false);
//     const [lightbox, setLightbox] = useState(null);
//     const dzRef = useRef(null);

//     /* basic fields */
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [detDesc, setDetDesc] = useState("");
//     const [price, setPrice] = useState("");
//     const [discPrice, setDiscPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCat] = useState("Topwear");
//     const [bestseller, setBest] = useState(false);

//     /* colors */
//     const [colors, setColors] = useState([]);
//     const [newCName, setNewCName] = useState("");
//     const [newCHex, setNewCHex] = useState("#000000");
//     const [colorMode, setColorMode] = useState("both");

//     /* sizes */
//     const [sizeType, setSizeType] = useState("standard");
//     const [stdSizes, setStdSizes] = useState(INIT_STD);
//     const [enabledSz, setEnabledSz] = useState([]);
//     const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState("");
//     const [niMult, setNiMult] = useState(1.0);
//     const [niStock, setNiStock] = useState(0);
//     const [niPrice, setNiPrice] = useState("");
//     const [niCustom, setNiCustom] = useState(false);

//     /* ui */
//     const [loading, setLoading] = useState(true);
//     const [saving, setSaving] = useState(false);
//     const [progress, setProgress] = useState(0);

//     /* ── Derived ── */
//     const allSlotImgs = slots.map(s => s.newFile ? URL.createObjectURL(s.newFile) : s.existing).filter(Boolean);
//     const existingCount = slots.filter(s => s.existing && !s.newFile).length;
//     const newFilesCount = slots.filter(s => s.newFile).length;
//     const totalImages = slots.filter(s => s.newFile || s.existing).length;
//     const discount = discPrice && price && +discPrice < +price ? Math.round((1 - discPrice / price) * 100) : null;
//     const hasSizes = sizeType === "standard" ? enabledSz.length > 0 : inchSizes.length > 0;
//     const calcPrice = (d) => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;

//     /* ── Fetch product ── */
//     useEffect(() => {
//         const fetchProduct = async () => {
//             setLoading(true);
//             try {
//                 const res = await axios.post(backendUrl + "/api/product/single", { productId: id });
//                 if (res.data.success) {
//                     const p = res.data.product;
//                     setName(p.name || "");
//                     setDescription(p.description || "");
//                     setDetDesc(p.detailedDescription || "");
//                     setPrice(p.price || "");
//                     setDiscPrice(p.discountPrice || "");
//                     setCategory(p.category || "Men");
//                     setSubCat(p.subCategory || "Topwear");
//                     setBest(p.bestseller || false);

//                     // Map existing images into slots
//                     const existingImgs = Array.isArray(p.image) ? p.image.filter(Boolean) : [p.image].filter(Boolean);
//                     setSlots(Array(10).fill(null).map((_, i) => ({ existing: existingImgs[i] || null, newFile: null })));

//                     if (p.color?.length) setColors(p.color.map(c => typeof c === "string" ? { name: c, hex: "#808080" } : { name: c.name || c, hex: c.hex || "#808080" }));

//                     if (p.sizes?.length) {
//                         const first = p.sizes[0];
//                         const isStd = ["XS", "S", "M", "L", "XL", "XXL", "3XL"].includes(typeof first === "string" ? first : first?.size);
//                         if (isStd) {
//                             setSizeType("standard");
//                             const en = []; const obj = { ...INIT_STD };
//                             p.sizes.forEach(s => {
//                                 const k = typeof s === "string" ? s : s.size;
//                                 en.push(k);
//                                 obj[k] = { multiplier: s?.priceMultiplier || 1, stock: s?.stock || 0, customPrice: s?.customPrice || "", useCustomPrice: s?.useCustomPrice || false };
//                             });
//                             setEnabledSz(en); setStdSizes(obj);
//                         } else {
//                             setSizeType("inch");
//                             setInchSizes(p.sizes.map(s => ({ size: typeof s === "string" ? s : s.size, multiplier: s?.priceMultiplier || 1, stock: s?.stock || 0, customPrice: s?.customPrice || "", useCustomPrice: s?.useCustomPrice || false })));
//                         }
//                     }
//                 } else toast.error("Failed to load product");
//             } catch { toast.error("Failed to load product"); }
//             finally { setLoading(false); }
//         };
//         fetchProduct();
//     }, [id]);

//     /* ── Progress ── */
//     useEffect(() => {
//         let s = 0;
//         if (name.trim()) s += 15;
//         if (description.trim()) s += 10;
//         if (price) s += 15;
//         if (totalImages > 0) s += 15;
//         if (colors.length) s += 15;
//         if (hasSizes) s += 20;
//         if (detDesc) s += 10;
//         setProgress(Math.min(100, s));
//     }, [name, description, price, totalImages, colors, hasSizes, detDesc]);

//     /* ── Image handlers ── */
//     const setSlotFile = (i, file) => setSlots(prev => { const n = [...prev]; n[i] = { ...n[i], newFile: file }; return n; });
//     const clearSlotNew = (i) => setSlots(prev => { const n = [...prev]; n[i] = { ...n[i], newFile: null }; return n; });
//     const clearSlotAll = (i) => setSlots(prev => { const n = [...prev]; n[i] = { existing: null, newFile: null }; return n; });

//     const addFilesToSlots = (files) => {
//         let added = 0;
//         setSlots(prev => {
//             const next = [...prev];
//             for (const file of files) {
//                 const emptyIdx = next.findIndex(s => !s.existing && !s.newFile);
//                 if (emptyIdx === -1) break;
//                 next[emptyIdx] = { existing: null, newFile: file };
//                 added++;
//             }
//             return next;
//         });
//         requestAnimationFrame(() => {
//             if (added > 0) toast.success(`${added} image${added > 1 ? "s" : ""} added!`);
//             else toast.info("All image slots are full");
//         });
//     };

//     const handleDragEnter = useCallback((e) => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
//     const handleDragOver = useCallback((e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = "copy"; setDragging(true); }, []);
//     const handleDragLeave = useCallback((e) => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
//     const handleDrop = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation(); setDragging(false);
//         const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/"));
//         if (!files.length) { toast.error("Only image files allowed"); return; }
//         addFilesToSlots(files);
//     }, []);

//     /* ── Color handlers ── */
//     const addColor = () => {
//         if (colorMode !== "hexOnly" && !newCName.trim()) return toast.error("Enter color name");
//         const c = { name: newCName.trim() || `Color-${colors.length + 1}`, hex: newCHex || "#808080" };
//         if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color exists");
//         setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added`);
//     };
//     const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = (p) => colors.some(c => c.name.toLowerCase() === p.name.toLowerCase()) ? toast.info(`${p.name} already added`) : (setColors([...colors, p]), toast.success(`${p.name} added!`));

//     /* ── Size handlers ── */
//     const toggleSz = (k) => setEnabledSz(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k]);
//     const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === "stock" ? parseInt(v) || 0 : f === "multiplier" ? parseFloat(v) || 1 : v } }));
//     const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
//     const addInch = () => {
//         if (!niSize.trim()) return toast.error("Enter size");
//         if (inchSizes.some(s => s.size === niSize)) return toast.error("Size exists");
//         setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
//         setNiSize(""); setNiMult(1); setNiStock(0); setNiPrice(""); setNiCustom(false); toast.success("Size added!");
//     };
//     const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === "useCustomPrice") u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === "stock") u[i].stock = parseInt(v) || 0; else if (f === "multiplier") u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };
//     const fmtSizes = () => sizeType === "standard"
//         ? enabledSz.map(k => ({ size: k, priceMultiplier: stdSizes[k].multiplier, stock: stdSizes[k].stock, customPrice: stdSizes[k].customPrice, useCustomPrice: stdSizes[k].useCustomPrice }))
//         : inchSizes.map(s => ({ size: s.size, priceMultiplier: s.multiplier, stock: s.stock, customPrice: s.customPrice, useCustomPrice: s.useCustomPrice }));

//     /* ── Submit ── */
//     const onSubmit = async (e) => {
//         e?.preventDefault();
//         if (!hasSizes) return toast.error("Select at least one size");
//         if (colors.length === 0) return toast.error("Add at least one color");
//         if (!price || isNaN(+price) || +price <= 0) return toast.error("Valid base price required");
//         if (totalImages === 0) return toast.error("At least one image required");

//         setSaving(true);
//         try {
//             const fd = new FormData();
//             fd.append("productId", id);
//             fd.append("name", name.trim());
//             fd.append("description", description.trim());
//             fd.append("detailedDescription", detDesc);
//             fd.append("price", price);
//             fd.append("discountPrice", discPrice || "");
//             fd.append("category", category);
//             fd.append("subCategory", subCategory);
//             fd.append("bestseller", bestseller);
//             fd.append("sizes", JSON.stringify(fmtSizes()));
//             fd.append("color", JSON.stringify(colors));
//             // Send new files; backend handles slot replacement
//             slots.forEach((s, i) => { if (s.newFile) fd.append(`image${i + 1}`, s.newFile); });

//             const res = await axios.post(backendUrl + "/api/product/update", fd, { headers: { token } });
//             if (res.data.success) { toast.success("✅ Product updated successfully!"); navigate(-1); }
//             else toast.error(res.data.message);
//         } catch { toast.error("Update failed!"); }
//         finally { setSaving(false); }
//     };

//     if (loading) return <Skeleton />;

//     /* ══════════════════════════════════ RENDER ══════════════════════════════════ */
//     return (
//         <div className="min-h-screen bg-[#f7f7f5]">
//             <style>{`
//         @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
//         .ql-container { font-size: 14px; border-radius: 0 0 12px 12px !important; border-color: #e5e7eb !important; }
//         .ql-toolbar { border-radius: 12px 12px 0 0 !important; border-color: #e5e7eb !important; background: #f9fafb; }
//         .ql-editor { min-height: 160px; font-family: inherit; }
//       `}</style>

//             {/* ── TOP BAR ── */}
//             <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
//                 <div className="flex items-center gap-3">
//                     <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-all">
//                         <TbArrowLeft size={18} />
//                     </button>
//                     <div className="w-px h-5 bg-gray-200" />
//                     <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
//                         <TbEdit size={17} className="text-white" />
//                     </div>
//                     <div>
//                         <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Edit Product</h1>
//                         <p className="text-[11px] text-gray-400 mt-0.5">{progress}% complete · ID: {id?.slice(-6).toUpperCase()}</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                         Cancel
//                     </button>
//                     <button type="button" onClick={onSubmit} disabled={saving}
//                         className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-60">
//                         {saving ? <><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</> : <><TbDeviceFloppy size={15} /> Save Changes</>}
//                     </button>
//                 </div>
//             </div>

//             {/* ── PROGRESS BAR ── */}
//             <div className="h-1 bg-gray-100">
//                 <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }} />
//             </div>

//             <form onSubmit={onSubmit}>
//                 <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 p-6 max-w-[1400px] items-start">

//                     {/* ══════════ LEFT COLUMN ══════════ */}
//                     <div>

//                         {/* ── BASIC INFO ── */}
//                         <Card icon={<TbPackage size={18} />} title="Basic Information" subtitle="Name, description & categorisation">
//                             <Field label="Product Name" required>
//                                 <div className="relative">
//                                     <input className={inputCls + (name.length > 90 ? " border-red-400 bg-red-50" : "")} type="text" maxLength={100} placeholder="e.g. Classic Oxford Shirt" value={name} onChange={e => setName(e.target.value)} required />
//                                     <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${name.length > 80 ? "text-amber-500" : "text-gray-400"}`}>{name.length}/100</span>
//                                 </div>
//                             </Field>

//                             <Field label="Short Description" required>
//                                 <div className="relative">
//                                     <textarea className={inputCls + " resize-y min-h-[90px] " + (description.length > 280 ? "border-red-400 bg-red-50" : "")} maxLength={300} rows={3} placeholder="Brief description for listings…" value={description} onChange={e => setDescription(e.target.value)} required />
//                                     <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${description.length > 240 ? "text-amber-500" : "text-gray-400"}`}>{description.length}/300</span>
//                                 </div>
//                             </Field>

//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                                 <Field label="Category">
//                                     <select className={selectCls} value={category} onChange={e => { setCategory(e.target.value); setSubCat(e.target.value === "Others" ? "Cushion Cover" : "Topwear"); }}>
//                                         <option>Men</option><option>Women</option><option>Others</option>
//                                     </select>
//                                 </Field>
//                                 <Field label="Sub Category">
//                                     <select className={selectCls} value={subCategory} onChange={e => setSubCat(e.target.value)}>
//                                         {category === "Others"
//                                             ? <><option>Cushion Cover</option><option>Aprons</option><option>Desk Mat</option><option>Pillow</option><option>Chair Cover</option></>
//                                             : <><option>Topwear</option><option>Bottomwear</option><option>Winterwear</option></>}
//                                     </select>
//                                 </Field>
//                                 <Field label="SKU / Code" hint="Auto-generated if blank">
//                                     <input className={inputCls} type="text" placeholder="Auto-generated" />
//                                 </Field>
//                             </div>

//                             <div className="border-t border-gray-100 pt-5 mt-1">
//                                 <Field label="Detailed Description" hint="Shown on product detail page — add specs, care instructions, materials">
//                                     <ReactQuill theme="snow" value={detDesc} onChange={setDetDesc} />
//                                 </Field>
//                             </div>
//                         </Card>

//                         {/* ── IMAGES ── */}
//                         <Card
//                             icon={<TbPhoto size={18} />}
//                             title="Product Images"
//                             subtitle={`${totalImages}/10 images · ${existingCount} existing · ${newFilesCount} new`}
//                             action={allSlotImgs.length > 0 && (
//                                 <button type="button" onClick={() => setLightbox({ imgs: allSlotImgs, start: 0 })}
//                                     className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                                     <TbEye size={13} /> View All
//                                 </button>
//                             )}
//                         >
//                             {/* Drop Zone */}
//                             <div
//                                 ref={dzRef}
//                                 className={`relative rounded-2xl border-2 border-dashed text-center p-7 mb-5 transition-all duration-200 cursor-pointer
//                   ${dragging ? "border-indigo-500 bg-indigo-50 scale-[1.01]" : "border-gray-200 bg-gray-50 hover:border-gray-300"}`}
//                                 onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
//                             >
//                                 <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${dragging ? "bg-indigo-100" : "bg-gray-100"}`}>
//                                     <TbCloudUpload size={24} className={dragging ? "text-indigo-500" : "text-gray-400"} />
//                                 </div>
//                                 <p className="text-[14px] font-semibold text-gray-700 mb-1">{dragging ? "Drop images here!" : "Drag & drop to add images"}</p>
//                                 <p className="text-[12px] text-gray-400">or click individual slots below · PNG, JPG, WEBP · 800×800px recommended</p>
//                                 {!dragging && (
//                                     <input type="file" accept="image/*" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-[0]"
//                                         onChange={e => { const files = Array.from(e.target.files); addFilesToSlots(files); e.target.value = ""; }}
//                                     />
//                                 )}
//                             </div>

//                             {/* 10 Image Slots */}
//                             <div className="grid grid-cols-5 gap-2.5">
//                                 {slots.map((slot, i) => {
//                                     const displayUrl = slot.newFile ? URL.createObjectURL(slot.newFile) : slot.existing;
//                                     const hasImg = !!displayUrl;
//                                     const isNew = !!slot.newFile;
//                                     const isExisting = !!slot.existing && !slot.newFile;

//                                     return (
//                                         <div key={i} className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all group
//                       ${hasImg ? (i === 0 ? "border-indigo-400 ring-2 ring-indigo-100" : isNew ? "border-emerald-400" : "border-transparent") : "border-dashed border-gray-200 bg-gray-50 hover:border-gray-300 cursor-pointer"}`}>
//                                             {hasImg ? (
//                                                 <>
//                                                     <img src={displayUrl} alt="" className="w-full h-full object-cover" />

//                                                     {/* Badges */}
//                                                     {i === 0 && <span className="absolute top-1.5 left-1.5 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">MAIN</span>}
//                                                     {isNew && <span className="absolute bottom-1.5 left-1.5 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">NEW</span>}
//                                                     {isExisting && <span className="absolute bottom-1.5 left-1.5 bg-gray-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">SAVED</span>}
//                                                     <span className="absolute top-1.5 right-1.5 bg-black/50 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">{i + 1}</span>

//                                                     {/* Hover overlay */}
//                                                     <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 z-20">
//                                                         <button type="button" className="bg-white text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-gray-100 transition-colors"
//                                                             onMouseDown={e => { e.preventDefault(); e.stopPropagation(); const idx = allSlotImgs.indexOf(displayUrl); setLightbox({ imgs: allSlotImgs, start: Math.max(0, idx) }); }}>
//                                                             🔍 View
//                                                         </button>
//                                                         {isNew ? (
//                                                             <button type="button" className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-amber-600 transition-colors"
//                                                                 onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotNew(i); }}>
//                                                                 ↩ Revert
//                                                             </button>
//                                                         ) : null}
//                                                         <button type="button" className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-red-600 transition-colors"
//                                                             onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotAll(i); }}>
//                                                             ✕ Remove
//                                                         </button>
//                                                     </div>

//                                                     {/* Click to replace — input on top */}
//                                                     <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0] z-30 group-hover:z-0"
//                                                         onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ""; }} />
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <div className="flex flex-col items-center justify-center h-full">
//                                                         <TbPlus size={16} className="text-gray-300 mb-0.5" />
//                                                         <span className="text-[9px] text-gray-300 font-medium">{i + 1}</span>
//                                                     </div>
//                                                     <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0]"
//                                                         onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ""; }} />
//                                                 </>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                             {/* Legend */}
//                             <div className="flex items-center gap-4 mt-3">
//                                 <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500" /> Main photo</div>
//                                 <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> New (unsaved)</div>
//                                 <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-gray-500" /> Saved</div>
//                             </div>
//                             <p className="text-[11.5px] text-gray-400 mt-1.5">Hover any slot to view, replace or remove. Drag & drop multiple images onto the zone above.</p>
//                         </Card>

//                         {/* ── COLORS ── */}
//                         <Card
//                             icon={<TbPalette size={18} />}
//                             title="Color Variants"
//                             subtitle={`${colors.length} color${colors.length !== 1 ? "s" : ""} added`}
//                             badge={colors.length > 0 && <span className="px-2 py-0.5 rounded-full bg-gray-900 text-white text-[10px] font-bold">{colors.length}</span>}
//                         >
//                             {/* Mode */}
//                             <Field label="Input Mode">
//                                 <div className="flex gap-2 flex-wrap">
//                                     {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
//                                         <button key={v} type="button" onClick={() => setColorMode(v)}
//                                             className={`px-3.5 py-2 rounded-xl text-[12.5px] font-semibold border transition-all ${colorMode === v ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}>
//                                             {l}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </Field>

//                             {/* Add color row */}
//                             <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
//                                 {(colorMode === "both" || colorMode === "nameOnly") && (
//                                     <Field label="Name">
//                                         <input className={inputCls} style={{ width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newCName} onChange={e => setNewCName(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addColor())} />
//                                     </Field>
//                                 )}
//                                 {(colorMode === "both" || colorMode === "hexOnly") && (
//                                     <Field label="Color">
//                                         <div className="flex gap-2 items-center">
//                                             <input type="color" value={newCHex} onChange={e => setNewCHex(e.target.value)} className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-1" />
//                                             <input className={inputCls} style={{ width: 100 }} type="text" value={newCHex} onChange={e => setNewCHex(e.target.value)} />
//                                         </div>
//                                     </Field>
//                                 )}
//                                 <button type="button" onClick={addColor} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
//                                     <TbPlus size={14} /> Add
//                                 </button>
//                             </div>

//                             {/* Color list */}
//                             {colors.length === 0 ? (
//                                 <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl mb-4">
//                                     <TbPalette size={28} className="text-gray-200 mx-auto mb-2" />
//                                     <p className="text-[13px] text-gray-400 font-medium">No colors yet</p>
//                                     <p className="text-[12px] text-gray-300">Add above or pick from presets</p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-2 mb-4">
//                                     {colors.map((c, i) => (
//                                         <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors group">
//                                             <input type="color" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)} className="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer p-1 flex-shrink-0" />
//                                             <div className="flex-1 grid grid-cols-2 gap-2">
//                                                 <input type="text" value={c.name} onChange={e => edColor(i, "name", e.target.value)} placeholder="Color name" className="text-[13px] font-medium text-gray-800 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 transition-colors" />
//                                                 <input type="text" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)} placeholder="#000000" className="text-[12px] text-gray-400 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 font-mono transition-colors" />
//                                             </div>
//                                             <div className="w-6 h-6 rounded-full border border-black/10 flex-shrink-0" style={{ background: c.hex }} />
//                                             <button type="button" onClick={() => rmColor(c.name)} className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100">
//                                                 <TbX size={13} />
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Presets */}
//                             <div className="border-t border-gray-100 pt-4">
//                                 <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">Quick Presets</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {PRESETS.map((p, i) => {
//                                         const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
//                                         return (
//                                             <button key={i} type="button" onClick={() => addPreset(p)}
//                                                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all ${added ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"}`}>
//                                                 <div className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0" style={{ background: p.hex }} />
//                                                 {p.name}{added ? " ✓" : ""}
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </Card>

//                         {/* ── SIZES ── */}
//                         <Card icon={<TbRuler size={18} />} title="Sizes & Inventory" subtitle="Manage sizes, stock & pricing per size">
//                             {/* Size type */}
//                             <Field label="Size System">
//                                 <div className="flex gap-2">
//                                     {[["standard", "👕 Standard (XS–3XL)"], ["inch", "📏 Inch-Based"]].map(([v, l]) => (
//                                         <button key={v} type="button" onClick={() => setSizeType(v)}
//                                             className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${sizeType === v ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}>
//                                             {l}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </Field>

//                             {/* Standard Sizes */}
//                             {sizeType === "standard" && (
//                                 <>
//                                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
//                                         {Object.keys(stdSizes).map(k => {
//                                             const on = enabledSz.includes(k);
//                                             const d = stdSizes[k];
//                                             return (
//                                                 <div key={k}
//                                                     className={`rounded-xl border-2 p-3.5 transition-all cursor-pointer ${on ? "border-indigo-400 bg-indigo-50/30 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`}
//                                                     onClick={() => !on && toggleSz(k)}>
//                                                     <div className="flex items-center gap-2 mb-2">
//                                                         <input type="checkbox" checked={on} onChange={() => toggleSz(k)} onClick={e => e.stopPropagation()} className="w-4 h-4 rounded accent-indigo-600 cursor-pointer" />
//                                                         <span className={`text-[13px] font-extrabold px-2 py-0.5 rounded-md ${on ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}>{k}</span>
//                                                         {on && d.stock > 0 && <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">{d.stock}×</span>}
//                                                     </div>
//                                                     {on && (
//                                                         <div onClick={e => e.stopPropagation()} className="space-y-2 mt-2">
//                                                             <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 cursor-pointer">
//                                                                 <input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} className="w-3.5 h-3.5 rounded accent-indigo-600 cursor-pointer" />
//                                                                 Custom Price
//                                                             </label>
//                                                             {d.useCustomPrice ? (
//                                                                 <div>
//                                                                     <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label>
//                                                                     <input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, "customPrice", e.target.value)} placeholder="Price" className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                                     <span className="text-[10.5px] text-indigo-600 font-bold mt-1 block">₹ {d.customPrice || "—"}</span>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div>
//                                                                     <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier ×{d.multiplier}</label>
//                                                                     <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, "multiplier", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                                     <span className="text-[10.5px] text-emerald-600 font-bold mt-1 block">₹ {price ? calcPrice(d).toFixed(2) : "—"}</span>
//                                                                 </div>
//                                                             )}
//                                                             <div>
//                                                                 <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label>
//                                                                 <input type="number" min="0" value={d.stock} onChange={e => setSzF(k, "stock", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>

//                                     {enabledSz.length > 0 && (
//                                         <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
//                                             {enabledSz.map(k => (
//                                                 <span key={k} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-full text-[11.5px] font-semibold">
//                                                     {k} · ₹{price ? calcPrice(stdSizes[k]).toFixed(0) : "—"} · {stdSizes[k].stock}pcs
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     )}

//                                     <div className="flex gap-2 flex-wrap">
//                                         {[["S/M/L/XL", ["S", "M", "L", "XL"]], ["All Sizes", Object.keys(stdSizes)]].map(([l, sz]) => (
//                                             <button key={l} type="button" onClick={() => setEnabledSz(sz)}
//                                                 className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                                                 Select {l}
//                                             </button>
//                                         ))}
//                                         <button type="button" onClick={() => setEnabledSz([])} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-red-500 transition-colors">
//                                             Clear All
//                                         </button>
//                                     </div>
//                                 </>
//                             )}

//                             {/* Inch Sizes */}
//                             {sizeType === "inch" && (
//                                 <>
//                                     <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
//                                         <Field label="Size Label"><input className={inputCls} style={{ width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} /></Field>
//                                         <Field label="Stock"><input className={inputCls} style={{ width: 75 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} /></Field>
//                                         <label className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600 cursor-pointer pb-2.5">
//                                             <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} className="w-4 h-4 rounded accent-indigo-600" /> Custom Price
//                                         </label>
//                                         {niCustom ? <Field label="Price (₹)"><input className={inputCls} style={{ width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></Field>
//                                             : <Field label="Multiplier"><input className={inputCls} style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></Field>}
//                                         <button type="button" onClick={addInch} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
//                                             <TbPlus size={14} /> Add
//                                         </button>
//                                     </div>
//                                     {inchSizes.length === 0 ? (
//                                         <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl">
//                                             <TbRuler size={28} className="text-gray-200 mx-auto mb-2" />
//                                             <p className="text-[13px] text-gray-400">No inch sizes yet</p>
//                                         </div>
//                                     ) : (
//                                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                                             {inchSizes.map((s, i) => (
//                                                 <div key={i} className="bg-white border border-gray-100 rounded-xl p-3.5">
//                                                     <div className="flex items-center justify-between mb-3">
//                                                         <span className="text-[14px] font-extrabold text-gray-900">{s.size}"</span>
//                                                         <button type="button" onClick={() => rmInch(s.size)} className="w-6 h-6 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100"><TbX size={11} /></button>
//                                                     </div>
//                                                     <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 mb-2 cursor-pointer">
//                                                         <input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, "useCustomPrice")} className="w-3.5 h-3.5 rounded accent-indigo-600" /> Custom Price
//                                                     </label>
//                                                     {s.useCustomPrice
//                                                         ? <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, "customPrice", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                         : <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, "multiplier", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                     }
//                                                     <div><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, "stock", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                     <span className="text-[10.5px] text-emerald-600 font-bold mt-1.5 block">₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : "—"}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </Card>
//                     </div>

//                     {/* ══════════ SIDEBAR ══════════ */}
//                     <div className="space-y-4">

//                         {/* Save */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center"><TbDeviceFloppy size={18} className="text-indigo-600" /></div>
//                                 <div>
//                                     <p className="text-[13.5px] font-bold text-gray-900">Save Changes</p>
//                                     <p className="text-[11px] text-gray-400">Update product on store</p>
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <div className="flex justify-between text-[11.5px] font-semibold text-gray-500 mb-1.5"><span>Completion</span><span className="text-gray-900">{progress}%</span></div>
//                                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                                     <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
//                                 </div>
//                             </div>
//                             <button type="button" onClick={() => setBest(p => !p)}
//                                 className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border mb-4 transition-all ${bestseller ? "bg-amber-50 border-amber-200" : "bg-gray-50 border-gray-100 hover:border-gray-200"}`}>
//                                 <div className="flex items-center gap-2">
//                                     <TbStar size={15} className={bestseller ? "text-amber-500" : "text-gray-400"} />
//                                     <span className="text-[13px] font-semibold text-gray-700">Mark as Bestseller</span>
//                                 </div>
//                                 <div className={`w-10 rounded-full relative transition-colors flex-shrink-0`} style={{ height: 22, background: bestseller ? "#f59e0b" : "#e5e7eb" }}>
//                                     <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${bestseller ? "translate-x-[22px]" : "translate-x-[3px]"}`} />
//                                 </div>
//                             </button>
//                             <button type="button" onClick={onSubmit} disabled={saving}
//                                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-bold transition-colors shadow-sm disabled:opacity-60 mb-2">
//                                 {saving ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</> : <><TbDeviceFloppy size={15} /> Save Changes</>}
//                             </button>
//                             <button type="button" onClick={() => navigate(-1)} className="w-full py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors">
//                                 Cancel
//                             </button>
//                         </div>

//                         {/* Pricing */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center"><TbTag size={16} className="text-emerald-600" /></div>
//                                 <p className="text-[13.5px] font-bold text-gray-900">Pricing</p>
//                             </div>
//                             <Field label="Base Price (₹)" required hint="Used for size multiplier calculations">
//                                 <input className={inputCls} type="number" placeholder="0.00" value={price} onChange={e => setPrice(e.target.value)} required />
//                             </Field>
//                             <Field label="Sale Price (₹)" hint="Optional — shown as sale price">
//                                 <input className={inputCls} type="number" placeholder="0.00" value={discPrice} onChange={e => setDiscPrice(e.target.value)} />
//                             </Field>
//                             {discount && (
//                                 <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl mt-1">
//                                     <span className="text-[12.5px] font-semibold text-emerald-700">💸 Discount active</span>
//                                     <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">{discount}% off</span>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Summary */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center"><TbChartBar size={16} className="text-indigo-600" /></div>
//                                 <div><p className="text-[13.5px] font-bold text-gray-900">Summary</p><p className="text-[11px] text-gray-400">Live overview</p></div>
//                             </div>
//                             <div className="space-y-0">
//                                 {[
//                                     ["Name", name || <span className="text-gray-300 italic text-[12px]">Not set</span>],
//                                     ["Category", `${category} › ${subCategory}`],
//                                     ["Base Price", price ? <span className="font-bold">₹{price}</span> : <span className="text-gray-300">—</span>],
//                                     ["Sale Price", discPrice ? <span className="text-emerald-600 font-bold">₹{discPrice}</span> : <span className="text-gray-300">—</span>],
//                                     ["Colors", colors.length > 0 ? <div className="flex gap-1 flex-wrap justify-end">{colors.map((c, i) => <div key={i} title={c.name} className="w-4 h-4 rounded-full border border-black/10" style={{ background: c.hex }} />)}</div> : <span className="text-gray-300">—</span>],
//                                     ["Sizes", sizeType === "standard" ? (enabledSz.length ? <span className="font-semibold">{enabledSz.join(", ")}</span> : <span className="text-gray-300">None</span>) : (inchSizes.length ? <span className="font-semibold">{inchSizes.map(s => s.size).join(", ")}</span> : <span className="text-gray-300">None</span>)],
//                                     ["Images", <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${totalImages > 0 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{totalImages}/10 · {newFilesCount} new</span>],
//                                     ["Bestseller", bestseller ? <span className="bg-amber-100 text-amber-700 text-[10.5px] font-bold px-2 py-0.5 rounded-full">⭐ Yes</span> : <span className="text-gray-400 text-[12px]">No</span>],
//                                 ].map(([k, v], i) => (
//                                     <div key={i} className="flex items-start justify-between py-2 border-b border-gray-50 last:border-0 gap-3">
//                                         <span className="text-[12px] text-gray-400 font-medium flex-shrink-0">{k}</span>
//                                         <span className="text-[12.5px] text-gray-800 font-medium text-right max-w-[150px] truncate">{v}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quick Actions */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center"><TbBolt size={16} className="text-violet-600" /></div>
//                                 <p className="text-[13.5px] font-bold text-gray-900">Quick Actions</p>
//                             </div>
//                             <div className="space-y-2">
//                                 {[
//                                     ["🎨 Add basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added`); }],
//                                     ["👕 Select S/M/L/XL", () => { setEnabledSz(["S", "M", "L", "XL"]); setSizeType("standard"); toast.success("S/M/L/XL selected"); }],
//                                     ["✅ Select all sizes", () => { setEnabledSz(Object.keys(stdSizes)); setSizeType("standard"); toast.success("All sizes selected"); }],
//                                     ["🗑 Clear all colors", () => { setColors([]); toast.info("Colors cleared"); }],
//                                     ["🗑 Clear all sizes", () => { setEnabledSz([]); toast.info("Sizes cleared"); }],
//                                 ].map(([l, fn], i) => (
//                                     <button key={i} type="button" onClick={fn} className="w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-all">
//                                         {l}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Tips */}
//                         <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
//                             <div className="flex items-center gap-2.5 mb-3">
//                                 <HiOutlineLightBulb size={18} className="text-indigo-500 flex-shrink-0" />
//                                 <p className="text-[13px] font-bold text-indigo-800">Tips</p>
//                             </div>
//                             <ul className="space-y-1.5">
//                                 {["Drag & drop multiple images onto the drop zone", "Hover any image slot to view, replace or remove", "Green badge = new (unsaved), Gray = saved on server", "First slot is always the main product thumbnail", "Press Enter after typing a color name to add it", "Changes only save when you click 'Save Changes'"].map((tip, i) => (
//                                     <li key={i} className="flex items-start gap-2 text-[12px] text-indigo-700">
//                                         <span className="text-indigo-400 mt-0.5 flex-shrink-0">·</span> {tip}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//             {lightbox && <Lightbox imgs={lightbox.imgs} start={lightbox.start} onClose={() => setLightbox(null)} />}
//         </div>
//     );
// };

// export default UpdateProduct;





// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { backendUrl } from "../../App";
// import {
//     TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
//     TbX, TbPlus, TbTrash, TbCheck, TbAlertTriangle,
//     TbDeviceFloppy, TbRocket, TbEye, TbChevronLeft,
//     TbStar, TbInfoCircle, TbBolt, TbTag, TbEdit,
//     TbArrowLeft, TbRefresh, TbCloudUpload
// } from "react-icons/tb";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// /* ═══════════════════ CONSTANTS ═══════════════════ */
// const PRESETS = [
//     { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
//     { name: "Red", hex: "#EF4444" }, { name: "Navy", hex: "#1E3A5F" },
//     { name: "Royal Blue", hex: "#3B82F6" }, { name: "Green", hex: "#166534" },
//     { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
//     { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" },
//     { name: "Brown", hex: "#92400E" }, { name: "Gray", hex: "#9CA3AF" },
// ];

// const INIT_STD = {
//     XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//     L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//     XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//     XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//     "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
// };

// // ✅ Same subcategory options as Add page
// const SUB_CATEGORIES = {
//     Men: [
//         "Jackets", "Bomber Biker Jacket", "Moto Biker Jacket",
//         "Racing Coat", "Leather Coats", "Men Winter Wear",
//     ],
//     Women: [
//         "Jackets", "Bomber Biker Jacket", "Moto Biker Jacket",
//         "Racing Coat", "Women Winter Wear", "Women Night Dress",
//         "Leather Pencil Skirt", "Leather Full Skirt", "Slim Bodycon Skirt",
//     ],
//     Others: [
//         "Pillow", "Cushion Cover", "Aprons", "Desk Mat", "Chair Cover",
//     ],
// };

// /* ═══════════════════ LIGHTBOX ═══════════════════ */
// const Lightbox = ({ imgs, start, onClose }) => {
//     const [cur, setCur] = useState(start);
//     useEffect(() => {
//         const h = (e) => {
//             if (e.key === "Escape") onClose();
//             if (e.key === "ArrowLeft") setCur(p => Math.max(0, p - 1));
//             if (e.key === "ArrowRight") setCur(p => Math.min(imgs.length - 1, p + 1));
//         };
//         window.addEventListener("keydown", h);
//         return () => window.removeEventListener("keydown", h);
//     }, [imgs.length, onClose]);

//     return (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/88 backdrop-blur-sm" onClick={onClose}>
//             <div className="relative flex flex-col items-center gap-4 max-w-[90vw]" onClick={e => e.stopPropagation()}>
//                 <button onClick={onClose} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg hover:rotate-90 transition-transform z-10">
//                     <TbX size={14} className="text-gray-800" />
//                 </button>
//                 <img src={imgs[cur]} alt="" className="max-w-[80vw] max-h-[72vh] rounded-xl object-contain shadow-2xl" />
//                 {cur > 0 && <button onClick={() => setCur(p => p - 1)} className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronLeft size={22} /></button>}
//                 {cur < imgs.length - 1 && <button onClick={() => setCur(p => p + 1)} className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronRight size={22} /></button>}
//                 {imgs.length > 1 && (
//                     <div className="flex gap-2 flex-wrap justify-center max-w-[80vw]">
//                         {imgs.map((img, i) => <img key={i} src={img} alt="" onClick={() => setCur(i)} className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${i === cur ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-75"}`} />)}
//                     </div>
//                 )}
//                 <p className="text-white/50 text-xs">{cur + 1} / {imgs.length} · Esc to close</p>
//             </div>
//         </div>
//     );
// };

// /* ═══════════════════ CARD ═══════════════════ */
// const Card = ({ icon, title, subtitle, badge, children, action }) => (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-5">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
//             <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">{icon}</div>
//                 <div>
//                     <div className="flex items-center gap-2">
//                         <span className="text-[14px] font-bold text-gray-900">{title}</span>
//                         {badge}
//                     </div>
//                     {subtitle && <p className="text-[11.5px] text-gray-400 mt-0.5">{subtitle}</p>}
//                 </div>
//             </div>
//             {action}
//         </div>
//         <div className="p-6">{children}</div>
//     </div>
// );

// /* ═══════════════════ FIELD ═══════════════════ */
// const Field = ({ label, required, hint, children }) => (
//     <div className="mb-5 last:mb-0">
//         {label && <label className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">{label}{required && <span className="text-red-500 text-sm">*</span>}</label>}
//         {children}
//         {hint && <p className="text-[11.5px] text-gray-400 mt-1.5">{hint}</p>}
//     </div>
// );

// const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13.5px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all";
// const selectCls = inputCls + " appearance-none cursor-pointer bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=')] bg-no-repeat bg-[right_12px_center] pr-9";

// /* ═══════════════════ SKELETON ═══════════════════ */
// const Skeleton = () => (
//     <div className="min-h-screen bg-[#f7f7f5]">
//         <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gray-100 rounded-xl animate-pulse" />
//                 <div className="w-px h-5 bg-gray-200" />
//                 <div className="w-32 h-5 bg-gray-100 rounded-lg animate-pulse" />
//             </div>
//             <div className="flex gap-2">
//                 <div className="w-24 h-9 bg-gray-100 rounded-xl animate-pulse" />
//                 <div className="w-32 h-9 bg-gray-100 rounded-xl animate-pulse" />
//             </div>
//         </div>
//         <div className="p-6 grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 max-w-[1400px]">
//             <div className="space-y-5">
//                 {[280, 220, 200, 260].map((h, i) => <div key={i} className="bg-white rounded-2xl border border-gray-100 animate-pulse" style={{ height: h }} />)}
//             </div>
//             <div className="space-y-4">
//                 {[180, 160, 200].map((h, i) => <div key={i} className="bg-white rounded-2xl border border-gray-100 animate-pulse" style={{ height: h }} />)}
//             </div>
//         </div>
//     </div>
// );

// /* ═══════════════════ MAIN ═══════════════════ */
// const UpdateProduct = ({ token }) => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [slots, setSlots] = useState(Array(10).fill(null).map(() => ({ existing: null, newFile: null })));
//     const [dragging, setDragging] = useState(false);
//     const [lightbox, setLightbox] = useState(null);
//     const dzRef = useRef(null);

//     const [name, setName] = useState("");
//     const [description, setDesc] = useState("");
//     const [detDesc, setDetDesc] = useState("");
//     const [price, setPrice] = useState("");
//     const [discPrice, setDiscPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCat] = useState("Jackets");
//     const [bestseller, setBest] = useState(false);

//     const [colors, setColors] = useState([]);
//     const [newCName, setNewCName] = useState("");
//     const [newCHex, setNewCHex] = useState("#000000");
//     const [colorMode, setColorMode] = useState("both");

//     const [sizeType, setSizeType] = useState("standard");
//     const [stdSizes, setStdSizes] = useState(INIT_STD);
//     const [enabledSz, setEnabledSz] = useState([]);
//     const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState("");
//     const [niMult, setNiMult] = useState(1.0);
//     const [niStock, setNiStock] = useState(0);
//     const [niPrice, setNiPrice] = useState("");
//     const [niCustom, setNiCustom] = useState(false);

//     const [loading, setLoading] = useState(true);
//     const [saving, setSaving] = useState(false);
//     const [progress, setProgress] = useState(0);

//     /* ── Derived ── */
//     const allSlotImgs = slots.map(s => s.newFile ? URL.createObjectURL(s.newFile) : s.existing).filter(Boolean);
//     const existingCount = slots.filter(s => s.existing && !s.newFile).length;
//     const newFilesCount = slots.filter(s => s.newFile).length;
//     const totalImages = slots.filter(s => s.newFile || s.existing).length;
//     const discount = discPrice && price && +discPrice < +price ? Math.round((1 - discPrice / price) * 100) : null;
//     const hasSizes = sizeType === "standard" ? enabledSz.length > 0 : inchSizes.length > 0;
//     const calcPrice = (d) => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;

//     /* ── Fetch product ── */
//     useEffect(() => {
//         const fetch = async () => {
//             setLoading(true);
//             try {
//                 const res = await axios.post(backendUrl + "/api/product/single", { productId: id });
//                 if (res.data.success) {
//                     const p = res.data.product;
//                     setName(p.name || "");
//                     setDesc(p.description || "");
//                     setDetDesc(p.detailedDescription || "");
//                     setPrice(String(p.price || ""));
//                     setDiscPrice(String(p.discountPrice || ""));
//                     setBest(p.bestseller || false);

//                     // ✅ Set category first, then match subCategory
//                     const cat = p.category || "Men";
//                     setCategory(cat);
//                     const validSubs = SUB_CATEGORIES[cat] || [];
//                     const sub = p.subCategory || "";
//                     setSubCat(validSubs.includes(sub) ? sub : validSubs[0]);

//                     const existingImgs = Array.isArray(p.image) ? p.image.filter(Boolean) : [p.image].filter(Boolean);
//                     setSlots(Array(10).fill(null).map((_, i) => ({ existing: existingImgs[i] || null, newFile: null })));

//                     if (p.color?.length) setColors(p.color.map(c => typeof c === "string" ? { name: c, hex: "#808080" } : { name: c.name || c, hex: c.hex || "#808080" }));

//                     if (p.sizes?.length) {
//                         const first = p.sizes[0];
//                         const isStd = ["XS", "S", "M", "L", "XL", "XXL", "3XL"].includes(typeof first === "string" ? first : first?.size);
//                         if (isStd) {
//                             setSizeType("standard");
//                             const en = []; const obj = { ...INIT_STD };
//                             p.sizes.forEach(s => {
//                                 const k = typeof s === "string" ? s : s.size;
//                                 en.push(k);
//                                 // obj[k] = { multiplier: s?.priceMultiplier || 1, stock: s?.stock || 0, customPrice: s?.customPrice || "", useCustomPrice: s?.useCustomPrice || false };
//                                 // ✅ ?? use karo (nullish coalescing)
//                                 obj[k] = {
//                                     multiplier: s?.priceMultiplier || 1,
//                                     stock: s?.stock ?? 0,
//                                     customPrice: s?.customPrice > 0 ? String(s.customPrice) : "",
//                                     useCustomPrice: s?.useCustomPrice === true  // ✅ strictly boolean
//                                 };
//                             });
//                             setEnabledSz(en); setStdSizes(obj);
//                         } else {
//                             setSizeType("inch");
//                             setInchSizes(p.sizes.map(s => ({ size: typeof s === "string" ? s : s.size, multiplier: s?.priceMultiplier || 1, stock: s?.stock || 0, customPrice: s?.customPrice || "", useCustomPrice: s?.useCustomPrice || false })));
//                         }
//                     }
//                 } else toast.error("Failed to load product");
//             } catch { toast.error("Failed to load product"); }
//             finally { setLoading(false); }
//         };
//         fetch();
//     }, [id]);

//     /* ── Auto-reset subCategory when category changes ── */
//     // ✅ Same logic as Add page
//     const handleCategoryChange = (newCat) => {
//         setCategory(newCat);
//         const validSubs = SUB_CATEGORIES[newCat] || [];
//         setSubCat(validSubs[0] || "");
//     };

//     /* ── Progress ── */
//     useEffect(() => {
//         let s = 0;
//         if (name.trim()) s += 15;
//         if (description.trim()) s += 10;
//         if (price) s += 15;
//         if (totalImages > 0) s += 15;
//         if (colors.length) s += 15;
//         if (hasSizes) s += 20;
//         if (detDesc) s += 10;
//         setProgress(Math.min(100, s));
//     }, [name, description, price, totalImages, colors, hasSizes, detDesc]);

//     /* ── Image handlers ── */
//     const setSlotFile = (i, file) => setSlots(prev => { const n = [...prev]; n[i] = { ...n[i], newFile: file }; return n; });
//     const clearSlotNew = (i) => setSlots(prev => { const n = [...prev]; n[i] = { ...n[i], newFile: null }; return n; });
//     const clearSlotAll = (i) => setSlots(prev => { const n = [...prev]; n[i] = { existing: null, newFile: null }; return n; });

//     const addFilesToSlots = (files) => {
//         let added = 0;
//         setSlots(prev => {
//             const next = [...prev];
//             for (const file of files) {
//                 const emptyIdx = next.findIndex(s => !s.existing && !s.newFile);
//                 if (emptyIdx === -1) break;
//                 next[emptyIdx] = { existing: null, newFile: file };
//                 added++;
//             }
//             return next;
//         });
//         requestAnimationFrame(() => { if (added > 0) toast.success(`${added} image${added > 1 ? "s" : ""} added!`); else toast.info("All slots full"); });
//     };

//     const handleDragEnter = useCallback((e) => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
//     const handleDragOver = useCallback((e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = "copy"; setDragging(true); }, []);
//     const handleDragLeave = useCallback((e) => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
//     const handleDrop = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation(); setDragging(false);
//         const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/"));
//         if (!files.length) { toast.error("Only image files allowed"); return; }
//         addFilesToSlots(files);
//     }, []);

//     /* ── Color handlers ── */
//     const addColor = () => {
//         if (colorMode !== "hexOnly" && !newCName.trim()) return toast.error("Enter color name");
//         const c = { name: newCName.trim() || `Color-${colors.length + 1}`, hex: newCHex || "#808080" };
//         if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color exists");
//         setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added`);
//     };
//     const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = (p) => colors.some(c => c.name.toLowerCase() === p.name.toLowerCase()) ? toast.info(`${p.name} already added`) : (setColors([...colors, p]), toast.success(`${p.name} added!`));

//     /* ── Size handlers ── */
//     const toggleSz = (k) => setEnabledSz(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k]);
//     const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === "stock" ? parseInt(v) || 0 : f === "multiplier" ? parseFloat(v) || 1 : v } }));
//     const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
//     const addInch = () => {
//         if (!niSize.trim()) return toast.error("Enter size");
//         if (inchSizes.some(s => s.size === niSize)) return toast.error("Size exists");
//         setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
//         setNiSize(""); setNiMult(1); setNiStock(0); setNiPrice(""); setNiCustom(false); toast.success("Size added!");
//     };
//     const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === "useCustomPrice") u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === "stock") u[i].stock = parseInt(v) || 0; else if (f === "multiplier") u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };
//     const fmtSizes = () => sizeType === "standard"
//         ? enabledSz.map(k => ({ size: k, priceMultiplier: stdSizes[k].multiplier, stock: stdSizes[k].stock, customPrice: stdSizes[k].customPrice, useCustomPrice: stdSizes[k].useCustomPrice }))
//         : inchSizes.map(s => ({ size: s.size, priceMultiplier: s.multiplier, stock: s.stock, customPrice: s.customPrice, useCustomPrice: s.useCustomPrice }));

//     /* ── Submit ── */
//     // const onSubmit = async (e) => {
//     //     e?.preventDefault();
//     //     if (!hasSizes) return toast.error("Select at least one size");
//     //     if (colors.length === 0) return toast.error("Add at least one color");
//     //     if (!price || isNaN(+price) || +price <= 0) return toast.error("Valid base price required");
//     //     if (totalImages === 0) return toast.error("At least one image required");

//     //     setSaving(true);
//     //     try {
//     //         const fd = new FormData();
//     //         fd.append("productId", id);
//     //         fd.append("name", name.trim());
//     //         fd.append("description", description.trim());
//     //         fd.append("detailedDescription", detDesc);
//     //         fd.append("price", price);
//     //         fd.append("discountPrice", discPrice || "");
//     //         fd.append("category", category);
//     //         fd.append("subCategory", subCategory);
//     //         fd.append("bestseller", bestseller);
//     //         fd.append("sizes", JSON.stringify(fmtSizes()));
//     //         fd.append("color", JSON.stringify(colors));
//     //         // slots.forEach((s, i) => { if (s.newFile) fd.append(`image${i + 1}`, s.newFile); });
//     //         slots.forEach((s, i) => {
//     //             if (s.newFile) fd.append("images", s.newFile);
//     //         });

//     //         const res = await axios.post(backendUrl + "/api/product/update", fd, { headers: { token } });
//     //         if (res.data.success) { toast.success("✅ Product updated!"); navigate(-1); }
//     //         else toast.error(res.data.message);
//     //     } catch { toast.error("Update failed!"); }
//     //     finally { setSaving(false); }
//     // };

//     /* ── Submit ── */
//     const onSubmit = async (e) => {
//         e?.preventDefault();
//         if (!hasSizes) return toast.error("Select at least one size");
//         if (colors.length === 0) return toast.error("Add at least one color");
//         if (!price || isNaN(+price) || +price <= 0) return toast.error("Valid base price required");
//         if (totalImages === 0) return toast.error("At least one image required");

//         setSaving(true);
//         try {
//             const fd = new FormData();
//             fd.append("productId", id);
//             fd.append("name", name.trim());
//             fd.append("description", description.trim());
//             fd.append("detailedDescription", detDesc);
//             fd.append("price", price);
//             fd.append("discountPrice", discPrice || "");
//             fd.append("category", category);
//             fd.append("subCategory", subCategory);
//             fd.append("bestseller", bestseller);
//             fd.append("sizes", JSON.stringify(fmtSizes()));
//             fd.append("color", JSON.stringify(colors));

//             // ✅ FIX - Existing images jo user ne rakhe hain (delete nahi kiye)
//             const existingImageUrls = slots
//                 .filter(s => s.existing && !s.newFile)
//                 .map(s => s.existing);
//             fd.append("existingImages", JSON.stringify(existingImageUrls));

//             // ✅ New files upload
//             slots.forEach((s) => {
//                 if (s.newFile) fd.append("images", s.newFile);
//             });

//             const res = await axios.post(backendUrl + "/api/product/update", fd, { headers: { token } });
//             if (res.data.success) { toast.success("✅ Product updated!"); navigate(-1); }
//             else toast.error(res.data.message);
//         } catch { toast.error("Update failed!"); }
//         finally { setSaving(false); }
//     };

//     if (loading) return <Skeleton />;

//     /* ════════════════════════ RENDER ════════════════════════ */
//     return (
//         <div className="min-h-screen bg-[#f7f7f5]">
//             <style>{`
//                 @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
//                 .ql-container { font-size:14px; border-radius:0 0 12px 12px !important; border-color:#e5e7eb !important; }
//                 .ql-toolbar  { border-radius:12px 12px 0 0 !important; border-color:#e5e7eb !important; background:#f9fafb; }
//                 .ql-editor   { min-height:160px; font-family:inherit; }
//             `}</style>

//             {/* ── TOP BAR ── */}
//             <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
//                 <div className="flex items-center gap-3">
//                     <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-all">
//                         <TbArrowLeft size={18} />
//                     </button>
//                     <div className="w-px h-5 bg-gray-200" />
//                     <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
//                         <TbEdit size={17} className="text-white" />
//                     </div>
//                     <div>
//                         <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Edit Product</h1>
//                         <p className="text-[11px] text-gray-400 mt-0.5">{progress}% complete · ID: {id?.slice(-6).toUpperCase()}</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                         Cancel
//                     </button>
//                     <button type="button" onClick={onSubmit} disabled={saving}
//                         className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-60">
//                         {saving
//                             ? <><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</>
//                             : <><TbDeviceFloppy size={15} /> Save Changes</>}
//                     </button>
//                 </div>
//             </div>

//             {/* ── PROGRESS BAR ── */}
//             <div className="h-1 bg-gray-100">
//                 <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }} />
//             </div>

//             <form onSubmit={onSubmit}>
//                 <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 p-6 max-w-[1400px] items-start">

//                     {/* ══════════ LEFT COLUMN ══════════ */}
//                     <div>

//                         {/* ── BASIC INFO ── */}
//                         <Card icon={<TbPackage size={18} />} title="Basic Information" subtitle="Name, description & categorisation">

//                             <Field label="Product Name" required>
//                                 <div className="relative">
//                                     <input className={inputCls + (name.length > 90 ? " border-red-400 bg-red-50" : "")} type="text" maxLength={100} placeholder="e.g. Classic Oxford Shirt" value={name} onChange={e => setName(e.target.value)} required />
//                                     <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${name.length > 80 ? "text-amber-500" : "text-gray-400"}`}>{name.length}/100</span>
//                                 </div>
//                             </Field>

//                             <Field label="Short Description" required>
//                                 <div className="relative">
//                                     <textarea className={inputCls + " resize-y min-h-[90px] " + (description.length > 280 ? "border-red-400 bg-red-50" : "")} maxLength={300} rows={3} placeholder="Brief description for listings…" value={description} onChange={e => setDesc(e.target.value)} required />
//                                     <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${description.length > 240 ? "text-amber-500" : "text-gray-400"}`}>{description.length}/300</span>
//                                 </div>
//                             </Field>

//                             {/* ✅ Category grid - same as Add page */}
//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

//                                 <Field label="Category">
//                                     <select
//                                         className={selectCls}
//                                         value={category}
//                                         onChange={e => handleCategoryChange(e.target.value)}
//                                     >
//                                         <option value="Men">Men</option>
//                                         <option value="Women">Women</option>
//                                         <option value="Others">Others</option>
//                                     </select>
//                                 </Field>

//                                 {/* ✅ Dynamic subcategory options based on category */}
//                                 <Field label="Sub Category">
//                                     <select
//                                         className={selectCls}
//                                         value={subCategory}
//                                         onChange={e => setSubCat(e.target.value)}
//                                     >
//                                         {(SUB_CATEGORIES[category] || []).map(sub => (
//                                             <option key={sub} value={sub}>{sub}</option>
//                                         ))}
//                                     </select>
//                                 </Field>

//                                 <Field label="SKU / Code" hint="Auto-generated if blank">
//                                     <input className={inputCls} type="text" placeholder="Auto-generated" />
//                                 </Field>
//                             </div>

//                             <div className="border-t border-gray-100 pt-5 mt-1">
//                                 <Field label="Detailed Description" hint="Shown on product detail page — add specs, care instructions, materials">
//                                     <ReactQuill theme="snow" value={detDesc} onChange={setDetDesc} />
//                                 </Field>
//                             </div>
//                         </Card>

//                         {/* ── IMAGES ── */}
//                         <Card
//                             icon={<TbPhoto size={18} />}
//                             title="Product Images"
//                             subtitle={`${totalImages}/10 images · ${existingCount} existing · ${newFilesCount} new`}
//                             action={allSlotImgs.length > 0 && (
//                                 <button type="button" onClick={() => setLightbox({ imgs: allSlotImgs, start: 0 })}
//                                     className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                                     <TbEye size={13} /> View All
//                                 </button>
//                             )}
//                         >
//                             <div
//                                 ref={dzRef}
//                                 className={`relative rounded-2xl border-2 border-dashed text-center p-7 mb-5 transition-all duration-200 cursor-pointer
//                                     ${dragging ? "border-indigo-500 bg-indigo-50 scale-[1.01]" : "border-gray-200 bg-gray-50 hover:border-gray-300"}`}
//                                 onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
//                             >
//                                 <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${dragging ? "bg-indigo-100" : "bg-gray-100"}`}>
//                                     <TbCloudUpload size={24} className={dragging ? "text-indigo-500" : "text-gray-400"} />
//                                 </div>
//                                 <p className="text-[14px] font-semibold text-gray-700 mb-1">{dragging ? "Drop images here!" : "Drag & drop to add images"}</p>
//                                 <p className="text-[12px] text-gray-400">or click individual slots below · PNG, JPG, WEBP · 800×800px recommended</p>
//                                 {!dragging && (
//                                     <input type="file" accept="image/*" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-[0]"
//                                         onChange={e => { addFilesToSlots(Array.from(e.target.files)); e.target.value = ""; }} />
//                                 )}
//                             </div>

//                             <div className="grid grid-cols-5 gap-2.5">
//                                 {slots.map((slot, i) => {
//                                     const displayUrl = slot.newFile ? URL.createObjectURL(slot.newFile) : slot.existing;
//                                     const hasImg = !!displayUrl;
//                                     const isNew = !!slot.newFile;
//                                     const isExisting = !!slot.existing && !slot.newFile;
//                                     return (
//                                         <div key={i} className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all group
//                                             ${hasImg ? (i === 0 ? "border-indigo-400 ring-2 ring-indigo-100" : isNew ? "border-emerald-400" : "border-transparent") : "border-dashed border-gray-200 bg-gray-50 hover:border-gray-300 cursor-pointer"}`}>
//                                             {hasImg ? (
//                                                 <>
//                                                     <img src={displayUrl} alt="" className="w-full h-full object-cover" />
//                                                     {i === 0 && <span className="absolute top-1.5 left-1.5 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">MAIN</span>}
//                                                     {isNew && <span className="absolute bottom-1.5 left-1.5 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">NEW</span>}
//                                                     {isExisting && <span className="absolute bottom-1.5 left-1.5 bg-gray-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">SAVED</span>}
//                                                     <span className="absolute top-1.5 right-1.5 bg-black/50 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">{i + 1}</span>
//                                                     <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 z-20">
//                                                         <button type="button" className="bg-white text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-gray-100"
//                                                             onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLightbox({ imgs: allSlotImgs, start: Math.max(0, allSlotImgs.indexOf(displayUrl)) }); }}>🔍 View</button>
//                                                         {isNew && <button type="button" className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-amber-600"
//                                                             onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotNew(i); }}>↩ Revert</button>}
//                                                         <button type="button" className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-red-600"
//                                                             onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotAll(i); }}>✕ Remove</button>
//                                                     </div>
//                                                     <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0] z-30 group-hover:z-0"
//                                                         onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ""; }} />
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <div className="flex flex-col items-center justify-center h-full">
//                                                         <TbPlus size={16} className="text-gray-300 mb-0.5" />
//                                                         <span className="text-[9px] text-gray-300 font-medium">{i + 1}</span>
//                                                     </div>
//                                                     <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0]"
//                                                         onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ""; }} />
//                                                 </>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                             <div className="flex items-center gap-4 mt-3">
//                                 <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500" /> Main photo</div>
//                                 <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> New (unsaved)</div>
//                                 <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-gray-500" /> Saved</div>
//                             </div>
//                             <p className="text-[11.5px] text-gray-400 mt-1.5">Hover any slot to view, replace or remove.</p>
//                         </Card>

//                         {/* ── COLORS ── */}
//                         <Card
//                             icon={<TbPalette size={18} />}
//                             title="Color Variants"
//                             subtitle={`${colors.length} color${colors.length !== 1 ? "s" : ""} added`}
//                             badge={colors.length > 0 && <span className="px-2 py-0.5 rounded-full bg-gray-900 text-white text-[10px] font-bold">{colors.length}</span>}
//                         >
//                             <Field label="Input Mode">
//                                 <div className="flex gap-2 flex-wrap">
//                                     {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
//                                         <button key={v} type="button" onClick={() => setColorMode(v)}
//                                             className={`px-3.5 py-2 rounded-xl text-[12.5px] font-semibold border transition-all ${colorMode === v ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}>
//                                             {l}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </Field>

//                             <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
//                                 {(colorMode === "both" || colorMode === "nameOnly") && (
//                                     <Field label="Name">
//                                         <input className={inputCls} style={{ width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newCName} onChange={e => setNewCName(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addColor())} />
//                                     </Field>
//                                 )}
//                                 {(colorMode === "both" || colorMode === "hexOnly") && (
//                                     <Field label="Color">
//                                         <div className="flex gap-2 items-center">
//                                             <input type="color" value={newCHex} onChange={e => setNewCHex(e.target.value)} className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-1" />
//                                             <input className={inputCls} style={{ width: 100 }} type="text" value={newCHex} onChange={e => setNewCHex(e.target.value)} />
//                                         </div>
//                                     </Field>
//                                 )}
//                                 <button type="button" onClick={addColor} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
//                                     <TbPlus size={14} /> Add
//                                 </button>
//                             </div>

//                             {colors.length === 0 ? (
//                                 <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl mb-4">
//                                     <TbPalette size={28} className="text-gray-200 mx-auto mb-2" />
//                                     <p className="text-[13px] text-gray-400 font-medium">No colors yet</p>
//                                     <p className="text-[12px] text-gray-300">Add above or pick from presets</p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-2 mb-4">
//                                     {colors.map((c, i) => (
//                                         <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors group">
//                                             <input type="color" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)} className="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer p-1 flex-shrink-0" />
//                                             <div className="flex-1 grid grid-cols-2 gap-2">
//                                                 <input type="text" value={c.name} onChange={e => edColor(i, "name", e.target.value)} placeholder="Color name" className="text-[13px] font-medium text-gray-800 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 transition-colors" />
//                                                 <input type="text" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)} placeholder="#000000" className="text-[12px] text-gray-400 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 font-mono transition-colors" />
//                                             </div>
//                                             <div className="w-6 h-6 rounded-full border border-black/10 flex-shrink-0" style={{ background: c.hex }} />
//                                             <button type="button" onClick={() => rmColor(c.name)} className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100">
//                                                 <TbX size={13} />
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             <div className="border-t border-gray-100 pt-4">
//                                 <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">Quick Presets</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {PRESETS.map((p, i) => {
//                                         const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
//                                         return (
//                                             <button key={i} type="button" onClick={() => addPreset(p)}
//                                                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all ${added ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"}`}>
//                                                 <div className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0" style={{ background: p.hex }} />
//                                                 {p.name}{added ? " ✓" : ""}
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </Card>

//                         {/* ── SIZES ── */}
//                         <Card icon={<TbRuler size={18} />} title="Sizes & Inventory" subtitle="Manage sizes, stock & pricing per size"
//                             badge={<span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[9px] font-bold uppercase tracking-wide">Required</span>}
//                         >
//                             {/* ✅ Base Price moved here - same as Add page */}
//                             <Field label="Base Price (₹)" required>
//                                 <input
//                                     className={inputCls + (price && (isNaN(+price) || +price <= 0) ? " border-red-400 bg-red-50" : "")}
//                                     type="number" placeholder="e.g. 499" min="0" step="0.01"
//                                     value={price} onChange={e => setPrice(e.target.value)}
//                                 />
//                                 <div className="flex items-start gap-2 mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl text-[12px] text-blue-700">
//                                     <TbInfoCircle size={14} className="flex-shrink-0 mt-0.5" />
//                                     <span>Base price × multiplier = size's selling price. Example: XL at 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : "—"}. Enable "Custom Price" per size for fixed pricing.</span>
//                                 </div>
//                             </Field>

//                             <Field label="Size System">
//                                 <div className="flex gap-2">
//                                     {[["standard", "👕 Standard (XS–3XL)"], ["inch", "📏 Inch-Based"]].map(([v, l]) => (
//                                         <button key={v} type="button" onClick={() => setSizeType(v)}
//                                             className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${sizeType === v ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}>
//                                             {l}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </Field>

//                             {/* Standard Sizes */}
//                             {sizeType === "standard" && (
//                                 <>
//                                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
//                                         {Object.keys(stdSizes).map(k => {
//                                             const on = enabledSz.includes(k);
//                                             const d = stdSizes[k];
//                                             return (
//                                                 <div key={k}
//                                                     className={`rounded-xl border-2 p-3.5 transition-all cursor-pointer ${on ? "border-indigo-400 bg-indigo-50/30 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`}
//                                                     onClick={() => !on && toggleSz(k)}>
//                                                     <div className="flex items-center gap-2 mb-2">
//                                                         <input type="checkbox" checked={on} onChange={() => toggleSz(k)} onClick={e => e.stopPropagation()} className="w-4 h-4 rounded accent-indigo-600 cursor-pointer" />
//                                                         <span className={`text-[13px] font-extrabold px-2 py-0.5 rounded-md ${on ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}>{k}</span>
//                                                         {on && d.stock > 0 && <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">{d.stock}×</span>}
//                                                     </div>
//                                                     {on && (
//                                                         <div onClick={e => e.stopPropagation()} className="space-y-2 mt-2">
//                                                             <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 cursor-pointer">
//                                                                 <input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} className="w-3.5 h-3.5 rounded accent-indigo-600 cursor-pointer" />
//                                                                 Custom Price
//                                                             </label>
//                                                             {d.useCustomPrice ? (
//                                                                 <div>
//                                                                     <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label>
//                                                                     <input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, "customPrice", e.target.value)} placeholder="Price" className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                                     <span className="text-[10.5px] text-indigo-600 font-bold mt-1 block">₹ {d.customPrice || "—"}</span>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div>
//                                                                     <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier ×{d.multiplier}</label>
//                                                                     <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, "multiplier", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                                     <span className="text-[10.5px] text-emerald-600 font-bold mt-1 block">₹ {price ? calcPrice(d).toFixed(2) : "—"}</span>
//                                                                 </div>
//                                                             )}
//                                                             <div>
//                                                                 <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label>
//                                                                 <input type="number" min="0" value={d.stock} onChange={e => setSzF(k, "stock", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>

//                                     {enabledSz.length > 0 && (
//                                         <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
//                                             {enabledSz.map(k => (
//                                                 <span key={k} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-full text-[11.5px] font-semibold">
//                                                     {k} · ₹{price ? calcPrice(stdSizes[k]).toFixed(0) : "—"} · {stdSizes[k].stock}pcs
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     )}

//                                     <div className="flex gap-2 flex-wrap">
//                                         {[["S/M/L/XL", ["S", "M", "L", "XL"]], ["All Sizes", Object.keys(stdSizes)]].map(([l, sz]) => (
//                                             <button key={l} type="button" onClick={() => setEnabledSz(sz)}
//                                                 className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                                                 Select {l}
//                                             </button>
//                                         ))}
//                                         <button type="button" onClick={() => setEnabledSz([])} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-red-500 transition-colors">
//                                             Clear All
//                                         </button>
//                                     </div>
//                                 </>
//                             )}

//                             {/* Inch Sizes */}
//                             {sizeType === "inch" && (
//                                 <>
//                                     <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
//                                         <Field label="Size Label"><input className={inputCls} style={{ width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} /></Field>
//                                         <Field label="Stock"><input className={inputCls} style={{ width: 75 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} /></Field>
//                                         <label className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600 cursor-pointer pb-2.5">
//                                             <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} className="w-4 h-4 rounded accent-indigo-600" /> Custom Price
//                                         </label>
//                                         {niCustom
//                                             ? <Field label="Price (₹)"><input className={inputCls} style={{ width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></Field>
//                                             : <Field label="Multiplier"><input className={inputCls} style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></Field>
//                                         }
//                                         <button type="button" onClick={addInch} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
//                                             <TbPlus size={14} /> Add
//                                         </button>
//                                     </div>
//                                     {inchSizes.length === 0 ? (
//                                         <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl">
//                                             <TbRuler size={28} className="text-gray-200 mx-auto mb-2" />
//                                             <p className="text-[13px] text-gray-400">No inch sizes yet</p>
//                                         </div>
//                                     ) : (
//                                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                                             {inchSizes.map((s, i) => (
//                                                 <div key={i} className="bg-white border border-gray-100 rounded-xl p-3.5">
//                                                     <div className="flex items-center justify-between mb-3">
//                                                         <span className="text-[14px] font-extrabold text-gray-900">{s.size}"</span>
//                                                         <button type="button" onClick={() => rmInch(s.size)} className="w-6 h-6 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100"><TbX size={11} /></button>
//                                                     </div>
//                                                     <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 mb-2 cursor-pointer">
//                                                         <input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, "useCustomPrice")} className="w-3.5 h-3.5 rounded accent-indigo-600" /> Custom Price
//                                                     </label>
//                                                     {s.useCustomPrice
//                                                         ? <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, "customPrice", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                         : <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, "multiplier", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                     }
//                                                     <div><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, "stock", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                     <span className="text-[10.5px] text-emerald-600 font-bold mt-1.5 block">₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : "—"}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </Card>
//                     </div>

//                     {/* ══════════ SIDEBAR ══════════ */}
//                     <div className="space-y-4">

//                         {/* Save */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center"><TbDeviceFloppy size={18} className="text-indigo-600" /></div>
//                                 <div>
//                                     <p className="text-[13.5px] font-bold text-gray-900">Save Changes</p>
//                                     <p className="text-[11px] text-gray-400">Update product on store</p>
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <div className="flex justify-between text-[11.5px] font-semibold text-gray-500 mb-1.5"><span>Completion</span><span className="text-gray-900">{progress}%</span></div>
//                                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                                     <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
//                                 </div>
//                             </div>
//                             <button type="button" onClick={() => setBest(p => !p)}
//                                 className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border mb-4 transition-all ${bestseller ? "bg-amber-50 border-amber-200" : "bg-gray-50 border-gray-100 hover:border-gray-200"}`}>
//                                 <div className="flex items-center gap-2">
//                                     <TbStar size={15} className={bestseller ? "text-amber-500" : "text-gray-400"} />
//                                     <span className="text-[13px] font-semibold text-gray-700">Mark as Bestseller</span>
//                                 </div>
//                                 <div className="w-10 rounded-full relative transition-colors flex-shrink-0" style={{ height: 22, background: bestseller ? "#f59e0b" : "#e5e7eb" }}>
//                                     <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${bestseller ? "translate-x-[22px]" : "translate-x-[3px]"}`} />
//                                 </div>
//                             </button>
//                             <button type="button" onClick={onSubmit} disabled={saving}
//                                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-bold transition-colors shadow-sm disabled:opacity-60 mb-2">
//                                 {saving ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</> : <><TbDeviceFloppy size={15} /> Save Changes</>}
//                             </button>
//                             <button type="button" onClick={() => navigate(-1)} className="w-full py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors">
//                                 Cancel
//                             </button>
//                         </div>

//                         {/* Pricing - only discount price in sidebar */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center"><TbTag size={16} className="text-emerald-600" /></div>
//                                 <p className="text-[13.5px] font-bold text-gray-900">Discount Pricing</p>
//                             </div>
//                             <Field label="Sale / Discount Price (₹)" hint="Optional — shown as sale price to customers">
//                                 <input className={inputCls} type="number" placeholder="0.00" value={discPrice} onChange={e => setDiscPrice(e.target.value)} />
//                             </Field>
//                             {discount && (
//                                 <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl mt-1">
//                                     <span className="text-[12.5px] font-semibold text-emerald-700">💸 Discount active</span>
//                                     <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">{discount}% off</span>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Summary */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center"><TbChartBar size={16} className="text-indigo-600" /></div>
//                                 <div><p className="text-[13.5px] font-bold text-gray-900">Summary</p><p className="text-[11px] text-gray-400">Live overview</p></div>
//                             </div>
//                             <div className="space-y-0">
//                                 {[
//                                     ["Name", name || <span className="text-gray-300 italic text-[12px]">Not set</span>],
//                                     ["Category", `${category} › ${subCategory}`],
//                                     ["Base Price", price ? <span className="font-bold">₹{price}</span> : <span className="text-gray-300">—</span>],
//                                     ["Sale Price", discPrice ? <span className="text-emerald-600 font-bold">₹{discPrice}</span> : <span className="text-gray-300">—</span>],
//                                     ["Colors", colors.length > 0 ? <div className="flex gap-1 flex-wrap justify-end">{colors.map((c, i) => <div key={i} title={c.name} className="w-4 h-4 rounded-full border border-black/10" style={{ background: c.hex }} />)}</div> : <span className="text-gray-300">—</span>],
//                                     ["Sizes", sizeType === "standard" ? (enabledSz.length ? <span className="font-semibold">{enabledSz.join(", ")}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>) : (inchSizes.length ? <span className="font-semibold">{inchSizes.map(s => s.size).join(", ")}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>)],
//                                     ["Images", <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${totalImages > 0 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{totalImages}/10 · {newFilesCount} new</span>],
//                                     ["Bestseller", bestseller ? <span className="bg-amber-100 text-amber-700 text-[10.5px] font-bold px-2 py-0.5 rounded-full">⭐ Yes</span> : <span className="text-gray-400 text-[12px]">No</span>],
//                                 ].map(([k, v], i) => (
//                                     <div key={i} className="flex items-start justify-between py-2 border-b border-gray-50 last:border-0 gap-3">
//                                         <span className="text-[12px] text-gray-400 font-medium flex-shrink-0">{k}</span>
//                                         <span className="text-[12.5px] text-gray-800 font-medium text-right max-w-[150px] truncate">{v}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quick Actions */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center"><TbBolt size={16} className="text-violet-600" /></div>
//                                 <p className="text-[13.5px] font-bold text-gray-900">Quick Actions</p>
//                             </div>
//                             <div className="space-y-2">
//                                 {[
//                                     ["🎨 Add basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added`); }],
//                                     ["👕 Select S/M/L/XL", () => { setEnabledSz(["S", "M", "L", "XL"]); setSizeType("standard"); toast.success("S/M/L/XL selected"); }],
//                                     ["✅ Select all sizes", () => { setEnabledSz(Object.keys(stdSizes)); setSizeType("standard"); toast.success("All sizes selected"); }],
//                                     ["🗑 Clear all colors", () => { setColors([]); toast.info("Colors cleared"); }],
//                                     ["🗑 Clear all sizes", () => { setEnabledSz([]); toast.info("Sizes cleared"); }],
//                                 ].map(([l, fn], i) => (
//                                     <button key={i} type="button" onClick={fn} className="w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-all">
//                                         {l}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Tips */}
//                         <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
//                             <div className="flex items-center gap-2.5 mb-3">
//                                 <HiOutlineLightBulb size={18} className="text-indigo-500 flex-shrink-0" />
//                                 <p className="text-[13px] font-bold text-indigo-800">Tips</p>
//                             </div>
//                             <ul className="space-y-1.5">
//                                 {["Drag & drop multiple images onto the drop zone", "Hover any image slot to view, replace or remove", "Green badge = new (unsaved), Gray = saved on server", "First slot is always the main product thumbnail", "Changes only save when you click 'Save Changes'", "Base price is used for multiplier calculations"].map((tip, i) => (
//                                     <li key={i} className="flex items-start gap-2 text-[12px] text-indigo-700">
//                                         <span className="text-indigo-400 mt-0.5 flex-shrink-0">·</span> {tip}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//             {lightbox && <Lightbox imgs={lightbox.imgs} start={lightbox.start} onClose={() => setLightbox(null)} />}
//         </div>
//     );
// };

// export default UpdateProduct;





import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { backendUrl } from "../../App";
import {
    TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
    TbX, TbPlus, TbTrash, TbCheck, TbAlertTriangle,
    TbDeviceFloppy, TbRocket, TbEye, TbChevronLeft,
    TbStar, TbInfoCircle, TbBolt, TbTag, TbEdit,
    TbArrowLeft, TbRefresh, TbCloudUpload
} from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ═══════════════════ CONSTANTS ═══════════════════ */
const PRESETS = [
    { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#EF4444" }, { name: "Navy", hex: "#1E3A5F" },
    { name: "Royal Blue", hex: "#3B82F6" }, { name: "Green", hex: "#166534" },
    { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
    { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" },
    { name: "Brown", hex: "#92400E" }, { name: "Gray", hex: "#9CA3AF" },
];

const INIT_STD = {
    XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
    L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
    XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
    XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
    "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
};

// ✅ FIX 1 — Exactly same as Add.jsx — all 7 categories with correct subcategories
const SUB_CATEGORIES = {
    Men: [
        "Jackets", "Bomber Biker Jacket", "Moto Biker Jacket",
        "Racing Coat", "Leather Coats", "Men Winter Wear",
    ],
    Women: [
        "Jackets", "Bomber Biker Jacket", "Moto Biker Jacket",
        "Racing Coat", "Women Winter Wear", "Women Night Dress",
        "Leather Pencil Skirt", "Leather Full Skirt", "Slim Bodycon Skirt",
    ],
    Others: [
        "Pillow", "Cushion Cover", "Aprons", "Desk Mat", "Chair Cover",
    ],
    "Leather Pillow Cover": [
        "Cylindrical Pillow Cover", "Square Pillow Cover",
        "Rectangle Pillow Cover", "Round Pillow Cover",
        "Ear Hole Pillow Cushion Cover",
    ],
    "Sofa Headrest": [
        "Recliner Chair Headrest Cover",
    ],
    "Leather Desk Pad": [
        "Leather Desk Mat",
    ],
    "Men Leather Apron": [
        "Apron",
    ],
};

// ✅ FIX 2 — Default subCategory per category (same as Add.jsx CATEGORY_DEFAULT_SUB)
const CATEGORY_DEFAULT_SUB = {
    "Men": "Jackets",
    "Women": "Jackets",
    "Others": "Pillow",
    "Leather Pillow Cover": "Cylindrical Pillow Cover",
    "Sofa Headrest": "Recliner Chair Headrest Cover",
    "Leather Desk Pad": "Leather Desk Mat",
    "Men Leather Apron": "Apron",
};

/* ═══════════════════ LIGHTBOX ═══════════════════ */
const Lightbox = ({ imgs, start, onClose }) => {
    const [cur, setCur] = useState(start);
    useEffect(() => {
        const h = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") setCur(p => Math.max(0, p - 1));
            if (e.key === "ArrowRight") setCur(p => Math.min(imgs.length - 1, p + 1));
        };
        window.addEventListener("keydown", h);
        return () => window.removeEventListener("keydown", h);
    }, [imgs.length, onClose]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/88 backdrop-blur-sm" onClick={onClose}>
            <div className="relative flex flex-col items-center gap-4 max-w-[90vw]" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg hover:rotate-90 transition-transform z-10">
                    <TbX size={14} className="text-gray-800" />
                </button>
                <img src={imgs[cur]} alt="" className="max-w-[80vw] max-h-[72vh] rounded-xl object-contain shadow-2xl" />
                {cur > 0 && <button onClick={() => setCur(p => p - 1)} className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronLeft size={22} /></button>}
                {cur < imgs.length - 1 && <button onClick={() => setCur(p => p + 1)} className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronRight size={22} /></button>}
                {imgs.length > 1 && (
                    <div className="flex gap-2 flex-wrap justify-center max-w-[80vw]">
                        {imgs.map((img, i) => <img key={i} src={img} alt="" onClick={() => setCur(i)} className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${i === cur ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-75"}`} />)}
                    </div>
                )}
                <p className="text-white/50 text-xs">{cur + 1} / {imgs.length} · Esc to close</p>
            </div>
        </div>
    );
};

/* ═══════════════════ CARD ═══════════════════ */
const Card = ({ icon, title, subtitle, badge, children, action }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-5">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">{icon}</div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[14px] font-bold text-gray-900">{title}</span>
                        {badge}
                    </div>
                    {subtitle && <p className="text-[11.5px] text-gray-400 mt-0.5">{subtitle}</p>}
                </div>
            </div>
            {action}
        </div>
        <div className="p-6">{children}</div>
    </div>
);

/* ═══════════════════ FIELD ═══════════════════ */
const Field = ({ label, required, hint, children }) => (
    <div className="mb-5 last:mb-0">
        {label && <label className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">{label}{required && <span className="text-red-500 text-sm">*</span>}</label>}
        {children}
        {hint && <p className="text-[11.5px] text-gray-400 mt-1.5">{hint}</p>}
    </div>
);

const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13.5px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all";
const selectCls = inputCls + " appearance-none cursor-pointer bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=')] bg-no-repeat bg-[right_12px_center] pr-9";

/* ═══════════════════ SKELETON ═══════════════════ */
const Skeleton = () => (
    <div className="min-h-screen bg-[#f7f7f5]">
        <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-xl animate-pulse" />
                <div className="w-px h-5 bg-gray-200" />
                <div className="w-32 h-5 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="flex gap-2">
                <div className="w-24 h-9 bg-gray-100 rounded-xl animate-pulse" />
                <div className="w-32 h-9 bg-gray-100 rounded-xl animate-pulse" />
            </div>
        </div>
        <div className="p-6 grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 max-w-[1400px]">
            <div className="space-y-5">
                {[280, 220, 200, 260].map((h, i) => <div key={i} className="bg-white rounded-2xl border border-gray-100 animate-pulse" style={{ height: h }} />)}
            </div>
            <div className="space-y-4">
                {[180, 160, 200].map((h, i) => <div key={i} className="bg-white rounded-2xl border border-gray-100 animate-pulse" style={{ height: h }} />)}
            </div>
        </div>
    </div>
);

/* ═══════════════════ MAIN ═══════════════════ */
const UpdateProduct = ({ token }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [slots, setSlots] = useState(Array(10).fill(null).map(() => ({ existing: null, newFile: null })));
    const [dragging, setDragging] = useState(false);
    const [lightbox, setLightbox] = useState(null);
    const dzRef = useRef(null);

    const [name, setName] = useState("");
    const [description, setDesc] = useState("");
    const [detDesc, setDetDesc] = useState("");
    const [price, setPrice] = useState("");
    const [discPrice, setDiscPrice] = useState("");
    const [category, setCategory] = useState("Men");
    // ✅ FIX 3 — Initial subCategory uses default map
    const [subCategory, setSubCat] = useState(CATEGORY_DEFAULT_SUB["Men"]);
    const [bestseller, setBest] = useState(false);

    const [colors, setColors] = useState([]);
    const [newCName, setNewCName] = useState("");
    const [newCHex, setNewCHex] = useState("#000000");
    const [colorMode, setColorMode] = useState("both");

    const [sizeType, setSizeType] = useState("standard");
    const [stdSizes, setStdSizes] = useState(INIT_STD);
    const [enabledSz, setEnabledSz] = useState([]);
    const [inchSizes, setInchSizes] = useState([]);
    const [niSize, setNiSize] = useState("");
    const [niMult, setNiMult] = useState(1.0);
    const [niStock, setNiStock] = useState(0);
    const [niPrice, setNiPrice] = useState("");
    const [niCustom, setNiCustom] = useState(false);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [progress, setProgress] = useState(0);

    /* ── Derived ── */
    const allSlotImgs = slots.map(s => s.newFile ? URL.createObjectURL(s.newFile) : s.existing).filter(Boolean);
    const existingCount = slots.filter(s => s.existing && !s.newFile).length;
    const newFilesCount = slots.filter(s => s.newFile).length;
    const totalImages = slots.filter(s => s.newFile || s.existing).length;
    const discount = discPrice && price && +discPrice < +price ? Math.round((1 - discPrice / price) * 100) : null;
    const hasSizes = sizeType === "standard" ? enabledSz.length > 0 : inchSizes.length > 0;
    const calcPrice = (d) => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;

    /* ── Fetch product ── */
    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const res = await axios.post(backendUrl + "/api/product/single", { productId: id });
                if (res.data.success) {
                    const p = res.data.product;
                    setName(p.name || "");
                    setDesc(p.description || "");
                    setDetDesc(p.detailedDescription || "");
                    setPrice(String(p.price || ""));
                    setDiscPrice(String(p.discountPrice || ""));
                    setBest(p.bestseller || false);

                    // ✅ FIX 4 — Set category, then validate subCategory against full SUB_CATEGORIES map
                    const cat = p.category || "Men";
                    setCategory(cat);
                    const validSubs = SUB_CATEGORIES[cat] || [];
                    const savedSub = (p.subCategory || "").trim();
                    // Use saved sub if valid, else fall back to default for that category
                    setSubCat(
                        validSubs.some(s => s.toLowerCase() === savedSub.toLowerCase())
                            ? savedSub
                            : (CATEGORY_DEFAULT_SUB[cat] || validSubs[0] || "")
                    );

                    const existingImgs = Array.isArray(p.image) ? p.image.filter(Boolean) : [p.image].filter(Boolean);
                    setSlots(Array(10).fill(null).map((_, i) => ({ existing: existingImgs[i] || null, newFile: null })));

                    if (p.color?.length) setColors(p.color.map(c => typeof c === "string" ? { name: c, hex: "#808080" } : { name: c.name || c, hex: c.hex || "#808080" }));

                    if (p.sizes?.length) {
                        const first = p.sizes[0];
                        const isStd = ["XS", "S", "M", "L", "XL", "XXL", "3XL"].includes(typeof first === "string" ? first : first?.size);
                        if (isStd) {
                            setSizeType("standard");
                            const en = []; const obj = { ...INIT_STD };
                            p.sizes.forEach(s => {
                                const k = typeof s === "string" ? s : s.size;
                                en.push(k);
                                obj[k] = {
                                    multiplier: s?.priceMultiplier || 1,
                                    stock: s?.stock ?? 0,
                                    customPrice: s?.customPrice > 0 ? String(s.customPrice) : "",
                                    useCustomPrice: s?.useCustomPrice === true,
                                };
                            });
                            setEnabledSz(en); setStdSizes(obj);
                        } else {
                            setSizeType("inch");
                            setInchSizes(p.sizes.map(s => ({ size: typeof s === "string" ? s : s.size, multiplier: s?.priceMultiplier || 1, stock: s?.stock || 0, customPrice: s?.customPrice || "", useCustomPrice: s?.useCustomPrice || false })));
                        }
                    }
                } else toast.error("Failed to load product");
            } catch { toast.error("Failed to load product"); }
            finally { setLoading(false); }
        };
        fetch();
    }, [id]);

    // ✅ FIX 5 — handleCategoryChange: auto-set first valid subCategory for new category
    const handleCategoryChange = (newCat) => {
        setCategory(newCat);
        setSubCat(CATEGORY_DEFAULT_SUB[newCat] || SUB_CATEGORIES[newCat]?.[0] || "");
    };

    /* ── Progress ── */
    useEffect(() => {
        let s = 0;
        if (name.trim()) s += 15;
        if (description.trim()) s += 10;
        if (price) s += 15;
        if (totalImages > 0) s += 15;
        if (colors.length) s += 15;
        if (hasSizes) s += 20;
        if (detDesc) s += 10;
        setProgress(Math.min(100, s));
    }, [name, description, price, totalImages, colors, hasSizes, detDesc]);

    /* ── Image handlers ── */
    const setSlotFile = (i, file) => setSlots(prev => { const n = [...prev]; n[i] = { ...n[i], newFile: file }; return n; });
    const clearSlotNew = (i) => setSlots(prev => { const n = [...prev]; n[i] = { ...n[i], newFile: null }; return n; });
    const clearSlotAll = (i) => setSlots(prev => { const n = [...prev]; n[i] = { existing: null, newFile: null }; return n; });

    const addFilesToSlots = (files) => {
        let added = 0;
        setSlots(prev => {
            const next = [...prev];
            for (const file of files) {
                const emptyIdx = next.findIndex(s => !s.existing && !s.newFile);
                if (emptyIdx === -1) break;
                next[emptyIdx] = { existing: null, newFile: file };
                added++;
            }
            return next;
        });
        requestAnimationFrame(() => { if (added > 0) toast.success(`${added} image${added > 1 ? "s" : ""} added!`); else toast.info("All slots full"); });
    };

    const handleDragEnter = useCallback((e) => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
    const handleDragOver = useCallback((e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = "copy"; setDragging(true); }, []);
    const handleDragLeave = useCallback((e) => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
    const handleDrop = useCallback((e) => {
        e.preventDefault(); e.stopPropagation(); setDragging(false);
        const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/"));
        if (!files.length) { toast.error("Only image files allowed"); return; }
        addFilesToSlots(files);
    }, []);

    /* ── Color handlers ── */
    const addColor = () => {
        if (colorMode !== "hexOnly" && !newCName.trim()) return toast.error("Enter color name");
        const c = { name: newCName.trim() || `Color-${colors.length + 1}`, hex: newCHex || "#808080" };
        if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color exists");
        setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added`);
    };
    const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
    const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
    const addPreset = (p) => colors.some(c => c.name.toLowerCase() === p.name.toLowerCase()) ? toast.info(`${p.name} already added`) : (setColors([...colors, p]), toast.success(`${p.name} added!`));

    /* ── Size handlers ── */
    const toggleSz = (k) => setEnabledSz(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k]);
    const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === "stock" ? parseInt(v) || 0 : f === "multiplier" ? parseFloat(v) || 1 : v } }));
    const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
    const addInch = () => {
        if (!niSize.trim()) return toast.error("Enter size");
        if (inchSizes.some(s => s.size === niSize)) return toast.error("Size exists");
        setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
        setNiSize(""); setNiMult(1); setNiStock(0); setNiPrice(""); setNiCustom(false); toast.success("Size added!");
    };
    const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
    const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === "useCustomPrice") u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === "stock") u[i].stock = parseInt(v) || 0; else if (f === "multiplier") u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };
    const fmtSizes = () => sizeType === "standard"
        ? enabledSz.map(k => ({ size: k, priceMultiplier: stdSizes[k].multiplier, stock: stdSizes[k].stock, customPrice: stdSizes[k].customPrice, useCustomPrice: stdSizes[k].useCustomPrice }))
        : inchSizes.map(s => ({ size: s.size, priceMultiplier: s.multiplier, stock: s.stock, customPrice: s.customPrice, useCustomPrice: s.useCustomPrice }));

    /* ── Submit ── */
    const onSubmit = async (e) => {
        e?.preventDefault();
        if (!hasSizes) return toast.error("Select at least one size");
        if (colors.length === 0) return toast.error("Add at least one color");
        if (!price || isNaN(+price) || +price <= 0) return toast.error("Valid base price required");
        if (totalImages === 0) return toast.error("At least one image required");
        if (!subCategory || !subCategory.trim()) return toast.error("Sub category is required");

        setSaving(true);
        try {
            const fd = new FormData();
            fd.append("productId", id);
            fd.append("name", name.trim());
            fd.append("description", description.trim());
            fd.append("detailedDescription", detDesc);
            fd.append("price", price);
            fd.append("discountPrice", discPrice || "");
            fd.append("category", category);
            fd.append("subCategory", subCategory);
            fd.append("bestseller", bestseller);
            fd.append("sizes", JSON.stringify(fmtSizes()));
            fd.append("color", JSON.stringify(colors));

            const existingImageUrls = slots
                .filter(s => s.existing && !s.newFile)
                .map(s => s.existing);
            fd.append("existingImages", JSON.stringify(existingImageUrls));

            slots.forEach((s) => { if (s.newFile) fd.append("images", s.newFile); });

            const res = await axios.post(backendUrl + "/api/product/update", fd, { headers: { token } });
            if (res.data.success) { toast.success("✅ Product updated!"); navigate(-1); }
            else toast.error(res.data.message);
        } catch { toast.error("Update failed!"); }
        finally { setSaving(false); }
    };

    if (loading) return <Skeleton />;

    /* ════════════════════════ RENDER ════════════════════════ */
    return (
        <div className="min-h-screen bg-[#f7f7f5]">
            <style>{`
                @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
                .ql-container { font-size:14px; border-radius:0 0 12px 12px !important; border-color:#e5e7eb !important; }
                .ql-toolbar  { border-radius:12px 12px 0 0 !important; border-color:#e5e7eb !important; background:#f9fafb; }
                .ql-editor   { min-height:160px; font-family:inherit; }
            `}</style>

            {/* ── TOP BAR ── */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-all">
                        <TbArrowLeft size={18} />
                    </button>
                    <div className="w-px h-5 bg-gray-200" />
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <TbEdit size={17} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Edit Product</h1>
                        <p className="text-[11px] text-gray-400 mt-0.5">{progress}% complete · ID: {id?.slice(-6).toUpperCase()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
                    <button type="button" onClick={onSubmit} disabled={saving}
                        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-60">
                        {saving ? <><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</> : <><TbDeviceFloppy size={15} /> Save Changes</>}
                    </button>
                </div>
            </div>

            {/* ── PROGRESS ── */}
            <div className="h-1 bg-gray-100">
                <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 p-6 max-w-[1400px] items-start">
                    <div>

                        {/* ── BASIC INFO ── */}
                        <Card icon={<TbPackage size={18} />} title="Basic Information" subtitle="Name, description & categorisation">

                            <Field label="Product Name" required>
                                <div className="relative">
                                    <input className={inputCls + (name.length > 90 ? " border-red-400 bg-red-50" : "")} type="text" maxLength={100} placeholder="e.g. Classic Oxford Shirt" value={name} onChange={e => setName(e.target.value)} required />
                                    <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${name.length > 80 ? "text-amber-500" : "text-gray-400"}`}>{name.length}/100</span>
                                </div>
                            </Field>

                            <Field label="Short Description" required>
                                <div className="relative">
                                    <textarea className={inputCls + " resize-y min-h-[90px] " + (description.length > 280 ? "border-red-400 bg-red-50" : "")} maxLength={300} rows={3} placeholder="Brief description for listings…" value={description} onChange={e => setDesc(e.target.value)} required />
                                    <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${description.length > 240 ? "text-amber-500" : "text-gray-400"}`}>{description.length}/300</span>
                                </div>
                            </Field>

                            {/* ✅ FIX 6 — Category dropdown with all 7 categories (same as Add.jsx) */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Field label="Category">
                                    <select className={selectCls} value={category} onChange={e => handleCategoryChange(e.target.value)}>
                                        <option value="Men">Men</option>
                                        <option value="Women">Women</option>
                                        <option value="Others">Others</option>
                                        <option value="Leather Pillow Cover">Leather Pillow Cover</option>
                                        <option value="Sofa Headrest">Sofa Headrest</option>
                                        <option value="Leather Desk Pad">Leather Desk Pad</option>
                                        <option value="Men Leather Apron">Men Leather Apron</option>
                                    </select>
                                </Field>

                                {/* ✅ FIX 7 — SubCategory renders dynamically from SUB_CATEGORIES map */}
                                <Field label="Sub Category">
                                    <select className={selectCls} value={subCategory} onChange={e => setSubCat(e.target.value)}>
                                        {(SUB_CATEGORIES[category] || []).map(sub => (
                                            <option key={sub} value={sub}>{sub}</option>
                                        ))}
                                    </select>
                                </Field>

                                <Field label="SKU / Code" hint="Auto-generated if blank">
                                    <input className={inputCls} type="text" placeholder="Auto-generated" />
                                </Field>
                            </div>

                            <div className="border-t border-gray-100 pt-5 mt-1">
                                <Field label="Detailed Description" hint="Shown on product detail page — add specs, care instructions, materials">
                                    <ReactQuill theme="snow" value={detDesc} onChange={setDetDesc} />
                                </Field>
                            </div>
                        </Card>

                        {/* ── IMAGES ── */}
                        <Card
                            icon={<TbPhoto size={18} />}
                            title="Product Images"
                            subtitle={`${totalImages}/10 images · ${existingCount} existing · ${newFilesCount} new`}
                            action={allSlotImgs.length > 0 && (
                                <button type="button" onClick={() => setLightbox({ imgs: allSlotImgs, start: 0 })}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                                    <TbEye size={13} /> View All
                                </button>
                            )}
                        >
                            <div ref={dzRef}
                                className={`relative rounded-2xl border-2 border-dashed text-center p-7 mb-5 transition-all duration-200 cursor-pointer ${dragging ? "border-indigo-500 bg-indigo-50 scale-[1.01]" : "border-gray-200 bg-gray-50 hover:border-gray-300"}`}
                                onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                            >
                                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${dragging ? "bg-indigo-100" : "bg-gray-100"}`}>
                                    <TbCloudUpload size={24} className={dragging ? "text-indigo-500" : "text-gray-400"} />
                                </div>
                                <p className="text-[14px] font-semibold text-gray-700 mb-1">{dragging ? "Drop images here!" : "Drag & drop to add images"}</p>
                                <p className="text-[12px] text-gray-400">or click individual slots below · PNG, JPG, WEBP · 800×800px recommended</p>
                                {!dragging && (
                                    <input type="file" accept="image/*" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-[0]"
                                        onChange={e => { addFilesToSlots(Array.from(e.target.files)); e.target.value = ""; }} />
                                )}
                            </div>

                            <div className="grid grid-cols-5 gap-2.5">
                                {slots.map((slot, i) => {
                                    const displayUrl = slot.newFile ? URL.createObjectURL(slot.newFile) : slot.existing;
                                    const hasImg = !!displayUrl;
                                    const isNew = !!slot.newFile;
                                    const isExisting = !!slot.existing && !slot.newFile;
                                    return (
                                        <div key={i} className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all group
                                            ${hasImg ? (i === 0 ? "border-indigo-400 ring-2 ring-indigo-100" : isNew ? "border-emerald-400" : "border-transparent") : "border-dashed border-gray-200 bg-gray-50 hover:border-gray-300 cursor-pointer"}`}>
                                            {hasImg ? (
                                                <>
                                                    <img src={displayUrl} alt="" className="w-full h-full object-cover" />
                                                    {i === 0 && <span className="absolute top-1.5 left-1.5 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">MAIN</span>}
                                                    {isNew && <span className="absolute bottom-1.5 left-1.5 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">NEW</span>}
                                                    {isExisting && <span className="absolute bottom-1.5 left-1.5 bg-gray-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">SAVED</span>}
                                                    <span className="absolute top-1.5 right-1.5 bg-black/50 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md z-10">{i + 1}</span>
                                                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 z-20">
                                                        <button type="button" className="bg-white text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-gray-100"
                                                            onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLightbox({ imgs: allSlotImgs, start: Math.max(0, allSlotImgs.indexOf(displayUrl)) }); }}>🔍 View</button>
                                                        {isNew && <button type="button" className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-amber-600"
                                                            onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotNew(i); }}>↩ Revert</button>}
                                                        <button type="button" className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-red-600"
                                                            onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotAll(i); }}>✕ Remove</button>
                                                    </div>
                                                    <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0] z-30 group-hover:z-0"
                                                        onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ""; }} />
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex flex-col items-center justify-center h-full">
                                                        <TbPlus size={16} className="text-gray-300 mb-0.5" />
                                                        <span className="text-[9px] text-gray-300 font-medium">{i + 1}</span>
                                                    </div>
                                                    <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0]"
                                                        onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ""; }} />
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-indigo-500" /> Main photo</div>
                                <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> New (unsaved)</div>
                                <div className="flex items-center gap-1.5 text-[11px] text-gray-400"><div className="w-2.5 h-2.5 rounded-sm bg-gray-500" /> Saved</div>
                            </div>
                            <p className="text-[11.5px] text-gray-400 mt-1.5">Hover any slot to view, replace or remove.</p>
                        </Card>

                        {/* ── COLORS ── */}
                        <Card icon={<TbPalette size={18} />} title="Color Variants" subtitle={`${colors.length} color${colors.length !== 1 ? "s" : ""} added`}
                            badge={colors.length > 0 && <span className="px-2 py-0.5 rounded-full bg-gray-900 text-white text-[10px] font-bold">{colors.length}</span>}>
                            <Field label="Input Mode">
                                <div className="flex gap-2 flex-wrap">
                                    {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
                                        <button key={v} type="button" onClick={() => setColorMode(v)}
                                            className={`px-3.5 py-2 rounded-xl text-[12.5px] font-semibold border transition-all ${colorMode === v ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}>{l}</button>
                                    ))}
                                </div>
                            </Field>
                            <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
                                {(colorMode === "both" || colorMode === "nameOnly") && (
                                    <Field label="Name"><input className={inputCls} style={{ width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newCName} onChange={e => setNewCName(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addColor())} /></Field>
                                )}
                                {(colorMode === "both" || colorMode === "hexOnly") && (
                                    <Field label="Color">
                                        <div className="flex gap-2 items-center">
                                            <input type="color" value={newCHex} onChange={e => setNewCHex(e.target.value)} className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-1" />
                                            <input className={inputCls} style={{ width: 100 }} type="text" value={newCHex} onChange={e => setNewCHex(e.target.value)} />
                                        </div>
                                    </Field>
                                )}
                                <button type="button" onClick={addColor} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors"><TbPlus size={14} /> Add</button>
                            </div>
                            {colors.length === 0 ? (
                                <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl mb-4">
                                    <TbPalette size={28} className="text-gray-200 mx-auto mb-2" />
                                    <p className="text-[13px] text-gray-400 font-medium">No colors yet</p>
                                    <p className="text-[12px] text-gray-300">Add above or pick from presets</p>
                                </div>
                            ) : (
                                <div className="space-y-2 mb-4">
                                    {colors.map((c, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors group">
                                            <input type="color" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)} className="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer p-1 flex-shrink-0" />
                                            <div className="flex-1 grid grid-cols-2 gap-2">
                                                <input type="text" value={c.name} onChange={e => edColor(i, "name", e.target.value)} placeholder="Color name" className="text-[13px] font-medium text-gray-800 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 transition-colors" />
                                                <input type="text" value={c.hex} onChange={e => edColor(i, "hex", e.target.value)} placeholder="#000000" className="text-[12px] text-gray-400 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 font-mono transition-colors" />
                                            </div>
                                            <div className="w-6 h-6 rounded-full border border-black/10 flex-shrink-0" style={{ background: c.hex }} />
                                            <button type="button" onClick={() => rmColor(c.name)} className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100"><TbX size={13} /></button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="border-t border-gray-100 pt-4">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">Quick Presets</p>
                                <div className="flex flex-wrap gap-2">
                                    {PRESETS.map((p, i) => {
                                        const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
                                        return (
                                            <button key={i} type="button" onClick={() => addPreset(p)}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all ${added ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                                                <div className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0" style={{ background: p.hex }} />
                                                {p.name}{added ? " ✓" : ""}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>

                        {/* ── SIZES ── */}
                        <Card icon={<TbRuler size={18} />} title="Sizes & Inventory" subtitle="Manage sizes, stock & pricing per size"
                            badge={<span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[9px] font-bold uppercase tracking-wide">Required</span>}>
                            <Field label="Base Price (₹)" required>
                                <input className={inputCls + (price && (isNaN(+price) || +price <= 0) ? " border-red-400 bg-red-50" : "")}
                                    type="number" placeholder="e.g. 499" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} />
                                <div className="flex items-start gap-2 mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl text-[12px] text-blue-700">
                                    <TbInfoCircle size={14} className="flex-shrink-0 mt-0.5" />
                                    <span>Base price × multiplier = size's selling price. Example: XL at 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : "—"}.</span>
                                </div>
                            </Field>
                            <Field label="Size System">
                                <div className="flex gap-2">
                                    {[["standard", "👕 Standard (XS–3XL)"], ["inch", "📏 Inch-Based"]].map(([v, l]) => (
                                        <button key={v} type="button" onClick={() => setSizeType(v)}
                                            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${sizeType === v ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"}`}>{l}</button>
                                    ))}
                                </div>
                            </Field>
                            {sizeType === "standard" && (
                                <>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                                        {Object.keys(stdSizes).map(k => {
                                            const on = enabledSz.includes(k); const d = stdSizes[k];
                                            return (
                                                <div key={k} className={`rounded-xl border-2 p-3.5 transition-all cursor-pointer ${on ? "border-indigo-400 bg-indigo-50/30 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`} onClick={() => !on && toggleSz(k)}>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <input type="checkbox" checked={on} onChange={() => toggleSz(k)} onClick={e => e.stopPropagation()} className="w-4 h-4 rounded accent-indigo-600 cursor-pointer" />
                                                        <span className={`text-[13px] font-extrabold px-2 py-0.5 rounded-md ${on ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}>{k}</span>
                                                        {on && d.stock > 0 && <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">{d.stock}×</span>}
                                                    </div>
                                                    {on && (
                                                        <div onClick={e => e.stopPropagation()} className="space-y-2 mt-2">
                                                            <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 cursor-pointer">
                                                                <input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} className="w-3.5 h-3.5 rounded accent-indigo-600 cursor-pointer" /> Custom Price
                                                            </label>
                                                            {d.useCustomPrice ? (
                                                                <div>
                                                                    <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label>
                                                                    <input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, "customPrice", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
                                                                    <span className="text-[10.5px] text-indigo-600 font-bold mt-1 block">₹ {d.customPrice || "—"}</span>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier ×{d.multiplier}</label>
                                                                    <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, "multiplier", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
                                                                    <span className="text-[10.5px] text-emerald-600 font-bold mt-1 block">₹ {price ? calcPrice(d).toFixed(2) : "—"}</span>
                                                                </div>
                                                            )}
                                                            <div>
                                                                <label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label>
                                                                <input type="number" min="0" value={d.stock} onChange={e => setSzF(k, "stock", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {enabledSz.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                            {enabledSz.map(k => (<span key={k} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-full text-[11.5px] font-semibold">{k} · ₹{price ? calcPrice(stdSizes[k]).toFixed(0) : "—"} · {stdSizes[k].stock}pcs</span>))}
                                        </div>
                                    )}
                                    <div className="flex gap-2 flex-wrap">
                                        {[["S/M/L/XL", ["S", "M", "L", "XL"]], ["All Sizes", Object.keys(stdSizes)]].map(([l, sz]) => (
                                            <button key={l} type="button" onClick={() => setEnabledSz(sz)} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">Select {l}</button>
                                        ))}
                                        <button type="button" onClick={() => setEnabledSz([])} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-red-500 transition-colors">Clear All</button>
                                    </div>
                                </>
                            )}
                            {sizeType === "inch" && (
                                <>
                                    <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
                                        <Field label="Size Label"><input className={inputCls} style={{ width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} /></Field>
                                        <Field label="Stock"><input className={inputCls} style={{ width: 75 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} /></Field>
                                        <label className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600 cursor-pointer pb-2.5">
                                            <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} className="w-4 h-4 rounded accent-indigo-600" /> Custom Price
                                        </label>
                                        {niCustom ? <Field label="Price (₹)"><input className={inputCls} style={{ width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></Field>
                                            : <Field label="Multiplier"><input className={inputCls} style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></Field>}
                                        <button type="button" onClick={addInch} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors"><TbPlus size={14} /> Add</button>
                                    </div>
                                    {inchSizes.length === 0 ? (
                                        <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl"><TbRuler size={28} className="text-gray-200 mx-auto mb-2" /><p className="text-[13px] text-gray-400">No inch sizes yet</p></div>
                                    ) : (
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {inchSizes.map((s, i) => (
                                                <div key={i} className="bg-white border border-gray-100 rounded-xl p-3.5">
                                                    <div className="flex items-center justify-between mb-3"><span className="text-[14px] font-extrabold text-gray-900">{s.size}"</span><button type="button" onClick={() => rmInch(s.size)} className="w-6 h-6 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100"><TbX size={11} /></button></div>
                                                    <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 mb-2 cursor-pointer"><input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, "useCustomPrice")} className="w-3.5 h-3.5 rounded accent-indigo-600" /> Custom Price</label>
                                                    {s.useCustomPrice ? <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, "customPrice", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
                                                        : <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, "multiplier", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>}
                                                    <div><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, "stock", e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
                                                    <span className="text-[10.5px] text-emerald-600 font-bold mt-1.5 block">₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : "—"}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </Card>
                    </div>

                    {/* ══════════ SIDEBAR ══════════ */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center"><TbDeviceFloppy size={18} className="text-indigo-600" /></div>
                                <div><p className="text-[13.5px] font-bold text-gray-900">Save Changes</p><p className="text-[11px] text-gray-400">Update product on store</p></div>
                            </div>
                            <div className="mb-4">
                                <div className="flex justify-between text-[11.5px] font-semibold text-gray-500 mb-1.5"><span>Completion</span><span className="text-gray-900">{progress}%</span></div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} /></div>
                            </div>
                            <button type="button" onClick={() => setBest(p => !p)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border mb-4 transition-all ${bestseller ? "bg-amber-50 border-amber-200" : "bg-gray-50 border-gray-100 hover:border-gray-200"}`}>
                                <div className="flex items-center gap-2">
                                    <TbStar size={15} className={bestseller ? "text-amber-500" : "text-gray-400"} />
                                    <span className="text-[13px] font-semibold text-gray-700">Mark as Bestseller</span>
                                </div>
                                <div className="w-10 rounded-full relative transition-colors flex-shrink-0" style={{ height: 22, background: bestseller ? "#f59e0b" : "#e5e7eb" }}>
                                    <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${bestseller ? "translate-x-[22px]" : "translate-x-[3px]"}`} />
                                </div>
                            </button>
                            <button type="button" onClick={onSubmit} disabled={saving}
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-bold transition-colors shadow-sm disabled:opacity-60 mb-2">
                                {saving ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</> : <><TbDeviceFloppy size={15} /> Save Changes</>}
                            </button>
                            <button type="button" onClick={() => navigate(-1)} className="w-full py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors">Cancel</button>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center"><TbTag size={16} className="text-emerald-600" /></div>
                                <p className="text-[13.5px] font-bold text-gray-900">Discount Pricing</p>
                            </div>
                            <Field label="Sale / Discount Price (₹)" hint="Optional — shown as sale price to customers">
                                <input className={inputCls} type="number" placeholder="0.00" value={discPrice} onChange={e => setDiscPrice(e.target.value)} />
                            </Field>
                            {discount && (
                                <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl mt-1">
                                    <span className="text-[12.5px] font-semibold text-emerald-700">💸 Discount active</span>
                                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">{discount}% off</span>
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center"><TbChartBar size={16} className="text-indigo-600" /></div>
                                <div><p className="text-[13.5px] font-bold text-gray-900">Summary</p><p className="text-[11px] text-gray-400">Live overview</p></div>
                            </div>
                            <div className="space-y-0">
                                {[
                                    ["Name", name || <span className="text-gray-300 italic text-[12px]">Not set</span>],
                                    ["Category", `${category} › ${subCategory || "—"}`],
                                    ["Base Price", price ? <span className="font-bold">₹{price}</span> : <span className="text-gray-300">—</span>],
                                    ["Sale Price", discPrice ? <span className="text-emerald-600 font-bold">₹{discPrice}</span> : <span className="text-gray-300">—</span>],
                                    ["Colors", colors.length > 0 ? <div className="flex gap-1 flex-wrap justify-end">{colors.map((c, i) => <div key={i} title={c.name} className="w-4 h-4 rounded-full border border-black/10" style={{ background: c.hex }} />)}</div> : <span className="text-gray-300">—</span>],
                                    ["Sizes", sizeType === "standard" ? (enabledSz.length ? <span className="font-semibold">{enabledSz.join(", ")}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>) : (inchSizes.length ? <span className="font-semibold">{inchSizes.map(s => s.size).join(", ")}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>)],
                                    ["Images", <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${totalImages > 0 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{totalImages}/10 · {newFilesCount} new</span>],
                                    ["Bestseller", bestseller ? <span className="bg-amber-100 text-amber-700 text-[10.5px] font-bold px-2 py-0.5 rounded-full">⭐ Yes</span> : <span className="text-gray-400 text-[12px]">No</span>],
                                ].map(([k, v], i) => (
                                    <div key={i} className="flex items-start justify-between py-2 border-b border-gray-50 last:border-0 gap-3">
                                        <span className="text-[12px] text-gray-400 font-medium flex-shrink-0">{k}</span>
                                        <span className="text-[12.5px] text-gray-800 font-medium text-right max-w-[150px] truncate">{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center"><TbBolt size={16} className="text-violet-600" /></div>
                                <p className="text-[13.5px] font-bold text-gray-900">Quick Actions</p>
                            </div>
                            <div className="space-y-2">
                                {[
                                    ["🎨 Add basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added`); }],
                                    ["👕 Select S/M/L/XL", () => { setEnabledSz(["S", "M", "L", "XL"]); setSizeType("standard"); toast.success("S/M/L/XL selected"); }],
                                    ["✅ Select all sizes", () => { setEnabledSz(Object.keys(stdSizes)); setSizeType("standard"); toast.success("All sizes selected"); }],
                                    ["🗑 Clear all colors", () => { setColors([]); toast.info("Colors cleared"); }],
                                    ["🗑 Clear all sizes", () => { setEnabledSz([]); toast.info("Sizes cleared"); }],
                                ].map(([l, fn], i) => (
                                    <button key={i} type="button" onClick={fn} className="w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-all">{l}</button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                            <div className="flex items-center gap-2.5 mb-3">
                                <HiOutlineLightBulb size={18} className="text-indigo-500 flex-shrink-0" />
                                <p className="text-[13px] font-bold text-indigo-800">Tips</p>
                            </div>
                            <ul className="space-y-1.5">
                                {["Drag & drop multiple images onto the drop zone", "Hover any image slot to view, replace or remove", "Green badge = new (unsaved), Gray = saved on server", "First slot is always the main product thumbnail", "Changes only save when you click 'Save Changes'", "Base price is used for multiplier calculations"].map((tip, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[12px] text-indigo-700">
                                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">·</span> {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </form>

            {lightbox && <Lightbox imgs={lightbox.imgs} start={lightbox.start} onClose={() => setLightbox(null)} />}
        </div>
    );
};

export default UpdateProduct;