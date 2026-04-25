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
//             <p style={{ fontSize: 13, color: "#a08060", fontStyle: "italic", marginBottom: 24 }}>
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
//               <span style={{ fontSize: 10, letterSpacing: "0.22em", color: "#a08060", fontFamily: "Arial" }}>
//                 {cartData.length} {cartData.length === 1 ? "PIECE" : "PIECES"}
//               </span>
//               <span style={{ fontSize: 12, color: "#a08060" }}>
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
//                           <p style={{ fontSize: 9, color: "#c8973a", fontStyle: "italic" }}>
//                             Base {currency}{productData.price.toFixed(2)} + Custom {currency}{item.customPrice.toFixed(2)}
//                           </p>
//                         )}
//                         <p style={{ fontSize: 10, color: "#a08060", marginTop: 2 }}>
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

/* ── Icons ── */
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
    <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="rgba(91,91,214,0.35)" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M3 7h18" stroke="rgba(91,91,214,0.35)" strokeWidth="1.2" />
    <path d="M16 10a4 4 0 0 1-8 0" stroke="rgba(91,91,214,0.35)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes ccFadeUp {
    from { opacity:0; transform:translateY(14px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes shimmerIndigo {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  .cc-item {
    animation: ccFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both;
  }
  .cc-item:nth-child(1){ animation-delay:0.05s; }
  .cc-item:nth-child(2){ animation-delay:0.10s; }
  .cc-item:nth-child(3){ animation-delay:0.15s; }
  .cc-item:nth-child(4){ animation-delay:0.20s; }
  .cc-item:nth-child(5){ animation-delay:0.25s; }

  /* ── Qty buttons — indigo ── */
  .cc-qty-btn {
    width: 28px; height: 28px;
    background: rgba(91,91,214,0.07);
    border: 1px solid rgba(91,91,214,0.20);
    color: #5B5BD6;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.18s; flex-shrink: 0;
    border-radius: 6px;
  }
  .cc-qty-btn:hover {
    background: rgba(91,91,214,0.16);
    border-color: #5B5BD6;
    color: #4338CA;
  }
  .cc-qty-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  /* ── Delete button — red system ── */
  .cc-del-btn {
    width: 30px; height: 30px;
    background: #FEF2F2;
    border: 1px solid #FCA5A5;
    color: #EF4444;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.18s;
    border-radius: 6px; flex-shrink: 0;
  }
  .cc-del-btn:hover {
    background: #EF4444;
    border-color: #EF4444;
    color: #FFFFFF;
    box-shadow: 0 3px 10px rgba(239,68,68,0.28);
  }

  /* ── Image hover zoom ── */
  .cc-img { transition: transform 0.4s ease; }
  .cc-item:hover .cc-img { transform: scale(1.04); }

  /* ── Row divider ── */
  .cc-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(91,91,214,0.12), transparent);
  }

  /* ── Variant tag ── */
  .cc-tag {
    font-size: 9px; letter-spacing: 0.18em;
    color: #4338CA; font-family: Montserrat, sans-serif; font-weight: 700;
    padding: 3px 10px; border-radius: 4px;
    background: rgba(91,91,214,0.08);
    border: 1px solid rgba(91,91,214,0.20);
    text-transform: uppercase;
  }

  /* ── Qty display box ── */
  .cc-qty-val {
    min-width: 36px; text-align: center;
    font-size: 13px; font-weight: 700;
    color: #1E1B4B; font-family: Montserrat, sans-serif;
    padding: 4px 6px;
    background: rgba(91,91,214,0.05);
    border: 1px solid rgba(91,91,214,0.14);
    border-radius: 6px;
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

      <div style={{ fontFamily: "Montserrat, sans-serif", color: "#1E1B4B", minHeight: 200 }}>

        {/* ── Page heading ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(91,91,214,0.25))" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontSize: 8, letterSpacing: "0.38em", color: "#818CF8",
              fontFamily: "Montserrat, sans-serif", fontWeight: 700, marginBottom: 4,
              textTransform: "uppercase",
            }}>
              D DOLLY LAMB
            </p>
            <h2 style={{
              fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 700,
              color: "#1E1B4B", letterSpacing: "0.06em", margin: 0, lineHeight: 1,
            }}>
              YOUR CART
            </h2>
          </div>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(91,91,214,0.25))" }} />
        </div>

        {/* ── Empty state ── */}
        {isCartEmpty ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18, opacity: 0.5 }}>
              <IconBag />
            </div>
            <p style={{
              fontSize: 13, color: "#6B7280", marginBottom: 24,
              fontFamily: "Montserrat, sans-serif", fontWeight: 500,
            }}>
              Your cart is empty
            </p>
            <button
              onClick={() => navigate('/collection')}
              style={{
                padding: "12px 36px", borderRadius: 8,
                background: "linear-gradient(135deg, #4338CA, #5B5BD6)",
                color: "#FFFFFF", border: "none",
                fontSize: 10, letterSpacing: "0.22em",
                fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                cursor: "pointer", transition: "all 0.25s",
                boxShadow: "0 4px 14px rgba(91,91,214,0.30)",
              }}
              onMouseEnter={e => { e.target.style.opacity = "0.88"; e.target.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
            >
              SHOP THE COLLECTION
            </button>
          </div>

        ) : (
          <>
            {/* ── Item count + tax note ── */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <span style={{
                fontSize: 10, letterSpacing: "0.2em", color: "#818CF8",
                fontFamily: "Montserrat, sans-serif", fontWeight: 700, textTransform: "uppercase",
              }}>
                {cartData.length} {cartData.length === 1 ? "PIECE" : "PIECES"}
              </span>
              <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "Montserrat, sans-serif" }}>
                All prices include taxes
              </span>
            </div>

            {/* ── Cart items ── */}
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
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr auto",
                      gap: 14, padding: "18px 0",
                      alignItems: "start",
                    }}>

                      {/* Product image */}
                      <div style={{
                        width: 80, height: 96, overflow: "hidden",
                        background: "#F8F7FF", borderRadius: 8,
                        border: "1px solid rgba(91,91,214,0.12)",
                        flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <img
                          className="cc-img"
                          src={imageSrc}
                          alt={productData.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                          onError={e => { e.target.src = assets.placeholder_image; }}
                        />
                      </div>

                      {/* Product info */}
                      <div style={{ minWidth: 0 }}>
                        <p style={{
                          fontSize: 13, color: "#1E1B4B", lineHeight: 1.4,
                          marginBottom: 8, letterSpacing: "0.02em",
                          fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                        }}>
                          {productData.name}
                        </p>

                        {/* Variant tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                          {[item.size, item.color].map((tag, t) => (
                            <span key={t} className="cc-tag">{tag}</span>
                          ))}
                        </div>

                        {/* Price */}
                        <p style={{
                          fontSize: 15, fontWeight: 700, color: "#4338CA",
                          letterSpacing: "0.02em", marginBottom: 2,
                          fontFamily: "Montserrat, sans-serif",
                        }}>
                          {currency}{unitPrice.toFixed(2)}
                        </p>
                        {item.customPrice > 0 && (
                          <p style={{
                            fontSize: 9, color: "#818CF8",
                            fontFamily: "Montserrat, sans-serif", marginBottom: 2,
                          }}>
                            Base {currency}{productData.price.toFixed(2)} + Custom {currency}{item.customPrice.toFixed(2)}
                          </p>
                        )}
                        <p style={{ fontSize: 10, color: "#9CA3AF", fontFamily: "Montserrat, sans-serif" }}>
                          Line total: <span style={{ color: "#4B5563", fontWeight: 600 }}>{currency}{lineTotal.toFixed(2)}</span>
                        </p>

                        {/* Qty controls */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
                          <button
                            className="cc-qty-btn"
                            disabled={item.quantity <= 1}
                            onClick={() => updateQuantity(item._id, item.size, item.color, Math.max(1, item.quantity - 1))}
                          >
                            <IconMinus />
                          </button>
                          <span className="cc-qty-val">{item.quantity}</span>
                          <button
                            className="cc-qty-btn"
                            onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
                          >
                            <IconPlus />
                          </button>
                        </div>
                      </div>

                      {/* Delete btn */}
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

            {/* Cart Total */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 36 }}>
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