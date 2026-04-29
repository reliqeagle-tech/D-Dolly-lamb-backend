// import React, { useEffect, useState, useRef } from 'react';

// /* ═══════════════════════════════════════════════════════════════
//    D DOLLY LAMB — UNDER CONSTRUCTION  |  Dark luxury gold theme
// ═══════════════════════════════════════════════════════════════ */

// const B = {
//     bg: '#0d0804',
//     surface: '#1a0f07',
//     surface2: '#221408',
//     border: 'rgba(201,168,76,0.18)',
//     borderSoft: 'rgba(201,168,76,0.09)',
//     gold: '#c9a84c',
//     goldLight: '#e8c46a',
//     goldDim: 'rgba(201,168,76,0.10)',
//     cream: '#f0d898',
//     creamSoft: '#d4b87a',
//     muted: '#8b7555',
//     mutedSoft: '#5a4530',
// };

// /* ── Animated gold particle ── */
// const Particle = ({ style }) => (
//     <div style={{
//         position: 'absolute',
//         width: 2, height: 2,
//         borderRadius: '50%',
//         background: B.gold,
//         opacity: 0,
//         animation: 'ddFloat 4s ease-in-out infinite',
//         ...style,
//     }} />
// );

// /* ── Diamond icon (brand logo) ── */
// const DiamondIcon = ({ size = 60 }) => (
//     <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
//         <polygon
//             points="30,4 56,30 30,56 4,30"
//             fill="none"
//             stroke={B.gold}
//             strokeWidth="1.5"
//             style={{ animation: 'ddSpin 12s linear infinite' }}
//         />
//         <polygon
//             points="30,12 48,30 30,48 12,30"
//             fill={B.goldDim}
//             stroke={B.gold}
//             strokeWidth="1"
//             opacity="0.7"
//         />
//         <text
//             x="30" y="35"
//             textAnchor="middle"
//             fontSize="16"
//             fontWeight="800"
//             fill={B.gold}
//             fontFamily="system-ui, sans-serif"
//         >D</text>
//     </svg>
// );

// /* ── Progress bar ── */
// const ProgressBar = ({ label, pct, delay = 0 }) => {
//     const [width, setWidth] = useState(0);
//     useEffect(() => {
//         const t = setTimeout(() => setWidth(pct), 400 + delay);
//         return () => clearTimeout(t);
//     }, [pct, delay]);
//     return (
//         <div style={{ marginBottom: 16 }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
//                 <span style={{ color: B.creamSoft, fontSize: 12.5, fontWeight: 600 }}>{label}</span>
//                 <span style={{ color: B.gold, fontSize: 12, fontWeight: 700 }}>{pct}%</span>
//             </div>
//             <div style={{
//                 height: 4, borderRadius: 4,
//                 background: B.surface2,
//                 border: `1px solid ${B.borderSoft}`,
//                 overflow: 'hidden',
//             }}>
//                 <div style={{
//                     height: '100%', borderRadius: 4,
//                     background: `linear-gradient(90deg, ${B.gold}, ${B.goldLight})`,
//                     width: `${width}%`,
//                     transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}ms`,
//                     boxShadow: `0 0 8px ${B.gold}50`,
//                 }} />
//             </div>
//         </div>
//     );
// };

// /* ── Countdown timer ── */
// const Countdown = ({ targetDate }) => {
//     const calc = () => {
//         const diff = Math.max(0, new Date(targetDate) - Date.now());
//         return {
//             d: Math.floor(diff / 86400000),
//             h: Math.floor((diff % 86400000) / 3600000),
//             m: Math.floor((diff % 3600000) / 60000),
//             s: Math.floor((diff % 60000) / 1000),
//         };
//     };
//     const [t, setT] = useState(calc);
//     useEffect(() => {
//         const id = setInterval(() => setT(calc()), 1000);
//         return () => clearInterval(id);
//     }, []);

//     const Unit = ({ val, label }) => (
//         <div style={{ textAlign: 'center', minWidth: 64 }}>
//             <div style={{
//                 background: B.surface2,
//                 border: `1px solid ${B.border}`,
//                 borderRadius: 12,
//                 padding: '12px 14px',
//                 marginBottom: 6,
//                 position: 'relative',
//                 overflow: 'hidden',
//             }}>
//                 <div style={{
//                     position: 'absolute', top: 0, left: 0, right: 0, height: 1,
//                     background: `linear-gradient(90deg, transparent, ${B.gold}40, transparent)`,
//                 }} />
//                 <span style={{
//                     color: B.cream, fontSize: 28, fontWeight: 800,
//                     letterSpacing: -1, lineHeight: 1,
//                     display: 'block', fontVariantNumeric: 'tabular-nums',
//                 }}>
//                     {String(val).padStart(2, '0')}
//                 </span>
//             </div>
//             <span style={{
//                 color: B.muted, fontSize: 10.5, fontWeight: 600,
//                 textTransform: 'uppercase', letterSpacing: '.7px'
//             }}>{label}</span>
//         </div>
//     );

//     return (
//         <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, justifyContent: 'center' }}>
//             <Unit val={t.d} label="Days" />
//             <span style={{ color: B.gold, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
//             <Unit val={t.h} label="Hours" />
//             <span style={{ color: B.gold, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
//             <Unit val={t.m} label="Mins" />
//             <span style={{ color: B.gold, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
//             <Unit val={t.s} label="Secs" />
//         </div>
//     );
// };

// /* ── Feature card ── */
// const FeatureCard = ({ icon, title, desc, delay = 0 }) => (
//     <div style={{
//         background: B.surface,
//         border: `1px solid ${B.borderSoft}`,
//         borderRadius: 14,
//         padding: '16px 18px',
//         transition: 'border-color .2s, box-shadow .2s',
//         animation: `ddFadeUp .5s ease ${delay}ms both`,
//     }}
//         onMouseEnter={e => {
//             e.currentTarget.style.borderColor = B.border;
//             e.currentTarget.style.boxShadow = `0 6px 24px rgba(0,0,0,.4)`;
//         }}
//         onMouseLeave={e => {
//             e.currentTarget.style.borderColor = B.borderSoft;
//             e.currentTarget.style.boxShadow = 'none';
//         }}
//     >
//         <div style={{
//             width: 36, height: 36, borderRadius: 10, marginBottom: 12,
//             background: B.goldDim, border: `1px solid ${B.border}`,
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             fontSize: 16,
//         }}>{icon}</div>
//         <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, marginBottom: 5 }}>{title}</p>
//         <p style={{ color: B.muted, fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
//     </div>
// );

// /* ══════════════════════════════════════════════════════════════
//    MAIN PAGE
// ══════════════════════════════════════════════════════════════ */
// const UnderConstruction = () => {
//     // Target: 30 days from now (adjust as needed)
//     const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

//     const particles = Array.from({ length: 20 }, (_, i) => ({
//         left: `${5 + Math.random() * 90}%`,
//         top: `${5 + Math.random() * 90}%`,
//         animationDelay: `${Math.random() * 4}s`,
//         animationDuration: `${3 + Math.random() * 3}s`,
//     }));

//     return (
//         <div style={{
//             minHeight: '100vh',
//             background: B.bg,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '40px 24px',
//             position: 'relative',
//             overflow: 'hidden',
//             fontFamily: 'system-ui, -apple-system, sans-serif',
//             WebkitFontSmoothing: 'antialiased',
//         }}>

//             {/* ── Keyframes ── */}
//             <style>{`
//         @keyframes ddFloat {
//           0%   { opacity:0; transform:translateY(0); }
//           50%  { opacity:0.6; }
//           100% { opacity:0; transform:translateY(-60px); }
//         }
//         @keyframes ddSpin   { from{transform:rotate(0deg)}  to{transform:rotate(360deg)} }
//         @keyframes ddPulse  { 0%,100%{opacity:0.15} 50%{opacity:0.4} }
//         @keyframes ddFadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes ddBlink  { 0%,100%{opacity:1} 50%{opacity:0.3} }
//         @keyframes ddGlow   { 0%,100%{box-shadow:0 0 20px rgba(201,168,76,0.2)} 50%{box-shadow:0 0 40px rgba(201,168,76,0.45)} }
//         .uc-gear { animation: ddSpin 8s linear infinite; transform-origin: center; }
//         .uc-gear-rev { animation: ddSpin 6s linear infinite reverse; transform-origin: center; }
//       `}</style>

