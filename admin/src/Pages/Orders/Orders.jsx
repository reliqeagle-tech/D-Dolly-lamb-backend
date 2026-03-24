// import React, { useState } from 'react'
// import Button from '@mui/material/Button'
// import { FaAngleDown } from "react-icons/fa6";

// import Badge from '../../Components/Badge/Badge';
// // import Badge from '../../../../client/src/components/Badge/Badge';
// import SearchBox from '../../Components/SearchBox/SearchBox';
// import { assets } from '../../assets/assets';


// const Orders = () => {

//   const [isOpenOrderProduct, setIsOpenOrderProdcut] = useState(null);
//   const isShowOrderProduct = (index) => {
//     if (isOpenOrderProduct === index) {
//       setIsOpenOrderProdcut(null)
//     } else {
//       setIsOpenOrderProdcut(index);
//     }
//   }

//   return (
//     <div>
//       <div className='my-3 card shadow-md bg-white sm:rounded-lg'>
//         <div className='flex items-center justify-between px-5 py-5'>
//           <h2 className='text-lg font-semibold text-gray-700'>Recent Order</h2>
//           <div className='w-[40%]'><SearchBox /></div>
//         </div>

//         <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs border border-gray-400  pb-4">
//           <table className="w-full text-sm text-left rtl:text-right text-body">
//             <thead className="text-sm text-body bg-gray-200 border-b rounded-base border-gray-300">
//               <tr>
//                 <th scope="col" className="px-6 py-3 font-medium">
//                   &nbsp;
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Order Id
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Payment Id
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Name
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Phone Number
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Address
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   PinCode
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Total Amount
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Email
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   User Id
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Order Status
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-neutral-primary border-b border-gray-400">
//                 <td className="px-6 py-4">
//                   <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={() => isShowOrderProduct(0)}><FaAngleDown className={`text-xl text-gray-700 ${isOpenOrderProduct === 0 ? 'rotate-180' : 'totate-0'}`} /></Button>
//                 </td>
//                 <td className="px-6 py-4 font-medium ">
//                   <span className='text-primary'>68d4d89016a3ed9d35e85556</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium ">
//                   <span className='text-primary'>pay_PTP016a3ed9d8</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                   Rajesh Verma
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   98378477394
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   <span className='block w-[300px]'>H No 222 Street No 6 Adarsh Mohalla Delhi near shivam medical</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   110034
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   5400
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   reliqeagle@gmail.com
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   <span className='text-primary'>68d4d89016a3ed9d35e85556</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   <Badge status="confirm" />
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                   01-01-2026
//                 </td>
//               </tr>

//               {
//                 isOpenOrderProduct === 0 &&
//                 <tr>
//                   <td className='pl-11 pt-2' colSpan="6">
//                     <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs border border-gray-500 ">
//                       <table className="w-full text-sm text-left rtl:text-right text-body">
//                         <thead className="text-sm text-gray-800 bg-gray-200 border-b rounded-base border-gray-300">
//                           <tr>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Product Id
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Product Title
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Image
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Quantity
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Price
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Sub Total
//                             </th>

//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr className="bg-neutral-primary border-b border-gray-400">
//                             <td className="px-6 py-4">
//                               <span className='text-gray-700'>68d4d89016a3ed9d35e85556</span>
//                             </td>
//                             <td className="px-6 py-4 text-gray-700 font-medium ">
//                               A-Line Kurti With Sharara & Dup...
//                             </td>
//                             <td className="px-6 py-4 font-medium ">
//                               <img src={assets.p_img13} className='w-[40px] h-[40px] rounded-md object-cover' alt="" />
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                               2
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                           </tr>
//                           <tr className="bg-neutral-primary border-b border-gray-400">
//                             <td className="px-6 py-4">
//                               <span className='text-gray-700'>68d4d89016a3ed9d35e85556</span>
//                             </td>
//                             <td className="px-6 py-4 text-gray-700 font-medium ">
//                               A-Line Kurti With Sharara & Dup...
//                             </td>
//                             <td className="px-6 py-4 font-medium ">
//                               <img src={assets.p_img13} className='w-[40px] h-[40px] rounded-md object-cover' alt="" />
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                               2
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </td>
//                 </tr>

//               }

//               <tr className="bg-neutral-primary border-b border-gray-400">
//                 <td className="px-6 py-4">
//                   <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={() => isShowOrderProduct(1)}><FaAngleDown className={`text-xl text-gray-700 ${isOpenOrderProduct === 1 ? 'rotate-180' : 'totate-0'}`} /></Button>
//                 </td>
//                 <td className="px-6 py-4 font-medium ">
//                   <span className='text-primary'>68d4d89016a3ed9d35e85556</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium ">
//                   <span className='text-primary'>pay_PTP016a3ed9d8</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                   Rajesh Verma
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   98378477394
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   <span className='block w-[300px]'>H No 222 Street No 6 Adarsh Mohalla Delhi near shivam medical</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   110034
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   5400
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   reliqeagle@gmail.com
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   <span className='text-primary'>68d4d89016a3ed9d35e85556</span>
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700">
//                   <Badge status="pending" />
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                   01-01-2026
//                 </td>
//               </tr>

//               {
//                 isOpenOrderProduct === 1 &&
//                 <tr>
//                   <td className='pl-11 pt-2' colSpan="6">
//                     <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs border border-gray-500 ">
//                       <table className="w-full text-sm text-left rtl:text-right text-body">
//                         <thead className="text-sm text-gray-800 bg-gray-200 border-b rounded-base border-gray-300">
//                           <tr>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Product Id
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Product Title
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Image
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Quantity
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Price
//                             </th>
//                             <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                               Sub Total
//                             </th>

//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr className="bg-neutral-primary border-b border-gray-400">
//                             <td className="px-6 py-4">
//                               <span className='text-primary'>68d4d89016a3ed9d35e85556</span>
//                             </td>
//                             <td className="px-6 py-4 text-gray-700 font-medium ">
//                               A-Line Kurti With Sharara & Dup...
//                             </td>
//                             <td className="px-6 py-4 font-medium ">
//                               <img src={assets.p_img13} className='w-[40px] h-[40px] rounded-md object-cover' alt="" />
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                               2
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                           </tr>
//                           <tr className="bg-neutral-primary border-b border-gray-400">
//                             <td className="px-6 py-4">
//                               <span className='text-primary'>68d4d89016a3ed9d35e85556</span>
//                             </td>
//                             <td className="px-6 py-4 text-gray-700 font-medium ">
//                               A-Line Kurti With Sharara & Dup...
//                             </td>
//                             <td className="px-6 py-4 font-medium ">
//                               <img src={assets.p_img13} className='w-[40px] h-[40px] rounded-md object-cover' alt="" />
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                               2
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                             <td className="px-6 py-4 font-medium text-gray-700">
//                               1300
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </td>
//                 </tr>

//               }

//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Orders



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl, currency } from '../../App';
// import { assets } from '../../assets/assets';

// const Orders = ({ token }) => {

//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     if (!token) return;

//     try {
//       const response = await axios.post(
//         backendUrl + '/api/order/list',
//         {},
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         setOrders(response.data.orders.reverse());
//       } else {
//         toast.error(response.data.message);
//       }

//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(
//         backendUrl + '/api/order/status',
//         { orderId, status: event.target.value },
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         fetchAllOrders();
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error("Status update failed");
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div>
//       <h3 className="text-lg font-semibold mb-4">Order Page</h3>

//       <div>
//         {orders.map((order, orderIndex) => (
//           <div
//             key={orderIndex}
//             className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr]
//             gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4
//             text-xs sm:text-sm text-gray-700"
//           >
//             {/* Order Icon */}
//             <img className='w-12' src={assets.parcel_icon} alt="Parcel" />

//             {/* Order Items + Address */}
//             <div>
//               {/* ITEMS LIST */}
//               <div>
//                 {order.items.map((item, itemIndex) => {

//                   // FIX: quantity might be object, extract safely
//                   const qty = typeof item.quantity === "object"
//                     ? item.quantity.quantity
//                     : item.quantity;

//                   // FIX: size might also be object
//                   const size = typeof item.size === "object"
//                     ? item.size?.label || ""
//                     : item.size;

//                   return (
//                     <p className="py-0.5" key={itemIndex}>
//                       {item.name} x {qty}
//                       <span> {size} </span>
//                       {itemIndex !== order.items.length - 1 && ","}
//                     </p>
//                   );
//                 })}
//               </div>

//               {/* ADDRESS */}
//               <p className="mt-3 mb-2 font-medium">
//                 {order.address.firstName} {order.address.lastName}
//               </p>

//               <div>
//                 <p>{order.address.street},</p>
//                 <p>
//                   {order.address.city}, {order.address.state}, {order.address.country},{" "}
//                   {order.address.zipcode}
//                 </p>
//               </div>

//               <p>{order.address.phone}</p>
//             </div>

//             {/* Payment + Status */}
//             <div>
//               <p className="text-sm sm:text-[15px]">
//                 Items : {order.items.length}
//               </p>
//               <p className="mt-3">Method : {order.paymentMethod}</p>
//               <p>Payment : {order.payment ? "Done" : "Pending"}</p>
//               <p>Date : {new Date(order.date).toLocaleDateString()}</p>
//             </div>

//             {/* Amount */}
//             <p className="text-sm sm:text-[15px]">
//               {currency}{order.amount}
//             </p>

//             {/* Status Dropdown */}
//             <select
//               onChange={(event) => statusHandler(event, order._id)}
//               value={order.status}
//               className="p-2 font-semibold border rounded"
//             >
//               <option value="Order Placed">Order Placed</option>
//               <option value="Packing">Packing</option>
//               <option value="Shipped">Shipped</option>
//               <option value="Out for delivery">Out for delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;





// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl, currency } from '../../App';
// import { assets } from '../../assets/assets';

// /* ═══════════════════════════════════════════════════════════════════
//    STYLES
// ═══════════════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

// :root {
//   --ink:    #0c0c0c;
//   --ink2:   #2e2e2e;
//   --ink3:   #555;
//   --muted:  #9a9a9a;
//   --border: #e6e6e0;
//   --border2:#f0f0ea;
//   --surface:#f8f8f6;
//   --surface2:#f1f1ec;
//   --white:  #ffffff;

//   --green:        #15803d; --green-bg:     #f0fdf4; --green-border:  #bbf7d0;
//   --red:          #dc2626; --red-bg:       #fef2f2; --red-border:    #fecaca;
//   --amber:        #b45309; --amber-bg:     #fffbeb; --amber-border:  #fde68a;
//   --blue:         #1d4ed8; --blue-bg:      #eff6ff; --blue-border:   #bfdbfe;
//   --violet:       #6d28d9; --violet-bg:    #f5f3ff; --violet-border: #ddd6fe;
//   --cyan:         #0e7490; --cyan-bg:      #ecfeff; --cyan-border:   #a5f3fc;

//   --r:    14px;
//   --r-sm:  9px;
//   --r-xs:  6px;
//   --sh:    0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.05);
//   --sh-md: 0 4px 14px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.06);
//   --sh-lg: 0 8px 28px rgba(0,0,0,0.12), 0 18px 44px rgba(0,0,0,0.07);
// }

// .or * { box-sizing: border-box; }
// .or {
//   font-family: 'DM Sans', sans-serif;
//   background: var(--surface);
//   min-height: 100vh;
//   color: var(--ink);
// }

// /* ──────────────── TOP BAR ──────────────── */
// .or-topbar {
//   background: var(--white);
//   border-bottom: 1px solid var(--border);
//   padding: 0 28px;
//   height: 64px;
//   display: flex; align-items: center; justify-content: space-between;
//   position: sticky; top: 0; z-index: 300;
//   backdrop-filter: blur(8px);
// }
// .or-topbar-l { display: flex; align-items: center; gap: 14px; }
// .or-topbar-l h1 {
//   font-family: 'Syne', sans-serif;
//   font-size: 21px; font-weight: 800;
//   letter-spacing: -0.6px; margin: 0;
// }
// .or-sep { width: 1px; height: 22px; background: var(--border); }
// .or-topbar-r { display: flex; align-items: center; gap: 10px; }

// /* ──────────────── STAT CARDS ──────────────── */
// .or-stats {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 14px;
//   padding: 22px 28px 0;
// }
// @media (max-width: 1100px) { .or-stats { grid-template-columns: repeat(3,1fr); } }
// @media (max-width: 680px)  { .or-stats { grid-template-columns: repeat(2,1fr); } }

// .or-stat {
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--r);
//   padding: 16px 18px;
//   box-shadow: var(--sh);
//   display: flex; align-items: center; gap: 13px;
//   transition: transform .18s, box-shadow .18s;
//   animation: fadeUp .4s ease both;
// }
// .or-stat:hover { transform: translateY(-2px); box-shadow: var(--sh-md); }
// .or-stat-ic {
//   width: 42px; height: 42px; border-radius: 11px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 19px; flex-shrink: 0;
// }
// .or-stat-val {
//   font-family: 'Syne', sans-serif;
//   font-size: 22px; font-weight: 800;
//   color: var(--ink); line-height: 1;
// }
// .or-stat-lbl { font-size: 11.5px; color: var(--muted); font-weight: 500; margin-top: 3px; }
// .or-stat-change { font-size: 11px; font-weight: 600; margin-top: 3px; }

// /* ──────────────── TOOLBAR ──────────────── */
// .or-toolbar {
//   display: flex; align-items: center;
//   gap: 10px; padding: 20px 28px 12px;
//   flex-wrap: wrap;
// }
// .or-search-wrap { flex: 1; min-width: 210px; position: relative; }
// .or-search-ic { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 13px; color: var(--muted); pointer-events: none; }
// .or-search {
//   width: 100%;
//   border: 1.5px solid var(--border);
//   border-radius: var(--r-sm);
//   padding: 9.5px 36px 9.5px 36px;
//   font-size: 13.5px; font-family: 'DM Sans', sans-serif;
//   color: var(--ink); background: var(--white);
//   outline: none; transition: border-color .15s, box-shadow .15s;
// }
// .or-search:focus { border-color: var(--ink); box-shadow: 0 0 0 3px rgba(0,0,0,0.06); }
// .or-search-clear {
//   position: absolute; right: 11px; top: 50%; transform: translateY(-50%);
//   background: var(--surface2); border: none; border-radius: 50%;
//   width: 20px; height: 20px; cursor: pointer;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 10px; color: var(--muted); transition: background .15s;
// }
// .or-search-clear:hover { background: var(--border); color: var(--ink2); }

// .or-sel {
//   border: 1.5px solid var(--border); border-radius: var(--r-sm);
//   padding: 9px 30px 9px 12px;
//   font-size: 13px; font-family: 'DM Sans', sans-serif;
//   color: var(--ink2); background: var(--white);
//   outline: none; cursor: pointer; appearance: none;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//   background-repeat: no-repeat; background-position: right 10px center;
//   transition: border-color .15s; white-space: nowrap;
// }
// .or-sel:focus { border-color: var(--ink); box-shadow: 0 0 0 3px rgba(0,0,0,0.05); }

// /* ──────────────── RESULTS BAR ──────────────── */
// .or-bar {
//   padding: 0 28px 14px;
//   display: flex; align-items: center; justify-content: space-between;
//   flex-wrap: wrap; gap: 10px;
// }
// .or-count { font-size: 12.5px; color: var(--muted); font-weight: 500; }
// .or-count strong { color: var(--ink); }

// /* ──────────────── BUTTONS ──────────────── */
// .or-btn {
//   display: inline-flex; align-items: center; gap: 7px;
//   padding: 8px 16px; border-radius: var(--r-sm);
//   font-size: 13px; font-weight: 600;
//   font-family: 'DM Sans', sans-serif;
//   cursor: pointer; transition: all .15s; border: none; white-space: nowrap;
// }
// .or-btn:disabled { opacity: .55; cursor: not-allowed; }
// .or-btn-primary { background: var(--ink); color: #fff; }
// .or-btn-primary:hover:not(:disabled) { background: #222; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.22); }
// .or-btn-ghost { background: transparent; color: var(--ink2); border: 1.5px solid var(--border); }
// .or-btn-ghost:hover { background: var(--surface2); border-color: #ccc; }
// .or-btn-sm { padding: 6px 11px; font-size: 12px; }
// .or-btn-danger { background: var(--red-bg); color: var(--red); border: 1.5px solid var(--red-border); }
// .or-btn-danger:hover { background: #fee2e2; }

// /* ──────────────── ORDER LIST ──────────────── */
// .or-list { padding: 0 28px 48px; display: flex; flex-direction: column; gap: 12px; }

// /* ──────────────── ORDER CARD ──────────────── */
// .or-card {
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--r);
//   box-shadow: var(--sh);
//   overflow: hidden;
//   transition: box-shadow .2s, transform .15s, border-color .15s;
//   animation: fadeUp .3s ease both;
// }
// .or-card:hover { box-shadow: var(--sh-md); transform: translateY(-1px); }
// .or-card.open { border-color: var(--ink); box-shadow: var(--sh-md); }

// /* Color bar on top - indicates status at a glance */
// .or-card-bar { height: 3.5px; }
// .or-card-bar.s-placed    { background: linear-gradient(90deg, var(--blue), #3b82f6); }
// .or-card-bar.s-packing   { background: linear-gradient(90deg, var(--amber), #f59e0b); }
// .or-card-bar.s-shipped   { background: linear-gradient(90deg, var(--violet), #7c3aed); }
// .or-card-bar.s-out       { background: linear-gradient(90deg, var(--cyan), #06b6d4); }
// .or-card-bar.s-delivered { background: linear-gradient(90deg, var(--green), #22c55e); }
// .or-card-bar.s-cancelled { background: linear-gradient(90deg, var(--red), #f87171); }

// /* ──────────────── CARD SUMMARY ROW ──────────────── */
// .or-card-row {
//   display: grid;
//   grid-template-columns: 46px 1fr auto auto auto;
//   gap: 16px; padding: 16px 20px;
//   align-items: center; cursor: pointer;
//   transition: background .12s;
// }
// .or-card-row:hover { background: var(--surface); }
// @media (max-width: 800px) { .or-card-row { grid-template-columns: 46px 1fr; } .or-card-meta,.or-card-amount,.or-card-actions { display: none !important; } }

// .or-card-icon {
//   width: 46px; height: 46px; border-radius: 11px;
//   background: var(--surface2);
//   display: flex; align-items: center; justify-content: center;
//   font-size: 21px; flex-shrink: 0; transition: transform .15s;
// }
// .or-card:hover .or-card-icon { transform: scale(1.06); }

// .or-card-info {}
// .or-card-id {
//   font-size: 10.5px; color: var(--muted); font-family: 'Courier New', monospace;
//   font-weight: 700; letter-spacing: .4px; margin-bottom: 3px;
// }
// .or-card-customer {
//   font-family: 'Syne', sans-serif;
//   font-size: 14.5px; font-weight: 700; color: var(--ink); line-height: 1.2;
// }
// .or-card-preview {
//   font-size: 12px; color: var(--ink3); margin-top: 3px;
//   white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 340px;
// }

// .or-card-meta { display: flex; flex-direction: column; gap: 5px; align-items: flex-end; }
// .or-meta-line { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--ink3); white-space: nowrap; }
// .or-meta-ic { font-size: 12px; }

// .or-card-amount { text-align: right; min-width: 82px; }
// .or-amount { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 800; color: var(--ink); }
// .or-amount-sub { font-size: 10.5px; color: var(--muted); margin-top: 2px; }

// .or-card-actions {
//   display: flex; align-items: center; gap: 8px;
//   flex-shrink: 0;
// }

// /* ──────────────── STATUS SELECT ──────────────── */
// .or-status-sel {
//   border: 1.5px solid var(--border); border-radius: var(--r-sm);
//   padding: 7.5px 30px 7.5px 10px;
//   font-size: 12.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
//   cursor: pointer; outline: none; appearance: none;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//   background-repeat: no-repeat; background-position: right 9px center;
//   transition: all .15s; min-width: 162px;
// }
// .or-status-sel:focus { box-shadow: 0 0 0 3px rgba(0,0,0,0.06); }
// .or-status-sel.ss-placed    { background-color: var(--blue-bg);   color: var(--blue);   border-color: var(--blue-border); }
// .or-status-sel.ss-packing   { background-color: var(--amber-bg);  color: var(--amber);  border-color: var(--amber-border); }
// .or-status-sel.ss-shipped   { background-color: var(--violet-bg); color: var(--violet); border-color: var(--violet-border); }
// .or-status-sel.ss-out       { background-color: var(--cyan-bg);   color: var(--cyan);   border-color: var(--cyan-border); }
// .or-status-sel.ss-delivered { background-color: var(--green-bg);  color: var(--green);  border-color: var(--green-border); }
// .or-status-sel.ss-cancelled { background-color: var(--red-bg);    color: var(--red);    border-color: var(--red-border); }

// .or-expand-btn {
//   width: 30px; height: 30px; border-radius: 50%;
//   border: 1.5px solid var(--border); background: var(--white);
//   display: flex; align-items: center; justify-content: center;
//   cursor: pointer; font-size: 12px; color: var(--muted);
//   transition: all .2s; flex-shrink: 0;
// }
// .or-expand-btn:hover { border-color: var(--ink); color: var(--ink); background: var(--surface2); }
// .or-expand-btn.open { transform: rotate(180deg); }

// /* ──────────────── EXPANDED DETAILS ──────────────── */
// .or-details {
//   border-top: 1px solid var(--border2);
//   display: grid;
//   grid-template-columns: 1.2fr 1fr 1fr;
//   gap: 0;
//   background: var(--surface);
//   animation: slideDown .2s ease;
// }
// @media (max-width: 960px)  { .or-details { grid-template-columns: 1fr 1fr; } }
// @media (max-width: 600px)  { .or-details { grid-template-columns: 1fr; } }

