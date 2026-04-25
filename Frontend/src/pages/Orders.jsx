// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);

//   const loadOrderData = async () => {
//     try {
//       if (!token) return;

//       const response = await axios.post(
//         backendUrl + '/api/order/userorders',
//         {},
//         { headers: { Authorization: `Bearer ${token}`}  }
//       );

//       if (response.data.success) {
//         let allOrdersItem = [];

//         response.data.orders.forEach((order) => {
//           order.items.forEach((item) => {

//             // Quantity extraction (number & custom price)
//             let qtyData = item.quantity;
//             let qty = typeof qtyData === "object" ? qtyData.quantity : qtyData;

//             // Custom price support
//             let customPrice = typeof qtyData === "object" ? qtyData.customPrice : null;

//             // Total price logic
//             let totalPrice =
//               customPrice
//                 ? customPrice * qty
//                 : item.amount
//                   ? item.amount
//                   : item.price * qty;

//             // Fix image (string or array)
//             const img =
//               typeof item.image === "string"
//                 ? item.image
//                 : Array.isArray(item.image)
//                 ? item.image[0]
//                 : "";

//             allOrdersItem.push({
//               ...item,
//               quantity: qty,
//               image: img,
//               total: totalPrice,
//               status: order.status,
//               payment: order.payment,
//               paymentMethod: order.paymentMethod,
//               date: order.date,
//             });
//           });
//         });

