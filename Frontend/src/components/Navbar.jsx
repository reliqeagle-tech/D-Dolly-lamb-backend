// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /* ── Premium inline SVG icons ── */
// const IconSearch = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconUser = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconHeart = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//             stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
//     </svg>
// );
// const IconBag = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//         <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconMenu = () => (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//         <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
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
//     <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
//         <rect x="6" y="6" width="30" height="30" rx="1"
//             transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
//         <rect x="11" y="11" width="20" height="20" rx="0.5"
//             transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//         <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
//             fontSize="13" fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
//     </svg>
// );

// const MegaBadge = ({ text }) => (
//     <div className="flex items-center gap-2 mb-4 mt-1">
//         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//             <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
//                 stroke="#c8924a" strokeWidth="1" fill="rgba(200,146,74,0.15)" strokeLinejoin="round" />
//         </svg>
//         <span className="text-[8px] tracking-[0.32em] text-[#8a5e2d] font-['Montserrat',sans-serif] font-semibold uppercase">
//             {text}
//         </span>
//     </div>
// );

// const Chevron = ({ open }) => (
//     <span className={`
//     inline-block w-1.5 h-1.5 flex-shrink-0
//     border-r-[1.5px] border-b-[1.5px] border-current
//     transition-transform duration-[250ms]
//     ${open ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-px"}
//   `} />
// );

// /* ── NavLink with underline animation ── */
// const NavItem = ({ to, children, isButton = false, isActive = false, onClick }) => {
//     const base = `
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
//     if (isButton) return <button className={base} onClick={onClick}>{children}</button>;
//     return <NavLink to={to} className={({ isActive: a }) => base.replace(isActive ? "" : "", "") + (a ? " !text-[#c8924a] [&::after]:w-full" : "")}>{children}</NavLink>;
// };

// /* ── MEGA MENU WRAPPER ── */
// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//     <div
//         className="ddl-mega fixed left-0 right-0 bg-[#1a0f0a] border-t border-[#c8924a]/[0.18] border-b border-b-[#c8924a]/[0.12]"
//         style={{ top: 68, boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//         onMouseEnter={showMenu}
//         onMouseLeave={hideMenu}
//     >
//         <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-70" />
//         <div className="max-w-[1400px] mx-auto px-16 py-9 flex gap-14 items-start">
//             {children}
//         </div>
//     </div>
// );

// const buildUrl = (item) => {
//     if (item.category === "Others") {
//         return `/collection?category=Others&sub=${encodeURIComponent(item.label)}`;
//     }
//     return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
// };

// const MegaColumn = ({ title, badge, items }) => (
//     <div className="ddl-mega-col min-w-[150px]">
//         {badge && <MegaBadge text={badge} />}
//         <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3.5">
//             {title}
//         </div>
//         <span className="ddl-col-rule block mb-4" />
//         <ul className="flex flex-col gap-3 list-none p-0 m-0">
//             {items.map((item, i) => (
//                 <li key={i} className="ddl-mega-item">
//                     <Link
//                         to={buildUrl(item)}
//                         className="
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
//                     >
//                         {item.label}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ── MOBILE ACCORDION ── */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//     <div>
//         <button
//             className="
//         w-full flex items-center justify-between px-6 py-3.5
//         text-[11px] font-medium tracking-[0.25em] uppercase
//         text-[rgba(240,230,216,0.8)] font-['Montserrat',sans-serif]
//         bg-transparent border-none border-b border-b-[rgba(200,146,74,0.08)]
//         cursor-pointer transition-colors duration-200
//         hover:text-[#c8924a]
//       "
//             onClick={toggle}
//         >
//             {title} <Chevron open={open} />
//         </button>
//         <div
//             className="overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out"
//             style={{ maxHeight: open ? 700 : 0, opacity: open ? 1 : 0 }}
//         >
//             {Object.entries(sections).map(([sec, items], idx) => (
//                 <div key={idx} className="px-10 py-3 border-b border-b-[rgba(200,146,74,0.05)]">
//                     <h4 className="text-[8px] tracking-[0.32em] text-[#8a5e2d] uppercase font-semibold mb-2.5 font-['Montserrat',sans-serif]">
//                         {sec}
//                     </h4>
//                     {items.map((item, i) => (
//                         <Link
//                             key={i}
//                             onClick={closeSidebar}
//                             to={buildUrl(item)}
//                             className="block py-1.5 text-[11px] text-[rgba(240,230,216,0.55)] no-underline tracking-[0.06em] transition-colors duration-200 hover:text-[#c8924a]"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// /* ══════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════ */
// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);
//     const [mobileAccord, setMobileAccord] = useState(null);
//     const [profileOpen, setProfileOpen] = useState(false);
//     const hideRef = useRef(null);
//     const profileRef = useRef(null);

//     const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     useEffect(() => {
//         const handleOutside = (e) => {
//             if (profileRef.current && !profileRef.current.contains(e.target)) {
//                 setProfileOpen(false);
//             }
//         };
//         if (profileOpen) document.addEventListener("mousedown", handleOutside);
//         return () => document.removeEventListener("mousedown", handleOutside);
//     }, [profileOpen]);

//     const logout = () => {
//         setProfileOpen(false);
//         navigate("/login");
//         localStorage.removeItem("token");
//         setToken("");
//         setCartItems({});
//     };

//     const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 280); };
//     const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

//     /* Corner bracket helper */
//     const corners = [
//         "top-2 left-2 border-t-[1.5px] border-l-[1.5px]",
//         "top-2 right-2 border-t-[1.5px] border-r-[1.5px]",
//         "bottom-2 left-2 border-b-[1.5px] border-l-[1.5px]",
//         "bottom-2 right-2 border-b-[1.5px] border-r-[1.5px]",
//     ];

//     return (
//         <>
//             <style>{ANIM_STYLES}</style>

//             <header
//                 className="sticky top-0 bg-[#1a0f0a] border-b border-[#c8924a]/[0.18] font-['Montserrat',sans-serif]"
//                 style={{ zIndex: 9998, overflow: "visible" }}
//             >
//                 {/* Gold top bar */}
//                 <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-60" />

//                 <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-3 md:gap-6 h-[66px]">

//                     {/* ── LOGO ── */}
//                     <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0 min-w-0">
//                         <div className="flex-shrink-0"><DiamondIcon /></div>
//                         <div className="flex flex-col leading-none min-w-0">
//                             <span className="font-['Montserrat',sans-serif] text-[clamp(10px,2vw,14px)] font-semibold tracking-[0.22em] text-[#f0e6d8] uppercase whitespace-nowrap">
//                                 <span className="text-[#c8924a]">D DOLLY</span> LAMB
//                             </span>
//                             <span className="block h-px bg-gradient-to-r from-[#8a5e2d] to-transparent my-[3px]" />
//                             <span className="text-[clamp(6px,1.5vw,8.5px)] tracking-[0.38em] text-[#8a5e2d] uppercase whitespace-nowrap">
//                                 ARTISAN ATELIER
//                             </span>
//                         </div>
//                     </Link>

//                     {/* ── CENTER NAV (desktop) ── */}
//                     <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
//                         <li>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) => `
//                   relative flex items-center gap-[5px] pb-1
//                   text-[11px] font-medium tracking-[0.18em] uppercase
//                   no-underline cursor-pointer transition-colors duration-[220ms]
//                   after:content-[''] after:absolute after:bottom-0 after:left-0
//                   after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                   hover:text-[#c8924a]
//                   ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0"}
//                 `}
//                             >
//                                 Home
//                             </NavLink>
//                         </li>

//                         {/* MEN */}
//                         <li className="relative" onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
//                             <div
//                                 className={`
//                   relative flex items-center gap-[5px] pb-1
//                   text-[11px] font-medium tracking-[0.18em] uppercase
//                   cursor-pointer transition-colors duration-[220ms]
//                   after:content-[''] after:absolute after:bottom-0 after:left-0
//                   after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                   ${activeMenu === "men" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//                 `}
//                             >
//                                 Men <Chevron open={activeMenu === "men"} />
//                             </div>
//                             {activeMenu === "men" && (
//                                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Tops" badge="MEN'S COLLECTION" items={[
//                                         { label: "Biker Jacket", category: "Topwear", gender: "Men" },
//                                         { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
//                                         { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Men" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                         { label: "Aprons", category: "Others", gender: "Men" },
//                                         { label: "Desk Mat", category: "Others", gender: "Men" },
//                                         { label: "Chair Cover", category: "Others", gender: "Men" },
//                                     ]} />
//                                     {/* Featured image */}
//                                     <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden rounded-[3px]">
//                                         <img
//                                             src={assets.men_nav} alt="Men's Collection"
//                                             className="w-full object-cover block transition-transform duration-500"
//                                             style={{ height: 250, filter: "brightness(0.7)" }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                                         ))}
//                                         <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                                             Men's Collection
//                                         </div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {/* WOMEN */}
//                         <li className="relative" onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
//                             <div
//                                 className={`
//                   relative flex items-center gap-[5px] pb-1
//                   text-[11px] font-medium tracking-[0.18em] uppercase
//                   cursor-pointer transition-colors duration-[220ms]
//                   after:content-[''] after:absolute after:bottom-0 after:left-0
//                   after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                   ${activeMenu === "women" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//                 `}
//                             >
//                                 Women <Chevron open={activeMenu === "women"} />
//                             </div>
//                             {activeMenu === "women" && (
//                                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
//                                         { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                                         { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                                         { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                                         { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                                         { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     <MegaColumn title="Bottoms" items={[
//                                         { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                                         { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                                         { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Women" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                         { label: "Aprons", category: "Others", gender: "Women" },
//                                         { label: "Desk Mat", category: "Others", gender: "Women" },
//                                         { label: "Chair Cover", category: "Others", gender: "Women" },
//                                     ]} />
//                                     <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden rounded-[3px]">
//                                         <img
//                                             src={assets.women_nav} alt="Women's Collection"
//                                             className="w-full object-cover block transition-transform duration-500"
//                                             style={{ height: 250, filter: "brightness(0.7)" }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                                         ))}
//                                         <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                                             Women's Collection
//                                         </div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {[
//                             { to: "/collection", label: "Collection" },
//                             { to: "/about", label: "About" },
//                             { to: "/contact", label: "Contact" },
//                         ].map(({ to, label }) => (
//                             <li key={to}>
//                                 <NavLink
//                                     to={to}
//                                     className={({ isActive }) => `
//                     relative flex items-center gap-[5px] pb-1
//                     text-[11px] font-medium tracking-[0.18em] uppercase
//                     no-underline cursor-pointer transition-colors duration-[220ms]
//                     after:content-[''] after:absolute after:bottom-0 after:left-0
//                     after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                     hover:text-[#c8924a]
//                     ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0"}
//                   `}
//                                 >
//                                     {label}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* ── RIGHT ICONS ── */}
//                     <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 overflow-visible">

//                         {/* Search */}
//                         <button
//                             className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                             aria-label="Search"
//                             onClick={() => { setShowSearch(true); navigate("/collection"); }}
//                         >
//                             <IconSearch />
//                         </button>

//                         {/* Account */}
//                         <div ref={profileRef} className="relative">
//                             <button
//                                 className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                                 aria-label="Account"
//                                 onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}
//                             >
//                                 <IconUser />
//                             </button>

//                             {token && profileOpen && (
//                                 <div
//                                     className="absolute top-[calc(100%+12px)] right-0 bg-[#221208] border border-[rgba(200,146,74,0.25)] border-t-2 border-t-[#c8924a] min-w-[190px] z-[999999]"
//                                     style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.8)", animation: "megaIn 0.18s ease both" }}
//                                 >
//                                     <div className="px-[18px] py-3 border-b border-b-[rgba(200,146,74,0.15)]">
//                                         <div className="flex items-center gap-2.5">
//                                             <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#c8924a] to-[#8a5e2d] flex items-center justify-center flex-shrink-0">
//                                                 <IconUser />
//                                             </div>
//                                             <span className="text-[9px] tracking-[0.18em] text-[#c8924a] uppercase font-['Montserrat',sans-serif]">
//                                                 My Account
//                                             </span>
//                                         </div>
//                                     </div>
//                                     {[
//                                         { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
//                                         { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
//                                         { label: "Logout", action: logout },
//                                     ].map(({ label, action }) => (
//                                         <p
//                                             key={label}
//                                             onClick={action}
//                                             className="
//                         block px-[18px] py-[11px]
//                         text-[11px] tracking-[0.12em] text-[#f0e6d8] uppercase
//                         cursor-pointer border-b border-b-[rgba(200,146,74,0.18)]
//                         last:border-b-0 font-['Montserrat',sans-serif]
//                         transition-[background,color,padding-left] duration-150
//                         hover:bg-[rgba(200,146,74,0.1)] hover:text-[#c8924a] hover:pl-6
//                       "
//                                         >
//                                             {label}
//                                         </p>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Wishlist */}
//                         <Link
//                             to="/wishlist"
//                             className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]"
//                             aria-label="Wishlist"
//                         >
//                             <IconHeart />
//                             {wishlist?.length > 0 && (
//                                 <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                                     {wishlist.length}
//                                 </span>
//                             )}
//                         </Link>

//                         {/* Cart */}
//                         <Link
//                             to="/cart"
//                             className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]"
//                             aria-label="Cart"
//                         >
//                             <IconBag />
//                             <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                                 {getCartCount()}
//                             </span>
//                         </Link>

//                         {/* Hamburger — mobile only */}
//                         <button
//                             className="md:hidden bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                             aria-label="Menu"
//                             onClick={() => setVisible(true)}
//                         >
//                             <IconMenu />
//                         </button>
//                     </div>
//                 </div>

//                 {/* ── MOBILE SIDEBAR OVERLAY ── */}
//                 {visible && (
//                     <div
//                         onClick={() => setVisible(false)}
//                         className="fixed inset-0 bg-black/60 z-[99998] backdrop-blur-sm"
//                     />
//                 )}

//                 {/* ── MOBILE SIDEBAR ── */}
//                 <div
//                     className="fixed top-0 right-0 bottom-0 bg-[#120a05] z-[99999] overflow-x-hidden overflow-y-auto font-['Montserrat',sans-serif] border-l border-l-[rgba(200,146,74,0.18)] max-w-[100vw] transition-[width] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
//                     style={{ width: visible ? "min(320px, 100vw)" : 0 }}
//                 >
//                     {/* Sidebar header */}
//                     <div className="flex items-center justify-between px-6 py-4 border-b border-b-[rgba(200,146,74,0.18)]">
//                         <button
//                             className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase text-[#f0e6d8] font-['Montserrat',sans-serif] transition-colors duration-200 hover:text-[#c8924a]"
//                             onClick={() => setVisible(false)}
//                         >
//                             <IconMenu /> Close
//                         </button>
//                         <DiamondIcon />
//                     </div>
//                     <div className="h-px bg-gradient-to-r from-transparent via-[#c8924a] to-transparent opacity-50" />

//                     <NavLink
//                         className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//                         to="/"
//                         onClick={() => setVisible(false)}
//                     >
//                         Home
//                     </NavLink>

//                     <MobileAccordion
//                         title="Men"
//                         open={mobileAccord === "men"}
//                         toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//                         sections={{
//                             TOPS: [
//                                 { label: "Biker Jacket", category: "Topwear", gender: "Men" },
//                                 { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
//                                 { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Men" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                 { label: "Aprons", category: "Others", gender: "Men" },
//                                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                                 { label: "Chair Cover", category: "Others", gender: "Men" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     <MobileAccordion
//                         title="Women"
//                         open={mobileAccord === "women"}
//                         toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
//                         sections={{
//                             TOPS: [
//                                 { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                                 { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                                 { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                                 { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                                 { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                             ],
//                             BOTTOMS: [
//                                 { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                                 { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                                 { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Women" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                 { label: "Aprons", category: "Others", gender: "Women" },
//                                 { label: "Desk Mat", category: "Others", gender: "Women" },
//                                 { label: "Chair Cover", category: "Others", gender: "Women" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     {[
//                         { to: "/collection", label: "Collection" },
//                         { to: "/about", label: "About" },
//                         { to: "/contact", label: "Contact" },
//                     ].map(({ to, label }) => (
//                         <NavLink
//                             key={to}
//                             className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//                             to={to}
//                             onClick={() => setVisible(false)}
//                         >
//                             {label}
//                         </NavLink>
//                     ))}
//                 </div>
//             </header>
//         </>
//     );
// };

// export default Navbar;



// start

// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /* ── Premium inline SVG icons ── */
// const IconSearch = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconUser = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconHeart = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//             stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
//     </svg>
// );
// const IconBag = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//         <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconMenu = () => (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//         <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
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
//     <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
//         <rect x="6" y="6" width="30" height="30" rx="1"
//             transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
//         <rect x="11" y="11" width="20" height="20" rx="0.5"
//             transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//         <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
//             fontSize="13" fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
//     </svg>
// );

// const MegaBadge = ({ text }) => (
//     <div className="flex items-center gap-2 mb-4 mt-1">
//         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//             <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
//                 stroke="#c8924a" strokeWidth="1" fill="rgba(200,146,74,0.15)" strokeLinejoin="round" />
//         </svg>
//         <span className="text-[8px] tracking-[0.32em] text-[#8a5e2d] font-['Montserrat',sans-serif] font-semibold uppercase">
//             {text}
//         </span>
//     </div>
// );

// const Chevron = ({ open }) => (
//     <span className={`
//     inline-block w-1.5 h-1.5 flex-shrink-0
//     border-r-[1.5px] border-b-[1.5px] border-current
//     transition-transform duration-[250ms]
//     ${open ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-px"}
//   `} />
// );

