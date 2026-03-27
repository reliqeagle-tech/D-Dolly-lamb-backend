// import Button from '@mui/material/Button'
// import { FaPlus } from "react-icons/fa6";
// import React, { useContext, useState } from 'react'
// import Pagination from '@mui/material/Pagination';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from "react-icons/ai";
// import { FaRegEye } from "react-icons/fa";
// import { GoTrash } from "react-icons/go";
// import { MdOutlineMarkEmailRead } from "react-icons/md";
// import { MdLocalPhone } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import ProgressBar from '../../Components/ProgressBar/ProgressBar';
// import { assets } from '../../assets/assets';
// import SearchBox from '../../Components/SearchBox/SearchBox';
// import { MyContext } from '../../App';



// const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
// const columns = [
//   { id: 'userImg', label: 'User Image', minWidth: 80 },
//   { id: 'userName', label: 'User Name', minWidth: 130 },
//   {
//     id: 'userEmail',
//     label: 'User Email',
//     minWidth: 150,
//   },
//   {
//     id: 'userPh',
//     label: 'User Phone No',
//     minWidth: 200,
//   },
//   {
//     id: 'createdDate',
//     label: 'Created',
//     minWidth: 200,
//   },
// ];

// const Users = () => {

//    const [page, setPage] = useState(0);
//    const [rowsPerPage, setRowsPerPage] = useState(10);

//    const context = useContext(MyContext)

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <>

//       <div className='my-3 card shadow-md bg-white sm:rounded-lg'>

//               <div className='flex items-center w-full py-4 p-5 justify-between'>
//                 <div className='col w-[50%]'>
//                   <h2 className='text-lg font-semibold text-gray-700'>Users List <span className='text-gray-500 font-medium'>(Material UI table)</span></h2>
//                 </div>

//                 <div className='col lg:w-[40%] ml-auto'>
//                   <SearchBox />
//                 </div>

//               </div>

//               <TableContainer sx={{ maxHeight: 440 }}>
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>

//                   <TableRow>
//                     <TableCell>
//                         {/* <Checkbox {...label} size="small" /> */}
//                         &nbsp;
//                         </TableCell>
//                     {columns.map((column) => (
//                       <TableCell
//                         key={column.id}
//                         align={column.align}
//                         style={{ minWidth: column.minWidth }}
//                       >
//                         {column.label}
//                       </TableCell>
//                     ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow >
//                       <TableCell width={100}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={150}>
//                         <div className='flex items-center gap-4 w-[70px]'>
//                           <div className='img h-[45px] w-[45px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.profileImg} alt="" className='h-full w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>

//                         </div>
//                       </TableCell>
//                       <TableCell width={200}>
//                         Vikash kumar
//                       </TableCell>
//                       <TableCell width={250}>
//                         <span className='flex items-center gap-2'><MdOutlineMarkEmailRead className='text-xl' />vikash@gmail.com</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><MdLocalPhone className='text-lg' />+91-9874636846</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><SlCalender className='text-lg' /> 01-02-2026</span>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell width={100}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={150}>
//                         <div className='flex items-center gap-4 w-[70px]'>
//                           <div className='img h-[45px] w-[45px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.profileImg} alt="" className='h-full w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>

//                         </div>
//                       </TableCell>
//                       <TableCell width={200}>
//                         Vikash kumar
//                       </TableCell>
//                       <TableCell width={250}>
//                         <span className='flex items-center gap-2'><MdOutlineMarkEmailRead className='text-xl' />vikash@gmail.com</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><MdLocalPhone className='text-lg' />+91-9874636846</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><SlCalender className='text-lg' /> 01-02-2026</span>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell width={100}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={150}>
//                         <div className='flex items-center gap-4 w-[70px]'>
//                           <div className='img h-[45px] w-[45px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.profileImg} alt="" className='h-full w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>

//                         </div>
//                       </TableCell>
//                       <TableCell width={200}>
//                         Vikash kumar
//                       </TableCell>
//                       <TableCell width={250}>
//                         <span className='flex items-center gap-2'><MdOutlineMarkEmailRead className='text-xl' />vikash@gmail.com</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><MdLocalPhone className='text-lg' />+91-9874636846</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><SlCalender className='text-lg' /> 01-02-2026</span>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell width={100}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={150}>
//                         <div className='flex items-center gap-4 w-[70px]'>
//                           <div className='img h-[45px] w-[45px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.profileImg} alt="" className='h-full w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>

//                         </div>
//                       </TableCell>
//                       <TableCell width={200}>
//                         Vikash kumar
//                       </TableCell>
//                       <TableCell width={250}>
//                         <span className='flex items-center gap-2'><MdOutlineMarkEmailRead className='text-xl' />vikash@gmail.com</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><MdLocalPhone className='text-lg' />+91-9874636846</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><SlCalender className='text-lg' /> 01-02-2026</span>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell width={100}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={150}>
//                         <div className='flex items-center gap-4 w-[70px]'>
//                           <div className='img h-[45px] w-[45px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.profileImg} alt="" className='h-full w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>

