// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// /* ── Premium SVG Icons ── */
// const icons = {
//   craft: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
//       <path d="M10 22l4-8 4 4 4-8" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="16" cy="10" r="2" fill="#f7c568" opacity="0.7" />
//     </svg>
//   ),
//   quality: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
//       <path d="M16 8l2.2 4.5 5 .7-3.6 3.5.85 4.95L16 19.4l-4.45 2.35.85-4.95L8.8 13.2l5-.7z" stroke="#c8973a" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(200,151,58,0.15)" />
//     </svg>
//   ),
//   heritage: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
//       <rect x="10" y="13" width="12" height="9" rx="1" stroke="#c8973a" strokeWidth="1.2" />
//       <path d="M13 13v-2a3 3 0 0 1 6 0v2" stroke="#f7c568" strokeWidth="1.2" strokeLinecap="round" />
//       <circle cx="16" cy="17.5" r="1.2" fill="#c8973a" />
//     </svg>
//   ),
//   bespoke: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
//       <path d="M11 21l2-2m0 0l6-6m-6 6l-1-3 3-1m4-2l1-3-3 1" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="21" cy="11" r="1.5" fill="#f7c568" opacity="0.8" />
//     </svg>
//   ),
//   global: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
//       <ellipse cx="16" cy="16" rx="6" ry="14" stroke="#c8973a" strokeWidth="1.1" />
//       <path d="M2 16h28M5 10h22M5 22h22" stroke="#c8973a" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
//     </svg>
//   ),
//   care: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
//       <path d="M16 22s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 23 13c0 4.5-7 9-7 9z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(200,151,58,0.12)" />
//     </svg>
//   ),
// };

// const defaultSlides = [
//   { id: 1, iconKey: "craft", eyebrow: "THE ATELIER", title: "Artisan Craftsmanship", body: "Every stitch is placed by hand. Our master craftsmen bring decades of expertise to each piece — turning raw lambskin into wearable art.", tag: "EST. 2001" },
//   { id: 2, iconKey: "quality", eyebrow: "MATERIALS", title: "Grade A Lambskin Only", body: "We source exclusively from the world's finest tanneries. Soft from day one, each hide is hand-selected for grain, drape, and lasting durability.", tag: "PREMIUM HIDE" },
//   { id: 3, iconKey: "heritage", eyebrow: "OUR LEGACY", title: "Two Decades of Heritage", body: "Over 20 years of refining the craft. Our heritage is stitched into every seam — a tradition of excellence that outlasts every passing trend.", tag: "20+ YEARS" },
//   { id: 4, iconKey: "bespoke", eyebrow: "CUSTOM ORDERS", title: "Bespoke Tailoring", body: "Your measurements, your materials, your vision. Our atelier takes full bespoke commissions — crafted solely for you, delivered in 4–6 weeks.", tag: "MADE FOR YOU" },
//   { id: 5, iconKey: "global", eyebrow: "WORLDWIDE", title: "Global Reach, Local Soul", body: "Worn in over 45 countries — yet every jacket carries the soul of a small atelier. Global reach without losing the intimate touch of handcraft.", tag: "45+ COUNTRIES" },
//   { id: 6, iconKey: "care", eyebrow: "AFTERCARE", title: "Lifetime Leather Care", body: "Our relationship doesn't end at delivery. Every D Dolly Lamb client receives a personalised care guide and lifetime conditioning support.", tag: "LIFETIME CARE" },
// ];

// const ActiveSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
//   const slides = defaultSlides;

//   return (
//     <section
//       className="relative overflow-hidden py-24"
//       style={{ background: "linear-gradient(135deg,#0d0703 0%,#1a0f0a 50%,#0d0703 100%)" }}
//     >
//       {/*
//         This <style> block is kept ONLY for 3 things Tailwind genuinely cannot do:
//         1. @import for Google Fonts
//         2. @keyframes — must live in CSS, not JSX
//         3. Swiper library classes (.swiper-pagination-bullet, .swiper-slide-active)
//            injected at runtime by Swiper's JS — no JSX element to attach Tailwind classes to
//       */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

//         @keyframes floatUp {
//           from { opacity:0; transform:translateY(30px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         @keyframes rotateDiamond {
//           from { transform:rotate(0deg); }
//           to   { transform:rotate(360deg); }
//         }

//         .asl-animate      { animation: floatUp 0.8s ease both; }
//         .asl-animate-slow { animation: floatUp 0.7s ease both; }
//         .asl-rotate-ring  { animation: rotateDiamond 20s linear infinite; }

//         /* Swiper internals — runtime-injected, unreachable by Tailwind */
//         .asl-swiper { padding-bottom:60px !important; perspective:1200px; }
//         .asl-swiper .swiper-slide { transition:transform 0.5s ease,opacity 0.5s ease !important; }

//         .asl-swiper .swiper-pagination-bullet {
//           width:6px; height:6px;
//           background:rgba(200,151,58,0.3);
//           opacity:1; border-radius:3px; transition:all 0.3s;
//         }
//         .asl-swiper .swiper-pagination-bullet-active {
//           width:24px;
//           background:linear-gradient(to right,#c8973a,#f7c568);
//           border-radius:3px;
//         }

//         /* .swiper-slide-active is added by Swiper's JS — no JSX hook exists */
//         .asl-swiper .swiper-slide-active .asl-card-border { border-color:rgba(200,151,58,0.6) !important; }
//         .asl-swiper .swiper-slide-active .asl-card-bg     { background:linear-gradient(145deg,#2a1610,#1e110a) !important; }
//         .asl-swiper .swiper-slide-active .asl-card-tag    { opacity:1 !important; }
//       `}</style>

//       {/* ── Background glow orbs ── */}
//       <div
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           top: "10%", left: "-5%", width: 300, height: 300,
//           background: "radial-gradient(circle,rgba(200,151,58,0.04),transparent 70%)"
//         }}
//       />
//       <div
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           bottom: "10%", right: "-5%", width: 250, height: 250,
//           background: "radial-gradient(circle,rgba(139,69,19,0.06),transparent 70%)"
//         }}
//       />

//       {/* ── Section Header ── */}
//       <div className="asl-animate-slow text-center px-6 mb-14">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <span className="block w-10 h-px" style={{ background: "linear-gradient(to right,transparent,#c8973a)" }} />
//           <span className="text-[10px] tracking-[0.38em]" style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}>
//             THE D DOLLY LAMB EXPERIENCE
//           </span>
//           <span className="block w-10 h-px" style={{ background: "linear-gradient(to left,transparent,#c8973a)" }} />
//         </div>

//         <h2
//           className="font-light mb-4"
//           style={{
//             fontFamily: "'Cormorant Garamond',Georgia,serif",
//             fontSize: "clamp(2rem,5vw,3.8rem)",
//             color: "#f7c568", letterSpacing: "0.04em", lineHeight: 1.15,
//           }}
//         >
//           Crafted With <span className="italic" style={{ color: "#f5ede0" }}>Purpose</span>
//         </h2>

//         <p className="max-w-sm mx-auto text-sm italic leading-loose"
//           style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}>
//           Six pillars that define every piece we make — from the first cut of hide to the last stitch of lining.
//         </p>

//         <div className="flex items-center justify-center gap-3 mt-5">
//           <span className="block h-0.5 w-12" style={{ background: "linear-gradient(to right,#c8973a,#f7c568)" }} />
//           <span className="block w-1.5 h-1.5 rotate-45" style={{ background: "#c8973a" }} />
//           <span className="block h-0.5 w-6" style={{ background: "rgba(200,151,58,0.3)" }} />
//         </div>
//       </div>

