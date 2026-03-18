// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// /* ── Animated Counter ──────────────────────────── */
// const AnimatedCounter = ({ end, suffix = "", duration = 1800 }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !started.current) {
//           started.current = true;
//           const isInfinity = end === "∞";
//           if (isInfinity) { setCount("∞"); return; }

//           const numEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));
//           const hasComma = String(end).includes(",");
//           let startTime = null;

//           const step = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
//             const eased = 1 - Math.pow(1 - progress, 3);
//             const current = Math.floor(eased * numEnd);
//             setCount(hasComma ? current.toLocaleString() : current);
//             if (progress < 1) requestAnimationFrame(step);
//             else setCount(hasComma ? numEnd.toLocaleString() : numEnd);
//           };
//           requestAnimationFrame(step);
//         }
//       },
//       { threshold: 0.4 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [end, duration]);

//   return <span ref={ref}>{count}{suffix}</span>;
// };

// const Hero1 = () => {
//   const [visible, setVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     setTimeout(() => setVisible(true), 100);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => setActiveFeature((prev) => (prev + 1) % 4), 3500);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % 3), 4000);
//     return () => clearInterval(t);
//   }, []);

//   const features = [
//     { label: "HAND-STITCHED", sub: "Artisan Craft" },
//     { label: "LAMBSKIN", sub: "Premium Hide" },
//     { label: "BESPOKE FIT", sub: "Made to Order" },
//     { label: "HERITAGE", sub: "Since 2001" },
//   ];

//   const collections = [
//     { title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men" },
//     { title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women" },
//     { title: "COLLECTION", subtitle: "Limited Edition", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection" },
//   ];

//   const testimonials = [
//     { quote: "The finest lambskin I've worn — supple on day one.", name: "James H.", location: "London" },
//     { quote: "Worth every penny. A jacket that ages like fine wine.", name: "Sofia R.", location: "Milan" },
//     { quote: "Exceptional quality, impeccable fit, unmatched luxury.", name: "Marcus T.", location: "New York" },
//   ];

//   const stats = [
//     { end: 22, suffix: "+", label: "Years of Craft", desc: "Two decades perfecting the art of leather tailoring" },
//     { end: 100, suffix: "%", label: "Pure Lambskin", desc: "Sourced from the finest tanneries across Europe" },
//     { end: "3,200", suffix: "+", label: "Happy Clients", desc: "Worn by discerning individuals across 45 countries" },
//     { end: "∞", suffix: "", label: "Lifetime Quality", desc: "Each jacket built to outlast trends and seasons" },
//   ];

//   return (
//     <div style={{ background: "#1a0f0a", color: "#f5ede0", fontFamily: "'Georgia', serif", overflowX: "hidden" }}>

//       {/* ── HERO ── */}
//       <section style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0d0703 0%, #1a0f0a 40%, #2d1408 70%, #0d0703 100%)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
//         <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.6, zIndex: 1, pointerEvents: "none" }} />
//         <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(135deg, transparent 60%, rgba(200,151,58,0.06) 100%)", zIndex: 1 }} />
//         <div style={{ position: "absolute", left: "7%", top: "20%", height: "60%", width: "1px", background: "linear-gradient(to bottom, transparent, #c8973a55, transparent)", zIndex: 2 }} />

