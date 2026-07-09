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
      position: "relative", overflow: "hidden", padding: "40px 0 40px",
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