//       {/* ── Swiper ── */}
//       <div className="px-4 sm:px-6">
//         <Swiper
//           ref={swiperRef}
//           effect="coverflow"
//           grabCursor centeredSlides loop
//           autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
//           coverflowEffect={{ rotate: 18, stretch: 0, depth: 180, modifier: 1.2, slideShadows: false }}
//           breakpoints={{
//             0: { slidesPerView: 1.1, spaceBetween: 16 },
//             640: { slidesPerView: 1.4, spaceBetween: 20 },
//             768: { slidesPerView: 2.2, spaceBetween: 24 },
//             1024: { slidesPerView: 3, spaceBetween: 28 },
//             1280: { slidesPerView: 3.2, spaceBetween: 32 },
//           }}
//           pagination={{ clickable: true }}
//           modules={[EffectCoverflow, Pagination, Autoplay]}
//           className="asl-swiper"
//           onSlideChange={(s) => setActiveIndex(s.realIndex)}
//         >
//           {slides.map((item, i) => (
//             <SwiperSlide key={item.id || i}>
//               {/*
//                 `group` on the outer div lets all children use `group-hover:` prefix.
//                 This replaces every `.asl-card:hover .child { }` rule from the old vanilla CSS.
//               */}
//               <div className="group asl-card-border relative overflow-hidden rounded-md cursor-pointer border border-[rgba(200,151,58,0.15)] transition-[border-color,transform] duration-[400ms] hover:border-[rgba(200,151,58,0.5)] hover:-translate-y-1.5 my-2">

//                 {/* Card inner bg */}
//                 <div
//                   className="asl-card-bg relative flex flex-col gap-3.5 min-h-[320px] px-7 pt-9 pb-8"
//                   style={{ background: "linear-gradient(145deg,#1e110a,#160c06)" }}
//                 >
//                   {/* Gold sweep bar — w-0 → group-hover:w-full */}
//                   <div
//                     className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-[width] duration-[400ms]"
//                     style={{ background: "linear-gradient(to right,#c8973a,#f7c568)" }}
//                   />

//                   {/* Glow overlay — opacity-0 → group-hover:opacity-100 */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
//                     style={{ background: "radial-gradient(ellipse at 30% 30%,rgba(200,151,58,0.06),transparent 70%)" }}
//                   />

//                   {/* Rotating decorative ring */}
//                   <div
//                     className="asl-rotate-ring absolute top-6 right-6 w-14 h-14 rounded-full pointer-events-none"
//                     style={{ border: "1px dashed rgba(200,151,58,0.15)" }}
//                   />

//                   {/* Tag */}
//                   <div
//                     className="asl-card-tag inline-flex items-center gap-1.5 w-fit mb-1 px-2.5 py-0.5 rounded-sm opacity-60 transition-opacity duration-300"
//                     style={{ border: "1px solid rgba(200,151,58,0.3)", fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Georgia,serif" }}
//                   >
//                     <span className="inline-block w-1 h-1 rounded-full" style={{ background: "#c8973a" }} />
//                     {item.tag || `0${i + 1}`}
//                   </div>

//                   {/* Icon */}
//                   <div className="mb-1">{icons[item.iconKey] || icons.craft}</div>

//                   {/* Eyebrow */}
//                   <p className="text-[9px] tracking-[0.3em] font-semibold" style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}>
//                     {item.eyebrow || "FEATURE"}
//                   </p>

//                   {/* Title */}
//                   <h3
//                     className="m-0 font-normal leading-tight"
//                     style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: "#f7c568", letterSpacing: "0.02em" }}
//                   >
//                     {item.title}
//                   </h3>

//                   {/* Divider */}
//                   <div className="w-8 h-px" style={{ background: "rgba(200,151,58,0.3)" }} />

//                   {/* Body */}
//                   <p className="text-[13px] italic leading-loose flex-1" style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}>
//                     {item.body || item.content}
//                   </p>

//                   {/*
//                     Arrow CTA — uses group-hover to:
//                     - translate X  → group-hover:translate-x-1.5
//                     - rotate −45°  → group-hover:-rotate-45
//                     - full opacity → group-hover:opacity-100
//                     Replaces: .asl-card:hover .asl-arrow { transform: translateX(5px) rotate(-45deg); opacity:1; }
//                   */}
//                   <div
//                     className="mt-auto w-8 h-8 rounded-full flex items-center justify-center text-sm opacity-50 transition-[transform,opacity] duration-300 group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:-rotate-45"
//                     style={{ border: "1px solid rgba(200,151,58,0.25)", color: "#c8973a" }}
//                   >
//                     →
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ── Slide counter ── */}
//       <div className="flex items-center justify-center gap-3 mt-4">
//         <span className="text-[11px] tracking-[0.2em]" style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}>
//           {String(activeIndex + 1).padStart(2, "0")}
//         </span>
//         <span className="block w-10 h-px" style={{ background: "rgba(200,151,58,0.25)" }} />
//         <span className="text-[11px] tracking-[0.2em]" style={{ color: "#5a4030", fontFamily: "Georgia,serif" }}>
//           {String(slides.length).padStart(2, "0")}
//         </span>
//       </div>
//     </section>
//   );
// };

// export default ActiveSlider;





// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// /*
//   ═══════════════════════════════════════════════
//   ACTIVE SLIDER — Hero-matched Color System
//   ═══════════════════════════════════════════════
//   bg deep:        #080818  near-black navy
//   bg section:     linear #0A0A1F → #0D0D2A  deep navy
//   accent primary: #6366F1  indigo
//   accent light:   #818CF8  light indigo
//   accent deep:    #4338CA  deep indigo
//   sky accent:     #0EA5E9  hero sky blue
//   violet:         #7C3AED  hero violet
//   text primary:   #EFF6FF  cool white
//   text muted:     rgba(220,228,255,0.55)
//   card bg:        linear #111130 → #0E0E28
//   card border:    rgba(99,102,241,0.15)  → hover rgba(99,102,241,0.55)
//   divider:        rgba(99,102,241,0.2)
//   ═══════════════════════════════════════════════
// */

// /* ── Premium SVG Icons (indigo/sky theme) ── */
// const icons = {
//   craft: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#818CF8" strokeWidth="1.2" />
//       <path d="M10 22l4-8 4 4 4-8" stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="16" cy="10" r="2" fill="#818CF8" opacity="0.7" />
//     </svg>
//   ),
//   quality: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#818CF8" strokeWidth="1.2" />
//       <path d="M16 8l2.2 4.5 5 .7-3.6 3.5.85 4.95L16 19.4l-4.45 2.35.85-4.95L8.8 13.2l5-.7z"
//         stroke="#6366F1" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(99,102,241,0.15)" />
//     </svg>
//   ),
//   heritage: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#818CF8" strokeWidth="1.2" />
//       <rect x="10" y="13" width="12" height="9" rx="1" stroke="#6366F1" strokeWidth="1.2" />
//       <path d="M13 13v-2a3 3 0 0 1 6 0v2" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" />
//       <circle cx="16" cy="17.5" r="1.2" fill="#6366F1" />
//     </svg>
//   ),
//   bespoke: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#818CF8" strokeWidth="1.2" />
//       <path d="M11 21l2-2m0 0l6-6m-6 6l-1-3 3-1m4-2l1-3-3 1"
//         stroke="#6366F1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="21" cy="11" r="1.5" fill="#818CF8" opacity="0.8" />
//     </svg>
//   ),
//   global: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#818CF8" strokeWidth="1.2" />
//       <ellipse cx="16" cy="16" rx="6" ry="14" stroke="#6366F1" strokeWidth="1.1" />
//       <path d="M2 16h28M5 10h22M5 22h22" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
//     </svg>
//   ),
//   care: (
//     <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="14" stroke="#818CF8" strokeWidth="1.2" />
//       <path d="M16 22s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 23 13c0 4.5-7 9-7 9z"
//         stroke="#6366F1" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(99,102,241,0.12)" />
//     </svg>
//   ),
// };

