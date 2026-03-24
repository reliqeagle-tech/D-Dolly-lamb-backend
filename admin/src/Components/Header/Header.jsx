// import React, { useContext, useState } from 'react'
// import { RiMenu2Line } from "react-icons/ri";
// import Button from '@mui/material/Button';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import { FaRegUser } from "react-icons/fa6";
// import { IoMdLogOut } from "react-icons/io";
// import { AiOutlineMenuFold } from "react-icons/ai";
// import { AiOutlineMenuUnfold } from "react-icons/ai";

// import { FaRegBell } from "react-icons/fa";
// import { assets } from '../../assets/assets';
// import { MyContext } from '../../App';
// import { Link } from 'react-router-dom';


// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));

// const Header = () => {
//   const [anchorMyAcc, setAnchorMyAcc] = useState(null);
//   const openMyAcc = Boolean(anchorMyAcc);
//   const handleClickMyAcc = (event) => {
//     setAnchorMyAcc(event.currentTarget);
//   };
//   const handleCloseMyAcc = () => {
//     setAnchorMyAcc(null);
//   };
//   const context = useContext(MyContext)
//   return (
//     <header className={`w-full h-auto bg-[#fff] shadow-md ${context.isSidebarOpen === true ? "pl-[21%]" : "pl-[10%]"} py-2 pr-7 flex items-center justify-between transition-all`}>
//       <div className='part1'>
//         <Button className=' !w-[40px] !min-w-[40px] !rounded-full !text-gray-800' onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}>
//           {
//             context.isSidebarOpen === true ?
//               <AiOutlineMenuFold className='text-2xl' /> :
//               <AiOutlineMenuUnfold className='text-2xl' />
//           }
//         </Button>
//       </div>
//       <div className='part2 w-[40%] flex items-center justify-end gap-5'>
//         <IconButton aria-label="cart">
//           <StyledBadge badgeContent={4} color="secondary">
//             <FaRegBell />
//           </StyledBadge>
//         </IconButton>

//         {
//           context.isLogin === true ?
//             <div className='relative'>
//               <div className='w-[35px] h-[35px] rounded-full overflow-hidden cursor-pointer' onClick={handleClickMyAcc}>
//                 <img src={assets.profileImg} alt="" className='w-full h-full object-cover' />
//               </div>

//               <Menu
//                 anchorMyAcc={anchorMyAcc}
//                 id="account-menu"
//                 open={openMyAcc}
//                 onClose={handleCloseMyAcc}
//                 onClick={handleCloseMyAcc}
//                 slotProps={{
//                   paper: {
//                     elevation: 0,
//                     sx: {
//                       overflow: 'visible',
//                       filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                       mt: 1.5,
//                       '& .MuiAvatar-root': {
//                         width: 32,
//                         height: 32,
//                         ml: -0.5,
//                         mr: 1,
//                       },
//                       '&::before': {
//                         content: '""',
//                         display: 'block',
//                         position: 'absolute',
//                         top: 0,
//                         right: 14,
//                         width: 10,
//                         height: 10,
//                         bgcolor: 'background.paper',
//                         transform: 'translateY(-50%) rotate(45deg)',
//                         zIndex: 0,
//                       },
//                     },
//                   },
//                 }}
//                 transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                 anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//               >
//                 <MenuItem onClick={handleCloseMyAcc} className='!bg-white'>
//                   <div className='flex items-center gap-3'>
//                     <div className='w-[35px] h-[35px] rounded-full overflow-hidden cursor-pointer' onClick={handleClickMyAcc}>
//                       <img src={assets.profileImg} alt="" className='w-full h-full object-cover' />
//                     </div>
//                     <div className='info'>
//                       <h3 className='text-[15px] text-gray-700 font-medium leading-5'>Vikash Verma</h3>
//                       <p className='text-[13px] text-gray-600 font-medium'>admin@gmail.com</p>
//                     </div>
//                   </div>
//                 </MenuItem>
//                 <Divider />
//                 <MenuItem onClick={handleCloseMyAcc} className='flex items-center justify-center gap-3'>
//                   <FaRegUser className='text-[16px]' />  <span className='text-sm text-gray-700 font-medium'>My account</span>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseMyAcc} className='flex items-center justify-center gap-3'>
//                   <IoMdLogOut className='text-lg' />  <span className='text-sm text-gray-700 font-medium'>Sign Out</span>
//                 </MenuItem>
//               </Menu>
//             </div>
//             :
//             <Link to='/login' ><Button className='btn-blue !py-1 !px-3 !rounded-full !text-sm'>Login</Button></Link>
//         }

//       </div>
//     </header>
//   )
// }

// export default Header




// import React, { useContext, useState } from 'react'
// import { RiMenu2Line } from "react-icons/ri";
// import Button from '@mui/material/Button';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import { FaRegUser } from "react-icons/fa6";
// import { IoMdLogOut } from "react-icons/io";
// import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
// import { FaRegBell } from "react-icons/fa";
// import { BiSolidCrown } from "react-icons/bi";
// import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
// import { HiOutlineSearch } from "react-icons/hi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { TbChartBar } from "react-icons/tb";
// import { assets } from '../../assets/assets';
// import { MyContext } from '../../App';
// import { Link } from 'react-router-dom';

// /* ── Styled Badge ── */
// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -2,
//     top: 2,
//     border: `2px solid #fff`,
//     padding: '0 4px',
//     background: '#ef4444',
//     color: '#fff',
//     fontSize: '9px',
//     fontWeight: 700,
//     minWidth: '16px',
//     height: '16px',
//     borderRadius: '8px',
//   },
// }));

// /* ── Notification data ── */
// const notifications = [
//   { id: 1, title: 'New order received', desc: 'Order #1042 placed by Rahul', time: '2m ago', unread: true, color: '#6366f1' },
//   { id: 2, title: 'Low stock alert', desc: 'Brown leather wallet — 3 left', time: '15m ago', unread: true, color: '#f59e0b' },
//   { id: 3, title: 'Payment confirmed', desc: '₹4,200 credited for order #1038', time: '1h ago', unread: false, color: '#10b981' },
//   { id: 4, title: 'New review posted', desc: 'Priya rated Classic Belt ★★★★★', time: '3h ago', unread: false, color: '#8b5cf6' },
// ];

// const Header = () => {
//   const [anchorMyAcc, setAnchorMyAcc] = useState(null);
//   const [anchorNotif, setAnchorNotif] = useState(null);
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [searchVal, setSearchVal] = useState('');
//   const [darkMode, setDarkMode] = useState(false);

//   const openMyAcc = Boolean(anchorMyAcc);
//   const openNotif = Boolean(anchorNotif);

//   const context = useContext(MyContext);
//   const unreadCount = notifications.filter(n => n.unread).length;

//   return (
//     <header
//       className={`fixed top-0 right-0 z-40 bg-white flex items-center justify-between gap-4 px-5 py-0 transition-all duration-300`}
//       style={{
//         left: context.isSidebarOpen ? '260px' : '0px',
//         height: '64px',
//         borderBottom: '1px solid #f0f0f0',
//         boxShadow: '0 1px 16px rgba(0,0,0,0.06)',
//       }}
//     >
//       {/* ── LEFT ── */}
//       <div className="flex items-center gap-3">
//         {/* Hamburger */}
//         <button
//           onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
//           className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//         >
//           {context.isSidebarOpen
//             ? <AiOutlineMenuFold className="text-[20px]" />
//             : <AiOutlineMenuUnfold className="text-[20px]" />
//           }
//         </button>

