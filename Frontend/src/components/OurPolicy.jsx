// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

//       <div>
//         <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold'>Easy Exchange Policy</p>
//         <p className=' text-gray-400'>We offer hassle free  exchange policy</p>
//       </div>
//       <div>
//         <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold'>7 Days Return Policy</p>
//         <p className=' text-gray-400'>We provide 7 days free return policy</p>
//       </div>
//       <div>
//         <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold'>Best customer support</p>
//         <p className=' text-gray-400'>we provide 24/7 customer support</p>
//       </div>

//     </div>
//   )
// }

// export default OurPolicy


// import React, { useState } from "react";

// const policies = [
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
//         <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
//         <path d="M16 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M14 28l4-4 4 4 4-4 4 4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M20 34h8" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M24 30v4" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     label: "EASY EXCHANGE",
//     heading: "Hassle-Free Exchange",
//     body: "Changed your mind or need a different size? We make exchanges effortless — simply reach out within 14 days of delivery and we'll sort the rest.",
//     detail: "14-day window · Free return shipping · No questions asked",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
//         <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
//         <path d="M24 14v10l6 3" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M15 33a10 10 0 1 0 0-18" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M12 30l3 3 3-6" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     label: "7-DAY RETURNS",
//     heading: "7 Day Return Policy",
//     body: "Not completely satisfied? We offer a full 7-day return policy on all orders — no restocking fees, no hassle. Your trust matters more than the sale.",
//     detail: "Full refund · Original condition · Free collection",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
//         <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
//         <path d="M17 20h14M17 24h10M17 28h7" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
//         <rect x="14" y="16" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.5" />
//       </svg>
//     ),
//     label: "24/7 SUPPORT",
//     heading: "Premium Customer Care",
//     body: "Our leather specialists are available around the clock to assist with sizing, care advice, custom orders, and anything else you need — via chat, email, or phone.",
//     detail: "24/7 availability · Expert advisors · Response in under 2 hrs",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
//         <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
//         <path d="M16 24l5 5 11-10" stroke="#f7c568" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M24 14c5.523 0 10 4.477 10 10s-4.477 10-10 10S14 29.523 14 24" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     label: "AUTHENTICITY",
//     heading: "100% Authentic Lambskin",
//     body: "Every jacket ships with a Certificate of Authenticity and a unique hide traceability code — so you know exactly what you're wearing and where it came from.",
//     detail: "Grade A hides · COA included · Traceability guaranteed",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
//         <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
//         <rect x="14" y="20" width="20" height="13" rx="1.5" stroke="#c8973a" strokeWidth="1.5" />
//         <path d="M14 24h20" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M21 20v-3a3 3 0 0 1 6 0v3" stroke="#f7c568" strokeWidth="1.5" strokeLinecap="round" />
//         <circle cx="24" cy="27" r="1.5" fill="#c8973a" />
//       </svg>
//     ),
//     label: "SECURE PACKAGING",
//     heading: "Luxury Protective Packaging",
//     body: "Every jacket is wrapped in acid-free tissue, sealed in a dust bag, and boxed in our signature gift packaging — arriving in perfect condition, ready to impress.",
//     detail: "Acid-free tissue · Dust bag included · Gift-ready box",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
//         <circle cx="24" cy="24" r="20" stroke="#c8973a" strokeWidth="1.5" />
//         <path d="M24 15v2M24 31v2M15 24h2M31 24h2" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
//         <circle cx="24" cy="24" r="6" stroke="#f7c568" strokeWidth="1.5" />
//         <circle cx="24" cy="24" r="2" fill="#c8973a" />
//       </svg>
//     ),
//     label: "BESPOKE",
//     heading: "Custom Bespoke Orders",
//     body: "Want something truly one-of-a-kind? Our atelier accepts bespoke commissions — choose your hide colour, lining, hardware, and fit for a jacket made only for you.",
//     detail: "Custom measurements · 4–6 week lead time · Personal consult",
//   },
// ];

