// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';

// const CartTotal = () => {

//     const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

//   return (
//     <div className='w-full'>
//       <div className='text-2xl'>
//         <Title text1={'CART'} text2={'TOTALS'} />
//       </div>

//       <div className='flex flex-col gap-2 mt-2 text-sm'>
//             <div className='flex justify-between'>
//                 <p>Subtotal</p>
//                 <p>{currency} {getCartAmount()}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <p>Shipping Fee</p>
//                 <p>{currency} {delivery_fee}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <b>Total</b>
//                 <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default CartTotal


// import React, { useContext, useMemo } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';

// const CartTotal = () => {
//   const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

//   // Memoize calculations to avoid re-runs on every render and fix floating-point precision
//   const subtotal = useMemo(() => {
//     const amount = getCartAmount();
//     return amount === 0 ? 0 : Math.round(amount * 100) / 100; // Round to 2 decimals
//   }, [getCartAmount]);

//   const total = useMemo(() => {
//     return subtotal === 0 ? 0 : Math.round((subtotal + delivery_fee) * 100) / 100; // Round total too
//   }, [subtotal, delivery_fee]);

//   // Format as string with 2 decimals (handles .00 cleanly)
//   const formatPrice = (price) => `${currency} ${price.toFixed(2)}`;

//   return (
//     <div className="w-full">
//   {/* Heading */}
//   <div className="text-xl sm:text-2xl mb-3">
//     <Title text1={"CART"} text2={"TOTALS"} />
//   </div>

//   {/* Summary Box */}
//   <div className="flex flex-col gap-3 mt-3 p-4 sm:p-5 bg-gray-50 rounded-lg border text-sm sm:text-base">

//     <div className="flex justify-between">
//       <p className="text-gray-700">Subtotal</p>
//       <p className="font-medium">{formatPrice(subtotal)}</p>
//     </div>

//     <hr />

//     <div className="flex justify-between">
//       <p className="text-gray-700">Shipping Fee</p>
//       <p className="font-medium">{formatPrice(delivery_fee)}</p>
//     </div>

//     <hr />

//     <div className="flex justify-between">
//       <b className="text-gray-900">Total</b>
//       <b className="text-gray-900">{formatPrice(total)}</b>
//     </div>

//   </div>
// </div>

//   );
// };

// export default CartTotal;


// import React, { useContext, useMemo } from 'react';
// import { ShopContext } from '../context/ShopContext';

// const CartTotal = () => {
//   const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

//   const subtotal = useMemo(() => {
//     const amount = getCartAmount();
//     return amount === 0 ? 0 : Math.round(amount * 100) / 100;
//   }, [getCartAmount]);

//   const total = useMemo(() => {
//     return subtotal === 0 ? 0 : Math.round((subtotal + delivery_fee) * 100) / 100;
//   }, [subtotal, delivery_fee]);

//   const fmt = (p) => `${currency}${Number(p).toFixed(2)}`;

//   return (
//     <>
//       <style>{`
//         @keyframes ctSlide {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .ct-panel { animation: ctSlide 0.45s cubic-bezier(0.16,1,0.3,1) both; }
//         .ct-row-item { animation: ctSlide 0.4s ease both; }
//         .ct-row-item:nth-child(1){ animation-delay:0.07s; }
//         .ct-row-item:nth-child(2){ animation-delay:0.13s; }
//         .ct-divider {
//           height:1px;
//           background:linear-gradient(to right,transparent,rgba(200,151,58,0.18),transparent);
//         }
//       `}</style>

//       <div className="ct-panel w-full" style={{ fontFamily: "Georgia,serif" }}>

//         {/* ── Header ── */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
//           <span style={{ fontSize: 9, letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Arial,sans-serif", fontWeight: 700, textTransform: "uppercase" }}>
//             ORDER SUMMARY
//           </span>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
//         </div>

//         {/* ── Main panel ── */}
//         <div style={{
//           background: "linear-gradient(160deg,#1e120a 0%,#150c05 100%)",
//           border: "1px solid rgba(200,151,58,0.18)",
//           borderRadius: 3,
//           overflow: "hidden",
//         }}>
//           {/* Gold top accent */}
//           <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

//           {/* Rows */}
//           <div style={{ padding: "20px 22px 16px", display: "flex", flexDirection: "column", gap: 14 }}>