//         {/* Breadcrumb / Page title */}
//         <div className="hidden sm:flex items-center gap-2">
//           <span className="text-[13px] text-gray-400">Admin</span>
//           <span className="text-gray-300">/</span>
//           <span className="text-[13px] font-semibold text-gray-700">Dashboard</span>
//         </div>

//         {/* Search bar */}
//         <div
//           className={`hidden md:flex items-center gap-2 ml-2 px-3 py-2 rounded-xl border transition-all duration-200 ${searchFocused ? 'border-indigo-400 shadow-sm bg-indigo-50/30' : 'border-gray-200 bg-gray-50'}`}
//           style={{ width: searchFocused ? '260px' : '200px' }}
//         >
//           <HiOutlineSearch className={`text-[16px] flex-shrink-0 ${searchFocused ? 'text-indigo-500' : 'text-gray-400'}`} />
//           <input
//             type="text"
//             placeholder="Search anything..."
//             value={searchVal}
//             onChange={e => setSearchVal(e.target.value)}
//             onFocus={() => setSearchFocused(true)}
//             onBlur={() => setSearchFocused(false)}
//             className="bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400 w-full"
//           />
//           {searchVal && (
//             <button onClick={() => setSearchVal('')} className="text-gray-400 hover:text-gray-600 text-[11px]">✕</button>
//           )}
//         </div>
//       </div>

//       {/* ── RIGHT ── */}
//       <div className="flex items-center gap-1.5">

//         {/* Quick Stats Pill */}
//         <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-100 bg-gray-50 mr-2">
//           <TbChartBar className="text-indigo-400 text-[14px]" />
//           <span className="text-[11px] text-gray-500 font-medium">Today:</span>
//           <span className="text-[12px] font-bold text-indigo-600">₹24,380</span>
//           <span className="text-[10px] text-emerald-500 font-semibold">↑ 12%</span>
//         </div>

//         {/* Dark Mode Toggle */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//           title="Toggle theme"
//         >
//           {darkMode
//             ? <MdOutlineLightMode className="text-[18px]" />
//             : <MdOutlineDarkMode className="text-[18px]" />
//           }
//         </button>

//         {/* Settings */}
//         <Link to="/settings/general">
//           <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all" title="Settings">
//             <IoSettingsOutline className="text-[18px]" />
//           </button>
//         </Link>

//         {/* Notification Bell */}
//         <button
//           onClick={(e) => setAnchorNotif(e.currentTarget)}
//           className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all relative"
//           title="Notifications"
//         >
//           <FaRegBell className="text-[17px]" />
//           {unreadCount > 0 && (
//             <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
//               {unreadCount}
//             </span>
//           )}
//         </button>

//         {/* Notification Dropdown */}
//         <Menu
//           anchorEl={anchorNotif}
//           open={openNotif}
//           onClose={() => setAnchorNotif(null)}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//           slotProps={{
//             paper: {
//               elevation: 0,
//               sx: {
//                 mt: 1.5,
//                 width: 320,
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 border: '1px solid #f0f0f0',
//                 filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.10))',
//               }
//             }
//           }}
//         >
//           {/* Notif Header */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//             <div>
//               <h3 className="text-[14px] font-semibold text-gray-800">Notifications</h3>
//               <p className="text-[11px] text-gray-400">{unreadCount} unread</p>
//             </div>
//             <button className="text-[11px] text-indigo-500 font-medium hover:text-indigo-700">Mark all read</button>
//           </div>

//           {/* Notif List */}
//           <div className="max-h-[280px] overflow-y-auto">
//             {notifications.map(n => (
//               <MenuItem key={n.id} onClick={() => setAnchorNotif(null)}
//                 sx={{ px: 2, py: 1.5, alignItems: 'flex-start', gap: 1.5, background: n.unread ? '#fafbff' : 'white', '&:hover': { background: '#f5f5ff' } }}>
//                 <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: n.color }} />
//                 <div className="flex-1 min-w-0">
//                   <p className="text-[12.5px] font-semibold text-gray-800 leading-tight">{n.title}</p>
//                   <p className="text-[11.5px] text-gray-500 mt-0.5 truncate">{n.desc}</p>
//                   <p className="text-[10px] text-gray-400 mt-0.5">{n.time}</p>
//                 </div>
//                 {n.unread && <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#6366f1' }} />}
//               </MenuItem>
//             ))}
//           </div>

//           <div className="px-4 py-2.5 border-t border-gray-100 text-center">
//             <button className="text-[12px] text-indigo-500 font-medium hover:text-indigo-700">View all notifications →</button>
//           </div>
//         </Menu>

//         {/* Divider */}
//         <div className="w-px h-7 bg-gray-200 mx-1" />

//         {/* Profile */}
//         {context.isLogin === true ? (
//           <div className="relative">
//             <button
//               onClick={(e) => setAnchorMyAcc(e.currentTarget)}
//               className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
//             >
//               <div className="relative">
//                 <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-100">
//                   <img src={assets.profileImg} alt="" className="w-full h-full object-cover" />
//                 </div>
//                 {/* Online dot */}
//                 <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border border-white" />
//               </div>
//               <div className="hidden sm:block text-left">
//                 <p className="text-[12px] font-semibold text-gray-800 leading-tight">Vikash Verma</p>
//                 <div className="flex items-center gap-1">
//                   <BiSolidCrown className="text-[9px] text-amber-400" />
//                   <span className="text-[10px] text-indigo-500 font-medium">Admin Pro</span>
//                 </div>
//               </div>
//               <svg className="hidden sm:block w-3 h-3 text-gray-400 ml-0.5 group-hover:text-gray-600" fill="none" viewBox="0 0 12 12">
//                 <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>

//             <Menu
//               anchorEl={anchorMyAcc}
//               open={openMyAcc}
//               onClose={() => setAnchorMyAcc(null)}
//               onClick={() => setAnchorMyAcc(null)}
//               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//               slotProps={{
//                 paper: {
//                   elevation: 0,
//                   sx: {
//                     mt: 1.5,
//                     width: 240,
//                     borderRadius: '16px',
//                     overflow: 'hidden',
//                     border: '1px solid #f0f0f0',
//                     filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.10))',
//                   }
//                 }
//               }}
//             >
//               {/* Profile Card */}
//               <div className="px-4 pt-4 pb-3 border-b border-gray-100"
//                 style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)' }}>
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-indigo-200">
//                       <img src={assets.profileImg} alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-[14px] font-semibold text-gray-800 leading-tight">Vikash Verma</h3>
//                     <p className="text-[11px] text-gray-500 mt-0.5">admin@gmail.com</p>
//                     <div className="flex items-center gap-1 mt-1">
//                       <BiSolidCrown className="text-[10px] text-amber-400" />
//                       <span className="text-[10px] font-bold text-indigo-600 tracking-wide uppercase">Admin Pro</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Menu Items */}
//               <MenuItem onClick={() => setAnchorMyAcc(null)} sx={{ px: 2, py: 1.5, gap: 1.5, '&:hover': { background: '#f5f5ff' } }}>
//                 <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
//                   <FaRegUser className="text-indigo-500 text-[13px]" />
//                 </div>
//                 <div>
//                   <p className="text-[13px] font-medium text-gray-700">My Account</p>
//                   <p className="text-[11px] text-gray-400">Manage profile</p>
//                 </div>
//               </MenuItem>

