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
   D DOLLY LAMB — ANALYTICS  |  Dark gold theme + readable chart colors
════════════════════════════════════════════════════════════════ */

const B = {
    bg: '#0d0804',
    surface: '#1a0f07',
    surface2: '#221408',
    border: 'rgba(201,168,76,0.18)',
    borderSoft: 'rgba(201,168,76,0.09)',
    gold: '#c9a84c',
    goldLight: '#e8c46a',
    cream: '#f0d898',
    creamSoft: '#d4b87a',
    muted: '#8b7555',
    mutedSoft: '#5a4530',

    /* ── CHART METRIC COLORS ─────────────────────────────────────
       Each metric gets a CLEARLY DISTINCT hue so users can
       immediately tell lines/areas/bars apart at a glance.
    ─────────────────────────────────────────────────────────── */
    Revenue: '#c9a84c',   // Brand Gold  — Revenue
    Orders: '#38bdf8',   // Sky Blue    — Orders count

    /* ── PIE / BAR CATEGORY PALETTE ─────────────────────────────
       6 visually distinct colors on dark backgrounds.
       Ordered by perceptual distance for maximum readability.
    ─────────────────────────────────────────────────────────── */
    pie: [
        '#c9a84c',  // 1  Gold         (Women / product 1)
        '#38bdf8',  // 2  Sky Blue     (Men   / product 2)
        '#34d399',  // 3  Emerald      (Others/ product 3)
        '#f472b6',  // 4  Pink         (category 4)
        '#a78bfa',  // 5  Violet       (category 5)
        '#fb923c',  // 6  Orange       (category 6)
    ],

    /* status helpers */
    emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)', dot: '#34d399' },
    red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)', dot: '#f87171' },
    amber: { bg: 'rgba(201,168,76,0.13)', text: '#e8c46a', border: 'rgba(201,168,76,0.28)', dot: '#c9a84c' },
};

/* Gradient fills for area chart — distinct per metric */
const METRIC_GRADIENTS = [
    { key: 'Revenue', color: B.Revenue, opacity: [0.30, 0] },
    { key: 'Orders', color: B.Orders, opacity: [0.22, 0] },
];

const S = {
    card: { background: B.surface, border: `1px solid ${B.border}` },
    card2: { background: B.surface2, border: `1px solid ${B.border}` },
};

/* ══════════════════════════════════════════════════════════════
   SECTION CARD
══════════════════════════════════════════════════════════════ */
const SectionCard = ({ title, subtitle, children, toolbar }) => (
    <div style={{ ...S.card, borderRadius: 16, overflow: 'hidden' }}>
        <div style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 10, padding: '14px 20px',
            borderBottom: `1px solid ${B.borderSoft}`,
        }}>
            <div>
                <h2 style={{ color: B.cream, fontSize: 14, fontWeight: 700, margin: 0 }}>{title}</h2>
                {subtitle && <p style={{ color: B.muted, fontSize: 11.5, marginTop: 3 }}>{subtitle}</p>}
            </div>
            {toolbar}
        </div>
        {children}
    </div>
);

/* ══════════════════════════════════════════════════════════════
   CUSTOM TOOLTIP — shows color swatch per metric
══════════════════════════════════════════════════════════════ */
const GoldTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div style={{
            ...S.card2, borderRadius: 12, padding: '10px 14px',
            fontSize: 12.5, boxShadow: '0 8px 30px rgba(0,0,0,.7)',
            border: `1px solid ${B.border}`,
        }}>
            <p style={{ color: B.gold, fontWeight: 700, marginBottom: 8 }}>{label}</p>
            {payload.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    {/* Colored pill swatch — critical for readability */}
                    <div style={{
                        width: 28, height: 7, borderRadius: 4,
                        background: p.color, flexShrink: 0,
                        boxShadow: `0 0 8px ${p.color}60`,
                    }} />
                    <span style={{ color: B.muted }}>{p.name}:</span>
                    <span style={{ color: B.cream, fontWeight: 700 }}>
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
        background: 'rgba(201,168,76,0.07)', animation: 'pulse 1.5s ease-in-out infinite'
    }} />
);

