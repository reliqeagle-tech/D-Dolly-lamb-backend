// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const TeamCarousel = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       eyebrow: "COMFORT SERIES",
//       heading: "Premium Lambskin Pillows",
//       description: "Hand-stitched from Grade A lambskin — impossibly soft, built to last a lifetime. The finishing touch every room deserves.",
//       image: assets.Pillows,
//       buttonText: "Shop Now",
//       tag: "BESTSELLER",
//       href: "/collection",
//     },
//     {
//       id: 2,
//       eyebrow: "NEW ARRIVAL",
//       heading: "New Leather Collection",
//       description: "Our latest drop brings refined lambskin home essentials — where everyday objects become statements of quiet luxury.",
//       image: assets.Trust1,
//       buttonText: "View Collection",
//       tag: "JUST IN",
//       href: "/collection",
//     },
//     {
//       id: 3,
//       eyebrow: "SIGNATURE LINE",
//       heading: "Handcrafted Leather Jackets",
//       description: "100% authentic lambskin, cut and stitched by our master artisans. Unique by design, timeless by nature.",
//       image: assets.Trust3,
//       buttonText: "Shop Now",
//       tag: "LIMITED",
//       href: "/men",
//     },
//     {
//       id: 4,
//       eyebrow: "HOME LUXURY",
//       heading: "Luxury Home Décor",
//       description: "Elevate your living space with pieces that carry the warmth of natural leather and the soul of genuine craftsmanship.",
//       image: assets.Accessories,
//       buttonText: "View Collection",
//       tag: "EXCLUSIVE",
//       href: "/collection",
//     },
//   ];

//   const loopCards = [...cards, ...cards, ...cards];

//   const cardIcons = [
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="1">
//       <rect x="3" y="7" width="18" height="10" rx="5" stroke="#c8973a" strokeWidth="1.3" />
//       <path d="M3 12h18" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
//     </svg>,
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="2">
//       <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
//       <circle cx="12" cy="12" r="3" stroke="#f7c568" strokeWidth="1.2" />
//     </svg>,
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="3">
//       <path d="M12 3L8 7H5l-2 5 3 1v8h12v-8l3-1-2-5h-3L12 3z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" />
//       <path d="M9 13v5M15 13v5M12 7v3" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
//     </svg>,
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="4">
//       <path d="M12 3l9 7-9 11L3 10z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(200,151,58,0.1)" />
//       <path d="M3 10h18" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
//     </svg>,
//   ];

//   return (
//     <section
//       className="relative overflow-hidden py-24 border-t border-[rgba(200,151,58,0.15)]"
//       style={{ background: "linear-gradient(180deg,#0d0703 0%,#1a0f0a 50%,#0d0703 100%)" }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

//         @keyframes floatUp {
//           from { opacity:0; transform:translateY(28px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         @keyframes infiniteScroll {
//           0%   { transform:translateX(0); }
//           100% { transform:translateX(-33.333%); }
//         }

//         /* Track — must stay here: animation + will-change aren't Tailwind */
//         .tc-track {
//           display:flex;
//           gap:24px;
//           width:max-content;
//           animation:infiniteScroll 40s linear infinite;
//           will-change:transform;
//         }
//         .tc-track:hover { animation-play-state:paused; }


//         .tc-card-3d {
//           transition: border-color 0.4s, transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s;
//           transform-style: preserve-3d;
//         }
//         .tc-card-3d:hover {
//           border-color: #c8973a !important;
//           transform: translateY(-10px) rotateX(3deg) rotateY(-2deg) scale(1.02);
//           box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,151,58,0.3), 0 8px 32px rgba(200,151,58,0.15);
//         }

//         /* Image zoom on card hover — uses parent class tc-card-3d */
//         .tc-card-3d:hover .tc-img {
//           transform: scale(1.08);
//           filter: brightness(1) saturate(1.05);
//         }

//         /* Gold bar sweep on card hover */
//         .tc-gold-bar { position:absolute; top:0; left:0; height:2px; width:0; z-index:10;
//           background:linear-gradient(to right,#c8973a,#f7c568);
//           transition:width 0.45s ease;
//         }
//         .tc-card-3d:hover .tc-gold-bar { width:100%; }

//         /* Glow layer on card hover */
//         .tc-glow { position:absolute; inset:0; pointer-events:none; z-index:1;
//           background:radial-gradient(ellipse at 20% 80%,rgba(200,151,58,0.07),transparent 60%);
//           opacity:0; transition:opacity 0.4s;
//         }
//         .tc-card-3d:hover .tc-glow { opacity:1; }

//         /* Eyebrow ::before line — pseudo-elements can't be done with Tailwind */
//         .tc-eyebrow::before {
//           content:''; display:block;
//           width:16px; height:1px;
//           background:#c8973a; flex-shrink:0;
//         }

//         /* CTA button gradient hover */
//         .tc-btn:hover {
//           background:linear-gradient(135deg,#c8973a,#f7c568);
//           color:#1a0f0a; border-color:transparent;
//         }
//         .tc-btn:hover .tc-btn-arrow { transform:translateX(5px); color:#1a0f0a; }
//         .tc-btn-arrow { transition:transform 0.3s, color 0.3s; color:#c8973a; }

//         /* Marquee strip uses same infiniteScroll keyframe */
//         .tc-marquee-inner { display:inline-block; animation:infiniteScroll 18s linear infinite; white-space:nowrap; }