//         setOrderData(allOrdersItem.reverse());
//       }
//     } catch (error) {
//       console.log("API error:", error);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className="border-t pt-16 pb-20">
//       <div className="text-center text-2xl mb-10">
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {orderData.length === 0 ? (
//         <p className="text-center text-gray-500">No orders found.</p>
//       ) : (
//         <div>
//           {orderData.map((item, index) => (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-10"
//             >
//               <div className="flex items-start gap-6 text-sm">
//                 <img className="w-16 sm:w-20 object-cover" src={item.image} alt={item.name} />

//                 <div>
//                   <p className="sm:text-base font-medium">{item.name}</p>

//                   <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
//                     <p>
//                       Total: {currency}{item.total.toFixed(2)}
//                     </p>
//                     <p>Qty: {item.quantity}</p>
//                     <p>Size: {item.size}</p>
//                   </div>

//                   <p className="mt-1">
//                     Date:{' '}
//                     <span className="text-gray-400">
//                       {new Date(item.date).toDateString()}
//                     </span>
//                   </p>

//                   <p className="mt-1">
//                     Payment:{' '}
//                     <span className="text-gray-400">{item.paymentMethod}</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="md:w-1/2 flex justify-between">
//                 <div className="flex items-center gap-2">
//                   <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                   <p className="text-sm md:text-base">{item.status}</p>
//                 </div>
//                 <button
//                   onClick={loadOrderData}
//                   className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100"
//                 >
//                   Track Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;




// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import axios from "axios";
// import AccountSidebar from "../components/AccountSidebar";
// import Button from '@mui/material/Button'
// import { FaAngleDown } from "react-icons/fa6";
// import { assets } from "../assets/assets";

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [isOpenOrderProduct, setIsOpenOrderProdcut] = useState(null);
//   const isShowOrderProduct = (index) => {
//     if (isOpenOrderProduct === index) {
//       setIsOpenOrderProdcut(null)
//     } else {
//       setIsOpenOrderProdcut(index);
//     }
//   }

//   const loadOrderData = async () => {
//     try {
//       if (!token) return;

//       const response = await axios.post(
//         backendUrl + "/api/order/userorders",
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         // LIST OF ALL ORDERS WITH INDIVIDUAL ITEMS
//         let flatList = [];

//         response.data.orders.forEach((order) => {
//           order.items.forEach((item) => {
//             flatList.push({
//               ...item,

//               // We already have these from backend
//               subtotal: Number(item.subtotal),
//               saved: Number(item.saved),
//               finalPrice: Number(item.finalPrice),

//               // Order level fields
//               orderId: order._id,
//               userId: order.userId,
//               productId: item._id,
//               orderTotal: Number(order.finalAmount),
//               paymentMethod: order.paymentMethod,
//               payment: order.payment,
//               paymentId: order.paymentId,
//               status: order.status,
//               date: order.date,

//               // flatList.push({
//               // ...item,

//               // // ORDER LEVEL
//               // orderId: order._id,
//               // orderTotal: Number(order.finalAmount),
//               // paymentMethod: order.paymentMethod,
//               // status: order.status,
//               // date: order.date,

//               // 👇 ADDRESS DATA ADD KARO
//               firstName: order.address?.firstName,
//               lastName: order.address?.lastName,
//               email: order.address?.email,
//               phone: order.address?.phone,
//               street: order.address?.street,
//               city: order.address?.city,
//               state: order.address?.state,
//               country: order.address?.country,
//               zipcode: order.address?.zipcode,

//             });
//           });
//         });

//         setOrderData(flatList.reverse());
//       }
//     } catch (error) {
//       console.log("API error:", error);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='container flex flex-col md:flex-row gap-5 m-auto '>
//       <div className='col1 md:w-[20%] py-10'>
//         <AccountSidebar />
//       </div>
//       {/* <div className="border-t pt-4 pb-20 ">
//         <div className="text-center text-2xl mb-10">
//           <Title text1={"MY"} text2={"ORDERS"} />
//         </div>

//         {orderData.length === 0 ? (
//           <p className="text-center text-gray-500">No orders found.</p>
//         ) : (
//           <div>
//             {orderData.map((item, index) => (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-10"
//             >
//               <div className="flex items-start gap-6 text-sm">
//                 <img
//                   className="w-16 sm:w-20 object-cover"
//                   src={item.image}
//                   alt={item.name}
//                 />

//                 <div>
//                   <p className="sm:text-base font-medium">{item.name}</p>

//                   <div className="flex flex-col gap-1 mt-1 text-base text-gray-700">

//                     {/* Subtotal */}
//       {/* <p>
//                       Subtotal: {currency}
//                       {item.subtotal.toFixed(2)}
//                     </p> */}

//       {/* Discount saved */}
//       {/* <p className="text-green-600">
//                       You Saved: {currency}
//                       {item.saved.toFixed(2)}
//                     </p>

//                     <p>Qty: {item.quantity}</p>
//                     <p>Size: {item.size}</p>
//                   </div>

//                   <p className="mt-1">
//                     Date:{" "}
//                     <span className="text-gray-400">
//                       {new Date(item.date).toDateString()}
//                     </span>
//                   </p>

//                   <p className="mt-1">
//                     Payment:{" "}
//                     <span className="text-gray-400">
//                       {item.paymentMethod}
//                     </span>
//                   </p> */}

//       {/* Order Total */}
//       {/* <p className="mt-1 font-semibold text-gray-900">
//                     Total (incl. shipping): {currency}
//                     {item.orderTotal.toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               <div className="md:w-1/2 flex justify-between">
//                 <div className="flex items-center gap-2">
//                   <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                   <p className="text-sm md:text-base">{item.status}</p>
//                 </div>
//                 <button
//                   onClick={loadOrderData}
//                   className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100"
//                 >
//                   Track Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       </div> */}
//       <div className='col2 md:w-[80%]'>
//         <div className="text-center p-4 text-2xl">
//           <Title text1={"MY"} text2={"ORDERS"} />
//         </div>
//         <div className='shadow-md rounded-md bg-white '>
//           <div className='py-4 px-3'>
//             {/* <h2 className='font-semibold text-gray-800'>My Orders</h2>
//                             <p className='text-sm text-gray-600 font-medium'>There are <span className='font-bold text-primary'>3</span> prouduct in My Orders</p> */}
//             {orderData.length === 0 ? (
//               <p className="text-center text-gray-500">No orders found.</p>
//             ) : (
//               <div>
//                 {orderData.map((item, index) => (
//                   <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-md border border-gray-700 mt-4">
//                     <table className="w-full text-sm text-left  text-body">
//                       <thead className="text-sm text-body bg-[#3872fa] text-white border-b rounded-base border-gray-300">
//                         <tr>
//                           <th scope="col" className="px-6 py-3 font-medium">
//                             &nbsp;
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Order Id
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Payment Id
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Payment Method
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Name
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Phone Number
//                           </th>
//                           <th scope="col" className="pl-6 pr-16 py-3 font-medium whitespace-nowrap">
//                             Address
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             PinCode
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Total Amount
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Email
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             User Id
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Order Status
//                           </th>
//                           <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                             Date
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr className="bg-neutral-primary border-b border-gray-400">
//                           <td className="px-6 py-4">
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={() => isShowOrderProduct(index)}><FaAngleDown className={`text-xl text-gray-700 ${isOpenOrderProduct === 0 ? 'rotate-180' : 'rotate-0'}`} /></Button>
//                           </td>
//                           <td className="px-6 py-4 font-medium ">
//                             <span className='text-indigo-600'>{item.orderId}</span>
//                           </td>
//                           <td className="px-6 py-4 font-medium  ">
//                             <span className='text-indigo-600'>
//                               {item.paymentId || "N/A"}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 font-medium  ">
//                             <span className="text-gray-600">
//                               {item.paymentMethod}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                             {/* {item.name} */}
//                             {item.firstName} {item.lastName}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {item.phone}
//                           </td>
//                           <td className="pl-5 py-4 font-medium text-gray-700">
//                             {item.street}, {item.city}, {item.state}, {item.country}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {item.zipcode}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             Subtotal: {currency}
//                             {item.subtotal.toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {item.email}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {item.userId}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                             {/* <Badge status="pending" /> */}
//                             <span className={`px-4 py-1 text-xs rounded-full capitalize
//                                                 ${item.status === 'Order Placed' && 'bg-yellow-600 text-white'}
//                                                 ${item.status === 'Packing' && 'bg-orange-400 text-white'}
//                                                 ${item.status === 'Shipped' && 'bg-orange-600 text-white'}
//                                                 ${item.status === 'Out for delivery' && 'bg-green-400 text-white'}
//                                                 ${item.status === 'Delivered' && 'bg-green-600 text-white'}
//                                                 `}>
//                               {item.status}
//                             </span>

//                             {/* span className={` py-1 px-4 text-xs rounded-full capitalize ${props.status === 'pending' ? 'bg-primary text-white' : 'bg-green-500 text-[#fff]'} ${props.status === 'deliverd' && 'bg-green-700'}`}>{props.status}</span> */}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                             {new Date(item.date).toDateString()}

//                           </td>
//                         </tr>

//                         {
//                           isOpenOrderProduct === index &&
//                           <tr>
//                             <td className='pl-11 pt-2' colSpan="9">
//                               <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs border border-gray-500 ">
//                                 <table className="w-full text-sm text-left rtl:text-right text-body">
//                                   <thead className="text-sm bg-[#2299fe] text-white border-b rounded-base">
//                                     <tr>
//                                       <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                                         Product Id
//                                       </th>
//                                       <th scope="col" className="px-6 py-3 font-medium ">
//                                         Product Title
//                                       </th>
//                                       <th scope="col" className="px-10 py-3 font-medium whitespace-nowrap">
//                                         Image
//                                       </th>
//                                       <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                                         Quantity
//                                       </th>
//                                       <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                                         Discount
//                                       </th>
//                                       <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                                         size
//                                       </th>
//                                       <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                                         Sub Total
//                                       </th>

//                                     </tr>
//                                   </thead>
//                                   <tbody>
//                                     <tr className="bg-neutral-primary border-b border-gray-400">
//                                       <td className="px-6 py-4 text-indigo-600 font-medium">
//                                         {item._id}
//                                       </td>
//                                       <td className="px-6 py-4 text-gray-700 font-medium w-[300px] ">
//                                         {item.name}
//                                       </td>
//                                       <td className="px-6 py-4 font-medium whitespace-nowrap">
//                                         <img src={item.image} className='w-[80px]  rounded-md object-contain bg-white' alt="" />
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                                         {item.quantity}
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700">
//                                         <p className="text-green-600">
//                                           You Saved: {currency}
//                                           {item.saved.toFixed(2)}
//                                         </p>
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700">
//                                         {item.size}
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700">
//                                         Total (incl. shipping): {currency}
//                                         {item.orderTotal.toFixed(2)}
//                                       </td>
//                                     </tr>
//                                     {/* <tr className="bg-neutral-primary border-b border-gray-400">
//                                                                     <td className="px-6 py-4">
//                                                                         <span className='text-gray-700'>68d4d89016a3ed9d35e85556</span>
//                                                                     </td>
//                                                                     <td className="px-6 py-4 text-gray-700 font-medium ">
//                                                                         A-Line Kurti With Sharara & Dup...
//                                                                     </td>
//                                                                     <td className="px-6 py-4 font-medium ">
//                                                                         <img src={item.image} className='w-[40px] h-[40px] rounded-md object-cover' alt="" />
//                                                                     </td>
//                                                                     <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
//                                                                         2
//                                                                     </td>
//                                                                     <td className="px-6 py-4 font-medium text-gray-700">
//                                                                         1300
//                                                                     </td>
//                                                                     <td className="px-6 py-4 font-medium text-gray-700">
//                                                                         1300
//                                                                     </td>
//                                                                 </tr> */}
//                                   </tbody>
//                                 </table>
//                               </div>
//                             </td>
//                           </tr>

//                         }
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;






// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import axios from "axios";
// import AccountSidebar from "../components/AccountSidebar";
// import Button from '@mui/material/Button';
// import { FaAngleDown } from "react-icons/fa6";

// // ── Safe helpers ──────────────────────────────────────────────────────────────
// // Converts any value to a safe renderable string
// const safe = (val) => {
//   if (val === null || val === undefined) return "N/A";
//   if (typeof val === "object") {
//     if (Array.isArray(val)) return val.join(", ");
//     return JSON.stringify(val);
//   }
//   return String(val);
// };

// // ✅ FIX 1: Extract quantity — backend sends {quantity: 2, customPrice: 0}
// const getQuantity = (qty) => {
//   if (qty === null || qty === undefined) return "N/A";
//   if (typeof qty === "object" && qty !== null) {
//     // Backend stores quantity as {quantity: N, customPrice: N}
//     return qty.quantity ?? JSON.stringify(qty);
//   }
//   return qty;
// };

// // Safely get the first image URL whether image is a string or array
// const getImage = (image) => {
//   if (!image) return "";
//   if (typeof image === "string") return image;
//   if (Array.isArray(image)) return image[0] || "";
//   if (typeof image === "object" && image.url) return image.url;
//   return "";
// };

// // ─────────────────────────────────────────────────────────────────────────────

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

//   const isShowOrderProduct = (index) => {
//     setIsOpenOrderProduct(prev => prev === index ? null : index);
//   };

//   const loadOrderData = async () => {
//     try {
//       if (!token) return;

//       const response = await axios.post(
//         backendUrl + "/api/order/userorders",
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         let flatList = [];

//         response.data.orders.forEach((order) => {
//           order.items.forEach((item) => {
//             flatList.push({
//               ...item,
//               subtotal: Number(item.subtotal) || 0,
//               saved: Number(item.saved) || 0,
//               finalPrice: Number(item.finalPrice) || 0,
//               orderId: order._id,
//               userId: order.userId,
//               productId: item.productId || item._id || "N/A",
//               quantity: (typeof item.quantity === "object" && item.quantity !== null)
//                 ? (item.quantity.quantity ?? 1)
//                 : item.quantity,
//               orderTotal: Number(order.finalAmount) || 0,
//               paymentMethod: order.paymentMethod,
//               payment: order.payment,
//               paymentId: order.paymentId,
//               status: order.status,
//               date: order.date,
//               firstName: order.address?.firstName,
//               lastName: order.address?.lastName,
//               email: order.address?.email,
//               phone: order.address?.phone,
//               street: order.address?.street,
//               city: order.address?.city,
//               state: order.address?.state,
//               country: order.address?.country,
//               zipcode: order.address?.zipcode,
//             });
//           });
//         });

//         setOrderData(flatList.reverse());
//       }
//     } catch (error) {
//       console.log("API error:", error);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   const statusColor = (status) => {
//     switch (status) {
//       case "Order Placed": return "bg-yellow-600 text-white";
//       case "Packing": return "bg-orange-400 text-white";
//       case "Shipped": return "bg-orange-600 text-white";
//       case "Out for delivery": return "bg-green-400 text-white";
//       case "Delivered": return "bg-green-600 text-white";
//       default: return "bg-gray-400 text-white";
//     }
//   };

//   return (
//     <div className="container flex flex-col md:flex-row gap-5 m-auto">
//       <div className="col1 md:w-[20%] py-10">
//         <AccountSidebar />
//       </div>

//       <div className="col2 md:w-[80%]">
//         <div className="text-center p-4 text-2xl">
//           <Title text1={"MY"} text2={"ORDERS"} />
//         </div>

//         <div className="shadow-md rounded-md bg-white">
//           <div className="py-4 px-3">

//             {orderData.length === 0 ? (
//               <p className="text-center text-gray-500">No orders found.</p>
//             ) : (
//               <div>
//                 {orderData.map((item, index) => (
//                   <div
//                     key={index}
//                     className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-md border border-gray-700 mt-4"
//                   >
//                     <table className="w-full text-sm text-left text-body">
//                       <thead className="text-sm text-body bg-[#3872fa] text-white border-b rounded-base border-gray-300">
//                         <tr>
//                           <th className="px-6 py-3 font-medium">&nbsp;</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Order Id</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Payment Id</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Payment Method</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Name</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Phone Number</th>
//                           <th className="pl-6 pr-16 py-3 font-medium whitespace-nowrap">Address</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">PinCode</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Total Amount</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Email</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">User Id</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Order Status</th>
//                           <th className="px-6 py-3 font-medium whitespace-nowrap">Date</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr className="bg-neutral-primary border-b border-gray-400">
//                           <td className="px-6 py-4">
//                             <Button
//                               className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
//                               onClick={() => isShowOrderProduct(index)}
//                             >
//                               <FaAngleDown
//                                 className={`text-xl text-gray-700 transition-transform duration-300 ${isOpenOrderProduct === index ? "rotate-180" : "rotate-0"
//                                   }`}
//                               />
//                             </Button>
//                           </td>
//                           <td className="px-6 py-4 font-medium">
//                             <span className="text-indigo-600">{safe(item.orderId)}</span>
//                           </td>
//                           <td className="px-6 py-4 font-medium">
//                             <span className="text-indigo-600">{safe(item.paymentId) || "N/A"}</span>
//                           </td>
//                           <td className="px-6 py-4 font-medium">
//                             <span className="text-gray-600">{safe(item.paymentMethod)}</span>
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                             {safe(item.firstName)} {safe(item.lastName)}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {safe(item.phone)}
//                           </td>
//                           <td className="pl-5 py-4 font-medium text-gray-700">
//                             {safe(item.street)}, {safe(item.city)}, {safe(item.state)}, {safe(item.country)}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {safe(item.zipcode)}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             Subtotal: {currency}{item.subtotal.toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {safe(item.email)}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700">
//                             {safe(item.userId)}
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                             <span className={`px-4 py-1 text-xs rounded-full capitalize ${statusColor(item.status)}`}>
//                               {safe(item.status)}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                             {new Date(item.date).toDateString()}
//                           </td>
//                         </tr>

//                         {/* ── Expandable product detail row ── */}
//                         {isOpenOrderProduct === index && (
//                           <tr>
//                             <td className="pl-11 pt-2" colSpan="13">
//                               <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs border border-gray-500">
//                                 <table className="w-full text-sm text-left text-body">
//                                   <thead className="text-sm bg-[#2299fe] text-white border-b rounded-base">
//                                     <tr>
//                                       <th className="px-6 py-3 font-medium whitespace-nowrap">Product Id</th>
//                                       <th className="px-6 py-3 font-medium">Product Title</th>
//                                       <th className="px-10 py-3 font-medium whitespace-nowrap">Image</th>
//                                       <th className="px-6 py-3 font-medium whitespace-nowrap">Quantity</th>
//                                       <th className="px-6 py-3 font-medium whitespace-nowrap">Discount</th>
//                                       <th className="px-6 py-3 font-medium whitespace-nowrap">Size</th>
//                                       <th className="px-6 py-3 font-medium whitespace-nowrap">Sub Total</th>
//                                     </tr>
//                                   </thead>
//                                   <tbody>
//                                     <tr className="bg-neutral-primary border-b border-gray-400">
//                                       <td className="px-6 py-4 text-indigo-600 font-medium">
//                                         {safe(item.productId)}
//                                       </td>
//                                       <td className="px-6 py-4 text-gray-700 font-medium w-[300px]">
//                                         {safe(item.name)}
//                                       </td>
//                                       <td className="px-6 py-4 font-medium whitespace-nowrap">
//                                         {getImage(item.image) ? (
//                                           <img
//                                             src={getImage(item.image)}
//                                             className="w-[80px] rounded-md object-contain bg-white"
//                                             alt={safe(item.name)}
//                                           />
//                                         ) : (
//                                           <span className="text-gray-400 text-xs">No image</span>
//                                         )}
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
//                                         {item.quantity ?? "N/A"}
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700">
//                                         <p className="text-green-600">
//                                           You Saved: {currency}{item.saved.toFixed(2)}
//                                         </p>
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700">
//                                         {safe(item.size)}
//                                       </td>
//                                       <td className="px-6 py-4 font-medium text-gray-700">
//                                         Total (incl. shipping): {currency}{item.orderTotal.toFixed(2)}
//                                       </td>
//                                     </tr>
//                                   </tbody>
//                                 </table>
//                               </div>
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;






// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";
// import AccountSidebar from "../components/AccountSidebar";

// /* ── Helpers ─────────────────────────────── */
// const safe = (val) => {
//   if (val === null || val === undefined) return "N/A";
//   if (typeof val === "object") return Array.isArray(val) ? val.join(", ") : JSON.stringify(val);
//   return String(val);
// };
// const getImage = (image) => {
//   if (!image) return "";
//   if (typeof image === "string") return image;
//   if (Array.isArray(image)) return image[0] || "";
//   if (typeof image === "object" && image.url) return image.url;
//   return "";
// };

// /* ── Icons ───────────────────────────────── */
// const IconBox = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
//       stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconChevron = ({ open }) => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//     style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
//     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IconCalendar = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
//     <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconTag = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
//       stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//     <circle cx="7" cy="7" r="1.5" fill="currentColor" />
//   </svg>
// );
// const IconCreditCard = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
//     <path d="M1 10h22" stroke="currentColor" strokeWidth="1.4" />
//   </svg>
// );
// const IconMapPin = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
//   </svg>
// );
// const IconEmpty = () => (
//   <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
//     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
//       stroke="rgba(200,151,58,0.3)" strokeWidth="0.8" strokeLinejoin="round" />
//   </svg>
// );
// const IconArrow = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// /* ── Status config ───────────────────────── */
// const STATUS_CFG = {
//   "Order Placed": { color: "#f7c568", bg: "rgba(247,197,104,0.12)", border: "rgba(247,197,104,0.3)", dot: "#f7c568", step: 1 },
//   "Packing": { color: "#fb923c", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.3)", dot: "#fb923c", step: 2 },
//   "Shipped": { color: "#60a5fa", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.3)", dot: "#60a5fa", step: 3 },
//   "Out for delivery": { color: "#34d399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)", dot: "#34d399", step: 4 },
//   "Delivered": { color: "#4ade80", bg: "rgba(74,222,128,0.12)", border: "rgba(74,222,128,0.3)", dot: "#4ade80", step: 5 },
// };
// const STATUS_STEPS = ["Order Placed", "Packing", "Shipped", "Out for delivery", "Delivered"];

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Montserrat:wght@300;400;500;600;700&display=swap');

//   :root{
//     --gold:#c8973a; --gold-lt:#f7c568; --cream:#f0dfc0;
//     --bg:#1a0f0a; --card:linear-gradient(160deg,#1e120a,#150c05);
//     --border:rgba(200,151,58,0.18);
//   }

//   @keyframes odUp  { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
//   @keyframes odIn  { from{opacity:0;transform:translateY(18px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)} }
//   @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.5} }

//   .od-page { animation:odUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

//   /* ── Order card ── */
//   .od-card {
//     background:var(--card);
//     border:1px solid var(--border);
//     border-radius:10px; overflow:hidden;
//     transition:border-color 0.28s, box-shadow 0.28s;
//     animation:odIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .od-card:hover { border-color:rgba(200,151,58,0.38); box-shadow:0 12px 40px rgba(0,0,0,0.5); }
//   .od-card::before {
//     content:''; display:block; height:2px;
//     background:linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent);
//     opacity:0.55;
//   }

//   /* ── Expand toggle ── */
//   .od-toggle {
//     width:100%; display:flex; align-items:center; justify-content:space-between;
//     padding:18px 20px; background:none; border:none; cursor:pointer;
//     text-align:left; transition:background 0.2s;
//   }
//   .od-toggle:hover { background:rgba(200,151,58,0.04); }

//   /* ── Meta pill ── */
//   .od-pill {
//     display:inline-flex; align-items:center; gap:5px;
//     padding:4px 10px; border-radius:5px;
//     font-size:9px; letter-spacing:0.18em;
//     font-family:'Montserrat',sans-serif; font-weight:600;
//     white-space:nowrap;
//   }

//   /* ── Progress track ── */
//   .od-track {
//     display:flex; align-items:center;
//     gap:0; width:100%;
//   }
//   .od-step-dot {
//     width:28px; height:28px; border-radius:50%;
//     display:flex; align-items:center; justify-content:center;
//     flex-shrink:0; font-size:9px; font-weight:700;
//     font-family:'Montserrat',sans-serif;
//     transition:all 0.3s;
//   }
//   .od-step-line {
//     flex:1; height:2px;
//     background:rgba(200,151,58,0.12);
//     transition:background 0.3s;
//   }
//   .od-step-line.done { background:linear-gradient(to right,#c8973a,#f7c568); }

//   /* ── Product row ── */
//   .od-product-row {
//     display:flex; align-items:center; gap:14px;
//     padding:14px 0;
//     border-bottom:1px solid rgba(200,151,58,0.08);
//   }
//   .od-product-row:last-child { border-bottom:none; }

//   /* ── Info grid ── */
//   .od-info-grid {
//     display:grid;
//     grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
//     gap:12px;
//   }
//   .od-info-cell {
//     display:flex; flex-direction:column; gap:3px;
//     padding:10px 14px;
//     background:rgba(200,151,58,0.04);
//     border:1px solid rgba(200,151,58,0.1);
//     border-radius:6px;
//   }

//   /* ── Expandable detail panel ── */
//   .od-detail {
//     overflow:hidden;
//     transition:max-height 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.28s;
//   }

//   .od-copy-btn {
//     background:none; border:none; cursor:pointer;
//     color:rgba(200,151,58,0.5); font-size:9px;
//     font-family:'Montserrat',sans-serif; letter-spacing:0.1em;
//     padding:0; transition:color 0.2s;
//   }
//   .od-copy-btn:hover { color:#c8973a; }
// `;

// /* ── Copy to clipboard ── */
// const useCopy = () => {
//   const [copied, setCopied] = useState(null);
//   const copy = (text, key) => {
//     navigator.clipboard?.writeText(text);
//     setCopied(key);
//     setTimeout(() => setCopied(null), 1800);
//   };
//   return { copied, copy };
// };

// /* ── Status badge ── */
// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CFG[status] || { color: "#9ca3af", bg: "rgba(156,163,175,0.12)", border: "rgba(156,163,175,0.3)", dot: "#9ca3af" };
//   return (
//     <div className="od-pill" style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}>
//       <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, flexShrink: 0, display: "inline-block" }} />
//       {status || "Pending"}
//     </div>
//   );
// };

// /* ── Progress bar ── */
// const ProgressBar = ({ status }) => {
//   const cur = STATUS_CFG[status]?.step || 0;
//   return (
//     <div style={{ padding: "16px 20px 18px" }}>
//       <div className="od-track">
//         {STATUS_STEPS.map((s, i) => {
//           const done = cur >= i + 1;
//           const current = cur === i + 1;
//           const cfg = STATUS_CFG[s];
//           return (
//             <React.Fragment key={s}>
//               <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, flexShrink: 0 }}>
//                 <div className="od-step-dot" style={{
//                   background: done ? "linear-gradient(135deg,#c8973a,#f7c568)" : "rgba(200,151,58,0.08)",
//                   border: current ? `2px solid #f7c568` : done ? "none" : "1px solid rgba(200,151,58,0.2)",
//                   color: done ? "#1a0f0a" : "rgba(200,151,58,0.4)",
//                   boxShadow: current ? `0 0 12px rgba(247,197,104,0.4)` : "none",
//                 }}>
//                   {done ? "✓" : i + 1}
//                 </div>
//                 <span style={{
//                   fontSize: 7, letterSpacing: "0.16em",
//                   fontFamily: "Montserrat,sans-serif", fontWeight: 600,
//                   color: done ? "#c8973a" : "rgba(200,151,58,0.3)",
//                   whiteSpace: "nowrap",
//                   display: "none",
//                 }}>
//                   {s.toUpperCase()}
//                 </span>
//               </div>
//               {i < STATUS_STEPS.length - 1 && (
//                 <div className={`od-step-line ${cur > i + 1 ? "done" : ""}`} />
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>
//       {/* Current step label */}
//       <p style={{
//         fontSize: 9, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//         letterSpacing: "0.22em", marginTop: 10, textAlign: "center"
//       }}>
//         {status?.toUpperCase() || "PENDING"}
//       </p>
//     </div>
//   );
// };

// /* ── Single order card ── */
// const OrderCard = ({ item, index, currency }) => {
//   const [open, setOpen] = useState(false);
//   const { copied, copy } = useCopy();
//   const imgSrc = getImage(item.image);

//   return (
//     <div className="od-card" style={{ animationDelay: `${index * 0.06}s` }}>

//       {/* ── Toggle header ── */}
//       <button className="od-toggle" onClick={() => setOpen(o => !o)}>
//         <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, flexWrap: "wrap", minWidth: 0 }}>

//           {/* Product image thumb */}
//           <div style={{
//             width: 46, height: 46, borderRadius: 6, overflow: "hidden",
//             background: "#fff", flexShrink: 0, border: "1px solid rgba(200,151,58,0.2)"
//           }}>
//             {imgSrc
//               ? <img src={imgSrc} alt={item.name}
//                 style={{ width: "100%", height: "100%", objectFit: "contain", padding: 3 }} />
//               : <div style={{
//                 width: "100%", height: "100%", display: "flex", alignItems: "center",
//                 justifyContent: "center", color: "rgba(200,151,58,0.3)"
//               }}><IconBox /></div>
//             }
//           </div>

//           {/* Name + order id */}
//           <div style={{ flex: 1, minWidth: 0 }}>
//             <p style={{
//               fontSize: 13, color: "#f0dfc0", fontFamily: "'Cormorant Garamond',serif",
//               lineHeight: 1.3, marginBottom: 3,
//               overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 260
//             }}>
//               {safe(item.name)}
//             </p>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
//               <span style={{
//                 fontSize: 8, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//                 letterSpacing: "0.12em"
//               }}>
//                 #{safe(item.orderId).slice(-10).toUpperCase()}
//               </span>
//               <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(200,151,58,0.25)" }} />
//               <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#6a5030" }}>
//                 <IconCalendar />
//                 <span style={{ fontSize: 8, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.08em" }}>
//                   {new Date(item.date).toDateString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: status + price + chevron */}
//         <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
//           <StatusBadge status={item.status} />
//           <div style={{ textAlign: "right" }}>
//             <p style={{
//               fontSize: 15, color: "#f7c568", fontFamily: "'Cormorant Garamond',serif",
//               fontWeight: 600, lineHeight: 1
//             }}>
//               {currency}{item.orderTotal.toFixed(2)}
//             </p>
//             <p style={{
//               fontSize: 8, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//               letterSpacing: "0.1em", marginTop: 2
//             }}>
//               QTY {item.quantity ?? 1}
//             </p>
//           </div>
//           <div style={{ color: "rgba(200,151,58,0.6)" }}>
//             <IconChevron open={open} />
//           </div>
//         </div>
//       </button>

//       {/* ── Expandable detail ── */}
//       <div className="od-detail" style={{ maxHeight: open ? 900 : 0, opacity: open ? 1 : 0 }}>
//         <div style={{ borderTop: "1px solid rgba(200,151,58,0.1)", padding: "0 20px 20px" }}>

//           {/* Progress */}
//           <ProgressBar status={item.status} />

//           <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent)", margin: "4px 0 18px" }} />

//           {/* Product detail */}
//           <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
//             <div style={{
//               width: 80, height: 80, borderRadius: 8, overflow: "hidden",
//               background: "#fff", flexShrink: 0, border: "1px solid rgba(200,151,58,0.2)"
//             }}>
//               {imgSrc
//                 ? <img src={imgSrc} alt={item.name}
//                   style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }} />
//                 : <div style={{
//                   width: "100%", height: "100%", display: "flex", alignItems: "center",
//                   justifyContent: "center", color: "rgba(200,151,58,0.2)"
//                 }}><IconBox /></div>
//               }
//             </div>
//             <div style={{ flex: 1, minWidth: 180 }}>
//               <p style={{
//                 fontSize: 8, color: "#6a5030", letterSpacing: "0.26em",
//                 fontFamily: "Montserrat,sans-serif", marginBottom: 4
//               }}>LAMBSKIN LEATHER</p>
//               <p style={{
//                 fontSize: 15, color: "#f0dfc0", fontFamily: "'Cormorant Garamond',serif",
//                 lineHeight: 1.4, marginBottom: 8
//               }}>
//                 {safe(item.name)}
//               </p>
//               <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//                 {item.size && (
//                   <span style={{
//                     fontSize: 9, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.18em", padding: "3px 10px",
//                     background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.2)",
//                     borderRadius: 4
//                   }}>
//                     SIZE: {safe(item.size)}
//                   </span>
//                 )}
//                 <span style={{
//                   fontSize: 9, color: "rgba(240,220,190,0.5)", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.15em", padding: "3px 10px",
//                   background: "rgba(200,151,58,0.04)", border: "1px solid rgba(200,151,58,0.12)",
//                   borderRadius: 4
//                 }}>
//                   QTY: {item.quantity ?? 1}
//                 </span>
//                 {item.saved > 0 && (
//                   <span style={{
//                     fontSize: 9, color: "#4ade80", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.12em", padding: "3px 10px",
//                     background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)",
//                     borderRadius: 4
//                   }}>
//                     SAVED {currency}{item.saved.toFixed(2)}
//                   </span>
//                 )}
//               </div>
//             </div>
//             {/* Subtotal */}
//             <div style={{ textAlign: "right", flexShrink: 0 }}>
//               <p style={{
//                 fontSize: 9, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//                 letterSpacing: "0.18em", marginBottom: 4
//               }}>SUBTOTAL</p>
//               <p style={{
//                 fontSize: 20, color: "#f7c568", fontFamily: "'Cormorant Garamond',serif",
//                 fontWeight: 600
//               }}>
//                 {currency}{item.subtotal.toFixed(2)}
//               </p>
//               <p style={{
//                 fontSize: 8, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//                 letterSpacing: "0.1em", marginTop: 2
//               }}>
//                 incl. shipping
//               </p>
//             </div>
//           </div>

//           {/* Info grid */}
//           <div className="od-info-grid">
//             {/* Order ID */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconTag />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>ORDER ID</span>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                 <span style={{
//                   fontSize: 9.5, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif",
//                   overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130
//                 }}>
//                   {safe(item.orderId)}
//                 </span>
//                 <button className="od-copy-btn"
//                   onClick={() => copy(safe(item.orderId), `oid-${index}`)}>
//                   {copied === `oid-${index}` ? "✓" : "COPY"}
//                 </button>
//               </div>
//             </div>

//             {/* Payment */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconCreditCard />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>PAYMENT</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif" }}>
//                 {safe(item.paymentMethod)}
//               </span>
//               {item.paymentId && item.paymentId !== "N/A" && (
//                 <span style={{
//                   fontSize: 8, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//                   overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
//                 }}>
//                   {safe(item.paymentId).slice(0, 18)}…
//                 </span>
//               )}
//             </div>

//             {/* Name */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//                   <circle cx="12" cy="8" r="4" stroke="#c8973a" strokeWidth="1.4" />
//                   <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//                 </svg>
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>CUSTOMER</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif" }}>
//                 {safe(item.firstName)} {safe(item.lastName)}
//               </span>
//               <span style={{ fontSize: 8, color: "#6a5030", fontFamily: "Montserrat,sans-serif" }}>
//                 {safe(item.phone)}
//               </span>
//             </div>

//             {/* Address */}
//             <div className="od-info-cell" style={{ gridColumn: "span 2" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconMapPin />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>DELIVERY ADDRESS</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif", lineHeight: 1.5 }}>
//                 {[item.street, item.city, item.state, item.country].filter(v => v && v !== "N/A").join(", ")}
//               </span>
//               {item.zipcode && item.zipcode !== "N/A" && (
//                 <span style={{ fontSize: 8, color: "#6a5030", fontFamily: "Montserrat,sans-serif" }}>
//                   PIN: {safe(item.zipcode)}
//                 </span>
//               )}
//             </div>

//             {/* Date */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconCalendar />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>ORDER DATE</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif" }}>
//                 {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ══════════════════════════════════════════
//    ORDERS PAGE
// ══════════════════════════════════════════ */
// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("ALL");

//   const loadOrderData = async () => {
//     try {
//       if (!token) return;
//       setLoading(true);
//       const res = await axios.post(
//         backendUrl + "/api/order/userorders", {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       if (res.data.success) {
//         let flat = [];
//         res.data.orders.forEach(order => {
//           order.items.forEach(item => {
//             flat.push({
//               ...item,
//               subtotal: Number(item.subtotal) || 0,
//               saved: Number(item.saved) || 0,
//               finalPrice: Number(item.finalPrice) || 0,
//               orderId: order._id,
//               userId: order.userId,
//               productId: item.productId || item._id || "N/A",
//               quantity: typeof item.quantity === "object" && item.quantity !== null
//                 ? (item.quantity.quantity ?? 1) : item.quantity,
//               orderTotal: Number(order.finalAmount) || 0,
//               paymentMethod: order.paymentMethod,
//               payment: order.payment,
//               paymentId: order.paymentId,
//               status: order.status,
//               date: order.date,
//               firstName: order.address?.firstName,
//               lastName: order.address?.lastName,
//               email: order.address?.email,
//               phone: order.address?.phone,
//               street: order.address?.street,
//               city: order.address?.city,
//               state: order.address?.state,
//               country: order.address?.country,
//               zipcode: order.address?.zipcode,
//             });
//           });
//         });
//         setOrderData(flat.reverse());
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { loadOrderData(); }, [token]);

//   const statusFilters = ["ALL", ...STATUS_STEPS];
//   const filtered = filter === "ALL"
//     ? orderData
//     : orderData.filter(o => o.status === filter);

//   return (
//     <>
//       <style>{STYLES}</style>
//       <div className="od-page" style={{ background: "#1a0f0a", minHeight: "100vh", fontFamily: "Georgia,serif" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px 80px" }}>
//           <div className="flex flex-col md:flex-row gap-6">

//             {/* Sidebar */}
//             <div style={{ width: "100%", maxWidth: 240, flexShrink: 0 }}>
//               <AccountSidebar />
//             </div>

//             {/* Main */}
//             <div style={{ flex: 1, minWidth: 0 }}>

//               {/* Header */}
//               <div style={{ marginBottom: 26 }}>
//                 <p style={{
//                   fontSize: 8.5, letterSpacing: "0.44em", color: "#c8973a",
//                   fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 5
//                 }}>
//                   D DOLLY LAMB
//                 </p>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
//                   <div>
//                     <h1 style={{
//                       fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#f7c568",
//                       fontWeight: 400, letterSpacing: "0.1em", margin: 0
//                     }}>
//                       MY ORDERS
//                     </h1>
//                     <p style={{ fontSize: 10, color: "#6a5030", fontFamily: "Montserrat,sans-serif", marginTop: 4 }}>
//                       {filtered.length} {filtered.length === 1 ? "order" : "orders"} found
//                     </p>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                     <div style={{ width: 50, height: 1, background: "linear-gradient(to left,rgba(200,151,58,0.3),transparent)" }} />
//                     <div style={{ width: 6, height: 6, background: "#c8973a", transform: "rotate(45deg)", flexShrink: 0 }} />
//                     <div style={{ width: 50, height: 1, background: "linear-gradient(to right,rgba(200,151,58,0.3),transparent)" }} />
//                   </div>
//                 </div>
//               </div>

//               {/* Filter tabs */}
//               <div style={{
//                 background: "linear-gradient(160deg,#1e120a,#150c05)",
//                 border: "1px solid rgba(200,151,58,0.13)", borderRadius: 8,
//                 padding: "10px 14px", marginBottom: 18,
//                 display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
//               }}>
//                 <span style={{
//                   fontSize: 8, color: "#6a5030", letterSpacing: "0.24em",
//                   fontFamily: "Montserrat,sans-serif", marginRight: 4
//                 }}>FILTER</span>
//                 {statusFilters.map(s => {
//                   const cfg = STATUS_CFG[s];
//                   const active = filter === s;
//                   return (
//                     <button key={s}
//                       onClick={() => setFilter(s)}
//                       style={{
//                         padding: "6px 12px", borderRadius: 5, cursor: "pointer",
//                         border: active
//                           ? `1px solid ${cfg?.color || "#c8973a"}`
//                           : "1px solid rgba(200,151,58,0.18)",
//                         background: active
//                           ? (cfg?.bg || "rgba(200,151,58,0.1)")
//                           : "transparent",
//                         color: active ? (cfg?.color || "#c8973a") : "rgba(240,220,190,0.4)",
//                         fontSize: 9, letterSpacing: "0.16em",
//                         fontFamily: "Montserrat,sans-serif", fontWeight: active ? 600 : 400,
//                         transition: "all 0.2s",
//                       }}>
//                       {s}
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Loading */}
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: "60px 0" }}>
//                   <div style={{
//                     width: 28, height: 28, border: "2px solid rgba(200,151,58,0.2)",
//                     borderTopColor: "#c8973a", borderRadius: "50%",
//                     animation: "pulse 1s ease infinite", margin: "0 auto 14px"
//                   }} />
//                   <p style={{
//                     fontSize: 10, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.2em"
//                   }}>LOADING ORDERS…</p>
//                 </div>

