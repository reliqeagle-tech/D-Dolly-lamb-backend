// import React, { useState, PureComponent, useContext } from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// // import { RechartsDevtools } from '@recharts/devtools';
// import DashboardBoxes from '../Components/DashboardBoxes/DashboardBoxes'
// import { assets } from '../assets/assets'
// import Button from '@mui/material/Button'
// import { FaPlus } from "react-icons/fa6";
// import { FaAngleDown } from "react-icons/fa6";
// // import Badge from '../../../client/src/components/Badge/Badge';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom';
// import ProgressBar from '../Components/ProgressBar/ProgressBar';
// import { AiOutlineEdit } from "react-icons/ai";
// import { FaRegEye } from "react-icons/fa";
// import { GoTrash } from "react-icons/go";
// // import Tooltip from '@mui/material/TooltipMUI';
// import Pagination from '@mui/material/Pagination';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import { IoCloudDownloadOutline } from "react-icons/io5";

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { MyContext } from '../App';
// import Badge from '../Components/Badge/Badge';





// const columns = [
//   { id: 'product', label: 'Product', minWidth: 150 },
//   { id: 'category', label: 'Category', minWidth: 100 },
//   {
//     id: 'subcategory',
//     label: 'Sub Category',
//     minWidth: 150,
//   },
//   {
//     id: 'price',
//     label: 'Price',
//     minWidth: 130,
//   },
//   {
//     id: 'sales',
//     label: 'Sales',
//     minWidth: 100,
//   },
//   {
//     id: 'action',
//     label: 'Action',
//     minWidth: 120,
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }



// const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
// // import Badge from '@mui/material/Badge';
// // import Badge from '../../components/Badge/Badge'

// const Dashboard = () => {

//   const context = useContext(MyContext)

//   const [isOpenOrderProduct, setIsOpenOrderProdcut] = useState(null);
//   const isShowOrderProduct = (index) => {
//     if (isOpenOrderProduct === index) {
//       setIsOpenOrderProdcut(null)
//     } else {
//       setIsOpenOrderProdcut(index);
//     }
//   }

//   //   const rows = [
//   //   createData('India', 'IN', 1324171354, 3287263),
//   //   createData('China', 'CN', 1403500365, 9596961),
//   //   createData('Italy', 'IT', 60483973, 301340),
//   //   createData('United States', 'US', 327167434, 9833520),
//   //   createData('Canada', 'CA', 37602103, 9984670),
//   //   createData('Australia', 'AU', 25475400, 7692024),
//   //   createData('Germany', 'DE', 83019200, 357578),
//   //   createData('Ireland', 'IE', 4857000, 70273),
//   //   createData('Mexico', 'MX', 126577691, 1972550),
//   //   createData('Japan', 'JP', 126317000, 377973),
//   //   createData('France', 'FR', 67022000, 640679),
//   //   createData('United Kingdom', 'GB', 67545757, 242495),
//   //   createData('Russia', 'RU', 146793744, 17098246),
//   //   createData('Nigeria', 'NG', 200962417, 923768),
//   //   createData('Brazil', 'BR', 210147125, 8515767),
//   // ];

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [categoryFilterVal, setCategoryFilterValue] = useState('')
//   const [chart1Data, setChart1Data] = useState(
//     [
//       {
//         name: 'Jan',
//         TotalSales: 4000,
//         TotalUsers: 2400,
//         amt: 2400,
//       },
//       {
//         name: 'Feb',
//         TotalSales: 3000,
//         TotalUsers: 1398,
//         amt: 2210,
//       },
//       {
//         name: 'March',
//         TotalSales: 2000,
//         TotalUsers: 9800,
//         amt: 2290,
//       },
//       {
//         name: 'April',
//         TotalSales: 2780,
//         TotalUsers: 3908,
//         amt: 2000,
//       },
//       {
//         name: 'May',
//         TotalSales: 1890,
//         TotalUsers: 4800,
//         amt: 2181,
//       },
//       {
//         name: 'Jun',
//         TotalSales: 2390,
//         TotalUsers: 3800,
//         amt: 2500,
//       },
//       {
//         name: 'July',
//         TotalSales: 3490,
//         TotalUsers: 4300,
//         amt: 2100,
//       },
//       {
//         name: 'Aug',
//         TotalSales: 3490,
//         TotalUsers: 4300,
//         amt: 2100,
//       },
//       {
//         name: 'Sept',
//         TotalSales: 8490,
//         TotalUsers: 6300,
//         amt: 2100,
//       },
//       {
//         name: 'Oct',
//         TotalSales: 7490,
//         TotalUsers: 4300,
//         amt: 2100,
//       },
//       {
//         name: 'Nov',
//         TotalSales: 4490,
//         TotalUsers: 3300,
//         amt: 2100,
//       },
//       {
//         name: 'Dec',
//         TotalSales: 2490,
//         TotalUsers: 1300,
//         amt: 2100,
//       },
//     ])

//   const handleChangeCatFilter = (event) => {
//     setCategoryFilterValue(event.target.value);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <div>
//       <div className='w-full border border-[rgba(0,0,0,0.1)] bg-[#f1faff] py-2 px-5 lg:px-8 flex items-center gap0-8 mb-5 rounded-md justify-between'>
//         <div className='info'>
//           <h1 className='text-base lg:text-4xl text-gray-700 font-bold'>Good Morning, &nbsp; <br />Cameron &nbsp;👋</h1>
//           <p className='text-sm lg:text-base text-gray-700 font-medium py-2 lg:py-4 lg:pt-8'>Here's what happining on your store today. See the statistics at once.</p>
//           <Button className='btn-blue !text-xs lg:!text-base !p-2 !px-4' onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })}><FaPlus />Add Product</Button>
//         </div>
//         <img src={assets.dashboard} alt="" className='w-[200px] lg:w-[300px]' />
//       </div>
//       <DashboardBoxes />
//       <div className='my-3 card shadow-md bg-white sm:rounded-lg'>
//         <div className='flex items-center justify-between px-3 py-5'>
//           <h2 className='text-lg font-semibold text-gray-700'>Recent Order</h2>
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
//                   {/* <Badge status="pending" /> */}
//                   < Badge status="pending" />
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

//       <div className='my-3 card shadow-md bg-white sm:rounded-lg'>
//         <div className='flex items-center justify-between px-3 py-5'>
//           <h2 className='text-lg font-semibold text-gray-700'>Products <span className='text-gray-500 font-medium'>(Tailwind css table)</span></h2>
//         </div>
//         <div className='flex items-center w-full px-3 justify-between'>
//           <div className='col w-[20%]'>
//             <h4 className='text-sm font-medium text-gray-700'>Category By</h4>
//             <Select
//               className='w-full my-2' size='small'
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               value={categoryFilterVal}
//               label="Category"
//               onChange={handleChangeCatFilter}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Men</MenuItem>
//               <MenuItem value={20}>Women</MenuItem>
//               <MenuItem value={30}>Kids</MenuItem>
//             </Select>
//           </div>
//           <div className='col w-[%] ml-auto flex items-center gap-2'>
//             <Button className='!bg-green-600 !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2'><IoCloudDownloadOutline className='text-xl' /> Export</Button>
//             <Button className='!bg-[#3872fa] !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2' onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })}><FaPlus className='text-lg' /> Add Product</Button>
//           </div>
//         </div>

//         <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs border border-gray-400  pb-4">
//           <table className="w-full text-sm text-left rtl:text-right text-body">
//             <thead className="text-sm text-body bg-gray-200 border-b rounded-base border-gray-300">
//               <tr>
//                 <th scope="col" className="px-6 py-3 font-medium">
//                   <div className='w-[60%]'>
//                     {/* <Checkbox {...label} /> */}
//                     &nbsp;
//                   </div>
//                 </th>
//                 <th scope="col" className="px-0 py-3 font-medium whitespace-nowrap">
//                   Product
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Category
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Sub Category
//                 </th>
//                 {/* <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Brand
//                 </th> */}
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Price
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Sales
//                 </th>
//                 <th scope="col" className="px-6 py-3 font-medium whitespace-nowrap">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default text-gray-700 font-medium' >
//                 <td className='px-6 py-3'>
//                   <div className='w-[60px]'>
//                     <Checkbox {...label} size="small" />
//                   </div>
//                 </td>
//                 <td className='px-0 py-3'>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_4_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>

//                 </td>
//                 <td className='px-6 py-3'>
//                   Clothes
//                 </td>
//                 <td className='px-6 py-3'>
//                   Women
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </td>
//                 <td className='px-6 py-3'>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={30} type='warning' />
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </td>
//               </tr>
//               <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default text-gray-700 font-medium' >
//                 <td className='px-6 py-3'>
//                   <div className='w-[60px]'>
//                     <Checkbox {...label} size="small" />
//                   </div>
//                 </td>
//                 <td className='px-0 py-3'>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_4_2} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>

//                 </td>
//                 <td className='px-6 py-3'>
//                   Clothes
//                 </td>
//                 <td className='px-6 py-3'>
//                   Women
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </td>
//                 <td className='px-6 py-3'>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={60} type='success' />
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </td>
//               </tr>
//               <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default text-gray-700 font-medium' >
//                 <td className='px-6 py-3'>
//                   <div className='w-[60px]'>
//                     <Checkbox {...label} size="small" />
//                   </div>
//                 </td>
//                 <td className='px-0 py-3'>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_5_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>

//                 </td>
//                 <td className='px-6 py-3'>
//                   Clothes
//                 </td>
//                 <td className='px-6 py-3'>
//                   Women
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </td>
//                 <td className='px-6 py-3'>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={20} type='error' />
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </td>
//               </tr>
//               <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default text-gray-700 font-medium' >
//                 <td className='px-6 py-3'>
//                   <div className='w-[60px]'>
//                     <Checkbox {...label} size="small" />
//                   </div>
//                 </td>
//                 <td className='px-0 py-3'>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_5_2} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>

//                 </td>
//                 <td className='px-6 py-3'>
//                   Clothes
//                 </td>
//                 <td className='px-6 py-3'>
//                   Women
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </td>
//                 <td className='px-6 py-3'>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={80} type='success' />
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </td>
//               </tr>
//               <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default text-gray-700 font-medium' >
//                 <td className='px-6 py-3'>
//                   <div className='w-[60px]'>
//                     <Checkbox {...label} size="small" />
//                   </div>
//                 </td>
//                 <td className='px-0 py-3'>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_1_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>

//                 </td>
//                 <td className='px-6 py-3'>
//                   Clothes
//                 </td>
//                 <td className='px-6 py-3'>
//                   Women
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </td>
//                 <td className='px-6 py-3'>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={35} type='warning' />
//                 </td>
//                 <td className='px-6 py-3'>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className='flex items-center justify-center py-4 '>
//           <Pagination count={10} color="primary" />
//         </div>

//       </div>

//       <div className='my-3 card shadow-md bg-white sm:rounded-lg'>
//         <div className='flex items-center justify-between px-3 py-5'>
//           <h2 className='text-lg font-semibold text-gray-700'>Products <span className='text-gray-500 font-medium'>(Material UI table)</span></h2>
//         </div>
//         <div className='flex items-center w-full px-3 justify-between'>
//           <div className='col w-[20%]'>
//             <h4 className='text-sm font-medium text-gray-700'>Category By</h4>
//             <Select
//               className='w-full my-2' size='small'
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               value={categoryFilterVal}
//               label="Category"
//               onChange={handleChangeCatFilter}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Men</MenuItem>
//               <MenuItem value={20}>Women</MenuItem>
//               <MenuItem value={30}>Kids</MenuItem>
//             </Select>
//           </div>
//           <div className='col w-[%] ml-auto flex items-center gap-2'>
//             <Button className='!bg-green-600 !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2'><IoCloudDownloadOutline className='text-xl' /> Export</Button>
//             <Button className='!bg-[#3872fa] !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2' onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })}><FaPlus className='text-lg' /> Add Product</Button>
//           </div>
//         </div>

//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>

//               <TableRow>
//                 <TableCell>
//                   {/* <Checkbox {...label} size="small" /> */}
//                   &nbsp;
//                 </TableCell>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{ minWidth: column.minWidth }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow >
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <Checkbox {...label} size="small" />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_5_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Clothes
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Women
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={50} type='success' />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </TableCell>
//               </TableRow>
//               <TableRow >
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <Checkbox {...label} size="small" />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_5_2} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Clothes
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Women
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={15} type='error' />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </TableCell>
//               </TableRow>
//               <TableRow >
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <Checkbox {...label} size="small" />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_4_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Clothes
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Women
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={30} type='warning' />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </TableCell>
//               </TableRow>
//               <TableRow >
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <Checkbox {...label} size="small" />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_4_2} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Clothes
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Women
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={50} type='success' />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </TableCell>
//               </TableRow>
//               <TableRow >
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <Checkbox {...label} size="small" />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-4 w-[350px]'>
//                     <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                       <Link to='/product/27368'> <img src={assets.L_img_1_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                     </div>
//                     <div className='info w-[75%]'>
//                       <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                       <span className='text-[12px] text-gray-500 font-medium'>
//                         leather lovers
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Clothes
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Women
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1 flex-col'>
//                     <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                     <span className=' text-primary font-semibold' >$58.00</span>
//                   </div>
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                   <ProgressBar value={80} type='success' />
//                 </TableCell>
//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   <div className='flex items-center gap-1'>
//                     {/* <Tooltip title="Edit Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="View Product Details" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                     {/* </Tooltip> */}
//                     {/* <Tooltip title="Remove Product" placement="top"> */}
//                     <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                     {/* </Tooltip> */}
//                   </div>
//                 </TableCell>
//               </TableRow>

//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={10}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </div>

//       <div className='my-3 card shadow-md bg-white sm:rounded-lg'>
//         <div className='flex items-center justify-between px-3 pt-3'>
//           <h2 className='text-lg font-semibold text-gray-700'>Total Users & Total Sales</h2>
//         </div>
//         <div className='flex items-center gap-5 px-3 pb-3'>
//           <span className='flex items-center gap-1 text-[15px]'> <span className='block h-[9px] w-[9px] rounded-full bg-green-600'></span>Total Users</span>
//           <span className='flex items-center gap-1 text-[15px]'> <span className='block h-[9px] w-[9px] rounded-full bg-primary '></span>Total Sales</span>
//         </div>
//         <LineChart
//           style={{ width: '100%', maxWidth: '1000', height: '70vh', maxHeight: '400', aspectRatio: 1.618 }}
//           responsive
//           data={chart1Data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke='none' />
//           <XAxis dataKey="name" tick={{ fontSize: 12 }} />
//           <YAxis width="auto" tick={{ fontSize: 12 }} />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="TotalSales" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
//           <Line type="monotone" dataKey="TotalUsers" stroke="#82ca9d" strokeWidth={2} />
//           {/* <RechartsDevtools /> */}
//         </LineChart>

//       </div>
//     </div>
//   )
// }

// export default Dashboard






// import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
// import {
//   LineChart, Line, AreaChart, Area, BarChart, Bar,
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend,
//   ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import {
//   TbShoppingCart, TbUsers, TbCurrencyRupee, TbPackage,
//   TbTrendingUp, TbTrendingDown, TbPlus, TbDownload,
//   TbEdit, TbEye, TbTrash, TbSearch, TbFilter,
//   TbChevronDown, TbChevronUp, TbRefresh, TbDots,
//   TbArrowRight, TbCheck, TbX, TbBell, TbChartBar,
//   TbCalendar, TbStar, TbAlertTriangle, TbCircleCheck,
//   TbClock, TbTruck, TbMoodSmile, TbTag, TbChartPie
// } from 'react-icons/tb';
// import { HiOutlineDotsHorizontal } from 'react-icons/hi';

// /* ═══════════════════════════════════════════
//    MOCK DATA
// ═══════════════════════════════════════════ */
// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const generateMonthlyData = () => MONTHS.map((m, i) => ({
//   name: m,
//   Revenue: Math.floor(Math.random() * 80000) + 20000,
//   Orders: Math.floor(Math.random() * 500) + 100,
//   Users: Math.floor(Math.random() * 300) + 50,
// }));

// const ORDERS_DATA = [
//   { id: '#ORD-8821', payId: 'pay_PTP016a3ed9d8', name: 'Rajesh Verma', phone: '9837847394', email: 'rajesh@gmail.com', address: 'H No 222, Street No 6, Adarsh Mohalla, Delhi', pin: '110034', amount: 5400, userId: 'USR-4421', status: 'pending', date: '12 Jan 2026', items: [{ title: 'Classic Oxford Cotton Shirt', qty: 2, price: 1800, subtotal: 3600 }, { title: 'Slim Fit Chinos', qty: 1, price: 1800, subtotal: 1800 }] },
//   { id: '#ORD-8820', payId: 'pay_ABC123xyz', name: 'Priya Sharma', phone: '9876543210', email: 'priya@gmail.com', address: 'B-42, Vasant Kunj, New Delhi', pin: '110070', amount: 2800, userId: 'USR-4422', status: 'shipped', date: '11 Jan 2026', items: [{ title: 'Embroidered Kurta Set', qty: 1, price: 2800, subtotal: 2800 }] },
//   { id: '#ORD-8819', payId: 'pay_DEF456uvw', name: 'Amit Kumar', phone: '9123456789', email: 'amit@gmail.com', address: '14, MG Road, Pune', pin: '411001', amount: 7200, userId: 'USR-4423', status: 'delivered', date: '10 Jan 2026', items: [{ title: 'Premium Leather Jacket', qty: 1, price: 4500, subtotal: 4500 }, { title: 'Woolen Muffler', qty: 3, price: 900, subtotal: 2700 }] },
//   { id: '#ORD-8818', payId: 'pay_GHI789rst', name: 'Sunita Patel', phone: '9988776655', email: 'sunita@gmail.com', address: 'C-5, Navrangpura, Ahmedabad', pin: '380009', amount: 1350, userId: 'USR-4424', status: 'cancelled', date: '09 Jan 2026', items: [{ title: 'Floral Print Kurti', qty: 1, price: 1350, subtotal: 1350 }] },
//   { id: '#ORD-8817', payId: 'pay_JKL012mno', name: 'Vikram Singh', phone: '9765432100', email: 'vikram@gmail.com', address: '77, Race Course Road, Bengaluru', pin: '560001', amount: 9800, userId: 'USR-4425', status: 'delivered', date: '08 Jan 2026', items: [{ title: 'Designer Sherwani', qty: 1, price: 9800, subtotal: 9800 }] },
// ];

// const PRODUCTS_DATA = [
//   { id: 'PRD-001', name: 'Classic Oxford Cotton Shirt', category: 'Men', sub: 'Topwear', brand: 'StudioFit', mrp: 2499, price: 1799, sales: 842, stock: 45, rating: 4.5, img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=80&h=80&fit=crop' },
//   { id: 'PRD-002', name: 'Embroidered Rayon Kurta Pant Set', category: 'Women', sub: 'Topwear', brand: 'EthnicHues', mrp: 3299, price: 2199, sales: 627, stock: 12, rating: 4.7, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&h=80&fit=crop' },
//   { id: 'PRD-003', name: 'Premium Slim Fit Chinos', category: 'Men', sub: 'Bottomwear', brand: 'UrbanThread', mrp: 1899, price: 1299, sales: 1203, stock: 88, rating: 4.3, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=80&h=80&fit=crop' },
//   { id: 'PRD-004', name: 'Woolen Overcoat Winter Edition', category: 'Men', sub: 'Winterwear', brand: 'WarmWear', mrp: 7999, price: 5499, sales: 381, stock: 4, rating: 4.8, img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=80&h=80&fit=crop' },
//   { id: 'PRD-005', name: 'Floral Maxi Dress Summer', category: 'Women', sub: 'Topwear', brand: 'BloomWear', mrp: 2599, price: 1699, sales: 956, stock: 31, rating: 4.2, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=80&h=80&fit=crop' },
//   { id: 'PRD-006', name: 'Designer Silk Cushion Cover', category: 'Others', sub: 'Cushion Cover', brand: 'HomeDecor', mrp: 899, price: 599, sales: 2140, stock: 0, rating: 4.6, img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=80&h=80&fit=crop' },
// ];

// const USERS_DATA = [
//   { id: 'USR-001', name: 'Rajesh Verma', email: 'rajesh@gmail.com', phone: '9837847394', orders: 14, spent: 42800, joined: '12 Mar 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-002', name: 'Priya Sharma', email: 'priya@gmail.com', phone: '9876543210', orders: 8, spent: 18600, joined: '05 Jun 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-003', name: 'Amit Kumar', email: 'amit@gmail.com', phone: '9123456789', orders: 22, spent: 78200, joined: '28 Jan 2024', status: 'active', city: 'Pune' },
//   { id: 'USR-004', name: 'Sunita Patel', email: 'sunita@gmail.com', phone: '9988776655', orders: 3, spent: 4200, joined: '18 Oct 2024', status: 'inactive', city: 'Ahmedabad' },
//   { id: 'USR-005', name: 'Vikram Singh', email: 'vikram@gmail.com', phone: '9765432100', orders: 31, spent: 154000, joined: '02 Feb 2023', status: 'active', city: 'Bengaluru' },
// ];

// const PIE_DATA = [
//   { name: 'Men', value: 38, color: '#6366f1' },
//   { name: 'Women', value: 45, color: '#ec4899' },
//   { name: 'Others', value: 17, color: '#f59e0b' },
// ];

// const STATUS_CONFIG = {
//   pending: { label: 'Pending', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
//   shipped: { label: 'Shipped', cls: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
//   delivered: { label: 'Delivered', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
//   cancelled: { label: 'Cancelled', cls: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500' },
//   active: { label: 'Active', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
//   inactive: { label: 'Inactive', cls: 'bg-gray-50 text-gray-500 border-gray-200', dot: 'bg-gray-400' },
// };

// /* ═══════════════════════════════════════════
//    SMALL REUSABLE COMPONENTS
// ═══════════════════════════════════════════ */

// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11.5px] font-semibold ${cfg.cls}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// };

// const MiniStat = ({ icon, label, value, trend, color }) => (
//   <div className={`flex items-center gap-3 p-3 rounded-xl border ${color}`}>
//     <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm flex-shrink-0">{icon}</div>
//     <div>
//       <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
//       <p className="text-[17px] font-extrabold text-gray-900 leading-none mt-0.5">{value}</p>
//     </div>
//     {trend !== undefined && (
//       <div className={`ml-auto flex items-center gap-0.5 text-[11px] font-bold ${trend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
//         {trend >= 0 ? <TbTrendingUp size={13} /> : <TbTrendingDown size={13} />}
//         {Math.abs(trend)}%
//       </div>
//     )}
//   </div>
// );

// const SectionCard = ({ title, subtitle, children, toolbar, className = '' }) => (
//   <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${className}`}>
//     <div className="flex items-start justify-between px-6 py-4 border-b border-gray-50">
//       <div>
//         <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
//         {subtitle && <p className="text-[12px] text-gray-400 mt-0.5">{subtitle}</p>}
//       </div>
//       {toolbar}
//     </div>
//     {children}
//   </div>
// );

// const Btn = ({ children, onClick, variant = 'ghost', size = 'sm', className = '' }) => {
//   const base = 'inline-flex items-center gap-1.5 font-semibold rounded-xl transition-all cursor-pointer border';
//   const sizes = { xs: 'px-2.5 py-1.5 text-[11.5px]', sm: 'px-3.5 py-2 text-[13px]', md: 'px-5 py-2.5 text-[13.5px]' };
//   const variants = {
//     primary: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 shadow-sm',
//     ghost: 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50',
//     success: 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700',
//     danger: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100',
//     amber: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
//   };
//   return <button onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>{children}</button>;
// };

// const SearchInput = ({ value, onChange, placeholder = 'Search…' }) => (
//   <div className="relative">
//     <TbSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//     <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
//       className="pl-9 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all w-52" />
//   </div>
// );

// /* Custom tooltip for charts */
// const ChartTooltip = ({ active, payload, label }) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
//       <p className="font-bold text-gray-900 mb-2">{label}</p>
//       {payload.map((p, i) => (
//         <div key={i} className="flex items-center gap-2 mb-1">
//           <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
//           <span className="text-gray-500">{p.name}:</span>
//           <span className="font-bold text-gray-900">{p.name === 'Revenue' ? `₹${p.value.toLocaleString()}` : p.value.toLocaleString()}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    KPI STAT CARDS
// ═══════════════════════════════════════════ */
// const KPICard = ({ icon, label, value, change, changeLabel, color, sparkData }) => {
//   const isPositive = change >= 0;
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
//           {icon}
//         </div>
//         <span className={`inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
//           {isPositive ? <TbTrendingUp size={12} /> : <TbTrendingDown size={12} />}
//           {Math.abs(change)}%
//         </span>
//       </div>
//       <p className="text-[13px] text-gray-500 font-medium mb-1">{label}</p>
//       <p className="text-[24px] font-extrabold text-gray-900 tracking-tight">{value}</p>
//       <p className="text-[11.5px] text-gray-400 mt-1">{changeLabel}</p>
//       {/* Sparkline */}
//       <div className="mt-3 -mx-1">
//         <ResponsiveContainer width="100%" height={40}>
//           <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
//                 <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} fill={`url(#spark-${label})`} dot={false} />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    ORDERS TABLE
// ═══════════════════════════════════════════ */
// const OrdersTable = ({ onStatusChange }) => {
//   const [expanded, setExpanded] = useState(null);
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [sortField, setSortField] = useState('date');
//   const [sortDir, setSortDir] = useState('desc');
//   const [orders, setOrders] = useState(ORDERS_DATA);
//   const [page, setPage] = useState(0);
//   const PER_PAGE = 5;

//   const filtered = useMemo(() => {
//     let data = [...orders];
//     if (search) data = data.filter(o => o.name.toLowerCase().includes(search.toLowerCase()) || o.id.includes(search) || o.email.toLowerCase().includes(search.toLowerCase()));
//     if (statusFilter !== 'all') data = data.filter(o => o.status === statusFilter);
//     return data;
//   }, [orders, search, statusFilter, sortField, sortDir]);

//   const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
//   const totalPages = Math.ceil(filtered.length / PER_PAGE);

//   const updateStatus = (orderId, newStatus) => {
//     setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
//     onStatusChange?.();
//   };

//   const SortIcon = ({ field }) => {
//     if (sortField !== field) return <TbChevronDown size={12} className="text-gray-300" />;
//     return sortDir === 'asc' ? <TbChevronUp size={12} className="text-indigo-500" /> : <TbChevronDown size={12} className="text-indigo-500" />;
//   };

//   const handleSort = (field) => {
//     if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
//     else { setSortField(field); setSortDir('asc'); }
//   };

