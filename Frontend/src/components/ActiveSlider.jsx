// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";

// import { FreeMode, Pagination } from "swiper/modules";

// import { RxArrowTopRight } from "react-icons/rx";
// import { ServiceData } from "../constants";

// const ActiveSlider = () => {
//   return (
//     <div className="flex items-center justify-center flex-col min-h-screen py-10 bg-[#6c34af]">
//   <Swiper
//     breakpoints={{
//       0: { slidesPerView: 1, spaceBetween: 10 },    // phones
//       640: { slidesPerView: 1.2, spaceBetween: 10 }, // small tablets
//       768: { slidesPerView: 2, spaceBetween: 15 },   // tablets
//       1024: { slidesPerView: 3, spaceBetween: 20 },  // desktops
//     }}
//     freeMode={true}
//     pagination={{ clickable: true }}
//     modules={[FreeMode, Pagination]}
//     className="w-full max-w-[95%] md:max-w-[85%] lg:max-w-[80%]"
//   >
//     {ServiceData.map((item) => (
//       <SwiperSlide key={item.title}>
//         <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">

//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${item.backgroundImage})` }}
//           />

//           {/* Black Overlay */}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />

//           {/* Content */}
//           <div className="relative p-6 sm:p-8 flex flex-col gap-3 h-[220px] sm:h-[260px] md:h-[280px] text-white">
//             <item.icon className="w-8 h-8 text-blue-300 group-hover:text-blue-500 transition-all" />
//             <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
//               {item.title}
//             </h1>
//             <p className="text-sm sm:text-base md:text-lg opacity-90">
//               {item.content}
//             </p>
//           </div>

//           {/* Icon bottom-left */}
//           <RxArrowTopRight
//             className="absolute bottom-5 left-5 w-8 h-8 text-white group-hover:text-blue-500 group-hover:rotate-45 transition-all duration-200"
//           />
//         </div>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>

//   );
// };

// export default ActiveSlider;


import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
/* ── Premium SVG Icons (no external deps) ── */
const icons = {
  craft: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
      <path d="M10 22l4-8 4 4 4-8" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="10" r="2" fill="#f7c568" opacity="0.7" />
    </svg>
  ),
  quality: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
      <path d="M16 8l2.2 4.5 5 .7-3.6 3.5.85 4.95L16 19.4l-4.45 2.35.85-4.95L8.8 13.2l5-.7z" stroke="#c8973a" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(200,151,58,0.15)" />
    </svg>
  ),
  heritage: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
      <rect x="10" y="13" width="12" height="9" rx="1" stroke="#c8973a" strokeWidth="1.2" />
      <path d="M13 13v-2a3 3 0 0 1 6 0v2" stroke="#f7c568" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="17.5" r="1.2" fill="#c8973a" />
    </svg>
  ),
  bespoke: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
      <path d="M11 21l2-2m0 0l6-6m-6 6l-1-3 3-1m4-2l1-3-3 1" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="21" cy="11" r="1.5" fill="#f7c568" opacity="0.8" />
    </svg>
  ),
  global: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
      <ellipse cx="16" cy="16" rx="6" ry="14" stroke="#c8973a" strokeWidth="1.1" />
      <path d="M2 16h28M5 10h22M5 22h22" stroke="#c8973a" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  care: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#f7c568" strokeWidth="1.2" />
      <path d="M16 22s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 23 13c0 4.5-7 9-7 9z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(200,151,58,0.12)" />
    </svg>
  ),
};

