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

//   useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

//   useEffect(() => {
//     const t = setInterval(() => setActiveFeature((p) => (p + 1) % 4), 3500);
//     return () => clearInterval(t);
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

//   const whyItems = [
//     "Hand-selected Grade A lambskin hides",
//     "Bespoke sizing available on all styles",
//     "Antique brass & gunmetal hardware options",
//     "Complimentary lifetime conditioning service",
//   ];

//   const craftBoxes = [
//     { bg: "bg-[#2d1408]", label: "Lambskin", sub: "PREMIUM HIDE" },
//     { bg: "bg-[#1a0f0a]", label: "Artisan", sub: "HAND CRAFTED" },
//     { bg: "bg-[#0d0703]", label: "Fit", sub: "BESPOKE CUT" },
//     { bg: "bg-[#231209]", label: "Heritage", sub: "EST. 2001" },
//   ];

//   return (
//     <div className="bg-[#1a0f0a] text-[#f5ede0] font-serif overflow-x-hidden">

//       {/* ════════════════════════════════════════
//           HERO
//       ════════════════════════════════════════ */}
//       <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#0d0703] via-[#1a0f0a] to-[#2d1408]">

//         {/* Noise texture overlay */}
//         <div
//           className="absolute inset-0 z-[1] pointer-events-none opacity-60"
//           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")" }}
//         />

//         {/* Right gold glow */}
//         <div className="absolute top-0 right-0 w-2/5 h-full z-[1] bg-gradient-to-br from-transparent to-[rgba(200,151,58,0.06)]" />

//         {/* Left vertical gold line */}
//         <div className="absolute left-[7%] top-[20%] h-[60%] w-px z-[2] bg-gradient-to-b from-transparent via-[#c8973a55] to-transparent" />

//         {/* Hero content */}
//         <div
//           className={`relative z-10 text-center px-6 max-w-[1100px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//         >
//           {/* Eyebrow */}
//           <div className="inline-flex items-center gap-3.5 mb-7">
//             <span className="w-10 h-px bg-[#c8973a]" />
//             <span className="text-[11px] tracking-[0.35em] text-[#c8973a] font-sans font-semibold">
//               ARTISAN LEATHER ATELIER
//             </span>
//             <span className="w-10 h-px bg-[#c8973a]" />
//           </div>

//           {/* Brand name */}
//           <h1 className="leading-[0.9] tracking-[-0.02em] text-[#f7c568] m-0 font-normal"
//             style={{ fontSize: "clamp(3.5rem,12vw,10rem)" }}>
//             D&nbsp;DOLLY
//             <span className="block text-[#f5ede0] tracking-[0.22em] mt-2"
//               style={{ fontSize: "clamp(2rem,6vw,5rem)" }}>
//               LAMB
//             </span>
//           </h1>

//           {/* Gold diamond divider */}
//           <div className="my-7 flex items-center justify-center gap-3.5">
//             <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#c8973a]" />
//             <span className="w-1.5 h-1.5 bg-[#c8973a] rotate-45" />
//             <span className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#c8973a]" />
//           </div>

//           {/* Tagline */}
//           <p className="text-[#d4b896] leading-[1.7] tracking-[0.04em] italic mb-11"
//             style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}>
//             Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
//           </p>

//           {/* CTA buttons */}
//           <div className="flex gap-5 justify-center flex-wrap">
//             <Link
//               to="/collection"
//               className="inline-block px-12 py-4 bg-gradient-to-br from-[#c8973a] to-[#f7c568] text-[#1a0f0a] no-underline tracking-[0.18em] text-xs font-sans font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,151,58,0.4)]"
//             >
//               SHOP THE COLLECTION
//             </Link>
//             <Link
//               to="/about"
//               className="inline-block px-12 py-4 bg-transparent text-[#f7c568] no-underline tracking-[0.18em] text-xs font-sans font-semibold border border-[rgba(200,151,58,0.33)] transition-all duration-300 hover:border-[#c8973a] hover:bg-[rgba(200,151,58,0.08)]"
//             >
//               OUR STORY
//             </Link>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
//           <span className="text-[9px] tracking-[0.3em] text-[#c8973a] font-sans">SCROLL</span>
//           <div className="w-px h-12 bg-gradient-to-b from-[#c8973a] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
//         </div>

//         {/* Feature ticker */}
//         <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center gap-16 flex-wrap px-4 py-3.5 bg-[rgba(200,151,58,0.1)] border-t border-[rgba(200,151,58,0.2)]">
//           {features.map((f, i) => (
//             <div
//               key={i}
//               className="text-center transition-opacity duration-500"
//               style={{ opacity: activeFeature === i ? 1 : 0.45 }}
//             >
//               <div className="text-[10px] tracking-[0.28em] text-[#f7c568] font-sans font-bold">{f.label}</div>
//               <div className="text-[9px] text-[#c8973a] tracking-[0.15em] font-sans">{f.sub}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           MARQUEE
//       ════════════════════════════════════════ */}
//       <div className="bg-[#c8973a] overflow-hidden py-3 whitespace-nowrap">
//         <div className="inline-block animate-[marquee_20s_linear_infinite]">
//           {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
//             <span key={i} className="text-[11px] tracking-[0.2em] text-[#1a0f0a] font-sans font-bold">{t}</span>
//           ))}
//         </div>
//       </div>

//       {/* ════════════════════════════════════════
//           COLLECTIONS
//       ════════════════════════════════════════ */}
//       <section className="px-[5%] pt-24 pb-20 max-w-[1400px] mx-auto">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <p className="text-[10px] tracking-[0.4em] text-[#c8973a] font-sans mb-4">CURATED FOR YOU</p>
//           <h2 className="text-[#f7c568] font-normal m-0 tracking-[0.05em]"
//             style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
//             Shop by Category
//           </h2>
//           <div className="w-14 h-0.5 bg-[#c8973a] mx-auto mt-5" />
//         </div>

//         {/* Grid */}
//         <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
//           {collections.map((col, i) => (
//             <Link key={i} to={col.href} className="no-underline">
//               <div
//                 className={`relative flex flex-col justify-end min-h-[320px] p-10 overflow-hidden transition-all duration-400 border border-[rgba(200,151,58,0.2)] hover:border-[#c8973a] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${i === 0 ? "bg-gradient-to-br from-[#2d1408] to-[#1a0f0a]"
//                   : i === 1 ? "bg-gradient-to-br from-[#1a0f0a] to-[#0d0703]"
//                     : "bg-gradient-to-br from-[#231209] to-[#1a0f0a]"
//                   }`}
//               >
//                 {/* Tag badge */}
//                 <span className="absolute top-6 left-6 text-[9px] tracking-[0.3em] text-[#1a0f0a] bg-[#c8973a] px-3 py-1 font-sans font-bold">
//                   {col.tag}
//                 </span>

//                 {/* Ghost number */}
//                 <div className="absolute top-5 right-7 text-[7rem] text-[rgba(200,151,58,0.06)] font-serif leading-none">
//                   0{i + 1}
//                 </div>

//                 <div>
//                   <p className="text-[11px] tracking-[0.3em] text-[#c8973a] font-sans mb-2">{col.subtitle}</p>
//                   <h3 className="text-[#f7c568] font-normal m-0 mb-3.5 tracking-[0.06em]"
//                     style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
//                     {col.title}
//                   </h3>
//                   <p className="text-sm text-[#a08060] italic mb-6 leading-relaxed">{col.desc}</p>
//                   <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] text-[#f7c568] font-sans">
//                     EXPLORE →
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           STATS
//       ════════════════════════════════════════ */}
//       <section className="px-[5%] py-20 bg-gradient-to-br from-[#0d0703] via-[#1a0f0a] to-[#2d1408] border-t border-b border-[rgba(200,151,58,0.15)]">
//         <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//           {stats.map((stat, i) => (
//             <div key={i} className="group flex flex-col items-center gap-2">
//               <div className="h-px mb-2 transition-all duration-500 w-8 group-hover:w-16 bg-gradient-to-r from-transparent via-[#c8973a] to-transparent" />

//               <div className="text-[#f7c568] font-serif font-normal leading-none"
//                 style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
//                 <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
//               </div>

//               <div className="text-xs font-bold mt-1 tracking-[0.25em] text-[#c8973a] font-sans">
//                 {stat.label}
//               </div>

//               <p className="text-xs leading-relaxed italic mt-1 text-[#7a6050] max-w-[180px]">
//                 {stat.desc}
//               </p>

//               <div className="h-px mt-2 transition-all duration-700 w-4 group-hover:w-12 bg-[rgba(200,151,58,0.3)]" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           WHY CHOOSE US
//       ════════════════════════════════════════ */}
//       <section className="px-[5%] py-24 max-w-[1200px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

//           {/* Left copy */}
//           <div>
//             <p className="text-[10px] tracking-[0.4em] text-[#c8973a] font-sans mb-4">
//               THE D DOLLY LAMB DIFFERENCE
//             </p>
//             <h2 className="text-[#f7c568] font-normal leading-tight mb-6"
//               style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
//               Where Leather Becomes Legend
//             </h2>
//             <p className="text-[#a08060] leading-[1.9] text-[15px] mb-9 italic">
//               Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
//             </p>

//             <div className="flex flex-col gap-5">
//               {whyItems.map((item, i) => (
//                 <div key={i} className="flex items-center gap-3.5">
//                   <span className="w-1.5 h-1.5 bg-[#c8973a] rotate-45 flex-shrink-0" />
//                   <span className="text-[13px] text-[#d4b896] tracking-[0.04em]">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               to="/about"
//               className="inline-block mt-10 px-10 py-3.5 border border-[#c8973a] text-[#f7c568] no-underline text-[11px] tracking-[0.22em] font-sans font-semibold transition-all duration-300 hover:bg-[#c8973a] hover:text-[#1a0f0a]"
//             >
//               LEARN MORE
//             </Link>
//           </div>

//           {/* Right craft grid */}
//           <div className="grid grid-cols-2 gap-0.5">
//             {craftBoxes.map((box, i) => (
//               <div
//                 key={i}
//                 className={`${box.bg} border border-[rgba(200,151,58,0.15)] px-6 py-10 text-center transition-all duration-300 hover:border-[#c8973a]`}
//               >
//                 <p className="text-[9px] tracking-[0.3em] text-[#c8973a] font-sans mb-2.5">{box.sub}</p>
//                 <p className="text-[1.3rem] text-[#f7c568] font-serif">{box.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           TESTIMONIALS
//       ════════════════════════════════════════ */}
//       <section className="bg-[#0d0703] border-t border-[rgba(200,151,58,0.15)] px-[5%] py-20 text-center">
//         <p className="text-[10px] tracking-[0.4em] text-[#c8973a] font-sans mb-4">CLIENT VOICES</p>
//         <h2 className="text-[#f7c568] font-normal mb-12"
//           style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>
//           What Our Clients Say
//         </h2>

//         <div className="max-w-[600px] mx-auto min-h-[120px]">
//           <p className="text-[#d4b896] italic leading-[1.7] mb-6"
//             style={{ fontSize: "clamp(1rem,2vw,1.3rem)" }}>
//             "{testimonials[activeTestimonial].quote}"
//           </p>
//           <p className="text-xs tracking-[0.2em] text-[#c8973a] font-sans">
//             — {testimonials[activeTestimonial].name},{" "}
//             <span className="text-[#7a6050]">{testimonials[activeTestimonial].location}</span>
//           </p>
//         </div>

