// import React from 'react'
// import { useState, useEffect, useMemo, useCallback } from 'react';
// import {
//     LineChart, Line, AreaChart, Area, BarChart, Bar,
//     XAxis, YAxis, CartesianGrid, Tooltip,
//     ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';



// const Analytics = ({ orders = [], products = [] }) => {
//     const [chartType, setChartType] = useState('area');
//     const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders']);
//     const [period, setPeriod] = useState('monthly'); // monthly | weekly

//     const METRICS = [
//         { key: 'Revenue', color: '#6366f1', label: 'Revenue ($)' },
//         { key: 'Orders', color: '#10b981', label: 'Orders' },
//     ];

//     const toggleMetric = (m) =>
//         setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//     /* ── Build monthly chart data from real orders ── */
//     const monthlyData = useMemo(() => {
//         const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//         const map = {};
//         MONTHS.forEach(m => { map[m] = { name: m, Revenue: 0, Orders: 0 }; });

//         orders.forEach(o => {
//             if (!o.date) return;
//             const d = new Date(o.date);
//             const m = MONTHS[d.getMonth()];
//             if (!map[m]) return;
//             map[m].Orders += 1;
//             map[m].Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
//         });

//         return MONTHS.map(m => map[m]);
//     }, [orders]);

//     const SectionCard = ({ title, subtitle, children, toolbar, className = '' }) => (
//         <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
//             <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
//                 <div>
//                     <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
//                     {subtitle && <p className="text-[12px] text-gray-400 mt-0.5">{subtitle}</p>}
//                 </div>
//                 {toolbar}
//             </div>
//             {children}
//         </div>
//     );

//     const ChartTooltip = ({ active, payload, label }) => {
//         if (!active || !payload?.length) return null;
//         return (
//             <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
//                 <p className="font-bold text-gray-900 mb-2">{label}</p>
//                 {payload.map((p, i) => (
//                     <div key={i} className="flex items-center gap-2 mb-1">
//                         <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
//                         <span className="text-gray-500">{p.name}:</span>
//                         <span className="font-bold text-gray-900">{p.name === 'Revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     /* ── Build weekly chart data (last 8 ISO weeks, Mon–Sun) ── */
//     const weeklyData = useMemo(() => {
//         const now = new Date();
//         // Build 8 week buckets going back from current week
//         const weeks = Array.from({ length: 8 }, (_, i) => {
//             // week 7 = current, week 0 = 7 weeks ago
//             const weekOffset = 7 - i;
//             const weekStart = new Date(now);
//             // Go back to start of current week (Monday)
//             const dayOfWeek = (now.getDay() + 6) % 7; // 0=Mon
//             weekStart.setDate(now.getDate() - dayOfWeek - weekOffset * 7);
//             weekStart.setHours(0, 0, 0, 0);
//             const weekEnd = new Date(weekStart);
//             weekEnd.setDate(weekStart.getDate() + 6);
//             weekEnd.setHours(23, 59, 59, 999);
//             // Label: "Jan 6" style
//             const label = weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//             return { name: label, Revenue: 0, Orders: 0, start: weekStart.getTime(), end: weekEnd.getTime() };
//         });

//         orders.forEach(o => {
//             if (!o.date) return;
//             const ts = new Date(o.date).getTime();
//             const w = weeks.find(wk => ts >= wk.start && ts <= wk.end);
//             if (!w) return;
//             w.Orders += 1;
//             w.Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
//         });
//         return weeks.map(({ name, Revenue, Orders }) => ({ name, Revenue, Orders }));
//     }, [orders]);

//     const chartData = period === 'weekly' ? weeklyData : monthlyData;

//     /* ── Pie: category breakdown from real products ── */
//     const PIE_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];
//     const pieData = useMemo(() => {
//         const map = {};
//         products.forEach(p => {
//             const cat = p.category || 'Other';
//             if (!map[cat]) map[cat] = { name: cat, value: 0 };
//             map[cat].value += 1;
//         });
//         const entries = Object.values(map);
//         const total = entries.reduce((s, e) => s + e.value, 0) || 1;
//         return entries
//             .map((e, i) => ({ ...e, pct: Math.round((e.value / total) * 100), color: PIE_COLORS[i % PIE_COLORS.length] }))
//             .sort((a, b) => b.value - a.value);
//     }, [products]);

