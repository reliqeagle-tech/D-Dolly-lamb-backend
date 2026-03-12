
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────────
   Global styles: fonts + keyframes + helpers
   (Tailwind can't generate these dynamically)
───────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes goldShimmer {
    0%, 100% { background-position: 0%   50%; }
    50%       { background-position: 100% 50%; }
  }
  @keyframes rotateSlow {
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  @keyframes rotateSlowReverse {
    to { transform: translate(-50%, -50%) rotate(-360deg); }
  }
  @keyframes pulseGold {
    0%, 100% { opacity: 0.3; }
    50%       { opacity: 0.75; }
  }

  /* Stagger helpers */
  .d0  { animation-delay: 0.05s; }
  .d1  { animation-delay: 0.18s; }
  .d2  { animation-delay: 0.30s; }
  .d3  { animation-delay: 0.44s; }
  .d4  { animation-delay: 0.58s; }
  .d5  { animation-delay: 0.72s; }
  .d6  { animation-delay: 0.86s; }

  .afu { animation: fadeUp 0.65s ease both; }
  .afi { animation: fadeIn 0.65s ease both; }

  /* Gold gradient shimmer text */
  .gold-text {
    background: linear-gradient(
      140deg,
      #7A5C10 0%, #C9961A 25%, #E0AE3A 50%, #C9961A 75%, #7A5C10 100%
    );
    background-size: 220% 220%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: goldShimmer 5.5s ease infinite;
  }

  /* Ghost 404 italic shadow */
  .ghost-num {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 300;
    color: transparent;
    -webkit-text-stroke: 0.5px rgba(201,150,26,0.09);
    user-select: none;
    pointer-events: none;
    position: absolute;
    inset: 0;
    transform: translate(8px, 8px);
  }

  /* Rings */
  .ring-cw  { animation: rotateSlow        22s linear infinite; }
  .ring-ccw { animation: rotateSlowReverse 30s linear infinite; }

  /* Pulsing diamond */
  .pulse-dia { animation: pulseGold 2.8s ease-in-out infinite; }

  /* Grid texture */
  .grid-tex {
    background-image:
      linear-gradient(rgba(201,150,26,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,150,26,0.03) 1px, transparent 1px);
    background-size: 58px 58px;
    -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 76%);
    mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 76%);
  }

  /* Gold CTA button */
  .btn-gold {
    position: relative; overflow: hidden;
    background: linear-gradient(110deg, #8B6914 0%, #C9961A 38%, #E0AE3A 56%, #C9961A 100%);
    background-size: 200% 200%;
    background-position: 0% 50%;
    transition: background-position .4s ease, box-shadow .3s ease, transform .2s ease;
    font-family: 'Jost', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.24em; text-transform: uppercase;
    color: #080604; border: none; border-radius: 6px;
    padding: 14px 36px; cursor: pointer;
  }
  .btn-gold::before {
    content: '';
    position: absolute;
    top: -50%; left: -65%;
    width: 28%; height: 200%;
    background: rgba(255,255,255,0.13);
    transform: skewX(-18deg);
    transition: left .55s ease;
  }
  .btn-gold:hover::before { left: 130%; }
  .btn-gold:hover {
    background-position: 100% 50%;
    box-shadow: 0 8px 36px rgba(201,150,26,0.38);
    transform: translateY(-2px);
  }
  .btn-gold:active { transform: translateY(0); }

  /* Ghost outline button */
  .btn-outline {
    font-family: 'Jost', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.24em; text-transform: uppercase;
    color: #8A7050; background: transparent;
    border: 1px solid #3D2E14; border-radius: 6px;
    padding: 14px 36px; cursor: pointer;
    transition: color .3s, border-color .3s, background .3s;
  }
  .btn-outline:hover {
    color: #E0AE3A;
    border-color: #8B6914;
    background: rgba(201,150,26,0.07);
  }

  /* Nav links */
  .nf-link {
    font-family: 'Jost', sans-serif;
    font-size: 9px; font-weight: 700;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: #3D2C0E; background: none; border: none;
    cursor: pointer; position: relative;
    transition: color .25s;
  }
  .nf-link::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0; right: 100%;
    height: 1px; background: #8B6914;
    transition: right .3s ease;
  }
  .nf-link:hover         { color: #E0AE3A; }
  .nf-link:hover::after  { right: 0; }

  /* Logo hover */
  .logo-diamond { transition: border-color .3s; }
  .logo-btn:hover .logo-diamond { border-color: #C9961A !important; }
  .logo-btn:hover .logo-name    { color: #E0AE3A; }
  .logo-name { transition: color .3s; }
`;

/* ─── Animated particle canvas ─── */
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
            alpha: Math.random() * 0.42 + 0.08,
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
                ctx.fillStyle = `rgba(201,150,26,${a.toFixed(3)})`;
                ctx.fill();
            });
            raf = requestAnimationFrame(tick);
        };
        tick();
        return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
    }, []);
    return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ─── Corner bracket ornaments ─── */
function Corners() {
    const s = '1px solid #8B6914';
    return (
        <>
            <div className="absolute top-6 left-6 w-10 h-10 pointer-events-none" style={{ borderTop: s, borderLeft: s }} />
            <div className="absolute top-6 right-6 w-10 h-10 pointer-events-none" style={{ borderTop: s, borderRight: s }} />
            <div className="absolute bottom-6 left-6 w-10 h-10 pointer-events-none" style={{ borderBottom: s, borderLeft: s }} />
            <div className="absolute bottom-6 right-6 w-10 h-10 pointer-events-none" style={{ borderBottom: s, borderRight: s }} />
        </>
    );
}

/* ─── Ornamental diamond divider ─── */
function GoldDivider() {
    return (
        <div className="afi d2 flex items-center gap-3">
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8B6914)' }} />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#3D2C0E]" />
            <div className="w-2 h-2 rotate-45 bg-[#8B6914]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#3D2C0E]" />
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, #8B6914, transparent)' }} />
        </div>
    );
}

/* ─────────────────────────────────────────────
   Main NotFound Page
───────────────────────────────────────────── */
export default function PageNotFound() {
    const navigate = useNavigate();
    const [ready, setReady] = useState(false);
    useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

    if (!ready) return <div className="min-h-screen bg-[#080604]" />;

    return (
        <>
            <style>{GLOBAL_CSS}</style>

            <div
                className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#080604] text-[#F0E2C4]"
                style={{ fontFamily: "'Jost', sans-serif" }}
            >

                {/* ── BG layers ── */}

                {/* Radial ambient glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `
              radial-gradient(ellipse 65% 55% at 50% 58%, rgba(201,150,26,0.085) 0%, transparent 68%),
              radial-gradient(ellipse 32% 26% at 50% 54%, rgba(201,150,26,0.04)  0%, transparent 60%)
            `,
                    }}
                />

                {/* Grid texture */}
                <div className="absolute inset-0 pointer-events-none grid-tex" />

                {/* Particles */}
                <Particles />

                {/* Decorative rings */}
                <div
                    className="ring-cw absolute pointer-events-none rounded-full"
                    style={{
                        width: 560, height: 560,
                        border: '1px solid rgba(139,105,20,0.11)',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%,-50%)',
                    }}
                />
                <div
                    className="ring-ccw absolute pointer-events-none rounded-full"
                    style={{
                        width: 380, height: 380,
                        border: '1px dashed rgba(139,105,20,0.07)',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%,-50%)',
                    }}
                />

                {/* Corner frames */}
                <Corners />

                {/* ── Top bar ── */}
                <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-4 border-b border-[#1C1408]">

                    {/* Logo */}
                    {/* <button className="logo-btn flex items-center gap-3" onClick={() => navigate('/')}>
                        <div
                            className="logo-diamond w-8 h-8 flex items-center justify-center flex-shrink-0"
                            style={{ border: '1.5px solid #8B6914', transform: 'rotate(45deg)' }}
                        >
                            <span
                                className="font-semibold text-[#C9961A] text-sm"
                                style={{ fontFamily: "'Cormorant Garamond', serif", transform: 'rotate(-45deg)' }}
                            >
                                D
                            </span>
                        </div>
                        <div className="flex flex-col gap-0.5 text-left">
                            <span className="logo-name text-[#F0E2C4] text-[12px] font-medium tracking-[0.18em] uppercase">
                                <strong>D Dolly</strong> Lamb
                            </span>
                            <span className="text-[#8A7050] text-[7px] font-light tracking-[0.32em] uppercase">
                                Artisan Atelier
                            </span>
                        </div>
                    </button> */}

                    {/* Error badge */}
                    {/* <span className="text-[8.5px] font-bold tracking-[0.22em] uppercase text-[#3D2C0E] border border-[#231A0C] rounded px-3 py-1">
                        Error 404 · Page Missing
                    </span> */}
                </header>

                {/* ── Vertical side labels (desktop only) ── */}
                <span
                    className="absolute left-7 top-1/2 hidden lg:block text-[7px] font-semibold tracking-[0.32em] uppercase text-[#2E2010] pointer-events-none"
                    style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
                >
                    D Dolly Lamb — Artisan Atelier
                </span>
                <span
                    className="absolute right-7 top-1/2 hidden lg:block text-[7px] font-semibold tracking-[0.32em] uppercase text-[#2E2010] pointer-events-none"
                    style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
                >
                    Est. Luxury Leather Goods
                </span>

                {/* ── Center hero ── */}
                <main className="relative z-10 flex flex-col items-center text-center px-6 pt-4">

                    {/* Overline */}
                    <div className="afu d0 flex items-center gap-4 mb-8">
                        <div className="w-10 h-px bg-[#8B6914]" />
                        <span className="text-[8px] font-bold tracking-[0.42em] uppercase text-[#8B6914]">
                            Oops — Page Not Found
                        </span>
                        <div className="w-10 h-px bg-[#8B6914]" />
                    </div>

                    {/* 404 giant type */}
                    <div className="afu d1 relative select-none mb-2" style={{ lineHeight: 0.88 }}>
                        {/* italic ghost offset */}
                        <div
                            className="ghost-num"
                            style={{ fontSize: 'clamp(96px, 16.5vw, 208px)', letterSpacing: '-0.02em' }}
                        >
                            404
                        </div>
                        {/* gold shimmer */}
                        <div
                            className="gold-text"
                            style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 300,
                                fontSize: 'clamp(96px, 16.5vw, 208px)',
                                letterSpacing: '-0.02em',
                                lineHeight: 0.88,
                            }}
                        >
                            404
                        </div>
                    </div>

                    {/* Diamond ornament row */}
                    <div className="mt-5 mb-6">
                        <GoldDivider />
                    </div>

                    {/* Headline */}
                    <h1
                        className="afu d3 font-light italic text-[#F0E2C4] leading-snug mb-3"
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 'clamp(17px, 2.6vw, 31px)',
                            letterSpacing: '0.01em',
                        }}
                    >
                        Sorry, we couldn't find this page
                    </h1>

                    {/* Body copy */}
                    <p
                        className="afu d4 text-[#8A7050] max-w-[420px] mb-10"
                        style={{ fontSize: 12, letterSpacing: '0.05em', lineHeight: 1.95 }}
                    >
                        The link may be broken, or the page may have moved.
                        <br />
                        Don't worry — our full collection is just one click away.
                    </p>

                    {/* CTA row */}
                    <div className="afu d5 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button className="btn-gold" onClick={() => navigate('/')}>
                            Go Back Home
                        </button>
                        <button className="btn-outline" onClick={() => navigate('/collection')}>
                            Browse Collection
                        </button>
                    </div>

                    {/* Quick nav */}
                    <p className="afi d6 text-[#3D2C0E] mt-8 mb-3" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                        Or explore a section
                    </p>
                    <nav className="afi d6 flex flex-wrap justify-center gap-7 pb-2 w-full max-w-xs border-b border-[#1C1408]">
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
                <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-3 border-t border-[#1C1408]">
                    <span
                        className="text-[#2E2010] font-semibold tracking-[0.28em] uppercase"
                        style={{ fontSize: 8 }}
                    >
                        Need help? &ensp;·&ensp; Contact our team
                    </span>
                    <div className="flex items-center gap-2">
                        <div className="pulse-dia w-1.5 h-1.5 rotate-45 bg-[#8B6914]" />
                        <span
                            className="text-[#2E2010] font-semibold tracking-[0.28em] uppercase"
                            style={{ fontSize: 8 }}
                        >
                            We're here to assist you
                        </span>
                    </div>
                </footer>

            </div>
        </>
    );
}