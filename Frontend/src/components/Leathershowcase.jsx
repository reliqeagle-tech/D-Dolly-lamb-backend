// // LeatherShowcase.jsx
// // Drop this component into your Frontend/src/components/ folder
// // Usage in Home.jsx: import LeatherShowcase from '../components/LeatherShowcase'
// //                    then add <LeatherShowcase /> wherever you want it on the homepage
// //
// // IMPORTANT — replace the image URLs below with your actual product image paths
// // e.g. import jacketImg from '../assets/jacket-red.jpg'  OR use your CDN/Cloudinary URLs

// import { useEffect, useRef, useState, useCallback } from "react";
// import { assets } from "../assets/assets";

// // ─── PRODUCT DATA ─────────────────────────────────────────────────────────────
// // Replace `image` values with your real product image URLs or imports
// const PRODUCTS = [
//     {
//         id: 1,
//         tag: "Best Seller",
//         name: "Moto Biker Jacket",
//         subtitle: "Men's Lambskin — Crimson",
//         desc: "Sculpted from the finest lambskin hide, this jacket fuses raw biker heritage with couture-level refinement. Supple grain molds to your silhouette with every wear.",
//         features: ["100% Premium Lambskin", "YKK Brass Zippers", "Quilted Satin Lining", "Asymmetric Collar"],
//         price: "$189.99",
//         oldPrice: "$228.00",
//         // ↓ Replace with your actual image path or URL
//         image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
//         accent: "#8B0000",
//         glowColor: "rgba(139,0,0,0.6)",
//     },
//     {
//         id: 2,
//         tag: "New Arrival",
//         name: "Classic Biker Jacket",
//         subtitle: "Men's Lambskin — Graphite",
//         desc: "A modern take on the timeless biker silhouette. Crafted in graphite lambskin with precision-sewn panel seams that give a sleek, architectural form.",
//         features: ["Graphite Lambskin Hide", "Snap-Turn Collar", "Interior Media Pocket", "Slim European Fit"],
//         price: "$189.99",
//         oldPrice: "$220.00",
//         image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80",
//         accent: "#2A2A2A",
//         glowColor: "rgba(80,80,80,0.5)",
//     },
//     {
//         id: 3,
//         tag: "Office Collection",
//         name: "Leather Desk Pad",
//         subtitle: "Full-Grain — Onyx Black",
//         desc: "A statement-making workspace companion. Non-slip base, stitched edges, and a surface that develops a rich patina with daily use.",
//         features: ["Full-Grain Top Layer", "Non-Slip Backing", "17\" × 48\" Workspace", "Stitched Edge Detail"],
//         price: "$133.99",
//         oldPrice: "$161.00",
//         image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
//         accent: "#1A1A1A",
//         glowColor: "rgba(201,168,76,0.4)",
//     },
//     {
//         id: 4,
//         tag: "Artisan Series",
//         name: "Craftsman Apron",
//         subtitle: "Waxed Leather — Tan",
//         desc: "Built for makers and artisans. Heat-resistant waxed leather with adjustable cross-back straps and deep utility pockets for every tool.",
//         features: ["Heat & Flame Resistant", "Adjustable Cross-Back Strap", "Multiple Deep Pockets", "Rugged Waxed Finish"],
//         price: "$124.99",
//         oldPrice: "$150.00",
//         image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
//         accent: "#5C3010",
//         glowColor: "rgba(92,48,16,0.6)",
//     },
//     {
//         id: 5,
//         tag: "Women's Collection",
//         name: "Pencil Skirt",
//         subtitle: "Women's Lambskin — Ivory",
//         desc: "Effortlessly sophisticated. This below-the-knee lambskin pencil skirt pairs the softness of fine leather with a flattering tailored silhouette.",
//         features: ["Butter-Soft Lambskin", "Below-The-Knee Length", "Back Vent Detail", "Fully Lined"],
//         price: "$144.98",
//         oldPrice: "$174.00",
//         image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&q=80",
//         accent: "#C9A87A",
//         glowColor: "rgba(201,168,76,0.5)",
//     },
// ];

// // ─── THREE.JS BACKGROUND CANVAS ──────────────────────────────────────────────
// function ThreeBackground({ accentColor }) {
//     const canvasRef = useRef(null);
//     const sceneRef = useRef(null);

//     useEffect(() => {
//         if (typeof window === "undefined") return;

//         // Dynamically load Three.js if not already loaded
//         const initThree = () => {
//             const THREE = window.THREE;
//             if (!THREE) return;

//             const canvas = canvasRef.current;
//             if (!canvas) return;

//             // Cleanup previous scene
//             if (sceneRef.current) {
//                 sceneRef.current.renderer.dispose();
//                 sceneRef.current.animating = false;
//             }

//             const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
//             renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
//             renderer.setSize(canvas.clientWidth, canvas.clientHeight);

//             const scene = new THREE.Scene();
//             const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
//             camera.position.z = 5;

//             // Floating orbs
//             const orbGroup = new THREE.Group();
//             const orbMat = new THREE.MeshBasicMaterial({ color: 0xC9A84C, transparent: true, opacity: 0.06, wireframe: true });
//             [2.5, 4, 6].forEach((r, i) => {
//                 const geo = new THREE.SphereGeometry(r, 16, 12);
//                 const mesh = new THREE.Mesh(geo, orbMat.clone());
//                 mesh.rotation.x = i * 0.5;
//                 orbGroup.add(mesh);
//             });
//             scene.add(orbGroup);

//             // Particles
//             const pCount = 80;
//             const pGeo = new THREE.BufferGeometry();
//             const pPos = new Float32Array(pCount * 3);
//             for (let i = 0; i < pCount; i++) {
//                 pPos[i * 3] = (Math.random() - 0.5) * 14;
//                 pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
//                 pPos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 3;
//             }
//             pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
//             const pMat = new THREE.PointsMaterial({ color: 0xC9A84C, size: 0.04, transparent: true, opacity: 0.5 });
//             const particles = new THREE.Points(pGeo, pMat);
//             scene.add(particles);

//             let animating = true;
//             sceneRef.current = { renderer, animating };

