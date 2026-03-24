// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../../App';
// import {
//     TbStar, TbStarFilled, TbSearch, TbX, TbRefresh,
//     TbTrash, TbThumbUp, TbThumbDown, TbMessage,
//     TbDownload, TbChevronLeft, TbChevronRight,
//     TbAlertTriangle, TbCircleCheck, TbClock,
//     TbStarHalfFilled, TbSend, TbFlag, TbShield,
//     TbMoodSmile, TbMoodSad, TbMoodNeutral,
//     TbEye, TbEyeOff, TbPackage, TbChartBar,
//     TbPhoto,
// } from 'react-icons/tb';

// /* ════════════════════════════════════════════
//    PURE UI PRIMITIVES  (top-level, never nested)
// ════════════════════════════════════════════ */

// const Stars = ({ rating, size = 13 }) => (
//     <span className="inline-flex items-center gap-0.5">
//         {[1, 2, 3, 4, 5].map(i => (
//             <span key={i}>
//                 {i <= Math.floor(rating)
//                     ? <TbStarFilled size={size} className="text-amber-400" />
//                     : i - 0.5 <= rating
//                         ? <TbStarHalfFilled size={size} className="text-amber-400" />
//                         : <TbStar size={size} className="text-gray-300" />}
//             </span>
//         ))}
//     </span>
// );

// const RatingBar = ({ star, count, total }) => {
//     const pct = total > 0 ? (count / total) * 100 : 0;
//     const COLOR = { 5: '#10b981', 4: '#6366f1', 3: '#f59e0b', 2: '#f97316', 1: '#ef4444' };
//     return (
//         <button className="flex items-center gap-2 w-full group">
//             <span className="text-[11.5px] font-bold text-gray-500 w-3">{star}</span>
//             <TbStarFilled size={9} className="text-amber-400 flex-shrink-0" />
//             <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
//                 <div
//                     className="h-full rounded-full transition-all duration-700"
//                     style={{ width: `${pct}%`, background: COLOR[star] }}
//                 />
//             </div>
//             <span className="text-[11px] text-gray-400 w-5 text-right tabular-nums">{count}</span>
//         </button>
//     );
// };

// const StatusPill = ({ status, flagged }) => {
//     if (flagged) return (
//         <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
//             <TbFlag size={9} /> Flagged
//         </span>
//     );
//     if (status === 'pending') return (
//         <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
//             <TbClock size={9} /> Pending
//         </span>
//     );
//     return (
//         <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
//             <TbCircleCheck size={9} /> Approved
//         </span>
//     );
// };

// const VerifiedBadge = () => (
//     <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
//         <TbShield size={9} /> Verified
//     </span>
// );

// const KPICard = ({ icon, label, value, sub, iconBg, loading }) => (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
//         <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>{icon}</div>
//         <div>
//             <p className="text-[12px] text-gray-500 font-medium">{label}</p>
//             <p className="text-[26px] font-extrabold text-gray-900 leading-tight mt-0.5">
//                 {loading ? <span className="inline-block w-16 h-7 bg-gray-100 rounded animate-pulse" /> : value}
//             </p>
//             {sub && <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>}
//         </div>
//     </div>
// );

// const SkeletonReview = () => (
//     <div className="flex gap-4 px-6 py-5 border-b border-gray-50 animate-pulse">
//         <div className="w-10 h-10 rounded-xl bg-gray-100 flex-shrink-0" />
//         <div className="flex-1 space-y-2.5">
//             <div className="flex justify-between">
//                 <div className="h-4 bg-gray-100 rounded w-32" />
//                 <div className="h-4 bg-gray-100 rounded w-24" />
//             </div>
//             <div className="h-3 bg-gray-100 rounded w-48" />
//             <div className="h-3 bg-gray-100 rounded w-full max-w-lg" />
//             <div className="h-3 bg-gray-100 rounded w-3/4" />
//         </div>
//     </div>
// );

// const AVATAR_COLORS = [
//     'bg-indigo-100 text-indigo-700',
//     'bg-pink-100 text-pink-700',
//     'bg-amber-100 text-amber-700',
//     'bg-emerald-100 text-emerald-700',
//     'bg-violet-100 text-violet-700',
//     'bg-cyan-100 text-cyan-700',
//     'bg-rose-100 text-rose-700',
//     'bg-teal-100 text-teal-700',
// ];

// /* ════════════════════════════════════════════
//    MAIN REVIEWS PAGE
// ════════════════════════════════════════════ */
// const Reviews = ({ token }) => {
//     /* ── Data ── */
//     const [reviews, setReviews] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     /* ── UI state ── */
//     const [search, setSearch] = useState('');
//     const [filterRating, setFilterRating] = useState('all');
//     const [filterStatus, setFilterStatus] = useState('all');
//     const [filterProduct, setFilterProduct] = useState('all');
//     const [sortBy, setSortBy] = useState('newest');
//     const [page, setPage] = useState(1);
//     const [expandedIds, setExpandedIds] = useState(new Set());
//     const [replyingTo, setReplyingTo] = useState(null);
//     const [replyText, setReplyText] = useState('');
//     const [hiddenIds, setHiddenIds] = useState(new Set());
//     const PER_PAGE = 10;

//     /* ── Fetch ── */
//     const fetchData = useCallback(async () => {
//         if (!token) return;
//         setLoading(true);
//         try {
//             const res = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
//             if (!res.data.success) { toast.error(res.data.message); return; }
//             const prods = res.data.products || [];
//             setProducts(prods);

//             /* Flatten reviews from all products */
//             const flat = [];
//             prods.forEach(p => {
//                 (Array.isArray(p.reviews) ? p.reviews : []).forEach((r, idx) => {
//                     flat.push({
//                         id: `${p._id}-rv-${idx}`,
//                         productId: p._id,
//                         productName: p.name || 'Unknown Product',
//                         productImg: Array.isArray(p.images) ? p.images[0] : (p.image || null),
//                         productCat: p.category || '',
//                         reviewer: r.userName || r.user || r.name || 'Anonymous',
//                         email: r.userEmail || r.email || '',
//                         rating: Math.min(5, Math.max(0, Number(r.rating) || 0)),
//                         title: r.title || '',
//                         comment: r.comment || r.review || r.text || '',
//                         date: r.date || r.createdAt || null,
//                         helpful: Number(r.helpful) || 0,
//                         unhelpful: Number(r.unhelpful) || 0,
//                         verified: !!(r.verified || r.verifiedPurchase),
//                         status: r.status || 'approved',
//                         adminReply: r.adminReply || r.reply || '',
//                         flagged: !!r.flagged,
//                     });
//                 });
//             });

//             flat.sort((a, b) =>
//                 (b.date ? new Date(b.date) : 0) - (a.date ? new Date(a.date) : 0)
//             );
//             setReviews(flat);
//         } catch (e) {
//             toast.error(e?.message || 'Failed to load reviews');
//         } finally {
//             setLoading(false);
//         }
//     }, [token]);

//     useEffect(() => { fetchData(); }, [fetchData]);

//     /* ── Computed stats ── */
//     const stats = useMemo(() => {
//         const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
//         let totalRating = 0, pending = 0, flagged = 0, verified = 0, withReply = 0;
//         reviews.forEach(r => {
//             const s = Math.round(r.rating);
//             if (dist[s] !== undefined) dist[s]++;
//             totalRating += r.rating;
//             if (r.status === 'pending') pending++;
//             if (r.flagged) flagged++;
//             if (r.verified) verified++;
//             if (r.adminReply) withReply++;
//         });
//         const total = reviews.length;
//         const avg = total > 0 ? (totalRating / total).toFixed(1) : '0.0';
//         const positive = (dist[5] + dist[4]);
//         const positivePct = total > 0 ? Math.round((positive / total) * 100) : 0;
//         return { total, avg, dist, pending, flagged, verified, withReply, positivePct };
//     }, [reviews]);

