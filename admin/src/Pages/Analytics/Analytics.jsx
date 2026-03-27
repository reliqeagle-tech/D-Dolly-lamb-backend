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


// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../../App';
// import {
//     LineChart, Line, AreaChart, Area, BarChart, Bar,
//     XAxis, YAxis, CartesianGrid, Tooltip,
//     ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import { TbRefresh } from 'react-icons/tb';

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
//    ANALYTICS COMPONENT

//    TWO MODES:
//    1. STANDALONE PAGE (sidebar route):
//         <Analytics token={token} />
//         → fetches its own orders + products

//    2. EMBEDDED in Dashboard (tab):
//         <Analytics orders={orders} products={products} />
//         → uses props, no extra API call
// ═══════════════════════════════════════════ */
// const Analytics = ({ token, orders: ordersProp, products: productsProp }) => {
//     const [chartType, setChartType] = useState('area');
//     const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders']);
//     const [period, setPeriod] = useState('monthly');

//     /* Own data — used only in standalone mode */
//     const [ownOrders, setOwnOrders] = useState([]);
//     const [ownProducts, setOwnProducts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     /* If props passed → embedded mode; otherwise → standalone mode */
//     const isStandalone = !ordersProp && !productsProp;
//     const orders = isStandalone ? ownOrders : (ordersProp || []);
//     const products = isStandalone ? ownProducts : (productsProp || []);

//     /* Fetch only in standalone mode */
//     const fetchData = useCallback(async () => {
//         if (!isStandalone || !token) return;
//         setLoading(true);
//         try {
//             const [ordRes, prodRes] = await Promise.all([
//                 axios.post(backendUrl + '/api/order/list', {}, { headers: { token } }),
//                 axios.get(backendUrl + '/api/product/list', { headers: { token } }),
//             ]);
//             if (ordRes.data.success) setOwnOrders(ordRes.data.orders || []);
//             else toast.error(ordRes.data.message);
//             if (prodRes.data.success) setOwnProducts(prodRes.data.products || []);
//             else toast.error(prodRes.data.message);
//         } catch (e) {
//             toast.error(e?.message || 'Failed to load analytics');
//         } finally {
//             setLoading(false);
//         }
//     }, [isStandalone, token]);

//     useEffect(() => { fetchData(); }, [fetchData]);

//     const METRICS = [
//         { key: 'Revenue', color: '#6366f1', label: 'Revenue ($)' },
//         { key: 'Orders', color: '#10b981', label: 'Orders' },
//     ];

//     const toggleMetric = (m) =>
//         setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//     /* Monthly data */
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

//     /* Weekly data (last 8 ISO weeks) */
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
//             return {
//                 name: weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
//                 Revenue: 0, Orders: 0,
//                 start: weekStart.getTime(),
//                 end: weekEnd.getTime(),
//             };
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

//     /* Pie: category breakdown */
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

//     /* Top products by sales */
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

//     /* Skeleton loader (standalone loading state) */
//     if (loading) {
//         return (
//             <div className="space-y-5">
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//                     <div className="h-5 w-48 bg-gray-100 rounded animate-pulse mb-2" />
//                     <div className="h-3 w-72 bg-gray-100 rounded animate-pulse mb-6" />
//                     <div className="h-[320px] bg-gray-50 rounded-xl animate-pulse" />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     {[0, 1].map(i => (
//                         <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//                             <div className="h-5 w-36 bg-gray-100 rounded animate-pulse mb-2" />
//                             <div className="h-3 w-24 bg-gray-100 rounded animate-pulse mb-6" />
//                             <div className="h-[180px] bg-gray-50 rounded-xl animate-pulse" />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-5">

//             {/* Main performance chart */}
//             <SectionCard
//                 title="Performance Analytics"
//                 subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown from ${orders.length} real orders`}
//                 toolbar={
//                     <div className="flex items-center gap-2 flex-wrap">
//                         {/* Refresh — standalone only */}
//                         {isStandalone && (
//                             <button onClick={fetchData}
//                                 className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//                                 title="Refresh">
//                                 <TbRefresh size={14} />
//                             </button>
//                         )}
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
//                         {/* Chart type */}
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

