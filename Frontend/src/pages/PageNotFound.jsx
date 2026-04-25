
// import { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// /* ─────────────────────────────────────────────
//    Global styles: fonts + keyframes + helpers
//    (Tailwind can't generate these dynamically)
// ───────────────────────────────────────────── */
// const GLOBAL_CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(18px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to   { opacity: 1; }
//   }
//   @keyframes goldShimmer {
//     0%, 100% { background-position: 0%   50%; }
//     50%       { background-position: 100% 50%; }
//   }
//   @keyframes rotateSlow {
//     to { transform: translate(-50%, -50%) rotate(360deg); }
//   }
//   @keyframes rotateSlowReverse {
//     to { transform: translate(-50%, -50%) rotate(-360deg); }
//   }
//   @keyframes pulseGold {
//     0%, 100% { opacity: 0.3; }
//     50%       { opacity: 0.75; }
//   }

//   /* Stagger helpers */
//   .d0  { animation-delay: 0.05s; }
//   .d1  { animation-delay: 0.18s; }
//   .d2  { animation-delay: 0.30s; }
//   .d3  { animation-delay: 0.44s; }
//   .d4  { animation-delay: 0.58s; }
//   .d5  { animation-delay: 0.72s; }
//   .d6  { animation-delay: 0.86s; }

//   .afu { animation: fadeUp 0.65s ease both; }
//   .afi { animation: fadeIn 0.65s ease both; }

//   /* Gold gradient shimmer text */
//   .gold-text {
//     background: linear-gradient(
//       140deg,
//       #7A5C10 0%, #C9961A 25%, #E0AE3A 50%, #C9961A 75%, #7A5C10 100%
//     );
//     background-size: 220% 220%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     animation: goldShimmer 5.5s ease infinite;
//   }

//   /* Ghost 404 italic shadow */
//   .ghost-num {
//     font-family: 'Cormorant Garamond', serif;
//     font-style: italic;
//     font-weight: 300;
//     color: transparent;
//     -webkit-text-stroke: 0.5px rgba(201,150,26,0.09);
//     user-select: none;
//     pointer-events: none;
//     position: absolute;
//     inset: 0;
//     transform: translate(8px, 8px);
//   }

//   /* Rings */
//   .ring-cw  { animation: rotateSlow        22s linear infinite; }
//   .ring-ccw { animation: rotateSlowReverse 30s linear infinite; }

//   /* Pulsing diamond */
//   .pulse-dia { animation: pulseGold 2.8s ease-in-out infinite; }

//   /* Grid texture */
//   .grid-tex {
//     background-image:
//       linear-gradient(rgba(201,150,26,0.03) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(201,150,26,0.03) 1px, transparent 1px);
//     background-size: 58px 58px;
//     -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 76%);
//     mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 76%);
//   }

//   /* Gold CTA button */
//   .btn-gold {
//     position: relative; overflow: hidden;
//     background: linear-gradient(110deg, #8B6914 0%, #C9961A 38%, #E0AE3A 56%, #C9961A 100%);
//     background-size: 200% 200%;
//     background-position: 0% 50%;
//     transition: background-position .4s ease, box-shadow .3s ease, transform .2s ease;
//     font-family: 'Jost', sans-serif;
//     font-size: 10px; font-weight: 700;
//     letter-spacing: 0.24em; text-transform: uppercase;
//     color: #080604; border: none; border-radius: 6px;
//     padding: 14px 36px; cursor: pointer;
//   }
//   .btn-gold::before {
//     content: '';
//     position: absolute;
//     top: -50%; left: -65%;
//     width: 28%; height: 200%;
//     background: rgba(255,255,255,0.13);
//     transform: skewX(-18deg);
//     transition: left .55s ease;
//   }
//   .btn-gold:hover::before { left: 130%; }
//   .btn-gold:hover {
//     background-position: 100% 50%;
//     box-shadow: 0 8px 36px rgba(201,150,26,0.38);
//     transform: translateY(-2px);
//   }
//   .btn-gold:active { transform: translateY(0); }