//               ) : filtered.length === 0 ? (
//                 /* Empty state */
//                 <div style={{
//                   background: "linear-gradient(160deg,#1e120a,#150c05)",
//                   border: "1px solid rgba(200,151,58,0.14)", borderRadius: 10,
//                   padding: "70px 24px", textAlign: "center"
//                 }}>
//                   <div style={{ marginBottom: 18, opacity: 0.6 }}><IconEmpty /></div>
//                   <p style={{
//                     fontSize: "clamp(1.1rem,2.5vw,1.7rem)", color: "#f7c568",
//                     fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", marginBottom: 10
//                   }}>
//                     No orders yet
//                   </p>
//                   <p style={{
//                     fontSize: 10, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.1em", marginBottom: 26
//                   }}>
//                     Your order history will appear here
//                   </p>
//                 </div>

//               ) : (
//                 <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//                   {filtered.map((item, i) => (
//                     <OrderCard key={`${item.orderId}-${i}`} item={item} index={i} currency={currency} />
//                   ))}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Orders;






// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";
// import AccountSidebar from "../components/AccountSidebar";

// /* ── Helpers ─────────────────────────────── */
// const safe = (val) => {
//   if (val === null || val === undefined) return "N/A";
//   if (typeof val === "object") return Array.isArray(val) ? val.join(", ") : JSON.stringify(val);
//   return String(val);
// };
// const getImage = (image) => {
//   if (!image) return "";
//   if (typeof image === "string") return image;
//   if (Array.isArray(image)) return image[0] || "";
//   if (typeof image === "object" && image.url) return image.url;
//   return "";
// };