//         {/* Dot indicators */}
//         <div className="flex justify-center gap-2.5 mt-8">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTestimonial(i)}
//               className={`h-2 border-none cursor-pointer transition-all duration-300 ${i === activeTestimonial ? "w-7 bg-[#c8973a]" : "w-2 bg-[#3d2010]"
//                 }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           GLOBAL KEYFRAMES
//       ════════════════════════════════════════ */}
//       <style>{`
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scrollPulse {
//           0%, 100% { opacity: 1;   transform: scaleY(1);   }
//           50%       { opacity: 0.4; transform: scaleY(0.7); }
//         }
//         * { box-sizing: border-box; }
//       `}</style>
//     </div>
//   );
// };

// export default Hero1;



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

//   useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
//   useEffect(() => {
//     const t = setInterval(() => setActiveFeature((p) => (p + 1) % 4), 3500);
//     return () => clearInterval(t);
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
//     { title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men", accent: "#0EA5E9" },
//     { title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women", accent: "#6366F1" },
//     { title: "LIMITED", subtitle: "Edition Collection", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection", accent: "#EC4899" },
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

//   const whyItems = [
//     "Hand-selected Grade A lambskin hides",
//     "Bespoke sizing available on all styles",
//     "Antique brass & gunmetal hardware options",
//     "Complimentary lifetime conditioning service",
//   ];

//   const craftBoxes = [
//     { gradient: "linear-gradient(135deg,#EEF6FF,#DBEAFE)", accent: "#2563EB", label: "Lambskin", sub: "PREMIUM HIDE" },
//     { gradient: "linear-gradient(135deg,#F0F9FF,#E0F2FE)", accent: "#0EA5E9", label: "Artisan", sub: "HAND CRAFTED" },
//     { gradient: "linear-gradient(135deg,#EDE9FE,#DDD6FE)", accent: "#7C3AED", label: "Fit", sub: "BESPOKE CUT" },
//     { gradient: "linear-gradient(135deg,#FDF2F8,#FCE7F3)", accent: "#DB2777", label: "Heritage", sub: "EST. 2001" },
//   ];

//   return (
//     <div style={{ background: "#F8FAFF", color: "#0F172A", fontFamily: "'Georgia', serif", overflowX: "hidden" }}>

//       {/* ════ HERO ════ */}
//       <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", background: "linear-gradient(135deg, #EFF6FF 0%, #F8FAFF 40%, #EDE9FE 100%)" }}>

//         {/* Decorative blobs */}
//         <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "55%", height: "70%", borderRadius: "50% 30% 60% 40%", background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", bottom: "0", left: "-8%", width: "45%", height: "55%", borderRadius: "40% 60% 30% 70%", background: "radial-gradient(ellipse at center, rgba(14,165,233,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

//         {/* Grid overlay */}
//         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

//         {/* Left accent line */}
//         <div style={{ position: "absolute", left: "7%", top: "20%", height: "60%", width: "2px", background: "linear-gradient(to bottom, transparent, #6366F1, transparent)", borderRadius: "2px" }} />

//         {/* Hero content */}
//         <div
//           style={{
//             position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "1100px",
//             transition: "all 1200ms cubic-bezier(0.16,1,0.3,1)",
//             opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)"
//           }}
//         >
//           {/* Eyebrow pill */}
//           <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "28px", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "100px", padding: "8px 20px" }}>
//             <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6366F1", display: "inline-block" }} />
//             <span style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#6366F1", fontFamily: "sans-serif", fontWeight: 700 }}>
//               ARTISAN LEATHER ATELIER
//             </span>
//           </div>

//           {/* Brand name */}
//           <h1 style={{ lineHeight: 0.9, margin: 0, fontWeight: 400, letterSpacing: "-0.02em", fontSize: "clamp(3.5rem,11vw,9rem)", background: "linear-gradient(135deg, #1E40AF 0%, #6366F1 50%, #0EA5E9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//             D&nbsp;DOLLY
//           </h1>
//           <span style={{ display: "block", fontSize: "clamp(1.8rem,5vw,4.5rem)", letterSpacing: "0.25em", color: "#0F172A", fontWeight: 300, marginTop: "8px" }}>
//             LAMB
//           </span>

//           {/* Divider */}
//           <div style={{ margin: "28px auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", maxWidth: "300px" }}>
//             <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #6366F1)" }} />
//             <div style={{ width: "8px", height: "8px", background: "linear-gradient(135deg,#6366F1,#0EA5E9)", borderRadius: "2px", transform: "rotate(45deg)" }} />
//             <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #6366F1)" }} />
//           </div>

//           {/* Tagline */}
//           <p style={{ color: "#64748B", lineHeight: 1.7, letterSpacing: "0.03em", fontStyle: "italic", marginBottom: "44px", fontSize: "clamp(1rem,2.2vw,1.4rem)" }}>
//             Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
//           </p>

//           {/* CTA buttons */}
//           <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
//             <Link
//               to="/collection"
//               style={{ display: "inline-block", padding: "16px 48px", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", color: "#fff", textDecoration: "none", letterSpacing: "0.15em", fontSize: "12px", fontFamily: "sans-serif", fontWeight: 700, borderRadius: "4px", boxShadow: "0 8px 32px rgba(99,102,241,0.35)", transition: "all 0.3s ease" }}
//               onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(99,102,241,0.45)"; }}
//               onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.35)"; }}
//             >
//               SHOP THE COLLECTION
//             </Link>
//             <Link
//               to="/about"
//               style={{ display: "inline-block", padding: "16px 48px", background: "transparent", color: "#4F46E5", textDecoration: "none", letterSpacing: "0.15em", fontSize: "12px", fontFamily: "sans-serif", fontWeight: 600, border: "1.5px solid rgba(99,102,241,0.4)", borderRadius: "4px", transition: "all 0.3s ease" }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = "#4F46E5"; e.currentTarget.style.background = "rgba(99,102,241,0.06)"; }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.background = "transparent"; }}
//             >
//               OUR STORY
//             </Link>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div style={{ position: "absolute", bottom: "80px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.6 }}>
//           <span style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#6366F1", fontFamily: "sans-serif" }}>SCROLL</span>
//           <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #6366F1, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
//         </div>

//         {/* Feature ticker */}
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", padding: "14px 16px", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(99,102,241,0.15)" }}>
//           {features.map((f, i) => (
//             <div key={i} style={{ textAlign: "center", transition: "opacity 0.5s", opacity: activeFeature === i ? 1 : 0.35 }}>
//               <div style={{ fontSize: "10px", letterSpacing: "0.28em", color: "#4F46E5", fontFamily: "sans-serif", fontWeight: 700 }}>{f.label}</div>
//               <div style={{ fontSize: "9px", color: "#0EA5E9", letterSpacing: "0.15em", fontFamily: "sans-serif" }}>{f.sub}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════ MARQUEE ════ */}
//       <div style={{ background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", overflow: "hidden", padding: "12px 0", whiteSpace: "nowrap" }}>
//         <div style={{ display: "inline-block", animation: "marquee 22s linear infinite" }}>
//           {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
//             <span key={i} style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#fff", fontFamily: "sans-serif", fontWeight: 700 }}>{t}</span>
//           ))}
//         </div>
//       </div>

//       {/* ════ COLLECTIONS ════ */}
//       <section style={{ padding: "96px 5% 80px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
//           <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px" }}>CURATED FOR YOU</p>
//           <h2 style={{ color: "#0F172A", fontWeight: 300, margin: 0, letterSpacing: "0.05em", fontSize: "clamp(2rem,5vw,3.5rem)" }}>
//             Shop by Category
//           </h2>
//           <div style={{ width: "56px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", margin: "20px auto 0", borderRadius: "2px" }} />
//         </div>

//         <div style={{ display: "grid", gap: "2px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
//           {collections.map((col, i) => (
//             <Link key={i} to={col.href} style={{ textDecoration: "none" }}>
//               <div
//                 style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "340px", padding: "40px", overflow: "hidden", transition: "all 0.4s ease", border: "1px solid rgba(99,102,241,0.12)", borderRadius: "8px", background: "#fff", boxShadow: "0 2px 20px rgba(0,0,0,0.04)", cursor: "pointer" }}
//                 onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.12), 0 0 0 2px ${col.accent}40`; }}
//                 onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)"; }}
//               >
//                 {/* Background gradient accent */}
//                 <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", background: `radial-gradient(ellipse at top right, ${col.accent}12, transparent 70%)`, pointerEvents: "none" }} />

//                 {/* Tag badge */}
//                 <span style={{ position: "absolute", top: "24px", left: "24px", fontSize: "9px", letterSpacing: "0.3em", color: "#fff", background: col.accent, padding: "5px 12px", fontFamily: "sans-serif", fontWeight: 700, borderRadius: "4px" }}>
//                   {col.tag}
//                 </span>

//                 {/* Ghost number */}
//                 <div style={{ position: "absolute", top: "20px", right: "28px", fontSize: "7rem", color: `${col.accent}0A`, fontFamily: "serif", lineHeight: 1 }}>
//                   0{i + 1}
//                 </div>

//                 <div>
//                   <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: col.accent, fontFamily: "sans-serif", margin: "0 0 8px" }}>{col.subtitle}</p>
//                   <h3 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 14px", letterSpacing: "0.06em", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
//                     {col.title}
//                   </h3>
//                   <p style={{ fontSize: "14px", color: "#64748B", fontStyle: "italic", marginBottom: "24px", lineHeight: 1.6 }}>{col.desc}</p>
//                   <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "0.2em", color: col.accent, fontFamily: "sans-serif", fontWeight: 600 }}>
//                     EXPLORE →
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ════ STATS ════ */}
//       <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 100%)", borderTop: "1px solid rgba(99,102,241,0.1)", borderBottom: "1px solid rgba(99,102,241,0.1)" }}>
//         <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", textAlign: "center" }}>
//           {stats.map((stat, i) => (
//             <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
//               <div style={{ width: "32px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", borderRadius: "2px", marginBottom: "8px" }} />
//               <div style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontFamily: "serif", fontWeight: 300, background: "linear-gradient(135deg,#1E40AF,#6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>
//                 <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
//               </div>
//               <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", color: "#4F46E5", fontFamily: "sans-serif", marginTop: "4px" }}>
//                 {stat.label}
//               </div>
//               <p style={{ fontSize: "12px", lineHeight: 1.7, fontStyle: "italic", color: "#94A3B8", maxWidth: "180px", margin: 0 }}>
//                 {stat.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════ WHY CHOOSE US ════ */}
//       <section style={{ padding: "96px 5%", maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "center" }}>

//           {/* Left copy */}
//           <div>
//             <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px" }}>
//               THE D DOLLY LAMB DIFFERENCE
//             </p>
//             <h2 style={{ color: "#0F172A", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px", fontSize: "clamp(1.8rem,4vw,3rem)" }}>
//               Where Leather<br />Becomes Legend
//             </h2>
//             <p style={{ color: "#64748B", lineHeight: 1.9, fontSize: "15px", marginBottom: "36px", fontStyle: "italic" }}>
//               Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
//             </p>

