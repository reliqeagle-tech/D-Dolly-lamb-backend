import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../../App';
import {
    LineChart, Line, AreaChart, Area, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { TbRefresh } from 'react-icons/tb';

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — ANALYTICS  |  Light Luxury Theme (matches Sidebar)
   ── Color tokens mirrored from Sidebar.jsx ──────────────────────
   bg-base:       #FAFAF8   warm ivory white
   bg-surface:    #F4F2EE   soft warm off-white
   bg-hover:      #EDE9E2   warm linen hover
   bg-active:     #E8F4EE   soft sage active
   navy:          #1C2B3A   primary text
   navy-mid:      #2E4057   secondary text
   navy-soft:     #4A6070   muted / icons
   navy-ghost:    #8FA0AD   placeholder / labels
   green:         #1A7A4A   primary accent
   green-light:   #2A9960   hover on green
   green-bg:      #E8F4EE   active bg
   green-border:  #A8D5BC   active border
   champagne:     #B8985A   gold accent
   champagne-bg:  #FBF5E8   subtle gold bg
   champagne-bdr: #DBC98A   gold border
   border:        #E0DBD3   subtle warm border
   border-strong: #C8C2B8   divider
════════════════════════════════════════════════════════════════ */

const B = {
    /* ── Backgrounds ── */
    bg: '#FAFAF8',
    surface: '#F4F2EE',
    surface2: '#EDE9E2',
    surfaceCard: '#FFFFFF',

    /* ── Text ── */
    navy: '#1C2B3A',
    navyMid: '#2E4057',
    navySoft: '#4A6070',
    navyGhost: '#8FA0AD',

    /* ── Primary green ── */
    green: '#1A7A4A',
    greenLight: '#2A9960',
    greenBg: '#E8F4EE',
    greenBdr: '#A8D5BC',

    /* ── Champagne / gold ── */
    gold: '#B8985A',
    goldLight: '#CBA96B',
    goldBg: '#FBF5E8',
    goldBdr: '#DBC98A',

    /* ── Borders ── */
    border: '#E0DBD3',
    borderStrong: '#C8C2B8',

    /* ── Status ── */
    danger: '#C0392B',
    dangerBg: '#FEF2F2',
    amber: '#D97706',
    amberBg: '#FFFBEB',
    amberBdr: '#FDE68A',

    /* ══ CHART METRIC COLORS — clearly distinct on light bg ══
       Each metric owns a unique, high-contrast hue so users can
       identify lines/areas/bars instantly at a glance.         */
    Revenue: '#1A7A4A',   // Brand Green — Revenue
    Orders: '#2563EB',   // Royal Blue  — Orders count

    /* ══ PIE / BAR CATEGORY PALETTE — 6 perceptually distinct ══
       Chosen for maximum contrast on warm ivory background.    */
    pie: [
        '#1A7A4A',   // 1  Forest Green  (primary brand)
        '#2563EB',   // 2  Royal Blue
        '#B8985A',   // 3  Champagne Gold
        '#DC2626',   // 4  Crimson Red
        '#7C3AED',   // 5  Violet
        '#0891B2',   // 6  Teal
    ],
};

/* ── Gradient fills for area chart — per metric ── */
const METRIC_GRADIENTS = [
    { key: 'Revenue', color: B.Revenue, opacity: [0.18, 0] },
    { key: 'Orders', color: B.Orders, opacity: [0.15, 0] },
];

/* ── Shared card style ── */
const S = {
    card: {
        background: B.surfaceCard,
        border: `1px solid ${B.border}`,
        boxShadow: '0 1px 4px rgba(28,43,58,0.06)',
    },
    surface: {
        background: B.surface,
        border: `1px solid ${B.border}`,
    },
};

/* ══════════════════════════════════════════════════════════════
   SECTION CARD
══════════════════════════════════════════════════════════════ */
const SectionCard = ({ title, subtitle, children, toolbar }) => (
    <div style={{ ...S.card, borderRadius: 14, overflow: 'hidden' }}>
        <div style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 10, padding: '14px 20px',
            borderBottom: `1px solid ${B.border}`,
            background: B.surface,
        }}>
            <div>
                <h2 style={{
                    color: B.navy, fontSize: 13.5, fontWeight: 700, margin: 0,
                    fontFamily: 'Georgia, serif', letterSpacing: '0.01em'
                }}>{title}</h2>
                {subtitle && (
                    <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 3, letterSpacing: '0.02em' }}>
                        {subtitle}
                    </p>
                )}
            </div>
            {toolbar}
        </div>
        {children}
    </div>
);

