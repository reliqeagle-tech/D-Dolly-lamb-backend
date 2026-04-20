// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const About = () => {
//   return (
//     <div className='px-10 bg-[#faf0e6] pb-10'>

//       <div className='text-2xl text-center pt-8 border-t'>
//         <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-16'>
//         <img className='w-full md:max-w-[500px] rounded-lg' src={assets.collectionImg} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//           <p>D Dolly Lamb was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
//           <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
//           <b className='text-gray-800'>Our Mission</b>
//           <p>Our mission at d dolly lamb is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
//         </div>
//       </div>

//       <div className=' text-xl py-4 text-center'>
//         <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 pb-10'>
//         <div className='border px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-5 mx-5 shadow-lg rounded-lg bg-[#fff] '>
//           <b className='font-bold'>Quality Assurance</b>
//           <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards. Every item goes through multiple layers of inspection, from material durability and stitching strength to design accuracy and finish.</p>
//         </div>
//         <div className='border px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-5 mx-5 shadow-lg rounded-lg bg-[#fff]'>
//           <b>Convenience</b>
//           <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier. From intuitive navigation and smart search filters to secure checkout and multiple payment options.</p>
//         </div>
//         <div className='border px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-5 mx-5 shadow-lg rounded-lg bg-[#fff]'>
//           <b>Exceptional Customer Service</b>
//           <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority. Whether you need help choosing the right product, have questions about your order.</p>
//         </div>
//         <div className='border px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-5 mx-5 shadow-lg rounded-lg bg-[#fff]'>
//           <b>Fast & Reliable Delivery</b>
//           <p className=' text-gray-600'>We ensure your orders reach you quickly and safely, with reliable shipping partners and real-time tracking. Your products arrive on time, every time, so you can enjoy them without delay.</p>
//         </div>
//         <div className='border px-5 md:px-10 py-5 sm:py-10 flex flex-col gap-5 mx-5 shadow-lg rounded-lg bg-[#fff] '>
//           <b>Sustainable Practices</b>
//           <p className=' text-gray-600'>We are committed to eco-friendly sourcing and packaging. From ethically produced materials to recyclable packaging, we strive to reduce our environmental footprint while delivering high-quality products.</p>
//         </div>
//       </div>

//       <NewsletterBox />

//     </div>
//   )
// }

// export default About





// import React, { useState, useEffect, useRef } from 'react'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// /* ── Premium SVG Icons ─────────────────────────── */
// const IconShield = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z"
//       stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(200,151,58,0.08)" />
//     <path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const IconStar = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//       stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.08)" strokeLinejoin="round" />
//   </svg>
// )
// const IconHeart = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//       stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(200,151,58,0.08)" />
//   </svg>
// )
// const IconTruck = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M1 3h15v13H1z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(200,151,58,0.08)" />
//     <path d="M16 8h4l3 4v4h-7V8z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(200,151,58,0.08)" />
//     <circle cx="5.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" />
//     <circle cx="18.5" cy="18.5" r="2" stroke="#c8973a" strokeWidth="1.4" />
//   </svg>
// )
// const IconLeaf = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21c1-1 2-2.5 3-3.5C10 16 12 16 14 15c3-1.5 5-4 5-7z"
//       stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(200,151,58,0.08)" />
//     <path d="M3.82 19.34C4.5 17 6 14 9 12" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// )
// const IconDiamond = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 42 42" fill="none">
//     <rect x="6" y="6" width="30" height="30" rx="1" transform="rotate(45 21 21)"
//       stroke="#c8924a" strokeWidth="1.4" fill="none" />
//     <rect x="11" y="11" width="20" height="20" rx="0.5" transform="rotate(45 21 21)"
//       stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//     <circle cx="21" cy="21" r="2" fill="#c8973a" opacity="0.7" />
//   </svg>
// )
// const IconQuote = () => (
//   <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//     <path d="M6 20c0-5.52 3.5-9.8 8-11.5L15 10c-3 1.5-4.5 4-4.5 6h3V20H6zm13 0c0-5.52 3.5-9.8 8-11.5L28 10c-3 1.5-4.5 4-4.5 6h3V20H19z"
//       fill="rgba(200,151,58,0.25)" />
//   </svg>
// )

// /* ── Animated stat counter ─────────────────────── */
// const StatCounter = ({ end, suffix, label }) => {
//   const [count, setCount] = useState(0)
//   const ref = useRef(null)
//   const started = useRef(false)

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting && !started.current) {
//         started.current = true
//         let start = 0
//         const step = Math.ceil(end / 50)
//         const timer = setInterval(() => {
//           start += step
//           if (start >= end) { setCount(end); clearInterval(timer) }
//           else setCount(start)
//         }, 30)
//       }
//     }, { threshold: 0.5 })
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [end])