//                         </div>
//                       </TableCell>
//                       <TableCell width={200}>
//                         Vikash kumar
//                       </TableCell>
//                       <TableCell width={250}>
//                         <span className='flex items-center gap-2'><MdOutlineMarkEmailRead className='text-xl' />vikash@gmail.com</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><MdLocalPhone className='text-lg' />+91-9874636846</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><SlCalender className='text-lg' /> 01-02-2026</span>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell width={100}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={150}>
//                         <div className='flex items-center gap-4 w-[70px]'>
//                           <div className='img h-[45px] w-[45px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.profileImg} alt="" className='h-full w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>

//                         </div>
//                       </TableCell>
//                       <TableCell width={200}>
//                         Vikash kumar
//                       </TableCell>
//                       <TableCell width={250}>
//                         <span className='flex items-center gap-2'><MdOutlineMarkEmailRead className='text-xl' />vikash@gmail.com</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><MdLocalPhone className='text-lg' />+91-9874636846</span>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <span className='flex items-center gap-2'><SlCalender className='text-lg' /> 01-02-2026</span>
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 rowsPerPageOptions={[10, 25, 100]}
//                 component="div"
//                 count={10}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//             </div>
//     </>
//   )
// }

// export default Users



// import React, { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../../App';
// import {
//   TbSearch, TbX, TbDownload, TbUsers,
//   TbChevronLeft, TbChevronRight,
// } from 'react-icons/tb';

// /* ─────────────────────────────────────────────
//    UTILITY COMPONENTS — defined at top level
//    (NOT nested inside Users to avoid re-mount
//    on every render)
// ───────────────────────────────────────────── */
// const SectionCard = ({ title, subtitle, children, toolbar, className = '' }) => (
//   <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
//     <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
//       <div>
//         <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
//         {subtitle && <p className="text-[12px] text-gray-400 mt-0.5">{subtitle}</p>}
//       </div>
//       {toolbar}
//     </div>
//     {children}
//   </div>
// );

// const SearchInput = ({ value, onChange, placeholder = 'Search…', className = '' }) => (
//   <div className={`relative ${className}`}>
//     <TbSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//     <input
//       value={value}
//       onChange={e => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="pl-9 pr-8 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all w-full"
//     />
//     {value && (
//       <button onClick={() => onChange('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//         <TbX size={13} />
//       </button>
//     )}
//   </div>
// );

// const Btn = ({ children, onClick, variant = 'ghost', size = 'sm', className = '', disabled = false, title }) => {
//   const base = 'inline-flex items-center gap-1.5 font-semibold rounded-xl transition-all cursor-pointer border select-none';
//   const sizes = { xs: 'px-2 py-1 text-[11px]', sm: 'px-3 py-2 text-[12.5px]', md: 'px-5 py-2.5 text-[13.5px]' };
//   const variants = {
//     primary: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 shadow-sm',
//     ghost: 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50',
//     success: 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700',
//     danger: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100',
//     amber: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
//     outline: 'bg-transparent text-indigo-600 border-indigo-300 hover:bg-indigo-50',
//   };
//   return (
//     <button onClick={onClick} disabled={disabled} title={title}
//       className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}>
//       {children}
//     </button>
//   );
// };

// /* ═══════════════════════════════════════════
//    USERS PAGE — derived from real order data
// ═══════════════════════════════════════════ */
// const Users = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [sortBy, setSortBy] = useState('spent');
//   const [sortDir, setSortDir] = useState('desc');
//   const [page, setPage] = useState(1);
//   const PER_PAGE = 10;

//   /* ── Fetch all orders to build user profiles ── */
//   useEffect(() => {
//     if (!token) return;
//     setLoading(true);
//     axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
//       .then(res => {
//         if (res.data.success) setOrders(res.data.orders || []);
//         else toast.error(res.data.message);
//       })
//       .catch(e => toast.error(e?.message || 'Failed to load users'))
//       .finally(() => setLoading(false));
//   }, [token]);

//   /* ── Build one user row per unique email from real orders ── */
//   const users = useMemo(() => {
//     const map = {};
//     orders.forEach(o => {
//       const email = (o.address?.email || '').toLowerCase().trim();
//       if (!email) return;
//       if (!map[email]) {
//         map[email] = {
//           email,
//           name: `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || email,
//           phone: o.address?.phone || '—',
//           city: o.address?.city || '—',
//           country: o.address?.country || '—',
//           orders: 0,
//           spent: 0,
//           paid: 0,
//           lastOrder: null,
//           firstOrder: null,
//         };
//       }
//       const u = map[email];
//       const amt = Number(o.finalAmount) || Number(o.amount) || 0;
//       u.orders += 1;
//       u.spent += amt;
//       if (o.payment) u.paid += amt;
//       const ts = o.date ? new Date(o.date) : null;
//       if (ts) {
//         if (!u.lastOrder || ts > u.lastOrder) u.lastOrder = ts;
//         if (!u.firstOrder || ts < u.firstOrder) u.firstOrder = ts;
//       }
//     });
//     return Object.values(map);
//   }, [orders]);

