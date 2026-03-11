
// import { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';
// import { RiDeleteBin3Fill, RiDeleteBin3Line } from 'react-icons/ri'
// import { ImBin } from "react-icons/im";
// import { RiAddLine, RiSubtractLine } from 'react-icons/ri'

// const CartContent = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0 && Object.keys(cartItems).length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             tempData.push({
//               _id: items,
//               size: item,
//               quantity: cartItems[items][item],
//             });
//           }
//         }
//       }
//       setCartData(tempData);
//     } else {
//       setCartData([]); // Reset if products or cart are empty
//     }
//   }, [cartItems, products]);

//   const isCartEmpty = cartData.length === 0;
//   return (
//     <div >
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       {/* 🛒 Empty Cart Message */}
//       {isCartEmpty ? (
//         <div className="text-center py-20 text-gray-500">
//           <p>Your cart is empty.</p>
//           <button
//             onClick={() => navigate('/collection')}
//             className="mt-6 px-6 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-all"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           {/*  Cart Items */}
//           <div>
//             {cartData.map((item, index) => {
//               const productData = products.find((product) => product._id === item._id);

//               //  Handle missing or deleted products safely
//               if (!productData) {
//                 // console.warn(`Product not found for id: ${item._id}`);
//                 return null;
//               }


//               // 🧠 Safely extract image (Cloudinary or array fallback)
//               const imageSrc = Array.isArray(productData.image)
//                 ? productData.image[0]
//                 : productData.image || assets.placeholder_image;

//               return (
//                 <div
//                   key={index}
//                   className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr]
//                   sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//                 >
//                   <div className="flex items-start gap-6">
//                     <img
//                       className="w-16 sm:w-20 object-cover rounded"
//                       src={imageSrc}
//                       alt={productData.name || "Product"}
//                       onError={(e) => { e.target.src = assets.placeholder_image; }}
//                     />
//                     <div>
//                       <p className="text-xs sm:text-s">{productData.name}</p>
//                       <div className="flex items-center gap-5 mt-2">
//                         <p>{currency}{productData.price}</p>
//                         <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
//                         {/* <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.color}</p> */}
//                       </div>
//                     </div>
//                   </div>

//                   {/* <input
//                     onChange={(e) =>
//                       e.target.value === '' || e.target.value === '0'
//                         ? null
//                         : updateQuantity(item._id, item.size, Number(e.target.value))
//                     }
//                     className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                     type="number"
//                     min={1}
//                     defaultValue={item.quantity}
//                   /> */}
//                   {/* 🎯 Professional Quantity Updater */}
//                   <div className="flex items-center justify-center space-x-1">
//                     {/* Subtract Button */}
//                     <button
//                       type="button"
//                       onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
//                       disabled={item.quantity <= 1}
//                       aria-label="Decrease quantity"
//                       className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-l-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all duration-150 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
//                     >
//                       <RiSubtractLine className="w-4 h-4" />
//                     </button>

//                     {/* Quantity Input */}
//                     <input
//                       type="number"
//                       min="1"
//                       max="99"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         e.target.value === '' || e.target.value === '0'
//                           ? null
//                           : updateQuantity(item._id, item.size, Number(e.target.value))
//                       }
//                       className="w-16 h-8 border-t border-b border-gray-300 bg-white text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                     />

//                     {/* Add Button */}
//                     <button
//                       type="button"
//                       onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
//                       aria-label="Increase quantity"
//                       className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-r-md bg-white text-gray-500 hover:bg-gray-50 transition-all duration-150 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
//                     >
//                       <RiAddLine className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <button onClick={() => updateQuantity(item._id, item.size, 0)}>
//                     <ImBin className='h-6 w-6 mt-2 text-red-600 cursor-pointer' />
//                   </button>

//                   {/* <img
//                     onClick={() => updateQuantity(item._id, item.size, 0)}
//                     className="w-4 mr-4 sm:w-5 cursor-pointer "
//                     src={assets.bin_icon}
//                     alt="Delete"
//                   /> */}
//                 </div>
//               );
//             })}
//           </div>