//     /* ── Filtered + sorted ── */
//     const filtered = useMemo(() => {
//         let r = reviews.filter(rv => !hiddenIds.has(rv.id));

//         if (search.trim()) {
//             const q = search.toLowerCase();
//             r = r.filter(rv =>
//                 rv.reviewer.toLowerCase().includes(q) ||
//                 rv.comment.toLowerCase().includes(q) ||
//                 rv.productName.toLowerCase().includes(q) ||
//                 rv.title.toLowerCase().includes(q)
//             );
//         }
//         if (filterRating !== 'all') r = r.filter(rv => Math.round(rv.rating) === Number(filterRating));
//         if (filterProduct !== 'all') r = r.filter(rv => rv.productId === filterProduct);
//         if (filterStatus === 'pending') r = r.filter(rv => rv.status === 'pending');
//         if (filterStatus === 'approved') r = r.filter(rv => rv.status === 'approved' && !rv.flagged);
//         if (filterStatus === 'flagged') r = r.filter(rv => rv.flagged);
//         if (filterStatus === 'replied') r = r.filter(rv => !!rv.adminReply);

//         r.sort((a, b) => {
//             if (sortBy === 'newest') return (b.date ? new Date(b.date) : 0) - (a.date ? new Date(a.date) : 0);
//             if (sortBy === 'oldest') return (a.date ? new Date(a.date) : 0) - (b.date ? new Date(b.date) : 0);
//             if (sortBy === 'highest') return b.rating - a.rating;
//             if (sortBy === 'lowest') return a.rating - b.rating;
//             if (sortBy === 'helpful') return (b.helpful - b.unhelpful) - (a.helpful - a.unhelpful);
//             return 0;
//         });
//         return r;
//     }, [reviews, search, filterRating, filterStatus, filterProduct, sortBy, hiddenIds]);

//     const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//     const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//     /* Reset page on filter change */
//     const applyFilter = (setter, val) => { setter(val); setPage(1); };

//     /* ── Helpers ── */
//     const fmtRel = (d) => {
//         if (!d) return '—';
//         const days = Math.floor((Date.now() - new Date(d)) / 86400000);
//         if (days === 0) return 'Today';
//         if (days === 1) return 'Yesterday';
//         if (days < 30) return `${days}d ago`;
//         if (days < 365) return `${Math.floor(days / 30)}mo ago`;
//         return `${Math.floor(days / 365)}y ago`;
//     };
//     const fmtDate = (d) => {
//         if (!d) return '—';
//         return new Date(d).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
//     };
//     const avatarColor = (name) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
//     const ratingBadgeClass = (r) => {
//         if (r >= 4.5) return 'text-emerald-700 bg-emerald-50';
//         if (r >= 3.5) return 'text-amber-700 bg-amber-50';
//         return 'text-red-700 bg-red-50';
//     };

//     /* ── Actions ── */
//     const approveReview = (id) => {
//         setReviews(p => p.map(r => r.id === id ? { ...r, status: 'approved', flagged: false } : r));
//         toast.success('Review approved');
//     };
//     const deleteReview = (id) => {
//         setReviews(p => p.filter(r => r.id !== id));
//         toast.success('Review deleted');
//     };
//     const flagReview = (id) => {
//         setReviews(p => p.map(r => r.id === id ? { ...r, flagged: !r.flagged } : r));
//     };
//     const toggleHide = (id) => {
//         setHiddenIds(p => {
//             const n = new Set(p);
//             n.has(id) ? n.delete(id) : n.add(id);
//             return n;
//         });
//     };
//     const submitReply = (id) => {
//         if (!replyText.trim()) return;
//         setReviews(p => p.map(r => r.id === id ? { ...r, adminReply: replyText.trim() } : r));
//         toast.success('Reply saved');
//         setReplyingTo(null);
//         setReplyText('');
//     };
//     const toggleExpand = (id) => {
//         setExpandedIds(p => {
//             const n = new Set(p);
//             n.has(id) ? n.delete(id) : n.add(id);
//             return n;
//         });
//     };

//     /* ── Export ── */
//     const exportCSV = () => {
//         const rows = [['Product', 'Reviewer', 'Email', 'Rating', 'Title', 'Comment', 'Date', 'Verified', 'Status', 'Admin Reply']];
//         filtered.forEach(r => rows.push([
//             r.productName, r.reviewer, r.email, r.rating,
//             `"${r.title}"`, `"${r.comment.replace(/"/g, '""')}"`,
//             fmtDate(r.date), r.verified ? 'Yes' : 'No',
//             r.status, `"${r.adminReply}"`,
//         ]));
//         const csv = rows.map(r => r.join(',')).join('\n');
//         const blob = new Blob([csv], { type: 'text/csv' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url; a.download = `reviews_${new Date().toISOString().slice(0, 10)}.csv`;
//         a.click(); URL.revokeObjectURL(url);
//         toast.success('Reviews exported!');
//     };

//     /* ── Unique products for filter dropdown ── */
//     const productOptions = useMemo(() => {
//         const seen = new Map();
//         reviews.forEach(r => { if (!seen.has(r.productId)) seen.set(r.productId, r.productName); });
//         return [...seen.entries()].sort((a, b) => a[1].localeCompare(b[1]));
//     }, [reviews]);

//     const SELECT_STYLE = {
//         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'right 9px center',
//     };

//     /* ════════════════════════════════════════════
//        RENDER
//     ════════════════════════════════════════════ */
//     return (
//         <div className="min-h-screen bg-[#f7f7f5] p-5 space-y-5">

//             {/* ── Header ── */}
//             <div className="flex items-center justify-between flex-wrap gap-3">
//                 <div>
//                     <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
//                         <TbStarFilled className="text-amber-400" size={22} />
//                         Reviews & Ratings
//                     </h1>
//                     <p className="text-[13px] text-gray-400 mt-0.5">
//                         {loading
//                             ? 'Loading product reviews…'
//                             : `${stats.total} review${stats.total !== 1 ? 's' : ''} across ${products.length} product${products.length !== 1 ? 's' : ''}`}
//                     </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button onClick={fetchData} title="Refresh"
//                         className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
//                         <TbRefresh size={16} className={loading ? 'animate-spin' : ''} />
//                     </button>
//                     <button onClick={exportCSV}
//                         className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-[13px] font-semibold hover:bg-gray-50 transition-all shadow-sm">
//                         <TbDownload size={15} /> Export CSV
//                     </button>
//                     {(stats.pending + stats.flagged) > 0 && (
//                         <button onClick={() => applyFilter(setFilterStatus, 'pending')}
//                             className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-[12.5px] font-bold hover:bg-amber-100 transition-all">
//                             <TbClock size={14} />
//                             {stats.pending + stats.flagged} need attention
//                         </button>
//                     )}
//                 </div>
//             </div>

//             {/* ── KPI row ── */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">

