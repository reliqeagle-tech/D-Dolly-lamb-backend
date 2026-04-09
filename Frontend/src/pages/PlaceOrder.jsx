// import React, { useContext, useState } from "react";
// import Title from "../components/Title";
// import CartTotal from "../components/CartTotal";
// import { assets } from "../assets/assets";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const PlaceOrder = () => {
//   const [method, setMethod] = useState("cod");
//   const {
//     navigate,
//     backendUrl,
//     token,
//     cartItems,
//     setCartItems,
//     getCartAmount,
//     delivery_fee,
//     products,
//   } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: "Order Payment",
//       description: "Order Payment",
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         try {
//           const { data } = await axios.post(
//             `${backendUrl}/api/order/verifyRazorpay`,
//             response,
//             { headers: { Authorization: `Bearer ${token}` } }
//           );


//           if (data.success) {
//             setCartItems({});
//             navigate("/orders");
//           } else {
//             toast.error(data.message || "Payment verification failed");
//           }
//         } catch (error) {
//           console.error(error);
//           toast.error(error.message || "Something went wrong");
//         }
//       },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     if (!token) {
//       return toast.error("You must be logged in to place an order");
//     }

//     try {
//       let orderItems = [];

// //       console.log("TOKEN FROM CONTEXT:", token); <<<----------------debug
// // console.log("HEADER BEING SENT:", { Authorization: `Bearer ${token}` });


// //       console.log("Sending header:", {
// //   Authorization: `Bearer ${token}`,
// // });

//       for (const productId in cartItems) {
//         const variants = cartItems[productId];
//         const productInfo = products.find((p) => p._id === productId);
//         if (!productInfo) continue;

//         for (const variantKey in variants) {
//           if (variantKey === "quantity" || variantKey === "customPrice") continue;

//           const qty = variants[variantKey];
//           if (!qty || qty <= 0) continue;

//           const [size, color] = variantKey.split("-");
//           orderItems.push({
//             productId,
//             name: productInfo.name,
//             price: productInfo.price,
//             quantity: qty,
//             size,
//             color,
//             image: productInfo.image?.[0],
//           });
//         }
//       }

//       const orderData = {
//         address: formData,
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee,
//       };

//       let response;
//       const config = { headers: { Authorization: `Bearer ${token}` } };

//       switch (method) {
//         case "cod":
//           response = await axios.post(`${backendUrl}/api/order/place`, orderData, config);
//           if (response.data.success) {
//             setCartItems({});
//             navigate("/orders");
//           } else {
//             toast.error(response.data.message);
//           }
//           break;

//         case "stripe":
//           response = await axios.post(`${backendUrl}/api/order/stripe`, orderData, config);
//           if (response.data.success) {
//             window.location.replace(response.data.session_url);
//           } else {
//             toast.error(response.data.message);
//           }
//           break;

//         case "razorpay":
//           response = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, config);
//           if (response.data.success) {
//             initPay(response.data.order);
//           } else {
//             toast.error(response.data.message);
//           }
//           break;

//         default:
//           toast.error("Select a valid payment method");
//           break;
//       }
//     } catch (error) {
//       console.error(error);
//       console.log(token)
//       toast.error(error.response?.data?.message || error.message || "Something went wrong");
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t p-24"
//     >
//       {/* ------------- Left Side ---------------- */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1={"DELIVERY"} text2={"INFORMATION"} />
//         </div>
//         <div className="flex gap-3">
//           <input required name="firstName" value={formData.firstName} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
//           <input required name="lastName" value={formData.lastName} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
//         </div>
//         <input required name="email" value={formData.email} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" />
//         <input required name="street" value={formData.street} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
//         <div className="flex gap-3">
//           <input required name="city" value={formData.city} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
//           <input name="state" value={formData.state} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
//         </div>
//         <div className="flex gap-3">
//           <input required name="zipcode" value={formData.zipcode} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
//           <input required name="country" value={formData.country} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
//         </div>
//         <input required name="phone" value={formData.phone} onChange={onChangeHandler} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
//       </div>

//       {/* ------------- Right Side ------------------ */}
//       <div className="mt-8">
//         <div className="mt-8 min-w-80">
//           <CartTotal />
//         </div>
//         <div className="mt-12">
//           <Title text1={"PAYMENT"} text2={"METHOD"} />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
//             </div>
//             <div onClick={() => setMethod("razorpay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
//             </div>
//             <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
//               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>
//           </div>
//           <div className="w-full text-end mt-8">
//             <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;








// import React, { useContext, useState } from "react";
// import CartTotal from "../components/CartTotal";
// import { assets } from "../assets/assets";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// /* ── Inline SVG icons ──────────────────────────────── */
// const IconUser = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="8" r="4" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconMail = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M2 8l10 6 10-6" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconMap = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#c8973a" strokeWidth="1.4" />
//     <circle cx="12" cy="9" r="2.5" stroke="#c8973a" strokeWidth="1.4" />
//   </svg>
// );
// const IconPhone = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
//   </svg>
// );
// const IconBuilding = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="3" width="18" height="18" rx="2" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M9 21V9h6v12" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//     <path d="M3 9h18" stroke="#c8973a" strokeWidth="1.4" />
//   </svg>
// );
// const IconGlobe = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="12" r="9" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M2 12h20M12 2c-2 3-3 6-3 10s1 7 3 10M12 2c2 3 3 6 3 10s-1 7-3 10" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
//   </svg>
// );
// const IconZip = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="4" y="2" width="16" height="20" rx="2" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M8 6h8M8 10h5M8 14h6" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
//   </svg>
// );
// const IconShield = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IconArrow = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IconCheck = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M20 6L9 17l-5-5" stroke="#1a0f0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// /* ── Step indicator ─────────────────────────────────── */
// const steps = ["Cart", "Delivery", "Payment", "Confirm"];
// const StepBar = ({ current }) => (
//   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 40 }}>
//     {steps.map((s, i) => (
//       <React.Fragment key={i}>
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
//           <div style={{
//             width: 28, height: 28, borderRadius: "50%",
//             background: i < current ? "linear-gradient(135deg,#c8973a,#f7c568)"
//               : i === current ? "rgba(200,151,58,0.15)"
//                 : "rgba(255,255,255,0.04)",
//             border: i === current ? "1.5px solid #c8973a" : i < current ? "none" : "1px solid rgba(200,151,58,0.2)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             transition: "all 0.3s",
//           }}>
//             {i < current
//               ? <IconCheck />
//               : <span style={{ fontSize: 10, color: i === current ? "#c8973a" : "#3a2510", fontFamily: "Arial", fontWeight: 700 }}>{i + 1}</span>
//             }
//           </div>
//           <span style={{ fontSize: 8, letterSpacing: "0.2em", color: i <= current ? "#c8973a" : "#3a2510", fontFamily: "Arial", fontWeight: 600, textTransform: "uppercase" }}>
//             {s}
//           </span>
//         </div>
//         {i < steps.length - 1 && (
//           <div style={{ width: 48, height: 1, background: i < current ? "linear-gradient(to right,#c8973a,#f7c568)" : "rgba(200,151,58,0.12)", margin: "0 4px", marginBottom: 22, transition: "background 0.4s" }} />
//         )}
//       </React.Fragment>
//     ))}
//   </div>
// );

// /* ── Styled input ───────────────────────────────────── */
// const Field = ({ icon, label, name, value, onChange, type = "text", placeholder, required, half }) => (
//   <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: half ? "1 1 calc(50% - 6px)" : "1 1 100%", minWidth: half ? 120 : "auto" }}>
//     <label style={{ fontSize: 8.5, letterSpacing: "0.28em", color: "#6a5040", fontFamily: "Arial", fontWeight: 600, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 5 }}>
//       {icon} {label}{required && <span style={{ color: "#c8973a" }}>*</span>}
//     </label>
//     <input
//       required={required}
//       name={name}
//       value={value}
//       onChange={onChange}
//       type={type}
//       placeholder={placeholder}
//       style={{
//         padding: "11px 14px",
//         background: "rgba(255,255,255,0.03)",
//         border: "1px solid rgba(200,151,58,0.18)",
//         color: "#f5ede0",
//         fontSize: 13,
//         fontFamily: "Georgia,serif",
//         outline: "none",
//         transition: "border-color 0.2s, background 0.2s",
//         width: "100%",
//         borderRadius: 2,
//       }}
//       onFocus={e => { e.target.style.borderColor = "#c8973a"; e.target.style.background = "rgba(200,151,58,0.05)"; }}
//       onBlur={e => { e.target.style.borderColor = "rgba(200,151,58,0.18)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
//     />
//   </div>
// );

// /* ── Payment option ─────────────────────────────────── */
// const PayOption = ({ id, method, setMethod, label, logo, sublabel }) => {
//   const active = method === id;
//   return (
//     <div
//       onClick={() => setMethod(id)}
//       style={{
//         flex: "1 1 140px",
//         padding: "14px 16px",
//         background: active ? "rgba(200,151,58,0.08)" : "rgba(255,255,255,0.02)",
//         border: active ? "1px solid #c8973a" : "1px solid rgba(200,151,58,0.15)",
//         cursor: "pointer",
//         transition: "all 0.22s",
//         borderRadius: 3,
//         position: "relative",
//         overflow: "hidden",
//       }}
//       onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)"; }}
//       onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)"; }}
//     >
//       {/* Active top line */}
//       {active && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right,#c8973a,#f7c568)" }} />}

//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         {/* Radio dot */}
//         <div style={{
//           width: 14, height: 14, borderRadius: "50%",
//           border: active ? "none" : "1px solid rgba(200,151,58,0.3)",
//           background: active ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           flexShrink: 0, transition: "all 0.2s",
//         }}>
//           {active && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1a0f0a" }} />}
//         </div>

//         {logo
//           ? <img src={logo} alt={label} style={{ height: 20, objectFit: "contain", filter: active ? "brightness(1)" : "brightness(0.5) sepia(0.3)", transition: "filter 0.2s" }} />
//           : <span style={{ fontSize: 11, letterSpacing: "0.16em", color: active ? "#f7c568" : "#6a5040", fontFamily: "Arial", fontWeight: 600 }}>{label}</span>
//         }
//       </div>

//       {sublabel && (
//         <p style={{ fontSize: 9, color: active ? "#8a6030" : "#3a2510", letterSpacing: "0.1em", marginTop: 6, fontStyle: "italic" }}>{sublabel}</p>
//       )}
//     </div>
//   );
// };

// /* ══════════════════════════════════════════════════════
//    PLACE ORDER PAGE
// ══════════════════════════════════════════════════════ */
// const PlaceOrder = () => {
//   const [method, setMethod] = useState("cod");
//   const [loading, setLoading] = useState(false);
//   const {
//     navigate, backendUrl, token, cartItems,
//     setCartItems, getCartAmount, delivery_fee, products,
//   } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     firstName: "", lastName: "", email: "",
//     street: "", city: "", state: "",
//     zipcode: "", country: "", phone: "",
//   });

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(d => ({ ...d, [name]: value }));
//   };

//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount, currency: order.currency,
//       name: "D Dolly Lamb", description: "Artisan Leather Order",
//       order_id: order.id, receipt: order.receipt,
//       handler: async (response) => {
//         try {
//           const { data } = await axios.post(`${backendUrl}/api/order/verifyRazorpay`, response,
//             { headers: { Authorization: `Bearer ${token}` } });
//           if (data.success) { setCartItems({}); navigate("/orders"); }
//           else toast.error(data.message || "Payment verification failed");
//         } catch (err) { toast.error(err.message || "Something went wrong"); }
//       },
//     };
//     new window.Razorpay(options).open();
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) return toast.error("Please log in to place an order");