// /* ── Icons ───────────────────────────────── */
// const IconBox = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
//       stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconChevron = ({ open }) => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//     style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
//     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const IconCalendar = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
//     <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconTag = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
//       stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//     <circle cx="7" cy="7" r="1.5" fill="currentColor" />
//   </svg>
// );
// const IconCreditCard = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
//     <path d="M1 10h22" stroke="currentColor" strokeWidth="1.4" />
//   </svg>
// );
// const IconMapPin = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//     <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
//   </svg>
// );
// const IconEmpty = () => (
//   <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
//     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
//       stroke="rgba(200,151,58,0.3)" strokeWidth="0.8" strokeLinejoin="round" />
//   </svg>
// );
// const IconArrow = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// /* ── Status config ───────────────────────── */
// const STATUS_CFG = {
//   "Order Placed": { color: "#f7c568", bg: "rgba(247,197,104,0.12)", border: "rgba(247,197,104,0.3)", dot: "#f7c568", step: 1 },
//   "Packing": { color: "#fb923c", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.3)", dot: "#fb923c", step: 2 },
//   "Shipped": { color: "#60a5fa", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.3)", dot: "#60a5fa", step: 3 },
//   "Out for delivery": { color: "#34d399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)", dot: "#34d399", step: 4 },
//   "Delivered": { color: "#4ade80", bg: "rgba(74,222,128,0.12)", border: "rgba(74,222,128,0.3)", dot: "#4ade80", step: 5 },
// };
// const STATUS_STEPS = ["Order Placed", "Packing", "Shipped", "Out for delivery", "Delivered"];

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Montserrat:wght@300;400;500;600;700&display=swap');

