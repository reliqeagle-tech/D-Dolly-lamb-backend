import React, { useState } from "react";

/*
  FIXES:
  1. Heading font-weight 700 (was 600, too light)
  2. Card body text color #4B5563 (was #6B7280, too faint)
  3. Detail text #6B7280 rest / #4338CA hover (was #9CA3AF, unreadable)
  4. Card heading color #1E1B4B weight 700 (was 600)
  5. Label tracking reduced so text shows fully
  6. Icon bg more visible with stronger indigo tint
*/

const policies = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="20" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M16 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 28l4-4 4 4 4-4 4 4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 34h8" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 30v4" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "EASY EXCHANGE",
    heading: "Hassle-Free Exchange",
    body: "Changed your mind or need a different size? Simply reach out within 14 days of delivery and we'll sort the rest — no stress, no hassle.",
    detail: "14-day window · Free return shipping · No questions asked",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="20" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M24 14v10l6 3" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 33a10 10 0 1 0 0-18" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 30l3 3 3-6" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "7-DAY RETURNS",
    heading: "7 Day Return Policy",
    body: "Not completely satisfied? We offer a full 7-day return policy on all orders — no restocking fees, no hassle. Your trust matters more than the sale.",
    detail: "Full refund · Original condition · Free collection",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="20" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M17 20h14M17 24h10M17 28h7" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="14" y="16" width="20" height="16" rx="2" stroke="#6366F1" strokeWidth="1.5" />
      </svg>
    ),
    label: "24/7 SUPPORT",
    heading: "Premium Customer Care",
    body: "Our leather specialists are available around the clock to assist with sizing, care advice, and custom orders — via chat, email, or phone.",
    detail: "24/7 availability · Expert advisors · Response under 2 hrs",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="20" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M16 24l5 5 11-10" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 14c5.523 0 10 4.477 10 10s-4.477 10-10 10S14 29.523 14 24" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "AUTHENTICITY",
    heading: "100% Authentic Lambskin",
    body: "Every jacket ships with a Certificate of Authenticity and a unique hide traceability code — so you know exactly what you're wearing.",
    detail: "Grade A hides · COA included · Traceability guaranteed",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="20" stroke="#6366F1" strokeWidth="1.5" />
        <rect x="14" y="20" width="20" height="13" rx="1.5" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M14 24h20" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 20v-3a3 3 0 0 1 6 0v3" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="27" r="1.5" fill="#6366F1" />
      </svg>
    ),
    label: "SECURE PACKAGING",
    heading: "Luxury Protective Packaging",
    body: "Every jacket is wrapped in acid-free tissue, sealed in a dust bag, and boxed in our signature gift packaging — arriving in perfect condition.",
    detail: "Acid-free tissue · Dust bag included · Gift-ready box",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="20" stroke="#6366F1" strokeWidth="1.5" />
        <path d="M24 15v2M24 31v2M15 24h2M31 24h2" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="#818CF8" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="2" fill="#6366F1" />
      </svg>
    ),
    label: "BESPOKE",
    heading: "Custom Bespoke Orders",
    body: "Our atelier accepts bespoke commissions — choose your hide colour, lining, hardware, and fit for a jacket made only for you.",
    detail: "Custom measurements · 4–6 week lead time · Personal consult",
  },
];

