// import React, { useContext, useState, useCallback, useEffect } from 'react'
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import { FaRegUser } from "react-icons/fa6";
// import { IoMdLogOut } from "react-icons/io";
// import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
// import { FaRegBell } from "react-icons/fa";
// import { BiSolidCrown } from "react-icons/bi";
// import { HiOutlineSearch } from "react-icons/hi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { TbChartBar, TbTrendingUp, TbTrendingDown, TbPackage, TbAlertTriangle, TbCircleCheck, TbShoppingCart, TbRefresh } from "react-icons/tb";
// import { assets } from '../../assets/assets';
// import { MyContext } from '../../App';
// import { backendUrl, currency } from '../../App';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// /* ════════════════════════════════════════════
//    D DOLLY LAMB — PERMANENT DARK THEME
//    No light mode. No toggle. Brand only.
// ════════════════════════════════════════════ */

// const C = {
//   bg: '#120800',
//   bgCard: '#1e1000',
//   bgHover: 'rgba(201,168,76,0.08)',
//   border: '#3a2510',
//   gold: '#c9a84c',
//   goldLight: '#f0d898',
//   goldMid: '#c4a55a',
//   goldIcon: '#a08050',
//   goldMuted: '#8a7040',
//   goldDim: '#6b5030',
// };

// /* ── Reusable icon button ── */
// const IconBtn = ({ onClick, title, children }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <button
//       onClick={onClick}
//       title={title}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         width: 36, height: 36, borderRadius: 10,
//         border: `1px solid ${hov ? C.gold : C.border}`,
//         background: hov ? C.bgHover : 'transparent',
//         color: hov ? C.gold : C.goldIcon,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         cursor: 'pointer', transition: 'all 0.18s', flexShrink: 0,
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// /* ── Notification icon ── */
// const NotifIcon = ({ type, color }) => {
//   const map = { order: <TbShoppingCart size={13} />, shipped: <TbPackage size={13} />, delivered: <TbCircleCheck size={13} />, stock: <TbAlertTriangle size={13} /> };
//   return (
//     <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}20`, color, border: `1px solid ${color}30` }}>
//       {map[type] || <TbShoppingCart size={13} />}
//     </div>
//   );
// };

// /* ════ HEADER ════ */
// const Header = () => {
//   const context = useContext(MyContext);
//   const token = context?.token;

//   const [anchorMyAcc, setAnchorMyAcc] = useState(null);
//   const [anchorNotif, setAnchorNotif] = useState(null);
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [searchVal, setSearchVal] = useState('');
//   const [todayStats, setTodayStats] = useState({ revenue: 0, orders: 0, change: null, loading: true });
//   const [notifications, setNotifications] = useState([]);
//   const [notifLoading, setNotifLoading] = useState(true);

//   const openMyAcc = Boolean(anchorMyAcc);
//   const openNotif = Boolean(anchorNotif);

//   const fetchTodayStats = useCallback(async () => {
//     if (!token) return;
//     try {
//       const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
//       if (!res.data.success) return;
//       const orders = res.data.orders || [];
//       const now = new Date();
//       const isToday = ts => { const d = new Date(ts); return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); };
//       const isYesterday = ts => { const d = new Date(ts); const y = new Date(now); y.setDate(y.getDate() - 1); return d.getDate() === y.getDate() && d.getMonth() === y.getMonth() && d.getFullYear() === y.getFullYear(); };
//       const amt = o => Number(o.finalAmount) || Number(o.amount) || 0;
//       const todayOrders = orders.filter(o => isToday(o.date));
//       const yestOrders = orders.filter(o => isYesterday(o.date));
//       const todayRev = todayOrders.reduce((s, o) => s + amt(o), 0);
//       const yestRev = yestOrders.reduce((s, o) => s + amt(o), 0);
//       const change = yestRev > 0 ? Math.round(((todayRev - yestRev) / yestRev) * 100) : todayRev > 0 ? 100 : 0;
//       setTodayStats({ revenue: todayRev, orders: todayOrders.length, change, loading: false });

//       const notifs = [];
//       [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3).forEach(o => {
//         const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
//         const ts = o.date ? new Date(o.date) : null;
//         const minsAgo = ts ? Math.floor((Date.now() - ts.getTime()) / 60000) : null;
//         const timeStr = minsAgo === null ? '' : minsAgo < 1 ? 'just now' : minsAgo < 60 ? `${minsAgo}m ago` : minsAgo < 1440 ? `${Math.floor(minsAgo / 60)}h ago` : `${Math.floor(minsAgo / 1440)}d ago`;
//         if (o.status === 'Delivered') notifs.push({ id: `del-${o._id}`, title: 'Order delivered', desc: `#${(o._id || '').slice(-6).toUpperCase()} delivered to ${name}`, time: timeStr, unread: minsAgo < 60, color: C.gold, icon: 'delivered' });
//         else if (o.status === 'Shipped') notifs.push({ id: `ship-${o._id}`, title: 'Order shipped', desc: `#${(o._id || '').slice(-6).toUpperCase()} shipped to ${name}`, time: timeStr, unread: minsAgo < 120, color: C.goldMid, icon: 'shipped' });
//         else notifs.push({ id: `ord-${o._id}`, title: 'New order received', desc: `#${(o._id || '').slice(-6).toUpperCase()} — ${currency}${amt(o).toLocaleString('en-US')} from ${name}`, time: timeStr, unread: minsAgo < 30, color: C.gold, icon: 'order' });
//       });
//       setNotifications(notifs);
//       setNotifLoading(false);
//     } catch { setTodayStats(s => ({ ...s, loading: false })); setNotifLoading(false); }
//   }, [token]);