//   return (
//     <SectionCard
//       title="Recent Orders"
//       subtitle={`${filtered.length} orders · Page ${page + 1}/${totalPages || 1}`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           <SearchInput value={search} onChange={setSearch} placeholder="Search orders…" />
//           <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(0); }}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//             <option value="all">All Status</option>
//             <option value="pending">Pending</option>
//             <option value="shipped">Shipped</option>
//             <option value="delivered">Delivered</option>
//             <option value="cancelled">Cancelled</option>
//           </select>
//           <Btn variant="success" size="sm"><TbDownload size={14} /> Export</Btn>
//         </div>
//       }
//     >
//       {/* Stats row */}
//       <div className="grid grid-cols-4 gap-3 p-4 bg-gray-50 border-b border-gray-100">
//         {['pending', 'shipped', 'delivered', 'cancelled'].map(s => (
//           <div key={s} className="text-center">
//             <p className="text-[18px] font-extrabold text-gray-900">{orders.filter(o => o.status === s).length}</p>
//             <p className="text-[11px] text-gray-400 capitalize font-medium">{s}</p>
//           </div>
//         ))}
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               <th className="w-10 px-4 py-3" />
//               {[['Order', 'id'], ['Customer', 'name'], ['Amount', 'amount'], ['Status', 'status'], ['Date', 'date']].map(([l, f]) => (
//                 <th key={f} className="px-4 py-3 text-left font-semibold text-gray-500 cursor-pointer select-none whitespace-nowrap" onClick={() => handleSort(f)}>
//                   <span className="flex items-center gap-1">{l} <SortIcon field={f} /></span>
//                 </th>
//               ))}
//               <th className="px-4 py-3 text-left font-semibold text-gray-500">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginated.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-12 text-gray-400 text-[13px]">No orders found</td></tr>
//             ) : paginated.map((order, i) => (
//               <React.Fragment key={order.id}>
//                 <tr className={`border-b border-gray-50 hover:bg-indigo-50/30 transition-colors ${expanded === order.id ? 'bg-indigo-50/20' : ''}`}>
//                   <td className="px-4 py-3.5">
//                     <button onClick={() => setExpanded(expanded === order.id ? null : order.id)}
//                       className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors">
//                       <TbChevronDown size={14} className={`text-gray-600 transition-transform ${expanded === order.id ? 'rotate-180' : ''}`} />
//                     </button>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <div>
//                       <span className="font-bold text-indigo-600">{order.id}</span>
//                       <p className="text-[11px] text-gray-400 font-mono mt-0.5">{order.payId}</p>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <div>
//                       <p className="font-semibold text-gray-900">{order.name}</p>
//                       <p className="text-[11.5px] text-gray-400">{order.email}</p>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <span className="font-extrabold text-gray-900">₹{order.amount.toLocaleString()}</span>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <select value={order.status} onChange={e => updateStatus(order.id, e.target.value)}
//                       className={`px-2.5 py-1 rounded-full border text-[11.5px] font-semibold outline-none cursor-pointer ${STATUS_CONFIG[order.status]?.cls}`}>
//                       <option value="pending">Pending</option>
//                       <option value="shipped">Shipped</option>
//                       <option value="delivered">Delivered</option>
//                       <option value="cancelled">Cancelled</option>
//                     </select>
//                   </td>
//                   <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{order.date}</td>
//                   <td className="px-4 py-3.5">
//                     <div className="flex items-center gap-1.5">
//                       <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors" title="View"><TbEye size={13} className="text-gray-600" /></button>
//                       <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-amber-100 flex items-center justify-center transition-colors" title="Edit"><TbEdit size={13} className="text-gray-600" /></button>
//                       <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors" title="Delete"><TbTrash size={13} className="text-gray-600" /></button>
//                     </div>
//                   </td>
//                 </tr>
//                 {expanded === order.id && (
//                   <tr className="bg-indigo-50/20">
//                     <td colSpan={7} className="px-10 py-4">
//                       <div className="bg-white border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
//                         <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50">
//                           <p className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Order Items</p>
//                           <div className="flex gap-3 text-[12px] text-gray-500">
//                             <span>📍 {order.address} — {order.pin}</span>
//                             <span>📞 {order.phone}</span>
//                           </div>
//                         </div>
//                         <table className="w-full text-[12.5px]">
//                           <thead className="bg-gray-50">
//                             <tr>
//                               {['Product', 'Quantity', 'Unit Price', 'Subtotal'].map(h => <th key={h} className="px-4 py-2.5 text-left font-semibold text-gray-500">{h}</th>)}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {order.items.map((item, j) => (
//                               <tr key={j} className="border-t border-gray-50">
//                                 <td className="px-4 py-3 font-medium text-gray-800">{item.title}</td>
//                                 <td className="px-4 py-3 text-gray-600">{item.qty}</td>
//                                 <td className="px-4 py-3 text-gray-600">₹{item.price.toLocaleString()}</td>
//                                 <td className="px-4 py-3 font-bold text-gray-900">₹{item.subtotal.toLocaleString()}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                           <tfoot className="border-t-2 border-gray-100 bg-gray-50">
//                             <tr><td colSpan={3} className="px-4 py-2.5 text-right font-bold text-gray-700">Total:</td><td className="px-4 py-2.5 font-extrabold text-indigo-700">₹{order.amount.toLocaleString()}</td></tr>
//                           </tfoot>
//                         </table>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Pagination */}
//       <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
//         <p className="text-[12.5px] text-gray-500">Showing {Math.min(page * PER_PAGE + 1, filtered.length)}–{Math.min((page + 1) * PER_PAGE, filtered.length)} of {filtered.length}</p>
//         <div className="flex items-center gap-1.5">
//           <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Prev</button>
//           {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i).map(i => (
//             <button key={i} onClick={() => setPage(i)} className={`w-8 h-8 rounded-lg text-[12.5px] font-bold transition-colors ${page === i ? 'bg-indigo-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{i + 1}</button>
//           ))}
//           <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Next</button>
//         </div>
//       </div>
//     </SectionCard>
//   );
// };

// /* ═══════════════════════════════════════════
//    PRODUCTS TABLE
// ═══════════════════════════════════════════ */
// const ProductsTable = () => {
//   const [search, setSearch] = useState('');
//   const [catFilter, setCatFilter] = useState('all');
//   const [selected, setSelected] = useState([]);
//   const [products, setProducts] = useState(PRODUCTS_DATA);
//   const [page, setPage] = useState(0);
//   const [sortField, setSortField] = useState('sales');
//   const [sortDir, setSortDir] = useState('desc');
//   const PER_PAGE = 5;

//   const filtered = useMemo(() => {
//     let data = [...products];
//     if (search) data = data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));
//     if (catFilter !== 'all') data = data.filter(p => p.category === catFilter);
//     data.sort((a, b) => {
//       const va = a[sortField], vb = b[sortField];
//       return sortDir === 'asc' ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
//     });
//     return data;
//   }, [products, search, catFilter, sortField, sortDir]);

//   const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
//   const totalPages = Math.ceil(filtered.length / PER_PAGE);
//   const allSelected = paginated.length > 0 && paginated.every(p => selected.includes(p.id));

//   const toggleSelect = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
//   const toggleAll = () => setSelected(allSelected ? [] : paginated.map(p => p.id));
//   const deleteProduct = (id) => setProducts(p => p.filter(x => x.id !== id));
//   const deleteSelected = () => { setProducts(p => p.filter(x => !selected.includes(x.id))); setSelected([]); };

//   const SalesBar = ({ value }) => {
//     const pct = Math.min(100, (value / 2500) * 100);
//     const color = pct > 70 ? 'bg-emerald-500' : pct > 40 ? 'bg-amber-500' : 'bg-red-400';
//     return (
//       <div>
//         <div className="flex items-center justify-between text-[11px] mb-1">
//           <span className="font-semibold text-gray-700">{value.toLocaleString()}</span>
//           <span className="text-gray-400">{Math.round(pct)}%</span>
//         </div>
//         <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-28">
//           <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
//         </div>
//       </div>
//     );
//   };

//   const StockBadge = ({ stock }) => {
//     if (stock === 0) return <span className="px-2 py-0.5 bg-red-50 text-red-600 border border-red-200 rounded-full text-[11px] font-bold">Out of Stock</span>;
//     if (stock < 10) return <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[11px] font-bold">Low: {stock}</span>;
//     return <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[11px] font-bold">{stock} in stock</span>;
//   };

//   return (
//     <SectionCard
//       title="Products"
//       subtitle={`${filtered.length} products · ${selected.length > 0 ? `${selected.length} selected` : 'sorted by ' + sortField}`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           {selected.length > 0 && <Btn variant="danger" size="sm" onClick={deleteSelected}><TbTrash size={13} /> Delete ({selected.length})</Btn>}
//           <SearchInput value={search} onChange={v => { setSearch(v); setPage(0); }} placeholder="Search products…" />
//           <select value={catFilter} onChange={e => { setCatFilter(e.target.value); setPage(0); }}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//             <option value="all">All Categories</option>
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Others">Others</option>
//           </select>
//           <Btn variant="success" size="sm"><TbDownload size={14} /> Export</Btn>
//           <Btn variant="primary" size="sm"><TbPlus size={14} /> Add Product</Btn>
//         </div>
//       }
//     >
//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               <th className="px-5 py-3.5">
//                 <input type="checkbox" checked={allSelected} onChange={toggleAll} className="w-4 h-4 accent-indigo-600 cursor-pointer rounded" />
//               </th>
//               {[['Product', 'name'], ['Category', 'category'], ['Price', 'price'], ['Sales', 'sales'], ['Stock', 'stock'], ['Rating', 'rating']].map(([l, f]) => (
//                 <th key={f} onClick={() => { if (sortField === f) setSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setSortField(f); setSortDir('desc'); } }}
//                   className="px-4 py-3.5 text-left font-semibold text-gray-500 cursor-pointer select-none whitespace-nowrap hover:text-gray-700 transition-colors">
//                   <span className="flex items-center gap-1">{l} {sortField === f ? (sortDir === 'asc' ? <TbChevronUp size={12} className="text-indigo-500" /> : <TbChevronDown size={12} className="text-indigo-500" />) : <TbChevronDown size={12} className="text-gray-300" />}</span>
//                 </th>
//               ))}
//               <th className="px-4 py-3.5 text-left font-semibold text-gray-500">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginated.length === 0 ? (
//               <tr><td colSpan={8} className="text-center py-12 text-gray-400">No products found</td></tr>
//             ) : paginated.map(p => (
//               <tr key={p.id} className={`border-b border-gray-50 hover:bg-indigo-50/20 transition-colors ${selected.includes(p.id) ? 'bg-indigo-50/40' : ''}`}>
//                 <td className="px-5 py-4">
//                   <input type="checkbox" checked={selected.includes(p.id)} onChange={() => toggleSelect(p.id)} className="w-4 h-4 accent-indigo-600 cursor-pointer rounded" />
//                 </td>
//                 <td className="px-4 py-4">
//                   <div className="flex items-center gap-3 min-w-[240px]">
//                     <div className="w-14 h-14 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 bg-gray-50">
//                       <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" onError={e => { e.target.style.display = 'none'; }} />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900 leading-snug max-w-[180px] line-clamp-2">{p.name}</p>
//                       <p className="text-[11.5px] text-gray-400 mt-0.5">{p.brand} · {p.id}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-4 py-4">
//                   <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-[11.5px] font-semibold">{p.category}</span>
//                   <p className="text-[11px] text-gray-400 mt-1">{p.sub}</p>
//                 </td>
//                 <td className="px-4 py-4">
//                   <p className="text-[11.5px] text-gray-400 line-through">₹{p.mrp}</p>
//                   <p className="font-bold text-gray-900 text-[15px]">₹{p.price}</p>
//                   <p className="text-[10.5px] text-emerald-600 font-semibold">{Math.round((1 - p.price / p.mrp) * 100)}% off</p>
//                 </td>
//                 <td className="px-4 py-4"><SalesBar value={p.sales} /></td>
//                 <td className="px-4 py-4"><StockBadge stock={p.stock} /></td>
//                 <td className="px-4 py-4">
//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: 5 }, (_, i) => (
//                       <TbStar key={i} size={12} className={i < Math.round(p.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'} style={{ fill: i < Math.round(p.rating) ? '#fbbf24' : 'none' }} />
//                     ))}
//                     <span className="text-[11px] text-gray-500 ml-1">{p.rating}</span>
//                   </div>
//                 </td>
//                 <td className="px-4 py-4">
//                   <div className="flex items-center gap-1.5">
//                     <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors"><TbEdit size={13} className="text-gray-600" /></button>
//                     <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"><TbEye size={13} className="text-gray-600" /></button>
//                     <button onClick={() => deleteProduct(p.id)} className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors"><TbTrash size={13} className="text-red-500" /></button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
//         <p className="text-[12.5px] text-gray-500">Showing {Math.min(page * PER_PAGE + 1, filtered.length)}–{Math.min((page + 1) * PER_PAGE, filtered.length)} of {filtered.length}</p>
//         <div className="flex items-center gap-1.5">
//           <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Prev</button>
//           {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i).map(i => (
//             <button key={i} onClick={() => setPage(i)} className={`w-8 h-8 rounded-lg text-[12.5px] font-bold transition-colors ${page === i ? 'bg-indigo-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{i + 1}</button>
//           ))}
//           <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Next</button>
//         </div>
//       </div>
//     </SectionCard>
//   );
// };

// /* ═══════════════════════════════════════════
//    USERS TABLE
// ═══════════════════════════════════════════ */
// const UsersTable = () => {
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [users, setUsers] = useState(USERS_DATA);

//   const filtered = useMemo(() => {
//     let data = [...users];
//     if (search) data = data.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
//     if (statusFilter !== 'all') data = data.filter(u => u.status === statusFilter);
//     return data;
//   }, [users, search, statusFilter]);

//   const toggleStatus = (id) => setUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u));

//   const initials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
//   const colors = ['bg-indigo-100 text-indigo-700', 'bg-pink-100 text-pink-700', 'bg-amber-100 text-amber-700', 'bg-emerald-100 text-emerald-700', 'bg-violet-100 text-violet-700'];

//   return (
//     <SectionCard
//       title="Users"
//       subtitle={`${filtered.length} users`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           <SearchInput value={search} onChange={setSearch} placeholder="Search users…" />
//           <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//             <option value="all">All</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <Btn variant="success" size="sm"><TbDownload size={14} /> Export</Btn>
//         </div>
//       }
//     >
//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               {['Customer', 'Contact', 'Orders', 'Total Spent', 'Joined', 'Status', 'Actions'].map(h => (
//                 <th key={h} className="px-5 py-3.5 text-left font-semibold text-gray-500 whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-12 text-gray-400">No users found</td></tr>
//             ) : filtered.map((u, i) => (
//               <tr key={u.id} className="border-b border-gray-50 hover:bg-indigo-50/20 transition-colors">
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${colors[i % colors.length]}`}>{initials(u.name)}</div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{u.name}</p>
//                       <p className="text-[11.5px] text-gray-400">{u.id} · {u.city}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-5 py-4">
//                   <p className="text-gray-700">{u.email}</p>
//                   <p className="text-[11.5px] text-gray-400">{u.phone}</p>
//                 </td>
//                 <td className="px-5 py-4">
//                   <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-[12px] font-bold">{u.orders} orders</span>
//                 </td>
//                 <td className="px-5 py-4">
//                   <span className="font-extrabold text-gray-900">₹{u.spent.toLocaleString()}</span>
//                 </td>
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{u.joined}</td>
//                 <td className="px-5 py-4"><StatusBadge status={u.status} /></td>
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-1.5">
//                     <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors"><TbEye size={13} className="text-gray-600" /></button>
//                     <button onClick={() => toggleStatus(u.id)} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${u.status === 'active' ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'}`}>
//                       {u.status === 'active' ? 'Deactivate' : 'Activate'}
//                     </button>
//                     <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors"><TbTrash size={13} className="text-red-500" /></button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </SectionCard>
//   );
// };

// /* ═══════════════════════════════════════════
//    CHARTS
// ═══════════════════════════════════════════ */
// const ChartsSection = () => {
//   const [period, setPeriod] = useState('monthly');
//   const [chartType, setChartType] = useState('area');
//   const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders', 'Users']);
//   const [data, setData] = useState(() => generateMonthlyData());

//   const refreshData = () => setData(generateMonthlyData());
//   const toggleMetric = (m) => setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//   const METRICS = [
//     { key: 'Revenue', color: '#6366f1', label: 'Revenue (₹)' },
//     { key: 'Orders', color: '#10b981', label: 'Orders' },
//     { key: 'Users', color: '#f59e0b', label: 'New Users' },
//   ];

//   return (
//     <div className="space-y-5">
//       <SectionCard
//         title="Performance Analytics"
//         subtitle="Revenue, orders & user growth over time"
//         toolbar={
//           <div className="flex items-center gap-2">
//             {['area', 'line', 'bar'].map(t => (
//               <button key={t} onClick={() => setChartType(t)}
//                 className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                 {t}
//               </button>
//             ))}
//             <button onClick={refreshData} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" title="Refresh data">
//               <TbRefresh size={14} className="text-gray-500" />
//             </button>
//           </div>
//         }
//       >
//         {/* Metric toggles */}
//         <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
//           {METRICS.map(m => (
//             <button key={m.key} onClick={() => toggleMetric(m.key)}
//               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
//               style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
//               <span className="w-2 h-2 rounded-full" style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
//               {m.label}
//             </button>
//           ))}
//         </div>
//         <div className="px-4 pb-5 pt-2">
//           <ResponsiveContainer width="100%" height={320}>
//             {chartType === 'bar' ? (
//               <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />)}
//               </BarChart>
//             ) : chartType === 'line' ? (
//               <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />)}
//               </LineChart>
//             ) : (
//               <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <defs>
//                   {METRICS.map(m => (
//                     <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
//                       <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                     </linearGradient>
//                   ))}
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
//                   <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                 ))}
//               </AreaChart>
//             )}
//           </ResponsiveContainer>
//         </div>
//       </SectionCard>

//       {/* Secondary charts row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {/* Pie */}
//         <SectionCard title="Sales by Category" subtitle="Revenue distribution across categories">
//           <div className="flex items-center justify-center gap-6 p-5">
//             <PieChart width={180} height={180}>
//               <Pie data={PIE_DATA} cx={85} cy={85} innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
//                 {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
//               </Pie>
//               <Tooltip formatter={(v) => `${v}%`} />
//             </PieChart>
//             <div className="space-y-3">
//               {PIE_DATA.map(d => (
//                 <div key={d.name} className="flex items-center gap-3">
//                   <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
//                   <div>
//                     <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
//                     <p className="text-[12px] text-gray-400">{d.value}% of sales</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </SectionCard>

//         {/* Top products bar */}
//         <SectionCard title="Top Products by Sales" subtitle="Best performing items this month">
//           <div className="p-5">
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart layout="vertical" data={PRODUCTS_DATA.slice().sort((a, b) => b.sales - a.sales).slice(0, 5).map(p => ({ name: p.name.slice(0, 22) + '…', sales: p.sales }))} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
//                 <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} axisLine={false} tickLine={false} width={140} />
//                 <Tooltip />
//                 <Bar dataKey="sales" fill="#6366f1" radius={[0, 4, 4, 0]}>
//                   {PRODUCTS_DATA.map((_, i) => <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'][i % 5]} />)}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </SectionCard>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    ACTIVITY FEED
// ═══════════════════════════════════════════ */
// const ActivityFeed = () => {
//   const activities = [
//     { icon: <TbShoppingCart size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'New order #ORD-8821 from Rajesh Verma', time: '2 min ago', type: 'order' },
//     { icon: <TbUsers size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'New user registered: priya@gmail.com', time: '14 min ago', type: 'user' },
//     { icon: <TbPackage size={14} className="text-amber-600" />, bg: 'bg-amber-50', text: 'Product "Woolen Overcoat" — low stock (4 left)', time: '1 hr ago', type: 'alert' },
//     { icon: <TbCircleCheck size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'Order #ORD-8819 delivered successfully', time: '2 hr ago', type: 'delivery' },
//     { icon: <TbAlertTriangle size={14} className="text-red-500" />, bg: 'bg-red-50', text: '"Designer Silk Cushion Cover" is out of stock', time: '3 hr ago', type: 'stock' },
//     { icon: <TbCurrencyRupee size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'Payment received ₹9,800 from Vikram Singh', time: '5 hr ago', type: 'payment' },
//   ];
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
//       <div className="px-5 py-4 border-b border-gray-50">
//         <h2 className="text-[15px] font-bold text-gray-900">Activity Feed</h2>
//         <p className="text-[12px] text-gray-400 mt-0.5">Real-time store events</p>
//       </div>
//       <div className="divide-y divide-gray-50">
//         {activities.map((a, i) => (
//           <div key={i} className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
//             <div className={`w-7 h-7 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>{a.icon}</div>
//             <div className="flex-1 min-w-0">
//               <p className="text-[13px] text-gray-700 font-medium leading-snug">{a.text}</p>
//               <p className="text-[11.5px] text-gray-400 mt-0.5 flex items-center gap-1"><TbClock size={11} /> {a.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="px-5 py-3 border-t border-gray-50">
//         <button className="text-[12.5px] font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">View all activity <TbArrowRight size={13} /></button>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    MAIN DASHBOARD
// ═══════════════════════════════════════════ */
// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [greeting, setGreeting] = useState('Good Morning');
//   const [liveTime, setLiveTime] = useState(new Date());
//   const [toast, setToast] = useState(null);

//   useEffect(() => {
//     const h = new Date().getHours();
//     setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');
//     const timer = setInterval(() => setLiveTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const showToast = (msg, type = 'success') => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const TABS = [
//     { id: 'overview', label: 'Overview', icon: <TbChartBar size={15} /> },
//     { id: 'orders', label: 'Orders', icon: <TbShoppingCart size={15} /> },
//     { id: 'products', label: 'Products', icon: <TbPackage size={15} /> },
//     { id: 'users', label: 'Users', icon: <TbUsers size={15} /> },
//     { id: 'analytics', label: 'Analytics', icon: <TbChartPie size={15} /> },
//   ];

//   const sparkData = Array.from({ length: 12 }, (_, i) => ({ v: Math.floor(Math.random() * 100) + 20 }));

//   const KPI_CARDS = [
//     { icon: <TbCurrencyRupee size={20} className="text-indigo-600" />, label: 'Total Revenue', value: '₹4,82,650', change: 12.4, changeLabel: 'vs last month', color: 'bg-indigo-50' },
//     { icon: <TbShoppingCart size={20} className="text-emerald-600" />, label: 'Total Orders', value: '2,847', change: 8.1, changeLabel: '134 orders today', color: 'bg-emerald-50' },
//     { icon: <TbUsers size={20} className="text-violet-600" />, label: 'Total Users', value: '12,419', change: 5.7, changeLabel: '48 new this week', color: 'bg-violet-50' },
//     { icon: <TbPackage size={20} className="text-amber-600" />, label: 'Total Products', value: '1,284', change: -2.3, changeLabel: '6 out of stock', color: 'bg-amber-50' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f5]">
//       <style>{`
//         @keyframes slideIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
//         .slide-in { animation: slideIn 0.2s ease; }
//         .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
//       `}</style>

//       {/* ── TOAST ── */}
//       {toast && (
//         <div className={`fixed top-5 right-5 z-[9999] slide-in flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-[13.5px] font-semibold
//           ${toast.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-700'}`}>
//           {toast.type === 'success' ? <TbCircleCheck size={16} /> : <TbAlertTriangle size={16} />}
//           {toast.msg}
//         </div>
//       )}

//       {/* ── WELCOME BANNER ── */}
//       <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-6 py-6 mb-6 mt-16">
//         <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <p className="text-indigo-200 text-[13px] font-medium mb-1 flex items-center gap-2">
//               <TbCalendar size={13} /> {liveTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} &nbsp;·&nbsp;
//               <TbClock size={13} /> {liveTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//             </p>
//             <h1 className="text-[26px] font-extrabold text-white tracking-tight">{greeting}, Admin 👋</h1>
//             <p className="text-indigo-200 text-[14px] mt-1">Here's what's happening in your store today.</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
//               <p className="text-[11px] text-indigo-200 font-medium">Today's Revenue</p>
//               <p className="text-[20px] font-extrabold">₹18,420</p>
//               <p className="text-[11px] text-emerald-300 flex items-center gap-1"><TbTrendingUp size={11} /> +14.2% vs yesterday</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Btn variant="primary" size="sm" className="!bg-white !text-indigo-700 !border-white hover:!bg-indigo-50" onClick={() => showToast('Product panel opening…')}>
//                 <TbPlus size={14} /> Add Product
//               </Btn>
//               <Btn size="sm" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20" onClick={() => setRefreshKey(k => k + 1)}>
//                 <TbRefresh size={14} /> Refresh
//               </Btn>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 pb-10">
//         {/* ── TABS ── */}
//         <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm mb-6 w-fit">
//           {TABS.map(t => (
//             <button key={t.id} onClick={() => setActiveTab(t.id)}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${activeTab === t.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
//               {t.icon} {t.label}
//             </button>
//           ))}
//         </div>

//         {/* ── OVERVIEW TAB ── */}
//         {activeTab === 'overview' && (
//           <div className="space-y-6">
//             {/* KPI Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//               {KPI_CARDS.map((card, i) => <KPICard key={i} {...card} sparkData={sparkData} />)}
//             </div>

//             {/* Mini stats row */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               <MiniStat icon={<TbTruck size={16} className="text-blue-600" />} label="Shipped" value="184" color="border-blue-100 bg-blue-50/50" trend={6} />
//               <MiniStat icon={<TbCircleCheck size={16} className="text-emerald-600" />} label="Delivered" value="2,291" color="border-emerald-100 bg-emerald-50/50" trend={11} />
//               <MiniStat icon={<TbClock size={16} className="text-amber-600" />} label="Pending" value="248" color="border-amber-100 bg-amber-50/50" trend={-3} />
//               <MiniStat icon={<TbX size={16} className="text-red-500" />} label="Cancelled" value="124" color="border-red-100 bg-red-50/50" trend={-8} />
//             </div>

//             {/* Main grid: chart + activity */}
//             <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
//               <ChartsSection />
//               <ActivityFeed />
//             </div>

//             {/* Quick order preview */}
//             <OrdersTable onStatusChange={() => showToast('Order status updated!')} />
//           </div>
//         )}

//         {/* ── ORDERS TAB ── */}
//         {activeTab === 'orders' && (
//           <OrdersTable onStatusChange={() => showToast('Order status updated!')} />
//         )}

//         {/* ── PRODUCTS TAB ── */}
//         {activeTab === 'products' && <ProductsTable />}

//         {/* ── USERS TAB ── */}
//         {activeTab === 'users' && <UsersTable />}

//         {/* ── ANALYTICS TAB ── */}
//         {activeTab === 'analytics' && <ChartsSection />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect, useMemo } from 'react';
// import {
//   LineChart, Line, AreaChart, Area, BarChart, Bar,
//   XAxis, YAxis, CartesianGrid, Tooltip,
//   ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import {
//   TbShoppingCart, TbUsers, TbCurrencyRupee, TbPackage,
//   TbTrendingUp, TbTrendingDown, TbPlus, TbDownload,
//   TbEdit, TbEye, TbTrash, TbSearch,
//   TbChevronDown, TbChevronUp, TbRefresh,
//   TbArrowRight, TbCheck, TbX, TbChartBar,
//   TbCalendar, TbStar, TbAlertTriangle, TbCircleCheck,
//   TbClock, TbTruck, TbChartPie
// } from 'react-icons/tb';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../App';

// /* ─────────────────────────────────────────────
//    MOCK DATA (unchanged)
// ───────────────────────────────────────────── */
// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const generateMonthlyData = () => MONTHS.map((m, i) => ({
//   name: m,
//   Revenue: Math.floor(Math.random() * 80000) + 20000,
//   Orders: Math.floor(Math.random() * 500) + 100,
//   Users: Math.floor(Math.random() * 300) + 50,
// }));

// const PRODUCTS_DATA = [
//   { id: 'PRD-001', name: 'Classic Oxford Cotton Shirt', category: 'Men', sub: 'Topwear', brand: 'StudioFit', mrp: 2499, price: 1799, sales: 842, stock: 45, rating: 4.5, img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=80&h=80&fit=crop' },
//   { id: 'PRD-002', name: 'Embroidered Rayon Kurta Pant Set', category: 'Women', sub: 'Topwear', brand: 'EthnicHues', mrp: 3299, price: 2199, sales: 627, stock: 12, rating: 4.7, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&h=80&fit=crop' },
//   { id: 'PRD-003', name: 'Premium Slim Fit Chinos', category: 'Men', sub: 'Bottomwear', brand: 'UrbanThread', mrp: 1899, price: 1299, sales: 1203, stock: 88, rating: 4.3, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=80&h=80&fit=crop' },
//   { id: 'PRD-004', name: 'Woolen Overcoat Winter Edition', category: 'Men', sub: 'Winterwear', brand: 'WarmWear', mrp: 7999, price: 5499, sales: 381, stock: 4, rating: 4.8, img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=80&h=80&fit=crop' },
//   { id: 'PRD-005', name: 'Floral Maxi Dress Summer', category: 'Women', sub: 'Topwear', brand: 'BloomWear', mrp: 2599, price: 1699, sales: 956, stock: 31, rating: 4.2, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=80&h=80&fit=crop' },
//   { id: 'PRD-006', name: 'Designer Silk Cushion Cover', category: 'Others', sub: 'Cushion Cover', brand: 'HomeDecor', mrp: 899, price: 599, sales: 2140, stock: 0, rating: 4.6, img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=80&h=80&fit=crop' },
// ];