// /* ── MEGA MENU WRAPPER ── */
// const MegaMenu = ({ children, showMenu, hideMenu, wide = false }) => (
//     <div
//         className="ddl-mega fixed left-0 right-0 bg-[#1a0f0a] border-t border-[#c8924a]/[0.18] border-b border-b-[#c8924a]/[0.12]"
//         style={{ top: 68, boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//         onMouseEnter={showMenu}
//         onMouseLeave={hideMenu}
//     >
//         <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-70" />
//         <div className={`${wide ? "max-w-[1500px]" : "max-w-[1400px]"} mx-auto px-10 py-8 flex gap-10 items-start`}>
//             {children}
//         </div>
//     </div>
// );

// const buildUrl = (item) => {
//     if (item.category === "Others" || item.directCategory) {
//         return `/collection?category=${encodeURIComponent(item.directCategory || "Others")}&sub=${encodeURIComponent(item.label)}`;
//     }
//     return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
// };

// const MegaColumn = ({ title, badge, items, compact = false }) => (
//     <div className={`ddl-mega-col ${compact ? "min-w-[130px]" : "min-w-[150px]"}`}>
//         {badge && <MegaBadge text={badge} />}
//         <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">
//             {title}
//         </div>
//         <span className="ddl-col-rule block mb-3.5" />
//         <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
//             {items.map((item, i) => (
//                 <li key={i} className="ddl-mega-item">
//                     <Link
//                         to={buildUrl(item)}
//                         className="
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
//                     >
//                         {item.label}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ── Category pill for Collection mega menu ── */
// const CategoryLink = ({ to, label, count }) => (
//     <Link
//         to={to}
//         className="
//       ddl-mega-item flex items-center justify-between gap-3
//       px-3 py-2 rounded-[3px] no-underline
//       text-[11px] tracking-[0.06em]
//       text-[rgba(240,230,216,0.65)]
//       border border-[rgba(200,146,74,0.1)]
//       transition-all duration-200
//       hover:text-[#c8924a] hover:border-[rgba(200,146,74,0.35)] hover:bg-[rgba(200,146,74,0.05)]
//     "
//     >
//         <span>{label}</span>
//         {count !== undefined && (
//             <span className="text-[9px] text-[#5a3a1a] font-['Montserrat',sans-serif]">({count})</span>
//         )}
//     </Link>
// );

// /* ── MOBILE ACCORDION ── */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//     <div>
//         <button
//             className="
//         w-full flex items-center justify-between px-6 py-3.5
//         text-[11px] font-medium tracking-[0.25em] uppercase
//         text-[rgba(240,230,216,0.8)] font-['Montserrat',sans-serif]
//         bg-transparent border-none border-b border-b-[rgba(200,146,74,0.08)]
//         cursor-pointer transition-colors duration-200
//         hover:text-[#c8924a]
//       "
//             onClick={toggle}
//         >
//             {title} <Chevron open={open} />
//         </button>
//         <div
//             className="overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out"
//             style={{ maxHeight: open ? 900 : 0, opacity: open ? 1 : 0 }}
//         >
//             {Object.entries(sections).map(([sec, items], idx) => (
//                 <div key={idx} className="px-10 py-3 border-b border-b-[rgba(200,146,74,0.05)]">
//                     <h4 className="text-[8px] tracking-[0.32em] text-[#8a5e2d] uppercase font-semibold mb-2.5 font-['Montserrat',sans-serif]">
//                         {sec}
//                     </h4>
//                     {items.map((item, i) => (
//                         <Link
//                             key={i}
//                             onClick={closeSidebar}
//                             to={buildUrl(item)}
//                             className="block py-1.5 text-[11px] text-[rgba(240,230,216,0.55)] no-underline tracking-[0.06em] transition-colors duration-200 hover:text-[#c8924a]"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// /* ══════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════ */
// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);
//     const [mobileAccord, setMobileAccord] = useState(null);
//     const [profileOpen, setProfileOpen] = useState(false);
//     const hideRef = useRef(null);
//     const profileRef = useRef(null);

//     const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     useEffect(() => {
//         const handleOutside = (e) => {
//             if (profileRef.current && !profileRef.current.contains(e.target)) {
//                 setProfileOpen(false);
//             }
//         };
//         if (profileOpen) document.addEventListener("mousedown", handleOutside);
//         return () => document.removeEventListener("mousedown", handleOutside);
//     }, [profileOpen]);

//     const logout = () => {
//         setProfileOpen(false);
//         navigate("/login");
//         localStorage.removeItem("token");
//         setToken("");
//         setCartItems({});
//     };

//     const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 400); };
//     const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

//     const corners = [
//         "top-2 left-2 border-t-[1.5px] border-l-[1.5px]",
//         "top-2 right-2 border-t-[1.5px] border-r-[1.5px]",
//         "bottom-2 left-2 border-b-[1.5px] border-l-[1.5px]",
//         "bottom-2 right-2 border-b-[1.5px] border-r-[1.5px]",
//     ];

//     const navLinkCls = (isActive) => `
//     relative flex items-center gap-[5px] pb-1
//     text-[11px] font-medium tracking-[0.18em] uppercase
//     no-underline cursor-pointer transition-colors duration-[220ms]
//     after:content-[''] after:absolute after:bottom-0 after:left-0
//     after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//     hover:text-[#c8924a]
//     ${isActive ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0"}
//   `;

//     return (
//         <>
//             <style>{ANIM_STYLES}</style>

//             <header
//                 className="sticky top-0 bg-[#1a0f0a] border-b border-[#c8924a]/[0.18] font-['Montserrat',sans-serif]"
//                 style={{ zIndex: 9998, overflow: "visible" }}
//             >
//                 <div className="h-0.5 bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-60" />

//                 <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-3 md:gap-6 h-[66px]">

//                     {/* ── LOGO ── */}
//                     <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0 min-w-0">
//                         <div className="flex-shrink-0"><DiamondIcon /></div>
//                         <div className="flex flex-col leading-none min-w-0">
//                             <span className="font-['Montserrat',sans-serif] text-[clamp(10px,2vw,14px)] font-semibold tracking-[0.22em] text-[#f0e6d8] uppercase whitespace-nowrap">
//                                 <span className="text-[#c8924a]">D DOLLY</span> LAMB
//                             </span>
//                             <span className="block h-px bg-gradient-to-r from-[#8a5e2d] to-transparent my-[3px]" />
//                             <span className="text-[clamp(6px,1.5vw,8.5px)] tracking-[0.38em] text-[#8a5e2d] uppercase whitespace-nowrap">
//                                 ARTISAN ATELIER
//                             </span>
//                         </div>
//                     </Link>

//                     {/* ── CENTER NAV (desktop) ── */}
//                     <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
//                         <li>
//                             <NavLink to="/" className={({ isActive }) => navLinkCls(isActive)}>Home</NavLink>
//                         </li>