//     setLoading(true);
//     try {
//       let orderItems = [];
//       for (const productId in cartItems) {
//         const variants = cartItems[productId];
//         const productInfo = products.find(p => p._id === productId);
//         if (!productInfo) continue;
//         for (const variantKey in variants) {
//           if (variantKey === "quantity" || variantKey === "customPrice") continue;
//           const qty = variants[variantKey];
//           if (!qty || qty <= 0) continue;
//           const [size, color] = variantKey.split("-");
//           orderItems.push({ productId, name: productInfo.name, price: productInfo.price, quantity: qty, size, color, image: productInfo.image?.[0] });
//         }
//       }

//       const orderData = { address: formData, items: orderItems, amount: getCartAmount() + delivery_fee };
//       const cfg = { headers: { Authorization: `Bearer ${token}` } };

//       if (method === "cod") {
//         const r = await axios.post(`${backendUrl}/api/order/place`, orderData, cfg);
//         if (r.data.success) { setCartItems({}); navigate("/orders"); }
//         else toast.error(r.data.message);
//       } else if (method === "stripe") {
//         const r = await axios.post(`${backendUrl}/api/order/stripe`, orderData, cfg);
//         if (r.data.success) window.location.replace(r.data.session_url);
//         else toast.error(r.data.message);
//       } else if (method === "razorpay") {
//         const r = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, cfg);
//         if (r.data.success) initPay(r.data.order);
//         else toast.error(r.data.message);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap');
//         @keyframes poFadeUp {
//           from { opacity:0; transform:translateY(16px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .po-col { animation: poFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
//         .po-col:nth-child(1){ animation-delay:0.1s; }
//         .po-col:nth-child(2){ animation-delay:0.2s; }
//         .po-section { animation: poFadeUp 0.4s ease both; }
//         .po-submit-btn {
//           width:100%; padding:15px 32px;
//           background:linear-gradient(135deg,#c8973a,#f7c568);
//           color:#1a0f0a; border:none;
//           font-size:11px; letter-spacing:0.28em;
//           font-family:Arial,sans-serif; font-weight:700;
//           cursor:pointer; transition:all 0.28s;
//           display:flex; align-items:center; justify-content:center; gap:10px;
//           border-radius:2px;
//         }
//         .po-submit-btn:hover:not(:disabled) {
//           box-shadow:0 10px 36px rgba(200,151,58,0.38);
//           transform:translateY(-2px);
//         }
//         .po-submit-btn:disabled {
//           opacity:0.55; cursor:not-allowed; transform:none;
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         .po-spinner {
//           width:16px; height:16px; border:2px solid rgba(26,15,10,0.3);
//           border-top-color:#1a0f0a; border-radius:50%;
//           animation:spin 0.7s linear infinite;
//         }
//         input[type=number]::-webkit-inner-spin-button,
//         input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }
//         input::placeholder { color:rgba(160,128,96,0.4); font-style:italic; }
//         * { box-sizing:border-box; }
//       `}</style>

//       <div style={{ background: "#1a0f0a", minHeight: "100vh", color: "#f5ede0", fontFamily: "Georgia,serif", padding: "48px 5% 80px" }}>

//         {/* ── Page header ── */}
//         <div style={{ textAlign: "center", marginBottom: 36 }}>
//           <p style={{ fontSize: 9, letterSpacing: "0.42em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 8 }}>
//             D DOLLY LAMB
//           </p>
//           <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", color: "#f7c568", fontWeight: 400, letterSpacing: "0.08em", margin: 0 }}>
//             SECURE CHECKOUT
//           </h1>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginTop: 10 }}>
//             <span style={{ flex: 1, maxWidth: 120, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
//             <span style={{ width: 5, height: 5, background: "#c8973a", transform: "rotate(45deg)" }} />
//             <span style={{ flex: 1, maxWidth: 120, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
//           </div>
//         </div>

//         {/* ── Step bar ── */}
//         <StepBar current={1} />

//         {/* ── Main grid ── */}
//         <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr", gap: 28, maxWidth: 1100, margin: "0 auto" }}
//           className="lg:grid-cols-[1fr_400px]">

//           {/* ═══ LEFT — Delivery form ═══ */}
//           <div className="po-col">

//             {/* Delivery info card */}
//             <div style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 3, overflow: "hidden", marginBottom: 24 }}>
//               {/* Card top accent */}
//               <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

//               <div style={{ padding: "24px 26px" }}>
//                 {/* Section heading */}
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
//                   <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <IconMap />
//                   </div>
//                   <div>
//                     <p style={{ fontSize: 8, letterSpacing: "0.34em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 2 }}>STEP 01</p>
//                     <p style={{ fontSize: 14, color: "#f7c568", letterSpacing: "0.06em" }}>Delivery Information</p>
//                   </div>
//                 </div>

//                 {/* Form fields */}
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
//                   <Field icon={<IconUser />} label="First Name" name="firstName" value={formData.firstName} onChange={onChange} placeholder="James" required half />
//                   <Field icon={<IconUser />} label="Last Name" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Harrington" required half />
//                   <Field icon={<IconMail />} label="Email Address" name="email" value={formData.email} onChange={onChange} type="email" placeholder="james@example.com" required />
//                   <Field icon={<IconMap />} label="Street Address" name="street" value={formData.street} onChange={onChange} placeholder="14 Savile Row" required />
//                   <Field icon={<IconBuilding />} label="City" name="city" value={formData.city} onChange={onChange} placeholder="London" required half />
//                   <Field icon={<IconBuilding />} label="State / Region" name="state" value={formData.state} onChange={onChange} placeholder="England" half />
//                   <Field icon={<IconZip />} label="Postcode / ZIP" name="zipcode" value={formData.zipcode} onChange={onChange} type="number" placeholder="W1S 3PR" required half />
//                   <Field icon={<IconGlobe />} label="Country" name="country" value={formData.country} onChange={onChange} placeholder="United Kingdom" required half />
//                   <Field icon={<IconPhone />} label="Phone Number" name="phone" value={formData.phone} onChange={onChange} type="number" placeholder="+44 7700 900000" required />
//                 </div>
//               </div>
//             </div>

//             {/* Payment method card */}
//             <div style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 3, overflow: "hidden" }}>
//               <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

//               <div style={{ padding: "24px 26px" }}>
//                 {/* Section heading */}
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
//                   <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <IconShield />
//                   </div>
//                   <div>
//                     <p style={{ fontSize: 8, letterSpacing: "0.34em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 2 }}>STEP 02</p>
//                     <p style={{ fontSize: 14, color: "#f7c568", letterSpacing: "0.06em" }}>Payment Method</p>
//                   </div>
//                 </div>

//                 {/* Payment options */}
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//                   <PayOption id="stripe" method={method} setMethod={setMethod}
//                     label="Stripe" logo={assets.stripe_logo}
//                     sublabel="Credit / Debit Card" />
//                   <PayOption id="razorpay" method={method} setMethod={setMethod}
//                     label="Razorpay" logo={assets.razorpay_logo}
//                     sublabel="UPI / Net Banking" />
//                   <PayOption id="cod" method={method} setMethod={setMethod}
//                     label="CASH ON DELIVERY" sublabel="Pay when your order arrives" />
//                 </div>

//                 {/* COD notice */}
//                 {method === "cod" && (
//                   <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(200,151,58,0.05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 2 }}>
//                     <p style={{ fontSize: 11, color: "#8a6040", fontStyle: "italic", lineHeight: 1.6 }}>
//                       ◆ &nbsp;Cash on delivery available for orders under £500. Our courier will collect payment upon arrival.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* ═══ RIGHT — Order summary ═══ */}
//           <div className="po-col" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

//             {/* Cart total */}
//             <div style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 3, overflow: "hidden" }}>
//               <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />
//               <div style={{ padding: "22px 22px 20px" }}>
//                 <CartTotal />
//               </div>
//             </div>

//             {/* Trust block */}
//             <div style={{ background: "rgba(200,151,58,0.04)", border: "1px solid rgba(200,151,58,0.12)", borderRadius: 3, padding: "18px 20px" }}>
//               <p style={{ fontSize: 8, letterSpacing: "0.32em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 14, textAlign: "center" }}>
//                 WHY SHOP WITH US
//               </p>
//               {[
//                 { icon: <IconShield />, title: "Authenticity Guaranteed", desc: "Certificate of authenticity with every piece" },
//                 { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M1 3h15v13H1z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" /><path d="M16 8h4l3 4v4h-7V8z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="5.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" /><circle cx="18.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" /></svg>, title: "Insured Shipping", desc: "All orders fully insured in transit" },
//                 { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14.93-4H15" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 4v4h-4" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>, title: "7-Day Returns", desc: "Hassle-free returns within 7 days" },
//               ].map((t, i) => (
//                 <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 2 ? 14 : 0 }}>
//                   <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                     {t.icon}
//                   </div>
//                   <div>
//                     <p style={{ fontSize: 11, color: "#f5ede0", letterSpacing: "0.04em", marginBottom: 2 }}>{t.title}</p>
//                     <p style={{ fontSize: 10, color: "#5a4030", fontStyle: "italic" }}>{t.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Submit */}
//             <div>
//               <button type="submit" className="po-submit-btn" disabled={loading}>
//                 {loading
//                   ? <><div className="po-spinner" /> PROCESSING...</>
//                   : <> PLACE ORDER <IconArrow /></>
//                 }
//               </button>
//               <p style={{ fontSize: 9, color: "#3a2510", letterSpacing: "0.1em", textAlign: "center", marginTop: 12, fontStyle: "italic" }}>
//                 By placing your order you agree to our Terms & Privacy Policy
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default PlaceOrder;





// import React, { useContext, useState } from "react";
// import CartTotal from "../components/CartTotal";
// import { assets } from "../assets/assets";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// /* ── Inline SVG icons ──────────────────────────────── */
// const IconUser = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="8" r="4" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconMail = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M2 8l10 6 10-6" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconMap = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#c8973a" strokeWidth="1.4" />
//     <circle cx="12" cy="9" r="2.5" stroke="#c8973a" strokeWidth="1.4" />
//   </svg>
// );
// const IconPhone = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
//   </svg>
// );
// const IconBuilding = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="3" width="18" height="18" rx="2" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M9 21V9h6v12" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//     <path d="M3 9h18" stroke="#c8973a" strokeWidth="1.4" />
//   </svg>
// );
// const IconGlobe = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="12" r="9" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M2 12h20M12 2c-2 3-3 6-3 10s1 7 3 10M12 2c2 3 3 6 3 10s-1 7-3 10" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
//   </svg>
// );
// const IconZip = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="4" y="2" width="16" height="20" rx="2" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M8 6h8M8 10h5M8 14h6" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
//   </svg>
// );
// const IconShield = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IconArrow = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IconCheck = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M20 6L9 17l-5-5" stroke="#1a0f0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// /* ── Step indicator ─────────────────────────────────── */
// const steps = ["Cart", "Delivery", "Payment", "Confirm"];
// const StepBar = ({ current }) => (
//   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 40 }}>
//     {steps.map((s, i) => (
//       <React.Fragment key={i}>
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
//           <div style={{
//             width: 28, height: 28, borderRadius: "50%",
//             background: i < current ? "linear-gradient(135deg,#c8973a,#f7c568)"
//               : i === current ? "rgba(200,151,58,0.15)"
//                 : "rgba(255,255,255,0.04)",
//             border: i === current ? "1.5px solid #c8973a" : i < current ? "none" : "1px solid rgba(200,151,58,0.2)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             transition: "all 0.3s",
//           }}>
//             {i < current
//               ? <IconCheck />
//               : <span style={{ fontSize: 10, color: i === current ? "#c8973a" : "#3a2510", fontFamily: "Arial", fontWeight: 700 }}>{i + 1}</span>
//             }
//           </div>
//           <span style={{ fontSize: 8, letterSpacing: "0.2em", color: i <= current ? "#c8973a" : "#7a6050", fontFamily: "Arial", fontWeight: 600, textTransform: "uppercase" }}>
//             {s}
//           </span>
//         </div>
//         {i < steps.length - 1 && (
//           <div style={{ width: 48, height: 1, background: i < current ? "linear-gradient(to right,#c8973a,#f7c568)" : "rgba(200,151,58,0.12)", margin: "0 4px", marginBottom: 22, transition: "background 0.4s" }} />
//         )}
//       </React.Fragment>
//     ))}
//   </div>
// );

// /* ── Styled input ───────────────────────────────────── */
// const Field = ({ icon, label, name, value, onChange, type = "text", placeholder, required, half }) => (
//   <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: half ? "1 1 calc(50% - 6px)" : "1 1 100%", minWidth: half ? 120 : "auto" }}>
//     <label style={{ fontSize: 8.5, letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Arial", fontWeight: 600, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 5 }}>
//       {icon} {label}{required && <span style={{ color: "#c8973a" }}>*</span>}
//     </label>
//     <input
//       required={required}
//       name={name}
//       value={value}
//       onChange={onChange}
//       type={type}
//       placeholder={placeholder}
//       style={{
//         padding: "11px 14px",
//         background: "rgba(255,255,255,0.06)",
//         border: "1px solid rgba(200,151,58,0.3)",
//         color: "#f5ede0",
//         fontSize: 13,
//         fontFamily: "Georgia,serif",
//         outline: "none",
//         transition: "border-color 0.2s, background 0.2s",
//         width: "100%",
//         borderRadius: 2,
//       }}
//       onFocus={e => { e.target.style.borderColor = "#c8973a"; e.target.style.background = "rgba(200,151,58,0.07)"; }}
//       onBlur={e => { e.target.style.borderColor = "rgba(200,151,58,0.3)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
//     />
//   </div>
// );

// /* ── Payment option ─────────────────────────────────── */
// const PayOption = ({ id, method, setMethod, label, logo, sublabel }) => {
//   const active = method === id;
//   return (
//     <div
//       onClick={() => setMethod(id)}
//       style={{
//         flex: "1 1 140px",
//         padding: "14px 16px",
//         background: active ? "rgba(200,151,58,0.08)" : "rgba(255,255,255,0.02)",
//         border: active ? "1px solid #c8973a" : "1px solid rgba(200,151,58,0.15)",
//         cursor: "pointer",
//         transition: "all 0.22s",
//         borderRadius: 3,
//         position: "relative",
//         overflow: "hidden",
//       }}
//       onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)"; }}
//       onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)"; }}
//     >
//       {/* Active top line */}
//       {active && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right,#c8973a,#f7c568)" }} />}

//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         {/* Radio dot */}
//         <div style={{
//           width: 14, height: 14, borderRadius: "50%",
//           border: active ? "none" : "1px solid rgba(200,151,58,0.3)",
//           background: active ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           flexShrink: 0, transition: "all 0.2s",
//         }}>
//           {active && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1a0f0a" }} />}
//         </div>

//         {logo
//           ? <img src={logo} alt={label} style={{ height: 20, objectFit: "contain", filter: active ? "brightness(1)" : "brightness(0.75)", transition: "filter 0.2s" }} />
//           : <span style={{ fontSize: 11, letterSpacing: "0.16em", color: active ? "#f7c568" : "#c8973a", fontFamily: "Arial", fontWeight: 600 }}>{label}</span>
//         }
//       </div>

//       {sublabel && (
//         <p style={{ fontSize: 9, color: active ? "#c8973a" : "#8a7060", letterSpacing: "0.1em", marginTop: 6, fontStyle: "italic" }}>{sublabel}</p>
//       )}
//     </div>
//   );
// };

// /* ══════════════════════════════════════════════════════
//    PLACE ORDER PAGE
// ══════════════════════════════════════════════════════ */
// const PlaceOrder = () => {
//   const [method, setMethod] = useState("cod");
//   const [loading, setLoading] = useState(false);
//   const {
//     navigate, backendUrl, token, cartItems,
//     setCartItems, getCartAmount, delivery_fee, products,
//   } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     firstName: "", lastName: "", email: "",
//     street: "", city: "", state: "",
//     zipcode: "", country: "", phone: "",
//   });

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(d => ({ ...d, [name]: value }));
//   };

//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount, currency: order.currency,
//       name: "D Dolly Lamb", description: "Artisan Leather Order",
//       order_id: order.id, receipt: order.receipt,
//       handler: async (response) => {
//         try {
//           const { data } = await axios.post(`${backendUrl}/api/order/verifyRazorpay`, response,
//             { headers: { Authorization: `Bearer ${token}` } });
//           if (data.success) { setCartItems({}); navigate("/orders"); }
//           else toast.error(data.message || "Payment verification failed");
//         } catch (err) { toast.error(err.message || "Something went wrong"); }
//       },
//     };
//     new window.Razorpay(options).open();
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) return toast.error("Please log in to place an order");

//     setLoading(true);
//     try {
//       let orderItems = [];
//       for (const productId in cartItems) {
//         const variants = cartItems[productId];
//         const productInfo = products.find(p => p._id === productId);
//         if (!productInfo) continue;
//         for (const variantKey in variants) {
//           if (variantKey === "quantity" || variantKey === "customPrice") continue;
//           const qty = variants[variantKey];
//           if (!qty || qty <= 0) continue;
//           const [size, color] = variantKey.split("-");
//           orderItems.push({ productId, name: productInfo.name, price: productInfo.price, quantity: qty, size, color, image: productInfo.image?.[0] });
//         }
//       }

//       const orderData = { address: formData, items: orderItems, amount: getCartAmount() + delivery_fee };
//       const cfg = { headers: { Authorization: `Bearer ${token}` } };

//       if (method === "cod") {
//         const r = await axios.post(`${backendUrl}/api/order/place`, orderData, cfg);
//         if (r.data.success) { setCartItems({}); navigate("/orders"); }
//         else toast.error(r.data.message);
//       } else if (method === "stripe") {
//         const r = await axios.post(`${backendUrl}/api/order/stripe`, orderData, cfg);
//         if (r.data.success) window.location.replace(r.data.session_url);
//         else toast.error(r.data.message);
//       } else if (method === "razorpay") {
//         const r = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, cfg);
//         if (r.data.success) initPay(r.data.order);
//         else toast.error(r.data.message);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap');
//         @keyframes poFadeUp {
//           from { opacity:0; transform:translateY(16px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .po-col { animation: poFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
//         .po-col:nth-child(1){ animation-delay:0.1s; }
//         .po-col:nth-child(2){ animation-delay:0.2s; }
//         .po-section { animation: poFadeUp 0.4s ease both; }
//         .po-submit-btn {
//           width:100%; padding:15px 32px;
//           background:linear-gradient(135deg,#c8973a,#f7c568);
//           color:#1a0f0a; border:none;
//           font-size:11px; letter-spacing:0.28em;
//           font-family:Arial,sans-serif; font-weight:700;
//           cursor:pointer; transition:all 0.28s;
//           display:flex; align-items:center; justify-content:center; gap:10px;
//           border-radius:2px;
//         }
//         .po-submit-btn:hover:not(:disabled) {
//           box-shadow:0 10px 36px rgba(200,151,58,0.38);
//           transform:translateY(-2px);
//         }
//         .po-submit-btn:disabled {
//           opacity:0.55; cursor:not-allowed; transform:none;
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         .po-spinner {
//           width:16px; height:16px; border:2px solid rgba(26,15,10,0.3);
//           border-top-color:#1a0f0a; border-radius:50%;
//           animation:spin 0.7s linear infinite;
//         }
//         input[type=number]::-webkit-inner-spin-button,
//         input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }
//         input::placeholder { color:rgba(200,160,100,0.45); font-style:italic; }
//         * { box-sizing:border-box; }
//       `}</style>

//       <div style={{ background: "#1a0f0a", minHeight: "100vh", color: "#f5ede0", fontFamily: "Georgia,serif", padding: "48px 5% 80px" }}>

//         {/* ── Page header ── */}
//         <div style={{ textAlign: "center", marginBottom: 36 }}>
//           <p style={{ fontSize: 9, letterSpacing: "0.42em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 8 }}>
//             D DOLLY LAMB
//           </p>
//           <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", color: "#f7c568", fontWeight: 400, letterSpacing: "0.08em", margin: 0 }}>
//             SECURE CHECKOUT
//           </h1>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginTop: 10 }}>
//             <span style={{ flex: 1, maxWidth: 120, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
//             <span style={{ width: 5, height: 5, background: "#c8973a", transform: "rotate(45deg)" }} />
//             <span style={{ flex: 1, maxWidth: 120, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
//           </div>
//         </div>

//         {/* ── Step bar ── */}
//         <StepBar current={1} />

//         {/* ── Main grid ── */}
//         <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr", gap: 28, maxWidth: 1100, margin: "0 auto" }}
//           className="lg:grid-cols-[1fr_400px]">

//           {/* ═══ LEFT — Delivery form ═══ */}
//           <div className="po-col">

//             {/* Delivery info card */}
//             <div style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 3, overflow: "hidden", marginBottom: 24 }}>
//               {/* Card top accent */}
//               <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

//               <div style={{ padding: "24px 26px" }}>
//                 {/* Section heading */}
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
//                   <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <IconMap />
//                   </div>
//                   <div>
//                     <p style={{ fontSize: 8, letterSpacing: "0.34em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 2 }}>STEP 01</p>
//                     <p style={{ fontSize: 14, color: "#f7c568", letterSpacing: "0.06em" }}>Delivery Information</p>
//                   </div>
//                 </div>

//                 {/* Form fields */}
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
//                   <Field icon={<IconUser />} label="First Name" name="firstName" value={formData.firstName} onChange={onChange} placeholder="James" required half />
//                   <Field icon={<IconUser />} label="Last Name" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Harrington" required half />
//                   <Field icon={<IconMail />} label="Email Address" name="email" value={formData.email} onChange={onChange} type="email" placeholder="james@example.com" required />
//                   <Field icon={<IconMap />} label="Street Address" name="street" value={formData.street} onChange={onChange} placeholder="14 Savile Row" required />
//                   <Field icon={<IconBuilding />} label="City" name="city" value={formData.city} onChange={onChange} placeholder="London" required half />
//                   <Field icon={<IconBuilding />} label="State / Region" name="state" value={formData.state} onChange={onChange} placeholder="England" half />
//                   <Field icon={<IconZip />} label="Postcode / ZIP" name="zipcode" value={formData.zipcode} onChange={onChange} type="number" placeholder="W1S 3PR" required half />
//                   <Field icon={<IconGlobe />} label="Country" name="country" value={formData.country} onChange={onChange} placeholder="United Kingdom" required half />
//                   <Field icon={<IconPhone />} label="Phone Number" name="phone" value={formData.phone} onChange={onChange} type="number" placeholder="+44 7700 900000" required />
//                 </div>
//               </div>
//             </div>

//             {/* Payment method card */}
//             <div style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 3, overflow: "hidden" }}>
//               <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

//               <div style={{ padding: "24px 26px" }}>
//                 {/* Section heading */}
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
//                   <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <IconShield />
//                   </div>
//                   <div>
//                     <p style={{ fontSize: 8, letterSpacing: "0.34em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 2 }}>STEP 02</p>
//                     <p style={{ fontSize: 14, color: "#f7c568", letterSpacing: "0.06em" }}>Payment Method</p>
//                   </div>
//                 </div>

//                 {/* Payment options */}
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//                   <PayOption id="stripe" method={method} setMethod={setMethod}
//                     label="Stripe" logo={assets.stripe_logo}
//                     sublabel="Credit / Debit Card" />
//                   <PayOption id="razorpay" method={method} setMethod={setMethod}
//                     label="Razorpay" logo={assets.razorpay_logo}
//                     sublabel="UPI / Net Banking" />
//                   {/* <PayOption id="cod" method={method} setMethod={setMethod}
//                     label="CASH ON DELIVERY" sublabel="Pay when your order arrives" /> */}
//                 </div>

//                 {/* COD notice */}
//                 {/* {method === "cod" && (
//                   <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(200,151,58,0.05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 2 }}>
//                     <p style={{ fontSize: 11, color: "#c8973a", fontStyle: "italic", lineHeight: 1.6 }}>
//                       ◆ &nbsp;Cash on delivery available for orders under £500. Our courier will collect payment upon arrival.
//                     </p>
//                   </div>
//                 )} */}
//               </div>
//             </div>
//           </div>

//           {/* ═══ RIGHT — Order summary ═══ */}
//           <div className="po-col" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

//             {/* Cart total */}
//             <div style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: 3, overflow: "hidden" }}>
//               <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />
//               <div style={{ padding: "22px 22px 20px" }}>
//                 <CartTotal />
//               </div>
//             </div>

//             {/* Trust block */}
//             <div style={{ background: "rgba(200,151,58,0.04)", border: "1px solid rgba(200,151,58,0.12)", borderRadius: 3, padding: "18px 20px" }}>
//               <p style={{ fontSize: 8, letterSpacing: "0.32em", color: "#c8973a", fontFamily: "Montserrat", fontWeight: 700, marginBottom: 14, textAlign: "center" }}>
//                 WHY SHOP WITH US
//               </p>
//               {[
//                 { icon: <IconShield />, title: "Authenticity Guaranteed", desc: "Certificate of authenticity with every piece" },
//                 { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M1 3h15v13H1z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" /><path d="M16 8h4l3 4v4h-7V8z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="5.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" /><circle cx="18.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" /></svg>, title: "Insured Shipping", desc: "All orders fully insured in transit" },
//                 { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14.93-4H15" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 4v4h-4" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>, title: "7-Day Returns", desc: "Hassle-free returns within 7 days" },
//               ].map((t, i) => (
//                 <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 2 ? 14 : 0 }}>
//                   <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                     {t.icon}
//                   </div>
//                   <div>
//                     <p style={{ fontSize: 11, color: "#f5ede0", letterSpacing: "0.04em", marginBottom: 2 }}>{t.title}</p>
//                     <p style={{ fontSize: 10, color: "#a08060" }}>{t.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Submit */}
//             <div>
//               <button type="submit" className="po-submit-btn" disabled={loading}>
//                 {loading
//                   ? <><div className="po-spinner" /> PROCESSING...</>
//                   : <> PLACE ORDER <IconArrow /></>
//                 }
//               </button>
//               <p style={{ fontSize: 9, color: "#7a6050", letterSpacing: "0.1em", textAlign: "center", marginTop: 12, fontStyle: "italic" }}>
//                 By placing your order you agree to our Terms & Privacy Policy
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default PlaceOrder;



import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { PayPalButtons } from "@paypal/react-paypal-js";

/* ── Inline SVG icons ──────────────────────────────── */
const IconUser = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="#c8973a" strokeWidth="1.4" />
    <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.4" />
    <path d="M2 8l10 6 10-6" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconMap = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#c8973a" strokeWidth="1.4" />
    <circle cx="12" cy="9" r="2.5" stroke="#c8973a" strokeWidth="1.4" />
  </svg>
);
const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const IconBuilding = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#c8973a" strokeWidth="1.4" />
    <path d="M9 21V9h6v12" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M3 9h18" stroke="#c8973a" strokeWidth="1.4" />
  </svg>
);
const IconGlobe = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#c8973a" strokeWidth="1.4" />
    <path d="M2 12h20M12 2c-2 3-3 6-3 10s1 7 3 10M12 2c2 3 3 6 3 10s-1 7-3 10" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconZip = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="#c8973a" strokeWidth="1.4" />
    <path d="M8 6h8M8 10h5M8 14h6" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#1a0f0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconTruck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M1 3h15v13H1z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M16 8h4l3 4v4h-7V8z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="5.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" />
    <circle cx="18.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" />
  </svg>
);
const IconReturn = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M4 12a8 8 0 0 1 14.93-4H15" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 4v4h-4" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Step indicator ─────────────────────────────────── */
const steps = ["Cart", "Delivery", "Payment", "Confirm"];

const StepBar = ({ current }) => (
  <div className="flex items-center justify-center gap-0 mb-10">
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center gap-1.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: i < current
                ? "linear-gradient(135deg,#c8973a,#f7c568)"
                : i === current
                  ? "rgba(200,151,58,0.15)"
                  : "rgba(255,255,255,0.04)",
              border: i === current
                ? "1.5px solid #c8973a"
                : i < current ? "none" : "1px solid rgba(200,151,58,0.2)",
            }}
          >
            {i < current
              ? <IconCheck />
              : <span className="text-[10px] font-bold" style={{ color: i === current ? "#c8973a" : "#3a2510" }}>{i + 1}</span>
            }
          </div>
          <span
            className="text-[8px] tracking-[0.2em] font-semibold uppercase"
            style={{ color: i <= current ? "#c8973a" : "#7a6050" }}
          >
            {s}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div
            className="h-px mx-1 mb-[22px] transition-all duration-400"
            style={{
              width: 48,
              background: i < current
                ? "linear-gradient(to right,#c8973a,#f7c568)"
                : "rgba(200,151,58,0.12)",
            }}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ── Gold top accent bar ── */
const GoldAccent = () => (
  <div
    className="h-0.5 w-full"
    style={{ background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }}
  />
);

/* ── Section card wrapper ── */
const SectionCard = ({ children }) => (
  <div
    className="rounded-sm overflow-hidden mb-6"
    style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)" }}
  >
    <GoldAccent />
    <div className="p-6 sm:p-7">{children}</div>
  </div>
);

/* ── Section heading ── */
const SectionHeading = ({ step, icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)" }}
    >
      {icon}
    </div>
    <div>
      <p className="text-[8px] tracking-[0.34em] font-bold uppercase mb-0.5" style={{ color: "#c8973a" }}>{step}</p>
      <p className="text-sm tracking-[0.06em]" style={{ color: "#f7c568" }}>{title}</p>
    </div>
  </div>
);

/* ── Styled input field ── */
const Field = ({ icon, label, name, value, onChange, type = "text", placeholder, required, half }) => (
  <div className={`flex flex-col gap-1.5 ${half ? "flex-1 min-w-[120px]" : "w-full"}`}>
    <label
      className="text-[8.5px] tracking-[0.28em] font-semibold uppercase flex items-center gap-1.5"
      style={{ color: "#c8973a" }}
    >
      {icon} {label}{required && <span style={{ color: "#c8973a" }}>*</span>}
    </label>
    <input
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 text-sm outline-none rounded-sm transition-all duration-200 placeholder:italic"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(200,151,58,0.3)",
        color: "#f5ede0",
        fontFamily: "Montserrat, sans-serif",
      }}
      onFocus={e => {
        e.target.style.borderColor = "#c8973a";
        e.target.style.background = "rgba(200,151,58,0.07)";
      }}
      onBlur={e => {
        e.target.style.borderColor = "rgba(200,151,58,0.3)";
        e.target.style.background = "rgba(255,255,255,0.06)";
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
      className="flex-1 min-w-[140px] p-3.5 cursor-pointer transition-all duration-200 rounded-sm relative overflow-hidden"
      style={{
        background: active ? "rgba(200,151,58,0.08)" : "rgba(255,255,255,0.02)",
        border: active ? "1px solid #c8973a" : "1px solid rgba(200,151,58,0.15)",
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)"; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)"; }}
    >
      {active && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: "linear-gradient(to right,#c8973a,#f7c568)" }}
        />
      )}
      <div className="flex items-center gap-2.5">
        <div
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            border: active ? "none" : "1px solid rgba(200,151,58,0.3)",
            background: active ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
          }}
        >
          {active && <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1a0f0a" }} />}
        </div>
        {logo
          ? <img src={logo} alt={label} className="h-5 object-contain transition-all duration-200" style={{ filter: active ? "brightness(1)" : "brightness(0.75)" }} />
          : <span className="text-[11px] tracking-[0.16em] font-semibold" style={{ color: active ? "#f7c568" : "#c8973a" }}>{label}</span>
        }
      </div>
      {sublabel && (
        <p className="text-[9px] italic mt-1.5 tracking-[0.1em]" style={{ color: active ? "#c8973a" : "#8a7060" }}>{sublabel}</p>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   PLACE ORDER PAGE
══════════════════════════════════════════════════════ */
const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const [isPayPalReady, setIsPayPalReady] = useState(false);
  const [orderDataForPayPal, setOrderDataForPayPal] = useState(null);
  const {
    navigate, backendUrl, token, cartItems,
    setCartItems, getCartAmount, delivery_fee, products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "",
    street: "", city: "", state: "",
    zipcode: "", country: "", phone: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(d => ({ ...d, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount, currency: order.currency,
      name: "D Dolly Lamb", description: "Artisan Leather Order",
      order_id: order.id, receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(`${backendUrl}/api/order/verifyRazorpay`, response,
            { headers: { Authorization: `Bearer ${token}` } });
          if (data.success) { setCartItems({}); navigate("/orders"); }
          else toast.error(data.message || "Payment verification failed");
        } catch (err) { toast.error(err.message || "Something went wrong"); }
      },
    };
    new window.Razorpay(options).open();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!token) return toast.error("Please log in to place an order");
    setLoading(true);
    try {
      let orderItems = [];
      for (const productId in cartItems) {
        const variants = cartItems[productId];
        const productInfo = products.find(p => p._id === productId);
        if (!productInfo) continue;
        for (const variantKey in variants) {
          if (variantKey === "quantity" || variantKey === "customPrice") continue;
          const qty = variants[variantKey];
          if (!qty || qty <= 0) continue;
          const [size, color] = variantKey.split("-");
          orderItems.push({ productId, name: productInfo.name, price: productInfo.price, quantity: qty, size, color, image: productInfo.image?.[0] });
        }
      }
      const orderData = { address: formData, items: orderItems, amount: getCartAmount() + delivery_fee };
      const cfg = { headers: { Authorization: `Bearer ${token}` } };

      if (method === "cod") {
        const r = await axios.post(`${backendUrl}/api/order/place`, orderData, cfg);
        if (r.data.success) { setCartItems({}); navigate("/orders"); }
        else toast.error(r.data.message);
      } else if (method === "stripe") {
        const r = await axios.post(`${backendUrl}/api/order/stripe`, orderData, cfg);
        if (r.data.success) window.location.replace(r.data.session_url);
        else toast.error(r.data.message);
      } else if (method === "razorpay") {
        const r = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, cfg);
        if (r.data.success) initPay(r.data.order);
        else toast.error(r.data.message);
      } else if (method === "paypal") {
        setOrderDataForPayPal(orderData);  // upar wala orderData already exist karta hai
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes poFadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .po-fadein { animation: poFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .po-fadein-delay { animation: poFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .po-spinner { width:16px; height:16px; border:2px solid rgba(26,15,10,0.3); border-top-color:#1a0f0a; border-radius:50%; animation:spin 0.7s linear infinite; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }
        input::placeholder { color:rgba(200,160,100,0.45); font-style:italic; }
        * { box-sizing:border-box; }
      `}</style>

      <div
        className="min-h-screen py-12 px-5 sm:px-8 lg:px-16"
        style={{ background: "#1a0f0a", color: "#f5ede0", fontFamily: "Georgia,serif" }}
      >
        {/* ── Page header ── */}
        <div className="text-center mb-9">
          <p className="text-[9px] tracking-[0.42em] font-bold mb-2" style={{ color: "#c8973a", fontFamily: "Arial" }}>
            D DOLLY LAMB
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.08em] m-0"
            style={{ color: "#f7c568" }}
          >
            SECURE CHECKOUT
          </h1>
          <div className="flex items-center justify-center gap-2.5 mt-2.5">
            <span className="flex-1 max-w-[120px] h-px" style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
            <span className="w-1.5 h-1.5 rotate-45" style={{ background: "#c8973a" }} />
            <span className="flex-1 max-w-[120px] h-px" style={{ background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
          </div>
        </div>

        {/* ── Step bar ── */}
        <StepBar current={1} />

        {/* ── Main 2-column grid ── */}
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-7 max-w-6xl mx-auto items-start"
        >

          {/* ═══ LEFT — Delivery + Payment ═══ */}
          <div className="po-fadein">

            {/* Delivery info card */}
            <SectionCard>
              <SectionHeading step="STEP 01" icon={<IconMap />} title="Delivery Information" />
              <div className="flex flex-wrap gap-3">
                <Field icon={<IconUser />} label="First Name" name="firstName" value={formData.firstName} onChange={onChange} placeholder="James" required half />
                <Field icon={<IconUser />} label="Last Name" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Harrington" required half />
                <Field icon={<IconMail />} label="Email Address" name="email" value={formData.email} onChange={onChange} type="email" placeholder="james@example.com" required />
                <Field icon={<IconMap />} label="Street Address" name="street" value={formData.street} onChange={onChange} placeholder="14 Savile Row" required />
                <Field icon={<IconBuilding />} label="City" name="city" value={formData.city} onChange={onChange} placeholder="London" required half />
                <Field icon={<IconBuilding />} label="State / Region" name="state" value={formData.state} onChange={onChange} placeholder="England" half />
                <Field icon={<IconZip />} label="Postcode / ZIP" name="zipcode" value={formData.zipcode} onChange={onChange} type="number" placeholder="W1S 3PR" required half />
                <Field icon={<IconGlobe />} label="Country" name="country" value={formData.country} onChange={onChange} placeholder="United Kingdom" required half />
                <Field icon={<IconPhone />} label="Phone Number" name="phone" value={formData.phone} onChange={onChange} type="number" placeholder="+44 7700 900000" required />
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
                {/* <PayOption id="cod" method={method} setMethod={setMethod}
                  label="CASH ON DELIVERY" sublabel="Pay when your order arrives" /> */}
                <PayOption
                  id="paypal" method={method} setMethod={() => { setMethod("paypal"); setIsPayPalReady(false); }}
                  label="PAYPAL" sublabel="Pay via PayPal account"
                />
              </div>
              {method === "cod" && (
                <div
                  className="mt-4 px-4 py-3 rounded-sm"
                  style={{ background: "rgba(200,151,58,0.05)", border: "1px solid rgba(200,151,58,0.15)" }}
                >
                  <p className="text-[11px] italic leading-relaxed" style={{ color: "#c8973a" }}>
                    ◆ &nbsp;Cash on delivery available for orders under £500. Our courier will collect payment upon arrival.
                  </p>
                </div>
              )}
              {method === "paypal" && isPayPalReady && orderDataForPayPal && (
                <div
                  id="paypal-btn"
                  className="mt-4 rounded-sm overflow-hidden p-3"
                  style={{
                    background: "rgba(200,151,58,0.04)",
                    border: "1px solid rgba(200,151,58,0.15)"
                  }}
                >
                  <PayPalButtons
                    style={{ layout: "vertical", color: "gold", shape: "rect" }}
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

          {/* ═══ RIGHT — Order summary + Trust + Submit ═══ */}
          <div className="po-fadein-delay flex flex-col gap-5 lg:sticky lg:top-6">

            {/* Cart total card */}
            <div
              className="rounded-sm overflow-hidden"
              style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.15)" }}
            >
              <GoldAccent />
              <div className="p-5 sm:p-6">
                <CartTotal />
              </div>
            </div>

            {/* Trust block */}
            <div
              className="rounded-sm p-5"
              style={{ background: "rgba(200,151,58,0.04)", border: "1px solid rgba(200,151,58,0.12)" }}
            >
              <p
                className="text-[8px] tracking-[0.32em] font-bold text-center mb-4 uppercase"
                style={{ color: "#c8973a", fontFamily: "Montserrat, Arial" }}
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
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.2)" }}
                    >
                      {t.icon}
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.04em] mb-0.5" style={{ color: "#f5ede0" }}>{t.title}</p>
                      <p className="text-[10px]" style={{ color: "#a08060" }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                // disabled={loading}
                disabled={loading || (method === "paypal" && isPayPalReady)}
                className="w-full py-4 px-8 flex items-center justify-center gap-2.5 font-bold text-[11px] tracking-[0.28em] uppercase rounded-sm transition-all duration-300 disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#c8973a,#f7c568)",
                  color: "#1a0f0a",
                  fontFamily: "Arial, sans-serif",
                  boxShadow: loading ? "none" : undefined,
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = "0 10px 36px rgba(200,151,58,0.38)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* {loading
                  ? <><div className="po-spinner" /> PROCESSING...</>
                  : <>PLACE ORDER <IconArrow /></>
                } */}
                {loading
                  ? <><div className="po-spinner" /> PROCESSING...</>
                  : method === "paypal" && isPayPalReady
                    ? <>USE PAYPAL BUTTONS ABOVE</>
                    : <>PLACE ORDER <IconArrow /></>
                }
              </button>
              <p className="text-[9px] italic text-center mt-3 tracking-[0.1em]" style={{ color: "#7a6050" }}>
                By placing your order you agree to our Terms &amp; Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PlaceOrder;