//   :root{
//     --gold:#c8973a; --gold-lt:#f7c568; --cream:#f0dfc0;
//     --bg:#1a0f0a; --card:linear-gradient(160deg,#1e120a,#150c05);
//     --border:rgba(200,151,58,0.18);
//   }

//   @keyframes odUp  { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
//   @keyframes odIn  { from{opacity:0;transform:translateY(18px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)} }
//   @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.5} }

//   .od-page { animation:odUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

//   /* ── Order card ── */
//   .od-card {
//     background:var(--card);
//     border:1px solid var(--border);
//     border-radius:10px; overflow:hidden;
//     transition:border-color 0.28s, box-shadow 0.28s;
//     animation:odIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .od-card:hover { border-color:rgba(200,151,58,0.38); box-shadow:0 12px 40px rgba(0,0,0,0.5); }
//   .od-card::before {
//     content:''; display:block; height:2px;
//     background:linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent);
//     opacity:0.55;
//   }

//   /* ── Expand toggle ── */
//   .od-toggle {
//     width:100%; display:flex; align-items:center; justify-content:space-between;
//     padding:18px 20px; background:none; border:none; cursor:pointer;
//     text-align:left; transition:background 0.2s;
//   }
//   .od-toggle:hover { background:rgba(200,151,58,0.04); }

//   /* ── Meta pill ── */
//   .od-pill {
//     display:inline-flex; align-items:center; gap:5px;
//     padding:4px 10px; border-radius:5px;
//     font-size:9px; letter-spacing:0.18em;
//     font-family:'Montserrat',sans-serif; font-weight:600;
//     white-space:nowrap;
//   }

//   /* ── Progress track ── */
//   .od-track {
//     display:flex; align-items:center;
//     gap:0; width:100%;
//   }
//   .od-step-dot {
//     width:28px; height:28px; border-radius:50%;
//     display:flex; align-items:center; justify-content:center;
//     flex-shrink:0; font-size:9px; font-weight:700;
//     font-family:'Montserrat',sans-serif;
//     transition:all 0.3s;
//   }
//   .od-step-line {
//     flex:1; height:2px;
//     background:rgba(200,151,58,0.12);
//     transition:background 0.3s;
//   }
//   .od-step-line.done { background:linear-gradient(to right,#c8973a,#f7c568); }

//   /* ── Product row ── */
//   .od-product-row {
//     display:flex; align-items:center; gap:14px;
//     padding:14px 0;
//     border-bottom:1px solid rgba(200,151,58,0.08);
//   }
//   .od-product-row:last-child { border-bottom:none; }

//   /* ── Info grid ── */
//   .od-info-grid {
//     display:grid;
//     grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
//     gap:12px;
//   }
//   .od-info-cell {
//     display:flex; flex-direction:column; gap:3px;
//     padding:10px 14px;
//     background:rgba(200,151,58,0.04);
//     border:1px solid rgba(200,151,58,0.1);
//     border-radius:6px;
//   }

//   /* ── Expandable detail panel ── */
//   .od-detail {
//     overflow:hidden;
//     transition:max-height 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.28s;
//   }

//   .od-copy-btn {
//     background:none; border:none; cursor:pointer;
//     color:rgba(200,151,58,0.5); font-size:9px;
//     font-family:'Montserrat',sans-serif; letter-spacing:0.1em;
//     padding:0; transition:color 0.2s;
//   }
//   .od-copy-btn:hover { color:#c8973a; }
// `;

// /* ── Copy to clipboard ── */
// const useCopy = () => {
//   const [copied, setCopied] = useState(null);
//   const copy = (text, key) => {
//     navigator.clipboard?.writeText(text);
//     setCopied(key);
//     setTimeout(() => setCopied(null), 1800);
//   };
//   return { copied, copy };
// };

// /* ── Status badge ── */
// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CFG[status] || { color: "#9ca3af", bg: "rgba(156,163,175,0.12)", border: "rgba(156,163,175,0.3)", dot: "#9ca3af" };
//   return (
//     <div className="od-pill" style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}>
//       <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, flexShrink: 0, display: "inline-block" }} />
//       {status || "Pending"}
//     </div>
//   );
// };

// /* ── Progress bar ── */
// const ProgressBar = ({ status }) => {
//   const cur = STATUS_CFG[status]?.step || 0;
//   return (
//     <div style={{ padding: "16px 20px 18px" }}>
//       <div className="od-track">
//         {STATUS_STEPS.map((s, i) => {
//           const done = cur >= i + 1;
//           const current = cur === i + 1;
//           const cfg = STATUS_CFG[s];
//           return (
//             <React.Fragment key={s}>
//               <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, flexShrink: 0 }}>
//                 <div className="od-step-dot" style={{
//                   background: done ? "linear-gradient(135deg,#c8973a,#f7c568)" : "rgba(200,151,58,0.08)",
//                   border: current ? `2px solid #f7c568` : done ? "none" : "1px solid rgba(200,151,58,0.2)",
//                   color: done ? "#1a0f0a" : "rgba(200,151,58,0.4)",
//                   boxShadow: current ? `0 0 12px rgba(247,197,104,0.4)` : "none",
//                 }}>
//                   {done ? "✓" : i + 1}
//                 </div>
//                 <span style={{
//                   fontSize: 7, letterSpacing: "0.16em",
//                   fontFamily: "Montserrat,sans-serif", fontWeight: 600,
//                   color: done ? "#c8973a" : "rgba(200,151,58,0.3)",
//                   whiteSpace: "nowrap",
//                   display: "none",
//                 }}>
//                   {s.toUpperCase()}
//                 </span>
//               </div>
//               {i < STATUS_STEPS.length - 1 && (
//                 <div className={`od-step-line ${cur > i + 1 ? "done" : ""}`} />
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>
//       {/* Current step label */}
//       <p style={{
//         fontSize: 9, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//         letterSpacing: "0.22em", marginTop: 10, textAlign: "center"
//       }}>
//         {status?.toUpperCase() || "PENDING"}
//       </p>
//     </div>
//   );
// };

// /* ── Single order card ── */
// const OrderCard = ({ item, index, currency, loadOrderData }) => {
//   const [open, setOpen] = useState(false);
//   const { copied, copy } = useCopy();
//   const imgSrc = getImage(item.image);

//   return (
//     <div className="od-card" style={{ animationDelay: `${index * 0.06}s` }}>

//       {/* ── Toggle header ── */}
//       <button className="od-toggle" onClick={() => setOpen(o => !o)}>
//         <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, flexWrap: "wrap", minWidth: 0 }}>

//           {/* Product image thumb */}
//           <div style={{
//             width: 46, height: 46, borderRadius: 6, overflow: "hidden",
//             background: "#fff", flexShrink: 0, border: "1px solid rgba(200,151,58,0.2)"
//           }}>
//             {imgSrc
//               ? <img src={imgSrc} alt={item.name}
//                 style={{ width: "100%", height: "100%", objectFit: "contain", padding: 3 }} />
//               : <div style={{
//                 width: "100%", height: "100%", display: "flex", alignItems: "center",
//                 justifyContent: "center", color: "rgba(200,151,58,0.3)"
//               }}><IconBox /></div>
//             }
//           </div>

//           {/* Name + order id */}
//           <div style={{ flex: 1, minWidth: 0 }}>
//             <p style={{
//               fontSize: 13, color: "#f0dfc0", fontFamily: "'Cormorant Garamond',serif",
//               lineHeight: 1.3, marginBottom: 3,
//               overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 260
//             }}>
//               {safe(item.name)}
//             </p>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
//               <span style={{
//                 fontSize: 9, color: "#c4a060", fontFamily: "Montserrat,sans-serif",
//                 letterSpacing: "0.1em"
//               }}>
//                 #{safe(item.orderId).slice(-10).toUpperCase()}
//               </span>
//               <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(200,151,58,0.25)" }} />
//               <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#b08848" }}>
//                 <IconCalendar />
//                 <span style={{ fontSize: 8, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.08em" }}>
//                   {new Date(item.date).toDateString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: status + price + chevron */}
//         <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
//           <StatusBadge status={item.status} />
//           <div style={{ textAlign: "right" }}>
//             <p style={{
//               fontSize: 15, color: "#f7c568", fontFamily: "'Cormorant Garamond',serif",
//               fontWeight: 600, lineHeight: 1
//             }}>
//               {/* {currency}{item.orderTotal.toFixed(2)} */}
//               {currency}{item.subtotal.toFixed(2)}
//             </p>
//             <p style={{
//               fontSize: 8, color: "#b08848", fontFamily: "Montserrat,sans-serif",
//               letterSpacing: "0.1em", marginTop: 2
//             }}>
//               QTY {item.quantity ?? 1}
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={(e) => { e.stopPropagation(); loadOrderData && loadOrderData(); }}
//             style={{
//               padding: "6px 12px", borderRadius: 5, cursor: "pointer",
//               border: "1px solid rgba(200,151,58,0.25)",
//               background: "transparent", color: "rgba(200,151,58,0.6)",
//               fontSize: 8, letterSpacing: "0.18em",
//               fontFamily: "Montserrat,sans-serif", fontWeight: 600,
//               transition: "all 0.2s", whiteSpace: "nowrap",
//             }}
//             onMouseEnter={e => { e.target.style.borderColor = "#c8973a"; e.target.style.color = "#c8973a"; }}
//             onMouseLeave={e => { e.target.style.borderColor = "rgba(200,151,58,0.25)"; e.target.style.color = "rgba(200,151,58,0.6)"; }}
//           >
//             TRACK
//           </button>
//           <div style={{ color: "rgba(200,151,58,0.6)" }}>
//             <IconChevron open={open} />
//           </div>
//         </div>
//       </button>

//       {/* ── Expandable detail ── */}
//       <div className="od-detail" style={{ maxHeight: open ? 900 : 0, opacity: open ? 1 : 0 }}>
//         <div style={{ borderTop: "1px solid rgba(200,151,58,0.1)", padding: "0 20px 20px" }}>

//           {/* Progress */}
//           <ProgressBar status={item.status} />

//           <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent)", margin: "4px 0 18px" }} />

