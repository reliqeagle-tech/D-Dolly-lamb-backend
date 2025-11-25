
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


import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const itemKey in cartItems[items]) {
          const raw = cartItems[items][itemKey];
          const quantity = typeof raw === 'number' ? raw : (raw?.quantity || 0);
          const customPrice = typeof raw === 'number' ? 0 : (raw?.customPrice || 0);

          if (quantity > 0) {
            const [size, color] = itemKey.includes('-') ? itemKey.split('-') : [itemKey, ''];

            tempData.push({
              _id: items,
              size,
              color,
              quantity,
              customPrice
            });
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
    <div className='border-t pt-14 p-24'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {isCartEmpty ? (
        <div className="text-center py-20 text-gray-500">
          <p>Your cart is empty.</p>
          <button
            onClick={() => navigate('/collection')}
            className="mt-6 px-6 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              if (!productData) {
                console.warn(`⚠️ Product not found for id: ${item._id}`);
                return null;
              }

              const imageSrc = Array.isArray(productData.image)
                ? productData.image[0]
                : productData.image || assets.placeholder_image;

              const unitPrice = productData.price + item.customPrice;  // ✅ Base + Custom
              const lineTotal = unitPrice * item.quantity;

              return (
                <div
                  key={`${item._id}-${item.size}-${item.color}-${index}`}
                  className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                >
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 sm:w-20 object-cover rounded"
                      src={imageSrc}
                      alt={productData.name || "Product"}
                      onError={(e) => { e.target.src = assets.placeholder_image; }}
                    />
                    <div>
                      <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                      <div className="flex items-center gap-5 mt-2 flex-wrap">
                        <div className="flex flex-col">
                          <p className="font-semibold">{currency}{unitPrice.toFixed(2)}</p>  {/* ✅ $209.98 */}
                          {item.customPrice > 0 && (
                            <p className="text-xs text-green-600">Base: {currency}{productData.price.toFixed(2)} + Lining: {currency}{item.customPrice.toFixed(2)}</p> 
                          )}
                          <p className="text-sm text-gray-600">Qty: {item.quantity} | Line Total: {currency}{lineTotal.toFixed(2)}</p>
                        </div>
                        
                        <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                        {item.color && (
                          <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs sm:text-sm">
                            {item.color}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <input
                    onChange={(e) => updateQuantity(item._id, item.size, item.color, Number(e.target.value) || 0)}
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                    type="number"
                    min={1}
                    value={item.quantity}
                  />

                  <img
                    onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
                    className="w-4 mr-4 sm:w-5 cursor-pointer"
                    src={assets.bin_icon}
                    alt="Delete"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />  {/* Assumes it uses getCartAmount() — now with custom */}

              <div className="w-full text-end">
                <button
                  onClick={() => navigate('/place-order')}
                  disabled={isCartEmpty}
                  className={`text-sm my-8 px-8 py-3 rounded-md font-semibold transition-all
                    ${isCartEmpty ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-900'}`}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
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