//   /* Ghost outline button */
//   .btn-outline {
//     font-family: 'Jost', sans-serif;
//     font-size: 10px; font-weight: 700;
//     letter-spacing: 0.24em; text-transform: uppercase;
//     color: #8A7050; background: transparent;
//     border: 1px solid #3D2E14; border-radius: 6px;
//     padding: 14px 36px; cursor: pointer;
//     transition: color .3s, border-color .3s, background .3s;
//   }
//   .btn-outline:hover {
//     color: #E0AE3A;
//     border-color: #8B6914;
//     background: rgba(201,150,26,0.07);
//   }

//   /* Nav links */
//   .nf-link {
//     font-family: 'Jost', sans-serif;
//     font-size: 9px; font-weight: 700;
//     letter-spacing: 0.28em; text-transform: uppercase;
//     color: #3D2C0E; background: none; border: none;
//     cursor: pointer; position: relative;
//     transition: color .25s;
//   }
//   .nf-link::after {
//     content: '';
//     position: absolute;
//     bottom: -3px; left: 0; right: 100%;
//     height: 1px; background: #8B6914;
//     transition: right .3s ease;
//   }
//   .nf-link:hover         { color: #E0AE3A; }
//   .nf-link:hover::after  { right: 0; }

//   /* Logo hover */
//   .logo-diamond { transition: border-color .3s; }
//   .logo-btn:hover .logo-diamond { border-color: #C9961A !important; }
//   .logo-btn:hover .logo-name    { color: #E0AE3A; }
//   .logo-name { transition: color .3s; }
// `;

// /* ─── Animated particle canvas ─── */
// function Particles() {
//     const ref = useRef(null);
//     useEffect(() => {
//         const c = ref.current;
//         if (!c) return;
//         const ctx = c.getContext('2d');
//         let raf;
//         const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
//         resize();
//         window.addEventListener('resize', resize);
//         const pts = Array.from({ length: 65 }, () => ({
//             x: Math.random() * c.width,
//             y: Math.random() * c.height,
//             r: Math.random() * 1.4 + 0.25,
//             vx: (Math.random() - 0.5) * 0.17,
//             vy: -(Math.random() * 0.21 + 0.05),
//             alpha: Math.random() * 0.42 + 0.08,
//             flicker: Math.random() * Math.PI * 2,
//         }));
//         const tick = () => {
//             ctx.clearRect(0, 0, c.width, c.height);
//             pts.forEach(p => {
//                 p.x += p.vx; p.y += p.vy; p.flicker += 0.022;
//                 if (p.y < -4) { p.y = c.height + 4; p.x = Math.random() * c.width; }
//                 if (p.x < -4) p.x = c.width + 4;
//                 if (p.x > c.width + 4) p.x = -4;
//                 const a = p.alpha * (0.65 + 0.35 * Math.sin(p.flicker));
//                 ctx.beginPath();
//                 ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//                 ctx.fillStyle = `rgba(201,150,26,${a.toFixed(3)})`;
//                 ctx.fill();
//             });
//             raf = requestAnimationFrame(tick);
//         };
//         tick();
//         return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
//     }, []);
//     return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
// }

// /* ─── Corner bracket ornaments ─── */
// function Corners() {
//     const s = '1px solid #8B6914';
//     return (
//         <>
//             <div className="absolute top-6 left-6 w-10 h-10 pointer-events-none" style={{ borderTop: s, borderLeft: s }} />
//             <div className="absolute top-6 right-6 w-10 h-10 pointer-events-none" style={{ borderTop: s, borderRight: s }} />
//             <div className="absolute bottom-6 left-6 w-10 h-10 pointer-events-none" style={{ borderBottom: s, borderLeft: s }} />
//             <div className="absolute bottom-6 right-6 w-10 h-10 pointer-events-none" style={{ borderBottom: s, borderRight: s }} />
//         </>
//     );
// }

