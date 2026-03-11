// import { IoMdClose } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import CartContents from "./CartContent";

// const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     toggleCartDrawer(); // close drawer
//     navigate('/place-order')// go to checkout page
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
//         drawerOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       {/* Close button */}
//       <div className="flex justify-end p-4">
//         <button onClick={toggleCartDrawer}>
//           <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black transition" />
//         </button>
//       </div>

//       {/* Cart content */}
//       <div className="flex-grow p-4 overflow-y-auto">
//         {/* <h2 className="text-xl font-semibold mb-4">Your Cart</h2> */}
//         <CartContents />
//       </div>

//       {/* Checkout section */}
//       <div className="p-4 bg-white border-t sticky bottom-0">
//         <button
//           onClick={handleCheckout}
//           className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
//         >
//           Checkout
//         </button>
//         <p className="text-sm tracking-tighter text-gray-500 mt-4 text-center">
//           Shipping, taxes, and discount codes calculated at checkout.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CartDrawer;




// import { IoMdClose } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import CartContents from "./CartContent"; // Assuming this is the correct import path; adjust if needed
// import { useRef, useEffect } from 'react'; // Add this import for useRef and useEffect

// const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
//   const navigate = useNavigate();
//   const drawerRef = useRef(null); // Add this ref to track the drawer element

//   // Add this useEffect to handle outside clicks
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (drawerOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
//         toggleCartDrawer(); // Close the drawer if click is outside
//       }
//     };

//     if (drawerOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     // Cleanup listener on unmount or when drawer closes
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [drawerOpen, toggleCartDrawer]);

//   const handleCheckout = () => {
//     toggleCartDrawer(); // close drawer
//     navigate('/place-order')// go to checkout page
//   };

//   return (
//     <div
//   ref={drawerRef}
//   className={`
//     fixed top-0 right-0
//     w-[90%] sm:w-3/4 md:w-[35rem]
//     h-full bg-white shadow-xl
//     transform transition-transform duration-300
//     flex flex-col
//     z-[9999]
//     ${drawerOpen ? "translate-x-0" : "translate-x-full"}
//   `}
// >
//   {/* Close button */}
//   <div className="flex justify-end p-4">
//     <button onClick={toggleCartDrawer}>
//       <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black transition" />
//     </button>
//   </div>

//   {/* Cart content */}
//   <div className="flex-grow px-4 pb-32 overflow-y-auto">
//     <CartContents />
//   </div>

//   {/* Bottom Checkout Bar (ALWAYS visible) */}
//   <div className="fixed bottom-0 right-0 w-[85%] sm:w-[60%] md:w-[30rem] bg-white border-t p-4 shadow-xl">
//     <button
//       onClick={handleCheckout}
//       className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
//     >
//       Checkout
//     </button>

//     <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center leading-tight">
//       Shipping, taxes, and discount codes calculated at checkout.
//     </p>
//   </div>
// </div>

//   );
// };

// export default CartDrawer;

import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContent from './CartContent';

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

