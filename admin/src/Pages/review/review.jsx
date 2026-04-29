// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import {
//     TbStar, TbStarFilled, TbSearch, TbX, TbRefresh,
//     TbTrash, TbThumbUp, TbThumbDown, TbMessage,
//     TbDownload, TbChevronLeft, TbChevronRight,
//     TbAlertTriangle, TbCircleCheck, TbClock,
//     TbStarHalfFilled, TbSend, TbFlag, TbShield,
//     TbMoodSmile, TbMoodSad, TbMoodNeutral,
//     TbEye, TbEyeOff, TbPhoto,
// } from 'react-icons/tb';
// import { backendUrl } from '../../App';

// /* ════════════════════════════════════════════════════════════════
//    D DOLLY LAMB — REVIEWS  |  Luxury dark brown & gold theme
// ════════════════════════════════════════════════════════════════ */

// const B = {
//     bg: '#0d0804', surface: '#1a0f07', surface2: '#221408', surface3: '#2a1a09',
//     border: 'rgba(201,168,76,0.18)', borderSoft: 'rgba(201,168,76,0.09)', borderMid: 'rgba(201,168,76,0.28)',
//     gold: '#c9a84c', goldLight: '#e8c46a', goldDim: 'rgba(201,168,76,0.12)', goldDim2: 'rgba(201,168,76,0.06)',
//     cream: '#f0d898', creamSoft: '#d4b87a', muted: '#8b7555', mutedSoft: '#5a4530',
//     emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)', dot: '#34d399' },
//     amber: { bg: 'rgba(251,191,36,0.11)', text: '#fcd34d', border: 'rgba(251,191,36,0.28)', dot: '#fbbf24' },
//     red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)', dot: '#f87171' },
//     blue: { bg: 'rgba(96,165,250,0.12)', text: '#93c5fd', border: 'rgba(96,165,250,0.28)', dot: '#60a5fa' },
//     indigo: { bg: 'rgba(99,102,241,0.12)', text: '#a5b4fc', border: 'rgba(99,102,241,0.25)', dot: '#818cf8' },
// };

// const AVATAR_PALETTES = [
//     { bg: 'rgba(201,168,76,0.18)', text: '#e8c46a' },
//     { bg: 'rgba(96,165,250,0.14)', text: '#93c5fd' },
//     { bg: 'rgba(52,211,153,0.12)', text: '#6ee7b7' },
//     { bg: 'rgba(244,114,182,0.14)', text: '#f9a8d4' },
//     { bg: 'rgba(167,139,250,0.14)', text: '#c4b5fd' },
//     { bg: 'rgba(34,211,238,0.12)', text: '#67e8f9' },
//     { bg: 'rgba(248,113,113,0.12)', text: '#fca5a5' },
//     { bg: 'rgba(251,191,36,0.12)', text: '#fcd34d' },
// ];

// const selSt = {
//     padding: '8px 32px 8px 12px', borderRadius: 10, fontSize: 12.5, fontWeight: 600,
//     background: B.surface2, color: B.cream, border: `1px solid ${B.border}`,
//     outline: 'none', cursor: 'pointer', appearance: 'none',
//     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238b7555' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
//     backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', transition: 'border-color .15s',
// };

// /* ══════════════════════════════════════════════════════════════
//    UI PRIMITIVES
// ══════════════════════════════════════════════════════════════ */

// const Stars = ({ rating, size = 13 }) => (
//     <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
//         {[1, 2, 3, 4, 5].map(i => (
//             <span key={i}>
//                 {i <= Math.floor(rating)
//                     ? <TbStarFilled size={size} style={{ color: '#fbbf24' }} />
//                     : i - 0.5 <= rating
//                         ? <TbStarHalfFilled size={size} style={{ color: '#fbbf24' }} />
//                         : <TbStar size={size} style={{ color: B.mutedSoft }} />}
//             </span>
//         ))}
//     </span>
// );

// const RatingBar = ({ star, count, total }) => {
//     const pct = total > 0 ? (count / total) * 100 : 0;
//     const COLORS = { 5: B.emerald.dot, 4: B.blue.dot, 3: B.amber.dot, 2: '#fb923c', 1: B.red.dot };
//     return (
//         <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
//             <span style={{ color: B.muted, fontSize: 11.5, fontWeight: 700, width: 10, flexShrink: 0 }}>{star}</span>
//             <TbStarFilled size={9} style={{ color: '#fbbf24', flexShrink: 0 }} />
//             <div style={{ flex: 1, height: 5, background: B.surface3, borderRadius: 4, overflow: 'hidden', border: `1px solid ${B.borderSoft}` }}>
//                 <div style={{ height: '100%', borderRadius: 4, width: `${pct}%`, background: COLORS[star], transition: 'width .7s' }} />
//             </div>
//             <span style={{ color: B.muted, fontSize: 11, width: 20, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{count}</span>
//         </div>
//     );
// };

// const StatusPill = ({ status, flagged }) => {
//     const s = flagged
//         ? { c: B.red, icon: <TbFlag size={9} />, label: 'Flagged' }
//         : status === 'pending'
//             ? { c: B.amber, icon: <TbClock size={9} />, label: 'Pending' }
//             : { c: B.emerald, icon: <TbCircleCheck size={9} />, label: 'Approved' };
//     return (
//         <span style={{
//             display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 700,
//             color: s.c.text, background: s.c.bg, border: `1px solid ${s.c.border}`, padding: '2px 8px', borderRadius: 99,
//         }}>{s.icon} {s.label}</span>
//     );
// };

// const VerifiedBadge = () => (
//     <span style={{
//         display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 700,
//         color: B.indigo.text, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, padding: '2px 8px', borderRadius: 99,
//     }}><TbShield size={9} /> Verified</span>
// );

// const KPICard = ({ icon, label, value, sub, accentBg, loading }) => (
//     <div style={{ background: B.surface, border: `1px solid ${B.border}`, borderRadius: 18, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}
//         onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,0,0,.4),0 0 0 1px ${B.border}`}
//         onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
//         <div style={{ width: 38, height: 38, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', background: accentBg, flexShrink: 0 }}>{icon}</div>
//         <div>
//             <p style={{ color: B.muted, fontSize: 12, fontWeight: 500 }}>{label}</p>
//             <p style={{ color: B.cream, fontSize: 26, fontWeight: 800, letterSpacing: -.5, lineHeight: 1.1, marginTop: 3 }}>
//                 {loading ? <span style={{ display: 'inline-block', width: 64, height: 28, background: B.surface2, borderRadius: 6, animation: 'rvPulse 1.5s ease-in-out infinite' }} /> : value}
//             </p>
//             {sub && <p style={{ color: B.muted, fontSize: 11, marginTop: 4 }}>{sub}</p>}
//         </div>
//     </div>
// );

// const SkeletonReview = () => (
//     <div style={{ display: 'flex', gap: 14, padding: '18px 22px', borderBottom: `1px solid ${B.borderSoft}`, animation: 'rvPulse 1.5s ease-in-out infinite' }}>
//         <div style={{ width: 40, height: 40, borderRadius: 12, background: B.surface2, flexShrink: 0 }} />
//         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
//             <div style={{ height: 14, width: 140, background: B.surface2, borderRadius: 5 }} />
//             <div style={{ height: 11, width: 200, background: B.surface2, borderRadius: 4 }} />
//             <div style={{ height: 11, width: '80%', background: B.surface2, borderRadius: 4 }} />
//         </div>
//     </div>
// );

// /* ── Action button — fixed: no browser outline, no stray borders ── */
// const ActionBtn = ({ icon, label, color, onClick }) => {
//     const [hov, setHov] = useState(false);
//     const COLS = {
//         gray: { n: { color: B.muted, bg: 'transparent' }, h: { color: B.cream, bg: B.surface3 } },
//         indigo: { n: { color: B.indigo.text, bg: 'transparent' }, h: { color: B.indigo.text, bg: B.indigo.bg } },
//         emerald: { n: { color: B.emerald.text, bg: 'transparent' }, h: { color: B.emerald.text, bg: B.emerald.bg } },
//         red: { n: { color: B.red.text, bg: 'transparent' }, h: { color: B.red.text, bg: B.red.bg } },
//     };
//     const s = (COLS[color] || COLS.gray)[hov ? 'h' : 'n'];
//     return (
//         <button onClick={onClick}
//             onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
//             style={{
//                 display: 'flex', alignItems: 'center', gap: 5,
//                 padding: '5px 9px', borderRadius: 8,
//                 fontSize: 11.5, fontWeight: 600, cursor: 'pointer',
//                 /* KEY FIXES: no border, no outline, no box-shadow */
//                 border: 'none', outline: 'none', boxShadow: 'none',
//                 transition: 'all .15s',
//                 color: s.color, background: s.bg,
//             }}>
//             {icon} {label}
//         </button>
//     );
// };