/* ══════════════════════════════════════════════════════════════
   CUSTOM TOOLTIP
══════════════════════════════════════════════════════════════ */
const LightTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div style={{
            background: B.surfaceCard,
            border: `1px solid ${B.border}`,
            borderRadius: 10, padding: '10px 14px',
            fontSize: 12.5,
            boxShadow: '0 6px 24px rgba(28,43,58,0.12)',
        }}>
            <p style={{ color: B.navy, fontWeight: 700, marginBottom: 8, fontFamily: 'Georgia, serif' }}>{label}</p>
            {payload.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div style={{
                        width: 28, height: 6, borderRadius: 3,
                        background: p.color, flexShrink: 0,
                    }} />
                    <span style={{ color: B.navySoft }}>{p.name}:</span>
                    <span style={{ color: B.navy, fontWeight: 700 }}>
                        {p.name === 'Revenue'
                            ? `$${Number(p.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                            : p.value.toLocaleString()}
                    </span>
                </div>
            ))}
        </div>
    );
};

/* ══════════════════════════════════════════════════════════════
   SKELETON
══════════════════════════════════════════════════════════════ */
const Skeleton = ({ h = 20, w = '100%', r = 6 }) => (
    <div style={{
        height: h, width: w, borderRadius: r,
        background: B.surface2,
        animation: 'pulse 1.5s ease-in-out infinite',
    }} />
);

/* ══════════════════════════════════════════════════════════════
   ICON BUTTON — matches sidebar's bell button style
══════════════════════════════════════════════════════════════ */
const IconBtn = ({ onClick, title, children }) => {
    const [hov, setHov] = useState(false);
    return (
        <button onClick={onClick} title={title}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                width: 32, height: 32, borderRadius: 8,
                border: `1px solid ${hov ? B.greenBdr : B.border}`,
                background: hov ? B.greenBg : B.surfaceCard,
                color: hov ? B.green : B.navyGhost,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all .15s',
            }}
        >{children}</button>
    );
};

/* ══════════════════════════════════════════════════════════════
   SEGMENT BUTTON — matches sidebar section label style
══════════════════════════════════════════════════════════════ */
const segBtn = (active) => ({
    padding: '5px 13px', fontSize: 11, fontWeight: 700, cursor: 'pointer',
    border: 'none', transition: 'all .15s', letterSpacing: '0.06em',
    textTransform: 'uppercase',
    background: active ? B.green : 'transparent',
    color: active ? '#FFFFFF' : B.navyGhost,
});

/* ══════════════════════════════════════════════════════════════
   ANALYTICS COMPONENT
   Mode 1 — standalone: <Analytics token={token} />
   Mode 2 — embedded:   <Analytics orders={o} products={p} />
══════════════════════════════════════════════════════════════ */
const Analytics = ({ token, orders: ordersProp, products: productsProp }) => {
    const [chartType, setChartType] = useState('area');
    const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders']);
    const [period, setPeriod] = useState('monthly');
    const [ownOrders, setOwnOrders] = useState([]);
    const [ownProducts, setOwnProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const isStandalone = !ordersProp && !productsProp;
    const orders = isStandalone ? ownOrders : (ordersProp || []);
    const products = isStandalone ? ownProducts : (productsProp || []);

    const fetchData = useCallback(async () => {
        if (!isStandalone || !token) return;
        setLoading(true);
        try {
            const [ordRes, prodRes] = await Promise.all([
                axios.post(backendUrl + '/api/order/list', {}, { headers: { token } }),
                axios.get(backendUrl + '/api/product/list', { headers: { token } }),
            ]);
            if (ordRes.data.success) setOwnOrders(ordRes.data.orders || []);
            else toast.error(ordRes.data.message);
            if (prodRes.data.success) setOwnProducts(prodRes.data.products || []);
            else toast.error(prodRes.data.message);
        } catch (e) { toast.error(e?.message || 'Failed to load analytics'); }
        finally { setLoading(false); }
    }, [isStandalone, token]);

    useEffect(() => { fetchData(); }, [fetchData]);

    /* ── Metrics ── */
    const METRICS = [
        { key: 'Revenue', color: B.Revenue, label: 'Revenue ($)' },
        { key: 'Orders', color: B.Orders, label: 'Orders' },
    ];
    const toggleMetric = m =>
        setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);
    const activeM = METRICS.filter(m => activeMetrics.includes(m.key));

    /* ── Monthly data ── */
    const monthlyData = useMemo(() => {
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const map = {};
        MONTHS.forEach(m => { map[m] = { name: m, Revenue: 0, Orders: 0 }; });
        orders.forEach(o => {
            if (!o.date) return;
            const m = MONTHS[new Date(o.date).getMonth()];
            if (!map[m]) return;
            map[m].Orders += 1;
            map[m].Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
        });
        return MONTHS.map(m => map[m]);
    }, [orders]);

    /* ── Weekly data ── */
    const weeklyData = useMemo(() => {
        const now = new Date();
        const weeks = Array.from({ length: 8 }, (_, i) => {
            const offset = 7 - i;
            const weekStart = new Date(now);
            const dow = (now.getDay() + 6) % 7;
            weekStart.setDate(now.getDate() - dow - offset * 7);
            weekStart.setHours(0, 0, 0, 0);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            weekEnd.setHours(23, 59, 59, 999);
            return {
                name: weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                Revenue: 0, Orders: 0,
                start: weekStart.getTime(), end: weekEnd.getTime(),
            };
        });
        orders.forEach(o => {
            if (!o.date) return;
            const ts = new Date(o.date).getTime();
            const w = weeks.find(wk => ts >= wk.start && ts <= wk.end);
            if (!w) return;
            w.Orders += 1;
            w.Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
        });
        return weeks.map(({ name, Revenue, Orders }) => ({ name, Revenue, Orders }));
    }, [orders]);

    const chartData = period === 'weekly' ? weeklyData : monthlyData;

    /* ── Pie: category breakdown ── */
    const pieData = useMemo(() => {
        const map = {};
        products.forEach(p => {
            const cat = p.category || 'Other';
            if (!map[cat]) map[cat] = { name: cat, value: 0 };
            map[cat].value += 1;
        });
        const entries = Object.values(map);
        const total = entries.reduce((s, e) => s + e.value, 0) || 1;
        return entries
            .map((e, i) => ({ ...e, pct: Math.round((e.value / total) * 100), color: B.pie[i % B.pie.length] }))
            .sort((a, b) => b.value - a.value);
    }, [products]);

    /* ── Top products ── */
    const topProducts = useMemo(() => {
        const map = {};
        orders.forEach(o => {
            (o.items || []).forEach(it => {
                const name = it.name || 'Unknown';
                if (!map[name]) map[name] = { name, sales: 0 };
                const q = typeof it.quantity === 'object'
                    ? (it.quantity?.quantity ?? 1)
                    : (Number(it.quantity) || 1);
                map[name].sales += q;
            });
        });
        return Object.values(map)
            .sort((a, b) => b.sales - a.sales)
            .slice(0, 6)
            .map((p, i) => ({
                ...p, color: B.pie[i % B.pie.length],
                name: p.name.length > 22 ? p.name.slice(0, 21) + '…' : p.name,
            }));
    }, [orders]);

    const hasData = orders.length > 0;
    const hasProds = products.length > 0;

    const axisTick = { fontSize: 11, fill: B.navyGhost };

    /* ── Loading skeleton ── */
    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'Georgia, serif' }}>
                <div style={{ ...S.card, borderRadius: 14, padding: 20 }}>
                    <Skeleton h={16} w={180} />
                    <div style={{ marginTop: 8 }}><Skeleton h={10} w={280} /></div>
                    <div style={{ marginTop: 20 }}><Skeleton h={300} /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[0, 1].map(i => (
                        <div key={i} style={{ ...S.card, borderRadius: 14, padding: 20 }}>
                            <Skeleton h={14} w={140} />
                            <div style={{ marginTop: 8 }}><Skeleton h={10} w={100} /></div>
                            <div style={{ marginTop: 20 }}><Skeleton h={180} /></div>
                        </div>
                    ))}
                </div>
                <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
            </div>
        );
    }

    /* ── SVG gradient defs ── */
    const ChartDefs = () => (
        <defs>
            {METRIC_GRADIENTS.map(m => (
                <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={m.color} stopOpacity={m.opacity[0]} />
                    <stop offset="95%" stopColor={m.color} stopOpacity={m.opacity[1]} />
                </linearGradient>
            ))}
        </defs>
    );

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', gap: 16,
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            WebkitFontSmoothing: 'antialiased',
            background: B.bg,
        }}>

            {/* ══════════════════════════════════════════════════
                PERFORMANCE CHART
            ══════════════════════════════════════════════════ */}
            <SectionCard
                title="Performance Analytics"
                subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown · ${orders.length} total orders`}
                toolbar={
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        {isStandalone && (
                            <IconBtn onClick={fetchData} title="Refresh">
                                <TbRefresh size={14} />
                            </IconBtn>
                        )}

                        {/* Period toggle */}
                        <div style={{
                            display: 'flex',
                            background: B.surface,
                            border: `1px solid ${B.border}`,
                            borderRadius: 8, overflow: 'hidden',
                        }}>
                            {[['monthly', 'Monthly'], ['weekly', 'Weekly']].map(([v, l]) => (
                                <button key={v} onClick={() => setPeriod(v)} style={segBtn(period === v)}>{l}</button>
                            ))}
                        </div>

                        {/* Chart type toggle */}
                        <div style={{
                            display: 'flex',
                            background: B.surface,
                            border: `1px solid ${B.border}`,
                            borderRadius: 8, overflow: 'hidden',
                        }}>
                            {['area', 'line', 'bar'].map(t => (
                                <button key={t} onClick={() => setChartType(t)}
                                    style={{ ...segBtn(chartType === t), textTransform: 'capitalize' }}>{t}</button>
                            ))}
                        </div>
                    </div>
                }
            >
                {/* ── Metric toggle pills ── */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 20px 4px', flexWrap: 'wrap',
                    borderBottom: `1px solid ${B.border}`,
                    background: B.bg,
                }}>
                    {METRICS.map(m => {
                        const on = activeMetrics.includes(m.key);
                        return (
                            <button key={m.key} onClick={() => toggleMetric(m.key)} style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                padding: '6px 14px', borderRadius: 99, fontSize: 12, fontWeight: 700,
                                cursor: 'pointer', transition: 'all .18s',
                                border: `1.5px solid ${on ? m.color : B.border}`,
                                background: on ? `${m.color}12` : B.surfaceCard,
                                color: on ? m.color : B.navyGhost,
                                letterSpacing: '0.02em',
                            }}>
                                <span style={{
                                    display: 'inline-block', width: 22, height: 3, borderRadius: 3,
                                    background: m.color,
                                    opacity: on ? 1 : 0.4,
                                }} />
                                {m.label}
                            </button>
                        );
                    })}

                    {/* Live legend dots */}
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
                        {activeM.map(m => (
                            <span key={m.key} style={{
                                fontSize: 11, color: B.navySoft,
                                display: 'flex', alignItems: 'center', gap: 5,
                            }}>
                                <span style={{
                                    width: 9, height: 9, borderRadius: '50%',
                                    background: m.color, display: 'inline-block',
                                }} />
                                {m.key}
                            </span>
                        ))}
                    </div>

                    {!hasData && (
                        <span style={{
                            fontSize: 11.5, color: B.amber,
                            background: B.amberBg,
                            border: `1px solid ${B.amberBdr}`,
                            padding: '4px 10px', borderRadius: 99, fontWeight: 600,
                        }}>⚠ No order data yet</span>
                    )}
                </div>

                {/* ── Chart ── */}
                <div style={{ padding: '16px 16px 8px', background: B.surfaceCard }}>
                    <ResponsiveContainer width="100%" height={300}>
                        {chartType === 'bar' ? (
                            <BarChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={B.border} />
                                <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
                                <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                                <Tooltip content={<LightTooltip />} />
                                {activeM.map(m => (
                                    <Bar key={m.key} dataKey={m.key} fill={m.color}
                                        radius={[4, 4, 0, 0]} fillOpacity={0.85} />
                                ))}
                            </BarChart>
                        ) : chartType === 'line' ? (
                            <LineChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={B.border} />
                                <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
                                <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                                <Tooltip content={<LightTooltip />} />
                                {activeM.map(m => (
                                    <Line key={m.key} type="monotone" dataKey={m.key}
                                        stroke={m.color} strokeWidth={2.5}
                                        dot={{ r: 3.5, fill: m.color, stroke: '#FFFFFF', strokeWidth: 2 }}
                                        activeDot={{ r: 6, fill: m.color, stroke: '#FFFFFF', strokeWidth: 2 }} />
                                ))}
                            </LineChart>
                        ) : (
                            /* AREA — default */
                            <AreaChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                                <ChartDefs />
                                <CartesianGrid strokeDasharray="3 3" stroke={B.border} />
                                <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
                                <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                                <Tooltip content={<LightTooltip />} />
                                {activeM.map(m => (
                                    <Area key={m.key} type="monotone" dataKey={m.key}
                                        stroke={m.color} strokeWidth={2.5}
                                        fill={`url(#grad-${m.key})`}
                                        dot={{ r: 3.5, fill: m.color, stroke: '#FFFFFF', strokeWidth: 2 }}
                                        activeDot={{ r: 6, fill: m.color, stroke: '#FFFFFF', strokeWidth: 2 }} />
                                ))}
                            </AreaChart>
                        )}
                    </ResponsiveContainer>
                </div>

                {/* ── Bottom summary bar ── */}
                <div style={{
                    display: 'flex', gap: 24, padding: '12px 20px 14px',
                    borderTop: `1px solid ${B.border}`,
                    background: B.surface,
                    flexWrap: 'wrap',
                }}>
                    {METRICS.map(m => {
                        const on = activeMetrics.includes(m.key);
                        const total = chartData.reduce((s, d) => s + (d[m.key] || 0), 0);
                        return (
                            <div key={m.key} style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                opacity: on ? 1 : 0.4,
                                transition: 'opacity .2s',
                            }}>
                                <div style={{
                                    width: 4, height: 36, borderRadius: 4,
                                    background: m.color, flexShrink: 0,
                                }} />
                                <div>
                                    <p style={{ color: B.navyGhost, fontSize: 10.5, margin: 0, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                                        {m.label}
                                    </p>
                                    <p style={{ color: m.color, fontSize: 18, fontWeight: 800, margin: 0, fontFamily: 'Georgia, serif' }}>
                                        {m.key === 'Revenue'
                                            ? `$${total.toLocaleString('en-US', { minimumFractionDigits: 0 })}`
                                            : total.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </SectionCard>

            {/* ══════════════════════════════════════════════════
                SECONDARY CHARTS
            ══════════════════════════════════════════════════ */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="analytics-grid">

                {/* ── Pie — Category breakdown ── */}
                <SectionCard title="Sales by Category" subtitle={`From ${products.length} products`}>
                    {!hasProds ? (
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '48px 24px', color: B.navyGhost, fontSize: 13,
                        }}>No product data yet</div>
                    ) : (
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: 24, padding: '20px', flexWrap: 'wrap',
                            background: B.surfaceCard,
                        }}>
                            {/* Donut pie */}
                            <div style={{ position: 'relative' }}>
                                <PieChart width={170} height={170}>
                                    <Pie
                                        data={pieData} cx={81} cy={81}
                                        innerRadius={46} outerRadius={76}
                                        dataKey="value" paddingAngle={3} strokeWidth={2} stroke="#FFFFFF"
                                    >
                                        {pieData.map((e, i) => (
                                            <Cell key={i} fill={e.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            background: B.surfaceCard,
                                            border: `1px solid ${B.border}`,
                                            borderRadius: 10, fontSize: 12.5,
                                            boxShadow: '0 4px 16px rgba(28,43,58,0.1)',
                                        }}
                                        labelStyle={{ color: B.green }}
                                        itemStyle={{ color: B.navy }}
                                        formatter={(v, n, p) => [`${p.payload.pct}% (${v})`, p.payload.name]}
                                    />
                                </PieChart>
                                {/* Center label */}
                                <div style={{
                                    position: 'absolute', top: '50%', left: '50%',
                                    transform: 'translate(-50%,-50%)',
                                    textAlign: 'center', pointerEvents: 'none',
                                }}>
                                    <p style={{ color: B.navy, fontSize: 16, fontWeight: 800, margin: 0, fontFamily: 'Georgia, serif' }}>
                                        {pieData.length}
                                    </p>
                                    <p style={{ color: B.navyGhost, fontSize: 9, margin: 0, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                        Categories
                                    </p>
                                </div>
                            </div>

                            {/* Legend — colored square swatches */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {pieData.map(d => (
                                    <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{
                                            width: 13, height: 13, borderRadius: 3,
                                            background: d.color, flexShrink: 0,
                                            border: '2px solid #FFFFFF',
                                            boxShadow: `0 0 0 1px ${d.color}40`,
                                        }} />
                                        <div>
                                            <p style={{ color: B.navy, fontSize: 12.5, fontWeight: 700, margin: 0 }}>{d.name}</p>
                                            <p style={{ color: d.color, fontSize: 11, margin: '1px 0 0', fontWeight: 600 }}>
                                                {d.pct}% · {d.value} products
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </SectionCard>

                {/* ── Horizontal bar — Top products ── */}
                <SectionCard title="Top Products by Orders" subtitle="Most-ordered items across all orders">
                    {topProducts.length === 0 ? (
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '48px 24px', color: B.navyGhost, fontSize: 13,
                        }}>No order data yet</div>
                    ) : (
                        <div style={{ padding: '14px 16px 16px', background: B.surfaceCard }}>
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart
                                    layout="vertical" data={topProducts}
                                    margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke={B.border} horizontal={false} />
                                    <XAxis type="number" tick={axisTick} axisLine={false} tickLine={false} />
                                    <YAxis
                                        type="category" dataKey="name"
                                        tick={{ fontSize: 11, fill: B.navyMid }}
                                        axisLine={false} tickLine={false} width={130}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: B.surfaceCard,
                                            border: `1px solid ${B.border}`,
                                            borderRadius: 10, fontSize: 12.5,
                                            boxShadow: '0 4px 16px rgba(28,43,58,0.1)',
                                        }}
                                        labelStyle={{ color: B.green }}
                                        itemStyle={{ color: B.navy }}
                                        formatter={v => [`${v} units`, 'Ordered']}
                                        cursor={{ fill: `${B.greenBg}` }}
                                    />
                                    {/* Each bar gets its unique color via Cell */}
                                    <Bar dataKey="sales" radius={[0, 5, 5, 0]}>
                                        {topProducts.map((p, i) => (
                                            <Cell key={i} fill={p.color} fillOpacity={0.9} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                            {/* Product color legend */}
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', gap: '6px 16px', marginTop: 12,
                                paddingTop: 10, borderTop: `1px solid ${B.border}`,
                            }}>
                                {topProducts.map((p, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <div style={{
                                            width: 10, height: 10, borderRadius: 2,
                                            background: p.color, flexShrink: 0,
                                        }} />
                                        <span style={{ color: B.navySoft, fontSize: 10.5 }}>{p.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </SectionCard>
            </div>

            <style>{`
                @keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: .4 } }
                @media (max-width: 700px) { .analytics-grid { grid-template-columns: 1fr !important; } }
            `}</style>
        </div>
    );
};

export default Analytics;