//             <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//               {whyItems.map((item, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//                   <div style={{ width: "8px", height: "8px", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", borderRadius: "2px", transform: "rotate(45deg)", flexShrink: 0 }} />
//                   <span style={{ fontSize: "13px", color: "#334155", letterSpacing: "0.03em" }}>{item}</span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               to="/about"
//               style={{ display: "inline-block", marginTop: "40px", padding: "14px 40px", border: "1.5px solid #4F46E5", color: "#4F46E5", textDecoration: "none", fontSize: "11px", letterSpacing: "0.22em", fontFamily: "sans-serif", fontWeight: 600, borderRadius: "4px", transition: "all 0.3s ease" }}
//               onMouseEnter={e => { e.currentTarget.style.background = "#4F46E5"; e.currentTarget.style.color = "#fff"; }}
//               onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4F46E5"; }}
//             >
//               LEARN MORE
//             </Link>
//           </div>

//           {/* Right craft grid */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
//             {craftBoxes.map((box, i) => (
//               <div
//                 key={i}
//                 style={{ background: box.gradient, border: "1px solid rgba(99,102,241,0.1)", padding: "40px 24px", textAlign: "center", borderRadius: "6px", transition: "all 0.3s ease", cursor: "default" }}
//                 onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 30px ${box.accent}20`; e.currentTarget.style.borderColor = `${box.accent}50`; }}
//                 onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.1)"; }}
//               >
//                 <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: box.accent, fontFamily: "sans-serif", margin: "0 0 10px", fontWeight: 700 }}>{box.sub}</p>
//                 <p style={{ fontSize: "1.3rem", color: "#0F172A", fontFamily: "serif", margin: 0 }}>{box.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════ TESTIMONIALS ════ */}
//       <section style={{ background: "linear-gradient(135deg,#F8FAFF,#EEF2FF)", borderTop: "1px solid rgba(99,102,241,0.1)", padding: "80px 5%", textAlign: "center" }}>
//         <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px" }}>CLIENT VOICES</p>
//         <h2 style={{ color: "#0F172A", fontWeight: 300, marginBottom: "48px", fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>
//           What Our Clients Say
//         </h2>

//         <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "120px" }}>
//           <p style={{ color: "#334155", fontStyle: "italic", lineHeight: 1.8, marginBottom: "24px", fontSize: "clamp(1rem,2vw,1.3rem)" }}>
//             "{testimonials[activeTestimonial].quote}"
//           </p>
//           <p style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#6366F1", fontFamily: "sans-serif" }}>
//             — {testimonials[activeTestimonial].name},{" "}
//             <span style={{ color: "#94A3B8" }}>{testimonials[activeTestimonial].location}</span>
//           </p>
//         </div>

//         <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTestimonial(i)}
//               style={{ height: "8px", border: "none", cursor: "pointer", borderRadius: "4px", transition: "all 0.3s ease", width: i === activeTestimonial ? "28px" : "8px", background: i === activeTestimonial ? "linear-gradient(90deg,#4F46E5,#0EA5E9)" : "#CBD5E1" }}
//             />
//           ))}
//         </div>
//       </section>

//       <style>{`
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scrollPulse {
//           0%, 100% { opacity: 1; transform: scaleY(1); }
//           50%       { opacity: 0.3; transform: scaleY(0.6); }
//         }
//         * { box-sizing: border-box; }
//       `}</style>
//     </div>
//   );
// };

// export default Hero1;



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
//           if (end === "∞") { setCount("∞"); return; }
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

// /* ── Floating Particle ─────────────────────────── */
// const Particle = ({ style }) => (
//   <div style={{
//     position: "absolute",
//     borderRadius: "50%",
//     pointerEvents: "none",
//     animation: "floatUp 6s ease-in-out infinite",
//     ...style,
//   }} />
// );

// const Hero1 = () => {
//   const [visible, setVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);

//   useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);
//   useEffect(() => {
//     const t = setInterval(() => setActiveFeature((p) => (p + 1) % 4), 3200);
//     return () => clearInterval(t);
//   }, []);
//   useEffect(() => {
//     const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % 3), 4500);
//     return () => clearInterval(t);
//   }, []);

//   useEffect(() => {
//     const handle = (e) => {
//       if (!heroRef.current) return;
//       const rect = heroRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
//         y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
//       });
//     };
//     window.addEventListener("mousemove", handle);
//     return () => window.removeEventListener("mousemove", handle);
//   }, []);

//   const features = [
//     { icon: "✦", label: "HAND-STITCHED", sub: "Artisan Craft" },
//     { icon: "◈", label: "LAMBSKIN", sub: "Premium Hide" },
//     { icon: "⬡", label: "BESPOKE FIT", sub: "Made to Order" },
//     { icon: "◆", label: "HERITAGE", sub: "Since 2001" },
//   ];

//   const collections = [
//     { title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men", accent: "#4F46E5", light: "#EEF2FF", mid: "#C7D2FE" },
//     { title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women", accent: "#7C3AED", light: "#F5F3FF", mid: "#DDD6FE" },
//     { title: "LIMITED", subtitle: "Edition Collection", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection", accent: "#0EA5E9", light: "#F0F9FF", mid: "#BAE6FD" },
//   ];

//   const testimonials = [
//     { quote: "The finest lambskin I've worn — supple on day one.", name: "James H.", location: "London" },
//     { quote: "Worth every penny. A jacket that ages like fine wine.", name: "Sofia R.", location: "Milan" },
//     { quote: "Exceptional quality, impeccable fit, unmatched luxury.", name: "Marcus T.", location: "New York" },
//   ];

//   const stats = [
//     { end: 22, suffix: "+", label: "Years of Craft", desc: "Two decades perfecting leather tailoring" },
//     { end: 100, suffix: "%", label: "Pure Lambskin", desc: "Finest tanneries across Europe" },
//     { end: "3,200", suffix: "+", label: "Happy Clients", desc: "Worn across 45 countries" },
//     { end: "∞", suffix: "", label: "Lifetime Quality", desc: "Built to outlast every season" },
//   ];

//   const whyItems = [
//     "Hand-selected Grade A lambskin hides",
//     "Bespoke sizing available on all styles",
//     "Antique brass & gunmetal hardware options",
//     "Complimentary lifetime conditioning service",
//   ];

//   const particles = [
//     { width: 6, height: 6, background: "rgba(99,102,241,0.35)", top: "15%", left: "8%", animationDelay: "0s", animationDuration: "7s" },
//     { width: 4, height: 4, background: "rgba(14,165,233,0.4)", top: "30%", left: "92%", animationDelay: "1.5s", animationDuration: "5s" },
//     { width: 8, height: 8, background: "rgba(124,58,237,0.25)", top: "60%", left: "5%", animationDelay: "3s", animationDuration: "8s" },
//     { width: 5, height: 5, background: "rgba(99,102,241,0.3)", top: "75%", left: "88%", animationDelay: "0.8s", animationDuration: "6s" },
//     { width: 3, height: 3, background: "rgba(14,165,233,0.5)", top: "45%", left: "96%", animationDelay: "2s", animationDuration: "9s" },
//   ];

//   return (
//     <div style={{ background: "#F8FAFF", color: "#0F172A", fontFamily: "'Georgia', serif", overflowX: "hidden" }}>

//       {/* ════ HERO ════ */}
//       <section
//         ref={heroRef}
//         style={{
//           position: "relative",
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           overflow: "hidden",
//           background: "linear-gradient(135deg, #EFF6FF 0%, #F8FAFF 45%, #EDE9FE 100%)",
//         }}
//       >
//         {/* Animated orbs */}
//         <div style={{
//           position: "absolute", top: "-15%", right: "-8%",
//           width: "650px", height: "650px", borderRadius: "50%",
//           background: "radial-gradient(circle at 40% 40%, rgba(99,102,241,0.25) 0%, rgba(14,165,233,0.15) 50%, transparent 75%)",
//           transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
//           transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
//           pointerEvents: "none",
//         }} />
//         <div style={{
//           position: "absolute", bottom: "-10%", left: "-8%",
//           width: "550px", height: "550px", borderRadius: "50%",
//           background: "radial-gradient(circle at 60% 60%, rgba(14,165,233,0.22) 0%, rgba(99,102,241,0.12) 50%, transparent 75%)",
//           transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
//           transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
//           pointerEvents: "none",
//         }} />
//         <div style={{
//           position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)",
//           width: "900px", height: "400px",
//           background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }} />

//         {/* Subtle grid */}
//         <div style={{
//           position: "absolute", inset: 0,
//           // backgroundImage: "linear-gradient(rgba(99,102,241,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.035) 1px,transparent 1px)",
//           backgroundImage: `
//   linear-gradient(rgba(30,41,59,0.04) 1px, transparent 1px),
//   linear-gradient(90deg, rgba(30,41,59,0.04) 1px, transparent 1px)
// `,
//           backgroundSize: "64px 64px", pointerEvents: "none",
//         }} />

//         {/* Floating particles */}
//         {particles.map((p, i) => <Particle key={i} style={p} />)}

//         {/* Left vertical accent */}
//         <div style={{
//           position: "absolute", left: "6%", top: "25%", height: "50%", width: "1px",
//           background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4), transparent)",
//           animation: "pulseOpacity 3s ease-in-out infinite",
//         }} />
//         <div style={{
//           position: "absolute", right: "6%", top: "30%", height: "40%", width: "1px",
//           background: "linear-gradient(to bottom, transparent, rgba(14,165,233,0.35), transparent)",
//           animation: "pulseOpacity 3s ease-in-out infinite 1.5s",
//         }} />

//         {/* Floating badge - left */}
//         <div style={{
//           position: "absolute", left: "4%", top: "38%",
//           background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)",
//           border: "1px solid rgba(99,102,241,0.18)", borderRadius: "14px",
//           padding: "16px 20px", boxShadow: "0 8px 32px rgba(99,102,241,0.1)",
//           animation: "floatBadge 5s ease-in-out infinite",
//           display: "flex", flexDirection: "column", gap: "4px",
//         }}>
//           <span style={{ fontSize: "22px", fontWeight: 700, color: "#4F46E5", lineHeight: 1, fontFamily: "sans-serif" }}>22+</span>
//           <span style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#94A3B8", fontFamily: "sans-serif" }}>YEARS CRAFT</span>
//         </div>

//         {/* Floating badge - right */}
//         <div style={{
//           position: "absolute", right: "4%", top: "45%",
//           background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)",
//           border: "1px solid rgba(14,165,233,0.2)", borderRadius: "14px",
//           padding: "16px 20px", boxShadow: "0 8px 32px rgba(14,165,233,0.1)",
//           animation: "floatBadge 5s ease-in-out infinite 2.5s",
//           display: "flex", flexDirection: "column", gap: "4px",
//         }}>
//           <span style={{ fontSize: "22px", fontWeight: 700, color: "#0EA5E9", lineHeight: 1, fontFamily: "sans-serif" }}>3.2K+</span>
//           <span style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#94A3B8", fontFamily: "sans-serif" }}>HAPPY CLIENTS</span>
//         </div>

//         {/* Hero content */}
//         <div style={{
//           position: "relative", zIndex: 10,
//           textAlign: "center", padding: "0 24px", maxWidth: "1000px",
//           transition: "all 1.1s cubic-bezier(0.16,1,0.3,1)",
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.97)",
//         }}>
//           {/* Eyebrow pill */}
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: "10px",
//             marginBottom: "32px",
//             background: "rgba(99,102,241,0.07)",
//             border: "1px solid rgba(99,102,241,0.22)",
//             borderRadius: "100px", padding: "8px 22px",
//           }}>
//             <span style={{
//               width: "7px", height: "7px", borderRadius: "50%",
//               background: "#6366F1", display: "inline-block",
//               animation: "pulseDot 2s ease-in-out infinite",
//             }} />
//             <span style={{ fontSize: "10px", letterSpacing: "0.32em", color: "#6366F1", fontFamily: "sans-serif", fontWeight: 700 }}>
//               ARTISAN LEATHER ATELIER
//             </span>
//             <span style={{
//               width: "7px", height: "7px", borderRadius: "50%",
//               background: "#0EA5E9", display: "inline-block",
//               animation: "pulseDot 2s ease-in-out infinite 1s",
//             }} />
//           </div>