// .or-det-col {
//   padding: 20px 22px;
//   border-right: 1px solid var(--border2);
// }
// .or-det-col:last-child { border-right: none; }
// @media (max-width: 960px)  { .or-det-col:nth-child(2) { border-right: none; } }
// @media (max-width: 600px)  { .or-det-col { border-right: none; border-bottom: 1px solid var(--border2); } .or-det-col:last-child { border-bottom: none; } }

// .or-det-title {
//   font-size: 10.5px; font-weight: 700; text-transform: uppercase;
//   letter-spacing: .7px; color: var(--muted); margin-bottom: 12px;
//   display: flex; align-items: center; gap: 6px;
// }

// /* ── ITEMS TABLE ── */
// .or-item {
//   display: flex; align-items: center; gap: 10px;
//   padding: 8px 0; border-bottom: 1px solid var(--border2);
// }
// .or-item:last-child { border-bottom: none; }
// .or-item-thumb {
//   width: 38px; height: 38px; border-radius: 8px;
//   object-fit: cover; border: 1px solid var(--border);
//   background: var(--surface2); flex-shrink: 0;
// }
// .or-item-thumb-ph {
//   width: 38px; height: 38px; border-radius: 8px;
//   background: var(--surface2); border: 1px solid var(--border);
//   display: flex; align-items: center; justify-content: center;
//   font-size: 17px; flex-shrink: 0;
// }
// .or-item-name { font-size: 13px; font-weight: 600; color: var(--ink2); line-height: 1.25; }
// .or-item-attr { font-size: 11px; color: var(--muted); margin-top: 2px; display: flex; gap: 5px; }
// .or-item-attr span { background: var(--surface2); padding: 1px 6px; border-radius: 20px; border: 1px solid var(--border2); }
// .or-item-qty { font-size: 12px; font-weight: 700; color: var(--ink3); white-space: nowrap; flex-shrink: 0; }
// .or-item-price { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--ink); white-space: nowrap; flex-shrink: 0; }

// /* ── ADDRESS ── */
// .or-addr {
//   background: var(--white); border: 1px solid var(--border);
//   border-radius: var(--r-sm); padding: 14px 16px; font-size: 13px;
//   position: relative;
// }
// .or-addr-map-ic {
//   position: absolute; top: 12px; right: 12px;
//   font-size: 18px; color: var(--muted);
// }
// .or-addr-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14.5px; color: var(--ink); margin-bottom: 6px; }
// .or-addr-line { color: var(--ink3); line-height: 1.65; font-size: 13px; }
// .or-addr-phone {
//   display: inline-flex; align-items: center; gap: 5px; margin-top: 9px;
//   padding: 4px 10px; background: var(--surface2);
//   border-radius: 20px; font-size: 12.5px; font-weight: 600; color: var(--ink2);
//   border: 1px solid var(--border2);
// }
// .or-addr-copy {
//   display: inline-flex; align-items: center; gap: 4px; margin-left: 6px;
//   padding: 4px 8px; background: var(--surface2);
//   border-radius: 20px; font-size: 11px; font-weight: 600; color: var(--muted);
//   border: 1px solid var(--border2); cursor: pointer; transition: all .15s;
// }
// .or-addr-copy:hover { background: var(--border); color: var(--ink2); }

// /* ── PAY INFO ROWS ── */
// .or-pay-row {
//   display: flex; justify-content: space-between; align-items: center;
//   padding: 7px 0; border-bottom: 1px solid var(--border2);
//   font-size: 13px;
// }
// .or-pay-row:last-child { border-bottom: none; }
// .or-pay-k { color: var(--muted); font-weight: 500; }
// .or-pay-v { font-weight: 700; color: var(--ink); text-align: right; }

// /* ── STATUS TRACKER ── */
// .or-tracker {
//   display: flex; align-items: flex-start; position: relative; margin: 4px 0 16px;
// }
// .or-track-step { flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; }
// .or-track-line {
//   position: absolute; top: 11px; left: 50%; width: 100%; height: 2.5px;
//   background: var(--border2); z-index: 0; transition: background .3s;
// }
// .or-track-line.done { background: linear-gradient(90deg, var(--green), #4ade80); }
// .or-track-dot {
//   width: 23px; height: 23px; border-radius: 50%;
//   background: var(--surface2); border: 2px solid var(--border);
//   display: flex; align-items: center; justify-content: center;
//   font-size: 10px; font-weight: 800; color: var(--muted); z-index: 1;
//   transition: all .25s; position: relative;
// }
// .or-track-dot.done   { background: var(--green);  border-color: var(--green); color: #fff; }
// .or-track-dot.active { background: var(--ink); border-color: var(--ink); color: #fff; box-shadow: 0 0 0 3px rgba(12,12,12,.12); }
// .or-track-lbl { font-size: 9px; color: var(--muted); margin-top: 5px; text-align: center; font-weight: 600; line-height: 1.3; }
// .or-track-lbl.active { color: var(--ink); }
// .or-track-lbl.done   { color: var(--green); }

// /* ── QUICK STATUS BUTTONS ── */
// .or-qbtn {
//   display: flex; align-items: center; gap: 7px;
//   padding: 8px 12px; border-radius: var(--r-sm);
//   border: 1.5px solid var(--border);
//   background: var(--white); font-size: 12.5px; font-weight: 600;
//   font-family: 'DM Sans', sans-serif; color: var(--ink2);
//   cursor: pointer; width: 100%; transition: all .15s;
//   margin-bottom: 6px;
// }
// .or-qbtn:hover:not(:disabled) { border-color: var(--ink); background: var(--surface2); }
// .or-qbtn:disabled { opacity: .45; cursor: not-allowed; }
// .or-qbtn-cancel {
//   border-color: var(--red-border); background: var(--red-bg); color: var(--red);
//   margin-top: 4px;
// }
// .or-qbtn-cancel:hover:not(:disabled) { background: #fee2e2; }

// /* ──────────────── BADGES ──────────────── */
// .or-badge {
//   display: inline-flex; align-items: center; gap: 3px;
//   padding: 3px 9px; border-radius: 20px;
//   font-size: 11.5px; font-weight: 700; white-space: nowrap;
// }
// .or-b-green  { background: var(--green-bg);  color: var(--green);  border: 1px solid var(--green-border); }
// .or-b-red    { background: var(--red-bg);    color: var(--red);    border: 1px solid var(--red-border); }
// .or-b-amber  { background: var(--amber-bg);  color: var(--amber);  border: 1px solid var(--amber-border); }
// .or-b-blue   { background: var(--blue-bg);   color: var(--blue);   border: 1px solid var(--blue-border); }
// .or-b-violet { background: var(--violet-bg); color: var(--violet); border: 1px solid var(--violet-border); }
// .or-b-cyan   { background: var(--cyan-bg);   color: var(--cyan);   border: 1px solid var(--cyan-border); }
// .or-b-gray   { background: var(--surface2);  color: var(--ink3);   border: 1px solid var(--border); }

// /* ──────────────── MOBILE FOOTER ──────────────── */
// .or-mobile-bar {
//   display: none;
//   padding: 10px 16px 14px;
//   border-top: 1px solid var(--border2);
//   align-items: center; justify-content: space-between;
//   gap: 10px; flex-wrap: wrap;
// }
// @media (max-width: 800px) { .or-mobile-bar { display: flex; } }

// /* ──────────────── SKELETON ──────────────── */
// .or-skel {
//   background: linear-gradient(90deg, var(--surface2) 25%, var(--border2) 50%, var(--surface2) 75%);
//   background-size: 300% 100%;
//   animation: shimmer 1.6s infinite;
//   border-radius: 6px;
// }

// /* ──────────────── EMPTY ──────────────── */
// .or-empty { text-align: center; padding: 64px 20px; color: var(--muted); }
// .or-empty-ic { font-size: 56px; margin-bottom: 14px; }
// .or-empty h3 { font-family: 'Syne', sans-serif; font-size: 19px; font-weight: 700; color: var(--ink2); margin-bottom: 8px; }
// .or-empty p { font-size: 13.5px; }

// /* ──────────────── TIMELINE NOTE (inline) ──────────────── */
// .or-note {
//   display: flex; align-items: flex-start; gap: 8px;
//   padding: 10px 13px;
//   background: var(--blue-bg); border: 1px solid var(--blue-border);
//   border-radius: var(--r-sm); font-size: 12px; color: var(--blue);
//   line-height: 1.55; margin-top: 12px;
// }

// /* ──────────────── ANIMATIONS ──────────────── */
// @keyframes fadeUp   { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
// @keyframes slideDown{ from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
// @keyframes shimmer  { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

// /* ──────────────── RESPONSIVE PADDING ──────────────── */
// @media (max-width: 768px) {
//   .or-topbar, .or-stats, .or-toolbar, .or-bar, .or-list { padding-left: 14px; padding-right: 14px; }
// }
// `;

// /* ═══════════════════════════════════════════════════════════════════
//    CONSTANTS
// ═══════════════════════════════════════════════════════════════════ */
// const STATUS_STEPS = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];
// const ALL_STATUSES = [...STATUS_STEPS, 'Cancelled'];

// const STATUS_EMOJI = {
//   'Order Placed': '📦',
//   'Packing': '📫',
//   'Shipped': '🚚',
//   'Out for delivery': '🏃',
//   'Delivered': '✅',
//   'Cancelled': '❌',
// };

// const STATUS_BADGE = {
//   'Order Placed': 'or-b-blue',
//   'Packing': 'or-b-amber',
//   'Shipped': 'or-b-violet',
//   'Out for delivery': 'or-b-cyan',
//   'Delivered': 'or-b-green',
//   'Cancelled': 'or-b-red',
// };

// const STATUS_BAR = {
//   'Order Placed': 's-placed',
//   'Packing': 's-packing',
//   'Shipped': 's-shipped',
//   'Out for delivery': 's-out',
//   'Delivered': 's-delivered',
//   'Cancelled': 's-cancelled',
// };

// const STATUS_SEL = {
//   'Order Placed': 'ss-placed',
//   'Packing': 'ss-packing',
//   'Shipped': 'ss-shipped',
//   'Out for delivery': 'ss-out',
//   'Delivered': 'ss-delivered',
//   'Cancelled': 'ss-cancelled',
// };

// /* ═══════════════════════════════════════════════════════════════════
//    HELPERS
// ═══════════════════════════════════════════════════════════════════ */
// const safeQty = (q) => typeof q === 'object' ? (q?.quantity ?? 1) : (+q || 1);
// const safeSize = (s) => typeof s === 'object' ? (s?.label || s?.value || '') : (s || '');
// const safeColor = (c) => typeof c === 'object' ? (c?.name || '') : (c || '');
// const fmtDate = (ts) => ts ? new Date(ts).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
// const fmtTime = (ts) => ts ? new Date(ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '';
// const fmtRelative = (ts) => {
//   if (!ts) return '';
//   const diff = Date.now() - new Date(ts).getTime();
//   const m = Math.floor(diff / 60000);
//   if (m < 60) return `${m}m ago`;
//   const h = Math.floor(m / 60);
//   if (h < 24) return `${h}h ago`;
//   return `${Math.floor(h / 24)}d ago`;
// };

// /* ── STATUS PROGRESS TRACKER ── */
// const StatusTracker = ({ status }) => {
//   const cur = STATUS_STEPS.indexOf(status);
//   return (
//     <div className="or-tracker">
//       {STATUS_STEPS.map((step, i) => {
//         const done = cur > i;
//         const active = cur === i;
//         return (
//           <div key={step} className="or-track-step">
//             {i < STATUS_STEPS.length - 1 && (
//               <div className={`or-track-line ${done ? 'done' : ''}`} />
//             )}
//             <div className={`or-track-dot ${done ? 'done' : active ? 'active' : ''}`}>
//               {done ? '✓' : i + 1}
//             </div>
//             <span className={`or-track-lbl ${active ? 'active' : done ? 'done' : ''}`}>
//               {step === 'Out for delivery' ? 'Out for\nDelivery' : step.replace('Order ', '')}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// /* ── SKELETON LOADING CARD ── */
// const SkeletonCard = ({ delay = 0 }) => (
//   <div className="or-card" style={{ animation: `fadeUp .4s ease ${delay}s both` }}>
//     <div className="or-card-bar s-placed" style={{ opacity: .25 }} />
//     <div className="or-card-row" style={{ cursor: 'default' }}>
//       <div className="or-skel" style={{ width: 46, height: 46, borderRadius: 11 }} />
//       <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
//         <div className="or-skel" style={{ width: 70, height: 10 }} />
//         <div className="or-skel" style={{ width: 150, height: 15 }} />
//         <div className="or-skel" style={{ width: 230, height: 11 }} />
//       </div>
//     </div>
//   </div>
// );

// /* ═══════════════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════ */
// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedId, setExpandedId] = useState(null);
//   const [updatingId, setUpdatingId] = useState(null);

//   // Filters
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [payFilter, setPayFilter] = useState('all');
//   const [methodFilter, setMethodFilter] = useState('all');
//   const [dateFilter, setDateFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');

//   /* ── Fetch all orders ── */
//   const fetchAllOrders = useCallback(async () => {
//     if (!token) return;
//     setLoading(true);
//     try {
//       const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
//       if (res.data.success) setOrders(res.data.orders.reverse());
//       else toast.error(res.data.message);
//     } catch (e) { toast.error(e.message); }
//     finally { setLoading(false); }
//   }, [token]);

//   /* ── Update status ── */
//   const statusHandler = useCallback(async (newStatus, orderId) => {
//     setUpdatingId(orderId);
//     try {
//       const res = await axios.post(
//         backendUrl + '/api/order/status',
//         { orderId, status: newStatus },
//         { headers: { token } }
//       );
//       if (res.data.success) {
//         setOrders(prev => prev.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
//         toast.success(`✓ Status updated → ${newStatus}`);
//       } else toast.error(res.data.message);
//     } catch { toast.error('Status update failed'); }
//     finally { setUpdatingId(null); }
//   }, [token]);

//   useEffect(() => { fetchAllOrders(); }, [fetchAllOrders]);

//   /* ── Unique payment methods ── */
//   const payMethods = useMemo(() =>
//     [...new Set(orders.map(o => o.paymentMethod).filter(Boolean))], [orders]);

//   /* ── Stats ── */
//   const stats = useMemo(() => {
//     const now = new Date();
//     const today = (ts) => {
//       const d = new Date(ts);
//       return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
//     };
//     const thisWeek = (ts) => {
//       const d = new Date(ts);
//       return (now - d) < 7 * 86400000;
//     };
//     const paidOrders = orders.filter(o => o.payment);
//     const activeOrders = orders.filter(o => !['Delivered', 'Cancelled'].includes(o.status));
//     return {
//       total: orders.length,
//       revenue: paidOrders.reduce((s, o) => s + (+o.amount || 0), 0),
//       delivered: orders.filter(o => o.status === 'Delivered').length,
//       active: activeOrders.length,
//       today: orders.filter(o => today(o.date)).length,
//       thisWeek: orders.filter(o => thisWeek(o.date)).length,
//       pending: orders.filter(o => !o.payment).length,
//       cancelled: orders.filter(o => o.status === 'Cancelled').length,
//     };
//   }, [orders]);

//   /* ── Filtered + sorted orders ── */
//   const filtered = useMemo(() => {
//     let r = [...orders];

//     // Search
//     if (search.trim()) {
//       const q = search.toLowerCase().trim();
//       r = r.filter(o =>
//         `${o.address?.firstName} ${o.address?.lastName}`.toLowerCase().includes(q) ||
//         o._id?.toLowerCase().includes(q) ||
//         o.address?.phone?.includes(q) ||
//         o.address?.email?.toLowerCase().includes(q) ||
//         o.items?.some(it => it.name?.toLowerCase().includes(q)) ||
//         o.paymentMethod?.toLowerCase().includes(q)
//       );
//     }

//     // Status filter
//     if (statusFilter !== 'all') r = r.filter(o => o.status === statusFilter);

//     // Payment filter
//     if (payFilter === 'paid') r = r.filter(o => o.payment);
//     if (payFilter === 'pending') r = r.filter(o => !o.payment);

//     // Method filter
//     if (methodFilter !== 'all') r = r.filter(o => o.paymentMethod === methodFilter);

//     // Date filter
//     const now = Date.now();
//     if (dateFilter === 'today') r = r.filter(o => { const d = new Date(o.date); const n = new Date(); return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); });
//     if (dateFilter === 'week') r = r.filter(o => now - new Date(o.date).getTime() < 7 * 86400000);
//     if (dateFilter === 'month') r = r.filter(o => now - new Date(o.date).getTime() < 30 * 86400000);

//     // Sort
//     if (sortBy === 'newest') r.sort((a, b) => new Date(b.date) - new Date(a.date));
//     if (sortBy === 'oldest') r.sort((a, b) => new Date(a.date) - new Date(b.date));
//     if (sortBy === 'amount-h') r.sort((a, b) => (+b.amount || 0) - (+a.amount || 0));
//     if (sortBy === 'amount-l') r.sort((a, b) => (+a.amount || 0) - (+b.amount || 0));
//     if (sortBy === 'name') r.sort((a, b) => `${a.address?.firstName}`.localeCompare(`${b.address?.firstName}`));

//     return r;
//   }, [orders, search, statusFilter, payFilter, methodFilter, dateFilter, sortBy]);

//   /* ── Active filters? ── */
//   const hasFilters = search || statusFilter !== 'all' || payFilter !== 'all' || methodFilter !== 'all' || dateFilter !== 'all';
//   const clearFilters = () => { setSearch(''); setStatusFilter('all'); setPayFilter('all'); setMethodFilter('all'); setDateFilter('all'); };

//   /* ═══════════════════════
//      RENDER
//   ═══════════════════════ */
//   return (
//     <div className="or sticky top-24 self-start">
//       <style>{CSS}</style>

//       {/* ── TOP BAR ── */}
//       <div className="or-topbar mt-16 ">
//         <div className="or-topbar-l">
//           <h1>Orders</h1>
//           <div className="or-sep" />
//           <span style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 500 }}>
//             {loading ? 'Loading…' : `${orders.length} total`}
//           </span>
//           {stats.active > 0 && (
//             <span className="or-badge or-b-amber" style={{ fontSize: 11.5, padding: '2px 9px' }}>
//               {stats.active} active
//             </span>
//           )}
//         </div>
//         <div className="or-topbar-r">
//           <button className="or-btn or-btn-ghost or-btn-sm" onClick={fetchAllOrders} disabled={loading}>
//             {loading ? '⏳' : '↺'} Refresh
//           </button>
//         </div>
//       </div>

//       {/* ── STATS ── */}
//       <div className="or-stats">
//         {[
//           { ic: '📦', val: stats.total, lbl: 'Total Orders', bg: 'var(--blue-bg)', delay: .05 },
//           { ic: '💰', val: `${currency}${stats.revenue.toLocaleString('en-IN')}`, lbl: 'Total Revenue', bg: 'var(--green-bg)', delay: .1 },
//           { ic: '✅', val: stats.delivered, lbl: 'Delivered', bg: 'var(--green-bg)', delay: .15 },
//           { ic: '⚡', val: stats.active, lbl: 'In Progress', bg: 'var(--amber-bg)', delay: .2 },
//           { ic: '🌅', val: stats.today, lbl: "Today's Orders", bg: 'var(--violet-bg)', delay: .25 },
//         ].map(({ ic, val, lbl, bg, delay }, i) => (
//           <div key={i} className="or-stat" style={{ animationDelay: `${delay}s` }}>
//             <div className="or-stat-ic" style={{ background: bg }}>{ic}</div>
//             <div>
//               <div className="or-stat-val">{loading ? '—' : val}</div>
//               <div className="or-stat-lbl">{lbl}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── TOOLBAR ── */}
//       <div className="or-toolbar">
//         {/* Search */}
//         <div className="or-search-wrap">
//           <span className="or-search-ic">🔍</span>
//           <input
//             className="or-search"
//             type="text"
//             placeholder="Search name, order ID, phone, item name…"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//           {search && <button className="or-search-clear" onClick={() => setSearch('')}>✕</button>}
//         </div>

//         {/* Filters */}
//         <select className="or-sel" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
//           <option value="all">All Statuses</option>
//           {ALL_STATUSES.map(s => <option key={s} value={s}>{STATUS_EMOJI[s]} {s}</option>)}
//         </select>

//         <select className="or-sel" value={payFilter} onChange={e => setPayFilter(e.target.value)}>
//           <option value="all">All Payments</option>
//           <option value="paid">✅ Paid</option>
//           <option value="pending">⏳ Pending</option>
//         </select>

//         {payMethods.length > 1 && (
//           <select className="or-sel" value={methodFilter} onChange={e => setMethodFilter(e.target.value)}>
//             <option value="all">All Methods</option>
//             {payMethods.map(m => <option key={m} value={m}>{m}</option>)}
//           </select>
//         )}

//         <select className="or-sel" value={dateFilter} onChange={e => setDateFilter(e.target.value)}>
//           <option value="all">All Time</option>
//           <option value="today">Today</option>
//           <option value="week">This Week</option>
//           <option value="month">This Month</option>
//         </select>

//         <select className="or-sel" value={sortBy} onChange={e => setSortBy(e.target.value)}>
//           <option value="newest">Newest First</option>
//           <option value="oldest">Oldest First</option>
//           <option value="amount-h">Amount ↓ High</option>
//           <option value="amount-l">Amount ↑ Low</option>
//           <option value="name">Customer Name</option>
//         </select>
//       </div>

//       {/* ── RESULTS BAR ── */}
//       <div className="or-bar">
//         <div className="or-count">
//           {loading ? 'Loading orders…' : (
//             <>
//               Showing <strong>{filtered.length}</strong> of <strong>{orders.length}</strong> orders
//               {search && <> matching "<strong>{search}</strong>"</>}
//             </>
//           )}
//         </div>
//         {hasFilters && (
//           <button className="or-btn or-btn-ghost or-btn-sm" onClick={clearFilters}>
//             ✕ Clear Filters
//           </button>
//         )}
//       </div>

//       {/* ── ORDER CARDS ── */}
//       <div className="or-list">