//   const fetchStockAlerts = useCallback(async () => {
//     if (!token) return;
//     try {
//       const res = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
//       if (!res.data.success) return;
//       const products = res.data.products || [];
//       const getStock = p => Array.isArray(p.sizes) ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0) : Number(p.stock) || 0;
//       const stockNotifs = products.filter(p => getStock(p) <= 5).sort((a, b) => getStock(a) - getStock(b)).slice(0, 3).map(p => {
//         const stock = getStock(p);
//         return { id: `stock-${p._id}`, title: stock === 0 ? 'Out of stock' : 'Low stock alert', desc: `${p.name?.slice(0, 35) || 'Product'}${p.name?.length > 35 ? '…' : ''} — ${stock === 0 ? 'no stock' : `${stock} left`}`, time: 'Stock alert', unread: stock === 0, color: stock === 0 ? '#ef6060' : C.gold, icon: 'stock' };
//       });
//       setNotifications(prev => [...stockNotifs, ...prev].filter((n, i, arr) => arr.findIndex(x => x.id === n.id) === i).slice(0, 6));
//     } catch { }
//   }, [token]);

//   useEffect(() => { fetchTodayStats(); fetchStockAlerts(); }, [fetchTodayStats, fetchStockAlerts]);

//   const unreadCount = notifications.filter(n => n.unread).length;
//   const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
//   const adminName = context?.adminName || context?.name || 'Admin User';
//   const adminEmail = context?.adminEmail || context?.email || 'admin@ddollylamb.com';

//   const menuPaper = (w) => ({
//     mt: 1.5, width: w, borderRadius: '12px', overflow: 'hidden',
//     border: `1px solid ${C.border}`, background: '#160b00',
//     filter: 'drop-shadow(0px 12px 40px rgba(0,0,0,0.65))',
//   });

//   const menuItemSx = (danger = false) => ({
//     px: 2, py: 1.5, gap: 1.5, background: '#160b00',
//     '&:hover': { background: danger ? 'rgba(220,60,60,0.08)' : C.bgHover },
//   });

//   const iconBoxStyle = (danger = false) => ({
//     width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
//     background: danger ? 'rgba(220,80,80,0.10)' : 'rgba(201,168,76,0.10)',
//     color: danger ? '#e07070' : C.gold,
//     border: `1px solid ${danger ? 'rgba(220,80,80,0.18)' : 'rgba(201,168,76,0.18)'}`,
//   });

//   return (
//     <header style={{
//       position: 'fixed', top: 0, right: 0, zIndex: 40,
//       left: context?.isSidebarOpen ? '260px' : '0px',
//       height: 64, transition: 'left 0.3s',
//       background: C.bg,
//       borderBottom: `1px solid ${C.border}`,
//       boxShadow: '0 1px 0 rgba(201,168,76,0.04), 0 4px 24px rgba(0,0,0,0.55)',
//       display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//       padding: '0 20px', gap: 16,
//       WebkitFontSmoothing: 'antialiased',
//       MozOsxFontSmoothing: 'grayscale',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//     }}>

//       {/* ══ LEFT ══ */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>

//         <IconBtn onClick={() => context?.setIsSidebarOpen(!context?.isSidebarOpen)} title="Toggle sidebar">
//           {context?.isSidebarOpen ? <AiOutlineMenuFold style={{ fontSize: 20 }} /> : <AiOutlineMenuUnfold style={{ fontSize: 20 }} />}
//         </IconBtn>

//         <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
//           <span style={{ color: C.goldDim }}>Admin</span>
//           <span style={{ color: C.border, fontSize: 17 }}>/</span>
//           <span style={{ color: C.goldLight, fontWeight: 600 }}>Dashboard</span>
//         </div>

//         <div
//           className="hidden md:flex"
//           style={{
//             alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 10,
//             border: `1px solid ${searchFocused ? C.gold : C.border}`,
//             background: searchFocused ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.015)',
//             width: searchFocused ? 260 : 200, transition: 'all 0.2s',
//           }}
//         >
//           <HiOutlineSearch style={{ fontSize: 15, color: searchFocused ? C.gold : C.goldDim, flexShrink: 0, transition: 'color 0.2s' }} />
//           <input
//             type="text" placeholder="Search anything..."
//             value={searchVal} onChange={e => setSearchVal(e.target.value)}
//             onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
//             style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: C.goldMid, width: '100%', caretColor: C.gold }}
//           />
//           {searchVal && (
//             <button onClick={() => setSearchVal('')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: C.goldDim, padding: 0 }}>✕</button>
//           )}
//         </div>
//       </div>

//       {/* ══ RIGHT ══ */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

//         {/* Stats Pill */}
//         <div className="hidden lg:flex" style={{ alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 10, background: 'rgba(201,168,76,0.06)', border: `1px solid ${C.border}`, marginRight: 8 }}>
//           <TbChartBar style={{ fontSize: 14, color: C.gold }} />
//           <span style={{ fontSize: 11, color: C.goldMuted }}>Today:</span>
//           {todayStats.loading ? (
//             <span style={{ fontSize: 12, fontWeight: 700, color: C.goldDim }}>…</span>
//           ) : (
//             <>
//               <span style={{ fontSize: 12, fontWeight: 700, color: C.gold }}>{currency}{todayStats.revenue.toLocaleString('en-US')}</span>
//               {todayStats.change !== null && (
//                 <span style={{ fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2, color: todayStats.change >= 0 ? '#7fbf7f' : '#ef8080' }}>
//                   {todayStats.change >= 0 ? <TbTrendingUp size={11} /> : <TbTrendingDown size={11} />}
//                   {todayStats.change >= 0 ? '+' : ''}{todayStats.change}%
//                 </span>
//               )}
//               <span className="hidden xl:inline" style={{ fontSize: 10, color: C.goldDim }}>· {todayStats.orders} order{todayStats.orders !== 1 ? 's' : ''}</span>
//             </>
//           )}
//           <button onClick={() => { fetchTodayStats(); fetchStockAlerts(); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.goldDim, marginLeft: 2, display: 'flex', transition: 'color 0.2s' }}
//             onMouseEnter={e => e.currentTarget.style.color = C.gold}
//             onMouseLeave={e => e.currentTarget.style.color = C.goldDim}>
//             <TbRefresh size={12} />
//           </button>
//         </div>