// const USERS_DATA = [
//   { id: 'USR-001', name: 'Rajesh Verma', email: 'rajesh@gmail.com', phone: '9837847394', orders: 14, spent: 42800, joined: '12 Mar 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-002', name: 'Priya Sharma', email: 'priya@gmail.com', phone: '9876543210', orders: 8, spent: 18600, joined: '05 Jun 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-003', name: 'Amit Kumar', email: 'amit@gmail.com', phone: '9123456789', orders: 22, spent: 78200, joined: '28 Jan 2024', status: 'active', city: 'Pune' },
//   { id: 'USR-004', name: 'Sunita Patel', email: 'sunita@gmail.com', phone: '9988776655', orders: 3, spent: 4200, joined: '18 Oct 2024', status: 'inactive', city: 'Ahmedabad' },
//   { id: 'USR-005', name: 'Vikram Singh', email: 'vikram@gmail.com', phone: '9765432100', orders: 31, spent: 154000, joined: '02 Feb 2023', status: 'active', city: 'Bengaluru' },
// ];

// const PIE_DATA = [
//   { name: 'Men', value: 38, color: '#6366f1' },
//   { name: 'Women', value: 45, color: '#ec4899' },
//   { name: 'Others', value: 17, color: '#f59e0b' },
// ];

// const STATUS_CONFIG = {
//   pending: { label: 'Pending', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
//   shipped: { label: 'Shipped', cls: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
//   delivered: { label: 'Delivered', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
//   cancelled: { label: 'Cancelled', cls: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500' },
//   active: { label: 'Active', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
//   inactive: { label: 'Inactive', cls: 'bg-gray-50 text-gray-500 border-gray-200', dot: 'bg-gray-400' },
// };

// /* ─────────────────────────────────────────────
//    SMALL REUSABLE COMPONENTS
// ───────────────────────────────────────────── */

// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11.5px] font-semibold ${cfg.cls}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// };

// const MiniStat = ({ icon, label, value, trend, color }) => (
//   <div className={`flex items-center gap-3 p-3 rounded-xl border ${color}`}>
//     <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm flex-shrink-0">{icon}</div>
//     <div>
//       <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
//       <p className="text-[17px] font-extrabold text-gray-900 leading-none mt-0.5">{value}</p>
//     </div>
//     {trend !== undefined && (
//       <div className={`ml-auto flex items-center gap-0.5 text-[11px] font-bold ${trend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
//         {trend >= 0 ? <TbTrendingUp size={13} /> : <TbTrendingDown size={13} />}
//         {Math.abs(trend)}%
//       </div>
//     )}
//   </div>
// );

// const SectionCard = ({ title, subtitle, children, toolbar, className = '' }) => (
//   <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${className}`}>
//     <div className="flex items-start justify-between px-6 py-4 border-b border-gray-50">
//       <div>
//         <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
//         {subtitle && <p className="text-[12px] text-gray-400 mt-0.5">{subtitle}</p>}
//       </div>
//       {toolbar}
//     </div>
//     {children}
//   </div>
// );

// const Btn = ({ children, onClick, variant = 'ghost', size = 'sm', className = '' }) => {
//   const base = 'inline-flex items-center gap-1.5 font-semibold rounded-xl transition-all cursor-pointer border';
//   const sizes = { xs: 'px-2.5 py-1.5 text-[11.5px]', sm: 'px-3.5 py-2 text-[13px]', md: 'px-5 py-2.5 text-[13.5px]' };
//   const variants = {
//     primary: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 shadow-sm',
//     ghost: 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50',
//     success: 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700',
//     danger: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100',
//     amber: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
//   };
//   return <button onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>{children}</button>;
// };

// const SearchInput = ({ value, onChange, placeholder = 'Search…' }) => (
//   <div className="relative">
//     <TbSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//     <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
//       className="pl-9 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-50 transition-all w-52" />
//   </div>
// );

// const ChartTooltip = ({ active, payload, label }) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
//       <p className="font-bold text-gray-900 mb-2">{label}</p>
//       {payload.map((p, i) => (
//         <div key={i} className="flex items-center gap-2 mb-1">
//           <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
//           <span className="text-gray-500">{p.name}:</span>
//           <span className="font-bold text-gray-900">{p.name === 'Revenue' ? `₹${p.value.toLocaleString()}` : p.value.toLocaleString()}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// const KPICard = ({ icon, label, value, change, changeLabel, color, sparkData }) => {
//   const isPositive = change >= 0;
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
//           {icon}
//         </div>
//         <span className={`inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
//           {isPositive ? <TbTrendingUp size={12} /> : <TbTrendingDown size={12} />}
//           {Math.abs(change)}%
//         </span>
//       </div>
//       <p className="text-[13px] text-gray-500 font-medium mb-1">{label}</p>
//       <p className="text-[24px] font-extrabold text-gray-900 tracking-tight">{value}</p>
//       <p className="text-[11.5px] text-gray-400 mt-1">{changeLabel}</p>
//       <div className="mt-3 -mx-1">
//         <ResponsiveContainer width="100%" height={40}>
//           <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
//                 <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} fill={`url(#spark-${label})`} dot={false} />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────
//    ORDERS TABLE – FIXED VERSION
// ───────────────────────────────────────────── */
// const OrdersTable = ({ token, onStatusChange }) => {
//   const [expanded, setExpanded] = useState(null);
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [sortField, setSortField] = useState('date');
//   const [sortDir, setSortDir] = useState('desc');
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(0);
//   const PER_PAGE = 5;

//   useEffect(() => {
//     if (!token) {
//       toast.error("Authentication token missing – please log in again");
//       setLoading(false);
//       return;
//     }

//     const fetchOrders = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.post(
//           `${backendUrl}/api/order/list`,
//           {},
//           { headers: { token } }
//         );

//         if (res.data.success) {
//           const mappedOrders = res.data.orders.map(order => ({
//             id: order._id,
//             payId: order.paymentId || '—',
//             name: `${order.address?.firstName || ''} ${order.address?.lastName || ''}`,
//             phone: order.address?.phone || '—',
//             email: order.address?.email || '—',
//             address: `${order.address?.street || ''}, ${order.address?.city || ''}, ${order.address?.state || ''}, ${order.address?.country || ''}`,
//             pin: order.address?.zipcode || '—',
//             amount: order.finalAmount || order.amount || 0,
//             status: order.status || 'Order Placed',
//             date: new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
//             items: order.items?.map(item => ({
//               title: item.name || 'Unnamed Item',
//               qty: item.quantity?.quantity || item.quantity || 1,
//               price: item.price || 0,
//               subtotal: item.subtotal || (item.price * (item.quantity?.quantity || item.quantity || 1)) || 0,
//             })) || [],
//           }));
//           setOrders(mappedOrders.reverse());
//         } else {
//           toast.error(res.data.message || "Failed to load orders");
//         }
//       } catch (e) {
//         console.error("Orders fetch error:", e);
//         toast.error(e.response?.data?.message || e.message || "Could not load orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [token]);

//   const filtered = useMemo(() => {
//     let data = [...orders];
//     if (search) {
//       data = data.filter(o =>
//         o.name.toLowerCase().includes(search.toLowerCase()) ||
//         o.id.includes(search) ||
//         o.email.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//     if (statusFilter !== 'all') data = data.filter(o => o.status === statusFilter);
//     return data;
//   }, [orders, search, statusFilter, sortField, sortDir]);

//   const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
//   const totalPages = Math.ceil(filtered.length / PER_PAGE);

//   const updateStatus = async (orderId, newStatus) => {
//     if (!token) {
//       toast.error("Authentication required");
//       return;
//     }
//     try {
//       const res = await axios.post(
//         `${backendUrl}/api/order/status`,
//         { orderId, status: newStatus },
//         { headers: { token } }
//       );
//       if (res.data.success) {
//         setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
//         toast.success(`Status updated to ${newStatus}`);
//         onStatusChange?.();
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (e) {
//       toast.error('Update failed');
//     }
//   };

//   const SortIcon = ({ field }) => {
//     if (sortField !== field) return <TbChevronDown size={12} className="text-gray-300" />;
//     return sortDir === 'asc' ? <TbChevronUp size={12} className="text-indigo-500" /> : <TbChevronDown size={12} className="text-indigo-500" />;
//   };

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDir(d => d === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortField(field);
//       setSortDir('asc');
//     }
//   };

//   return (
//     <SectionCard
//       title="Recent Orders"
//       subtitle={`${filtered.length} orders · Page ${page + 1}/${totalPages || 1}`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           <SearchInput value={search} onChange={setSearch} placeholder="Search orders…" />
//           <select
//             value={statusFilter}
//             onChange={e => { setStatusFilter(e.target.value); setPage(0); }}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer"
//           >
//             <option value="all">All Status</option>
//             <option value="pending">Pending</option>
//             <option value="shipped">Shipped</option>
//             <option value="delivered">Delivered</option>
//             <option value="cancelled">Cancelled</option>
//           </select>
//           <Btn variant="success" size="sm"><TbDownload size={14} /> Export</Btn>
//         </div>
//       }
//     >
//       <div className="grid grid-cols-4 gap-3 p-4 bg-gray-50 border-b border-gray-100">
//         {['pending', 'shipped', 'delivered', 'cancelled'].map(s => (
//           <div key={s} className="text-center">
//             <p className="text-[18px] font-extrabold text-gray-900">{orders.filter(o => o.status?.toLowerCase() === s).length}</p>
//             <p className="text-[11px] text-gray-400 capitalize font-medium">{s}</p>
//           </div>
//         ))}
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               <th className="w-10 px-4 py-3" />
//               {[['Order', 'id'], ['Customer', 'name'], ['Amount', 'amount'], ['Status', 'status'], ['Date', 'date']].map(([l, f]) => (
//                 <th
//                   key={f}
//                   className="px-4 py-3 text-left font-semibold text-gray-500 cursor-pointer select-none whitespace-nowrap"
//                   onClick={() => handleSort(f)}
//                 >
//                   <span className="flex items-center gap-1">{l} <SortIcon field={f} /></span>
//                 </th>
//               ))}
//               <th className="px-4 py-3 text-left font-semibold text-gray-500">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan={7} className="text-center py-12 text-gray-400 text-[13px]">Loading orders...</td></tr>
//             ) : paginated.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-12 text-gray-400 text-[13px]">No orders found</td></tr>
//             ) : paginated.map((order, i) => (
//               <React.Fragment key={order.id}>
//                 <tr className={`border-b border-gray-50 hover:bg-indigo-50/30 transition-colors ${expanded === order.id ? 'bg-indigo-50/20' : ''}`}>
//                   <td className="px-4 py-3.5">
//                     <button
//                       onClick={() => setExpanded(expanded === order.id ? null : order.id)}
//                       className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors"
//                     >
//                       <TbChevronDown size={14} className={`text-gray-600 transition-transform ${expanded === order.id ? 'rotate-180' : ''}`} />
//                     </button>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <div>
//                       <span className="font-bold text-indigo-600">{order.id}</span>
//                       <p className="text-[11px] text-gray-400 font-mono mt-0.5">{order.payId}</p>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <div>
//                       <p className="font-semibold text-gray-900">{order.name || '—'}</p>
//                       <p className="text-[11.5px] text-gray-400">{order.email || '—'}</p>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <span className="font-extrabold text-gray-900">₹{order.amount.toLocaleString()}</span>
//                   </td>
//                   <td className="px-4 py-3.5">
//                     <select
//                       value={order.status}
//                       onChange={e => updateStatus(order.id, e.target.value)}
//                       className={`px-2.5 py-1 rounded-full border text-[11.5px] font-semibold outline-none cursor-pointer ${STATUS_CONFIG[order.status?.toLowerCase()]?.cls || 'bg-gray-50 text-gray-700'}`}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="shipped">Shipped</option>
//                       <option value="delivered">Delivered</option>
//                       <option value="cancelled">Cancelled</option>
//                     </select>
//                   </td>
//                   <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{order.date}</td>
//                   <td className="px-4 py-3.5">
//                     <div className="flex items-center gap-1.5">
//                       <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors" title="View">
//                         <TbEye size={13} className="text-gray-600" />
//                       </button>
//                       <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-amber-100 flex items-center justify-center transition-colors" title="Edit">
//                         <TbEdit size={13} className="text-gray-600" />
//                       </button>
//                       <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors" title="Delete">
//                         <TbTrash size={13} className="text-gray-600" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>

//                 {expanded === order.id && (
//                   <tr className="bg-indigo-50/20">
//                     <td colSpan={7} className="px-10 py-4">
//                       <div className="bg-white border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
//                         <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50">
//                           <p className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Order Items</p>
//                           <div className="flex gap-3 text-[12px] text-gray-500">
//                             <span>📍 {order.address || '—'} — {order.pin || '—'}</span>
//                             <span>📞 {order.phone || '—'}</span>
//                           </div>
//                         </div>
//                         <table className="w-full text-[12.5px]">
//                           <thead className="bg-gray-50">
//                             <tr>
//                               {['Product', 'Quantity', 'Unit Price', 'Subtotal'].map(h => (
//                                 <th key={h} className="px-4 py-2.5 text-left font-semibold text-gray-500">{h}</th>
//                               ))}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {order.items.map((item, j) => (
//                               <tr key={j} className="border-t border-gray-50">
//                                 <td className="px-4 py-3 font-medium text-gray-800">{item.title}</td>
//                                 <td className="px-4 py-3 text-gray-600">{item.qty}</td>
//                                 <td className="px-4 py-3 text-gray-600">₹{item.price.toLocaleString()}</td>
//                                 <td className="px-4 py-3 font-bold text-gray-900">₹{item.subtotal.toLocaleString()}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                           <tfoot className="border-t-2 border-gray-100 bg-gray-50">
//                             <tr>
//                               <td colSpan={3} className="px-4 py-2.5 text-right font-bold text-gray-700">Total:</td>
//                               <td className="px-4 py-2.5 font-extrabold text-indigo-700">₹{order.amount.toLocaleString()}</td>
//                             </tr>
//                           </tfoot>
//                         </table>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
//         <p className="text-[12.5px] text-gray-500">
//           Showing {Math.min(page * PER_PAGE + 1, filtered.length)}–{Math.min((page + 1) * PER_PAGE, filtered.length)} of {filtered.length}
//         </p>
//         <div className="flex items-center gap-1.5">
//           <button
//             onClick={() => setPage(p => Math.max(0, p - 1))}
//             disabled={page === 0}
//             className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors"
//           >
//             Prev
//           </button>
//           {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i).map(i => (
//             <button
//               key={i}
//               onClick={() => setPage(i)}
//               className={`w-8 h-8 rounded-lg text-[12.5px] font-bold transition-colors ${page === i ? 'bg-indigo-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
//                 }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
//             disabled={page >= totalPages - 1}
//             className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </SectionCard>
//   );
// };

// /* ==================== PRODUCTS TABLE - FIXED & DYNAMIC ==================== */
// const ProductsTable = ({ token }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [catFilter, setCatFilter] = useState('all');
//   const [page, setPage] = useState(0);
//   const PER_PAGE = 8;

//   useEffect(() => {
//     if (!token) {
//       toast.error("Token missing - cannot load products");
//       setLoading(false);
//       return;
//     }

//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(`${backendUrl}/api/product/list`, { headers: { token } });
//         if (res.data.success) {
//           const formatted = res.data.products.map(p => ({
//             id: p._id,
//             name: p.name || 'Unnamed Product',
//             category: p.category || 'Others',
//             price: p.price || 0,
//             mrp: p.mrp || p.price * 1.5 || 0,
//             sales: p.salesCount || 0,
//             stock: p.stock || 0,
//             rating: p.rating || 0,
//             img: p.image?.[0] || p.images?.[0] || 'https://via.placeholder.com/80',
//           }));
//           setProducts(formatted);
//         } else {
//           toast.error(res.data.message || "Failed to load products");
//         }
//       } catch (e) {
//         console.error(e);
//         toast.error("Could not fetch products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [token]);

//   const filtered = useMemo(() => {
//     let data = [...products];
//     if (search) data = data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
//     if (catFilter !== 'all') data = data.filter(p => p.category === catFilter);
//     return data;
//   }, [products, search, catFilter]);

//   const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

//   if (loading) return <div className="text-center py-20 text-gray-500">Loading products...</div>;

//   return (
//     <SectionCard
//       title="Products"
//       subtitle={`${filtered.length} products · Page ${page + 1}/${Math.ceil(filtered.length / PER_PAGE) || 1}`}
//       toolbar={
//         <div className="flex items-center gap-3">
//           <SearchInput value={search} onChange={setSearch} placeholder="Search products..." />
//           <select value={catFilter} onChange={e => { setCatFilter(e.target.value); setPage(0); }}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px]">
//             <option value="all">All Categories</option>
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Others">Others</option>
//           </select>
//           <Btn variant="success"><TbDownload size={14} /> Export</Btn>
//           <Btn variant="primary"><TbPlus size={14} /> Add Product</Btn>
//         </div>
//       }
//     >
//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               <th className="px-6 py-4 text-left">Product</th>
//               <th className="px-4 py-4 text-left">Category</th>
//               <th className="px-4 py-4 text-left">Price</th>
//               <th className="px-4 py-4 text-left">Sales</th>
//               <th className="px-4 py-4 text-left">Stock</th>
//               <th className="px-4 py-4 text-left">Rating</th>
//               <th className="px-4 py-4 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginated.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-20 text-gray-500">No products found</td></tr>
//             ) : paginated.map(p => (
//               <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50">
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-xl overflow-hidden border bg-gray-50">
//                       <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{p.name}</p>
//                       <p className="text-xs text-gray-400">ID: {p.id.slice(0, 8)}...</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-4 py-4">
//                   <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">{p.category}</span>
//                 </td>
//                 <td className="px-4 py-4">
//                   <div>
//                     <span className="font-bold">₹{p.price}</span>
//                     {p.mrp > p.price && <span className="text-xs text-gray-400 line-through ml-1">₹{p.mrp}</span>}
//                   </div>
//                 </td>
//                 <td className="px-4 py-4 font-medium">{p.sales}</td>
//                 <td className="px-4 py-4">
//                   {p.stock === 0 ? <span className="text-red-600 font-bold">Out of Stock</span> : p.stock}
//                 </td>
//                 <td className="px-4 py-4">{p.rating} ★</td>
//                 <td className="px-4 py-4">
//                   <div className="flex gap-3 text-gray-600">
//                     <TbEye className="cursor-pointer hover:text-indigo-600" />
//                     <TbEdit className="cursor-pointer hover:text-indigo-600" />
//                     <TbTrash className="cursor-pointer hover:text-red-600" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </SectionCard>
//   );
// };

// /* ═══════════════════════════════════════════
//    USERS TABLE
// ═══════════════════════════════════════════ */
// const UsersTable = () => {
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [users, setUsers] = useState(USERS_DATA);

//   const filtered = useMemo(() => {
//     let data = [...users];
//     if (search) data = data.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
//     if (statusFilter !== 'all') data = data.filter(u => u.status === statusFilter);
//     return data;
//   }, [users, search, statusFilter]);

//   const toggleStatus = (id) => setUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u));

//   const initials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
//   const colors = ['bg-indigo-100 text-indigo-700', 'bg-pink-100 text-pink-700', 'bg-amber-100 text-amber-700', 'bg-emerald-100 text-emerald-700', 'bg-violet-100 text-violet-700'];

//   return (
//     <SectionCard
//       title="Users"
//       subtitle={`${filtered.length} users`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           <SearchInput value={search} onChange={setSearch} placeholder="Search users…" />
//           <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//             <option value="all">All</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <Btn variant="success" size="sm"><TbDownload size={14} /> Export</Btn>
//         </div>
//       }
//     >
//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               {['Customer', 'Contact', 'Orders', 'Total Spent', 'Joined', 'Status', 'Actions'].map(h => (
//                 <th key={h} className="px-5 py-3.5 text-left font-semibold text-gray-500 whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-12 text-gray-400">No users found</td></tr>
//             ) : filtered.map((u, i) => (
//               <tr key={u.id} className="border-b border-gray-50 hover:bg-indigo-50/20 transition-colors">
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${colors[i % colors.length]}`}>{initials(u.name)}</div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{u.name}</p>
//                       <p className="text-[11.5px] text-gray-400">{u.id} · {u.city}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-5 py-4">
//                   <p className="text-gray-700">{u.email}</p>
//                   <p className="text-[11.5px] text-gray-400">{u.phone}</p>
//                 </td>
//                 <td className="px-5 py-4">
//                   <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-[12px] font-bold">{u.orders} orders</span>
//                 </td>
//                 <td className="px-5 py-4">
//                   <span className="font-extrabold text-gray-900">₹{u.spent.toLocaleString()}</span>
//                 </td>
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{u.joined}</td>
//                 <td className="px-5 py-4"><StatusBadge status={u.status} /></td>
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-1.5">
//                     <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors"><TbEye size={13} className="text-gray-600" /></button>
//                     <button onClick={() => toggleStatus(u.id)} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${u.status === 'active' ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'}`}>
//                       {u.status === 'active' ? 'Deactivate' : 'Activate'}
//                     </button>
//                     <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors"><TbTrash size={13} className="text-red-500" /></button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </SectionCard>
//   );
// };

// /* ═══════════════════════════════════════════
//    CHARTS
// ═══════════════════════════════════════════ */
// const ChartsSection = () => {
//   const [period, setPeriod] = useState('monthly');
//   const [chartType, setChartType] = useState('area');
//   const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders', 'Users']);
//   const [data, setData] = useState(() => generateMonthlyData());

//   const refreshData = () => setData(generateMonthlyData());
//   const toggleMetric = (m) => setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//   const METRICS = [
//     { key: 'Revenue', color: '#6366f1', label: 'Revenue (₹)' },
//     { key: 'Orders', color: '#10b981', label: 'Orders' },
//     { key: 'Users', color: '#f59e0b', label: 'New Users' },
//   ];

//   return (
//     <div className="space-y-5">
//       <SectionCard
//         title="Performance Analytics"
//         subtitle="Revenue, orders & user growth over time"
//         toolbar={
//           <div className="flex items-center gap-2">
//             {['area', 'line', 'bar'].map(t => (
//               <button key={t} onClick={() => setChartType(t)}
//                 className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                 {t}
//               </button>
//             ))}
//             <button onClick={refreshData} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" title="Refresh data">
//               <TbRefresh size={14} className="text-gray-500" />
//             </button>
//           </div>
//         }
//       >
//         {/* Metric toggles */}
//         <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
//           {METRICS.map(m => (
//             <button key={m.key} onClick={() => toggleMetric(m.key)}
//               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
//               style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
//               <span className="w-2 h-2 rounded-full" style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
//               {m.label}
//             </button>
//           ))}
//         </div>
//         <div className="px-4 pb-5 pt-2">
//           <ResponsiveContainer width="100%" height={320}>
//             {chartType === 'bar' ? (
//               <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />)}
//               </BarChart>
//             ) : chartType === 'line' ? (
//               <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />)}
//               </LineChart>
//             ) : (
//               <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <defs>
//                   {METRICS.map(m => (
//                     <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
//                       <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                     </linearGradient>
//                   ))}
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
//                   <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                 ))}
//               </AreaChart>
//             )}
//           </ResponsiveContainer>
//         </div>
//       </SectionCard>

//       {/* Secondary charts row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {/* Pie */}
//         <SectionCard title="Sales by Category" subtitle="Revenue distribution across categories">
//           <div className="flex items-center justify-center gap-6 p-5">
//             <PieChart width={180} height={180}>
//               <Pie data={PIE_DATA} cx={85} cy={85} innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
//                 {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
//               </Pie>
//               <Tooltip formatter={(v) => `${v}%`} />
//             </PieChart>
//             <div className="space-y-3">
//               {PIE_DATA.map(d => (
//                 <div key={d.name} className="flex items-center gap-3">
//                   <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
//                   <div>
//                     <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
//                     <p className="text-[12px] text-gray-400">{d.value}% of sales</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </SectionCard>

//         {/* Top products bar */}
//         <SectionCard title="Top Products by Sales" subtitle="Best performing items this month">
//           <div className="p-5">
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart layout="vertical" data={PRODUCTS_DATA.slice().sort((a, b) => b.sales - a.sales).slice(0, 5).map(p => ({ name: p.name.slice(0, 22) + '…', sales: p.sales }))} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
//                 <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} axisLine={false} tickLine={false} width={140} />
//                 <Tooltip />
//                 <Bar dataKey="sales" fill="#6366f1" radius={[0, 4, 4, 0]}>
//                   {PRODUCTS_DATA.map((_, i) => <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'][i % 5]} />)}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </SectionCard>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    ACTIVITY FEED
// ═══════════════════════════════════════════ */
// const ActivityFeed = () => {
//   const activities = [
//     { icon: <TbShoppingCart size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'New order #ORD-8821 from Rajesh Verma', time: '2 min ago', type: 'order' },
//     { icon: <TbUsers size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'New user registered: priya@gmail.com', time: '14 min ago', type: 'user' },
//     { icon: <TbPackage size={14} className="text-amber-600" />, bg: 'bg-amber-50', text: 'Product "Woolen Overcoat" — low stock (4 left)', time: '1 hr ago', type: 'alert' },
//     { icon: <TbCircleCheck size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'Order #ORD-8819 delivered successfully', time: '2 hr ago', type: 'delivery' },
//     { icon: <TbAlertTriangle size={14} className="text-red-500" />, bg: 'bg-red-50', text: '"Designer Silk Cushion Cover" is out of stock', time: '3 hr ago', type: 'stock' },
//     { icon: <TbCurrencyRupee size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'Payment received ₹9,800 from Vikram Singh', time: '5 hr ago', type: 'payment' },
//   ];
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
//       <div className="px-5 py-4 border-b border-gray-50">
//         <h2 className="text-[15px] font-bold text-gray-900">Activity Feed</h2>
//         <p className="text-[12px] text-gray-400 mt-0.5">Real-time store events</p>
//       </div>
//       <div className="divide-y divide-gray-50">
//         {activities.map((a, i) => (
//           <div key={i} className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
//             <div className={`w-7 h-7 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>{a.icon}</div>
//             <div className="flex-1 min-w-0">
//               <p className="text-[13px] text-gray-700 font-medium leading-snug">{a.text}</p>
//               <p className="text-[11.5px] text-gray-400 mt-0.5 flex items-center gap-1"><TbClock size={11} /> {a.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="px-5 py-3 border-t border-gray-50">
//         <button className="text-[12.5px] font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">View all activity <TbArrowRight size={13} /></button>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    MAIN DASHBOARD
// ═══════════════════════════════════════════ */
// const Dashboard = ({ token }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [greeting, setGreeting] = useState('Good Morning');
//   const [liveTime, setLiveTime] = useState(new Date());

//   useEffect(() => {
//     const h = new Date().getHours();
//     setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');

//     const timer = setInterval(() => setLiveTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const showToast = (msg, type = 'success') => {
//     toast[type](msg);
//   };

//   const TABS = [
//     { id: 'overview', label: 'Overview', icon: <TbChartBar size={15} /> },
//     { id: 'orders', label: 'Orders', icon: <TbShoppingCart size={15} /> },
//     { id: 'products', label: 'Products', icon: <TbPackage size={15} /> },
//     { id: 'users', label: 'Users', icon: <TbUsers size={15} /> },
//     { id: 'analytics', label: 'Analytics', icon: <TbChartPie size={15} /> },
//   ];

//   const sparkData = Array.from({ length: 12 }, (_, i) => ({ v: Math.floor(Math.random() * 100) + 20 }));

//   const KPI_CARDS = [
//     { icon: <TbCurrencyRupee size={20} className="text-indigo-600" />, label: 'Total Revenue', value: '₹4,82,650', change: 12.4, changeLabel: 'vs last month', color: 'bg-indigo-50' },
//     { icon: <TbShoppingCart size={20} className="text-emerald-600" />, label: 'Total Orders', value: '2,847', change: 8.1, changeLabel: '134 orders today', color: 'bg-emerald-50' },
//     { icon: <TbUsers size={20} className="text-violet-600" />, label: 'Total Users', value: '12,419', change: 5.7, changeLabel: '48 new this week', color: 'bg-violet-50' },
//     { icon: <TbPackage size={20} className="text-amber-600" />, label: 'Total Products', value: '1,284', change: -2.3, changeLabel: '6 out of stock', color: 'bg-amber-50' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f5]">
//       {/* WELCOME BANNER */}
//       <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-6 py-6 mb-6 mt-16">
//         <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <p className="text-indigo-200 text-[13px] font-medium mb-1 flex items-center gap-2">
//               <TbCalendar size={13} /> {liveTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} ·
//               <TbClock size={13} /> {liveTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//             </p>
//             <h1 className="text-[26px] font-extrabold text-white tracking-tight">{greeting}, Admin 👋</h1>
//             <p className="text-indigo-200 text-[14px] mt-1">Here's what's happening in your store today.</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
//               <p className="text-[11px] text-indigo-200 font-medium">Today's Revenue</p>
//               <p className="text-[20px] font-extrabold">₹18,420</p>
//               <p className="text-[11px] text-emerald-300 flex items-center gap-1"><TbTrendingUp size={11} /> +14.2% vs yesterday</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Btn variant="primary" size="sm" className="!bg-white !text-indigo-700 !border-white hover:!bg-indigo-50" onClick={() => showToast('Product panel opening…')}>
//                 <TbPlus size={14} /> Add Product
//               </Btn>
//               <Btn size="sm" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20" onClick={() => setRefreshKey(k => k + 1)}>
//                 <TbRefresh size={14} /> Refresh
//               </Btn>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 pb-10">
//         {/* TABS */}
//         <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm mb-6 w-fit">
//           {TABS.map(t => (
//             <button
//               key={t.id}
//               onClick={() => setActiveTab(t.id)}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${activeTab === t.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
//                 }`}
//             >
//               {t.icon} {t.label}
//             </button>
//           ))}
//         </div>

//         {/* OVERVIEW TAB */}
//         {activeTab === 'overview' && (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//               {KPI_CARDS.map((card, i) => <KPICard key={i} {...card} sparkData={sparkData} />)}
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               <MiniStat icon={<TbTruck size={16} className="text-blue-600" />} label="Shipped" value="184" color="border-blue-100 bg-blue-50/50" trend={6} />
//               <MiniStat icon={<TbCircleCheck size={16} className="text-emerald-600" />} label="Delivered" value="2,291" color="border-emerald-100 bg-emerald-50/50" trend={11} />
//               <MiniStat icon={<TbClock size={16} className="text-amber-600" />} label="Pending" value="248" color="border-amber-100 bg-amber-50/50" trend={-3} />
//               <MiniStat icon={<TbX size={16} className="text-red-500" />} label="Cancelled" value="124" color="border-red-100 bg-red-50/50" trend={-8} />
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
//               <ChartsSection />
//               <ActivityFeed />
//             </div>

//             <OrdersTable
//               token={token}
//               onStatusChange={() => showToast('Order status updated!')}
//             />
//           </div>
//         )}

//         {/* ORDERS TAB */}
//         {activeTab === 'orders' && (
//           <OrdersTable
//             token={token}
//             onStatusChange={() => showToast('Order status updated!')}
//           />
//         )}

//         {/* PRODUCTS TAB */}
//         {activeTab === 'products' && <ProductsTable token={token} />}

//         {/* USERS TAB */}
//         {activeTab === 'users' && <UsersTable />}

//         {/* ANALYTICS TAB */}
//         {activeTab === 'analytics' && <ChartsSection />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import {
//   LineChart, Line, AreaChart, Area, BarChart, Bar,
//   XAxis, YAxis, CartesianGrid, Tooltip,
//   ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import {
//   TbShoppingCart, TbUsers, TbCurrencyRupee, TbPackage,
//   TbTrendingUp, TbTrendingDown, TbPlus, TbDownload,
//   TbEdit, TbEye, TbTrash, TbSearch,
//   TbChevronDown, TbChevronUp, TbRefresh,
//   TbArrowRight, TbCheck, TbX, TbChartBar,
//   TbCalendar, TbStar, TbAlertTriangle, TbCircleCheck,
//   TbClock, TbTruck, TbChartPie, TbFilter,
//   TbSortAscending, TbSortDescending, TbPrinter,
//   TbCopy, TbInfoCircle, TbArrowUp, TbArrowDown,
//   TbBuildingStore, TbTag, TbPhoto, TbBox,
//   TbChevronLeft, TbChevronRight, TbDotsVertical,
//   TbFileExport, TbUpload, TbCategory,
//   TbPercentage, TbStarFilled, TbGridDots,
//   TbList, TbBell, TbSettings, TbLogout
// } from 'react-icons/tb';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../App';

// /* ─────────────────────────────────────────────
//    MOCK DATA
// ───────────────────────────────────────────── */
// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const generateMonthlyData = () => MONTHS.map((m) => ({
//   name: m,
//   Revenue: Math.floor(Math.random() * 80000) + 20000,
//   Orders: Math.floor(Math.random() * 500) + 100,
//   Users: Math.floor(Math.random() * 300) + 50,
// }));

// const PRODUCTS_DATA = [
//   { id: 'PRD-001', name: 'Classic Oxford Cotton Shirt', category: 'Men', sub: 'Topwear', brand: 'StudioFit', mrp: 2499, price: 1799, sales: 842, stock: 45, rating: 4.5, img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=80&h=80&fit=crop' },
//   { id: 'PRD-002', name: 'Embroidered Rayon Kurta Pant Set', category: 'Women', sub: 'Topwear', brand: 'EthnicHues', mrp: 3299, price: 2199, sales: 627, stock: 12, rating: 4.7, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&h=80&fit=crop' },
//   { id: 'PRD-003', name: 'Premium Slim Fit Chinos', category: 'Men', sub: 'Bottomwear', brand: 'UrbanThread', mrp: 1899, price: 1299, sales: 1203, stock: 88, rating: 4.3, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=80&h=80&fit=crop' },
//   { id: 'PRD-004', name: 'Woolen Overcoat Winter Edition', category: 'Men', sub: 'Winterwear', brand: 'WarmWear', mrp: 7999, price: 5499, sales: 381, stock: 4, rating: 4.8, img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=80&h=80&fit=crop' },
//   { id: 'PRD-005', name: 'Floral Maxi Dress Summer', category: 'Women', sub: 'Topwear', brand: 'BloomWear', mrp: 2599, price: 1699, sales: 956, stock: 31, rating: 4.2, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=80&h=80&fit=crop' },
//   { id: 'PRD-006', name: 'Designer Silk Cushion Cover', category: 'Others', sub: 'Cushion Cover', brand: 'HomeDecor', mrp: 899, price: 599, sales: 2140, stock: 0, rating: 4.6, img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=80&h=80&fit=crop' },
// ];

// const USERS_DATA = [
//   { id: 'USR-001', name: 'Rajesh Verma', email: 'rajesh@gmail.com', phone: '9837847394', orders: 14, spent: 42800, joined: '12 Mar 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-002', name: 'Priya Sharma', email: 'priya@gmail.com', phone: '9876543210', orders: 8, spent: 18600, joined: '05 Jun 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-003', name: 'Amit Kumar', email: 'amit@gmail.com', phone: '9123456789', orders: 22, spent: 78200, joined: '28 Jan 2024', status: 'active', city: 'Pune' },
//   { id: 'USR-004', name: 'Sunita Patel', email: 'sunita@gmail.com', phone: '9988776655', orders: 3, spent: 4200, joined: '18 Oct 2024', status: 'inactive', city: 'Ahmedabad' },
//   { id: 'USR-005', name: 'Vikram Singh', email: 'vikram@gmail.com', phone: '9765432100', orders: 31, spent: 154000, joined: '02 Feb 2023', status: 'active', city: 'Bengaluru' },
// ];

// const PIE_DATA = [
//   { name: 'Men', value: 38, color: '#6366f1' },
//   { name: 'Women', value: 45, color: '#ec4899' },
//   { name: 'Others', value: 17, color: '#f59e0b' },
// ];

// const ORDER_STATUS_FLOW = ['pending', 'shipped', 'delivered'];

// const STATUS_CONFIG = {
//   pending: { label: 'Pending', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500', icon: <TbClock size={11} /> },
//   shipped: { label: 'Shipped', cls: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', icon: <TbTruck size={11} /> },
//   delivered: { label: 'Delivered', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: <TbCircleCheck size={11} /> },
//   cancelled: { label: 'Cancelled', cls: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500', icon: <TbX size={11} /> },
//   active: { label: 'Active', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: null },
//   inactive: { label: 'Inactive', cls: 'bg-gray-50 text-gray-500 border-gray-200', dot: 'bg-gray-400', icon: null },
// };

// /* ─────────────────────────────────────────────
//    UTILITY COMPONENTS
// ───────────────────────────────────────────── */
// const StatusBadge = ({ status }) => {
//   const s = (status || '').toLowerCase();
//   const cfg = STATUS_CONFIG[s] || STATUS_CONFIG.pending;
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11.5px] font-semibold ${cfg.cls}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// };

