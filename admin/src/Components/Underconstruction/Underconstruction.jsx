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