const OurPolicy = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{
      padding: "40px 5%",
      background: "linear-gradient(180deg, #FFFFFF 0%, #F4F5FF 40%, #EEF0FF 100%)",
      borderTop: "1px solid rgba(99,102,241,0.1)",
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        .op-grid-bg::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
        .op-blob {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 420px; height: 420px;
          background: rgba(129,140,248,0.07);
          bottom: -120px; left: -80px; filter: blur(2px);
        }
        .op-policy-card {
          transition: all 0.3s cubic-bezier(.16,1,.3,1);
        }
      `}</style>

      <div className="op-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div className="op-blob" />

      {/* ── HEADER ── */}
      <div style={{ textAlign: "center", marginBottom: 56, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ display: "block", width: 40, height: 1, background: "linear-gradient(to right, transparent, #6366F1)" }} />
          <span style={{
            fontSize: 11, letterSpacing: "0.35em", color: "#6366F1",
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            textTransform: "uppercase",
          }}>OUR PROMISE TO YOU</span>
          <span style={{ display: "block", width: 40, height: 1, background: "linear-gradient(to left, transparent, #6366F1)" }} />
        </div>

        {/* FIX 1: Title font-weight 700 */}
        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700, lineHeight: 1.2, marginBottom: 16,
          letterSpacing: "0.02em",
        }}>
          <span style={{
            background: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>The D Dolly Lamb </span>
          <span style={{ color: "#1E1B4B" }}>Guarantee</span>
        </h2>

        {/* FIX 2: Subtitle darker — readable */}
        <p style={{
          maxWidth: 520, margin: "0 auto", fontSize: 14,
          lineHeight: 1.75, fontStyle: "italic",
          color: "#4B5563",
          fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
        }}>
          Every purchase is backed by our six-pillar commitment — because owning a
          piece of D Dolly Lamb should feel as good as wearing it.
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 24 }}>
          <span style={{ display: "block", height: 2, width: 64, background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5))", borderRadius: 2 }} />
          <span style={{ display: "block", width: 6, height: 6, background: "#6366F1", transform: "rotate(45deg)", flexShrink: 0 }} />
          <span style={{ display: "block", height: 2, width: 64, background: "linear-gradient(to left, transparent, rgba(99,102,241,0.5))", borderRadius: 2 }} />
        </div>
      </div>

      {/* ── POLICY GRID ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16, position: "relative", zIndex: 1,
      }}>
        {policies.map((p, i) => (
          <div
            key={i}
            className="op-policy-card"
            style={{
              position: "relative", display: "flex", flexDirection: "column",
              padding: 28, cursor: "default", borderRadius: 14,
              background: hovered === i
                ? "linear-gradient(145deg, #ECEEFF, #E4E7FF)"
                : "#FFFFFF",
              border: `1px solid ${hovered === i ? "rgba(99,102,241,0.5)" : "rgba(99,102,241,0.14)"}`,
              transform: hovered === i ? "translateY(-5px)" : "translateY(0)",
              boxShadow: hovered === i
                ? "0 20px 52px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.1)"
                : "0 2px 12px rgba(99,102,241,0.06)",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Top accent line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(to right, transparent, #6366F1 40%, #818CF8 60%, transparent)",
              opacity: hovered === i ? 1 : 0,
              transition: "opacity 0.3s", borderRadius: "14px 14px 0 0",
            }} />

            {/* FIX: Icon container — stronger indigo bg */}
            <div style={{
              marginBottom: 20, width: 56, height: 56,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: 12,
              background: hovered === i ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.07)",
              border: `1px solid rgba(99,102,241,${hovered === i ? "0.25" : "0.15"})`,
              transition: "background 0.3s, border-color 0.3s",
            }}>
              {p.icon}
            </div>

            {/* Label */}
            <p style={{
              fontSize: 10, fontWeight: 700, marginBottom: 8,
              letterSpacing: "0.22em", color: "#818CF8",
              fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase",
            }}>{p.label}</p>

            {/* FIX: Heading — weight 700, deep navy */}
            <h3 style={{
              fontSize: 16, fontWeight: 700, marginBottom: 10,
              lineHeight: 1.3, color: "#1E1B4B",
              fontFamily: "'Montserrat', sans-serif",
            }}>{p.heading}</h3>

            {/* FIX: Body text — darker, more readable */}
            <p style={{
              fontSize: 13, lineHeight: 1.8, fontStyle: "italic",
              flex: 1, marginBottom: 16,
              color: "#4B5563",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
            }}>{p.body}</p>

            {/* FIX: Detail — #6B7280 rest, #4338CA on hover (much more readable) */}
            <p style={{
              fontSize: 12, lineHeight: 1.6, letterSpacing: "0.03em",
              paddingTop: 14, fontWeight: hovered === i ? 500 : 400,
              color: hovered === i ? "#4338CA" : "#6B7280",
              fontFamily: "'Montserrat', sans-serif",
              borderTop: "1px solid rgba(99,102,241,0.12)",
              transition: "color 0.3s, font-weight 0.3s",
            }}>{p.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;