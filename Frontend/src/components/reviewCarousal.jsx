// import { assets } from "../assets/assets";

// const TeamCarousel = () => {
//   // Your card data with heading, description, image, buttonText
//   const cards = [
//     {
//       id: 1,
//       heading: "Premium Lambskin Pillows",
//       description: "Soft, durable, and handcrafted for luxury comfort.",
//       image: assets.Pillows,
//       buttonText: "Shop Now"
//     },
//     {
//       id: 2,
//       heading: "New Leather Collection",
//       description: "Explore stylish, long-lasting leather home essentials.",
//       image: assets.Trust1,
//       buttonText: "View Collection"
//     },
//     {
//       id: 3,
//       heading: "Handcrafted Leather Jackets",
//       description: "Unique designs made from 100% authentic lambskin.",
//       image: assets.Trust3,
//       buttonText: "Shop Now"
//     },
//     {
//       id: 4,
//       heading: "Luxury Home Decor",
//       description: "Upgrade your space with premium handmade products.",
//       image: assets.Accessories,
//       buttonText: "View Collection"
//     }
//   ];

//   const loopCards = [...cards, ...cards];

//   return (
//     <div className="w-full h-[60vh] overflow-hidden p-10 bg-[#674c47]">
//       <div
//         className="flex gap-6 animate-scroll whitespace-nowrap h-full"
//         style={{ width: "max-content" }}
//       >
//         {loopCards.map((card, index) => (
//           <div
//             key={card.id + "-" + index}
//             className="
//               min-w-[400px]
//               h-full
//               bg-white
//               rounded-2xl
//               shadow-xl
//               overflow-hidden
//               flex flex-col
//               hover:scale-[1.02]
//               transition-transform
//               duration-300
//             "
//           >
//             {/* Image */}
//             <div className="h-1/2 w-full overflow-hidden">
//               <img
//                 src={card.image}
//                 alt={card.heading}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-5 flex flex-col justify-between h-1/2">
//               <div>
//                 <h2 className="text-xl font-bold text-black mb-2">
//                   {card.heading}
//                 </h2>
//                 <p className="text-sm text-gray-600 mb-5 leading-relaxed">
//                   {card.description}
//                 </p>
//               </div>

//               <button className="bg-[#f7c568] text-black px-5 py-2 rounded-full hover:bg-[#800000] transition">
//                 {card.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamCarousel;




// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const TeamCarousel = () => {
//   const cards = [
//     {
//       id: 1,
//       heading: "Premium Lambskin Pillows",
//       description: "Soft, durable, and handcrafted for luxury comfort.",
//       image: assets.Pillows,
//       buttonText: "Shop Now",
//     },
//     {
//       id: 2,
//       heading: "New Leather Collection",
//       description: "Explore stylish, long-lasting leather home essentials.",
//       image: assets.Trust1,
//       buttonText: "View Collection",
//     },
//     {
//       id: 3,
//       heading: "Handcrafted Leather Jackets",
//       description: "Unique designs made from 100% authentic lambskin.",
//       image: assets.Trust3,
//       buttonText: "Shop Now",
//     },
//     {
//       id: 4,
//       heading: "Luxury Home Decor",
//       description: "Upgrade your space with premium handmade products.",
//       image: assets.Accessories,
//       buttonText: "View Collection",
//     },
//   ];

//   const loopCards = [...cards, ...cards];

//   return (
//     <div className="w-full overflow-hidden bg-[#674c47] py-10">
//       <div className="relative overflow-hidden">
//         <div className="flex gap-6 animate-scroll will-change-transform w-max">
//           {loopCards.map((card, index) => (
//             <div
//               key={card.id + "-" + index}
//               className="
//                 min-w-[360px]
//                 bg-white
//                 rounded-2xl
//                 shadow-xl
//                 overflow-hidden
//                 flex flex-col
//                 transition-transform
//                 duration-300
//                 hover:scale-[1.02]
//               "
//             >
//               {/* IMAGE (FIXED HEIGHT) */}
//               <div className="h-[220px] w-full overflow-hidden">
//                 <img
//                   src={card.image}
//                   alt={card.heading}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5 flex flex-col gap-3">
//                 <h2 className="text-lg font-bold text-black">
//                   {card.heading}
//                 </h2>

//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {card.description}
//                 </p>

//                 <Link to='/collection' className="text-center">
//                   <button className="mt-auto bg-[#f7c568] text-black px-5 py-2 w-full rounded-full hover:bg-[#800000] hover:text-white transition">
//                     {card.buttonText}
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ANIMATION */}
//       <style>
//         {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }

//           .animate-scroll {
//             animation: scroll 30s linear infinite;
//           }

//           .animate-scroll:hover {
//             animation-play-state: paused;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default TeamCarousel;




import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const TeamCarousel = () => {
  const [hoveredId, setHoveredId] = useState(null);

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
    },
  ];

  // Triple loop for seamless infinite scroll
  const loopCards = [...cards, ...cards, ...cards];

  // Premium inline SVG icons per card
  const cardIcons = [
    // Pillow / comfort
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="1">
      <rect x="3" y="7" width="18" height="10" rx="5" stroke="#c8973a" strokeWidth="1.3" />
      <path d="M3 12h18" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>,
    // New arrival / sparkle
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="2">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="#f7c568" strokeWidth="1.2" />
    </svg>,
    // Jacket / needle
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="3">
      <path d="M12 3L8 7H5l-2 5 3 1v8h12v-8l3-1-2-5h-3L12 3z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 13v5M15 13v5M12 7v3" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>,
    // Decor / diamond
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="4">
      <path d="M12 3l9 7-9 11L3 10z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(200,151,58,0.1)" />
      <path d="M3 10h18" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>,
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0d0703 0%, #1a0f0a 50%, #0d0703 100%)",
        padding: "90px 0 100px",
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid rgba(200,151,58,0.15)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes infiniteScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .tc-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: infiniteScroll 40s linear infinite;
          will-change: transform;
        }
        .tc-track:hover {
          animation-play-state: paused;
        }

        .tc-card {
          min-width: 340px;
          max-width: 340px;
          background: linear-gradient(145deg, #1e110a, #160c06);
          border: 1px solid rgba(200,151,58,0.15);
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          transition: border-color 0.4s, transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s;
          transform-style: preserve-3d;
          cursor: pointer;
          flex-shrink: 0;
        }
        .tc-card:hover {
          border-color: #c8973a;
          transform: translateY(-10px) rotateX(3deg) rotateY(-2deg) scale(1.02);
          box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,151,58,0.3), 0 8px 32px rgba(200,151,58,0.15);
        }

        .tc-card-img {
          height: 220px; width: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), filter 0.4s;
          filter: brightness(0.88) saturate(0.9);
        }
        .tc-card:hover .tc-card-img {
          transform: scale(1.08);
          filter: brightness(1) saturate(1.05);
        }

        /* Gold top bar */
        .tc-gold-bar {
          position: absolute; top: 0; left: 0; height: 2px; width: 0;
          background: linear-gradient(to right, #c8973a, #f7c568);
          transition: width 0.45s ease;
          z-index: 10;
        }
        .tc-card:hover .tc-gold-bar { width: 100%; }

        /* Image overlay on hover */
        .tc-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(13,7,3,0.85) 100%);
          z-index: 2;
        }

        /* Badge */
        .tc-badge {
          position: absolute; top: 14px; left: 14px; z-index: 5;
          font-size: 8px; letter-spacing: 0.28em; font-weight: 700;
          padding: 3px 10px;
          background: linear-gradient(135deg, #c8973a, #f7c568);
          color: #1a0f0a;
          font-family: Georgia, serif;
          border-radius: 2px;
        }

        /* Body */
        .tc-body {
          padding: 22px 24px 24px;
          display: flex; flex-direction: column; gap: 10px;
          position: relative;
        }

        /* Eyebrow */
        .tc-eyebrow {
          font-size: 9px; letter-spacing: 0.3em;
          color: #c8973a; font-family: Georgia, serif; font-weight: 600;
          display: flex; align-items: center; gap: 8px;
        }
        .tc-eyebrow::before {
          content: '';
          display: block; width: 16px; height: 1px;
          background: #c8973a; flex-shrink: 0;
        }

        /* Title */
        .tc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem; font-weight: 400;
          color: #f7c568; line-height: 1.25;
          letter-spacing: 0.02em; margin: 0;
        }

        /* Desc */
        .tc-desc {
          font-size: 12px; color: #7a6050;
          font-family: Georgia, serif; font-style: italic;
          line-height: 1.75; margin: 0;
        }

        /* Divider */
        .tc-divider {
          height: 1px; background: rgba(200,151,58,0.12);
          margin: 2px 0;
        }

        /* CTA button */
        .tc-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px 0; width: 100%;
          background: transparent;
          border: 1px solid rgba(200,151,58,0.3);
          border-radius: 2px;
          color: #f7c568; font-size: 10px;
          letter-spacing: 0.22em; font-family: Georgia, serif; font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          margin-top: 4px;
        }
        .tc-btn:hover {
          background: linear-gradient(135deg, #c8973a, #f7c568);
          color: #1a0f0a; border-color: transparent;
        }
        .tc-btn:hover .tc-btn-arrow { transform: translateX(5px); color: #1a0f0a; }
        .tc-btn-arrow { transition: transform 0.3s, color 0.3s; color: #c8973a; }

        /* Glow radial on card hover */
        .tc-glow {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background: radial-gradient(ellipse at 20% 80%, rgba(200,151,58,0.07), transparent 60%);
          opacity: 0; transition: opacity 0.4s;
        }
        .tc-card:hover .tc-glow { opacity: 1; }

        @media (max-width: 640px) {
          .tc-card { min-width: 290px; max-width: 290px; }
          .tc-card-img { height: 190px; }
        }
      `}</style>

      {/* ── DECORATIVE BG BLOBS ── */}
      <div style={{
        position: "absolute", top: "5%", left: "-8%",
        width: "320px", height: "320px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,151,58,0.04), transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "-8%",
        width: "280px", height: "280px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,69,19,0.05), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── SECTION HEADER ── */}
      <div className="text-center px-6 mb-14" style={{ animation: "floatUp 0.7s ease both" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-10 h-px" style={{ background: "linear-gradient(to right, transparent, #c8973a)" }} />
          <span className="text-xs tracking-widest" style={{ color: "#c8973a", fontFamily: "Georgia, serif", letterSpacing: "0.38em" }}>
            OUR CURATED SELECTION
          </span>
          <span className="block w-10 h-px" style={{ background: "linear-gradient(to left, transparent, #c8973a)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          fontWeight: 300, color: "#f7c568",
          letterSpacing: "0.04em", lineHeight: 1.15,
          margin: "0 0 16px",
        }}>
          Explore Our{" "}
          <span style={{ color: "#f5ede0", fontStyle: "italic" }}>Finest Pieces</span>
        </h2>

        <p style={{
          maxWidth: "460px", margin: "0 auto",
          fontSize: "14px", color: "#7a6050",
          fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.8,
        }}>
          Every item in this selection is handpicked for quality, character, and lasting elegance —
          made to be lived in, not just admired.
        </p>

        <div className="flex items-center justify-center gap-3 mt-5">
          <span className="block h-0.5 w-12" style={{ background: "linear-gradient(to right, #c8973a, #f7c568)" }} />
          <span className="block w-1.5 h-1.5 rotate-45" style={{ background: "#c8973a" }} />
          <span className="block h-0.5 w-6" style={{ background: "rgba(200,151,58,0.3)" }} />
        </div>
      </div>

      {/* ── INFINITE 3D SCROLL TRACK ── */}
      <div style={{ overflow: "hidden", padding: "20px 0 24px" }}>
        <div className="tc-track">
          {loopCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="tc-card"
              onMouseEnter={() => setHoveredId(`${card.id}-${index}`)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated top gold bar */}
              <div className="tc-gold-bar" />

              {/* Glow layer */}
              <div className="tc-glow" />

              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: "220px" }}>
                <img src={card.image} alt={card.heading} className="tc-card-img" />
                <div className="tc-img-overlay" />
                <span className="tc-badge">{card.tag}</span>
              </div>

              {/* Body */}
              <div className="tc-body">
                {/* Eyebrow + icon */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className="tc-eyebrow">{card.eyebrow}</span>
                  <span style={{ opacity: 0.7 }}>{cardIcons[card.id - 1]}</span>
                </div>

                {/* Title */}
                <h3 className="tc-title">{card.heading}</h3>

                <div className="tc-divider" />

                {/* Description */}
                <p className="tc-desc">{card.description}</p>

                {/* CTA */}
                <Link to={card.href} className="tc-btn">
                  {card.buttonText}
                  <span className="tc-btn-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM MARQUEE STRIP ── */}
      <div
        style={{
          marginTop: "60px",
          borderTop: "1px solid rgba(200,151,58,0.12)",
          borderBottom: "1px solid rgba(200,151,58,0.12)",
          padding: "12px 0",
          overflow: "hidden",
        }}
      >
        <div style={{
          display: "inline-block",
          animation: "infiniteScroll 18s linear infinite",
          whiteSpace: "nowrap",
        }}>
          {Array(8).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED QUALITY  ◆  TIMELESS DESIGN  ◆  D DOLLY LAMB  ").map((t, i) => (
            <span key={i} style={{
              fontSize: "10px", letterSpacing: "0.22em",
              color: "rgba(200,151,58,0.45)", fontFamily: "Georgia, serif",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;