//         {/* Settings */}
//         <Link to="/store-settings">
//           <IconBtn title="Settings"><IoSettingsOutline style={{ fontSize: 18 }} /></IconBtn>
//         </Link>

//         {/* Bell */}
//         <div style={{ position: 'relative' }}>
//           <IconBtn onClick={e => setAnchorNotif(e.currentTarget)} title="Notifications">
//             <FaRegBell style={{ fontSize: 17 }} />
//           </IconBtn>
//           {unreadCount > 0 && (
//             <span style={{ position: 'absolute', top: 4, right: 4, width: 15, height: 15, borderRadius: '50%', background: C.gold, color: C.bg, fontSize: 8, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${C.bg}`, pointerEvents: 'none' }}>
//               {unreadCount}
//             </span>
//           )}
//         </div>

//         {/* ── Notification Dropdown ── */}
//         <Menu anchorEl={anchorNotif} open={openNotif} onClose={() => setAnchorNotif(null)}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//           slotProps={{ paper: { elevation: 0, sx: menuPaper(320) } }}>
//           <div style={{ padding: '12px 16px', borderBottom: `1px solid ${C.border}`, background: 'rgba(201,168,76,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <div>
//               <p style={{ fontSize: 14, fontWeight: 600, color: C.goldLight, margin: 0 }}>Notifications</p>
//               <p style={{ fontSize: 11, color: C.goldMuted, margin: '2px 0 0' }}>{notifLoading ? 'Loading…' : `${unreadCount} unread · ${notifications.length} total`}</p>
//             </div>
//             {unreadCount > 0 && (
//               <button onClick={markAllRead} style={{ fontSize: 11, fontWeight: 600, color: C.gold, background: 'none', border: 'none', cursor: 'pointer' }}
//                 onMouseEnter={e => e.currentTarget.style.color = C.goldLight}
//                 onMouseLeave={e => e.currentTarget.style.color = C.gold}>
//                 Mark all read
//               </button>
//             )}
//           </div>
//           <div style={{ maxHeight: 300, overflowY: 'auto' }}>
//             {notifLoading ? Array(3).fill(0).map((_, i) => (
//               <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', borderBottom: `1px solid #2e1c08` }}>
//                 <div style={{ width: 28, height: 28, borderRadius: 8, background: '#2a1800', flexShrink: 0 }} />
//                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
//                   <div style={{ height: 10, borderRadius: 4, background: '#2a1800', width: '70%' }} />
//                   <div style={{ height: 8, borderRadius: 4, background: '#2a1800' }} />
//                 </div>
//               </div>
//             )) : notifications.length === 0 ? (
//               <div style={{ padding: '40px 0', textAlign: 'center', color: C.goldMuted }}>
//                 <FaRegBell style={{ fontSize: 28, margin: '0 auto 8px', opacity: 0.25, display: 'block' }} />
//                 <p style={{ fontSize: 13, margin: 0 }}>No notifications yet</p>
//               </div>
//             ) : notifications.map(n => (
//               <MenuItem key={n.id} onClick={() => setAnchorNotif(null)} sx={{ px: 2, py: 1.5, alignItems: 'flex-start', gap: 1.5, background: n.unread ? '#1f1100' : '#160b00', '&:hover': { background: C.bgHover }, borderBottom: `1px solid #2e1c08` }}>
//                 <NotifIcon type={n.icon} color={n.color} />
//                 <div style={{ flex: 1, minWidth: 0 }}>
//                   <p style={{ fontSize: 12.5, fontWeight: 600, color: C.goldLight, margin: '0 0 2px', lineHeight: 1.3 }}>{n.title}</p>
//                   <p style={{ fontSize: 11.5, color: C.goldMuted, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.desc}</p>
//                   <p style={{ fontSize: 10, color: C.goldDim, margin: 0 }}>{n.time}</p>
//                 </div>
//                 {n.unread && <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.gold, flexShrink: 0, marginTop: 6 }} />}
//               </MenuItem>
//             ))}
//           </div>
//           <div style={{ padding: '10px 16px', borderTop: `1px solid ${C.border}`, background: 'rgba(201,168,76,0.03)', textAlign: 'center' }}>
//             <button onClick={() => { setAnchorNotif(null); fetchTodayStats(); fetchStockAlerts(); }}
//               style={{ fontSize: 12, fontWeight: 600, color: C.gold, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, margin: '0 auto' }}
//               onMouseEnter={e => e.currentTarget.style.color = C.goldLight}
//               onMouseLeave={e => e.currentTarget.style.color = C.gold}>
//               <TbRefresh size={12} /> Refresh notifications
//             </button>
//           </div>
//         </Menu>

//         {/* Divider */}
//         <div style={{ width: 1, height: 28, background: C.border, margin: '0 4px' }} />