//         @media (max-width:640px) {
//           .tc-card-3d { min-width:290px; max-width:290px; }
//           .tc-img { height:190px !important; }
//         }
//       `}</style>

//       {/* ── Background glow blobs ── */}
//       <div
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           top: "5%", left: "-8%", width: 320, height: 320,
//           background: "radial-gradient(circle,rgba(200,151,58,0.04),transparent 70%)"
//         }}
//       />
//       <div
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           bottom: "5%", right: "-8%", width: 280, height: 280,
//           background: "radial-gradient(circle,rgba(139,69,19,0.05),transparent 70%)"
//         }}
//       />

//       {/* ── Section Header ── */}
//       <div className="text-center px-6 mb-14" style={{ animation: "floatUp 0.7s ease both" }}>
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <span className="block w-10 h-px" style={{ background: "linear-gradient(to right,transparent,#c8973a)" }} />
//           <span className="text-[10px] tracking-[0.38em]" style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}>
//             OUR CURATED SELECTION
//           </span>
//           <span className="block w-10 h-px" style={{ background: "linear-gradient(to left,transparent,#c8973a)" }} />
//         </div>

//         <h2
//           className="font-light mb-4"
//           style={{
//             fontFamily: "'Cormorant Garamond',Georgia,serif",
//             fontSize: "clamp(2rem,5vw,3.8rem)", color: "#f7c568",
//             letterSpacing: "0.04em", lineHeight: 1.15
//           }}
//         >
//           Explore Our{" "}
//           <span className="italic" style={{ color: "#f5ede0" }}>Finest Pieces</span>
//         </h2>

//         <p
//           className="max-w-[460px] mx-auto text-sm italic leading-loose"
//           style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}
//         >
//           Every item in this selection is handpicked for quality, character, and lasting elegance —
//           made to be lived in, not just admired.
//         </p>

//         <div className="flex items-center justify-center gap-3 mt-5">
//           <span className="block h-0.5 w-12" style={{ background: "linear-gradient(to right,#c8973a,#f7c568)" }} />
//           <span className="block w-1.5 h-1.5 rotate-45" style={{ background: "#c8973a" }} />
//           <span className="block h-0.5 w-6" style={{ background: "rgba(200,151,58,0.3)" }} />
//         </div>
//       </div>

//       {/* ── Infinite Scroll Track ── */}
//       <div className="overflow-hidden py-5 pb-6">
//         <div className="tc-track">
//           {loopCards.map((card, index) => (
//             <div
//               key={`${card.id}-${index}`}
//               className="tc-card-3d relative flex-shrink-0 overflow-hidden rounded-lg cursor-pointer border border-[rgba(200,151,58,0.15)] min-w-[340px] max-w-[340px]"
//               style={{ background: "linear-gradient(145deg,#1e110a,#160c06)" }}
//               onMouseEnter={() => setHoveredId(`${card.id}-${index}`)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               {/* Gold bar */}
//               <div className="tc-gold-bar" />

//               {/* Glow */}
//               <div className="tc-glow" />

//               {/* Image */}
//               <div className="relative overflow-hidden h-[220px]">
//                 <img
//                   src={card.image}
//                   alt={card.heading}
//                   className="tc-img w-full h-full object-cover transition-[transform,filter] duration-[600ms]"
//                   style={{ filter: "brightness(0.88) saturate(0.9)" }}
//                 />
//                 {/* Gradient overlay */}
//                 <div
//                   className="absolute inset-0 z-[2]"
//                   style={{ background: "linear-gradient(to bottom,transparent 40%,rgba(13,7,3,0.85) 100%)" }}
//                 />
//                 {/* Badge */}
//                 <span
//                   className="absolute top-3.5 left-3.5 z-[5] text-[8px] tracking-[0.28em] font-bold px-2.5 py-[3px] rounded-sm"
//                   style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a", fontFamily: "Georgia,serif" }}
//                 >
//                   {card.tag}
//                 </span>
//               </div>

//               {/* Body */}
//               <div className="flex flex-col gap-2.5 px-6 pt-[22px] pb-6 relative">
//                 {/* Eyebrow + icon */}
//                 <div className="flex items-center justify-between">
//                   <span
//                     className="tc-eyebrow flex items-center gap-2 text-[9px] tracking-[0.3em] font-semibold"
//                     style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}
//                   >
//                     {card.eyebrow}
//                   </span>
//                   <span className="opacity-70">{cardIcons[card.id - 1]}</span>
//                 </div>

//                 {/* Title */}
//                 <h3
//                   className="m-0 font-normal leading-tight tracking-[0.02em] text-[1.35rem]"
//                   style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", color: "#f7c568" }}
//                 >
//                   {card.heading}
//                 </h3>

//                 {/* Divider */}
//                 <div className="h-px my-0.5" style={{ background: "rgba(200,151,58,0.12)" }} />

//                 {/* Description */}
//                 <p
//                   className="m-0 text-xs italic leading-[1.75]"
//                   style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}
//                 >
//                   {card.description}
//                 </p>