//               <MenuItem onClick={() => setAnchorMyAcc(null)} sx={{ px: 2, py: 1.5, gap: 1.5, '&:hover': { background: '#f5f5ff' } }}>
//                 <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
//                   <IoSettingsOutline className="text-purple-500 text-[13px]" />
//                 </div>
//                 <div>
//                   <p className="text-[13px] font-medium text-gray-700">Settings</p>
//                   <p className="text-[11px] text-gray-400">Preferences & security</p>
//                 </div>
//               </MenuItem>

//               {/* Upgrade Banner */}
//               <div className="mx-3 my-2 rounded-xl p-3 relative overflow-hidden"
//                 style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)' }}>
//                 <BiSolidCrown className="text-yellow-300 text-[14px] mb-1" />
//                 <p className="text-white text-[11px] font-semibold leading-tight">Upgrade to Enterprise</p>
//                 <p className="text-indigo-200 text-[10px] mt-0.5">Unlock premium features</p>
//                 <button className="mt-2 bg-white text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors">
//                   Upgrade Now
//                 </button>
//               </div>

//               <Divider sx={{ mx: 2, borderColor: '#f0f0f0' }} />

//               <MenuItem onClick={() => setAnchorMyAcc(null)} sx={{ px: 2, py: 1.5, gap: 1.5, '&:hover': { background: '#fff5f5' } }}>
//                 <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
//                   <IoMdLogOut className="text-red-400 text-[15px]" />
//                 </div>
//                 <p className="text-[13px] font-medium text-red-500">Sign Out</p>
//               </MenuItem>
//             </Menu>
//           </div>
//         ) : (
//           <Link to='/login'>
//             <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-white transition-all hover:opacity-90"
//               style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)' }}>
//               <BiSolidCrown className="text-yellow-300 text-[12px]" />
//               Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useContext, useState, useEffect, useCallback } from 'react'
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import { FaRegUser } from "react-icons/fa6";
// import { IoMdLogOut } from "react-icons/io";
// import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
// import { FaRegBell } from "react-icons/fa";
// import { BiSolidCrown } from "react-icons/bi";
// import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
// import { HiOutlineSearch } from "react-icons/hi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { TbChartBar, TbTrendingUp, TbTrendingDown, TbPackage, TbAlertTriangle, TbCircleCheck, TbShoppingCart, TbRefresh } from "react-icons/tb";
// import { assets } from '../../assets/assets';
// import { MyContext } from '../../App';
// import { backendUrl, currency } from '../../App';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// /* ════════════════════════════════════════════
//    HEADER COMPONENT — 100% REAL DYNAMIC DATA
// ════════════════════════════════════════════ */
// const Header = () => {
//   const context = useContext(MyContext);
//   const token = context?.token;

//   const [anchorMyAcc, setAnchorMyAcc] = useState(null);
//   const [anchorNotif, setAnchorNotif] = useState(null);
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [searchVal, setSearchVal] = useState('');
//   const [darkMode, setDarkMode] = useState(false);

//   /* ── Real today's stats ── */
//   const [todayStats, setTodayStats] = useState({ revenue: 0, orders: 0, change: null, loading: true });

//   /* ── Real notifications from orders + products ── */
//   const [notifications, setNotifications] = useState([]);
//   const [notifLoading, setNotifLoading] = useState(true);

//   const openMyAcc = Boolean(anchorMyAcc);
//   const openNotif = Boolean(anchorNotif);

//   /* ── Fetch today stats from real orders ── */
//   const fetchTodayStats = useCallback(async () => {
//     if (!token) return;
//     try {
//       const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
//       if (!res.data.success) return;

//       const orders = res.data.orders || [];
//       const now = new Date();

//       const isToday = (ts) => {
//         const d = new Date(ts);
//         return d.getDate() === now.getDate() &&
//           d.getMonth() === now.getMonth() &&
//           d.getFullYear() === now.getFullYear();
//       };

//       const isYesterday = (ts) => {
//         const d = new Date(ts);
//         const y = new Date(now);
//         y.setDate(y.getDate() - 1);
//         return d.getDate() === y.getDate() &&
//           d.getMonth() === y.getMonth() &&
//           d.getFullYear() === y.getFullYear();
//       };

//       const amt = (o) => Number(o.finalAmount) || Number(o.amount) || 0;

//       const todayOrders = orders.filter(o => isToday(o.date));
//       const yestOrders = orders.filter(o => isYesterday(o.date));

//       const todayRev = todayOrders.reduce((s, o) => s + amt(o), 0);
//       const yestRev = yestOrders.reduce((s, o) => s + amt(o), 0);

//       const change = yestRev > 0
//         ? Math.round(((todayRev - yestRev) / yestRev) * 100)
//         : todayRev > 0 ? 100 : 0;

//       setTodayStats({
//         revenue: todayRev,
//         orders: todayOrders.length,
//         change,
//         loading: false,
//       });

//       /* ── Build real notifications from order data ── */
//       const notifs = [];

//       // 1. Most recent new orders (last 3)
//       const recentOrders = [...orders]
//         .sort((a, b) => new Date(b.date) - new Date(a.date))
//         .slice(0, 3);

//       recentOrders.forEach(o => {
//         const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
//         const orderAmt = amt(o);
//         const ts = o.date ? new Date(o.date) : null;
//         const minsAgo = ts ? Math.floor((Date.now() - ts.getTime()) / 60000) : null;

//         const timeStr = minsAgo === null ? '' :
//           minsAgo < 1 ? 'just now' :
//             minsAgo < 60 ? `${minsAgo}m ago` :
//               minsAgo < 1440 ? `${Math.floor(minsAgo / 60)}h ago` :
//                 `${Math.floor(minsAgo / 1440)}d ago`;

//         if (o.status === 'Delivered') {
//           notifs.push({
//             id: `del-${o._id}`,
//             title: 'Order delivered',
//             desc: `#${(o._id || '').slice(-6).toUpperCase()} delivered to ${name}`,
//             time: timeStr,
//             unread: minsAgo !== null && minsAgo < 60,
//             color: '#10b981',
//             icon: 'delivered',
//           });
//         } else if (o.status === 'Shipped') {
//           notifs.push({
//             id: `ship-${o._id}`,
//             title: 'Order shipped',
//             desc: `#${(o._id || '').slice(-6).toUpperCase()} shipped to ${name}`,
//             time: timeStr,
//             unread: minsAgo !== null && minsAgo < 120,
//             color: '#6366f1',
//             icon: 'shipped',
//           });
//         } else {
//           notifs.push({
//             id: `ord-${o._id}`,
//             title: 'New order received',
//             desc: `#${(o._id || '').slice(-6).toUpperCase()} — ${currency}${orderAmt.toLocaleString('en-US')} from ${name}`,
//             time: timeStr,
//             unread: minsAgo !== null && minsAgo < 30,
//             color: '#6366f1',
//             icon: 'order',
//           });
//         }
//       });

//       setNotifications(notifs);
//       setNotifLoading(false);
//     } catch (e) {
//       setTodayStats(s => ({ ...s, loading: false }));
//       setNotifLoading(false);
//     }
//   }, [token]);

//   /* ── Fetch low-stock alerts from products ── */
//   const fetchStockAlerts = useCallback(async () => {
//     if (!token) return;
//     try {
//       const res = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
//       if (!res.data.success) return;