// /* ════════════════════════════════════════════════════════════════
//    MAIN REVIEWS PAGE
// ════════════════════════════════════════════════════════════════ */
// const Review = ({ token }) => {
//     const [reviews, setReviews] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
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
//             const prodRes = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
//             if (!prodRes.data.success) { toast.error(prodRes.data.message); return; }
//             const prods = prodRes.data.products || [];
//             setProducts(prods);
//             const reviewResults = await Promise.allSettled(
//                 prods.map(p =>
//                     axios.get(backendUrl + '/api/review/' + p._id)
//                         .then(r => ({ productId: p._id, reviews: r.data.reviews || [] }))
//                         .catch(() => ({ productId: p._id, reviews: [] }))
//                 )
//             );
//             const prodMap = {};
//             prods.forEach(p => { prodMap[p._id] = p; });
//             const flat = [];
//             reviewResults.forEach(result => {
//                 if (result.status !== 'fulfilled') return;
//                 const { productId, reviews } = result.value;
//                 const prod = prodMap[productId] || {};
//                 reviews.forEach(r => {
//                     flat.push({
//                         id: r._id || (productId + '-' + flat.length),
//                         productId, productName: prod.name || 'Unknown Product',
//                         productImg: Array.isArray(prod.image) ? (prod.image.filter(Boolean)[0] || null) : (prod.image || null),
//                         productCat: prod.category || '',
//                         reviewer: (r.user?.name) || r.userName || r.name || 'Anonymous',
//                         email: (r.user?.email) || r.userEmail || r.email || '',
//                         rating: Math.min(5, Math.max(0, Number(r.rating) || 0)),
//                         title: r.title || '', comment: r.comment || r.review || r.text || '',
//                         date: r.createdAt || r.date || null,
//                         helpful: Number(r.helpful) || 0, unhelpful: Number(r.unhelpful) || 0,
//                         verified: !!(r.verified || r.verifiedPurchase),
//                         status: r.status || 'approved',
//                         adminReply: r.adminReply || r.reply || '', flagged: !!r.flagged,
//                     });
//                 });
//             });
//             flat.sort((a, b) => (b.date ? new Date(b.date) : 0) - (a.date ? new Date(a.date) : 0));
//             setReviews(flat);
//         } catch (e) { toast.error(e?.message || 'Failed to load reviews'); }
//         finally { setLoading(false); }
//     }, [token]);

//     useEffect(() => { fetchData(); }, [fetchData]);

//     const stats = useMemo(() => {
//         const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
//         let totalRating = 0, pending = 0, flagged = 0, verified = 0, withReply = 0;
//         reviews.forEach(r => {
//             const s = Math.round(r.rating); if (dist[s] !== undefined) dist[s]++;
//             totalRating += r.rating;
//             if (r.status === 'pending') pending++;
//             if (r.flagged) flagged++;
//             if (r.verified) verified++;
//             if (r.adminReply) withReply++;
//         });
//         const total = reviews.length;
//         const avg = total > 0 ? (totalRating / total).toFixed(1) : '0.0';
//         const positivePct = total > 0 ? Math.round(((dist[5] + dist[4]) / total) * 100) : 0;
//         return { total, avg, dist, pending, flagged, verified, withReply, positivePct };
//     }, [reviews]);

//     const filtered = useMemo(() => {
//         let r = reviews.filter(rv => !hiddenIds.has(rv.id));
//         if (search.trim()) { const q = search.toLowerCase(); r = r.filter(rv => rv.reviewer.toLowerCase().includes(q) || rv.comment.toLowerCase().includes(q) || rv.productName.toLowerCase().includes(q) || rv.title.toLowerCase().includes(q)); }
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
//     const applyFilter = (setter, val) => { setter(val); setPage(1); };

//     const fmtRel = d => { if (!d) return '—'; const days = Math.floor((Date.now() - new Date(d)) / 86400000); if (days === 0) return 'Today'; if (days === 1) return 'Yesterday'; if (days < 30) return `${days}d ago`; if (days < 365) return `${Math.floor(days / 30)}mo ago`; return `${Math.floor(days / 365)}y ago`; };
//     const fmtDate = d => { if (!d) return '—'; return new Date(d).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }); };
//     const avatarPal = name => AVATAR_PALETTES[name.charCodeAt(0) % AVATAR_PALETTES.length];
//     const ratingColor = r => r >= 4.5 ? B.emerald.text : r >= 3.5 ? B.amber.text : B.red.text;
//     const ratingBg = r => r >= 4.5 ? B.emerald.bg : r >= 3.5 ? B.amber.bg : B.red.bg;

//     const approveReview = id => { setReviews(p => p.map(r => r.id === id ? { ...r, status: 'approved', flagged: false } : r)); toast.success('Review approved'); };
//     const deleteReview = async id => {
//         try {
//             const res = await axios.delete(backendUrl + '/api/review/admin/' + id, { headers: { token } });
//             if (res.data.success) { setReviews(p => p.filter(r => r.id !== id)); toast.success('Review deleted'); }
//             else toast.error(res.data.message || 'Failed to delete');
//         } catch (e) {
//             if (e?.response?.status === 404) { try { await axios.delete(backendUrl + '/api/review/' + id, { headers: { token } }); } catch (_) { } }
//             setReviews(p => p.filter(r => r.id !== id)); toast.success('Review deleted');
//         }
//     };
//     const flagReview = id => setReviews(p => p.map(r => r.id === id ? { ...r, flagged: !r.flagged } : r));
//     const toggleHide = id => setHiddenIds(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
//     const submitReply = id => { if (!replyText.trim()) return; setReviews(p => p.map(r => r.id === id ? { ...r, adminReply: replyText.trim() } : r)); toast.success('Reply saved'); setReplyingTo(null); setReplyText(''); };
//     const toggleExpand = id => setExpandedIds(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });

//     const exportCSV = () => {
//         const rows = [['Product', 'Reviewer', 'Email', 'Rating', 'Title', 'Comment', 'Date', 'Verified', 'Status', 'Admin Reply']];
//         filtered.forEach(r => rows.push([r.productName, r.reviewer, r.email, r.rating, `"${r.title}"`, `"${r.comment.replace(/"/g, '""')}"`, fmtDate(r.date), r.verified ? 'Yes' : 'No', r.status, `"${r.adminReply}"`]));
//         const csv = rows.map(r => r.join(',')).join('\n');
//         const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob);
//         const a = document.createElement('a'); a.href = url; a.download = `reviews_${new Date().toISOString().slice(0, 10)}.csv`; a.click(); URL.revokeObjectURL(url);
//         toast.success('Reviews exported!');
//     };

//     const productOptions = useMemo(() => { const seen = new Map(); reviews.forEach(r => { if (!seen.has(r.productId)) seen.set(r.productId, r.productName); }); return [...seen.entries()].sort((a, b) => a[1].localeCompare(b[1])); }, [reviews]);

//     /* ── Column layout: review gets most space, product and actions fixed ── */
//     const ROW_COLS = '1fr 200px 140px';

//     /* ════════════════════════════════════════════════════════════════
//        RENDER
//     ════════════════════════════════════════════════════════════════ */
//     return (
//         <div style={{
//             minHeight: '100vh', background: B.bg, padding: '20px 24px 48px',
//             fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased',
//             display: 'flex', flexDirection: 'column', gap: 18,
//         }}>
//             <style>{`
//                 @keyframes rvPulse  {0%,100%{opacity:1}50%{opacity:.4}}
//                 @keyframes rvFadeUp {from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
//                 @keyframes rvSpin   {to{transform:rotate(360deg)}}
//                 .rv-spin {animation:rvSpin .85s linear infinite}
//                 /* Remove ALL focus outlines/rings from buttons globally within this component */
//                 button:focus { outline: none !important; box-shadow: none !important; }
//                 button:focus-visible { outline: none !important; box-shadow: none !important; }
//                 .rv-kpi-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
//                 @media(max-width:900px){.rv-kpi-grid{grid-template-columns:1fr 1fr!important}}
//                 @media(max-width:900px){.rv-kpi-overall{grid-column:span 2!important}}
//             `}</style>

//             {/* ══ HEADER ══ */}
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
//                 <div>
//                     <h1 style={{ color: B.cream, fontSize: 22, fontWeight: 800, letterSpacing: -.5, display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
//                         <TbStarFilled size={22} style={{ color: B.gold }} />
//                         Reviews & Ratings
//                     </h1>
//                     <p style={{ color: B.muted, fontSize: 13, marginTop: 4 }}>
//                         {loading ? 'Loading product reviews…' : `${stats.total} review${stats.total !== 1 ? 's' : ''} across ${products.length} product${products.length !== 1 ? 's' : ''}`}
//                     </p>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                     <button onClick={fetchData} title="Refresh" style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${B.border}`, outline: 'none', background: 'transparent', color: B.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s' }}
//                         onMouseEnter={e => { e.currentTarget.style.color = B.gold; e.currentTarget.style.background = B.goldDim; }}
//                         onMouseLeave={e => { e.currentTarget.style.color = B.muted; e.currentTarget.style.background = 'transparent'; }}>
//                         <TbRefresh size={16} className={loading ? 'rv-spin' : undefined} />
//                     </button>
//                     <button onClick={exportCSV} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 10, background: B.surface, color: B.cream, border: `1px solid ${B.border}`, outline: 'none', fontSize: 12.5, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
//                         onMouseEnter={e => e.currentTarget.style.background = B.goldDim}
//                         onMouseLeave={e => e.currentTarget.style.background = B.surface}>
//                         <TbDownload size={14} /> Export CSV
//                     </button>
//                     {(stats.pending + stats.flagged) > 0 && (
//                         <button onClick={() => applyFilter(setFilterStatus, 'pending')} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 10, background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`, outline: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}>
//                             <TbClock size={14} /> {stats.pending + stats.flagged} need attention
//                         </button>
//                     )}
//                 </div>
//             </div>

