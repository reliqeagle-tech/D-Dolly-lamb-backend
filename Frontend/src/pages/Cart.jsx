// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// /* ─────────────────────────────────────────────────────────────
//    STYLES
// ───────────────────────────────────────────────────────────── */
// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

//   :root {
//     --bg:      #120b06;
//     --card:    #1a100a;
//     --card2:   #1f1209;
//     --gold:    #c8973a;
//     --glt:     #f7c568;
//     --cream:   #f0ddc0;
//     --bdr:     rgba(200,151,58,0.18);
//     --bdr-h:   rgba(200,151,58,0.42);
//     --dim:     #8a6830;
//   }

//   @keyframes cUp   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
//   @keyframes cIn   { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
//   @keyframes cPnl  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
//   @keyframes cShim {
//     0%  {background-position:-600px 0}
//     100%{background-position: 600px 0}
//   }

//   .c-page  { animation: cUp  0.5s cubic-bezier(0.16,1,0.3,1) both; }
//   .c-row   { animation: cIn  0.42s cubic-bezier(0.16,1,0.3,1) both; }
//   .c-panel { animation: cPnl 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s both; }

//   /* ── Cart item card ── */
//   .c-item {
//     position: relative;
//     display: flex;
//     align-items: stretch;
//     background: linear-gradient(135deg, var(--card), var(--card2));
//     border: 1px solid var(--bdr);
//     border-radius: 12px;
//     overflow: hidden;
//     transition: border-color 0.28s, box-shadow 0.28s, transform 0.28s;
//   }
//   .c-item::before {
//     content:'';
//     position:absolute; top:0; left:0; right:0; height:1.5px;
//     background:linear-gradient(to right,transparent,var(--gold) 30%,var(--glt) 50%,var(--gold) 70%,transparent);
//     opacity:0; transition:opacity 0.3s;
//   }
//   .c-item:hover { border-color:var(--bdr-h); box-shadow:0 14px 44px rgba(0,0,0,0.55); transform:translateY(-1px); }
//   .c-item:hover::before { opacity:0.6; }

//   /* Image */
//   .c-img-wrap {
//     flex-shrink:0; width:120px; height:120px; background:#fff;
//     border-right:1px solid rgba(200,151,58,0.1);
//     overflow:hidden; min-height:110px;
//   }
//   @media(max-width:540px){ .c-img-wrap{width:80px;} }
//   .c-img {
//     width:100%; height:100%; object-fit:contain; padding:10px; display:block;
//     transition:transform 0.55s cubic-bezier(0.16,1,0.3,1);
//   }
//   .c-item:hover .c-img { transform:scale(1.07); }

//   /* Body */
//   .c-body {
//     flex:1; padding:16px 18px 16px 16px;
//     display:flex; align-items:center; flex-wrap:wrap; gap:14px; min-width:0;
//   }
//   @media(max-width:600px){ .c-body{padding:12px 14px;} }

//   /* Qty control */
//   .c-qty-wrap {
//     display:flex; align-items:center; gap:8px;
//     background:rgba(200,151,58,0.05);
//     border:1px solid rgba(200,151,58,0.18);
//     border-radius:30px; padding:4px 6px;
//   }
//   .c-qty-btn {
//     width:26px; height:26px; border-radius:50%;
//     display:flex; align-items:center; justify-content:center;
//     background:rgba(200,151,58,0.08);
//     border:1px solid rgba(200,151,58,0.22);
//     color:rgba(200,151,58,0.7); cursor:pointer;
//     transition:all 0.18s; flex-shrink:0; outline:none;
//   }
//   .c-qty-btn:hover  { background:rgba(200,151,58,0.22); color:var(--glt); border-color:var(--gold); }
//   .c-qty-btn:disabled { opacity:0.3; cursor:default; }
//   .c-qty-val {
//     width:30px; text-align:center;
//     background:transparent; border:none; outline:none;
//     font-size:14px; font-weight:600; color:var(--cream);
//     font-family:'Cormorant Garamond',serif;
//   }
//   .c-qty-val::-webkit-inner-spin-button,
//   .c-qty-val::-webkit-outer-spin-button { -webkit-appearance:none; }

//   /* Inline remove button */
//   .c-del-inline {
//     display:inline-flex; align-items:center; gap:5px;
//     padding:5px 12px; border-radius:6px;
//     background:rgba(16,2,2,0.85);
//     border:1.5px solid rgba(200,50,50,0.5);
//     color:#f87171; cursor:pointer;
//     transition:all 0.22s; outline:none;
//     font-size:8px;
//   }
//   .c-del-inline:hover {
//     background:rgba(90,8,8,0.95); border-color:#ff5555; color:#fff;
//     box-shadow:0 3px 12px rgba(200,30,30,0.35);
//   }

//   /* Summary card */
//   .c-summary {
//     background:linear-gradient(160deg,var(--card),var(--card2));
//     border:1px solid var(--bdr); border-radius:12px; overflow:hidden;
//     position:sticky; top:24px;
//   }
//   .c-sumbar {
//     height:2px;
//     background:linear-gradient(to right,transparent,var(--gold) 30%,var(--glt) 50%,var(--gold) 70%,transparent);
//     opacity:0.65;
//   }

//   /* Checkout CTA */
//   .c-cta {
//     width:100%; padding:15px;
//     background:linear-gradient(135deg,var(--gold),var(--glt));
//     color:#1a0f0a; border:none; border-radius:8px;
//     font-size:10px; letter-spacing:0.28em;
//     font-family:'Montserrat',sans-serif; font-weight:700;
//     cursor:pointer; display:flex; align-items:center;
//     justify-content:center; gap:9px;
//     transition:box-shadow 0.25s, transform 0.22s;
//     position:relative; overflow:hidden;
//   }
//   .c-cta::after {
//     content:'';
//     position:absolute; inset:0;
//     background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent);
//     background-size:600px 100%;
//     animation:cShim 2.6s infinite; opacity:0; transition:opacity 0.3s;
//   }
//   .c-cta:hover  { box-shadow:0 8px 28px rgba(200,151,58,0.42); transform:translateY(-1px); }
//   .c-cta:hover::after { opacity:1; }
//   .c-cta:disabled { opacity:0.45; cursor:not-allowed; transform:none; }

//   /* Continue btn */
//   .c-cont {
//     width:100%; padding:13px;
//     background:transparent;
//     color:rgba(200,151,58,0.6);
//     border:1px solid rgba(200,151,58,0.22); border-radius:8px;
//     font-size:9px; letter-spacing:0.22em;
//     font-family:'Montserrat',sans-serif; font-weight:600;
//     cursor:pointer; display:flex; align-items:center;
//     justify-content:center; gap:7px;
//     transition:all 0.2s;
//   }
//   .c-cont:hover { border-color:rgba(200,151,58,0.5); color:var(--glt); background:rgba(200,151,58,0.06); }

//   /* Pill tags */
//   .cpg { padding:3px 10px; border-radius:5px; font-size:8px; letter-spacing:0.18em; font-family:'Montserrat',sans-serif; color:var(--gold); background:rgba(200,151,58,0.08); border:1px solid rgba(200,151,58,0.22); }
//   .cpd { padding:3px 10px; border-radius:5px; font-size:8px; letter-spacing:0.14em; font-family:'Montserrat',sans-serif; color:rgba(240,220,190,0.55); background:rgba(200,151,58,0.04); border:1px solid rgba(200,151,58,0.12); }

//   /* Trust badge row */
//   .c-badge { display:flex; align-items:center; gap:7px; color:rgba(200,151,58,0.45); }
//   .c-badge-ico {
//     width:30px; height:30px; border-radius:50%; flex-shrink:0;
//     display:flex; align-items:center; justify-content:center;
//     background:rgba(200,151,58,0.07); border:1px solid rgba(200,151,58,0.15);
//   }
// `;

// /* ── Icons ── */
// const IcoMinus = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
//   </svg>
// );
// const IcoPlus = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
//   </svg>
// );
// const IcoTrash = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.6" />
//   </svg>
// );
// const IcoArrow = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoBack = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoBag = () => (
//   <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
//     <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(200,151,58,0.2)" strokeWidth="0.7" strokeLinejoin="round" />
//     <path d="M3 7h18" stroke="rgba(200,151,58,0.2)" strokeWidth="0.7" strokeLinecap="round" />
//     <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(200,151,58,0.2)" strokeWidth="0.7" strokeLinecap="round" />
//   </svg>
// );
// const IcoShield = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoPin = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
//   </svg>
// );
// const IcoReturn = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <polyline points="1 4 1 10 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M3.51 15a9 9 0 1 0 .49-4.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );

// /* ══════════════════════════════════════════ */

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   /* ── Original cart data logic — untouched ── */
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
//   const totalItems = cartData.reduce((s, i) => s + i.quantity, 0);

//   return (
//     <>
//       <style>{STYLES}</style>

//       <div className="c-page" style={{
//         background: '#120b06', minHeight: '100vh',
//         color: '#f5ede0', fontFamily: 'Georgia, serif',
//         padding: 'clamp(28px,5vw,52px) clamp(16px,5vw,64px) 90px',
//       }}>