//   /* ── Search + sort + paginate ── */
//   const filtered = useMemo(() => {
//     let r = [...users];
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       r = r.filter(u =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q) ||
//         u.phone.includes(q) ||
//         u.city.toLowerCase().includes(q)
//       );
//     }
//     r.sort((a, b) => {
//       let av, bv;
//       if (sortBy === 'spent') { av = a.spent; bv = b.spent; }
//       else if (sortBy === 'orders') { av = a.orders; bv = b.orders; }
//       else if (sortBy === 'recent') {
//         av = a.lastOrder ? a.lastOrder.getTime() : 0;
//         bv = b.lastOrder ? b.lastOrder.getTime() : 0;
//       }
//       else if (sortBy === 'joined') {
//         av = a.firstOrder ? a.firstOrder.getTime() : 0;
//         bv = b.firstOrder ? b.firstOrder.getTime() : 0;
//       }
//       else /* name */ {
//         return sortDir === 'asc'
//           ? a.name.localeCompare(b.name)
//           : b.name.localeCompare(a.name);
//       }
//       return sortDir === 'asc' ? av - bv : bv - av;
//     });
//     return r;
//   }, [users, search, sortBy, sortDir]);

//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//   const handleSort = (col) => {
//     if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
//     else { setSortBy(col); setSortDir('desc'); }
//     setPage(1);
//   };

//   const fmtDate = (d) => d
//     ? d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
//     : '—';

//   const fmtRel = (d) => {
//     if (!d) return '—';
//     const days = Math.floor((Date.now() - d.getTime()) / 86400000);
//     if (days === 0) return 'Today';
//     if (days === 1) return 'Yesterday';
//     if (days < 30) return `${days}d ago`;
//     if (days < 365) return `${Math.floor(days / 30)}mo ago`;
//     return `${Math.floor(days / 365)}y ago`;
//   };

//   const initials = (name) =>
//     name.split(' ').map(n => n[0] || '').join('').slice(0, 2).toUpperCase() || '?';

//   const AVATAR_COLORS = [
//     'bg-indigo-100 text-indigo-700', 'bg-pink-100 text-pink-700',
//     'bg-amber-100 text-amber-700', 'bg-emerald-100 text-emerald-700',
//     'bg-violet-100 text-violet-700', 'bg-cyan-100 text-cyan-700',
//   ];

//   /* SortTh stays inside Users — it needs handleSort, sortBy, sortDir from closure */
//   const SortTh = ({ col, label }) => (
//     <th
//       onClick={() => handleSort(col)}
//       className="px-5 py-3.5 text-left font-semibold text-gray-500 whitespace-nowrap cursor-pointer hover:text-gray-800 select-none group"
//     >
//       <span className="flex items-center gap-1">
//         {label}
//         <span className={`opacity-0 group-hover:opacity-60 transition-opacity ${sortBy === col ? '!opacity-100 text-indigo-600' : ''}`}>
//           {sortBy === col && sortDir === 'asc' ? '↑' : '↓'}
//         </span>
//       </span>
//     </th>
//   );

//   /* ── Export CSV ── */
//   const exportCSV = () => {
//     const rows = [['Name', 'Email', 'Phone', 'City', 'Country', 'Orders', 'Total Spent', 'Paid Amount', 'Last Order', 'First Order']];
//     filtered.forEach(u => rows.push([
//       u.name, u.email, u.phone, u.city, u.country,
//       u.orders, u.spent.toFixed(0), u.paid.toFixed(0),
//       fmtDate(u.lastOrder), fmtDate(u.firstOrder),
//     ]));
//     const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
//     const blob = new Blob([csv], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `customers_${new Date().toISOString().slice(0, 10)}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//     toast.success('Customers exported!');
//   };

//   /* ── Render ── */
//   return (
//     <SectionCard
//       title="Customers"
//       subtitle={loading ? 'Loading…' : `${filtered.length} unique customers from ${orders.length} orders`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           <SearchInput
//             value={search}
//             onChange={v => { setSearch(v); setPage(1); }}
//             placeholder="Search name, email, city…"
//             className="w-56"
//           />
//           <select
//             value={`${sortBy}-${sortDir}`}
//             onChange={e => {
//               const [s, d] = e.target.value.split('-');
//               setSortBy(s); setSortDir(d); setPage(1);
//             }}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none pr-7 "
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'right 8px center',
//             }}
//           >
//             <option value="spent-desc">Top Spenders</option>
//             <option value="orders-desc">Most Orders</option>
//             <option value="recent-desc">Most Recent</option>
//             <option value="joined-asc">Earliest Joined</option>
//             <option value="name-asc">Name A–Z</option>
//           </select>
//           <Btn variant="success" size="sm" onClick={exportCSV}>
//             <TbDownload size={14} /> Export CSV
//           </Btn>
//         </div>
//       }
//     >
//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               <SortTh col="name" label="Customer" />
//               <th className="px-5 py-3.5 text-left font-semibold text-gray-500">Contact</th>
//               <SortTh col="orders" label="Orders" />
//               <SortTh col="spent" label="Total Spent" />
//               <th className="px-5 py-3.5 text-left font-semibold text-gray-500">Paid</th>
//               <SortTh col="recent" label="Last Order" />
//               <SortTh col="joined" label="Customer Since" />
//             </tr>
//           </thead>
//           <tbody>
//             {/* Skeleton loading rows */}
//             {loading && Array(5).fill(0).map((_, i) => (
//               <tr key={i} className="border-b border-gray-50">
//                 {Array(7).fill(0).map((_, j) => (
//                   <td key={j} className="px-5 py-4">
//                     <div
//                       className="h-4 bg-gray-100 rounded animate-pulse"
//                       style={{ width: [120, 160, 60, 80, 70, 90, 100][j] }}
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}