//             {/* ── Background radial glow ── */}
//             <div style={{
//                 position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
//                 width: 600, height: 400,
//                 background: `radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)`,
//                 pointerEvents: 'none',
//                 animation: 'ddPulse 4s ease-in-out infinite',
//             }} />

//             {/* ── Decorative top-left pattern ── */}
//             <svg width="200" height="200" viewBox="0 0 200 200" style={{
//                 position: 'absolute', top: -40, left: -40, opacity: 0.08, pointerEvents: 'none',
//             }}>
//                 {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => (
//                     <rect key={`${r}${c}`}
//                         x={c * 50 + 2} y={r * 50 + 2} width={44} height={44}
//                         rx="4" fill="none" stroke={B.gold} strokeWidth="0.5"
//                     />
//                 )))}
//             </svg>

//             {/* ── Decorative bottom-right pattern ── */}
//             <svg width="200" height="200" viewBox="0 0 200 200" style={{
//                 position: 'absolute', bottom: -40, right: -40, opacity: 0.08, pointerEvents: 'none',
//             }}>
//                 {[0, 1, 2, 3, 4].map(i => (
//                     <circle key={i} cx={100} cy={100} r={20 + i * 22}
//                         fill="none" stroke={B.gold} strokeWidth="0.5" />
//                 ))}
//             </svg>

//             {/* ── Floating particles ── */}
//             {particles.map((p, i) => <Particle key={i} style={p} />)}

//             {/* ════════ MAIN CARD ════════ */}
//             <div style={{
//                 maxWidth: 780, width: '100%',
//                 animation: 'ddFadeUp .6s ease both',
//             }}>

//                 {/* ── Brand header ── */}
//                 <div style={{ textAlign: 'center', marginBottom: 36 }}>
//                     {/* Logo ring */}
//                     <div style={{
//                         width: 88, height: 88, borderRadius: '50%',
//                         margin: '0 auto 20px',
//                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                         border: `1px solid ${B.border}`,
//                         background: B.surface,
//                         animation: 'ddGlow 3s ease-in-out infinite',
//                     }}>
//                         <DiamondIcon size={52} />
//                     </div>

//                     {/* Brand name */}
//                     <p style={{
//                         color: B.muted, fontSize: 11, fontWeight: 700,
//                         textTransform: 'uppercase', letterSpacing: '3px', marginBottom: 8
//                     }}>
//                         D Dolly Lamb · Admin Panel
//                     </p>
//                     <h1 style={{
//                         fontSize: 38, fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1,
//                         marginBottom: 14,
//                         background: `linear-gradient(135deg, ${B.cream} 0%, ${B.gold} 50%, ${B.goldLight} 100%)`,
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                     }}>
//                         Under Construction
//                     </h1>
//                     <p style={{ color: B.muted, fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: '0 auto 24px' }}>
//                         We're crafting something extraordinary for you.
//                         Our admin panel is being refined with precision and care.
//                     </p>

//                     {/* ── CTA Buttons ── */}
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
//                         {/* Primary — Visit Store */}
//                         <a
//                             href="/"
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                 padding: '11px 24px', borderRadius: 12,
//                                 background: `linear-gradient(135deg, ${B.gold}, ${B.goldLight})`,
//                                 color: B.bg, textDecoration: 'none',
//                                 fontSize: 13.5, fontWeight: 700,
//                                 boxShadow: `0 4px 20px rgba(201,168,76,0.35)`,
//                                 transition: 'opacity .15s, transform .15s',
//                                 letterSpacing: '.2px',
//                             }}
//                             onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
//                         >
//                             {/* Arrow icon */}
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//                                 <polyline points="9 22 9 12 15 12 15 22" />
//                             </svg>
//                             Visit Store
//                         </a>

//                         {/* Secondary — Go Back */}
//                         <a
//                             href="javascript:history.back()"
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                 padding: '10px 20px', borderRadius: 12,
//                                 background: 'transparent',
//                                 color: B.creamSoft, textDecoration: 'none',
//                                 fontSize: 13.5, fontWeight: 600,
//                                 border: `1px solid ${B.border}`,
//                                 transition: 'all .15s',
//                             }}
//                             onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.borderColor = B.gold; e.currentTarget.style.color = B.cream; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.creamSoft; }}
//                         >
//                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                 <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
//                             </svg>
//                             Go Back
//                         </a>
//                     </div>
//                 </div>

//                 {/* ── Gold divider ── */}
//                 <div style={{
//                     height: 1, marginBottom: 36,
//                     background: `linear-gradient(90deg, transparent, ${B.gold}50, transparent)`,
//                 }} />

//                 {/* ── Gear illustration + countdown ── */}
//                 <div style={{
//                     background: B.surface,
//                     border: `1px solid ${B.border}`,
//                     borderRadius: 20,
//                     padding: '28px 28px 24px',
//                     marginBottom: 24,
//                     position: 'relative', overflow: 'hidden',
//                 }}>
//                     {/* Top accent line */}
//                     <div style={{
//                         position: 'absolute', top: 0, left: 0, right: 0, height: 2,
//                         background: `linear-gradient(90deg, transparent, ${B.gold}, ${B.goldLight}, ${B.gold}, transparent)`,
//                     }} />

//                     {/* Gear SVG illustration */}
//                     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
//                         <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
//                             {/* Gear 1 — large */}
//                             <g className="uc-gear" style={{ transformBox: 'fill-box' }}>
//                                 <circle cx="42" cy="45" r="26" stroke={B.gold} strokeWidth="1" fill={B.surface2} />
//                                 <circle cx="42" cy="45" r="8" stroke={B.gold} strokeWidth="1" fill={B.surface} />
//                                 {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
//                                     const rad = (a * Math.PI) / 180;
//                                     const x1 = 42 + 22 * Math.cos(rad);
//                                     const y1 = 45 + 22 * Math.sin(rad);
//                                     const x2 = 42 + 29 * Math.cos(rad);
//                                     const y2 = 45 + 29 * Math.sin(rad);
//                                     return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
//                                         stroke={B.gold} strokeWidth="4" strokeLinecap="round" />;
//                                 })}
//                             </g>

//                             {/* Gear 2 — medium */}
//                             <g className="uc-gear-rev" style={{ transformBox: 'fill-box' }}>
//                                 <circle cx="88" cy="32" r="18" stroke={B.goldLight} strokeWidth="1" fill={B.surface2} />
//                                 <circle cx="88" cy="32" r="6" stroke={B.goldLight} strokeWidth="1" fill={B.surface} />
//                                 {[0, 60, 120, 180, 240, 300].map((a, i) => {
//                                     const rad = (a * Math.PI) / 180;
//                                     const x1 = 88 + 15 * Math.cos(rad);
//                                     const y1 = 32 + 15 * Math.sin(rad);
//                                     const x2 = 88 + 21 * Math.cos(rad);
//                                     const y2 = 32 + 21 * Math.sin(rad);
//                                     return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
//                                         stroke={B.goldLight} strokeWidth="3" strokeLinecap="round" />;
//                                 })}
//                             </g>

//                             {/* Gear 3 — small */}
//                             <g className="uc-gear" style={{ transformBox: 'fill-box' }}>
//                                 <circle cx="110" cy="66" r="12" stroke={B.creamSoft} strokeWidth="1" fill={B.surface2} />
//                                 <circle cx="110" cy="66" r="4" stroke={B.creamSoft} strokeWidth="1" fill={B.surface} />
//                                 {[0, 72, 144, 216, 288].map((a, i) => {
//                                     const rad = (a * Math.PI) / 180;
//                                     const x1 = 110 + 9 * Math.cos(rad);
//                                     const y1 = 66 + 9 * Math.sin(rad);
//                                     const x2 = 110 + 14 * Math.cos(rad);
//                                     const y2 = 66 + 14 * Math.sin(rad);
//                                     return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
//                                         stroke={B.creamSoft} strokeWidth="2.5" strokeLinecap="round" />;
//                                 })}
//                             </g>

//                             {/* Blinking cursor */}
//                             <rect x="24" y="76" width="2" height="10" rx="1"
//                                 fill={B.gold} style={{ animation: 'ddBlink 1s ease-in-out infinite' }} />
//                             <rect x="28" y="76" width="12" height="2" rx="1" fill={B.borderSoft} />
//                             <rect x="28" y="81" width="8" height="2" rx="1" fill={B.borderSoft} />
//                         </svg>
//                     </div>

