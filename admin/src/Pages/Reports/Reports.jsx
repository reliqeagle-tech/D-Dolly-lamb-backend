import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { backendUrl } from '../../../App';
import {
    AreaChart, Area, BarChart, Bar, LineChart, Line,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend,
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

/* ══════════════════════════════════════════════
   UTILITY — top level
══════════════════════════════════════════════ */
const fmt$ = (n) => `$${Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
const fmtN = (n) => Number(n || 0).toLocaleString('en-US');
const pct = (a, b) => b > 0 ? Math.round(((a - b) / b) * 100) : (a > 0 ? 100 : 0);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const PIE_COLORS = ['#6366f1', '#f59e0b', '#10b981', '#ec4899', '#8b5cf6', '#06b6d4', '#f97316'];

/* Custom tooltip */
const ChartTip = ({ active, payload, label, money = false }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-2xl text-[12px]">
            <p className="text-gray-400 mb-2 font-semibold">{label}</p>
            {payload.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-gray-300">{p.name}:</span>
                    <span className="text-white font-bold">{money ? fmt$(p.value) : fmtN(p.value)}</span>
                </div>
            ))}
        </div>
    );
};

/* Sparkline mini chart */
const Spark = ({ data, color = '#6366f1', money = false }) => (
    <ResponsiveContainer width="100%" height={50}>
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id={`sg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke={color} strokeWidth={2}
                fill={`url(#sg-${color.replace('#', '')})`} dot={false} />
        </AreaChart>
    </ResponsiveContainer>
);

