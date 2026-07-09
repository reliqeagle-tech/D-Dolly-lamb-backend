import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    AreaChart, Area, BarChart, Bar, LineChart, Line,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell,
} from 'recharts';
import {
    TbTrendingUp, TbTrendingDown, TbDownload, TbRefresh,
    TbCalendar, TbCurrencyDollar, TbShoppingCart, TbPackage,
    TbUsers, TbChartBar, TbChartPie, TbChartLine,
    TbArrowUpRight, TbArrowDownRight, TbCrown,
    TbFileReport, TbPrinter, TbMail, TbFilter,
    TbCircleCheck, TbTruck, TbClock, TbX,
    TbStarFilled, TbPercentage, TbChevronDown,
    TbSparkles, TbBolt,
} from 'react-icons/tb';
import { backendUrl } from '../../App';

/* ════════════════════════════════════════════════════════════
   D DOLLY LAMB — REPORTS  |  Light Luxury Theme
   ── Color tokens mirrored from Sidebar.jsx ──────────────────
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
════════════════════════════════════════════════════════════ */

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

    /* ── Chart palette — 7 perceptually distinct on light bg ── */
    pie: [
        '#1A7A4A',  // Forest Green
        '#2563EB',  // Royal Blue
        '#B8985A',  // Champagne Gold
        '#DC2626',  // Crimson
        '#7C3AED',  // Violet
        '#0891B2',  // Teal
        '#D97706',  // Amber
    ],

    /* ── Status palettes ── */
    emerald: { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', dot: '#10B981' },
    blue: { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE', dot: '#3B82F6' },
    amber: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', dot: '#F59E0B' },
    red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444' },
};

const fmt$ = n => `$${Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
const fmtN = n => Number(n || 0).toLocaleString('en-US');
const pct = (a, b) => b > 0 ? Math.round(((a - b) / b) * 100) : (a > 0 ? 100 : 0);
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* ── Axis tick & grid ── */
const TICK = { fontSize: 11, fill: B.navyGhost };
const GRID = B.border;

/* ══════════════════════════════════════════════════════════
   MICRO COMPONENTS
══════════════════════════════════════════════════════════ */

/** Custom chart tooltip */
const ChartTip = ({ active, payload, label, money = false }) => {
    if (!active || !payload?.length) return null;
    return (
        <div style={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 12, padding: '10px 14px', fontSize: 12.5, boxShadow: '0 8px 24px rgba(28,43,58,0.12)' }}>
            <p style={{ color: B.green, fontWeight: 700, marginBottom: 8, fontFamily: 'Georgia, serif' }}>{label}</p>
            {payload.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                    <span style={{ color: B.navySoft }}>{p.name}:</span>
                    <span style={{ color: B.navy, fontWeight: 700 }}>{money ? fmt$(p.value) : fmtN(p.value)}</span>
                </div>
            ))}
        </div>
    );
};

/** Sparkline */
const Spark = ({ data, color = B.green }) => (
    <ResponsiveContainer width="100%" height={46}>
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id={`sg${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke={color} strokeWidth={2}
                fill={`url(#sg${color.replace('#', '')})`} dot={false} />
        </AreaChart>
    </ResponsiveContainer>
);

/** KPI Card */
const KPI = ({ icon, label, value, change, sub, sparkData, loading }) => {
    const [hov, setHov] = useState(false);
    const up = change >= 0;
    return (
        <div
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                background: B.surfaceCard,
                border: `1px solid ${hov ? B.greenBdr : B.border}`,
                borderRadius: 14, padding: '16px 18px',
                transition: 'all .2s',
                boxShadow: hov ? '0 6px 20px rgba(28,43,58,0.10)' : '0 1px 4px rgba(28,43,58,0.06)',
                transform: hov ? 'translateY(-1px)' : 'none',
            }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: B.greenBg, border: `1px solid ${B.greenBdr}` }}>
                    {React.cloneElement(icon, { size: 18, style: { color: B.green } })}
                </div>
                {change !== undefined && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 99, background: up ? B.emerald.bg : B.red.bg, color: up ? B.emerald.text : B.red.text, border: `1px solid ${up ? B.emerald.border : B.red.border}` }}>
                        {up ? <TbArrowUpRight size={11} /> : <TbArrowDownRight size={11} />}{Math.abs(change)}%
                    </span>
                )}
            </div>
            <p style={{ fontSize: 11, color: B.navyGhost, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>{label}</p>
            <p style={{ fontSize: 24, fontWeight: 800, color: B.navy, letterSpacing: -0.5, lineHeight: 1.1, marginTop: 3, fontFamily: 'Georgia, serif' }}>
                {loading
                    ? <span style={{ display: 'inline-block', width: 80, height: 24, borderRadius: 6, background: B.surface2, animation: 'pulse 1.5s infinite' }} />
                    : value}
            </p>
            {sub && <p style={{ fontSize: 11, color: B.navyGhost, marginTop: 4 }}>{sub}</p>}
            {sparkData && <div style={{ marginTop: 10, marginLeft: -4, marginRight: -4 }}><Spark data={sparkData} color={B.green} /></div>}
        </div>
    );
};