// /* ─── Ornamental diamond divider ─── */
// function GoldDivider() {
//     return (
//         <div className="afi d2 flex items-center gap-3">
//             <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8B6914)' }} />
//             <div className="w-1.5 h-1.5 rotate-45 bg-[#3D2C0E]" />
//             <div className="w-2 h-2 rotate-45 bg-[#8B6914]" />
//             <div className="w-1.5 h-1.5 rotate-45 bg-[#3D2C0E]" />
//             <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, #8B6914, transparent)' }} />
//         </div>
//     );
// }

// /* ─────────────────────────────────────────────
//    Main NotFound Page
// ───────────────────────────────────────────── */
// export default function PageNotFound() {
//     const navigate = useNavigate();
//     const [ready, setReady] = useState(false);
//     useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

//     if (!ready) return <div className="min-h-screen bg-[#080604]" />;

//     return (
//         <>
//             <style>{GLOBAL_CSS}</style>

//             <div
//                 className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#080604] text-[#F0E2C4]"
//                 style={{ fontFamily: "'Jost', sans-serif" }}
//             >

//                 {/* ── BG layers ── */}

//                 {/* Radial ambient glow */}
//                 <div
//                     className="absolute inset-0 pointer-events-none"
//                     style={{
//                         background: `
//               radial-gradient(ellipse 65% 55% at 50% 58%, rgba(201,150,26,0.085) 0%, transparent 68%),
//               radial-gradient(ellipse 32% 26% at 50% 54%, rgba(201,150,26,0.04)  0%, transparent 60%)
//             `,
//                     }}
//                 />

//                 {/* Grid texture */}
//                 <div className="absolute inset-0 pointer-events-none grid-tex" />

//                 {/* Particles */}
//                 <Particles />

//                 {/* Decorative rings */}
//                 <div
//                     className="ring-cw absolute pointer-events-none rounded-full"
//                     style={{
//                         width: 560, height: 560,
//                         border: '1px solid rgba(139,105,20,0.11)',
//                         top: '50%', left: '50%',
//                         transform: 'translate(-50%,-50%)',
//                     }}
//                 />
//                 <div
//                     className="ring-ccw absolute pointer-events-none rounded-full"
//                     style={{
//                         width: 380, height: 380,
//                         border: '1px dashed rgba(139,105,20,0.07)',
//                         top: '50%', left: '50%',
//                         transform: 'translate(-50%,-50%)',
//                     }}
//                 />

//                 {/* Corner frames */}
//                 <Corners />

//                 {/* ── Top bar ── */}
//                 <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-4 border-b border-[#1C1408]">

//                     {/* Logo */}
//                     {/* <button className="logo-btn flex items-center gap-3" onClick={() => navigate('/')}>
//                         <div
//                             className="logo-diamond w-8 h-8 flex items-center justify-center flex-shrink-0"
//                             style={{ border: '1.5px solid #8B6914', transform: 'rotate(45deg)' }}
//                         >
//                             <span
//                                 className="font-semibold text-[#C9961A] text-sm"
//                                 style={{ fontFamily: "'Cormorant Garamond', serif", transform: 'rotate(-45deg)' }}
//                             >
//                                 D
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-0.5 text-left">
//                             <span className="logo-name text-[#F0E2C4] text-[12px] font-medium tracking-[0.18em] uppercase">
//                                 <strong>D Dolly</strong> Lamb
//                             </span>
//                             <span className="text-[#8A7050] text-[7px] font-light tracking-[0.32em] uppercase">
//                                 Artisan Atelier
//                             </span>
//                         </div>
//                     </button> */}

//                     {/* Error badge */}
//                     {/* <span className="text-[8.5px] font-bold tracking-[0.22em] uppercase text-[#3D2C0E] border border-[#231A0C] rounded px-3 py-1">
//                         Error 404 · Page Missing
//                     </span> */}
//                 </header>

//                 {/* ── Vertical side labels (desktop only) ── */}
//                 <span
//                     className="absolute left-7 top-1/2 hidden lg:block text-[7px] font-semibold tracking-[0.32em] uppercase text-[#2E2010] pointer-events-none"
//                     style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
//                 >
//                     D Dolly Lamb — Artisan Atelier
//                 </span>
//                 <span
//                     className="absolute right-7 top-1/2 hidden lg:block text-[7px] font-semibold tracking-[0.32em] uppercase text-[#2E2010] pointer-events-none"
//                     style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
//                 >
//                     Est. Luxury Leather Goods
//                 </span>