//         {/* ═══ PAGE HEADER ═══ */}
//         <div style={{ marginBottom: 34 }}>
//           <p style={{
//             fontSize: 8, letterSpacing: '0.48em', color: '#c8973a',
//             fontFamily: 'Montserrat,sans-serif', fontWeight: 700, marginBottom: 6,
//           }}>D DOLLY LAMB</p>

//           <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
//             <div>
//               <h1 style={{
//                 fontSize: 'clamp(1.7rem,3.5vw,2.5rem)', color: '#f7c568',
//                 fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
//                 letterSpacing: '0.12em', margin: 0, lineHeight: 1,
//               }}>
//                 YOUR CART
//               </h1>
//               {!isCartEmpty && (
//                 <p style={{
//                   fontSize: 10, color: '#8a6830', fontFamily: 'Montserrat,sans-serif',
//                   letterSpacing: '0.1em', marginTop: 8,
//                 }}>
//                   {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'} IN YOUR BAG
//                 </p>
//               )}
//             </div>

//             <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 4 }}>
//               <div style={{ width: 46, height: 1, background: 'linear-gradient(to left,rgba(200,151,58,0.35),transparent)' }} />
//               <div style={{ width: 7, height: 7, background: '#c8973a', transform: 'rotate(45deg)', flexShrink: 0 }} />
//               <div style={{ width: 46, height: 1, background: 'linear-gradient(to right,rgba(200,151,58,0.35),transparent)' }} />
//             </div>
//           </div>

//           <div style={{ height: 1, marginTop: 20, background: 'linear-gradient(to right,transparent,rgba(200,151,58,0.18) 40%,rgba(200,151,58,0.18) 60%,transparent)' }} />
//         </div>

//         {/* ═══ EMPTY STATE ═══ */}
//         {isCartEmpty ? (
//           <div style={{
//             background: 'linear-gradient(160deg,#1a100a,#1f1209)',
//             border: '1px solid rgba(200,151,58,0.15)', borderRadius: 14,
//             padding: '80px 24px', textAlign: 'center', maxWidth: 460, margin: '0 auto',
//           }}>
//             <div style={{ marginBottom: 18, opacity: 0.55 }}><IcoBag /></div>
//             <h2 style={{
//               fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', color: '#f7c568',
//               fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic',
//               fontWeight: 400, marginBottom: 10,
//             }}>Your bag is empty</h2>
//             <p style={{
//               fontSize: 10, color: '#8a6830', fontFamily: 'Montserrat,sans-serif',
//               letterSpacing: '0.1em', marginBottom: 32,
//             }}>DISCOVER OUR ARTISAN LEATHER COLLECTION</p>
//             <button
//               onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
//               className="c-cta"
//               style={{ maxWidth: 260, margin: '0 auto' }}
//             >
//               EXPLORE COLLECTION <IcoArrow />
//             </button>
//           </div>

//         ) : (
//           /* ═══ TWO-COLUMN LAYOUT ═══ */
//           <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>

//             {/* ── LEFT: Items ── */}
//             <div style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>

//               {cartData.map((item, index) => {
//                 const productData = products.find((p) => p._id === item._id);
//                 if (!productData) return null;

//                 const imageSrc = Array.isArray(productData.image)
//                   ? productData.image[0]
//                   : productData.image || assets.placeholder_image;

//                 /* ── Original price logic — untouched ── */
//                 const originalPrice = Number(productData.price);
//                 const discountPercent = Number(productData.discountPrice) || 0;
//                 const discountAmount = discountPercent > 0 && discountPercent < 100
//                   ? (originalPrice * discountPercent) / 100 : 0;
//                 const salePrice = originalPrice - discountAmount;
//                 const unitPrice = salePrice + item.customPrice;
//                 const lineTotal = unitPrice * item.quantity;

//                 return (
//                   <div
//                     key={`${item._id}-${item.size}-${item.color}-${index}`}
//                     className="c-item c-row"
//                     style={{ animationDelay: `${index * 0.07}s` }}
//                   >
//                     {/* Image */}
//                     <div className="c-img-wrap">
//                       <img
//                         className="c-img"
//                         src={imageSrc}
//                         alt={productData.name || 'Product'}
//                         onError={(e) => { e.target.src = assets.placeholder_image; }}
//                       />
//                     </div>

//                     {/* Body */}
//                     <div className="c-body">

//                       {/* Name + meta */}
//                       <div style={{ flex: '1 1 180px', minWidth: 0 }}>
//                         <p style={{
//                           fontSize: 8, color: '#8a6830', letterSpacing: '0.3em',
//                           fontFamily: 'Montserrat,sans-serif', marginBottom: 5,
//                         }}>LAMBSKIN LEATHER</p>
//                         <p style={{
//                           fontSize: 'clamp(12px,2vw,10px)', color: '#f0ddc0',
//                           fontFamily: "'Montserrat',serif",
//                           lineHeight: 1.4, marginBottom: 10,
//                           display: '-webkit-box', WebkitLineClamp: 2,
//                           WebkitBoxOrient: 'vertical', overflow: 'hidden',
//                         }}>
//                           {productData.name}
//                         </p>
//                         <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
//                           {item.size && <span className="cpg">SIZE: {item.size}</span>}
//                           {item.color && <span className="cpd">{item.color}</span>}
//                         </div>
//                       </div>

//                       {/* Price */}
//                       <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flexShrink: 0 }}>
//                         {discountPercent > 0 && (
//                           <span style={{
//                             fontSize: 11, color: 'rgba(240,220,190,0.45)',
//                             textDecoration: 'line-through', fontFamily: 'Montserrat,sans-serif',
//                           }}>{currency}{originalPrice.toFixed(2)}</span>
//                         )}
//                         <span style={{
//                           fontSize: 14, color: '#f7c568',
//                           fontFamily: "'Montserrat',serif", fontWeight: 600, lineHeight: 1,
//                         }}>{currency}{salePrice.toFixed(2)}</span>
//                         {discountPercent > 0 && (
//                           <span style={{
//                             fontSize: 8, color: '#4ade80',
//                             fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.1em',
//                           }}>SAVE {currency}{discountAmount.toFixed(2)} ({discountPercent}% OFF)</span>
//                         )}
//                         {item.customPrice > 0 && (
//                           <span style={{
//                             fontSize: 8, color: 'rgba(200,151,58,0.55)',
//                             fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.08em',
//                           }}>+ Lining {currency}{item.customPrice.toFixed(2)}</span>
//                         )}
//                       </div>

//                       {/* Qty stepper */}
//                       <div className="c-qty-wrap">
//                         <button
//                           className="c-qty-btn"
//                           disabled={item.quantity <= 1}
//                           onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
//                         ><IcoMinus /></button>
//                         <input
//                           className="c-qty-val"
//                           type="number" min={1}
//                           value={item.quantity}
//                           onChange={(e) => updateQuantity(item._id, item.size, item.color, Number(e.target.value) || 1)}
//                         />
//                         <button
//                           className="c-qty-btn"
//                           onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
//                         ><IcoPlus /></button>
//                       </div>

//                       {/* Line total + delete together */}
//                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
//                         <div style={{ textAlign: 'right' }}>
//                           <p style={{
//                             fontSize: 8, color: '#8a6830', fontFamily: 'Montserrat,sans-serif',
//                             letterSpacing: '0.2em', marginBottom: 3,
//                           }}>LINE TOTAL</p>
//                           <p style={{
//                             fontSize: 15, color: '#f7c568',
//                             fontFamily: "'Montserrat',serif", fontWeight: 600,
//                           }}>{currency}{lineTotal.toFixed(2)}</p>
//                         </div>
//                         {/* Delete inline */}
//                         <button
//                           className="c-del-inline"
//                           title="Remove item"
//                           onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
//                         >
//                           <IcoTrash />
//                           <span style={{ fontSize: 8, letterSpacing: '0.14em', fontFamily: 'Montserrat,sans-serif', fontWeight: 600 }}>REMOVE</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Subtle item count footer */}
//               <div style={{
//                 paddingTop: 12, paddingRight: 4,
//                 display: 'flex', justifyContent: 'flex-end',
//               }}>
//                 <p style={{
//                   fontSize: 9, color: 'rgba(200,151,58,0.35)',
//                   fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.2em',
//                 }}>
//                   {cartData.length} {cartData.length === 1 ? 'PRODUCT' : 'PRODUCTS'} · {totalItems} {totalItems === 1 ? 'UNIT' : 'UNITS'}
//                 </p>
//               </div>
//             </div>

//             {/* ── RIGHT: Summary panel — single unified card ── */}
//             <div
//               className="c-panel"
//               style={{
//                 flex: '0 0 340px', minWidth: 280,
//                 position: 'sticky', top: 24, alignSelf: 'flex-start',
//                 background: 'linear-gradient(160deg,#1e120a,#150c05)',
//                 border: '1px solid rgba(200,151,58,0.18)',
//                 borderRadius: 10, overflow: 'hidden',
//               }}
//             >
//               {/* Gold top bar */}
//               <div style={{ height: 2, background: 'linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)', opacity: 0.6 }} />

//               <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>

//                 {/* CartTotal rows */}
//                 <CartTotal />

//                 {/* Gap before buttons */}
//                 <div style={{ height: 16 }} />

//                 {/* Checkout */}
//                 <button
//                   className="c-cta"
//                   onClick={() => navigate('/place-order')}
//                   disabled={isCartEmpty}
//                 >
//                   PROCEED TO CHECKOUT <IcoArrow />
//                 </button>