// const MiniStat = ({ icon, label, value, trend, color }) => (
//   <div className={`flex items-center gap-3 p-3 rounded-xl border ${color}`}>
//     <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm flex-shrink-0">{icon}</div>
//     <div>
//       <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
//       <p className="text-[17px] font-extrabold text-gray-900 leading-none mt-0.5">{value}</p>
//     </div>
//     {trend !== undefined && (
//       <div className={`ml-auto flex items-center gap-0.5 text-[11px] font-bold ${trend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
//         {trend >= 0 ? <TbTrendingUp size={13} /> : <TbTrendingDown size={13} />}
//         {Math.abs(trend)}%
//       </div>
//     )}
//   </div>
// );

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
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       title={title}
//       className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const IconBtn = ({ icon, onClick, title, color = 'gray', className = '' }) => {
//   const colors = {
//     gray: 'bg-gray-100 hover:bg-gray-200 text-gray-600',
//     indigo: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600',
//     red: 'bg-red-50 hover:bg-red-100 text-red-500',
//     amber: 'bg-amber-50 hover:bg-amber-100 text-amber-600',
//     green: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600',
//   };
//   return (
//     <button
//       onClick={onClick}
//       title={title}
//       className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${colors[color]} ${className}`}
//     >
//       {icon}
//     </button>
//   );
// };

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

// const ChartTooltip = ({ active, payload, label }) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
//       <p className="font-bold text-gray-900 mb-2">{label}</p>
//       {payload.map((p, i) => (
//         <div key={i} className="flex items-center gap-2 mb-1">
//           <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
//           <span className="text-gray-500">{p.name}:</span>
//           <span className="font-bold text-gray-900">{p.name === 'Revenue' ? `₹${p.value.toLocaleString()}` : p.value.toLocaleString()}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// const KPICard = ({ icon, label, value, change, changeLabel, color, sparkData }) => {
//   const isPositive = change >= 0;
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
//         <span className={`inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
//           {isPositive ? <TbTrendingUp size={12} /> : <TbTrendingDown size={12} />}
//           {Math.abs(change)}%
//         </span>
//       </div>
//       <p className="text-[13px] text-gray-500 font-medium mb-1">{label}</p>
//       <p className="text-[24px] font-extrabold text-gray-900 tracking-tight">{value}</p>
//       <p className="text-[11.5px] text-gray-400 mt-1">{changeLabel}</p>
//       <div className="mt-3 -mx-1">
//         <ResponsiveContainer width="100%" height={40}>
//           <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
//                 <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} fill={`url(#spark-${label})`} dot={false} />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────
//    CONFIRM DIALOG
// ───────────────────────────────────────────── */
// const ConfirmDialog = ({ open, title, message, onConfirm, onCancel, danger = false }) => {
//   if (!open) return null;
//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-[fadeIn_0.15s_ease]">
//         <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${danger ? 'bg-red-50' : 'bg-amber-50'}`}>
//           <TbAlertTriangle size={24} className={danger ? 'text-red-500' : 'text-amber-500'} />
//         </div>
//         <h3 className="text-[16px] font-bold text-center text-gray-900 mb-1">{title}</h3>
//         <p className="text-[13px] text-gray-500 text-center mb-6">{message}</p>
//         <div className="flex gap-3">
//           <button onClick={onCancel} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
//           <button onClick={onConfirm} className={`flex-1 px-4 py-2.5 rounded-xl text-[13px] font-semibold text-white transition-colors ${danger ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}>Confirm</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────
//    ORDER DETAIL MODAL
// ───────────────────────────────────────────── */
// const OrderDetailModal = ({ order, onClose, onStatusChange }) => {
//   if (!order) return null;
//   const statusSteps = ['pending', 'shipped', 'delivered'];
//   const currentStep = statusSteps.indexOf((order.status || '').toLowerCase());
//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white">
//           <div>
//             <h2 className="text-[16px] font-bold text-gray-900">Order Details</h2>
//             <p className="text-[12px] text-indigo-600 font-mono font-bold">{order.id}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <StatusBadge status={order.status} />
//             <button onClick={onClose} className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
//               <TbX size={16} className="text-gray-600" />
//             </button>
//           </div>
//         </div>

//         <div className="p-6 space-y-6">
//           {/* Status Timeline */}
//           {(order.status || '').toLowerCase() !== 'cancelled' && (
//             <div className="bg-gray-50 rounded-xl p-4">
//               <p className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-3">Order Progress</p>
//               <div className="flex items-center justify-between relative">
//                 <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0" />
//                 <div
//                   className="absolute top-4 left-0 h-0.5 bg-indigo-500 z-0 transition-all duration-500"
//                   style={{ width: currentStep >= 2 ? '100%' : currentStep === 1 ? '50%' : '0%' }}
//                 />
//                 {statusSteps.map((step, i) => (
//                   <div key={step} className="flex flex-col items-center gap-1.5 z-10 flex-1">
//                     <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${i <= currentStep ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
//                       {i < currentStep ? <TbCheck size={14} /> : i === 0 ? <TbClock size={13} /> : i === 1 ? <TbTruck size={13} /> : <TbCircleCheck size={13} />}
//                     </div>
//                     <p className={`text-[11px] font-semibold capitalize ${i <= currentStep ? 'text-indigo-700' : 'text-gray-400'}`}>{step}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Customer Info */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-gray-50 rounded-xl p-4">
//               <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2">Customer</p>
//               <p className="font-bold text-gray-900">{order.name || '—'}</p>
//               <p className="text-[12.5px] text-gray-500">{order.email || '—'}</p>
//               <p className="text-[12.5px] text-gray-500">{order.phone || '—'}</p>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-4">
//               <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2">Delivery Address</p>
//               <p className="text-[12.5px] text-gray-700 leading-relaxed">{order.address || '—'}</p>
//               <p className="text-[12.5px] text-gray-500">PIN: {order.pin || '—'}</p>
//             </div>
//           </div>

//           {/* Items */}
//           <div>
//             <p className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-2">Order Items</p>
//             <div className="rounded-xl border border-gray-100 overflow-hidden">
//               <table className="w-full text-[13px]">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     {['Product', 'Qty', 'Unit Price', 'Subtotal'].map(h => (
//                       <th key={h} className="px-4 py-2.5 text-left text-[11.5px] font-semibold text-gray-500">{h}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {(order.items || []).map((item, j) => (
//                     <tr key={j} className="border-t border-gray-50">
//                       <td className="px-4 py-3 font-medium text-gray-800">{item.title}</td>
//                       <td className="px-4 py-3 text-gray-500">×{item.qty}</td>
//                       <td className="px-4 py-3 text-gray-600">₹{(item.price || 0).toLocaleString()}</td>
//                       <td className="px-4 py-3 font-bold text-gray-900">₹{(item.subtotal || 0).toLocaleString()}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//                 <tfoot className="border-t-2 border-gray-100 bg-gray-50">
//                   <tr>
//                     <td colSpan={3} className="px-4 py-3 text-right font-bold text-gray-700">Total Amount:</td>
//                     <td className="px-4 py-3 font-extrabold text-indigo-700 text-[15px]">₹{(order.amount || 0).toLocaleString()}</td>
//                   </tr>
//                 </tfoot>
//               </table>
//             </div>
//           </div>

//           {/* Quick Status Update */}
//           <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
//             <p className="text-[13px] font-semibold text-gray-600">Update Status:</p>
//             <div className="flex gap-2">
//               {['pending', 'shipped', 'delivered', 'cancelled'].map(s => (
//                 <button
//                   key={s}
//                   onClick={() => { onStatusChange(order.id, s); onClose(); }}
//                   className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all ${(order.status || '').toLowerCase() === s ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────
//    ORDERS TABLE — ENHANCED
// ───────────────────────────────────────────── */
// const OrdersTable = ({ token, onStatusChange }) => {
//   const [expanded, setExpanded] = useState(null);
//   const [viewOrder, setViewOrder] = useState(null);
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [sortField, setSortField] = useState('date');
//   const [sortDir, setSortDir] = useState('desc');
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(0);
//   const [selectedIds, setSelectedIds] = useState(new Set());
//   const [bulkAction, setBulkAction] = useState('');
//   const [confirmDialog, setConfirmDialog] = useState(null);
//   const [dateFilter, setDateFilter] = useState('all');
//   const PER_PAGE = 8;

//   useEffect(() => {
//     if (!token) {
//       toast.error("Authentication token missing – please log in again");
//       setLoading(false);
//       return;
//     }
//     fetchOrders();
//   }, [token]);

//   const fetchOrders = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post(`${backendUrl}/api/order/list`, {}, { headers: { token } });
//       if (res.data.success) {
//         const mapped = (res.data.orders || []).map(order => ({
//           id: order._id,
//           payId: order.paymentId || '—',
//           name: `${order.address?.firstName || ''} ${order.address?.lastName || ''}`.trim() || '—',
//           phone: order.address?.phone || '—',
//           email: order.address?.email || '—',
//           address: [order.address?.street, order.address?.city, order.address?.state, order.address?.country].filter(Boolean).join(', '),
//           pin: order.address?.zipcode || '—',
//           amount: order.finalAmount || order.amount || 0,
//           status: (order.status || 'pending').toLowerCase(),
//           date: new Date(order.date),
//           dateLabel: new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
//           items: (order.items || []).map(item => ({
//             title: item.name || 'Unnamed Item',
//             qty: item.quantity?.quantity || item.quantity || 1,
//             price: item.price || 0,
//             subtotal: item.subtotal || (item.price * (item.quantity?.quantity || item.quantity || 1)) || 0,
//           })),
//           paymentMethod: order.paymentMethod || '—',
//         }));
//         setOrders(mapped.sort((a, b) => b.date - a.date));
//       } else {
//         toast.error(res.data.message || "Failed to load orders");
//       }
//     } catch (e) {
//       toast.error(e.response?.data?.message || e.message || "Could not load orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (orderId, newStatus) => {
//     if (!token) return toast.error("Authentication required");
//     try {
//       const res = await axios.post(`${backendUrl}/api/order/status`, { orderId, status: newStatus }, { headers: { token } });
//       if (res.data.success) {
//         setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus.toLowerCase() } : o));
//         toast.success(`Status updated to ${newStatus}`);
//         onStatusChange?.();
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch { toast.error('Update failed'); }
//   };

//   const handleBulkAction = () => {
//     if (!bulkAction || selectedIds.size === 0) return;
//     if (bulkAction === 'delete') {
//       setConfirmDialog({
//         title: 'Delete Orders',
//         message: `Delete ${selectedIds.size} selected order(s)? This cannot be undone.`,
//         danger: true,
//         onConfirm: () => {
//           setOrders(prev => prev.filter(o => !selectedIds.has(o.id)));
//           setSelectedIds(new Set());
//           setBulkAction('');
//           setConfirmDialog(null);
//           toast.success(`${selectedIds.size} order(s) deleted`);
//         },
//       });
//     } else {
//       selectedIds.forEach(id => updateStatus(id, bulkAction));
//       setSelectedIds(new Set());
//       setBulkAction('');
//     }
//   };

//   const toggleSelect = (id) => {
//     setSelectedIds(prev => {
//       const next = new Set(prev);
//       next.has(id) ? next.delete(id) : next.add(id);
//       return next;
//     });
//   };

//   const toggleSelectAll = () => {
//     if (selectedIds.size === paginated.length) setSelectedIds(new Set());
//     else setSelectedIds(new Set(paginated.map(o => o.id)));
//   };

//   const handleSort = (field) => {
//     setSortField(f => { if (f === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc'); return field; });
//     if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
//   };

//   const exportCSV = () => {
//     const rows = [['ID', 'Customer', 'Email', 'Amount', 'Status', 'Date']];
//     filtered.forEach(o => rows.push([o.id, o.name, o.email, o.amount, o.status, o.dateLabel]));
//     const csv = rows.map(r => r.join(',')).join('\n');
//     const blob = new Blob([csv], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a'); a.href = url; a.download = 'orders.csv'; a.click();
//     URL.revokeObjectURL(url);
//     toast.success('Orders exported!');
//   };

//   const filtered = useMemo(() => {
//     let data = [...orders];
//     if (search) data = data.filter(o =>
//       o.name.toLowerCase().includes(search.toLowerCase()) ||
//       o.id.toLowerCase().includes(search.toLowerCase()) ||
//       o.email.toLowerCase().includes(search.toLowerCase())
//     );
//     if (statusFilter !== 'all') data = data.filter(o => o.status === statusFilter);
//     if (dateFilter !== 'all') {
//       const now = new Date();
//       const cutoff = dateFilter === 'today' ? new Date(now.setHours(0, 0, 0, 0))
//         : dateFilter === 'week' ? new Date(now.setDate(now.getDate() - 7))
//           : new Date(now.setMonth(now.getMonth() - 1));
//       data = data.filter(o => o.date >= cutoff);
//     }
//     data.sort((a, b) => {
//       const av = a[sortField], bv = b[sortField];
//       if (av < bv) return sortDir === 'asc' ? -1 : 1;
//       if (av > bv) return sortDir === 'asc' ? 1 : -1;
//       return 0;
//     });
//     return data;
//   }, [orders, search, statusFilter, dateFilter, sortField, sortDir]);

//   const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

//   const SortIcon = ({ field }) => {
//     if (sortField !== field) return <TbChevronDown size={12} className="text-gray-300" />;
//     return sortDir === 'asc' ? <TbArrowUp size={12} className="text-indigo-500" /> : <TbArrowDown size={12} className="text-indigo-500" />;
//   };

//   const orderStats = useMemo(() => {
//     const counts = { pending: 0, shipped: 0, delivered: 0, cancelled: 0 };
//     orders.forEach(o => { if (counts[o.status] !== undefined) counts[o.status]++; });
//     return counts;
//   }, [orders]);

//   const totalRevenue = useMemo(() => orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.amount, 0), [orders]);

//   return (
//     <>
//       <ConfirmDialog {...(confirmDialog || {})} open={!!confirmDialog} onCancel={() => setConfirmDialog(null)} />
//       {viewOrder && <OrderDetailModal order={viewOrder} onClose={() => setViewOrder(null)} onStatusChange={updateStatus} />}

//       <SectionCard
//         title="Orders Management"
//         subtitle={`${filtered.length} orders found`}
//         toolbar={
//           <div className="flex items-center gap-2 flex-wrap">
//             <SearchInput value={search} onChange={v => { setSearch(v); setPage(0); }} placeholder="Search orders…" className="w-52" />
//             <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(0); }}
//               className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[12.5px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//               <option value="all">All Status</option>
//               <option value="pending">Pending</option>
//               <option value="shipped">Shipped</option>
//               <option value="delivered">Delivered</option>
//               <option value="cancelled">Cancelled</option>
//             </select>
//             <select value={dateFilter} onChange={e => { setDateFilter(e.target.value); setPage(0); }}
//               className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[12.5px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//               <option value="all">All Time</option>
//               <option value="today">Today</option>
//               <option value="week">This Week</option>
//               <option value="month">This Month</option>
//             </select>
//             <Btn variant="ghost" size="sm" onClick={fetchOrders}><TbRefresh size={14} /> Refresh</Btn>
//             <Btn variant="success" size="sm" onClick={exportCSV}><TbFileExport size={14} /> Export CSV</Btn>
//           </div>
//         }
//       >
//         {/* Stats Bar */}
//         <div className="grid grid-cols-5 gap-0 border-b border-gray-100">
//           {[
//             { label: 'Total Revenue', value: `₹${totalRevenue.toLocaleString()}`, color: 'text-indigo-700', bg: 'bg-indigo-50/40' },
//             { label: 'Pending', value: orderStats.pending, color: 'text-amber-700', bg: 'bg-amber-50/40' },
//             { label: 'Shipped', value: orderStats.shipped, color: 'text-blue-700', bg: 'bg-blue-50/40' },
//             { label: 'Delivered', value: orderStats.delivered, color: 'text-emerald-700', bg: 'bg-emerald-50/40' },
//             { label: 'Cancelled', value: orderStats.cancelled, color: 'text-red-600', bg: 'bg-red-50/40' },
//           ].map(s => (
//             <div key={s.label} className={`text-center py-3 px-4 ${s.bg} border-r border-gray-100 last:border-r-0`}>
//               <p className={`text-[17px] font-extrabold ${s.color}`}>{s.value}</p>
//               <p className="text-[11px] text-gray-500 font-medium mt-0.5">{s.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bulk Actions Bar */}
//         {selectedIds.size > 0 && (
//           <div className="flex items-center gap-3 px-5 py-3 bg-indigo-50 border-b border-indigo-100">
//             <span className="text-[13px] font-bold text-indigo-700">{selectedIds.size} selected</span>
//             <div className="flex items-center gap-2 ml-auto">
//               <select value={bulkAction} onChange={e => setBulkAction(e.target.value)}
//                 className="px-3 py-1.5 rounded-lg border border-indigo-200 bg-white text-[12.5px] text-gray-700 outline-none">
//                 <option value="">Bulk Action</option>
//                 <option value="shipped">Mark Shipped</option>
//                 <option value="delivered">Mark Delivered</option>
//                 <option value="cancelled">Mark Cancelled</option>
//                 <option value="delete">Delete</option>
//               </select>
//               <Btn variant="primary" size="xs" onClick={handleBulkAction} disabled={!bulkAction}>Apply</Btn>
//               <Btn variant="ghost" size="xs" onClick={() => setSelectedIds(new Set())}><TbX size={12} /> Clear</Btn>
//             </div>
//           </div>
//         )}