//             const clock = new THREE.Clock();
//             const animate = () => {
//                 if (!animating) return;
//                 requestAnimationFrame(animate);
//                 const t = clock.getElapsedTime();
//                 orbGroup.rotation.y = t * 0.08;
//                 orbGroup.rotation.x = t * 0.04;
//                 particles.rotation.y = t * 0.025;
//                 renderer.render(scene, camera);
//             };
//             animate();
//         };

//         // Load Three.js script if not present
//         if (window.THREE) {
//             initThree();
//         } else {
//             const script = document.createElement("script");
//             script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
//             script.onload = initThree;
//             document.head.appendChild(script);
//         }

//         return () => {
//             if (sceneRef.current) {
//                 sceneRef.current.animating = false;
//                 sceneRef.current.renderer.dispose();
//             }
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: "absolute",
//                 inset: 0,
//                 width: "100%",
//                 height: "100%",
//                 pointerEvents: "none",
//                 zIndex: 0,
//             }}
//         />
//     );
// }

// // ─── PRODUCT IMAGE CARD ───────────────────────────────────────────────────────
// function ProductImageCard({ product, isActive }) {
//     const cardRef = useRef(null);
//     const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");

//     const handleMouseMove = useCallback((e) => {
//         if (!cardRef.current) return;
//         const rect = cardRef.current.getBoundingClientRect();
//         const cx = rect.left + rect.width / 2;
//         const cy = rect.top + rect.height / 2;
//         const dx = (e.clientX - cx) / (rect.width / 2);
//         const dy = (e.clientY - cy) / (rect.height / 2);
//         const rotY = dx * 12;
//         const rotX = -dy * 8;
//         setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`);
//     }, []);

//     const handleMouseLeave = useCallback(() => {
//         setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
//     }, []);

//     return (
//         <div
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: 480,
//                 aspectRatio: "4/5",
//                 transform,
//                 transition: "transform 0.15s ease-out",
//                 transformStyle: "preserve-3d",
//                 cursor: "grab",
//                 borderRadius: 2,
//                 overflow: "hidden",
//                 boxShadow: isActive
//                     ? `0 0 80px ${product.glowColor}, 0 30px 80px rgba(0,0,0,0.7)`
//                     : "0 20px 60px rgba(0,0,0,0.5)",
//             }}
//         >
//             {/* Main product image */}
//             <img
//                 // src={product.image}
//                 src={assets.pillow}
//                 alt={product.name}
//                 style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     objectPosition: "center top",
//                     display: "block",
//                     transition: "filter 0.6s ease",
//                     filter: isActive ? "brightness(1)" : "brightness(0.7)",
//                 }}
//                 onError={(e) => {
//                     // Fallback gradient if image fails to load
//                     e.target.style.display = "none";
//                 }}
//             />

//             {/* Overlay gradient */}
//             <div style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "linear-gradient(to top, rgba(10,0,0,0.75) 0%, transparent 60%)",
//                 pointerEvents: "none",
//             }} />

//             {/* Gold shimmer on hover */}
//             <div style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)",
//                 pointerEvents: "none",
//                 transition: "opacity 0.3s",
//             }} />

//             {/* Border frame */}
//             <div style={{
//                 position: "absolute",
//                 inset: 8,
//                 border: "1px solid rgba(201,168,76,0.2)",
//                 pointerEvents: "none",
//                 borderRadius: 1,
//             }} />

//             {/* Corner accents */}
//             {[
//                 { top: 8, left: 8 },
//                 { top: 8, right: 8 },
//                 { bottom: 8, left: 8 },
//                 { bottom: 8, right: 8 },
//             ].map((pos, i) => (
//                 <div
//                     key={i}
//                     style={{
//                         position: "absolute",
//                         ...pos,
//                         width: 20,
//                         height: 20,
//                         borderTop: i < 2 ? "2px solid #C9A84C" : "none",
//                         borderBottom: i >= 2 ? "2px solid #C9A84C" : "none",
//                         borderLeft: i % 2 === 0 ? "2px solid #C9A84C" : "none",
//                         borderRight: i % 2 === 1 ? "2px solid #C9A84C" : "none",
//                         pointerEvents: "none",
//                     }}
//                 />
//             ))}

//             {/* Tag badge */}
//             <div style={{
//                 position: "absolute",
//                 top: 20,
//                 left: 20,
//                 background: "#C9A84C",
//                 color: "#0A0A0A",
//                 fontFamily: "'Cinzel', serif",
//                 fontSize: 9,
//                 fontWeight: 700,
//                 letterSpacing: "3px",
//                 textTransform: "uppercase",
//                 padding: "5px 14px",
//             }}>
//                 {product.tag}
//             </div>
//         </div>
//     );
// }

// // ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
// export default function LeatherShowcase() {
//     const [activeIdx, setActiveIdx] = useState(0);
//     const [prevIdx, setPrevIdx] = useState(null);
//     const [animating, setAnimating] = useState(false);
//     const product = PRODUCTS[activeIdx];

//     const goTo = (idx) => {
//         if (idx === activeIdx || animating) return;
//         setAnimating(true);
//         setPrevIdx(activeIdx);
//         setActiveIdx(idx);
//         setTimeout(() => { setAnimating(false); setPrevIdx(null); }, 500);
//     };

//     // Google Fonts injection
//     useEffect(() => {
//         const id = "ddl-fonts";
//         if (!document.getElementById(id)) {
//             const link = document.createElement("link");
//             link.id = id;
//             link.rel = "stylesheet";
//             link.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap";
//             document.head.appendChild(link);
//         }
//     }, []);

//     return (
//         <section style={{
//             position: "relative",
//             width: "100%",
//             minHeight: "100vh",
//             background: "radial-gradient(ellipse at 20% 50%, #300808 0%, #0A0A0A 55%), radial-gradient(ellipse at 80% 20%, #1a0c00 0%, transparent 50%)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             overflow: "hidden",
//             fontFamily: "'Jost', sans-serif",
//         }}>

//             {/* Three.js animated background */}
//             <ThreeBackground accentColor={product.accent} />