//                         {/* ── MEN ── */}
//                         <li className="relative" onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
//                             <div className={`
//                 relative flex items-center gap-[5px] pb-1
//                 text-[11px] font-medium tracking-[0.18em] uppercase
//                 cursor-pointer transition-colors duration-[220ms]
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                 ${activeMenu === "men" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//               `}>
//                                 Men <Chevron open={activeMenu === "men"} />
//                             </div>
//                             {activeMenu === "men" && (
//                                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Jackets" badge="MEN'S COLLECTION" items={[
//                                         { label: "Jackets", gender: "Men" },
//                                         { label: "Bomber Biker Jacket", gender: "Men" },
//                                         { label: "Moto Biker Jacket", gender: "Men" },
//                                         { label: "Racing Coat", gender: "Men" },
//                                         { label: "Leather Coats", gender: "Men" },
//                                         { label: "Men Winter Wear", gender: "Men" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Men" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                         { label: "Aprons", category: "Others", gender: "Men" },
//                                         { label: "Desk Mat", category: "Others", gender: "Men" },
//                                         { label: "Chair Cover", category: "Others", gender: "Men" },
//                                     ]} />
//                                     <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[180px] relative overflow-hidden rounded-[3px]">
//                                         <img src={assets.men_nav} alt="Men's Collection"
//                                             className="w-full object-cover block transition-transform duration-500"
//                                             style={{ height: 240, filter: "brightness(0.7)" }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                                         ))}
//                                         <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                                             Men's Collection
//                                         </div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {/* ── WOMEN ── */}
//                         <li className="relative" onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
//                             <div className={`
//                 relative flex items-center gap-[5px] pb-1
//                 text-[11px] font-medium tracking-[0.18em] uppercase
//                 cursor-pointer transition-colors duration-[220ms]
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                 ${activeMenu === "women" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//               `}>
//                                 Women <Chevron open={activeMenu === "women"} />
//                             </div>
//                             {activeMenu === "women" && (
//                                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
//                                         { label: "Jackets", gender: "Women" },
//                                         { label: "Bomber Biker Jacket", gender: "Women" },
//                                         { label: "Moto Biker Jacket", gender: "Women" },
//                                         { label: "Racing Coat", gender: "Women" },
//                                         { label: "Women Winter Wear", gender: "Women" },
//                                         { label: "Women Night Dress", gender: "Women" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     <MegaColumn title="Bottoms" items={[
//                                         { label: "Leather Pencil Skirt", gender: "Women" },
//                                         { label: "Leather Full Skirt", gender: "Women" },
//                                         { label: "Slim Bodycon Skirt", gender: "Women" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Women" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                         { label: "Aprons", category: "Others", gender: "Women" },
//                                         { label: "Desk Mat", category: "Others", gender: "Women" },
//                                         { label: "Chair Cover", category: "Others", gender: "Women" },
//                                     ]} />
//                                     <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[180px] relative overflow-hidden rounded-[3px]">
//                                         <img src={assets.women_nav} alt="Women's Collection"
//                                             className="w-full object-cover block transition-transform duration-500"
//                                             style={{ height: 240, filter: "brightness(0.7)" }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 border-[#c8924a] ${c}`} />
//                                         ))}
//                                         <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[8.5px] font-semibold tracking-[0.28em] uppercase text-[#c8924a] text-center bg-gradient-to-t from-[rgba(26,15,10,0.92)] to-transparent">
//                                             Women's Collection
//                                         </div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {/* ── COLLECTION (combined mega menu) ── */}
//                         <li className="relative" onMouseEnter={() => showMenu("collection")} onMouseLeave={hideMenu}>
//                             <div className={`
//                 relative flex items-center gap-[5px] pb-1
//                 text-[11px] font-medium tracking-[0.18em] uppercase
//                 cursor-pointer transition-colors duration-[220ms]
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:h-px after:bg-[#c8924a] after:transition-[width] after:duration-300
//                 ${activeMenu === "collection" ? "text-[#c8924a] after:w-full" : "text-[#f0e6d8] after:w-0 hover:text-[#c8924a] hover:after:w-full"}
//               `}>
//                                 Collection <Chevron open={activeMenu === "collection"} />
//                             </div>
//                             {activeMenu === "collection" && (
//                                 <MegaMenu showMenu={() => showMenu("collection")} hideMenu={hideMenu} wide>
//                                     {/* Men Column */}
//                                     <MegaColumn title="Men" badge="MEN'S" compact items={[
//                                         { label: "Jackets", gender: "Men" },
//                                         { label: "Bomber Biker Jacket", gender: "Men" },
//                                         { label: "Moto Biker Jacket", gender: "Men" },
//                                         { label: "Racing Coat", gender: "Men" },
//                                         { label: "Leather Coats", gender: "Men" },
//                                         { label: "Men Winter Wear", gender: "Men" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     {/* Women Column */}
//                                     <MegaColumn title="Women" badge="WOMEN'S" compact items={[
//                                         { label: "Jackets", gender: "Women" },
//                                         { label: "Bomber Biker Jacket", gender: "Women" },
//                                         { label: "Moto Biker Jacket", gender: "Women" },
//                                         { label: "Racing Coat", gender: "Women" },
//                                         { label: "Women Winter Wear", gender: "Women" },
//                                         { label: "Women Night Dress", gender: "Women" },
//                                         { label: "Leather Pencil Skirt", gender: "Women" },
//                                         { label: "Leather Full Skirt", gender: "Women" },
//                                         { label: "Slim Bodycon Skirt", gender: "Women" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     {/* Leather Pillow Cover */}
//                                     <MegaColumn title="Leather Pillows" compact items={[
//                                         { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//                                     ]} />
//                                     <div className="w-px self-stretch bg-[rgba(200,146,74,0.15)]" />
//                                     {/* Sofa, Desk {/* Home & Lifestyle Apron */}
//                                     <div className="ddl-mega-col min-w-[130px] flex flex-col gap-5">
//                                         <div>
//                                             <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">Sofa & Desk</div>
//                                             <span className="ddl-col-rule block mb-3.5" />
//                                             <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
//                                                 {[
//                                                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                                 ].map((item, i) => (
//                                                     <li key={i} className="ddl-mega-item">
//                                                         <Link to={buildUrl(item)} className="flex items-center gap-2 text-[11.5px] tracking-[0.04em] no-underline text-[rgba(240,230,216,0.65)] transition-[color,padding-left] duration-200 before:content-[''] before:inline-block before:w-3 before:h-px before:bg-[#8a5e2d] before:flex-shrink-0 before:transition-[width,background] before:duration-200 hover:text-[#c8924a] hover:pl-1 hover:before:w-4 hover:before:bg-[#c8924a]">
//                                                             {item.label}
//                                                         </Link>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <div className="text-[9px] font-semibold tracking-[0.3em] text-[#8a5e2d] uppercase font-['Montserrat',sans-serif] mb-3">Apron</div>
//                                             <span className="ddl-col-rule block mb-3.5" />
//                                             <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
//                                                 {[
//                                                     { label: "Apron", directCategory: "Men Leather Apron" },
//                                                 ].map((item, i) => (
//                                                     <li key={i} className="ddl-mega-item">
//                                                         <Link to={buildUrl(item)} className="flex items-center gap-2 text-[11.5px] tracking-[0.04em] no-underline text-[rgba(240,230,216,0.65)] transition-[color,padding-left] duration-200 before:content-[''] before:inline-block before:w-3 before:h-px before:bg-[#8a5e2d] before:flex-shrink-0 before:transition-[width,background] before:duration-200 hover:text-[#c8924a] hover:pl-1 hover:before:w-4 hover:before:bg-[#c8924a]">
//                                                             {item.label}
//                                                         </Link>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                         {/* View All CTA */}
//                                         <Link
//                                             to="/collection"
//                                             onMouseDown={e => e.preventDefault()}
//                                             onClick={() => setActiveMenu(null)}
//                                             className="mt-auto flex items-center gap-2 px-3 py-2.5 no-underline border border-[rgba(200,146,74,0.35)] text-[#c8924a] text-[10px] tracking-[0.2em] uppercase font-['Montserrat',sans-serif] transition-all duration-200 hover:bg-[rgba(200,146,74,0.1)] hover:border-[#c8924a]"
//                                         >
//                                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                                             View All
//                                         </Link>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {[
//                             { to: "/about", label: "About" },
//                             { to: "/contact", label: "Contact" },
//                         ].map(({ to, label }) => (
//                             <li key={to}>
//                                 <NavLink to={to} className={({ isActive }) => navLinkCls(isActive)}>{label}</NavLink>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* ── RIGHT ICONS ── */}
//                     <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 overflow-visible">
//                         <button
//                             className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                             aria-label="Search"
//                             onClick={() => { setShowSearch(true); navigate("/collection"); }}
//                         >
//                             <IconSearch />
//                         </button>

//                         <div ref={profileRef} className="relative">
//                             <button
//                                 className="bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                                 aria-label="Account"
//                                 onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}
//                             >
//                                 <IconUser />
//                             </button>
//                             {token && profileOpen && (
//                                 <div
//                                     className="absolute top-[calc(100%+12px)] right-0 bg-[#221208] border border-[rgba(200,146,74,0.25)] border-t-2 border-t-[#c8924a] min-w-[190px] z-[999999]"
//                                     style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.8)", animation: "megaIn 0.18s ease both" }}
//                                 >
//                                     <div className="px-[18px] py-3 border-b border-b-[rgba(200,146,74,0.15)]">
//                                         <div className="flex items-center gap-2.5">
//                                             <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#c8924a] to-[#8a5e2d] flex items-center justify-center flex-shrink-0">
//                                                 <IconUser />
//                                             </div>
//                                             <span className="text-[9px] tracking-[0.18em] text-[#c8924a] uppercase font-['Montserrat',sans-serif]">My Account</span>
//                                         </div>
//                                     </div>
//                                     {[
//                                         { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
//                                         { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
//                                         { label: "Logout", action: logout },
//                                     ].map(({ label, action }) => (
//                                         <p
//                                             key={label}
//                                             onClick={action}
//                                             className="block px-[18px] py-[11px] text-[11px] tracking-[0.12em] text-[#f0e6d8] uppercase cursor-pointer border-b border-b-[rgba(200,146,74,0.18)] last:border-b-0 font-['Montserrat',sans-serif] transition-[background,color,padding-left] duration-150 hover:bg-[rgba(200,146,74,0.1)] hover:text-[#c8924a] hover:pl-6"
//                                         >
//                                             {label}
//                                         </p>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         <Link to="/wishlist" className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]" aria-label="Wishlist">
//                             <IconHeart />
//                             {wishlist?.length > 0 && (
//                                 <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                                     {wishlist.length}
//                                 </span>
//                             )}
//                         </Link>

//                         <Link to="/cart" className="relative bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 no-underline transition-colors duration-200 hover:text-[#c8924a]" aria-label="Cart">
//                             <IconBag />
//                             <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br from-[#c8924a] to-[#f7c568] text-[#1a0f0a]">
//                                 {getCartCount()}
//                             </span>
//                         </Link>

//                         <button
//                             className="md:hidden bg-transparent border-none cursor-pointer text-[#f0e6d8] flex items-center p-0 transition-colors duration-200 hover:text-[#c8924a]"
//                             aria-label="Menu"
//                             onClick={() => setVisible(true)}
//                         >
//                             <IconMenu />
//                         </button>
//                     </div>
//                 </div>

//                 {visible && (
//                     <div onClick={() => setVisible(false)} className="fixed inset-0 bg-black/60 z-[99998] backdrop-blur-sm" />
//                 )}

//                 {/* ── MOBILE SIDEBAR ── */}
//                 <div
//                     className="fixed top-0 right-0 bottom-0 bg-[#120a05] z-[99999] overflow-x-hidden overflow-y-auto font-['Montserrat',sans-serif] border-l border-l-[rgba(200,146,74,0.18)] max-w-[100vw] transition-[width] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
//                     style={{ width: visible ? "min(320px, 100vw)" : 0 }}
//                 >
//                     <div className="flex items-center justify-between px-6 py-4 border-b border-b-[rgba(200,146,74,0.18)]">
//                         <button
//                             className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase text-[#f0e6d8] font-['Montserrat',sans-serif] transition-colors duration-200 hover:text-[#c8924a]"
//                             onClick={() => setVisible(false)}
//                         >
//                             <IconMenu /> Close
//                         </button>
//                         <DiamondIcon />
//                     </div>
//                     <div className="h-px bg-gradient-to-r from-transparent via-[#c8924a] to-transparent opacity-50" />

//                     <NavLink
//                         className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//                         to="/"
//                         onClick={() => setVisible(false)}
//                     >
//                         Home
//                     </NavLink>

//                     {/* Men mobile */}
//                     <MobileAccordion
//                         title="Men"
//                         open={mobileAccord === "men"}
//                         toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//                         sections={{
//                             JACKETS: [
//                                 { label: "Jackets", gender: "Men" },
//                                 { label: "Bomber Biker Jacket", gender: "Men" },
//                                 { label: "Moto Biker Jacket", gender: "Men" },
//                                 { label: "Racing Coat", gender: "Men" },
//                                 { label: "Leather Coats", gender: "Men" },
//                                 { label: "Men Winter Wear", gender: "Men" },
//                             ],
//                             "HOME & LIFESTYLE": [
//                                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                 { label: "Apron", directCategory: "Men Leather Apron" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Men" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                 { label: "Aprons", category: "Others", gender: "Men" },
//                                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                                 { label: "Chair Cover", category: "Others", gender: "Men" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     {/* Women mobile */}
//                     <MobileAccordion
//                         title="Women"
//                         open={mobileAccord === "women"}
//                         toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
//                         sections={{
//                             TOPS: [
//                                 { label: "Jackets", gender: "Women" },
//                                 { label: "Bomber Biker Jacket", gender: "Women" },
//                                 { label: "Moto Biker Jacket", gender: "Women" },
//                                 { label: "Racing Coat", gender: "Women" },
//                                 { label: "Women Winter Wear", gender: "Women" },
//                                 { label: "Women Night Dress", gender: "Women" },
//                             ],
//                             BOTTOMS: [
//                                 { label: "Leather Pencil Skirt", gender: "Women" },
//                                 { label: "Leather Full Skirt", gender: "Women" },
//                                 { label: "Slim Bodycon Skirt", gender: "Women" },
//                             ],
//                             "HOME & LIFESTYLE": [
//                                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Women" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                 { label: "Aprons", category: "Others", gender: "Women" },
//                                 { label: "Desk Mat", category: "Others", gender: "Women" },
//                                 { label: "Chair Cover", category: "Others", gender: "Women" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     {/* Collection mobile */}
//                     <MobileAccordion
//                         title="Collection"
//                         open={mobileAccord === "collection"}
//                         toggle={() => setMobileAccord(mobileAccord === "collection" ? null : "collection")}
//                         sections={{
//                             "LEATHER PILLOWS": [
//                                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//                             ],
//                             "SOFA & DESK": [
//                                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                 { label: "Apron", directCategory: "Men Leather Apron" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Men" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                 { label: "Aprons", category: "Others", gender: "Men" },
//                                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                                 { label: "Chair Cover", category: "Others", gender: "Men" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     {[
//                         { to: "/about", label: "About" },
//                         { to: "/contact", label: "Contact" },
//                     ].map(({ to, label }) => (
//                         <NavLink
//                             key={to}
//                             className="block px-6 py-3.5 text-[11px] font-medium tracking-[0.25em] uppercase text-[rgba(240,230,216,0.8)] no-underline border-b border-b-[rgba(200,146,74,0.08)] transition-[color,padding-left] duration-200 hover:text-[#c8924a] hover:pl-[34px]"
//                             to={to}
//                             onClick={() => setVisible(false)}
//                         >
//                             {label}
//                         </NavLink>
//                     ))}
//                 </div>
//             </header>
//         </>
//     );
// };

// export default Navbar;






// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /* ── Colors matched to screenshots ──
//   Navbar bg:       #FFFFFF / rgba(255,255,255,0.97)
//   Nav text:        #1E1B4B  (deep navy-indigo)
//   Nav active/hover:#5B5BD6  (indigo)
//   Underline:       #5B5BD6 → #818CF8
//   Logo gold:       #C8924A  (kept for brand)
//   Logo text:       #1E1B4B
//   Mega bg:         #FFFFFF → #F8F7FF
//   Mega border:     rgba(91,91,214,0.15)
//   Col title:       #5B5BD6
//   Link text:       #6B7280  → #5B5BD6 hover
//   Shimmer:         indigo gradient
//   Badge star:      #5B5BD6
//   Badge text:      #5B5BD6
//   Divider:         rgba(91,91,214,0.15)
//   Icon color:      #4B5563  → #5B5BD6 hover
//   Badge bg:        #5B5BD6  (cart/wishlist)
//   Badge text:      #FFFFFF
//   Corner lines:    #5B5BD6
//   Image overlay:   rgba(30,27,75,0.85)
// ─────────────────────────────────── */

// const C = {
//     navBg: "rgba(255,255,255,0.97)",
//     navBorder: "rgba(91,91,214,0.15)",
//     megaBg: "linear-gradient(180deg,#FFFFFF 0%,#F8F7FF 100%)",
//     indigo: "#5B5BD6",
//     indigoLt: "#818CF8",
//     indigoDk: "#4338CA",
//     gold: "#C8924A",
//     goldDk: "#8a5e2d",
//     navText: "#1E1B4B",
//     bodyText: "#4B5563",
//     linkText: "#6B7280",
//     mutedText: "#9CA3AF",
// };

// /* ── SVG Icons ── */
// const IconSearch = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconUser = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconHeart = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//             stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
//     </svg>
// );
// const IconBag = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//         <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconMenu = () => (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//         <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconClose = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//         <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );

// /* ── Animations & global styles ── */
// const ANIM_STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

//   @keyframes megaIn {
//     from { opacity:0; transform:translateY(-8px); }
//     to   { opacity:1; transform:translateY(0); }
//   }
//   @keyframes colIn {
//     from { opacity:0; transform:translateY(10px); }
//     to   { opacity:1; transform:translateY(0); }
//   }
//   @keyframes lineExpand {
//     from { width:0; }
//     to   { width:100%; }
//   }
//   @keyframes imgReveal {
//     from { opacity:0; transform:scale(1.05); }
//     to   { opacity:1; transform:scale(1); }
//   }
//   @keyframes itemSlide {
//     from { opacity:0; transform:translateX(-8px); }
//     to   { opacity:1; transform:translateX(0); }
//   }
//   @keyframes shimmerIndigo {
//     0%   { background-position:-200% center; }
//     100% { background-position: 200% center; }
//   }
//   @keyframes sideIn {
//     from { opacity:0; transform:translateX(20px); }
//     to   { opacity:1; transform:translateX(0); }
//   }

//   /* ── Shimmer bar (top & bottom of header) ── */
//   .nav-shimmer {
//     background: linear-gradient(90deg,
//       transparent 0%,
//       rgba(91,91,214,0.25) 15%,
//       #5B5BD6 40%,
//       #818CF8 50%,
//       #5B5BD6 60%,
//       rgba(91,91,214,0.25) 85%,
//       transparent 100%);
//     background-size: 200% auto;
//     animation: shimmerIndigo 3.5s linear infinite;
//   }

//   /* ── Mega menu ── */
//   .ddl-mega     { animation: megaIn 0.22s cubic-bezier(0.16,1,0.3,1) both; }
//   .ddl-mega-col { animation: colIn 0.32s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay:0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay:0.08s; }
//   .ddl-mega-col:nth-child(3) { animation-delay:0.12s; }
//   .ddl-mega-col:nth-child(4) { animation-delay:0.16s; }
//   .ddl-mega-col:nth-child(5) { animation-delay:0.20s; }

//   .ddl-col-rule {
//     display:block; height:1px; width:0;
//     background:linear-gradient(to right,#5B5BD6,transparent);
//     animation:lineExpand 0.45s ease 0.08s both;
//   }
//   .ddl-mega-img-wrap { animation:imgReveal 0.4s ease 0.06s both; }
//   .ddl-mega-item     { animation:itemSlide 0.28s ease both; }
//   .ddl-mega-item:nth-child(1) { animation-delay:0.08s; }
//   .ddl-mega-item:nth-child(2) { animation-delay:0.12s; }
//   .ddl-mega-item:nth-child(3) { animation-delay:0.16s; }
//   .ddl-mega-item:nth-child(4) { animation-delay:0.20s; }
//   .ddl-mega-item:nth-child(5) { animation-delay:0.24s; }
//   .ddl-mega-item:nth-child(6) { animation-delay:0.28s; }

//   /* ── Nav link ── */
//   .nav-link-item {
//     position:relative;
//     display:inline-flex; align-items:center; gap:5px;
//     padding-bottom:3px;
//     font-size:11px; font-weight:600;
//     letter-spacing:0.16em; text-transform:uppercase;
//     cursor:pointer; text-decoration:none;
//     color:#1E1B4B;
//     transition:color 0.2s;
//     font-family:'Montserrat',sans-serif;
//     white-space:nowrap;
//   }
//   .nav-link-item::after {
//     content:'';
//     position:absolute; bottom:0; left:0;
//     height:1.5px; width:0;
//     background:linear-gradient(90deg,#4338CA,#5B5BD6,#818CF8);
//     border-radius:2px;
//     transition:width 0.28s ease;
//   }
//   .nav-link-item:hover        { color:#5B5BD6; }
//   .nav-link-item:hover::after { width:100%; }
//   .nav-link-item.active       { color:#5B5BD6; }
//   .nav-link-item.active::after{ width:100%; }

//   /* ── Mega link ── */
//   .mega-link {
//     display:flex; align-items:center; gap:8px;
//     font-size:12px; letter-spacing:0.03em;
//     text-decoration:none; font-weight:400;
//      color:#1E1B4B;   /* strong dark */
//   font-weight: 500; font-family:'Montserrat',sans-serif;
//     transition:color 0.18s, padding-left 0.18s;
//   }
//   .mega-link:hover { color:#5B5BD6; padding-left:4px; }
//   .mega-link .ml {
//     display:inline-block; width:10px; height:1px;
//     background:#1E1B4B; flex-shrink:0;
//     transition:width 0.18s, background 0.18s;
//   }
//   .mega-link:hover .ml { width:14px; background:#5B5BD6; }

//   /* ── Icon button ── */
//   .nav-icon-btn {
//     background:transparent; border:none; cursor:pointer;
//     color:#4B5563;
//     display:flex; align-items:center; justify-content:center;
//     padding:7px; margin:-7px; border-radius:8px;
//     transition:color 0.18s, background 0.18s;
//     text-decoration:none; position:relative;
//   }
//   .nav-icon-btn:hover { color:#5B5BD6; background:rgba(91,91,214,0.08); }

//   /* ── Mobile sidebar link ── */
//   .mob-nav-link {
//     display:block; padding:13px 24px;
//     font-size:11px; font-weight:600; letter-spacing:0.2em;
//     text-transform:uppercase; text-decoration:none;
//     color:#1E1B4B; font-family:'Montserrat',sans-serif;
//     border-bottom:1px solid rgba(91,91,214,0.08);
//     transition:color 0.2s, padding-left 0.2s, background 0.2s;
//   }
//   .mob-nav-link:hover,
//   .mob-nav-link.active { color:#5B5BD6; padding-left:32px; background:rgba(91,91,214,0.04); }

//   /* ── View All btn ── */
//   .mega-view-all {
//     display:flex; align-items:center; gap:8px;
//     padding:9px 12px; text-decoration:none;
//     font-size:10px; letter-spacing:0.18em; text-transform:uppercase;
//     font-family:'Montserrat',sans-serif; font-weight:600;
//     color:#5B5BD6; border:1.5px solid rgba(91,91,214,0.3);
//     border-radius:4px; margin-top:auto;
//     transition:background 0.2s, border-color 0.2s, color 0.2s;
//   }
//   .mega-view-all:hover {
//     background:rgba(91,91,214,0.08);
//     border-color:#5B5BD6;
//   }
// `;

// /* ── Diamond logo (gold kept) ── */
// const DiamondIcon = () => (
//     <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
//         <rect x="6" y="6" width="30" height="30" rx="1"
//             transform="rotate(45 21 21)" stroke={C.goldDk} strokeWidth="1.4" fill="none" />
//         <rect x="11" y="11" width="20" height="20" rx="0.5"
//             transform="rotate(45 21 21)" stroke={C.gold} strokeWidth="0.7" fill="none" opacity="0.4" />
//         <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
//             fontSize="13" fontWeight="600" fill={C.gold} textAnchor="middle">D</text>
//     </svg>
// );

// /* ── Mega badge (star + label) ── */
// const MegaBadge = ({ text }) => (
//     <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14, marginTop: 2 }}>
//         <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
//             <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
//                 stroke={C.indigo} strokeWidth="1" fill="rgba(91,91,214,0.12)" strokeLinejoin="round" />
//         </svg>
//         <span style={{
//             fontSize: 8, letterSpacing: "0.28em",
//             fontFamily: "Montserrat,sans-serif", fontWeight: 700,
//             textTransform: "uppercase", color: C.indigoLt,
//         }}>{text}</span>
//     </div>
// );

// /* ── Chevron ── */
// const Chevron = ({ open }) => (
//     <span style={{
//         display: "inline-block", width: 5, height: 5, flexShrink: 0,
//         borderRight: `1.5px solid currentColor`, borderBottom: `1.5px solid currentColor`,
//         transform: open ? "rotate(-135deg) translateY(2px)" : "rotate(45deg) translateY(-1px)",
//         transition: "transform 0.22s",
//     }} />
// );

// /* ── URL builder ── */
// const buildUrl = (item) => {
//     if (item.category === "Others" || item.directCategory)
//         return `/collection?category=${encodeURIComponent(item.directCategory || "Others")}&sub=${encodeURIComponent(item.label)}`;
//     return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
// };

// /* ── Corner accent marks ── */
// const corners = [
//     { pos: "top-2 left-2", b: "border-t-[1.5px] border-l-[1.5px]" },
//     { pos: "top-2 right-2", b: "border-t-[1.5px] border-r-[1.5px]" },
//     { pos: "bottom-2 left-2", b: "border-b-[1.5px] border-l-[1.5px]" },
//     { pos: "bottom-2 right-2", b: "border-b-[1.5px] border-r-[1.5px]" },
// ];

// /* ── Mega menu wrapper ── */
// const MegaMenu = ({ children, showMenu, hideMenu, wide = false }) => (
//     <div
//         className="ddl-mega"
//         style={{
//             position: "fixed", left: 0, right: 0, top: 64, zIndex: 9998,
//             background: C.megaBg,
//             borderTop: `1px solid ${C.navBorder}`,
//             borderBottom: `1px solid ${C.navBorder}`,
//             boxShadow: "0 16px 48px rgba(91,91,214,0.10), 0 4px 16px rgba(0,0,0,0.05)",
//         }}
//         onMouseEnter={showMenu}
//         onMouseLeave={hideMenu}
//     >
//         {/* indigo accent top line */}
//         <div style={{
//             height: 1,
//             background: "linear-gradient(90deg,transparent,rgba(91,91,214,0.45) 30%,#5B5BD6 50%,rgba(91,91,214,0.45) 70%,transparent)",
//         }} />
//         <div style={{
//             maxWidth: wide ? 1500 : 1400, margin: "0 auto",
//             padding: "28px 40px", display: "flex", gap: 36, alignItems: "flex-start",
//         }}>
//             {children}
//         </div>
//     </div>
// );

// /* ── Mega column ── */
// const MegaColumn = ({ title, badge, items, compact = false }) => (
//     <div className="ddl-mega-col" style={{ minWidth: compact ? 125 : 145 }}>
//         {badge && <MegaBadge text={badge} />}
//         <div style={{
//             fontSize: 9, fontWeight: 700, letterSpacing: "0.28em",
//             color: C.indigo, textTransform: "uppercase",
//             fontFamily: "Montserrat,sans-serif", marginBottom: 10,
//         }}>{title}</div>
//         <span className="ddl-col-rule" style={{ display: "block", marginBottom: 12 }} />
//         <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
//             {items.map((item, i) => (
//                 <li key={i} className="ddl-mega-item">
//                     <Link to={buildUrl(item)} className="mega-link">
//                         <span className="ml" />{item.label}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ── Mobile accordion ── */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//     <div>
//         <button onClick={toggle} style={{
//             width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
//             padding: "13px 24px",
//             fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
//             fontFamily: "Montserrat,sans-serif",
//             color: open ? C.indigo : C.navText,
//             borderBottom: "1px solid rgba(91,91,214,0.1)",
//             background: open ? "rgba(91,91,214,0.04)" : "transparent",
//             border: "none", cursor: "pointer",
//             transition: "color 0.2s, background 0.2s",
//         }}>
//             {title} <Chevron open={open} />
//         </button>
//         <div style={{
//             maxHeight: open ? 900 : 0, opacity: open ? 1 : 0,
//             overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.35s ease",
//         }}>
//             {Object.entries(sections).map(([sec, items], idx) => (
//                 <div key={idx} style={{ padding: "10px 36px", borderBottom: "1px solid rgba(91,91,214,0.06)" }}>
//                     <h4 style={{
//                         fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase",
//                         fontWeight: 700, color: C.indigoLt,
//                         fontFamily: "Montserrat,sans-serif", marginBottom: 8,
//                     }}>{sec}</h4>
//                     {items.map((item, i) => (
//                         <Link key={i} onClick={closeSidebar} to={buildUrl(item)} style={{
//                             display: "block", padding: "5px 0",
//                             fontSize: 11, textDecoration: "none", letterSpacing: "0.05em",
//                             color: C.linkText, fontFamily: "Montserrat,sans-serif",
//                             transition: "color 0.18s",
//                         }}
//                             onMouseEnter={e => e.currentTarget.style.color = C.indigo}
//                             onMouseLeave={e => e.currentTarget.style.color = C.linkText}
//                         >{item.label}</Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// /* ══════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════ */
// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);
//     const [mobileAccord, setMobileAccord] = useState(null);
//     const [profileOpen, setProfileOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
//     const hideRef = useRef(null);
//     const profileRef = useRef(null);

//     /* ── Reliable mobile detection via JS (not Tailwind purge) ── */
//     useEffect(() => {
//         const onResize = () => setIsMobile(window.innerWidth < 768);
//         window.addEventListener("resize", onResize);
//         return () => window.removeEventListener("resize", onResize);
//     }, []);

//     const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     /* close profile dropdown on outside click */
//     useEffect(() => {
//         const h = (e) => {
//             if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
//         };
//         if (profileOpen) document.addEventListener("mousedown", h);
//         return () => document.removeEventListener("mousedown", h);
//     }, [profileOpen]);

//     const logout = () => {
//         setProfileOpen(false); navigate("/login");
//         localStorage.removeItem("token"); setToken(""); setCartItems({});
//     };

//     const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 380); };
//     const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

//     /* close sidebar on route change */
//     useEffect(() => { setVisible(false); }, [navigate]);

//     return (
//         <>
//             <style>{ANIM_STYLES}</style>

//             <header style={{
//                 position: "sticky", top: 0,
//                 background: C.navBg,
//                 borderBottom: `1px solid ${C.navBorder}`,
//                 backdropFilter: "blur(12px)",
//                 WebkitBackdropFilter: "blur(12px)",
//                 zIndex: 9998, overflow: "visible",
//                 fontFamily: "Montserrat,sans-serif",
//                 boxShadow: "0 2px 20px rgba(91,91,214,0.07)",
//             }}>

//                 {/* ── TOP shimmer ── */}
//                 <div className="nav-shimmer" style={{ height: "1.5px" }} />

//                 <div style={{
//                     maxWidth: 1400, margin: "0 auto",
//                     overflow: "hidden",
//                     padding: "0 24px",
//                     display: "flex", alignItems: "center", justifyContent: "space-between",
//                     gap: 20, height: 62,
//                 }}>

//                     {/* ── LOGO ── */}
//                     <Link to="/" >
//                         <img className='h-[130px] w-[150px]' src={assets.DDL_logo} alt="" />
//                     </Link>

//                     {/* ── CENTER NAV (desktop only) ── */}
//                     <ul style={{
//                         listStyle: "none", margin: 0, padding: 0,
//                         display: isMobile ? "none" : "flex",
//                         alignItems: "center", gap: 28, flexShrink: 0,
//                     }}>
//                         <li>
//                             <NavLink to="/" className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
//                                 Home
//                             </NavLink>
//                         </li>

//                         {/* MEN */}
//                         <li style={{ position: "relative" }}
//                             onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
//                             <div className={`nav-link-item${activeMenu === "men" ? " active" : ""}`}>
//                                 Men <Chevron open={activeMenu === "men"} />
//                             </div>
//                             {activeMenu === "men" && (
//                                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Jackets" badge="MEN'S COLLECTION" items={[
//                                         { label: "Jackets", gender: "Men" },
//                                         { label: "Bomber Biker Jacket", gender: "Men" },
//                                         { label: "Moto Biker Jacket", gender: "Men" },
//                                         { label: "Racing Coat", gender: "Men" },
//                                         { label: "Leather Coats", gender: "Men" },
//                                         { label: "Men Winter Wear", gender: "Men" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Men" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                         { label: "Aprons", category: "Others", gender: "Men" },
//                                         { label: "Desk Mat", category: "Others", gender: "Men" },
//                                         { label: "Chair Cover", category: "Others", gender: "Men" },
//                                     ]} />
//                                     {/* image panel */}
//                                     <div className="ddl-mega-img-wrap" style={{
//                                         marginLeft: "auto", flexShrink: 0, width: 170,
//                                         position: "relative", overflow: "hidden", borderRadius: 6,
//                                         boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
//                                     }}>
//                                         <img src={assets.men_nav} alt="Men's Collection" style={{
//                                             width: "100%", height: 220, objectFit: "cover", display: "block",
//                                             filter: "brightness(0.82)", transition: "transform 0.5s",
//                                         }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
//                                                 style={{ borderColor: C.indigo, opacity: 0.6 }} />
//                                         ))}
//                                         <div style={{
//                                             position: "absolute", bottom: 0, left: 0, right: 0,
//                                             padding: "8px 12px", fontSize: 8, fontWeight: 700,
//                                             letterSpacing: "0.25em", textTransform: "uppercase",
//                                             textAlign: "center", color: "#fff",
//                                             background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
//                                         }}>Men's Collection</div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {/* WOMEN */}
//                         <li style={{ position: "relative" }}
//                             onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
//                             <div className={`nav-link-item${activeMenu === "women" ? " active" : ""}`}>
//                                 Women <Chevron open={activeMenu === "women"} />
//                             </div>
//                             {activeMenu === "women" && (
//                                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
//                                         { label: "Jackets", gender: "Women" },
//                                         { label: "Bomber Biker Jacket", gender: "Women" },
//                                         { label: "Moto Biker Jacket", gender: "Women" },
//                                         { label: "Racing Coat", gender: "Women" },
//                                         { label: "Women Winter Wear", gender: "Women" },
//                                         { label: "Women Night Dress", gender: "Women" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
//                                     <MegaColumn title="Bottoms" items={[
//                                         { label: "Leather Pencil Skirt", gender: "Women" },
//                                         { label: "Leather Full Skirt", gender: "Women" },
//                                         { label: "Slim Bodycon Skirt", gender: "Women" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Women" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                         { label: "Aprons", category: "Others", gender: "Women" },
//                                         { label: "Desk Mat", category: "Others", gender: "Women" },
//                                         { label: "Chair Cover", category: "Others", gender: "Women" },
//                                     ]} />
//                                     <div className="ddl-mega-img-wrap" style={{
//                                         marginLeft: "auto", flexShrink: 0, width: 170,
//                                         position: "relative", overflow: "hidden", borderRadius: 6,
//                                         boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
//                                     }}>
//                                         <img src={assets.women_nav} alt="Women's Collection" style={{
//                                             width: "100%", height: 220, objectFit: "cover", display: "block",
//                                             filter: "brightness(0.82)", transition: "transform 0.5s",
//                                         }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
//                                                 style={{ borderColor: C.indigo, opacity: 0.6 }} />
//                                         ))}
//                                         <div style={{
//                                             position: "absolute", bottom: 0, left: 0, right: 0,
//                                             padding: "8px 12px", fontSize: 8, fontWeight: 700,
//                                             letterSpacing: "0.25em", textTransform: "uppercase",
//                                             textAlign: "center", color: "#fff",
//                                             background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
//                                         }}>Women's Collection</div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {/* COLLECTION */}
//                         <li style={{ position: "relative" }}
//                             onMouseEnter={() => showMenu("collection")} onMouseLeave={hideMenu}>
//                             <div className={`nav-link-item${activeMenu === "collection" ? " active" : ""}`}>
//                                 Collection <Chevron open={activeMenu === "collection"} />
//                             </div>
//                             {activeMenu === "collection" && (
//                                 <MegaMenu showMenu={() => showMenu("collection")} hideMenu={hideMenu} wide>
//                                     <MegaColumn title="Men" badge="MEN'S" compact items={[
//                                         { label: "Jackets", gender: "Men" },
//                                         { label: "Bomber Biker Jacket", gender: "Men" },
//                                         { label: "Moto Biker Jacket", gender: "Men" },
//                                         { label: "Racing Coat", gender: "Men" },
//                                         { label: "Leather Coats", gender: "Men" },
//                                         { label: "Men Winter Wear", gender: "Men" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
//                                     <MegaColumn title="Women" badge="WOMEN'S" compact items={[
//                                         { label: "Jackets", gender: "Women" },
//                                         { label: "Bomber Biker Jacket", gender: "Women" },
//                                         { label: "Moto Biker Jacket", gender: "Women" },
//                                         { label: "Racing Coat", gender: "Women" },
//                                         { label: "Women Winter Wear", gender: "Women" },
//                                         { label: "Women Night Dress", gender: "Women" },
//                                         { label: "Leather Pencil Skirt", gender: "Women" },
//                                         { label: "Leather Full Skirt", gender: "Women" },
//                                         { label: "Slim Bodycon Skirt", gender: "Women" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
//                                     <MegaColumn title="Leather Pillows" compact items={[
//                                         { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
//                                     {/* Sofa & Desk + Apron + View All */}
//                                     <div className="ddl-mega-col" style={{ minWidth: 130, display: "flex", flexDirection: "column", gap: 18 }}>
//                                         {[
//                                             {
//                                                 heading: "Sofa & Desk", items: [
//                                                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                                 ]
//                                             },
//                                             {
//                                                 heading: "Apron", items: [
//                                                     { label: "Apron", directCategory: "Men Leather Apron" },
//                                                 ]
//                                             },
//                                         ].map((group, gi) => (
//                                             <div key={gi}>
//                                                 <div style={{
//                                                     fontSize: 9, fontWeight: 700, letterSpacing: "0.28em",
//                                                     color: C.indigo, textTransform: "uppercase",
//                                                     fontFamily: "Montserrat,sans-serif", marginBottom: 8,
//                                                 }}>{group.heading}</div>
//                                                 <span className="ddl-col-rule" style={{ display: "block", marginBottom: 10 }} />
//                                                 <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
//                                                     {group.items.map((item, i) => (
//                                                         <li key={i} className="ddl-mega-item">
//                                                             <Link to={buildUrl(item)} className="mega-link">
//                                                                 <span className="ml" />{item.label}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))}
//                                         <Link
//                                             to="/collection"
//                                             className="mega-view-all"
//                                             onMouseDown={e => e.preventDefault()}
//                                             onClick={() => setActiveMenu(null)}
//                                         >
//                                             <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//                                                 <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                             </svg>
//                                             View All
//                                         </Link>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
//                             <li key={to}>
//                                 <NavLink to={to} className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
//                                     {label}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* ── RIGHT ICONS ── */}
//                     <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>

//                         {/* Search */}
//                         <button className="nav-icon-btn" aria-label="Search"
//                             onClick={() => { setShowSearch(true); navigate("/collection"); }}>
//                             <IconSearch />
//                         </button>

//                         {/* Profile */}
//                         <div ref={profileRef} style={{ position: "relative" }}>
//                             <button className="nav-icon-btn" aria-label="Account"
//                                 onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}>
//                                 <IconUser />
//                             </button>
//                             {token && profileOpen && (
//                                 <div style={{
//                                     position: "absolute", top: "calc(100% + 10px)", right: 0,
//                                     minWidth: 185, zIndex: 999999,
//                                     background: "#FFFFFF",
//                                     border: `1px solid ${C.navBorder}`,
//                                     borderTop: `2px solid ${C.indigo}`,
//                                     borderRadius: 8,
//                                     boxShadow: "0 12px 40px rgba(91,91,214,0.15)",
//                                     animation: "megaIn 0.18s ease both",
//                                 }}>
//                                     <div style={{
//                                         padding: "11px 16px",
//                                         borderBottom: `1px solid rgba(91,91,214,0.1)`,
//                                         display: "flex", alignItems: "center", gap: 10,
//                                     }}>
//                                         <div style={{
//                                             width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
//                                             background: `linear-gradient(135deg,${C.indigoDk},${C.indigo})`,
//                                             display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
//                                         }}><IconUser /></div>
//                                         <span style={{
//                                             fontSize: 9, letterSpacing: "0.16em",
//                                             color: C.indigo, textTransform: "uppercase",
//                                             fontFamily: "Montserrat,sans-serif", fontWeight: 600,
//                                         }}>My Account</span>
//                                     </div>
//                                     {[
//                                         { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
//                                         { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
//                                         { label: "Logout", action: logout },
//                                     ].map(({ label, action }, i, arr) => (
//                                         <p key={label} onClick={action} style={{
//                                             margin: 0, padding: "10px 16px",
//                                             fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
//                                             cursor: "pointer", fontFamily: "Montserrat,sans-serif",
//                                             color: C.bodyText, fontWeight: 500,
//                                             borderBottom: i < arr.length - 1 ? "1px solid rgba(91,91,214,0.08)" : "none",
//                                             transition: "background 0.15s, color 0.15s, padding-left 0.15s",
//                                         }}
//                                             onMouseEnter={e => { e.currentTarget.style.background = "rgba(91,91,214,0.06)"; e.currentTarget.style.color = C.indigo; e.currentTarget.style.paddingLeft = "22px"; }}
//                                             onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.bodyText; e.currentTarget.style.paddingLeft = "16px"; }}
//                                         >{label}</p>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Wishlist */}
//                         <Link to="/wishlist" className="nav-icon-btn" aria-label="Wishlist" style={{ position: "relative" }}>
//                             <IconHeart />
//                             {wishlist?.length > 0 && (
//                                 <span style={{
//                                     position: "absolute", top: 2, right: 2,
//                                     minWidth: 15, height: 15, borderRadius: "50%",
//                                     display: "flex", alignItems: "center", justifyContent: "center",
//                                     fontSize: 7.5, fontWeight: 700,
//                                     background: C.indigo, color: "#fff",
//                                     fontFamily: "Montserrat,sans-serif",
//                                 }}>{wishlist.length}</span>
//                             )}
//                         </Link>

//                         {/* Cart */}
//                         <Link to="/cart" className="nav-icon-btn" aria-label="Cart" style={{ position: "relative" }}>
//                             <IconBag />
//                             <span style={{
//                                 position: "absolute", top: 2, right: 2,
//                                 minWidth: 15, height: 15, borderRadius: "50%",
//                                 display: "flex", alignItems: "center", justifyContent: "center",
//                                 fontSize: 7.5, fontWeight: 700,
//                                 background: C.indigo, color: "#fff",
//                                 fontFamily: "Montserrat,sans-serif",
//                             }}>{getCartCount()}</span>
//                         </Link>

//                         {/* Hamburger — JS isMobile (100% reliable, no Tailwind purge needed) */}
//                         {isMobile && (
//                             <button
//                                 className="nav-icon-btn"
//                                 aria-label="Menu"
//                                 onClick={() => setVisible(true)}
//                             >
//                                 <IconMenu />
//                             </button>
//                         )}
//                     </div>
//                 </div>

//                 {/* ── BOTTOM shimmer ── */}
//                 <div className="nav-shimmer" style={{ height: "1.5px" }} />

//                 {/* Mobile backdrop */}
//                 {visible && (
//                     <div
//                         onClick={() => setVisible(false)}
//                         style={{
//                             position: "fixed", inset: 0, zIndex: 99998,
//                             background: "rgba(30,27,75,0.30)",
//                             backdropFilter: "blur(4px)",
//                         }}
//                     />
//                 )}

//                 {/* ── MOBILE SIDEBAR ── */}
//                 <div style={{
//                     position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 99999,
//                     background: "#FFFFFF",
//                     borderLeft: `1px solid ${C.navBorder}`,
//                     boxShadow: visible ? "-12px 0 40px rgba(91,91,214,0.12)" : "none",
//                     width: visible ? "min(300px,85vw)" : 0,
//                     transition: "width 0.32s cubic-bezier(0.4,0,0.2,1)",
//                     maxWidth: "100vw",
//                     overflowX: "hidden", overflowY: "auto",
//                     fontFamily: "Montserrat,sans-serif",
//                 }}>
//                     {/* Sidebar header */}
//                     <div style={{
//                         display: "flex", alignItems: "center", justifyContent: "space-between",
//                         padding: "14px 20px",
//                         borderBottom: `1px solid rgba(91,91,214,0.1)`,
//                         background: "linear-gradient(135deg,#F8F7FF,#EEF0FF)",
//                     }}>
//                         <Link to="/" onClick={() => setVisible(false)} style={{
//                             display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
//                         }}>
//                             <DiamondIcon />
//                             <div>
//                                 <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.navText }}>
//                                     <span style={{ color: C.gold }}>D DOLLY</span> LAMB
//                                 </div>
//                                 <div style={{ fontSize: 7, letterSpacing: "0.3em", color: C.indigoLt, textTransform: "uppercase" }}>
//                                     ARTISAN ATELIER
//                                 </div>
//                             </div>
//                         </Link>
//                         <button onClick={() => setVisible(false)} style={{
//                             background: "rgba(91,91,214,0.08)", border: "none", cursor: "pointer",
//                             color: C.indigo, display: "flex", alignItems: "center", justifyContent: "center",
//                             width: 32, height: 32, borderRadius: 8,
//                             transition: "background 0.18s",
//                         }}
//                             onMouseEnter={e => e.currentTarget.style.background = "rgba(91,91,214,0.15)"}
//                             onMouseLeave={e => e.currentTarget.style.background = "rgba(91,91,214,0.08)"}
//                         ><IconClose /></button>
//                     </div>

//                     {/* Indigo shimmer stripe */}
//                     <div style={{
//                         height: 2,
//                         background: "linear-gradient(90deg,transparent,#5B5BD6 50%,transparent)",
//                         opacity: 0.45,
//                     }} />

//                     <NavLink className="mob-nav-link" to="/" onClick={() => setVisible(false)}>Home</NavLink>

//                     <MobileAccordion title="Men" open={mobileAccord === "men"}
//                         toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//                         sections={{
//                             JACKETS: [
//                                 { label: "Jackets", gender: "Men" },
//                                 { label: "Bomber Biker Jacket", gender: "Men" },
//                                 { label: "Moto Biker Jacket", gender: "Men" },
//                                 { label: "Racing Coat", gender: "Men" },
//                                 { label: "Leather Coats", gender: "Men" },
//                                 { label: "Men Winter Wear", gender: "Men" },
//                             ],
//                             "HOME & LIFESTYLE": [
//                                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                 { label: "Apron", directCategory: "Men Leather Apron" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Men" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                 { label: "Aprons", category: "Others", gender: "Men" },
//                                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                                 { label: "Chair Cover", category: "Others", gender: "Men" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     <MobileAccordion title="Women" open={mobileAccord === "women"}
//                         toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
//                         sections={{
//                             TOPS: [
//                                 { label: "Jackets", gender: "Women" },
//                                 { label: "Bomber Biker Jacket", gender: "Women" },
//                                 { label: "Moto Biker Jacket", gender: "Women" },
//                                 { label: "Racing Coat", gender: "Women" },
//                                 { label: "Women Winter Wear", gender: "Women" },
//                                 { label: "Women Night Dress", gender: "Women" },
//                             ],
//                             BOTTOMS: [
//                                 { label: "Leather Pencil Skirt", gender: "Women" },
//                                 { label: "Leather Full Skirt", gender: "Women" },
//                                 { label: "Slim Bodycon Skirt", gender: "Women" },
//                             ],
//                             "HOME & LIFESTYLE": [
//                                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Women" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                 { label: "Aprons", category: "Others", gender: "Women" },
//                                 { label: "Desk Mat", category: "Others", gender: "Women" },
//                                 { label: "Chair Cover", category: "Others", gender: "Women" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     <MobileAccordion title="Collection" open={mobileAccord === "collection"}
//                         toggle={() => setMobileAccord(mobileAccord === "collection" ? null : "collection")}
//                         sections={{
//                             "LEATHER PILLOWS": [
//                                 { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                 { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//                             ],
//                             "SOFA & DESK": [
//                                 { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                 { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                 { label: "Apron", directCategory: "Men Leather Apron" },
//                             ],
//                             OTHERS: [
//                                 { label: "Pillow", category: "Others", gender: "Men" },
//                                 { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                 { label: "Aprons", category: "Others", gender: "Men" },
//                                 { label: "Desk Mat", category: "Others", gender: "Men" },
//                                 { label: "Chair Cover", category: "Others", gender: "Men" },
//                             ],
//                         }}
//                         closeSidebar={() => setVisible(false)}
//                     />

//                     {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
//                         <NavLink key={to} className="mob-nav-link" to={to} onClick={() => setVisible(false)}>
//                             {label}
//                         </NavLink>
//                     ))}

//                     {/* Bottom CTA */}
//                     <div style={{ padding: "20px", borderTop: "1px solid rgba(91,91,214,0.1)", marginTop: 8 }}>
//                         <Link to="/collection" onClick={() => setVisible(false)} style={{
//                             display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
//                             padding: "12px 20px", textDecoration: "none",
//                             background: `linear-gradient(135deg,${C.indigoDk},${C.indigo})`,
//                             color: "#fff", borderRadius: 8,
//                             fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
//                             textTransform: "uppercase", fontFamily: "Montserrat,sans-serif",
//                             boxShadow: "0 4px 16px rgba(91,91,214,0.30)",
//                         }}>
//                             Shop the Collection →
//                         </Link>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// };

// export default Navbar;





// import React, { useContext, useState, useRef, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /*
//   ═══════════════════════════════════════════════
//   COLOR SYSTEM — converted from dark brown → indigo/white
//   -----------------------------------------------
//   OLD (removed):
//     bg:         #1a0f0a  dark brown-black
//     accent:     #c8924a / #f7c568  gold
//     text:       #f0e6d8  ivory
//     border:     rgba(200,146,74,0.18)  gold

//   NEW (professional light indigo):
//     bg:         #FFFFFF / rgba(255,255,255,0.97)
//     accent:     #5B5BD6  indigo
//     accent lt:  #818CF8  indigo light
//     accent dk:  #4338CA  indigo dark
//     text:       #1E1B4B  deep navy
//     border:     rgba(91,91,214,0.15)
//     mega bg:    #FFFFFF → #F8F7FF
//     gold:       #C8924A  KEPT for brand diamond logo only
//   ═══════════════════════════════════════════════
// */

// /* ── SVG Icons ── */
// const IconSearch = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconUser = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconHeart = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//             stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
//     </svg>
// );
// const IconBag = () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//         <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//         <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconMenu = () => (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//         <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconClose = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//         <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );

// /* ── Animations & global styles ── */
// const ANIM_STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

//   @keyframes megaIn {
//     from { opacity: 0; transform: translateY(-8px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes colIn {
//     from { opacity: 0; transform: translateY(10px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes lineExpand {
//     from { width: 0; }
//     to   { width: 100%; }
//   }
//   @keyframes imgReveal {
//     from { opacity: 0; transform: scale(1.05); }
//     to   { opacity: 1; transform: scale(1); }
//   }
//   @keyframes itemSlide {
//     from { opacity: 0; transform: translateX(-8px); }
//     to   { opacity: 1; transform: translateX(0); }
//   }
//   @keyframes shimmerIndigo {
//     0%   { background-position: -200% center; }
//     100% { background-position:  200% center; }
//   }

//   /* ── Shimmer bar — indigo ── */
//   .nav-shimmer {
//     background: linear-gradient(90deg,
//       transparent 0%,
//       rgba(91,91,214,0.25) 15%,
//       #5B5BD6 40%,
//       #818CF8 50%,
//       #5B5BD6 60%,
//       rgba(91,91,214,0.25) 85%,
//       transparent 100%);
//     background-size: 200% auto;
//     animation: shimmerIndigo 3.5s linear infinite;
//   }

//   /* ── Mega menu ── */
//   .ddl-mega     { animation: megaIn 0.22s cubic-bezier(0.16,1,0.3,1) both; }
//   .ddl-mega-col { animation: colIn 0.32s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay: 0.08s; }
//   .ddl-mega-col:nth-child(3) { animation-delay: 0.12s; }
//   .ddl-mega-col:nth-child(4) { animation-delay: 0.16s; }
//   .ddl-mega-col:nth-child(5) { animation-delay: 0.20s; }

//   .ddl-col-rule {
//     display: block; height: 1px; width: 0;
//     background: linear-gradient(to right, #5B5BD6, transparent);
//     animation: lineExpand 0.45s ease 0.08s both;
//   }
//   .ddl-mega-img-wrap { animation: imgReveal 0.4s ease 0.06s both; }
//   .ddl-mega-item     { animation: itemSlide 0.28s ease both; }
//   .ddl-mega-item:nth-child(1) { animation-delay: 0.08s; }
//   .ddl-mega-item:nth-child(2) { animation-delay: 0.12s; }
//   .ddl-mega-item:nth-child(3) { animation-delay: 0.16s; }
//   .ddl-mega-item:nth-child(4) { animation-delay: 0.20s; }
//   .ddl-mega-item:nth-child(5) { animation-delay: 0.24s; }
//   .ddl-mega-item:nth-child(6) { animation-delay: 0.28s; }

//   /* ── Nav link item ── */
//   .nav-link-item {
//     position: relative;
//     display: inline-flex; align-items: center; gap: 5px;
//     padding-bottom: 3px;
//     font-size: 11px; font-weight: 600;
//     letter-spacing: 0.16em; text-transform: uppercase;
//     cursor: pointer; text-decoration: none;
//     color: #1E1B4B;
//     transition: color 0.2s;
//     font-family: 'Montserrat', sans-serif;
//     white-space: nowrap;
//   }
//   .nav-link-item::after {
//     content: '';
//     position: absolute; bottom: 0; left: 0;
//     height: 1.5px; width: 0;
//     background: linear-gradient(90deg, #4338CA, #5B5BD6, #818CF8);
//     border-radius: 2px;
//     transition: width 0.28s ease;
//   }
//   .nav-link-item:hover         { color: #5B5BD6; }
//   .nav-link-item:hover::after  { width: 100%; }
//   .nav-link-item.active        { color: #5B5BD6; }
//   .nav-link-item.active::after { width: 100%; }

//   /* ── Mega link ── */
//   .mega-link {
//     display: flex; align-items: center; gap: 8px;
//     font-size: 12px; letter-spacing: 0.03em;
//     text-decoration: none; font-weight: 500;
//     color: #1E1B4B;
//     font-family: 'Montserrat', sans-serif;
//     transition: color 0.18s, padding-left 0.18s;
//   }
//   .mega-link:hover { color: #5B5BD6; padding-left: 4px; }
//   .mega-link .ml {
//     display: inline-block; width: 10px; height: 1px;
//     background: #1E1B4B; flex-shrink: 0;
//     transition: width 0.18s, background 0.18s;
//   }
//   .mega-link:hover .ml { width: 14px; background: #5B5BD6; }

//   /* ── Icon button ── */
//   .nav-icon-btn {
//     background: transparent; border: none; cursor: pointer;
//     color: #4B5563;
//     display: flex; align-items: center; justify-content: center;
//     padding: 7px; margin: -7px; border-radius: 8px;
//     transition: color 0.18s, background 0.18s;
//     text-decoration: none; position: relative;
//   }
//   .nav-icon-btn:hover { color: #5B5BD6; background: rgba(91,91,214,0.08); }

//   /* ── Mobile nav link ── */
//   .mob-nav-link {
//     display: block; padding: 13px 24px;
//     font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
//     text-transform: uppercase; text-decoration: none;
//     color: #1E1B4B; font-family: 'Montserrat', sans-serif;
//     border-bottom: 1px solid rgba(91,91,214,0.08);
//     transition: color 0.2s, padding-left 0.2s, background 0.2s;
//   }
//   .mob-nav-link:hover,
//   .mob-nav-link.active { color: #5B5BD6; padding-left: 32px; background: rgba(91,91,214,0.04); }

//   /* ── View All btn ── */
//   .mega-view-all {
//     display: flex; align-items: center; gap: 8px;
//     padding: 9px 12px; text-decoration: none;
//     font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
//     font-family: 'Montserrat', sans-serif; font-weight: 600;
//     color: #5B5BD6; border: 1.5px solid rgba(91,91,214,0.3);
//     border-radius: 4px; margin-top: auto;
//     transition: background 0.2s, border-color 0.2s, color 0.2s;
//   }
//   .mega-view-all:hover { background: rgba(91,91,214,0.08); border-color: #5B5BD6; }

//   /* ── Mobile accordion button ── */
//   .mob-accord-btn {
//     width: 100%; display: flex; align-items: center; justify-content: space-between;
//     padding: 13px 24px;
//     font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
//     font-family: 'Montserrat', sans-serif;
//     border: none; cursor: pointer;
//     transition: color 0.2s, background 0.2s;
//   }

//   /* body scroll lock when sidebar open */
//   body.sidebar-open { overflow: hidden; }
// `;

// /* ── Brand diamond — gold kept for identity ── */
// const DiamondIcon = () => (
//     <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
//         <rect x="6" y="6" width="30" height="30" rx="1"
//             transform="rotate(45 21 21)" stroke="#8A5E2D" strokeWidth="1.4" fill="none" />
//         <rect x="11" y="11" width="20" height="20" rx="0.5"
//             transform="rotate(45 21 21)" stroke="#C8924A" strokeWidth="0.7" fill="none" opacity="0.4" />
//         <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
//             fontSize="13" fontWeight="600" fill="#C8924A" textAnchor="middle">D</text>
//     </svg>
// );

// /* ── MegaBadge — indigo ── */
// const MegaBadge = ({ text }) => (
//     <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14, marginTop: 2 }}>
//         <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
//             <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
//                 stroke="#5B5BD6" strokeWidth="1" fill="rgba(91,91,214,0.12)" strokeLinejoin="round" />
//         </svg>
//         <span style={{
//             fontSize: 8, letterSpacing: "0.28em",
//             fontFamily: "Montserrat,sans-serif", fontWeight: 700,
//             textTransform: "uppercase", color: "#818CF8",
//         }}>{text}</span>
//     </div>
// );

// /* ── Chevron ── */
// const Chevron = ({ open }) => (
//     <span style={{
//         display: "inline-block", width: 5, height: 5, flexShrink: 0,
//         borderRight: "1.5px solid currentColor", borderBottom: "1.5px solid currentColor",
//         transform: open ? "rotate(-135deg) translateY(2px)" : "rotate(45deg) translateY(-1px)",
//         transition: "transform 0.22s",
//     }} />
// );

// /* ── URL builder ── */
// const buildUrl = (item) => {
//     if (item.category === "Others" || item.directCategory)
//         return `/collection?category=${encodeURIComponent(item.directCategory || "Others")}&sub=${encodeURIComponent(item.label)}`;
//     return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
// };

// /* ── Corner accents — indigo ── */
// const corners = [
//     { pos: "top-2 left-2", b: "border-t-[1.5px] border-l-[1.5px]" },
//     { pos: "top-2 right-2", b: "border-t-[1.5px] border-r-[1.5px]" },
//     { pos: "bottom-2 left-2", b: "border-b-[1.5px] border-l-[1.5px]" },
//     { pos: "bottom-2 right-2", b: "border-b-[1.5px] border-r-[1.5px]" },
// ];

// /* ── Mega menu wrapper — WHITE bg ── */
// const MegaMenu = ({ children, showMenu, hideMenu, wide = false }) => (
//     <div
//         className="ddl-mega"
//         style={{
//             position: "fixed", left: 0, right: 0, top: 64, zIndex: 9998,
//             background: "linear-gradient(180deg,#FFFFFF 0%,#F8F7FF 100%)",
//             borderTop: "1px solid rgba(91,91,214,0.15)",
//             borderBottom: "1px solid rgba(91,91,214,0.15)",
//             boxShadow: "0 16px 48px rgba(91,91,214,0.10), 0 4px 16px rgba(0,0,0,0.05)",
//         }}
//         onMouseEnter={showMenu}
//         onMouseLeave={hideMenu}
//     >
//         {/* Indigo accent top line */}
//         <div style={{
//             height: 1,
//             background: "linear-gradient(90deg,transparent,rgba(91,91,214,0.45) 30%,#5B5BD6 50%,rgba(91,91,214,0.45) 70%,transparent)",
//         }} />
//         <div style={{
//             maxWidth: wide ? 1500 : 1400, margin: "0 auto",
//             padding: "28px 40px", display: "flex", gap: 36, alignItems: "flex-start",
//         }}>
//             {children}
//         </div>
//     </div>
// );

// /* ── Mega column ── */
// const MegaColumn = ({ title, badge, items, compact = false }) => (
//     <div className="ddl-mega-col" style={{ minWidth: compact ? 125 : 145 }}>
//         {badge && <MegaBadge text={badge} />}
//         <div style={{
//             fontSize: 9, fontWeight: 700, letterSpacing: "0.28em",
//             color: "#5B5BD6", textTransform: "uppercase",
//             fontFamily: "Montserrat,sans-serif", marginBottom: 10,
//         }}>{title}</div>
//         <span className="ddl-col-rule" style={{ display: "block", marginBottom: 12 }} />
//         <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
//             {items.map((item, i) => (
//                 <li key={i} className="ddl-mega-item">
//                     <Link to={buildUrl(item)} className="mega-link">
//                         <span className="ml" />{item.label}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ── Mobile accordion ── */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//     <div>
//         <button
//             onClick={toggle}
//             className="mob-accord-btn"
//             style={{
//                 color: open ? "#5B5BD6" : "#1E1B4B",
//                 background: open ? "rgba(91,91,214,0.04)" : "transparent",
//                 borderBottom: "1px solid rgba(91,91,214,0.10)",
//             }}
//         >
//             {title} <Chevron open={open} />
//         </button>
//         <div style={{
//             maxHeight: open ? 900 : 0, opacity: open ? 1 : 0,
//             overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.35s ease",
//         }}>
//             {Object.entries(sections).map(([sec, items], idx) => (
//                 <div key={idx} style={{ padding: "10px 36px", borderBottom: "1px solid rgba(91,91,214,0.06)" }}>
//                     <h4 style={{
//                         fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase",
//                         fontWeight: 700, color: "#818CF8",
//                         fontFamily: "Montserrat,sans-serif", marginBottom: 8,
//                     }}>{sec}</h4>
//                     {items.map((item, i) => (
//                         <Link
//                             key={i}
//                             onClick={closeSidebar}
//                             to={buildUrl(item)}
//                             style={{
//                                 display: "block", padding: "5px 0",
//                                 fontSize: 11, textDecoration: "none", letterSpacing: "0.05em",
//                                 color: "#4B5563", fontFamily: "Montserrat,sans-serif",
//                                 transition: "color 0.18s",
//                             }}
//                             onMouseEnter={e => e.currentTarget.style.color = "#5B5BD6"}
//                             onMouseLeave={e => e.currentTarget.style.color = "#4B5563"}
//                         >{item.label}</Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// /* ══════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════ */
// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);
//     const [mobileAccord, setMobileAccord] = useState(null);
//     const [profileOpen, setProfileOpen] = useState(false);

//     /* ✅ FIX: reliable isMobile — lazy init + useEffect sync */
//     const [isMobile, setIsMobile] = useState(() =>
//         typeof window !== "undefined" ? window.innerWidth < 768 : false
//     );

//     const hideRef = useRef(null);
//     const profileRef = useRef(null);

//     useEffect(() => {
//         const onResize = () => setIsMobile(window.innerWidth < 768);
//         window.addEventListener("resize", onResize);
//         onResize();
//         return () => window.removeEventListener("resize", onResize);
//     }, []);

//     /* ✅ FIX: body scroll lock when sidebar open */
//     useEffect(() => {
//         document.body.classList.toggle("sidebar-open", visible);
//         return () => document.body.classList.remove("sidebar-open");
//     }, [visible]);

//     const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     /* Close profile dropdown on outside click */
//     useEffect(() => {
//         const h = (e) => {
//             if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
//         };
//         if (profileOpen) document.addEventListener("mousedown", h);
//         return () => document.removeEventListener("mousedown", h);
//     }, [profileOpen]);

//     const logout = () => {
//         setProfileOpen(false);
//         navigate("/login");
//         localStorage.removeItem("token");
//         setToken(""); setCartItems({});
//     };

//     const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 380); };
//     const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

//     /* ✅ FIX: closeSidebar resets accordion too */
//     const closeSidebar = () => { setVisible(false); setMobileAccord(null); };

//     return (
//         <>
//             <style>{ANIM_STYLES}</style>

//             {/* ── HEADER — white bg ── */}
//             <header style={{
//                 position: "sticky", top: 0,
//                 background: "rgba(255,255,255,0.97)",
//                 borderBottom: "1px solid rgba(91,91,214,0.15)",
//                 backdropFilter: "blur(12px)",
//                 WebkitBackdropFilter: "blur(12px)",
//                 zIndex: 9998, overflow: "visible",
//                 fontFamily: "Montserrat,sans-serif",
//                 boxShadow: "0 2px 20px rgba(91,91,214,0.07)",
//             }}>

//                 {/* Top shimmer */}
//                 <div className="nav-shimmer" style={{ height: "1.5px" }} />

//                 <div style={{
//                     maxWidth: 1400, margin: "0 auto",
//                     padding: "0 24px",
//                     display: "flex", alignItems: "center", justifyContent: "space-between",
//                     gap: 20, height: 62,
//                 }}>

//                     {/* ── LOGO ── */}
//                     <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
//                         <DiamondIcon />
//                         <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
//                             <span style={{
//                                 fontSize: "clamp(10px,2vw,13px)", fontWeight: 700,
//                                 letterSpacing: "0.22em", color: "#1E1B4B",
//                                 textTransform: "uppercase", fontFamily: "Montserrat,sans-serif",
//                                 whiteSpace: "nowrap",
//                             }}>
//                                 <span style={{ color: "#C8924A" }}>D DOLLY</span> LAMB
//                             </span>
//                             <span style={{
//                                 display: "block", height: 1, margin: "3px 0",
//                                 background: "linear-gradient(to right, rgba(91,91,214,0.4), transparent)",
//                             }} />
//                             <span style={{
//                                 fontSize: "clamp(6px,1.2vw,8px)", letterSpacing: "0.38em",
//                                 color: "#818CF8", textTransform: "uppercase",
//                                 fontFamily: "Montserrat,sans-serif", whiteSpace: "nowrap",
//                             }}>
//                                 ARTISAN ATELIER
//                             </span>
//                         </div>
//                     </Link>

//                     {/* ── CENTER NAV — desktop only ── */}
//                     <ul style={{
//                         listStyle: "none", margin: 0, padding: 0,
//                         display: isMobile ? "none" : "flex",
//                         alignItems: "center", gap: 28, flexShrink: 0,
//                     }}>
//                         <li>
//                             <NavLink to="/" className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
//                                 Home
//                             </NavLink>
//                         </li>

//                         {/* MEN */}
//                         <li style={{ position: "relative" }}
//                             onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
//                             <div className={`nav-link-item${activeMenu === "men" ? " active" : ""}`}>
//                                 Men <Chevron open={activeMenu === "men"} />
//                             </div>
//                             {activeMenu === "men" && (
//                                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Jackets" badge="MEN'S COLLECTION" items={[
//                                         { label: "Jackets", gender: "Men" },
//                                         { label: "Bomber Biker Jacket", gender: "Men" },
//                                         { label: "Moto Biker Jacket", gender: "Men" },
//                                         { label: "Racing Coat", gender: "Men" },
//                                         { label: "Leather Coats", gender: "Men" },
//                                         { label: "Men Winter Wear", gender: "Men" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: "rgba(91,91,214,0.15)" }} />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Men" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                         { label: "Aprons", category: "Others", gender: "Men" },
//                                         { label: "Desk Mat", category: "Others", gender: "Men" },
//                                         { label: "Chair Cover", category: "Others", gender: "Men" },
//                                     ]} />
//                                     {/* Image panel */}
//                                     <div className="ddl-mega-img-wrap" style={{
//                                         marginLeft: "auto", flexShrink: 0, width: 170,
//                                         position: "relative", overflow: "hidden", borderRadius: 6,
//                                         boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
//                                     }}>
//                                         <img src={assets.men_nav} alt="Men's Collection" style={{
//                                             width: "100%", height: 220, objectFit: "cover", display: "block",
//                                             filter: "brightness(0.82)", transition: "transform 0.5s",
//                                         }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
//                                                 style={{ borderColor: "#5B5BD6", opacity: 0.6 }} />
//                                         ))}
//                                         <div style={{
//                                             position: "absolute", bottom: 0, left: 0, right: 0,
//                                             padding: "8px 12px", fontSize: 8, fontWeight: 700,
//                                             letterSpacing: "0.25em", textTransform: "uppercase",
//                                             textAlign: "center", color: "#fff",
//                                             background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
//                                         }}>Men's Collection</div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {/* WOMEN */}
//                         <li style={{ position: "relative" }}
//                             onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
//                             <div className={`nav-link-item${activeMenu === "women" ? " active" : ""}`}>
//                                 Women <Chevron open={activeMenu === "women"} />
//                             </div>
//                             {activeMenu === "women" && (
//                                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                                     <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
//                                         { label: "Jackets", gender: "Women" },
//                                         { label: "Bomber Biker Jacket", gender: "Women" },
//                                         { label: "Moto Biker Jacket", gender: "Women" },
//                                         { label: "Racing Coat", gender: "Women" },
//                                         { label: "Women Winter Wear", gender: "Women" },
//                                         { label: "Women Night Dress", gender: "Women" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: "rgba(91,91,214,0.15)" }} />
//                                     <MegaColumn title="Bottoms" items={[
//                                         { label: "Leather Pencil Skirt", gender: "Women" },
//                                         { label: "Leather Full Skirt", gender: "Women" },
//                                         { label: "Slim Bodycon Skirt", gender: "Women" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: "rgba(91,91,214,0.15)" }} />
//                                     <MegaColumn title="Others" items={[
//                                         { label: "Pillow", category: "Others", gender: "Women" },
//                                         { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                         { label: "Aprons", category: "Others", gender: "Women" },
//                                         { label: "Desk Mat", category: "Others", gender: "Women" },
//                                         { label: "Chair Cover", category: "Others", gender: "Women" },
//                                     ]} />
//                                     <div className="ddl-mega-img-wrap" style={{
//                                         marginLeft: "auto", flexShrink: 0, width: 170,
//                                         position: "relative", overflow: "hidden", borderRadius: 6,
//                                         boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
//                                     }}>
//                                         <img src={assets.women_nav} alt="Women's Collection" style={{
//                                             width: "100%", height: 220, objectFit: "cover", display: "block",
//                                             filter: "brightness(0.82)", transition: "transform 0.5s",
//                                         }}
//                                             onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
//                                             onMouseLeave={e => e.target.style.transform = "scale(1)"}
//                                         />
//                                         {corners.map((c, i) => (
//                                             <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
//                                                 style={{ borderColor: "#5B5BD6", opacity: 0.6 }} />
//                                         ))}
//                                         <div style={{
//                                             position: "absolute", bottom: 0, left: 0, right: 0,
//                                             padding: "8px 12px", fontSize: 8, fontWeight: 700,
//                                             letterSpacing: "0.25em", textTransform: "uppercase",
//                                             textAlign: "center", color: "#fff",
//                                             background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
//                                         }}>Women's Collection</div>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {/* COLLECTION */}
//                         <li style={{ position: "relative" }}
//                             onMouseEnter={() => showMenu("collection")} onMouseLeave={hideMenu}>
//                             <div className={`nav-link-item${activeMenu === "collection" ? " active" : ""}`}>
//                                 Collection <Chevron open={activeMenu === "collection"} />
//                             </div>
//                             {activeMenu === "collection" && (
//                                 <MegaMenu showMenu={() => showMenu("collection")} hideMenu={hideMenu} wide>
//                                     <MegaColumn title="Men" badge="MEN'S" compact items={[
//                                         { label: "Jackets", gender: "Men" },
//                                         { label: "Bomber Biker Jacket", gender: "Men" },
//                                         { label: "Moto Biker Jacket", gender: "Men" },
//                                         { label: "Racing Coat", gender: "Men" },
//                                         { label: "Leather Coats", gender: "Men" },
//                                         { label: "Men Winter Wear", gender: "Men" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: "rgba(91,91,214,0.15)" }} />
//                                     <MegaColumn title="Women" badge="WOMEN'S" compact items={[
//                                         { label: "Jackets", gender: "Women" },
//                                         { label: "Bomber Biker Jacket", gender: "Women" },
//                                         { label: "Moto Biker Jacket", gender: "Women" },
//                                         { label: "Racing Coat", gender: "Women" },
//                                         { label: "Women Winter Wear", gender: "Women" },
//                                         { label: "Women Night Dress", gender: "Women" },
//                                         { label: "Leather Pencil Skirt", gender: "Women" },
//                                         { label: "Leather Full Skirt", gender: "Women" },
//                                         { label: "Slim Bodycon Skirt", gender: "Women" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: "rgba(91,91,214,0.15)" }} />
//                                     <MegaColumn title="Leather Pillows" compact items={[
//                                         { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                         { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//                                     ]} />
//                                     <div style={{ width: 1, alignSelf: "stretch", background: "rgba(91,91,214,0.15)" }} />
//                                     <div className="ddl-mega-col" style={{ minWidth: 130, display: "flex", flexDirection: "column", gap: 18 }}>
//                                         {[
//                                             {
//                                                 heading: "Sofa & Desk", items: [
//                                                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                                 ]
//                                             },
//                                             {
//                                                 heading: "Apron", items: [
//                                                     { label: "Apron", directCategory: "Men Leather Apron" },
//                                                 ]
//                                             },
//                                         ].map((group, gi) => (
//                                             <div key={gi}>
//                                                 <div style={{
//                                                     fontSize: 9, fontWeight: 700, letterSpacing: "0.28em",
//                                                     color: "#5B5BD6", textTransform: "uppercase",
//                                                     fontFamily: "Montserrat,sans-serif", marginBottom: 8,
//                                                 }}>{group.heading}</div>
//                                                 <span className="ddl-col-rule" style={{ display: "block", marginBottom: 10 }} />
//                                                 <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
//                                                     {group.items.map((item, i) => (
//                                                         <li key={i} className="ddl-mega-item">
//                                                             <Link to={buildUrl(item)} className="mega-link">
//                                                                 <span className="ml" />{item.label}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))}
//                                         <Link
//                                             to="/collection"
//                                             className="mega-view-all"
//                                             onMouseDown={e => e.preventDefault()}
//                                             onClick={() => setActiveMenu(null)}
//                                         >
//                                             <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//                                                 <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                             </svg>
//                                             View All
//                                         </Link>
//                                     </div>
//                                 </MegaMenu>
//                             )}
//                         </li>

//                         {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
//                             <li key={to}>
//                                 <NavLink to={to} className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
//                                     {label}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* ── RIGHT ICONS ── */}
//                     <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>

//                         {/* Search */}
//                         <button className="nav-icon-btn" aria-label="Search"
//                             onClick={() => { setShowSearch(true); navigate("/collection"); }}>
//                             <IconSearch />
//                         </button>

//                         {/* Profile */}
//                         <div ref={profileRef} style={{ position: "relative" }}>
//                             <button className="nav-icon-btn" aria-label="Account"
//                                 onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}>
//                                 <IconUser />
//                             </button>
//                             {token && profileOpen && (
//                                 <div style={{
//                                     position: "absolute", top: "calc(100% + 10px)", right: 0,
//                                     minWidth: 185, zIndex: 999999,
//                                     background: "#FFFFFF",
//                                     border: "1px solid rgba(91,91,214,0.18)",
//                                     borderTop: "2px solid #5B5BD6",
//                                     borderRadius: 8,
//                                     boxShadow: "0 12px 40px rgba(91,91,214,0.15)",
//                                     animation: "megaIn 0.18s ease both",
//                                 }}>
//                                     <div style={{
//                                         padding: "11px 16px",
//                                         borderBottom: "1px solid rgba(91,91,214,0.10)",
//                                         display: "flex", alignItems: "center", gap: 10,
//                                     }}>
//                                         <div style={{
//                                             width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
//                                             background: "linear-gradient(135deg,#4338CA,#5B5BD6)",
//                                             display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
//                                         }}><IconUser /></div>
//                                         <span style={{
//                                             fontSize: 9, letterSpacing: "0.16em", color: "#5B5BD6",
//                                             textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", fontWeight: 600,
//                                         }}>My Account</span>
//                                     </div>
//                                     {[
//                                         { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
//                                         { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
//                                         { label: "Logout", action: logout },
//                                     ].map(({ label, action }, i, arr) => (
//                                         <p key={label} onClick={action} style={{
//                                             margin: 0, padding: "10px 16px",
//                                             fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
//                                             cursor: "pointer", fontFamily: "Montserrat,sans-serif",
//                                             color: "#4B5563", fontWeight: 500,
//                                             borderBottom: i < arr.length - 1 ? "1px solid rgba(91,91,214,0.08)" : "none",
//                                             transition: "background 0.15s, color 0.15s, padding-left 0.15s",
//                                         }}
//                                             onMouseEnter={e => {
//                                                 e.currentTarget.style.background = "rgba(91,91,214,0.06)";
//                                                 e.currentTarget.style.color = "#5B5BD6";
//                                                 e.currentTarget.style.paddingLeft = "22px";
//                                             }}
//                                             onMouseLeave={e => {
//                                                 e.currentTarget.style.background = "transparent";
//                                                 e.currentTarget.style.color = "#4B5563";
//                                                 e.currentTarget.style.paddingLeft = "16px";
//                                             }}
//                                         >{label}</p>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Wishlist */}
//                         <Link to="/wishlist" className="nav-icon-btn" aria-label="Wishlist" style={{ position: "relative" }}>
//                             <IconHeart />
//                             {wishlist?.length > 0 && (
//                                 <span style={{
//                                     position: "absolute", top: 2, right: 2,
//                                     minWidth: 15, height: 15, borderRadius: "50%",
//                                     display: "flex", alignItems: "center", justifyContent: "center",
//                                     fontSize: 7.5, fontWeight: 700,
//                                     background: "#5B5BD6", color: "#fff",
//                                     fontFamily: "Montserrat,sans-serif",
//                                 }}>{wishlist.length}</span>
//                             )}
//                         </Link>

//                         {/* Cart */}
//                         <Link to="/cart" className="nav-icon-btn" aria-label="Cart" style={{ position: "relative" }}>
//                             <IconBag />
//                             <span style={{
//                                 position: "absolute", top: 2, right: 2,
//                                 minWidth: 15, height: 15, borderRadius: "50%",
//                                 display: "flex", alignItems: "center", justifyContent: "center",
//                                 fontSize: 7.5, fontWeight: 700,
//                                 background: "#5B5BD6", color: "#fff",
//                                 fontFamily: "Montserrat,sans-serif",
//                             }}>{getCartCount()}</span>
//                         </Link>

//                         {/* ✅ Hamburger — isMobile state, touchAction fix */}
//                         {isMobile && (
//                             <button
//                                 className="nav-icon-btn"
//                                 aria-label="Open Menu"
//                                 onClick={() => setVisible(true)}
//                                 style={{ touchAction: "manipulation" }}
//                             >
//                                 <IconMenu />
//                             </button>
//                         )}
//                     </div>
//                 </div>

//                 {/* Bottom shimmer */}
//                 <div className="nav-shimmer" style={{ height: "1.5px" }} />

//             </header>

//             {/* ✅ PORTAL — renders backdrop + sidebar directly on document.body
//           This ESCAPES the header's backdropFilter stacking context which
//           was trapping position:fixed children inside the header bounds.
//           createPortal is the ONLY reliable fix for this CSS limitation. */}
//             {createPortal(
//                 <>
//                     {/* Backdrop */}
//                     {visible && (
//                         <div
//                             onClick={closeSidebar}
//                             style={{
//                                 position: "fixed", inset: 0, zIndex: 99997,
//                                 background: "rgba(30,27,75,0.35)",
//                                 backdropFilter: "blur(3px)",
//                                 WebkitBackdropFilter: "blur(3px)",
//                                 animation: "megaIn 0.2s ease both",
//                             }}
//                         />
//                     )}

//                     {/* MOBILE SIDEBAR */}
//                     <div style={{
//                         position: "fixed", top: 0, right: 0, bottom: 0,
//                         zIndex: 99999,
//                         background: "#FFFFFF",
//                         borderLeft: "1px solid rgba(91,91,214,0.15)",
//                         boxShadow: visible ? "-12px 0 40px rgba(91,91,214,0.15)" : "none",
//                         width: "300px",
//                         maxWidth: "85vw",
//                         transform: visible ? "translateX(0)" : "translateX(110%)",
//                         transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
//                         visibility: visible ? "visible" : "hidden",
//                         pointerEvents: visible ? "all" : "none",
//                         overflowX: "hidden", overflowY: "auto",
//                         fontFamily: "Montserrat,sans-serif",
//                     }}>

//                         {/* Sidebar header */}
//                         <div style={{
//                             display: "flex", alignItems: "center", justifyContent: "space-between",
//                             padding: "14px 20px",
//                             borderBottom: "1px solid rgba(91,91,214,0.10)",
//                             background: "linear-gradient(135deg,#F8F7FF,#EEF0FF)",
//                         }}>
//                             <Link to="/" onClick={closeSidebar} style={{
//                                 display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
//                             }}>
//                                 <DiamondIcon />
//                                 <div>
//                                     <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1E1B4B" }}>
//                                         <span style={{ color: "#C8924A" }}>D DOLLY</span> LAMB
//                                     </div>
//                                     <div style={{ fontSize: 7, letterSpacing: "0.3em", color: "#818CF8", textTransform: "uppercase" }}>
//                                         ARTISAN ATELIER
//                                     </div>
//                                 </div>
//                             </Link>
//                             <button
//                                 onClick={closeSidebar}
//                                 style={{
//                                     background: "rgba(91,91,214,0.08)", border: "none", cursor: "pointer",
//                                     color: "#5B5BD6", display: "flex", alignItems: "center", justifyContent: "center",
//                                     width: 32, height: 32, borderRadius: 8,
//                                     transition: "background 0.18s",
//                                     touchAction: "manipulation",
//                                 }}
//                                 onMouseEnter={e => e.currentTarget.style.background = "rgba(91,91,214,0.15)"}
//                                 onMouseLeave={e => e.currentTarget.style.background = "rgba(91,91,214,0.08)"}
//                             >
//                                 <IconClose />
//                             </button>
//                         </div>

//                         {/* Indigo shimmer stripe */}
//                         <div style={{
//                             height: 2,
//                             background: "linear-gradient(90deg,transparent,#5B5BD6 50%,transparent)",
//                             opacity: 0.45,
//                         }} />

//                         <NavLink className="mob-nav-link" to="/" onClick={closeSidebar}>Home</NavLink>

//                         <MobileAccordion title="Men" open={mobileAccord === "men"}
//                             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//                             sections={{
//                                 JACKETS: [
//                                     { label: "Jackets", gender: "Men" },
//                                     { label: "Bomber Biker Jacket", gender: "Men" },
//                                     { label: "Moto Biker Jacket", gender: "Men" },
//                                     { label: "Racing Coat", gender: "Men" },
//                                     { label: "Leather Coats", gender: "Men" },
//                                     { label: "Men Winter Wear", gender: "Men" },
//                                 ],
//                                 "HOME & LIFESTYLE": [
//                                     { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                     { label: "Apron", directCategory: "Men Leather Apron" },
//                                 ],
//                                 OTHERS: [
//                                     { label: "Pillow", category: "Others", gender: "Men" },
//                                     { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                     { label: "Aprons", category: "Others", gender: "Men" },
//                                     { label: "Desk Mat", category: "Others", gender: "Men" },
//                                     { label: "Chair Cover", category: "Others", gender: "Men" },
//                                 ],
//                             }}
//                             closeSidebar={closeSidebar}
//                         />

//                         <MobileAccordion title="Women" open={mobileAccord === "women"}
//                             toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
//                             sections={{
//                                 TOPS: [
//                                     { label: "Jackets", gender: "Women" },
//                                     { label: "Bomber Biker Jacket", gender: "Women" },
//                                     { label: "Moto Biker Jacket", gender: "Women" },
//                                     { label: "Racing Coat", gender: "Women" },
//                                     { label: "Women Winter Wear", gender: "Women" },
//                                     { label: "Women Night Dress", gender: "Women" },
//                                 ],
//                                 BOTTOMS: [
//                                     { label: "Leather Pencil Skirt", gender: "Women" },
//                                     { label: "Leather Full Skirt", gender: "Women" },
//                                     { label: "Slim Bodycon Skirt", gender: "Women" },
//                                 ],
//                                 "HOME & LIFESTYLE": [
//                                     { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                 ],
//                                 OTHERS: [
//                                     { label: "Pillow", category: "Others", gender: "Women" },
//                                     { label: "Cushion Cover", category: "Others", gender: "Women" },
//                                     { label: "Aprons", category: "Others", gender: "Women" },
//                                     { label: "Desk Mat", category: "Others", gender: "Women" },
//                                     { label: "Chair Cover", category: "Others", gender: "Women" },
//                                 ],
//                             }}
//                             closeSidebar={closeSidebar}
//                         />

//                         <MobileAccordion title="Collection" open={mobileAccord === "collection"}
//                             toggle={() => setMobileAccord(mobileAccord === "collection" ? null : "collection")}
//                             sections={{
//                                 "LEATHER PILLOWS": [
//                                     { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
//                                     { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
//                                 ],
//                                 "SOFA & DESK": [
//                                     { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
//                                     { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
//                                     { label: "Apron", directCategory: "Men Leather Apron" },
//                                 ],
//                                 OTHERS: [
//                                     { label: "Pillow", category: "Others", gender: "Men" },
//                                     { label: "Cushion Cover", category: "Others", gender: "Men" },
//                                     { label: "Aprons", category: "Others", gender: "Men" },
//                                     { label: "Desk Mat", category: "Others", gender: "Men" },
//                                     { label: "Chair Cover", category: "Others", gender: "Men" },
//                                 ],
//                             }}
//                             closeSidebar={closeSidebar}
//                         />

//                         {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
//                             <NavLink key={to} className="mob-nav-link" to={to} onClick={closeSidebar}>
//                                 {label}
//                             </NavLink>
//                         ))}

//                         {/* Bottom CTA */}
//                         <div style={{ padding: "20px", borderTop: "1px solid rgba(91,91,214,0.10)", marginTop: 8 }}>
//                             <Link to="/collection" onClick={closeSidebar} style={{
//                                 display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
//                                 padding: "12px 20px", textDecoration: "none",
//                                 background: "linear-gradient(135deg,#4338CA,#5B5BD6)",
//                                 color: "#fff", borderRadius: 8,
//                                 fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
//                                 textTransform: "uppercase", fontFamily: "Montserrat,sans-serif",
//                                 boxShadow: "0 4px 16px rgba(91,91,214,0.30)",
//                                 touchAction: "manipulation",
//                             }}>
//                                 Shop the Collection →
//                             </Link>
//                         </div>
//                     </div>
//                 </>,
//                 document.body
//             )}
//         </>
//     );
// };

// export default Navbar;




import React, { useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const C = {
    navBg: "rgba(255,255,255,0.97)",
    navBorder: "rgba(91,91,214,0.15)",
    megaBg: "linear-gradient(180deg,#FFFFFF 0%,#F8F7FF 100%)",
    indigo: "#5B5BD6",
    indigoLt: "#818CF8",
    indigoDk: "#4338CA",
    gold: "#C8924A",
    goldDk: "#8a5e2d",
    navText: "#1E1B4B",
    bodyText: "#4B5563",
    linkText: "#6B7280",
    mutedText: "#9CA3AF",
};

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
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
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
const IconClose = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const ANIM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes megaIn {
    from { opacity:0; transform:translateY(-8px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes colIn {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes lineExpand {
    from { width:0; }
    to   { width:100%; }
  }
  @keyframes imgReveal {
    from { opacity:0; transform:scale(1.05); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes itemSlide {
    from { opacity:0; transform:translateX(-8px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes shimmerIndigo {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }

  .nav-shimmer {
    background: linear-gradient(90deg,
      transparent 0%, rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 3.5s linear infinite;
  }

  .ddl-mega     { animation: megaIn 0.22s cubic-bezier(0.16,1,0.3,1) both; }
  .ddl-mega-col { animation: colIn 0.32s ease both; }
  .ddl-mega-col:nth-child(1) { animation-delay:0.04s; }
  .ddl-mega-col:nth-child(2) { animation-delay:0.08s; }
  .ddl-mega-col:nth-child(3) { animation-delay:0.12s; }
  .ddl-mega-col:nth-child(4) { animation-delay:0.16s; }
  .ddl-mega-col:nth-child(5) { animation-delay:0.20s; }

  .ddl-col-rule {
    display:block; height:1px; width:0;
    background:linear-gradient(to right,#5B5BD6,transparent);
    animation:lineExpand 0.45s ease 0.08s both;
  }
  .ddl-mega-img-wrap { animation:imgReveal 0.4s ease 0.06s both; }
  .ddl-mega-item     { animation:itemSlide 0.28s ease both; }
  .ddl-mega-item:nth-child(1) { animation-delay:0.08s; }
  .ddl-mega-item:nth-child(2) { animation-delay:0.12s; }
  .ddl-mega-item:nth-child(3) { animation-delay:0.16s; }
  .ddl-mega-item:nth-child(4) { animation-delay:0.20s; }
  .ddl-mega-item:nth-child(5) { animation-delay:0.24s; }
  .ddl-mega-item:nth-child(6) { animation-delay:0.28s; }

  .nav-link-item {
    position:relative; display:inline-flex; align-items:center; gap:5px;
    padding-bottom:3px; font-size:11px; font-weight:600;
    letter-spacing:0.16em; text-transform:uppercase;
    cursor:pointer; text-decoration:none; color:#1E1B4B;
    transition:color 0.2s; font-family:'Montserrat',sans-serif; white-space:nowrap;
  }
  .nav-link-item::after {
    content:''; position:absolute; bottom:0; left:0;
    height:1.5px; width:0;
    background:linear-gradient(90deg,#4338CA,#5B5BD6,#818CF8);
    border-radius:2px; transition:width 0.28s ease;
  }
  .nav-link-item:hover        { color:#5B5BD6; }
  .nav-link-item:hover::after { width:100%; }
  .nav-link-item.active        { color:#5B5BD6; }
  .nav-link-item.active::after { width:100%; }

  .mega-link {
    display:flex; align-items:center; gap:8px;
    font-size:12px; letter-spacing:0.03em;
    text-decoration:none; font-weight:500; color:#1E1B4B;
    font-family:'Montserrat',sans-serif;
    transition:color 0.18s, padding-left 0.18s;
  }
  .mega-link:hover { color:#5B5BD6; padding-left:4px; }
  .mega-link .ml {
    display:inline-block; width:10px; height:1px;
    background:#1E1B4B; flex-shrink:0;
    transition:width 0.18s, background 0.18s;
  }
  .mega-link:hover .ml { width:14px; background:#5B5BD6; }

  .nav-icon-btn {
    background:transparent; border:none; cursor:pointer; color:#4B5563;
    display:flex; align-items:center; justify-content:center;
    padding:7px; margin:-7px; border-radius:8px;
    transition:color 0.18s, background 0.18s;
    text-decoration:none; position:relative;
  }
  .nav-icon-btn:hover { color:#5B5BD6; background:rgba(91,91,214,0.08); }

  .mob-nav-link {
    display:block; padding:13px 24px;
    font-size:11px; font-weight:600; letter-spacing:0.2em;
    text-transform:uppercase; text-decoration:none;
    color:#1E1B4B; font-family:'Montserrat',sans-serif;
    border-bottom:1px solid rgba(91,91,214,0.08);
    transition:color 0.2s, padding-left 0.2s, background 0.2s;
  }
  .mob-nav-link:hover,
  .mob-nav-link.active { color:#5B5BD6; padding-left:32px; background:rgba(91,91,214,0.04); }

  .mega-view-all {
    display:flex; align-items:center; gap:8px; padding:9px 12px;
    text-decoration:none; font-size:10px; letter-spacing:0.18em;
    text-transform:uppercase; font-family:'Montserrat',sans-serif; font-weight:600;
    color:#5B5BD6; border:1.5px solid rgba(91,91,214,0.3);
    border-radius:4px; margin-top:auto;
    transition:background 0.2s, border-color 0.2s, color 0.2s;
  }
  .mega-view-all:hover { background:rgba(91,91,214,0.08); border-color:#5B5BD6; }

  body.sidebar-open { overflow: hidden; }
`;

const DiamondIcon = () => (
    <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
        <rect x="6" y="6" width="30" height="30" rx="1"
            transform="rotate(45 21 21)" stroke={C.goldDk} strokeWidth="1.4" fill="none" />
        <rect x="11" y="11" width="20" height="20" rx="0.5"
            transform="rotate(45 21 21)" stroke={C.gold} strokeWidth="0.7" fill="none" opacity="0.4" />
        <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
            fontSize="13" fontWeight="600" fill={C.gold} textAnchor="middle">D</text>
    </svg>
);

const MegaBadge = ({ text }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14, marginTop: 2 }}>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
                stroke={C.indigo} strokeWidth="1" fill="rgba(91,91,214,0.12)" strokeLinejoin="round" />
        </svg>
        <span style={{
            fontSize: 8, letterSpacing: "0.28em", fontFamily: "Montserrat,sans-serif",
            fontWeight: 700, textTransform: "uppercase", color: C.indigoLt,
        }}>{text}</span>
    </div>
);

const Chevron = ({ open }) => (
    <span style={{
        display: "inline-block", width: 5, height: 5, flexShrink: 0,
        borderRight: "1.5px solid currentColor", borderBottom: "1.5px solid currentColor",
        transform: open ? "rotate(-135deg) translateY(2px)" : "rotate(45deg) translateY(-1px)",
        transition: "transform 0.22s",
    }} />
);

const buildUrl = (item) => {
    if (item.category === "Others" || item.directCategory)
        return `/collection?category=${encodeURIComponent(item.directCategory || "Others")}&sub=${encodeURIComponent(item.label)}`;
    return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
};

const corners = [
    { pos: "top-2 left-2", b: "border-t-[1.5px] border-l-[1.5px]" },
    { pos: "top-2 right-2", b: "border-t-[1.5px] border-r-[1.5px]" },
    { pos: "bottom-2 left-2", b: "border-b-[1.5px] border-l-[1.5px]" },
    { pos: "bottom-2 right-2", b: "border-b-[1.5px] border-r-[1.5px]" },
];

const MegaMenu = ({ children, showMenu, hideMenu, wide = false }) => (
    <div className="ddl-mega" style={{
        position: "fixed", left: 0, right: 0, top: 64, zIndex: 9998,
        background: C.megaBg,
        borderTop: `1px solid ${C.navBorder}`,
        borderBottom: `1px solid ${C.navBorder}`,
        boxShadow: "0 16px 48px rgba(91,91,214,0.10), 0 4px 16px rgba(0,0,0,0.05)",
    }} onMouseEnter={showMenu} onMouseLeave={hideMenu}>
        <div style={{
            height: 1,
            background: "linear-gradient(90deg,transparent,rgba(91,91,214,0.45) 30%,#5B5BD6 50%,rgba(91,91,214,0.45) 70%,transparent)",
        }} />
        <div style={{
            maxWidth: wide ? 1500 : 1400, margin: "0 auto",
            padding: "28px 40px", display: "flex", gap: 36, alignItems: "flex-start",
        }}>
            {children}
        </div>
    </div>
);

const MegaColumn = ({ title, badge, items, compact = false }) => (
    <div className="ddl-mega-col" style={{ minWidth: compact ? 125 : 145 }}>
        {badge && <MegaBadge text={badge} />}
        <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "0.28em",
            color: C.indigo, textTransform: "uppercase",
            fontFamily: "Montserrat,sans-serif", marginBottom: 10,
        }}>{title}</div>
        <span className="ddl-col-rule" style={{ display: "block", marginBottom: 12 }} />
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
            {items.map((item, i) => (
                <li key={i} className="ddl-mega-item">
                    <Link to={buildUrl(item)} className="mega-link">
                        <span className="ml" />{item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
    <div>
        <button onClick={toggle} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "13px 24px", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", fontFamily: "Montserrat,sans-serif",
            color: open ? C.indigo : C.navText,
            borderBottom: "1px solid rgba(91,91,214,0.1)",
            background: open ? "rgba(91,91,214,0.04)" : "transparent",
            border: "none", cursor: "pointer",
            transition: "color 0.2s, background 0.2s",
        }}>
            {title} <Chevron open={open} />
        </button>
        <div style={{
            maxHeight: open ? 900 : 0, opacity: open ? 1 : 0,
            overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.35s ease",
        }}>
            {Object.entries(sections).map(([sec, items], idx) => (
                <div key={idx} style={{ padding: "10px 36px", borderBottom: "1px solid rgba(91,91,214,0.06)" }}>
                    <h4 style={{
                        fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase",
                        fontWeight: 700, color: C.indigoLt,
                        fontFamily: "Montserrat,sans-serif", marginBottom: 8,
                    }}>{sec}</h4>
                    {items.map((item, i) => (
                        <Link key={i} onClick={closeSidebar} to={buildUrl(item)} style={{
                            display: "block", padding: "5px 0",
                            fontSize: 11, textDecoration: "none", letterSpacing: "0.05em",
                            color: C.linkText, fontFamily: "Montserrat,sans-serif",
                            transition: "color 0.18s",
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = C.indigo}
                            onMouseLeave={e => e.currentTarget.style.color = C.linkText}
                        >{item.label}</Link>
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

    // ✅ Reliable isMobile — lazy init + sync on resize
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    const hideRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", onResize);
        onResize();
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // ✅ Body scroll lock
    useEffect(() => {
        document.body.classList.toggle("sidebar-open", visible);
        return () => document.body.classList.remove("sidebar-open");
    }, [visible]);

    const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    useEffect(() => {
        const h = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
        };
        if (profileOpen) document.addEventListener("mousedown", h);
        return () => document.removeEventListener("mousedown", h);
    }, [profileOpen]);

    const logout = () => {
        setProfileOpen(false); navigate("/login");
        localStorage.removeItem("token"); setToken(""); setCartItems({});
    };

    const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 380); };
    const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

    // ✅ closeSidebar resets accordion too
    const closeSidebar = () => { setVisible(false); setMobileAccord(null); };

    // ✅ Close on route change
    useEffect(() => { setVisible(false); setMobileAccord(null); }, [navigate]);

    // ✅ Sidebar JSX — extracted so we can portal it
    const sidebarJSX = (
        <>
            {/* Backdrop — clicks close sidebar */}
            {visible && (
                <div onClick={closeSidebar} style={{
                    position: "fixed", inset: 0, zIndex: 99997,
                    background: "rgba(30,27,75,0.30)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                }} />
            )}

            {/* Sidebar panel */}
            <div style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 99999,
                background: "#FFFFFF",
                borderLeft: `1px solid ${C.navBorder}`,
                boxShadow: visible ? "-12px 0 40px rgba(91,91,214,0.12)" : "none",
                // ✅ transform-based slide — never clipped by parent stacking context
                width: "300px",
                maxWidth: "85vw",
                transform: visible ? "translateX(0)" : "translateX(110%)",
                transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
                visibility: visible ? "visible" : "hidden",
                pointerEvents: visible ? "all" : "none",
                overflowX: "hidden", overflowY: "auto",
                fontFamily: "Montserrat,sans-serif",
            }}>
                {/* Header */}
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 20px",
                    borderBottom: "1px solid rgba(91,91,214,0.1)",
                    background: "linear-gradient(135deg,#F8F7FF,#EEF0FF)",
                }}>
                    <Link to="/" onClick={closeSidebar} style={{
                        display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
                    }}>
                        <DiamondIcon />
                        <div>
                            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.navText }}>
                                <span style={{ color: C.gold }}>D DOLLY</span> LAMB
                            </div>
                            <div style={{ fontSize: 7, letterSpacing: "0.3em", color: C.indigoLt, textTransform: "uppercase" }}>
                                ARTISAN ATELIER
                            </div>
                        </div>
                    </Link>
                    <button onClick={closeSidebar} style={{
                        background: "rgba(91,91,214,0.08)", border: "none", cursor: "pointer",
                        color: C.indigo, display: "flex", alignItems: "center", justifyContent: "center",
                        width: 32, height: 32, borderRadius: 8, transition: "background 0.18s",
                        touchAction: "manipulation",
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(91,91,214,0.15)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(91,91,214,0.08)"}
                    ><IconClose /></button>
                </div>

                {/* Shimmer stripe */}
                <div style={{
                    height: 2,
                    background: "linear-gradient(90deg,transparent,#5B5BD6 50%,transparent)",
                    opacity: 0.45,
                }} />

                <NavLink className="mob-nav-link" to="/" onClick={closeSidebar}>Home</NavLink>

                <MobileAccordion title="Men" open={mobileAccord === "men"}
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
                    closeSidebar={closeSidebar}
                />

                <MobileAccordion title="Women" open={mobileAccord === "women"}
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
                    closeSidebar={closeSidebar}
                />

                <MobileAccordion title="Collection" open={mobileAccord === "collection"}
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
                    closeSidebar={closeSidebar}
                />

                {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
                    <NavLink key={to} className="mob-nav-link" to={to} onClick={closeSidebar}>
                        {label}
                    </NavLink>
                ))}

                {/* Bottom CTA */}
                <div style={{ padding: "20px", borderTop: "1px solid rgba(91,91,214,0.1)", marginTop: 8 }}>
                    <Link to="/collection" onClick={closeSidebar} style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "12px 20px", textDecoration: "none",
                        background: `linear-gradient(135deg,${C.indigoDk},${C.indigo})`,
                        color: "#fff", borderRadius: 8,
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
                        textTransform: "uppercase", fontFamily: "Montserrat,sans-serif",
                        boxShadow: "0 4px 16px rgba(91,91,214,0.30)",
                        touchAction: "manipulation",
                    }}>
                        Shop the Collection →
                    </Link>
                </div>
            </div>
        </>
    );

    return (
        <>
            <style>{ANIM_STYLES}</style>

            <header style={{
                position: "sticky", top: 0,
                background: C.navBg,
                borderBottom: `1px solid ${C.navBorder}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                zIndex: 9998, overflow: "visible",
                fontFamily: "Montserrat,sans-serif",
                boxShadow: "0 2px 20px rgba(91,91,214,0.07)",
            }}>
                <div className="nav-shimmer" style={{ height: "1.5px" }} />

                <div style={{
                    maxWidth: 1400, margin: "0 auto",
                    padding: "0 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: 20, height: 62,
                }}>
                    {/* LOGO */}
                    <Link to="/">
                        <img className=" w-[124px]" src={assets.DDL_logo4} alt="" />
                    </Link>

                    {/* CENTER NAV — desktop only */}
                    <ul style={{
                        listStyle: "none", margin: 0, padding: 0,
                        display: isMobile ? "none" : "flex",
                        alignItems: "center", gap: 28, flexShrink: 0,
                    }}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
                                Home
                            </NavLink>
                        </li>

                        {/* MEN */}
                        <li style={{ position: "relative" }}
                            onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
                            <div className={`nav-link-item${activeMenu === "men" ? " active" : ""}`}>
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
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <MegaColumn title="Others" items={[
                                        { label: "Pillow", category: "Others", gender: "Men" },
                                        { label: "Cushion Cover", category: "Others", gender: "Men" },
                                        { label: "Aprons", category: "Others", gender: "Men" },
                                        { label: "Desk Mat", category: "Others", gender: "Men" },
                                        { label: "Chair Cover", category: "Others", gender: "Men" },
                                    ]} />
                                    <div className="ddl-mega-img-wrap" style={{
                                        marginLeft: "auto", flexShrink: 0, width: 170,
                                        position: "relative", overflow: "hidden", borderRadius: 6,
                                        boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
                                    }}>
                                        <img src={assets.men_nav} alt="Men's Collection" style={{
                                            width: "100%", height: 220, objectFit: "cover", display: "block",
                                            filter: "brightness(0.82)", transition: "transform 0.5s",
                                        }}
                                            onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                                            onMouseLeave={e => e.target.style.transform = "scale(1)"}
                                        />
                                        {corners.map((c, i) => (
                                            <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
                                                style={{ borderColor: C.indigo, opacity: 0.6 }} />
                                        ))}
                                        <div style={{
                                            position: "absolute", bottom: 0, left: 0, right: 0,
                                            padding: "8px 12px", fontSize: 8, fontWeight: 700,
                                            letterSpacing: "0.25em", textTransform: "uppercase",
                                            textAlign: "center", color: "#fff",
                                            background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
                                        }}>Men's Collection</div>
                                    </div>
                                </MegaMenu>
                            )}
                        </li>

                        {/* WOMEN */}
                        <li style={{ position: "relative" }}
                            onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
                            <div className={`nav-link-item${activeMenu === "women" ? " active" : ""}`}>
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
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <MegaColumn title="Bottoms" items={[
                                        { label: "Leather Pencil Skirt", gender: "Women" },
                                        { label: "Leather Full Skirt", gender: "Women" },
                                        { label: "Slim Bodycon Skirt", gender: "Women" },
                                    ]} />
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <MegaColumn title="Others" items={[
                                        { label: "Pillow", category: "Others", gender: "Women" },
                                        { label: "Cushion Cover", category: "Others", gender: "Women" },
                                        { label: "Aprons", category: "Others", gender: "Women" },
                                        { label: "Desk Mat", category: "Others", gender: "Women" },
                                        { label: "Chair Cover", category: "Others", gender: "Women" },
                                    ]} />
                                    <div className="ddl-mega-img-wrap" style={{
                                        marginLeft: "auto", flexShrink: 0, width: 170,
                                        position: "relative", overflow: "hidden", borderRadius: 6,
                                        boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
                                    }}>
                                        <img src={assets.women_nav} alt="Women's Collection" style={{
                                            width: "100%", height: 220, objectFit: "cover", display: "block",
                                            filter: "brightness(0.82)", transition: "transform 0.5s",
                                        }}
                                            onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                                            onMouseLeave={e => e.target.style.transform = "scale(1)"}
                                        />
                                        {corners.map((c, i) => (
                                            <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
                                                style={{ borderColor: C.indigo, opacity: 0.6 }} />
                                        ))}
                                        <div style={{
                                            position: "absolute", bottom: 0, left: 0, right: 0,
                                            padding: "8px 12px", fontSize: 8, fontWeight: 700,
                                            letterSpacing: "0.25em", textTransform: "uppercase",
                                            textAlign: "center", color: "#fff",
                                            background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
                                        }}>Women's Collection</div>
                                    </div>
                                </MegaMenu>
                            )}
                        </li>

                        {/* COLLECTION */}
                        <li style={{ position: "relative" }}
                            onMouseEnter={() => showMenu("collection")} onMouseLeave={hideMenu}>
                            <div className={`nav-link-item${activeMenu === "collection" ? " active" : ""}`}>
                                Collection <Chevron open={activeMenu === "collection"} />
                            </div>
                            {activeMenu === "collection" && (
                                <MegaMenu showMenu={() => showMenu("collection")} hideMenu={hideMenu} wide>
                                    <MegaColumn title="Men" badge="MEN'S" compact items={[
                                        { label: "Jackets", gender: "Men" },
                                        { label: "Bomber Biker Jacket", gender: "Men" },
                                        { label: "Moto Biker Jacket", gender: "Men" },
                                        { label: "Racing Coat", gender: "Men" },
                                        { label: "Leather Coats", gender: "Men" },
                                        { label: "Men Winter Wear", gender: "Men" },
                                    ]} />
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
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
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <MegaColumn title="Leather Pillows" compact items={[
                                        { label: "Cylindrical Pillow Cover", directCategory: "Leather Pillow Cover" },
                                        { label: "Square Pillow Cover", directCategory: "Leather Pillow Cover" },
                                        { label: "Rectangle Pillow Cover", directCategory: "Leather Pillow Cover" },
                                        { label: "Round Pillow Cover", directCategory: "Leather Pillow Cover" },
                                        { label: "Ear Hole Pillow Cushion Cover", directCategory: "Leather Pillow Cover" },
                                    ]} />
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <div className="ddl-mega-col" style={{ minWidth: 130, display: "flex", flexDirection: "column", gap: 18 }}>
                                        {[
                                            {
                                                heading: "Sofa & Desk", items: [
                                                    { label: "Recliner Chair Headrest Cover", directCategory: "Sofa Headrest" },
                                                    { label: "Leather Desk Mat", directCategory: "Leather Desk Pad" },
                                                ]
                                            },
                                            {
                                                heading: "Apron", items: [
                                                    { label: "Apron", directCategory: "Men Leather Apron" },
                                                ]
                                            },
                                        ].map((group, gi) => (
                                            <div key={gi}>
                                                <div style={{
                                                    fontSize: 9, fontWeight: 700, letterSpacing: "0.28em",
                                                    color: C.indigo, textTransform: "uppercase",
                                                    fontFamily: "Montserrat,sans-serif", marginBottom: 8,
                                                }}>{group.heading}</div>
                                                <span className="ddl-col-rule" style={{ display: "block", marginBottom: 10 }} />
                                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                                                    {group.items.map((item, i) => (
                                                        <li key={i} className="ddl-mega-item">
                                                            <Link to={buildUrl(item)} className="mega-link">
                                                                <span className="ml" />{item.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <Link to="/collection" className="mega-view-all"
                                            onMouseDown={e => e.preventDefault()}
                                            onClick={() => setActiveMenu(null)}>
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            View All
                                        </Link>
                                    </div>
                                </MegaMenu>
                            )}
                        </li>

                        {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink to={to} className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT ICONS */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                        <button className="nav-icon-btn" aria-label="Search"
                            onClick={() => { setShowSearch(true); navigate("/collection"); }}>
                            <IconSearch />
                        </button>

                        <div ref={profileRef} style={{ position: "relative" }}>
                            <button className="nav-icon-btn" aria-label="Account"
                                onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}>
                                <IconUser />
                            </button>
                            {token && profileOpen && (
                                <div style={{
                                    position: "absolute", top: "calc(100% + 10px)", right: 0,
                                    minWidth: 185, zIndex: 999999,
                                    background: "#FFFFFF",
                                    border: `1px solid ${C.navBorder}`,
                                    borderTop: `2px solid ${C.indigo}`,
                                    borderRadius: 8,
                                    boxShadow: "0 12px 40px rgba(91,91,214,0.15)",
                                    animation: "megaIn 0.18s ease both",
                                }}>
                                    <div style={{
                                        padding: "11px 16px",
                                        borderBottom: "1px solid rgba(91,91,214,0.1)",
                                        display: "flex", alignItems: "center", gap: 10,
                                    }}>
                                        <div style={{
                                            width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                                            background: `linear-gradient(135deg,${C.indigoDk},${C.indigo})`,
                                            display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                                        }}><IconUser /></div>
                                        <span style={{
                                            fontSize: 9, letterSpacing: "0.16em", color: C.indigo,
                                            textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", fontWeight: 600,
                                        }}>My Account</span>
                                    </div>
                                    {[
                                        { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
                                        { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
                                        { label: "Logout", action: logout },
                                    ].map(({ label, action }, i, arr) => (
                                        <p key={label} onClick={action} style={{
                                            margin: 0, padding: "10px 16px",
                                            fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                                            cursor: "pointer", fontFamily: "Montserrat,sans-serif",
                                            color: C.bodyText, fontWeight: 500,
                                            borderBottom: i < arr.length - 1 ? "1px solid rgba(91,91,214,0.08)" : "none",
                                            transition: "background 0.15s, color 0.15s, padding-left 0.15s",
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(91,91,214,0.06)"; e.currentTarget.style.color = C.indigo; e.currentTarget.style.paddingLeft = "22px"; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.bodyText; e.currentTarget.style.paddingLeft = "16px"; }}
                                        >{label}</p>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/wishlist" className="nav-icon-btn" aria-label="Wishlist" style={{ position: "relative" }}>
                            <IconHeart />
                            {wishlist?.length > 0 && (
                                <span style={{
                                    position: "absolute", top: 2, right: 2,
                                    minWidth: 15, height: 15, borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 7.5, fontWeight: 700,
                                    background: C.indigo, color: "#fff",
                                    fontFamily: "Montserrat,sans-serif",
                                }}>{wishlist.length}</span>
                            )}
                        </Link>

                        <Link to="/cart" className="nav-icon-btn" aria-label="Cart" style={{ position: "relative" }}>
                            <IconBag />
                            <span style={{
                                position: "absolute", top: 2, right: 2,
                                minWidth: 15, height: 15, borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 7.5, fontWeight: 700,
                                background: C.indigo, color: "#fff",
                                fontFamily: "Montserrat,sans-serif",
                            }}>{getCartCount()}</span>
                        </Link>

                        {isMobile && (
                            <button className="nav-icon-btn" aria-label="Menu"
                                onClick={() => setVisible(true)}
                                style={{ touchAction: "manipulation" }}>
                                <IconMenu />
                            </button>
                        )}
                    </div>
                </div>

                <div className="nav-shimmer" style={{ height: "1.5px" }} />
            </header>

            {/*
              ✅ PORTAL FIX — createPortal renders sidebar directly on document.body.
              This ESCAPES the header's backdropFilter stacking context.
              backdropFilter on a parent breaks position:fixed for ALL children —
              they become fixed relative to the parent, not the viewport.
              Portal is the ONLY correct fix for this CSS spec behaviour.
            */}
            {createPortal(sidebarJSX, document.body)}
        </>
    );
};

export default Navbar;