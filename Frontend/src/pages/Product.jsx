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



// import { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { FaInfoCircle } from 'react-icons/fa';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// import { toast } from 'react-toastify'
// import CartDrawer from '../components/CartDrawer';
// import { FaRegStar } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

// // ✅ Color Map (case-insensitive handling)
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
//   'dark-wine': '#453333',
//   'tobacco-dark': '#6e351a',
// };

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const { wishlist, toggleWishlistItem } = useContext(ShopContext);
//   const { submitReview, getProductReviews, token, backendUrl, deleteReview, userId } = useContext(ShopContext);
//   const { getSingleProduct } = useContext(ShopContext);

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
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [sizeMultiplier, setSizeMultiplier] = useState(1);
//   const [sizeStock, setSizeStock] = useState(0);


//   const navigate = useNavigate();

//   // ✅ Wishlist check
//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === productId)
//     : false;

//   // ✅ Fetch product data
//   // const fetchProductData = async () => {
//   //   const item = products.find((item) => item._id === productId);
//   //   if (item) {
//   //     setProductData(item);
//   //     setImage(item.image[0]);
//   //     setSelectedIndex(0);
//   //   }
//   // };


//   const fetchProductData = async () => {
//     const item = await getSingleProduct(productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0);
//       setDisplayPrice(item.price);
//       setSizeMultiplier(1);
//     }
//   };

//   const loadReviews = async () => {
//     const data = await getProductReviews(productId);
//     setReviews(data);
//   };

//   const toggleCartDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleSizeSelect = (sizeObj) => {
//     console.log("Size clicked:", sizeObj);

//     if (!sizeObj) {
//       console.log("Invalid size object");
//       return;
//     }

//     if (typeof sizeObj === 'string') {
//       setSize(sizeObj);
//       setSizeMultiplier(1);
//       setSizeStock(0);
//     } else if (typeof sizeObj === 'object' && sizeObj.size) {
//       setSize(sizeObj.size);
//       setSizeMultiplier(sizeObj.priceMultiplier || 1);
//       setSizeStock(sizeObj.stock || 0);
//       console.log(`Size updated: ${sizeObj.size}, Multiplier: ${sizeObj.priceMultiplier}`);
//     }
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

//     // ✅ Calculate customPrice (addon only: displayPrice - base)
//     const customPrice = displayPrice - productData.price;
//     console.log(`Adding to cart: Base ${productData.price}, Custom ${customPrice}, Total ${displayPrice}`);  // 🔍 Debug

//     addToCart(productData._id, size, selectedColor, customPrice);  // ✅ Pass customPrice (number), not makeMeasure
//     setIsButtonDisabled(true);

//     setTimeout(() => {
//       toast.success('Product added to cart!', { duration: 2000 });
//       setIsButtonDisabled(false);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 2000);  // Sync with toast duration
//   };

//   const handleReviewSubmit = async () => {
//     if (!token) return toast.error("Please login first");

//     if (!rating || !comment.trim()) {
//       return toast.error("Please add rating and comment");
//     }

//     const success = await submitReview(productId, rating, comment);

//     if (success) {
//       setComment("");
//       setRating(5);
//       loadReviews();
//     }
//   };

//   useEffect(() => {
//     if (productId) {
//       loadReviews();
//     }
//   }, [productId]);

//   const toggleMakeMeasure = () => setMakeMeasure(!makeMeasure);
//   const toggleExpansion = () => setIsExpanded((prev) => !prev);
//   const handleTabClick = (tab) => setActiveTab(tab);

//   useEffect(() => {
//     if (productData) {
//       console.log("ProductData loaded:", {
//         name: productData.name,
//         price: productData.price,
//         sizes: productData.sizes,
//         sizeType: Array.isArray(productData.sizes) ? typeof productData.sizes[0] : 'unknown'
//       });
//     }
//   }, [productData]);

//   useEffect(() => {
//     if (productData?.color?.length) {
//       // ✅ FIXED: Handle both old (string) and new (object) formats
//       const firstColor = productData.color[0];
//       let colorName;

//       if (typeof firstColor === 'string') {
//         // Old format: just a string
//         colorName = firstColor;
//       } else if (typeof firstColor === 'object' && firstColor.name) {
//         // New format: object with name property
//         colorName = firstColor.name;
//       } else {
//         colorName = 'Unknown';
//       }

//       setSelectedColor(colorName);
//     }
//   }, [productData]);

//   useEffect(() => {
//     if (productData && productData.price) {
//       const multiplier = sizeMultiplier || 1;
//       const baseSizePrice = productData.price * multiplier;
//       console.log(`🔄 Price HOOK fired: Base ${productData.price} × Multiplier ${multiplier} = ${baseSizePrice}`);
//       setDisplayPrice(baseSizePrice);
//     }
//   }, [sizeMultiplier, productData?.price]);

//   useEffect(() => {
//     if (size) {
//       console.log(`✅ Size state: ${size}, Multiplier: ${sizeMultiplier}, Stock: ${sizeStock}`);
//     }
//   }, [size, sizeMultiplier, sizeStock]);

//   // ✅ RENDER
//   if (!productData) {
//     return <div className="opacity-0"></div>;
//   }


//   const avgRating = reviews.length > 0
//     ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
//     : 0;

//   const roundedRating = Math.round(avgRating);

//   const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
//     Get your order delivered swiftly with tracking updates every step of the way.
//     We use sustainable, recyclable materials to keep your delivery green and guilt-free.
//     Products adhere to international quality benchmarks, ensuring top-tier performance.
//     Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

//   const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

//   // ✅ Custom breakdown text
//   const customBreakdown = displayPrice > productData.price ? ` (incl. +${currency}${(displayPrice - productData.price).toFixed(2)} for size/customization)` : '';

//   return (
//     <div className="border-t-2 pt-4 transition-opacity ease-in duration-500 opacity-100 px-10">
//       {/* -------- Product Layout ---------- */}
//       <div className="flex gap-10 sm:gap-12 flex-col sm:flex-row">
//         {/* ---------- Product Images ------------- */}
//         <div className="flex flex-col-reverse gap-3 sm:flex-row md:sticky md:top-28 self-start w-full lg:w-[40%]">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] lg:w-[10%] lg:h-[10%] w-full lg:mr-10 gap-1">
//             {productData.image.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 cursor-pointer transition-all duration-200 w-[70px] h-[50px] sm:w-full  rounded-md
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

//           <div className="w-full sm:w-[80%] lg:w-[70%] flex justify-center items-center">
//             <div className="w-full max-h-[400px] aspect-[3/4] overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-sm">
//               <img className="w-full h-full object-contain" src={image} alt={productData.name} />
//             </div>
//           </div>
//         </div>

