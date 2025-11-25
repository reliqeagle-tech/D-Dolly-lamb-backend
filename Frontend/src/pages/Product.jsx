// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [madeToMeasure, setMadeToMeasure] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');

//   const toggleExpansion = () => {
//     setIsExpanded(prevState => !prevState);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
//                   Get your order delivered swiftly with tracking updates every step of the way.
//                   We use sustainable, recyclable materials to keep your delivery green and guilt-free.
//                   Products adhere to international quality benchmarks, ensuring top-tier performance.
//                   Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

//   const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

//   const fetchProductData = async () => {
//     const item = products.find(item => item._id === productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   if (!productData) {
//     return <div className='opacity-0'></div>;
//   }

//   // Assuming productData.colors is an array like [{ id: 'wine', name: 'Wine', hex: '#8B0000' }, ...]
//   // If colors are strings, adjust accordingly

//   return (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       {/*----------- Product Data-------------- */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/*---------- Product Images------------- */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//             {productData.image.map((item, index) => (
//               <img
//                 onClick={() => setImage(item)}
//                 src={item}
//                 key={index}
//                 className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
//                 alt=''
//               />
//             ))}
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image} alt='' />
//           </div>
//         </div>

//         {/* -------- Product Info ---------- */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_dull_icon} alt='' className='w-3.5' />
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-8'>
//             {/* Color Selection */}
//             {productData.colors && (
//               <>
//                 <div className='flex gap-0 justify-between'>
//                   <p>Select Color</p>
//                 </div>
//                 <div className='flex gap-2'>
//                   {productData.colors.map((color, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedColor(color.id)}
//                       className={`w-8 h-8 rounded-full border-2 transition-colors ${
//                         color.id === selectedColor ? 'border-black ring-2 ring-black ring-offset-2' : 'border-gray-300 hover:border-gray-400'
//                       }`}
//                       style={{ backgroundColor: color.hex }}
//                       title={color.name}
//                     />
//                   ))}
//                 </div>
//               </>
//             )}
//             {/* Size Selection */}
//             <div className='flex gap-0 justify-between'>
//               <p>Select Size</p>
//               <button className='underline hover:no-underline' onClick={() => setShowModal(true)}>
//                 Size Guide
//               </button>
//               {showModal && <Modal onclose={() => setShowModal(false)} />}
//             </div>
//             <div className='flex gap-2'>
//               {productData.sizes.map((item, index) => (
//                 <button
//                   onClick={() => setSize(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${
//                     item === size ? 'border-orange-500' : ''
//                   }`}
//                   key={index}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             {/* Made to Measure */}
//             <div className='flex flex-col gap-2'>
//               <label className='flex items-center cursor-pointer'>
//                 <input
//                   type='checkbox'
//                   checked={madeToMeasure}
//                   onChange={(e) => setMadeToMeasure(e.target.checked)}
//                   className='mr-2 h-4 w-4 text-black focus:ring-black border-gray-300 rounded'
//                 />
//                 <span className='text-sm font-medium text-gray-700'>MADE TO MEASURE</span>
//               </label>
//               {madeToMeasure && (
//                 <div className='flex items-center text-sm text-gray-600 bg-gray-100 p-2 rounded-md'>
//                   <span className='mr-2'>ℹ️</span>
//                   Measurements can be added on the Cart page
//                 </div>
//               )}
//             </div>
//           </div>
//           <button
//             onClick={() => addToCart(productData._id, size, selectedColor, madeToMeasure)}
//             className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed'
//             disabled={!size || !selectedColor}
//           >
//             ADD TO CART
//           </button>
//           <hr className='mt-8 sm:w-4/3' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>Every item is 100% original, crafted with premium materials for lasting style and comfort.</p>
//             <p>Enjoy secure cash on delivery options, plus multiple payment methods to suit your preference.</p>
//             <p>{shownContent}</p>
//             <p className='underline cursor-pointer' onClick={toggleExpansion}>
//               {isExpanded ? 'Read Less' : 'Read More'}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Description & Review Section ------------- */}
//       <div className='mt-20'>
//         <div className='flex border-b border-gray-200'>
//           <button
//             onClick={() => handleTabClick('description')}
//             className={`px-4 py-2 text-sm font-medium ${
//               activeTab === 'description'
//                 ? 'border-b-2 border-blue-500 text-blue-600'
//                 : 'text-gray-500 hover:text-gray-700'
//             }`}
//           >
//             Description
//           </button>
//           <button
//             onClick={() => handleTabClick('reviews')}
//             className={`px-4 py-2 text-sm font-medium ${
//               activeTab === 'reviews'
//                 ? 'border-b-2 border-blue-500 text-blue-600'
//                 : 'text-gray-500 hover:text-gray-700'
//             }`}
//           >
//             Reviews (122)
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className='mt-4'>
//           {activeTab === 'description' && (
//             <div className='text-gray-600'>
//               <p>
//                 An e-commerce website is an online platform that facilitates the buying and selling
//                 of products or services over the internet. It serves as a virtual marketplace where
//                 businesses and individuals can showcase their products, interact with customers, and
//                 conduct transactions without the need for a physical presence. E-commerce websites
//                 have gained immense popularity due to their convenience, accessibility, and the
//                 global reach they offer.
//               </p>
//               <p className='mt-2'>
//                 E-commerce websites typically display products or services along with detailed
//                 descriptions, images, prices, and any available variations (e.g., sizes, colors).
//                 Each product usually has its own dedicated page with relevant information.
//               </p>
//             </div>
//           )}
//           {activeTab === 'reviews' && (
//             <div className='text-gray-600'>
//               {/* Placeholder for reviews; replace with actual review components */}
//               <div className='mb-4 border-b pb-4'>
//                 <div className='flex justify-between'>
//                   <span className='font-semibold'>John Doe</span>
//                   <span className='text-yellow-500'>★★★★★</span>
//                 </div>
//                 <p className='mt-1'>Great product! Highly recommend.</p>
//                 <span className='text-sm text-gray-400'>Posted on Sept 15, 2025</span>
//               </div>
//               <div className='mb-4 border-b pb-4'>
//                 <div className='flex justify-between'>
//                   <span className='font-semibold'>Jane Smith</span>
//                   <span className='text-yellow-500'>★★★★☆</span>
//                 </div>
//                 <p className='mt-1'>Good quality, but sizing runs small.</p>
//                 <span className='text-sm text-gray-400'>Posted on Sept 10, 2025</span>
//               </div>
//               {/* Add more reviews as needed */}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* --------- display related products ---------- */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;




// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { FaInfoCircle } from 'react-icons/fa';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import LeatherJacketDescription from '../components/LeatherJacketDescription';
// import JacketLiningSelector from '../components/JacketLiningSelector';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(0); // New state to track selected thumbnail
//   const [size, setSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('wine'); // Default color
//   const [showModal, setShowModal] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');
//   const [makeMeasure, setMakeMeasure] = useState(false);

//   // Hardcoded colors matching the design (replace with productData.colors if available)
//   const colors = [
//     { id: 'wine', name: 'Wine', hex: '#8B0000' },
//     { id: 'black', name: 'Black', hex: '#000000' },
//     { id: 'cognac', name: 'Cognac', hex: '#D2691E' },
//     { id: 'olive', name: 'Olive', hex: '#808000' },
//     { id: 'rose', name: 'Rose', hex: '#C71585' },
//     { id: 'tobacco', name: 'Tobacco', hex: '#A0522D' },
//   ];

//   const toggleMakeMeasure = () => {
//     setMakeMeasure(!makeMeasure);
//   };

//   const toggleExpansion = () => {
//     setIsExpanded(prevState => !prevState);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
//                   Get your order delivered swiftly with tracking updates every step of the way.
//                   We use sustainable, recyclable materials to keep your delivery green and guilt-free.
//                   Products adhere to international quality benchmarks, ensuring top-tier performance.
//                   Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

//   const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