//         {/* Loading */}
//         {loading && [0, .06, .12, .18, .24].map((d, i) => <SkeletonCard key={i} delay={d} />)}

//         {/* Empty state */}
//         {!loading && filtered.length === 0 && (
//           <div className="or-card">
//             <div className="or-empty">
//               <div className="or-empty-ic">📭</div>
//               <h3>No orders found</h3>
//               <p>
//                 {hasFilters
//                   ? 'Try adjusting your search or clearing filters'
//                   : 'Orders will appear here once customers place them'}
//               </p>
//               {hasFilters && (
//                 <button className="or-btn or-btn-ghost" style={{ marginTop: 16 }} onClick={clearFilters}>
//                   Clear All Filters
//                 </button>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Orders */}
//         {!loading && filtered.map((order, idx) => {
//           const isExpanded = expandedId === order._id;
//           const isUpdating = updatingId === order._id;
//           const barCls = STATUS_BAR[order.status] || 's-placed';
//           const selCls = STATUS_SEL[order.status] || 'ss-placed';
//           const badgeCls = STATUS_BADGE[order.status] || 'or-b-gray';
//           const stepIdx = STATUS_STEPS.indexOf(order.status);
//           const nextSteps = STATUS_STEPS.filter(s => s !== order.status && STATUS_STEPS.indexOf(s) > stepIdx);

//           // Build compact items preview text
//           const previewText = order.items?.map(it => {
//             const qty = safeQty(it.quantity);
//             return `${it.name} ×${qty}`;
//           }).join(', ') || '—';

//           // Total item count
//           const totalQty = order.items?.reduce((s, it) => s + safeQty(it.quantity), 0) || 0;

//           return (
//             <div
//               key={order._id}
//               className={`or-card ${isExpanded ? 'open' : ''} `}
//               style={{ animationDelay: `${Math.min(idx, 10) * 0.04}s` }}
//             >
//               {/* Status color bar */}
//               <div className={`or-card-bar ${barCls}`} />

//               {/* ── SUMMARY ROW (click to expand) ── */}
//               <div className="or-card-row" onClick={() => setExpandedId(isExpanded ? null : order._id)}>

//                 {/* Icon */}
//                 <div className="or-card-icon">{STATUS_EMOJI[order.status] || '📦'}</div>

//                 {/* Info */}
//                 <div className="or-card-info">
//                   <div className="or-card-id">
//                     #{order._id?.slice(-10).toUpperCase()}
//                     <span style={{ marginLeft: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 400, letterSpacing: 0 }}>
//                       · {fmtRelative(order.date)}
//                     </span>
//                   </div>
//                   <div className="or-card-customer">
//                     {order.address?.firstName} {order.address?.lastName}
//                   </div>
//                   <div className="or-card-preview">{previewText}</div>
//                 </div>

//                 {/* Meta — hidden on mobile */}
//                 <div className="or-card-meta">
//                   <div className="or-meta-line">
//                     <span className="or-meta-ic">📅</span>
//                     <span>{fmtDate(order.date)}</span>
//                   </div>
//                   <div className="or-meta-line">
//                     <span className="or-meta-ic">🛍️</span>
//                     <span>{totalQty} item{totalQty !== 1 ? 's' : ''}</span>
//                   </div>
//                   <div className="or-meta-line">
//                     <span className="or-meta-ic">💳</span>
//                     <span>{order.paymentMethod}</span>
//                     &nbsp;
//                     <span className={`or-badge ${order.payment ? 'or-b-green' : 'or-b-amber'}`}
//                       style={{ fontSize: 10, padding: '1px 6px' }}>
//                       {order.payment ? 'Paid' : 'Pending'}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Amount — hidden on mobile */}
//                 <div className="or-card-amount">
//                   <div className="or-amount">{currency}{order.amount}</div>
//                   <div className="or-amount-sub">Order total</div>
//                 </div>

//                 {/* Status select + expand — stop propagation so row doesn't toggle */}
//                 <div className="or-card-actions" onClick={e => e.stopPropagation()}>
//                   <select
//                     className={`or-status-sel ${selCls}`}
//                     value={order.status}
//                     disabled={isUpdating}
//                     onChange={e => statusHandler(e.target.value, order._id)}
//                   >
//                     {STATUS_STEPS.map(s => (
//                       <option key={s} value={s}>{STATUS_EMOJI[s]} {s}</option>
//                     ))}
//                     <option value="Cancelled">❌ Cancelled</option>
//                   </select>
//                   <button
//                     className={`or-expand-btn ${isExpanded ? 'open' : ''}`}
//                     onClick={() => setExpandedId(isExpanded ? null : order._id)}
//                     title={isExpanded ? 'Collapse' : 'See details'}
//                   >▼</button>
//                 </div>
//               </div>

//               {/* ── MOBILE BOTTOM BAR ── */}
//               <div className="or-mobile-bar">
//                 <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
//                   <span className={`or-badge ${badgeCls}`}>{STATUS_EMOJI[order.status]} {order.status}</span>
//                   <span className={`or-badge ${order.payment ? 'or-b-green' : 'or-b-amber'}`}>
//                     {order.payment ? '✓ Paid' : '⏳ Pending'}
//                   </span>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                   <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15 }}>{currency}{order.amount}</div>
//                   <button className="or-btn or-btn-ghost or-btn-sm"
//                     onClick={() => setExpandedId(isExpanded ? null : order._id)}>
//                     {isExpanded ? '▲ Hide' : '▼ Details'}
//                   </button>
//                 </div>
//               </div>

//               {/* ─────────────────────────────────────────
//                   EXPANDED DETAILS
//               ───────────────────────────────────────── */}
//               {isExpanded && (
//                 <div className="or-details">

//                   {/* COL 1 — Items */}
//                   <div className="or-det-col">
//                     <div className="or-det-title">🛍️ Order Items
//                       <span className="or-badge or-b-gray" style={{ fontSize: 10, padding: '1px 6px' }}>
//                         {order.items?.length} product{order.items?.length !== 1 ? 's' : ''}
//                       </span>
//                     </div>

//                     {order.items?.map((item, ii) => {
//                       const qty = safeQty(item.quantity);
//                       const size = safeSize(item.size);
//                       const color = safeColor(item.color);
//                       const img = Array.isArray(item.image) ? item.image[0] : item.image;
//                       const lineTotal = item.price ? (+item.price * qty) : null;

//                       return (
//                         <div key={ii} className="or-item">
//                           {img
//                             ? <img className="or-item-thumb" src={img} alt={item.name} />
//                             : <div className="or-item-thumb-ph">👕</div>
//                           }
//                           <div style={{ flex: 1, minWidth: 0 }}>
//                             <div className="or-item-name">{item.name}</div>
//                             {(size || color) && (
//                               <div className="or-item-attr">
//                                 {size && <span>Size: {size}</span>}
//                                 {color && <span style={{ backgroundColor: color.startsWith('#') ? color : undefined }}>{color.startsWith('#') ? '' : `Color: ${color}`}</span>}
//                               </div>
//                             )}
//                           </div>
//                           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
//                             <span className="or-item-qty">×{qty}</span>
//                             {lineTotal && <span className="or-item-price">{currency}{lineTotal.toFixed(0)}</span>}
//                           </div>
//                         </div>
//                       );
//                     })}

//                     {/* Order total at bottom */}
//                     <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--border2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <span style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 500 }}>
//                         {totalQty} item{totalQty !== 1 ? 's' : ''} · {order.paymentMethod}
//                       </span>
//                       <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16 }}>
//                         {currency}{order.amount}
//                       </span>
//                     </div>
//                   </div>

//                   {/* COL 2 — Address + Payment */}
//                   <div className="or-det-col">
//                     <div className="or-det-title">📍 Delivery Address</div>
//                     <div className="or-addr">
//                       <div className="or-addr-map-ic">🗺️</div>
//                       <div className="or-addr-name">{order.address?.firstName} {order.address?.lastName}</div>
//                       <div className="or-addr-line">{order.address?.street}</div>
//                       <div className="or-addr-line">
//                         {[order.address?.city, order.address?.state, order.address?.country].filter(Boolean).join(', ')}
//                       </div>
//                       {order.address?.zipcode && (
//                         <div className="or-addr-line">PIN: {order.address.zipcode}</div>
//                       )}
//                       {order.address?.phone && (
//                         <div>
//                           <span className="or-addr-phone">📞 {order.address.phone}</span>
//                           <span
//                             className="or-addr-copy"
//                             onClick={() => { navigator.clipboard?.writeText(order.address.phone); toast.success('Phone copied!'); }}
//                           >📋 Copy</span>
//                         </div>
//                       )}
//                       {order.address?.email && (
//                         <div style={{ marginTop: 6 }}>
//                           <span className="or-addr-phone">✉️ {order.address.email}</span>
//                         </div>
//                       )}
//                     </div>

//                     <div className="or-det-title" style={{ marginTop: 18 }}>💳 Payment Details</div>
//                     <div>
//                       {[
//                         ['Order ID', <span style={{ fontFamily: 'monospace', fontSize: 11.5, color: 'var(--muted)' }}>#{order._id?.slice(-12).toUpperCase()}</span>],
//                         ['Date', fmtDate(order.date) + (order.date ? ` · ${fmtTime(order.date)}` : '')],
//                         ['Method', order.paymentMethod || '—'],
//                         ['Status', <span className={`or-badge ${order.payment ? 'or-b-green' : 'or-b-amber'}`}>{order.payment ? '✓ Paid' : '⏳ Pending'}</span>],
//                         ['Total', <strong style={{ fontFamily: "'Syne', sans-serif", fontSize: 15 }}>{currency}{order.amount}</strong>],
//                       ].map(([k, v], i) => (
//                         <div key={i} className="or-pay-row">
//                           <span className="or-pay-k">{k}</span>
//                           <span className="or-pay-v">{v}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* COL 3 — Status tracker + Quick actions */}
//                   <div className="or-det-col">
//                     <div className="or-det-title">📊 Fulfillment Progress</div>

//                     {order.status === 'Cancelled' ? (
//                       <div style={{ padding: '12px 14px', background: 'var(--red-bg)', border: '1px solid var(--red-border)', borderRadius: 'var(--r-sm)', fontSize: 13, color: 'var(--red)', fontWeight: 600, marginBottom: 16 }}>
//                         ❌ This order has been cancelled.
//                       </div>
//                     ) : (
//                       <StatusTracker status={order.status} />
//                     )}

//                     <div className="or-det-title" style={{ marginTop: order.status === 'Cancelled' ? 4 : 18 }}>⚡ Quick Update</div>

//                     {/* Forward steps only */}
//                     {nextSteps.map(s => (
//                       <button key={s}
//                         className="or-qbtn"
//                         disabled={isUpdating}
//                         onClick={() => statusHandler(s, order._id)}
//                       >
//                         {STATUS_EMOJI[s]}
//                         <span>Mark as {s}</span>
//                         {isUpdating && <span style={{ marginLeft: 'auto', fontSize: 11 }}>…</span>}
//                       </button>
//                     ))}

//                     {/* Also show previous step if needed to go back */}
//                     {stepIdx > 0 && order.status !== 'Cancelled' && (
//                       <button
//                         className="or-qbtn"
//                         style={{ borderStyle: 'dashed', opacity: .65 }}
//                         disabled={isUpdating}
//                         onClick={() => statusHandler(STATUS_STEPS[stepIdx - 1], order._id)}
//                       >
//                         ← Revert to {STATUS_STEPS[stepIdx - 1]}
//                       </button>
//                     )}

//                     {/* Cancel order */}
//                     {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
//                       <button
//                         className="or-qbtn or-qbtn-cancel"
//                         disabled={isUpdating}
//                         onClick={() => { if (window.confirm('Cancel this order?')) statusHandler('Cancelled', order._id); }}
//                       >
//                         ❌ Cancel Order
//                       </button>
//                     )}

//                     {/* Tip box */}
//                     <div className="or-note">
//                       💡 Use the dropdown or quick buttons to update order status. Changes are saved instantly.
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Orders;






// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl, currency } from '../../App';
// import {
//   TbPackage, TbCurrencyRupee, TbCircleCheck, TbTruck,
//   TbSun, TbSearch, TbX, TbRefresh, TbChevronDown,
//   TbPhone, TbMail, TbMapPin, TbCopy,
//   TbShoppingBag, TbCreditCard, TbCalendar,
//   TbAlertCircle, TbArrowRight, TbDownload,
//   TbCheck, TbBan, TbArrowBack, TbBolt, TbChartBar
// } from 'react-icons/tb';

// const STATUS_STEPS = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];
// const ALL_STATUSES = [...STATUS_STEPS, 'Cancelled'];

// const STATUS_CFG = {
//   'Order Placed': { emoji: '📦', dot: 'bg-blue-500', badge: 'bg-blue-50 text-blue-700 border-blue-200', bar: 'from-blue-500 to-blue-400', select: 'bg-blue-50 text-blue-700 border-blue-300', label: 'Order Placed' },
//   'Packing': { emoji: '📫', dot: 'bg-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'from-amber-500 to-yellow-400', select: 'bg-amber-50 text-amber-700 border-amber-300', label: 'Packing' },
//   'Shipped': { emoji: '🚚', dot: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 border-violet-200', bar: 'from-violet-600 to-violet-400', select: 'bg-violet-50 text-violet-700 border-violet-300', label: 'Shipped' },
//   'Out for delivery': { emoji: '🏃', dot: 'bg-cyan-500', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', bar: 'from-cyan-500 to-sky-400', select: 'bg-cyan-50 text-cyan-700 border-cyan-300', label: 'Out for Delivery' },
//   'Delivered': { emoji: '✅', dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'from-emerald-500 to-green-400', select: 'bg-emerald-50 text-emerald-700 border-emerald-300', label: 'Delivered' },
//   'Cancelled': { emoji: '❌', dot: 'bg-red-400', badge: 'bg-red-50 text-red-600 border-red-200', bar: 'from-red-500 to-red-400', select: 'bg-red-50 text-red-600 border-red-300', label: 'Cancelled' },
// };

// const safeQty = (q) => typeof q === 'object' ? (q?.quantity ?? 1) : (+q || 1);
// const safeSize = (s) => typeof s === 'object' ? (s?.label || s?.value || '') : (s || '');
// const safeColor = (c) => typeof c === 'object' ? (c?.name || '') : (c || '');
// const fmtDate = (ts) => ts ? new Date(ts).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
// const fmtTime = (ts) => ts ? new Date(ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '';
// const fmtRel = (ts) => {
//   if (!ts) return '';
//   const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
//   if (m < 1) return 'just now';
//   if (m < 60) return `${m}m ago`;
//   const h = Math.floor(m / 60);
//   if (h < 24) return `${h}h ago`;
//   return `${Math.floor(h / 24)}d ago`;
// };

// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CFG[status] || STATUS_CFG['Order Placed'];
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold ${cfg.badge}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />{cfg.label}
//     </span>
//   );
// };

// const PayBadge = ({ paid }) => (
//   <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10.5px] font-bold ${paid ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
//     {paid ? <TbCheck size={9} /> : <span className="text-[8px]">⏳</span>}
//     {paid ? 'Paid' : 'Pending'}
//   </span>
// );

// const Skel = ({ className = '' }) => (
//   <div className={`rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite] ${className}`} />
// );

// const StatCard = ({ icon, value, label, iconBg, delay = 0 }) => (
//   <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
//     style={{ animation: `fadeUp 0.4s ease ${delay}s both` }}>
//     <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconBg}`}>{icon}</div>
//     <div className="text-[22px] font-extrabold text-gray-900 leading-none tracking-tight">{value}</div>
//     <div className="text-[11.5px] text-gray-400 font-medium mt-1">{label}</div>
//   </div>
// );

// const StatusTracker = ({ status }) => {
//   const cur = STATUS_STEPS.indexOf(status);
//   return (
//     <div className="flex items-start w-full">
//       {STATUS_STEPS.map((step, i) => {
//         const done = cur > i, active = cur === i;
//         return (
//           <div key={step} className="flex-1 flex flex-col items-center relative">
//             {i < STATUS_STEPS.length - 1 && (
//               <div className="absolute top-[11px] left-1/2 w-full h-[2.5px] z-0 transition-all duration-500"
//                 style={{ background: done ? '#10b981' : '#e5e7eb' }} />
//             )}
//             <div className={`relative z-10 w-[23px] h-[23px] rounded-full flex items-center justify-center text-[9px] font-extrabold border-2 transition-all duration-300
//               ${done ? 'bg-emerald-500 border-emerald-500 text-white' : active ? 'bg-gray-900 border-gray-900 text-white ring-4 ring-gray-900/10' : 'bg-gray-100 border-gray-200 text-gray-400'}`}>
//               {done ? <TbCheck size={11} /> : i + 1}
//             </div>
//             <span className={`mt-1.5 text-[9px] font-semibold text-center leading-tight px-0.5 ${done ? 'text-emerald-600' : active ? 'text-gray-900' : 'text-gray-400'}`}>
//               {step === 'Out for delivery' ? 'Out for\nDelivery' : step.replace('Order ', '')}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const QBtn = ({ children, onClick, disabled, variant = 'default' }) => {
//   const v = { default: 'bg-white border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50', cancel: 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100', revert: 'bg-white border-dashed border-gray-300 text-gray-500 hover:border-gray-500' };
//   return (
//     <button onClick={onClick} disabled={disabled}
//       className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-[12.5px] font-semibold transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${v[variant]}`}>
//       {children}
//     </button>
//   );
// };

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedId, setExpandedId] = useState(null);
//   const [updatingId, setUpdatingId] = useState(null);
//   const [copiedId, setCopiedId] = useState(null);
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [payFilter, setPayFilter] = useState('all');
//   const [methodFilter, setMethodFilter] = useState('all');
//   const [dateFilter, setDateFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');

//   const fetchAllOrders = useCallback(async () => {
//     if (!token) return;
//     setLoading(true);
//     try {
//       const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
//       if (res.data.success) setOrders(res.data.orders.reverse());
//       else toast.error(res.data.message);
//     } catch (e) { toast.error(e.message); }
//     finally { setLoading(false); }
//   }, [token]);

//   const statusHandler = useCallback(async (newStatus, orderId) => {
//     setUpdatingId(orderId);
//     try {
//       const res = await axios.post(backendUrl + '/api/order/status', { orderId, status: newStatus }, { headers: { token } });
//       if (res.data.success) { setOrders(p => p.map(o => o._id === orderId ? { ...o, status: newStatus } : o)); toast.success(`Status → ${newStatus}`); }
//       else toast.error(res.data.message);
//     } catch { toast.error('Update failed'); }
//     finally { setUpdatingId(null); }
//   }, [token]);

//   useEffect(() => { fetchAllOrders(); }, [fetchAllOrders]);

//   const copyText = (text, id) => {
//     navigator.clipboard?.writeText(text);
//     setCopiedId(id);
//     toast.success('Copied!');
//     setTimeout(() => setCopiedId(null), 2000);
//   };

//   const payMethods = useMemo(() => [...new Set(orders.map(o => o.paymentMethod).filter(Boolean))], [orders]);

//   const stats = useMemo(() => {
//     const now = new Date();
//     const isToday = ts => { const d = new Date(ts); return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); };
//     return {
//       total: orders.length,
//       revenue: orders.filter(o => o.payment).reduce((s, o) => s + (+o.amount || 0), 0),
//       delivered: orders.filter(o => o.status === 'Delivered').length,
//       active: orders.filter(o => !['Delivered', 'Cancelled'].includes(o.status)).length,
//       today: orders.filter(o => isToday(o.date)).length,
//       pending: orders.filter(o => !o.payment).length,
//     };
//   }, [orders]);

//   const filtered = useMemo(() => {
//     let r = [...orders];
//     if (search.trim()) {
//       const q = search.toLowerCase().trim();
//       r = r.filter(o =>
//         `${o.address?.firstName} ${o.address?.lastName}`.toLowerCase().includes(q) ||
//         o._id?.toLowerCase().includes(q) || o.address?.phone?.includes(q) ||
//         o.address?.email?.toLowerCase().includes(q) || o.items?.some(it => it.name?.toLowerCase().includes(q))
//       );
//     }
//     if (statusFilter !== 'all') r = r.filter(o => o.status === statusFilter);
//     if (payFilter === 'paid') r = r.filter(o => o.payment);
//     if (payFilter === 'pending') r = r.filter(o => !o.payment);
//     if (methodFilter !== 'all') r = r.filter(o => o.paymentMethod === methodFilter);
//     const now = Date.now();
//     if (dateFilter === 'today') r = r.filter(o => { const d = new Date(o.date), n = new Date(); return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); });
//     if (dateFilter === 'week') r = r.filter(o => now - new Date(o.date).getTime() < 7 * 86400000);
//     if (dateFilter === 'month') r = r.filter(o => now - new Date(o.date).getTime() < 30 * 86400000);
//     if (sortBy === 'newest') r.sort((a, b) => new Date(b.date) - new Date(a.date));
//     if (sortBy === 'oldest') r.sort((a, b) => new Date(a.date) - new Date(b.date));
//     if (sortBy === 'amount-h') r.sort((a, b) => (+b.amount || 0) - (+a.amount || 0));
//     if (sortBy === 'amount-l') r.sort((a, b) => (+a.amount || 0) - (+b.amount || 0));
//     if (sortBy === 'name') r.sort((a, b) => `${a.address?.firstName}`.localeCompare(`${b.address?.firstName}`));
//     return r;
//   }, [orders, search, statusFilter, payFilter, methodFilter, dateFilter, sortBy]);

//   const hasFilters = search || statusFilter !== 'all' || payFilter !== 'all' || methodFilter !== 'all' || dateFilter !== 'all';
//   const clearFilters = () => { setSearch(''); setStatusFilter('all'); setPayFilter('all'); setMethodFilter('all'); setDateFilter('all'); };