//             {/* ══ KPI ROW ══ */}
//             <div className="rv-kpi-grid">
//                 {/* Overall rating — spans 2 cols */}
//                 <div className="rv-kpi-overall" style={{ background: B.surface, border: `1px solid ${B.border}`, borderRadius: 18, padding: '20px 22px', gridColumn: 'span 2' }}>
//                     <p style={{ color: B.muted, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 16 }}>Overall Rating</p>
//                     <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 16 }}>
//                         <div>
//                             <p style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, letterSpacing: -2, color: Number(stats.avg) >= 4 ? B.emerald.text : Number(stats.avg) >= 3 ? B.amber.text : B.red.text }}>
//                                 {loading ? <span style={{ display: 'inline-block', width: 64, height: 48, background: B.surface2, borderRadius: 8, animation: 'rvPulse 1.5s ease-in-out infinite' }} /> : stats.avg}
//                             </p>
//                             <div style={{ marginTop: 6 }}><Stars rating={Number(stats.avg)} size={15} /></div>
//                             <p style={{ color: B.muted, fontSize: 11.5, marginTop: 5 }}>{stats.total} total reviews</p>
//                         </div>
//                         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
//                             {[5, 4, 3, 2, 1].map(n => <RatingBar key={n} star={n} count={stats.dist[n] || 0} total={stats.total} />)}
//                         </div>
//                     </div>
//                     {/* Satisfaction bar */}
//                     <div style={{ background: B.surface2, border: `1px solid ${B.borderSoft}`, borderRadius: 11, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
//                         {stats.positivePct >= 70 ? <TbMoodSmile size={18} style={{ color: B.emerald.text, flexShrink: 0 }} /> : stats.positivePct >= 40 ? <TbMoodNeutral size={18} style={{ color: B.amber.text, flexShrink: 0 }} /> : <TbMoodSad size={18} style={{ color: B.red.text, flexShrink: 0 }} />}
//                         <div style={{ flex: 1 }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
//                                 <span style={{ color: B.creamSoft, fontSize: 11, fontWeight: 600 }}>Customer Satisfaction</span>
//                                 <span style={{ color: B.gold, fontSize: 11, fontWeight: 700 }}>{stats.positivePct}%</span>
//                             </div>
//                             <div style={{ height: 4, background: B.surface3, borderRadius: 4, overflow: 'hidden' }}>
//                                 <div style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg,${B.emerald.dot},${B.gold})`, width: `${stats.positivePct}%`, transition: 'width .7s' }} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <KPICard icon={<TbMessage size={17} style={{ color: B.indigo.text }} />} accentBg={B.indigo.bg} label="Total Reviews" value={stats.total.toLocaleString()} sub={`${stats.verified} verified purchases`} loading={loading} />
//                 <KPICard icon={<TbClock size={17} style={{ color: B.amber.text }} />} accentBg={B.amber.bg} label="Needs Review" value={(stats.pending + stats.flagged).toString()} sub={`${stats.pending} pending · ${stats.flagged} flagged`} loading={loading} />
//                 <KPICard icon={<TbCircleCheck size={17} style={{ color: B.emerald.text }} />} accentBg={B.emerald.bg} label="Replied" value={stats.withReply.toString()} sub={stats.total > 0 ? `${Math.round((stats.withReply / stats.total) * 100)}% response rate` : 'No reviews yet'} loading={loading} />
//             </div>

//             {/* ══ FILTER TOOLBAR ══ */}
//             <div style={{ background: B.surface, border: `1px solid ${B.border}`, borderRadius: 18, padding: '14px 18px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
//                     <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
//                         <TbSearch size={14} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: B.muted, pointerEvents: 'none' }} />
//                         <input value={search} onChange={e => applyFilter(setSearch, e.target.value)} placeholder="Search reviewer, product, comment…"
//                             style={{ width: '100%', padding: '8px 34px', borderRadius: 10, background: B.surface2, color: B.cream, border: `1px solid ${B.border}`, fontSize: 13, outline: 'none', transition: 'border-color .15s', boxSizing: 'border-box' }}
//                             onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.border} />
//                         {search && <button onClick={() => applyFilter(setSearch, '')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', outline: 'none', color: B.muted, cursor: 'pointer' }}><TbX size={13} /></button>}
//                     </div>

//                     <select value={filterRating} onChange={e => applyFilter(setFilterRating, e.target.value)} style={selSt} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.border}>
//                         <option value="all" style={{ background: B.surface2 }}>All Ratings</option>
//                         {[5, 4, 3, 2, 1].map(n => <option key={n} value={n} style={{ background: B.surface2 }}>{n} ★</option>)}
//                     </select>

//                     <select value={filterStatus} onChange={e => applyFilter(setFilterStatus, e.target.value)} style={selSt} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.border}>
//                         {[['all', 'All Status'], ['approved', 'Approved'], ['pending', 'Pending'], ['flagged', 'Flagged'], ['replied', 'Replied']].map(([v, l]) =>
//                             <option key={v} value={v} style={{ background: B.surface2 }}>{l}</option>)}
//                     </select>

//                     {productOptions.length > 0 && (
//                         <select value={filterProduct} onChange={e => applyFilter(setFilterProduct, e.target.value)} style={{ ...selSt, maxWidth: 180 }} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.border}>
//                             <option value="all" style={{ background: B.surface2 }}>All Products</option>
//                             {productOptions.map(([id, name]) => <option key={id} value={id} style={{ background: B.surface2 }}>{name.length > 28 ? name.slice(0, 27) + '…' : name}</option>)}
//                         </select>
//                     )}

//                     <select value={sortBy} onChange={e => applyFilter(setSortBy, e.target.value)} style={selSt} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.border}>
//                         {[['newest', 'Newest First'], ['oldest', 'Oldest First'], ['highest', 'Highest Rating'], ['lowest', 'Lowest Rating'], ['helpful', 'Most Helpful']].map(([v, l]) =>
//                             <option key={v} value={v} style={{ background: B.surface2 }}>{l}</option>)}
//                     </select>

//                     {(search || filterRating !== 'all' || filterStatus !== 'all' || filterProduct !== 'all') && (
//                         <button onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setFilterProduct('all'); setPage(1); }}
//                             style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: B.gold, fontWeight: 600, background: 'none', border: 'none', outline: 'none', cursor: 'pointer' }}>
//                             <TbX size={12} /> Clear
//                         </button>
//                     )}
//                     <span style={{ marginLeft: 'auto', color: B.muted, fontSize: 12 }}>
//                         <strong style={{ color: B.cream }}>{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''}
//                     </span>
//                 </div>
//             </div>

//             {/* ══ REVIEWS LIST ══ */}
//             <div style={{ background: B.surface, border: `1px solid ${B.border}`, borderRadius: 18, overflow: 'hidden' }}>

//                 {/* Column header */}
//                 {!loading && filtered.length > 0 && (
//                     <div style={{ display: 'grid', gridTemplateColumns: ROW_COLS, alignItems: 'center', padding: '10px 22px', borderBottom: `1px solid ${B.borderSoft}`, background: B.surface2 }}>
//                         <span style={{ color: B.muted, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px' }}>Reviewer &amp; Review</span>
//                         <span style={{ color: B.muted, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', textAlign: 'center', paddingLeft: 16 }}>Product</span>
//                         <span style={{ color: B.muted, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', textAlign: 'left', paddingLeft: 16 }}>Actions</span>
//                     </div>
//                 )}

//                 {/* Skeletons */}
//                 {loading && Array(6).fill(0).map((_, i) => <SkeletonReview key={i} />)}

//                 {/* Empty state */}
//                 {!loading && filtered.length === 0 && (
//                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 24px', gap: 12 }}>
//                         <div style={{ width: 64, height: 64, borderRadius: 18, background: B.surface2, border: `1px solid ${B.borderSoft}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <TbStarFilled size={28} style={{ color: B.mutedSoft, opacity: .4 }} />
//                         </div>
//                         <p style={{ color: B.cream, fontSize: 15, fontWeight: 700 }}>{reviews.length === 0 ? 'No reviews yet' : 'No reviews match your filters'}</p>
//                         <p style={{ color: B.muted, fontSize: 13, textAlign: 'center', maxWidth: 320, lineHeight: 1.6 }}>
//                             {reviews.length === 0 ? 'Reviews submitted on your product pages will appear here automatically.' : 'Try adjusting your search or filters.'}
//                         </p>
//                         {(search || filterRating !== 'all' || filterStatus !== 'all') && (
//                             <button onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setPage(1); }}
//                                 style={{ color: B.gold, fontSize: 13, fontWeight: 600, background: 'none', border: 'none', outline: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
//                                 Clear all filters
//                             </button>
//                         )}
//                     </div>
//                 )}

//                 {/* Review rows */}
//                 {!loading && paginated.map(rv => {
//                     const isExpanded = expandedIds.has(rv.id);
//                     const isReplying = replyingTo === rv.id;
//                     const truncate = !isExpanded && rv.comment.length > 180;
//                     const displayText = truncate ? rv.comment.slice(0, 180) + '…' : rv.comment;
//                     const pal = avatarPal(rv.reviewer);
//                     const rowBg = rv.flagged ? 'rgba(248,113,113,0.04)' : rv.status === 'pending' ? 'rgba(251,191,36,0.04)' : 'transparent';