//   const fetchProductData = async () => {
//     const item = products.find(item => item._id === productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0); // Set initial selected index
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   if (!productData) {
//     return <div className='opacity-0'></div>;
//   }

//   return (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       {/*----------- Product Data-------------- */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/*---------- Product Images------------- */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row md:sticky md:top-4 self-start'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] lg:w-[10%] lg:h-[10%] w-full lg:mr-12 '>
//             {productData.image.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 cursor-pointer transition-all duration-200 w-[70px] h-[90px] sm:w-full sm:h-auto rounded-md  ${index === selectedIndex
//                     ? 'border-2 border-blue-500 rounded-md' // Blue border on selected thumbnail (mimics phone UI selection)
//                     : 'border-2 border-transparent'
//                   }`}
//                 onClick={() => {
//                   setImage(item);
//                   setSelectedIndex(index); // Update selected index
//                 }}
//               >
//                 <img
//                   src={item}
//                   alt=""
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//           {/* <div className='w-full sm:w-[80%] lg:w-[60%] sm:h-[80%] lg:h-[60%]'>
//             <img className='w-full h-auto' src={image} alt='' />
//           </div> */}
//           <div className='w-full sm:w-[80%] lg:w-[60%] flex justify-center items-center'>
//             <div className='w-full max-h-[600px] aspect-[3/4] overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-sm'>
//               <img
//                 className='w-full h-full object-contain'
//                 src={image}
//                 alt={productData.name}
//               />
//             </div>
//           </div>
//         </div>

//         {/* -------- Product Info ---------- */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_dull_icon} alt='' className='w-3.5' />
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-8'>
//             {/* Color Selection */}
//             <div>
//               <div className='flex items-center mb-2'>
//                 <p className='text-sm font-medium text-gray-700 mr-2'>Color :</p>
//                 <span className='text-sm text-gray-900'>{colors.find(c => c.id === selectedColor)?.name}</span>
//               </div>
//               <div className='flex gap-2 mb-2'>
//                 {colors.map((color, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedColor(color.id)}
//                     className={`w-10 h-10 lg:w-14 lg:h-14 rounded  transition-all duration-200 ${color.id === selectedColor
//                       ? 'border-black ring-1 ring-black ring-offset-2 scale-110'
//                       : 'border-transparent hover:border-gray-300 hover:scale-105'
//                       }`}
//                     style={{ backgroundColor: color.hex }}
//                     title={color.name}
//                   />
//                 ))}
//               </div>
//             </div>
//             {/* Size Selection */}
//             <div>
//               <div className='flex gap-0 justify-between mr-20 mb-2'>
//                 <p className='text-sm font-medium text-gray-700'>Select Size</p>
//                 <button className='underline hover:no-underline text-sm text-blue-600' onClick={() => setShowModal(true)}>
//                   Size Guide
//                 </button>
//                 {showModal && <Modal onclose={() => setShowModal(false)} />}
//               </div>
//               <div className='flex gap-2 mb-2'>
//                 {productData.sizes.map((item, index) => (
//                   <button
//                     onClick={() => setSize(item)}
//                     className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
//                     key={index}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {/* Made to Measure */}
//             <div className='flex flex-col justify-center items-center'>
//               <button
//                 onClick={toggleMakeMeasure}
//                 className='w-[90%] border border-gray-300 text-gray-800 font-semibold py-2.5 rounded-md hover:bg-gray-100 transition-colors mb-4'
//               >
//                 MADE TO MEASURE
//               </button>
//               {makeMeasure && (
//                 <div className='flex items-center justify-center text-sm md:text-base lg:text-lg text-gray-600 bg-gray-100 p-4 rounded-md w-[80%] -mb-4'>
//                   <FaInfoCircle className='mr-2 h-4 w-4 text-blue-500 flex-shrink-0' />
//                   Measurements can be added on the Cart page
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className='flex items-center justify-center'>
//             <button
//               onClick={() => {
//                 addToCart(productData._id, size, selectedColor, makeMeasure);
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//               }}
//               className='w-[90%] bg-gray-500 text-white font-semibold py-2.5 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
//               disabled={!size}

//             >
//               ADD TO CART
//             </button>
//           </div>
//           <JacketLiningSelector />
//           <hr className='mt-8 sm:w-4/3' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>Every item is 100% original, crafted with premium materials for lasting style and comfort.</p>
//             <p>Enjoy secure cash on delivery options, plus multiple payment methods to suit your preference.</p>
//             <p>{shownContent}</p>
//             <p className='underline hover:no-underline cursor-pointer text-base text-gray-600' onClick={toggleExpansion}>
//               {isExpanded ? 'Read Less' : 'Read More'}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Description & Review Section ------------- */}
//       <div className='mt-20'>
//         <div className='flex border-b border-gray-200'>
//           <button
//             onClick={() => handleTabClick('description')}
//             className={`px-4 py-2 text-sm font-medium ${activeTab === 'description'
//               ? 'border-b-2 border-blue-500 text-blue-600'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Description
//           </button>
//           <button
//             onClick={() => handleTabClick('reviews')}
//             className={`px-4 py-2 text-sm font-medium ${activeTab === 'reviews'
//               ? 'border-b-2 border-blue-500 text-blue-600'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Reviews (122)
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className='mt-4'>
//           {activeTab === 'description' && (
//             <div className='text-gray-600'>
//               <p>
//                 An e-commerce website is an online platform that facilitates the buying and selling
//                 of products or services over the internet. It serves as a virtual marketplace where
//                 businesses and individuals can showcase their products, interact with customers, and
//                 conduct transactions without the need for a physical presence. E-commerce websites
//                 have gained immense popularity due to their convenience, accessibility, and the
//                 global reach they offer.
//               </p>
//               <p className='mt-2'>
//                 E-commerce websites typically display products or services along with detailed
//                 descriptions, images, prices, and any available variations (e.g., sizes, colors).
//                 Each product usually has its own dedicated page with relevant information.
//               </p>
//             </div>
//           )}
//           {activeTab === 'reviews' && (
//             <div className='text-gray-600'>
//               {/* Placeholder for reviews; replace with actual review components */}
//               <div className='mb-4 border-b pb-4'>
//                 <div className='flex justify-between'>
//                   <span className='font-semibold'>John Doe</span>
//                   <span className='text-yellow-500'>★★★★★</span>
//                 </div>
//                 <p className='mt-1'>Great product! Highly recommend.</p>
//                 <span className='text-sm text-gray-400'>Posted on Sept 15, 2025</span>
//               </div>
//               <div className='mb-4 border-b pb-4'>
//                 <div className='flex justify-between'>
//                   <span className='font-semibold'>Jane Smith</span>
//                   <span className='text-yellow-500'>★★★★☆</span>
//                 </div>
//                 <p className='mt-1'>Good quality, but sizing runs small.</p>
//                 <span className='text-sm text-gray-400'>Posted on Sept 10, 2025</span>
//               </div>
//               {/* Add more reviews as needed */}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* --------- display related products ---------- */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;



// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { FaInfoCircle } from 'react-icons/fa';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import LeatherJacketDescription from '../components/LeatherJacketDescription';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// import { toast } from 'sonner';


// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(0); // New state to track selected thumbnail
//   const [size, setSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('wine'); // Default color
//   const [showModal, setShowModal] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');
//   const [makeMeasure, setMakeMeasure] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Added missing state

//   // // Hardcoded colors matching the design (replace with productData.colors if available)
//   // const colors = [
//   //   { id: 'wine', name: 'Wine', hex: '#8B0000' },
//   //   { id: 'black', name: 'Black', hex: '#000000' },
//   //   { id: 'cognac', name: 'Cognac', hex: '#D2691E' },
//   //   { id: 'olive', name: 'Olive', hex: '#808000' },
//   //   { id: 'rose', name: 'Rose', hex: '#C71585' },
//   //   { id: 'tobacco', name: 'Tobacco', hex: '#A0522D' },
//   // ];
//   // Use productData.color from backend if available, otherwise fallback
//   const colors = productData?.color?.length
//   ? productData.color
//   : [
//       { id: 'wine', name: 'Wine', hex: '#8B0000' },
//       { id: 'black', name: 'Black', hex: '#000000' },
//       { id: 'cognac', name: 'Cognac', hex: '#D2691E' },
//       { id: 'olive', name: 'Olive', hex: '#808000' },
//       { id: 'rose', name: 'Rose', hex: '#C71585' },
//       { id: 'tobacco', name: 'Tobacco', hex: '#A0522D' },
//     ];


//   const toggleMakeMeasure = () => {
//     setMakeMeasure(!makeMeasure);
//   };

//   const toggleExpansion = () => {
//     setIsExpanded(prevState => !prevState);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   // const handleAddToCart = () => {
//   //   if (!size || !selectedColor) {
//   //     toast.error("Please select a size and color before adding to cart.", {
//   //       duration: 2000,
//   //     });
//   //     return;
//   //   }
//   //   setIsButtonDisabled(true);

//   //   setTimeout(() => {
//   //     toast.success("product added to cart!", {
//   //       duration: 2000,
//   //     });
//   //     setIsButtonDisabled(false);
//   //     window.scrollTo({ top: 0, behavior: 'smooth' });
//   //   }, 500);
//   //   // if(selectedSize === size){
//   //   //   toast.success("Size is selected")
//   //   // }
//   //   // setIsButtonDisabled(false)
//   // };

//   const handleAddToCart = () => {
//   if (!size || !selectedColor) {
//     toast.error("Please select a size and color before adding to cart.", { duration: 2000 });
//     return;
//   }

//   addToCart(productData._id, size, selectedColor, makeMeasure);
//   setIsButtonDisabled(true);

//   setTimeout(() => {
//     toast.success("Product added to cart!", { duration: 2000 });
//     setIsButtonDisabled(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, 500);
// };


//   const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
//                   Get your order delivered swiftly with tracking updates every step of the way.
//                   We use sustainable, recyclable materials to keep your delivery green and guilt-free.
//                   Products adhere to international quality benchmarks, ensuring top-tier performance.
//                   Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

//   const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

//   const fetchProductData = async () => {
//     const item = products.find(item => item._id === productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0); // Set initial selected index
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   useEffect(() => {
//   if (productData?.color?.length) {
//     setSelectedColor(productData.color[0].id); // Default to first color from backend
//   }
// }, [productData]);

//   if (!productData) {
//     return <div className='opacity-0'></div>;
//   }

//   return (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       {/*----------- Product Data-------------- */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/*---------- Product Images------------- */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row md:sticky md:top-4 self-start'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] lg:w-[10%] lg:h-[10%] w-full lg:mr-12 '>
//             {productData.image.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 cursor-pointer transition-all duration-200 w-[70px] h-[90px] sm:w-full sm:h-auto rounded-md  ${index === selectedIndex
//                     ? 'border-2 border-blue-500 rounded-md' // Blue border on selected thumbnail (mimics phone UI selection)
//                     : 'border-2 border-transparent'
//                   }`}
//                 onClick={() => {
//                   setImage(item);
//                   setSelectedIndex(index); // Update selected index
//                 }}
//               >
//                 <img
//                   src={item}
//                   alt=""
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//           {/* <div className='w-full sm:w-[80%] lg:w-[60%] sm:h-[80%] lg:h-[60%]'>
//             <img className='w-full h-auto' src={image} alt='' />
//           </div> */}
//           <div className='w-full sm:w-[80%] lg:w-[60%] flex justify-center items-center'>
//             <div className='w-full max-h-[600px] aspect-[3/4] overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-sm'>
//               <img
//                 className='w-full h-full object-contain'
//                 src={image}
//                 alt={productData.name}
//               />
//             </div>
//           </div>
//         </div>

//         {/* -------- Product Info ---------- */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_icon} alt='' className='w-3.5' />
//             <img src={assets.star_dull_icon} alt='' className='w-3.5' />
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-8'>
//             {/* Color Selection
//             <div>
//               <div className='flex items-center mb-2'>
//                 <p className='text-sm font-medium text-gray-700 mr-2'>Color :</p>
//                 <span className='text-sm text-gray-900'>{colors.find(c => c.id === selectedColor)?.name}</span>
//               </div>
//               <div className='flex gap-2 mb-2'>
//                 {colors.map((color, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedColor(color.id)}
//                     className={`w-10 h-10 lg:w-14 lg:h-14 rounded  transition-all duration-200 ${color.id === selectedColor
//                       ? 'border-black ring-1 ring-black ring-offset-2 scale-110'
//                       : 'border-transparent hover:border-gray-300 hover:scale-105'
//                       }`}
//                     style={{ backgroundColor: color.hex }}
//                     title={color.name}
//                   />
//                 ))}
//               </div>
//             </div> */}
//             {/* Color Selection */}
// <div>
//   <div className='flex items-center mb-2'>
//     <p className='text-sm font-medium text-gray-700 mr-2'>Color :</p>
//     <span className='text-sm text-gray-900'>
//       {colors.find(c => c.id === selectedColor)?.name}
//     </span>
//   </div>
//   <div className='flex gap-2 mb-2'>
//     {colors.map((color, index) => (
//       <button
//         key={index}
//         onClick={() => setSelectedColor(color.id)}
//         className={`w-10 h-10 lg:w-14 lg:h-14 rounded transition-all duration-200 ${
//           color.id === selectedColor
//             ? 'border-black ring-1 ring-black ring-offset-2 scale-110'
//             : 'border-transparent hover:border-gray-300 hover:scale-105'
//         }`}
//         style={{ backgroundColor: color.hex }}
//         title={color.name}
//       />
//     ))}
//   </div>
// </div>

//             {/* Size Selection */}
//             <div>
//               <div className='flex gap-0 justify-between mr-20 mb-2'>
//                 <p className='text-sm font-medium text-gray-700'>Select Size</p>
//                 <button className='underline hover:no-underline text-sm text-blue-600' onClick={() => setShowModal(true)}>
//                   Size Guide
//                 </button>
//                 {showModal && <Modal onclose={() => setShowModal(false)} />}
//               </div>
//               <div className='flex gap-2 mb-2'>
//                 {productData.sizes.map((item, index) => (
//                   <button
//                     onClick={() => setSize(item)}
//                     className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
//                     key={index}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {/* Made to Measure */}
//             <div className='flex flex-col justify-center items-center'>
//               <button
//                 onClick={toggleMakeMeasure}
//                 className='w-[90%] border border-gray-300 text-gray-800 font-semibold py-2.5 rounded-md hover:bg-gray-100 transition-colors mb-4'
//               >
//                 MADE TO MEASURE
//               </button>
//               {makeMeasure && (
//                 <div className='flex items-center justify-center text-sm md:text-base lg:text-lg text-gray-600 bg-gray-100 p-4 rounded-md w-[80%] -mb-4'>
//                   <FaInfoCircle className='mr-2 h-4 w-4 text-blue-500 flex-shrink-0' />
//                   Measurements can be added on the Cart page
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className='flex items-center justify-center'>
//             {/* <button
//               onClick={() => {
//                 addToCart(productData._id, size, selectedColor, makeMeasure);
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//                 handleAddToCart();
//               }}
//               className='w-[90%] bg-gray-500 text-white font-semibold py-2.5 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-400 '
//               disabled={!size}

//             >
//               ADD TO CART
//             </button> */}
//             <button
//               onClick={handleAddToCart} // Simplified: Just call the handler
//               className='w-[90%] bg-gray-500 text-white font-semibold py-2.5 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-400 '
//             >
//               ADD TO CART
//             </button>
//           </div>
//           <JacketLiningSelector />
//           <hr className='mt-8 sm:w-4/3' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>Every item is 100% original, crafted with premium materials for lasting style and comfort.</p>
//             <p>Enjoy secure cash on delivery options, plus multiple payment methods to suit your preference.</p>
//             <p>{shownContent}</p>
//             <p className='underline hover:no-underline cursor-pointer text-base text-gray-600' onClick={toggleExpansion}>
//               {isExpanded ? 'Read Less' : 'Read More'}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Description & Review Section ------------- */}
//       <div className='mt-20'>
//         <div className='flex border-b border-gray-200'>
//           <button
//             onClick={() => handleTabClick('description')}
//             className={`px-4 py-2 text-sm font-medium ${activeTab === 'description'
//               ? 'border-b-2 border-blue-500 text-blue-600'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Description
//           </button>
//           <button
//             onClick={() => handleTabClick('reviews')}
//             className={`px-4 py-2 text-sm font-medium ${activeTab === 'reviews'
//               ? 'border-b-2 border-blue-500 text-blue-600'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Reviews (122)
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className='mt-4'>
//           {activeTab === 'description' && (
//             <div className='text-gray-600'>
//               <p>
//                 An e-commerce website is an online platform that facilitates the buying and selling
//                 of products or services over the internet. It serves as a virtual marketplace where
//                 businesses and individuals can showcase their products, interact with customers, and
//                 conduct transactions without the need for a physical presence. E-commerce websites
//                 have gained immense popularity due to their convenience, accessibility, and the
//                 global reach they offer.
//               </p>
//               <p className='mt-2'>
//                 E-commerce websites typically display products or services along with detailed
//                 descriptions, images, prices, and any available variations (e.g., sizes, colors).
//                 Each product usually has its own dedicated page with relevant information.
//               </p>
//             </div>
//           )}
//           {activeTab === 'reviews' && (
//             <div className='text-gray-600'>
//               {/* Placeholder for reviews; replace with actual review components */}
//               <div className='mb-4 border-b pb-4'>
//                 <div className='flex justify-between'>
//                   <span className='font-semibold'>John Doe</span>
//                   <span className='text-yellow-500'>★★★★★</span>
//                 </div>
//                 <p className='mt-1'>Great product! Highly recommend.</p>
//                 <span className='text-sm text-gray-400'>Posted on Sept 15, 2025</span>
//               </div>
//               <div className='mb-4 border-b pb-4'>
//                 <div className='flex justify-between'>
//                   <span className='font-semibold'>Jane Smith</span>
//                   <span className='text-yellow-500'>★★★★☆</span>
//                 </div>
//                 <p className='mt-1'>Good quality, but sizing runs small.</p>
//                 <span className='text-sm text-gray-400'>Posted on Sept 10, 2025</span>
//               </div>
//               {/* Add more reviews as needed */}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* --------- display related products ---------- */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;




// import { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { FaInfoCircle } from 'react-icons/fa';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// import { toast } from 'sonner';
// import CartDrawer from '../components/CartDrawer';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [size, setSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');
//   const [makeMeasure, setMakeMeasure] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [drawerOpen, setDrawerOpen] =useState(false);

//   // ✅ Fetch product data
//   const fetchProductData = async () => {
//     const item = products.find(item => item._id === productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0);
//     }
//   };
//   const navigate = useNavigate();
//   const toggleCartDrawer = () =>{
//         setDrawerOpen(!drawerOpen);
//     };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   // ✅ Set default color (first available)
//   useEffect(() => {
//     if (productData?.color?.length) {
//       if (Array.isArray(productData.color)) {
//         setSelectedColor(productData.color[0]);
//       } else {
//         setSelectedColor(productData.color);
//       }
//     }
//   }, [productData]);

//   const handleAddToCart = () => {
//     if (!size || !selectedColor) {
//       toast.error('Please select a size and color before adding to cart.', { duration: 2000 });
//       return;
//     }

//     addToCart(productData._id, size, selectedColor, makeMeasure);
//     setIsButtonDisabled(true);

//     setTimeout(() => {
//       toast.success('Product added to cart!', { duration: 2000 });
//       setIsButtonDisabled(false);
//       // navigate("/cart");
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 500);
//   };

//   const toggleMakeMeasure = () => {
//     setMakeMeasure(!makeMeasure);
//   };

//   const toggleExpansion = () => {
//     setIsExpanded(prev => !prev);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   if (!productData) {
//     return <div className="opacity-0"></div>;
//   }

//   const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
//     Get your order delivered swiftly with tracking updates every step of the way.
//     We use sustainable, recyclable materials to keep your delivery green and guilt-free.
//     Products adhere to international quality benchmarks, ensuring top-tier performance.
//     Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

//   const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

//   return (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* -------- Product Layout ---------- */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* ---------- Product Images ------------- */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row md:sticky md:top-4 self-start">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] lg:w-[10%] lg:h-[10%] w-full lg:mr-12 ">
//             {productData.image.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 cursor-pointer transition-all duration-200 w-[70px] h-[90px] sm:w-full sm:h-auto rounded-md 
//                 ${index === selectedIndex ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
//                 onClick={() => {
//                   setImage(item);
//                   setSelectedIndex(index);
//                 }}
//               >
//                 <img src={item} alt="" className="w-full h-full object-cover rounded-md" />
//               </div>
//             ))}
//           </div>

//           <div className="w-full sm:w-[80%] lg:w-[60%] flex justify-center items-center">
//             <div className="w-full max-h-[600px] aspect-[3/4] overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-sm">
//               <img
//                 className="w-full h-full object-contain"
//                 src={image}
//                 alt={productData.name}
//               />
//             </div>
//           </div>
//         </div>

//         {/* ---------- Product Info ------------- */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3.5" />
//             <p className="pl-2">(122)</p>
//           </div>
//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p>
//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

//           {/* -------- Color Selection -------- */}
//           <div className="flex flex-col gap-4 my-8">
//             <div>
//               <div className="flex items-center mb-2">
//                 <p className="text-sm font-medium text-gray-700 mr-2">Color :</p>
//                 <span className="text-sm text-gray-900 capitalize">{selectedColor}</span>
//               </div>
//               <div className="flex gap-2 mb-2">
//                 {productData.color && productData.color.length > 0 ? (
//                   productData.color.map((clr, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedColor(clr)}
//                       className={`w-10 h-10 rounded-md border transition-all duration-200 ${
//                         selectedColor === clr
//                           ? 'ring-2 ring-black scale-110'
//                           : 'hover:ring-1 hover:ring-gray-400'
//                       }`}
//                       style={{ backgroundColor: clr.toLowerCase() }}
//                       title={clr}
//                     ></button>
//                   ))
//                 ) : (
//                   <p>No colors available</p>
//                 )}
//               </div>
//             </div>

//             {/* -------- Size Selection -------- */}
//             <div>
//               <div className="flex gap-0 justify-between mr-20 mb-2">
//                 <p className="text-sm font-medium text-gray-700">Select Size</p>
//                 <button
//                   className="underline hover:no-underline text-sm text-blue-600"
//                   onClick={() => setShowModal(true)}
//                 >
//                   Size Guide
//                 </button>
//                 {showModal && <Modal onclose={() => setShowModal(false)} />}
//               </div>
//               <div className="flex gap-2 mb-2 flex-wrap">
//                 {productData.sizes && productData.sizes.length > 0 ? (
//                   productData.sizes.map((s, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSize(s)}
//                       className={`border py-2 px-4 rounded-md ${
//                         size === s
//                           ? 'border-orange-500 bg-orange-100'
//                           : 'border-gray-300 hover:bg-gray-100'
//                       }`}
//                     >
//                       {s}
//                     </button>
//                   ))
//                 ) : (
//                   <p>No sizes available</p>
//                 )}
//               </div>
//             </div>

//             {/* -------- Made to Measure -------- */}
//             <div className="flex flex-col justify-center items-center">
//               <button
//                 onClick={toggleMakeMeasure}
//                 className="w-[90%] border border-gray-300 text-gray-800 font-semibold py-2.5 rounded-md hover:bg-gray-100 transition-colors mb-4"
//               >
//                 MADE TO MEASURE
//               </button>
//               {makeMeasure && (
//                 <div className="flex items-center justify-center text-sm md:text-base lg:text-lg text-gray-600 bg-gray-100 p-4 rounded-md w-[80%] -mb-4">
//                   <FaInfoCircle className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
//                   Measurements can be added on the Cart page
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* -------- Add to Cart Button -------- */}
//           <div className="flex items-center justify-center">
//             <button
//               onClick={() => {
//               handleAddToCart();
//               toggleCartDrawer();
//   }}
//               disabled={isButtonDisabled}
//               className="w-[90%] bg-gray-500 text-white font-semibold py-2.5 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-400"
//             >
//               ADD TO CART
//             </button>
//           </div>
//           <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//           <JacketLiningSelector />
//           <hr className="mt-8 sm:w-4/3" />

//           {/* -------- Description Text -------- */}
//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>Every item is 100% original, crafted with premium materials for lasting style and comfort.</p>
//             <p>Enjoy secure cash on delivery options, plus multiple payment methods to suit your preference.</p>
//             <p>{shownContent}</p>
//             <p
//               className="underline hover:no-underline cursor-pointer text-base text-gray-600"
//               onClick={toggleExpansion}
//             >
//               {isExpanded ? 'Read Less' : 'Read More'}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Tabs (Description / Reviews) ---------- */}
//       <div className="mt-20">
//         <div className="flex border-b border-gray-200">
//           <button
//             onClick={() => handleTabClick('description')}
//             className={`px-4 py-2 text-sm font-medium ${
//               activeTab === 'description'
//                 ? 'border-b-2 border-blue-500 text-blue-600'
//                 : 'text-gray-500 hover:text-gray-700'
//             }`}
//           >
//             Description
//           </button>
//           <button
//             onClick={() => handleTabClick('reviews')}
//             className={`px-4 py-2 text-sm font-medium ${
//               activeTab === 'reviews'
//                 ? 'border-b-2 border-blue-500 text-blue-600'
//                 : 'text-gray-500 hover:text-gray-700'
//             }`}
//           >
//             Reviews (122)
//           </button>
//         </div>

//         <div className="mt-4">
//           {activeTab === 'description' && (
//             <div className="text-gray-600">
//               <p>
//                 An e-commerce website is an online platform that facilitates the buying and selling
//                 of products or services over the internet. It serves as a virtual marketplace where
//                 businesses and individuals can showcase their products, interact with customers, and
//                 conduct transactions without the need for a physical presence.
//               </p>
//               <p className="mt-2">
//                 E-commerce websites typically display products or services along with detailed
//                 descriptions, images, prices, and any available variations (e.g., sizes, colors).
//               </p>
//             </div>
//           )}

//           {activeTab === 'reviews' && (
//             <div className="text-gray-600">
//               <div className="mb-4 border-b pb-4">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">John Doe</span>
//                   <span className="text-yellow-500">★★★★★</span>
//                 </div>
//                 <p className="mt-1">Great product! Highly recommend.</p>
//                 <span className="text-sm text-gray-400">Posted on Sept 15, 2025</span>
//               </div>
//               <div className="mb-4 border-b pb-4">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Jane Smith</span>
//                   <span className="text-yellow-500">★★★★☆</span>
//                 </div>
//                 <p className="mt-1">Good quality, but sizing runs small.</p>
//                 <span className="text-sm text-gray-400">Posted on Sept 10, 2025</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* -------- Related Products -------- */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { FaInfoCircle } from 'react-icons/fa';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// // import { toast } from 'sonner';
// import { toast } from 'react-toastify'
// import CartDrawer from '../components/CartDrawer';

// // ✅ Color Map (handles all your named colors)
// const colorMap = {
//   wine: '#722F37',
//   red: '#FF0000',
//   black: '#000000',
//   olive: '#808000',
//   green: '#008000',
//   cognac: '#D2691E',
//   white: '#FFFFFF',
//   yellow: '#FFFF00',
//   gray: '#808080',
//   rose: '#FF007F',
//   tobacco: '#A0522D',
//   navy: '#000080',
//   beige: '#F5F5DC',
//   blue: '#0000FF',
//   brown: '#8B4513',
// };

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [size, setSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');
//   const [makeMeasure, setMakeMeasure] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [displayPrice, setDisplayPrice] = useState(0);

//   const navigate = useNavigate();

//   // ✅ Fetch product data
//   const fetchProductData = async () => {
//     const item = products.find((item) => item._id === productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0);
//     }
//   };

//   const toggleCartDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   // ✅ Set default color (first available)
//   useEffect(() => {
//     if (productData?.color?.length) {
//       if (Array.isArray(productData.color)) {
//         setSelectedColor(productData.color[0]);
//       } else {
//         setSelectedColor(productData.color);
//       }
//     }
//   }, [productData]);

//   useEffect(() => {
//     if (productData) {
//       setDisplayPrice(productData.price);
//     }
//   }, [productData]);


//   const handleAddToCart = () => {
//     if (!size || !selectedColor) {
//       toast.error('Please select a size and color before adding to cart.', { duration: 2000 });
//       return;
//     }

//     addToCart(productData._id, size, selectedColor, makeMeasure);
//     setIsButtonDisabled(true);

//     setTimeout(() => {
//       // toast.success('Product added to cart!', { duration: 2000 });
//       setIsButtonDisabled(false);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 500);
//   };

//   const toggleMakeMeasure = () => setMakeMeasure(!makeMeasure);
//   const toggleExpansion = () => setIsExpanded((prev) => !prev);
//   const handleTabClick = (tab) => setActiveTab(tab);

//   if (!productData) {
//     return <div className="opacity-0"></div>;
//   }

//   const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
//     Get your order delivered swiftly with tracking updates every step of the way.
//     We use sustainable, recyclable materials to keep your delivery green and guilt-free.
//     Products adhere to international quality benchmarks, ensuring top-tier performance.
//     Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

//   const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

//   return (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* -------- Product Layout ---------- */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* ---------- Product Images ------------- */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row md:sticky md:top-4 self-start">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] lg:w-[10%] lg:h-[10%] w-full lg:mr-12">
//             {productData.image.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 cursor-pointer transition-all duration-200 w-[70px] h-[90px] sm:w-full sm:h-auto rounded-md 
//                 ${index === selectedIndex ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
//                 onClick={() => {
//                   setImage(item);
//                   setSelectedIndex(index);
//                 }}
//               >
//                 <img src={item} alt="" className="w-full h-full object-cover rounded-md" />
//               </div>
//             ))}
//           </div>

//           <div className="w-full sm:w-[80%] lg:w-[60%] flex justify-center items-center">
//             <div className="w-full max-h-[600px] aspect-[3/4] overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-sm">
//               <img className="w-full h-full object-contain" src={image} alt={productData.name} />
//             </div>
//           </div>
//         </div>

//         {/* ---------- Product Info ------------- */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3.5" />
//             <p className="pl-2">(122)</p>
//           </div>
//           {/* <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p> */}
//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {displayPrice.toFixed(2)}
//           </p>

//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

//           {/* -------- Color Selection -------- */}
//           <div className="flex flex-col gap-4 my-8">
//             <div>
//               <div className="flex items-center mb-2">
//                 <p className="text-sm font-medium text-gray-700 mr-2">Color :</p>
//                 <span className="text-sm text-gray-900 capitalize">{selectedColor}</span>
//               </div>
//               <div className="flex gap-3 flex-wrap">
//                 {productData.color && productData.color.length > 0 ? (
//                   productData.color.map((clr, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                       <button
//                         onClick={() => setSelectedColor(clr)}
//                         className={`w-10 h-10 rounded-md border transition-all duration-200 ${selectedColor === clr
//                             ? 'ring-2 ring-black scale-110'
//                             : 'hover:ring-1 hover:ring-gray-400'
//                           }`}
//                         style={{
//                           backgroundColor: colorMap[clr?.toLowerCase()] || clr.toLowerCase(),
//                         }}
//                         title={clr}
//                       ></button>
//                       <p className="text-xs text-gray-600 mt-1 capitalize">{clr}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No colors available</p>
//                 )}
//               </div>
//             </div>

//             {/* -------- Size Selection -------- */}
//             <div>
//               <div className="flex gap-0 justify-between mr-20 mb-2">
//                 <p className="text-sm font-medium text-gray-700">Select Size</p>
//                 <button
//                   className="underline hover:no-underline text-sm text-blue-600"
//                   onClick={() => setShowModal(true)}
//                 >
//                   Size Guide
//                 </button>
//                 {showModal && <Modal onclose={() => setShowModal(false)} />}
//               </div>
//               <div className="flex gap-2 mb-2 flex-wrap">
//                 {productData.sizes && productData.sizes.length > 0 ? (
//                   productData.sizes.map((s, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSize(s)}
//                       className={`border py-2 px-4 rounded-md ${size === s
//                           ? 'border-orange-500 bg-orange-100'
//                           : 'border-gray-300 hover:bg-gray-100'
//                         }`}
//                     >
//                       {s}
//                     </button>
//                   ))
//                 ) : (
//                   <p>No sizes available</p>
//                 )}
//               </div>
//             </div>

//             {/* -------- Made to Measure -------- */}
//             <div className="flex flex-col justify-center items-center">
//               <button
//                 onClick={toggleMakeMeasure}
//                 className="w-[90%] border border-gray-300 text-gray-800 font-semibold py-2.5 rounded-md hover:bg-gray-100 transition-colors mb-4"
//               >
//                 MADE TO MEASURE
//               </button>
//               {makeMeasure && (
//                 <div className="flex items-center justify-center text-sm md:text-base lg:text-lg text-gray-600 bg-gray-100 p-4 rounded-md w-[80%] -mb-4">
//                   <FaInfoCircle className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
//                   Measurements can be added on the Cart page
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* -------- Add to Cart Button -------- */}
//           <div className="flex items-center justify-center">
//             <button
//               onClick={() => {
//                 handleAddToCart();
//                 toggleCartDrawer();
//               }}
//               disabled={isButtonDisabled}
//               className="w-[90%] bg-gray-500 text-white font-semibold py-2.5 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-400"
//             >
//               ADD TO CART
//             </button>
//           </div>

//           <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//           {/* <JacketLiningSelector /> */}
//           <JacketLiningSelector
//             basePrice={productData.price}
//             onPriceChange={(newPrice) => setDisplayPrice(newPrice)}
//           />

//           <hr className="mt-8 sm:w-4/3" />

//           {/* -------- Description Text -------- */}
//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>Every item is 100% original, crafted with premium materials for lasting style and comfort.</p>
//             <p>Enjoy secure cash on delivery options, plus multiple payment methods to suit your preference.</p>
//             <p>{shownContent}</p>
//             <p
//               className="underline hover:no-underline cursor-pointer text-base text-gray-600"
//               onClick={toggleExpansion}
//             >
//               {isExpanded ? 'Read Less' : 'Read More'}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Tabs (Description / Reviews) ---------- */}
//       <div className="mt-20">
//         <div className="flex border-b border-gray-200">
//           <button
//             onClick={() => handleTabClick('description')}
//             className={`px-4 py-2 text-sm font-medium ${activeTab === 'description'
//                 ? 'border-b-2 border-blue-500 text-blue-600'
//                 : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Description
//           </button>
//           <button
//             onClick={() => handleTabClick('reviews')}
//             className={`px-4 py-2 text-sm font-medium ${activeTab === 'reviews'
//                 ? 'border-b-2 border-blue-500 text-blue-600'
//                 : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Reviews (122)
//           </button>
//         </div>

//         <div className="mt-4">
//           {activeTab === 'description' && (
//             <div className="text-gray-600">
//               <p>
//                 An e-commerce website is an online platform that facilitates the buying and selling
//                 of products or services over the internet. It serves as a virtual marketplace where
//                 businesses and individuals can showcase their products, interact with customers, and
//                 conduct transactions without the need for a physical presence.
//               </p>
//               <p className="mt-2">
//                 E-commerce websites typically display products or services along with detailed
//                 descriptions, images, prices, and any available variations (e.g., sizes, colors).
//               </p>
//             </div>
//           )}

//           {activeTab === 'reviews' && (
//             <div className="text-gray-600">
//               <div className="mb-4 border-b pb-4">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">John Doe</span>
//                   <span className="text-yellow-500">★★★★★</span>
//                 </div>
//                 <p className="mt-1">Great product! Highly recommend.</p>
//                 <span className="text-sm text-gray-400">Posted on Sept 15, 2025</span>
//               </div>
//               <div className="mb-4 border-b pb-4">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Jane Smith</span>
//                   <span className="text-yellow-500">★★★★☆</span>
//                 </div>
//                 <p className="mt-1">Good quality, but sizing runs small.</p>
//                 <span className="text-sm text-gray-400">Posted on Sept 10, 2025</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* -------- Related Products -------- */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;



import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { FaInfoCircle } from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';
import Modal from '../components/Modal';
import JacketLiningSelector from '../components/JacketLiningSelector';
import { toast } from 'react-toastify'
import CartDrawer from '../components/CartDrawer';

// ✅ Color Map (case-insensitive handling)
const colorMap = {
  wine: '#722F37',
  red: '#FF0000',
  black: '#000000',
  olive: '#808000',
  green: '#008000',
  cognac: '#D2691E',
  white: '#FFFFFF',
  yellow: '#FFFF00',
  gray: '#808080',
  rose: '#FF007F',
  tobacco: '#A0522D',
  navy: '#000080',
  beige: '#F5F5DC',
  blue: '#0000FF',
  brown: '#8B4513',
};

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [size, setSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [makeMeasure, setMakeMeasure] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(0);

  const navigate = useNavigate();

  // ✅ Fetch product data
  const fetchProductData = async () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
      setSelectedIndex(0);
    }
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // ✅ Set default color (first available)
  useEffect(() => {
    if (productData?.color?.length) {
      if (Array.isArray(productData.color)) {
        setSelectedColor(productData.color[0]);
      } else {
        setSelectedColor(productData.color);
      }
    }
  }, [productData]);

  useEffect(() => {
    if (productData) {
      setDisplayPrice(productData.price);
    }
  }, [productData]);

  const handleAddToCart = () => {
    if (!size || !selectedColor) {
      toast.error('Please select a size and color before adding to cart.', { duration: 2000 });
      return;
    }

    // ✅ Calculate customPrice (addon only: displayPrice - base)
    const customPrice = displayPrice - productData.price;
    console.log(`Adding to cart: Base ${productData.price}, Custom ${customPrice}, Total ${displayPrice}`);  // 🔍 Debug

    addToCart(productData._id, size, selectedColor, customPrice);  // ✅ Pass customPrice (number), not makeMeasure
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success('Product added to cart!', { duration: 2000 });
      setIsButtonDisabled(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);  // Sync with toast duration
  };

  const toggleMakeMeasure = () => setMakeMeasure(!makeMeasure);
  const toggleExpansion = () => setIsExpanded((prev) => !prev);
  const handleTabClick = (tab) => setActiveTab(tab);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
    Get your order delivered swiftly with tracking updates every step of the way.
    We use sustainable, recyclable materials to keep your delivery green and guilt-free.
    Products adhere to international quality benchmarks, ensuring top-tier performance.
    Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

  const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

  // ✅ Custom breakdown text
  const customBreakdown = displayPrice > productData.price ? ` (incl. +${currency}${(displayPrice - productData.price).toFixed(2)} customization)` : '';

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-10">
      {/* -------- Product Layout ---------- */}
      <div className="flex gap-10 sm:gap-12 flex-col sm:flex-row">
        {/* ---------- Product Images ------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row md:sticky md:top-28 self-start ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] lg:w-[10%] lg:h-[10%] w-full lg:mr-12">
            {productData.image.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 cursor-pointer transition-all duration-200 w-[70px] h-[90px] sm:w-full sm:h-auto rounded-md 
                ${index === selectedIndex ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
                onClick={() => {
                  setImage(item);
                  setSelectedIndex(index);
                }}
              >
                <img src={item} alt="" className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>

          <div className="w-full sm:w-[80%] lg:w-[60%] flex justify-center items-center">
            <div className="w-full max-h-[600px] aspect-[3/4] overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-sm">
              <img className="w-full h-full object-contain" src={image} alt={productData.name} />
            </div>
          </div>
        </div>

        {/* ---------- Product Info ------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          {/* ✅ Price with custom breakdown */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {displayPrice.toFixed(2)}{customBreakdown}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* -------- Color Selection -------- */}
          <div className="flex flex-col gap-4 my-8">
            <div>
              <div className="flex items-center mb-2">
                <p className="text-sm font-medium text-gray-700 mr-2">Color :</p>
                <span className="text-sm text-gray-900 capitalize">{selectedColor}</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {productData.color && productData.color.length > 0 ? (
                  productData.color.map((clr, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <button
                        onClick={() => setSelectedColor(clr)}
                        className={`w-10 h-10 rounded-md border transition-all duration-200 ${selectedColor === clr
                          ? 'ring-2 ring-black scale-110'
                          : 'hover:ring-1 hover:ring-gray-400'
                          }`}
                        style={{
                          backgroundColor: colorMap[clr?.toLowerCase()] || '#CCCCCC',  // Fallback gray
                        }}
                        title={clr}
                      ></button>
                      <p className="text-xs text-gray-600 mt-1 capitalize">{clr}</p>
                    </div>
                  ))
                ) : (
                  <p>No colors available</p>
                )}
              </div>
            </div>

            {/* -------- Size Selection -------- */}
            <div>
              <div className="flex gap-0 justify-between mr-20 mb-2">
                <p className="text-sm font-medium text-gray-700">Select Size</p>
                <button
                  className="underline hover:no-underline text-sm text-blue-600"
                  onClick={() => setShowModal(true)}
                >
                  Size Guide
                </button>
                {showModal && <Modal onclose={() => setShowModal(false)} />}
              </div>
              <div className="flex gap-2 mb-2 flex-wrap">
                {productData.sizes && productData.sizes.length > 0 ? (
                  productData.sizes.map((s, index) => (
                    <button
                      key={index}
                      onClick={() => setSize(s)}
                      className={`border py-2 px-4 rounded-md ${size === s
                        ? 'border-orange-500 bg-orange-100'
                        : 'border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                      {s}
                    </button>
                  ))
                ) : (
                  <p>No sizes available</p>
                )}
              </div>
            </div>

            {/* -------- Made to Measure -------- */}
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={toggleMakeMeasure}
                className="w-[90%] border border-gray-300 text-gray-800 font-semibold py-2.5 rounded-md hover:bg-gray-100 transition-colors mb-4"
              >
                MADE TO MEASURE
              </button>
              {makeMeasure && (
                <div className="flex items-center justify-center text-sm md:text-base lg:text-lg text-gray-600 bg-gray-100 p-4 rounded-md w-[80%] -mb-4">
                  <FaInfoCircle className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                  Measurements can be added on the Cart page
                </div>
              )}
            </div>
          </div>

          {/* -------- Add to Cart Button -------- */}
          <div className="flex items-center justify-center sticky top-24 z-[999]" >
            <button
              onClick={() => {
                handleAddToCart();
                toggleCartDrawer();
              }}
              disabled={isButtonDisabled || !size || !selectedColor}
              className="w-[90%] bg-gray-500 text-white font-semibold py-2.5 rounded-md hover:bg-indigo-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed md:sticky md:top-4 self-start z-999"
            >
              ADD TO CART
            </button>
          </div>

          {/* <div className="flex items-center justify-center sticky top-[18%] z-[999]">  
            <button
              onClick={handleAddToCart}
              // disabled={isLoading}  // Assuming you have this
              className="w-[90%] bg-gray-500 text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed md:sticky md:top-4 self-start z-[1000]"  // Higher z here
            >
              ADD TO CART
            </button>
          </div> */}

          <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
          <JacketLiningSelector
            basePrice={productData.price}
            onPriceChange={(newPrice) => setDisplayPrice(newPrice)}
          />

          <hr className="mt-8 sm:w-4/3" />

          {/* -------- Description Text -------- */}
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Every item is 100% original, crafted with premium materials for lasting style and comfort.</p>
            <p>Enjoy secure cash on delivery options, plus multiple payment methods to suit your preference.</p>
            <p>{shownContent}</p>
            <p
              className="underline hover:no-underline cursor-pointer text-base text-gray-600"
              onClick={toggleExpansion}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Tabs (Description / Reviews) ---------- */}
      <div className="mt-20">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => handleTabClick('description')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'description'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Description
          </button>
          <button
            onClick={() => handleTabClick('reviews')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'reviews'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Reviews (122)
          </button>
        </div>

        <div className="mt-4">
          {activeTab === 'description' && (
            <div className="text-gray-600">
              <p>
                An e-commerce website is an online platform that facilitates the buying and selling
                of products or services over the internet. It serves as a virtual marketplace where
                businesses and individuals can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
              </p>
              <p className="mt-2">
                E-commerce websites typically display products or services along with detailed
                descriptions, images, prices, and any available variations (e.g., sizes, colors).
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="text-gray-600">
              <div className="mb-4 border-b pb-4">
                <div className="flex justify-between">
                  <span className="font-semibold">John Doe</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="mt-1">Great product! Highly recommend.</p>
                <span className="text-sm text-gray-400">Posted on Sept 15, 2025</span>
              </div>
              <div className="mb-4 border-b pb-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Jane Smith</span>
                  <span className="text-yellow-500">★★★★☆</span>
                </div>
                <p className="mt-1">Good quality, but sizing runs small.</p>
                <span className="text-sm text-gray-400">Posted on Sept 10, 2025</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* -------- Related Products -------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;