//             {/* Subtotal */}
//             <div className="ct-row-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//                   <rect x="3" y="3" width="18" height="18" rx="2" stroke="#c8973a" strokeWidth="1.4" />
//                   <path d="M8 8h8M8 12h5" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//                 </svg>
//                 <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>Subtotal</span>
//               </div>
//               <span style={{ fontSize: 14, color: "#f5ede0", letterSpacing: "0.03em" }}>{fmt(subtotal)}</span>
//             </div>

//             <div className="ct-divider" />

//             {/* Delivery */}
//             <div className="ct-row-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//                   <path d="M1 3h15v13H1z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
//                   <path d="M16 8h4l3 4v4h-7V8z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
//                   <circle cx="5.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" />
//                   <circle cx="18.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" />
//                 </svg>
//                 <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>Delivery</span>
//               </div>
//               <span style={{ fontSize: 14, color: "#f5ede0" }}>{fmt(delivery_fee)}</span>
//             </div>
//           </div>

//           {/* ── Total row ── */}
//           <div style={{ borderTop: "1px solid rgba(200,151,58,0.15)", padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", background: "rgba(0,0,0,0.18)" }}>
//             <div>
//               <p style={{ fontSize: 8, letterSpacing: "0.35em", color: "#c8973a", textTransform: "uppercase", marginBottom: 3, fontFamily: "Arial" }}>TOTAL DUE</p>
//               <p style={{ fontSize: 10, color: "#a08060", fontStyle: "italic" }}>All taxes included</p>
//             </div>
//             <p style={{ fontSize: 24, color: "#f7c568", fontWeight: 400, lineHeight: 1, letterSpacing: "0.02em" }}>
//               {fmt(total)}
//             </p>
//           </div>

//           {/* ── Trust badges ── */}
//           <div style={{ borderTop: "1px solid rgba(200,151,58,0.08)", background: "rgba(0,0,0,0.25)", padding: "11px 22px", display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
//             {[
//               { label: "Secure Checkout", icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="#c8973a" strokeWidth="1.4" /><path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
//               { label: "Tracked Shipping", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#c8973a" strokeWidth="1.4" /><path d="M12 7v5l3 3" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" /></svg> },
//               { label: "Easy Returns", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14.93-4H15" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 4v4h-4" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg> },
//             ].map((b, i) => (
//               <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
//                 {b.icon}
//                 <span style={{ fontSize: 9, color: "#8a7060", letterSpacing: "0.1em" }}>{b.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartTotal;



// import React, { useContext, useMemo } from "react";
// import { ShopContext } from "../context/ShopContext";

// const CartTotal = () => {

//   const { cartItems, products, currency, delivery_fee } = useContext(ShopContext);

//   const { itemsTotal, discount, subtotal } = useMemo(() => {

//     let itemsTotalCalc = 0;
//     let discountCalc = 0;
//     let subtotalCalc = 0;

//     for (const productId in cartItems) {

//       const product = products.find(p => p._id === productId);
//       if (!product) continue;

//       const originalPrice = Number(product.price);
//       const discountPercent = Number(product.discountPrice) || 0;

//       const discountAmount =
//         discountPercent > 0 && discountPercent < 100
//           ? (originalPrice * discountPercent) / 100
//           : 0;

//       const salePrice = originalPrice - discountAmount;

//       for (const comboKey in cartItems[productId]) {

//         const item = cartItems[productId][comboKey];

//         const qty =
//           typeof item === "number"
//             ? item
//             : Number(item?.quantity) || 0;

//         const extra =
//           typeof item === "number"
//             ? 0
//             : Number(item?.customPrice) || 0;

//         itemsTotalCalc += (originalPrice + extra) * qty;
//         subtotalCalc += (salePrice + extra) * qty;
//         discountCalc += discountAmount * qty;
//       }
//     }

//     return {
//       itemsTotal: Number(itemsTotalCalc.toFixed(2)),
//       discount: Number(discountCalc.toFixed(2)),
//       subtotal: Number(subtotalCalc.toFixed(2))
//     };

//   }, [cartItems, products]);


//   const total = subtotal + delivery_fee;

//   const fmt = (p) => `${currency}${Number(p).toFixed(2)}`;