//   return (
//     <div ref={ref} className="flex flex-col items-center gap-1">
//       <span style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 400, color: "#f7c568", letterSpacing: "0.04em" }}>
//         {count}{suffix}
//       </span>
//       <span style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#7a6050", fontFamily: "Georgia,serif", textTransform: "uppercase" }}>{label}</span>
//     </div>
//   )
// }

// /* ── Why-card ──────────────────────────────────── */
// const WhyCard = ({ icon, title, body, delay }) => (
//   <div className="ab-card" style={{
//     animationDelay: delay,
//     background: "linear-gradient(145deg,#1e110a,#160c06)",
//     border: "1px solid rgba(200,151,58,0.12)",
//     borderRadius: "4px", padding: "32px 28px",
//     position: "relative", overflow: "hidden",
//     transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
//   }}
//     onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.45)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)" }}
//     onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.12)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
//   >
//     {/* Animated top bar */}
//     <div style={{
//       position: "absolute", top: 0, left: 0, right: 0, height: "2px",
//       background: "linear-gradient(to right,#c8973a,#f7c568)", transform: "scaleX(0)",
//       transformOrigin: "left", transition: "transform 0.4s ease"
//     }}
//       className="ab-card-bar"
//     />
//     <div className="flex items-center gap-3 mb-4">
//       <div style={{ width: 44, height: 44, border: "1px solid rgba(200,151,58,0.2)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(200,151,58,0.04)", flexShrink: 0 }}>
//         {icon}
//       </div>
//       <h3 style={{ fontFamily: "Georgia,serif", fontSize: "14px", color: "#f5ede0", fontWeight: 400, letterSpacing: "0.04em" }}>{title}</h3>
//     </div>
//     <p style={{ fontSize: "13px", color: "#6a5040", fontFamily: "Georgia,serif", fontStyle: "italic", lineHeight: 1.85 }}>{body}</p>
//   </div>
// )

// /* ══════════════════════════════════════════════
//    ABOUT PAGE
// ══════════════════════════════════════════════ */
// const About = () => {
//   const milestones = [
//     { year: "2001", title: "The Founding", body: "D Dolly Lamb was established in a small Lahore workshop — a single craftsman, a single vision: perfect lambskin." },
//     { year: "2008", title: "Global Reach", body: "Our bespoke jackets found homes across 30 countries as word spread through discerning collectors and fashion editors alike." },
//     { year: "2015", title: "Artisan Atelier", body: "We opened our flagship atelier, bringing the full craft process under one roof — from raw hide to finished garment." },
//     { year: "2024", title: "Heritage Forward", body: "Over 3,200 clients. Still hand-stitched. Still obsessed with quality. Building the next generation of heritage leather." },
//   ]

//   const whyCards = [
//     { icon: <IconShield />, title: "Grade A Quality Assurance", body: "Every hide is individually graded. Each stitch is tension-checked. We reject over 40% of incoming lambskin that doesn't meet our standard.", delay: "0.1s" },
//     { icon: <IconStar />, title: "Bespoke Experience", body: "From measurement to final fitting, your garment is built around you — not a size chart. Custom orders welcome worldwide.", delay: "0.18s" },
//     { icon: <IconHeart />, title: "Heritage Craftsmanship", body: "Over 22 years of refinement. Our master cutters have each spent a decade learning the unique properties of lambskin leather.", delay: "0.26s" },
//     { icon: <IconTruck />, title: "Secure & Reliable Delivery", body: "Every piece ships in acid-free tissue, a branded dust bag, and a rigid gift box — insured and tracked to your door.", delay: "0.34s" },
//     { icon: <IconLeaf />, title: "Responsible Sourcing", body: "We work exclusively with tanneries that meet our ethical standards — no shortcuts, no greenwashing.", delay: "0.42s" },
//   ]

//   return (
//     <div style={{ background: "#1a0f0a", minHeight: "100vh", fontFamily: "Georgia,serif" }}>
//       <style>{`
//         @keyframes abFadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes abLineExpand {
//           from { transform: scaleX(0); }
//           to   { transform: scaleX(1); }
//         }
//         @keyframes abPulse {
//           0%,100% { opacity:0.3; } 50% { opacity:0.6; }
//         }
//         .ab-hero-text { animation: abFadeUp 0.8s ease both; }
//         .ab-card { animation: abFadeUp 0.6s ease both; }
//         .ab-card:hover .ab-card-bar { transform: scaleX(1) !important; }
//         .ab-milestone { animation: abFadeUp 0.5s ease both; }
//         .ab-orb {
//           position: absolute; border-radius: 50%; pointer-events: none;
//           animation: abPulse 6s ease-in-out infinite;
//         }
//         .ab-divider {
//           height: 1px;
//           background: linear-gradient(to right, transparent, rgba(200,151,58,0.25), transparent);
//         }
//       `}</style>