//           {/* Brand headline */}
//           <div style={{ position: "relative" }}>
//             <h1 style={{
//               lineHeight: 0.88, margin: 0, fontWeight: 400,
//               letterSpacing: "-0.02em",
//               fontSize: "clamp(4rem, 13vw, 10.5rem)",
//               background: "linear-gradient(135deg, #1E40AF 0%, #4F46E5 40%, #7C3AED 70%, #0EA5E9 100%)",
//               WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//               animation: visible ? "shimmerText 4s ease-in-out infinite alternate" : "none",
//             }}>
//               D&nbsp;DOLLY
//             </h1>
//             <span style={{
//               display: "block",
//               fontSize: "clamp(1.6rem, 4.5vw, 4rem)",
//               letterSpacing: "0.32em",
//               color: "#0F172A",
//               fontWeight: 300,
//               marginTop: "10px",
//               opacity: 0.75,
//             }}>
//               LAMB
//             </span>
//           </div>

//           {/* Ornamental divider */}
//           <div style={{ margin: "30px auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", maxWidth: "280px" }}>
//             <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #6366F1)" }} />
//             <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
//               <div style={{ width: "4px", height: "4px", background: "#C7D2FE", borderRadius: "50%" }} />
//               <div style={{ width: "8px", height: "8px", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", transform: "rotate(45deg)", borderRadius: "2px" }} />
//               <div style={{ width: "4px", height: "4px", background: "#BAE6FD", borderRadius: "50%" }} />
//             </div>
//             <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #0EA5E9)" }} />
//           </div>

//           {/* Tagline */}
//           <p style={{
//             color: "#64748B", lineHeight: 1.8, letterSpacing: "0.04em",
//             fontStyle: "italic", marginBottom: "48px",
//             fontSize: "clamp(1rem, 2vw, 1.3rem)",
//             maxWidth: "520px", margin: "0 auto 10px",
//           }}>
//             Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
//           </p>

//           {/* CTA buttons */}
//           <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
//             <Link
//               to="/collection"
//               style={{
//                 display: "inline-flex", alignItems: "center", gap: "10px",
//                 padding: "17px 52px",
//                 background: "linear-gradient(135deg, #4F46E5, #7C3AED, #0EA5E9)",
//                 backgroundSize: "200% 100%",
//                 color: "#fff", textDecoration: "none",
//                 letterSpacing: "0.16em", fontSize: "11px",
//                 fontFamily: "sans-serif", fontWeight: 700,
//                 borderRadius: "6px",
//                 boxShadow: "0 8px 28px rgba(99,102,241,0.32), 0 2px 8px rgba(99,102,241,0.2)",
//                 transition: "all 0.3s ease",
//                 animation: "btnShimmer 3s ease-in-out infinite",
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
//                 e.currentTarget.style.boxShadow = "0 18px 48px rgba(99,102,241,0.42), 0 4px 12px rgba(99,102,241,0.25)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.transform = "translateY(0) scale(1)";
//                 e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,102,241,0.32), 0 2px 8px rgba(99,102,241,0.2)";
//               }}
//             >
//               SHOP THE COLLECTION
//               <span style={{ fontSize: "14px" }}>→</span>
//             </Link>
//             <Link
//               to="/about"
//               style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 padding: "17px 52px",
//                 background: "rgba(255,255,255,0.7)",
//                 backdropFilter: "blur(12px)",
//                 color: "#4F46E5", textDecoration: "none",
//                 letterSpacing: "0.16em", fontSize: "11px",
//                 fontFamily: "sans-serif", fontWeight: 600,
//                 border: "1.5px solid rgba(99,102,241,0.35)",
//                 borderRadius: "6px",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.borderColor = "#4F46E5";
//                 e.currentTarget.style.background = "rgba(99,102,241,0.07)";
//                 e.currentTarget.style.transform = "translateY(-3px)";
//                 e.currentTarget.style.boxShadow = "0 10px 28px rgba(99,102,241,0.15)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
//                 e.currentTarget.style.background = "rgba(255,255,255,0.7)";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               OUR STORY
//             </Link>
//           </div>