//                 <div style={{ height: 10 }} />

//                 {/* Continue shopping */}
//                 <button
//                   className="c-cont"
//                   onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
//                 >
//                   <IcoBack /> CONTINUE SHOPPING
//                 </button>

//                 <div style={{ height: 16 }} />

//                 {/* Thin divider */}
//                 <div style={{ height: 1, background: 'linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent)', marginBottom: 16 }} />

//                 {/* Trust strip */}
//                 <p style={{
//                   fontSize: 8, color: 'rgba(200,151,58,0.28)',
//                   fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.32em',
//                   marginBottom: 12,
//                 }}>WHY SHOP WITH US</p>

//                 {[
//                   { icon: <IcoShield />, label: 'SECURE CHECKOUT', sub: 'SSL encrypted payment' },
//                   { icon: <IcoPin />, label: 'TRACKED SHIPPING', sub: 'Real-time order updates' },
//                   { icon: <IcoReturn />, label: '7-DAY EASY RETURNS', sub: 'Hassle-free returns' },
//                 ].map((b) => (
//                   <div key={b.label} className="c-badge" style={{ marginBottom: 10 }}>
//                     <div className="c-badge-ico">{b.icon}</div>
//                     <div>
//                       <p style={{
//                         fontSize: 8, fontFamily: 'Montserrat,sans-serif',
//                         letterSpacing: '0.18em', color: 'rgba(200,151,58,0.6)', margin: 0,
//                       }}>{b.label}</p>
//                       <p style={{
//                         fontSize: 8, fontFamily: 'Montserrat,sans-serif',
//                         color: 'rgba(200,151,58,0.3)', marginTop: 1,
//                       }}>{b.sub}</p>
//                     </div>
//                   </div>
//                 ))}

//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;





// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// /* ── Icons ── */
// const IcoMinus = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
//   </svg>
// );
// const IcoPlus = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
//   </svg>
// );
// const IcoTrash = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.6" />
//   </svg>
// );
// const IcoArrow = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoBack = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoBag = () => (
//   <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
//     <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(200,151,58,0.3)" strokeWidth="0.7" strokeLinejoin="round" />
//     <path d="M3 7h18" stroke="rgba(200,151,58,0.3)" strokeWidth="0.7" strokeLinecap="round" />
//     <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(200,151,58,0.3)" strokeWidth="0.7" strokeLinecap="round" />
//   </svg>
// );
// const IcoShield = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoPin = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
//   </svg>
// );
// const IcoReturn = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <polyline points="1 4 1 10 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M3.51 15a9 9 0 1 0 .49-4.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );

// /* ── Gold accent top bar ── */
// const GoldBar = () => (
//   <div
//     className="h-0.5 w-full"
//     style={{ background: 'linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)', opacity: 0.65 }}
//   />
// );

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
//   const totalItems = cartData.reduce((s, i) => s + i.quantity, 0);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
//         @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes fadeIn { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
//         @keyframes shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
//         .cart-page  { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
//         .cart-item  { animation: fadeIn 0.42s cubic-bezier(0.16,1,0.3,1) both; }
//         .cart-panel { animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
//         .cta-btn::after {
//           content:''; position:absolute; inset:0;
//           background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent);
//           background-size:600px 100%;
//           animation:shimmer 2.6s infinite; opacity:0; transition:opacity 0.3s;
//         }
//         .cta-btn:hover::after { opacity:1; }
//         input[type=number]::-webkit-inner-spin-button,
//         input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }
//       `}</style>

//       <div
//         className="cart-page min-h-screen px-4 sm:px-8 lg:px-16 pt-10 pb-24"
//         style={{ background: '#120b06', color: '#f5ede0', fontFamily: 'Georgia, serif' }}
//       >

//         {/* ═══ PAGE HEADER ═══ */}
//         <div className="mb-9">
//           <p
//             className="text-[8px] tracking-[0.48em] font-bold mb-2 uppercase"
//             style={{ color: '#c8973a', fontFamily: 'Montserrat,sans-serif' }}
//           >
//             D DOLLY LAMB
//           </p>

//           <div className="flex items-end justify-between flex-wrap gap-3">
//             <div>
//               <h1
//                 className="text-4xl lg:text-5xl font-light tracking-[0.12em] leading-none m-0"
//                 style={{ color: '#f7c568', fontFamily: "'Cormorant Garamond',serif" }}
//               >
//                 YOUR CART
//               </h1>
//               {!isCartEmpty && (
//                 <p
//                   className="text-[10px] tracking-[0.1em] mt-2 uppercase"
//                   style={{ color: '#c8973a', fontFamily: 'Montserrat,sans-serif' }}
//                 >
//                   {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'} IN YOUR BAG
//                 </p>
//               )}
//             </div>
//             <div className="flex items-center gap-2 pb-1">
//               <div className="w-12 h-px" style={{ background: 'linear-gradient(to left,rgba(200,151,58,0.35),transparent)' }} />
//               <div className="w-2 h-2 rotate-45 flex-shrink-0" style={{ background: '#c8973a' }} />
//               <div className="w-12 h-px" style={{ background: 'linear-gradient(to right,rgba(200,151,58,0.35),transparent)' }} />
//             </div>
//           </div>

//           <div className="h-px mt-5" style={{ background: 'linear-gradient(to right,transparent,rgba(200,151,58,0.2) 40%,rgba(200,151,58,0.2) 60%,transparent)' }} />
//         </div>

//         {/* ═══ EMPTY STATE ═══ */}
//         {isCartEmpty ? (
//           <div
//             className="rounded-xl p-16 text-center max-w-md mx-auto"
//             style={{ background: 'linear-gradient(160deg,#1a100a,#1f1209)', border: '1px solid rgba(200,151,58,0.15)' }}
//           >
//             <div className="mb-5 opacity-50 flex justify-center"><IcoBag /></div>
//             <h2
//               className="text-2xl italic font-normal mb-3"
//               style={{ color: '#f7c568', fontFamily: "'Cormorant Garamond',serif" }}
//             >
//               Your bag is empty
//             </h2>
//             <p
//               className="text-[10px] tracking-[0.1em] mb-8 uppercase"
//               style={{ color: '#8a6830', fontFamily: 'Montserrat,sans-serif' }}
//             >
//               DISCOVER OUR ARTISAN LEATHER COLLECTION
//             </p>
//             <button
//               onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
//               className="cta-btn mx-auto flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-[10px] tracking-[0.28em] uppercase relative overflow-hidden transition-all duration-250 hover:-translate-y-0.5"
//               style={{
//                 background: 'linear-gradient(135deg,#c8973a,#f7c568)',
//                 color: '#1a0f0a', border: 'none', fontFamily: 'Montserrat,sans-serif',
//                 maxWidth: 260,
//               }}
//               onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(200,151,58,0.42)'}
//               onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
//             >
//               EXPLORE COLLECTION <IcoArrow />
//             </button>
//           </div>

//         ) : (
//           /* ═══ TWO-COLUMN LAYOUT ═══ */
//           <div className="flex gap-7 items-start flex-wrap lg:flex-nowrap">

//             {/* ── LEFT: Cart items ── */}
//             <div className="flex-1 min-w-0 flex flex-col gap-3" style={{ minWidth: '320px' }}>

//               {cartData.map((item, index) => {
//                 const productData = products.find((p) => p._id === item._id);
//                 if (!productData) return null;

//                 const imageSrc = Array.isArray(productData.image)
//                   ? productData.image[0]
//                   : productData.image || assets.placeholder_image;

//                 const originalPrice = Number(productData.price);
//                 const discountPercent = Number(productData.discountPrice) || 0;
//                 const discountAmount = discountPercent > 0 && discountPercent < 100
//                   ? (originalPrice * discountPercent) / 100 : 0;
//                 const salePrice = originalPrice - discountAmount;
//                 const unitPrice = salePrice + item.customPrice;
//                 const lineTotal = unitPrice * item.quantity;

//                 return (
//                   <div
//                     key={`${item._id}-${item.size}-${item.color}-${index}`}
//                     className="cart-item relative flex items-stretch rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-px group"
//                     style={{
//                       animationDelay: `${index * 0.07}s`,
//                       background: 'linear-gradient(135deg,#1a100a,#1f1209)',
//                       border: '1px solid rgba(200,151,58,0.18)',
//                     }}
//                     onMouseEnter={e => {
//                       e.currentTarget.style.borderColor = 'rgba(200,151,58,0.42)';
//                       e.currentTarget.style.boxShadow = '0 14px 44px rgba(0,0,0,0.55)';
//                     }}
//                     onMouseLeave={e => {
//                       e.currentTarget.style.borderColor = 'rgba(200,151,58,0.18)';
//                       e.currentTarget.style.boxShadow = 'none';
//                     }}
//                   >
//                     {/* Gold top line on hover */}
//                     <div
//                       className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300"
//                       style={{ background: 'linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)' }}
//                     />