//   return (
//     <>
//       <style>{`
//         @keyframes ctSlide {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .ct-panel { animation: ctSlide 0.45s cubic-bezier(0.16,1,0.3,1) both; }
//         .ct-row-item { animation: ctSlide 0.4s ease both; }
//         .ct-row-item:nth-child(1){ animation-delay:0.07s; }
//         .ct-row-item:nth-child(2){ animation-delay:0.13s; }
//         .ct-row-item:nth-child(3){ animation-delay:0.18s; }
//         .ct-divider {
//           height:1px;
//           background:linear-gradient(to right,transparent,rgba(200,151,58,0.18),transparent);
//         }
//       `}</style>

//       <div className="ct-panel w-full" style={{ fontFamily: "Georgia,serif" }}>

//         {/* Header */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
//           <span style={{ fontSize: 9, letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Arial,sans-serif", fontWeight: 700 }}>
//             ORDER SUMMARY
//           </span>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
//         </div>

//         {/* Main Panel */}
//         <div style={{
//           background: "linear-gradient(160deg,#1e120a 0%,#150c05 100%)",
//           border: "1px solid rgba(200,151,58,0.18)",
//           borderRadius: 3,
//           overflow: "hidden",
//         }}>

//           <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

//           <div style={{ padding: "20px 22px 16px", display: "flex", flexDirection: "column", gap: 14 }}>

//             {/* Items Total */}
//             <div className="ct-row-item" style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>Items Total</span>
//               <span style={{ color: "#f5ede0" }}>{fmt(itemsTotal)}</span>
//             </div>

//             <div className="ct-divider" />

//             {/* Discount */}
//             <div className="ct-row-item" style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>Discount</span>
//               <span style={{ color: "#63d471" }}>-{fmt(discount)}</span>
//             </div>

//             <div className="ct-divider" />

//             {/* Subtotal */}
//             <div className="ct-row-item" style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>Subtotal</span>
//               <span style={{ color: "#f5ede0" }}>{fmt(subtotal)}</span>
//             </div>

//             <div className="ct-divider" />

//             {/* Delivery */}
//             <div className="ct-row-item" style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>Delivery</span>
//               <span style={{ color: "#f5ede0" }}>{fmt(delivery_fee)}</span>
//             </div>

//           </div>

//           {/* Total */}
//           <div style={{
//             borderTop: "1px solid rgba(200,151,58,0.15)",
//             padding: "16px 22px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-end",
//             background: "rgba(0,0,0,0.18)"
//           }}>
//             <div>
//               <p style={{ fontSize: 8, letterSpacing: "0.35em", color: "#c8973a", marginBottom: 3 }}>
//                 TOTAL DUE
//               </p>
//               <p style={{ fontSize: 10, color: "#a08060", fontStyle: "italic" }}>
//                 All taxes included
//               </p>
//             </div>

//             <p style={{
//               fontSize: 24,
//               color: "#f7c568",
//               letterSpacing: "0.02em"
//             }}>
//               {fmt(total)}
//             </p>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default CartTotal;



// import React, { useContext, useMemo } from "react";
// import { ShopContext } from "../context/ShopContext";

// const CartTotal = () => {

//   const { cartItems, products, currency, delivery_fee } = useContext(ShopContext);

//   const { itemsTotal, discount, subtotal } = useMemo(() => {

//     let itemsTotalCalc = 0;
//     let discountCalc = 0;
//     let subtotalCalc = 0;

//     for (const productId in cartItems) {

//       const product = products.find(p => p._id === productId);
//       if (!product) continue;

//       const original = Number(product.price);
//       const discountPercent = Number(product.discountPrice) || 0;

//       const discountAmount =
//         discountPercent > 0 && discountPercent < 100
//           ? (original * discountPercent) / 100
//           : 0;

//       const salePrice = original - discountAmount;

//       for (const comboKey in cartItems[productId]) {

//         const item = cartItems[productId][comboKey];

//         const qty =
//           typeof item === "number"
//             ? item
//             : Number(item?.quantity) || 0;

//         const extra =
//           typeof item === "number"
//             ? 0
//             : Number(item?.customPrice) || 0;

//         itemsTotalCalc += (original + extra) * qty;
//         subtotalCalc += (salePrice + extra) * qty;
//         discountCalc += discountAmount * qty;
//       }
//     }

//     return {
//       itemsTotal: Number(itemsTotalCalc.toFixed(2)),
//       discount: Number(discountCalc.toFixed(2)),
//       subtotal: Number(subtotalCalc.toFixed(2))
//     };

//   }, [cartItems, products]);

//   const total = subtotal + delivery_fee;

//   const fmt = (p) => `${currency}${Number(p).toFixed(2)}`;

