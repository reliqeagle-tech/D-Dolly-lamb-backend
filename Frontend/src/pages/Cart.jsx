
// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {

//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0) {
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
//     }
//   }, [cartItems, products]);

//   // 🧠 Check if cart is empty
//   const isCartEmpty = cartData.length === 0;

//   return (
//     <div className='border-t pt-14'>

//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       {/* 🛒 If cart is empty, show a friendly message */}
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
//           {/* Cart Items */}
//           <div>
//             {cartData.map((item, index) => {
//               const productData = products.find((product) => product._id === item._id);

//               return (
//                 <div
//                   key={index}
//                   className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//                 >
//                   <div className="flex items-start gap-6">
//                     <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
//                     <div>
//                       <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
//                       <div className="flex items-center gap-5 mt-2">
//                         <p>{currency}{productData.price}</p>
//                         <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <input
//                     onChange={(e) =>
//                       e.target.value === '' || e.target.value === '0'
//                         ? null
//                         : updateQuantity(item._id, item.size, Number(e.target.value))
//                     }
//                     className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                     type="number"
//                     min={1}
//                     defaultValue={item.quantity}
//                   />
//                   <img
//                     onClick={() => updateQuantity(item._id, item.size, 0)}
//                     className="w-4 mr-4 sm:w-5 cursor-pointer"
//                     src={assets.bin_icon}
//                     alt=""
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           {/* Cart Totals Section */}
//           <div className="flex justify-end my-20">
//             <div className="w-full sm:w-[450px]">
//               <CartTotal />

//               <div className="w-full text-end">
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
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



// import { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {

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

// //   useEffect(() => {
// //   if (products.length > 0 && Object.keys(cartItems).length > 0) {
// //     const tempData = [];
// //     for (const items in cartItems) {
// //       for (const item in cartItems[items]) {
// //         const entry = cartItems[items][item];
// //         if (entry?.quantity > 0) {
// //           tempData.push({
// //             _id: items,
// //             size: item,
// //             quantity: entry.quantity,
// //             price: entry.price, // ✅ include dynamic price
// //           });
// //         }
// //       }
// //     }
// //     setCartData(tempData);
// //   } else {
// //     setCartData([]);
// //   }
// // }, [cartItems, products]);


//   const isCartEmpty = cartData.length === 0;

//   return (
//     <div className='border-t pt-14'>
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
//           {/* 🛍️ Cart Items */}
//           <div>
//             {cartData.map((item, index) => {
//               const productData = products.find((product) => product._id === item._id);

//               // 🚨 Handle missing or deleted products safely
//               if (!productData) {
//                 // console.warn(`⚠️ Product not found for id: ${item._id}`);
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
//                       <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
//                       <div className="flex items-center gap-5 mt-2">
//                         <p>{currency}{productData.price}</p>
//                         <p>{currency}{item.price}</p>  {/* ✅ shows actual customized price */}

//                         <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
//                         {/* <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.color}</p> */}
//                       </div>
//                     </div>
//                   </div>

//                   <input
//                     onChange={(e) =>
//                       e.target.value === '' || e.target.value === '0'
//                         ? null
//                         : updateQuantity(item._id, item.size, Number(e.target.value))
//                     }
//                     className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                     type="number"
//                     min={1}
//                     defaultValue={item.quantity}
//                   />

//                   <img
//                     onClick={() => updateQuantity(item._id, item.size, 0)}
//                     className="w-4 mr-4 sm:w-5 cursor-pointer"
//                     src={assets.bin_icon}
//                     alt="Delete"
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           {/* 💰 Cart Totals */}
//           <div className="flex justify-end my-20">
//             <div className="w-full sm:w-[450px]">
//               <CartTotal />

//               <div className="w-full text-end">
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
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
  

// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   // useEffect(() => {
//   //   if (products.length > 0 && Object.keys(cartItems).length > 0) {
//   //     const tempData = [];
//   //     for (const items in cartItems) {
//   //       for (const itemKey in cartItems[items]) {
//   //         if (cartItems[items][itemKey] > 0) {
//   //           // Split combined key: "S-Tobacco" -> size: "S", color: "Tobacco"
//   //           const [size, color] = itemKey.includes('-') ? itemKey.split('-') : [itemKey, '']; // Fallback if no color (old data)
            