//       {/* ── HERO ── */}
//       <div style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderBottom: "1px solid rgba(200,151,58,0.12)" }}>
//         <div className="ab-orb" style={{ width: 500, height: 500, top: -100, right: -100, background: "radial-gradient(circle,rgba(200,151,58,0.07) 0%,transparent 70%)" }} />
//         <div className="ab-orb" style={{ width: 350, height: 350, bottom: -80, left: -80, background: "radial-gradient(circle,rgba(200,151,58,0.05) 0%,transparent 70%)", animationDelay: "3s" }} />

//         {/* Gold top rule */}
//         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)", opacity: 0.6 }} />

//         <div className="ab-hero-text text-center px-6 py-20 relative z-10 max-w-3xl mx-auto">
//           <div className="flex justify-center mb-6"><IconDiamond size={52} /></div>
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <span style={{ display: "block", width: 40, height: "1px", background: "linear-gradient(to right,transparent,#c8973a)" }} />
//             <span style={{ fontSize: "9px", letterSpacing: "0.42em", color: "#c8973a" }}>EST. 2001 · INDIA</span>
//             <span style={{ display: "block", width: 40, height: "1px", background: "linear-gradient(to left,transparent,#c8973a)" }} />
//           </div>
//           <h1 style={{ fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 400, color: "#f5ede0", letterSpacing: "0.06em", lineHeight: 1.15, marginBottom: "20px" }}>
//             The Art of<br />
//             <span style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//               Lambskin
//             </span>{" "}Leather
//           </h1>
//           <p style={{ fontSize: "15px", color: "#6a5040", fontStyle: "italic", lineHeight: 1.9, maxWidth: "560px", margin: "0 auto" }}>
//             Over two decades of hand-stitched heritage, Grade A hides, and bespoke craft — built for those who understand the difference.
//           </p>
//         </div>
//       </div>

//       {/* ── STATS ROW ── */}
//       <div style={{ borderBottom: "1px solid rgba(200,151,58,0.1)", background: "rgba(0,0,0,0.25)" }}>
//         <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <StatCounter end={22} suffix="+" label="Years of craft" />
//           <StatCounter end={3200} suffix="+" label="Clients worldwide" />
//           <StatCounter end={100} suffix="%" label="Grade A lambskin" />
//           <StatCounter end={30} suffix="+" label="Countries served" />
//         </div>
//       </div>

//       {/* ── STORY SECTION ── */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <div className="flex flex-col lg:flex-row gap-14 items-center">
//           {/* Image */}
//           <div style={{ position: "relative", flexShrink: 0 }}>
//             <div style={{ position: "absolute", inset: -12, border: "1px solid rgba(200,151,58,0.18)", borderRadius: "6px", zIndex: 0 }} />
//             <img
//               src={assets.collectionImg}
//               alt="D Dolly Lamb Atelier"
//               style={{ width: "100%", maxWidth: 460, borderRadius: "4px", position: "relative", zIndex: 1, display: "block" }}
//             />
//             {/* Gold corner accents */}
//             {[{ top: -4, left: -4 }, { top: -4, right: -4 }, { bottom: -4, left: -4 }, { bottom: -4, right: -4 }].map((pos, i) => (
//               <div key={i} style={{ position: "absolute", width: 16, height: 16, zIndex: 2, ...pos }}>
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   {i === 0 && <><path d="M1 8V1h7" stroke="#c8973a" strokeWidth="1.2" strokeLinecap="round" /></>}
//                   {i === 1 && <><path d="M15 8V1H8" stroke="#c8973a" strokeWidth="1.2" strokeLinecap="round" /></>}
//                   {i === 2 && <><path d="M1 8v7h7" stroke="#c8973a" strokeWidth="1.2" strokeLinecap="round" /></>}
//                   {i === 3 && <><path d="M15 8v7H8" stroke="#c8973a" strokeWidth="1.2" strokeLinecap="round" /></>}
//                 </svg>
//               </div>
//             ))}
//           </div>

//           {/* Text */}
//           <div className="flex flex-col gap-6 flex-1">
//             <div>
//               <p style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", marginBottom: "10px" }}>OUR STORY</p>
//               <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 400, color: "#f5ede0", lineHeight: 1.3, marginBottom: "20px" }}>
//                 Born from a passion<br />for perfect leather
//               </h2>
//             </div>
//             <p style={{ fontSize: "14px", color: "#6a5040", fontStyle: "italic", lineHeight: 1.95 }}>
//               D Dolly Lamb was born out of a singular obsession: to source, tan, and craft the finest lambskin leather garments in the world. Our journey began in a small Lahore workshop with a single craftsman and a standard so exacting that 40% of incoming hides never make it to the cutting table.
//             </p>
//             <p style={{ fontSize: "14px", color: "#6a5040", fontStyle: "italic", lineHeight: 1.95 }}>
//               Since our inception, we have worked tirelessly to curate a collection that speaks to those who notice the difference between a garment that merely looks good and one that is built to last a lifetime.
//             </p>

