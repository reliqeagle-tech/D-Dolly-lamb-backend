// import React from "react";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";

// const Hero1 = () => {
//   return (
//     <div className="px-0 flex flex-col sm:flex-row min-h-[90vh] rounded-lg">
//   <div className="px-0 w-full flex flex-row justify-center py-0 bg-gradient-to-r from-[#800000] via-black to-black relative overflow-hidden h-[90vh]">

//     {/* TEXT SECTION */}
//     <div className="w-full flex flex-col items-center justify-center text-center z-[20] px-4 py-10 sm:py-0">
//       <h1 className="text-3xl sm:text-5xl md:text-[7rem] lg:text-[8rem] prata-regular text-[#f7c568] leading-[1.1]">
//         D &nbsp; DOLLY &nbsp; LAMB
//       </h1>

//       <p className="w-32 sm:w-44 md:w-[80%] mt-4 sm:mt-6 md:mt-10 h-[3px] bg-[#f7c568]"></p>

//       <p className="prata-regular text-sm sm:text-lg md:text-[2.5rem] md:leading-[3rem] text-white mt-4">
//         Premium Lambskin Jackets <br />
//         Crafted for Comfort <br />
//         Timeless Style
//       </p>

//       <div className="flex items-center gap-2 mt-4 sm:mt-6">
//         <p className="w-6 sm:w-8 md:w-11 h-[1px] bg-white"></p>
//         <p className="font-semibold text-white text-sm sm:text-base">
//           <Link to="/collection">
//             SHOP <span className="text-[#f7c568]">NOW</span>
//           </Link>
//         </p>
//         <p className="w-6 sm:w-8 md:w-11 h-[1px] bg-white"></p>
//       </div>
//     </div>

//     {/* IMAGE SECTION */}
//     <img
//       className="
//         absolute
//         top-2
//         bottom-[-25%] sm:bottom-[-20%] md:bottom-[-15%] lg:bottom-[-12%]
//         left-1/2 -translate-x-1/2

//         w-[100%]         /* mobile full width */
//         sm:w-[80%]       /* tablet */
//         md:w-[60%]       /* medium */
//         lg:w-[55%]       /* desktop */
//         xl:w-[50%]

//         h-auto
//         object-cover
//         z-[10]
//       "
//       src={assets.leatherModel}
//       alt=""
//     />

//   </div>
// </div>





//   );
// };

// export default Hero1;





// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// // ─── COLOR TOKENS ───────────────────────────────────────────────
// // bg-deep:    #1a0f0a   (near-black brown)
// // bg-dark:    #231209   (main dark)
// // gold:       #c8973a   (primary gold)
// // gold-light: #f7c568   (highlight gold)
// // copper:     #8b4513   (maroon-copper accent)
// // cream:      #f5ede0   (warm white text)
// // ────────────────────────────────────────────────────────────────

// const Hero1 = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [visible, setVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);

//   useEffect(() => {
//     setTimeout(() => setVisible(true), 100);
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, []);

//   const features = [
//     { label: "HAND-STITCHED", sub: "Artisan Craft" },
//     { label: "LAMBSKIN", sub: "Premium Hide" },
//     { label: "BESPOKE FIT", sub: "Made to Order" },
//     { label: "HERITAGE", sub: "Since 2001" },
//   ];

//   const collections = [
//     {
//       title: "MEN'S",
//       subtitle: "Leather Jackets",
//       tag: "NEW SEASON",
//       desc: "Structured silhouettes with raw edge finishing",
//       href: "/collection?category=Men",
//     },
//     {
//       title: "WOMEN'S",
//       subtitle: "Leather Jackets",
//       tag: "BESTSELLER",
//       desc: "Tailored cuts with refined feminine details",
//       href: "/collection?category=Women",
//     },
//     {
//       title: "COLLECTION",
//       subtitle: "Limited Edition",
//       tag: "EXCLUSIVE",
//       desc: "Numbered pieces for the discerning collector",
//       href: "/collection",
//     },
//   ];

//   const testimonials = [
//     { quote: "The finest lambskin I've worn — supple on day one.", name: "James H.", location: "London" },
//     { quote: "Worth every penny. A jacket that ages like fine wine.", name: "Sofia R.", location: "Milan" },
//     { quote: "Exceptional quality, impeccable fit, unmatched luxury.", name: "Marcus T.", location: "New York" },
//   ];