//   //           tempData.push({
//   //             _id: items,
//   //             size,
//   //             color,
//   //             quantity: cartItems[items][itemKey],
//   //           });
//   //         }
//   //       }
//   //     }
//   //     setCartData(tempData);
//   //   } else {
//   //     setCartData([]);
//   //   }
//   // }, [cartItems, products]);

//   useEffect(() => {
//   if (products.length > 0 && Object.keys(cartItems).length > 0) {
//     const tempData = [];
//     for (const items in cartItems) {
//       for (const itemKey in cartItems[items]) {
//         const raw = cartItems[items][itemKey];

//         // normalize old and new shapes
//         const quantity = typeof raw === 'number' ? raw : (raw?.quantity || 0);
//         const customPrice = typeof raw === 'number' ? 0 : (raw?.customPrice || 0);

//         if (quantity > 0) {
//           const [size, color] = itemKey.includes('-') ? itemKey.split('-') : [itemKey, ''];

//           tempData.push({
//             _id: items,
//             size,
//             color,
//             quantity,
//             customPrice
//           });
//         }
//       }
//     }
//     setCartData(tempData);
//   } else {
//     setCartData([]);
//   }
// }, [cartItems, products]);


//   const isCartEmpty = cartData.length === 0;

//   return (
//     <div className='border-t pt-14'>
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
//           {/* 🛍️ Cart Items */}
//           <div>
//             {cartData.map((item, index) => {
//               const productData = products.find((product) => product._id === item._id);

//               // 🚨 Handle missing or deleted products safely
//               if (!productData) {
//                 console.warn(`⚠️ Product not found for id: ${item._id}`);
//                 return null;
//               }

//               // 🧠 Safely extract image (Cloudinary or array fallback)
//               const imageSrc = Array.isArray(productData.image)
//                 ? productData.image[0]
//                 : productData.image || assets.placeholder_image;

//               return (
//                 <div
//                   key={`${item._id}-${item.size}-${item.color}-${index}`} // Better unique key
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
//                       <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
//                       <div className="flex items-center gap-5 mt-2 flex-wrap">
//                         <p>{currency}{productData.price + (item.customPrice || 0)}</p> Only product price, no duplicate
                        
//                         <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
//                         {item.color && ( // Show only if color exists
//                           <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs sm:text-sm">
//                             {item.color}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <input
//                     onChange={(e) =>
//                       updateQuantity(
//                         item._id,
//                         item.size,
//                         item.color, // ✅ Pass color
//                         Number(e.target.value) || 0 // Handle empty input
//                       )
//                     }
//                     className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                     type="number"
//                     min={1}
//                     value={item.quantity} // Use value for controlled input (better than defaultValue)
//                   />

//                   <img
//                     onClick={() => updateQuantity(item._id, item.size, item.color, 0)} // ✅ Pass color for delete
//                     className="w-4 mr-4 sm:w-5 cursor-pointer"
//                     src={assets.bin_icon}
//                     alt="Delete"
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           {/* 💰 Cart Totals */}
//           <div className="flex justify-end my-20">
//             <div className="w-full sm:w-[450px]">
//               <CartTotal />

