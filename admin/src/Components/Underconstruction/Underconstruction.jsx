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
//                     <p style={{ color: B.muted, fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: '0 auto' }}>
//                         We're crafting something extraordinary for you.
//                         Our admin panel is being refined with precision and care.
//                     </p>
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

//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                         <span style={{ color: B.muted, fontSize: 12 }}>Need help?</span>
//                         <a href="mailto:admin@ddollylamb.com" style={{
//                             color: B.gold, fontSize: 12.5, fontWeight: 600,
//                             textDecoration: 'none', padding: '5px 12px',
//                             border: `1px solid ${B.border}`, borderRadius: 8,
//                             transition: 'all .15s',
//                         }}
//                             onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
//                         >
//                             admin@ddollylamb.com
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UnderConstruction;



import React, { useEffect, useState, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════
   D DOLLY LAMB — UNDER CONSTRUCTION  |  Dark luxury gold theme
═══════════════════════════════════════════════════════════════ */

const B = {
    bg: '#0d0804',
    surface: '#1a0f07',
    surface2: '#221408',
    border: 'rgba(201,168,76,0.18)',
    borderSoft: 'rgba(201,168,76,0.09)',
    gold: '#c9a84c',
    goldLight: '#e8c46a',
    goldDim: 'rgba(201,168,76,0.10)',
    cream: '#f0d898',
    creamSoft: '#d4b87a',
    muted: '#8b7555',
    mutedSoft: '#5a4530',
};

/* ── Animated gold particle ── */
const Particle = ({ style }) => (
    <div style={{
        position: 'absolute',
        width: 2, height: 2,
        borderRadius: '50%',
        background: B.gold,
        opacity: 0,
        animation: 'ddFloat 4s ease-in-out infinite',
        ...style,
    }} />
);

/* ── Diamond icon (brand logo) ── */
const DiamondIcon = ({ size = 60 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <polygon
            points="30,4 56,30 30,56 4,30"
            fill="none"
            stroke={B.gold}
            strokeWidth="1.5"
            style={{ animation: 'ddSpin 12s linear infinite' }}
        />
        <polygon
            points="30,12 48,30 30,48 12,30"
            fill={B.goldDim}
            stroke={B.gold}
            strokeWidth="1"
            opacity="0.7"
        />
        <text
            x="30" y="35"
            textAnchor="middle"
            fontSize="16"
            fontWeight="800"
            fill={B.gold}
            fontFamily="system-ui, sans-serif"
        >D</text>
    </svg>
);

/* ── Progress bar ── */
const ProgressBar = ({ label, pct, delay = 0 }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const t = setTimeout(() => setWidth(pct), 400 + delay);
        return () => clearTimeout(t);
    }, [pct, delay]);
    return (
        <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ color: B.creamSoft, fontSize: 12.5, fontWeight: 600 }}>{label}</span>
                <span style={{ color: B.gold, fontSize: 12, fontWeight: 700 }}>{pct}%</span>
            </div>
            <div style={{
                height: 4, borderRadius: 4,
                background: B.surface2,
                border: `1px solid ${B.borderSoft}`,
                overflow: 'hidden',
            }}>
                <div style={{
                    height: '100%', borderRadius: 4,
                    background: `linear-gradient(90deg, ${B.gold}, ${B.goldLight})`,
                    width: `${width}%`,
                    transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}ms`,
                    boxShadow: `0 0 8px ${B.gold}50`,
                }} />
            </div>
        </div>
    );
};

/* ── Countdown timer ── */
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
    useEffect(() => {
        const id = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(id);
    }, []);

    const Unit = ({ val, label }) => (
        <div style={{ textAlign: 'center', minWidth: 64 }}>
            <div style={{
                background: B.surface2,
                border: `1px solid ${B.border}`,
                borderRadius: 12,
                padding: '12px 14px',
                marginBottom: 6,
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, transparent, ${B.gold}40, transparent)`,
                }} />
                <span style={{
                    color: B.cream, fontSize: 28, fontWeight: 800,
                    letterSpacing: -1, lineHeight: 1,
                    display: 'block', fontVariantNumeric: 'tabular-nums',
                }}>
                    {String(val).padStart(2, '0')}
                </span>
            </div>
            <span style={{
                color: B.muted, fontSize: 10.5, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '.7px'
            }}>{label}</span>
        </div>
    );

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, justifyContent: 'center' }}>
            <Unit val={t.d} label="Days" />
            <span style={{ color: B.gold, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
            <Unit val={t.h} label="Hours" />
            <span style={{ color: B.gold, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
            <Unit val={t.m} label="Mins" />
            <span style={{ color: B.gold, fontSize: 24, fontWeight: 300, marginTop: 10 }}>:</span>
            <Unit val={t.s} label="Secs" />
        </div>
    );
};

/* ── Feature card ── */
const FeatureCard = ({ icon, title, desc, delay = 0 }) => (
    <div style={{
        background: B.surface,
        border: `1px solid ${B.borderSoft}`,
        borderRadius: 14,
        padding: '16px 18px',
        transition: 'border-color .2s, box-shadow .2s',
        animation: `ddFadeUp .5s ease ${delay}ms both`,
    }}
        onMouseEnter={e => {
            e.currentTarget.style.borderColor = B.border;
            e.currentTarget.style.boxShadow = `0 6px 24px rgba(0,0,0,.4)`;
        }}
        onMouseLeave={e => {
            e.currentTarget.style.borderColor = B.borderSoft;
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        <div style={{
            width: 36, height: 36, borderRadius: 10, marginBottom: 12,
            background: B.goldDim, border: `1px solid ${B.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16,
        }}>{icon}</div>
        <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, marginBottom: 5 }}>{title}</p>
        <p style={{ color: B.muted, fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
    </div>
);

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════ */
const UnderConstruction = () => {
    // Target: 30 days from now (adjust as needed)
    const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    const particles = Array.from({ length: 20 }, (_, i) => ({
        left: `${5 + Math.random() * 90}%`,
        top: `${5 + Math.random() * 90}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${3 + Math.random() * 3}s`,
    }));

    return (
        <div style={{
            minHeight: '100vh',
            background: B.bg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            WebkitFontSmoothing: 'antialiased',
        }}>

            {/* ── Keyframes ── */}
            <style>{`
        @keyframes ddFloat {
          0%   { opacity:0; transform:translateY(0); }
          50%  { opacity:0.6; }
          100% { opacity:0; transform:translateY(-60px); }
        }
        @keyframes ddSpin   { from{transform:rotate(0deg)}  to{transform:rotate(360deg)} }
        @keyframes ddPulse  { 0%,100%{opacity:0.15} 50%{opacity:0.4} }
        @keyframes ddFadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ddBlink  { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes ddGlow   { 0%,100%{box-shadow:0 0 20px rgba(201,168,76,0.2)} 50%{box-shadow:0 0 40px rgba(201,168,76,0.45)} }
        .uc-gear { animation: ddSpin 8s linear infinite; transform-origin: center; }
        .uc-gear-rev { animation: ddSpin 6s linear infinite reverse; transform-origin: center; }
      `}</style>

            {/* ── Background radial glow ── */}
            <div style={{
                position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
                width: 600, height: 400,
                background: `radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)`,
                pointerEvents: 'none',
                animation: 'ddPulse 4s ease-in-out infinite',
            }} />

            {/* ── Decorative top-left pattern ── */}
            <svg width="200" height="200" viewBox="0 0 200 200" style={{
                position: 'absolute', top: -40, left: -40, opacity: 0.08, pointerEvents: 'none',
            }}>
                {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => (
                    <rect key={`${r}${c}`}
                        x={c * 50 + 2} y={r * 50 + 2} width={44} height={44}
                        rx="4" fill="none" stroke={B.gold} strokeWidth="0.5"
                    />
                )))}
            </svg>

            {/* ── Decorative bottom-right pattern ── */}
            <svg width="200" height="200" viewBox="0 0 200 200" style={{
                position: 'absolute', bottom: -40, right: -40, opacity: 0.08, pointerEvents: 'none',
            }}>
                {[0, 1, 2, 3, 4].map(i => (
                    <circle key={i} cx={100} cy={100} r={20 + i * 22}
                        fill="none" stroke={B.gold} strokeWidth="0.5" />
                ))}
            </svg>

            {/* ── Floating particles ── */}
            {particles.map((p, i) => <Particle key={i} style={p} />)}

            {/* ════════ MAIN CARD ════════ */}
            <div style={{
                maxWidth: 780, width: '100%',
                animation: 'ddFadeUp .6s ease both',
            }}>

                {/* ── Brand header ── */}
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                    {/* Logo ring */}
                    <div style={{
                        width: 88, height: 88, borderRadius: '50%',
                        margin: '0 auto 20px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `1px solid ${B.border}`,
                        background: B.surface,
                        animation: 'ddGlow 3s ease-in-out infinite',
                    }}>
                        <DiamondIcon size={52} />
                    </div>

                    {/* Brand name */}
                    <p style={{
                        color: B.muted, fontSize: 11, fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '3px', marginBottom: 8
                    }}>
                        D Dolly Lamb · Admin Panel
                    </p>
                    <h1 style={{
                        fontSize: 38, fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1,
                        marginBottom: 14,
                        background: `linear-gradient(135deg, ${B.cream} 0%, ${B.gold} 50%, ${B.goldLight} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Under Construction
                    </h1>
                    <p style={{ color: B.muted, fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: '0 auto 24px' }}>
                        We're crafting something extraordinary for you.
                        Our admin panel is being refined with precision and care.
                    </p>

                    {/* ── CTA Buttons ── */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        {/* Primary — Visit Store */}
                        <a
                            href="/"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                padding: '11px 24px', borderRadius: 12,
                                background: `linear-gradient(135deg, ${B.gold}, ${B.goldLight})`,
                                color: B.bg, textDecoration: 'none',
                                fontSize: 13.5, fontWeight: 700,
                                boxShadow: `0 4px 20px rgba(201,168,76,0.35)`,
                                transition: 'opacity .15s, transform .15s',
                                letterSpacing: '.2px',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            {/* Arrow icon */}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Visit Store
                        </a>

                        {/* Secondary — Go Back */}
                        <a
                            href="javascript:history.back()"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                padding: '10px 20px', borderRadius: 12,
                                background: 'transparent',
                                color: B.creamSoft, textDecoration: 'none',
                                fontSize: 13.5, fontWeight: 600,
                                border: `1px solid ${B.border}`,
                                transition: 'all .15s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.borderColor = B.gold; e.currentTarget.style.color = B.cream; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.creamSoft; }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                            </svg>
                            Go Back
                        </a>
                    </div>
                </div>

                {/* ── Gold divider ── */}
                <div style={{
                    height: 1, marginBottom: 36,
                    background: `linear-gradient(90deg, transparent, ${B.gold}50, transparent)`,
                }} />

                {/* ── Gear illustration + countdown ── */}
                <div style={{
                    background: B.surface,
                    border: `1px solid ${B.border}`,
                    borderRadius: 20,
                    padding: '28px 28px 24px',
                    marginBottom: 24,
                    position: 'relative', overflow: 'hidden',
                }}>
                    {/* Top accent line */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                        background: `linear-gradient(90deg, transparent, ${B.gold}, ${B.goldLight}, ${B.gold}, transparent)`,
                    }} />

                    {/* Gear SVG illustration */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                        <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
                            {/* Gear 1 — large */}
                            <g className="uc-gear" style={{ transformBox: 'fill-box' }}>
                                <circle cx="42" cy="45" r="26" stroke={B.gold} strokeWidth="1" fill={B.surface2} />
                                <circle cx="42" cy="45" r="8" stroke={B.gold} strokeWidth="1" fill={B.surface} />
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
                                    const rad = (a * Math.PI) / 180;
                                    const x1 = 42 + 22 * Math.cos(rad);
                                    const y1 = 45 + 22 * Math.sin(rad);
                                    const x2 = 42 + 29 * Math.cos(rad);
                                    const y2 = 45 + 29 * Math.sin(rad);
                                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                                        stroke={B.gold} strokeWidth="4" strokeLinecap="round" />;
                                })}
                            </g>

                            {/* Gear 2 — medium */}
                            <g className="uc-gear-rev" style={{ transformBox: 'fill-box' }}>
                                <circle cx="88" cy="32" r="18" stroke={B.goldLight} strokeWidth="1" fill={B.surface2} />
                                <circle cx="88" cy="32" r="6" stroke={B.goldLight} strokeWidth="1" fill={B.surface} />
                                {[0, 60, 120, 180, 240, 300].map((a, i) => {
                                    const rad = (a * Math.PI) / 180;
                                    const x1 = 88 + 15 * Math.cos(rad);
                                    const y1 = 32 + 15 * Math.sin(rad);
                                    const x2 = 88 + 21 * Math.cos(rad);
                                    const y2 = 32 + 21 * Math.sin(rad);
                                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                                        stroke={B.goldLight} strokeWidth="3" strokeLinecap="round" />;
                                })}
                            </g>

                            {/* Gear 3 — small */}
                            <g className="uc-gear" style={{ transformBox: 'fill-box' }}>
                                <circle cx="110" cy="66" r="12" stroke={B.creamSoft} strokeWidth="1" fill={B.surface2} />
                                <circle cx="110" cy="66" r="4" stroke={B.creamSoft} strokeWidth="1" fill={B.surface} />
                                {[0, 72, 144, 216, 288].map((a, i) => {
                                    const rad = (a * Math.PI) / 180;
                                    const x1 = 110 + 9 * Math.cos(rad);
                                    const y1 = 66 + 9 * Math.sin(rad);
                                    const x2 = 110 + 14 * Math.cos(rad);
                                    const y2 = 66 + 14 * Math.sin(rad);
                                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                                        stroke={B.creamSoft} strokeWidth="2.5" strokeLinecap="round" />;
                                })}
                            </g>

                            {/* Blinking cursor */}
                            <rect x="24" y="76" width="2" height="10" rx="1"
                                fill={B.gold} style={{ animation: 'ddBlink 1s ease-in-out infinite' }} />
                            <rect x="28" y="76" width="12" height="2" rx="1" fill={B.borderSoft} />
                            <rect x="28" y="81" width="8" height="2" rx="1" fill={B.borderSoft} />
                        </svg>
                    </div>

                    {/* Countdown */}
                    <p style={{
                        color: B.muted, fontSize: 11.5, fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '.7px',
                        textAlign: 'center', marginBottom: 16
                    }}>
                        Estimated Launch In
                    </p>
                    <Countdown targetDate={targetDate} />
                </div>

                {/* ── Progress section ── */}
                <div style={{
                    background: B.surface, border: `1px solid ${B.border}`,
                    borderRadius: 20, padding: '24px 28px', marginBottom: 24,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                        <div style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: B.gold, animation: 'ddBlink 1.5s ease-in-out infinite'
                        }} />
                        <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700 }}>Build Progress</p>
                    </div>
                    <ProgressBar label="Core Dashboard & Analytics" pct={92} delay={0} />
                    <ProgressBar label="Orders & Inventory System" pct={87} delay={100} />
                    <ProgressBar label="Product Management" pct={78} delay={200} />
                    <ProgressBar label="User & Customer Portal" pct={65} delay={300} />
                    <ProgressBar label="Reporting & Exports" pct={54} delay={400} />
                    <ProgressBar label="Performance Optimisation" pct={40} delay={500} />
                </div>

                {/* ── Features coming ── */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 12, marginBottom: 24,
                }}>
                    <FeatureCard delay={0} icon="📦" title="Smart Inventory" desc="Real-time stock tracking with low-stock alerts and automated reorder points." />
                    <FeatureCard delay={80} icon="📊" title="Deep Analytics" desc="Revenue dashboards, conversion funnels, and customer LTV insights." />
                    <FeatureCard delay={160} icon="🚚" title="Order Tracking" desc="End-to-end order lifecycle management with instant status updates." />
                    <FeatureCard delay={240} icon="👥" title="Customer Profiles" desc="Full customer history, preferences, and loyalty tier management." />
                    <FeatureCard delay={320} icon="🏷️" title="Dynamic Pricing" desc="Size-based multipliers, discount rules, and flash sale scheduling." />
                    <FeatureCard delay={400} icon="🔒" title="Role-Based Access" desc="Fine-grained permissions for admins, managers, and support staff." />
                </div>

                {/* ── Bottom bar ── */}
                <div style={{
                    background: B.surface,
                    border: `1px solid ${B.borderSoft}`,
                    borderRadius: 16, padding: '18px 24px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 12,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        {/* Status dot */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{
                                width: 8, height: 8, borderRadius: '50%',
                                background: '#34d399', display: 'inline-block',
                                animation: 'ddBlink 2s ease-in-out infinite',
                                boxShadow: '0 0 8px #34d39960'
                            }} />
                            <span style={{ color: '#6ee7b7', fontSize: 12, fontWeight: 600 }}>Systems Online</span>
                        </div>
                        <span style={{ color: B.borderSoft }}>·</span>
                        <span style={{ color: B.muted, fontSize: 12 }}>
                            © {new Date().getFullYear()} D Dolly Lamb Admin
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <a href="/" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            color: B.gold, fontSize: 12.5, fontWeight: 700,
                            textDecoration: 'none', padding: '5px 14px',
                            background: `linear-gradient(135deg, ${B.gold}18, ${B.goldLight}10)`,
                            border: `1px solid ${B.border}`, borderRadius: 8,
                            transition: 'all .15s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.boxShadow = `0 0 12px rgba(201,168,76,0.25)`; }}
                            onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(135deg, ${B.gold}18, ${B.goldLight}10)`; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Visit Store
                        </a>
                        <span style={{ color: B.mutedSoft }}>·</span>
                        <span style={{ color: B.muted, fontSize: 12 }}>Need help?</span>
                        <a href="mailto:admin@ddollylamb.com" style={{
                            color: B.creamSoft, fontSize: 12.5, fontWeight: 600,
                            textDecoration: 'none', padding: '5px 12px',
                            border: `1px solid ${B.borderSoft}`, borderRadius: 8,
                            transition: 'all .15s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.cream; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.borderSoft; e.currentTarget.style.color = B.creamSoft; }}
                        >
                            admin@ddollylamb.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;