//     /* ── Top products by sales count from orders ── */
//     const topProducts = useMemo(() => {
//         const map = {};
//         orders.forEach(o => {
//             (o.items || []).forEach(it => {
//                 const name = it.name || 'Unknown';
//                 if (!map[name]) map[name] = { name, sales: 0 };
//                 const q = typeof it.quantity === "object" ? (it.quantity?.quantity ?? 1) : (Number(it.quantity) || 1); map[name].sales += q;
//             });
//         });
//         return Object.values(map)
//             .sort((a, b) => b.sales - a.sales)
//             .slice(0, 6)
//             .map(p => ({ ...p, name: p.name.length > 22 ? p.name.slice(0, 21) + '…' : p.name }));
//     }, [orders]);

//     const hasData = orders.length > 0;
//     const hasProds = products.length > 0;

//     return (
//         <div className="space-y-5">
//             <SectionCard
//                 title="Performance Analytics"
//                 subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown from ${orders.length} real orders`}
//                 toolbar={
//                     <div className="flex items-center gap-2 flex-wrap">
//                         {/* Period toggle */}
//                         <div className="flex border border-gray-200 rounded-xl overflow-hidden">
//                             {[['monthly', 'Monthly'], ['weekly', 'Weekly']].map(([v, l]) => (
//                                 <button key={v} onClick={() => setPeriod(v)}
//                                     className={`px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors ${period === v ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
//                                     {l}
//                                 </button>
//                             ))}
//                         </div>
//                         {/* Chart type toggle */}
//                         {['area', 'line', 'bar'].map(t => (
//                             <button key={t} onClick={() => setChartType(t)}
//                                 className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                                 {t}
//                             </button>
//                         ))}
//                     </div>
//                 }
//             >
//                 {/* Metric toggle pills */}
//                 <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
//                     {METRICS.map(m => (
//                         <button key={m.key} onClick={() => toggleMetric(m.key)}
//                             className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all
//                 ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
//                             style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
//                             <span className="w-2 h-2 rounded-full" style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
//                             {m.label}
//                         </button>
//                     ))}
//                     {!hasData && (
//                         <span className="text-[11.5px] text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full font-semibold">
//                             ⚠ No order data yet
//                         </span>
//                     )}
//                 </div>

//                 <div className="px-4 pb-5 pt-2">
//                     <ResponsiveContainer width="100%" height={320}>
//                         {chartType === 'bar' ? (
//                             <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<ChartTooltip />} />
//                                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
//                                     <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />
//                                 )}
//                             </BarChart>
//                         ) : chartType === 'line' ? (
//                             <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<ChartTooltip />} />
//                                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
//                                     <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                                 )}
//                             </LineChart>
//                         ) : (
//                             <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                                 <defs>
//                                     {METRICS.map(m => (
//                                         <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                                             <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
//                                             <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                                         </linearGradient>
//                                     ))}
//                                 </defs>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<ChartTooltip />} />
//                                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
//                                     <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5}
//                                         fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                                 ))}
//                             </AreaChart>
//                         )}
//                     </ResponsiveContainer>
//                 </div>
//             </SectionCard>

//             {/* ── Secondary charts row ── */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 {/* Pie: real category breakdown */}
//                 <SectionCard title="Sales by Category" subtitle={`From ${products.length} products`}>
//                     {!hasProds ? (
//                         <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No product data yet</div>
//                     ) : (
//                         <div className="flex items-center justify-center gap-6 p-5 flex-wrap">
//                             <PieChart width={180} height={180}>
//                                 <Pie data={pieData} cx={85} cy={85} innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
//                                     {pieData.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
//                                 </Pie>
//                                 <Tooltip formatter={(v, n, p) => [`${p.payload.pct}% (${v} products)`, p.payload.name]} />
//                             </PieChart>
//                             <div className="space-y-3">
//                                 {pieData.map(d => (
//                                     <div key={d.name} className="flex items-center gap-3">
//                                         <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
//                                         <div>
//                                             <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
//                                             <p className="text-[12px] text-gray-400">{d.pct}% · {d.value} products</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </SectionCard>

//                 {/* Top products from real order items */}
//                 <SectionCard title="Top Products by Orders" subtitle="Items ordered most across all orders">
//                     {topProducts.length === 0 ? (
//                         <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No order data yet</div>
//                     ) : (
//                         <div className="p-5">
//                             <ResponsiveContainer width="100%" height={220}>
//                                 <BarChart layout="vertical" data={topProducts} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
//                                     <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
//                                     <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                     <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} axisLine={false} tickLine={false} width={140} />
//                                     <Tooltip formatter={(v) => [`${v} units`, 'Ordered']} />
//                                     <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
//                                         {topProducts.map((_, i) => (
//                                             <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'][i % 6]} />
//                                         ))}
//                                     </Bar>
//                                 </BarChart>
//                             </ResponsiveContainer>
//                         </div>
//                     )}
//                 </SectionCard>
//             </div>
//         </div>
//     );
// };