//   return (
//     <div className="min-h-screen bg-[#f7f8fa]">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
//         .op { font-family: 'Outfit', sans-serif; }
//         .dmono { font-family: 'DM Mono', monospace; }
//         @keyframes fadeUp    { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes slideDown { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes shimmer   { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
//         @keyframes sp        { to{transform:rotate(360deg)} }
//         .sp  { animation: sp 0.85s linear infinite; }
//         .ce  { animation: fadeUp 0.35s ease both; }
//         .de  { animation: slideDown 0.2s ease both; }
//         .ssel { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 10px center; }
//         .fsel { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 10px center; }
//       `}</style>

//       <div className="op">
//         {/* HEADER */}
//         <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
//           <div className="flex items-center justify-between px-6 h-16">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
//                 <TbShoppingBag size={18} className="text-white" />
//               </div>
//               <div>
//                 <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Orders</h1>
//                 <p className="text-[11px] text-gray-400 mt-0.5 leading-none">{loading ? 'Loading…' : `${orders.length} total orders`}</p>
//               </div>
//               {!loading && stats.active > 0 && (
//                 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[11px] font-bold">
//                   <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />{stats.active} active
//                 </span>
//               )}
//             </div>
//             <div className="flex items-center gap-2">
//               <button onClick={fetchAllOrders} disabled={loading}
//                 className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 bg-white text-[12.5px] font-semibold text-gray-600 hover:bg-gray-50 transition-all disabled:opacity-50">
//                 <TbRefresh size={14} className={loading ? 'sp' : ''} />Refresh
//               </button>
//               <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-[12.5px] font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm">
//                 <TbDownload size={14} />Export
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="px-6 py-5 max-w-[1400px] mx-auto">
//           {/* STATS */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
//             {[
//               { icon: <TbPackage size={18} className="text-indigo-600" />, iconBg: 'bg-indigo-50', value: loading ? '—' : stats.total, label: 'Total Orders', delay: 0 },
//               { icon: <TbCurrencyRupee size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : `${currency}${stats.revenue.toLocaleString('en-IN')}`, label: 'Revenue', delay: .05 },
//               { icon: <TbCircleCheck size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : stats.delivered, label: 'Delivered', delay: .08 },
//               { icon: <TbTruck size={18} className="text-amber-600" />, iconBg: 'bg-amber-50', value: loading ? '—' : stats.active, label: 'In Progress', delay: .12 },
//               { icon: <TbSun size={18} className="text-violet-600" />, iconBg: 'bg-violet-50', value: loading ? '—' : stats.today, label: "Today's Orders", delay: .16 },
//               { icon: <TbCreditCard size={18} className="text-red-500" />, iconBg: 'bg-red-50', value: loading ? '—' : stats.pending, label: 'Unpaid', delay: .20 },
//             ].map((s, i) => <StatCard key={i} {...s} />)}
//           </div>

//           {/* TOOLBAR */}
//           <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 mb-4">
//             <div className="flex flex-wrap items-center gap-3">
//               <div className="relative flex-1 min-w-[200px]">
//                 <TbSearch size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input type="text" value={search} onChange={e => setSearch(e.target.value)}
//                   placeholder="Search name, order ID, phone, item…"
//                   className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all" />
//                 {search && (
//                   <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
//                     <TbX size={10} className="text-gray-600" />
//                   </button>
//                 )}
//               </div>
//               {[
//                 { val: statusFilter, set: setStatusFilter, opts: [['all', 'All Statuses'], ...ALL_STATUSES.map(s => [s, s])] },
//                 { val: payFilter, set: setPayFilter, opts: [['all', 'All Payments'], ['paid', '✓ Paid'], ['pending', '⏳ Unpaid']] },
//                 ...(payMethods.length > 1 ? [{ val: methodFilter, set: setMethodFilter, opts: [['all', 'All Methods'], ...payMethods.map(m => [m, m])] }] : []),
//                 { val: dateFilter, set: setDateFilter, opts: [['all', 'All Time'], ['today', 'Today'], ['week', 'This Week'], ['month', 'This Month']] },
//                 { val: sortBy, set: setSortBy, opts: [['newest', '↓ Newest'], ['oldest', '↑ Oldest'], ['amount-h', '₹ High–Low'], ['amount-l', '₹ Low–High'], ['name', 'A–Z Name']] },
//               ].map((s, i) => (
//                 <select key={i} value={s.val} onChange={e => s.set(e.target.value)}
//                   className="fsel px-3 pr-8 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 cursor-pointer hover:border-gray-300 transition-all">
//                   {s.opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
//                 </select>
//               ))}
//               {hasFilters && (
//                 <button onClick={clearFilters} className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-red-200 bg-red-50 text-[12.5px] font-semibold text-red-600 hover:bg-red-100 transition-all whitespace-nowrap">
//                   <TbX size={13} /> Clear
//                 </button>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 gap-3 flex-wrap">
//               <p className="text-[12.5px] text-gray-400">
//                 {loading ? 'Loading…' : <>Showing <strong className="text-gray-700">{filtered.length}</strong> of <strong className="text-gray-700">{orders.length}</strong> orders</>}
//               </p>
//               <div className="flex items-center gap-1.5 flex-wrap">
//                 {ALL_STATUSES.map(s => {
//                   const cnt = orders.filter(o => o.status === s).length;
//                   if (!cnt) return null;
//                   const cfg = STATUS_CFG[s];
//                   return (
//                     <button key={s} onClick={() => setStatusFilter(statusFilter === s ? 'all' : s)}
//                       className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[10.5px] font-semibold transition-all ${statusFilter === s ? cfg.badge : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'}`}>
//                       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//                       {cfg.label} <span className="opacity-60">({cnt})</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ORDER LIST */}
//           <div className="flex flex-col gap-3">
//             {/* Skeleton */}
//             {loading && [0, .06, .12, .18, .22].map((d, i) => (
//               <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ce" style={{ animationDelay: `${d}s` }}>
//                 <div className="h-[3px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite]" />
//                 <div className="p-4 flex items-center gap-4">
//                   <Skel className="w-11 h-11 rounded-xl flex-shrink-0" />
//                   <div className="flex-1 space-y-2"><Skel className="w-20 h-3" /><Skel className="w-36 h-4" /><Skel className="w-56 h-3" /></div>
//                   <div className="hidden sm:flex flex-col items-end gap-2"><Skel className="w-20 h-3" /><Skel className="w-14 h-3" /></div>
//                   <Skel className="w-24 h-8 rounded-xl flex-shrink-0" />
//                 </div>
//               </div>
//             ))}

//             {/* Empty */}
//             {!loading && filtered.length === 0 && (
//               <div className="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-20 ce">
//                 <div className="text-5xl mb-4">📭</div>
//                 <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">No orders found</h3>
//                 <p className="text-[13px] text-gray-400 mb-6">{hasFilters ? 'Adjust your filters or clear them' : 'Orders will appear here once customers place them'}</p>
//                 {hasFilters && (
//                   <button onClick={clearFilters} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-[13px] font-semibold hover:bg-indigo-700 transition-all shadow-sm">
//                     <TbX size={14} /> Clear All Filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {/* Orders */}
//             {!loading && filtered.map((order, idx) => {
//               const isExpanded = expandedId === order._id;
//               const isUpdating = updatingId === order._id;
//               const cfg = STATUS_CFG[order.status] || STATUS_CFG['Order Placed'];
//               const stepIdx = STATUS_STEPS.indexOf(order.status);
//               const nextSteps = STATUS_STEPS.filter(s => STATUS_STEPS.indexOf(s) > stepIdx);
//               const totalQty = order.items?.reduce((s, it) => s + safeQty(it.quantity), 0) || 0;
//               const preview = order.items?.map(it => `${it.name} ×${safeQty(it.quantity)}`).join(' · ') || '—';

//               return (
//                 <div key={order._id}
//                   className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ce ${isExpanded ? 'border-indigo-200 shadow-md' : 'border-gray-100 hover:shadow-md hover:-translate-y-0.5'}`}
//                   style={{ animationDelay: `${Math.min(idx, 8) * 0.045}s` }}>

//                   <div className={`h-[3px] bg-gradient-to-r ${cfg.bar}`} />

//                   {/* Summary row */}
//                   <div className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
//                     onClick={() => setExpandedId(isExpanded ? null : order._id)}>
//                     <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border text-xl ${cfg.badge}`}>
//                       {cfg.emoji}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 mb-0.5">
//                         <span className="dmono text-[10px] text-gray-400 tracking-wider">#{order._id?.slice(-10).toUpperCase()}</span>
//                         <span className="text-[10px] text-gray-300">·</span>
//                         <span className="text-[10px] text-gray-400">{fmtRel(order.date)}</span>
//                       </div>
//                       <p className="text-[15px] font-bold text-gray-900 leading-tight">{order.address?.firstName} {order.address?.lastName}</p>
//                       <p className="text-[12px] text-gray-400 mt-0.5 truncate">{preview}</p>
//                     </div>
//                     <div className="hidden lg:flex flex-col items-end gap-1.5 flex-shrink-0">
//                       <span className="text-[12px] text-gray-500 flex items-center gap-1"><TbCalendar size={11} className="text-gray-400" />{fmtDate(order.date)}</span>
//                       <span className="text-[12px] text-gray-500 flex items-center gap-1"><TbShoppingBag size={11} className="text-gray-400" />{totalQty} item{totalQty !== 1 ? 's' : ''}</span>
//                       <div className="flex items-center gap-1.5">
//                         <span className="text-[11.5px] text-gray-400">{order.paymentMethod}</span>
//                         <PayBadge paid={order.payment} />
//                       </div>
//                     </div>
//                     <div className="hidden md:block text-right flex-shrink-0 min-w-[78px]">
//                       <div className="text-[18px] font-extrabold text-gray-900 tracking-tight leading-none">{currency}{order.amount}</div>
//                       <div className="text-[10px] text-gray-400 mt-0.5">Order total</div>
//                     </div>
//                     <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
//                       <select value={order.status} disabled={isUpdating}
//                         onChange={e => statusHandler(e.target.value, order._id)}
//                         className={`ssel pl-3 pr-8 py-2 rounded-xl border text-[12px] font-bold outline-none cursor-pointer transition-all disabled:opacity-60 ${cfg.select}`}>
//                         {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
//                       </select>
//                       {isUpdating && <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full sp flex-shrink-0" />}
//                       <button onClick={() => setExpandedId(isExpanded ? null : order._id)}
//                         className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${isExpanded ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}>
//                         <TbChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Mobile strip */}
//                   <div className="sm:hidden flex items-center justify-between px-5 py-2.5 border-t border-gray-50 bg-gray-50/50">
//                     <div className="flex items-center gap-1.5">
//                       <StatusBadge status={order.status} />
//                       <PayBadge paid={order.payment} />
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-[14px] font-extrabold text-gray-900">{currency}{order.amount}</span>
//                       <button onClick={() => setExpandedId(isExpanded ? null : order._id)} className="text-[12px] font-semibold text-indigo-600">
//                         {isExpanded ? '▲ Hide' : '▼ Details'}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Expanded details */}
//                   {isExpanded && (
//                     <div className="de border-t border-gray-100 bg-[#fafbfc]">
//                       <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

//                         {/* COL 1: Items */}
//                         <div className="p-5">
//                           <div className="flex items-center justify-between mb-4">
//                             <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
//                               <TbShoppingBag size={12} />Order Items
//                             </h3>
//                             <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-semibold text-gray-500">
//                               {order.items?.length} product{order.items?.length !== 1 ? 's' : ''}
//                             </span>
//                           </div>
//                           <div className="space-y-0">
//                             {order.items?.map((item, ii) => {
//                               const qty = safeQty(item.quantity), size = safeSize(item.size), color = safeColor(item.color);
//                               const img = Array.isArray(item.image) ? item.image[0] : item.image;
//                               const lineTotal = item.price ? (+item.price * qty) : null;
//                               return (
//                                 <div key={ii} className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
//                                   <div className="w-10 h-10 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex-shrink-0">
//                                     {img ? <img src={img} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-lg">👕</div>}
//                                   </div>
//                                   <div className="flex-1 min-w-0">
//                                     <p className="text-[13px] font-semibold text-gray-800 leading-snug truncate">{item.name}</p>
//                                     {(size || color) && (
//                                       <div className="flex gap-1.5 mt-1 flex-wrap">
//                                         {size && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">Size: {size}</span>}
//                                         {color && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">{color.startsWith('#') ? '●' : (`Color: ${color}`)}</span>}
//                                       </div>
//                                     )}
//                                   </div>
//                                   <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
//                                     <span className="text-[12px] font-bold text-gray-500">×{qty}</span>
//                                     {lineTotal && <span className="text-[12.5px] font-extrabold text-gray-900">{currency}{lineTotal.toFixed(0)}</span>}
//                                   </div>
//                                 </div>
//                               );
//                             })}
//                           </div>
//                           <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
//                             <span className="text-[12px] text-gray-400">{totalQty} item{totalQty !== 1 ? 's' : ''} · {order.paymentMethod}</span>
//                             <span className="text-[17px] font-extrabold text-gray-900">{currency}{order.amount}</span>
//                           </div>
//                         </div>

//                         {/* COL 2: Address + Payment */}
//                         <div className="p-5">
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbMapPin size={12} />Delivery Address
//                           </h3>
//                           <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-5">
//                             <p className="text-[14.5px] font-extrabold text-gray-900 mb-2">{order.address?.firstName} {order.address?.lastName}</p>
//                             <p className="text-[13px] text-gray-600 leading-relaxed">{order.address?.street}</p>
//                             <p className="text-[13px] text-gray-600">{[order.address?.city, order.address?.state, order.address?.country].filter(Boolean).join(', ')}</p>
//                             {order.address?.zipcode && <p className="text-[12.5px] text-gray-400 mt-0.5">PIN: {order.address.zipcode}</p>}
//                             <div className="flex flex-wrap gap-2 mt-3">
//                               {order.address?.phone && (
//                                 <div className="flex items-center gap-1">
//                                   <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] font-semibold text-gray-700">
//                                     <TbPhone size={11} className="text-gray-400" />{order.address.phone}
//                                   </span>
//                                   <button onClick={() => copyText(order.address.phone, order._id + '-ph')}
//                                     className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all">
//                                     {copiedId === order._id + '-ph' ? <TbCheck size={12} /> : <TbCopy size={12} />}
//                                   </button>
//                                 </div>
//                               )}
//                               {order.address?.email && (
//                                 <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] text-gray-600 max-w-full truncate">
//                                   <TbMail size={11} className="text-gray-400 flex-shrink-0" />{order.address.email}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbCreditCard size={12} />Payment Details
//                           </h3>
//                           <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//                             {[
//                               ['Order ID', <span className="dmono text-[11px] text-gray-500">#{order._id?.slice(-12).toUpperCase()}</span>],
//                               ['Date', `${fmtDate(order.date)} · ${fmtTime(order.date)}`],
//                               ['Method', order.paymentMethod || '—'],
//                               ['Status', <PayBadge paid={order.payment} />],
//                               ['Total', <span className="text-[15px] font-extrabold text-gray-900">{currency}{order.amount}</span>],
//                             ].map(([k, v], i) => (
//                               <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-[13px] ${i < 4 ? 'border-b border-gray-50' : ''}`}>
//                                 <span className="text-gray-400 font-medium">{k}</span>
//                                 <span className="font-semibold text-gray-800 text-right">{v}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* COL 3: Tracker + Actions */}
//                         <div className="p-5">
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-4">
//                             <TbChartBar size={12} />Fulfillment Progress
//                           </h3>
//                           {order.status === 'Cancelled' ? (
//                             <div className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-5">
//                               <TbBan size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
//                               <div>
//                                 <p className="text-[13px] font-bold text-red-700">Order Cancelled</p>
//                                 <p className="text-[12px] text-red-400 mt-0.5">This order will not be fulfilled.</p>
//                               </div>
//                             </div>
//                           ) : (
//                             <div className="mb-6"><StatusTracker status={order.status} /></div>
//                           )}
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbBolt size={12} />Quick Update
//                           </h3>
//                           <div className="space-y-2">
//                             {nextSteps.map(s => {
//                               const scfg = STATUS_CFG[s];
//                               return (
//                                 <QBtn key={s} disabled={isUpdating} onClick={() => statusHandler(s, order._id)}>
//                                   <span className={`w-2 h-2 rounded-full flex-shrink-0 ${scfg.dot}`} />
//                                   <span>Mark as <strong>{s}</strong></span>
//                                   <TbArrowRight size={13} className="ml-auto text-gray-400" />
//                                 </QBtn>
//                               );
//                             })}
//                             {stepIdx > 0 && order.status !== 'Cancelled' && (
//                               <QBtn variant="revert" disabled={isUpdating} onClick={() => statusHandler(STATUS_STEPS[stepIdx - 1], order._id)}>
//                                 <TbArrowBack size={13} className="text-gray-400" />
//                                 <span>Revert to <strong>{STATUS_STEPS[stepIdx - 1]}</strong></span>
//                               </QBtn>
//                             )}
//                             {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
//                               <QBtn variant="cancel" disabled={isUpdating}
//                                 onClick={() => { if (window.confirm('Cancel this order?')) statusHandler('Cancelled', order._id); }}>
//                                 <TbBan size={13} />
//                                 <span>Cancel Order</span>
//                               </QBtn>
//                             )}
//                           </div>
//                           <div className="flex items-start gap-2.5 p-3 bg-indigo-50 border border-indigo-100 rounded-xl mt-4">
//                             <TbAlertCircle size={14} className="text-indigo-500 flex-shrink-0 mt-0.5" />
//                             <p className="text-[11.5px] text-indigo-600 leading-relaxed">Use the dropdown or quick buttons to update status. Changes save instantly.</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//           <div className="h-10" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;





// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl, currency } from '../../App';
// import {
//   TbPackage, TbCurrencyRupee, TbCircleCheck, TbTruck,
//   TbSun, TbSearch, TbX, TbRefresh, TbChevronDown,
//   TbPhone, TbMail, TbMapPin, TbCopy,
//   TbShoppingBag, TbCreditCard, TbCalendar,
//   TbAlertCircle, TbArrowRight, TbDownload,
//   TbCheck, TbBan, TbArrowBack, TbBolt, TbChartBar
// } from 'react-icons/tb';

// const STATUS_STEPS = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];
// const ALL_STATUSES = [...STATUS_STEPS, 'Cancelled'];

// const STATUS_CFG = {
//   'Order Placed': { emoji: '📦', dot: 'bg-blue-500', badge: 'bg-blue-50 text-blue-700 border-blue-200', bar: 'from-blue-500 to-blue-400', select: 'bg-blue-50 text-blue-700 border-blue-300', label: 'Order Placed' },
//   'Packing': { emoji: '📫', dot: 'bg-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'from-amber-500 to-yellow-400', select: 'bg-amber-50 text-amber-700 border-amber-300', label: 'Packing' },
//   'Shipped': { emoji: '🚚', dot: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 border-violet-200', bar: 'from-violet-600 to-violet-400', select: 'bg-violet-50 text-violet-700 border-violet-300', label: 'Shipped' },
//   'Out for delivery': { emoji: '🏃', dot: 'bg-cyan-500', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', bar: 'from-cyan-500 to-sky-400', select: 'bg-cyan-50 text-cyan-700 border-cyan-300', label: 'Out for Delivery' },
//   'Delivered': { emoji: '✅', dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'from-emerald-500 to-green-400', select: 'bg-emerald-50 text-emerald-700 border-emerald-300', label: 'Delivered' },
//   'Cancelled': { emoji: '❌', dot: 'bg-red-400', badge: 'bg-red-50 text-red-600 border-red-200', bar: 'from-red-500 to-red-400', select: 'bg-red-50 text-red-600 border-red-300', label: 'Cancelled' },
// };

// const safeQty = (q) => typeof q === 'object' ? (q?.quantity ?? 1) : (+q || 1);
// const safeSize = (s) => typeof s === 'object' ? (s?.label || s?.value || '') : (s || '');
// const safeColor = (c) => typeof c === 'object' ? (c?.name || '') : (c || '');
// const fmtDate = (ts) => ts ? new Date(ts).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
// const fmtTime = (ts) => ts ? new Date(ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '';
// const fmtRel = (ts) => {
//   if (!ts) return '';
//   const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
//   if (m < 1) return 'just now';
//   if (m < 60) return `${m}m ago`;
//   const h = Math.floor(m / 60);
//   if (h < 24) return `${h}h ago`;
//   return `${Math.floor(h / 24)}d ago`;
// };

// const truncate = (str, n = 14) => str ? (str.length > n ? str.slice(0, n - 1) + '…' : str) : '—';

// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CFG[status] || STATUS_CFG['Order Placed'];
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold ${cfg.badge}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />{cfg.label}
//     </span>
//   );
// };

// const PayBadge = ({ paid }) => (
//   <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10.5px] font-bold ${paid ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
//     {paid ? <TbCheck size={9} /> : <span className="text-[8px]">⏳</span>}
//     {paid ? 'Paid' : 'Pending'}
//   </span>
// );

// const Skel = ({ className = '' }) => (
//   <div className={`rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite] ${className}`} />
// );

// const StatCard = ({ icon, value, label, iconBg, delay = 0 }) => (
//   <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
//     style={{ animation: `fadeUp 0.4s ease ${delay}s both` }}>
//     <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconBg}`}>{icon}</div>
//     <div className="text-[22px] font-extrabold text-gray-900 leading-none tracking-tight">{value}</div>
//     <div className="text-[11.5px] text-gray-400 font-medium mt-1">{label}</div>
//   </div>
// );