//           {/* Product detail */}
//           <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
//             <div style={{
//               width: 80, height: 80, borderRadius: 8, overflow: "hidden",
//               background: "#fff", flexShrink: 0, border: "1px solid rgba(200,151,58,0.2)"
//             }}>
//               {imgSrc
//                 ? <img src={imgSrc} alt={item.name}
//                   style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }} />
//                 : <div style={{
//                   width: "100%", height: "100%", display: "flex", alignItems: "center",
//                   justifyContent: "center", color: "rgba(200,151,58,0.2)"
//                 }}><IconBox /></div>
//               }
//             </div>
//             <div style={{ flex: 1, minWidth: 180 }}>
//               <p style={{
//                 fontSize: 8, color: "#b08848", letterSpacing: "0.26em",
//                 fontFamily: "Montserrat,sans-serif", marginBottom: 4
//               }}>LAMBSKIN LEATHER</p>
//               <p style={{
//                 fontSize: 15, color: "#f0dfc0", fontFamily: "'Cormorant Garamond',serif",
//                 lineHeight: 1.4, marginBottom: 8
//               }}>
//                 {safe(item.name)}
//               </p>
//               <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//                 {item.size && (
//                   <span style={{
//                     fontSize: 9, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.18em", padding: "3px 10px",
//                     background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.2)",
//                     borderRadius: 4
//                   }}>
//                     SIZE: {safe(item.size)}
//                   </span>
//                 )}
//                 <span style={{
//                   fontSize: 9, color: "rgba(240,220,190,0.5)", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.15em", padding: "3px 10px",
//                   background: "rgba(200,151,58,0.04)", border: "1px solid rgba(200,151,58,0.12)",
//                   borderRadius: 4
//                 }}>
//                   QTY: {item.quantity ?? 1}
//                 </span>
//                 {item.saved > 0 && (
//                   <span style={{
//                     fontSize: 9, color: "#4ade80", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.12em", padding: "3px 10px",
//                     background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)",
//                     borderRadius: 4
//                   }}>
//                     SAVED {currency}{item.saved.toFixed(2)}
//                   </span>
//                 )}
//               </div>
//             </div>
//             {/* Subtotal */}
//             <div style={{ textAlign: "right", flexShrink: 0 }}>
//               <p style={{
//                 fontSize: 9, color: "#b08848", fontFamily: "Montserrat,sans-serif",
//                 letterSpacing: "0.18em", marginBottom: 4
//               }}>SUBTOTAL</p>
//               <p style={{
//                 fontSize: 20, color: "#f7c568", fontFamily: "'Cormorant Garamond',serif",
//                 fontWeight: 600
//               }}>
//                 {/* {currency}{item.subtotal.toFixed(2)} */}
//                 {currency}{item.orderTotal.toFixed(2)}
//               </p>
//               <p style={{
//                 fontSize: 9, color: "#b08848", fontFamily: "Montserrat,sans-serif",
//                 letterSpacing: "0.1em", marginTop: 2
//               }}>
//                 incl. shipping
//               </p>
//             </div>
//           </div>

//           {/* Info grid */}
//           <div className="od-info-grid">
//             {/* Order ID */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconTag />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>ORDER ID</span>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                 <span style={{
//                   fontSize: 9.5, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif",
//                   overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130
//                 }}>
//                   {safe(item.orderId)}
//                 </span>
//                 <button className="od-copy-btn"
//                   onClick={() => copy(safe(item.orderId), `oid-${index}`)}>
//                   {copied === `oid-${index}` ? "✓" : "COPY"}
//                 </button>
//               </div>
//             </div>

//             {/* Payment */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconCreditCard />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>PAYMENT</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif" }}>
//                 {safe(item.paymentMethod)}
//               </span>
//               {item.paymentId && item.paymentId !== "N/A" && (
//                 <span style={{
//                   fontSize: 8, color: "#b08848", fontFamily: "Montserrat,sans-serif",
//                   overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
//                 }}>
//                   {safe(item.paymentId).slice(0, 18)}…
//                 </span>
//               )}
//             </div>

//             {/* Name */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
//                   <circle cx="12" cy="8" r="4" stroke="#c8973a" strokeWidth="1.4" />
//                   <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//                 </svg>
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>CUSTOMER</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif" }}>
//                 {safe(item.firstName)} {safe(item.lastName)}
//               </span>
//               <span style={{ fontSize: 8, color: "#b08848", fontFamily: "Montserrat,sans-serif" }}>
//                 {safe(item.phone)}
//               </span>
//             </div>

//             {/* Address */}
//             <div className="od-info-cell" style={{ gridColumn: "span 2" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconMapPin />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>DELIVERY ADDRESS</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif", lineHeight: 1.5 }}>
//                 {[item.street, item.city, item.state, item.country].filter(v => v && v !== "N/A").join(", ")}
//               </span>
//               {item.zipcode && item.zipcode !== "N/A" && (
//                 <span style={{ fontSize: 8, color: "#b08848", fontFamily: "Montserrat,sans-serif" }}>
//                   PIN: {safe(item.zipcode)}
//                 </span>
//               )}
//             </div>

//             {/* Date */}
//             <div className="od-info-cell">
//               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                 <IconCalendar />
//                 <span style={{
//                   fontSize: 7.5, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
//                   letterSpacing: "0.24em", fontWeight: 700
//                 }}>ORDER DATE</span>
//               </div>
//               <span style={{ fontSize: 10, color: "#f0dfc0", fontFamily: "Montserrat,sans-serif" }}>
//                 {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ══════════════════════════════════════════
//    ORDERS PAGE
// ══════════════════════════════════════════ */
// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("ALL");

//   const loadOrderData = async () => {
//     try {
//       if (!token) return;
//       setLoading(true);
//       const res = await axios.post(
//         backendUrl + "/api/order/userorders", {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       if (res.data.success) {
//         let flat = [];
//         res.data.orders.forEach(order => {
//           order.items.forEach(item => {
//             // ── Exact price logic from working Orders reference ──
//             let qtyData = item.quantity;
//             let qty = typeof qtyData === "object" && qtyData !== null ? (qtyData.quantity ?? 1) : (qtyData ?? 1);
//             let customPrice = typeof qtyData === "object" && qtyData !== null ? qtyData.customPrice : null;
//             let total = customPrice
//               ? customPrice * qty
//               : item.amount
//                 ? Number(item.amount)
//                 : (Number(item.price) || 0) * qty;

//             // ── Fix image (string or array) ──
//             const img = typeof item.image === "string"
//               ? item.image
//               : Array.isArray(item.image) ? item.image[0] : "";

//             flat.push({
//               ...item,
//               image: img,
//               quantity: qty,
//               subtotal: total,
//               saved: Number(item.saved) || 0,
//               finalPrice: Number(item.finalPrice) || 0,
//               orderId: order._id,
//               userId: order.userId,
//               productId: item.productId || item._id || "N/A",
//               orderTotal: Number(order.finalAmount) || Number(order.amount) || total,
//               paymentMethod: order.paymentMethod,
//               payment: order.payment,
//               paymentId: order.paymentId,
//               status: order.status,
//               date: order.date,
//               firstName: order.address?.firstName,
//               lastName: order.address?.lastName,
//               email: order.address?.email,
//               phone: order.address?.phone,
//               street: order.address?.street,
//               city: order.address?.city,
//               state: order.address?.state,
//               country: order.address?.country,
//               zipcode: order.address?.zipcode,
//             });
//           });
//         });
//         setOrderData(flat.reverse());
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { loadOrderData(); }, [token]);

//   const statusFilters = ["ALL", ...STATUS_STEPS];
//   const filtered = filter === "ALL"
//     ? orderData
//     : orderData.filter(o => o.status === filter);

//   return (
//     <>
//       <style>{STYLES}</style>
//       <div className="od-page" style={{ background: "#1a0f0a", minHeight: "100vh", fontFamily: "Georgia,serif" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px 80px" }}>
//           <div className="flex flex-col md:flex-row gap-6">

//             {/* Sidebar */}
//             <div style={{ width: "100%", maxWidth: 240, flexShrink: 0 }}>
//               <AccountSidebar />
//             </div>

//             {/* Main */}
//             <div style={{ flex: 1, minWidth: 0 }}>

//               {/* Header */}
//               <div style={{ marginBottom: 26 }}>
//                 <p style={{
//                   fontSize: 8.5, letterSpacing: "0.44em", color: "#c8973a",
//                   fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 5
//                 }}>
//                   D DOLLY LAMB
//                 </p>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
//                   <div>
//                     <h1 style={{
//                       fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#f7c568",
//                       fontWeight: 400, letterSpacing: "0.1em", margin: 0
//                     }}>
//                       MY ORDERS
//                     </h1>
//                     <p style={{ fontSize: 10, color: "#b08848", fontFamily: "Montserrat,sans-serif", marginTop: 4 }}>
//                       {filtered.length} {filtered.length === 1 ? "order" : "orders"} found
//                     </p>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                     <div style={{ width: 50, height: 1, background: "linear-gradient(to left,rgba(200,151,58,0.3),transparent)" }} />
//                     <div style={{ width: 6, height: 6, background: "#c8973a", transform: "rotate(45deg)", flexShrink: 0 }} />
//                     <div style={{ width: 50, height: 1, background: "linear-gradient(to right,rgba(200,151,58,0.3),transparent)" }} />
//                   </div>
//                 </div>
//               </div>

//               {/* Filter tabs */}
//               <div style={{
//                 background: "linear-gradient(160deg,#1e120a,#150c05)",
//                 border: "1px solid rgba(200,151,58,0.13)", borderRadius: 8,
//                 padding: "10px 14px", marginBottom: 18,
//                 display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
//               }}>
//                 <span style={{
//                   fontSize: 8, color: "#b08848", letterSpacing: "0.24em",
//                   fontFamily: "Montserrat,sans-serif", marginRight: 4
//                 }}>FILTER</span>
//                 {statusFilters.map(s => {
//                   const cfg = STATUS_CFG[s];
//                   const active = filter === s;
//                   return (
//                     <button key={s}
//                       onClick={() => setFilter(s)}
//                       style={{
//                         padding: "6px 12px", borderRadius: 5, cursor: "pointer",
//                         border: active
//                           ? `1px solid ${cfg?.color || "#c8973a"}`
//                           : "1px solid rgba(200,151,58,0.18)",
//                         background: active
//                           ? (cfg?.bg || "rgba(200,151,58,0.1)")
//                           : "transparent",
//                         color: active ? (cfg?.color || "#c8973a") : "rgba(240,220,190,0.4)",
//                         fontSize: 9, letterSpacing: "0.16em",
//                         fontFamily: "Montserrat,sans-serif", fontWeight: active ? 600 : 400,
//                         transition: "all 0.2s",
//                       }}>
//                       {s}
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Loading */}
//               {loading ? (
//                 <div style={{ textAlign: "center", padding: "60px 0" }}>
//                   <div style={{
//                     width: 28, height: 28, border: "2px solid rgba(200,151,58,0.2)",
//                     borderTopColor: "#c8973a", borderRadius: "50%",
//                     animation: "pulse 1s ease infinite", margin: "0 auto 14px"
//                   }} />
//                   <p style={{
//                     fontSize: 10, color: "#b08848", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.2em"
//                   }}>LOADING ORDERS…</p>
//                 </div>

//               ) : filtered.length === 0 ? (
//                 /* Empty state */
//                 <div style={{
//                   background: "linear-gradient(160deg,#1e120a,#150c05)",
//                   border: "1px solid rgba(200,151,58,0.14)", borderRadius: 10,
//                   padding: "70px 24px", textAlign: "center"
//                 }}>
//                   <div style={{ marginBottom: 18, opacity: 0.6 }}><IconEmpty /></div>
//                   <p style={{
//                     fontSize: "clamp(1.1rem,2.5vw,1.7rem)", color: "#f7c568",
//                     fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", marginBottom: 10
//                   }}>
//                     No orders yet
//                   </p>
//                   <p style={{
//                     fontSize: 10, color: "#b08848", fontFamily: "Montserrat,sans-serif",
//                     letterSpacing: "0.1em", marginBottom: 26
//                   }}>
//                     Your order history will appear here
//                   </p>
//                 </div>