//             {/* Secondary charts */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 <SectionCard title="Sales by Category" subtitle={`From ${products.length} products`}>
//                     {!hasProds ? (
//                         <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No product data yet</div>
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

//                 <SectionCard title="Top Products by Orders" subtitle="Items ordered most across all orders">
//                     {topProducts.length === 0 ? (
//                         <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No order data yet</div>
//                     ) : (
//                         <div className="p-5">
//                             <ResponsiveContainer width="100%" height={220}>
//                                 <BarChart layout="vertical" data={topProducts} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
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





// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../../App';
// import {
//     LineChart, Line, AreaChart, Area, BarChart, Bar,
//     XAxis, YAxis, CartesianGrid, Tooltip,
//     ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import { TbRefresh } from 'react-icons/tb';

// /* ════════════════════════════════════════════════════════════════
//    D DOLLY LAMB — ANALYTICS  |  Permanent dark gold theme
// ════════════════════════════════════════════════════════════════ */

// const B = {
//     bg: '#0d0804',
//     surface: '#1a0f07',
//     surface2: '#221408',
//     border: 'rgba(201,168,76,0.18)',
//     borderSoft: 'rgba(201,168,76,0.09)',
//     gold: '#c9a84c',
//     goldLight: '#e8c46a',
//     goldDim: 'rgba(201,168,76,0.12)',
//     cream: '#f0d898',
//     creamSoft: '#d4b87a',
//     muted: '#8b7555',
//     mutedSoft: '#5a4530',
//     // chart metric colours — gold family + accent
//     metric1: '#c9a84c',   // gold  → Revenue
//     metric2: '#e8c46a',   // light gold → Orders
//     // pie / bar accents
//     pie: ['#c9a84c', '#e8c46a', '#a07030', '#f0d898', '#8a6020', '#d4a040'],
//     // status
//     emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)', dot: '#34d399' },
//     red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)', dot: '#f87171' },
//     amber: { bg: 'rgba(201,168,76,0.13)', text: '#e8c46a', border: 'rgba(201,168,76,0.28)', dot: '#c9a84c' },
// };

// /* ── Shared style helpers ── */
// const S = {
//     card: { background: B.surface, border: `1px solid ${B.border}` },
//     card2: { background: B.surface2, border: `1px solid ${B.border}` },
// };

// /* ══════════════════════════════════════════════════════════════
//    SECTION CARD
// ══════════════════════════════════════════════════════════════ */
// const SectionCard = ({ title, subtitle, children, toolbar }) => (
//     <div style={{ ...S.card, borderRadius: 16, overflow: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
//         <div style={{
//             display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
//             padding: '14px 20px', borderBottom: `1px solid ${B.borderSoft}`,
//         }}>
//             <div>
//                 <h2 style={{ color: B.cream, fontSize: 14, fontWeight: 700, margin: 0 }}>{title}</h2>
//                 {subtitle && <p style={{ color: B.muted, fontSize: 11.5, marginTop: 3 }}>{subtitle}</p>}
//             </div>
//             {toolbar}
//         </div>
//         {children}
//     </div>
// );

// /* ══════════════════════════════════════════════════════════════
//    CUSTOM TOOLTIP
// ══════════════════════════════════════════════════════════════ */
// const GoldTooltip = ({ active, payload, label }) => {
//     if (!active || !payload?.length) return null;
//     return (
//         <div style={{ ...S.card2, borderRadius: 12, padding: '10px 14px', fontSize: 12.5, boxShadow: '0 8px 30px rgba(0,0,0,.65)' }}>
//             <p style={{ color: B.gold, fontWeight: 700, marginBottom: 8 }}>{label}</p>
//             {payload.map((p, i) => (
//                 <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
//                     <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color }} />
//                     <span style={{ color: B.muted }}>{p.name}:</span>
//                     <span style={{ color: B.cream, fontWeight: 700 }}>
//                         {p.name === 'Revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}
//                     </span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// /* ══════════════════════════════════════════════════════════════
//    PILL TOGGLE BUTTON
// ══════════════════════════════════════════════════════════════ */
// const PillBtn = ({ active, onClick, children }) => {
//     const [hov, setHov] = useState(false);
//     return (
//         <button
//             onClick={onClick}
//             onMouseEnter={() => setHov(true)}
//             onMouseLeave={() => setHov(false)}
//             style={{
//                 padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700,
//                 cursor: 'pointer', transition: 'all .15s', border: 'none',
//                 background: active
//                     ? `linear-gradient(135deg,${B.gold},${B.goldLight})`
//                     : hov ? 'rgba(201,168,76,0.10)' : 'rgba(201,168,76,0.05)',
//                 color: active ? B.bg : hov ? B.gold : B.muted,
//                 outline: active ? 'none' : `1px solid ${B.borderSoft}`,
//             }}
//         >{children}</button>
//     );
// };