//             {/* Grain texture overlay */}
//             <div style={{
//                 position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
//                 opacity: 0.6,
//             }} />

//             {/* Gold top rule */}
//             <div style={{
//                 position: "relative", zIndex: 2, width: "100%", height: 2, flexShrink: 0,
//                 background: "linear-gradient(90deg, transparent, #C9A84C 30%, #E2C068 50%, #C9A84C 70%, transparent)",
//             }} />

//             {/* ── HEADER ── */}
//             <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "52px 20px 16px" }}>
//                 <p style={{
//                     fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 11,
//                     letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase", marginBottom: 14,
//                     animation: "ddlFadeUp 0.8s ease 0.2s both",
//                 }}>
//                     Handcrafted Excellence
//                 </p>
//                 <h2 style={{
//                     fontFamily: "'Cinzel', serif", fontSize: "clamp(28px, 5vw, 58px)",
//                     fontWeight: 700, color: "#E2C068", letterSpacing: 4,
//                     textShadow: "0 0 60px rgba(201,168,76,0.3)", margin: 0, lineHeight: 1.1,
//                     animation: "ddlFadeUp 0.8s ease 0.4s both",
//                 }}>
//                     LEATHER <span style={{ color: "#F5EDD8" }}>SHOWCASE</span>
//                 </h2>
//                 <p style={{
//                     fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
//                     fontSize: "clamp(14px, 2vw, 19px)", color: "rgba(245,237,216,0.5)",
//                     marginTop: 10, letterSpacing: 1,
//                     animation: "ddlFadeUp 0.8s ease 0.6s both",
//                 }}>
//                     Move your mouse over the image to explore every detail
//                 </p>
//             </div>

//             {/* ── MAIN CONTENT ── */}
//             <div style={{
//                 position: "relative", zIndex: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 48,
//                 padding: "32px 40px 0",
//                 width: "100%",
//                 maxWidth: 1320,
//                 flexWrap: "wrap",
//             }}>

//                 {/* Product Image Card */}
//                 <div style={{
//                     flex: "1 1 400px",
//                     maxWidth: 480,
//                     display: "flex",
//                     justifyContent: "center",
//                     opacity: animating ? 0 : 1,
//                     transform: animating ? "translateY(12px)" : "translateY(0)",
//                     transition: "opacity 0.4s ease, transform 0.4s ease",
//                 }}>
//                     <ProductImageCard product={product} isActive={true} />
//                 </div>

//                 {/* Info Panel */}
//                 <div style={{
//                     flex: "1 1 300px",
//                     maxWidth: 380,
//                     opacity: animating ? 0 : 1,
//                     transform: animating ? "translateX(16px)" : "translateX(0)",
//                     transition: "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
//                 }}>
//                     {/* Tag */}
//                     <span style={{
//                         display: "inline-block",
//                         fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
//                         letterSpacing: "4px", textTransform: "uppercase",
//                         color: "#0A0A0A", background: "#C9A84C",
//                         padding: "4px 14px", marginBottom: 18,
//                     }}>
//                         {product.tag}
//                     </span>

//                     {/* Name */}
//                     <h3 style={{
//                         fontFamily: "'Cinzel', serif", fontSize: "clamp(22px, 3vw, 32px)",
//                         fontWeight: 600, color: "#F5EDD8", lineHeight: 1.2, margin: "0 0 6px",
//                     }}>
//                         {product.name}
//                     </h3>

//                     {/* Subtitle */}
//                     <p style={{
//                         fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
//                         fontSize: 16, color: "#C9A84C", marginBottom: 22, letterSpacing: 1,
//                     }}>
//                         {product.subtitle}
//                     </p>

//                     {/* Divider */}
//                     <div style={{ width: 48, height: 1, background: "#C9A84C", marginBottom: 22 }} />

//                     {/* Description */}
//                     <p style={{
//                         fontFamily: "'Cormorant Garamond', serif", fontSize: 16,
//                         lineHeight: 1.9, color: "rgba(245,237,216,0.68)", marginBottom: 26,
//                     }}>
//                         {product.desc}
//                     </p>

//                     {/* Features */}
//                     <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
//                         {product.features.map((f, i) => (
//                             <li key={i} style={{
//                                 display: "flex", alignItems: "center", gap: 12,
//                                 fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 300,
//                                 letterSpacing: "2px", textTransform: "uppercase",
//                                 color: "rgba(245,237,216,0.55)",
//                                 padding: "8px 0",
//                                 borderBottom: "1px solid rgba(201,168,76,0.1)",
//                             }}>
//                                 <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
//                                 {f}
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Price */}
//                     <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28 }}>
//                         <span style={{ fontFamily: "'Cinzel', serif", fontSize: 34, color: "#E2C068" }}>
//                             {product.price}
//                         </span>
//                         <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 16, color: "rgba(245,237,216,0.3)", textDecoration: "line-through" }}>
//                             {product.oldPrice}
//                         </span>
//                     </div>

//                     {/* CTA Button */}
//                     <button
//                         style={{
//                             display: "inline-flex", alignItems: "center", gap: 12,
//                             fontFamily: "'Cinzel', serif", fontSize: 12, fontWeight: 700,
//                             letterSpacing: "3px", textTransform: "uppercase",
//                             color: "#0A0A0A",
//                             background: "linear-gradient(135deg, #C9A84C 0%, #E2C068 100%)",
//                             border: "none", padding: "16px 36px", cursor: "pointer",
//                             transition: "all 0.3s ease",
//                             boxShadow: "0 4px 24px rgba(201,168,76,0.3)",
//                         }}
//                         onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 40px rgba(201,168,76,0.6)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
//                         onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
//                     >
//                         Shop Now <span style={{ fontSize: 18 }}>→</span>
//                     </button>
//                 </div>
//             </div>