// const StatusTracker = ({ status }) => {
//   const cur = STATUS_STEPS.indexOf(status);
//   return (
//     <div className="flex items-start w-full">
//       {STATUS_STEPS.map((step, i) => {
//         const done = cur > i, active = cur === i;
//         return (
//           <div key={step} className="flex-1 flex flex-col items-center relative">
//             {i < STATUS_STEPS.length - 1 && (
//               <div className="absolute top-[11px] left-1/2 w-full h-[2.5px] z-0 transition-all duration-500"
//                 style={{ background: done ? '#10b981' : '#e5e7eb' }} />
//             )}
//             <div className={`relative z-10 w-[23px] h-[23px] rounded-full flex items-center justify-center text-[9px] font-extrabold border-2 transition-all duration-300
//               ${done ? 'bg-emerald-500 border-emerald-500 text-white' : active ? 'bg-gray-900 border-gray-900 text-white ring-4 ring-gray-900/10' : 'bg-gray-100 border-gray-200 text-gray-400'}`}>
//               {done ? <TbCheck size={11} /> : i + 1}
//             </div>
//             <span className={`mt-1.5 text-[9px] font-semibold text-center leading-tight px-0.5 ${done ? 'text-emerald-600' : active ? 'text-gray-900' : 'text-gray-400'}`}>
//               {step === 'Out for delivery' ? 'Out for\nDelivery' : step.replace('Order ', '')}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const QBtn = ({ children, onClick, disabled, variant = 'default' }) => {
//   const v = { default: 'bg-white border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50', cancel: 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100', revert: 'bg-white border-dashed border-gray-300 text-gray-500 hover:border-gray-500' };
//   return (
//     <button onClick={onClick} disabled={disabled}
//       className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-[12.5px] font-semibold transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${v[variant]}`}>
//       {children}
//     </button>
//   );
// };

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedId, setExpandedId] = useState(null);
//   const [updatingId, setUpdatingId] = useState(null);
//   const [copiedId, setCopiedId] = useState(null);
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [payFilter, setPayFilter] = useState('all');
//   const [methodFilter, setMethodFilter] = useState('all');
//   const [dateFilter, setDateFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');

//   const fetchAllOrders = useCallback(async () => {
//     if (!token) return;
//     setLoading(true);
//     try {
//       const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
//       if (res.data.success) setOrders(res.data.orders.reverse());
//       else toast.error(res.data.message);
//     } catch (e) { toast.error(e.message); }
//     finally { setLoading(false); }
//   }, [token]);

//   const statusHandler = useCallback(async (newStatus, orderId) => {
//     setUpdatingId(orderId);
//     try {
//       const res = await axios.post(backendUrl + '/api/order/status', { orderId, status: newStatus }, { headers: { token } });
//       if (res.data.success) { setOrders(p => p.map(o => o._id === orderId ? { ...o, status: newStatus } : o)); toast.success(`Status → ${newStatus}`); }
//       else toast.error(res.data.message);
//     } catch { toast.error('Update failed'); }
//     finally { setUpdatingId(null); }
//   }, [token]);

//   useEffect(() => { fetchAllOrders(); }, [fetchAllOrders]);

//   const copyText = (text, id) => {
//     navigator.clipboard?.writeText(text);
//     setCopiedId(id);
//     toast.success('Copied!');
//     setTimeout(() => setCopiedId(null), 2000);
//   };

//   const payMethods = useMemo(() => [...new Set(orders.map(o => o.paymentMethod).filter(Boolean))], [orders]);

//   const stats = useMemo(() => {
//     const now = new Date();
//     const isToday = ts => { const d = new Date(ts); return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); };
//     return {
//       total: orders.length,
//       revenue: orders.filter(o => o.payment).reduce((s, o) => s + (+o.finalAmount || 0), 0),
//       delivered: orders.filter(o => o.status === 'Delivered').length,
//       active: orders.filter(o => !['Delivered', 'Cancelled'].includes(o.status)).length,
//       today: orders.filter(o => isToday(o.date)).length,
//       pending: orders.filter(o => !o.payment).length,
//     };
//   }, [orders]);

//   const filtered = useMemo(() => {
//     let r = [...orders];
//     if (search.trim()) {
//       const q = search.toLowerCase().trim();
//       r = r.filter(o =>
//         `${o.address?.firstName} ${o.address?.lastName}`.toLowerCase().includes(q) ||
//         o._id?.toLowerCase().includes(q) || o.address?.phone?.includes(q) ||
//         o.address?.email?.toLowerCase().includes(q) || o.items?.some(it => it.name?.toLowerCase().includes(q))
//       );
//     }
//     if (statusFilter !== 'all') r = r.filter(o => o.status === statusFilter);
//     if (payFilter === 'paid') r = r.filter(o => o.payment);
//     if (payFilter === 'pending') r = r.filter(o => !o.payment);
//     if (methodFilter !== 'all') r = r.filter(o => o.paymentMethod === methodFilter);
//     const now = Date.now();
//     if (dateFilter === 'today') r = r.filter(o => { const d = new Date(o.date), n = new Date(); return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); });
//     if (dateFilter === 'week') r = r.filter(o => now - new Date(o.date).getTime() < 7 * 86400000);
//     if (dateFilter === 'month') r = r.filter(o => now - new Date(o.date).getTime() < 30 * 86400000);
//     if (sortBy === 'newest') r.sort((a, b) => new Date(b.date) - new Date(a.date));
//     if (sortBy === 'oldest') r.sort((a, b) => new Date(a.date) - new Date(b.date));
//     if (sortBy === 'amount-h') r.sort((a, b) => (+b.finalAmount || 0) - (+a.finalAmount || 0));
//     if (sortBy === 'amount-l') r.sort((a, b) => (+a.finalAmount || 0) - (+b.finalAmount || 0));
//     if (sortBy === 'name') r.sort((a, b) => `${a.address?.firstName}`.localeCompare(`${b.address?.firstName}`));
//     return r;
//   }, [orders, search, statusFilter, payFilter, methodFilter, dateFilter, sortBy]);

//   const hasFilters = search || statusFilter !== 'all' || payFilter !== 'all' || methodFilter !== 'all' || dateFilter !== 'all';
//   const clearFilters = () => { setSearch(''); setStatusFilter('all'); setPayFilter('all'); setMethodFilter('all'); setDateFilter('all'); };

//   return (
//     <div className="min-h-screen bg-[#f7f8fa]">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
//         .op { font-family: 'Outfit', sans-serif; }
//         .dmono { font-family: 'DM Mono', monospace; }
//         @keyframes fadeUp    { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes slideDown { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes shimmer   { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
//         @keyframes sp        { to{transform:rotate(360deg)} }
//         .sp  { animation: sp 0.85s linear infinite; }
//         .ce  { animation: fadeUp 0.35s ease both; }
//         .de  { animation: slideDown 0.2s ease both; }
//         .ssel { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 10px center; }
//         .fsel { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 10px center; }
//       `}</style>

//       <div className="op">
//         {/* HEADER */}
//         <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
//           <div className="flex items-center justify-between px-6 h-16">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
//                 <TbShoppingBag size={18} className="text-white" />
//               </div>
//               <div>
//                 <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Orders</h1>
//                 <p className="text-[11px] text-gray-400 mt-0.5 leading-none">{loading ? 'Loading…' : `${orders.length} total orders`}</p>
//               </div>
//               {!loading && stats.active > 0 && (
//                 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[11px] font-bold">
//                   <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />{stats.active} active
//                 </span>
//               )}
//             </div>
//             <div className="flex items-center gap-2">
//               <button onClick={fetchAllOrders} disabled={loading}
//                 className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 bg-white text-[12.5px] font-semibold text-gray-600 hover:bg-gray-50 transition-all disabled:opacity-50">
//                 <TbRefresh size={14} className={loading ? 'sp' : ''} />Refresh
//               </button>
//               <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-[12.5px] font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm">
//                 <TbDownload size={14} />Export
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="px-6 py-5 max-w-[1400px] mx-auto">
//           {/* STATS */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
//             {[
//               { icon: <TbPackage size={18} className="text-indigo-600" />, iconBg: 'bg-indigo-50', value: loading ? '—' : stats.total, label: 'Total Orders', delay: 0 },
//               { icon: <TbCurrencyRupee size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : `${currency}${stats.revenue.toLocaleString('en-IN')}`, label: 'Revenue', delay: .05 },
//               { icon: <TbCircleCheck size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : stats.delivered, label: 'Delivered', delay: .08 },
//               { icon: <TbTruck size={18} className="text-amber-600" />, iconBg: 'bg-amber-50', value: loading ? '—' : stats.active, label: 'In Progress', delay: .12 },
//               { icon: <TbSun size={18} className="text-violet-600" />, iconBg: 'bg-violet-50', value: loading ? '—' : stats.today, label: "Today's Orders", delay: .16 },
//               { icon: <TbCreditCard size={18} className="text-red-500" />, iconBg: 'bg-red-50', value: loading ? '—' : stats.pending, label: 'Unpaid', delay: .20 },
//             ].map((s, i) => <StatCard key={i} {...s} />)}
//           </div>

//           {/* TOOLBAR */}
//           <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 mb-4">
//             <div className="flex flex-wrap items-center gap-3">
//               <div className="relative flex-1 min-w-[200px]">
//                 <TbSearch size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input type="text" value={search} onChange={e => setSearch(e.target.value)}
//                   placeholder="Search name, order ID, phone, item…"
//                   className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all" />
//                 {search && (
//                   <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
//                     <TbX size={10} className="text-gray-600" />
//                   </button>
//                 )}
//               </div>
//               {[
//                 { val: statusFilter, set: setStatusFilter, opts: [['all', 'All Statuses'], ...ALL_STATUSES.map(s => [s, s])] },
//                 { val: payFilter, set: setPayFilter, opts: [['all', 'All Payments'], ['paid', '✓ Paid'], ['pending', '⏳ Unpaid']] },
//                 ...(payMethods.length > 1 ? [{ val: methodFilter, set: setMethodFilter, opts: [['all', 'All Methods'], ...payMethods.map(m => [m, m])] }] : []),
//                 { val: dateFilter, set: setDateFilter, opts: [['all', 'All Time'], ['today', 'Today'], ['week', 'This Week'], ['month', 'This Month']] },
//                 { val: sortBy, set: setSortBy, opts: [['newest', '↓ Newest'], ['oldest', '↑ Oldest'], ['amount-h', '₹ High–Low'], ['amount-l', '₹ Low–High'], ['name', 'A–Z Name']] },
//               ].map((s, i) => (
//                 <select key={i} value={s.val} onChange={e => s.set(e.target.value)}
//                   className="fsel px-3 pr-8 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 cursor-pointer hover:border-gray-300 transition-all">
//                   {s.opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
//                 </select>
//               ))}
//               {hasFilters && (
//                 <button onClick={clearFilters} className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-red-200 bg-red-50 text-[12.5px] font-semibold text-red-600 hover:bg-red-100 transition-all whitespace-nowrap">
//                   <TbX size={13} /> Clear
//                 </button>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 gap-3 flex-wrap">
//               <p className="text-[12.5px] text-gray-400">
//                 {loading ? 'Loading…' : <>Showing <strong className="text-gray-700">{filtered.length}</strong> of <strong className="text-gray-700">{orders.length}</strong> orders</>}
//               </p>
//               <div className="flex items-center gap-1.5 flex-wrap">
//                 {ALL_STATUSES.map(s => {
//                   const cnt = orders.filter(o => o.status === s).length;
//                   if (!cnt) return null;
//                   const cfg = STATUS_CFG[s];
//                   return (
//                     <button key={s} onClick={() => setStatusFilter(statusFilter === s ? 'all' : s)}
//                       className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[10.5px] font-semibold transition-all ${statusFilter === s ? cfg.badge : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'}`}>
//                       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//                       {cfg.label} <span className="opacity-60">({cnt})</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ORDER LIST */}
//           <div className="flex flex-col gap-3">
//             {/* Skeleton */}
//             {loading && [0, .06, .12, .18, .22].map((d, i) => (
//               <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ce" style={{ animationDelay: `${d}s` }}>
//                 <div className="h-[3px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite]" />
//                 <div className="p-4 flex items-center gap-4">
//                   <Skel className="w-11 h-11 rounded-xl flex-shrink-0" />
//                   <div className="flex-1 space-y-2"><Skel className="w-20 h-3" /><Skel className="w-36 h-4" /><Skel className="w-56 h-3" /></div>
//                   <div className="hidden sm:flex flex-col items-end gap-2"><Skel className="w-20 h-3" /><Skel className="w-14 h-3" /></div>
//                   <Skel className="w-24 h-8 rounded-xl flex-shrink-0" />
//                 </div>
//               </div>
//             ))}

//             {/* Empty */}
//             {!loading && filtered.length === 0 && (
//               <div className="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-20 ce">
//                 <div className="text-5xl mb-4">📭</div>
//                 <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">No orders found</h3>
//                 <p className="text-[13px] text-gray-400 mb-6">{hasFilters ? 'Adjust your filters or clear them' : 'Orders will appear here once customers place them'}</p>
//                 {hasFilters && (
//                   <button onClick={clearFilters} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-[13px] font-semibold hover:bg-indigo-700 transition-all shadow-sm">
//                     <TbX size={14} /> Clear All Filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {/* Orders */}
//             {!loading && filtered.map((order, idx) => {
//               const isExpanded = expandedId === order._id;
//               const isUpdating = updatingId === order._id;
//               const cfg = STATUS_CFG[order.status] || STATUS_CFG['Order Placed'];
//               const stepIdx = STATUS_STEPS.indexOf(order.status);
//               const nextSteps = STATUS_STEPS.filter(s => STATUS_STEPS.indexOf(s) > stepIdx);
//               const totalQty = order.items?.reduce((s, it) => s + safeQty(it.quantity), 0) || 0;
//               const preview = order.items?.map(it => `${it.name} ×${safeQty(it.quantity)}`).join(' · ') || '—';

//               return (
//                 <div key={order._id}
//                   className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ce ${isExpanded ? 'border-indigo-200 shadow-md' : 'border-gray-100 hover:shadow-md hover:-translate-y-0.5'}`}
//                   style={{ animationDelay: `${Math.min(idx, 8) * 0.045}s` }}>

//                   <div className={`h-[3px] bg-gradient-to-r ${cfg.bar}`} />

//                   {/* Summary row */}
//                   <div className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
//                     onClick={() => setExpandedId(isExpanded ? null : order._id)}>
//                     <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border text-xl ${cfg.badge}`}>
//                       {cfg.emoji}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 mb-0.5">
//                         <div className="flex items-center gap-1">
//                           <span className="dmono text-[10px] text-gray-400 tracking-wider flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-md max-w-[120px] truncate">
//                             #{order._id?.toUpperCase()}
//                           </span>
//                           <button onClick={(e) => { e.stopPropagation(); copyText(order._id, order._id + '-top-oid'); }}
//                             className="w-5 h-5 flex items-center justify-center rounded-md bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all">
//                             {copiedId === order._id + '-top-oid' ? <TbCheck size={10} /> : <TbCopy size={10} />}
//                           </button>
//                         </div>
//                         <span className="text-[10px] text-gray-300">·</span>
//                         <span className="text-[10px] text-gray-400">{fmtRel(order.date)}</span>
//                       </div>
//                       <p className="text-[15px] font-bold text-gray-900 leading-tight">{order.address?.firstName} {order.address?.lastName}</p>
//                       <p className="text-[12px] text-gray-400 mt-0.5 truncate">{preview}</p>
//                     </div>
//                     <div className="hidden lg:flex flex-col items-end gap-1.5 flex-shrink-0">
//                       <span className="text-[12px] text-gray-500 flex items-center gap-1"><TbCalendar size={11} className="text-gray-400" />{fmtDate(order.date)}</span>
//                       <span className="text-[12px] text-gray-500 flex items-center gap-1"><TbShoppingBag size={11} className="text-gray-400" />{totalQty} item{totalQty !== 1 ? 's' : ''}</span>
//                       <div className="flex items-center gap-1.5">
//                         <span className="text-[11.5px] text-gray-400">{order.paymentMethod}</span>
//                         <PayBadge paid={order.payment} />
//                       </div>
//                     </div>
//                     <div className="hidden md:block text-right flex-shrink-0 min-w-[78px]">
//                       <div className="text-[18px] font-extrabold text-gray-900 tracking-tight leading-none">{currency}{order.finalAmount}</div>
//                       <div className="text-[10px] text-gray-400 mt-0.5">Order total</div>
//                     </div>
//                     <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
//                       <select value={order.status} disabled={isUpdating}
//                         onChange={e => statusHandler(e.target.value, order._id)}
//                         className={`ssel pl-3 pr-8 py-2 rounded-xl border text-[12px] font-bold outline-none cursor-pointer transition-all disabled:opacity-60 ${cfg.select}`}>
//                         {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
//                       </select>
//                       {isUpdating && <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full sp flex-shrink-0" />}
//                       <button onClick={() => setExpandedId(isExpanded ? null : order._id)}
//                         className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${isExpanded ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}>
//                         <TbChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Mobile strip */}
//                   <div className="sm:hidden flex items-center justify-between px-5 py-2.5 border-t border-gray-50 bg-gray-50/50">
//                     <div className="flex items-center gap-1.5">
//                       <StatusBadge status={order.status} />
//                       <PayBadge paid={order.payment} />
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-[14px] font-extrabold text-gray-900">{currency}{order.finalAmount}</span>
//                       <button onClick={() => setExpandedId(isExpanded ? null : order._id)} className="text-[12px] font-semibold text-indigo-600">
//                         {isExpanded ? '▲ Hide' : '▼ Details'}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Expanded details */}
//                   {isExpanded && (
//                     <div className="de border-t border-gray-100 bg-[#fafbfc]">
//                       <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

//                         {/* COL 1: Items */}
//                         <div className="p-5">
//                           <div className="flex items-center justify-between mb-4">
//                             <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
//                               <TbShoppingBag size={12} />Order Items
//                             </h3>
//                             <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-semibold text-gray-500">
//                               {order.items?.length} product{order.items?.length !== 1 ? 's' : ''}
//                             </span>
//                           </div>
//                           <div className="space-y-0">
//                             {order.items?.map((item, ii) => {
//                               const qty = safeQty(item.quantity), size = safeSize(item.size), color = safeColor(item.color);
//                               const img = Array.isArray(item.image) ? item.image[0] : item.image;
//                               const lineTotal = item.subtotal ? (+item.subtotal) : (item.price ? (+item.price * qty) : null);
//                               return (
//                                 <div key={ii} className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
//                                   <div className="w-10 h-10 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex-shrink-0">
//                                     {img ? <img src={img} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-lg">👕</div>}
//                                   </div>
//                                   <div className="flex-1 min-w-0">
//                                     <p className="text-[13px] font-semibold text-gray-800 leading-snug truncate">{item.name}</p>
//                                     {(size || color) && (
//                                       <div className="flex gap-1.5 mt-1 flex-wrap">
//                                         {size && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">Size: {size}</span>}
//                                         {color && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">{color.startsWith('#') ? '●' : (`Color: ${color}`)}</span>}
//                                       </div>
//                                     )}
//                                   </div>
//                                   <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
//                                     <span className="text-[12px] font-bold text-gray-500">×{qty}</span>
//                                     {lineTotal && <span className="text-[12.5px] font-extrabold text-gray-900">{currency}{lineTotal.toFixed(0)}</span>}
//                                   </div>
//                                 </div>
//                               );
//                             })}
//                           </div>
//                           <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
//                             <span className="text-[12px] text-gray-400">{totalQty} item{totalQty !== 1 ? 's' : ''} · {order.paymentMethod}</span>
//                             <span className="text-[17px] font-extrabold text-gray-900">{currency}{order.finalAmount}</span>
//                           </div>
//                         </div>