//           {/* 💰 Cart Totals */}
//           <div className="flex justify-end my-20">
//             <div className="w-full sm:w-[450px]">
//               <CartTotal />

//               {/* <div className="w-full text-end">
//                 <button
//                   onClick={() => navigate('/place-order')}
//                   disabled={isCartEmpty}
//                   className={`text-sm my-8 px-8 py-3 rounded-md font-semibold transition-all
//                     ${isCartEmpty
//                       ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                       : 'bg-black text-white hover:bg-gray-900'
//                     }`}
//                 >
//                   PROCEED TO CHECKOUT
//                 </button>
//               </div> */}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CartContent




// import { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';
// import { RiDeleteBin3Fill, RiDeleteBin3Line } from 'react-icons/ri'
// import { ImBin } from "react-icons/im";
// import { RiAddLine, RiSubtractLine } from 'react-icons/ri'

// const CartContent = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0 && Object.keys(cartItems).length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const variant in cartItems[items]) {  // Rename 'item' to 'variant' for clarity
//           if (cartItems[items][variant] > 0) {
//             const [size, color] = variant.split('-');  // Parse: "S-Red" → size="S", color="Red"
//             if (!size || !color) continue;  // Skip invalid keys
//             tempData.push({
//               _id: items,
//               size,
//               color,  // Add color!
//               quantity: cartItems[items][variant],
//             });
//           }
//         }
//       }
//       setCartData(tempData);
//     } else {
//       setCartData([]);
//     }
//   }, [cartItems, products]);

//   const isCartEmpty = cartData.length === 0;
//   return (
//     <div>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       {isCartEmpty ? (
//         <div className="text-center py-20 text-gray-500">
//           <p>Your cart is empty.</p>
//           <button
//             onClick={() => navigate('/collection')}
//             className="mt-6 px-6 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-all"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           <div>
//             {cartData.map((item, index) => {
//               const productData = products.find((product) => product._id === item._id);
//               if (!productData) return null;

//               const imageSrc = Array.isArray(productData.image)
//                 ? productData.image[0]
//                 : productData.image || assets.placeholder_image;

//               return (
//                 <div
//                   key={index}
//                   className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//                 >
//                   <div className="flex items-start gap-6">
//                     <img
//                       className="w-16 sm:w-20 object-cover rounded"
//                       src={imageSrc}
//                       alt={productData.name || "Product"}
//                       onError={(e) => { e.target.src = assets.placeholder_image; }}
//                     />
//                     <div>
//                       <p className="text-xs sm:text-s">{productData.name}</p>
//                       <div className="flex items-center gap-1 flex-wrap mt-2">
//                         <p>{currency}{productData.price}</p>
//                         <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
//                         <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.color}</p>  {/* Un-comment + use item.color */}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Quantity Updater */}
//                   <div className="flex items-center justify-center space-x-1">
//                     <button
//                       type="button"
//                       onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}  // Pass color!
//                       disabled={item.quantity <= 1}
//                       aria-label="Decrease quantity"
//                       className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-l-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all duration-150 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
//                     >
//                       <RiSubtractLine className="w-4 h-4" />
//                     </button>

//                     <input
//                       type="number"
//                       min="1"
//                       max="99"
//                       value={item.quantity}
//                       onChange={(e) => {
//                         const val = Number(e.target.value);
//                         if (e.target.value === '' || val === 0) return;
//                         updateQuantity(item._id, item.size, item.color, val);  // Pass color!
//                       }}
//                       className="w-16 h-8 border-t border-b border-gray-300 bg-white text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}  // Pass color!
//                       aria-label="Increase quantity"
//                       className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-r-md bg-white text-gray-500 hover:bg-gray-50 transition-all duration-150 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
//                     >
//                       <RiAddLine className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <button onClick={() => updateQuantity(item._id, item.size, item.color, 0)}>  {/* Pass color for delete! */}
//                     <ImBin className='h-6 w-6 text-red-600 cursor-pointer' />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="flex justify-end my-20">
//             <div className="w-full sm:w-[450px]">
//               <CartTotal />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CartContent;