//       const products = res.data.products || [];
//       const getStock = (p) => Array.isArray(p.sizes)
//         ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
//         : Number(p.stock) || 0;

//       // Low stock (≤5) and out-of-stock alerts
//       const lowStock = products
//         .filter(p => getStock(p) <= 5)
//         .sort((a, b) => getStock(a) - getStock(b))
//         .slice(0, 3);

//       const stockNotifs = lowStock.map(p => {
//         const stock = getStock(p);
//         return {
//           id: `stock-${p._id}`,
//           title: stock === 0 ? 'Out of stock' : 'Low stock alert',
//           desc: `${p.name?.slice(0, 35) || 'Product'}${p.name?.length > 35 ? '…' : ''} — ${stock === 0 ? 'no stock' : `${stock} left`}`,
//           time: 'Stock alert',
//           unread: stock === 0,
//           color: stock === 0 ? '#ef4444' : '#f59e0b',
//           icon: 'stock',
//         };
//       });

//       setNotifications(prev => {
//         // Merge: stock alerts + order notifs, deduplicated, max 6
//         const combined = [...stockNotifs, ...prev]
//           .filter((n, i, arr) => arr.findIndex(x => x.id === n.id) === i)
//           .slice(0, 6);
//         return combined;
//       });
//     } catch (_) { }
//   }, [token]);

//   useEffect(() => {
//     fetchTodayStats();
//     fetchStockAlerts();
//   }, [fetchTodayStats, fetchStockAlerts]);

//   const unreadCount = notifications.filter(n => n.unread).length;
//   const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread: false })));

//   /* ── Notification icon by type ── */
//   const NotifIcon = ({ type, color }) => {
//     const iconMap = {
//       order: <TbShoppingCart size={13} />,
//       shipped: <TbPackage size={13} />,
//       delivered: <TbCircleCheck size={13} />,
//       stock: <TbAlertTriangle size={13} />,
//     };
//     return (
//       <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
//         style={{ background: `${color}18`, color }}>
//         {iconMap[type] || <TbShoppingCart size={13} />}
//       </div>
//     );
//   };

//   /* ── Admin display name/email from context or fallback ── */
//   const adminName = context?.adminName || context?.name || 'Admin';
//   const adminEmail = context?.adminEmail || context?.email || '';

//   return (
//     <header
//       className="fixed top-0 right-0 z-40 bg-white flex items-center justify-between gap-4 px-5 py-0 transition-all duration-300"
//       style={{
//         left: context?.isSidebarOpen ? '260px' : '0px',
//         height: '64px',
//         borderBottom: '1px solid #f0f0f0',
//         boxShadow: '0 1px 16px rgba(0,0,0,0.06)',
//       }}
//     >
//       {/* ══ LEFT ══ */}
//       <div className="flex items-center gap-3">
//         {/* Hamburger */}
//         <button
//           onClick={() => context?.setIsSidebarOpen(!context?.isSidebarOpen)}
//           className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//         >
//           {context?.isSidebarOpen
//             ? <AiOutlineMenuFold className="text-[20px]" />
//             : <AiOutlineMenuUnfold className="text-[20px]" />
//           }
//         </button>

//         {/* Breadcrumb */}
//         <div className="hidden sm:flex items-center gap-2">
//           <span className="text-[13px] text-gray-400">Admin</span>
//           <span className="text-gray-300">/</span>
//           <span className="text-[13px] font-semibold text-gray-700">Dashboard</span>
//         </div>

//         {/* Search bar */}
//         <div
//           className={`hidden md:flex items-center gap-2 ml-2 px-3 py-2 rounded-xl border transition-all duration-200
//             ${searchFocused ? 'border-indigo-400 shadow-sm bg-indigo-50/30' : 'border-gray-200 bg-gray-50'}`}
//           style={{ width: searchFocused ? '260px' : '200px' }}
//         >
//           <HiOutlineSearch className={`text-[16px] flex-shrink-0 ${searchFocused ? 'text-indigo-500' : 'text-gray-400'}`} />
//           <input
//             type="text"
//             placeholder="Search anything..."
//             value={searchVal}
//             onChange={e => setSearchVal(e.target.value)}
//             onFocus={() => setSearchFocused(true)}
//             onBlur={() => setSearchFocused(false)}
//             className="bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400 w-full"
//           />
//           {searchVal && (
//             <button onClick={() => setSearchVal('')} className="text-gray-400 hover:text-gray-600 text-[11px]">✕</button>
//           )}
//         </div>
//       </div>

//       {/* ══ RIGHT ══ */}
//       <div className="flex items-center gap-1.5">

//         {/* ── Today's Stats Pill — REAL DATA ── */}
//         <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-100 bg-gray-50 mr-2">
//           <TbChartBar className="text-indigo-400 text-[14px]" />
//           <span className="text-[11px] text-gray-500 font-medium">Today:</span>
//           {todayStats.loading ? (
//             <span className="text-[12px] font-bold text-gray-400">…</span>
//           ) : (
//             <>
//               <span className="text-[12px] font-bold text-indigo-600">
//                 {currency}{todayStats.revenue.toLocaleString('en-US')}
//               </span>
//               {todayStats.change !== null && (
//                 <span className={`text-[10px] font-semibold flex items-center gap-0.5
//                   ${todayStats.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
//                   {todayStats.change >= 0
//                     ? <TbTrendingUp size={11} />
//                     : <TbTrendingDown size={11} />
//                   }
//                   {todayStats.change >= 0 ? '+' : ''}{todayStats.change}%
//                 </span>
//               )}
//               <span className="text-[10px] text-gray-400 hidden xl:inline">
//                 · {todayStats.orders} order{todayStats.orders !== 1 ? 's' : ''}
//               </span>
//             </>
//           )}
//           <button
//             onClick={() => { fetchTodayStats(); fetchStockAlerts(); }}
//             className="text-gray-300 hover:text-indigo-400 transition-colors ml-0.5"
//             title="Refresh"
//           >
//             <TbRefresh size={12} />
//           </button>
//         </div>

//         {/* Dark Mode Toggle */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//           title="Toggle theme"
//         >
//           {darkMode
//             ? <MdOutlineLightMode className="text-[18px]" />
//             : <MdOutlineDarkMode className="text-[18px]" />
//           }
//         </button>

//         {/* Settings */}
//         <Link to="/settings/general">
//           <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all" title="Settings">
//             <IoSettingsOutline className="text-[18px]" />
//           </button>
//         </Link>

//         {/* ── Notification Bell ── */}
//         <button
//           onClick={(e) => setAnchorNotif(e.currentTarget)}
//           className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all relative"
//           title="Notifications"
//         >
//           <FaRegBell className="text-[17px]" />
//           {unreadCount > 0 && (
//             <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
//               {unreadCount}
//             </span>
//           )}
//         </button>

//         {/* ── Notification Dropdown — REAL DATA ── */}
//         <Menu
//           anchorEl={anchorNotif}
//           open={openNotif}
//           onClose={() => setAnchorNotif(null)}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//           slotProps={{
//             paper: {
//               elevation: 0,
//               sx: {
//                 mt: 1.5, width: 320, borderRadius: '16px', overflow: 'hidden',
//                 border: '1px solid #f0f0f0',
//                 filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.10))',
//               }
//             }
//           }}
//         >
//           {/* Header */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//             <div>
//               <h3 className="text-[14px] font-semibold text-gray-800">Notifications</h3>
//               <p className="text-[11px] text-gray-400">
//                 {notifLoading ? 'Loading…' : `${unreadCount} unread · ${notifications.length} total`}
//               </p>
//             </div>
//             {unreadCount > 0 && (
//               <button
//                 onClick={markAllRead}
//                 className="text-[11px] text-indigo-500 font-medium hover:text-indigo-700"
//               >
//                 Mark all read
//               </button>
//             )}
//           </div>