//                     {/* Product image */}
//                     <div
//                       // className="flex-shrink-0 w-28 sm:w-32 h-28 sm:h bg-white overflow-hidden"
//                       className="flex-shrink-0 w-28 sm:w-32 h-28 sm:h-36 bg-white overflow-hidden"
//                       style={{ borderRight: '1px solid rgba(200,151,58,0.1)', minHeight: 110 }}
//                     >
//                       <img
//                         src={imageSrc}
//                         alt={productData.name || 'Product'}
//                         className="w-full h-full object-contain p-2.5 transition-transform duration-500 group-hover:scale-105"
//                         style={{ display: 'block' }}
//                         onError={(e) => { e.target.src = assets.placeholder_image; }}
//                       />
//                     </div>

//                     {/* Card body */}
//                     <div className="flex-1 flex flex-wrap items-center gap-3 p-4 sm:p-5 min-w-0">

//                       {/* Name + meta */}
//                       <div className="flex-1 min-w-[160px]">
//                         <p
//                           className="text-[9px] tracking-[0.3em] uppercase mb-1.5 font-semibold"
//                           style={{ color: '#c8973a', fontFamily: 'Montserrat,sans-serif' }}
//                         >
//                           LAMBSKIN LEATHER
//                         </p>
//                         <p
//                           className="text-sm font-medium leading-snug mb-2.5 line-clamp-2"
//                           style={{ color: '#f0ddc0', fontFamily: 'Montserrat,sans-serif' }}
//                         >
//                           {productData.name}
//                         </p>
//                         <div className="flex gap-1.5 flex-wrap">
//                           {item.size && (
//                             <span
//                               className="px-2.5 py-1 rounded text-[9px] tracking-[0.18em] font-semibold uppercase"
//                               style={{ color: '#f7c568', background: 'rgba(200,151,58,0.12)', border: '1px solid rgba(200,151,58,0.28)', fontFamily: 'Montserrat,sans-serif' }}
//                             >
//                               SIZE: {item.size}
//                             </span>
//                           )}
//                           {item.color && (
//                             <span
//                               className="px-2.5 py-1 rounded text-[9px] tracking-[0.14em] uppercase"
//                               style={{ color: '#d4b896', background: 'rgba(200,151,58,0.06)', border: '1px solid rgba(200,151,58,0.15)', fontFamily: 'Montserrat,sans-serif' }}
//                             >
//                               {item.color}
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Unit price */}
//                       <div className="flex flex-col gap-1 flex-shrink-0">
//                         {discountPercent > 0 && (
//                           <span
//                             className="text-[11px] line-through"
//                             style={{ color: 'rgba(240,220,190,0.4)', fontFamily: 'Montserrat,sans-serif' }}
//                           >
//                             {currency}{originalPrice.toFixed(2)}
//                           </span>
//                         )}
//                         <span
//                           className="text-base font-semibold leading-none"
//                           style={{ color: '#f7c568', fontFamily: 'Montserrat,sans-serif' }}
//                         >
//                           {currency}{salePrice.toFixed(2)}
//                         </span>
//                         {discountPercent > 0 && (
//                           <span
//                             className="text-[8px] tracking-[0.1em] font-semibold"
//                             style={{ color: '#4ade80', fontFamily: 'Montserrat,sans-serif' }}
//                           >
//                             SAVE {currency}{discountAmount.toFixed(2)} ({discountPercent}% OFF)
//                           </span>
//                         )}
//                         {item.customPrice > 0 && (
//                           <span
//                             className="text-[9px] tracking-[0.08em]"
//                             style={{ color: 'rgba(200,151,58,0.7)', fontFamily: 'Montserrat,sans-serif' }}
//                           >
//                             + Lining {currency}{item.customPrice.toFixed(2)}
//                           </span>
//                         )}
//                       </div>

//                       {/* Qty stepper */}
//                       <div
//                         className="flex items-center gap-2 rounded-full px-1.5 py-1"
//                         style={{ background: 'rgba(200,151,58,0.06)', border: '1px solid rgba(200,151,58,0.2)' }}
//                       >
//                         <button
//                           className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 outline-none flex-shrink-0 disabled:opacity-30 disabled:cursor-default"
//                           style={{ background: 'rgba(200,151,58,0.08)', border: '1px solid rgba(200,151,58,0.22)', color: 'rgba(200,151,58,0.7)' }}
//                           onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,151,58,0.22)'; e.currentTarget.style.color = '#f7c568'; }}
//                           onMouseLeave={e => { e.currentTarget.style.background = 'rgba(200,151,58,0.08)'; e.currentTarget.style.color = 'rgba(200,151,58,0.7)'; }}
//                           disabled={item.quantity <= 1}
//                           onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
//                         >
//                           <IcoMinus />
//                         </button>

//                         <input
//                           type="number"
//                           min={1}
//                           value={item.quantity}
//                           onChange={(e) => updateQuantity(item._id, item.size, item.color, Number(e.target.value) || 1)}
//                           className="w-8 text-center bg-transparent border-none outline-none text-sm font-semibold"
//                           style={{ color: '#f0ddc0', fontFamily: "'Cormorant Garamond',serif" }}
//                         />

//                         <button
//                           className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 outline-none flex-shrink-0"
//                           style={{ background: 'rgba(200,151,58,0.08)', border: '1px solid rgba(200,151,58,0.22)', color: 'rgba(200,151,58,0.7)' }}
//                           onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,151,58,0.22)'; e.currentTarget.style.color = '#f7c568'; }}
//                           onMouseLeave={e => { e.currentTarget.style.background = 'rgba(200,151,58,0.08)'; e.currentTarget.style.color = 'rgba(200,151,58,0.7)'; }}
//                           onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
//                         >
//                           <IcoPlus />
//                         </button>
//                       </div>

//                       {/* Line total + remove */}
//                       <div className="flex flex-col items-end gap-2 flex-shrink-0">
//                         <div className="text-right">
//                           <p
//                             className="text-[9px] tracking-[0.2em] uppercase mb-1 font-semibold"
//                             style={{ color: '#c8973a', fontFamily: 'Montserrat,sans-serif' }}
//                           >
//                             LINE TOTAL
//                           </p>
//                           <p
//                             className="text-base font-semibold leading-none"
//                             style={{ color: '#f7c568', fontFamily: 'Montserrat,sans-serif' }}
//                           >
//                             {currency}{lineTotal.toFixed(2)}
//                           </p>
//                         </div>

//                         <button
//                           className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[9px] tracking-[0.14em] font-semibold uppercase transition-all duration-200 outline-none"
//                           style={{
//                             background: 'rgba(16,2,2,0.85)',
//                             border: '1.5px solid rgba(200,50,50,0.5)',
//                             color: '#f87171',
//                             fontFamily: 'Montserrat,sans-serif',
//                           }}
//                           onMouseEnter={e => {
//                             e.currentTarget.style.background = 'rgba(90,8,8,0.95)';
//                             e.currentTarget.style.borderColor = '#ff5555';
//                             e.currentTarget.style.color = '#fff';
//                             e.currentTarget.style.boxShadow = '0 3px 12px rgba(200,30,30,0.35)';
//                           }}
//                           onMouseLeave={e => {
//                             e.currentTarget.style.background = 'rgba(16,2,2,0.85)';
//                             e.currentTarget.style.borderColor = 'rgba(200,50,50,0.5)';
//                             e.currentTarget.style.color = '#f87171';
//                             e.currentTarget.style.boxShadow = 'none';
//                           }}
//                           onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
//                         >
//                           <IcoTrash /> REMOVE
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Item count footer */}
//               <div className="flex justify-end pt-3 pr-1">
//                 <p
//                   className="text-[9px] tracking-[0.2em] uppercase"
//                   style={{ color: 'rgba(200,151,58,0.4)', fontFamily: 'Montserrat,sans-serif' }}
//                 >
//                   {cartData.length} {cartData.length === 1 ? 'PRODUCT' : 'PRODUCTS'} · {totalItems} {totalItems === 1 ? 'UNIT' : 'UNITS'}
//                 </p>
//               </div>
//             </div>

//             {/* ── RIGHT: Summary panel ── */}
//             <div
//               className="cart-panel flex-shrink-0 rounded-xl overflow-hidden"
//               style={{
//                 width: 340,
//                 minWidth: 280,
//                 position: 'sticky',
//                 top: 24,
//                 alignSelf: 'flex-start',
//                 background: 'linear-gradient(160deg,#1e120a,#150c05)',
//                 border: '1px solid rgba(200,151,58,0.2)',
//               }}
//             >
//               <GoldBar />

//               <div className="p-6 flex flex-col gap-0">

//                 {/* CartTotal */}
//                 <CartTotal />

//                 <div className="h-4" />

//                 {/* Checkout CTA */}
//                 <button
//                   className="cta-btn w-full py-4 flex items-center justify-center gap-2.5 rounded-lg font-bold text-[10px] tracking-[0.28em] uppercase relative overflow-hidden transition-all duration-250 hover:-translate-y-px disabled:opacity-45 disabled:cursor-not-allowed"
//                   style={{
//                     background: 'linear-gradient(135deg,#c8973a,#f7c568)',
//                     color: '#1a0f0a', border: 'none',
//                     fontFamily: 'Montserrat,sans-serif',
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(200,151,58,0.42)'}
//                   onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
//                   onClick={() => navigate('/place-order')}
//                   disabled={isCartEmpty}
//                 >
//                   PROCEED TO CHECKOUT <IcoArrow />
//                 </button>

//                 <div className="h-2.5" />

