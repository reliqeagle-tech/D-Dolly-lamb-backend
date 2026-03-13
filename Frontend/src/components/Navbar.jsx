// import React, { useContext, useState, useRef } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ITEM_TO_SUBCATEGORY } from "./categoriesMapping";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { GoHeartFill } from "react-icons/go";
// import {
//   faMagnifyingGlass,
//   faUser,
//   faBagShopping,
// } from "@fortawesome/free-solid-svg-icons";
// import Title from "./Title";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileAccord, setMobileAccord] = useState(null);
//   const hideTimeoutRef = useRef(null);
//   const { wishlist } = useContext(ShopContext)

//   const {
//     setShowSearch,
//     getCartCount,
//     navigate,
//     token,
//     setToken,
//     setCartItems,
//   } = useContext(ShopContext);

//   const logout = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const hideMenu = () => {
//     hideTimeoutRef.current = setTimeout(() => {
//       setActiveMenu(null);
//     }, 300);
//   };

//   const showMenu = (menu) => {
//     if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
//     setActiveMenu(menu);
//   };

//   const toggleMobileAccord = (section) => {
//     setMobileAccord(mobileAccord === section ? null : section);
//   };

//   return (
//     <div className="pb-[2px] sticky top-0 z-[9999] border-b bg-gradient-to-r from-[#800000] via-[#800000] to-black ">
//       <div className="sticky top-0 z-[9999]  w-full shadow-sm bg-blend-saturation">
//         {/* ------------------- TOP NAV ------------------- */}
//         <div className="flex items-center justify-between py-5 font-medium max-w-7xl mx-auto px-4">
//           <Link to="/">
//             <h1 className="text-2xl font-bold text-white py-2"><span className="text-[#f7c568]">D DOLLY</span> LAMB</h1>
//           </Link>

//           {/* ------------------- DESKTOP LINKS ------------------- */}
//           <ul className="hidden sm:flex md:gap-8 sm:gap-5 md:text-sm text-xs text-white  className">
//             <NavLink
//               to="/"
//               className="flex flex-col items-center gap-1 pt-[2px] hover:text-[#f7c568]"
//             >
//               <p>HOME</p>
//             </NavLink>

//             {/* MEN MENU */}
//             <li
//               onMouseEnter={() => showMenu("men")}
//               onMouseLeave={hideMenu}
//               className="relative cursor-pointer"
//             >
//               <div className="flex items-center hover:text-[#f7c568]">
//                 <p className="hover:text-[#f7c568]">MEN</p>
//                 <RiArrowDropDownLine
//                   className={`text-2xl transition-transform duration-300 ${activeMenu === "men" ? "rotate-180" : "rotate-0"
//                     }`}
//                 />
//               </div>

//               {activeMenu === "men" && (
//                 <MegaMenu
//                   showMenu={() => showMenu("men")}
//                   hideMenu={hideMenu}>
//                   { /* top wear */}
//                   <MegaColumn
//                     title="TOPS"
//                     items={[
//                       {
//                         label: "Jackets",
//                         category: "Topwear",
//                         gender: "Men",
//                       },
//                       {
//                         label: "Coats",
//                         category: "Topwear",
//                         gender: "Men",
//                       },

//                     ]}
//                   />

//                   {/*         <MegaColumn
//                    title="BOTTOMS"
//                   items={[
//                      {
//                        label: "Pants",
//                         category: "Bottomwear",
//                        gender: "Men",
//                     },
//                      {
//                       label: "Shorts",
//                        category: "Bottomwear",
//                        gender: "Men",
//                      },
//                       {
//                        label: "Chaps",
//                        category: "Bottomwear",
//                         gender: "Men",
//                      },
//                   ]}
//                  />
//            */}


//                   <MegaColumn
//                     title="OTHERS"
//                     items={[
//                       {
//                         label: "Pillow",
//                         category: "Others",
//                         gender: "Men",
//                       },
//                       {
//                         label: "Cushion Cover",
//                         category: "Others",
//                         gender: "Men",
//                       },
//                       {
//                         label: "Aprons",
//                         category: "Others",
//                         gender: "Men",
//                       },
//                       {
//                         label: "Desk Mat",
//                         category: "Others",
//                         gender: "Men",
//                       },
//                       {
//                         label: "Chair Cover",
//                         category: "Others",
//                         gender: "Men",
//                       },
//                     ]}
//                   />

//                   <div className="flex-shrink-0 w-[250px] self-start">
//                     <img
//                       src={assets.men_nav}
//                       className="rounded-lg w-full h-[300px] object-cover"
//                       alt="preview"
//                     />
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {/* WOMEN MENU */}
//             <li
//               onMouseEnter={() => showMenu("women")}
//               onMouseLeave={hideMenu}
//               className="relative cursor-pointer"
//             >
//               <div className="flex items-center hover:text-[#f7c568]">
//                 <p className="hover:text-[#f7c568]">WOMEN</p>
//                 <RiArrowDropDownLine
//                   className={`text-2xl transition-transform duration-300 ${activeMenu === "women" ? "rotate-180" : "rotate-0"
//                     }`}
//                 />
//               </div>

//               {activeMenu === "women" && (
//                 <MegaMenu
//                   showMenu={() => showMenu("women")}
//                   hideMenu={hideMenu}
//                 >
//                   {/* TOPS */}
//                   <MegaColumn
//                     title="TOPS"
//                     items={[
//                       { label: "Jackets", category: "Topwear", gender: "Women" },
//                       { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                       { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                       { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                       { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                       { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                     ]}
//                   />

//                   {/* BOTTOMS */}
//                   <MegaColumn
//                     title="BOTTOMS"
//                     items={[
//                       { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                       { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                       { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//                     ]}
//                   />

//                   {/* ACCESSORIES */}
//                   <MegaColumn
//                     title="OTHERS"
//                     items={[
//                       { label: "Pillow", category: "Others", gender: "Women" },
//                       { label: "Cushion Cover", category: "Others", gender: "Women" },
//                       { label: "Aprons", category: "Others", gender: "Women" },
//                       { label: "Desk Mat", category: "Others", gender: "Women" },
//                       { label: "Chair Cover", category: "Others", gender: "Women" },
//                       // { label: "Wallets", category: "Others", gender: "Women" },
//                       // { label: "Hats", category: "Others", gender: "Women" },
//                     ]}
//                   />

//                   {/* IMAGE */}
//                   <div className="flex-shrink-0 w-[250px] self-start">
//                     <img
//                       src={assets.women_nav}
//                       className="rounded-lg w-full h-[300px] object-cover"
//                       alt=""
//                     />
//                   </div>
//                 </MegaMenu>
//               )}

//             </li>

//             <NavLink className='hover:text-[#f7c568]' to="/collection">COLLECTION</NavLink>
//             <NavLink className='hover:text-[#f7c568]' to="/about">ABOUT</NavLink>
//             <NavLink className='hover:text-[#f7c568]' to="/contact">CONTACT</NavLink>
//           </ul>

//           {/* ------------------- RIGHT ICONS ------------------- */}
//           <div className="flex items-center gap-6">
//             <FontAwesomeIcon
//               onClick={() => {
//                 setShowSearch(true);
//                 navigate("/collection");
//               }}
//               className="cursor-pointer text-2xl"
//               icon={faMagnifyingGlass}
//               style={{ color: "#ffffff" }}
//             />

//             {/* Profile */}
//             <div className="group relative">
//               <FontAwesomeIcon
//                 onClick={() => (token ? null : navigate("/login"))}
//                 className="cursor-pointer text-2xl"
//                 icon={faUser}
//                 style={{ color: "#ffffff" }}
//               />
//               {token && (
//                 <div className="group-hover:block hidden absolute right-0 pt-4 z-[9999]">
//                   <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow">
//                     <p
//                       onClick={() => navigate("/profile")}
//                       className="cursor-pointer"
//                     >
//                       My Profile
//                     </p>
//                     <p
//                       onClick={() => navigate("/orders")}
//                       className="cursor-pointer"
//                     >
//                       Orders
//                     </p>
//                     <p onClick={logout} className="cursor-pointer">
//                       Logout
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/*Wishlist*/}
//             <Link to="/wishlist" className="relative">
//               <GoHeartFill className="text-[24px] text-white hover:text-red-400 duration-200" />

//               {/* Wishlist Badge */}
//               {wishlist && wishlist.length > 0 && (
//                 <span
//                   className="
//         absolute -bottom-1 -right-1
//         bg-[#3b4754]
//         text-white text-[10px]
//         w-4 h-4 rounded-full
//         flex items-center justify-center
//       "
//                 >
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="relative">
//               <FontAwesomeIcon
//                 icon={faBagShopping}
//                 style={{ color: "#ffffff" }}
//                 className="w-6 min-w-5 text-2xl"
//               />
//               <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gray-700 text-white aspect-square rounded-full text-[8px]">
//                 {getCartCount()}
//               </p>
//             </Link>

//             <img
//               onClick={() => setVisible(true)}
//               src={assets.menu_icon}
//               className="w-5 cursor-pointer sm:hidden invert"
//             />
//           </div>
//         </div>

//         {/* ------------------- MOBILE SIDEBAR ------------------- */}
//         <div
//           className={`fixed top-0 right-0 bottom-0 bg-white z-[9999] transition-all duration-300
//         ${visible ? "w-full" : "w-0"} overflow-hidden`}
//         >
//           <div className="flex flex-col text-gray-600">
//             <div
//               onClick={() => setVisible(false)}
//               className="flex items-center gap-4 p-3 cursor-pointer border-b"
//             >
//               <HiOutlineMenuAlt3 />
//               {/* <img className="h-4 rotate-180 invert" src={assets.dropdown_icon} /> */}
//               <p>Back</p>
//             </div>

//             <SidebarLink to="/" label="HOME" close={setVisible} />

//             {/* Mobile MEN */}
//             <MobileAccordion
//               title="MEN"
//               open={mobileAccord === "men"}
//               toggle={() => toggleMobileAccord("men")}
//               sections={{
//                 TOPS: [
//                   {
//                     label: "Jackets",
//                     category: "Topwear",
//                     gender: "Men",
//                   },
//                   { label: "Leather Coats", category: "Topwear", gender: "Men" },

//                 ],

//                 OTHERS: [
//                   { label: "Pillow", category: "Others", gender: "Men" },
//                   { label: "Cushion Cover", category: "Others", gender: "Men" },
//                   {
//                     label: "Aprons",
//                     category: "Others",
//                     gender: "men",
//                   },
//                   { label: "Desk Mat", category: "Others", gender: "Men" },
//                   { label: "Chair Cover", category: "Others", gender: "Men" },
//                 ],
//               }}

//               closeSidebar={() => setVisible(false)}
//             />

//             {/* Mobile WOMEN */}
//             <MobileAccordion
//               title="WOMEN"
//               open={mobileAccord === "women"}
//               toggle={() => toggleMobileAccord("women")}
//               sections={{
//                 TOPS: [
//                   {
//                     label: "Jackets",
//                     category: "Topwear",
//                     gender: "Women",
//                   },
//                   {
//                     label: "Bomber Biker Jacket",
//                     category: "Topwear",
//                     gender: "Women",
//                   },
//                   {
//                     label: "Moto Biker Jacket",
//                     category: "Topwear",
//                     gender: "Women",
//                   },
//                   { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                   { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                   { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                 ],

//                 BOTTOMS: [
//                   { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                   { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                   {
//                     label: "Slim Bodycon Skirt",
//                     category: "Bottomwear",
//                     gender: "Women",
//                   },
//                 ],

//                 OTHERS: [
//                   {
//                     label: "Pillow",
//                     category: "Others",
//                     gender: "Women",
//                   },
//                   {
//                     label: "Cushion Cover",
//                     category: "Others",
//                     gender: "Women",
//                   },
//                   {
//                     label: "Aprons",
//                     category: "Others",
//                     gender: "Women",
//                   },
//                   {
//                     label: "Desk Mat",
//                     category: "Others",
//                     gender: "Women",
//                   },
//                   {
//                     label: "Chair Cover",
//                     category: "Others",
//                     gender: "Women",
//                   },
//                 ],
//               }}
//               closeSidebar={() => setVisible(false)}
//             />

//             <SidebarLink
//               to="/collection"
//               label="COLLECTION"
//               close={setVisible}
//             />
//             <SidebarLink to="/about" label="ABOUT" close={setVisible} />
//             <SidebarLink to="/contact" label="CONTACT" close={setVisible} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ---------------------- HELPER COMPONENTS ---------------------- */

// const SidebarLink = ({ to, label, close }) => (
//   <NavLink onClick={() => close(false)} className="py-2 pl-6 border-b" to={to}>
//     {label}
//   </NavLink>
// );

// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//   <div
//     onMouseEnter={showMenu}
//     onMouseLeave={hideMenu}
//     className="fixed inset-x-0 top-[80px] bg-[#faf0e6] p-8 z-[9999] shadow-2xl border-t-4 border-[#800000]"
//   >
//     <div className="max-w-7xl mx-auto flex flex-wrap gap-8 px-4 items-start">
//       {children}
//     </div>
//   </div>
// );

// const MegaColumn = ({ title, items }) => {
//   return (
//     <div className="flex-1 min-w-[150px]">
//       <h3 className="font-bold mb-3 text-[#800000] text-xl border-b-2 w-1/3 border-[#800000]">
//         {title}
//       </h3>