// const defaultSlides = [
//   { id: 1, iconKey: "craft", eyebrow: "THE ATELIER", title: "Artisan Craftsmanship", body: "Every stitch is placed by hand. Our master craftsmen bring decades of expertise to each piece — turning raw lambskin into wearable art.", tag: "EST. 2001" },
//   { id: 2, iconKey: "quality", eyebrow: "MATERIALS", title: "Grade A Lambskin Only", body: "We source exclusively from the world's finest tanneries. Soft from day one, each hide is hand-selected for grain, drape, and lasting durability.", tag: "PREMIUM HIDE" },
//   { id: 3, iconKey: "heritage", eyebrow: "OUR LEGACY", title: "Two Decades of Heritage", body: "Over 20 years of refining the craft. Our heritage is stitched into every seam — a tradition of excellence that outlasts every passing trend.", tag: "20+ YEARS" },
//   { id: 4, iconKey: "bespoke", eyebrow: "CUSTOM ORDERS", title: "Bespoke Tailoring", body: "Your measurements, your materials, your vision. Our atelier takes full bespoke commissions — crafted solely for you, delivered in 4–6 weeks.", tag: "MADE FOR YOU" },
//   { id: 5, iconKey: "global", eyebrow: "WORLDWIDE", title: "Global Reach, Local Soul", body: "Worn in over 45 countries — yet every jacket carries the soul of a small atelier. Global reach without losing the intimate touch of handcraft.", tag: "45+ COUNTRIES" },
//   { id: 6, iconKey: "care", eyebrow: "AFTERCARE", title: "Lifetime Leather Care", body: "Our relationship doesn't end at delivery. Every D Dolly Lamb client receives a personalised care guide and lifetime conditioning support.", tag: "LIFETIME CARE" },
// ];

// const ActiveSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
//   const slides = defaultSlides;

//   return (
//     <section
//       className="relative overflow-hidden py-24"
//       style={{
//         background: "linear-gradient(160deg, #080818 0%, #0A0A22 45%, #0C0C28 100%)",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

//         @keyframes floatUp {
//           from { opacity:0; transform:translateY(30px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         @keyframes rotateRing {
//           from { transform:rotate(0deg); }
//           to   { transform:rotate(360deg); }
//         }
//         @keyframes gradientFlow {
//           0%   { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
//         @keyframes pulseDot {
//           0%,100% { opacity:1; transform:scale(1); }
//           50%      { opacity:0.5; transform:scale(0.7); }
//         }

//         .asl-animate      { animation: floatUp 0.8s ease both; }
//         .asl-animate-slow { animation: floatUp 0.7s ease both; }
//         .asl-rotate-ring  { animation: rotateRing 22s linear infinite; }
//         .asl-title-gradient {
//           background: linear-gradient(90deg, #818CF8 0%, #6366F1 30%, #0EA5E9 65%, #818CF8 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: gradientFlow 5s linear infinite;
//         }

//         /* Swiper internals */
//         .asl-swiper { padding-bottom: 64px !important; perspective: 1200px; }
//         .asl-swiper .swiper-slide { transition: transform 0.5s ease, opacity 0.5s ease !important; }

//         .asl-swiper .swiper-pagination-bullet {
//           width: 6px; height: 6px;
//           background: rgba(99,102,241,0.3);
//           opacity: 1; border-radius: 3px;
//           transition: all 0.3s ease;
//         }
//         .asl-swiper .swiper-pagination-bullet-active {
//           width: 28px;
//           background: linear-gradient(to right, #4F46E5, #0EA5E9);
//           border-radius: 3px;
//         }

//         /* Active slide border highlight */
//         .asl-swiper .swiper-slide-active .asl-card-border {
//           border-color: rgba(99,102,241,0.55) !important;
//           box-shadow: 0 0 0 1px rgba(99,102,241,0.1), 0 20px 48px rgba(99,102,241,0.15) !important;
//         }
//         .asl-swiper .swiper-slide-active .asl-card-bg {
//           background: linear-gradient(145deg, #141444, #0F0F38) !important;
//         }
//         .asl-swiper .swiper-slide-active .asl-card-tag {
//           opacity: 1 !important;
//         }
//         .asl-swiper .swiper-slide-active .asl-top-bar {
//           width: 100% !important;
//         }
//       `}</style>

//       {/* ── Subtle grid pattern matching hero ── */}
//       <div style={{
//         position: "absolute", inset: 0, pointerEvents: "none",
//         backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
//         backgroundSize: "56px 56px",
//       }} />

//       {/* ── Background glow orbs ── */}
//       <div style={{
//         position: "absolute", top: "-10%", left: "-8%",
//         width: 480, height: 480, borderRadius: "50%", pointerEvents: "none",
//         background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
//       }} />
//       <div style={{
//         position: "absolute", bottom: "-10%", right: "-8%",
//         width: 400, height: 400, borderRadius: "50%", pointerEvents: "none",
//         background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
//       }} />
//       <div style={{
//         position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)",
//         width: 700, height: 300, pointerEvents: "none",
//         background: "radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)",
//       }} />

//       {/* Left vertical accent line */}
//       <div style={{
//         position: "absolute", left: "5%", top: "15%", bottom: "15%",
//         width: 1, pointerEvents: "none",
//         background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3), rgba(14,165,233,0.2), transparent)",
//       }} />
//       <div style={{
//         position: "absolute", right: "5%", top: "20%", bottom: "20%",
//         width: 1, pointerEvents: "none",
//         background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.25), transparent)",
//       }} />

//       {/* ── Section Header ── */}
//       <div className="asl-animate-slow text-center px-6 mb-16" style={{ position: "relative", zIndex: 1 }}>

//         {/* Eyebrow pill */}
//         <div style={{
//           display: "inline-flex", alignItems: "center", gap: 10,
//           marginBottom: 24,
//           background: "rgba(99,102,241,0.08)",
//           border: "1px solid rgba(99,102,241,0.22)",
//           borderRadius: 100, padding: "7px 20px",
//         }}>
//           <span style={{
//             width: 6, height: 6, borderRadius: "50%",
//             background: "#6366F1", display: "inline-block",
//             animation: "pulseDot 2s ease-in-out infinite",
//           }} />
//           <span style={{
//             fontSize: 9.5, letterSpacing: "0.34em",
//             color: "#6366F1", fontFamily: "'Jost', sans-serif", fontWeight: 500,
//             textTransform: "uppercase",
//           }}>
//             THE D DOLLY LAMB EXPERIENCE
//           </span>
//           <span style={{
//             width: 6, height: 6, borderRadius: "50%",
//             background: "#0EA5E9", display: "inline-block",
//             animation: "pulseDot 2s ease-in-out infinite 1s",
//           }} />
//         </div>