//                     {/* Countdown */}
//                     <p style={{
//                         color: B.muted, fontSize: 11.5, fontWeight: 600,
//                         textTransform: 'uppercase', letterSpacing: '.7px',
//                         textAlign: 'center', marginBottom: 16
//                     }}>
//                         Estimated Launch In
//                     </p>
//                     <Countdown targetDate={targetDate} />
//                 </div>

//                 {/* ── Progress section ── */}
//                 <div style={{
//                     background: B.surface, border: `1px solid ${B.border}`,
//                     borderRadius: 20, padding: '24px 28px', marginBottom: 24,
//                 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
//                         <div style={{
//                             width: 6, height: 6, borderRadius: '50%',
//                             background: B.gold, animation: 'ddBlink 1.5s ease-in-out infinite'
//                         }} />
//                         <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700 }}>Build Progress</p>
//                     </div>
//                     <ProgressBar label="Core Dashboard & Analytics" pct={92} delay={0} />
//                     <ProgressBar label="Orders & Inventory System" pct={87} delay={100} />
//                     <ProgressBar label="Product Management" pct={78} delay={200} />
//                     <ProgressBar label="User & Customer Portal" pct={65} delay={300} />
//                     <ProgressBar label="Reporting & Exports" pct={54} delay={400} />
//                     <ProgressBar label="Performance Optimisation" pct={40} delay={500} />
//                 </div>

//                 {/* ── Features coming ── */}
//                 <div style={{
//                     display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
//                     gap: 12, marginBottom: 24,
//                 }}>
//                     <FeatureCard delay={0} icon="📦" title="Smart Inventory" desc="Real-time stock tracking with low-stock alerts and automated reorder points." />
//                     <FeatureCard delay={80} icon="📊" title="Deep Analytics" desc="Revenue dashboards, conversion funnels, and customer LTV insights." />
//                     <FeatureCard delay={160} icon="🚚" title="Order Tracking" desc="End-to-end order lifecycle management with instant status updates." />
//                     <FeatureCard delay={240} icon="👥" title="Customer Profiles" desc="Full customer history, preferences, and loyalty tier management." />
//                     <FeatureCard delay={320} icon="🏷️" title="Dynamic Pricing" desc="Size-based multipliers, discount rules, and flash sale scheduling." />
//                     <FeatureCard delay={400} icon="🔒" title="Role-Based Access" desc="Fine-grained permissions for admins, managers, and support staff." />
//                 </div>

//                 {/* ── Bottom bar ── */}
//                 <div style={{
//                     background: B.surface,
//                     border: `1px solid ${B.borderSoft}`,
//                     borderRadius: 16, padding: '18px 24px',
//                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                     flexWrap: 'wrap', gap: 12,
//                 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                         {/* Status dot */}
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                             <span style={{
//                                 width: 8, height: 8, borderRadius: '50%',
//                                 background: '#34d399', display: 'inline-block',
//                                 animation: 'ddBlink 2s ease-in-out infinite',
//                                 boxShadow: '0 0 8px #34d39960'
//                             }} />
//                             <span style={{ color: '#6ee7b7', fontSize: 12, fontWeight: 600 }}>Systems Online</span>
//                         </div>
//                         <span style={{ color: B.borderSoft }}>·</span>
//                         <span style={{ color: B.muted, fontSize: 12 }}>
//                             © {new Date().getFullYear()} D Dolly Lamb Admin
//                         </span>
//                     </div>

//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
//                         <a href="/" style={{
//                             display: 'inline-flex', alignItems: 'center', gap: 6,
//                             color: B.gold, fontSize: 12.5, fontWeight: 700,
//                             textDecoration: 'none', padding: '5px 14px',
//                             background: `linear-gradient(135deg, ${B.gold}18, ${B.goldLight}10)`,
//                             border: `1px solid ${B.border}`, borderRadius: 8,
//                             transition: 'all .15s',
//                         }}
//                             onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.boxShadow = `0 0 12px rgba(201,168,76,0.25)`; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(135deg, ${B.gold}18, ${B.goldLight}10)`; e.currentTarget.style.boxShadow = 'none'; }}
//                         >
//                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//                                 <polyline points="9 22 9 12 15 12 15 22" />
//                             </svg>
//                             Visit Store
//                         </a>
//                         <span style={{ color: B.mutedSoft }}>·</span>
//                         <span style={{ color: B.muted, fontSize: 12 }}>Need help?</span>
//                         <a href="mailto:info@ddollylamb.com" style={{
//                             color: B.creamSoft, fontSize: 12.5, fontWeight: 600,
//                             textDecoration: 'none', padding: '5px 12px',
//                             border: `1px solid ${B.borderSoft}`, borderRadius: 8,
//                             transition: 'all .15s',
//                         }}
//                             onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.cream; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.borderSoft; e.currentTarget.style.color = B.creamSoft; }}
//                         >
//                             info@ddollylamb.com
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UnderConstruction;






import React, { useEffect, useState } from 'react';
import {
    TbBuildingStore,
} from 'react-icons/tb';
import {
    MdOutlineInventory2, MdOutlineAnalytics, MdOutlineLocalShipping,
    MdOutlinePeople, MdOutlinePriceChange, MdOutlineSecurity,
} from 'react-icons/md';

/* ═══════════════════════════════════════════════════════════════
   D DOLLY LAMB — UNDER CONSTRUCTION  |  Light Luxury Theme
   Multi-color progress bars + react-icons feature cards
═══════════════════════════════════════════════════════════════ */

const B = {
    bg: '#F4F2EE',
    surface: '#FAFAF8',
    surface2: '#FFFFFF',
    surface3: '#F0EDE8',
    bgHover: '#EDE9E2',
    border: '#E0DBD3',
    borderSoft: '#EDE9E2',
    borderMid: '#C8C2B8',
    navy: '#1C2B3A',
    navyMid: '#2E4057',
    navySoft: '#4A6070',
    navyGhost: '#8FA0AD',
    green: '#1A7A4A',
    greenHover: '#2A9960',
    greenBg: '#E8F4EE',
    greenBorder: '#A8D5BC',
    greenLight: '#D1EAD8',
};

/* ─── Unique color per progress bar ─── */
const BAR_COLORS = [
    { fill: '#1A7A4A', track: '#E8F4EE', border: '#A8D5BC', pctColor: '#1A7A4A' }, // emerald
    { fill: '#1E40AF', track: '#EFF6FF', border: '#BFDBFE', pctColor: '#1E40AF' }, // blue
    { fill: '#7C3AED', track: '#F5F3FF', border: '#DDD6FE', pctColor: '#7C3AED' }, // violet
    { fill: '#B45309', track: '#FEF3C7', border: '#FCD34D', pctColor: '#92400E' }, // amber
    { fill: '#0E7490', track: '#ECFEFF', border: '#A5F3FC', pctColor: '#155E75' }, // cyan
    { fill: '#BE185D', track: '#FDF2F8', border: '#FBCFE8', pctColor: '#9D174D' }, // pink
];

/* ─── Floating particle ─── */
const Particle = ({ style }) => (
    <div style={{
        position: 'absolute', width: 3, height: 3, borderRadius: '50%',
        background: B.greenBorder, opacity: 0,
        animation: 'ddFloat 4s ease-in-out infinite', ...style,
    }} />
);

/* ─── Logo mark ─── */
const LogoMark = ({ size = 52 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect width="60" height="60" rx="13" fill={B.greenBg} />
        <polygon points="30,8 52,30 30,52 8,30" fill="none" stroke={B.green} strokeWidth="1.5"
            style={{ animation: 'ddSpin 14s linear infinite', transformOrigin: '30px 30px' }} />
        <polygon points="30,16 44,30 30,44 16,30" fill={B.greenBg} stroke={B.greenBorder} strokeWidth="1" opacity=".8" />
        <text x="30" y="35" textAnchor="middle" fontSize="16" fontWeight="800" fill={B.green} fontFamily="Georgia, serif">D</text>
    </svg>
);

/* ─── Multi-color Progress Bar ─── */
const ProgressBar = ({ label, pct, delay = 0, color }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const t = setTimeout(() => setWidth(pct), 500 + delay);
        return () => clearTimeout(t);
    }, [pct, delay]);

    return (
        <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: color.fill, flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ color: B.navySoft, fontSize: 12.5, fontWeight: 600 }}>{label}</span>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 800, color: color.pctColor }}>{pct}%</span>
            </div>
            <div style={{ height: 7, borderRadius: 99, background: color.track, border: `1px solid ${color.border}`, overflow: 'hidden' }}>
                <div style={{
                    height: '100%', borderRadius: 99,
                    background: color.fill,
                    width: `${width}%`,
                    transition: `width 1.3s cubic-bezier(.4,0,.2,1) ${delay}ms`,
                    boxShadow: `0 0 8px ${color.fill}40`,
                }} />
            </div>
        </div>
    );
};