// export default Analytics



// import React, { useState, useMemo } from 'react';
// import {
//     LineChart, Line, AreaChart, Area, BarChart, Bar,
//     XAxis, YAxis, CartesianGrid, Tooltip,
//     ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';

// /* ─────────────────────────────────────────────
//    UTILITY COMPONENTS — top-level (NOT nested)
// ───────────────────────────────────────────── */
// const SectionCard = ({ title, subtitle, children, toolbar, className = '' }) => (
//     <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
//         <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
//             <div>
//                 <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
//                 {subtitle && <p className="text-[12px] text-gray-400 mt-0.5">{subtitle}</p>}
//             </div>
//             {toolbar}
//         </div>
//         {children}
//     </div>
// );

// const ChartTooltip = ({ active, payload, label }) => {
//     if (!active || !payload?.length) return null;
//     return (
//         <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
//             <p className="font-bold text-gray-900 mb-2">{label}</p>
//             {payload.map((p, i) => (
//                 <div key={i} className="flex items-center gap-2 mb-1">
//                     <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
//                     <span className="text-gray-500">{p.name}:</span>
//                     <span className="font-bold text-gray-900">
//                         {p.name === 'Revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}
//                     </span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// /* ═══════════════════════════════════════════
//    ANALYTICS — receives orders & products
//    as props from Dashboard (no own API calls)
// ═══════════════════════════════════════════ */
// const Analytics = ({ orders = [], products = [], token }) => {
//     const [chartType, setChartType] = useState('area');
//     const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders']);
//     const [period, setPeriod] = useState('monthly');

//     const METRICS = [
//         { key: 'Revenue', color: '#6366f1', label: 'Revenue ($)' },
//         { key: 'Orders', color: '#10b981', label: 'Orders' },
//     ];

//     const toggleMetric = (m) =>
//         setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//     /* ── Monthly chart data from real orders ── */
//     const monthlyData = useMemo(() => {
//         const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//         const map = {};
//         MONTHS.forEach(m => { map[m] = { name: m, Revenue: 0, Orders: 0 }; });
//         orders.forEach(o => {
//             if (!o.date) return;
//             const m = MONTHS[new Date(o.date).getMonth()];
//             if (!map[m]) return;
//             map[m].Orders += 1;
//             map[m].Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
//         });
//         return MONTHS.map(m => map[m]);
//     }, [orders]);

//     /* ── Weekly chart data (last 8 ISO weeks, Mon–Sun) ── */
//     const weeklyData = useMemo(() => {
//         const now = new Date();
//         const weeks = Array.from({ length: 8 }, (_, i) => {
//             const weekOffset = 7 - i;
//             const weekStart = new Date(now);
//             const dayOfWeek = (now.getDay() + 6) % 7;
//             weekStart.setDate(now.getDate() - dayOfWeek - weekOffset * 7);
//             weekStart.setHours(0, 0, 0, 0);
//             const weekEnd = new Date(weekStart);
//             weekEnd.setDate(weekStart.getDate() + 6);
//             weekEnd.setHours(23, 59, 59, 999);
//             const label = weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//             return { name: label, Revenue: 0, Orders: 0, start: weekStart.getTime(), end: weekEnd.getTime() };
//         });
//         orders.forEach(o => {
//             if (!o.date) return;
//             const ts = new Date(o.date).getTime();
//             const w = weeks.find(wk => ts >= wk.start && ts <= wk.end);
//             if (!w) return;
//             w.Orders += 1;
//             w.Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
//         });
//         return weeks.map(({ name, Revenue, Orders }) => ({ name, Revenue, Orders }));
//     }, [orders]);

//     const chartData = period === 'weekly' ? weeklyData : monthlyData;

//     /* ── Pie: category breakdown from real products ── */
//     const PIE_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];
//     const pieData = useMemo(() => {
//         const map = {};
//         products.forEach(p => {
//             const cat = p.category || 'Other';
//             if (!map[cat]) map[cat] = { name: cat, value: 0 };
//             map[cat].value += 1;
//         });
//         const entries = Object.values(map);
//         const total = entries.reduce((s, e) => s + e.value, 0) || 1;
//         return entries
//             .map((e, i) => ({ ...e, pct: Math.round((e.value / total) * 100), color: PIE_COLORS[i % PIE_COLORS.length] }))
//             .sort((a, b) => b.value - a.value);
//     }, [products]);