//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 4000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div
//       style={{
//         background: "#1a0f0a",
//         color: "#f5ede0",
//         fontFamily: "'Georgia', serif",
//         overflowX: "hidden",
//       }}
//     >
//       {/* ── HERO ─────────────────────────────────────── */}
//       <section
//         style={{
//           minHeight: "100vh",
//           background: "linear-gradient(135deg, #0d0703 0%, #1a0f0a 40%, #2d1408 70%, #0d0703 100%)",
//           position: "relative",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           overflow: "hidden",
//         }}
//       >
//         {/* Grain overlay */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage:
//               "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
//             opacity: 0.6,
//             zIndex: 1,
//             pointerEvents: "none",
//           }}
//         />

//         {/* Gold diagonal accent lines */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             width: "40%",
//             height: "100%",
//             background:
//               "linear-gradient(135deg, transparent 60%, rgba(200,151,58,0.06) 100%)",
//             zIndex: 1,
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             width: "35%",
//             height: "60%",
//             background:
//               "linear-gradient(315deg, transparent 60%, rgba(200,151,58,0.04) 100%)",
//             zIndex: 1,
//           }}
//         />

//         {/* Vertical rule left */}
//         <div
//           style={{
//             position: "absolute",
//             left: "7%",
//             top: "20%",
//             height: "60%",
//             width: "1px",
//             background:
//               "linear-gradient(to bottom, transparent, #c8973a55, transparent)",
//             zIndex: 2,
//           }}
//         />

//         {/* Content */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 10,
//             textAlign: "center",
//             padding: "0 24px",
//             maxWidth: "1100px",
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0)" : "translateY(40px)",
//             transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
//           }}
//         >
//           {/* Eyebrow */}
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "14px",
//               marginBottom: "28px",
//             }}
//           >
//             <span style={{ width: "40px", height: "1px", background: "#c8973a" }} />
//             <span
//               style={{
//                 fontSize: "11px",
//                 letterSpacing: "0.35em",
//                 color: "#c8973a",
//                 fontFamily: "'Arial', sans-serif",
//                 fontWeight: 600,
//               }}
//             >
//               ARTISAN LEATHER ATELIER
//             </span>
//             <span style={{ width: "40px", height: "1px", background: "#c8973a" }} />
//           </div>

//           {/* Main Title */}
//           <h1
//             style={{
//               fontSize: "clamp(3.5rem, 12vw, 10rem)",
//               lineHeight: 0.9,
//               letterSpacing: "-0.02em",
//               color: "#f7c568",
//               margin: 0,
//               fontFamily: "'Georgia', serif",
//               fontWeight: 400,
//             }}
//           >
//             D&nbsp;DOLLY
//             <br />
//             <span
//               style={{
//                 color: "#f5ede0",
//                 fontSize: "clamp(2rem, 6vw, 5rem)",
//                 letterSpacing: "0.22em",
//                 display: "block",
//                 marginTop: "8px",
//               }}
//             >
//               LAMB
//             </span>
//           </h1>

//           {/* Gold divider */}
//           <div
//             style={{
//               margin: "28px auto",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "14px",
//             }}
//           >
//             <span style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to right, transparent, #c8973a)" }} />
//             <span style={{ width: "6px", height: "6px", background: "#c8973a", transform: "rotate(45deg)" }} />
//             <span style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to left, transparent, #c8973a)" }} />
//           </div>

//           {/* Tagline */}
//           <p
//             style={{
//               fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
//               color: "#d4b896",
//               lineHeight: 1.7,
//               letterSpacing: "0.04em",
//               fontStyle: "italic",
//               marginBottom: "44px",
//             }}
//           >
//             Premium Lambskin Jackets — Crafted for Comfort & Timeless Style
//           </p>

//           {/* CTA Buttons */}
//           <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
//             <Link
//               to="/collection"
//               style={{
//                 display: "inline-block",
//                 padding: "16px 48px",
//                 background: "linear-gradient(135deg, #c8973a, #f7c568)",
//                 color: "#1a0f0a",
//                 textDecoration: "none",
//                 letterSpacing: "0.18em",
//                 fontSize: "12px",
//                 fontFamily: "'Arial', sans-serif",
//                 fontWeight: 700,
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "translateY(-2px)";
//                 e.target.style.boxShadow = "0 12px 40px rgba(200,151,58,0.4)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0)";
//                 e.target.style.boxShadow = "none";
//               }}
//             >
//               SHOP THE COLLECTION
//             </Link>
//             <Link
//               to="/about"
//               style={{
//                 display: "inline-block",
//                 padding: "16px 48px",
//                 background: "transparent",
//                 color: "#f7c568",
//                 textDecoration: "none",
//                 letterSpacing: "0.18em",
//                 fontSize: "12px",
//                 fontFamily: "'Arial', sans-serif",
//                 fontWeight: 600,
//                 border: "1px solid #c8973a55",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.borderColor = "#c8973a";
//                 e.target.style.background = "rgba(200,151,58,0.08)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.borderColor = "#c8973a55";
//                 e.target.style.background = "transparent";
//               }}
//             >
//               OUR STORY
//             </Link>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: "36px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             zIndex: 10,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "8px",
//             opacity: 0.7,
//           }}
//         >
//           <span
//             style={{
//               fontSize: "9px",
//               letterSpacing: "0.3em",
//               color: "#c8973a",
//               fontFamily: "Arial",
//             }}
//           >
//             SCROLL
//           </span>
//           <div
//             style={{
//               width: "1px",
//               height: "50px",
//               background: "linear-gradient(to bottom, #c8973a, transparent)",
//               animation: "scrollPulse 2s ease-in-out infinite",
//             }}
//           />
//         </div>