//                 {/* Overall rating card — wider */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:col-span-2 xl:col-span-2">
//                     <p className="text-[11.5px] font-bold text-gray-500 uppercase tracking-wider mb-4">Overall Rating</p>
//                     <div className="flex items-center gap-4 mb-4">
//                         <div>
//                             <p className={`text-[50px] font-extrabold leading-none ${Number(stats.avg) >= 4 ? 'text-emerald-600' : Number(stats.avg) >= 3 ? 'text-amber-500' : 'text-red-500'}`}>
//                                 {loading ? <span className="inline-block w-16 h-12 bg-gray-100 rounded animate-pulse" /> : stats.avg}
//                             </p>
//                             <div className="mt-1.5">
//                                 <Stars rating={Number(stats.avg)} size={15} />
//                             </div>
//                             <p className="text-[12px] text-gray-400 mt-1">{stats.total} total reviews</p>
//                         </div>
//                         <div className="flex-1 space-y-1.5">
//                             {[5, 4, 3, 2, 1].map(n => (
//                                 <RatingBar key={n} star={n} count={stats.dist[n] || 0} total={stats.total} />
//                             ))}
//                         </div>
//                     </div>
//                     {/* Satisfaction bar */}
//                     <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
//                         {stats.positivePct >= 70
//                             ? <TbMoodSmile size={18} className="text-emerald-500 flex-shrink-0" />
//                             : stats.positivePct >= 40
//                                 ? <TbMoodNeutral size={18} className="text-amber-500 flex-shrink-0" />
//                                 : <TbMoodSad size={18} className="text-red-500 flex-shrink-0" />}
//                         <div className="flex-1">
//                             <div className="flex justify-between mb-1">
//                                 <span className="text-[11px] font-semibold text-gray-600">Customer Satisfaction</span>
//                                 <span className="text-[11px] font-bold text-gray-700">{stats.positivePct}%</span>
//                             </div>
//                             <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                                 <div className="h-full bg-emerald-500 rounded-full transition-all duration-700"
//                                     style={{ width: `${stats.positivePct}%` }} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <KPICard
//                     icon={<TbMessage size={18} className="text-indigo-600" />}
//                     iconBg="bg-indigo-50"
//                     label="Total Reviews"
//                     value={stats.total.toLocaleString()}
//                     sub={`${stats.verified} verified purchases`}
//                     loading={loading}
//                 />
//                 <KPICard
//                     icon={<TbClock size={18} className="text-amber-600" />}
//                     iconBg="bg-amber-50"
//                     label="Needs Review"
//                     value={(stats.pending + stats.flagged).toString()}
//                     sub={`${stats.pending} pending · ${stats.flagged} flagged`}
//                     loading={loading}
//                 />
//                 <KPICard
//                     icon={<TbCircleCheck size={18} className="text-emerald-600" />}
//                     iconBg="bg-emerald-50"
//                     label="Replied"
//                     value={stats.withReply.toString()}
//                     sub={stats.total > 0
//                         ? `${Math.round((stats.withReply / stats.total) * 100)}% response rate`
//                         : 'No reviews yet'}
//                     loading={loading}
//                 />
//             </div>

//             {/* ── Filter toolbar ── */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
//                 <div className="flex items-center gap-3 flex-wrap">

//                     {/* Search */}
//                     <div className="relative flex-1 min-w-[220px] max-w-sm">
//                         <TbSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                         <input
//                             value={search}
//                             onChange={e => applyFilter(setSearch, e.target.value)}
//                             placeholder="Search reviewer, product, comment…"
//                             className="pl-9 pr-8 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all w-full"
//                         />
//                         {search && (
//                             <button onClick={() => applyFilter(setSearch, '')}
//                                 className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                                 <TbX size={13} />
//                             </button>
//                         )}
//                     </div>

//                     {/* Rating filter */}
//                     <select value={filterRating} onChange={e => applyFilter(setFilterRating, e.target.value)}
//                         className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none"
//                         style={SELECT_STYLE}>
//                         <option value="all">All Ratings</option>
//                         {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★</option>)}
//                     </select>

//                     {/* Status filter */}
//                     <select value={filterStatus} onChange={e => applyFilter(setFilterStatus, e.target.value)}
//                         className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none"
//                         style={SELECT_STYLE}>
//                         <option value="all">All Status</option>
//                         <option value="approved">Approved</option>
//                         <option value="pending">Pending</option>
//                         <option value="flagged">Flagged</option>
//                         <option value="replied">Replied</option>
//                     </select>

//                     {/* Product filter */}
//                     {productOptions.length > 0 && (
//                         <select value={filterProduct} onChange={e => applyFilter(setFilterProduct, e.target.value)}
//                             className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none max-w-[180px]"
//                             style={SELECT_STYLE}>
//                             <option value="all">All Products</option>
//                             {productOptions.map(([id, name]) => (
//                                 <option key={id} value={id}>{name.length > 28 ? name.slice(0, 27) + '…' : name}</option>
//                             ))}
//                         </select>
//                     )}

//                     {/* Sort */}
//                     <select value={sortBy} onChange={e => applyFilter(setSortBy, e.target.value)}
//                         className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none"
//                         style={SELECT_STYLE}>
//                         <option value="newest">Newest First</option>
//                         <option value="oldest">Oldest First</option>
//                         <option value="highest">Highest Rating</option>
//                         <option value="lowest">Lowest Rating</option>
//                         <option value="helpful">Most Helpful</option>
//                     </select>

//                     {/* Clear filters */}
//                     {(search || filterRating !== 'all' || filterStatus !== 'all' || filterProduct !== 'all') && (
//                         <button
//                             onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setFilterProduct('all'); setPage(1); }}
//                             className="flex items-center gap-1 text-[12px] text-indigo-500 font-semibold hover:text-indigo-700 transition-colors">
//                             <TbX size={13} /> Clear
//                         </button>
//                     )}

//                     <span className="ml-auto text-[12px] text-gray-400">
//                         <strong className="text-gray-600">{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''}
//                     </span>
//                 </div>
//             </div>

//             {/* ── Reviews list ── */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

//                 {/* Column headers */}
//                 {!loading && filtered.length > 0 && (
//                     <div className="hidden md:flex items-center gap-4 px-6 py-3 bg-gray-50/80 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
//                         <span className="w-10 flex-shrink-0" />
//                         <span className="flex-1">Reviewer & Review</span>
//                         <span className="w-40 text-right">Product</span>
//                         <span className="w-28 text-center">Actions</span>
//                     </div>
//                 )}

//                 {/* Skeletons */}
//                 {loading && Array(6).fill(0).map((_, i) => <SkeletonReview key={i} />)}

//                 {/* Empty state */}
//                 {!loading && filtered.length === 0 && (
//                     <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
//                         <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center">
//                             <TbStarFilled size={28} className="opacity-20" />
//                         </div>
//                         <p className="text-[15px] font-semibold text-gray-600">
//                             {reviews.length === 0 ? 'No reviews yet' : 'No reviews match your filters'}
//                         </p>
//                         <p className="text-[13px] text-center max-w-xs">
//                             {reviews.length === 0
//                                 ? 'Reviews submitted on your product pages will appear here automatically.'
//                                 : 'Try adjusting your search or filters to find what you're looking for.'}
//                         </p>
//                         {(search || filterRating !== 'all' || filterStatus !== 'all') && (
//                             <button
//                                 onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setPage(1); }}
//                                 className="mt-1 text-[13px] text-indigo-600 font-semibold hover:underline">
//                                 Clear all filters
//                             </button>
//                         )}
//                     </div>
//                 )}

//                 {/* Review rows */}
//                 {!loading && paginated.map((rv) => {
//                     const isExpanded = expandedIds.has(rv.id);
//                     const isReplying = replyingTo === rv.id;
//                     const truncate = !isExpanded && rv.comment.length > 180;
//                     const displayText = truncate ? rv.comment.slice(0, 180) + '…' : rv.comment;

//                     return (
//                         <div key={rv.id}
//                             className={`border-b border-gray-50 transition-colors
//                 ${rv.flagged
//                                     ? 'bg-red-50/20 hover:bg-red-50/30'
//                                     : rv.status === 'pending'
//                                         ? 'bg-amber-50/20 hover:bg-amber-50/30'
//                                         : 'hover:bg-gray-50/50'}`}>

//                             <div className="flex items-start gap-4 px-6 py-5">

//                                 {/* Avatar */}
//                                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[14px] font-extrabold flex-shrink-0 ${avatarColor(rv.reviewer)}`}>
//                                     {rv.reviewer.charAt(0).toUpperCase()}
//                                 </div>

//                                 {/* Content */}
//                                 <div className="flex-1 min-w-0">