//         {/* Main heading */}
//         <h2
//           style={{
//             fontFamily: "'Cormorant Garamond', Georgia, serif",
//             fontSize: "clamp(2.2rem, 5vw, 4rem)",
//             fontWeight: 300,
//             lineHeight: 1.12,
//             letterSpacing: "0.03em",
//             marginBottom: 20,
//           }}
//         >
//           <span className="asl-title-gradient">Crafted With</span>{" "}
//           <span style={{
//             fontStyle: "italic", fontWeight: 300,
//             color: "rgba(240,246,255,0.9)",
//           }}>Purpose</span>
//         </h2>

//         <p style={{
//           maxWidth: 440, margin: "0 auto 28px",
//           fontSize: 13, fontStyle: "italic", lineHeight: 1.85,
//           color: "rgba(220,228,255,0.45)",
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           letterSpacing: "0.03em",
//         }}>
//           Six pillars that define every piece we make — from the first cut of hide to the last stitch of lining.
//         </p>

//         {/* Ornamental divider */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, maxWidth: 260, margin: "0 auto" }}>
//           <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(99,102,241,0.4))" }} />
//           <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
//             <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#C7D2FE" }} />
//             <div style={{ width: 7, height: 7, background: "linear-gradient(135deg, #4F46E5, #0EA5E9)", transform: "rotate(45deg)", borderRadius: 1 }} />
//             <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#BAE6FD" }} />
//           </div>
//           <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(14,165,233,0.4))" }} />
//         </div>
//       </div>

//       {/* ── Swiper ── */}
//       <div className="px-4 sm:px-6" style={{ position: "relative", zIndex: 1 }}>
//         <Swiper
//           ref={swiperRef}
//           effect="coverflow"
//           grabCursor
//           centeredSlides
//           loop
//           autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
//           coverflowEffect={{ rotate: 16, stretch: 0, depth: 180, modifier: 1.2, slideShadows: false }}
//           breakpoints={{
//             0: { slidesPerView: 1.1, spaceBetween: 16 },
//             640: { slidesPerView: 1.4, spaceBetween: 20 },
//             768: { slidesPerView: 2.2, spaceBetween: 24 },
//             1024: { slidesPerView: 3, spaceBetween: 28 },
//             1280: { slidesPerView: 3.2, spaceBetween: 32 },
//           }}
//           pagination={{ clickable: true }}
//           modules={[EffectCoverflow, Pagination, Autoplay]}
//           className="asl-swiper"
//           onSlideChange={(s) => setActiveIndex(s.realIndex)}
//         >
//           {slides.map((item, i) => (
//             <SwiperSlide key={item.id || i}>
//               <div
//                 className="group asl-card-border relative overflow-hidden my-2 cursor-pointer"
//                 style={{
//                   borderRadius: 12,
//                   border: "1px solid rgba(99,102,241,0.14)",
//                   transition: "border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
//                   boxShadow: "0 4px 24px rgba(0,0,8,0.4)",
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = "translateY(-6px)";
//                   e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
//                   e.currentTarget.style.boxShadow = "0 0 0 1px rgba(99,102,241,0.12), 0 24px 56px rgba(99,102,241,0.18)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.borderColor = "rgba(99,102,241,0.14)";
//                   e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,8,0.4)";
//                 }}
//               >
//                 {/* Card inner */}
//                 <div
//                   className="asl-card-bg relative flex flex-col gap-3.5 min-h-[320px] px-7 pt-9 pb-8"
//                   style={{ background: "linear-gradient(145deg, #111130, #0D0D28)" }}
//                 >
//                   {/* Indigo→sky sweep bar on top (animated on active slide via CSS) */}
//                   <div
//                     className="asl-top-bar absolute top-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-[width] duration-500"
//                     style={{ background: "linear-gradient(to right, #4F46E5, #818CF8, #0EA5E9)" }}
//                   />

//                   {/* Glow overlay on hover */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                     style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.07), transparent 65%)" }}
//                   />

//                   {/* Rotating decorative ring */}
//                   <div
//                     className="asl-rotate-ring absolute top-5 right-5 w-14 h-14 rounded-full pointer-events-none"
//                     style={{ border: "1px dashed rgba(99,102,241,0.15)" }}
//                   />

//                   {/* Small corner accent */}
//                   <div style={{
//                     position: "absolute", top: 14, right: 14,
//                     width: 18, height: 18,
//                     borderTop: "1px solid rgba(99,102,241,0.3)",
//                     borderRight: "1px solid rgba(99,102,241,0.3)",
//                     borderRadius: "0 3px 0 0",
//                   }} />
//                   <div style={{
//                     position: "absolute", bottom: 14, left: 14,
//                     width: 18, height: 18,
//                     borderBottom: "1px solid rgba(99,102,241,0.3)",
//                     borderLeft: "1px solid rgba(99,102,241,0.3)",
//                     borderRadius: "0 0 0 3px",
//                   }} />

//                   {/* Tag pill */}
//                   <div
//                     className="asl-card-tag inline-flex items-center gap-1.5 w-fit mb-1 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
//                     style={{
//                       border: "1px solid rgba(99,102,241,0.28)",
//                       borderRadius: 2,
//                       padding: "3px 10px",
//                       fontSize: 8.5, letterSpacing: "0.3em",
//                       color: "#818CF8",
//                       fontFamily: "'Jost', sans-serif",
//                       fontWeight: 500,
//                       textTransform: "uppercase",
//                       background: "rgba(99,102,241,0.06)",
//                     }}
//                   >
//                     <span style={{
//                       display: "inline-block", width: 5, height: 5, borderRadius: 1,
//                       background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
//                       transform: "rotate(45deg)",
//                     }} />
//                     {item.tag || `0${i + 1}`}
//                   </div>

//                   {/* Icon */}
//                   <div className="mb-1">{icons[item.iconKey] || icons.craft}</div>

//                   {/* Eyebrow */}
//                   <p style={{
//                     fontSize: 9, letterSpacing: "0.32em", fontWeight: 500,
//                     color: "#4F46E5",
//                     fontFamily: "'Jost', sans-serif",
//                     textTransform: "uppercase", margin: 0,
//                   }}>
//                     {item.eyebrow || "FEATURE"}
//                   </p>

//                   {/* Title */}
//                   <h3 style={{
//                     fontFamily: "'Cormorant Garamond', Georgia, serif",
//                     fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
//                     fontWeight: 300,
//                     color: "#EFF6FF",
//                     letterSpacing: "0.02em",
//                     lineHeight: 1.2,
//                     margin: 0,
//                   }}>
//                     {item.title}
//                   </h3>

//                   {/* Divider */}
//                   <div style={{
//                     width: 32, height: 1,
//                     background: "linear-gradient(90deg, #4F46E5, #0EA5E9)",
//                     borderRadius: 1,
//                   }} />

//                   {/* Body */}
//                   <p style={{
//                     fontSize: 12.5, fontStyle: "italic",
//                     lineHeight: 1.85, flex: 1,
//                     color: "rgba(220,228,255,0.45)",
//                     fontFamily: "'Cormorant Garamond', Georgia, serif",
//                     margin: 0,
//                   }}>
//                     {item.body || item.content}
//                   </p>