/** Section card wrapper */
const Card = ({ title, subtitle, children, toolbar, style = {} }) => (
    <div style={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 1px 4px rgba(28,43,58,0.06)', ...style }}>
        {(title || toolbar) && (
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '14px 20px', borderBottom: `1px solid ${B.border}`, background: B.surface, flexWrap: 'wrap', gap: 8 }}>
                <div>
                    <h2 style={{ fontSize: 13.5, fontWeight: 700, color: B.navy, margin: 0, fontFamily: 'Georgia, serif' }}>{title}</h2>
                    {subtitle && <p style={{ fontSize: 11, color: B.navyGhost, marginTop: 3, letterSpacing: '0.02em' }}>{subtitle}</p>}
                </div>
                {toolbar}
            </div>
        )}
        {children}
    </div>
);

/** Range toggle button — matches sidebar segment style */
const RangeBtn = ({ label, active, onClick }) => (
    <button onClick={onClick}
        style={{
            padding: '5px 12px', borderRadius: 7, fontSize: 11.5, fontWeight: 700,
            cursor: 'pointer', border: 'none', transition: 'all .15s',
            background: active ? B.green : 'transparent',
            color: active ? '#FFFFFF' : B.navyGhost,
            letterSpacing: '0.04em',
        }}>
        {label}
    </button>
);