//             {/* Mission block */}
//             <div style={{ borderLeft: "2px solid #c8973a", paddingLeft: "20px", marginTop: "8px" }}>
//               <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#c8973a", marginBottom: "8px" }}>OUR MISSION</p>
//               <p style={{ fontSize: "14px", color: "#a08060", fontStyle: "italic", lineHeight: 1.85 }}>
//                 To empower every customer with confidence — knowing their garment was made by hand, with intention, from the finest materials on earth.
//               </p>
//             </div>

//             {/* Quote */}
//             <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginTop: "8px", padding: "16px 20px", background: "rgba(200,151,58,0.04)", border: "1px solid rgba(200,151,58,0.1)", borderRadius: "3px" }}>
//               <IconQuote />
//               <p style={{ fontSize: "13px", color: "#7a6050", fontStyle: "italic", lineHeight: 1.8 }}>
//                 "We don't make jackets. We make heirlooms."
//                 <br />
//                 <span style={{ fontSize: "10px", color: "#5a4030", letterSpacing: "0.2em", fontStyle: "normal" }}>— FOUNDER, D DOLLY LAMB</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="ab-divider max-w-6xl mx-auto" />

//       {/* ── TIMELINE ── */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <div className="text-center mb-14">
//           <p style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", marginBottom: "10px" }}>OUR JOURNEY</p>
//           <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 400, color: "#f5ede0", letterSpacing: "0.05em" }}>
//             Two Decades of <span style={{ color: "#c8973a" }}>Heritage</span>
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Centre line */}
//           <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom,transparent,rgba(200,151,58,0.3),transparent)", transform: "translateX(-50%)" }} className="hidden md:block" />

//           <div className="flex flex-col gap-10">
//             {milestones.map((m, i) => (
//               <div key={i} className={`ab-milestone flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
//                 style={{ animationDelay: `${i * 0.12}s` }}>
//                 <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                   <div style={{ display: "inline-block", padding: "24px 28px", background: "linear-gradient(145deg,#1e110a,#160c06)", border: "1px solid rgba(200,151,58,0.14)", borderRadius: "4px", maxWidth: 380 }}>
//                     <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#c8973a", marginBottom: "6px" }}>{m.year}</p>
//                     <h3 style={{ fontSize: "15px", color: "#f5ede0", fontWeight: 400, marginBottom: "8px" }}>{m.title}</h3>
//                     <p style={{ fontSize: "12px", color: "#6a5040", fontStyle: "italic", lineHeight: 1.8 }}>{m.body}</p>
//                   </div>
//                 </div>
//                 {/* Centre dot */}
//                 <div style={{ width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg,#c8973a,#f7c568)", border: "3px solid #1a0f0a", boxShadow: "0 0 12px rgba(200,151,58,0.5)", flexShrink: 0, zIndex: 1 }} />
//                 <div className="flex-1 hidden md:block" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="ab-divider max-w-6xl mx-auto" />

//       {/* ── WHY CHOOSE US ── */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <div className="text-center mb-14">
//           <p style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", marginBottom: "10px" }}>THE D DOLLY LAMB STANDARD</p>
//           <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 400, color: "#f5ede0", letterSpacing: "0.05em" }}>
//             Why Clients Choose <span style={{ color: "#c8973a" }}>Us</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {whyCards.map((c, i) => <WhyCard key={i} {...c} />)}
//           {/* Spanning CTA card */}
//           <div style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", borderRadius: "4px", padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }}>
//             <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#1a0f0a", fontWeight: 700 }}>READY TO BEGIN?</p>
//             <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#1a0f0a", lineHeight: 1.3 }}>Commission your bespoke piece today</h3>
//             <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "0.2em", color: "#1a0f0a", fontWeight: 700, textDecoration: "none", marginTop: "8px" }}>
//               GET IN TOUCH →
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── NEWSLETTER ── */}
//       <NewsletterBox />
//     </div>
//   )
// }

// export default About



import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