//         {/* ── Profile ── */}
//         {context?.isLogin === true ? (
//           <div style={{ position: 'relative' }}>
//             <button onClick={e => setAnchorMyAcc(e.currentTarget)}
//               style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 12px 6px 8px', borderRadius: 10, border: `1px solid ${C.border}`, background: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.background = C.bgHover; }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent'; }}>
//               <div style={{ position: 'relative', flexShrink: 0 }}>
//                 <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', outline: `2px solid ${C.goldDim}`, outlineOffset: 2 }}>
//                   {assets?.profileImg
//                     ? <img src={assets.profileImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                     : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${C.gold}, #8a6f2e)`, fontSize: 13, fontWeight: 700, color: C.bg }}>{adminName.charAt(0).toUpperCase()}</div>
//                   }
//                 </div>
//                 <span style={{ position: 'absolute', bottom: 0, right: 0, width: 8, height: 8, borderRadius: '50%', background: '#7fbf7f', border: `2px solid ${C.bg}` }} />
//               </div>
//               <div className="hidden sm:block" style={{ textAlign: 'left' }}>
//                 <p style={{ fontSize: 12, fontWeight: 600, color: C.goldLight, margin: 0, lineHeight: 1.3 }}>{adminName}</p>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//                   <BiSolidCrown style={{ fontSize: 9, color: C.gold }} />
//                   <span style={{ fontSize: 10, fontWeight: 500, color: C.gold }}>Admin</span>
//                 </div>
//               </div>
//               <svg className="hidden sm:block" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 2 }}>
//                 <path d="M2 4l4 4 4-4" stroke={C.goldDim} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>

//             {/* Profile Dropdown */}
//             <Menu anchorEl={anchorMyAcc} open={openMyAcc} onClose={() => setAnchorMyAcc(null)} onClick={() => setAnchorMyAcc(null)}
//               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//               slotProps={{ paper: { elevation: 0, sx: menuPaper(252) } }}>
//               {/* Card */}
//               <div style={{ padding: 16, borderBottom: `1px solid ${C.border}`, background: 'linear-gradient(135deg, #1e1000, #2a1800)' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                   <div style={{ position: 'relative', flexShrink: 0 }}>
//                     <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', outline: `2px solid ${C.goldDim}`, outlineOffset: 2 }}>
//                       {assets?.profileImg
//                         ? <img src={assets.profileImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                         : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, ${C.gold}, #8a6f2e)`, fontSize: 16, fontWeight: 700, color: C.bg }}>{adminName.charAt(0).toUpperCase()}</div>
//                       }
//                     </div>
//                     <span style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: '#7fbf7f', border: `2px solid #1e1000` }} />
//                   </div>
//                   <div style={{ minWidth: 0 }}>
//                     <h3 style={{ fontSize: 14, fontWeight: 600, color: C.goldLight, margin: '0 0 2px' }}>{adminName}</h3>
//                     <p style={{ fontSize: 11, color: C.goldMuted, margin: '0 0 4px', maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{adminEmail}</p>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//                       <BiSolidCrown style={{ fontSize: 10, color: C.gold }} />
//                       <span style={{ fontSize: 10, fontWeight: 700, color: C.gold, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Admin</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick stats */}
//               {!todayStats.loading && (
//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '10px 12px' }}>
//                   {[
//                     { val: todayStats.orders, label: "Today's Orders" },
//                     { val: `${currency}${todayStats.revenue.toLocaleString('en-US')}`, label: 'Revenue', small: true },
//                   ].map((s, i) => (
//                     <div key={i} style={{ borderRadius: 8, padding: '8px 10px', textAlign: 'center', background: 'rgba(201,168,76,0.08)', border: `1px solid ${C.border}` }}>
//                       <p style={{ fontSize: s.small ? 12 : 16, fontWeight: 800, color: C.gold, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.val}</p>
//                       <p style={{ fontSize: 10, fontWeight: 500, color: C.goldMuted, margin: 0 }}>{s.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Items */}
//               {[
//                 { icon: <FaRegUser style={{ fontSize: 13 }} />, label: 'My Account', sub: 'Manage profile' },
//                 { icon: <IoSettingsOutline style={{ fontSize: 13 }} />, label: 'Settings', sub: 'Preferences & security' },
//               ].map((item, i) => (
//                 <MenuItem key={i} sx={menuItemSx()}>
//                   <div style={iconBoxStyle()}>{item.icon}</div>
//                   <div>
//                     <p style={{ fontSize: 13, fontWeight: 500, color: C.goldLight, margin: '0 0 1px' }}>{item.label}</p>
//                     <p style={{ fontSize: 11, color: C.goldMuted, margin: 0 }}>{item.sub}</p>
//                   </div>
//                 </MenuItem>
//               ))}

//               <Divider sx={{ mx: 2, borderColor: C.border }} />

//               <MenuItem onClick={() => context?.setIsLogin && context.setIsLogin(false)} sx={menuItemSx(true)}>
//                 <div style={iconBoxStyle(true)}><IoMdLogOut style={{ fontSize: 14 }} /></div>
//                 <p style={{ fontSize: 13, fontWeight: 500, color: '#e07070', margin: 0 }}>Sign Out</p>
//               </MenuItem>
//             </Menu>
//           </div>