//                 {/* Continue shopping */}
//                 <button
//                   className="w-full py-3.5 flex items-center justify-center gap-2 rounded-lg text-[9px] tracking-[0.22em] font-semibold uppercase transition-all duration-200"
//                   style={{
//                     background: 'transparent',
//                     color: 'rgba(200,151,58,0.65)',
//                     border: '1px solid rgba(200,151,58,0.22)',
//                     fontFamily: 'Montserrat,sans-serif',
//                   }}
//                   onMouseEnter={e => {
//                     e.currentTarget.style.borderColor = 'rgba(200,151,58,0.5)';
//                     e.currentTarget.style.color = '#f7c568';
//                     e.currentTarget.style.background = 'rgba(200,151,58,0.06)';
//                   }}
//                   onMouseLeave={e => {
//                     e.currentTarget.style.borderColor = 'rgba(200,151,58,0.22)';
//                     e.currentTarget.style.color = 'rgba(200,151,58,0.65)';
//                     e.currentTarget.style.background = 'transparent';
//                   }}
//                   onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
//                 >
//                   <IcoBack /> CONTINUE SHOPPING
//                 </button>

//                 <div className="h-5" />

//                 {/* Divider */}
//                 <div className="h-px mb-5" style={{ background: 'linear-gradient(to right,transparent,rgba(200,151,58,0.15),transparent)' }} />

//                 {/* Trust badges */}
//                 <p
//                   className="text-[8px] tracking-[0.32em] uppercase mb-3"
//                   style={{ color: 'rgba(200,151,58,0.5)', fontFamily: 'Montserrat,sans-serif' }}
//                 >
//                   WHY SHOP WITH US
//                 </p>

//                 <div className="flex flex-col gap-3">
//                   {[
//                     { icon: <IcoShield />, label: 'SECURE CHECKOUT', sub: 'SSL encrypted payment' },
//                     { icon: <IcoPin />, label: 'TRACKED SHIPPING', sub: 'Real-time order updates' },
//                     { icon: <IcoReturn />, label: '7-DAY EASY RETURNS', sub: 'Hassle-free returns' },
//                   ].map((b) => (
//                     <div key={b.label} className="flex items-center gap-2.5" style={{ color: 'rgba(200,151,58,0.55)' }}>
//                       <div
//                         className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
//                         style={{ background: 'rgba(200,151,58,0.08)', border: '1px solid rgba(200,151,58,0.18)' }}
//                       >
//                         {b.icon}
//                       </div>
//                       <div>
//                         <p
//                           className="text-[9px] tracking-[0.18em] font-semibold uppercase"
//                           style={{ color: 'rgba(200,151,58,0.75)', fontFamily: 'Montserrat,sans-serif' }}
//                         >
//                           {b.label}
//                         </p>
//                         <p
//                           className="text-[9px] mt-0.5"
//                           style={{ color: 'rgba(200,151,58,0.45)', fontFamily: 'Montserrat,sans-serif' }}
//                         >
//                           {b.sub}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </div>

//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;



// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// /* ── Icons ── */
// const IcoMinus = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
//   </svg>
// );
// const IcoPlus = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
//   </svg>
// );
// const IcoTrash = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.6" />
//   </svg>
// );
// const IcoArrow = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoBack = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoBag = () => (
//   <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
//     <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(200,151,58,0.3)" strokeWidth="0.7" strokeLinejoin="round" />
//     <path d="M3 7h18" stroke="rgba(200,151,58,0.3)" strokeWidth="0.7" strokeLinecap="round" />
//     <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(200,151,58,0.3)" strokeWidth="0.7" strokeLinecap="round" />
//   </svg>
// );
// const IcoShield = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IcoPin = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
//   </svg>
// );
// const IcoReturn = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <polyline points="1 4 1 10 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M3.51 15a9 9 0 1 0 .49-4.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );

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
//   const totalItems = cartData.reduce((s, i) => s + i.quantity, 0);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(18px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateX(-10px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes shimmer {
//           0%   { background-position: -600px 0; }
//           100% { background-position:  600px 0; }
//         }

//         .cart-page  { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
//         .cart-item  { animation: fadeIn 0.42s cubic-bezier(0.16,1,0.3,1) both; }
//         .cart-panel { animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s both; }

//         .font-cormorant { font-family: 'Cormorant Garamond', serif; }
//         .font-montserrat { font-family: 'Montserrat', sans-serif; }

//         .cta-btn::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
//           background-size: 600px 100%;
//           animation: shimmer 2.6s infinite;
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
//         .cta-btn:hover::after { opacity: 1; }

//         input[type=number]::-webkit-inner-spin-button,
//         input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }

//         .gold-bar {
//           height: 2px;
//           background: linear-gradient(to right, transparent, #c8973a 30%, #f7c568 50%, #c8973a 70%, transparent);
//           opacity: 0.65;
//         }
//         .gold-divider {
//           background: linear-gradient(to right, transparent, rgba(200,151,58,0.2) 40%, rgba(200,151,58,0.2) 60%, transparent);
//         }
//         .cart-item-border { border: 1px solid rgba(200,151,58,0.18); }
//         .cart-item-border:hover { border-color: rgba(200,151,58,0.42); }
//         .summary-panel { border: 1px solid rgba(200,151,58,0.2); }
//         .trust-badge-wrap { border: 1px solid rgba(200,151,58,0.18); }
//         .qty-wrap { border: 1px solid rgba(200,151,58,0.2); }
//         .qty-btn { border: 1px solid rgba(200,151,58,0.22); }
//         .size-tag { border: 1px solid rgba(200,151,58,0.28); }
//         .color-tag { border: 1px solid rgba(200,151,58,0.15); }
//         .remove-btn { border: 1.5px solid rgba(200,50,50,0.5); }
//         .remove-btn:hover {
//           background: rgba(90,8,8,0.95) !important;
//           border-color: #ff5555;
//           color: #fff !important;
//           box-shadow: 0 3px 12px rgba(200,30,30,0.35);
//         }
//         .continue-btn { border: 1px solid rgba(200,151,58,0.22); }
//         .continue-btn:hover {
//           border-color: rgba(200,151,58,0.5);
//           color: #f7c568;
//           background: rgba(200,151,58,0.06);
//         }
//         .cart-item:hover { box-shadow: 0 14px 44px rgba(0,0,0,0.55); }
//         .cta-btn:hover { box-shadow: 0 8px 28px rgba(200,151,58,0.42); }
//         .explore-btn:hover { box-shadow: 0 8px 28px rgba(200,151,58,0.42); }
//       `}</style>

//       {/* ═══ PAGE WRAPPER ═══ */}
//       <div className="cart-page min-h-screen px-4 sm:px-8 lg:px-16 pt-10 pb-24 bg-[#120b06] text-[#f5ede0]">

//         {/* ═══ PAGE HEADER ═══ */}
//         <div className="mb-9">
//           <p className="font-montserrat text-[8px] tracking-[0.48em] font-bold mb-2 uppercase text-[#c8973a]">
//             D DOLLY LAMB
//           </p>

//           <div className="flex items-end justify-between flex-wrap gap-3">
//             <div>
//               <h1 className="font-cormorant text-4xl lg:text-5xl font-light tracking-[0.12em] leading-none text-[#f7c568]">
//                 YOUR CART
//               </h1>
//               {!isCartEmpty && (
//                 <p className="font-montserrat text-[10px] tracking-[0.1em] mt-2 uppercase text-[#c8973a]">
//                   {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'} IN YOUR BAG
//                 </p>
//               )}
//             </div>

//             {/* Gold diamond divider */}
//             <div className="flex items-center gap-2 pb-1">
//               <div className="w-12 h-px bg-gradient-to-l from-[rgba(200,151,58,0.35)] to-transparent" />
//               <div className="w-2 h-2 rotate-45 flex-shrink-0 bg-[#c8973a]" />
//               <div className="w-12 h-px bg-gradient-to-r from-[rgba(200,151,58,0.35)] to-transparent" />
//             </div>
//           </div>

//           <div className="h-px mt-5 gold-divider" />
//         </div>

//         {/* ═══ EMPTY STATE ═══ */}
//         {isCartEmpty ? (
//           <div className="rounded-xl p-16 text-center max-w-md mx-auto bg-gradient-to-br from-[#1a100a] to-[#1f1209] border border-[rgba(200,151,58,0.15)]">
//             <div className="mb-5 opacity-50 flex justify-center">
//               <IcoBag />
//             </div>
//             <h2 className="font-cormorant text-2xl italic font-normal mb-3 text-[#f7c568]">
//               Your bag is empty
//             </h2>
//             <p className="font-montserrat text-[10px] tracking-[0.1em] mb-8 uppercase text-[#8a6830]">
//               DISCOVER OUR ARTISAN LEATHER COLLECTION
//             </p>
//             <button
//               onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
//               className="explore-btn cta-btn mx-auto flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-[10px] tracking-[0.28em] uppercase relative overflow-hidden transition-all duration-250 hover:-translate-y-0.5 font-montserrat bg-gradient-to-br from-[#c8973a] to-[#f7c568] text-[#1a0f0a] border-none"
//               style={{ maxWidth: 260 }}
//             >
//               EXPLORE COLLECTION <IcoArrow />
//             </button>
//           </div>