//   return (
//     <>
//       <style>{`
//         @keyframes ctSlide {
//           from { opacity:0; transform:translateY(10px); }
//           to { opacity:1; transform:translateY(0); }
//         }

//         .ct-panel{
//           animation:ctSlide .45s cubic-bezier(.16,1,.3,1) both;
//         }

//         .ct-divider{
//           height:1px;
//           background:linear-gradient(to right,transparent,rgba(200,151,58,.18),transparent);
//         }
//       `}</style>

//       <div className="ct-panel w-full" style={{ fontFamily: "Georgia,serif" }}>

//         {/* ORDER SUMMARY TITLE */}
//         <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,.25))" }} />
//           <span style={{ fontSize: 9, letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700 }}>
//             ORDER SUMMARY
//           </span>
//           <span style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,.25))" }} />
//         </div>

//         {/* SAVINGS BANNER */}
//         {discount > 0 && (
//           <div style={{
//             background: "rgba(200,151,58,0.08)",
//             border: "1px solid rgba(200,151,58,0.25)",
//             padding: "10px 14px",
//             marginBottom: 14,
//             borderRadius: 3,
//             textAlign: "center"
//           }}>
//             <span style={{
//               color: "#f7c568",
//               fontSize: 12,
//               letterSpacing: "0.08em"
//             }}>
//               You saved {fmt(discount)} today
//             </span>
//           </div>
//         )}

//         {/* MAIN BOX */}
//         <div style={{
//           background: "linear-gradient(160deg,#1e120a 0%,#150c05 100%)",
//           border: "1px solid rgba(200,151,58,.18)",
//           borderRadius: 3,
//           overflow: "hidden"
//         }}>

//           <div style={{
//             height: 2,
//             background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)",
//             opacity: .6
//           }} />

//           <div style={{
//             padding: "20px 22px",
//             display: "flex",
//             flexDirection: "column",
//             gap: 14
//           }}>

//             {/* ITEMS TOTAL */}
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>
//                 Items Total
//               </span>
//               <span style={{ color: "#f5ede0" }}>
//                 {fmt(itemsTotal)}
//               </span>
//             </div>

//             <div className="ct-divider" />

//             {/* DISCOUNT */}
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>
//                 Discount
//               </span>
//               <span style={{ color: "#63d471" }}>
//                 -{fmt(discount)}
//               </span>
//             </div>

//             <div className="ct-divider" />

//             {/* SUBTOTAL */}
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>
//                 Subtotal
//               </span>
//               <span style={{ color: "#f5ede0" }}>
//                 {fmt(subtotal)}
//               </span>
//             </div>

//             <div className="ct-divider" />

//             {/* DELIVERY */}
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ fontSize: 12, color: "#c4a070", fontStyle: "italic" }}>
//                 Delivery
//               </span>
//               <span style={{ color: "#f5ede0" }}>
//                 {fmt(delivery_fee)}
//               </span>
//             </div>

//           </div>

//           {/* TOTAL */}
//           <div style={{
//             borderTop: "1px solid rgba(200,151,58,.15)",
//             padding: "16px 22px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-end",
//             background: "rgba(0,0,0,.18)"
//           }}>
//             <div>
//               <p style={{
//                 fontSize: 8,
//                 letterSpacing: "0.35em",
//                 color: "#c8973a",
//                 marginBottom: 3
//               }}>
//                 TOTAL DUE
//               </p>
//               <p style={{
//                 fontSize: 10,
//                 color: "#a08060",
//                 fontStyle: "italic"
//               }}>
//                 All taxes included
//               </p>
//             </div>

//             <p style={{
//               fontSize: 24,
//               color: "#f7c568",
//               letterSpacing: "0.02em"
//             }}>
//               {fmt(total)}
//             </p>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default CartTotal;

import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@400;500;600;700&display=swap');

  @keyframes ctUp {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .ct-root { animation: ctUp 0.45s cubic-bezier(.16,1,.3,1) both; width:100%; }

  /* ── Each row ── */
  .ct-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
  }

  /* ── Thin divider between rows ── */
  .ct-div {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(200,151,58,0.14), transparent);
  }

  /* ── Label (left side) ── */
  .ct-lbl {
    font-size: 13px;
    color: #c4a060;
    font-style: italic;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 400;
  }

  /* ── Normal value (right side) ── */
  .ct-val {
    font-size: 14px;
    color: #f0ddc0;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500;
  }

  /* ── Discount value — green ── */
  .ct-val-disc {
    font-size: 14px;
    color: #4ade80;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500;
  }

  /* ── Total row ── */
  .ct-total-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 14px 0 0;
    margin-top: 4px;
    border-top: 1px solid rgba(200,151,58,0.2);
  }