//                         {/* COL 2: Address + Payment */}
//                         <div className="p-5">
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbMapPin size={12} />Delivery Address
//                           </h3>
//                           <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-5">
//                             <p className="text-[14.5px] font-extrabold text-gray-900 mb-2">{order.address?.firstName} {order.address?.lastName}</p>
//                             <p className="text-[13px] text-gray-600 leading-relaxed">{order.address?.street}</p>
//                             <p className="text-[13px] text-gray-600">{[order.address?.city, order.address?.state, order.address?.country].filter(Boolean).join(', ')}</p>
//                             {order.address?.zipcode && <p className="text-[12.5px] text-gray-400 mt-0.5">PIN: {order.address.zipcode}</p>}
//                             <div className="flex flex-wrap gap-2 mt-3">
//                               {order.address?.phone && (
//                                 <div className="flex items-center gap-1">
//                                   <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] font-semibold text-gray-700">
//                                     <TbPhone size={11} className="text-gray-400" />{order.address.phone}
//                                   </span>
//                                   <button onClick={() => copyText(order.address.phone, order._id + '-ph')}
//                                     className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all">
//                                     {copiedId === order._id + '-ph' ? <TbCheck size={12} /> : <TbCopy size={12} />}
//                                   </button>
//                                 </div>
//                               )}
//                               {order.address?.email && (
//                                 <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] text-gray-600 max-w-full truncate">
//                                   <TbMail size={11} className="text-gray-400 flex-shrink-0" />{order.address.email}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbCreditCard size={12} />Payment Details
//                           </h3>
//                           <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//                             {[
//                               ['Order ID', (
//                                 <div className="flex items-center gap-1">
//                                   <span className="dmono text-[11px] text-gray-500 flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg max-w-[200px] truncate">
//                                     #{order._id?.toUpperCase()}
//                                   </span>
//                                   <button onClick={() => copyText(order._id, order._id + '-oid')}
//                                     className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all">
//                                     {copiedId === order._id + '-oid' ? <TbCheck size={12} /> : <TbCopy size={12} />}
//                                   </button>
//                                 </div>
//                               )],
//                               ['Payment ID', order.paymentId ? (
//                                 <div className="flex items-center gap-1">
//                                   <span className="dmono text-[11px] text-gray-500 flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg max-w-[200px] truncate">
//                                     {order.paymentId}
//                                   </span>
//                                   <button onClick={() => copyText(order.paymentId, order._id + '-pid')}
//                                     className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all">
//                                     {copiedId === order._id + '-pid' ? <TbCheck size={12} /> : <TbCopy size={12} />}
//                                   </button>
//                                 </div>
//                               ) : '—'],
//                               ['Date', `${fmtDate(order.date)} · ${fmtTime(order.date)}`],
//                               ['Method', order.paymentMethod || '—'],
//                               ['Status', <PayBadge paid={order.payment} />],
//                               ['Total', <span className="text-[15px] font-extrabold text-gray-900">{currency}{order.finalAmount}</span>],
//                             ].map(([k, v], i) => (
//                               <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-[13px] ${i < 5 ? 'border-b border-gray-50' : ''}`}>
//                                 <span className="text-gray-400 font-medium">{k}</span>
//                                 <span className="font-semibold text-gray-800 text-right">{v}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* COL 3: Tracker + Actions */}
//                         <div className="p-5">
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-4">
//                             <TbChartBar size={12} />Fulfillment Progress
//                           </h3>
//                           {order.status === 'Cancelled' ? (
//                             <div className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-5">
//                               <TbBan size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
//                               <div>
//                                 <p className="text-[13px] font-bold text-red-700">Order Cancelled</p>
//                                 <p className="text-[12px] text-red-400 mt-0.5">This order will not be fulfilled.</p>
//                               </div>
//                             </div>
//                           ) : (
//                             <div className="mb-6"><StatusTracker status={order.status} /></div>
//                           )}
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbBolt size={12} />Quick Update
//                           </h3>
//                           <div className="space-y-2">
//                             {nextSteps.map(s => {
//                               const scfg = STATUS_CFG[s];
//                               return (
//                                 <QBtn key={s} disabled={isUpdating} onClick={() => statusHandler(s, order._id)}>
//                                   <span className={`w-2 h-2 rounded-full flex-shrink-0 ${scfg.dot}`} />
//                                   <span>Mark as <strong>{s}</strong></span>
//                                   <TbArrowRight size={13} className="ml-auto text-gray-400" />
//                                 </QBtn>
//                               );
//                             })}
//                             {stepIdx > 0 && order.status !== 'Cancelled' && (
//                               <QBtn variant="revert" disabled={isUpdating} onClick={() => statusHandler(STATUS_STEPS[stepIdx - 1], order._id)}>
//                                 <TbArrowBack size={13} className="text-gray-400" />
//                                 <span>Revert to <strong>{STATUS_STEPS[stepIdx - 1]}</strong></span>
//                               </QBtn>
//                             )}
//                             {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
//                               <QBtn variant="cancel" disabled={isUpdating}
//                                 onClick={() => { if (window.confirm('Cancel this order?')) statusHandler('Cancelled', order._id); }}>
//                                 <TbBan size={13} />
//                                 <span>Cancel Order</span>
//                               </QBtn>
//                             )}
//                           </div>
//                           <div className="flex items-start gap-2.5 p-3 bg-indigo-50 border border-indigo-100 rounded-xl mt-4">
//                             <TbAlertCircle size={14} className="text-indigo-500 flex-shrink-0 mt-0.5" />
//                             <p className="text-[11.5px] text-indigo-600 leading-relaxed">Use the dropdown or quick buttons to update status. Changes save instantly.</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//           <div className="h-10" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;







// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl, currency } from '../../App';
// import {
//   TbPackage, TbCurrencyRupee, TbCircleCheck, TbTruck,
//   TbSun, TbSearch, TbX, TbRefresh, TbChevronDown,
//   TbPhone, TbMail, TbMapPin, TbCopy,
//   TbShoppingBag, TbCreditCard, TbCalendar,
//   TbAlertCircle, TbArrowRight, TbDownload,
//   TbCheck, TbBan, TbArrowBack, TbBolt, TbChartBar,
//   TbFileExport,
// } from 'react-icons/tb';

// /* ═══════════════════ CONSTANTS ═══════════════════ */
// const STATUS_STEPS = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];
// const ALL_STATUSES = [...STATUS_STEPS, 'Cancelled'];

// const STATUS_CFG = {
//   'Order Placed': { emoji: '📦', dot: 'bg-blue-500', badge: 'bg-blue-50 text-blue-700 border-blue-200', bar: 'from-blue-500 to-blue-400', select: 'bg-blue-50 text-blue-700 border-blue-300', label: 'Order Placed' },
//   'Packing': { emoji: '📫', dot: 'bg-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'from-amber-500 to-yellow-400', select: 'bg-amber-50 text-amber-700 border-amber-300', label: 'Packing' },
//   'Shipped': { emoji: '🚚', dot: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 border-violet-200', bar: 'from-violet-600 to-violet-400', select: 'bg-violet-50 text-violet-700 border-violet-300', label: 'Shipped' },
//   'Out for delivery': { emoji: '🏃', dot: 'bg-cyan-500', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', bar: 'from-cyan-500 to-sky-400', select: 'bg-cyan-50 text-cyan-700 border-cyan-300', label: 'Out for Delivery' },
//   'Delivered': { emoji: '✅', dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'from-emerald-500 to-green-400', select: 'bg-emerald-50 text-emerald-700 border-emerald-300', label: 'Delivered' },
//   'Cancelled': { emoji: '❌', dot: 'bg-red-400', badge: 'bg-red-50 text-red-600 border-red-200', bar: 'from-red-500 to-red-400', select: 'bg-red-50 text-red-600 border-red-300', label: 'Cancelled' },
// };

// /* ═══════════════════ HELPERS ═══════════════════ */
// // Safe quantity extractor — handles both {quantity: N} objects and plain numbers
// const safeQty = (q) => typeof q === 'object' ? (q?.quantity ?? 1) : (Number(q) || 1);
// // Safe size/color extractors — handle object or string variants
// const safeSize = (s) => typeof s === 'object' ? (s?.label || s?.value || '') : (s || '');
// const safeColor = (c) => typeof c === 'object' ? (c?.name || '') : (c || '');

// const fmtDate = (ts) => ts ? new Date(ts).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
// const fmtTime = (ts) => ts ? new Date(ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '';
// const fmtRel = (ts) => {
//   if (!ts) return '';
//   const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
//   if (m < 1) return 'just now';
//   if (m < 60) return `${m}m ago`;
//   const h = Math.floor(m / 60);
//   if (h < 24) return `${h}h ago`;
//   return `${Math.floor(h / 24)}d ago`;
// };

// /* ═══════════════════ SMALL COMPONENTS ═══════════════════ */

// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CFG[status] || STATUS_CFG['Order Placed'];
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold ${cfg.badge}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// };

// const PayBadge = ({ paid }) => (
//   <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10.5px] font-bold ${paid ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
//     {paid ? <TbCheck size={9} /> : <span className="text-[8px]">⏳</span>}
//     {paid ? 'Paid' : 'Pending'}
//   </span>
// );

// /* Shimmer skeleton block */
// const Skel = ({ className = '' }) => (
//   <div className={`rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite] ${className}`} />
// );

// /* Stat card */
// const StatCard = ({ icon, value, label, iconBg, delay = 0 }) => (
//   <div
//     className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
//     style={{ animation: `fadeUp 0.4s ease ${delay}s both` }}
//   >
//     <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconBg}`}>{icon}</div>
//     <div className="text-[22px] font-extrabold text-gray-900 leading-none tracking-tight">{value}</div>
//     <div className="text-[11.5px] text-gray-400 font-medium mt-1">{label}</div>
//   </div>
// );

// /* Order status progress tracker */
// const StatusTracker = ({ status }) => {
//   const cur = STATUS_STEPS.indexOf(status);
//   return (
//     <div className="flex items-start w-full">
//       {STATUS_STEPS.map((step, i) => {
//         const done = cur > i;
//         const active = cur === i;
//         return (
//           <div key={step} className="flex-1 flex flex-col items-center relative">
//             {i < STATUS_STEPS.length - 1 && (
//               <div
//                 className="absolute top-[11px] left-1/2 w-full h-[2.5px] z-0 transition-all duration-500"
//                 style={{ background: done ? '#10b981' : '#e5e7eb' }}
//               />
//             )}
//             <div className={`relative z-10 w-[23px] h-[23px] rounded-full flex items-center justify-center text-[9px] font-extrabold border-2 transition-all duration-300
//               ${done ? 'bg-emerald-500 border-emerald-500 text-white' :
//                 active ? 'bg-gray-900 border-gray-900 text-white ring-4 ring-gray-900/10' :
//                   'bg-gray-100 border-gray-200 text-gray-400'}`}>
//               {done ? <TbCheck size={11} /> : i + 1}
//             </div>
//             <span className={`mt-1.5 text-[9px] font-semibold text-center leading-tight px-0.5
//               ${done ? 'text-emerald-600' : active ? 'text-gray-900' : 'text-gray-400'}`}>
//               {step === 'Out for delivery' ? 'Out for\nDelivery' : step.replace('Order ', '')}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// /* Quick action button */
// const QBtn = ({ children, onClick, disabled, variant = 'default' }) => {
//   const variants = {
//     default: 'bg-white border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
//     cancel: 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100',
//     revert: 'bg-white border-dashed border-gray-300 text-gray-500 hover:border-gray-500',
//   };
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-[12.5px] font-semibold transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${variants[variant]}`}
//     >
//       {children}
//     </button>
//   );
// };

// /* Copy-to-clipboard button */
// const CopyBtn = ({ text, id, copiedId, onCopy }) => (
//   <button
//     onClick={() => onCopy(text, id)}
//     className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all flex-shrink-0"
//     title="Copy"
//   >
//     {copiedId === id ? <TbCheck size={12} /> : <TbCopy size={12} />}
//   </button>
// );

// /* ═══════════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════════════ */
// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedId, setExpandedId] = useState(null);
//   const [updatingId, setUpdatingId] = useState(null);
//   const [copiedId, setCopiedId] = useState(null);

//   // Filters
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [payFilter, setPayFilter] = useState('all');
//   const [methodFilter, setMethodFilter] = useState('all');
//   const [dateFilter, setDateFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');

//   /* ── fetch ── */
//   const fetchAllOrders = useCallback(async () => {
//     if (!token) return;
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         backendUrl + '/api/order/list',
//         {},
//         { headers: { token } }
//       );
//       if (res.data.success) {
//         // Sort newest first on load
//         setOrders((res.data.orders || []).slice().reverse());
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (e) {
//       toast.error(e?.message || 'Failed to load orders');
//     } finally {
//       setLoading(false);
//     }
//   }, [token]);

//   /* ── status update ── */
//   const statusHandler = useCallback(async (newStatus, orderId) => {
//     setUpdatingId(orderId);
//     try {
//       const res = await axios.post(
//         backendUrl + '/api/order/status',
//         { orderId, status: newStatus },
//         { headers: { token } }
//       );
//       if (res.data.success) {
//         // Optimistic local update — no full refetch needed
//         setOrders(prev => prev.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
//         toast.success(`Status updated → ${newStatus}`);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch {
//       toast.error('Status update failed');
//     } finally {
//       setUpdatingId(null);
//     }
//   }, [token]);

//   /* ── copy helper ── */
//   const copyText = useCallback((text, id) => {
//     if (navigator.clipboard) {
//       navigator.clipboard.writeText(text).catch(() => { });
//     }
//     setCopiedId(id);
//     toast.success('Copied!');
//     setTimeout(() => setCopiedId(null), 2000);
//   }, []);

//   /* ── export CSV ── */
//   const exportCSV = useCallback(() => {
//     const rows = [['Order ID', 'Customer', 'Email', 'Phone', 'Amount', 'Status', 'Payment', 'Method', 'Date']];
//     filtered.forEach(o => rows.push([
//       o._id,
//       `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim(),
//       o.address?.email || '',
//       o.address?.phone || '',
//       o.finalAmount || 0,
//       o.status || '',
//       o.payment ? 'Paid' : 'Pending',
//       o.paymentMethod || '',
//       fmtDate(o.date),
//     ]));
//     const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
//     const blob = new Blob([csv], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `orders_${new Date().toISOString().slice(0, 10)}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//     toast.success('Orders exported!');
//   }, []);

//   useEffect(() => { fetchAllOrders(); }, [fetchAllOrders]);

//   /* ── derived data ── */
//   const payMethods = useMemo(() =>
//     [...new Set(orders.map(o => o.paymentMethod).filter(Boolean))],
//     [orders]);

//   const stats = useMemo(() => {
//     const now = new Date();
//     const isToday = (ts) => {
//       const d = new Date(ts);
//       return d.getDate() === now.getDate() &&
//         d.getMonth() === now.getMonth() &&
//         d.getFullYear() === now.getFullYear();
//     };
//     return {
//       total: orders.length,
//       revenue: orders.filter(o => o.payment).reduce((s, o) => s + (Number(o.finalAmount) || 0), 0),
//       delivered: orders.filter(o => o.status === 'Delivered').length,
//       active: orders.filter(o => !['Delivered', 'Cancelled'].includes(o.status)).length,
//       today: orders.filter(o => isToday(o.date)).length,
//       pending: orders.filter(o => !o.payment).length,
//     };
//   }, [orders]);

//   const filtered = useMemo(() => {
//     let r = [...orders];
//     const q = search.toLowerCase().trim();
//     if (q) {
//       r = r.filter(o =>
//         `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.toLowerCase().includes(q) ||
//         (o._id || '').toLowerCase().includes(q) ||
//         (o.address?.phone || '').includes(q) ||
//         (o.address?.email || '').toLowerCase().includes(q) ||
//         (o.items || []).some(it => (it.name || '').toLowerCase().includes(q))
//       );
//     }
//     if (statusFilter !== 'all') r = r.filter(o => o.status === statusFilter);
//     if (payFilter === 'paid') r = r.filter(o => o.payment);
//     if (payFilter === 'pending') r = r.filter(o => !o.payment);
//     if (methodFilter !== 'all') r = r.filter(o => o.paymentMethod === methodFilter);

//     const now = Date.now();
//     if (dateFilter === 'today') {
//       const n = new Date();
//       r = r.filter(o => {
//         const d = new Date(o.date);
//         return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear();
//       });
//     }
//     if (dateFilter === 'week') r = r.filter(o => now - new Date(o.date).getTime() < 7 * 86400000);
//     if (dateFilter === 'month') r = r.filter(o => now - new Date(o.date).getTime() < 30 * 86400000);

//     if (sortBy === 'newest') r.sort((a, b) => new Date(b.date) - new Date(a.date));
//     if (sortBy === 'oldest') r.sort((a, b) => new Date(a.date) - new Date(b.date));
//     if (sortBy === 'amount-h') r.sort((a, b) => (Number(b.finalAmount) || 0) - (Number(a.finalAmount) || 0));
//     if (sortBy === 'amount-l') r.sort((a, b) => (Number(a.finalAmount) || 0) - (Number(b.finalAmount) || 0));
//     if (sortBy === 'name') r.sort((a, b) => (a.address?.firstName || '').localeCompare(b.address?.firstName || ''));
//     return r;
//   }, [orders, search, statusFilter, payFilter, methodFilter, dateFilter, sortBy]);

//   const hasFilters = !!(search || statusFilter !== 'all' || payFilter !== 'all' || methodFilter !== 'all' || dateFilter !== 'all');
//   const clearFilters = () => { setSearch(''); setStatusFilter('all'); setPayFilter('all'); setMethodFilter('all'); setDateFilter('all'); };

//   /* ══════════════════════════════════════════════════
//      RENDER
//   ══════════════════════════════════════════════════ */
//   return (
//     <div className="min-h-screen bg-[#f7f8fa]">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
//         .op    { font-family: 'Outfit', sans-serif; }
//         .dmono { font-family: 'DM Mono', monospace; }
//         @keyframes fadeUp    { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes slideDown { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes shimmer   { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
//         @keyframes spin-fast { to{transform:rotate(360deg)} }
//         .sp-anim { animation: spin-fast 0.85s linear infinite; }
//         .ce      { animation: fadeUp    0.35s ease both; }
//         .de      { animation: slideDown 0.2s  ease both; }
//         .fsel {
//           appearance: none;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//           background-repeat: no-repeat;
//           background-position: right 10px center;
//         }
//         .ssel {
//           appearance: none;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//           background-repeat: no-repeat;
//           background-position: right 10px center;
//         }
//       `}</style>

//       <div className="op">

//         {/* ── HEADER ── */}
//         <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
//           <div className="flex items-center justify-between px-6 h-16 max-w-[1400px] mx-auto">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
//                 <TbShoppingBag size={18} className="text-white" />
//               </div>
//               <div>
//                 <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Orders</h1>
//                 <p className="text-[11px] text-gray-400 mt-0.5 leading-none">
//                   {loading ? 'Loading…' : `${orders.length} total orders`}
//                 </p>
//               </div>
//               {!loading && stats.active > 0 && (
//                 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[11px] font-bold">
//                   <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
//                   {stats.active} active
//                 </span>
//               )}
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={fetchAllOrders}
//                 disabled={loading}
//                 className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 bg-white text-[12.5px] font-semibold text-gray-600 hover:bg-gray-50 transition-all disabled:opacity-50"
//               >
//                 <TbRefresh size={14} className={loading ? 'sp-anim' : ''} />
//                 Refresh
//               </button>
//               <button
//                 onClick={exportCSV}
//                 className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-[12.5px] font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm"
//               >
//                 <TbFileExport size={14} />
//                 Export CSV
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="px-6 py-5 max-w-[1400px] mx-auto">

//           {/* ── STATS ── */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
//             {[
//               { icon: <TbPackage size={18} className="text-indigo-600" />, iconBg: 'bg-indigo-50', value: loading ? '—' : stats.total, label: 'Total Orders', delay: 0 },
//               { icon: <TbCurrencyRupee size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : `${currency}${stats.revenue.toLocaleString('en-IN')}`, label: 'Revenue', delay: 0.05 },
//               { icon: <TbCircleCheck size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : stats.delivered, label: 'Delivered', delay: 0.08 },
//               { icon: <TbTruck size={18} className="text-amber-600" />, iconBg: 'bg-amber-50', value: loading ? '—' : stats.active, label: 'In Progress', delay: 0.12 },
//               { icon: <TbSun size={18} className="text-violet-600" />, iconBg: 'bg-violet-50', value: loading ? '—' : stats.today, label: "Today's Orders", delay: 0.16 },
//               { icon: <TbCreditCard size={18} className="text-red-500" />, iconBg: 'bg-red-50', value: loading ? '—' : stats.pending, label: 'Unpaid', delay: 0.20 },
//             ].map((s, i) => <StatCard key={i} {...s} />)}
//           </div>

//           {/* ── TOOLBAR ── */}
//           <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 mb-4">
//             <div className="flex flex-wrap items-center gap-3">
//               {/* Search */}
//               <div className="relative flex-1 min-w-[200px]">
//                 <TbSearch size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                 <input
//                   type="text"
//                   value={search}
//                   onChange={e => setSearch(e.target.value)}
//                   placeholder="Search name, order ID, phone, item…"
//                   className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all"
//                 />
//                 {search && (
//                   <button
//                     onClick={() => setSearch('')}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
//                   >
//                     <TbX size={10} className="text-gray-600" />
//                   </button>
//                 )}
//               </div>

//               {/* Filter selects */}
//               {[
//                 {
//                   val: statusFilter, set: setStatusFilter,
//                   opts: [['all', 'All Statuses'], ...ALL_STATUSES.map(s => [s, s])],
//                 },
//                 {
//                   val: payFilter, set: setPayFilter,
//                   opts: [['all', 'All Payments'], ['paid', '✓ Paid'], ['pending', '⏳ Unpaid']],
//                 },
//                 // Only show method filter if there are multiple methods
//                 ...(payMethods.length > 1 ? [{
//                   val: methodFilter, set: setMethodFilter,
//                   opts: [['all', 'All Methods'], ...payMethods.map(m => [m, m])],
//                 }] : []),
//                 {
//                   val: dateFilter, set: setDateFilter,
//                   opts: [['all', 'All Time'], ['today', 'Today'], ['week', 'This Week'], ['month', 'This Month']],
//                 },
//                 {
//                   val: sortBy, set: setSortBy,
//                   opts: [['newest', '↓ Newest'], ['oldest', '↑ Oldest'], ['amount-h', '₹ High–Low'], ['amount-l', '₹ Low–High'], ['name', 'A–Z Name']],
//                 },
//               ].map((s, i) => (
//                 <select
//                   key={i}
//                   value={s.val}
//                   onChange={e => s.set(e.target.value)}
//                   className="fsel px-3 pr-8 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 cursor-pointer hover:border-gray-300 transition-all"
//                 >
//                   {s.opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
//                 </select>
//               ))}

//               {hasFilters && (
//                 <button
//                   onClick={clearFilters}
//                   className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-red-200 bg-red-50 text-[12.5px] font-semibold text-red-600 hover:bg-red-100 transition-all whitespace-nowrap"
//                 >
//                   <TbX size={13} /> Clear Filters
//                 </button>
//               )}
//             </div>

//             {/* Results bar + quick-filter pills */}
//             <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 gap-3 flex-wrap">
//               <p className="text-[12.5px] text-gray-400">
//                 {loading ? 'Loading…' : (
//                   <>
//                     Showing{' '}
//                     <strong className="text-gray-700">{filtered.length}</strong> of{' '}
//                     <strong className="text-gray-700">{orders.length}</strong> orders
//                   </>
//                 )}
//               </p>
//               <div className="flex items-center gap-1.5 flex-wrap">
//                 {ALL_STATUSES.map(s => {
//                   const cnt = orders.filter(o => o.status === s).length;
//                   if (!cnt) return null;
//                   const cfg = STATUS_CFG[s];
//                   return (
//                     <button
//                       key={s}
//                       onClick={() => setStatusFilter(statusFilter === s ? 'all' : s)}
//                       className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[10.5px] font-semibold transition-all
//                         ${statusFilter === s
//                           ? cfg.badge
//                           : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'}`}
//                     >
//                       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//                       {cfg.label} <span className="opacity-60">({cnt})</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ── ORDER LIST ── */}
//           <div className="flex flex-col gap-3">