// /* ══════════════════════════════════════════════════════════════
//    SMALL ICON BUTTON
// ══════════════════════════════════════════════════════════════ */
// const IconBtn = ({ onClick, title, children }) => {
//     const [hov, setHov] = useState(false);
//     return (
//         <button onClick={onClick} title={title}
//             onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
//             style={{
//                 width: 32, height: 32, borderRadius: 9, border: `1px solid ${hov ? B.gold : B.border}`,
//                 background: hov ? 'rgba(201,168,76,0.10)' : 'transparent',
//                 color: hov ? B.gold : B.muted,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s',
//             }}
//         >{children}</button>
//     );
// };

// /* ══════════════════════════════════════════════════════════════
//    SKELETON LOADER
// ══════════════════════════════════════════════════════════════ */
// const SkeletonBlock = ({ h = 20, w = '100%', r = 6 }) => (
//     <div style={{ height: h, width: w, borderRadius: r, background: 'rgba(201,168,76,0.07)', animation: 'pulse 1.5s ease-in-out infinite' }} />
// );

// /* ══════════════════════════════════════════════════════════════
//    ANALYTICS COMPONENT
//    Mode 1 — standalone: <Analytics token={token} />
//    Mode 2 — embedded:   <Analytics orders={o} products={p} />
// ══════════════════════════════════════════════════════════════ */
// const Analytics = ({ token, orders: ordersProp, products: productsProp }) => {
//     const [chartType, setChartType] = useState('area');
//     const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders']);
//     const [period, setPeriod] = useState('monthly');

//     const [ownOrders, setOwnOrders] = useState([]);
//     const [ownProducts, setOwnProducts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const isStandalone = !ordersProp && !productsProp;
//     const orders = isStandalone ? ownOrders : (ordersProp || []);
//     const products = isStandalone ? ownProducts : (productsProp || []);

//     const fetchData = useCallback(async () => {
//         if (!isStandalone || !token) return;
//         setLoading(true);
//         try {
//             const [ordRes, prodRes] = await Promise.all([
//                 axios.post(backendUrl + '/api/order/list', {}, { headers: { token } }),
//                 axios.get(backendUrl + '/api/product/list', { headers: { token } }),
//             ]);
//             if (ordRes.data.success) setOwnOrders(ordRes.data.orders || []);
//             else toast.error(ordRes.data.message);
//             if (prodRes.data.success) setOwnProducts(prodRes.data.products || []);
//             else toast.error(prodRes.data.message);
//         } catch (e) {
//             toast.error(e?.message || 'Failed to load analytics');
//         } finally {
//             setLoading(false);
//         }
//     }, [isStandalone, token]);

//     useEffect(() => { fetchData(); }, [fetchData]);

//     const METRICS = [
//         { key: 'Revenue', color: B.metric1, label: 'Revenue ($)' },
//         { key: 'Orders', color: B.metric2, label: 'Orders' },
//     ];

//     const toggleMetric = m => setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//     /* ── Monthly data ── */
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

//     /* ── Weekly data ── */
//     const weeklyData = useMemo(() => {
//         const now = new Date();
//         const weeks = Array.from({ length: 8 }, (_, i) => {
//             const offset = 7 - i;
//             const weekStart = new Date(now);
//             const dow = (now.getDay() + 6) % 7;
//             weekStart.setDate(now.getDate() - dow - offset * 7);
//             weekStart.setHours(0, 0, 0, 0);
//             const weekEnd = new Date(weekStart);
//             weekEnd.setDate(weekStart.getDate() + 6);
//             weekEnd.setHours(23, 59, 59, 999);
//             return { name: weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), Revenue: 0, Orders: 0, start: weekStart.getTime(), end: weekEnd.getTime() };
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