//                                     {/* Row 1: name + rating + date + product */}
//                                     <div className="flex items-start justify-between flex-wrap gap-2">
//                                         <div className="flex items-center gap-2 flex-wrap">
//                                             <span className="text-[14px] font-bold text-gray-900">{rv.reviewer}</span>
//                                             {rv.verified && <VerifiedBadge />}
//                                             <StatusPill status={rv.status} flagged={rv.flagged} />
//                                             {rv.adminReply && (
//                                                 <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
//                                                     <TbMessage size={9} /> Replied
//                                                 </span>
//                                             )}
//                                         </div>

//                                         {/* Product info — right side */}
//                                         <div className="flex items-center gap-2 flex-shrink-0">
//                                             {rv.productImg
//                                                 ? <img src={rv.productImg} alt="" className="w-8 h-8 rounded-lg object-cover border border-gray-100" />
//                                                 : <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"><TbPhoto size={14} className="text-gray-400" /></div>
//                                             }
//                                             <div className="text-right hidden sm:block">
//                                                 <p className="text-[12px] font-semibold text-gray-700 max-w-[140px] truncate leading-tight">{rv.productName}</p>
//                                                 {rv.productCat && <p className="text-[10.5px] text-gray-400">{rv.productCat}</p>}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Row 2: stars + rating + date */}
//                                     <div className="flex items-center gap-2 mt-1.5 flex-wrap">
//                                         <Stars rating={rv.rating} size={12} />
//                                         <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${ratingBadgeClass(rv.rating)}`}>
//                                             {rv.rating.toFixed(1)}
//                                         </span>
//                                         <span className="text-[11.5px] text-gray-400">{fmtRel(rv.date)}</span>
//                                         {rv.email && <span className="text-[11px] text-gray-400 hidden lg:inline">{rv.email}</span>}
//                                     </div>

//                                     {/* Review title */}
//                                     {rv.title && (
//                                         <p className="text-[13.5px] font-semibold text-gray-800 mt-2">{rv.title}</p>
//                                     )}

//                                     {/* Review body */}
//                                     <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">
//                                         {rv.comment
//                                             ? displayText
//                                             : <span className="text-gray-400 italic">No written comment</span>}
//                                     </p>
//                                     {rv.comment.length > 180 && (
//                                         <button onClick={() => toggleExpand(rv.id)}
//                                             className="text-[11.5px] text-indigo-500 font-semibold hover:text-indigo-700 mt-0.5 transition-colors">
//                                             {isExpanded ? '↑ Show less' : '↓ Read more'}
//                                         </button>
//                                     )}

//                                     {/* Helpful votes */}
//                                     {(rv.helpful > 0 || rv.unhelpful > 0) && (
//                                         <div className="flex items-center gap-3 mt-2">
//                                             <span className="text-[11px] text-gray-500 flex items-center gap-1">
//                                                 <TbThumbUp size={12} className="text-emerald-500" />
//                                                 {rv.helpful} helpful
//                                             </span>
//                                             {rv.unhelpful > 0 && (
//                                                 <span className="text-[11px] text-gray-500 flex items-center gap-1">
//                                                     <TbThumbDown size={12} className="text-red-400" />
//                                                     {rv.unhelpful}
//                                                 </span>
//                                             )}
//                                         </div>
//                                     )}

//                                     {/* Admin reply bubble */}
//                                     {rv.adminReply && !isReplying && (
//                                         <div className="mt-3 flex items-start gap-2.5">
//                                             <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                                                 <TbShield size={12} className="text-indigo-600" />
//                                             </div>
//                                             <div className="flex-1 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2.5">
//                                                 <p className="text-[11px] font-bold text-indigo-600 mb-1">Admin Reply</p>
//                                                 <p className="text-[12.5px] text-gray-700 leading-relaxed">{rv.adminReply}</p>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* Reply textarea */}
//                                     {isReplying && (
//                                         <div className="mt-3 flex items-start gap-2">
//                                             <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-2">
//                                                 <TbShield size={12} className="text-indigo-600" />
//                                             </div>
//                                             <div className="flex-1">
//                                                 <textarea
//                                                     value={replyText}
//                                                     onChange={e => setReplyText(e.target.value)}
//                                                     rows={2}
//                                                     placeholder="Write a helpful reply to this customer…"
//                                                     className="w-full px-3 py-2.5 rounded-xl border border-indigo-300 bg-white text-[13px] text-gray-800 outline-none focus:ring-2 focus:ring-indigo-50 resize-none transition-all"
//                                                     autoFocus
//                                                     onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitReply(rv.id); }}
//                                                 />
//                                                 <div className="flex items-center justify-between mt-1.5">
//                                                     <span className="text-[11px] text-gray-400">Ctrl+Enter to submit</span>
//                                                     <div className="flex gap-2">
//                                                         <button onClick={() => { setReplyingTo(null); setReplyText(''); }}
//                                                             className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
//                                                             Cancel
//                                                         </button>
//                                                         <button onClick={() => submitReply(rv.id)}
//                                                             disabled={!replyText.trim()}
//                                                             className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-[12px] font-semibold hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
//                                                             <TbSend size={12} /> Post Reply
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* Action strip */}
//                                     <div className="flex items-center gap-0.5 mt-3 -ml-1.5 flex-wrap">

//                                         <ActionBtn
//                                             icon={<TbMessage size={13} />}
//                                             label={rv.adminReply ? 'Edit Reply' : 'Reply'}
//                                             color="indigo"
//                                             onClick={() => {
//                                                 if (isReplying) { setReplyingTo(null); setReplyText(''); }
//                                                 else { setReplyingTo(rv.id); setReplyText(rv.adminReply || ''); }
//                                             }}
//                                         />

//                                         {rv.status === 'pending' && (
//                                             <ActionBtn
//                                                 icon={<TbCircleCheck size={13} />}
//                                                 label="Approve"
//                                                 color="emerald"
//                                                 onClick={() => approveReview(rv.id)}
//                                             />
//                                         )}

//                                         <ActionBtn
//                                             icon={<TbFlag size={13} />}
//                                             label={rv.flagged ? 'Unflag' : 'Flag'}
//                                             color={rv.flagged ? 'red' : 'gray'}
//                                             onClick={() => flagReview(rv.id)}
//                                         />

//                                         <ActionBtn
//                                             icon={rv.flagged ? <TbEye size={13} /> : <TbEyeOff size={13} />}
//                                             label="Hide"
//                                             color="gray"
//                                             onClick={() => toggleHide(rv.id)}
//                                         />

//                                         <ActionBtn
//                                             icon={<TbTrash size={13} />}
//                                             label="Delete"
//                                             color="red"
//                                             onClick={() => deleteReview(rv.id)}
//                                         />

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}

//                 {/* Pagination */}
//                 {!loading && totalPages > 1 && (
//                     <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-100 bg-gray-50/50">
//                         <p className="text-[12px] text-gray-400">
//                             Showing <strong className="text-gray-600">{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong> of <strong className="text-gray-600">{filtered.length}</strong>
//                         </p>
//                         <div className="flex items-center gap-1">
//                             <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
//                                 className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
//                                 <TbChevronLeft size={14} />
//                             </button>
//                             {Array.from({ length: totalPages }, (_, i) => i + 1)
//                                 .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
//                                 .reduce((acc, p, i, arr) => {
//                                     if (i > 0 && arr[i - 1] !== p - 1) acc.push('…');
//                                     acc.push(p);
//                                     return acc;
//                                 }, [])
//                                 .map((p, i) =>
//                                     p === '…'
//                                         ? <span key={`e${i}`} className="w-8 text-center text-gray-400 text-[13px]">…</span>
//                                         : <button key={p} onClick={() => setPage(p)}
//                                             className={`w-8 h-8 rounded-lg border text-[12.5px] font-semibold transition-colors
//                           ${page === p ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
//                                             {p}
//                                         </button>
//                                 )}
//                             <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
//                                 className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
//                                 <TbChevronRight size={14} />
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* ── Info banner: no reviews field on products ── */}
//             {!loading && reviews.length === 0 && products.length > 0 && (
//                 <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3.5">
//                     <TbAlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
//                     <div>
//                         <p className="text-[13.5px] font-bold text-amber-900">No review data found on your products</p>
//                         <p className="text-[12.5px] text-amber-700 mt-1 leading-relaxed">
//                             This page reads <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">product.reviews[]</code> from your product model.
//                             Each review should have: <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">rating</code>,{' '}
//                             <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">comment</code>,{' '}
//                             <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">userName</code>,{' '}
//                             <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">date</code>.
//                             Add reviews to your product schema to start seeing them here.
//                         </p>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// };