//         {/* ---------- Product Info ------------- */}
//         <div className="w-full lg:w-[60%]">
//           <h1 className="lg:font-[400] text-gray-900 lg:text-[22px] mt-4 lg:mt-0 lg:mr-12 leading-8">{productData.name}</h1>
//           {/* <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3.5" />
//             <p className="pl-2">(122)</p>
//           </div> */}

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(5)].map((_, index) => (
//               <span key={index} className="text-[#de7921] text-sm">
//                 {index < roundedRating ? <FaStar /> : <FaRegStar />}
//               </span>
//             ))}
//             <p className="pl-2 text-sm text-gray-600">({reviews.length})</p>
//           </div>

//           {/* ✅ Price with custom breakdown */}
//           {/* <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {displayPrice.toFixed(2)}{customBreakdown}
//           </p> */}
//           {productData.discountPrice > 0 ? (
//             productData.discountActive ? (
//               <div className="flex items-center gap-3 mt-5">
//                 <p className="text-2xl font-medium text-gray-500 line-through">
//                   {currency}{displayPrice.toFixed(2)}
//                 </p>
//                 <p className="text-3xl font-semibold text-green-600">
//                   {currency}
//                   {(displayPrice - (displayPrice * productData.discountPrice / 100)).toFixed(2)}
//                 </p>
//               </div>
//             ) : (
//               <p className="mt-5 text-3xl font-semibold text-green-700">
//                 {currency}
//                 {(displayPrice - (displayPrice * productData.discountPrice / 100)).toFixed(2)}
//               </p>
//             )
//           ) : (
//             <p className="mt-5 text-3xl font-medium text-gray-800">
//               {currency}{displayPrice.toFixed(2)}
//               <span className="text-sm text-gray-500">{customBreakdown}</span>
//             </p>
//           )}

//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

//           {/* -------- Color Selection -------- */}
//           <div className="flex flex-col gap-4 my-8">
//             {/* <div>
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
//                           ? 'ring-2 ring-black scale-110'
//                           : 'hover:ring-1 hover:ring-gray-400'
//                           }`}
//                         style={{
//                           backgroundColor: colorMap[clr?.toLowerCase()] || '#CCCCCC',  // Fallback gray
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
//             </div> */}

//             <div>
//               <div className="flex items-center mb-2">
//                 <p className="text-sm font-medium text-gray-700 mr-2">Color :</p>
//                 <span className="text-sm text-gray-900 capitalize">{selectedColor}</span>
//               </div>
//               <div className="flex gap-3 flex-wrap">
//                 {productData.color && productData.color.length > 0 ? (
//                   productData.color.map((colorObj, index) => {
//                     // ✅ FIXED: Handle both old (string) and new (object) formats
//                     let colorName, colorHex;

//                     if (typeof colorObj === 'string') {
//                       // Old format: just a string like "Red" or "Black"
//                       colorName = colorObj;
//                       // Try to find hex from colorMap, otherwise use a default gray
//                       colorHex = colorMap[colorObj.toLowerCase()] || '#CCCCCC';
//                     } else if (typeof colorObj === 'object' && colorObj.name) {
//                       // New format: object with {name, hex}
//                       colorName = colorObj.name;
//                       colorHex = colorObj.hex || '#CCCCCC';
//                     } else {
//                       // Fallback
//                       colorName = 'Unknown';
//                       colorHex = '#CCCCCC';
//                     }

//                     const isSelected = selectedColor === colorName;
//                     return (
//                       <div key={index} className="flex flex-col items-center">
//                         <button
//                           onClick={() => setSelectedColor(colorName)}
//                           className={`w-10 h-10 rounded-md border-2 transition-all duration-200 ${isSelected
//                             ? 'ring- ring-black scale-110 border-black'
//                             : 'border-gray-800 hover:ring-1 hover:ring-gray-400'
//                             }`}
//                           style={{
//                             backgroundColor: colorHex,
//                           }}
//                           title={`${colorName} (${colorHex})`}
//                         ></button>
//                         <p className="text-xs text-gray-600 mt-1 capitalize text-center max-w-[60px]">
//                           {/* {colorName} */}
//                         </p>
//                       </div>
//                     );
//                   })
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
//                   productData.sizes.map((sizeObj, index) => {
//                     const sizeLabel = sizeObj?.size || sizeObj;
//                     const multiplier = sizeObj?.priceMultiplier || 1;
//                     const stock = sizeObj?.stock || 0;
//                     const sizePrice = (productData.price * multiplier).toFixed(2);
//                     // ✅ FIXED: If stock is 0, treat as in stock (temp fix for testing)
//                     const isInStock = stock > 0 || stock === 0; // Always true for now
//                     const isSelected = size === sizeLabel;

//                     return (
//                       <button
//                         key={index}
//                         type="button"
//                         onClick={() => {
//                           console.log("🔥 SIZE CLICKED:", sizeObj);
//                           handleSizeSelect(sizeObj);
//                         }}
//                         disabled={!isInStock}
//                         className={`border-2 border-gray-400 py-2 px-4 rounded-md flex flex-col items-center gap-1 transition-all ${isSelected
//                           ? 'border-orange-500 bg-orange-100 scale-105'
//                           : 'border-gray-300 hover:border-orange-300 hover:bg-gray-50'
//                           } ${!isInStock ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                         title={!isInStock ? 'Out of stock' : `Select ${sizeLabel}`}
//                       >
//                         <span className="font-semibold text-gray-800">{sizeLabel}</span>
//                         <span className="text-xs text-gray-600 font-medium">
//                           ${sizePrice}
//                         </span>
//                       </button>
//                     );
//                   })
//                 ) : (
//                   <p className="text-gray-500">No sizes available</p>
//                 )}
//               </div>

//               {size && sizeStock <= 0 && (
//                 <p className="text-sm text-red-600 font-medium">⚠️ This size is out of stock</p>
//               )}
//               {size && sizeStock > 0 && sizeStock < 5 && (
//                 <p className="text-sm text-orange-600 font-medium">⚠️ Only {sizeStock} left in stock</p>
//               )}
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

//           <div className="flex flex-col items-center gap-3  top-24 z-[9] mb-10">
//             <button
//               onClick={() => toggleWishlistItem(productId)}
//               className="w-[90%] border border-gray-300 py-2.5 rounded-md
//              text-gray-800 hover:bg-gray-100 transition-colors"
//             >
//               {isWishlisted ? "❤️ Remove from Wishlist" : "🖤 Add to Wishlist"}
//             </button>
//           </div>

//           {/* -------- Add to Cart Button -------- */}
//           <div className="flex items-center justify-center sticky top-24 z-[999]" >
//             <button
//               onClick={() => {
//                 handleAddToCart();
//                 toggleCartDrawer();
//               }}
//               disabled={isButtonDisabled || !size || !selectedColor}
//               className="w-[90%] bg-[#800000] text-white font-semibold py-2.5 rounded-md hover:bg-[#500000] transition-colors disabled:bg-[#900000] disabled:cursor-not-allowed md:sticky md:top-4 self-start "
//             >
//               ADD TO CART
//             </button>
//           </div>

//           {/* <div className="flex items-center justify-center sticky top-[18%] z-[999]">
//             <button
//               onClick={handleAddToCart}
//               // disabled={isLoading}  // Assuming you have this
//               className="w-[90%] bg-gray-500 text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed md:sticky md:top-4 self-start z-[1000]"  // Higher z here
//             >
//               ADD TO CART
//             </button>
//           </div> */}

//           <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
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
//             Reviews ({reviews.length})
//           </button>
//         </div>

//         <div className="mt-4">
//           {activeTab === 'description' && (
//             // <div className="text-gray-600">
//             //   <p>
//             //     An e-commerce website is an online platform that facilitates the buying and selling
//             //     of products or services over the internet. It serves as a virtual marketplace where
//             //     businesses and individuals can showcase their products, interact with customers, and
//             //     conduct transactions without the need for a physical presence.
//             //   </p>
//             //   <p className="mt-2">
//             //     E-commerce websites typically display products or services along with detailed
//             //     descriptions, images, prices, and any available variations (e.g., sizes, colors).
//             //   </p>
//             // </div>

//             <div
//               className="text-gray-700 leading-relaxed whitespace-pre-line"
//               dangerouslySetInnerHTML={{ __html: productData.detailedDescription }}
//             />
//           )}

//           {activeTab === 'reviews' && (
//             // <div className="text-gray-600">
//             //   <div className="mb-4 border-b pb-4">
//             //     <div className="flex justify-between">
//             //       <span className="font-semibold">John Doe</span>
//             //       <span className="text-yellow-500">★★★★★</span>
//             //     </div>
//             //     <p className="mt-1">Great product! Highly recommend.</p>
//             //     <span className="text-sm text-gray-400">Posted on Sept 15, 2025</span>
//             //   </div>
//             //   <div className="mb-4 border-b pb-4">
//             //     <div className="flex justify-between">
//             //       <span className="font-semibold">Jane Smith</span>
//             //       <span className="text-yellow-500">★★★★☆</span>
//             //     </div>
//             //     <p className="mt-1">Good quality, but sizing runs small.</p>
//             //     <span className="text-sm text-gray-400">Posted on Sept 10, 2025</span>
//             //   </div>
//             // </div>
//             <div className="text-gray-600">
//               {token ? (
//                 <div className="mb-6 p-4 border rounded-lg">
//                   <h3 className="font-semibold mb-2">Write a Review</h3>
//                   <select
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     className="border p-2 rounded mb-3"
//                   >
//                     <option value="5">★★★★★ (5)</option>
//                     <option value="4">★★★★☆ (4)</option>
//                     <option value="3">★★★☆☆ (3)</option>
//                     <option value="2">★★☆☆☆ (2)</option>
//                     <option value="1">★☆☆☆☆ (1)</option>
//                   </select>

//                   <textarea
//                     placeholder="Write your review..."
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     className="w-full border p-2 rounded mb-3"
//                     rows="3"
//                   ></textarea>

//                   <button
//                     onClick={handleReviewSubmit}
//                     className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//                   >
//                     Submit Review
//                   </button>
//                 </div>
//               ) : (
//                 <p className="text-gray-500 mb-4">Login to write a review.</p>
//               )}

//               {reviews.length === 0 ? (
//                 <p className="text-gray-500">No reviews yet.</p>
//               ) : (
//                 reviews.map((rev) => (
//                   <div key={rev._id} className="mb-4 border-b pb-4">
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <span className="font-semibold">{rev.user?.name || "User"}</span>
//                         <span className="text-yellow-500 ml-3">
//                           {"★".repeat(rev.rating)}
//                           {"☆".repeat(5 - rev.rating)}
//                         </span>
//                       </div>

//                       {rev.user?._id === userId && (
//                         <button
//                           onClick={async () => {
//                             const ok = await deleteReview(rev._id);
//                             if (ok) loadReviews();
//                           }}
//                           className="text-red-500 text-sm hover:underline"
//                         >
//                           Delete
//                         </button>
//                       )}
//                     </div>

//                     <p className="mt-1">{rev.comment}</p>
//                     <span className="text-sm text-gray-400">
//                       {new Date(rev.createdAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                 ))
//               )}
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
// import { toast } from 'react-toastify'
// import CartDrawer from '../components/CartDrawer';
// import { FaRegStar } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

// // ✅ Color Map (case-insensitive handling)
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
//   'dark-wine': '#453333',
//   'tobacco-dark': '#6e351a',
// };

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const { wishlist, toggleWishlistItem } = useContext(ShopContext);
//   const { submitReview, getProductReviews, token, backendUrl, deleteReview, userId } = useContext(ShopContext);
//   const { getSingleProduct } = useContext(ShopContext);

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
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [sizeMultiplier, setSizeMultiplier] = useState(1);
//   const [sizeStock, setSizeStock] = useState(0);

//   const navigate = useNavigate();

//   // ✅ Wishlist check
//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === productId)
//     : false;

//   const fetchProductData = async () => {
//     const item = await getSingleProduct(productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0);
//       setDisplayPrice(item.price);
//       setSizeMultiplier(1);
//     }
//   };

//   const loadReviews = async () => {
//     const data = await getProductReviews(productId);
//     setReviews(data);
//   };

//   const toggleCartDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleSizeSelect = (sizeObj) => {
//     console.log("Size clicked:", sizeObj);

//     if (!sizeObj) {
//       console.log("Invalid size object");
//       return;
//     }

//     if (typeof sizeObj === 'string') {
//       setSize(sizeObj);
//       setSizeMultiplier(1);
//       setSizeStock(0);
//     } else if (typeof sizeObj === 'object' && sizeObj.size) {
//       setSize(sizeObj.size);
//       setSizeMultiplier(sizeObj.priceMultiplier || 1);
//       setSizeStock(sizeObj.stock || 0);
//       console.log(`Size updated: ${sizeObj.size}, Multiplier: ${sizeObj.priceMultiplier}`);
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   useEffect(() => {
//     if (productData?.color?.length) {
//       const firstColor = productData.color[0];
//       let colorName;
//       if (typeof firstColor === 'string') {
//         colorName = firstColor;
//       } else if (typeof firstColor === 'object' && firstColor.name) {
//         colorName = firstColor.name;
//       } else {
//         colorName = 'Unknown';
//       }
//       setSelectedColor(colorName);
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

//     const customPrice = displayPrice - productData.price;
//     console.log(`Adding to cart: Base ${productData.price}, Custom ${customPrice}, Total ${displayPrice}`);

//     addToCart(productData._id, size, selectedColor, customPrice);
//     setIsButtonDisabled(true);

//     setTimeout(() => {
//       toast.success('Product added to cart!', { duration: 2000 });
//       setIsButtonDisabled(false);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 2000);
//   };

//   const handleReviewSubmit = async () => {
//     if (!token) return toast.error("Please login first");
//     if (!rating || !comment.trim()) {
//       return toast.error("Please add rating and comment");
//     }
//     const success = await submitReview(productId, rating, comment);
//     if (success) {
//       setComment("");
//       setRating(5);
//       loadReviews();
//     }
//   };

//   useEffect(() => {
//     if (productId) {
//       loadReviews();
//     }
//   }, [productId]);

//   const toggleMakeMeasure = () => setMakeMeasure(!makeMeasure);
//   const toggleExpansion = () => setIsExpanded((prev) => !prev);
//   const handleTabClick = (tab) => setActiveTab(tab);

//   useEffect(() => {
//     if (productData) {
//       console.log("ProductData loaded:", {
//         name: productData.name,
//         price: productData.price,
//         sizes: productData.sizes,
//         sizeType: Array.isArray(productData.sizes) ? typeof productData.sizes[0] : 'unknown'
//       });
//     }
//   }, [productData]);

//   useEffect(() => {
//     if (productData && productData.price) {
//       const multiplier = sizeMultiplier || 1;
//       const baseSizePrice = productData.price * multiplier;
//       console.log(`🔄 Price HOOK fired: Base ${productData.price} × Multiplier ${multiplier} = ${baseSizePrice}`);
//       setDisplayPrice(baseSizePrice);
//     }
//   }, [sizeMultiplier, productData?.price]);

//   useEffect(() => {
//     if (size) {
//       console.log(`✅ Size state: ${size}, Multiplier: ${sizeMultiplier}, Stock: ${sizeStock}`);
//     }
//   }, [size, sizeMultiplier, sizeStock]);

//   if (!productData) {
//     return <div className="opacity-0"></div>;
//   }

//   const avgRating = reviews.length > 0
//     ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
//     : 0;

//   const roundedRating = Math.round(avgRating);

//   const content = `Simple 7-day return or exchange policy—no questions asked, just pure satisfaction.
//     Get your order delivered swiftly with tracking updates every step of the way.
//     We use sustainable, recyclable materials to keep your delivery green and guilt-free.
//     Products adhere to international quality benchmarks, ensuring top-tier performance.
//     Sizes tailored for real bodies—refer to our detailed size guide for the perfect match.`;

//   const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

//   const customBreakdown = displayPrice > productData.price
//     ? ` (incl. +${currency}${(displayPrice - productData.price).toFixed(2)} for size/customization)`
//     : '';

//   return (
//     <div className="border-t-2 pt-4 transition-opacity ease-in duration-500 opacity-100 px-10">
//       <div className="flex gap-10 sm:gap-12 flex-col sm:flex-row">
//         {/* ---------- Product Images ------------- */}
//         <div className="flex flex-col-reverse gap-3 sm:flex-row md:sticky md:top-28 self-start w-full lg:w-[40%]">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] lg:w-[10%] lg:h-[10%] w-full lg:mr-10 gap-1">
//             {productData.image.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 cursor-pointer transition-all duration-200 w-[70px] h-[50px] sm:w-full rounded-md
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

//           <div className="w-full sm:w-[80%] lg:w-[70%] flex justify-center items-center">
//             <div className="w-full max-h-[400px] aspect-[3/4] overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-sm">
//               <img className="w-full h-full object-contain" src={image} alt={productData.name} />
//             </div>
//           </div>
//         </div>

//         {/* ---------- Product Info ------------- */}
//         <div className="w-full lg:w-[60%]">
//           <h1 className="lg:font-[400] text-gray-900 lg:text-[22px] mt-4 lg:mt-0 lg:mr-12 leading-8">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(5)].map((_, index) => (
//               <span key={index} className="text-[#de7921] text-sm">
//                 {index < roundedRating ? <FaStar /> : <FaRegStar />}
//               </span>
//             ))}
//             <p className="pl-2 text-sm text-gray-600">({reviews.length})</p>
//           </div>

//           {productData.discountPrice > 0 ? (
//             productData.discountActive ? (
//               <div className="flex items-center gap-3 mt-5">
//                 <p className="text-2xl font-medium text-gray-500 line-through">
//                   {currency}{displayPrice.toFixed(2)}
//                 </p>
//                 <p className="text-3xl font-semibold text-green-600">
//                   {currency}
//                   {(displayPrice - (displayPrice * productData.discountPrice / 100)).toFixed(2)}
//                 </p>
//               </div>
//             ) : (
//               <p className="mt-5 text-3xl font-semibold text-green-700">
//                 {currency}
//                 {(displayPrice - (displayPrice * productData.discountPrice / 100)).toFixed(2)}
//               </p>
//             )
//           ) : (
//             <p className="mt-5 text-3xl font-medium text-gray-800">
//               {currency}{displayPrice.toFixed(2)}
//               <span className="text-sm text-gray-500">{customBreakdown}</span>
//             </p>
//           )}

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
//                   productData.color.map((colorObj, index) => {
//                     let colorName, colorHex;

//                     if (typeof colorObj === 'string') {
//                       colorName = colorObj;
//                       colorHex = colorMap[colorObj.toLowerCase()] || '#CCCCCC';
//                     } else if (typeof colorObj === 'object' && colorObj.name) {
//                       colorName = colorObj.name;
//                       colorHex = colorObj.hex || '#CCCCCC';
//                     } else {
//                       colorName = 'Unknown';
//                       colorHex = '#CCCCCC';
//                     }

//                     const isSelected = selectedColor === colorName;
//                     return (
//                       <div key={index} className="flex flex-col items-center">
//                         <button
//                           onClick={() => setSelectedColor(colorName)}
//                           className={`w-10 h-10 rounded-md border-2 transition-all duration-200 ${isSelected
//                             ? 'ring- ring-black scale-110 border-black'
//                             : 'border-gray-800 hover:ring-1 hover:ring-gray-400'
//                             }`}
//                           style={{ backgroundColor: colorHex }}
//                           title={`${colorName} (${colorHex})`}
//                         ></button>
//                         <p className="text-xs text-gray-600 mt-1 capitalize text-center max-w-[60px]"></p>
//                       </div>
//                     );
//                   })
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
//                   productData.sizes.map((sizeObj, index) => {
//                     // ✅ FIX: safely extract sizeLabel — never fall back to the whole object
//                     const sizeLabel = typeof sizeObj === 'object'
//                       ? (sizeObj?.size ?? `Size ${index + 1}`)
//                       : String(sizeObj);

//                     const multiplier = sizeObj?.priceMultiplier || 1;
//                     const stock = sizeObj?.stock || 0;
//                     const sizePrice = (productData.price * multiplier).toFixed(2);
//                     const isInStock = stock > 0 || stock === 0; // Always true for now
//                     const isSelected = size === sizeLabel;

//                     return (
//                       <button
//                         key={index}
//                         type="button"
//                         onClick={() => {
//                           console.log("🔥 SIZE CLICKED:", sizeObj);
//                           handleSizeSelect(sizeObj);
//                         }}
//                         disabled={!isInStock}
//                         className={`border-2 border-gray-400 py-2 px-4 rounded-md flex flex-col items-center gap-1 transition-all ${isSelected
//                           ? 'border-orange-500 bg-orange-100 scale-105'
//                           : 'border-gray-300 hover:border-orange-300 hover:bg-gray-50'
//                           } ${!isInStock ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                         title={!isInStock ? 'Out of stock' : `Select ${sizeLabel}`}
//                       >
//                         <span className="font-semibold text-gray-800">{sizeLabel}</span>
//                         <span className="text-xs text-gray-600 font-medium">
//                           ${sizePrice}
//                         </span>
//                       </button>
//                     );
//                   })
//                 ) : (
//                   <p className="text-gray-500">No sizes available</p>
//                 )}
//               </div>

//               {size && sizeStock <= 0 && (
//                 <p className="text-sm text-red-600 font-medium">⚠️ This size is out of stock</p>
//               )}
//               {size && sizeStock > 0 && sizeStock < 5 && (
//                 <p className="text-sm text-orange-600 font-medium">⚠️ Only {sizeStock} left in stock</p>
//               )}
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

//           <div className="flex flex-col items-center gap-3 top-24 z-[9] mb-10">
//             <button
//               onClick={() => toggleWishlistItem(productId)}
//               className="w-[90%] border border-gray-300 py-2.5 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
//             >
//               {isWishlisted ? "❤️ Remove from Wishlist" : "🖤 Add to Wishlist"}
//             </button>
//           </div>

//           {/* -------- Add to Cart Button -------- */}
//           <div className="flex items-center justify-center sticky top-24 z-[999]">
//             <button
//               onClick={() => {
//                 handleAddToCart();
//                 toggleCartDrawer();
//               }}
//               disabled={isButtonDisabled || !size || !selectedColor}
//               className="w-[90%] bg-[#800000] text-white font-semibold py-2.5 rounded-md hover:bg-[#500000] transition-colors disabled:bg-[#900000] disabled:cursor-not-allowed md:sticky md:top-4 self-start"
//             >
//               ADD TO CART
//             </button>
//           </div>

//           <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
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
//             Reviews ({reviews.length})
//           </button>
//         </div>

//         <div className="mt-4">
//           {activeTab === 'description' && (
//             <div
//               className="text-gray-700 leading-relaxed whitespace-pre-line"
//               dangerouslySetInnerHTML={{ __html: productData.detailedDescription }}
//             />
//           )}

//           {activeTab === 'reviews' && (
//             <div className="text-gray-600">
//               {token ? (
//                 <div className="mb-6 p-4 border rounded-lg">
//                   <h3 className="font-semibold mb-2">Write a Review</h3>
//                   <select
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     className="border p-2 rounded mb-3"
//                   >
//                     <option value="5">★★★★★ (5)</option>
//                     <option value="4">★★★★☆ (4)</option>
//                     <option value="3">★★★☆☆ (3)</option>
//                     <option value="2">★★☆☆☆ (2)</option>
//                     <option value="1">★☆☆☆☆ (1)</option>
//                   </select>

//                   <textarea
//                     placeholder="Write your review..."
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     className="w-full border p-2 rounded mb-3"
//                     rows="3"
//                   ></textarea>

//                   <button
//                     onClick={handleReviewSubmit}
//                     className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//                   >
//                     Submit Review
//                   </button>
//                 </div>
//               ) : (
//                 <p className="text-gray-500 mb-4">Login to write a review.</p>
//               )}

//               {reviews.length === 0 ? (
//                 <p className="text-gray-500">No reviews yet.</p>
//               ) : (
//                 reviews.map((rev) => (
//                   <div key={rev._id} className="mb-4 border-b pb-4">
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <span className="font-semibold">{rev.user?.name || "User"}</span>
//                         <span className="text-yellow-500 ml-3">
//                           {"★".repeat(rev.rating)}
//                           {"☆".repeat(5 - rev.rating)}
//                         </span>
//                       </div>
//                       {rev.user?._id === userId && (
//                         <button
//                           onClick={async () => {
//                             const ok = await deleteReview(rev._id);
//                             if (ok) loadReviews();
//                           }}
//                           className="text-red-500 text-sm hover:underline"
//                         >
//                           Delete
//                         </button>
//                       )}
//                     </div>
//                     <p className="mt-1">{rev.comment}</p>
//                     <span className="text-sm text-gray-400">
//                       {new Date(rev.createdAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                 ))
//               )}
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
// import { FaInfoCircle } from 'react-icons/fa';
// import { MdVerified, MdLocalShipping, MdLoop } from 'react-icons/md';
// import { HiSparkles } from 'react-icons/hi';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// import { toast } from 'react-toastify';
// import CartDrawer from '../components/CartDrawer';
// import { FaRegStar, FaStar, FaHeart, FaRegHeart, FaRuler, FaCrown } from 'react-icons/fa';
// import { BsShieldCheck, BsBagCheck } from 'react-icons/bs';

// const colorMap = {
//   wine: '#722F37', red: '#FF0000', black: '#000000', olive: '#808000',
//   green: '#008000', cognac: '#D2691E', white: '#FFFFFF', yellow: '#FFFF00',
//   gray: '#808080', rose: '#FF007F', tobacco: '#A0522D', navy: '#000080',
//   beige: '#F5F5DC', blue: '#0000FF', brown: '#8B4513',
//   'dark-wine': '#453333', 'tobacco-dark': '#6e351a',
// };

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const { wishlist, toggleWishlistItem } = useContext(ShopContext);
//   const { submitReview, getProductReviews, token, deleteReview, userId } = useContext(ShopContext);
//   const { getSingleProduct } = useContext(ShopContext);

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
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState('');
//   const [sizeMultiplier, setSizeMultiplier] = useState(1);
//   const [sizeStock, setSizeStock] = useState(0);

//   const navigate = useNavigate();

//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === productId) : false;

//   const fetchProductData = async () => {
//     const item = await getSingleProduct(productId);
//     if (item) {
//       setProductData(item); setImage(item.image[0]);
//       setSelectedIndex(0); setDisplayPrice(item.price); setSizeMultiplier(1);
//     }
//   };

//   const loadReviews = async () => {
//     const data = await getProductReviews(productId);
//     setReviews(data);
//   };

//   const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

//   const handleSizeSelect = (sizeObj) => {
//     if (!sizeObj) return;
//     if (typeof sizeObj === 'string') {
//       setSize(sizeObj); setSizeMultiplier(1); setSizeStock(0);
//     } else if (typeof sizeObj === 'object' && sizeObj.size) {
//       setSize(sizeObj.size);
//       setSizeMultiplier(sizeObj.priceMultiplier || 1);
//       setSizeStock(sizeObj.stock || 0);
//     }
//   };

//   useEffect(() => { fetchProductData(); }, [productId, products]);

//   useEffect(() => {
//     if (productData?.color?.length) {
//       const firstColor = productData.color[0];
//       setSelectedColor(typeof firstColor === 'string' ? firstColor : firstColor?.name || 'Unknown');
//     }
//   }, [productData]);

//   useEffect(() => { if (productData) setDisplayPrice(productData.price); }, [productData]);

//   const handleAddToCart = () => {
//     if (!size || !selectedColor) { toast.error('Please select a size and color.'); return; }
//     const customPrice = displayPrice - productData.price;
//     addToCart(productData._id, size, selectedColor, customPrice);
//     setIsButtonDisabled(true);
//     setTimeout(() => { toast.success('Added to cart!'); setIsButtonDisabled(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 2000);
//   };

//   const handleReviewSubmit = async () => {
//     if (!token) return toast.error('Please login first');
//     if (!rating || !comment.trim()) return toast.error('Please add rating and comment');
//     const success = await submitReview(productId, rating, comment);
//     if (success) { setComment(''); setRating(5); loadReviews(); }
//   };

//   useEffect(() => { if (productId) loadReviews(); }, [productId]);

//   useEffect(() => {
//     if (productData?.price) setDisplayPrice(productData.price * (sizeMultiplier || 1));
//   }, [sizeMultiplier, productData?.price]);

//   if (!productData) return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//       <div style={{ width: 40, height: 40, border: '3px solid #8B1A1A', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
//       <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//     </div>
//   );

//   const avgRating = reviews.length > 0
//     ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
//   const roundedRating = Math.round(avgRating);
//   const discountedPrice = productData.discountPrice > 0
//     ? displayPrice - (displayPrice * productData.discountPrice / 100) : null;
//   const customBreakdown = displayPrice > productData.price
//     ? `+${currency}${(displayPrice - productData.price).toFixed(2)} customization` : '';

//   const styles = `
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap');
//     .pp-root { font-family: 'Jost', sans-serif; background: #FAFAF8; }
//     .pp-serif { font-family: 'Cormorant Garamond', serif; }
//     .pp-badge-red {
//       background: linear-gradient(135deg, #6B0F0F 0%, #9B1C1C 50%, #6B0F0F 100%);
//       background-size: 200% 200%; animation: ppShimmer 3s ease infinite;
//       color: white; border-radius: 99px; padding: 3px 12px;
//       font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
//       display: inline-flex; align-items: center; gap: 5px;
//     }
//     .pp-badge-gold {
//       background: linear-gradient(135deg, #92680A 0%, #C8960C 50%, #92680A 100%);
//       background-size: 200% 200%; animation: ppShimmer 3s ease infinite;
//       color: white; border-radius: 99px; padding: 3px 12px;
//       font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
//     }
//     @keyframes ppShimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

//     .pp-thumb { transition: all 0.2s ease; border: 2px solid transparent; border-radius: 12px; overflow: hidden; cursor: pointer; }
//     .pp-thumb:hover { border-color: #8B1A1A; transform: scale(1.04); }
//     .pp-thumb.pp-thumb-active { border-color: #8B1A1A; box-shadow: 0 0 0 1px #8B1A1A; }

//     .pp-img-wrap { overflow: hidden; cursor: zoom-in; border-radius: 20px; background: white; box-shadow: 0 4px 30px rgba(0,0,0,0.1); }
//     .pp-img-wrap img { transition: transform 0.15s ease; display: block; width: 100%; height: 100%; object-fit: cover; }
//     .pp-img-wrap:hover img { transform: scale(1.45); }

//     .pp-color-dot { border-radius: 50%; cursor: pointer; transition: all 0.2s ease; border: none; flex-shrink: 0; }
//     .pp-color-dot:hover { transform: scale(1.15); }
//     .pp-color-dot.pp-color-active { box-shadow: 0 0 0 2px white, 0 0 0 4px #8B1A1A; transform: scale(1.1); }

//     .pp-size-btn {
//       border: 2px solid #E0D0D0; border-radius: 12px; background: white;
//       display: flex; flex-direction: column; align-items: center; padding: 8px 16px; min-width: 62px;
//       cursor: pointer; transition: all 0.2s ease; position: relative; overflow: hidden;
//     }
//     .pp-size-btn:hover { border-color: #C08080; background: #FFF8F8; }
//     .pp-size-btn.pp-size-active { border-color: #8B1A1A !important; background: #FFF5F5; }
//     .pp-size-btn.pp-size-active span { color: #8B1A1A !important; }

//     .pp-cart-btn {
//       width: 100%; color: white; font-weight: 700; font-size: 13px;
//       letter-spacing: 0.15em; border: none; border-radius: 16px; padding: 16px;
//       cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
//       background: linear-gradient(135deg, #6B0F0F 0%, #9B1C1C 50%, #6B0F0F 100%);
//       background-size: 200% 200%;
//       transition: all 0.3s ease; position: relative; overflow: hidden;
//     }
//     .pp-cart-btn::before {
//       content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
//       background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
//       transition: left 0.5s ease;
//     }
//     .pp-cart-btn:hover::before { left: 100%; }
//     .pp-cart-btn:hover { box-shadow: 0 10px 30px rgba(139,26,26,0.4); transform: translateY(-2px); }
//     .pp-cart-btn:disabled { background: #C0A0A0; box-shadow: none; transform: none; cursor: not-allowed; }

//     .pp-wish-btn {
//       width: 100%; border: 2px solid #E0D0D0; border-radius: 16px; padding: 14px;
//       background: white; cursor: pointer; display: flex; align-items: center;
//       justify-content: center; gap: 8px; font-size: 12px; font-weight: 700;
//       letter-spacing: 0.12em; transition: all 0.2s ease; color: #5C4A4A;
//     }
//     .pp-wish-btn:hover { border-color: #8B1A1A; background: #FFF5F5; color: #8B1A1A; }

//     .pp-feature-card {
//       display: flex; flex-direction: column; align-items: center; gap: 8px;
//       background: white; border-radius: 14px; padding: 14px 10px;
//       border: 1px solid #F0E8E8; transition: all 0.2s ease; flex: 1;
//     }
//     .pp-feature-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }

//     .pp-divider { height: 1px; background: linear-gradient(90deg, transparent, #DDD0D0, transparent); margin: 20px 0; }

//     .pp-tab-btn {
//       padding-bottom: 14px; font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
//       text-transform: uppercase; background: none; border: none; cursor: pointer;
//       color: #9A8070; position: relative; transition: color 0.2s;
//     }
//     .pp-tab-btn.pp-tab-active { color: #8B1A1A; }
//     .pp-tab-btn.pp-tab-active::after { content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px; background: #8B1A1A; border-radius: 99px; }

//     .pp-review-input { width: 100%; border: 1.5px solid #E0D0D0; border-radius: 12px; padding: 12px 16px; font-size: 14px; color: #3D2828; resize: vertical; font-family: 'Jost', sans-serif; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
//     .pp-review-input:focus { border-color: #8B1A1A; box-shadow: 0 0 0 3px rgba(139,26,26,0.08); }

//     .pp-star-interactive { font-size: 26px; cursor: pointer; transition: transform 0.1s; }
//     .pp-star-interactive:hover { transform: scale(1.25); }

//     .pp-review-card { background: white; border: 1px solid #F0E8E8; border-radius: 16px; padding: 20px; margin-bottom: 16px; transition: box-shadow 0.2s; }
//     .pp-review-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }

//     .pp-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #8B1A1A, #C0392B); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex-shrink: 0; }

//     .pp-measure-btn {
//       width: 100%; border: 2px solid #8B1A1A; border-radius: 14px; padding: 12px;
//       background: white; cursor: pointer; display: flex; align-items: center;
//       justify-content: center; gap: 8px; font-size: 11px; font-weight: 700;
//       letter-spacing: 0.18em; color: #8B1A1A; transition: all 0.2s;
//     }
//     .pp-measure-btn:hover, .pp-measure-btn.pp-measure-active { background: #FFF5F5; }

//     .pp-section-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #8B1A1A; }
//     .pp-price { font-family: 'Cormorant Garamond', serif; }
//   `;

//   return (
//     <>
//       <style>{styles}</style>
//       <div className="pp-root">

//         {/* Breadcrumb */}
//         <div style={{ background: '#F5F0EE', borderBottom: '1px solid #EAE0DC', padding: '10px 32px' }}>
//           <p style={{ fontSize: 11, letterSpacing: '0.06em', color: '#9A8A85' }}>
//             Home &nbsp;›&nbsp; Collection &nbsp;›&nbsp;
//             <span style={{ color: '#3D2828', fontWeight: 500 }}>{productData.name}</span>
//           </p>
//         </div>

//         <div style={{ padding: '32px 24px 60px', maxWidth: 1400, margin: '0 auto' }}>
//           <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>

//             {/* ══ LEFT: Gallery ══ */}
//             <div style={{ flex: '0 0 min(480px, 100%)', position: 'sticky', top: 24, alignSelf: 'flex-start' }}>
//               {/* Main Image */}
//               <div
//                 className="pp-img-wrap"
//                 style={{ aspectRatio: '4/5', maxHeight: 560, marginBottom: 12 }}
//                 onMouseMove={e => {
//                   const r = e.currentTarget.getBoundingClientRect();
//                   const x = ((e.clientX - r.left) / r.width) * 100;
//                   const y = ((e.clientY - r.top) / r.height) * 100;
//                   e.currentTarget.querySelector('img').style.transformOrigin = `${x}% ${y}%`;
//                 }}
//               >
//                 <img src={image} alt={productData.name} />
//               </div>

//               {/* Thumbnails */}
//               <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
//                 {productData.image.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`pp-thumb ${index === selectedIndex ? 'pp-thumb-active' : ''}`}
//                     onClick={() => { setImage(item); setSelectedIndex(index); }}
//                     style={{ width: 72, height: 86, flexShrink: 0 }}
//                   >
//                     <img src={item} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                   </div>
//                 ))}
//               </div>

//               {/* Trust Badges */}
//               <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
//                 {[
//                   { icon: <BsShieldCheck size={20} />, label: '100% Authentic' },
//                   { icon: <MdLocalShipping size={20} />, label: 'Free Delivery' },
//                   { icon: <MdLoop size={20} />, label: '7-Day Returns' },
//                 ].map((b, i) => (
//                   <div key={i} className="pp-feature-card">
//                     <span style={{ color: '#8B1A1A' }}>{b.icon}</span>
//                     <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: '#6B4F4F', textAlign: 'center', lineHeight: 1.3 }}>{b.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ══ RIGHT: Info ══ */}
//             <div style={{ flex: '1 1 340px', minWidth: 0 }}>

//               {/* Badges */}
//               <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
//                 <span className="pp-badge-red">
//                   <FaCrown size={10} /> PREMIUM COLLECTION
//                 </span>
//                 {productData.discountPrice > 0 && (
//                   <span className="pp-badge-gold">{productData.discountPrice}% OFF</span>
//                 )}
//               </div>

//               {/* Title */}
//               <h1 className="pp-serif" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, color: '#1C0F0F', lineHeight: 1.15, marginBottom: 14 }}>
//                 {productData.name}
//               </h1>

//               {/* Rating */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
//                 <div style={{ display: 'flex', gap: 2 }}>
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} style={{ color: '#C0392B', fontSize: 14 }}>
//                       {i < roundedRating ? <FaStar /> : <FaRegStar />}
//                     </span>
//                   ))}
//                 </div>
//                 <span style={{ fontSize: 13, color: '#9A8070' }}>{avgRating.toFixed(1)} · {reviews.length} reviews</span>
//                 <span style={{ width: 1, height: 14, background: '#DDD', display: 'inline-block' }} />
//                 <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#2D7A4F', fontWeight: 600 }}>
//                   <MdVerified size={14} /> Verified Brand
//                 </span>
//               </div>

//               {/* Price Box */}
//               <div style={{ background: 'linear-gradient(135deg, #FFF8F8 0%, #FDF5F0 100%)', border: '1px solid #F0E0DC', borderRadius: 18, padding: '18px 20px', marginBottom: 22 }}>
//                 {discountedPrice ? (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
//                     <span className="pp-price" style={{ fontSize: 42, fontWeight: 600, color: '#8B1A1A', lineHeight: 1 }}>
//                       {currency}{discountedPrice.toFixed(2)}
//                     </span>
//                     <span className="pp-price" style={{ fontSize: 24, color: '#B0A0A0', textDecoration: 'line-through', lineHeight: 1.4 }}>
//                       {currency}{displayPrice.toFixed(2)}
//                     </span>
//                     <span style={{ background: '#8B1A1A', color: 'white', borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em' }}>
//                       SAVE {currency}{(displayPrice - discountedPrice).toFixed(2)}
//                     </span>
//                   </div>
//                 ) : (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
//                     <span className="pp-price" style={{ fontSize: 42, fontWeight: 600, color: '#1C0F0F', lineHeight: 1 }}>
//                       {currency}{displayPrice.toFixed(2)}
//                     </span>
//                     {customBreakdown && (
//                       <span style={{ fontSize: 12, color: '#8B6B6B', marginBottom: 5 }}>({customBreakdown})</span>
//                     )}
//                   </div>
//                 )}
//                 <p style={{ fontSize: 12, color: '#9A8070', marginTop: 8 }}>
//                   All taxes included · Free shipping on orders above {currency}1000
//                 </p>
//               </div>

//               {/* Description */}
//               <p style={{ color: '#5C4A4A', lineHeight: 1.85, fontSize: 14, marginBottom: 22 }}>
//                 {productData.description}
//               </p>

//               <div className="pp-divider" />

//               {/* Color */}
//               <div style={{ marginBottom: 22 }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                   <span className="pp-section-label">Color</span>
//                   <span style={{ fontSize: 13, color: '#3D2828', fontWeight: 500, textTransform: 'capitalize' }}>{selectedColor}</span>
//                 </div>
//                 <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
//                   {productData.color?.map((colorObj, index) => {
//                     let colorName, colorHex;
//                     if (typeof colorObj === 'string') {
//                       colorName = colorObj;
//                       colorHex = colorMap[colorObj.toLowerCase()] || '#CCCCCC';
//                     } else if (colorObj?.name) {
//                       colorName = colorObj.name;
//                       colorHex = colorObj.hex || '#CCCCCC';
//                     } else { colorName = 'Unknown'; colorHex = '#CCCCCC'; }
//                     return (
//                       <button
//                         key={index}
//                         className={`pp-color-dot ${selectedColor === colorName ? 'pp-color-active' : ''}`}
//                         onClick={() => setSelectedColor(colorName)}
//                         style={{
//                           width: 34, height: 34,
//                           background: colorHex,
//                           outline: colorHex === '#FFFFFF' ? '1px solid #CCC' : 'none',
//                         }}
//                         title={colorName}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Size */}
//               <div style={{ marginBottom: 22 }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                   <span className="pp-section-label">Select Size</span>
//                   <button
//                     onClick={() => setShowModal(true)}
//                     style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#8B1A1A', fontWeight: 700, letterSpacing: '0.06em', textDecoration: 'underline', textUnderlineOffset: 3, background: 'none', border: 'none', cursor: 'pointer' }}
//                   >
//                     <FaRuler size={11} /> Size Guide
//                   </button>
//                   {showModal && <Modal onclose={() => setShowModal(false)} />}
//                 </div>
//                 <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//                   {productData.sizes?.length > 0 ? productData.sizes.map((sizeObj, index) => {
//                     const sizeLabel = typeof sizeObj === 'object'
//                       ? (sizeObj?.size ?? `Size ${index + 1}`) : String(sizeObj);
//                     const multiplier = sizeObj?.priceMultiplier || 1;
//                     const sizePrice = (productData.price * multiplier).toFixed(2);
//                     const isSelected = size === sizeLabel;
//                     return (
//                       <button
//                         key={index}
//                         type="button"
//                         className={`pp-size-btn ${isSelected ? 'pp-size-active' : ''}`}
//                         onClick={() => handleSizeSelect(sizeObj)}
//                       >
//                         <span style={{ fontWeight: 700, fontSize: 14, color: isSelected ? '#8B1A1A' : '#2C1A1A' }}>{sizeLabel}</span>
//                         <span style={{ fontSize: 10, color: isSelected ? '#8B1A1A' : '#9A8070', fontWeight: 500 }}>{currency}{sizePrice}</span>
//                       </button>
//                     );
//                   }) : <p style={{ fontSize: 13, color: '#9A8070' }}>No sizes available</p>}
//                 </div>
//                 {size && sizeStock > 0 && sizeStock < 5 && (
//                   <p style={{ fontSize: 12, color: '#C0501A', fontWeight: 600, marginTop: 10 }}>
//                     🔥 Only {sizeStock} left — order soon!
//                   </p>
//                 )}
//               </div>

//               {/* Made to Measure */}
//               <div style={{ marginBottom: 22 }}>
//                 <button
//                   className={`pp-measure-btn ${makeMeasure ? 'pp-measure-active' : ''}`}
//                   onClick={() => setMakeMeasure(!makeMeasure)}
//                 >
//                   <HiSparkles size={15} /> MADE TO MEASURE
//                 </button>
//                 {makeMeasure && (
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12, padding: '12px 16px', borderRadius: 12, background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
//                     <FaInfoCircle style={{ color: '#3B82F6', flexShrink: 0 }} size={14} />
//                     <p style={{ fontSize: 13, color: '#1E40AF' }}>Custom measurements can be added on the Cart page.</p>
//                   </div>
//                 )}
//               </div>

//               {/* CTA Buttons */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
//                 <button
//                   className="pp-cart-btn"
//                   onClick={() => { handleAddToCart(); toggleCartDrawer(); }}
//                   disabled={isButtonDisabled || !size || !selectedColor}
//                 >
//                   <BsBagCheck size={18} />
//                   {isButtonDisabled ? 'ADDING TO CART...' : 'ADD TO CART'}
//                 </button>
//                 <button
//                   className="pp-wish-btn"
//                   onClick={() => toggleWishlistItem(productId)}
//                   style={{ color: isWishlisted ? '#8B1A1A' : '#5C4A4A' }}
//                 >
//                   {isWishlisted
//                     ? <FaHeart size={16} style={{ color: '#8B1A1A' }} />
//                     : <FaRegHeart size={16} />}
//                   {isWishlisted ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST'}
//                 </button>
//               </div>

//               <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//               <JacketLiningSelector basePrice={productData.price} onPriceChange={p => setDisplayPrice(p)} />

//               {/* Policy List */}
//               <div className="pp-divider" />
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
//                 {[
//                   '✦  100% original product crafted with premium materials',
//                   '✦  Secure COD + all major payment methods accepted',
//                   '✦  Simple 7-day return or exchange — no questions asked',
//                   '✦  Real-time tracking updates with every order',
//                   '✦  Sustainable, eco-friendly packaging on all deliveries',
//                 ].map((line, i, arr) => (
//                   <p key={i} style={{ fontSize: 13, color: '#6B5050', lineHeight: 1.6, padding: '8px 0', borderBottom: i < arr.length - 1 ? '1px solid #F5EDED' : 'none' }}>{line}</p>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ══ Tabs ══ */}
//           <div style={{ marginTop: 80 }}>
//             <div style={{ display: 'flex', gap: 32, borderBottom: '2px solid #F0E8E8', marginBottom: 32 }}>
//               {['description', 'reviews'].map(tab => (
//                 <button
//                   key={tab}
//                   className={`pp-tab-btn ${activeTab === tab ? 'pp-tab-active' : ''}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab === 'reviews' ? `Reviews (${reviews.length})` : 'Description'}
//                 </button>
//               ))}
//             </div>

//             {activeTab === 'description' && (
//               <div style={{ color: '#4A3A3A', lineHeight: 1.9, fontSize: 15 }}
//                 dangerouslySetInnerHTML={{ __html: productData.detailedDescription }} />
//             )}

//             {activeTab === 'reviews' && (
//               <div style={{ maxWidth: 680 }}>
//                 {/* Rating Summary */}
//                 {reviews.length > 0 && (
//                   <div style={{ display: 'flex', gap: 24, alignItems: 'center', background: 'linear-gradient(135deg, #FFF8F8, #FDF5F0)', border: '1px solid #F0E0DC', borderRadius: 20, padding: 24, marginBottom: 28 }}>
//                     <div style={{ textAlign: 'center', flexShrink: 0 }}>
//                       <div className="pp-serif" style={{ fontSize: 60, fontWeight: 600, color: '#8B1A1A', lineHeight: 1 }}>{avgRating.toFixed(1)}</div>
//                       <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
//                         {[...Array(5)].map((_, i) => (
//                           <span key={i} style={{ color: '#C0392B', fontSize: 12 }}>{i < roundedRating ? <FaStar /> : <FaRegStar />}</span>
//                         ))}
//                       </div>
//                       <p style={{ fontSize: 11, color: '#9A8070', marginTop: 4 }}>{reviews.length} reviews</p>
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       {[5, 4, 3, 2, 1].map(star => {
//                         const count = reviews.filter(r => Math.round(r.rating) === star).length;
//                         const pct = reviews.length ? (count / reviews.length) * 100 : 0;
//                         return (
//                           <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
//                             <span style={{ fontSize: 11, color: '#9A8070', width: 8 }}>{star}</span>
//                             <FaStar size={9} style={{ color: '#C0392B', flexShrink: 0 }} />
//                             <div style={{ flex: 1, height: 6, background: '#EEE', borderRadius: 99, overflow: 'hidden' }}>
//                               <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #8B1A1A, #C0392B)', borderRadius: 99, transition: 'width 0.6s ease' }} />
//                             </div>
//                             <span style={{ fontSize: 11, color: '#9A8070', width: 16 }}>{count}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {/* Write Review */}
//                 {token ? (
//                   <div style={{ marginBottom: 28, padding: 24, borderRadius: 20, border: '1px solid #EEE', background: 'white' }}>
//                     <h3 className="pp-serif" style={{ fontSize: 24, fontWeight: 400, color: '#1C0F0F', marginBottom: 16 }}>Write a Review</h3>
//                     <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
//                       {[1, 2, 3, 4, 5].map(s => (
//                         <span
//                           key={s}
//                           className="pp-star-interactive"
//                           onClick={() => setRating(s)}
//                           style={{ color: s <= rating ? '#C0392B' : '#DDD' }}
//                         >
//                           {s <= rating ? <FaStar /> : <FaRegStar />}
//                         </span>
//                       ))}
//                     </div>
//                     <textarea
//                       className="pp-review-input"
//                       placeholder="Share your honest experience with this product..."
//                       value={comment}
//                       onChange={e => setComment(e.target.value)}
//                       rows={4}
//                     />
//                     <button
//                       onClick={handleReviewSubmit}
//                       style={{ marginTop: 12, background: '#1C0F0F', color: 'white', borderRadius: 12, padding: '12px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
//                       onMouseOver={e => e.currentTarget.style.background = '#8B1A1A'}
//                       onMouseOut={e => e.currentTarget.style.background = '#1C0F0F'}
//                     >
//                       SUBMIT REVIEW
//                     </button>
//                   </div>
//                 ) : (
//                   <div style={{ padding: 20, borderRadius: 16, background: '#FFF8F8', border: '1px dashed #DCC5C5', textAlign: 'center', marginBottom: 20 }}>
//                     <p style={{ fontSize: 14, color: '#8B6B6B' }}>Please <strong>login</strong> to write a review.</p>
//                   </div>
//                 )}

//                 {/* Reviews List */}
//                 {reviews.length === 0 ? (
//                   <p style={{ fontSize: 14, color: '#9A8070', textAlign: 'center', padding: '24px 0' }}>
//                     No reviews yet — be the first to share your experience!
//                   </p>
//                 ) : reviews.map(rev => (
//                   <div key={rev._id} className="pp-review-card">
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                       <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//                         <div className="pp-avatar">{(rev.user?.name || 'U')[0].toUpperCase()}</div>
//                         <div>
//                           <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                             <span style={{ fontWeight: 600, fontSize: 14, color: '#2C1A1A' }}>{rev.user?.name || 'Customer'}</span>
//                             <MdVerified size={13} style={{ color: '#2D7A4F' }} />
//                           </div>
//                           <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
//                             {[...Array(5)].map((_, i) => (
//                               <span key={i} style={{ color: '#C0392B', fontSize: 11 }}>{i < rev.rating ? <FaStar /> : <FaRegStar />}</span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//                         <span style={{ fontSize: 11, color: '#B0A0A0' }}>
//                           {new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
//                         </span>
//                         {rev.user?._id === userId && (
//                           <button
//                             onClick={async () => { const ok = await deleteReview(rev._id); if (ok) loadReviews(); }}
//                             style={{ fontSize: 11, color: '#C0392B', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
//                           >Delete</button>
//                         )}
//                       </div>
//                     </div>
//                     <p style={{ fontSize: 14, color: '#5C4A4A', lineHeight: 1.75, marginTop: 12 }}>{rev.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Related Products */}
//           <div style={{ marginTop: 80 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
//               <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #DDD0D0)' }} />
//               <h2 className="pp-serif" style={{ fontSize: 30, fontWeight: 400, color: '#1C0F0F', whiteSpace: 'nowrap' }}>
//                 You May Also Like
//               </h2>
//               <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #DDD0D0, transparent)' }} />
//             </div>
//             <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;



// import { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { FaInfoCircle } from 'react-icons/fa';
// import { MdVerified, MdLocalShipping, MdLoop } from 'react-icons/md';
// import { HiSparkles } from 'react-icons/hi';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// import { toast } from 'react-toastify';
// import CartDrawer from '../components/CartDrawer';
// import { FaRegStar, FaStar, FaHeart, FaRegHeart, FaRuler, FaCrown } from 'react-icons/fa';
// import { BsShieldCheck, BsBagCheck } from 'react-icons/bs';

// // ── Site Color Palette (matched from screenshots) ──────────────────────────
// const C = {
//   bgPage: '#150F05',   // deepest dark background
//   bgCard: '#1E1508',   // card / panel background
//   bgCardHover: '#261C0A',   // card hover
//   bgSidebar: '#1A1208',   // sidebar tone
//   bgInput: '#221A0A',   // input / form fields
//   gold: '#C9961A',   // primary gold accent
//   goldLight: '#D4A847',   // lighter gold / hover
//   goldDim: '#8B6914',   // dimmed gold / borders
//   goldPale: '#F5E6C8',   // cream text (primary)
//   goldMuted: '#9A8060',   // muted warm text
//   goldFaint: '#6B5840',   // very muted text
//   border: '#3D2E12',   // subtle border
//   borderLight: '#4D3A18',   // slightly lighter border
//   green: '#1A7A4A',   // success / delivery status
//   greenText: '#4ADE80',   // green text
//   red: '#8B1A1A',   // danger / delete
//   white: '#FFFFFF',
// };

// const colorMap = {
//   wine: '#722F37', red: '#FF0000', black: '#000000', olive: '#808000',
//   green: '#008000', cognac: '#D2691E', white: '#FFFFFF', yellow: '#FFFF00',
//   gray: '#808080', rose: '#FF007F', tobacco: '#A0522D', navy: '#000080',
//   beige: '#F5F5DC', blue: '#0000FF', brown: '#8B4513',
//   'dark-wine': '#453333', 'tobacco-dark': '#6e351a',
// };

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const { wishlist, toggleWishlistItem } = useContext(ShopContext);
//   const { submitReview, getProductReviews, token, deleteReview, userId } = useContext(ShopContext);
//   const { getSingleProduct } = useContext(ShopContext);

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
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState('');
//   const [sizeMultiplier, setSizeMultiplier] = useState(1);
//   const [sizeStock, setSizeStock] = useState(0);

//   const navigate = useNavigate();

//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === productId) : false;

//   const fetchProductData = async () => {
//     const item = await getSingleProduct(productId);
//     if (item) {
//       setProductData(item); setImage(item.image[0]);
//       setSelectedIndex(0); setDisplayPrice(item.price); setSizeMultiplier(1);
//     }
//   };

//   const loadReviews = async () => {
//     const data = await getProductReviews(productId);
//     setReviews(data);
//   };

//   const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

//   const handleSizeSelect = (sizeObj) => {
//     if (!sizeObj) return;
//     if (typeof sizeObj === 'string') {
//       setSize(sizeObj); setSizeMultiplier(1); setSizeStock(0);
//     } else if (typeof sizeObj === 'object' && sizeObj.size) {
//       setSize(sizeObj.size);
//       setSizeMultiplier(sizeObj.priceMultiplier || 1);
//       setSizeStock(sizeObj.stock || 0);
//     }
//   };

//   useEffect(() => { fetchProductData(); }, [productId, products]);

//   useEffect(() => {
//     if (productData?.color?.length) {
//       const firstColor = productData.color[0];
//       setSelectedColor(typeof firstColor === 'string' ? firstColor : firstColor?.name || 'Unknown');
//     }
//   }, [productData]);

//   useEffect(() => { if (productData) setDisplayPrice(productData.price); }, [productData]);

//   const handleAddToCart = () => {
//     if (!size || !selectedColor) { toast.error('Please select a size and color.'); return; }
//     const customPrice = displayPrice - productData.price;
//     addToCart(productData._id, size, selectedColor, customPrice);
//     setIsButtonDisabled(true);
//     setTimeout(() => {
//       toast.success('Added to cart!');
//       setIsButtonDisabled(false);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 2000);
//   };

//   const handleReviewSubmit = async () => {
//     if (!token) return toast.error('Please login first');
//     if (!rating || !comment.trim()) return toast.error('Please add rating and comment');
//     const success = await submitReview(productId, rating, comment);
//     if (success) { setComment(''); setRating(5); loadReviews(); }
//   };

//   useEffect(() => { if (productId) loadReviews(); }, [productId]);

//   useEffect(() => {
//     if (productData?.price) setDisplayPrice(productData.price * (sizeMultiplier || 1));
//   }, [sizeMultiplier, productData?.price]);

//   if (!productData) return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: C.bgPage }}>
//       <div style={{ width: 40, height: 40, border: `3px solid ${C.gold}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
//       <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//     </div>
//   );

//   const avgRating = reviews.length > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
//   const roundedRating = Math.round(avgRating);
//   const discountedPrice = productData.discountPrice > 0
//     ? displayPrice - (displayPrice * productData.discountPrice / 100) : null;
//   const customBreakdown = displayPrice > productData.price
//     ? `+${currency}${(displayPrice - productData.price).toFixed(2)} customization` : '';

//   /* ─── Scoped CSS ─────────────────────────────────────────────────────── */
//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

//     .pp { font-family:'Jost',sans-serif; background:${C.bgPage}; min-height:100vh; color:${C.goldPale}; }
//     .pp-serif { font-family:'Cormorant Garamond',serif; }

// /* Breadcrumb */
// .pp-crumb { background:${C.bgSidebar}; border-bottom:1px solid ${C.border}; padding:10px 40px; font-size:11px; letter-spacing:.06em; color:${C.goldMuted}; }
// .pp-crumb span { color:${C.goldLight}; font-weight:500; }

//     /* Gold shimmer badge */
//     .pp-badge {
//       background:linear-gradient(135deg,${C.goldDim} 0%,${C.gold} 50%,${C.goldDim} 100%);
//       background-size:200% 200%; animation:ppShimmer 3s ease infinite;
//       color:${C.bgPage}; border-radius:99px; padding:3px 12px;
//       font-size:10px; font-weight:800; letter-spacing:.18em;
//       display:inline-flex; align-items:center; gap:5px;
//     }
//     .pp-badge-sale {
//       background:linear-gradient(135deg,#7A3A00 0%,#C05A00 50%,#7A3A00 100%);
//       background-size:200% 200%; animation:ppShimmer 3s ease infinite;
//       color:#FFD580; border-radius:99px; padding:3px 12px;
//       font-size:10px; font-weight:800; letter-spacing:.14em;
//     }
//     @keyframes ppShimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

//     /* Image gallery */
//     .pp-img-wrap { overflow:hidden; cursor:zoom-in; border-radius:16px; background:${C.bgCard}; border:1px solid ${C.border}; }
//     .pp-img-wrap img { transition:transform .15s ease; display:block; width:100%; height:100%; object-fit:cover; }
//     .pp-img-wrap:hover img { transform:scale(1.45); }

//     .pp-thumb { transition:all .2s ease; border:2px solid transparent; border-radius:10px; overflow:hidden; cursor:pointer; background:${C.bgCard}; flex-shrink:0; }
//     .pp-thumb:hover { border-color:${C.goldDim}; }
//     .pp-thumb.active { border-color:${C.gold}; box-shadow:0 0 0 1px ${C.gold}40; }

//     /* Trust badges */
//     .pp-trust { display:flex; flex-direction:column; align-items:center; gap:7px; background:${C.bgCard}; border-radius:12px; padding:14px 10px; border:1px solid ${C.border}; flex:1; transition:all .2s; }
//     .pp-trust:hover { border-color:${C.goldDim}; transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,.4); }

//     /* Price box */
//     .pp-pricebox { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:16px; padding:20px; margin-bottom:22px; position:relative; overflow:hidden; }
//     .pp-pricebox::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,${C.gold},transparent); }

//     /* Color dots */
//     .pp-clr { border-radius:50%; cursor:pointer; transition:all .2s; border:none; flex-shrink:0; }
//     .pp-clr:hover { transform:scale(1.15); }
//     .pp-clr.active { box-shadow:0 0 0 2px ${C.bgPage}, 0 0 0 4px ${C.gold}; transform:scale(1.1); }

//     /* Size buttons */
//     .pp-size { border:1px solid ${C.border}; border-radius:10px; background:${C.bgCard}; display:flex; flex-direction:column; align-items:center; padding:8px 16px; min-width:62px; cursor:pointer; transition:all .2s; }
//     .pp-size:hover { border-color:${C.goldDim}; background:${C.bgCardHover}; }
//     .pp-size.active { border-color:${C.gold} !important; background:${C.bgCardHover}; box-shadow:0 0 0 1px ${C.gold}40; }
//     .pp-size.active .pp-size-lbl { color:${C.gold}; }
//     .pp-size.active .pp-size-price { color:${C.goldLight}; }
//     .pp-size-lbl { font-weight:700; font-size:14px; color:${C.goldPale}; }
//     .pp-size-price { font-size:10px; color:${C.goldMuted}; font-weight:500; }

//     /* Cart button */
//     .pp-cart {
//       width:100%; color:${C.bgPage}; font-weight:800; font-size:12px;
//       letter-spacing:.18em; border:none; border-radius:14px; padding:16px;
//       cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px;
//       background:linear-gradient(135deg,${C.goldDim} 0%,${C.gold} 50%,${C.goldDim} 100%);
//       background-size:200% 200%;
//       transition:all .3s ease; position:relative; overflow:hidden;
//     }
//     .pp-cart::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent); transition:left .5s; }
//     .pp-cart:hover::before { left:100%; }
//     .pp-cart:hover { background-position:100% 50%; box-shadow:0 10px 30px ${C.gold}40; transform:translateY(-2px); }
//     .pp-cart:disabled { background:${C.goldFaint}; color:${C.goldMuted}; box-shadow:none; transform:none; cursor:not-allowed; }

//     /* Wishlist button */
//     .pp-wish { width:100%; border:1px solid ${C.border}; border-radius:14px; padding:14px; background:${C.bgCard}; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; font-size:11px; font-weight:700; letter-spacing:.14em; transition:all .2s; color:${C.goldMuted}; }
//     .pp-wish:hover { border-color:${C.gold}; color:${C.gold}; background:${C.bgCardHover}; }
//     .pp-wish.wishlisted { color:${C.gold}; border-color:${C.gold}; }

//     /* Made to measure */
//     .pp-mtm { width:100%; border:1px solid ${C.goldDim}; border-radius:12px; padding:12px; background:transparent; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; font-size:11px; font-weight:700; letter-spacing:.18em; color:${C.gold}; font-family:'Jost',sans-serif; transition:all .2s; }
//     .pp-mtm:hover, .pp-mtm.active { background:${C.bgCardHover}; border-color:${C.gold}; }

//     /* Tabs */
//     .pp-tab { padding-bottom:14px; font-size:11px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; background:none; border:none; cursor:pointer; color:${C.goldFaint}; position:relative; transition:color .2s; font-family:'Jost',sans-serif; }
//     .pp-tab.active { color:${C.gold}; }
//     .pp-tab.active::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:2px; background:${C.gold}; border-radius:99px; }

//     /* Review card */
//     .pp-rev-card { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:14px; padding:20px; margin-bottom:14px; transition:border-color .2s; }
//     .pp-rev-card:hover { border-color:${C.goldDim}; }

//     /* Review input */
//     .pp-rinput { width:100%; border:1px solid ${C.border}; border-radius:10px; padding:12px 16px; font-size:14px; color:${C.goldPale}; resize:vertical; font-family:'Jost',sans-serif; background:${C.bgInput}; outline:none; transition:border-color .2s,box-shadow .2s; }
//     .pp-rinput:focus { border-color:${C.gold}; box-shadow:0 0 0 3px ${C.gold}20; }
//     .pp-rinput::placeholder { color:${C.goldFaint}; }

//     /* Avatar */
//     .pp-avatar { width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg,${C.goldDim},${C.gold}); color:${C.bgPage}; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; flex-shrink:0; }

//     /* Section label */
//     .pp-slabel { font-size:10px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:${C.gold}; }

//     /* Divider */
//     .pp-hr { height:1px; background:linear-gradient(90deg,transparent,${C.border},transparent); margin:20px 0; }

//     /* Stat bar */
//     .pp-bar-track { flex:1; height:5px; background:${C.border}; border-radius:99px; overflow:hidden; }
//     .pp-bar-fill { height:100%; background:linear-gradient(90deg,${C.goldDim},${C.gold}); border-radius:99px; transition:width .6s ease; }

//     /* Policy row */
//     .pp-policy-row { font-size:13px; color:${C.goldMuted}; line-height:1.6; padding:9px 0; border-bottom:1px solid ${C.border}; }
//     .pp-policy-row:last-child { border-bottom:none; }

//     /* Rating summary box */
//     .pp-rsum { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:18px; padding:24px; margin-bottom:24px; position:relative; overflow:hidden; }
//     .pp-rsum::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,${C.gold},transparent); }

//     /* Related header */
//     .pp-related-hr { height:1px; flex:1; }

//     /* Scrollbar */
//     .pp ::-webkit-scrollbar { width:4px; height:4px; }
//     .pp ::-webkit-scrollbar-track { background:${C.bgCard}; }
//     .pp ::-webkit-scrollbar-thumb { background:${C.goldDim}; border-radius:99px; }

//     /* Star interactive */
//     .pp-star-click { font-size:26px; cursor:pointer; transition:transform .1s; }
//     .pp-star-click:hover { transform:scale(1.25); }

//     /* Submit btn */
//     .pp-submit-btn { margin-top:12px; background:${C.gold}; color:${C.bgPage}; border-radius:10px; padding:12px 28px; font-size:11px; font-weight:800; letter-spacing:.15em; border:none; cursor:pointer; font-family:'Jost',sans-serif; transition:all .2s; }
//     .pp-submit-btn:hover { background:${C.goldLight}; box-shadow:0 4px 16px ${C.gold}40; }

//     /* Login prompt */
//     .pp-login-prompt { padding:18px; border-radius:12px; background:${C.bgCard}; border:1px dashed ${C.goldDim}; text-align:center; margin-bottom:18px; font-size:14px; color:${C.goldMuted}; }
//     .pp-login-prompt strong { color:${C.gold}; }
//   `;

//   return (
//     <>
//       <style>{css}</style>
//       <div className="pp">

//         {/* ── Breadcrumb ── */}
//         <div className="pp-crumb">
//           Home &nbsp;›&nbsp; Collection &nbsp;›&nbsp;
//           <span>{productData.name}</span>
//         </div>

//         <div style={{ padding: '32px 24px 80px', maxWidth: 1380, margin: '0 auto' }}>
//           <div style={{ display: 'flex', gap: 52, flexWrap: 'wrap' }}>

//             {/* ════════════ LEFT: Gallery ════════════ */}
//             <div style={{ flex: '0 0 min(470px,100%)', position: 'sticky', top: 24, alignSelf: 'flex-start' }}>

//               {/* Main image */}
//               <div
//                 className="pp-img-wrap"
//                 style={{ aspectRatio: '4/5', maxHeight: 550, marginBottom: 12 }}
//                 onMouseMove={e => {
//                   const r = e.currentTarget.getBoundingClientRect();
//                   e.currentTarget.querySelector('img').style.transformOrigin =
//                     `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
//                 }}
//               >
//                 <img src={image} alt={productData.name} />
//               </div>

//               {/* Thumbnails */}
//               <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
//                 {productData.image.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`pp-thumb ${index === selectedIndex ? 'active' : ''}`}
//                     onClick={() => { setImage(item); setSelectedIndex(index); }}
//                     style={{ width: 72, height: 86 }}
//                   >
//                     <img src={item} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                   </div>
//                 ))}
//               </div>

//               {/* Trust Badges */}
//               <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
//                 {[
//                   { icon: <BsShieldCheck size={20} />, label: '100% Authentic' },
//                   { icon: <MdLocalShipping size={20} />, label: 'Free Delivery' },
//                   { icon: <MdLoop size={20} />, label: '7-Day Returns' },
//                 ].map((b, i) => (
//                   <div key={i} className="pp-trust">
//                     <span style={{ color: C.gold }}>{b.icon}</span>
//                     <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.05em', color: C.goldMuted, textAlign: 'center', lineHeight: 1.3 }}>{b.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ════════════ RIGHT: Info ════════════ */}
//             <div style={{ flex: '1 1 340px', minWidth: 0 }}>

//               {/* Badges */}
//               <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
//                 <span className="pp-badge"><FaCrown size={10} /> PREMIUM COLLECTION</span>
//                 {productData.discountPrice > 0 && (
//                   <span className="pp-badge-sale">{productData.discountPrice}% OFF</span>
//                 )}
//               </div>

//               {/* Title */}
//               <h1 className="pp-serif" style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 400, color: C.goldPale, lineHeight: 1.15, marginBottom: 14 }}>
//                 {productData.name}
//               </h1>

//               {/* Ratings row */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
//                 <div style={{ display: 'flex', gap: 2 }}>
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} style={{ color: C.gold, fontSize: 14 }}>
//                       {i < roundedRating ? <FaStar /> : <FaRegStar />}
//                     </span>
//                   ))}
//                 </div>
//                 <span style={{ fontSize: 13, color: C.goldMuted }}>
//                   {avgRating.toFixed(1)} · {reviews.length} reviews
//                 </span>
//                 <span style={{ width: 1, height: 14, background: C.border, display: 'inline-block' }} />
//                 <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#4ADE80', fontWeight: 600 }}>
//                   <MdVerified size={14} /> Verified Brand
//                 </span>
//               </div>

//               {/* Price Box */}
//               <div className="pp-pricebox">
//                 {discountedPrice ? (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
//                     <span className="pp-serif" style={{ fontSize: 44, fontWeight: 600, color: C.gold, lineHeight: 1 }}>
//                       {currency}{discountedPrice.toFixed(2)}
//                     </span>
//                     <span className="pp-serif" style={{ fontSize: 24, color: C.goldFaint, textDecoration: 'line-through', lineHeight: 1.4 }}>
//                       {currency}{displayPrice.toFixed(2)}
//                     </span>
//                     <span style={{ background: C.goldDim, color: C.goldPale, borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '.06em' }}>
//                       SAVE {currency}{(displayPrice - discountedPrice).toFixed(2)}
//                     </span>
//                   </div>
//                 ) : (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
//                     <span className="pp-serif" style={{ fontSize: 44, fontWeight: 600, color: C.gold, lineHeight: 1 }}>
//                       {currency}{displayPrice.toFixed(2)}
//                     </span>
//                     {customBreakdown && (
//                       <span style={{ fontSize: 12, color: C.goldMuted, marginBottom: 5 }}>({customBreakdown})</span>
//                     )}
//                   </div>
//                 )}
//                 <p style={{ fontSize: 12, color: C.goldFaint, marginTop: 8 }}>
//                   All taxes included · Free shipping on orders above {currency}1000
//                 </p>
//               </div>

//               {/* Description */}
//               <p style={{ color: C.goldMuted, lineHeight: 1.85, fontSize: 14, marginBottom: 22 }}>
//                 {productData.description}
//               </p>

//               <div className="pp-hr" />

//               {/* ── Colors ── */}
//               <div style={{ marginBottom: 22 }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                   <span className="pp-slabel">Color</span>
//                   <span style={{ fontSize: 13, color: C.goldLight, fontWeight: 500, textTransform: 'capitalize' }}>{selectedColor}</span>
//                 </div>
//                 <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
//                   {productData.color?.map((colorObj, index) => {
//                     let colorName, colorHex;
//                     if (typeof colorObj === 'string') {
//                       colorName = colorObj;
//                       colorHex = colorMap[colorObj.toLowerCase()] || '#CCCCCC';
//                     } else if (colorObj?.name) {
//                       colorName = colorObj.name; colorHex = colorObj.hex || '#CCCCCC';
//                     } else { colorName = 'Unknown'; colorHex = '#CCCCCC'; }
//                     return (
//                       <button
//                         key={index}
//                         className={`pp-clr ${selectedColor === colorName ? 'active' : ''}`}
//                         onClick={() => setSelectedColor(colorName)}
//                         style={{ width: 34, height: 34, background: colorHex, outline: colorHex === '#FFFFFF' ? `1px solid ${C.border}` : 'none' }}
//                         title={colorName}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* ── Sizes ── */}
//               <div style={{ marginBottom: 22 }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                   <span className="pp-slabel">Select Size</span>
//                   <button
//                     onClick={() => setShowModal(true)}
//                     style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: '.06em', textDecoration: 'underline', textUnderlineOffset: 3, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Jost,sans-serif' }}
//                   >
//                     <FaRuler size={11} /> Size Guide
//                   </button>
//                   {showModal && <Modal onclose={() => setShowModal(false)} />}
//                 </div>
//                 <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//                   {productData.sizes?.length > 0 ? productData.sizes.map((sizeObj, index) => {
//                     const sizeLabel = typeof sizeObj === 'object'
//                       ? (sizeObj?.size ?? `Size ${index + 1}`) : String(sizeObj);
//                     const multiplier = sizeObj?.priceMultiplier || 1;
//                     const sizePrice = (productData.price * multiplier).toFixed(2);
//                     const isSelected = size === sizeLabel;
//                     return (
//                       <button
//                         key={index}
//                         type="button"
//                         className={`pp-size ${isSelected ? 'active' : ''}`}
//                         onClick={() => handleSizeSelect(sizeObj)}
//                       >
//                         <span className="pp-size-lbl">{sizeLabel}</span>
//                         <span className="pp-size-price">{currency}{sizePrice}</span>
//                       </button>
//                     );
//                   }) : <p style={{ fontSize: 13, color: C.goldMuted }}>No sizes available</p>}
//                 </div>
//                 {size && sizeStock > 0 && sizeStock < 5 && (
//                   <p style={{ fontSize: 12, color: '#F97316', fontWeight: 600, marginTop: 10 }}>
//                     🔥 Only {sizeStock} left — order soon!
//                   </p>
//                 )}
//               </div>

//               {/* ── Made to Measure ── */}
//               <div style={{ marginBottom: 22 }}>
//                 <button
//                   className={`pp-mtm ${makeMeasure ? 'active' : ''}`}
//                   onClick={() => setMakeMeasure(!makeMeasure)}
//                 >
//                   <HiSparkles size={15} /> MADE TO MEASURE
//                 </button>
//                 {makeMeasure && (
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12, padding: '12px 16px', borderRadius: 10, background: '#0F1F3A', border: `1px solid #1E3A5F` }}>
//                     <FaInfoCircle style={{ color: '#60A5FA', flexShrink: 0 }} size={14} />
//                     <p style={{ fontSize: 13, color: '#93C5FD' }}>Custom measurements can be added on the Cart page.</p>
//                   </div>
//                 )}
//               </div>

//               {/* ── CTAs ── */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
//                 <button
//                   className="pp-cart"
//                   onClick={() => { handleAddToCart(); toggleCartDrawer(); }}
//                   disabled={isButtonDisabled || !size || !selectedColor}
//                 >
//                   <BsBagCheck size={18} />
//                   {isButtonDisabled ? 'ADDING TO CART...' : 'ADD TO CART'}
//                 </button>
//                 <button
//                   className={`pp-wish ${isWishlisted ? 'wishlisted' : ''}`}
//                   onClick={() => toggleWishlistItem(productId)}
//                 >
//                   {isWishlisted
//                     ? <FaHeart size={16} style={{ color: C.gold }} />
//                     : <FaRegHeart size={16} />}
//                   {isWishlisted ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST'}
//                 </button>
//               </div>

//               <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//               <JacketLiningSelector basePrice={productData.price} onPriceChange={p => setDisplayPrice(p)} />

//               {/* ── Policy list ── */}
//               <div className="pp-hr" />
//               {[
//                 '✦  100% original product — crafted with premium materials',
//                 '✦  Secure COD + all major payment methods accepted',
//                 '✦  Simple 7-day return or exchange — no questions asked',
//                 '✦  Real-time tracking updates with every order',
//                 '✦  Sustainable, eco-friendly packaging on all deliveries',
//               ].map((line, i) => (
//                 <p key={i} className="pp-policy-row">{line}</p>
//               ))}
//             </div>
//           </div>

//           {/* ════════════ Tabs ════════════ */}
//           <div style={{ marginTop: 80 }}>
//             <div style={{ display: 'flex', gap: 32, borderBottom: `2px solid ${C.border}`, marginBottom: 32 }}>
//               {['description', 'reviews'].map(tab => (
//                 <button key={tab} className={`pp-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
//                   {tab === 'reviews' ? `Reviews (${reviews.length})` : 'Description'}
//                 </button>
//               ))}
//             </div>

//             {activeTab === 'description' && (
//               <div style={{ color: C.goldMuted, lineHeight: 1.9, fontSize: 15 }}
//                 dangerouslySetInnerHTML={{ __html: productData.detailedDescription }} />
//             )}

//             {activeTab === 'reviews' && (
//               <div style={{ maxWidth: 680 }}>

//                 {/* Rating summary */}
//                 {reviews.length > 0 && (
//                   <div className="pp-rsum" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
//                     <div style={{ textAlign: 'center', flexShrink: 0 }}>
//                       <div className="pp-serif" style={{ fontSize: 60, fontWeight: 600, color: C.gold, lineHeight: 1 }}>
//                         {avgRating.toFixed(1)}
//                       </div>
//                       <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
//                         {[...Array(5)].map((_, i) => (
//                           <span key={i} style={{ color: C.gold, fontSize: 12 }}>{i < roundedRating ? <FaStar /> : <FaRegStar />}</span>
//                         ))}
//                       </div>
//                       <p style={{ fontSize: 11, color: C.goldFaint, marginTop: 4 }}>{reviews.length} reviews</p>
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       {[5, 4, 3, 2, 1].map(star => {
//                         const count = reviews.filter(r => Math.round(r.rating) === star).length;
//                         const pct = reviews.length ? (count / reviews.length) * 100 : 0;
//                         return (
//                           <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
//                             <span style={{ fontSize: 11, color: C.goldFaint, width: 8 }}>{star}</span>
//                             <FaStar size={9} style={{ color: C.gold, flexShrink: 0 }} />
//                             <div className="pp-bar-track">
//                               <div className="pp-bar-fill" style={{ width: `${pct}%` }} />
//                             </div>
//                             <span style={{ fontSize: 11, color: C.goldFaint, width: 16 }}>{count}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {/* Write review */}
//                 {token ? (
//                   <div style={{ marginBottom: 24, padding: 24, borderRadius: 16, border: `1px solid ${C.border}`, background: C.bgCard }}>
//                     <h3 className="pp-serif" style={{ fontSize: 24, fontWeight: 400, color: C.goldPale, marginBottom: 16 }}>Write a Review</h3>
//                     <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
//                       {[1, 2, 3, 4, 5].map(s => (
//                         <span key={s} className="pp-star-click" onClick={() => setRating(s)}
//                           style={{ color: s <= rating ? C.gold : C.border }}>
//                           {s <= rating ? <FaStar /> : <FaRegStar />}
//                         </span>
//                       ))}
//                     </div>
//                     <textarea
//                       className="pp-rinput"
//                       placeholder="Share your honest experience with this product..."
//                       value={comment}
//                       onChange={e => setComment(e.target.value)}
//                       rows={4}
//                     />
//                     <button className="pp-submit-btn" onClick={handleReviewSubmit}>
//                       SUBMIT REVIEW
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="pp-login-prompt">
//                     Please <strong>login</strong> to write a review.
//                   </div>
//                 )}

//                 {/* Review list */}
//                 {reviews.length === 0 ? (
//                   <p style={{ fontSize: 14, color: C.goldFaint, textAlign: 'center', padding: '24px 0' }}>
//                     No reviews yet — be the first to share your experience!
//                   </p>
//                 ) : reviews.map(rev => (
//                   <div key={rev._id} className="pp-rev-card">
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                       <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//                         <div className="pp-avatar">{(rev.user?.name || 'U')[0].toUpperCase()}</div>
//                         <div>
//                           <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                             <span style={{ fontWeight: 600, fontSize: 14, color: C.goldPale }}>{rev.user?.name || 'Customer'}</span>
//                             <MdVerified size={13} style={{ color: '#4ADE80' }} />
//                           </div>
//                           <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
//                             {[...Array(5)].map((_, i) => (
//                               <span key={i} style={{ color: C.gold, fontSize: 11 }}>{i < rev.rating ? <FaStar /> : <FaRegStar />}</span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//                         <span style={{ fontSize: 11, color: C.goldFaint }}>
//                           {new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
//                         </span>
//                         {rev.user?._id === userId && (
//                           <button
//                             onClick={async () => { const ok = await deleteReview(rev._id); if (ok) loadReviews(); }}
//                             style={{ fontSize: 11, color: '#F87171', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
//                           >Delete</button>
//                         )}
//                       </div>
//                     </div>
//                     <p style={{ fontSize: 14, color: C.goldMuted, lineHeight: 1.75, marginTop: 12 }}>{rev.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ════════════ Related Products ════════════ */}
//           <div style={{ marginTop: 80 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
//               <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${C.border})` }} />
//               <h2 className="pp-serif" style={{ fontSize: 30, fontWeight: 400, color: C.goldPale, whiteSpace: 'nowrap' }}>
//                 You May Also Like
//               </h2>
//               <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${C.border},transparent)` }} />
//             </div>
//             <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;




// import { useContext, useEffect, useState, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { FaInfoCircle, FaCrown, FaChevronUp, FaChevronDown, FaRuler } from 'react-icons/fa';
// import { MdVerified, MdLocalShipping, MdLoop } from 'react-icons/md';
// import { HiSparkles } from 'react-icons/hi';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// import { toast } from 'react-toastify';
// import CartDrawer from '../components/CartDrawer';
// import { FaRegStar, FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
// import { BsShieldCheck, BsBagCheck } from 'react-icons/bs';

// /* ─── Site Color Palette — D DOLLY LAMB (dark brown + gold) ─────────────── */
// const C = {
//   bgPage: '#0E0A04',   // deepest dark page bg
//   bgCard: '#1A1208',   // card background
//   bgCardHover: '#221A0A',   // card hover
//   bgInput: '#150F05',   // input background
//   gold: '#C9961A',   // primary gold
//   goldLight: '#D4A847',   // lighter gold / hover
//   goldDim: '#8B6914',   // dimmed gold / borders
//   goldPale: '#F5E6C8',   // cream primary text
//   goldMuted: '#9A8060',   // muted warm text
//   goldFaint: '#5C4A30',   // very faint text
//   border: '#2E2210',   // subtle border
//   borderBright: '#4D3A18',   // brighter border
//   green: '#1A7A4A',
//   white: '#FFFFFF',
// };

// const colorMap = {
//   wine: '#722F37', red: '#FF0000', black: '#000000', olive: '#808000',
//   green: '#008000', cognac: '#D2691E', white: '#FFFFFF', yellow: '#FFFF00',
//   gray: '#808080', rose: '#FF007F', tobacco: '#A0522D', navy: '#000080',
//   beige: '#F5F5DC', blue: '#0000FF', brown: '#8B4513',
//   'dark gray': '#404040', 'dark-gray': '#404040',
//   'dark-wine': '#453333', 'tobacco-dark': '#6e351a',
// };

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const { wishlist, toggleWishlistItem } = useContext(ShopContext);
//   const { submitReview, getProductReviews, token, deleteReview, userId } = useContext(ShopContext);
//   const { getSingleProduct } = useContext(ShopContext);

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [size, setSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');
//   const [makeMeasure, setMakeMeasure] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [displayPrice, setDisplayPrice] = useState(0);
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState('');
//   const [sizeMultiplier, setSizeMultiplier] = useState(1);
//   const [sizeStock, setSizeStock] = useState(0);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const thumbListRef = useRef(null);
//   const navigate = useNavigate();

//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === productId) : false;

//   const fetchProductData = async () => {
//     const item = await getSingleProduct(productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0);
//       setDisplayPrice(item.price);
//       setSizeMultiplier(1);
//     }
//   };

//   const loadReviews = async () => {
//     const data = await getProductReviews(productId);
//     setReviews(data);
//   };

//   const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

//   const handleSizeSelect = (sizeObj) => {
//     if (!sizeObj) return;
//     if (typeof sizeObj === 'string') {
//       setSize(sizeObj); setSizeMultiplier(1); setSizeStock(0);
//     } else if (typeof sizeObj === 'object' && sizeObj.size) {
//       setSize(sizeObj.size);
//       setSizeMultiplier(sizeObj.priceMultiplier || 1);
//       setSizeStock(sizeObj.stock || 0);
//     }
//   };

//   const scrollThumbs = (dir) => {
//     if (thumbListRef.current) {
//       thumbListRef.current.scrollBy({ top: dir * 110, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => { fetchProductData(); }, [productId, products]);

//   useEffect(() => {
//     if (productData?.color?.length) {
//       const firstColor = productData.color[0];
//       setSelectedColor(typeof firstColor === 'string' ? firstColor : firstColor?.name || 'Unknown');
//     }
//   }, [productData]);

//   useEffect(() => { if (productData) setDisplayPrice(productData.price); }, [productData]);

//   const handleAddToCart = () => {
//     if (!size || !selectedColor) { toast.error('Please select a size and color.'); return; }
//     const customPrice = displayPrice - productData.price;
//     addToCart(productData._id, size, selectedColor, customPrice);
//     setIsButtonDisabled(true);
//     setTimeout(() => {
//       toast.success('Added to cart!');
//       setIsButtonDisabled(false);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 2000);
//   };

//   const handleReviewSubmit = async () => {
//     if (!token) return toast.error('Please login first');
//     if (!rating || !comment.trim()) return toast.error('Please add rating and comment');
//     const success = await submitReview(productId, rating, comment);
//     if (success) { setComment(''); setRating(5); loadReviews(); }
//   };

//   useEffect(() => { if (productId) loadReviews(); }, [productId]);

//   useEffect(() => {
//     if (productData?.price) setDisplayPrice(productData.price * (sizeMultiplier || 1));
//   }, [sizeMultiplier, productData?.price]);

//   if (!productData) return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: C.bgPage }}>
//       <div style={{ width: 40, height: 40, border: `3px solid ${C.gold}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
//       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//     </div>
//   );

//   const avgRating = reviews.length > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
//   const roundedRating = Math.round(avgRating);
//   const discountedPrice = productData.discountPrice > 0
//     ? displayPrice - (displayPrice * productData.discountPrice / 100) : null;
//   const customBreakdown = displayPrice > productData.price
//     ? `+${currency}${(displayPrice - productData.price).toFixed(2)} customization` : '';

//   /* ─── Scoped CSS ─────────────────────────────────────────────────────── */
//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

//     .pp { font-family:'Jost',sans-serif; background:${C.bgPage}; min-height:100vh; color:${C.goldPale}; }
//     .pp-serif { font-family:'Cormorant Garamond',serif; }

//     /* ── Breadcrumb ── */
//     .pp-crumb {
//       padding:12px 40px;
//       font-size:11px; font-weight:700;
//       letter-spacing:.18em; text-transform:uppercase;
//       color:${C.gold};
//       border-bottom:1px solid ${C.border};
//       background:${C.bgPage};
//     }
//     .pp-crumb span { color:${C.goldMuted}; font-weight:400; letter-spacing:.06em; text-transform:none; }

//     /* ── Thumbnail column ── */
//     .pp-thumb-col {
//       display:flex; flex-direction:column; align-items:center;
//       width:100px; flex-shrink:0; gap:6px;
//     }

//     /* scroll list */
//     .pp-thumb-scroll {
//       display:flex; flex-direction:column; gap:10px;
//       overflow-y:scroll;
//       max-height:460px;
//       scrollbar-width:none;
//       -ms-overflow-style:none;
//       width:100%;
//     }
//     .pp-thumb-scroll::-webkit-scrollbar { display:none; }

//     /* arrow buttons */
//     .pp-arr {
//       width:100%; height:32px;
//       background:${C.bgCard};
//       border:1px solid ${C.border};
//       border-radius:8px;
//       display:flex; align-items:center; justify-content:center;
//       cursor:pointer; color:${C.goldMuted};
//       transition:all .2s; flex-shrink:0;
//     }
//     .pp-arr:hover { background:${C.bgCardHover}; border-color:${C.goldDim}; color:${C.gold}; }

//     /* thumbnail items — inactive = dimmed, active = full bright */
//     .pp-thumb-item {
//       width:100%; height:90px;
//       border-radius:10px; overflow:hidden; cursor:pointer;
//       border:2px solid ${C.border};
//       background:${C.bgCard};
//       flex-shrink:0; transition:all .25s;
//       opacity:0.45;                /* ← inactive: dimmed */
//       filter:brightness(0.7);
//     }
//     .pp-thumb-item:hover {
//       opacity:0.75; filter:brightness(0.9);
//       border-color:${C.goldDim};
//     }
//     .pp-thumb-item.active {
//       opacity:1; filter:brightness(1);   /* ← active: full bright */
//       border-color:${C.gold};
//       box-shadow:0 0 0 1px ${C.gold}60, 0 0 14px ${C.gold}30;
//     }
//     .pp-thumb-item img { width:100%; height:100%; object-fit:cover; display:block; }

//     /* ── Main image container ── */
//     .pp-main-wrap {
//       flex:1;
//       position:relative;
//       border-radius:16px;
//       overflow:hidden;
//       background:#FFFFFF;
//       border:1px solid ${C.border};
//     }
//     .pp-main-wrap img {
//       width:100%; height:100%;
//       object-fit:contain;    /* ← contain not cover */
//       display:block;
//     }

//     /* Wishlist heart — top-right of main image */
//     .pp-img-wish {
//       position:absolute; top:14px; right:14px;
//       width:38px; height:38px; border-radius:50%;
//       background:rgba(14,10,4,0.65);
//       border:1px solid ${C.border};
//       display:flex; align-items:center; justify-content:center;
//       cursor:pointer; transition:all .2s; z-index:10;
//       backdrop-filter:blur(6px);
//     }
//     .pp-img-wish:hover { background:rgba(201,150,26,0.2); border-color:${C.goldDim}; }
//     .pp-img-wish.active { background:rgba(201,150,26,0.15); border-color:${C.gold}; }

//     /* Image counter */
//     .pp-counter {
//       position:absolute; bottom:14px; left:14px;
//       background:rgba(14,10,4,0.7);
//       border-radius:20px; padding:4px 12px;
//       font-size:12px; font-weight:600; color:${C.goldMuted};
//       backdrop-filter:blur(6px); letter-spacing:.04em;
//     }

//     /* ── Badges ── */
//     .pp-badge-gold {
//       background:linear-gradient(135deg,${C.goldDim} 0%,${C.gold} 50%,${C.goldDim} 100%);
//       background-size:200% 200%; animation:ppShimmer 3s ease infinite;
//       color:${C.bgPage}; border-radius:99px; padding:3px 12px;
//       font-size:10px; font-weight:800; letter-spacing:.18em;
//       display:inline-flex; align-items:center; gap:5px;
//     }
//     .pp-badge-sale {
//       background:linear-gradient(135deg,#7A3A00,#C05A00);
//       background-size:200% 200%; animation:ppShimmer 3s ease infinite;
//       color:#FFD580; border-radius:99px; padding:3px 12px;
//       font-size:10px; font-weight:800; letter-spacing:.14em;
//     }
//     @keyframes ppShimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

//     /* ── Price box ── */
//     .pp-pricebox {
//       background:${C.bgCard}; border:1px solid ${C.border};
//       border-radius:16px; padding:18px 20px; margin-bottom:22px;
//       position:relative; overflow:hidden;
//     }
//     .pp-pricebox::before {
//       content:''; position:absolute; top:0; left:0; right:0; height:2px;
//       background:linear-gradient(90deg,transparent,${C.gold},transparent);
//     }

//     /* ── Colour dots ── */
//     .pp-clr {
//       border-radius:50%; cursor:pointer; transition:all .2s;
//       border:2px solid transparent; flex-shrink:0;
//       width:34px; height:34px;
//     }
//     .pp-clr:hover { transform:scale(1.12); }
//     .pp-clr.active { box-shadow:0 0 0 2px ${C.bgPage}, 0 0 0 4px ${C.gold}; transform:scale(1.1); }

//     /* ── Size buttons — exact screenshot style ── */
//     .pp-size {
//       border:1px solid ${C.border}; border-radius:10px;
//       background:${C.bgCard};
//       display:flex; flex-direction:column; align-items:center;
//       padding:8px 16px; min-width:64px;
//       cursor:pointer; transition:all .2s;
//     }
//     .pp-size:hover { border-color:${C.goldDim}; background:${C.bgCardHover}; }
//     .pp-size.active {
//       border-color:${C.gold};
//       background:${C.bgCardHover};
//       box-shadow:0 0 0 1px ${C.gold}40;
//     }
//     .pp-size-lbl  { font-weight:700; font-size:13px; color:${C.goldPale}; }
//     .pp-size-price{ font-size:10px; color:${C.goldMuted}; font-weight:500; }
//     .pp-size.active .pp-size-lbl  { color:${C.gold}; }
//     .pp-size.active .pp-size-price { color:${C.goldLight}; }

//     /* ── Made to Measure ── */
//     .pp-mtm {
//       width:100%; border:1px solid ${C.border};
//       border-radius:12px; padding:14px 20px;
//       background:${C.bgCard}; cursor:pointer;
//       display:flex; align-items:center; justify-content:space-between;
//       color:${C.goldMuted}; font-size:12px; font-weight:700;
//       letter-spacing:.14em; font-family:'Jost',sans-serif; transition:all .2s;
//     }
//     .pp-mtm:hover, .pp-mtm.active { border-color:${C.goldDim}; color:${C.goldLight}; background:${C.bgCardHover}; }
//     .pp-mtm-left { display:flex; align-items:center; gap:10px; }

//     /* ── ADD TO CART — gold like site ── */
//     .pp-cart {
//       width:100%; color:${C.bgPage}; font-weight:800; font-size:13px;
//       letter-spacing:.18em; border:none; border-radius:12px; padding:16px;
//       cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px;
//       background:linear-gradient(135deg,${C.goldDim} 0%,${C.gold} 50%,${C.goldDim} 100%);
//       background-size:200% 200%;
//       transition:all .3s ease; position:relative; overflow:hidden;
//       font-family:'Jost',sans-serif;
//     }
//     .pp-cart::before {
//       content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
//       background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);
//       transition:left .5s;
//     }
//     .pp-cart:hover::before { left:100%; }
//     .pp-cart:hover { background-position:100% 50%; box-shadow:0 10px 30px ${C.gold}45; transform:translateY(-2px); }
//     .pp-cart:disabled { background:${C.bgCard}; color:${C.goldFaint}; border:1px solid ${C.border}; box-shadow:none; transform:none; cursor:not-allowed; }

//     /* ── Wishlist button ── */
//     .pp-wish {
//       width:100%; border:1px solid ${C.border}; border-radius:12px; padding:13px;
//       background:${C.bgCard}; cursor:pointer;
//       display:flex; align-items:center; justify-content:center; gap:8px;
//       font-size:11px; font-weight:700; letter-spacing:.14em;
//       transition:all .2s; color:${C.goldMuted}; font-family:'Jost',sans-serif;
//     }
//     .pp-wish:hover { border-color:${C.goldDim}; color:${C.gold}; background:${C.bgCardHover}; }
//     .pp-wish.wishlisted { color:${C.gold}; border-color:${C.gold}; }

//     /* ── Tabs ── */
//     .pp-tab {
//       padding-bottom:14px; font-size:11px; font-weight:700; letter-spacing:.18em;
//       text-transform:uppercase; background:none; border:none; cursor:pointer;
//       color:${C.goldFaint}; position:relative; transition:color .2s; font-family:'Jost',sans-serif;
//     }
//     .pp-tab.active { color:${C.gold}; }
//     .pp-tab.active::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:2px; background:${C.gold}; border-radius:99px; }

//     /* ── Trust badge ── */
//     .pp-trust {
//       display:flex; align-items:center; gap:10px;
//       padding:12px 16px; border-radius:10px;
//       background:${C.bgCard}; border:1px solid ${C.border}; transition:border-color .2s;
//     }
//     .pp-trust:hover { border-color:${C.goldDim}; }

//     /* ── Review card ── */
//     .pp-rev-card { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:14px; padding:20px; margin-bottom:14px; transition:border-color .2s; }
//     .pp-rev-card:hover { border-color:${C.borderBright}; }

//     /* ── Review input ── */
//     .pp-rinput {
//       width:100%; border:1px solid ${C.border}; border-radius:10px;
//       padding:12px 16px; font-size:14px; color:${C.goldPale};
//       resize:vertical; font-family:'Jost',sans-serif;
//       background:${C.bgInput}; outline:none; transition:border-color .2s,box-shadow .2s;
//     }
//     .pp-rinput:focus { border-color:${C.gold}; box-shadow:0 0 0 3px ${C.gold}20; }
//     .pp-rinput::placeholder { color:${C.goldFaint}; }

//     /* ── Avatar ── */
//     .pp-avatar { width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg,${C.goldDim},${C.gold}); color:${C.bgPage}; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; flex-shrink:0; }

//     /* ── Section label ── */
//     .pp-slabel { font-size:11px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:${C.goldMuted}; }

//     /* ── Divider ── */
//     .pp-hr { height:1px; background:linear-gradient(90deg,transparent,${C.border},transparent); margin:20px 0; }

//     /* ── Rating bar ── */
//     .pp-bar-track { flex:1; height:5px; background:${C.border}; border-radius:99px; overflow:hidden; }
//     .pp-bar-fill { height:100%; background:linear-gradient(90deg,${C.goldDim},${C.gold}); border-radius:99px; transition:width .6s ease; }

//     /* ── Rating summary box ── */
//     .pp-rsum { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:16px; padding:24px; margin-bottom:24px; position:relative; overflow:hidden; }
//     .pp-rsum::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,${C.gold},transparent); }

//     /* ── Policy row ── */
//     .pp-policy { display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid ${C.border}; font-size:13px; color:${C.goldMuted}; }
//     .pp-policy:last-child { border-bottom:none; }
//     .pp-policy-icon { width:30px; height:30px; border-radius:8px; background:${C.bgCard}; border:1px solid ${C.border}; display:flex; align-items:center; justify-content:center; flex-shrink:0; }

//     /* ── Submit button ── */
//     .pp-submit-btn { margin-top:12px; background:${C.gold}; color:${C.bgPage}; border-radius:10px; padding:12px 28px; font-size:11px; font-weight:800; letter-spacing:.15em; border:none; cursor:pointer; font-family:'Jost',sans-serif; transition:all .2s; }
//     .pp-submit-btn:hover { background:${C.goldLight}; box-shadow:0 4px 16px ${C.gold}40; }

//     /* scrollbar */
//     .pp * { scrollbar-width:thin; scrollbar-color:${C.border} transparent; }
//     .pp *::-webkit-scrollbar { width:4px; }
//     .pp *::-webkit-scrollbar-thumb { background:${C.border}; border-radius:99px; }
//   `;

//   return (
//     <>
//       <style>{css}</style>
//       <div className="pp">

//         {/* ── Breadcrumb — unchanged ── */}
//         <div className="pp-crumb">
//           {productData.category?.toUpperCase()} / {productData.subCategory?.toUpperCase() || 'PRODUCT'}
//           <span> — {productData.name?.substring(0, 50)}{productData.name?.length > 50 ? '...' : ''}</span>
//         </div>

//         <div style={{ padding: '28px 32px 80px', maxWidth: 1400, margin: '0 auto' }}>
//           <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>

//             {/* ════ LEFT: Thumbnail column + Main image ════ */}
//             <div
//               style={{
//                 display: 'flex', gap: 14,
//                 flex: '0 0 auto',
//                 width: 'min(620px, 100%)',
//                 position: 'sticky',
//                 top: '80px',          /* sticky below navbar */
//                 alignSelf: 'flex-start',
//               }}
//             >
//               {/* ── Thumbnail column ── */}
//               <div className="pp-thumb-col">
//                 <button className="pp-arr" onClick={() => scrollThumbs(-1)}>
//                   <FaChevronUp size={11} />
//                 </button>

//                 <div className="pp-thumb-scroll" ref={thumbListRef}>
//                   {productData.image.map((item, index) => (
//                     <div
//                       key={index}
//                       className={`pp-thumb-item ${index === selectedIndex ? 'active' : ''}`}
//                       onClick={() => { setImage(item); setSelectedIndex(index); }}
//                     >
//                       <img src={item} alt={`View ${index + 1}`} />
//                     </div>
//                   ))}
//                 </div>

//                 <button className="pp-arr" onClick={() => scrollThumbs(1)}>
//                   <FaChevronDown size={11} />
//                 </button>
//               </div>

//               {/* ── Main image ── large, contain, white bg ── */}
//               <div
//                 className="pp-main-wrap"
//                 style={{ aspectRatio: '1/1.1', flex: 1 }}
//               >
//                 <img src={image} alt={productData.name} />

//                 {/* Wishlist heart on image — top right */}
//                 <button
//                   className={`pp-img-wish ${isWishlisted ? 'active' : ''}`}
//                   onClick={() => toggleWishlistItem(productId)}
//                   title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
//                 >
//                   {isWishlisted
//                     ? <FaHeart size={16} style={{ color: C.gold }} />
//                     : <FaRegHeart size={16} style={{ color: C.goldMuted }} />
//                   }
//                 </button>

//                 {/* Counter badge */}
//                 <div className="pp-counter">
//                   {selectedIndex + 1}/{productData.image.length}
//                 </div>
//               </div>
//             </div>

//             {/* ════ RIGHT: Product Info ════ */}
//             <div style={{ flex: '1 1 320px', minWidth: 0 }}>

//               {/* Category line */}
//               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', color: C.gold, marginBottom: 10, textTransform: 'uppercase' }}>
//                 {productData.category} / {productData.subCategory}
//               </p>

//               {/* Badges */}
//               <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
//                 <span className="pp-badge-gold"><FaCrown size={10} /> PREMIUM COLLECTION</span>
//                 {productData.discountPrice > 0 && (
//                   <span className="pp-badge-sale">{productData.discountPrice}% OFF</span>
//                 )}
//               </div>

//               {/* Title */}
//               <h1 style={{ fontSize: 'clamp(18px,2.2vw,28px)', fontWeight: 500, color: C.goldPale, lineHeight: 1.4, marginBottom: 14 }}>
//                 {productData.name}
//               </h1>

//               {/* Stars */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
//                 <div style={{ display: 'flex', gap: 2 }}>
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} style={{ color: C.gold, fontSize: 15 }}>
//                       {i < roundedRating ? <FaStar /> : <FaRegStar />}
//                     </span>
//                   ))}
//                 </div>
//                 <span style={{ fontSize: 13, color: C.goldMuted }}>
//                   ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
//                 </span>
//               </div>

//               {/* Price */}
//               <div className="pp-pricebox">
//                 {discountedPrice ? (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
//                     <span className="pp-serif" style={{ fontSize: 44, fontWeight: 600, color: C.gold, lineHeight: 1 }}>
//                       {currency}{discountedPrice.toFixed(2)}
//                     </span>
//                     <span style={{ fontSize: 24, color: C.goldFaint, textDecoration: 'line-through', lineHeight: 1.5 }}>
//                       {currency}{displayPrice.toFixed(2)}
//                     </span>
//                     <span style={{ background: C.goldDim, color: C.goldPale, borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '.06em' }}>
//                       SAVE {currency}{(displayPrice - discountedPrice).toFixed(2)}
//                     </span>
//                   </div>
//                 ) : (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
//                     <span className="pp-serif" style={{ fontSize: 44, fontWeight: 600, color: C.gold, lineHeight: 1 }}>
//                       {currency}{displayPrice.toFixed(2)}
//                     </span>
//                     {customBreakdown && (
//                       <span style={{ fontSize: 12, color: C.goldMuted, marginBottom: 5 }}>({customBreakdown})</span>
//                     )}
//                   </div>
//                 )}
//                 <p style={{ fontSize: 12, color: C.goldFaint, marginTop: 8 }}>
//                   All taxes included · Free shipping above {currency}1000
//                 </p>
//               </div>

//               {/* Description */}
//               <p style={{ color: C.goldMuted, lineHeight: 1.8, fontSize: 13, marginBottom: 22 }}>
//                 {productData.description}
//               </p>

//               <div className="pp-hr" />

//               {/* ── Colour ── */}
//               <div style={{ marginBottom: 22 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
//                   <span className="pp-slabel">Colour</span>
//                   <span style={{ color: C.goldFaint, fontSize: 13 }}>—</span>
//                   <span style={{ fontSize: 13, color: C.goldPale, fontWeight: 500, textTransform: 'capitalize' }}>{selectedColor}</span>
//                 </div>
//                 <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
//                   {productData.color?.map((colorObj, index) => {
//                     let colorName, colorHex;
//                     if (typeof colorObj === 'string') {
//                       colorName = colorObj;
//                       colorHex = colorMap[colorObj.toLowerCase()] || '#888888';
//                     } else if (colorObj?.name) {
//                       colorName = colorObj.name; colorHex = colorObj.hex || '#888888';
//                     } else { colorName = 'Unknown'; colorHex = '#888888'; }
//                     return (
//                       <button
//                         key={index}
//                         className={`pp-clr ${selectedColor === colorName ? 'active' : ''}`}
//                         onClick={() => setSelectedColor(colorName)}
//                         style={{ background: colorHex, outline: colorHex === '#FFFFFF' ? `1px solid ${C.border}` : 'none' }}
//                         title={colorName}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* ── Select Size ── */}
//               <div style={{ marginBottom: 22 }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                   <span className="pp-slabel">Select Size</span>
//                   <button
//                     onClick={() => setShowModal(true)}
//                     style={{ fontSize: 12, color: C.gold, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Jost,sans-serif', letterSpacing: '.04em' }}
//                   >
//                     Size Guide
//                   </button>
//                   {showModal && <Modal onclose={() => setShowModal(false)} />}
//                 </div>
//                 <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//                   {productData.sizes?.length > 0 ? productData.sizes.map((sizeObj, index) => {
//                     const sizeLabel = typeof sizeObj === 'object' ? (sizeObj?.size ?? `Size ${index + 1}`) : String(sizeObj);
//                     const multiplier = sizeObj?.priceMultiplier || 1;
//                     const sizePrice = (productData.price * multiplier).toFixed(2);
//                     const isSelected = size === sizeLabel;
//                     return (
//                       <button key={index} type="button"
//                         className={`pp-size ${isSelected ? 'active' : ''}`}
//                         onClick={() => handleSizeSelect(sizeObj)}
//                       >
//                         <span className="pp-size-lbl">{sizeLabel}</span>
//                         <span className="pp-size-price">{currency}{sizePrice}</span>
//                       </button>
//                     );
//                   }) : <p style={{ fontSize: 13, color: C.goldMuted }}>No sizes available</p>}
//                 </div>
//                 {size && sizeStock > 0 && sizeStock < 5 && (
//                   <p style={{ fontSize: 12, color: '#F97316', fontWeight: 600, marginTop: 10 }}>
//                     🔥 Only {sizeStock} left — order soon!
//                   </p>
//                 )}
//               </div>

//               {/* ── Made to Measure ── */}
//               <div style={{ marginBottom: 12 }}>
//                 <button
//                   className={`pp-mtm ${makeMeasure ? 'active' : ''}`}
//                   onClick={() => setMakeMeasure(!makeMeasure)}
//                 >
//                   <div className="pp-mtm-left">
//                     <HiSparkles size={15} style={{ color: C.gold }} />
//                     <span>MADE TO MEASURE</span>
//                   </div>
//                   <FaChevronDown size={12} style={{ transform: makeMeasure ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s', color: C.gold }} />
//                 </button>
//                 {makeMeasure && (
//                   <div style={{ marginTop: 8, padding: '12px 16px', borderRadius: 10, background: C.bgCard, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
//                     <FaInfoCircle style={{ color: C.gold, flexShrink: 0 }} size={14} />
//                     <p style={{ fontSize: 13, color: C.goldMuted }}>Custom measurements can be added on the Cart page.</p>
//                   </div>
//                 )}
//               </div>

//               {/* ── ADD TO CART ── */}
//               <div style={{ marginBottom: 10, marginTop: 16 }}>
//                 <button
//                   className="pp-cart"
//                   onClick={() => { handleAddToCart(); toggleCartDrawer(); }}
//                   disabled={isButtonDisabled || !size || !selectedColor}
//                 >
//                   <BsBagCheck size={18} />
//                   {isButtonDisabled ? 'ADDING TO CART...' : 'ADD TO CART'}
//                 </button>
//               </div>

//               {/* ── Wishlist button ── */}
//               <div style={{ marginBottom: 22 }}>
//                 <button
//                   className={`pp-wish ${isWishlisted ? 'wishlisted' : ''}`}
//                   onClick={() => toggleWishlistItem(productId)}
//                 >
//                   {isWishlisted
//                     ? <FaHeart size={15} style={{ color: C.gold }} />
//                     : <FaRegHeart size={15} />}
//                   {isWishlisted ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST'}
//                 </button>
//               </div>

//               <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//               <JacketLiningSelector basePrice={productData.price} onPriceChange={p => setDisplayPrice(p)} />

//               {/* ── Policy list ── */}
//               <div className="pp-hr" />
//               {[
//                 { icon: <BsShieldCheck size={14} style={{ color: C.gold }} />, text: '100% original, premium materials' },
//                 { icon: <MdLocalShipping size={14} style={{ color: C.gold }} />, text: 'Secure cash on delivery + multiple payment methods' },
//                 { icon: <MdLoop size={14} style={{ color: C.gold }} />, text: 'Simple 7-day return or exchange policy' },
//               ].map((p, i) => (
//                 <div key={i} className="pp-policy">
//                   <div className="pp-policy-icon">{p.icon}</div>
//                   <span>{p.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ══ Tabs ══ */}
//           <div style={{ marginTop: 72 }}>
//             <div style={{ display: 'flex', gap: 32, borderBottom: `2px solid ${C.border}`, marginBottom: 32 }}>
//               {['description', 'reviews'].map(tab => (
//                 <button key={tab} className={`pp-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
//                   {tab === 'reviews' ? `Reviews (${reviews.length})` : 'Description'}
//                 </button>
//               ))}
//             </div>

//             {activeTab === 'description' && (
//               <div style={{ color: C.goldMuted, lineHeight: 1.9, fontSize: 15 }}
//                 dangerouslySetInnerHTML={{ __html: productData.detailedDescription }} />
//             )}

//             {activeTab === 'reviews' && (
//               <div style={{ maxWidth: 680 }}>
//                 {reviews.length > 0 && (
//                   <div className="pp-rsum" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
//                     <div style={{ textAlign: 'center', flexShrink: 0 }}>
//                       <div className="pp-serif" style={{ fontSize: 58, fontWeight: 600, color: C.gold, lineHeight: 1 }}>
//                         {avgRating.toFixed(1)}
//                       </div>
//                       <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
//                         {[...Array(5)].map((_, i) => (
//                           <span key={i} style={{ color: C.gold, fontSize: 13 }}>{i < roundedRating ? <FaStar /> : <FaRegStar />}</span>
//                         ))}
//                       </div>
//                       <p style={{ fontSize: 11, color: C.goldFaint, marginTop: 4 }}>{reviews.length} reviews</p>
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       {[5, 4, 3, 2, 1].map(star => {
//                         const count = reviews.filter(r => Math.round(r.rating) === star).length;
//                         const pct = reviews.length ? (count / reviews.length) * 100 : 0;
//                         return (
//                           <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
//                             <span style={{ fontSize: 11, color: C.goldFaint, width: 8 }}>{star}</span>
//                             <FaStar size={9} style={{ color: C.gold, flexShrink: 0 }} />
//                             <div className="pp-bar-track">
//                               <div className="pp-bar-fill" style={{ width: `${pct}%` }} />
//                             </div>
//                             <span style={{ fontSize: 11, color: C.goldFaint, width: 16 }}>{count}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {token ? (
//                   <div style={{ marginBottom: 24, padding: 24, borderRadius: 16, border: `1px solid ${C.border}`, background: C.bgCard }}>
//                     <h3 className="pp-serif" style={{ fontSize: 24, fontWeight: 400, color: C.goldPale, marginBottom: 16 }}>Write a Review</h3>
//                     <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
//                       {[1, 2, 3, 4, 5].map(s => (
//                         <span key={s} onClick={() => setRating(s)}
//                           style={{ fontSize: 26, cursor: 'pointer', color: s <= rating ? C.gold : C.border, transition: 'transform .1s' }}
//                           onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
//                           onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
//                         >
//                           {s <= rating ? <FaStar /> : <FaRegStar />}
//                         </span>
//                       ))}
//                     </div>
//                     <textarea className="pp-rinput" placeholder="Share your experience..." value={comment} onChange={e => setComment(e.target.value)} rows={4} />
//                     <button className="pp-submit-btn" onClick={handleReviewSubmit}>SUBMIT REVIEW</button>
//                   </div>
//                 ) : (
//                   <div style={{ padding: 18, borderRadius: 12, background: C.bgCard, border: `1px dashed ${C.border}`, textAlign: 'center', marginBottom: 18, color: C.goldMuted, fontSize: 14 }}>
//                     Please <span style={{ color: C.gold, fontWeight: 700, cursor: 'pointer' }}>login</span> to write a review.
//                   </div>
//                 )}

//                 {reviews.length === 0 ? (
//                   <p style={{ fontSize: 14, color: C.goldFaint, textAlign: 'center', padding: '24px 0' }}>
//                     No reviews yet — be the first to share!
//                   </p>
//                 ) : reviews.map(rev => (
//                   <div key={rev._id} className="pp-rev-card">
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                       <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//                         <div className="pp-avatar">{(rev.user?.name || 'U')[0].toUpperCase()}</div>
//                         <div>
//                           <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                             <span style={{ fontWeight: 600, fontSize: 14, color: C.goldPale }}>{rev.user?.name || 'Customer'}</span>
//                             <MdVerified size={13} style={{ color: '#4ADE80' }} />
//                           </div>
//                           <div style={{ display: 'flex', gap: 2, marginTop: 3 }}>
//                             {[...Array(5)].map((_, i) => (
//                               <span key={i} style={{ color: C.gold, fontSize: 11 }}>{i < rev.rating ? <FaStar /> : <FaRegStar />}</span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//                         <span style={{ fontSize: 11, color: C.goldFaint }}>
//                           {new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
//                         </span>
//                         {rev.user?._id === userId && (
//                           <button onClick={async () => { const ok = await deleteReview(rev._id); if (ok) loadReviews(); }}
//                             style={{ fontSize: 11, color: '#F87171', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
//                             Delete
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                     <p style={{ fontSize: 14, color: C.goldMuted, lineHeight: 1.75, marginTop: 12 }}>{rev.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ══ Related Products ══ */}
//           <div style={{ marginTop: 80 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
//               <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${C.border})` }} />
//               <h2 className="pp-serif" style={{ fontSize: 30, fontWeight: 400, color: C.goldPale, whiteSpace: 'nowrap' }}>
//                 You May Also Like
//               </h2>
//               <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${C.border},transparent)` }} />
//             </div>
//             <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;





import { useContext, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaInfoCircle, FaCrown, FaChevronUp, FaChevronDown, FaRuler } from 'react-icons/fa';
import { MdVerified, MdLocalShipping, MdLoop } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';
import RelatedProducts from '../components/RelatedProducts';
import Modal from '../components/Modal';
import JacketLiningSelector from '../components/JacketLiningSelector';
import { toast } from 'react-toastify';
import CartDrawer from '../components/CartDrawer';
import { FaRegStar, FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsShieldCheck, BsBagCheck } from 'react-icons/bs';

const C = {
  bgPage: '#080604',
  bgCard: '#110D06',
  bgCardHover: '#1A1409',
  bgInput: '#0D0A05',
  gold: '#C9961A',
  goldLight: '#E0AE3A',
  goldDim: '#8B6914',
  goldPale: '#F0E2C4',
  goldMuted: '#8A7050',
  goldFaint: '#4A3A22',
  border: '#231A0C',
  borderBright: '#3D2E14',
  green: '#1A7A4A',
  white: '#FFFFFF',
};

const colorMap = {
  wine: '#722F37', red: '#FF0000', black: '#000000', olive: '#808000',
  green: '#008000', cognac: '#D2691E', white: '#FFFFFF', yellow: '#FFFF00',
  gray: '#808080', rose: '#FF007F', tobacco: '#A0522D', navy: '#000080',
  beige: '#F5F5DC', blue: '#0000FF', brown: '#8B4513',
  'dark gray': '#404040', 'dark-gray': '#404040',
  'dark-wine': '#453333', 'tobacco-dark': '#6e351a',
};

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const { wishlist, toggleWishlistItem } = useContext(ShopContext);
  const { submitReview, getProductReviews, token, deleteReview, userId } = useContext(ShopContext);
  const { getSingleProduct } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [size, setSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [makeMeasure, setMakeMeasure] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [sizeStock, setSizeStock] = useState(0);
  const [hoveredThumb, setHoveredThumb] = useState(null);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  const thumbListRef = useRef(null);
  const mainImgRef = useRef(null);

  const isWishlisted = Array.isArray(wishlist)
    ? wishlist.some(item => item.productId === productId) : false;

  const fetchProductData = async () => {
    const item = await getSingleProduct(productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
      setSelectedIndex(0);
      setDisplayPrice(item.price);
      setSizeMultiplier(1);
    }
  };

  const loadReviews = async () => {
    const data = await getProductReviews(productId);
    setReviews(data);
  };

  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

  const handleSizeSelect = (sizeObj) => {
    if (!sizeObj) return;
    if (typeof sizeObj === 'string') {
      setSize(sizeObj); setSizeMultiplier(1); setSizeStock(0);
    } else if (typeof sizeObj === 'object' && sizeObj.size) {
      setSize(sizeObj.size);
      setSizeMultiplier(sizeObj.priceMultiplier || 1);
      setSizeStock(sizeObj.stock || 0);
    }
  };

  const scrollThumbs = (dir) => {
    if (!thumbListRef.current) return;

    const isMobile = window.innerWidth < 768;

    thumbListRef.current.scrollBy({
      top: isMobile ? 0 : dir * 110,
      left: isMobile ? dir * 90 : 0,
      behavior: "smooth",
    });
  };

  const handleMouseMove = (e) => {
    if (!mainImgRef.current) return;
    const rect = mainImgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  useEffect(() => { fetchProductData(); }, [productId, products]);

  useEffect(() => {
    if (productData?.color?.length) {
      const firstColor = productData.color[0];
      setSelectedColor(typeof firstColor === 'string' ? firstColor : firstColor?.name || 'Unknown');
    }
  }, [productData]);

  useEffect(() => { if (productData) setDisplayPrice(productData.price); }, [productData]);

  const handleAddToCart = () => {
    if (!size || !selectedColor) { toast.error('Please select a size and color.'); return; }
    const customPrice = displayPrice - productData.price;
    addToCart(productData._id, size, selectedColor, customPrice);
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success('Added to cart!');
      setIsButtonDisabled(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const handleReviewSubmit = async () => {
    if (!token) return toast.error('Please login first');
    if (!rating || !comment.trim()) return toast.error('Please add rating and comment');
    const success = await submitReview(productId, rating, comment);
    if (success) { setComment(''); setRating(5); loadReviews(); }
  };

  useEffect(() => { if (productId) loadReviews(); }, [productId]);

  useEffect(() => {
    if (productData?.price) setDisplayPrice(productData.price * (sizeMultiplier || 1));
  }, [sizeMultiplier, productData?.price]);

  if (!productData) return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: '100vh', background: C.bgPage, flexDirection: 'column', gap: 20
    }}>
      <div style={{
        width: 48, height: 48, position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: `1px solid ${C.goldFaint}`,
        }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: `2px solid transparent`,
          borderTopColor: C.gold,
          animation: 'spin 1s linear infinite',
        }} />
      </div>
      <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, letterSpacing: '.22em', color: C.goldFaint, textTransform: 'uppercase' }}>
        Loading
      </span>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  const avgRating = reviews.length > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
  const roundedRating = Math.round(avgRating);
  const discountedPrice = productData.discountPrice > 0
    ? displayPrice - (displayPrice * productData.discountPrice / 100) : null;
  const customBreakdown = displayPrice > productData.price
    ? `+${currency}${(displayPrice - productData.price).toFixed(2)} customization` : '';

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

    .pp { font-family:'Jost',sans-serif; background:${C.bgPage}; min-height:100vh; color:${C.goldPale}; }
    .pp-serif { font-family:'Cormorant Garamond',serif; }

    /* ── Breadcrumb ── */
    .pp-crumb {
      padding:11px 36px;
      font-size:10px; font-weight:600;
      letter-spacing:.28em; text-transform:uppercase;
      color:${C.goldDim};
      border-bottom:1px solid ${C.border};
      display:flex; align-items:center; gap:5px;
    }

    // /* Breadcrumb */
    // .pp-crumb { background:${C.bgSidebar}; border-bottom:1px solid ${C.border}; padding:10px 40px; font-size:11px; letter-spacing:.06em; color:${C.goldMuted}; }
    // .pp-crumb span { color:${C.goldLight}; font-weight:500; }
    // .pp-crumb-dot {
    //   width:3px; height:3px; border-radius:50%;
    //   background:${C.goldDim}; flex-shrink:0;
    // }
    .pp-crumb-name {
      color:${C.goldMuted}; font-weight:300;
      letter-spacing:.08em; text-transform:none;
      font-size:12px;
    }

    /* ── Thumbnail strip ── */
    .pp-thumb-col {
      display:flex; flex-direction:column; align-items:center;
      width:64px; flex-shrink:0; gap:6px;
    }
    .pp-thumb-scroll {
      display:flex; flex-direction:column; gap:6px;
      overflow-y:scroll;
      max-height:380px;
      scrollbar-width:none; -ms-overflow-style:none; width:100%;
    }
    .pp-thumb-scroll::-webkit-scrollbar { display:none; }


        @media (max-width:767px){

    .pp-arr svg{
      transform: rotate(-90deg);
    }

    }

    .pp-arr {
      width:100%; height:24px;
      background:transparent;
      border:1px solid ${C.border};
      border-radius:5px;
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; color:${C.goldFaint};
      transition:all .2s; flex-shrink:0;
    }
    .pp-arr:hover { border-color:${C.goldDim}; color:${C.gold}; }

    .pp-thumb-item {
      width:100%; aspect-ratio:1/1;
      border-radius:6px; overflow:hidden; cursor:pointer;
      border:1px solid ${C.border};
      background:${C.bgCard};
      flex-shrink:0; transition:all .3s;
      opacity:0.85; filter:brightness(0.65) saturate(0.8);
      position:relative;
    }
    .pp-thumb-item::after {
      content:''; position:absolute; inset:0;
      background:${C.bgPage}; opacity:0.25;
      transition:opacity .3s;
    }
    .pp-thumb-item:hover { opacity:0.7; filter:brightness(0.85) saturate(1); }
    .pp-thumb-item:hover::after { opacity:0.1; }
    .pp-thumb-item.active {
      opacity:1; filter:brightness(1) saturate(1);
      border-color:${C.gold};
    }
    .pp-thumb-item.active::after { opacity:0; }
    .pp-thumb-item img { width:100%; height:100%; object-fit:cover; display:block; }

    /* ── Main image ── */
    .pp-main-wrap {
      flex:1; position:relative;
      border-radius:10px; overflow:hidden;
      background:#FDFAF4;
      border:1px solid ${C.border};
      cursor:crosshair;
    }
    .pp-main-wrap img {
      width:100%; height:100%;
      object-fit:contain; display:block;
      transition:transform .1s ease;
    }
    .pp-main-wrap.zooming img {
      transform:scale(2.2);
      transform-origin:var(--zx,50%) var(--zy,50%);
    }

    /* Corner ornament */
    .pp-corner {
      position:absolute; width:24px; height:24px;
      pointer-events:none;
    }
    .pp-corner-tl { top:14px; left:14px; border-top:1px solid ${C.goldDim}; border-left:1px solid ${C.goldDim}; }
    .pp-corner-tr { top:14px; right:14px; border-top:1px solid ${C.goldDim}; border-right:1px solid ${C.goldDim}; }
    .pp-corner-bl { bottom:14px; left:14px; border-bottom:1px solid ${C.goldDim}; border-left:1px solid ${C.goldDim}; }
    .pp-corner-br { bottom:14px; right:14px; border-bottom:1px solid ${C.goldDim}; border-right:1px solid ${C.goldDim}; }

    .pp-img-wish {
      position:absolute; top:14px; right:14px;
      width:36px; height:36px; border-radius:50%;
      background:rgba(8,6,4,0.75);
      border:1px solid ${C.borderBright};
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; transition:all .25s; z-index:10;
      backdrop-filter:blur(8px);
    }
    .pp-img-wish:hover { border-color:${C.gold}; background:rgba(201,150,26,0.15); }
    .pp-img-wish.active { border-color:${C.gold}; background:rgba(201,150,26,0.12); }

    .pp-counter {
      position:absolute; bottom:14px; left:50%; transform:translateX(-50%);
      background:rgba(8,6,4,0.8);
      border:1px solid ${C.border};
      border-radius:99px; padding:5px 16px;
      font-size:10px; font-weight:600; color:${C.goldMuted};
      backdrop-filter:blur(8px); letter-spacing:.14em;
      display:flex; align-items:center; gap:8px;
    }
    .pp-counter-dot { width:4px; height:4px; border-radius:50%; background:${C.goldDim}; }

    /* ── Badges ── */
    .pp-badge-gold {
      background:linear-gradient(135deg,${C.goldDim},${C.gold},${C.goldDim});
      background-size:200% 200%; animation:shimmer 4s ease infinite;
      color:${C.bgPage}; border-radius:4px; padding:4px 12px;
      font-size:9px; font-weight:800; letter-spacing:.22em;
      display:inline-flex; align-items:center; gap:5px; text-transform:uppercase;
    }
    .pp-badge-sale {
      background:linear-gradient(135deg,#5A2800,#A04800);
      background-size:200% 200%; animation:shimmer 4s ease infinite;
      color:#FFD48A; border-radius:4px; padding:4px 12px;
      font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase;
    }
    @keyframes shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

    /* ── Divider line with ornament ── */
    .pp-divider {
      display:flex; align-items:center; gap:14px; margin:22px 0;
    }
    .pp-divider-line { flex:1; height:1px; background:${C.border}; }
    .pp-divider-diamond {
      width:5px; height:5px; background:${C.goldDim};
      transform:rotate(45deg); flex-shrink:0;
    }

    /* ── Price box ── */
    .pp-pricebox {
      padding:14px 0 14px; margin-bottom:14px;
      border-bottom:1px solid ${C.border};
    }

    /* ── Colour dots ── */
    .pp-clr {
      border-radius:50%; cursor:pointer; transition:all .25s;
      border:2px solid transparent; flex-shrink:0;
      width:24px; height:24px; position:relative;
    }
    .pp-clr::after {
      content:''; position:absolute; inset:-4px;
      border-radius:50%; border:1px solid transparent;
      transition:border-color .25s;
    }
    .pp-clr:hover { transform:scale(1.1); }
    .pp-clr.active::after { border-color:${C.gold}; }
    // .pp-clr.active { box-shadow:0 0 0 2px ${C.bgPage} inset; }

    /* ── Size pills ── */
    .pp-size {
      border:1px solid ${C.border}; border-radius:7px;
      background:${C.bgCard};
      display:flex; flex-direction:column; align-items:center;
      padding:8px 14px; min-width:52px;
      cursor:pointer; transition:all .2s; position:relative; overflow:hidden;
    }
    .pp-size::before {
      content:''; position:absolute; top:0; left:0; right:0; height:1px;
      background:linear-gradient(90deg,transparent,${C.border},transparent);
      transition:background .2s;
    }
    .pp-size:hover { border-color:${C.goldDim}; background:${C.bgCardHover}; }
    .pp-size:hover::before { background:linear-gradient(90deg,transparent,${C.goldDim},transparent); }
    .pp-size.active {
      border-color:${C.gold};
      background:linear-gradient(160deg,${C.bgCardHover},#1F1609);
      box-shadow:0 0 18px ${C.gold}18;
    }
    .pp-size.active::before { background:linear-gradient(90deg,transparent,${C.gold},transparent); }
    .pp-size-lbl   { font-weight:600; font-size:12px; color:${C.goldPale}; }
    .pp-size-price { font-size:10px; color:#7A6A52; font-weight:400; margin-top:2px; }
    .pp-size.active .pp-size-lbl   { color:${C.gold}; }
    .pp-size.active .pp-size-price { color:#9A8060; }

    /* ── MTM ── */
    .pp-mtm {
      width:100%; border:1px solid ${C.border};
      border-radius:8px; padding:11px 16px;
      background:${C.bgCard}; cursor:pointer;
      display:flex; align-items:center; justify-content:space-between;
      font-size:10px; font-weight:700;
      letter-spacing:.2em; font-family:'Jost',sans-serif;
      transition:all .25s; text-transform:uppercase;
      color:${C.goldMuted};
    }
    .pp-mtm:hover, .pp-mtm.active {
      border-color:${C.goldDim}; color:${C.goldLight};
      background:${C.bgCardHover};
    }

    /* ── ADD TO CART ── */
    .pp-cart {
      width:100%; color:${C.bgPage}; font-weight:700; font-size:11px;
      letter-spacing:.22em; border:none; border-radius:8px; padding:15px;
      cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px;
      background:linear-gradient(110deg,${C.goldDim} 0%,${C.gold} 40%,${C.goldLight} 60%,${C.gold} 100%);
      background-size:200% 200%; background-position:0% 50%;
      transition:all .4s ease; position:relative; overflow:hidden;
      font-family:'Jost',sans-serif; text-transform:uppercase;
    }
    .pp-cart::before {
      content:''; position:absolute; top:-50%; left:-60%; width:30%; height:200%;
      background:rgba(255,255,255,.12); transform:skewX(-20deg);
      transition:left .6s ease;
    }
    .pp-cart:hover::before { left:120%; }
    .pp-cart:hover { background-position:100% 50%; box-shadow:0 8px 32px ${C.gold}35; transform:translateY(-1px); }
    .pp-cart:active { transform:translateY(0); }
    .pp-cart:disabled {
      background:${C.bgCard}; color:${C.goldFaint};
      border:1px solid ${C.border}; box-shadow:none; transform:none; cursor:not-allowed;
    }

    /* ── Wishlist ── */
    .pp-wish {
      width:100%; border:1px solid ${C.border}; border-radius:10px; padding:14px;
      background:transparent; cursor:pointer;
      display:flex; align-items:center; justify-content:center; gap:8px;
      font-size:10px; font-weight:700; letter-spacing:.2em; text-transform:uppercase;
      transition:all .25s; color:${C.goldMuted}; font-family:'Jost',sans-serif;
    }
    .pp-wish:hover { border-color:${C.goldDim}; color:${C.goldLight}; }
    .pp-wish.wishlisted { color:${C.gold}; border-color:${C.gold}; }

    /* ── Tabs ── */
    .pp-tab-wrap {
      display:flex; gap:0; border-bottom:1px solid ${C.border};
      margin-bottom:40px; overflow-x:auto;
    }
    .pp-tab {
      padding:14px 28px; font-size:10px; font-weight:700; letter-spacing:.22em;
      text-transform:uppercase; background:none; border:none; border-bottom:2px solid transparent;
      cursor:pointer; color:${C.goldFaint}; position:relative; transition:all .25s;
      font-family:'Jost',sans-serif; white-space:nowrap; margin-bottom:-1px;
    }
    .pp-tab:hover { color:${C.goldMuted}; }
    .pp-tab.active { color:${C.gold}; border-bottom-color:${C.gold}; }

    /* ── Trust ── */
    .pp-trust {
      display:flex; align-items:flex-start; gap:14px;
      padding:16px 18px; border-radius:10px;
      background:${C.bgCard}; border:1px solid ${C.border};
      transition:all .2s;
    }
    .pp-trust:hover { border-color:${C.borderBright}; }
    .pp-trust-icon {
      width:32px; height:32px; border-radius:8px;
      background:linear-gradient(135deg,${C.bgCardHover},${C.bgCard});
      border:1px solid ${C.borderBright};
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
    }

    /* ── Reviews ── */
    .pp-rev-card {
      background:${C.bgCard}; border:1px solid ${C.border};
      border-radius:12px; padding:22px; margin-bottom:12px;
      transition:border-color .2s;
    }
    .pp-rev-card:hover { border-color:${C.borderBright}; }
    .pp-rinput {
      width:100%; border:1px solid ${C.border}; border-radius:10px;
      padding:14px 16px; font-size:13px; color:${C.goldPale};
      resize:vertical; font-family:'Jost',sans-serif;
      background:${C.bgInput}; outline:none;
      transition:border-color .25s, box-shadow .25s; line-height:1.7;
    }
    .pp-rinput:focus { border-color:${C.goldDim}; box-shadow:0 0 0 3px ${C.gold}18; }
    .pp-rinput::placeholder { color:${C.goldFaint}; }

    .pp-avatar {
      width:38px; height:38px; border-radius:50%;
      background:linear-gradient(135deg,${C.goldDim},${C.goldLight});
      color:${C.bgPage}; display:flex; align-items:center; justify-content:center;
      font-weight:700; font-size:14px; flex-shrink:0;
      box-shadow:0 0 0 2px ${C.border};
    }

    .pp-slabel {
      font-size:10px; font-weight:700; letter-spacing:.22em;
      text-transform:uppercase; color:#9A8060;
    }

    .pp-bar-track { flex:1; height:4px; background:${C.border}; border-radius:99px; overflow:hidden; }
    .pp-bar-fill  { height:100%; background:linear-gradient(90deg,${C.goldDim},${C.gold}); border-radius:99px; transition:width .7s ease; }

    .pp-rsum {
      background:${C.bgCard}; border:1px solid ${C.border};
      border-radius:14px; padding:26px; margin-bottom:24px;
      position:relative; overflow:hidden;
    }
    .pp-rsum::before {
      content:''; position:absolute; top:0; left:0; right:0; height:1px;
      background:linear-gradient(90deg,transparent,${C.gold}60,transparent);
    }

    .pp-submit-btn {
      margin-top:14px;
      background:linear-gradient(110deg,${C.goldDim},${C.gold});
      color:${C.bgPage}; border-radius:8px; padding:12px 28px;
      font-size:10px; font-weight:800; letter-spacing:.2em;
      border:none; cursor:pointer; font-family:'Jost',sans-serif;
      transition:all .25s; text-transform:uppercase;
    }
    .pp-submit-btn:hover { box-shadow:0 4px 20px ${C.gold}40; transform:translateY(-1px); }

    .pp-policy {
      display:flex; align-items:center; gap:14px;
      padding:10px 0; border-bottom:1px solid ${C.border};
      font-size:12px; color:#9A8060; letter-spacing:.02em;
    }
    .pp-policy:last-child { border-bottom:none; }
    .pp-policy-icon {
      width:28px; height:28px; border-radius:7px;
      background:${C.bgCard}; border:1px solid ${C.border};
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
    }

    /* ── Scroll ── */
    .pp *::-webkit-scrollbar { width:3px; height:3px; }
    .pp *::-webkit-scrollbar-thumb { background:${C.border}; border-radius:99px; }

    /* ── Keyframes ── */
    @keyframes fadeUp {
      from { opacity:0; transform:translateY(16px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .pp-fadein { animation:fadeUp .45s ease both; }
    .pp-fadein-2 { animation:fadeUp .45s .1s ease both; }
    .pp-fadein-3 { animation:fadeUp .45s .2s ease both; }

    /* ── Gallery sticky: desktop only ── */
    .pp-gallery-col {
      display:flex; gap:12px;
      flex:0 0 auto;
      width:min(480px,100%);
      align-self:flex-start;
    }
    @media (min-width:768px) {
      .pp-gallery-col {
        position:sticky;
        top:88px;
      }
    }

    /* ── Mobile layout ── */
    @media (max-width:767px) {
      .pp-crumb { padding:10px 16px; font-size:9px; flex-wrap:wrap; gap:6px; }
      .pp-crumb-name { display:none; }

      .pp-page-inner { padding:16px 16px 60px !important; }

      .pp-two-col { flex-direction:column !important; gap:0 !important; }

      .pp-gallery-col {
        width:100% !important;
        position:static !important;
        margin-bottom:20px;
      }

      @media (max-width:767px) {

  /* gallery vertical se column ho jayegi */
  .pp-gallery-col{
    flex-direction:column !important;
    gap:10px !important;
  }

  /* thumbnail strip bottom me */
  .pp-thumb-col{
    order:2;
    width:100%;
    flex-direction:row;
    align-items:center;
  }

  .pp-thumb-scroll{
    flex-direction:row !important;
    overflow-x:auto !important;
    overflow-y:hidden !important;
    max-height:none !important;
    gap:8px;
    width:100%;
  }

  .pp-thumb-item{
    width:50px !important;
    height:50px !important;
    flex-shrink:0;
  }

  @media (max-width:767px){

  .pp-gallery-col{
    flex-direction:column;
    gap:10px;
  }

  .pp-thumb-col{
    order:2;
    width:100%;
    flex-direction:row;
    align-items:center;
    gap:6px;
  }

  .pp-thumb-scroll{
    flex-direction:row;
    overflow-x:auto;
    overflow-y:hidden;
    max-height:none;
    gap:8px;
    width:100%;
  }

  .pp-thumb-item{
    width:70px;
    height:70px;
    flex-shrink:0;
  }

  /* SHOW scroll arrows */
  .pp-arr{
    display:flex;
    width:20px;
    height:40px;
  }

}

}
      
      .pp-main-wrap { border-radius:8px !important; }

      /* Info panel: full width, proper padding */
      .pp-info-panel {
        width:100% !important;
        min-width:0 !important;
        padding:0 !important;
      }

      .pp-pricebox { padding:12px 0 !important; }

      .pp-trust { padding:10px 12px !important; }
      .pp-trust-grid { grid-template-columns:1fr !important; gap:8px !important; }

      .pp-size { padding:7px 10px !important; min-width:46px !important; }
      .pp-size-lbl { font-size:12px !important; }

      .pp-cart { padding:14px !important; }
      .pp-wish { padding:12px !important; }

      .pp-tab { padding:10px 16px !important; font-size:9px !important; }
      .pp-rsum { padding:16px !important; }
    }

    /* ── Tablet ── */
    @media (min-width:768px) and (max-width:1024px) {
      .pp-gallery-col { width:min(380px,48%) !important; }
      .pp-page-inner { padding:24px 24px 80px !important; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="pp">

        {/* ── Breadcrumb ── */}
        <div className="pp-crumb">
          <span>{productData.category?.toUpperCase()}&nbsp;  /</span>
          <div className="pp-crumb-dot" />
          <span>{productData.subCategory?.toUpperCase() || 'PRODUCT'}&nbsp;-</span>
          <div className="pp-crumb-dot" />
          <span className="pp-crumb-name">{productData.name?.substring(0, 55)}{productData.name?.length > 55 ? '…' : ''}</span>
        </div>

        {/* <div className="pp-crumb">
          Home &nbsp;›&nbsp; Collection &nbsp;›&nbsp;
          <span>{productData.name}</span>
        </div> */}

        <div className="pp-page-inner" style={{ padding: '28px 36px 80px', maxWidth: 1440, margin: '0 auto' }}>
          <div className="pp-two-col" style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* ════ LEFT: Gallery ════ */}
            <div className="pp-gallery-col">
              {/* Thumb strip */}
              <div className="pp-thumb-col">
                <button className="pp-arr" onClick={() => scrollThumbs(-1)}>
                  <FaChevronUp size={9} />
                </button>
                <div className="pp-thumb-scroll" ref={thumbListRef}>
                  {productData.image.map((item, index) => (
                    <div
                      key={index}
                      className={`pp-thumb-item${index === selectedIndex ? ' active' : ''}`}
                      onClick={() => { setImage(item); setSelectedIndex(index); }}
                      onMouseEnter={() => setHoveredThumb(index)}
                      onMouseLeave={() => setHoveredThumb(null)}
                    >
                      <img src={item} alt={`View ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="pp-arr" onClick={() => scrollThumbs(1)}>
                  <FaChevronDown size={9} />
                </button>
              </div>

              {/* Main image */}
              <div
                className={`pp-main-wrap${isZooming ? ' zooming' : ''}  contain p-4`}
                style={{
                  aspectRatio: '1/1', flex: 1,
                  '--zx': `${zoomPos.x}%`, '--zy': `${zoomPos.y}%`,
                }}
                ref={mainImgRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
              >
                <img src={image} alt={productData.name} />

                {/* Corner ornaments */}
                <div className="pp-corner pp-corner-tl" />
                <div className="pp-corner pp-corner-tr" />
                <div className="pp-corner pp-corner-bl" />
                <div className="pp-corner pp-corner-br" />

                {/* Wishlist */}
                <button
                  className={`pp-img-wish${isWishlisted ? ' active' : ''}`}
                  onClick={() => toggleWishlistItem(productId)}
                  title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  {isWishlisted
                    ? <FaHeart size={14} style={{ color: C.gold }} />
                    : <FaRegHeart size={14} style={{ color: C.goldMuted }} />}
                </button>

                {/* Counter */}
                <div className="pp-counter">
                  <span style={{ color: C.gold, fontWeight: 700 }}>{String(selectedIndex + 1).padStart(2, '0')}</span>
                  <div className="pp-counter-dot" />
                  <span>{String(productData.image.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* ════ RIGHT: Info Panel ════ */}
            <div className="pp-info-panel pp-fadein" style={{ flex: '1 1 300px', minWidth: 0, paddingRight: 8 }}>

              {/* Category */}
              <p style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '.28em',
                color: C.goldDim, marginBottom: 10, textTransform: 'uppercase',
              }}>
                {productData.category} &nbsp;/&nbsp; {productData.subCategory}
              </p>

              {/* Badges */}
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 12 }}>
                <span className="pp-badge-gold"><FaCrown size={8} />&nbsp;Premium Collection</span>
                {productData.discountPrice > 0 && (
                  <span className="pp-badge-sale">{productData.discountPrice}% Off</span>
                )}
              </div>

              {/* Title */}
              <h1 className="pp-serif" style={{
                fontSize: 'clamp(15px,1.5vw,20px)', fontWeight: 400, color: C.goldPale,
                lineHeight: 1.4, marginBottom: 8, letterSpacing: '.01em', maxWidth: '90%',
              }}>
                {productData.name}
              </h1>

              {/* Stars row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 0 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < roundedRating ? C.gold : C.goldFaint, fontSize: 13 }}>
                      {i < roundedRating ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: 11, color: '#7A6A52', letterSpacing: '.04em' }}>
                  {avgRating > 0 ? avgRating.toFixed(1) : '—'}&ensp;·&ensp;{reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
                </span>
              </div>

              {/* Divider */}
              <div className="pp-divider" style={{ margin: '14px 0' }}>
                <div className="pp-divider-line" />
                <div className="pp-divider-diamond" />
                <div className="pp-divider-line" />
              </div>

              {/* Price */}
              <div className="pp-pricebox">
                {discountedPrice ? (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
                    <span className="pp-serif" style={{ fontSize: 36, fontWeight: 500, color: C.gold, lineHeight: 1 }}>
                      {currency}{discountedPrice.toFixed(2)}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 3 }}>
                      <span style={{ fontSize: 15, color: C.goldFaint, textDecoration: 'line-through', lineHeight: 1 }}>
                        {currency}{displayPrice.toFixed(2)}
                      </span>
                      <span style={{
                        background: `linear-gradient(110deg,#5A2800,#A04800)`,
                        color: '#FFD48A', borderRadius: 4, padding: '2px 8px',
                        fontSize: 9, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase',
                      }}>
                        Save {currency}{(displayPrice - discountedPrice).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
                    <span className="pp-serif" style={{ fontSize: 36, fontWeight: 500, color: C.gold, lineHeight: 1 }}>
                      {currency}{displayPrice.toFixed(2)}
                    </span>
                    {customBreakdown && (
                      <span style={{ fontSize: 11, color: C.goldFaint, paddingBottom: 4 }}>{customBreakdown}</span>
                    )}
                  </div>
                )}
                <p style={{ fontSize: 11, color: '#7A6A52', marginTop: 8, letterSpacing: '.04em' }}>
                  All taxes included &ensp;·&ensp; Free shipping above {currency}1000
                </p>
              </div>

              {/* Description */}
              <p style={{ color: '#9A8468', lineHeight: 1.8, fontSize: 13, marginBottom: 0, letterSpacing: '.02em', maxWidth: '90%' }}>
                {productData.description}
              </p>

              <div className="pp-divider" style={{ margin: '16px 0' }}>
                <div className="pp-divider-line" />
                <div className="pp-divider-diamond" />
                <div className="pp-divider-line" />
              </div>

              {/* ── Colour ── */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span className="pp-slabel">Colour</span>
                  <span style={{ fontSize: 11, color: C.goldPale, fontWeight: 500, textTransform: 'capitalize', letterSpacing: '.04em' }}>
                    — {selectedColor}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {productData.color?.map((colorObj, index) => {
                    let colorName, colorHex;
                    if (typeof colorObj === 'string') {
                      colorName = colorObj;
                      colorHex = colorMap[colorObj.toLowerCase()] || '#888';
                    } else if (colorObj?.name) {
                      colorName = colorObj.name; colorHex = colorObj.hex || '#888';
                    } else { colorName = 'Unknown'; colorHex = '#888'; }
                    return (
                      <button
                        key={index}
                        className={`pp-clr${selectedColor === colorName ? ' active' : ''}`}
                        onClick={() => setSelectedColor(colorName)}
                        style={{
                          background: colorHex,
                          outline: colorHex === '#FFFFFF' ? `1px solid ${C.border}` : 'none',
                        }}
                        title={colorName}
                      />
                    );
                  })}
                </div>
              </div>

              {/* ── Size ── */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span className="pp-slabel">Select Size</span>
                  <button
                    onClick={() => setShowModal(true)}
                    style={{
                      fontSize: 10, color: C.gold, fontWeight: 700,
                      letterSpacing: '.1em', textTransform: 'uppercase',
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'Jost,sans-serif', display: 'flex', alignItems: 'center', gap: 5,
                    }}
                  >
                    <FaRuler size={10} /> Size Guide
                  </button>
                  {showModal && <Modal onclose={() => setShowModal(false)} />}
                </div>
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  {productData.sizes?.length > 0 ? productData.sizes.map((sizeObj, index) => {
                    const sizeLabel = typeof sizeObj === 'object' ? (sizeObj?.size ?? `Size ${index + 1}`) : String(sizeObj);
                    const multiplier = sizeObj?.priceMultiplier || 1;
                    const sizePrice = (productData.price * multiplier).toFixed(2);
                    const isSelected = size === sizeLabel;
                    return (
                      <button key={index} type="button"
                        className={`pp-size${isSelected ? ' active' : ''}`}
                        onClick={() => handleSizeSelect(sizeObj)}
                      >
                        <span className="pp-size-lbl">{sizeLabel}</span>
                        <span className="pp-size-price">{currency}{sizePrice}</span>
                      </button>
                    );
                  }) : <p style={{ fontSize: 13, color: C.goldMuted }}>No sizes available</p>}
                </div>
                {size && sizeStock > 0 && sizeStock < 5 && (
                  <div style={{
                    marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)',
                    borderRadius: 6, padding: '5px 10px',
                  }}>
                    <span style={{ fontSize: 10 }}>🔥</span>
                    <span style={{ fontSize: 11, color: '#F97316', fontWeight: 600, letterSpacing: '.04em' }}>
                      Only {sizeStock} left in this size
                    </span>
                  </div>
                )}
              </div>

              {/* ── Made to Measure ── */}
              <div style={{ marginBottom: 8 }}>
                <button
                  className={`pp-mtm${makeMeasure ? ' active' : ''}`}
                  onClick={() => setMakeMeasure(!makeMeasure)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <HiSparkles size={13} style={{ color: C.gold }} />
                    <span>Made to Measure</span>
                  </div>
                  <FaChevronDown size={10} style={{ transform: makeMeasure ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: C.goldDim }} />
                </button>
                {makeMeasure && (
                  <div style={{
                    marginTop: 6, padding: '12px 16px', borderRadius: 8,
                    background: C.bgCard, border: `1px solid ${C.border}`,
                    display: 'flex', alignItems: 'center', gap: 10,
                    animation: 'fadeUp .2s ease both',
                  }}>
                    <FaInfoCircle style={{ color: C.gold, flexShrink: 0 }} size={12} />
                    <p style={{ fontSize: 12, color: C.goldMuted, lineHeight: 1.6 }}>
                      Custom measurements can be added on the Cart page.
                    </p>
                  </div>
                )}
              </div>

              {/* ── CTA Buttons ── */}
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button
                  className="pp-cart"
                  onClick={() => { handleAddToCart(); toggleCartDrawer(); }}
                  disabled={isButtonDisabled || !size || !selectedColor}
                >
                  <BsBagCheck size={16} />
                  {isButtonDisabled ? 'Adding to Cart…' : 'Add to Cart'}
                </button>

                {/* <button
                  className={`pp-wish${isWishlisted ? ' wishlisted' : ''}`}
                  onClick={() => toggleWishlistItem(productId)}
                >
                  {isWishlisted
                    ? <FaHeart size={13} style={{ color: C.gold }} />
                    : <FaRegHeart size={13} />}
                  {isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
                </button> */}
              </div>

              {/* <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} /> */}
              <JacketLiningSelector basePrice={productData.price} onPriceChange={p => setDisplayPrice(p)} />

              {/* ── Trust Cards ── */}
              {/* <div className="pp-trust-grid" style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {[
                  { icon: <BsShieldCheck size={13} style={{ color: C.gold }} />, title: '100% Original', sub: 'Premium materials' },
                  { icon: <MdLocalShipping size={13} style={{ color: C.gold }} />, title: 'Secure Payment', sub: 'COD + multiple options' },
                  { icon: <MdLoop size={13} style={{ color: C.gold }} />, title: '7-Day Returns', sub: 'Simple exchange policy' },
                ].map((t, i) => (
                  <div key={i} className="pp-trust" style={{ flexDirection: 'column', gap: 10 }}>
                    <div className="pp-trust-icon">{t.icon}</div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 600, color: C.goldPale, marginBottom: 2, letterSpacing: '.02em' }}>{t.title}</p>
                      <p style={{ fontSize: 10, color: C.goldFaint }}>{t.sub}</p>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="pp-hr p-2" />
              {[
                { icon: <BsShieldCheck size={14} style={{ color: C.gold }} />, text: '100% original, premium materials' },
                { icon: <MdLocalShipping size={14} style={{ color: C.gold }} />, text: 'Secure cash on delivery + multiple payment methods' },
                { icon: <MdLoop size={14} style={{ color: C.gold }} />, text: 'Simple 7-day return or exchange policy' },
              ].map((p, i) => (
                <div key={i} className="pp-policy">
                  <div className="pp-policy-icon">{p.icon}</div>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ══════ Tabs ══════ */}
          <div style={{ marginTop: 80 }}>
            <div className="pp-tab-wrap">
              {['description', 'reviews'].map(tab => (
                <button
                  key={tab}
                  className={`pp-tab${activeTab === tab ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'reviews' ? `Reviews (${reviews.length})` : 'Description'}
                </button>
              ))}
            </div>

            {/* Description */}
            {activeTab === 'description' && (
              <div
                style={{ color: C.goldMuted, lineHeight: 2, fontSize: 14, maxWidth: 860, letterSpacing: '.02em' }}
                dangerouslySetInnerHTML={{ __html: productData.detailedDescription }}
              />
            )}

            {/* Reviews */}
            {activeTab === 'reviews' && (
              <div style={{ maxWidth: 700 }}>
                {reviews.length > 0 && (
                  <div className="pp-rsum" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', flexShrink: 0 }}>
                      <div className="pp-serif" style={{ fontSize: 64, fontWeight: 300, color: C.gold, lineHeight: 1 }}>
                        {avgRating.toFixed(1)}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: 3, margin: '6px 0' }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < roundedRating ? C.gold : C.goldFaint, fontSize: 12 }}>
                            {i < roundedRating ? <FaStar /> : <FaRegStar />}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: 10, color: C.goldFaint, letterSpacing: '.1em' }}>{reviews.length} Reviews</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      {[5, 4, 3, 2, 1].map(star => {
                        const count = reviews.filter(r => Math.round(r.rating) === star).length;
                        const pct = reviews.length ? (count / reviews.length) * 100 : 0;
                        return (
                          <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <span style={{ fontSize: 10, color: C.goldFaint, width: 8, textAlign: 'right' }}>{star}</span>
                            <FaStar size={8} style={{ color: C.gold, flexShrink: 0 }} />
                            <div className="pp-bar-track"><div className="pp-bar-fill" style={{ width: `${pct}%` }} /></div>
                            <span style={{ fontSize: 10, color: C.goldFaint, width: 18, textAlign: 'right' }}>{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Write Review */}
                {token ? (
                  <div style={{
                    marginBottom: 24, padding: 28, borderRadius: 14,
                    border: `1px solid ${C.border}`, background: C.bgCard,
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                      background: `linear-gradient(90deg,transparent,${C.goldDim},transparent)`,
                    }} />
                    <h3 className="pp-serif" style={{ fontSize: 26, fontWeight: 400, color: C.goldPale, marginBottom: 18, letterSpacing: '.01em' }}>
                      Write a Review
                    </h3>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
                      {[1, 2, 3, 4, 5].map(s => (
                        <span key={s} onClick={() => setRating(s)}
                          style={{
                            fontSize: 28, cursor: 'pointer',
                            color: s <= rating ? C.gold : C.goldFaint,
                            transition: 'transform .15s, color .15s',
                            display: 'inline-block',
                          }}
                          onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.25)'; }}
                          onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                        >
                          {s <= rating ? <FaStar /> : <FaRegStar />}
                        </span>
                      ))}
                    </div>
                    <textarea
                      className="pp-rinput"
                      placeholder="Share your experience with this product…"
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      rows={4}
                    />
                    <button className="pp-submit-btn" onClick={handleReviewSubmit}>
                      Submit Review
                    </button>
                  </div>
                ) : (
                  <div style={{
                    padding: 20, borderRadius: 12,
                    background: C.bgCard, border: `1px dashed ${C.border}`,
                    textAlign: 'center', marginBottom: 20,
                    color: C.goldMuted, fontSize: 13,
                  }}>
                    Please&nbsp;
                    <span style={{ color: C.gold, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      sign in
                    </span>
                    &nbsp;to write a review.
                  </div>
                )}

                {reviews.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div className="pp-serif" style={{ fontSize: 20, color: C.goldFaint, marginBottom: 8 }}>
                      No reviews yet
                    </div>
                    <p style={{ fontSize: 12, color: C.goldFaint, letterSpacing: '.06em' }}>Be the first to share your experience</p>
                  </div>
                ) : reviews.map(rev => (
                  <div key={rev._id} className="pp-rev-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div className="pp-avatar">{(rev.user?.name || 'U')[0].toUpperCase()}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ fontWeight: 600, fontSize: 13, color: C.goldPale }}>{rev.user?.name || 'Customer'}</span>
                            <MdVerified size={12} style={{ color: '#4ADE80' }} />
                          </div>
                          <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: i < rev.rating ? C.gold : C.goldFaint, fontSize: 10 }}>
                                {i < rev.rating ? <FaStar /> : <FaRegStar />}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                        <span style={{ fontSize: 10, color: C.goldFaint, letterSpacing: '.04em' }}>
                          {new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        {rev.user?._id === userId && (
                          <button
                            onClick={async () => { const ok = await deleteReview(rev._id); if (ok) loadReviews(); }}
                            style={{ fontSize: 10, color: '#F87171', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '.06em', textTransform: 'uppercase' }}
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: C.goldMuted, lineHeight: 1.8, marginTop: 14 }}>{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ══════ Related ══════ */}
          <div style={{ marginTop: 100 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${C.border})` }} />
              {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 20, height: 1, background: C.goldDim }} />
                  <div style={{ width: 4, height: 4, background: C.gold, transform: 'rotate(45deg)' }} />
                  <div style={{ width: 20, height: 1, background: C.goldDim }} />
                </div>
                <h2 className="pp-serif" style={{ fontSize: 32, fontWeight: 400, color: C.goldPale, letterSpacing: '.02em', whiteSpace: 'nowrap' }}>
                  You May Also Like
                </h2>
              </div> */}
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${C.border},transparent)` }} />
            </div>
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