//                 {/* CTA */}
//                 <Link
//                   to={card.href}
//                   className="tc-btn mt-1 flex items-center justify-center gap-2 py-[11px] w-full rounded-sm text-[10px] tracking-[0.22em] font-semibold no-underline transition-all duration-300"
//                   style={{
//                     background: "transparent",
//                     border: "1px solid rgba(200,151,58,0.3)",
//                     color: "#f7c568",
//                     fontFamily: "Georgia,serif",
//                   }}
//                 >
//                   {card.buttonText}
//                   <span className="tc-btn-arrow">→</span>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Bottom Marquee Strip ── */}
//       <div
//         className="mt-16 overflow-hidden py-3"
//         style={{ borderTop: "1px solid rgba(200,151,58,0.12)", borderBottom: "1px solid rgba(200,151,58,0.12)" }}
//       >
//         <div className="tc-marquee-inner">
//           {Array(8).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED QUALITY  ◆  TIMELESS DESIGN  ◆  D DOLLY LAMB  ").map((t, i) => (
//             <span
//               key={i}
//               className="text-[10px] tracking-[0.22em]"
//               style={{ color: "rgba(200,151,58,0.45)", fontFamily: "Georgia,serif" }}
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamCarousel;






// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// /*
//   ═══════════════════════════════════════════════
//   TEAM CAROUSEL — LIGHT MODE (hero-matched)
//   section bg:   #F0F2FF → #F8F9FF → #FFFFFF
//   card bg:      #FFFFFF  pure white
//   card border:  rgba(99,102,241,0.12)
//   card hover:   shadow + indigo border
//   heading:      #1E1B4B  deep navy
//   subtext:      #374151  readable dark
//   muted:        #6B7280
//   eyebrow:      #6366F1
//   accent:       #6366F1 indigo
//   accent-lt:    #818CF8
//   sky:          #0EA5E9
//   tag:          indigo pill
//   btn:          indigo outline → gradient fill
//   marquee:      indigo text on white bg
//   ═══════════════════════════════════════════════
// */

// const cards = [
//   {
//     id: 1,
//     eyebrow: "COMFORT SERIES",
//     heading: "Premium Lambskin Pillows",
//     description: "Hand-stitched from Grade A lambskin — impossibly soft, built to last a lifetime. The finishing touch every room deserves.",
//     image: assets.Pillows,
//     buttonText: "Shop Now",
//     tag: "BESTSELLER",
//     href: "/collection",
//     accentColor: "#6366F1",
//   },
//   {
//     id: 2,
//     eyebrow: "NEW ARRIVAL",
//     heading: "New Leather Collection",
//     description: "Our latest drop brings refined lambskin home essentials — where everyday objects become statements of quiet luxury.",
//     image: assets.Trust1,
//     buttonText: "View Collection",
//     tag: "JUST IN",
//     href: "/collection",
//     accentColor: "#0EA5E9",
//   },
//   {
//     id: 3,
//     eyebrow: "SIGNATURE LINE",
//     heading: "Handcrafted Leather Jackets",
//     description: "100% authentic lambskin, cut and stitched by our master artisans. Unique by design, timeless by nature.",
//     image: assets.Trust3,
//     buttonText: "Shop Now",
//     tag: "LIMITED",
//     href: "/men",
//     accentColor: "#7C3AED",
//   },
//   {
//     id: 4,
//     eyebrow: "HOME LUXURY",
//     heading: "Luxury Home Décor",
//     description: "Elevate your living space with pieces that carry the warmth of natural leather and the soul of genuine craftsmanship.",
//     image: assets.Accessories,
//     buttonText: "View Collection",
//     tag: "EXCLUSIVE",
//     href: "/collection",
//     accentColor: "#6366F1",
//   },
// ];

// const loopCards = [...cards, ...cards, ...cards];

// const cardIcons = [
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="1">
//     <rect x="3" y="7" width="18" height="10" rx="5" stroke="#6366F1" strokeWidth="1.4" />
//     <path d="M3 12h18" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
//   </svg>,
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="2">
//     <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" stroke="#0EA5E9" strokeWidth="1.3" strokeLinecap="round" />
//     <circle cx="12" cy="12" r="3" stroke="#6366F1" strokeWidth="1.2" />
//   </svg>,
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="3">
//     <path d="M12 3L8 7H5l-2 5 3 1v8h12v-8l3-1-2-5h-3L12 3z" stroke="#7C3AED" strokeWidth="1.3" strokeLinejoin="round" />
//     <path d="M9 13v5M15 13v5M12 7v3" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
//   </svg>,
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="4">
//     <path d="M12 3l9 7-9 11L3 10z" stroke="#6366F1" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(99,102,241,0.08)" />
//     <path d="M3 10h18" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
//   </svg>,
// ];

// const TeamCarousel = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <section style={{
//       position: "relative", overflow: "hidden", padding: "96px 0 80px",
//       background: "linear-gradient(180deg, #EAECFF 0%, #F0F2FF 30%, #F8F9FF 65%, #FFFFFF 100%)",
//       borderTop: "1px solid rgba(99,102,241,0.1)",
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

//         @keyframes tcFadeUp {
//           from { opacity:0; transform:translateY(24px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         @keyframes tcScrollLeft {
//           0%   { transform:translateX(0); }
//           100% { transform:translateX(-33.333%); }
//         }
//         @keyframes tcPulseDot {
//           0%,100% { opacity:1; transform:scale(1); }
//           50%      { opacity:0.5; transform:scale(0.65); }
//         }
//         @keyframes tcGradientFlow {
//           0%{background-position:0% 50%;} 100%{background-position:200% 50%;}
//         }
//         @keyframes tcMarqueeScroll {
//           0%   { transform:translateX(0); }
//           100% { transform:translateX(-50%); }
//         }