//         ) : (
//           /* ═══ TWO-COLUMN LAYOUT ═══ */
//           <div className="flex gap-7 items-start flex-wrap lg:flex-nowrap">

//             {/* ── LEFT: Cart items ── */}
//             <div className="flex-1 min-w-[320px] flex flex-col gap-3">

//               {cartData.map((item, index) => {
//                 const productData = products.find((p) => p._id === item._id);
//                 if (!productData) return null;

//                 const imageSrc = Array.isArray(productData.image)
//                   ? productData.image[0]
//                   : productData.image || assets.placeholder_image;

//                 const originalPrice = Number(productData.price);
//                 const discountPercent = Number(productData.discountPrice) || 0;
//                 const discountAmount = discountPercent > 0 && discountPercent < 100
//                   ? (originalPrice * discountPercent) / 100 : 0;
//                 const salePrice = originalPrice - discountAmount;
//                 const unitPrice = salePrice + item.customPrice;
//                 const lineTotal = unitPrice * item.quantity;

//                 return (
//                   <div
//                     key={`${item._id}-${item.size}-${item.color}-${index}`}
//                     className="cart-item relative flex items-stretch rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-px group bg-gradient-to-br from-[#1a100a] to-[#1f1209] cart-item-border"
//                     style={{ animationDelay: `${index * 0.07}s` }}
//                   >
//                     {/* Gold top shimmer on hover */}
//                     <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent" />

//                     {/* Product image */}
//                     <div className="flex-shrink-0 w-28 sm:w-32 h-28 sm:h-36 bg-white overflow-hidden border-r border-[rgba(200,151,58,0.1)]" style={{ minHeight: 110 }}>
//                       <img
//                         src={imageSrc}
//                         alt={productData.name || 'Product'}
//                         className="w-full h-full object-contain p-2.5 transition-transform duration-500 group-hover:scale-105 block"
//                         onError={(e) => { e.target.src = assets.placeholder_image; }}
//                       />
//                     </div>

//                     {/* Card body */}
//                     <div className="flex-1 flex flex-wrap items-center gap-3 p-4 sm:p-5 min-w-0">

//                       {/* Name + meta */}
//                       <div className="flex-1 min-w-[160px]">
//                         <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase mb-1.5 font-semibold text-[#c8973a]">
//                           LAMBSKIN LEATHER
//                         </p>
//                         <p className="font-montserrat text-sm font-medium leading-snug mb-2.5 line-clamp-2 text-[#f0ddc0]">
//                           {productData.name}
//                         </p>
//                         <div className="flex gap-1.5 flex-wrap">
//                           {item.size && (
//                             <span className="font-montserrat px-2.5 py-1 rounded text-[9px] tracking-[0.18em] font-semibold uppercase text-[#f7c568] bg-[rgba(200,151,58,0.12)] size-tag">
//                               SIZE: {item.size}
//                             </span>
//                           )}
//                           {item.color && (
//                             <span className="font-montserrat px-2.5 py-1 rounded text-[9px] tracking-[0.14em] uppercase text-[#d4b896] bg-[rgba(200,151,58,0.06)] color-tag">
//                               {item.color}
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Unit price */}
//                       <div className="flex flex-col gap-1 flex-shrink-0">
//                         {discountPercent > 0 && (
//                           <span className="font-montserrat text-[11px] line-through text-[rgba(240,220,190,0.4)]">
//                             {currency}{originalPrice.toFixed(2)}
//                           </span>
//                         )}
//                         <span className="font-montserrat text-base font-semibold leading-none text-[#f7c568]">
//                           {currency}{salePrice.toFixed(2)}
//                         </span>
//                         {discountPercent > 0 && (
//                           <span className="font-montserrat text-[8px] tracking-[0.1em] font-semibold text-green-400">
//                             SAVE {currency}{discountAmount.toFixed(2)} ({discountPercent}% OFF)
//                           </span>
//                         )}
//                         {item.customPrice > 0 && (
//                           <span className="font-montserrat text-[9px] tracking-[0.08em] text-[rgba(200,151,58,0.7)]">
//                             + Lining {currency}{item.customPrice.toFixed(2)}
//                           </span>
//                         )}
//                       </div>

//                       {/* Qty stepper */}
//                       <div className="flex items-center gap-2 rounded-full px-1.5 py-1 bg-[rgba(200,151,58,0.06)] qty-wrap">
//                         <button
//                           className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 outline-none flex-shrink-0 disabled:opacity-30 disabled:cursor-default bg-[rgba(200,151,58,0.08)] qty-btn text-[rgba(200,151,58,0.7)] hover:bg-[rgba(200,151,58,0.22)] hover:text-[#f7c568]"
//                           disabled={item.quantity <= 1}
//                           onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
//                         >
//                           <IcoMinus />
//                         </button>

//                         <input
//                           type="number"
//                           min={1}
//                           value={item.quantity}
//                           onChange={(e) => updateQuantity(item._id, item.size, item.color, Number(e.target.value) || 1)}
//                           className="w-8 text-center bg-transparent border-none outline-none text-sm font-semibold text-[#f0ddc0] font-cormorant"
//                         />

//                         <button
//                           className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 outline-none flex-shrink-0 bg-[rgba(200,151,58,0.08)] qty-btn text-[rgba(200,151,58,0.7)] hover:bg-[rgba(200,151,58,0.22)] hover:text-[#f7c568]"
//                           onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
//                         >
//                           <IcoPlus />
//                         </button>
//                       </div>

//                       {/* Line total + remove */}
//                       <div className="flex flex-col items-end gap-2 flex-shrink-0">
//                         <div className="text-right">
//                           <p className="font-montserrat text-[9px] tracking-[0.2em] uppercase mb-1 font-semibold text-[#c8973a]">
//                             LINE TOTAL
//                           </p>
//                           <p className="font-montserrat text-base font-semibold leading-none text-[#f7c568]">
//                             {currency}{lineTotal.toFixed(2)}
//                           </p>
//                         </div>

//                         <button
//                           className="remove-btn flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[9px] tracking-[0.14em] font-semibold uppercase transition-all duration-200 outline-none font-montserrat bg-[rgba(16,2,2,0.85)] text-[#f87171]"
//                           onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
//                         >
//                           <IcoTrash /> REMOVE
//                         </button>
//                       </div>

//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Item count footer */}
//               <div className="flex justify-end pt-3 pr-1">
//                 <p className="font-montserrat text-[9px] tracking-[0.2em] uppercase text-[rgba(200,151,58,0.4)]">
//                   {cartData.length} {cartData.length === 1 ? 'PRODUCT' : 'PRODUCTS'} · {totalItems} {totalItems === 1 ? 'UNIT' : 'UNITS'}
//                 </p>
//               </div>
//             </div>

//             {/* ── RIGHT: Summary panel ── */}
//             <div
//               className="cart-panel flex-shrink-0 rounded-xl overflow-hidden summary-panel bg-gradient-to-br from-[#1e120a] to-[#150c05]"
//               style={{ width: 340, minWidth: 280, position: 'sticky', top: 24, alignSelf: 'flex-start' }}
//             >
//               {/* Gold top bar */}
//               <div className="gold-bar w-full" />

//               <div className="p-6 flex flex-col gap-0">

//                 <CartTotal />

//                 <div className="h-4" />

//                 {/* Checkout CTA */}
//                 <button
//                   className="cta-btn w-full py-4 flex items-center justify-center gap-2.5 rounded-lg font-bold text-[10px] tracking-[0.28em] uppercase relative overflow-hidden transition-all duration-250 hover:-translate-y-px disabled:opacity-45 disabled:cursor-not-allowed font-montserrat bg-gradient-to-br from-[#c8973a] to-[#f7c568] text-[#1a0f0a] border-none"
//                   onClick={() => navigate('/place-order')}
//                   disabled={isCartEmpty}
//                 >
//                   PROCEED TO CHECKOUT <IcoArrow />
//                 </button>

//                 <div className="h-2.5" />

//                 {/* Continue shopping */}
//                 <button
//                   className="continue-btn w-full py-3.5 flex items-center justify-center gap-2 rounded-lg text-[9px] tracking-[0.22em] font-semibold uppercase transition-all duration-200 font-montserrat bg-transparent text-[rgba(200,151,58,0.65)]"
//                   onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
//                 >
//                   <IcoBack /> CONTINUE SHOPPING
//                 </button>

//                 <div className="h-5" />

//                 {/* Divider */}
//                 <div className="h-px mb-5 bg-gradient-to-r from-transparent via-[rgba(200,151,58,0.15)] to-transparent" />

//                 {/* Trust badges */}
//                 <p className="font-montserrat text-[8px] tracking-[0.32em] uppercase mb-3 text-[rgba(200,151,58,0.5)]">
//                   WHY SHOP WITH US
//                 </p>

//                 <div className="flex flex-col gap-3">
//                   {[
//                     { icon: <IcoShield />, label: 'SECURE CHECKOUT', sub: 'SSL encrypted payment' },
//                     { icon: <IcoPin />, label: 'TRACKED SHIPPING', sub: 'Real-time order updates' },
//                     { icon: <IcoReturn />, label: '7-DAY EASY RETURNS', sub: 'Hassle-free returns' },
//                   ].map((b) => (
//                     <div key={b.label} className="flex items-center gap-2.5 text-[rgba(200,151,58,0.55)]">
//                       <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[rgba(200,151,58,0.08)] trust-badge-wrap">
//                         {b.icon}
//                       </div>
//                       <div>
//                         <p className="font-montserrat text-[9px] tracking-[0.18em] font-semibold uppercase text-[rgba(200,151,58,0.75)]">
//                           {b.label}
//                         </p>
//                         <p className="font-montserrat text-[9px] mt-0.5 text-[rgba(200,151,58,0.45)]">
//                           {b.sub}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </div>