//     /* ── Pie: category ── */
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
//             .map((e, i) => ({ ...e, pct: Math.round((e.value / total) * 100), color: B.pie[i % B.pie.length] }))
//             .sort((a, b) => b.value - a.value);
//     }, [products]);

//     /* ── Top products ── */
//     const topProducts = useMemo(() => {
//         const map = {};
//         orders.forEach(o => {
//             (o.items || []).forEach(it => {
//                 const name = it.name || 'Unknown';
//                 if (!map[name]) map[name] = { name, sales: 0 };
//                 const q = typeof it.quantity === 'object' ? (it.quantity?.quantity ?? 1) : (Number(it.quantity) || 1);
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

//     /* ── Axis tick styles ── */
//     const axisTick = { fontSize: 11.5, fill: B.mutedSoft };

//     /* ── Skeleton ── */
//     if (loading) {
//         return (
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'system-ui,-apple-system,sans-serif' }}>
//                 <div style={{ ...S.card, borderRadius: 16, padding: 20 }}>
//                     <SkeletonBlock h={16} w={180} r={6} />
//                     <div style={{ marginTop: 8 }}><SkeletonBlock h={10} w={280} r={4} /></div>
//                     <div style={{ marginTop: 20 }}><SkeletonBlock h={300} r={10} /></div>
//                 </div>
//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
//                     {[0, 1].map(i => (
//                         <div key={i} style={{ ...S.card, borderRadius: 16, padding: 20 }}>
//                             <SkeletonBlock h={14} w={140} r={5} />
//                             <div style={{ marginTop: 8 }}><SkeletonBlock h={10} w={100} r={4} /></div>
//                             <div style={{ marginTop: 20 }}><SkeletonBlock h={180} r={8} /></div>
//                         </div>
//                     ))}
//                 </div>
//                 <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}`}</style>
//             </div>
//         );
//     }

//     /* ── Chart gradients ── */
//     const ChartDefs = () => (
//         <defs>
//             {METRICS.map(m => (
//                 <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor={m.color} stopOpacity={0.3} />
//                     <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                 </linearGradient>
//             ))}
//         </defs>
//     );

//     const activeM = METRICS.filter(m => activeMetrics.includes(m.key));

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased' }}>

//             {/* ══ PERFORMANCE CHART ══ */}
//             <SectionCard
//                 title="Performance Analytics"
//                 subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown · ${orders.length} real orders`}
//                 toolbar={
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
//                         {isStandalone && (
//                             <IconBtn onClick={fetchData} title="Refresh"><TbRefresh size={14} /></IconBtn>
//                         )}

//                         {/* Period toggle */}
//                         <div style={{ display: 'flex', background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 10, overflow: 'hidden', gap: 0 }}>
//                             {[['monthly', 'Monthly'], ['weekly', 'Weekly']].map(([v, l]) => (
//                                 <button key={v} onClick={() => setPeriod(v)} style={{
//                                     padding: '5px 12px', fontSize: 11.5, fontWeight: 700, cursor: 'pointer', border: 'none', transition: 'all .15s',
//                                     background: period === v ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : 'transparent',
//                                     color: period === v ? B.bg : B.muted,
//                                 }}>{l}</button>
//                             ))}
//                         </div>