/* ── Slide data (falls back to ServiceData if provided) ── */
const defaultSlides = [
  {
    id: 1,
    iconKey: "craft",
    eyebrow: "THE ATELIER",
    title: "Artisan Craftsmanship",
    body: "Every stitch is placed by hand. Our master craftsmen bring decades of expertise to each piece — turning raw lambskin into wearable art.",
    tag: "EST. 2001",
    accent: "rgba(200,151,58,0.08)",
  },
  {
    id: 2,
    iconKey: "quality",
    eyebrow: "MATERIALS",
    title: "Grade A Lambskin Only",
    body: "We source exclusively from the world's finest tanneries. Soft from day one, each hide is hand-selected for grain, drape, and lasting durability.",
    tag: "PREMIUM HIDE",
    accent: "rgba(139,69,19,0.1)",
  },
  {
    id: 3,
    iconKey: "heritage",
    eyebrow: "OUR LEGACY",
    title: "Two Decades of Heritage",
    body: "Over 20 years of refining the craft. Our heritage is stitched into every seam — a tradition of excellence that outlasts every passing trend.",
    tag: "20+ YEARS",
    accent: "rgba(200,151,58,0.07)",
  },
  {
    id: 4,
    iconKey: "bespoke",
    eyebrow: "CUSTOM ORDERS",
    title: "Bespoke Tailoring",
    body: "Your measurements, your materials, your vision. Our atelier takes full bespoke commissions — crafted solely for you, delivered in 4–6 weeks.",
    tag: "MADE FOR YOU",
    accent: "rgba(139,69,19,0.09)",
  },
  {
    id: 5,
    iconKey: "global",
    eyebrow: "WORLDWIDE",
    title: "Global Reach, Local Soul",
    body: "Worn in over 45 countries — yet every jacket carries the soul of a small atelier. Global reach without losing the intimate touch of handcraft.",
    tag: "45+ COUNTRIES",
    accent: "rgba(200,151,58,0.08)",
  },
  {
    id: 6,
    iconKey: "care",
    eyebrow: "AFTERCARE",
    title: "Lifetime Leather Care",
    body: "Our relationship doesn't end at delivery. Every D Dolly Lamb client receives a personalised care guide and lifetime conditioning support.",
    tag: "LIFETIME CARE",
    accent: "rgba(139,69,19,0.08)",
  },
];

const ActiveSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  /* Use built-in slide data */
  const slides = defaultSlides;

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d0703 0%, #1a0f0a 50%, #0d0703 100%)",
        padding: "90px 0 100px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,151,58,0); }
          50%       { box-shadow: 0 0 24px 4px rgba(200,151,58,0.2); }
        }
        @keyframes rotateDiamond {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .asl-section { animation: floatUp 0.8s ease both; }

        .asl-swiper {
          padding-bottom: 60px !important;
          perspective: 1200px;
        }

        /* 3D coverflow depth enhancement */
        .swiper-slide { transition: transform 0.5s ease, opacity 0.5s ease !important; }
        .swiper-slide-active .asl-card { border-color: rgba(200,151,58,0.6) !important; }
        .swiper-slide-active .asl-card-inner { background: linear-gradient(145deg, #2a1610, #1e110a) !important; }
        .swiper-slide-active .asl-tag { opacity: 1 !important; }

        /* Pagination dots */
        .asl-swiper .swiper-pagination-bullet {
          width: 6px; height: 6px;
          background: rgba(200,151,58,0.3);
          opacity: 1; border-radius: 3px;
          transition: all 0.3s;
        }
        .asl-swiper .swiper-pagination-bullet-active {
          width: 24px;
          background: linear-gradient(to right, #c8973a, #f7c568);
          border-radius: 3px;
        }

        .asl-card {
          border: 1px solid rgba(200,151,58,0.15);
          border-radius: 6px;
          overflow: hidden;
          transition: border-color 0.4s, transform 0.4s;
          position: relative;
          cursor: pointer;
        }
        .asl-card:hover {
          border-color: rgba(200,151,58,0.5);
          transform: translateY(-6px);
        }
        .asl-card:hover .asl-arrow { transform: translateX(5px) rotate(-45deg); opacity: 1; }
        .asl-card:hover .asl-gold-bar { width: 100%; }
        .asl-card:hover .asl-overlay { opacity: 1; }

        .asl-card-inner {
          background: linear-gradient(145deg, #1e110a, #160c06);
          padding: 36px 28px 32px;
          position: relative;
          min-height: 320px;
          display: flex; flex-direction: column; gap: 14px;
        }

        /* Top gold bar that expands on hover */
        .asl-gold-bar {
          position: absolute; top: 0; left: 0; height: 2px; width: 0;
          background: linear-gradient(to right, #c8973a, #f7c568);
          transition: width 0.4s ease;
        }

        /* Subtle glow overlay on hover */
        .asl-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 30%, rgba(200,151,58,0.06), transparent 70%);
          opacity: 0; pointer-events: none;
          transition: opacity 0.4s;
        }

        .asl-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 3px 10px;
          border: 1px solid rgba(200,151,58,0.3);
          border-radius: 2px;
          font-size: 9px; letter-spacing: 0.28em;
          color: #c8973a;
          font-family: Georgia, serif;
          opacity: 0.6;
          transition: opacity 0.3s;
          width: fit-content;
          margin-bottom: 4px;
        }

        .asl-arrow {
          width: 32px; height: 32px;
          border: 1px solid rgba(200,151,58,0.25);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #c8973a; font-size: 14px;
          opacity: 0.5;
          transition: transform 0.3s, opacity 0.3s;
          margin-top: auto;
        }

        /* Decorative rotating ring behind icon */
        .asl-icon-ring {
          position: absolute; top: 24px; right: 24px;
          width: 56px; height: 56px;
          border: 1px dashed rgba(200,151,58,0.15);
          border-radius: 50%;
          animation: rotateDiamond 20s linear infinite;
        }
      `}</style>

      {/* ── BACKGROUND DECORATIVE ELEMENTS ── */}
      <div style={{
        position: "absolute", top: "10%", left: "-5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,151,58,0.04), transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-5%",
        width: "250px", height: "250px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,69,19,0.06), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── SECTION HEADER ── */}
      <div className="text-center px-6 mb-14" style={{ animation: "floatUp 0.7s ease both" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-10 h-px" style={{ background: "linear-gradient(to right, transparent, #c8973a)" }} />
          <span className="text-xs tracking-widest" style={{ color: "#c8973a", fontFamily: "Georgia, serif", letterSpacing: "0.38em" }}>
            THE D DOLLY LAMB EXPERIENCE
          </span>
          <span className="block w-10 h-px" style={{ background: "linear-gradient(to left, transparent, #c8973a)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          fontWeight: 300,
          color: "#f7c568",
          letterSpacing: "0.04em",
          lineHeight: 1.15,
          margin: "0 0 16px",
        }}>
          Crafted With{" "}
          <span style={{ color: "#f5ede0", fontStyle: "italic" }}>Purpose</span>
        </h2>

        <p style={{
          maxWidth: "480px", margin: "0 auto",
          fontSize: "14px", color: "#7a6050",
          fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.8,
        }}>
          Six pillars that define every piece we make — from the first cut of hide to the last stitch of lining.
        </p>

        <div className="flex items-center justify-center gap-3 mt-5">
          <span className="block h-0.5 w-12" style={{ background: "linear-gradient(to right, #c8973a, #f7c568)" }} />
          <span className="block w-1.5 h-1.5 rotate-45" style={{ background: "#c8973a" }} />
          <span className="block h-0.5 w-6" style={{ background: "rgba(200,151,58,0.3)" }} />
        </div>
      </div>

      {/* ── 3D COVERFLOW SWIPER ── */}
      <div className="px-4 sm:px-6">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: 180,
            modifier: 1.2,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.4, spaceBetween: 20 },
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
            <SwiperSlide key={item.id || i}>
              <div className="asl-card">
                <div className="asl-card-inner">
                  {/* Animated top bar */}
                  <div className="asl-gold-bar" />

                  {/* Glow overlay */}
                  <div className="asl-overlay" />

                  {/* Rotating decorative ring */}
                  <div className="asl-icon-ring" />

                  {/* Tag */}
                  <div className="asl-tag">
                    <span style={{ width: "4px", height: "4px", background: "#c8973a", borderRadius: "50%", display: "inline-block" }} />
                    {item.tag || `0${i + 1}`}
                  </div>

                  {/* Icon */}
                  <div style={{ marginBottom: "4px" }}>
                    {icons[item.iconKey] || icons.craft}
                  </div>

                  {/* Eyebrow */}
                  <p style={{
                    fontSize: "9px", letterSpacing: "0.3em",
                    color: "#c8973a", fontFamily: "Georgia, serif", fontWeight: 600,
                  }}>
                    {item.eyebrow || "FEATURE"}
                  </p>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    fontWeight: 400,
                    color: "#f7c568",
                    lineHeight: 1.25,
                    letterSpacing: "0.02em",
                    margin: 0,
                  }}>
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div style={{ width: "32px", height: "1px", background: "rgba(200,151,58,0.3)" }} />

                  {/* Body */}
                  <p style={{
                    fontSize: "13px", color: "#7a6050",
                    fontFamily: "Georgia, serif", fontStyle: "italic",
                    lineHeight: 1.8, flex: 1,
                  }}>
                    {item.body || item.content}
                  </p>

                  {/* Arrow CTA */}
                  <div className="asl-arrow">→</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── BOTTOM COUNTER ── */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#c8973a", fontFamily: "Georgia, serif" }}>
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span style={{ width: "40px", height: "1px", background: "rgba(200,151,58,0.25)" }} />
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#5a4030", fontFamily: "Georgia, serif" }}>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default ActiveSlider;