//         ) : (
//           <Link to='/login'>
//             <button
//               style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', background: `linear-gradient(135deg, ${C.gold}, #8a6f2e)`, color: C.bg, fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', transition: 'opacity 0.2s' }}
//               onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
//               onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
//               <BiSolidCrown style={{ fontSize: 12 }} /> Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useContext, useState, useCallback, useEffect } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { BiSolidCrown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbChartBar, TbTrendingUp, TbTrendingDown, TbPackage, TbAlertTriangle, TbCircleCheck, TbShoppingCart, TbRefresh } from "react-icons/tb";
import { assets } from '../../assets/assets';
import { MyContext } from '../../App';
import { backendUrl, currency } from '../../App';
import { Link } from 'react-router-dom';
import axios from 'axios';

/* ════════════════════════════════════════════
   D DOLLY LAMB — LIGHT LUXURY THEME
   Matches updated Sidebar color palette.
════════════════════════════════════════════ */

const C = {
  bg: '#FAFAF8',   // warm ivory — header background
  bgSurface: '#F4F2EE',   // off-white surface for cards/pills
  bgHover: '#EDE9E2',   // linen hover
  bgActive: '#E8F4EE',   // sage green active bg
  border: '#E0DBD3',   // warm subtle border
  borderStrong: '#C8C2B8',   // more visible divider

  navy: '#1C2B3A',   // deep ink — primary text
  navyMid: '#2E4057',   // secondary nav text
  navySoft: '#4A6070',   // muted body text
  navyGhost: '#8FA0AD',   // placeholders, section labels

  green: '#1A7A4A',   // primary accent — active/CTA
  greenHover: '#2A9960',   // hover on green
  greenBg: '#E8F4EE',   // green tint background
  greenBorder: '#A8D5BC',   // green border

  champagne: '#B8985A',   // premium gold accent
  champBg: '#FBF5E8',   // champagne bg
  champBorder: '#DBC98A',   // champagne border
  champText: '#8B6914',   // champagne dark text

  danger: '#C0392B',   // logout/danger red
  dangerBg: '#FEF2F2',   // danger hover bg
  dangerBorder: '#FECACA',   // danger border

  success: '#1A7A4A',   // green for positive trend
  successBg: '#E8F4EE',
  warning: '#B45309',   // amber for negative trend
  warningBg: '#FEF3C7',
};

/* ── Reusable icon button ── */
const IconBtn = ({ onClick, title, children }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      title={title}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 36, height: 36, borderRadius: 9,
        border: `1px solid ${hov ? C.greenBorder : C.border}`,
        background: hov ? C.greenBg : 'transparent',
        color: hov ? C.green : C.navyGhost,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.15s', flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
};

/* ── Notification icon ── */
const NotifIcon = ({ type, color, bgColor }) => {
  const map = {
    order: <TbShoppingCart size={13} />,
    shipped: <TbPackage size={13} />,
    delivered: <TbCircleCheck size={13} />,
    stock: <TbAlertTriangle size={13} />,
  };
  return (
    <div style={{
      width: 30, height: 30, borderRadius: 8, flexShrink: 0, marginTop: 2,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: bgColor || C.greenBg,
      color: color || C.green,
      border: `1px solid ${C.greenBorder}`,
    }}>
      {map[type] || <TbShoppingCart size={13} />}
    </div>
  );
};