// const OurPolicy = () => {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <section
//       style={{
//         background: "linear-gradient(180deg, #1a0f0a 0%, #0d0703 100%)",
//         padding: "90px 5%",
//         borderTop: "1px solid rgba(200,151,58,0.15)",
//       }}
//     >
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .op-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 2px;
//         }
//         @media (min-width: 768px)  { .op-grid { grid-template-columns: repeat(3, 1fr); } }
//         @media (min-width: 1200px) { .op-grid { grid-template-columns: repeat(6, 1fr); } }
//         .op-card {
//           padding: 36px 24px 32px;
//           background: linear-gradient(145deg, #1e110a, #160c06);
//           border: 1px solid rgba(200,151,58,0.12);
//           transition: border-color 0.3s, background 0.3s, transform 0.3s;
//           cursor: default;
//           position: relative;
//           overflow: hidden;
//         }
//         .op-card:hover {
//           border-color: #c8973a;
//           background: linear-gradient(145deg, #2a1610, #1e110a);
//           transform: translateY(-4px);
//         }
//         .op-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(to right, transparent, #c8973a, transparent);
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
//         .op-card:hover::before { opacity: 1; }
//       `}</style>

//       {/* Section header */}
//       <div style={{ textAlign: "center", marginBottom: "60px" }}>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
//           <span style={{ width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #c8973a)" }} />
//           <span style={{ fontSize: "10px", letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Georgia, serif" }}>
//             OUR PROMISE TO YOU
//           </span>
//           <span style={{ width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #c8973a)" }} />
//         </div>
//         <h2 style={{
//           fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
//           color: "#f7c568", fontFamily: "Georgia, serif",
//           fontWeight: 400, margin: "0 0 16px", letterSpacing: "0.04em",
//         }}>
//           The D Dolly Lamb <span style={{ color: "#f5ede0" }}>Guarantee</span>
//         </h2>
//         <p style={{
//           maxWidth: "480px", margin: "0 auto",
//           fontSize: "14px", color: "#7a6050",
//           fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.8,
//         }}>
//           Every purchase is backed by our six-pillar commitment — because owning a piece of
//           D Dolly Lamb should feel as good as wearing it.
//         </p>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
//           <span style={{ width: "48px", height: "2px", background: "linear-gradient(to right, #c8973a, #f7c568)" }} />
//           <span style={{ width: "6px", height: "6px", background: "#c8973a", transform: "rotate(45deg)", display: "inline-block" }} />
//           <span style={{ width: "24px", height: "2px", background: "rgba(200,151,58,0.3)" }} />
//         </div>
//       </div>

//       {/* Policy grid */}
//       <div className="op-grid">
//         {policies.map((p, i) => (
//           <div
//             key={i}
//             className="op-card"
//             onMouseEnter={() => setHovered(i)}
//             onMouseLeave={() => setHovered(null)}
//             style={{ animation: `fadeUp 0.5s ease ${i * 0.08}s both` }}
//           >
//             {/* Icon */}
//             <div style={{ marginBottom: "20px" }}>
//               {p.icon}
//             </div>

//             {/* Label */}
//             <p style={{
//               fontSize: "9px", letterSpacing: "0.3em",
//               color: "#c8973a", fontFamily: "Georgia, serif",
//               marginBottom: "8px", fontWeight: 600,
//             }}>
//               {p.label}
//             </p>

//             {/* Heading */}
//             <h3 style={{
//               fontSize: "14px", color: "#f5ede0",
//               fontFamily: "Georgia, serif", fontWeight: 400,
//               margin: "0 0 12px", letterSpacing: "0.02em", lineHeight: 1.3,
//             }}>
//               {p.heading}
//             </h3>

//             {/* Body */}
//             <p style={{
//               fontSize: "12px", color: "#7a6050",
//               fontFamily: "Georgia, serif", fontStyle: "italic",
//               lineHeight: 1.75, marginBottom: "16px",
//             }}>
//               {p.body}
//             </p>

//             {/* Detail pill */}
//             <p style={{
//               fontSize: "9px", letterSpacing: "0.1em",
//               color: hovered === i ? "#f7c568" : "#5a4030",
//               fontFamily: "Georgia, serif",
//               borderTop: "1px solid rgba(200,151,58,0.12)",
//               paddingTop: "12px",
//               transition: "color 0.3s",
//               lineHeight: 1.6,
//             }}>
//               {p.detail}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurPolicy;


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