//             {/* ── PRODUCT TABS ── */}
//             <div style={{
//                 position: "relative", zIndex: 2,
//                 display: "flex", gap: 0, width: "100%", maxWidth: 1320,
//                 padding: "0 20px", marginTop: 28,
//                 borderTop: "1px solid rgba(201,168,76,0.12)",
//                 overflowX: "auto",
//                 scrollbarWidth: "none",
//             }}>
//                 {PRODUCTS.map((p, i) => (
//                     <button
//                         key={p.id}
//                         onClick={() => goTo(i)}
//                         style={{
//                             flexShrink: 0, minWidth: 110,
//                             padding: "18px 20px",
//                             background: "none", border: "none", cursor: "pointer",
//                             borderBottom: `2px solid ${i === activeIdx ? "#C9A84C" : "transparent"}`,
//                             transition: "all 0.3s ease",
//                             display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
//                         }}
//                     >
//                         {/* Thumbnail */}
//                         <div style={{
//                             width: 44, height: 44, borderRadius: "50%",
//                             overflow: "hidden", border: `1px solid ${i === activeIdx ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
//                             transition: "border-color 0.3s ease",
//                             flexShrink: 0,
//                         }}>
//                             <img
//                                 src={p.image}
//                                 alt={p.name}
//                                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                 onError={e => { e.target.style.display = "none"; }}
//                             />
//                         </div>
//                         <span style={{
//                             fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 400,
//                             letterSpacing: "2px", textTransform: "uppercase",
//                             color: i === activeIdx ? "#E2C068" : "rgba(245,237,216,0.4)",
//                             transition: "color 0.3s ease",
//                             whiteSpace: "nowrap",
//                         }}>
//                             {p.name.split(" ").slice(0, 2).join(" ")}
//                         </span>
//                     </button>
//                 ))}
//             </div>

//             {/* Hover hint */}
//             <p style={{
//                 position: "relative", zIndex: 2,
//                 fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "3px",
//                 textTransform: "uppercase", color: "rgba(201,168,76,0.4)",
//                 margin: "16px 0 40px",
//                 animation: "ddlPulse 2.5s ease infinite",
//             }}>
//                 ⟵ Hover image to tilt · Click tabs to switch ⟶
//             </p>

//             {/* CSS Animations */}
//             <style>{`
//         @keyframes ddlFadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes ddlPulse {
//           0%, 100% { opacity: 0.35; }
//           50%       { opacity: 0.85; }
//         }
//       `}</style>
//         </section>
//     );
// }







// LeatherShowcase.jsx
// Place in: Frontend/src/components/LeatherShowcase.jsx
// Usage in Home.jsx:
//   import LeatherShowcase from '../components/LeatherShowcase'
//   <LeatherShowcase />

import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
    {
        id: 1, tag: "Best Seller", name: "Moto Biker Jacket", subtitle: "Men's Lambskin — Crimson",
        desc: "Sculpted from the finest lambskin hide, this jacket fuses raw biker heritage with couture-level refinement. Supple grain molds to your silhouette with every wear.",
        features: ["100% Premium Lambskin", "YKK Brass Zippers", "Quilted Satin Lining", "Asymmetric Collar"],
        price: "$189.99", oldPrice: "$228.00",
        bodyColor: 0x7A0010, glowColor: "rgba(139,0,0,0.7)", shape: "jacket", icon: "🧥",
    },
    {
        id: 2, tag: "New Arrival", name: "Classic Biker Jacket", subtitle: "Men's Lambskin — Graphite",
        desc: "A modern take on the timeless biker silhouette. Precision-sewn panel seams give a sleek, architectural form that stands out.",
        features: ["Graphite Lambskin Hide", "Snap-Turn Collar", "Interior Media Pocket", "Slim European Fit"],
        price: "$189.99", oldPrice: "$220.00",
        bodyColor: 0x1C1C1C, glowColor: "rgba(80,80,80,0.7)", shape: "jacket", icon: "🥋",
    },
    {
        id: 3, tag: "Office Collection", name: "Leather Desk Pad", subtitle: "Full-Grain — Onyx Black",
        desc: "A statement-making workspace companion. Non-slip base, stitched edges, and a surface that develops rich patina with daily use.",
        features: ["Full-Grain Top Layer", "Non-Slip Backing", "17\" × 48\" Workspace", "Gold Stitched Edge"],
        price: "$133.99", oldPrice: "$161.00",
        bodyColor: 0x111111, glowColor: "rgba(201,168,76,0.4)", shape: "pad", icon: "📋",
    },
    {
        id: 4, tag: "Artisan Series", name: "Craftsman Apron", subtitle: "Waxed Leather — Tan",
        desc: "Built for makers and artisans. Heat-resistant waxed leather with adjustable cross-back straps and deep utility pockets for every tool.",
        features: ["Heat & Flame Resistant", "Adjustable Cross-Back Strap", "Multiple Deep Pockets", "Rugged Waxed Finish"],
        price: "$124.99", oldPrice: "$150.00",
        bodyColor: 0x6B3A1F, glowColor: "rgba(107,58,31,0.7)", shape: "apron", icon: "👘",
    },
    {
        id: 5, tag: "Women's Collection", name: "Pencil Skirt", subtitle: "Women's Lambskin — Ivory",
        desc: "Effortlessly sophisticated. Butter-soft lambskin in a flattering below-the-knee tailored silhouette with back vent detail.",
        features: ["Butter-Soft Lambskin", "Below-The-Knee Length", "Back Vent Detail", "Fully Lined"],
        price: "$144.98", oldPrice: "$174.00",
        bodyColor: 0xD4C49A, glowColor: "rgba(201,168,76,0.5)", shape: "skirt", icon: "👗",
    },
];

