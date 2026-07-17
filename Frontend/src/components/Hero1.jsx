// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// /* ── Animated Counter ──────────────────────────── */
// const AnimatedCounter = ({ end, suffix = "", duration = 1800 }) => {
//   const [count, setCount] = useState(0);
//   const [hovered, setHovered] = useState(false);
//   const ref = useRef(null);
//   const started = useRef(false);

//   const runCounter = () => {
//     if (end === "∞") { setCount("∞"); return; }
//     const numEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));
//     const hasComma = String(end).includes(",");
//     setCount(0);
//     let startTime = null;
//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       const current = Math.floor(eased * numEnd);
//       setCount(hasComma ? current.toLocaleString() : current);
//       if (progress < 1) requestAnimationFrame(step);
//       else setCount(hasComma ? numEnd.toLocaleString() : numEnd);
//     };
//     requestAnimationFrame(step);
//   };

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !started.current) {
//           started.current = true;
//           runCounter();
//         }
//       },
//       { threshold: 0.4 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [end, duration]);

//   return (
//     <span
//       ref={ref}
//       onMouseEnter={() => { setHovered(true); runCounter(); }}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: "inline-block",
//         transition: "transform 0.25s ease",
//         transform: hovered ? "scale(1.12)" : "scale(1)",
//         cursor: "pointer",
//         background: "linear-gradient(135deg,#1E40AF,#6366F1,#0EA5E9)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         backgroundClip: "text",
//       }}
//     >
//       {count}{suffix}
//     </span>
//   );
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
//     {
//       title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men", accent: "#4F46E5", light: "#EEF2FF", mid: "#C7D2FE", image: assets.menPng, menWidth: "52%",
//     },
//     {
//       title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women", accent: "#7C3AED", light: "#F5F3FF", mid: "#DDD6FE", image: assets.womenPng, imgWidth: "62%", menWidth: "62%",
//     },
//     {
//       title: "OTHERS", subtitle: "Edition Collection", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection", accent: "#0EA5E9", light: "#F0F9FF", mid: "#BAE6FD", image: assets.otherPng, imgWidth: "58%", menWidth: "40%",
//     },
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

//   const craftBoxes = [
//     { gradient: "linear-gradient(135deg,#EEF2FF,#E0E7FF)", accent: "#4F46E5", label: "Lambskin", sub: "PREMIUM HIDE" },
//     { gradient: "linear-gradient(135deg,#F0F9FF,#E0F2FE)", accent: "#0EA5E9", label: "Artisan", sub: "HAND CRAFTED" },
//     { gradient: "linear-gradient(135deg,#F5F3FF,#EDE9FE)", accent: "#7C3AED", label: "Fit", sub: "BESPOKE CUT" },
//     { gradient: "linear-gradient(135deg,#FFF7ED,#FEF3C7)", accent: "#D97706", label: "Heritage", sub: "EST. 2001" },
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
//         {/* Animated orbs — no blur */}
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

//         {/* Vertical accents */}
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
//           background: "rgba(255,255,255,0.9)",
//           border: "1px solid rgba(99,102,241,0.18)", borderRadius: "14px",
//           padding: "16px 20px",
//           boxShadow: "0 8px 24px rgba(99,102,241,0.15), 0 2px 8px rgba(99,102,241,0.08)",
//           animation: "floatBadge 5s ease-in-out infinite",
//           display: "flex", flexDirection: "column", gap: "4px",
//         }}>
//           <span style={{ fontSize: "22px", fontWeight: 700, color: "#4F46E5", lineHeight: 1, fontFamily: "sans-serif" }}>22+</span>
//           <span style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#94A3B8", fontFamily: "sans-serif" }}>YEARS CRAFT</span>
//         </div>

//         {/* Floating badge - right */}
//         <div style={{
//           position: "absolute", right: "4%", top: "45%",
//           background: "rgba(255,255,255,0.9)",
//           border: "1px solid rgba(14,165,233,0.2)", borderRadius: "14px",
//           padding: "16px 20px",
//           boxShadow: "0 8px 24px rgba(14,165,233,0.15), 0 2px 8px rgba(14,165,233,0.08)",
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
//             marginBottom: "10px",
//             marginTop: "10px",
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

//           {/* Brand headline — animated gradient */}
//           <div style={{ position: "relative" }}>
//             <h1 style={{
//               lineHeight: 0.88, margin: 0, fontWeight: 400,
//               letterSpacing: "-0.02em",
//               fontSize: "clamp(4rem, 13vw, 10.5rem)",
//               background: "linear-gradient(90deg, #1E40AF 0%, #4F46E5 20%, #7C3AED 40%, #0EA5E9 55%, #6366F1 70%, #1E40AF 100%)",
//               backgroundSize: "300% 100%",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//               animation: "gradientFlow 4s linear infinite",
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
//           <div style={{ margin: "20px auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", maxWidth: "280px" }}>
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
//             maxWidth: "520px", margin: "0 auto 48px",
//           }}>
//             Premium Lambskin Jackets — Crafted for Comfort &amp; Timeless Style
//           </p>

//           {/* CTA buttons */}
//           <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px", paddingBottom: "20px" }}>
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
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
//                 e.currentTarget.style.boxShadow = "0 18px 48px rgba(99,102,241,0.42), 0 4px 12px rgba(99,102,241,0.25)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.transform = "translateY(0) scale(1)";
//                 e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,102,241,0.32), 0 2px 8px rgba(99,102,241,0.2)";
//               }}
//               onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.97)"; }}
//               onMouseUp={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; }}
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
//               onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.97)"; }}
//               onMouseUp={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1)"; }}
//             >
//               OUR STORY
//             </Link>
//           </div>

//           {/* Trust row */}
//           {/* <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "44px", marginBottom: "100px", flexWrap: "wrap" }}>
//             {["Free Shipping Over ₹5000", "100% Genuine Leather", "Lifetime Warranty"].map((t, i) => (
//               <span key={i} style={{
//                 display: "inline-flex", alignItems: "center", gap: "6px",
//                 fontSize: "11px", color: "#64748B", fontFamily: "sans-serif",
//               }}>
//                 <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", display: "inline-block" }} />
//                 {t}
//               </span>
//             ))}
//           </div> */}
//         </div>

//         {/* Scroll indicator */}
//         {/* <div style={{ position: "absolute", bottom: "72px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.55 }}>
//           <span style={{ fontSize: "8px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", fontWeight: 600 }}>SCROLL</span>
//           <div style={{ width: "22px", height: "36px", border: "1.5px solid rgba(99,102,241,0.4)", borderRadius: "12px", display: "flex", justifyContent: "center", paddingTop: "6px" }}>
//             <div style={{ width: "3px", height: "8px", background: "#6366F1", borderRadius: "2px", animation: "scrollMouse 2s ease-in-out infinite" }} />
//           </div>
//         </div> */}

//         {/* Feature ticker */}
//         <div style={{
//           position: "absolute", bottom: 0, left: 0, right: 0,
//           display: "flex", justifyContent: "center",
//           background: "rgba(255,255,255,0.85)",
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
//       <section style={{ padding: "50px 5% 50px", maxWidth: "1400px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
//           {/* <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "14px", fontWeight: 700 }}>CURATED FOR YOU</p> */}
//           {/* Eyebrow line */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '4px' }}>
//             <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to right, transparent, #6366F1)' }} />
//             <span style={{
//               fontSize: '10px',
//               letterSpacing: '0.35em',
//               color: '#6366F1',
//               textAlign: 'center',
//               fontFamily: "'Montserrat', sans-serif",
//               fontWeight: 600,
//               textTransform: 'uppercase',
//             }}>
//               CURATED FOR YOU
//             </span>
//             <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to left, transparent, #6366F1)' }} />
//           </div>
//           <h2 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 20px", letterSpacing: "0.04em", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
//             Shop by Category
//           </h2>
//           <div style={{ width: "56px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", margin: "0 auto", borderRadius: "2px" }} />
//         </div>

//         <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
//           {collections.map((col, i) => (
//             <Link key={i} to={col.href} style={{ textDecoration: "none" }}>
//               <div
//                 className="collection-card"
//                 data-accent={col.accent}
//                 style={{
//                   position: "relative", display: "flex", flexDirection: "column",
//                   justifyContent: "flex-end", minHeight: "360px",
//                   padding: "40px 36px", overflow: "hidden",
//                   transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
//                   border: `1.5px solid rgba(99,102,241,0.12)`,
//                   borderRadius: "16px", background: "#fff",
//                   boxShadow: "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03)",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.boxShadow = `0 28px 64px rgba(0,0,0,0.11), 0 8px 24px ${col.accent}25, 0 0 0 2px ${col.accent}35`;
//                   e.currentTarget.style.borderColor = `${col.accent}10`;
//                   // Animate explore link underline
//                   const link = e.currentTarget.querySelector(".explore-link-bar");
//                   if (link) link.style.width = "100%";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03)";
//                   e.currentTarget.style.borderColor = "rgba(99,102,241,0.12)";
//                   const link = e.currentTarget.querySelector(".explore-link-bar");
//                   if (link) link.style.width = "0%";
//                 }}
//                 onMouseDown={e => {
//                   e.currentTarget.style.transform = "translateY(-4px) scale(0.99)";
//                   e.currentTarget.style.boxShadow = `0 14px 36px rgba(0,0,0,0.09), 0 4px 12px ${col.accent}20`;
//                 }}
//                 onMouseUp={e => {
//                   e.currentTarget.style.transform = "translateY(-8px) scale(1)";
//                   e.currentTarget.style.boxShadow = `0 28px 64px rgba(0,0,0,0.11), 0 8px 24px ${col.accent}25, 0 0 0 2px ${col.accent}35`;
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
//                   boxShadow: `0 4px 12px ${col.accent}40`,
//                 }}>
//                   {col.tag}
//                 </span>

//                 {/* Ghost number */}
//                 <div style={{ position: "absolute", top: "16px", right: "24px", fontSize: "7.5rem", color: `${col.accent}08`, fontFamily: "serif", lineHeight: 1, fontWeight: 700 }}>
//                   0{i + 1}
//                 </div>

//                 <div>
//                   <img src={col.image} alt={col.title} style={{ position: "absolute", bottom: 0, right: 0, width: "70%", height: "80%", borderRadius: "16px", pointerEvents: "none", objectFit: "contain", }} />
//                 </div>

//                 <div style={{ position: "relative", zIndex: 1 }}>
//                   <p style={{ fontSize: "10px", letterSpacing: "0.28em", color: col.accent, fontFamily: "sans-serif", margin: "0 0 8px", fontWeight: 600 }}>{col.subtitle}</p>
//                   <h3 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 14px", letterSpacing: "0.05em", fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
//                     {col.title}
//                   </h3>
//                   <p style={{ width: col.menWidth, fontSize: "13px", color: "#64748B", fontStyle: "italic", marginBottom: "28px", lineHeight: 1.7 }}>{col.desc}</p>

//                   {/* Explore link with animated bottom bar */}
//                   <div style={{ position: "relative", display: "inline-block", paddingBottom: "6px" }}>
//                     <div style={{
//                       display: "inline-flex", alignItems: "center", gap: "8px",
//                       fontSize: "10px", letterSpacing: "0.22em", color: col.accent,
//                       fontFamily: "sans-serif", fontWeight: 700,
//                     }}>
//                       EXPLORE <br /> COLLECTION →
//                     </div>
//                     {/* Animated underline bar */}
//                     <div
//                       className="explore-link-bar"
//                       style={{
//                         position: "absolute", bottom: 0, left: 0,
//                         height: "2px", width: "0%",
//                         background: `linear-gradient(90deg, ${col.accent}, ${col.mid})`,
//                         borderRadius: "1px",
//                         transition: "width 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ════ STATS ════ */}
//       <section style={{ padding: "40px 5%", background: "linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 100%)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
//         <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", textAlign: "center" }}>
//           {stats.map((stat, i) => (
//             <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
//               <div style={{ width: "28px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", borderRadius: "2px", marginBottom: "10px" }} />
//               <div style={{ fontSize: "clamp(2rem,5vw,3rem)", fontFamily: "serif", fontWeight: 300, lineHeight: 1 }}>
//                 <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
//               </div>
//               <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.26em", color: "#4F46E5", fontFamily: "sans-serif", marginTop: "6px" }}>{stat.label}</div>
//               <p style={{ fontSize: "12px", lineHeight: 1.75, color: "#94A3B8", maxWidth: "170px", margin: 0 }}>{stat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════ WHY CHOOSE US ════ */}
//       <section style={{ padding: "50px 5%", maxWidth: "1200px", margin: "0 auto" }}>
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
//               onMouseEnter={e => {
//                 e.currentTarget.style.background = "#4F46E5";
//                 e.currentTarget.style.color = "#fff";
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow = "0 10px 28px rgba(79,70,229,0.28)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.background = "transparent";
//                 e.currentTarget.style.color = "#4F46E5";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//               onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.97)"; }}
//               onMouseUp={e => { e.currentTarget.style.transform = "translateY(-2px) scale(1)"; }}
//             >
//               LEARN MORE →
//             </Link>
//           </div>

//           {/* Craft grid — fixed with proper shadows and click effects */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
//             {craftBoxes.map((box, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: box.gradient,
//                   border: `1.5px solid ${box.accent}20`,
//                   padding: "44px 24px", textAlign: "center", borderRadius: "14px",
//                   transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
//                   cursor: "pointer",
//                   boxShadow: `0 4px 16px ${box.accent}10, 0 1px 4px rgba(0,0,0,0.04)`,
//                   userSelect: "none",
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
//                   e.currentTarget.style.boxShadow = `0 20px 48px ${box.accent}28, 0 6px 16px ${box.accent}15`;
//                   e.currentTarget.style.borderColor = `${box.accent}50`;
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = "translateY(0) scale(1)";
//                   e.currentTarget.style.boxShadow = `0 4px 16px ${box.accent}10, 0 1px 4px rgba(0,0,0,0.04)`;
//                   e.currentTarget.style.borderColor = `${box.accent}20`;
//                 }}
//                 onMouseDown={e => {
//                   e.currentTarget.style.transform = "translateY(-2px) scale(0.97)";
//                   e.currentTarget.style.boxShadow = `0 8px 20px ${box.accent}20, 0 2px 8px ${box.accent}10`;
//                 }}
//                 onMouseUp={e => {
//                   e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
//                   e.currentTarget.style.boxShadow = `0 20px 48px ${box.accent}28, 0 6px 16px ${box.accent}15`;
//                 }}
//               >
//                 <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: box.accent, fontFamily: "sans-serif", margin: "0 0 10px", fontWeight: 700 }}>{box.sub}</p>
//                 <p style={{ fontSize: "1.4rem", color: "#0F172A", fontFamily: "serif", margin: 0, fontWeight: 400 }}>{box.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════ TESTIMONIALS ════ */}
//       <section style={{ background: "linear-gradient(135deg,#F8FAFF,#EEF2FF)", borderTop: "1px solid rgba(99,102,241,0.08)", padding: "30px 5%", textAlign: "center" }}>
//         {/* <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#6366F1", fontFamily: "sans-serif", marginBottom: "16px", fontWeight: 700 }}>CLIENT VOICES</p> */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '4px' }}>
//           <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to right, transparent, #6366F1)' }} />
//           <span style={{
//             fontSize: '10px',
//             letterSpacing: '0.35em',
//             color: '#6366F1',
//             textAlign: 'center',
//             fontFamily: "'Montserrat', sans-serif",
//             fontWeight: 600,
//             textTransform: 'uppercase',
//           }}>
//             CLIENT VOICES
//           </span>
//           <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to left, transparent, #6366F1)' }} />
//         </div>
//         <h2 style={{ color: "#0F172A", fontWeight: 300, marginBottom: "10px", fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>What Our Clients Say</h2>

//         <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "130px" }}>
//           <div className="text-gray-500" style={{ fontSize: "64px", lineHeight: 1, fontFamily: "serif" }}>"</div>
//           <p style={{ color: "#334155", fontStyle: "italic", lineHeight: 1.85, marginBottom: "24px", fontSize: "clamp(1rem,2vw,1.25rem)" }}>
//             {testimonials[activeTestimonial].quote}
//           </p>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
//             <div style={{ width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #6366F1)" }} />
//             <p style={{ fontSize: "13px", letterSpacing: "0.2em", color: "#6366F1", fontFamily: "sans-serif", margin: 0, fontWeight: 600 }}>
//               {testimonials[activeTestimonial].name}
//             </p>
//             <span style={{ fontSize: "12px", color: "#94A3B8", letterSpacing: "0.14em", fontFamily: "sans-serif" }}>{testimonials[activeTestimonial].location}</span>
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
//         @keyframes gradientFlow {
//           0%   { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
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
//         * { box-sizing: border-box; }
//       `}</style>
//     </div>
//   );
// };

// export default Hero1;







import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/* ── Static data — moved OUTSIDE the component so it's created once,
   not re-created on every render ──────────────────────────────── */
const FEATURES = [
  { icon: "✦", label: "HAND-STITCHED", sub: "Artisan Craft" },
  { icon: "◈", label: "LAMBSKIN", sub: "Premium Hide" },
  { icon: "⬡", label: "BESPOKE FIT", sub: "Made to Order" },
  { icon: "◆", label: "HERITAGE", sub: "Since 2001" },
];

const COLLECTIONS = [
  {
    title: "MEN'S", subtitle: "Leather Jackets", tag: "NEW SEASON", desc: "Structured silhouettes with raw edge finishing", href: "/collection?category=Men", accent: "#4F46E5", light: "#EEF2FF", mid: "#C7D2FE", image: assets.menPng, menWidth: "52%",
  },
  {
    title: "WOMEN'S", subtitle: "Leather Jackets", tag: "BESTSELLER", desc: "Tailored cuts with refined feminine details", href: "/collection?category=Women", accent: "#7C3AED", light: "#F5F3FF", mid: "#DDD6FE", image: assets.womenPng, imgWidth: "62%", menWidth: "62%",
  },
  {
    title: "OTHERS", subtitle: "Edition Collection", tag: "EXCLUSIVE", desc: "Numbered pieces for the discerning collector", href: "/collection", accent: "#0EA5E9", light: "#F0F9FF", mid: "#BAE6FD", image: assets.otherPng, imgWidth: "58%", menWidth: "40%",
  },
];

const TESTIMONIALS = [
  { quote: "The finest lambskin I've worn — supple on day one.", name: "James H.", location: "London" },
  { quote: "Worth every penny. A jacket that ages like fine wine.", name: "Sofia R.", location: "Milan" },
  { quote: "Exceptional quality, impeccable fit, unmatched luxury.", name: "Marcus T.", location: "New York" },
];

const STATS = [
  { end: 22, suffix: "+", label: "Years of Craft", desc: "Two decades perfecting leather tailoring" },
  { end: 100, suffix: "%", label: "Pure Lambskin", desc: "Finest tanneries across Europe" },
  { end: "3,200", suffix: "+", label: "Happy Clients", desc: "Worn across 45 countries" },
  { end: "∞", suffix: "", label: "Lifetime Quality", desc: "Built to outlast every season" },
];

const WHY_ITEMS = [
  "Hand-selected Grade A lambskin hides",
  "Bespoke sizing available on all styles",
  "Antique brass & gunmetal hardware options",
  "Complimentary lifetime conditioning service",
];

const PARTICLES = [
  { width: 6, height: 6, background: "rgba(99,102,241,0.35)", top: "15%", left: "8%", animationDelay: "0s", animationDuration: "7s" },
  { width: 4, height: 4, background: "rgba(14,165,233,0.4)", top: "30%", left: "92%", animationDelay: "1.5s", animationDuration: "5s" },
  { width: 8, height: 8, background: "rgba(124,58,237,0.25)", top: "60%", left: "5%", animationDelay: "3s", animationDuration: "8s" },
  { width: 5, height: 5, background: "rgba(99,102,241,0.3)", top: "75%", left: "88%", animationDelay: "0.8s", animationDuration: "6s" },
  { width: 3, height: 3, background: "rgba(14,165,233,0.5)", top: "45%", left: "96%", animationDelay: "2s", animationDuration: "9s" },
];

const CRAFT_BOXES = [
  { gradient: "linear-gradient(135deg,#EEF2FF,#E0E7FF)", accent: "#4F46E5", label: "Lambskin", sub: "PREMIUM HIDE" },
  { gradient: "linear-gradient(135deg,#F0F9FF,#E0F2FE)", accent: "#0EA5E9", label: "Artisan", sub: "HAND CRAFTED" },
  { gradient: "linear-gradient(135deg,#F5F3FF,#EDE9FE)", accent: "#7C3AED", label: "Fit", sub: "BESPOKE CUT" },
  { gradient: "linear-gradient(135deg,#FFF7ED,#FEF3C7)", accent: "#D97706", label: "Heritage", sub: "EST. 2001" },
];

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
  // const [visible, setVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  // useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);
  useEffect(() => {
    const t = setInterval(() => setActiveFeature((p) => (p + 1) % 4), 3200);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % 3), 4500);
    return () => clearInterval(t);
  }, []);

  /* ── Mouse-parallax: direct DOM writes, no React state/re-render ──
     - scoped to the hero section only (not window), so it stops
       costing anything once the user scrolls past
     - throttled to one update per animation frame via rAF
     - cached bounding rect, only recalculated on resize            */
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    let rect = section.getBoundingClientRect();
    let rafId = null;

    const updateRect = () => { rect = section.getBoundingClientRect(); };
    window.addEventListener("resize", updateRect);

    const handleMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
        if (orb1Ref.current) {
          orb1Ref.current.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        }
        if (orb2Ref.current) {
          orb2Ref.current.style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`;
        }
        rafId = null;
      });
    };

    section.addEventListener("mousemove", handleMove);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", updateRect);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

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
        {/* Animated orbs — transform now driven by ref, not React state */}
        <div
          ref={orb1Ref}
          style={{
            position: "absolute", top: "-15%", right: "-8%",
            width: "650px", height: "650px", borderRadius: "50%",
            background: "radial-gradient(circle at 40% 40%, rgba(99,102,241,0.25) 0%, rgba(14,165,233,0.15) 50%, transparent 75%)",
            transform: "translate(0px, 0px)",
            transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
            pointerEvents: "none",
            willChange: "transform",
          }}
        />
        <div
          ref={orb2Ref}
          style={{
            position: "absolute", bottom: "-10%", left: "-8%",
            width: "550px", height: "550px", borderRadius: "50%",
            background: "radial-gradient(circle at 60% 60%, rgba(14,165,233,0.22) 0%, rgba(99,102,241,0.12) 50%, transparent 75%)",
            transform: "translate(0px, 0px)",
            transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
            pointerEvents: "none",
            willChange: "transform",
          }}
        />
        <div style={{
          position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "400px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
  linear-gradient(rgba(30,41,59,0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(30,41,59,0.04) 1px, transparent 1px)
`,
          backgroundSize: "64px 64px", pointerEvents: "none",
        }} />

        {/* Floating particles */}
        {PARTICLES.map((p, i) => <Particle key={i} style={p} />)}

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
          // opacity: visible ? 1 : 0,
          // transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.97)",
          opacity: 1,
          transform: "none",
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
              // animation: "gradientFlow 4s linear infinite",
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
          <div style={{ margin: "20px auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", maxWidth: "280px" }}>
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
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px", paddingBottom: "20px" }}>
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
        </div>

        {/* Feature ticker */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          display: "flex", justifyContent: "center",
          background: "rgba(255,255,255,0.85)",
          borderTop: "1px solid rgba(99,102,241,0.12)",
        }}>
          {FEATURES.map((f, i) => (
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
      <section style={{ padding: "50px 5% 50px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '4px' }}>
            <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to right, transparent, #6366F1)' }} />
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              color: '#6366F1',
              textAlign: 'center',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              textTransform: 'uppercase',
            }}>
              CURATED FOR YOU
            </span>
            <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to left, transparent, #6366F1)' }} />
          </div>
          <h2 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 20px", letterSpacing: "0.04em", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Shop by Category
          </h2>
          <div style={{ width: "56px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", margin: "0 auto", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {COLLECTIONS.map((col, i) => (
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
                  e.currentTarget.style.borderColor = `${col.accent}10`;
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

                <div>
                  <img
                    src={col.image}
                    alt={col.title}
                    width={400}
                    height={450}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    style={{ position: "absolute", bottom: 0, right: 0, width: "70%", height: "80%", borderRadius: "16px", pointerEvents: "none", objectFit: "contain" }}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.28em", color: col.accent, fontFamily: "sans-serif", margin: "0 0 8px", fontWeight: 600 }}>{col.subtitle}</p>
                  <h3 style={{ color: "#0F172A", fontWeight: 300, margin: "0 0 14px", letterSpacing: "0.05em", fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
                    {col.title}
                  </h3>
                  <p style={{ width: col.menWidth, fontSize: "13px", color: "#64748B", fontStyle: "italic", marginBottom: "28px", lineHeight: 1.7 }}>{col.desc}</p>

                  {/* Explore link with animated bottom bar */}
                  <div style={{ position: "relative", display: "inline-block", paddingBottom: "6px" }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      fontSize: "10px", letterSpacing: "0.22em", color: col.accent,
                      fontFamily: "sans-serif", fontWeight: 700,
                    }}>
                      EXPLORE <br /> COLLECTION →
                    </div>
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
      <section style={{ padding: "40px 5%", background: "linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 100%)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", textAlign: "center" }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "28px", height: "3px", background: "linear-gradient(90deg,#4F46E5,#0EA5E9)", borderRadius: "2px", marginBottom: "10px" }} />
              <div style={{ fontSize: "clamp(2rem,5vw,3rem)", fontFamily: "serif", fontWeight: 300, lineHeight: 1 }}>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1800} />
              </div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.26em", color: "#4F46E5", fontFamily: "sans-serif", marginTop: "6px" }}>{stat.label}</div>
              <p style={{ fontSize: "12px", lineHeight: 1.75, color: "#94A3B8", maxWidth: "170px", margin: 0 }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════ WHY CHOOSE US ════ */}
      <section style={{ padding: "50px 5%", maxWidth: "1200px", margin: "0 auto" }}>
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
              {WHY_ITEMS.map((item, i) => (
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

          {/* Craft grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {CRAFT_BOXES.map((box, i) => (
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
      <section style={{ background: "linear-gradient(135deg,#F8FAFF,#EEF2FF)", borderTop: "1px solid rgba(99,102,241,0.08)", padding: "30px 5%", textAlign: "center" }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '4px' }}>
          <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to right, transparent, #6366F1)' }} />
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.35em',
            color: '#6366F1',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            textTransform: 'uppercase',
          }}>
            CLIENT VOICES
          </span>
          <span style={{ width: '52px', height: '1px', background: 'linear-gradient(to left, transparent, #6366F1)' }} />
        </div>
        <h2 style={{ color: "#0F172A", fontWeight: 300, marginBottom: "10px", fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>What Our Clients Say</h2>

        <div style={{ maxWidth: "600px", margin: "0 auto", minHeight: "130px" }}>
          <div className="text-gray-500" style={{ fontSize: "64px", lineHeight: 1, fontFamily: "serif" }}>"</div>
          <p style={{ color: "#334155", fontStyle: "italic", lineHeight: 1.85, marginBottom: "24px", fontSize: "clamp(1rem,2vw,1.25rem)" }}>
            {TESTIMONIALS[activeTestimonial].quote}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <div style={{ width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #6366F1)" }} />
            <p style={{ fontSize: "13px", letterSpacing: "0.2em", color: "#6366F1", fontFamily: "sans-serif", margin: 0, fontWeight: 600 }}>
              {TESTIMONIALS[activeTestimonial].name}
            </p>
            <span style={{ fontSize: "12px", color: "#94A3B8", letterSpacing: "0.14em", fontFamily: "sans-serif" }}>{TESTIMONIALS[activeTestimonial].location}</span>
            <div style={{ width: "32px", height: "1px", background: "linear-gradient(to left, transparent, #0EA5E9)" }} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "36px" }}>
          {TESTIMONIALS.map((_, i) => (
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