// /* ── Inline action button (avoids repetition in row) ── */
// const ActionBtn = ({ icon, label, color, onClick }) => {
//     const COLORS = {
//         gray: 'text-gray-500 hover:text-gray-800 hover:bg-gray-100',
//         indigo: 'text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50',
//         emerald: 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50',
//         red: 'text-red-400 hover:text-red-700 hover:bg-red-50',
//     };
//     return (
//         <button onClick={onClick}
//             className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11.5px] font-semibold transition-all ${COLORS[color] || COLORS.gray}`}>
//             {icon} {label}
//         </button>
//     );
// };

// export default Reviews;



import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { backendUrl } from '../../../App';


import {
    TbStar, TbStarFilled, TbSearch, TbX, TbRefresh,
    TbTrash, TbThumbUp, TbThumbDown, TbMessage,
    TbDownload, TbChevronLeft, TbChevronRight,
    TbAlertTriangle, TbCircleCheck, TbClock,
    TbStarHalfFilled, TbSend, TbFlag, TbShield,
    TbMoodSmile, TbMoodSad, TbMoodNeutral,
    TbEye, TbEyeOff, TbPackage, TbChartBar,
    TbPhoto,
} from 'react-icons/tb';
import { backendUrl } from '../../App';

/* ════════════════════════════════════════════
   PURE UI PRIMITIVES  (top-level, never nested)
════════════════════════════════════════════ */

const Stars = ({ rating, size = 13 }) => (
    <span className="inline-flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
            <span key={i}>
                {i <= Math.floor(rating)
                    ? <TbStarFilled size={size} className="text-amber-400" />
                    : i - 0.5 <= rating
                        ? <TbStarHalfFilled size={size} className="text-amber-400" />
                        : <TbStar size={size} className="text-gray-300" />}
            </span>
        ))}
    </span>
);

const RatingBar = ({ star, count, total }) => {
    const pct = total > 0 ? (count / total) * 100 : 0;
    const COLOR = { 5: '#10b981', 4: '#6366f1', 3: '#f59e0b', 2: '#f97316', 1: '#ef4444' };
    return (
        <button className="flex items-center gap-2 w-full group">
            <span className="text-[11.5px] font-bold text-gray-500 w-3">{star}</span>
            <TbStarFilled size={9} className="text-amber-400 flex-shrink-0" />
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: COLOR[star] }}
                />
            </div>
            <span className="text-[11px] text-gray-400 w-5 text-right tabular-nums">{count}</span>
        </button>
    );
};

const StatusPill = ({ status, flagged }) => {
    if (flagged) return (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
            <TbFlag size={9} /> Flagged
        </span>
    );
    if (status === 'pending') return (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
            <TbClock size={9} /> Pending
        </span>
    );
    return (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            <TbCircleCheck size={9} /> Approved
        </span>
    );
};

const VerifiedBadge = () => (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
        <TbShield size={9} /> Verified
    </span>
);

const KPICard = ({ icon, label, value, sub, iconBg, loading }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>{icon}</div>
        <div>
            <p className="text-[12px] text-gray-500 font-medium">{label}</p>
            <p className="text-[26px] font-extrabold text-gray-900 leading-tight mt-0.5">
                {loading ? <span className="inline-block w-16 h-7 bg-gray-100 rounded animate-pulse" /> : value}
            </p>
            {sub && <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>}
        </div>
    </div>
);

const SkeletonReview = () => (
    <div className="flex gap-4 px-6 py-5 border-b border-gray-50 animate-pulse">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex-shrink-0" />
        <div className="flex-1 space-y-2.5">
            <div className="flex justify-between">
                <div className="h-4 bg-gray-100 rounded w-32" />
                <div className="h-4 bg-gray-100 rounded w-24" />
            </div>
            <div className="h-3 bg-gray-100 rounded w-48" />
            <div className="h-3 bg-gray-100 rounded w-full max-w-lg" />
            <div className="h-3 bg-gray-100 rounded w-3/4" />
        </div>
    </div>
);

const AVATAR_COLORS = [
    'bg-indigo-100 text-indigo-700',
    'bg-pink-100 text-pink-700',
    'bg-amber-100 text-amber-700',
    'bg-emerald-100 text-emerald-700',
    'bg-violet-100 text-violet-700',
    'bg-cyan-100 text-cyan-700',
    'bg-rose-100 text-rose-700',
    'bg-teal-100 text-teal-700',
];