//                   {/* Arrow CTA */}
//                   <div
//                     className="mt-auto w-8 h-8 rounded-full flex items-center justify-center text-sm opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:-rotate-45"
//                     style={{
//                       border: "1px solid rgba(99,102,241,0.3)",
//                       color: "#818CF8",
//                     }}
//                   >
//                     →
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ── Slide counter ── */}
//       <div style={{
//         display: "flex", alignItems: "center", justifyContent: "center",
//         gap: 12, marginTop: 8, position: "relative", zIndex: 1,
//       }}>
//         <span style={{
//           fontSize: 11, letterSpacing: "0.22em",
//           color: "#6366F1",
//           fontFamily: "'Jost', sans-serif", fontWeight: 500,
//         }}>
//           {String(activeIndex + 1).padStart(2, "0")}
//         </span>
//         <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, #4F46E5, #0EA5E9)", opacity: 0.4 }} />
//         <span style={{
//           fontSize: 11, letterSpacing: "0.22em",
//           color: "rgba(220,228,255,0.3)",
//           fontFamily: "'Jost', sans-serif",
//         }}>
//           {String(slides.length).padStart(2, "0")}
//         </span>
//       </div>
//     </section>
//   );
// };

// export default ActiveSlider;







// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// /*
//   ═══════════════════════════════════════════════
//   ACTIVE SLIDER — LIGHT MODE
//   section bg:   #F0F2FF → #EEF0FF → #F8F9FF
//   card bg:      #FFFFFF
//   card border:  rgba(99,102,241,0.15)
//   heading:      #1E1B4B  deep navy
//   subtext:      #4B5563  readable dark grey
//   muted:        #6B7280
//   eyebrow:      #4F46E5  indigo
//   accent:       #6366F1
//   accent-lt:    #818CF8
//   sky:          #0EA5E9
//   tag bg:       rgba(99,102,241,0.08)
//   tag text:     #4F46E5
//   ═══════════════════════════════════════════════
// */

// const icons = {
//   craft: (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
//       <path d="M10 22l4-8 4 4 4-8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="16" cy="10" r="2" fill="#818CF8" />
//     </svg>
//   ),
//   quality: (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
//       <path d="M16 8l2.2 4.5 5 .7-3.6 3.5.85 4.95L16 19.4l-4.45 2.35.85-4.95L8.8 13.2l5-.7z"
//         stroke="#6366F1" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(99,102,241,0.12)" />
//     </svg>
//   ),
//   heritage: (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
//       <rect x="10" y="13" width="12" height="9" rx="1.5" stroke="#6366F1" strokeWidth="1.2" />
//       <path d="M13 13v-2a3 3 0 0 1 6 0v2" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" />
//       <circle cx="16" cy="17.5" r="1.3" fill="#6366F1" />
//     </svg>
//   ),
//   bespoke: (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
//       <path d="M11 21l2-2m0 0l6-6m-6 6l-1-3 3-1m4-2l1-3-3 1"
//         stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="21" cy="11" r="1.5" fill="#818CF8" />
//     </svg>
//   ),
//   global: (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
//       <ellipse cx="16" cy="16" rx="6" ry="13" stroke="#6366F1" strokeWidth="1.1" />
//       <path d="M3 16h26M6 10h20M6 22h20" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
//     </svg>
//   ),
//   care: (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//       <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
//       <path d="M16 22s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 23 13c0 4.5-7 9-7 9z"
//         stroke="#6366F1" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(99,102,241,0.1)" />
//     </svg>
//   ),
// };

// const slides = [
//   { id: 1, iconKey: "craft", eyebrow: "THE ATELIER", title: "Artisan Craftsmanship", body: "Every stitch is placed by hand. Our master craftsmen bring decades of expertise to each piece — turning raw lambskin into wearable art.", tag: "EST. 2001" },
//   { id: 2, iconKey: "quality", eyebrow: "MATERIALS", title: "Grade A Lambskin Only", body: "We source exclusively from the world's finest tanneries. Soft from day one, each hide is hand-selected for grain, drape, and lasting durability.", tag: "PREMIUM HIDE" },
//   { id: 3, iconKey: "heritage", eyebrow: "OUR LEGACY", title: "Two Decades of Heritage", body: "Over 20 years of refining the craft. Our heritage is stitched into every seam — a tradition of excellence that outlasts every passing trend.", tag: "20+ YEARS" },
//   { id: 4, iconKey: "bespoke", eyebrow: "CUSTOM ORDERS", title: "Bespoke Tailoring", body: "Your measurements, your materials, your vision. Our atelier takes full bespoke commissions — crafted solely for you, delivered in 4–6 weeks.", tag: "MADE FOR YOU" },
//   { id: 5, iconKey: "global", eyebrow: "WORLDWIDE", title: "Global Reach, Local Soul", body: "Worn in over 45 countries — yet every jacket carries the soul of a small atelier. Global reach without losing the intimate touch of handcraft.", tag: "45+ COUNTRIES" },
//   { id: 6, iconKey: "care", eyebrow: "AFTERCARE", title: "Lifetime Leather Care", body: "Our relationship doesn't end at delivery. Every D Dolly Lamb client receives a personalised care guide and lifetime conditioning support.", tag: "LIFETIME CARE" },
// ];

// const ActiveSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   return (
//     <section style={{
//       position: "relative", overflow: "hidden", padding: "96px 0 80px",
//       background: "linear-gradient(180deg, #EAECFF 0%, #F0F2FF 35%, #F8F9FF 70%, #FFFFFF 100%)",
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

//         @keyframes aslFadeUp {
//           from { opacity:0; transform:translateY(24px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         @keyframes aslRotate { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
//         @keyframes aslPulse  { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.5;transform:scale(0.65);} }
//         @keyframes aslGradientFlow {
//           0%{background-position:0% 50%;} 100%{background-position:100% 50%;}
//         }

//         .asl-section-in { animation: aslFadeUp 0.7s ease both; }
//         .asl-dot1 { animation: aslPulse 2s ease-in-out infinite; }
//         .asl-dot2 { animation: aslPulse 2s ease-in-out infinite 1s; }
//         .asl-rotate { animation: aslRotate 22s linear infinite; }
//         .asl-gradient-title {
//           background: linear-gradient(90deg, #4338CA 0%, #6366F1 30%, #7C3AED 55%, #0EA5E9 80%, #6366F1 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: aslGradientFlow 5s linear infinite;
//         }

//         /* Swiper */
//         .asl-swiper { padding-bottom: 64px !important; }
//         .asl-swiper .swiper-pagination-bullet {
//           width:6px; height:6px; border-radius:3px;
//           background:rgba(99,102,241,0.25); opacity:1;
//           transition:all 0.3s ease;
//         }
//         .asl-swiper .swiper-pagination-bullet-active {
//           width:28px; border-radius:3px;
//           background:linear-gradient(90deg,#4F46E5,#0EA5E9);
//         }

//         /* Active card highlight */
//         .asl-swiper .swiper-slide-active .asl-card {
//           border-color: rgba(99,102,241,0.45) !important;
//           box-shadow: 0 12px 40px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.08) !important;
//         }
//         .asl-swiper .swiper-slide-active .asl-top-bar { width: 100% !important; }
//         .asl-swiper .swiper-slide-active .asl-tag { opacity:1 !important; }

//         /* Card hover */
//         .asl-card {
//           transition: transform 0.38s cubic-bezier(0.16,1,0.3,1), box-shadow 0.38s ease, border-color 0.38s ease;
//         }
//         .asl-card:hover {
//           transform: translateY(-8px) !important;
//           border-color: rgba(99,102,241,0.45) !important;
//           box-shadow: 0 20px 56px rgba(99,102,241,0.16), 0 4px 16px rgba(99,102,241,0.08) !important;
//         }
//         .asl-card:hover .asl-top-bar { width: 100%; }
//         .asl-card:hover .asl-tag { opacity: 1; }
//         .asl-card:hover .asl-hover-glow { opacity: 1; }
//         .asl-card:active { transform: translateY(-3px) scale(0.99) !important; }