//       <ul className="space-y-2 text-[#800000]">
//         {items.map((item, index) => {
//           // const toURL = `/collection?category=${encodeURIComponent(
//           //   item.gender
//           // )}&sub=${encodeURIComponent(item.category)}`;

//           //  const toURL =
//           // item.category === "Others"
//           //   ? `/collection?category=Others`
//           //   : `/collection?category=${encodeURIComponent(
//           //       item.gender
//           //     )}&sub=${encodeURIComponent(item.category)}`;


//           const toURL =
//             item.category === "Others"
//               ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//               : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`;



//           console.log("Generated URL:", toURL); // Debug

//           return (
//             <li key={index}>
//               <Link
//                 to={toURL}
//                 className="hover:text-gray-700 transition"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };


// /* ---------------------- MOBILE ACCORDION ---------------------- */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//   <div>
//     <button
//       onClick={toggle}
//       className="w-full text-left py-3 px-6 border-b flex justify-between items-center"
//     >
//       {title}
//       <RiArrowDropDownLine
//         className={`text-3xl transition-transform duration-300 ${open ? "rotate-180" : ""
//           }`}
//       />
//     </button>

//     <div
//       className={`overflow-hidden transition-all duration-500 ease-in-out
//       ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
//     >
//       <div className="bg-gray-50 px-6 py-3 border-b space-y-4">
//         {Object.entries(sections).map(([section, items], index) => (
//           <div key={index}>
//             <h4 className="font-semibold text-gray-800 mb-2">{section}</h4>
//             <ul className="text-gray-600 space-y-1">
//               {items.map((item, i) => (
//                 <li key={i} className="pl-2">
//                   <Link
//                     to={`/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`}
//                     className="block w-full hover:text-black transition"
//                     onClick={closeSidebar} // 🚀 CLOSE ON CLICK
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );


// export default Navbar;






// import React, { useContext, useState, useRef, useEffect } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

// /* ═══════════════════════════════
//    INLINE CSS + FONTS
// ═══════════════════════════════ */
// const Styles = () => {
//   useEffect(() => {
//     const f = document.createElement("link");
//     f.rel = "stylesheet";
//     f.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@200;300;400;500&display=swap";
//     document.head.appendChild(f);

//     const s = document.createElement("style");
//     s.id = "ddl4";
//     s.textContent = `
//       :root{--gold:#C9A96E;--gold2:#e8c97e;--dark:#0c0401;--card:#160805;--text:#c4b49a;--dim:#7a6a52;}
//       @keyframes fadeSlideDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}
//       @keyframes fadeSlideUp  {from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
//       @keyframes stagger1{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}

//       .ddl-nav-link{position:relative;padding-bottom:2px;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:.22em;color:var(--text);text-decoration:none;transition:color .25s;}
//       .ddl-nav-link::after{content:'';position:absolute;bottom:0;left:50%;right:50%;height:1px;background:var(--gold);transition:left .3s cubic-bezier(.4,0,.2,1),right .3s cubic-bezier(.4,0,.2,1);}
//       .ddl-nav-link:hover,.ddl-nav-link.active-link{color:var(--gold);}
//       .ddl-nav-link:hover::after,.ddl-nav-link.active-link::after{left:0;right:0;}

//       .ddl-mega{animation:fadeSlideDown .28s cubic-bezier(.16,1,.3,1) both;}
//       .ddl-pdrop{animation:fadeSlideUp .22s cubic-bezier(.16,1,.3,1) both;}

//       .ddl-c1{animation:stagger1 .35s .04s cubic-bezier(.16,1,.3,1) both;}
//       .ddl-c2{animation:stagger1 .35s .10s cubic-bezier(.16,1,.3,1) both;}
//       .ddl-c3{animation:stagger1 .35s .16s cubic-bezier(.16,1,.3,1) both;}
//       .ddl-c4{animation:stagger1 .35s .22s cubic-bezier(.16,1,.3,1) both;}

//       .ddl-mitem{display:block;font-family:'Jost',sans-serif;font-size:12px;font-weight:300;letter-spacing:.06em;color:var(--text);text-decoration:none;padding:5px 0;border-bottom:1px solid rgba(201,169,110,.06);transition:color .2s,padding-left .2s;}
//       .ddl-mitem:hover{color:var(--gold2);padding-left:8px;}
//       .ddl-mitem:last-child{border-bottom:none;}

//       .ddl-iconbtn{color:var(--text);cursor:pointer;transition:color .22s,transform .22s;background:none;border:none;padding:0;display:flex;align-items:center;justify-content:center;}
//       .ddl-iconbtn:hover{color:var(--gold);transform:scale(1.12);}

//       .ddl-scrl::-webkit-scrollbar{width:2px;}
//       .ddl-scrl::-webkit-scrollbar-thumb{background:rgba(201,169,110,.15);border-radius:2px;}

//       .ddl-mobl{display:block;font-family:'Jost',sans-serif;font-size:11.5px;font-weight:300;letter-spacing:.1em;color:var(--dim);text-decoration:none;padding:6px 0;transition:color .2s;}
//       .ddl-mobl:hover{color:var(--gold);}
//     `;
//     if (!document.getElementById("ddl4")) document.head.appendChild(s);
//     return () => { const el = document.getElementById("ddl4"); if (el) el.remove(); };
//   }, []);
//   return null;
// };

// /* ═══════════════════════════════
//    PREMIUM SVG LOGO
// ═══════════════════════════════ */
// const Logo = ({ w = 210 }) => (
//   <svg width={w} height={Math.round(w * 58 / 230)} viewBox="0 0 230 58" fill="none">
//     {/* Outer diamond */}
//     <path d="M26 2 L50 29 L26 56 L2 29 Z" stroke="#C9A96E" strokeWidth="1.3" fill="none" />
//     {/* Inner diamond */}
//     <path d="M26 11 L42 29 L26 47 L10 29 Z" stroke="#C9A96E" strokeWidth=".55" fill="none" opacity=".35" />
//     {/* Refined D letterform */}
//     <path d="M17 18 L17 40 M17 18 L25 18 C33.5 18 38.5 23 38.5 29 C38.5 35 33.5 40 25 40 L17 40"
//       stroke="#C9A96E" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//     {/* Cardinal tick marks */}
//     {[[26, 2, 26, 7], [26, 51, 26, 56], [2, 29, 7, 29], [45, 29, 50, 29]].map(([x1, y1, x2, y2], i) => (
//       <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A96E" strokeWidth=".8" opacity=".45" />
//     ))}
//     {/* D DOLLY wordmark */}
//     <text x="60" y="28" fontFamily="'Playfair Display',Georgia,serif"
//       fontWeight="600" fontSize="19" letterSpacing="5.5" fill="#F0E8D8">D DOLLY</text>
//     {/* Thin rule */}
//     <line x1="60" y1="33" x2="225" y2="33" stroke="#C9A96E" strokeWidth=".4" opacity=".5" />
//     {/* LAMB */}
//     <text x="62" y="47" fontFamily="'Jost',sans-serif"
//       fontWeight="200" fontSize="7.5" letterSpacing="9" fill="#9a7a4a">LAMB</text>
//   </svg>
// );

// /* ═══════════════════════════════
//    PREMIUM SVG ICONS
// ═══════════════════════════════ */
// const Ico = {
//   search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5" /><line x1="19" y1="19" x2="15.2" y2="15.2" /></svg>,
//   user: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-1.5A4.5 4.5 0 0014.5 15h-5A4.5 4.5 0 005 19.5V21" /><circle cx="12" cy="8" r="4" /></svg>,
//   heart: (filled) => <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#C9A96E" : "none"} stroke={filled ? "#C9A96E" : "currentColor"} strokeWidth="1.6" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
//   bag: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>,
//   menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="17" y2="12" /><line x1="3" y1="18" x2="13" y2="18" /></svg>,
//   close: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
//   chev: (open) => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ transition: "transform .3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>  <path d="M6 9l6 6 6-6" /></svg>,
//   pUser: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-1.5A4.5 4.5 0 0014.5 15h-5A4.5 4.5 0 005 19.5V21" /><circle cx="12" cy="8" r="4" /></svg>,
//   pOrder: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" /><path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 00-4 0v2" /></svg>,
//   pOut: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
// };

// /* ═══════════════════════════════
//    MAIN NAVBAR
// ═══════════════════════════════ */
// const Navbar = () => {
//   const [open, setOpen] = useState(false);   // mobile drawer
//   const [menu, setMenu] = useState(null);    // active mega menu
//   const [acc, setAcc] = useState(null);    // mobile accordion
//   const [prof, setProf] = useState(false);   // profile dropdown
//   const [scrolled, setScrolled] = useState(false);
//   const hideT = useRef(null);
//   const profRef = useRef(null);