// import { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';
// import { RiDeleteBin3Fill, RiDeleteBin3Line } from 'react-icons/ri'
// import { ImBin } from "react-icons/im";
// import { RiAddLine, RiSubtractLine } from 'react-icons/ri'

// const CartContent = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0 && Object.keys(cartItems).length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const variant in cartItems[items]) {  // Rename 'item' to 'variant' for clarity
//           const raw = cartItems[items][variant];  // ✅ Extract raw (object or number)
//           const quantity = typeof raw === 'number' ? raw : (raw?.quantity || 0);  // ✅ Handle object
//           const customPrice = typeof raw === 'number' ? 0 : (raw?.customPrice || 0);  // ✅ Extract custom

//           if (quantity > 0) {
//             const [size, color] = variant.split('-');  // Parse: "S-Red" → size="S", color="Red"
//             if (!size || !color) continue;  // Skip invalid keys
//             tempData.push({
//               _id: items,
//               size,
//               color,  // Add color!
//               quantity,
//               customPrice  // ✅ Add customPrice
//             });
//           }
//         }
//       }
//       setCartData(tempData);
//     } else {
//       setCartData([]);
//     }
//   }, [cartItems, products]);

//   const isCartEmpty = cartData.length === 0;
//   return (
//     <div>
//   <div className="text-xl sm:text-2xl mb-3">
//     <Title text1={"YOUR"} text2={"CART"} />
//   </div>

//   {isCartEmpty ? (
//     <div className="text-center py-20 text-gray-500">
//       <p>Your cart is empty.</p>
//       <button
//         onClick={() => navigate('/collection')}
//         className="mt-6 px-6 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-all"
//       >
//         Continue Shopping
//       </button>
//     </div>
//   ) : (
//     <>
//       {/* CART ITEMS */}
//       <div className="space-y-6">
//         {cartData.map((item, index) => {
//           const productData = products.find((p) => p._id === item._id);
//           if (!productData) return null;

//           const imageSrc = Array.isArray(productData.image)
//             ? productData.image[0]
//             : productData.image || assets.placeholder_image;

//           const unitPrice = productData.price + item.customPrice;
//           const lineTotal = unitPrice * item.quantity;

//           return (
//             <div
//               key={`${item._id}-${item.size}-${item.color}-${index}`}
//               className="
//                 border-b pb-4
//                 grid grid-cols-1
//                 sm:grid-cols-[1fr_auto_auto]
//                 gap-4
//               "
//             >
//               {/* LEFT: IMAGE + DETAILS */}
//               <div className="flex items-start gap-4 sm:gap-6">
//                 <img
//                   className="w-16 sm:w-20 object-cover rounded"
//                   src={imageSrc}
//                   alt={productData.name}
//                   onError={(e) => {
//                     e.target.src = assets.placeholder_image;
//                   }}
//                 />

//                 <div className="text-sm">
//                   <p className="font-medium">{productData.name}</p>

//                   {/* Attributes */}
//                   <div className="flex flex-wrap items-center gap-2 mt-2">
//                     <p className="px-2 py-1 border bg-slate-50 text-xs">
//                       {item.size}
//                     </p>
//                     <p className="px-2 py-1 border bg-slate-50 text-xs">
//                       {item.color}
//                     </p>
//                   </div>

//                   {/* Pricing */}
//                   <div className="mt-2">
//                     <p className="font-semibold">
//                       {currency}
//                       {unitPrice.toFixed(2)}
//                     </p>