//         .tc-header-in { animation: tcFadeUp 0.7s ease both; }
//         .tc-dot1 { animation: tcPulseDot 2s ease-in-out infinite; }
//         .tc-dot2 { animation: tcPulseDot 2s ease-in-out infinite 1s; }

//         .tc-section-title {
//           background: linear-gradient(90deg,#4338CA 0%,#6366F1 30%,#7C3AED 55%,#0EA5E9 80%,#6366F1 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: tcGradientFlow 5s linear infinite;
//         }

//         /* Infinite track */
//         .tc-track {
//           display: flex; gap: 22px; width: max-content;
//           animation: tcScrollLeft 40s linear infinite;
//           will-change: transform;
//         }
//         .tc-track:hover { animation-play-state: paused; }

//         /* Card base + hover */
//         .tc-card {
//           background: #FFFFFF;
//           border: 1.5px solid rgba(99,102,241,0.12);
//           border-radius: 14px;
//           box-shadow: 0 4px 20px rgba(99,102,241,0.06), 0 1px 4px rgba(0,0,0,0.04);
//           overflow: hidden; cursor: pointer; flex-shrink: 0;
//           min-width: 340px; max-width: 340px;
//           position: relative;
//           transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.4s ease;
//         }
//         .tc-card:hover {
//           transform: translateY(-10px) scale(1.015);
//           border-color: rgba(99,102,241,0.45);
//           box-shadow: 0 28px 64px rgba(99,102,241,0.16), 0 0 0 1px rgba(99,102,241,0.1), 0 8px 24px rgba(99,102,241,0.1);
//         }
//         .tc-card:active { transform: translateY(-4px) scale(1); }

//         /* Top sweep bar */
//         .tc-bar {
//           position: absolute; top: 0; left: 0; z-index: 10;
//           height: 2px; width: 0;
//           background: linear-gradient(90deg,#4F46E5,#818CF8,#0EA5E9);
//           transition: width 0.45s ease;
//         }
//         .tc-card:hover .tc-bar { width: 100%; }

//         /* Glow overlay */
//         .tc-glow {
//           position: absolute; inset: 0; pointer-events: none; z-index: 0;
//           background: radial-gradient(ellipse at 30% 0%, rgba(99,102,241,0.05), transparent 60%);
//           opacity: 0; transition: opacity 0.4s ease;
//         }
//         .tc-card:hover .tc-glow { opacity: 1; }

//         /* Image zoom */
//         .tc-img {
//           transition: transform 0.6s ease, filter 0.6s ease;
//           filter: brightness(0.95) saturate(0.95);
//         }
//         .tc-card:hover .tc-img {
//           transform: scale(1.07);
//           filter: brightness(1) saturate(1.05);
//         }

//         /* CTA Button */
//         .tc-btn {
//           display: flex; align-items: center; justify-content: center; gap: 8px;
//           padding: 11px 0; width: 100%;
//           border: 1.5px solid rgba(99,102,241,0.3);
//           border-radius: 6px;
//           color: #6366F1;
//           font-family: 'Jost', sans-serif;
//           font-size: 10.5px; font-weight: 500; letter-spacing: 0.22em;
//           text-transform: uppercase; text-decoration: none;
//           background: transparent;
//           transition: all 0.3s ease;
//           position: relative; overflow: hidden;
//         }
//         .tc-btn::before {
//           content:''; position:absolute; inset:0;
//           background:linear-gradient(135deg,#4338CA,#6366F1,#0EA5E9);
//           opacity:0; transition:opacity 0.3s ease;
//         }
//         .tc-btn:hover::before { opacity:1; }
//         .tc-btn:hover { color:#fff; border-color:transparent; box-shadow:0 6px 20px rgba(99,102,241,0.3); }
//         .tc-btn span { position:relative; z-index:1; }
//         .tc-btn .tc-arrow { position:relative;z-index:1; transition:transform 0.3s ease; display:inline-block; }
//         .tc-btn:hover .tc-arrow { transform:translateX(5px); }
//         .tc-btn:active { transform:scale(0.98); }

//         /* Marquee strip */
//         .tc-marquee {
//           display:inline-block;
//           animation:tcMarqueeScroll 24s linear infinite;
//           white-space:nowrap;
//         }

//         @media(max-width:640px) {
//           .tc-card { min-width:290px; max-width:290px; }
//         }
//       `}</style>

//       {/* Grid bg */}
//       <div style={{
//         position: "absolute", inset: 0, pointerEvents: "none",
//         backgroundImage: "linear-gradient(rgba(99,102,241,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.055) 1px,transparent 1px)",
//         backgroundSize: "44px 44px",
//       }} />

//       {/* Blobs */}
//       <div style={{ position: "absolute", top: -120, left: -80, width: 500, height: 500, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(129,140,248,0.11) 0%,transparent 70%)" }} />
//       <div style={{ position: "absolute", bottom: -80, right: -60, width: 380, height: 380, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)" }} />
//       <div style={{ position: "absolute", top: "35%", right: "8%", width: 260, height: 260, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)" }} />