//               <div className="w-full text-end">
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
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0 && Object.keys(cartItems).length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const itemKey in cartItems[items]) {
//           const raw = cartItems[items][itemKey];
//           const quantity = typeof raw === 'number' ? raw : (raw?.quantity || 0);
//           const customPrice = typeof raw === 'number' ? 0 : (raw?.customPrice || 0);

//           if (quantity > 0) {
//             const [size, color] = itemKey.includes('-') ? itemKey.split('-') : [itemKey, ''];

//             tempData.push({
//               _id: items,
//               size,
//               color,
//               quantity,
//               customPrice
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
//     <div className='border-t pt-14 p-24'>
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
//               if (!productData) {
//                 console.warn(`⚠️ Product not found for id: ${item._id}`);
//                 return null;
//               }

//               const imageSrc = Array.isArray(productData.image)
//                 ? productData.image[0]
//                 : productData.image || assets.placeholder_image;

//               // const unitPrice = productData.price + item.customPrice;  // ✅ Base + Custom
//               // const lineTotal = unitPrice * item.quantity;

//               const originalPrice = Number(productData.price);
//               const discountPercent = Number(productData.discountPrice) || 0;

//               const discountAmount =
//                 discountPercent > 0 && discountPercent < 100
//                   ? (originalPrice * discountPercent) / 100
//                   : 0;

//               const salePrice = originalPrice - discountAmount;

//               const unitPrice = salePrice + item.customPrice;

//               const lineTotal = unitPrice * item.quantity;

//               return (
//                 <div
//                   key={`${item._id}-${item.size}-${item.color}-${index}`}
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
//                       <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
//                       <div className="flex items-center gap-5 mt-2 flex-wrap">
//                         <div className="flex flex-col">
//                           {/* <p className="font-semibold">{currency}{unitPrice.toFixed(2)}</p>  ✅ $209.98 */}
//                           <div className="flex flex-col">
  
//                           {discountPercent > 0 && (
//                             <p className="text-xs text-gray-400 line-through">
//                               {currency}{originalPrice.toFixed(2)}
//                             </p>
//                           )}

//                           <p className="font-semibold text-lg text-black">
//                             {currency}{salePrice.toFixed(2)}
//                           </p>

//                           {discountPercent > 0 && (
//                             <p className="text-xs text-green-600">
//                               Save {currency}{discountAmount.toFixed(2)} ({discountPercent}% OFF)
//                             </p>
//                           )}

//                         </div>
//                           {item.customPrice > 0 && (
//                             <p className="text-xs text-green-600">Base: {currency}{productData.price.toFixed(2)} + Lining: {currency}{item.customPrice.toFixed(2)}</p>
//                           )}
//                           <p className="text-sm text-gray-600">Qty: {item.quantity} | Line Total: {currency}{lineTotal.toFixed(2)}</p>
//                         </div>
                        
//                         <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
//                         {item.color && (
//                           <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs sm:text-sm">
//                             {item.color}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <input
//                     onChange={(e) => updateQuantity(item._id, item.size, item.color, Number(e.target.value) || 0)}
//                     className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                     type="number"
//                     min={1}
//                     value={item.quantity}
//                   />

//                   <img
//                     onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
//                     className="w-4 mr-4 sm:w-5 cursor-pointer"
//                     src={assets.bin_icon}
//                     alt="Delete"
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           <div className="flex justify-end my-20">
//             <div className="w-full sm:w-[450px]">
//               <CartTotal />  {/* Assumes it uses getCartAmount() — now with custom */}

//               <div className="w-full text-end">
//                 <button
//                   onClick={() => navigate('/place-order')}
//                   disabled={isCartEmpty}
//                   className={`text-sm my-8 px-8 py-3 rounded-md font-semibold transition-all
//                     ${isCartEmpty ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-900'}`}
//                 >
//                   PROCEED TO CHECKOUT
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

  :root {
    --bg:      #120b06;
    --card:    #1a100a;
    --card2:   #1f1209;
    --gold:    #c8973a;
    --glt:     #f7c568;
    --cream:   #f0ddc0;
    --bdr:     rgba(200,151,58,0.18);
    --bdr-h:   rgba(200,151,58,0.42);
    --dim:     #8a6830;
  }

  @keyframes cUp   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes cIn   { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
  @keyframes cPnl  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes cShim {
    0%  {background-position:-600px 0}
    100%{background-position: 600px 0}
  }

  .c-page  { animation: cUp  0.5s cubic-bezier(0.16,1,0.3,1) both; }
  .c-row   { animation: cIn  0.42s cubic-bezier(0.16,1,0.3,1) both; }
  .c-panel { animation: cPnl 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s both; }

  /* ── Cart item card ── */
  .c-item {
    position: relative;
    display: flex;
    align-items: stretch;
    background: linear-gradient(135deg, var(--card), var(--card2));
    border: 1px solid var(--bdr);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 0.28s, box-shadow 0.28s, transform 0.28s;
  }
  .c-item::before {
    content:'';
    position:absolute; top:0; left:0; right:0; height:1.5px;
    background:linear-gradient(to right,transparent,var(--gold) 30%,var(--glt) 50%,var(--gold) 70%,transparent);
    opacity:0; transition:opacity 0.3s;
  }
  .c-item:hover { border-color:var(--bdr-h); box-shadow:0 14px 44px rgba(0,0,0,0.55); transform:translateY(-1px); }
  .c-item:hover::before { opacity:0.6; }

  /* Image */
  .c-img-wrap {
    flex-shrink:0; width:120px; background:#fff;
    border-right:1px solid rgba(200,151,58,0.1);
    overflow:hidden; min-height:110px;
  }
  @media(max-width:540px){ .c-img-wrap{width:80px;} }
  .c-img {
    width:100%; height:100%; object-fit:contain; padding:10px; display:block;
    transition:transform 0.55s cubic-bezier(0.16,1,0.3,1);
  }
  .c-item:hover .c-img { transform:scale(1.07); }

  /* Body */
  .c-body {
    flex:1; padding:16px 18px 16px 16px;
    display:flex; align-items:center; flex-wrap:wrap; gap:14px; min-width:0;
  }
  @media(max-width:600px){ .c-body{padding:12px 14px;} }

  /* Qty control */
  .c-qty-wrap {
    display:flex; align-items:center; gap:8px;
    background:rgba(200,151,58,0.05);
    border:1px solid rgba(200,151,58,0.18);
    border-radius:30px; padding:4px 6px;
  }
  .c-qty-btn {
    width:26px; height:26px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    background:rgba(200,151,58,0.08);
    border:1px solid rgba(200,151,58,0.22);
    color:rgba(200,151,58,0.7); cursor:pointer;
    transition:all 0.18s; flex-shrink:0; outline:none;
  }
  .c-qty-btn:hover  { background:rgba(200,151,58,0.22); color:var(--glt); border-color:var(--gold); }
  .c-qty-btn:disabled { opacity:0.3; cursor:default; }
  .c-qty-val {
    width:30px; text-align:center;
    background:transparent; border:none; outline:none;
    font-size:14px; font-weight:600; color:var(--cream);
    font-family:'Cormorant Garamond',serif;
  }
  .c-qty-val::-webkit-inner-spin-button,
  .c-qty-val::-webkit-outer-spin-button { -webkit-appearance:none; }

  /* Inline remove button */
  .c-del-inline {
    display:inline-flex; align-items:center; gap:5px;
    padding:5px 12px; border-radius:6px;
    background:rgba(16,2,2,0.85);
    border:1.5px solid rgba(200,50,50,0.5);
    color:#f87171; cursor:pointer;
    transition:all 0.22s; outline:none;
    font-size:8px;
  }
  .c-del-inline:hover {
    background:rgba(90,8,8,0.95); border-color:#ff5555; color:#fff;
    box-shadow:0 3px 12px rgba(200,30,30,0.35);
  }

  /* Summary card */
  .c-summary {
    background:linear-gradient(160deg,var(--card),var(--card2));
    border:1px solid var(--bdr); border-radius:12px; overflow:hidden;
    position:sticky; top:24px;
  }
  .c-sumbar {
    height:2px;
    background:linear-gradient(to right,transparent,var(--gold) 30%,var(--glt) 50%,var(--gold) 70%,transparent);
    opacity:0.65;
  }

  /* Checkout CTA */
  .c-cta {
    width:100%; padding:15px;
    background:linear-gradient(135deg,var(--gold),var(--glt));
    color:#1a0f0a; border:none; border-radius:8px;
    font-size:10px; letter-spacing:0.28em;
    font-family:'Montserrat',sans-serif; font-weight:700;
    cursor:pointer; display:flex; align-items:center;
    justify-content:center; gap:9px;
    transition:box-shadow 0.25s, transform 0.22s;
    position:relative; overflow:hidden;
  }
  .c-cta::after {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent);
    background-size:600px 100%;
    animation:cShim 2.6s infinite; opacity:0; transition:opacity 0.3s;
  }
  .c-cta:hover  { box-shadow:0 8px 28px rgba(200,151,58,0.42); transform:translateY(-1px); }
  .c-cta:hover::after { opacity:1; }
  .c-cta:disabled { opacity:0.45; cursor:not-allowed; transform:none; }

  /* Continue btn */
  .c-cont {
    width:100%; padding:13px;
    background:transparent;
    color:rgba(200,151,58,0.6);
    border:1px solid rgba(200,151,58,0.22); border-radius:8px;
    font-size:9px; letter-spacing:0.22em;
    font-family:'Montserrat',sans-serif; font-weight:600;
    cursor:pointer; display:flex; align-items:center;
    justify-content:center; gap:7px;
    transition:all 0.2s;
  }
  .c-cont:hover { border-color:rgba(200,151,58,0.5); color:var(--glt); background:rgba(200,151,58,0.06); }

  /* Pill tags */
  .cpg { padding:3px 10px; border-radius:5px; font-size:8px; letter-spacing:0.18em; font-family:'Montserrat',sans-serif; color:var(--gold); background:rgba(200,151,58,0.08); border:1px solid rgba(200,151,58,0.22); }
  .cpd { padding:3px 10px; border-radius:5px; font-size:8px; letter-spacing:0.14em; font-family:'Montserrat',sans-serif; color:rgba(240,220,190,0.55); background:rgba(200,151,58,0.04); border:1px solid rgba(200,151,58,0.12); }

  /* Trust badge row */
  .c-badge { display:flex; align-items:center; gap:7px; color:rgba(200,151,58,0.45); }
  .c-badge-ico {
    width:30px; height:30px; border-radius:50%; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    background:rgba(200,151,58,0.07); border:1px solid rgba(200,151,58,0.15);
  }
`;

/* ── Icons ── */
const IcoMinus = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);
const IcoPlus = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);
const IcoTrash = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);
const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoBack = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoBag = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(200,151,58,0.2)" strokeWidth="0.7" strokeLinejoin="round"/>
    <path d="M3 7h18" stroke="rgba(200,151,58,0.2)" strokeWidth="0.7" strokeLinecap="round"/>
    <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(200,151,58,0.2)" strokeWidth="0.7" strokeLinecap="round"/>
  </svg>
);
const IcoShield = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);
const IcoReturn = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <polyline points="1 4 1 10 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.51 15a9 9 0 1 0 .49-4.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* ══════════════════════════════════════════ */

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  /* ── Original cart data logic — untouched ── */
  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const itemKey in cartItems[items]) {
          const raw         = cartItems[items][itemKey];
          const quantity    = typeof raw === 'number' ? raw : (raw?.quantity    || 0);
          const customPrice = typeof raw === 'number' ? 0   : (raw?.customPrice || 0);
          if (quantity > 0) {
            const [size, color] = itemKey.includes('-') ? itemKey.split('-') : [itemKey, ''];
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
  const totalItems  = cartData.reduce((s, i) => s + i.quantity, 0);

  return (
    <>
      <style>{STYLES}</style>

      <div className="c-page" style={{
        background: '#120b06', minHeight: '100vh',
        color: '#f5ede0', fontFamily: 'Georgia, serif',
        padding: 'clamp(28px,5vw,52px) clamp(16px,5vw,64px) 90px',
      }}>

        {/* ═══ PAGE HEADER ═══ */}
        <div style={{ marginBottom: 34 }}>
          <p style={{
            fontSize: 8, letterSpacing: '0.48em', color: '#c8973a',
            fontFamily: 'Montserrat,sans-serif', fontWeight: 700, marginBottom: 6,
          }}>D DOLLY LAMB</p>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(1.7rem,3.5vw,2.5rem)', color: '#f7c568',
                fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                letterSpacing: '0.12em', margin: 0, lineHeight: 1,
              }}>
                YOUR CART
              </h1>
              {!isCartEmpty && (
                <p style={{
                  fontSize: 10, color: '#8a6830', fontFamily: 'Montserrat,sans-serif',
                  letterSpacing: '0.1em', marginTop: 8,
                }}>
                  {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'} IN YOUR BAG
                </p>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 4 }}>
              <div style={{ width: 46, height: 1, background: 'linear-gradient(to left,rgba(200,151,58,0.35),transparent)' }}/>
              <div style={{ width: 7, height: 7, background: '#c8973a', transform: 'rotate(45deg)', flexShrink: 0 }}/>
              <div style={{ width: 46, height: 1, background: 'linear-gradient(to right,rgba(200,151,58,0.35),transparent)' }}/>
            </div>
          </div>

          <div style={{ height: 1, marginTop: 20, background: 'linear-gradient(to right,transparent,rgba(200,151,58,0.18) 40%,rgba(200,151,58,0.18) 60%,transparent)' }}/>
        </div>

        {/* ═══ EMPTY STATE ═══ */}
        {isCartEmpty ? (
          <div style={{
            background: 'linear-gradient(160deg,#1a100a,#1f1209)',
            border: '1px solid rgba(200,151,58,0.15)', borderRadius: 14,
            padding: '80px 24px', textAlign: 'center', maxWidth: 460, margin: '0 auto',
          }}>
            <div style={{ marginBottom: 18, opacity: 0.55 }}><IcoBag /></div>
            <h2 style={{
              fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', color: '#f7c568',
              fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic',
              fontWeight: 400, marginBottom: 10,
            }}>Your bag is empty</h2>
            <p style={{
              fontSize: 10, color: '#8a6830', fontFamily: 'Montserrat,sans-serif',
              letterSpacing: '0.1em', marginBottom: 32,
            }}>DISCOVER OUR ARTISAN LEATHER COLLECTION</p>
            <button
              onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
              className="c-cta"
              style={{ maxWidth: 260, margin: '0 auto' }}
            >
              EXPLORE COLLECTION <IcoArrow />
            </button>
          </div>

        ) : (
          /* ═══ TWO-COLUMN LAYOUT ═══ */
          <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* ── LEFT: Items ── */}
            <div style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>

              {cartData.map((item, index) => {
                const productData = products.find((p) => p._id === item._id);
                if (!productData) return null;

                const imageSrc = Array.isArray(productData.image)
                  ? productData.image[0]
                  : productData.image || assets.placeholder_image;

                /* ── Original price logic — untouched ── */
                const originalPrice   = Number(productData.price);
                const discountPercent = Number(productData.discountPrice) || 0;
                const discountAmount  = discountPercent > 0 && discountPercent < 100
                  ? (originalPrice * discountPercent) / 100 : 0;
                const salePrice = originalPrice - discountAmount;
                const unitPrice = salePrice + item.customPrice;
                const lineTotal = unitPrice * item.quantity;

                return (
                  <div
                    key={`${item._id}-${item.size}-${item.color}-${index}`}
                    className="c-item c-row"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {/* Image */}
                    <div className="c-img-wrap">
                      <img
                        className="c-img"
                        src={imageSrc}
                        alt={productData.name || 'Product'}
                        onError={(e) => { e.target.src = assets.placeholder_image; }}
                      />
                    </div>

                    {/* Body */}
                    <div className="c-body">

                      {/* Name + meta */}
                      <div style={{ flex: '1 1 180px', minWidth: 0 }}>
                        <p style={{
                          fontSize: 8, color: '#8a6830', letterSpacing: '0.3em',
                          fontFamily: 'Montserrat,sans-serif', marginBottom: 5,
                        }}>LAMBSKIN LEATHER</p>
                        <p style={{
                          fontSize: 'clamp(13px,2vw,15px)', color: '#f0ddc0',
                          fontFamily: "'Cormorant Garamond',serif",
                          lineHeight: 1.4, marginBottom: 10,
                          display: '-webkit-box', WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}>
                          {productData.name}
                        </p>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                          {item.size  && <span className="cpg">SIZE: {item.size}</span>}
                          {item.color && <span className="cpd">{item.color}</span>}
                        </div>
                      </div>

                      {/* Price */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flexShrink: 0 }}>
                        {discountPercent > 0 && (
                          <span style={{
                            fontSize: 11, color: 'rgba(240,220,190,0.45)',
                            textDecoration: 'line-through', fontFamily: 'Montserrat,sans-serif',
                          }}>{currency}{originalPrice.toFixed(2)}</span>
                        )}
                        <span style={{
                          fontSize: 19, color: '#f7c568',
                          fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, lineHeight: 1,
                        }}>{currency}{salePrice.toFixed(2)}</span>
                        {discountPercent > 0 && (
                          <span style={{
                            fontSize: 8, color: '#4ade80',
                            fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.1em',
                          }}>SAVE {currency}{discountAmount.toFixed(2)} ({discountPercent}% OFF)</span>
                        )}
                        {item.customPrice > 0 && (
                          <span style={{
                            fontSize: 8, color: 'rgba(200,151,58,0.55)',
                            fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.08em',
                          }}>+ Lining {currency}{item.customPrice.toFixed(2)}</span>
                        )}
                      </div>

                      {/* Qty stepper */}
                      <div className="c-qty-wrap">
                        <button
                          className="c-qty-btn"
                          disabled={item.quantity <= 1}
                          onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
                        ><IcoMinus /></button>
                        <input
                          className="c-qty-val"
                          type="number" min={1}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item._id, item.size, item.color, Number(e.target.value) || 1)}
                        />
                        <button
                          className="c-qty-btn"
                          onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
                        ><IcoPlus /></button>
                      </div>

                      {/* Line total + delete together */}
                      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8, flexShrink:0 }}>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{
                            fontSize: 8, color: '#8a6830', fontFamily: 'Montserrat,sans-serif',
                            letterSpacing: '0.2em', marginBottom: 3,
                          }}>LINE TOTAL</p>
                          <p style={{
                            fontSize: 18, color: '#f7c568',
                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 600,
                          }}>{currency}{lineTotal.toFixed(2)}</p>
                        </div>
                        {/* Delete inline */}
                        <button
                          className="c-del-inline"
                          title="Remove item"
                          onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
                        >
                          <IcoTrash />
                          <span style={{ fontSize:8, letterSpacing:'0.14em', fontFamily:'Montserrat,sans-serif', fontWeight:600 }}>REMOVE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Subtle item count footer */}
              <div style={{
                paddingTop: 12, paddingRight: 4,
                display: 'flex', justifyContent: 'flex-end',
              }}>
                <p style={{
                  fontSize: 9, color: 'rgba(200,151,58,0.35)',
                  fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.2em',
                }}>
                  {cartData.length} {cartData.length === 1 ? 'PRODUCT' : 'PRODUCTS'} · {totalItems} {totalItems === 1 ? 'UNIT' : 'UNITS'}
                </p>
              </div>
            </div>

            {/* ── RIGHT: Summary panel — single unified card ── */}
            <div
              className="c-panel"
              style={{
                flex: '0 0 340px', minWidth: 280,
                position: 'sticky', top: 24, alignSelf: 'flex-start',
                background: 'linear-gradient(160deg,#1e120a,#150c05)',
                border: '1px solid rgba(200,151,58,0.18)',
                borderRadius: 10, overflow: 'hidden',
              }}
            >
              {/* Gold top bar */}
              <div style={{ height: 2, background: 'linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)', opacity: 0.6 }}/>

              <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>

                {/* CartTotal rows */}
                <CartTotal />

                {/* Gap before buttons */}
                <div style={{ height: 16 }}/>

                {/* Checkout */}
                <button
                  className="c-cta"
                  onClick={() => navigate('/place-order')}
                  disabled={isCartEmpty}
                >
                  PROCEED TO CHECKOUT <IcoArrow />
                </button>

                <div style={{ height: 10 }}/>

                {/* Continue shopping */}
                <button
                  className="c-cont"
                  onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
                >
                  <IcoBack /> CONTINUE SHOPPING
                </button>

                <div style={{ height: 16 }}/>

                {/* Thin divider */}
                <div style={{ height: 1, background: 'linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent)', marginBottom: 16 }}/>

                {/* Trust strip */}
                <p style={{
                  fontSize: 8, color: 'rgba(200,151,58,0.28)',
                  fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.32em',
                  marginBottom: 12,
                }}>WHY SHOP WITH US</p>

                {[
                  { icon: <IcoShield />, label: 'SECURE CHECKOUT',    sub: 'SSL encrypted payment' },
                  { icon: <IcoPin />,    label: 'TRACKED SHIPPING',    sub: 'Real-time order updates' },
                  { icon: <IcoReturn />, label: '7-DAY EASY RETURNS',  sub: 'Hassle-free returns' },
                ].map((b) => (
                  <div key={b.label} className="c-badge" style={{ marginBottom: 10 }}>
                    <div className="c-badge-ico">{b.icon}</div>
                    <div>
                      <p style={{
                        fontSize: 8, fontFamily: 'Montserrat,sans-serif',
                        letterSpacing: '0.18em', color: 'rgba(200,151,58,0.6)', margin: 0,
                      }}>{b.label}</p>
                      <p style={{
                        fontSize: 8, fontFamily: 'Montserrat,sans-serif',
                        color: 'rgba(200,151,58,0.3)', marginTop: 1,
                      }}>{b.sub}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;




// import React from 'react'
// import { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';
// import { IoMdClose } from 'react-icons/io';

// const Cart = () => {
//     const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//     useEffect(() => {
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
//     <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      
//     </div>
//   )
// }

// export default Cart