/* ─── Countdown ─── */
const Countdown = ({ targetDate }) => {
    const calc = () => {
        const diff = Math.max(0, new Date(targetDate) - Date.now());
        return {
            d: Math.floor(diff / 86400000),
            h: Math.floor((diff % 86400000) / 3600000),
            m: Math.floor((diff % 3600000) / 60000),
            s: Math.floor((diff % 60000) / 1000),
        };
    };
    const [t, setT] = useState(calc);
    useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);

    const Unit = ({ val, label }) => (
        <div style={{ textAlign: 'center', minWidth: 64 }}>
            <div style={{ background: B.surface2, border: `1px solid ${B.greenBorder}`, borderRadius: 12, padding: '12px 14px', marginBottom: 6, position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(26,122,74,0.08)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${B.green}60, transparent)` }} />
                <span style={{ color: B.navy, fontSize: 28, fontWeight: 800, letterSpacing: -1, lineHeight: 1, display: 'block', fontVariantNumeric: 'tabular-nums' }}>
                    {String(val).padStart(2, '0')}
                </span>
            </div>
            <span style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.7px' }}>{label}</span>
        </div>
    );

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, justifyContent: 'center' }}>
            <Unit val={t.d} label="Days" />
            <span style={{ color: B.green, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
            <Unit val={t.h} label="Hours" />
            <span style={{ color: B.green, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
            <Unit val={t.m} label="Mins" />
            <span style={{ color: B.green, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
            <Unit val={t.s} label="Secs" />
        </div>
    );
};

/* ─── Feature card — react-icon, unique color ─── */
const FeatureCard = ({ Icon, iconColor, iconBg, iconBorder, title, desc, delay = 0 }) => {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: B.surface2,
                border: `1px solid ${hov ? iconBorder : B.border}`,
                borderRadius: 14, padding: '18px 16px',
                transition: 'border-color .2s, box-shadow .2s',
                animation: `ddFadeUp .5s ease ${delay}ms both`,
                boxShadow: hov ? `0 6px 20px ${iconColor}18` : '0 1px 4px rgba(28,43,58,0.04)',
                cursor: 'default',
            }}
        >
            <div style={{
                width: 40, height: 40, borderRadius: 10, marginBottom: 14,
                background: iconBg, border: `1px solid ${iconBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform .2s', transform: hov ? 'scale(1.08)' : 'scale(1)',
            }}>
                <Icon size={20} style={{ color: iconColor }} />
            </div>
            <p style={{ color: B.navy, fontSize: 13.5, fontWeight: 700, marginBottom: 6 }}>{title}</p>
            <p style={{ color: B.navyGhost, fontSize: 12, lineHeight: 1.65 }}>{desc}</p>
        </div>
    );
};