// ── Leather canvas texture ────────────────────────────────────────────────────
function makeLeatherCanvas(hexColor, size = 512) {
    const cv = document.createElement("canvas");
    cv.width = cv.height = size;
    const ctx = cv.getContext("2d");
    const r = (hexColor >> 16) & 255;
    const g = (hexColor >> 8) & 255;
    const b = hexColor & 255;

    // base coat
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(0, 0, size, size);

    // pebbled grain
    ctx.globalAlpha = 0.11;
    for (let i = 0; i < 3000; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const rx = Math.random() * 5 + 1;
        const ry = rx * (0.5 + Math.random() * 0.5);
        ctx.fillStyle = Math.random() > 0.5 ? "rgba(0,0,0,1)" : "rgba(255,255,255,0.6)";
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }

    // scratches / grain lines
    ctx.globalAlpha = 0.07;
    for (let i = 0; i < 1800; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const len = Math.random() * 18 + 2;
        const angle = Math.random() * Math.PI;
        ctx.strokeStyle = Math.random() > 0.6 ? "rgba(0,0,0,1)" : "rgba(255,255,255,0.9)";
        ctx.lineWidth = Math.random() * 0.7 + 0.1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        ctx.stroke();
    }

    // highlight streak
    ctx.globalAlpha = 0.05;
    const hx = size * 0.3;
    const hgrd = ctx.createLinearGradient(hx, 0, hx + 80, size);
    hgrd.addColorStop(0, "rgba(255,255,255,0)");
    hgrd.addColorStop(0.4, "rgba(255,255,255,1)");
    hgrd.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = hgrd;
    ctx.fillRect(hx, 0, 80, size);

    return cv;
}