//                     return (
//                         <div key={rv.id} style={{ borderBottom: `1px solid ${B.borderSoft}`, background: rowBg, transition: 'background .12s' }}
//                             onMouseEnter={e => e.currentTarget.style.background = B.goldDim2}
//                             onMouseLeave={e => e.currentTarget.style.background = rowBg}>

//                             <div style={{ display: 'grid', gridTemplateColumns: ROW_COLS, alignItems: 'flex-start', padding: '16px 22px' }}>

//                                 {/* ── COL 1: Reviewer + Review content ── */}
//                                 <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, minWidth: 0, paddingRight: 18 }}>
//                                     {/* Avatar */}
//                                     <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, background: pal.bg, color: pal.text, border: `1px solid ${pal.text}25` }}>
//                                         {rv.reviewer.charAt(0).toUpperCase()}
//                                     </div>
//                                     {/* Content */}
//                                     <div style={{ flex: 1, minWidth: 0 }}>
//                                         {/* Name + badges */}
//                                         <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
//                                             <span style={{ color: B.cream, fontSize: 14, fontWeight: 700 }}>{rv.reviewer}</span>
//                                             {rv.verified && <VerifiedBadge />}
//                                             <StatusPill status={rv.status} flagged={rv.flagged} />
//                                             {rv.adminReply && (
//                                                 <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 700, color: B.indigo.text, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, padding: '2px 8px', borderRadius: 99 }}>
//                                                     <TbMessage size={9} /> Replied
//                                                 </span>
//                                             )}
//                                         </div>
//                                         {/* Stars + meta */}
//                                         <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
//                                             <Stars rating={rv.rating} size={12} />
//                                             <span style={{ fontSize: 11, fontWeight: 800, padding: '2px 7px', borderRadius: 7, color: ratingColor(rv.rating), background: ratingBg(rv.rating) }}>{rv.rating.toFixed(1)}</span>
//                                             <span style={{ color: B.muted, fontSize: 11.5 }}>{fmtRel(rv.date)}</span>
//                                             {rv.email && <span style={{ color: B.mutedSoft, fontSize: 11 }}>{rv.email}</span>}
//                                         </div>
//                                         {rv.title && <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 600, marginTop: 8 }}>{rv.title}</p>}
//                                         <p style={{ color: B.creamSoft, fontSize: 13, marginTop: 5, lineHeight: 1.65 }}>
//                                             {rv.comment ? displayText : <span style={{ color: B.mutedSoft, fontStyle: 'italic' }}>No written comment</span>}
//                                         </p>
//                                         {rv.comment.length > 180 && (
//                                             <button onClick={() => toggleExpand(rv.id)} style={{ fontSize: 11.5, color: B.gold, fontWeight: 600, background: 'none', border: 'none', outline: 'none', cursor: 'pointer', marginTop: 2 }}>
//                                                 {isExpanded ? '↑ Show less' : '↓ Read more'}
//                                             </button>
//                                         )}
//                                         {/* Helpful votes */}
//                                         {(rv.helpful > 0 || rv.unhelpful > 0) && (
//                                             <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 7 }}>
//                                                 <span style={{ color: B.muted, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><TbThumbUp size={12} style={{ color: B.emerald.text }} /> {rv.helpful} helpful</span>
//                                                 {rv.unhelpful > 0 && <span style={{ color: B.muted, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><TbThumbDown size={12} style={{ color: B.red.text }} /> {rv.unhelpful}</span>}
//                                             </div>
//                                         )}
//                                         {/* Admin reply bubble */}
//                                         {rv.adminReply && !isReplying && (
//                                             <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
//                                                 <div style={{ width: 24, height: 24, borderRadius: 8, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
//                                                     <TbShield size={12} style={{ color: B.indigo.text }} />
//                                                 </div>
//                                                 <div style={{ flex: 1, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, borderRadius: 12, padding: '10px 14px' }}>
//                                                     <p style={{ color: B.indigo.text, fontSize: 10.5, fontWeight: 700, marginBottom: 5 }}>Admin Reply</p>
//                                                     <p style={{ color: B.creamSoft, fontSize: 12.5, lineHeight: 1.6 }}>{rv.adminReply}</p>
//                                                 </div>
//                                             </div>
//                                         )}
//                                         {/* Reply textarea */}
//                                         {isReplying && (
//                                             <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
//                                                 <div style={{ width: 24, height: 24, borderRadius: 8, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 8 }}>
//                                                     <TbShield size={12} style={{ color: B.indigo.text }} />
//                                                 </div>
//                                                 <div style={{ flex: 1 }}>
//                                                     <textarea value={replyText} onChange={e => setReplyText(e.target.value)} rows={2} placeholder="Write a helpful reply…" autoFocus
//                                                         onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitReply(rv.id); }}
//                                                         style={{ width: '100%', padding: '10px 12px', borderRadius: 10, background: B.surface2, color: B.cream, border: `1px solid ${B.gold}`, fontSize: 13, outline: 'none', resize: 'none', transition: 'all .15s', boxSizing: 'border-box' }} />
//                                                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 7 }}>
//                                                         <span style={{ color: B.muted, fontSize: 11 }}>Ctrl+Enter to submit</span>
//                                                         <div style={{ display: 'flex', gap: 7 }}>
//                                                             <button onClick={() => { setReplyingTo(null); setReplyText(''); }} style={{ padding: '6px 12px', borderRadius: 8, border: `1px solid ${B.border}`, outline: 'none', background: 'transparent', color: B.muted, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
//                                                             <button onClick={() => submitReply(rv.id)} disabled={!replyText.trim()} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 14px', borderRadius: 8, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', outline: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer', opacity: replyText.trim() ? 1 : .4 }}>
//                                                                 <TbSend size={12} /> Post Reply
//                                                             </button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* ── COL 2: Product ── */}
//                                 <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 16, paddingRight: 8, borderLeft: `1px solid ${B.borderSoft}`, alignSelf: 'flex-start', marginTop: 2 }}>
//                                     {rv.productImg
//                                         ? <img src={rv.productImg} alt="" style={{ width: 38, height: 38, borderRadius: 9, objectFit: 'cover', border: `1px solid ${B.border}`, flexShrink: 0 }} />
//                                         : <div style={{ width: 38, height: 38, borderRadius: 9, background: B.surface2, border: `1px solid ${B.borderSoft}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><TbPhoto size={15} style={{ color: B.muted }} /></div>
//                                     }
//                                     <div style={{ minWidth: 0 }}>
//                                         <p style={{ color: B.creamSoft, fontSize: 12, fontWeight: 600, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', maxWidth: 110 }}>
//                                             {rv.productName}
//                                         </p>
//                                         {rv.productCat && <p style={{ color: B.muted, fontSize: 10.5, marginTop: 2 }}>{rv.productCat}</p>}
//                                     </div>
//                                 </div>

//                                 {/* ── COL 3: Actions — clean vertical list, no borders ── */}
//                                 <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 16, borderLeft: `1px solid ${B.borderSoft}`, alignSelf: 'flex-start', marginTop: 2 }}>
//                                     <ActionBtn icon={<TbMessage size={13} />} label={rv.adminReply ? 'Edit Reply' : 'Reply'} color="indigo"
//                                         onClick={() => { if (isReplying) { setReplyingTo(null); setReplyText(''); } else { setReplyingTo(rv.id); setReplyText(rv.adminReply || ''); } }} />
//                                     {rv.status === 'pending' && (
//                                         <ActionBtn icon={<TbCircleCheck size={13} />} label="Approve" color="emerald" onClick={() => approveReview(rv.id)} />
//                                     )}
//                                     <ActionBtn icon={<TbFlag size={13} />} label={rv.flagged ? 'Unflag' : 'Flag'} color={rv.flagged ? 'red' : 'gray'} onClick={() => flagReview(rv.id)} />
//                                     <ActionBtn icon={<TbEyeOff size={13} />} label="Hide" color="gray" onClick={() => toggleHide(rv.id)} />
//                                     <ActionBtn icon={<TbTrash size={13} />} label="Delete" color="red" onClick={() => deleteReview(rv.id)} />
//                                 </div>

//                             </div>
//                         </div>
//                     );
//                 })}