//         {/* Features ticker bottom */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             background: "rgba(200,151,58,0.1)",
//             borderTop: "1px solid rgba(200,151,58,0.2)",
//             padding: "14px 0",
//             zIndex: 10,
//             display: "flex",
//             justifyContent: "center",
//             gap: "60px",
//             flexWrap: "wrap",
//           }}
//         >
//           {features.map((f, i) => (
//             <div
//               key={i}
//               style={{
//                 textAlign: "center",
//                 opacity: activeFeature === i ? 1 : 0.45,
//                 transition: "opacity 0.5s ease",
//               }}
//             >
//               <div
//                 style={{
//                   fontSize: "10px",
//                   letterSpacing: "0.28em",
//                   color: "#f7c568",
//                   fontFamily: "Arial",
//                   fontWeight: 700,
//                 }}
//               >
//                 {f.label}
//               </div>
//               <div
//                 style={{
//                   fontSize: "9px",
//                   color: "#c8973a",
//                   letterSpacing: "0.15em",
//                   fontFamily: "Arial",
//                 }}
//               >
//                 {f.sub}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── MARQUEE STRIP ─────────────────────────────── */}
//       <div
//         style={{
//           background: "#c8973a",
//           overflow: "hidden",
//           padding: "13px 0",
//           whiteSpace: "nowrap",
//         }}
//       >
//         <div
//           style={{
//             display: "inline-block",
//             animation: "marquee 20s linear infinite",
//           }}
//         >
//           {Array(6)
//             .fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  FREE SHIPPING WORLDWIDE  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ")
//             .map((t, i) => (
//               <span
//                 key={i}
//                 style={{
//                   fontSize: "11px",
//                   letterSpacing: "0.2em",
//                   color: "#1a0f0a",
//                   fontFamily: "Arial",
//                   fontWeight: 700,
//                   marginRight: "0",
//                 }}
//               >
//                 {t}
//               </span>
//             ))}
//         </div>
//       </div>

//       {/* ── COLLECTIONS GRID ──────────────────────────── */}
//       <section style={{ padding: "100px 5% 80px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
//           <p
//             style={{
//               fontSize: "10px",
//               letterSpacing: "0.4em",
//               color: "#c8973a",
//               fontFamily: "Arial",
//               marginBottom: "16px",
//             }}
//           >
//             CURATED FOR YOU
//           </p>
//           <h2
//             style={{
//               fontSize: "clamp(2rem, 5vw, 3.5rem)",
//               color: "#f7c568",
//               fontWeight: 400,
//               margin: 0,
//               letterSpacing: "0.05em",
//             }}
//           >
//             Shop by Category
//           </h2>
//           <div style={{ width: "60px", height: "2px", background: "#c8973a", margin: "20px auto 0" }} />
//         </div>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "2px",
//           }}
//         >
//           {collections.map((col, i) => (
//             <Link
//               key={i}
//               to={col.href}
//               style={{ textDecoration: "none" }}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   background: i === 0
//                     ? "linear-gradient(145deg, #2d1408, #1a0f0a)"
//                     : i === 1
//                       ? "linear-gradient(145deg, #1a0f0a, #0d0703)"
//                       : "linear-gradient(145deg, #231209, #1a0f0a)",
//                   border: "1px solid rgba(200,151,58,0.2)",
//                   padding: "60px 40px",
//                   minHeight: "320px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-end",
//                   overflow: "hidden",
//                   transition: "all 0.4s ease",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "#c8973a";
//                   e.currentTarget.style.transform = "translateY(-4px)";
//                   e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "rgba(200,151,58,0.2)";
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 {/* Tag */}
//                 <span
//                   style={{
//                     position: "absolute",
//                     top: "24px",
//                     left: "24px",
//                     fontSize: "9px",
//                     letterSpacing: "0.3em",
//                     color: "#1a0f0a",
//                     background: "#c8973a",
//                     padding: "4px 12px",
//                     fontFamily: "Arial",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {col.tag}
//                 </span>