//             {/* Empty state */}
//             {!loading && paginated.length === 0 && (
//               <tr>
//                 <td colSpan={7} className="text-center py-16 text-gray-400">
//                   <TbUsers size={32} className="mx-auto mb-2 opacity-30" />
//                   <p className="text-[14px]">
//                     {search ? 'No customers match your search' : 'No customer data yet'}
//                   </p>
//                   {search && (
//                     <button
//                       onClick={() => setSearch('')}
//                       className="mt-2 text-indigo-600 text-[12px] hover:underline"
//                     >
//                       Clear search
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             )}

//             {/* Data rows */}
//             {!loading && paginated.map((u, i) => (
//               <tr key={u.email} className="border-b border-gray-50 hover:bg-indigo-50/20 transition-colors">

//                 {/* Customer */}
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${AVATAR_COLORS[((page - 1) * PER_PAGE + i) % AVATAR_COLORS.length]}`}>
//                       {initials(u.name)}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{u.name}</p>
//                       <p className="text-[11.5px] text-gray-400">
//                         {u.city}{u.country && u.country !== u.city ? `, ${u.country}` : ''}
//                       </p>
//                     </div>
//                   </div>
//                 </td>

//                 {/* Contact */}
//                 <td className="px-5 py-4">
//                   <p className="text-gray-700 truncate max-w-[180px]">{u.email}</p>
//                   <p className="text-[11.5px] text-gray-400">{u.phone}</p>
//                 </td>

//                 {/* Orders */}
//                 <td className="px-5 py-4">
//                   <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-[12px] font-bold">
//                     {u.orders} order{u.orders !== 1 ? 's' : ''}
//                   </span>
//                 </td>

//                 {/* Total Spent */}
//                 <td className="px-5 py-4">
//                   <span className="font-extrabold text-gray-900">
//                     ${u.spent.toLocaleString('en-US')}
//                   </span>
//                 </td>

//                 {/* Paid */}
//                 <td className="px-5 py-4">
//                   <span className={`text-[12.5px] font-bold ${u.paid >= u.spent ? 'text-emerald-600' : u.paid > 0 ? 'text-amber-600' : 'text-red-500'}`}>
//                     ${u.paid.toLocaleString('en-US')}
//                   </span>
//                   {u.paid < u.spent && (
//                     <p className="text-[10.5px] text-red-400">
//                       ${(u.spent - u.paid).toLocaleString('en-US')} unpaid
//                     </p>
//                   )}
//                 </td>

//                 {/* Last Order */}
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
//                   <p className="text-[12.5px] font-semibold text-gray-700">{fmtRel(u.lastOrder)}</p>
//                   <p className="text-[11px] text-gray-400">{fmtDate(u.lastOrder)}</p>
//                 </td>

//                 {/* Customer Since */}
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
//                   <p className="text-[12.5px]">{fmtDate(u.firstOrder)}</p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {!loading && totalPages > 1 && (
//         <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
//           <p className="text-[12px] text-gray-400">
//             Showing{' '}
//             <strong>{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong>
//             {' '}of <strong>{filtered.length}</strong> customers
//           </p>
//           <div className="flex items-center gap-1.5">
//             <button
//               onClick={() => setPage(p => Math.max(1, p - 1))}
//               disabled={page === 1}
//               className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
//             >
//               <TbChevronLeft size={14} />
//             </button>

//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
//               .reduce((acc, p, i, arr) => {
//                 if (i > 0 && arr[i - 1] !== p - 1) acc.push('…');
//                 acc.push(p);
//                 return acc;
//               }, [])
//               .map((p, i) => p === '…'
//                 ? <span key={`e${i}`} className="text-gray-400 text-sm px-1">…</span>
//                 : <button
//                   key={p}
//                   onClick={() => setPage(p)}
//                   className={`w-8 h-8 flex items-center justify-center rounded-lg border text-[12.5px] font-semibold transition-colors
//                       ${page === p
//                       ? 'bg-gray-900 text-white border-gray-900'
//                       : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
//                 >
//                   {p}
//                 </button>
//               )
//             }

//             <button
//               onClick={() => setPage(p => Math.min(totalPages, p + 1))}
//               disabled={page === totalPages}
//               className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
//             >
//               <TbChevronRight size={14} />
//             </button>
//           </div>
//         </div>
//       )}
//     </SectionCard>
//   );
// };

// export default Users;




import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../../App';
import {
  TbSearch, TbX, TbDownload, TbUsers,
  TbChevronLeft, TbChevronRight, TbArrowUp, TbArrowDown,
  TbMail, TbPhone, TbMapPin, TbShoppingBag,
  TbCurrencyDollar, TbCalendar, TbClock,
} from 'react-icons/tb';

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — USERS / CUSTOMERS  |  Dark luxury gold theme
════════════════════════════════════════════════════════════════ */