//         <div className="overflow-x-auto">
//           <table className="w-full text-[13px]">
//             <thead>
//               <tr className="border-b border-gray-100 bg-gray-50/50">
//                 <th className="px-4 py-3 w-10">
//                   <input type="checkbox" checked={paginated.length > 0 && selectedIds.size === paginated.length}
//                     onChange={toggleSelectAll} className="rounded border-gray-300 text-indigo-600 cursor-pointer" />
//                 </th>
//                 <th className="w-8" />
//                 {[['Order ID', 'id'], ['Customer', 'name'], ['Amount', 'amount'], ['Status', 'status'], ['Date', 'date'], ['Payment', null]].map(([l, f]) => (
//                   <th key={l} onClick={f ? () => handleSort(f) : undefined}
//                     className={`px-4 py-3 text-left font-semibold text-gray-500 whitespace-nowrap ${f ? 'cursor-pointer select-none hover:text-gray-700' : ''}`}>
//                     <span className="flex items-center gap-1">{l} {f && <SortIcon field={f} />}</span>
//                   </th>
//                 ))}
//                 <th className="px-4 py-3 text-left font-semibold text-gray-500">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr><td colSpan={9} className="text-center py-16">
//                   <div className="flex flex-col items-center gap-2 text-gray-400">
//                     <div className="w-8 h-8 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
//                     <p className="text-[13px]">Loading orders…</p>
//                   </div>
//                 </td></tr>
//               ) : paginated.length === 0 ? (
//                 <tr><td colSpan={9} className="text-center py-16">
//                   <div className="flex flex-col items-center gap-2 text-gray-400">
//                     <TbShoppingCart size={32} className="opacity-30" />
//                     <p className="text-[14px] font-medium">No orders found</p>
//                     <p className="text-[12px]">Try adjusting your filters</p>
//                   </div>
//                 </td></tr>
//               ) : paginated.map(order => (
//                 <React.Fragment key={order.id}>
//                   <tr className={`border-b border-gray-50 transition-colors ${selectedIds.has(order.id) ? 'bg-indigo-50/40' : 'hover:bg-gray-50/70'} ${expanded === order.id ? 'bg-indigo-50/20' : ''}`}>
//                     <td className="px-4 py-3.5">
//                       <input type="checkbox" checked={selectedIds.has(order.id)} onChange={() => toggleSelect(order.id)}
//                         className="rounded border-gray-300 text-indigo-600 cursor-pointer" />
//                     </td>
//                     <td className="pr-2 py-3.5">
//                       <button onClick={() => setExpanded(expanded === order.id ? null : order.id)}
//                         className="w-6 h-6 rounded-md bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-colors">
//                         <TbChevronDown size={13} className={`text-gray-500 transition-transform ${expanded === order.id ? 'rotate-180' : ''}`} />
//                       </button>
//                     </td>
//                     <td className="px-4 py-3.5">
//                       <span className="font-bold text-indigo-600 font-mono text-[12px]">{order.id.slice(0, 10)}…</span>
//                     </td>
//                     <td className="px-4 py-3.5">
//                       <div>
//                         <p className="font-semibold text-gray-900">{order.name}</p>
//                         <p className="text-[11.5px] text-gray-400">{order.email}</p>
//                       </div>
//                     </td>
//                     <td className="px-4 py-3.5">
//                       <span className="font-extrabold text-gray-900">₹{(order.amount || 0).toLocaleString()}</span>
//                     </td>
//                     <td className="px-4 py-3.5">
//                       <select value={order.status} onChange={e => updateStatus(order.id, e.target.value)}
//                         className={`px-2.5 py-1 rounded-full border text-[11.5px] font-semibold outline-none cursor-pointer focus:ring-2 focus:ring-indigo-100 ${STATUS_CONFIG[order.status]?.cls || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
//                         <option value="pending">Pending</option>
//                         <option value="shipped">Shipped</option>
//                         <option value="delivered">Delivered</option>
//                         <option value="cancelled">Cancelled</option>
//                       </select>
//                     </td>
//                     <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap text-[12.5px]">{order.dateLabel}</td>
//                     <td className="px-4 py-3.5">
//                       <span className="text-[12px] text-gray-500 capitalize">{order.paymentMethod}</span>
//                     </td>
//                     <td className="px-4 py-3.5">
//                       <div className="flex items-center gap-1">
//                         <IconBtn icon={<TbEye size={13} />} onClick={() => setViewOrder(order)} title="View Details" color="indigo" />
//                         <IconBtn icon={<TbPrinter size={13} />} onClick={() => toast.info('Print functionality')} title="Print Invoice" color="gray" />
//                         <IconBtn icon={<TbTrash size={13} />} onClick={() => setConfirmDialog({
//                           title: 'Delete Order',
//                           message: `Delete order ${order.id.slice(0, 10)}…? This cannot be undone.`,
//                           danger: true,
//                           onConfirm: () => {
//                             setOrders(p => p.filter(o => o.id !== order.id));
//                             setConfirmDialog(null);
//                             toast.success('Order deleted');
//                           }
//                         })} title="Delete" color="red" />
//                       </div>
//                     </td>
//                   </tr>

//                   {expanded === order.id && (
//                     <tr className="bg-gradient-to-r from-indigo-50/30 to-white">
//                       <td colSpan={9} className="px-8 py-4">
//                         <div className="bg-white border border-indigo-100 rounded-xl shadow-sm overflow-hidden">
//                           <div className="flex items-center justify-between px-4 py-2.5 bg-indigo-50/50 border-b border-indigo-100">
//                             <p className="text-[12px] font-bold text-indigo-700 uppercase tracking-wide">Order Items · {order.items.length} item(s)</p>
//                             <div className="flex gap-4 text-[12px] text-gray-500">
//                               <span className="flex items-center gap-1"><span>📍</span>{order.address} — {order.pin}</span>
//                               <span className="flex items-center gap-1"><span>📞</span>{order.phone}</span>
//                             </div>
//                           </div>
//                           <table className="w-full text-[12.5px]">
//                             <thead className="bg-gray-50">
//                               <tr>{['Product', 'Qty', 'Unit Price', 'Subtotal'].map(h => (
//                                 <th key={h} className="px-4 py-2.5 text-left font-semibold text-gray-500">{h}</th>
//                               ))}</tr>
//                             </thead>
//                             <tbody>
//                               {order.items.map((item, j) => (
//                                 <tr key={j} className="border-t border-gray-50">
//                                   <td className="px-4 py-3 font-medium text-gray-800">{item.title}</td>
//                                   <td className="px-4 py-3 text-gray-600">×{item.qty}</td>
//                                   <td className="px-4 py-3 text-gray-600">₹{(item.price || 0).toLocaleString()}</td>
//                                   <td className="px-4 py-3 font-bold text-gray-900">₹{(item.subtotal || 0).toLocaleString()}</td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                             <tfoot className="border-t-2 border-gray-200 bg-gray-50">
//                               <tr>
//                                 <td colSpan={3} className="px-4 py-2.5 text-right font-bold text-gray-700">Total:</td>
//                                 <td className="px-4 py-2.5 font-extrabold text-indigo-700">₹{(order.amount || 0).toLocaleString()}</td>
//                               </tr>
//                             </tfoot>
//                           </table>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-gray-50/30">
//           <p className="text-[12.5px] text-gray-500">
//             Showing <strong>{Math.min(page * PER_PAGE + 1, filtered.length)}</strong>–<strong>{Math.min((page + 1) * PER_PAGE, filtered.length)}</strong> of <strong>{filtered.length}</strong> orders
//           </p>
//           <div className="flex items-center gap-1.5">
//             <button onClick={() => setPage(0)} disabled={page === 0} className="w-8 h-8 rounded-lg border border-gray-200 text-gray-500 disabled:opacity-30 hover:bg-gray-100 flex items-center justify-center transition-colors">
//               <TbChevronLeft size={14} />
//             </button>
//             <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Prev</button>
//             {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
//               const p = totalPages <= 7 ? i : Math.max(0, Math.min(page - 3 + i, totalPages - 7 + i));
//               return (
//                 <button key={p} onClick={() => setPage(p)}
//                   className={`w-8 h-8 rounded-lg text-[12.5px] font-bold transition-colors ${page === p ? 'bg-indigo-600 text-white shadow-sm' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                   {p + 1}
//                 </button>
//               );
//             })}
//             <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Next</button>
//             <button onClick={() => setPage(totalPages - 1)} disabled={page >= totalPages - 1} className="w-8 h-8 rounded-lg border border-gray-200 text-gray-500 disabled:opacity-30 hover:bg-gray-100 flex items-center justify-center transition-colors">
//               <TbChevronRight size={14} />
//             </button>
//           </div>
//         </div>
//       </SectionCard>
//     </>
//   );
// };

// /* ─────────────────────────────────────────────
//    PRODUCT FORM MODAL
// ───────────────────────────────────────────── */
// const ProductFormModal = ({ product, onClose, onSave }) => {
//   const isEdit = !!product?.id;
//   const [form, setForm] = useState({
//     name: product?.name || '',
//     category: product?.category || 'Men',
//     price: product?.price || '',
//     mrp: product?.mrp || '',
//     stock: product?.stock || '',
//     brand: product?.brand || '',
//     sub: product?.sub || '',
//     description: product?.description || '',
//     img: product?.img || '',
//   });
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = 'Product name is required';
//     if (!form.price || isNaN(form.price) || +form.price <= 0) e.price = 'Valid price required';
//     if (!form.stock || isNaN(form.stock) || +form.stock < 0) e.stock = 'Valid stock required';
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validate()) return;
//     onSave({ ...form, price: +form.price, mrp: +form.mrp || +form.price * 1.3, stock: +form.stock });
//   };

//   const F = ({ label, name, type = 'text', placeholder, required }) => (
//     <div>
//       <label className="block text-[12px] font-semibold text-gray-600 mb-1">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
//       <input
//         type={type}
//         value={form[name]}
//         onChange={e => setForm(p => ({ ...p, [name]: e.target.value }))}
//         placeholder={placeholder}
//         className={`w-full px-3 py-2 rounded-xl border text-[13px] outline-none transition-all focus:ring-2 focus:ring-indigo-50 focus:border-indigo-400 ${errors[name] ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
//       />
//       {errors[name] && <p className="text-[11px] text-red-500 mt-1">{errors[name]}</p>}
//     </div>
//   );

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white">
//           <div>
//             <h2 className="text-[16px] font-bold text-gray-900">{isEdit ? 'Edit Product' : 'Add New Product'}</h2>
//             <p className="text-[12px] text-gray-400">{isEdit ? 'Update product details' : 'Fill in the product information'}</p>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
//             <TbX size={16} className="text-gray-600" />
//           </button>
//         </div>
//         <div className="p-6 space-y-4">
//           <F label="Product Name" name="name" placeholder="e.g. Classic Cotton Shirt" required />
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-[12px] font-semibold text-gray-600 mb-1">Category<span className="text-red-500 ml-0.5">*</span></label>
//               <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
//                 className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400">
//                 <option value="Men">Men</option>
//                 <option value="Women">Women</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>
//             <F label="Sub Category" name="sub" placeholder="e.g. Topwear" />
//           </div>
//           <div className="grid grid-cols-3 gap-4">
//             <F label="Selling Price (₹)" name="price" type="number" placeholder="1299" required />
//             <F label="MRP (₹)" name="mrp" type="number" placeholder="1899" />
//             <F label="Stock" name="stock" type="number" placeholder="50" required />
//           </div>
//           <F label="Brand" name="brand" placeholder="e.g. UrbanThread" />
//           <F label="Image URL" name="img" placeholder="https://..." />
//           <div>
//             <label className="block text-[12px] font-semibold text-gray-600 mb-1">Description</label>
//             <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
//               placeholder="Brief product description…" rows={3}
//               className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 resize-none" />
//           </div>
//           {form.img && (
//             <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
//               <img src={form.img} alt="preview" className="w-14 h-14 rounded-lg object-cover border" onError={e => e.target.style.display = 'none'} />
//               <div>
//                 <p className="text-[12px] font-semibold text-gray-700">Image Preview</p>
//                 <p className="text-[11px] text-gray-400">Image will appear here if URL is valid</p>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/30">
//           <Btn variant="ghost" size="sm" onClick={onClose} className="flex-1 justify-center">Cancel</Btn>
//           <Btn variant="primary" size="sm" onClick={handleSubmit} className="flex-1 justify-center">
//             <TbCheck size={14} /> {isEdit ? 'Save Changes' : 'Add Product'}
//           </Btn>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────
//    PRODUCTS TABLE — ENHANCED
// ───────────────────────────────────────────── */
// const ProductsTable = ({ token }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [catFilter, setCatFilter] = useState('all');
//   const [stockFilter, setStockFilter] = useState('all');
//   const [sortField, setSortField] = useState('sales');
//   const [sortDir, setSortDir] = useState('desc');
//   const [page, setPage] = useState(0);
//   const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
//   const [formModal, setFormModal] = useState(null); // null | {} | product
//   const [confirmDialog, setConfirmDialog] = useState(null);
//   const [selectedIds, setSelectedIds] = useState(new Set());
//   const PER_PAGE = viewMode === 'grid' ? 9 : 8;

//   useEffect(() => { fetchProducts(); }, [token]);

//   const fetchProducts = async () => {
//     if (!token) { setLoading(false); return; }
//     setLoading(true);
//     try {
//       const res = await axios.get(`${backendUrl}/api/product/list`, { headers: { token } });
//       if (res.data.success) {
//         setProducts((res.data.products || []).map(p => ({
//           id: p._id,
//           name: p.name || 'Unnamed Product',
//           category: p.category || 'Others',
//           sub: p.subcategory || '',
//           brand: p.brand || '—',
//           price: p.price || 0,
//           mrp: p.mrp || Math.round((p.price || 0) * 1.3),
//           sales: p.salesCount || 0,
//           stock: p.stock ?? 0,
//           rating: p.rating || 0,
//           img: p.image?.[0] || p.images?.[0] || '',
//           description: p.description || '',
//         })));
//       } else {
//         toast.error(res.data.message || "Failed to load products");
//         setProducts(PRODUCTS_DATA); // fallback
//       }
//     } catch {
//       setProducts(PRODUCTS_DATA); // fallback to mock data
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await axios.post(`${backendUrl}/api/product/remove`, { id }, { headers: { token } });
//       setProducts(p => p.filter(x => x.id !== id));
//       toast.success('Product deleted');
//     } catch {
//       setProducts(p => p.filter(x => x.id !== id));
//       toast.success('Product removed');
//     }
//   };

//   const saveProduct = (data) => {
//     if (formModal?.id) {
//       setProducts(p => p.map(x => x.id === formModal.id ? { ...x, ...data } : x));
//       toast.success('Product updated!');
//     } else {
//       const newProd = { ...data, id: `PRD-${Date.now()}`, sales: 0, rating: 0 };
//       setProducts(p => [newProd, ...p]);
//       toast.success('Product added!');
//     }
//     setFormModal(null);
//   };

//   const handleSort = (field) => {
//     if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
//     else { setSortField(field); setSortDir('desc'); }
//   };

//   const exportCSV = () => {
//     const rows = [['ID', 'Name', 'Category', 'Price', 'MRP', 'Stock', 'Sales', 'Rating']];
//     filtered.forEach(p => rows.push([p.id, p.name, p.category, p.price, p.mrp, p.stock, p.sales, p.rating]));
//     const blob = new Blob([rows.map(r => r.join(',')).join('\n')], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a'); a.href = url; a.download = 'products.csv'; a.click();
//     URL.revokeObjectURL(url);
//     toast.success('Products exported!');
//   };

//   const filtered = useMemo(() => {
//     let data = [...products];
//     if (search) data = data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));
//     if (catFilter !== 'all') data = data.filter(p => p.category === catFilter);
//     if (stockFilter === 'out') data = data.filter(p => p.stock === 0);
//     else if (stockFilter === 'low') data = data.filter(p => p.stock > 0 && p.stock <= 10);
//     else if (stockFilter === 'in') data = data.filter(p => p.stock > 10);
//     data.sort((a, b) => {
//       const av = a[sortField], bv = b[sortField];
//       if (av < bv) return sortDir === 'asc' ? -1 : 1;
//       if (av > bv) return sortDir === 'asc' ? 1 : -1;
//       return 0;
//     });
//     return data;
//   }, [products, search, catFilter, stockFilter, sortField, sortDir]);

//   const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

//   const SortIcon = ({ field }) => {
//     if (sortField !== field) return <TbChevronDown size={12} className="text-gray-300" />;
//     return sortDir === 'asc' ? <TbArrowUp size={12} className="text-indigo-500" /> : <TbArrowDown size={12} className="text-indigo-500" />;
//   };

//   const StockBadge = ({ stock }) => {
//     if (stock === 0) return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-600 border border-red-200"><TbX size={10} />Out of Stock</span>;
//     if (stock <= 10) return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200"><TbAlertTriangle size={10} />{stock} left</span>;
//     return <span className="text-[13px] font-semibold text-gray-700">{stock}</span>;
//   };

//   const productStats = useMemo(() => ({
//     total: products.length,
//     outOfStock: products.filter(p => p.stock === 0).length,
//     lowStock: products.filter(p => p.stock > 0 && p.stock <= 10).length,
//     totalRevenue: products.reduce((s, p) => s + p.price * p.sales, 0),
//   }), [products]);

//   return (
//     <>
//       {formModal !== null && <ProductFormModal product={formModal} onClose={() => setFormModal(null)} onSave={saveProduct} />}
//       <ConfirmDialog {...(confirmDialog || {})} open={!!confirmDialog} onCancel={() => setConfirmDialog(null)} />

//       <SectionCard
//         title="Products Management"
//         subtitle={`${filtered.length} products`}
//         toolbar={
//           <div className="flex items-center gap-2 flex-wrap">
//             <SearchInput value={search} onChange={v => { setSearch(v); setPage(0); }} placeholder="Search products…" className="w-48" />
//             <select value={catFilter} onChange={e => { setCatFilter(e.target.value); setPage(0); }}
//               className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[12.5px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//               <option value="all">All Categories</option>
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Others">Others</option>
//             </select>
//             <select value={stockFilter} onChange={e => { setStockFilter(e.target.value); setPage(0); }}
//               className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[12.5px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//               <option value="all">All Stock</option>
//               <option value="in">In Stock</option>
//               <option value="low">Low Stock (≤10)</option>
//               <option value="out">Out of Stock</option>
//             </select>
//             <div className="flex border border-gray-200 rounded-xl overflow-hidden">
//               <button onClick={() => setViewMode('table')} className={`px-3 py-2 ${viewMode === 'table' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'} transition-colors`}>
//                 <TbList size={14} />
//               </button>
//               <button onClick={() => setViewMode('grid')} className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'} transition-colors`}>
//                 <TbGridDots size={14} />
//               </button>
//             </div>
//             <Btn variant="ghost" size="sm" onClick={exportCSV}><TbFileExport size={14} /> Export</Btn>
//             <Btn variant="primary" size="sm" onClick={() => setFormModal({})}><TbPlus size={14} /> Add Product</Btn>
//           </div>
//         }
//       >
//         {/* Stats */}
//         <div className="grid grid-cols-4 border-b border-gray-100">
//           {[
//             { label: 'Total Products', value: productStats.total, color: 'text-indigo-700', bg: 'bg-indigo-50/30' },
//             { label: 'Out of Stock', value: productStats.outOfStock, color: 'text-red-600', bg: 'bg-red-50/30' },
//             { label: 'Low Stock', value: productStats.lowStock, color: 'text-amber-700', bg: 'bg-amber-50/30' },
//             { label: 'Total GMV', value: `₹${productStats.totalRevenue.toLocaleString()}`, color: 'text-emerald-700', bg: 'bg-emerald-50/30' },
//           ].map(s => (
//             <div key={s.label} className={`text-center py-3 ${s.bg} border-r border-gray-100 last:border-r-0`}>
//               <p className={`text-[17px] font-extrabold ${s.color}`}>{s.value}</p>
//               <p className="text-[11px] text-gray-500 font-medium mt-0.5">{s.label}</p>
//             </div>
//           ))}
//         </div>

//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
//             <div className="w-8 h-8 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
//             <p className="text-[13px]">Loading products…</p>
//           </div>
//         ) : paginated.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
//             <TbBox size={40} className="opacity-25" />
//             <p className="text-[14px] font-medium">No products found</p>
//             <Btn variant="primary" size="sm" onClick={() => setFormModal({})}><TbPlus size={13} /> Add First Product</Btn>
//           </div>
//         ) : viewMode === 'grid' ? (
//           /* GRID VIEW */
//           <div className="p-5 grid grid-cols-2 md:grid-cols-3 gap-4">
//             {paginated.map(p => {
//               const discount = p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0;
//               return (
//                 <div key={p.id} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all hover:border-indigo-200">
//                   <div className="relative h-40 bg-gray-50 overflow-hidden">
//                     {p.img ? <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> : <div className="w-full h-full flex items-center justify-center"><TbPhoto size={32} className="text-gray-300" /></div>}
//                     {discount > 0 && <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[11px] font-bold rounded-lg">{discount}% OFF</span>}
//                     {p.stock === 0 && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><span className="text-white text-[13px] font-bold">Out of Stock</span></div>}
//                     <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <IconBtn icon={<TbEdit size={12} />} onClick={() => setFormModal(p)} color="indigo" />
//                       <IconBtn icon={<TbTrash size={12} />} onClick={() => setConfirmDialog({ title: 'Delete Product', message: `Delete "${p.name}"?`, danger: true, onConfirm: () => { deleteProduct(p.id); setConfirmDialog(null); } })} color="red" />
//                     </div>
//                   </div>
//                   <div className="p-3">
//                     <p className="font-semibold text-gray-900 text-[13px] leading-tight line-clamp-2">{p.name}</p>
//                     <p className="text-[11.5px] text-gray-400 mt-1">{p.brand} · {p.category}</p>
//                     <div className="flex items-center justify-between mt-2">
//                       <div>
//                         <span className="font-extrabold text-gray-900 text-[14px]">₹{p.price.toLocaleString()}</span>
//                         {discount > 0 && <span className="text-[11px] text-gray-400 line-through ml-1">₹{p.mrp}</span>}
//                       </div>
//                       <div className="flex items-center gap-1 text-amber-500">
//                         <TbStarFilled size={12} />
//                         <span className="text-[12px] font-bold text-gray-700">{p.rating || '—'}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between mt-2">
//                       <StockBadge stock={p.stock} />
//                       <span className="text-[11.5px] text-gray-500">{p.sales} sold</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           /* TABLE VIEW */
//           <div className="overflow-x-auto">
//             <table className="w-full text-[13px]">
//               <thead>
//                 <tr className="border-b border-gray-100 bg-gray-50/50">
//                   <th className="px-4 py-3 w-10">
//                     <input type="checkbox" onChange={e => setSelectedIds(e.target.checked ? new Set(paginated.map(p => p.id)) : new Set())} className="rounded border-gray-300 text-indigo-600 cursor-pointer" />
//                   </th>
//                   {[['Product', null], ['Category', 'category'], ['Price', 'price'], ['Sales', 'sales'], ['Stock', 'stock'], ['Rating', 'rating']].map(([l, f]) => (
//                     <th key={l} onClick={f ? () => handleSort(f) : undefined}
//                       className={`px-4 py-3.5 text-left font-semibold text-gray-500 whitespace-nowrap ${f ? 'cursor-pointer hover:text-gray-700 select-none' : ''}`}>
//                       <span className="flex items-center gap-1">{l} {f && <SortIcon field={f} />}</span>
//                     </th>
//                   ))}
//                   <th className="px-4 py-3.5 text-left font-semibold text-gray-500">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginated.map(p => {
//                   const discount = p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0;
//                   return (
//                     <tr key={p.id} className={`border-b border-gray-50 transition-colors ${selectedIds.has(p.id) ? 'bg-indigo-50/30' : 'hover:bg-gray-50/70'}`}>
//                       <td className="px-4 py-3.5">
//                         <input type="checkbox" checked={selectedIds.has(p.id)}
//                           onChange={() => setSelectedIds(prev => { const n = new Set(prev); n.has(p.id) ? n.delete(p.id) : n.add(p.id); return n; })}
//                           className="rounded border-gray-300 text-indigo-600 cursor-pointer" />
//                       </td>
//                       <td className="px-4 py-3.5">
//                         <div className="flex items-center gap-3">
//                           <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0">
//                             {p.img ? <img src={p.img} alt={p.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><TbPhoto size={18} className="text-gray-300" /></div>}
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900 max-w-[200px] leading-snug">{p.name}</p>
//                             <p className="text-[11.5px] text-gray-400 mt-0.5">{p.brand} · {p.sub}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3.5">
//                         <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[12px] rounded-full font-medium">{p.category}</span>
//                       </td>
//                       <td className="px-4 py-3.5">
//                         <div>
//                           <span className="font-bold text-gray-900">₹{p.price.toLocaleString()}</span>
//                           {discount > 0 && (
//                             <div className="flex items-center gap-1.5 mt-0.5">
//                               <span className="text-[11px] text-gray-400 line-through">₹{p.mrp}</span>
//                               <span className="text-[11px] font-bold text-green-600">{discount}% off</span>
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3.5">
//                         <div className="flex items-center gap-1.5">
//                           <div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
//                             <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.min(100, (p.sales / 2200) * 100)}%` }} />
//                           </div>
//                           <span className="text-[12.5px] font-semibold text-gray-700">{p.sales.toLocaleString()}</span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3.5"><StockBadge stock={p.stock} /></td>
//                       <td className="px-4 py-3.5">
//                         {p.rating > 0 ? (
//                           <div className="flex items-center gap-1">
//                             <TbStarFilled size={13} className="text-amber-400" />
//                             <span className="font-semibold text-gray-800 text-[12.5px]">{p.rating}</span>
//                           </div>
//                         ) : <span className="text-gray-400 text-[12px]">—</span>}
//                       </td>
//                       <td className="px-4 py-3.5">
//                         <div className="flex items-center gap-1.5">
//                           <IconBtn icon={<TbEye size={13} />} onClick={() => toast.info(`Viewing: ${p.name}`)} title="View" color="indigo" />
//                           <IconBtn icon={<TbEdit size={13} />} onClick={() => setFormModal(p)} title="Edit" color="amber" />
//                           <IconBtn icon={<TbTrash size={13} />} onClick={() => setConfirmDialog({
//                             title: 'Delete Product',
//                             message: `Are you sure you want to delete "${p.name}"?`,
//                             danger: true,
//                             onConfirm: () => { deleteProduct(p.id); setConfirmDialog(null); }
//                           })} title="Delete" color="red" />
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-gray-50/30">
//             <p className="text-[12.5px] text-gray-500">
//               Showing <strong>{page * PER_PAGE + 1}</strong>–<strong>{Math.min((page + 1) * PER_PAGE, filtered.length)}</strong> of <strong>{filtered.length}</strong>
//             </p>
//             <div className="flex items-center gap-1.5">
//               <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Prev</button>
//               {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
//                 <button key={i} onClick={() => setPage(i)} className={`w-8 h-8 rounded-lg text-[12.5px] font-bold transition-colors ${page === i ? 'bg-indigo-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{i + 1}</button>
//               ))}
//               <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12.5px] font-semibold text-gray-600 disabled:opacity-40 hover:bg-gray-50 transition-colors">Next</button>
//             </div>
//           </div>
//         )}
//       </SectionCard>
//     </>
//   );
// };

// /* ═══════════════════════════════════════════
//    USERS TABLE (unchanged)
// ═══════════════════════════════════════════ */
// const UsersTable = () => {
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [users, setUsers] = useState(USERS_DATA);

//   const filtered = useMemo(() => {
//     let data = [...users];
//     if (search) data = data.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
//     if (statusFilter !== 'all') data = data.filter(u => u.status === statusFilter);
//     return data;
//   }, [users, search, statusFilter]);

//   const toggleStatus = (id) => setUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u));
//   const initials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
//   const colors = ['bg-indigo-100 text-indigo-700', 'bg-pink-100 text-pink-700', 'bg-amber-100 text-amber-700', 'bg-emerald-100 text-emerald-700', 'bg-violet-100 text-violet-700'];

//   return (
//     <SectionCard
//       title="Users"
//       subtitle={`${filtered.length} users`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           <SearchInput value={search} onChange={setSearch} placeholder="Search users…" className="w-52" />
//           <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//             <option value="all">All</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <Btn variant="success" size="sm"><TbDownload size={14} /> Export</Btn>
//         </div>
//       }
//     >
//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               {['Customer', 'Contact', 'Orders', 'Total Spent', 'Joined', 'Status', 'Actions'].map(h => (
//                 <th key={h} className="px-5 py-3.5 text-left font-semibold text-gray-500 whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-12 text-gray-400">No users found</td></tr>
//             ) : filtered.map((u, i) => (
//               <tr key={u.id} className="border-b border-gray-50 hover:bg-indigo-50/20 transition-colors">
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${colors[i % colors.length]}`}>{initials(u.name)}</div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{u.name}</p>
//                       <p className="text-[11.5px] text-gray-400">{u.id} · {u.city}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-5 py-4">
//                   <p className="text-gray-700">{u.email}</p>
//                   <p className="text-[11.5px] text-gray-400">{u.phone}</p>
//                 </td>
//                 <td className="px-5 py-4">
//                   <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-[12px] font-bold">{u.orders} orders</span>
//                 </td>
//                 <td className="px-5 py-4"><span className="font-extrabold text-gray-900">₹{u.spent.toLocaleString()}</span></td>
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{u.joined}</td>
//                 <td className="px-5 py-4"><StatusBadge status={u.status} /></td>
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-1.5">
//                     <IconBtn icon={<TbEye size={13} />} color="indigo" />
//                     <button onClick={() => toggleStatus(u.id)} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${u.status === 'active' ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'}`}>
//                       {u.status === 'active' ? 'Deactivate' : 'Activate'}
//                     </button>
//                     <IconBtn icon={<TbTrash size={13} />} color="red" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </SectionCard>
//   );
// };