//                 {/* Large number */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "20px",
//                     right: "30px",
//                     fontSize: "7rem",
//                     color: "rgba(200,151,58,0.06)",
//                     fontFamily: "Georgia",
//                     lineHeight: 1,
//                     fontWeight: 700,
//                   }}
//                 >
//                   0{i + 1}
//                 </div>

//                 <div>
//                   <p
//                     style={{
//                       fontSize: "11px",
//                       letterSpacing: "0.3em",
//                       color: "#c8973a",
//                       fontFamily: "Arial",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     {col.subtitle}
//                   </p>
//                   <h3
//                     style={{
//                       fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                       color: "#f7c568",
//                       fontWeight: 400,
//                       margin: "0 0 14px",
//                       letterSpacing: "0.06em",
//                     }}
//                   >
//                     {col.title}
//                   </h3>
//                   <p
//                     style={{
//                       fontSize: "13px",
//                       color: "#a08060",
//                       fontStyle: "italic",
//                       marginBottom: "24px",
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     {col.desc}
//                   </p>
//                   <div
//                     style={{
//                       display: "inline-flex",
//                       alignItems: "center",
//                       gap: "10px",
//                       fontSize: "11px",
//                       letterSpacing: "0.2em",
//                       color: "#f7c568",
//                       fontFamily: "Arial",
//                     }}
//                   >
//                     EXPLORE →
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ── CRAFT HIGHLIGHT ───────────────────────────── */}
//       <section
//         style={{
//           background: "linear-gradient(135deg, #0d0703 0%, #1a0f0a 50%, #2d1408 100%)",
//           padding: "80px 5%",
//           borderTop: "1px solid rgba(200,151,58,0.15)",
//           borderBottom: "1px solid rgba(200,151,58,0.15)",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//             gap: "48px",
//           }}
//         >
//           {[
//             { num: "22+", label: "Years of Craft", desc: "Two decades perfecting the art of leather tailoring" },
//             { num: "100%", label: "Pure Lambskin", desc: "Sourced from the finest tanneries across Europe" },
//             { num: "3,200+", label: "Happy Clients", desc: "Worn by discerning individuals across 45 countries" },
//             { num: "∞", label: "Lifetime Quality", desc: "Each jacket built to outlast trends and seasons" },
//           ].map((stat, i) => (
//             <div key={i} style={{ textAlign: "center" }}>
//               <div
//                 style={{
//                   fontSize: "clamp(2.5rem, 5vw, 4rem)",
//                   color: "#f7c568",
//                   fontFamily: "Georgia",
//                   lineHeight: 1,
//                   marginBottom: "10px",
//                 }}
//               >
//                 {stat.num}
//               </div>
//               <div
//                 style={{
//                   fontSize: "11px",
//                   letterSpacing: "0.25em",
//                   color: "#c8973a",
//                   fontFamily: "Arial",
//                   fontWeight: 700,
//                   marginBottom: "10px",
//                 }}
//               >
//                 {stat.label}
//               </div>
//               <p style={{ fontSize: "13px", color: "#7a6050", lineHeight: 1.6, fontStyle: "italic" }}>
//                 {stat.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US ─────────────────────────────── */}
//       <section style={{ padding: "100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "80px",
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <p
//               style={{
//                 fontSize: "10px",
//                 letterSpacing: "0.4em",
//                 color: "#c8973a",
//                 fontFamily: "Arial",
//                 marginBottom: "16px",
//               }}
//             >
//               THE D DOLLY LAMB DIFFERENCE
//             </p>
//             <h2
//               style={{
//                 fontSize: "clamp(1.8rem, 4vw, 3rem)",
//                 color: "#f7c568",
//                 fontWeight: 400,
//                 lineHeight: 1.2,
//                 marginBottom: "24px",
//               }}
//             >
//               Where Leather Becomes Legend
//             </h2>
//             <p
//               style={{
//                 color: "#a08060",
//                 lineHeight: 1.9,
//                 fontSize: "15px",
//                 marginBottom: "36px",
//                 fontStyle: "italic",
//               }}
//             >
//               Every D Dolly Lamb jacket begins with hand-selected lambskin hides,
//               chosen for their unparalleled softness and grain character. Our master
//               artisans — each with over a decade of experience — cut, stitch, and
//               finish every piece with obsessive precision.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//               {[
//                 "Hand-selected Grade A lambskin hides",
//                 "Bespoke sizing available on all styles",
//                 "Antique brass & gunmetal hardware options",
//                 "Complimentary lifetime conditioning service",
//               ].map((item, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//                   <span
//                     style={{
//                       width: "6px",
//                       height: "6px",
//                       background: "#c8973a",
//                       transform: "rotate(45deg)",
//                       flexShrink: 0,
//                     }}
//                   />
//                   <span style={{ fontSize: "13px", color: "#d4b896", letterSpacing: "0.04em" }}>{item}</span>
//                 </div>
//               ))}
//             </div>
//             <Link
//               to="/about"
//               style={{
//                 display: "inline-block",
//                 marginTop: "40px",
//                 padding: "14px 40px",
//                 border: "1px solid #c8973a",
//                 color: "#f7c568",
//                 textDecoration: "none",
//                 fontSize: "11px",
//                 letterSpacing: "0.22em",
//                 fontFamily: "Arial",
//                 fontWeight: 600,
//                 transition: "all 0.3s",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.background = "#c8973a";
//                 e.target.style.color = "#1a0f0a";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = "transparent";
//                 e.target.style.color = "#f7c568";
//               }}
//             >
//               LEARN MORE
//             </Link>
//           </div>

