import React, { useContext, useState, useEffect } from "react";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

/* ══════════════════════════════════════════
   COLOR SYSTEM — matched to Wishlist.jsx
   ──────────────────────────────────────────
   page bg:       #FFFFFF → #F4F5FF → #EEF0FF
   card bg:       #FFFFFF
   card border:   rgba(99,102,241,0.14)
   accent:        #6366F1 / #818CF8 / #4338CA
   text primary:  #1E1B4B
   text body:     #4B5563
   text muted:    #6B7280
   text faint:    #9CA3AF
══════════════════════════════════════════ */

const C = {
  indigo: "#6366F1",
  indigoLt: "#818CF8",
  indigoDk: "#4338CA",
  navyText: "#1E1B4B",
  bodyText: "#4B5563",
  mutedText: "#6B7280",
  faintText: "#9CA3AF",
  bgPage: "#FFFFFF",
  bgSoft: "#F8F7FF",
  bgSection: "#F4F5FF",
  bgDeep: "#EEF0FF",
  borderHi: "rgba(99,102,241,0.22)",
  borderLo: "rgba(99,102,241,0.10)",
  borderMid: "rgba(99,102,241,0.14)",
};

/* ── Inline SVG icons ──────────────────────────────── */
const IconUser = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke={C.indigo} strokeWidth="1.4" />
    <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke={C.indigo} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke={C.indigo} strokeWidth="1.4" />
    <path d="M2 8l10 6 10-6" stroke={C.indigo} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconMap = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={C.indigo} strokeWidth="1.4" />
    <circle cx="12" cy="9" r="2.5" stroke={C.indigo} strokeWidth="1.4" />
  </svg>
);
const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" stroke={C.indigo} strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const IconBuilding = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={C.indigo} strokeWidth="1.4" />
    <path d="M9 21V9h6v12" stroke={C.indigo} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M3 9h18" stroke={C.indigo} strokeWidth="1.4" />
  </svg>
);
const IconGlobe = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={C.indigo} strokeWidth="1.4" />
    <path d="M2 12h20M12 2c-2 3-3 6-3 10s1 7 3 10M12 2c2 3 3 6 3 10s-1 7-3 10" stroke={C.indigo} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconZip = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke={C.indigo} strokeWidth="1.4" />
    <path d="M8 6h8M8 10h5M8 14h6" stroke={C.indigo} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke={C.indigo} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke={C.indigo} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconCheck = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconTruck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M1 3h15v13H1z" stroke={C.indigo} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M16 8h4l3 4v4h-7V8z" stroke={C.indigo} strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="5.5" cy="18.5" r="2" stroke={C.indigo} strokeWidth="1.4" />
    <circle cx="18.5" cy="18.5" r="2" stroke={C.indigo} strokeWidth="1.4" />
  </svg>
);
const IconReturn = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M4 12a8 8 0 0 1 14.93-4H15" stroke={C.indigo} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 4v4h-4" stroke={C.indigo} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Step indicator ─────────────────────────────────── */
const steps = ["Cart", "Delivery", "Payment", "Confirm"];

const StepBar = ({ current }) => (
  <div className="flex items-center gap-0">
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: i < current
                ? "linear-gradient(135deg, #4338CA, #6366F1)"
                : i === current
                  ? "rgba(99,102,241,0.12)"
                  : "rgba(99,102,241,0.04)",
              border: i === current
                ? `1.5px solid ${C.indigo}`
                : i < current ? "none" : `1px solid rgba(99,102,241,0.2)`,
            }}
          >
            {i < current
              ? <IconCheck />
              : <span className="text-[9px] font-bold" style={{ color: i === current ? C.indigo : C.faintText }}>{i + 1}</span>
            }
          </div>
          <span
            className="text-[7px] tracking-[0.18em] font-semibold uppercase whitespace-nowrap"
            style={{ color: i <= current ? C.indigo : C.faintText, fontFamily: "Montserrat, sans-serif" }}
          >
            {s}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div
            className="h-px mx-1.5 mb-[18px]"
            style={{
              width: 32,
              background: i < current
                ? `linear-gradient(to right, ${C.indigoDk}, ${C.indigo})`
                : "rgba(99,102,241,0.15)",
            }}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ── Section card wrapper ── */