//                         {/* Chart type */}
//                         <div style={{ display: 'flex', background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 10, overflow: 'hidden' }}>
//                             {['area', 'line', 'bar'].map(t => (
//                                 <button key={t} onClick={() => setChartType(t)} style={{
//                                     padding: '5px 12px', fontSize: 11.5, fontWeight: 700, cursor: 'pointer', border: 'none', transition: 'all .15s', textTransform: 'capitalize',
//                                     background: chartType === t ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : 'transparent',
//                                     color: chartType === t ? B.bg : B.muted,
//                                 }}>{t}</button>
//                             ))}
//                         </div>
//                     </div>
//                 }
//             >
//                 {/* Metric toggles */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px 4px', flexWrap: 'wrap' }}>
//                     {METRICS.map(m => {
//                         const on = activeMetrics.includes(m.key);
//                         return (
//                             <button key={m.key} onClick={() => toggleMetric(m.key)} style={{
//                                 display: 'flex', alignItems: 'center', gap: 6,
//                                 padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700,
//                                 cursor: 'pointer', transition: 'all .15s', border: 'none',
//                                 background: on ? m.color : 'rgba(201,168,76,0.06)',
//                                 color: on ? B.bg : B.muted,
//                                 outline: on ? 'none' : `1px solid ${B.borderSoft}`,
//                             }}>
//                                 <span style={{ width: 7, height: 7, borderRadius: '50%', background: on ? 'rgba(255,255,255,0.7)' : m.color }} />
//                                 {m.label}
//                             </button>
//                         );
//                     })}
//                     {!hasData && (
//                         <span style={{ fontSize: 11.5, color: B.amber.text, background: B.amber.bg, border: `1px solid ${B.amber.border}`, padding: '4px 10px', borderRadius: 99, fontWeight: 600 }}>
//                             ⚠ No order data yet
//                         </span>
//                     )}
//                 </div>

//                 {/* Chart */}
//                 <div style={{ padding: '8px 16px 20px' }}>
//                     <ResponsiveContainer width="100%" height={300}>
//                         {chartType === 'bar' ? (
//                             <BarChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} />
//                                 <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
//                                 <YAxis tick={axisTick} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<GoldTooltip />} />
//                                 {activeM.map(m => <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />)}
//                             </BarChart>
//                         ) : chartType === 'line' ? (
//                             <LineChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} />
//                                 <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
//                                 <YAxis tick={axisTick} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<GoldTooltip />} />
//                                 {activeM.map(m => <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} dot={{ r: 3, fill: m.color, stroke: B.surface2, strokeWidth: 1.5 }} activeDot={{ r: 5 }} />)}
//                             </LineChart>
//                         ) : (
//                             <AreaChart data={chartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
//                                 <ChartDefs />
//                                 <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} />
//                                 <XAxis dataKey="name" tick={axisTick} axisLine={false} tickLine={false} />
//                                 <YAxis tick={axisTick} axisLine={false} tickLine={false} />
//                                 <Tooltip content={<GoldTooltip />} />
//                                 {activeM.map(m => (
//                                     <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5}
//                                         fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color, stroke: B.surface2, strokeWidth: 1.5 }} activeDot={{ r: 5 }} />
//                                 ))}
//                             </AreaChart>
//                         )}
//                     </ResponsiveContainer>
//                 </div>
//             </SectionCard>

//             {/* ══ SECONDARY CHARTS ══ */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="analytics-grid">

//                 {/* Pie — Category breakdown */}
//                 <SectionCard title="Sales by Category" subtitle={`From ${products.length} products`}>
//                     {!hasProds ? (
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', color: B.muted, fontSize: 13 }}>
//                             No product data yet
//                         </div>
//                     ) : (
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '16px 20px', flexWrap: 'wrap' }}>
//                             {/* Pie */}
//                             <PieChart width={170} height={170}>
//                                 <Pie data={pieData} cx={81} cy={81} innerRadius={46} outerRadius={76}
//                                     dataKey="value" paddingAngle={3} strokeWidth={0}>
//                                     {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
//                                 </Pie>
//                                 <Tooltip
//                                     contentStyle={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 10, fontSize: 12.5 }}
//                                     labelStyle={{ color: B.gold }}
//                                     itemStyle={{ color: B.cream }}
//                                     formatter={(v, n, p) => [`${p.payload.pct}% (${v})`, p.payload.name]}
//                                 />
//                             </PieChart>
//                             {/* Legend */}
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//                                 {pieData.map(d => (
//                                     <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                                         <div style={{ width: 10, height: 10, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
//                                         <div>
//                                             <p style={{ color: B.cream, fontSize: 13, fontWeight: 600, margin: 0 }}>{d.name}</p>
//                                             <p style={{ color: B.muted, fontSize: 11.5, margin: '1px 0 0' }}>{d.pct}% · {d.value} products</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </SectionCard>