//             {/* Skeleton */}
//             {loading && [0, 0.06, 0.12, 0.18, 0.22].map((d, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ce"
//                 style={{ animationDelay: `${d}s` }}
//               >
//                 <div className="h-[3px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite]" />
//                 <div className="p-4 flex items-center gap-4">
//                   <Skel className="w-11 h-11 rounded-xl flex-shrink-0" />
//                   <div className="flex-1 space-y-2">
//                     <Skel className="w-20 h-3" />
//                     <Skel className="w-36 h-4" />
//                     <Skel className="w-56 h-3" />
//                   </div>
//                   <div className="hidden sm:flex flex-col items-end gap-2">
//                     <Skel className="w-20 h-3" />
//                     <Skel className="w-14 h-3" />
//                   </div>
//                   <Skel className="w-24 h-8 rounded-xl flex-shrink-0" />
//                 </div>
//               </div>
//             ))}

//             {/* Empty state */}
//             {!loading && filtered.length === 0 && (
//               <div className="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-20 ce">
//                 <div className="text-5xl mb-4">📭</div>
//                 <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">No orders found</h3>
//                 <p className="text-[13px] text-gray-400 mb-6">
//                   {hasFilters ? 'Adjust your filters or clear them' : 'Orders will appear here once customers place them'}
//                 </p>
//                 {hasFilters && (
//                   <button
//                     onClick={clearFilters}
//                     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-[13px] font-semibold hover:bg-indigo-700 transition-all shadow-sm"
//                   >
//                     <TbX size={14} /> Clear All Filters
//                   </button>
//                 )}
//               </div>
//             )}

//             {/* Order cards */}
//             {!loading && filtered.map((order, idx) => {
//               const isExpanded = expandedId === order._id;
//               const isUpdating = updatingId === order._id;
//               const cfg = STATUS_CFG[order.status] || STATUS_CFG['Order Placed'];
//               const stepIdx = STATUS_STEPS.indexOf(order.status);
//               const nextSteps = STATUS_STEPS.filter(s => STATUS_STEPS.indexOf(s) > stepIdx);
//               const totalQty = (order.items || []).reduce((s, it) => s + safeQty(it.quantity), 0);
//               const preview = (order.items || []).map(it => `${it.name || 'Item'} ×${safeQty(it.quantity)}`).join(' · ') || '—';
//               const amount = Number(order.finalAmount) || Number(order.amount) || 0;

//               return (
//                 <div
//                   key={order._id}
//                   className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ce
//                     ${isExpanded ? 'border-indigo-200 shadow-md' : 'border-gray-100 hover:shadow-md hover:-translate-y-0.5'}`}
//                   style={{ animationDelay: `${Math.min(idx, 8) * 0.045}s` }}
//                 >
//                   {/* Colour bar */}
//                   <div className={`h-[3px] bg-gradient-to-r ${cfg.bar}`} />

//                   {/* ── Summary row ── */}
//                   <div
//                     className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
//                     onClick={() => setExpandedId(isExpanded ? null : order._id)}
//                   >
//                     {/* Status emoji */}
//                     <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border text-xl ${cfg.badge}`}>
//                       {cfg.emoji}
//                     </div>

//                     {/* Main info */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 mb-0.5 flex-wrap">
//                         <div className="flex items-center gap-1">
//                           <span className="dmono text-[10px] text-gray-400 tracking-wider flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-md max-w-[130px] truncate">
//                             #{(order._id || '').toUpperCase()}
//                           </span>
//                           <button
//                             onClick={e => { e.stopPropagation(); copyText(order._id, order._id + '-hdr'); }}
//                             className="w-5 h-5 flex items-center justify-center rounded-md bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all"
//                           >
//                             {copiedId === order._id + '-hdr' ? <TbCheck size={10} /> : <TbCopy size={10} />}
//                           </button>
//                         </div>
//                         <span className="text-[10px] text-gray-300">·</span>
//                         <span className="text-[10px] text-gray-400">{fmtRel(order.date)}</span>
//                       </div>
//                       <p className="text-[15px] font-bold text-gray-900 leading-tight">
//                         {order.address?.firstName || ''} {order.address?.lastName || ''}
//                       </p>
//                       <p className="text-[12px] text-gray-400 mt-0.5 truncate">{preview}</p>
//                     </div>

//                     {/* Desktop meta */}
//                     <div className="hidden lg:flex flex-col items-end gap-1.5 flex-shrink-0">
//                       <span className="text-[12px] text-gray-500 flex items-center gap-1">
//                         <TbCalendar size={11} className="text-gray-400" />
//                         {fmtDate(order.date)}
//                       </span>
//                       <span className="text-[12px] text-gray-500 flex items-center gap-1">
//                         <TbShoppingBag size={11} className="text-gray-400" />
//                         {totalQty} item{totalQty !== 1 ? 's' : ''}
//                       </span>
//                       <div className="flex items-center gap-1.5">
//                         <span className="text-[11.5px] text-gray-400">{order.paymentMethod || '—'}</span>
//                         <PayBadge paid={order.payment} />
//                       </div>
//                     </div>

//                     {/* Amount */}
//                     <div className="hidden md:block text-right flex-shrink-0 min-w-[78px]">
//                       <div className="text-[18px] font-extrabold text-gray-900 tracking-tight leading-none">
//                         {currency}{amount.toLocaleString('en-IN')}
//                       </div>
//                       <div className="text-[10px] text-gray-400 mt-0.5">Order total</div>
//                     </div>

//                     {/* Status select + expand */}
//                     <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
//                       <select
//                         value={order.status || 'Order Placed'}
//                         disabled={isUpdating}
//                         onChange={e => statusHandler(e.target.value, order._id)}
//                         className={`ssel pl-3 pr-8 py-2 rounded-xl border text-[12px] font-bold outline-none cursor-pointer transition-all disabled:opacity-60 ${cfg.select}`}
//                       >
//                         {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
//                       </select>
//                       {isUpdating && (
//                         <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full sp-anim flex-shrink-0" />
//                       )}
//                       <button
//                         onClick={() => setExpandedId(isExpanded ? null : order._id)}
//                         className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0
//                           ${isExpanded
//                             ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
//                             : 'border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}
//                       >
//                         <TbChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Mobile strip */}
//                   <div className="sm:hidden flex items-center justify-between px-5 py-2.5 border-t border-gray-50 bg-gray-50/50">
//                     <div className="flex items-center gap-1.5">
//                       <StatusBadge status={order.status} />
//                       <PayBadge paid={order.payment} />
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-[14px] font-extrabold text-gray-900">{currency}{amount.toLocaleString('en-IN')}</span>
//                       <button
//                         onClick={() => setExpandedId(isExpanded ? null : order._id)}
//                         className="text-[12px] font-semibold text-indigo-600"
//                       >
//                         {isExpanded ? '▲ Hide' : '▼ Details'}
//                       </button>
//                     </div>
//                   </div>

//                   {/* ── Expanded details ── */}
//                   {isExpanded && (
//                     <div className="de border-t border-gray-100 bg-[#fafbfc]">
//                       <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

//                         {/* COL 1 — Items */}
//                         <div className="p-5">
//                           <div className="flex items-center justify-between mb-4">
//                             <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
//                               <TbShoppingBag size={12} />Order Items
//                             </h3>
//                             <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-semibold text-gray-500">
//                               {(order.items || []).length} product{(order.items || []).length !== 1 ? 's' : ''}
//                             </span>
//                           </div>

//                           <div className="space-y-0">
//                             {(order.items || []).map((item, ii) => {
//                               const qty = safeQty(item.quantity);
//                               const size = safeSize(item.size);
//                               const color = safeColor(item.color);
//                               const img = Array.isArray(item.image) ? item.image[0] : item.image;
//                               const lineTotal = item.subtotal
//                                 ? Number(item.subtotal)
//                                 : item.price ? Number(item.price) * qty : null;

//                               return (
//                                 <div key={ii} className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
//                                   <div className="w-10 h-10 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex-shrink-0">
//                                     {img
//                                       ? <img src={img} alt={item.name} className="w-full h-full object-cover" />
//                                       : <div className="w-full h-full flex items-center justify-center text-lg">👕</div>
//                                     }
//                                   </div>
//                                   <div className="flex-1 min-w-0">
//                                     <p className="text-[13px] font-semibold text-gray-800 leading-snug truncate">{item.name || '—'}</p>
//                                     {(size || color) && (
//                                       <div className="flex gap-1.5 mt-1 flex-wrap">
//                                         {size && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">Size: {size}</span>}
//                                         {color && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">{color.startsWith('#') ? '●' : `Color: ${color}`}</span>}
//                                       </div>
//                                     )}
//                                   </div>
//                                   <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
//                                     <span className="text-[12px] font-bold text-gray-500">×{qty}</span>
//                                     {lineTotal != null && (
//                                       <span className="text-[12.5px] font-extrabold text-gray-900">
//                                         {currency}{lineTotal.toFixed(0)}
//                                       </span>
//                                     )}
//                                   </div>
//                                 </div>
//                               );
//                             })}
//                           </div>

//                           <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
//                             <span className="text-[12px] text-gray-400">{totalQty} item{totalQty !== 1 ? 's' : ''} · {order.paymentMethod || '—'}</span>
//                             <span className="text-[17px] font-extrabold text-gray-900">{currency}{amount.toLocaleString('en-IN')}</span>
//                           </div>
//                         </div>

//                         {/* COL 2 — Address + Payment */}
//                         <div className="p-5">
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbMapPin size={12} />Delivery Address
//                           </h3>
//                           <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-5">
//                             <p className="text-[14.5px] font-extrabold text-gray-900 mb-2">
//                               {order.address?.firstName || ''} {order.address?.lastName || ''}
//                             </p>
//                             <p className="text-[13px] text-gray-600 leading-relaxed">{order.address?.street || '—'}</p>
//                             <p className="text-[13px] text-gray-600">
//                               {[order.address?.city, order.address?.state, order.address?.country].filter(Boolean).join(', ') || '—'}
//                             </p>
//                             {order.address?.zipcode && (
//                               <p className="text-[12.5px] text-gray-400 mt-0.5">PIN: {order.address.zipcode}</p>
//                             )}
//                             <div className="flex flex-wrap gap-2 mt-3">
//                               {order.address?.phone && (
//                                 <div className="flex items-center gap-1">
//                                   <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] font-semibold text-gray-700">
//                                     <TbPhone size={11} className="text-gray-400" />
//                                     {order.address.phone}
//                                   </span>
//                                   <CopyBtn text={order.address.phone} id={order._id + '-ph'} copiedId={copiedId} onCopy={copyText} />
//                                 </div>
//                               )}
//                               {order.address?.email && (
//                                 <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] text-gray-600 max-w-full truncate">
//                                   <TbMail size={11} className="text-gray-400 flex-shrink-0" />
//                                   {order.address.email}
//                                 </span>
//                               )}
//                             </div>
//                           </div>

//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbCreditCard size={12} />Payment Details
//                           </h3>
//                           <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//                             {[
//                               ['Order ID', (
//                                 <div className="flex items-center gap-1">
//                                   <span className="dmono text-[11px] text-gray-500 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg max-w-[160px] truncate block">
//                                     #{(order._id || '').toUpperCase()}
//                                   </span>
//                                   <CopyBtn text={order._id} id={order._id + '-oid'} copiedId={copiedId} onCopy={copyText} />
//                                 </div>
//                               )],
//                               ['Payment ID', order.paymentId ? (
//                                 <div className="flex items-center gap-1">
//                                   <span className="dmono text-[11px] text-gray-500 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg max-w-[160px] truncate block">
//                                     {order.paymentId}
//                                   </span>
//                                   <CopyBtn text={order.paymentId} id={order._id + '-pid'} copiedId={copiedId} onCopy={copyText} />
//                                 </div>
//                               ) : '—'],
//                               ['Date', `${fmtDate(order.date)} · ${fmtTime(order.date)}`],
//                               ['Method', order.paymentMethod || '—'],
//                               ['Status', <PayBadge paid={order.payment} />],
//                               ['Total', <span className="text-[15px] font-extrabold text-gray-900">{currency}{amount.toLocaleString('en-IN')}</span>],
//                             ].map(([k, v], i) => (
//                               <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-[13px] ${i < 5 ? 'border-b border-gray-50' : ''}`}>
//                                 <span className="text-gray-400 font-medium">{k}</span>
//                                 <span className="font-semibold text-gray-800 text-right">{v}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* COL 3 — Tracker + Quick Update */}
//                         <div className="p-5">
//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-4">
//                             <TbChartBar size={12} />Fulfillment Progress
//                           </h3>

//                           {order.status === 'Cancelled' ? (
//                             <div className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-5">
//                               <TbBan size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
//                               <div>
//                                 <p className="text-[13px] font-bold text-red-700">Order Cancelled</p>
//                                 <p className="text-[12px] text-red-400 mt-0.5">This order will not be fulfilled.</p>
//                               </div>
//                             </div>
//                           ) : (
//                             <div className="mb-6">
//                               <StatusTracker status={order.status || 'Order Placed'} />
//                             </div>
//                           )}

//                           <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
//                             <TbBolt size={12} />Quick Update
//                           </h3>
//                           <div className="space-y-2">
//                             {nextSteps.map(s => {
//                               const scfg = STATUS_CFG[s];
//                               return (
//                                 <QBtn key={s} disabled={isUpdating} onClick={() => statusHandler(s, order._id)}>
//                                   <span className={`w-2 h-2 rounded-full flex-shrink-0 ${scfg.dot}`} />
//                                   <span>Mark as <strong>{s}</strong></span>
//                                   <TbArrowRight size={13} className="ml-auto text-gray-400" />
//                                 </QBtn>
//                               );
//                             })}

//                             {stepIdx > 0 && order.status !== 'Cancelled' && (
//                               <QBtn variant="revert" disabled={isUpdating} onClick={() => statusHandler(STATUS_STEPS[stepIdx - 1], order._id)}>
//                                 <TbArrowBack size={13} className="text-gray-400" />
//                                 <span>Revert to <strong>{STATUS_STEPS[stepIdx - 1]}</strong></span>
//                               </QBtn>
//                             )}

//                             {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
//                               <QBtn
//                                 variant="cancel"
//                                 disabled={isUpdating}
//                                 onClick={() => {
//                                   if (window.confirm('Cancel this order? This cannot be undone.')) {
//                                     statusHandler('Cancelled', order._id);
//                                   }
//                                 }}
//                               >
//                                 <TbBan size={13} />
//                                 <span>Cancel Order</span>
//                               </QBtn>
//                             )}
//                           </div>

//                           <div className="flex items-start gap-2.5 p-3 bg-indigo-50 border border-indigo-100 rounded-xl mt-4">
//                             <TbAlertCircle size={14} className="text-indigo-500 flex-shrink-0 mt-0.5" />
//                             <p className="text-[11.5px] text-indigo-600 leading-relaxed">
//                               Use the dropdown or quick buttons to update status. Changes save instantly.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Bottom spacer */}
//           <div className="h-10" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl, currency } from '../../App';
import {
  TbPackage, TbCurrencyRupee, TbCurrencyDollar, TbCircleCheck, TbTruck,
  TbSun, TbSearch, TbX, TbRefresh, TbChevronDown,
  TbPhone, TbMail, TbMapPin, TbCopy,
  TbShoppingBag, TbCreditCard, TbCalendar,
  TbAlertCircle, TbArrowRight, TbDownload,
  TbCheck, TbBan, TbArrowBack, TbBolt, TbChartBar,
  TbFileExport,
} from 'react-icons/tb';

/* ═══════════════════ CONSTANTS ═══════════════════ */
const STATUS_STEPS = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];
const ALL_STATUSES = [...STATUS_STEPS, 'Cancelled'];