//           {/* Trust row */}
//           <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
//             {["Free Shipping Over ₹5000", "100% Genuine Leather", "Lifetime Warranty"].map((t, i) => (
//               <span key={i} style={{
//                 display: "inline-flex", alignItems: "center", gap: "6px",
//                 fontSize: "11px", color: "#64748B", fontFamily: "sans-serif",
//               }}>
//                 <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", display: "inline-block" }} />
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div style={{ position: "absolute", bottom: "88px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.55 }}>
//           <span style={{ fontSize: "8px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", fontWeight: 600 }}>SCROLL</span>
//           <div style={{ width: "22px", height: "36px", border: "1.5px solid rgba(99,102,241,0.4)", borderRadius: "12px", display: "flex", justifyContent: "center", paddingTop: "6px" }}>
//             <div style={{ width: "3px", height: "8px", background: "#6366F1", borderRadius: "2px", animation: "scrollMouse 2s ease-in-out infinite" }} />
//           </div>
//         </div>

//         {/* Feature ticker */}
//         <div style={{
//           position: "absolute", bottom: 0, left: 0, right: 0,
//           display: "flex", justifyContent: "center",
//           background: "rgba(255,255,255,0.75)", backdropFilter: "blur(20px)",
//           borderTop: "1px solid rgba(99,102,241,0.12)",
//         }}>
//           {features.map((f, i) => (
//             <div
//               key={i}
//               style={{
//                 flex: 1, maxWidth: "200px",
//                 textAlign: "center", padding: "16px 12px",
//                 borderRight: i < 3 ? "1px solid rgba(99,102,241,0.1)" : "none",
//                 transition: "all 0.5s ease",
//                 background: activeFeature === i ? "rgba(99,102,241,0.05)" : "transparent",
//                 opacity: activeFeature === i ? 1 : 0.5,
//               }}
//             >
//               <div style={{ fontSize: "10px", letterSpacing: "0.28em", color: activeFeature === i ? "#4F46E5" : "#94A3B8", fontFamily: "sans-serif", fontWeight: 700, transition: "color 0.5s" }}>{f.label}</div>
//               <div style={{ fontSize: "9px", color: activeFeature === i ? "#0EA5E9" : "#CBD5E1", letterSpacing: "0.14em", fontFamily: "sans-serif", marginTop: "2px", transition: "color 0.5s" }}>{f.sub}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════ MARQUEE ════ */}
//       <div style={{ background: "linear-gradient(90deg, #4F46E5 0%, #7C3AED 50%, #0EA5E9 100%)", overflow: "hidden", padding: "13px 0", whiteSpace: "nowrap" }}>
//         <div style={{ display: "inline-block", animation: "marquee 24s linear infinite" }}>
//           {Array(8).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED ARTISAN  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
//             <span key={i} style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.9)", fontFamily: "sans-serif", fontWeight: 700 }}>{t}</span>
//           ))}
//         </div>
//       </div>

//       {/* ════ COLLECTIONS ════ */}
//       <section style={{ padding: "100px 5% 80px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
//           <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "14px", fontWeight: 700 }}>CURATED FOR YOU</p>
//           <h2 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 20px", letterSpacing: "0.04em", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
//             Shop by Category
//           </h2>
//           <div style={{ width: "56px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", margin: "0 auto", borderRadius: "2px" }} />
//         </div>

//         <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
//           {collections.map((col, i) => (
//             <Link key={i} to={col.href} style={{ textDecoration: "none" }}>
//               <div
//                 style={{
//                   position: "relative", display: "flex", flexDirection: "column",
//                   justifyContent: "flex-end", minHeight: "360px",
//                   padding: "40px 36px", overflow: "hidden",
//                   transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
//                   border: "1px solid rgba(99,102,241,0.1)",
//                   borderRadius: "16px", background: "#fff",
//                   boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.boxShadow = `0 28px 64px rgba(0,0,0,0.11), 0 0 0 2px ${col.accent}35`;
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
//                 }}
//               >
//                 <div style={{ position: "absolute", top: 0, right: 0, width: "65%", height: "100%", background: `radial-gradient(ellipse at top right, ${col.light}, transparent 70%)`, pointerEvents: "none" }} />
//                 <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "40%", background: `linear-gradient(to top, ${col.light}60, transparent)`, pointerEvents: "none" }} />

//                 {/* Tag */}
//                 <span style={{
//                   position: "absolute", top: "24px", left: "24px",
//                   fontSize: "9px", letterSpacing: "0.3em", color: "#fff",
//                   background: `linear-gradient(135deg,${col.accent},${col.mid === "#C7D2FE" ? "#0EA5E9" : col.accent}CC)`,
//                   padding: "6px 14px", fontFamily: "sans-serif", fontWeight: 700, borderRadius: "100px",
//                 }}>
//                   {col.tag}
//                 </span>

//                 {/* Ghost number */}
//                 <div style={{ position: "absolute", top: "16px", right: "24px", fontSize: "7.5rem", color: `${col.accent}08`, fontFamily: "serif", lineHeight: 1, fontWeight: 700 }}>
//                   0{i + 1}
//                 </div>

//                 <div style={{ position: "relative", zIndex: 1 }}>
//                   <p style={{ fontSize: "10px", letterSpacing: "0.28em", color: col.accent, fontFamily: "sans-serif", margin: "0 0 8px", fontWeight: 600 }}>{col.subtitle}</p>
//                   <h3 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 14px", letterSpacing: "0.05em", fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
//                     {col.title}
//                   </h3>
//                   <p style={{ fontSize: "13px", color: "#64748B", fontStyle: "italic", marginBottom: "28px", lineHeight: 1.7 }}>{col.desc}</p>
//                   <div style={{
//                     display: "inline-flex", alignItems: "center", gap: "8px",
//                     fontSize: "10px", letterSpacing: "0.22em", color: col.accent,
//                     fontFamily: "sans-serif", fontWeight: 700,
//                     padding: "8px 0",
//                     borderBottom: `1.5px solid ${col.accent}40`,
//                   }}>
//                     EXPLORE COLLECTION →
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ════ STATS ════ */}
//       <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 100%)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
//         <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", textAlign: "center" }}>
//           {stats.map((stat, i) => (
//             <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
//               <div style={{ width: "28px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", borderRadius: "2px", marginBottom: "10px" }} />
//               <div style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontFamily: "serif", fontWeight: 300, background: "linear-gradient(135deg,#1E40AF,#6366F1,#0EA5E9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>
//                 <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
//               </div>
//               <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.26em", color: "#4F46E5", fontFamily: "sans-serif", marginTop: "6px" }}>{stat.label}</div>
//               <p style={{ fontSize: "12px", lineHeight: 1.75, fontStyle: "italic", color: "#94A3B8", maxWidth: "170px", margin: 0 }}>{stat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════ WHY CHOOSE US ════ */}
//       <section style={{ padding: "100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "center" }}>
//           <div>
//             <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px", fontWeight: 700 }}>THE D DOLLY LAMB DIFFERENCE</p>
//             <h2 style={{ color: "#0F172A", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px", fontSize: "clamp(1.8rem,4vw,3rem)" }}>
//               Where Leather<br />Becomes Legend
//             </h2>
//             <p style={{ color: "#64748B", lineHeight: 1.9, fontSize: "15px", marginBottom: "36px", fontStyle: "italic" }}>
//               Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
//               {whyItems.map((item, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//                   <div style={{ width: "8px", height: "8px", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", borderRadius: "2px", transform: "rotate(45deg)", flexShrink: 0 }} />
//                   <span style={{ fontSize: "13px", color: "#334155", letterSpacing: "0.03em" }}>{item}</span>
//                 </div>
//               ))}
//             </div>
//             <Link
//               to="/about"
//               style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 marginTop: "40px", padding: "14px 42px",
//                 border: "1.5px solid #4F46E5", color: "#4F46E5",
//                 textDecoration: "none", fontSize: "11px", letterSpacing: "0.22em",
//                 fontFamily: "sans-serif", fontWeight: 600, borderRadius: "6px",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={e => { e.currentTarget.style.background = "#4F46E5"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(79,70,229,0.28)"; }}
//               onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4F46E5"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
//             >
//               LEARN MORE →
//             </Link>
//           </div>

//           {/* Craft grid */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
//             {[
//               { gradient: "linear-gradient(135deg,#EEF2FF,#E0E7FF)", accent: "#4F46E5", label: "Lambskin", sub: "PREMIUM HIDE" },
//               { gradient: "linear-gradient(135deg,#F0F9FF,#E0F2FE)", accent: "#0EA5E9", label: "Artisan", sub: "HAND CRAFTED" },
//               { gradient: "linear-gradient(135deg,#F5F3FF,#EDE9FE)", accent: "#7C3AED", label: "Fit", sub: "BESPOKE CUT" },
//               { gradient: "linear-gradient(135deg,#FFF7ED,#FEF3C7)", accent: "#D97706", label: "Heritage", sub: "EST. 2001" },
//             ].map((box, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: box.gradient, border: "1px solid rgba(99,102,241,0.1)",
//                   padding: "44px 24px", textAlign: "center", borderRadius: "14px",
//                   transition: "all 0.35s ease", cursor: "default",
//                 }}
//                 onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.boxShadow = `0 14px 36px ${box.accent}18`; e.currentTarget.style.borderColor = `${box.accent}40`; }}
//                 onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.1)"; }}
//               >
//                 <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: box.accent, fontFamily: "sans-serif", margin: "0 0 10px", fontWeight: 700 }}>{box.sub}</p>
//                 <p style={{ fontSize: "1.4rem", color: "#0F172A", fontFamily: "serif", margin: 0, fontWeight: 400 }}>{box.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════ TESTIMONIALS ════ */}
//       <section style={{ background: "linear-gradient(135deg,#F8FAFF,#EEF2FF)", borderTop: "1px solid rgba(99,102,241,0.08)", padding: "88px 5%", textAlign: "center" }}>
//         <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px", fontWeight: 700 }}>CLIENT VOICES</p>
//         <h2 style={{ color: "#0F172A", fontWeight: 300, marginBottom: "52px", fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>What Our Clients Say</h2>

//         <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "130px" }}>
//           <div style={{ fontSize: "64px", color: "#E0E7FF", lineHeight: 1, marginBottom: "16px", fontFamily: "serif" }}>"</div>
//           <p style={{ color: "#334155", fontStyle: "italic", lineHeight: 1.85, marginBottom: "24px", fontSize: "clamp(1rem,2vw,1.25rem)" }}>
//             {testimonials[activeTestimonial].quote}
//           </p>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
//             <div style={{ width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #6366F1)" }} />
//             <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#6366F1", fontFamily: "sans-serif", margin: 0, fontWeight: 600 }}>
//               {testimonials[activeTestimonial].name}
//             </p>
//             <span style={{ fontSize: "9px", color: "#94A3B8", letterSpacing: "0.14em", fontFamily: "sans-serif" }}>{testimonials[activeTestimonial].location}</span>
//             <div style={{ width: "32px", height: "1px", background: "linear-gradient(to left, transparent, #0EA5E9)" }} />
//           </div>
//         </div>

//         <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "36px" }}>
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTestimonial(i)}
//               style={{
//                 height: "8px", border: "none", cursor: "pointer",
//                 borderRadius: "4px", transition: "all 0.4s ease",
//                 width: i === activeTestimonial ? "32px" : "8px",
//                 background: i === activeTestimonial ? "linear-gradient(90deg,#4F46E5,#0EA5E9)" : "#CBD5E1",
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       <style>{`
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scrollMouse {
//           0%   { transform: translateY(0); opacity: 1; }
//           100% { transform: translateY(12px); opacity: 0; }
//         }
//         @keyframes pulseDot {
//           0%,100% { transform: scale(1); opacity: 1; }
//           50%      { transform: scale(0.7); opacity: 0.5; }
//         }
//         @keyframes pulseOpacity {
//           0%,100% { opacity: 1; }
//           50%      { opacity: 0.3; }
//         }
//         @keyframes floatUp {
//           0%,100% { transform: translateY(0); opacity: 0.7; }
//           50%      { transform: translateY(-18px); opacity: 1; }
//         }
//         @keyframes floatBadge {
//           0%,100% { transform: translateY(0); }
//           50%      { transform: translateY(-7px); }
//         }
//         @keyframes shimmerText {
//           0%   { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
//         @keyframes btnShimmer {
//           0%,100% { background-position: 0% 50%; }
//           50%      { background-position: 100% 50%; }
//         }
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
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const started = useRef(false);

  const runCounter = () => {
    if (end === "∞") { setCount("∞"); return; }
    const numEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));
    const hasComma = String(end).includes(",");
    setCount(0);
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
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          runCounter();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span
      ref={ref}
      onMouseEnter={() => { setHovered(true); runCounter(); }}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        transition: "transform 0.25s ease",
        transform: hovered ? "scale(1.12)" : "scale(1)",
        cursor: "pointer",
        background: "linear-gradient(135deg,#1E40AF,#6366F1,#0EA5E9)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {count}{suffix}
    </span>
  );
};

/* ── Floating Particle ─────────────────────────── */
const Particle = ({ style }) => (
  <div style={{
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
    animation: "floatUp 6s ease-in-out infinite",
    ...style,
  }} />
);

const Hero1 = () => {
  const [visible, setVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);
  useEffect(() => {
    const t = setInterval(() => setActiveFeature((p) => (p + 1) % 4), 3200);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % 3), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const features = [
    { icon: "✦", label: "HAND-STITCHED", sub: "Artisan Craft" },
    { icon: "◈", label: "LAMBSKIN", sub: "Premium Hide" },
    { icon: "⬡", label: "BESPOKE FIT", sub: "Made to Order" },
    { icon: "◆", label: "HERITAGE", sub: "Since 2001" },
  ];

  const collections = [
    { title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men", accent: "#4F46E5", light: "#EEF2FF", mid: "#C7D2FE" },
    { title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women", accent: "#7C3AED", light: "#F5F3FF", mid: "#DDD6FE" },
    { title: "LIMITED", subtitle: "Edition Collection", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection", accent: "#0EA5E9", light: "#F0F9FF", mid: "#BAE6FD" },
  ];

  const testimonials = [
    { quote: "The finest lambskin I've worn — supple on day one.", name: "James H.", location: "London" },
    { quote: "Worth every penny. A jacket that ages like fine wine.", name: "Sofia R.", location: "Milan" },
    { quote: "Exceptional quality, impeccable fit, unmatched luxury.", name: "Marcus T.", location: "New York" },
  ];

  const stats = [
    { end: 22, suffix: "+", label: "Years of Craft", desc: "Two decades perfecting leather tailoring" },
    { end: 100, suffix: "%", label: "Pure Lambskin", desc: "Finest tanneries across Europe" },
    { end: "3,200", suffix: "+", label: "Happy Clients", desc: "Worn across 45 countries" },
    { end: "∞", suffix: "", label: "Lifetime Quality", desc: "Built to outlast every season" },
  ];

  const whyItems = [
    "Hand-selected Grade A lambskin hides",
    "Bespoke sizing available on all styles",
    "Antique brass & gunmetal hardware options",
    "Complimentary lifetime conditioning service",
  ];

  const particles = [
    { width: 6, height: 6, background: "rgba(99,102,241,0.35)", top: "15%", left: "8%", animationDelay: "0s", animationDuration: "7s" },
    { width: 4, height: 4, background: "rgba(14,165,233,0.4)", top: "30%", left: "92%", animationDelay: "1.5s", animationDuration: "5s" },
    { width: 8, height: 8, background: "rgba(124,58,237,0.25)", top: "60%", left: "5%", animationDelay: "3s", animationDuration: "8s" },
    { width: 5, height: 5, background: "rgba(99,102,241,0.3)", top: "75%", left: "88%", animationDelay: "0.8s", animationDuration: "6s" },
    { width: 3, height: 3, background: "rgba(14,165,233,0.5)", top: "45%", left: "96%", animationDelay: "2s", animationDuration: "9s" },
  ];

  const craftBoxes = [
    { gradient: "linear-gradient(135deg,#EEF2FF,#E0E7FF)", accent: "#4F46E5", label: "Lambskin", sub: "PREMIUM HIDE" },
    { gradient: "linear-gradient(135deg,#F0F9FF,#E0F2FE)", accent: "#0EA5E9", label: "Artisan", sub: "HAND CRAFTED" },
    { gradient: "linear-gradient(135deg,#F5F3FF,#EDE9FE)", accent: "#7C3AED", label: "Fit", sub: "BESPOKE CUT" },
    { gradient: "linear-gradient(135deg,#FFF7ED,#FEF3C7)", accent: "#D97706", label: "Heritage", sub: "EST. 2001" },
  ];

  return (
    <div style={{ background: "#F8FAFF", color: "#0F172A", fontFamily: "'Georgia', serif", overflowX: "hidden" }}>

      {/* ════ HERO ════ */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #EFF6FF 0%, #F8FAFF 45%, #EDE9FE 100%)",
        }}
      >
        {/* Animated orbs — no blur */}
        <div style={{
          position: "absolute", top: "-15%", right: "-8%",
          width: "650px", height: "650px", borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, rgba(99,102,241,0.25) 0%, rgba(14,165,233,0.15) 50%, transparent 75%)",
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", left: "-8%",
          width: "550px", height: "550px", borderRadius: "50%",
          background: "radial-gradient(circle at 60% 60%, rgba(14,165,233,0.22) 0%, rgba(99,102,241,0.12) 50%, transparent 75%)",
          transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
          transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "400px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0,
          // backgroundImage: "linear-gradient(rgba(99,102,241,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.035) 1px,transparent 1px)",
          backgroundImage: `
  linear-gradient(rgba(30,41,59,0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(30,41,59,0.04) 1px, transparent 1px)
`,
          backgroundSize: "64px 64px", pointerEvents: "none",
        }} />

        {/* Floating particles */}
        {particles.map((p, i) => <Particle key={i} style={p} />)}

        {/* Vertical accents */}
        <div style={{
          position: "absolute", left: "6%", top: "25%", height: "50%", width: "1px",
          background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4), transparent)",
          animation: "pulseOpacity 3s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", right: "6%", top: "30%", height: "40%", width: "1px",
          background: "linear-gradient(to bottom, transparent, rgba(14,165,233,0.35), transparent)",
          animation: "pulseOpacity 3s ease-in-out infinite 1.5s",
        }} />

        {/* Floating badge - left */}
        <div style={{
          position: "absolute", left: "4%", top: "38%",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(99,102,241,0.18)", borderRadius: "14px",
          padding: "16px 20px",
          boxShadow: "0 8px 24px rgba(99,102,241,0.15), 0 2px 8px rgba(99,102,241,0.08)",
          animation: "floatBadge 5s ease-in-out infinite",
          display: "flex", flexDirection: "column", gap: "4px",
        }}>
          <span style={{ fontSize: "22px", fontWeight: 700, color: "#4F46E5", lineHeight: 1, fontFamily: "sans-serif" }}>22+</span>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#94A3B8", fontFamily: "sans-serif" }}>YEARS CRAFT</span>
        </div>

        {/* Floating badge - right */}
        <div style={{
          position: "absolute", right: "4%", top: "45%",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(14,165,233,0.2)", borderRadius: "14px",
          padding: "16px 20px",
          boxShadow: "0 8px 24px rgba(14,165,233,0.15), 0 2px 8px rgba(14,165,233,0.08)",
          animation: "floatBadge 5s ease-in-out infinite 2.5s",
          display: "flex", flexDirection: "column", gap: "4px",
        }}>
          <span style={{ fontSize: "22px", fontWeight: 700, color: "#0EA5E9", lineHeight: 1, fontFamily: "sans-serif" }}>3.2K+</span>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#94A3B8", fontFamily: "sans-serif" }}>HAPPY CLIENTS</span>
        </div>

        {/* Hero content */}
        <div style={{
          position: "relative", zIndex: 10,
          textAlign: "center", padding: "0 24px", maxWidth: "1000px",
          transition: "all 1.1s cubic-bezier(0.16,1,0.3,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.97)",
        }}>
          {/* Eyebrow pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginBottom: "10px",
            marginTop: "10px",
            background: "rgba(99,102,241,0.07)",
            border: "1px solid rgba(99,102,241,0.22)",
            borderRadius: "100px", padding: "8px 22px",
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#6366F1", display: "inline-block",
              animation: "pulseDot 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.32em", color: "#6366F1", fontFamily: "sans-serif", fontWeight: 700 }}>
              ARTISAN LEATHER ATELIER
            </span>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#0EA5E9", display: "inline-block",
              animation: "pulseDot 2s ease-in-out infinite 1s",
            }} />
          </div>

          {/* Brand headline — animated gradient */}
          <div style={{ position: "relative" }}>
            <h1 style={{
              lineHeight: 0.88, margin: 0, fontWeight: 400,
              letterSpacing: "-0.02em",
              fontSize: "clamp(4rem, 13vw, 10.5rem)",
              background: "linear-gradient(90deg, #1E40AF 0%, #4F46E5 20%, #7C3AED 40%, #0EA5E9 55%, #6366F1 70%, #1E40AF 100%)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientFlow 4s linear infinite",
            }}>
              D&nbsp;DOLLY
            </h1>
            <span style={{
              display: "block",
              fontSize: "clamp(1.6rem, 4.5vw, 4rem)",
              letterSpacing: "0.32em",
              color: "#0F172A",
              fontWeight: 300,
              marginTop: "10px",
              opacity: 0.75,
            }}>
              LAMB
            </span>
          </div>

          {/* Ornamental divider */}
          <div style={{ margin: "30px auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", maxWidth: "280px" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #6366F1)" }} />
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <div style={{ width: "4px", height: "4px", background: "#C7D2FE", borderRadius: "50%" }} />
              <div style={{ width: "8px", height: "8px", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", transform: "rotate(45deg)", borderRadius: "2px" }} />
              <div style={{ width: "4px", height: "4px", background: "#BAE6FD", borderRadius: "50%" }} />
            </div>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #0EA5E9)" }} />
          </div>

          {/* Tagline */}
          <p style={{
            color: "#64748B", lineHeight: 1.8, letterSpacing: "0.04em",
            fontStyle: "italic", marginBottom: "48px",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            maxWidth: "520px", margin: "0 auto 48px",
          }}>
            Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px" }}>
            <Link
              to="/collection"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "17px 52px",
                background: "linear-gradient(135deg, #4F46E5, #7C3AED, #0EA5E9)",
                backgroundSize: "200% 100%",
                color: "#fff", textDecoration: "none",
                letterSpacing: "0.16em", fontSize: "11px",
                fontFamily: "sans-serif", fontWeight: 700,
                borderRadius: "6px",
                boxShadow: "0 8px 28px rgba(99,102,241,0.32), 0 2px 8px rgba(99,102,241,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 18px 48px rgba(99,102,241,0.42), 0 4px 12px rgba(99,102,241,0.25)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,102,241,0.32), 0 2px 8px rgba(99,102,241,0.2)";
              }}
              onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.97)"; }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; }}
            >
              SHOP THE COLLECTION
              <span style={{ fontSize: "14px" }}>→</span>
            </Link>
            <Link
              to="/about"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "17px 52px",
                background: "rgba(255,255,255,0.7)",
                color: "#4F46E5", textDecoration: "none",
                letterSpacing: "0.16em", fontSize: "11px",
                fontFamily: "sans-serif", fontWeight: 600,
                border: "1.5px solid rgba(99,102,241,0.35)",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#4F46E5";
                e.currentTarget.style.background = "rgba(99,102,241,0.07)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(99,102,241,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
                e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.97)"; }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1)"; }}
            >
              OUR STORY
            </Link>
          </div>

          {/* Trust row */}
          {/* <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "44px", marginBottom: "100px", flexWrap: "wrap" }}>
            {["Free Shipping Over ₹5000", "100% Genuine Leather", "Lifetime Warranty"].map((t, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "11px", color: "#64748B", fontFamily: "sans-serif",
              }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", display: "inline-block" }} />
                {t}
              </span>
            ))}
          </div> */}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "72px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.55 }}>
          <span style={{ fontSize: "8px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", fontWeight: 600 }}>SCROLL</span>
          <div style={{ width: "22px", height: "36px", border: "1.5px solid rgba(99,102,241,0.4)", borderRadius: "12px", display: "flex", justifyContent: "center", paddingTop: "6px" }}>
            <div style={{ width: "3px", height: "8px", background: "#6366F1", borderRadius: "2px", animation: "scrollMouse 2s ease-in-out infinite" }} />
          </div>
        </div>

        {/* Feature ticker */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          display: "flex", justifyContent: "center",
          background: "rgba(255,255,255,0.85)",
          borderTop: "1px solid rgba(99,102,241,0.12)",
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                flex: 1, maxWidth: "200px",
                textAlign: "center", padding: "16px 12px",
                borderRight: i < 3 ? "1px solid rgba(99,102,241,0.1)" : "none",
                transition: "all 0.5s ease",
                background: activeFeature === i ? "rgba(99,102,241,0.05)" : "transparent",
                opacity: activeFeature === i ? 1 : 0.5,
              }}
            >
              <div style={{ fontSize: "10px", letterSpacing: "0.28em", color: activeFeature === i ? "#4F46E5" : "#94A3B8", fontFamily: "sans-serif", fontWeight: 700, transition: "color 0.5s" }}>{f.label}</div>
              <div style={{ fontSize: "9px", color: activeFeature === i ? "#0EA5E9" : "#CBD5E1", letterSpacing: "0.14em", fontFamily: "sans-serif", marginTop: "2px", transition: "color 0.5s" }}>{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ MARQUEE ════ */}
      <div style={{ background: "linear-gradient(90deg, #4F46E5 0%, #7C3AED 50%, #0EA5E9 100%)", overflow: "hidden", padding: "13px 0", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-block", animation: "marquee 24s linear infinite" }}>
          {Array(8).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED ARTISAN  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
            <span key={i} style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.9)", fontFamily: "sans-serif", fontWeight: 700 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ════ COLLECTIONS ════ */}
      <section style={{ padding: "100px 5% 80px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "14px", fontWeight: 700 }}>CURATED FOR YOU</p>
          <h2 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 20px", letterSpacing: "0.04em", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Shop by Category
          </h2>
          <div style={{ width: "56px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", margin: "0 auto", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {collections.map((col, i) => (
            <Link key={i} to={col.href} style={{ textDecoration: "none" }}>
              <div
                className="collection-card"
                data-accent={col.accent}
                style={{
                  position: "relative", display: "flex", flexDirection: "column",
                  justifyContent: "flex-end", minHeight: "360px",
                  padding: "40px 36px", overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
                  border: `1.5px solid rgba(99,102,241,0.12)`,
                  borderRadius: "16px", background: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03)",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 28px 64px rgba(0,0,0,0.11), 0 8px 24px ${col.accent}25, 0 0 0 2px ${col.accent}35`;
                  e.currentTarget.style.borderColor = `${col.accent}55`;
                  // Animate explore link underline
                  const link = e.currentTarget.querySelector(".explore-link-bar");
                  if (link) link.style.width = "100%";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03)";
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.12)";
                  const link = e.currentTarget.querySelector(".explore-link-bar");
                  if (link) link.style.width = "0%";
                }}
                onMouseDown={e => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(0.99)";
                  e.currentTarget.style.boxShadow = `0 14px 36px rgba(0,0,0,0.09), 0 4px 12px ${col.accent}20`;
                }}
                onMouseUp={e => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1)";
                  e.currentTarget.style.boxShadow = `0 28px 64px rgba(0,0,0,0.11), 0 8px 24px ${col.accent}25, 0 0 0 2px ${col.accent}35`;
                }}
              >
                <div style={{ position: "absolute", top: 0, right: 0, width: "65%", height: "100%", background: `radial-gradient(ellipse at top right, ${col.light}, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "40%", background: `linear-gradient(to top, ${col.light}60, transparent)`, pointerEvents: "none" }} />

                {/* Tag */}
                <span style={{
                  position: "absolute", top: "24px", left: "24px",
                  fontSize: "9px", letterSpacing: "0.3em", color: "#fff",
                  background: `linear-gradient(135deg,${col.accent},${col.mid === "#C7D2FE" ? "#0EA5E9" : col.accent}CC)`,
                  padding: "6px 14px", fontFamily: "sans-serif", fontWeight: 700, borderRadius: "100px",
                  boxShadow: `0 4px 12px ${col.accent}40`,
                }}>
                  {col.tag}
                </span>

                {/* Ghost number */}
                <div style={{ position: "absolute", top: "16px", right: "24px", fontSize: "7.5rem", color: `${col.accent}08`, fontFamily: "serif", lineHeight: 1, fontWeight: 700 }}>
                  0{i + 1}
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.28em", color: col.accent, fontFamily: "sans-serif", margin: "0 0 8px", fontWeight: 600 }}>{col.subtitle}</p>
                  <h3 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 14px", letterSpacing: "0.05em", fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
                    {col.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748B", fontStyle: "italic", marginBottom: "28px", lineHeight: 1.7 }}>{col.desc}</p>

                  {/* Explore link with animated bottom bar */}
                  <div style={{ position: "relative", display: "inline-block", paddingBottom: "6px" }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      fontSize: "10px", letterSpacing: "0.22em", color: col.accent,
                      fontFamily: "sans-serif", fontWeight: 700,
                    }}>
                      EXPLORE COLLECTION →
                    </div>
                    {/* Animated underline bar */}
                    <div
                      className="explore-link-bar"
                      style={{
                        position: "absolute", bottom: 0, left: 0,
                        height: "2px", width: "0%",
                        background: `linear-gradient(90deg, ${col.accent}, ${col.mid})`,
                        borderRadius: "1px",
                        transition: "width 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════ STATS ════ */}
      <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 100%)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", textAlign: "center" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "28px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", borderRadius: "2px", marginBottom: "10px" }} />
              <div style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontFamily: "serif", fontWeight: 300, lineHeight: 1 }}>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
              </div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.26em", color: "#4F46E5", fontFamily: "sans-serif", marginTop: "6px" }}>{stat.label}</div>
              <p style={{ fontSize: "12px", lineHeight: 1.75, fontStyle: "italic", color: "#94A3B8", maxWidth: "170px", margin: 0 }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════ WHY CHOOSE US ════ */}
      <section style={{ padding: "100px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px", fontWeight: 700 }}>THE D DOLLY LAMB DIFFERENCE</p>
            <h2 style={{ color: "#0F172A", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px", fontSize: "clamp(1.8rem,4vw,3rem)" }}>
              Where Leather<br />Becomes Legend
            </h2>
            <p style={{ color: "#64748B", lineHeight: 1.9, fontSize: "15px", marginBottom: "36px", fontStyle: "italic" }}>
              Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {whyItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "8px", height: "8px", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", borderRadius: "2px", transform: "rotate(45deg)", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "#334155", letterSpacing: "0.03em" }}>{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                marginTop: "40px", padding: "14px 42px",
                border: "1.5px solid #4F46E5", color: "#4F46E5",
                textDecoration: "none", fontSize: "11px", letterSpacing: "0.22em",
                fontFamily: "sans-serif", fontWeight: 600, borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#4F46E5";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(79,70,229,0.28)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#4F46E5";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.97)"; }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-2px) scale(1)"; }}
            >
              LEARN MORE →
            </Link>
          </div>

          {/* Craft grid — fixed with proper shadows and click effects */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {craftBoxes.map((box, i) => (
              <div
                key={i}
                style={{
                  background: box.gradient,
                  border: `1.5px solid ${box.accent}20`,
                  padding: "44px 24px", textAlign: "center", borderRadius: "14px",
                  transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                  cursor: "pointer",
                  boxShadow: `0 4px 16px ${box.accent}10, 0 1px 4px rgba(0,0,0,0.04)`,
                  userSelect: "none",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 20px 48px ${box.accent}28, 0 6px 16px ${box.accent}15`;
                  e.currentTarget.style.borderColor = `${box.accent}50`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `0 4px 16px ${box.accent}10, 0 1px 4px rgba(0,0,0,0.04)`;
                  e.currentTarget.style.borderColor = `${box.accent}20`;
                }}
                onMouseDown={e => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(0.97)";
                  e.currentTarget.style.boxShadow = `0 8px 20px ${box.accent}20, 0 2px 8px ${box.accent}10`;
                }}
                onMouseUp={e => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 20px 48px ${box.accent}28, 0 6px 16px ${box.accent}15`;
                }}
              >
                <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: box.accent, fontFamily: "sans-serif", margin: "0 0 10px", fontWeight: 700 }}>{box.sub}</p>
                <p style={{ fontSize: "1.4rem", color: "#0F172A", fontFamily: "serif", margin: 0, fontWeight: 400 }}>{box.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section style={{ background: "linear-gradient(135deg,#F8FAFF,#EEF2FF)", borderTop: "1px solid rgba(99,102,241,0.08)", padding: "88px 5%", textAlign: "center" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px", fontWeight: 700 }}>CLIENT VOICES</p>
        <h2 style={{ color: "#0F172A", fontWeight: 300, marginBottom: "52px", fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>What Our Clients Say</h2>

        <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "130px" }}>
          <div style={{ fontSize: "64px", color: "#E0E7FF", lineHeight: 1, marginBottom: "16px", fontFamily: "serif" }}>"</div>
          <p style={{ color: "#334155", fontStyle: "italic", lineHeight: 1.85, marginBottom: "24px", fontSize: "clamp(1rem,2vw,1.25rem)" }}>
            {testimonials[activeTestimonial].quote}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <div style={{ width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #6366F1)" }} />
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#6366F1", fontFamily: "sans-serif", margin: 0, fontWeight: 600 }}>
              {testimonials[activeTestimonial].name}
            </p>
            <span style={{ fontSize: "9px", color: "#94A3B8", letterSpacing: "0.14em", fontFamily: "sans-serif" }}>{testimonials[activeTestimonial].location}</span>
            <div style={{ width: "32px", height: "1px", background: "linear-gradient(to left, transparent, #0EA5E9)" }} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "36px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              style={{
                height: "8px", border: "none", cursor: "pointer",
                borderRadius: "4px", transition: "all 0.4s ease",
                width: i === activeTestimonial ? "32px" : "8px",
                background: i === activeTestimonial ? "linear-gradient(90deg,#4F46E5,#0EA5E9)" : "#CBD5E1",
              }}
            />
          ))}
        </div>
      </section>

      <style>{`
        @keyframes gradientFlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollMouse {
          0%   { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(0.7); opacity: 0.5; }
        }
        @keyframes pulseOpacity {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
        @keyframes floatUp {
          0%,100% { transform: translateY(0); opacity: 0.7; }
          50%      { transform: translateY(-18px); opacity: 1; }
        }
        @keyframes floatBadge {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
};

export default Hero1;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Hero1 = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setVisible(true), 100);
//   }, []);

//   return (
//     <div className="bg-[#020617] text-white overflow-x-hidden">

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex items-center justify-center px-6">

//         {/* Background Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#020617]" />

//         {/* Red Glow Accent */}
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(193,18,31,0.08)] blur-3xl" />