//           {/* Right side — decorative grid */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: "2px",
//             }}
//           >
//             {[
//               { bg: "#2d1408", label: "Lambskin", sub: "PREMIUM HIDE" },
//               { bg: "#1a0f0a", label: "Artisan", sub: "HAND CRAFTED" },
//               { bg: "#0d0703", label: "Fit", sub: "BESPOKE CUT" },
//               { bg: "#231209", label: "Heritage", sub: "EST. 2001" },
//             ].map((box, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: box.bg,
//                   border: "1px solid rgba(200,151,58,0.15)",
//                   padding: "40px 24px",
//                   textAlign: "center",
//                   transition: "border-color 0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#c8973a")}
//                 onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)")}
//               >
//                 <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Arial", marginBottom: "10px" }}>
//                   {box.sub}
//                 </p>
//                 <p style={{ fontSize: "1.3rem", color: "#f7c568", fontFamily: "Georgia" }}>{box.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ──────────────────────────────── */}
//       <section
//         style={{
//           background: "#0d0703",
//           borderTop: "1px solid rgba(200,151,58,0.15)",
//           padding: "80px 5%",
//           textAlign: "center",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "10px",
//             letterSpacing: "0.4em",
//             color: "#c8973a",
//             fontFamily: "Arial",
//             marginBottom: "16px",
//           }}
//         >
//           CLIENT VOICES
//         </p>
//         <h2
//           style={{
//             fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
//             color: "#f7c568",
//             fontWeight: 400,
//             marginBottom: "48px",
//           }}
//         >
//           What Our Clients Say
//         </h2>

//         <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "120px" }}>
//           <p
//             style={{
//               fontSize: "clamp(1rem, 2vw, 1.3rem)",
//               color: "#d4b896",
//               fontStyle: "italic",
//               lineHeight: 1.7,
//               marginBottom: "24px",
//               transition: "opacity 0.5s",
//             }}
//           >
//             "{testimonials[activeTestimonial].quote}"
//           </p>
//           <p
//             style={{
//               fontSize: "12px",
//               letterSpacing: "0.2em",
//               color: "#c8973a",
//               fontFamily: "Arial",
//             }}
//           >
//             — {testimonials[activeTestimonial].name},{" "}
//             <span style={{ color: "#7a6050" }}>{testimonials[activeTestimonial].location}</span>
//           </p>
//         </div>