//                 {/* Pagination */}
//                 {!loading && totalPages > 1 && (
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px', borderTop: `1px solid ${B.borderSoft}`, background: B.surface2, flexWrap: 'wrap', gap: 10 }}>
//                         <p style={{ color: B.muted, fontSize: 12.5 }}>
//                             Showing <strong style={{ color: B.cream }}>{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong> of <strong style={{ color: B.cream }}>{filtered.length}</strong>
//                         </p>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                             <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
//                                 style={{ width: 32, height: 32, borderRadius: 9, border: `1px solid ${B.border}`, outline: 'none', background: B.surface, color: B.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: page === 1 ? .35 : 1, transition: 'all .15s' }}
//                                 onMouseEnter={e => { if (page !== 1) e.currentTarget.style.borderColor = B.gold; }}
//                                 onMouseLeave={e => e.currentTarget.style.borderColor = B.border}>
//                                 <TbChevronLeft size={14} />
//                             </button>
//                             {Array.from({ length: totalPages }, (_, i) => i + 1)
//                                 .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
//                                 .reduce((acc, p, i, arr) => { if (i > 0 && arr[i - 1] !== p - 1) acc.push('…'); acc.push(p); return acc; }, [])
//                                 .map((p, i) => p === '…'
//                                     ? <span key={`e${i}`} style={{ width: 32, textAlign: 'center', color: B.muted, fontSize: 13 }}>…</span>
//                                     : <button key={p} onClick={() => setPage(p)} style={{ width: 32, height: 32, borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s', outline: 'none', border: `1px solid ${page === p ? B.gold : B.border}`, background: page === p ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : B.surface, color: page === p ? B.bg : B.muted }}>{p}</button>
//                                 )}
//                             <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
//                                 style={{ width: 32, height: 32, borderRadius: 9, border: `1px solid ${B.border}`, outline: 'none', background: B.surface, color: B.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: page === totalPages ? .35 : 1, transition: 'all .15s' }}
//                                 onMouseEnter={e => { if (page !== totalPages) e.currentTarget.style.borderColor = B.gold; }}
//                                 onMouseLeave={e => e.currentTarget.style.borderColor = B.border}>
//                                 <TbChevronRight size={14} />
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Info banner */}
//             {!loading && reviews.length === 0 && products.length > 0 && (
//                 <div style={{ background: B.amber.bg, border: `1px solid ${B.amber.border}`, borderRadius: 16, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
//                     <TbAlertTriangle size={18} style={{ color: B.amber.text, flexShrink: 0, marginTop: 2 }} />
//                     <div>
//                         <p style={{ color: B.amber.text, fontSize: 13.5, fontWeight: 700, marginBottom: 5 }}>No review data found on your products</p>
//                         <p style={{ color: B.creamSoft, fontSize: 12.5, lineHeight: 1.6 }}>
//                             This page reads <code style={{ fontFamily: 'monospace', background: 'rgba(201,168,76,0.15)', padding: '1px 5px', borderRadius: 4, fontSize: 11 }}>product.reviews[]</code> from your product model.
//                         </p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Review;



import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    TbStar, TbStarFilled, TbSearch, TbX, TbRefresh,
    TbTrash, TbThumbUp, TbThumbDown, TbMessage,
    TbDownload, TbChevronLeft, TbChevronRight,
    TbAlertTriangle, TbCircleCheck, TbClock,
    TbStarHalfFilled, TbSend, TbFlag, TbShield,
    TbMoodSmile, TbMoodSad, TbMoodNeutral,
    TbEye, TbEyeOff, TbPhoto,
} from 'react-icons/tb';
import { backendUrl } from '../../App';

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — REVIEWS  |  Light Luxury Theme
   Warm ivory · ink navy · forest green · semantic colors
════════════════════════════════════════════════════════════════ */

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
    champ: '#B8985A',   // star colour
    champBg: '#FBF5E8',
    champBorder: '#DBC98A',
    champText: '#8B6914',
    goldDim2: 'rgba(26,122,74,0.04)',
    emerald: { bg: '#E8F4EE', text: '#065F2C', border: '#A8D5BC', dot: '#1A7A4A' },
    amber: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', dot: '#D97706' },
    red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444' },
    blue: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE', dot: '#3B82F6' },
    indigo: { bg: '#F5F3FF', text: '#4C1D95', border: '#DDD6FE', dot: '#7C3AED' },
};

const AVATAR_PALETTES = [
    { bg: '#E8F4EE', text: '#1A7A4A' },
    { bg: '#EFF6FF', text: '#1E40AF' },
    { bg: '#FEF3C7', text: '#92400E' },
    { bg: '#FDF2F8', text: '#BE185D' },
    { bg: '#F5F3FF', text: '#4C1D95' },
    { bg: '#ECFEFF', text: '#0E7490' },
    { bg: '#FEF2F2', text: '#991B1B' },
    { bg: '#FBF5E8', text: '#8B6914' },
];

const selSt = {
    padding: '8px 32px 8px 12px', borderRadius: 9, fontSize: 12.5, fontWeight: 600,
    background: '#FFFFFF', color: '#4A6070', border: '1px solid #E0DBD3',
    outline: 'none', cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238FA0AD' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', transition: 'border-color .15s',
};

/* ══════════════════════════════════════════════════════════════
   UI PRIMITIVES
══════════════════════════════════════════════════════════════ */

const Stars = ({ rating, size = 13 }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
        {[1, 2, 3, 4, 5].map(i => (
            <span key={i}>
                {i <= Math.floor(rating)
                    ? <TbStarFilled size={size} style={{ color: '#D97706' }} />
                    : i - 0.5 <= rating
                        ? <TbStarHalfFilled size={size} style={{ color: '#D97706' }} />
                        : <TbStar size={size} style={{ color: B.borderMid }} />}
            </span>
        ))}
    </span>
);

const RatingBar = ({ star, count, total }) => {
    const pct = total > 0 ? (count / total) * 100 : 0;
    const COLORS = { 5: B.emerald.dot, 4: B.blue.dot, 3: B.amber.dot, 2: '#F97316', 1: B.red.dot };
    const TRACKS = { 5: B.emerald.bg, 4: B.blue.bg, 3: B.amber.bg, 2: '#FFF7ED', 1: B.red.bg };
    const BORDERS = { 5: B.emerald.border, 4: B.blue.border, 3: B.amber.border, 2: '#FED7AA', 1: B.red.border };
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
            <span style={{ color: B.navyGhost, fontSize: 11.5, fontWeight: 700, width: 10, flexShrink: 0 }}>{star}</span>
            <TbStarFilled size={9} style={{ color: '#D97706', flexShrink: 0 }} />
            <div style={{ flex: 1, height: 6, background: TRACKS[star], borderRadius: 4, overflow: 'hidden', border: `1px solid ${BORDERS[star]}` }}>
                <div style={{ height: '100%', borderRadius: 4, width: `${pct}%`, background: COLORS[star], transition: 'width .7s' }} />
            </div>
            <span style={{ color: B.navyGhost, fontSize: 11, width: 20, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{count}</span>
        </div>
    );
};

const StatusPill = ({ status, flagged }) => {
    const s = flagged
        ? { c: B.red, icon: <TbFlag size={9} />, label: 'Flagged' }
        : status === 'pending'
            ? { c: B.amber, icon: <TbClock size={9} />, label: 'Pending' }
            : { c: B.emerald, icon: <TbCircleCheck size={9} />, label: 'Approved' };
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 700, color: s.c.text, background: s.c.bg, border: `1px solid ${s.c.border}`, padding: '2px 8px', borderRadius: 99 }}>
            {s.icon} {s.label}
        </span>
    );
};

const VerifiedBadge = () => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 700, color: B.blue.text, background: B.blue.bg, border: `1px solid ${B.blue.border}`, padding: '2px 8px', borderRadius: 99 }}>
        <TbShield size={9} /> Verified
    </span>
);

const KPICard = ({ icon, label, value, sub, accentBg, accentBorder, loading }) => (
    <div style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 16, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 1px 4px rgba(28,43,58,0.04)', transition: 'border-color .2s, box-shadow .2s' }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(26,122,74,0.10)'; e.currentTarget.style.borderColor = B.greenBorder; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(28,43,58,0.04)'; e.currentTarget.style.borderColor = B.border; }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: accentBg, border: `1px solid ${accentBorder}`, flexShrink: 0 }}>{icon}</div>
        <div>
            <p style={{ color: B.navyGhost, fontSize: 12, fontWeight: 500 }}>{label}</p>
            <p style={{ color: B.navy, fontSize: 24, fontWeight: 800, letterSpacing: -.5, lineHeight: 1.1, marginTop: 3 }}>
                {loading
                    ? <span style={{ display: 'inline-block', width: 64, height: 26, background: B.surface3, borderRadius: 6, animation: 'rvPulse 1.5s ease-in-out infinite' }} />
                    : value}
            </p>
            {sub && <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 4 }}>{sub}</p>}
        </div>
    </div>
);

const SkeletonReview = () => (
    <div style={{ display: 'flex', gap: 14, padding: '18px 22px', borderBottom: `1px solid ${B.border}`, animation: 'rvPulse 1.5s ease-in-out infinite' }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: B.surface3, flexShrink: 0 }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
            <div style={{ height: 13, width: 140, background: B.surface3, borderRadius: 5 }} />
            <div style={{ height: 10, width: 200, background: B.surface3, borderRadius: 4 }} />
            <div style={{ height: 10, width: '80%', background: B.surface3, borderRadius: 4 }} />
        </div>
    </div>
);

const ActionBtn = ({ icon, label, color, onClick }) => {
    const [hov, setHov] = useState(false);
    const COLS = {
        gray: { n: { color: B.navyGhost, bg: 'transparent' }, h: { color: B.navy, bg: B.bgHover } },
        indigo: { n: { color: B.indigo.text, bg: 'transparent' }, h: { color: B.indigo.text, bg: B.indigo.bg } },
        emerald: { n: { color: B.emerald.text, bg: 'transparent' }, h: { color: B.emerald.text, bg: B.emerald.bg } },
        red: { n: { color: B.red.text, bg: 'transparent' }, h: { color: B.red.text, bg: B.red.bg } },
    };
    const s = (COLS[color] || COLS.gray)[hov ? 'h' : 'n'];
    return (
        <button onClick={onClick}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 9px', borderRadius: 8, fontSize: 11.5, fontWeight: 600, cursor: 'pointer', border: 'none', outline: 'none', boxShadow: 'none', transition: 'all .15s', color: s.color, background: s.bg }}>
            {icon} {label}
        </button>
    );
};

