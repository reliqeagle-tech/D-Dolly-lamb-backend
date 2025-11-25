
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


import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { RiDeleteBin3Fill, RiDeleteBin3Line } from 'react-icons/ri'
import { ImBin } from "react-icons/im";
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'

const CartContent = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const variant in cartItems[items]) {  // Rename 'item' to 'variant' for clarity
          const raw = cartItems[items][variant];  // ✅ Extract raw (object or number)
          const quantity = typeof raw === 'number' ? raw : (raw?.quantity || 0);  // ✅ Handle object
          const customPrice = typeof raw === 'number' ? 0 : (raw?.customPrice || 0);  // ✅ Extract custom

          if (quantity > 0) {
            const [size, color] = variant.split('-');  // Parse: "S-Red" → size="S", color="Red"
            if (!size || !color) continue;  // Skip invalid keys
            tempData.push({
              _id: items,
              size,
              color,  // Add color!
              quantity,
              customPrice  // ✅ Add customPrice
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
    <div>
  <div className="text-xl sm:text-2xl mb-3">
    <Title text1={"YOUR"} text2={"CART"} />
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
      {/* CART ITEMS */}
      <div className="space-y-6">
        {cartData.map((item, index) => {
          const productData = products.find((p) => p._id === item._id);
          if (!productData) return null;

          const imageSrc = Array.isArray(productData.image)
            ? productData.image[0]
            : productData.image || assets.placeholder_image;

          const unitPrice = productData.price + item.customPrice;
          const lineTotal = unitPrice * item.quantity;

          return (
            <div
              key={`${item._id}-${item.size}-${item.color}-${index}`}
              className="
                border-b pb-4 
                grid grid-cols-1
                sm:grid-cols-[1fr_auto_auto] 
                gap-4
              "
            >
              {/* LEFT: IMAGE + DETAILS */}
              <div className="flex items-start gap-4 sm:gap-6">
                <img
                  className="w-16 sm:w-20 object-cover rounded"
                  src={imageSrc}
                  alt={productData.name}
                  onError={(e) => {
                    e.target.src = assets.placeholder_image;
                  }}
                />

                <div className="text-sm">
                  <p className="font-medium">{productData.name}</p>

                  {/* Attributes */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <p className="px-2 py-1 border bg-slate-50 text-xs">
                      {item.size}
                    </p>
                    <p className="px-2 py-1 border bg-slate-50 text-xs">
                      {item.color}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mt-2">
                    <p className="font-semibold">
                      {currency}
                      {unitPrice.toFixed(2)}
                    </p>

                    {item.customPrice > 0 && (
                      <p className="text-xs text-green-600 leading-tight">
                        Base: {currency}
                        {productData.price.toFixed(2)} + Custom: {currency}
                        {item.customPrice.toFixed(2)}
                      </p>
                    )}

                    <p className="text-xs text-gray-600">
                      Qty: {item.quantity} | Line Total: {currency}
                      {lineTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* MIDDLE: QUANTITY CONTROLS */}
              <div className="flex justify-start sm:justify-center items-center space-x-1">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item._id,
                      item.size,
                      item.color,
                      Math.max(1, item.quantity - 1)
                    )
                  }
                  disabled={item.quantity <= 1}
                  className="
                    w-8 h-8 border border-gray-300 bg-white 
                    rounded-l-md text-gray-500 
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:bg-gray-50 transition
                  "
                >
                  <RiSubtractLine className="w-4 h-4" />
                </button>

                <input
                  type="number"
                  min="1"
                  max="99"
                  value={item.quantity}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (e.target.value === '' || val === 0) return;
                    updateQuantity(item._id, item.size, item.color, val);
                  }}
                  className="
                    w-14 h-8 border-y border-gray-300 bg-white 
                    text-center text-sm font-medium 
                    focus:ring-blue-500 focus:ring-1 outline-none
                    appearance-none
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item._id,
                      item.size,
                      item.color,
                      item.quantity + 1
                    )
                  }
                  className="
                    w-8 h-8 border border-gray-300 bg-white 
                    rounded-r-md text-gray-500 
                    hover:bg-gray-50 transition
                  "
                >
                  <RiAddLine className="w-4 h-4" />
                </button>
              </div>

              {/* RIGHT: DELETE BTN */}
              <div className="flex justify-start sm:justify-center">
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.size, item.color, 0)
                  }
                >
                  <ImBin className="h-5 w-5 text-red-600 cursor-pointer" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* CART TOTAL SECTION */}
      <div className="flex justify-end my-14">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </>
  )}
</div>

  );
}

export default CartContent;