//                 {/* ── Center hero ── */}
//                 <main className="relative z-10 flex flex-col items-center text-center px-6 pt-4">

//                     {/* Overline */}
//                     <div className="afu d0 flex items-center gap-4 mb-8">
//                         <div className="w-10 h-px bg-[#8B6914]" />
//                         <span className="text-[8px] font-bold tracking-[0.42em] uppercase text-[#8B6914]">
//                             Oops — Page Not Found
//                         </span>
//                         <div className="w-10 h-px bg-[#8B6914]" />
//                     </div>

//                     {/* 404 giant type */}
//                     <div className="afu d1 relative select-none mb-2" style={{ lineHeight: 0.88 }}>
//                         {/* italic ghost offset */}
//                         <div
//                             className="ghost-num"
//                             style={{ fontSize: 'clamp(96px, 16.5vw, 208px)', letterSpacing: '-0.02em' }}
//                         >
//                             404
//                         </div>
//                         {/* gold shimmer */}
//                         <div
//                             className="gold-text"
//                             style={{
//                                 fontFamily: "'Cormorant Garamond', serif",
//                                 fontWeight: 300,
//                                 fontSize: 'clamp(96px, 16.5vw, 208px)',
//                                 letterSpacing: '-0.02em',
//                                 lineHeight: 0.88,
//                             }}
//                         >
//                             404
//                         </div>
//                     </div>

//                     {/* Diamond ornament row */}
//                     <div className="mt-5 mb-6">
//                         <GoldDivider />
//                     </div>

//                     {/* Headline */}
//                     <h1
//                         className="afu d3 font-light italic text-[#F0E2C4] leading-snug mb-3"
//                         style={{
//                             fontFamily: "'Cormorant Garamond', serif",
//                             fontSize: 'clamp(17px, 2.6vw, 31px)',
//                             letterSpacing: '0.01em',
//                         }}
//                     >
//                         Sorry, we couldn't find this page
//                     </h1>

//                     {/* Body copy */}
//                     <p
//                         className="afu d4 text-[#8A7050] max-w-[420px] mb-10"
//                         style={{ fontSize: 12, letterSpacing: '0.05em', lineHeight: 1.95 }}
//                     >
//                         The link may be broken, or the page may have moved.
//                         <br />
//                         Don't worry — our full collection is just one click away.
//                     </p>

//                     {/* CTA row */}
//                     <div className="afu d5 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//                         <button className="btn-gold" onClick={() => navigate('/')}>
//                             Go Back Home
//                         </button>
//                         <button className="btn-outline" onClick={() => navigate('/collection')}>
//                             Browse Collection
//                         </button>
//                     </div>

//                     {/* Quick nav */}
//                     <p className="afi d6 text-[#3D2C0E] mt-8 mb-3" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
//                         Or explore a section
//                     </p>
//                     <nav className="afi d6 flex flex-wrap justify-center gap-7 pb-2 w-full max-w-xs border-b border-[#1C1408]">
//                         {[
//                             { label: 'Men', path: '/men' },
//                             { label: 'Women', path: '/women' },
//                             { label: 'Collection', path: '/collection' },
//                             { label: 'Contact Us', path: '/contact' },
//                         ].map(({ label, path }) => (
//                             <button key={label} className="nf-link" onClick={() => navigate(path)}>
//                                 {label}
//                             </button>
//                         ))}
//                     </nav>
//                 </main>

