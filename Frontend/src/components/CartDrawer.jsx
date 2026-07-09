import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContent from './CartContent';

/* ── Icons ── */
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconLock = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/*
  ═══════════════════════════════════════════════
  COLOR SYSTEM — indigo/white, full site match
  -----------------------------------------------
  overlay:       rgba(30,27,75,0.50) deep navy + blur
  panel bg:      #FFFFFF white
  panel border:  rgba(91,91,214,0.15) indigo
  shimmer top:   indigo (matches navbar exactly)
  header bg:     #F8F7FF soft
  header title:  #1E1B4B dark navy
  eyebrow:       #818CF8 indigoLt
  close btn:     indigo → red hover
  checkout CTA:  indigo gradient
  shop btn:      indigo outline
  secure badge:  indigo icon + text
  payment chips: indigo border/text
  scrollbar:     indigo tint
  bottom bar:    #F8F7FF soft
  ═══════════════════════════════════════════════
*/

const DRAWER_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes overlayFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes shimmerIndigo {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  /* ── Backdrop overlay ── */
  .cd-overlay {
    position: fixed; inset: 0;
    background: rgba(30,27,75,0.50);
    backdrop-filter: blur(4px);
    WebkitBackdropFilter: blur(4px);
    z-index: 99998;
    animation: overlayFadeIn 0.3s ease both;
  }

  /* ── Drawer panel ── */
  .cd-panel {
    position: fixed; top: 0; right: 0; bottom: 0;
    width: min(420px, 100vw);
    background: #FFFFFF;
    border-left: 1px solid rgba(91,91,214,0.15);
    z-index: 99999;
    display: flex; flex-direction: column;
    box-shadow: -16px 0 60px rgba(91,91,214,0.12), -4px 0 20px rgba(0,0,0,0.06);
    transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
    font-family: 'Montserrat', sans-serif;
  }
  .cd-panel.closed { transform: translateX(100%); pointer-events: none; }

  /* ── Indigo shimmer top bar ── */
  .cd-shimmer {
    height: 2px; flex-shrink: 0;
    background: linear-gradient(90deg,
      transparent 0%, rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 3.5s linear infinite;
  }

  /* ── Scrollbar ── */
  .cd-scroll::-webkit-scrollbar { width: 4px; }
  .cd-scroll::-webkit-scrollbar-track { background: transparent; }
  .cd-scroll::-webkit-scrollbar-thumb { background: rgba(91,91,214,0.22); border-radius: 4px; }
  .cd-scroll::-webkit-scrollbar-thumb:hover { background: rgba(91,91,214,0.40); }

  /* ── Checkout CTA button ── */
  .cd-checkout-btn {
    width: 100%; padding: 15px 24px;
    background: linear-gradient(135deg, #4338CA, #5B5BD6);
    color: #FFFFFF; border: none; border-radius: 8px;
    font-size: 11px; letter-spacing: 0.24em;
    font-family: Montserrat, sans-serif; font-weight: 700;
    cursor: pointer; transition: all 0.25s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    text-transform: uppercase;
  }
  .cd-checkout-btn:hover {
    opacity: 0.9;
    box-shadow: 0 8px 28px rgba(91,91,214,0.38);
    transform: translateY(-1px);
  }

  /* ── Continue shopping button ── */
  .cd-shop-btn {
    width: 100%; padding: 12px 24px;
    background: transparent; color: #5B5BD6;
    border: 1.5px solid rgba(91,91,214,0.28); border-radius: 8px;
    font-size: 10px; letter-spacing: 0.2em;
    font-family: Montserrat, sans-serif; font-weight: 600;
    cursor: pointer; transition: all 0.25s; text-transform: uppercase;
  }
  .cd-shop-btn:hover {
    border-color: #5B5BD6;
    background: rgba(91,91,214,0.06);
    color: #4338CA;
  }

  /* ── Payment chip ── */
  .cd-pay-chip {
    font-size: 8px; letter-spacing: 0.16em;
    color: #818CF8;
    font-family: Montserrat, sans-serif; font-weight: 700;
    padding: 4px 9px; border-radius: 4px;
    border: 1px solid rgba(91,91,214,0.20);
    background: rgba(91,91,214,0.06);
    transition: border-color 0.2s, color 0.2s;
    text-transform: uppercase;
  }
  .cd-pay-chip:hover { border-color: #5B5BD6; color: #5B5BD6; }

  /* ── Close button ── */
  .cd-close-btn {
    width: 34px; height: 34px;
    background: rgba(91,91,214,0.07);
    border: 1px solid rgba(91,91,214,0.20);
    color: #5B5BD6;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.2s; flex-shrink: 0;
    border-radius: 8px;
  }
  .cd-close-btn:hover {
    background: rgba(239,68,68,0.08);
    border-color: rgba(239,68,68,0.35);
    color: #EF4444;
  }
`;

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerOpen && drawerRef.current && !drawerRef.current.contains(e.target))
        toggleCartDrawer();
    };
    if (drawerOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [drawerOpen, toggleCartDrawer]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleCheckout = () => { toggleCartDrawer(); navigate('/place-order'); };

  return (
    <>
      <style>{DRAWER_STYLES}</style>

      {drawerOpen && <div className="cd-overlay" onClick={toggleCartDrawer} />}

      <div ref={drawerRef} className={`cd-panel${drawerOpen ? '' : ' closed'}`}>

        {/* Indigo shimmer top — matches navbar */}
        <div className="cd-shimmer" />

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 22px 16px",
          borderBottom: "1px solid rgba(91,91,214,0.10)",
          background: "linear-gradient(135deg, #F8F7FF, #FFFFFF)",
          flexShrink: 0,
        }}>
          <div>
            <p style={{
              fontSize: 8, letterSpacing: "0.42em", color: "#818CF8",
              fontFamily: "Montserrat, sans-serif", fontWeight: 700, marginBottom: 4,
              textTransform: "uppercase",
            }}>
              D DOLLY LAMB
            </p>
            <h3 style={{
              fontSize: 16, color: "#1E1B4B", fontWeight: 700,
              letterSpacing: "0.10em", margin: 0,
              fontFamily: "Montserrat, sans-serif",
            }}>
              CART
            </h3>
          </div>
          <button className="cd-close-btn" onClick={toggleCartDrawer}>
            <IconClose />
          </button>
        </div>

        {/* ── Scrollable content ── */}
        <div className="cd-scroll" style={{
          flex: 1, overflowY: "auto", overflowX: "hidden",
          padding: "22px 20px 20px",
          background: "#FFFFFF",
        }}>
          <CartContent />
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          flexShrink: 0,
          borderTop: "1px solid rgba(91,91,214,0.10)",
          background: "#F8F7FF",
          padding: "16px 20px 20px",
        }}>

          {/* Secure badge */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 6, marginBottom: 14,
          }}>
            <span style={{ color: "#5B5BD6" }}><IconLock /></span>
            <span style={{
              fontSize: 9, color: "#5B5BD6", letterSpacing: "0.18em",
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              textTransform: "uppercase",
            }}>
              SECURE & ENCRYPTED CHECKOUT
            </span>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <button className="cd-checkout-btn" onClick={handleCheckout}>
              PROCEED TO CHECKOUT <IconArrow />
            </button>
            <button className="cd-shop-btn"
              onClick={() => { toggleCartDrawer(); navigate('/collection'); }}>
              CONTINUE SHOPPING
            </button>
          </div>

          {/* Payment chips */}
          <div style={{
            display: "flex", justifyContent: "center",
            gap: 8, marginTop: 14, flexWrap: "wrap",
          }}>
            {["VISA", "MASTERCARD", "AMEX", "PAYPAL"].map(p => (
              <span key={p} className="cd-pay-chip">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;