/* KPI Card */
const KPI = ({ icon, label, value, change, sub, color, sparkData, sparkColor, loading }) => {
    const up = change >= 0;
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
                {change !== undefined && (
                    <span className={`flex items-center gap-0.5 text-[11.5px] font-bold px-2 py-1 rounded-full
            ${up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
                        {up ? <TbArrowUpRight size={12} /> : <TbArrowDownRight size={12} />}
                        {Math.abs(change)}%
                    </span>
                )}
            </div>
            <p className="text-[12.5px] text-gray-500 font-medium">{label}</p>
            <p className="text-[26px] font-extrabold text-gray-900 tracking-tight leading-tight mt-0.5">
                {loading ? <span className="inline-block w-24 h-7 bg-gray-100 rounded animate-pulse" /> : value}
            </p>
            {sub && <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>}
            {sparkData && (
                <div className="-mx-1 mt-2">
                    <Spark data={sparkData} color={sparkColor || '#6366f1'} />
                </div>
            )}
        </div>
    );
};

/* Section card wrapper */
const Card = ({ title, subtitle, children, toolbar, className = '', gradient = false }) => (
    <div className={`rounded-2xl border shadow-sm overflow-hidden ${gradient ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700' : 'bg-white border-gray-100'} ${className}`}>
        {(title || toolbar) && (
            <div className={`flex items-start justify-between px-6 py-4 border-b ${gradient ? 'border-gray-700' : 'border-gray-100'}`}>
                <div>
                    <h2 className={`text-[15px] font-bold ${gradient ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
                    {subtitle && <p className={`text-[12px] mt-0.5 ${gradient ? 'text-gray-400' : 'text-gray-400'}`}>{subtitle}</p>}
                </div>
                {toolbar}
            </div>
        )}
        {children}
    </div>
);

/* Date range badge */
const RangeBadge = ({ label, active, onClick }) => (
    <button onClick={onClick}
        className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all border
      ${active ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
        {label}
    </button>
);

/* ══════════════════════════════════════════════
   MAIN REPORTS PAGE
══════════════════════════════════════════════ */
const Reports = ({ token }) => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [range, setRange] = useState('year'); // week | month | quarter | year | all

    /* ── Fetch ── */
    const fetchData = useCallback(async () => {
        if (!token) return;
        setLoading(true);
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

    /* ── Date range filter ── */
    const rangeStart = useMemo(() => {
        const now = new Date();
        if (range === 'week') return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        if (range === 'month') return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        if (range === 'quarter') return new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
        if (range === 'year') return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        return new Date(0); // all
    }, [range]);

    const filteredOrders = useMemo(() =>
        orders.filter(o => o.date && new Date(o.date) >= rangeStart),
        [orders, rangeStart]);

    /* ── Core KPIs ── */
    const kpi = useMemo(() => {
        const now = new Date();
        const curY = now.getFullYear(), curM = now.getMonth();
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

        // Prev period for comparison
        const rangeMs = now.getTime() - rangeStart.getTime();
        const prevStart = new Date(rangeStart.getTime() - rangeMs);
        const prevOrders = orders.filter(o => o.date && new Date(o.date) >= prevStart && new Date(o.date) < rangeStart);
        const prevGMV = prevOrders.reduce((s, o) => s + amt(o), 0);
        const prevCount = prevOrders.length;

        // Spark data: revenue by month for current year
        const revenueByMonth = MONTHS.map((_, mi) => ({
            v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi)
                .reduce((s, o) => s + amt(o), 0),
        }));
        const ordersByMonth = MONTHS.map((_, mi) => ({
            v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).length,
        }));

        return {
            gmv, paid, avgOrder, delivered, cancelled, pending, inTransit,
            deliveryRate, cancelRate, totalOrders: filteredOrders.length,
            gmvChange: pct(gmv, prevGMV),
            ordersChange: pct(filteredOrders.length, prevCount),
            revenueByMonth, ordersByMonth,
            totalProducts: products.length,
        };
    }, [filteredOrders, orders, products, rangeStart]);

    /* ── Revenue & orders chart (monthly) ── */
    const revenueChart = useMemo(() => {
        const map = {};
        MONTHS.forEach(m => { map[m] = { name: m, Revenue: 0, Orders: 0, Paid: 0 }; });
        filteredOrders.forEach(o => {
            if (!o.date) return;
            const m = MONTHS[new Date(o.date).getMonth()];
            if (!map[m]) return;
            const a = Number(o.finalAmount) || Number(o.amount) || 0;
            map[m].Revenue += a;
            map[m].Orders += 1;
            if (o.payment) map[m].Paid += a;
        });
        return MONTHS.map(m => map[m]);
    }, [filteredOrders]);

    /* ── Weekly revenue (last 12 weeks) ── */
    const weeklyChart = useMemo(() => {
        const now = new Date();
        const weeks = Array.from({ length: 12 }, (_, i) => {
            const off = 11 - i;
            const start = new Date(now);
            const dow = (now.getDay() + 6) % 7;
            start.setDate(now.getDate() - dow - off * 7);
            start.setHours(0, 0, 0, 0);
            const end = new Date(start);
            end.setDate(start.getDate() + 6);
            end.setHours(23, 59, 59, 999);
            return { name: start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), Revenue: 0, Orders: 0, start: start.getTime(), end: end.getTime() };
        });
        filteredOrders.forEach(o => {
            if (!o.date) return;
            const ts = new Date(o.date).getTime();
            const w = weeks.find(wk => ts >= wk.start && ts <= wk.end);
            if (!w) return;
            w.Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
            w.Orders += 1;
        });
        return weeks.map(({ name, Revenue, Orders }) => ({ name, Revenue, Orders }));
    }, [filteredOrders]);

    /* ── Category breakdown ── */
    const categoryData = useMemo(() => {
        const map = {};
        products.forEach(p => {
            const cat = p.category || 'Other';
            if (!map[cat]) map[cat] = { name: cat, products: 0, revenue: 0 };
            map[cat].products += 1;
        });
        // Enrich with revenue from orders
        filteredOrders.forEach(o => {
            (o.items || []).forEach(it => {
                // Try to match product category by name
                const prod = products.find(p => p.name === it.name);
                const cat = prod?.category || 'Other';
                if (map[cat]) map[cat].revenue += Number(o.finalAmount) || 0;
            });
        });
        return Object.values(map).sort((a, b) => b.revenue - a.revenue).slice(0, 7);
    }, [products, filteredOrders]);

    /* ── Top products by revenue ── */
    const topProducts = useMemo(() => {
        const map = {};
        filteredOrders.forEach(o => {
            const orderAmt = Number(o.finalAmount) || Number(o.amount) || 0;
            (o.items || []).forEach(it => {
                const name = it.name || 'Unknown';
                if (!map[name]) map[name] = { name, units: 0, revenue: 0 };
                const q = typeof it.quantity === 'object' ? (it.quantity?.quantity ?? 1) : (Number(it.quantity) || 1);
                map[name].units += q;
                map[name].revenue += (it.price ? it.price * q : orderAmt / ((o.items || []).length || 1));
            });
        });
        return Object.values(map).sort((a, b) => b.revenue - a.revenue).slice(0, 8)
            .map(p => ({ ...p, name: p.name.length > 26 ? p.name.slice(0, 25) + '…' : p.name, revenue: Math.round(p.revenue) }));
    }, [filteredOrders]);

    /* ── Order status breakdown ── */
    const statusData = useMemo(() => [
        { name: 'Delivered', value: kpi.delivered, color: '#10b981' },
        { name: 'In Transit', value: kpi.inTransit, color: '#6366f1' },
        { name: 'Pending', value: kpi.pending, color: '#f59e0b' },
        { name: 'Cancelled', value: kpi.cancelled, color: '#ef4444' },
    ].filter(d => d.value > 0), [kpi]);

    /* ── Payment method split ── */
    const paymentData = useMemo(() => {
        let online = 0, cod = 0;
        filteredOrders.forEach(o => {
            if (o.paymentMethod === 'stripe' || o.paymentMethod === 'razorpay' || o.payment) online++;
            else cod++;
        });
        return [
            { name: 'Online', value: online, color: '#6366f1' },
            { name: 'COD', value: cod, color: '#f59e0b' },
        ].filter(d => d.value > 0);
    }, [filteredOrders]);

    /* ── Daily revenue heatmap data (last 30 days) ── */
    const dailyData = useMemo(() => {
        const result = [];
        for (let i = 29; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            d.setHours(0, 0, 0, 0);
            const next = new Date(d); next.setDate(d.getDate() + 1);
            const rev = filteredOrders
                .filter(o => o.date && new Date(o.date) >= d && new Date(o.date) < next)
                .reduce((s, o) => s + (Number(o.finalAmount) || Number(o.amount) || 0), 0);
            result.push({ name: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), Revenue: Math.round(rev) });
        }
        return result;
    }, [filteredOrders]);

    /* ── Export PDF / CSV ── */
    const exportCSV = () => {
        const rows = [['Date', 'Order ID', 'Customer', 'Status', 'Payment', 'Amount']];
        filteredOrders.forEach(o => {
            const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
            rows.push([
                o.date ? new Date(o.date).toLocaleDateString('en-US') : '—',
                o._id?.slice(-8) || '—',
                name, o.status || '—',
                o.payment ? 'Paid' : 'Unpaid',
                Number(o.finalAmount) || Number(o.amount) || 0,
            ]);
        });
        const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `ll-leather-report-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click(); URL.revokeObjectURL(url);
        toast.success('Report exported!');
    };

    const exportSummaryCSV = () => {
        const rows = [
            ['Metric', 'Value'],
            ['Total GMV', kpi.gmv],
            ['Paid Revenue', kpi.paid],
            ['Total Orders', kpi.totalOrders],
            ['Avg Order Value', Math.round(kpi.avgOrder)],
            ['Delivered', kpi.delivered],
            ['Cancelled', kpi.cancelled],
            ['Delivery Rate', kpi.deliveryRate + '%'],
            ['Total Products', kpi.totalProducts],
        ];
        const csv = rows.map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `ll-leather-summary-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click(); URL.revokeObjectURL(url);
        toast.success('Summary exported!');
    };

    /* ══════════════════════════════════════════════
       RENDER
    ══════════════════════════════════════════════ */
    return (
        <div className="min-h-screen bg-[#f7f7f5]">

            {/* ── Premium Header Banner ── */}
            <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-[#1a1040] to-gray-900 px-6 py-8 mb-6">
                {/* Decorative glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-violet-600/15 rounded-full blur-3xl" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                </div>

                <div className="relative max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-2.5 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                                <TbCrown size={16} className="text-amber-400" />
                            </div>
                            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Premium Reports</span>
                        </div>
                        <h1 className="text-[28px] font-extrabold text-white tracking-tight">
                            Business Intelligence
                        </h1>
                        <p className="text-gray-400 text-[13.5px] mt-1">
                            {loading
                                ? 'Loading analytics…'
                                : `${fmtN(kpi.totalOrders)} orders · ${fmt$(kpi.gmv)} GMV · ${kpi.deliveryRate}% delivery rate`}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        {/* Date range selector */}
                        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
                            {[['week', '7D'], ['month', '1M'], ['quarter', '3M'], ['year', '1Y'], ['all', 'All']].map(([v, l]) => (
                                <button key={v} onClick={() => setRange(v)}
                                    className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all
                    ${range === v ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
                                    {l}
                                </button>
                            ))}
                        </div>

                        <button onClick={fetchData}
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white transition-all"
                            title="Refresh">
                            <TbRefresh size={16} className={loading ? 'animate-spin' : ''} />
                        </button>

                        <button onClick={exportCSV}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 border border-indigo-500 text-white text-[12.5px] font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40">
                            <TbDownload size={15} /> Export Orders
                        </button>

                        <button onClick={exportSummaryCSV}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-[12.5px] font-semibold hover:bg-white/20 transition-all">
                            <TbFileReport size={15} /> Summary
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 pb-12 space-y-6">

                {/* ── KPI Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <KPI
                        icon={<TbCurrencyDollar size={20} className="text-indigo-600" />}
                        label="Total GMV" color="bg-indigo-50"
                        value={loading ? '…' : fmt$(kpi.gmv)}
                        change={kpi.gmvChange}
                        sub={`${fmt$(kpi.paid)} collected`}
                        sparkData={kpi.revenueByMonth} sparkColor="#6366f1"
                        loading={loading}
                    />
                    <KPI
                        icon={<TbShoppingCart size={20} className="text-emerald-600" />}
                        label="Total Orders" color="bg-emerald-50"
                        value={loading ? '…' : fmtN(kpi.totalOrders)}
                        change={kpi.ordersChange}
                        sub={`Avg ${fmt$(Math.round(kpi.avgOrder))} per order`}
                        sparkData={kpi.ordersByMonth} sparkColor="#10b981"
                        loading={loading}
                    />
                    <KPI
                        icon={<TbCircleCheck size={20} className="text-violet-600" />}
                        label="Delivery Rate" color="bg-violet-50"
                        value={loading ? '…' : `${kpi.deliveryRate}%`}
                        change={undefined}
                        sub={`${fmtN(kpi.delivered)} delivered · ${fmtN(kpi.cancelled)} cancelled`}
                        loading={loading}
                    />
                    <KPI
                        icon={<TbPackage size={20} className="text-amber-600" />}
                        label="Avg Order Value" color="bg-amber-50"
                        value={loading ? '…' : fmt$(Math.round(kpi.avgOrder))}
                        change={undefined}
                        sub={`${fmtN(kpi.totalProducts)} products listed`}
                        loading={loading}
                    />
                </div>

                {/* ── Status mini-strip ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { label: 'Delivered', val: kpi.delivered, icon: <TbCircleCheck size={15} className="text-emerald-600" />, bg: 'bg-emerald-50 border-emerald-100' },
                        { label: 'In Transit', val: kpi.inTransit, icon: <TbTruck size={15} className="text-blue-600" />, bg: 'bg-blue-50 border-blue-100' },
                        { label: 'Pending', val: kpi.pending, icon: <TbClock size={15} className="text-amber-600" />, bg: 'bg-amber-50 border-amber-100' },
                        { label: 'Cancelled', val: kpi.cancelled, icon: <TbX size={15} className="text-red-500" />, bg: 'bg-red-50 border-red-100' },
                    ].map(s => (
                        <div key={s.label} className={`flex items-center gap-3 p-3.5 rounded-xl border ${s.bg}`}>
                            <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">{s.icon}</div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">{s.label}</p>
                                <p className="text-[20px] font-extrabold text-gray-900 leading-none">{loading ? '…' : fmtN(s.val)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Main Revenue Chart (dark) + Monthly Orders ── */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                    {/* Revenue area chart — spans 2 cols */}
                    <Card
                        title="Revenue Overview"
                        subtitle="Monthly GMV vs collected revenue"
                        className="xl:col-span-2"
                        gradient
                        toolbar={
                            <div className="flex items-center gap-1.5">
                                <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />GMV
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block ml-1" />Paid
                                </span>
                            </div>
                        }
                    >
                        <div className="px-4 py-5">
                            <ResponsiveContainer width="100%" height={280}>
                                <AreaChart data={revenueChart} margin={{ top: 5, right: 10, left: 5, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="gradRev" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
                                            <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="gradPaid" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<ChartTip money />} />
                                    <Area type="monotone" dataKey="Revenue" stroke="#6366f1" strokeWidth={2.5} fill="url(#gradRev)" dot={false} activeDot={{ r: 4, fill: '#6366f1' }} />
                                    <Area type="monotone" dataKey="Paid" stroke="#10b981" strokeWidth={2} fill="url(#gradPaid)" dot={false} activeDot={{ r: 4, fill: '#10b981' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Order status donut */}
                    <Card title="Order Status" subtitle="Distribution across all orders">
                        <div className="flex flex-col items-center py-5 gap-4">
                            <PieChart width={180} height={180}>
                                <Pie data={statusData} cx={85} cy={85} innerRadius={52} outerRadius={80} dataKey="value" paddingAngle={3}>
                                    {statusData.map((d, i) => <Cell key={i} fill={d.color} stroke="none" />)}
                                </Pie>
                                <Tooltip formatter={(v, n) => [fmtN(v), n]} />
                            </PieChart>
                            <div className="w-full px-5 space-y-2">
                                {statusData.map(d => (
                                    <div key={d.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                                            <span className="text-[12.5px] font-medium text-gray-700">{d.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[12px] font-bold text-gray-900">{fmtN(d.value)}</span>
                                            <span className="text-[11px] text-gray-400">
                                                {kpi.totalOrders > 0 ? Math.round((d.value / kpi.totalOrders) * 100) : 0}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {statusData.length === 0 && <p className="text-center text-[12px] text-gray-400">No order data</p>}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* ── Weekly trend + Payment split ── */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                    {/* Weekly bar chart */}
                    <Card title="Weekly Revenue Trend" subtitle="Last 12 weeks" className="xl:col-span-2"
                        toolbar={<span className="text-[11px] text-gray-400">Rolling 12-week window</span>}>
                        <div className="px-4 py-5">
                            <ResponsiveContainer width="100%" height={240}>
                                <BarChart data={weeklyChart} margin={{ top: 5, right: 10, left: 5, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<ChartTip money />} />
                                    <Bar dataKey="Revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Payment split */}
                    <Card title="Payment Methods" subtitle="Online vs Cash on Delivery">
                        <div className="flex flex-col items-center py-5 gap-4">
                            <PieChart width={160} height={160}>
                                <Pie data={paymentData} cx={75} cy={75} innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={4}>
                                    {paymentData.map((d, i) => <Cell key={i} fill={d.color} stroke="none" />)}
                                </Pie>
                                <Tooltip formatter={(v, n) => [fmtN(v), n]} />
                            </PieChart>
                            <div className="w-full px-5 space-y-3">
                                {paymentData.map(d => (
                                    <div key={d.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                                            <span className="text-[13px] font-semibold text-gray-700">{d.name}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[13px] font-bold text-gray-900">{fmtN(d.value)}</p>
                                            <p className="text-[10.5px] text-gray-400">
                                                {kpi.totalOrders > 0 ? Math.round((d.value / kpi.totalOrders) * 100) : 0}%
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {paymentData.length === 0 && <p className="text-center text-[12px] text-gray-400">No data</p>}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* ── Daily revenue (30-day line) ── */}
                <Card title="Daily Revenue — Last 30 Days" subtitle="Day-by-day revenue breakdown"
                    toolbar={<span className="text-[11px] text-gray-400 px-2 py-1 bg-gray-50 rounded-lg border border-gray-200">{fmtN(filteredOrders.length)} orders in range</span>}>
                    <div className="px-4 py-5">
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={dailyData} margin={{ top: 5, right: 10, left: 5, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false}
                                    interval={Math.floor(dailyData.length / 6)} />
                                <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                <Tooltip content={<ChartTip money />} />
                                <Line type="monotone" dataKey="Revenue" stroke="#6366f1" strokeWidth={2.5}
                                    dot={false} activeDot={{ r: 5, fill: '#6366f1' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* ── Top Products + Category ── */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

                    {/* Top Products by Revenue */}
                    <Card title="Top Products by Revenue" subtitle="Most revenue-generating items">
                        {topProducts.length === 0 ? (
                            <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No order data in range</div>
                        ) : (
                            <div className="px-4 py-4">
                                <ResponsiveContainer width="100%" height={260}>
                                    <BarChart layout="vertical" data={topProducts} margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                                        <XAxis type="number" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                        <YAxis type="category" dataKey="name" tick={{ fontSize: 10.5, fill: '#374151' }}
                                            axisLine={false} tickLine={false} width={145} />
                                        <Tooltip formatter={(v) => [fmt$(v), 'Revenue']} />
                                        <Bar dataKey="revenue" radius={[0, 5, 5, 0]}>
                                            {topProducts.map((_, i) => (
                                                <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#6366f1', '#818cf8', '#4f46e5', '#4338ca'][i % 8]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </Card>

                    {/* Category Breakdown */}
                    <Card title="Sales by Category" subtitle="Product category performance">
                        {categoryData.length === 0 ? (
                            <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No product data</div>
                        ) : (
                            <div className="px-5 py-4 space-y-3">
                                {categoryData.map((cat, i) => {
                                    const maxRev = Math.max(...categoryData.map(c => c.revenue));
                                    const pctWidth = maxRev > 0 ? Math.round((cat.revenue / maxRev) * 100) : 0;
                                    return (
                                        <div key={cat.name} className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-[12.5px] font-semibold text-gray-800 truncate">{cat.name}</span>
                                                    <span className="text-[12px] font-bold text-gray-600 ml-2 flex-shrink-0">
                                                        {cat.revenue > 0 ? fmt$(cat.revenue) : `${cat.products} products`}
                                                    </span>
                                                </div>
                                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full transition-all duration-700"
                                                        style={{ width: `${Math.max(pctWidth, 3)}%`, background: PIE_COLORS[i % PIE_COLORS.length] }} />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Card>
                </div>

                {/* ── Summary table ── */}
                <Card title="Report Summary" subtitle={`Data range: ${range === 'all' ? 'All time' : `Last ${range === 'week' ? '7 days' : range === 'month' ? '30 days' : range === 'quarter' ? '90 days' : '12 months'}`}`}
                    toolbar={
                        <button onClick={exportSummaryCSV}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 text-[12px] font-semibold hover:bg-indigo-100 transition-colors">
                            <TbDownload size={13} /> Export
                        </button>
                    }>
                    <div className="overflow-x-auto">
                        <table className="w-full text-[13px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    {['Metric', 'Value', 'Details'].map(h => (
                                        <th key={h} className="px-6 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    { label: 'Total GMV', val: fmt$(kpi.gmv), detail: `${fmt$(kpi.paid)} collected (${kpi.totalOrders > 0 ? Math.round((kpi.paid / kpi.gmv) * 100) : 0}% paid rate)` },
                                    { label: 'Total Orders', val: fmtN(kpi.totalOrders), detail: `${fmtN(kpi.delivered)} delivered · ${fmtN(kpi.cancelled)} cancelled` },
                                    { label: 'Avg Order Value', val: fmt$(Math.round(kpi.avgOrder)), detail: `Based on ${fmtN(kpi.totalOrders)} orders` },
                                    { label: 'Delivery Rate', val: `${kpi.deliveryRate}%`, detail: `${fmtN(kpi.inTransit)} in transit · ${fmtN(kpi.pending)} pending` },
                                    { label: 'Cancellation Rate', val: `${kpi.cancelRate}%`, detail: `${fmtN(kpi.cancelled)} of ${fmtN(kpi.totalOrders)} orders` },
                                    { label: 'Total Products', val: fmtN(kpi.totalProducts), detail: `${categoryData.length} categories` },
                                    { label: 'Top Category', val: categoryData[0]?.name || '—', detail: categoryData[0]?.products ? `${categoryData[0].products} products` : '—' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                                        <td className="px-6 py-3.5 font-semibold text-gray-800">{row.label}</td>
                                        <td className="px-6 py-3.5 font-extrabold text-gray-900">{loading ? <span className="inline-block w-16 h-4 bg-gray-100 rounded animate-pulse" /> : row.val}</td>
                                        <td className="px-6 py-3.5 text-gray-500 text-[12px]">{row.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Reports;