//         {/* Content */}
//         <div
//           className={`relative z-10 text-center max-w-4xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//         >

//           {/* Small Tag */}
//           <p className="text-xs tracking-[0.3em] text-[#C1121F] mb-6 font-semibold">
//             PREMIUM ATHLETIC BRAND
//           </p>

//           {/* Main Heading */}
//           <h1
//             className="font-bold leading-tight tracking-tight"
//             style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
//           >
//             ELEVATE YOUR STYLE <br />
//             WITH <span className="text-[#C1121F]">DOLLY LAMB</span>
//           </h1>

//           {/* Subtext */}
//           <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
//             Premium performance wear designed for comfort, confidence, and everyday dominance.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-10 flex justify-center gap-4 flex-wrap">

//             <Link
//               to="/collection"
//               className="px-8 py-3 bg-[#C1121F] text-white font-semibold tracking-wide rounded-md transition hover:bg-[#9B0E18] hover:scale-105"
//             >
//               Shop Now
//             </Link>

//             <Link
//               to="/about"
//               className="px-8 py-3 border border-gray-500 text-white rounded-md transition hover:border-white hover:bg-white hover:text-black"
//             >
//               Learn More
//             </Link>

//           </div>

//         </div>

//         {/* Bottom Gradient Fade */}
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent" />
//       </section>
//     </div>
//   );
// };