`;

const CartTotal = () => {
  const { cartItems, products, currency, delivery_fee } = useContext(ShopContext);

  /* ── Original calculation logic — untouched ── */
  const { itemsTotal, discount, subtotal } = useMemo(() => {
    let itemsTotalCalc = 0;
    let discountCalc = 0;
    let subtotalCalc = 0;

    for (const productId in cartItems) {
      const product = products.find(p => p._id === productId);
      if (!product) continue;

      const original = Number(product.price);
      const discountPercent = Number(product.discountPrice) || 0;
      const discountAmount = discountPercent > 0 && discountPercent < 100
        ? (original * discountPercent) / 100 : 0;
      const salePrice = original - discountAmount;

      for (const comboKey in cartItems[productId]) {
        const item = cartItems[productId][comboKey];
        const qty = typeof item === "number" ? item : Number(item?.quantity) || 0;
        const extra = typeof item === "number" ? 0 : Number(item?.customPrice) || 0;
        itemsTotalCalc += (original + extra) * qty;
        subtotalCalc += (salePrice + extra) * qty;
        discountCalc += discountAmount * qty;
      }
    }

    return {
      itemsTotal: Number(itemsTotalCalc.toFixed(2)),
      discount: Number(discountCalc.toFixed(2)),
      subtotal: Number(subtotalCalc.toFixed(2)),
    };
  }, [cartItems, products]);

  const total = subtotal + delivery_fee;
  const fmt = (p) => `${currency}${Number(p).toFixed(2)}`;

  return (
    <>
      <style>{STYLES}</style>

      <div className="ct-root">

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10, marginBottom: 16,
        }}>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
          <span style={{
            fontSize: 9, letterSpacing: "0.38em", color: "#c8973a",
            fontFamily: "Montserrat, sans-serif", fontWeight: 700, whiteSpace: "nowrap",
          }}>ORDER SUMMARY</span>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
        </div>

        {/* ── Savings banner ── */}
        {discount > 0 && (
          <div style={{
            background: "rgba(74,222,128,0.07)",
            border: "1px solid rgba(74,222,128,0.22)",
            borderRadius: 6, padding: "10px 16px",
            marginBottom: 16, textAlign: "center",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
          }}>
            <span style={{ color: "#4ade80", fontSize: 11 }}>✦</span>
            <span style={{
              fontSize: 13, color: "#4ade80",
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            }}>
              You saved {fmt(discount)} today
            </span>
          </div>
        )}

        {/* ── Row: Items Total ── */}
        <div className="ct-row">
          <span className="ct-lbl">Items Total</span>
          <span className="ct-val">{fmt(itemsTotal)}</span>
        </div>
        <div className="ct-div" />

        {/* ── Row: Discount ── */}
        <div className="ct-row">
          <span className="ct-lbl">Discount</span>
          <span className={discount > 0 ? "ct-val-disc" : "ct-val"}>
            {discount > 0 ? `−${fmt(discount)}` : fmt(0)}
          </span>
        </div>
        <div className="ct-div" />

        {/* ── Row: Subtotal ── */}
        <div className="ct-row">
          <span className="ct-lbl">Subtotal</span>
          <span className="ct-val">{fmt(subtotal)}</span>
        </div>
        <div className="ct-div" />

        {/* ── Row: Delivery ── */}
        <div className="ct-row">
          <span className="ct-lbl">Delivery</span>
          <span className="ct-val">{fmt(delivery_fee)}</span>
        </div>

        {/* ── Total ── */}
        <div className="ct-total-row">
          <div>
            <p style={{
              fontSize: 8, letterSpacing: "0.4em", color: "#c8973a",
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              marginBottom: 4, textTransform: "uppercase",
            }}>Total Due</p>
            <p style={{
              fontSize: 11, color: "#7a5c2a",
              fontStyle: "italic", fontFamily: "Georgia, serif",
            }}>All taxes included</p>
          </div>
          <p style={{
            fontSize: 28, color: "#f7c568", letterSpacing: "0.02em",
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
            lineHeight: 1,
          }}>
            {fmt(total)}
          </p>
        </div>

      </div>
    </>
  );
};

export default CartTotal;