/* ══════════════════════════════════════════════════════════════
   ICON BUTTON
══════════════════════════════════════════════════════════════ */
const IconBtn = ({ onClick, title, children }) => {
    const [hov, setHov] = useState(false);
    return (
        <button onClick={onClick} title={title}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                width: 32, height: 32, borderRadius: 9,
                border: `1px solid ${hov ? B.gold : B.border}`,
                background: hov ? 'rgba(201,168,76,0.12)' : 'transparent',
                color: hov ? B.gold : B.muted,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all .15s',
            }}
        >{children}</button>
    );
};

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

    /* ── METRICS definition ─────────────────────────────────── */
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

    /* ── Pie: category ── */
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
                name: p.name.length > 22 ? p.name.slice(0, 21) + '…' : p.name
            }));
    }, [orders]);

    const hasData = orders.length > 0;
    const hasProds = products.length > 0;

    const axisTick = { fontSize: 11.5, fill: B.mutedSoft };

    /* ── Segment toggle bar style ── */
    const segBtn = (active) => ({
        padding: '5px 13px', fontSize: 11.5, fontWeight: 700, cursor: 'pointer',
        border: 'none', transition: 'all .15s',
        background: active ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : 'transparent',
        color: active ? B.bg : B.muted,
    });

    /* ── Loading skeleton ── */
    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'system-ui,-apple-system,sans-serif' }}>
                <div style={{ ...S.card, borderRadius: 16, padding: 20 }}>
                    <Skeleton h={16} w={180} /><div style={{ marginTop: 8 }}><Skeleton h={10} w={280} /></div>
                    <div style={{ marginTop: 20 }}><Skeleton h={300} /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[0, 1].map(i => (
                        <div key={i} style={{ ...S.card, borderRadius: 16, padding: 20 }}>
                            <Skeleton h={14} w={140} /><div style={{ marginTop: 8 }}><Skeleton h={10} w={100} /></div>
                            <div style={{ marginTop: 20 }}><Skeleton h={180} /></div>
                        </div>
                    ))}
                </div>
                <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}`}</style>
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
            fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased'
        }}>

            {/* ══════════════════════════════════════════════════
                PERFORMANCE CHART
            ══════════════════════════════════════════════════ */}
            <SectionCard
                title="Performance Analytics"
                subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown · ${orders.length} real orders`}
                toolbar={
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        {isStandalone && (
                            <IconBtn onClick={fetchData} title="Refresh"><TbRefresh size={14} /></IconBtn>
                        )}

                        {/* Period toggle */}
                        <div style={{
                            display: 'flex', background: B.surface2,
                            border: `1px solid ${B.border}`, borderRadius: 10, overflow: 'hidden'
                        }}>
                            {[['monthly', 'Monthly'], ['weekly', 'Weekly']].map(([v, l]) => (
                                <button key={v} onClick={() => setPeriod(v)} style={segBtn(period === v)}>{l}</button>
                            ))}
                        </div>

                        {/* Chart type toggle */}
                        <div style={{
                            display: 'flex', background: B.surface2,
                            border: `1px solid ${B.border}`, borderRadius: 10, overflow: 'hidden'
                        }}>
                            {['area', 'line', 'bar'].map(t => (
                                <button key={t} onClick={() => setChartType(t)}
                                    style={{ ...segBtn(chartType === t), textTransform: 'capitalize' }}>{t}</button>
                            ))}
                        </div>
                    </div>
                }
            >
                {/* ── Metric toggles with clear color swatches ── */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 20px 4px', flexWrap: 'wrap'
                }}>
                    {METRICS.map(m => {
                        const on = activeMetrics.includes(m.key);
                        return (
                            <button key={m.key} onClick={() => toggleMetric(m.key)} style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                padding: '6px 14px', borderRadius: 99, fontSize: 12.5, fontWeight: 700,
                                cursor: 'pointer', transition: 'all .18s',
                                border: `2px solid ${on ? m.color : B.borderSoft}`,
                                background: on ? `${m.color}18` : 'transparent',
                                color: on ? m.color : B.muted,
                            }}>
                                {/* Colored line swatch */}
                                <span style={{
                                    display: 'inline-block', width: 22, height: 3, borderRadius: 3,
                                    background: m.color,
                                    boxShadow: on ? `0 0 8px ${m.color}80` : 'none',
                                    transition: 'box-shadow .18s',
                                }} />
                                {m.label}
                            </button>
                        );
                    })}

                    {/* Color legend explainer */}
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
                        {activeM.map(m => (
                            <span key={m.key} style={{
                                fontSize: 11, color: B.muted,
                                display: 'flex', alignItems: 'center', gap: 5,
                            }}>
                                <span style={{
                                    width: 10, height: 10, borderRadius: '50%',
                                    background: m.color, display: 'inline-block',
                                    boxShadow: `0 0 6px ${m.color}80`,
                                }} />
                                {m.key}
                            </span>
                        ))}
                    </div>

                    {!hasData && (
                        <span style={{
                            fontSize: 11.5, color: B.amber.text, background: B.amber.bg,
                            border: `1px solid ${B.amber.border}`, padding: '4px 10px',
                            borderRadius: 99, fontWeight: 600,
                        }}>⚠ No order data yet</span>
                    )}
                </div>

                {/* ── Chart area ── */}
                <div style={{ padding: '8px 16px 20px' }}>
                    <ResponsiveContainer width="100%" height={300}>
                        {chartType === 'bar' ? (
                            <BarChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} />
                                <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
                                <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                                <Tooltip content={<GoldTooltip />} />
                                {activeM.map(m => (
                                    <Bar key={m.key} dataKey={m.key} fill={m.color}
                                        radius={[4, 4, 0, 0]}
                                        style={{ filter: `drop-shadow(0 0 6px ${m.color}50)` }} />
                                ))}
                            </BarChart>
                        ) : chartType === 'line' ? (
                            <LineChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} />
                                <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
                                <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                                <Tooltip content={<GoldTooltip />} />
                                {activeM.map(m => (
                                    <Line key={m.key} type="monotone" dataKey={m.key}
                                        stroke={m.color} strokeWidth={2.5}
                                        dot={{ r: 3.5, fill: m.color, stroke: B.surface2, strokeWidth: 2 }}
                                        activeDot={{
                                            r: 6, fill: m.color, stroke: B.surface, strokeWidth: 2,
                                            style: { filter: `drop-shadow(0 0 6px ${m.color})` }
                                        }} />
                                ))}
                            </LineChart>
                        ) : (
                            /* AREA — default */
                            <AreaChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                                <ChartDefs />
                                <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} />
                                <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
                                <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                                <Tooltip content={<GoldTooltip />} />
                                {activeM.map(m => (
                                    <Area key={m.key} type="monotone" dataKey={m.key}
                                        stroke={m.color} strokeWidth={2.5}
                                        fill={`url(#grad-${m.key})`}
                                        dot={{ r: 3.5, fill: m.color, stroke: B.surface2, strokeWidth: 2 }}
                                        activeDot={{ r: 6, fill: m.color, stroke: B.surface, strokeWidth: 2 }} />
                                ))}
                            </AreaChart>
                        )}
                    </ResponsiveContainer>
                </div>

                {/* ── Bottom color key bar ── */}
                <div style={{
                    display: 'flex', gap: 24, padding: '10px 20px 14px',
                    borderTop: `1px solid ${B.borderSoft}`, flexWrap: 'wrap',
                }}>
                    {METRICS.map(m => {
                        const on = activeMetrics.includes(m.key);
                        const total = chartData.reduce((s, d) => s + (d[m.key] || 0), 0);
                        return (
                            <div key={m.key} style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: on ? 1 : 0.4 }}>
                                <div style={{
                                    width: 32, height: 4, borderRadius: 4, background: m.color,
                                    boxShadow: on ? `0 0 8px ${m.color}60` : 'none'
                                }} />
                                <div>
                                    <p style={{ color: B.muted, fontSize: 10.5, margin: 0, fontWeight: 600 }}>{m.label}</p>
                                    <p style={{ color: m.color, fontSize: 13, fontWeight: 800, margin: 0 }}>
                                        {m.key === 'Revenue'
                                            ? `$${total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
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
                            padding: '48px 24px', color: B.muted, fontSize: 13
                        }}>No product data yet</div>
                    ) : (
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: 24, padding: '16px 20px', flexWrap: 'wrap'
                        }}>

                            {/* Pie with glowing segments */}
                            <div style={{ position: 'relative' }}>
                                <PieChart width={170} height={170}>
                                    <Pie data={pieData} cx={81} cy={81}
                                        innerRadius={46} outerRadius={76}
                                        dataKey="value" paddingAngle={3} strokeWidth={0}>
                                        {pieData.map((e, i) => (
                                            <Cell key={i} fill={e.color}
                                                style={{ filter: `drop-shadow(0 0 6px ${e.color}50)` }} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            background: B.surface2, border: `1px solid ${B.border}`,
                                            borderRadius: 10, fontSize: 12.5
                                        }}
                                        labelStyle={{ color: B.gold }}
                                        itemStyle={{ color: B.cream }}
                                        formatter={(v, n, p) => [`${p.payload.pct}% (${v})`, p.payload.name]}
                                    />
                                </PieChart>
                            </div>

                            {/* Legend — each item shows its unique color clearly */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                                {pieData.map(d => (
                                    <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        {/* Colored swatch rectangle (easier to see than a dot) */}
                                        <div style={{
                                            width: 14, height: 14, borderRadius: 4,
                                            background: d.color, flexShrink: 0,
                                            boxShadow: `0 0 8px ${d.color}60`,
                                        }} />
                                        <div>
                                            <p style={{ color: B.cream, fontSize: 13, fontWeight: 700, margin: 0 }}>{d.name}</p>
                                            <p style={{ color: d.color, fontSize: 11.5, margin: '1px 0 0', fontWeight: 600 }}>
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
                            padding: '48px 24px', color: B.muted, fontSize: 13
                        }}>No order data yet</div>
                    ) : (
                        <div style={{ padding: '12px 16px 16px' }}>
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart layout="vertical" data={topProducts}
                                    margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} horizontal={false} />
                                    <XAxis type="number" tick={axisTick} axisLine={false} tickLine={false} />
                                    <YAxis type="category" dataKey="name"
                                        tick={{ fontSize: 11.5, fill: B.creamSoft }}
                                        axisLine={false} tickLine={false} width={140} />
                                    <Tooltip
                                        contentStyle={{
                                            background: B.surface2, border: `1px solid ${B.border}`,
                                            borderRadius: 10, fontSize: 12.5
                                        }}
                                        labelStyle={{ color: B.gold }}
                                        itemStyle={{ color: B.cream }}
                                        formatter={v => [`${v} units`, 'Ordered']}
                                        cursor={{ fill: 'rgba(201,168,76,0.05)' }}
                                    />
                                    {/* Each bar gets its own unique color Cell */}
                                    <Bar dataKey="sales" radius={[0, 5, 5, 0]}>
                                        {topProducts.map((p, i) => (
                                            <Cell key={i} fill={p.color}
                                                style={{ filter: `drop-shadow(0 0 5px ${p.color}50)` }} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                            {/* Product color legend below chart */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', marginTop: 10 }}>
                                {topProducts.map((p, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <div style={{
                                            width: 10, height: 10, borderRadius: 3,
                                            background: p.color, flexShrink: 0,
                                            boxShadow: `0 0 6px ${p.color}60`
                                        }} />
                                        <span style={{ color: B.muted, fontSize: 10.5 }}>{p.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </SectionCard>
            </div>

            <style>{`
                @keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}
                @media(max-width:700px){ .analytics-grid{grid-template-columns:1fr !important;} }
            `}</style>
        </div>
    );
};

export default Analytics;