//               ) : (
//                 <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//                   {filtered.map((item, i) => (
//                     <OrderCard key={`${item.orderId}-${i}`} item={item} index={i} currency={currency} loadOrderData={loadOrderData} />
//                   ))}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Orders;







import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import AccountSidebar from "../components/AccountSidebar";

/* ── Color tokens — matched to Footer / MyAccount ── */
const C = {
  bgLight: "#FFFFFF",
  bgSoft: "#F8F7FF",
  bgBottom: "#F0EEFF",
  bgCard: "#F4F2FF",
  indigo: "#5B5BD6",
  indigoLt: "#818CF8",
  indigoDk: "#4338CA",
  textNavy: "#1E1B4B",
  textMuted: "#4B5563",
  textFaint: "#6B7280",
  borderHi: "rgba(91,91,214,0.20)",
  borderLo: "rgba(91,91,214,0.10)",
  borderMid: "rgba(91,91,214,0.15)",
  gold: "#C8924A",
  goldDk: "#8A5E2D",
};

/* ── Helpers ── */
const safe = (val) => {
  if (val === null || val === undefined) return "N/A";
  if (typeof val === "object") return Array.isArray(val) ? val.join(", ") : JSON.stringify(val);
  return String(val);
};
const getImage = (image) => {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (Array.isArray(image)) return image[0] || "";
  if (typeof image === "object" && image.url) return image.url;
  return "";
};

/* ── Icons ── */
const IconBox = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconChevron = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconCalendar = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconTag = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
  </svg>
);
const IconCreditCard = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M1 10h22" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IconMapPin = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IconUser = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconEmpty = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      stroke="rgba(91,91,214,0.25)" strokeWidth="0.8" strokeLinejoin="round" />
  </svg>
);