//       {/* Vertical accent lines */}
//       <div style={{ position: "absolute", left: "3%", top: "10%", bottom: "10%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.2),transparent)" }} />
//       <div style={{ position: "absolute", right: "3%", top: "20%", bottom: "20%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.15),transparent)" }} />

//       {/* ── Header ── */}
//       <div className="tc-header-in" style={{ textAlign: "center", padding: "0 24px", marginBottom: 60, position: "relative", zIndex: 1 }}>

//         {/* Eyebrow pill */}
//         <div style={{
//           display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
//           background: "rgba(99,102,241,0.08)",
//           border: "1px solid rgba(99,102,241,0.22)",
//           borderRadius: 100, padding: "7px 20px",
//         }}>
//           <span className="tc-dot1" style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366F1", display: "inline-block" }} />
//           <span style={{ fontSize: 9.5, letterSpacing: "0.34em", color: "#6366F1", fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: "uppercase" }}>
//             OUR CURATED SELECTION
//           </span>
//           <span className="tc-dot2" style={{ width: 6, height: 6, borderRadius: "50%", background: "#0EA5E9", display: "inline-block" }} />
//         </div>

//         {/* Heading */}
//         <h2 style={{
//           fontFamily: "'Cormorant Garamond',Georgia,serif",
//           fontSize: "clamp(2.2rem,5vw,3.8rem)",
//           fontWeight: 300, lineHeight: 1.1, letterSpacing: "0.03em",
//           marginBottom: 18, color: "#1E1B4B",
//         }}>
//           <span className="tc-section-title">Explore Our</span>{" "}
//           <em style={{ fontStyle: "italic", fontWeight: 300, color: "#1E1B4B" }}>Finest Pieces</em>
//         </h2>

//         <p style={{
//           maxWidth: 460, margin: "0 auto 28px",
//           fontSize: 15, fontStyle: "italic", lineHeight: 1.85,
//           color: "#6B7280",
//           fontFamily: "'Cormorant Garamond',Georgia,serif",
//         }}>
//           Every item in this selection is handpicked for quality, character, and lasting elegance —
//           made to be lived in, not just admired.
//         </p>

//         {/* Ornamental divider */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, maxWidth: 260, margin: "0 auto" }}>
//           <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(99,102,241,0.35))" }} />
//           <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
//             <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#C7D2FE" }} />
//             <div style={{ width: 7, height: 7, background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", transform: "rotate(45deg)", borderRadius: 1 }} />
//             <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#BAE6FD" }} />
//           </div>
//           <div style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(14,165,233,0.35))" }} />
//         </div>
//       </div>

//       {/* ── Infinite Scroll Cards ── */}
//       <div style={{ overflow: "hidden", padding: "8px 0 12px", position: "relative", zIndex: 1 }}>
//         <div className="tc-track">
//           {loopCards.map((card, index) => (
//             <div
//               key={`${card.id}-${index}`}
//               className="tc-card"
//               onMouseEnter={() => setHoveredId(`${card.id}-${index}`)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               {/* Sweep bar */}
//               <div className="tc-bar" />
//               {/* Glow */}
//               <div className="tc-glow" />

//               {/* Corner accents */}
//               <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderTop: "1.5px solid rgba(99,102,241,0.25)", borderRight: "1.5px solid rgba(99,102,241,0.25)", borderRadius: "0 4px 0 0", zIndex: 5 }} />
//               <div style={{ position: "absolute", bottom: 12, left: 12, width: 16, height: 16, borderBottom: "1.5px solid rgba(99,102,241,0.25)", borderLeft: "1.5px solid rgba(99,102,241,0.25)", borderRadius: "0 0 0 4px", zIndex: 5 }} />

//               {/* Image */}
//               <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
//                 <img
//                   src={card.image} alt={card.heading}
//                   className="tc-img"
//                   style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//                 />
//                 {/* Gradient overlay */}
//                 <div style={{
//                   position: "absolute", inset: 0, zIndex: 2,
//                   background: "linear-gradient(to bottom,transparent 35%,rgba(255,255,255,0.6) 100%)",
//                 }} />

//                 {/* Tag badge */}
//                 <span style={{
//                   position: "absolute", top: 14, left: 14, zIndex: 5,
//                   display: "inline-flex", alignItems: "center", gap: 5,
//                   background: "linear-gradient(135deg,#4F46E5,#0EA5E9)",
//                   color: "#fff", fontSize: 8.5, letterSpacing: "0.28em",
//                   fontFamily: "'Jost',sans-serif", fontWeight: 600,
//                   padding: "5px 12px", borderRadius: 100,
//                   boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
//                 }}>
//                   <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)", display: "inline-block" }} />
//                   {card.tag}
//                 </span>
//               </div>

//               {/* Card body */}
//               <div style={{ padding: "22px 24px 24px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

//                 {/* Eyebrow + icon */}
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                     <span style={{ display: "inline-block", width: 14, height: 1.5, background: `linear-gradient(90deg,${card.accentColor},transparent)` }} />
//                     <span style={{ fontSize: 9, letterSpacing: "0.3em", fontWeight: 600, color: card.accentColor, fontFamily: "'Jost',sans-serif", textTransform: "uppercase" }}>
//                       {card.eyebrow}
//                     </span>
//                   </div>
//                   <span style={{ opacity: 0.75 }}>{cardIcons[card.id - 1]}</span>
//                 </div>