//         <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "1100px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}>
//           <div style={{ display: "inline-flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
//             <span style={{ width: "40px", height: "1px", background: "#c8973a" }} />
//             <span style={{ fontSize: "11px", letterSpacing: "0.35em", color: "#c8973a", fontFamily: "Arial", fontWeight: 600 }}>ARTISAN LEATHER ATELIER</span>
//             <span style={{ width: "40px", height: "1px", background: "#c8973a" }} />
//           </div>
//           <h1 style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#f7c568", margin: 0, fontWeight: 400 }}>
//             D&nbsp;DOLLY<br />
//             <span style={{ color: "#f5ede0", fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "0.22em", display: "block", marginTop: "8px" }}>LAMB</span>
//           </h1>
//           <div style={{ margin: "28px auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
//             <span style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to right, transparent, #c8973a)" }} />
//             <span style={{ width: "6px", height: "6px", background: "#c8973a", transform: "rotate(45deg)" }} />
//             <span style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to left, transparent, #c8973a)" }} />
//           </div>
//           <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "#d4b896", lineHeight: 1.7, letterSpacing: "0.04em", fontStyle: "italic", marginBottom: "44px" }}>
//             Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
//           </p>
//           <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
//             <Link to="/collection" style={{ display: "inline-block", padding: "16px 48px", background: "linear-gradient(135deg, #c8973a, #f7c568)", color: "#1a0f0a", textDecoration: "none", letterSpacing: "0.18em", fontSize: "12px", fontFamily: "Arial", fontWeight: 700, transition: "all 0.3s" }}
//               onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(200,151,58,0.4)"; }}
//               onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>
//               SHOP THE COLLECTION
//             </Link>
//             <Link to="/about" style={{ display: "inline-block", padding: "16px 48px", background: "transparent", color: "#f7c568", textDecoration: "none", letterSpacing: "0.18em", fontSize: "12px", fontFamily: "Arial", fontWeight: 600, border: "1px solid #c8973a55", transition: "all 0.3s" }}
//               onMouseEnter={e => { e.target.style.borderColor = "#c8973a"; e.target.style.background = "rgba(200,151,58,0.08)"; }}
//               onMouseLeave={e => { e.target.style.borderColor = "#c8973a55"; e.target.style.background = "transparent"; }}>
//               OUR STORY
//             </Link>
//           </div>
//         </div>

//         <div style={{ position: "absolute", bottom: "80px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.7 }}>
//           <span style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Arial" }}>SCROLL</span>
//           <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, #c8973a, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
//         </div>

//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(200,151,58,0.1)", borderTop: "1px solid rgba(200,151,58,0.2)", padding: "14px 0", zIndex: 10, display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
//           {features.map((f, i) => (
//             <div key={i} style={{ textAlign: "center", opacity: activeFeature === i ? 1 : 0.45, transition: "opacity 0.5s" }}>
//               <div style={{ fontSize: "10px", letterSpacing: "0.28em", color: "#f7c568", fontFamily: "Arial", fontWeight: 700 }}>{f.label}</div>
//               <div style={{ fontSize: "9px", color: "#c8973a", letterSpacing: "0.15em", fontFamily: "Arial" }}>{f.sub}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── MARQUEE ── */}
//       <div style={{ background: "#c8973a", overflow: "hidden", padding: "13px 0", whiteSpace: "nowrap" }}>
//         <div style={{ display: "inline-block", animation: "marquee 20s linear infinite" }}>
//           {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
//             <span key={i} style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#1a0f0a", fontFamily: "Arial", fontWeight: 700 }}>{t}</span>
//           ))}
//         </div>
//       </div>

//       {/* ── COLLECTIONS ── */}
//       <section style={{ padding: "100px 5% 80px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
//           <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8973a", fontFamily: "Arial", marginBottom: "16px" }}>CURATED FOR YOU</p>
//           <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f7c568", fontWeight: 400, margin: 0, letterSpacing: "0.05em" }}>Shop by Category</h2>
//           <div style={{ width: "60px", height: "2px", background: "#c8973a", margin: "20px auto 0" }} />
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
//           {collections.map((col, i) => (
//             <Link key={i} to={col.href} style={{ textDecoration: "none" }}>
//               <div style={{ position: "relative", background: i === 0 ? "linear-gradient(145deg,#2d1408,#1a0f0a)" : i === 1 ? "linear-gradient(145deg,#1a0f0a,#0d0703)" : "linear-gradient(145deg,#231209,#1a0f0a)", border: "1px solid rgba(200,151,58,0.2)", padding: "60px 40px", minHeight: "320px", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", transition: "all 0.4s ease" }}
//                 onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8973a"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.2)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
//                 <span style={{ position: "absolute", top: "24px", left: "24px", fontSize: "9px", letterSpacing: "0.3em", color: "#1a0f0a", background: "#c8973a", padding: "4px 12px", fontFamily: "Arial", fontWeight: 700 }}>{col.tag}</span>
//                 <div style={{ position: "absolute", top: "20px", right: "30px", fontSize: "7rem", color: "rgba(200,151,58,0.06)", fontFamily: "Georgia", lineHeight: 1 }}>0{i + 1}</div>
//                 <div>
//                   <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Arial", marginBottom: "8px" }}>{col.subtitle}</p>
//                   <h3 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#f7c568", fontWeight: 400, margin: "0 0 14px", letterSpacing: "0.06em" }}>{col.title}</h3>
//                   <p style={{ fontSize: "13px", color: "#a08060", fontStyle: "italic", marginBottom: "24px", lineHeight: 1.5 }}>{col.desc}</p>
//                   <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", letterSpacing: "0.2em", color: "#f7c568", fontFamily: "Arial" }}>EXPLORE →</div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ── STATS WITH COUNTER ANIMATION ── */}
//       <section style={{ background: "linear-gradient(135deg,#0d0703 0%,#1a0f0a 50%,#2d1408 100%)", padding: "80px 5%", borderTop: "1px solid rgba(200,151,58,0.15)", borderBottom: "1px solid rgba(200,151,58,0.15)" }}>
//         <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//           {stats.map((stat, i) => (
//             <div key={i} className="group flex flex-col items-center gap-2">
//               {/* Top accent line — expands on hover */}
//               <div className="h-px mb-2 transition-all duration-500 w-8 group-hover:w-16"
//                 style={{ background: "linear-gradient(to right,transparent,#c8973a,transparent)" }} />