/* ══════════════════════════════════════════════════════════════
   MAIN
══════════════════════════════════════════════════════════════ */
const UnderConstruction = () => {
    const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    const particles = Array.from({ length: 18 }, () => ({
        left: `${5 + Math.random() * 90}%`,
        top: `${5 + Math.random() * 90}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${3 + Math.random() * 3}s`,
    }));

    const BARS = [
        { label: 'Core Dashboard & Analytics', pct: 92, delay: 0, color: BAR_COLORS[0] },
        { label: 'Orders & Inventory System', pct: 87, delay: 100, color: BAR_COLORS[1] },
        { label: 'Product Management', pct: 78, delay: 200, color: BAR_COLORS[2] },
        { label: 'User & Customer Portal', pct: 65, delay: 300, color: BAR_COLORS[3] },
        { label: 'Reporting & Exports', pct: 54, delay: 400, color: BAR_COLORS[4] },
        { label: 'Performance Optimisation', pct: 40, delay: 500, color: BAR_COLORS[5] },
    ];

    const FEATURES = [
        { Icon: MdOutlineInventory2, iconColor: '#1A7A4A', iconBg: '#E8F4EE', iconBorder: '#A8D5BC', title: 'Smart Inventory', desc: 'Real-time stock tracking with low-stock alerts and automated reorder points.', delay: 0 },
        { Icon: MdOutlineAnalytics, iconColor: '#1E40AF', iconBg: '#EFF6FF', iconBorder: '#BFDBFE', title: 'Deep Analytics', desc: 'Revenue dashboards, conversion funnels, and customer LTV insights.', delay: 80 },
        { Icon: MdOutlineLocalShipping, iconColor: '#7C3AED', iconBg: '#F5F3FF', iconBorder: '#DDD6FE', title: 'Order Tracking', desc: 'End-to-end order lifecycle management with instant status updates.', delay: 160 },
        { Icon: MdOutlinePeople, iconColor: '#B45309', iconBg: '#FEF3C7', iconBorder: '#FCD34D', title: 'Customer Profiles', desc: 'Full customer history, preferences, and loyalty tier management.', delay: 240 },
        { Icon: MdOutlinePriceChange, iconColor: '#0E7490', iconBg: '#ECFEFF', iconBorder: '#A5F3FC', title: 'Dynamic Pricing', desc: 'Size-based multipliers, discount rules, and flash sale scheduling.', delay: 320 },
        { Icon: MdOutlineSecurity, iconColor: '#BE185D', iconBg: '#FDF2F8', iconBorder: '#FBCFE8', title: 'Role-Based Access', desc: 'Fine-grained permissions for admins, managers, and support staff.', delay: 400 },
    ];

    return (
        <div style={{
            minHeight: '100vh', background: B.bg,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '40px 24px', position: 'relative', overflow: 'hidden',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            WebkitFontSmoothing: 'antialiased',
        }}>
            <style>{`
        @keyframes ddFloat  { 0%{opacity:0;transform:translateY(0)} 50%{opacity:.5} 100%{opacity:0;transform:translateY(-60px)} }
        @keyframes ddSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes ddSpinR  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes ddPulse  { 0%,100%{opacity:.1} 50%{opacity:.28} }
        @keyframes ddFadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ddBlink  { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes ddGlow   { 0%,100%{box-shadow:0 0 0 0 rgba(26,122,74,.08),0 2px 8px rgba(28,43,58,.05)} 50%{box-shadow:0 0 0 7px rgba(26,122,74,.06),0 4px 16px rgba(26,122,74,.10)} }
        .uc-g1 { animation: ddSpin  10s linear infinite; transform-box:fill-box; transform-origin:center; }
        .uc-g2 { animation: ddSpinR  7s linear infinite; transform-box:fill-box; transform-origin:center; }
        .uc-g3 { animation: ddSpin   5s linear infinite; transform-box:fill-box; transform-origin:center; }
      `}</style>

            {/* Radial glow */}
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: `radial-gradient(ellipse,rgba(26,122,74,.05) 0%,transparent 70%)`, pointerEvents: 'none', animation: 'ddPulse 5s ease-in-out infinite' }} />

            {/* Decorative grids */}
            <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', top: -40, left: -40, opacity: .05, pointerEvents: 'none' }}>
                {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => <rect key={`${r}${c}`} x={c * 50 + 2} y={r * 50 + 2} width={44} height={44} rx="4" fill="none" stroke={B.green} strokeWidth=".7" />))}
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" style={{ position: 'absolute', bottom: -50, right: -50, opacity: .05, pointerEvents: 'none' }}>
                {[0, 1, 2, 3, 4].map(i => <circle key={i} cx={110} cy={110} r={22 + i * 24} fill="none" stroke={B.green} strokeWidth=".7" />)}
            </svg>

            {particles.map((p, i) => <Particle key={i} style={p} />)}

            <div style={{ maxWidth: 800, width: '100%', animation: 'ddFadeUp .6s ease both' }}>

                {/* ── Brand header ── */}
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                    <div style={{ width: 88, height: 88, borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${B.greenBorder}`, background: B.surface2, animation: 'ddGlow 3s ease-in-out infinite' }}>
                        <LogoMark size={52} />
                    </div>
                    <p style={{ color: B.navyGhost, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: 8 }}>D Dolly Lamb · Admin Panel</p>
                    <h1 style={{ fontSize: 38, fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 14, color: B.navy }}>Under Construction</h1>
                    <p style={{ color: B.navySoft, fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: '0 auto 24px' }}>
                        We're crafting something extraordinary for you. Our admin panel is being refined with precision and care.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 24px', borderRadius: 10, background: B.green, color: '#FFFFFF', textDecoration: 'none', fontSize: 13.5, fontWeight: 600, boxShadow: '0 4px 14px rgba(26,122,74,0.25)', transition: 'all .15s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.greenHover; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = B.green; e.currentTarget.style.transform = 'translateY(0)'; }}>
                            <TbBuildingStore size={15} /> Visit Store
                        </a>
                        <a href="javascript:history.back()" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, background: 'transparent', color: B.navySoft, textDecoration: 'none', fontSize: 13.5, fontWeight: 600, border: `1px solid ${B.border}`, transition: 'all .15s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.borderColor = B.greenBorder; e.currentTarget.style.color = B.green; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.navySoft; }}>
                            ← Go Back
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, marginBottom: 24, background: `linear-gradient(90deg, transparent, ${B.greenBorder}, transparent)` }} />

                {/* ── Gear + Countdown ── */}
                <div style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 20, padding: '26px 28px 22px', marginBottom: 18, position: 'relative', overflow: 'hidden', boxShadow: '0 2px 12px rgba(28,43,58,0.05)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${B.green}, ${B.greenHover}, ${B.green}, transparent)` }} />

                    {/* 3 gears — each a different color */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
                        <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
                            <g className="uc-g1">
                                <circle cx="44" cy="48" r="27" stroke={B.green} strokeWidth="1" fill={B.greenBg} />
                                <circle cx="44" cy="48" r="9" stroke={B.green} strokeWidth="1" fill={B.surface2} />
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => { const r = a * Math.PI / 180; return <line key={i} x1={44 + 23 * Math.cos(r)} y1={48 + 23 * Math.sin(r)} x2={44 + 30 * Math.cos(r)} y2={48 + 30 * Math.sin(r)} stroke={B.green} strokeWidth="4.5" strokeLinecap="round" />; })}
                            </g>
                            <g className="uc-g2">
                                <circle cx="92" cy="34" r="19" stroke="#1E40AF" strokeWidth="1" fill="#EFF6FF" />
                                <circle cx="92" cy="34" r="7" stroke="#1E40AF" strokeWidth="1" fill={B.surface2} />
                                {[0, 60, 120, 180, 240, 300].map((a, i) => { const r = a * Math.PI / 180; return <line key={i} x1={92 + 16 * Math.cos(r)} y1={34 + 16 * Math.sin(r)} x2={92 + 22 * Math.cos(r)} y2={34 + 22 * Math.sin(r)} stroke="#1E40AF" strokeWidth="3.5" strokeLinecap="round" />; })}
                            </g>
                            <g className="uc-g3">
                                <circle cx="116" cy="70" r="13" stroke="#7C3AED" strokeWidth="1" fill="#F5F3FF" />
                                <circle cx="116" cy="70" r="5" stroke="#7C3AED" strokeWidth="1" fill={B.surface2} />
                                {[0, 72, 144, 216, 288].map((a, i) => { const r = a * Math.PI / 180; return <line key={i} x1={116 + 10 * Math.cos(r)} y1={70 + 10 * Math.sin(r)} x2={116 + 15 * Math.cos(r)} y2={70 + 15 * Math.sin(r)} stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />; })}
                            </g>
                            <rect x="26" y="80" width="2" height="11" rx="1" fill={B.green} style={{ animation: 'ddBlink 1s ease-in-out infinite' }} />
                            <rect x="30" y="80" width="13" height="2" rx="1" fill={B.greenBorder} />
                            <rect x="30" y="85" width="9" height="2" rx="1" fill={B.greenBorder} />
                        </svg>
                    </div>

                    <p style={{ color: B.navyGhost, fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.7px', textAlign: 'center', marginBottom: 16 }}>Estimated Launch In</p>
                    <Countdown targetDate={targetDate} />
                </div>

                {/* ── Progress bars — 6 different colors ── */}
                <div style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 20, padding: '22px 28px 8px', marginBottom: 18, boxShadow: '0 2px 8px rgba(28,43,58,0.04)' }}>
                    {/* Header + mini legend */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: B.green, display: 'inline-block', animation: 'ddBlink 1.5s ease-in-out infinite' }} />
                            <p style={{ color: B.navy, fontSize: 13.5, fontWeight: 700 }}>Build Progress</p>
                        </div>
                        {/* Dot legend */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                            {BAR_COLORS.map((c, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.fill, display: 'inline-block' }} />
                                    <span style={{ fontSize: 10, color: B.navyGhost }}>{BARS[i]?.pct}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {BARS.map((b, i) => <ProgressBar key={i} label={b.label} pct={b.pct} delay={b.delay} color={b.color} />)}
                </div>

                {/* ── Feature cards — react-icons, 6 unique accent colors ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 18 }}>
                    {FEATURES.map((f, i) => <FeatureCard key={i} {...f} />)}
                </div>

                {/* ── Bottom bar ── */}
                <div style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 14, padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, boxShadow: '0 1px 4px rgba(28,43,58,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: B.green, display: 'inline-block', animation: 'ddBlink 2s ease-in-out infinite', boxShadow: `0 0 6px ${B.green}60` }} />
                            <span style={{ color: B.green, fontSize: 12, fontWeight: 600 }}>Systems Online</span>
                        </div>
                        <span style={{ color: B.borderMid }}>·</span>
                        <span style={{ color: B.navyGhost, fontSize: 12 }}>© {new Date().getFullYear()} D Dolly Lamb Admin</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: B.green, fontSize: 12.5, fontWeight: 700, textDecoration: 'none', padding: '5px 14px', background: B.greenBg, border: `1px solid ${B.greenBorder}`, borderRadius: 8, transition: 'all .15s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.greenLight; e.currentTarget.style.boxShadow = '0 2px 8px rgba(26,122,74,0.12)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.boxShadow = 'none'; }}>
                            <TbBuildingStore size={13} /> Visit Store
                        </a>
                        <span style={{ color: B.borderMid }}>·</span>
                        <span style={{ color: B.navyGhost, fontSize: 12 }}>Need help?</span>
                        <a href="mailto:info@ddollylamb.com" style={{ color: B.navySoft, fontSize: 12.5, fontWeight: 600, textDecoration: 'none', padding: '5px 12px', border: `1px solid ${B.border}`, borderRadius: 8, transition: 'all .15s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.bgHover; e.currentTarget.style.borderColor = B.borderMid; e.currentTarget.style.color = B.navy; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.navySoft; }}>
                            info@ddollylamb.com
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

// expose for reference inside legend
const BARS = [
    { label: 'Core Dashboard & Analytics', pct: 92, delay: 0, color: BAR_COLORS[0] },
    { label: 'Orders & Inventory System', pct: 87, delay: 100, color: BAR_COLORS[1] },
    { label: 'Product Management', pct: 78, delay: 200, color: BAR_COLORS[2] },
    { label: 'User & Customer Portal', pct: 65, delay: 300, color: BAR_COLORS[3] },
    { label: 'Reporting & Exports', pct: 54, delay: 400, color: BAR_COLORS[4] },
    { label: 'Performance Optimisation', pct: 40, delay: 500, color: BAR_COLORS[5] },
];

export default UnderConstruction;




// import React, { useEffect, useState } from 'react';

// /* ═══════════════════════════════════════════════════════════════
//    D DOLLY LAMB — UNDER CONSTRUCTION  |  Light Professional Theme
//    Colors: Soft Indigo · Violet · Teal · Amber · Coral · Slate
// ═══════════════════════════════════════════════════════════════ */

// const C = {
//     // Backgrounds
//     pageBg: '#f8f9fe',
//     cardBg: '#ffffff',
//     cardBg2: '#f4f6fd',

//     // Borders
//     border: '#e8eaf6',
//     borderMed: '#c7d2fe',

//     // Brand / Primary — Indigo
//     indigo: '#6366f1',
//     indigoDark: '#4f46e5',
//     indigoLight: '#eef2ff',
//     indigoSoft: '#c7d2fe',

//     // Accent — Violet
//     violet: '#8b5cf6',
//     violetLight: '#f5f3ff',
//     violetSoft: '#ddd6fe',

//     // Accent — Teal
//     teal: '#14b8a6',
//     tealLight: '#f0fdfa',
//     tealSoft: '#99f6e4',

//     // Accent — Amber
//     amber: '#f59e0b',
//     amberLight: '#fffbeb',
//     amberSoft: '#fde68a',

//     // Accent — Coral/Orange
//     coral: '#f97316',
//     coralLight: '#fff7ed',
//     coralSoft: '#fed7aa',

//     // Accent — Cyan
//     cyan: '#06b6d4',
//     cyanLight: '#ecfeff',
//     cyanSoft: '#a5f3fc',

//     // Text
//     textPrimary: '#1e293b',
//     textSec: '#475569',
//     textMuted: '#94a3b8',
//     textHint: '#cbd5e1',

//     // Status
//     green: '#22c55e',
//     greenLight: '#f0fdf4',
// };

// /* ─── Keyframe injection ─── */
// const GlobalStyles = () => (
//     <style>{`
//     @keyframes ddFloat {
//       0%   { opacity: 0; transform: translateY(0); }
//       50%  { opacity: 0.5; }
//       100% { opacity: 0; transform: translateY(-55px); }
//     }
//     @keyframes ddSpin {
//       from { transform: rotate(0deg); }
//       to   { transform: rotate(360deg); }
//     }
//     @keyframes ddPulse {
//       0%, 100% { opacity: 0.18; }
//       50%       { opacity: 0.42; }
//     }
//     @keyframes ddFadeUp {
//       from { opacity: 0; transform: translateY(16px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes ddBlink {
//       0%, 100% { opacity: 1; }
//       50%       { opacity: 0.2; }
//     }
//     @keyframes ddGlow {
//       0%, 100% { box-shadow: 0 0 0 6px rgba(165,180,252,0.14), 0 8px 28px rgba(99,102,241,0.10); }
//       50%       { box-shadow: 0 0 0 8px rgba(165,180,252,0.22), 0 10px 36px rgba(99,102,241,0.18); }
//     }
//     .uc-gear     { animation: ddSpin 9s linear infinite; transform-origin: center; transform-box: fill-box; }
//     .uc-gear-rev { animation: ddSpin 6s linear infinite reverse; transform-origin: center; transform-box: fill-box; }
//     .uc-card-hover:hover {
//       border-color: #c7d2fe !important;
//       box-shadow: 0 6px 24px rgba(99,102,241,0.10) !important;
//       transform: translateY(-2px);
//     }
//     .uc-card-hover { transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
//     .uc-btn-primary:hover  { background: #4f46e5 !important; transform: translateY(-1px); }
//     .uc-btn-primary        { transition: background 0.15s, transform 0.15s; }
//     .uc-btn-secondary:hover { border-color: #c7d2fe !important; color: #6366f1 !important; }
//     .uc-btn-secondary       { transition: border-color 0.15s, color 0.15s, background 0.15s; }
//     .uc-link-store:hover { background: #e0e7ff !important; }
//     .uc-link-store       { transition: background 0.15s; }
//     .uc-link-mail:hover  { background: #f8fafc !important; color: #6366f1 !important; }
//     .uc-link-mail        { transition: background 0.15s, color 0.15s; }
//   `}</style>
// );

// /* ─── Floating particle ─── */
// const Particle = ({ style }) => (
//     <div style={{
//         position: 'absolute',
//         borderRadius: '50%',
//         opacity: 0,
//         animation: 'ddFloat 4s ease-in-out infinite',
//         pointerEvents: 'none',
//         ...style,
//     }} />
// );

// /* ─── Logo diamond ─── */
// const DiamondLogo = () => (
//     <div style={{
//         width: 90, height: 90, borderRadius: '50%',
//         margin: '0 auto 18px',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         background: `linear-gradient(135deg, ${C.indigoLight}, #fff)`,
//         border: `2px solid ${C.indigoSoft}`,
//         animation: 'ddGlow 3s ease-in-out infinite',
//     }}>
//         <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
//             <polygon
//                 points="30,4 56,30 30,56 4,30"
//                 fill="none" stroke="#818cf8" strokeWidth="1.5"
//                 style={{ animation: 'ddSpin 12s linear infinite', transformOrigin: '30px 30px', transformBox: 'fill-box' }}
//             />
//             <polygon
//                 points="30,13 47,30 30,47 13,30"
//                 fill="rgba(129,140,248,0.12)" stroke="#a5b4fc" strokeWidth="1"
//             />
//             <text
//                 x="30" y="36" textAnchor="middle"
//                 fontSize="17" fontWeight="900" fill="#6366f1"
//                 fontFamily="system-ui, sans-serif"
//             >D</text>
//         </svg>
//     </div>
// );

// /* ─── Countdown unit box ─── */
// const CountUnit = ({ val, label, bg, border, numColor }) => (
//     <div style={{ textAlign: 'center', minWidth: 62 }}>
//         <div style={{
//             background: bg,
//             border: `1.5px solid ${border}`,
//             borderRadius: 12,
//             padding: '10px 14px',
//             marginBottom: 6,
//             position: 'relative',
//             overflow: 'hidden',
//         }}>
//             <span style={{
//                 color: numColor,
//                 fontSize: 27, fontWeight: 800,
//                 letterSpacing: -1, lineHeight: 1,
//                 display: 'block',
//                 fontVariantNumeric: 'tabular-nums',
//             }}>
//                 {String(val).padStart(2, '0')}
//             </span>
//         </div>
//         <span style={{
//             color: C.textMuted, fontSize: 10, fontWeight: 700,
//             textTransform: 'uppercase', letterSpacing: '.7px',
//         }}>{label}</span>
//     </div>
// );

// /* ─── Countdown ─── */
// const Countdown = ({ targetDate }) => {
//     const calc = () => {
//         const diff = Math.max(0, new Date(targetDate) - Date.now());
//         return {
//             d: Math.floor(diff / 86400000),
//             h: Math.floor((diff % 86400000) / 3600000),
//             m: Math.floor((diff % 3600000) / 60000),
//             s: Math.floor((diff % 60000) / 1000),
//         };
//     };
//     const [t, setT] = useState(calc);
//     useEffect(() => {
//         const id = setInterval(() => setT(calc()), 1000);
//         return () => clearInterval(id);
//     }, []);

//     const units = [
//         { key: 'd', label: 'Days', bg: C.indigoLight, border: C.indigoSoft, numColor: C.indigo },
//         { key: 'h', label: 'Hours', bg: C.greenLight, border: '#bbf7d0', numColor: '#16a34a' },
//         { key: 'm', label: 'Mins', bg: C.amberLight, border: C.amberSoft, numColor: '#d97706' },
//         { key: 's', label: 'Secs', bg: C.tealLight, border: C.tealSoft, numColor: C.teal },
//     ];

//     return (
//         <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
//             {units.map((u, i) => (
//                 <React.Fragment key={u.key}>
//                     {i > 0 && (
//                         <span style={{ color: C.textHint, fontSize: 22, fontWeight: 300, marginTop: 10 }}>:</span>
//                     )}
//                     <CountUnit val={t[u.key]} label={u.label} bg={u.bg} border={u.border} numColor={u.numColor} />
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// };

// /* ─── Progress bar ─── */
// const ProgressBar = ({ label, pct, color, delay = 0 }) => {
//     const [width, setWidth] = useState(0);
//     useEffect(() => {
//         const t = setTimeout(() => setWidth(pct), 500 + delay);
//         return () => clearTimeout(t);
//     }, [pct, delay]);

//     return (
//         <div style={{ marginBottom: 14 }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
//                 <span style={{ color: C.textSec, fontSize: 12.5, fontWeight: 600 }}>{label}</span>
//                 <span style={{ color: color, fontSize: 12, fontWeight: 700 }}>{pct}%</span>
//             </div>
//             <div style={{
//                 height: 7, borderRadius: 8,
//                 background: '#f1f5f9',
//                 overflow: 'hidden',
//             }}>
//                 <div style={{
//                     height: '100%', borderRadius: 8,
//                     background: color,
//                     width: `${width}%`,
//                     transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}ms`,
//                 }} />
//             </div>
//         </div>
//     );
// };

// /* ─── Feature card ─── */
// const FeatureCard = ({ icon, title, desc, bg, iconBorder, delay = 0 }) => (
//     <div
//         className="uc-card-hover"
//         style={{
//             background: C.cardBg,
//             border: `1.5px solid ${C.border}`,
//             borderRadius: 14,
//             padding: '15px 16px',
//             animation: `ddFadeUp .5s ease ${delay}ms both`,
//         }}
//     >
//         <div style={{
//             width: 36, height: 36, borderRadius: 10, marginBottom: 11,
//             background: bg,
//             border: `1px solid ${iconBorder}`,
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             fontSize: 16,
//         }}>{icon}</div>
//         <p style={{ color: C.textPrimary, fontSize: 13.5, fontWeight: 700, marginBottom: 4 }}>{title}</p>
//         <p style={{ color: C.textMuted, fontSize: 12, lineHeight: 1.65 }}>{desc}</p>
//     </div>
// );

// /* ═══════════════════════════════════════
//    MAIN PAGE
// ═══════════════════════════════════════ */
// const UnderConstruction = () => {
//     const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

//     const particles = [
//         { width: 8, height: 8, background: C.amberSoft, top: '18%', left: '7%', animationDelay: '0s', animationDuration: '4s' },
//         { width: 6, height: 6, background: C.indigoSoft, top: '28%', left: '93%', animationDelay: '0.8s', animationDuration: '5s' },
//         { width: 8, height: 8, background: C.tealSoft, top: '74%', left: '18%', animationDelay: '1.6s', animationDuration: '3.5s' },
//         { width: 6, height: 6, background: C.coralSoft, top: '58%', left: '87%', animationDelay: '2.3s', animationDuration: '4.5s' },
//         { width: 5, height: 5, background: C.violetSoft, top: '42%', left: '3%', animationDelay: '1.1s', animationDuration: '3.8s' },
//         { width: 7, height: 7, background: C.cyanSoft, top: '85%', left: '65%', animationDelay: '0.4s', animationDuration: '4.2s' },
//     ];

//     const progressBars = [
//         { label: 'Core Dashboard & Analytics', pct: 92, color: C.indigo, delay: 0 },
//         { label: 'Orders & Inventory System', pct: 87, color: C.teal, delay: 100 },
//         { label: 'Product Management', pct: 78, color: C.violet, delay: 200 },
//         { label: 'User & Customer Portal', pct: 65, color: C.amber, delay: 300 },
//         { label: 'Reporting & Exports', pct: 54, color: C.cyan, delay: 400 },
//         { label: 'Performance Optimisation', pct: 40, color: C.coral, delay: 500 },
//     ];

//     const features = [
//         { icon: '📦', title: 'Smart Inventory', desc: 'Real-time stock tracking with low-stock alerts and automated reorder points.', bg: C.indigoLight, iconBorder: C.indigoSoft, delay: 0 },
//         { icon: '📊', title: 'Deep Analytics', desc: 'Revenue dashboards, conversion funnels, and customer LTV insights.', bg: C.greenLight, iconBorder: '#bbf7d0', delay: 80 },
//         { icon: '🚚', title: 'Order Tracking', desc: 'End-to-end order lifecycle management with instant status updates.', bg: C.amberLight, iconBorder: C.amberSoft, delay: 160 },
//         { icon: '👥', title: 'Customer Profiles', desc: 'Full customer history, preferences, and loyalty tier management.', bg: C.tealLight, iconBorder: C.tealSoft, delay: 240 },
//         { icon: '🏷️', title: 'Dynamic Pricing', desc: 'Size-based multipliers, discount rules, and flash sale scheduling.', bg: C.violetLight, iconBorder: C.violetSoft, delay: 320 },
//         { icon: '🔒', title: 'Role-Based Access', desc: 'Fine-grained permissions for admins, managers, and support staff.', bg: C.coralLight, iconBorder: C.coralSoft, delay: 400 },
//     ];

//     return (
//         <div style={{
//             minHeight: '100vh',
//             background: C.pageBg,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '40px 20px',
//             position: 'relative',
//             overflow: 'hidden',
//             fontFamily: 'system-ui, -apple-system, sans-serif',
//             WebkitFontSmoothing: 'antialiased',
//         }}>
//             <GlobalStyles />

//             {/* ── Soft bg blobs ── */}
//             <div style={{
//                 position: 'absolute', top: -100, left: -80,
//                 width: 420, height: 420, borderRadius: '50%',
//                 background: 'radial-gradient(circle, rgba(165,180,252,0.22), transparent 70%)',
//                 pointerEvents: 'none',
//                 animation: 'ddPulse 6s ease-in-out infinite',
//             }} />
//             <div style={{
//                 position: 'absolute', bottom: -80, right: -60,
//                 width: 380, height: 380, borderRadius: '50%',
//                 background: 'radial-gradient(circle, rgba(167,243,208,0.2), transparent 70%)',
//                 pointerEvents: 'none',
//                 animation: 'ddPulse 5s ease-in-out 1.5s infinite',
//             }} />
//             <div style={{
//                 position: 'absolute', top: '45%', right: -40,
//                 width: 260, height: 260, borderRadius: '50%',
//                 background: 'radial-gradient(circle, rgba(253,230,138,0.18), transparent 70%)',
//                 pointerEvents: 'none',
//             }} />

//             {/* ── Dot grid top-right ── */}
//             <svg width="160" height="160" viewBox="0 0 160 160" style={{ position: 'absolute', top: 0, right: 0, opacity: 0.18, pointerEvents: 'none' }}>
//                 <defs>
//                     <pattern id="dp1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
//                         <circle cx="2" cy="2" r="1.4" fill="#818cf8" />
//                     </pattern>
//                 </defs>
//                 <rect width="160" height="160" fill="url(#dp1)" />
//             </svg>

//             {/* ── Dot grid bottom-left ── */}
//             <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.15, pointerEvents: 'none' }}>
//                 <defs>
//                     <pattern id="dp2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
//                         <circle cx="2" cy="2" r="1.4" fill="#6ee7b7" />
//                     </pattern>
//                 </defs>
//                 <rect width="120" height="120" fill="url(#dp2)" />
//             </svg>

//             {/* ── Floating particles ── */}
//             {particles.map((p, i) => <Particle key={i} style={p} />)}

//             {/* ════════ MAIN CONTENT ════════ */}
//             <div style={{
//                 maxWidth: 760, width: '100%',
//                 animation: 'ddFadeUp .6s ease both',
//             }}>

//                 {/* ── HEADER ── */}
//                 <div style={{ textAlign: 'center', marginBottom: 32 }}>
//                     <DiamondLogo />

//                     {/* Badge */}
//                     <div style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 6,
//                         background: C.indigoLight,
//                         border: `1px solid ${C.indigoSoft}`,
//                         borderRadius: 20, padding: '5px 16px', marginBottom: 14,
//                     }}>
//                         <span style={{
//                             width: 6, height: 6, borderRadius: '50%',
//                             background: '#818cf8',
//                             animation: 'ddBlink 2s ease-in-out infinite',
//                             display: 'inline-block',
//                         }} />
//                         <span style={{
//                             color: C.indigoDark, fontSize: 11, fontWeight: 700,
//                             letterSpacing: '1.5px', textTransform: 'uppercase',
//                         }}>
//                             D Dolly Lamb · Admin Panel
//                         </span>
//                     </div>

//                     <h1 style={{
//                         fontSize: 38, fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1,
//                         marginBottom: 14,
//                         background: `linear-gradient(135deg, ${C.indigo} 0%, ${C.violet} 50%, ${C.teal} 100%)`,
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                     }}>
//                         Under Construction
//                     </h1>