// /* ═══════════════════════════════════════════
//    CHARTS
// ═══════════════════════════════════════════ */
// const ChartsSection = () => {
//   const [chartType, setChartType] = useState('area');
//   const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders', 'Users']);
//   const [data, setData] = useState(() => generateMonthlyData());

//   const refreshData = () => setData(generateMonthlyData());
//   const toggleMetric = (m) => setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//   const METRICS = [
//     { key: 'Revenue', color: '#6366f1', label: 'Revenue (₹)' },
//     { key: 'Orders', color: '#10b981', label: 'Orders' },
//     { key: 'Users', color: '#f59e0b', label: 'New Users' },
//   ];

//   return (
//     <div className="space-y-5">
//       <SectionCard
//         title="Performance Analytics"
//         subtitle="Revenue, orders & user growth over time"
//         toolbar={
//           <div className="flex items-center gap-2">
//             {['area', 'line', 'bar'].map(t => (
//               <button key={t} onClick={() => setChartType(t)}
//                 className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                 {t}
//               </button>
//             ))}
//             <button onClick={refreshData} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"><TbRefresh size={14} className="text-gray-500" /></button>
//           </div>
//         }
//       >
//         <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
//           {METRICS.map(m => (
//             <button key={m.key} onClick={() => toggleMetric(m.key)}
//               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
//               style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
//               <span className="w-2 h-2 rounded-full" style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
//               {m.label}
//             </button>
//           ))}
//         </div>
//         <div className="px-4 pb-5 pt-2">
//           <ResponsiveContainer width="100%" height={320}>
//             {chartType === 'bar' ? (
//               <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />)}
//               </BarChart>
//             ) : chartType === 'line' ? (
//               <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />)}
//               </LineChart>
//             ) : (
//               <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <defs>
//                   {METRICS.map(m => (
//                     <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
//                       <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                     </linearGradient>
//                   ))}
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
//                   <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                 ))}
//               </AreaChart>
//             )}
//           </ResponsiveContainer>
//         </div>
//       </SectionCard>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <SectionCard title="Sales by Category" subtitle="Revenue distribution">
//           <div className="flex items-center justify-center gap-6 p-5">
//             <PieChart width={180} height={180}>
//               <Pie data={PIE_DATA} cx={85} cy={85} innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
//                 {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
//               </Pie>
//               <Tooltip formatter={(v) => `${v}%`} />
//             </PieChart>
//             <div className="space-y-3">
//               {PIE_DATA.map(d => (
//                 <div key={d.name} className="flex items-center gap-3">
//                   <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
//                   <div>
//                     <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
//                     <p className="text-[12px] text-gray-400">{d.value}% of sales</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </SectionCard>
//         <SectionCard title="Top Products by Sales" subtitle="Best performing items">
//           <div className="p-5">
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart layout="vertical" data={PRODUCTS_DATA.slice().sort((a, b) => b.sales - a.sales).slice(0, 5).map(p => ({ name: p.name.slice(0, 22) + '…', sales: p.sales }))} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
//                 <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} axisLine={false} tickLine={false} width={140} />
//                 <Tooltip />
//                 <Bar dataKey="sales" fill="#6366f1" radius={[0, 4, 4, 0]}>
//                   {PRODUCTS_DATA.map((_, i) => <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'][i % 5]} />)}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </SectionCard>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    ACTIVITY FEED
// ═══════════════════════════════════════════ */
// const ActivityFeed = () => {
//   const activities = [
//     { icon: <TbShoppingCart size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'New order #ORD-8821 from Rajesh Verma', time: '2 min ago' },
//     { icon: <TbUsers size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'New user registered: priya@gmail.com', time: '14 min ago' },
//     { icon: <TbPackage size={14} className="text-amber-600" />, bg: 'bg-amber-50', text: 'Product "Woolen Overcoat" — low stock (4 left)', time: '1 hr ago' },
//     { icon: <TbCircleCheck size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'Order #ORD-8819 delivered successfully', time: '2 hr ago' },
//     { icon: <TbAlertTriangle size={14} className="text-red-500" />, bg: 'bg-red-50', text: '"Designer Silk Cushion Cover" is out of stock', time: '3 hr ago' },
//     { icon: <TbCurrencyRupee size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'Payment received ₹9,800 from Vikram Singh', time: '5 hr ago' },
//   ];
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
//       <div className="px-5 py-4 border-b border-gray-50">
//         <h2 className="text-[15px] font-bold text-gray-900">Activity Feed</h2>
//         <p className="text-[12px] text-gray-400 mt-0.5">Real-time store events</p>
//       </div>
//       <div className="divide-y divide-gray-50">
//         {activities.map((a, i) => (
//           <div key={i} className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
//             <div className={`w-7 h-7 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>{a.icon}</div>
//             <div className="flex-1 min-w-0">
//               <p className="text-[13px] text-gray-700 font-medium leading-snug">{a.text}</p>
//               <p className="text-[11.5px] text-gray-400 mt-0.5 flex items-center gap-1"><TbClock size={11} /> {a.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="px-5 py-3 border-t border-gray-50">
//         <button className="text-[12.5px] font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">View all activity <TbArrowRight size={13} /></button>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    MAIN DASHBOARD
// ═══════════════════════════════════════════ */
// const Dashboard = ({ token }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [greeting, setGreeting] = useState('Good Morning');
//   const [liveTime, setLiveTime] = useState(new Date());

//   useEffect(() => {
//     const h = new Date().getHours();
//     setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');
//     const timer = setInterval(() => setLiveTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const TABS = [
//     { id: 'overview', label: 'Overview', icon: <TbChartBar size={15} /> },
//     { id: 'orders', label: 'Orders', icon: <TbShoppingCart size={15} /> },
//     { id: 'products', label: 'Products', icon: <TbPackage size={15} /> },
//     { id: 'users', label: 'Users', icon: <TbUsers size={15} /> },
//     { id: 'analytics', label: 'Analytics', icon: <TbChartPie size={15} /> },
//   ];

//   const sparkData = Array.from({ length: 12 }, () => ({ v: Math.floor(Math.random() * 100) + 20 }));

//   const KPI_CARDS = [
//     { icon: <TbCurrencyRupee size={20} className="text-indigo-600" />, label: 'Total Revenue', value: '₹4,82,650', change: 12.4, changeLabel: 'vs last month', color: 'bg-indigo-50' },
//     { icon: <TbShoppingCart size={20} className="text-emerald-600" />, label: 'Total Orders', value: '2,847', change: 8.1, changeLabel: '134 orders today', color: 'bg-emerald-50' },
//     { icon: <TbUsers size={20} className="text-violet-600" />, label: 'Total Users', value: '12,419', change: 5.7, changeLabel: '48 new this week', color: 'bg-violet-50' },
//     { icon: <TbPackage size={20} className="text-amber-600" />, label: 'Total Products', value: '1,284', change: -2.3, changeLabel: '6 out of stock', color: 'bg-amber-50' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f5]">
//       {/* BANNER */}
//       <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-6 py-6 mb-6 mt-16">
//         <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <p className="text-indigo-200 text-[13px] font-medium mb-1 flex items-center gap-2">
//               <TbCalendar size={13} /> {liveTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} ·
//               <TbClock size={13} /> {liveTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//             </p>
//             <h1 className="text-[26px] font-extrabold text-white tracking-tight">{greeting}, Admin 👋</h1>
//             <p className="text-indigo-200 text-[14px] mt-1">Here's what's happening in your store today.</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
//               <p className="text-[11px] text-indigo-200 font-medium">Today's Revenue</p>
//               <p className="text-[20px] font-extrabold">₹18,420</p>
//               <p className="text-[11px] text-emerald-300 flex items-center gap-1"><TbTrendingUp size={11} /> +14.2% vs yesterday</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Btn variant="primary" size="sm" className="!bg-white !text-indigo-700 !border-white hover:!bg-indigo-50" onClick={() => toast.info('Add product clicked')}>
//                 <TbPlus size={14} /> Add Product
//               </Btn>
//               <Btn size="sm" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20" onClick={() => setRefreshKey(k => k + 1)}>
//                 <TbRefresh size={14} /> Refresh
//               </Btn>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 pb-10">
//         {/* TABS */}
//         <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm mb-6 w-fit overflow-x-auto">
//           {TABS.map(t => (
//             <button key={t.id} onClick={() => setActiveTab(t.id)}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all whitespace-nowrap ${activeTab === t.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
//               {t.icon} {t.label}
//             </button>
//           ))}
//         </div>

//         {activeTab === 'overview' && (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//               {KPI_CARDS.map((card, i) => <KPICard key={i} {...card} sparkData={sparkData} />)}
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               <MiniStat icon={<TbTruck size={16} className="text-blue-600" />} label="Shipped" value="184" color="border-blue-100 bg-blue-50/50" trend={6} />
//               <MiniStat icon={<TbCircleCheck size={16} className="text-emerald-600" />} label="Delivered" value="2,291" color="border-emerald-100 bg-emerald-50/50" trend={11} />
//               <MiniStat icon={<TbClock size={16} className="text-amber-600" />} label="Pending" value="248" color="border-amber-100 bg-amber-50/50" trend={-3} />
//               <MiniStat icon={<TbX size={16} className="text-red-500" />} label="Cancelled" value="124" color="border-red-100 bg-red-50/50" trend={-8} />
//             </div>
//             <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
//               <ChartsSection />
//               <ActivityFeed />
//             </div>
//             <OrdersTable token={token} onStatusChange={() => toast.success('Order status updated!')} />
//           </div>
//         )}
//         {activeTab === 'orders' && <OrdersTable token={token} onStatusChange={() => toast.success('Order status updated!')} />}
//         {activeTab === 'products' && <ProductsTable token={token} />}
//         {activeTab === 'users' && <UsersTable />}
//         {activeTab === 'analytics' && <ChartsSection />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react';
// import {
//   LineChart, Line, AreaChart, Area, BarChart, Bar,
//   XAxis, YAxis, CartesianGrid, Tooltip,
//   ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import {
//   TbShoppingCart, TbUsers, TbCurrencyRupee, TbPackage,
//   TbTrendingUp, TbTrendingDown, TbPlus, TbDownload,
//   TbEdit, TbEye, TbTrash, TbSearch,
//   TbChevronDown, TbChevronUp, TbRefresh,
//   TbArrowRight, TbCheck, TbX, TbChartBar,
//   TbCalendar, TbStar, TbAlertTriangle, TbCircleCheck,
//   TbClock, TbTruck, TbChartPie, TbFilter,
//   TbSortAscending, TbSortDescending, TbPrinter,
//   TbCopy, TbInfoCircle, TbArrowUp, TbArrowDown,
//   TbBuildingStore, TbTag, TbPhoto, TbBox,
//   TbChevronLeft, TbChevronRight, TbDotsVertical,
//   TbFileExport, TbUpload, TbCategory,
//   TbPercentage, TbStarFilled, TbGridDots,
//   TbList, TbBell, TbSettings, TbLogout
// } from 'react-icons/tb';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl, MyContext } from '../App';
// // import ProductsList from './Pages/Products/ProductsList';
// // import Orders from './Pages/Orders/Orders';
// import ProductsList from './Products/ProductsLIst';
// import Orders from './Orders/Orders';




// /* ─────────────────────────────────────────────
//    MOCK DATA
// ───────────────────────────────────────────── */
// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const generateMonthlyData = () => MONTHS.map((m) => ({
//   name: m,
//   Revenue: Math.floor(Math.random() * 80000) + 20000,
//   Orders: Math.floor(Math.random() * 500) + 100,
//   Users: Math.floor(Math.random() * 300) + 50,
// }));

// const PRODUCTS_DATA = [
//   { id: 'PRD-001', name: 'Classic Oxford Cotton Shirt', category: 'Men', sub: 'Topwear', brand: 'StudioFit', mrp: 2499, price: 1799, sales: 842, stock: 45, rating: 4.5, img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=80&h=80&fit=crop' },
//   { id: 'PRD-002', name: 'Embroidered Rayon Kurta Pant Set', category: 'Women', sub: 'Topwear', brand: 'EthnicHues', mrp: 3299, price: 2199, sales: 627, stock: 12, rating: 4.7, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&h=80&fit=crop' },
//   { id: 'PRD-003', name: 'Premium Slim Fit Chinos', category: 'Men', sub: 'Bottomwear', brand: 'UrbanThread', mrp: 1899, price: 1299, sales: 1203, stock: 88, rating: 4.3, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=80&h=80&fit=crop' },
//   { id: 'PRD-004', name: 'Woolen Overcoat Winter Edition', category: 'Men', sub: 'Winterwear', brand: 'WarmWear', mrp: 7999, price: 5499, sales: 381, stock: 4, rating: 4.8, img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=80&h=80&fit=crop' },
//   { id: 'PRD-005', name: 'Floral Maxi Dress Summer', category: 'Women', sub: 'Topwear', brand: 'BloomWear', mrp: 2599, price: 1699, sales: 956, stock: 31, rating: 4.2, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=80&h=80&fit=crop' },
//   { id: 'PRD-006', name: 'Designer Silk Cushion Cover', category: 'Others', sub: 'Cushion Cover', brand: 'HomeDecor', mrp: 899, price: 599, sales: 2140, stock: 0, rating: 4.6, img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=80&h=80&fit=crop' },
// ];

// const USERS_DATA = [
//   { id: 'USR-001', name: 'Rajesh Verma', email: 'rajesh@gmail.com', phone: '9837847394', orders: 14, spent: 42800, joined: '12 Mar 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-002', name: 'Priya Sharma', email: 'priya@gmail.com', phone: '9876543210', orders: 8, spent: 18600, joined: '05 Jun 2024', status: 'active', city: 'Delhi' },
//   { id: 'USR-003', name: 'Amit Kumar', email: 'amit@gmail.com', phone: '9123456789', orders: 22, spent: 78200, joined: '28 Jan 2024', status: 'active', city: 'Pune' },
//   { id: 'USR-004', name: 'Sunita Patel', email: 'sunita@gmail.com', phone: '9988776655', orders: 3, spent: 4200, joined: '18 Oct 2024', status: 'inactive', city: 'Ahmedabad' },
//   { id: 'USR-005', name: 'Vikram Singh', email: 'vikram@gmail.com', phone: '9765432100', orders: 31, spent: 154000, joined: '02 Feb 2023', status: 'active', city: 'Bengaluru' },
// ];

// const PIE_DATA = [
//   { name: 'Men', value: 38, color: '#6366f1' },
//   { name: 'Women', value: 45, color: '#ec4899' },
//   { name: 'Others', value: 17, color: '#f59e0b' },
// ];

// const ORDER_STATUS_FLOW = ['pending', 'shipped', 'delivered'];

// const STATUS_CONFIG = {
//   pending: { label: 'Pending', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500', icon: <TbClock size={11} /> },
//   shipped: { label: 'Shipped', cls: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', icon: <TbTruck size={11} /> },
//   delivered: { label: 'Delivered', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: <TbCircleCheck size={11} /> },
//   cancelled: { label: 'Cancelled', cls: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500', icon: <TbX size={11} /> },
//   active: { label: 'Active', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: null },
//   inactive: { label: 'Inactive', cls: 'bg-gray-50 text-gray-500 border-gray-200', dot: 'bg-gray-400', icon: null },
// };

// /* ─────────────────────────────────────────────
//    UTILITY COMPONENTS
// ───────────────────────────────────────────── */
// const StatusBadge = ({ status }) => {
//   const s = (status || '').toLowerCase();
//   const cfg = STATUS_CONFIG[s] || STATUS_CONFIG.pending;
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11.5px] font-semibold ${cfg.cls}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// };

// const MiniStat = ({ icon, label, value, trend, color }) => (
//   <div className={`flex items-center gap-3 p-3 rounded-xl border ${color}`}>
//     <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm flex-shrink-0">{icon}</div>
//     <div>
//       <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
//       <p className="text-[17px] font-extrabold text-gray-900 leading-none mt-0.5">{value}</p>
//     </div>
//     {trend !== undefined && (
//       <div className={`ml-auto flex items-center gap-0.5 text-[11px] font-bold ${trend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
//         {trend >= 0 ? <TbTrendingUp size={13} /> : <TbTrendingDown size={13} />}
//         {Math.abs(trend)}%
//       </div>
//     )}
//   </div>
// );

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
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       title={title}
//       className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const IconBtn = ({ icon, onClick, title, color = 'gray', className = '' }) => {
//   const colors = {
//     gray: 'bg-gray-100 hover:bg-gray-200 text-gray-600',
//     indigo: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600',
//     red: 'bg-red-50 hover:bg-red-100 text-red-500',
//     amber: 'bg-amber-50 hover:bg-amber-100 text-amber-600',
//     green: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600',
//   };
//   return (
//     <button
//       onClick={onClick}
//       title={title}
//       className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${colors[color]} ${className}`}
//     >
//       {icon}
//     </button>
//   );
// };

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

// const ChartTooltip = ({ active, payload, label }) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
//       <p className="font-bold text-gray-900 mb-2">{label}</p>
//       {payload.map((p, i) => (
//         <div key={i} className="flex items-center gap-2 mb-1">
//           <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
//           <span className="text-gray-500">{p.name}:</span>
//           <span className="font-bold text-gray-900">{p.name === 'Revenue' ? `₹${p.value.toLocaleString()}` : p.value.toLocaleString()}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// const KPICard = ({ icon, label, value, change, changeLabel, color, sparkData }) => {
//   const isPositive = change >= 0;
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
//         <span className={`inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
//           {isPositive ? <TbTrendingUp size={12} /> : <TbTrendingDown size={12} />}
//           {Math.abs(change)}%
//         </span>
//       </div>
//       <p className="text-[13px] text-gray-500 font-medium mb-1">{label}</p>
//       <p className="text-[24px] font-extrabold text-gray-900 tracking-tight">{value}</p>
//       <p className="text-[11.5px] text-gray-400 mt-1">{changeLabel}</p>
//       <div className="mt-3 -mx-1">
//         <ResponsiveContainer width="100%" height={40}>
//           <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
//                 <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} fill={`url(#spark-${label})`} dot={false} />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────
//    ORDERS — delegates to standalone Orders page
//    ConfirmDialog, OrderDetailModal, OrdersTable
//    have been removed. The Orders tab now renders
//    the full-featured <Orders> page directly.
// ───────────────────────────────────────────── */
// /* ═══════════════════════════════════════════
//    USERS TABLE (unchanged)
// ═══════════════════════════════════════════ */
// const UsersTable = () => {
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [users, setUsers] = useState(USERS_DATA);

//   const filtered = useMemo(() => {
//     let data = [...users];
//     if (search) data = data.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
//     if (statusFilter !== 'all') data = data.filter(u => u.status === statusFilter);
//     return data;
//   }, [users, search, statusFilter]);

//   const toggleStatus = (id) => setUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u));
//   const initials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
//   const colors = ['bg-indigo-100 text-indigo-700', 'bg-pink-100 text-pink-700', 'bg-amber-100 text-amber-700', 'bg-emerald-100 text-emerald-700', 'bg-violet-100 text-violet-700'];

//   return (
//     <SectionCard
//       title="Users"
//       subtitle={`${filtered.length} users`}
//       toolbar={
//         <div className="flex items-center gap-2 flex-wrap">
//           <SearchInput value={search} onChange={setSearch} placeholder="Search users…" className="w-52" />
//           <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
//             className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-[13px] text-gray-700 outline-none focus:border-indigo-400 cursor-pointer">
//             <option value="all">All</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <Btn variant="success" size="sm"><TbDownload size={14} /> Export</Btn>
//         </div>
//       }
//     >
//       <div className="overflow-x-auto">
//         <table className="w-full text-[13px]">
//           <thead>
//             <tr className="border-b border-gray-100 bg-gray-50/50">
//               {['Customer', 'Contact', 'Orders', 'Total Spent', 'Joined', 'Status', 'Actions'].map(h => (
//                 <th key={h} className="px-5 py-3.5 text-left font-semibold text-gray-500 whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-12 text-gray-400">No users found</td></tr>
//             ) : filtered.map((u, i) => (
//               <tr key={u.id} className="border-b border-gray-50 hover:bg-indigo-50/20 transition-colors">
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0 ${colors[i % colors.length]}`}>{initials(u.name)}</div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{u.name}</p>
//                       <p className="text-[11.5px] text-gray-400">{u.id} · {u.city}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-5 py-4">
//                   <p className="text-gray-700">{u.email}</p>
//                   <p className="text-[11.5px] text-gray-400">{u.phone}</p>
//                 </td>
//                 <td className="px-5 py-4">
//                   <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-[12px] font-bold">{u.orders} orders</span>
//                 </td>
//                 <td className="px-5 py-4"><span className="font-extrabold text-gray-900">₹{u.spent.toLocaleString()}</span></td>
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{u.joined}</td>
//                 <td className="px-5 py-4"><StatusBadge status={u.status} /></td>
//                 <td className="px-5 py-4">
//                   <div className="flex items-center gap-1.5">
//                     <IconBtn icon={<TbEye size={13} />} color="indigo" />
//                     <button onClick={() => toggleStatus(u.id)} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${u.status === 'active' ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'}`}>
//                       {u.status === 'active' ? 'Deactivate' : 'Activate'}
//                     </button>
//                     <IconBtn icon={<TbTrash size={13} />} color="red" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </SectionCard>
//   );
// };

// /* ═══════════════════════════════════════════
//    CHARTS
// ═══════════════════════════════════════════ */
// const ChartsSection = () => {
//   const [chartType, setChartType] = useState('area');
//   const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders', 'Users']);
//   const [data, setData] = useState(() => generateMonthlyData());

//   const refreshData = () => setData(generateMonthlyData());
//   const toggleMetric = (m) => setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//   const METRICS = [
//     { key: 'Revenue', color: '#6366f1', label: 'Revenue (₹)' },
//     { key: 'Orders', color: '#10b981', label: 'Orders' },
//     { key: 'Users', color: '#f59e0b', label: 'New Users' },
//   ];

//   return (
//     <div className="space-y-5">
//       <SectionCard
//         title="Performance Analytics"
//         subtitle="Revenue, orders & user growth over time"
//         toolbar={
//           <div className="flex items-center gap-2">
//             {['area', 'line', 'bar'].map(t => (
//               <button key={t} onClick={() => setChartType(t)}
//                 className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                 {t}
//               </button>
//             ))}
//             <button onClick={refreshData} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"><TbRefresh size={14} className="text-gray-500" /></button>
//           </div>
//         }
//       >
//         <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
//           {METRICS.map(m => (
//             <button key={m.key} onClick={() => toggleMetric(m.key)}
//               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
//               style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
//               <span className="w-2 h-2 rounded-full" style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
//               {m.label}
//             </button>
//           ))}
//         </div>
//         <div className="px-4 pb-5 pt-2">
//           <ResponsiveContainer width="100%" height={320}>
//             {chartType === 'bar' ? (
//               <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />)}
//               </BarChart>
//             ) : chartType === 'line' ? (
//               <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />)}
//               </LineChart>
//             ) : (
//               <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <defs>
//                   {METRICS.map(m => (
//                     <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
//                       <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                     </linearGradient>
//                   ))}
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
//                   <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                 ))}
//               </AreaChart>
//             )}
//           </ResponsiveContainer>
//         </div>
//       </SectionCard>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <SectionCard title="Sales by Category" subtitle="Revenue distribution">
//           <div className="flex items-center justify-center gap-6 p-5">
//             <PieChart width={180} height={180}>
//               <Pie data={PIE_DATA} cx={85} cy={85} innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
//                 {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
//               </Pie>
//               <Tooltip formatter={(v) => `${v}%`} />
//             </PieChart>
//             <div className="space-y-3">
//               {PIE_DATA.map(d => (
//                 <div key={d.name} className="flex items-center gap-3">
//                   <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
//                   <div>
//                     <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
//                     <p className="text-[12px] text-gray-400">{d.value}% of sales</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </SectionCard>
//         <SectionCard title="Top Products by Sales" subtitle="Best performing items">
//           <div className="p-5">
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart layout="vertical" data={PRODUCTS_DATA.slice().sort((a, b) => b.sales - a.sales).slice(0, 5).map(p => ({ name: p.name.slice(0, 22) + '…', sales: p.sales }))} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
//                 <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} axisLine={false} tickLine={false} width={140} />
//                 <Tooltip />
//                 <Bar dataKey="sales" fill="#6366f1" radius={[0, 4, 4, 0]}>
//                   {PRODUCTS_DATA.map((_, i) => <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'][i % 5]} />)}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </SectionCard>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    ACTIVITY FEED
// ═══════════════════════════════════════════ */
// const ActivityFeed = () => {
//   const activities = [
//     { icon: <TbShoppingCart size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'New order #ORD-8821 from Rajesh Verma', time: '2 min ago' },
//     { icon: <TbUsers size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'New user registered: priya@gmail.com', time: '14 min ago' },
//     { icon: <TbPackage size={14} className="text-amber-600" />, bg: 'bg-amber-50', text: 'Product "Woolen Overcoat" — low stock (4 left)', time: '1 hr ago' },
//     { icon: <TbCircleCheck size={14} className="text-emerald-600" />, bg: 'bg-emerald-50', text: 'Order #ORD-8819 delivered successfully', time: '2 hr ago' },
//     { icon: <TbAlertTriangle size={14} className="text-red-500" />, bg: 'bg-red-50', text: '"Designer Silk Cushion Cover" is out of stock', time: '3 hr ago' },
//     { icon: <TbCurrencyRupee size={14} className="text-indigo-600" />, bg: 'bg-indigo-50', text: 'Payment received ₹9,800 from Vikram Singh', time: '5 hr ago' },
//   ];
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
//       <div className="px-5 py-4 border-b border-gray-50">
//         <h2 className="text-[15px] font-bold text-gray-900">Activity Feed</h2>
//         <p className="text-[12px] text-gray-400 mt-0.5">Real-time store events</p>
//       </div>
//       <div className="divide-y divide-gray-50">
//         {activities.map((a, i) => (
//           <div key={i} className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
//             <div className={`w-7 h-7 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>{a.icon}</div>
//             <div className="flex-1 min-w-0">
//               <p className="text-[13px] text-gray-700 font-medium leading-snug">{a.text}</p>
//               <p className="text-[11.5px] text-gray-400 mt-0.5 flex items-center gap-1"><TbClock size={11} /> {a.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="px-5 py-3 border-t border-gray-50">
//         <button className="text-[12.5px] font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">View all activity <TbArrowRight size={13} /></button>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    MAIN DASHBOARD
// ═══════════════════════════════════════════ */
// const Dashboard = ({ token }) => {

//   const context = useContext(MyContext)
//   const [activeTab, setActiveTab] = useState('overview');
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [greeting, setGreeting] = useState('Good Morning');
//   const [liveTime, setLiveTime] = useState(new Date());

//   useEffect(() => {
//     const h = new Date().getHours();
//     setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');
//     const timer = setInterval(() => setLiveTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const TABS = [
//     { id: 'overview', label: 'Overview', icon: <TbChartBar size={15} /> },
//     { id: 'orders', label: 'Orders', icon: <TbShoppingCart size={15} /> },
//     { id: 'products', label: 'Products', icon: <TbPackage size={15} /> },
//     { id: 'users', label: 'Users', icon: <TbUsers size={15} /> },
//     { id: 'analytics', label: 'Analytics', icon: <TbChartPie size={15} /> },
//   ];

//   const sparkData = Array.from({ length: 12 }, () => ({ v: Math.floor(Math.random() * 100) + 20 }));