//                     {item.customPrice > 0 && (
//                       <p className="text-xs text-green-600 leading-tight">
//                         Base: {currency}
//                         {productData.price.toFixed(2)} + Custom: {currency}
//                         {item.customPrice.toFixed(2)}
//                       </p>
//                     )}

//                     <p className="text-xs text-gray-600">
//                       Qty: {item.quantity} | Line Total: {currency}
//                       {lineTotal.toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* MIDDLE: QUANTITY CONTROLS */}
//               <div className="flex justify-start sm:justify-center items-center space-x-1">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateQuantity(
//                       item._id,
//                       item.size,
//                       item.color,
//                       Math.max(1, item.quantity - 1)
//                     )
//                   }
//                   disabled={item.quantity <= 1}
//                   className="
//                     w-8 h-8 border border-gray-300 bg-white
//                     rounded-l-md text-gray-500
//                     disabled:opacity-50 disabled:cursor-not-allowed
//                     hover:bg-gray-50 transition
//                   "
//                 >
//                   <RiSubtractLine className="w-4 h-4" />
//                 </button>

//                 <input
//                   type="number"
//                   min="1"
//                   max="99"
//                   value={item.quantity}
//                   onChange={(e) => {
//                     const val = Number(e.target.value);
//                     if (e.target.value === '' || val === 0) return;
//                     updateQuantity(item._id, item.size, item.color, val);
//                   }}
//                   className="
//                     w-14 h-8 border-y border-gray-300 bg-white
//                     text-center text-sm font-medium
//                     focus:ring-blue-500 focus:ring-1 outline-none
//                     appearance-none
//                   "
//                 />

//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateQuantity(
//                       item._id,
//                       item.size,
//                       item.color,
//                       item.quantity + 1
//                     )
//                   }
//                   className="
//                     w-8 h-8 border border-gray-300 bg-white
//                     rounded-r-md text-gray-500
//                     hover:bg-gray-50 transition
//                   "
//                 >
//                   <RiAddLine className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* RIGHT: DELETE BTN */}
//               <div className="flex justify-start sm:justify-center">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, item.size, item.color, 0)
//                   }
//                 >
//                   <ImBin className="h-5 w-5 text-red-600 cursor-pointer" />
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* CART TOTAL SECTION */}
//       <div className="flex justify-end my-14">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//         </div>
//       </div>
//     </>
//   )}
// </div>

//   );
// }

// export default CartContent;




// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// /* ── Inline SVG icons (no external libs needed) ─────── */
// const IconMinus = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//   </svg>
// );
// const IconPlus = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
//     <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//   </svg>
// );
// const IconTrash = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IconBag = () => (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
//     <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(200,151,58,0.4)" strokeWidth="1.2" strokeLinejoin="round" />
//     <path d="M3 7h18" stroke="rgba(200,151,58,0.4)" strokeWidth="1.2" />
//     <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(200,151,58,0.4)" strokeWidth="1.2" strokeLinecap="round" />
//   </svg>
// );

// const STYLES = `
//   @keyframes ccFadeUp {
//     from { opacity:0; transform:translateY(14px); }
//     to   { opacity:1; transform:translateY(0); }
//   }
//   @keyframes ccShimmer {
//     0%   { background-position: -400px 0; }
//     100% { background-position: 400px 0; }
//   }
//   .cc-item {
//     animation: ccFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .cc-item:nth-child(1){ animation-delay:0.05s; }
//   .cc-item:nth-child(2){ animation-delay:0.10s; }
//   .cc-item:nth-child(3){ animation-delay:0.15s; }
//   .cc-item:nth-child(4){ animation-delay:0.20s; }
//   .cc-item:nth-child(5){ animation-delay:0.25s; }