//   const { wishlist } = useContext(ShopContext);
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   useEffect(() => {
//     const h = () => setScrolled(window.scrollY > 4);
//     window.addEventListener("scroll", h, { passive: true });
//     return () => window.removeEventListener("scroll", h);
//   }, []);

//   useEffect(() => {
//     const h = (e) => { if (profRef.current && !profRef.current.contains(e.target)) setProf(false); };
//     document.addEventListener("mousedown", h);
//     return () => document.removeEventListener("mousedown", h);
//   }, []);

//   const logout = () => { navigate("/login"); localStorage.removeItem("token"); setToken(""); setCartItems({}); setProf(false); };
//   const show = (m) => { clearTimeout(hideT.current); setMenu(m); };
//   const hide = () => { hideT.current = setTimeout(() => setMenu(null), 160); };
//   const toggleAcc = (s) => setAcc(acc === s ? null : s);

//   return (
//     <>
//       <Styles />
//       <nav style={{
//         position: "sticky", top: 0, zIndex: 9999, width: "100%",
//         background: scrolled
//           ? "linear-gradient(180deg,#080200 0%,#0e0401 100%)"
//           : "linear-gradient(180deg,#120604 0%,#1c0905 100%)",
//         borderBottom: "1px solid rgba(201,169,110,.18)",
//         boxShadow: scrolled ? "0 8px 50px rgba(0,0,0,.9)" : "0 2px 20px rgba(0,0,0,.5)",
//         transition: "background .4s,box-shadow .4s",
//       }}>
//         {/* Top gold line */}
//         <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(201,169,110,.65) 25%,rgba(201,169,110,.65) 75%,transparent)" }} />

//         <div style={{
//           maxWidth: 1280, margin: "0 auto", padding: "0 32px", height: 68,
//           display: "flex", alignItems: "center", justifyContent: "space-between",
//           position: "relative", zIndex: 1,
//         }}>
//           {/* ── LOGO ── */}
//           <Link to="/" style={{ flexShrink: 0 }}>
//             <Logo w={210} />
//           </Link>

//           {/* ── DESKTOP NAV ── */}
//           <ul className="hidden sm:flex" style={{
//             listStyle: "none", margin: 0, padding: 0,
//             gap: 34, alignItems: "center",
//           }}>
//             {[
//               { label: "HOME", to: "/" },
//               { label: "MEN", to: null, key: "men" },
//               { label: "WOMEN", to: null, key: "women" },
//               { label: "COLLECTION", to: "/collection" },
//               { label: "ABOUT", to: "/about" },
//               { label: "CONTACT", to: "/contact" },
//             ].map(item => (
//               <li key={item.label}
//                 onMouseEnter={item.key ? () => show(item.key) : undefined}
//                 onMouseLeave={item.key ? hide : undefined}
//                 style={{ position: "relative" }}>
//                 {item.to ? (
//                   <NavLink to={item.to}
//                     className={({ isActive }) => `ddl-nav-link${isActive ? " active-link" : ""}`}>
//                     {item.label}
//                   </NavLink>
//                 ) : (
//                   <span style={{ display: "flex", alignItems: "center", gap: 3, cursor: "pointer" }}
//                     className={`ddl-nav-link${menu === item.key ? " active-link" : ""}`}>
//                     {item.label}
//                     {Ico.chev(menu === item.key)}
//                   </span>
//                 )}

//                 {/* MEGA PANELS */}
//                 {item.key === "men" && menu === "men" && (
//                   <MegaWrap onEnter={() => show("men")} onLeave={hide}>
//                     <MegaSection label="TOPS" delay="ddl-c1" items={[
//                       { label: "Jackets", category: "Topwear", gender: "Men" },
//                       { label: "Coats", category: "Topwear", gender: "Men" },
//                     ]} />
//                     <MegaDivider />
//                     <MegaSection label="OTHERS" delay="ddl-c2" items={[
//                       { label: "Pillow", category: "Others", gender: "Men" },
//                       { label: "Cushion Cover", category: "Others", gender: "Men" },
//                       { label: "Aprons", category: "Others", gender: "Men" },
//                       { label: "Desk Mat", category: "Others", gender: "Men" },
//                       { label: "Chair Cover", category: "Others", gender: "Men" },
//                     ]} />
//                     <MegaDivider />
//                     <MegaPromo delay="ddl-c3" src={assets.men_nav}
//                       title="Men's Edit" sub="Premium leather craftsmanship"
//                       cta="Explore Men" link="/collection?category=Men" />
//                   </MegaWrap>
//                 )}

//                 {item.key === "women" && menu === "women" && (
//                   <MegaWrap onEnter={() => show("women")} onLeave={hide}>
//                     <MegaSection label="TOPS" delay="ddl-c1" items={[
//                       { label: "Jackets", category: "Topwear", gender: "Women" },
//                       { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                       { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                       { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                       { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                       { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                     ]} />
//                     <MegaDivider />
//                     <MegaSection label="BOTTOMS" delay="ddl-c2" items={[
//                       { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                       { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                       { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//                     ]} />
//                     <MegaDivider />
//                     <MegaSection label="OTHERS" delay="ddl-c3" items={[
//                       { label: "Pillow", category: "Others", gender: "Women" },
//                       { label: "Cushion Cover", category: "Others", gender: "Women" },
//                       { label: "Aprons", category: "Others", gender: "Women" },
//                       { label: "Desk Mat", category: "Others", gender: "Women" },
//                       { label: "Chair Cover", category: "Others", gender: "Women" },
//                     ]} />
//                     <MegaDivider />
//                     <MegaPromo delay="ddl-c4" src={assets.women_nav}
//                       title="Women's Edit" sub="Crafted for every occasion"
//                       cta="Explore Women" link="/collection?category=Women" />
//                   </MegaWrap>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* ── ICONS ── */}
//           <div style={{ display: "flex", alignItems: "center", gap: 20 }}>

//             <button className="ddl-iconbtn" onClick={() => { setShowSearch(true); navigate("/collection"); }} aria-label="Search">
//               {Ico.search}
//             </button>

//             {/* Profile */}
//             <div style={{ position: "relative" }} ref={profRef}>
//               <button className="ddl-iconbtn"
//                 onClick={() => token ? setProf(p => !p) : navigate("/login")} aria-label="Account">
//                 {Ico.user}
//               </button>
//               {token && prof && <ProfileDrop onNavigate={(p) => { navigate(p); setProf(false); }} onLogout={logout} />}
//             </div>

//             {/* Wishlist */}
//             <Link to="/wishlist" className="ddl-iconbtn" style={{ position: "relative" }} aria-label="Wishlist">
//               {Ico.heart(wishlist?.length > 0)}
//               {wishlist?.length > 0 && (
//                 <Badge>{wishlist.length}</Badge>
//               )}
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="ddl-iconbtn" style={{ position: "relative" }} aria-label="Cart">
//               {Ico.bag}
//               <Badge>{getCartCount()}</Badge>
//             </Link>

//             {/* Hamburger — mobile only */}
//             <button className="ddl-iconbtn flex sm:hidden" onClick={() => setOpen(true)} aria-label="Menu">
//               {Ico.menu}
//             </button>
//           </div>
//         </div>

//         {/* Bottom subtle line */}
//         <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(201,169,110,.08) 30%,rgba(201,169,110,.08) 70%,transparent)" }} />

//         {/* ── MOBILE ── */}
//         <MobileBackdrop visible={open} onClick={() => setOpen(false)} />
//         <MobileDrawer visible={open} onClose={() => setOpen(false)} acc={acc} toggleAcc={toggleAcc} />
//       </nav>
//     </>
//   );
// };

// /* ═══════════════════════════════
//    BADGE (cart / wishlist count)
// ═══════════════════════════════ */
// const Badge = ({ children }) => (
//   <span style={{
//     position: "absolute", top: -7, right: -7,
//     width: 16, height: 16, borderRadius: "50%",
//     background: "#C9A96E", color: "#0c0401",
//     fontFamily: "'Jost',sans-serif", fontWeight: 600, fontSize: 8,
//     display: "flex", alignItems: "center", justifyContent: "center",
//     boxShadow: "0 0 0 1.5px #1c0905",
//   }}>{children}</span>
// );

// /* ═══════════════════════════════
//    MEGA MENU COMPONENTS
// ═══════════════════════════════ */
// const MegaWrap = ({ children, onEnter, onLeave }) => (
//   <div onMouseEnter={onEnter} onMouseLeave={onLeave}
//     className="ddl-mega"
//     style={{
//       position: "fixed", left: 0, right: 0, top: 69, zIndex: 9998,
//       background: "linear-gradient(160deg,#0e0502 0%,#1a0806 55%,#0e0502 100%)",
//       borderBottom: "1px solid rgba(201,169,110,.12)",
//       boxShadow: "0 30px 80px rgba(0,0,0,.9)",
//     }}>
//     {/* Gold accent rule */}
//     <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(201,169,110,.4) 20%,rgba(201,169,110,.4) 80%,transparent)" }} />

//     <div style={{
//       maxWidth: 1280, margin: "0 auto", padding: "0 32px",
//       display: "flex", alignItems: "stretch",
//     }}>
//       {children}
//     </div>

//     <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(201,169,110,.06) 30%,rgba(201,169,110,.06) 70%,transparent)" }} />
//   </div>
// );

// const MegaDivider = () => (
//   <div style={{ width: 1, background: "rgba(201,169,110,.12)", margin: "24px 0", flexShrink: 0 }} />
// );

// const MegaSection = ({ label, items, delay }) => (
//   <div className={delay} style={{
//     padding: "28px 36px 28px 0",
//     minWidth: label === "TOPS" ? 130 : 150,
//     flexShrink: 0,
//   }}>
//     {/* Label row */}
//     <div style={{ marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
//       <div style={{ width: 16, height: 1, background: "#C9A96E", opacity: .55, flexShrink: 0 }} />
//       <span style={{
//         fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 600,
//         fontSize: 11, letterSpacing: ".25em", color: "#C9A96E", textTransform: "uppercase",
//       }}>{label}</span>
//     </div>
//     <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//       {items.map((item, i) => {
//         const to = item.category === "Others"
//           ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//           : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`;
//         return (
//           <li key={i}>
//             <Link to={to} className="ddl-mitem">{item.label}</Link>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// );

// const MegaPromo = ({ src, title, sub, cta, link, delay }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <div className={delay} style={{
//       marginLeft: "auto", padding: "20px 0 20px 32px",
//       width: 230, flexShrink: 0,
//       borderLeft: "1px solid rgba(201,169,110,.1)",
//       display: "flex", flexDirection: "column",
//     }}>
//       <div style={{
//         position: "relative", overflow: "hidden",
//         borderRadius: 3, cursor: "pointer", height: 260,
//       }}
//         onMouseEnter={() => setHov(true)}
//         onMouseLeave={() => setHov(false)}
//       >
//         <img src={src} alt={title} style={{
//           width: "100%", height: "100%",
//           objectFit: "cover", objectPosition: "top center",
//           display: "block",
//           filter: "brightness(.82) contrast(1.06) saturate(.85)",
//           transition: "transform .65s ease",
//           transform: hov ? "scale(1.06)" : "scale(1)",
//         }} />
//         <div style={{
//           position: "absolute", inset: 0,
//           background: "linear-gradient(to bottom,transparent 40%,rgba(8,2,0,.85) 100%)",
//         }} />
//         <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
//           <p style={{
//             fontFamily: "'Playfair Display',serif",
//             fontSize: 16, fontWeight: 500, letterSpacing: ".03em",
//             color: "#F0E8D8", lineHeight: 1.25,
//           }}>{title}</p>
//           <p style={{
//             fontFamily: "'Jost',sans-serif", fontWeight: 300,
//             fontSize: 9, letterSpacing: ".14em",
//             color: "rgba(201,169,110,.8)", marginTop: 4,
//           }}>{sub}</p>
//         </div>
//       </div>

//       <Link to={link} style={{
//         marginTop: 12,
//         display: "inline-flex", alignItems: "center", gap: 8,
//         fontFamily: "'Jost',sans-serif", fontWeight: 400,
//         fontSize: 9, letterSpacing: ".22em",
//         color: "#C9A96E", textDecoration: "none",
//         transition: "gap .2s,color .2s",
//       }}
//         onMouseEnter={e => { e.currentTarget.style.gap = "14px"; e.currentTarget.style.color = "#e8c97e"; }}
//         onMouseLeave={e => { e.currentTarget.style.gap = "8px"; e.currentTarget.style.color = "#C9A96E"; }}
//       >
//         {cta.toUpperCase()}
//         <svg width="16" height="10" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
//           <line x1="0" y1="6" x2="20" y2="6" />
//           <path d="M14 1l6 5-6 5" />
//         </svg>
//       </Link>
//     </div>
//   );
// };

// /* ═══════════════════════════════
//    PROFILE DROPDOWN
// ═══════════════════════════════ */
// const ProfileDrop = ({ onNavigate, onLogout }) => (
//   <div className="ddl-pdrop" style={{
//     position: "absolute", right: 0, top: "calc(100% + 14px)",
//     width: 200, zIndex: 99999,
//   }}>
//     {/* caret */}
//     <div style={{
//       position: "absolute", top: -6, right: 14, width: 12, height: 12,
//       background: "#1a0806", border: "1px solid rgba(201,169,110,.3)",
//       borderBottom: "none", borderRight: "none",
//       transform: "rotate(45deg)", zIndex: 1,
//     }} />
//     <div style={{
//       background: "#1a0806",
//       border: "1px solid rgba(201,169,110,.28)",
//       borderRadius: 5,
//       boxShadow: "0 32px 72px rgba(0,0,0,.95),inset 0 1px 0 rgba(201,169,110,.08)",
//       overflow: "hidden", position: "relative", zIndex: 2,
//     }}>
//       {/* Header */}
//       <div style={{
//         background: "linear-gradient(135deg,#2a1208,#1a0806)",
//         borderBottom: "1px solid rgba(201,169,110,.14)",
//         padding: "14px 16px 12px",
//         display: "flex", alignItems: "center", gap: 10,
//       }}>
//         <div style={{
//           width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
//           border: "1px solid rgba(201,169,110,.3)",
//           background: "rgba(201,169,110,.07)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}>
//           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M19 21v-1.5A4.5 4.5 0 0014.5 15h-5A4.5 4.5 0 005 19.5V21" />
//             <circle cx="12" cy="8" r="4" />
//           </svg>
//         </div>
//         <div>
//           <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, color: "#F0E8D8", lineHeight: 1.2 }}>My Account</p>
//           <p style={{ fontFamily: "'Jost',sans-serif", fontWeight: 300, fontSize: 8, letterSpacing: ".18em", color: "#5a4830", marginTop: 2 }}>WELCOME BACK</p>
//         </div>
//       </div>

//       {/* Items */}
//       <ProfItem icon={Ico.pUser} label="My Profile" onClick={() => onNavigate("/profile")} />
//       <ProfItem icon={Ico.pOrder} label="My Orders" onClick={() => onNavigate("/orders")} />
//       <div style={{ height: 1, background: "rgba(201,169,110,.07)", margin: "2px 0" }} />
//       <ProfItem icon={Ico.pOut} label="Logout" onClick={onLogout} danger />
//     </div>
//   </div>
// );

// const ProfItem = ({ icon, label, onClick, danger = false }) => {
//   const [h, setH] = useState(false);
//   return (
//     <button onClick={onClick}
//       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
//       style={{
//         width: "100%", textAlign: "left", border: "none", cursor: "pointer",
//         padding: "11px 16px", display: "flex", alignItems: "center", gap: 12,
//         fontFamily: "'Jost',sans-serif", fontWeight: 300, fontSize: 11, letterSpacing: ".14em",
//         color: h ? (danger ? "#e08080" : "#C9A96E") : (danger ? "#7a5050" : "#b8a88a"),
//         background: h ? (danger ? "rgba(180,60,60,.09)" : "rgba(201,169,110,.07)") : "transparent",
//         transition: "all .18s",
//         borderBottom: danger ? "none" : "1px solid rgba(201,169,110,.06)",
//         outline: "none",
//       }}>
//       <span style={{ color: danger ? (h ? "#e08080" : "#7a5050") : "#C9A96E", opacity: h ? 1 : .65, flexShrink: 0 }}>
//         {icon}
//       </span>
//       {label}
//     </button>
//   );
// };

// /* ═══════════════════════════════
//    MOBILE COMPONENTS
// ═══════════════════════════════ */
// const MobileBackdrop = ({ visible, onClick }) => (
//   <div onClick={onClick} style={{
//     position: "fixed", inset: 0, zIndex: 9998,
//     background: "rgba(0,0,0,.75)", backdropFilter: "blur(5px)",
//     opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none",
//     transition: "opacity .32s ease",
//   }} />
// );

// const MobileDrawer = ({ visible, onClose, acc, toggleAcc }) => {
//   const { navigate, token, setToken, setCartItems, wishlist, getCartCount, setShowSearch } = useContext(ShopContext);
//   const logout = () => { navigate("/login"); localStorage.removeItem("token"); setToken(""); setCartItems({}); onClose(); };

//   return (
//     <div className="ddl-scrl" style={{
//       position: "fixed", top: 0, right: 0, bottom: 0, width: 290, zIndex: 9999,
//       overflowY: "auto",
//       background: "linear-gradient(180deg,#120604 0%,#180806 100%)",
//       borderLeft: "1px solid rgba(201,169,110,.18)",
//       transition: "transform .38s cubic-bezier(.4,0,.2,1)",
//       transform: visible ? "translateX(0)" : "translateX(100%)",
//     }}>
//       {/* Header */}
//       <div style={{
//         padding: "16px 20px",
//         borderBottom: "1px solid rgba(201,169,110,.13)",
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//       }}>
//         <Logo w={136} />
//         <button onClick={onClose}
//           style={{
//             width: 30, height: 30, borderRadius: "50%", background: "transparent",
//             border: "1px solid rgba(201,169,110,.2)", color: "#c8b89a",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             cursor: "pointer", transition: "all .2s",
//           }}
//           onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,.55)"; e.currentTarget.style.color = "#C9A96E"; }}
//           onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,.2)"; e.currentTarget.style.color = "#c8b89a"; }}
//         >{Ico.close}</button>
//       </div>

//       {/* Nav */}
//       <div style={{ fontFamily: "'Jost',sans-serif" }}>
//         {[{ to: "/", label: "HOME" }, { to: "/collection", label: "COLLECTION" }, { to: "/about", label: "ABOUT" }, { to: "/contact", label: "CONTACT" }].map(({ to, label }) => (
//           <NavLink key={label} to={to} onClick={onClose}
//             style={({ isActive }) => ({
//               display: "block", padding: "14px 22px",
//               borderBottom: "1px solid rgba(201,169,110,.08)",
//               fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: ".26em",
//               color: isActive ? "#C9A96E" : "#b8a88a",
//               background: isActive ? "rgba(201,169,110,.05)" : "transparent",
//               textDecoration: "none", transition: "all .2s",
//             })}>
//             {label}
//           </NavLink>
//         ))}

//         <DrawerAcc title="MEN" open={acc === "men"} toggle={() => toggleAcc("men")}
//           sections={{
//             TOPS: [{ label: "Jackets", category: "Topwear", gender: "Men" }, { label: "Leather Coats", category: "Topwear", gender: "Men" }],
//             OTHERS: [{ label: "Pillow", category: "Others", gender: "Men" }, { label: "Cushion Cover", category: "Others", gender: "Men" }, { label: "Aprons", category: "Others", gender: "Men" }, { label: "Desk Mat", category: "Others", gender: "Men" }, { label: "Chair Cover", category: "Others", gender: "Men" }],
//           }} close={onClose} />

//         <DrawerAcc title="WOMEN" open={acc === "women"} toggle={() => toggleAcc("women")}
//           sections={{
//             TOPS: [{ label: "Jackets", category: "Topwear", gender: "Women" }, { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" }, { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" }, { label: "Racing Coat", category: "Topwear", gender: "Women" }, { label: "Women Winter Wear", category: "Topwear", gender: "Women" }, { label: "Women Night Dress", category: "Topwear", gender: "Women" }],
//             BOTTOMS: [{ label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" }, { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" }, { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" }],
//             OTHERS: [{ label: "Pillow", category: "Others", gender: "Women" }, { label: "Cushion Cover", category: "Others", gender: "Women" }, { label: "Aprons", category: "Others", gender: "Women" }, { label: "Desk Mat", category: "Others", gender: "Women" }, { label: "Chair Cover", category: "Others", gender: "Women" }],
//           }} close={onClose} />

//         {token && (
//           <div style={{ borderTop: "1px solid rgba(201,169,110,.1)", marginTop: 8, padding: "12px 0" }}>
//             {[{ label: "My Profile", path: "/profile" }, { label: "My Orders", path: "/orders" }].map(({ label, path }) => (
//               <button key={label} onClick={() => { navigate(path); onClose(); }}
//                 style={{
//                   width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
//                   padding: "12px 22px", fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: ".22em",
//                   color: "#9a8870", transition: "color .2s",
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.color = "#C9A96E"}
//                 onMouseLeave={e => e.currentTarget.style.color = "#9a8870"}
//               >{label}</button>
//             ))}
//             <button onClick={logout}
//               style={{
//                 width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
//                 padding: "12px 22px", fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: ".22em",
//                 color: "#7a5050", transition: "color .2s",
//               }}
//               onMouseEnter={e => e.currentTarget.style.color = "#e08080"}
//               onMouseLeave={e => e.currentTarget.style.color = "#7a5050"}
//             >Logout</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const DrawerAcc = ({ title, open, toggle, sections, close }) => (
//   <div style={{ borderBottom: "1px solid rgba(201,169,110,.08)" }}>
//     <button onClick={toggle} style={{
//       width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
//       padding: "14px 22px", display: "flex", justifyContent: "space-between", alignItems: "center",
//       fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: ".26em", color: "#b8a88a", transition: "color .2s",
//     }}
//       onMouseEnter={e => e.currentTarget.style.color = "#C9A96E"}
//       onMouseLeave={e => e.currentTarget.style.color = "#b8a88a"}
//     >
//       {title}
//       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round"
//         style={{ transition: "transform .3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
//         <path d="M6 9l6 6 6-6" />
//       </svg>
//     </button>
//     <div style={{
//       maxHeight: open ? "700px" : "0", opacity: open ? 1 : 0, overflow: "hidden",
//       transition: "max-height .4s cubic-bezier(.4,0,.2,1),opacity .28s ease",
//     }}>
//       <div style={{ background: "rgba(255,255,255,.015)", borderTop: "1px solid rgba(201,169,110,.06)", padding: "16px 22px 20px" }}>
//         {Object.entries(sections).map(([sec, items], idx) => (
//           <div key={idx} style={{ marginBottom: idx < Object.keys(sections).length - 1 ? 18 : 0 }}>
//             <p style={{
//               fontFamily: "'Jost',sans-serif", fontWeight: 400, fontSize: 8.5,
//               letterSpacing: ".28em", color: "#C9A96E", marginBottom: 10, textTransform: "uppercase",
//             }}>{sec}</p>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
//               {items.map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     to={item.category === "Others"
//                       ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//                       : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`}
//                     onClick={close} className="ddl-mobl"
//                     style={{ paddingLeft: 12, borderLeft: "1px solid rgba(201,169,110,.15)" }}>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default Navbar;




// import React, { useContext, useState, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { GoHeartFill } from "react-icons/go";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMagnifyingGlass,
//   faUser,
//   faBagShopping,
// } from "@fortawesome/free-solid-svg-icons";

// /* ══════════════════════════════════════════
//    STYLES
// ══════════════════════════════════════════ */
// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@300;400;500;600&display=swap');

//   :root {
//     --bg:        #1a0f0a;
//     --bg-menu:   #1a0f0a;
//     --gold:      #c8924a;
//     --gold-dim:  #8a5e2d;
//     --gold-pale: #e0b06a;
//     --white:     #f0e6d8;
//     --muted:     rgba(200,146,74,0.45);
//     --border:    rgba(200,146,74,0.18);
//   }

//   * { box-sizing: border-box; margin: 0; padding: 0; }

//   .ddl-wrap {
//     font-family: 'Montserrat', sans-serif;
//     background: var(--bg);
//     border-bottom: 1px solid var(--border);
//     position: sticky;
//     top: 0;
//     z-index: 9999;
//   }

//   .ddl-row {
//     max-width: 1400px;
//     margin: 0 auto;
//     padding: 0 32px;
//     height: 68px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 24px;
//   }

//   /* ── LOGO ── */
//   .ddl-logo {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     text-decoration: none;
//     flex-shrink: 0;
//   }
//   .ddl-diamond {
//     width: 42px;
//     height: 42px;
//     flex-shrink: 0;
//   }
//   .ddl-logo-words {
//     display: flex;
//     flex-direction: column;
//     line-height: 1;
//   }
//   .ddl-logo-main {
//     font-family: 'Montserrat', sans-serif;
//     font-size: 15px;
//     font-weight: 600;
//     letter-spacing: 0.22em;
//     color: var(--white);
//     text-transform: uppercase;
//   }
//   .ddl-logo-main span { color: var(--gold); }
//   .ddl-logo-rule {
//     display: block;
//     width: 100%;
//     height: 1px;
//     background: linear-gradient(90deg, var(--gold-dim), transparent);
//     margin: 3px 0;
//   }
//   .ddl-logo-sub {
//     font-size: 8.5px;
//     font-weight: 400;
//     letter-spacing: 0.35em;
//     color: var(--gold-dim);
//     text-transform: uppercase;
//   }

//   /* ── NAV LINKS ── */
//   .ddl-nav {
//     display: flex;
//     align-items: center;
//     gap: 36px;
//     list-style: none;
//   }
//   .ddl-navlink {
//     position: relative;
//     font-size: 11px;
//     font-weight: 500;
//     letter-spacing: 0.18em;
//     text-transform: uppercase;
//     color: var(--white);
//     text-decoration: none;
//     cursor: pointer;
//     padding-bottom: 4px;
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     background: none;
//     border: none;
//     transition: color 0.22s;
//     white-space: nowrap;
//   }
//   .ddl-navlink::after {
//     content: '';
//     position: absolute;
//     bottom: 0; left: 0;
//     width: 0; height: 1px;
//     background: var(--gold);
//     transition: width 0.28s ease;
//   }
//   .ddl-navlink:hover,
//   .ddl-navlink.is-active { color: var(--gold); }
//   .ddl-navlink:hover::after,
//   .ddl-navlink.is-active::after { width: 100%; }

//   .ddl-arrow {
//     width: 6px; height: 6px;
//     border-right: 1.5px solid currentColor;
//     border-bottom: 1.5px solid currentColor;
//     transform: rotate(45deg) translateY(-1px);
//     display: inline-block;
//     transition: transform 0.25s;
//     flex-shrink: 0;
//   }
//   .ddl-arrow.up { transform: rotate(-135deg) translateY(2px); }

//   /* ── RIGHT ICONS ── */
//   .ddl-icons {
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     flex-shrink: 0;
//   }
//   .ddl-icon-btn {
//     background: none;
//     border: none;
//     cursor: pointer;
//     color: var(--white);
//     font-size: 16px;
//     display: flex;
//     align-items: center;
//     position: relative;
//     transition: color 0.2s;
//     text-decoration: none;
//     padding: 0;
//   }
//   .ddl-icon-btn:hover { color: var(--gold); }
//   .ddl-badge {
//     position: absolute;
//     top: -6px; right: -7px;
//     background: var(--gold);
//     color: #1a0f0a;
//     font-size: 8px;
//     font-weight: 700;
//     min-width: 16px;
//     height: 16px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   /* user dropdown */
//   .ddl-user-wrap { position: relative; }
//   .ddl-user-dropdown {
//     display: none;
//     position: absolute;
//     top: calc(100% + 14px);
//     right: -10px;
//     background: #221208;
//     border: 1px solid var(--border);
//     border-top: 2px solid var(--gold);
//     min-width: 160px;
//     z-index: 9999;
//     box-shadow: 0 12px 40px rgba(0,0,0,0.5);
//   }
//   .ddl-user-wrap:hover .ddl-user-dropdown { display: block; }
//   .ddl-user-dropdown p {
//     display: block;
//     padding: 11px 18px;
//     font-size: 11px;
//     letter-spacing: 0.12em;
//     color: var(--white);
//     text-transform: uppercase;
//     cursor: pointer;
//     border-bottom: 1px solid var(--border);
//     transition: background 0.15s, color 0.15s;
//   }
//   .ddl-user-dropdown p:last-child { border-bottom: none; }
//   .ddl-user-dropdown p:hover { background: rgba(200,146,74,0.1); color: var(--gold); }

//   /* ── MEGA MENU ── */
//   .ddl-mega {
//     position: fixed;
//     left: 0; right: 0;
//     top: 68px;
//     background: var(--bg-menu);
//     border-top: 1px solid var(--border);
//     border-bottom: 1px solid var(--border);
//     box-shadow: 0 16px 48px rgba(0,0,0,0.65);
//     z-index: 9998;
//     animation: megaIn 0.2s ease;
//   }
//   @keyframes megaIn {
//     from { opacity: 0; transform: translateY(-6px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   .ddl-mega-inner {
//     max-width: 1400px;
//     margin: 0 auto;
//     padding: 36px 80px;
//     display: flex;
//     gap: 70px;
//     align-items: flex-start;
//   }
//   .ddl-mega-col { min-width: 140px; }
//   .ddl-mega-col-title {
//     font-size: 9px;
//     font-weight: 600;
//     letter-spacing: 0.3em;
//     color: var(--gold-dim);
//     text-transform: uppercase;
//     margin-bottom: 18px;
//     padding-bottom: 10px;
//     border-bottom: 1px solid var(--border);
//   }
//   .ddl-mega-col ul {
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 13px;
//   }
//   .ddl-mega-col ul li {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//   }
//   .ddl-mega-col ul li::before {
//     content: '';
//     display: inline-block;
//     width: 14px; height: 1px;
//     background: var(--gold-dim);
//     flex-shrink: 0;
//   }
//   .ddl-mega-col ul li a {
//     font-size: 12px;
//     font-weight: 400;
//     letter-spacing: 0.06em;
//     color: rgba(240,230,216,0.72);
//     text-decoration: none;
//     transition: color 0.2s;
//   }
//   .ddl-mega-col ul li a:hover { color: var(--gold); }
//   .ddl-v-div {
//     width: 1px;
//     align-self: stretch;
//     background: var(--border);
//   }
//   .ddl-mega-img {
//     flex-shrink: 0;
//     width: 200px;
//     position: relative;
//     margin-left: auto;
//   }
//   .ddl-mega-img img {
//     width: 100%;
//     height: 260px;
//     object-fit: cover;
//     filter: brightness(0.72);
//   }
//   .ddl-mega-img-cap {
//     position: absolute;
//     bottom: 0; left: 0; right: 0;
//     padding: 12px;
//     font-size: 8.5px;
//     font-weight: 600;
//     letter-spacing: 0.28em;
//     text-transform: uppercase;
//     color: var(--gold);
//     text-align: center;
//     background: linear-gradient(0deg, rgba(26,15,10,0.92) 0%, transparent 100%);
//   }

//   /* ── MOBILE SIDEBAR ── */
//   .ddl-sidebar {
//     position: fixed;
//     top: 0; right: 0; bottom: 0;
//     background: #150c07;
//     z-index: 99999;
//     transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
//     overflow: hidden;
//     font-family: 'Montserrat', sans-serif;
//   }
//   .ddl-sb-head {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 18px 24px;
//     border-bottom: 1px solid var(--border);
//   }
//   .ddl-sb-close {
//     background: none;
//     border: none;
//     color: var(--white);
//     font-size: 11px;
//     letter-spacing: 0.2em;
//     text-transform: uppercase;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     transition: color 0.2s;
//   }
//   .ddl-sb-close:hover { color: var(--gold); }
//   .ddl-sb-link {
//     display: block;
//     padding: 14px 26px;
//     font-size: 11px;
//     font-weight: 500;
//     letter-spacing: 0.25em;
//     text-transform: uppercase;
//     color: rgba(240,230,216,0.8);
//     text-decoration: none;
//     border-bottom: 1px solid rgba(200,146,74,0.08);
//     transition: color 0.2s, padding-left 0.2s;
//   }
//   .ddl-sb-link:hover { color: var(--gold); padding-left: 34px; }
//   .ddl-sb-accord-btn {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 14px 26px;
//     font-size: 11px;
//     font-weight: 500;
//     letter-spacing: 0.25em;
//     text-transform: uppercase;
//     color: rgba(240,230,216,0.8);
//     background: none;
//     border: none;
//     border-bottom: 1px solid rgba(200,146,74,0.08);
//     cursor: pointer;
//     transition: color 0.2s;
//   }
//   .ddl-sb-accord-btn:hover { color: var(--gold); }
//   .ddl-sb-body {
//     overflow: hidden;
//     transition: max-height 0.4s ease, opacity 0.3s;
//   }
//   .ddl-sb-section {
//     padding: 12px 26px 12px 40px;
//     border-bottom: 1px solid rgba(200,146,74,0.05);
//   }
//   .ddl-sb-section h4 {
//     font-size: 8px;
//     letter-spacing: 0.32em;
//     color: var(--gold-dim);
//     text-transform: uppercase;
//     font-weight: 600;
//     margin-bottom: 10px;
//   }
//   .ddl-sb-section a {
//     display: block;
//     padding: 5px 0;
//     font-size: 11px;
//     color: rgba(240,230,216,0.55);
//     text-decoration: none;
//     transition: color 0.2s;
//     letter-spacing: 0.06em;
//   }
//   .ddl-sb-section a:hover { color: var(--gold); }
// `;

// /* ══════════════════════════════════════════
//    DIAMOND LOGO SVG
// ══════════════════════════════════════════ */
// const DiamondIcon = () => (
//   <svg className="ddl-diamond" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect x="6" y="6" width="30" height="30" rx="1"
//       transform="rotate(45 21 21)"
//       stroke="#c8924a" strokeWidth="1.4" fill="none" />
//     <rect x="11" y="11" width="20" height="20" rx="0.5"
//       transform="rotate(45 21 21)"
//       stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//     <text x="21" y="26.5"
//       fontFamily="Montserrat, sans-serif"
//       fontSize="13" fontWeight="600"
//       fill="#c8924a" textAnchor="middle">D</text>
//   </svg>
// );

// /* ══════════════════════════════════════════
//    MEGA MENU
// ══════════════════════════════════════════ */
// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//   <div className="ddl-mega" onMouseEnter={showMenu} onMouseLeave={hideMenu}>
//     <div className="ddl-mega-inner">{children}</div>
//   </div>
// );

// const MegaColumn = ({ title, items }) => (
//   <div className="ddl-mega-col">
//     <div className="ddl-mega-col-title">{title}</div>
//     <ul>
//       {items.map((item, i) => {
//         const toURL =
//           item.category === "Others"
//             ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//             : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`;
//         return <li key={i}><Link to={toURL}>{item.label}</Link></li>;
//       })}
//     </ul>
//   </div>
// );

// /* ══════════════════════════════════════════
//    MOBILE ACCORDION
// ══════════════════════════════════════════ */
// const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
//   <div>
//     <button className="ddl-sb-accord-btn" onClick={toggle}>
//       {title}
//       <span style={{
//         display: "inline-block",
//         width: 8, height: 8,
//         borderRight: "1.5px solid currentColor",
//         borderBottom: "1.5px solid currentColor",
//         transform: open ? "rotate(-135deg) translateY(2px)" : "rotate(45deg) translateY(-1px)",
//         transition: "transform 0.3s",
//         flexShrink: 0,
//       }} />
//     </button>
//     <div className="ddl-sb-body" style={{ maxHeight: open ? 700 : 0, opacity: open ? 1 : 0 }}>
//       {Object.entries(sections).map(([sec, items], idx) => (
//         <div className="ddl-sb-section" key={idx}>
//           <h4>{sec}</h4>
//           {items.map((item, i) => (
//             <Link key={i} onClick={closeSidebar}
//               to={
//                 item.category === "Others"
//                   ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//                   : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`
//               }>
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// /* ══════════════════════════════════════════
//    NAVBAR
// ══════════════════════════════════════════ */
// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileAccord, setMobileAccord] = useState(null);
//   const hideRef = useRef(null);

//   const {
//     wishlist, setShowSearch, getCartCount,
//     navigate, token, setToken, setCartItems,
//   } = useContext(ShopContext);

//   const logout = () => {
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

//       <header className="ddl-wrap">
//         <div className="ddl-row">

//           {/* LOGO */}
//           <Link to="/" className="ddl-logo">
//             <DiamondIcon />
//             <div className="ddl-logo-words">
//               <span className="ddl-logo-main"><span>D DOLLY</span> LAMB</span>
//               <span className="ddl-logo-rule" />
//               <span className="ddl-logo-sub">LAMB</span>
//             </div>
//           </Link>

//           {/* CENTER NAV */}
//           <ul className="ddl-nav hidden sm:flex">
//             <li>
//               <NavLink to="/" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>
//                 Home
//               </NavLink>
//             </li>

//             {/* MEN */}
//             <li style={{ position: "relative" }}
//               onMouseEnter={() => showMenu("men")}
//               onMouseLeave={hideMenu}>
//               <div className={`ddl-navlink${activeMenu === "men" ? " is-active" : ""}`}>
//                 Men <span className={`ddl-arrow${activeMenu === "men" ? " up" : ""}`} />
//               </div>
//               {activeMenu === "men" && (
//                 <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
//                   <MegaColumn title="Tops" items={[
//                     { label: "Jackets", category: "Topwear", gender: "Men" },
//                     { label: "Coats", category: "Topwear", gender: "Men" },
//                   ]} />
//                   <div className="ddl-v-div" />
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Men" },
//                     { label: "Cushion Cover", category: "Others", gender: "Men" },
//                     { label: "Aprons", category: "Others", gender: "Men" },
//                     { label: "Desk Mat", category: "Others", gender: "Men" },
//                     { label: "Chair Cover", category: "Others", gender: "Men" },
//                   ]} />
//                   <div className="ddl-mega-img">
//                     <img src={assets.men_nav} alt="Men's Collection" />
//                     <div className="ddl-mega-img-cap">Men's Collection</div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             {/* WOMEN */}
//             <li style={{ position: "relative" }}
//               onMouseEnter={() => showMenu("women")}
//               onMouseLeave={hideMenu}>
//               <div className={`ddl-navlink${activeMenu === "women" ? " is-active" : ""}`}>
//                 Women <span className={`ddl-arrow${activeMenu === "women" ? " up" : ""}`} />
//               </div>
//               {activeMenu === "women" && (
//                 <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
//                   <MegaColumn title="Tops" items={[
//                     { label: "Jackets", category: "Topwear", gender: "Women" },
//                     { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
//                     { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
//                     { label: "Racing Coat", category: "Topwear", gender: "Women" },
//                     { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
//                     { label: "Women Night Dress", category: "Topwear", gender: "Women" },
//                   ]} />
//                   <div className="ddl-v-div" />
//                   <MegaColumn title="Bottoms" items={[
//                     { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
//                     { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
//                     { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
//                   ]} />
//                   <div className="ddl-v-div" />
//                   <MegaColumn title="Others" items={[
//                     { label: "Pillow", category: "Others", gender: "Women" },
//                     { label: "Cushion Cover", category: "Others", gender: "Women" },
//                     { label: "Aprons", category: "Others", gender: "Women" },
//                     { label: "Desk Mat", category: "Others", gender: "Women" },
//                     { label: "Chair Cover", category: "Others", gender: "Women" },
//                   ]} />
//                   <div className="ddl-mega-img">
//                     <img src={assets.women_nav} alt="Women's Collection" />
//                     <div className="ddl-mega-img-cap">Women's Collection</div>
//                   </div>
//                 </MegaMenu>
//               )}
//             </li>

//             <li>
//               <NavLink to="/collection" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Collection</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Contact</NavLink>
//             </li>
//           </ul>

//           {/* RIGHT ICONS */}
//           <div className="ddl-icons">
//             <button className="ddl-icon-btn" aria-label="Search"
//               onClick={() => { setShowSearch(true); navigate("/collection"); }}>
//               <FontAwesomeIcon icon={faMagnifyingGlass} />
//             </button>

//             <div className="ddl-user-wrap">
//               <button className="ddl-icon-btn" aria-label="Account"
//                 onClick={() => !token && navigate("/login")}>
//                 <FontAwesomeIcon icon={faUser} />
//               </button>
//               {token && (
//                 <div className="ddl-user-dropdown">
//                   <p onClick={() => navigate("/profile")}>My Profile</p>
//                   <p onClick={() => navigate("/orders")}>Orders</p>
//                   <p onClick={logout}>Logout</p>
//                 </div>
//               )}
//             </div>

//             <Link to="/wishlist" className="ddl-icon-btn" aria-label="Wishlist">
//               <GoHeartFill style={{ fontSize: 18 }} />
//               {wishlist?.length > 0 && <span className="ddl-badge">{wishlist.length}</span>}
//             </Link>

//             <Link to="/cart" className="ddl-icon-btn" aria-label="Cart">
//               <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: 17 }} />
//               <span className="ddl-badge">{getCartCount()}</span>
//             </Link>

//             <button className="ddl-icon-btn sm:hidden" aria-label="Menu"
//               onClick={() => setVisible(true)}>
//               <HiOutlineMenuAlt3 style={{ fontSize: 22 }} />
//             </button>
//           </div>
//         </div>

//         {/* MOBILE SIDEBAR */}
//         <div className="ddl-sidebar" style={{ width: visible ? "100%" : 0 }}>
//           <div className="ddl-sb-head">
//             <button className="ddl-sb-close" onClick={() => setVisible(false)}>
//               <HiOutlineMenuAlt3 /> Close
//             </button>
//             <DiamondIcon />
//           </div>

//           <NavLink className="ddl-sb-link" to="/" onClick={() => setVisible(false)}>Home</NavLink>

//           <MobileAccordion title="Men"
//             open={mobileAccord === "men"}
//             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//             sections={{
//               TOPS: [
//                 { label: "Jackets", category: "Topwear", gender: "Men" },
//                 { label: "Leather Coats", category: "Topwear", gender: "Men" },
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
//                 { label: "Jackets", category: "Topwear", gender: "Women" },
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



// import React, { useContext, useState, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { GoHeartFill } from "react-icons/go";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMagnifyingGlass,
//   faUser,
//   faBagShopping,
// } from "@fortawesome/free-solid-svg-icons";

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

//   /* ── Active nav underline ── */
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

//   /* ── Mega menu animations ── */
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

//   .ddl-mega {
//     animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .ddl-mega-col { animation: colIn 0.35s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
//   .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
//   .ddl-col-rule {
//     display: block; height: 1px; width: 0;
//     background: linear-gradient(to right, var(--gold-dim), transparent);
//     animation: lineExpand 0.5s ease 0.1s both;
//   }
//   .ddl-mega-img-wrap {
//     animation: imgReveal 0.45s ease 0.08s both;
//   }
//   .ddl-mega-item {
//     animation: itemSlide 0.3s ease both;
//   }
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

//   /* ── User dropdown ── */
//   .ddl-user-wrap { position: relative; }
//   .ddl-dropdown {
//     display: none;
//     position: absolute; top: calc(100% + 14px); right: -10px;
//     background: #221208;
//     border: 1px solid var(--border);
//     border-top: 2px solid var(--gold);
//     min-width: 160px; z-index: 9999;
//     box-shadow: 0 12px 40px rgba(0,0,0,0.5);
//     animation: megaIn 0.2s ease;
//   }
//   .ddl-user-wrap:hover .ddl-dropdown { display: block; }
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

//   /* ── Sidebar ── */
//   .ddl-sidebar {
//     position: fixed; top: 0; right: 0; bottom: 0;
//     background: #120a05; z-index: 99999;
//     transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
//     overflow: hidden; font-family: 'Montserrat', sans-serif;
//     border-left: 1px solid var(--border);
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

//   /* ── Icon btn ── */
//   .ddl-icon-btn {
//     background: none; border: none; cursor: pointer;
//     color: var(--white); display: flex; align-items: center;
//     position: relative; transition: color 0.2s;
//     text-decoration: none; padding: 0;
//   }
//   .ddl-icon-btn:hover { color: var(--gold); }
// `;

// /* ── PREMIUM SVG ICONS ──────────────────── */
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

// /* Premium leaf/brand accent shown in mega */
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

// /* Arrow chevron */
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

// /* ── MEGA MENU WRAPPER ────────────────── */
// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//   <div
//     className="ddl-mega fixed left-0 right-0"
//     style={{ top: 68, background: "#1a0f0a", borderTop: "1px solid rgba(200,146,74,0.18)", borderBottom: "1px solid rgba(200,146,74,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//     onMouseEnter={showMenu}
//     onMouseLeave={hideMenu}
//   >
//     {/* Top gold accent line */}
//     <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.7 }} />
//     <div className="max-w-[1400px] mx-auto px-16 py-9 flex gap-14 items-start">
//       {children}
//     </div>
//   </div>
// );

// const MegaColumn = ({ title, badge, items }) => (
//   <div className="ddl-mega-col min-w-[150px]">
//     {badge && <MegaBadge text={badge} />}
//     <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.3em", color: "#8a5e2d", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", marginBottom: "14px" }}>
//       {title}
//     </div>
//     <span className="ddl-col-rule" style={{ display: "block", marginBottom: "16px" }} />
//     <ul className="flex flex-col gap-3 list-none p-0 m-0">
//       {items.map((item, i) => {
//         const to = item.category === "Others"
//           ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//           : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`;
//         return (
//           <li key={i} className="ddl-mega-item">
//             <Link to={to} className="ddl-mega-link">{item.label}</Link>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// );

// /* ── MOBILE ACCORDION ─────────────────── */
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
//             <Link key={i} onClick={closeSidebar}
//               to={item.category === "Others"
//                 ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//                 : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`}>
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
//   const hideRef = useRef(null);

//   const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
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
//         className="sticky top-0 z-[9999]"
//         style={{ background: "#1a0f0a", borderBottom: "1px solid rgba(200,146,74,0.18)", fontFamily: "Montserrat, sans-serif" }}
//       >
//         {/* ── TOP GOLD LINE ── */}
//         <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.6 }} />

//         <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between gap-6" style={{ height: 66 }}>

//           {/* ── LOGO ── */}
//           <Link to="/" className="flex items-center gap-3 no-underline flex-shrink-0">
//             <DiamondIcon />
//             <div className="flex flex-col leading-none">
//               <span style={{ fontFamily: "Montserrat,sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.22em", color: "#f0e6d8", textTransform: "uppercase" }}>
//                 <span style={{ color: "#c8924a" }}>D DOLLY</span> LAMB
//               </span>
//               <span style={{ display: "block", height: 1, background: "linear-gradient(to right, #8a5e2d, transparent)", margin: "3px 0" }} />
//               <span style={{ fontSize: 8.5, letterSpacing: "0.38em", color: "#8a5e2d", textTransform: "uppercase" }}>ARTISAN ATELIER</span>
//             </div>
//           </Link>

//           {/* ── CENTER NAV ── */}
//           <ul className="hidden sm:flex items-center gap-8 list-none m-0 p-0">
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
//                     { label: "Jackets", category: "Topwear", gender: "Men" },
//                     { label: "Coats", category: "Topwear", gender: "Men" },
//                   ]} />
//                   <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
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
//                     {/* Gold frame corners */}
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
//                     { label: "Jackets", category: "Topwear", gender: "Women" },
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
//           <div className="flex items-center gap-5 flex-shrink-0">

//             {/* Search */}
//             <button className="ddl-icon-btn" aria-label="Search"
//               onClick={() => { setShowSearch(true); navigate("/collection"); }}>
//               <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 15 }} />
//             </button>

//             {/* Account */}
//             <div className="ddl-user-wrap">
//               <button className="ddl-icon-btn" aria-label="Account"
//                 onClick={() => !token && navigate("/login")}>
//                 <FontAwesomeIcon icon={faUser} style={{ fontSize: 15 }} />
//               </button>
//               {token && (
//                 <div className="ddl-dropdown">
//                   {/* Profile header */}
//                   <div style={{ padding: "12px 18px 8px", borderBottom: "1px solid rgba(200,146,74,0.18)" }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                       <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #c8924a, #8a5e2d)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                         <FontAwesomeIcon icon={faUser} style={{ fontSize: 11, color: "#1a0f0a" }} />
//                       </div>
//                       <span style={{ fontSize: 9, letterSpacing: "0.18em", color: "#c8924a", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif" }}>My Account</span>
//                     </div>
//                   </div>
//                   <p className="ddl-dropdown-item" onClick={() => navigate("/profile")}>My Profile</p>
//                   <p className="ddl-dropdown-item" onClick={() => navigate("/orders")}>Orders</p>
//                   <p className="ddl-dropdown-item" onClick={logout}>Logout</p>
//                 </div>
//               )}
//             </div>

//             {/* Wishlist */}
//             <Link to="/wishlist" className="ddl-icon-btn relative" aria-label="Wishlist">
//               <GoHeartFill style={{ fontSize: 17 }} />
//               {wishlist?.length > 0 && (
//                 <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
//                   style={{ background: "linear-gradient(135deg,#c8924a,#f7c568)", color: "#1a0f0a" }}>
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="ddl-icon-btn relative" aria-label="Cart">
//               <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: 16 }} />
//               <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
//                 style={{ background: "linear-gradient(135deg,#c8924a,#f7c568)", color: "#1a0f0a" }}>
//                 {getCartCount()}
//               </span>
//             </Link>

//             {/* Hamburger — mobile only */}
//             <button className="ddl-icon-btn sm:hidden" aria-label="Menu"
//               onClick={() => setVisible(true)}>
//               <HiOutlineMenuAlt3 style={{ fontSize: 22 }} />
//             </button>
//           </div>
//         </div>

//         {/* ── MOBILE SIDEBAR ── */}
//         <div className="ddl-sidebar" style={{ width: visible ? "100%" : 0 }}>
//           {/* Head */}
//           <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(200,146,74,0.18)" }}>
//             <button
//               className="flex items-center gap-2 bg-none border-none cursor-pointer text-xs tracking-widest uppercase"
//               style={{ color: "#f0e6d8", fontFamily: "Montserrat,sans-serif", transition: "color 0.2s" }}
//               onMouseEnter={e => e.currentTarget.style.color = "#c8924a"}
//               onMouseLeave={e => e.currentTarget.style.color = "#f0e6d8"}
//               onClick={() => setVisible(false)}>
//               <HiOutlineMenuAlt3 /> Close
//             </button>
//             <DiamondIcon />
//           </div>

//           {/* Top gold strip */}
//           <div style={{ height: 1, background: "linear-gradient(to right, transparent, #c8924a, transparent)", opacity: 0.5 }} />

//           <NavLink className="ddl-sb-link" to="/" onClick={() => setVisible(false)}>Home</NavLink>

//           <MobileAccordion title="Men"
//             open={mobileAccord === "men"}
//             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//             sections={{
//               TOPS: [
//                 { label: "Jackets", category: "Topwear", gender: "Men" },
//                 { label: "Leather Coats", category: "Topwear", gender: "Men" },
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
//                 { label: "Jackets", category: "Topwear", gender: "Women" },
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






// import React, { useContext, useState, useRef } from "react";
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

//   /* ── Active nav underline ── */
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

//   /* ── Mega menu animations ── */
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

//   .ddl-mega {
//     animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .ddl-mega-col { animation: colIn 0.35s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
//   .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
//   .ddl-col-rule {
//     display: block; height: 1px; width: 0;
//     background: linear-gradient(to right, var(--gold-dim), transparent);
//     animation: lineExpand 0.5s ease 0.1s both;
//   }
//   .ddl-mega-img-wrap {
//     animation: imgReveal 0.45s ease 0.08s both;
//   }
//   .ddl-mega-item {
//     animation: itemSlide 0.3s ease both;
//   }
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

//   /* ── User dropdown ── */
//   .ddl-user-wrap { position: relative; }
//   .ddl-dropdown {
//     display: none;
//     position: absolute; top: calc(100% + 14px); right: -10px;
//     background: #221208;
//     border: 1px solid var(--border);
//     border-top: 2px solid var(--gold);
//     min-width: 160px; z-index: 9999;
//     box-shadow: 0 12px 40px rgba(0,0,0,0.5);
//     animation: megaIn 0.2s ease;
//   }
//   .ddl-user-wrap:hover .ddl-dropdown { display: block; }
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

//   /* ── Sidebar ── */
//   .ddl-sidebar {
//     position: fixed; top: 0; right: 0; bottom: 0;
//     background: #120a05; z-index: 99999;
//     transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
//     overflow: hidden; font-family: 'Montserrat', sans-serif;
//     border-left: 1px solid var(--border);
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

//   /* ── Icon btn ── */
//   .ddl-icon-btn {
//     background: none; border: none; cursor: pointer;
//     color: var(--white); display: flex; align-items: center;
//     position: relative; transition: color 0.2s;
//     text-decoration: none; padding: 0;
//   }
//   .ddl-icon-btn:hover { color: var(--gold); }
// `;

// /* ── PREMIUM SVG ICONS ──────────────────── */
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

// /* Premium leaf/brand accent shown in mega */
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

// /* Arrow chevron */
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

// /* ── MEGA MENU WRAPPER ────────────────── */
// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//   <div
//     className="ddl-mega fixed left-0 right-0"
//     style={{ top: 68, background: "#1a0f0a", borderTop: "1px solid rgba(200,146,74,0.18)", borderBottom: "1px solid rgba(200,146,74,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//     onMouseEnter={showMenu}
//     onMouseLeave={hideMenu}
//   >
//     {/* Top gold accent line */}
//     <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.7 }} />
//     <div className="max-w-[1400px] mx-auto px-16 py-9 flex gap-14 items-start">
//       {children}
//     </div>
//   </div>
// );

// const MegaColumn = ({ title, badge, items }) => (
//   <div className="ddl-mega-col min-w-[150px]">
//     {badge && <MegaBadge text={badge} />}
//     <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.3em", color: "#8a5e2d", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", marginBottom: "14px" }}>
//       {title}
//     </div>
//     <span className="ddl-col-rule" style={{ display: "block", marginBottom: "16px" }} />
//     <ul className="flex flex-col gap-3 list-none p-0 m-0">
//       {items.map((item, i) => {
//         const to = item.category === "Others"
//           ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//           : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`;
//         return (
//           <li key={i} className="ddl-mega-item">
//             <Link to={to} className="ddl-mega-link">{item.label}</Link>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// );

// /* ── MOBILE ACCORDION ─────────────────── */
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
//             <Link key={i} onClick={closeSidebar}
//               to={item.category === "Others"
//                 ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//                 : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`}>
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
//   const hideRef = useRef(null);

//   const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
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
//         className="sticky top-0 z-[9999]"
//         style={{ background: "#1a0f0a", borderBottom: "1px solid rgba(200,146,74,0.18)", fontFamily: "Montserrat, sans-serif" }}
//       >
//         {/* ── TOP GOLD LINE ── */}
//         <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.6 }} />

//         <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between gap-6" style={{ height: 66 }}>

//           {/* ── LOGO ── */}
//           <Link to="/" className="flex items-center gap-3 no-underline flex-shrink-0">
//             <DiamondIcon />
//             <div className="flex flex-col leading-none">
//               <span style={{ fontFamily: "Montserrat,sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.22em", color: "#f0e6d8", textTransform: "uppercase" }}>
//                 <span style={{ color: "#c8924a" }}>D DOLLY</span> LAMB
//               </span>
//               <span style={{ display: "block", height: 1, background: "linear-gradient(to right, #8a5e2d, transparent)", margin: "3px 0" }} />
//               <span style={{ fontSize: 8.5, letterSpacing: "0.38em", color: "#8a5e2d", textTransform: "uppercase" }}>ARTISAN ATELIER</span>
//             </div>
//           </Link>

//           {/* ── CENTER NAV ── */}
//           <ul className="hidden sm:flex items-center gap-8 list-none m-0 p-0">
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
//                     { label: "Jackets", category: "Topwear", gender: "Men" },
//                     { label: "Coats", category: "Topwear", gender: "Men" },
//                   ]} />
//                   <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
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
//                     {/* Gold frame corners */}
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
//                     { label: "Jackets", category: "Topwear", gender: "Women" },
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
//           <div className="flex items-center gap-5 flex-shrink-0">

//             {/* Search */}
//             <button className="ddl-icon-btn" aria-label="Search"
//               onClick={() => { setShowSearch(true); navigate("/collection"); }}>
//               <IconSearch />
//             </button>

//             {/* Account */}
//             <div className="ddl-user-wrap">
//               <button className="ddl-icon-btn" aria-label="Account"
//                 onClick={() => !token && navigate("/login")}>
//                 <IconUser />
//               </button>
//               {token && (
//                 <div className="ddl-dropdown">
//                   {/* Profile header */}
//                   <div style={{ padding: "12px 18px 8px", borderBottom: "1px solid rgba(200,146,74,0.18)" }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                       <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #c8924a, #8a5e2d)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                         <IconUser />
//                       </div>
//                       <span style={{ fontSize: 9, letterSpacing: "0.18em", color: "#c8924a", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif" }}>My Account</span>
//                     </div>
//                   </div>
//                   <p className="ddl-dropdown-item" onClick={() => navigate("/profile")}>My Profile</p>
//                   <p className="ddl-dropdown-item" onClick={() => navigate("/orders")}>Orders</p>
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
//             <button className="ddl-icon-btn sm:hidden" aria-label="Menu"
//               onClick={() => setVisible(true)}>
//               <IconMenu />
//             </button>
//           </div>
//         </div>

//         {/* ── MOBILE SIDEBAR ── */}
//         <div className="ddl-sidebar" style={{ width: visible ? "100%" : 0 }}>
//           {/* Head */}
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

//           {/* Top gold strip */}
//           <div style={{ height: 1, background: "linear-gradient(to right, transparent, #c8924a, transparent)", opacity: 0.5 }} />

//           <NavLink className="ddl-sb-link" to="/" onClick={() => setVisible(false)}>Home</NavLink>

//           <MobileAccordion title="Men"
//             open={mobileAccord === "men"}
//             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//             sections={{
//               TOPS: [
//                 { label: "Jackets", category: "Topwear", gender: "Men" },
//                 { label: "Leather Coats", category: "Topwear", gender: "Men" },
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
//                 { label: "Jackets", category: "Topwear", gender: "Women" },
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

//   /* ── Active nav underline ── */
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

//   /* ── Mega menu animations ── */
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

//   .ddl-mega {
//     animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .ddl-mega-col { animation: colIn 0.35s ease both; }
//   .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
//   .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
//   .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
//   .ddl-col-rule {
//     display: block; height: 1px; width: 0;
//     background: linear-gradient(to right, var(--gold-dim), transparent);
//     animation: lineExpand 0.5s ease 0.1s both;
//   }
//   .ddl-mega-img-wrap {
//     animation: imgReveal 0.45s ease 0.08s both;
//   }
//   .ddl-mega-item {
//     animation: itemSlide 0.3s ease both;
//   }
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

//   /* ── User dropdown ── */
//   .ddl-user-wrap { position: relative; }
//   .ddl-dropdown {
//     position: fixed;
//     top: 68px;
//     right: 16px;
//     background: #221208;
//     border: 1px solid var(--border);
//     border-top: 2px solid var(--gold);
//     min-width: 190px;
//     z-index: 999999;
//     box-shadow: 0 16px 48px rgba(0,0,0,0.8);
//     animation: megaIn 0.18s ease both;
//   }
//   /* Bridge: invisible hover area fills gap between icon and dropdown */
//   .ddl-dropdown::before {
//     content: '';
//     position: absolute;
//     top: -18px;
//     left: 0; right: 0;
//     height: 18px;
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

//   /* ── Sidebar ── */
//   .ddl-sidebar {
//     position: fixed; top: 0; right: 0; bottom: 0;
//     background: #120a05; z-index: 99999;
//     transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
//     overflow-x: hidden;
//     overflow-y: auto;
//     font-family: 'Montserrat', sans-serif;
//     border-left: 1px solid var(--border);
//     max-width: 100vw;
//   }
//   /* Hide hamburger on desktop */
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

//   /* ── Icon btn ── */
//   .ddl-icon-btn {
//     background: none; border: none; cursor: pointer;
//     color: var(--white); display: flex; align-items: center;
//     position: relative; transition: color 0.2s;
//     text-decoration: none; padding: 0;
//   }
//   .ddl-icon-btn:hover { color: var(--gold); }
// `;

// /* ── PREMIUM SVG ICONS ──────────────────── */
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

// /* Premium leaf/brand accent shown in mega */
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

// /* Arrow chevron */
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

// /* ── MEGA MENU WRAPPER ────────────────── */
// const MegaMenu = ({ children, showMenu, hideMenu }) => (
//   <div
//     className="ddl-mega fixed left-0 right-0"
//     style={{ top: 68, background: "#1a0f0a", borderTop: "1px solid rgba(200,146,74,0.18)", borderBottom: "1px solid rgba(200,146,74,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
//     onMouseEnter={showMenu}
//     onMouseLeave={hideMenu}
//   >
//     {/* Top gold accent line */}
//     <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.7 }} />
//     <div className="max-w-[1400px] mx-auto px-16 py-9 flex gap-14 items-start">
//       {children}
//     </div>
//   </div>
// );

// const MegaColumn = ({ title, badge, items }) => (
//   <div className="ddl-mega-col min-w-[150px]">
//     {badge && <MegaBadge text={badge} />}
//     <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.3em", color: "#8a5e2d", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", marginBottom: "14px" }}>
//       {title}
//     </div>
//     <span className="ddl-col-rule" style={{ display: "block", marginBottom: "16px" }} />
//     <ul className="flex flex-col gap-3 list-none p-0 m-0">
//       {/* {items.map((item, i) => {
//         // const to = item.category === "Others"
//         //   ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//         //   : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`;

//         // const to = `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`

//         return (
//           <li key={i} className="ddl-mega-item">
//             <Link to={to} className="ddl-mega-link">{item.label}</Link>
//           </li>
//         );
//       })} */}
//       {items.map((item, i) => {

//         const to = `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;

//         return (
//           <li key={i} className="ddl-mega-item">
//             <Link to={to} className="ddl-mega-link">
//               {item.label}
//             </Link>
//           </li>
//         );
//       })}

//     </ul>
//   </div>
// );

// /* ── MOBILE ACCORDION ─────────────────── */
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
//             <Link key={i} onClick={closeSidebar}
//               to={item.category === "Others"
//                 ? `/collection?category=Others&sub=${encodeURIComponent(item.label)}`
//                 : `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`}>
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

//   // Close profile dropdown on outside click
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
//         {/* ── TOP GOLD LINE ── */}
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
//                     {/* Gold frame corners */}
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
//                     // { label: "Jackets", category: "Topwear", gender: "Women" },
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
//                   {/* Header row */}
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
//           {/* Head */}
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

//           {/* Top gold strip */}
//           <div style={{ height: 1, background: "linear-gradient(to right, transparent, #c8924a, transparent)", opacity: 0.5 }} />

//           <NavLink className="ddl-sb-link" to="/" onClick={() => setVisible(false)}>Home</NavLink>

//           <MobileAccordion title="Men"
//             open={mobileAccord === "men"}
//             toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
//             sections={{
//               TOPS: [
//                 { label: "Jackets", category: "Topwear", gender: "Men" },
//                 { label: "Leather Coats", category: "Topwear", gender: "Men" },
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
//                 { label: "Jackets", category: "Topwear", gender: "Women" },
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

/* ── GLOBAL STYLES ─────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500;600&display=swap');

  :root {
    --bg:        #1a0f0a;
    --gold:      #c8924a;
    --gold-dim:  #8a5e2d;
    --gold-pale: #e0b06a;
    --white:     #f0e6d8;
    --border:    rgba(200,146,74,0.18);
  }

  * { box-sizing: border-box; }

  .ddl-navlink {
    position: relative;
    font-size: 11px; font-weight: 500;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--white); text-decoration: none;
    cursor: pointer; padding-bottom: 4px;
    display: flex; align-items: center; gap: 5px;
    background: none; border: none;
    transition: color 0.22s;
    white-space: nowrap;
  }
  .ddl-navlink::after {
    content: '';
    position: absolute; bottom: 0; left: 0;
    width: 0; height: 1px;
    background: var(--gold);
    transition: width 0.3s ease;
  }
  .ddl-navlink:hover,
  .ddl-navlink.is-active { color: var(--gold); }
  .ddl-navlink:hover::after,
  .ddl-navlink.is-active::after { width: 100%; }

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

  .ddl-mega { animation: megaIn 0.25s cubic-bezier(0.16,1,0.3,1) both; }
  .ddl-mega-col { animation: colIn 0.35s ease both; }
  .ddl-mega-col:nth-child(1) { animation-delay: 0.04s; }
  .ddl-mega-col:nth-child(2) { animation-delay: 0.09s; }
  .ddl-mega-col:nth-child(3) { animation-delay: 0.14s; }
  .ddl-col-rule {
    display: block; height: 1px; width: 0;
    background: linear-gradient(to right, var(--gold-dim), transparent);
    animation: lineExpand 0.5s ease 0.1s both;
  }
  .ddl-mega-img-wrap { animation: imgReveal 0.45s ease 0.08s both; }
  .ddl-mega-item { animation: itemSlide 0.3s ease both; }
  .ddl-mega-item:nth-child(1) { animation-delay: 0.1s; }
  .ddl-mega-item:nth-child(2) { animation-delay: 0.15s; }
  .ddl-mega-item:nth-child(3) { animation-delay: 0.2s; }
  .ddl-mega-item:nth-child(4) { animation-delay: 0.25s; }
  .ddl-mega-item:nth-child(5) { animation-delay: 0.3s; }
  .ddl-mega-item:nth-child(6) { animation-delay: 0.35s; }

  .ddl-mega-link {
    font-size: 12px; letter-spacing: 0.06em;
    color: rgba(240,230,216,0.65); text-decoration: none;
    transition: color 0.2s, padding-left 0.2s;
    display: flex; align-items: center; gap: 8px;
  }
  .ddl-mega-link:hover { color: var(--gold); padding-left: 4px; }
  .ddl-mega-link::before {
    content: '';
    display: inline-block; width: 14px; height: 1px;
    background: var(--gold-dim); flex-shrink: 0;
    transition: width 0.2s, background 0.2s;
  }
  .ddl-mega-link:hover::before { width: 20px; background: var(--gold); }

  .ddl-user-wrap { position: relative; }
  .ddl-dropdown {
    position: fixed; top: 68px; right: 16px;
    background: #221208;
    border: 1px solid var(--border);
    border-top: 2px solid var(--gold);
    min-width: 190px; z-index: 999999;
    box-shadow: 0 16px 48px rgba(0,0,0,0.8);
    animation: megaIn 0.18s ease both;
  }
  .ddl-dropdown::before {
    content: ''; position: absolute;
    top: -18px; left: 0; right: 0; height: 18px;
  }
  .ddl-dropdown-item {
    display: block; padding: 11px 18px;
    font-size: 11px; letter-spacing: 0.12em;
    color: var(--white); text-transform: uppercase;
    cursor: pointer; border-bottom: 1px solid var(--border);
    transition: background 0.15s, color 0.15s, padding-left 0.15s;
    font-family: 'Montserrat', sans-serif;
  }
  .ddl-dropdown-item:last-child { border-bottom: none; }
  .ddl-dropdown-item:hover { background: rgba(200,146,74,0.1); color: var(--gold); padding-left: 24px; }

  .ddl-sidebar {
    position: fixed; top: 0; right: 0; bottom: 0;
    background: #120a05; z-index: 99999;
    transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
    overflow-x: hidden; overflow-y: auto;
    font-family: 'Montserrat', sans-serif;
    border-left: 1px solid var(--border);
    max-width: 100vw;
  }
  .ddl-hamburger { display: flex; }
  @media (min-width: 768px) {
    .ddl-hamburger { display: none !important; }
    .ddl-center-nav { display: flex !important; }
  }
  @media (max-width: 767px) {
    .ddl-center-nav { display: none !important; }
  }
  .ddl-sb-link {
    display: block; padding: 14px 26px;
    font-size: 11px; font-weight: 500;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: rgba(240,230,216,0.8); text-decoration: none;
    border-bottom: 1px solid rgba(200,146,74,0.08);
    transition: color 0.2s, padding-left 0.2s;
  }
  .ddl-sb-link:hover { color: var(--gold); padding-left: 34px; }
  .ddl-sb-accord-btn {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 14px 26px; font-size: 11px; font-weight: 500;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: rgba(240,230,216,0.8);
    background: none; border: none;
    border-bottom: 1px solid rgba(200,146,74,0.08);
    cursor: pointer; transition: color 0.2s; font-family: 'Montserrat', sans-serif;
  }
  .ddl-sb-accord-btn:hover { color: var(--gold); }
  .ddl-sb-body { overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s; }
  .ddl-sb-section { padding: 12px 26px 12px 40px; border-bottom: 1px solid rgba(200,146,74,0.05); }
  .ddl-sb-section h4 {
    font-size: 8px; letter-spacing: 0.32em; color: var(--gold-dim);
    text-transform: uppercase; font-weight: 600; margin-bottom: 10px;
  }
  .ddl-sb-section a {
    display: block; padding: 5px 0; font-size: 11px;
    color: rgba(240,230,216,0.55); text-decoration: none;
    transition: color 0.2s; letter-spacing: 0.06em;
  }
  .ddl-sb-section a:hover { color: var(--gold); }

  .ddl-icon-btn {
    background: none; border: none; cursor: pointer;
    color: var(--white); display: flex; align-items: center;
    position: relative; transition: color 0.2s;
    text-decoration: none; padding: 0;
  }
  .ddl-icon-btn:hover { color: var(--gold); }
`;

/* ── Icons ── */
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
    <span style={{ fontSize: "8px", letterSpacing: "0.32em", color: "#8a5e2d", fontFamily: "Montserrat,sans-serif", fontWeight: 600, textTransform: "uppercase" }}>
      {text}
    </span>
  </div>
);