//   const KPI_CARDS = [
//     { icon: <TbCurrencyRupee size={20} className="text-indigo-600" />, label: 'Total Revenue', value: '₹4,82,650', change: 12.4, changeLabel: 'vs last month', color: 'bg-indigo-50' },
//     { icon: <TbShoppingCart size={20} className="text-emerald-600" />, label: 'Total Orders', value: '2,847', change: 8.1, changeLabel: '134 orders today', color: 'bg-emerald-50' },
//     { icon: <TbUsers size={20} className="text-violet-600" />, label: 'Total Users', value: '12,419', change: 5.7, changeLabel: '48 new this week', color: 'bg-violet-50' },
//     { icon: <TbPackage size={20} className="text-amber-600" />, label: 'Total Products', value: '1,284', change: -2.3, changeLabel: '6 out of stock', color: 'bg-amber-50' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f5]">
//       {/* BANNER */}
//       <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-6 py-6 mb-6 mt-16">
//         <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <p className="text-indigo-200 text-[13px] font-medium mb-1 flex items-center gap-2">
//               <TbCalendar size={13} /> {liveTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} ·
//               <TbClock size={13} /> {liveTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//             </p>
//             <h1 className="text-[26px] font-extrabold text-white tracking-tight">{greeting}, Admin 👋</h1>
//             <p className="text-indigo-200 text-[14px] mt-1">Here's what's happening in your store today.</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
//               <p className="text-[11px] text-indigo-200 font-medium">Today's Revenue</p>
//               <p className="text-[20px] font-extrabold">₹18,420</p>
//               <p className="text-[11px] text-emerald-300 flex items-center gap-1"><TbTrendingUp size={11} /> +14.2% vs yesterday</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Btn variant="primary" size="sm" className="!bg-white !text-indigo-700 !border-white hover:!bg-indigo-50"
//                 // onClick={() => toast.info('Add product clicked')}
//                 onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })}
//               >
//                 <TbPlus size={14} /> Add Product
//               </Btn>
//               <Btn size="sm" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20" onClick={() => setRefreshKey(k => k + 1)}>
//                 <TbRefresh size={14} /> Refresh
//               </Btn>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 pb-10">
//         {/* TABS */}
//         <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm mb-6 w-fit overflow-x-auto">
//           {TABS.map(t => (
//             <button key={t.id} onClick={() => setActiveTab(t.id)}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all whitespace-nowrap ${activeTab === t.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
//               {t.icon} {t.label}
//             </button>
//           ))}
//         </div>

//         {activeTab === 'overview' && (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//               {KPI_CARDS.map((card, i) => <KPICard key={i} {...card} sparkData={sparkData} />)}
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               <MiniStat icon={<TbTruck size={16} className="text-blue-600" />} label="Shipped" value="184" color="border-blue-100 bg-blue-50/50" trend={6} />
//               <MiniStat icon={<TbCircleCheck size={16} className="text-emerald-600" />} label="Delivered" value="2,291" color="border-emerald-100 bg-emerald-50/50" trend={11} />
//               <MiniStat icon={<TbClock size={16} className="text-amber-600" />} label="Pending" value="248" color="border-amber-100 bg-amber-50/50" trend={-3} />
//               <MiniStat icon={<TbX size={16} className="text-red-500" />} label="Cancelled" value="124" color="border-red-100 bg-red-50/50" trend={-8} />
//             </div>
//             <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
//               <ChartsSection />
//               <ActivityFeed />
//             </div>
//             <Orders token={token} />
//           </div>
//         )}
//         {activeTab === 'orders' && <Orders token={token} />}
//         {activeTab === 'products' && <ProductsList token={token} />}
//         {activeTab === 'users' && <UsersTable />}
//         {activeTab === 'analytics' && <ChartsSection />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import {
//   LineChart, Line, AreaChart, Area, BarChart, Bar,
//   XAxis, YAxis, CartesianGrid, Tooltip,
//   ResponsiveContainer, PieChart, Pie, Cell
// } from 'recharts';
// import {
//   TbShoppingCart, TbUsers, TbCurrencyDollar, TbPackage,
//   TbTrendingUp, TbTrendingDown, TbPlus, TbDownload,
//   TbEdit, TbEye, TbTrash, TbSearch,
//   TbChevronDown, TbChevronUp, TbRefresh,
//   TbArrowRight, TbCheck, TbX, TbChartBar,
//   TbCalendar, TbStar, TbAlertTriangle, TbCircleCheck,
//   TbClock, TbTruck, TbChartPie, TbFilter,
//   TbSortAscending, TbSortDescending, TbPrinter,
//   TbCopy, TbInfoCircle, TbArrowUp, TbArrowDown,
//   TbBuildingStore, TbTag, TbPhoto, TbBox,
//   TbChevronLeft, TbChevronRight, TbDotsVertical,
//   TbFileExport, TbUpload, TbCategory,
//   TbPercentage, TbStarFilled, TbGridDots,
//   TbList, TbBell, TbSettings, TbLogout
// } from 'react-icons/tb';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { backendUrl } from '../App';
// import Orders from './Orders/Orders';
// import ProductsList from './Products/ProductsLIst';
// import Users from './Users/Users';
// // import ProductsList from './Pages/Products/ProductsList';
// // import Orders from './Pages/Orders/Orders';
// // import Users from './Pages/Users/Users';


// const STATUS_CONFIG = {
//   pending: { label: 'Pending', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500', icon: <TbClock size={11} /> },
//   shipped: { label: 'Shipped', cls: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', icon: <TbTruck size={11} /> },
//   delivered: { label: 'Delivered', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: <TbCircleCheck size={11} /> },
//   cancelled: { label: 'Cancelled', cls: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500', icon: <TbX size={11} /> },
//   active: { label: 'Active', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: null },
//   inactive: { label: 'Inactive', cls: 'bg-gray-50 text-gray-500 border-gray-200', dot: 'bg-gray-400', icon: null },
// };

// /* ─────────────────────────────────────────────
//    UTILITY COMPONENTS
// ───────────────────────────────────────────── */
// const StatusBadge = ({ status }) => {
//   const s = (status || '').toLowerCase();
//   const cfg = STATUS_CONFIG[s] || STATUS_CONFIG.pending;
//   return (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11.5px] font-semibold ${cfg.cls}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
//       {cfg.label}
//     </span>
//   );
// };

// const MiniStat = ({ icon, label, value, trend, color }) => (
//   <div className={`flex items-center gap-3 p-3 rounded-xl border ${color}`}>
//     <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm flex-shrink-0">{icon}</div>
//     <div>
//       <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
//       <p className="text-[17px] font-extrabold text-gray-900 leading-none mt-0.5">{value}</p>
//     </div>
//     {trend !== undefined && (
//       <div className={`ml-auto flex items-center gap-0.5 text-[11px] font-bold ${trend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
//         {trend >= 0 ? <TbTrendingUp size={13} /> : <TbTrendingDown size={13} />}
//         {Math.abs(trend)}%
//       </div>
//     )}
//   </div>
// );

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
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       title={title}
//       className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const IconBtn = ({ icon, onClick, title, color = 'gray', className = '' }) => {
//   const colors = {
//     gray: 'bg-gray-100 hover:bg-gray-200 text-gray-600',
//     indigo: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600',
//     red: 'bg-red-50 hover:bg-red-100 text-red-500',
//     amber: 'bg-amber-50 hover:bg-amber-100 text-amber-600',
//     green: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600',
//   };
//   return (
//     <button
//       onClick={onClick}
//       title={title}
//       className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${colors[color]} ${className}`}
//     >
//       {icon}
//     </button>
//   );
// };

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

// const ChartTooltip = ({ active, payload, label }) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
//       <p className="font-bold text-gray-900 mb-2">{label}</p>
//       {payload.map((p, i) => (
//         <div key={i} className="flex items-center gap-2 mb-1">
//           <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
//           <span className="text-gray-500">{p.name}:</span>
//           <span className="font-bold text-gray-900">{p.name === 'Revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// const KPICard = ({ icon, label, value, change, changeLabel, color, sparkData }) => {
//   const isPositive = change >= 0;
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
//         <span className={`inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
//           {isPositive ? <TbTrendingUp size={12} /> : <TbTrendingDown size={12} />}
//           {Math.abs(change)}%
//         </span>
//       </div>
//       <p className="text-[13px] text-gray-500 font-medium mb-1">{label}</p>
//       <p className="text-[24px] font-extrabold text-gray-900 tracking-tight">{value}</p>
//       <p className="text-[11.5px] text-gray-400 mt-1">{changeLabel}</p>
//       <div className="mt-3 -mx-1">
//         <ResponsiveContainer width="100%" height={40}>
//           <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
//                 <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} fill={`url(#spark-${label})`} dot={false} />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────────
//    ORDERS — delegates to standalone Orders page
//    ConfirmDialog, OrderDetailModal, OrdersTable
//    have been removed. The Orders tab now renders
//    the full-featured <Orders> page directly.
// ───────────────────────────────────────────── */
// /* ═══════════════════════════════════════════
//    CHARTS SECTION — 100% REAL DATA
// ═══════════════════════════════════════════ */
// const ChartsSection = ({ orders = [], products = [] }) => {
//   const [chartType, setChartType] = useState('area');
//   const [activeMetrics, setActiveMetrics] = useState(['Revenue', 'Orders']);
//   const [period, setPeriod] = useState('monthly'); // monthly | weekly

//   const METRICS = [
//     { key: 'Revenue', color: '#6366f1', label: 'Revenue ($)' },
//     { key: 'Orders', color: '#10b981', label: 'Orders' },
//   ];

//   const toggleMetric = (m) =>
//     setActiveMetrics(p => p.includes(m) ? p.filter(x => x !== m) : [...p, m]);

//   /* ── Build monthly chart data from real orders ── */
//   const monthlyData = useMemo(() => {
//     const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     const map = {};
//     MONTHS.forEach(m => { map[m] = { name: m, Revenue: 0, Orders: 0 }; });

//     orders.forEach(o => {
//       if (!o.date) return;
//       const d = new Date(o.date);
//       const m = MONTHS[d.getMonth()];
//       if (!map[m]) return;
//       map[m].Orders += 1;
//       map[m].Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
//     });

//     return MONTHS.map(m => map[m]);
//   }, [orders]);

//   /* ── Build weekly chart data (last 8 ISO weeks, Mon–Sun) ── */
//   const weeklyData = useMemo(() => {
//     const now = new Date();
//     // Build 8 week buckets going back from current week
//     const weeks = Array.from({ length: 8 }, (_, i) => {
//       // week 7 = current, week 0 = 7 weeks ago
//       const weekOffset = 7 - i;
//       const weekStart = new Date(now);
//       // Go back to start of current week (Monday)
//       const dayOfWeek = (now.getDay() + 6) % 7; // 0=Mon
//       weekStart.setDate(now.getDate() - dayOfWeek - weekOffset * 7);
//       weekStart.setHours(0, 0, 0, 0);
//       const weekEnd = new Date(weekStart);
//       weekEnd.setDate(weekStart.getDate() + 6);
//       weekEnd.setHours(23, 59, 59, 999);
//       // Label: "Jan 6" style
//       const label = weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//       return { name: label, Revenue: 0, Orders: 0, start: weekStart.getTime(), end: weekEnd.getTime() };
//     });

//     orders.forEach(o => {
//       if (!o.date) return;
//       const ts = new Date(o.date).getTime();
//       const w = weeks.find(wk => ts >= wk.start && ts <= wk.end);
//       if (!w) return;
//       w.Orders += 1;
//       w.Revenue += Number(o.finalAmount) || Number(o.amount) || 0;
//     });
//     return weeks.map(({ name, Revenue, Orders }) => ({ name, Revenue, Orders }));
//   }, [orders]);

//   const chartData = period === 'weekly' ? weeklyData : monthlyData;

//   /* ── Pie: category breakdown from real products ── */
//   const PIE_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];
//   const pieData = useMemo(() => {
//     const map = {};
//     products.forEach(p => {
//       const cat = p.category || 'Other';
//       if (!map[cat]) map[cat] = { name: cat, value: 0 };
//       map[cat].value += 1;
//     });
//     const entries = Object.values(map);
//     const total = entries.reduce((s, e) => s + e.value, 0) || 1;
//     return entries
//       .map((e, i) => ({ ...e, pct: Math.round((e.value / total) * 100), color: PIE_COLORS[i % PIE_COLORS.length] }))
//       .sort((a, b) => b.value - a.value);
//   }, [products]);

//   /* ── Top products by sales count from orders ── */
//   const topProducts = useMemo(() => {
//     const map = {};
//     orders.forEach(o => {
//       (o.items || []).forEach(it => {
//         const name = it.name || 'Unknown';
//         if (!map[name]) map[name] = { name, sales: 0 };
//         const q = typeof it.quantity === "object" ? (it.quantity?.quantity ?? 1) : (Number(it.quantity) || 1); map[name].sales += q;
//       });
//     });
//     return Object.values(map)
//       .sort((a, b) => b.sales - a.sales)
//       .slice(0, 6)
//       .map(p => ({ ...p, name: p.name.length > 22 ? p.name.slice(0, 21) + '…' : p.name }));
//   }, [orders]);

//   const hasData = orders.length > 0;
//   const hasProds = products.length > 0;

//   return (
//     <div className="space-y-5">
//       <SectionCard
//         title="Performance Analytics"
//         subtitle={`Revenue & orders — ${period === 'monthly' ? 'monthly' : 'weekly'} breakdown from ${orders.length} real orders`}
//         toolbar={
//           <div className="flex items-center gap-2 flex-wrap">
//             {/* Period toggle */}
//             <div className="flex border border-gray-200 rounded-xl overflow-hidden">
//               {[['monthly', 'Monthly'], ['weekly', 'Weekly']].map(([v, l]) => (
//                 <button key={v} onClick={() => setPeriod(v)}
//                   className={`px-2.5 py-1.5 text-[11.5px] font-semibold transition-colors ${period === v ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
//                   {l}
//                 </button>
//               ))}
//             </div>
//             {/* Chart type toggle */}
//             {['area', 'line', 'bar'].map(t => (
//               <button key={t} onClick={() => setChartType(t)}
//                 className={`px-2.5 py-1.5 rounded-lg text-[12px] font-semibold border capitalize transition-all ${chartType === t ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
//                 {t}
//               </button>
//             ))}
//           </div>
//         }
//       >
//         {/* Metric toggle pills */}
//         <div className="flex items-center gap-4 px-6 pt-3 pb-1 flex-wrap">
//           {METRICS.map(m => (
//             <button key={m.key} onClick={() => toggleMetric(m.key)}
//               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all
//                 ${activeMetrics.includes(m.key) ? 'border-transparent text-white' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
//               style={activeMetrics.includes(m.key) ? { background: m.color } : {}}>
//               <span className="w-2 h-2 rounded-full" style={{ background: activeMetrics.includes(m.key) ? 'rgba(255,255,255,0.7)' : m.color }} />
//               {m.label}
//             </button>
//           ))}
//           {!hasData && (
//             <span className="text-[11.5px] text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full font-semibold">
//               ⚠ No order data yet
//             </span>
//           )}
//         </div>

//         <div className="px-4 pb-5 pt-2">
//           <ResponsiveContainer width="100%" height={320}>
//             {chartType === 'bar' ? (
//               <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
//                   <Bar key={m.key} dataKey={m.key} fill={m.color} radius={[4, 4, 0, 0]} />
//                 )}
//               </BarChart>
//             ) : chartType === 'line' ? (
//               <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m =>
//                   <Line key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                 )}
//               </LineChart>
//             ) : (
//               <AreaChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//                 <defs>
//                   {METRICS.map(m => (
//                     <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor={m.color} stopOpacity={0.15} />
//                       <stop offset="95%" stopColor={m.color} stopOpacity={0} />
//                     </linearGradient>
//                   ))}
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTooltip />} />
//                 {METRICS.filter(m => activeMetrics.includes(m.key)).map(m => (
//                   <Area key={m.key} type="monotone" dataKey={m.key} stroke={m.color} strokeWidth={2.5}
//                     fill={`url(#grad-${m.key})`} dot={{ r: 3, fill: m.color }} activeDot={{ r: 5 }} />
//                 ))}
//               </AreaChart>
//             )}
//           </ResponsiveContainer>
//         </div>
//       </SectionCard>

//       {/* ── Secondary charts row ── */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//         {/* Pie: real category breakdown */}
//         <SectionCard title="Sales by Category" subtitle={`From ${products.length} products`}>
//           {!hasProds ? (
//             <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No product data yet</div>
//           ) : (
//             <div className="flex items-center justify-center gap-6 p-5 flex-wrap">
//               <PieChart width={180} height={180}>
//                 <Pie data={pieData} cx={85} cy={85} innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
//                   {pieData.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
//                 </Pie>
//                 <Tooltip formatter={(v, n, p) => [`${p.payload.pct}% (${v} products)`, p.payload.name]} />
//               </PieChart>
//               <div className="space-y-3">
//                 {pieData.map(d => (
//                   <div key={d.name} className="flex items-center gap-3">
//                     <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
//                     <div>
//                       <p className="text-[13px] font-semibold text-gray-800">{d.name}</p>
//                       <p className="text-[12px] text-gray-400">{d.pct}% · {d.value} products</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </SectionCard>

//         {/* Top products from real order items */}
//         <SectionCard title="Top Products by Orders" subtitle="Items ordered most across all orders">
//           {topProducts.length === 0 ? (
//             <div className="flex items-center justify-center py-12 text-gray-400 text-[13px]">No order data yet</div>
//           ) : (
//             <div className="p-5">
//               <ResponsiveContainer width="100%" height={220}>
//                 <BarChart layout="vertical" data={topProducts} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
//                   <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
//                   <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} axisLine={false} tickLine={false} width={140} />
//                   <Tooltip formatter={(v) => [`${v} units`, 'Ordered']} />
//                   <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
//                     {topProducts.map((_, i) => (
//                       <Cell key={i} fill={['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'][i % 6]} />
//                     ))}
//                   </Bar>
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//         </SectionCard>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    ACTIVITY FEED — REAL DATA
// ═══════════════════════════════════════════ */
// const ActivityFeed = ({ orders = [], products = [] }) => {
//   /* Build a real activity timeline from the most recent orders and stock alerts */
//   const activities = useMemo(() => {
//     const items = [];

//     // Recent orders (last 5)
//     const recent = [...orders]
//       .sort((a, b) => new Date(b.date) - new Date(a.date))
//       .slice(0, 5);

//     recent.forEach(o => {
//       const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
//       const amount = Number(o.finalAmount) || Number(o.amount) || 0;
//       const ts = o.date ? new Date(o.date) : null;

//       if (o.status === 'Delivered') {
//         items.push({
//           icon: <TbCircleCheck size={14} className="text-emerald-600" />,
//           bg: 'bg-emerald-50',
//           text: `Order delivered to ${name}`,
//           time: ts,
//           type: 'delivery',
//         });
//       } else if (o.status === 'Shipped') {
//         items.push({
//           icon: <TbTruck size={14} className="text-blue-600" />,
//           bg: 'bg-blue-50',
//           text: `Order shipped to ${name}`,
//           time: ts,
//           type: 'shipped',
//         });
//       } else if (o.status === 'Cancelled') {
//         items.push({
//           icon: <TbX size={14} className="text-red-500" />,
//           bg: 'bg-red-50',
//           text: `Order cancelled by ${name}`,
//           time: ts,
//           type: 'cancel',
//         });
//       } else {
//         items.push({
//           icon: <TbShoppingCart size={14} className="text-indigo-600" />,
//           bg: 'bg-indigo-50',
//           text: `New order $${amount.toLocaleString('en-US')} from ${name}`,
//           time: ts,
//           type: 'order',
//         });
//       }

//       // Payment events
//       if (o.payment && amount > 0) {
//         items.push({
//           icon: <TbCurrencyDollar size={14} className="text-emerald-600" />,
//           bg: 'bg-emerald-50',
//           text: `Payment $${amount.toLocaleString('en-US')} received from ${name}`,
//           time: ts,
//           type: 'payment',
//         });
//       }
//     });

//     // Stock alerts from products
//     products
//       .filter(p => {
//         const stock = Array.isArray(p.sizes)
//           ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
//           : Number(p.stock) || 0;
//         return stock === 0 || stock <= 5;
//       })
//       .slice(0, 3)
//       .forEach(p => {
//         const stock = Array.isArray(p.sizes)
//           ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
//           : Number(p.stock) || 0;
//         items.push({
//           icon: <TbAlertTriangle size={14} className={stock === 0 ? 'text-red-500' : 'text-amber-600'} />,
//           bg: stock === 0 ? 'bg-red-50' : 'bg-amber-50',
//           text: stock === 0
//             ? `"${p.name}" is out of stock`
//             : `"${p.name}" — only ${stock} left`,
//           time: null,
//           type: 'stock',
//         });
//       });

//     // Sort by time descending (stock alerts have null time — push to end)
//     return items
//       .sort((a, b) => {
//         if (!a.time && !b.time) return 0;
//         if (!a.time) return 1;
//         if (!b.time) return -1;
//         return b.time - a.time;
//       })
//       .slice(0, 8);
//   }, [orders, products]);

//   const fmtRel = (ts) => {
//     if (!ts) return 'Stock alert';
//     const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
//     if (m < 1) return 'just now';
//     if (m < 60) return `${m}m ago`;
//     const h = Math.floor(m / 60);
//     if (h < 24) return `${h}h ago`;
//     return `${Math.floor(h / 24)}d ago`;
//   };

//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
//       <div className="px-5 py-4 border-b border-gray-50">
//         <h2 className="text-[15px] font-bold text-gray-900">Activity Feed</h2>
//         <p className="text-[12px] text-gray-400 mt-0.5">Live store events from real orders</p>
//       </div>

//       {activities.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-12 text-gray-400 gap-2">
//           <TbShoppingCart size={28} className="opacity-30" />
//           <p className="text-[13px]">No activity yet</p>
//         </div>
//       ) : (
//         <div className="divide-y divide-gray-50">
//           {activities.map((a, i) => (
//             <div key={i} className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
//               <div className={`w-7 h-7 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
//                 {a.icon}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-[13px] text-gray-700 font-medium leading-snug">{a.text}</p>
//                 <p className="text-[11.5px] text-gray-400 mt-0.5 flex items-center gap-1">
//                   <TbClock size={11} /> {fmtRel(a.time)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="px-5 py-3 border-t border-gray-50">
//         <p className="text-[11.5px] text-gray-400">{activities.length} recent event{activities.length !== 1 ? 's' : ''}</p>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════
//    MAIN DASHBOARD — REAL DATA
// ═══════════════════════════════════════════ */
// const Dashboard = ({ token }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [greeting, setGreeting] = useState('Good Morning');
//   const [liveTime, setLiveTime] = useState(new Date());

//   // All real data fetched once and shared down
//   const [orders, setOrders] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingO, setLoadingO] = useState(true);
//   const [loadingP, setLoadingP] = useState(true);

//   useEffect(() => {
//     const h = new Date().getHours();
//     setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');
//     const timer = setInterval(() => setLiveTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   /* ── Fetch orders ── */
//   const fetchOrders = useCallback(async () => {
//     if (!token) return;
//     setLoadingO(true);
//     try {
//       const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
//       if (res.data.success) setOrders((res.data.orders || []).slice().reverse());
//       else toast.error(res.data.message);
//     } catch (e) { toast.error(e?.message || 'Failed to load orders'); }
//     finally { setLoadingO(false); }
//   }, [token]);

//   /* ── Fetch products ── */
//   const fetchProducts = useCallback(async () => {
//     if (!token) return;
//     setLoadingP(true);
//     try {
//       const res = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
//       if (res.data.success) setProducts(res.data.products || []);
//       else toast.error(res.data.message);
//     } catch (e) { toast.error(e?.message || 'Failed to load products'); }
//     finally { setLoadingP(false); }
//   }, [token]);

//   const refreshAll = useCallback(() => {
//     fetchOrders();
//     fetchProducts();
//   }, [fetchOrders, fetchProducts]);

//   useEffect(() => { refreshAll(); }, [refreshAll]);

//   /* ── Derived KPI stats from real data ── */
//   const kpi = useMemo(() => {
//     const now = new Date();
//     const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     const curY = now.getFullYear();
//     const curM = now.getMonth();

//     // Date helpers
//     const isToday = (ts) => {
//       const d = new Date(ts);
//       return d.getDate() === now.getDate() && d.getMonth() === curM && d.getFullYear() === curY;
//     };
//     const thisMonthStart = new Date(curY, curM, 1);
//     const prevMonthStart = new Date(curY, curM - 1, 1);
//     const prevMonthEnd = new Date(curY, curM, 0, 23, 59, 59);

//     const amt = (o) => Number(o.finalAmount) || Number(o.amount) || 0;
//     const statusIs = (o, ...ss) => ss.some(s => (o.status || '').toLowerCase() === s.toLowerCase());

//     // Partition orders by time window
//     const todayOrders = orders.filter(o => isToday(o.date));
//     const thisMonthOrders = orders.filter(o => new Date(o.date) >= thisMonthStart);
//     const prevMonthOrders = orders.filter(o => {
//       const d = new Date(o.date);
//       return d >= prevMonthStart && d <= prevMonthEnd;
//     });

//     // Revenue
//     // GMV = total value of ALL orders placed (including unpaid)
//     // paidRevenue = only orders where payment is confirmed
//     const totalGMV = orders.reduce((s, o) => s + amt(o), 0);
//     const totalRevenue = totalGMV;   // show GMV as headline (all orders)
//     const paidRevenue = orders.filter(o => o.payment).reduce((s, o) => s + amt(o), 0);
//     const todayRevenue = todayOrders.reduce((s, o) => s + amt(o), 0);
//     const thisMonthRev = thisMonthOrders.reduce((s, o) => s + amt(o), 0);
//     const prevMonthRev = prevMonthOrders.reduce((s, o) => s + amt(o), 0);
//     const revenueChange = prevMonthRev > 0 ? Math.round(((thisMonthRev - prevMonthRev) / prevMonthRev) * 100)
//       : thisMonthRev > 0 ? 100 : 0;
//     const ordersChange = prevMonthOrders.length > 0
//       ? Math.round(((thisMonthOrders.length - prevMonthOrders.length) / prevMonthOrders.length) * 100)
//       : thisMonthOrders.length > 0 ? 100 : 0;

//     // Status counts — match real status strings used in Orders.jsx
//     const shipped = orders.filter(o => statusIs(o, 'Shipped')).length;
//     const delivered = orders.filter(o => statusIs(o, 'Delivered')).length;
//     const cancelled = orders.filter(o => statusIs(o, 'Cancelled')).length;
//     const pending = orders.filter(o => statusIs(o, 'Order Placed', 'Packing', 'pending')).length;
//     const inTransit = orders.filter(o => statusIs(o, 'Shipped', 'Out for delivery')).length;

//     // Stock helpers
//     const getStock = (p) => Array.isArray(p.sizes)
//       ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
//       : Number(p.stock) || 0;
//     const outOfStock = products.filter(p => getStock(p) === 0).length;
//     const lowStock = products.filter(p => { const st = getStock(p); return st > 0 && st <= 10; }).length;

//     // Month-over-month trend for mini stats
//     const shippedPrev = prevMonthOrders.filter(o => statusIs(o, 'Shipped')).length;
//     const deliveredPrev = prevMonthOrders.filter(o => statusIs(o, 'Delivered')).length;
//     const cancelledPrev = prevMonthOrders.filter(o => statusIs(o, 'Cancelled')).length;
//     const pendingPrev = prevMonthOrders.filter(o => statusIs(o, 'Order Placed', 'Packing', 'pending')).length;
//     const pct = (cur, prev) => prev > 0 ? Math.round(((cur - prev) / prev) * 100) : cur > 0 ? 100 : 0;

//     // ── Spark lines: rolling 12 months for current calendar year ──
//     // revenueByMonth: cumulative paid revenue per calendar month
//     const revenueByMonth = MONTHS.map((_, mi) => ({
//       v: orders
//         .filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi)
//         .reduce((s, o) => s + amt(o), 0),
//     }));

//     // ordersByMonth: order count per calendar month this year
//     const ordersByMonth = MONTHS.map((_, mi) => ({
//       v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).length,
//     }));

