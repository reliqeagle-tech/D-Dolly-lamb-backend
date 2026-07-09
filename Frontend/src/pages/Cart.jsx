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
        {/* <div className="indigo-shimmer mb-8" /> */}

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