//   .cc-qty-btn {
//     width:28px; height:28px;
//     background:rgba(200,151,58,0.08);
//     border:1px solid rgba(200,151,58,0.2);
//     color:#c8973a;
//     display:flex; align-items:center; justify-content:center;
//     cursor:pointer; transition:all 0.18s;
//     flex-shrink:0;
//   }
//   .cc-qty-btn:hover {
//     background:rgba(200,151,58,0.18);
//     border-color:#c8973a;
//   }
//   .cc-qty-btn:disabled {
//     opacity:0.3; cursor:not-allowed;
//   }
//   .cc-del-btn {
//     width:30px; height:30px;
//     background:rgba(180,40,40,0.07);
//     border:1px solid rgba(180,40,40,0.2);
//     color:rgba(200,80,80,0.7);
//     display:flex; align-items:center; justify-content:center;
//     cursor:pointer; transition:all 0.18s; border-radius:2px;
//     flex-shrink:0;
//   }
//   .cc-del-btn:hover {
//     background:rgba(180,40,40,0.15);
//     border-color:rgba(200,80,80,0.5);
//     color:rgba(220,100,100,1);
//   }
//   .cc-img {
//     transition: transform 0.4s ease;
//   }
//   .cc-item:hover .cc-img {
//     transform: scale(1.04);
//   }
//   .cc-divider {
//     height:1px;
//     background:linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent);
//   }
// `;

// const CartContent = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0 && Object.keys(cartItems).length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const variant in cartItems[items]) {
//           const raw = cartItems[items][variant];
//           const quantity = typeof raw === 'number' ? raw : (raw?.quantity || 0);
//           const customPrice = typeof raw === 'number' ? 0 : (raw?.customPrice || 0);
//           if (quantity > 0) {
//             const [size, color] = variant.split('-');
//             if (!size || !color) continue;
//             tempData.push({ _id: items, size, color, quantity, customPrice });
//           }
//         }
//       }
//       setCartData(tempData);
//     } else {
//       setCartData([]);
//     }
//   }, [cartItems, products]);

//   const isCartEmpty = cartData.length === 0;

//   return (
//     <>
//       <style>{STYLES}</style>

//       <div style={{ fontFamily: "Georgia,serif", color: "#f5ede0", minHeight: 200 }}>

//         {/* ── Page heading ── */}
//         <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
//           <div style={{ textAlign: "center" }}>
//             <p style={{ fontSize: 9, letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 4 }}>
//               D DOLLY LAMB
//             </p>
//             <h2 style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", color: "#f7c568", fontWeight: 400, letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>
//               YOUR CART
//             </h2>
//           </div>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
//         </div>

//         {/* ── Empty state ── */}
//         {isCartEmpty ? (
//           <div style={{ textAlign: "center", padding: "60px 20px" }}>
//             <div style={{ display: "flex", justifyContent: "center", marginBottom: 18, opacity: 0.4 }}>
//               <IconBag />
//             </div>
//             <p style={{ fontSize: 13, color: "#5a4030", fontStyle: "italic", marginBottom: 24 }}>
//               Your cart is empty
//             </p>
//             <button
//               onClick={() => navigate('/collection')}
//               style={{
//                 padding: "12px 36px",
//                 background: "linear-gradient(135deg,#c8973a,#f7c568)",
//                 color: "#1a0f0a",
//                 border: "none",
//                 fontSize: 10,
//                 letterSpacing: "0.22em",
//                 fontFamily: "Arial",
//                 fontWeight: 700,
//                 cursor: "pointer",
//                 transition: "all 0.3s",
//               }}
//               onMouseEnter={e => { e.target.style.opacity = "0.85"; e.target.style.transform = "translateY(-1px)"; }}
//               onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
//             >
//               SHOP THE COLLECTION
//             </button>
//           </div>
//         ) : (
//           <>
//             {/* ── Item count badge ── */}
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//               <span style={{ fontSize: 10, letterSpacing: "0.22em", color: "#5a4030", fontFamily: "Arial" }}>
//                 {cartData.length} {cartData.length === 1 ? "PIECE" : "PIECES"}
//               </span>
//               <span style={{ fontSize: 9, color: "#5a4030", fontStyle: "italic" }}>
//                 All prices include taxes
//               </span>
//             </div>