//     // deliveredByMonth: delivered count per month this year (for "Delivered" KPI spark)
//     const deliveredByMonth = MONTHS.map((_, mi) => ({
//       v: orders.filter(o =>
//         statusIs(o, 'Delivered') &&
//         new Date(o.date).getFullYear() === curY &&
//         new Date(o.date).getMonth() === mi
//       ).length,
//     }));

//     // productStockByCategory: stock health per product category (for Products KPI spark)
//     const catStock = {};
//     products.forEach(p => {
//       const cat = p.category || 'Other';
//       if (!catStock[cat]) catStock[cat] = 0;
//       catStock[cat] += getStock(p);
//     });
//     const productSparkData = Object.values(catStock).length > 0
//       ? Object.values(catStock).map(v => ({ v }))
//       : MONTHS.map(() => ({ v: products.length }));

//     return {
//       totalRevenue, paidRevenue, todayRevenue, thisMonthRev, prevMonthRev, revenueChange,
//       totalOrders: orders.length, todayOrders: todayOrders.length,
//       ordersChange,
//       totalProducts: products.length, outOfStock, lowStock,
//       shipped, delivered, cancelled, pending, inTransit,
//       shippedTrend: pct(inTransit, shippedPrev),
//       deliveredTrend: pct(delivered, deliveredPrev),
//       cancelledTrend: pct(cancelled, cancelledPrev),
//       pendingTrend: pct(pending, pendingPrev),
//       revenueByMonth, ordersByMonth, deliveredByMonth, productSparkData,
//     };
//   }, [orders, products]);

//   const TABS = [
//     { id: 'overview', label: 'Overview', icon: <TbChartBar size={15} /> },
//     { id: 'orders', label: 'Orders', icon: <TbShoppingCart size={15} /> },
//     { id: 'products', label: 'Products', icon: <TbPackage size={15} /> },
//     { id: 'users', label: 'Users', icon: <TbUsers size={15} /> },
//     { id: 'analytics', label: 'Analytics', icon: <TbChartPie size={15} /> },
//   ];

//   const loading = loadingO || loadingP;

//   const KPI_CARDS = [
//     {
//       icon: <TbCurrencyDollar size={20} className="text-indigo-600" />,
//       label: 'Total GMV',
//       value: loading ? '…' : `$${kpi.totalRevenue.toLocaleString('en-US')}`,
//       change: kpi.revenueChange,
//       changeLabel: `$${kpi.paidRevenue.toLocaleString('en-US')} collected · $${kpi.todayRevenue.toLocaleString('en-US')} today`,
//       color: 'bg-indigo-50',
//       sparkData: kpi.revenueByMonth,
//     },
//     {
//       icon: <TbShoppingCart size={20} className="text-emerald-600" />,
//       label: 'Total Orders',
//       value: loading ? '…' : kpi.totalOrders.toLocaleString(),
//       change: kpi.ordersChange,
//       changeLabel: `${kpi.todayOrders} today · ${kpi.ordersChange >= 0 ? '+' : ''}${kpi.ordersChange}% vs last month`,
//       color: 'bg-emerald-50',
//       sparkData: kpi.ordersByMonth,
//     },
//     {
//       icon: <TbPackage size={20} className="text-amber-600" />,
//       label: 'Products',
//       value: loading ? '…' : kpi.totalProducts.toLocaleString(),
//       change: kpi.outOfStock > 0 ? -kpi.outOfStock : 0,
//       changeLabel: `${kpi.outOfStock} out of stock · ${kpi.lowStock} low stock`,
//       color: 'bg-amber-50',
//       sparkData: kpi.productSparkData,
//     },
//     {
//       icon: <TbCircleCheck size={20} className="text-violet-600" />,
//       label: 'Delivered',
//       value: loading ? '…' : kpi.delivered.toLocaleString(),
//       change: kpi.deliveredTrend,
//       changeLabel: `${kpi.pending} pending · ${kpi.cancelled} cancelled`,
//       color: 'bg-violet-50',
//       sparkData: kpi.deliveredByMonth,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f7f7f5]">
//       {/* BANNER */}
//       <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-6 py-6 mb-6 mt-16">
//         <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <p className="text-indigo-200 text-[13px] font-medium mb-1 flex items-center gap-2">
//               <TbCalendar size={13} /> {liveTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} ·
//               <TbClock size={13} /> {liveTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//             </p>
//             <h1 className="text-[26px] font-extrabold text-white tracking-tight">{greeting}, Admin 👋</h1>
//             <p className="text-indigo-200 text-[14px] mt-1">
//               {loading ? 'Loading your store data…' : `${kpi.totalOrders} orders · $${kpi.totalRevenue.toLocaleString('en-US')} GMV · $${kpi.paidRevenue.toLocaleString('en-US')} collected`}
//             </p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
//               <p className="text-[11px] text-indigo-200 font-medium">Today's Revenue</p>
//               <p className="text-[20px] font-extrabold">
//                 {loading ? '…' : `$${kpi.todayRevenue.toLocaleString('en-US')}`}
//               </p>
//               <p className="text-[11px] text-indigo-200 flex items-center gap-1">
//                 {kpi.todayOrders} order{kpi.todayOrders !== 1 ? 's' : ''} today
//               </p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Btn variant="primary" size="sm" className="!bg-white !text-indigo-700 !border-white hover:!bg-indigo-50"
//                 onClick={() => toast.info('Go to Products → Add Product')}>
//                 <TbPlus size={14} /> Add Product
//               </Btn>
//               <Btn size="sm" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
//                 onClick={refreshAll} disabled={loading}>
//                 <TbRefresh size={14} className={loading ? 'animate-spin' : ''} /> Refresh
//               </Btn>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 pb-10">
//         {/* TABS */}
//         <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm mb-6 w-fit overflow-x-auto">
//           {TABS.map(t => (
//             <button key={t.id} onClick={() => setActiveTab(t.id)}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all whitespace-nowrap
//                 ${activeTab === t.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
//               {t.icon} {t.label}
//             </button>
//           ))}
//         </div>

//         {/* OVERVIEW TAB */}
//         {activeTab === 'overview' && (
//           <div className="space-y-6">
//             {/* KPI cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//               {KPI_CARDS.map((card, i) => <KPICard key={i} {...card} />)}
//             </div>

//             {/* Mini order status stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               <MiniStat icon={<TbTruck size={16} className="text-blue-600" />} label="In Transit" value={loading ? '…' : kpi.inTransit} color="border-blue-100 bg-blue-50/50" trend={loading ? undefined : kpi.shippedTrend} />
//               <MiniStat icon={<TbCircleCheck size={16} className="text-emerald-600" />} label="Delivered" value={loading ? '…' : kpi.delivered} color="border-emerald-100 bg-emerald-50/50" trend={loading ? undefined : kpi.deliveredTrend} />
//               <MiniStat icon={<TbClock size={16} className="text-amber-600" />} label="Pending" value={loading ? '…' : kpi.pending} color="border-amber-100 bg-amber-50/50" trend={loading ? undefined : kpi.pendingTrend} />
//               <MiniStat icon={<TbX size={16} className="text-red-500" />} label="Cancelled" value={loading ? '…' : kpi.cancelled} color="border-red-100 bg-red-50/50" trend={loading ? undefined : kpi.cancelledTrend} />
//             </div>

//             {/* Charts + Activity Feed */}
//             <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
//               <ChartsSection orders={orders} products={products} />
//               <ActivityFeed orders={orders} products={products} />
//             </div>
//           </div>
//         )}

//         {activeTab === 'orders' && <Orders token={token} />}
//         {activeTab === 'products' && <ProductsList token={token} />}
//         {activeTab === 'users' && <Users token={token} />}
//         {activeTab === 'analytics' && (
//           <ChartsSection orders={orders} products={products} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import {
  TbShoppingCart, TbUsers, TbCurrencyDollar, TbPackage,
  TbTrendingUp, TbTrendingDown, TbPlus, TbDownload,
  TbEdit, TbEye, TbTrash, TbSearch,
  TbChevronDown, TbChevronUp, TbRefresh,
  TbArrowRight, TbCheck, TbX, TbChartBar,
  TbCalendar, TbStar, TbAlertTriangle, TbCircleCheck,
  TbClock, TbTruck, TbChartPie, TbFilter,
  TbSortAscending, TbSortDescending, TbPrinter,
  TbCopy, TbInfoCircle, TbArrowUp, TbArrowDown,
  TbBuildingStore, TbTag, TbPhoto, TbBox,
  TbChevronLeft, TbChevronRight, TbDotsVertical,
  TbFileExport, TbUpload, TbCategory,
  TbPercentage, TbStarFilled, TbGridDots,
  TbList, TbBell, TbSettings, TbLogout
} from 'react-icons/tb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
import Orders from './Orders/Orders';
import ProductsList from './Products/ProductsLIst';
import Users from './Users/Users';
import Analytics from './Analytics/Analytics';
// import ProductsList from './Pages/Products/ProductsList';
// import Orders from './Pages/Orders/Orders';
// import Users from './Pages/Users/Users';
// import Analytics from './Analytics/Analytics';



const STATUS_CONFIG = {
  pending: { label: 'Pending', cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500', icon: <TbClock size={11} /> },
  shipped: { label: 'Shipped', cls: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', icon: <TbTruck size={11} /> },
  delivered: { label: 'Delivered', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: <TbCircleCheck size={11} /> },
  cancelled: { label: 'Cancelled', cls: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500', icon: <TbX size={11} /> },
  active: { label: 'Active', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', icon: null },
  inactive: { label: 'Inactive', cls: 'bg-gray-50 text-gray-500 border-gray-200', dot: 'bg-gray-400', icon: null },
};

/* ─────────────────────────────────────────────
   UTILITY COMPONENTS
───────────────────────────────────────────── */
const StatusBadge = ({ status }) => {
  const s = (status || '').toLowerCase();
  const cfg = STATUS_CONFIG[s] || STATUS_CONFIG.pending;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11.5px] font-semibold ${cfg.cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
};

const MiniStat = ({ icon, label, value, trend, color }) => (
  <div className={`flex items-center gap-3 p-3 rounded-xl border ${color}`}>
    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm flex-shrink-0">{icon}</div>
    <div>
      <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-[17px] font-extrabold text-gray-900 leading-none mt-0.5">{value}</p>
    </div>
    {trend !== undefined && (
      <div className={`ml-auto flex items-center gap-0.5 text-[11px] font-bold ${trend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
        {trend >= 0 ? <TbTrendingUp size={13} /> : <TbTrendingDown size={13} />}
        {Math.abs(trend)}%
      </div>
    )}
  </div>
);

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
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

const IconBtn = ({ icon, onClick, title, color = 'gray', className = '' }) => {
  const colors = {
    gray: 'bg-gray-100 hover:bg-gray-200 text-gray-600',
    indigo: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600',
    red: 'bg-red-50 hover:bg-red-100 text-red-500',
    amber: 'bg-amber-50 hover:bg-amber-100 text-amber-600',
    green: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600',
  };
  return (
    <button
      onClick={onClick}
      title={title}
      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${colors[color]} ${className}`}
    >
      {icon}
    </button>
  );
};

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

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-3 text-[12.5px]">
      <p className="font-bold text-gray-900 mb-2">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 mb-1">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
          <span className="text-gray-500">{p.name}:</span>
          <span className="font-bold text-gray-900">{p.name === 'Revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

const KPICard = ({ icon, label, value, change, changeLabel, color, sparkData }) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
        <span className={`inline-flex items-center gap-1 text-[12px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
          {isPositive ? <TbTrendingUp size={12} /> : <TbTrendingDown size={12} />}
          {Math.abs(change)}%
        </span>
      </div>
      <p className="text-[13px] text-gray-500 font-medium mb-1">{label}</p>
      <p className="text-[24px] font-extrabold text-gray-900 tracking-tight">{value}</p>
      <p className="text-[11.5px] text-gray-400 mt-1">{changeLabel}</p>
      <div className="mt-3 -mx-1">
        <ResponsiveContainer width="100%" height={40}>
          <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={2} fill={`url(#spark-${label})`} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   ORDERS — delegates to standalone Orders page  
   ConfirmDialog, OrderDetailModal, OrdersTable  
   have been removed. The Orders tab now renders 
   the full-featured <Orders> page directly.     
───────────────────────────────────────────── */
/* ═══════════════════════════════════════════
   ACTIVITY FEED — REAL DATA
═══════════════════════════════════════════ */
const ActivityFeed = ({ orders = [], products = [] }) => {
  /* Build a real activity timeline from the most recent orders and stock alerts */
  const activities = useMemo(() => {
    const items = [];

    // Recent orders (last 5)
    const recent = [...orders]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    recent.forEach(o => {
      const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
      const amount = Number(o.finalAmount) || Number(o.amount) || 0;
      const ts = o.date ? new Date(o.date) : null;

      if (o.status === 'Delivered') {
        items.push({
          icon: <TbCircleCheck size={14} className="text-emerald-600" />,
          bg: 'bg-emerald-50',
          text: `Order delivered to ${name}`,
          time: ts,
          type: 'delivery',
        });
      } else if (o.status === 'Shipped') {
        items.push({
          icon: <TbTruck size={14} className="text-blue-600" />,
          bg: 'bg-blue-50',
          text: `Order shipped to ${name}`,
          time: ts,
          type: 'shipped',
        });
      } else if (o.status === 'Cancelled') {
        items.push({
          icon: <TbX size={14} className="text-red-500" />,
          bg: 'bg-red-50',
          text: `Order cancelled by ${name}`,
          time: ts,
          type: 'cancel',
        });
      } else {
        items.push({
          icon: <TbShoppingCart size={14} className="text-indigo-600" />,
          bg: 'bg-indigo-50',
          text: `New order $${amount.toLocaleString('en-US')} from ${name}`,
          time: ts,
          type: 'order',
        });
      }

      // Payment events
      if (o.payment && amount > 0) {
        items.push({
          icon: <TbCurrencyDollar size={14} className="text-emerald-600" />,
          bg: 'bg-emerald-50',
          text: `Payment $${amount.toLocaleString('en-US')} received from ${name}`,
          time: ts,
          type: 'payment',
        });
      }
    });

    // Stock alerts from products
    products
      .filter(p => {
        const stock = Array.isArray(p.sizes)
          ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
          : Number(p.stock) || 0;
        return stock === 0 || stock <= 5;
      })
      .slice(0, 3)
      .forEach(p => {
        const stock = Array.isArray(p.sizes)
          ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
          : Number(p.stock) || 0;
        items.push({
          icon: <TbAlertTriangle size={14} className={stock === 0 ? 'text-red-500' : 'text-amber-600'} />,
          bg: stock === 0 ? 'bg-red-50' : 'bg-amber-50',
          text: stock === 0
            ? `"${p.name}" is out of stock`
            : `"${p.name}" — only ${stock} left`,
          time: null,
          type: 'stock',
        });
      });

    // Sort by time descending (stock alerts have null time — push to end)
    return items
      .sort((a, b) => {
        if (!a.time && !b.time) return 0;
        if (!a.time) return 1;
        if (!b.time) return -1;
        return b.time - a.time;
      })
      .slice(0, 8);
  }, [orders, products]);

  const fmtRel = (ts) => {
    if (!ts) return 'Stock alert';
    const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
    if (m < 1) return 'just now';
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-50">
        <h2 className="text-[15px] font-bold text-gray-900">Activity Feed</h2>
        <p className="text-[12px] text-gray-400 mt-0.5">Live store events from real orders</p>
      </div>

      {activities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400 gap-2">
          <TbShoppingCart size={28} className="opacity-30" />
          <p className="text-[13px]">No activity yet</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-50">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
              <div className={`w-7 h-7 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                {a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-gray-700 font-medium leading-snug">{a.text}</p>
                <p className="text-[11.5px] text-gray-400 mt-0.5 flex items-center gap-1">
                  <TbClock size={11} /> {fmtRel(a.time)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="px-5 py-3 border-t border-gray-50">
        <p className="text-[11.5px] text-gray-400">{activities.length} recent event{activities.length !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   MAIN DASHBOARD — REAL DATA
═══════════════════════════════════════════ */
const Dashboard = ({ token }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [greeting, setGreeting] = useState('Good Morning');
  const [liveTime, setLiveTime] = useState(new Date());

  // All real data fetched once and shared down
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingO, setLoadingO] = useState(true);
  const [loadingP, setLoadingP] = useState(true);

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');
    const timer = setInterval(() => setLiveTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* ── Fetch orders ── */
  const fetchOrders = useCallback(async () => {
    if (!token) return;
    setLoadingO(true);
    try {
      const res = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
      if (res.data.success) setOrders((res.data.orders || []).slice().reverse());
      else toast.error(res.data.message);
    } catch (e) { toast.error(e?.message || 'Failed to load orders'); }
    finally { setLoadingO(false); }
  }, [token]);

  /* ── Fetch products ── */
  const fetchProducts = useCallback(async () => {
    if (!token) return;
    setLoadingP(true);
    try {
      const res = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
      if (res.data.success) setProducts(res.data.products || []);
      else toast.error(res.data.message);
    } catch (e) { toast.error(e?.message || 'Failed to load products'); }
    finally { setLoadingP(false); }
  }, [token]);

  const refreshAll = useCallback(() => {
    fetchOrders();
    fetchProducts();
  }, [fetchOrders, fetchProducts]);

  useEffect(() => { refreshAll(); }, [refreshAll]);

  /* ── Derived KPI stats from real data ── */
  const kpi = useMemo(() => {
    const now = new Date();
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const curY = now.getFullYear();
    const curM = now.getMonth();

    // Date helpers
    const isToday = (ts) => {
      const d = new Date(ts);
      return d.getDate() === now.getDate() && d.getMonth() === curM && d.getFullYear() === curY;
    };
    const thisMonthStart = new Date(curY, curM, 1);
    const prevMonthStart = new Date(curY, curM - 1, 1);
    const prevMonthEnd = new Date(curY, curM, 0, 23, 59, 59);

    const amt = (o) => Number(o.finalAmount) || Number(o.amount) || 0;
    const statusIs = (o, ...ss) => ss.some(s => (o.status || '').toLowerCase() === s.toLowerCase());

    // Partition orders by time window
    const todayOrders = orders.filter(o => isToday(o.date));
    const thisMonthOrders = orders.filter(o => new Date(o.date) >= thisMonthStart);
    const prevMonthOrders = orders.filter(o => {
      const d = new Date(o.date);
      return d >= prevMonthStart && d <= prevMonthEnd;
    });

    // Revenue
    // GMV = total value of ALL orders placed (including unpaid)
    // paidRevenue = only orders where payment is confirmed
    const totalGMV = orders.reduce((s, o) => s + amt(o), 0);
    const totalRevenue = totalGMV;   // show GMV as headline (all orders)
    const paidRevenue = orders.filter(o => o.payment).reduce((s, o) => s + amt(o), 0);
    const todayRevenue = todayOrders.reduce((s, o) => s + amt(o), 0);
    const thisMonthRev = thisMonthOrders.reduce((s, o) => s + amt(o), 0);
    const prevMonthRev = prevMonthOrders.reduce((s, o) => s + amt(o), 0);
    const revenueChange = prevMonthRev > 0 ? Math.round(((thisMonthRev - prevMonthRev) / prevMonthRev) * 100)
      : thisMonthRev > 0 ? 100 : 0;
    const ordersChange = prevMonthOrders.length > 0
      ? Math.round(((thisMonthOrders.length - prevMonthOrders.length) / prevMonthOrders.length) * 100)
      : thisMonthOrders.length > 0 ? 100 : 0;

    // Status counts — match real status strings used in Orders.jsx
    const shipped = orders.filter(o => statusIs(o, 'Shipped')).length;
    const delivered = orders.filter(o => statusIs(o, 'Delivered')).length;
    const cancelled = orders.filter(o => statusIs(o, 'Cancelled')).length;
    const pending = orders.filter(o => statusIs(o, 'Order Placed', 'Packing', 'pending')).length;
    const inTransit = orders.filter(o => statusIs(o, 'Shipped', 'Out for delivery')).length;

    // Stock helpers
    const getStock = (p) => Array.isArray(p.sizes)
      ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
      : Number(p.stock) || 0;
    const outOfStock = products.filter(p => getStock(p) === 0).length;
    const lowStock = products.filter(p => { const st = getStock(p); return st > 0 && st <= 10; }).length;

    // Month-over-month trend for mini stats
    const shippedPrev = prevMonthOrders.filter(o => statusIs(o, 'Shipped')).length;
    const deliveredPrev = prevMonthOrders.filter(o => statusIs(o, 'Delivered')).length;
    const cancelledPrev = prevMonthOrders.filter(o => statusIs(o, 'Cancelled')).length;
    const pendingPrev = prevMonthOrders.filter(o => statusIs(o, 'Order Placed', 'Packing', 'pending')).length;
    const pct = (cur, prev) => prev > 0 ? Math.round(((cur - prev) / prev) * 100) : cur > 0 ? 100 : 0;

    // ── Spark lines: rolling 12 months for current calendar year ──
    // revenueByMonth: cumulative paid revenue per calendar month
    const revenueByMonth = MONTHS.map((_, mi) => ({
      v: orders
        .filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi)
        .reduce((s, o) => s + amt(o), 0),
    }));

    // ordersByMonth: order count per calendar month this year
    const ordersByMonth = MONTHS.map((_, mi) => ({
      v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).length,
    }));

    // deliveredByMonth: delivered count per month this year (for "Delivered" KPI spark)
    const deliveredByMonth = MONTHS.map((_, mi) => ({
      v: orders.filter(o =>
        statusIs(o, 'Delivered') &&
        new Date(o.date).getFullYear() === curY &&
        new Date(o.date).getMonth() === mi
      ).length,
    }));

    // productStockByCategory: stock health per product category (for Products KPI spark)
    const catStock = {};
    products.forEach(p => {
      const cat = p.category || 'Other';
      if (!catStock[cat]) catStock[cat] = 0;
      catStock[cat] += getStock(p);
    });
    const productSparkData = Object.values(catStock).length > 0
      ? Object.values(catStock).map(v => ({ v }))
      : MONTHS.map(() => ({ v: products.length }));

    return {
      totalRevenue, paidRevenue, todayRevenue, thisMonthRev, prevMonthRev, revenueChange,
      totalOrders: orders.length, todayOrders: todayOrders.length,
      ordersChange,
      totalProducts: products.length, outOfStock, lowStock,
      shipped, delivered, cancelled, pending, inTransit,
      shippedTrend: pct(inTransit, shippedPrev),
      deliveredTrend: pct(delivered, deliveredPrev),
      cancelledTrend: pct(cancelled, cancelledPrev),
      pendingTrend: pct(pending, pendingPrev),
      revenueByMonth, ordersByMonth, deliveredByMonth, productSparkData,
    };
  }, [orders, products]);

  const TABS = [
    { id: 'overview', label: 'Overview', icon: <TbChartBar size={15} /> },
    { id: 'orders', label: 'Orders', icon: <TbShoppingCart size={15} /> },
    { id: 'products', label: 'Products', icon: <TbPackage size={15} /> },
    { id: 'users', label: 'Users', icon: <TbUsers size={15} /> },
    { id: 'analytics', label: 'Analytics', icon: <TbChartPie size={15} /> },
  ];

  const loading = loadingO || loadingP;

  const KPI_CARDS = [
    {
      icon: <TbCurrencyDollar size={20} className="text-indigo-600" />,
      label: 'Total GMV',
      value: loading ? '…' : `$${kpi.totalRevenue.toLocaleString('en-US')}`,
      change: kpi.revenueChange,
      changeLabel: `$${kpi.paidRevenue.toLocaleString('en-US')} collected · $${kpi.todayRevenue.toLocaleString('en-US')} today`,
      color: 'bg-indigo-50',
      sparkData: kpi.revenueByMonth,
    },
    {
      icon: <TbShoppingCart size={20} className="text-emerald-600" />,
      label: 'Total Orders',
      value: loading ? '…' : kpi.totalOrders.toLocaleString(),
      change: kpi.ordersChange,
      changeLabel: `${kpi.todayOrders} today · ${kpi.ordersChange >= 0 ? '+' : ''}${kpi.ordersChange}% vs last month`,
      color: 'bg-emerald-50',
      sparkData: kpi.ordersByMonth,
    },
    {
      icon: <TbPackage size={20} className="text-amber-600" />,
      label: 'Products',
      value: loading ? '…' : kpi.totalProducts.toLocaleString(),
      change: kpi.outOfStock > 0 ? -kpi.outOfStock : 0,
      changeLabel: `${kpi.outOfStock} out of stock · ${kpi.lowStock} low stock`,
      color: 'bg-amber-50',
      sparkData: kpi.productSparkData,
    },
    {
      icon: <TbCircleCheck size={20} className="text-violet-600" />,
      label: 'Delivered',
      value: loading ? '…' : kpi.delivered.toLocaleString(),
      change: kpi.deliveredTrend,
      changeLabel: `${kpi.pending} pending · ${kpi.cancelled} cancelled`,
      color: 'bg-violet-50',
      sparkData: kpi.deliveredByMonth,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f5]">
      {/* BANNER */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-6 py-6 mb-6 mt-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-indigo-200 text-[13px] font-medium mb-1 flex items-center gap-2">
              <TbCalendar size={13} /> {liveTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} ·
              <TbClock size={13} /> {liveTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </p>
            <h1 className="text-[26px] font-extrabold text-white tracking-tight">{greeting}, Admin 👋</h1>
            <p className="text-indigo-200 text-[14px] mt-1">
              {loading ? 'Loading your store data…' : `${kpi.totalOrders} orders · $${kpi.totalRevenue.toLocaleString('en-US')} GMV · $${kpi.paidRevenue.toLocaleString('en-US')} collected`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
              <p className="text-[11px] text-indigo-200 font-medium">Today's Revenue</p>
              <p className="text-[20px] font-extrabold">
                {loading ? '…' : `$${kpi.todayRevenue.toLocaleString('en-US')}`}
              </p>
              <p className="text-[11px] text-indigo-200 flex items-center gap-1">
                {kpi.todayOrders} order{kpi.todayOrders !== 1 ? 's' : ''} today
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Btn variant="primary" size="sm" className="!bg-white !text-indigo-700 !border-white hover:!bg-indigo-50"
                onClick={() => toast.info('Go to Products → Add Product')}>
                <TbPlus size={14} /> Add Product
              </Btn>
              <Btn size="sm" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
                onClick={refreshAll} disabled={loading}>
                <TbRefresh size={14} className={loading ? 'animate-spin' : ''} /> Refresh
              </Btn>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-10">
        {/* TABS */}
        <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm mb-6 w-fit overflow-x-auto">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all whitespace-nowrap
                ${activeTab === t.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {KPI_CARDS.map((card, i) => <KPICard key={i} {...card} />)}
            </div>

            {/* Mini order status stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <MiniStat icon={<TbTruck size={16} className="text-blue-600" />} label="In Transit" value={loading ? '…' : kpi.inTransit} color="border-blue-100 bg-blue-50/50" trend={loading ? undefined : kpi.shippedTrend} />
              <MiniStat icon={<TbCircleCheck size={16} className="text-emerald-600" />} label="Delivered" value={loading ? '…' : kpi.delivered} color="border-emerald-100 bg-emerald-50/50" trend={loading ? undefined : kpi.deliveredTrend} />
              <MiniStat icon={<TbClock size={16} className="text-amber-600" />} label="Pending" value={loading ? '…' : kpi.pending} color="border-amber-100 bg-amber-50/50" trend={loading ? undefined : kpi.pendingTrend} />
              <MiniStat icon={<TbX size={16} className="text-red-500" />} label="Cancelled" value={loading ? '…' : kpi.cancelled} color="border-red-100 bg-red-50/50" trend={loading ? undefined : kpi.cancelledTrend} />
            </div>

            {/* Charts + Activity Feed */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
              <Analytics orders={orders} products={products} />
              <ActivityFeed orders={orders} products={products} />
            </div>
          </div>
        )}

        {activeTab === 'orders' && <Orders token={token} />}
        {activeTab === 'products' && <ProductsList token={token} />}
        {activeTab === 'users' && <Users token={token} />}
        {activeTab === 'analytics' && (
          <Analytics orders={orders} products={products} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;