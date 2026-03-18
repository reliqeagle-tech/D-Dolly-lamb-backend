import React, { useState } from "react";

const policies = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
        <path d="M16 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 28l4-4 4 4 4-4 4 4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 34h8" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 30v4" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "EASY EXCHANGE",
    heading: "Hassle-Free Exchange",
    body: "Changed your mind or need a different size? Simply reach out within 14 days of delivery and we'll sort the rest — no stress, no hassle.",
    detail: "14-day window · Free return shipping · No questions asked",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
        <path d="M24 14v10l6 3" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 33a10 10 0 1 0 0-18" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 30l3 3 3-6" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "7-DAY RETURNS",
    heading: "7 Day Return Policy",
    body: "Not completely satisfied? We offer a full 7-day return policy on all orders — no restocking fees, no hassle. Your trust matters more than the sale.",
    detail: "Full refund · Original condition · Free collection",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
        <path d="M17 20h14M17 24h10M17 28h7" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="14" y="16" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.5" />
      </svg>
    ),
    label: "24/7 SUPPORT",
    heading: "Premium Customer Care",
    body: "Our leather specialists are available around the clock to assist with sizing, care advice, and custom orders — via chat, email, or phone.",
    detail: "24/7 availability · Expert advisors · Response under 2 hrs",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
        <path d="M16 24l5 5 11-10" stroke="#f7c568" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 14c5.523 0 10 4.477 10 10s-4.477 10-10 10S14 29.523 14 24" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "AUTHENTICITY",
    heading: "100% Authentic Lambskin",
    body: "Every jacket ships with a Certificate of Authenticity and a unique hide traceability code — so you know exactly what you're wearing.",
    detail: "Grade A hides · COA included · Traceability guaranteed",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
        <rect x="14" y="20" width="20" height="13" rx="1.5" stroke="#c8973a" strokeWidth="1.5" />
        <path d="M14 24h20" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 20v-3a3 3 0 0 1 6 0v3" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="27" r="1.5" fill="#c8973a" />
      </svg>
    ),
    label: "SECURE PACKAGING",
    heading: "Luxury Protective Packaging",
    body: "Every jacket is wrapped in acid-free tissue, sealed in a dust bag, and boxed in our signature gift packaging — arriving in perfect condition.",
    detail: "Acid-free tissue · Dust bag included · Gift-ready box",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
        <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
        <path d="M24 15v2M24 31v2M15 24h2M31 24h2" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="#f7c568" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="2" fill="#c8973a" />
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
    <section
      className="px-4 sm:px-8 md:px-12 py-20"
      style={{
        background: "linear-gradient(180deg, #1a0f0a 0%, #0d0703 100%)",
        borderTop: "1px solid rgba(200,151,58,0.15)",
      }}
    >
      {/* ── SECTION HEADER ── */}
      <div className="text-center mb-14">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span
            className="block w-10 h-px"
            style={{ background: "linear-gradient(to right, transparent, #c8973a)" }}
          />
          <span
            className="text-xs tracking-widest"
            style={{ color: "#c8973a", fontFamily: "Georgia, serif", letterSpacing: "0.38em" }}
          >
            OUR PROMISE TO YOU
          </span>
          <span
            className="block w-10 h-px"
            style={{ background: "linear-gradient(to left, transparent, #c8973a)" }}
          />
        </div>

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4"
          style={{ color: "#f7c568", fontFamily: "Georgia, serif", letterSpacing: "0.03em" }}
        >
          The D Dolly Lamb{" "}
          <span style={{ color: "#f5ede0" }}>Guarantee</span>
        </h2>

        {/* Subtitle */}
        <p
          className="max-w-lg mx-auto text-sm leading-relaxed italic"
          style={{ color: "#7a6050", fontFamily: "Georgia, serif" }}
        >
          Every purchase is backed by our six-pillar commitment — because owning a
          piece of D Dolly Lamb should feel as good as wearing it.
        </p>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span
            className="block h-0.5 w-16"
            style={{ background: "linear-gradient(to right, transparent, #c8973a)" }}
          />
          <span
            className="block w-1.5 h-1.5 rotate-45"
            style={{ background: "#c8973a" }}
          />
          <span
            className="block h-0.5 w-16"
            // style={{ background: "linear-gradient(to right, #c8973a, #f7c568)" }}
            style={{ background: "linear-gradient(to left, transparent, #c8973a)" }}
          />
        </div>
      </div>

      {/* ── POLICY GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {policies.map((p, i) => (
          <div
            key={i}
            className="relative flex flex-col p-8 cursor-default transition-all duration-300 rounded-lg"
            style={{
              background: hovered === i
                ? "linear-gradient(145deg, #2a1610, #1e110a)"
                : "linear-gradient(145deg, #1e110a, #160c06)",
              border: "1px solid",
              borderColor: hovered === i ? "#c8973a" : "rgba(200,151,58,0.12)",
              transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
              boxShadow: hovered === i ? "0 16px 48px rgba(0,0,0,0.5)" : "none",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Top gold accent line on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to right, transparent, #c8973a, transparent)",
                opacity: hovered === i ? 1 : 0,
              }}
            />

            {/* Icon */}
            <div className="mb-5">{p.icon}</div>

            {/* Label */}
            <p
              className="text-xs font-semibold mb-2 tracking-widest"
              style={{ color: "#c8973a", fontFamily: "Georgia, serif", letterSpacing: "0.28em" }}
            >
              {p.label}
            </p>

            {/* Heading */}
            <h3
              className="text-base font-normal mb-3 leading-snug"
              style={{ color: "#f5ede0", fontFamily: "Georgia, serif", letterSpacing: "0.02em" }}
            >
              {p.heading}
            </h3>

            {/* Body */}
            <p
              className="text-xs leading-relaxed italic flex-1 mb-4"
              style={{ color: "#7a6050", fontFamily: "Georgia, serif" }}
            >
              {p.body}
            </p>

            {/* Detail */}
            <p
              className="text-xs pt-3 leading-relaxed transition-colors duration-300"
              style={{
                color: hovered === i ? "#f7c568" : "#5a4030",
                fontFamily: "Georgia, serif",
                borderTop: "1px solid rgba(200,151,58,0.12)",
                letterSpacing: "0.04em",
              }}
            >
              {p.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;