/*
  ═══════════════════════════════════════════════
  LIGHT MODE — About.jsx
  Matches current site: white/lavender bg + indigo accents
  ═══════════════════════════════════════════════
  OLD dark brown:
    bg: #1a0f0a, cards: #1e110a → #160c06
    accent: #c8973a / #f7c568  amber
    text hi: #f5ede0, muted: #6a5040 / #7a6050

  NEW light mode (indigo system):
    page bg:      #FFFFFF → #F4F5FF → #EEF0FF
    card bg:      #FFFFFF, hover: #F5F4FF
    card border:  rgba(99,102,241,0.14) → 0.45 hover
    accent:       #6366F1 indigo / #818CF8 light / #4338CA deep
    icon stroke:  #6366F1 indigo
    icon fill:    rgba(99,102,241,0.08)
    text hi:      #1E1B4B deep navy
    text mid:     #4B5563 dark grey
    text muted:   #6B7280 cool grey
    eyebrow:      #6366F1 indigo
    stat number:  #4338CA deep indigo
    stat label:   #9CA3AF
    timeline dot: #6366F1 gradient
    timeline card bg: #FFFFFF border rgba(99,102,241,0.12)
    gold logo:    KEPT for brand identity
  ═══════════════════════════════════════════════
*/

/* ── Icons — indigo strokes ── */
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z"
      stroke="#6366F1" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(99,102,241,0.08)" />
    <path d="M9 12l2 2 4-4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.08)" strokeLinejoin="round" />
  </svg>
)
const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
      stroke="#6366F1" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(99,102,241,0.08)" />
  </svg>
)
const IconTruck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M1 3h15v13H1z" stroke="#6366F1" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(99,102,241,0.08)" />
    <path d="M16 8h4l3 4v4h-7V8z" stroke="#6366F1" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(99,102,241,0.08)" />
    <circle cx="5.5" cy="18.5" r="2" stroke="#6366F1" strokeWidth="1.4" />
    <circle cx="18.5" cy="18.5" r="2" stroke="#6366F1" strokeWidth="1.4" />
  </svg>
)
const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21c1-1 2-2.5 3-3.5C10 16 12 16 14 15c3-1.5 5-4 5-7z"
      stroke="#6366F1" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(99,102,241,0.08)" />
    <path d="M3.82 19.34C4.5 17 6 14 9 12" stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)
const IconDiamond = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 42 42" fill="none">
    <rect x="6" y="6" width="30" height="30" rx="1" transform="rotate(45 21 21)"
      stroke="#B8923E" strokeWidth="1.4" fill="none" />
    <rect x="11" y="11" width="20" height="20" rx="0.5" transform="rotate(45 21 21)"
      stroke="#D4A853" strokeWidth="0.7" fill="none" opacity="0.4" />
    <circle cx="21" cy="21" r="2" fill="#D4A853" opacity="0.7" />
  </svg>
)
const IconQuote = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M6 20c0-5.52 3.5-9.8 8-11.5L15 10c-3 1.5-4.5 4-4.5 6h3V20H6zm13 0c0-5.52 3.5-9.8 8-11.5L28 10c-3 1.5-4.5 4-4.5 6h3V20H19z"
      fill="rgba(99,102,241,0.2)" />
  </svg>
)

/* ── Animated stat counter ── */
const StatCounter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(end / 50)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(start)
        }, 30)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <span style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "clamp(1.8rem,4vw,2.6rem)",
        fontWeight: 700,
        background: "linear-gradient(135deg, #4338CA, #6366F1)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        letterSpacing: "0.02em",
      }}>
        {count}{suffix}
      </span>
      <span style={{
        fontSize: 10, letterSpacing: "0.25em", color: "#9CA3AF",
        fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase", fontWeight: 500,
      }}>{label}</span>
    </div>
  )
}

/* ── Why-card ── */
const WhyCard = ({ icon, title, body, delay }) => (
  <div
    style={{
      animationDelay: delay,
      background: "#FFFFFF",
      border: "1px solid rgba(99,102,241,0.14)",
      borderRadius: 12,
      padding: "28px 24px",
      position: "relative", overflow: "hidden",
      boxShadow: "0 2px 12px rgba(99,102,241,0.06)",
      transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s, background 0.3s",
    }}
    className="ab-card"
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.45)";
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 20px 48px rgba(99,102,241,0.14)";
      e.currentTarget.style.background = "linear-gradient(145deg, #F5F4FF, #EEF0FF)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.14)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 12px rgba(99,102,241,0.06)";
      e.currentTarget.style.background = "#FFFFFF";
    }}
  >
    {/* Indigo top bar on hover */}
    <div className="ab-card-bar" style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 2,
      background: "linear-gradient(to right, #4338CA, #6366F1, #818CF8)",
      transform: "scaleX(0)", transformOrigin: "left",
      transition: "transform 0.4s ease", borderRadius: "12px 12px 0 0",
    }} />

    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <div style={{
        width: 48, height: 48, flexShrink: 0,
        border: "1px solid rgba(99,102,241,0.18)",
        borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(99,102,241,0.06)",
        transition: "background 0.3s",
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 14, fontWeight: 600,
        color: "#1E1B4B", letterSpacing: "0.02em",
      }}>{title}</h3>
    </div>
    <p style={{
      fontSize: 13, color: "#6B7280",
      fontFamily: "'Montserrat', sans-serif",
      fontStyle: "italic", lineHeight: 1.85,
    }}>{body}</p>
  </div>
)