const STATUS_CFG = {
  'Order Placed': { emoji: '📦', dot: 'bg-blue-500', badge: 'bg-blue-50 text-blue-700 border-blue-200', bar: 'from-blue-500 to-blue-400', select: 'bg-blue-50 text-blue-700 border-blue-300', label: 'Order Placed' },
  'Packing': { emoji: '📫', dot: 'bg-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'from-amber-500 to-yellow-400', select: 'bg-amber-50 text-amber-700 border-amber-300', label: 'Packing' },
  'Shipped': { emoji: '🚚', dot: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 border-violet-200', bar: 'from-violet-600 to-violet-400', select: 'bg-violet-50 text-violet-700 border-violet-300', label: 'Shipped' },
  'Out for delivery': { emoji: '🏃', dot: 'bg-cyan-500', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', bar: 'from-cyan-500 to-sky-400', select: 'bg-cyan-50 text-cyan-700 border-cyan-300', label: 'Out for Delivery' },
  'Delivered': { emoji: '✅', dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'from-emerald-500 to-green-400', select: 'bg-emerald-50 text-emerald-700 border-emerald-300', label: 'Delivered' },
  'Cancelled': { emoji: '❌', dot: 'bg-red-400', badge: 'bg-red-50 text-red-600 border-red-200', bar: 'from-red-500 to-red-400', select: 'bg-red-50 text-red-600 border-red-300', label: 'Cancelled' },
};

/* ═══════════════════ HELPERS ═══════════════════ */
// Safe quantity extractor — handles both {quantity: N} objects and plain numbers
const safeQty = (q) => typeof q === 'object' ? (q?.quantity ?? 1) : (Number(q) || 1);
// Safe size/color extractors — handle object or string variants
const safeSize = (s) => typeof s === 'object' ? (s?.label || s?.value || '') : (s || '');
const safeColor = (c) => typeof c === 'object' ? (c?.name || '') : (c || '');

const fmtDate = (ts) => ts ? new Date(ts).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
const fmtTime = (ts) => ts ? new Date(ts).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '';
const fmtRel = (ts) => {
  if (!ts) return '';
  const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
};

/* ═══════════════════ SMALL COMPONENTS ═══════════════════ */

const StatusBadge = ({ status }) => {
  const cfg = STATUS_CFG[status] || STATUS_CFG['Order Placed'];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold ${cfg.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
};

const PayBadge = ({ paid }) => (
  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10.5px] font-bold ${paid ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
    {paid ? <TbCheck size={9} /> : <span className="text-[8px]">⏳</span>}
    {paid ? 'Paid' : 'Pending'}
  </span>
);

/* Shimmer skeleton block */
const Skel = ({ className = '' }) => (
  <div className={`rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite] ${className}`} />
);

/* Stat card */
const StatCard = ({ icon, value, label, iconBg, delay = 0 }) => (
  <div
    className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    style={{ animation: `fadeUp 0.4s ease ${delay}s both` }}
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconBg}`}>{icon}</div>
    <div className="text-[22px] font-extrabold text-gray-900 leading-none tracking-tight">{value}</div>
    <div className="text-[11.5px] text-gray-400 font-medium mt-1">{label}</div>
  </div>
);

/* Order status progress tracker */
const StatusTracker = ({ status }) => {
  const cur = STATUS_STEPS.indexOf(status);
  return (
    <div className="flex items-start w-full">
      {STATUS_STEPS.map((step, i) => {
        const done = cur > i;
        const active = cur === i;
        return (
          <div key={step} className="flex-1 flex flex-col items-center relative">
            {i < STATUS_STEPS.length - 1 && (
              <div
                className="absolute top-[11px] left-1/2 w-full h-[2.5px] z-0 transition-all duration-500"
                style={{ background: done ? '#10b981' : '#e5e7eb' }}
              />
            )}
            <div className={`relative z-10 w-[23px] h-[23px] rounded-full flex items-center justify-center text-[9px] font-extrabold border-2 transition-all duration-300
              ${done ? 'bg-emerald-500 border-emerald-500 text-white' :
                active ? 'bg-gray-900 border-gray-900 text-white ring-4 ring-gray-900/10' :
                  'bg-gray-100 border-gray-200 text-gray-400'}`}>
              {done ? <TbCheck size={11} /> : i + 1}
            </div>
            <span className={`mt-1.5 text-[9px] font-semibold text-center leading-tight px-0.5
              ${done ? 'text-emerald-600' : active ? 'text-gray-900' : 'text-gray-400'}`}>
              {step === 'Out for delivery' ? 'Out for\nDelivery' : step.replace('Order ', '')}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* Quick action button */
const QBtn = ({ children, onClick, disabled, variant = 'default' }) => {
  const variants = {
    default: 'bg-white border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
    cancel: 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100',
    revert: 'bg-white border-dashed border-gray-300 text-gray-500 hover:border-gray-500',
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-[12.5px] font-semibold transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

/* Copy-to-clipboard button */
const CopyBtn = ({ text, id, copiedId, onCopy }) => (
  <button
    onClick={() => onCopy(text, id)}
    className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all flex-shrink-0"
    title="Copy"
  >
    {copiedId === id ? <TbCheck size={12} /> : <TbCopy size={12} />}
  </button>
);

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Filters
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [payFilter, setPayFilter] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  /* ── fetch ── */
  const fetchAllOrders = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        // Sort newest first on load
        setOrders((res.data.orders || []).slice().reverse());
      } else {
        toast.error(res.data.message);
      }
    } catch (e) {
      toast.error(e?.message || 'Failed to load orders');
    } finally {
      setLoading(false);
    }
  }, [token]);

  /* ── status update ── */
  const statusHandler = useCallback(async (newStatus, orderId) => {
    setUpdatingId(orderId);
    try {
      const res = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: newStatus },
        { headers: { token } }
      );
      if (res.data.success) {
        // Optimistic local update — no full refetch needed
        setOrders(prev => prev.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
        toast.success(`Status updated → ${newStatus}`);
      } else {
        toast.error(res.data.message);
      }
    } catch {
      toast.error('Status update failed');
    } finally {
      setUpdatingId(null);
    }
  }, [token]);

  /* ── copy helper ── */
  const copyText = useCallback((text, id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => { });
    }
    setCopiedId(id);
    toast.success('Copied!');
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  /* ── export CSV ── */
  const exportCSV = useCallback(() => {
    const rows = [['Order ID', 'Customer', 'Email', 'Phone', 'Amount', 'Status', 'Payment', 'Method', 'Date']];
    filtered.forEach(o => rows.push([
      o._id,
      `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim(),
      o.address?.email || '',
      o.address?.phone || '',
      o.finalAmount || o.amount || 0,
      o.status || '',
      o.payment ? 'Paid' : 'Pending',
      o.paymentMethod || '',
      fmtDate(o.date),
    ]));
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orders_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Orders exported!');
  }, []);

  useEffect(() => { fetchAllOrders(); }, [fetchAllOrders]);

  /* ── derived data ── */
  const payMethods = useMemo(() =>
    [...new Set(orders.map(o => o.paymentMethod).filter(Boolean))],
    [orders]);

  const stats = useMemo(() => {
    const now = new Date();
    const isToday = (ts) => {
      const d = new Date(ts);
      return d.getDate() === now.getDate() &&
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear();
    };
    // GMV = total value of ALL orders (including unpaid/COD)
    // paidRevenue = only payment-confirmed orders
    const gmv = orders.reduce((s, o) => s + (Number(o.finalAmount) || Number(o.amount) || 0), 0);
    const paidRevenue = orders.filter(o => o.payment).reduce((s, o) => s + (Number(o.finalAmount) || Number(o.amount) || 0), 0);
    return {
      total: orders.length,
      revenue: gmv,          // headline = all orders GMV
      paidRevenue,                 // collected/confirmed payments
      delivered: orders.filter(o => o.status === 'Delivered').length,
      active: orders.filter(o => !['Delivered', 'Cancelled'].includes(o.status)).length,
      today: orders.filter(o => isToday(o.date)).length,
      pending: orders.filter(o => !o.payment).length,
    };
  }, [orders]);

  const filtered = useMemo(() => {
    let r = [...orders];
    const q = search.toLowerCase().trim();
    if (q) {
      r = r.filter(o =>
        `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.toLowerCase().includes(q) ||
        (o._id || '').toLowerCase().includes(q) ||
        (o.address?.phone || '').includes(q) ||
        (o.address?.email || '').toLowerCase().includes(q) ||
        (o.items || []).some(it => (it.name || '').toLowerCase().includes(q))
      );
    }
    if (statusFilter !== 'all') r = r.filter(o => o.status === statusFilter);
    if (payFilter === 'paid') r = r.filter(o => o.payment);
    if (payFilter === 'pending') r = r.filter(o => !o.payment);
    if (methodFilter !== 'all') r = r.filter(o => o.paymentMethod === methodFilter);

    const now = Date.now();
    if (dateFilter === 'today') {
      const n = new Date();
      r = r.filter(o => {
        const d = new Date(o.date);
        return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear();
      });
    }
    if (dateFilter === 'week') r = r.filter(o => now - new Date(o.date).getTime() < 7 * 86400000);
    if (dateFilter === 'month') r = r.filter(o => now - new Date(o.date).getTime() < 30 * 86400000);

    if (sortBy === 'newest') r.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortBy === 'oldest') r.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sortBy === 'amount-h') r.sort((a, b) => (Number(b.finalAmount) || 0) - (Number(a.finalAmount) || 0));
    if (sortBy === 'amount-l') r.sort((a, b) => (Number(a.finalAmount) || 0) - (Number(b.finalAmount) || 0));
    if (sortBy === 'name') r.sort((a, b) => (a.address?.firstName || '').localeCompare(b.address?.firstName || ''));
    return r;
  }, [orders, search, statusFilter, payFilter, methodFilter, dateFilter, sortBy]);

  const hasFilters = !!(search || statusFilter !== 'all' || payFilter !== 'all' || methodFilter !== 'all' || dateFilter !== 'all');
  const clearFilters = () => { setSearch(''); setStatusFilter('all'); setPayFilter('all'); setMethodFilter('all'); setDateFilter('all'); };

  /* ══════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
        .op    { font-family: 'Outfit', sans-serif; }
        .dmono { font-family: 'DM Mono', monospace; }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer   { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes spin-fast { to{transform:rotate(360deg)} }
        .sp-anim { animation: spin-fast 0.85s linear infinite; }
        .ce      { animation: fadeUp    0.35s ease both; }
        .de      { animation: slideDown 0.2s  ease both; }
        .fsel {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
        }
        .ssel {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
        }
      `}</style>

      <div className="op">

        {/* ── HEADER ── */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="flex items-center justify-between px-6 h-16 max-w-[1400px] mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <TbShoppingBag size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-[17px] font-extrabold text-gray-900 leading-none tracking-tight">Orders</h1>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-none">
                  {loading ? 'Loading…' : `${orders.length} total orders`}
                </p>
              </div>
              {!loading && stats.active > 0 && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {stats.active} active
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchAllOrders}
                disabled={loading}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 bg-white text-[12.5px] font-semibold text-gray-600 hover:bg-gray-50 transition-all disabled:opacity-50"
              >
                <TbRefresh size={14} className={loading ? 'sp-anim' : ''} />
                Refresh
              </button>
              <button
                onClick={exportCSV}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-[12.5px] font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm"
              >
                <TbFileExport size={14} />
                Export CSV
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-5 max-w-[1400px] mx-auto">

          {/* ── STATS ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {[
              { icon: <TbPackage size={18} className="text-indigo-600" />, iconBg: 'bg-indigo-50', value: loading ? '—' : stats.total, label: 'Total Orders', delay: 0 },
              { icon: <TbCurrencyDollar size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : `$${stats.revenue.toLocaleString('en-US')}`, label: `GMV · $${loading ? '…' : stats.paidRevenue.toLocaleString('en-US')} paid`, delay: 0.05 },
              { icon: <TbCircleCheck size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50', value: loading ? '—' : stats.delivered, label: 'Delivered', delay: 0.08 },
              { icon: <TbTruck size={18} className="text-amber-600" />, iconBg: 'bg-amber-50', value: loading ? '—' : stats.active, label: 'In Progress', delay: 0.12 },
              { icon: <TbSun size={18} className="text-violet-600" />, iconBg: 'bg-violet-50', value: loading ? '—' : stats.today, label: "Today's Orders", delay: 0.16 },
              { icon: <TbCreditCard size={18} className="text-red-500" />, iconBg: 'bg-red-50', value: loading ? '—' : stats.pending, label: 'Unpaid', delay: 0.20 },
            ].map((s, i) => <StatCard key={i} {...s} />)}
          </div>

          {/* ── TOOLBAR ── */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px]">
                <TbSearch size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search name, order ID, phone, item…"
                  className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  >
                    <TbX size={10} className="text-gray-600" />
                  </button>
                )}
              </div>

              {/* Filter selects */}
              {[
                {
                  val: statusFilter, set: setStatusFilter,
                  opts: [['all', 'All Statuses'], ...ALL_STATUSES.map(s => [s, s])],
                },
                {
                  val: payFilter, set: setPayFilter,
                  opts: [['all', 'All Payments'], ['paid', '✓ Paid'], ['pending', '⏳ Unpaid']],
                },
                // Only show method filter if there are multiple methods
                ...(payMethods.length > 1 ? [{
                  val: methodFilter, set: setMethodFilter,
                  opts: [['all', 'All Methods'], ...payMethods.map(m => [m, m])],
                }] : []),
                {
                  val: dateFilter, set: setDateFilter,
                  opts: [['all', 'All Time'], ['today', 'Today'], ['week', 'This Week'], ['month', 'This Month']],
                },
                {
                  val: sortBy, set: setSortBy,
                  opts: [['newest', '↓ Newest'], ['oldest', '↑ Oldest'], ['amount-h', '$ High–Low'], ['amount-l', '$ Low–High'], ['name', 'A–Z Name']],
                },
              ].map((s, i) => (
                <select
                  key={i}
                  value={s.val}
                  onChange={e => s.set(e.target.value)}
                  className="fsel px-3 pr-8 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 cursor-pointer hover:border-gray-300 transition-all"
                >
                  {s.opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              ))}

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-red-200 bg-red-50 text-[12.5px] font-semibold text-red-600 hover:bg-red-100 transition-all whitespace-nowrap"
                >
                  <TbX size={13} /> Clear Filters
                </button>
              )}
            </div>

            {/* Results bar + quick-filter pills */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 gap-3 flex-wrap">
              <p className="text-[12.5px] text-gray-400">
                {loading ? 'Loading…' : (
                  <>
                    Showing{' '}
                    <strong className="text-gray-700">{filtered.length}</strong> of{' '}
                    <strong className="text-gray-700">{orders.length}</strong> orders
                  </>
                )}
              </p>
              <div className="flex items-center gap-1.5 flex-wrap">
                {ALL_STATUSES.map(s => {
                  const cnt = orders.filter(o => o.status === s).length;
                  if (!cnt) return null;
                  const cfg = STATUS_CFG[s];
                  return (
                    <button
                      key={s}
                      onClick={() => setStatusFilter(statusFilter === s ? 'all' : s)}
                      className={`flex items-center gap-1 px-2 py-1 rounded-full border text-[10.5px] font-semibold transition-all
                        ${statusFilter === s
                          ? cfg.badge
                          : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                      {cfg.label} <span className="opacity-60">({cnt})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── ORDER LIST ── */}
          <div className="flex flex-col gap-3">

            {/* Skeleton */}
            {loading && [0, 0.06, 0.12, 0.18, 0.22].map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ce"
                style={{ animationDelay: `${d}s` }}
              >
                <div className="h-[3px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:300%_100%] animate-[shimmer_1.8s_ease-in-out_infinite]" />
                <div className="p-4 flex items-center gap-4">
                  <Skel className="w-11 h-11 rounded-xl flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skel className="w-20 h-3" />
                    <Skel className="w-36 h-4" />
                    <Skel className="w-56 h-3" />
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-2">
                    <Skel className="w-20 h-3" />
                    <Skel className="w-14 h-3" />
                  </div>
                  <Skel className="w-24 h-8 rounded-xl flex-shrink-0" />
                </div>
              </div>
            ))}

            {/* Empty state */}
            {!loading && filtered.length === 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm text-center py-20 ce">
                <div className="text-5xl mb-4">📭</div>
                <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">No orders found</h3>
                <p className="text-[13px] text-gray-400 mb-6">
                  {hasFilters ? 'Adjust your filters or clear them' : 'Orders will appear here once customers place them'}
                </p>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-[13px] font-semibold hover:bg-indigo-700 transition-all shadow-sm"
                  >
                    <TbX size={14} /> Clear All Filters
                  </button>
                )}
              </div>
            )}

            {/* Order cards */}
            {!loading && filtered.map((order, idx) => {
              const isExpanded = expandedId === order._id;
              const isUpdating = updatingId === order._id;
              const cfg = STATUS_CFG[order.status] || STATUS_CFG['Order Placed'];
              const stepIdx = STATUS_STEPS.indexOf(order.status);
              const nextSteps = STATUS_STEPS.filter(s => STATUS_STEPS.indexOf(s) > stepIdx);
              const totalQty = (order.items || []).reduce((s, it) => s + safeQty(it.quantity), 0);
              const preview = (order.items || []).map(it => `${it.name || 'Item'} ×${safeQty(it.quantity)}`).join(' · ') || '—';
              const amount = Number(order.finalAmount) || Number(order.amount) || 0;

              return (
                <div
                  key={order._id}
                  className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ce
                    ${isExpanded ? 'border-indigo-200 shadow-md' : 'border-gray-100 hover:shadow-md hover:-translate-y-0.5'}`}
                  style={{ animationDelay: `${Math.min(idx, 8) * 0.045}s` }}
                >
                  {/* Colour bar */}
                  <div className={`h-[3px] bg-gradient-to-r ${cfg.bar}`} />

                  {/* ── Summary row ── */}
                  <div
                    className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                    onClick={() => setExpandedId(isExpanded ? null : order._id)}
                  >
                    {/* Status emoji */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border text-xl ${cfg.badge}`}>
                      {cfg.emoji}
                    </div>

                    {/* Main info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <div className="flex items-center gap-1">
                          <span className="dmono text-[10px] text-gray-400 tracking-wider flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-md max-w-[130px] truncate">
                            #{(order._id || '').toUpperCase()}
                          </span>
                          <button
                            onClick={e => { e.stopPropagation(); copyText(order._id, order._id + '-hdr'); }}
                            className="w-5 h-5 flex items-center justify-center rounded-md bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 transition-all"
                          >
                            {copiedId === order._id + '-hdr' ? <TbCheck size={10} /> : <TbCopy size={10} />}
                          </button>
                        </div>
                        <span className="text-[10px] text-gray-300">·</span>
                        <span className="text-[10px] text-gray-400">{fmtRel(order.date)}</span>
                      </div>
                      <p className="text-[15px] font-bold text-gray-900 leading-tight">
                        {order.address?.firstName || ''} {order.address?.lastName || ''}
                      </p>
                      <p className="text-[12px] text-gray-400 mt-0.5 truncate">{preview}</p>
                    </div>

                    {/* Desktop meta */}
                    <div className="hidden lg:flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="text-[12px] text-gray-500 flex items-center gap-1">
                        <TbCalendar size={11} className="text-gray-400" />
                        {fmtDate(order.date)}
                      </span>
                      <span className="text-[12px] text-gray-500 flex items-center gap-1">
                        <TbShoppingBag size={11} className="text-gray-400" />
                        {totalQty} item{totalQty !== 1 ? 's' : ''}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11.5px] text-gray-400">{order.paymentMethod || '—'}</span>
                        <PayBadge paid={order.payment} />
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="hidden md:block text-right flex-shrink-0 min-w-[78px]">
                      <div className="text-[18px] font-extrabold text-gray-900 tracking-tight leading-none">
                        {currency}{amount.toLocaleString('en-US')}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Order total</div>
                    </div>

                    {/* Status select + expand */}
                    <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
                      <select
                        value={order.status || 'Order Placed'}
                        disabled={isUpdating}
                        onChange={e => statusHandler(e.target.value, order._id)}
                        className={`ssel pl-3 pr-8 py-2 rounded-xl border text-[12px] font-bold outline-none cursor-pointer transition-all disabled:opacity-60 ${cfg.select}`}
                      >
                        {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {isUpdating && (
                        <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full sp-anim flex-shrink-0" />
                      )}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : order._id)}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0
                          ${isExpanded
                            ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                            : 'border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}
                      >
                        <TbChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Mobile strip */}
                  <div className="sm:hidden flex items-center justify-between px-5 py-2.5 border-t border-gray-50 bg-gray-50/50">
                    <div className="flex items-center gap-1.5">
                      <StatusBadge status={order.status} />
                      <PayBadge paid={order.payment} />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[14px] font-extrabold text-gray-900">{currency}{amount.toLocaleString('en-US')}</span>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : order._id)}
                        className="text-[12px] font-semibold text-indigo-600"
                      >
                        {isExpanded ? '▲ Hide' : '▼ Details'}
                      </button>
                    </div>
                  </div>

                  {/* ── Expanded details ── */}
                  {isExpanded && (
                    <div className="de border-t border-gray-100 bg-[#fafbfc]">
                      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                        {/* COL 1 — Items */}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                              <TbShoppingBag size={12} />Order Items
                            </h3>
                            <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-semibold text-gray-500">
                              {(order.items || []).length} product{(order.items || []).length !== 1 ? 's' : ''}
                            </span>
                          </div>

                          <div className="space-y-0">
                            {(order.items || []).map((item, ii) => {
                              const qty = safeQty(item.quantity);
                              const size = safeSize(item.size);
                              const color = safeColor(item.color);
                              const img = Array.isArray(item.image) ? item.image[0] : item.image;
                              const lineTotal = item.subtotal
                                ? Number(item.subtotal)
                                : item.price ? Number(item.price) * qty : null;

                              return (
                                <div key={ii} className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
                                  <div className="w-10 h-10 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex-shrink-0">
                                    {img
                                      ? <img src={img} alt={item.name} className="w-full h-full object-cover" />
                                      : <div className="w-full h-full flex items-center justify-center text-lg">👕</div>
                                    }
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[13px] font-semibold text-gray-800 leading-snug truncate">{item.name || '—'}</p>
                                    {(size || color) && (
                                      <div className="flex gap-1.5 mt-1 flex-wrap">
                                        {size && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">Size: {size}</span>}
                                        {color && <span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-500">{color.startsWith('#') ? '●' : `Color: ${color}`}</span>}
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                                    <span className="text-[12px] font-bold text-gray-500">×{qty}</span>
                                    {lineTotal != null && (
                                      <span className="text-[12.5px] font-extrabold text-gray-900">
                                        {currency}{lineTotal.toFixed(0)}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                            <span className="text-[12px] text-gray-400">{totalQty} item{totalQty !== 1 ? 's' : ''} · {order.paymentMethod || '—'}</span>
                            <span className="text-[17px] font-extrabold text-gray-900">{currency}{amount.toLocaleString('en-US')}</span>
                          </div>
                        </div>

                        {/* COL 2 — Address + Payment */}
                        <div className="p-5">
                          <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                            <TbMapPin size={12} />Delivery Address
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-5">
                            <p className="text-[14.5px] font-extrabold text-gray-900 mb-2">
                              {order.address?.firstName || ''} {order.address?.lastName || ''}
                            </p>
                            <p className="text-[13px] text-gray-600 leading-relaxed">{order.address?.street || '—'}</p>
                            <p className="text-[13px] text-gray-600">
                              {[order.address?.city, order.address?.state, order.address?.country].filter(Boolean).join(', ') || '—'}
                            </p>
                            {order.address?.zipcode && (
                              <p className="text-[12.5px] text-gray-400 mt-0.5">PIN: {order.address.zipcode}</p>
                            )}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {order.address?.phone && (
                                <div className="flex items-center gap-1">
                                  <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] font-semibold text-gray-700">
                                    <TbPhone size={11} className="text-gray-400" />
                                    {order.address.phone}
                                  </span>
                                  <CopyBtn text={order.address.phone} id={order._id + '-ph'} copiedId={copiedId} onCopy={copyText} />
                                </div>
                              )}
                              {order.address?.email && (
                                <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] text-gray-600 max-w-full truncate">
                                  <TbMail size={11} className="text-gray-400 flex-shrink-0" />
                                  {order.address.email}
                                </span>
                              )}
                            </div>
                          </div>

                          <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                            <TbCreditCard size={12} />Payment Details
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                            {[
                              ['Order ID', (
                                <div className="flex items-center gap-1">
                                  <span className="dmono text-[11px] text-gray-500 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg max-w-[160px] truncate block">
                                    #{(order._id || '').toUpperCase()}
                                  </span>
                                  <CopyBtn text={order._id} id={order._id + '-oid'} copiedId={copiedId} onCopy={copyText} />
                                </div>
                              )],
                              ['Payment ID', order.paymentId ? (
                                <div className="flex items-center gap-1">
                                  <span className="dmono text-[11px] text-gray-500 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg max-w-[160px] truncate block">
                                    {order.paymentId}
                                  </span>
                                  <CopyBtn text={order.paymentId} id={order._id + '-pid'} copiedId={copiedId} onCopy={copyText} />
                                </div>
                              ) : '—'],
                              ['Date', `${fmtDate(order.date)} · ${fmtTime(order.date)}`],
                              ['Method', order.paymentMethod || '—'],
                              ['Status', <PayBadge paid={order.payment} />],
                              ['Total', <span className="text-[15px] font-extrabold text-gray-900">{currency}{amount.toLocaleString('en-US')}</span>],
                            ].map(([k, v], i) => (
                              <div key={i} className={`flex items-center justify-between px-4 py-2.5 text-[13px] ${i < 5 ? 'border-b border-gray-50' : ''}`}>
                                <span className="text-gray-400 font-medium">{k}</span>
                                <span className="font-semibold text-gray-800 text-right">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* COL 3 — Tracker + Quick Update */}
                        <div className="p-5">
                          <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                            <TbChartBar size={12} />Fulfillment Progress
                          </h3>

                          {order.status === 'Cancelled' ? (
                            <div className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-5">
                              <TbBan size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-[13px] font-bold text-red-700">Order Cancelled</p>
                                <p className="text-[12px] text-red-400 mt-0.5">This order will not be fulfilled.</p>
                              </div>
                            </div>
                          ) : (
                            <div className="mb-6">
                              <StatusTracker status={order.status || 'Order Placed'} />
                            </div>
                          )}

                          <h3 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                            <TbBolt size={12} />Quick Update
                          </h3>
                          <div className="space-y-2">
                            {nextSteps.map(s => {
                              const scfg = STATUS_CFG[s];
                              return (
                                <QBtn key={s} disabled={isUpdating} onClick={() => statusHandler(s, order._id)}>
                                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${scfg.dot}`} />
                                  <span>Mark as <strong>{s}</strong></span>
                                  <TbArrowRight size={13} className="ml-auto text-gray-400" />
                                </QBtn>
                              );
                            })}

                            {stepIdx > 0 && order.status !== 'Cancelled' && (
                              <QBtn variant="revert" disabled={isUpdating} onClick={() => statusHandler(STATUS_STEPS[stepIdx - 1], order._id)}>
                                <TbArrowBack size={13} className="text-gray-400" />
                                <span>Revert to <strong>{STATUS_STEPS[stepIdx - 1]}</strong></span>
                              </QBtn>
                            )}

                            {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
                              <QBtn
                                variant="cancel"
                                disabled={isUpdating}
                                onClick={() => {
                                  if (window.confirm('Cancel this order? This cannot be undone.')) {
                                    statusHandler('Cancelled', order._id);
                                  }
                                }}
                              >
                                <TbBan size={13} />
                                <span>Cancel Order</span>
                              </QBtn>
                            )}
                          </div>

                          <div className="flex items-start gap-2.5 p-3 bg-indigo-50 border border-indigo-100 rounded-xl mt-4">
                            <TbAlertCircle size={14} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                            <p className="text-[11.5px] text-indigo-600 leading-relaxed">
                              Use the dropdown or quick buttons to update status. Changes save instantly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom spacer */}
          <div className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Orders;