const SectionCard = ({ children }) => (
  <div
    className="rounded-xl overflow-hidden mb-5"
    style={{
      background: "#FFFFFF",
      border: `1px solid ${C.borderMid}`,
      boxShadow: "0 2px 16px rgba(99,102,241,0.07)",
    }}
  >
    {/* Indigo top accent bar */}
    <div style={{
      height: 2,
      background: "linear-gradient(to right, #4338CA, #6366F1, #818CF8)",
    }} />
    <div className="p-6 sm:p-7">{children}</div>
  </div>
);

/* ── Section heading ── */
const SectionHeading = ({ step, icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        background: "rgba(99,102,241,0.08)",
        border: `1px solid rgba(99,102,241,0.22)`,
      }}
    >
      {icon}
    </div>
    <div>
      <p className="text-[8px] tracking-[0.34em] font-bold uppercase mb-0.5"
        style={{ color: C.indigoLt, fontFamily: "Montserrat, sans-serif" }}>{step}</p>
      <p className="text-sm tracking-[0.04em] font-semibold"
        style={{ color: C.navyText, fontFamily: "Montserrat, sans-serif" }}>{title}</p>
    </div>
  </div>
);

/* ── Styled input field ── */
const Field = ({ icon, label, name, value, onChange, type = "text", placeholder, required, half }) => (
  <div className={`flex flex-col gap-1.5 ${half ? "flex-1 min-w-[120px]" : "w-full"}`}>
    <label
      className="text-[8.5px] tracking-[0.28em] font-semibold uppercase flex items-center gap-1.5"
      style={{ color: C.indigo, fontFamily: "Montserrat, sans-serif" }}
    >
      {icon} {label}{required && <span style={{ color: C.indigo }}>*</span>}
    </label>
    <input
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 text-sm outline-none rounded-lg transition-all duration-200"
      style={{
        background: C.bgSoft,
        border: `1px solid ${C.borderMid}`,
        color: C.navyText,
        fontFamily: "Montserrat, sans-serif",
      }}
      onFocus={e => {
        e.target.style.borderColor = C.indigo;
        e.target.style.background = "rgba(99,102,241,0.05)";
        e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.10)";
      }}
      onBlur={e => {
        e.target.style.borderColor = C.borderMid;
        e.target.style.background = C.bgSoft;
        e.target.style.boxShadow = "none";
      }}
    />
  </div>
);