//         .asl-hover-glow {
//           opacity: 0; transition: opacity 0.4s ease;
//         }
//       `}</style>

//       {/* Grid bg */}
//       <div style={{
//         position: "absolute", inset: 0, pointerEvents: "none",
//         backgroundImage: "linear-gradient(rgba(99,102,241,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.055) 1px,transparent 1px)",
//         backgroundSize: "44px 44px",
//       }} />

//       {/* Blobs */}
//       <div style={{ position: "absolute", top: -120, left: -80, width: 480, height: 480, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(129,140,248,0.12) 0%,transparent 70%)" }} />
//       <div style={{ position: "absolute", bottom: -80, right: -60, width: 380, height: 380, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)" }} />
//       <div style={{ position: "absolute", top: "45%", right: "12%", width: 260, height: 260, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)" }} />

//       {/* Vertical lines */}
//       <div style={{ position: "absolute", left: "4%", top: "10%", bottom: "10%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.2),transparent)" }} />
//       <div style={{ position: "absolute", right: "4%", top: "20%", bottom: "20%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.15),transparent)" }} />

//       {/* ── Header ── */}
//       <div className="asl-section-in" style={{ textAlign: "center", padding: "0 24px", marginBottom: 60, position: "relative", zIndex: 1 }}>

//         {/* Eyebrow pill */}
//         <div style={{
//           display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
//           background: "rgba(99,102,241,0.08)",
//           border: "1px solid rgba(99,102,241,0.22)",
//           borderRadius: 100, padding: "7px 20px",
//         }}>
//           <span className="asl-dot1" style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366F1", display: "inline-block" }} />
//           <span style={{ fontSize: 9.5, letterSpacing: "0.34em", color: "#6366F1", fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: "uppercase" }}>
//             THE D DOLLY LAMB EXPERIENCE
//           </span>
//           <span className="asl-dot2" style={{ width: 6, height: 6, borderRadius: "50%", background: "#0EA5E9", display: "inline-block" }} />
//         </div>

//         {/* Heading */}
//         <h2 style={{
//           fontFamily: "'Cormorant Garamond',Georgia,serif",
//           fontSize: "clamp(2.2rem,5vw,4rem)",
//           fontWeight: 300, lineHeight: 1.1,
//           letterSpacing: "0.03em", marginBottom: 18, color: "#1E1B4B",
//         }}>
//           <span className="asl-gradient-title">Crafted With</span>{" "}
//           <em style={{ fontStyle: "italic", fontWeight: 300, color: "#1E1B4B" }}>Purpose</em>
//         </h2>

//         <p style={{
//           maxWidth: 460, margin: "0 auto 28px",
//           fontSize: 15, fontStyle: "italic", lineHeight: 1.85,
//           color: "#6B7280",
//           fontFamily: "'Cormorant Garamond',Georgia,serif",
//           letterSpacing: "0.02em",
//         }}>
//           Six pillars that define every piece we make — from the first cut of hide to the last stitch of lining.
//         </p>

//         {/* Divider */}
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

//       {/* ── Swiper ── */}
//       <div style={{ padding: "0 16px", position: "relative", zIndex: 1 }}>
//         <Swiper
//           ref={swiperRef}
//           effect="coverflow"
//           grabCursor centeredSlides loop
//           autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
//           coverflowEffect={{ rotate: 14, stretch: 0, depth: 160, modifier: 1.2, slideShadows: false }}
//           breakpoints={{
//             0: { slidesPerView: 1.1, spaceBetween: 16 },
//             640: { slidesPerView: 1.5, spaceBetween: 20 },
//             768: { slidesPerView: 2.2, spaceBetween: 24 },
//             1024: { slidesPerView: 3, spaceBetween: 28 },
//             1280: { slidesPerView: 3.2, spaceBetween: 32 },
//           }}
//           pagination={{ clickable: true }}
//           modules={[EffectCoverflow, Pagination, Autoplay]}
//           className="asl-swiper"
//           onSlideChange={(s) => setActiveIndex(s.realIndex)}
//         >
//           {slides.map((item, i) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 className="asl-card"
//                 style={{
//                   background: "#FFFFFF",
//                   border: "1.5px solid rgba(99,102,241,0.13)",
//                   borderRadius: 14,
//                   boxShadow: "0 4px 20px rgba(99,102,241,0.06), 0 1px 4px rgba(0,0,0,0.04)",
//                   overflow: "hidden",
//                   position: "relative",
//                   cursor: "pointer",
//                   margin: "6px 2px",
//                 }}
//               >
//                 {/* Animated top bar */}
//                 <div className="asl-top-bar" style={{
//                   position: "absolute", top: 0, left: 0, height: 2, width: 0, zIndex: 10,
//                   background: "linear-gradient(90deg,#4F46E5,#818CF8,#0EA5E9)",
//                   transition: "width 0.45s ease",
//                 }} />

//                 {/* Hover glow */}
//                 <div className="asl-hover-glow" style={{
//                   position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
//                   background: "radial-gradient(ellipse at 20% 0%,rgba(99,102,241,0.05),transparent 60%)",
//                 }} />

//                 {/* Rotating ring */}
//                 <div className="asl-rotate" style={{
//                   position: "absolute", top: 18, right: 18,
//                   width: 52, height: 52, borderRadius: "50%",
//                   border: "1px dashed rgba(99,102,241,0.18)",
//                   pointerEvents: "none",
//                 }} />

//                 {/* Corner accents */}
//                 <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderTop: "1.5px solid rgba(99,102,241,0.28)", borderRight: "1.5px solid rgba(99,102,241,0.28)", borderRadius: "0 4px 0 0" }} />
//                 <div style={{ position: "absolute", bottom: 12, left: 12, width: 16, height: 16, borderBottom: "1.5px solid rgba(99,102,241,0.28)", borderLeft: "1.5px solid rgba(99,102,241,0.28)", borderRadius: "0 0 0 4px" }} />

//                 {/* Card content */}
//                 <div style={{ padding: "32px 28px 28px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 12, minHeight: 300 }}>

//                   {/* Tag */}
//                   <div className="asl-tag" style={{
//                     display: "inline-flex", alignItems: "center", gap: 7,
//                     width: "fit-content", marginBottom: 4,
//                     background: "rgba(99,102,241,0.07)",
//                     border: "1px solid rgba(99,102,241,0.22)",
//                     borderRadius: 3, padding: "4px 10px",
//                     opacity: 0.65, transition: "opacity 0.3s",
//                   }}>
//                     <span style={{ width: 5, height: 5, borderRadius: 1, background: "linear-gradient(135deg,#6366F1,#0EA5E9)", transform: "rotate(45deg)", display: "inline-block" }} />
//                     <span style={{ fontSize: 8.5, letterSpacing: "0.3em", color: "#4F46E5", fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: "uppercase" }}>
//                       {item.tag}
//                     </span>
//                   </div>

//                   {/* Icon */}
//                   <div>{icons[item.iconKey]}</div>

//                   {/* Eyebrow */}
//                   <p style={{ fontSize: 9, letterSpacing: "0.32em", fontWeight: 600, color: "#6366F1", fontFamily: "'Jost',sans-serif", textTransform: "uppercase", margin: 0 }}>
//                     {item.eyebrow}
//                   </p>