//                 {/* ── Bottom bar ── */}
//                 <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-3 border-t border-[#1C1408]">
//                     <span
//                         className="text-[#2E2010] font-semibold tracking-[0.28em] uppercase"
//                         style={{ fontSize: 8 }}
//                     >
//                         Need help? &ensp;·&ensp; Contact our team
//                     </span>
//                     <div className="flex items-center gap-2">
//                         <div className="pulse-dia w-1.5 h-1.5 rotate-45 bg-[#8B6914]" />
//                         <span
//                             className="text-[#2E2010] font-semibold tracking-[0.28em] uppercase"
//                             style={{ fontSize: 8 }}
//                         >
//                             We're here to assist you
//                         </span>
//                     </div>
//                 </footer>

//             </div>
//         </>
//     );
// }





import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*
  ═══════════════════════════════════════════════
  COLOR SYSTEM — indigo/white, full site match
  -----------------------------------------------
  page bg:       #F8F7FF (very soft indigo tint — light, not dark)
  ambient glow:  indigo radial gradients
  grid texture:  rgba(91,91,214,0.04) indigo
  particles:     rgba(91,91,214,…) indigo
  rings:         rgba(91,91,214,0.10/0.06) indigo
  corners:       #5B5BD6 indigo
  "404" text:    indigo gradient shimmer
  ghost offset:  rgba(91,91,214,0.07)
  headline:      #1E1B4B deep navy
  body text:     #6B7280 grey
  divider:       indigo gradient
  overline:      #5B5BD6 indigo
  CTA primary:   indigo gradient btn
  CTA outline:   indigo outline btn
  nav links:     #1E1B4B → #5B5BD6 hover
  side labels:   rgba(91,91,214,0.18)
  footer text:   #9CA3AF
  footer dot:    #5B5BD6
  top/bot border: rgba(91,91,214,0.10)
  gold:          REMOVED (not brand diamond here)
  ═══════════════════════════════════════════════