//                     <p style={{
//                         color: C.textMuted, fontSize: 14.5, lineHeight: 1.8,
//                         maxWidth: 420, margin: '0 auto 26px',
//                     }}>
//                         We're crafting something extraordinary for you.
//                         Our admin panel is being refined with precision and care — launching very soon.
//                     </p>

//                     {/* CTAs */}
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
//                         <a
//                             href="/"
//                             className="uc-btn-primary"
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                 padding: '12px 26px', borderRadius: 12,
//                                 background: C.indigo,
//                                 color: '#fff', textDecoration: 'none',
//                                 fontSize: 13.5, fontWeight: 700,
//                                 boxShadow: '0 4px 18px rgba(99,102,241,0.30)',
//                                 letterSpacing: '.2px',
//                             }}
//                         >
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//                                 <polyline points="9 22 9 12 15 12 15 22" />
//                             </svg>
//                             Visit Store
//                         </a>

//                         <a
//                             href="javascript:history.back()"
//                             className="uc-btn-secondary"
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 8,
//                                 padding: '11px 22px', borderRadius: 12,
//                                 background: '#fff',
//                                 color: C.textSec, textDecoration: 'none',
//                                 fontSize: 13.5, fontWeight: 600,
//                                 border: `1.5px solid ${C.border}`,
//                             }}
//                         >
//                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                 <line x1="19" y1="12" x2="5" y2="12" />
//                                 <polyline points="12 19 5 12 12 5" />
//                             </svg>
//                             Go Back
//                         </a>
//                     </div>
//                 </div>