const DRAWER_STYLES = `
  @keyframes overlayFadeIn { from { opacity:0; } to { opacity:1; } }

  .cd-overlay {
    position:fixed; inset:0;
    background:rgba(10,5,2,0.72);
    backdrop-filter:blur(3px);
    z-index:99998;
    animation:overlayFadeIn 0.3s ease both;
  }

  .cd-panel {
    position:fixed; top:0; right:0; bottom:0;
    width: min(420px, 100vw);
    background: linear-gradient(170deg,#1e120a 0%,#130a04 100%);
    border-left:1px solid rgba(200,151,58,0.18);
    z-index:99999;
    display:flex; flex-direction:column;
    box-shadow: -20px 0 80px rgba(0,0,0,0.7);
    transition:transform 0.38s cubic-bezier(0.4,0,0.2,1);
    font-family:Georgia,serif;
  }
  .cd-panel.closed { transform:translateX(100%); pointer-events:none; }

  .cd-scroll::-webkit-scrollbar { width:4px; }
  .cd-scroll::-webkit-scrollbar-track { background:transparent; }
  .cd-scroll::-webkit-scrollbar-thumb { background:rgba(200,151,58,0.25); border-radius:2px; }
  .cd-scroll::-webkit-scrollbar-thumb:hover { background:rgba(200,151,58,0.45); }

  .cd-checkout-btn {
    width:100%; padding:15px 24px;
    background:linear-gradient(135deg,#c8973a,#f7c568);
    color:#1a0f0a; border:none;
    font-size:11px; letter-spacing:0.24em;
    font-family:Arial,sans-serif; font-weight:700;
    cursor:pointer; transition:all 0.25s;
    display:flex; align-items:center; justify-content:center; gap:8px;
  }
  .cd-checkout-btn:hover {
    opacity:0.9; box-shadow:0 8px 30px rgba(200,151,58,0.35); transform:translateY(-1px);
  }
  .cd-shop-btn {
    width:100%; padding:12px 24px;
    background:transparent; color:#c8973a;
    border:1px solid rgba(200,151,58,0.3);
    font-size:10px; letter-spacing:0.2em;
    font-family:Arial,sans-serif; font-weight:600;
    cursor:pointer; transition:all 0.25s;
  }
  .cd-shop-btn:hover {
    border-color:#c8973a; color:#f7c568; background:rgba(200,151,58,0.07);
  }

  /* ── Payment chip ── */
  .cd-pay-chip {
    font-size:8px; letter-spacing:0.16em;
    color:#a08060;                          /* ✅ readable warm tan */
    font-family:Arial,sans-serif; font-weight:700;
    padding:4px 9px;
    border:1px solid rgba(200,151,58,0.22);
    background:rgba(200,151,58,0.05);
    transition:border-color 0.2s, color 0.2s;
  }
  .cd-pay-chip:hover { border-color:rgba(200,151,58,0.5); color:#c8973a; }
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

        {/* Gold top accent */}
        <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.7, flexShrink: 0 }} />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px 16px", borderBottom: "1px solid rgba(200,151,58,0.12)", flexShrink: 0 }}>
          <div>
            <p style={{ fontSize: 8, letterSpacing: "0.42em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 4 }}>
              D DOLLY LAMB
            </p>
            <h3 style={{ fontSize: 16, color: "#f7c568", fontWeight: 400, letterSpacing: "0.12em", margin: 0 }}>
              CART
            </h3>
          </div>
          <button onClick={toggleCartDrawer}
            style={{ width: 34, height: 34, background: "rgba(200,151,58,0.07)", border: "1px solid rgba(200,151,58,0.2)", color: "#c8973a", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s", flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,151,58,0.15)"; e.currentTarget.style.borderColor = "#c8973a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(200,151,58,0.07)"; e.currentTarget.style.borderColor = "rgba(200,151,58,0.2)"; }}>
            <IconClose />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="cd-scroll" style={{ flex: 1, overflowY: "auto", overflowX: "hidden", padding: "22px 20px 20px" }}>
          <CartContent />
        </div>

        {/* Bottom bar */}
        <div style={{ flexShrink: 0, borderTop: "1px solid rgba(200,151,58,0.15)", background: "linear-gradient(0deg,#0d0703 0%,#1a0f0a 100%)", padding: "16px 20px 20px" }}>

          {/* Secure badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 14 }}>
            <span style={{ color: "#c8973a" }}><IconLock /></span>
            <span style={{ fontSize: 9, color: "#c8973a", letterSpacing: "0.18em", fontFamily: "Arial", fontWeight: 600 }}>
              {/* ✅ was #5a4030 — now fully visible gold */}
              SECURE & ENCRYPTED CHECKOUT
            </span>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <button className="cd-checkout-btn" onClick={handleCheckout}>
              PROCEED TO CHECKOUT <IconArrow />
            </button>
            <button className="cd-shop-btn" onClick={() => { toggleCartDrawer(); navigate('/collection'); }}>
              CONTINUE SHOPPING
            </button>
          </div>

          {/* Payment chips — ✅ were #3a2510 (near-black), now #a08060 */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
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