//     /* ── Top products by sales count from orders ── */
//     const topProducts = useMemo(() => {
//         const map = {};
//         orders.forEach(o => {
//             (o.items || []).forEach(it => {
//                 const name = it.name || 'Unknown';
//                 if (!map[name]) map[name] = { name, sales: 0 };
//                 const q = typeof it.quantity === 'object'
//                     ? (it.quantity?.quantity ?? 1)
//                     : (Number(it.quantity) || 1);
//                 map[name].sales += q;
//             });
//         });
//         return Object.values(map)
//             .sort((a, b) => b.sales - a.sales)
//             .slice(0, 6)
//             .map(p => ({ ...p, name: p.name.length > 22 ? p.name.slice(0, 21) + '…' : p.name }));
//     }, [orders]);

//     const hasData = orders.length > 0;
//     const hasProds = products.length > 0;

//     return (
//         <div className="space-y-5">

//             {/* ── Main performance chart ── */}
//             <SectionCard
//                 title="Performance Analytics"
//                 subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown from ${orders.length} real orders`}
//                 toolbar={
//                     <div className="flex items-center gap-2 flex-wrap">
//                         {/* Period toggle */}
//                         <div className="flex border border-gray-200 rounded-xl overflow-hidden">
//                             {[['monthly', 'Monthly'], ['weekly', 'Weekly']].map(([v, l]) => (
//                                 <button key={v} onClick={() => setPeriod(v)}
//                                     className={`px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors
//                     ${period === v ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
//                                     {l}
//                                 </button>
//                             ))}
//                         </div>
//                         {/* Chart type toggle */}
//                         {['area', 'line', 'bar'].map(t => (
//                             <button key={t} onClick={() => setChartType(t)}
//                                 className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all
//                   ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                                 {t}
//                             </button>
//                         ))}
//                     </div>
//                 }
//             >
//                 {/* Metric toggle pills */}
//                 <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
//                     {METRICS.map(m => (
//                         <button key={m.key} onClick={() => toggleMetric(m.key)}
//                             className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all
//                 ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
//                             style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
//                             <span className="w-2 h-2 rounded-full"
//                                 style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
//                             {m.label}
//                         </button>
//                     ))}
//                     {!hasData && (
//                         <span className="text-[11.5px] text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full font-semibold">
//                             ⚠ No order data yet
//                         </span>
//                     )}
//                 </div>

//                 <div className="px-4 pb-5 pt-2">
//                     <ResponsiveContainer width="100%" height={320}>
//                         {chartType === 'bar' ? (
//                             <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<ChartTooltip />} />
//                                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
//                                     <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />
//                                 )}
//                             </BarChart>
//                         ) : chartType === 'line' ? (
//                             <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<ChartTooltip />} />
//                                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
//                                     <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5}
//                                         dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                                 )}
//                             </LineChart>
//                         ) : (
//                             <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                                 <defs>
//                                     {METRICS.map(m => (
//                                         <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                                             <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
//                                             <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                                         </linearGradient>
//                                     ))}
//                                 </defs>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<ChartTooltip />} />
//                                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
//                                     <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5}
//                                         fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                                 ))}
//                             </AreaChart>
//                         )}
//                     </ResponsiveContainer>
//                 </div>
//             </SectionCard>

//             {/* ── Secondary charts row ── */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 {/* Pie: real category breakdown */}
//                 <SectionCard title="Sales by Category" subtitle={`From ${products.length} products`}>
//                     {!hasProds ? (
//                         <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">
//                             No product data yet
//                         </div>
//                     ) : (
//                         <div className="flex items-center justify-center gap-6 p-5 flex-wrap">
//                             <PieChart width={180} height={180}>
//                                 <Pie data={pieData} cx={85} cy={85} innerRadius={50} outerRadius={80}
//                                     dataKey="value" paddingAngle={3}>
//                                     {pieData.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
//                                 </Pie>
//                                 <Tooltip formatter={(v, n, p) => [`${p.payload.pct}% (${v} products)`, p.payload.name]} />
//                             </PieChart>
//                             <div className="space-y-3">
//                                 {pieData.map(d => (
//                                     <div key={d.name} className="flex items-center gap-3">
//                                         <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
//                                         <div>
//                                             <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
//                                             <p className="text-[12px] text-gray-400">{d.pct}% · {d.value} products</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </SectionCard>