const Chevron = ({ open }) => (
  <span style={{
    display: "inline-block",
    width: 6, height: 6,
    borderRight: "1.5px solid currentColor",
    borderBottom: "1.5px solid currentColor",
    transform: open ? "rotate(-135deg) translateY(2px)" : "rotate(45deg) translateY(-1px)",
    transition: "transform 0.25s",
    flexShrink: 0,
  }} />
);

/* ── MEGA MENU WRAPPER ── */
const MegaMenu = ({ children, showMenu, hideMenu }) => (
  <div
    className="ddl-mega fixed left-0 right-0"
    style={{ top: 68, background: "#1a0f0a", borderTop: "1px solid rgba(200,146,74,0.18)", borderBottom: "1px solid rgba(200,146,74,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.7)", zIndex: 9998 }}
    onMouseEnter={showMenu}
    onMouseLeave={hideMenu}
  >
    <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.7 }} />
    <div className="max-w-[1400px] mx-auto px-16 py-9 flex gap-14 items-start">
      {children}
    </div>
  </div>
);

/* ── FIXED: URL builder correctly uses category=Others for Others items ── */
const buildUrl = (item) => {
  // If this item belongs to the "Others" category, use Others as the category filter
  // so the Collection page matches products that have category="Others"
  if (item.category === "Others") {
    return `/collection?category=Others&sub=${encodeURIComponent(item.label)}`;
  }
  // For Topwear / Bottomwear, use gender as category filter (Men / Women)
  return `/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.label)}`;
};