// export default Hero1;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Hero1 = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setVisible(true), 100);
//   }, []);

//   return (
//     <div className="overflow-x-hidden">

//       {/* HERO */}
//       <section className="relative min-h-screen flex items-center justify-center px-6">

//         {/* Gradient Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#22D3EE]" />

//         {/* Soft Blur Glow */}
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-3xl" />

//         {/* CONTENT */}
//         <div
//           className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//         >

//           {/* Logo */}
//           <div className="mb-6">
//             <h2 className="text-white text-2xl font-semibold tracking-wide">
//               D Dolly Lamb
//             </h2>
//           </div>

//           {/* Heading */}
//           <h1
//             className="text-white font-bold leading-tight"
//             style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
//           >
//             People Get <span className="text-white/80">Good Style</span>
//           </h1>

//           {/* Search Box */}
//           <div className="mt-8 flex justify-center">
//             <div className="flex items-center bg-white/20 backdrop-blur-lg px-6 py-3 rounded-xl w-full max-w-xl">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="bg-transparent outline-none text-white w-full placeholder:text-white/70"
//               />
//               <span className="text-white ml-2">🔍</span>
//             </div>
//           </div>

//           {/* Cards */}
//           <div className="mt-10 flex flex-wrap justify-center gap-4">

//             <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl w-40 text-left text-white">
//               <p className="text-sm opacity-80">Popular</p>
//               <h3 className="font-semibold">Items</h3>
//             </div>

//             <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl w-40 text-left text-white">
//               <p className="text-sm opacity-80">Special</p>
//               <h3 className="font-semibold">Offers</h3>
//             </div>

//             <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl w-40 text-left text-white">
//               <p className="text-sm opacity-80">Explore</p>
//               <h3 className="font-semibold">Collection</h3>
//             </div>

//           </div>

//           {/* CTA */}
//           <div className="mt-10">
//             <Link
//               to="/collection"
//               className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition"
//             >
//               Shop Now
//             </Link>
//           </div>

//         </div>

//       </section>
//     </div>
//   );
// };

// export default Hero1;



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

//   useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

//   useEffect(() => {
//     const t = setInterval(() => setActiveFeature((p) => (p + 1) % 4), 3500);
//     return () => clearInterval(t);
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

//   const whyItems = [
//     "Hand-selected Grade A lambskin hides",
//     "Bespoke sizing available on all styles",
//     "Antique brass & gunmetal hardware options",
//     "Complimentary lifetime conditioning service",
//   ];

//   const craftBoxes = [
//     { bg: "bg-[#1c2257]", label: "Lambskin", sub: "PREMIUM HIDE" },
//     { bg: "bg-[#0f1438]", label: "Artisan", sub: "HAND CRAFTED" },
//     { bg: "bg-[#0a0e2e]", label: "Fit", sub: "BESPOKE CUT" },
//     { bg: "bg-[#161b4a]", label: "Heritage", sub: "EST. 2001" },
//   ];

//   return (
//     <div className="bg-[#121740] text-[#FAF9F6] font-serif overflow-x-hidden">

//       {/* ════════════════════════════════════════
//           HERO
//       ════════════════════════════════════════ */}
//       <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#0a0e2e] via-[#121740] to-[#1c2257]">

//         {/* Noise texture overlay */}
//         <div
//           className="absolute inset-0 z-[1] pointer-events-none opacity-40"
//           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")" }}
//         />

//         {/* Right red glow */}
//         <div className="absolute top-0 right-0 w-2/5 h-full z-[1] bg-gradient-to-bl from-transparent to-[rgba(217,43,43,0.07)]" />

//         {/* Blue glow top-left */}
//         <div className="absolute top-0 left-0 w-1/3 h-1/2 z-[1] bg-gradient-to-br from-[rgba(28,34,87,0.8)] to-transparent" />

//         {/* Left vertical accent line */}
//         <div className="absolute left-[7%] top-[20%] h-[60%] w-px z-[2] bg-gradient-to-b from-transparent via-[rgba(217,43,43,0.5)] to-transparent" />