//                 {/* Top products from real order items */}
//                 <SectionCard title="Top Products by Orders" subtitle="Items ordered most across all orders">
//                     {topProducts.length === 0 ? (
//                         <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">
//                             No order data yet
//                         </div>
//                     ) : (
//                         <div className="p-5">
//                             <ResponsiveContainer width="100%" height={220}>
//                                 <BarChart layout="vertical" data={topProducts}
//                                     margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
//                                     <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
//                                     <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                                     <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }}
//                                         axisLine={false} tickLine={false} width={140} />
//                                     <Tooltip formatter={(v) => [`${v} units`, 'Ordered']} />
//                                     <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
//                                         {topProducts.map((_, i) => (
//                                             <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'][i % 6]} />
//                                         ))}
//                                     </Bar>
//                                 </BarChart>
//                             </ResponsiveContainer>
//                         </div>
//                     )}
//                 </SectionCard>

//             </div>
//         </div>
//     );
// };

// export default Analytics;


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

/* ─────────────────────────────────────────────
   UTILITY COMPONENTS — top-level (NOT nested)
───────────────────────────────────────────── */
const SectionCard = ({ title, subtitle, children, toolbar, className = '' }) => (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
            <div>
                <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
                {subtitle && <p className="text-[12px] text-gray-400 mt-0.5">{subtitle}</p>}
            </div>
            {toolbar}
        </div>
        {children}
    </div>
);

const ChartTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
            <p className="font-bold text-gray-900 mb-2">{label}</p>
            {payload.map((p, i) => (
                <div key={i} className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
                    <span className="text-gray-500">{p.name}:</span>
                    <span className="font-bold text-gray-900">
                        {p.name === 'Revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}
                    </span>
                </div>
            ))}
        </div>
    );
};

