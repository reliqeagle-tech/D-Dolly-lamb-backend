// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// /* ── Premium SVG Social Icons ─────────────────── */
// const IconEmail = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
//     <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconFacebook = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
//       stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//   </svg>
// );
// const IconInstagram = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
//   </svg>
// );
// const IconTwitter = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M20 4H16l-4 5-4-5H4l7 9-7 7h4l4-5 4 5h4l-7-9 7-7z"
//       stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
//   </svg>
// );
// const IconArrow = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// /* ── Footer Link with animated rule ────────────── */
// const FooterLink = ({ to, href, children }) => {
//   const cls = "group flex items-center gap-2 text-xs text-[#7a6050] hover:text-[#f7c568] transition-all duration-300 leading-relaxed";
//   const inner = (
//     <>
//       <span className="block w-3 h-px flex-shrink-0 transition-all duration-300 group-hover:w-5"
//         style={{ background: "rgba(200,151,58,0.4)" }} />
//       <span className="transition-all duration-200 group-hover:translate-x-0.5"
//         style={{ fontFamily: "Georgia, serif", letterSpacing: "0.04em" }}>
//         {children}
//       </span>
//     </>
//   );
//   return to
//     ? <Link to={to} className={cls}>{inner}</Link>
//     : <a href={href || "#"} className={cls}>{inner}</a>;
// };

// /* ── Column heading ─────────────────────────────── */
// const ColHeading = ({ children }) => (
//   <div className="mb-5">
//     <p style={{
//       fontSize: "9px", letterSpacing: "0.32em", fontWeight: 600,
//       color: "#c8973a", textTransform: "uppercase",
//       fontFamily: "Montserrat, Georgia, serif", marginBottom: "10px"
//     }}>
//       {children}
//     </p>
//     <div className="flex items-center gap-2">
//       <span className="block h-px w-8" style={{ background: "linear-gradient(to right, #c8973a, transparent)" }} />
//       <span className="block w-1 h-1 rotate-45 flex-shrink-0" style={{ background: "#c8973a", opacity: 0.5 }} />
//     </div>
//   </div>
// );

// const Footer = () => {
//   const isDevelopment = import.meta.env.MODE === 'development';
//   const backendUrl = isDevelopment
//     ? import.meta.env.VITE_BACKEND_URL_D
//     : import.meta.env.VITE_BACKEND_URL;

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     setLoading(true);
//     try {
//       const res = await fetch(`${backendUrl}/api/user/send-mail`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setSubmitted(true);
//         event.target.reset();
//         setTimeout(() => setSubmitted(false), 4000);
//       } else {
//         alert("⚠️ " + data.message);
//       }
//     } catch (error) {
//       alert("❌ " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const socials = [
//     { icon: <IconEmail />, label: "Email", href: "mailto:info@ddollylamb.com" },
//     { icon: <IconFacebook />, label: "Facebook", href: "#" },
//     { icon: <IconInstagram />, label: "Instagram", href: "#" },
//     { icon: <IconTwitter />, label: "X / Twitter", href: "#" },
//   ];