//         {/* Dots */}
//         <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTestimonial(i)}
//               style={{
//                 width: i === activeTestimonial ? "28px" : "8px",
//                 height: "8px",
//                 border: "none",
//                 background: i === activeTestimonial ? "#c8973a" : "#3d2010",
//                 cursor: "pointer",
//                 transition: "all 0.3s",
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ── NEWSLETTER ────────────────────────────────── */}
//       <section
//         style={{
//           padding: "80px 5%",
//           background: "linear-gradient(135deg, #1a0f0a 0%, #2d1408 50%, #1a0f0a 100%)",
//           textAlign: "center",
//           borderTop: "1px solid rgba(200,151,58,0.2)",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "10px",
//             letterSpacing: "0.4em",
//             color: "#c8973a",
//             fontFamily: "Arial",
//             marginBottom: "16px",
//           }}
//         >
//           STAY IN THE KNOW
//         </p>
//         <h2
//           style={{
//             fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
//             color: "#f7c568",
//             fontWeight: 400,
//             marginBottom: "12px",
//           }}
//         >
//           Join the Inner Circle
//         </h2>
//         <p
//           style={{
//             color: "#7a6050",
//             fontSize: "14px",
//             fontStyle: "italic",
//             marginBottom: "36px",
//           }}
//         >
//           Early access to new drops, private sales & artisan stories.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "0",
//             maxWidth: "500px",
//             margin: "0 auto",
//             flexWrap: "wrap",
//           }}
//         >
//           <input
//             type="email"
//             placeholder="Your email address"
//             style={{
//               flex: 1,
//               minWidth: "220px",
//               padding: "16px 24px",
//               background: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(200,151,58,0.3)",
//               borderRight: "none",
//               color: "#f5ede0",
//               fontSize: "13px",
//               fontFamily: "Georgia",
//               outline: "none",
//             }}
//           />
//           <button
//             style={{
//               padding: "16px 32px",
//               background: "linear-gradient(135deg, #c8973a, #f7c568)",
//               border: "none",
//               color: "#1a0f0a",
//               fontSize: "11px",
//               letterSpacing: "0.2em",
//               fontFamily: "Arial",
//               fontWeight: 700,
//               cursor: "pointer",
//               transition: "opacity 0.2s",
//             }}
//             onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
//             onMouseLeave={(e) => (e.target.style.opacity = "1")}
//           >
//             SUBSCRIBE
//           </button>
//         </div>
//       </section>