//           {/* Notif List */}
//           <div className="max-h-[300px] overflow-y-auto">
//             {notifLoading ? (
//               /* Skeleton */
//               Array(3).fill(0).map((_, i) => (
//                 <div key={i} className="flex items-start gap-3 px-4 py-3 border-b border-gray-50">
//                   <div className="w-7 h-7 rounded-lg bg-gray-100 flex-shrink-0 animate-pulse" />
//                   <div className="flex-1 space-y-1.5">
//                     <div className="h-3 bg-gray-100 rounded animate-pulse w-3/4" />
//                     <div className="h-2.5 bg-gray-100 rounded animate-pulse w-full" />
//                     <div className="h-2 bg-gray-100 rounded animate-pulse w-1/3" />
//                   </div>
//                 </div>
//               ))
//             ) : notifications.length === 0 ? (
//               <div className="py-10 text-center text-gray-400">
//                 <FaRegBell className="text-[28px] mx-auto mb-2 opacity-30" />
//                 <p className="text-[13px]">No notifications yet</p>
//               </div>
//             ) : (
//               notifications.map(n => (
//                 <MenuItem
//                   key={n.id}
//                   onClick={() => setAnchorNotif(null)}
//                   sx={{
//                     px: 2, py: 1.5,
//                     alignItems: 'flex-start',
//                     gap: 1.5,
//                     background: n.unread ? '#fafbff' : 'white',
//                     '&:hover': { background: '#f5f5ff' },
//                     borderBottom: '1px solid #f9f9f9',
//                   }}
//                 >
//                   <NotifIcon type={n.icon} color={n.color} />
//                   <div className="flex-1 min-w-0">
//                     <p className="text-[12.5px] font-semibold text-gray-800 leading-tight">{n.title}</p>
//                     <p className="text-[11.5px] text-gray-500 mt-0.5 truncate">{n.desc}</p>
//                     <p className="text-[10px] text-gray-400 mt-0.5">{n.time}</p>
//                   </div>
//                   {n.unread && (
//                     <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5 bg-indigo-500" />
//                   )}
//                 </MenuItem>
//               ))
//             )}
//           </div>

//           <div className="px-4 py-2.5 border-t border-gray-100 text-center">
//             <button
//               onClick={() => { setAnchorNotif(null); fetchTodayStats(); fetchStockAlerts(); }}
//               className="text-[12px] text-indigo-500 font-medium hover:text-indigo-700 flex items-center gap-1 mx-auto"
//             >
//               <TbRefresh size={12} /> Refresh notifications
//             </button>
//           </div>
//         </Menu>

//         {/* Divider */}
//         <div className="w-px h-7 bg-gray-200 mx-1" />

//         {/* ── Profile — REAL DATA from context ── */}
//         {context?.isLogin === true ? (
//           <div className="relative">
//             <button
//               onClick={(e) => setAnchorMyAcc(e.currentTarget)}
//               className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
//             >
//               <div className="relative">
//                 <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-100">
//                   {assets?.profileImg
//                     ? <img src={assets.profileImg} alt="" className="w-full h-full object-cover" />
//                     : (
//                       <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-[13px]">
//                         {adminName.charAt(0).toUpperCase()}
//                       </div>
//                     )
//                   }
//                 </div>
//                 <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border border-white" />
//               </div>
//               <div className="hidden sm:block text-left">
//                 <p className="text-[12px] font-semibold text-gray-800 leading-tight">{adminName}</p>
//                 <div className="flex items-center gap-1">
//                   <BiSolidCrown className="text-[9px] text-amber-400" />
//                   <span className="text-[10px] text-indigo-500 font-medium">Admin</span>
//                 </div>
//               </div>
//               <svg className="hidden sm:block w-3 h-3 text-gray-400 ml-0.5 group-hover:text-gray-600" fill="none" viewBox="0 0 12 12">
//                 <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>

//             <Menu
//               anchorEl={anchorMyAcc}
//               open={openMyAcc}
//               onClose={() => setAnchorMyAcc(null)}
//               onClick={() => setAnchorMyAcc(null)}
//               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//               slotProps={{
//                 paper: {
//                   elevation: 0,
//                   sx: {
//                     mt: 1.5, width: 240, borderRadius: '16px', overflow: 'hidden',
//                     border: '1px solid #f0f0f0',
//                     filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.10))',
//                   }
//                 }
//               }}
//             >
//               {/* Profile Card — REAL name/email */}
//               <div className="px-4 pt-4 pb-3 border-b border-gray-100"
//                 style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)' }}>
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-indigo-200">
//                       {assets?.profileImg
//                         ? <img src={assets.profileImg} alt="" className="w-full h-full object-cover" />
//                         : (
//                           <div className="w-full h-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-[16px]">
//                             {adminName.charAt(0).toUpperCase()}
//                           </div>
//                         )
//                       }
//                     </div>
//                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-[14px] font-semibold text-gray-800 leading-tight">{adminName}</h3>
//                     {adminEmail && (
//                       <p className="text-[11px] text-gray-500 mt-0.5 truncate max-w-[140px]">{adminEmail}</p>
//                     )}
//                     <div className="flex items-center gap-1 mt-1">
//                       <BiSolidCrown className="text-[10px] text-amber-400" />
//                       <span className="text-[10px] font-bold text-indigo-600 tracking-wide uppercase">Admin</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Today's quick stats in dropdown */}
//               {!todayStats.loading && (
//                 <div className="mx-3 my-2 grid grid-cols-2 gap-2">
//                   <div className="bg-indigo-50 rounded-xl p-2.5 text-center">
//                     <p className="text-[14px] font-extrabold text-indigo-600">
//                       {todayStats.orders}
//                     </p>
//                     <p className="text-[10px] text-indigo-400 font-medium">Today's Orders</p>
//                   </div>
//                   <div className="bg-emerald-50 rounded-xl p-2.5 text-center">
//                     <p className="text-[13px] font-extrabold text-emerald-600 truncate">
//                       {currency}{todayStats.revenue.toLocaleString('en-US')}
//                     </p>
//                     <p className="text-[10px] text-emerald-400 font-medium">Revenue</p>
//                   </div>
//                 </div>
//               )}

//               {/* Menu Items */}
//               <MenuItem sx={{ px: 2, py: 1.5, gap: 1.5, '&:hover': { background: '#f5f5ff' } }}>
//                 <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
//                   <FaRegUser className="text-indigo-500 text-[13px]" />
//                 </div>
//                 <div>
//                   <p className="text-[13px] font-medium text-gray-700">My Account</p>
//                   <p className="text-[11px] text-gray-400">Manage profile</p>
//                 </div>
//               </MenuItem>

//               <MenuItem sx={{ px: 2, py: 1.5, gap: 1.5, '&:hover': { background: '#f5f5ff' } }}>
//                 <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
//                   <IoSettingsOutline className="text-purple-500 text-[13px]" />
//                 </div>
//                 <div>
//                   <p className="text-[13px] font-medium text-gray-700">Settings</p>
//                   <p className="text-[11px] text-gray-400">Preferences & security</p>
//                 </div>
//               </MenuItem>