//             {/* ── Cart items list ── */}
//             <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
//               {cartData.map((item, index) => {
//                 const productData = products.find(p => p._id === item._id);
//                 if (!productData) return null;

//                 const imageSrc = Array.isArray(productData.image)
//                   ? productData.image[0]
//                   : productData.image || assets.placeholder_image;

//                 const unitPrice = productData.price + item.customPrice;
//                 const lineTotal = unitPrice * item.quantity;

//                 return (
//                   <div key={`${item._id}-${item.size}-${item.color}-${index}`} className="cc-item">
//                     {/* Row */}
//                     <div style={{
//                       display: "grid",
//                       gridTemplateColumns: "80px 1fr auto",
//                       gap: 16,
//                       padding: "20px 0",
//                       alignItems: "start",
//                     }}>

//                       {/* ── Product image ── */}
//                       <div style={{ width: 80, height: 96, overflow: "hidden", background: "#fff", borderRadius: 2, border: "1px solid rgba(200,151,58,0.15)", flexShrink: 0 }}>
//                         <img
//                           className="cc-img"
//                           src={imageSrc}
//                           alt={productData.name}
//                           style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//                           onError={e => { e.target.src = assets.placeholder_image; }}
//                         />
//                       </div>

//                       {/* ── Product info ── */}
//                       <div style={{ minWidth: 0 }}>
//                         <p style={{ fontSize: 13, color: "#f5ede0", lineHeight: 1.3, marginBottom: 8, letterSpacing: "0.02em" }}>
//                           {productData.name}
//                         </p>

//                         {/* Variant pills */}
//                         <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
//                           {[item.size, item.color].map((tag, t) => (
//                             <span key={t} style={{
//                               fontSize: 9, letterSpacing: "0.2em",
//                               color: "#c8973a", fontFamily: "Arial", fontWeight: 600,
//                               padding: "3px 10px",
//                               background: "rgba(200,151,58,0.08)",
//                               border: "1px solid rgba(200,151,58,0.2)",
//                             }}>
//                               {tag}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Price */}
//                         <p style={{ fontSize: 15, color: "#f7c568", letterSpacing: "0.02em", marginBottom: 2 }}>
//                           {currency}{unitPrice.toFixed(2)}
//                         </p>
//                         {item.customPrice > 0 && (
//                           <p style={{ fontSize: 9, color: "#7a6040", fontStyle: "italic" }}>
//                             Base {currency}{productData.price.toFixed(2)} + Custom {currency}{item.customPrice.toFixed(2)}
//                           </p>
//                         )}
//                         <p style={{ fontSize: 10, color: "#5a4030", marginTop: 2 }}>
//                           Line total: {currency}{lineTotal.toFixed(2)}
//                         </p>

//                         {/* ── Qty controls ── */}
//                         <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
//                           <button
//                             className="cc-qty-btn"
//                             disabled={item.quantity <= 1}
//                             onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
//                           >
//                             <IconMinus />
//                           </button>

//                           <span style={{
//                             minWidth: 36, textAlign: "center",
//                             fontSize: 13, color: "#f5ede0",
//                             fontFamily: "Georgia",
//                             padding: "4px 6px",
//                             background: "rgba(200,151,58,0.05)",
//                             border: "1px solid rgba(200,151,58,0.15)",
//                           }}>
//                             {item.quantity}
//                           </span>

//                           <button
//                             className="cc-qty-btn"
//                             onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
//                           >
//                             <IconPlus />
//                           </button>
//                         </div>
//                       </div>

//                       {/* ── Delete btn ── */}
//                       <button
//                         className="cc-del-btn"
//                         onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
//                         title="Remove item"
//                       >
//                         <IconTrash />
//                       </button>
//                     </div>

//                     <div className="cc-divider" />
//                   </div>
//                 );
//               })}
//             </div>