//               {/* Animated number */}
//               <div style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "#f7c568", fontFamily: "Georgia", lineHeight: 1, fontWeight: 400 }}>
//                 <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
//               </div>

//               {/* Label */}
//               <div className="text-xs tracking-widest font-bold mt-1" style={{ letterSpacing: "0.25em", color: "#c8973a", fontFamily: "Arial" }}>
//                 {stat.label}
//               </div>

//               {/* Description */}
//               <p className="text-xs leading-relaxed italic mt-1" style={{ color: "#7a6050", maxWidth: "180px" }}>
//                 {stat.desc}
//               </p>

//               {/* Bottom accent */}
//               <div className="h-px mt-2 transition-all duration-700 w-4 group-hover:w-12"
//                 style={{ background: "rgba(200,151,58,0.3)" }} />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US ── */}
//       <section style={{ padding: "100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
//           <div>
//             <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8973a", fontFamily: "Arial", marginBottom: "16px" }}>THE D DOLLY LAMB DIFFERENCE</p>
//             <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", color: "#f7c568", fontWeight: 400, lineHeight: 1.2, marginBottom: "24px" }}>Where Leather Becomes Legend</h2>
//             <p style={{ color: "#a08060", lineHeight: 1.9, fontSize: "15px", marginBottom: "36px", fontStyle: "italic" }}>
//               Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//               {["Hand-selected Grade A lambskin hides", "Bespoke sizing available on all styles", "Antique brass & gunmetal hardware options", "Complimentary lifetime conditioning service"].map((item, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//                   <span style={{ width: "6px", height: "6px", background: "#c8973a", transform: "rotate(45deg)", flexShrink: 0 }} />
//                   <span style={{ fontSize: "13px", color: "#d4b896", letterSpacing: "0.04em" }}>{item}</span>
//                 </div>
//               ))}
//             </div>
//             <Link to="/about" style={{ display: "inline-block", marginTop: "40px", padding: "14px 40px", border: "1px solid #c8973a", color: "#f7c568", textDecoration: "none", fontSize: "11px", letterSpacing: "0.22em", fontFamily: "Arial", fontWeight: 600, transition: "all 0.3s" }}
//               onMouseEnter={e => { e.target.style.background = "#c8973a"; e.target.style.color = "#1a0f0a"; }}
//               onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#f7c568"; }}>
//               LEARN MORE
//             </Link>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
//             {[{ bg: "#2d1408", label: "Lambskin", sub: "PREMIUM HIDE" }, { bg: "#1a0f0a", label: "Artisan", sub: "HAND CRAFTED" }, { bg: "#0d0703", label: "Fit", sub: "BESPOKE CUT" }, { bg: "#231209", label: "Heritage", sub: "EST. 2001" }].map((box, i) => (
//               <div key={i} style={{ background: box.bg, border: "1px solid rgba(200,151,58,0.15)", padding: "40px 24px", textAlign: "center", transition: "border-color 0.3s" }}
//                 onMouseEnter={e => (e.currentTarget.style.borderColor = "#c8973a")}
//                 onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(200,151,58,0.15)")}>
//                 <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Arial", marginBottom: "10px" }}>{box.sub}</p>
//                 <p style={{ fontSize: "1.3rem", color: "#f7c568", fontFamily: "Georgia" }}>{box.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ── */}
//       <section style={{ background: "#0d0703", borderTop: "1px solid rgba(200,151,58,0.15)", padding: "80px 5%", textAlign: "center" }}>
//         <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8973a", fontFamily: "Arial", marginBottom: "16px" }}>CLIENT VOICES</p>
//         <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "#f7c568", fontWeight: 400, marginBottom: "48px" }}>What Our Clients Say</h2>
//         <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "120px" }}>
//           <p style={{ fontSize: "clamp(1rem,2vw,1.3rem)", color: "#d4b896", fontStyle: "italic", lineHeight: 1.7, marginBottom: "24px" }}>
//             "{testimonials[activeTestimonial].quote}"
//           </p>
//           <p style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#c8973a", fontFamily: "Arial" }}>
//             — {testimonials[activeTestimonial].name},{" "}
//             <span style={{ color: "#7a6050" }}>{testimonials[activeTestimonial].location}</span>
//           </p>
//         </div>
//         <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
//           {testimonials.map((_, i) => (
//             <button key={i} onClick={() => setActiveTestimonial(i)}
//               style={{ width: i === activeTestimonial ? "28px" : "8px", height: "8px", border: "none", background: i === activeTestimonial ? "#c8973a" : "#3d2010", cursor: "pointer", transition: "all 0.3s" }} />
//           ))}
//         </div>
//       </section>