/* ════════════════════════════════════════════════════════════════
   MAIN
════════════════════════════════════════════════════════════════ */
const Review = ({ token }) => {
    const [reviews, setReviews] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
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

    const fetchData = useCallback(async () => {
        if (!token) return;
        setLoading(true);
        try {
            const prodRes = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
            if (!prodRes.data.success) { toast.error(prodRes.data.message); return; }
            const prods = prodRes.data.products || [];
            setProducts(prods);
            const reviewResults = await Promise.allSettled(
                prods.map(p =>
                    axios.get(backendUrl + '/api/review/' + p._id)
                        .then(r => ({ productId: p._id, reviews: r.data.reviews || [] }))
                        .catch(() => ({ productId: p._id, reviews: [] }))
                )
            );
            const prodMap = {};
            prods.forEach(p => { prodMap[p._id] = p; });
            const flat = [];
            reviewResults.forEach(result => {
                if (result.status !== 'fulfilled') return;
                const { productId, reviews } = result.value;
                const prod = prodMap[productId] || {};
                reviews.forEach(r => {
                    flat.push({
                        id: r._id || (productId + '-' + flat.length),
                        productId, productName: prod.name || 'Unknown Product',
                        productImg: Array.isArray(prod.image) ? (prod.image.filter(Boolean)[0] || null) : (prod.image || null),
                        productCat: prod.category || '',
                        reviewer: (r.user?.name) || r.userName || r.name || 'Anonymous',
                        email: (r.user?.email) || r.userEmail || r.email || '',
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
            flat.sort((a, b) => (b.date ? new Date(b.date) : 0) - (a.date ? new Date(a.date) : 0));
            setReviews(flat);
        } catch (e) { toast.error(e?.message || 'Failed to load reviews'); }
        finally { setLoading(false); }
    }, [token]);

    useEffect(() => { fetchData(); }, [fetchData]);

    const stats = useMemo(() => {
        const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        let totalRating = 0, pending = 0, flagged = 0, verified = 0, withReply = 0;
        reviews.forEach(r => {
            const s = Math.round(r.rating); if (dist[s] !== undefined) dist[s]++;
            totalRating += r.rating;
            if (r.status === 'pending') pending++;
            if (r.flagged) flagged++;
            if (r.verified) verified++;
            if (r.adminReply) withReply++;
        });
        const total = reviews.length;
        const avg = total > 0 ? (totalRating / total).toFixed(1) : '0.0';
        const positivePct = total > 0 ? Math.round(((dist[5] + dist[4]) / total) * 100) : 0;
        return { total, avg, dist, pending, flagged, verified, withReply, positivePct };
    }, [reviews]);

    const filtered = useMemo(() => {
        let r = reviews.filter(rv => !hiddenIds.has(rv.id));
        if (search.trim()) { const q = search.toLowerCase(); r = r.filter(rv => rv.reviewer.toLowerCase().includes(q) || rv.comment.toLowerCase().includes(q) || rv.productName.toLowerCase().includes(q) || rv.title.toLowerCase().includes(q)); }
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
    const applyFilter = (setter, val) => { setter(val); setPage(1); };

    const fmtRel = d => { if (!d) return '—'; const days = Math.floor((Date.now() - new Date(d)) / 86400000); if (days === 0) return 'Today'; if (days === 1) return 'Yesterday'; if (days < 30) return `${days}d ago`; if (days < 365) return `${Math.floor(days / 30)}mo ago`; return `${Math.floor(days / 365)}y ago`; };
    const fmtDate = d => { if (!d) return '—'; return new Date(d).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }); };
    const avatarPal = name => AVATAR_PALETTES[name.charCodeAt(0) % AVATAR_PALETTES.length];
    const ratingColor = r => r >= 4.5 ? B.emerald.text : r >= 3.5 ? B.amber.text : B.red.text;
    const ratingBg = r => r >= 4.5 ? B.emerald.bg : r >= 3.5 ? B.amber.bg : B.red.bg;

    const approveReview = id => { setReviews(p => p.map(r => r.id === id ? { ...r, status: 'approved', flagged: false } : r)); toast.success('Review approved'); };
    const deleteReview = async id => {
        try {
            const res = await axios.delete(backendUrl + '/api/review/admin/' + id, { headers: { token } });
            if (res.data.success) { setReviews(p => p.filter(r => r.id !== id)); toast.success('Review deleted'); }
            else toast.error(res.data.message || 'Failed to delete');
        } catch (e) {
            if (e?.response?.status === 404) { try { await axios.delete(backendUrl + '/api/review/' + id, { headers: { token } }); } catch (_) { } }
            setReviews(p => p.filter(r => r.id !== id)); toast.success('Review deleted');
        }
    };
    const flagReview = id => setReviews(p => p.map(r => r.id === id ? { ...r, flagged: !r.flagged } : r));
    const toggleHide = id => setHiddenIds(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
    const submitReply = id => { if (!replyText.trim()) return; setReviews(p => p.map(r => r.id === id ? { ...r, adminReply: replyText.trim() } : r)); toast.success('Reply saved'); setReplyingTo(null); setReplyText(''); };
    const toggleExpand = id => setExpandedIds(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });

    const exportCSV = () => {
        const rows = [['Product', 'Reviewer', 'Email', 'Rating', 'Title', 'Comment', 'Date', 'Verified', 'Status', 'Admin Reply']];
        filtered.forEach(r => rows.push([r.productName, r.reviewer, r.email, r.rating, `"${r.title}"`, `"${r.comment.replace(/"/g, '""')}"`, fmtDate(r.date), r.verified ? 'Yes' : 'No', r.status, `"${r.adminReply}"`]));
        const csv = rows.map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = `reviews_${new Date().toISOString().slice(0, 10)}.csv`; a.click(); URL.revokeObjectURL(url);
        toast.success('Reviews exported!');
    };

    const productOptions = useMemo(() => { const seen = new Map(); reviews.forEach(r => { if (!seen.has(r.productId)) seen.set(r.productId, r.productName); }); return [...seen.entries()].sort((a, b) => a[1].localeCompare(b[1])); }, [reviews]);

    const ROW_COLS = '1fr 200px 140px';

    return (
        <div style={{ minHeight: '100vh', background: B.bg, padding: '20px 24px 48px', fontFamily: "'Inter',system-ui,-apple-system,sans-serif", WebkitFontSmoothing: 'antialiased', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <style>{`
                @keyframes rvPulse  {0%,100%{opacity:1}50%{opacity:.4}}
                @keyframes rvFadeUp {from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
                @keyframes rvSpin   {to{transform:rotate(360deg)}}
                .rv-spin{animation:rvSpin .85s linear infinite}
                button:focus{outline:none!important;box-shadow:none!important}
                button:focus-visible{outline:none!important;box-shadow:none!important}
                .rv-kpi-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
                @media(max-width:900px){.rv-kpi-grid{grid-template-columns:1fr 1fr!important}}
                @media(max-width:900px){.rv-kpi-overall{grid-column:span 2!important}}
            `}</style>

            {/* ══ HEADER ══ */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                    <h1 style={{ color: B.navy, fontSize: 22, fontWeight: 800, letterSpacing: -.5, display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
                        <TbStarFilled size={22} style={{ color: '#D97706' }} />
                        Reviews & Ratings
                    </h1>
                    <p style={{ color: B.navyGhost, fontSize: 13, marginTop: 4 }}>
                        {loading ? 'Loading product reviews…' : `${stats.total} review${stats.total !== 1 ? 's' : ''} across ${products.length} product${products.length !== 1 ? 's' : ''}`}
                    </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button onClick={fetchData} title="Refresh"
                        style={{ width: 36, height: 36, borderRadius: 9, border: `1px solid ${B.border}`, outline: 'none', background: 'transparent', color: B.navyGhost, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s' }}
                        onMouseEnter={e => { e.currentTarget.style.color = B.green; e.currentTarget.style.background = B.greenBg; e.currentTarget.style.borderColor = B.greenBorder; }}
                        onMouseLeave={e => { e.currentTarget.style.color = B.navyGhost; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.border; }}>
                        <TbRefresh size={16} className={loading ? 'rv-spin' : undefined} />
                    </button>
                    <button onClick={exportCSV}
                        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 9, background: B.surface2, color: B.navySoft, border: `1px solid ${B.border}`, outline: 'none', fontSize: 12.5, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = B.bgHover; e.currentTarget.style.borderColor = B.borderMid; }}
                        onMouseLeave={e => { e.currentTarget.style.background = B.surface2; e.currentTarget.style.borderColor = B.border; }}>
                        <TbDownload size={14} /> Export CSV
                    </button>
                    {(stats.pending + stats.flagged) > 0 && (
                        <button onClick={() => applyFilter(setFilterStatus, 'pending')}
                            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`, outline: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}>
                            <TbClock size={14} /> {stats.pending + stats.flagged} need attention
                        </button>
                    )}
                </div>
            </div>

            {/* ══ KPI ROW ══ */}
            <div className="rv-kpi-grid">
                {/* Overall rating */}
                <div className="rv-kpi-overall" style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 16, padding: '18px 20px', gridColumn: 'span 2', boxShadow: '0 1px 4px rgba(28,43,58,0.04)' }}>
                    <p style={{ color: B.navyGhost, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 14 }}>Overall Rating</p>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 14 }}>
                        <div>
                            <p style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, letterSpacing: -2, color: Number(stats.avg) >= 4 ? B.emerald.text : Number(stats.avg) >= 3 ? B.amber.text : B.red.text }}>
                                {loading ? <span style={{ display: 'inline-block', width: 64, height: 44, background: B.surface3, borderRadius: 8, animation: 'rvPulse 1.5s ease-in-out infinite' }} /> : stats.avg}
                            </p>
                            <div style={{ marginTop: 6 }}><Stars rating={Number(stats.avg)} size={14} /></div>
                            <p style={{ color: B.navyGhost, fontSize: 11.5, marginTop: 5 }}>{stats.total} total reviews</p>
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {[5, 4, 3, 2, 1].map(n => <RatingBar key={n} star={n} count={stats.dist[n] || 0} total={stats.total} />)}
                        </div>
                    </div>
                    {/* Satisfaction bar */}
                    <div style={{ background: B.surface3, border: `1px solid ${B.border}`, borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        {stats.positivePct >= 70 ? <TbMoodSmile size={17} style={{ color: B.emerald.text, flexShrink: 0 }} /> : stats.positivePct >= 40 ? <TbMoodNeutral size={17} style={{ color: B.amber.text, flexShrink: 0 }} /> : <TbMoodSad size={17} style={{ color: B.red.text, flexShrink: 0 }} />}
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                                <span style={{ color: B.navySoft, fontSize: 11, fontWeight: 600 }}>Customer Satisfaction</span>
                                <span style={{ color: B.green, fontSize: 11, fontWeight: 700 }}>{stats.positivePct}%</span>
                            </div>
                            <div style={{ height: 5, background: B.greenLight, borderRadius: 4, overflow: 'hidden', border: `1px solid ${B.greenBorder}` }}>
                                <div style={{ height: '100%', borderRadius: 4, background: B.green, width: `${stats.positivePct}%`, transition: 'width .7s' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <KPICard icon={<TbMessage size={16} style={{ color: B.indigo.text }} />} accentBg={B.indigo.bg} accentBorder={B.indigo.border} label="Total Reviews" value={stats.total.toLocaleString()} sub={`${stats.verified} verified purchases`} loading={loading} />
                <KPICard icon={<TbClock size={16} style={{ color: B.amber.text }} />} accentBg={B.amber.bg} accentBorder={B.amber.border} label="Needs Review" value={(stats.pending + stats.flagged).toString()} sub={`${stats.pending} pending · ${stats.flagged} flagged`} loading={loading} />
                <KPICard icon={<TbCircleCheck size={16} style={{ color: B.emerald.text }} />} accentBg={B.emerald.bg} accentBorder={B.emerald.border} label="Replied" value={stats.withReply.toString()} sub={stats.total > 0 ? `${Math.round((stats.withReply / stats.total) * 100)}% response rate` : 'No reviews yet'} loading={loading} />
            </div>

            {/* ══ FILTER TOOLBAR ══ */}
            <div style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 14, padding: '14px 18px', boxShadow: '0 1px 4px rgba(28,43,58,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
                        <TbSearch size={14} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: B.navyGhost, pointerEvents: 'none' }} />
                        <input value={search} onChange={e => applyFilter(setSearch, e.target.value)} placeholder="Search reviewer, product, comment…"
                            style={{ width: '100%', padding: '8px 34px', borderRadius: 9, background: B.surface, color: B.navy, border: `1px solid ${B.border}`, fontSize: 13, outline: 'none', transition: 'border-color .15s', boxSizing: 'border-box' }}
                            onFocus={e => e.target.style.borderColor = B.greenBorder} onBlur={e => e.target.style.borderColor = B.border} />
                        {search && <button onClick={() => applyFilter(setSearch, '')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', outline: 'none', color: B.navyGhost, cursor: 'pointer' }}><TbX size={13} /></button>}
                    </div>
                    <select value={filterRating} onChange={e => applyFilter(setFilterRating, e.target.value)} style={selSt} onFocus={e => e.target.style.borderColor = B.greenBorder} onBlur={e => e.target.style.borderColor = B.border}>
                        <option value="all">All Ratings</option>
                        {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★</option>)}
                    </select>
                    <select value={filterStatus} onChange={e => applyFilter(setFilterStatus, e.target.value)} style={selSt} onFocus={e => e.target.style.borderColor = B.greenBorder} onBlur={e => e.target.style.borderColor = B.border}>
                        {[['all', 'All Status'], ['approved', 'Approved'], ['pending', 'Pending'], ['flagged', 'Flagged'], ['replied', 'Replied']].map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                    {productOptions.length > 0 && (
                        <select value={filterProduct} onChange={e => applyFilter(setFilterProduct, e.target.value)} style={{ ...selSt, maxWidth: 180 }} onFocus={e => e.target.style.borderColor = B.greenBorder} onBlur={e => e.target.style.borderColor = B.border}>
                            <option value="all">All Products</option>
                            {productOptions.map(([id, name]) => <option key={id} value={id}>{name.length > 28 ? name.slice(0, 27) + '…' : name}</option>)}
                        </select>
                    )}
                    <select value={sortBy} onChange={e => applyFilter(setSortBy, e.target.value)} style={selSt} onFocus={e => e.target.style.borderColor = B.greenBorder} onBlur={e => e.target.style.borderColor = B.border}>
                        {[['newest', 'Newest First'], ['oldest', 'Oldest First'], ['highest', 'Highest Rating'], ['lowest', 'Lowest Rating'], ['helpful', 'Most Helpful']].map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                    {(search || filterRating !== 'all' || filterStatus !== 'all' || filterProduct !== 'all') && (
                        <button onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setFilterProduct('all'); setPage(1); }}
                            style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: B.red.text, fontWeight: 600, background: B.red.bg, border: `1px solid ${B.red.border}`, borderRadius: 8, padding: '6px 10px', outline: 'none', cursor: 'pointer' }}>
                            <TbX size={12} /> Clear
                        </button>
                    )}
                    <span style={{ marginLeft: 'auto', color: B.navyGhost, fontSize: 12 }}>
                        <strong style={{ color: B.navy }}>{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* ══ REVIEWS LIST ══ */}
            <div style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(28,43,58,0.04)' }}>

                {!loading && filtered.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: ROW_COLS, alignItems: 'center', padding: '10px 22px', borderBottom: `1px solid ${B.border}`, background: B.surface }}>
                        <span style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px' }}>Reviewer &amp; Review</span>
                        <span style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', textAlign: 'center', paddingLeft: 16 }}>Product</span>
                        <span style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', textAlign: 'left', paddingLeft: 16 }}>Actions</span>
                    </div>
                )}

                {loading && Array(6).fill(0).map((_, i) => <SkeletonReview key={i} />)}

                {!loading && filtered.length === 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 24px', gap: 12 }}>
                        <div style={{ width: 64, height: 64, borderRadius: 16, background: B.surface3, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TbStarFilled size={26} style={{ color: B.borderMid, opacity: .5 }} />
                        </div>
                        <p style={{ color: B.navy, fontSize: 15, fontWeight: 700 }}>{reviews.length === 0 ? 'No reviews yet' : 'No reviews match your filters'}</p>
                        <p style={{ color: B.navyGhost, fontSize: 13, textAlign: 'center', maxWidth: 320, lineHeight: 1.6 }}>
                            {reviews.length === 0 ? 'Reviews submitted on your product pages will appear here automatically.' : 'Try adjusting your search or filters.'}
                        </p>
                        {(search || filterRating !== 'all' || filterStatus !== 'all') && (
                            <button onClick={() => { setSearch(''); setFilterRating('all'); setFilterStatus('all'); setPage(1); }}
                                style={{ color: B.green, fontSize: 13, fontWeight: 600, background: 'none', border: 'none', outline: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {!loading && paginated.map(rv => {
                    const isExpanded = expandedIds.has(rv.id);
                    const isReplying = replyingTo === rv.id;
                    const truncate = !isExpanded && rv.comment.length > 180;
                    const displayText = truncate ? rv.comment.slice(0, 180) + '…' : rv.comment;
                    const pal = avatarPal(rv.reviewer);
                    const rowBg = rv.flagged ? B.red.bg : rv.status === 'pending' ? B.amber.bg.replace('C7', 'EE') : 'transparent';

                    return (
                        <div key={rv.id} style={{ borderBottom: `1px solid ${B.borderSoft}`, background: rowBg, transition: 'background .12s' }}
                            onMouseEnter={e => e.currentTarget.style.background = B.bgHover}
                            onMouseLeave={e => e.currentTarget.style.background = rowBg}>

                            <div style={{ display: 'grid', gridTemplateColumns: ROW_COLS, alignItems: 'flex-start', padding: '16px 22px' }}>

                                {/* COL 1 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, minWidth: 0, paddingRight: 18 }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, background: pal.bg, color: pal.text, border: `1px solid ${pal.text}30` }}>
                                        {rv.reviewer.charAt(0).toUpperCase()}
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                                            <span style={{ color: B.navy, fontSize: 14, fontWeight: 700 }}>{rv.reviewer}</span>
                                            {rv.verified && <VerifiedBadge />}
                                            <StatusPill status={rv.status} flagged={rv.flagged} />
                                            {rv.adminReply && (
                                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 700, color: B.indigo.text, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, padding: '2px 8px', borderRadius: 99 }}>
                                                    <TbMessage size={9} /> Replied
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
                                            <Stars rating={rv.rating} size={12} />
                                            <span style={{ fontSize: 11, fontWeight: 800, padding: '2px 7px', borderRadius: 7, color: ratingColor(rv.rating), background: ratingBg(rv.rating) }}>{rv.rating.toFixed(1)}</span>
                                            <span style={{ color: B.navyGhost, fontSize: 11.5 }}>{fmtRel(rv.date)}</span>
                                            {rv.email && <span style={{ color: B.navyGhost, fontSize: 11 }}>{rv.email}</span>}
                                        </div>
                                        {rv.title && <p style={{ color: B.navy, fontSize: 13.5, fontWeight: 600, marginTop: 8 }}>{rv.title}</p>}
                                        <p style={{ color: B.navySoft, fontSize: 13, marginTop: 5, lineHeight: 1.65 }}>
                                            {rv.comment ? displayText : <span style={{ color: B.navyGhost, fontStyle: 'italic' }}>No written comment</span>}
                                        </p>
                                        {rv.comment.length > 180 && (
                                            <button onClick={() => toggleExpand(rv.id)} style={{ fontSize: 11.5, color: B.green, fontWeight: 600, background: 'none', border: 'none', outline: 'none', cursor: 'pointer', marginTop: 2 }}>
                                                {isExpanded ? '↑ Show less' : '↓ Read more'}
                                            </button>
                                        )}
                                        {(rv.helpful > 0 || rv.unhelpful > 0) && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 7 }}>
                                                <span style={{ color: B.navyGhost, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><TbThumbUp size={12} style={{ color: B.emerald.text }} /> {rv.helpful} helpful</span>
                                                {rv.unhelpful > 0 && <span style={{ color: B.navyGhost, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><TbThumbDown size={12} style={{ color: B.red.text }} /> {rv.unhelpful}</span>}
                                            </div>
                                        )}
                                        {rv.adminReply && !isReplying && (
                                            <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                                <div style={{ width: 24, height: 24, borderRadius: 8, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                                                    <TbShield size={12} style={{ color: B.indigo.text }} />
                                                </div>
                                                <div style={{ flex: 1, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, borderRadius: 12, padding: '10px 14px' }}>
                                                    <p style={{ color: B.indigo.text, fontSize: 10.5, fontWeight: 700, marginBottom: 5 }}>Admin Reply</p>
                                                    <p style={{ color: B.navySoft, fontSize: 12.5, lineHeight: 1.6 }}>{rv.adminReply}</p>
                                                </div>
                                            </div>
                                        )}
                                        {isReplying && (
                                            <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                                <div style={{ width: 24, height: 24, borderRadius: 8, background: B.indigo.bg, border: `1px solid ${B.indigo.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 8 }}>
                                                    <TbShield size={12} style={{ color: B.indigo.text }} />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <textarea value={replyText} onChange={e => setReplyText(e.target.value)} rows={2} placeholder="Write a helpful reply…" autoFocus
                                                        onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submitReply(rv.id); }}
                                                        style={{ width: '100%', padding: '10px 12px', borderRadius: 9, background: B.surface, color: B.navy, border: `1px solid ${B.greenBorder}`, fontSize: 13, outline: 'none', resize: 'none', transition: 'all .15s', boxSizing: 'border-box' }} />
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 7 }}>
                                                        <span style={{ color: B.navyGhost, fontSize: 11 }}>Ctrl+Enter to submit</span>
                                                        <div style={{ display: 'flex', gap: 7 }}>
                                                            <button onClick={() => { setReplyingTo(null); setReplyText(''); }} style={{ padding: '6px 12px', borderRadius: 8, border: `1px solid ${B.border}`, outline: 'none', background: 'transparent', color: B.navySoft, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
                                                            <button onClick={() => submitReply(rv.id)} disabled={!replyText.trim()} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 14px', borderRadius: 8, background: B.green, color: '#FFFFFF', border: 'none', outline: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer', opacity: replyText.trim() ? 1 : .4 }}>
                                                                <TbSend size={12} /> Post Reply
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* COL 2 — Product */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 16, paddingRight: 8, borderLeft: `1px solid ${B.borderSoft}`, alignSelf: 'flex-start', marginTop: 2 }}>
                                    {rv.productImg
                                        ? <img src={rv.productImg} alt="" style={{ width: 38, height: 38, borderRadius: 9, objectFit: 'cover', border: `1px solid ${B.border}`, flexShrink: 0 }} />
                                        : <div style={{ width: 38, height: 38, borderRadius: 9, background: B.surface3, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><TbPhoto size={15} style={{ color: B.navyGhost }} /></div>
                                    }
                                    <div style={{ minWidth: 0 }}>
                                        <p style={{ color: B.navySoft, fontSize: 12, fontWeight: 600, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', maxWidth: 110 }}>{rv.productName}</p>
                                        {rv.productCat && <p style={{ color: B.navyGhost, fontSize: 10.5, marginTop: 2 }}>{rv.productCat}</p>}
                                    </div>
                                </div>

                                {/* COL 3 — Actions */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 16, borderLeft: `1px solid ${B.borderSoft}`, alignSelf: 'flex-start', marginTop: 2 }}>
                                    <ActionBtn icon={<TbMessage size={13} />} label={rv.adminReply ? 'Edit Reply' : 'Reply'} color="indigo"
                                        onClick={() => { if (isReplying) { setReplyingTo(null); setReplyText(''); } else { setReplyingTo(rv.id); setReplyText(rv.adminReply || ''); } }} />
                                    {rv.status === 'pending' && (
                                        <ActionBtn icon={<TbCircleCheck size={13} />} label="Approve" color="emerald" onClick={() => approveReview(rv.id)} />
                                    )}
                                    <ActionBtn icon={<TbFlag size={13} />} label={rv.flagged ? 'Unflag' : 'Flag'} color={rv.flagged ? 'red' : 'gray'} onClick={() => flagReview(rv.id)} />
                                    <ActionBtn icon={<TbEyeOff size={13} />} label="Hide" color="gray" onClick={() => toggleHide(rv.id)} />
                                    <ActionBtn icon={<TbTrash size={13} />} label="Delete" color="red" onClick={() => deleteReview(rv.id)} />
                                </div>

                            </div>
                        </div>
                    );
                })}

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px', borderTop: `1px solid ${B.border}`, background: B.surface, flexWrap: 'wrap', gap: 10 }}>
                        <p style={{ color: B.navyGhost, fontSize: 12.5 }}>
                            Showing <strong style={{ color: B.navy }}>{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong> of <strong style={{ color: B.navy }}>{filtered.length}</strong>
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                                style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${B.border}`, outline: 'none', background: B.surface2, color: B.navyGhost, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: page === 1 ? .35 : 1, transition: 'all .15s' }}
                                onMouseEnter={e => { if (page !== 1) e.currentTarget.style.borderColor = B.greenBorder; }}
                                onMouseLeave={e => e.currentTarget.style.borderColor = B.border}>
                                <TbChevronLeft size={14} />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                                .reduce((acc, p, i, arr) => { if (i > 0 && arr[i - 1] !== p - 1) acc.push('…'); acc.push(p); return acc; }, [])
                                .map((p, i) => p === '…'
                                    ? <span key={`e${i}`} style={{ width: 32, textAlign: 'center', color: B.navyGhost, fontSize: 13 }}>…</span>
                                    : <button key={p} onClick={() => setPage(p)}
                                        style={{ width: 32, height: 32, borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s', outline: 'none', border: `1px solid ${page === p ? B.greenBorder : B.border}`, background: page === p ? B.greenBg : B.surface2, color: page === p ? B.green : B.navyGhost }}>
                                        {p}
                                    </button>
                                )}
                            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                                style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${B.border}`, outline: 'none', background: B.surface2, color: B.navyGhost, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: page === totalPages ? .35 : 1, transition: 'all .15s' }}
                                onMouseEnter={e => { if (page !== totalPages) e.currentTarget.style.borderColor = B.greenBorder; }}
                                onMouseLeave={e => e.currentTarget.style.borderColor = B.border}>
                                <TbChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Info banner */}
            {!loading && reviews.length === 0 && products.length > 0 && (
                <div style={{ background: B.amber.bg, border: `1px solid ${B.amber.border}`, borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <TbAlertTriangle size={18} style={{ color: B.amber.text, flexShrink: 0, marginTop: 2 }} />
                    <div>
                        <p style={{ color: B.amber.text, fontSize: 13.5, fontWeight: 700, marginBottom: 5 }}>No review data found on your products</p>
                        <p style={{ color: B.navySoft, fontSize: 12.5, lineHeight: 1.6 }}>
                            This page reads <code style={{ fontFamily: 'monospace', background: 'rgba(26,122,74,0.10)', padding: '1px 5px', borderRadius: 4, fontSize: 11, color: B.green }}>product.reviews[]</code> from your product model.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Review;