//                 {/* Title — FULLY READABLE */}
//                 <h3 style={{
//                   fontFamily: "'Cormorant Garamond',Georgia,serif",
//                   fontSize: "clamp(1.2rem,2.5vw,1.4rem)",
//                   fontWeight: 400, lineHeight: 1.2,
//                   color: "#1E1B4B", letterSpacing: "0.01em", margin: 0,
//                 }}>
//                   {card.heading}
//                 </h3>

//                 {/* Divider */}
//                 <div style={{ height: 1.5, background: `linear-gradient(90deg,${card.accentColor},rgba(14,165,233,0.4),transparent)`, borderRadius: 1 }} />

//                 {/* Description — FULLY READABLE */}
//                 <p style={{
//                   fontSize: 13, lineHeight: 1.78,
//                   color: "#4B5563",
//                   fontFamily: "'Jost',sans-serif", fontWeight: 300,
//                   margin: 0,
//                 }}>
//                   {card.description}
//                 </p>

//                 {/* CTA */}
//                 <Link to={card.href} className="tc-btn" style={{ marginTop: 4 }}>
//                   <span>{card.buttonText}</span>
//                   <span className="tc-arrow">
//                     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M5 12h14M12 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Bottom Marquee Strip ── */}
//       <div style={{
//         marginTop: 56, overflow: "hidden",
//         padding: "12px 0", position: "relative", zIndex: 1,
//         borderTop: "1px solid rgba(99,102,241,0.12)",
//         borderBottom: "1px solid rgba(99,102,241,0.12)",
//         background: "rgba(99,102,241,0.02)",
//       }}>
//         <div className="tc-marquee">
//           {Array(10).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED QUALITY  ◆  TIMELESS DESIGN  ◆  D DOLLY LAMB  ").map((t, i) => (
//             <span key={i} style={{
//               fontSize: 10, letterSpacing: "0.22em",
//               color: "rgba(99,102,241,0.5)",
//               fontFamily: "'Jost',sans-serif", fontWeight: 500,
//             }}>
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamCarousel;






import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/*
  ═══════════════════════════════════════════════
  TEAM CAROUSEL — LIGHT MODE (hero-matched)
  section bg:   #F0F2FF → #F8F9FF → #FFFFFF
  card bg:      #FFFFFF  pure white
  card border:  rgba(99,102,241,0.12)
  card hover:   shadow + indigo border
  heading:      #1E1B4B  deep navy
  subtext:      #374151  readable dark
  muted:        #6B7280
  eyebrow:      #6366F1
  accent:       #6366F1 indigo
  accent-lt:    #818CF8
  sky:          #0EA5E9
  tag:          indigo pill
  btn:          indigo outline → gradient fill
  marquee:      indigo text on white bg
  ═══════════════════════════════════════════════
*/

const cards = [
  {
    id: 1,
    eyebrow: "COMFORT SERIES",
    heading: "Premium Lambskin Pillows",
    description: "Hand-stitched from Grade A lambskin — impossibly soft, built to last a lifetime. The finishing touch every room deserves.",
    image: assets.Pillows,
    buttonText: "Shop Now",
    tag: "BESTSELLER",
    href: "/collection",
    accentColor: "#6366F1",
  },
  {
    id: 2,
    eyebrow: "NEW ARRIVAL",
    heading: "New Leather Collection",
    description: "Our latest drop brings refined lambskin home essentials — where everyday objects become statements of quiet luxury.",
    image: assets.Trust1,
    buttonText: "View Collection",
    tag: "JUST IN",
    href: "/collection",
    accentColor: "#0EA5E9",
  },
  {
    id: 3,
    eyebrow: "SIGNATURE LINE",
    heading: "Handcrafted Leather Jackets",
    description: "100% authentic lambskin, cut and stitched by our master artisans. Unique by design, timeless by nature.",
    image: assets.Trust3,
    buttonText: "Shop Now",
    tag: "LIMITED",
    href: "/men",
    accentColor: "#7C3AED",
  },
  {
    id: 4,
    eyebrow: "HOME LUXURY",
    heading: "Luxury Home Décor",
    description: "Elevate your living space with pieces that carry the warmth of natural leather and the soul of genuine craftsmanship.",
    image: assets.Accessories,
    buttonText: "View Collection",
    tag: "EXCLUSIVE",
    href: "/collection",
    accentColor: "#6366F1",
  },
];

const loopCards = [...cards, ...cards, ...cards];

const cardIcons = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="1">
    <rect x="3" y="7" width="18" height="10" rx="5" stroke="#6366F1" strokeWidth="1.4" />
    <path d="M3 12h18" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="2">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" stroke="#0EA5E9" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" stroke="#6366F1" strokeWidth="1.2" />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="3">
    <path d="M12 3L8 7H5l-2 5 3 1v8h12v-8l3-1-2-5h-3L12 3z" stroke="#7C3AED" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M9 13v5M15 13v5M12 7v3" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" key="4">
    <path d="M12 3l9 7-9 11L3 10z" stroke="#6366F1" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(99,102,241,0.08)" />
    <path d="M3 10h18" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>,
];