/* ══════════════════════════════════════════════════════════
   MAIN REPORTS PAGE
══════════════════════════════════════════════════════════ */
const Reports = ({ token }) => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [range, setRange] = useState('year');

    const fetchData = useCallback(async () => {
        if (!token) return; setLoading(true);
        try {
            const [ordRes, prodRes] = await Promise.all([
                axios.post(backendUrl + '/api/order/list', {}, { headers: { token } }),
                axios.get(backendUrl + '/api/product/list', { headers: { token } }),
            ]);
            if (ordRes.data.success) setOrders(ordRes.data.orders || []);
            if (prodRes.data.success) setProducts(prodRes.data.products || []);
        } catch (e) { toast.error(e?.message || 'Failed to load report data'); }
        finally { setLoading(false); }
    }, [token]);

    useEffect(() => { fetchData(); }, [fetchData]);

    const rangeStart = useMemo(() => {
        const now = new Date();
        if (range === 'week') return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        if (range === 'month') return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        if (range === 'quarter') return new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
        if (range === 'year') return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        return new Date(0);
    }, [range]);

    const filteredOrders = useMemo(() =>
        orders.filter(o => o.date && new Date(o.date) >= rangeStart),
        [orders, rangeStart]);

    const kpi = useMemo(() => {
        const now = new Date(), curY = now.getFullYear();
        const amt = o => Number(o.finalAmount) || Number(o.amount) || 0;
        const st = (o, ...ss) => ss.some(s => (o.status || '').toLowerCase() === s.toLowerCase());
        const gmv = filteredOrders.reduce((s, o) => s + amt(o), 0);
        const paid = filteredOrders.filter(o => o.payment).reduce((s, o) => s + amt(o), 0);
        const avgOrder = filteredOrders.length > 0 ? gmv / filteredOrders.length : 0;
        const delivered = filteredOrders.filter(o => st(o, 'Delivered')).length;
        const cancelled = filteredOrders.filter(o => st(o, 'Cancelled')).length;
        const pending = filteredOrders.filter(o => st(o, 'Order Placed', 'Packing', 'pending')).length;
        const inTransit = filteredOrders.filter(o => st(o, 'Shipped', 'Out for delivery')).length;
        const deliveryRate = filteredOrders.length > 0 ? Math.round((delivered / filteredOrders.length) * 100) : 0;
        const cancelRate = filteredOrders.length > 0 ? Math.round((cancelled / filteredOrders.length) * 100) : 0;
        const rangeMs = now.getTime() - rangeStart.getTime();
        const prevStart = new Date(rangeStart.getTime() - rangeMs);
        const prevOrders = orders.filter(o => o.date && new Date(o.date) >= prevStart && new Date(o.date) < rangeStart);
        const prevGMV = prevOrders.reduce((s, o) => s + amt(o), 0);
        const revenueByMonth = MONTHS.map((_, mi) => ({ v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).reduce((s, o) => s + amt(o), 0) }));
        const ordersByMonth = MONTHS.map((_, mi) => ({ v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).length }));
        return { gmv, paid, avgOrder, delivered, cancelled, pending, inTransit, deliveryRate, cancelRate, totalOrders: filteredOrders.length, gmvChange: pct(gmv, prevGMV), ordersChange: pct(filteredOrders.length, prevOrders.length), revenueByMonth, ordersByMonth, totalProducts: products.length };
    }, [filteredOrders, orders, products, rangeStart]);

    const revenueChart = useMemo(() => {
        const map = {}; MONTHS.forEach(m => { map[m] = { name: m, Revenue: 0, Orders: 0, Paid: 0 }; });
        filteredOrders.forEach(o => {
            if (!o.date) return;
            const m = MONTHS[new Date(o.date).getMonth()]; if (!map[m]) return;
            const a = Number(o.finalAmount) || Number(o.amount) || 0;
            map[m].Revenue += a; map[m].Orders += 1; if (o.payment) map[m].Paid += a;
        });
        return MONTHS.map(m => map[m]);
    }, [filteredOrders]);

    const weeklyChart = useMemo(() => {
        const now = new Date();
        const weeks = Array.from({ length: 12 }, (_, i) => {
            const off = 11 - i; const start = new Date(now);
            const dow = (now.getDay() + 6) % 7;
            start.setDate(now.getDate() - dow - off * 7); start.setHours(0, 0, 0, 0);
            const end = new Date(start); end.setDate(start.getDate() + 6); end.setHours(23, 59, 59, 999);
            return { name: start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), Revenue: 0, Orders: 0, start: start.getTime(), end: end.getTime() };
        });
        filteredOrders.forEach(o => {
            if (!o.date) return;
            const ts = new Date(o.date).getTime();
            const w = weeks.find(wk => ts >= wk.start && ts <= wk.end);
            if (!w) return; w.Revenue += Number(o.finalAmount) || Number(o.amount) || 0; w.Orders += 1;
        });
        return weeks.map(({ name, Revenue, Orders }) => ({ name, Revenue, Orders }));
    }, [filteredOrders]);

    const categoryData = useMemo(() => {
        const map = {};
        products.forEach(p => { const cat = p.category || 'Other'; if (!map[cat]) map[cat] = { name: cat, products: 0, revenue: 0 }; map[cat].products += 1; });
        filteredOrders.forEach(o => { (o.items || []).forEach(it => { const prod = products.find(p => p.name === it.name); const cat = prod?.category || 'Other'; if (map[cat]) map[cat].revenue += Number(o.finalAmount) || 0; }); });
        return Object.values(map).sort((a, b) => b.revenue - a.revenue).slice(0, 7);
    }, [products, filteredOrders]);

    const topProducts = useMemo(() => {
        const map = {};
        filteredOrders.forEach(o => {
            const oa = Number(o.finalAmount) || Number(o.amount) || 0;
            (o.items || []).forEach(it => {
                const name = it.name || 'Unknown';
                if (!map[name]) map[name] = { name, units: 0, revenue: 0 };
                const q = typeof it.quantity === 'object' ? (it.quantity?.quantity ?? 1) : (Number(it.quantity) || 1);
                map[name].units += q;
                map[name].revenue += (it.price ? it.price * q : oa / ((o.items || []).length || 1));
            });
        });
        return Object.values(map).sort((a, b) => b.revenue - a.revenue).slice(0, 8)
            .map(p => ({ ...p, name: p.name.length > 26 ? p.name.slice(0, 25) + '…' : p.name, revenue: Math.round(p.revenue) }));
    }, [filteredOrders]);

    const statusData = useMemo(() => [
        { name: 'Delivered', value: kpi.delivered, color: B.emerald.dot },
        { name: 'In Transit', value: kpi.inTransit, color: B.blue.dot },
        { name: 'Pending', value: kpi.pending, color: B.amber.dot },
        { name: 'Cancelled', value: kpi.cancelled, color: B.red.dot },
    ].filter(d => d.value > 0), [kpi]);

    const paymentData = useMemo(() => {
        let online = 0, cod = 0;
        filteredOrders.forEach(o => { if (o.paymentMethod === 'stripe' || o.paymentMethod === 'razorpay' || o.payment) online++; else cod++; });
        return [
            { name: 'Online', value: online, color: B.green },
            { name: 'COD', value: cod, color: B.gold },
        ].filter(d => d.value > 0);
    }, [filteredOrders]);

    const dailyData = useMemo(() => {
        const result = [];
        for (let i = 29; i >= 0; i--) {
            const d = new Date(); d.setDate(d.getDate() - i); d.setHours(0, 0, 0, 0);
            const next = new Date(d); next.setDate(d.getDate() + 1);
            const rev = filteredOrders.filter(o => o.date && new Date(o.date) >= d && new Date(o.date) < next).reduce((s, o) => s + (Number(o.finalAmount) || Number(o.amount) || 0), 0);
            result.push({ name: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), Revenue: Math.round(rev) });
        }
        return result;
    }, [filteredOrders]);

    const exportCSV = () => {
        const rows = [['Date', 'Order ID', 'Customer', 'Status', 'Payment', 'Amount']];
        filteredOrders.forEach(o => { const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer'; rows.push([o.date ? new Date(o.date).toLocaleDateString('en-US') : '—', o._id?.slice(-8) || '—', name, o.status || '—', o.payment ? 'Paid' : 'Unpaid', Number(o.finalAmount) || Number(o.amount) || 0]); });
        const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `ddl-report-${new Date().toISOString().slice(0, 10)}.csv`; a.click(); URL.revokeObjectURL(url); toast.success('Report exported!');
    };

    const exportSummaryCSV = () => {
        const rows = [['Metric', 'Value'], ['Total GMV', kpi.gmv], ['Paid Revenue', kpi.paid], ['Total Orders', kpi.totalOrders], ['Avg Order Value', Math.round(kpi.avgOrder)], ['Delivered', kpi.delivered], ['Cancelled', kpi.cancelled], ['Delivery Rate', kpi.deliveryRate + '%'], ['Total Products', kpi.totalProducts]];
        const csv = rows.map(r => r.join(',')).join('\n'); const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `ddl-summary-${new Date().toISOString().slice(0, 10)}.csv`; a.click(); URL.revokeObjectURL(url); toast.success('Summary exported!');
    };

    /* ── Action button — matches sidebar CTA ── */
    const ActionBtn = ({ onClick, children, primary = false }) => {
        const [hov, setHov] = useState(false);
        return (
            <button onClick={onClick}
                onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '7px 14px', borderRadius: 9, cursor: 'pointer',
                    fontSize: 12, fontWeight: 700, transition: 'all .15s',
                    letterSpacing: '0.03em',
                    border: `1px solid ${primary ? B.green : B.border}`,
                    background: primary ? (hov ? B.greenLight : B.green) : (hov ? B.surface2 : B.surfaceCard),
                    color: primary ? '#FFFFFF' : (hov ? B.navyMid : B.navySoft),
                }}>
                {children}
            </button>
        );
    };

    /* ══════════════════════════════════════════
       RENDER
    ══════════════════════════════════════════ */
    return (
        <div style={{ minHeight: '100vh', background: B.bg, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
            <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes spinR{to{transform:rotate(360deg)}}`}</style>

            {/* ══ PAGE HEADER BANNER ══ */}
            <div style={{ position: 'relative', overflow: 'hidden', background: B.surfaceCard, borderBottom: `1px solid ${B.border}`, padding: '18px 24px', boxShadow: '0 2px 8px rgba(28,43,58,0.06)' }}>
                {/* Green top accent line — mirrors sidebar active item */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${B.green}, ${B.greenLight}, ${B.greenBdr})` }} />

                {/* Subtle decorative bg element */}
                <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: B.greenBg, opacity: 0.5, pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, position: 'relative' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <div style={{ width: 34, height: 34, borderRadius: 9, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <TbCrown size={16} style={{ color: B.green }} />
                            </div>
                            <span style={{ fontSize: 10.5, fontWeight: 700, color: B.green, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Business Reports</span>
                        </div>
                        <h1 style={{ fontSize: 24, fontWeight: 900, color: B.navy, letterSpacing: -0.5, marginBottom: 5, fontFamily: 'Georgia, serif' }}>
                            Business Intelligence
                        </h1>
                        <p style={{ color: B.navyGhost, fontSize: 13 }}>
                            {loading
                                ? 'Loading analytics…'
                                : `${fmtN(kpi.totalOrders)} orders · ${fmt$(kpi.gmv)} GMV · ${kpi.deliveryRate}% delivery rate`}
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                        {/* Range selector — matches sidebar segment toggle */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 3, background: B.surface, border: `1px solid ${B.border}`, borderRadius: 10, padding: 4 }}>
                            {[['week', '7D'], ['month', '1M'], ['quarter', '3M'], ['year', '1Y'], ['all', 'All']].map(([v, l]) => (
                                <RangeBtn key={v} label={l} active={range === v} onClick={() => setRange(v)} />
                            ))}
                        </div>

                        {/* Refresh icon button — matches sidebar bell btn */}
                        <button onClick={fetchData} title="Refresh"
                            style={{ width: 36, height: 36, borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navyGhost, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = B.greenBdr; e.currentTarget.style.color = B.green; e.currentTarget.style.background = B.greenBg; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.navyGhost; e.currentTarget.style.background = B.surfaceCard; }}>
                            <TbRefresh size={16} style={{ animation: loading ? 'spinR 1s linear infinite' : undefined }} />
                        </button>

                        <ActionBtn onClick={exportCSV} primary><TbDownload size={13} /> Export Orders</ActionBtn>
                        <ActionBtn onClick={exportSummaryCSV}><TbFileReport size={13} /> Summary</ActionBtn>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '20px 20px 48px', display: 'flex', flexDirection: 'column', gap: 18 }}>

                {/* ══ KPI GRID ══ */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="kpi-grid">
                    <KPI icon={<TbCurrencyDollar />} label="Total GMV" value={loading ? '…' : fmt$(kpi.gmv)} change={kpi.gmvChange} sub={`${fmt$(kpi.paid)} collected`} sparkData={kpi.revenueByMonth} loading={loading} />
                    <KPI icon={<TbShoppingCart />} label="Total Orders" value={loading ? '…' : fmtN(kpi.totalOrders)} change={kpi.ordersChange} sub={`Avg ${fmt$(Math.round(kpi.avgOrder))} per order`} sparkData={kpi.ordersByMonth} loading={loading} />
                    <KPI icon={<TbCircleCheck />} label="Delivery Rate" value={loading ? '…' : `${kpi.deliveryRate}%`} change={undefined} sub={`${fmtN(kpi.delivered)} delivered · ${fmtN(kpi.cancelled)} cancelled`} loading={loading} />
                    <KPI icon={<TbPackage />} label="Avg Order Value" value={loading ? '…' : fmt$(Math.round(kpi.avgOrder))} change={undefined} sub={`${fmtN(kpi.totalProducts)} products listed`} loading={loading} />
                </div>

                {/* ══ STATUS MINI-STRIP ══ */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
                    {[
                        { label: 'Delivered', val: kpi.delivered, tok: B.emerald, icon: <TbCircleCheck /> },
                        { label: 'In Transit', val: kpi.inTransit, tok: B.blue, icon: <TbTruck /> },
                        { label: 'Pending', val: kpi.pending, tok: B.amber, icon: <TbClock /> },
                        { label: 'Cancelled', val: kpi.cancelled, tok: B.red, icon: <TbX /> },
                    ].map(s => (
                        <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderRadius: 12, background: B.surfaceCard, border: `1px solid ${B.border}`, boxShadow: '0 1px 4px rgba(28,43,58,0.06)' }}>
                            <div style={{ width: 36, height: 36, borderRadius: 9, background: s.tok.bg, border: `1px solid ${s.tok.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                {React.cloneElement(s.icon, { size: 15, style: { color: s.tok.dot } })}
                            </div>
                            <div>
                                <p style={{ fontSize: 10, fontWeight: 700, color: B.navyGhost, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 2 }}>{s.label}</p>
                                <p style={{ fontSize: 20, fontWeight: 800, color: B.navy, lineHeight: 1, fontFamily: 'Georgia, serif' }}>{loading ? '…' : fmtN(s.val)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ══ REVENUE AREA CHART + STATUS DONUT ══ */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>

                    {/* Revenue area chart */}
                    <Card title="Revenue Overview" subtitle="Monthly GMV vs collected revenue"
                        toolbar={
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, color: B.navySoft }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                    <span style={{ width: 20, height: 3, borderRadius: 3, background: B.green, display: 'inline-block' }} /> GMV
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                    <span style={{ width: 20, height: 3, borderRadius: 3, background: B.emerald.dot, display: 'inline-block' }} /> Paid
                                </span>
                            </div>
                        }>
                        <div style={{ padding: '12px 16px 18px', background: B.surfaceCard }}>
                            <ResponsiveContainer width="100%" height={270}>
                                <AreaChart data={revenueChart} margin={{ top: 5, right: 10, left: 5, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={B.green} stopOpacity={0.18} />
                                            <stop offset="100%" stopColor={B.green} stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="gPaid" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={B.emerald.dot} stopOpacity={0.15} />
                                            <stop offset="100%" stopColor={B.emerald.dot} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                                    <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
                                    <YAxis tick={TICK} axisLine={false} tickLine={false} />
                                    <Tooltip content={<ChartTip money />} />
                                    <Area type="monotone" dataKey="Revenue" name="GMV" stroke={B.green} strokeWidth={2.5} fill="url(#gRev)" dot={false} activeDot={{ r: 4, fill: B.green, stroke: '#fff', strokeWidth: 2 }} />
                                    <Area type="monotone" dataKey="Paid" name="Paid" stroke={B.emerald.dot} strokeWidth={2} fill="url(#gPaid)" dot={false} activeDot={{ r: 4, fill: B.emerald.dot, stroke: '#fff', strokeWidth: 2 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Order status donut */}
                    <Card title="Order Status" subtitle="Distribution across all orders">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: 14, background: B.surfaceCard }}>
                            <div style={{ position: 'relative' }}>
                                <PieChart width={170} height={170}>
                                    <Pie data={statusData} cx={81} cy={81} innerRadius={48} outerRadius={76} dataKey="value" paddingAngle={3} strokeWidth={2} stroke="#FFFFFF">
                                        {statusData.map((d, i) => <Cell key={i} fill={d.color} />)}
                                    </Pie>
                                    <Tooltip contentStyle={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 10, fontSize: 12, boxShadow: '0 4px 14px rgba(28,43,58,0.10)' }} itemStyle={{ color: B.navy }} labelStyle={{ color: B.green }} formatter={(v, n) => [fmtN(v), n]} />
                                </PieChart>
                            </div>
                            <div style={{ width: '100%', padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 9 }}>
                                {statusData.map(d => (
                                    <div key={d.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <span style={{ width: 10, height: 10, borderRadius: 3, background: d.color, flexShrink: 0 }} />
                                            <span style={{ fontSize: 12.5, fontWeight: 500, color: B.navyMid }}>{d.name}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <span style={{ fontSize: 12.5, fontWeight: 800, color: B.navy }}>{fmtN(d.value)}</span>
                                            <span style={{ fontSize: 11, color: B.navyGhost }}>{kpi.totalOrders > 0 ? Math.round((d.value / kpi.totalOrders) * 100) : 0}%</span>
                                        </div>
                                    </div>
                                ))}
                                {statusData.length === 0 && <p style={{ textAlign: 'center', fontSize: 12, color: B.navyGhost }}>No order data</p>}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* ══ WEEKLY BAR + PAYMENT SPLIT ══ */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16 }}>

                    {/* Weekly bar */}
                    <Card title="Weekly Revenue Trend" subtitle="Last 12 weeks"
                        toolbar={
                            <span style={{ fontSize: 11, color: B.navySoft, padding: '3px 9px', background: B.greenBg, border: `1px solid ${B.greenBdr}`, borderRadius: 7, fontWeight: 600 }}>
                                Rolling 12-week
                            </span>
                        }>
                        <div style={{ padding: '12px 16px 18px', background: B.surfaceCard }}>
                            <ResponsiveContainer width="100%" height={230}>
                                <BarChart data={weeklyChart} margin={{ top: 5, right: 10, left: 5, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                                    <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
                                    <YAxis tick={TICK} axisLine={false} tickLine={false} />
                                    <Tooltip content={<ChartTip money />} />
                                    <Bar dataKey="Revenue" fill={B.green} radius={[4, 4, 0, 0]} fillOpacity={0.9} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Payment split */}
                    <Card title="Payment Methods" subtitle="Online vs Cash on Delivery">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: 14, background: B.surfaceCard }}>
                            <div style={{ position: 'relative' }}>
                                <PieChart width={155} height={155}>
                                    <Pie data={paymentData} cx={73} cy={73} innerRadius={42} outerRadius={68} dataKey="value" paddingAngle={5} strokeWidth={2} stroke="#FFFFFF">
                                        {paymentData.map((d, i) => <Cell key={i} fill={d.color} />)}
                                    </Pie>
                                    <Tooltip contentStyle={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 10, fontSize: 12, boxShadow: '0 4px 14px rgba(28,43,58,0.10)' }} itemStyle={{ color: B.navy }} labelStyle={{ color: B.green }} formatter={(v, n) => [fmtN(v), n]} />
                                </PieChart>
                            </div>
                            <div style={{ width: '100%', padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {paymentData.map(d => (
                                    <div key={d.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <span style={{ width: 11, height: 11, borderRadius: 3, background: d.color, flexShrink: 0 }} />
                                            <span style={{ fontSize: 13, fontWeight: 600, color: B.navyMid }}>{d.name}</span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <p style={{ fontSize: 13, fontWeight: 800, color: B.navy, margin: 0 }}>{fmtN(d.value)}</p>
                                            <p style={{ fontSize: 10.5, color: B.navyGhost, margin: 0 }}>{kpi.totalOrders > 0 ? Math.round((d.value / kpi.totalOrders) * 100) : 0}%</p>
                                        </div>
                                    </div>
                                ))}
                                {paymentData.length === 0 && <p style={{ textAlign: 'center', fontSize: 12, color: B.navyGhost }}>No data</p>}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* ══ DAILY LINE CHART ══ */}
                <Card title="Daily Revenue — Last 30 Days" subtitle="Day-by-day revenue breakdown"
                    toolbar={
                        <span style={{ fontSize: 11, color: B.navySoft, padding: '3px 9px', background: B.greenBg, border: `1px solid ${B.greenBdr}`, borderRadius: 7, fontWeight: 600 }}>
                            {fmtN(filteredOrders.length)} orders in range
                        </span>
                    }>
                    <div style={{ padding: '12px 16px 18px', background: B.surfaceCard }}>
                        <ResponsiveContainer width="100%" height={190}>
                            <LineChart data={dailyData} margin={{ top: 5, right: 10, left: 5, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                                <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} interval={Math.floor(dailyData.length / 6)} />
                                <YAxis tick={TICK} axisLine={false} tickLine={false} />
                                <Tooltip content={<ChartTip money />} />
                                <Line type="monotone" dataKey="Revenue" stroke={B.green} strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: B.green, stroke: '#fff', strokeWidth: 2 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* ══ TOP PRODUCTS + CATEGORY ══ */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="analytics-grid">

                    {/* Top Products horizontal bar */}
                    <Card title="Top Products by Revenue" subtitle="Most revenue-generating items">
                        {topProducts.length === 0 ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', color: B.navyGhost, fontSize: 13 }}>No order data in range</div>
                        ) : (
                            <div style={{ padding: '12px 16px 16px', background: B.surfaceCard }}>
                                <ResponsiveContainer width="100%" height={260}>
                                    <BarChart layout="vertical" data={topProducts} margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke={GRID} horizontal={false} />
                                        <XAxis type="number" tick={TICK} axisLine={false} tickLine={false} />
                                        <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: B.navyMid }} axisLine={false} tickLine={false} width={145} />
                                        <Tooltip contentStyle={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 10, fontSize: 12, boxShadow: '0 4px 14px rgba(28,43,58,0.10)' }} itemStyle={{ color: B.navy }} labelStyle={{ color: B.green }} formatter={v => [fmt$(v), 'Revenue']} cursor={{ fill: B.greenBg }} />
                                        <Bar dataKey="revenue" radius={[0, 5, 5, 0]}>
                                            {topProducts.map((_, i) => <Cell key={i} fill={B.pie[i % B.pie.length]} fillOpacity={0.88} />)}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                                {/* Product color legend */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 14px', marginTop: 10, paddingTop: 10, borderTop: `1px solid ${B.border}` }}>
                                    {topProducts.map((p, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 9, height: 9, borderRadius: 2, background: B.pie[i % B.pie.length], flexShrink: 0 }} />
                                            <span style={{ fontSize: 10, color: B.navySoft }}>{p.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Card>

                    {/* Category breakdown */}
                    <Card title="Sales by Category" subtitle="Product category performance">
                        {categoryData.length === 0 ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', color: B.navyGhost, fontSize: 13 }}>No product data</div>
                        ) : (
                            <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 13, background: B.surfaceCard }}>
                                {categoryData.map((cat, i) => {
                                    const maxRev = Math.max(...categoryData.map(c => c.revenue));
                                    const pctW = maxRev > 0 ? Math.round((cat.revenue / maxRev) * 100) : 0;
                                    return (
                                        <div key={cat.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <span style={{ width: 10, height: 10, borderRadius: 3, background: B.pie[i % B.pie.length], flexShrink: 0 }} />
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                                                    <span style={{ fontSize: 12.5, fontWeight: 600, color: B.navy, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cat.name}</span>
                                                    <span style={{ fontSize: 12, fontWeight: 700, color: B.navySoft, marginLeft: 8, flexShrink: 0 }}>{cat.revenue > 0 ? fmt$(cat.revenue) : `${cat.products} products`}</span>
                                                </div>
                                                <div style={{ height: 5, background: B.surface2, borderRadius: 99, overflow: 'hidden' }}>
                                                    <div style={{ height: '100%', borderRadius: 99, width: `${Math.max(pctW, 3)}%`, background: B.pie[i % B.pie.length], transition: 'width .7s', opacity: 0.85 }} />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Card>
                </div>

                {/* ══ SUMMARY TABLE ══ */}
                <Card title="Report Summary"
                    subtitle={`Data range: ${range === 'all' ? 'All time' : `Last ${range === 'week' ? '7 days' : range === 'month' ? '30 days' : range === 'quarter' ? '90 days' : '12 months'}`}`}
                    toolbar={
                        <button onClick={exportSummaryCSV}
                            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 9, border: `1px solid ${B.greenBdr}`, background: B.greenBg, color: B.green, fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = B.green; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = B.green; }}
                            onMouseLeave={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.color = B.green; e.currentTarget.style.borderColor = B.greenBdr; }}>
                            <TbDownload size={13} /> Export
                        </button>
                    }>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                            <thead>
                                <tr>
                                    {['Metric', 'Value', 'Details'].map(h => (
                                        <th key={h} style={{ padding: '10px 18px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: B.navyGhost, textTransform: 'uppercase', letterSpacing: 0.7, borderBottom: `1px solid ${B.border}`, background: B.surface, whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: 'Total GMV', val: fmt$(kpi.gmv), detail: `${fmt$(kpi.paid)} collected (${kpi.totalOrders > 0 ? Math.round((kpi.paid / kpi.gmv) * 100) : 0}% paid rate)` },
                                    { label: 'Total Orders', val: fmtN(kpi.totalOrders), detail: `${fmtN(kpi.delivered)} delivered · ${fmtN(kpi.cancelled)} cancelled` },
                                    { label: 'Avg Order Value', val: fmt$(Math.round(kpi.avgOrder)), detail: `Based on ${fmtN(kpi.totalOrders)} orders` },
                                    { label: 'Delivery Rate', val: `${kpi.deliveryRate}%`, detail: `${fmtN(kpi.inTransit)} in transit · ${fmtN(kpi.pending)} pending` },
                                    { label: 'Cancellation Rate', val: `${kpi.cancelRate}%`, detail: `${fmtN(kpi.cancelled)} of ${fmtN(kpi.totalOrders)} orders` },
                                    { label: 'Total Products', val: fmtN(kpi.totalProducts), detail: `${categoryData.length} categories` },
                                    { label: 'Top Category', val: categoryData[0]?.name || '—', detail: categoryData[0]?.products ? `${categoryData[0].products} products` : '—' },
                                ].map((row, i) => (
                                    <tr key={i}
                                        style={{ transition: 'background .15s' }}
                                        onMouseEnter={e => e.currentTarget.style.background = B.greenBg}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                        <td style={{ padding: '11px 18px', fontWeight: 600, color: B.navyMid, borderBottom: `1px solid ${B.border}` }}>{row.label}</td>
                                        <td style={{ padding: '11px 18px', fontWeight: 800, color: B.navy, borderBottom: `1px solid ${B.border}`, fontFamily: 'Georgia, serif' }}>
                                            {loading
                                                ? <span style={{ display: 'inline-block', width: 60, height: 14, borderRadius: 4, background: B.surface2, animation: 'pulse 1.5s infinite' }} />
                                                : row.val}
                                        </td>
                                        <td style={{ padding: '11px 18px', color: B.navyGhost, fontSize: 12, borderBottom: `1px solid ${B.border}` }}>{row.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

            </div>

            <style>{`
                @media(max-width:1100px){.kpi-grid{grid-template-columns:repeat(2,1fr)!important}}
                @media(max-width:640px) {.kpi-grid{grid-template-columns:1fr!important}.analytics-grid{grid-template-columns:1fr!important}}
            `}</style>
        </div>
    );
};

export default Reports;