/* ── Status config — indigo palette ── */
const STATUS_CFG = {
  "Order Placed": { color: C.indigo, bg: "rgba(91,91,214,0.10)", border: C.borderHi, dot: C.indigo, step: 1 },
  "Packing": { color: "#7C3AED", bg: "rgba(124,58,237,0.10)", border: "rgba(124,58,237,0.25)", dot: "#7C3AED", step: 2 },
  "Shipped": { color: "#0284C7", bg: "rgba(2,132,199,0.10)", border: "rgba(2,132,199,0.25)", dot: "#0284C7", step: 3 },
  "Out for delivery": { color: "#0891B2", bg: "rgba(8,145,178,0.10)", border: "rgba(8,145,178,0.25)", dot: "#0891B2", step: 4 },
  "Delivered": { color: "#059669", bg: "rgba(5,150,105,0.10)", border: "rgba(5,150,105,0.25)", dot: "#059669", step: 5 },
};
const STATUS_STEPS = ["Order Placed", "Packing", "Shipped", "Out for delivery", "Delivered"];

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes odUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
  @keyframes odIn  { from{opacity:0;transform:translateY(18px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
  @keyframes shimmerIndigo {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes spin { to { transform:rotate(360deg); } }

  .od-page { animation: odUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

  /* Shimmer bar */
  .od-shimmer {
    background: linear-gradient(90deg,
      transparent 0%, rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 3.5s linear infinite;
  }

  /* Order card */
  .od-card {
    background: ${C.bgLight};
    border: 1px solid ${C.borderHi};
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(91,91,214,0.06);
    transition: border-color 0.28s, box-shadow 0.28s;
    animation: odIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
  }
  .od-card:hover {
    border-color: rgba(91,91,214,0.40);
    box-shadow: 0 8px 32px rgba(91,91,214,0.12);
  }

  /* Card top accent */
  .od-card-accent {
    height: 2px;
    background: linear-gradient(to right, transparent, ${C.indigoDk} 35%, ${C.indigoLt} 50%, ${C.indigoDk} 65%, transparent);
    opacity: 0.65;
  }

  /* Toggle button */
  .od-toggle {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px; background: none; border: none; cursor: pointer;
    text-align: left; transition: background 0.2s;
  }
  .od-toggle:hover { background: rgba(91,91,214,0.03); }

  /* Meta pill */
  .od-pill {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 20px;
    font-size: 9px; letter-spacing: 0.14em;
    font-family: Montserrat, sans-serif; font-weight: 600;
    white-space: nowrap;
  }

  /* Progress */
  .od-step-dot {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 9px; font-weight: 700;
    font-family: Montserrat, sans-serif;
    transition: all 0.3s;
  }
  .od-step-line {
    flex: 1; height: 2px;
    background: ${C.borderLo};
    transition: background 0.3s;
  }
  .od-step-line.done {
    background: linear-gradient(to right, ${C.indigoDk}, ${C.indigoLt});
  }

  /* Product row */
  .od-product-row {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid ${C.borderLo};
  }
  .od-product-row:last-child { border-bottom: none; }

  /* Info grid */
  .od-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
  }
  .od-info-cell {
    display: flex; flex-direction: column; gap: 3px;
    padding: 10px 14px;
    background: ${C.bgSoft};
    border: 1px solid ${C.borderLo};
    border-radius: 4px;
  }

  /* Detail expand */
  .od-detail {
    overflow: hidden;
    transition: max-height 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.28s;
  }

  /* Copy btn */
  .od-copy-btn {
    background: none; border: none; cursor: pointer;
    color: ${C.indigoLt}; font-size: 9px;
    font-family: Montserrat, sans-serif; letter-spacing: 0.1em;
    padding: 0; transition: color 0.2s;
  }
  .od-copy-btn:hover { color: ${C.indigo}; }

  /* Filter btn */
  .od-filter-btn {
    padding: 6px 13px; border-radius: 20px; cursor: pointer;
    font-size: 9px; letter-spacing: 0.14em;
    font-family: Montserrat, sans-serif; font-weight: 600;
    transition: all 0.2s; border: 1px solid ${C.borderHi};
    background: transparent; color: ${C.textFaint};
  }
  .od-filter-btn:hover { border-color: ${C.indigo}; color: ${C.indigo}; }
  .od-filter-btn.active-filter {
    background: rgba(91,91,214,0.10);
    border-color: ${C.indigo};
    color: ${C.indigo};
  }

  /* Track btn */
  .od-track-btn {
    padding: 6px 14px; border-radius: 4px; cursor: pointer;
    border: 1px solid ${C.borderHi};
    background: transparent; color: ${C.indigoLt};
    font-size: 8.5px; letter-spacing: 0.18em;
    font-family: Montserrat, sans-serif; font-weight: 600;
    transition: all 0.2s; white-space: nowrap;
  }
  .od-track-btn:hover {
    border-color: ${C.indigo}; color: ${C.indigo};
    background: rgba(91,91,214,0.06);
  }

  .od-spinner {
    width: 26px; height: 26px;
    border: 2px solid ${C.borderHi};
    border-top-color: ${C.indigo}; border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 0 auto 14px;
  }
`;

/* ── Copy hook ── */
const useCopy = () => {
  const [copied, setCopied] = useState(null);
  const copy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };
  return { copied, copy };
};

/* ── Status badge ── */
const StatusBadge = ({ status }) => {
  const cfg = STATUS_CFG[status] || { color: C.textFaint, bg: "rgba(107,114,128,0.10)", border: C.borderLo, dot: C.textFaint };
  return (
    <div className="od-pill" style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, flexShrink: 0, display: "inline-block" }} />
      {status || "Pending"}
    </div>
  );
};

/* ── Progress bar ── */
const ProgressBar = ({ status }) => {
  const cur = STATUS_CFG[status]?.step || 0;
  return (
    <div style={{ padding: "18px 20px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%" }}>
        {STATUS_STEPS.map((s, i) => {
          const done = cur >= i + 1;
          const current = cur === i + 1;
          return (
            <React.Fragment key={s}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, flexShrink: 0 }}>
                <div className="od-step-dot" style={{
                  background: done ? `linear-gradient(135deg, ${C.indigoDk}, ${C.indigo})` : C.bgSoft,
                  border: current ? `2px solid ${C.indigoLt}` : done ? "none" : `1px solid ${C.borderHi}`,
                  color: done ? "#FFFFFF" : C.textFaint,
                  boxShadow: current ? `0 0 12px rgba(91,91,214,0.30)` : "none",
                }}>
                  {done ? "✓" : i + 1}
                </div>
              </div>
              {i < STATUS_STEPS.length - 1 && (
                <div className={`od-step-line ${cur > i + 1 ? "done" : ""}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <p style={{
        fontSize: 9, color: C.indigo, fontFamily: "Montserrat,sans-serif",
        letterSpacing: "0.22em", marginTop: 12, textAlign: "center", fontWeight: 600,
      }}>
        {status?.toUpperCase() || "PENDING"}
      </p>
    </div>
  );
};

/* ── Info cell label ── */
const CellLabel = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2, color: C.indigo }}>
    {icon}
    <span style={{ fontSize: 7.5, color: C.indigo, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.24em", fontWeight: 700 }}>
      {text}
    </span>
  </div>
);

/* ── Single order card ── */
const OrderCard = ({ item, index, currency, loadOrderData }) => {
  const [open, setOpen] = useState(false);
  const { copied, copy } = useCopy();
  const imgSrc = getImage(item.image);

  return (
    <div className="od-card" style={{ animationDelay: `${index * 0.06}s` }}>
      <div className="od-card-accent" />

      {/* Toggle header */}
      <button className="od-toggle" onClick={() => setOpen(o => !o)}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, flexWrap: "wrap", minWidth: 0 }}>

          {/* Thumbnail */}
          <div style={{
            width: 46, height: 46, borderRadius: 6, overflow: "hidden",
            background: C.bgSoft, flexShrink: 0, border: `1px solid ${C.borderHi}`,
          }}>
            {imgSrc
              ? <img src={imgSrc} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 3 }} />
              : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: C.indigoLt }}>
                <IconBox />
              </div>
            }
          </div>

          {/* Name + meta */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontSize: 13, color: C.textNavy, fontFamily: "Georgia,serif",
              lineHeight: 1.3, marginBottom: 3, fontWeight: 600,
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 260,
            }}>
              {safe(item.name)}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 9, color: C.indigo, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em", fontWeight: 600 }}>
                #{safe(item.orderId).slice(-10).toUpperCase()}
              </span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.borderHi }} />
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: C.textFaint }}>
                <IconCalendar />
                <span style={{ fontSize: 8, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.08em" }}>
                  {new Date(item.date).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: status + price + actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <StatusBadge status={item.status} />
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 15, color: C.textNavy, fontFamily: "Georgia,serif", fontWeight: 700, lineHeight: 1 }}>
              {currency}{item.subtotal.toFixed(2)}
            </p>
            <p style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em", marginTop: 2 }}>
              QTY {item.quantity ?? 1}
            </p>
          </div>
          <button
            type="button"
            className="od-track-btn"
            onClick={(e) => { e.stopPropagation(); loadOrderData?.(); }}
          >
            TRACK
          </button>
          <div style={{ color: C.indigoLt }}>
            <IconChevron open={open} />
          </div>
        </div>
      </button>

      {/* Expandable detail */}
      <div className="od-detail" style={{ maxHeight: open ? 900 : 0, opacity: open ? 1 : 0 }}>
        <div style={{ borderTop: `1px solid ${C.borderLo}`, padding: "0 20px 22px" }}>

          <ProgressBar status={item.status} />

          <div style={{ height: 1, background: `linear-gradient(to right,transparent,${C.borderMid},transparent)`, margin: "4px 0 18px" }} />

          {/* Product detail */}
          <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
            <div style={{
              width: 80, height: 80, borderRadius: 6, overflow: "hidden",
              background: C.bgSoft, flexShrink: 0, border: `1px solid ${C.borderHi}`,
            }}>
              {imgSrc
                ? <img src={imgSrc} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }} />
                : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: C.indigoLt }}>
                  <IconBox />
                </div>
              }
            </div>

            <div style={{ flex: 1, minWidth: 180 }}>
              <p style={{ fontSize: 8, color: C.indigoLt, letterSpacing: "0.26em", fontFamily: "Montserrat,sans-serif", fontWeight: 600, marginBottom: 4 }}>
                LAMBSKIN LEATHER
              </p>
              <p style={{ fontSize: 15, color: C.textNavy, fontFamily: "Georgia,serif", fontWeight: 600, lineHeight: 1.4, marginBottom: 8 }}>
                {safe(item.name)}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {item.size && (
                  <span style={{
                    fontSize: 9, color: C.indigo, fontFamily: "Montserrat,sans-serif",
                    letterSpacing: "0.16em", padding: "3px 10px",
                    background: "rgba(91,91,214,0.08)", border: `1px solid ${C.borderHi}`,
                    borderRadius: 4, fontWeight: 600,
                  }}>
                    SIZE: {safe(item.size)}
                  </span>
                )}
                <span style={{
                  fontSize: 9, color: C.textMuted, fontFamily: "Montserrat,sans-serif",
                  letterSpacing: "0.14em", padding: "3px 10px",
                  background: C.bgSoft, border: `1px solid ${C.borderLo}`,
                  borderRadius: 4,
                }}>
                  QTY: {item.quantity ?? 1}
                </span>
                {item.saved > 0 && (
                  <span style={{
                    fontSize: 9, color: "#059669", fontFamily: "Montserrat,sans-serif",
                    letterSpacing: "0.12em", padding: "3px 10px",
                    background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)",
                    borderRadius: 4, fontWeight: 600,
                  }}>
                    SAVED {currency}{item.saved.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Subtotal */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 9, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.18em", marginBottom: 4, fontWeight: 600 }}>
                TOTAL
              </p>
              <p style={{ fontSize: 22, color: C.textNavy, fontFamily: "Georgia,serif", fontWeight: 700 }}>
                {currency}{item.orderTotal.toFixed(2)}
              </p>
              <p style={{ fontSize: 9, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em", marginTop: 2 }}>
                incl. shipping
              </p>
            </div>
          </div>

          {/* Info grid */}
          <div className="od-info-grid">
            {/* Order ID */}
            <div className="od-info-cell">
              <CellLabel icon={<IconTag />} text="ORDER ID" />
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 9.5, color: C.textNavy, fontFamily: "Montserrat,sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130 }}>
                  {safe(item.orderId)}
                </span>
                <button className="od-copy-btn" onClick={() => copy(safe(item.orderId), `oid-${index}`)}>
                  {copied === `oid-${index}` ? "✓" : "COPY"}
                </button>
              </div>
            </div>

            {/* Payment */}
            <div className="od-info-cell">
              <CellLabel icon={<IconCreditCard />} text="PAYMENT" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", fontWeight: 500 }}>
                {safe(item.paymentMethod)}
              </span>
              {item.paymentId && item.paymentId !== "N/A" && (
                <span style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {safe(item.paymentId).slice(0, 18)}…
                </span>
              )}
            </div>

            {/* Customer */}
            <div className="od-info-cell">
              <CellLabel icon={<IconUser />} text="CUSTOMER" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", fontWeight: 500 }}>
                {safe(item.firstName)} {safe(item.lastName)}
              </span>
              <span style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif" }}>
                {safe(item.phone)}
              </span>
            </div>

            {/* Address */}
            <div className="od-info-cell" style={{ gridColumn: "span 2" }}>
              <CellLabel icon={<IconMapPin />} text="DELIVERY ADDRESS" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", lineHeight: 1.6, fontWeight: 500 }}>
                {[item.street, item.city, item.state, item.country].filter(v => v && v !== "N/A").join(", ")}
              </span>
              {item.zipcode && item.zipcode !== "N/A" && (
                <span style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif" }}>
                  PIN: {safe(item.zipcode)}
                </span>
              )}
            </div>

            {/* Date */}
            <div className="od-info-cell">
              <CellLabel icon={<IconCalendar />} text="ORDER DATE" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", fontWeight: 500 }}>
                {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   ORDERS PAGE
══════════════════════════════════════════ */
const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  const loadOrderData = async () => {
    try {
      if (!token) return;
      setLoading(true);
      const res = await axios.post(
        backendUrl + "/api/order/userorders", {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        let flat = [];
        res.data.orders.forEach(order => {
          order.items.forEach(item => {
            let qtyData = item.quantity;
            let qty = typeof qtyData === "object" && qtyData !== null ? (qtyData.quantity ?? 1) : (qtyData ?? 1);
            let customPrice = typeof qtyData === "object" && qtyData !== null ? qtyData.customPrice : null;
            let total = customPrice
              ? customPrice * qty
              : item.amount
                ? Number(item.amount)
                : (Number(item.price) || 0) * qty;

            const img = typeof item.image === "string"
              ? item.image
              : Array.isArray(item.image) ? item.image[0] : "";

            flat.push({
              ...item,
              image: img, quantity: qty,
              subtotal: total,
              saved: Number(item.saved) || 0,
              finalPrice: Number(item.finalPrice) || 0,
              orderId: order._id,
              userId: order.userId,
              productId: item.productId || item._id || "N/A",
              orderTotal: Number(order.finalAmount) || Number(order.amount) || total,
              paymentMethod: order.paymentMethod,
              payment: order.payment,
              paymentId: order.paymentId,
              status: order.status,
              date: order.date,
              firstName: order.address?.firstName,
              lastName: order.address?.lastName,
              email: order.address?.email,
              phone: order.address?.phone,
              street: order.address?.street,
              city: order.address?.city,
              state: order.address?.state,
              country: order.address?.country,
              zipcode: order.address?.zipcode,
            });
          });
        });
        setOrderData(flat.reverse());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadOrderData(); }, [token]);

  const statusFilters = ["ALL", ...STATUS_STEPS];
  const filtered = filter === "ALL" ? orderData : orderData.filter(o => o.status === filter);

  return (
    <>
      <style>{STYLES}</style>

      <div className="od-page" style={{
        background: C.bgLight,
        minHeight: "100vh",
        fontFamily: "Montserrat, sans-serif",
        borderTop: `1px solid ${C.borderHi}`,
      }}>

        {/* Top shimmer */}
        <div className="od-shimmer" style={{ height: "1.5px" }} />

        {/* ── PAGE HERO with grid ── */}
        <div style={{
          textAlign: "center",
          padding: "42px 24px 36px",
          borderBottom: `1px solid ${C.borderLo}`,
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${C.bgSoft} 0%, ${C.bgLight} 100%)`,
        }}>
          {/* Grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `
              linear-gradient(rgba(91,91,214,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91,91,214,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />
          {/* Radial fade */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 40%, #F8F7FF 100%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ display: "block", width: 36, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
              <span style={{
                fontSize: 9, letterSpacing: "0.38em", color: C.indigo,
                fontFamily: "Montserrat, sans-serif", fontWeight: 700, textTransform: "uppercase",
              }}>D DOLLY LAMB</span>
              <span style={{ display: "block", width: 36, height: 1, background: `linear-gradient(to left, transparent, ${C.indigo})` }} />
            </div>
            <h1 style={{
              fontFamily: "Georgia, serif", fontWeight: 400,
              fontSize: "clamp(1.4rem,3vw,2.2rem)",
              color: C.textNavy, letterSpacing: "0.1em", margin: "0 0 6px",
            }}>
              MY <span style={{ color: C.indigo }}>ORDERS</span>
            </h1>
            <p style={{
              fontSize: 9, letterSpacing: "0.32em", color: C.indigoLt,
              fontFamily: "Montserrat, sans-serif", fontWeight: 600, marginBottom: 14,
            }}>
              ORDER HISTORY &amp; TRACKING
            </p>
            {/* Decorative divider — same as footer */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginTop: 12 }}>
              <span style={{ flex: 1, maxWidth: 80, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
              <span style={{ width: 6, height: 6, background: C.indigo, transform: "rotate(45deg)", flexShrink: 0, opacity: 0.45 }} />
              <span style={{ flex: 1, maxWidth: 80, height: 1, background: `linear-gradient(to left, transparent, ${C.indigo})` }} />
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div style={{ width: "95%", maxWidth: 1200, margin: "0 auto", padding: "36px 16px 80px" }}>
          <div className="flex flex-col md:flex-row gap-6">

            {/* Sidebar */}
            <div style={{ width: "100%", maxWidth: 240, flexShrink: 0 }}>
              <AccountSidebar />
            </div>

            {/* Main */}
            <div style={{ flex: 1, minWidth: 0 }}>

              {/* Sub-header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
                <p style={{ fontSize: 11, color: C.textMuted, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.06em" }}>
                  {filtered.length} {filtered.length === 1 ? "order" : "orders"} found
                </p>
              </div>

              {/* Filter tabs */}
              <div style={{
                background: C.bgSoft,
                border: `1px solid ${C.borderLo}`,
                borderRadius: 6,
                padding: "10px 14px",
                marginBottom: 18,
                display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
              }}>
                <span style={{
                  fontSize: 8, color: C.textFaint, letterSpacing: "0.24em",
                  fontFamily: "Montserrat,sans-serif", fontWeight: 600, marginRight: 4,
                }}>FILTER</span>
                {statusFilters.map(s => {
                  const cfg = STATUS_CFG[s];
                  const active = filter === s;
                  return (
                    <button key={s}
                      className={`od-filter-btn${active ? " active-filter" : ""}`}
                      style={active && cfg ? {
                        background: cfg.bg,
                        borderColor: cfg.color,
                        color: cfg.color,
                      } : {}}
                      onClick={() => setFilter(s)}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>

              {/* Loading */}
              {loading ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div className="od-spinner" />
                  <p style={{ fontSize: 10, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.2em" }}>
                    LOADING ORDERS…
                  </p>
                </div>

              ) : filtered.length === 0 ? (
                <div style={{
                  background: C.bgSoft,
                  border: `1px solid ${C.borderHi}`,
                  borderRadius: 8,
                  padding: "70px 24px", textAlign: "center",
                }}>
                  <div style={{ marginBottom: 18, opacity: 0.5 }}><IconEmpty /></div>
                  <p style={{
                    fontSize: "clamp(1.1rem,2.5vw,1.6rem)", color: C.textNavy,
                    fontFamily: "Georgia,serif", fontStyle: "italic", marginBottom: 10,
                  }}>
                    No orders yet
                  </p>
                  <p style={{ fontSize: 10, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em" }}>
                    Your order history will appear here
                  </p>
                </div>

              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {filtered.map((item, i) => (
                    <OrderCard key={`${item.orderId}-${i}`} item={item} index={i} currency={currency} loadOrderData={loadOrderData} />
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Bottom shimmer */}
        <div className="od-shimmer" style={{ height: "1.5px" }} />
      </div>
    </>
  );
};

export default Orders;