/* ══════════════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════════════ */
const About = () => {
  const milestones = [
    { year: "2001", title: "The Founding", body: "D Dolly Lamb was established in a small Lahore workshop — a single craftsman, a single vision: perfect lambskin." },
    { year: "2008", title: "Global Reach", body: "Our bespoke jackets found homes across 30 countries as word spread through discerning collectors and fashion editors alike." },
    { year: "2015", title: "Artisan Atelier", body: "We opened our flagship atelier, bringing the full craft process under one roof — from raw hide to finished garment." },
    { year: "2024", title: "Heritage Forward", body: "Over 3,200 clients. Still hand-stitched. Still obsessed with quality. Building the next generation of heritage leather." },
  ]

  const whyCards = [
    { icon: <IconShield />, title: "Grade A Quality Assurance", body: "Every hide is individually graded. Each stitch is tension-checked. We reject over 40% of incoming lambskin that doesn't meet our standard.", delay: "0.1s" },
    { icon: <IconStar />, title: "Bespoke Experience", body: "From measurement to final fitting, your garment is built around you — not a size chart. Custom orders welcome worldwide.", delay: "0.18s" },
    { icon: <IconHeart />, title: "Heritage Craftsmanship", body: "Over 22 years of refinement. Our master cutters have each spent a decade learning the unique properties of lambskin leather.", delay: "0.26s" },
    { icon: <IconTruck />, title: "Secure & Reliable Delivery", body: "Every piece ships in acid-free tissue, a branded dust bag, and a rigid gift box — insured and tracked to your door.", delay: "0.34s" },
    { icon: <IconLeaf />, title: "Responsible Sourcing", body: "We work exclusively with tanneries that meet our ethical standards — no shortcuts, no greenwashing.", delay: "0.42s" },
  ]

  return (
    <div style={{
      background: "linear-gradient(180deg, #FFFFFF 0%, #F4F5FF 35%, #EEF0FF 100%)",
      minHeight: "100vh",
      fontFamily: "'Montserrat', sans-serif",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        @keyframes abFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes abPulse {
          0%,100% { opacity: 0.4; } 50% { opacity: 0.7; }
        }
        @keyframes shimmerIndigo {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .ab-hero-text { animation: abFadeUp 0.8s ease both; }
        .ab-card      { animation: abFadeUp 0.6s ease both; }
        .ab-card:hover .ab-card-bar { transform: scaleX(1) !important; }
        .ab-milestone { animation: abFadeUp 0.5s ease both; }

        .ab-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          animation: abPulse 6s ease-in-out infinite;
        }
        .ab-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(99,102,241,0.2), transparent);
          margin: 0 auto;
        }

        /* subtle grid pattern matching hero */
        .ab-grid-bg::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .ab-shimmer-bar {
          background: linear-gradient(90deg,
            transparent 0%, rgba(99,102,241,0.3) 20%,
            #6366F1 45%, #818CF8 50%, #6366F1 55%,
            rgba(99,102,241,0.3) 80%, transparent 100%);
          background-size: 200% auto;
          animation: shimmerIndigo 4s linear infinite;
          height: 2px;
        }
      `}</style>

      {/* ── HERO ── */}
      <div style={{
        position: "relative", minHeight: "62vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        borderBottom: "1px solid rgba(99,102,241,0.1)",
      }} className="ab-grid-bg">

        {/* Shimmer top line */}
        <div className="ab-shimmer-bar" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

        {/* Soft blobs matching hero */}
        <div className="ab-orb" style={{
          width: 480, height: 480, top: -100, right: -80,
          background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
        }} />
        <div className="ab-orb" style={{
          width: 320, height: 320, bottom: -60, left: -60,
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          animationDelay: "3s",
        }} />

        <div className="ab-hero-text" style={{
          textAlign: "center", padding: "80px 24px",
          position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto",
        }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <IconDiamond size={52} />
          </div>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ display: "block", width: 40, height: 1, background: "linear-gradient(to right, transparent, #6366F1)" }} />
            <span style={{
              fontSize: 10, letterSpacing: "0.38em", color: "#6366F1",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 600, textTransform: "uppercase",
            }}>EST. 2001 · INDIA</span>
            <span style={{ display: "block", width: 40, height: 1, background: "linear-gradient(to left, transparent, #6366F1)" }} />
          </div>

          <h1 style={{
            fontSize: "clamp(2rem,6vw,3.8rem)", fontWeight: 700,
            color: "#1E1B4B", letterSpacing: "0.03em",
            lineHeight: 1.15, marginBottom: 20,
            fontFamily: "'Montserrat', sans-serif",
          }}>
            The Art of{" "}
            <span style={{
              background: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Lambskin</span>{" "}Leather
          </h1>

          <p style={{
            fontSize: 15, color: "#6B7280",
            fontStyle: "italic", lineHeight: 1.9,
            maxWidth: 540, margin: "0 auto",
            fontFamily: "'Montserrat', sans-serif",
          }}>
            Over two decades of hand-stitched heritage, Grade A hides, and bespoke craft — built for those who understand the difference.
          </p>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div style={{
        borderBottom: "1px solid rgba(99,102,241,0.1)",
        background: "linear-gradient(135deg, #F8F7FF, #EEF0FF)",
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto", padding: "48px 24px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))",
          gap: 32, textAlign: "center",
        }}>
          <StatCounter end={22} suffix="+" label="Years of craft" />
          <StatCounter end={3200} suffix="+" label="Clients worldwide" />
          <StatCounter end={100} suffix="%" label="Grade A lambskin" />
          <StatCounter end={30} suffix="+" label="Countries served" />
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>

          {/* Image with indigo corner accents */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{
              position: "absolute", inset: -12,
              border: "1px solid rgba(99,102,241,0.18)",
              borderRadius: 10, zIndex: 0,
            }} />
            <img
              src={assets.collectionImg}
              alt="D Dolly Lamb Atelier"
              style={{
                width: "100%", maxWidth: 440, borderRadius: 6,
                position: "relative", zIndex: 1, display: "block",
                boxShadow: "0 8px 32px rgba(99,102,241,0.1)",
              }}
            />
            {/* Indigo corner accents */}
            {[{ top: -4, left: -4 }, { top: -4, right: -4 }, { bottom: -4, left: -4 }, { bottom: -4, right: -4 }].map((pos, i) => (
              <div key={i} style={{ position: "absolute", width: 16, height: 16, zIndex: 2, ...pos }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {i === 0 && <path d="M1 8V1h7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                  {i === 1 && <path d="M15 8V1H8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                  {i === 2 && <path d="M1 8v7h7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                  {i === 3 && <path d="M15 8v7H8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                </svg>
              </div>
            ))}
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, minWidth: 280 }}>
            <div>
              <p style={{
                fontSize: 9, letterSpacing: "0.38em", color: "#6366F1",
                marginBottom: 10, fontWeight: 700, textTransform: "uppercase",
              }}>OUR STORY</p>
              <h2 style={{
                fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 700,
                color: "#1E1B4B", lineHeight: 1.3, marginBottom: 16,
                fontFamily: "'Montserrat', sans-serif",
              }}>
                Born from a passion<br />for perfect leather
              </h2>
            </div>

            <p style={{
              fontSize: 14, color: "#6B7280", fontStyle: "italic",
              lineHeight: 1.95, fontFamily: "'Montserrat', sans-serif",
            }}>
              D Dolly Lamb was born out of a singular obsession: to source, tan, and craft the finest lambskin leather garments in the world. Our journey began in a small Lahore workshop with a single craftsman and a standard so exacting that 40% of incoming hides never make it to the cutting table.
            </p>
            <p style={{
              fontSize: 14, color: "#6B7280", fontStyle: "italic",
              lineHeight: 1.95, fontFamily: "'Montserrat', sans-serif",
            }}>
              Since our inception, we have worked tirelessly to curate a collection that speaks to those who notice the difference between a garment that merely looks good and one that is built to last a lifetime.
            </p>

            {/* Mission block — indigo left border */}
            <div style={{
              borderLeft: "2.5px solid #6366F1",
              paddingLeft: 20, marginTop: 4,
              background: "rgba(99,102,241,0.03)",
              borderRadius: "0 6px 6px 0", padding: "14px 16px 14px 20px",
            }}>
              <p style={{
                fontSize: 9, letterSpacing: "0.28em", color: "#6366F1",
                marginBottom: 8, fontWeight: 700, textTransform: "uppercase",
              }}>OUR MISSION</p>
              <p style={{
                fontSize: 14, color: "#4B5563", fontStyle: "italic",
                lineHeight: 1.85, fontFamily: "'Montserrat', sans-serif",
              }}>
                To empower every customer with confidence — knowing their garment was made by hand, with intention, from the finest materials on earth.
              </p>
            </div>

            {/* Quote */}
            <div style={{
              display: "flex", gap: 12, alignItems: "flex-start",
              padding: "16px 18px",
              background: "rgba(99,102,241,0.05)",
              border: "1px solid rgba(99,102,241,0.12)",
              borderRadius: 8,
            }}>
              <IconQuote />
              <p style={{
                fontSize: 13, color: "#6B7280",
                fontStyle: "italic", lineHeight: 1.8,
                fontFamily: "'Montserrat', sans-serif",
              }}>
                "We don't make jackets. We make heirlooms."
                <br />
                <span style={{
                  fontSize: 10, color: "#9CA3AF",
                  letterSpacing: "0.18em", fontStyle: "normal", fontWeight: 600,
                }}>— FOUNDER, D DOLLY LAMB</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ab-divider" style={{ maxWidth: 1100 }} />

      {/* ── TIMELINE ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{
            fontSize: 9, letterSpacing: "0.38em", color: "#6366F1",
            marginBottom: 10, fontWeight: 700, textTransform: "uppercase",
          }}>OUR JOURNEY</p>
          <h2 style={{
            fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700,
            color: "#1E1B4B", letterSpacing: "0.03em",
            fontFamily: "'Montserrat', sans-serif",
          }}>
            Two Decades of{" "}
            <span style={{
              background: "linear-gradient(135deg, #4338CA, #6366F1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Heritage</span>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Centre line */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0, width: 1,
            background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.25), transparent)",
            transform: "translateX(-50%)",
          }} className="hidden md:block" />

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {milestones.map((m, i) => (
              <div
                key={i}
                className="ab-milestone"
                style={{
                  display: "flex", flexWrap: "wrap", gap: 20,
                  alignItems: "center",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                <div style={{ flex: 1, minWidth: 240, textAlign: i % 2 === 0 ? "right" : "left" }}>
                  <div style={{
                    display: "inline-block", padding: "22px 24px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(99,102,241,0.14)",
                    borderRadius: 10, maxWidth: 360,
                    boxShadow: "0 2px 12px rgba(99,102,241,0.07)",
                    transition: "box-shadow 0.3s, border-color 0.3s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,102,241,0.14)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)"; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(99,102,241,0.07)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.14)"; }}
                  >
                    <p style={{
                      fontSize: 9, letterSpacing: "0.28em", color: "#818CF8",
                      marginBottom: 6, fontWeight: 700, textTransform: "uppercase",
                    }}>{m.year}</p>
                    <h3 style={{
                      fontSize: 15, color: "#1E1B4B", fontWeight: 600,
                      marginBottom: 8, fontFamily: "'Montserrat', sans-serif",
                    }}>{m.title}</h3>
                    <p style={{
                      fontSize: 12, color: "#6B7280",
                      fontStyle: "italic", lineHeight: 1.8,
                      fontFamily: "'Montserrat', sans-serif",
                    }}>{m.body}</p>
                  </div>
                </div>

                {/* Centre dot */}
                <div style={{
                  width: 14, height: 14, borderRadius: "50%",
                  background: "linear-gradient(135deg, #4338CA, #6366F1)",
                  border: "3px solid #FFFFFF",
                  boxShadow: "0 0 14px rgba(99,102,241,0.45)",
                  flexShrink: 0, zIndex: 1,
                }} />

                <div style={{ flex: 1 }} className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ab-divider" style={{ maxWidth: 1100 }} />

      {/* ── WHY CHOOSE US ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{
            fontSize: 9, letterSpacing: "0.38em", color: "#6366F1",
            marginBottom: 10, fontWeight: 700, textTransform: "uppercase",
          }}>THE D DOLLY LAMB STANDARD</p>
          <h2 style={{
            fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700,
            color: "#1E1B4B", letterSpacing: "0.03em",
            fontFamily: "'Montserrat', sans-serif",
          }}>
            Why Clients Choose{" "}
            <span style={{
              background: "linear-gradient(135deg, #4338CA, #6366F1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Us</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {whyCards.map((c, i) => <WhyCard key={i} {...c} />)}

          {/* CTA card — indigo gradient */}
          <div style={{
            background: "linear-gradient(135deg, #4338CA, #6366F1)",
            borderRadius: 12, padding: "28px 24px",
            display: "flex", flexDirection: "column",
            justifyContent: "center", gap: 12,
            boxShadow: "0 8px 32px rgba(99,102,241,0.3)",
          }}>
            <p style={{
              fontSize: 9, letterSpacing: "0.28em", color: "rgba(255,255,255,0.7)",
              fontWeight: 700, textTransform: "uppercase",
            }}>READY TO BEGIN?</p>
            <h3 style={{
              fontSize: 18, fontWeight: 700, color: "#FFFFFF",
              lineHeight: 1.3, fontFamily: "'Montserrat', sans-serif",
            }}>Commission your bespoke piece today</h3>
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.9)",
              fontWeight: 700, textDecoration: "none", marginTop: 8,
              fontFamily: "'Montserrat', sans-serif",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              paddingBottom: 2,
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#FFFFFF"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.9)"}
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <NewsletterBox />
    </div>
  )
}

export default About