*/

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes indigoShimmer {
    0%, 100% { background-position: 0%   50%; }
    50%       { background-position: 100% 50%; }
  }
  @keyframes rotateSlow {
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  @keyframes rotateSlowReverse {
    to { transform: translate(-50%, -50%) rotate(-360deg); }
  }
  @keyframes pulseIndigo {
    0%, 100% { opacity: 0.25; }
    50%       { opacity: 0.65; }
  }
  @keyframes shimmerBar {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  /* Stagger helpers — untouched */
  .d0 { animation-delay: 0.05s; }
  .d1 { animation-delay: 0.18s; }
  .d2 { animation-delay: 0.30s; }
  .d3 { animation-delay: 0.44s; }
  .d4 { animation-delay: 0.58s; }
  .d5 { animation-delay: 0.72s; }
  .d6 { animation-delay: 0.86s; }

  .afu { animation: fadeUp 0.65s ease both; }
  .afi { animation: fadeIn 0.65s ease both; }

  /* ── Indigo gradient shimmer text — replaces gold ── */
  .indigo-shimmer-text {
    background: linear-gradient(
      140deg,
      #4338CA 0%, #5B5BD6 28%, #818CF8 50%, #5B5BD6 72%, #4338CA 100%
    );
    background-size: 220% 220%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: indigoShimmer 5.5s ease infinite;
  }

  /* ── Ghost 404 italic offset ── */
  .ghost-num {
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 300;
    color: transparent;
    -webkit-text-stroke: 0.5px rgba(91,91,214,0.08);
    user-select: none;
    pointer-events: none;
    position: absolute;
    inset: 0;
    transform: translate(8px, 8px);
  }

  /* ── Rings — indigo ── */
  .ring-cw  { animation: rotateSlow        22s linear infinite; }
  .ring-ccw { animation: rotateSlowReverse 30s linear infinite; }

  /* ── Pulsing dot ── */
  .pulse-dia { animation: pulseIndigo 2.8s ease-in-out infinite; }

  /* ── Grid texture — indigo tint ── */
  .grid-tex {
    background-image:
      linear-gradient(rgba(91,91,214,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(91,91,214,0.04) 1px, transparent 1px);
    background-size: 58px 58px;
    -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 76%);
    mask-image:         radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 76%);
  }

  /* ── Navbar shimmer bar — matches site navbar ── */
  .nav-shimmer-bar {
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%, rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerBar 3.5s linear infinite;
  }

  /* ── Primary CTA — indigo gradient ── */
  .btn-indigo {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #4338CA, #5B5BD6);
    transition: box-shadow 0.3s ease, transform 0.2s ease, opacity 0.2s;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.24em; text-transform: uppercase;
    color: #FFFFFF; border: none; border-radius: 8px;
    padding: 14px 36px; cursor: pointer;
  }
  .btn-indigo::before {
    content: '';
    position: absolute;
    top: -50%; left: -65%;
    width: 28%; height: 200%;
    background: rgba(255,255,255,0.14);
    transform: skewX(-18deg);
    transition: left 0.55s ease;
  }
  .btn-indigo:hover::before { left: 130%; }
  .btn-indigo:hover {
    box-shadow: 0 8px 32px rgba(91,91,214,0.40);
    transform: translateY(-2px);
    opacity: 0.94;
  }
  .btn-indigo:active { transform: translateY(0); }

  /* ── Outline CTA ── */
  .btn-outline {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.24em; text-transform: uppercase;
    color: #5B5BD6; background: transparent;
    border: 1.5px solid rgba(91,91,214,0.30); border-radius: 8px;
    padding: 14px 36px; cursor: pointer;
    transition: color 0.3s, border-color 0.3s, background 0.3s;
  }
  .btn-outline:hover {
    color: #4338CA;
    border-color: #5B5BD6;
    background: rgba(91,91,214,0.07);
  }

  /* ── Nav quick links ── */
  .nf-link {
    font-family: 'Montserrat', sans-serif;
    font-size: 9px; font-weight: 700;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: #6B7280; background: none; border: none;
    cursor: pointer; position: relative;
    transition: color 0.25s;
  }
  .nf-link::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0; right: 100%;
    height: 1.5px; background: #5B5BD6;
    transition: right 0.3s ease;
  }
  .nf-link:hover         { color: #5B5BD6; }
  .nf-link:hover::after  { right: 0; }
`;

/* ── Animated particle canvas — indigo particles ── */
function Particles() {
    const ref = useRef(null);
    useEffect(() => {
        const c = ref.current;
        if (!c) return;
        const ctx = c.getContext('2d');
        let raf;
        const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
        resize();
        window.addEventListener('resize', resize);
        const pts = Array.from({ length: 65 }, () => ({
            x: Math.random() * c.width,
            y: Math.random() * c.height,
            r: Math.random() * 1.4 + 0.25,
            vx: (Math.random() - 0.5) * 0.17,
            vy: -(Math.random() * 0.21 + 0.05),
            alpha: Math.random() * 0.35 + 0.06,
            flicker: Math.random() * Math.PI * 2,
        }));
        const tick = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            pts.forEach(p => {
                p.x += p.vx; p.y += p.vy; p.flicker += 0.022;
                if (p.y < -4) { p.y = c.height + 4; p.x = Math.random() * c.width; }
                if (p.x < -4) p.x = c.width + 4;
                if (p.x > c.width + 4) p.x = -4;
                const a = p.alpha * (0.65 + 0.35 * Math.sin(p.flicker));
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(91,91,214,${a.toFixed(3)})`;
                ctx.fill();
            });
            raf = requestAnimationFrame(tick);
        };
        tick();
        return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
    }, []);
    return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ── Corner brackets — indigo ── */
function Corners() {
    const s = '1px solid rgba(91,91,214,0.30)';
    return (
        <>
            <div className="absolute top-6 left-6 w-10 h-10 pointer-events-none" style={{ borderTop: s, borderLeft: s }} />
            <div className="absolute top-6 right-6 w-10 h-10 pointer-events-none" style={{ borderTop: s, borderRight: s }} />
            <div className="absolute bottom-6 left-6 w-10 h-10 pointer-events-none" style={{ borderBottom: s, borderLeft: s }} />
            <div className="absolute bottom-6 right-6 w-10 h-10 pointer-events-none" style={{ borderBottom: s, borderRight: s }} />
        </>
    );
}