const MegaColumn = ({ title, badge, items }) => (
  <div className="ddl-mega-col min-w-[150px]">
    {badge && <MegaBadge text={badge} />}
    <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.3em", color: "#8a5e2d", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", marginBottom: "14px" }}>
      {title}
    </div>
    <span className="ddl-col-rule" style={{ display: "block", marginBottom: "16px" }} />
    <ul className="flex flex-col gap-3 list-none p-0 m-0">
      {items.map((item, i) => (
        <li key={i} className="ddl-mega-item">
          <Link to={buildUrl(item)} className="ddl-mega-link">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ── MOBILE ACCORDION ── */
const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
  <div>
    <button className="ddl-sb-accord-btn" onClick={toggle}>
      {title} <Chevron open={open} />
    </button>
    <div className="ddl-sb-body" style={{ maxHeight: open ? 700 : 0, opacity: open ? 1 : 0 }}>
      {Object.entries(sections).map(([sec, items], idx) => (
        <div className="ddl-sb-section" key={idx}>
          <h4>{sec}</h4>
          {items.map((item, i) => (
            <Link key={i} onClick={closeSidebar} to={buildUrl(item)}>
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
    if (profileOpen) document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [profileOpen]);

  const logout = () => {
    setProfileOpen(false);
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 280); };
  const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

  return (
    <>
      <style>{STYLES}</style>

      <header
        className="sticky top-0"
        style={{
          background: "#1a0f0a",
          borderBottom: "1px solid rgba(200,146,74,0.18)",
          fontFamily: "Montserrat, sans-serif",
          zIndex: 9998,
          overflow: "visible",
        }}
      >
        <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8924a 30%, #f7c568 50%, #c8924a 70%, transparent)", opacity: 0.6 }} />

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-3 md:gap-6" style={{ height: 66 }}>

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0" style={{ minWidth: 0 }}>
            <div className="flex-shrink-0"><DiamondIcon /></div>
            <div className="flex flex-col leading-none min-w-0">
              <span style={{ fontFamily: "Montserrat,sans-serif", fontSize: "clamp(10px,2vw,14px)", fontWeight: 600, letterSpacing: "0.22em", color: "#f0e6d8", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                <span style={{ color: "#c8924a" }}>D DOLLY</span> LAMB
              </span>
              <span style={{ display: "block", height: 1, background: "linear-gradient(to right, #8a5e2d, transparent)", margin: "3px 0" }} />
              <span style={{ fontSize: "clamp(6px,1.5vw,8.5px)", letterSpacing: "0.38em", color: "#8a5e2d", textTransform: "uppercase", whiteSpace: "nowrap" }}>ARTISAN ATELIER</span>
            </div>
          </Link>

          {/* ── CENTER NAV ── */}
          <ul className="ddl-center-nav items-center gap-8 list-none m-0 p-0" style={{ display: "none" }}>
            <li>
              <NavLink to="/" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Home</NavLink>
            </li>

            {/* MEN */}
            <li className="relative" onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
              <div className={`ddl-navlink${activeMenu === "men" ? " is-active" : ""}`} style={{ cursor: "pointer" }}>
                Men <Chevron open={activeMenu === "men"} />
              </div>
              {activeMenu === "men" && (
                <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
                  <MegaColumn title="Tops" badge="MEN'S COLLECTION" items={[
                    { label: "Biker Jacket", category: "Topwear", gender: "Men" },
                    { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
                    { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
                  ]} />
                  <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
                  {/* ✅ FIX: category="Others" → buildUrl uses category=Others in URL */}
                  <MegaColumn title="Others" items={[
                    { label: "Pillow", category: "Others", gender: "Men" },
                    { label: "Cushion Cover", category: "Others", gender: "Men" },
                    { label: "Aprons", category: "Others", gender: "Men" },
                    { label: "Desk Mat", category: "Others", gender: "Men" },
                    { label: "Chair Cover", category: "Others", gender: "Men" },
                  ]} />

                  {/* Featured image */}
                  <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden" style={{ borderRadius: 3 }}>
                    <img src={assets.men_nav} alt="Men's Collection" className="w-full object-cover" style={{ height: 250, filter: "brightness(0.7)", transition: "transform 0.5s", display: "block" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"}
                    />
                    <span style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
                    <span style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
                    <span style={{ position: "absolute", bottom: 8, left: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
                    <span style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px", fontSize: 8.5, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8924a", textAlign: "center", background: "linear-gradient(0deg, rgba(26,15,10,0.92), transparent)" }}>
                      Men's Collection
                    </div>
                  </div>
                </MegaMenu>
              )}
            </li>

            {/* WOMEN */}
            <li className="relative" onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
              <div className={`ddl-navlink${activeMenu === "women" ? " is-active" : ""}`} style={{ cursor: "pointer" }}>
                Women <Chevron open={activeMenu === "women"} />
              </div>
              {activeMenu === "women" && (
                <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
                  <MegaColumn title="Tops" badge="WOMEN'S COLLECTION" items={[
                    { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
                    { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
                    { label: "Racing Coat", category: "Topwear", gender: "Women" },
                    { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
                    { label: "Women Night Dress", category: "Topwear", gender: "Women" },
                  ]} />
                  <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
                  <MegaColumn title="Bottoms" items={[
                    { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
                    { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
                    { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
                  ]} />
                  <div style={{ width: 1, alignSelf: "stretch", background: "rgba(200,146,74,0.15)" }} />
                  {/* ✅ FIX: category="Others" → buildUrl uses category=Others in URL */}
                  <MegaColumn title="Others" items={[
                    { label: "Pillow", category: "Others", gender: "Women" },
                    { label: "Cushion Cover", category: "Others", gender: "Women" },
                    { label: "Aprons", category: "Others", gender: "Women" },
                    { label: "Desk Mat", category: "Others", gender: "Women" },
                    { label: "Chair Cover", category: "Others", gender: "Women" },
                  ]} />
                  <div className="ddl-mega-img-wrap ml-auto flex-shrink-0 w-[190px] relative overflow-hidden" style={{ borderRadius: 3 }}>
                    <img src={assets.women_nav} alt="Women's Collection" className="w-full object-cover" style={{ height: 250, filter: "brightness(0.7)", transition: "transform 0.5s", display: "block" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"}
                    />
                    <span style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
                    <span style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderTop: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
                    <span style={{ position: "absolute", bottom: 8, left: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderLeft: "1.5px solid #c8924a" }} />
                    <span style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "1.5px solid #c8924a", borderRight: "1.5px solid #c8924a" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px", fontSize: 8.5, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8924a", textAlign: "center", background: "linear-gradient(0deg, rgba(26,15,10,0.92), transparent)" }}>
                      Women's Collection
                    </div>
                  </div>
                </MegaMenu>
              )}
            </li>

            <li><NavLink to="/collection" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Collection</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `ddl-navlink${isActive ? " is-active" : ""}`}>Contact</NavLink></li>
          </ul>

          {/* ── RIGHT ICONS ── */}
          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0" style={{ overflow: "visible" }}>

            {/* Search */}
            <button className="ddl-icon-btn" aria-label="Search"
              onClick={() => { setShowSearch(true); navigate("/collection"); }}>
              <IconSearch />
            </button>

            {/* Account */}
            <div ref={profileRef} style={{ position: "relative" }}>
              <button
                className="ddl-icon-btn"
                aria-label="Account"
                onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}
              >
                <IconUser />
              </button>

              {token && profileOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  right: 0,
                  background: "#221208",
                  border: "1px solid rgba(200,146,74,0.25)",
                  borderTop: "2px solid #c8924a",
                  minWidth: 190,
                  zIndex: 999999,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.8)",
                  animation: "megaIn 0.18s ease both",
                }}>
                  <div style={{ padding: "12px 18px 10px", borderBottom: "1px solid rgba(200,146,74,0.15)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#c8924a,#8a5e2d)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <IconUser />
                      </div>
                      <span style={{ fontSize: 9, letterSpacing: "0.18em", color: "#c8924a", textTransform: "uppercase", fontFamily: "Montserrat,sans-serif" }}>My Account</span>
                    </div>
                  </div>
                  <p className="ddl-dropdown-item" onClick={() => { setProfileOpen(false); navigate("/profile"); }}>My Profile</p>
                  <p className="ddl-dropdown-item" onClick={() => { setProfileOpen(false); navigate("/orders"); }}>Orders</p>
                  <p className="ddl-dropdown-item" onClick={logout}>Logout</p>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link to="/wishlist" className="ddl-icon-btn relative" aria-label="Wishlist">
              <IconHeart />
              {wishlist?.length > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
                  style={{ background: "linear-gradient(135deg,#c8924a,#f7c568)", color: "#1a0f0a" }}>
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="ddl-icon-btn relative" aria-label="Cart">
              <IconBag />
              <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
                style={{ background: "linear-gradient(135deg,#c8924a,#f7c568)", color: "#1a0f0a" }}>
                {getCartCount()}
              </span>
            </Link>

            {/* Hamburger — mobile only */}
            <button className="ddl-icon-btn ddl-hamburger" aria-label="Menu"
              onClick={() => setVisible(true)}>
              <IconMenu />
            </button>
          </div>
        </div>

        {/* ── MOBILE SIDEBAR OVERLAY ── */}
        {visible && (
          <div
            onClick={() => setVisible(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99998, backdropFilter: "blur(2px)" }}
          />
        )}

        {/* ── MOBILE SIDEBAR ── */}
        <div className="ddl-sidebar" style={{ width: visible ? "min(320px, 100vw)" : 0 }}>
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(200,146,74,0.18)" }}>
            <button
              className="flex items-center gap-2 bg-none border-none cursor-pointer text-xs tracking-widest uppercase"
              style={{ color: "#f0e6d8", fontFamily: "Montserrat,sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#c8924a"}
              onMouseLeave={e => e.currentTarget.style.color = "#f0e6d8"}
              onClick={() => setVisible(false)}>
              <IconMenu /> Close
            </button>
            <DiamondIcon />
          </div>

          <div style={{ height: 1, background: "linear-gradient(to right, transparent, #c8924a, transparent)", opacity: 0.5 }} />

          <NavLink className="ddl-sb-link" to="/" onClick={() => setVisible(false)}>Home</NavLink>

          <MobileAccordion title="Men"
            open={mobileAccord === "men"}
            toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
            sections={{
              TOPS: [
                { label: "Biker Jacket", category: "Topwear", gender: "Men" },
                { label: "Bomber Biker Jacket", category: "Topwear", gender: "Men" },
                { label: "Moto Biker Jacket", category: "Topwear", gender: "Men" },
              ],
              OTHERS: [
                { label: "Pillow", category: "Others", gender: "Men" },
                { label: "Cushion Cover", category: "Others", gender: "Men" },
                { label: "Aprons", category: "Others", gender: "Men" },
                { label: "Desk Mat", category: "Others", gender: "Men" },
                { label: "Chair Cover", category: "Others", gender: "Men" },
              ],
            }}
            closeSidebar={() => setVisible(false)} />

          <MobileAccordion title="Women"
            open={mobileAccord === "women"}
            toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
            sections={{
              TOPS: [
                { label: "Bomber Biker Jacket", category: "Topwear", gender: "Women" },
                { label: "Moto Biker Jacket", category: "Topwear", gender: "Women" },
                { label: "Racing Coat", category: "Topwear", gender: "Women" },
                { label: "Women Winter Wear", category: "Topwear", gender: "Women" },
                { label: "Women Night Dress", category: "Topwear", gender: "Women" },
              ],
              BOTTOMS: [
                { label: "Leather Pencil Skirt", category: "Bottomwear", gender: "Women" },
                { label: "Leather Full Skirt", category: "Bottomwear", gender: "Women" },
                { label: "Slim Bodycon Skirt", category: "Bottomwear", gender: "Women" },
              ],
              OTHERS: [
                { label: "Pillow", category: "Others", gender: "Women" },
                { label: "Cushion Cover", category: "Others", gender: "Women" },
                { label: "Aprons", category: "Others", gender: "Women" },
                { label: "Desk Mat", category: "Others", gender: "Women" },
                { label: "Chair Cover", category: "Others", gender: "Women" },
              ],
            }}
            closeSidebar={() => setVisible(false)} />

          <NavLink className="ddl-sb-link" to="/collection" onClick={() => setVisible(false)}>Collection</NavLink>
          <NavLink className="ddl-sb-link" to="/about" onClick={() => setVisible(false)}>About</NavLink>
          <NavLink className="ddl-sb-link" to="/contact" onClick={() => setVisible(false)}>Contact</NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;