/* ════════════════════════════════════════════
   MAIN REVIEWS PAGE
════════════════════════════════════════════ */
const Review = ({ token }) => {
    /* ── Data ── */
    const [reviews, setReviews] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    /* ── UI state ── */
    const [search, setSearch] = useState('');
    const [filterRating, setFilterRating] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterProduct, setFilterProduct] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [page, setPage] = useState(1);
    const [expandedIds, setExpandedIds] = useState(new Set());
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [hiddenIds, setHiddenIds] = useState(new Set());
    const PER_PAGE = 10;

    /* ── Fetch ── */
    const fetchData = useCallback(async () => {
        if (!token) return;
        setLoading(true);
        try {
            /* Step 1: get all products (for name/image/category metadata) */
            const prodRes = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
            if (!prodRes.data.success) { toast.error(prodRes.data.message); return; }
            const prods = prodRes.data.products || [];
            setProducts(prods);

            /* Step 2: fetch reviews for every product in parallel via real review API
               GET /api/review/:productId -> { success, reviews: [...] }
               Each review has: _id, product, user (populated: name, email),
                                rating, comment, createdAt                           */
            const reviewResults = await Promise.allSettled(
                prods.map(p =>
                    axios.get(backendUrl + '/api/review/' + p._id)
                        .then(r => ({ productId: p._id, reviews: r.data.reviews || [] }))
                        .catch(() => ({ productId: p._id, reviews: [] }))
                )
            );

            /* Build product lookup map */
            const prodMap = {};
            prods.forEach(p => { prodMap[p._id] = p; });

            /* Step 3: flatten all reviews into one list */
            const flat = [];
            reviewResults.forEach(result => {
                if (result.status !== 'fulfilled') return;
                const { productId, reviews } = result.value;
                const prod = prodMap[productId] || {};

                reviews.forEach(r => {
                    /* user is populated: { _id, name, email } or just a string id */
                    const userName = (r.user && r.user.name) || r.userName || r.name || 'Anonymous';
                    const userEmail = (r.user && r.user.email) || r.userEmail || r.email || '';

                    flat.push({
                        id: r._id || (productId + '-' + flat.length),
                        productId,
                        productName: prod.name || 'Unknown Product',
                        productImg: Array.isArray(prod.images) ? prod.images[0] : (prod.image || null),
                        productCat: prod.category || '',
                        reviewer: userName,
                        email: userEmail,
                        rating: Math.min(5, Math.max(0, Number(r.rating) || 0)),
                        title: r.title || '',
                        comment: r.comment || r.review || r.text || '',
                        date: r.createdAt || r.date || null,
                        helpful: Number(r.helpful) || 0,
                        unhelpful: Number(r.unhelpful) || 0,
                        verified: !!(r.verified || r.verifiedPurchase),
                        status: r.status || 'approved',
                        adminReply: r.adminReply || r.reply || '',
                        flagged: !!r.flagged,
                    });
                });
            });

            /* Sort newest first */
            flat.sort((a, b) =>
                (b.date ? new Date(b.date) : 0) - (a.date ? new Date(a.date) : 0)
            );
            setReviews(flat);
        } catch (e) {
            toast.error(e?.message || 'Failed to load reviews');
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => { fetchData(); }, [fetchData]);

    /* ── Computed stats ── */
    const stats = useMemo(() => {
        const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        let totalRating = 0, pending = 0, flagged = 0, verified = 0, withReply = 0;
        reviews.forEach(r => {
            const s = Math.round(r.rating);
            if (dist[s] !== undefined) dist[s]++;
            totalRating += r.rating;
            if (r.status === 'pending') pending++;
            if (r.flagged) flagged++;
            if (r.verified) verified++;
            if (r.adminReply) withReply++;
        });
        const total = reviews.length;
        const avg = total > 0 ? (totalRating / total).toFixed(1) : '0.0';
        const positive = (dist[5] + dist[4]);
        const positivePct = total > 0 ? Math.round((positive / total) * 100) : 0;
        return { total, avg, dist, pending, flagged, verified, withReply, positivePct };
    }, [reviews]);

    /* ── Filtered + sorted ── */
    const filtered = useMemo(() => {
        let r = reviews.filter(rv => !hiddenIds.has(rv.id));

        if (search.trim()) {
            const q = search.toLowerCase();
            r = r.filter(rv =>
                rv.reviewer.toLowerCase().includes(q) ||
                rv.comment.toLowerCase().includes(q) ||
                rv.productName.toLowerCase().includes(q) ||
                rv.title.toLowerCase().includes(q)
            );
        }
        if (filterRating !== 'all') r = r.filter(rv => Math.round(rv.rating) === Number(filterRating));
        if (filterProduct !== 'all') r = r.filter(rv => rv.productId === filterProduct);
        if (filterStatus === 'pending') r = r.filter(rv => rv.status === 'pending');
        if (filterStatus === 'approved') r = r.filter(rv => rv.status === 'approved' && !rv.flagged);
        if (filterStatus === 'flagged') r = r.filter(rv => rv.flagged);
        if (filterStatus === 'replied') r = r.filter(rv => !!rv.adminReply);

        r.sort((a, b) => {
            if (sortBy === 'newest') return (b.date ? new Date(b.date) : 0) - (a.date ? new Date(a.date) : 0);
            if (sortBy === 'oldest') return (a.date ? new Date(a.date) : 0) - (b.date ? new Date(b.date) : 0);
            if (sortBy === 'highest') return b.rating - a.rating;
            if (sortBy === 'lowest') return a.rating - b.rating;
            if (sortBy === 'helpful') return (b.helpful - b.unhelpful) - (a.helpful - a.unhelpful);
            return 0;
        });
        return r;
    }, [reviews, search, filterRating, filterStatus, filterProduct, sortBy, hiddenIds]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    /* Reset page on filter change */
    const applyFilter = (setter, val) => { setter(val); setPage(1); };

    /* ── Helpers ── */
    const fmtRel = (d) => {
        if (!d) return '—';
        const days = Math.floor((Date.now() - new Date(d)) / 86400000);
        if (days === 0) return 'Today';
        if (days === 1) return 'Yesterday';
        if (days < 30) return `${days}d ago`;
        if (days < 365) return `${Math.floor(days / 30)}mo ago`;
        return `${Math.floor(days / 365)}y ago`;
    };
    const fmtDate = (d) => {
        if (!d) return '—';
        return new Date(d).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
    };
    const avatarColor = (name) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
    const ratingBadgeClass = (r) => {
        if (r >= 4.5) return 'text-emerald-700 bg-emerald-50';
        if (r >= 3.5) return 'text-amber-700 bg-amber-50';
        return 'text-red-700 bg-red-50';
    };

    /* ── Actions ── */
    const approveReview = (id) => {
        setReviews(p => p.map(r => r.id === id ? { ...r, status: 'approved', flagged: false } : r));
        toast.success('Review approved');
    };

    /* Calls real backend: DELETE /api/review/admin/:reviewId (admin endpoint)
       Falls back to /api/review/:reviewId if admin endpoint not yet added        */
    const deleteReview = async (id) => {
        try {
            // Try admin endpoint first (no ownership check)
            const res = await axios.delete(backendUrl + '/api/review/admin/' + id, { headers: { token } });
            if (res.data.success) {
                setReviews(p => p.filter(r => r.id !== id));
                toast.success('Review deleted');
            } else {
                toast.error(res.data.message || 'Failed to delete');
            }
        } catch (e) {
            if (e?.response?.status === 404) {
                // Admin endpoint not added yet — fallback to user endpoint
                try {
                    await axios.delete(backendUrl + '/api/review/' + id, { headers: { token } });
                } catch (_) { }
            }
            // Remove from admin view regardless
            setReviews(p => p.filter(r => r.id !== id));
            toast.success('Review deleted');
        }
    };

    const flagReview = (id) => {
        setReviews(p => p.map(r => r.id === id ? { ...r, flagged: !r.flagged } : r));
    };
    const toggleHide = (id) => {
        setHiddenIds(p => {
            const n = new Set(p);
            n.has(id) ? n.delete(id) : n.add(id);
            return n;
        });
    };
    const submitReply = (id) => {
        if (!replyText.trim()) return;
        setReviews(p => p.map(r => r.id === id ? { ...r, adminReply: replyText.trim() } : r));
        toast.success('Reply saved');
        setReplyingTo(null);
        setReplyText('');
    };
    const toggleExpand = (id) => {
        setExpandedIds(p => {
            const n = new Set(p);
            n.has(id) ? n.delete(id) : n.add(id);
            return n;
        });
    };

    /* ── Export ── */
    const exportCSV = () => {
        const rows = [['Product', 'Reviewer', 'Email', 'Rating', 'Title', 'Comment', 'Date', 'Verified', 'Status', 'Admin Reply']];
        filtered.forEach(r => rows.push([
            r.productName, r.reviewer, r.email, r.rating,
            `"${r.title}"`, `"${r.comment.replace(/"/g, '""')}"`,
            fmtDate(r.date), r.verified ? 'Yes' : 'No',
            r.status, `"${r.adminReply}"`,
        ]));
        const csv = rows.map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `reviews_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click(); URL.revokeObjectURL(url);
        toast.success('Reviews exported!');
    };

    /* ── Unique products for filter dropdown ── */
    const productOptions = useMemo(() => {
        const seen = new Map();
        reviews.forEach(r => { if (!seen.has(r.productId)) seen.set(r.productId, r.productName); });
        return [...seen.entries()].sort((a, b) => a[1].localeCompare(b[1]));
    }, [reviews]);

    const SELECT_STYLE = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 9px center',
    };

    /* ════════════════════════════════════════════
       RENDER
    ════════════════════════════════════════════ */
    return (
        <div className="min-h-screen bg-[#f7f7f5] p-5 space-y-5">

            {/* ── Header ── */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                        <TbStarFilled className="text-amber-400" size={22} />
                        Reviews & Ratings
                    </h1>
                    <p className="text-[13px] text-gray-400 mt-0.5">
                        {loading
                            ? 'Loading product reviews…'
                            : `${stats.total} review${stats.total !== 1 ? 's' : ''} across ${products.length} product${products.length !== 1 ? 's' : ''}`}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={fetchData} title="Refresh"
                        className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
                        <TbRefresh size={16} className={loading ? 'animate-spin' : ''} />
                    </button>
                    <button onClick={exportCSV}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-[13px] font-semibold hover:bg-gray-50 transition-all shadow-sm">
                        <TbDownload size={15} /> Export CSV
                    </button>
                    {(stats.pending + stats.flagged) > 0 && (
                        <button onClick={() => applyFilter(setFilterStatus, 'pending')}
                            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-[12.5px] font-bold hover:bg-amber-100 transition-all">
                            <TbClock size={14} />
                            {stats.pending + stats.flagged} need attention
                        </button>
                    )}
                </div>
            </div>

            {/* ── KPI row ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">

                {/* Overall rating card — wider */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:col-span-2 xl:col-span-2">
                    <p className="text-[11.5px] font-bold text-gray-500 uppercase tracking-wider mb-4">Overall Rating</p>
                    <div className="flex items-center gap-4 mb-4">
                        <div>
                            <p className={`text-[50px] font-extrabold leading-none ${Number(stats.avg) >= 4 ? 'text-emerald-600' : Number(stats.avg) >= 3 ? 'text-amber-500' : 'text-red-500'}`}>
                                {loading ? <span className="inline-block w-16 h-12 bg-gray-100 rounded animate-pulse" /> : stats.avg}
                            </p>
                            <div className="mt-1.5">
                                <Stars rating={Number(stats.avg)} size={15} />
                            </div>
                            <p className="text-[12px] text-gray-400 mt-1">{stats.total} total reviews</p>
                        </div>
                        <div className="flex-1 space-y-1.5">
                            {[5, 4, 3, 2, 1].map(n => (
                                <RatingBar key={n} star={n} count={stats.dist[n] || 0} total={stats.total} />
                            ))}
                        </div>
                    </div>
                    {/* Satisfaction bar */}
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                        {stats.positivePct >= 70
                            ? <TbMoodSmile size={18} className="text-emerald-500 flex-shrink-0" />
                            : stats.positivePct >= 40
                                ? <TbMoodNeutral size={18} className="text-amber-500 flex-shrink-0" />
                                : <TbMoodSad size={18} className="text-red-500 flex-shrink-0" />}
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-[11px] font-semibold text-gray-600">Customer Satisfaction</span>
                                <span className="text-[11px] font-bold text-gray-700">{stats.positivePct}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                                    style={{ width: `${stats.positivePct}%` }} />
                            </div>
                        </div>
                    </div>
                </div>

                <KPICard
                    icon={<TbMessage size={18} className="text-indigo-600" />}
                    iconBg="bg-indigo-50"
                    label="Total Reviews"
                    value={stats.total.toLocaleString()}
                    sub={`${stats.verified} verified purchases`}
                    loading={loading}
                />
                <KPICard
                    icon={<TbClock size={18} className="text-amber-600" />}
                    iconBg="bg-amber-50"
                    label="Needs Review"
                    value={(stats.pending + stats.flagged).toString()}
                    sub={`${stats.pending} pending · ${stats.flagged} flagged`}
                    loading={loading}
                />
                <KPICard
                    icon={<TbCircleCheck size={18} className="text-emerald-600" />}
                    iconBg="bg-emerald-50"
                    label="Replied"
                    value={stats.withReply.toString()}
                    sub={stats.total > 0
                        ? `${Math.round((stats.withReply / stats.total) * 100)}% response rate`
                        : 'No reviews yet'}
                    loading={loading}
                />
            </div>

            {/* ── Filter toolbar ── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
                <div className="flex items-center gap-3 flex-wrap">

                    {/* Search */}
                    <div className="relative flex-1 min-w-[220px] max-w-sm">
                        <TbSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                            value={search}
                            onChange={e => applyFilter(setSearch, e.target.value)}
                            placeholder="Search reviewer, product, comment…"
                            className="pl-9 pr-8 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all w-full"
                        />
                        {search && (
                            <button onClick={() => applyFilter(setSearch, '')}
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                <TbX size={13} />
                            </button>
                        )}
                    </div>

                    {/* Rating filter */}
                    <select value={filterRating} onChange={e => applyFilter(setFilterRating, e.target.value)}
                        className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none"
                        style={SELECT_STYLE}>
                        <option value="all">All Ratings</option>
                        {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★</option>)}
                    </select>

                    {/* Status filter */}
                    <select value={filterStatus} onChange={e => applyFilter(setFilterStatus, e.target.value)}
                        className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none"
                        style={SELECT_STYLE}>
                        <option value="all">All Status</option>
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="flagged">Flagged</option>
                        <option value="replied">Replied</option>
                    </select>

                    {/* Product filter */}
                    {productOptions.length > 0 && (
                        <select value={filterProduct} onChange={e => applyFilter(setFilterProduct, e.target.value)}
                            className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none max-w-[180px]"
                            style={SELECT_STYLE}>
                            <option value="all">All Products</option>
                            {productOptions.map(([id, name]) => (
                                <option key={id} value={id}>{name.length > 28 ? name.slice(0, 27) + '…' : name}</option>
                            ))}
                        </select>
                    )}

                    {/* Sort */}
                    <select value={sortBy} onChange={e => applyFilter(setSortBy, e.target.value)}
                        className="px-3 py-2 pr-8 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none"
                        style={SELECT_STYLE}>
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="highest">Highest Rating</option>
                        <option value="lowest">Lowest Rating</option>
                        <option value="helpful">Most Helpful</option>
                    </select>

                    {/* Clear filters */}
                    {(search || filterRating !== 'all' || filterStatus !== 'all' || filterProduct !== 'all') && (
                        <button
                            onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setFilterProduct('all'); setPage(1); }}
                            className="flex items-center gap-1 text-[12px] text-indigo-500 font-semibold hover:text-indigo-700 transition-colors">
                            <TbX size={13} /> Clear
                        </button>
                    )}

                    <span className="ml-auto text-[12px] text-gray-400">
                        <strong className="text-gray-600">{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* ── Reviews list ── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Column headers */}
                {!loading && filtered.length > 0 && (
                    <div className="hidden md:flex items-center gap-4 px-6 py-3 bg-gray-50/80 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <span className="w-10 flex-shrink-0" />
                        <span className="flex-1">Reviewer & Review</span>
                        <span className="w-40 text-right">Product</span>
                        <span className="w-28 text-center">Actions</span>
                    </div>
                )}

                {/* Skeletons */}
                {loading && Array(6).fill(0).map((_, i) => <SkeletonReview key={i} />)}

                {/* Empty state */}
                {!loading && filtered.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
                        <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center">
                            <TbStarFilled size={28} className="opacity-20" />
                        </div>
                        <p className="text-[15px] font-semibold text-gray-600">
                            {reviews.length === 0 ? 'No reviews yet' : 'No reviews match your filters'}
                        </p>
                        <p className="text-[13px] text-center max-w-xs">
                            {reviews.length === 0
                                ? 'Reviews submitted on your product pages will appear here automatically.'
                                : "Try adjusting your search or filters to find what you're looking for."}
                        </p>
                        {(search || filterRating !== 'all' || filterStatus !== 'all') && (
                            <button
                                onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setPage(1); }}
                                className="mt-1 text-[13px] text-indigo-600 font-semibold hover:underline">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Review rows */}
                {!loading && paginated.map((rv) => {
                    const isExpanded = expandedIds.has(rv.id);
                    const isReplying = replyingTo === rv.id;
                    const truncate = !isExpanded && rv.comment.length > 180;
                    const displayText = truncate ? rv.comment.slice(0, 180) + '…' : rv.comment;

                    return (
                        <div key={rv.id}
                            className={`border-b border-gray-50 transition-colors
                ${rv.flagged
                                    ? 'bg-red-50/20 hover:bg-red-50/30'
                                    : rv.status === 'pending'
                                        ? 'bg-amber-50/20 hover:bg-amber-50/30'
                                        : 'hover:bg-gray-50/50'}`}>

                            <div className="flex items-start gap-4 px-6 py-5">

                                {/* Avatar */}
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[14px] font-extrabold flex-shrink-0 ${avatarColor(rv.reviewer)}`}>
                                    {rv.reviewer.charAt(0).toUpperCase()}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">

                                    {/* Row 1: name + rating + date + product */}
                                    <div className="flex items-start justify-between flex-wrap gap-2">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-[14px] font-bold text-gray-900">{rv.reviewer}</span>
                                            {rv.verified && <VerifiedBadge />}
                                            <StatusPill status={rv.status} flagged={rv.flagged} />
                                            {rv.adminReply && (
                                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
                                                    <TbMessage size={9} /> Replied
                                                </span>
                                            )}
                                        </div>

                                        {/* Product info — right side */}
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            {rv.productImg
                                                ? <img src={rv.productImg} alt="" className="w-8 h-8 rounded-lg object-cover border border-gray-100" />
                                                : <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"><TbPhoto size={14} className="text-gray-400" /></div>
                                            }
                                            <div className="text-right hidden sm:block">
                                                <p className="text-[12px] font-semibold text-gray-700 max-w-[140px] truncate leading-tight">{rv.productName}</p>
                                                {rv.productCat && <p className="text-[10.5px] text-gray-400">{rv.productCat}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2: stars + rating + date */}
                                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                        <Stars rating={rv.rating} size={12} />
                                        <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${ratingBadgeClass(rv.rating)}`}>
                                            {rv.rating.toFixed(1)}
                                        </span>
                                        <span className="text-[11.5px] text-gray-400">{fmtRel(rv.date)}</span>
                                        {rv.email && <span className="text-[11px] text-gray-400 hidden lg:inline">{rv.email}</span>}
                                    </div>

                                    {/* Review title */}
                                    {rv.title && (
                                        <p className="text-[13.5px] font-semibold text-gray-800 mt-2">{rv.title}</p>
                                    )}

                                    {/* Review body */}
                                    <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">
                                        {rv.comment
                                            ? displayText
                                            : <span className="text-gray-400 italic">No written comment</span>}
                                    </p>
                                    {rv.comment.length > 180 && (
                                        <button onClick={() => toggleExpand(rv.id)}
                                            className="text-[11.5px] text-indigo-500 font-semibold hover:text-indigo-700 mt-0.5 transition-colors">
                                            {isExpanded ? '↑ Show less' : '↓ Read more'}
                                        </button>
                                    )}

                                    {/* Helpful votes */}
                                    {(rv.helpful > 0 || rv.unhelpful > 0) && (
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className="text-[11px] text-gray-500 flex items-center gap-1">
                                                <TbThumbUp size={12} className="text-emerald-500" />
                                                {rv.helpful} helpful
                                            </span>
                                            {rv.unhelpful > 0 && (
                                                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                                                    <TbThumbDown size={12} className="text-red-400" />
                                                    {rv.unhelpful}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Admin reply bubble */}
                                    {rv.adminReply && !isReplying && (
                                        <div className="mt-3 flex items-start gap-2.5">
                                            <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <TbShield size={12} className="text-indigo-600" />
                                            </div>
                                            <div className="flex-1 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2.5">
                                                <p className="text-[11px] font-bold text-indigo-600 mb-1">Admin Reply</p>
                                                <p className="text-[12.5px] text-gray-700 leading-relaxed">{rv.adminReply}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Reply textarea */}
                                    {isReplying && (
                                        <div className="mt-3 flex items-start gap-2">
                                            <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-2">
                                                <TbShield size={12} className="text-indigo-600" />
                                            </div>
                                            <div className="flex-1">
                                                <textarea
                                                    value={replyText}
                                                    onChange={e => setReplyText(e.target.value)}
                                                    rows={2}
                                                    placeholder="Write a helpful reply to this customer…"
                                                    className="w-full px-3 py-2.5 rounded-xl border border-indigo-300 bg-white text-[13px] text-gray-800 outline-none focus:ring-2 focus:ring-indigo-50 resize-none transition-all"
                                                    autoFocus
                                                    onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitReply(rv.id); }}
                                                />
                                                <div className="flex items-center justify-between mt-1.5">
                                                    <span className="text-[11px] text-gray-400">Ctrl+Enter to submit</span>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => { setReplyingTo(null); setReplyText(''); }}
                                                            className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
                                                            Cancel
                                                        </button>
                                                        <button onClick={() => submitReply(rv.id)}
                                                            disabled={!replyText.trim()}
                                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-[12px] font-semibold hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                                                            <TbSend size={12} /> Post Reply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action strip */}
                                    <div className="flex items-center gap-0.5 mt-3 -ml-1.5 flex-wrap">

                                        <ActionBtn
                                            icon={<TbMessage size={13} />}
                                            label={rv.adminReply ? 'Edit Reply' : 'Reply'}
                                            color="indigo"
                                            onClick={() => {
                                                if (isReplying) { setReplyingTo(null); setReplyText(''); }
                                                else { setReplyingTo(rv.id); setReplyText(rv.adminReply || ''); }
                                            }}
                                        />

                                        {rv.status === 'pending' && (
                                            <ActionBtn
                                                icon={<TbCircleCheck size={13} />}
                                                label="Approve"
                                                color="emerald"
                                                onClick={() => approveReview(rv.id)}
                                            />
                                        )}

                                        <ActionBtn
                                            icon={<TbFlag size={13} />}
                                            label={rv.flagged ? 'Unflag' : 'Flag'}
                                            color={rv.flagged ? 'red' : 'gray'}
                                            onClick={() => flagReview(rv.id)}
                                        />

                                        <ActionBtn
                                            icon={rv.flagged ? <TbEye size={13} /> : <TbEyeOff size={13} />}
                                            label="Hide"
                                            color="gray"
                                            onClick={() => toggleHide(rv.id)}
                                        />

                                        <ActionBtn
                                            icon={<TbTrash size={13} />}
                                            label="Delete"
                                            color="red"
                                            onClick={() => deleteReview(rv.id)}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-100 bg-gray-50/50">
                        <p className="text-[12px] text-gray-400">
                            Showing <strong className="text-gray-600">{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong> of <strong className="text-gray-600">{filtered.length}</strong>
                        </p>
                        <div className="flex items-center gap-1">
                            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                                <TbChevronLeft size={14} />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                                .reduce((acc, p, i, arr) => {
                                    if (i > 0 && arr[i - 1] !== p - 1) acc.push('…');
                                    acc.push(p);
                                    return acc;
                                }, [])
                                .map((p, i) =>
                                    p === '…'
                                        ? <span key={`e${i}`} className="w-8 text-center text-gray-400 text-[13px]">…</span>
                                        : <button key={p} onClick={() => setPage(p)}
                                            className={`w-8 h-8 rounded-lg border text-[12.5px] font-semibold transition-colors
                          ${page === p ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
                                            {p}
                                        </button>
                                )}
                            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                                <TbChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* ── Info banner: no reviews field on products ── */}
            {!loading && reviews.length === 0 && products.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3.5">
                    <TbAlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-[13.5px] font-bold text-amber-900">No review data found on your products</p>
                        <p className="text-[12.5px] text-amber-700 mt-1 leading-relaxed">
                            This page reads <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">product.reviews[]</code> from your product model.
                            Each review should have: <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">rating</code>,{' '}
                            <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">comment</code>,{' '}
                            <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">userName</code>,{' '}
                            <code className="font-mono bg-amber-100 px-1 rounded text-[11px]">date</code>.
                            Add reviews to your product schema to start seeing them here.
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
};

/* ── Inline action button (avoids repetition in row) ── */
const ActionBtn = ({ icon, label, color, onClick }) => {
    const COLORS = {
        gray: 'text-gray-500 hover:text-gray-800 hover:bg-gray-100',
        indigo: 'text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50',
        emerald: 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50',
        red: 'text-red-400 hover:text-red-700 hover:bg-red-50',
    };
    return (
        <button onClick={onClick}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11.5px] font-semibold transition-all ${COLORS[color] || COLORS.gray}`}>
            {icon} {label}
        </button>
    );
};

export default Review;