//   return (
//     <footer
//       style={{
//         background: "linear-gradient(180deg, #0d0703 0%, #1a0f0a 100%)",
//         borderTop: "1px solid rgba(200,151,58,0.18)",
//         fontFamily: "Georgia, serif",
//       }}
//     >
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(16px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes marqueeScroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .ft-social-btn {
//           width: 36px; height: 36px;
//           border: 1px solid rgba(200,151,58,0.22);
//           border-radius: 2px;
//           display: flex; align-items: center; justify-content: center;
//           color: #7a6050;
//           transition: all 0.3s;
//           cursor: pointer; background: transparent;
//           text-decoration: none;
//         }
//         .ft-social-btn:hover {
//           border-color: #c8973a;
//           color: #f7c568;
//           background: rgba(200,151,58,0.08);
//           transform: translateY(-3px);
//           box-shadow: 0 6px 20px rgba(200,151,58,0.15);
//         }
//         .ft-input {
//           width: 100%; padding: 11px 44px 11px 16px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(200,151,58,0.2);
//           border-radius: 2px;
//           color: #f5ede0; font-size: 12px;
//           font-family: Georgia, serif; font-style: italic;
//           outline: none; transition: border-color 0.3s, box-shadow 0.3s;
//           letter-spacing: 0.04em;
//         }
//         .ft-input::placeholder { color: #5a4030; }
//         .ft-input:focus {
//           border-color: #c8973a;
//           box-shadow: 0 0 0 3px rgba(200,151,58,0.08);
//         }
//         .ft-submit {
//           position: absolute; right: 0; top: 0; bottom: 0;
//           padding: 0 14px;
//           background: linear-gradient(135deg, #c8973a, #f7c568);
//           border: none; border-radius: 0 2px 2px 0;
//           color: #1a0f0a; cursor: pointer;
//           transition: opacity 0.2s, transform 0.2s;
//           display: flex; align-items: center; justify-content: center;
//         }
//         .ft-submit:hover { opacity: 0.88; transform: translateX(2px); }
//         .ft-submit:disabled { opacity: 0.5; cursor: not-allowed; }

//         @keyframes checkIn {
//           from { opacity: 0; transform: scale(0.8); }
//           to   { opacity: 1; transform: scale(1); }
//         }
//         .ft-success {
//           animation: checkIn 0.4s ease both;
//           display: flex; align-items: center; gap: 8px;
//           font-size: 11px; color: #c8973a;
//           font-family: Georgia, serif; font-style: italic;
//           padding: 10px 0;
//         }
//       `}</style>

//       {/* ── TOP GOLD LINE ── */}
//       <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8973a 30%, #f7c568 50%, #c8973a 70%, transparent)", opacity: 0.6 }} />

//       {/* ── BRAND HERO ROW ── */}
//       <div className="text-center py-12 px-6" style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
//         {/* Diamond icon */}
//         <div className="flex justify-center mb-4">
//           <svg width="48" height="48" viewBox="0 0 42 42" fill="none">
//             <rect x="6" y="6" width="30" height="30" rx="1"
//               transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
//             <rect x="11" y="11" width="20" height="20" rx="0.5"
//               transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//             <text x="21" y="26.5" fontFamily="Montserrat,sans-serif" fontSize="13"
//               fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
//           </svg>
//         </div>

//         <h2 style={{
//           fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
//           fontWeight: 400, color: "#f7c568", letterSpacing: "0.08em", margin: "0 0 6px",
//         }}>
//           D DOLLY <span style={{ color: "#f5ede0" }}>LAMB</span>
//         </h2>
//         <p style={{ fontSize: "9px", letterSpacing: "0.45em", color: "#c8973a", marginBottom: "16px" }}>
//           ARTISAN LEATHER ATELIER · EST. 2001
//         </p>

//         <div className="flex items-center justify-center gap-3">
//           <span className="block h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(200,151,58,0.4))" }} />
//           <span className="block w-1.5 h-1.5 rotate-45 flex-shrink-0" style={{ background: "#c8973a" }} />
//           <span className="block h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(200,151,58,0.4))" }} />
//         </div>
//       </div>

//       {/* ── MAIN LINK GRID ── */}
//       <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-10 py-14">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10">

//           {/* INFO */}
//           <div style={{ animation: "fadeUp 0.5s ease 0.05s both" }}>
//             <ColHeading>Info</ColHeading>
//             <ul className="space-y-2.5 list-none p-0 m-0">
//               <li><FooterLink to="/contact">Contact Us</FooterLink></li>
//               <li><FooterLink to="/about">About Us</FooterLink></li>
//               <li><FooterLink to="/orders">Shipping & Returns</FooterLink></li>
//               <li><FooterLink to="/about">Our Quality</FooterLink></li>
//               <li><FooterLink to="#">Leather Waxing</FooterLink></li>
//               <li><FooterLink to="#">Sizing Chart</FooterLink></li>
//               <li><FooterLink to="/bestseller">Best Sellers</FooterLink></li>
//             </ul>
//           </div>

//           {/* WOMEN */}
//           <div style={{ animation: "fadeUp 0.5s ease 0.12s both" }}>
//             <ColHeading>Women's</ColHeading>
//             <ul className="space-y-2.5 list-none p-0 m-0">
//               <li><FooterLink to="/collection?category=Women&sub=Topwear">Leather Jackets</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Topwear">Bomber Biker Jacket</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Topwear">Moto Biker Jacket</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Topwear">Winter Wear</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Topwear">Night Dress</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Bottomwear">Pencil Skirt</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Bottomwear">Full Skirt</FooterLink></li>
//             </ul>
//           </div>

//           {/* MEN */}
//           <div style={{ animation: "fadeUp 0.5s ease 0.19s both" }}>
//             <ColHeading>Men's</ColHeading>
//             <ul className="space-y-2.5 list-none p-0 m-0">
//               <li><FooterLink to="/collection?category=Men&sub=Topwear">Leather Jackets</FooterLink></li>
//               <li><FooterLink to="/collection?category=Men&sub=Topwear">Coats</FooterLink></li>
//               <li><FooterLink to="/collection?category=Men&sub=Topwear">Bomber Biker Jacket</FooterLink></li>
//             </ul>
//           </div>

//           {/* OTHERS */}
//           <div style={{ animation: "fadeUp 0.5s ease 0.26s both" }}>
//             <ColHeading>Others</ColHeading>
//             <ul className="space-y-2.5 list-none p-0 m-0">
//               <li><FooterLink to="/collection?category=Others&sub=Pillow">Pillow Covers</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Cushion Cover">Cushion Cover</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Aprons">Aprons</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Desk Mat">Desk Mat</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Chair Cover">Chair Cover</FooterLink></li>
//             </ul>
//           </div>

//           {/* NEW ARRIVALS */}
//           <div style={{ animation: "fadeUp 0.5s ease 0.33s both" }}>
//             <ColHeading>New Arrivals</ColHeading>
//             <ul className="space-y-2.5 list-none p-0 m-0">
//               <li><FooterLink href="/collection?category=Men&sub=Topwear">Men's New Arrivals</FooterLink></li>
//               <li><FooterLink href="/collection?category=Women&sub=Topwear">Women's New Arrivals</FooterLink></li>
//             </ul>

//             {/* Trust badges */}
//             <div className="mt-8 space-y-3">
//               {[
//                 { icon: "✦", text: "Grade A Lambskin" },
//                 { icon: "◈", text: "Handcrafted Quality" },
//                 { icon: "◆", text: "Est. 2001" },
//               ].map((b, i) => (
//                 <div key={i} className="flex items-center gap-2">
//                   <span style={{ fontSize: "8px", color: "#c8973a" }}>{b.icon}</span>
//                   <span style={{ fontSize: "10px", color: "#5a4030", letterSpacing: "0.1em", fontFamily: "Georgia, serif" }}>{b.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* NEWSLETTER */}
//           <div style={{ animation: "fadeUp 0.5s ease 0.4s both" }}>
//             <ColHeading>Newsletter</ColHeading>
//             <p style={{ fontSize: "12px", color: "#5a4030", fontStyle: "italic", lineHeight: 1.75, marginBottom: "16px" }}>
//               Join our inner circle for early access to new drops, private sales & artisan stories.
//             </p>

//             {submitted ? (
//               <div className="ft-success">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" />
//                   <path d="M7 12l4 4 6-7" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 You're on the list!
//               </div>
//             ) : (
//               <form onSubmit={onSubmitHandler} className="relative mb-5">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your email address..."
//                   className="ft-input"
//                   required
//                 />
//                 <button type="submit" disabled={loading} className="ft-submit">
//                   {loading
//                     ? <span style={{ fontSize: 10, letterSpacing: "0.1em" }}>...</span>
//                     : <IconArrow />
//                   }
//                 </button>
//               </form>
//             )}

//             {/* Socials */}
//             <div className="flex items-center gap-2 mt-4 flex-wrap">
//               {socials.map((s, i) => (
//                 <a key={i} href={s.href} className="ft-social-btn" aria-label={s.label} target="_blank" rel="noreferrer">
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ── BOTTOM BAR ── */}
//       <div style={{ borderTop: "1px solid rgba(200,151,58,0.12)" }}>
//         {/* Marquee strip */}
//         <div style={{ overflow: "hidden", borderBottom: "1px solid rgba(200,151,58,0.08)", padding: "10px 0" }}>
//           <div style={{
//             display: "inline-block", whiteSpace: "nowrap",
//             animation: "marqueeScroll 25s linear infinite",
//           }}>
//             {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  EST. 2001  ◆  D DOLLY LAMB  ").map((t, i) => (
//               <span key={i} style={{ fontSize: "9px", letterSpacing: "0.22em", color: "rgba(200,151,58,0.55)", fontFamily: "Georgia, serif" }}>{t}</span>
//             ))}
//           </div>
//         </div>

//         <div className="w-[95%] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p style={{ fontSize: "10px", color: "#8a6040", letterSpacing: "0.14em", fontFamily: "Georgia, serif" }}>
//             COPYRIGHT © 2025 <span style={{ color: "#c8973a" }}>DDOLLYLAMB.COM</span> — ALL RIGHTS RESERVED
//           </p>
//           <div className="flex items-center gap-5">
//             {["Privacy Policy", "Terms of Use", "Cookies"].map((item, i) => (
//               <a key={i} href="#" style={{
//                 fontSize: "9px", color: "#8a6040", letterSpacing: "0.14em",
//                 textDecoration: "none", transition: "color 0.2s",
//                 fontFamily: "Georgia, serif",
//               }}
//                 onMouseEnter={e => e.target.style.color = "#f7c568"}
//                 onMouseLeave={e => e.target.style.color = "#8a6040"}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Premium SVG Social Icons ─────────────────── */
const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 4H16l-4 5-4-5H4l7 9-7 7h4l4-5 4 5h4l-7-9 7-7z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Footer Link ────────────────────────────────── */
const FooterLink = ({ to, href, children }) => {
  const cls = "group flex items-center gap-2 text-xs text-[#7a6050] hover:text-[#f7c568] transition-all duration-300 leading-relaxed";
  const inner = (
    <>
      <span className="block w-3 h-px flex-shrink-0 transition-all duration-300 group-hover:w-5 bg-[rgba(200,151,58,0.4)]" />
      <span className="transition-all duration-200 group-hover:translate-x-0.5 font-serif tracking-[0.04em]">
        {children}
      </span>
    </>
  );
  return to
    ? <Link to={to} className={cls}>{inner}</Link>
    : <a href={href || "#"} className={cls}>{inner}</a>;
};

/* ── Column Heading ─────────────────────────────── */
const ColHeading = ({ children }) => (
  <div className="mb-5">
    <p className="text-[9px] tracking-[0.32em] font-semibold text-[#c8973a] uppercase font-sans mb-2.5">
      {children}
    </p>
    <div className="flex items-center gap-2">
      <span className="block h-px w-8 bg-gradient-to-r from-[#c8973a] to-transparent" />
      <span className="block w-1 h-1 rotate-45 flex-shrink-0 bg-[#c8973a] opacity-50" />
    </div>
  </div>
);

const Footer = () => {
  const isDevelopment = import.meta.env.MODE === 'development';
  const backendUrl = isDevelopment
    ? import.meta.env.VITE_BACKEND_URL_D
    : import.meta.env.VITE_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/user/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        event.target.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("⚠️ " + data.message);
      }
    } catch (error) {
      alert("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: <IconEmail />, label: "Email", href: "mailto:info@ddollylamb.com" },
    { icon: <IconFacebook />, label: "Facebook", href: "#" },
    { icon: <IconInstagram />, label: "Instagram", href: "#" },
    { icon: <IconTwitter />, label: "X / Twitter", href: "#" },
  ];

  const trustBadges = [
    { icon: "✦", text: "Grade A Lambskin" },
    { icon: "◈", text: "Handcrafted Quality" },
    { icon: "◆", text: "Est. 2001" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0d0703] to-[#1a0f0a] border-t border-[rgba(200,151,58,0.18)] font-serif">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes checkIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ft-anim-1 { animation: fadeUp 0.5s ease 0.05s both; }
        .ft-anim-2 { animation: fadeUp 0.5s ease 0.12s both; }
        .ft-anim-3 { animation: fadeUp 0.5s ease 0.19s both; }
        .ft-anim-4 { animation: fadeUp 0.5s ease 0.26s both; }
        .ft-anim-5 { animation: fadeUp 0.5s ease 0.33s both; }
        .ft-anim-6 { animation: fadeUp 0.5s ease 0.40s both; }
        .ft-success { animation: checkIn 0.4s ease both; }
        .marquee-track { animation: marqueeScroll 25s linear infinite; }
      `}</style>

      {/* ── TOP GOLD LINE ── */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-60" />

      {/* ── BRAND HERO ROW ── */}
      <div className="text-center py-12 px-6 border-b border-[rgba(200,151,58,0.1)]">
        {/* Diamond logo */}
        <div className="flex justify-center mb-4">
          <svg width="48" height="48" viewBox="0 0 42 42" fill="none">
            <rect x="6" y="6" width="30" height="30" rx="1"
              transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
            <rect x="11" y="11" width="20" height="20" rx="0.5"
              transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
            <text x="21" y="26.5" fontFamily="Montserrat,sans-serif" fontSize="13"
              fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
          </svg>
        </div>

        <h2
          className="font-serif font-normal text-[#f7c568] tracking-[0.08em] m-0 mb-1.5"
          style={{ fontSize: "clamp(1.6rem,4vw,2.8rem)" }}
        >
          D DOLLY <span className="text-[#f5ede0]">LAMB</span>
        </h2>

        <p className="text-[9px] tracking-[0.45em] text-[#c8973a] mb-4">
          ARTISAN LEATHER ATELIER · EST. 2001
        </p>

        <div className="flex items-center justify-center gap-3">
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-[rgba(200,151,58,0.4)]" />
          <span className="block w-1.5 h-1.5 rotate-45 flex-shrink-0 bg-[#c8973a]" />
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-[rgba(200,151,58,0.4)]" />
        </div>
      </div>

      {/* ── MAIN LINK GRID ── */}
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">

          {/* INFO */}
          <div className="ft-anim-1">
            <ColHeading>Info</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/orders">Shipping &amp; Returns</FooterLink></li>
              <li><FooterLink to="/about">Our Quality</FooterLink></li>
              <li><FooterLink to="#">Leather Waxing</FooterLink></li>
              <li><FooterLink to="#">Sizing Chart</FooterLink></li>
              <li><FooterLink to="/bestseller">Best Sellers</FooterLink></li>
            </ul>
          </div>

          {/* WOMEN */}
          <div className="ft-anim-2">
            <ColHeading>Women's</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/collection?category=Women&sub=Bomber%20Biker%20Jacket">Bomber Biker Jacket</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Moto%20Biker%20Jacket">Moto Biker Jacket</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Racing%20Coat">Racing Coat</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Women%20Winter%20Wear">Women Winter Wear</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Women%20Night%20Dress">Women Night Dress</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Leather%20Pencil%20Skirt">Leather Pencil Skirt</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Leather%20Full%20Skirt">Leather Full Skirt</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Slim%20Bodycon%20Skirt">Slim Bodycon Skirt</FooterLink></li>
            </ul>
          </div>

          {/* MEN */}
          <div className="ft-anim-3">
            <ColHeading>Men's</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/collection?category=Men&sub=Biker%20Jacket">Biker Jacket</FooterLink></li>
              <li><FooterLink to="/collection?category=Men&sub=Bomber%20Biker%20Jacket">Bomber Biker Jacket</FooterLink></li>
              <li><FooterLink to="/collection?category=Men&sub=Moto%20Biker%20Jacket">Moto Biker Jacket</FooterLink></li>
            </ul>
          </div>

          {/* OTHERS */}
          <div className="ft-anim-4">
            <ColHeading>Others</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/collection?category=Others&sub=Pillow">Pillow Covers</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Cushion Cover">Cushion Cover</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Aprons">Aprons</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Desk Mat">Desk Mat</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Chair Cover">Chair Cover</FooterLink></li>
            </ul>
          </div>

          {/* NEW ARRIVALS */}
          <div className="ft-anim-5">
            <ColHeading>New Arrivals</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink href="/collection?category=Men&sub=Topwear">Men's New Arrivals</FooterLink></li>
              <li><FooterLink href="/collection?category=Women&sub=Topwear">Women's New Arrivals</FooterLink></li>
            </ul>

            {/* Trust badges */}
            <div className="mt-8 space-y-3">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[8px] text-[#c8973a]">{b.icon}</span>
                  <span className="text-[10px] text-[#5a4030] tracking-[0.1em] font-serif">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="ft-anim-6">
            <ColHeading>Newsletter</ColHeading>
            <p className="text-xs text-[#5a4030] italic leading-[1.75] mb-4">
              Join our inner circle for early access to new drops, private sales &amp; artisan stories.
            </p>

            {submitted ? (
              <div className="ft-success flex items-center gap-2 text-[11px] text-[#c8973a] italic font-serif py-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" />
                  <path d="M7 12l4 4 6-7" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You're on the list!
              </div>
            ) : (
              <form onSubmit={onSubmitHandler} className="relative mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  required
                  className="w-full py-[11px] pl-4 pr-11 bg-[rgba(255,255,255,0.03)] border border-[rgba(200,151,58,0.2)] rounded-sm text-[#f5ede0] text-xs font-serif italic outline-none tracking-[0.04em] transition-all duration-300 placeholder:text-[#5a4030] focus:border-[#c8973a] focus:shadow-[0_0_0_3px_rgba(200,151,58,0.08)]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-0 top-0 bottom-0 px-3.5 bg-gradient-to-br from-[#c8973a] to-[#f7c568] border-none rounded-r-sm text-[#1a0f0a] cursor-pointer flex items-center justify-center transition-all duration-200 hover:opacity-90 hover:translate-x-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? <span className="text-[10px] tracking-[0.1em]">...</span>
                    : <IconArrow />
                  }
                </button>
              </form>
            )}

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-[rgba(200,151,58,0.22)] rounded-sm flex items-center justify-center text-[#7a6050] transition-all duration-300 no-underline hover:border-[#c8973a] hover:text-[#f7c568] hover:bg-[rgba(200,151,58,0.08)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(200,151,58,0.15)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-[rgba(200,151,58,0.12)]">

        {/* Marquee strip */}
        <div className="overflow-hidden border-b border-[rgba(200,151,58,0.08)] py-2.5">
          <div className="inline-block whitespace-nowrap marquee-track">
            {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  EST. 2001  ◆  D DOLLY LAMB  ").map((t, i) => (
              <span key={i} className="text-[9px] tracking-[0.22em] text-[rgba(200,151,58,0.55)] font-serif">{t}</span>
            ))}
          </div>
        </div>

        {/* Copyright row */}
        <div className="w-[95%] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#8a6040] tracking-[0.14em] font-serif">
            COPYRIGHT © 2025 <span className="text-[#c8973a]">DDOLLYLAMB.COM</span> — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-[9px] text-[#8a6040] tracking-[0.14em] no-underline font-serif transition-colors duration-200 hover:text-[#f7c568]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;