const TeamCarousel = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section style={{
      position: "relative", overflow: "hidden", padding: "40px 0 40px",
      background: "linear-gradient(180deg, #EAECFF 0%, #F0F2FF 30%, #F8F9FF 65%, #FFFFFF 100%)",
      borderTop: "1px solid rgba(99,102,241,0.1)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        @keyframes tcFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes tcScrollLeft {
          0%   { transform:translateX(0); }
          100% { transform:translateX(-33.333%); }
        }
        @keyframes tcPulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(0.65); }
        }
        @keyframes tcGradientFlow {
          0%{background-position:0% 50%;} 100%{background-position:200% 50%;}
        }
        @keyframes tcMarqueeScroll {
          0%   { transform:translateX(0); }
          100% { transform:translateX(-50%); }
        }

        .tc-header-in { animation: tcFadeUp 0.7s ease both; }
        .tc-dot1 { animation: tcPulseDot 2s ease-in-out infinite; }
        .tc-dot2 { animation: tcPulseDot 2s ease-in-out infinite 1s; }

        .tc-section-title {
          background: linear-gradient(90deg,#4338CA 0%,#6366F1 30%,#7C3AED 55%,#0EA5E9 80%,#6366F1 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: tcGradientFlow 5s linear infinite;
        }

        /* Infinite track */
        .tc-track {
          display: flex; gap: 22px; width: max-content;
          animation: tcScrollLeft 40s linear infinite;
          will-change: transform;
        }
        .tc-track:hover { animation-play-state: paused; }

        /* Card base + hover */
        .tc-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(99,102,241,0.12);
          border-radius: 14px;
          box-shadow: 0 4px 20px rgba(99,102,241,0.06), 0 1px 4px rgba(0,0,0,0.04);
          overflow: hidden; cursor: pointer; flex-shrink: 0;
          min-width: 340px; max-width: 340px;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .tc-card:hover {
          transform: translateY(-10px) scale(1.015);
          border-color: rgba(99,102,241,0.45);
          box-shadow: 0 28px 64px rgba(99,102,241,0.16), 0 0 0 1px rgba(99,102,241,0.1), 0 8px 24px rgba(99,102,241,0.1);
        }
        .tc-card:active { transform: translateY(-4px) scale(1); }

        /* Top sweep bar */
        .tc-bar {
          position: absolute; top: 0; left: 0; z-index: 10;
          height: 2px; width: 0;
          background: linear-gradient(90deg,#4F46E5,#818CF8,#0EA5E9);
          transition: width 0.45s ease;
        }
        .tc-card:hover .tc-bar { width: 100%; }

        /* Glow overlay */
        .tc-glow {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background: radial-gradient(ellipse at 30% 0%, rgba(99,102,241,0.05), transparent 60%);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .tc-card:hover .tc-glow { opacity: 1; }

        /* Image zoom — NO blur/filter */
        .tc-img {
          transition: transform 0.6s ease;
        }
        .tc-card:hover .tc-img {
          transform: scale(1.05);
        }

        /* CTA Button */
        .tc-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px 0; width: 100%;
          border: 1.5px solid rgba(99,102,241,0.3);
          border-radius: 6px;
          color: #6366F1;
          font-family: 'Jost', sans-serif;
          font-size: 10.5px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; text-decoration: none;
          background: transparent;
          transition: all 0.3s ease;
          position: relative; overflow: hidden;
        }
        .tc-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,#4338CA,#6366F1,#0EA5E9);
          opacity:0; transition:opacity 0.3s ease;
        }
        .tc-btn:hover::before { opacity:1; }
        .tc-btn:hover { color:#fff; border-color:transparent; box-shadow:0 6px 20px rgba(99,102,241,0.3); }
        .tc-btn span { position:relative; z-index:1; }
        .tc-btn .tc-arrow { position:relative;z-index:1; transition:transform 0.3s ease; display:inline-block; }
        .tc-btn:hover .tc-arrow { transform:translateX(5px); }
        .tc-btn:active { transform:scale(0.98); }

        /* Marquee strip */
        .tc-marquee {
          display:inline-block;
          animation:tcMarqueeScroll 24s linear infinite;
          white-space:nowrap;
        }

        @media(max-width:640px) {
          .tc-card { min-width:290px; max-width:290px; }
        }
      `}</style>

      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(99,102,241,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.055) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
      }} />

      {/* Blobs */}
      <div style={{ position: "absolute", top: -120, left: -80, width: 500, height: 500, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(129,140,248,0.11) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: -80, right: -60, width: 380, height: 380, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", top: "35%", right: "8%", width: 260, height: 260, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)" }} />

      {/* Vertical accent lines */}
      <div style={{ position: "absolute", left: "3%", top: "10%", bottom: "10%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.2),transparent)" }} />
      <div style={{ position: "absolute", right: "3%", top: "20%", bottom: "20%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.15),transparent)" }} />

      {/* ── Header ── */}
      <div className="tc-header-in" style={{ textAlign: "center", padding: "0 24px", marginBottom: 60, position: "relative", zIndex: 1 }}>

        {/* Eyebrow pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.22)",
          borderRadius: 100, padding: "7px 20px",
        }}>
          <span className="tc-dot1" style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366F1", display: "inline-block" }} />
          <span style={{ fontSize: 9.5, letterSpacing: "0.34em", color: "#6366F1", fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: "uppercase" }}>
            OUR CURATED SELECTION
          </span>
          <span className="tc-dot2" style={{ width: 6, height: 6, borderRadius: "50%", background: "#0EA5E9", display: "inline-block" }} />
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          fontSize: "clamp(2.2rem,5vw,3.8rem)",
          fontWeight: 300, lineHeight: 1.1, letterSpacing: "0.03em",
          marginBottom: 18, color: "#1E1B4B",
        }}>
          <span className="tc-section-title">Explore Our</span>{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "#1E1B4B" }}>Finest Pieces</em>
        </h2>

        <p style={{
          maxWidth: 460, margin: "0 auto 28px",
          fontSize: 15, fontStyle: "italic", lineHeight: 1.85,
          color: "#6B7280",
          fontFamily: "'Cormorant Garamond',Georgia,serif",
        }}>
          Every item in this selection is handpicked for quality, character, and lasting elegance —
          made to be lived in, not just admired.
        </p>

        {/* Ornamental divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, maxWidth: 260, margin: "0 auto" }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(99,102,241,0.35))" }} />
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#C7D2FE" }} />
            <div style={{ width: 7, height: 7, background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", transform: "rotate(45deg)", borderRadius: 1 }} />
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#BAE6FD" }} />
          </div>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(14,165,233,0.35))" }} />
        </div>
      </div>

      {/* ── Infinite Scroll Cards ── */}
      <div style={{ overflow: "hidden", padding: "8px 0 12px", position: "relative", zIndex: 1 }}>
        <div className="tc-track">
          {loopCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="tc-card"
              onMouseEnter={() => setHoveredId(`${card.id}-${index}`)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Sweep bar */}
              <div className="tc-bar" />
              {/* Glow */}
              <div className="tc-glow" />

              {/* Corner accents */}
              <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderTop: "1.5px solid rgba(99,102,241,0.25)", borderRight: "1.5px solid rgba(99,102,241,0.25)", borderRadius: "0 4px 0 0", zIndex: 5 }} />
              <div style={{ position: "absolute", bottom: 12, left: 12, width: 16, height: 16, borderBottom: "1.5px solid rgba(99,102,241,0.25)", borderLeft: "1.5px solid rgba(99,102,241,0.25)", borderRadius: "0 0 0 4px", zIndex: 5 }} />

              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
                <img
                  src={card.image} alt={card.heading}
                  className="tc-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Gradient overlay — just a thin bottom shadow so badge readable */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 2,
                  background: "linear-gradient(to bottom,rgba(0,0,0,0.08) 0%,transparent 40%)",
                }} />

                {/* Tag badge */}
                <span style={{
                  position: "absolute", top: 14, left: 14, zIndex: 5,
                  display: "inline-flex", alignItems: "center", gap: 5,
                  background: "linear-gradient(135deg,#4F46E5,#0EA5E9)",
                  color: "#fff", fontSize: 8.5, letterSpacing: "0.28em",
                  fontFamily: "'Jost',sans-serif", fontWeight: 600,
                  padding: "5px 12px", borderRadius: 100,
                  boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)", display: "inline-block" }} />
                  {card.tag}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: "22px 24px 24px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

                {/* Eyebrow + icon */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ display: "inline-block", width: 14, height: 1.5, background: `linear-gradient(90deg,${card.accentColor},transparent)` }} />
                    <span style={{ fontSize: 9, letterSpacing: "0.3em", fontWeight: 600, color: card.accentColor, fontFamily: "'Jost',sans-serif", textTransform: "uppercase" }}>
                      {card.eyebrow}
                    </span>
                  </div>
                  <span style={{ opacity: 0.75 }}>{cardIcons[card.id - 1]}</span>
                </div>

                {/* Title — BOLD & READABLE */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: "clamp(1.25rem,2.5vw,1.45rem)",
                  fontWeight: 600, lineHeight: 1.2,
                  color: "#1E1B4B", letterSpacing: "0.01em", margin: 0,
                }}>
                  {card.heading}
                </h3>

                {/* Divider */}
                <div style={{ height: 1.5, background: `linear-gradient(90deg,${card.accentColor},rgba(14,165,233,0.4),transparent)`, borderRadius: 1 }} />

                {/* Description — READABLE */}
                <p style={{
                  fontSize: 13.5, lineHeight: 1.75,
                  color: "#374151",
                  fontFamily: "'Jost',sans-serif", fontWeight: 400,
                  margin: 0,
                }}>
                  {card.description}
                </p>

                {/* CTA */}
                <Link to={card.href} className="tc-btn" style={{ marginTop: 4 }}>
                  <span>{card.buttonText}</span>
                  <span className="tc-arrow">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Marquee Strip — FULLY VISIBLE ── */}
      <div style={{
        marginTop: 56, overflow: "hidden",
        padding: "14px 0", position: "relative", zIndex: 1,
        borderTop: "2px solid rgba(99,102,241,0.2)",
        borderBottom: "2px solid rgba(99,102,241,0.2)",
        background: "linear-gradient(90deg,#EEF0FF,#F4F5FF,#EEF0FF)",
      }}>
        <div className="tc-marquee">
          {Array(10).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED QUALITY  ◆  TIMELESS DESIGN  ◆  D DOLLY LAMB  ").map((t, i) => (
            <span key={i} style={{
              fontSize: 11, letterSpacing: "0.24em",
              color: "#4338CA",
              fontFamily: "'Jost',sans-serif", fontWeight: 600,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;