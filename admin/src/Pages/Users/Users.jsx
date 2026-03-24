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



import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../../App';
import {
  TbSearch, TbX, TbDownload, TbUsers,
  TbChevronLeft, TbChevronRight,
} from 'react-icons/tb';

/* ─────────────────────────────────────────────
   UTILITY COMPONENTS — defined at top level
   (NOT nested inside Users to avoid re-mount
   on every render)
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

const SearchInput = ({ value, onChange, placeholder = 'Search…', className = '' }) => (
  <div className={`relative ${className}`}>
    <TbSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="pl-9 pr-8 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all w-full"
    />
    {value && (
      <button onClick={() => onChange('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
        <TbX size={13} />
      </button>
    )}
  </div>
);

const Btn = ({ children, onClick, variant = 'ghost', size = 'sm', className = '', disabled = false, title }) => {
  const base = 'inline-flex items-center gap-1.5 font-semibold rounded-xl transition-all cursor-pointer border select-none';
  const sizes = { xs: 'px-2 py-1 text-[11px]', sm: 'px-3 py-2 text-[12.5px]', md: 'px-5 py-2.5 text-[13.5px]' };
  const variants = {
    primary: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 shadow-sm',
    ghost: 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50',
    success: 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700',
    danger: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
    outline: 'bg-transparent text-indigo-600 border-indigo-300 hover:bg-indigo-50',
  };
  return (
    <button onClick={onClick} disabled={disabled} title={title}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}>
      {children}
    </button>
  );
};

/* ═══════════════════════════════════════════
   USERS PAGE — derived from real order data
═══════════════════════════════════════════ */
const Users = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('spent');
  const [sortDir, setSortDir] = useState('desc');
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  /* ── Fetch all orders to build user profiles ── */
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

  /* ── Build one user row per unique email from real orders ── */
  const users = useMemo(() => {
    const map = {};
    orders.forEach(o => {
      const email = (o.address?.email || '').toLowerCase().trim();
      if (!email) return;
      if (!map[email]) {
        map[email] = {
          email,
          name: `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || email,
          phone: o.address?.phone || '—',
          city: o.address?.city || '—',
          country: o.address?.country || '—',
          orders: 0,
          spent: 0,
          paid: 0,
          lastOrder: null,
          firstOrder: null,
        };
      }
      const u = map[email];
      const amt = Number(o.finalAmount) || Number(o.amount) || 0;
      u.orders += 1;
      u.spent += amt;
      if (o.payment) u.paid += amt;
      const ts = o.date ? new Date(o.date) : null;
      if (ts) {
        if (!u.lastOrder || ts > u.lastOrder) u.lastOrder = ts;
        if (!u.firstOrder || ts < u.firstOrder) u.firstOrder = ts;
      }
    });
    return Object.values(map);
  }, [orders]);

  /* ── Search + sort + paginate ── */
  const filtered = useMemo(() => {
    let r = [...users];
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter(u =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.phone.includes(q) ||
        u.city.toLowerCase().includes(q)
      );
    }
    r.sort((a, b) => {
      let av, bv;
      if (sortBy === 'spent') { av = a.spent; bv = b.spent; }
      else if (sortBy === 'orders') { av = a.orders; bv = b.orders; }
      else if (sortBy === 'recent') {
        av = a.lastOrder ? a.lastOrder.getTime() : 0;
        bv = b.lastOrder ? b.lastOrder.getTime() : 0;
      }
      else if (sortBy === 'joined') {
        av = a.firstOrder ? a.firstOrder.getTime() : 0;
        bv = b.firstOrder ? b.firstOrder.getTime() : 0;
      }
      else /* name */ {
        return sortDir === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return sortDir === 'asc' ? av - bv : bv - av;
    });
    return r;
  }, [users, search, sortBy, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSort = (col) => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortBy(col); setSortDir('desc'); }
    setPage(1);
  };

  const fmtDate = (d) => d
    ? d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
    : '—';

  const fmtRel = (d) => {
    if (!d) return '—';
    const days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 30) return `${days}d ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  };

  const initials = (name) =>
    name.split(' ').map(n => n[0] || '').join('').slice(0, 2).toUpperCase() || '?';

  const AVATAR_COLORS = [
    'bg-indigo-100 text-indigo-700', 'bg-pink-100 text-pink-700',
    'bg-amber-100 text-amber-700', 'bg-emerald-100 text-emerald-700',
    'bg-violet-100 text-violet-700', 'bg-cyan-100 text-cyan-700',
  ];

  /* SortTh stays inside Users — it needs handleSort, sortBy, sortDir from closure */
  const SortTh = ({ col, label }) => (
    <th
      onClick={() => handleSort(col)}
      className="px-5 py-3.5 text-left font-semibold text-gray-500 whitespace-nowrap cursor-pointer hover:text-gray-800 select-none group"
    >
      <span className="flex items-center gap-1">
        {label}
        <span className={`opacity-0 group-hover:opacity-60 transition-opacity ${sortBy === col ? '!opacity-100 text-indigo-600' : ''}`}>
          {sortBy === col && sortDir === 'asc' ? '↑' : '↓'}
        </span>
      </span>
    </th>
  );

  /* ── Export CSV ── */
  const exportCSV = () => {
    const rows = [['Name', 'Email', 'Phone', 'City', 'Country', 'Orders', 'Total Spent', 'Paid Amount', 'Last Order', 'First Order']];
    filtered.forEach(u => rows.push([
      u.name, u.email, u.phone, u.city, u.country,
      u.orders, u.spent.toFixed(0), u.paid.toFixed(0),
      fmtDate(u.lastOrder), fmtDate(u.firstOrder),
    ]));
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `customers_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Customers exported!');
  };

  /* ── Render ── */
  return (
    <SectionCard
      title="Customers"
      subtitle={loading ? 'Loading…' : `${filtered.length} unique customers from ${orders.length} orders`}
      toolbar={
        <div className="flex items-center gap-2 flex-wrap">
          <SearchInput
            value={search}
            onChange={v => { setSearch(v); setPage(1); }}
            placeholder="Search name, email, city…"
            className="w-56"
          />
          <select
            value={`${sortBy}-${sortDir}`}
            onChange={e => {
              const [s, d] = e.target.value.split('-');
              setSortBy(s); setSortDir(d); setPage(1);
            }}
            className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer appearance-none pr-7 "
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 8px center',
            }}
          >
            <option value="spent-desc">Top Spenders</option>
            <option value="orders-desc">Most Orders</option>
            <option value="recent-desc">Most Recent</option>
            <option value="joined-asc">Earliest Joined</option>
            <option value="name-asc">Name A–Z</option>
          </select>
          <Btn variant="success" size="sm" onClick={exportCSV}>
            <TbDownload size={14} /> Export CSV
          </Btn>
        </div>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <SortTh col="name" label="Customer" />
              <th className="px-5 py-3.5 text-left font-semibold text-gray-500">Contact</th>
              <SortTh col="orders" label="Orders" />
              <SortTh col="spent" label="Total Spent" />
              <th className="px-5 py-3.5 text-left font-semibold text-gray-500">Paid</th>
              <SortTh col="recent" label="Last Order" />
              <SortTh col="joined" label="Customer Since" />
            </tr>
          </thead>
          <tbody>
            {/* Skeleton loading rows */}
            {loading && Array(5).fill(0).map((_, i) => (
              <tr key={i} className="border-b border-gray-50">
                {Array(7).fill(0).map((_, j) => (
                  <td key={j} className="px-5 py-4">
                    <div
                      className="h-4 bg-gray-100 rounded animate-pulse"
                      style={{ width: [120, 160, 60, 80, 70, 90, 100][j] }}
                    />
                  </td>
                ))}
              </tr>
            ))}

            {/* Empty state */}
            {!loading && paginated.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-16 text-gray-400">
                  <TbUsers size={32} className="mx-auto mb-2 opacity-30" />
                  <p className="text-[14px]">
                    {search ? 'No customers match your search' : 'No customer data yet'}
                  </p>
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="mt-2 text-indigo-600 text-[12px] hover:underline"
                    >
                      Clear search
                    </button>
                  )}
                </td>
              </tr>
            )}

            {/* Data rows */}
            {!loading && paginated.map((u, i) => (
              <tr key={u.email} className="border-b border-gray-50 hover:bg-indigo-50/20 transition-colors">

                {/* Customer */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${AVATAR_COLORS[((page - 1) * PER_PAGE + i) % AVATAR_COLORS.length]}`}>
                      {initials(u.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{u.name}</p>
                      <p className="text-[11.5px] text-gray-400">
                        {u.city}{u.country && u.country !== u.city ? `, ${u.country}` : ''}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-5 py-4">
                  <p className="text-gray-700 truncate max-w-[180px]">{u.email}</p>
                  <p className="text-[11.5px] text-gray-400">{u.phone}</p>
                </td>

                {/* Orders */}
                <td className="px-5 py-4">
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-[12px] font-bold">
                    {u.orders} order{u.orders !== 1 ? 's' : ''}
                  </span>
                </td>

                {/* Total Spent */}
                <td className="px-5 py-4">
                  <span className="font-extrabold text-gray-900">
                    ${u.spent.toLocaleString('en-US')}
                  </span>
                </td>

                {/* Paid */}
                <td className="px-5 py-4">
                  <span className={`text-[12.5px] font-bold ${u.paid >= u.spent ? 'text-emerald-600' : u.paid > 0 ? 'text-amber-600' : 'text-red-500'}`}>
                    ${u.paid.toLocaleString('en-US')}
                  </span>
                  {u.paid < u.spent && (
                    <p className="text-[10.5px] text-red-400">
                      ${(u.spent - u.paid).toLocaleString('en-US')} unpaid
                    </p>
                  )}
                </td>

                {/* Last Order */}
                <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
                  <p className="text-[12.5px] font-semibold text-gray-700">{fmtRel(u.lastOrder)}</p>
                  <p className="text-[11px] text-gray-400">{fmtDate(u.lastOrder)}</p>
                </td>

                {/* Customer Since */}
                <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
                  <p className="text-[12.5px]">{fmtDate(u.firstOrder)}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
          <p className="text-[12px] text-gray-400">
            Showing{' '}
            <strong>{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong>
            {' '}of <strong>{filtered.length}</strong> customers
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <TbChevronLeft size={14} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
              .reduce((acc, p, i, arr) => {
                if (i > 0 && arr[i - 1] !== p - 1) acc.push('…');
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) => p === '…'
                ? <span key={`e${i}`} className="text-gray-400 text-sm px-1">…</span>
                : <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg border text-[12.5px] font-semibold transition-colors
                      ${page === p
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                  {p}
                </button>
              )
            }

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <TbChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </SectionCard>
  );
};

export default Users;