//       {/* ── ANIMATIONS ────────────────────────────────── */}
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scrollPulse {
//           0%, 100% { opacity: 1; transform: scaleY(1); }
//           50% { opacity: 0.4; transform: scaleY(0.7); }
//         }
//         * { box-sizing: border-box; }
//         @media (max-width: 768px) {
//           section > div[style*="grid-template-columns: 1fr 1fr"] {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero1;




import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ── Animated Counter ──────────────────────────── */
const AnimatedCounter = ({ end, suffix = "", duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isInfinity = end === "∞";
          if (isInfinity) { setCount("∞"); return; }

          const numEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));
          const hasComma = String(end).includes(",");
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numEnd);
            setCount(hasComma ? current.toLocaleString() : current);
            if (progress < 1) requestAnimationFrame(step);
            else setCount(hasComma ? numEnd.toLocaleString() : numEnd);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero1 = () => {
  const [visible, setVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveFeature((prev) => (prev + 1) % 4), 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  const features = [
    { label: "HAND-STITCHED", sub: "Artisan Craft" },
    { label: "LAMBSKIN", sub: "Premium Hide" },
    { label: "BESPOKE FIT", sub: "Made to Order" },
    { label: "HERITAGE", sub: "Since 2001" },
  ];

  const collections = [
    { title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men" },
    { title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women" },
    { title: "COLLECTION", subtitle: "Limited Edition", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection" },
  ];

  const testimonials = [
    { quote: "The finest lambskin I've worn — supple on day one.", name: "James H.", location: "London" },
    { quote: "Worth every penny. A jacket that ages like fine wine.", name: "Sofia R.", location: "Milan" },
    { quote: "Exceptional quality, impeccable fit, unmatched luxury.", name: "Marcus T.", location: "New York" },
  ];

  const stats = [
    { end: 22, suffix: "+", label: "Years of Craft", desc: "Two decades perfecting the art of leather tailoring" },
    { end: 100, suffix: "%", label: "Pure Lambskin", desc: "Sourced from the finest tanneries across Europe" },
    { end: "3,200", suffix: "+", label: "Happy Clients", desc: "Worn by discerning individuals across 45 countries" },
    { end: "∞", suffix: "", label: "Lifetime Quality", desc: "Each jacket built to outlast trends and seasons" },
  ];

  return (
    <div style={{ background: "#1a0f0a", color: "#f5ede0", fontFamily: "'Georgia', serif", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0d0703 0%, #1a0f0a 40%, #2d1408 70%, #0d0703 100%)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.6, zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(135deg, transparent 60%, rgba(200,151,58,0.06) 100%)", zIndex: 1 }} />
        <div style={{ position: "absolute", left: "7%", top: "20%", height: "60%", width: "1px", background: "linear-gradient(to bottom, transparent, #c8973a55, transparent)", zIndex: 2 }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "1100px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
            <span style={{ width: "40px", height: "1px", background: "#c8973a" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.35em", color: "#c8973a", fontFamily: "Arial", fontWeight: 600 }}>ARTISAN LEATHER ATELIER</span>
            <span style={{ width: "40px", height: "1px", background: "#c8973a" }} />
          </div>
          <h1 style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#f7c568", margin: 0, fontWeight: 400 }}>
            D&nbsp;DOLLY<br />
            <span style={{ color: "#f5ede0", fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "0.22em", display: "block", marginTop: "8px" }}>LAMB</span>
          </h1>
          <div style={{ margin: "28px auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
            <span style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to right, transparent, #c8973a)" }} />
            <span style={{ width: "6px", height: "6px", background: "#c8973a", transform: "rotate(45deg)" }} />
            <span style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to left, transparent, #c8973a)" }} />
          </div>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "#d4b896", lineHeight: 1.7, letterSpacing: "0.04em", fontStyle: "italic", marginBottom: "44px" }}>
            Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/collection" style={{ display: "inline-block", padding: "16px 48px", background: "linear-gradient(135deg, #c8973a, #f7c568)", color: "#1a0f0a", textDecoration: "none", letterSpacing: "0.18em", fontSize: "12px", fontFamily: "Arial", fontWeight: 700, transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(200,151,58,0.4)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>
              SHOP THE COLLECTION
            </Link>
            <Link to="/about" style={{ display: "inline-block", padding: "16px 48px", background: "transparent", color: "#f7c568", textDecoration: "none", letterSpacing: "0.18em", fontSize: "12px", fontFamily: "Arial", fontWeight: 600, border: "1px solid #c8973a55", transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.borderColor = "#c8973a"; e.target.style.background = "rgba(200,151,58,0.08)"; }}
              onMouseLeave={e => { e.target.style.borderColor = "#c8973a55"; e.target.style.background = "transparent"; }}>
              OUR STORY
            </Link>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "80px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.7 }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Arial" }}>SCROLL</span>
          <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, #c8973a, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(200,151,58,0.1)", borderTop: "1px solid rgba(200,151,58,0.2)", padding: "14px 0", zIndex: 10, display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
          {features.map((f, i) => (
            <div key={i} style={{ textAlign: "center", opacity: activeFeature === i ? 1 : 0.45, transition: "opacity 0.5s" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.28em", color: "#f7c568", fontFamily: "Arial", fontWeight: 700 }}>{f.label}</div>
              <div style={{ fontSize: "9px", color: "#c8973a", letterSpacing: "0.15em", fontFamily: "Arial" }}>{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: "#c8973a", overflow: "hidden", padding: "13px 0", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-block", animation: "marquee 20s linear infinite" }}>
          {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
            <span key={i} style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#1a0f0a", fontFamily: "Arial", fontWeight: 700 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── COLLECTIONS ── */}
      <section style={{ padding: "100px 5% 80px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8973a", fontFamily: "Arial", marginBottom: "16px" }}>CURATED FOR YOU</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f7c568", fontWeight: 400, margin: 0, letterSpacing: "0.05em" }}>Shop by Category</h2>
          <div style={{ width: "60px", height: "2px", background: "#c8973a", margin: "20px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
          {collections.map((col, i) => (
            <Link key={i} to={col.href} style={{ textDecoration: "none" }}>
              <div style={{ position: "relative", background: i === 0 ? "linear-gradient(145deg,#2d1408,#1a0f0a)" : i === 1 ? "linear-gradient(145deg,#1a0f0a,#0d0703)" : "linear-gradient(145deg,#231209,#1a0f0a)", border: "1px solid rgba(200,151,58,0.2)", padding: "60px 40px", minHeight: "320px", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", transition: "all 0.4s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8973a"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.2)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <span style={{ position: "absolute", top: "24px", left: "24px", fontSize: "9px", letterSpacing: "0.3em", color: "#1a0f0a", background: "#c8973a", padding: "4px 12px", fontFamily: "Arial", fontWeight: 700 }}>{col.tag}</span>
                <div style={{ position: "absolute", top: "20px", right: "30px", fontSize: "7rem", color: "rgba(200,151,58,0.06)", fontFamily: "Georgia", lineHeight: 1 }}>0{i + 1}</div>
                <div>
                  <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Arial", marginBottom: "8px" }}>{col.subtitle}</p>
                  <h3 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#f7c568", fontWeight: 400, margin: "0 0 14px", letterSpacing: "0.06em" }}>{col.title}</h3>
                  <p style={{ fontSize: "13px", color: "#a08060", fontStyle: "italic", marginBottom: "24px", lineHeight: 1.5 }}>{col.desc}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", letterSpacing: "0.2em", color: "#f7c568", fontFamily: "Arial" }}>EXPLORE →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── STATS WITH COUNTER ANIMATION ── */}
      <section style={{ background: "linear-gradient(135deg,#0d0703 0%,#1a0f0a 50%,#2d1408 100%)", padding: "80px 5%", borderTop: "1px solid rgba(200,151,58,0.15)", borderBottom: "1px solid rgba(200,151,58,0.15)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="group flex flex-col items-center gap-2">
              {/* Top accent line — expands on hover */}
              <div className="h-px mb-2 transition-all duration-500 w-8 group-hover:w-16"
                style={{ background: "linear-gradient(to right,transparent,#c8973a,transparent)" }} />

              {/* Animated number */}
              <div style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "#f7c568", fontFamily: "Georgia", lineHeight: 1, fontWeight: 400 }}>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
              </div>

              {/* Label */}
              <div className="text-xs tracking-widest font-bold mt-1" style={{ letterSpacing: "0.25em", color: "#c8973a", fontFamily: "Arial" }}>
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed italic mt-1" style={{ color: "#7a6050", maxWidth: "180px" }}>
                {stat.desc}
              </p>

              {/* Bottom accent */}
              <div className="h-px mt-2 transition-all duration-700 w-4 group-hover:w-12"
                style={{ background: "rgba(200,151,58,0.3)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8973a", fontFamily: "Arial", marginBottom: "16px" }}>THE D DOLLY LAMB DIFFERENCE</p>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "#f7c568", fontWeight: 400, lineHeight: 1.2, marginBottom: "24px" }}>Where Leather Becomes Legend</h2>
            <p style={{ color: "#a08060", lineHeight: 1.9, fontSize: "15px", marginBottom: "36px", fontStyle: "italic" }}>
              Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {["Hand-selected Grade A lambskin hides", "Bespoke sizing available on all styles", "Antique brass & gunmetal hardware options", "Complimentary lifetime conditioning service"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ width: "6px", height: "6px", background: "#c8973a", transform: "rotate(45deg)", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "#d4b896", letterSpacing: "0.04em" }}>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" style={{ display: "inline-block", marginTop: "40px", padding: "14px 40px", border: "1px solid #c8973a", color: "#f7c568", textDecoration: "none", fontSize: "11px", letterSpacing: "0.22em", fontFamily: "Arial", fontWeight: 600, transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.background = "#c8973a"; e.target.style.color = "#1a0f0a"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#f7c568"; }}>
              LEARN MORE
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            {[{ bg: "#2d1408", label: "Lambskin", sub: "PREMIUM HIDE" }, { bg: "#1a0f0a", label: "Artisan", sub: "HAND CRAFTED" }, { bg: "#0d0703", label: "Fit", sub: "BESPOKE CUT" }, { bg: "#231209", label: "Heritage", sub: "EST. 2001" }].map((box, i) => (
              <div key={i} style={{ background: box.bg, border: "1px solid rgba(200,151,58,0.15)", padding: "40px 24px", textAlign: "center", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#c8973a")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)")}>
                <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Arial", marginBottom: "10px" }}>{box.sub}</p>
                <p style={{ fontSize: "1.3rem", color: "#f7c568", fontFamily: "Georgia" }}>{box.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#0d0703", borderTop: "1px solid rgba(200,151,58,0.15)", padding: "80px 5%", textAlign: "center" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8973a", fontFamily: "Arial", marginBottom: "16px" }}>CLIENT VOICES</p>
        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "#f7c568", fontWeight: 400, marginBottom: "48px" }}>What Our Clients Say</h2>
        <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "120px" }}>
          <p style={{ fontSize: "clamp(1rem,2vw,1.3rem)", color: "#d4b896", fontStyle: "italic", lineHeight: 1.7, marginBottom: "24px" }}>
            "{testimonials[activeTestimonial].quote}"
          </p>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#c8973a", fontFamily: "Arial" }}>
            — {testimonials[activeTestimonial].name},{" "}
            <span style={{ color: "#7a6050" }}>{testimonials[activeTestimonial].location}</span>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveTestimonial(i)}
              style={{ width: i === activeTestimonial ? "28px" : "8px", height: "8px", border: "none", background: i === activeTestimonial ? "#c8973a" : "#3d2010", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>
      </section>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollPulse { 0%,100% { opacity:1; transform:scaleY(1); } 50% { opacity:0.4; transform:scaleY(0.7); } }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
};

export default Hero1;