//         {/* Glowing dots — inspired by Image 3 */}
//         <div className="absolute z-[2] w-2 h-2 rounded-full bg-[#D92B2B] shadow-[0_0_12px_4px_rgba(217,43,43,0.5)]" style={{ top: "22%", left: "18%" }} />
//         <div className="absolute z-[2] w-1.5 h-1.5 rounded-full bg-[#D92B2B] shadow-[0_0_10px_3px_rgba(217,43,43,0.4)]" style={{ top: "55%", left: "12%" }} />
//         <div className="absolute z-[2] w-1.5 h-1.5 rounded-full bg-[#D92B2B] shadow-[0_0_10px_3px_rgba(217,43,43,0.4)]" style={{ top: "35%", right: "14%" }} />
//         <div className="absolute z-[2] w-2 h-2 rounded-full bg-[#FAF9F6] shadow-[0_0_8px_3px_rgba(250,249,246,0.3)]" style={{ top: "70%", right: "20%" }} />

//         {/* Hero content */}
//         <div
//           className={`relative z-10 text-center px-6 max-w-[1100px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//         >
//           {/* Eyebrow */}
//           <div className="inline-flex items-center gap-3.5 mb-7">
//             <span className="w-10 h-px bg-[#D92B2B]" />
//             <span className="text-[11px] tracking-[0.35em] text-[#D92B2B] font-sans font-semibold">
//               ARTISAN LEATHER ATELIER
//             </span>
//             <span className="w-10 h-px bg-[#D92B2B]" />
//           </div>

//           {/* Brand name */}
//           <h1 className="leading-[0.9] tracking-[-0.02em] text-[#FAF9F6] m-0 font-normal"
//             style={{ fontSize: "clamp(3.5rem,12vw,10rem)" }}>
//             D&nbsp;DOLLY
//             <span className="block text-[#D92B2B] tracking-[0.22em] mt-2"
//               style={{ fontSize: "clamp(2rem,6vw,5rem)" }}>
//               LAMB
//             </span>
//           </h1>

//           {/* Red diamond divider */}
//           <div className="my-7 flex items-center justify-center gap-3.5">
//             <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#D92B2B]" />
//             <span className="w-1.5 h-1.5 bg-[#D92B2B] rotate-45" />
//             <span className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#D92B2B]" />
//           </div>

//           {/* Tagline */}
//           <p className="text-[#c0c4e8] leading-[1.7] tracking-[0.04em] italic mb-11"
//             style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}>
//             Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
//           </p>

//           {/* CTA buttons */}
//           <div className="flex gap-5 justify-center flex-wrap">
//             <Link
//               to="/collection"
//               className="inline-block px-12 py-4 bg-gradient-to-br from-[#D92B2B] to-[#ff4444] text-[#FAF9F6] no-underline tracking-[0.18em] text-xs font-sans font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(217,43,43,0.45)]"
//             >
//               SHOP THE COLLECTION
//             </Link>
//             <Link
//               to="/about"
//               className="inline-block px-12 py-4 bg-transparent text-[#FAF9F6] no-underline tracking-[0.18em] text-xs font-sans font-semibold border border-[rgba(250,249,246,0.3)] transition-all duration-300 hover:border-[#FAF9F6] hover:bg-[rgba(250,249,246,0.07)]"
//             >
//               OUR STORY
//             </Link>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
//           <span className="text-[9px] tracking-[0.3em] text-[#D92B2B] font-sans">SCROLL</span>
//           <div className="w-px h-12 bg-gradient-to-b from-[#D92B2B] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
//         </div>

//         {/* Feature ticker */}
//         <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center gap-16 flex-wrap px-4 py-3.5 bg-[rgba(217,43,43,0.08)] border-t border-[rgba(217,43,43,0.2)]">
//           {features.map((f, i) => (
//             <div
//               key={i}
//               className="text-center transition-opacity duration-500"
//               style={{ opacity: activeFeature === i ? 1 : 0.4 }}
//             >
//               <div className="text-[10px] tracking-[0.28em] text-[#FAF9F6] font-sans font-bold">{f.label}</div>
//               <div className="text-[9px] text-[#D92B2B] tracking-[0.15em] font-sans">{f.sub}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           MARQUEE
//       ════════════════════════════════════════ */}
//       <div className="bg-[#D92B2B] overflow-hidden py-3 whitespace-nowrap">
//         <div className="inline-block animate-[marquee_20s_linear_infinite]">
//           {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  BESPOKE TAILORING  ◆  NEW COLLECTION 2025  ").map((t, i) => (
//             <span key={i} className="text-[11px] tracking-[0.2em] text-[#FAF9F6] font-sans font-bold">{t}</span>
//           ))}
//         </div>
//       </div>

//       {/* ════════════════════════════════════════
//           COLLECTIONS
//       ════════════════════════════════════════ */}
//       <section className="px-[5%] pt-24 pb-20 max-w-[1400px] mx-auto">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <p className="text-[10px] tracking-[0.4em] text-[#D92B2B] font-sans mb-4">CURATED FOR YOU</p>
//           <h2 className="text-[#FAF9F6] font-normal m-0 tracking-[0.05em]"
//             style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
//             Shop by Category
//           </h2>
//           <div className="w-14 h-0.5 bg-[#D92B2B] mx-auto mt-5" />
//         </div>

//         {/* Grid */}
//         <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
//           {collections.map((col, i) => (
//             <Link key={i} to={col.href} className="no-underline">
//               <div
//                 className={`relative flex flex-col justify-end min-h-[320px] p-10 overflow-hidden transition-all duration-400 border border-[rgba(250,249,246,0.1)] hover:border-[#D92B2B] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${i === 0 ? "bg-gradient-to-br from-[#1c2257] to-[#121740]"
//                   : i === 1 ? "bg-gradient-to-br from-[#121740] to-[#0a0e2e]"
//                     : "bg-gradient-to-br from-[#161b4a] to-[#121740]"
//                   }`}
//               >
//                 {/* Tag badge */}
//                 <span className="absolute top-6 left-6 text-[9px] tracking-[0.3em] text-[#FAF9F6] bg-[#D92B2B] px-3 py-1 font-sans font-bold">
//                   {col.tag}
//                 </span>

//                 {/* Ghost number */}
//                 <div className="absolute top-5 right-7 text-[7rem] text-[rgba(250,249,246,0.04)] font-serif leading-none">
//                   0{i + 1}
//                 </div>

//                 <div>
//                   <p className="text-[11px] tracking-[0.3em] text-[#D92B2B] font-sans mb-2">{col.subtitle}</p>
//                   <h3 className="text-[#FAF9F6] font-normal m-0 mb-3.5 tracking-[0.06em]"
//                     style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
//                     {col.title}
//                   </h3>
//                   <p className="text-sm text-[#8890c4] italic mb-6 leading-relaxed">{col.desc}</p>
//                   <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] text-[#FAF9F6] font-sans">
//                     EXPLORE →
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           STATS
//       ════════════════════════════════════════ */}
//       <section className="px-[5%] py-20 bg-gradient-to-br from-[#0a0e2e] via-[#121740] to-[#1c2257] border-t border-b border-[rgba(217,43,43,0.15)]">
//         <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//           {stats.map((stat, i) => (
//             <div key={i} className="group flex flex-col items-center gap-2">
//               <div className="h-px mb-2 transition-all duration-500 w-8 group-hover:w-16 bg-gradient-to-r from-transparent via-[#D92B2B] to-transparent" />

//               <div className="text-[#FAF9F6] font-serif font-normal leading-none"
//                 style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
//                 <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
//               </div>

//               <div className="text-xs font-bold mt-1 tracking-[0.25em] text-[#D92B2B] font-sans">
//                 {stat.label}
//               </div>

//               <p className="text-xs leading-relaxed italic mt-1 text-[#6065a0] max-w-[180px]">
//                 {stat.desc}
//               </p>

//               <div className="h-px mt-2 transition-all duration-700 w-4 group-hover:w-12 bg-[rgba(217,43,43,0.3)]" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           WHY CHOOSE US
//       ════════════════════════════════════════ */}
//       <section className="px-[5%] py-24 max-w-[1200px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

//           {/* Left copy */}
//           <div>
//             <p className="text-[10px] tracking-[0.4em] text-[#D92B2B] font-sans mb-4">
//               THE D DOLLY LAMB DIFFERENCE
//             </p>
//             <h2 className="text-[#FAF9F6] font-normal leading-tight mb-6"
//               style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
//               Where Leather Becomes Legend
//             </h2>
//             <p className="text-[#8890c4] leading-[1.9] text-[15px] mb-9 italic">
//               Every D Dolly Lamb jacket begins with hand-selected lambskin hides, chosen for their unparalleled softness and grain character.
//             </p>

//             <div className="flex flex-col gap-5">
//               {whyItems.map((item, i) => (
//                 <div key={i} className="flex items-center gap-3.5">
//                   <span className="w-1.5 h-1.5 bg-[#D92B2B] rotate-45 flex-shrink-0" />
//                   <span className="text-[13px] text-[#c0c4e8] tracking-[0.04em]">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               to="/about"
//               className="inline-block mt-10 px-10 py-3.5 border border-[#D92B2B] text-[#FAF9F6] no-underline text-[11px] tracking-[0.22em] font-sans font-semibold transition-all duration-300 hover:bg-[#D92B2B] hover:text-[#FAF9F6]"
//             >
//               LEARN MORE
//             </Link>
//           </div>

//           {/* Right craft grid */}
//           <div className="grid grid-cols-2 gap-0.5">
//             {craftBoxes.map((box, i) => (
//               <div
//                 key={i}
//                 className={`${box.bg} border border-[rgba(250,249,246,0.08)] px-6 py-10 text-center transition-all duration-300 hover:border-[#D92B2B]`}
//               >
//                 <p className="text-[9px] tracking-[0.3em] text-[#D92B2B] font-sans mb-2.5">{box.sub}</p>
//                 <p className="text-[1.3rem] text-[#FAF9F6] font-serif">{box.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           TESTIMONIALS
//       ════════════════════════════════════════ */}
//       <section className="bg-[#0a0e2e] border-t border-[rgba(217,43,43,0.15)] px-[5%] py-20 text-center">
//         <p className="text-[10px] tracking-[0.4em] text-[#D92B2B] font-sans mb-4">CLIENT VOICES</p>
//         <h2 className="text-[#FAF9F6] font-normal mb-12"
//           style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>
//           What Our Clients Say
//         </h2>

//         <div className="max-w-[600px] mx-auto min-h-[120px]">
//           <p className="text-[#c0c4e8] italic leading-[1.7] mb-6"
//             style={{ fontSize: "clamp(1rem,2vw,1.3rem)" }}>
//             "{testimonials[activeTestimonial].quote}"
//           </p>
//           <p className="text-xs tracking-[0.2em] text-[#D92B2B] font-sans">
//             — {testimonials[activeTestimonial].name},{" "}
//             <span className="text-[#6065a0]">{testimonials[activeTestimonial].location}</span>
//           </p>
//         </div>

//         {/* Dot indicators */}
//         <div className="flex justify-center gap-2.5 mt-8">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTestimonial(i)}
//               className={`h-2 border-none cursor-pointer transition-all duration-300 ${i === activeTestimonial ? "w-7 bg-[#D92B2B]" : "w-2 bg-[#1c2257]"
//                 }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           GLOBAL KEYFRAMES
//       ════════════════════════════════════════ */}
//       <style>{`
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scrollPulse {
//           0%, 100% { opacity: 1;   transform: scaleY(1);   }
//           50%       { opacity: 0.4; transform: scaleY(0.7); }
//         }
//         * { box-sizing: border-box; }
//       `}</style>
//     </div>
//   );
// };

// export default Hero1;