//               <Divider sx={{ mx: 2, borderColor: '#f0f0f0' }} />

//               <MenuItem
//                 onClick={() => context?.setIsLogin && context.setIsLogin(false)}
//                 sx={{ px: 2, py: 1.5, gap: 1.5, '&:hover': { background: '#fff5f5' } }}
//               >
//                 <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
//                   <IoMdLogOut className="text-red-400 text-[15px]" />
//                 </div>
//                 <p className="text-[13px] font-medium text-red-500">Sign Out</p>
//               </MenuItem>
//             </Menu>
//           </div>
//         ) : (
//           <Link to='/login'>
//             <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-white transition-all hover:opacity-90"
//               style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)' }}>
//               <BiSolidCrown className="text-yellow-300 text-[12px]" />
//               Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header



import React, { useContext, useState, useEffect, useCallback } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { BiSolidCrown } from "react-icons/bi";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbChartBar, TbTrendingUp, TbTrendingDown, TbPackage, TbAlertTriangle, TbCircleCheck, TbShoppingCart, TbRefresh } from "react-icons/tb";
import { assets } from '../../assets/assets';
import { MyContext } from '../../App';
import { backendUrl, currency } from '../../App';
import { useTheme } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

/* ════════════════════════════════════════════
   HEADER COMPONENT — WITH WORKING DARK MODE
════════════════════════════════════════════ */
const Header = () => {
  const context = useContext(MyContext);
  const token = context?.token;

  // ✅ Use shared ThemeContext — synced across whole app
  const { isDark: darkMode, toggleTheme: toggleDark } = useTheme();

  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const [anchorNotif, setAnchorNotif] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    // ThemeContext already handles html.dark class — nothing needed here
  }, [])

  /* ── Real today's stats ── */
  const [todayStats, setTodayStats] = useState({ revenue: 0, orders: 0, change: null, loading: true });

  /* ── Real notifications ── */
  const [notifications, setNotifications] = useState([]);
  const [notifLoading, setNotifLoading] = useState(true);

  const openMyAcc = Boolean(anchorMyAcc);
  const openNotif = Boolean(anchorNotif);

  /* ── Fetch today stats ── */
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
      const recentOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
      recentOrders.forEach(o => {
        const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
        const orderAmt = amt(o);
        const ts = o.date ? new Date(o.date) : null;
        const minsAgo = ts ? Math.floor((Date.now() - ts.getTime()) / 60000) : null;
        const timeStr = minsAgo === null ? '' : minsAgo < 1 ? 'just now' : minsAgo < 60 ? `${minsAgo}m ago` : minsAgo < 1440 ? `${Math.floor(minsAgo / 60)}h ago` : `${Math.floor(minsAgo / 1440)}d ago`;
        if (o.status === 'Delivered') {
          notifs.push({ id: `del-${o._id}`, title: 'Order delivered', desc: `#${(o._id || '').slice(-6).toUpperCase()} delivered to ${name}`, time: timeStr, unread: minsAgo !== null && minsAgo < 60, color: '#10b981', icon: 'delivered' });
        } else if (o.status === 'Shipped') {
          notifs.push({ id: `ship-${o._id}`, title: 'Order shipped', desc: `#${(o._id || '').slice(-6).toUpperCase()} shipped to ${name}`, time: timeStr, unread: minsAgo !== null && minsAgo < 120, color: '#6366f1', icon: 'shipped' });
        } else {
          notifs.push({ id: `ord-${o._id}`, title: 'New order received', desc: `#${(o._id || '').slice(-6).toUpperCase()} — ${currency}${orderAmt.toLocaleString('en-US')} from ${name}`, time: timeStr, unread: minsAgo !== null && minsAgo < 30, color: '#6366f1', icon: 'order' });
        }
      });
      setNotifications(notifs);
      setNotifLoading(false);
    } catch (e) {
      setTodayStats(s => ({ ...s, loading: false }));
      setNotifLoading(false);
    }
  }, [token]);

  /* ── Fetch stock alerts ── */
  const fetchStockAlerts = useCallback(async () => {
    if (!token) return;
    try {
      const res = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
      if (!res.data.success) return;
      const products = res.data.products || [];
      const getStock = p => Array.isArray(p.sizes) ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0) : Number(p.stock) || 0;
      const lowStock = products.filter(p => getStock(p) <= 5).sort((a, b) => getStock(a) - getStock(b)).slice(0, 3);
      const stockNotifs = lowStock.map(p => {
        const stock = getStock(p);
        return { id: `stock-${p._id}`, title: stock === 0 ? 'Out of stock' : 'Low stock alert', desc: `${p.name?.slice(0, 35) || 'Product'}${p.name?.length > 35 ? '…' : ''} — ${stock === 0 ? 'no stock' : `${stock} left`}`, time: 'Stock alert', unread: stock === 0, color: stock === 0 ? '#ef4444' : '#f59e0b', icon: 'stock' };
      });
      setNotifications(prev => [...stockNotifs, ...prev].filter((n, i, arr) => arr.findIndex(x => x.id === n.id) === i).slice(0, 6));
    } catch (_) { }
  }, [token]);

  useEffect(() => { fetchTodayStats(); fetchStockAlerts(); }, [fetchTodayStats, fetchStockAlerts]);

  const unreadCount = notifications.filter(n => n.unread).length;
  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread: false })));

  const NotifIcon = ({ type, color }) => {
    const iconMap = { order: <TbShoppingCart size={13} />, shipped: <TbPackage size={13} />, delivered: <TbCircleCheck size={13} />, stock: <TbAlertTriangle size={13} /> };
    return (
      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}18`, color }}>
        {iconMap[type] || <TbShoppingCart size={13} />}
      </div>
    );
  };

  const adminName = context?.adminName || context?.name || 'Admin User';
  const adminEmail = context?.adminEmail || context?.email || 'admin@llleather.com';

  /* ── Dark mode aware styles ── */
  const dm = {
    header: darkMode ? 'bg-[#1A1D2E] border-[#2D3048]' : 'bg-white border-gray-100',
    text: darkMode ? 'text-gray-200' : 'text-gray-700',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-400',
    iconBtn: darkMode ? 'text-gray-400 hover:bg-slate-700 hover:text-indigo-400' : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600',
    searchWrap: (focused) => darkMode
      ? focused ? 'border-indigo-500 bg-slate-700/80 shadow-sm' : 'border-slate-600 bg-slate-700/50'
      : focused ? 'border-indigo-400 shadow-sm bg-indigo-50/30' : 'border-gray-200 bg-gray-50',
    searchInput: darkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-700 placeholder-gray-400',
    statsPill: darkMode ? 'border-slate-600 bg-slate-700/50' : 'border-gray-100 bg-gray-50',
    statsText: darkMode ? 'text-gray-400' : 'text-gray-500',
    divider: darkMode ? 'bg-slate-600' : 'bg-gray-200',
    notifBadge: darkMode ? 'border-[#1A1D2E]' : 'border-white',
  }

  return (
    <header
      className={`fixed top-0 right-0 z-40 flex items-center justify-between gap-4 px-5 py-0 border-b transition-all duration-300 ${dm.header}`}
      style={{
        left: context?.isSidebarOpen ? '260px' : '0px',
        height: '64px',
        boxShadow: darkMode
          ? '0 1px 0 rgba(255,255,255,0.04)'
          : '0 1px 16px rgba(0,0,0,0.06)',
      }}
    >
      {/* ══ LEFT ══ */}
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button
          onClick={() => context?.setIsSidebarOpen(!context?.isSidebarOpen)}
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${dm.iconBtn}`}
        >
          {context?.isSidebarOpen
            ? <AiOutlineMenuFold className="text-[20px]" />
            : <AiOutlineMenuUnfold className="text-[20px]" />
          }
        </button>

        {/* Breadcrumb */}
        <div className="hidden sm:flex items-center gap-2">
          <span className={`text-[13px] ${dm.textMuted}`}>Admin</span>
          <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>/</span>
          <span className={`text-[13px] font-semibold ${dm.text}`}>Dashboard</span>
        </div>

        {/* Search */}
        <div
          className={`hidden md:flex items-center gap-2 ml-2 px-3 py-2 rounded-xl border transition-all duration-200 ${dm.searchWrap(searchFocused)}`}
          style={{ width: searchFocused ? '260px' : '200px' }}
        >
          <HiOutlineSearch className={`text-[16px] flex-shrink-0 ${searchFocused ? 'text-indigo-500' : darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={`bg-transparent outline-none text-[13px] w-full ${dm.searchInput}`}
          />
          {searchVal && (
            <button onClick={() => setSearchVal('')} className={`text-[11px] ${dm.textMuted} hover:text-gray-600`}>✕</button>
          )}
        </div>
      </div>

      {/* ══ RIGHT ══ */}
      <div className="flex items-center gap-1.5">

        {/* Today Stats Pill */}
        <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border mr-2 ${dm.statsPill}`}>
          <TbChartBar className="text-indigo-400 text-[14px]" />
          <span className={`text-[11px] font-medium ${dm.statsText}`}>Today:</span>
          {todayStats.loading ? (
            <span className={`text-[12px] font-bold ${dm.textMuted}`}>…</span>
          ) : (
            <>
              <span className="text-[12px] font-bold text-indigo-500">
                {currency}{todayStats.revenue.toLocaleString('en-US')}
              </span>
              {todayStats.change !== null && (
                <span className={`text-[10px] font-semibold flex items-center gap-0.5 ${todayStats.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                  {todayStats.change >= 0 ? <TbTrendingUp size={11} /> : <TbTrendingDown size={11} />}
                  {todayStats.change >= 0 ? '+' : ''}{todayStats.change}%
                </span>
              )}
              <span className={`text-[10px] hidden xl:inline ${dm.textMuted}`}>
                · {todayStats.orders} order{todayStats.orders !== 1 ? 's' : ''}
              </span>
            </>
          )}
          <button onClick={() => { fetchTodayStats(); fetchStockAlerts(); }} className={`${dm.textMuted} hover:text-indigo-400 transition-colors ml-0.5`} title="Refresh">
            <TbRefresh size={12} />
          </button>
        </div>

        {/* ══ DARK / LIGHT MODE TOGGLE ══ */}
        <button
          onClick={toggleDark}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className={`
            relative w-9 h-9 rounded-xl flex items-center justify-center
            border transition-all duration-200 overflow-hidden
            ${darkMode
              ? 'bg-slate-700 border-slate-600 text-amber-400 hover:bg-slate-600 hover:border-slate-500'
              : 'bg-gray-100 border-gray-200 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
            }
          `}
        >
          {/* ☀️ Sun — visible in light mode */}
          <span className={`absolute transition-all duration-300 ${darkMode ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
            <MdOutlineLightMode className="text-[18px]" />
          </span>
          {/* 🌙 Moon — visible in dark mode */}
          <span className={`absolute transition-all duration-300 ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
            <MdOutlineDarkMode className="text-[18px]" />
          </span>
        </button>

        {/* Settings */}
        <Link to="/store-settings">
          <button className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${dm.iconBtn}`} title="Settings">
            <IoSettingsOutline className="text-[18px]" />
          </button>
        </Link>

        {/* Notifications Bell */}
        <button
          onClick={e => setAnchorNotif(e.currentTarget)}
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all relative ${dm.iconBtn}`}
          title="Notifications"
        >
          <FaRegBell className="text-[17px]" />
          {unreadCount > 0 && (
            <span className={`absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 ${dm.notifBadge}`}>
              {unreadCount}
            </span>
          )}
        </button>

        {/* Notification Dropdown */}
        <Menu
          anchorEl={anchorNotif}
          open={openNotif}
          onClose={() => setAnchorNotif(null)}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                mt: 1.5, width: 320, borderRadius: '16px', overflow: 'hidden',
                border: darkMode ? '1px solid #2D3048' : '1px solid #f0f0f0',
                background: darkMode ? '#1E2235' : '#fff',
                filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.12))',
              }
            }
          }}
        >
          {/* Notif header */}
          <div className={`flex items-center justify-between px-4 py-3 border-b ${darkMode ? 'border-[#2D3048]' : 'border-gray-100'}`}>
            <div>
              <h3 className={`text-[14px] font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Notifications</h3>
              <p className={`text-[11px] ${dm.textMuted}`}>
                {notifLoading ? 'Loading…' : `${unreadCount} unread · ${notifications.length} total`}
              </p>
            </div>
            {unreadCount > 0 && (
              <button onClick={markAllRead} className="text-[11px] text-indigo-500 font-medium hover:text-indigo-700">
                Mark all read
              </button>
            )}
          </div>

          {/* Notif list */}
          <div className="max-h-[300px] overflow-y-auto">
            {notifLoading ? (
              Array(3).fill(0).map((_, i) => (
                <div key={i} className={`flex items-start gap-3 px-4 py-3 border-b ${darkMode ? 'border-[#2D3048]' : 'border-gray-50'}`}>
                  <div className="w-7 h-7 rounded-lg bg-gray-700 flex-shrink-0 animate-pulse" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-gray-700 rounded animate-pulse w-3/4" />
                    <div className="h-2.5 bg-gray-700 rounded animate-pulse w-full" />
                    <div className="h-2 bg-gray-700 rounded animate-pulse w-1/3" />
                  </div>
                </div>
              ))
            ) : notifications.length === 0 ? (
              <div className="py-10 text-center text-gray-400">
                <FaRegBell className="text-[28px] mx-auto mb-2 opacity-30" />
                <p className="text-[13px]">No notifications yet</p>
              </div>
            ) : (
              notifications.map(n => (
                <MenuItem
                  key={n.id}
                  onClick={() => setAnchorNotif(null)}
                  sx={{
                    px: 2, py: 1.5, alignItems: 'flex-start', gap: 1.5,
                    background: darkMode
                      ? n.unread ? '#232640' : '#1E2235'
                      : n.unread ? '#fafbff' : 'white',
                    '&:hover': { background: darkMode ? '#2a2f52' : '#f5f5ff' },
                    borderBottom: darkMode ? '1px solid #2D3048' : '1px solid #f9f9f9',
                  }}
                >
                  <NotifIcon type={n.icon} color={n.color} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-[12.5px] font-semibold leading-tight ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{n.title}</p>
                    <p className={`text-[11.5px] mt-0.5 truncate ${dm.textMuted}`}>{n.desc}</p>
                    <p className={`text-[10px] mt-0.5 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>{n.time}</p>
                  </div>
                  {n.unread && <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5 bg-indigo-500" />}
                </MenuItem>
              ))
            )}
          </div>

          <div className={`px-4 py-2.5 border-t text-center ${darkMode ? 'border-[#2D3048]' : 'border-gray-100'}`}>
            <button
              onClick={() => { setAnchorNotif(null); fetchTodayStats(); fetchStockAlerts(); }}
              className="text-[12px] text-indigo-500 font-medium hover:text-indigo-400 flex items-center gap-1 mx-auto"
            >
              <TbRefresh size={12} /> Refresh notifications
            </button>
          </div>
        </Menu>

        {/* Divider */}
        <div className={`w-px h-7 mx-1 ${dm.divider}`} />

        {/* ── Profile ── */}
        {context?.isLogin === true ? (
          <div className="relative">
            <button
              onClick={e => setAnchorMyAcc(e.currentTarget)}
              className={`flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl border transition-all group ${darkMode
                  ? 'border-transparent hover:bg-slate-700 hover:border-slate-600'
                  : 'border-transparent hover:bg-gray-50 hover:border-gray-200'
                }`}
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-200">
                  {assets?.profileImg
                    ? <img src={assets.profileImg} alt="" className="w-full h-full object-cover" />
                    : (
                      <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-[13px]">
                        {adminName.charAt(0).toUpperCase()}
                      </div>
                    )
                  }
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border border-white" />
              </div>
              <div className="hidden sm:block text-left">
                <p className={`text-[12px] font-semibold leading-tight ${dm.text}`}>{adminName}</p>
                <div className="flex items-center gap-1">
                  <BiSolidCrown className="text-[9px] text-amber-400" />
                  <span className="text-[10px] text-indigo-500 font-medium">Admin</span>
                </div>
              </div>
              <svg className={`hidden sm:block w-3 h-3 ml-0.5 ${dm.textMuted}`} fill="none" viewBox="0 0 12 12">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Profile Dropdown */}
            <Menu
              anchorEl={anchorMyAcc}
              open={openMyAcc}
              onClose={() => setAnchorMyAcc(null)}
              onClick={() => setAnchorMyAcc(null)}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    mt: 1.5, width: 240, borderRadius: '16px', overflow: 'hidden',
                    border: darkMode ? '1px solid #2D3048' : '1px solid #f0f0f0',
                    background: darkMode ? '#1E2235' : '#fff',
                    filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.12))',
                  }
                }
              }}
            >
              {/* Profile card */}
              <div
                className="px-4 pt-4 pb-3 border-b"
                style={{
                  borderColor: darkMode ? '#2D3048' : '#f0f0f0',
                  background: darkMode
                    ? 'linear-gradient(135deg, #232640 0%, #1a1d35 100%)'
                    : 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-indigo-200">
                      {assets?.profileImg
                        ? <img src={assets.profileImg} alt="" className="w-full h-full object-cover" />
                        : (
                          <div className="w-full h-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-[16px]">
                            {adminName.charAt(0).toUpperCase()}
                          </div>
                        )
                      }
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h3 className={`text-[14px] font-semibold leading-tight ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{adminName}</h3>
                    {adminEmail && (
                      <p className={`text-[11px] mt-0.5 truncate max-w-[140px] ${dm.textMuted}`}>{adminEmail}</p>
                    )}
                    <div className="flex items-center gap-1 mt-1">
                      <BiSolidCrown className="text-[10px] text-amber-400" />
                      <span className="text-[10px] font-bold text-indigo-500 tracking-wide uppercase">Admin</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick stats in dropdown */}
              {!todayStats.loading && (
                <div className="mx-3 my-2 grid grid-cols-2 gap-2">
                  <div className={`rounded-xl p-2.5 text-center ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'}`}>
                    <p className="text-[14px] font-extrabold text-indigo-500">{todayStats.orders}</p>
                    <p className={`text-[10px] font-medium ${darkMode ? 'text-indigo-400' : 'text-indigo-400'}`}>Today's Orders</p>
                  </div>
                  <div className={`rounded-xl p-2.5 text-center ${darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'}`}>
                    <p className="text-[13px] font-extrabold text-emerald-500 truncate">{currency}{todayStats.revenue.toLocaleString('en-US')}</p>
                    <p className={`text-[10px] font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-400'}`}>Revenue</p>
                  </div>
                </div>
              )}

              {/* Menu items */}
              <MenuItem sx={{ px: 2, py: 1.5, gap: 1.5, background: darkMode ? '#1E2235' : 'white', '&:hover': { background: darkMode ? '#2a2f52' : '#f5f5ff' } }}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-indigo-900/40' : 'bg-indigo-50'}`}>
                  <FaRegUser className="text-indigo-500 text-[13px]" />
                </div>
                <div>
                  <p className={`text-[13px] font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>My Account</p>
                  <p className={`text-[11px] ${dm.textMuted}`}>Manage profile</p>
                </div>
              </MenuItem>

              <MenuItem sx={{ px: 2, py: 1.5, gap: 1.5, background: darkMode ? '#1E2235' : 'white', '&:hover': { background: darkMode ? '#2a2f52' : '#f5f5ff' } }}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-purple-900/40' : 'bg-purple-50'}`}>
                  <IoSettingsOutline className="text-purple-500 text-[13px]" />
                </div>
                <div>
                  <p className={`text-[13px] font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Settings</p>
                  <p className={`text-[11px] ${dm.textMuted}`}>Preferences & security</p>
                </div>
              </MenuItem>

              <Divider sx={{ mx: 2, borderColor: darkMode ? '#2D3048' : '#f0f0f0' }} />

              {/* Dark mode toggle inside profile menu */}
              <MenuItem
                onClick={e => { e.stopPropagation(); toggleDark(); }}
                sx={{ px: 2, py: 1.5, gap: 1.5, background: darkMode ? '#1E2235' : 'white', '&:hover': { background: darkMode ? '#2a2f52' : '#f5f5ff' } }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-amber-900/30' : 'bg-amber-50'}`}>
                  {darkMode
                    ? <MdOutlineLightMode className="text-amber-400 text-[15px]" />
                    : <MdOutlineDarkMode className="text-amber-500 text-[15px]" />
                  }
                </div>
                <div className="flex-1">
                  <p className={`text-[13px] font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </p>
                  <p className={`text-[11px] ${dm.textMuted}`}>
                    {darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
                  </p>
                </div>
                {/* Toggle pill indicator */}
                <div className={`relative w-9 h-5 rounded-full transition-colors duration-300 flex-shrink-0 ${darkMode ? 'bg-indigo-600' : 'bg-gray-200'}`}>
                  <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${darkMode ? 'left-[18px]' : 'left-0.5'}`} />
                </div>
              </MenuItem>

              <Divider sx={{ mx: 2, borderColor: darkMode ? '#2D3048' : '#f0f0f0' }} />

              <MenuItem
                onClick={() => context?.setIsLogin && context.setIsLogin(false)}
                sx={{ px: 2, py: 1.5, gap: 1.5, background: darkMode ? '#1E2235' : 'white', '&:hover': { background: darkMode ? '#3a1f1f' : '#fff5f5' } }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-red-900/30' : 'bg-red-50'}`}>
                  <IoMdLogOut className="text-red-400 text-[15px]" />
                </div>
                <p className="text-[13px] font-medium text-red-400">Sign Out</p>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to='/login'>
            <button
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #8C86FF)', boxShadow: '0 3px 12px rgba(108,99,255,0.35)' }}
            >
              <BiSolidCrown className="text-yellow-300 text-[12px]" />
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;