//                 {/* Horizontal bar — Top products */}
//                 <SectionCard title="Top Products by Orders" subtitle="Most-ordered items across all orders">
//                     {topProducts.length === 0 ? (
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', color: B.muted, fontSize: 13 }}>
//                             No order data yet
//                         </div>
//                     ) : (
//                         <div style={{ padding: '12px 16px 16px' }}>
//                             <ResponsiveContainer width="100%" height={220}>
//                                 <BarChart layout="vertical" data={topProducts} margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
//                                     <CartesianGrid strokeDasharray="3 3" stroke={B.borderSoft} horizontal={false} />
//                                     <XAxis type="number" tick={axisTick} axisLine={false} tickLine={false} />
//                                     <YAxis type="category" dataKey="name" tick={{ fontSize: 11.5, fill: B.creamSoft }} axisLine={false} tickLine={false} width={140} />
//                                     <Tooltip
//                                         contentStyle={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 10, fontSize: 12.5 }}
//                                         labelStyle={{ color: B.gold }}
//                                         itemStyle={{ color: B.cream }}
//                                         formatter={v => [`${v} units`, 'Ordered']}
//                                     />
//                                     <Bar dataKey="sales" radius={[0, 5, 5, 0]}>
//                                         {topProducts.map((_, i) => (
//                                             <Cell key={i} fill={B.pie[i % B.pie.length]} />
//                                         ))}
//                                     </Bar>
//                                 </BarChart>
//                             </ResponsiveContainer>
//                         </div>
//                     )}
//                 </SectionCard>
//             </div>

//             {/* Responsive */}
//             <style>{`
//                 @keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}
//                 @media(max-width:700px){ .analytics-grid{grid-template-columns:1fr !important;} }
//             `}</style>
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





// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../../App';
// import {
//     LineChart, Line, AreaChart, Area, BarChart, Bar,
//     XAxis, YAxis, CartesianGrid, Tooltip,
//     ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import { TbRefresh } from 'react-icons/tb';

// /* 🔥 DARK THEME */
// const B = {
//     bg: '#0d0804',
//     surface: '#1a0f07',
//     surface2: '#231408',
//     border: 'rgba(201,168,76,0.18)',
//     borderSoft: 'rgba(201,168,76,0.08)',
//     gold: '#c9a84c',
//     cream: '#f5e6cc',
//     muted: '#8b7555',
// };

// /* 🔥 CARD */
// const SectionCard = ({ title, subtitle, children, toolbar }) => (
//     <div style={{
//         background: B.surface,
//         border: `1px solid ${B.border}`,
//         borderRadius: 18,
//         overflow: 'hidden'
//     }}>
//         <div style={{
//             padding: '16px 22px',
//             borderBottom: `1px solid ${B.borderSoft}`,
//             display: 'flex',
//             justifyContent: 'space-between'
//         }}>
//             <div>
//                 <h2 style={{ color: B.cream, fontWeight: 700 }}>{title}</h2>
//                 <p style={{ color: B.muted, fontSize: 12 }}>{subtitle}</p>
//             </div>
//             {toolbar}
//         </div>
//         {children}
//     </div>
// );

// /* 🔥 TOOLTIP */
// const ChartTooltip = ({ active, payload, label }) => {
//     if (!active || !payload?.length) return null;

//     return (
//         <div style={{
//             background: B.surface2,
//             border: `1px solid ${B.border}`,
//             borderRadius: 10,
//             padding: 10,
//             color: B.cream
//         }}>
//             <p style={{ color: B.gold, fontWeight: 700 }}>{label}</p>
//             {payload.map((p, i) => (
//                 <div key={i} style={{ display: 'flex', gap: 6 }}>
//                     <span style={{ color: B.muted }}>{p.name}:</span>
//                     <span>{p.value}</span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Analytics = ({ token, orders: ordersProp, products: productsProp }) => {
//     const [chartType, setChartType] = useState('area');
//     const [period, setPeriod] = useState('monthly');