//                 {/* ── Decorative divider ── */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
//                     <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #e2e8f0)' }} />
//                     <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.indigoSoft, display: 'inline-block' }} />
//                     <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.amberSoft, display: 'inline-block' }} />
//                     <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.tealSoft, display: 'inline-block' }} />
//                     <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #e2e8f0, transparent)' }} />
//                 </div>

//                 {/* ── GEAR + COUNTDOWN ── */}
//                 <div style={{
//                     background: C.cardBg,
//                     border: `1.5px solid ${C.border}`,
//                     borderRadius: 20,
//                     padding: '26px 24px 22px',
//                     marginBottom: 16,
//                     position: 'relative', overflow: 'hidden',
//                     boxShadow: '0 2px 16px rgba(99,102,241,0.06)',
//                 }}>
//                     {/* Top accent stripe */}
//                     <div style={{
//                         position: 'absolute', top: 0, left: 0, right: 0, height: 3,
//                         background: `linear-gradient(90deg, ${C.indigoSoft}, ${C.violetSoft}, ${C.tealSoft})`,
//                         borderRadius: '20px 20px 0 0',
//                     }} />

//                     {/* Gears SVG */}
//                     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
//                         <svg width="150" height="94" viewBox="0 0 150 94" fill="none">
//                             {/* Gear 1 – indigo, large */}
//                             <g className="uc-gear">
//                                 <circle cx="44" cy="47" r="27" stroke="#a5b4fc" strokeWidth="1.5" fill="#eef2ff" />
//                                 <circle cx="44" cy="47" r="8" stroke="#a5b4fc" strokeWidth="1.2" fill="#fff" />
//                                 {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
//                                     const rad = (a * Math.PI) / 180;
//                                     return (
//                                         <line key={i}
//                                             x1={44 + 23 * Math.cos(rad)} y1={47 + 23 * Math.sin(rad)}
//                                             x2={44 + 31 * Math.cos(rad)} y2={47 + 31 * Math.sin(rad)}
//                                             stroke="#a5b4fc" strokeWidth="4.5" strokeLinecap="round"
//                                         />
//                                     );
//                                 })}
//                             </g>