//             {/* ── Cart Total ── */}
//             <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 40 }}>
//               <div style={{ width: "100%", maxWidth: 420 }}>
//                 <CartTotal />
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartContent;



import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

/* ── Inline SVG icons (no external libs needed) ─────── */
const IconMinus = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconPlus = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconBag = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(200,151,58,0.4)" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M3 7h18" stroke="rgba(200,151,58,0.4)" strokeWidth="1.2" />
    <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(200,151,58,0.4)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const STYLES = `
  @keyframes ccFadeUp {
    from { opacity:0; transform:translateY(14px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes ccShimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .cc-item {
    animation: ccFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both;
  }
  .cc-item:nth-child(1){ animation-delay:0.05s; }
  .cc-item:nth-child(2){ animation-delay:0.10s; }
  .cc-item:nth-child(3){ animation-delay:0.15s; }
  .cc-item:nth-child(4){ animation-delay:0.20s; }
  .cc-item:nth-child(5){ animation-delay:0.25s; }

  .cc-qty-btn {
    width:28px; height:28px;
    background:rgba(200,151,58,0.08);
    border:1px solid rgba(200,151,58,0.2);
    color:#c8973a;
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; transition:all 0.18s;
    flex-shrink:0;
  }
  .cc-qty-btn:hover {
    background:rgba(200,151,58,0.18);
    border-color:#c8973a;
  }
  .cc-qty-btn:disabled {
    opacity:0.3; cursor:not-allowed;
  }
  .cc-del-btn {
    width:30px; height:30px;
    background:rgba(180,40,40,0.07);
    border:1px solid rgba(180,40,40,0.2);
    color:rgba(200,80,80,0.7);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; transition:all 0.18s; border-radius:2px;
    flex-shrink:0;
  }
  .cc-del-btn:hover {
    background:rgba(180,40,40,0.15);
    border-color:rgba(200,80,80,0.5);
    color:rgba(220,100,100,1);
  }
  .cc-img {
    transition: transform 0.4s ease;
  }
  .cc-item:hover .cc-img {
    transform: scale(1.04);
  }
  .cc-divider {
    height:1px;
    background:linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent);
  }
`;