//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;








import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

/* ── Icons ── */
const IcoMinus = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
const IcoPlus = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
const IcoTrash = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoBack = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoBag = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(91,91,214,0.3)" strokeWidth="0.8" strokeLinejoin="round" />
    <path d="M3 7h18" stroke="rgba(91,91,214,0.3)" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(91,91,214,0.3)" strokeWidth="0.8" strokeLinecap="round" />
  </svg>
);
const IcoShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IcoReturn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <polyline points="1 4 1 10 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/*
  ═══════════════════════════════════════════════
  COLOR SYSTEM — matched to full site indigo theme
  -----------------------------------------------
  page bg:       #FFFFFF → #F8F7FF → #F0EEFF
  card bg:       #FFFFFF
  card border:   rgba(91,91,214,0.14)  indigo subtle
  card hover:    rgba(91,91,214,0.22) border + shadow
  accent:        #5B5BD6 indigo
  accent lt:     #818CF8 indigo light
  accent dk:     #4338CA indigo dark
  text primary:  #1E1B4B deep navy
  text body:     #4B5563 dark grey
  text muted:    #6B7280 grey
  text faint:    #9CA3AF
  qty stepper:   indigo tinted bg
  size tag:      indigo bg/border
  discount:      green #059669
  remove btn:    red system — #EF4444
  CTA:           indigo gradient
  summary panel: white + indigo top border
  shimmer:       indigo (matches navbar)
  gold:          #C8924A — brand logo ONLY
  ═══════════════════════════════════════════════