const B = {
  bg: '#0d0804',
  surface: '#1a0f07',
  surface2: '#221408',
  surface3: '#2a1a09',
  border: 'rgba(201,168,76,0.18)',
  borderSoft: 'rgba(201,168,76,0.09)',
  borderMid: 'rgba(201,168,76,0.28)',
  gold: '#c9a84c',
  goldLight: '#e8c46a',
  goldDim: 'rgba(201,168,76,0.12)',
  goldDim2: 'rgba(201,168,76,0.06)',
  cream: '#f0d898',
  creamSoft: '#d4b87a',
  muted: '#8b7555',
  mutedSoft: '#5a4530',
  emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)', dot: '#34d399' },
  amber: { bg: 'rgba(251,191,36,0.11)', text: '#fcd34d', border: 'rgba(251,191,36,0.28)', dot: '#fbbf24' },
  red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)', dot: '#f87171' },
  blue: { bg: 'rgba(96,165,250,0.12)', text: '#93c5fd', border: 'rgba(96,165,250,0.28)', dot: '#60a5fa' },
  violet: { bg: 'rgba(167,139,250,0.12)', text: '#c4b5fd', border: 'rgba(167,139,250,0.28)', dot: '#a78bfa' },
  cyan: { bg: 'rgba(34,211,238,0.10)', text: '#67e8f9', border: 'rgba(34,211,238,0.25)', dot: '#22d3ee' },
};

/* 6 avatar accent palettes — distinct hues for dark bg */
const AVATAR_PALETTES = [
  { bg: 'rgba(201,168,76,0.18)', text: '#e8c46a' },   // gold
  { bg: 'rgba(96,165,250,0.14)', text: '#93c5fd' },   // blue
  { bg: 'rgba(52,211,153,0.12)', text: '#6ee7b7' },   // emerald
  { bg: 'rgba(244,114,182,0.14)', text: '#f9a8d4' },   // pink
  { bg: 'rgba(167,139,250,0.14)', text: '#c4b5fd' },   // violet
  { bg: 'rgba(34,211,238,0.12)', text: '#67e8f9' },   // cyan
];

/* ── Shared style shortcuts ── */
const card = (extra = {}) => ({
  background: B.surface, border: `1px solid ${B.border}`, borderRadius: 16, ...extra,
});

/* ─── Skeleton shimmer ─── */
const Skel = ({ w = '100%', h = 14, r = 6 }) => (
  <div style={{
    width: w, height: h, borderRadius: r,
    background: 'rgba(201,168,76,0.07)', animation: 'uPulse 1.6s ease-in-out infinite'
  }} />
);

/* ─── Dark-themed search input ─── */
const SearchInput = ({ value, onChange, placeholder = 'Search…' }) => (
  <div style={{ position: 'relative', width: 240 }}>
    <TbSearch size={14} style={{
      position: 'absolute', left: 11, top: '50%',
      transform: 'translateY(-50%)', color: B.muted, pointerEvents: 'none'
    }} />
    <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      style={{
        width: '100%', padding: '8px 32px 8px 34px', borderRadius: 10,
        background: B.surface2, color: B.cream, border: `1px solid ${B.border}`,
        fontSize: 13, outline: 'none', transition: 'border-color .15s', boxSizing: 'border-box'
      }}
      onFocus={e => e.target.style.borderColor = B.gold}
      onBlur={e => e.target.style.borderColor = B.border} />
    {value && (
      <button onClick={() => onChange('')}
        style={{
          position: 'absolute', right: 9, top: '50%', transform: 'translateY(-50%)',
          width: 16, height: 16, borderRadius: '50%', border: 'none',
          background: B.mutedSoft, color: B.muted, display: 'flex',
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
        }}>
        <TbX size={9} />
      </button>
    )}
  </div>
);

/* ─── Dark select ─── */
const DarkSelect = ({ value, onChange, options, minWidth = 160 }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    style={{
      padding: '8px 30px 8px 12px', borderRadius: 10, fontSize: 12.5,
      fontWeight: 600, background: B.surface2, color: B.cream,
      border: `1px solid ${B.border}`, outline: 'none', cursor: 'pointer',
      minWidth, appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238b7555' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center',
      transition: 'border-color .15s'
    }}
    onFocus={e => e.target.style.borderColor = B.gold}
    onBlur={e => e.target.style.borderColor = B.border}>
    {options.map(([v, l]) =>
      <option key={v} value={v} style={{ background: B.surface2, color: B.cream }}>{l}</option>)}
  </select>
);