const CartContent = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const variant in cartItems[items]) {
          const raw = cartItems[items][variant];
          const quantity = typeof raw === 'number' ? raw : (raw?.quantity || 0);
          const customPrice = typeof raw === 'number' ? 0 : (raw?.customPrice || 0);
          if (quantity > 0) {
            const [size, color] = variant.split('-');
            if (!size || !color) continue;
            tempData.push({ _id: items, size, color, quantity, customPrice });
          }
        }
      }
      setCartData(tempData);
    } else {
      setCartData([]);
    }
  }, [cartItems, products]);

  const isCartEmpty = cartData.length === 0;

  return (
    <>
      <style>{STYLES}</style>

      <div style={{ fontFamily: "Georgia,serif", color: "#f5ede0", minHeight: 200 }}>

        {/* ── Page heading ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 9, letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 4 }}>
              D DOLLY LAMB
            </p>
            <h2 style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", color: "#f7c568", fontWeight: 400, letterSpacing: "0.08em", margin: 0, lineHeight: 1 }}>
              YOUR CART
            </h2>
          </div>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
        </div>

        {/* ── Empty state ── */}
        {isCartEmpty ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18, opacity: 0.4 }}>
              <IconBag />
            </div>
            <p style={{ fontSize: 13, color: "#a08060", fontStyle: "italic", marginBottom: 24 }}>
              Your cart is empty
            </p>
            <button
              onClick={() => navigate('/collection')}
              style={{
                padding: "12px 36px",
                background: "linear-gradient(135deg,#c8973a,#f7c568)",
                color: "#1a0f0a",
                border: "none",
                fontSize: 10,
                letterSpacing: "0.22em",
                fontFamily: "Arial",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.target.style.opacity = "0.85"; e.target.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
            >
              SHOP THE COLLECTION
            </button>
          </div>
        ) : (
          <>
            {/* ── Item count badge ── */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <span style={{ fontSize: 10, letterSpacing: "0.22em", color: "#a08060", fontFamily: "Arial" }}>
                {cartData.length} {cartData.length === 1 ? "PIECE" : "PIECES"}
              </span>
              <span style={{ fontSize: 9, color: "#a08060", fontStyle: "italic" }}>
                All prices include taxes
              </span>
            </div>

            {/* ── Cart items list ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {cartData.map((item, index) => {
                const productData = products.find(p => p._id === item._id);
                if (!productData) return null;

                const imageSrc = Array.isArray(productData.image)
                  ? productData.image[0]
                  : productData.image || assets.placeholder_image;

                const unitPrice = productData.price + item.customPrice;
                const lineTotal = unitPrice * item.quantity;

                return (
                  <div key={`${item._id}-${item.size}-${item.color}-${index}`} className="cc-item">
                    {/* Row */}
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr auto",
                      gap: 16,
                      padding: "20px 0",
                      alignItems: "start",
                    }}>

                      {/* ── Product image ── */}
                      <div style={{ width: 80, height: 96, overflow: "hidden", background: "#fff", borderRadius: 2, border: "1px solid rgba(200,151,58,0.15)", flexShrink: 0 }}>
                        <img
                          className="cc-img"
                          src={imageSrc}
                          alt={productData.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                          onError={e => { e.target.src = assets.placeholder_image; }}
                        />
                      </div>

                      {/* ── Product info ── */}
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: 13, color: "#f5ede0", lineHeight: 1.3, marginBottom: 8, letterSpacing: "0.02em" }}>
                          {productData.name}
                        </p>

                        {/* Variant pills */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                          {[item.size, item.color].map((tag, t) => (
                            <span key={t} style={{
                              fontSize: 9, letterSpacing: "0.2em",
                              color: "#c8973a", fontFamily: "Arial", fontWeight: 600,
                              padding: "3px 10px",
                              background: "rgba(200,151,58,0.08)",
                              border: "1px solid rgba(200,151,58,0.2)",
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Price */}
                        <p style={{ fontSize: 15, color: "#f7c568", letterSpacing: "0.02em", marginBottom: 2 }}>
                          {currency}{unitPrice.toFixed(2)}
                        </p>
                        {item.customPrice > 0 && (
                          <p style={{ fontSize: 9, color: "#c8973a", fontStyle: "italic" }}>
                            Base {currency}{productData.price.toFixed(2)} + Custom {currency}{item.customPrice.toFixed(2)}
                          </p>
                        )}
                        <p style={{ fontSize: 10, color: "#a08060", marginTop: 2 }}>
                          Line total: {currency}{lineTotal.toFixed(2)}
                        </p>

                        {/* ── Qty controls ── */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
                          <button
                            className="cc-qty-btn"
                            disabled={item.quantity <= 1}
                            onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
                          >
                            <IconMinus />
                          </button>

                          <span style={{
                            minWidth: 36, textAlign: "center",
                            fontSize: 13, color: "#f5ede0",
                            fontFamily: "Georgia",
                            padding: "4px 6px",
                            background: "rgba(200,151,58,0.05)",
                            border: "1px solid rgba(200,151,58,0.15)",
                          }}>
                            {item.quantity}
                          </span>

                          <button
                            className="cc-qty-btn"
                            onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
                          >
                            <IconPlus />
                          </button>
                        </div>
                      </div>

                      {/* ── Delete btn ── */}
                      <button
                        className="cc-del-btn"
                        onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
                        title="Remove item"
                      >
                        <IconTrash />
                      </button>
                    </div>

                    <div className="cc-divider" />
                  </div>
                );
              })}
            </div>

            {/* ── Cart Total ── */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 40 }}>
              <div style={{ width: "100%", maxWidth: 420 }}>
                <CartTotal />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartContent;