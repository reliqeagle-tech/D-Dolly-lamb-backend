// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /* ── Premium inline SVG icons ── */
// const IconSearch = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconUser = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconHeart = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//       stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
//   </svg>
// );
// const IconBag = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//     <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconMenu = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );

// /* ── GLOBAL STYLES ─────────────────────── */
// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500;600&display=swap');

//   :root {
//     --bg:        #1a0f0a;
//     --gold:      #c8924a;
//     --gold-dim:  #8a5e2d;
//     --gold-pale: #e0b06a;
//     --white:     #f0e6d8;
//     --border:    rgba(200,146,74,0.18);
//   }

//   * { box-sizing: border-box; }

//   .ddl-navlink {
//     position: relative;
//     font-size: 11px; font-weight: 500;
//     letter-spacing: 0.18em; text-transform: uppercase;
//     color: var(--white); text-decoration: none;
//     cursor: pointer; padding-bottom: 4px;
//     display: flex; align-items: center; gap: 5px;
//     background: none; border: none;
//     transition: color 0.22s;
//     white-space: nowrap;
//   }
//   .ddl-navlink::after {
//     content: '';
//     position: absolute; bottom: 0; left: 0;
//     width: 0; height: 1px;
//     background: var(--gold);
//     transition: width 0.3s ease;
//   }
//   .ddl-navlink:hover,
//   .ddl-navlink.is-active { color: var(--gold); }
//   .ddl-navlink:hover::after,
//   .ddl-navlink.is-active::after { width: 100%; }

//   @keyframes megaIn {
//     from { opacity: 0; transform: translateY(-10px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes colIn {
//     from { opacity: 0; transform: translateY(12px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes lineExpand {
//     from { width: 0; }
//     to   { width: 100%; }
//   }
//   @keyframes imgReveal {
//     from { opacity: 0; transform: scale(1.06); }
//     to   { opacity: 1; transform: scale(1); }
//   }
//   @keyframes itemSlide {
//     from { opacity: 0; transform: translateX(-8px); }
//     to   { opacity: 1; transform: translateX(0); }
//   }

//   .ddl-mega { animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both; }
//   .ddl-mega-col { animation: colIn 0.35s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
//   .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
//   .ddl-col-rule {
//     display: block; height: 1px; width: 0;
//     background: linear-gradient(to right, var(--gold-dim), transparent);
//     animation: lineExpand 0.5s ease 0.1s both;
//   }
//   .ddl-mega-img-wrap { animation: imgReveal 0.45s ease 0.08s both; }
//   .ddl-mega-item { animation: itemSlide 0.3s ease both; }
//   .ddl-mega-item:nth-child(1) { animation-delay: 0.1s; }
//   .ddl-mega-item:nth-child(2) { animation-delay: 0.15s; }
//   .ddl-mega-item:nth-child(3) { animation-delay: 0.2s; }
//   .ddl-mega-item:nth-child(4) { animation-delay: 0.25s; }
//   .ddl-mega-item:nth-child(5) { animation-delay: 0.3s; }
//   .ddl-mega-item:nth-child(6) { animation-delay: 0.35s; }

//   .ddl-mega-link {
//     font-size: 12px; letter-spacing: 0.06em;
//     color: rgba(240,230,216,0.65); text-decoration: none;
//     transition: color 0.2s, padding-left 0.2s;
//     display: flex; align-items: center; gap: 8px;
//   }
//   .ddl-mega-link:hover { color: var(--gold); padding-left: 4px; }
//   .ddl-mega-link::before {
//     content: '';
//     display: inline-block; width: 14px; height: 1px;
//     background: var(--gold-dim); flex-shrink: 0;
//     transition: width 0.2s, background 0.2s;
//   }
//   .ddl-mega-link:hover::before { width: 20px; background: var(--gold); }

//   .ddl-user-wrap { position: relative; }
//   .ddl-dropdown {
//     position: fixed; top: 68px; right: 16px;
//     background: #221208;
//     border: 1px solid var(--border);
//     border-top: 2px solid var(--gold);
//     min-width: 190px; z-index: 999999;
//     box-shadow: 0 16px 48px rgba(0,0,0,0.8);
//     animation: megaIn 0.18s ease both;
//   }
//   .ddl-dropdown::before {
//     content: ''; position: absolute;
//     top: -18px; left: 0; right: 0; height: 18px;
//   }
//   .ddl-dropdown-item {
//     display: block; padding: 11px 18px;
//     font-size: 11px; letter-spacing: 0.12em;
//     color: var(--white); text-transform: uppercase;
//     cursor: pointer; border-bottom: 1px solid var(--border);
//     transition: background 0.15s, color 0.15s, padding-left 0.15s;
//     font-family: 'Montserrat', sans-serif;
//   }
//   .ddl-dropdown-item:last-child { border-bottom: none; }
//   .ddl-dropdown-item:hover { background: rgba(200,146,74,0.1); color: var(--gold); padding-left: 24px; }

//   .ddl-sidebar {
//     position: fixed; top: 0; right: 0; bottom: 0;
//     background: #120a05; z-index: 99999;
//     transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
//     overflow-x: hidden; overflow-y: auto;
//     font-family: 'Montserrat', sans-serif;
//     border-left: 1px solid var(--border);
//     max-width: 100vw;
//   }
//   .ddl-hamburger { display: flex; }
//   @media (min-width: 768px) {
//     .ddl-hamburger { display: none !important; }
//     .ddl-center-nav { display: flex !important; }
//   }
//   @media (max-width: 767px) {
//     .ddl-center-nav { display: none !important; }
//   }
//   .ddl-sb-link {
//     display: block; padding: 14px 26px;
//     font-size: 11px; font-weight: 500;
//     letter-spacing: 0.25em; text-transform: uppercase;
//     color: rgba(240,230,216,0.8); text-decoration: none;
//     border-bottom: 1px solid rgba(200,146,74,0.08);
//     transition: color 0.2s, padding-left 0.2s;
//   }
//   .ddl-sb-link:hover { color: var(--gold); padding-left: 34px; }
//   .ddl-sb-accord-btn {
//     width: 100%; display: flex; align-items: center; justify-content: space-between;
//     padding: 14px 26px; font-size: 11px; font-weight: 500;
//     letter-spacing: 0.25em; text-transform: uppercase;
//     color: rgba(240,230,216,0.8);
//     background: none; border: none;
//     border-bottom: 1px solid rgba(200,146,74,0.08);
//     cursor: pointer; transition: color 0.2s; font-family: 'Montserrat', sans-serif;
//   }
//   .ddl-sb-accord-btn:hover { color: var(--gold); }
//   .ddl-sb-body { overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s; }
//   .ddl-sb-section { padding: 12px 26px 12px 40px; border-bottom: 1px solid rgba(200,146,74,0.05); }
//   .ddl-sb-section h4 {
//     font-size: 8px; letter-spacing: 0.32em; color: var(--gold-dim);
//     text-transform: uppercase; font-weight: 600; margin-bottom: 10px;
//   }
//   .ddl-sb-section a {
//     display: block; padding: 5px 0; font-size: 11px;
//     color: rgba(240,230,216,0.55); text-decoration: none;
//     transition: color 0.2s; letter-spacing: 0.06em;
//   }
//   .ddl-sb-section a:hover { color: var(--gold); }

//   .ddl-icon-btn {
//     background: none; border: none; cursor: pointer;
//     color: var(--white); display: flex; align-items: center;
//     position: relative; transition: color 0.2s;
//     text-decoration: none; padding: 0;
//   }
//   .ddl-icon-btn:hover { color: var(--gold); }
// `;

// /* ── Icons ── */
// const DiamondIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
//     <rect x="6" y="6" width="30" height="30" rx="1"
//       transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
//     <rect x="11" y="11" width="20" height="20" rx="0.5"
//       transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//     <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
//       fontSize="13" fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
//   </svg>
// );

// const MegaBadge = ({ text }) => (
//   <div className="flex items-center gap-2 mb-4 mt-1">
//     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//       <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
//         stroke="#c8924a" strokeWidth="1" fill="rgba(200,146,74,0.15)" strokeLinejoin="round" />
//     </svg>
//     <span style={{ fontSize: "8px", letterSpacing: "0.32em", color: "#8a5e2d", fontFamily: "Montserrat,sans-serif", fontWeight: 600, textTransform: "uppercase" }}>
//       {text}
//     </span>
//   </div>
// );

// const Chevron = ({ open }) => (
//   <span style={{
//     display: "inline-block",
//     width: 6, height: 6,
//     borderRight: "1.5px solid currentColor",
//     borderBottom: "1.5px solid currentColor",
//     transform: open ? "rotate(-135deg) translateY(2px)" : "rotate(45deg) translateY(-1px)",
//     transition: "transform 0.25s",
//     flexShrink: 0,
//   }} />
// );

// /* ── MEGA MENU WRAPPER ── */
// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//   <div
//     className="ddl-mega fixed left-0 right-0"
//     style={{ top: 68, background: "#1a0f0a", borderTop: "1px solid rgba(200,146,74,0.18)", borderBottom: "1px solid rgba(200,146,74,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//     onMouseEnter={showMenu}
//     onMouseLeave={hideMenu}
//   >
//     <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.7 }} />
//     <div className="max-w-[1400px] mx-auto px-16 py-9 flex gap-14 items-start">
//       {children}
//     </div>
//   </div>
// );

// /* ── FIXED: URL builder correctly uses category=Others for Others items ── */
// const buildUrl = (item) => {
//   // If this item belongs to the "Others" category, use Others as the category filter
//   // so the Collection page matches products that have category="Others"
//   if (item.category === "Others") {
//     return `/collection?category=Others&sub=${encodeURIComponent(item.label)}`;
//   }
//   // For Topwear / Bottomwear, use gender as category filter (Men / Women)
//   return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
// };

// const MegaColumn = ({ title, badge, items }) => (
//   <div className="ddl-mega-col min-w-[150px]">
//     {badge && <MegaBadge text={badge} />}
//     <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.3em", color: "#8a5e2d", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", marginBottom: "14px" }}>
//       {title}
//     </div>
//     <span className="ddl-col-rule" style={{ display: "block", marginBottom: "16px" }} />
//     <ul className="flex flex-col gap-3 list-none p-0 m-0">
//       {items.map((item, i) => (
//         <li key={i} className="ddl-mega-item">
//           <Link to={buildUrl(item)} className="ddl-mega-link">
//             {item.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// /* ── MOBILE ACCORDION ── */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//   <div>
//     <button className="ddl-sb-accord-btn" onClick={toggle}>
//       {title} <Chevron open={open} />
//     </button>
//     <div className="ddl-sb-body" style={{ maxHeight: open ? 700 : 0, opacity: open ? 1 : 0 }}>
//       {Object.entries(sections).map(([sec, items], idx) => (
//         <div className="ddl-sb-section" key={idx}>
//           <h4>{sec}</h4>
//           {items.map((item, i) => (
//             <Link key={i} onClick={closeSidebar} to={buildUrl(item)}>
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// /* ══════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════ */
// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileAccord, setMobileAccord] = useState(null);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const hideRef = useRef(null);
//   const profileRef = useRef(null);

//   const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   useEffect(() => {
//     const handleOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     if (profileOpen) document.addEventListener('mousedown', handleOutside);
//     return () => document.removeEventListener('mousedown', handleOutside);
//   }, [profileOpen]);

//   const logout = () => {
//     setProfileOpen(false);
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 280); };
//   const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

//   return (
//     <>
//       <style>{STYLES}</style>

//       <header
//         className="sticky top-0"
//         style={{
//           background: "#1a0f0a",
//           borderBottom: "1px solid rgba(200,146,74,0.18)",
//           fontFamily: "Montserrat, sans-serif",
//           zIndex: 9998,
//           overflow: "visible",
//         }}
//       >
//         <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.6 }} />

//         <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-3 md:gap-6" style={{ height: 66 }}>

//           {/* ── LOGO ── */}
//           <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0" style={{ minWidth: 0 }}>
//             <div className="flex-shrink-0"><DiamondIcon /></div>
//             <div className="flex flex-col leading-none min-w-0">
//               <span style={{ fontFamily: "Montserrat,sans-serif", fontSize: "clamp(10px,2vw,14px)", fontWeight: 600, letterSpacing: "0.22em", color: "#f0e6d8", textTransform: "uppercase", whiteSpace: "nowrap" }}>
//                 <span style={{ color: "#c8924a" }}>D DOLLY</span> LAMB
//               </span>
//               <span style={{ display: "block", height: 1, background: "linear-gradient(to right, #8a5e2d, transparent)", margin: "3px 0" }} />
//               <span style={{ fontSize: "clamp(6px,1.5vw,8.5px)", letterSpacing: "0.38em", color: "#8a5e2d", textTransform: "uppercase", whiteSpace: "nowrap" }}>ARTISAN ATELIER</span>
//             </div>
//           </Link>

//           {/* ── CENTER NAV ── */}
//           <ul className="ddl-center-nav items-center gap-8 list-none m-0 p-0" style={{ display: "none" }}>
//             <li>
//               <NavLink to="/" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Home</NavLink>
//             </li>

//             {/* MEN */}
//             <li className="relative" onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
//               <div className={`ddl-navlink${activeMenu === "men" ? " is-active" : ""}`} style={{ cursor: "pointer" }}>
//                 Men <Chevron open={activeMenu === "men"} />
//               </div>
//               {activeMenu === "men" && (
//                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                   <MegaColumn title="Tops" badge="MEN'S COLLECTION" items={[
//                     { label: "Biker Jacket", category: "Topwear", gender: "Men" },
//                     { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
//                     { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
//                   ]} />
//                   <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
//                   {/* ✅ FIX: category="Others" → buildUrl uses category=Others in URL */}
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Men" },
//                     { label: "Cushion Cover", category: "Others", gender: "Men" },
//                     { label: "Aprons", category: "Others", gender: "Men" },
//                     { label: "Desk Mat", category: "Others", gender: "Men" },
//                     { label: "Chair Cover", category: "Others", gender: "Men" },
//                   ]} />

//                   {/* Featured image */}
//                   <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden" style={{ borderRadius: 3 }}>
//                     <img src={assets.men_nav} alt="Men's Collection" className="w-full object-cover" style={{ height: 250, filter: "brightness(0.7)", transition: "transform 0.5s", display: "block" }}
//                       onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                       onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                     />
//                     <span style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
//                     <span style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
//                     <span style={{ position: "absolute", bottom: 8, left: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
//                     <span style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
//                     <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px", fontSize: 8.5, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8924a", textAlign: "center", background: "linear-gradient(0deg, rgba(26,15,10,0.92), transparent)" }}>
//                       Men's Collection
//                     </div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {/* WOMEN */}
//             <li className="relative" onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
//               <div className={`ddl-navlink${activeMenu === "women" ? " is-active" : ""}`} style={{ cursor: "pointer" }}>
//                 Women <Chevron open={activeMenu === "women"} />
//               </div>
//               {activeMenu === "women" && (
//                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                   <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
//                     { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                     { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                     { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                     { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                     { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                   ]} />
//                   <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
//                   <MegaColumn title="Bottoms" items={[
//                     { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                     { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                     { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//                   ]} />
//                   <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
//                   {/* ✅ FIX: category="Others" → buildUrl uses category=Others in URL */}
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Women" },
//                     { label: "Cushion Cover", category: "Others", gender: "Women" },
//                     { label: "Aprons", category: "Others", gender: "Women" },
//                     { label: "Desk Mat", category: "Others", gender: "Women" },
//                     { label: "Chair Cover", category: "Others", gender: "Women" },
//                   ]} />
//                   <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden" style={{ borderRadius: 3 }}>
//                     <img src={assets.women_nav} alt="Women's Collection" className="w-full object-cover" style={{ height: 250, filter: "brightness(0.7)", transition: "transform 0.5s", display: "block" }}
//                       onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                       onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                     />
//                     <span style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
//                     <span style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
//                     <span style={{ position: "absolute", bottom: 8, left: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
//                     <span style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
//                     <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px", fontSize: 8.5, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8924a", textAlign: "center", background: "linear-gradient(0deg, rgba(26,15,10,0.92), transparent)" }}>
//                       Women's Collection
//                     </div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             <li><NavLink to="/collection" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Collection</NavLink></li>
//             <li><NavLink to="/about" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>About</NavLink></li>
//             <li><NavLink to="/contact" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Contact</NavLink></li>
//           </ul>

//           {/* ── RIGHT ICONS ── */}
//           <div className="flex items-center gap-3 md:gap-5 flex-shrink-0" style={{ overflow: "visible" }}>

//             {/* Search */}
//             <button className="ddl-icon-btn" aria-label="Search"
//               onClick={() => { setShowSearch(true); navigate("/collection"); }}>
//               <IconSearch />
//             </button>

//             {/* Account */}
//             <div ref={profileRef} style={{ position: "relative" }}>
//               <button
//                 className="ddl-icon-btn"
//                 aria-label="Account"
//                 onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}
//               >
//                 <IconUser />
//               </button>

//               {token && profileOpen && (
//                 <div style={{
//                   position: "absolute",
//                   top: "calc(100% + 12px)",
//                   right: 0,
//                   background: "#221208",
//                   border: "1px solid rgba(200,146,74,0.25)",
//                   borderTop: "2px solid #c8924a",
//                   minWidth: 190,
//                   zIndex: 999999,
//                   boxShadow: "0 16px 48px rgba(0,0,0,0.8)",
//                   animation: "megaIn 0.18s ease both",
//                 }}>
//                   <div style={{ padding: "12px 18px 10px", borderBottom: "1px solid rgba(200,146,74,0.15)" }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
//                       <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#c8924a,#8a5e2d)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                         <IconUser />
//                       </div>
//                       <span style={{ fontSize: 9, letterSpacing: "0.18em", color: "#c8924a", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif" }}>My Account</span>
//                     </div>
//                   </div>
//                   <p className="ddl-dropdown-item" onClick={() => { setProfileOpen(false); navigate("/profile"); }}>My Profile</p>
//                   <p className="ddl-dropdown-item" onClick={() => { setProfileOpen(false); navigate("/orders"); }}>Orders</p>
//                   <p className="ddl-dropdown-item" onClick={logout}>Logout</p>
//                 </div>
//               )}
//             </div>

//             {/* Wishlist */}
//             <Link to="/wishlist" className="ddl-icon-btn relative" aria-label="Wishlist">
//               <IconHeart />
//               {wishlist?.length > 0 && (
//                 <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
//                   style={{ background: "linear-gradient(135deg,#c8924a,#f7c568)", color: "#1a0f0a" }}>
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="ddl-icon-btn relative" aria-label="Cart">
//               <IconBag />
//               <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
//                 style={{ background: "linear-gradient(135deg,#c8924a,#f7c568)", color: "#1a0f0a" }}>
//                 {getCartCount()}
//               </span>
//             </Link>

//             {/* Hamburger — mobile only */}
//             <button className="ddl-icon-btn ddl-hamburger" aria-label="Menu"
//               onClick={() => setVisible(true)}>
//               <IconMenu />
//             </button>
//           </div>
//         </div>

//         {/* ── MOBILE SIDEBAR OVERLAY ── */}
//         {visible && (
//           <div
//             onClick={() => setVisible(false)}
//             style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99998, backdropFilter: "blur(2px)" }}
//           />
//         )}

//         {/* ── MOBILE SIDEBAR ── */}
//         <div className="ddl-sidebar" style={{ width: visible ? "min(320px, 100vw)" : 0 }}>
//           <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(200,146,74,0.18)" }}>
//             <button
//               className="flex items-center gap-2 bg-none border-none cursor-pointer text-xs tracking-widest uppercase"
//               style={{ color: "#f0e6d8", fontFamily: "Montserrat,sans-serif", transition: "color 0.2s" }}
//               onMouseEnter={e => e.currentTarget.style.color = "#c8924a"}
//               onMouseLeave={e => e.currentTarget.style.color = "#f0e6d8"}
//               onClick={() => setVisible(false)}>
//               <IconMenu /> Close
//             </button>
//             <DiamondIcon />
//           </div>

//           <div style={{ height: 1, background: "linear-gradient(to right, transparent, #c8924a, transparent)", opacity: 0.5 }} />

//           <NavLink className="ddl-sb-link" to="/" onClick={() => setVisible(false)}>Home</NavLink>

//           <MobileAccordion title="Men"
//             open={mobileAccord === "men"}
//             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//             sections={{
//               TOPS: [
//                 { label: "Biker Jacket", category: "Topwear", gender: "Men" },
//                 { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
//                 { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
//               ],
//               OTHERS: [
//                 { label: "Pillow", category: "Others", gender: "Men" },
//                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                 { label: "Aprons", category: "Others", gender: "Men" },
//                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                 { label: "Chair Cover", category: "Others", gender: "Men" },
//               ],
//             }}
//             closeSidebar={() => setVisible(false)} />

//           <MobileAccordion title="Women"
//             open={mobileAccord === "women"}
//             toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
//             sections={{
//               TOPS: [
//                 { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                 { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                 { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                 { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                 { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//               ],
//               BOTTOMS: [
//                 { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                 { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                 { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//               ],
//               OTHERS: [
//                 { label: "Pillow", category: "Others", gender: "Women" },
//                 { label: "Cushion Cover", category: "Others", gender: "Women" },
//                 { label: "Aprons", category: "Others", gender: "Women" },
//                 { label: "Desk Mat", category: "Others", gender: "Women" },
//                 { label: "Chair Cover", category: "Others", gender: "Women" },
//               ],
//             }}
//             closeSidebar={() => setVisible(false)} />

//           <NavLink className="ddl-sb-link" to="/collection" onClick={() => setVisible(false)}>Collection</NavLink>
//           <NavLink className="ddl-sb-link" to="/about" onClick={() => setVisible(false)}>About</NavLink>
//           <NavLink className="ddl-sb-link" to="/contact" onClick={() => setVisible(false)}>Contact</NavLink>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;




// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /* ── Premium inline SVG icons ── */
// const IconSearch = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconUser = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconHeart = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//       stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
//   </svg>
// );
// const IconBag = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//     <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconMenu = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );

// /* ── Keyframe animations only (cannot be replaced by Tailwind) ── */
// const ANIM_STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500;600&display=swap');

//   @keyframes megaIn {
//     from { opacity: 0; transform: translateY(-10px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes colIn {
//     from { opacity: 0; transform: translateY(12px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes lineExpand {
//     from { width: 0; }
//     to   { width: 100%; }
//   }
//   @keyframes imgReveal {
//     from { opacity: 0; transform: scale(1.06); }
//     to   { opacity: 1; transform: scale(1); }
//   }
//   @keyframes itemSlide {
//     from { opacity: 0; transform: translateX(-8px); }
//     to   { opacity: 1; transform: translateX(0); }
//   }

//   .ddl-mega         { animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both; }
//   .ddl-mega-col     { animation: colIn 0.35s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
//   .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
//   .ddl-col-rule {
//     display: block; height: 1px; width: 0;
//     background: linear-gradient(to right, #8a5e2d, transparent);
//     animation: lineExpand 0.5s ease 0.1s both;
//   }
//   .ddl-mega-img-wrap { animation: imgReveal 0.45s ease 0.08s both; }
//   .ddl-mega-item     { animation: itemSlide 0.3s ease both; }
//   .ddl-mega-item:nth-child(1) { animation-delay: 0.10s; }
//   .ddl-mega-item:nth-child(2) { animation-delay: 0.15s; }
//   .ddl-mega-item:nth-child(3) { animation-delay: 0.20s; }
//   .ddl-mega-item:nth-child(4) { animation-delay: 0.25s; }
//   .ddl-mega-item:nth-child(5) { animation-delay: 0.30s; }
//   .ddl-mega-item:nth-child(6) { animation-delay: 0.35s; }
// `;

// /* ── Icons ── */
// const DiamondIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
//     <rect x="6" y="6" width="30" height="30" rx="1"
//       transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
//     <rect x="11" y="11" width="20" height="20" rx="0.5"
//       transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//     <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
//       fontSize="13" fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
//   </svg>
// );

// const MegaBadge = ({ text }) => (
//   <div className="flex items-center gap-2 mb-4 mt-1">
//     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//       <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
//         stroke="#c8924a" strokeWidth="1" fill="rgba(200,146,74,0.15)" strokeLinejoin="round" />
//     </svg>
//     <span className="text-[8px] tracking-[0.32em] text-[#8a5e2d] font-['Montserrat',sans-serif] font-semibold uppercase">
//       {text}
//     </span>
//   </div>
// );

// const Chevron = ({ open }) => (
//   <span className={`
//     inline-block w-1.5 h-1.5 flex-shrink-0
//     border-r-[1.5px] border-b-[1.5px] border-current
//     transition-transform duration-[250ms]
//     ${open ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-px"}
//   `} />
// );

// /* ── NavLink with underline animation ── */
// const NavItem = ({ to, children, isButton = false, isActive = false, onClick }) => {
//   const base = `
//     relative flex items-center gap-[5px] pb-1
//     text-[11px] font-medium tracking-[0.18em] uppercase
//     font-['Montserrat',sans-serif] no-underline cursor-pointer
//     bg-transparent border-none
//     transition-colors duration-[220ms]
//     after:content-[''] after:absolute after:bottom-0 after:left-0
//     after:h-px after:w-0 after:bg-[#c8924a]
//     after:transition-[width] after:duration-300
//     hover:text-[#c8924a] hover:after:w-full
//     ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8]"}
//   `;
//   if (isButton) return <button className={base} onClick={onClick}>{children}</button>;
//   return <NavLink to={to} className={({ isActive: a }) => base.replace(isActive ? "" : "", "") + (a ? " !text-[#c8924a] [&::after]:w-full" : "")}>{children}</NavLink>;
// };

// /* ── MEGA MENU WRAPPER ── */
// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//   <div
//     className="ddl-mega fixed left-0 right-0 bg-[#1a0f0a] border-t border-[#c8924a]/[0.18] border-b border-b-[#c8924a]/[0.12]"
//     style={{ top: 68, boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//     onMouseEnter={showMenu}
//     onMouseLeave={hideMenu}
//   >
//     <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-70" />
//     <div className="max-w-[1400px] mx-auto px-16 py-9 flex gap-14 items-start">
//       {children}
//     </div>
//   </div>
// );

// const buildUrl = (item) => {
//   if (item.category === "Others") {
//     return `/collection?category=Others&sub=${encodeURIComponent(item.label)}`;
//   }
//   return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
// };

// const MegaColumn = ({ title, badge, items }) => (
//   <div className="ddl-mega-col min-w-[150px]">
//     {badge && <MegaBadge text={badge} />}
//     <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3.5">
//       {title}
//     </div>
//     <span className="ddl-col-rule block mb-4" />
//     <ul className="flex flex-col gap-3 list-none p-0 m-0">
//       {items.map((item, i) => (
//         <li key={i} className="ddl-mega-item">
//           <Link
//             to={buildUrl(item)}
//             className="
//               flex items-center gap-2
//               text-[12px] tracking-[0.06em] no-underline
//               text-[rgba(240,230,216,0.65)]
//               transition-[color,padding-left] duration-200
//               before:content-[''] before:inline-block before:w-3.5 before:h-px
//               before:bg-[#8a5e2d] before:flex-shrink-0
//               before:transition-[width,background] before:duration-200
//               hover:text-[#c8924a] hover:pl-1
//               hover:before:w-5 hover:before:bg-[#c8924a]
//             "
//           >
//             {item.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// /* ── MOBILE ACCORDION ── */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//   <div>
//     <button
//       className="
//         w-full flex items-center justify-between px-6 py-3.5
//         text-[11px] font-medium tracking-[0.25em] uppercase
//         text-[rgba(240,230,216,0.8)] font-['Montserrat',sans-serif]
//         bg-transparent border-none border-b border-b-[rgba(200,146,74,0.08)]
//         cursor-pointer transition-colors duration-200
//         hover:text-[#c8924a]
//       "
//       onClick={toggle}
//     >
//       {title} <Chevron open={open} />
//     </button>
//     <div
//       className="overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out"
//       style={{ maxHeight: open ? 700 : 0, opacity: open ? 1 : 0 }}
//     >
//       {Object.entries(sections).map(([sec, items], idx) => (
//         <div key={idx} className="px-10 py-3 border-b border-b-[rgba(200,146,74,0.05)]">
//           <h4 className="text-[8px] tracking-[0.32em] text-[#8a5e2d] uppercase font-semibold mb-2.5 font-['Montserrat',sans-serif]">
//             {sec}
//           </h4>
//           {items.map((item, i) => (
//             <Link
//               key={i}
//               onClick={closeSidebar}
//               to={buildUrl(item)}
//               className="block py-1.5 text-[11px] text-[rgba(240,230,216,0.55)] no-underline tracking-[0.06em] transition-colors duration-200 hover:text-[#c8924a]"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// /* ══════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════ */
// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileAccord, setMobileAccord] = useState(null);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const hideRef = useRef(null);
//   const profileRef = useRef(null);

//   const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   useEffect(() => {
//     const handleOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     if (profileOpen) document.addEventListener("mousedown", handleOutside);
//     return () => document.removeEventListener("mousedown", handleOutside);
//   }, [profileOpen]);

//   const logout = () => {
//     setProfileOpen(false);
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 280); };
//   const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

//   /* Corner bracket helper */
//   const corners = [
//     "top-2 left-2 border-t-[1.5px] border-l-[1.5px]",
//     "top-2 right-2 border-t-[1.5px] border-r-[1.5px]",
//     "bottom-2 left-2 border-b-[1.5px] border-l-[1.5px]",
//     "bottom-2 right-2 border-b-[1.5px] border-r-[1.5px]",
//   ];

//   return (
//     <>
//       <style>{ANIM_STYLES}</style>

//       <header
//         className="sticky top-0 bg-[#1a0f0a] border-b border-[#c8924a]/[0.18] font-['Montserrat',sans-serif]"
//         style={{ zIndex: 9998, overflow: "visible" }}
//       >
//         {/* Gold top bar */}
//         <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-60" />

//         <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-3 md:gap-6 h-[66px]">

//           {/* ── LOGO ── */}
//           <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0 min-w-0">
//             <div className="flex-shrink-0"><DiamondIcon /></div>
//             <div className="flex flex-col leading-none min-w-0">
//               <span className="font-['Montserrat',sans-serif] text-[clamp(10px,2vw,14px)] font-semibold tracking-[0.22em] text-[#f0e6d8] uppercase whitespace-nowrap">
//                 <span className="text-[#c8924a]">D DOLLY</span> LAMB
//               </span>
//               <span className="block h-px bg-gradient-to-r from-[#8a5e2d] to-transparent my-[3px]" />
//               <span className="text-[clamp(6px,1.5vw,8.5px)] tracking-[0.38em] text-[#8a5e2d] uppercase whitespace-nowrap">
//                 ARTISAN ATELIER
//               </span>
//             </div>
//           </Link>

//           {/* ── CENTER NAV (desktop) ── */}
//           <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) => `
//                   relative flex items-center gap-[5px] pb-1
//                   text-[11px] font-medium tracking-[0.18em] uppercase
//                   no-underline cursor-pointer transition-colors duration-[220ms]
//                   after:content-[''] after:absolute after:bottom-0 after:left-0
//                   after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                   hover:text-[#c8924a]
//                   ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0"}
//                 `}
//               >
//                 Home
//               </NavLink>
//             </li>

//             {/* MEN */}
//             <li className="relative" onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
//               <div
//                 className={`
//                   relative flex items-center gap-[5px] pb-1
//                   text-[11px] font-medium tracking-[0.18em] uppercase
//                   cursor-pointer transition-colors duration-[220ms]
//                   after:content-[''] after:absolute after:bottom-0 after:left-0
//                   after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                   ${activeMenu === "men" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//                 `}
//               >
//                 Men <Chevron open={activeMenu === "men"} />
//               </div>
//               {activeMenu === "men" && (
//                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                   <MegaColumn title="Tops" badge="MEN'S COLLECTION" items={[
//                     { label: "Biker Jacket", category: "Topwear", gender: "Men" },
//                     { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
//                     { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Men" },
//                     { label: "Cushion Cover", category: "Others", gender: "Men" },
//                     { label: "Aprons", category: "Others", gender: "Men" },
//                     { label: "Desk Mat", category: "Others", gender: "Men" },
//                     { label: "Chair Cover", category: "Others", gender: "Men" },
//                   ]} />
//                   {/* Featured image */}
//                   <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden rounded-[3px]">
//                     <img
//                       src={assets.men_nav} alt="Men's Collection"
//                       className="w-full object-cover block transition-transform duration-500"
//                       style={{ height: 250, filter: "brightness(0.7)" }}
//                       onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                       onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                     />
//                     {corners.map((c, i) => (
//                       <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                     ))}
//                     <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                       Men's Collection
//                     </div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {/* WOMEN */}
//             <li className="relative" onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
//               <div
//                 className={`
//                   relative flex items-center gap-[5px] pb-1
//                   text-[11px] font-medium tracking-[0.18em] uppercase
//                   cursor-pointer transition-colors duration-[220ms]
//                   after:content-[''] after:absolute after:bottom-0 after:left-0
//                   after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                   ${activeMenu === "women" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//                 `}
//               >
//                 Women <Chevron open={activeMenu === "women"} />
//               </div>
//               {activeMenu === "women" && (
//                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                   <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
//                     { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                     { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                     { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                     { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                     { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Bottoms" items={[
//                     { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                     { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                     { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Women" },
//                     { label: "Cushion Cover", category: "Others", gender: "Women" },
//                     { label: "Aprons", category: "Others", gender: "Women" },
//                     { label: "Desk Mat", category: "Others", gender: "Women" },
//                     { label: "Chair Cover", category: "Others", gender: "Women" },
//                   ]} />
//                   <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden rounded-[3px]">
//                     <img
//                       src={assets.women_nav} alt="Women's Collection"
//                       className="w-full object-cover block transition-transform duration-500"
//                       style={{ height: 250, filter: "brightness(0.7)" }}
//                       onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                       onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                     />
//                     {corners.map((c, i) => (
//                       <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                     ))}
//                     <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                       Women's Collection
//                     </div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {[
//               { to: "/collection", label: "Collection" },
//               { to: "/about", label: "About" },
//               { to: "/contact", label: "Contact" },
//             ].map(({ to, label }) => (
//               <li key={to}>
//                 <NavLink
//                   to={to}
//                   className={({ isActive }) => `
//                     relative flex items-center gap-[5px] pb-1
//                     text-[11px] font-medium tracking-[0.18em] uppercase
//                     no-underline cursor-pointer transition-colors duration-[220ms]
//                     after:content-[''] after:absolute after:bottom-0 after:left-0
//                     after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                     hover:text-[#c8924a]
//                     ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0"}
//                   `}
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* ── RIGHT ICONS ── */}
//           <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 overflow-visible">

//             {/* Search */}
//             <button
//               className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//               aria-label="Search"
//               onClick={() => { setShowSearch(true); navigate("/collection"); }}
//             >
//               <IconSearch />
//             </button>

//             {/* Account */}
//             <div ref={profileRef} className="relative">
//               <button
//                 className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                 aria-label="Account"
//                 onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}
//               >
//                 <IconUser />
//               </button>

//               {token && profileOpen && (
//                 <div
//                   className="absolute top-[calc(100%+12px)] right-0 bg-[#221208] border border-[rgba(200,146,74,0.25)] border-t-2 border-t-[#c8924a] min-w-[190px] z-[999999]"
//                   style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.8)", animation: "megaIn 0.18s ease both" }}
//                 >
//                   <div className="px-[18px] py-3 border-b border-b-[rgba(200,146,74,0.15)]">
//                     <div className="flex items-center gap-2.5">
//                       <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#c8924a] to-[#8a5e2d] flex items-center justify-center flex-shrink-0">
//                         <IconUser />
//                       </div>
//                       <span className="text-[9px] tracking-[0.18em] text-[#c8924a] uppercase font-['Montserrat',sans-serif]">
//                         My Account
//                       </span>
//                     </div>
//                   </div>
//                   {[
//                     { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
//                     { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
//                     { label: "Logout", action: logout },
//                   ].map(({ label, action }) => (
//                     <p
//                       key={label}
//                       onClick={action}
//                       className="
//                         block px-[18px] py-[11px]
//                         text-[11px] tracking-[0.12em] text-[#f0e6d8] uppercase
//                         cursor-pointer border-b border-b-[rgba(200,146,74,0.18)]
//                         last:border-b-0 font-['Montserrat',sans-serif]
//                         transition-[background,color,padding-left] duration-150
//                         hover:bg-[rgba(200,146,74,0.1)] hover:text-[#c8924a] hover:pl-6
//                       "
//                     >
//                       {label}
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Wishlist */}
//             <Link
//               to="/wishlist"
//               className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]"
//               aria-label="Wishlist"
//             >
//               <IconHeart />
//               {wishlist?.length > 0 && (
//                 <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>

//             {/* Cart */}
//             <Link
//               to="/cart"
//               className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]"
//               aria-label="Cart"
//             >
//               <IconBag />
//               <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                 {getCartCount()}
//               </span>
//             </Link>

//             {/* Hamburger — mobile only */}
//             <button
//               className="md:hidden bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//               aria-label="Menu"
//               onClick={() => setVisible(true)}
//             >
//               <IconMenu />
//             </button>
//           </div>
//         </div>

//         {/* ── MOBILE SIDEBAR OVERLAY ── */}
//         {visible && (
//           <div
//             onClick={() => setVisible(false)}
//             className="fixed inset-0 bg-black/60 z-[99998] backdrop-blur-sm"
//           />
//         )}

//         {/* ── MOBILE SIDEBAR ── */}
//         <div
//           className="fixed top-0 right-0 bottom-0 bg-[#120a05] z-[99999] overflow-x-hidden overflow-y-auto font-['Montserrat',sans-serif] border-l border-l-[rgba(200,146,74,0.18)] max-w-[100vw] transition-[width] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
//           style={{ width: visible ? "min(320px, 100vw)" : 0 }}
//         >
//           {/* Sidebar header */}
//           <div className="flex items-center justify-between px-6 py-4 border-b border-b-[rgba(200,146,74,0.18)]">
//             <button
//               className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase text-[#f0e6d8] font-['Montserrat',sans-serif] transition-colors duration-200 hover:text-[#c8924a]"
//               onClick={() => setVisible(false)}
//             >
//               <IconMenu /> Close
//             </button>
//             <DiamondIcon />
//           </div>
//           <div className="h-px bg-gradient-to-r from-transparent via-[#c8924a] to-transparent opacity-50" />

//           <NavLink
//             className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//             to="/"
//             onClick={() => setVisible(false)}
//           >
//             Home
//           </NavLink>

//           <MobileAccordion
//             title="Men"
//             open={mobileAccord === "men"}
//             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//             sections={{
//               TOPS: [
//                 { label: "Biker Jacket", category: "Topwear", gender: "Men" },
//                 { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
//                 { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
//               ],
//               OTHERS: [
//                 { label: "Pillow", category: "Others", gender: "Men" },
//                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                 { label: "Aprons", category: "Others", gender: "Men" },
//                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                 { label: "Chair Cover", category: "Others", gender: "Men" },
//               ],
//             }}
//             closeSidebar={() => setVisible(false)}
//           />

//           <MobileAccordion
//             title="Women"
//             open={mobileAccord === "women"}
//             toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
//             sections={{
//               TOPS: [
//                 { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                 { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                 { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                 { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                 { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//               ],
//               BOTTOMS: [
//                 { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                 { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                 { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//               ],
//               OTHERS: [
//                 { label: "Pillow", category: "Others", gender: "Women" },
//                 { label: "Cushion Cover", category: "Others", gender: "Women" },
//                 { label: "Aprons", category: "Others", gender: "Women" },
//                 { label: "Desk Mat", category: "Others", gender: "Women" },
//                 { label: "Chair Cover", category: "Others", gender: "Women" },
//               ],
//             }}
//             closeSidebar={() => setVisible(false)}
//           />

//           {[
//             { to: "/collection", label: "Collection" },
//             { to: "/about", label: "About" },
//             { to: "/contact", label: "Contact" },
//           ].map(({ to, label }) => (
//             <NavLink
//               key={to}
//               className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//               to={to}
//               onClick={() => setVisible(false)}
//             >
//               {label}
//             </NavLink>
//           ))}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;




// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /* ── Premium inline SVG icons ── */
// const IconSearch = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconUser = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconHeart = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//       stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
//   </svg>
// );
// const IconBag = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//     <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );
// const IconMenu = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// );

// const ANIM_STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500;600&display=swap');

//   @keyframes megaIn {
//     from { opacity: 0; transform: translateY(-10px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes colIn {
//     from { opacity: 0; transform: translateY(12px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes lineExpand {
//     from { width: 0; }
//     to   { width: 100%; }
//   }
//   @keyframes imgReveal {
//     from { opacity: 0; transform: scale(1.06); }
//     to   { opacity: 1; transform: scale(1); }
//   }
//   @keyframes itemSlide {
//     from { opacity: 0; transform: translateX(-8px); }
//     to   { opacity: 1; transform: translateX(0); }
//   }

//   .ddl-mega         { animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both; }
//   .ddl-mega-col     { animation: colIn 0.35s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
//   .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
//   .ddl-mega-col:nth-child(4) { animation-delay: 0.18s; }
//   .ddl-mega-col:nth-child(5) { animation-delay: 0.22s; }
//   .ddl-col-rule {
//     display: block; height: 1px; width: 0;
//     background: linear-gradient(to right, #8a5e2d, transparent);
//     animation: lineExpand 0.5s ease 0.1s both;
//   }
//   .ddl-mega-img-wrap { animation: imgReveal 0.45s ease 0.08s both; }
//   .ddl-mega-item     { animation: itemSlide 0.3s ease both; }
//   .ddl-mega-item:nth-child(1) { animation-delay: 0.10s; }
//   .ddl-mega-item:nth-child(2) { animation-delay: 0.15s; }
//   .ddl-mega-item:nth-child(3) { animation-delay: 0.20s; }
//   .ddl-mega-item:nth-child(4) { animation-delay: 0.25s; }
//   .ddl-mega-item:nth-child(5) { animation-delay: 0.30s; }
//   .ddl-mega-item:nth-child(6) { animation-delay: 0.35s; }
// `;

// const DiamondIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
//     <rect x="6" y="6" width="30" height="30" rx="1"
//       transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
//     <rect x="11" y="11" width="20" height="20" rx="0.5"
//       transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//     <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
//       fontSize="13" fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
//   </svg>
// );

// const MegaBadge = ({ text }) => (
//   <div className="flex items-center gap-2 mb-4 mt-1">
//     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//       <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
//         stroke="#c8924a" strokeWidth="1" fill="rgba(200,146,74,0.15)" strokeLinejoin="round" />
//     </svg>
//     <span className="text-[8px] tracking-[0.32em] text-[#8a5e2d] font-['Montserrat',sans-serif] font-semibold uppercase">
//       {text}
//     </span>
//   </div>
// );

// const Chevron = ({ open }) => (
//   <span className={`
//     inline-block w-1.5 h-1.5 flex-shrink-0
//     border-r-[1.5px] border-b-[1.5px] border-current
//     transition-transform duration-[250ms]
//     ${open ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-px"}
//   `} />
// );

// /* ── MEGA MENU WRAPPER ── */
// const MegaMenu = ({ children, showMenu, hideMenu, wide = false }) => (
//   <div
//     className="ddl-mega fixed left-0 right-0 bg-[#1a0f0a] border-t border-[#c8924a]/[0.18] border-b border-b-[#c8924a]/[0.12]"
//     style={{ top: 68, boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//     onMouseEnter={showMenu}
//     onMouseLeave={hideMenu}
//   >
//     <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-70" />
//     <div className={`${wide ? "max-w-[1500px]" : "max-w-[1400px]"} mx-auto px-10 py-8 flex gap-10 items-start`}>
//       {children}
//     </div>
//   </div>
// );

// const buildUrl = (item) => {
//   if (item.category === "Others" || item.directCategory) {
//     return `/collection?category=${encodeURIComponent(item.directCategory || "Others")}&sub=${encodeURIComponent(item.label)}`;
//   }
//   return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
// };

// const MegaColumn = ({ title, badge, items, compact = false }) => (
//   <div className={`ddl-mega-col ${compact ? "min-w-[130px]" : "min-w-[150px]"}`}>
//     {badge && <MegaBadge text={badge} />}
//     <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">
//       {title}
//     </div>
//     <span className="ddl-col-rule block mb-3.5" />
//     <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
//       {items.map((item, i) => (
//         <li key={i} className="ddl-mega-item">
//           <Link
//             to={buildUrl(item)}
//             className="
//               flex items-center gap-2
//               text-[11.5px] tracking-[0.04em] no-underline
//               text-[rgba(240,230,216,0.65)]
//               transition-[color,padding-left] duration-200
//               before:content-[''] before:inline-block before:w-3 before:h-px
//               before:bg-[#8a5e2d] before:flex-shrink-0
//               before:transition-[width,background] before:duration-200
//               hover:text-[#c8924a] hover:pl-1
//               hover:before:w-4 hover:before:bg-[#c8924a]
//             "
//           >
//             {item.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// /* ── Category pill for Collection mega menu ── */
// const CategoryLink = ({ to, label, count }) => (
//   <Link
//     to={to}
//     className="
//       ddl-mega-item flex items-center justify-between gap-3
//       px-3 py-2 rounded-[3px] no-underline
//       text-[11px] tracking-[0.06em]
//       text-[rgba(240,230,216,0.65)]
//       border border-[rgba(200,146,74,0.1)]
//       transition-all duration-200
//       hover:text-[#c8924a] hover:border-[rgba(200,146,74,0.35)] hover:bg-[rgba(200,146,74,0.05)]
//     "
//   >
//     <span>{label}</span>
//     {count !== undefined && (
//       <span className="text-[9px] text-[#5a3a1a] font-['Montserrat',sans-serif]">({count})</span>
//     )}
//   </Link>
// );

// /* ── MOBILE ACCORDION ── */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//   <div>
//     <button
//       className="
//         w-full flex items-center justify-between px-6 py-3.5
//         text-[11px] font-medium tracking-[0.25em] uppercase
//         text-[rgba(240,230,216,0.8)] font-['Montserrat',sans-serif]
//         bg-transparent border-none border-b border-b-[rgba(200,146,74,0.08)]
//         cursor-pointer transition-colors duration-200
//         hover:text-[#c8924a]
//       "
//       onClick={toggle}
//     >
//       {title} <Chevron open={open} />
//     </button>
//     <div
//       className="overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out"
//       style={{ maxHeight: open ? 900 : 0, opacity: open ? 1 : 0 }}
//     >
//       {Object.entries(sections).map(([sec, items], idx) => (
//         <div key={idx} className="px-10 py-3 border-b border-b-[rgba(200,146,74,0.05)]">
//           <h4 className="text-[8px] tracking-[0.32em] text-[#8a5e2d] uppercase font-semibold mb-2.5 font-['Montserrat',sans-serif]">
//             {sec}
//           </h4>
//           {items.map((item, i) => (
//             <Link
//               key={i}
//               onClick={closeSidebar}
//               to={buildUrl(item)}
//               className="block py-1.5 text-[11px] text-[rgba(240,230,216,0.55)] no-underline tracking-[0.06em] transition-colors duration-200 hover:text-[#c8924a]"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// /* ══════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════ */
// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileAccord, setMobileAccord] = useState(null);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const hideRef = useRef(null);
//   const profileRef = useRef(null);

//   const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   useEffect(() => {
//     const handleOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     if (profileOpen) document.addEventListener("mousedown", handleOutside);
//     return () => document.removeEventListener("mousedown", handleOutside);
//   }, [profileOpen]);

//   const logout = () => {
//     setProfileOpen(false);
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 280); };
//   const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

//   const corners = [
//     "top-2 left-2 border-t-[1.5px] border-l-[1.5px]",
//     "top-2 right-2 border-t-[1.5px] border-r-[1.5px]",
//     "bottom-2 left-2 border-b-[1.5px] border-l-[1.5px]",
//     "bottom-2 right-2 border-b-[1.5px] border-r-[1.5px]",
//   ];

//   const navLinkCls = (isActive) => `
//     relative flex items-center gap-[5px] pb-1
//     text-[11px] font-medium tracking-[0.18em] uppercase
//     no-underline cursor-pointer transition-colors duration-[220ms]
//     after:content-[''] after:absolute after:bottom-0 after:left-0
//     after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//     hover:text-[#c8924a]
//     ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0"}
//   `;

//   return (
//     <>
//       <style>{ANIM_STYLES}</style>

//       <header
//         className="sticky top-0 bg-[#1a0f0a] border-b border-[#c8924a]/[0.18] font-['Montserrat',sans-serif]"
//         style={{ zIndex: 9998, overflow: "visible" }}
//       >
//         <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-60" />

//         <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-3 md:gap-6 h-[66px]">

//           {/* ── LOGO ── */}
//           <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0 min-w-0">
//             <div className="flex-shrink-0"><DiamondIcon /></div>
//             <div className="flex flex-col leading-none min-w-0">
//               <span className="font-['Montserrat',sans-serif] text-[clamp(10px,2vw,14px)] font-semibold tracking-[0.22em] text-[#f0e6d8] uppercase whitespace-nowrap">
//                 <span className="text-[#c8924a]">D DOLLY</span> LAMB
//               </span>
//               <span className="block h-px bg-gradient-to-r from-[#8a5e2d] to-transparent my-[3px]" />
//               <span className="text-[clamp(6px,1.5vw,8.5px)] tracking-[0.38em] text-[#8a5e2d] uppercase whitespace-nowrap">
//                 ARTISAN ATELIER
//               </span>
//             </div>
//           </Link>

//           {/* ── CENTER NAV (desktop) ── */}
//           <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
//             <li>
//               <NavLink to="/" className={({ isActive }) => navLinkCls(isActive)}>Home</NavLink>
//             </li>

//             {/* ── MEN ── */}
//             <li className="relative" onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
//               <div className={`
//                 relative flex items-center gap-[5px] pb-1
//                 text-[11px] font-medium tracking-[0.18em] uppercase
//                 cursor-pointer transition-colors duration-[220ms]
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                 ${activeMenu === "men" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//               `}>
//                 Men <Chevron open={activeMenu === "men"} />
//               </div>
//               {activeMenu === "men" && (
//                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                   <MegaColumn title="Jackets" badge="MEN'S COLLECTION" items={[
//                     { label: "Jackets", gender: "Men" },
//                     { label: "Bomber Biker Jacket", gender: "Men" },
//                     { label: "Moto Biker Jacket", gender: "Men" },
//                     { label: "Racing Coat", gender: "Men" },
//                     { label: "Leather Coats", gender: "Men" },
//                     { label: "Men Winter Wear", gender: "Men" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Home & Lifestyle" items={[
//                     { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                     { label: "Apron", directCategory: "Men Leather Apron" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Men" },
//                     { label: "Cushion Cover", category: "Others", gender: "Men" },
//                     { label: "Aprons", category: "Others", gender: "Men" },
//                     { label: "Desk Mat", category: "Others", gender: "Men" },
//                     { label: "Chair Cover", category: "Others", gender: "Men" },
//                   ]} />
//                   <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[180px] relative overflow-hidden rounded-[3px]">
//                     <img src={assets.men_nav} alt="Men's Collection"
//                       className="w-full object-cover block transition-transform duration-500"
//                       style={{ height: 240, filter: "brightness(0.7)" }}
//                       onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                       onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                     />
//                     {corners.map((c, i) => (
//                       <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                     ))}
//                     <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                       Men's Collection
//                     </div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {/* ── WOMEN ── */}
//             <li className="relative" onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
//               <div className={`
//                 relative flex items-center gap-[5px] pb-1
//                 text-[11px] font-medium tracking-[0.18em] uppercase
//                 cursor-pointer transition-colors duration-[220ms]
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                 ${activeMenu === "women" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//               `}>
//                 Women <Chevron open={activeMenu === "women"} />
//               </div>
//               {activeMenu === "women" && (
//                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                   <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
//                     { label: "Jackets", gender: "Women" },
//                     { label: "Bomber Biker Jacket", gender: "Women" },
//                     { label: "Moto Biker Jacket", gender: "Women" },
//                     { label: "Racing Coat", gender: "Women" },
//                     { label: "Women Winter Wear", gender: "Women" },
//                     { label: "Women Night Dress", gender: "Women" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Bottoms" items={[
//                     { label: "Leather Pencil Skirt", gender: "Women" },
//                     { label: "Leather Full Skirt", gender: "Women" },
//                     { label: "Slim Bodycon Skirt", gender: "Women" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Home & Lifestyle" items={[
//                     { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Women" },
//                     { label: "Cushion Cover", category: "Others", gender: "Women" },
//                     { label: "Aprons", category: "Others", gender: "Women" },
//                     { label: "Desk Mat", category: "Others", gender: "Women" },
//                     { label: "Chair Cover", category: "Others", gender: "Women" },
//                   ]} />
//                   <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[180px] relative overflow-hidden rounded-[3px]">
//                     <img src={assets.women_nav} alt="Women's Collection"
//                       className="w-full object-cover block transition-transform duration-500"
//                       style={{ height: 240, filter: "brightness(0.7)" }}
//                       onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                       onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                     />
//                     {corners.map((c, i) => (
//                       <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                     ))}
//                     <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                       Women's Collection
//                     </div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {/* ── COLLECTION (combined mega menu) ── */}
//             <li className="relative" onMouseEnter={() => showMenu("collection")} onMouseLeave={hideMenu}>
//               <div className={`
//                 relative flex items-center gap-[5px] pb-1
//                 text-[11px] font-medium tracking-[0.18em] uppercase
//                 cursor-pointer transition-colors duration-[220ms]
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                 ${activeMenu === "collection" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//               `}>
//                 Collection <Chevron open={activeMenu === "collection"} />
//               </div>
//               {activeMenu === "collection" && (
//                 <MegaMenu showMenu={() => showMenu("collection")} hideMenu={hideMenu} wide>
//                   {/* Men Column */}
//                   <MegaColumn title="Men" badge="MEN'S" compact items={[
//                     { label: "Jackets", gender: "Men" },
//                     { label: "Bomber Biker Jacket", gender: "Men" },
//                     { label: "Moto Biker Jacket", gender: "Men" },
//                     { label: "Racing Coat", gender: "Men" },
//                     { label: "Leather Coats", gender: "Men" },
//                     { label: "Men Winter Wear", gender: "Men" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   {/* Women Column */}
//                   <MegaColumn title="Women" badge="WOMEN'S" compact items={[
//                     { label: "Jackets", gender: "Women" },
//                     { label: "Bomber Biker Jacket", gender: "Women" },
//                     { label: "Moto Biker Jacket", gender: "Women" },
//                     { label: "Racing Coat", gender: "Women" },
//                     { label: "Women Winter Wear", gender: "Women" },
//                     { label: "Women Night Dress", gender: "Women" },
//                     { label: "Leather Pencil Skirt", gender: "Women" },
//                     { label: "Leather Full Skirt", gender: "Women" },
//                     { label: "Slim Bodycon Skirt", gender: "Women" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   {/* Leather Pillow Cover */}
//                   <MegaColumn title="Leather Pillows" compact items={[
//                     { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                     { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//                   ]} />
//                   <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                   {/* Home & Lifestyle */}
//                   <div className="ddl-mega-col min-w-[130px] flex flex-col gap-5">
//                     <div>
//                       <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">Sofa & Desk</div>
//                       <span className="ddl-col-rule block mb-3.5" />
//                       <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
//                         {[
//                           { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                           { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                         ].map((item, i) => (
//                           <li key={i} className="ddl-mega-item">
//                             <Link to={buildUrl(item)} className="flex items-center gap-2 text-[11.5px] tracking-[0.04em] no-underline text-[rgba(240,230,216,0.65)] transition-[color,padding-left] duration-200 before:content-[''] before:inline-block before:w-3 before:h-px before:bg-[#8a5e2d] before:flex-shrink-0 before:transition-[width,background] before:duration-200 hover:text-[#c8924a] hover:pl-1 hover:before:w-4 hover:before:bg-[#c8924a]">
//                               {item.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">Apron</div>
//                       <span className="ddl-col-rule block mb-3.5" />
//                       <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
//                         {[
//                           { label: "Apron", directCategory: "Men Leather Apron" },
//                         ].map((item, i) => (
//                           <li key={i} className="ddl-mega-item">
//                             <Link to={buildUrl(item)} className="flex items-center gap-2 text-[11.5px] tracking-[0.04em] no-underline text-[rgba(240,230,216,0.65)] transition-[color,padding-left] duration-200 before:content-[''] before:inline-block before:w-3 before:h-px before:bg-[#8a5e2d] before:flex-shrink-0 before:transition-[width,background] before:duration-200 hover:text-[#c8924a] hover:pl-1 hover:before:w-4 hover:before:bg-[#c8924a]">
//                               {item.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     {/* View All CTA */}
//                     <Link
//                       to="/collection"
//                       className="mt-auto flex items-center gap-2 px-3 py-2.5 no-underline border border-[rgba(200,146,74,0.35)] text-[#c8924a] text-[10px] tracking-[0.2em] uppercase font-['Montserrat',sans-serif] transition-all duration-200 hover:bg-[rgba(200,146,74,0.1)] hover:border-[#c8924a]"
//                     >
//                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                       View All
//                     </Link>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {[
//               { to: "/about", label: "About" },
//               { to: "/contact", label: "Contact" },
//             ].map(({ to, label }) => (
//               <li key={to}>
//                 <NavLink to={to} className={({ isActive }) => navLinkCls(isActive)}>{label}</NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* ── RIGHT ICONS ── */}
//           <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 overflow-visible">
//             <button
//               className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//               aria-label="Search"
//               onClick={() => { setShowSearch(true); navigate("/collection"); }}
//             >
//               <IconSearch />
//             </button>

//             <div ref={profileRef} className="relative">
//               <button
//                 className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                 aria-label="Account"
//                 onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}
//               >
//                 <IconUser />
//               </button>
//               {token && profileOpen && (
//                 <div
//                   className="absolute top-[calc(100%+12px)] right-0 bg-[#221208] border border-[rgba(200,146,74,0.25)] border-t-2 border-t-[#c8924a] min-w-[190px] z-[999999]"
//                   style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.8)", animation: "megaIn 0.18s ease both" }}
//                 >
//                   <div className="px-[18px] py-3 border-b border-b-[rgba(200,146,74,0.15)]">
//                     <div className="flex items-center gap-2.5">
//                       <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#c8924a] to-[#8a5e2d] flex items-center justify-center flex-shrink-0">
//                         <IconUser />
//                       </div>
//                       <span className="text-[9px] tracking-[0.18em] text-[#c8924a] uppercase font-['Montserrat',sans-serif]">My Account</span>
//                     </div>
//                   </div>
//                   {[
//                     { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
//                     { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
//                     { label: "Logout", action: logout },
//                   ].map(({ label, action }) => (
//                     <p
//                       key={label}
//                       onClick={action}
//                       className="block px-[18px] py-[11px] text-[11px] tracking-[0.12em] text-[#f0e6d8] uppercase cursor-pointer border-b border-b-[rgba(200,146,74,0.18)] last:border-b-0 font-['Montserrat',sans-serif] transition-[background,color,padding-left] duration-150 hover:bg-[rgba(200,146,74,0.1)] hover:text-[#c8924a] hover:pl-6"
//                     >
//                       {label}
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link to="/wishlist" className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]" aria-label="Wishlist">
//               <IconHeart />
//               {wishlist?.length > 0 && (
//                 <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>

//             <Link to="/cart" className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]" aria-label="Cart">
//               <IconBag />
//               <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                 {getCartCount()}
//               </span>
//             </Link>

//             <button
//               className="md:hidden bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//               aria-label="Menu"
//               onClick={() => setVisible(true)}
//             >
//               <IconMenu />
//             </button>
//           </div>
//         </div>

//         {visible && (
//           <div onClick={() => setVisible(false)} className="fixed inset-0 bg-black/60 z-[99998] backdrop-blur-sm" />
//         )}

//         {/* ── MOBILE SIDEBAR ── */}
//         <div
//           className="fixed top-0 right-0 bottom-0 bg-[#120a05] z-[99999] overflow-x-hidden overflow-y-auto font-['Montserrat',sans-serif] border-l border-l-[rgba(200,146,74,0.18)] max-w-[100vw] transition-[width] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
//           style={{ width: visible ? "min(320px, 100vw)" : 0 }}
//         >
//           <div className="flex items-center justify-between px-6 py-4 border-b border-b-[rgba(200,146,74,0.18)]">
//             <button
//               className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase text-[#f0e6d8] font-['Montserrat',sans-serif] transition-colors duration-200 hover:text-[#c8924a]"
//               onClick={() => setVisible(false)}
//             >
//               <IconMenu /> Close
//             </button>
//             <DiamondIcon />
//           </div>
//           <div className="h-px bg-gradient-to-r from-transparent via-[#c8924a] to-transparent opacity-50" />

//           <NavLink
//             className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//             to="/"
//             onClick={() => setVisible(false)}
//           >
//             Home
//           </NavLink>

//           {/* Men mobile */}
//           <MobileAccordion
//             title="Men"
//             open={mobileAccord === "men"}
//             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//             sections={{
//               JACKETS: [
//                 { label: "Jackets", gender: "Men" },
//                 { label: "Bomber Biker Jacket", gender: "Men" },
//                 { label: "Moto Biker Jacket", gender: "Men" },
//                 { label: "Racing Coat", gender: "Men" },
//                 { label: "Leather Coats", gender: "Men" },
//                 { label: "Men Winter Wear", gender: "Men" },
//               ],
//               "HOME & LIFESTYLE": [
//                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                 { label: "Apron", directCategory: "Men Leather Apron" },
//               ],
//               OTHERS: [
//                 { label: "Pillow", category: "Others", gender: "Men" },
//                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                 { label: "Aprons", category: "Others", gender: "Men" },
//                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                 { label: "Chair Cover", category: "Others", gender: "Men" },
//               ],
//             }}
//             closeSidebar={() => setVisible(false)}
//           />

//           {/* Women mobile */}
//           <MobileAccordion
//             title="Women"
//             open={mobileAccord === "women"}
//             toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
//             sections={{
//               TOPS: [
//                 { label: "Jackets", gender: "Women" },
//                 { label: "Bomber Biker Jacket", gender: "Women" },
//                 { label: "Moto Biker Jacket", gender: "Women" },
//                 { label: "Racing Coat", gender: "Women" },
//                 { label: "Women Winter Wear", gender: "Women" },
//                 { label: "Women Night Dress", gender: "Women" },
//               ],
//               BOTTOMS: [
//                 { label: "Leather Pencil Skirt", gender: "Women" },
//                 { label: "Leather Full Skirt", gender: "Women" },
//                 { label: "Slim Bodycon Skirt", gender: "Women" },
//               ],
//               "HOME & LIFESTYLE": [
//                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//               ],
//               OTHERS: [
//                 { label: "Pillow", category: "Others", gender: "Women" },
//                 { label: "Cushion Cover", category: "Others", gender: "Women" },
//                 { label: "Aprons", category: "Others", gender: "Women" },
//                 { label: "Desk Mat", category: "Others", gender: "Women" },
//                 { label: "Chair Cover", category: "Others", gender: "Women" },
//               ],
//             }}
//             closeSidebar={() => setVisible(false)}
//           />

//           {/* Collection mobile */}
//           <MobileAccordion
//             title="Collection"
//             open={mobileAccord === "collection"}
//             toggle={() => setMobileAccord(mobileAccord === "collection" ? null : "collection")}
//             sections={{
//               "LEATHER PILLOWS": [
//                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                 { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//               ],
//               "SOFA & DESK": [
//                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                 { label: "Apron", directCategory: "Men Leather Apron" },
//               ],
//               OTHERS: [
//                 { label: "Pillow", category: "Others", gender: "Men" },
//                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                 { label: "Aprons", category: "Others", gender: "Men" },
//                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                 { label: "Chair Cover", category: "Others", gender: "Men" },
//               ],
//             }}
//             closeSidebar={() => setVisible(false)}
//           />

//           {[
//             { to: "/about", label: "About" },
//             { to: "/contact", label: "Contact" },
//           ].map(({ to, label }) => (
//             <NavLink
//               key={to}
//               className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//               to={to}
//               onClick={() => setVisible(false)}
//             >
//               {label}
//             </NavLink>
//           ))}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;



// start 

import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

/* ── Premium inline SVG icons ── */
const IconSearch = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconUser = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconHeart = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
  </svg>
);
const IconBag = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ANIM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500;600&display=swap');

  @keyframes megaIn {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes colIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes lineExpand {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes imgReveal {
    from { opacity: 0; transform: scale(1.06); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes itemSlide {
    from { opacity: 0; transform: translateX(-8px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .ddl-mega         { animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both; }
  .ddl-mega-col     { animation: colIn 0.35s ease both; }
  .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
  .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
  .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
  .ddl-mega-col:nth-child(4) { animation-delay: 0.18s; }
  .ddl-mega-col:nth-child(5) { animation-delay: 0.22s; }
  .ddl-col-rule {
    display: block; height: 1px; width: 0;
    background: linear-gradient(to right, #8a5e2d, transparent);
    animation: lineExpand 0.5s ease 0.1s both;
  }
  .ddl-mega-img-wrap { animation: imgReveal 0.45s ease 0.08s both; }
  .ddl-mega-item     { animation: itemSlide 0.3s ease both; }
  .ddl-mega-item:nth-child(1) { animation-delay: 0.10s; }
  .ddl-mega-item:nth-child(2) { animation-delay: 0.15s; }
  .ddl-mega-item:nth-child(3) { animation-delay: 0.20s; }
  .ddl-mega-item:nth-child(4) { animation-delay: 0.25s; }
  .ddl-mega-item:nth-child(5) { animation-delay: 0.30s; }
  .ddl-mega-item:nth-child(6) { animation-delay: 0.35s; }
`;

const DiamondIcon = () => (
  <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
    <rect x="6" y="6" width="30" height="30" rx="1"
      transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
    <rect x="11" y="11" width="20" height="20" rx="0.5"
      transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
    <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
      fontSize="13" fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
  </svg>
);

const MegaBadge = ({ text }) => (
  <div className="flex items-center gap-2 mb-4 mt-1">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
        stroke="#c8924a" strokeWidth="1" fill="rgba(200,146,74,0.15)" strokeLinejoin="round" />
    </svg>
    <span className="text-[8px] tracking-[0.32em] text-[#8a5e2d] font-['Montserrat',sans-serif] font-semibold uppercase">
      {text}
    </span>
  </div>
);

const Chevron = ({ open }) => (
  <span className={`
    inline-block w-1.5 h-1.5 flex-shrink-0
    border-r-[1.5px] border-b-[1.5px] border-current
    transition-transform duration-[250ms]
    ${open ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-px"}
  `} />
);

/* ── MEGA MENU WRAPPER ── */
const MegaMenu = ({ children, showMenu, hideMenu, wide = false }) => (
  <div
    className="ddl-mega fixed left-0 right-0 bg-[#1a0f0a] border-t border-[#c8924a]/[0.18] border-b border-b-[#c8924a]/[0.12]"
    style={{ top: 68, boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
    onMouseEnter={showMenu}
    onMouseLeave={hideMenu}
  >
    <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-70" />
    <div className={`${wide ? "max-w-[1500px]" : "max-w-[1400px]"} mx-auto px-10 py-8 flex gap-10 items-start`}>
      {children}
    </div>
  </div>
);

const buildUrl = (item) => {
  if (item.category === "Others" || item.directCategory) {
    return `/collection?category=${encodeURIComponent(item.directCategory || "Others")}&sub=${encodeURIComponent(item.label)}`;
  }
  return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
};

const MegaColumn = ({ title, badge, items, compact = false }) => (
  <div className={`ddl-mega-col ${compact ? "min-w-[130px]" : "min-w-[150px]"}`}>
    {badge && <MegaBadge text={badge} />}
    <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">
      {title}
    </div>
    <span className="ddl-col-rule block mb-3.5" />
    <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
      {items.map((item, i) => (
        <li key={i} className="ddl-mega-item">
          <Link
            to={buildUrl(item)}
            className="
              flex items-center gap-2
              text-[11.5px] tracking-[0.04em] no-underline
              text-[rgba(240,230,216,0.65)]
              transition-[color,padding-left] duration-200
              before:content-[''] before:inline-block before:w-3 before:h-px
              before:bg-[#8a5e2d] before:flex-shrink-0
              before:transition-[width,background] before:duration-200
              hover:text-[#c8924a] hover:pl-1
              hover:before:w-4 hover:before:bg-[#c8924a]
            "
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Category pill for Collection mega menu ── */
const CategoryLink = ({ to, label, count }) => (
  <Link
    to={to}
    className="
      ddl-mega-item flex items-center justify-between gap-3
      px-3 py-2 rounded-[3px] no-underline
      text-[11px] tracking-[0.06em]
      text-[rgba(240,230,216,0.65)]
      border border-[rgba(200,146,74,0.1)]
      transition-all duration-200
      hover:text-[#c8924a] hover:border-[rgba(200,146,74,0.35)] hover:bg-[rgba(200,146,74,0.05)]
    "
  >
    <span>{label}</span>
    {count !== undefined && (
      <span className="text-[9px] text-[#5a3a1a] font-['Montserrat',sans-serif]">({count})</span>
    )}
  </Link>
);

/* ── MOBILE ACCORDION ── */
const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
  <div>
    <button
      className="
        w-full flex items-center justify-between px-6 py-3.5
        text-[11px] font-medium tracking-[0.25em] uppercase
        text-[rgba(240,230,216,0.8)] font-['Montserrat',sans-serif]
        bg-transparent border-none border-b border-b-[rgba(200,146,74,0.08)]
        cursor-pointer transition-colors duration-200
        hover:text-[#c8924a]
      "
      onClick={toggle}
    >
      {title} <Chevron open={open} />
    </button>
    <div
      className="overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out"
      style={{ maxHeight: open ? 900 : 0, opacity: open ? 1 : 0 }}
    >
      {Object.entries(sections).map(([sec, items], idx) => (
        <div key={idx} className="px-10 py-3 border-b border-b-[rgba(200,146,74,0.05)]">
          <h4 className="text-[8px] tracking-[0.32em] text-[#8a5e2d] uppercase font-semibold mb-2.5 font-['Montserrat',sans-serif]">
            {sec}
          </h4>
          {items.map((item, i) => (
            <Link
              key={i}
              onClick={closeSidebar}
              to={buildUrl(item)}
              className="block py-1.5 text-[11px] text-[rgba(240,230,216,0.55)] no-underline tracking-[0.06em] transition-colors duration-200 hover:text-[#c8924a]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileAccord, setMobileAccord] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const hideRef = useRef(null);
  const profileRef = useRef(null);

  const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  useEffect(() => {
    const handleOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    if (profileOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [profileOpen]);

  const logout = () => {
    setProfileOpen(false);
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 400); };
  const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

  const corners = [
    "top-2 left-2 border-t-[1.5px] border-l-[1.5px]",
    "top-2 right-2 border-t-[1.5px] border-r-[1.5px]",
    "bottom-2 left-2 border-b-[1.5px] border-l-[1.5px]",
    "bottom-2 right-2 border-b-[1.5px] border-r-[1.5px]",
  ];

  const navLinkCls = (isActive) => `
    relative flex items-center gap-[5px] pb-1
    text-[11px] font-medium tracking-[0.18em] uppercase
    no-underline cursor-pointer transition-colors duration-[220ms]
    after:content-[''] after:absolute after:bottom-0 after:left-0
    after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
    hover:text-[#c8924a]
    ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0"}
  `;

  return (
    <>
      <style>{ANIM_STYLES}</style>

      <header
        className="sticky top-0 bg-[#1a0f0a] border-b border-[#c8924a]/[0.18] font-['Montserrat',sans-serif]"
        style={{ zIndex: 9998, overflow: "visible" }}
      >
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-60" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-3 md:gap-6 h-[66px]">

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0 min-w-0">
            <div className="flex-shrink-0"><DiamondIcon /></div>
            <div className="flex flex-col leading-none min-w-0">
              <span className="font-['Montserrat',sans-serif] text-[clamp(10px,2vw,14px)] font-semibold tracking-[0.22em] text-[#f0e6d8] uppercase whitespace-nowrap">
                <span className="text-[#c8924a]">D DOLLY</span> LAMB
              </span>
              <span className="block h-px bg-gradient-to-r from-[#8a5e2d] to-transparent my-[3px]" />
              <span className="text-[clamp(6px,1.5vw,8.5px)] tracking-[0.38em] text-[#8a5e2d] uppercase whitespace-nowrap">
                ARTISAN ATELIER
              </span>
            </div>
          </Link>

          {/* ── CENTER NAV (desktop) ── */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            <li>
              <NavLink to="/" className={({ isActive }) => navLinkCls(isActive)}>Home</NavLink>
            </li>

            {/* ── MEN ── */}
            <li className="relative" onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
              <div className={`
                relative flex items-center gap-[5px] pb-1
                text-[11px] font-medium tracking-[0.18em] uppercase
                cursor-pointer transition-colors duration-[220ms]
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
                ${activeMenu === "men" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
              `}>
                Men <Chevron open={activeMenu === "men"} />
              </div>
              {activeMenu === "men" && (
                <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
                  <MegaColumn title="Jackets" badge="MEN'S COLLECTION" items={[
                    { label: "Jackets", gender: "Men" },
                    { label: "Bomber Biker Jacket", gender: "Men" },
                    { label: "Moto Biker Jacket", gender: "Men" },
                    { label: "Racing Coat", gender: "Men" },
                    { label: "Leather Coats", gender: "Men" },
                    { label: "Men Winter Wear", gender: "Men" },
                  ]} />
                  <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
                  <MegaColumn title="Others" items={[
                    { label: "Pillow", category: "Others", gender: "Men" },
                    { label: "Cushion Cover", category: "Others", gender: "Men" },
                    { label: "Aprons", category: "Others", gender: "Men" },
                    { label: "Desk Mat", category: "Others", gender: "Men" },
                    { label: "Chair Cover", category: "Others", gender: "Men" },
                  ]} />
                  <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[180px] relative overflow-hidden rounded-[3px]">
                    <img src={assets.men_nav} alt="Men's Collection"
                      className="w-full object-cover block transition-transform duration-500"
                      style={{ height: 240, filter: "brightness(0.7)" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"}
                    />
                    {corners.map((c, i) => (
                      <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
                      Men's Collection
                    </div>
                  </div>
                </MegaMenu>
              )}
            </li>

            {/* ── WOMEN ── */}
            <li className="relative" onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
              <div className={`
                relative flex items-center gap-[5px] pb-1
                text-[11px] font-medium tracking-[0.18em] uppercase
                cursor-pointer transition-colors duration-[220ms]
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
                ${activeMenu === "women" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
              `}>
                Women <Chevron open={activeMenu === "women"} />
              </div>
              {activeMenu === "women" && (
                <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
                  <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
                    { label: "Jackets", gender: "Women" },
                    { label: "Bomber Biker Jacket", gender: "Women" },
                    { label: "Moto Biker Jacket", gender: "Women" },
                    { label: "Racing Coat", gender: "Women" },
                    { label: "Women Winter Wear", gender: "Women" },
                    { label: "Women Night Dress", gender: "Women" },
                  ]} />
                  <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
                  <MegaColumn title="Bottoms" items={[
                    { label: "Leather Pencil Skirt", gender: "Women" },
                    { label: "Leather Full Skirt", gender: "Women" },
                    { label: "Slim Bodycon Skirt", gender: "Women" },
                  ]} />
                  <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
                  <MegaColumn title="Others" items={[
                    { label: "Pillow", category: "Others", gender: "Women" },
                    { label: "Cushion Cover", category: "Others", gender: "Women" },
                    { label: "Aprons", category: "Others", gender: "Women" },
                    { label: "Desk Mat", category: "Others", gender: "Women" },
                    { label: "Chair Cover", category: "Others", gender: "Women" },
                  ]} />
                  <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[180px] relative overflow-hidden rounded-[3px]">
                    <img src={assets.women_nav} alt="Women's Collection"
                      className="w-full object-cover block transition-transform duration-500"
                      style={{ height: 240, filter: "brightness(0.7)" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"}
                    />
                    {corners.map((c, i) => (
                      <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
                      Women's Collection
                    </div>
                  </div>
                </MegaMenu>
              )}
            </li>

            {/* ── COLLECTION (combined mega menu) ── */}
            <li className="relative" onMouseEnter={() => showMenu("collection")} onMouseLeave={hideMenu}>
              <div className={`
                relative flex items-center gap-[5px] pb-1
                text-[11px] font-medium tracking-[0.18em] uppercase
                cursor-pointer transition-colors duration-[220ms]
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
                ${activeMenu === "collection" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
              `}>
                Collection <Chevron open={activeMenu === "collection"} />
              </div>
              {activeMenu === "collection" && (
                <MegaMenu showMenu={() => showMenu("collection")} hideMenu={hideMenu} wide>
                  {/* Men Column */}
                  <MegaColumn title="Men" badge="MEN'S" compact items={[
                    { label: "Jackets", gender: "Men" },
                    { label: "Bomber Biker Jacket", gender: "Men" },
                    { label: "Moto Biker Jacket", gender: "Men" },
                    { label: "Racing Coat", gender: "Men" },
                    { label: "Leather Coats", gender: "Men" },
                    { label: "Men Winter Wear", gender: "Men" },
                  ]} />
                  <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
                  {/* Women Column */}
                  <MegaColumn title="Women" badge="WOMEN'S" compact items={[
                    { label: "Jackets", gender: "Women" },
                    { label: "Bomber Biker Jacket", gender: "Women" },
                    { label: "Moto Biker Jacket", gender: "Women" },
                    { label: "Racing Coat", gender: "Women" },
                    { label: "Women Winter Wear", gender: "Women" },
                    { label: "Women Night Dress", gender: "Women" },
                    { label: "Leather Pencil Skirt", gender: "Women" },
                    { label: "Leather Full Skirt", gender: "Women" },
                    { label: "Slim Bodycon Skirt", gender: "Women" },
                  ]} />
                  <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
                  {/* Leather Pillow Cover */}
                  <MegaColumn title="Leather Pillows" compact items={[
                    { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
                    { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
                    { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
                    { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
                    { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
                  ]} />
                  <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
                  {/* Sofa, Desk {/* Home & Lifestyle Apron */}
                  <div className="ddl-mega-col min-w-[130px] flex flex-col gap-5">
                    <div>
                      <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">Sofa & Desk</div>
                      <span className="ddl-col-rule block mb-3.5" />
                      <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                        {[
                          { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
                          { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
                        ].map((item, i) => (
                          <li key={i} className="ddl-mega-item">
                            <Link to={buildUrl(item)} className="flex items-center gap-2 text-[11.5px] tracking-[0.04em] no-underline text-[rgba(240,230,216,0.65)] transition-[color,padding-left] duration-200 before:content-[''] before:inline-block before:w-3 before:h-px before:bg-[#8a5e2d] before:flex-shrink-0 before:transition-[width,background] before:duration-200 hover:text-[#c8924a] hover:pl-1 hover:before:w-4 hover:before:bg-[#c8924a]">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">Apron</div>
                      <span className="ddl-col-rule block mb-3.5" />
                      <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                        {[
                          { label: "Apron", directCategory: "Men Leather Apron" },
                        ].map((item, i) => (
                          <li key={i} className="ddl-mega-item">
                            <Link to={buildUrl(item)} className="flex items-center gap-2 text-[11.5px] tracking-[0.04em] no-underline text-[rgba(240,230,216,0.65)] transition-[color,padding-left] duration-200 before:content-[''] before:inline-block before:w-3 before:h-px before:bg-[#8a5e2d] before:flex-shrink-0 before:transition-[width,background] before:duration-200 hover:text-[#c8924a] hover:pl-1 hover:before:w-4 hover:before:bg-[#c8924a]">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* View All CTA */}
                    <Link
                      to="/collection"
                      onMouseDown={e => e.preventDefault()}
                      onClick={() => setActiveMenu(null)}
                      className="mt-auto flex items-center gap-2 px-3 py-2.5 no-underline border border-[rgba(200,146,74,0.35)] text-[#c8924a] text-[10px] tracking-[0.2em] uppercase font-['Montserrat',sans-serif] transition-all duration-200 hover:bg-[rgba(200,146,74,0.1)] hover:border-[#c8924a]"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      View All
                    </Link>
                  </div>
                </MegaMenu>
              )}
            </li>

            {[
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => navLinkCls(isActive)}>{label}</NavLink>
              </li>
            ))}
          </ul>

          {/* ── RIGHT ICONS ── */}
          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 overflow-visible">
            <button
              className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
              aria-label="Search"
              onClick={() => { setShowSearch(true); navigate("/collection"); }}
            >
              <IconSearch />
            </button>

            <div ref={profileRef} className="relative">
              <button
                className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
                aria-label="Account"
                onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}
              >
                <IconUser />
              </button>
              {token && profileOpen && (
                <div
                  className="absolute top-[calc(100%+12px)] right-0 bg-[#221208] border border-[rgba(200,146,74,0.25)] border-t-2 border-t-[#c8924a] min-w-[190px] z-[999999]"
                  style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.8)", animation: "megaIn 0.18s ease both" }}
                >
                  <div className="px-[18px] py-3 border-b border-b-[rgba(200,146,74,0.15)]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#c8924a] to-[#8a5e2d] flex items-center justify-center flex-shrink-0">
                        <IconUser />
                      </div>
                      <span className="text-[9px] tracking-[0.18em] text-[#c8924a] uppercase font-['Montserrat',sans-serif]">My Account</span>
                    </div>
                  </div>
                  {[
                    { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
                    { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
                    { label: "Logout", action: logout },
                  ].map(({ label, action }) => (
                    <p
                      key={label}
                      onClick={action}
                      className="block px-[18px] py-[11px] text-[11px] tracking-[0.12em] text-[#f0e6d8] uppercase cursor-pointer border-b border-b-[rgba(200,146,74,0.18)] last:border-b-0 font-['Montserrat',sans-serif] transition-[background,color,padding-left] duration-150 hover:bg-[rgba(200,146,74,0.1)] hover:text-[#c8924a] hover:pl-6"
                    >
                      {label}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <Link to="/wishlist" className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]" aria-label="Wishlist">
              <IconHeart />
              {wishlist?.length > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]" aria-label="Cart">
              <IconBag />
              <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
                {getCartCount()}
              </span>
            </Link>

            <button
              className="md:hidden bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
              aria-label="Menu"
              onClick={() => setVisible(true)}
            >
              <IconMenu />
            </button>
          </div>
        </div>

        {visible && (
          <div onClick={() => setVisible(false)} className="fixed inset-0 bg-black/60 z-[99998] backdrop-blur-sm" />
        )}

        {/* ── MOBILE SIDEBAR ── */}
        <div
          className="fixed top-0 right-0 bottom-0 bg-[#120a05] z-[99999] overflow-x-hidden overflow-y-auto font-['Montserrat',sans-serif] border-l border-l-[rgba(200,146,74,0.18)] max-w-[100vw] transition-[width] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: visible ? "min(320px, 100vw)" : 0 }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-b-[rgba(200,146,74,0.18)]">
            <button
              className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase text-[#f0e6d8] font-['Montserrat',sans-serif] transition-colors duration-200 hover:text-[#c8924a]"
              onClick={() => setVisible(false)}
            >
              <IconMenu /> Close
            </button>
            <DiamondIcon />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c8924a] to-transparent opacity-50" />

          <NavLink
            className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
            to="/"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>

          {/* Men mobile */}
          <MobileAccordion
            title="Men"
            open={mobileAccord === "men"}
            toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
            sections={{
              JACKETS: [
                { label: "Jackets", gender: "Men" },
                { label: "Bomber Biker Jacket", gender: "Men" },
                { label: "Moto Biker Jacket", gender: "Men" },
                { label: "Racing Coat", gender: "Men" },
                { label: "Leather Coats", gender: "Men" },
                { label: "Men Winter Wear", gender: "Men" },
              ],
              "HOME & LIFESTYLE": [
                { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
                { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
                { label: "Apron", directCategory: "Men Leather Apron" },
              ],
              OTHERS: [
                { label: "Pillow", category: "Others", gender: "Men" },
                { label: "Cushion Cover", category: "Others", gender: "Men" },
                { label: "Aprons", category: "Others", gender: "Men" },
                { label: "Desk Mat", category: "Others", gender: "Men" },
                { label: "Chair Cover", category: "Others", gender: "Men" },
              ],
            }}
            closeSidebar={() => setVisible(false)}
          />

          {/* Women mobile */}
          <MobileAccordion
            title="Women"
            open={mobileAccord === "women"}
            toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
            sections={{
              TOPS: [
                { label: "Jackets", gender: "Women" },
                { label: "Bomber Biker Jacket", gender: "Women" },
                { label: "Moto Biker Jacket", gender: "Women" },
                { label: "Racing Coat", gender: "Women" },
                { label: "Women Winter Wear", gender: "Women" },
                { label: "Women Night Dress", gender: "Women" },
              ],
              BOTTOMS: [
                { label: "Leather Pencil Skirt", gender: "Women" },
                { label: "Leather Full Skirt", gender: "Women" },
                { label: "Slim Bodycon Skirt", gender: "Women" },
              ],
              "HOME & LIFESTYLE": [
                { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
                { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
              ],
              OTHERS: [
                { label: "Pillow", category: "Others", gender: "Women" },
                { label: "Cushion Cover", category: "Others", gender: "Women" },
                { label: "Aprons", category: "Others", gender: "Women" },
                { label: "Desk Mat", category: "Others", gender: "Women" },
                { label: "Chair Cover", category: "Others", gender: "Women" },
              ],
            }}
            closeSidebar={() => setVisible(false)}
          />

          {/* Collection mobile */}
          <MobileAccordion
            title="Collection"
            open={mobileAccord === "collection"}
            toggle={() => setMobileAccord(mobileAccord === "collection" ? null : "collection")}
            sections={{
              "LEATHER PILLOWS": [
                { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
                { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
              ],
              "SOFA & DESK": [
                { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
                { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
                { label: "Apron", directCategory: "Men Leather Apron" },
              ],
              OTHERS: [
                { label: "Pillow", category: "Others", gender: "Men" },
                { label: "Cushion Cover", category: "Others", gender: "Men" },
                { label: "Aprons", category: "Others", gender: "Men" },
                { label: "Desk Mat", category: "Others", gender: "Men" },
                { label: "Chair Cover", category: "Others", gender: "Men" },
              ],
            }}
            closeSidebar={() => setVisible(false)}
          />

          {[
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
              to={to}
              onClick={() => setVisible(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;