/* ── Payment option ── */
const PayOption = ({ id, method, setMethod, label, logo, sublabel }) => {
  const active = method === id;
  return (
    <div
      onClick={() => setMethod(id)}
      className="flex-1 min-w-[140px] p-3.5 cursor-pointer transition-all duration-200 rounded-xl relative overflow-hidden"
      style={{
        background: active ? "rgba(99,102,241,0.07)" : C.bgSoft,
        border: active ? `1.5px solid ${C.indigo}` : `1px solid ${C.borderMid}`,
        boxShadow: active ? "0 4px 16px rgba(99,102,241,0.12)" : "none",
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = C.borderHi; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = C.borderMid; }}
    >
      {active && (
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(to right, ${C.indigoDk}, ${C.indigo}, ${C.indigoLt})` }} />
      )}
      <div className="flex items-center gap-2.5">
        <div
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            border: active ? "none" : `1.5px solid rgba(99,102,241,0.35)`,
            background: active ? `linear-gradient(135deg, ${C.indigoDk}, ${C.indigo})` : "transparent",
          }}
        >
          {active && <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#FFFFFF" }} />}
        </div>
        {logo
          ? <img src={logo} alt={label} className="h-5 object-contain transition-all duration-200"
            style={{ filter: active ? "none" : "grayscale(40%) opacity(0.75)" }} />
          : <span className="text-[11px] tracking-[0.16em] font-semibold"
            style={{ color: active ? C.indigoDk : C.indigo, fontFamily: "Montserrat, sans-serif" }}>{label}</span>
        }
      </div>
      {sublabel && (
        <p className="text-[9px] mt-1.5 tracking-[0.08em]"
          style={{ color: active ? C.indigo : C.faintText, fontFamily: "Montserrat, sans-serif" }}>{sublabel}</p>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   PLACE ORDER PAGE
══════════════════════════════════════════════════════ */
const PlaceOrder = () => {
  const [method, setMethod] = useState("stripe");
  const [loading, setLoading] = useState(false);
  const [isPayPalReady, setIsPayPalReady] = useState(false);
  const [orderDataForPayPal, setOrderDataForPayPal] = useState(null);
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [{ isResolved }, paypalDispatch] = usePayPalScriptReducer();
  const {
    navigate, backendUrl, token, cartItems,
    setCartItems, getCartAmount, delivery_fee, products,
    savedAddress, saveAddress,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState(
    savedAddress || {
      firstName: "", lastName: "", email: "",
      street: "", city: "", state: "",
      zipcode: "", country: "", phone: "",
    }
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(d => ({ ...d, [name]: value }));
  };

  useEffect(() => {
    if (window.Razorpay) { setRazorpayReady(true); return; }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayReady(true);
    script.onerror = () => toast.error("Failed to load payment gateway. Please refresh.");
    document.body.appendChild(script);
    // cleanup optional — SDK is harmless to leave loaded if user navigates away and back
  }, []);

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "D Dolly Lamb",
      description: "Artisan Leather Order",
      order_id: order.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/order/verifyRazorpay`,
            response,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (data.success) {
            setCartItems({});
            navigate("/orders");
            toast.success("Payment successful!");
          } else {
            toast.error(data.message || "Verification failed");
          }
        } catch (err) {
          toast.error(err.message);
        }
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: C.indigo },
      modal: { ondismiss: () => toast.info("Payment cancelled") }
    };
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', (response) => {
      toast.error("Payment failed: " + response.error.description);
    });
    rzp.open();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!token) return toast.error("Please log in to place an order");
    saveAddress(formData);
    setLoading(true);
    try {
      // let orderItems = [];
      // for (const productId in cartItems) {
      //   const variants = cartItems[productId];
      //   const productInfo = products.find(p => p._id === productId);
      //   if (!productInfo) continue;
      //   for (const variantKey in variants) {
      //     if (variantKey === "quantity" || variantKey === "customPrice") continue;
      //     const qty = variants[variantKey];
      //     if (!qty || qty <= 0) continue;
      //     const [size, color] = variantKey.split("-");
      //     orderItems.push({
      //       productId, name: productInfo.name, price: productInfo.price,
      //       quantity: qty, size, color, image: productInfo.image?.[0]
      //     });
      //   }
      // }
      let orderItems = [];
      for (const productId in cartItems) {
        const variants = cartItems[productId];
        const productInfo = products.find(p => p._id === productId);
        if (!productInfo) continue;
        // ✅ Calculate discounted price once per product
        const original = Number(productInfo.price);
        const discountPercent = Number(productInfo.discountPrice) || 0;
        const discountAmount = discountPercent > 0 && discountPercent < 100
          ? (original * discountPercent) / 100
          : 0;
        const finalPrice = original - discountAmount;

        for (const variantKey in variants) {
          const variantData = variants[variantKey];
          const qty = Number(variantData?.quantity) || 0;
          const customPrice = Number(variantData?.customPrice) || 0;
          if (!qty || qty <= 0) continue;
          const [size, color] = variantKey.split("-");
          orderItems.push({
            productId,
            name: productInfo.name,
            price: finalPrice + customPrice,
            quantity: qty,
            size,
            color,
            image: productInfo.image?.[0]
          });
        }
      }
      const orderData = { address: formData, items: orderItems, amount: getCartAmount() + delivery_fee };
      const cfg = { headers: { Authorization: `Bearer ${token}` } };

      if (method === "stripe") {
        const r = await axios.post(`${backendUrl}/api/order/stripe`, orderData, cfg);
        if (r.data.success) window.location.replace(r.data.session_url);
        else toast.error(r.data.message);
      } else if (method === "razorpay") {
        const r = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, cfg);
        if (r.data.success) initPay(r.data.order);
        else toast.error(r.data.message);
      } else if (method === "paypal") {
        setOrderDataForPayPal(orderData);
        setIsPayPalReady(true);
        setTimeout(() => {
          document.getElementById("paypal-btn")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handlePaypalSelect = () => {
    setMethod("paypal");
    setIsPayPalReady(false);
    if (!isResolved) {
      paypalDispatch({ type: "setLoadingStatus", value: "pending" });
    }
  };

  return (
    <>
      <style>{`
        @keyframes poFadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .po-fadein       { animation: poFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        .po-fadein-delay { animation: poFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) 0.15s both; }

        @keyframes shimmerIndigo {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .po-shimmer-bar {
          background: linear-gradient(90deg,
            transparent 0%, rgba(99,102,241,0.3) 20%,
            #6366F1 45%, #818CF8 50%, #6366F1 55%,
            rgba(99,102,241,0.3) 80%, transparent 100%);
          background-size: 200% auto;
          animation: shimmerIndigo 4s linear infinite;
          height: 2px;
        }

        @keyframes abPulse {
          0%,100% { opacity: 0.35; } 50% { opacity: 0.65; }
        }

        .po-grid-bg { position: relative; }
        .po-grid-bg::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        .po-spinner {
          width:16px; height:16px;
          border:2px solid rgba(255,255,255,0.4);
          border-top-color:#FFFFFF;
          border-radius:50%;
          animation:spin 0.7s linear infinite;
        }

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }
        input::placeholder { color: rgba(99,102,241,0.35); font-style: italic; }
        * { box-sizing: border-box; }
      `}</style>

      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F4F5FF 35%, #EEF0FF 100%)",
          fontFamily: "Montserrat, sans-serif",
          color: C.navyText,
        }}
      >
        {/* ── HERO HEADER ── */}
        <div
          className="po-grid-bg"
          style={{
            borderBottom: `1px solid rgba(99,102,241,0.10)`,
            padding: "32px 0 26px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Shimmer top */}
          <div className="po-shimmer-bar" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

          {/* Soft orbs */}
          <div style={{
            position: "absolute", width: 340, height: 340,
            top: -80, right: -60, borderRadius: "50%", pointerEvents: "none",
            background: "radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 70%)",
            animation: "abPulse 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", width: 220, height: 220,
            bottom: -40, left: -40, borderRadius: "50%", pointerEvents: "none",
            background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
            animation: "abPulse 6s ease-in-out infinite 3s",
          }} />

          {/* ── Title LEFT | StepBar RIGHT — same max-width container as main content ── */}
          <div style={{
            position: "relative", zIndex: 1,
            maxWidth: 1200, margin: "0 auto", padding: "0 20px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", gap: 20,
          }}>

            {/* LEFT: Title block */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ display: "block", width: 24, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
                <span style={{ fontSize: 8, letterSpacing: "0.38em", color: C.indigo, fontFamily: "Montserrat,sans-serif", fontWeight: 700, textTransform: "uppercase" }}>
                  D DOLLY LAMB
                </span>
              </div>
              <h1 style={{
                fontFamily: "Georgia, serif", fontWeight: 400,
                fontSize: "clamp(1.3rem, 2.6vw, 2rem)",
                color: C.navyText, letterSpacing: "0.1em", margin: "0 0 10px",
              }}>
                SECURE <span style={{ color: C.indigo }}>CHECKOUT</span>
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "block", width: 48, height: 1, background: `linear-gradient(to right, ${C.indigo}, transparent)` }} />
                <span style={{ width: 5, height: 5, background: C.indigo, transform: "rotate(45deg)", flexShrink: 0, opacity: 0.4 }} />
                <span style={{ display: "block", width: 24, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
              </div>
            </div>

            {/* RIGHT: StepBar */}
            <StepBar current={1} />
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px 80px" }}>
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-7 items-start"
          >

            {/* ═══ LEFT ═══ */}
            <div className="po-fadein">

              {/* Delivery info card */}
              <SectionCard>
                <SectionHeading step="STEP 01" icon={<IconMap />} title="Delivery Information" />

                {/* Saved address banner */}
                {savedAddress && (
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "9px 14px", marginBottom: 16, borderRadius: 8,
                    background: "rgba(99,102,241,0.06)",
                    border: `1px solid rgba(99,102,241,0.2)`,
                  }}>
                    <p style={{
                      fontSize: 10, color: C.indigo,
                      fontFamily: "Montserrat, sans-serif", letterSpacing: "0.15em", fontWeight: 600,
                    }}>
                      ◆ &nbsp;Saved address loaded
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        localStorage.removeItem('ddolly_address');
                        setFormData({
                          firstName: "", lastName: "", email: "",
                          street: "", city: "", state: "",
                          zipcode: "", country: "", phone: "",
                        });
                      }}
                      style={{
                        fontSize: 9, color: C.indigo, background: "none",
                        border: `1px solid rgba(99,102,241,0.3)`,
                        padding: "3px 10px", borderRadius: 5,
                        cursor: "pointer", letterSpacing: "0.15em",
                        fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                      }}
                    >
                      CLEAR
                    </button>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <Field icon={<IconUser />} label="First Name" name="firstName" value={formData.firstName} onChange={onChange} placeholder="James" required half />
                  <Field icon={<IconUser />} label="Last Name" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Harrington" required half />
                  <Field icon={<IconMail />} label="Email Address" name="email" value={formData.email} onChange={onChange} type="email" placeholder="james@example.com" required />
                  <Field icon={<IconMap />} label="Street Address" name="street" value={formData.street} onChange={onChange} placeholder="14 Savile Row" required />
                  <Field icon={<IconBuilding />} label="City" name="city" value={formData.city} onChange={onChange} placeholder="London" required half />
                  <Field icon={<IconBuilding />} label="State / Region" name="state" value={formData.state} onChange={onChange} placeholder="England" half />
                  <Field icon={<IconZip />} label="Postcode / ZIP" name="zipcode" value={formData.zipcode} onChange={onChange} placeholder="W1S 3PR" required half />
                  <Field icon={<IconGlobe />} label="Country" name="country" value={formData.country} onChange={onChange} placeholder="United Kingdom" required half />
                  <Field icon={<IconPhone />} label="Phone Number" name="phone" value={formData.phone} onChange={onChange} type="tel" placeholder="+44 7700 900000" required />
                </div>
              </SectionCard>

              {/* Payment method card */}
              <SectionCard>
                <SectionHeading step="STEP 02" icon={<IconShield />} title="Payment Method" />
                <div className="flex flex-wrap gap-2.5">
                  <PayOption id="stripe" method={method} setMethod={setMethod}
                    label="Stripe" logo={assets.stripe_logo} sublabel="Credit / Debit Card" />
                  <PayOption id="razorpay" method={method} setMethod={setMethod}
                    label="Razorpay" logo={assets.razorpay_logo} sublabel="UPI / Net Banking" />
                  <PayOption
                    id="paypal" method={method}
                    // setMethod={() => { setMethod("paypal"); setIsPayPalReady(false); }}
                    setMethod={handlePaypalSelect}
                    label="PAYPAL" sublabel="Pay via PayPal account"
                  />
                </div>

                {/* PayPal buttons */}
                {method === "paypal" && isPayPalReady && orderDataForPayPal && (
                  <div
                    id="paypal-btn"
                    className="mt-4 rounded-xl overflow-hidden p-3"
                    style={{
                      background: "rgba(99,102,241,0.04)",
                      border: `1px solid ${C.borderMid}`,
                    }}
                  >
                    <PayPalButtons
                      style={{ layout: "vertical", color: "blue", shape: "rect" }}
                      createOrder={async () => {
                        const res = await axios.post(
                          `${backendUrl}/api/order/paypal`,
                          orderDataForPayPal,
                          { headers: { Authorization: `Bearer ${token}` } }
                        );
                        if (res.data.success) return res.data.orderID;
                        throw new Error(res.data.message);
                      }}
                      onApprove={async (data) => {
                        const res = await axios.post(
                          `${backendUrl}/api/order/verifyPaypal`,
                          { orderID: data.orderID },
                          { headers: { Authorization: `Bearer ${token}` } }
                        );
                        if (res.data.success) {
                          setCartItems({});
                          navigate("/orders");
                          toast.success("Payment successful!");
                        } else {
                          toast.error(res.data.message);
                        }
                      }}
                      onError={() => toast.error("PayPal payment failed.")}
                    />
                  </div>
                )}
              </SectionCard>
            </div>

            {/* ═══ RIGHT ═══ */}
            <div className="po-fadein-delay flex flex-col gap-5 lg:sticky lg:top-20">

              {/* Cart total */}
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${C.borderMid}`,
                  boxShadow: "0 2px 16px rgba(99,102,241,0.07)",
                }}
              >
                <div style={{
                  height: 2,
                  background: `linear-gradient(to right, ${C.indigoDk}, ${C.indigo}, ${C.indigoLt})`,
                }} />
                <div className="p-5 sm:p-6">
                  <p style={{
                    fontSize: 9, letterSpacing: "0.32em", color: C.indigo,
                    fontWeight: 700, textTransform: "uppercase", marginBottom: 14,
                    fontFamily: "Montserrat, sans-serif",
                  }}>ORDER SUMMARY</p>
                  <CartTotal />
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={loading || (method === "paypal" && isPayPalReady)}
                  className="w-full py-4 px-8 flex items-center justify-center gap-2.5 font-bold text-[11px] tracking-[0.28em] uppercase rounded-xl transition-all duration-300 disabled:opacity-55 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #4338CA, #6366F1)",
                    color: "#FFFFFF",
                    fontFamily: "Montserrat, sans-serif",
                    boxShadow: "0 4px 20px rgba(99,102,241,0.28)",
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = "0 10px 36px rgba(99,102,241,0.40)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.28)"; }}
                >
                  {loading
                    ? <><div className="po-spinner" /> PROCESSING...</>
                    : method === "paypal" && isPayPalReady
                      ? <>USE PAYPAL BUTTONS ABOVE</>
                      : <>PLACE ORDER <IconArrow /></>
                  }
                </button>
                <p className="text-[9px] italic text-center mt-3 tracking-[0.1em]"
                  style={{ color: C.faintText, fontFamily: "Montserrat, sans-serif" }}>
                  By placing your order you agree to our Terms &amp; Privacy Policy
                </p>
              </div>

              {/* Trust block */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${C.borderMid}`,
                  boxShadow: "0 2px 10px rgba(99,102,241,0.05)",
                }}
              >
                <p
                  className="text-[8px] tracking-[0.32em] font-bold text-center mb-4 uppercase"
                  style={{ color: C.indigo, fontFamily: "Montserrat, sans-serif" }}
                >
                  WHY SHOP WITH US
                </p>
                <div className="flex flex-col gap-3.5">
                  {[
                    { icon: <IconShield />, title: "Authenticity Guaranteed", desc: "Certificate of authenticity with every piece" },
                    { icon: <IconTruck />, title: "Insured Shipping", desc: "All orders fully insured in transit" },
                    { icon: <IconReturn />, title: "7-Day Returns", desc: "Hassle-free returns within 7 days" },
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-content-center flex-shrink-0"
                        style={{
                          background: "rgba(99,102,241,0.08)",
                          border: `1px solid rgba(99,102,241,0.18)`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        {t.icon}
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[0.04em] mb-0.5 font-semibold"
                          style={{ color: C.navyText, fontFamily: "Montserrat, sans-serif" }}>{t.title}</p>
                        <p className="text-[10px]"
                          style={{ color: C.mutedText, fontFamily: "Montserrat, sans-serif" }}>{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;