/* ─── Gold primary button ─── */
const GoldBtn = ({ children, onClick }) => (
  <button onClick={onClick}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 16px', borderRadius: 10,
      background: `linear-gradient(135deg,${B.gold},${B.goldLight})`,
      color: B.bg, border: 'none', fontSize: 12.5, fontWeight: 700,
      cursor: 'pointer', boxShadow: `0 4px 14px ${B.gold}35`,
      transition: 'opacity .15s', whiteSpace: 'nowrap'
    }}
    onMouseEnter={e => e.currentTarget.style.opacity = '.88'}
    onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
    {children}
  </button>
);

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
const Users = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('spent');
  const [sortDir, setSortDir] = useState('desc');
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  /* ── Fetch orders → build user profiles ── */
  useEffect(() => {
    if (!token) return;
    setLoading(true);
    axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      .then(res => {
        if (res.data.success) setOrders(res.data.orders || []);
        else toast.error(res.data.message);
      })
      .catch(e => toast.error(e?.message || 'Failed to load users'))
      .finally(() => setLoading(false));
  }, [token]);

  /* ── Build one row per unique email ── */
  const users = useMemo(() => {
    const map = {};
    orders.forEach(o => {
      const email = (o.address?.email || '').toLowerCase().trim();
      if (!email) return;
      if (!map[email]) map[email] = {
        email, name: `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || email,
        phone: o.address?.phone || '—', city: o.address?.city || '—', country: o.address?.country || '—',
        orders: 0, spent: 0, paid: 0, lastOrder: null, firstOrder: null,
      };
      const u = map[email];
      const amt = Number(o.finalAmount) || Number(o.amount) || 0;
      u.orders += 1; u.spent += amt;
      if (o.payment) u.paid += amt;
      const ts = o.date ? new Date(o.date) : null;
      if (ts) {
        if (!u.lastOrder || ts > u.lastOrder) u.lastOrder = ts;
        if (!u.firstOrder || ts < u.firstOrder) u.firstOrder = ts;
      }
    });
    return Object.values(map);
  }, [orders]);

  /* ── Search + sort ── */
  const filtered = useMemo(() => {
    let r = [...users];
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.phone.includes(q) || u.city.toLowerCase().includes(q));
    }
    r.sort((a, b) => {
      if (sortBy === 'name') return sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      const av = sortBy === 'spent' ? a.spent : sortBy === 'orders' ? a.orders : sortBy === 'recent' ? (a.lastOrder?.getTime() || 0) : (a.firstOrder?.getTime() || 0);
      const bv = sortBy === 'spent' ? b.spent : sortBy === 'orders' ? b.orders : sortBy === 'recent' ? (b.lastOrder?.getTime() || 0) : (b.firstOrder?.getTime() || 0);
      return sortDir === 'asc' ? av - bv : bv - av;
    });
    return r;
  }, [users, search, sortBy, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSort = col => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortBy(col); setSortDir('desc'); }
    setPage(1);
  };

  /* ── Formatters ── */
  const fmtDate = d => d ? d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
  const fmtRel = d => {
    if (!d) return '—';
    const days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days === 0) return 'Today'; if (days === 1) return 'Yesterday';
    if (days < 30) return `${days}d ago`; if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  };
  const initials = name => name.split(' ').map(n => n[0] || '').join('').slice(0, 2).toUpperCase() || '?';

  /* ── Export CSV ── */
  const exportCSV = () => {
    const rows = [['Name', 'Email', 'Phone', 'City', 'Country', 'Orders', 'Total Spent', 'Paid Amount', 'Last Order', 'First Order']];
    filtered.forEach(u => rows.push([u.name, u.email, u.phone, u.city, u.country, u.orders, u.spent.toFixed(0), u.paid.toFixed(0), fmtDate(u.lastOrder), fmtDate(u.firstOrder)]));
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `customers_${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(url); toast.success('Customers exported!');
  };

  /* ── Sortable TH ── */
  const SortTh = ({ col, label, icon }) => {
    const active = sortBy === col;
    return (
      <th onClick={() => handleSort(col)}
        style={{
          padding: '12px 18px', textAlign: 'left', fontWeight: 700, fontSize: 11,
          textTransform: 'uppercase', letterSpacing: '.6px', whiteSpace: 'nowrap',
          cursor: 'pointer', userSelect: 'none', transition: 'color .15s',
          color: active ? B.gold : B.muted,
          borderBottom: `1px solid ${B.borderSoft}`,
          background: B.surface2,
        }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.color = B.creamSoft; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.color = B.muted; }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          {icon && <span style={{ opacity: .6 }}>{icon}</span>}
          {label}
          <span style={{ opacity: active ? 1 : .0, color: B.gold, transition: 'opacity .15s' }}>
            {active && sortDir === 'asc' ? <TbArrowUp size={11} /> : <TbArrowDown size={11} />}
          </span>
        </span>
      </th>
    );
  };

  /* ── Summary KPI row ── */
  const totalSpent = users.reduce((s, u) => s + u.spent, 0);
  const totalPaid = users.reduce((s, u) => s + u.paid, 0);
  const totalOrders = users.reduce((s, u) => s + u.orders, 0);
  const avgSpend = users.length ? (totalSpent / users.length) : 0;

  const SUMMARY = [
    { label: 'Total Customers', value: loading ? '…' : users.length.toLocaleString(), c: B.blue, icon: <TbUsers size={16} /> },
    { label: 'Total Revenue', value: loading ? '…' : `$${totalSpent.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, c: { bg: 'rgba(201,168,76,0.14)', text: B.gold, border: `rgba(201,168,76,0.28)`, dot: B.gold }, icon: <TbCurrencyDollar size={16} /> },
    { label: 'Paid Amount', value: loading ? '…' : `$${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, c: B.emerald, icon: <TbCurrencyDollar size={16} /> },
    { label: 'Total Orders', value: loading ? '…' : totalOrders.toLocaleString(), c: B.violet, icon: <TbShoppingBag size={16} /> },
    { label: 'Avg. Spend', value: loading ? '…' : `$${avgSpend.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, c: B.amber, icon: <TbCurrencyDollar size={16} /> },
  ];

  /* ════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════ */
  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @keyframes uPulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes uFadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .u-row:hover td{ background: rgba(201,168,76,0.04) !important; }
        .u-pg-btn:hover:not(:disabled){ background: ${B.goldDim} !important; border-color: ${B.border} !important; color: ${B.gold} !important; }
      `}</style>

      {/* ── SUMMARY KPI CARDS ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 18 }}>
        {SUMMARY.map((s, i) => (
          <div key={i} style={{
            ...card(), padding: '14px 16px',
            animation: `uFadeUp .35s ease ${i * .06}s both`, transition: 'box-shadow .2s'
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,0,0,.4),0 0 0 1px ${B.border}`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: s.c.bg, color: s.c.text, border: `1px solid ${s.c.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {s.icon}
              </div>
              <span style={{
                color: B.muted, fontSize: 11, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '.6px'
              }}>{s.label}</span>
            </div>
            <div style={{ color: B.cream, fontSize: 22, fontWeight: 800, letterSpacing: -.5 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* ── MAIN CARD ── */}
      <div style={{ ...card(), overflow: 'hidden', animation: 'uFadeUp .4s ease .1s both' }}>

        {/* Card Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 22px', borderBottom: `1px solid ${B.borderSoft}`,
          flexWrap: 'wrap', gap: 12
        }}>
          <div>
            <h2 style={{ color: B.cream, fontSize: 15, fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
              <TbUsers size={17} style={{ color: B.gold }} />
              Customers
            </h2>
            <p style={{ color: B.muted, fontSize: 11.5, marginTop: 3 }}>
              {loading ? 'Loading…' : `${filtered.length} unique customers from ${orders.length} orders`}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <SearchInput value={search} onChange={v => { setSearch(v); setPage(1); }} placeholder="Search name, email, city…" />
            <DarkSelect
              value={`${sortBy}-${sortDir}`}
              onChange={v => { const [s, d] = v.split('-'); setSortBy(s); setSortDir(d); setPage(1); }}
              options={[
                ['spent-desc', 'Top Spenders'], ['orders-desc', 'Most Orders'],
                ['recent-desc', 'Most Recent'], ['joined-asc', 'Earliest Joined'], ['name-asc', 'Name A–Z'],
              ]}
            />
            <GoldBtn onClick={exportCSV}>
              <TbDownload size={14} /> Export CSV
            </GoldBtn>
          </div>
        </div>

        {/* ── TABLE ── */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>

            {/* Table Head */}
            <thead>
              <tr>
                <SortTh col="name" label="Customer" icon={<TbUsers size={11} />} />
                <th style={{
                  padding: '12px 18px', textAlign: 'left', fontWeight: 700, fontSize: 11,
                  textTransform: 'uppercase', letterSpacing: '.6px', color: B.muted,
                  background: B.surface2, borderBottom: `1px solid ${B.borderSoft}`, whiteSpace: 'nowrap'
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><TbMail size={11} style={{ opacity: .6 }} />Contact</span>
                </th>
                <SortTh col="orders" label="Orders" icon={<TbShoppingBag size={11} />} />
                <SortTh col="spent" label="Total Spent" icon={<TbCurrencyDollar size={11} />} />
                <th style={{
                  padding: '12px 18px', textAlign: 'left', fontWeight: 700, fontSize: 11,
                  textTransform: 'uppercase', letterSpacing: '.6px', color: B.muted,
                  background: B.surface2, borderBottom: `1px solid ${B.borderSoft}`, whiteSpace: 'nowrap'
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><TbCurrencyDollar size={11} style={{ opacity: .6 }} />Paid</span>
                </th>
                <SortTh col="recent" label="Last Order" icon={<TbClock size={11} />} />
                <SortTh col="joined" label="Customer Since" icon={<TbCalendar size={11} />} />
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {/* Skeleton rows */}
              {loading && Array(6).fill(0).map((_, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${B.borderSoft}` }}>
                  {[140, 180, 70, 80, 70, 90, 100].map((w, j) => (
                    <td key={j} style={{ padding: '14px 18px' }}>
                      <Skel w={w} h={j === 0 ? 36 : 13} r={j === 0 ? 10 : 5} />
                    </td>
                  ))}
                </tr>
              ))}

              {/* Empty state */}
              {!loading && paginated.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: '64px 24px', textAlign: 'center' }}>
                    <TbUsers size={36} style={{ color: B.mutedSoft, margin: '0 auto 12px', display: 'block' }} />
                    <p style={{ color: B.muted, fontSize: 14 }}>
                      {search ? 'No customers match your search' : 'No customer data yet'}
                    </p>
                    {search && (
                      <button onClick={() => setSearch('')}
                        style={{
                          marginTop: 8, color: B.gold, fontSize: 12.5, background: 'none',
                          border: 'none', cursor: 'pointer', textDecoration: 'underline'
                        }}>
                        Clear search
                      </button>
                    )}
                  </td>
                </tr>
              )}

              {/* Data rows */}
              {!loading && paginated.map((u, i) => {
                const pal = AVATAR_PALETTES[((page - 1) * PER_PAGE + i) % AVATAR_PALETTES.length];
                const paidPct = u.spent > 0 ? (u.paid / u.spent) : 1;
                const isFullPaid = u.paid >= u.spent;
                const hasUnpaid = u.paid > 0 && u.paid < u.spent;
                const noPaid = u.paid === 0;

                return (
                  <tr key={u.email} className="u-row"
                    style={{ borderBottom: `1px solid ${B.borderSoft}`, transition: 'background .12s', cursor: 'default' }}>

                    {/* Customer */}
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                        {/* Avatar */}
                        <div style={{
                          width: 38, height: 38, borderRadius: 11, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 800, fontSize: 13,
                          background: pal.bg, color: pal.text,
                          border: `1px solid ${pal.text}30`,
                          boxShadow: `0 0 12px ${pal.text}20`
                        }}>
                          {initials(u.name)}
                        </div>
                        <div>
                          <p style={{ color: B.cream, fontWeight: 700, fontSize: 13.5, lineHeight: 1.2 }}>{u.name}</p>
                          <p style={{
                            color: B.muted, fontSize: 11.5, marginTop: 2,
                            display: 'flex', alignItems: 'center', gap: 4
                          }}>
                            <TbMapPin size={10} />{u.city}{u.country && u.country !== u.city ? `, ${u.country}` : ''}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td style={{ padding: '14px 18px' }}>
                      <p style={{
                        color: B.creamSoft, fontSize: 12.5,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 190
                      }}>
                        <TbMail size={11} style={{ color: B.muted, marginRight: 4, verticalAlign: 'middle' }} />{u.email}
                      </p>
                      <p style={{
                        color: B.muted, fontSize: 11.5, marginTop: 3,
                        display: 'flex', alignItems: 'center', gap: 4
                      }}>
                        <TbPhone size={10} />{u.phone}
                      </p>
                    </td>

                    {/* Orders */}
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '4px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700,
                        background: B.blue.bg, color: B.blue.text, border: `1px solid ${B.blue.border}`
                      }}>
                        {u.orders} order{u.orders !== 1 ? 's' : ''}
                      </span>
                    </td>

                    {/* Total Spent */}
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{ color: B.gold, fontSize: 15, fontWeight: 800, letterSpacing: -.3 }}>
                        ${u.spent.toLocaleString('en-US')}
                      </span>
                    </td>

                    {/* Paid */}
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{
                        fontSize: 13, fontWeight: 700,
                        color: isFullPaid ? B.emerald.text : hasUnpaid ? B.amber.text : B.red.text
                      }}>
                        ${u.paid.toLocaleString('en-US')}
                      </span>
                      {!isFullPaid && u.spent > 0 && (
                        <div style={{ marginTop: 5, width: 80 }}>
                          {/* Progress bar */}
                          <div style={{ height: 3, borderRadius: 4, background: B.surface3, overflow: 'hidden' }}>
                            <div style={{
                              height: '100%', borderRadius: 4, width: `${Math.round(paidPct * 100)}%`,
                              background: hasUnpaid ? B.amber.dot : B.red.dot,
                              transition: 'width .4s'
                            }} />
                          </div>
                          <p style={{ color: B.red.text, fontSize: 10, marginTop: 3, fontWeight: 600 }}>
                            ${(u.spent - u.paid).toLocaleString('en-US')} unpaid
                          </p>
                        </div>
                      )}
                    </td>

                    {/* Last Order */}
                    <td style={{ padding: '14px 18px', whiteSpace: 'nowrap' }}>
                      <p style={{ color: B.cream, fontSize: 12.5, fontWeight: 600 }}>{fmtRel(u.lastOrder)}</p>
                      <p style={{ color: B.muted, fontSize: 11, marginTop: 2 }}>{fmtDate(u.lastOrder)}</p>
                    </td>

                    {/* Customer Since */}
                    <td style={{ padding: '14px 18px', whiteSpace: 'nowrap' }}>
                      <p style={{ color: B.creamSoft, fontSize: 12.5 }}>{fmtDate(u.firstOrder)}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ── PAGINATION ── */}
        {!loading && totalPages > 1 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 22px', borderTop: `1px solid ${B.borderSoft}`, flexWrap: 'wrap', gap: 10
          }}>
            <p style={{ color: B.muted, fontSize: 12.5 }}>
              Showing <strong style={{ color: B.cream }}>{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong>
              {' '}of <strong style={{ color: B.cream }}>{filtered.length}</strong> customers
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

              {/* Prev */}
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                className="u-pg-btn"
                style={{
                  width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 9, border: `1px solid ${B.border}`, background: B.surface2,
                  color: B.muted, cursor: 'pointer', transition: 'all .15s', opacity: page === 1 ? .4 : 1
                }}>
                <TbChevronLeft size={14} />
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce((acc, p, i, arr) => { if (i > 0 && arr[i - 1] !== p - 1) acc.push('…'); acc.push(p); return acc; }, [])
                .map((p, i) => p === '…'
                  ? <span key={`e${i}`} style={{ color: B.mutedSoft, padding: '0 4px', fontSize: 13 }}>…</span>
                  : <button key={p} onClick={() => setPage(p)} className="u-pg-btn"
                    style={{
                      width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 9, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s',
                      border: page === p ? `1px solid ${B.gold}` : `1px solid ${B.border}`,
                      background: page === p ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : B.surface2,
                      color: page === p ? B.bg : B.muted
                    }}>
                    {p}
                  </button>
                )}

              {/* Next */}
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                className="u-pg-btn"
                style={{
                  width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 9, border: `1px solid ${B.border}`, background: B.surface2,
                  color: B.muted, cursor: 'pointer', transition: 'all .15s', opacity: page === totalPages ? .4 : 1
                }}>
                <TbChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;