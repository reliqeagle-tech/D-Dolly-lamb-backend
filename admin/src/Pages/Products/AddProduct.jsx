// // import React, { useState } from 'react'
// // import Box from '@mui/material/Box';
// // import InputLabel from '@mui/material/InputLabel';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import Select from '@mui/material/Select';
// // import Rating from '@mui/material/Rating';
// // import UploadBox from '../../Components/UploadBox/UploadBox';
// // import { LazyLoadImage } from 'react-lazy-load-image-component';
// // import { assets } from '../../assets/assets';
// // import 'react-lazy-load-image-component/src/effects/blur.css';
// // import { IoClose } from "react-icons/io5";
// // import { FaCloudUploadAlt } from "react-icons/fa";
// // import Button from '@mui/material/Button';


// // const AddProduct = () => {
// //     const [productCat, setProductCat] = useState('');
// //     const [productSubCat, setProductSubCat] = useState('');
// //     const [productFeatured, setProductFeatured] = useState('');
// //     const [productRams, setProductRams] = useState('');
// //     const [productWeight, setProductWeight] = useState('');
// //     const [productSize, setProductSize]  = useState('');

// //     const handleChangeProductCat = (event) => {
// //         setProductCat(event.target.value);
// //     };
// //     const handleChangeProductSubCat = (event) => {
// //         setProductSubCat(event.target.value);
// //     };
// //     const handleChangeProductFeatured = (event) => {
// //         setProductFeatured(event.target.value);
// //     };
// //     const handleChangeProductRams = (event) => {
// //         setProductRams(event.target.value);
// //     };
// //     const handleChangeProductWeight = (event) => {
// //         setProductWeight(event.target.value);
// //     };
// //     const handleChangeProductSize = (event) => {
// //         setProductSize(event.target.value);
// //     };


// //     return (
// //         <section className='p-5 bg-gray-50'>
// //             <form className='form p-8 '>
// //                 <div className='scroll max-h-[72vh] overflow-y-scroll pr-4'>
// //                 <div className='grid grid-cols-1 mb-3'>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Name</h3>
// //                         <input type="text" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm ' />
// //                     </div>
// //                 </div>
// //                 <div className='grid grid-cols-1 mb-3'>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Description</h3>
// //                         <textarea type="text" className='w-full h-[140px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm' />
// //                     </div>
// //                 </div>
// //                 <div className='grid grid-cols-4 mb-3 gap-4'>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Category</h3>
// //                         <Select
// //                             labelId="demo-simple-select-label"
// //                             id="productCatDrop"
// //                             size='small'
// //                             className='w-full bg-[#fafafa]'
// //                             value={productCat}
// //                             label="Category"
// //                             onChange={handleChangeProductCat}
// //                         >
// //                             <MenuItem value={''}>None</MenuItem>
// //                             <MenuItem value={10}>Fashion</MenuItem>
// //                             <MenuItem value={20}>Beaty</MenuItem>
// //                             <MenuItem value={30}>Wellness</MenuItem>
// //                         </Select>
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Sub Category</h3>
// //                         <Select
// //                             labelId="demo-simple-select-label"
// //                             id="productCatDrop"
// //                             size='small'
// //                             className='w-full bg-[#fafafa]'
// //                             value={productSubCat}
// //                             label="Category"
// //                             onChange={handleChangeProductSubCat}
// //                         >
// //                             <MenuItem value={''}>None</MenuItem>
// //                             <MenuItem value={10}>Men</MenuItem>
// //                             <MenuItem value={20}>Women</MenuItem>
// //                             <MenuItem value={30}>Kids</MenuItem>
// //                         </Select>
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Price</h3>
// //                         <input type="number" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm' />
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Old Price</h3>
// //                         <input type="number" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm' />
// //                     </div>
// //                 </div>
// //                 <div className='grid grid-cols-4 mb-3 gap-4'>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Is Featured?</h3>
// //                         <Select
// //                             labelId="demo-simple-select-label"
// //                             id="productCatDrop"
// //                             size='small'
// //                             className='w-full'
// //                             value={productFeatured}
// //                             label="Category"
// //                             onChange={handleChangeProductFeatured}
// //                         >
// //                             <MenuItem value={10}>True</MenuItem>
// //                             <MenuItem value={20}>False</MenuItem>
// //                         </Select>
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Stock</h3>
// //                         <input type="number" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm' />
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Brand</h3>
// //                         <input type="text" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm' />
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Discount</h3>
// //                         <input type="number" className='w-full h-[40px] border border-gray-400 focus:outline-none focus:border-gray-600 rounded-md p-3 text-sm' />
// //                     </div>
// //                 </div>
// //                 <div className='grid grid-cols-4 mb-3 gap-4'>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Rams</h3>
// //                         <Select
// //                             labelId="demo-simple-select-label"
// //                             id="productCatDrop"
// //                             size='small'
// //                             className='w-full'
// //                             value={productRams}
// //                             label="Category"
// //                             onChange={handleChangeProductRams}
// //                         >
// //                             <MenuItem value={'4GB'}>4GB</MenuItem>
// //                             <MenuItem value={'6GB'}>6GB</MenuItem>
// //                             <MenuItem value={'8GB'}>8GB</MenuItem>
// //                         </Select>
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Weight</h3>
// //                         <Select
// //                             labelId="demo-simple-select-label"
// //                             id="productCatDrop"
// //                             size='small'
// //                             className='w-full'
// //                             value={productWeight}
// //                             label="Category"
// //                             onChange={handleChangeProductWeight}
// //                         >
// //                             <MenuItem value={''}>None</MenuItem>
// //                             <MenuItem value={10}>2kg</MenuItem>
// //                             <MenuItem value={20}>4kg</MenuItem>
// //                             <MenuItem value={30}>5kg</MenuItem>
// //                         </Select>
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Size</h3>
// //                         <Select
// //                             labelId="demo-simple-select-label"
// //                             id="productCatDrop"
// //                             size='small'
// //                             className='w-full'
// //                             value={productSize}
// //                             label="Category"
// //                             onChange={handleChangeProductSize}
// //                         >
// //                             <MenuItem value={''}>None</MenuItem>
// //                             <MenuItem value={'S'}>S</MenuItem>
// //                             <MenuItem value={'M'}>M</MenuItem>
// //                             <MenuItem value={'L'}>L</MenuItem>
// //                             <MenuItem value={'XL'}>XL</MenuItem>
// //                         </Select>
// //                     </div>
// //                     <div className='col'>
// //                         <h3 className='text-[14px] lg:text-[16px] font-medium text-gray-800 mb-1'>Product Rating</h3>
// //                         <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
// //                     </div>
// //                 </div>
// //                 <div className='col w-full py-5'>
// //                     <h3 className='text-[18px] lg:text-[16px] font-[700] text-gray-800 mb-3'>Media and Images</h3>
// //                     {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4'>
// //                         <div className='uploadBoxWrapper relative'>
// //                             <span className='absolute w-[22px] h-[22px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center bg-red-700 z-50 cursor-pointer'><IoClose className='text-white text-[17px] ' /></span>
// //                             <div className='uploadBox rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center relative'>
// //                                 <LazyLoadImage
// //                                     className='w-full h-full object-cover'
// //                                     alt='image'
// //                                     effect="blur"
// //                                     wrapperProps={{
// //                                         // If you need to, you can tweak the effect transition using the wrapper style.
// //                                         style: { transitionDelay: "1s" },
// //                                     }}
// //                                     src={assets.L_img_4_1} // use normal <img> attributes as props
// //                                 // width={image.width}
// //                                 />
// //                             </div>
// //                         </div>
// //                         <div className='uploadBoxWrapper relative'>
// //                             <span className='absolute w-[22px] h-[22px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center bg-red-700 z-50 cursor-pointer'><IoClose className='text-white text-[17px] ' /></span>
// //                             <div className='uploadBox rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center relative'>
// //                                 <LazyLoadImage
// //                                     className='w-full h-full object-cover'
// //                                     alt='image'
// //                                     effect="blur"
// //                                     wrapperProps={{
// //                                         // If you need to, you can tweak the effect transition using the wrapper style.
// //                                         style: { transitionDelay: "1s" },
// //                                     }}
// //                                     src={assets.L_img_4_1} // use normal <img> attributes as props
// //                                 // width={image.width}
// //                                 />
// //                             </div>
// //                         </div>
// //                         <div className='uploadBoxWrapper relative'>
// //                             <span className='absolute w-[22px] h-[22px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center bg-red-700 z-50 cursor-pointer'><IoClose className='text-white text-[17px] ' /></span>
// //                             <div className='uploadBox rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center relative'>
// //                                 <LazyLoadImage
// //                                     className='w-full h-full object-cover'
// //                                     alt='image'
// //                                     effect="blur"
// //                                     wrapperProps={{
// //                                         // If you need to, you can tweak the effect transition using the wrapper style.
// //                                         style: { transitionDelay: "1s" },
// //                                     }}
// //                                     src={assets.L_img_4_1} // use normal <img> attributes as props
// //                                 // width={image.width}
// //                                 />
// //                             </div>
// //                         </div>
// //                         <div className='uploadBoxWrapper relative'>
// //                             <span className='absolute w-[22px] h-[22px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center bg-red-700 z-50 cursor-pointer'><IoClose className='text-white text-[17px] ' /></span>
// //                             <div className='uploadBox rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center relative'>
// //                                 <LazyLoadImage
// //                                     className='w-full h-full object-cover'
// //                                     alt='image'
// //                                     effect="blur"
// //                                     wrapperProps={{
// //                                         // If you need to, you can tweak the effect transition using the wrapper style.
// //                                         style: { transitionDelay: "1s" },
// //                                     }}
// //                                     src={assets.L_img_4_1} // use normal <img> attributes as props
// //                                 // width={image.width}
// //                                 />
// //                             </div>
// //                         </div>
// //                         <UploadBox multiple={false} />
// //                     </div> */}
// //                 </div>
// //                 </div>
// //                 <hr />
// //                 <br />
// //                 <div className='flex justify-center'>
// //                     <Button type='button' className='btn-blue w-[80%] sm:w-[50%] md:w-[40%] flex gap-2 '><FaCloudUploadAlt className='text-[25px] text-white' /> Publish and View</Button>
// //                 </div>
// //             </form>
// //         </section>
// //     )
// // }

// // export default AddProduct





// import React, { useState } from 'react';
// // import { assets } from '../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { assets } from '../../assets/assets';
// import { backendUrl } from '../../App';

// const Add = ({ token }) => {
//     const [image1, setImage1] = useState(false);
//     const [image2, setImage2] = useState(false);
//     const [image3, setImage3] = useState(false);
//     const [image4, setImage4] = useState(false);
//     const [image5, setImage5] = useState(false);

//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestseller, setBestseller] = useState(false);
//     const [detailedDescription, setDetailedDescription] = useState("");
//     const [discountPrice, setDiscountPrice] = useState("");

//     // Colors with flexible input
//     const [colors, setColors] = useState([]);
//     const [newColorName, setNewColorName] = useState("");
//     const [newColorHex, setNewColorHex] = useState("#000000");
//     const [colorInputMode, setColorInputMode] = useState("both"); // "both", "nameOnly", "hexOnly"

//     // Size type selector
//     const [sizeType, setSizeType] = useState("standard");

//     // Standard sizes with custom price option
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

//     // Inch-based sizes with custom price option
//     const [inchSizes, setInchSizes] = useState([]);
//     const [newInchSize, setNewInchSize] = useState("");
//     const [newInchMultiplier, setNewInchMultiplier] = useState(1.0);
//     const [newInchStock, setNewInchStock] = useState(0);
//     const [newInchCustomPrice, setNewInchCustomPrice] = useState("");
//     const [newInchUseCustomPrice, setNewInchUseCustomPrice] = useState(false);

//     // Color handlers
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

//     // Standard size handlers
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
//                 customPrice: value === "" ? "" : value, // allow empty temporarily
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

//     // Inch size handlers
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
//         updated[index].customPrice = value === "" ? "" : value;
//         setInchSizes(updated);
//     };

//     const handleInchSizeToggleCustomPrice = (index) => {
//         const updated = [...inchSizes];
//         updated[index].useCustomPrice = !updated[index].useCustomPrice;
//         setInchSizes(updated);
//     };

//     // Calculate final price
//     const calculateFinalPrice = (sizeData) => {
//         if (sizeData.useCustomPrice && sizeData.customPrice) {
//             return parseFloat(sizeData.customPrice);
//         }
//         return parseFloat(price || 0) * sizeData.multiplier;
//     };

//     // Format sizes for submission - fixed version
//     const formatSizesForSubmit = () => {
//         let sizesArray = [];

//         if (sizeType === "standard") {
//             sizesArray = enabledStandardSizes.map(sizeKey => {
//                 const sizeData = standardSizes[sizeKey];

//                 const sizeObj = {
//                     size: sizeKey,
//                     priceMultiplier: sizeData.multiplier,
//                     stock: sizeData.stock,
//                 };

//                 // Only include custom price fields if actually using custom price
//                 if (sizeData.useCustomPrice) {
//                     const customVal = sizeData.customPrice?.trim();
//                     if (!customVal || isNaN(Number(customVal)) || Number(customVal) <= 0) {
//                         toast.error(`Custom price for size ${sizeKey} is required and must be > 0`);
//                         throw new Error("Invalid custom price"); // stop submission
//                     }
//                     sizeObj.customPrice = Number(customVal);
//                     sizeObj.useCustomPrice = true;
//                 }

//                 return sizeObj;
//             });
//         } else {
//             // Inch-based
//             sizesArray = inchSizes.map(sizeObj => {
//                 const newObj = {
//                     size: sizeObj.size,
//                     priceMultiplier: sizeObj.multiplier,
//                     stock: sizeObj.stock,
//                 };

//                 if (sizeObj.useCustomPrice) {
//                     const customVal = sizeObj.customPrice?.trim();
//                     if (!customVal || isNaN(Number(customVal)) || Number(customVal) <= 0) {
//                         toast.error(`Custom price for size ${sizeObj.size} is required and must be > 0`);
//                         throw new Error("Invalid custom price");
//                     }
//                     newObj.customPrice = Number(customVal);
//                     newObj.useCustomPrice = true;
//                 }

//                 return newObj;
//             });
//         }

//         return sizesArray;
//     };

//     const onSubmitHandler = async (e) => {
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
//             if (!price || isNaN(Number(price)) || Number(price) <= 0) {
//                 return toast.error("Base price is required and must be greater than 0");
//             }

//             const formData = new FormData();

//             formData.append("name", name.trim());
//             formData.append("description", description.trim());
//             formData.append("detailedDescription", detailedDescription);
//             formData.append("price", price);
//             formData.append("discountPrice", discountPrice || "");
//             formData.append("category", category);
//             formData.append("subCategory", subCategory);
//             formData.append("bestseller", bestseller);

//             // Prepare sizes – will throw if validation fails
//             const sizesToSend = formatSizesForSubmit();
//             formData.append("sizes", JSON.stringify(sizesToSend));

//             formData.append("color", JSON.stringify(colors));

//             if (image1) formData.append("image1", image1);
//             if (image2) formData.append("image2", image2);
//             if (image3) formData.append("image3", image3);
//             if (image4) formData.append("image4", image4);
//             if (image5) formData.append("image5", image5);

//             const response = await axios.post(
//                 `${backendUrl}/api/product/add`,
//                 formData,
//                 { headers: { token } }
//             );

//             if (response.data.success) {
//                 toast.success("Product added successfully!");

//                 // Reset form
//                 setName("");
//                 setDescription("");
//                 setDetailedDescription("");
//                 setPrice("");
//                 setDiscountPrice("");
//                 setColors([]);
//                 setNewColorName("");
//                 setNewColorHex("#000000");
//                 setColorInputMode("both");
//                 setSizeType("standard");
//                 setEnabledStandardSizes([]);
//                 setStandardSizes({
//                     XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//                     S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//                     M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//                     L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//                     XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//                     XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//                     "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
//                 });
//                 setInchSizes([]);
//                 setNewInchSize("");
//                 setNewInchMultiplier(1.0);
//                 setNewInchStock(0);
//                 setNewInchCustomPrice("");
//                 setNewInchUseCustomPrice(false);
//                 setImage1(false);
//                 setImage2(false);
//                 setImage3(false);
//                 setImage4(false);
//                 setImage5(false);
//             } else {
//                 toast.error(response.data.message || "Failed to add product");
//             }
//         } catch (error) {
//             console.error("Add product error:", error);
//             if (error.message !== "Invalid custom price") {
//                 toast.error(error.response?.data?.message || error.message || "Something went wrong");
//             }
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
//             <div>
//                 <p className='mb-2'>Upload Image</p>

//                 <div className='flex gap-4 flex-wrap'>

//                     {/* IMAGE UPLOADS */}
//                     {[image1, image2, image3, image4, image5].map((img, index) => {
//                         const setter = [setImage1, setImage2, setImage3, setImage4, setImage5][index];
//                         const inputId = "image" + (index + 1);

//                         return (
//                             <label key={index} htmlFor={inputId} className="flex flex-col items-center">
//                                 <img
//                                     className='cursor-pointer border-2 border-dashed border-gray-300 rounded-lg w-24 h-24 flex justify-center items-center hover:border-black transition'
//                                     src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                                     alt=""
//                                 />
//                                 {img && (
//                                     <p className="text-xs mt-1 w-24 text-center truncate">{img.name}</p>
//                                 )}
//                                 <input onChange={(e) => setter(e.target.files[0])} type="file" id={inputId} hidden />
//                             </label>
//                         );
//                     })}

//                 </div>
//             </div>

//             <div className='w-full'>
//                 <p className='mb-2'>Product name</p>
//                 <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border' type="text" placeholder='Type here' required />
//             </div>

//             <div className='w-full'>
//                 <p className='mb-2'>Product description</p>
//                 <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border' type="text" placeholder='Write content here' required />
//             </div>

//             <div className="w-full mt-4">
//                 <p className='mb-2 text-gray-700 font-medium'>Detailed Description</p>
//                 <ReactQuill
//                     theme="snow"
//                     value={detailedDescription}
//                     onChange={setDetailedDescription}
//                     className="bg-white w-full max-w-[700px] rounded-md"
//                     style={{ height: "250px", marginBottom: "40px" }}
//                 />
//             </div>

//             <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//                 <div>
//                     <p className='mb-2'>Product category</p>
//                     <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2 border'>
//                         <option value="Men">Men</option>
//                         <option value="Women">Women</option>
//                         <option value="Others">Others</option>
//                     </select>
//                 </div>

//                 <div>
//                     <p className='mb-2'>Sub category</p>
//                     <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2 border'>
//                         {category === "Others" ? (
//                             <>
//                                 <option value="Cushion Cover">Cushion Cover</option>
//                                 <option value="Aprons">Aprons</option>
//                                 <option value="Desk Mat">Desk Mat</option>
//                                 <option value="Pillow">Pillow</option>
//                                 <option value="Chair Cover">Chair Cover</option>
//                             </>
//                         ) : (
//                             <>
//                                 <option value="Topwear">Topwear</option>
//                                 <option value="Bottomwear">Bottomwear</option>
//                                 <option value="Winterwear">Winterwear</option>
//                             </>
//                         )}
//                     </select>
//                 </div>

//                 <div>
//                     <p className='mb-2'>Product Price (Base)</p>
//                     <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] border' type="Number" placeholder='100' required />
//                     <p className='text-xs text-gray-500 mt-1'>Base price (or use custom per size)</p>
//                 </div>

//                 <div className='w-full'>
//                     <p className='mb-2'>Discount Price (optional)</p>
//                     <input onChange={(e) => setDiscountPrice(e.target.value)} value={discountPrice} className='w-full px-3 py-2 sm:w-[120px] border' type="Number" placeholder='0' />
//                 </div>
//             </div>

//             {/* FLEXIBLE COLOR SYSTEM */}
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
//                                 placeholder="e.g., Navy Blue, Red"
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
//                             No colors added yet
//                         </p>
//                     ) : (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                             {colors.map((color, index) => (
//                                 <div
//                                     key={index}
//                                     className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 transition"
//                                 >
//                                     <div className="flex-shrink-0">
//                                         <input
//                                             type="color"
//                                             value={color.hex}
//                                             onChange={(e) => handleEditColor(index, 'hex', e.target.value)}
//                                             className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer"
//                                             title="Click to edit"
//                                         />
//                                     </div>

//                                     <div className="flex-grow">
//                                         <input
//                                             type="text"
//                                             value={color.name}
//                                             onChange={(e) => handleEditColor(index, 'name', e.target.value)}
//                                             className="w-full font-medium text-sm border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none px-1 py-0.5"
//                                         />
//                                         <input
//                                             type="text"
//                                             value={color.hex}
//                                             onChange={(e) => handleEditColor(index, 'hex', e.target.value)}
//                                             className="w-full text-xs text-gray-500 border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none px-1 py-0.5 mt-1"
//                                         />
//                                     </div>

//                                     <button
//                                         type="button"
//                                         onClick={() => handleRemoveColor(color.name)}
//                                         className='flex-shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition'
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

//                 {/* Quick Presets */}
//                 <div className="mt-4 p-3 bg-white rounded-lg border border-gray-300">
//                     <p className='text-sm font-medium text-gray-700 mb-2'>Quick Add:</p>
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

//             {/* SIZE TYPE SELECTOR */}
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

//             {/* STANDARD SIZES WITH CUSTOM PRICE */}
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
//                                                     Final: ₹{standardSizes[sizeKey].customPrice || '0'}
//                                                 </p>
//                                             </div>
//                                         ) : (
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
//                                                 />
//                                                 <p className='text-xs text-gray-500 mt-1'>
//                                                     Final: ₹{calculateFinalPrice(standardSizes[sizeKey]).toFixed(2)}
//                                                 </p>
//                                             </div>
//                                         )}

//                                         <div>
//                                             <label className='text-sm text-gray-600'>Stock</label>
//                                             <input
//                                                 type="number"
//                                                 min="0"
//                                                 value={standardSizes[sizeKey].stock}
//                                                 onChange={(e) => handleStandardSizeStockChange(sizeKey, e.target.value)}
//                                                 className='w-full px-2 py-1 border border-gray-300 rounded'
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

//             {/* INCH-BASED SIZES WITH CUSTOM PRICE */}
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
//                                 placeholder="e.g., 14x14"
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
//                             />
//                         </div>

//                         <div className='flex items-center gap-2 p-2 border rounded bg-white'>
//                             <input
//                                 type="checkbox"
//                                 id="new-inch-custom"
//                                 checked={newInchUseCustomPrice}
//                                 onChange={(e) => setNewInchUseCustomPrice(e.target.checked)}
//                                 className='w-4 h-4 cursor-pointer'
//                             />
//                             <label htmlFor="new-inch-custom" className='text-sm cursor-pointer'>
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
//                                 />
//                             </div>
//                         ) : (
//                             <div>
//                                 <label className='text-sm text-gray-600'>Multiplier</label>
//                                 <input
//                                     type="number"
//                                     step="0.1"
//                                     min="0.5"
//                                     max="2"
//                                     value={newInchMultiplier}
//                                     onChange={(e) => setNewInchMultiplier(parseFloat(e.target.value) || 1)}
//                                     className='border p-2 rounded mt-1 w-24'
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
//                             <div key={index} className="p-3 border-2 border-gray-300 rounded-lg bg-white">
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
//                                     <div className='flex items-center gap-2 p-1.5 bg-gray-50 rounded'>
//                                         <input
//                                             type="checkbox"
//                                             id={`inch-custom-${index}`}
//                                             checked={sizeObj.useCustomPrice}
//                                             onChange={() => handleInchSizeToggleCustomPrice(index)}
//                                             className='w-4 h-4 cursor-pointer'
//                                         />
//                                         <label htmlFor={`inch-custom-${index}`} className='text-xs cursor-pointer font-medium'>
//                                             Custom Price
//                                         </label>
//                                     </div>

//                                     {sizeObj.useCustomPrice ? (
//                                         <div>
//                                             <label className='text-gray-600 font-medium'>Price (₹)</label>
//                                             <input
//                                                 type="number"
//                                                 step="0.01"
//                                                 min="0"
//                                                 value={sizeObj.customPrice}
//                                                 onChange={(e) => handleInchSizeCustomPriceChange(index, e.target.value)}
//                                                 className='w-full px-2 py-1 border border-gray-300 rounded'
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
//                         <p className='text-sm text-gray-500 italic'>No sizes added yet</p>
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

//             <div className='flex gap-2 mt-2'>
//                 <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
//                 <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//             </div>

//             <button type="submit" className='w-28 py-3 mt-4 bg-black hover:bg-gray-800 text-white rounded-md'>ADD</button>

//         </form>
//     );
// };

// export default Add;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { assets } from '../../assets/assets';
// import { backendUrl } from '../../App';

// // ─── Inline styles ────────────────────────────────────────────────────────────
// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');

//   .add-product-root {
//     font-family: 'DM Sans', sans-serif;
//     background: #f7f7f5;
//     min-height: 100vh;
//     padding: 32px 24px 60px;
//     color: #1a1a1a;
//   }

//   /* ── Page header ── */
//   .ap-header {
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     margin-bottom: 36px;
//     padding-bottom: 20px;
//     border-bottom: 1px solid #e2e2dc;
//   }
//   .ap-header-left h1 {
//     font-family: 'DM Serif Display', Georgia, serif;
//     font-size: 30px;
//     font-weight: 400;
//     letter-spacing: -0.5px;
//     color: #111;
//     margin: 0 0 4px;
//     line-height: 1.1;
//   }
//   .ap-header-left p {
//     font-size: 13px;
//     color: #888;
//     margin: 0;
//     font-weight: 400;
//   }
//   .ap-submit-btn-top {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     background: #111;
//     color: #fff;
//     border: none;
//     border-radius: 8px;
//     padding: 11px 22px;
//     font-size: 13.5px;
//     font-weight: 500;
//     cursor: pointer;
//     font-family: 'DM Sans', sans-serif;
//     transition: background 0.18s, transform 0.12s;
//     letter-spacing: 0.2px;
//   }
//   .ap-submit-btn-top:hover { background: #333; transform: translateY(-1px); }
//   .ap-submit-btn-top:active { transform: translateY(0); }

//   /* ── Two-column layout ── */
//   .ap-layout {
//     display: grid;
//     grid-template-columns: 1fr 340px;
//     gap: 20px;
//     align-items: start;
//   }
//   @media (max-width: 900px) {
//     .ap-layout { grid-template-columns: 1fr; }
//   }

//   /* ── Section card ── */
//   .ap-card {
//     background: #fff;
//     border: 1px solid #e8e8e2;
//     border-radius: 14px;
//     padding: 28px;
//     margin-bottom: 20px;
//   }
//   .ap-card-title {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     margin-bottom: 22px;
//   }
//   .ap-card-title span.icon {
//     width: 34px;
//     height: 34px;
//     border-radius: 8px;
//     background: #f3f3ef;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 16px;
//     flex-shrink: 0;
//   }
//   .ap-card-title h2 {
//     font-size: 14px;
//     font-weight: 600;
//     color: #111;
//     margin: 0;
//     letter-spacing: 0.1px;
//   }
//   .ap-card-title p {
//     font-size: 12px;
//     color: #999;
//     margin: 2px 0 0;
//     font-weight: 400;
//   }

//   /* ── Form fields ── */
//   .ap-field {
//     margin-bottom: 18px;
//   }
//   .ap-label {
//     display: block;
//     font-size: 12.5px;
//     font-weight: 500;
//     color: #555;
//     margin-bottom: 7px;
//     letter-spacing: 0.3px;
//     text-transform: uppercase;
//   }
//   .ap-input {
//     width: 100%;
//     border: 1.5px solid #e2e2dc;
//     border-radius: 9px;
//     padding: 10px 14px;
//     font-size: 14px;
//     font-family: 'DM Sans', sans-serif;
//     color: #111;
//     background: #fafaf9;
//     transition: border-color 0.15s, box-shadow 0.15s;
//     outline: none;
//     box-sizing: border-box;
//   }
//   .ap-input:focus {
//     border-color: #111;
//     background: #fff;
//     box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
//   }
//   .ap-textarea {
//     resize: vertical;
//     min-height: 90px;
//   }
//   .ap-select {
//     appearance: none;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//     background-repeat: no-repeat;
//     background-position: right 12px center;
//     padding-right: 36px;
//     cursor: pointer;
//   }
//   .ap-row {
//     display: grid;
//     gap: 14px;
//   }
//   .ap-row-2 { grid-template-columns: 1fr 1fr; }
//   .ap-row-3 { grid-template-columns: 1fr 1fr 1fr; }
//   @media (max-width: 600px) {
//     .ap-row-2, .ap-row-3 { grid-template-columns: 1fr; }
//   }

//   /* ── Image upload zone ── */
//   .ap-images-grid {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     gap: 10px;
//   }
//   @media (max-width: 600px) {
//     .ap-images-grid { grid-template-columns: repeat(3, 1fr); }
//   }
//   .ap-img-slot {
//     position: relative;
//     aspect-ratio: 1;
//     border-radius: 10px;
//     border: 1.5px dashed #d0d0ca;
//     overflow: hidden;
//     cursor: pointer;
//     background: #fafaf9;
//     transition: border-color 0.15s, background 0.15s;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 4px;
//   }
//   .ap-img-slot:hover { border-color: #111; background: #f3f3ef; }
//   .ap-img-slot.has-img { border-style: solid; border-color: #ccc; }
//   .ap-img-slot img.preview { width: 100%; height: 100%; object-fit: cover; }
//   .ap-img-slot .placeholder-icon { font-size: 22px; color: #ccc; }
//   .ap-img-slot .placeholder-text { font-size: 10px; color: #bbb; font-weight: 500; }
//   .ap-img-slot .img-num {
//     position: absolute;
//     top: 6px;
//     left: 6px;
//     background: rgba(0,0,0,0.55);
//     color: #fff;
//     border-radius: 4px;
//     padding: 1px 6px;
//     font-size: 10px;
//     font-weight: 600;
//   }
//   .ap-img-slot .remove-btn {
//     position: absolute;
//     top: 5px;
//     right: 5px;
//     background: #fff;
//     border: 1px solid #ddd;
//     border-radius: 50%;
//     width: 20px;
//     height: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     font-size: 11px;
//     color: #888;
//     transition: background 0.15s, color 0.15s;
//   }
//   .ap-img-slot .remove-btn:hover { background: #ef4444; color: #fff; border-color: #ef4444; }

//   /* ── Quill override ── */
//   .ap-quill .ql-container { border-radius: 0 0 9px 9px; border: 1.5px solid #e2e2dc; border-top: 0; font-family: 'DM Sans', sans-serif; font-size: 14px; }
//   .ap-quill .ql-toolbar { border-radius: 9px 9px 0 0; border: 1.5px solid #e2e2dc; background: #fafaf9; }
//   .ap-quill .ql-editor { min-height: 180px; }

//   /* ── Colors ── */
//   .ap-color-presets { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 10px; }
//   .ap-preset-btn {
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     padding: 5px 11px;
//     border: 1.5px solid #e2e2dc;
//     border-radius: 20px;
//     background: #fff;
//     font-size: 12px;
//     font-family: 'DM Sans', sans-serif;
//     cursor: pointer;
//     transition: border-color 0.15s, background 0.15s;
//     color: #333;
//     font-weight: 500;
//   }
//   .ap-preset-btn:hover { border-color: #111; background: #f3f3ef; }
//   .ap-color-dot { width: 14px; height: 14px; border-radius: 50%; border: 1px solid rgba(0,0,0,0.12); flex-shrink: 0; }

//   .ap-color-add-row {
//     display: flex;
//     gap: 10px;
//     align-items: flex-end;
//     flex-wrap: wrap;
//     padding: 16px;
//     background: #fafaf9;
//     border: 1.5px solid #e2e2dc;
//     border-radius: 10px;
//     margin-bottom: 14px;
//   }
//   .ap-color-picker-wrap { display: flex; align-items: center; gap: 8px; }
//   .ap-color-picker { width: 44px; height: 36px; border: 1.5px solid #e2e2dc; border-radius: 7px; cursor: pointer; padding: 2px; }
//   .ap-btn-add {
//     background: #111;
//     color: #fff;
//     border: none;
//     border-radius: 8px;
//     padding: 9px 18px;
//     font-size: 13px;
//     font-family: 'DM Sans', sans-serif;
//     font-weight: 500;
//     cursor: pointer;
//     transition: background 0.15s;
//     white-space: nowrap;
//   }
//   .ap-btn-add:hover { background: #333; }
//   .ap-btn-danger {
//     background: transparent;
//     color: #ef4444;
//     border: 1.5px solid #fca5a5;
//     border-radius: 7px;
//     padding: 5px 10px;
//     font-size: 12px;
//     font-family: 'DM Sans', sans-serif;
//     cursor: pointer;
//     transition: background 0.15s;
//   }
//   .ap-btn-danger:hover { background: #fef2f2; }

//   .ap-color-list { display: flex; flex-direction: column; gap: 8px; }
//   .ap-color-item {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     padding: 10px 14px;
//     border: 1.5px solid #e8e8e2;
//     border-radius: 10px;
//     background: #fff;
//     transition: border-color 0.15s;
//   }
//   .ap-color-item:hover { border-color: #ccc; }
//   .ap-color-swatch-input { width: 36px; height: 36px; border-radius: 8px; border: 1.5px solid #e2e2dc; cursor: pointer; }
//   .ap-color-text-inputs { flex: 1; display: flex; flex-direction: column; gap: 3px; }
//   .ap-color-text-inputs input {
//     border: none;
//     outline: none;
//     background: transparent;
//     font-family: 'DM Sans', sans-serif;
//     color: #111;
//     padding: 2px 4px;
//   }
//   .ap-color-text-inputs input:first-child { font-size: 13.5px; font-weight: 500; }
//   .ap-color-text-inputs input:last-child { font-size: 11.5px; color: #999; }
//   .ap-color-text-inputs input:hover, .ap-color-text-inputs input:focus {
//     background: #f3f3ef;
//     border-radius: 4px;
//   }

//   /* ── Radio mode selector ── */
//   .ap-radio-group { display: flex; gap: 8px; flex-wrap: wrap; }
//   .ap-radio-pill {
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     padding: 7px 14px;
//     border: 1.5px solid #e2e2dc;
//     border-radius: 20px;
//     cursor: pointer;
//     font-size: 13px;
//     font-weight: 500;
//     color: #555;
//     background: #fff;
//     transition: all 0.15s;
//     user-select: none;
//   }
//   .ap-radio-pill.active { border-color: #111; background: #111; color: #fff; }
//   .ap-radio-pill input { display: none; }

//   /* ── Size system ── */
//   .ap-sizes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; }
//   .ap-size-card {
//     border: 1.5px solid #e2e2dc;
//     border-radius: 10px;
//     padding: 14px;
//     background: #fff;
//     cursor: pointer;
//     transition: border-color 0.15s, background 0.15s;
//   }
//   .ap-size-card.enabled { border-color: #111; background: #fafaf9; }
//   .ap-size-card-header { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
//   .ap-size-badge {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     min-width: 36px;
//     height: 28px;
//     border-radius: 6px;
//     background: #f3f3ef;
//     font-size: 12px;
//     font-weight: 700;
//     color: #111;
//     padding: 0 8px;
//   }
//   .ap-size-card.enabled .ap-size-badge { background: #111; color: #fff; }
//   .ap-size-inner-field { margin-bottom: 8px; }
//   .ap-size-inner-field label { font-size: 11px; text-transform: uppercase; color: #888; font-weight: 500; letter-spacing: 0.3px; display: block; margin-bottom: 4px; }
//   .ap-size-inner-field input {
//     width: 100%;
//     border: 1.5px solid #e2e2dc;
//     border-radius: 6px;
//     padding: 6px 10px;
//     font-size: 13px;
//     font-family: 'DM Sans', sans-serif;
//     background: #fff;
//     outline: none;
//     box-sizing: border-box;
//   }
//   .ap-size-inner-field input:focus { border-color: #111; }
//   .ap-price-preview {
//     font-size: 11.5px;
//     color: #16a34a;
//     font-weight: 600;
//     margin-top: 4px;
//     background: #f0fdf4;
//     border-radius: 5px;
//     padding: 3px 7px;
//     display: inline-block;
//   }
//   .ap-checkbox-row {
//     display: flex;
//     align-items: center;
//     gap: 7px;
//     margin-bottom: 8px;
//     cursor: pointer;
//   }
//   .ap-checkbox-row input[type=checkbox] { width: 15px; height: 15px; cursor: pointer; accent-color: #111; }
//   .ap-checkbox-row label { font-size: 12px; font-weight: 500; color: #444; cursor: pointer; }

//   /* ── Selected sizes summary ── */
//   .ap-sizes-summary { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
//   .ap-size-pill {
//     display: inline-flex;
//     align-items: center;
//     gap: 5px;
//     padding: 5px 12px;
//     background: #111;
//     color: #fff;
//     border-radius: 20px;
//     font-size: 12px;
//     font-weight: 500;
//   }

//   /* ── Inch sizes ── */
//   .ap-inch-add-row {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
//     align-items: flex-end;
//     padding: 16px;
//     background: #fafaf9;
//     border: 1.5px solid #e2e2dc;
//     border-radius: 10px;
//     margin-bottom: 14px;
//   }
//   .ap-inch-cards { display: flex; flex-wrap: wrap; gap: 12px; }
//   .ap-inch-card {
//     border: 1.5px solid #e2e2dc;
//     border-radius: 10px;
//     padding: 14px;
//     background: #fff;
//     width: 160px;
//     flex-shrink: 0;
//   }
//   .ap-inch-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
//   .ap-inch-label { font-size: 13px; font-weight: 700; color: #111; }

//   /* ── Sidebar card specifics ── */
//   .ap-toggle-row {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 12px 14px;
//     background: #fafaf9;
//     border: 1.5px solid #e2e2dc;
//     border-radius: 9px;
//     margin-bottom: 10px;
//     cursor: pointer;
//   }
//   .ap-toggle-row span { font-size: 13.5px; font-weight: 500; color: #333; }
//   .ap-toggle {
//     width: 40px; height: 22px;
//     background: #ddd;
//     border-radius: 11px;
//     position: relative;
//     transition: background 0.2s;
//     flex-shrink: 0;
//   }
//   .ap-toggle.on { background: #111; }
//   .ap-toggle::after {
//     content: '';
//     position: absolute;
//     top: 3px; left: 3px;
//     width: 16px; height: 16px;
//     border-radius: 50%;
//     background: #fff;
//     transition: transform 0.2s;
//   }
//   .ap-toggle.on::after { transform: translateX(18px); }

//   .ap-empty-state {
//     text-align: center;
//     padding: 20px;
//     color: #bbb;
//     font-size: 13px;
//     font-style: italic;
//     border: 1.5px dashed #e2e2dc;
//     border-radius: 9px;
//     background: #fafaf9;
//   }

//   .ap-divider { height: 1px; background: #f0f0ea; margin: 18px 0; }
//   .ap-badge-count {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     min-width: 20px;
//     height: 20px;
//     border-radius: 10px;
//     background: #111;
//     color: #fff;
//     font-size: 11px;
//     font-weight: 700;
//     padding: 0 5px;
//     margin-left: 6px;
//   }
// `;

// // ─── Component ────────────────────────────────────────────────────────────────
// const Add = ({ token }) => {
//     const [image1, setImage1] = useState(false);
//     const [image2, setImage2] = useState(false);
//     const [image3, setImage3] = useState(false);
//     const [image4, setImage4] = useState(false);
//     const [image5, setImage5] = useState(false);
//     const images = [image1, image2, image3, image4, image5];
//     const setters = [setImage1, setImage2, setImage3, setImage4, setImage5];

//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestseller, setBestseller] = useState(false);
//     const [detailedDescription, setDetailedDescription] = useState("");
//     const [discountPrice, setDiscountPrice] = useState("");

//     const [colors, setColors] = useState([]);
//     const [newColorName, setNewColorName] = useState("");
//     const [newColorHex, setNewColorHex] = useState("#000000");
//     const [colorInputMode, setColorInputMode] = useState("both");

//     const [sizeType, setSizeType] = useState("standard");

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

//     const [inchSizes, setInchSizes] = useState([]);
//     const [newInchSize, setNewInchSize] = useState("");
//     const [newInchMultiplier, setNewInchMultiplier] = useState(1.0);
//     const [newInchStock, setNewInchStock] = useState(0);
//     const [newInchCustomPrice, setNewInchCustomPrice] = useState("");
//     const [newInchUseCustomPrice, setNewInchUseCustomPrice] = useState(false);

//     // Handlers
//     const handleAddColor = () => {
//         if (colorInputMode === "both" && (!newColorName.trim() || !newColorHex)) return toast.error("Please enter color name and pick a color");
//         if (colorInputMode === "nameOnly" && !newColorName.trim()) return toast.error("Please enter color name");
//         if (colorInputMode === "hexOnly" && !newColorHex) return toast.error("Please select a color");
//         const colorToAdd = { name: newColorName.trim() || `Color-${colors.length + 1}`, hex: newColorHex || '#808080' };
//         if (colors.some(c => c.name.toLowerCase() === colorToAdd.name.toLowerCase())) return toast.error("Color name already exists");
//         setColors([...colors, colorToAdd]);
//         setNewColorName(""); setNewColorHex("#000000");
//         toast.success("Color added!");
//     };
//     const handleRemoveColor = (name) => setColors(colors.filter(c => c.name !== name));
//     const handleEditColor = (index, field, value) => { const u = [...colors]; u[index][field] = value; setColors(u); };
//     const handleStandardSizeToggle = (k) => setEnabledStandardSizes(p => p.includes(k) ? p.filter(s => s !== k) : [...p, k]);
//     const handleStandardSizeField = (k, field, value) => setStandardSizes(p => ({ ...p, [k]: { ...p[k], [field]: field === 'stock' ? parseInt(value) || 0 : field === 'multiplier' ? parseFloat(value) || 1 : value } }));
//     const toggleCustomPrice = (k) => setStandardSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
//     const calcFinalPrice = (data) => data.useCustomPrice && data.customPrice ? parseFloat(data.customPrice) : parseFloat(price || 0) * data.multiplier;

//     const handleAddInchSize = () => {
//         if (!newInchSize.trim()) return toast.error("Please enter inch size");
//         if (inchSizes.some(s => s.size === newInchSize)) return toast.error("Inch size already exists");
//         setInchSizes([...inchSizes, { size: newInchSize, multiplier: newInchMultiplier, stock: newInchStock, customPrice: newInchCustomPrice, useCustomPrice: newInchUseCustomPrice }]);
//         setNewInchSize(""); setNewInchMultiplier(1.0); setNewInchStock(0); setNewInchCustomPrice(""); setNewInchUseCustomPrice(false);
//         toast.success("Size added!");
//     };
//     const handleRemoveInchSize = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const handleInchField = (index, field, value) => { const u = [...inchSizes]; u[index][field] = field === 'stock' ? parseInt(value) || 0 : field === 'multiplier' ? parseFloat(value) || 1 : field === 'useCustomPrice' ? !u[index].useCustomPrice : value; setInchSizes(u); };

//     const formatSizesForSubmit = () => {
//         if (sizeType === "standard") {
//             return enabledStandardSizes.map(k => {
//                 const d = standardSizes[k];
//                 const obj = { size: k, priceMultiplier: d.multiplier, stock: d.stock };
//                 if (d.useCustomPrice) {
//                     const v = d.customPrice?.trim();
//                     if (!v || isNaN(Number(v)) || Number(v) <= 0) { toast.error(`Invalid custom price for ${k}`); throw new Error("Invalid custom price"); }
//                     obj.customPrice = Number(v); obj.useCustomPrice = true;
//                 }
//                 return obj;
//             });
//         } else {
//             return inchSizes.map(s => {
//                 const obj = { size: s.size, priceMultiplier: s.multiplier, stock: s.stock };
//                 if (s.useCustomPrice) {
//                     const v = s.customPrice?.trim();
//                     if (!v || isNaN(Number(v)) || Number(v) <= 0) { toast.error(`Invalid custom price for ${s.size}`); throw new Error("Invalid custom price"); }
//                     obj.customPrice = Number(v); obj.useCustomPrice = true;
//                 }
//                 return obj;
//             });
//         }
//     };

//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             if (sizeType === "standard" && enabledStandardSizes.length === 0) return toast.error("Select at least one standard size");
//             if (sizeType === "inch" && inchSizes.length === 0) return toast.error("Add at least one inch size");
//             if (colors.length === 0) return toast.error("Add at least one color");
//             if (!price || isNaN(Number(price)) || Number(price) <= 0) return toast.error("Base price is required and must be > 0");

//             const formData = new FormData();
//             formData.append("name", name.trim());
//             formData.append("description", description.trim());
//             formData.append("detailedDescription", detailedDescription);
//             formData.append("price", price);
//             formData.append("discountPrice", discountPrice || "");
//             formData.append("category", category);
//             formData.append("subCategory", subCategory);
//             formData.append("bestseller", bestseller);
//             formData.append("sizes", JSON.stringify(formatSizesForSubmit()));
//             formData.append("color", JSON.stringify(colors));
//             images.forEach((img, i) => { if (img) formData.append(`image${i + 1}`, img); });

//             const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } });
//             if (response.data.success) {
//                 toast.success("Product published successfully!");
//                 // Reset
//                 setName(""); setDescription(""); setDetailedDescription(""); setPrice(""); setDiscountPrice("");
//                 setColors([]); setColorInputMode("both"); setSizeType("standard");
//                 setEnabledStandardSizes([]);
//                 setStandardSizes({ XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false }, S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false }, M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false }, L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false }, XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false }, XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false }, "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false } });
//                 setInchSizes([]); setters.forEach(s => s(false));
//             } else { toast.error(response.data.message || "Failed to add product"); }
//         } catch (err) {
//             if (err.message !== "Invalid custom price") toast.error(err.response?.data?.message || err.message || "Something went wrong");
//         }
//     };

//     const PRESETS = [
//         { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
//         { name: "Red", hex: "#EF4444" }, { name: "Blue", hex: "#3B82F6" },
//         { name: "Navy Blue", hex: "#1E3A5F" }, { name: "Green", hex: "#22C55E" },
//         { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
//         { name: "Purple", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" },
//         { name: "Brown", hex: "#8B4513" }, { name: "Gray", hex: "#9CA3AF" },
//     ];

//     return (
//         <div className="add-product-root">
//             <style>{styles}</style>

//             {/* Header */}
//             <div className="ap-header">
//                 <div className="ap-header-left">
//                     <h1>Add New Product</h1>
//                     <p>Fill in the details below to publish a new product to your store</p>
//                 </div>
//                 <button type="button" className="ap-submit-btn-top" onClick={onSubmitHandler}>
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
//                     Publish Product
//                 </button>
//             </div>

//             <form onSubmit={onSubmitHandler}>
//                 <div className="ap-layout">
//                     {/* ── LEFT COLUMN ── */}
//                     <div>
//                         {/* Basic Info */}
//                         <div className="ap-card">
//                             <div className="ap-card-title">
//                                 <span className="icon">📝</span>
//                                 <div><h2>Product Information</h2><p>Name, description & categorization</p></div>
//                             </div>

//                             <div className="ap-field">
//                                 <label className="ap-label">Product Name *</label>
//                                 <input className="ap-input" type="text" placeholder="e.g. Classic Oxford Shirt" value={name} onChange={e => setName(e.target.value)} required />
//                             </div>

//                             <div className="ap-field">
//                                 <label className="ap-label">Short Description *</label>
//                                 <textarea className="ap-input ap-textarea" placeholder="Brief, engaging description for product listings..." value={description} onChange={e => setDescription(e.target.value)} required />
//                             </div>

//                             <div className="ap-row ap-row-3">
//                                 <div className="ap-field">
//                                     <label className="ap-label">Category</label>
//                                     <select className="ap-input ap-select" value={category} onChange={e => setCategory(e.target.value)}>
//                                         <option value="Men">Men</option>
//                                         <option value="Women">Women</option>
//                                         <option value="Others">Others</option>
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">Sub Category</label>
//                                     <select className="ap-input ap-select" value={subCategory} onChange={e => setSubCategory(e.target.value)}>
//                                         {category === "Others" ? (
//                                             <>
//                                                 <option>Cushion Cover</option>
//                                                 <option>Aprons</option>
//                                                 <option>Desk Mat</option>
//                                                 <option>Pillow</option>
//                                                 <option>Chair Cover</option>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <option>Topwear</option>
//                                                 <option>Bottomwear</option>
//                                                 <option>Winterwear</option>
//                                             </>
//                                         )}
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">Base Price (₹) *</label>
//                                     <input className="ap-input" type="number" placeholder="0.00" value={price} onChange={e => setPrice(e.target.value)} required />
//                                 </div>
//                             </div>

//                             <div className="ap-divider" />
//                             <div className="ap-field" style={{ margin: 0 }}>
//                                 <label className="ap-label">Detailed Description</label>
//                                 <div className="ap-quill">
//                                     <ReactQuill theme="snow" value={detailedDescription} onChange={setDetailedDescription} style={{ fontFamily: "'DM Sans', sans-serif" }} />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Media */}
//                         <div className="ap-card">
//                             <div className="ap-card-title">
//                                 <span className="icon">🖼️</span>
//                                 <div><h2>Product Images</h2><p>Upload up to 5 high-quality images</p></div>
//                             </div>
//                             <div className="ap-images-grid">
//                                 {images.map((img, i) => (
//                                     <label key={i} htmlFor={`img-${i}`} className={`ap-img-slot ${img ? 'has-img' : ''}`}>
//                                         {img ? (
//                                             <>
//                                                 <img className="preview" src={URL.createObjectURL(img)} alt="" />
//                                                 <span className="img-num">{i + 1}</span>
//                                                 <span className="remove-btn" onClick={e => { e.preventDefault(); setters[i](false); }}>✕</span>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <span className="placeholder-icon">＋</span>
//                                                 <span className="placeholder-text">Image {i + 1}</span>
//                                             </>
//                                         )}
//                                         <input type="file" id={`img-${i}`} hidden accept="image/*" onChange={e => setters[i](e.target.files[0])} />
//                                     </label>
//                                 ))}
//                             </div>
//                             <p style={{ fontSize: 11.5, color: '#aaa', marginTop: 10, marginBottom: 0 }}>First image will be used as the primary thumbnail. Recommended: 800×800px</p>
//                         </div>

//                         {/* Colors */}
//                         <div className="ap-card">
//                             <div className="ap-card-title">
//                                 <span className="icon">🎨</span>
//                                 <div>
//                                     <h2>Colors {colors.length > 0 && <span className="ap-badge-count">{colors.length}</span>}</h2>
//                                     <p>Add available color variants</p>
//                                 </div>
//                             </div>

//                             {/* Mode selector */}
//                             <div className="ap-radio-group" style={{ marginBottom: 16 }}>
//                                 {[["both", "Name + Hex"], ["nameOnly", "Name Only"], ["hexOnly", "Hex Only"]].map(([v, label]) => (
//                                     <label key={v} className={`ap-radio-pill ${colorInputMode === v ? 'active' : ''}`}>
//                                         <input type="radio" value={v} checked={colorInputMode === v} onChange={() => setColorInputMode(v)} />
//                                         {label}
//                                     </label>
//                                 ))}
//                             </div>

//                             {/* Add row */}
//                             <div className="ap-color-add-row">
//                                 {(colorInputMode === "both" || colorInputMode === "nameOnly") && (
//                                     <div className="ap-field" style={{ margin: 0 }}>
//                                         <label className="ap-label">Color Name</label>
//                                         <input className="ap-input" type="text" placeholder="e.g., Navy Blue" value={newColorName} onChange={e => setNewColorName(e.target.value)} style={{ width: 170 }} />
//                                     </div>
//                                 )}
//                                 {(colorInputMode === "both" || colorInputMode === "hexOnly") && (
//                                     <div className="ap-field" style={{ margin: 0 }}>
//                                         <label className="ap-label">Color</label>
//                                         <div className="ap-color-picker-wrap">
//                                             <input type="color" value={newColorHex} onChange={e => setNewColorHex(e.target.value)} className="ap-color-picker" />
//                                             <input className="ap-input" type="text" value={newColorHex} onChange={e => setNewColorHex(e.target.value)} style={{ width: 100 }} />
//                                         </div>
//                                     </div>
//                                 )}
//                                 <button type="button" onClick={handleAddColor} className="ap-btn-add">+ Add Color</button>
//                             </div>

//                             {/* Color list */}
//                             {colors.length === 0 ? (
//                                 <div className="ap-empty-state">No colors added yet. Use the form above or quick presets below.</div>
//                             ) : (
//                                 <div className="ap-color-list">
//                                     {colors.map((color, i) => (
//                                         <div key={i} className="ap-color-item">
//                                             <input type="color" value={color.hex} onChange={e => handleEditColor(i, 'hex', e.target.value)} className="ap-color-swatch-input" />
//                                             <div className="ap-color-text-inputs">
//                                                 <input type="text" value={color.name} onChange={e => handleEditColor(i, 'name', e.target.value)} placeholder="Color name" />
//                                                 <input type="text" value={color.hex} onChange={e => handleEditColor(i, 'hex', e.target.value)} placeholder="#000000" />
//                                             </div>
//                                             <button type="button" onClick={() => handleRemoveColor(color.name)} className="ap-btn-danger">Remove</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Quick presets */}
//                             <div className="ap-divider" />
//                             <p style={{ fontSize: 12, fontWeight: 600, color: '#555', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.3px' }}>Quick Add</p>
//                             <div className="ap-color-presets">
//                                 {PRESETS.map((p, i) => (
//                                     <button key={i} type="button" className="ap-preset-btn"
//                                         onClick={() => {
//                                             if (!colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())) {
//                                                 setColors(prev => [...prev, p]);
//                                                 toast.success(`${p.name} added!`);
//                                             } else { toast.info(`${p.name} already exists`); }
//                                         }}>
//                                         <div className="ap-color-dot" style={{ backgroundColor: p.hex }} />
//                                         {p.name}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Size System */}
//                         <div className="ap-card">
//                             <div className="ap-card-title">
//                                 <span className="icon">📐</span>
//                                 <div><h2>Size & Inventory</h2><p>Set sizes, prices and stock levels</p></div>
//                             </div>

//                             {/* Size type */}
//                             <div className="ap-radio-group" style={{ marginBottom: 20 }}>
//                                 {[["standard", "Standard Sizes (XS–3XL)"], ["inch", "Inch-Based (14×14, 18×18…)"]].map(([v, label]) => (
//                                     <label key={v} className={`ap-radio-pill ${sizeType === v ? 'active' : ''}`}>
//                                         <input type="radio" value={v} checked={sizeType === v} onChange={() => setSizeType(v)} />
//                                         {label}
//                                     </label>
//                                 ))}
//                             </div>

//                             {sizeType === "standard" && (
//                                 <>
//                                     <div className="ap-sizes-grid">
//                                         {Object.keys(standardSizes).map(k => {
//                                             const enabled = enabledStandardSizes.includes(k);
//                                             const data = standardSizes[k];
//                                             return (
//                                                 <div key={k} className={`ap-size-card ${enabled ? 'enabled' : ''}`} onClick={() => !enabled && handleStandardSizeToggle(k)}>
//                                                     <div className="ap-size-card-header">
//                                                         <input type="checkbox" checked={enabled} onChange={() => handleStandardSizeToggle(k)} onClick={e => e.stopPropagation()} style={{ accentColor: '#111', cursor: 'pointer' }} />
//                                                         <span className="ap-size-badge">{k}</span>
//                                                     </div>
//                                                     {enabled && (
//                                                         <div onClick={e => e.stopPropagation()}>
//                                                             <div className="ap-checkbox-row">
//                                                                 <input type="checkbox" id={`cp-${k}`} checked={data.useCustomPrice} onChange={() => toggleCustomPrice(k)} />
//                                                                 <label htmlFor={`cp-${k}`}>Custom Price</label>
//                                                             </div>
//                                                             {data.useCustomPrice ? (
//                                                                 <div className="ap-size-inner-field">
//                                                                     <label>Price (₹)</label>
//                                                                     <input type="number" step="0.01" min="0" value={data.customPrice} onChange={e => handleStandardSizeField(k, 'customPrice', e.target.value)} placeholder="Enter price" />
//                                                                     <div className="ap-price-preview">₹ {data.customPrice || '—'}</div>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div className="ap-size-inner-field">
//                                                                     <label>Multiplier</label>
//                                                                     <input type="number" step="0.1" min="0.5" max="2" value={data.multiplier} onChange={e => handleStandardSizeField(k, 'multiplier', e.target.value)} />
//                                                                     <div className="ap-price-preview">₹ {calcFinalPrice(data).toFixed(2)}</div>
//                                                                 </div>
//                                                             )}
//                                                             <div className="ap-size-inner-field">
//                                                                 <label>Stock</label>
//                                                                 <input type="number" min="0" value={data.stock} onChange={e => handleStandardSizeField(k, 'stock', e.target.value)} />
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                     {enabledStandardSizes.length > 0 && (
//                                         <div style={{ marginTop: 16 }}>
//                                             <p style={{ fontSize: 12, fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: 8 }}>Selected Sizes</p>
//                                             <div className="ap-sizes-summary">
//                                                 {enabledStandardSizes.map(k => (
//                                                     <span key={k} className="ap-size-pill">{k} · ₹{calcFinalPrice(standardSizes[k]).toFixed(2)}</span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}
//                                 </>
//                             )}

//                             {sizeType === "inch" && (
//                                 <>
//                                     <div className="ap-inch-add-row">
//                                         <div className="ap-field" style={{ margin: 0 }}>
//                                             <label className="ap-label">Size</label>
//                                             <input className="ap-input" type="text" placeholder="e.g., 14x14" value={newInchSize} onChange={e => setNewInchSize(e.target.value)} style={{ width: 110 }} />
//                                         </div>
//                                         <div className="ap-field" style={{ margin: 0 }}>
//                                             <label className="ap-label">Stock</label>
//                                             <input className="ap-input" type="number" min="0" value={newInchStock} onChange={e => setNewInchStock(parseInt(e.target.value) || 0)} style={{ width: 80 }} />
//                                         </div>
//                                         <div className="ap-checkbox-row" style={{ marginBottom: 0, alignSelf: 'flex-end', paddingBottom: 4 }}>
//                                             <input type="checkbox" id="inch-cp-new" checked={newInchUseCustomPrice} onChange={e => setNewInchUseCustomPrice(e.target.checked)} />
//                                             <label htmlFor="inch-cp-new">Custom Price</label>
//                                         </div>
//                                         {newInchUseCustomPrice ? (
//                                             <div className="ap-field" style={{ margin: 0 }}>
//                                                 <label className="ap-label">Price (₹)</label>
//                                                 <input className="ap-input" type="number" step="0.01" min="0" value={newInchCustomPrice} onChange={e => setNewInchCustomPrice(e.target.value)} style={{ width: 100 }} />
//                                             </div>
//                                         ) : (
//                                             <div className="ap-field" style={{ margin: 0 }}>
//                                                 <label className="ap-label">Multiplier</label>
//                                                 <input className="ap-input" type="number" step="0.1" min="0.5" max="2" value={newInchMultiplier} onChange={e => setNewInchMultiplier(parseFloat(e.target.value) || 1)} style={{ width: 90 }} />
//                                             </div>
//                                         )}
//                                         <button type="button" onClick={handleAddInchSize} className="ap-btn-add" style={{ alignSelf: 'flex-end' }}>+ Add Size</button>
//                                     </div>

//                                     {inchSizes.length === 0 ? (
//                                         <div className="ap-empty-state">No sizes added yet. Use the form above.</div>
//                                     ) : (
//                                         <div className="ap-inch-cards">
//                                             {inchSizes.map((s, i) => (
//                                                 <div key={i} className="ap-inch-card">
//                                                     <div className="ap-inch-card-header">
//                                                         <span className="ap-inch-label">{s.size}"</span>
//                                                         <button type="button" onClick={() => handleRemoveInchSize(s.size)} className="ap-btn-danger" style={{ padding: '3px 8px', fontSize: 11 }}>✕</button>
//                                                     </div>
//                                                     <div className="ap-checkbox-row">
//                                                         <input type="checkbox" id={`ich-cp-${i}`} checked={s.useCustomPrice} onChange={() => handleInchField(i, 'useCustomPrice')} />
//                                                         <label htmlFor={`ich-cp-${i}`}>Custom Price</label>
//                                                     </div>
//                                                     {s.useCustomPrice ? (
//                                                         <div className="ap-size-inner-field">
//                                                             <label>Price (₹)</label>
//                                                             <input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => handleInchField(i, 'customPrice', e.target.value)} />
//                                                             <div className="ap-price-preview">₹ {s.customPrice || '—'}</div>
//                                                         </div>
//                                                     ) : (
//                                                         <div className="ap-size-inner-field">
//                                                             <label>Multiplier</label>
//                                                             <input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => handleInchField(i, 'multiplier', e.target.value)} />
//                                                             <div className="ap-price-preview">₹ {(parseFloat(price || 0) * s.multiplier).toFixed(2)}</div>
//                                                         </div>
//                                                     )}
//                                                     <div className="ap-size-inner-field">
//                                                         <label>Stock</label>
//                                                         <input type="number" min="0" value={s.stock} onChange={e => handleInchField(i, 'stock', e.target.value)} />
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}

//                                     {inchSizes.length > 0 && (
//                                         <div style={{ marginTop: 16 }}>
//                                             <div className="ap-sizes-summary">
//                                                 {inchSizes.map((s, i) => (
//                                                     <span key={i} className="ap-size-pill">{s.size}" · ₹{(s.useCustomPrice ? parseFloat(s.customPrice || 0) : parseFloat(price || 0) * s.multiplier).toFixed(2)}</span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </div>
//                     </div>

//                     {/* ── RIGHT COLUMN (Sidebar) ── */}
//                     <div>
//                         {/* Publish */}
//                         <div className="ap-card">
//                             <div className="ap-card-title">
//                                 <span className="icon">🚀</span>
//                                 <div><h2>Publish</h2><p>Product visibility settings</p></div>
//                             </div>

//                             <div className="ap-toggle-row" onClick={() => setBestseller(p => !p)}>
//                                 <span>Mark as Bestseller</span>
//                                 <div className={`ap-toggle ${bestseller ? 'on' : ''}`} />
//                             </div>

//                             <button type="submit" className="ap-submit-btn-top" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
//                                 Publish Product
//                             </button>
//                         </div>

//                         {/* Pricing sidebar */}
//                         <div className="ap-card">
//                             <div className="ap-card-title">
//                                 <span className="icon">💰</span>
//                                 <div><h2>Pricing</h2><p>Set base and sale price</p></div>
//                             </div>
//                             <div className="ap-field">
//                                 <label className="ap-label">Base Price (₹) *</label>
//                                 <input className="ap-input" type="number" placeholder="0.00" value={price} onChange={e => setPrice(e.target.value)} required />
//                             </div>
//                             <div className="ap-field" style={{ margin: 0 }}>
//                                 <label className="ap-label">Discount / Sale Price (₹)</label>
//                                 <input className="ap-input" type="number" placeholder="0.00" value={discountPrice} onChange={e => setDiscountPrice(e.target.value)} />
//                                 {discountPrice && price && Number(discountPrice) < Number(price) && (
//                                     <p style={{ fontSize: 12, color: '#16a34a', marginTop: 6, fontWeight: 600 }}>
//                                         💸 {Math.round((1 - discountPrice / price) * 100)}% off
//                                     </p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Summary */}
//                         <div className="ap-card">
//                             <div className="ap-card-title">
//                                 <span className="icon">📊</span>
//                                 <div><h2>Summary</h2><p>Quick overview</p></div>
//                             </div>
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//                                 {[
//                                     ["Name", name || <span style={{ color: '#bbb', fontStyle: 'italic' }}>Not set</span>],
//                                     ["Category", `${category} › ${subCategory}`],
//                                     ["Base Price", price ? `₹${price}` : <span style={{ color: '#bbb' }}>Not set</span>],
//                                     ["Colors", colors.length ? colors.map(c => c.name).join(', ') : <span style={{ color: '#bbb' }}>None</span>],
//                                     ["Sizes", sizeType === 'standard' ? (enabledStandardSizes.length ? enabledStandardSizes.join(', ') : <span style={{ color: '#bbb' }}>None</span>) : (inchSizes.length ? inchSizes.map(s => s.size).join(', ') : <span style={{ color: '#bbb' }}>None</span>)],
//                                     ["Images", `${images.filter(Boolean).length} / 5 uploaded`],
//                                     ["Bestseller", bestseller ? '✅ Yes' : 'No'],
//                                 ].map(([label, val], i) => (
//                                     <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, fontSize: 13, borderBottom: '1px solid #f0f0ea', paddingBottom: 8 }}>
//                                         <span style={{ color: '#888', fontWeight: 500, flexShrink: 0 }}>{label}</span>
//                                         <span style={{ color: '#111', fontWeight: 500, textAlign: 'right', wordBreak: 'break-word' }}>{val}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Add;








// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { assets } from '../../assets/assets';
// import { backendUrl } from '../../App';

// /* ═══════════════════════════════════════════════════════════
//    STYLES
// ═══════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,500&display=swap');

// :root {
//   --ink: #0f0f0f;
//   --ink2: #3a3a3a;
//   --muted: #888;
//   --border: #e3e3dd;
//   --surface: #fafaf8;
//   --surface2: #f4f4f0;
//   --white: #ffffff;
//   --green: #16a34a;
//   --green-bg: #f0fdf4;
//   --red: #dc2626;
//   --red-bg: #fef2f2;
//   --blue: #2563eb;
//   --blue-bg: #eff6ff;
//   --amber: #d97706;
//   --amber-bg: #fffbeb;
//   --radius: 12px;
//   --radius-sm: 8px;
//   --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
//   --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
// }

// .ap * { box-sizing: border-box; }
// .ap { font-family:'Outfit',sans-serif; background:var(--surface); min-height:100vh; color:var(--ink); }

// /* TOP NAV */
// .ap-topbar { background:var(--white); border-bottom:1px solid var(--border); padding:0 28px; height:60px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; }
// .ap-topbar-left { display:flex; align-items:center; gap:12px; }
// .ap-topbar-left h1 { font-family:'Playfair Display',serif; font-size:20px; font-weight:600; margin:0; }
// .ap-topbar-left span { font-size:12px; color:var(--muted); }
// .ap-topbar-div { width:1px; height:20px; background:var(--border); }
// .ap-topbar-right { display:flex; align-items:center; gap:8px; }

// /* BUTTONS */
// .ap-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:var(--radius-sm); font-size:13.5px; font-weight:600; font-family:'Outfit',sans-serif; cursor:pointer; transition:all 0.15s; border:none; white-space:nowrap; }
// .ap-btn:disabled { opacity:0.6; cursor:not-allowed; }
// .ap-btn-primary { background:var(--ink); color:#fff; }
// .ap-btn-primary:hover:not(:disabled) { background:#2a2a2a; transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,0.2); }
// .ap-btn-ghost { background:transparent; color:var(--ink2); border:1.5px solid var(--border); }
// .ap-btn-ghost:hover { background:var(--surface2); border-color:#ccc; }
// .ap-btn-danger { background:var(--red-bg); color:var(--red); border:1.5px solid #fca5a5; }
// .ap-btn-danger:hover { background:#fee2e2; }
// .ap-btn-green { background:var(--green-bg); color:var(--green); border:1.5px solid #86efac; }
// .ap-btn-sm { padding:6px 12px; font-size:12.5px; }
// .ap-btn-xs { padding:4px 9px; font-size:11.5px; }

// /* STEPS */
// .ap-steps { background:var(--white); border-bottom:1px solid var(--border); padding:0 28px; display:flex; align-items:center; overflow-x:auto; }
// .ap-step { display:flex; align-items:center; gap:8px; padding:13px 18px 13px 0; opacity:0.4; transition:opacity 0.2s; white-space:nowrap; flex-shrink:0; }
// .ap-step.done,.ap-step.active { opacity:1; }
// .ap-step-num { width:26px; height:26px; border-radius:50%; background:var(--surface2); border:2px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:11.5px; font-weight:700; color:var(--muted); flex-shrink:0; }
// .ap-step.active .ap-step-num { background:var(--ink); border-color:var(--ink); color:#fff; }
// .ap-step.done .ap-step-num { background:var(--green); border-color:var(--green); color:#fff; }
// .ap-step-lbl { font-size:13px; font-weight:500; }
// .ap-step.active .ap-step-lbl { font-weight:700; color:var(--ink); }
// .ap-step-arr { color:var(--border); margin-right:18px; font-size:14px; }

// /* LAYOUT */
// .ap-body { display:grid; grid-template-columns:1fr 320px; gap:20px; padding:24px 28px 60px; max-width:1400px; align-items:start; }
// @media(max-width:960px){ .ap-body { grid-template-columns:1fr; padding:16px; } }

// /* CARDS */
// .ap-card { background:var(--white); border:1px solid var(--border); border-radius:var(--radius); padding:24px; margin-bottom:18px; box-shadow:var(--shadow); }
// .ap-card-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--surface2); }
// .ap-card-head-l { display:flex; align-items:center; gap:10px; }
// .ap-card-icon { width:36px; height:36px; border-radius:9px; background:var(--surface2); display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
// .ap-card-title { font-size:14px; font-weight:700; color:var(--ink); }
// .ap-card-sub { font-size:11.5px; color:var(--muted); margin-top:2px; }

// /* FIELDS */
// .ap-field { margin-bottom:16px; }
// .ap-field:last-child { margin-bottom:0; }
// .ap-label { display:flex; align-items:center; gap:4px; font-size:11.5px; font-weight:600; color:var(--muted); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:7px; }
// .req { color:var(--red); font-size:13px; }
// .ap-input,.ap-ta,.ap-sel { width:100%; border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:10px 13px; font-size:14px; font-family:'Outfit',sans-serif; color:var(--ink); background:var(--surface); transition:border-color 0.15s,background 0.15s,box-shadow 0.15s; outline:none; }
// .ap-input:focus,.ap-ta:focus,.ap-sel:focus { border-color:var(--ink); background:var(--white); box-shadow:0 0 0 3px rgba(0,0,0,0.05); }
// .ap-input.err { border-color:var(--red); background:var(--red-bg); }
// .ap-ta { resize:vertical; min-height:90px; }
// .ap-sel { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; padding-right:36px; cursor:pointer; }
// .ap-hint { font-size:11.5px; color:var(--muted); margin-top:5px; }
// .ap-iw { position:relative; }
// .ap-cc { position:absolute; right:10px; bottom:9px; font-size:10.5px; color:var(--muted); pointer-events:none; }
// .ap-cc.w { color:var(--amber); } .ap-cc.o { color:var(--red); }
// .ap-r2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
// .ap-r3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
// @media(max-width:600px){ .ap-r2,.ap-r3 { grid-template-columns:1fr; } }

// /* DIVIDER */
// .ap-div { height:1px; background:var(--surface2); margin:18px 0; }

// /* IMAGES */
// .ap-dropzone { border:2px dashed var(--border); border-radius:var(--radius); padding:28px 20px; text-align:center; cursor:pointer; transition:all 0.2s; background:var(--surface); margin-bottom:14px; }
// .ap-dropzone:hover,.ap-dropzone.drag { border-color:var(--ink); background:var(--surface2); }
// .ap-dropzone h3 { font-size:14px; font-weight:600; margin:8px 0 4px; }
// .ap-dropzone p { font-size:12px; color:var(--muted); margin:0; }
// .ap-imgs { display:grid; grid-template-columns:repeat(5,1fr); gap:10px; }
// @media(max-width:560px){ .ap-imgs { grid-template-columns:repeat(3,1fr); } }
// .ap-slot { position:relative; aspect-ratio:1; border-radius:var(--radius-sm); overflow:hidden; cursor:pointer; background:var(--surface2); border:1.5px dashed var(--border); display:flex; flex-direction:column; align-items:center; justify-content:center; transition:all 0.18s; }
// .ap-slot:hover { border-color:var(--ink); }
// .ap-slot.has { border-style:solid; border-color:transparent; background:#000; }
// .ap-slot.pri { box-shadow:0 0 0 2.5px var(--ink); }
// .ap-slot-img { width:100%; height:100%; object-fit:cover; transition:opacity 0.18s; }
// .ap-slot:hover .ap-slot-img { opacity:0.65; }
// .ap-slot-ov { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px; opacity:0; transition:opacity 0.18s; }
// .ap-slot:hover .ap-slot-ov { opacity:1; }
// .ap-slot-ovbtn { background:rgba(255,255,255,0.9); border:none; border-radius:6px; padding:4px 10px; font-size:11px; font-family:'Outfit',sans-serif; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:4px; }
// .ap-slot-ovbtn:hover { background:#fff; }
// .ap-slot-ovbtn.del { color:var(--red); }
// .ap-pri-badge { position:absolute; top:6px; left:6px; background:var(--ink); color:#fff; border-radius:4px; padding:2px 7px; font-size:9px; font-weight:700; letter-spacing:0.5px; }
// .ap-slot-num { position:absolute; top:6px; right:6px; background:rgba(0,0,0,0.45); color:#fff; border-radius:4px; padding:2px 6px; font-size:10px; font-weight:600; }
// .ap-slot-plus { font-size:20px; color:#ccc; }
// .ap-slot-lbl { font-size:10px; color:#bbb; margin-top:3px; }

// /* LIGHTBOX */
// .lb-ov { position:fixed; inset:0; background:rgba(0,0,0,0.9); z-index:9999; display:flex; align-items:center; justify-content:center; animation:fadeIn 0.2s ease; backdrop-filter:blur(4px); }
// .lb { position:relative; display:flex; flex-direction:column; align-items:center; gap:14px; max-width:90vw; }
// .lb-img { max-width:80vw; max-height:74vh; border-radius:12px; object-fit:contain; box-shadow:var(--shadow-lg); }
// .lb-close { position:absolute; top:-14px; right:-14px; width:34px; height:34px; border-radius:50%; background:#fff; border:none; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; font-weight:700; color:var(--ink); box-shadow:0 2px 8px rgba(0,0,0,0.2); transition:transform 0.15s; }
// .lb-close:hover { transform:rotate(90deg); }
// .lb-thumbs { display:flex; gap:8px; }
// .lb-thumb { width:52px; height:52px; border-radius:7px; object-fit:cover; cursor:pointer; border:2px solid transparent; opacity:0.55; transition:all 0.15s; }
// .lb-thumb.on { border-color:#fff; opacity:1; }
// .lb-info { color:rgba(255,255,255,0.6); font-size:12px; text-align:center; }
// .lb-arr { position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.15); border:none; border-radius:50%; width:42px; height:42px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:20px; color:#fff; transition:background 0.15s; }
// .lb-arr:hover { background:rgba(255,255,255,0.3); }
// .lb-prev { left:-58px; } .lb-next { right:-58px; }

// /* PREVIEW MODAL */
// .pm-ov { position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:1000; display:flex; align-items:center; justify-content:center; padding:20px; animation:fadeIn 0.2s ease; backdrop-filter:blur(3px); }
// .pm { background:var(--white); border-radius:16px; width:100%; max-width:860px; max-height:92vh; overflow-y:auto; box-shadow:0 20px 60px rgba(0,0,0,0.25); animation:slideUp 0.25s ease; }
// .pm-head { position:sticky; top:0; background:var(--white); border-bottom:1px solid var(--border); padding:15px 22px; display:flex; align-items:center; justify-content:space-between; z-index:10; }
// .pm-head h2 { font-family:'Playfair Display',serif; font-size:18px; margin:0; }
// .pm-body { padding:24px; }
// .pm-layout { display:grid; grid-template-columns:1fr 1fr; gap:28px; }
// @media(max-width:640px){ .pm-layout { grid-template-columns:1fr; } }
// .pm-main-img { width:100%; aspect-ratio:1; border-radius:var(--radius); object-fit:cover; border:1px solid var(--border); margin-bottom:10px; background:var(--surface2); display:flex; align-items:center; justify-content:center; overflow:hidden; }
// .pm-main-img img { width:100%; height:100%; object-fit:cover; }
// .pm-thumbs { display:flex; gap:7px; flex-wrap:wrap; }
// .pm-thumb { width:50px; height:50px; border-radius:7px; object-fit:cover; cursor:pointer; border:2px solid transparent; transition:all 0.15s; }
// .pm-thumb.on { border-color:var(--ink); }
// .pm-cats { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px; }
// .pm-cat { background:var(--surface2); color:var(--muted); border-radius:20px; padding:3px 10px; font-size:11.5px; font-weight:500; }
// .pm-name { font-family:'Playfair Display',serif; font-size:26px; font-weight:600; margin:0 0 8px; line-height:1.2; }
// .pm-desc { font-size:13.5px; color:var(--ink2); line-height:1.65; margin-bottom:14px; }
// .pm-prices { display:flex; align-items:baseline; gap:10px; margin-bottom:16px; }
// .pm-price { font-size:26px; font-weight:700; }
// .pm-old { font-size:15px; color:var(--muted); text-decoration:line-through; }
// .pm-disc { background:var(--green-bg); color:var(--green); border-radius:5px; padding:2px 8px; font-size:12px; font-weight:700; }
// .pm-sec-title { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:var(--muted); margin-bottom:8px; }
// .pm-colors { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px; }
// .pm-swatch { width:27px; height:27px; border-radius:50%; border:2px solid rgba(0,0,0,0.1); cursor:pointer; transition:transform 0.12s; position:relative; }
// .pm-swatch:hover { transform:scale(1.15); }
// .pm-swatch.on::after { content:'✓'; position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:12px; color:#fff; font-weight:700; text-shadow:0 1px 2px rgba(0,0,0,0.4); }
// .pm-sizes { display:flex; gap:7px; flex-wrap:wrap; margin-bottom:16px; }
// .pm-sz-btn { border:1.5px solid var(--border); border-radius:7px; padding:6px 13px; font-size:13px; font-weight:600; cursor:pointer; background:var(--white); transition:all 0.15s; font-family:'Outfit',sans-serif; }
// .pm-sz-btn:hover,.pm-sz-btn.on { background:var(--ink); color:#fff; border-color:var(--ink); }
// .pm-add-btn { width:100%; padding:14px; background:var(--ink); color:#fff; border:none; border-radius:var(--radius-sm); font-size:15px; font-weight:700; font-family:'Outfit',sans-serif; cursor:default; display:flex; align-items:center; justify-content:center; gap:8px; }
// .pm-best { display:inline-flex; align-items:center; gap:5px; background:linear-gradient(135deg,#f59e0b,#d97706); color:#fff; border-radius:5px; padding:3px 10px; font-size:11px; font-weight:700; letter-spacing:0.4px; margin-bottom:10px; }

// /* COLORS */
// .ap-clist { display:flex; flex-direction:column; gap:8px; margin-bottom:14px; }
// .ap-citem { display:flex; align-items:center; gap:10px; padding:10px 13px; border:1.5px solid var(--border); border-radius:var(--radius-sm); background:var(--white); transition:border-color 0.15s; }
// .ap-citem:hover { border-color:#ccc; }
// .ap-cswatch { width:34px; height:34px; border-radius:7px; border:1.5px solid var(--border); cursor:pointer; flex-shrink:0; }
// .ap-ctexts { flex:1; display:flex; flex-direction:column; gap:2px; }
// .ap-ctexts input { border:none; outline:none; background:transparent; font-family:'Outfit',sans-serif; color:var(--ink); padding:2px 4px; border-radius:4px; }
// .ap-ctexts input:first-child { font-size:13.5px; font-weight:500; }
// .ap-ctexts input:last-child { font-size:11.5px; color:var(--muted); }
// .ap-ctexts input:hover,.ap-ctexts input:focus { background:var(--surface2); }
// .ap-presets { display:flex; flex-wrap:wrap; gap:6px; }
// .ap-ppill { display:flex; align-items:center; gap:6px; padding:5px 11px; border:1.5px solid var(--border); border-radius:20px; background:var(--white); font-size:12px; font-weight:500; cursor:pointer; transition:all 0.15s; color:var(--ink2); font-family:'Outfit',sans-serif; }
// .ap-ppill:hover { border-color:var(--ink); background:var(--surface2); }
// .ap-ppill.on { border-color:var(--green); background:var(--green-bg); color:var(--green); }
// .ap-pdot { width:13px; height:13px; border-radius:50%; border:1px solid rgba(0,0,0,0.1); flex-shrink:0; }
// .ap-cadd { display:flex; flex-wrap:wrap; gap:10px; align-items:flex-end; padding:14px; background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius-sm); margin-bottom:14px; }

// /* RADIO PILLS */
// .ap-rg { display:flex; gap:7px; flex-wrap:wrap; }
// .ap-rp { display:flex; align-items:center; gap:6px; padding:6px 13px; border:1.5px solid var(--border); border-radius:20px; cursor:pointer; font-size:12.5px; font-weight:500; color:var(--ink2); background:var(--white); transition:all 0.15s; user-select:none; font-family:'Outfit',sans-serif; }
// .ap-rp input { display:none; }
// .ap-rp.on { border-color:var(--ink); background:var(--ink); color:#fff; }

// /* SIZES */
// .ap-szgrid { display:grid; grid-template-columns:repeat(auto-fill,minmax(155px,1fr)); gap:10px; }
// .ap-szcard { border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:13px; background:var(--white); cursor:pointer; transition:all 0.15s; }
// .ap-szcard:hover { border-color:#bbb; }
// .ap-szcard.on { border-color:var(--ink); background:var(--surface); }
// .ap-szh { display:flex; align-items:center; gap:8px; margin-bottom:10px; }
// .ap-szbadge { display:inline-flex; align-items:center; justify-content:center; min-width:36px; height:28px; border-radius:6px; background:var(--surface2); font-size:12px; font-weight:800; padding:0 8px; }
// .ap-szcard.on .ap-szbadge { background:var(--ink); color:#fff; }
// .ap-szf { margin-bottom:7px; }
// .ap-szf label { font-size:10.5px; text-transform:uppercase; color:var(--muted); font-weight:600; letter-spacing:0.3px; display:block; margin-bottom:4px; }
// .ap-szf input { width:100%; border:1.5px solid var(--border); border-radius:6px; padding:6px 9px; font-size:13px; font-family:'Outfit',sans-serif; outline:none; background:var(--white); }
// .ap-szf input:focus { border-color:var(--ink); }
// .ap-ptag { background:var(--green-bg); color:var(--green); border-radius:5px; padding:3px 8px; font-size:11px; font-weight:700; display:inline-block; margin-top:4px; }
// .ap-ckr { display:flex; align-items:center; gap:6px; margin-bottom:8px; cursor:pointer; }
// .ap-ckr input { accent-color:var(--ink); cursor:pointer; }
// .ap-ckr label { font-size:12px; font-weight:500; cursor:pointer; }
// .ap-szsum { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
// .ap-szpill { display:inline-flex; align-items:center; gap:4px; padding:5px 11px; background:var(--ink); color:#fff; border-radius:20px; font-size:11.5px; font-weight:600; }
// .ap-icards { display:flex; flex-wrap:wrap; gap:10px; }
// .ap-icard { border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:13px; background:var(--white); width:155px; }
// .ap-ich { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
// .ap-il { font-size:13px; font-weight:800; }

// /* SIDEBAR */
// .ap-sb { background:var(--white); border:1px solid var(--border); border-radius:var(--radius); padding:20px; margin-bottom:16px; box-shadow:var(--shadow); }
// .ap-sr { display:flex; justify-content:space-between; align-items:flex-start; padding:8px 0; border-bottom:1px solid var(--surface2); font-size:12.5px; gap:10px; }
// .ap-sr:last-child { border-bottom:none; }
// .ap-sk { color:var(--muted); font-weight:500; flex-shrink:0; }
// .ap-sv { color:var(--ink); font-weight:600; text-align:right; word-break:break-word; }
// .ap-trow { display:flex; align-items:center; justify-content:space-between; padding:11px 13px; background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius-sm); margin-bottom:10px; cursor:pointer; transition:background 0.15s; }
// .ap-trow:hover { background:var(--surface2); }
// .ap-tlbl { font-size:13px; font-weight:500; }
// .ap-tsw { width:38px; height:21px; background:#ddd; border-radius:10.5px; position:relative; transition:background 0.2s; flex-shrink:0; }
// .ap-tsw.on { background:var(--ink); }
// .ap-tsw::after { content:''; position:absolute; top:3px; left:3px; width:15px; height:15px; border-radius:50%; background:#fff; transition:transform 0.2s; }
// .ap-tsw.on::after { transform:translateX(17px); }

// /* PROGRESS */
// .ap-pbtrack { background:var(--surface2); border-radius:4px; height:6px; overflow:hidden; }
// .ap-pbfill { height:100%; background:var(--ink); border-radius:4px; transition:width 0.4s ease; }
// .ap-plbl { font-size:11.5px; color:var(--muted); margin-bottom:6px; font-weight:500; }

// /* BADGE */
// .ap-badge { display:inline-flex; align-items:center; gap:3px; padding:2px 8px; border-radius:5px; font-size:11px; font-weight:700; }
// .ap-bg { background:var(--green-bg); color:var(--green); }
// .ap-ba { background:var(--amber-bg); color:var(--amber); }
// .ap-bb { background:var(--blue-bg); color:var(--blue); }
// .ap-br { background:var(--red-bg); color:var(--red); }

// /* VALIDATION */
// .ap-verrs { background:var(--red-bg); border:1.5px solid #fca5a5; border-radius:var(--radius-sm); padding:14px 16px; margin-bottom:18px; }
// .ap-verrs h4 { color:var(--red); font-size:13px; font-weight:700; margin:0 0 8px; }
// .ap-verrs ul { margin:0; padding-left:18px; }
// .ap-verrs li { color:var(--red); font-size:12.5px; margin-bottom:3px; }

// /* DRAFT */
// .ap-draft { background:var(--amber-bg); border:1px solid #fcd34d; border-radius:var(--radius-sm); padding:9px 14px; display:flex; align-items:center; justify-content:space-between; font-size:12.5px; color:var(--amber); font-weight:500; margin-bottom:14px; }

// /* EMPTY */
// .ap-empty { text-align:center; padding:22px 16px; border:1.5px dashed var(--border); border-radius:var(--radius-sm); background:var(--surface); color:var(--muted); font-size:13px; }
// .ap-empty-ic { font-size:28px; margin-bottom:6px; }

// /* QUILL */
// .ap-ql .ql-container { border-radius:0 0 var(--radius-sm) var(--radius-sm); border:1.5px solid var(--border); border-top:0; font-family:'Outfit',sans-serif; font-size:14px; }
// .ap-ql .ql-toolbar { border-radius:var(--radius-sm) var(--radius-sm) 0 0; border:1.5px solid var(--border); background:var(--surface); }
// .ap-ql .ql-editor { min-height:160px; }

// /* ANIMATIONS */
// @keyframes fadeIn { from{opacity:0}to{opacity:1} }
// @keyframes slideUp { from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)} }
// .pm::-webkit-scrollbar { width:5px; }
// .pm::-webkit-scrollbar-thumb { background:var(--border); border-radius:3px; }
// `;

// /* ═══════════════════════════════════════════════════════════
//    CONSTANTS
// ═══════════════════════════════════════════════════════════ */
// const PRESETS = [
//     { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" }, { name: "Red", hex: "#EF4444" },
//     { name: "Navy Blue", hex: "#1E3A5F" }, { name: "Royal Blue", hex: "#3B82F6" }, { name: "Forest Green", hex: "#166534" },
//     { name: "Olive", hex: "#4D7C0F" }, { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
//     { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" }, { name: "Brown", hex: "#92400E" },
//     { name: "Cream", hex: "#FFFDD0" }, { name: "Gray", hex: "#9CA3AF" }, { name: "Charcoal", hex: "#374151" }, { name: "Maroon", hex: "#7F1D1D" },
// ];

// const INIT_SIZES = {
//     XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//     L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//     XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//     XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//     "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
// };

// /* ═══════════════════════════════════════════════════════════
//    LIGHTBOX
// ═══════════════════════════════════════════════════════════ */
// const Lightbox = ({ imgs, start, onClose }) => {
//     const [cur, setCur] = useState(start);
//     useEffect(() => {
//         const h = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1)); if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1)); };
//         window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
//     }, [imgs.length, onClose]);
//     return (
//         <div className="lb-ov" onClick={onClose}>
//             <div className="lb" onClick={e => e.stopPropagation()}>
//                 <button className="lb-close" onClick={onClose}>✕</button>
//                 <img className="lb-img" src={URL.createObjectURL(imgs[cur])} alt="" />
//                 {cur > 0 && <button className="lb-arr lb-prev" onClick={() => setCur(p => p - 1)}>‹</button>}
//                 {cur < imgs.length - 1 && <button className="lb-arr lb-next" onClick={() => setCur(p => p + 1)}>›</button>}
//                 {imgs.length > 1 && <div className="lb-thumbs">{imgs.map((img, i) => <img key={i} className={`lb-thumb ${i === cur ? 'on' : ''}`} src={URL.createObjectURL(img)} alt="" onClick={() => setCur(i)} />)}</div>}
//                 <div className="lb-info">{cur + 1} / {imgs.length} &nbsp;·&nbsp; {imgs[cur].name} &nbsp;·&nbsp; ← → to navigate · Esc to close</div>
//             </div>
//         </div>
//     );
// };

// /* ═══════════════════════════════════════════════════════════
//    PRODUCT PREVIEW MODAL
// ═══════════════════════════════════════════════════════════ */
// const Preview = ({ data, onClose }) => {
//     const [aImg, setAImg] = useState(0);
//     const [aColor, setAColor] = useState(0);
//     const [aSize, setASize] = useState(null);
//     const imgs = data.images.filter(Boolean);
//     const disc = data.discountPrice && data.price && +data.discountPrice < +data.price ? Math.round((1 - data.discountPrice / data.price) * 100) : null;
//     return (
//         <div className="pm-ov" onClick={onClose}>
//             <div className="pm" onClick={e => e.stopPropagation()}>
//                 <div className="pm-head">
//                     <h2>Product Preview</h2>
//                     <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
//                         <span className="ap-badge ap-bb">👁 Customer View</span>
//                         <button className="ap-btn ap-btn-ghost ap-btn-sm" onClick={onClose}>✕ Close</button>
//                     </div>
//                 </div>
//                 <div className="pm-body">
//                     <div className="pm-layout">
//                         <div>
//                             <div className="pm-main-img">
//                                 {imgs[aImg] ? <img src={URL.createObjectURL(imgs[aImg])} alt="" /> : <div style={{ textAlign: 'center', color: '#ccc' }}><div style={{ fontSize: 40 }}>🖼️</div><div style={{ fontSize: 12, marginTop: 6 }}>No image uploaded</div></div>}
//                             </div>
//                             <div className="pm-thumbs">{imgs.map((img, i) => <img key={i} className={`pm-thumb ${i === aImg ? 'on' : ''}`} src={URL.createObjectURL(img)} alt="" onClick={() => setAImg(i)} />)}</div>
//                         </div>
//                         <div>
//                             {data.bestseller && <div className="pm-best">⭐ BESTSELLER</div>}
//                             <div className="pm-cats"><span className="pm-cat">{data.category}</span><span className="pm-cat">{data.subCategory}</span></div>
//                             <h1 className="pm-name">{data.name || 'Product Name'}</h1>
//                             <p className="pm-desc">{data.description || 'Short description will appear here.'}</p>
//                             <div className="pm-prices">
//                                 <span className="pm-price">₹{data.discountPrice || data.price || '—'}</span>
//                                 {disc && <><span className="pm-old">₹{data.price}</span><span className="pm-disc">{disc}% off</span></>}
//                             </div>
//                             {data.colors.length > 0 && <div style={{ marginBottom: 14 }}>
//                                 <div className="pm-sec-title">Color — <strong>{data.colors[aColor]?.name}</strong></div>
//                                 <div className="pm-colors">{data.colors.map((c, i) => <div key={i} title={c.name} className={`pm-swatch ${i === aColor ? 'on' : ''}`} style={{ backgroundColor: c.hex }} onClick={() => setAColor(i)} />)}</div>
//                             </div>}
//                             {data.sizes.length > 0 && <div style={{ marginBottom: 8 }}>
//                                 <div className="pm-sec-title">Size{aSize !== null && ` — ${data.sizes[aSize]?.size}`}</div>
//                                 <div className="pm-sizes">{data.sizes.map((s, i) => <button key={i} type="button" className={`pm-sz-btn ${i === aSize ? 'on' : ''}`} onClick={() => setASize(i)}>{s.size}</button>)}</div>
//                                 {aSize !== null && <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>Stock: {data.sizes[aSize]?.stock || 0} units</p>}
//                             </div>}
//                             <button className="pm-add-btn" type="button">🛒 Add to Cart</button>
//                             <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', marginTop: 8 }}>Preview only — buttons are not functional</p>
//                         </div>
//                     </div>
//                     {data.detailedDescription && <div style={{ marginTop: 24 }}>
//                         <div className="ap-div" />
//                         <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: 18, marginBottom: 12 }}>Product Details</h3>
//                         <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink2)' }} dangerouslySetInnerHTML={{ __html: data.detailedDescription }} />
//                     </div>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// /* ═══════════════════════════════════════════════════════════
//    MAIN
// ═══════════════════════════════════════════════════════════ */
// const Add = ({ token }) => {
//     const [images, setImages] = useState([null, null, null, null, null]);
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestseller, setBestseller] = useState(false);
//     const [detailedDescription, setDetailedDescription] = useState("");
//     const [discountPrice, setDiscountPrice] = useState("");
//     const [colors, setColors] = useState([]);
//     const [newColorName, setNewColorName] = useState("");
//     const [newColorHex, setNewColorHex] = useState("#000000");
//     const [colorMode, setColorMode] = useState("both");
//     const [sizeType, setSizeType] = useState("standard");
//     const [stdSizes, setStdSizes] = useState(INIT_SIZES);
//     const [enabledSizes, setEnabledSizes] = useState([]);
//     const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState("");
//     const [niMult, setNiMult] = useState(1.0);
//     const [niStock, setNiStock] = useState(0);
//     const [niPrice, setNiPrice] = useState("");
//     const [niCustom, setNiCustom] = useState(false);
//     const [lbOpen, setLbOpen] = useState(false);
//     const [lbIdx, setLbIdx] = useState(0);
//     const [pvOpen, setPvOpen] = useState(false);
//     const [dragging, setDragging] = useState(false);
//     const [valErrs, setValErrs] = useState([]);
//     const [draftSaved, setDraftSaved] = useState(false);
//     const [submitting, setSubmitting] = useState(false);

//     // Progress
//     const progress = Math.min(100, [
//         name.trim() ? 15 : 0, description.trim() ? 10 : 0, price ? 15 : 0,
//         images.some(Boolean) ? 15 : 0, colors.length > 0 ? 15 : 0,
//         (sizeType === 'standard' ? enabledSizes.length > 0 : inchSizes.length > 0) ? 15 : 0,
//         detailedDescription ? 8 : 0, (category && subCategory) ? 7 : 0,
//     ].reduce((a, b) => a + b, 0));

//     // Auto-save draft
//     useEffect(() => {
//         if (!name && !description && !price) return;
//         const t = setTimeout(() => {
//             try { localStorage.setItem('ap_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription })); setDraftSaved(true); setTimeout(() => setDraftSaved(false), 2500); } catch { }
//         }, 2000);
//         return () => clearTimeout(t);
//     }, [name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription]);

//     useEffect(() => {
//         try {
//             const d = JSON.parse(localStorage.getItem('ap_draft') || '{}');
//             if (d.name) { setName(d.name || ''); setDescription(d.description || ''); setPrice(d.price || ''); setDiscountPrice(d.discountPrice || ''); setCategory(d.category || 'Men'); setSubCategory(d.subCategory || 'Topwear'); setBestseller(d.bestseller || false); setDetailedDescription(d.detailedDescription || ''); toast.info('💾 Draft restored', { autoClose: 2500 }); }
//         } catch { }
//     }, []);

//     const setImg = (i, f) => { const n = [...images]; n[i] = f; setImages(n); };
//     const delImg = (i) => { const n = [...images]; n[i] = null; setImages(n); };

//     const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
//     const onDragLeave = () => setDragging(false);
//     const onDrop = useCallback((e) => {
//         e.preventDefault(); setDragging(false);
//         const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
//         let added = 0;
//         files.forEach(file => {
//             const slot = images.findIndex(img => !img);
//             if (slot !== -1) { setImg(slot, file); added++; }
//         });
//         if (added) toast.success(`${added} image(s) added!`);
//     }, [images]);

//     // Color handlers
//     const addColor = () => {
//         if (colorMode === "both" && !newColorName.trim()) return toast.error("Enter color name");
//         if (colorMode === "nameOnly" && !newColorName.trim()) return toast.error("Enter color name");
//         const c = { name: newColorName.trim() || `Color-${colors.length + 1}`, hex: newColorHex || '#808080' };
//         if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color name exists");
//         setColors([...colors, c]); setNewColorName(""); setNewColorHex("#000000"); toast.success(`${c.name} added!`);
//     };
//     const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = (p) => { if (!colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())) { setColors([...colors, p]); } else toast.info(`${p.name} already added`); };

//     // Size handlers
//     const toggleSize = (k) => setEnabledSizes(p => p.includes(k) ? p.filter(s => s !== k) : [...p, k]);
//     const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v } }));
//     const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
//     const calcP = (d) => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;

//     const addInch = () => {
//         if (!niSize.trim()) return toast.error("Enter inch size");
//         if (inchSizes.some(s => s.size === niSize)) return toast.error("Size exists");
//         setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
//         setNiSize(""); setNiMult(1.0); setNiStock(0); setNiPrice(""); setNiCustom(false); toast.success("Size added!");
//     };
//     const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === 'stock') u[i].stock = parseInt(v) || 0; else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };

//     const formatSizes = () => {
//         if (sizeType === "standard") return enabledSizes.map(k => {
//             const d = stdSizes[k]; const obj = { size: k, priceMultiplier: d.multiplier, stock: d.stock };
//             if (d.useCustomPrice) { const v = d.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${k}`); throw new Error("bad"); } obj.customPrice = +v; obj.useCustomPrice = true; } return obj;
//         });
//         return inchSizes.map(s => {
//             const obj = { size: s.size, priceMultiplier: s.multiplier, stock: s.stock };
//             if (s.useCustomPrice) { const v = s.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${s.size}`); throw new Error("bad"); } obj.customPrice = +v; obj.useCustomPrice = true; } return obj;
//         });
//     };

//     const validate = () => {
//         const e = [];
//         if (!name.trim()) e.push("Product name is required");
//         if (!description.trim()) e.push("Short description is required");
//         if (!price || isNaN(+price) || +price <= 0) e.push("Valid base price is required");
//         if (!images.some(Boolean)) e.push("At least one product image is required");
//         if (colors.length === 0) e.push("Add at least one color variant");
//         if (sizeType === 'standard' && enabledSizes.length === 0) e.push("Select at least one size");
//         if (sizeType === 'inch' && inchSizes.length === 0) e.push("Add at least one inch size");
//         return e;
//     };

//     const onSubmit = async (e) => {
//         e?.preventDefault();
//         const errs = validate();
//         if (errs.length) { setValErrs(errs); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
//         setValErrs([]); setSubmitting(true);
//         try {
//             const fd = new FormData();
//             fd.append("name", name.trim()); fd.append("description", description.trim()); fd.append("detailedDescription", detailedDescription);
//             fd.append("price", price); fd.append("discountPrice", discountPrice || ""); fd.append("category", category);
//             fd.append("subCategory", subCategory); fd.append("bestseller", bestseller);
//             fd.append("sizes", JSON.stringify(formatSizes())); fd.append("color", JSON.stringify(colors));
//             images.forEach((img, i) => { if (img) fd.append(`image${i + 1}`, img); });
//             const res = await axios.post(`${backendUrl}/api/product/add`, fd, { headers: { token } });
//             if (res.data.success) {
//                 toast.success("🎉 Product published!"); try { localStorage.removeItem('ap_draft'); } catch { }
//                 setName(""); setDescription(""); setDetailedDescription(""); setPrice(""); setDiscountPrice("");
//                 setColors([]); setEnabledSizes([]); setStdSizes(INIT_SIZES); setInchSizes([]);
//                 setImages([null, null, null, null, null]); setSizeType("standard"); setCategory("Men"); setSubCategory("Topwear"); setBestseller(false);
//             } else toast.error(res.data.message || "Failed");
//         } catch (err) { if (err.message !== "bad") toast.error(err.response?.data?.message || "Something went wrong"); }
//         finally { setSubmitting(false); }
//     };

//     const clearAll = () => {
//         try { localStorage.removeItem('ap_draft'); } catch { }
//         setName(""); setDescription(""); setDetailedDescription(""); setPrice(""); setDiscountPrice("");
//         setColors([]); setEnabledSizes([]); setStdSizes(INIT_SIZES); setInchSizes([]);
//         setImages([null, null, null, null, null]); setSizeType("standard"); setCategory("Men"); setSubCategory("Topwear"); setBestseller(false);
//         setValErrs([]); toast.success("Form cleared");
//     };

//     const uploaded = images.filter(Boolean);
//     const discount = discountPrice && price && +discountPrice < +price ? Math.round((1 - discountPrice / price) * 100) : null;

//     const previewData = {
//         name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription, colors, images,
//         sizes: sizeType === 'standard' ? enabledSizes.map(k => ({ size: k, stock: stdSizes[k].stock })) : inchSizes
//     };

//     return (
//         <div className="ap">
//             <style>{CSS}</style>

//             {/* ── TOPBAR ── */}
//             <div className="ap-topbar">
//                 <div className="ap-topbar-left">
//                     <h1>Add Product</h1>
//                     <div className="ap-topbar-div" />
//                     <span>{progress}% complete</span>
//                 </div>
//                 <div className="ap-topbar-right">
//                     <button type="button" className="ap-btn ap-btn-ghost ap-btn-sm" onClick={clearAll}>🗑 Clear</button>
//                     <button type="button" className="ap-btn ap-btn-ghost ap-btn-sm" onClick={() => setPvOpen(true)}>👁 Preview</button>
//                     <button type="button" className="ap-btn ap-btn-primary" onClick={onSubmit} disabled={submitting}>
//                         {submitting ? '⏳ Publishing…' : '🚀 Publish'}
//                     </button>
//                 </div>
//             </div>

//             {/* ── STEPS ── */}
//             <div className="ap-steps">
//                 {[['1', 'Basic Info', name && description], ['2', 'Pricing', price], ['3', 'Media', uploaded.length > 0], ['4', 'Colors', colors.length > 0], ['5', 'Sizes', sizeType === 'standard' ? enabledSizes.length > 0 : inchSizes.length > 0]].map(([n, l, done], i) => (
//                     <React.Fragment key={n}>
//                         <div className={`ap-step ${done ? 'done' : 'active'}`}>
//                             <div className="ap-step-num">{done ? '✓' : n}</div>
//                             <span className="ap-step-lbl">{l}</span>
//                         </div>
//                         {i < 4 && <span className="ap-step-arr">›</span>}
//                     </React.Fragment>
//                 ))}
//             </div>

//             <form onSubmit={onSubmit}>
//                 <div className="ap-body">
//                     {/* ═════ LEFT ═════ */}
//                     <div>
//                         {valErrs.length > 0 && (
//                             <div className="ap-verrs">
//                                 <h4>⚠️ Please fix before publishing:</h4>
//                                 <ul>{valErrs.map((e, i) => <li key={i}>{e}</li>)}</ul>
//                             </div>
//                         )}
//                         {draftSaved && <div className="ap-draft"><span>💾 Draft auto-saved</span><span style={{ fontSize: 11 }}>{new Date().toLocaleTimeString()}</span></div>}

//                         {/* BASIC INFO */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">📝</div>
//                                     <div><div className="ap-card-title">Basic Information</div><div className="ap-card-sub">Name, description & category</div></div>
//                                 </div>
//                             </div>

//                             <div className="ap-field">
//                                 <label className="ap-label">Product Name <span className="req">*</span></label>
//                                 <div className="ap-iw">
//                                     <input className={`ap-input ${name.length > 90 ? 'err' : ''}`} type="text" maxLength={100} placeholder="e.g. Classic Oxford Cotton Shirt" value={name} onChange={e => setName(e.target.value)} />
//                                     <span className={`ap-cc ${name.length > 80 ? 'w' : ''} ${name.length > 90 ? 'o' : ''}`}>{name.length}/100</span>
//                                 </div>
//                             </div>

//                             <div className="ap-field">
//                                 <label className="ap-label">Short Description <span className="req">*</span></label>
//                                 <div className="ap-iw">
//                                     <textarea className={`ap-input ap-ta ${description.length > 280 ? 'err' : ''}`} maxLength={300} placeholder="Compelling product description for listings…" value={description} onChange={e => setDescription(e.target.value)} />
//                                     <span className={`ap-cc ${description.length > 240 ? 'w' : ''} ${description.length > 280 ? 'o' : ''}`} style={{ bottom: 14 }}>{description.length}/300</span>
//                                 </div>
//                             </div>

//                             <div className="ap-r3">
//                                 <div className="ap-field">
//                                     <label className="ap-label">Category</label>
//                                     <select className="ap-input ap-sel" value={category} onChange={e => { setCategory(e.target.value); setSubCategory(e.target.value === 'Others' ? 'Cushion Cover' : 'Topwear'); }}>
//                                         <option>Men</option><option>Women</option><option>Others</option>
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">Sub Category</label>
//                                     <select className="ap-input ap-sel" value={subCategory} onChange={e => setSubCategory(e.target.value)}>
//                                         {category === "Others" ? <><option>Cushion Cover</option><option>Aprons</option><option>Desk Mat</option><option>Pillow</option><option>Chair Cover</option></> : <><option>Topwear</option><option>Bottomwear</option><option>Winterwear</option></>}
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">SKU / Code</label>
//                                     <input className="ap-input" type="text" placeholder="Auto-generated" />
//                                     <div className="ap-hint">Optional</div>
//                                 </div>
//                             </div>

//                             <div className="ap-div" />
//                             <div className="ap-field" style={{ margin: 0 }}>
//                                 <label className="ap-label">Detailed Description</label>
//                                 <div className="ap-ql"><ReactQuill theme="snow" value={detailedDescription} onChange={setDetailedDescription} /></div>
//                                 <div className="ap-hint">Shown on product detail page. Add specs, care instructions, materials.</div>
//                             </div>
//                         </div>

//                         {/* MEDIA */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">🖼️</div>
//                                     <div><div className="ap-card-title">Product Images</div><div className="ap-card-sub">{uploaded.length}/5 uploaded</div></div>
//                                 </div>
//                                 {uploaded.length > 0 && (
//                                     <button type="button" className="ap-btn ap-btn-ghost ap-btn-sm" onClick={() => { setLbIdx(0); setLbOpen(true); }}>🔍 View All</button>
//                                 )}
//                             </div>

//                             <div className={`ap-dropzone ${dragging ? 'drag' : ''}`} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
//                                 <div style={{ fontSize: 32, marginBottom: 8 }}>📸</div>
//                                 <h3>Drag & drop images here</h3>
//                                 <p>or click a slot below · PNG, JPG, WEBP · Recommended 800×800px</p>
//                             </div>

//                             <div className="ap-imgs">
//                                 {images.map((img, i) => (
//                                     <div key={i} className={`ap-slot ${img ? 'has' : ''} ${img && i === 0 ? 'pri' : ''}`}>
//                                         {img ? (
//                                             <>
//                                                 <img className="ap-slot-img" src={URL.createObjectURL(img)} alt="" />
//                                                 {i === 0 && <span className="ap-pri-badge">MAIN</span>}
//                                                 <span className="ap-slot-num">{i + 1}</span>
//                                                 <div className="ap-slot-ov">
//                                                     <button type="button" className="ap-slot-ovbtn" onClick={e => { e.preventDefault(); setLbIdx(uploaded.indexOf(img)); setLbOpen(true); }}>🔍 View</button>
//                                                     <button type="button" className="ap-slot-ovbtn del" onClick={e => { e.preventDefault(); delImg(i); }}>🗑 Remove</button>
//                                                 </div>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <span className="ap-slot-plus">+</span>
//                                                 <span className="ap-slot-lbl">Image {i + 1}</span>
//                                                 <label htmlFor={`img-${i}`} style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}>
//                                                     <input id={`img-${i}`} type="file" accept="image/*" hidden onChange={e => { if (e.target.files[0]) setImg(i, e.target.files[0]); e.target.value = ''; }} />
//                                                 </label>
//                                             </>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="ap-hint" style={{ marginTop: 10 }}>First image = primary thumbnail. Hover over image to view full size or remove. Drag & drop multiple images at once.</div>
//                         </div>

//                         {/* COLORS */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">🎨</div>
//                                     <div>
//                                         <div className="ap-card-title">Color Variants {colors.length > 0 && <span style={{ marginLeft: 7, background: 'var(--ink)', color: '#fff', borderRadius: 10, padding: '1px 8px', fontSize: 11, fontWeight: 700 }}>{colors.length}</span>}</div>
//                                         <div className="ap-card-sub">Add available colors for this product</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div style={{ marginBottom: 14 }}>
//                                 <label className="ap-label">Input Mode</label>
//                                 <div className="ap-rg">
//                                     {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
//                                         <label key={v} className={`ap-rp ${colorMode === v ? 'on' : ''}`}><input type="radio" value={v} checked={colorMode === v} onChange={() => setColorMode(v)} />{l}</label>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="ap-cadd">
//                                 {(colorMode === "both" || colorMode === "nameOnly") && <div className="ap-field" style={{ margin: 0 }}>
//                                     <label className="ap-label">Name</label>
//                                     <input className="ap-input" style={{ width: 165 }} type="text" placeholder="e.g., Navy Blue" value={newColorName} onChange={e => setNewColorName(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} />
//                                 </div>}
//                                 {(colorMode === "both" || colorMode === "hexOnly") && <div className="ap-field" style={{ margin: 0 }}>
//                                     <label className="ap-label">Color</label>
//                                     <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
//                                         <input type="color" value={newColorHex} onChange={e => setNewColorHex(e.target.value)} style={{ width: 42, height: 36, borderRadius: 7, border: '1.5px solid var(--border)', cursor: 'pointer', padding: 2 }} />
//                                         <input className="ap-input" style={{ width: 95 }} type="text" value={newColorHex} onChange={e => setNewColorHex(e.target.value)} />
//                                     </div>
//                                 </div>}
//                                 <button type="button" onClick={addColor} className="ap-btn ap-btn-primary ap-btn-sm" style={{ alignSelf: 'flex-end' }}>+ Add Color</button>
//                             </div>

//                             {colors.length === 0 ? (
//                                 <div className="ap-empty"><div className="ap-empty-ic">🎨</div>No colors yet. Add above or use quick presets below.</div>
//                             ) : (
//                                 <div className="ap-clist">
//                                     {colors.map((c, i) => (
//                                         <div key={i} className="ap-citem">
//                                             <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} className="ap-cswatch" />
//                                             <div className="ap-ctexts">
//                                                 <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Name" />
//                                                 <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" />
//                                             </div>
//                                             <div style={{ width: 22, height: 22, borderRadius: '50%', background: c.hex, border: '1.5px solid rgba(0,0,0,0.1)', flexShrink: 0 }} />
//                                             <button type="button" onClick={() => rmColor(c.name)} className="ap-btn ap-btn-danger ap-btn-xs">✕</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             <div className="ap-div" />
//                             <label className="ap-label">Quick Presets</label>
//                             <div className="ap-presets">
//                                 {PRESETS.map((p, i) => {
//                                     const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
//                                     return (
//                                         <button key={i} type="button" className={`ap-ppill ${added ? 'on' : ''}`} onClick={() => addPreset(p)}>
//                                             <div className="ap-pdot" style={{ backgroundColor: p.hex }} />
//                                             {p.name}{added ? ' ✓' : ''}
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* SIZES */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">📐</div>
//                                     <div><div className="ap-card-title">Sizes & Inventory</div><div className="ap-card-sub">Sizes, stock & price per size</div></div>
//                                 </div>
//                             </div>

//                             <div style={{ marginBottom: 18 }}>
//                                 <label className="ap-label">Size System</label>
//                                 <div className="ap-rg">
//                                     <label className={`ap-rp ${sizeType === 'standard' ? 'on' : ''}`}><input type="radio" value="standard" checked={sizeType === 'standard'} onChange={() => setSizeType('standard')} />👕 Standard (XS–3XL)</label>
//                                     <label className={`ap-rp ${sizeType === 'inch' ? 'on' : ''}`}><input type="radio" value="inch" checked={sizeType === 'inch'} onChange={() => setSizeType('inch')} />📏 Inch-Based</label>
//                                 </div>
//                             </div>

//                             {sizeType === "standard" && <>
//                                 <div className="ap-szgrid">
//                                     {Object.keys(stdSizes).map(k => {
//                                         const on = enabledSizes.includes(k); const d = stdSizes[k];
//                                         return (
//                                             <div key={k} className={`ap-szcard ${on ? 'on' : ''}`} onClick={() => !on && toggleSize(k)}>
//                                                 <div className="ap-szh">
//                                                     <input type="checkbox" checked={on} onChange={() => toggleSize(k)} onClick={e => e.stopPropagation()} style={{ accentColor: 'var(--ink)', cursor: 'pointer', width: 15, height: 15 }} />
//                                                     <span className="ap-szbadge">{k}</span>
//                                                     {on && d.stock > 0 && <span className="ap-badge ap-bg" style={{ fontSize: 9, padding: '1px 5px' }}>{d.stock}×</span>}
//                                                 </div>
//                                                 {on && <div onClick={e => e.stopPropagation()}>
//                                                     <div className="ap-ckr"><input type="checkbox" id={`cp-${k}`} checked={d.useCustomPrice} onChange={() => toggleCP(k)} /><label htmlFor={`cp-${k}`}>Custom Price</label></div>
//                                                     {d.useCustomPrice ? (
//                                                         <div className="ap-szf"><label>Price (₹)</label><input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, 'customPrice', e.target.value)} placeholder="Price" /><div className="ap-ptag">₹ {d.customPrice || '—'}</div></div>
//                                                     ) : (
//                                                         <div className="ap-szf"><label>Multiplier ×{d.multiplier}</label><input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, 'multiplier', e.target.value)} /><div className="ap-ptag">₹ {calcP(d).toFixed(2)}</div></div>
//                                                     )}
//                                                     <div className="ap-szf"><label>Stock</label><input type="number" min="0" value={d.stock} onChange={e => setSzF(k, 'stock', e.target.value)} /></div>
//                                                 </div>}
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                                 {enabledSizes.length > 0 && <div style={{ marginTop: 14 }}><label className="ap-label">Selected</label><div className="ap-szsum">{enabledSizes.map(k => <span key={k} className="ap-szpill">{k} · ₹{calcP(stdSizes[k]).toFixed(2)} · {stdSizes[k].stock}×</span>)}</div></div>}
//                             </>}

//                             {sizeType === "inch" && <>
//                                 <div className="ap-cadd">
//                                     <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Size</label><input className="ap-input" style={{ width: 105 }} type="text" placeholder="e.g. 14x14" value={niSize} onChange={e => setNiSize(e.target.value)} /></div>
//                                     <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Stock</label><input className="ap-input" style={{ width: 70 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} /></div>
//                                     <div className="ap-ckr" style={{ alignSelf: 'flex-end', paddingBottom: 2 }}><input type="checkbox" id="ni-cp" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} /><label htmlFor="ni-cp">Custom Price</label></div>
//                                     {niCustom ? <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Price (₹)</label><input className="ap-input" style={{ width: 95 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></div> : <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Multiplier</label><input className="ap-input" style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></div>}
//                                     <button type="button" onClick={addInch} className="ap-btn ap-btn-primary ap-btn-sm" style={{ alignSelf: 'flex-end' }}>+ Add</button>
//                                 </div>
//                                 {inchSizes.length === 0 ? <div className="ap-empty"><div className="ap-empty-ic">📏</div>No sizes yet</div> : (
//                                     <div className="ap-icards">
//                                         {inchSizes.map((s, i) => (
//                                             <div key={i} className="ap-icard">
//                                                 <div className="ap-ich"><span className="ap-il">{s.size}"</span><button type="button" onClick={() => rmInch(s.size)} className="ap-btn ap-btn-danger ap-btn-xs">✕</button></div>
//                                                 <div className="ap-ckr"><input type="checkbox" id={`ic-${i}`} checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} /><label htmlFor={`ic-${i}`}>Custom Price</label></div>
//                                                 {s.useCustomPrice ? <div className="ap-szf"><label>Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} /><div className="ap-ptag">₹ {s.customPrice || '—'}</div></div> : <div className="ap-szf"><label>Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} /><div className="ap-ptag">₹ {(+price || 0) * s.multiplier > 0 ? ((+price || 0) * s.multiplier).toFixed(2) : '—'}</div></div>}
//                                                 <div className="ap-szf"><label>Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} /></div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </>}
//                         </div>
//                     </div>

//                     {/* ═════ SIDEBAR ═════ */}
//                     <div>
//                         {/* Publish */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">🚀</div>
//                                 <div><div className="ap-card-title">Publish</div><div className="ap-card-sub">Make product live on store</div></div>
//                             </div>
//                             <div className="ap-plbl">Completion: <strong>{progress}%</strong></div>
//                             <div className="ap-pbtrack"><div className="ap-pbfill" style={{ width: `${progress}%` }} /></div>
//                             <div style={{ marginTop: 14 }}>
//                                 <div className="ap-trow" onClick={() => setBestseller(p => !p)}>
//                                     <span className="ap-tlbl">⭐ Mark as Bestseller</span>
//                                     <div className={`ap-tsw ${bestseller ? 'on' : ''}`} />
//                                 </div>
//                             </div>
//                             <button type="button" className="ap-btn ap-btn-ghost" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }} onClick={() => setPvOpen(true)}>👁 Preview Product Page</button>
//                             <button type="submit" className="ap-btn ap-btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>{submitting ? '⏳ Publishing…' : '🚀 Publish Now'}</button>
//                         </div>

//                         {/* Pricing */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">💰</div>
//                                 <div><div className="ap-card-title">Pricing</div></div>
//                             </div>
//                             <div className="ap-field">
//                                 <label className="ap-label">Base Price (₹) <span className="req">*</span></label>
//                                 <input className="ap-input" type="number" placeholder="0.00" value={price} onChange={e => setPrice(e.target.value)} />
//                             </div>
//                             <div className="ap-field" style={{ marginBottom: 0 }}>
//                                 <label className="ap-label">Sale Price (₹)</label>
//                                 <input className="ap-input" type="number" placeholder="0.00" value={discountPrice} onChange={e => setDiscountPrice(e.target.value)} />
//                             </div>
//                             {discount && <div style={{ marginTop: 10, padding: '8px 12px', background: 'var(--green-bg)', border: '1px solid #86efac', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 <span style={{ fontSize: 12.5, color: 'var(--green)', fontWeight: 600 }}>💸 Discount active</span>
//                                 <span className="ap-badge ap-bg">{discount}% off</span>
//                             </div>}
//                         </div>

//                         {/* Summary */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">📊</div>
//                                 <div><div className="ap-card-title">Summary</div><div className="ap-card-sub">Real-time overview</div></div>
//                             </div>
//                             {[
//                                 ["Name", name || <span style={{ color: '#ccc', fontStyle: 'italic' }}>Not set</span>],
//                                 ["Category", `${category} › ${subCategory}`],
//                                 ["Base Price", price ? `₹${price}` : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Sale Price", discountPrice ? `₹${discountPrice}` : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Colors", colors.length > 0 ? <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'flex-end' }}>{colors.map((c, i) => <div key={i} title={c.name} style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, border: '1px solid rgba(0,0,0,0.1)' }} />)}</div> : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Sizes", sizeType === 'standard' ? (enabledSizes.length ? enabledSizes.join(', ') : <span style={{ color: '#ccc' }}>None</span>) : (inchSizes.length ? inchSizes.map(s => s.size).join(', ') : <span style={{ color: '#ccc' }}>None</span>)],
//                                 ["Images", <span className={`ap-badge ${uploaded.length > 0 ? 'ap-bg' : 'ap-ba'}`}>{uploaded.length}/5 uploaded</span>],
//                                 ["Bestseller", bestseller ? <span className="ap-badge ap-bg">⭐ Yes</span> : <span className="ap-badge ap-ba">No</span>],
//                             ].map(([k, v], i) => (
//                                 <div key={i} className="ap-sr"><span className="ap-sk">{k}</span><span className="ap-sv">{v}</span></div>
//                             ))}
//                         </div>

//                         {/* Quick Actions */}
//                         <div className="ap-sb">
//                             <div style={{ marginBottom: 12 }}><div className="ap-card-title">⚡ Quick Actions</div></div>
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
//                                 {[
//                                     ["🎨 Add 4 basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added!`); }],
//                                     ["👕 Select S / M / L / XL", () => { setEnabledSizes(['S', 'M', 'L', 'XL']); toast.success('S/M/L/XL selected!'); }],
//                                     ["✅ Select all sizes", () => { setEnabledSizes(Object.keys(stdSizes)); toast.success('All sizes selected!'); }],
//                                     ["🗑 Clear all sizes", () => { setEnabledSizes([]); toast.info('Sizes cleared'); }],
//                                     ["🗑 Clear all colors", () => { setColors([]); toast.info('Colors cleared'); }],
//                                 ].map(([label, action], i) => (
//                                     <button key={i} type="button" className="ap-btn ap-btn-ghost ap-btn-sm" style={{ width: '100%', justifyContent: 'flex-start' }} onClick={action}>{label}</button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Tips */}
//                         <div className="ap-sb" style={{ background: 'var(--blue-bg)', border: '1px solid #bfdbfe' }}>
//                             <div style={{ marginBottom: 10 }}><div className="ap-card-title" style={{ color: 'var(--blue)' }}>💡 Admin Tips</div></div>
//                             <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.5, color: 'var(--blue)', lineHeight: 1.8 }}>
//                                 <li>Drag & drop multiple images at once</li>
//                                 <li>Hover image → View full size or remove</li>
//                                 <li>Click image slot to upload</li>
//                                 <li>First image = main product thumbnail</li>
//                                 <li>Draft auto-saves every 2 seconds</li>
//                                 <li>Use Preview to see customer view</li>
//                                 <li>Press Enter after color name to add</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//             {lbOpen && uploaded.length > 0 && <Lightbox imgs={uploaded} start={Math.min(lbIdx, uploaded.length - 1)} onClose={() => setLbOpen(false)} />}
//             {pvOpen && <Preview data={previewData} onClose={() => setPvOpen(false)} />}
//         </div>
//     );
// };

// export default Add;




// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { assets } from '../../assets/assets';
// import { backendUrl } from '../../App';

// /* ═══════════════════════════════════════════════════════════
//    STYLES
// ═══════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,500&display=swap');

// :root {
//   --ink: #0f0f0f;
//   --ink2: #3a3a3a;
//   --muted: #888;
//   --border: #e3e3dd;
//   --surface: #fafaf8;
//   --surface2: #f4f4f0;
//   --white: #ffffff;
//   --green: #16a34a;
//   --green-bg: #f0fdf4;
//   --red: #dc2626;
//   --red-bg: #fef2f2;
//   --blue: #2563eb;
//   --blue-bg: #eff6ff;
//   --amber: #d97706;
//   --amber-bg: #fffbeb;
//   --radius: 12px;
//   --radius-sm: 8px;
//   --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
//   --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
// }

// .ap * { box-sizing: border-box; }
// .ap { font-family:'Outfit',sans-serif; background:var(--surface); min-height:100vh; color:var(--ink); }

// /* TOP NAV */
// .ap-topbar { background:var(--white); border-bottom:1px solid var(--border); padding:0 28px; height:60px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; }
// .ap-topbar-left { display:flex; align-items:center; gap:12px; }
// .ap-topbar-left h1 { font-family:'Playfair Display',serif; font-size:20px; font-weight:600; margin:0; }
// .ap-topbar-left span { font-size:12px; color:var(--muted); }
// .ap-topbar-div { width:1px; height:20px; background:var(--border); }
// .ap-topbar-right { display:flex; align-items:center; gap:8px; }

// /* BUTTONS */
// .ap-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:var(--radius-sm); font-size:13.5px; font-weight:600; font-family:'Outfit',sans-serif; cursor:pointer; transition:all 0.15s; border:none; white-space:nowrap; }
// .ap-btn:disabled { opacity:0.6; cursor:not-allowed; }
// .ap-btn-primary { background:var(--ink); color:#fff; }
// .ap-btn-primary:hover:not(:disabled) { background:#2a2a2a; transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,0.2); }
// .ap-btn-ghost { background:transparent; color:var(--ink2); border:1.5px solid var(--border); }
// .ap-btn-ghost:hover { background:var(--surface2); border-color:#ccc; }
// .ap-btn-danger { background:var(--red-bg); color:var(--red); border:1.5px solid #fca5a5; }
// .ap-btn-danger:hover { background:#fee2e2; }
// .ap-btn-amber { background:var(--amber-bg); color:var(--amber); border:1.5px solid #fcd34d; }
// .ap-btn-amber:hover { background:#fef3c7; }
// .ap-btn-sm { padding:6px 12px; font-size:12.5px; }
// .ap-btn-xs { padding:4px 9px; font-size:11.5px; }

// /* STEPS */
// .ap-steps { background:var(--white); border-bottom:1px solid var(--border); padding:0 28px; display:flex; align-items:center; overflow-x:auto; }
// .ap-step { display:flex; align-items:center; gap:8px; padding:13px 18px 13px 0; opacity:0.4; transition:opacity 0.2s; white-space:nowrap; flex-shrink:0; }
// .ap-step.done,.ap-step.active { opacity:1; }
// .ap-step-num { width:26px; height:26px; border-radius:50%; background:var(--surface2); border:2px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:11.5px; font-weight:700; color:var(--muted); flex-shrink:0; }
// .ap-step.active .ap-step-num { background:var(--ink); border-color:var(--ink); color:#fff; }
// .ap-step.done .ap-step-num { background:var(--green); border-color:var(--green); color:#fff; }
// .ap-step-lbl { font-size:13px; font-weight:500; }
// .ap-step.active .ap-step-lbl { font-weight:700; color:var(--ink); }
// .ap-step-arr { color:var(--border); margin-right:18px; font-size:14px; }

// /* LAYOUT */
// .ap-body { display:grid; grid-template-columns:1fr 320px; gap:20px; padding:24px 28px 60px; max-width:1400px; align-items:start; }
// @media(max-width:960px){ .ap-body { grid-template-columns:1fr; padding:16px; } }

// /* CARDS */
// .ap-card { background:var(--white); border:1px solid var(--border); border-radius:var(--radius); padding:24px; margin-bottom:18px; box-shadow:var(--shadow); }
// .ap-card-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--surface2); }
// .ap-card-head-l { display:flex; align-items:center; gap:10px; }
// .ap-card-icon { width:36px; height:36px; border-radius:9px; background:var(--surface2); display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
// .ap-card-title { font-size:14px; font-weight:700; color:var(--ink); }
// .ap-card-sub { font-size:11.5px; color:var(--muted); margin-top:2px; }

// /* FIELDS */
// .ap-field { margin-bottom:16px; }
// .ap-field:last-child { margin-bottom:0; }
// .ap-label { display:flex; align-items:center; gap:4px; font-size:11.5px; font-weight:600; color:var(--muted); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:7px; }
// .req { color:var(--red); font-size:13px; }
// .ap-input,.ap-ta,.ap-sel { width:100%; border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:10px 13px; font-size:14px; font-family:'Outfit',sans-serif; color:var(--ink); background:var(--surface); transition:border-color 0.15s,background 0.15s,box-shadow 0.15s; outline:none; }
// .ap-input:focus,.ap-ta:focus,.ap-sel:focus { border-color:var(--ink); background:var(--white); box-shadow:0 0 0 3px rgba(0,0,0,0.05); }
// .ap-input.err { border-color:var(--red); background:var(--red-bg); }
// .ap-ta { resize:vertical; min-height:90px; }
// .ap-sel { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; padding-right:36px; cursor:pointer; }
// .ap-hint { font-size:11.5px; color:var(--muted); margin-top:5px; }
// .ap-iw { position:relative; }
// .ap-cc { position:absolute; right:10px; bottom:9px; font-size:10.5px; color:var(--muted); pointer-events:none; }
// .ap-cc.w { color:var(--amber); } .ap-cc.o { color:var(--red); }
// .ap-r2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
// .ap-r3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
// @media(max-width:600px){ .ap-r2,.ap-r3 { grid-template-columns:1fr; } }

// /* DIVIDER */
// .ap-div { height:1px; background:var(--surface2); margin:18px 0; }

// /* ── FIXED DRAG & DROP ZONE ── */
// .ap-dz-wrap {
//   position:relative;
//   border:2px dashed var(--border);
//   border-radius:var(--radius);
//   padding:32px 20px;
//   text-align:center;
//   background:var(--surface);
//   margin-bottom:14px;
//   transition:all 0.2s ease;
//   cursor:pointer;
//   user-select:none;
// }
// .ap-dz-wrap.drag {
//   border-color:var(--ink);
//   background:var(--surface2);
//   transform:scale(1.01);
//   box-shadow:0 0 0 4px rgba(15,15,15,0.06);
// }
// .ap-dz-wrap:hover { border-color:#999; }
// .ap-dz-icon { font-size:36px; display:block; pointer-events:none; }
// .ap-dz-title { font-size:14px; font-weight:600; margin:8px 0 4px; pointer-events:none; }
// .ap-dz-sub { font-size:12px; color:var(--muted); margin:0; pointer-events:none; }
// /* Hidden file input covers entire drop zone for click-to-upload */
// .ap-dz-file { position:absolute; inset:0; width:100%; height:100%; opacity:0; cursor:pointer; font-size:0; }

// /* IMAGE SLOTS */
// .ap-imgs { display:grid; grid-template-columns:repeat(5,1fr); gap:10px; }
// @media(max-width:560px){ .ap-imgs { grid-template-columns:repeat(3,1fr); } }
// .ap-slot { position:relative; aspect-ratio:1; border-radius:var(--radius-sm); overflow:hidden; background:var(--surface2); border:1.5px dashed var(--border); display:flex; flex-direction:column; align-items:center; justify-content:center; transition:all 0.18s; }
// .ap-slot.empty { cursor:pointer; }
// .ap-slot.empty:hover { border-color:var(--ink); background:var(--surface); }
// .ap-slot.has { border-style:solid; border-color:transparent; background:#000; }
// .ap-slot.pri { box-shadow:0 0 0 2.5px var(--ink); }
// .ap-slot-img { width:100%; height:100%; object-fit:cover; transition:opacity 0.18s; display:block; }
// .ap-slot.has:hover .ap-slot-img { opacity:0.55; }
// .ap-slot-ov { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px; opacity:0; transition:opacity 0.18s; }
// .ap-slot.has:hover .ap-slot-ov { opacity:1; }
// .ap-slot-ovbtn { background:rgba(255,255,255,0.93); border:none; border-radius:6px; padding:5px 11px; font-size:11px; font-family:'Outfit',sans-serif; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:4px; transition:background 0.12s; pointer-events:all; }
// .ap-slot-ovbtn:hover { background:#fff; }
// .ap-slot-ovbtn.del { color:var(--red); }
// .ap-pri-badge { position:absolute; top:6px; left:6px; background:var(--ink); color:#fff; border-radius:4px; padding:2px 7px; font-size:9px; font-weight:700; letter-spacing:0.5px; pointer-events:none; }
// .ap-slot-num { position:absolute; top:6px; right:6px; background:rgba(0,0,0,0.45); color:#fff; border-radius:4px; padding:2px 6px; font-size:10px; font-weight:600; pointer-events:none; }
// .ap-slot-plus { font-size:20px; color:#ccc; pointer-events:none; }
// .ap-slot-lbl { font-size:10px; color:#bbb; margin-top:3px; pointer-events:none; }
// /* Each slot's individual file input */
// .ap-slot-input { position:absolute; inset:0; width:100%; height:100%; opacity:0; cursor:pointer; font-size:0; }

// /* LIGHTBOX */
// .lb-ov { position:fixed; inset:0; background:rgba(0,0,0,0.9); z-index:9999; display:flex; align-items:center; justify-content:center; animation:fadeIn 0.2s ease; backdrop-filter:blur(4px); }
// .lb { position:relative; display:flex; flex-direction:column; align-items:center; gap:14px; max-width:90vw; }
// .lb-img { max-width:80vw; max-height:74vh; border-radius:12px; object-fit:contain; box-shadow:var(--shadow-lg); }
// .lb-close { position:absolute; top:-14px; right:-14px; width:34px; height:34px; border-radius:50%; background:#fff; border:none; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; font-weight:700; color:var(--ink); box-shadow:0 2px 8px rgba(0,0,0,0.2); transition:transform 0.15s; }
// .lb-close:hover { transform:rotate(90deg); }
// .lb-thumbs { display:flex; gap:8px; }
// .lb-thumb { width:52px; height:52px; border-radius:7px; object-fit:cover; cursor:pointer; border:2px solid transparent; opacity:0.55; transition:all 0.15s; }
// .lb-thumb.on { border-color:#fff; opacity:1; }
// .lb-info { color:rgba(255,255,255,0.6); font-size:12px; text-align:center; }
// .lb-arr { position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.15); border:none; border-radius:50%; width:42px; height:42px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:20px; color:#fff; transition:background 0.15s; }
// .lb-arr:hover { background:rgba(255,255,255,0.3); }
// .lb-prev { left:-58px; } .lb-next { right:-58px; }

// /* ── DRAFT SAVED PAGE (Amazon-style) ── */
// .dp-wrap { position:fixed; inset:0; background:var(--surface); z-index:500; display:flex; align-items:center; justify-content:center; padding:20px; animation:fadeIn 0.3s ease; overflow-y:auto; }
// .dp-card { background:var(--white); border:1px solid var(--border); border-radius:20px; padding:48px 40px; max-width:500px; width:100%; text-align:center; box-shadow:var(--shadow-lg); animation:slideUp 0.3s ease; }
// .dp-icon { font-size:60px; margin-bottom:16px; display:block; }
// .dp-card h2 { font-family:'Playfair Display',serif; font-size:26px; font-weight:600; margin:0 0 10px; }
// .dp-card > p { font-size:14px; color:var(--muted); line-height:1.65; margin:0 0 28px; }
// .dp-checklist { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-sm); padding:16px 18px; text-align:left; margin-bottom:28px; }
// .dp-checklist h4 { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:var(--muted); margin:0 0 12px; }
// .dp-check-item { display:flex; align-items:center; gap:10px; padding:6px 0; font-size:13px; color:var(--ink2); border-bottom:1px solid var(--border); }
// .dp-check-item:last-child { border-bottom:none; }
// .dp-check-item.done { color:var(--green); }
// .dp-check-dot { width:20px; height:20px; border-radius:50%; background:var(--surface2); border:1.5px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:10px; flex-shrink:0; }
// .dp-check-item.done .dp-check-dot { background:var(--green); border-color:var(--green); color:#fff; }
// .dp-check-lbl { flex:1; font-weight:500; }
// .dp-check-status { font-size:11px; font-weight:700; color:var(--muted); }
// .dp-check-item.done .dp-check-status { color:var(--green); }
// .dp-progress { margin-bottom:20px; }
// .dp-progress-lbl { display:flex; justify-content:space-between; font-size:12px; font-weight:600; color:var(--muted); margin-bottom:6px; }
// .dp-progress-lbl strong { color:var(--ink); }
// .dp-progress-track { background:var(--surface2); border-radius:6px; height:8px; overflow:hidden; }
// .dp-progress-fill { height:100%; background:var(--ink); border-radius:6px; transition:width 0.6s ease; }
// .dp-btns { display:flex; flex-direction:column; gap:10px; }
// .dp-saved-at { font-size:11.5px; color:var(--muted); margin-top:16px; }

// /* SIZE VALIDATION */
// .ap-sz-err { border:1.5px solid var(--red); border-radius:var(--radius-sm); padding:11px 14px; background:var(--red-bg); display:flex; align-items:center; gap:8px; margin-bottom:14px; font-size:12.5px; color:var(--red); font-weight:600; animation:fadeIn 0.2s ease; }

// /* COLORS */
// .ap-clist { display:flex; flex-direction:column; gap:8px; margin-bottom:14px; }
// .ap-citem { display:flex; align-items:center; gap:10px; padding:10px 13px; border:1.5px solid var(--border); border-radius:var(--radius-sm); background:var(--white); transition:border-color 0.15s; }
// .ap-citem:hover { border-color:#ccc; }
// .ap-cswatch { width:34px; height:34px; border-radius:7px; border:1.5px solid var(--border); cursor:pointer; flex-shrink:0; }
// .ap-ctexts { flex:1; display:flex; flex-direction:column; gap:2px; }
// .ap-ctexts input { border:none; outline:none; background:transparent; font-family:'Outfit',sans-serif; color:var(--ink); padding:2px 4px; border-radius:4px; }
// .ap-ctexts input:first-child { font-size:13.5px; font-weight:500; }
// .ap-ctexts input:last-child { font-size:11.5px; color:var(--muted); }
// .ap-ctexts input:hover,.ap-ctexts input:focus { background:var(--surface2); }
// .ap-presets { display:flex; flex-wrap:wrap; gap:6px; }
// .ap-ppill { display:flex; align-items:center; gap:6px; padding:5px 11px; border:1.5px solid var(--border); border-radius:20px; background:var(--white); font-size:12px; font-weight:500; cursor:pointer; transition:all 0.15s; color:var(--ink2); font-family:'Outfit',sans-serif; }
// .ap-ppill:hover { border-color:var(--ink); background:var(--surface2); }
// .ap-ppill.on { border-color:var(--green); background:var(--green-bg); color:var(--green); }
// .ap-pdot { width:13px; height:13px; border-radius:50%; border:1px solid rgba(0,0,0,0.1); flex-shrink:0; }
// .ap-cadd { display:flex; flex-wrap:wrap; gap:10px; align-items:flex-end; padding:14px; background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius-sm); margin-bottom:14px; }

// /* RADIO PILLS */
// .ap-rg { display:flex; gap:7px; flex-wrap:wrap; }
// .ap-rp { display:flex; align-items:center; gap:6px; padding:6px 13px; border:1.5px solid var(--border); border-radius:20px; cursor:pointer; font-size:12.5px; font-weight:500; color:var(--ink2); background:var(--white); transition:all 0.15s; user-select:none; font-family:'Outfit',sans-serif; }
// .ap-rp input { display:none; }
// .ap-rp.on { border-color:var(--ink); background:var(--ink); color:#fff; }

// /* SIZES */
// .ap-szgrid { display:grid; grid-template-columns:repeat(auto-fill,minmax(155px,1fr)); gap:10px; }
// .ap-szcard { border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:13px; background:var(--white); cursor:pointer; transition:all 0.15s; }
// .ap-szcard:hover { border-color:#bbb; }
// .ap-szcard.on { border-color:var(--ink); background:var(--surface); }
// .ap-szcard.sz-err-highlight { border-color:var(--red) !important; background:var(--red-bg) !important; animation:shake 0.4s ease; }
// .ap-szh { display:flex; align-items:center; gap:8px; margin-bottom:10px; }
// .ap-szbadge { display:inline-flex; align-items:center; justify-content:center; min-width:36px; height:28px; border-radius:6px; background:var(--surface2); font-size:12px; font-weight:800; padding:0 8px; }
// .ap-szcard.on .ap-szbadge { background:var(--ink); color:#fff; }
// .ap-szf { margin-bottom:7px; }
// .ap-szf label { font-size:10.5px; text-transform:uppercase; color:var(--muted); font-weight:600; letter-spacing:0.3px; display:block; margin-bottom:4px; }
// .ap-szf input { width:100%; border:1.5px solid var(--border); border-radius:6px; padding:6px 9px; font-size:13px; font-family:'Outfit',sans-serif; outline:none; background:var(--white); }
// .ap-szf input:focus { border-color:var(--ink); }
// .ap-ptag { background:var(--green-bg); color:var(--green); border-radius:5px; padding:3px 8px; font-size:11px; font-weight:700; display:inline-block; margin-top:4px; }
// .ap-ckr { display:flex; align-items:center; gap:6px; margin-bottom:8px; cursor:pointer; }
// .ap-ckr input { accent-color:var(--ink); cursor:pointer; }
// .ap-ckr label { font-size:12px; font-weight:500; cursor:pointer; }
// .ap-szsum { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
// .ap-szpill { display:inline-flex; align-items:center; gap:4px; padding:5px 11px; background:var(--ink); color:#fff; border-radius:20px; font-size:11.5px; font-weight:600; }
// .ap-icards { display:flex; flex-wrap:wrap; gap:10px; }
// .ap-icard { border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:13px; background:var(--white); width:155px; }
// .ap-ich { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
// .ap-il { font-size:13px; font-weight:800; }

// /* price-info box */
// .ap-price-info { background:var(--blue-bg); border:1px solid #bfdbfe; border-radius:var(--radius-sm); padding:10px 14px; font-size:12.5px; color:var(--blue); font-weight:500; margin-top:8px; display:flex; align-items:flex-start; gap:7px; line-height:1.5; }

// /* SIDEBAR */
// .ap-sb { background:var(--white); border:1px solid var(--border); border-radius:var(--radius); padding:20px; margin-bottom:16px; box-shadow:var(--shadow); }
// .ap-sr { display:flex; justify-content:space-between; align-items:flex-start; padding:8px 0; border-bottom:1px solid var(--surface2); font-size:12.5px; gap:10px; }
// .ap-sr:last-child { border-bottom:none; }
// .ap-sk { color:var(--muted); font-weight:500; flex-shrink:0; }
// .ap-sv { color:var(--ink); font-weight:600; text-align:right; word-break:break-word; }
// .ap-trow { display:flex; align-items:center; justify-content:space-between; padding:11px 13px; background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius-sm); margin-bottom:10px; cursor:pointer; transition:background 0.15s; }
// .ap-trow:hover { background:var(--surface2); }
// .ap-tlbl { font-size:13px; font-weight:500; }
// .ap-tsw { width:38px; height:21px; background:#ddd; border-radius:10.5px; position:relative; transition:background 0.2s; flex-shrink:0; }
// .ap-tsw.on { background:var(--ink); }
// .ap-tsw::after { content:''; position:absolute; top:3px; left:3px; width:15px; height:15px; border-radius:50%; background:#fff; transition:transform 0.2s; }
// .ap-tsw.on::after { transform:translateX(17px); }

// /* PROGRESS */
// .ap-pbtrack { background:var(--surface2); border-radius:4px; height:6px; overflow:hidden; }
// .ap-pbfill { height:100%; background:var(--ink); border-radius:4px; transition:width 0.4s ease; }
// .ap-plbl { font-size:11.5px; color:var(--muted); margin-bottom:6px; font-weight:500; }

// /* BADGE */
// .ap-badge { display:inline-flex; align-items:center; gap:3px; padding:2px 8px; border-radius:5px; font-size:11px; font-weight:700; }
// .ap-bg { background:var(--green-bg); color:var(--green); }
// .ap-ba { background:var(--amber-bg); color:var(--amber); }
// .ap-bb { background:var(--blue-bg); color:var(--blue); }
// .ap-br { background:var(--red-bg); color:var(--red); }

// /* VALIDATION */
// .ap-verrs { background:var(--red-bg); border:1.5px solid #fca5a5; border-radius:var(--radius-sm); padding:14px 16px; margin-bottom:18px; }
// .ap-verrs h4 { color:var(--red); font-size:13px; font-weight:700; margin:0 0 8px; }
// .ap-verrs ul { margin:0; padding-left:18px; }
// .ap-verrs li { color:var(--red); font-size:12.5px; margin-bottom:3px; }

// /* DRAFT NOTIF */
// .ap-draft { background:var(--amber-bg); border:1px solid #fcd34d; border-radius:var(--radius-sm); padding:9px 14px; display:flex; align-items:center; justify-content:space-between; font-size:12.5px; color:var(--amber); font-weight:500; margin-bottom:14px; }

// /* EMPTY */
// .ap-empty { text-align:center; padding:22px 16px; border:1.5px dashed var(--border); border-radius:var(--radius-sm); background:var(--surface); color:var(--muted); font-size:13px; }
// .ap-empty-ic { font-size:28px; margin-bottom:6px; }

// /* QUILL */
// .ap-ql .ql-container { border-radius:0 0 var(--radius-sm) var(--radius-sm); border:1.5px solid var(--border); border-top:0; font-family:'Outfit',sans-serif; font-size:14px; }
// .ap-ql .ql-toolbar { border-radius:var(--radius-sm) var(--radius-sm) 0 0; border:1.5px solid var(--border); background:var(--surface); }
// .ap-ql .ql-editor { min-height:160px; }

// /* ANIMATIONS */
// @keyframes fadeIn { from{opacity:0}to{opacity:1} }
// @keyframes slideUp { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }
// @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
// `;

// /* ═══════════════════════════════════════════════════════════
//    CONSTANTS
// ═══════════════════════════════════════════════════════════ */
// const PRESETS = [
//     { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" }, { name: "Red", hex: "#EF4444" },
//     { name: "Navy Blue", hex: "#1E3A5F" }, { name: "Royal Blue", hex: "#3B82F6" }, { name: "Forest Green", hex: "#166534" },
//     { name: "Olive", hex: "#4D7C0F" }, { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
//     { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" }, { name: "Brown", hex: "#92400E" },
//     { name: "Cream", hex: "#FFFDD0" }, { name: "Gray", hex: "#9CA3AF" }, { name: "Charcoal", hex: "#374151" }, { name: "Maroon", hex: "#7F1D1D" },
// ];

// const INIT_SIZES = {
//     XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//     L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//     XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//     XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//     "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
// };

// /* ═══════════════════════════════════════════════════════════
//    LIGHTBOX
// ═══════════════════════════════════════════════════════════ */
// const Lightbox = ({ imgs, start, onClose }) => {
//     const [cur, setCur] = useState(start);
//     useEffect(() => {
//         const h = (e) => {
//             if (e.key === 'Escape') onClose();
//             if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1));
//             if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1));
//         };
//         window.addEventListener('keydown', h);
//         return () => window.removeEventListener('keydown', h);
//     }, [imgs.length, onClose]);

//     return (
//         <div className="lb-ov" onClick={onClose}>
//             <div className="lb" onClick={e => e.stopPropagation()}>
//                 <button className="lb-close" onClick={onClose}>✕</button>
//                 <img className="lb-img" src={URL.createObjectURL(imgs[cur])} alt="" />
//                 {cur > 0 && <button className="lb-arr lb-prev" onClick={() => setCur(p => p - 1)}>‹</button>}
//                 {cur < imgs.length - 1 && <button className="lb-arr lb-next" onClick={() => setCur(p => p + 1)}>›</button>}
//                 {imgs.length > 1 && (
//                     <div className="lb-thumbs">
//                         {imgs.map((img, i) => (
//                             <img key={i} className={`lb-thumb ${i === cur ? 'on' : ''}`}
//                                 src={URL.createObjectURL(img)} alt="" onClick={() => setCur(i)} />
//                         ))}
//                     </div>
//                 )}
//                 <div className="lb-info">{cur + 1} / {imgs.length} &nbsp;·&nbsp; {imgs[cur].name} &nbsp;·&nbsp; ← → to navigate · Esc to close</div>
//             </div>
//         </div>
//     );
// };

// /* ═══════════════════════════════════════════════════════════
//    DRAFT SAVED PAGE  (Amazon-style redirect)
// ═══════════════════════════════════════════════════════════ */
// const DraftPage = ({ formState, onContinue, onPublishNow, onNewProduct }) => {
//     const { name, description, price, detailedDescription, hasImages, hasColors, hasSizes } = formState;

//     const steps = [
//         { label: "Basic Info", done: !!(name?.trim() && description?.trim()), detail: name?.trim() ? `"${name.slice(0, 30)}${name.length > 30 ? '…' : ''}"` : "Required" },
//         { label: "Pricing", done: !!price, detail: price ? `₹${price}` : "Required" },
//         { label: "Product Images", done: !!hasImages, detail: hasImages ? "Images uploaded" : "Add images" },
//         { label: "Color Variants", done: !!hasColors, detail: hasColors ? "Colors added" : "Add at least 1" },
//         { label: "Sizes & Inventory", done: !!hasSizes, detail: hasSizes ? "Sizes configured" : "⚠ Required" },
//         { label: "Detailed Description", done: !!detailedDescription, detail: detailedDescription ? "Added" : "Optional" },
//     ];

//     const doneCount = steps.filter(s => s.done).length;
//     const pct = Math.round((doneCount / steps.length) * 100);
//     const savedAt = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

//     const canPublish = steps.slice(0, 5).filter(s => !s.done).length === 0; // first 5 required

//     return (
//         <div className="dp-wrap">
//             <div className="dp-card">
//                 <span className="dp-icon">📋</span>
//                 <h2>Draft Saved!</h2>
//                 <p>
//                     Your product listing has been saved as a draft and can be continued anytime.
//                     Complete all required steps before publishing.
//                 </p>

//                 {/* Progress */}
//                 <div className="dp-progress">
//                     <div className="dp-progress-lbl">
//                         <span>Listing Progress</span>
//                         <strong>{doneCount}/{steps.length} steps &nbsp;·&nbsp; {pct}%</strong>
//                     </div>
//                     <div className="dp-progress-track">
//                         <div className="dp-progress-fill" style={{ width: `${pct}%` }} />
//                     </div>
//                 </div>

//                 {/* Checklist */}
//                 <div className="dp-checklist">
//                     <h4>What's done / what's left</h4>
//                     {steps.map((s, i) => (
//                         <div key={i} className={`dp-check-item ${s.done ? 'done' : ''}`}>
//                             <div className="dp-check-dot">{s.done ? '✓' : ''}</div>
//                             <span className="dp-check-lbl">{s.label}</span>
//                             <span className="dp-check-status">{s.done ? '✓ Done' : s.detail}</span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Actions */}
//                 <div className="dp-btns">
//                     <button className="ap-btn ap-btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: 14 }} onClick={onContinue}>
//                         ✏️ Continue Editing
//                     </button>
//                     {canPublish && (
//                         <button
//                             className="ap-btn ap-btn-ghost"
//                             style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--green)', color: 'var(--green)' }}
//                             onClick={onPublishNow}
//                         >
//                             🚀 Publish Now
//                         </button>
//                     )}
//                     <button className="ap-btn ap-btn-ghost" style={{ width: '100%', justifyContent: 'center' }} onClick={onNewProduct}>
//                         ➕ Add Another Product
//                     </button>
//                 </div>

//                 <div className="dp-saved-at">💾 Saved at {savedAt}</div>
//             </div>
//         </div>
//     );
// };


// /* ═══════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════════════════════ */
// const Add = ({ token }) => {
//     /* ── state ── */
//     const [images, setImages] = useState([null, null, null, null, null]);
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");          // base / reference price
//     const [discountPrice, setDiscPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestseller, setBestseller] = useState(false);
//     const [detailedDescription, setDD] = useState("");
//     const [colors, setColors] = useState([]);
//     const [newColorName, setNewCName] = useState("");
//     const [newColorHex, setNewCHex] = useState("#000000");
//     const [colorMode, setColorMode] = useState("both");
//     const [sizeType, setSizeType] = useState("standard");
//     const [stdSizes, setStdSizes] = useState(INIT_SIZES);
//     const [enabledSizes, setEnabledSizes] = useState([]);
//     const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState("");
//     const [niMult, setNiMult] = useState(1.0);
//     const [niStock, setNiStock] = useState(0);
//     const [niPrice, setNiPrice] = useState("");
//     const [niCustom, setNiCustom] = useState(false);
//     const [lbOpen, setLbOpen] = useState(false);
//     const [lbIdx, setLbIdx] = useState(0);
//     const [dragging, setDragging] = useState(false);
//     const [valErrs, setValErrs] = useState([]);
//     const [draftNotif, setDraftNotif] = useState(false);
//     const [submitting, setSubmitting] = useState(false);
//     const [draftSaving, setDraftSaving] = useState(false);
//     const [showDraftPage, setShowDraftPage] = useState(false);
//     const [sizeErr, setSizeErr] = useState(false);
//     const [sizeCardShake, setSizeCardShake] = useState(false);

//     const dzRef = useRef(null);           // drop zone ref
//     const sizeRef = useRef(null);         // scroll target when size error

//     /* ── derived ── */
//     const uploaded = images.filter(Boolean);
//     const hasSizes = sizeType === 'standard' ? enabledSizes.length > 0 : inchSizes.length > 0;
//     const discount = discountPrice && price && +discountPrice < +price
//         ? Math.round((1 - discountPrice / price) * 100) : null;

//     /* ── progress ── */
//     const progress = Math.min(100, [
//         name.trim() ? 15 : 0,
//         description.trim() ? 10 : 0,
//         price ? 15 : 0,
//         uploaded.length > 0 ? 15 : 0,
//         colors.length > 0 ? 15 : 0,
//         hasSizes ? 15 : 0,
//         detailedDescription ? 8 : 0,
//         (category && subCategory) ? 7 : 0,
//     ].reduce((a, b) => a + b, 0));

//     /* ── auto-save draft ── */
//     useEffect(() => {
//         if (!name && !description && !price) return;
//         const t = setTimeout(() => {
//             try {
//                 localStorage.setItem('ap_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription }));
//                 setDraftNotif(true);
//                 setTimeout(() => setDraftNotif(false), 2500);
//             } catch { }
//         }, 2000);
//         return () => clearTimeout(t);
//     }, [name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription]);

//     useEffect(() => {
//         try {
//             const d = JSON.parse(localStorage.getItem('ap_draft') || '{}');
//             if (d.name) {
//                 setName(d.name || ''); setDescription(d.description || '');
//                 setPrice(d.price || ''); setDiscPrice(d.discountPrice || '');
//                 setCategory(d.category || 'Men'); setSubCategory(d.subCategory || 'Topwear');
//                 setBestseller(d.bestseller || false); setDD(d.detailedDescription || '');
//                 toast.info('💾 Draft restored', { autoClose: 2500 });
//             }
//         } catch { }
//     }, []);

//     /* ═══════════════════════════════
//        IMAGE HANDLERS — FIXED
//     ═══════════════════════════════ */
//     const setImg = (i, f) => {
//         setImages(prev => { const n = [...prev]; n[i] = f; return n; });
//     };
//     const delImg = (i) => {
//         setImages(prev => { const n = [...prev]; n[i] = null; return n; });
//     };

//     /* ── FIXED drag & drop: use captured ref, stop propagation properly ── */
//     const handleDragEnter = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         setDragging(true);
//     }, []);

//     const handleDragOver = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         e.dataTransfer.dropEffect = 'copy';
//         setDragging(true);
//     }, []);

//     const handleDragLeave = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         // Only clear when leaving the dropzone container entirely
//         if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) {
//             setDragging(false);
//         }
//     }, []);

//     const handleDrop = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         setDragging(false);
//         const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
//         if (!files.length) { toast.error('Only image files allowed'); return; }

//         let added = 0;
//         setImages(prev => {
//             const next = [...prev];
//             for (const file of files) {
//                 const slot = next.findIndex(img => !img);
//                 if (slot === -1) break;
//                 next[slot] = file;
//                 added++;
//             }
//             return next;
//         });
//         // Show toast after state update
//         requestAnimationFrame(() => {
//             if (added > 0) toast.success(`${added} image${added > 1 ? 's' : ''} added!`);
//             else toast.info('All 5 image slots are full');
//         });
//     }, []);

//     /* ═══════════════════════════════
//        COLOR HANDLERS
//     ═══════════════════════════════ */
//     const addColor = () => {
//         if (colorMode !== "hexOnly" && !newColorName.trim()) return toast.error("Enter color name");
//         const c = { name: newColorName.trim() || `Color-${colors.length + 1}`, hex: newColorHex || '#808080' };
//         if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color name already exists");
//         setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added!`);
//     };
//     const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = (p) => {
//         if (!colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())) {
//             setColors([...colors, p]); toast.success(`${p.name} added!`);
//         } else toast.info(`${p.name} already added`);
//     };

//     /* ═══════════════════════════════
//        SIZE HANDLERS
//     ═══════════════════════════════ */
//     const toggleSize = (k) => {
//         setSizeErr(false);
//         setEnabledSizes(p => p.includes(k) ? p.filter(s => s !== k) : [...p, k]);
//     };
//     const setSzF = (k, f, v) => setStdSizes(p => ({
//         ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v }
//     }));
//     const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));

//     // PRICE CALCULATION — uses price state as reference
//     const calcP = (d) => d.useCustomPrice && d.customPrice
//         ? parseFloat(d.customPrice)
//         : parseFloat(price || 0) * d.multiplier;

//     const addInch = () => {
//         if (!niSize.trim()) return toast.error("Enter inch size");
//         if (inchSizes.some(s => s.size === niSize)) return toast.error("Size already exists");
//         setSizeErr(false);
//         setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
//         setNiSize(""); setNiMult(1.0); setNiStock(0); setNiPrice(""); setNiCustom(false);
//         toast.success("Size added!");
//     };
//     const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => {
//         const u = [...inchSizes];
//         if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice;
//         else if (f === 'stock') u[i].stock = parseInt(v) || 0;
//         else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1;
//         else u[i][f] = v;
//         setInchSizes(u);
//     };

//     const formatSizes = () => {
//         if (sizeType === "standard") return enabledSizes.map(k => {
//             const d = stdSizes[k];
//             const obj = { size: k, priceMultiplier: d.multiplier, stock: d.stock };
//             if (d.useCustomPrice) {
//                 const v = d.customPrice?.trim();
//                 if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for size ${k}`); throw new Error("bad"); }
//                 obj.customPrice = +v; obj.useCustomPrice = true;
//             }
//             return obj;
//         });
//         return inchSizes.map(s => {
//             const obj = { size: s.size, priceMultiplier: s.multiplier, stock: s.stock };
//             if (s.useCustomPrice) {
//                 const v = s.customPrice?.trim();
//                 if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for size ${s.size}`); throw new Error("bad"); }
//                 obj.customPrice = +v; obj.useCustomPrice = true;
//             }
//             return obj;
//         });
//     };

//     /* ═══════════════════════════════
//        VALIDATION
//     ═══════════════════════════════ */
//     const validate = (isDraft = false) => {
//         const errs = [];
//         if (!name.trim()) errs.push("Product name is required");
//         if (!description.trim()) errs.push("Short description is required");

//         // SIZE — ALWAYS required even for draft
//         if (!hasSizes) {
//             errs.push("At least one size must be selected (required)");
//             setSizeErr(true);
//             setSizeCardShake(true);
//             setTimeout(() => setSizeCardShake(false), 600);
//             // Scroll to sizes section
//             setTimeout(() => sizeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
//         }

//         if (!isDraft) {
//             // For publish only:
//             if (!price || isNaN(+price) || +price <= 0) errs.push("Base price is required to publish");
//             if (!uploaded.length) errs.push("At least one product image is required");
//             if (!colors.length) errs.push("Add at least one color variant");
//         }

//         return errs;
//     };

//     /* ═══════════════════════════════
//        SAVE AS DRAFT
//     ═══════════════════════════════ */
//     const saveDraft = async () => {
//         const errs = validate(true); // lenient — only name, description, and SIZE required
//         if (errs.length) {
//             setValErrs(errs);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             return;
//         }
//         setValErrs([]);
//         setDraftSaving(true);
//         try {
//             // Save to localStorage
//             const payload = {
//                 name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription,
//                 sizesCount: hasSizes ? (sizeType === 'standard' ? enabledSizes.length : inchSizes.length) : 0,
//                 colorsCount: colors.length, imagesCount: uploaded.length,
//                 savedAt: new Date().toISOString(),
//             };
//             localStorage.setItem('ap_full_draft', JSON.stringify(payload));
//             toast.success('💾 Draft saved!');
//             setShowDraftPage(true); // ← Amazon-style redirect to draft page
//         } catch {
//             toast.error("Failed to save draft");
//         } finally {
//             setDraftSaving(false);
//         }
//     };

//     /* ═══════════════════════════════
//        PUBLISH
//     ═══════════════════════════════ */
//     const onSubmit = async (e) => {
//         e?.preventDefault();
//         const errs = validate(false);
//         if (errs.length) {
//             setValErrs(errs);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             return;
//         }
//         setValErrs([]);
//         setSubmitting(true);
//         try {
//             const fd = new FormData();
//             fd.append("name", name.trim());
//             fd.append("description", description.trim());
//             fd.append("detailedDescription", detailedDescription);
//             fd.append("price", price);
//             fd.append("discountPrice", discountPrice || "");
//             fd.append("category", category);
//             fd.append("subCategory", subCategory);
//             fd.append("bestseller", bestseller);
//             fd.append("sizes", JSON.stringify(formatSizes()));
//             fd.append("color", JSON.stringify(colors));
//             images.forEach((img, i) => { if (img) fd.append(`image${i + 1}`, img); });

//             const res = await axios.post(`${backendUrl}/api/product/add`, fd, { headers: { token } });
//             if (res.data.success) {
//                 toast.success("🎉 Product published!");
//                 try { localStorage.removeItem('ap_draft'); localStorage.removeItem('ap_full_draft'); } catch { }
//                 resetForm();
//             } else toast.error(res.data.message || "Failed to publish");
//         } catch (err) {
//             if (err.message !== "bad") toast.error(err.response?.data?.message || "Something went wrong");
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     const resetForm = () => {
//         setName(""); setDescription(""); setDD(""); setPrice(""); setDiscPrice("");
//         setColors([]); setEnabledSizes([]); setStdSizes(INIT_SIZES); setInchSizes([]);
//         setImages([null, null, null, null, null]); setSizeType("standard");
//         setCategory("Men"); setSubCategory("Topwear"); setBestseller(false);
//         setValErrs([]); setSizeErr(false); setShowDraftPage(false);
//     };

//     const clearAll = () => {
//         resetForm();
//         try { localStorage.removeItem('ap_draft'); } catch { }
//         toast.success("Form cleared");
//     };

//     /* ── Draft page state snapshot ── */
//     const draftFormState = {
//         name, description, price, detailedDescription,
//         hasImages: uploaded.length > 0,
//         hasColors: colors.length > 0,
//         hasSizes,
//     };

//     /* ══════════════════════════════════════════════════════════
//        RENDER — DRAFT SAVED PAGE
//     ══════════════════════════════════════════════════════════ */
//     if (showDraftPage) {
//         return (
//             <div className="ap">
//                 <style>{CSS}</style>
//                 <DraftPage
//                     formState={draftFormState}
//                     onContinue={() => setShowDraftPage(false)}
//                     onPublishNow={() => { setShowDraftPage(false); setTimeout(() => onSubmit(), 100); }}
//                     onNewProduct={() => resetForm()}
//                 />
//             </div>
//         );
//     }

//     /* ══════════════════════════════════════════════════════════
//        RENDER — MAIN FORM
//     ══════════════════════════════════════════════════════════ */
//     return (
//         <div className="ap">
//             <style>{CSS}</style>

//             {/* ── TOPBAR ── */}
//             <div className="ap-topbar">
//                 <div className="ap-topbar-left">
//                     <h1>Add Product</h1>
//                     <div className="ap-topbar-div" />
//                     <span>{progress}% complete</span>
//                 </div>
//                 <div className="ap-topbar-right">
//                     <button type="button" className="ap-btn ap-btn-ghost ap-btn-sm" onClick={clearAll}>🗑 Clear</button>
//                     <button type="button" className="ap-btn ap-btn-amber ap-btn-sm" onClick={saveDraft} disabled={draftSaving}>
//                         {draftSaving ? '⏳ Saving…' : '💾 Save Draft'}
//                     </button>
//                     <button type="button" className="ap-btn ap-btn-primary" onClick={onSubmit} disabled={submitting}>
//                         {submitting ? '⏳ Publishing…' : '🚀 Publish'}
//                     </button>
//                 </div>
//             </div>

//             {/* ── STEPS ── */}
//             <div className="ap-steps">
//                 {[
//                     ['1', 'Basic Info', !!(name && description)],
//                     ['2', 'Pricing', !!price],
//                     ['3', 'Media', uploaded.length > 0],
//                     ['4', 'Colors', colors.length > 0],
//                     ['5', 'Sizes', hasSizes],
//                 ].map(([n, l, done], i) => (
//                     <React.Fragment key={n}>
//                         <div className={`ap-step ${done ? 'done' : 'active'}`}>
//                             <div className="ap-step-num">{done ? '✓' : n}</div>
//                             <span className="ap-step-lbl">{l}</span>
//                         </div>
//                         {i < 4 && <span className="ap-step-arr">›</span>}
//                     </React.Fragment>
//                 ))}
//             </div>

//             <form onSubmit={onSubmit}>
//                 <div className="ap-body">

//                     {/* ═════ LEFT COLUMN ═════ */}
//                     <div>

//                         {/* Validation errors */}
//                         {valErrs.length > 0 && (
//                             <div className="ap-verrs">
//                                 <h4>⚠️ Please fix before continuing:</h4>
//                                 <ul>{valErrs.map((e, i) => <li key={i}>{e}</li>)}</ul>
//                             </div>
//                         )}

//                         {/* Draft auto-saved notification */}
//                         {draftNotif && (
//                             <div className="ap-draft">
//                                 <span>💾 Draft auto-saved</span>
//                                 <span style={{ fontSize: 11 }}>{new Date().toLocaleTimeString()}</span>
//                             </div>
//                         )}

//                         {/* ── BASIC INFO ── */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">📝</div>
//                                     <div><div className="ap-card-title">Basic Information</div><div className="ap-card-sub">Name, description & category</div></div>
//                                 </div>
//                             </div>

//                             <div className="ap-field">
//                                 <label className="ap-label">Product Name <span className="req">*</span></label>
//                                 <div className="ap-iw">
//                                     <input className={`ap-input ${name.length > 90 ? 'err' : ''}`} type="text" maxLength={100}
//                                         placeholder="e.g. Classic Oxford Cotton Shirt" value={name} onChange={e => setName(e.target.value)} />
//                                     <span className={`ap-cc ${name.length > 80 ? 'w' : ''} ${name.length > 90 ? 'o' : ''}`}>{name.length}/100</span>
//                                 </div>
//                             </div>

//                             <div className="ap-field">
//                                 <label className="ap-label">Short Description <span className="req">*</span></label>
//                                 <div className="ap-iw">
//                                     <textarea className={`ap-input ap-ta ${description.length > 280 ? 'err' : ''}`}
//                                         maxLength={300} placeholder="Compelling product description for listings…"
//                                         value={description} onChange={e => setDescription(e.target.value)} />
//                                     <span className={`ap-cc ${description.length > 240 ? 'w' : ''} ${description.length > 280 ? 'o' : ''}`} style={{ bottom: 14 }}>{description.length}/300</span>
//                                 </div>
//                             </div>

//                             <div className="ap-r3">
//                                 <div className="ap-field">
//                                     <label className="ap-label">Category</label>
//                                     <select className="ap-input ap-sel" value={category}
//                                         onChange={e => { setCategory(e.target.value); setSubCategory(e.target.value === 'Others' ? 'Cushion Cover' : 'Topwear'); }}>
//                                         <option>Men</option><option>Women</option><option>Others</option>
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">Sub Category</label>
//                                     <select className="ap-input ap-sel" value={subCategory} onChange={e => setSubCategory(e.target.value)}>
//                                         {category === "Others"
//                                             ? <><option>Cushion Cover</option><option>Aprons</option><option>Desk Mat</option><option>Pillow</option><option>Chair Cover</option></>
//                                             : <><option>Topwear</option><option>Bottomwear</option><option>Winterwear</option></>}
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">SKU / Code</label>
//                                     <input className="ap-input" type="text" placeholder="Auto-generated" />
//                                     <div className="ap-hint">Optional</div>
//                                 </div>
//                             </div>

//                             <div className="ap-div" />
//                             <div className="ap-field" style={{ margin: 0 }}>
//                                 <label className="ap-label">Detailed Description</label>
//                                 <div className="ap-ql"><ReactQuill theme="snow" value={detailedDescription} onChange={setDD} /></div>
//                                 <div className="ap-hint">Shown on product detail page. Add specs, care instructions, materials.</div>
//                             </div>
//                         </div>

//                         {/* ── MEDIA — FIXED DRAG & DROP ── */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">🖼️</div>
//                                     <div>
//                                         <div className="ap-card-title">Product Images</div>
//                                         <div className="ap-card-sub">{uploaded.length}/5 uploaded</div>
//                                     </div>
//                                 </div>
//                                 {uploaded.length > 0 && (
//                                     <button type="button" className="ap-btn ap-btn-ghost ap-btn-sm"
//                                         onClick={() => { setLbIdx(0); setLbOpen(true); }}>🔍 View All</button>
//                                 )}
//                             </div>

//                             {/*
//                 ── FIX: The drop zone has its own ref.
//                    The hidden <input type="file" multiple> on top handles click-to-upload.
//                    Drag events are attached directly to the container div via props (not addEventListener).
//                    e.preventDefault() on dragover is the critical piece that enables drop.
//               ── */}
//                             <div
//                                 ref={dzRef}
//                                 className={`ap-dz-wrap ${dragging ? 'drag' : ''}`}
//                                 onDragEnter={handleDragEnter}
//                                 onDragOver={handleDragOver}
//                                 onDragLeave={handleDragLeave}
//                                 onDrop={handleDrop}
//                             >
//                                 <span className="ap-dz-icon">{dragging ? '📥' : '📸'}</span>
//                                 <div className="ap-dz-title">{dragging ? 'Drop your images here!' : 'Drag & drop images here'}</div>
//                                 <p className="ap-dz-sub">or click below to upload · PNG, JPG, WEBP · Recommended 800×800px</p>
//                                 {/* Click-to-upload via file input ONLY activates when clicking the zone, NOT when dragging */}
//                                 {!dragging && (
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         multiple
//                                         className="ap-dz-file"
//                                         onChange={e => {
//                                             const files = Array.from(e.target.files);
//                                             let added = 0;
//                                             setImages(prev => {
//                                                 const next = [...prev];
//                                                 files.forEach(f => {
//                                                     const slot = next.findIndex(img => !img);
//                                                     if (slot !== -1) { next[slot] = f; added++; }
//                                                 });
//                                                 return next;
//                                             });
//                                             e.target.value = '';
//                                             requestAnimationFrame(() => {
//                                                 if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`);
//                                                 else toast.info('All slots are full');
//                                             });
//                                         }}
//                                     />
//                                 )}
//                             </div>

//                             {/* Image slots — each has its own file input for individual slot upload */}
//                             <div className="ap-imgs">
//                                 {images.map((img, i) => (
//                                     <div key={i} className={`ap-slot ${img ? 'has' : 'empty'} ${img && i === 0 ? 'pri' : ''}`}>
//                                         {img ? (
//                                             <>
//                                                 <img className="ap-slot-img" src={URL.createObjectURL(img)} alt="" />
//                                                 {i === 0 && <span className="ap-pri-badge">MAIN</span>}
//                                                 <span className="ap-slot-num">{i + 1}</span>
//                                                 <div className="ap-slot-ov">
//                                                     <button
//                                                         type="button" className="ap-slot-ovbtn"
//                                                         onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLbIdx(uploaded.indexOf(img)); setLbOpen(true); }}
//                                                     >🔍 View</button>
//                                                     <button
//                                                         type="button" className="ap-slot-ovbtn del"
//                                                         onMouseDown={e => { e.preventDefault(); e.stopPropagation(); delImg(i); }}
//                                                     >🗑 Remove</button>
//                                                 </div>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <span className="ap-slot-plus">+</span>
//                                                 <span className="ap-slot-lbl">Image {i + 1}</span>
//                                                 <input
//                                                     type="file" accept="image/*"
//                                                     className="ap-slot-input"
//                                                     onChange={e => {
//                                                         if (e.target.files[0]) { setImg(i, e.target.files[0]); }
//                                                         e.target.value = '';
//                                                     }}
//                                                 />
//                                             </>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="ap-hint" style={{ marginTop: 10 }}>
//                                 First image = primary thumbnail. Drag & drop onto the zone above, or click individual slots to upload. Hover an image to view or remove.
//                             </div>
//                         </div>

//                         {/* ── COLORS ── */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">🎨</div>
//                                     <div>
//                                         <div className="ap-card-title">
//                                             Color Variants
//                                             {colors.length > 0 && <span style={{ marginLeft: 7, background: 'var(--ink)', color: '#fff', borderRadius: 10, padding: '1px 8px', fontSize: 11, fontWeight: 700 }}>{colors.length}</span>}
//                                         </div>
//                                         <div className="ap-card-sub">Add available colors for this product</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div style={{ marginBottom: 14 }}>
//                                 <label className="ap-label">Input Mode</label>
//                                 <div className="ap-rg">
//                                     {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
//                                         <label key={v} className={`ap-rp ${colorMode === v ? 'on' : ''}`}>
//                                             <input type="radio" value={v} checked={colorMode === v} onChange={() => setColorMode(v)} />{l}
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="ap-cadd">
//                                 {(colorMode === "both" || colorMode === "nameOnly") && (
//                                     <div className="ap-field" style={{ margin: 0 }}>
//                                         <label className="ap-label">Name</label>
//                                         <input className="ap-input" style={{ width: 165 }} type="text" placeholder="e.g., Navy Blue"
//                                             value={newColorName} onChange={e => setNewCName(e.target.value)}
//                                             onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} />
//                                     </div>
//                                 )}
//                                 {(colorMode === "both" || colorMode === "hexOnly") && (
//                                     <div className="ap-field" style={{ margin: 0 }}>
//                                         <label className="ap-label">Color</label>
//                                         <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
//                                             <input type="color" value={newColorHex} onChange={e => setNewCHex(e.target.value)}
//                                                 style={{ width: 42, height: 36, borderRadius: 7, border: '1.5px solid var(--border)', cursor: 'pointer', padding: 2 }} />
//                                             <input className="ap-input" style={{ width: 95 }} type="text" value={newColorHex} onChange={e => setNewCHex(e.target.value)} />
//                                         </div>
//                                     </div>
//                                 )}
//                                 <button type="button" onClick={addColor} className="ap-btn ap-btn-primary ap-btn-sm" style={{ alignSelf: 'flex-end' }}>+ Add Color</button>
//                             </div>

//                             {colors.length === 0 ? (
//                                 <div className="ap-empty"><div className="ap-empty-ic">🎨</div>No colors yet. Add above or use quick presets below.</div>
//                             ) : (
//                                 <div className="ap-clist">
//                                     {colors.map((c, i) => (
//                                         <div key={i} className="ap-citem">
//                                             <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} className="ap-cswatch" />
//                                             <div className="ap-ctexts">
//                                                 <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Name" />
//                                                 <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" />
//                                             </div>
//                                             <div style={{ width: 22, height: 22, borderRadius: '50%', background: c.hex, border: '1.5px solid rgba(0,0,0,0.1)', flexShrink: 0 }} />
//                                             <button type="button" onClick={() => rmColor(c.name)} className="ap-btn ap-btn-danger ap-btn-xs">✕</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             <div className="ap-div" />
//                             <label className="ap-label">Quick Presets</label>
//                             <div className="ap-presets">
//                                 {PRESETS.map((p, i) => {
//                                     const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
//                                     return (
//                                         <button key={i} type="button" className={`ap-ppill ${added ? 'on' : ''}`} onClick={() => addPreset(p)}>
//                                             <div className="ap-pdot" style={{ backgroundColor: p.hex }} />
//                                             {p.name}{added ? ' ✓' : ''}
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* ── SIZES — with validation, ref for scroll, shake on error ── */}
//                         <div className="ap-card" ref={sizeRef}>
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">📐</div>
//                                     <div>
//                                         <div className="ap-card-title">
//                                             Sizes & Inventory
//                                             <span style={{ marginLeft: 7, background: 'var(--red)', color: '#fff', borderRadius: 10, padding: '1px 7px', fontSize: 10, fontWeight: 700, verticalAlign: 'middle' }}>
//                                                 Required
//                                             </span>
//                                         </div>
//                                         <div className="ap-card-sub">Minimum 1 size must be selected to save or publish</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* ── SIZE ERROR BANNER ── */}
//                             {sizeErr && (
//                                 <div className="ap-sz-err">
//                                     ⚠️ Please select at least one size — this is required before saving or publishing.
//                                 </div>
//                             )}

//                             {/* ── BASE / REFERENCE PRICE ── */}
//                             <div className="ap-field" style={{ marginBottom: 18 }}>
//                                 <label className="ap-label">Base Price (₹) <span className="req">*</span></label>
//                                 <input className={`ap-input ${price && (isNaN(+price) || +price <= 0) ? 'err' : ''}`}
//                                     type="number" placeholder="e.g. 499" min="0" step="0.01"
//                                     value={price} onChange={e => setPrice(e.target.value)} />
//                                 <div className="ap-price-info">
//                                     ℹ️ Enter the base price here. Each size can then auto-calculate its price using a multiplier (e.g. M = 1×, XL = 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : '—'}), or you can set a custom price per size by checking "Custom Price" on any size card.
//                                 </div>
//                             </div>

//                             {/* Size type selector */}
//                             <div style={{ marginBottom: 18 }}>
//                                 <label className="ap-label">Size System</label>
//                                 <div className="ap-rg">
//                                     <label className={`ap-rp ${sizeType === 'standard' ? 'on' : ''}`}>
//                                         <input type="radio" value="standard" checked={sizeType === 'standard'} onChange={() => setSizeType('standard')} />👕 Standard (XS–3XL)
//                                     </label>
//                                     <label className={`ap-rp ${sizeType === 'inch' ? 'on' : ''}`}>
//                                         <input type="radio" value="inch" checked={sizeType === 'inch'} onChange={() => setSizeType('inch')} />📏 Inch-Based
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* STANDARD SIZES */}
//                             {sizeType === "standard" && (
//                                 <>
//                                     <div className={`ap-szgrid ${sizeCardShake ? 'sz-err-highlight' : ''}`}>
//                                         {Object.keys(stdSizes).map(k => {
//                                             const on = enabledSizes.includes(k);
//                                             const d = stdSizes[k];
//                                             return (
//                                                 <div key={k} className={`ap-szcard ${on ? 'on' : ''}`} onClick={() => !on && toggleSize(k)}>
//                                                     <div className="ap-szh">
//                                                         <input type="checkbox" checked={on} onChange={() => toggleSize(k)}
//                                                             onClick={e => e.stopPropagation()}
//                                                             style={{ accentColor: 'var(--ink)', cursor: 'pointer', width: 15, height: 15 }} />
//                                                         <span className="ap-szbadge">{k}</span>
//                                                         {on && d.stock > 0 && <span className="ap-badge ap-bg" style={{ fontSize: 9, padding: '1px 5px' }}>{d.stock}×</span>}
//                                                     </div>
//                                                     {on && (
//                                                         <div onClick={e => e.stopPropagation()}>
//                                                             <div className="ap-ckr">
//                                                                 <input type="checkbox" id={`cp-${k}`} checked={d.useCustomPrice} onChange={() => toggleCP(k)} />
//                                                                 <label htmlFor={`cp-${k}`}>Custom Price</label>
//                                                             </div>
//                                                             {d.useCustomPrice ? (
//                                                                 <div className="ap-szf">
//                                                                     <label>Price (₹)</label>
//                                                                     <input type="number" step="0.01" min="0" value={d.customPrice}
//                                                                         onChange={e => setSzF(k, 'customPrice', e.target.value)} placeholder="Price" />
//                                                                     <div className="ap-ptag">₹ {d.customPrice || '—'}</div>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div className="ap-szf">
//                                                                     <label>Multiplier ×{d.multiplier}</label>
//                                                                     <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier}
//                                                                         onChange={e => setSzF(k, 'multiplier', e.target.value)} />
//                                                                     <div className="ap-ptag">₹ {price ? calcP(d).toFixed(2) : '—'}</div>
//                                                                 </div>
//                                                             )}
//                                                             <div className="ap-szf">
//                                                                 <label>Stock</label>
//                                                                 <input type="number" min="0" value={d.stock}
//                                                                     onChange={e => setSzF(k, 'stock', e.target.value)} />
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>

//                                     {enabledSizes.length > 0 && (
//                                         <div style={{ marginTop: 14 }}>
//                                             <label className="ap-label">Selected Sizes</label>
//                                             <div className="ap-szsum">
//                                                 {enabledSizes.map(k => (
//                                                     <span key={k} className="ap-szpill">
//                                                         {k} · ₹{price ? calcP(stdSizes[k]).toFixed(2) : (stdSizes[k].customPrice || '—')} · {stdSizes[k].stock}×
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* Quick-select buttons */}
//                                     <div style={{ marginTop: 12, display: 'flex', gap: 7, flexWrap: 'wrap' }}>
//                                         <button type="button" className="ap-btn ap-btn-ghost ap-btn-xs"
//                                             onClick={() => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); toast.success('S/M/L/XL selected!'); }}>
//                                             Select S/M/L/XL
//                                         </button>
//                                         <button type="button" className="ap-btn ap-btn-ghost ap-btn-xs"
//                                             onClick={() => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); toast.success('All sizes selected!'); }}>
//                                             Select All
//                                         </button>
//                                         <button type="button" className="ap-btn ap-btn-ghost ap-btn-xs"
//                                             onClick={() => setEnabledSizes([])}>
//                                             Clear
//                                         </button>
//                                     </div>
//                                 </>
//                             )}

//                             {/* INCH SIZES */}
//                             {sizeType === "inch" && (
//                                 <>
//                                     <div className="ap-cadd">
//                                         <div className="ap-field" style={{ margin: 0 }}>
//                                             <label className="ap-label">Size Label</label>
//                                             <input className="ap-input" style={{ width: 105 }} type="text" placeholder="e.g. 14x14"
//                                                 value={niSize} onChange={e => setNiSize(e.target.value)} />
//                                         </div>
//                                         <div className="ap-field" style={{ margin: 0 }}>
//                                             <label className="ap-label">Stock</label>
//                                             <input className="ap-input" style={{ width: 70 }} type="number" min="0"
//                                                 value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} />
//                                         </div>
//                                         <div className="ap-ckr" style={{ alignSelf: 'flex-end', paddingBottom: 2 }}>
//                                             <input type="checkbox" id="ni-cp" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} />
//                                             <label htmlFor="ni-cp">Custom Price</label>
//                                         </div>
//                                         {niCustom
//                                             ? <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Price (₹)</label><input className="ap-input" style={{ width: 95 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></div>
//                                             : <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Multiplier</label><input className="ap-input" style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></div>
//                                         }
//                                         <button type="button" onClick={addInch} className="ap-btn ap-btn-primary ap-btn-sm" style={{ alignSelf: 'flex-end' }}>+ Add</button>
//                                     </div>

//                                     {inchSizes.length === 0 ? (
//                                         <div className="ap-empty"><div className="ap-empty-ic">📏</div>No sizes yet — add above</div>
//                                     ) : (
//                                         <div className="ap-icards">
//                                             {inchSizes.map((s, i) => (
//                                                 <div key={i} className="ap-icard">
//                                                     <div className="ap-ich">
//                                                         <span className="ap-il">{s.size}"</span>
//                                                         <button type="button" onClick={() => rmInch(s.size)} className="ap-btn ap-btn-danger ap-btn-xs">✕</button>
//                                                     </div>
//                                                     <div className="ap-ckr"><input type="checkbox" id={`ic-${i}`} checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} /><label htmlFor={`ic-${i}`}>Custom Price</label></div>
//                                                     {s.useCustomPrice
//                                                         ? <div className="ap-szf"><label>Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} /><div className="ap-ptag">₹ {s.customPrice || '—'}</div></div>
//                                                         : <div className="ap-szf"><label>Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} /><div className="ap-ptag">₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : '—'}</div></div>
//                                                     }
//                                                     <div className="ap-szf"><label>Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} /></div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </div>
//                     </div>

//                     {/* ═════ SIDEBAR ═════ */}
//                     <div>

//                         {/* ── SAVE / PUBLISH ── */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">🚀</div>
//                                 <div><div className="ap-card-title">Save & Publish</div><div className="ap-card-sub">Draft saves progress · Publish goes live</div></div>
//                             </div>
//                             <div className="ap-plbl">Completion: <strong>{progress}%</strong></div>
//                             <div className="ap-pbtrack"><div className="ap-pbfill" style={{ width: `${progress}%` }} /></div>
//                             <div style={{ marginTop: 14 }}>
//                                 <div className="ap-trow" onClick={() => setBestseller(p => !p)}>
//                                     <span className="ap-tlbl">⭐ Mark as Bestseller</span>
//                                     <div className={`ap-tsw ${bestseller ? 'on' : ''}`} />
//                                 </div>
//                             </div>

//                             {/* ── SAVE AS DRAFT (replaces "Preview Product Page") ── */}
//                             <button type="button"
//                                 className="ap-btn ap-btn-amber"
//                                 style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}
//                                 onClick={saveDraft} disabled={draftSaving}>
//                                 {draftSaving ? '⏳ Saving…' : '💾 Save as Draft'}
//                             </button>

//                             {/* Publish */}
//                             <button type="submit"
//                                 className="ap-btn ap-btn-primary"
//                                 style={{ width: '100%', justifyContent: 'center' }}
//                                 disabled={submitting}>
//                                 {submitting ? '⏳ Publishing…' : '🚀 Publish Now'}
//                             </button>
//                         </div>

//                         {/* ── PRICING ── */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">💰</div>
//                                 <div><div className="ap-card-title">Pricing</div></div>
//                             </div>
//                             <div className="ap-field">
//                                 <label className="ap-label">Sale / Discount Price (₹)</label>
//                                 <input className="ap-input" type="number" placeholder="0.00"
//                                     value={discountPrice} onChange={e => setDiscPrice(e.target.value)} />
//                                 <div className="ap-hint">Optional — shown as sale price to customers</div>
//                             </div>
//                             {discount && (
//                                 <div style={{ marginTop: 10, padding: '8px 12px', background: 'var(--green-bg)', border: '1px solid #86efac', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                     <span style={{ fontSize: 12.5, color: 'var(--green)', fontWeight: 600 }}>💸 Discount active</span>
//                                     <span className="ap-badge ap-bg">{discount}% off</span>
//                                 </div>
//                             )}
//                         </div>

//                         {/* ── LIVE SUMMARY ── */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">📊</div>
//                                 <div><div className="ap-card-title">Summary</div><div className="ap-card-sub">Real-time overview</div></div>
//                             </div>
//                             {[
//                                 ["Name", name || <span style={{ color: '#ccc', fontStyle: 'italic' }}>Not set</span>],
//                                 ["Category", `${category} › ${subCategory}`],
//                                 ["Base Price", price ? `₹${price}` : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Sale Price", discountPrice ? `₹${discountPrice}` : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Colors", colors.length > 0
//                                     ? <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'flex-end' }}>{colors.map((c, i) => <div key={i} title={c.name} style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, border: '1px solid rgba(0,0,0,0.1)' }} />)}</div>
//                                     : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Sizes", sizeType === 'standard'
//                                     ? (enabledSizes.length
//                                         ? enabledSizes.join(', ')
//                                         : <span style={{ color: 'var(--red)', fontSize: 11, fontWeight: 700 }}>⚠ Required</span>)
//                                     : (inchSizes.length
//                                         ? inchSizes.map(s => s.size).join(', ')
//                                         : <span style={{ color: 'var(--red)', fontSize: 11, fontWeight: 700 }}>⚠ Required</span>)],
//                                 ["Images", <span className={`ap-badge ${uploaded.length > 0 ? 'ap-bg' : 'ap-ba'}`}>{uploaded.length}/5 uploaded</span>],
//                                 ["Bestseller", bestseller ? <span className="ap-badge ap-bg">⭐ Yes</span> : <span className="ap-badge ap-ba">No</span>],
//                             ].map(([k, v], i) => (
//                                 <div key={i} className="ap-sr"><span className="ap-sk">{k}</span><span className="ap-sv">{v}</span></div>
//                             ))}
//                         </div>

//                         {/* ── QUICK ACTIONS ── */}
//                         <div className="ap-sb">
//                             <div style={{ marginBottom: 12 }}><div className="ap-card-title">⚡ Quick Actions</div></div>
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
//                                 {[
//                                     ["🎨 Add 4 basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added!`); }],
//                                     ["👕 Select S / M / L / XL", () => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); setSizeType('standard'); toast.success('S/M/L/XL selected!'); }],
//                                     ["✅ Select all sizes", () => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); setSizeType('standard'); toast.success('All sizes selected!'); }],
//                                     ["🗑 Clear all sizes", () => { setEnabledSizes([]); toast.info('Sizes cleared'); }],
//                                     ["🗑 Clear all colors", () => { setColors([]); toast.info('Colors cleared'); }],
//                                 ].map(([label, action], i) => (
//                                     <button key={i} type="button" className="ap-btn ap-btn-ghost ap-btn-sm"
//                                         style={{ width: '100%', justifyContent: 'flex-start' }} onClick={action}>{label}</button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* ── TIPS ── */}
//                         <div className="ap-sb" style={{ background: 'var(--blue-bg)', border: '1px solid #bfdbfe' }}>
//                             <div style={{ marginBottom: 10 }}><div className="ap-card-title" style={{ color: 'var(--blue)' }}>💡 Admin Tips</div></div>
//                             <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.5, color: 'var(--blue)', lineHeight: 1.8 }}>
//                                 <li>Drag & drop multiple images onto the drop zone</li>
//                                 <li>Click individual slots to upload one by one</li>
//                                 <li>Base price × multiplier = size's selling price</li>
//                                 <li>Enable "Custom Price" per size for fixed pricing</li>
//                                 <li><strong>Sizes are required</strong> — must select at least 1</li>
//                                 <li>Save Draft to continue editing later</li>
//                                 <li>Draft auto-saves basic fields every 2 seconds</li>
//                                 <li>Press Enter after typing a color name to add it</li>
//                             </ul>
//                         </div>
//                     </div>

//                 </div>
//             </form>

//             {/* Lightbox */}
//             {lbOpen && uploaded.length > 0 && (
//                 <Lightbox
//                     imgs={uploaded}
//                     start={Math.min(lbIdx, uploaded.length - 1)}
//                     onClose={() => setLbOpen(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default Add;




// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { assets } from '../../assets/assets';
// import { backendUrl } from '../../App';
// /* ═══════════════════════════════════════════════════════════
//    STYLES
// ═══════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,500&display=swap');
// :root {
//   --ink: #0f0f0f;
//   --ink2: #3a3a3a;
//   --muted: #888;
//   --border: #e3e3dd;
//   --surface: #fafaf8;
//   --surface2: #f4f4f0;
//   --white: #ffffff;
//   --green: #16a34a;
//   --green-bg: #f0fdf4;
//   --red: #dc2626;
//   --red-bg: #fef2f2;
//   --blue: #2563eb;
//   --blue-bg: #eff6ff;
//   --amber: #d97706;
//   --amber-bg: #fffbeb;
//   --radius: 12px;
//   --radius-sm: 8px;
//   --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
//   --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
// }
// .ap * { box-sizing: border-box; }
// .ap { font-family:'Outfit',sans-serif; background:var(--surface); min-height:100vh; color:var(--ink); }
// /* TOP NAV */
// .ap-topbar { background:var(--white); border-bottom:1px solid var(--border); padding:0 28px; height:60px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; }
// .ap-topbar-left { display:flex; align-items:center; gap:12px; }
// .ap-topbar-left h1 { font-family:'Playfair Display',serif; font-size:20px; font-weight:600; margin:0; }
// .ap-topbar-left span { font-size:12px; color:var(--muted); }
// .ap-topbar-div { width:1px; height:20px; background:var(--border); }
// .ap-topbar-right { display:flex; align-items:center; gap:8px; }
// /* BUTTONS */
// .ap-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:var(--radius-sm); font-size:13.5px; font-weight:600; font-family:'Outfit',sans-serif; cursor:pointer; transition:all 0.15s; border:none; white-space:nowrap; }
// .ap-btn:disabled { opacity:0.6; cursor:not-allowed; }
// .ap-btn-primary { background:var(--ink); color:#fff; }
// .ap-btn-primary:hover:not(:disabled) { background:#2a2a2a; transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,0.2); }
// .ap-btn-ghost { background:transparent; color:var(--ink2); border:1.5px solid var(--border); }
// .ap-btn-ghost:hover { background:var(--surface2); border-color:#ccc; }
// .ap-btn-danger { background:var(--red-bg); color:var(--red); border:1.5px solid #fca5a5; }
// .ap-btn-danger:hover { background:#fee2e2; }
// .ap-btn-amber { background:var(--amber-bg); color:var(--amber); border:1.5px solid #fcd34d; }
// .ap-btn-amber:hover { background:#fef3c7; }
// .ap-btn-sm { padding:6px 12px; font-size:12.5px; }
// .ap-btn-xs { padding:4px 9px; font-size:11.5px; }
// /* STEPS */
// .ap-steps { background:var(--white); border-bottom:1px solid var(--border); padding:0 28px; display:flex; align-items:center; overflow-x:auto; }
// .ap-step { display:flex; align-items:center; gap:8px; padding:13px 18px 13px 0; opacity:0.4; transition:opacity 0.2s; white-space:nowrap; flex-shrink:0; }
// .ap-step.done,.ap-step.active { opacity:1; }
// .ap-step-num { width:26px; height:26px; border-radius:50%; background:var(--surface2); border:2px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:11.5px; font-weight:700; color:var(--muted); flex-shrink:0; }
// .ap-step.active .ap-step-num { background:var(--ink); border-color:var(--ink); color:#fff; }
// .ap-step.done .ap-step-num { background:var(--green); border-color:var(--green); color:#fff; }
// .ap-step-lbl { font-size:13px; font-weight:500; }
// .ap-step.active .ap-step-lbl { font-weight:700; color:var(--ink); }
// .ap-step-arr { color:var(--border); margin-right:18px; font-size:14px; }
// /* LAYOUT */
// .ap-body { display:grid; grid-template-columns:1fr 320px; gap:20px; padding:24px 28px 60px; max-width:1400px; align-items:start; }
// @media(max-width:960px){ .ap-body { grid-template-columns:1fr; padding:16px; } }
// /* CARDS */
// .ap-card { background:var(--white); border:1px solid var(--border); border-radius:var(--radius); padding:24px; margin-bottom:18px; box-shadow:var(--shadow); }
// .ap-card-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--surface2); }
// .ap-card-head-l { display:flex; align-items:center; gap:10px; }
// .ap-card-icon { width:36px; height:36px; border-radius:9px; background:var(--surface2); display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
// .ap-card-title { font-size:14px; font-weight:700; color:var(--ink); }
// .ap-card-sub { font-size:11.5px; color:var(--muted); margin-top:2px; }
// /* FIELDS */
// .ap-field { margin-bottom:16px; }
// .ap-field:last-child { margin-bottom:0; }
// .ap-label { display:flex; align-items:center; gap:4px; font-size:11.5px; font-weight:600; color:var(--muted); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:7px; }
// .req { color:var(--red); font-size:13px; }
// .ap-input,.ap-ta,.ap-sel { width:100%; border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:10px 13px; font-size:14px; font-family:'Outfit',sans-serif; color:var(--ink); background:var(--surface); transition:border-color 0.15s,background 0.15s,box-shadow 0.15s; outline:none; }
// .ap-input:focus,.ap-ta:focus,.ap-sel:focus { border-color:var(--ink); background:var(--white); box-shadow:0 0 0 3px rgba(0,0,0,0.05); }
// .ap-input.err { border-color:var(--red); background:var(--red-bg); }
// .ap-ta { resize:vertical; min-height:90px; }
// .ap-sel { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; padding-right:36px; cursor:pointer; }
// .ap-hint { font-size:11.5px; color:var(--muted); margin-top:5px; }
// .ap-iw { position:relative; }
// .ap-cc { position:absolute; right:10px; bottom:9px; font-size:10.5px; color:var(--muted); pointer-events:none; }
// .ap-cc.w { color:var(--amber); } .ap-cc.o { color:var(--red); }
// .ap-r2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
// .ap-r3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
// @media(max-width:600px){ .ap-r2,.ap-r3 { grid-template-columns:1fr; } }
// /* DIVIDER */
// .ap-div { height:1px; background:var(--surface2); margin:18px 0; }
// /* ── FIXED DRAG & DROP ZONE ── */
// .ap-dz-wrap {
//   position:relative;
//   border:2px dashed var(--border);
//   border-radius:var(--radius);
//   padding:32px 20px;
//   text-align:center;
//   background:var(--surface);
//   margin-bottom:14px;
//   transition:all 0.2s ease;
//   cursor:pointer;
//   user-select:none;
// }
// .ap-dz-wrap.drag {
//   border-color:var(--ink);
//   background:var(--surface2);
//   transform:scale(1.01);
//   box-shadow:0 0 0 4px rgba(15,15,15,0.06);
// }
// .ap-dz-wrap:hover { border-color:#999; }
// .ap-dz-icon { font-size:36px; display:block; pointer-events:none; }
// .ap-dz-title { font-size:14px; font-weight:600; margin:8px 0 4px; pointer-events:none; }
// .ap-dz-sub { font-size:12px; color:var(--muted); margin:0; pointer-events:none; }
// /* Hidden file input covers entire drop zone for click-to-upload */
// .ap-dz-file { position:absolute; inset:0; width:100%; height:100%; opacity:0; cursor:pointer; font-size:0; }
// /* IMAGE SLOTS */
// .ap-imgs { display:grid; grid-template-columns:repeat(5,1fr); gap:10px; }
// @media(max-width:560px){ .ap-imgs { grid-template-columns:repeat(3,1fr); } }
// .ap-slot { position:relative; aspect-ratio:1; border-radius:var(--radius-sm); overflow:hidden; background:var(--surface2); border:1.5px dashed var(--border); display:flex; flex-direction:column; align-items:center; justify-content:center; transition:all 0.18s; }
// .ap-slot.empty { cursor:pointer; }
// .ap-slot.empty:hover { border-color:var(--ink); background:var(--surface); }
// .ap-slot.has { border-style:solid; border-color:transparent; background:#000; }
// .ap-slot.pri { box-shadow:0 0 0 2.5px var(--ink); }
// .ap-slot-img { width:100%; height:100%; object-fit:cover; transition:opacity 0.18s; display:block; }
// .ap-slot.has:hover .ap-slot-img { opacity:0.55; }
// .ap-slot-ov { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px; opacity:0; transition:opacity 0.18s; }
// .ap-slot.has:hover .ap-slot-ov { opacity:1; }
// .ap-slot-ovbtn { background:rgba(255,255,255,0.93); border:none; border-radius:6px; padding:5px 11px; font-size:11px; font-family:'Outfit',sans-serif; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:4px; transition:background 0.12s; pointer-events:all; }
// .ap-slot-ovbtn:hover { background:#fff; }
// .ap-slot-ovbtn.del { color:var(--red); }
// .ap-pri-badge { position:absolute; top:6px; left:6px; background:var(--ink); color:#fff; border-radius:4px; padding:2px 7px; font-size:9px; font-weight:700; letter-spacing:0.5px; pointer-events:none; }
// .ap-slot-num { position:absolute; top:6px; right:6px; background:rgba(0,0,0,0.45); color:#fff; border-radius:4px; padding:2px 6px; font-size:10px; font-weight:600; pointer-events:none; }
// .ap-slot-plus { font-size:20px; color:#ccc; pointer-events:none; }
// .ap-slot-lbl { font-size:10px; color:#bbb; margin-top:3px; pointer-events:none; }
// /* Each slot's individual file input */
// .ap-slot-input { position:absolute; inset:0; width:100%; height:100%; opacity:0; cursor:pointer; font-size:0; }
// /* LIGHTBOX */
// .lb-ov { position:fixed; inset:0; background:rgba(0,0,0,0.9); z-index:9999; display:flex; align-items:center; justify-content:center; animation:fadeIn 0.2s ease; backdrop-filter:blur(4px); }
// .lb { position:relative; display:flex; flex-direction:column; align-items:center; gap:14px; max-width:90vw; }
// .lb-img { max-width:80vw; max-height:74vh; border-radius:12px; object-fit:contain; box-shadow:var(--shadow-lg); }
// .lb-close { position:absolute; top:-14px; right:-14px; width:34px; height:34px; border-radius:50%; background:#fff; border:none; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; font-weight:700; color:var(--ink); box-shadow:0 2px 8px rgba(0,0,0,0.2); transition:transform 0.15s; }
// .lb-close:hover { transform:rotate(90deg); }
// .lb-thumbs { display:flex; gap:8px; }
// .lb-thumb { width:52px; height:52px; border-radius:7px; object-fit:cover; cursor:pointer; border:2px solid transparent; opacity:0.55; transition:all 0.15s; }
// .lb-thumb.on { border-color:#fff; opacity:1; }
// .lb-info { color:rgba(255,255,255,0.6); font-size:12px; text-align:center; }
// .lb-arr { position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.15); border:none; border-radius:50%; width:42px; height:42px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:20px; color:#fff; transition:background 0.15s; }
// .lb-arr:hover { background:rgba(255,255,255,0.3); }
// .lb-prev { left:-58px; } .lb-next { right:-58px; }
// /* ── DRAFT SAVED PAGE (Amazon-style) ── */
// .dp-wrap { position:fixed; inset:0; background:var(--surface); z-index:500; display:flex; align-items:center; justify-content:center; padding:20px; animation:fadeIn 0.3s ease; overflow-y:auto; }
// .dp-card { background:var(--white); border:1px solid var(--border); border-radius:20px; padding:48px 40px; max-width:500px; width:100%; text-align:center; box-shadow:var(--shadow-lg); animation:slideUp 0.3s ease; }
// .dp-icon { font-size:60px; margin-bottom:16px; display:block; }
// .dp-card h2 { font-family:'Playfair Display',serif; font-size:26px; font-weight:600; margin:0 0 10px; }
// .dp-card > p { font-size:14px; color:var(--muted); line-height:1.65; margin:0 0 28px; }
// .dp-checklist { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-sm); padding:16px 18px; text-align:left; margin-bottom:28px; }
// .dp-checklist h4 { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:var(--muted); margin:0 0 12px; }
// .dp-check-item { display:flex; align-items:center; gap:10px; padding:6px 0; font-size:13px; color:var(--ink2); border-bottom:1px solid var(--border); }
// .dp-check-item:last-child { border-bottom:none; }
// .dp-check-item.done { color:var(--green); }
// .dp-check-dot { width:20px; height:20px; border-radius:50%; background:var(--surface2); border:1.5px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:10px; flex-shrink:0; }
// .dp-check-item.done .dp-check-dot { background:var(--green); border-color:var(--green); color:#fff; }
// .dp-check-lbl { flex:1; font-weight:500; }
// .dp-check-status { font-size:11px; font-weight:700; color:var(--muted); }
// .dp-check-item.done .dp-check-status { color:var(--green); }
// .dp-progress { margin-bottom:20px; }
// .dp-progress-lbl { display:flex; justify-content:space-between; font-size:12px; font-weight:600; color:var(--muted); margin-bottom:6px; }
// .dp-progress-lbl strong { color:var(--ink); }
// .dp-progress-track { background:var(--surface2); border-radius:6px; height:8px; overflow:hidden; }
// .dp-progress-fill { height:100%; background:var(--ink); border-radius:6px; transition:width 0.6s ease; }
// .dp-btns { display:flex; flex-direction:column; gap:10px; }
// .dp-saved-at { font-size:11.5px; color:var(--muted); margin-top:16px; }
// /* SIZE VALIDATION */
// .ap-sz-err { border:1.5px solid var(--red); border-radius:var(--radius-sm); padding:11px 14px; background:var(--red-bg); display:flex; align-items:center; gap:8px; margin-bottom:14px; font-size:12.5px; color:var(--red); font-weight:600; animation:fadeIn 0.2s ease; }
// /* COLORS */
// .ap-clist { display:flex; flex-direction:column; gap:8px; margin-bottom:14px; }
// .ap-citem { display:flex; align-items:center; gap:10px; padding:10px 13px; border:1.5px solid var(--border); border-radius:var(--radius-sm); background:var(--white); transition:border-color 0.15s; }
// .ap-citem:hover { border-color:#ccc; }
// .ap-cswatch { width:34px; height:34px; border-radius:7px; border:1.5px solid var(--border); cursor:pointer; flex-shrink:0; }
// .ap-ctexts { flex:1; display:flex; flex-direction:column; gap:2px; }
// .ap-ctexts input { border:none; outline:none; background:transparent; font-family:'Outfit',sans-serif; color:var(--ink); padding:2px 4px; border-radius:4px; }
// .ap-ctexts input:first-child { font-size:13.5px; font-weight:500; }
// .ap-ctexts input:last-child { font-size:11.5px; color:var(--muted); }
// .ap-ctexts input:hover,.ap-ctexts input:focus { background:var(--surface2); }
// .ap-presets { display:flex; flex-wrap:wrap; gap:6px; }
// .ap-ppill { display:flex; align-items:center; gap:6px; padding:5px 11px; border:1.5px solid var(--border); border-radius:20px; background:var(--white); font-size:12px; font-weight:500; cursor:pointer; transition:all 0.15s; color:var(--ink2); font-family:'Outfit',sans-serif; }
// .ap-ppill:hover { border-color:var(--ink); background:var(--surface2); }
// .ap-ppill.on { border-color:var(--green); background:var(--green-bg); color:var(--green); }
// .ap-pdot { width:13px; height:13px; border-radius:50%; border:1px solid rgba(0,0,0,0.1); flex-shrink:0; }
// .ap-cadd { display:flex; flex-wrap:wrap; gap:10px; align-items:flex-end; padding:14px; background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius-sm); margin-bottom:14px; }
// /* RADIO PILLS */
// .ap-rg { display:flex; gap:7px; flex-wrap:wrap; }
// .ap-rp { display:flex; align-items:center; gap:6px; padding:6px 13px; border:1.5px solid var(--border); border-radius:20px; cursor:pointer; font-size:12.5px; font-weight:500; color:var(--ink2); background:var(--white); transition:all 0.15s; user-select:none; font-family:'Outfit',sans-serif; }
// .ap-rp input { display:none; }
// .ap-rp.on { border-color:var(--ink); background:var(--ink); color:#fff; }
// /* SIZES */
// .ap-szgrid { display:grid; grid-template-columns:repeat(auto-fill,minmax(155px,1fr)); gap:10px; }
// .ap-szcard { border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:13px; background:var(--white); cursor:pointer; transition:all 0.15s; }
// .ap-szcard:hover { border-color:#bbb; }
// .ap-szcard.on { border-color:var(--ink); background:var(--surface); }
// .ap-szcard.sz-err-highlight { border-color:var(--red) !important; background:var(--red-bg) !important; animation:shake 0.4s ease; }
// .ap-szh { display:flex; align-items:center; gap:8px; margin-bottom:10px; }
// .ap-szbadge { display:inline-flex; align-items:center; justify-content:center; min-width:36px; height:28px; border-radius:6px; background:var(--surface2); font-size:12px; font-weight:800; padding:0 8px; }
// .ap-szcard.on .ap-szbadge { background:var(--ink); color:#fff; }
// .ap-szf { margin-bottom:7px; }
// .ap-szf label { font-size:10.5px; text-transform:uppercase; color:var(--muted); font-weight:600; letter-spacing:0.3px; display:block; margin-bottom:4px; }
// .ap-szf input { width:100%; border:1.5px solid var(--border); border-radius:6px; padding:6px 9px; font-size:13px; font-family:'Outfit',sans-serif; outline:none; background:var(--white); }
// .ap-szf input:focus { border-color:var(--ink); }
// .ap-ptag { background:var(--green-bg); color:var(--green); border-radius:5px; padding:3px 8px; font-size:11px; font-weight:700; display:inline-block; margin-top:4px; }
// .ap-ckr { display:flex; align-items:center; gap:6px; margin-bottom:8px; cursor:pointer; }
// .ap-ckr input { accent-color:var(--ink); cursor:pointer; }
// .ap-ckr label { font-size:12px; font-weight:500; cursor:pointer; }
// .ap-szsum { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
// .ap-szpill { display:inline-flex; align-items:center; gap:4px; padding:5px 11px; background:var(--ink); color:#fff; border-radius:20px; font-size:11.5px; font-weight:600; }
// .ap-icards { display:flex; flex-wrap:wrap; gap:10px; }
// .ap-icard { border:1.5px solid var(--border); border-radius:var(--radius-sm); padding:13px; background:var(--white); width:155px; }
// .ap-ich { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
// .ap-il { font-size:13px; font-weight:800; }
// /* price-info box */
// .ap-price-info { background:var(--blue-bg); border:1px solid #bfdbfe; border-radius:var(--radius-sm); padding:10px 14px; font-size:12.5px; color:var(--blue); font-weight:500; margin-top:8px; display:flex; align-items:flex-start; gap:7px; line-height:1.5; }
// /* SIDEBAR */
// .ap-sb { background:var(--white); border:1px solid var(--border); border-radius:var(--radius); padding:20px; margin-bottom:16px; box-shadow:var(--shadow); }
// .ap-sr { display:flex; justify-content:space-between; align-items:flex-start; padding:8px 0; border-bottom:1px solid var(--surface2); font-size:12.5px; gap:10px; }
// .ap-sr:last-child { border-bottom:none; }
// .ap-sk { color:var(--muted); font-weight:500; flex-shrink:0; }
// .ap-sv { color:var(--ink); font-weight:600; text-align:right; word-break:break-word; }
// .ap-trow { display:flex; align-items:center; justify-content:space-between; padding:11px 13px; background:var(--surface); border:1.5px solid var(--border); border-radius:var(--radius-sm); margin-bottom:10px; cursor:pointer; transition:background 0.15s; }
// .ap-trow:hover { background:var(--surface2); }
// .ap-tlbl { font-size:13px; font-weight:500; }
// .ap-tsw { width:38px; height:21px; background:#ddd; border-radius:10.5px; position:relative; transition:background 0.2s; flex-shrink:0; }
// .ap-tsw.on { background:var(--ink); }
// .ap-tsw::after { content:''; position:absolute; top:3px; left:3px; width:15px; height:15px; border-radius:50%; background:#fff; transition:transform 0.2s; }
// .ap-tsw.on::after { transform:translateX(17px); }
// /* PROGRESS */
// .ap-pbtrack { background:var(--surface2); border-radius:4px; height:6px; overflow:hidden; }
// .ap-pbfill { height:100%; background:var(--ink); border-radius:4px; transition:width 0.4s ease; }
// .ap-plbl { font-size:11.5px; color:var(--muted); margin-bottom:6px; font-weight:500; }
// /* BADGE */
// .ap-badge { display:inline-flex; align-items:center; gap:3px; padding:2px 8px; border-radius:5px; font-size:11px; font-weight:700; }
// .ap-bg { background:var(--green-bg); color:var(--green); }
// .ap-ba { background:var(--amber-bg); color:var(--amber); }
// .ap-bb { background:var(--blue-bg); color:var(--blue); }
// .ap-br { background:var(--red-bg); color:var(--red); }
// /* VALIDATION */
// .ap-verrs { background:var(--red-bg); border:1.5px solid #fca5a5; border-radius:var(--radius-sm); padding:14px 16px; margin-bottom:18px; }
// .ap-verrs h4 { color:var(--red); font-size:13px; font-weight:700; margin:0 0 8px; }
// .ap-verrs ul { margin:0; padding-left:18px; }
// .ap-verrs li { color:var(--red); font-size:12.5px; margin-bottom:3px; }
// /* DRAFT NOTIF */
// .ap-draft { background:var(--amber-bg); border:1px solid #fcd34d; border-radius:var(--radius-sm); padding:9px 14px; display:flex; align-items:center; justify-content:space-between; font-size:12.5px; color:var(--amber); font-weight:500; margin-bottom:14px; }
// /* EMPTY */
// .ap-empty { text-align:center; padding:22px 16px; border:1.5px dashed var(--border); border-radius:var(--radius-sm); background:var(--surface); color:var(--muted); font-size:13px; }
// .ap-empty-ic { font-size:28px; margin-bottom:6px; }
// /* QUILL */
// .ap-ql .ql-container { border-radius:0 0 var(--radius-sm) var(--radius-sm); border:1.5px solid var(--border); border-top:0; font-family:'Outfit',sans-serif; font-size:14px; }
// .ap-ql .ql-toolbar { border-radius:var(--radius-sm) var(--radius-sm) 0 0; border:1.5px solid var(--border); background:var(--surface); }
// .ap-ql .ql-editor { min-height:160px; }
// /* ANIMATIONS */
// @keyframes fadeIn { from{opacity:0}to{opacity:1} }
// @keyframes slideUp { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }
// @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
// `;
// /* ═══════════════════════════════════════════════════════════
//    CONSTANTS
// ═══════════════════════════════════════════════════════════ */
// const PRESETS = [
//     { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" }, { name: "Red", hex: "#EF4444" },
//     { name: "Navy Blue", hex: "#1E3A5F" }, { name: "Royal Blue", hex: "#3B82F6" }, { name: "Forest Green", hex: "#166534" },
//     { name: "Olive", hex: "#4D7C0F" }, { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
//     { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" }, { name: "Brown", hex: "#92400E" },
//     { name: "Cream", hex: "#FFFDD0" }, { name: "Gray", hex: "#9CA3AF" }, { name: "Charcoal", hex: "#374151" }, { name: "Maroon", hex: "#7F1D1D" },
// ];
// const INIT_SIZES = {
//     XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
//     M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
//     L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
//     XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
//     XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
//     "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
// };
// /* ═══════════════════════════════════════════════════════════
//    LIGHTBOX
// ═══════════════════════════════════════════════════════════ */
// const Lightbox = ({ imgs, start, onClose }) => {
//     const [cur, setCur] = useState(start);
//     useEffect(() => {
//         const h = (e) => {
//             if (e.key === 'Escape') onClose();
//             if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1));
//             if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1));
//         };
//         window.addEventListener('keydown', h);
//         return () => window.removeEventListener('keydown', h);
//     }, [imgs.length, onClose]);
//     return (
//         <div className="lb-ov" onClick={onClose}>
//             <div className="lb" onClick={e => e.stopPropagation()}>
//                 <button className="lb-close" onClick={onClose}>✕</button>
//                 <img className="lb-img" src={URL.createObjectURL(imgs[cur])} alt="" />
//                 {cur > 0 && <button className="lb-arr lb-prev" onClick={() => setCur(p => p - 1)}>‹</button>}
//                 {cur < imgs.length - 1 && <button className="lb-arr lb-next" onClick={() => setCur(p => p + 1)}>›</button>}
//                 {imgs.length > 1 && (
//                     <div className="lb-thumbs">
//                         {imgs.map((img, i) => (
//                             <img key={i} className={`lb-thumb ${i === cur ? 'on' : ''}`}
//                                 src={URL.createObjectURL(img)} alt="" onClick={() => setCur(i)} />
//                         ))}
//                     </div>
//                 )}
//                 <div className="lb-info">{cur + 1} / {imgs.length} &nbsp;·&nbsp; {imgs[cur].name} &nbsp;·&nbsp; ← → to navigate · Esc to close</div>
//             </div>
//         </div>
//     );
// };
// /* ═══════════════════════════════════════════════════════════
//    DRAFT SAVED PAGE (Amazon-style redirect)
// ═══════════════════════════════════════════════════════════ */
// const DraftPage = ({ formState, onContinue, onPublishNow, onNewProduct }) => {
//     const { name, description, price, detailedDescription, hasImages, hasColors, hasSizes } = formState;
//     const steps = [
//         { label: "Basic Info", done: !!(name?.trim() && description?.trim()), detail: name?.trim() ? `"${name.slice(0, 30)}${name.length > 30 ? '…' : ''}"` : "Required" },
//         { label: "Pricing", done: !!price, detail: price ? `₹${price}` : "Required" },
//         { label: "Product Images", done: !!hasImages, detail: hasImages ? "Images uploaded" : "Add images" },
//         { label: "Color Variants", done: !!hasColors, detail: hasColors ? "Colors added" : "Add at least 1" },
//         { label: "Sizes & Inventory", done: !!hasSizes, detail: hasSizes ? "Sizes configured" : "⚠ Required" },
//         { label: "Detailed Description", done: !!detailedDescription, detail: detailedDescription ? "Added" : "Optional" },
//     ];
//     const doneCount = steps.filter(s => s.done).length;
//     const pct = Math.round((doneCount / steps.length) * 100);
//     const savedAt = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
//     const canPublish = steps.slice(0, 5).filter(s => !s.done).length === 0; // first 5 required
//     return (
//         <div className="dp-wrap">
//             <div className="dp-card">
//                 <span className="dp-icon">📋</span>
//                 <h2>Draft Saved!</h2>
//                 <p>
//                     Your product listing has been saved as a draft and can be continued anytime.
//                     Complete all required steps before publishing.
//                 </p>
//                 {/* Progress */}
//                 <div className="dp-progress">
//                     <div className="dp-progress-lbl">
//                         <span>Listing Progress</span>
//                         <strong>{doneCount}/{steps.length} steps &nbsp;·&nbsp; {pct}%</strong>
//                     </div>
//                     <div className="dp-progress-track">
//                         <div className="dp-progress-fill" style={{ width: `${pct}%` }} />
//                     </div>
//                 </div>
//                 {/* Checklist */}
//                 <div className="dp-checklist">
//                     <h4>What's done / what's left</h4>
//                     {steps.map((s, i) => (
//                         <div key={i} className={`dp-check-item ${s.done ? 'done' : ''}`}>
//                             <div className="dp-check-dot">{s.done ? '✓' : ''}</div>
//                             <span className="dp-check-lbl">{s.label}</span>
//                             <span className="dp-check-status">{s.done ? '✓ Done' : s.detail}</span>
//                         </div>
//                     ))}
//                 </div>
//                 {/* Actions */}
//                 <div className="dp-btns">
//                     <button className="ap-btn ap-btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: 14 }} onClick={onContinue}>
//                         ✏️ Continue Editing
//                     </button>
//                     {canPublish && (
//                         <button
//                             className="ap-btn ap-btn-ghost"
//                             style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--green)', color: 'var(--green)' }}
//                             onClick={onPublishNow}
//                         >
//                             🚀 Publish Now
//                         </button>
//                     )}
//                     <button className="ap-btn ap-btn-ghost" style={{ width: '100%', justifyContent: 'center' }} onClick={onNewProduct}>
//                         ➕ Add Another Product
//                     </button>
//                 </div>
//                 <div className="dp-saved-at">💾 Saved at {savedAt}</div>
//             </div>
//         </div>
//     );
// };
// /* ═══════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════════════════════ */
// const Add = ({ token }) => {
//     /* ── state ── */
//     // const [images, setImages] = useState([null, null, null, null, null]);
//     const [images, setImages] = useState(Array(10).fill(null));
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState(""); // base / reference price
//     const [discountPrice, setDiscPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestseller, setBestseller] = useState(false);
//     const [detailedDescription, setDD] = useState("");
//     const [colors, setColors] = useState([]);
//     const [newColorName, setNewCName] = useState("");
//     const [newColorHex, setNewCHex] = useState("#000000");
//     const [colorMode, setColorMode] = useState("both");
//     const [sizeType, setSizeType] = useState("standard");
//     const [stdSizes, setStdSizes] = useState(INIT_SIZES);
//     const [enabledSizes, setEnabledSizes] = useState([]);
//     const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState("");
//     const [niMult, setNiMult] = useState(1.0);
//     const [niStock, setNiStock] = useState(0);
//     const [niPrice, setNiPrice] = useState("");
//     const [niCustom, setNiCustom] = useState(false);
//     const [lbOpen, setLbOpen] = useState(false);
//     const [lbIdx, setLbIdx] = useState(0);
//     const [dragging, setDragging] = useState(false);
//     const [valErrs, setValErrs] = useState([]);
//     const [draftNotif, setDraftNotif] = useState(false);
//     const [submitting, setSubmitting] = useState(false);
//     const [draftSaving, setDraftSaving] = useState(false);
//     const [showDraftPage, setShowDraftPage] = useState(false);
//     const [sizeErr, setSizeErr] = useState(false);
//     const [sizeCardShake, setSizeCardShake] = useState(false);
//     const dzRef = useRef(null); // drop zone ref
//     const sizeRef = useRef(null); // scroll target when size error
//     /* ── derived ── */
//     const uploaded = images.filter(Boolean);
//     const hasSizes = sizeType === 'standard' ? enabledSizes.length > 0 : inchSizes.length > 0;
//     const discount = discountPrice && price && +discountPrice < +price
//         ? Math.round((1 - discountPrice / price) * 100) : null;
//     /* ── progress ── */
//     const progress = Math.min(100, [
//         name.trim() ? 15 : 0,
//         description.trim() ? 10 : 0,
//         price ? 15 : 0,
//         uploaded.length > 0 ? 15 : 0,
//         colors.length > 0 ? 15 : 0,
//         hasSizes ? 15 : 0,
//         detailedDescription ? 8 : 0,
//         (category && subCategory) ? 7 : 0,
//     ].reduce((a, b) => a + b, 0));
//     /* ── auto-save draft ── */
//     useEffect(() => {
//         if (!name && !description && !price) return;
//         const t = setTimeout(() => {
//             try {
//                 localStorage.setItem('ap_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription }));
//                 setDraftNotif(true);
//                 setTimeout(() => setDraftNotif(false), 2500);
//             } catch { }
//         }, 2000);
//         return () => clearTimeout(t);
//     }, [name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription]);
//     useEffect(() => {
//         try {
//             const d = JSON.parse(localStorage.getItem('ap_draft') || '{}');
//             if (d.name) {
//                 setName(d.name || ''); setDescription(d.description || '');
//                 setPrice(d.price || ''); setDiscPrice(d.discountPrice || '');
//                 setCategory(d.category || 'Men'); setSubCategory(d.subCategory || 'Topwear');
//                 setBestseller(d.bestseller || false); setDD(d.detailedDescription || '');
//                 toast.info('💾 Draft restored', { autoClose: 2500 });
//             }
//         } catch { }
//     }, []);
//     /* ── auto-set base price to min size custom price ── */
//     useEffect(() => {
//         let minPrice = null;
//         if (sizeType === 'standard' && enabledSizes.length > 0) {
//             const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
//             const sorted = [...enabledSizes].sort((a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b));
//             const minSizeKey = sorted[0];
//             const d = stdSizes[minSizeKey];
//             if (d.useCustomPrice && d.customPrice) {
//                 minPrice = parseFloat(d.customPrice);
//             }
//         } else if (sizeType === 'inch' && inchSizes.length > 0) {
//             const parseSizeValue = (sizeStr) => {
//                 const nums = sizeStr.match(/\d+\.?\d*/g) || [];
//                 if (nums.length === 0) return Infinity;
//                 return Math.min(...nums.map(parseFloat));
//             };
//             const sorted = [...inchSizes].sort((a, b) => parseSizeValue(a.size) - parseSizeValue(b.size));
//             const minSize = sorted[0];
//             if (minSize.useCustomPrice && minSize.customPrice) {
//                 minPrice = parseFloat(minSize.customPrice);
//             }
//         }
//         if (minPrice && minPrice > 0 && minPrice.toString() !== price) {
//             setPrice(minPrice.toString());
//         }
//     }, [sizeType, enabledSizes, stdSizes, inchSizes]);
//     /* ═══════════════════════════════
//        IMAGE HANDLERS — FIXED
//     ═══════════════════════════════ */
//     const setImg = (i, f) => {
//         setImages(prev => { const n = [...prev]; n[i] = f; return n; });
//     };
//     const delImg = (i) => {
//         setImages(prev => { const n = [...prev]; n[i] = null; return n; });
//     };
//     /* ── FIXED drag & drop: use captured ref, stop propagation properly ── */
//     const handleDragEnter = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         setDragging(true);
//     }, []);
//     const handleDragOver = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         e.dataTransfer.dropEffect = 'copy';
//         setDragging(true);
//     }, []);
//     const handleDragLeave = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         // Only clear when leaving the dropzone container entirely
//         if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) {
//             setDragging(false);
//         }
//     }, []);
//     const handleDrop = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation();
//         setDragging(false);
//         const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
//         if (!files.length) { toast.error('Only image files allowed'); return; }
//         let added = 0;
//         setImages(prev => {
//             const next = [...prev];
//             for (const file of files) {
//                 const slot = next.findIndex(img => !img);
//                 if (slot === -1) break;
//                 next[slot] = file;
//                 added++;
//             }
//             return next;
//         });
//         // Show toast after state update
//         requestAnimationFrame(() => {
//             if (added > 0) toast.success(`${added} image${added > 1 ? 's' : ''} added!`);
//             else toast.info('All 10 image slots are full');
//         });
//     }, []);
//     /* ═══════════════════════════════
//        COLOR HANDLERS
//     ═══════════════════════════════ */
//     const addColor = () => {
//         if (colorMode !== "hexOnly" && !newColorName.trim()) return toast.error("Enter color name");
//         const c = { name: newColorName.trim() || `Color-${colors.length + 1}`, hex: newColorHex || '#808080' };
//         if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color name already exists");
//         setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added!`);
//     };
//     const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = (p) => {
//         if (!colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())) {
//             setColors([...colors, p]); toast.success(`${p.name} added!`);
//         } else toast.info(`${p.name} already added`);
//     };
//     /* ═══════════════════════════════
//        SIZE HANDLERS
//     ═══════════════════════════════ */
//     const toggleSize = (k) => {
//         setSizeErr(false);
//         setEnabledSizes(p => p.includes(k) ? p.filter(s => s !== k) : [...p, k]);
//     };
//     const setSzF = (k, f, v) => setStdSizes(p => ({
//         ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v }
//     }));
//     const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
//     // PRICE CALCULATION — uses price state as reference
//     const calcP = (d) => d.useCustomPrice && d.customPrice
//         ? parseFloat(d.customPrice)
//         : parseFloat(price || 0) * d.multiplier;
//     const addInch = () => {
//         if (!niSize.trim()) return toast.error("Enter inch size");
//         if (inchSizes.some(s => s.size === niSize)) return toast.error("Size already exists");
//         setSizeErr(false);
//         setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
//         setNiSize(""); setNiMult(1.0); setNiStock(0); setNiPrice(""); setNiCustom(false);
//         toast.success("Size added!");
//     };
//     const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => {
//         const u = [...inchSizes];
//         if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice;
//         else if (f === 'stock') u[i].stock = parseInt(v) || 0;
//         else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1;
//         else u[i][f] = v;
//         setInchSizes(u);
//     };
//     const formatSizes = () => {
//         if (sizeType === "standard") return enabledSizes.map(k => {
//             const d = stdSizes[k];
//             const obj = { size: k, priceMultiplier: d.multiplier, stock: d.stock };
//             if (d.useCustomPrice) {
//                 const v = d.customPrice?.trim();
//                 if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for size ${k}`); throw new Error("bad"); }
//                 obj.customPrice = +v; obj.useCustomPrice = true;
//             }
//             return obj;
//         });
//         return inchSizes.map(s => {
//             const obj = { size: s.size, priceMultiplier: s.multiplier, stock: s.stock };
//             if (s.useCustomPrice) {
//                 const v = s.customPrice?.trim();
//                 if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for size ${s.size}`); throw new Error("bad"); }
//                 obj.customPrice = +v; obj.useCustomPrice = true;
//             }
//             return obj;
//         });
//     };
//     /* ═══════════════════════════════
//        VALIDATION
//     ═══════════════════════════════ */
//     const validate = (isDraft = false) => {
//         const errs = [];
//         if (!name.trim()) errs.push("Product name is required");
//         if (!description.trim()) errs.push("Short description is required");
//         // SIZE — ALWAYS required even for draft
//         if (!hasSizes) {
//             errs.push("At least one size must be selected (required)");
//             setSizeErr(true);
//             setSizeCardShake(true);
//             setTimeout(() => setSizeCardShake(false), 600);
//             // Scroll to sizes section
//             setTimeout(() => sizeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
//         }
//         if (!isDraft) {
//             // For publish only:
//             if (!price || isNaN(+price) || +price <= 0) errs.push("Base price is required to publish");
//             if (!uploaded.length) errs.push("At least one product image is required");
//             if (!colors.length) errs.push("Add at least one color variant");
//         }
//         return errs;
//     };
//     /* ═══════════════════════════════
//        SAVE AS DRAFT
//     ═══════════════════════════════ */
//     const saveDraft = async () => {
//         const errs = validate(true); // lenient — only name, description, and SIZE required
//         if (errs.length) {
//             setValErrs(errs);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             return;
//         }
//         setValErrs([]);
//         setDraftSaving(true);
//         try {
//             // Save to localStorage
//             const payload = {
//                 name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription,
//                 sizesCount: hasSizes ? (sizeType === 'standard' ? enabledSizes.length : inchSizes.length) : 0,
//                 colorsCount: colors.length, imagesCount: uploaded.length,
//                 savedAt: new Date().toISOString(),
//             };
//             localStorage.setItem('ap_full_draft', JSON.stringify(payload));
//             toast.success('💾 Draft saved!');
//             setShowDraftPage(true); // ← Amazon-style redirect to draft page
//         } catch {
//             toast.error("Failed to save draft");
//         } finally {
//             setDraftSaving(false);
//         }
//     };
//     /* ═══════════════════════════════
//        PUBLISH
//     ═══════════════════════════════ */
//     const onSubmit = async (e) => {
//         e?.preventDefault();
//         const errs = validate(false);
//         if (errs.length) {
//             setValErrs(errs);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             return;
//         }
//         setValErrs([]);
//         setSubmitting(true);
//         try {
//             const fd = new FormData();
//             fd.append("name", name.trim());
//             fd.append("description", description.trim());
//             fd.append("detailedDescription", detailedDescription);
//             fd.append("price", price);
//             fd.append("discountPrice", discountPrice || "");
//             fd.append("category", category);
//             fd.append("subCategory", subCategory);
//             fd.append("bestseller", bestseller);
//             fd.append("sizes", JSON.stringify(formatSizes()));
//             fd.append("color", JSON.stringify(colors));
//             // images.forEach((img, i) => { if (img) fd.append(`image${i + 1}`, img); });
//             images.forEach((img) => {
//                 if (img) fd.append("images", img);
//             });
//             const res = await axios.post(`${backendUrl}/api/product/add`, fd, { headers: { token } });
//             if (res.data.success) {
//                 toast.success("🎉 Product published!");
//                 try { localStorage.removeItem('ap_draft'); localStorage.removeItem('ap_full_draft'); } catch { }
//                 resetForm();
//             } else toast.error(res.data.message || "Failed to publish");
//         } catch (err) {
//             if (err.message !== "bad") toast.error(err.response?.data?.message || "Something went wrong");
//         } finally {
//             setSubmitting(false);
//         }
//     };
//     const resetForm = () => {
//         setName(""); setDescription(""); setDD(""); setPrice(""); setDiscPrice("");
//         setColors([]); setEnabledSizes([]); setStdSizes(INIT_SIZES); setInchSizes([]);
//         setImages(Array(10).fill(null)); setSizeType("standard");
//         setCategory("Men"); setSubCategory("Topwear"); setBestseller(false);
//         setValErrs([]); setSizeErr(false); setShowDraftPage(false);
//     };
//     const clearAll = () => {
//         resetForm();
//         try { localStorage.removeItem('ap_draft'); } catch { }
//         toast.success("Form cleared");
//     };
//     /* ── Draft page state snapshot ── */
//     const draftFormState = {
//         name, description, price, detailedDescription,
//         hasImages: uploaded.length > 0,
//         hasColors: colors.length > 0,
//         hasSizes,
//     };
//     /* ══════════════════════════════════════════════════════════
//        RENDER — DRAFT SAVED PAGE
//     ══════════════════════════════════════════════════════════ */
//     if (showDraftPage) {
//         return (
//             <div className="ap">
//                 <style>{CSS}</style>
//                 <DraftPage
//                     formState={draftFormState}
//                     onContinue={() => setShowDraftPage(false)}
//                     onPublishNow={() => { setShowDraftPage(false); setTimeout(() => onSubmit(), 100); }}
//                     onNewProduct={() => resetForm()}
//                 />
//             </div>
//         );
//     }
//     /* ══════════════════════════════════════════════════════════
//        RENDER — MAIN FORM
//     ══════════════════════════════════════════════════════════ */
//     return (
//         <div className="ap">
//             <style>{CSS}</style>
//             {/* ── TOPBAR ── */}
//             <div className="ap-topbar">
//                 <div className="ap-topbar-left">
//                     <h1>Add Product</h1>
//                     <div className="ap-topbar-div" />
//                     <span>{progress}% complete</span>
//                 </div>
//                 <div className="ap-topbar-right">
//                     <button type="button" className="ap-btn ap-btn-ghost ap-btn-sm" onClick={clearAll}>🗑 Clear</button>
//                     <button type="button" className="ap-btn ap-btn-amber ap-btn-sm" onClick={saveDraft} disabled={draftSaving}>
//                         {draftSaving ? '⏳ Saving…' : '💾 Save Draft'}
//                     </button>
//                     <button type="button" className="ap-btn ap-btn-primary" onClick={onSubmit} disabled={submitting}>
//                         {submitting ? '⏳ Publishing…' : '🚀 Publish'}
//                     </button>
//                 </div>
//             </div>
//             {/* ── STEPS ── */}
//             <div className="ap-steps">
//                 {[
//                     ['1', 'Basic Info', !!(name && description)],
//                     ['2', 'Pricing', !!price],
//                     ['3', 'Media', uploaded.length > 0],
//                     ['4', 'Colors', colors.length > 0],
//                     ['5', 'Sizes', hasSizes],
//                 ].map(([n, l, done], i) => (
//                     <React.Fragment key={n}>
//                         <div className={`ap-step ${done ? 'done' : 'active'}`}>
//                             <div className="ap-step-num">{done ? '✓' : n}</div>
//                             <span className="ap-step-lbl">{l}</span>
//                         </div>
//                         {i < 4 && <span className="ap-step-arr">›</span>}
//                     </React.Fragment>
//                 ))}
//             </div>
//             <form onSubmit={onSubmit}>
//                 <div className="ap-body">
//                     {/* ═════ LEFT COLUMN ═════ */}
//                     <div>
//                         {/* Validation errors */}
//                         {valErrs.length > 0 && (
//                             <div className="ap-verrs">
//                                 <h4>⚠️ Please fix before continuing:</h4>
//                                 <ul>{valErrs.map((e, i) => <li key={i}>{e}</li>)}</ul>
//                             </div>
//                         )}
//                         {/* Draft auto-saved notification */}
//                         {draftNotif && (
//                             <div className="ap-draft">
//                                 <span>💾 Draft auto-saved</span>
//                                 <span style={{ fontSize: 11 }}>{new Date().toLocaleTimeString()}</span>
//                             </div>
//                         )}
//                         {/* ── BASIC INFO ── */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">📝</div>
//                                     <div><div className="ap-card-title">Basic Information</div><div className="ap-card-sub">Name, description & category</div></div>
//                                 </div>
//                             </div>
//                             <div className="ap-field">
//                                 <label className="ap-label">Product Name <span className="req">*</span></label>
//                                 <div className="ap-iw">
//                                     <input className={`ap-input ${name.length > 90 ? 'err' : ''}`} type="text" maxLength={100}
//                                         placeholder="e.g. Classic Oxford Cotton Shirt" value={name} onChange={e => setName(e.target.value)} />
//                                     <span className={`ap-cc ${name.length > 80 ? 'w' : ''} ${name.length > 90 ? 'o' : ''}`}>{name.length}/100</span>
//                                 </div>
//                             </div>
//                             <div className="ap-field">
//                                 <label className="ap-label">Short Description <span className="req">*</span></label>
//                                 <div className="ap-iw">
//                                     <textarea className={`ap-input ap-ta ${description.length > 280 ? 'err' : ''}`}
//                                         maxLength={300} placeholder="Compelling product description for listings…"
//                                         value={description} onChange={e => setDescription(e.target.value)} />
//                                     <span className={`ap-cc ${description.length > 240 ? 'w' : ''} ${description.length > 280 ? 'o' : ''}`} style={{ bottom: 14 }}>{description.length}/300</span>
//                                 </div>
//                             </div>
//                             <div className="ap-r3">
//                                 <div className="ap-field">
//                                     <label className="ap-label">Category</label>
//                                     <select className="ap-input ap-sel" value={category}
//                                         onChange={e => { setCategory(e.target.value); setSubCategory(e.target.value === 'Others' ? 'Cushion Cover' : 'Topwear'); }}>
//                                         <option>Men</option><option>Women</option><option>Others</option>
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">Sub Category</label>
//                                     <select className="ap-input ap-sel" value={subCategory} onChange={e => setSubCategory(e.target.value)}>
//                                         {category === "Others"
//                                             ? <><option>Cushion Cover</option><option>Aprons</option><option>Desk Mat</option><option>Pillow</option><option>Chair Cover</option></>
//                                             : <><option>Topwear</option><option>Bottomwear</option><option>Winterwear</option></>}
//                                     </select>
//                                 </div>
//                                 <div className="ap-field">
//                                     <label className="ap-label">SKU / Code</label>
//                                     <input className="ap-input" type="text" placeholder="Auto-generated" />
//                                     <div className="ap-hint">Optional</div>
//                                 </div>
//                             </div>
//                             <div className="ap-div" />
//                             <div className="ap-field" style={{ margin: 0 }}>
//                                 <label className="ap-label">Detailed Description</label>
//                                 <div className="ap-ql"><ReactQuill theme="snow" value={detailedDescription} onChange={setDD} /></div>
//                                 <div className="ap-hint">Shown on product detail page. Add specs, care instructions, materials.</div>
//                             </div>
//                         </div>
//                         {/* ── MEDIA — FIXED DRAG & DROP ── */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">🖼️</div>
//                                     <div>
//                                         <div className="ap-card-title">Product Images</div>
//                                         <div className="ap-card-sub">{uploaded.length}/10 uploaded</div>
//                                     </div>
//                                 </div>
//                                 {uploaded.length > 0 && (
//                                     <button type="button" className="ap-btn ap-btn-ghost ap-btn-sm"
//                                         onClick={() => { setLbIdx(0); setLbOpen(true); }}>🔍 View All</button>
//                                 )}
//                             </div>
//                             {/*
//                 ── FIX: The drop zone has its own ref.
//                    The hidden <input type="file" multiple> on top handles click-to-upload.
//                    Drag events are attached directly to the container div via props (not addEventListener).
//                    e.preventDefault() on dragover is the critical piece that enables drop.
//               ── */}
//                             <div
//                                 ref={dzRef}
//                                 className={`ap-dz-wrap ${dragging ? 'drag' : ''}`}
//                                 onDragEnter={handleDragEnter}
//                                 onDragOver={handleDragOver}
//                                 onDragLeave={handleDragLeave}
//                                 onDrop={handleDrop}
//                             >
//                                 <span className="ap-dz-icon">{dragging ? '📥' : '📸'}</span>
//                                 <div className="ap-dz-title">{dragging ? 'Drop your images here!' : 'Drag & drop images here'}</div>
//                                 <p className="ap-dz-sub">or click below to upload · PNG, JPG, WEBP · Recommended 800×800px</p>
//                                 {/* Click-to-upload via file input ONLY activates when clicking the zone, NOT when dragging */}
//                                 {!dragging && (
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         multiple
//                                         className="ap-dz-file"
//                                         onChange={e => {
//                                             const files = Array.from(e.target.files);
//                                             let added = 0;
//                                             setImages(prev => {
//                                                 const next = [...prev];
//                                                 files.forEach(f => {
//                                                     const slot = next.findIndex(img => !img);
//                                                     if (slot !== -1) { next[slot] = f; added++; }
//                                                 });
//                                                 return next;
//                                             });
//                                             e.target.value = '';
//                                             requestAnimationFrame(() => {
//                                                 if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`);
//                                                 else toast.info('All slots are full');
//                                             });
//                                         }}
//                                     />
//                                 )}
//                             </div>
//                             {/* Image slots — each has its own file input for individual slot upload */}
//                             <div className="ap-imgs">
//                                 {images.map((img, i) => (
//                                     <div key={i} className={`ap-slot ${img ? 'has' : 'empty'} ${img && i === 0 ? 'pri' : ''}`}>
//                                         {img ? (
//                                             <>
//                                                 <img className="ap-slot-img" src={URL.createObjectURL(img)} alt="" />
//                                                 {i === 0 && <span className="ap-pri-badge">MAIN</span>}
//                                                 <span className="ap-slot-num">{i + 1}</span>
//                                                 <div className="ap-slot-ov">
//                                                     <button
//                                                         type="button" className="ap-slot-ovbtn"
//                                                         onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLbIdx(uploaded.indexOf(img)); setLbOpen(true); }}
//                                                     >🔍 View</button>
//                                                     <button
//                                                         type="button" className="ap-slot-ovbtn del"
//                                                         onMouseDown={e => { e.preventDefault(); e.stopPropagation(); delImg(i); }}
//                                                     >🗑 Remove</button>
//                                                 </div>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <span className="ap-slot-plus">+</span>
//                                                 <span className="ap-slot-lbl">Image {i + 1}</span>
//                                                 <input
//                                                     type="file" accept="image/*"
//                                                     className="ap-slot-input"
//                                                     onChange={e => {
//                                                         if (e.target.files[0]) { setImg(i, e.target.files[0]); }
//                                                         e.target.value = '';
//                                                     }}
//                                                 />
//                                             </>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="ap-hint" style={{ marginTop: 10 }}>
//                                 First image = primary thumbnail. Drag & drop onto the zone above, or click individual slots to upload. Hover an image to view or remove.
//                             </div>
//                         </div>
//                         {/* ── COLORS ── */}
//                         <div className="ap-card">
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">🎨</div>
//                                     <div>
//                                         <div className="ap-card-title">
//                                             Color Variants
//                                             {colors.length > 0 && <span style={{ marginLeft: 7, background: 'var(--ink)', color: '#fff', borderRadius: 10, padding: '1px 8px', fontSize: 11, fontWeight: 700 }}>{colors.length}</span>}
//                                         </div>
//                                         <div className="ap-card-sub">Add available colors for this product</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div style={{ marginBottom: 14 }}>
//                                 <label className="ap-label">Input Mode</label>
//                                 <div className="ap-rg">
//                                     {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
//                                         <label key={v} className={`ap-rp ${colorMode === v ? 'on' : ''}`}>
//                                             <input type="radio" value={v} checked={colorMode === v} onChange={() => setColorMode(v)} />{l}
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div className="ap-cadd">
//                                 {(colorMode === "both" || colorMode === "nameOnly") && (
//                                     <div className="ap-field" style={{ margin: 0 }}>
//                                         <label className="ap-label">Name</label>
//                                         <input className="ap-input" style={{ width: 165 }} type="text" placeholder="e.g., Navy Blue"
//                                             value={newColorName} onChange={e => setNewCName(e.target.value)}
//                                             onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} />
//                                     </div>
//                                 )}
//                                 {(colorMode === "both" || colorMode === "hexOnly") && (
//                                     <div className="ap-field" style={{ margin: 0 }}>
//                                         <label className="ap-label">Color</label>
//                                         <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
//                                             <input type="color" value={newColorHex} onChange={e => setNewCHex(e.target.value)}
//                                                 style={{ width: 42, height: 36, borderRadius: 7, border: '1.5px solid var(--border)', cursor: 'pointer', padding: 2 }} />
//                                             <input className="ap-input" style={{ width: 95 }} type="text" value={newColorHex} onChange={e => setNewCHex(e.target.value)} />
//                                         </div>
//                                     </div>
//                                 )}
//                                 <button type="button" onClick={addColor} className="ap-btn ap-btn-primary ap-btn-sm" style={{ alignSelf: 'flex-end' }}>+ Add Color</button>
//                             </div>
//                             {colors.length === 0 ? (
//                                 <div className="ap-empty"><div className="ap-empty-ic">🎨</div>No colors yet. Add above or use quick presets below.</div>
//                             ) : (
//                                 <div className="ap-clist">
//                                     {colors.map((c, i) => (
//                                         <div key={i} className="ap-citem">
//                                             <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} className="ap-cswatch" />
//                                             <div className="ap-ctexts">
//                                                 <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Name" />
//                                                 <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" />
//                                             </div>
//                                             <div style={{ width: 22, height: 22, borderRadius: 22, background: c.hex, border: '1.5px solid rgba(0,0,0,0.1)', flexShrink: 0 }} />
//                                             <button type="button" onClick={() => rmColor(c.name)} className="ap-btn ap-btn-danger ap-btn-xs">✕</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             <div className="ap-div" />
//                             <label className="ap-label">Quick Presets</label>
//                             <div className="ap-presets">
//                                 {PRESETS.map((p, i) => {
//                                     const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
//                                     return (
//                                         <button key={i} type="button" className={`ap-ppill ${added ? 'on' : ''}`} onClick={() => addPreset(p)}>
//                                             <div className="ap-pdot" style={{ backgroundColor: p.hex }} />
//                                             {p.name}{added ? ' ✓' : ''}
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                         {/* ── SIZES — with validation, ref for scroll, shake on error ── */}
//                         <div className="ap-card" ref={sizeRef}>
//                             <div className="ap-card-head">
//                                 <div className="ap-card-head-l">
//                                     <div className="ap-card-icon">📐</div>
//                                     <div>
//                                         <div className="ap-card-title">
//                                             Sizes & Inventory
//                                             <span style={{ marginLeft: 7, background: 'var(--red)', color: '#fff', borderRadius: 10, padding: '1px 7px', fontSize: 10, fontWeight: 700, verticalAlign: 'middle' }}>
//                                                 Required
//                                             </span>
//                                         </div>
//                                         <div className="ap-card-sub">Minimum 1 size must be selected to save or publish</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* ── SIZE ERROR BANNER ── */}
//                             {sizeErr && (
//                                 <div className="ap-sz-err">
//                                     ⚠️ Please select at least one size — this is required before saving or publishing.
//                                 </div>
//                             )}
//                             {/* ── BASE / REFERENCE PRICE ── */}
//                             <div className="ap-field" style={{ marginBottom: 18 }}>
//                                 <label className="ap-label">Base Price (₹) <span className="req">*</span></label>
//                                 <input className={`ap-input ${price && (isNaN(+price) || +price <= 0) ? 'err' : ''}`}
//                                     type="number" placeholder="e.g. 499" min="0" step="0.01"
//                                     value={price} onChange={e => setPrice(e.target.value)} />
//                                 <div className="ap-price-info">
//                                     ℹ️ Enter the base price here. Each size can then auto-calculate its price using a multiplier (e.g. M = 1×, XL = 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : '—'}), or you can set a custom price per size by checking "Custom Price" on any size card.
//                                 </div>
//                             </div>
//                             {/* Size type selector */}
//                             <div style={{ marginBottom: 18 }}>
//                                 <label className="ap-label">Size System</label>
//                                 <div className="ap-rg">
//                                     <label className={`ap-rp ${sizeType === 'standard' ? 'on' : ''}`}>
//                                         <input type="radio" value="standard" checked={sizeType === 'standard'} onChange={() => setSizeType('standard')} />👕 Standard (XS–3XL)
//                                     </label>
//                                     <label className={`ap-rp ${sizeType === 'inch' ? 'on' : ''}`}>
//                                         <input type="radio" value="inch" checked={sizeType === 'inch'} onChange={() => setSizeType('inch')} />📏 Inch-Based
//                                     </label>
//                                 </div>
//                             </div>
//                             {/* STANDARD SIZES */}
//                             {sizeType === "standard" && (
//                                 <>
//                                     <div className={`ap-szgrid ${sizeCardShake ? 'sz-err-highlight' : ''}`}>
//                                         {Object.keys(stdSizes).map(k => {
//                                             const on = enabledSizes.includes(k);
//                                             const d = stdSizes[k];
//                                             return (
//                                                 <div key={k} className={`ap-szcard ${on ? 'on' : ''}`} onClick={() => !on && toggleSize(k)}>
//                                                     <div className="ap-szh">
//                                                         <input type="checkbox" checked={on} onChange={() => toggleSize(k)}
//                                                             onClick={e => e.stopPropagation()}
//                                                             style={{ accentColor: 'var(--ink)', cursor: 'pointer', width: 15, height: 15 }} />
//                                                         <span className="ap-szbadge">{k}</span>
//                                                         {on && d.stock > 0 && <span className="ap-badge ap-bg" style={{ fontSize: 9, padding: '1px 5px' }}>{d.stock}×</span>}
//                                                     </div>
//                                                     {on && (
//                                                         <div onClick={e => e.stopPropagation()}>
//                                                             <div className="ap-ckr">
//                                                                 <input type="checkbox" id={`cp-${k}`} checked={d.useCustomPrice} onChange={() => toggleCP(k)} />
//                                                                 <label htmlFor={`cp-${k}`}>Custom Price</label>
//                                                             </div>
//                                                             {d.useCustomPrice ? (
//                                                                 <div className="ap-szf">
//                                                                     <label>Price (₹)</label>
//                                                                     <input type="number" step="0.01" min="0" value={d.customPrice}
//                                                                         onChange={e => setSzF(k, 'customPrice', e.target.value)} placeholder="Price" />
//                                                                     <div className="ap-ptag">₹ {d.customPrice || '—'}</div>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div className="ap-szf">
//                                                                     <label>Multiplier ×{d.multiplier}</label>
//                                                                     <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier}
//                                                                         onChange={e => setSzF(k, 'multiplier', e.target.value)} />
//                                                                     <div className="ap-ptag">₹ {price ? calcP(d).toFixed(2) : '—'}</div>
//                                                                 </div>
//                                                             )}
//                                                             <div className="ap-szf">
//                                                                 <label>Stock</label>
//                                                                 <input type="number" min="0" value={d.stock}
//                                                                     onChange={e => setSzF(k, 'stock', e.target.value)} />
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                     {enabledSizes.length > 0 && (
//                                         <div style={{ marginTop: 14 }}>
//                                             <label className="ap-label">Selected Sizes</label>
//                                             <div className="ap-szsum">
//                                                 {enabledSizes.map(k => (
//                                                     <span key={k} className="ap-szpill">
//                                                         {k} · ₹{price ? calcP(stdSizes[k]).toFixed(2) : (stdSizes[k].customPrice || '—')} · {stdSizes[k].stock}×
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}
//                                     {/* Quick-select buttons */}
//                                     <div style={{ marginTop: 12, display: 'flex', gap: 7, flexWrap: 'wrap' }}>
//                                         <button type="button" className="ap-btn ap-btn-ghost ap-btn-xs"
//                                             onClick={() => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); toast.success('S/M/L/XL selected!'); }}>
//                                             Select S/M/L/XL
//                                         </button>
//                                         <button type="button" className="ap-btn ap-btn-ghost ap-btn-xs"
//                                             onClick={() => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); toast.success('All sizes selected!'); }}>
//                                             Select All
//                                         </button>
//                                         <button type="button" className="ap-btn ap-btn-ghost ap-btn-xs"
//                                             onClick={() => setEnabledSizes([])}>
//                                             Clear
//                                         </button>
//                                     </div>
//                                 </>
//                             )}
//                             {/* INCH SIZES */}
//                             {sizeType === "inch" && (
//                                 <>
//                                     <div className="ap-cadd">
//                                         <div className="ap-field" style={{ margin: 0 }}>
//                                             <label className="ap-label">Size Label</label>
//                                             <input className="ap-input" style={{ width: 105 }} type="text" placeholder="e.g. 14x14"
//                                                 value={niSize} onChange={e => setNiSize(e.target.value)} />
//                                         </div>
//                                         <div className="ap-field" style={{ margin: 0 }}>
//                                             <label className="ap-label">Stock</label>
//                                             <input className="ap-input" style={{ width: 70 }} type="number" min="0"
//                                                 value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} />
//                                         </div>
//                                         <div className="ap-ckr" style={{ alignSelf: 'flex-end', paddingBottom: 2 }}>
//                                             <input type="checkbox" id="ni-cp" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} />
//                                             <label htmlFor="ni-cp">Custom Price</label>
//                                         </div>
//                                         {niCustom
//                                             ? <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Price (₹)</label><input className="ap-input" style={{ width: 95 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></div>
//                                             : <div className="ap-field" style={{ margin: 0 }}><label className="ap-label">Multiplier</label><input className="ap-input" style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></div>
//                                         }
//                                         <button type="button" onClick={addInch} className="ap-btn ap-btn-primary ap-btn-sm" style={{ alignSelf: 'flex-end' }}>+ Add</button>
//                                     </div>
//                                     {inchSizes.length === 0 ? (
//                                         <div className="ap-empty"><div className="ap-empty-ic">📏</div>No sizes yet — add above</div>
//                                     ) : (
//                                         <div className="ap-icards">
//                                             {inchSizes.map((s, i) => (
//                                                 <div key={i} className="ap-icard">
//                                                     <div className="ap-ich">
//                                                         <span className="ap-il">{s.size}"</span>
//                                                         <button type="button" onClick={() => rmInch(s.size)} className="ap-btn ap-btn-danger ap-btn-xs">✕</button>
//                                                     </div>
//                                                     <div className="ap-ckr"><input type="checkbox" id={`ic-${i}`} checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} /><label htmlFor={`ic-${i}`}>Custom Price</label></div>
//                                                     {s.useCustomPrice
//                                                         ? <div className="ap-szf"><label>Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} /><div className="ap-ptag">₹ {s.customPrice || '—'}</div></div>
//                                                         : <div className="ap-szf"><label>Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} /><div className="ap-ptag">₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : '—'}</div></div>
//                                                     }
//                                                     <div className="ap-szf"><label>Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} /></div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                     {/* ═════ SIDEBAR ═════ */}
//                     <div>
//                         {/* ── SAVE / PUBLISH ── */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">🚀</div>
//                                 <div><div className="ap-card-title">Save & Publish</div><div className="ap-card-sub">Draft saves progress · Publish goes live</div></div>
//                             </div>
//                             <div className="ap-plbl">Completion: <strong>{progress}%</strong></div>
//                             <div className="ap-pbtrack"><div className="ap-pbfill" style={{ width: `${progress}%` }} /></div>
//                             <div style={{ marginTop: 14 }}>
//                                 <div className="ap-trow" onClick={() => setBestseller(p => !p)}>
//                                     <span className="ap-tlbl">⭐ Mark as Bestseller</span>
//                                     <div className={`ap-tsw ${bestseller ? 'on' : ''}`} />
//                                 </div>
//                             </div>
//                             {/* ── SAVE AS DRAFT (replaces "Preview Product Page") ── */}
//                             <button type="button"
//                                 className="ap-btn ap-btn-amber"
//                                 style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}
//                                 onClick={saveDraft} disabled={draftSaving}>
//                                 {draftSaving ? '⏳ Saving…' : '💾 Save as Draft'}
//                             </button>
//                             {/* Publish */}
//                             <button type="submit"
//                                 className="ap-btn ap-btn-primary"
//                                 style={{ width: '100%', justifyContent: 'center' }}
//                                 disabled={submitting}>
//                                 {submitting ? '⏳ Publishing…' : '🚀 Publish Now'}
//                             </button>
//                         </div>
//                         {/* ── PRICING ── */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">💰</div>
//                                 <div><div className="ap-card-title">Pricing</div></div>
//                             </div>
//                             <div className="ap-field">
//                                 <label className="ap-label">Sale / Discount Price (₹)</label>
//                                 <input className="ap-input" type="number" placeholder="0.00"
//                                     value={discountPrice} onChange={e => setDiscPrice(e.target.value)} />
//                                 <div className="ap-hint">Optional — shown as sale price to customers</div>
//                             </div>
//                             {discount && (
//                                 <div style={{ marginTop: 10, padding: '8px 12px', background: 'var(--green-bg)', border: '1px solid #86efac', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                     <span style={{ fontSize: 12.5, color: 'var(--green)', fontWeight: 600 }}>💸 Discount active</span>
//                                     <span className="ap-badge ap-bg">{discount}% off</span>
//                                 </div>
//                             )}
//                         </div>
//                         {/* ── LIVE SUMMARY ── */}
//                         <div className="ap-sb">
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
//                                 <div className="ap-card-icon">📊</div>
//                                 <div><div className="ap-card-title">Summary</div><div className="ap-card-sub">Real-time overview</div></div>
//                             </div>
//                             {[
//                                 ["Name", name || <span style={{ color: '#ccc', fontStyle: 'italic' }}>Not set</span>],
//                                 ["Category", `${category} › ${subCategory}`],
//                                 ["Base Price", price ? `₹${price}` : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Sale Price", discountPrice ? `₹${discountPrice}` : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Colors", colors.length > 0
//                                     ? <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'flex-end' }}>{colors.map((c, i) => <div key={i} title={c.name} style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, border: '1px solid rgba(0,0,0,0.1)' }} />)}</div>
//                                     : <span style={{ color: '#ccc' }}>—</span>],
//                                 ["Sizes", sizeType === 'standard'
//                                     ? (enabledSizes.length
//                                         ? enabledSizes.join(', ')
//                                         : <span style={{ color: 'var(--red)', fontSize: 11, fontWeight: 700 }}>⚠ Required</span>)
//                                     : (inchSizes.length
//                                         ? inchSizes.map(s => s.size).join(', ')
//                                         : <span style={{ color: 'var(--red)', fontSize: 11, fontWeight: 700 }}>⚠ Required</span>)],
//                                 ["Images", <span className={`ap-badge ${uploaded.length > 0 ? 'ap-bg' : 'ap-ba'}`}>{uploaded.length}/10 uploaded</span>],
//                                 ["Bestseller", bestseller ? <span className="ap-badge ap-bg">⭐ Yes</span> : <span className="ap-badge ap-ba">No</span>],
//                             ].map(([k, v], i) => (
//                                 <div key={i} className="ap-sr"><span className="ap-sk">{k}</span><span className="ap-sv">{v}</span></div>
//                             ))}
//                         </div>
//                         {/* ── QUICK ACTIONS ── */}
//                         <div className="ap-sb">
//                             <div style={{ marginBottom: 12 }}><div className="ap-card-title">⚡ Quick Actions</div></div>
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
//                                 {[
//                                     ["🎨 Add 4 basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added!`); }],
//                                     ["👕 Select S / M / L / XL", () => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); setSizeType('standard'); toast.success('S/M/L/XL selected!'); }],
//                                     ["✅ Select all sizes", () => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); setSizeType('standard'); toast.success('All sizes selected!'); }],
//                                     ["🗑 Clear all sizes", () => { setEnabledSizes([]); toast.info('Sizes cleared'); }],
//                                     ["🗑 Clear all colors", () => { setColors([]); toast.info('Colors cleared'); }],
//                                 ].map(([label, action], i) => (
//                                     <button key={i} type="button" className="ap-btn ap-btn-ghost ap-btn-sm"
//                                         style={{ width: '100%', justifyContent: 'flex-start' }} onClick={action}>{label}</button>
//                                 ))}
//                             </div>
//                         </div>
//                         {/* ── TIPS ── */}
//                         <div className="ap-sb" style={{ background: 'var(--blue-bg)', border: '1px solid #bfdbfe' }}>
//                             <div style={{ marginBottom: 10 }}><div className="ap-card-title" style={{ color: 'var(--blue)' }}>💡 Admin Tips</div></div>
//                             <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.5, color: 'var(--blue)', lineHeight: 1.8 }}>
//                                 <li>Drag & drop multiple images onto the drop zone</li>
//                                 <li>Click individual slots to upload one by one</li>
//                                 <li>Base price × multiplier = size's selling price</li>
//                                 <li>Enable "Custom Price" per size for fixed pricing</li>
//                                 <li><strong>Sizes are required</strong> — must select at least 1</li>
//                                 <li>Save Draft to continue editing later</li>
//                                 <li>Draft auto-saves basic fields every 2 seconds</li>
//                                 <li>Press Enter after typing a color name to add it</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//             {/* Lightbox */}
//             {lbOpen && uploaded.length > 0 && (
//                 <Lightbox
//                     imgs={uploaded}
//                     start={Math.min(lbIdx, uploaded.length - 1)}
//                     onClose={() => setLbOpen(false)}
//                 />
//             )}
//         </div>
//     );
// };
// export default Add;










// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { assets } from '../../assets/assets';
// import { backendUrl } from '../../App';
// import {
//     TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
//     TbX, TbPlus, TbTrash, TbCheck, TbAlertTriangle,
//     TbDeviceFloppy, TbRocket, TbRefresh, TbEye, TbChevronRight,
//     TbStar, TbInfoCircle, TbBolt, TbTag
// } from 'react-icons/tb';
// import { BiSolidCrown } from 'react-icons/bi';
// import { HiOutlineLightBulb } from 'react-icons/hi';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import { MdOutlineDragIndicator } from 'react-icons/md';

// /* ═══════════════════ CONSTANTS ═══════════════════ */
// const PRESETS = [
//     { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
//     { name: "Red", hex: "#EF4444" }, { name: "Navy Blue", hex: "#1E3A5F" },
//     { name: "Royal Blue", hex: "#3B82F6" }, { name: "Forest Green", hex: "#166534" },
//     { name: "Olive", hex: "#4D7C0F" }, { name: "Yellow", hex: "#EAB308" },
//     { name: "Pink", hex: "#EC4899" }, { name: "Lavender", hex: "#8B5CF6" },
//     { name: "Orange", hex: "#F97316" }, { name: "Brown", hex: "#92400E" },
//     { name: "Cream", hex: "#FFFDD0" }, { name: "Gray", hex: "#9CA3AF" },
//     { name: "Charcoal", hex: "#374151" }, { name: "Maroon", hex: "#7F1D1D" },
// ];

// const INIT_SIZES = {
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
//             if (e.key === 'Escape') onClose();
//             if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1));
//             if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1));
//         };
//         window.addEventListener('keydown', h);
//         return () => window.removeEventListener('keydown', h);
//     }, [imgs.length, onClose]);

//     return (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/88 backdrop-blur-sm" onClick={onClose}>
//             <div className="relative flex flex-col items-center gap-4 max-w-[90vw]" onClick={e => e.stopPropagation()}>
//                 <button onClick={onClose} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg hover:rotate-90 transition-transform z-10">
//                     <TbX size={14} className="text-gray-800" />
//                 </button>
//                 <img src={URL.createObjectURL(imgs[cur])} alt="" className="max-w-[80vw] max-h-[72vh] rounded-xl object-contain shadow-2xl" />
//                 {cur > 0 && <button onClick={() => setCur(p => p - 1)} className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronLeft size={22} /></button>}
//                 {cur < imgs.length - 1 && <button onClick={() => setCur(p => p + 1)} className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronRight size={22} /></button>}
//                 {imgs.length > 1 && (
//                     <div className="flex gap-2">
//                         {imgs.map((img, i) => <img key={i} src={URL.createObjectURL(img)} alt="" onClick={() => setCur(i)} className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${i === cur ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-75'}`} />)}
//                     </div>
//                 )}
//                 <p className="text-white/50 text-xs">{cur + 1} / {imgs.length} · Esc to close</p>
//             </div>
//         </div>
//     );
// };

// /* ═══════════════════ DRAFT PAGE ═══════════════════ */
// const DraftPage = ({ formState, onContinue, onPublishNow, onNewProduct }) => {
//     const { name, description, price, detailedDescription, hasImages, hasColors, hasSizes } = formState;
//     const steps = [
//         { label: "Basic Info", done: !!(name?.trim() && description?.trim()), detail: name?.trim() ? `"${name.slice(0, 30)}…"` : "Required" },
//         { label: "Pricing", done: !!price, detail: price ? `₹${price}` : "Required" },
//         { label: "Product Images", done: !!hasImages, detail: hasImages ? "Uploaded" : "Add images" },
//         { label: "Color Variants", done: !!hasColors, detail: hasColors ? "Added" : "Add at least 1" },
//         { label: "Sizes & Inventory", done: !!hasSizes, detail: hasSizes ? "Configured" : "⚠ Required" },
//         { label: "Detailed Description", done: !!detailedDescription, detail: detailedDescription ? "Added" : "Optional" },
//     ];
//     const doneCount = steps.filter(s => s.done).length;
//     const pct = Math.round((doneCount / steps.length) * 100);
//     const canPublish = steps.slice(0, 5).every(s => s.done);

//     return (
//         <div className="fixed inset-0 z-50 bg-gray-50 flex items-center justify-center p-5 overflow-y-auto">
//             <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-10 max-w-[480px] w-full text-center">
//                 <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-5">
//                     <TbDeviceFloppy size={30} className="text-amber-500" />
//                 </div>
//                 <h2 className="text-[24px] font-extrabold text-gray-900 mb-2 tracking-tight">Draft Saved!</h2>
//                 <p className="text-[13.5px] text-gray-500 mb-7 leading-relaxed">Your listing is saved. Complete remaining steps before publishing.</p>

//                 {/* Progress */}
//                 <div className="mb-6 text-left">
//                     <div className="flex justify-between text-[12px] font-semibold text-gray-500 mb-2">
//                         <span>Listing Progress</span>
//                         <span className="text-gray-900">{doneCount}/{steps.length} · {pct}%</span>
//                     </div>
//                     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                         <div className="h-full bg-gray-900 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
//                     </div>
//                 </div>

//                 {/* Checklist */}
//                 <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-left mb-7">
//                     <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Checklist</p>
//                     <div className="space-y-2">
//                         {steps.map((s, i) => (
//                             <div key={i} className={`flex items-center gap-3 py-1.5 border-b border-gray-100 last:border-0 ${s.done ? 'text-emerald-700' : 'text-gray-600'}`}>
//                                 <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? 'bg-emerald-500' : 'bg-gray-100 border border-gray-200'}`}>
//                                     {s.done && <TbCheck size={11} className="text-white" />}
//                                 </div>
//                                 <span className="flex-1 text-[12.5px] font-medium">{s.label}</span>
//                                 <span className={`text-[11px] font-bold ${s.done ? 'text-emerald-500' : 'text-gray-400'}`}>{s.done ? '✓ Done' : s.detail}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                     <button onClick={onContinue} className="w-full py-3 rounded-xl bg-gray-900 text-white text-[13.5px] font-semibold hover:bg-gray-800 transition-colors">
//                         Continue Editing
//                     </button>
//                     {canPublish && (
//                         <button onClick={onPublishNow} className="w-full py-3 rounded-xl bg-emerald-500 text-white text-[13.5px] font-semibold hover:bg-emerald-600 transition-colors">
//                             🚀 Publish Now
//                         </button>
//                     )}
//                     <button onClick={onNewProduct} className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-[13.5px] font-semibold hover:bg-gray-50 transition-colors">
//                         + Add Another Product
//                     </button>
//                 </div>
//                 <p className="text-[11px] text-gray-400 mt-4">Saved at {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
//             </div>
//         </div>
//     );
// };

// /* ═══════════════════ CARD WRAPPER ═══════════════════ */
// const Card = ({ icon, title, subtitle, badge, children, action }) => (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-5">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
//             <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">
//                     {icon}
//                 </div>
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

// /* ═══════════════════ FORM FIELD ═══════════════════ */
// const Field = ({ label, required, hint, children }) => (
//     <div className="mb-5 last:mb-0">
//         {label && (
//             <label className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
//                 {label} {required && <span className="text-red-500 text-sm">*</span>}
//             </label>
//         )}
//         {children}
//         {hint && <p className="text-[11.5px] text-gray-400 mt-1.5">{hint}</p>}
//     </div>
// );

// const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13.5px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all";
// const selectCls = inputCls + " appearance-none cursor-pointer bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=')] bg-no-repeat bg-[right_12px_center] pr-9";

// /* ═══════════════════ STEP INDICATOR ═══════════════════ */
// const Steps = ({ steps }) => (
//     <div className="bg-white border-b border-gray-100 px-6 py-0 flex items-center overflow-x-auto gap-0">
//         {steps.map(([num, label, done], i) => (
//             <React.Fragment key={num}>
//                 <div className={`flex items-center gap-2.5 py-4 px-2 flex-shrink-0 transition-opacity ${done ? 'opacity-100' : 'opacity-40'}`}>
//                     <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10.5px] font-bold flex-shrink-0 ${done ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}>
//                         {done ? <TbCheck size={11} /> : num}
//                     </div>
//                     <span className={`text-[12.5px] whitespace-nowrap ${done ? 'font-bold text-gray-900' : 'font-medium text-gray-500'}`}>{label}</span>
//                 </div>
//                 {i < steps.length - 1 && <TbChevronRight size={14} className="text-gray-200 flex-shrink-0 mx-1" />}
//             </React.Fragment>
//         ))}
//     </div>
// );

// /* ═══════════════════ MAIN ═══════════════════ */
// const Add = ({ token }) => {
//     const [images, setImages] = useState(Array(10).fill(null));
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [discountPrice, setDiscPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("");
//     const [bestseller, setBestseller] = useState(false);
//     const [detailedDescription, setDD] = useState("");
//     const [colors, setColors] = useState([]);
//     const [newColorName, setNewCName] = useState("");
//     const [newColorHex, setNewCHex] = useState("#000000");
//     const [colorMode, setColorMode] = useState("both");
//     const [sizeType, setSizeType] = useState("standard");
//     const [stdSizes, setStdSizes] = useState(INIT_SIZES);
//     const [enabledSizes, setEnabledSizes] = useState([]);
//     const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState("");
//     const [niMult, setNiMult] = useState(1.0);
//     const [niStock, setNiStock] = useState(0);
//     const [niPrice, setNiPrice] = useState("");
//     const [niCustom, setNiCustom] = useState(false);
//     const [lbOpen, setLbOpen] = useState(false);
//     const [lbIdx, setLbIdx] = useState(0);
//     const [dragging, setDragging] = useState(false);
//     const [valErrs, setValErrs] = useState([]);
//     const [draftNotif, setDraftNotif] = useState(false);
//     const [submitting, setSubmitting] = useState(false);
//     const [draftSaving, setDraftSaving] = useState(false);
//     const [showDraftPage, setShowDraftPage] = useState(false);
//     const [sizeErr, setSizeErr] = useState(false);
//     const [sizeCardShake, setSizeCardShake] = useState(false);
//     const dzRef = useRef(null);
//     const sizeRef = useRef(null);

//     const uploaded = images.filter(Boolean);
//     const hasSizes = sizeType === 'standard' ? enabledSizes.length > 0 : inchSizes.length > 0;
//     const discount = discountPrice && price && +discountPrice < +price ? Math.round((1 - discountPrice / price) * 100) : null;

//     const progress = Math.min(100, [
//         name.trim() ? 15 : 0, description.trim() ? 10 : 0, price ? 15 : 0,
//         uploaded.length > 0 ? 15 : 0, colors.length > 0 ? 15 : 0,
//         hasSizes ? 15 : 0, detailedDescription ? 8 : 0, (category && subCategory) ? 7 : 0,
//     ].reduce((a, b) => a + b, 0));

//     /* Auto-save */
//     useEffect(() => {
//         if (!name && !description && !price) return;
//         const t = setTimeout(() => {
//             try {
//                 localStorage.setItem('ap_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription }));
//                 setDraftNotif(true); setTimeout(() => setDraftNotif(false), 2500);
//             } catch { }
//         }, 2000);
//         return () => clearTimeout(t);
//     }, [name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription]);

//     useEffect(() => {
//         try {
//             const d = JSON.parse(localStorage.getItem('ap_draft') || '{}');
//             if (d.name) { setName(d.name || ''); setDescription(d.description || ''); setPrice(d.price || ''); setDiscPrice(d.discountPrice || ''); setCategory(d.category || 'Men'); setSubCategory(d.subCategory || 'Topwear'); setBestseller(d.bestseller || false); setDD(d.detailedDescription || ''); toast.info('💾 Draft restored', { autoClose: 2500 }); }
//         } catch { }
//     }, []);

//     /* Auto-set base price */
//     useEffect(() => {
//         let minPrice = null;
//         if (sizeType === 'standard' && enabledSizes.length > 0) {
//             const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
//             const sorted = [...enabledSizes].sort((a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b));
//             const d = stdSizes[sorted[0]];
//             if (d.useCustomPrice && d.customPrice) minPrice = parseFloat(d.customPrice);
//         } else if (sizeType === 'inch' && inchSizes.length > 0) {
//             const sorted = [...inchSizes].sort((a, b) => { const n = s => Math.min(...(s.match(/\d+\.?\d*/g) || ['Infinity']).map(parseFloat)); return n(a.size) - n(b.size); });
//             if (sorted[0].useCustomPrice && sorted[0].customPrice) minPrice = parseFloat(sorted[0].customPrice);
//         }
//         if (minPrice && minPrice > 0 && minPrice.toString() !== price) setPrice(minPrice.toString());
//     }, [sizeType, enabledSizes, stdSizes, inchSizes]);

//     /* Image handlers */
//     const setImg = (i, f) => setImages(prev => { const n = [...prev]; n[i] = f; return n; });
//     const delImg = (i) => setImages(prev => { const n = [...prev]; n[i] = null; return n; });

//     const handleDragEnter = useCallback((e) => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
//     const handleDragOver = useCallback((e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy'; setDragging(true); }, []);
//     const handleDragLeave = useCallback((e) => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
//     const handleDrop = useCallback((e) => {
//         e.preventDefault(); e.stopPropagation(); setDragging(false);
//         const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
//         if (!files.length) { toast.error('Only image files'); return; }
//         let added = 0;
//         setImages(prev => { const next = [...prev]; files.forEach(f => { const s = next.findIndex(x => !x); if (s !== -1) { next[s] = f; added++; } }); return next; });
//         requestAnimationFrame(() => { if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); });
//     }, []);

//     /* Color handlers */
//     const addColor = () => {
//         if (colorMode !== "hexOnly" && !newColorName.trim()) return toast.error("Enter color name");
//         const c = { name: newColorName.trim() || `Color-${colors.length + 1}`, hex: newColorHex || '#808080' };
//         if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color already exists");
//         setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added!`);
//     };
//     const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = (p) => {
//         if (!colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())) { setColors([...colors, p]); toast.success(`${p.name} added!`); }
//         else toast.info(`${p.name} already added`);
//     };

//     /* Size handlers */
//     const toggleSize = (k) => { setSizeErr(false); setEnabledSizes(p => p.includes(k) ? p.filter(s => s !== k) : [...p, k]); };
//     const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v } }));
//     const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
//     const calcP = (d) => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;
//     const addInch = () => {
//         if (!niSize.trim()) return toast.error("Enter size");
//         if (inchSizes.some(s => s.size === niSize)) return toast.error("Size exists");
//         setSizeErr(false);
//         setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
//         setNiSize(""); setNiMult(1.0); setNiStock(0); setNiPrice(""); setNiCustom(false); toast.success("Size added!");
//     };
//     const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => {
//         const u = [...inchSizes];
//         if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice;
//         else if (f === 'stock') u[i].stock = parseInt(v) || 0;
//         else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1;
//         else u[i][f] = v;
//         setInchSizes(u);
//     };

//     const formatSizes = () => {
//         if (sizeType === "standard") return enabledSizes.map(k => {
//             const d = stdSizes[k]; const obj = { size: k, priceMultiplier: d.multiplier, stock: d.stock };
//             if (d.useCustomPrice) { const v = d.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${k}`); throw new Error("bad"); } obj.customPrice = +v; obj.useCustomPrice = true; }
//             return obj;
//         });
//         return inchSizes.map(s => {
//             const obj = { size: s.size, priceMultiplier: s.multiplier, stock: s.stock };
//             if (s.useCustomPrice) { const v = s.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${s.size}`); throw new Error("bad"); } obj.customPrice = +v; obj.useCustomPrice = true; }
//             return obj;
//         });
//     };

//     const validate = (isDraft = false) => {
//         const errs = [];
//         if (!name.trim()) errs.push("Product name is required");
//         if (!description.trim()) errs.push("Short description is required");
//         if (!hasSizes) { errs.push("At least one size must be selected"); setSizeErr(true); setSizeCardShake(true); setTimeout(() => setSizeCardShake(false), 600); setTimeout(() => sizeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100); }
//         if (!isDraft) {
//             if (!price || isNaN(+price) || +price <= 0) errs.push("Base price is required");
//             if (!uploaded.length) errs.push("At least one product image is required");
//             if (!colors.length) errs.push("Add at least one color variant");
//         }
//         return errs;
//     };

//     const saveDraft = async () => {
//         const errs = validate(true);
//         if (errs.length) { setValErrs(errs); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
//         setValErrs([]); setDraftSaving(true);
//         try {
//             localStorage.setItem('ap_full_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription, sizesCount: hasSizes ? (sizeType === 'standard' ? enabledSizes.length : inchSizes.length) : 0, colorsCount: colors.length, imagesCount: uploaded.length, savedAt: new Date().toISOString() }));
//             toast.success('💾 Draft saved!'); setShowDraftPage(true);
//         } catch { toast.error("Failed to save draft"); }
//         finally { setDraftSaving(false); }
//     };

//     const onSubmit = async (e) => {
//         e?.preventDefault();
//         const errs = validate(false);
//         if (errs.length) { setValErrs(errs); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
//         setValErrs([]); setSubmitting(true);
//         try {
//             const fd = new FormData();
//             fd.append("name", name.trim()); fd.append("description", description.trim()); fd.append("detailedDescription", detailedDescription);
//             fd.append("price", price); fd.append("discountPrice", discountPrice || ""); fd.append("category", category); fd.append("subCategory", subCategory);
//             fd.append("bestseller", bestseller); fd.append("sizes", JSON.stringify(formatSizes())); fd.append("color", JSON.stringify(colors));
//             images.forEach(img => { if (img) fd.append("images", img); });
//             const res = await axios.post(`${backendUrl}/api/product/add`, fd, { headers: { token } });
//             if (res.data.success) { toast.success("🎉 Product published!"); try { localStorage.removeItem('ap_draft'); localStorage.removeItem('ap_full_draft'); } catch { } resetForm(); }
//             else toast.error(res.data.message || "Failed to publish");
//         } catch (err) { if (err.message !== "bad") toast.error(err.response?.data?.message || "Something went wrong"); }
//         finally { setSubmitting(false); }
//     };

//     const resetForm = () => {
//         setName(""); setDescription(""); setDD(""); setPrice(""); setDiscPrice(""); setColors([]); setEnabledSizes([]); setStdSizes(INIT_SIZES);
//         setInchSizes([]); setImages(Array(10).fill(null)); setSizeType("standard"); setCategory("Men"); setSubCategory(""); setBestseller(false); setValErrs([]); setSizeErr(false); setShowDraftPage(false);
//     };

//     const clearAll = () => { resetForm(); try { localStorage.removeItem('ap_draft'); } catch { } toast.success("Form cleared"); };

//     const draftFormState = { name, description, price, detailedDescription, hasImages: uploaded.length > 0, hasColors: colors.length > 0, hasSizes };

//     /* ── Draft Page ── */
//     if (showDraftPage) return <DraftPage formState={draftFormState} onContinue={() => setShowDraftPage(false)} onPublishNow={() => { setShowDraftPage(false); setTimeout(() => onSubmit(), 100); }} onNewProduct={() => resetForm()} />;

//     /* ══════════════════════════════════
//        RENDER
//     ══════════════════════════════════ */
//     return (
//         <div className="min-h-screen bg-[#f7f7f5]">
//             <style>{`
//         @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
//         .shake { animation: shake 0.4s ease; }
//         .ql-container { font-size: 14px; border-radius: 0 0 12px 12px !important; border-color: #e5e7eb !important; }
//         .ql-toolbar { border-radius: 12px 12px 0 0 !important; border-color: #e5e7eb !important; background: #f9fafb; }
//         .ql-editor { min-height: 160px; font-family: inherit; }
//       `}</style>

//             {/* ── TOP BAR ── */}
//             <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 flex items-center justify-between shadow-sm h-16">
//                 <div className="flex items-center gap-3">
//                     <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
//                         <TbPackage size={18} className="text-white" />
//                     </div>
//                     <div>
//                         <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Add Product</h1>
//                         <p className="text-[11px] text-gray-400 mt-0.5">{progress}% complete</p>
//                     </div>
//                     {draftNotif && (
//                         <span className="ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[11px] font-semibold">
//                             <TbDeviceFloppy size={12} /> Auto-saved
//                         </span>
//                     )}
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button type="button" onClick={clearAll} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                         <TbTrash size={14} /> <span className="hidden sm:inline">Clear</span>
//                     </button>
//                     <button type="button" onClick={saveDraft} disabled={draftSaving} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-[13px] font-semibold hover:bg-amber-100 transition-colors disabled:opacity-60">
//                         <TbDeviceFloppy size={14} /> <span className="hidden sm:inline">{draftSaving ? 'Saving…' : 'Save Draft'}</span>
//                     </button>
//                     <button type="button" onClick={onSubmit} disabled={submitting} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-60">
//                         <TbRocket size={14} /> <span>{submitting ? 'Publishing…' : 'Publish'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* ── STEPS ── */}
//             <Steps steps={[
//                 ['1', 'Basic Info', !!(name && description)],
//                 ['2', 'Pricing', !!price],
//                 ['3', 'Media', uploaded.length > 0],
//                 ['4', 'Colors', colors.length > 0],
//                 ['5', 'Sizes', hasSizes],
//             ]} />

//             {/* ── PROGRESS BAR ── */}
//             <div className="h-1 bg-gray-100">
//                 <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }} />
//             </div>

//             <form onSubmit={onSubmit}>
//                 <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 p-6 max-w-[1400px] items-start">

//                     {/* ══════════════ LEFT COLUMN ══════════════ */}
//                     <div>

//                         {/* Validation errors */}
//                         {valErrs.length > 0 && (
//                             <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-5">
//                                 <div className="flex items-center gap-2 mb-2">
//                                     <TbAlertTriangle size={16} className="text-red-500 flex-shrink-0" />
//                                     <h4 className="text-[13px] font-bold text-red-700">Please fix before continuing:</h4>
//                                 </div>
//                                 <ul className="space-y-1 pl-6">
//                                     {valErrs.map((e, i) => <li key={i} className="text-[12.5px] text-red-600 list-disc">{e}</li>)}
//                                 </ul>
//                             </div>
//                         )}

//                         {/* ── BASIC INFO ── */}
//                         <Card icon={<TbPackage size={18} />} title="Basic Information" subtitle="Name, description & category">
//                             <Field label="Product Name" required>
//                                 <div className="relative">
//                                     <input className={inputCls + (name.length > 90 ? ' border-red-400 bg-red-50' : '')} type="text" maxLength={100} placeholder="e.g. Classic Oxford Cotton Shirt" value={name} onChange={e => setName(e.target.value)} />
//                                     <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${name.length > 80 ? 'text-amber-500' : 'text-gray-400'}`}>{name.length}/100</span>
//                                 </div>
//                             </Field>

//                             <Field label="Short Description" required>
//                                 <div className="relative">
//                                     <textarea className={inputCls + " resize-y min-h-[90px] " + (description.length > 280 ? 'border-red-400 bg-red-50' : '')} maxLength={300} placeholder="Compelling product description…" value={description} onChange={e => setDescription(e.target.value)} />
//                                     <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${description.length > 240 ? 'text-amber-500' : 'text-gray-400'}`}>{description.length}/300</span>
//                                 </div>
//                             </Field>

//                             {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                                 <Field label="Category">
//                                     <select className={selectCls} value={category} onChange={e => { setCategory(e.target.value); setSubCategory(e.target.value === 'Others' ? 'Cushion Cover' : 'Topwear'); }}>
//                                         <option>Men</option><option>Women</option><option>Others</option>
//                                     </select>
//                                 </Field>
//                                 <Field label="Sub Category">
//                                     <select className={selectCls} value={subCategory} onChange={e => setSubCategory(e.target.value)}>
//                                         {category === "Others"
//                                             ? <><option>Cushion Cover</option><option>Aprons</option><option>Desk Mat</option><option>Pillow</option><option>Chair Cover</option></>
//                                             : <><option>Topwear</option><option>Bottomwear</option><option>Winterwear</option></>}
//                                     </select>
//                                 </Field>
//                                 <Field label="SKU / Code" hint="Optional — auto-generated if blank">
//                                     <input className={inputCls} type="text" placeholder="Auto-generated" />
//                                 </Field>
//                             </div> */}

//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

//                                 <Field label="Category">
//                                     <select
//                                         className={selectCls}
//                                         value={category}
//                                         onChange={(e) => {
//                                             setCategory(e.target.value)
//                                         }}
//                                     >
//                                         <option value="Men">Men</option>
//                                         <option value="Women">Women</option>
//                                         <option value="Others">Others</option>
//                                         <option value="Leather Pillow Cover">Leather Pillow Cover</option>
//                                         <option value="Sofa Headrest">Sofa Headrest</option>
//                                         <option value="Leather Desk Pad">Leather Desk Pad</option>
//                                         <option value="Men Leather Apron">Men Leather Apron</option>
//                                     </select>
//                                 </Field>


//                                 <Field label="Sub Category">
//                                     <select
//                                         className={selectCls}
//                                         value={subCategory}
//                                         onChange={(e) => setSubCategory(e.target.value)}
//                                     >

//                                         {/* MEN */}
//                                         {category === "Men" && (
//                                             <>
//                                                 <option value="Jackets">Jackets</option>
//                                                 <option value="Bomber Biker Jacket">Bomber Biker Jacket</option>
//                                                 <option value="Moto Biker Jacket">Moto Biker Jacket</option>
//                                                 <option value="Racing Coat">Racing Coat</option>
//                                                 <option value="Leather Coats">Leather Coats</option>
//                                                 <option value="Men Winter Wear">Men Winter Wear</option>
//                                             </>
//                                         )}

//                                         {/* WOMEN */}
//                                         {category === "Women" && (
//                                             <>
//                                                 <option value="Jackets">Jackets</option>
//                                                 <option value="Bomber Biker Jacket">Bomber Biker Jacket</option>
//                                                 <option value="Moto Biker Jacket">Moto Biker Jacket</option>
//                                                 <option value="Racing Coat">Racing Coat</option>
//                                                 <option value="Women Winter Wear">Women Winter Wear</option>
//                                                 <option value="Women Night Dress">Women Night Dress</option>
//                                                 <option value="Leather Pencil Skirt">Leather Pencil Skirt</option>
//                                                 <option value="Leather Full Skirt">Leather Full Skirt</option>
//                                                 <option value="Slim Bodycon Skirt">Slim Bodycon Skirt</option>
//                                             </>
//                                         )}

//                                         {/* OTHERS */}
//                                         {category === "Others" && (
//                                             <>
//                                                 <option value="Pillow">Pillow</option>
//                                                 <option value="Cushion Cover">Cushion Cover</option>
//                                                 <option value="Aprons">Aprons</option>
//                                                 <option value="Desk Mat">Desk Mat</option>
//                                                 <option value="Chair Cover">Chair Cover</option>
//                                             </>
//                                         )}

//                                         {category === "Leather Pillow Cover" && (
//                                             <>
//                                                 <option value="Cylindrical Pillow Cover">Cylindrical Pillow Cover</option>
//                                                 <option value="Square Pillow Cover">Square Pillow Cover</option>
//                                                 <option value="Rectangle Pillow Cover">Rectangle Pillow Cover</option>
//                                                 <option value="Round Pillow Cover">Round Pillow Cover</option>
//                                                 <option value="Ear Hole Pillow Cushion Cover">Ear Hole Pillow Cushion Cover</option>
//                                             </>
//                                         )}

//                                         {category === "Sofa Headrest" && (
//                                             <>
//                                                 <option value="Recliner Chair Headrest Cover">Recliner Chair Headrest Cover</option>
//                                             </>
//                                         )}

//                                         {category === "Leather Desk Pad" && (
//                                             <>
//                                                 <option value="Leather Desk Mat">Leather Desk Mat</option>
//                                             </>
//                                         )}

//                                         {category === "Men Leather Apron" && (
//                                             <>
//                                                 <option value="Apron">Apron</option>
//                                             </>
//                                         )}

//                                     </select>
//                                 </Field>


//                                 <Field label="SKU / Code" hint="Optional — auto-generated if blank">
//                                     <input
//                                         className={inputCls}
//                                         type="text"
//                                         placeholder="Auto-generated"
//                                     />
//                                 </Field>

//                             </div>

//                             <div className="border-t border-gray-100 pt-5 mt-1">
//                                 <Field label="Detailed Description" hint="Shown on product detail page. Add specs, care instructions, materials.">
//                                     <ReactQuill theme="snow" value={detailedDescription} onChange={setDD} />
//                                 </Field>
//                             </div>
//                         </Card>

//                         {/* ── MEDIA ── */}
//                         <Card
//                             icon={<TbPhoto size={18} />}
//                             title="Product Images"
//                             subtitle={`${uploaded.length}/10 uploaded`}
//                             action={uploaded.length > 0 && (
//                                 <button type="button" onClick={() => { setLbIdx(0); setLbOpen(true); }}
//                                     className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                                     <TbEye size={13} /> View All
//                                 </button>
//                             )}
//                         >
//                             {/* Drop Zone */}
//                             <div
//                                 ref={dzRef}
//                                 className={`relative rounded-2xl border-2 border-dashed text-center p-8 mb-4 transition-all duration-200 cursor-pointer
//                   ${dragging ? 'border-indigo-500 bg-indigo-50 scale-[1.01]' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
//                                 onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
//                             >
//                                 <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${dragging ? 'bg-indigo-100' : 'bg-gray-100'}`}>
//                                     <TbPhoto size={24} className={dragging ? 'text-indigo-500' : 'text-gray-400'} />
//                                 </div>
//                                 <p className="text-[14px] font-semibold text-gray-700 mb-1">{dragging ? 'Drop your images here!' : 'Drag & drop images here'}</p>
//                                 <p className="text-[12px] text-gray-400">or click to upload · PNG, JPG, WEBP · 800×800px recommended</p>
//                                 {!dragging && (
//                                     <input type="file" accept="image/*" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-[0]"
//                                         onChange={e => {
//                                             const files = Array.from(e.target.files); let added = 0;
//                                             setImages(prev => { const next = [...prev]; files.forEach(f => { const s = next.findIndex(x => !x); if (s !== -1) { next[s] = f; added++; } }); return next; });
//                                             e.target.value = '';
//                                             requestAnimationFrame(() => { if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); });
//                                         }}
//                                     />
//                                 )}
//                             </div>

//                             {/* Image Slots */}
//                             <div className="grid grid-cols-5 gap-2.5">
//                                 {images.map((img, i) => (
//                                     <div key={i} className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all group
//                     ${img ? (i === 0 ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-transparent') : 'border-dashed border-gray-200 bg-gray-50 hover:border-gray-300 cursor-pointer'}`}>
//                                         {img ? (
//                                             <>
//                                                 <img src={URL.createObjectURL(img)} alt="" className="w-full h-full object-cover" />
//                                                 {i === 0 && <span className="absolute top-1.5 left-1.5 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md">MAIN</span>}
//                                                 <span className="absolute top-1.5 right-1.5 bg-black/50 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md">{i + 1}</span>
//                                                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5">
//                                                     <button type="button" className="bg-white text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-gray-100 transition-colors"
//                                                         onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLbIdx(uploaded.indexOf(img)); setLbOpen(true); }}>🔍 View</button>
//                                                     <button type="button" className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-red-600 transition-colors"
//                                                         onMouseDown={e => { e.preventDefault(); e.stopPropagation(); delImg(i); }}>✕ Remove</button>
//                                                 </div>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <div className="flex flex-col items-center justify-center h-full">
//                                                     <TbPlus size={16} className="text-gray-300 mb-0.5" />
//                                                     <span className="text-[9px] text-gray-300 font-medium">{i + 1}</span>
//                                                 </div>
//                                                 <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0]"
//                                                     onChange={e => { if (e.target.files[0]) setImg(i, e.target.files[0]); e.target.value = ''; }} />
//                                             </>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                             <p className="text-[11.5px] text-gray-400 mt-3">First slot = main thumbnail. Hover any image to view or remove.</p>
//                         </Card>

//                         {/* ── COLORS ── */}
//                         <Card
//                             icon={<TbPalette size={18} />}
//                             title="Color Variants"
//                             subtitle="Add available colors"
//                             badge={colors.length > 0 && <span className="px-2 py-0.5 rounded-full bg-gray-900 text-white text-[10px] font-bold">{colors.length}</span>}
//                         >
//                             {/* Mode */}
//                             <Field label="Input Mode">
//                                 <div className="flex gap-2 flex-wrap">
//                                     {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
//                                         <button key={v} type="button" onClick={() => setColorMode(v)}
//                                             className={`px-3.5 py-2 rounded-xl text-[12.5px] font-semibold border transition-all ${colorMode === v ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}>
//                                             {l}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </Field>

//                             {/* Add Color Row */}
//                             <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
//                                 {(colorMode === "both" || colorMode === "nameOnly") && (
//                                     <Field label="Name">
//                                         <input className={inputCls} style={{ width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newColorName} onChange={e => setNewCName(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} />
//                                     </Field>
//                                 )}
//                                 {(colorMode === "both" || colorMode === "hexOnly") && (
//                                     <Field label="Color">
//                                         <div className="flex gap-2 items-center">
//                                             <input type="color" value={newColorHex} onChange={e => setNewCHex(e.target.value)} className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-1" />
//                                             <input className={inputCls} style={{ width: 100 }} type="text" value={newColorHex} onChange={e => setNewCHex(e.target.value)} />
//                                         </div>
//                                     </Field>
//                                 )}
//                                 <button type="button" onClick={addColor} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
//                                     <TbPlus size={14} /> Add
//                                 </button>
//                             </div>

//                             {/* Color List */}
//                             {colors.length === 0 ? (
//                                 <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl mb-4">
//                                     <TbPalette size={28} className="text-gray-200 mx-auto mb-2" />
//                                     <p className="text-[13px] text-gray-400 font-medium">No colors yet</p>
//                                     <p className="text-[12px] text-gray-300">Add above or pick from presets below</p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-2 mb-4">
//                                     {colors.map((c, i) => (
//                                         <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors group">
//                                             <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} className="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer p-1 flex-shrink-0" />
//                                             <div className="flex-1 grid grid-cols-2 gap-2">
//                                                 <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Color name" className="text-[13px] font-medium text-gray-800 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 transition-colors" />
//                                                 <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" className="text-[12px] text-gray-400 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 font-mono transition-colors" />
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
//                                                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all
//                           ${added ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'}`}>
//                                                 <div className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0" style={{ background: p.hex }} />
//                                                 {p.name}{added ? ' ✓' : ''}
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </Card>

//                         {/* ── SIZES ── */}
//                         <Card
//                             icon={<TbRuler size={18} />}
//                             title="Sizes & Inventory"
//                             subtitle="Minimum 1 size required"
//                             badge={<span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[9px] font-bold uppercase tracking-wide">Required</span>}
//                         >
//                             {/* Size error */}
//                             {sizeErr && (
//                                 <div className="flex items-center gap-2.5 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-5 text-red-700">
//                                     <TbAlertTriangle size={16} className="flex-shrink-0" />
//                                     <span className="text-[12.5px] font-semibold">Please select at least one size — required before saving or publishing.</span>
//                                 </div>
//                             )}

//                             {/* Base Price */}
//                             <Field label="Base Price (₹)" required hint="">
//                                 <input className={inputCls + (price && (isNaN(+price) || +price <= 0) ? ' border-red-400 bg-red-50' : '')}
//                                     type="number" placeholder="e.g. 499" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} />
//                                 <div className="flex items-start gap-2 mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl text-[12px] text-blue-700">
//                                     <TbInfoCircle size={14} className="flex-shrink-0 mt-0.5" />
//                                     <span>Base price × multiplier = size's selling price. Example: XL at 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : '—'}. Enable "Custom Price" per size for fixed pricing.</span>
//                                 </div>
//                             </Field>

//                             {/* Size Type */}
//                             <Field label="Size System">
//                                 <div className="flex gap-2">
//                                     {[['standard', '👕 Standard (XS–3XL)'], ['inch', '📏 Inch-Based']].map(([v, l]) => (
//                                         <button key={v} type="button" onClick={() => setSizeType(v)}
//                                             className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${sizeType === v ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}>
//                                             {l}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </Field>

//                             {/* Standard Sizes */}
//                             {sizeType === "standard" && (
//                                 <>
//                                     <div ref={sizeRef} className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4 ${sizeCardShake ? 'shake' : ''}`}>
//                                         {Object.keys(stdSizes).map(k => {
//                                             const on = enabledSizes.includes(k);
//                                             const d = stdSizes[k];
//                                             return (
//                                                 <div key={k}
//                                                     className={`rounded-xl border-2 p-3.5 transition-all cursor-pointer
//                             ${on ? 'border-indigo-400 bg-indigo-50/30 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
//                                                     onClick={() => !on && toggleSize(k)}>
//                                                     <div className="flex items-center gap-2 mb-2">
//                                                         <input type="checkbox" checked={on} onChange={() => toggleSize(k)} onClick={e => e.stopPropagation()} className="w-4 h-4 rounded accent-indigo-600 cursor-pointer" />
//                                                         <span className={`text-[13px] font-extrabold px-2 py-0.5 rounded-md ${on ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{k}</span>
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
//                                                                     <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Price (₹)</label>
//                                                                     <input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, 'customPrice', e.target.value)} placeholder="Price" className="w-full mt-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                                     <span className="text-[10.5px] text-indigo-600 font-bold mt-1 block">₹ {d.customPrice || '—'}</span>
//                                                                 </div>
//                                                             ) : (
//                                                                 <div>
//                                                                     <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Multiplier ×{d.multiplier}</label>
//                                                                     <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, 'multiplier', e.target.value)} className="w-full mt-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                                     <span className="text-[10.5px] text-emerald-600 font-bold mt-1 block">₹ {price ? calcP(d).toFixed(2) : '—'}</span>
//                                                                 </div>
//                                                             )}
//                                                             <div>
//                                                                 <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Stock</label>
//                                                                 <input type="number" min="0" value={d.stock} onChange={e => setSzF(k, 'stock', e.target.value)} className="w-full mt-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>

//                                     {/* Selected summary */}
//                                     {enabledSizes.length > 0 && (
//                                         <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
//                                             {enabledSizes.map(k => (
//                                                 <span key={k} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-full text-[11.5px] font-semibold">
//                                                     {k} · ₹{price ? calcP(stdSizes[k]).toFixed(0) : (stdSizes[k].customPrice || '—')} · {stdSizes[k].stock}pcs
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     )}

//                                     {/* Quick select */}
//                                     <div className="flex gap-2 flex-wrap">
//                                         {[['S/M/L/XL', () => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); toast.success('S/M/L/XL selected!'); }],
//                                         ['All Sizes', () => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); toast.success('All selected!'); }],
//                                         ['Clear', () => setEnabledSizes([])]].map(([label, action]) => (
//                                             <button key={label} type="button" onClick={action} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//                                                 {label}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </>
//                             )}

//                             {/* Inch Sizes */}
//                             {sizeType === "inch" && (
//                                 <>
//                                     <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
//                                         <Field label="Size Label">
//                                             <input className={inputCls} style={{ width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} />
//                                         </Field>
//                                         <Field label="Stock">
//                                             <input className={inputCls} style={{ width: 75 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} />
//                                         </Field>
//                                         <label className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600 cursor-pointer pb-2.5">
//                                             <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} className="w-4 h-4 rounded accent-indigo-600 cursor-pointer" /> Custom Price
//                                         </label>
//                                         {niCustom
//                                             ? <Field label="Price (₹)"><input className={inputCls} style={{ width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></Field>
//                                             : <Field label="Multiplier"><input className={inputCls} style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></Field>
//                                         }
//                                         <button type="button" onClick={addInch} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
//                                             <TbPlus size={14} /> Add Size
//                                         </button>
//                                     </div>
//                                     {inchSizes.length === 0 ? (
//                                         <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl">
//                                             <TbRuler size={28} className="text-gray-200 mx-auto mb-2" />
//                                             <p className="text-[13px] text-gray-400">No inch sizes yet — add above</p>
//                                         </div>
//                                     ) : (
//                                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                                             {inchSizes.map((s, i) => (
//                                                 <div key={i} className="bg-white border border-gray-100 rounded-xl p-3.5">
//                                                     <div className="flex items-center justify-between mb-3">
//                                                         <span className="text-[14px] font-extrabold text-gray-900">{s.size}"</span>
//                                                         <button type="button" onClick={() => rmInch(s.size)} className="w-6 h-6 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100">
//                                                             <TbX size={11} />
//                                                         </button>
//                                                     </div>
//                                                     <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 mb-2 cursor-pointer">
//                                                         <input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} className="w-3.5 h-3.5 rounded accent-indigo-600" /> Custom Price
//                                                     </label>
//                                                     {s.useCustomPrice
//                                                         ? <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                         : <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                     }
//                                                     <div><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
//                                                     <span className="text-[10.5px] text-emerald-600 font-bold mt-1.5 block">₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : '—'}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </Card>
//                     </div>

//                     {/* ══════════════ SIDEBAR ══════════════ */}
//                     <div className="space-y-4">

//                         {/* Publish Card */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
//                                     <TbRocket size={18} className="text-indigo-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-[13.5px] font-bold text-gray-900">Save & Publish</p>
//                                     <p className="text-[11px] text-gray-400">Draft saves · Publish goes live</p>
//                                 </div>
//                             </div>

//                             {/* Progress */}
//                             <div className="mb-4">
//                                 <div className="flex justify-between text-[11.5px] font-semibold text-gray-500 mb-1.5">
//                                     <span>Completion</span><span className="text-gray-900">{progress}%</span>
//                                 </div>
//                                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                                     <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
//                                 </div>
//                             </div>

//                             {/* Bestseller toggle */}
//                             <button type="button" onClick={() => setBestseller(p => !p)}
//                                 className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border mb-4 transition-all ${bestseller ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-100 hover:border-gray-200'}`}>
//                                 <div className="flex items-center gap-2">
//                                     <TbStar size={15} className={bestseller ? 'text-amber-500' : 'text-gray-400'} />
//                                     <span className="text-[13px] font-semibold text-gray-700">Mark as Bestseller</span>
//                                 </div>
//                                 <div className={`w-10 h-5.5 rounded-full relative transition-colors ${bestseller ? 'bg-amber-400' : 'bg-gray-200'}`} style={{ height: '22px' }}>
//                                     <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${bestseller ? 'translate-x-[22px]' : 'translate-x-0.5'}`} />
//                                 </div>
//                             </button>

//                             <button type="button" onClick={saveDraft} disabled={draftSaving}
//                                 className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-[13px] font-semibold hover:bg-amber-100 transition-colors mb-2.5 disabled:opacity-60">
//                                 <TbDeviceFloppy size={15} /> {draftSaving ? 'Saving…' : 'Save as Draft'}
//                             </button>
//                             <button type="submit" disabled={submitting}
//                                 className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-60">
//                                 <TbRocket size={15} /> {submitting ? 'Publishing…' : 'Publish Now'}
//                             </button>
//                         </div>

//                         {/* Pricing */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
//                                     <TbTag size={16} className="text-emerald-600" />
//                                 </div>
//                                 <p className="text-[13.5px] font-bold text-gray-900">Pricing</p>
//                             </div>
//                             <Field label="Sale / Discount Price (₹)" hint="Optional — shown as sale price">
//                                 <input className={inputCls} type="number" placeholder="0.00" value={discountPrice} onChange={e => setDiscPrice(e.target.value)} />
//                             </Field>
//                             {discount && (
//                                 <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
//                                     <span className="text-[12.5px] font-semibold text-emerald-700">💸 Discount active</span>
//                                     <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">{discount}% off</span>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Summary */}
//                         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
//                             <div className="flex items-center gap-2.5 mb-4">
//                                 <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
//                                     <TbChartBar size={16} className="text-indigo-600" />
//                                 </div>
//                                 <p className="text-[13.5px] font-bold text-gray-900">Live Summary</p>
//                             </div>
//                             <div className="space-y-2">
//                                 {[
//                                     ["Name", name || <span className="text-gray-300 italic text-[12px]">Not set</span>],
//                                     ["Category", `${category} › ${subCategory}`],
//                                     ["Base Price", price ? <span className="font-bold text-gray-900">₹{price}</span> : <span className="text-gray-300">—</span>],
//                                     ["Sale Price", discountPrice ? <span className="text-emerald-600 font-bold">₹{discountPrice}</span> : <span className="text-gray-300">—</span>],
//                                     ["Colors", colors.length > 0
//                                         ? <div className="flex gap-1 flex-wrap justify-end">{colors.map((c, i) => <div key={i} title={c.name} className="w-4 h-4 rounded-full border border-black/10" style={{ background: c.hex }} />)}</div>
//                                         : <span className="text-gray-300">—</span>],
//                                     ["Sizes", sizeType === 'standard'
//                                         ? (enabledSizes.length ? <span className="font-semibold">{enabledSizes.join(', ')}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>)
//                                         : (inchSizes.length ? <span className="font-semibold">{inchSizes.map(s => s.size).join(', ')}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>)],
//                                     ["Images", <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${uploaded.length > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{uploaded.length}/10</span>],
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
//                                 <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center">
//                                     <TbBolt size={16} className="text-violet-600" />
//                                 </div>
//                                 <p className="text-[13.5px] font-bold text-gray-900">Quick Actions</p>
//                             </div>
//                             <div className="space-y-2">
//                                 {[
//                                     ["🎨 Add 4 basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added!`); }],
//                                     ["👕 Select S / M / L / XL", () => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); setSizeType('standard'); toast.success('S/M/L/XL selected!'); }],
//                                     ["✅ Select all sizes", () => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); setSizeType('standard'); toast.success('All sizes selected!'); }],
//                                     ["🗑 Clear all sizes", () => { setEnabledSizes([]); toast.info('Sizes cleared'); }],
//                                     ["🗑 Clear all colors", () => { setColors([]); toast.info('Colors cleared'); }],
//                                 ].map(([label, action]) => (
//                                     <button key={label} type="button" onClick={action}
//                                         className="w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-all">
//                                         {label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Tips */}
//                         <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
//                             <div className="flex items-center gap-2.5 mb-3">
//                                 <HiOutlineLightBulb size={18} className="text-indigo-500 flex-shrink-0" />
//                                 <p className="text-[13px] font-bold text-indigo-800">Admin Tips</p>
//                             </div>
//                             <ul className="space-y-1.5">
//                                 {['Drag & drop multiple images onto the drop zone', 'Base price × multiplier = size\'s selling price', 'Enable "Custom Price" per size for fixed pricing', 'Sizes are required — select at least 1', 'Draft auto-saves basic fields every 2 seconds', 'Press Enter after typing a color name to add it'].map((tip, i) => (
//                                     <li key={i} className="flex items-start gap-2 text-[12px] text-indigo-700">
//                                         <span className="text-indigo-400 mt-0.5 flex-shrink-0">·</span> {tip}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//             {/* Lightbox */}
//             {lbOpen && uploaded.length > 0 && <Lightbox imgs={uploaded} start={Math.min(lbIdx, uploaded.length - 1)} onClose={() => setLbOpen(false)} />}
//         </div>
//     );
// };

// export default Add;






import React, { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { assets } from '../../assets/assets';
import { backendUrl } from '../../App';
import {
    TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
    TbX, TbPlus, TbTrash, TbCheck, TbAlertTriangle,
    TbDeviceFloppy, TbRocket, TbRefresh, TbEye, TbChevronRight,
    TbStar, TbInfoCircle, TbBolt, TbTag
} from 'react-icons/tb';
import { BiSolidCrown } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdOutlineDragIndicator } from 'react-icons/md';

/* ═══════════════════ CONSTANTS ═══════════════════ */
const PRESETS = [
    { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#EF4444" }, { name: "Navy Blue", hex: "#1E3A5F" },
    { name: "Royal Blue", hex: "#3B82F6" }, { name: "Forest Green", hex: "#166534" },
    { name: "Olive", hex: "#4D7C0F" }, { name: "Yellow", hex: "#EAB308" },
    { name: "Pink", hex: "#EC4899" }, { name: "Lavender", hex: "#8B5CF6" },
    { name: "Orange", hex: "#F97316" }, { name: "Brown", hex: "#92400E" },
    { name: "Cream", hex: "#FFFDD0" }, { name: "Gray", hex: "#9CA3AF" },
    { name: "Charcoal", hex: "#374151" }, { name: "Maroon", hex: "#7F1D1D" },
];

const INIT_SIZES = {
    XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
    L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
    XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
    XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
    "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
};

// ✅ FIX 1: Centralized map — category → first default subCategory
// This ensures when category changes, subCategory is always auto-set to first valid option
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
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1));
            if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1));
        };
        window.addEventListener('keydown', h);
        return () => window.removeEventListener('keydown', h);
    }, [imgs.length, onClose]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/88 backdrop-blur-sm" onClick={onClose}>
            <div className="relative flex flex-col items-center gap-4 max-w-[90vw]" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg hover:rotate-90 transition-transform z-10">
                    <TbX size={14} className="text-gray-800" />
                </button>
                <img src={URL.createObjectURL(imgs[cur])} alt="" className="max-w-[80vw] max-h-[72vh] rounded-xl object-contain shadow-2xl" />
                {cur > 0 && <button onClick={() => setCur(p => p - 1)} className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronLeft size={22} /></button>}
                {cur < imgs.length - 1 && <button onClick={() => setCur(p => p + 1)} className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"><FiChevronRight size={22} /></button>}
                {imgs.length > 1 && (
                    <div className="flex gap-2">
                        {imgs.map((img, i) => <img key={i} src={URL.createObjectURL(img)} alt="" onClick={() => setCur(i)} className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${i === cur ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-75'}`} />)}
                    </div>
                )}
                <p className="text-white/50 text-xs">{cur + 1} / {imgs.length} · Esc to close</p>
            </div>
        </div>
    );
};

/* ═══════════════════ DRAFT PAGE ═══════════════════ */
const DraftPage = ({ formState, onContinue, onPublishNow, onNewProduct }) => {
    const { name, description, price, detailedDescription, hasImages, hasColors, hasSizes } = formState;
    const steps = [
        { label: "Basic Info", done: !!(name?.trim() && description?.trim()), detail: name?.trim() ? `"${name.slice(0, 30)}…"` : "Required" },
        { label: "Pricing", done: !!price, detail: price ? `₹${price}` : "Required" },
        { label: "Product Images", done: !!hasImages, detail: hasImages ? "Uploaded" : "Add images" },
        { label: "Color Variants", done: !!hasColors, detail: hasColors ? "Added" : "Add at least 1" },
        { label: "Sizes & Inventory", done: !!hasSizes, detail: hasSizes ? "Configured" : "⚠ Required" },
        { label: "Detailed Description", done: !!detailedDescription, detail: detailedDescription ? "Added" : "Optional" },
    ];
    const doneCount = steps.filter(s => s.done).length;
    const pct = Math.round((doneCount / steps.length) * 100);
    const canPublish = steps.slice(0, 5).every(s => s.done);

    return (
        <div className="fixed inset-0 z-50 bg-gray-50 flex items-center justify-center p-5 overflow-y-auto">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-10 max-w-[480px] w-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-5">
                    <TbDeviceFloppy size={30} className="text-amber-500" />
                </div>
                <h2 className="text-[24px] font-extrabold text-gray-900 mb-2 tracking-tight">Draft Saved!</h2>
                <p className="text-[13.5px] text-gray-500 mb-7 leading-relaxed">Your listing is saved. Complete remaining steps before publishing.</p>
                <div className="mb-6 text-left">
                    <div className="flex justify-between text-[12px] font-semibold text-gray-500 mb-2">
                        <span>Listing Progress</span>
                        <span className="text-gray-900">{doneCount}/{steps.length} · {pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-900 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-left mb-7">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Checklist</p>
                    <div className="space-y-2">
                        {steps.map((s, i) => (
                            <div key={i} className={`flex items-center gap-3 py-1.5 border-b border-gray-100 last:border-0 ${s.done ? 'text-emerald-700' : 'text-gray-600'}`}>
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? 'bg-emerald-500' : 'bg-gray-100 border border-gray-200'}`}>
                                    {s.done && <TbCheck size={11} className="text-white" />}
                                </div>
                                <span className="flex-1 text-[12.5px] font-medium">{s.label}</span>
                                <span className={`text-[11px] font-bold ${s.done ? 'text-emerald-500' : 'text-gray-400'}`}>{s.done ? '✓ Done' : s.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <button onClick={onContinue} className="w-full py-3 rounded-xl bg-gray-900 text-white text-[13.5px] font-semibold hover:bg-gray-800 transition-colors">
                        Continue Editing
                    </button>
                    {canPublish && (
                        <button onClick={onPublishNow} className="w-full py-3 rounded-xl bg-emerald-500 text-white text-[13.5px] font-semibold hover:bg-emerald-600 transition-colors">
                            🚀 Publish Now
                        </button>
                    )}
                    <button onClick={onNewProduct} className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-[13.5px] font-semibold hover:bg-gray-50 transition-colors">
                        + Add Another Product
                    </button>
                </div>
                <p className="text-[11px] text-gray-400 mt-4">Saved at {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </div>
    );
};

/* ═══════════════════ CARD WRAPPER ═══════════════════ */
const Card = ({ icon, title, subtitle, badge, children, action }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-5">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">
                    {icon}
                </div>
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

/* ═══════════════════ FORM FIELD ═══════════════════ */
const Field = ({ label, required, hint, children }) => (
    <div className="mb-5 last:mb-0">
        {label && (
            <label className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                {label} {required && <span className="text-red-500 text-sm">*</span>}
            </label>
        )}
        {children}
        {hint && <p className="text-[11.5px] text-gray-400 mt-1.5">{hint}</p>}
    </div>
);

const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13.5px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all";
const selectCls = inputCls + " appearance-none cursor-pointer bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=')] bg-no-repeat bg-[right_12px_center] pr-9";

/* ═══════════════════ STEP INDICATOR ═══════════════════ */
const Steps = ({ steps }) => (
    <div className="bg-white border-b border-gray-100 px-6 py-0 flex items-center overflow-x-auto gap-0">
        {steps.map(([num, label, done], i) => (
            <React.Fragment key={num}>
                <div className={`flex items-center gap-2.5 py-4 px-2 flex-shrink-0 transition-opacity ${done ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10.5px] font-bold flex-shrink-0 ${done ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}>
                        {done ? <TbCheck size={11} /> : num}
                    </div>
                    <span className={`text-[12.5px] whitespace-nowrap ${done ? 'font-bold text-gray-900' : 'font-medium text-gray-500'}`}>{label}</span>
                </div>
                {i < steps.length - 1 && <TbChevronRight size={14} className="text-gray-200 flex-shrink-0 mx-1" />}
            </React.Fragment>
        ))}
    </div>
);

/* ═══════════════════ MAIN ═══════════════════ */
const Add = ({ token }) => {
    const [images, setImages] = useState(Array(10).fill(null));
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discountPrice, setDiscPrice] = useState("");

    // ✅ FIX 2: Initial category = "Men", subCategory = first valid option for "Men"
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState(CATEGORY_DEFAULT_SUB["Men"]); // "Jackets"

    const [bestseller, setBestseller] = useState(false);
    const [detailedDescription, setDD] = useState("");
    const [colors, setColors] = useState([]);
    const [newColorName, setNewCName] = useState("");
    const [newColorHex, setNewCHex] = useState("#000000");
    const [colorMode, setColorMode] = useState("both");
    const [sizeType, setSizeType] = useState("standard");
    const [stdSizes, setStdSizes] = useState(INIT_SIZES);
    const [enabledSizes, setEnabledSizes] = useState([]);
    const [inchSizes, setInchSizes] = useState([]);
    const [niSize, setNiSize] = useState("");
    const [niMult, setNiMult] = useState(1.0);
    const [niStock, setNiStock] = useState(0);
    const [niPrice, setNiPrice] = useState("");
    const [niCustom, setNiCustom] = useState(false);
    const [lbOpen, setLbOpen] = useState(false);
    const [lbIdx, setLbIdx] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [valErrs, setValErrs] = useState([]);
    const [draftNotif, setDraftNotif] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [draftSaving, setDraftSaving] = useState(false);
    const [showDraftPage, setShowDraftPage] = useState(false);
    const [sizeErr, setSizeErr] = useState(false);
    const [sizeCardShake, setSizeCardShake] = useState(false);
    const dzRef = useRef(null);
    const sizeRef = useRef(null);

    const uploaded = images.filter(Boolean);
    const hasSizes = sizeType === 'standard' ? enabledSizes.length > 0 : inchSizes.length > 0;
    const discount = discountPrice && price && +discountPrice < +price ? Math.round((1 - discountPrice / price) * 100) : null;

    const progress = Math.min(100, [
        name.trim() ? 15 : 0, description.trim() ? 10 : 0, price ? 15 : 0,
        uploaded.length > 0 ? 15 : 0, colors.length > 0 ? 15 : 0,
        hasSizes ? 15 : 0, detailedDescription ? 8 : 0, (category && subCategory) ? 7 : 0,
    ].reduce((a, b) => a + b, 0));

    /* Auto-save */
    useEffect(() => {
        if (!name && !description && !price) return;
        const t = setTimeout(() => {
            try {
                localStorage.setItem('ap_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription }));
                setDraftNotif(true); setTimeout(() => setDraftNotif(false), 2500);
            } catch { }
        }, 2000);
        return () => clearTimeout(t);
    }, [name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription]);

    // ✅ FIX 3: Draft restore — use saved subCategory if valid, else use default for saved category
    useEffect(() => {
        try {
            const d = JSON.parse(localStorage.getItem('ap_draft') || '{}');
            if (d.name) {
                setName(d.name || '');
                setDescription(d.description || '');
                setPrice(d.price || '');
                setDiscPrice(d.discountPrice || '');
                const savedCat = d.category || 'Men';
                setCategory(savedCat);
                // Use saved subCategory if it exists and is non-empty, else use default
                setSubCategory(d.subCategory && d.subCategory.trim() ? d.subCategory : CATEGORY_DEFAULT_SUB[savedCat] || '');
                setBestseller(d.bestseller || false);
                setDD(d.detailedDescription || '');
                toast.info('💾 Draft restored', { autoClose: 2500 });
            }
        } catch { }
    }, []);

    /* Auto-set base price */
    useEffect(() => {
        let minPrice = null;
        if (sizeType === 'standard' && enabledSizes.length > 0) {
            const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
            const sorted = [...enabledSizes].sort((a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b));
            const d = stdSizes[sorted[0]];
            if (d.useCustomPrice && d.customPrice) minPrice = parseFloat(d.customPrice);
        } else if (sizeType === 'inch' && inchSizes.length > 0) {
            const sorted = [...inchSizes].sort((a, b) => { const n = s => Math.min(...(s.match(/\d+\.?\d*/g) || ['Infinity']).map(parseFloat)); return n(a.size) - n(b.size); });
            if (sorted[0].useCustomPrice && sorted[0].customPrice) minPrice = parseFloat(sorted[0].customPrice);
        }
        if (minPrice && minPrice > 0 && minPrice.toString() !== price) setPrice(minPrice.toString());
    }, [sizeType, enabledSizes, stdSizes, inchSizes]);

    /* Image handlers */
    const setImg = (i, f) => setImages(prev => { const n = [...prev]; n[i] = f; return n; });
    const delImg = (i) => setImages(prev => { const n = [...prev]; n[i] = null; return n; });

    const handleDragEnter = useCallback((e) => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
    const handleDragOver = useCallback((e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy'; setDragging(true); }, []);
    const handleDragLeave = useCallback((e) => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
    const handleDrop = useCallback((e) => {
        e.preventDefault(); e.stopPropagation(); setDragging(false);
        const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
        if (!files.length) { toast.error('Only image files'); return; }
        let added = 0;
        setImages(prev => { const next = [...prev]; files.forEach(f => { const s = next.findIndex(x => !x); if (s !== -1) { next[s] = f; added++; } }); return next; });
        requestAnimationFrame(() => { if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); });
    }, []);

    /* Color handlers */
    const addColor = () => {
        if (colorMode !== "hexOnly" && !newColorName.trim()) return toast.error("Enter color name");
        const c = { name: newColorName.trim() || `Color-${colors.length + 1}`, hex: newColorHex || '#808080' };
        if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error("Color already exists");
        setColors([...colors, c]); setNewCName(""); setNewCHex("#000000"); toast.success(`${c.name} added!`);
    };
    const rmColor = (n) => setColors(colors.filter(c => c.name !== n));
    const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
    const addPreset = (p) => {
        if (!colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())) { setColors([...colors, p]); toast.success(`${p.name} added!`); }
        else toast.info(`${p.name} already added`);
    };

    /* Size handlers */
    const toggleSize = (k) => { setSizeErr(false); setEnabledSizes(p => p.includes(k) ? p.filter(s => s !== k) : [...p, k]); };
    const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v } }));
    const toggleCP = (k) => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
    const calcP = (d) => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;
    const addInch = () => {
        if (!niSize.trim()) return toast.error("Enter size");
        if (inchSizes.some(s => s.size === niSize)) return toast.error("Size exists");
        setSizeErr(false);
        setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
        setNiSize(""); setNiMult(1.0); setNiStock(0); setNiPrice(""); setNiCustom(false); toast.success("Size added!");
    };
    const rmInch = (s) => setInchSizes(inchSizes.filter(i => i.size !== s));
    const edInch = (i, f, v) => {
        const u = [...inchSizes];
        if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice;
        else if (f === 'stock') u[i].stock = parseInt(v) || 0;
        else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1;
        else u[i][f] = v;
        setInchSizes(u);
    };

    const formatSizes = () => {
        if (sizeType === "standard") return enabledSizes.map(k => {
            const d = stdSizes[k]; const obj = { size: k, priceMultiplier: d.multiplier, stock: d.stock };
            if (d.useCustomPrice) { const v = d.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${k}`); throw new Error("bad"); } obj.customPrice = +v; obj.useCustomPrice = true; }
            return obj;
        });
        return inchSizes.map(s => {
            const obj = { size: s.size, priceMultiplier: s.multiplier, stock: s.stock };
            if (s.useCustomPrice) { const v = s.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${s.size}`); throw new Error("bad"); } obj.customPrice = +v; obj.useCustomPrice = true; }
            return obj;
        });
    };

    // ✅ FIX 4: Validate subCategory is not empty before submit
    const validate = (isDraft = false) => {
        const errs = [];
        if (!name.trim()) errs.push("Product name is required");
        if (!description.trim()) errs.push("Short description is required");
        if (!subCategory || !subCategory.trim()) errs.push("Sub category is required — please select one");
        if (!hasSizes) { errs.push("At least one size must be selected"); setSizeErr(true); setSizeCardShake(true); setTimeout(() => setSizeCardShake(false), 600); setTimeout(() => sizeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100); }
        if (!isDraft) {
            if (!price || isNaN(+price) || +price <= 0) errs.push("Base price is required");
            if (!uploaded.length) errs.push("At least one product image is required");
            if (!colors.length) errs.push("Add at least one color variant");
        }
        return errs;
    };

    const saveDraft = async () => {
        const errs = validate(true);
        if (errs.length) { setValErrs(errs); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
        setValErrs([]); setDraftSaving(true);
        try {
            localStorage.setItem('ap_full_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription, sizesCount: hasSizes ? (sizeType === 'standard' ? enabledSizes.length : inchSizes.length) : 0, colorsCount: colors.length, imagesCount: uploaded.length, savedAt: new Date().toISOString() }));
            toast.success('💾 Draft saved!'); setShowDraftPage(true);
        } catch { toast.error("Failed to save draft"); }
        finally { setDraftSaving(false); }
    };

    const onSubmit = async (e) => {
        e?.preventDefault();
        const errs = validate(false);
        if (errs.length) { setValErrs(errs); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
        setValErrs([]); setSubmitting(true);
        try {
            const fd = new FormData();
            fd.append("name", name.trim()); fd.append("description", description.trim()); fd.append("detailedDescription", detailedDescription);
            fd.append("price", price); fd.append("discountPrice", discountPrice || ""); fd.append("category", category); fd.append("subCategory", subCategory);
            fd.append("bestseller", bestseller); fd.append("sizes", JSON.stringify(formatSizes())); fd.append("color", JSON.stringify(colors));
            images.forEach(img => { if (img) fd.append("images", img); });
            const res = await axios.post(`${backendUrl}/api/product/add`, fd, { headers: { token } });
            if (res.data.success) { toast.success("🎉 Product published!"); try { localStorage.removeItem('ap_draft'); localStorage.removeItem('ap_full_draft'); } catch { } resetForm(); }
            else toast.error(res.data.message || "Failed to publish");
        } catch (err) { if (err.message !== "bad") toast.error(err.response?.data?.message || "Something went wrong"); }
        finally { setSubmitting(false); }
    };

    // ✅ FIX 5: resetForm also resets subCategory to correct default for "Men"
    const resetForm = () => {
        setName(""); setDescription(""); setDD(""); setPrice(""); setDiscPrice(""); setColors([]); setEnabledSizes([]); setStdSizes(INIT_SIZES);
        setInchSizes([]); setImages(Array(10).fill(null)); setSizeType("standard");
        setCategory("Men");
        setSubCategory(CATEGORY_DEFAULT_SUB["Men"]); // ✅ "Jackets" not ""
        setBestseller(false); setValErrs([]); setSizeErr(false); setShowDraftPage(false);
    };

    const clearAll = () => { resetForm(); try { localStorage.removeItem('ap_draft'); } catch { } toast.success("Form cleared"); };

    const draftFormState = { name, description, price, detailedDescription, hasImages: uploaded.length > 0, hasColors: colors.length > 0, hasSizes };

    if (showDraftPage) return <DraftPage formState={draftFormState} onContinue={() => setShowDraftPage(false)} onPublishNow={() => { setShowDraftPage(false); setTimeout(() => onSubmit(), 100); }} onNewProduct={() => resetForm()} />;

    return (
        <div className="min-h-screen bg-[#f7f7f5]">
            <style>{`
        @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
        .shake { animation: shake 0.4s ease; }
        .ql-container { font-size: 14px; border-radius: 0 0 12px 12px !important; border-color: #e5e7eb !important; }
        .ql-toolbar { border-radius: 12px 12px 0 0 !important; border-color: #e5e7eb !important; background: #f9fafb; }
        .ql-editor { min-height: 160px; font-family: inherit; }
      `}</style>

            {/* ── TOP BAR ── */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 flex items-center justify-between shadow-sm h-16">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <TbPackage size={18} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Add Product</h1>
                        <p className="text-[11px] text-gray-400 mt-0.5">{progress}% complete</p>
                    </div>
                    {draftNotif && (
                        <span className="ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[11px] font-semibold">
                            <TbDeviceFloppy size={12} /> Auto-saved
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <button type="button" onClick={clearAll} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                        <TbTrash size={14} /> <span className="hidden sm:inline">Clear</span>
                    </button>
                    <button type="button" onClick={saveDraft} disabled={draftSaving} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-[13px] font-semibold hover:bg-amber-100 transition-colors disabled:opacity-60">
                        <TbDeviceFloppy size={14} /> <span className="hidden sm:inline">{draftSaving ? 'Saving…' : 'Save Draft'}</span>
                    </button>
                    <button type="button" onClick={onSubmit} disabled={submitting} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-60">
                        <TbRocket size={14} /> <span>{submitting ? 'Publishing…' : 'Publish'}</span>
                    </button>
                </div>
            </div>

            {/* ── STEPS ── */}
            <Steps steps={[
                ['1', 'Basic Info', !!(name && description)],
                ['2', 'Pricing', !!price],
                ['3', 'Media', uploaded.length > 0],
                ['4', 'Colors', colors.length > 0],
                ['5', 'Sizes', hasSizes],
            ]} />

            <div className="h-1 bg-gray-100">
                <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 p-6 max-w-[1400px] items-start">
                    <div>
                        {valErrs.length > 0 && (
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <TbAlertTriangle size={16} className="text-red-500 flex-shrink-0" />
                                    <h4 className="text-[13px] font-bold text-red-700">Please fix before continuing:</h4>
                                </div>
                                <ul className="space-y-1 pl-6">
                                    {valErrs.map((e, i) => <li key={i} className="text-[12.5px] text-red-600 list-disc">{e}</li>)}
                                </ul>
                            </div>
                        )}

                        {/* ── BASIC INFO ── */}
                        <Card icon={<TbPackage size={18} />} title="Basic Information" subtitle="Name, description & category">
                            <Field label="Product Name" required>
                                <div className="relative">
                                    <input className={inputCls + (name.length > 90 ? ' border-red-400 bg-red-50' : '')} type="text" maxLength={100} placeholder="e.g. Classic Oxford Cotton Shirt" value={name} onChange={e => setName(e.target.value)} />
                                    <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${name.length > 80 ? 'text-amber-500' : 'text-gray-400'}`}>{name.length}/100</span>
                                </div>
                            </Field>

                            <Field label="Short Description" required>
                                <div className="relative">
                                    <textarea className={inputCls + " resize-y min-h-[90px] " + (description.length > 280 ? 'border-red-400 bg-red-50' : '')} maxLength={300} placeholder="Compelling product description…" value={description} onChange={e => setDescription(e.target.value)} />
                                    <span className={`absolute right-3 bottom-3 text-[10.5px] pointer-events-none ${description.length > 240 ? 'text-amber-500' : 'text-gray-400'}`}>{description.length}/300</span>
                                </div>
                            </Field>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Field label="Category">
                                    <select
                                        className={selectCls}
                                        value={category}
                                        onChange={(e) => {
                                            const newCat = e.target.value;
                                            setCategory(newCat);
                                            // ✅ FIX 6: Auto-set subCategory to first valid option when category changes
                                            setSubCategory(CATEGORY_DEFAULT_SUB[newCat] || '');
                                        }}
                                    >
                                        <option value="Men">Men</option>
                                        <option value="Women">Women</option>
                                        <option value="Others">Others</option>
                                        <option value="Leather Pillow Cover">Leather Pillow Cover</option>
                                        <option value="Sofa Headrest">Sofa Headrest</option>
                                        <option value="Leather Desk Pad">Leather Desk Pad</option>
                                        <option value="Men Leather Apron">Men Leather Apron</option>
                                    </select>
                                </Field>

                                <Field label="Sub Category">
                                    <select
                                        className={selectCls}
                                        value={subCategory}
                                        onChange={(e) => setSubCategory(e.target.value)}
                                    >
                                        {category === "Men" && (
                                            <>
                                                <option value="Jackets">Jackets</option>
                                                <option value="Bomber Biker Jacket">Bomber Biker Jacket</option>
                                                <option value="Moto Biker Jacket">Moto Biker Jacket</option>
                                                <option value="Racing Coat">Racing Coat</option>
                                                <option value="Leather Coats">Leather Coats</option>
                                                <option value="Men Winter Wear">Men Winter Wear</option>
                                            </>
                                        )}
                                        {category === "Women" && (
                                            <>
                                                <option value="Jackets">Jackets</option>
                                                <option value="Bomber Biker Jacket">Bomber Biker Jacket</option>
                                                <option value="Moto Biker Jacket">Moto Biker Jacket</option>
                                                <option value="Racing Coat">Racing Coat</option>
                                                <option value="Women Winter Wear">Women Winter Wear</option>
                                                <option value="Women Night Dress">Women Night Dress</option>
                                                <option value="Leather Pencil Skirt">Leather Pencil Skirt</option>
                                                <option value="Leather Full Skirt">Leather Full Skirt</option>
                                                <option value="Slim Bodycon Skirt">Slim Bodycon Skirt</option>
                                            </>
                                        )}
                                        {category === "Others" && (
                                            <>
                                                <option value="Pillow">Pillow</option>
                                                <option value="Cushion Cover">Cushion Cover</option>
                                                <option value="Aprons">Aprons</option>
                                                <option value="Desk Mat">Desk Mat</option>
                                                <option value="Chair Cover">Chair Cover</option>
                                            </>
                                        )}
                                        {category === "Leather Pillow Cover" && (
                                            <>
                                                <option value="Cylindrical Pillow Cover">Cylindrical Pillow Cover</option>
                                                <option value="Square Pillow Cover">Square Pillow Cover</option>
                                                <option value="Rectangle Pillow Cover">Rectangle Pillow Cover</option>
                                                <option value="Round Pillow Cover">Round Pillow Cover</option>
                                                <option value="Ear Hole Pillow Cushion Cover">Ear Hole Pillow Cushion Cover</option>
                                            </>
                                        )}
                                        {category === "Sofa Headrest" && (
                                            <option value="Recliner Chair Headrest Cover">Recliner Chair Headrest Cover</option>
                                        )}
                                        {category === "Leather Desk Pad" && (
                                            <option value="Leather Desk Mat">Leather Desk Mat</option>
                                        )}
                                        {category === "Men Leather Apron" && (
                                            <option value="Apron">Apron</option>
                                        )}
                                    </select>
                                </Field>

                                <Field label="SKU / Code" hint="Optional — auto-generated if blank">
                                    <input className={inputCls} type="text" placeholder="Auto-generated" />
                                </Field>
                            </div>

                            <div className="border-t border-gray-100 pt-5 mt-1">
                                <Field label="Detailed Description" hint="Shown on product detail page. Add specs, care instructions, materials.">
                                    <ReactQuill theme="snow" value={detailedDescription} onChange={setDD} />
                                </Field>
                            </div>
                        </Card>

                        {/* ── MEDIA ── */}
                        <Card
                            icon={<TbPhoto size={18} />}
                            title="Product Images"
                            subtitle={`${uploaded.length}/10 uploaded`}
                            action={uploaded.length > 0 && (
                                <button type="button" onClick={() => { setLbIdx(0); setLbOpen(true); }}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                                    <TbEye size={13} /> View All
                                </button>
                            )}
                        >
                            <div
                                ref={dzRef}
                                className={`relative rounded-2xl border-2 border-dashed text-center p-8 mb-4 transition-all duration-200 cursor-pointer
                  ${dragging ? 'border-indigo-500 bg-indigo-50 scale-[1.01]' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
                                onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                            >
                                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${dragging ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                                    <TbPhoto size={24} className={dragging ? 'text-indigo-500' : 'text-gray-400'} />
                                </div>
                                <p className="text-[14px] font-semibold text-gray-700 mb-1">{dragging ? 'Drop your images here!' : 'Drag & drop images here'}</p>
                                <p className="text-[12px] text-gray-400">or click to upload · PNG, JPG, WEBP · 800×800px recommended</p>
                                {!dragging && (
                                    <input type="file" accept="image/*" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-[0]"
                                        onChange={e => {
                                            const files = Array.from(e.target.files); let added = 0;
                                            setImages(prev => { const next = [...prev]; files.forEach(f => { const s = next.findIndex(x => !x); if (s !== -1) { next[s] = f; added++; } }); return next; });
                                            e.target.value = '';
                                            requestAnimationFrame(() => { if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); });
                                        }}
                                    />
                                )}
                            </div>
                            <div className="grid grid-cols-5 gap-2.5">
                                {images.map((img, i) => (
                                    <div key={i} className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all group
                    ${img ? (i === 0 ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-transparent') : 'border-dashed border-gray-200 bg-gray-50 hover:border-gray-300 cursor-pointer'}`}>
                                        {img ? (
                                            <>
                                                <img src={URL.createObjectURL(img)} alt="" className="w-full h-full object-cover" />
                                                {i === 0 && <span className="absolute top-1.5 left-1.5 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md">MAIN</span>}
                                                <span className="absolute top-1.5 right-1.5 bg-black/50 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md">{i + 1}</span>
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5">
                                                    <button type="button" className="bg-white text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLbIdx(uploaded.indexOf(img)); setLbOpen(true); }}>🔍 View</button>
                                                    <button type="button" className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-red-600 transition-colors"
                                                        onMouseDown={e => { e.preventDefault(); e.stopPropagation(); delImg(i); }}>✕ Remove</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex flex-col items-center justify-center h-full">
                                                    <TbPlus size={16} className="text-gray-300 mb-0.5" />
                                                    <span className="text-[9px] text-gray-300 font-medium">{i + 1}</span>
                                                </div>
                                                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer text-[0]"
                                                    onChange={e => { if (e.target.files[0]) setImg(i, e.target.files[0]); e.target.value = ''; }} />
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[11.5px] text-gray-400 mt-3">First slot = main thumbnail. Hover any image to view or remove.</p>
                        </Card>

                        {/* ── COLORS ── */}
                        <Card
                            icon={<TbPalette size={18} />}
                            title="Color Variants"
                            subtitle="Add available colors"
                            badge={colors.length > 0 && <span className="px-2 py-0.5 rounded-full bg-gray-900 text-white text-[10px] font-bold">{colors.length}</span>}
                        >
                            <Field label="Input Mode">
                                <div className="flex gap-2 flex-wrap">
                                    {[["both", "Name + Color"], ["nameOnly", "Name Only"], ["hexOnly", "Color Only"]].map(([v, l]) => (
                                        <button key={v} type="button" onClick={() => setColorMode(v)}
                                            className={`px-3.5 py-2 rounded-xl text-[12.5px] font-semibold border transition-all ${colorMode === v ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}>
                                            {l}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                            <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
                                {(colorMode === "both" || colorMode === "nameOnly") && (
                                    <Field label="Name">
                                        <input className={inputCls} style={{ width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newColorName} onChange={e => setNewCName(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} />
                                    </Field>
                                )}
                                {(colorMode === "both" || colorMode === "hexOnly") && (
                                    <Field label="Color">
                                        <div className="flex gap-2 items-center">
                                            <input type="color" value={newColorHex} onChange={e => setNewCHex(e.target.value)} className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-1" />
                                            <input className={inputCls} style={{ width: 100 }} type="text" value={newColorHex} onChange={e => setNewCHex(e.target.value)} />
                                        </div>
                                    </Field>
                                )}
                                <button type="button" onClick={addColor} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
                                    <TbPlus size={14} /> Add
                                </button>
                            </div>
                            {colors.length === 0 ? (
                                <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl mb-4">
                                    <TbPalette size={28} className="text-gray-200 mx-auto mb-2" />
                                    <p className="text-[13px] text-gray-400 font-medium">No colors yet</p>
                                    <p className="text-[12px] text-gray-300">Add above or pick from presets below</p>
                                </div>
                            ) : (
                                <div className="space-y-2 mb-4">
                                    {colors.map((c, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors group">
                                            <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} className="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer p-1 flex-shrink-0" />
                                            <div className="flex-1 grid grid-cols-2 gap-2">
                                                <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Color name" className="text-[13px] font-medium text-gray-800 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 transition-colors" />
                                                <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" className="text-[12px] text-gray-400 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-400 outline-none py-0.5 font-mono transition-colors" />
                                            </div>
                                            <div className="w-6 h-6 rounded-full border border-black/10 flex-shrink-0" style={{ background: c.hex }} />
                                            <button type="button" onClick={() => rmColor(c.name)} className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100">
                                                <TbX size={13} />
                                            </button>
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
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all
                          ${added ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'}`}>
                                                <div className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0" style={{ background: p.hex }} />
                                                {p.name}{added ? ' ✓' : ''}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>

                        {/* ── SIZES ── */}
                        <Card
                            icon={<TbRuler size={18} />}
                            title="Sizes & Inventory"
                            subtitle="Minimum 1 size required"
                            badge={<span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[9px] font-bold uppercase tracking-wide">Required</span>}
                        >
                            {sizeErr && (
                                <div className="flex items-center gap-2.5 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-5 text-red-700">
                                    <TbAlertTriangle size={16} className="flex-shrink-0" />
                                    <span className="text-[12.5px] font-semibold">Please select at least one size — required before saving or publishing.</span>
                                </div>
                            )}
                            <Field label="Base Price (₹)" required hint="">
                                <input className={inputCls + (price && (isNaN(+price) || +price <= 0) ? ' border-red-400 bg-red-50' : '')}
                                    type="number" placeholder="e.g. 499" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} />
                                <div className="flex items-start gap-2 mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl text-[12px] text-blue-700">
                                    <TbInfoCircle size={14} className="flex-shrink-0 mt-0.5" />
                                    <span>Base price × multiplier = size's selling price. Example: XL at 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : '—'}. Enable "Custom Price" per size for fixed pricing.</span>
                                </div>
                            </Field>
                            <Field label="Size System">
                                <div className="flex gap-2">
                                    {[['standard', '👕 Standard (XS–3XL)'], ['inch', '📏 Inch-Based']].map(([v, l]) => (
                                        <button key={v} type="button" onClick={() => setSizeType(v)}
                                            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${sizeType === v ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}>
                                            {l}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                            {sizeType === "standard" && (
                                <>
                                    <div ref={sizeRef} className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4 ${sizeCardShake ? 'shake' : ''}`}>
                                        {Object.keys(stdSizes).map(k => {
                                            const on = enabledSizes.includes(k);
                                            const d = stdSizes[k];
                                            return (
                                                <div key={k}
                                                    className={`rounded-xl border-2 p-3.5 transition-all cursor-pointer ${on ? 'border-indigo-400 bg-indigo-50/30 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                                                    onClick={() => !on && toggleSize(k)}>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <input type="checkbox" checked={on} onChange={() => toggleSize(k)} onClick={e => e.stopPropagation()} className="w-4 h-4 rounded accent-indigo-600 cursor-pointer" />
                                                        <span className={`text-[13px] font-extrabold px-2 py-0.5 rounded-md ${on ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{k}</span>
                                                        {on && d.stock > 0 && <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">{d.stock}×</span>}
                                                    </div>
                                                    {on && (
                                                        <div onClick={e => e.stopPropagation()} className="space-y-2 mt-2">
                                                            <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 cursor-pointer">
                                                                <input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} className="w-3.5 h-3.5 rounded accent-indigo-600 cursor-pointer" />
                                                                Custom Price
                                                            </label>
                                                            {d.useCustomPrice ? (
                                                                <div>
                                                                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Price (₹)</label>
                                                                    <input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, 'customPrice', e.target.value)} placeholder="Price" className="w-full mt-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
                                                                    <span className="text-[10.5px] text-indigo-600 font-bold mt-1 block">₹ {d.customPrice || '—'}</span>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Multiplier ×{d.multiplier}</label>
                                                                    <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, 'multiplier', e.target.value)} className="w-full mt-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
                                                                    <span className="text-[10.5px] text-emerald-600 font-bold mt-1 block">₹ {price ? calcP(d).toFixed(2) : '—'}</span>
                                                                </div>
                                                            )}
                                                            <div>
                                                                <label className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Stock</label>
                                                                <input type="number" min="0" value={d.stock} onChange={e => setSzF(k, 'stock', e.target.value)} className="w-full mt-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 transition-colors" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {enabledSizes.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                            {enabledSizes.map(k => (
                                                <span key={k} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-full text-[11.5px] font-semibold">
                                                    {k} · ₹{price ? calcP(stdSizes[k]).toFixed(0) : (stdSizes[k].customPrice || '—')} · {stdSizes[k].stock}pcs
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex gap-2 flex-wrap">
                                        {[['S/M/L/XL', () => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); toast.success('S/M/L/XL selected!'); }],
                                        ['All Sizes', () => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); toast.success('All selected!'); }],
                                        ['Clear', () => setEnabledSizes([])]].map(([label, action]) => (
                                            <button key={label} type="button" onClick={action} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                            {sizeType === "inch" && (
                                <>
                                    <div className="flex flex-wrap items-end gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
                                        <Field label="Size Label">
                                            <input className={inputCls} style={{ width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} />
                                        </Field>
                                        <Field label="Stock">
                                            <input className={inputCls} style={{ width: 75 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} />
                                        </Field>
                                        <label className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600 cursor-pointer pb-2.5">
                                            <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} className="w-4 h-4 rounded accent-indigo-600 cursor-pointer" /> Custom Price
                                        </label>
                                        {niCustom
                                            ? <Field label="Price (₹)"><input className={inputCls} style={{ width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} /></Field>
                                            : <Field label="Multiplier"><input className={inputCls} style={{ width: 80 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} /></Field>
                                        }
                                        <button type="button" onClick={addInch} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-[13px] font-semibold hover:bg-gray-800 transition-colors">
                                            <TbPlus size={14} /> Add Size
                                        </button>
                                    </div>
                                    {inchSizes.length === 0 ? (
                                        <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl">
                                            <TbRuler size={28} className="text-gray-200 mx-auto mb-2" />
                                            <p className="text-[13px] text-gray-400">No inch sizes yet — add above</p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {inchSizes.map((s, i) => (
                                                <div key={i} className="bg-white border border-gray-100 rounded-xl p-3.5">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="text-[14px] font-extrabold text-gray-900">{s.size}"</span>
                                                        <button type="button" onClick={() => rmInch(s.size)} className="w-6 h-6 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-100"><TbX size={11} /></button>
                                                    </div>
                                                    <label className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-600 mb-2 cursor-pointer">
                                                        <input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} className="w-3.5 h-3.5 rounded accent-indigo-600" /> Custom Price
                                                    </label>
                                                    {s.useCustomPrice
                                                        ? <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Price (₹)</label><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
                                                        : <div className="mb-2"><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Multiplier</label><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
                                                    }
                                                    <div><label className="text-[10px] text-gray-400 font-semibold uppercase block mb-1">Stock</label><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400" /></div>
                                                    <span className="text-[10.5px] text-emerald-600 font-bold mt-1.5 block">₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : '—'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </Card>
                    </div>

                    {/* ══════════════ SIDEBAR ══════════════ */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <TbRocket size={18} className="text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-[13.5px] font-bold text-gray-900">Save & Publish</p>
                                    <p className="text-[11px] text-gray-400">Draft saves · Publish goes live</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex justify-between text-[11.5px] font-semibold text-gray-500 mb-1.5">
                                    <span>Completion</span><span className="text-gray-900">{progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                                </div>
                            </div>
                            <button type="button" onClick={() => setBestseller(p => !p)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border mb-4 transition-all ${bestseller ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-100 hover:border-gray-200'}`}>
                                <div className="flex items-center gap-2">
                                    <TbStar size={15} className={bestseller ? 'text-amber-500' : 'text-gray-400'} />
                                    <span className="text-[13px] font-semibold text-gray-700">Mark as Bestseller</span>
                                </div>
                                <div className={`w-10 rounded-full relative transition-colors ${bestseller ? 'bg-amber-400' : 'bg-gray-200'}`} style={{ height: '22px' }}>
                                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${bestseller ? 'translate-x-[22px]' : 'translate-x-0.5'}`} />
                                </div>
                            </button>
                            <button type="button" onClick={saveDraft} disabled={draftSaving}
                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-[13px] font-semibold hover:bg-amber-100 transition-colors mb-2.5 disabled:opacity-60">
                                <TbDeviceFloppy size={15} /> {draftSaving ? 'Saving…' : 'Save as Draft'}
                            </button>
                            <button type="submit" disabled={submitting}
                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-60">
                                <TbRocket size={15} /> {submitting ? 'Publishing…' : 'Publish Now'}
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <TbTag size={16} className="text-emerald-600" />
                                </div>
                                <p className="text-[13.5px] font-bold text-gray-900">Pricing</p>
                            </div>
                            <Field label="Sale / Discount Price (₹)" hint="Optional — shown as sale price">
                                <input className={inputCls} type="number" placeholder="0.00" value={discountPrice} onChange={e => setDiscPrice(e.target.value)} />
                            </Field>
                            {discount && (
                                <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                                    <span className="text-[12.5px] font-semibold text-emerald-700">💸 Discount active</span>
                                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">{discount}% off</span>
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <TbChartBar size={16} className="text-indigo-600" />
                                </div>
                                <p className="text-[13.5px] font-bold text-gray-900">Live Summary</p>
                            </div>
                            <div className="space-y-2">
                                {[
                                    ["Name", name || <span className="text-gray-300 italic text-[12px]">Not set</span>],
                                    ["Category", `${category} › ${subCategory || '—'}`],
                                    ["Base Price", price ? <span className="font-bold text-gray-900">₹{price}</span> : <span className="text-gray-300">—</span>],
                                    ["Sale Price", discountPrice ? <span className="text-emerald-600 font-bold">₹{discountPrice}</span> : <span className="text-gray-300">—</span>],
                                    ["Colors", colors.length > 0
                                        ? <div className="flex gap-1 flex-wrap justify-end">{colors.map((c, i) => <div key={i} title={c.name} className="w-4 h-4 rounded-full border border-black/10" style={{ background: c.hex }} />)}</div>
                                        : <span className="text-gray-300">—</span>],
                                    ["Sizes", sizeType === 'standard'
                                        ? (enabledSizes.length ? <span className="font-semibold">{enabledSizes.join(', ')}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>)
                                        : (inchSizes.length ? <span className="font-semibold">{inchSizes.map(s => s.size).join(', ')}</span> : <span className="text-red-500 font-bold text-[11px]">⚠ Required</span>)],
                                    ["Images", <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${uploaded.length > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{uploaded.length}/10</span>],
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
                                <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center">
                                    <TbBolt size={16} className="text-violet-600" />
                                </div>
                                <p className="text-[13.5px] font-bold text-gray-900">Quick Actions</p>
                            </div>
                            <div className="space-y-2">
                                {[
                                    ["🎨 Add 4 basic colors", () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added!`); }],
                                    ["👕 Select S / M / L / XL", () => { setEnabledSizes(['S', 'M', 'L', 'XL']); setSizeErr(false); setSizeType('standard'); toast.success('S/M/L/XL selected!'); }],
                                    ["✅ Select all sizes", () => { setEnabledSizes(Object.keys(stdSizes)); setSizeErr(false); setSizeType('standard'); toast.success('All sizes selected!'); }],
                                    ["🗑 Clear all sizes", () => { setEnabledSizes([]); toast.info('Sizes cleared'); }],
                                    ["🗑 Clear all colors", () => { setColors([]); toast.info('Colors cleared'); }],
                                ].map(([label, action]) => (
                                    <button key={label} type="button" onClick={action}
                                        className="w-full text-left px-3.5 py-2.5 rounded-xl border border-gray-100 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-all">
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                            <div className="flex items-center gap-2.5 mb-3">
                                <HiOutlineLightBulb size={18} className="text-indigo-500 flex-shrink-0" />
                                <p className="text-[13px] font-bold text-indigo-800">Admin Tips</p>
                            </div>
                            <ul className="space-y-1.5">
                                {['Drag & drop multiple images onto the drop zone', 'Base price × multiplier = size\'s selling price', 'Enable "Custom Price" per size for fixed pricing', 'Sizes are required — select at least 1', 'Draft auto-saves basic fields every 2 seconds', 'Press Enter after typing a color name to add it'].map((tip, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[12px] text-indigo-700">
                                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">·</span> {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </form>

            {lbOpen && uploaded.length > 0 && <Lightbox imgs={uploaded} start={Math.min(lbIdx, uploaded.length - 1)} onClose={() => setLbOpen(false)} />}
        </div>
    );
};

export default Add;