//       <style>{`
//         @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//         @keyframes scrollPulse { 0%,100% { opacity:1; transform:scaleY(1); } 50% { opacity:0.4; transform:scaleY(0.7); } }
//         * { box-sizing: border-box; }
//       `}</style>
//     </div>
//   );
// };

// export default Hero1;



import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ── Animated Counter ──────────────────────────── */
const AnimatedCounter = ({ end, suffix = "", duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isInfinity = end === "∞";
          if (isInfinity) { setCount("∞"); return; }

          const numEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));
          const hasComma = String(end).includes(",");
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numEnd);
            setCount(hasComma ? current.toLocaleString() : current);
            if (progress < 1) requestAnimationFrame(step);
            else setCount(hasComma ? numEnd.toLocaleString() : numEnd);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero1 = () => {
  const [visible, setVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveFeature((p) => (p + 1) % 4), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  const features = [
    { label: "HAND-STITCHED", sub: "Artisan Craft" },
    { label: "LAMBSKIN", sub: "Premium Hide" },
    { label: "BESPOKE FIT", sub: "Made to Order" },
    { label: "HERITAGE", sub: "Since 2001" },
  ];

  const collections = [
    { title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men" },
    { title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women" },
    { title: "COLLECTION", subtitle: "Limited Edition", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection" },
  ];

  const testimonials = [
    { quote: "The finest lambskin I've worn — supple on day one.", name: "James H.", location: "London" },
    { quote: "Worth every penny. A jacket that ages like fine wine.", name: "Sofia R.", location: "Milan" },
    { quote: "Exceptional quality, impeccable fit, unmatched luxury.", name: "Marcus T.", location: "New York" },
  ];

  const stats = [
    { end: 22, suffix: "+", label: "Years of Craft", desc: "Two decades perfecting the art of leather tailoring" },
    { end: 100, suffix: "%", label: "Pure Lambskin", desc: "Sourced from the finest tanneries across Europe" },
    { end: "3,200", suffix: "+", label: "Happy Clients", desc: "Worn by discerning individuals across 45 countries" },
    { end: "∞", suffix: "", label: "Lifetime Quality", desc: "Each jacket built to outlast trends and seasons" },
  ];

  const whyItems = [
    "Hand-selected Grade A lambskin hides",
    "Bespoke sizing available on all styles",
    "Antique brass & gunmetal hardware options",
    "Complimentary lifetime conditioning service",
  ];

  const craftBoxes = [
    { bg: "bg-[#2d1408]", label: "Lambskin", sub: "PREMIUM HIDE" },
    { bg: "bg-[#1a0f0a]", label: "Artisan", sub: "HAND CRAFTED" },
    { bg: "bg-[#0d0703]", label: "Fit", sub: "BESPOKE CUT" },
    { bg: "bg-[#231209]", label: "Heritage", sub: "EST. 2001" },
  ];

  return (
    <div className="bg-[#1a0f0a] text-[#f5ede0] font-serif overflow-x-hidden">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#0d0703] via-[#1a0f0a] to-[#2d1408]">

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-60"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")" }}
        />

        {/* Right gold glow */}
        <div className="absolute top-0 right-0 w-2/5 h-full z-[1] bg-gradient-to-br from-transparent to-[rgba(200,151,58,0.06)]" />

        {/* Left vertical gold line */}
        <div className="absolute left-[7%] top-[20%] h-[60%] w-px z-[2] bg-gradient-to-b from-transparent via-[#c8973a55] to-transparent" />

        {/* Hero content */}
        <div
          className={`relative z-10 text-center px-6 max-w-[1100px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3.5 mb-7">
            <span className="w-10 h-px bg-[#c8973a]" />
            <span className="text-[11px] tracking-[0.35em] text-[#c8973a] font-sans font-semibold">
              ARTISAN LEATHER ATELIER
            </span>
            <span className="w-10 h-px bg-[#c8973a]" />
          </div>

          {/* Brand name */}
          <h1 className="leading-[0.9] tracking-[-0.02em] text-[#f7c568] m-0 font-normal"
            style={{ fontSize: "clamp(3.5rem,12vw,10rem)" }}>
            D&nbsp;DOLLY
            <span className="block text-[#f5ede0] tracking-[0.22em] mt-2"
              style={{ fontSize: "clamp(2rem,6vw,5rem)" }}>
              LAMB
            </span>
          </h1>

          {/* Gold diamond divider */}
          <div className="my-7 flex items-center justify-center gap-3.5">
            <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#c8973a]" />
            <span className="w-1.5 h-1.5 bg-[#c8973a] rotate-45" />
            <span className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#c8973a]" />
          </div>

          {/* Tagline */}
          <p className="text-[#d4b896] leading-[1.7] tracking-[0.04em] italic mb-11"
            style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}>
            Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
          </p>

          {/* CTA buttons */}
          <div className="flex gap-5 justify-center flex-wrap">
            <Link
              to="/collection"
              className="inline-block px-12 py-4 bg-gradient-to-br from-[#c8973a] to-[#f7c568] text-[#1a0f0a] no-underline tracking-[0.18em] text-xs font-sans font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,151,58,0.4)]"
            >
              SHOP THE COLLECTION
            </Link>
            <Link
              to="/about"
              className="inline-block px-12 py-4 bg-transparent text-[#f7c568] no-underline tracking-[0.18em] text-xs font-sans font-semibold border border-[rgba(200,151,58,0.33)] transition-all duration-300 hover:border-[#c8973a] hover:bg-[rgba(200,151,58,0.08)]"
            >
              OUR STORY
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
          <span className="text-[9px] tracking-[0.3em] text-[#c8973a] font-sans">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c8973a] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>

        {/* Feature ticker */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center gap-16 flex-wrap px-4 py-3.5 bg-[rgba(200,151,58,0.1)] border-t border-[rgba(200,151,58,0.2)]">
          {features.map((f, i) => (
            <div
              key={i}
              className="text-center transition-opacity duration-500"
              style={{ opacity: activeFeature === i ? 1 : 0.45 }}
            >
              <div className="text-[10px] tracking-[0.28em] text-[#f7c568] font-sans font-bold">{f.label}</div>
              <div className="text-[9px] text-[#c8973a] tracking-[0.15em] font-sans">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="bg-[#c8973a] overflow-hidden py-3 whitespace-nowrap">
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
            <span key={i} className="text-[11px] tracking-[0.2em] text-[#1a0f0a] font-sans font-bold">{t}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          COLLECTIONS
      ════════════════════════════════════════ */}
      <section className="px-[5%] pt-24 pb-20 max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] text-[#c8973a] font-sans mb-4">CURATED FOR YOU</p>
          <h2 className="text-[#f7c568] font-normal m-0 tracking-[0.05em]"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
            Shop by Category
          </h2>
          <div className="w-14 h-0.5 bg-[#c8973a] mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          {collections.map((col, i) => (
            <Link key={i} to={col.href} className="no-underline">
              <div
                className={`relative flex flex-col justify-end min-h-[320px] p-10 overflow-hidden transition-all duration-400 border border-[rgba(200,151,58,0.2)] hover:border-[#c8973a] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${i === 0 ? "bg-gradient-to-br from-[#2d1408] to-[#1a0f0a]"
                  : i === 1 ? "bg-gradient-to-br from-[#1a0f0a] to-[#0d0703]"
                    : "bg-gradient-to-br from-[#231209] to-[#1a0f0a]"
                  }`}
              >
                {/* Tag badge */}
                <span className="absolute top-6 left-6 text-[9px] tracking-[0.3em] text-[#1a0f0a] bg-[#c8973a] px-3 py-1 font-sans font-bold">
                  {col.tag}
                </span>

                {/* Ghost number */}
                <div className="absolute top-5 right-7 text-[7rem] text-[rgba(200,151,58,0.06)] font-serif leading-none">
                  0{i + 1}
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.3em] text-[#c8973a] font-sans mb-2">{col.subtitle}</p>
                  <h3 className="text-[#f7c568] font-normal m-0 mb-3.5 tracking-[0.06em]"
                    style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
                    {col.title}
                  </h3>
                  <p className="text-sm text-[#a08060] italic mb-6 leading-relaxed">{col.desc}</p>
                  <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] text-[#f7c568] font-sans">
                    EXPLORE →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <section className="px-[5%] py-20 bg-gradient-to-br from-[#0d0703] via-[#1a0f0a] to-[#2d1408] border-t border-b border-[rgba(200,151,58,0.15)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="group flex flex-col items-center gap-2">
              <div className="h-px mb-2 transition-all duration-500 w-8 group-hover:w-16 bg-gradient-to-r from-transparent via-[#c8973a] to-transparent" />

              <div className="text-[#f7c568] font-serif font-normal leading-none"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
              </div>

              <div className="text-xs font-bold mt-1 tracking-[0.25em] text-[#c8973a] font-sans">
                {stat.label}
              </div>

              <p className="text-xs leading-relaxed italic mt-1 text-[#7a6050] max-w-[180px]">
                {stat.desc}
              </p>

              <div className="h-px mt-2 transition-all duration-700 w-4 group-hover:w-12 bg-[rgba(200,151,58,0.3)]" />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════ */}
      <section className="px-[5%] py-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left copy */}
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#c8973a] font-sans mb-4">
              THE D DOLLY LAMB DIFFERENCE
            </p>
            <h2 className="text-[#f7c568] font-normal leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
              Where Leather Becomes Legend
            </h2>
            <p className="text-[#a08060] leading-[1.9] text-[15px] mb-9 italic">
              Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
            </p>

            <div className="flex flex-col gap-5">
              {whyItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <span className="w-1.5 h-1.5 bg-[#c8973a] rotate-45 flex-shrink-0" />
                  <span className="text-[13px] text-[#d4b896] tracking-[0.04em]">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-block mt-10 px-10 py-3.5 border border-[#c8973a] text-[#f7c568] no-underline text-[11px] tracking-[0.22em] font-sans font-semibold transition-all duration-300 hover:bg-[#c8973a] hover:text-[#1a0f0a]"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Right craft grid */}
          <div className="grid grid-cols-2 gap-0.5">
            {craftBoxes.map((box, i) => (
              <div
                key={i}
                className={`${box.bg} border border-[rgba(200,151,58,0.15)] px-6 py-10 text-center transition-all duration-300 hover:border-[#c8973a]`}
              >
                <p className="text-[9px] tracking-[0.3em] text-[#c8973a] font-sans mb-2.5">{box.sub}</p>
                <p className="text-[1.3rem] text-[#f7c568] font-serif">{box.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="bg-[#0d0703] border-t border-[rgba(200,151,58,0.15)] px-[5%] py-20 text-center">
        <p className="text-[10px] tracking-[0.4em] text-[#c8973a] font-sans mb-4">CLIENT VOICES</p>
        <h2 className="text-[#f7c568] font-normal mb-12"
          style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>
          What Our Clients Say
        </h2>

        <div className="max-w-[600px] mx-auto min-h-[120px]">
          <p className="text-[#d4b896] italic leading-[1.7] mb-6"
            style={{ fontSize: "clamp(1rem,2vw,1.3rem)" }}>
            "{testimonials[activeTestimonial].quote}"
          </p>
          <p className="text-xs tracking-[0.2em] text-[#c8973a] font-sans">
            — {testimonials[activeTestimonial].name},{" "}
            <span className="text-[#7a6050]">{testimonials[activeTestimonial].location}</span>
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              className={`h-2 border-none cursor-pointer transition-all duration-300 ${i === activeTestimonial ? "w-7 bg-[#c8973a]" : "w-2 bg-[#3d2010]"
                }`}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          GLOBAL KEYFRAMES
      ════════════════════════════════════════ */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1;   transform: scaleY(1);   }
          50%       { opacity: 0.4; transform: scaleY(0.7); }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
};

export default Hero1;