//     const [ownOrders, setOwnOrders] = useState([]);
//     const [ownProducts, setOwnProducts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const isStandalone = !ordersProp && !productsProp;
//     const orders = isStandalone ? ownOrders : (ordersProp || []);
//     const products = isStandalone ? ownProducts : (productsProp || []);

//     const fetchData = useCallback(async () => {
//         if (!isStandalone || !token) return;
//         setLoading(true);
//         try {
//             const [ordRes, prodRes] = await Promise.all([
//                 axios.post(backendUrl + '/api/order/list', {}, { headers: { token } }),
//                 axios.get(backendUrl + '/api/product/list', { headers: { token } }),
//             ]);
//             if (ordRes.data.success) setOwnOrders(ordRes.data.orders || []);
//             if (prodRes.data.success) setOwnProducts(prodRes.data.products || []);
//         } catch (e) {
//             toast.error('Failed to load analytics');
//         } finally {
//             setLoading(false);
//         }
//     }, [isStandalone, token]);

//     useEffect(() => { fetchData(); }, [fetchData]);

//     const chartData = useMemo(() => {
//         const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//         const map = {};
//         MONTHS.forEach(m => map[m] = { name: m, Revenue: 0, Orders: 0 });

//         orders.forEach(o => {
//             const d = new Date(o.date);
//             const m = MONTHS[d.getMonth()];
//             map[m].Orders += 1;
//             map[m].Revenue += Number(o.amount || 0);
//         });

//         return MONTHS.map(m => map[m]);
//     }, [orders]);

//     const pieData = useMemo(() => {
//         const map = {};
//         products.forEach(p => {
//             const c = p.category || 'Other';
//             map[c] = (map[c] || 0) + 1;
//         });
//         return Object.entries(map).map(([name, value]) => ({ name, value }));
//     }, [products]);

//     return (
//         <div style={{ background: B.bg, padding: 20 }}>

//             {/* MAIN CHART */}
//             <SectionCard title="Performance Analytics">
//                 <div style={{ padding: 20 }}>
//                     <ResponsiveContainer width="100%" height={300}>
//                         <AreaChart data={chartData}>

//                             <defs>
//                                 <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor={B.gold} stopOpacity={0.4} />
//                                     <stop offset="95%" stopColor={B.gold} stopOpacity={0} />
//                                 </linearGradient>
//                             </defs>

//                             <CartesianGrid stroke={B.borderSoft} strokeDasharray="3 3" />

//                             <XAxis dataKey="name" tick={{ fill: B.muted }} />
//                             <YAxis tick={{ fill: B.muted }} />

//                             <Tooltip content={<ChartTooltip />} />

//                             <Area
//                                 type="monotone"
//                                 dataKey="Revenue"
//                                 stroke={B.gold}
//                                 fill="url(#goldGrad)"
//                             />

//                         </AreaChart>
//                     </ResponsiveContainer>
//                 </div>
//             </SectionCard>

//             {/* SECOND ROW */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>

//                 {/* PIE */}
//                 <SectionCard title="Sales by Category">
//                     <div style={{ padding: 20, display: 'flex', justifyContent: 'center' }}>
//                         <PieChart width={200} height={200}>
//                             <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
//                                 {pieData.map((e, i) => (
//                                     <Cell key={i} fill={['#c9a84c', '#10b981', '#6366f1', '#f59e0b'][i % 4]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip content={<ChartTooltip />} />
//                         </PieChart>
//                     </div>
//                 </SectionCard>

//                 {/* BAR */}
//                 <SectionCard title="Top Products">
//                     <div style={{ padding: 20 }}>
//                         <ResponsiveContainer width="100%" height={250}>
//                             <BarChart data={chartData}>
//                                 <CartesianGrid stroke={B.borderSoft} strokeDasharray="3 3" />
//                                 <XAxis dataKey="name" tick={{ fill: B.muted }} />
//                                 <YAxis tick={{ fill: B.muted }} />
//                                 <Tooltip content={<ChartTooltip />} />
//                                 <Bar dataKey="Orders" fill={B.gold} radius={[6, 6, 0, 0]} />
//                             </BarChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </SectionCard>

//             </div>
//         </div>
//     );
// };

// export default Analytics;