//                             {/* Gear 2 – teal, medium */}
//                             <g className="uc-gear-rev">
//                                 <circle cx="92" cy="33" r="19" stroke="#6ee7b7" strokeWidth="1.5" fill="#f0fdf4" />
//                                 <circle cx="92" cy="33" r="6" stroke="#6ee7b7" strokeWidth="1.2" fill="#fff" />
//                                 {[0, 60, 120, 180, 240, 300].map((a, i) => {
//                                     const rad = (a * Math.PI) / 180;
//                                     return (
//                                         <line key={i}
//                                             x1={92 + 16 * Math.cos(rad)} y1={33 + 16 * Math.sin(rad)}
//                                             x2={92 + 23 * Math.cos(rad)} y2={33 + 23 * Math.sin(rad)}
//                                             stroke="#6ee7b7" strokeWidth="3.5" strokeLinecap="round"
//                                         />
//                                     );
//                                 })}
//                             </g>

//                             {/* Gear 3 – amber, small */}
//                             <g className="uc-gear">
//                                 <circle cx="118" cy="69" r="13" stroke="#fde68a" strokeWidth="1.5" fill="#fffdf0" />
//                                 <circle cx="118" cy="69" r="4" stroke="#fde68a" strokeWidth="1.2" fill="#fff" />
//                                 {[0, 72, 144, 216, 288].map((a, i) => {
//                                     const rad = (a * Math.PI) / 180;
//                                     return (
//                                         <line key={i}
//                                             x1={118 + 10 * Math.cos(rad)} y1={69 + 10 * Math.sin(rad)}
//                                             x2={118 + 16 * Math.cos(rad)} y2={69 + 16 * Math.sin(rad)}
//                                             stroke="#fde68a" strokeWidth="3" strokeLinecap="round"
//                                         />
//                                     );
//                                 })}
//                             </g>

//                             {/* Blinking cursor */}
//                             <rect x="20" y="80" width="2" height="10" rx="1"
//                                 fill={C.amber} style={{ animation: 'ddBlink 1s ease-in-out infinite' }} />
//                             <rect x="25" y="80" width="14" height="2" rx="1" fill={C.border} />
//                             <rect x="25" y="85" width="10" height="2" rx="1" fill={C.border} />
//                         </svg>
//                     </div>

//                     <p style={{
//                         color: C.textHint, fontSize: 11, fontWeight: 700,
//                         textTransform: 'uppercase', letterSpacing: '1px',
//                         textAlign: 'center', marginBottom: 16,
//                     }}>
//                         Estimated Launch In
//                     </p>
//                     <Countdown targetDate={targetDate} />
//                 </div>

//                 {/* ── PROGRESS ── */}
//                 <div style={{
//                     background: C.cardBg,
//                     border: `1.5px solid ${C.border}`,
//                     borderRadius: 20, padding: '22px 24px', marginBottom: 16,
//                     boxShadow: '0 2px 12px rgba(99,102,241,0.05)',
//                 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
//                         <div style={{
//                             width: 7, height: 7, borderRadius: '50%',
//                             background: '#818cf8',
//                             animation: 'ddBlink 1.5s ease-in-out infinite',
//                         }} />
//                         <p style={{ color: C.textPrimary, fontSize: 14, fontWeight: 700 }}>Build Progress</p>
//                         <span style={{
//                             marginLeft: 'auto',
//                             background: C.indigoLight, color: C.indigoDark,
//                             fontSize: 11, fontWeight: 700,
//                             padding: '3px 12px', borderRadius: 20,
//                             border: `1px solid ${C.indigoSoft}`,
//                         }}>
//                             In Development
//                         </span>
//                     </div>

//                     {progressBars.map(({ label, pct, color, delay }) => (
//                         <ProgressBar key={label} label={label} pct={pct} color={color} delay={delay} />
//                     ))}
//                 </div>

//                 {/* ── FEATURE CARDS ── */}
//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
//                     gap: 12, marginBottom: 16,
//                 }}>
//                     {features.map(f => (
//                         <FeatureCard key={f.title} {...f} />
//                     ))}
//                 </div>

//                 {/* ── BOTTOM BAR ── */}
//                 <div style={{
//                     background: C.cardBg,
//                     border: `1.5px solid ${C.border}`,
//                     borderRadius: 16, padding: '15px 22px',
//                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                     flexWrap: 'wrap', gap: 12,
//                     boxShadow: '0 2px 10px rgba(99,102,241,0.05)',
//                 }}>
//                     {/* Left: status */}
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                             <span style={{
//                                 width: 7, height: 7, borderRadius: '50%',
//                                 background: '#4ade80', display: 'inline-block',
//                                 animation: 'ddBlink 2s ease-in-out infinite',
//                                 boxShadow: '0 0 7px rgba(74,222,128,0.45)',
//                             }} />
//                             <span style={{ color: '#16a34a', fontSize: 12, fontWeight: 600 }}>Systems Online</span>
//                         </div>
//                         <span style={{ color: C.textHint }}>·</span>
//                         <span style={{ color: C.textMuted, fontSize: 12 }}>
//                             © {new Date().getFullYear()} D Dolly Lamb Admin
//                         </span>
//                     </div>

//                     {/* Right: links */}
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
//                         <a
//                             href="/"
//                             className="uc-link-store"
//                             style={{
//                                 display: 'inline-flex', alignItems: 'center', gap: 6,
//                                 color: C.indigo, fontSize: 12.5, fontWeight: 700,
//                                 textDecoration: 'none', padding: '5px 14px',
//                                 background: C.indigoLight,
//                                 border: `1px solid ${C.indigoSoft}`, borderRadius: 8,
//                             }}
//                         >
//                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//                                 <polyline points="9 22 9 12 15 12 15 22" />
//                             </svg>
//                             Visit Store
//                         </a>

//                         <span style={{ color: C.textHint }}>·</span>
//                         <span style={{ color: C.textMuted, fontSize: 12 }}>Need help?</span>

//                         <a
//                             href="mailto:info@ddollylamb.com"
//                             className="uc-link-mail"
//                             style={{
//                                 color: C.textSec, fontSize: 12.5, fontWeight: 600,
//                                 textDecoration: 'none', padding: '5px 12px',
//                                 border: `1px solid ${C.border}`, borderRadius: 8,
//                             }}
//                         >
//                             info@ddollylamb.com
//                         </a>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default UnderConstruction;