/* ═══════════════════════════════════════════
   ANALYTICS COMPONENT

   TWO MODES:
   1. STANDALONE PAGE (sidebar route):
        <Analytics token={token} />
        → fetches its own orders + products

   2. EMBEDDED in Dashboard (tab):
        <Analytics orders={orders} products={products} />
        → uses props, no extra API call
═══════════════════════════════════════════ */
const Analytics = ({ token, orders: ordersProp, products: productsProp }) => {
    const [chartType, setChartType] = useState('area');
    const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders']);
    const [period, setPeriod] = useState('monthly');

    /* Own data — used only in standalone mode */
    const [ownOrders, setOwnOrders] = useState([]);
    const [ownProducts, setOwnProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    /* If props passed → embedded mode; otherwise → standalone mode */
    const isStandalone = !ordersProp && !productsProp;
    const orders = isStandalone ? ownOrders : (ordersProp || []);
    const products = isStandalone ? ownProducts : (productsProp || []);

    /* Fetch only in standalone mode */
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
        } catch (e) {
            toast.error(e?.message || 'Failed to load analytics');
        } finally {
            setLoading(false);
        }
    }, [isStandalone, token]);

    useEffect(() => { fetchData(); }, [fetchData]);

    const METRICS = [
        { key: 'Revenue', color: '#6366f1', label: 'Revenue ($)' },
        { key: 'Orders', color: '#10b981', label: 'Orders' },
    ];

    const toggleMetric = (m) =>
        setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

    /* Monthly data */
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

    /* Weekly data (last 8 ISO weeks) */
    const weeklyData = useMemo(() => {
        const now = new Date();
        const weeks = Array.from({ length: 8 }, (_, i) => {
            const weekOffset = 7 - i;
            const weekStart = new Date(now);
            const dayOfWeek = (now.getDay() + 6) % 7;
            weekStart.setDate(now.getDate() - dayOfWeek - weekOffset * 7);
            weekStart.setHours(0, 0, 0, 0);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            weekEnd.setHours(23, 59, 59, 999);
            return {
                name: weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                Revenue: 0, Orders: 0,
                start: weekStart.getTime(),
                end: weekEnd.getTime(),
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

    /* Pie: category breakdown */
    const PIE_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];
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
            .map((e, i) => ({ ...e, pct: Math.round((e.value / total) * 100), color: PIE_COLORS[i % PIE_COLORS.length] }))
            .sort((a, b) => b.value - a.value);
    }, [products]);

    /* Top products by sales */
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
            .map(p => ({ ...p, name: p.name.length > 22 ? p.name.slice(0, 21) + '…' : p.name }));
    }, [orders]);

    const hasData = orders.length > 0;
    const hasProds = products.length > 0;

    /* Skeleton loader (standalone loading state) */
    if (loading) {
        return (
            <div className="space-y-5">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="h-5 w-48 bg-gray-100 rounded animate-pulse mb-2" />
                    <div className="h-3 w-72 bg-gray-100 rounded animate-pulse mb-6" />
                    <div className="h-[320px] bg-gray-50 rounded-xl animate-pulse" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[0, 1].map(i => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <div className="h-5 w-36 bg-gray-100 rounded animate-pulse mb-2" />
                            <div className="h-3 w-24 bg-gray-100 rounded animate-pulse mb-6" />
                            <div className="h-[180px] bg-gray-50 rounded-xl animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-5">

            {/* Main performance chart */}
            <SectionCard
                title="Performance Analytics"
                subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown from ${orders.length} real orders`}
                toolbar={
                    <div className="flex items-center gap-2 flex-wrap">
                        {/* Refresh — standalone only */}
                        {isStandalone && (
                            <button onClick={fetchData}
                                className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                                title="Refresh">
                                <TbRefresh size={14} />
                            </button>
                        )}
                        {/* Period toggle */}
                        <div className="flex border border-gray-200 rounded-xl overflow-hidden">
                            {[['monthly', 'Monthly'], ['weekly', 'Weekly']].map(([v, l]) => (
                                <button key={v} onClick={() => setPeriod(v)}
                                    className={`px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors
                    ${period === v ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                                    {l}
                                </button>
                            ))}
                        </div>
                        {/* Chart type */}
                        {['area', 'line', 'bar'].map(t => (
                            <button key={t} onClick={() => setChartType(t)}
                                className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all
                  ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                }
            >
                <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
                    {METRICS.map(m => (
                        <button key={m.key} onClick={() => toggleMetric(m.key)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all
                ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
                            style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
                            <span className="w-2 h-2 rounded-full"
                                style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
                            {m.label}
                        </button>
                    ))}
                    {!hasData && (
                        <span className="text-[11.5px] text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full font-semibold">
                            ⚠ No order data yet
                        </span>
                    )}
                </div>

                <div className="px-4 pb-5 pt-2">
                    <ResponsiveContainer width="100%" height={320}>
                        {chartType === 'bar' ? (
                            <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                <Tooltip content={<ChartTooltip />} />
                                {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
                                    <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />
                                )}
                            </BarChart>
                        ) : chartType === 'line' ? (
                            <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                <Tooltip content={<ChartTooltip />} />
                                {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
                                    <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5}
                                        dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
                                )}
                            </LineChart>
                        ) : (
                            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <defs>
                                    {METRICS.map(m => (
                                        <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
                                            <stop offset="95%" stopColor={m.color} stopOpacity={0} />
                                        </linearGradient>
                                    ))}
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                <Tooltip content={<ChartTooltip />} />
                                {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
                                    <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5}
                                        fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
                                ))}
                            </AreaChart>
                        )}
                    </ResponsiveContainer>
                </div>
            </SectionCard>

            {/* Secondary charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <SectionCard title="Sales by Category" subtitle={`From ${products.length} products`}>
                    {!hasProds ? (
                        <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No product data yet</div>
                    ) : (
                        <div className="flex items-center justify-center gap-6 p-5 flex-wrap">
                            <PieChart width={180} height={180}>
                                <Pie data={pieData} cx={85} cy={85} innerRadius={50} outerRadius={80}
                                    dataKey="value" paddingAngle={3}>
                                    {pieData.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
                                </Pie>
                                <Tooltip formatter={(v, n, p) => [`${p.payload.pct}% (${v} products)`, p.payload.name]} />
                            </PieChart>
                            <div className="space-y-3">
                                {pieData.map(d => (
                                    <div key={d.name} className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
                                        <div>
                                            <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
                                            <p className="text-[12px] text-gray-400">{d.pct}% · {d.value} products</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </SectionCard>

                <SectionCard title="Top Products by Orders" subtitle="Items ordered most across all orders">
                    {topProducts.length === 0 ? (
                        <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No order data yet</div>
                    ) : (
                        <div className="p-5">
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart layout="vertical" data={topProducts} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                                    <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }}
                                        axisLine={false} tickLine={false} width={140} />
                                    <Tooltip formatter={(v) => [`${v} units`, 'Ordered']} />
                                    <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
                                        {topProducts.map((_, i) => (
                                            <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'][i % 6]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </SectionCard>

            </div>
        </div>
    );
};

export default Analytics;