/* ── Indigo diamond divider ── */
function IndigoDivider() {
    return (
        <div className="afi d2 flex items-center gap-3">
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(91,91,214,0.45))' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(91,91,214,0.25)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: '#5B5BD6' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(91,91,214,0.25)' }} />
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, rgba(91,91,214,0.45), transparent)' }} />
        </div>
    );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function PageNotFound() {
    const navigate = useNavigate();
    const [ready, setReady] = useState(false);
    useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

    if (!ready) return <div className="min-h-screen" style={{ background: "#F8F7FF" }} />;

    return (
        <>
            <style>{GLOBAL_CSS}</style>

            <div
                className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
                style={{ background: "#F8F7FF", fontFamily: "'Montserrat', sans-serif", color: "#1E1B4B" }}
            >
                {/* ── BG layers ── */}

                {/* Indigo ambient glow */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: `
            radial-gradient(ellipse 65% 55% at 50% 58%, rgba(91,91,214,0.07) 0%, transparent 68%),
            radial-gradient(ellipse 32% 26% at 50% 54%, rgba(129,140,248,0.04) 0%, transparent 60%)
          `,
                }} />

                {/* Grid texture */}
                <div className="absolute inset-0 pointer-events-none grid-tex" />

                {/* Particles */}
                <Particles />

                {/* Decorative rings */}
                <div className="ring-cw absolute pointer-events-none rounded-full" style={{
                    width: 560, height: 560,
                    border: '1px solid rgba(91,91,214,0.10)',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                }} />
                <div className="ring-ccw absolute pointer-events-none rounded-full" style={{
                    width: 380, height: 380,
                    border: '1px dashed rgba(91,91,214,0.06)',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                }} />

                {/* Corner frames */}
                <Corners />

                {/* ── Top bar ── */}
                <header className="absolute top-0 left-0 right-0 z-20"
                    style={{ borderBottom: "1px solid rgba(91,91,214,0.10)" }}>
                    {/* Indigo shimmer — matches navbar */}
                    <div className="nav-shimmer-bar" />
                    <div className="flex items-center justify-between px-8 py-3">
                        <span style={{
                            fontSize: 8, letterSpacing: "0.32em", fontWeight: 700,
                            color: "#818CF8", textTransform: "uppercase",
                            fontFamily: "Montserrat, sans-serif",
                        }}>
                            D DOLLY LAMB
                        </span>
                        <span style={{
                            fontSize: 8, letterSpacing: "0.22em", fontWeight: 600,
                            color: "#9CA3AF", textTransform: "uppercase",
                            border: "1px solid rgba(91,91,214,0.15)",
                            padding: "3px 10px", borderRadius: 4,
                            fontFamily: "Montserrat, sans-serif",
                        }}>
                            Error 404 · Page Missing
                        </span>
                    </div>
                </header>

                {/* ── Vertical side labels ── */}
                <span className="absolute left-7 top-1/2 hidden lg:block pointer-events-none"
                    style={{
                        fontSize: 7, fontWeight: 600, letterSpacing: "0.32em",
                        textTransform: "uppercase", color: "rgba(91,91,214,0.20)",
                        writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)',
                        fontFamily: "Montserrat, sans-serif",
                    }}>
                    D Dolly Lamb — Artisan Atelier
                </span>
                <span className="absolute right-7 top-1/2 hidden lg:block pointer-events-none"
                    style={{
                        fontSize: 7, fontWeight: 600, letterSpacing: "0.32em",
                        textTransform: "uppercase", color: "rgba(91,91,214,0.20)",
                        writingMode: 'vertical-rl', transform: 'translateY(-50%)',
                        fontFamily: "Montserrat, sans-serif",
                    }}>
                    Est. Luxury Leather Goods
                </span>

                {/* ── Center hero ── */}
                <main className="relative z-10 flex flex-col items-center text-center px-6 pt-4">

                    {/* Overline */}
                    <div className="afu d0 flex items-center gap-4 mb-8">
                        <div className="w-10 h-px" style={{ background: "rgba(91,91,214,0.35)" }} />
                        <span style={{
                            fontSize: 8, fontWeight: 700, letterSpacing: "0.42em",
                            textTransform: "uppercase", color: "#5B5BD6",
                            fontFamily: "Montserrat, sans-serif",
                        }}>
                            Oops — Page Not Found
                        </span>
                        <div className="w-10 h-px" style={{ background: "rgba(91,91,214,0.35)" }} />
                    </div>

                    {/* 404 giant type */}
                    <div className="afu d1 relative select-none mb-2" style={{ lineHeight: 0.88 }}>
                        {/* Ghost italic offset */}
                        <div
                            className="ghost-num"
                            style={{ fontSize: 'clamp(96px, 16.5vw, 208px)', letterSpacing: '-0.02em' }}
                        >
                            404
                        </div>
                        {/* Indigo shimmer */}
                        <div
                            className="indigo-shimmer-text"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 700,
                                fontSize: 'clamp(96px, 16.5vw, 208px)',
                                letterSpacing: '-0.02em',
                                lineHeight: 0.88,
                            }}
                        >
                            404
                        </div>
                    </div>

                    {/* Divider ornament */}
                    <div className="mt-5 mb-6">
                        <IndigoDivider />
                    </div>

                    {/* Headline */}
                    <h1 className="afu d3" style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 'clamp(17px, 2.6vw, 28px)',
                        fontWeight: 700, letterSpacing: "0.02em",
                        color: "#1E1B4B", lineHeight: 1.3, marginBottom: 12,
                    }}>
                        Sorry, we couldn't find this page
                    </h1>

                    {/* Body copy */}
                    <p className="afu d4" style={{
                        fontSize: 13, letterSpacing: "0.04em", lineHeight: 1.9,
                        color: "#6B7280", maxWidth: 420, marginBottom: 40,
                        fontFamily: "Montserrat, sans-serif",
                    }}>
                        The link may be broken, or the page may have moved.
                        <br />
                        Don't worry — our full collection is just one click away.
                    </p>

                    {/* CTA buttons */}
                    <div className="afu d5 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button className="btn-indigo" onClick={() => navigate('/')}>
                            Go Back Home
                        </button>
                        <button className="btn-outline" onClick={() => navigate('/collection')}>
                            Browse Collection
                        </button>
                    </div>

                    {/* Quick nav */}
                    <p className="afi d6" style={{
                        fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
                        color: "#9CA3AF", marginTop: 32, marginBottom: 12,
                        fontFamily: "Montserrat, sans-serif",
                    }}>
                        Or explore a section
                    </p>
                    <nav className="afi d6 flex flex-wrap justify-center gap-7 pb-2 w-full max-w-xs"
                        style={{ borderBottom: "1px solid rgba(91,91,214,0.10)" }}>
                        {[
                            { label: 'Men', path: '/men' },
                            { label: 'Women', path: '/women' },
                            { label: 'Collection', path: '/collection' },
                            { label: 'Contact Us', path: '/contact' },
                        ].map(({ label, path }) => (
                            <button key={label} className="nf-link" onClick={() => navigate(path)}>
                                {label}
                            </button>
                        ))}
                    </nav>
                </main>

                {/* ── Bottom bar ── */}
                <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-3"
                    style={{ borderTop: "1px solid rgba(91,91,214,0.10)" }}>
                    <span style={{
                        fontSize: 8, fontWeight: 600, letterSpacing: "0.28em",
                        textTransform: "uppercase", color: "#9CA3AF",
                        fontFamily: "Montserrat, sans-serif",
                    }}>
                        Need help? &ensp;·&ensp; Contact our team
                    </span>
                    <div className="flex items-center gap-2">
                        <div className="pulse-dia w-1.5 h-1.5 rotate-45" style={{ background: "#5B5BD6" }} />
                        <span style={{
                            fontSize: 8, fontWeight: 600, letterSpacing: "0.28em",
                            textTransform: "uppercase", color: "#9CA3AF",
                            fontFamily: "Montserrat, sans-serif",
                        }}>
                            We're here to assist you
                        </span>
                    </div>
                </footer>

            </div>
        </>
    );
}