/* ════ HEADER ════ */
const Header = () => {
  const context = useContext(MyContext);
  const token = context?.token;

  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const [anchorNotif, setAnchorNotif] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [todayStats, setTodayStats] = useState({ revenue: 0, orders: 0, change: null, loading: true });
  const [notifications, setNotifications] = useState([]);
  const [notifLoading, setNotifLoading] = useState(true);

  const openMyAcc = Boolean(anchorMyAcc);
  const openNotif = Boolean(anchorNotif);

  const fetchTodayStats = useCallback(async () => {
    if (!token) return;
    try {
      const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
      if (!res.data.success) return;
      const orders = res.data.orders || [];
      const now = new Date();
      const isToday = ts => { const d = new Date(ts); return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); };
      const isYesterday = ts => { const d = new Date(ts); const y = new Date(now); y.setDate(y.getDate() - 1); return d.getDate() === y.getDate() && d.getMonth() === y.getMonth() && d.getFullYear() === y.getFullYear(); };
      const amt = o => Number(o.finalAmount) || Number(o.amount) || 0;
      const todayOrders = orders.filter(o => isToday(o.date));
      const yestOrders = orders.filter(o => isYesterday(o.date));
      const todayRev = todayOrders.reduce((s, o) => s + amt(o), 0);
      const yestRev = yestOrders.reduce((s, o) => s + amt(o), 0);
      const change = yestRev > 0 ? Math.round(((todayRev - yestRev) / yestRev) * 100) : todayRev > 0 ? 100 : 0;
      setTodayStats({ revenue: todayRev, orders: todayOrders.length, change, loading: false });

      const notifs = [];
      [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3).forEach(o => {
        const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
        const ts = o.date ? new Date(o.date) : null;
        const minsAgo = ts ? Math.floor((Date.now() - ts.getTime()) / 60000) : null;
        const timeStr = minsAgo === null ? '' : minsAgo < 1 ? 'just now' : minsAgo < 60 ? `${minsAgo}m ago` : minsAgo < 1440 ? `${Math.floor(minsAgo / 60)}h ago` : `${Math.floor(minsAgo / 1440)}d ago`;
        if (o.status === 'Delivered') notifs.push({ id: `del-${o._id}`, title: 'Order delivered', desc: `#${(o._id || '').slice(-6).toUpperCase()} delivered to ${name}`, time: timeStr, unread: minsAgo < 60, colorKey: 'delivered', icon: 'delivered' });
        else if (o.status === 'Shipped') notifs.push({ id: `ship-${o._id}`, title: 'Order shipped', desc: `#${(o._id || '').slice(-6).toUpperCase()} shipped to ${name}`, time: timeStr, unread: minsAgo < 120, colorKey: 'shipped', icon: 'shipped' });
        else notifs.push({ id: `ord-${o._id}`, title: 'New order received', desc: `#${(o._id || '').slice(-6).toUpperCase()} — ${currency}${amt(o).toLocaleString('en-US')} from ${name}`, time: timeStr, unread: minsAgo < 30, colorKey: 'order', icon: 'order' });
      });
      setNotifications(notifs);
      setNotifLoading(false);
    } catch { setTodayStats(s => ({ ...s, loading: false })); setNotifLoading(false); }
  }, [token]);

  const fetchStockAlerts = useCallback(async () => {
    if (!token) return;
    try {
      const res = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
      if (!res.data.success) return;
      const products = res.data.products || [];
      const getStock = p => Array.isArray(p.sizes) ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0) : Number(p.stock) || 0;
      const stockNotifs = products.filter(p => getStock(p) <= 5).sort((a, b) => getStock(a) - getStock(b)).slice(0, 3).map(p => {
        const stock = getStock(p);
        return { id: `stock-${p._id}`, title: stock === 0 ? 'Out of stock' : 'Low stock alert', desc: `${p.name?.slice(0, 35) || 'Product'}${p.name?.length > 35 ? '…' : ''} — ${stock === 0 ? 'no stock' : `${stock} left`}`, time: 'Stock alert', unread: stock === 0, colorKey: 'stock', icon: 'stock' };
      });
      setNotifications(prev => [...stockNotifs, ...prev].filter((n, i, arr) => arr.findIndex(x => x.id === n.id) === i).slice(0, 6));
    } catch { }
  }, [token]);

  useEffect(() => { fetchTodayStats(); fetchStockAlerts(); }, [fetchTodayStats, fetchStockAlerts]);

  const unreadCount = notifications.filter(n => n.unread).length;
  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  const adminName = context?.adminName || context?.name || 'Admin User';
  const adminEmail = context?.adminEmail || context?.email || 'info@ddollylamb.com';

  // Color map for notification types
  const notifColors = {
    order: { color: C.green, bg: C.greenBg, border: C.greenBorder },
    shipped: { color: C.champagne, bg: C.champBg, border: C.champBorder },
    delivered: { color: C.green, bg: C.greenBg, border: C.greenBorder },
    stock: { color: C.danger, bg: C.dangerBg, border: C.dangerBorder },
  };

  const menuPaper = (w) => ({
    mt: 1.5, width: w, borderRadius: '12px', overflow: 'hidden',
    border: `1px solid ${C.border}`,
    background: '#FFFFFF',
    boxShadow: '0 8px 32px rgba(28,43,58,0.12), 0 2px 8px rgba(28,43,58,0.06)',
  });

  const menuItemSx = (danger = false) => ({
    px: 2, py: 1.5, gap: 1.5,
    background: '#FFFFFF',
    '&:hover': { background: danger ? C.dangerBg : C.bgHover },
  });

  const iconBoxStyle = (danger = false) => ({
    width: 32, height: 32, borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    background: danger ? C.dangerBg : C.greenBg,
    color: danger ? C.danger : C.green,
    border: `1px solid ${danger ? C.dangerBorder : C.greenBorder}`,
  });

  return (
    <header style={{
      position: 'fixed', top: 0, right: 0, zIndex: 40,
      left: context?.isSidebarOpen ? '260px' : '0px',
      height: 64, transition: 'left 0.3s',
      background: C.bg,
      borderBottom: `1px solid ${C.border}`,
      boxShadow: '0 1px 0 rgba(224,219,211,0.8), 0 2px 12px rgba(28,43,58,0.05)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 20px', gap: 16,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    }}>

      {/* ══ LEFT ══ */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>

        <IconBtn onClick={() => context?.setIsSidebarOpen(!context?.isSidebarOpen)} title="Toggle sidebar">
          {context?.isSidebarOpen ? <AiOutlineMenuFold style={{ fontSize: 20 }} /> : <AiOutlineMenuUnfold style={{ fontSize: 20 }} />}
        </IconBtn>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
          <span style={{ color: C.navyGhost }}>Admin</span>
          <span style={{ color: C.borderStrong, fontSize: 15 }}>/</span>
          <span style={{ color: C.navy, fontWeight: 600 }}>Dashboard</span>
        </div>

        {/* Search */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 9,
            border: `1px solid ${searchFocused ? C.greenBorder : C.border}`,
            background: searchFocused ? C.greenBg : C.bgSurface,
            width: searchFocused ? 260 : 200, transition: 'all 0.2s',
            boxShadow: searchFocused ? `0 0 0 3px ${C.greenBg}` : 'none',
          }}
        >
          <HiOutlineSearch style={{ fontSize: 15, color: searchFocused ? C.green : C.navyGhost, flexShrink: 0, transition: 'color 0.15s' }} />
          <input
            type="text" placeholder="Search anything..."
            value={searchVal} onChange={e => setSearchVal(e.target.value)}
            onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
            style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: C.navy, width: '100%', caretColor: C.green }}
          />
          {searchVal && (
            <button onClick={() => setSearchVal('')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: C.navyGhost, padding: 0 }}>✕</button>
          )}
        </div>
      </div>

      {/* ══ RIGHT ══ */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

        {/* Stats Pill */}
        <div className="hidden lg:flex" style={{
          alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 9,
          background: C.bgSurface, border: `1px solid ${C.border}`, marginRight: 6,
        }}>
          <TbChartBar style={{ fontSize: 14, color: C.green }} />
          <span style={{ fontSize: 11, color: C.navyGhost, fontWeight: 500 }}>Today:</span>
          {todayStats.loading ? (
            <span style={{ fontSize: 12, fontWeight: 700, color: C.navyGhost }}>…</span>
          ) : (
            <>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>{currency}{todayStats.revenue.toLocaleString('en-US')}</span>
              {todayStats.change !== null && (
                <span style={{
                  fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2,
                  color: todayStats.change >= 0 ? C.green : C.danger,
                  background: todayStats.change >= 0 ? C.greenBg : C.dangerBg,
                  padding: '2px 5px', borderRadius: 4,
                }}>
                  {todayStats.change >= 0 ? <TbTrendingUp size={11} /> : <TbTrendingDown size={11} />}
                  {todayStats.change >= 0 ? '+' : ''}{todayStats.change}%
                </span>
              )}
              <span className="hidden xl:inline" style={{ fontSize: 10, color: C.navyGhost }}>· {todayStats.orders} order{todayStats.orders !== 1 ? 's' : ''}</span>
            </>
          )}
          <button onClick={() => { fetchTodayStats(); fetchStockAlerts(); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.navyGhost, marginLeft: 2, display: 'flex', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = C.green}
            onMouseLeave={e => e.currentTarget.style.color = C.navyGhost}>
            <TbRefresh size={12} />
          </button>
        </div>

        {/* Settings */}
        <Link to="/store-settings">
          <IconBtn title="Settings"><IoSettingsOutline style={{ fontSize: 18 }} /></IconBtn>
        </Link>

        {/* Bell */}
        <div style={{ position: 'relative' }}>
          <IconBtn onClick={e => setAnchorNotif(e.currentTarget)} title="Notifications">
            <FaRegBell style={{ fontSize: 17 }} />
          </IconBtn>
          {unreadCount > 0 && (
            <span style={{
              position: 'absolute', top: 4, right: 4,
              width: 15, height: 15, borderRadius: '50%',
              background: C.green, color: '#FFFFFF',
              fontSize: 8, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `2px solid ${C.bg}`, pointerEvents: 'none',
            }}>
              {unreadCount}
            </span>
          )}
        </div>

        {/* ── Notification Dropdown ── */}
        <Menu anchorEl={anchorNotif} open={openNotif} onClose={() => setAnchorNotif(null)}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          slotProps={{ paper: { elevation: 0, sx: menuPaper(320) } }}>

          {/* Header */}
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${C.border}`, background: C.bgSurface, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: C.navy, margin: 0 }}>Notifications</p>
              <p style={{ fontSize: 11, color: C.navyGhost, margin: '2px 0 0' }}>{notifLoading ? 'Loading…' : `${unreadCount} unread · ${notifications.length} total`}</p>
            </div>
            {unreadCount > 0 && (
              <button onClick={markAllRead}
                style={{ fontSize: 11, fontWeight: 600, color: C.green, background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = C.greenHover}
                onMouseLeave={e => e.currentTarget.style.color = C.green}>
                Mark all read
              </button>
            )}
          </div>

          <div style={{ maxHeight: 300, overflowY: 'auto' }}>
            {notifLoading ? Array(3).fill(0).map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', borderBottom: `1px solid ${C.border}` }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: C.bgSurface, flexShrink: 0 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ height: 10, borderRadius: 4, background: C.bgSurface, width: '70%' }} />
                  <div style={{ height: 8, borderRadius: 4, background: C.bgSurface }} />
                </div>
              </div>
            )) : notifications.length === 0 ? (
              <div style={{ padding: '40px 0', textAlign: 'center', color: C.navyGhost }}>
                <FaRegBell style={{ fontSize: 28, margin: '0 auto 8px', opacity: 0.25, display: 'block' }} />
                <p style={{ fontSize: 13, margin: 0 }}>No notifications yet</p>
              </div>
            ) : notifications.map(n => {
              const nc = notifColors[n.colorKey] || notifColors.order;
              return (
                <MenuItem key={n.id} onClick={() => setAnchorNotif(null)} sx={{
                  px: 2, py: 1.5, alignItems: 'flex-start', gap: 1.5,
                  background: n.unread ? C.bgSurface : '#FFFFFF',
                  '&:hover': { background: C.bgHover },
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: nc.bg, color: nc.color, border: `1px solid ${nc.border}` }}>
                    {n.icon === 'order' && <TbShoppingCart size={13} />}
                    {n.icon === 'shipped' && <TbPackage size={13} />}
                    {n.icon === 'delivered' && <TbCircleCheck size={13} />}
                    {n.icon === 'stock' && <TbAlertTriangle size={13} />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 12.5, fontWeight: 600, color: C.navy, margin: '0 0 2px', lineHeight: 1.3 }}>{n.title}</p>
                    <p style={{ fontSize: 11.5, color: C.navySoft, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.desc}</p>
                    <p style={{ fontSize: 10, color: C.navyGhost, margin: 0 }}>{n.time}</p>
                  </div>
                  {n.unread && <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.green, flexShrink: 0, marginTop: 6 }} />}
                </MenuItem>
              );
            })}
          </div>

          <div style={{ padding: '10px 16px', borderTop: `1px solid ${C.border}`, background: C.bgSurface, textAlign: 'center' }}>
            <button onClick={() => { setAnchorNotif(null); fetchTodayStats(); fetchStockAlerts(); }}
              style={{ fontSize: 12, fontWeight: 600, color: C.green, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, margin: '0 auto' }}
              onMouseEnter={e => e.currentTarget.style.color = C.greenHover}
              onMouseLeave={e => e.currentTarget.style.color = C.green}>
              <TbRefresh size={12} /> Refresh notifications
            </button>
          </div>
        </Menu>

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: C.border, margin: '0 4px' }} />

        {/* ── Profile ── */}
        {/* {context?.isLogin === true ? ( */}
        {(context?.isLogin || context?.token) ? (
          <div style={{ position: 'relative' }}>
            <button onClick={e => setAnchorMyAcc(e.currentTarget)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '6px 12px 6px 8px', borderRadius: 9,
                border: `1px solid ${C.border}`,
                background: 'transparent', cursor: 'pointer', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.greenBorder; e.currentTarget.style.background = C.greenBg; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent'; }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', outline: `2px solid ${C.greenBorder}` }}>
                  {assets?.profileImg
                    ? <img src={assets.profileImg1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.green, fontSize: 13, fontWeight: 700, color: '#FFFFFF', fontFamily: 'Georgia, serif' }}>{adminName.charAt(0).toUpperCase()}</div>
                  }
                </div>
                <span style={{ position: 'absolute', bottom: 0, right: 0, width: 8, height: 8, borderRadius: '50%', background: '#22C55E', border: `2px solid ${C.bg}` }} />
              </div>
              <div className="hidden sm:block" style={{ textAlign: 'left' }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: C.navy, margin: 0, lineHeight: 1.3 }}>{adminName}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <BiSolidCrown style={{ fontSize: 9, color: C.champagne }} />
                  <span style={{ fontSize: 10, fontWeight: 600, color: C.champText }}>Admin</span>
                </div>
              </div>
              <svg className="hidden sm:block" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 2 }}>
                <path d="M2 4l4 4 4-4" stroke={C.navyGhost} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Profile Dropdown */}
            <Menu anchorEl={anchorMyAcc} open={openMyAcc} onClose={() => setAnchorMyAcc(null)} onClick={() => setAnchorMyAcc(null)}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              slotProps={{ paper: { elevation: 0, sx: menuPaper(260) } }}>

              {/* Profile Card */}
              <div style={{ padding: 16, borderBottom: `1px solid ${C.border}`, background: C.bgSurface }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', outline: `2px solid ${C.greenBorder}` }}>
                      {assets?.profileImg
                        ? <img src={assets.profileImg1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.green, fontSize: 16, fontWeight: 700, color: '#FFFFFF', fontFamily: 'Georgia, serif' }}>{adminName.charAt(0).toUpperCase()}</div>
                      }
                    </div>
                    <span style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: '#22C55E', border: `2px solid ${C.bgSurface}` }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: C.navy, margin: '0 0 2px' }}>{adminName}</h3>
                    <p style={{ fontSize: 11, color: C.navyGhost, margin: '0 0 5px', maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{adminEmail}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: C.champBg, border: `1px solid ${C.champBorder}`, padding: '2px 6px', borderRadius: 4 }}>
                      <BiSolidCrown style={{ fontSize: 9, color: C.champagne }} />
                      <span style={{ fontSize: 10, fontWeight: 700, color: C.champText, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Admin</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              {!todayStats.loading && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '10px 12px', borderBottom: `1px solid ${C.border}` }}>
                  {[
                    { val: todayStats.orders, label: "Today's Orders" },
                    { val: `${currency}${todayStats.revenue.toLocaleString('en-US')}`, label: 'Revenue', small: true },
                  ].map((s, i) => (
                    <div key={i} style={{ borderRadius: 8, padding: '8px 10px', textAlign: 'center', background: C.greenBg, border: `1px solid ${C.greenBorder}` }}>
                      <p style={{ fontSize: s.small ? 12 : 16, fontWeight: 800, color: C.green, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.val}</p>
                      <p style={{ fontSize: 10, fontWeight: 500, color: C.navyGhost, margin: 0 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Menu Items */}
              {[
                { icon: <FaRegUser style={{ fontSize: 13 }} />, label: 'My Account', sub: 'Manage profile' },
                { icon: <IoSettingsOutline style={{ fontSize: 13 }} />, label: 'Settings', sub: 'Preferences & security' },
              ].map((item, i) => (
                <MenuItem key={i} sx={menuItemSx()}>
                  <div style={iconBoxStyle()}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: C.navy, margin: '0 0 1px' }}>{item.label}</p>
                    <p style={{ fontSize: 11, color: C.navyGhost, margin: 0 }}>{item.sub}</p>
                  </div>
                </MenuItem>
              ))}

              <Divider sx={{ mx: 2, borderColor: C.border }} />

              <MenuItem
                // onClick={() => context?.setIsLogin && context.setIsLogin(false)}
                onClick={() => {
                  context?.setIsLogin && context.setIsLogin(false);
                  context?.setToken && context.setToken('');
                  localStorage.removeItem('token');
                }}
                sx={menuItemSx(true)}>
                <div style={iconBoxStyle(true)}><IoMdLogOut style={{ fontSize: 14 }} /></div>
                <p style={{ fontSize: 13, fontWeight: 500, color: C.danger, margin: 0 }}>Sign Out</p>
              </MenuItem>
            </Menu>
          </div>

        ) : (
          <Link to='/login'>
            <button
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 18px', borderRadius: 9,
                border: 'none', cursor: 'pointer',
                background: C.green, color: '#FFFFFF',
                fontSize: 13, fontWeight: 600, letterSpacing: '0.02em',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.greenHover}
              onMouseLeave={e => e.currentTarget.style.background = C.green}>
              <BiSolidCrown style={{ fontSize: 12 }} /> Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;