*/

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
  const totalItems = cartData.reduce((s, i) => s + i.quantity, 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        /* ── Animations — all preserved ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmerIndigo {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes shimmerSlide {
          0%   { background-position: -600px 0; }
          100% { background-position:  600px 0; }
        }

        .cart-page  { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .cart-item  { animation: fadeIn 0.42s cubic-bezier(0.16,1,0.3,1) both; }
        .cart-panel { animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s both; }

        /* ── Indigo shimmer bar — matches navbar exactly ── */
        .indigo-shimmer {
          background: linear-gradient(90deg,
            transparent 0%, rgba(91,91,214,0.25) 15%,
            #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
            rgba(91,91,214,0.25) 85%, transparent 100%);
          background-size: 200% auto;
          animation: shimmerIndigo 3.5s linear infinite;
          height: 2px;
        }

        /* CTA button shimmer */
        .cta-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          background-size: 600px 100%;
          animation: shimmerSlide 2.6s infinite;
          opacity: 0; transition: opacity 0.3s;
        }
        .cta-btn:hover::after { opacity: 1; }

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }

        /* ── Cart item card ── */
        .cart-item-card {
          background: #FFFFFF;
          border: 1px solid rgba(91,91,214,0.14);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .cart-item-card:hover {
          border-color: rgba(91,91,214,0.38);
          box-shadow: 0 12px 36px rgba(91,91,214,0.10);
          transform: translateY(-2px);
        }
        /* Indigo top bar on hover — matches WhyCard from About */
        .cart-item-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, #4338CA, #5B5BD6, #818CF8);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .cart-item-card:hover::before { transform: scaleX(1); }

        /* ── Qty stepper ── */
        .qty-wrap {
          border: 1px solid rgba(91,91,214,0.18);
          background: rgba(91,91,214,0.04);
          border-radius: 999px;
          padding: 4px 6px;
          display: flex; align-items: center; gap: 6px;
        }
        .qty-btn {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(91,91,214,0.08);
          border: 1px solid rgba(91,91,214,0.18);
          color: #5B5BD6; cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          outline: none;
        }
        .qty-btn:hover:not(:disabled) {
          background: rgba(91,91,214,0.18);
          border-color: #5B5BD6;
          color: #4338CA;
        }
        .qty-btn:disabled { opacity: 0.3; cursor: default; }

        /* ── Size tag ── */
        .size-tag {
          background: rgba(91,91,214,0.08);
          border: 1px solid rgba(91,91,214,0.22);
          color: #4338CA;
          font-weight: 700;
        }
        /* ── Color tag ── */
        .color-tag {
          background: rgba(91,91,214,0.04);
          border: 1px solid rgba(91,91,214,0.12);
          color: #6B7280;
        }

        /* ── Remove button ── */
        .remove-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 6px;
          font-size: 9px; letter-spacing: 0.14em; font-weight: 600;
          text-transform: uppercase; cursor: pointer; outline: none;
          transition: all 0.2s;
          background: #FEF2F2;
          border: 1.5px solid #FCA5A5;
          color: #EF4444;
          font-family: 'Montserrat', sans-serif;
        }
        .remove-btn:hover {
          background: #EF4444;
          border-color: #EF4444;
          color: #FFFFFF;
          box-shadow: 0 3px 12px rgba(239,68,68,0.30);
        }

        /* ── Continue shopping ── */
        .continue-btn {
          width: 100%; padding: 14px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          border-radius: 8px; cursor: pointer; outline: none;
          font-size: 9px; letter-spacing: 0.22em; font-weight: 600;
          text-transform: uppercase; transition: all 0.2s;
          background: transparent;
          border: 1.5px solid rgba(91,91,214,0.25);
          color: #5B5BD6;
          font-family: 'Montserrat', sans-serif;
        }
        .continue-btn:hover {
          background: rgba(91,91,214,0.06);
          border-color: #5B5BD6;
          color: #4338CA;
        }

        /* ── Trust badge ── */
        .trust-badge-icon {
          width: 34px; height: 34px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: rgba(91,91,214,0.07);
          border: 1px solid rgba(91,91,214,0.14);
          color: #5B5BD6;
        }

        /* ── CTA button ── */
        .cta-btn {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #4338CA, #5B5BD6);
          color: #FFFFFF; border: none; cursor: pointer;
          width: 100%; padding: 15px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          border-radius: 8px;
          font-size: 10px; letter-spacing: 0.28em; font-weight: 700;
          text-transform: uppercase; transition: all 0.25s;
          font-family: 'Montserrat', sans-serif;
        }
        .cta-btn:hover:not(:disabled) {
          box-shadow: 0 8px 28px rgba(91,91,214,0.40);
          transform: translateY(-1px);
        }
        .cta-btn:disabled { opacity: 0.45; cursor: not-allowed; }

        /* ── Explore CTA (empty state) ── */
        .explore-btn {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #4338CA, #5B5BD6);
          color: #FFFFFF; border: none; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 32px; border-radius: 8px;
          font-size: 10px; letter-spacing: 0.28em; font-weight: 700;
          text-transform: uppercase; transition: all 0.25s;
          font-family: 'Montserrat', sans-serif;
        }
        .explore-btn:hover {
          box-shadow: 0 8px 28px rgba(91,91,214,0.40);
          transform: translateY(-1px);
        }
      `}</style>

      {/* ═══ PAGE WRAPPER ═══ */}
      <div
        className="cart-page min-h-screen px-4 sm:px-8 lg:px-16 pt-10 pb-24"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F8F7FF 40%, #F0EEFF 100%)",
          fontFamily: "'Montserrat', sans-serif",
          color: "#1E1B4B",
        }}
      >
        {/* ── Indigo shimmer top — matches navbar ── */}
        <div className="indigo-shimmer mb-8" />

        {/* ═══ PAGE HEADER ═══ */}
        <div className="mb-9">
          {/* Eyebrow */}
          <p style={{
            fontSize: 9, letterSpacing: "0.42em", fontWeight: 700,
            color: "#5B5BD6", textTransform: "uppercase",
            fontFamily: "Montserrat, sans-serif", marginBottom: 8,
          }}>
            D DOLLY LAMB
          </p>

          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <h1 style={{
                fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700,
                color: "#1E1B4B", letterSpacing: "0.06em",
                lineHeight: 1.15, margin: "0 0 6px",
                fontFamily: "Montserrat, sans-serif",
              }}>
                YOUR{" "}
                <span style={{
                  background: "linear-gradient(135deg, #4338CA, #5B5BD6, #818CF8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>CART</span>
              </h1>
              {!isCartEmpty && (
                <p style={{ fontSize: 11, color: "#6B7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {totalItems} {totalItems === 1 ? 'Item' : 'Items'} in your bag
                </p>
              )}
            </div>

            {/* Indigo ornament */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 4 }}>
              <div style={{ width: 48, height: 1, background: "linear-gradient(to left, rgba(91,91,214,0.3), transparent)" }} />
              <div style={{ width: 8, height: 8, transform: "rotate(45deg)", background: "#5B5BD6", opacity: 0.5 }} />
              <div style={{ width: 48, height: 1, background: "linear-gradient(to right, rgba(91,91,214,0.3), transparent)" }} />
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: 1, marginTop: 20,
            background: "linear-gradient(to right, transparent, rgba(91,91,214,0.2) 40%, rgba(91,91,214,0.2) 60%, transparent)",
          }} />
        </div>

        {/* ═══ EMPTY STATE ═══ */}
        {isCartEmpty ? (
          <div style={{
            borderRadius: 14, padding: "72px 32px", textAlign: "center",
            maxWidth: 420, margin: "0 auto",
            background: "#FFFFFF",
            border: "1px solid rgba(91,91,214,0.14)",
            boxShadow: "0 4px 24px rgba(91,91,214,0.07)",
          }}>
            <div style={{ marginBottom: 20, opacity: 0.6, display: "flex", justifyContent: "center" }}>
              <IcoBag />
            </div>
            <h2 style={{
              fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700,
              color: "#1E1B4B", marginBottom: 10,
            }}>
              Your bag is empty
            </h2>
            <p style={{
              fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#9CA3AF", marginBottom: 28,
            }}>
              Discover our artisan leather collection
            </p>
            <button
              className="explore-btn"
              onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}
            >
              EXPLORE COLLECTION <IcoArrow />
            </button>
          </div>

        ) : (
          /* ═══ TWO-COLUMN LAYOUT ═══ */
          <div className="flex gap-7 items-start flex-wrap lg:flex-nowrap">

            {/* ── LEFT: Cart items ── */}
            <div className="flex-1 min-w-[320px] flex flex-col gap-3">

              {cartData.map((item, index) => {
                const productData = products.find((p) => p._id === item._id);
                if (!productData) return null;

                const imageSrc = Array.isArray(productData.image)
                  ? productData.image[0]
                  : productData.image || assets.placeholder_image;

                const originalPrice = Number(productData.price);
                const discountPercent = Number(productData.discountPrice) || 0;
                const discountAmount = discountPercent > 0 && discountPercent < 100
                  ? (originalPrice * discountPercent) / 100 : 0;
                const salePrice = originalPrice - discountAmount;
                const unitPrice = salePrice + item.customPrice;
                const lineTotal = unitPrice * item.quantity;

                return (
                  <div
                    key={`${item._id}-${item.size}-${item.color}-${index}`}
                    className="cart-item cart-item-card relative flex items-stretch"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {/* Indigo hover top bar (via ::before in CSS) */}

                    {/* Product image */}
                    <div style={{
                      flexShrink: 0, width: 120,
                      minHeight: 110, background: "#F8F7FF",
                      overflow: "hidden",
                      borderRight: "1px solid rgba(91,91,214,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <img
                        src={imageSrc}
                        alt={productData.name || 'Product'}
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "contain", padding: 10, display: "block",
                          transition: "transform 0.5s",
                        }}
                        onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                        onMouseLeave={e => e.target.style.transform = "scale(1)"}
                        onError={(e) => { e.target.src = assets.placeholder_image; }}
                      />
                    </div>

                    {/* Card body */}
                    <div className="flex-1 flex flex-wrap items-center gap-3 p-4 sm:p-5 min-w-0">

                      {/* Name + meta */}
                      <div className="flex-1 min-w-[160px]">
                        <p style={{
                          fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase",
                          fontWeight: 700, color: "#818CF8", marginBottom: 6,
                        }}>
                          LAMBSKIN LEATHER
                        </p>
                        <p style={{
                          fontSize: 13, fontWeight: 600, lineHeight: 1.4,
                          color: "#1E1B4B", marginBottom: 10,
                          display: "-webkit-box", WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical", overflow: "hidden",
                        }}>
                          {productData.name}
                        </p>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          {item.size && (
                            <span className="size-tag" style={{
                              padding: "3px 10px", borderRadius: 4,
                              fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
                              fontFamily: "Montserrat, sans-serif",
                            }}>
                              SIZE: {item.size}
                            </span>
                          )}
                          {item.color && (
                            <span className="color-tag" style={{
                              padding: "3px 10px", borderRadius: 4,
                              fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase",
                              fontFamily: "Montserrat, sans-serif",
                            }}>
                              {item.color}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Unit price */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, flexShrink: 0 }}>
                        {discountPercent > 0 && (
                          <span style={{
                            fontSize: 11, textDecoration: "line-through",
                            color: "#9CA3AF", fontFamily: "Montserrat, sans-serif",
                          }}>
                            {currency}{originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span style={{
                          fontSize: 17, fontWeight: 700, lineHeight: 1,
                          color: "#4338CA", fontFamily: "Montserrat, sans-serif",
                        }}>
                          {currency}{salePrice.toFixed(2)}
                        </span>
                        {discountPercent > 0 && (
                          <span style={{
                            fontSize: 8, letterSpacing: "0.08em", fontWeight: 700,
                            color: "#059669", fontFamily: "Montserrat, sans-serif",
                            background: "rgba(5,150,105,0.08)",
                            padding: "2px 6px", borderRadius: 4,
                          }}>
                            SAVE {currency}{discountAmount.toFixed(2)} ({discountPercent}% OFF)
                          </span>
                        )}
                        {item.customPrice > 0 && (
                          <span style={{
                            fontSize: 9, letterSpacing: "0.06em", color: "#818CF8",
                            fontFamily: "Montserrat, sans-serif",
                          }}>
                            + Lining {currency}{item.customPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Qty stepper */}
                      <div className="qty-wrap">
                        <button
                          className="qty-btn"
                          disabled={item.quantity <= 1}
                          onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
                        >
                          <IcoMinus />
                        </button>

                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item._id, item.size, item.color, Number(e.target.value) || 1)}
                          style={{
                            width: 32, textAlign: "center",
                            background: "transparent", border: "none", outline: "none",
                            fontSize: 14, fontWeight: 700,
                            color: "#1E1B4B", fontFamily: "Montserrat, sans-serif",
                          }}
                        />

                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
                        >
                          <IcoPlus />
                        </button>
                      </div>

                      {/* Line total + remove */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                        <div style={{ textAlign: "right" }}>
                          <p style={{
                            fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase",
                            fontWeight: 600, color: "#9CA3AF", marginBottom: 4,
                            fontFamily: "Montserrat, sans-serif",
                          }}>
                            LINE TOTAL
                          </p>
                          <p style={{
                            fontSize: 17, fontWeight: 700, lineHeight: 1,
                            color: "#4338CA", fontFamily: "Montserrat, sans-serif",
                          }}>
                            {currency}{lineTotal.toFixed(2)}
                          </p>
                        </div>

                        <button
                          className="remove-btn"
                          onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
                        >
                          <IcoTrash /> REMOVE
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}

              {/* Item count footer */}
              <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 12, paddingRight: 4 }}>
                <p style={{
                  fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(91,91,214,0.45)", fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                }}>
                  {cartData.length} {cartData.length === 1 ? 'PRODUCT' : 'PRODUCTS'} · {totalItems} {totalItems === 1 ? 'UNIT' : 'UNITS'}
                </p>
              </div>
            </div>

            {/* ── RIGHT: Summary panel ── */}
            <div
              className="cart-panel"
              style={{
                width: 340, minWidth: 280, flexShrink: 0,
                position: "sticky", top: 24, alignSelf: "flex-start",
                borderRadius: 14, overflow: "hidden",
                background: "#FFFFFF",
                border: "1px solid rgba(91,91,214,0.16)",
                boxShadow: "0 4px 24px rgba(91,91,214,0.08)",
              }}
            >
              {/* Indigo top bar — 2px like navbar shimmer */}
              <div className="indigo-shimmer" />

              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 0 }}>

                <CartTotal />

                <div style={{ height: 16 }} />

                {/* Checkout CTA */}
                <button className="cta-btn" onClick={() => navigate('/place-order')} disabled={isCartEmpty}>
                  PROCEED TO CHECKOUT <IcoArrow />
                </button>

                <div style={{ height: 10 }} />

                {/* Continue shopping */}
                <button className="continue-btn" onClick={() => { navigate('/collection'); window.scrollTo(0, 0); }}>
                  <IcoBack /> CONTINUE SHOPPING
                </button>

                <div style={{ height: 20 }} />

                {/* Divider */}
                <div style={{
                  height: 1, marginBottom: 18,
                  background: "linear-gradient(to right, transparent, rgba(91,91,214,0.15), transparent)",
                }} />

                {/* Trust badges */}
                <p style={{
                  fontSize: 8, letterSpacing: "0.32em", textTransform: "uppercase",
                  color: "#9CA3AF", marginBottom: 14,
                  fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                }}>
                  WHY SHOP WITH US
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { icon: <IcoShield />, label: 'SECURE CHECKOUT', sub: 'SSL encrypted payment' },
                    { icon: <IcoPin />, label: 'TRACKED SHIPPING', sub: 'Real-time order updates' },
                    { icon: <IcoReturn />, label: '7-DAY EASY RETURNS', sub: 'Hassle-free returns' },
                  ].map((b) => (
                    <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div className="trust-badge-icon">{b.icon}</div>
                      <div>
                        <p style={{
                          fontSize: 9, letterSpacing: "0.16em", fontWeight: 700,
                          textTransform: "uppercase", color: "#4B5563",
                          fontFamily: "Montserrat, sans-serif", marginBottom: 2,
                        }}>
                          {b.label}
                        </p>
                        <p style={{
                          fontSize: 10, color: "#9CA3AF",
                          fontFamily: "Montserrat, sans-serif",
                        }}>
                          {b.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default Cart;