//                   {/* Title */}
//                   <h3 style={{
//                     fontFamily: "'Cormorant Garamond',Georgia,serif",
//                     fontSize: "clamp(1.25rem,2.5vw,1.65rem)",
//                     fontWeight: 400, color: "#1E1B4B",
//                     letterSpacing: "0.01em", lineHeight: 1.2, margin: 0,
//                   }}>
//                     {item.title}
//                   </h3>

//                   {/* Divider */}
//                   <div style={{ width: 32, height: 1.5, background: "linear-gradient(90deg,#6366F1,#0EA5E9)", borderRadius: 1 }} />

//                   {/* Body — FULLY READABLE */}
//                   <p style={{
//                     fontSize: 13.5, lineHeight: 1.8,
//                     color: "#4B5563",
//                     fontFamily: "'Jost',sans-serif",
//                     fontWeight: 300,
//                     margin: 0, flex: 1,
//                   }}>
//                     {item.body}
//                   </p>

//                   {/* Arrow CTA */}
//                   <div style={{
//                     marginTop: "auto",
//                     width: 34, height: 34, borderRadius: "50%",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     border: "1.5px solid rgba(99,102,241,0.28)",
//                     color: "#6366F1", fontSize: 14,
//                     transition: "all 0.3s ease",
//                   }}
//                     onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(135deg,#4F46E5,#0EA5E9)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "transparent"; }}
//                     onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6366F1"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.28)"; }}
//                   >
//                     →
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Slide counter */}
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 4, position: "relative", zIndex: 1 }}>
//         <span style={{ fontSize: 12, letterSpacing: "0.24em", color: "#6366F1", fontFamily: "'Jost',sans-serif", fontWeight: 500 }}>
//           {String(activeIndex + 1).padStart(2, "0")}
//         </span>
//         <div style={{ width: 40, height: 1.5, background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", borderRadius: 1, opacity: 0.5 }} />
//         <span style={{ fontSize: 12, letterSpacing: "0.24em", color: "#9CA3AF", fontFamily: "'Jost',sans-serif" }}>
//           {String(slides.length).padStart(2, "0")}
//         </span>
//       </div>
//     </section>
//   );
// };

// export default ActiveSlider;






import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

/*
  ═══════════════════════════════════════════════
  ACTIVE SLIDER — LIGHT MODE
  section bg:   #F0F2FF → #EEF0FF → #F8F9FF
  card bg:      #FFFFFF
  card border:  rgba(99,102,241,0.15)
  heading:      #1E1B4B  deep navy
  subtext:      #4B5563  readable dark grey
  muted:        #6B7280
  eyebrow:      #4F46E5  indigo
  accent:       #6366F1
  accent-lt:    #818CF8
  sky:          #0EA5E9
  tag bg:       rgba(99,102,241,0.08)
  tag text:     #4F46E5
  ═══════════════════════════════════════════════
*/

const icons = {
  craft: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
      <path d="M10 22l4-8 4 4 4-8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="10" r="2" fill="#818CF8" />
    </svg>
  ),
  quality: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
      <path d="M16 8l2.2 4.5 5 .7-3.6 3.5.85 4.95L16 19.4l-4.45 2.35.85-4.95L8.8 13.2l5-.7z"
        stroke="#6366F1" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(99,102,241,0.12)" />
    </svg>
  ),
  heritage: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
      <rect x="10" y="13" width="12" height="9" rx="1.5" stroke="#6366F1" strokeWidth="1.2" />
      <path d="M13 13v-2a3 3 0 0 1 6 0v2" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="17.5" r="1.3" fill="#6366F1" />
    </svg>
  ),
  bespoke: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
      <path d="M11 21l2-2m0 0l6-6m-6 6l-1-3 3-1m4-2l1-3-3 1"
        stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="21" cy="11" r="1.5" fill="#818CF8" />
    </svg>
  ),
  global: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
      <ellipse cx="16" cy="16" rx="6" ry="13" stroke="#6366F1" strokeWidth="1.1" />
      <path d="M3 16h26M6 10h20M6 22h20" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  care: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="1" fill="rgba(99,102,241,0.06)" />
      <path d="M16 22s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 23 13c0 4.5-7 9-7 9z"
        stroke="#6366F1" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(99,102,241,0.1)" />
    </svg>
  ),
};

const slides = [
  { id: 1, iconKey: "craft", eyebrow: "THE ATELIER", title: "Artisan Craftsmanship", body: "Every stitch is placed by hand. Our master craftsmen bring decades of expertise to each piece — turning raw lambskin into wearable art.", tag: "EST. 2001" },
  { id: 2, iconKey: "quality", eyebrow: "MATERIALS", title: "Grade A Lambskin Only", body: "We source exclusively from the world's finest tanneries. Soft from day one, each hide is hand-selected for grain, drape, and lasting durability.", tag: "PREMIUM HIDE" },
  { id: 3, iconKey: "heritage", eyebrow: "OUR LEGACY", title: "Two Decades of Heritage", body: "Over 20 years of refining the craft. Our heritage is stitched into every seam — a tradition of excellence that outlasts every passing trend.", tag: "20+ YEARS" },
  { id: 4, iconKey: "bespoke", eyebrow: "CUSTOM ORDERS", title: "Bespoke Tailoring", body: "Your measurements, your materials, your vision. Our atelier takes full bespoke commissions — crafted solely for you, delivered in 4–6 weeks.", tag: "MADE FOR YOU" },
  { id: 5, iconKey: "global", eyebrow: "WORLDWIDE", title: "Global Reach, Local Soul", body: "Worn in over 45 countries — yet every jacket carries the soul of a small atelier. Global reach without losing the intimate touch of handcraft.", tag: "45+ COUNTRIES" },
  { id: 6, iconKey: "care", eyebrow: "AFTERCARE", title: "Lifetime Leather Care", body: "Our relationship doesn't end at delivery. Every D Dolly Lamb client receives a personalised care guide and lifetime conditioning support.", tag: "LIFETIME CARE" },
];

const ActiveSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section style={{
      position: "relative", overflow: "hidden", padding: "96px 0 80px",
      background: "linear-gradient(180deg, #EAECFF 0%, #F0F2FF 35%, #F8F9FF 70%, #FFFFFF 100%)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        @keyframes aslFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes aslRotate { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes aslPulse  { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.5;transform:scale(0.65);} }
        @keyframes aslGradientFlow {
          0%{background-position:0% 50%;} 100%{background-position:100% 50%;}
        }

        .asl-section-in { animation: aslFadeUp 0.7s ease both; }
        .asl-dot1 { animation: aslPulse 2s ease-in-out infinite; }
        .asl-dot2 { animation: aslPulse 2s ease-in-out infinite 1s; }
        .asl-rotate { animation: aslRotate 22s linear infinite; }
        .asl-gradient-title {
          background: linear-gradient(90deg, #4338CA 0%, #6366F1 30%, #7C3AED 55%, #0EA5E9 80%, #6366F1 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: aslGradientFlow 5s linear infinite;
        }

        /* Swiper */
        .asl-swiper { padding-bottom: 64px !important; }
        .asl-swiper .swiper-pagination-bullet {
          width:8px; height:8px; border-radius:4px;
          background:#C7D2FE; opacity:1;
          transition:all 0.3s ease;
        }
        .asl-swiper .swiper-pagination-bullet-active {
          width:32px; height:8px; border-radius:4px;
          background:linear-gradient(90deg,#4F46E5,#0EA5E9);
        }

        /* Active card highlight */
        .asl-swiper .swiper-slide-active .asl-card {
          border-color: rgba(99,102,241,0.45) !important;
          box-shadow: 0 12px 40px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.08) !important;
        }
        .asl-swiper .swiper-slide-active .asl-top-bar { width: 100% !important; }
        .asl-swiper .swiper-slide-active .asl-tag { opacity:1 !important; }

        /* Card hover */
        .asl-card {
          transition: transform 0.38s cubic-bezier(0.16,1,0.3,1), box-shadow 0.38s ease, border-color 0.38s ease;
        }
        .asl-card:hover {
          transform: translateY(-8px) !important;
          border-color: rgba(99,102,241,0.45) !important;
          box-shadow: 0 20px 56px rgba(99,102,241,0.16), 0 4px 16px rgba(99,102,241,0.08) !important;
        }
        .asl-card:hover .asl-top-bar { width: 100%; }
        .asl-card:hover .asl-tag { opacity: 1; }
        .asl-card:hover .asl-hover-glow { opacity: 1; }
        .asl-card:active { transform: translateY(-3px) scale(0.99) !important; }

        .asl-hover-glow {
          opacity: 0; transition: opacity 0.4s ease;
        }
      `}</style>

      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(99,102,241,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.055) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
      }} />

      {/* Blobs */}
      <div style={{ position: "absolute", top: -120, left: -80, width: 480, height: 480, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(129,140,248,0.12) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: -80, right: -60, width: 380, height: 380, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", top: "45%", right: "12%", width: 260, height: 260, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)" }} />

      {/* Vertical lines */}
      <div style={{ position: "absolute", left: "4%", top: "10%", bottom: "10%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.2),transparent)" }} />
      <div style={{ position: "absolute", right: "4%", top: "20%", bottom: "20%", width: 1, pointerEvents: "none", background: "linear-gradient(to bottom,transparent,rgba(99,102,241,0.15),transparent)" }} />

      {/* ── Header ── */}
      <div className="asl-section-in" style={{ textAlign: "center", padding: "0 24px", marginBottom: 60, position: "relative", zIndex: 1 }}>

        {/* Eyebrow pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.22)",
          borderRadius: 100, padding: "7px 20px",
        }}>
          <span className="asl-dot1" style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366F1", display: "inline-block" }} />
          <span style={{ fontSize: 9.5, letterSpacing: "0.34em", color: "#6366F1", fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: "uppercase" }}>
            THE D DOLLY LAMB EXPERIENCE
          </span>
          <span className="asl-dot2" style={{ width: 6, height: 6, borderRadius: "50%", background: "#0EA5E9", display: "inline-block" }} />
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          fontSize: "clamp(2.2rem,5vw,4rem)",
          fontWeight: 300, lineHeight: 1.1,
          letterSpacing: "0.03em", marginBottom: 18, color: "#1E1B4B",
        }}>
          <span className="asl-gradient-title">Crafted With</span>{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "#1E1B4B" }}>Purpose</em>
        </h2>

        <p style={{
          maxWidth: 460, margin: "0 auto 28px",
          fontSize: 15, fontStyle: "italic", lineHeight: 1.85,
          color: "#6B7280",
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          letterSpacing: "0.02em",
        }}>
          Six pillars that define every piece we make — from the first cut of hide to the last stitch of lining.
        </p>

        {/* Divider */}
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

      {/* ── Swiper ── */}
      <div style={{ padding: "0 16px", position: "relative", zIndex: 1 }}>
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor centeredSlides loop
          autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          coverflowEffect={{ rotate: 14, stretch: 0, depth: 160, modifier: 1.2, slideShadows: false }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
            1280: { slidesPerView: 3.2, spaceBetween: 32 },
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="asl-swiper"
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
        >
          {slides.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div
                className="asl-card"
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(99,102,241,0.13)",
                  borderRadius: 14,
                  boxShadow: "0 4px 20px rgba(99,102,241,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  margin: "6px 2px",
                }}
              >
                {/* Animated top bar */}
                <div className="asl-top-bar" style={{
                  position: "absolute", top: 0, left: 0, height: 2, width: 0, zIndex: 10,
                  background: "linear-gradient(90deg,#4F46E5,#818CF8,#0EA5E9)",
                  transition: "width 0.45s ease",
                }} />

                {/* Hover glow */}
                <div className="asl-hover-glow" style={{
                  position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                  background: "radial-gradient(ellipse at 20% 0%,rgba(99,102,241,0.05),transparent 60%)",
                }} />

                {/* Corner accents */}
                <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderTop: "1.5px solid rgba(99,102,241,0.28)", borderRight: "1.5px solid rgba(99,102,241,0.28)", borderRadius: "0 4px 0 0" }} />
                <div style={{ position: "absolute", bottom: 12, left: 12, width: 16, height: 16, borderBottom: "1.5px solid rgba(99,102,241,0.28)", borderLeft: "1.5px solid rgba(99,102,241,0.28)", borderRadius: "0 0 0 4px" }} />

                {/* Card content */}
                <div style={{ padding: "32px 28px 28px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 12, minHeight: 300 }}>

                  {/* Tag */}
                  <div className="asl-tag" style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    width: "fit-content", marginBottom: 4,
                    background: "rgba(99,102,241,0.07)",
                    border: "1px solid rgba(99,102,241,0.22)",
                    borderRadius: 3, padding: "4px 10px",
                    opacity: 0.65, transition: "opacity 0.3s",
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: 1, background: "linear-gradient(135deg,#6366F1,#0EA5E9)", transform: "rotate(45deg)", display: "inline-block" }} />
                    <span style={{ fontSize: 8.5, letterSpacing: "0.3em", color: "#4F46E5", fontFamily: "'Jost',sans-serif", fontWeight: 500, textTransform: "uppercase" }}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div>{icons[item.iconKey]}</div>

                  {/* Eyebrow */}
                  <p style={{ fontSize: 9, letterSpacing: "0.32em", fontWeight: 600, color: "#6366F1", fontFamily: "'Jost',sans-serif", textTransform: "uppercase", margin: 0 }}>
                    {item.eyebrow}
                  </p>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: "clamp(1.25rem,2.5vw,1.65rem)",
                    fontWeight: 600, color: "#1E1B4B",
                    letterSpacing: "0.01em", lineHeight: 1.2, margin: 0,
                  }}>
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div style={{ width: 32, height: 1.5, background: "linear-gradient(90deg,#6366F1,#0EA5E9)", borderRadius: 1 }} />

                  {/* Body — BOLD & READABLE */}
                  <p style={{
                    fontSize: 13.5, lineHeight: 1.8,
                    color: "#374151",
                    fontFamily: "'Jost',sans-serif",
                    fontWeight: 400,
                    margin: 0, flex: 1,
                  }}>
                    {item.body}
                  </p>

                  {/* Arrow CTA */}
                  <div style={{
                    marginTop: "auto",
                    width: 34, height: 34, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1.5px solid rgba(99,102,241,0.28)",
                    color: "#6366F1", fontSize: 14,
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(135deg,#4F46E5,#0EA5E9)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "transparent"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6366F1"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.28)"; }}
                  >
                    →
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slide counter */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 8, position: "relative", zIndex: 1 }}>
        <span style={{ fontSize: 14, letterSpacing: "0.24em", color: "#4F46E5", fontFamily: "'Jost',sans-serif", fontWeight: 600 }}>
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <div style={{ width: 44, height: 2, background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", borderRadius: 1 }} />
        <span style={{ fontSize: 14, letterSpacing: "0.24em", color: "#9CA3AF", fontFamily: "'Jost',sans-serif", fontWeight: 500 }}>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default ActiveSlider;