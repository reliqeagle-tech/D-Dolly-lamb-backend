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

  const loopCards = [...cards, ...cards, ...cards];

  const cardIcons = [
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="1">
      <rect x="3" y="7" width="18" height="10" rx="5" stroke="#c8973a" strokeWidth="1.3" />
      <path d="M3 12h18" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="2">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" stroke="#c8973a" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="#f7c568" strokeWidth="1.2" />
    </svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="3">
      <path d="M12 3L8 7H5l-2 5 3 1v8h12v-8l3-1-2-5h-3L12 3z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 13v5M15 13v5M12 7v3" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" key="4">
      <path d="M12 3l9 7-9 11L3 10z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(200,151,58,0.1)" />
      <path d="M3 10h18" stroke="#f7c568" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>,
  ];

  return (
    <section
      className="relative overflow-hidden py-24 border-t border-[rgba(200,151,58,0.15)]"
      style={{ background: "linear-gradient(180deg,#0d0703 0%,#1a0f0a 50%,#0d0703 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @keyframes floatUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes infiniteScroll {
          0%   { transform:translateX(0); }
          100% { transform:translateX(-33.333%); }
        }

        /* Track — must stay here: animation + will-change aren't Tailwind */
        .tc-track {
          display:flex;
          gap:24px;
          width:max-content;
          animation:infiniteScroll 40s linear infinite;
          will-change:transform;
        }
        .tc-track:hover { animation-play-state:paused; }

        
        .tc-card-3d {
          transition: border-color 0.4s, transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s;
          transform-style: preserve-3d;
        }
        .tc-card-3d:hover {
          border-color: #c8973a !important;
          transform: translateY(-10px) rotateX(3deg) rotateY(-2deg) scale(1.02);
          box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,151,58,0.3), 0 8px 32px rgba(200,151,58,0.15);
        }

        /* Image zoom on card hover — uses parent class tc-card-3d */
        .tc-card-3d:hover .tc-img {
          transform: scale(1.08);
          filter: brightness(1) saturate(1.05);
        }

        /* Gold bar sweep on card hover */
        .tc-gold-bar { position:absolute; top:0; left:0; height:2px; width:0; z-index:10;
          background:linear-gradient(to right,#c8973a,#f7c568);
          transition:width 0.45s ease;
        }
        .tc-card-3d:hover .tc-gold-bar { width:100%; }

        /* Glow layer on card hover */
        .tc-glow { position:absolute; inset:0; pointer-events:none; z-index:1;
          background:radial-gradient(ellipse at 20% 80%,rgba(200,151,58,0.07),transparent 60%);
          opacity:0; transition:opacity 0.4s;
        }
        .tc-card-3d:hover .tc-glow { opacity:1; }

        /* Eyebrow ::before line — pseudo-elements can't be done with Tailwind */
        .tc-eyebrow::before {
          content:''; display:block;
          width:16px; height:1px;
          background:#c8973a; flex-shrink:0;
        }

        /* CTA button gradient hover */
        .tc-btn:hover {
          background:linear-gradient(135deg,#c8973a,#f7c568);
          color:#1a0f0a; border-color:transparent;
        }
        .tc-btn:hover .tc-btn-arrow { transform:translateX(5px); color:#1a0f0a; }
        .tc-btn-arrow { transition:transform 0.3s, color 0.3s; color:#c8973a; }

        /* Marquee strip uses same infiniteScroll keyframe */
        .tc-marquee-inner { display:inline-block; animation:infiniteScroll 18s linear infinite; white-space:nowrap; }

        @media (max-width:640px) {
          .tc-card-3d { min-width:290px; max-width:290px; }
          .tc-img { height:190px !important; }
        }
      `}</style>

      {/* ── Background glow blobs ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "5%", left: "-8%", width: 320, height: 320,
          background: "radial-gradient(circle,rgba(200,151,58,0.04),transparent 70%)"
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "5%", right: "-8%", width: 280, height: 280,
          background: "radial-gradient(circle,rgba(139,69,19,0.05),transparent 70%)"
        }}
      />

      {/* ── Section Header ── */}
      <div className="text-center px-6 mb-14" style={{ animation: "floatUp 0.7s ease both" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-10 h-px" style={{ background: "linear-gradient(to right,transparent,#c8973a)" }} />
          <span className="text-[10px] tracking-[0.38em]" style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}>
            OUR CURATED SELECTION
          </span>
          <span className="block w-10 h-px" style={{ background: "linear-gradient(to left,transparent,#c8973a)" }} />
        </div>

        <h2
          className="font-light mb-4"
          style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontSize: "clamp(2rem,5vw,3.8rem)", color: "#f7c568",
            letterSpacing: "0.04em", lineHeight: 1.15
          }}
        >
          Explore Our{" "}
          <span className="italic" style={{ color: "#f5ede0" }}>Finest Pieces</span>
        </h2>

        <p
          className="max-w-[460px] mx-auto text-sm italic leading-loose"
          style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}
        >
          Every item in this selection is handpicked for quality, character, and lasting elegance —
          made to be lived in, not just admired.
        </p>

        <div className="flex items-center justify-center gap-3 mt-5">
          <span className="block h-0.5 w-12" style={{ background: "linear-gradient(to right,#c8973a,#f7c568)" }} />
          <span className="block w-1.5 h-1.5 rotate-45" style={{ background: "#c8973a" }} />
          <span className="block h-0.5 w-6" style={{ background: "rgba(200,151,58,0.3)" }} />
        </div>
      </div>

      {/* ── Infinite Scroll Track ── */}
      <div className="overflow-hidden py-5 pb-6">
        <div className="tc-track">
          {loopCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="tc-card-3d relative flex-shrink-0 overflow-hidden rounded-lg cursor-pointer border border-[rgba(200,151,58,0.15)] min-w-[340px] max-w-[340px]"
              style={{ background: "linear-gradient(145deg,#1e110a,#160c06)" }}
              onMouseEnter={() => setHoveredId(`${card.id}-${index}`)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gold bar */}
              <div className="tc-gold-bar" />

              {/* Glow */}
              <div className="tc-glow" />

              {/* Image */}
              <div className="relative overflow-hidden h-[220px]">
                <img
                  src={card.image}
                  alt={card.heading}
                  className="tc-img w-full h-full object-cover transition-[transform,filter] duration-[600ms]"
                  style={{ filter: "brightness(0.88) saturate(0.9)" }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-[2]"
                  style={{ background: "linear-gradient(to bottom,transparent 40%,rgba(13,7,3,0.85) 100%)" }}
                />
                {/* Badge */}
                <span
                  className="absolute top-3.5 left-3.5 z-[5] text-[8px] tracking-[0.28em] font-bold px-2.5 py-[3px] rounded-sm"
                  style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a", fontFamily: "Georgia,serif" }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-2.5 px-6 pt-[22px] pb-6 relative">
                {/* Eyebrow + icon */}
                <div className="flex items-center justify-between">
                  <span
                    className="tc-eyebrow flex items-center gap-2 text-[9px] tracking-[0.3em] font-semibold"
                    style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}
                  >
                    {card.eyebrow}
                  </span>
                  <span className="opacity-70">{cardIcons[card.id - 1]}</span>
                </div>

                {/* Title */}
                <h3
                  className="m-0 font-normal leading-tight tracking-[0.02em] text-[1.35rem]"
                  style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", color: "#f7c568" }}
                >
                  {card.heading}
                </h3>

                {/* Divider */}
                <div className="h-px my-0.5" style={{ background: "rgba(200,151,58,0.12)" }} />

                {/* Description */}
                <p
                  className="m-0 text-xs italic leading-[1.75]"
                  style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}
                >
                  {card.description}
                </p>

                {/* CTA */}
                <Link
                  to={card.href}
                  className="tc-btn mt-1 flex items-center justify-center gap-2 py-[11px] w-full rounded-sm text-[10px] tracking-[0.22em] font-semibold no-underline transition-all duration-300"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(200,151,58,0.3)",
                    color: "#f7c568",
                    fontFamily: "Georgia,serif",
                  }}
                >
                  {card.buttonText}
                  <span className="tc-btn-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Marquee Strip ── */}
      <div
        className="mt-16 overflow-hidden py-3"
        style={{ borderTop: "1px solid rgba(200,151,58,0.12)", borderBottom: "1px solid rgba(200,151,58,0.12)" }}
      >
        <div className="tc-marquee-inner">
          {Array(8).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED QUALITY  ◆  TIMELESS DESIGN  ◆  D DOLLY LAMB  ").map((t, i) => (
            <span
              key={i}
              className="text-[10px] tracking-[0.22em]"
              style={{ color: "rgba(200,151,58,0.45)", fontFamily: "Georgia,serif" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;