// ── Three viewer ──────────────────────────────────────────────────────────────
function ThreeViewer({ product }) {
    const mountRef = useRef(null);

    useEffect(() => {
        const THREE = window.THREE;
        const mount = mountRef.current;
        if (!THREE || !mount) return;

        let animId;
        let isDragging = false, prevX = 0;
        let autoRotate = true;
        let idleTimer = null;
        let targetY = 0, curY = 0, curX = 0.1, targetX = 0.1;

        const W = mount.clientWidth || 480;
        const H = mount.clientHeight || 520;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
        camera.position.set(0, 0.3, 6.8);

        // materials
        const leatherTex = () => {
            const t = new THREE.CanvasTexture(makeLeatherCanvas(product.bodyColor));
            t.wrapS = t.wrapT = THREE.RepeatWrapping;
            t.repeat.set(2, 2);
            return t;
        };
        const lMat = (rough = 0.82, metal = 0.04) => new THREE.MeshStandardMaterial({
            map: leatherTex(), color: new THREE.Color(product.bodyColor), roughness: rough, metalness: metal,
        });
        const goldMat = new THREE.MeshStandardMaterial({ color: 0xC9A84C, roughness: 0.2, metalness: 0.96 });
        const darkMat = new THREE.MeshStandardMaterial({ color: 0x0a0808, roughness: 0.95 });

        // ── JACKET ────────────────────────────────────────────
        function buildJacket() {
            const g = new THREE.Group();
            const mat = lMat(0.82, 0.04);
            const panMat = lMat(0.76, 0.06);

            // body
            const bGeo = new THREE.BoxGeometry(2.1, 2.7, 0.9, 4, 8, 3);
            const bp = bGeo.attributes.position;
            for (let i = 0; i < bp.count; i++) {
                const y = bp.getY(i);
                const t = 1 - (y + 1.35) * 0.04;
                bp.setX(i, bp.getX(i) * t);
            }
            bp.needsUpdate = true; bGeo.computeVertexNormals();
            g.add(Object.assign(new THREE.Mesh(bGeo, mat), { castShadow: true }));

            // chest panels (left + right)
            [-0.5, 0.5].forEach(x => {
                const p = new THREE.Mesh(new THREE.BoxGeometry(0.92, 2.1, 0.04), panMat);
                p.position.set(x, 0.1, 0.47); g.add(p);
            });

            // shoulders
            const shGeo = new THREE.SphereGeometry(0.44, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55);
            [-1.02, 1.02].forEach((x, i) => {
                const sh = new THREE.Mesh(shGeo, mat);
                sh.position.set(x, 1.32, 0);
                sh.scale.set(1.15, 0.7, 1.1);
                sh.rotation.y = i === 0 ? 0 : Math.PI;
                sh.castShadow = true; g.add(sh);
            });

            // sleeves
            const slGeo = new THREE.CylinderGeometry(0.33, 0.27, 2.4, 14);
            [-1.33, 1.33].forEach((x, i) => {
                const sl = new THREE.Mesh(slGeo, mat);
                sl.position.set(x, -0.04, 0.04);
                sl.rotation.z = i === 0 ? 0.26 : -0.26;
                sl.castShadow = true; g.add(sl);
                // cuff
                const cf = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.29, 0.22, 14), lMat(0.7, 0.06));
                cf.position.set(x + (i === 0 ? -0.3 : 0.3), -1.14, 0.04);
                cf.rotation.z = sl.rotation.z; g.add(cf);
                const sn = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), goldMat);
                sn.position.set(x + (i === 0 ? -0.3 : 0.3), -1.0, 0.28); g.add(sn);
            });

            // collar
            const col = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.42, 0.2), lMat(0.74, 0.06));
            col.position.set(0, 1.42, 0.36); col.rotation.x = -0.18; g.add(col);

            // lapels
            [-0.57, 0.57].forEach((x, i) => {
                const lap = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.78, 0.1), lMat(0.72, 0.06));
                lap.position.set(x, 0.97, 0.44);
                lap.rotation.z = i === 0 ? 0.33 : -0.33; g.add(lap);
            });

            // main zip
            const zip = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 2.5, 10), goldMat);
            zip.position.set(0.19, -0.08, 0.46); zip.rotation.z = 0.04; g.add(zip);
            const zp = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.23, 0.08), goldMat);
            zp.position.set(0.19, 0.56, 0.52); g.add(zp);

            // pocket zips
            [[-0.62, -0.52], [0.62, -0.52]].forEach(([x, y]) => {
                const pz = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.026, 0.02), goldMat);
                pz.position.set(x, y, 0.46); g.add(pz);
                const pp = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.14, 0.06), goldMat);
                pp.position.set(x, y - 0.06, 0.5); g.add(pp);
            });

            // stitch lines
            const stMat = new THREE.MeshStandardMaterial({ color: 0xC9A84C, roughness: 0.95 });
            [-0.75, 0.75].forEach(x => {
                const st = new THREE.Mesh(new THREE.BoxGeometry(0.018, 2.6, 0.01), stMat);
                st.position.set(x, -0.05, 0.46); g.add(st);
            });

            // hem
            const hem = new THREE.Mesh(new THREE.BoxGeometry(2.12, 0.16, 0.92), lMat(0.86, 0.03));
            hem.position.set(0, -1.43, 0); g.add(hem);

            g.position.y = -0.2;
            return g;
        }

        // ── APRON ─────────────────────────────────────────────
        function buildApron() {
            const g = new THREE.Group();
            const mat = lMat(0.88, 0.03);

            // bib
            const bib = new THREE.Mesh(new THREE.BoxGeometry(1.45, 1.3, 0.07, 3, 5, 1), mat);
            bib.position.set(0, 0.95, 0); bib.castShadow = true; g.add(bib);

            // bib top arc
            const arcGeo = new THREE.CylinderGeometry(0.73, 0.73, 0.07, 18, 1, false, Math.PI * 0.09, Math.PI * 0.82);
            const arc = new THREE.Mesh(arcGeo, mat);
            arc.rotation.z = Math.PI / 2; arc.position.set(0, 1.6, 0); g.add(arc);

            // neck strap
            const neck = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.9, 0.05), mat);
            neck.position.set(0, 2.08, 0); g.add(neck);
            const bkl = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.026, 8, 14), goldMat);
            bkl.position.set(0, 2.57, 0); g.add(bkl);

            // main skirt body
            const skGeo = new THREE.BoxGeometry(2.1, 2.5, 0.06, 4, 8, 1);
            const skP = skGeo.attributes.position;
            for (let i = 0; i < skP.count; i++) {
                const y = skP.getY(i);
                const f = 1 + (-y + 1.25) * 0.055;
                skP.setX(i, skP.getX(i) * f);
            }
            skP.needsUpdate = true; skGeo.computeVertexNormals();
            const sk = new THREE.Mesh(skGeo, mat);
            sk.position.set(0, -0.65, 0); sk.castShadow = true; g.add(sk);

            // waistband
            const wb = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.2, 0.08), lMat(0.8, 0.05));
            wb.position.set(0, 0.2, 0.01); g.add(wb);

            // waist rings
            [-1.06, 1.06].forEach(x => {
                const rr = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.024, 8, 14), goldMat);
                rr.position.set(x, 0.2, 0.07); g.add(rr);
            });

            // big pocket
            const pkt = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.7, 0.08), lMat(0.85, 0.04));
            pkt.position.set(0, -0.9, 0.06); g.add(pkt);
            const div = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.65, 0.09), goldMat);
            div.position.set(0, -0.9, 0.08); g.add(div);
            const stMat = new THREE.MeshStandardMaterial({ color: 0xC9A84C, roughness: 0.9 });
            const pst = new THREE.Mesh(new THREE.BoxGeometry(1.58, 0.022, 0.022), stMat);
            pst.position.set(0, -0.55, 0.1); g.add(pst);

            // tool loops
            for (let x = -0.6; x <= 0.6; x += 0.3) {
                const lp = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.28, 0.09), mat);
                lp.position.set(x, -1.44, 0.07); g.add(lp);
            }

            g.position.y = -0.35;
            return g;
        }

        // ── SKIRT ─────────────────────────────────────────────
        function buildSkirt() {
            const g = new THREE.Group();
            const mat = lMat(0.76, 0.05);

            // lathe profile
            const pts = [];
            for (let i = 0; i <= 24; i++) {
                const t = i / 24;
                const y = t * 3.0 - 1.5;
                const rr = 0.64 - t * 0.1 + Math.sin(t * Math.PI) * 0.045;
                pts.push(new THREE.Vector2(rr, y));
            }
            const skGeo = new THREE.LatheGeometry(pts, 36);
            g.add(Object.assign(new THREE.Mesh(skGeo, mat), { castShadow: true }));

            // waistband
            const wb = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.22, 36), lMat(0.7, 0.07));
            wb.position.y = 1.6; g.add(wb);

            // seams
            const stMat = new THREE.MeshStandardMaterial({ color: 0xC9A84C, roughness: 0.9 });
            [0, Math.PI / 2, Math.PI, Math.PI * 1.5].forEach(angle => {
                const s = new THREE.Mesh(new THREE.BoxGeometry(0.016, 3.0, 0.016), stMat);
                s.position.set(Math.cos(angle) * 0.64, 0, Math.sin(angle) * 0.64); g.add(s);
            });

            // back vent
            const v = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.75, 0.012), mat);
            v.position.set(0, -1.2, 0.65); g.add(v);

            // hem
            const hem = new THREE.Mesh(new THREE.CylinderGeometry(0.57, 0.57, 0.14, 36), lMat(0.7, 0.06));
            hem.position.y = -1.57; g.add(hem);

            // zip
            const zp = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.2, 0.022), goldMat);
            zp.position.set(0.66, 1.6, 0); g.add(zp);

            g.position.y = -0.2;
            return g;
        }

        // ── PAD ───────────────────────────────────────────────
        function buildPad() {
            const g = new THREE.Group();
            const mat = lMat(0.88, 0.03);

            const pad = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.1, 1.9), mat);
            pad.castShadow = true; g.add(pad);

            // edge rolls
            const rollMat = lMat(0.82, 0.05);
            const rH = new THREE.CylinderGeometry(0.058, 0.058, 4.02, 14);
            [-0.97, 0.97].forEach(z => {
                const r = new THREE.Mesh(rH, rollMat);
                r.rotation.z = Math.PI / 2; r.position.set(0, 0.05, z); g.add(r);
            });
            const rV = new THREE.CylinderGeometry(0.058, 0.058, 1.91, 14);
            [-2.0, 2.0].forEach(x => {
                const r = new THREE.Mesh(rV, rollMat);
                r.rotation.x = Math.PI / 2; r.position.set(x, 0.05, 0); g.add(r);
            });

            // stitch pattern
            const stMat = new THREE.MeshStandardMaterial({ color: 0xC9A84C, roughness: 0.95 });
            for (let x = -1.75; x <= 1.75; x += 0.3) {
                const s = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.018, 1.72), stMat);
                s.position.set(x, 0.065, 0); g.add(s);
            }
            for (let z = -0.8; z <= 0.8; z += 0.3) {
                const s = new THREE.Mesh(new THREE.BoxGeometry(3.82, 0.018, 0.018), stMat);
                s.position.set(0, 0.065, z); g.add(s);
            }

            g.rotation.x = -0.32;
            g.position.y = -0.1;
            return g;
        }

        const builders = { jacket: buildJacket, apron: buildApron, skirt: buildSkirt, pad: buildPad };
        const model = (builders[product.shape] || buildJacket)();
        scene.add(model);

        // shadow plane
        const sp = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.ShadowMaterial({ opacity: 0.45 }));
        sp.rotation.x = -Math.PI / 2; sp.position.y = -2.1; sp.receiveShadow = true; scene.add(sp);

        // ground glow ring
        const ringMat = new THREE.MeshBasicMaterial({ color: product.bodyColor, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.25, 48), ringMat);
        ring.rotation.x = -Math.PI / 2; ring.position.y = -2.1; scene.add(ring);

        // lights
        scene.add(new THREE.AmbientLight(0x1a0a04, 1.0));
        const key = new THREE.DirectionalLight(0xFFE0A0, 5.0);
        key.position.set(3, 6, 5); key.castShadow = true;
        key.shadow.mapSize.set(2048, 2048); scene.add(key);
        const rim = new THREE.DirectionalLight(0xFF1818, 2.4);
        rim.position.set(-4, 2, -4); scene.add(rim);
        const fill = new THREE.DirectionalLight(0x4060C0, 0.9);
        fill.position.set(0, -2, 3); scene.add(fill);
        const spot = new THREE.SpotLight(0xC9A84C, 4.0, 22, 0.5, 0.5);
        spot.position.set(0, 7, 1); spot.castShadow = true; scene.add(spot);

        // particles
        const pGeo = new THREE.BufferGeometry();
        const pArr = new Float32Array(240 * 3);
        for (let i = 0; i < 240; i++) {
            pArr[i * 3] = (Math.random() - 0.5) * 14; pArr[i * 3 + 1] = (Math.random() - 0.5) * 10; pArr[i * 3 + 2] = (Math.random() - 0.5) * 9 - 4;
        }
        pGeo.setAttribute("position", new THREE.BufferAttribute(pArr, 3));
        const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xC9A84C, size: 0.036, transparent: true, opacity: 0.42, sizeAttenuation: true }));
        scene.add(particles);

        // drag
        const el = renderer.domElement;
        const onDown = cx => { isDragging = true; prevX = cx; autoRotate = false; clearTimeout(idleTimer); };
        const onMove = cx => { if (!isDragging) return; targetY += (cx - prevX) * 0.014; prevX = cx; };
        const onUp = () => { isDragging = false; idleTimer = setTimeout(() => { autoRotate = true; }, 2500); };
        el.addEventListener("mousedown", e => onDown(e.clientX));
        el.addEventListener("mousemove", e => onMove(e.clientX));
        el.addEventListener("mouseup", onUp); el.addEventListener("mouseleave", onUp);
        el.addEventListener("touchstart", e => onDown(e.touches[0].clientX), { passive: true });
        el.addEventListener("touchmove", e => onMove(e.touches[0].clientX), { passive: true });
        el.addEventListener("touchend", onUp);

        const clock = new THREE.Clock();
        const animate = () => {
            animId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();
            if (autoRotate) targetY = t * 0.55;
            curY += (targetY - curY) * 0.06;
            curX += (targetX - curX) * 0.05;
            model.rotation.y = curY;
            model.rotation.x = curX;
            model.position.y = (product.shape === "pad" ? -0.1 : -0.2) + Math.sin(t * 0.75) * 0.07;
            ring.material.opacity = 0.18 + Math.sin(t * 1.1) * 0.1;
            particles.rotation.y = t * 0.022;
            key.intensity = 5.0 + Math.sin(t * 0.9) * 0.45;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            renderer.dispose();
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
    }, [product]);

    return <div ref={mountRef} style={{ width: "100%", height: "100%", cursor: "grab" }} />;
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function LeatherShowcase() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [loaded, setLoaded] = useState(!!window.THREE);
    const p = PRODUCTS[activeIdx];

    useEffect(() => {
        if (window.THREE) return;
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        s.onload = () => setLoaded(true);
        document.head.appendChild(s);
    }, []);

    useEffect(() => {
        if (document.getElementById("ddl-gf")) return;
        const l = document.createElement("link");
        l.id = "ddl-gf"; l.rel = "stylesheet";
        l.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@200;300;400;500&display=swap";
        document.head.appendChild(l);
    }, []);

    const goTo = i => {
        if (i === activeIdx || animating) return;
        setAnimating(true);
        setTimeout(() => { setActiveIdx(i); setAnimating(false); }, 360);
    };

    return (
        <section style={{
            position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden",
            background: "radial-gradient(ellipse at 22% 50%,#2d0606 0%,#080808 56%),radial-gradient(ellipse at 78% 20%,#1a0e00 0%,transparent 46%)",
            display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "'Jost',sans-serif"
        }}>

            {/* grain */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`, opacity: 0.55
            }} />

            {/* top gold rule */}
            <div style={{ width: "100%", height: 2, background: "linear-gradient(90deg,transparent,#C9A84C 30%,#E2C068 50%,#C9A84C 70%,transparent)", flexShrink: 0 }} />

            {/* header */}
            <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "46px 20px 6px" }}>
                <p style={{ fontWeight: 300, fontSize: 11, letterSpacing: "6px", color: "#C9A84C", textTransform: "uppercase", marginBottom: 12 }}>Handcrafted Excellence</p>
                <h2 style={{
                    fontFamily: "'Cinzel',serif", fontSize: "clamp(26px,5vw,56px)", fontWeight: 700, color: "#E2C068", letterSpacing: 4,
                    textShadow: "0 0 60px rgba(201,168,76,0.3)", margin: 0, lineHeight: 1.1
                }}>
                    LEATHER <span style={{ color: "#F5EDD8" }}>SHOWCASE</span>
                </h2>
                <p style={{
                    fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(13px,1.8vw,18px)",
                    color: "rgba(245,237,216,0.45)", marginTop: 10, letterSpacing: 1
                }}>
                    Drag to rotate 360° · Real leather texture · Click tabs to switch product
                </p>
            </div>

            {/* main */}
            <div style={{
                position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center",
                gap: 40, padding: "18px 36px 0", width: "100%", maxWidth: 1300, flexWrap: "wrap"
            }}>

                {/* 3D viewer */}
                <div style={{
                    flex: "1 1 440px", maxWidth: 504, height: 530, borderRadius: 2, overflow: "hidden", position: "relative",
                    boxShadow: `0 0 100px ${p.glowColor},0 30px 80px rgba(0,0,0,0.8)`,
                    transition: "box-shadow 0.6s ease, opacity 0.35s, transform 0.35s",
                    opacity: animating ? 0 : 1, transform: animating ? "scale(0.96)" : "scale(1)"
                }}>
                    {loaded
                        ? <ThreeViewer product={p} key={p.id} />
                        : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,0,0,0.6)" }}>
                            <p style={{ color: "#C9A84C", fontFamily: "'Cinzel',serif", letterSpacing: 4, fontSize: 14 }}>Loading 3D…</p>
                        </div>}
                    <div style={{
                        position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", pointerEvents: "none",
                        fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase",
                        color: "rgba(201,168,76,0.5)", whiteSpace: "nowrap", animation: "ddlPl 2.5s ease infinite"
                    }}>
                        ⟵ Drag · Rotate 360° ⟶
                    </div>
                </div>

                {/* info */}
                <div style={{
                    flex: "1 1 300px", maxWidth: 370,
                    opacity: animating ? 0 : 1, transform: animating ? "translateX(20px)" : "translateX(0)",
                    transition: "opacity 0.3s ease 0.06s,transform 0.3s ease 0.06s"
                }}>
                    <span style={{
                        display: "inline-block", fontWeight: 500, fontSize: 9, letterSpacing: "4px",
                        textTransform: "uppercase", color: "#0A0A0A", background: "#C9A84C", padding: "4px 14px", marginBottom: 16
                    }}>
                        {p.tag}
                    </span>
                    <h3 style={{
                        fontFamily: "'Cinzel',serif", fontSize: "clamp(20px,2.8vw,30px)", fontWeight: 600,
                        color: "#F5EDD8", lineHeight: 1.2, margin: "0 0 5px"
                    }}>{p.name}</h3>
                    <p style={{
                        fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 16,
                        color: "#C9A84C", marginBottom: 20, letterSpacing: 1
                    }}>{p.subtitle}</p>
                    <div style={{ width: 44, height: 1, background: "#C9A84C", marginBottom: 20 }} />
                    <p style={{
                        fontFamily: "'Cormorant Garamond',serif", fontSize: 16, lineHeight: 1.95,
                        color: "rgba(245,237,216,0.65)", marginBottom: 22
                    }}>{p.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                        {p.features.map((f, i) => (
                            <li key={i} style={{
                                display: "flex", alignItems: "center", gap: 12,
                                fontWeight: 300, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
                                color: "rgba(245,237,216,0.52)", padding: "7px 0",
                                borderBottom: "1px solid rgba(201,168,76,0.1)"
                            }}>
                                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28 }}>
                        <span style={{ fontFamily: "'Cinzel',serif", fontSize: 32, color: "#E2C068" }}>{p.price}</span>
                        <span style={{ fontSize: 15, color: "rgba(245,237,216,0.28)", textDecoration: "line-through" }}>{p.oldPrice}</span>
                    </div>
                    <button style={{
                        display: "inline-flex", alignItems: "center", gap: 12,
                        fontFamily: "'Cinzel',serif", fontSize: 12, fontWeight: 700, letterSpacing: "3px",
                        textTransform: "uppercase", color: "#0A0A0A",
                        background: "linear-gradient(135deg,#C9A84C 0%,#E2C068 100%)",
                        border: "none", padding: "15px 34px", cursor: "pointer",
                        boxShadow: "0 4px 24px rgba(201,168,76,0.3)", transition: "all 0.3s ease"
                    }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 40px rgba(201,168,76,0.6)"; e.currentTarget.style.transform = "translateY(-2px)" }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(0)" }}>
                        Shop Now <span style={{ fontSize: 18 }}>→</span>
                    </button>
                </div>
            </div>

            {/* tabs */}
            <div style={{
                position: "relative", zIndex: 2, display: "flex", width: "100%", maxWidth: 1300,
                padding: "0 20px", marginTop: 22, borderTop: "1px solid rgba(201,168,76,0.12)",
                overflowX: "auto", scrollbarWidth: "none"
            }}>
                {PRODUCTS.map((prod, i) => (
                    <button key={prod.id} onClick={() => goTo(i)} style={{
                        flexShrink: 0, minWidth: 110, padding: "15px 16px", background: "none", border: "none", cursor: "pointer",
                        borderBottom: `2px solid ${i === activeIdx ? "#C9A84C" : "transparent"}`, transition: "border-color 0.3s",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 8
                    }}>
                        <div style={{
                            width: 42, height: 42, borderRadius: "50%", fontSize: 20,
                            border: `1px solid ${i === activeIdx ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: i === activeIdx ? "rgba(201,168,76,0.12)" : "transparent", transition: "all 0.3s"
                        }}>
                            {prod.icon}
                        </div>
                        <span style={{
                            fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: "2px",
                            textTransform: "uppercase", whiteSpace: "nowrap", transition: "color 0.3s",
                            color: i === activeIdx ? "#E2C068" : "rgba(245,237,216,0.4)"
                        }}>
                            {prod.name.split(" ").slice(0, 2).join(" ")}
                        </span>
                    </button>
                ))}
            </div>

            <p style={{
                position: "relative", zIndex: 2, fontFamily: "'Jost',sans-serif", fontSize: 10,
                letterSpacing: "3px", textTransform: "uppercase", color: "rgba(201,168,76,0.35)",
                margin: "14px 0 36px", animation: "ddlPl 2.5s ease infinite"
            }}>
                Real leather texture · 360° drag rotation · 5 products
            </p>

            <style>{`
        @keyframes ddlPl { 0%,100%{opacity:0.28} 50%{opacity:0.75} }
      `}</style>
        </section>
    );
}