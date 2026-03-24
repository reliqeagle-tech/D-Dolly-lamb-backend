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

// const Products = () => {

//    const [page, setPage] = useState(0);
//    const [categoryFilterVal, setCategoryFilterValue] = useState('')
//    const [rowsPerPage, setRowsPerPage] = useState(10);

//    const context = useContext(MyContext)

//    const handleChangeCatFilter = (event) => {
//     setCategoryFilterValue(event.target.value);
//   };

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
//               <div className='flex items-center justify-between px-3 py-5 bg-[#f1f1f1]'>
//                 <h2 className='text-lg font-semibold text-gray-700'>Products <span className='text-gray-500 font-medium'>(Material UI table)</span></h2>
//                 <div className='col ml-auto flex items-center justify-end gap-2'>
//                   <Button className='!bg-green-600 !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2'><IoCloudDownloadOutline className='text-xl' /> Export</Button>
//                   <Button className='!bg-[#3872fa] !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2 w-[60%]' onClick={()=>context.setIsOpenFullScreenPanel({open:true, modal:'Add product'})}><FaPlus className='text-lg' /> Add Product</Button>
//                 </div>
//               </div>

//               <div className='flex items-center w-full px-3 justify-between'>
//                 <div className='col w-[20%]'>
//                   <h4 className='text-sm font-medium text-gray-700'>Category By</h4>
//                   <Select
//                     className='w-full my-2' size='small'
//                     labelId="demo-simple-select-helper-label"
//                     id="demo-simple-select-helper"
//                     value={categoryFilterVal}
//                     label="Category"
//                     onChange={handleChangeCatFilter}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Men</MenuItem>
//                     <MenuItem value={20}>Women</MenuItem>
//                     <MenuItem value={30}>Kids</MenuItem>
//                   </Select>
//                 </div>

//                 <div className='col lg:w-[20%] ml-auto'>
//                   <SearchBox />
//                 </div>

//               </div>

//               <TableContainer sx={{ maxHeight: 440 }}>
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>

//                   <TableRow>
//                     <TableCell><Checkbox {...label} size="small" /></TableCell>
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
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-4 w-[350px]'>
//                           <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.L_img_5_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>
//                           <div className='info w-[75%]'>
//                            <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                             <span className='text-[12px] text-gray-500 font-medium'>
//                               leather lovers
//                             </span>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Clothes
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Women
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1 flex-col'>
//                           <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                           <span className=' text-primary font-semibold' >$58.00</span>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                         <ProgressBar value={50} type='success' />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1'>
//                           {/* <Tooltip title="Edit Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="View Product Details" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="Remove Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-4 w-[350px]'>
//                           <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.L_img_5_2} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>
//                           <div className='info w-[75%]'>
//                            <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                             <span className='text-[12px] text-gray-500 font-medium'>
//                               leather lovers
//                             </span>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Clothes
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Women
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1 flex-col'>
//                           <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                           <span className=' text-primary font-semibold' >$58.00</span>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                         <ProgressBar value={15} type='error' />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1'>
//                           {/* <Tooltip title="Edit Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="View Product Details" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="Remove Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-4 w-[350px]'>
//                           <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.L_img_4_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>
//                           <div className='info w-[75%]'>
//                            <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                             <span className='text-[12px] text-gray-500 font-medium'>
//                               leather lovers
//                             </span>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Clothes
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Women
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1 flex-col'>
//                           <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                           <span className=' text-primary font-semibold' >$58.00</span>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                         <ProgressBar value={30} type='warning' />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1'>
//                           {/* <Tooltip title="Edit Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="View Product Details" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="Remove Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-4 w-[350px]'>
//                           <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.L_img_4_2} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>
//                           <div className='info w-[75%]'>
//                            <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                             <span className='text-[12px] text-gray-500 font-medium'>
//                               leather lovers
//                             </span>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Clothes
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Women
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1 flex-col'>
//                           <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                           <span className=' text-primary font-semibold' >$58.00</span>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                         <ProgressBar value={50} type='success' />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1'>
//                           {/* <Tooltip title="Edit Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="View Product Details" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="Remove Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow >
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-4 w-[350px]'>
//                           <div className='img h-[65px] w-[65px] rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.L_img_1_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>
//                           <div className='info w-[75%]'>
//                            <h3 className='text-gray-800 font-medium hover:text-primary'> <Link to='/product/27368'> Women leather scuirt Vneed women Embroiderde Rayon Kurta Pant set</Link> </h3>
//                             <span className='text-[12px] text-gray-500 font-medium'>
//                               leather lovers
//                             </span>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Clothes
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         Women
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1 flex-col'>
//                           <span className='line-through font-[400] text-gray-500 leading-3'>$78.00</span>
//                           <span className=' text-primary font-semibold' >$58.00</span>
//                         </div>
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <p className='text-[14px] w-[100px] flex gap-2 mb-1'><span className=''>234</span> sale</p>
//                         <ProgressBar value={80} type='success' />
//                       </TableCell>
//                       <TableCell style={{minWidth: columns.minWidth}}>
//                         <div className='flex items-center gap-1'>
//                           {/* <Tooltip title="Edit Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="View Product Details" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
//                           {/* </Tooltip> */}
//                           {/* <Tooltip title="Remove Product" placement="top"> */}
//                             <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
//                           {/* </Tooltip> */}
//                         </div>
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

// export default Products




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// // import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import { backendUrl, currency } from '../../App'

// const ProductsList = ({ token }) => {

//   const navigate = useNavigate();
//   const [list, setList] = useState([])

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(backendUrl + '/api/product/list')
//       if (response.data.success) {
//         setList(response.data.products.reverse());
//       }
//       else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   const removeProduct = async (id) => {
//     try {
//       const response = await axios.post(
//         backendUrl + '/api/product/remove',
//         { id },
//         { headers: { token } }
//       )

//       if (response.data.success) {
//         toast.success(response.data.message)
//         await fetchList();
//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     fetchList()
//   }, [])

//   return (
//     <>
//       <p className='mb-2'>All Products List</p>
//       <div className='flex flex-col gap-2'>

//         <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b className='text-center'>Edit</b>
//           <b className='text-center'>Delete</b>
//         </div>

//         {list.map((item, index) => (
//           <div
//             key={index}
//             className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr]
//                        items-center gap-2 py-1 px-2 border text-sm'
//           >
//             <img className='w-12' src={item.image[0]} alt="" />
//             <p>{item.name}</p>
//             <p>{item.category}</p>
//             <p>{currency}{item.price}</p>

//             {/* ➤ New Edit Button */}
//             <button
//               onClick={() => navigate(`/update-product/${item._id}`)}
//               className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-700"
//             >
//               Edit
//             </button>

//             {/* Delete Button */}
//             <p
//               onClick={() => removeProduct(item._id)}
//               className='px-2 py-1 bg-red-500 text-white text-center rounded text-xs hover:bg-red-800'
//             >
//               Delete
//             </p>
//           </div>
//         ))}

//       </div>
//     </>
//   )
// }

// export default ProductsList



// import axios from 'axios'
// import React, { useEffect, useState, useRef, useCallback } from 'react'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import { backendUrl, currency } from '../../App'

// /* ═══════════════════════════════════════════════════════════
//    STYLES
// ═══════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

// :root {
//   --ink: #0a0a0a;
//   --ink2: #2c2c2c;
//   --ink3: #555;
//   --muted: #999;
//   --border: #e8e8e2;
//   --border2: #f0f0ea;
//   --surface: #f9f9f7;
//   --surface2: #f2f2ee;
//   --white: #ffffff;
//   --green: #15803d;
//   --green-bg: #f0fdf4;
//   --green-border: #bbf7d0;
//   --red: #dc2626;
//   --red-bg: #fef2f2;
//   --red-border: #fecaca;
//   --amber: #b45309;
//   --amber-bg: #fffbeb;
//   --amber-border: #fde68a;
//   --blue: #1d4ed8;
//   --blue-bg: #eff6ff;
//   --blue-border: #bfdbfe;
//   --violet: #6d28d9;
//   --radius: 14px;
//   --radius-sm: 9px;
//   --shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05);
//   --shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06);
//   --shadow-lg: 0 8px 24px rgba(0,0,0,0.12), 0 20px 48px rgba(0,0,0,0.08);
// }

// .pl * { box-sizing: border-box; }

// .pl {
//   font-family: 'DM Sans', sans-serif;
//   background: var(--surface);
//   min-height: 100vh;
//   color: var(--ink);
//   padding: 0;
// }

// /* ── TOP BAR ── */
// .pl-topbar {
//   background: var(--white);
//   border-bottom: 1px solid var(--border);
//   padding: 0 28px;
//   height: 62px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: sticky;
//   top: 0;
//   z-index: 200;
// }
// .pl-topbar-left { display: flex; align-items: center; gap: 14px; }
// .pl-topbar-left h1 {
//   font-family: 'Syne', sans-serif;
//   font-size: 20px;
//   font-weight: 800;
//   letter-spacing: -0.5px;
//   margin: 0;
//   color: var(--ink);
// }
// .pl-divider { width: 1px; height: 20px; background: var(--border); }
// .pl-topbar-right { display: flex; align-items: center; gap: 10px; }

// /* ── STAT CARDS ── */
// .pl-stats {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 14px;
//   padding: 20px 28px 0;
// }
// @media (max-width: 900px) { .pl-stats { grid-template-columns: repeat(2, 1fr); } }
// @media (max-width: 500px) { .pl-stats { grid-template-columns: 1fr 1fr; } }

// .pl-stat {
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--radius);
//   padding: 16px 18px;
//   box-shadow: var(--shadow);
//   display: flex;
//   align-items: center;
//   gap: 14px;
//   transition: transform 0.15s, box-shadow 0.15s;
// }
// .pl-stat:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
// .pl-stat-icon {
//   width: 40px; height: 40px;
//   border-radius: 10px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 18px; flex-shrink: 0;
// }
// .pl-stat-body {}
// .pl-stat-val {
//   font-family: 'Syne', sans-serif;
//   font-size: 22px; font-weight: 800;
//   color: var(--ink); line-height: 1;
// }
// .pl-stat-lbl { font-size: 11.5px; color: var(--muted); font-weight: 500; margin-top: 3px; }

// /* ── TOOLBAR ── */
// .pl-toolbar {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 18px 28px 14px;
//   flex-wrap: wrap;
// }
// .pl-search-wrap {
//   flex: 1;
//   min-width: 220px;
//   position: relative;
// }
// .pl-search-icon {
//   position: absolute;
//   left: 13px; top: 50%;
//   transform: translateY(-50%);
//   color: var(--muted); font-size: 15px;
//   pointer-events: none;
// }
// .pl-search {
//   width: 100%;
//   border: 1.5px solid var(--border);
//   border-radius: var(--radius-sm);
//   padding: 9px 13px 9px 38px;
//   font-size: 13.5px;
//   font-family: 'DM Sans', sans-serif;
//   color: var(--ink);
//   background: var(--white);
//   outline: none;
//   transition: border-color 0.15s, box-shadow 0.15s;
// }
// .pl-search:focus {
//   border-color: var(--ink);
//   box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
// }
// .pl-search-clear {
//   position: absolute; right: 11px; top: 50%; transform: translateY(-50%);
//   background: var(--surface2); border: none; border-radius: 50%;
//   width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;
//   cursor: pointer; font-size: 11px; color: var(--muted); transition: background 0.15s;
// }
// .pl-search-clear:hover { background: var(--border); }

// .pl-select {
//   border: 1.5px solid var(--border);
//   border-radius: var(--radius-sm);
//   padding: 9px 32px 9px 13px;
//   font-size: 13px;
//   font-family: 'DM Sans', sans-serif;
//   color: var(--ink2);
//   background: var(--white);
//   outline: none;
//   cursor: pointer;
//   appearance: none;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-position: right 11px center;
//   transition: border-color 0.15s;
// }
// .pl-select:focus { border-color: var(--ink); outline: none; }

// /* ── VIEW TOGGLES ── */
// .pl-view-toggle { display: flex; border: 1.5px solid var(--border); border-radius: var(--radius-sm); overflow: hidden; }
// .pl-vbtn {
//   padding: 8px 12px; background: var(--white); border: none;
//   cursor: pointer; font-size: 14px; color: var(--muted);
//   transition: background 0.15s, color 0.15s;
//   display: flex; align-items: center; justify-content: center;
// }
// .pl-vbtn.on { background: var(--ink); color: #fff; }

// /* ── BUTTONS ── */
// .pl-btn {
//   display: inline-flex; align-items: center; gap: 7px;
//   padding: 9px 17px; border-radius: var(--radius-sm);
//   font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif;
//   cursor: pointer; transition: all 0.15s; border: none; white-space: nowrap;
// }
// .pl-btn-primary { background: var(--ink); color: #fff; }
// .pl-btn-primary:hover { background: #222; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
// .pl-btn-ghost { background: transparent; color: var(--ink2); border: 1.5px solid var(--border); }
// .pl-btn-ghost:hover { background: var(--surface2); border-color: #ccc; }
// .pl-btn-danger { background: var(--red-bg); color: var(--red); border: 1.5px solid var(--red-border); }
// .pl-btn-danger:hover { background: #fee2e2; }
// .pl-btn-sm { padding: 6px 12px; font-size: 12px; }
// .pl-btn-xs { padding: 4px 9px; font-size: 11.5px; }
// .pl-btn-edit { background: var(--blue-bg); color: var(--blue); border: 1.5px solid var(--blue-border); }
// .pl-btn-edit:hover { background: #dbeafe; }

// /* ── RESULTS BAR ── */
// .pl-results {
//   padding: 0 28px 12px;
//   display: flex; align-items: center; justify-content: space-between;
//   gap: 10px; flex-wrap: wrap;
// }
// .pl-results-count { font-size: 12.5px; color: var(--muted); font-weight: 500; }
// .pl-results-count strong { color: var(--ink); }
// .pl-sort-row { display: flex; align-items: center; gap: 8px; }
// .pl-sort-label { font-size: 12px; color: var(--muted); font-weight: 500; }

// /* ── TABLE VIEW ── */
// .pl-table-wrap {
//   padding: 0 28px 40px;
//   overflow-x: auto;
// }
// .pl-table {
//   width: 100%;
//   border-collapse: collapse;
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--radius);
//   overflow: hidden;
//   box-shadow: var(--shadow);
// }
// .pl-thead tr {
//   background: var(--surface);
//   border-bottom: 1.5px solid var(--border);
// }
// .pl-th {
//   padding: 12px 14px;
//   text-align: left;
//   font-family: 'Syne', sans-serif;
//   font-size: 11px;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.6px;
//   color: var(--muted);
//   white-space: nowrap;
//   cursor: pointer;
//   user-select: none;
//   transition: color 0.15s;
// }
// .pl-th:hover { color: var(--ink); }
// .pl-th.sorted { color: var(--ink); }
// .pl-th-sort { display: inline-flex; align-items: center; gap: 4px; }
// .pl-sort-icon { font-size: 10px; opacity: 0.5; }
// .pl-sort-icon.active { opacity: 1; }
// .pl-tbody tr {
//   border-bottom: 1px solid var(--border2);
//   transition: background 0.12s;
// }
// .pl-tbody tr:last-child { border-bottom: none; }
// .pl-tbody tr:hover { background: #fafaf8; }
// .pl-tbody tr.selected { background: var(--blue-bg); }
// .pl-tbody tr.deleting { opacity: 0.4; pointer-events: none; }
// .pl-td {
//   padding: 13px 14px;
//   font-size: 13.5px;
//   color: var(--ink2);
//   vertical-align: middle;
// }

// /* ── PRODUCT CELL ── */
// .pl-product-cell { display: flex; align-items: center; gap: 12px; }
// .pl-img-wrap {
//   position: relative;
//   width: 52px; height: 52px;
//   border-radius: 9px;
//   overflow: hidden;
//   border: 1px solid var(--border);
//   flex-shrink: 0;
//   background: var(--surface2);
//   cursor: pointer;
// }
// .pl-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.2s; }
// .pl-img-wrap:hover .pl-img { transform: scale(1.08); }
// .pl-img-count {
//   position: absolute; bottom: 3px; right: 3px;
//   background: rgba(0,0,0,0.55); color: #fff;
//   border-radius: 4px; padding: 1px 5px;
//   font-size: 9px; font-weight: 700;
// }
// .pl-product-info {}
// .pl-product-name {
//   font-weight: 600; font-size: 13.5px;
//   color: var(--ink); cursor: pointer;
//   transition: color 0.12s;
//   line-height: 1.3;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// }
// .pl-product-name:hover { color: var(--blue); }
// .pl-product-id { font-size: 10.5px; color: var(--muted); margin-top: 2px; font-family: monospace; }

// /* ── BADGES ── */
// .pl-badge {
//   display: inline-flex; align-items: center; gap: 4px;
//   padding: 3px 9px; border-radius: 20px;
//   font-size: 11.5px; font-weight: 600;
//   white-space: nowrap;
// }
// .pl-badge-green { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
// .pl-badge-amber { background: var(--amber-bg); color: var(--amber); border: 1px solid var(--amber-border); }
// .pl-badge-red { background: var(--red-bg); color: var(--red); border: 1px solid var(--red-border); }
// .pl-badge-blue { background: var(--blue-bg); color: var(--blue); border: 1px solid var(--blue-border); }
// .pl-badge-gray { background: var(--surface2); color: var(--ink3); border: 1px solid var(--border); }
// .pl-badge-violet { background: #f5f3ff; color: var(--violet); border: 1px solid #ddd6fe; }

// /* ── COLOR DOTS ── */
// .pl-colors { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; }
// .pl-color-dot {
//   width: 16px; height: 16px; border-radius: 50%;
//   border: 1.5px solid rgba(0,0,0,0.1);
//   cursor: default; flex-shrink: 0;
// }
// .pl-color-more { font-size: 10.5px; color: var(--muted); font-weight: 600; }

// /* ── SIZE PILLS ── */
// .pl-sizes { display: flex; gap: 3px; flex-wrap: wrap; }
// .pl-size-pill {
//   background: var(--surface2);
//   color: var(--ink3);
//   border: 1px solid var(--border);
//   border-radius: 5px; padding: 2px 7px;
//   font-size: 10.5px; font-weight: 700;
//   font-family: 'Syne', sans-serif;
// }

// /* ── PRICE CELL ── */
// .pl-price-main { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); }
// .pl-price-old { font-size: 11.5px; color: var(--muted); text-decoration: line-through; margin-top: 2px; }
// .pl-price-disc { font-size: 10.5px; color: var(--green); font-weight: 700; margin-top: 1px; }

// /* ── STOCK CELL ── */
// .pl-stock { font-size: 13px; font-weight: 600; }
// .pl-stock.good { color: var(--green); }
// .pl-stock.low { color: var(--amber); }
// .pl-stock.none { color: var(--red); }

// /* ── ACTION BUTTONS ── */
// .pl-actions { display: flex; gap: 6px; align-items: center; }
// .pl-action-btn {
//   display: inline-flex; align-items: center; justify-content: center; gap: 5px;
//   padding: 6px 11px; border-radius: var(--radius-sm);
//   font-size: 12px; font-weight: 600; cursor: pointer;
//   transition: all 0.15s; border: 1.5px solid transparent;
//   font-family: 'DM Sans', sans-serif;
// }
// .pl-action-edit { background: var(--blue-bg); color: var(--blue); border-color: var(--blue-border); }
// .pl-action-edit:hover { background: #dbeafe; transform: translateY(-1px); }
// .pl-action-del { background: var(--red-bg); color: var(--red); border-color: var(--red-border); }
// .pl-action-del:hover { background: #fee2e2; transform: translateY(-1px); }
// .pl-action-view { background: var(--surface2); color: var(--ink3); border-color: var(--border); }
// .pl-action-view:hover { background: var(--border); color: var(--ink); transform: translateY(-1px); }

// /* ── CARD VIEW ── */
// .pl-cards {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 16px;
//   padding: 0 28px 40px;
// }
// .pl-card {
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--radius);
//   overflow: hidden;
//   box-shadow: var(--shadow);
//   transition: transform 0.15s, box-shadow 0.15s;
//   cursor: pointer;
//   position: relative;
// }
// .pl-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
// .pl-card.selected { border-color: var(--blue); box-shadow: 0 0 0 2px var(--blue-border); }
// .pl-card-img {
//   width: 100%; aspect-ratio: 1;
//   object-fit: cover; display: block;
//   transition: transform 0.3s;
//   background: var(--surface2);
// }
// .pl-card:hover .pl-card-img { transform: scale(1.03); }
// .pl-card-img-wrap { overflow: hidden; position: relative; }
// .pl-card-bestseller {
//   position: absolute; top: 10px; left: 10px;
//   background: linear-gradient(135deg, #f59e0b, #d97706);
//   color: #fff; border-radius: 5px; padding: 3px 9px;
//   font-size: 10px; font-weight: 700; letter-spacing: 0.4px;
// }
// .pl-card-img-count {
//   position: absolute; top: 10px; right: 10px;
//   background: rgba(0,0,0,0.55); color: #fff;
//   border-radius: 6px; padding: 3px 8px; font-size: 10.5px; font-weight: 700;
// }
// .pl-card-body { padding: 14px 16px; }
// .pl-card-cats { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 8px; }
// .pl-card-cat { background: var(--surface2); color: var(--muted); border-radius: 20px; padding: 2px 9px; font-size: 11px; font-weight: 500; }
// .pl-card-name { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 8px; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
// .pl-card-price-row { display: flex; align-items: baseline; gap: 7px; margin-bottom: 10px; }
// .pl-card-price { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 800; color: var(--ink); }
// .pl-card-old { font-size: 12px; color: var(--muted); text-decoration: line-through; }
// .pl-card-disc { font-size: 11px; color: var(--green); font-weight: 700; background: var(--green-bg); padding: 1px 6px; border-radius: 4px; }
// .pl-card-attrs { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 12px; }
// .pl-card-footer { display: flex; gap: 7px; border-top: 1px solid var(--border2); padding-top: 12px; }
// .pl-card-footer .pl-action-btn { flex: 1; justify-content: center; }
// .pl-card-sel {
//   position: absolute; top: 10px; left: 10px;
//   width: 22px; height: 22px; border-radius: 6px;
//   background: var(--white); border: 2px solid var(--border);
//   display: flex; align-items: center; justify-content: center;
//   cursor: pointer; font-size: 12px; transition: all 0.15s;
// }
// .pl-card-sel.on { background: var(--blue); border-color: var(--blue); color: #fff; }

// /* ── CHECKBOX ── */
// .pl-checkbox { width: 16px; height: 16px; accent-color: var(--ink); cursor: pointer; }
// .pl-chk-cell { display: flex; align-items: center; justify-content: center; }

// /* ── BULK BAR ── */
// .pl-bulk-bar {
//   position: sticky; bottom: 24px;
//   margin: 0 28px 16px;
//   background: var(--ink);
//   color: #fff;
//   border-radius: var(--radius);
//   padding: 14px 20px;
//   display: flex; align-items: center; justify-content: space-between;
//   gap: 14px;
//   box-shadow: var(--shadow-lg);
//   animation: slideUp 0.2s ease;
//   z-index: 100;
// }
// .pl-bulk-info { font-size: 13.5px; font-weight: 600; }
// .pl-bulk-info span { opacity: 0.65; font-weight: 400; margin-left: 4px; }
// .pl-bulk-actions { display: flex; gap: 8px; }
// .pl-bulk-btn {
//   display: inline-flex; align-items: center; gap: 6px;
//   padding: 7px 14px; border-radius: var(--radius-sm);
//   font-size: 12.5px; font-weight: 600; cursor: pointer;
//   transition: all 0.15s; border: none; font-family: 'DM Sans', sans-serif;
// }
// .pl-bulk-del { background: var(--red); color: #fff; }
// .pl-bulk-del:hover { background: #b91c1c; }
// .pl-bulk-cancel { background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
// .pl-bulk-cancel:hover { background: rgba(255,255,255,0.25); }

// /* ── EMPTY STATE ── */
// .pl-empty {
//   text-align: center;
//   padding: 60px 20px;
//   color: var(--muted);
// }
// .pl-empty-icon { font-size: 48px; margin-bottom: 12px; }
// .pl-empty h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: var(--ink2); margin-bottom: 8px; }
// .pl-empty p { font-size: 13.5px; color: var(--muted); }

// /* ── SKELETON ── */
// .pl-skeleton { animation: shimmer 1.5s infinite; background: linear-gradient(90deg, var(--surface2) 25%, var(--border2) 50%, var(--surface2) 75%); background-size: 200% 100%; border-radius: 6px; }
// @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

// /* ── CONFIRM MODAL ── */
// .pl-modal-ov {
//   position: fixed; inset: 0; background: rgba(0,0,0,0.5);
//   z-index: 9999; display: flex; align-items: center; justify-content: center;
//   animation: fadeIn 0.15s ease; backdrop-filter: blur(3px);
// }
// .pl-modal {
//   background: var(--white); border-radius: 16px;
//   padding: 28px; width: 380px; max-width: 90vw;
//   box-shadow: var(--shadow-lg); animation: slideUp 0.2s ease;
//   text-align: center;
// }
// .pl-modal-icon { font-size: 40px; margin-bottom: 12px; }
// .pl-modal h3 { font-family: 'Syne', sans-serif; font-size: 19px; font-weight: 700; margin: 0 0 8px; }
// .pl-modal p { font-size: 13.5px; color: var(--ink3); margin: 0 0 22px; line-height: 1.5; }
// .pl-modal-actions { display: flex; gap: 10px; }
// .pl-modal-actions button { flex: 1; }

// /* ── IMAGE PREVIEW MODAL ── */
// .pl-img-modal-ov {
//   position: fixed; inset: 0; background: rgba(0,0,0,0.88);
//   z-index: 9999; display: flex; align-items: center; justify-content: center;
//   animation: fadeIn 0.18s ease; backdrop-filter: blur(4px);
// }
// .pl-img-modal {
//   position: relative; display: flex; flex-direction: column;
//   align-items: center; gap: 14px; max-width: 90vw;
// }
// .pl-img-modal img {
//   max-width: 82vw; max-height: 74vh;
//   border-radius: 12px; object-fit: contain;
//   box-shadow: var(--shadow-lg);
// }
// .pl-img-modal-close {
//   position: absolute; top: -14px; right: -14px;
//   width: 34px; height: 34px; border-radius: 50%;
//   background: #fff; border: none; cursor: pointer;
//   font-size: 14px; font-weight: 700; color: var(--ink);
//   box-shadow: 0 2px 8px rgba(0,0,0,0.2);
//   display: flex; align-items: center; justify-content: center;
//   transition: transform 0.15s;
// }
// .pl-img-modal-close:hover { transform: rotate(90deg); }
// .pl-img-modal-name { color: rgba(255,255,255,0.65); font-size: 12px; text-align: center; }
// .pl-img-modal-thumbs { display: flex; gap: 8px; }
// .pl-img-modal-thumb {
//   width: 50px; height: 50px; border-radius: 7px;
//   object-fit: cover; cursor: pointer; opacity: 0.55;
//   border: 2px solid transparent; transition: all 0.15s;
// }
// .pl-img-modal-thumb.on { border-color: #fff; opacity: 1; }
// .pl-img-arr {
//   position: absolute; top: 50%; transform: translateY(-50%);
//   background: rgba(255,255,255,0.15); border: none; border-radius: 50%;
//   width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
//   cursor: pointer; font-size: 18px; color: #fff; transition: background 0.15s;
// }
// .pl-img-arr:hover { background: rgba(255,255,255,0.28); }
// .pl-img-prev { left: -56px; } .pl-img-next { right: -56px; }

// /* ── PAGINATION ── */
// .pl-pagination {
//   display: flex; align-items: center; justify-content: center;
//   gap: 6px; padding: 0 28px 40px;
// }
// .pl-page-btn {
//   display: inline-flex; align-items: center; justify-content: center;
//   min-width: 36px; height: 36px; padding: 0 8px;
//   border: 1.5px solid var(--border); border-radius: var(--radius-sm);
//   background: var(--white); color: var(--ink2);
//   font-size: 13px; font-weight: 600; cursor: pointer;
//   transition: all 0.15s; font-family: 'DM Sans', sans-serif;
// }
// .pl-page-btn:hover { background: var(--surface2); }
// .pl-page-btn.on { background: var(--ink); color: #fff; border-color: var(--ink); }
// .pl-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }

// /* ── RESPONSIVE ── */
// @media (max-width: 768px) {
//   .pl-topbar { padding: 0 14px; }
//   .pl-stats, .pl-toolbar, .pl-results, .pl-table-wrap, .pl-cards, .pl-bulk-bar { padding-left: 14px; padding-right: 14px; }
//   .pl-bulk-bar { margin: 0 14px 14px; }
//   .pl-topbar-left h1 { font-size: 17px; }
//   .pl-stat-val { font-size: 18px; }
// }
// @media (max-width: 640px) {
//   .pl-topbar-right .pl-btn-text { display: none; }
// }

// /* ── UTILS ── */
// @keyframes fadeIn { from{opacity:0}to{opacity:1} }
// @keyframes slideUp { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
// .pl-truncate { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px; }
// `;

// /* ═══════════════════════════════════════════════════════════
//    IMAGE PREVIEW MODAL
// ═══════════════════════════════════════════════════════════ */
// const ImgModal = ({ images, start, name, onClose }) => {
//   const [cur, setCur] = useState(start);
//   const imgs = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean);

//   useEffect(() => {
//     const h = (e) => {
//       if (e.key === 'Escape') onClose();
//       if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1));
//       if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1));
//     };
//     window.addEventListener('keydown', h);
//     return () => window.removeEventListener('keydown', h);
//   }, [imgs.length, onClose]);

//   if (!imgs[cur]) return null;

//   return (
//     <div className="pl-img-modal-ov" onClick={onClose}>
//       <div className="pl-img-modal" onClick={e => e.stopPropagation()}>
//         <button className="pl-img-modal-close" onClick={onClose}>✕</button>
//         <img src={imgs[cur]} alt={name} />
//         {cur > 0 && <button className="pl-img-arr pl-img-prev" onClick={() => setCur(p => p - 1)}>‹</button>}
//         {cur < imgs.length - 1 && <button className="pl-img-arr pl-img-next" onClick={() => setCur(p => p + 1)}>›</button>}
//         {imgs.length > 1 && (
//           <div className="pl-img-modal-thumbs">
//             {imgs.map((img, i) => <img key={i} className={`pl-img-modal-thumb ${i === cur ? 'on' : ''}`} src={img} alt="" onClick={() => setCur(i)} />)}
//           </div>
//         )}
//         <div className="pl-img-modal-name">{name} &nbsp;·&nbsp; {cur + 1}/{imgs.length} &nbsp;·&nbsp; Esc to close</div>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════════════════════
//    CONFIRM MODAL
// ═══════════════════════════════════════════════════════════ */
// const ConfirmModal = ({ title, desc, onConfirm, onCancel }) => (
//   <div className="pl-modal-ov" onClick={onCancel}>
//     <div className="pl-modal" onClick={e => e.stopPropagation()}>
//       <div className="pl-modal-icon">🗑️</div>
//       <h3>{title}</h3>
//       <p>{desc}</p>
//       <div className="pl-modal-actions">
//         <button className="pl-btn pl-btn-ghost" onClick={onCancel}>Cancel</button>
//         <button className="pl-btn pl-btn-danger" onClick={onConfirm}>Yes, Delete</button>
//       </div>
//     </div>
//   </div>
// );

// /* ═══════════════════════════════════════════════════════════
//    HELPERS
// ═══════════════════════════════════════════════════════════ */
// const getStock = (sizes) => {
//   if (!sizes || !Array.isArray(sizes)) return 0;
//   return sizes.reduce((sum, s) => sum + (s.stock || 0), 0);
// };

// const getDiscount = (price, discountPrice) => {
//   if (!discountPrice || !price || +discountPrice >= +price) return null;
//   return Math.round((1 - discountPrice / price) * 100);
// };

// const formatId = (id) => id ? `#${id.toString().slice(-6).toUpperCase()}` : '—';

// /* ═══════════════════════════════════════════════════════════
//    SKELETON ROW
// ═══════════════════════════════════════════════════════════ */
// const SkeletonRow = () => (
//   <tr>
//     <td className="pl-td"><div className="pl-skeleton" style={{ width: 16, height: 16, borderRadius: 3 }} /></td>
//     <td className="pl-td">
//       <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
//         <div className="pl-skeleton" style={{ width: 52, height: 52, borderRadius: 9 }} />
//         <div><div className="pl-skeleton" style={{ width: 140, height: 14, marginBottom: 6 }} /><div className="pl-skeleton" style={{ width: 70, height: 10 }} /></div>
//       </div>
//     </td>
//     {[80, 70, 90, 60, 70, 80, 90].map((w, i) => <td key={i} className="pl-td"><div className="pl-skeleton" style={{ width: w, height: 14 }} /></td>)}
//   </tr>
// );

// /* ═══════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════════════════════ */
// const ProductsList = ({ token }) => {
//   const navigate = useNavigate();
//   const [list, setList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [catFilter, setCatFilter] = useState('all');
//   const [subCatFilter, setSubCatFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');
//   const [sortDir, setSortDir] = useState('desc');
//   const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
//   const [selected, setSelected] = useState([]);
//   const [deletingIds, setDeletingIds] = useState([]);
//   const [confirmDelete, setConfirmDelete] = useState(null); // { id, name } | 'bulk'
//   const [imgModal, setImgModal] = useState(null); // { images, name, start }
//   const [page, setPage] = useState(1);
//   const PER_PAGE = 12;

//   const fetchList = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(backendUrl + '/api/product/list');
//       if (response.data.success) setList(response.data.products.reverse());
//       else toast.error(response.data.message);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeProduct = async (id) => {
//     setDeletingIds(p => [...p, id]);
//     try {
//       const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
//       if (response.data.success) { toast.success('Product removed'); await fetchList(); setSelected(p => p.filter(s => s !== id)); }
//       else toast.error(response.data.message);
//     } catch (error) { toast.error(error.message); }
//     finally { setDeletingIds(p => p.filter(x => x !== id)); }
//   };

//   const removeBulk = async () => {
//     const ids = [...selected];
//     for (const id of ids) await removeProduct(id);
//     setSelected([]);
//     toast.success(`${ids.length} products removed`);
//   };

//   useEffect(() => { fetchList(); }, []);
//   useEffect(() => { setPage(1); }, [search, catFilter, subCatFilter, sortBy]);

//   // Categories from list
//   const categories = ['all', ...new Set(list.map(p => p.category).filter(Boolean))];
//   const subCategories = ['all', ...new Set(list.filter(p => catFilter === 'all' || p.category === catFilter).map(p => p.subCategory).filter(Boolean))];

//   // Filter & sort
//   const filtered = list.filter(p => {
//     const q = search.toLowerCase();
//     const matchSearch = !q || p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.subCategory?.toLowerCase().includes(q);
//     const matchCat = catFilter === 'all' || p.category === catFilter;
//     const matchSub = subCatFilter === 'all' || p.subCategory === subCatFilter;
//     return matchSearch && matchCat && matchSub;
//   }).sort((a, b) => {
//     const dir = sortDir === 'asc' ? 1 : -1;
//     if (sortBy === 'name') return dir * (a.name || '').localeCompare(b.name || '');
//     if (sortBy === 'price') return dir * ((+a.price || 0) - (+b.price || 0));
//     if (sortBy === 'stock') return dir * (getStock(a.sizes) - getStock(b.sizes));
//     return dir * 1; // newest
//   });

//   const totalPages = Math.ceil(filtered.length / PER_PAGE);
//   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//   const toggleSelect = (id) => setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
//   const toggleAll = () => setSelected(selected.length === paginated.length ? [] : paginated.map(p => p._id));

//   const handleSort = (col) => {
//     if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
//     else { setSortBy(col); setSortDir('asc'); }
//   };

//   // Stats
//   const totalStock = list.reduce((s, p) => s + getStock(p.sizes), 0);
//   const bestsellerCount = list.filter(p => p.bestseller).length;
//   const outOfStock = list.filter(p => getStock(p.sizes) === 0).length;

//   const SortIcon = ({ col }) => {
//     if (sortBy !== col) return <span className="pl-sort-icon">↕</span>;
//     return <span className="pl-sort-icon active">{sortDir === 'asc' ? '↑' : '↓'}</span>;
//   };

//   const renderTable = () => (
//     <div className="pl-table-wrap">
//       <table className="pl-table">
//         <thead className="pl-thead">
//           <tr>
//             <th className="pl-th" style={{ width: 40 }}>
//               <input type="checkbox" className="pl-checkbox" checked={paginated.length > 0 && selected.length === paginated.length} onChange={toggleAll} />
//             </th>
//             <th className="pl-th" style={{ minWidth: 220 }} onClick={() => handleSort('name')}>
//               <span className="pl-th-sort">Product <SortIcon col="name" /></span>
//             </th>
//             <th className="pl-th">Category</th>
//             <th className="pl-th">Sub-cat</th>
//             <th className="pl-th" onClick={() => handleSort('price')}>
//               <span className="pl-th-sort">Price <SortIcon col="price" /></span>
//             </th>
//             <th className="pl-th" onClick={() => handleSort('stock')}>
//               <span className="pl-th-sort">Stock <SortIcon col="stock" /></span>
//             </th>
//             <th className="pl-th">Colors</th>
//             <th className="pl-th">Sizes</th>
//             <th className="pl-th">Status</th>
//             <th className="pl-th" style={{ minWidth: 140 }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody className="pl-tbody">
//           {loading ? (
//             Array(6).fill(0).map((_, i) => <SkeletonRow key={i} />)
//           ) : paginated.length === 0 ? (
//             <tr><td colSpan={10}>
//               <div className="pl-empty">
//                 <div className="pl-empty-icon">🔍</div>
//                 <h3>No products found</h3>
//                 <p>Try adjusting your search or filters</p>
//               </div>
//             </td></tr>
//           ) : paginated.map((item) => {
//             const stock = getStock(item.sizes);
//             const disc = getDiscount(item.price, item.discountPrice);
//             const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean);
//             const colors = item.color || [];
//             const sizes = item.sizes || [];
//             const isDeleting = deletingIds.includes(item._id);

//             return (
//               <tr key={item._id} className={`${selected.includes(item._id) ? 'selected' : ''} ${isDeleting ? 'deleting' : ''}`}>
//                 <td className="pl-td pl-chk-cell">
//                   <input type="checkbox" className="pl-checkbox" checked={selected.includes(item._id)} onChange={() => toggleSelect(item._id)} />
//                 </td>
//                 <td className="pl-td">
//                   <div className="pl-product-cell">
//                     <div className="pl-img-wrap" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>
//                       <img className="pl-img" src={imgs[0]} alt={item.name} />
//                       {imgs.length > 1 && <span className="pl-img-count">+{imgs.length - 1}</span>}
//                     </div>
//                     <div className="pl-product-info">
//                       <div className="pl-product-name" onClick={() => navigate(`/update-product/${item._id}`)}>{item.name}</div>
//                       <div className="pl-product-id">{formatId(item._id)}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="pl-td"><span className="pl-badge pl-badge-gray">{item.category}</span></td>
//                 <td className="pl-td"><span className="pl-badge pl-badge-gray">{item.subCategory}</span></td>
//                 <td className="pl-td">
//                   <div className="pl-price-main">{currency}{item.discountPrice || item.price}</div>
//                   {disc && <><div className="pl-price-old">{currency}{item.price}</div><div className="pl-price-disc">{disc}% off</div></>}
//                 </td>
//                 <td className="pl-td">
//                   <div className={`pl-stock ${stock > 10 ? 'good' : stock > 0 ? 'low' : 'none'}`}>
//                     {stock > 0 ? stock : 'Out'}
//                   </div>
//                   {stock > 0 && stock <= 10 && <div style={{ fontSize: 10, color: 'var(--amber)', fontWeight: 600, marginTop: 1 }}>Low stock</div>}
//                 </td>
//                 <td className="pl-td">
//                   {colors.length > 0 ? (
//                     <div className="pl-colors">
//                       {colors.slice(0, 5).map((c, i) => <div key={i} className="pl-color-dot" style={{ backgroundColor: c.hex || c }} title={c.name || c} />)}
//                       {colors.length > 5 && <span className="pl-color-more">+{colors.length - 5}</span>}
//                     </div>
//                   ) : <span style={{ color: 'var(--muted)', fontSize: 12 }}>—</span>}
//                 </td>
//                 <td className="pl-td">
//                   {sizes.length > 0 ? (
//                     <div className="pl-sizes">
//                       {sizes.slice(0, 4).map((s, i) => <span key={i} className="pl-size-pill">{typeof s === 'object' ? s.size : s}</span>)}
//                       {sizes.length > 4 && <span className="pl-size-pill">+{sizes.length - 4}</span>}
//                     </div>
//                   ) : <span style={{ color: 'var(--muted)', fontSize: 12 }}>—</span>}
//                 </td>
//                 <td className="pl-td">
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
//                     {item.bestseller && <span className="pl-badge pl-badge-amber">⭐ Bestseller</span>}
//                     {stock === 0 ? <span className="pl-badge pl-badge-red">Out of stock</span> : stock <= 10 ? <span className="pl-badge pl-badge-amber">Low stock</span> : <span className="pl-badge pl-badge-green">In stock</span>}
//                   </div>
//                 </td>
//                 <td className="pl-td">
//                   <div className="pl-actions">
//                     <button className="pl-action-btn pl-action-view" title="View images" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>🔍</button>
//                     <button className="pl-action-btn pl-action-edit" onClick={() => navigate(`/update-product/${item._id}`)}>✏️ Edit</button>
//                     <button className="pl-action-btn pl-action-del" onClick={() => setConfirmDelete({ id: item._id, name: item.name })}>🗑</button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderGrid = () => (
//     <div className="pl-cards">
//       {loading ? (
//         Array(8).fill(0).map((_, i) => (
//           <div key={i} className="pl-card" style={{ cursor: 'default' }}>
//             <div className="pl-skeleton" style={{ width: '100%', aspectRatio: '1', borderRadius: 0 }} />
//             <div style={{ padding: 16 }}>
//               <div className="pl-skeleton" style={{ width: '60%', height: 12, marginBottom: 10 }} />
//               <div className="pl-skeleton" style={{ width: '90%', height: 16, marginBottom: 8 }} />
//               <div className="pl-skeleton" style={{ width: '40%', height: 18 }} />
//             </div>
//           </div>
//         ))
//       ) : paginated.length === 0 ? (
//         <div style={{ gridColumn: '1/-1' }}>
//           <div className="pl-empty">
//             <div className="pl-empty-icon">🔍</div>
//             <h3>No products found</h3>
//             <p>Try adjusting your search or filters</p>
//           </div>
//         </div>
//       ) : paginated.map((item) => {
//         const stock = getStock(item.sizes);
//         const disc = getDiscount(item.price, item.discountPrice);
//         const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean);
//         const colors = item.color || [];
//         const sizes = item.sizes || [];

//         return (
//           <div key={item._id} className={`pl-card ${selected.includes(item._id) ? 'selected' : ''}`}>
//             <div className="pl-card-img-wrap" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>
//               <img className="pl-card-img" src={imgs[0]} alt={item.name} />
//               {item.bestseller && <span className="pl-card-bestseller">⭐ BESTSELLER</span>}
//               {imgs.length > 1 && <span className="pl-card-img-count">+{imgs.length - 1} photos</span>}
//               <div className={`pl-card-sel ${selected.includes(item._id) ? 'on' : ''}`} onClick={e => { e.stopPropagation(); toggleSelect(item._id); }}>
//                 {selected.includes(item._id) ? '✓' : ''}
//               </div>
//             </div>
//             <div className="pl-card-body">
//               <div className="pl-card-cats">
//                 <span className="pl-card-cat">{item.category}</span>
//                 {item.subCategory && <span className="pl-card-cat">{item.subCategory}</span>}
//               </div>
//               <div className="pl-card-name" onClick={() => navigate(`/update-product/${item._id}`)}>{item.name}</div>
//               <div className="pl-card-price-row">
//                 <span className="pl-card-price">{currency}{item.discountPrice || item.price}</span>
//                 {disc && <><span className="pl-card-old">{currency}{item.price}</span><span className="pl-card-disc">{disc}% off</span></>}
//               </div>
//               <div className="pl-card-attrs">
//                 {stock === 0 ? <span className="pl-badge pl-badge-red">Out of stock</span> : stock <= 10 ? <span className="pl-badge pl-badge-amber">{stock} left</span> : <span className="pl-badge pl-badge-green">{stock} in stock</span>}
//                 {colors.length > 0 && (
//                   <div className="pl-colors" style={{ alignItems: 'center' }}>
//                     {colors.slice(0, 4).map((c, i) => <div key={i} className="pl-color-dot" style={{ backgroundColor: c.hex || c }} title={c.name || c} />)}
//                     {colors.length > 4 && <span className="pl-color-more">+{colors.length - 4}</span>}
//                   </div>
//                 )}
//                 {sizes.length > 0 && (
//                   <div className="pl-sizes">
//                     {sizes.slice(0, 3).map((s, i) => <span key={i} className="pl-size-pill">{typeof s === 'object' ? s.size : s}</span>)}
//                     {sizes.length > 3 && <span className="pl-size-pill">+{sizes.length - 3}</span>}
//                   </div>
//                 )}
//               </div>
//               <div className="pl-card-footer">
//                 <button className="pl-action-btn pl-action-view pl-btn-xs" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>🔍 View</button>
//                 <button className="pl-action-btn pl-action-edit" onClick={() => navigate(`/update-product/${item._id}`)}>✏️ Edit</button>
//                 <button className="pl-action-btn pl-action-del" onClick={() => setConfirmDelete({ id: item._id, name: item.name })}>🗑</button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );

//   return (
//     <div className="pl">
//       <style>{CSS}</style>

//       {/* ── TOP BAR ── */}
//       <div className="pl-topbar">
//         <div className="pl-topbar-left">
//           <h1>Products</h1>
//           <div className="pl-divider" />
//           <span style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 500 }}>{loading ? '…' : `${list.length} total`}</span>
//         </div>
//         <div className="pl-topbar-right">
//           <button className="pl-btn pl-btn-ghost pl-btn-sm" onClick={fetchList}>
//             <span>↺</span> <span className="pl-btn-text">Refresh</span>
//           </button>
//           <button className="pl-btn pl-btn-primary pl-btn-sm" onClick={() => navigate('/add')}>
//             <span>＋</span> <span className="pl-btn-text">Add Product</span>
//           </button>
//         </div>
//       </div>

//       {/* ── STATS ── */}
//       <div className="pl-stats">
//         {[
//           { icon: '📦', val: list.length, lbl: 'Total Products', bg: 'var(--blue-bg)' },
//           { icon: '🏷️', val: totalStock, lbl: 'Total Stock', bg: 'var(--green-bg)' },
//           { icon: '⭐', val: bestsellerCount, lbl: 'Bestsellers', bg: 'var(--amber-bg)' },
//           { icon: '⚠️', val: outOfStock, lbl: 'Out of Stock', bg: 'var(--red-bg)' },
//         ].map(({ icon, val, lbl, bg }, i) => (
//           <div key={i} className="pl-stat" style={{ animationDelay: `${i * 60}ms` }}>
//             <div className="pl-stat-icon" style={{ background: bg }}>{icon}</div>
//             <div className="pl-stat-body">
//               <div className="pl-stat-val">{loading ? '—' : val.toLocaleString()}</div>
//               <div className="pl-stat-lbl">{lbl}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── TOOLBAR ── */}
//       <div className="pl-toolbar">
//         <div className="pl-search-wrap">
//           <span className="pl-search-icon">🔍</span>
//           <input className="pl-search" type="text" placeholder="Search by name, category…" value={search} onChange={e => setSearch(e.target.value)} />
//           {search && <button className="pl-search-clear" onClick={() => setSearch('')}>✕</button>}
//         </div>

//         <select className="pl-select" value={catFilter} onChange={e => { setCatFilter(e.target.value); setSubCatFilter('all'); }}>
//           {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
//         </select>

//         <select className="pl-select" value={subCatFilter} onChange={e => setSubCatFilter(e.target.value)}>
//           {subCategories.map(s => <option key={s} value={s}>{s === 'all' ? 'All Sub-cats' : s}</option>)}
//         </select>

//         <select className="pl-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
//           <option value="newest">Newest First</option>
//           <option value="name">Name A–Z</option>
//           <option value="price">Price</option>
//           <option value="stock">Stock</option>
//         </select>

//         <div className="pl-view-toggle">
//           <button className={`pl-vbtn ${viewMode === 'table' ? 'on' : ''}`} title="Table view" onClick={() => setViewMode('table')}>☰</button>
//           <button className={`pl-vbtn ${viewMode === 'grid' ? 'on' : ''}`} title="Grid view" onClick={() => setViewMode('grid')}>⊞</button>
//         </div>
//       </div>

//       {/* ── RESULTS BAR ── */}
//       <div className="pl-results">
//         <div className="pl-results-count">
//           {loading ? 'Loading…' : <>Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> products {search && `for "${search}"`}</>}
//         </div>
//         {selected.length > 0 && (
//           <span style={{ fontSize: 12.5, color: 'var(--blue)', fontWeight: 600 }}>{selected.length} selected</span>
//         )}
//       </div>

//       {/* ── CONTENT ── */}
//       {viewMode === 'table' ? renderTable() : renderGrid()}

//       {/* ── PAGINATION ── */}
//       {!loading && totalPages > 1 && (
//         <div className="pl-pagination">
//           <button className="pl-page-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1).reduce((acc, p, i, arr) => {
//             if (i > 0 && arr[i - 1] !== p - 1) acc.push('…');
//             acc.push(p);
//             return acc;
//           }, []).map((p, i) =>
//             p === '…' ? <span key={`e${i}`} style={{ padding: '0 4px', color: 'var(--muted)' }}>…</span> :
//               <button key={p} className={`pl-page-btn ${page === p ? 'on' : ''}`} onClick={() => setPage(p)}>{p}</button>
//           )}
//           <button className="pl-page-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
//         </div>
//       )}

//       {/* ── BULK BAR ── */}
//       {selected.length > 0 && (
//         <div className="pl-bulk-bar">
//           <div className="pl-bulk-info">{selected.length} products selected <span>· Bulk actions</span></div>
//           <div className="pl-bulk-actions">
//             <button className="pl-bulk-btn pl-bulk-cancel" onClick={() => setSelected([])}>✕ Deselect</button>
//             <button className="pl-bulk-btn pl-bulk-del" onClick={() => setConfirmDelete('bulk')}>🗑 Delete Selected</button>
//           </div>
//         </div>
//       )}

//       {/* ── CONFIRM MODAL ── */}
//       {confirmDelete && (
//         <ConfirmModal
//           title={confirmDelete === 'bulk' ? `Delete ${selected.length} Products?` : 'Delete Product?'}
//           desc={confirmDelete === 'bulk' ? `This will permanently remove ${selected.length} selected products. This action cannot be undone.` : `"${confirmDelete.name}" will be permanently removed. This action cannot be undone.`}
//           onConfirm={() => { setConfirmDelete(null); confirmDelete === 'bulk' ? removeBulk() : removeProduct(confirmDelete.id); }}
//           onCancel={() => setConfirmDelete(null)}
//         />
//       )}

//       {/* ── IMAGE MODAL ── */}
//       {imgModal && <ImgModal {...imgModal} onClose={() => setImgModal(null)} />}
//     </div>
//   );
// };

// export default ProductsList;



// import axios from 'axios'
// import React, { useEffect, useState, useRef, useCallback } from 'react'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import { backendUrl, currency } from '../../App'

// /* ═══════════════════════════════════════════════════════════
//    STYLES
// ═══════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

// :root {
//   --ink: #0a0a0a;
//   --ink2: #2c2c2c;
//   --ink3: #555;
//   --muted: #999;
//   --border: #e8e8e2;
//   --border2: #f0f0ea;
//   --surface: #f9f9f7;
//   --surface2: #f2f2ee;
//   --white: #ffffff;
//   --green: #15803d;
//   --green-bg: #f0fdf4;
//   --green-border: #bbf7d0;
//   --red: #dc2626;
//   --red-bg: #fef2f2;
//   --red-border: #fecaca;
//   --amber: #b45309;
//   --amber-bg: #fffbeb;
//   --amber-border: #fde68a;
//   --blue: #1d4ed8;
//   --blue-bg: #eff6ff;
//   --blue-border: #bfdbfe;
//   --violet: #6d28d9;
//   --radius: 14px;
//   --radius-sm: 9px;
//   --shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05);
//   --shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06);
//   --shadow-lg: 0 8px 24px rgba(0,0,0,0.12), 0 20px 48px rgba(0,0,0,0.08);
// }

// .pl * { box-sizing: border-box; }

// .pl {
//   font-family: 'DM Sans', sans-serif;
//   background: var(--surface);
//   min-height: 100vh;
//   color: var(--ink);
//   padding: 0;
// }

// /* ── TOP BAR ── */
// .pl-topbar {
//   background: var(--white);
//   border-bottom: 1px solid var(--border);
//   padding: 0 28px;
//   height: 62px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: sticky;
//   top: 0;
//   z-index: 200;
// }
// .pl-topbar-left { display: flex; align-items: center; gap: 14px; }
// .pl-topbar-left h1 {
//   font-family: 'Syne', sans-serif;
//   font-size: 20px;
//   font-weight: 800;
//   letter-spacing: -0.5px;
//   margin: 0;
//   color: var(--ink);
// }
// .pl-divider { width: 1px; height: 20px; background: var(--border); }
// .pl-topbar-right { display: flex; align-items: center; gap: 10px; }

// /* ── STAT CARDS ── */
// .pl-stats {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 14px;
//   padding: 20px 28px 0;
// }
// @media (max-width: 900px) { .pl-stats { grid-template-columns: repeat(2, 1fr); } }
// @media (max-width: 500px) { .pl-stats { grid-template-columns: 1fr 1fr; } }

// .pl-stat {
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--radius);
//   padding: 16px 18px;
//   box-shadow: var(--shadow);
//   display: flex;
//   align-items: center;
//   gap: 14px;
//   transition: transform 0.15s, box-shadow 0.15s;
// }
// .pl-stat:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
// .pl-stat-icon {
//   width: 40px; height: 40px;
//   border-radius: 10px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 18px; flex-shrink: 0;
// }
// .pl-stat-body {}
// .pl-stat-val {
//   font-family: 'Syne', sans-serif;
//   font-size: 22px; font-weight: 800;
//   color: var(--ink); line-height: 1;
// }
// .pl-stat-lbl { font-size: 11.5px; color: var(--muted); font-weight: 500; margin-top: 3px; }

// /* ── TOOLBAR ── */
// .pl-toolbar {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 18px 28px 14px;
//   flex-wrap: wrap;
// }
// .pl-search-wrap {
//   flex: 1;
//   min-width: 220px;
//   position: relative;
// }
// .pl-search-icon {
//   position: absolute;
//   left: 13px; top: 50%;
//   transform: translateY(-50%);
//   color: var(--muted); font-size: 15px;
//   pointer-events: none;
// }
// .pl-search {
//   width: 100%;
//   border: 1.5px solid var(--border);
//   border-radius: var(--radius-sm);
//   padding: 9px 13px 9px 38px;
//   font-size: 13.5px;
//   font-family: 'DM Sans', sans-serif;
//   color: var(--ink);
//   background: var(--white);
//   outline: none;
//   transition: border-color 0.15s, box-shadow 0.15s;
// }
// .pl-search:focus {
//   border-color: var(--ink);
//   box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
// }
// .pl-search-clear {
//   position: absolute; right: 11px; top: 50%; transform: translateY(-50%);
//   background: var(--surface2); border: none; border-radius: 50%;
//   width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;
//   cursor: pointer; font-size: 11px; color: var(--muted); transition: background 0.15s;
// }
// .pl-search-clear:hover { background: var(--border); }

// .pl-select {
//   border: 1.5px solid var(--border);
//   border-radius: var(--radius-sm);
//   padding: 9px 32px 9px 13px;
//   font-size: 13px;
//   font-family: 'DM Sans', sans-serif;
//   color: var(--ink2);
//   background: var(--white);
//   outline: none;
//   cursor: pointer;
//   appearance: none;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-position: right 11px center;
//   transition: border-color 0.15s;
// }
// .pl-select:focus { border-color: var(--ink); outline: none; }

// /* ── VIEW TOGGLES ── */
// .pl-view-toggle { display: flex; border: 1.5px solid var(--border); border-radius: var(--radius-sm); overflow: hidden; }
// .pl-vbtn {
//   padding: 8px 12px; background: var(--white); border: none;
//   cursor: pointer; font-size: 14px; color: var(--muted);
//   transition: background 0.15s, color 0.15s;
//   display: flex; align-items: center; justify-content: center;
// }
// .pl-vbtn.on { background: var(--ink); color: #fff; }

// /* ── BUTTONS ── */
// .pl-btn {
//   display: inline-flex; align-items: center; gap: 7px;
//   padding: 9px 17px; border-radius: var(--radius-sm);
//   font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif;
//   cursor: pointer; transition: all 0.15s; border: none; white-space: nowrap;
// }
// .pl-btn-primary { background: var(--ink); color: #fff; }
// .pl-btn-primary:hover { background: #222; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
// .pl-btn-ghost { background: transparent; color: var(--ink2); border: 1.5px solid var(--border); }
// .pl-btn-ghost:hover { background: var(--surface2); border-color: #ccc; }
// .pl-btn-danger { background: var(--red-bg); color: var(--red); border: 1.5px solid var(--red-border); }
// .pl-btn-danger:hover { background: #fee2e2; }
// .pl-btn-sm { padding: 6px 12px; font-size: 12px; }
// .pl-btn-xs { padding: 4px 9px; font-size: 11.5px; }
// .pl-btn-edit { background: var(--blue-bg); color: var(--blue); border: 1.5px solid var(--blue-border); }
// .pl-btn-edit:hover { background: #dbeafe; }

// /* ── RESULTS BAR ── */
// .pl-results {
//   padding: 0 28px 12px;
//   display: flex; align-items: center; justify-content: space-between;
//   gap: 10px; flex-wrap: wrap;
// }
// .pl-results-count { font-size: 12.5px; color: var(--muted); font-weight: 500; }
// .pl-results-count strong { color: var(--ink); }
// .pl-sort-row { display: flex; align-items: center; gap: 8px; }
// .pl-sort-label { font-size: 12px; color: var(--muted); font-weight: 500; }

// /* ── TABLE VIEW ── */
// .pl-table-wrap {
//   padding: 0 28px 40px;
//   overflow-x: auto;
// }
// .pl-table {
//   width: 100%;
//   border-collapse: collapse;
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--radius);
//   overflow: hidden;
//   box-shadow: var(--shadow);
// }
// .pl-thead tr {
//   background: var(--surface);
//   border-bottom: 1.5px solid var(--border);
// }
// .pl-th {
//   padding: 12px 14px;
//   text-align: left;
//   font-family: 'Syne', sans-serif;
//   font-size: 11px;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.6px;
//   color: var(--muted);
//   white-space: nowrap;
//   cursor: pointer;
//   user-select: none;
//   transition: color 0.15s;
// }
// .pl-th:hover { color: var(--ink); }
// .pl-th.sorted { color: var(--ink); }
// .pl-th-sort { display: inline-flex; align-items: center; gap: 4px; }
// .pl-sort-icon { font-size: 10px; opacity: 0.5; }
// .pl-sort-icon.active { opacity: 1; }
// .pl-tbody tr {
//   border-bottom: 1px solid var(--border2);
//   transition: background 0.12s;
// }
// .pl-tbody tr:last-child { border-bottom: none; }
// .pl-tbody tr:hover { background: #fafaf8; }
// .pl-tbody tr.selected { background: var(--blue-bg); }
// .pl-tbody tr.deleting { opacity: 0.4; pointer-events: none; }
// .pl-td {
//   padding: 13px 14px;
//   font-size: 13.5px;
//   color: var(--ink2);
//   vertical-align: middle;
// }

// /* ── PRODUCT CELL ── */
// .pl-product-cell { display: flex; align-items: center; gap: 12px; }
// .pl-img-wrap {
//   position: relative;
//   width: 52px; height: 52px;
//   border-radius: 9px;
//   overflow: hidden;
//   border: 1px solid var(--border);
//   flex-shrink: 0;
//   background: var(--surface2);
//   cursor: pointer;
// }
// .pl-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.2s; }
// .pl-img-wrap:hover .pl-img { transform: scale(1.08); }
// .pl-img-count {
//   position: absolute; bottom: 3px; right: 3px;
//   background: rgba(0,0,0,0.55); color: #fff;
//   border-radius: 4px; padding: 1px 5px;
//   font-size: 9px; font-weight: 700;
// }
// .pl-product-info {}
// .pl-product-name {
//   font-weight: 600; font-size: 13.5px;
//   color: var(--ink); cursor: pointer;
//   transition: color 0.12s;
//   line-height: 1.3;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// }
// .pl-product-name:hover { color: var(--blue); }
// .pl-product-id { font-size: 10.5px; color: var(--muted); margin-top: 2px; font-family: monospace; }

// /* ── BADGES ── */
// .pl-badge {
//   display: inline-flex; align-items: center; gap: 4px;
//   padding: 3px 9px; border-radius: 20px;
//   font-size: 11.5px; font-weight: 600;
//   white-space: nowrap;
// }
// .pl-badge-green { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
// .pl-badge-amber { background: var(--amber-bg); color: var(--amber); border: 1px solid var(--amber-border); }
// .pl-badge-red { background: var(--red-bg); color: var(--red); border: 1px solid var(--red-border); }
// .pl-badge-blue { background: var(--blue-bg); color: var(--blue); border: 1px solid var(--blue-border); }
// .pl-badge-gray { background: var(--surface2); color: var(--ink3); border: 1px solid var(--border); }
// .pl-badge-violet { background: #f5f3ff; color: var(--violet); border: 1px solid #ddd6fe; }

// /* ── COLOR DOTS ── */
// .pl-colors { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; }
// .pl-color-dot {
//   width: 16px; height: 16px; border-radius: 50%;
//   border: 1.5px solid rgba(0,0,0,0.1);
//   cursor: default; flex-shrink: 0;
// }
// .pl-color-more { font-size: 10.5px; color: var(--muted); font-weight: 600; }

// /* ── SIZE PILLS ── */
// .pl-sizes { display: flex; gap: 3px; flex-wrap: wrap; }
// .pl-size-pill {
//   background: var(--surface2);
//   color: var(--ink3);
//   border: 1px solid var(--border);
//   border-radius: 5px; padding: 2px 7px;
//   font-size: 10.5px; font-weight: 700;
//   font-family: 'Syne', sans-serif;
// }

// /* ── PRICE CELL ── */
// .pl-price-main { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); }
// .pl-price-old { font-size: 11.5px; color: var(--muted); text-decoration: line-through; margin-top: 2px; }
// .pl-price-disc { font-size: 10.5px; color: var(--green); font-weight: 700; margin-top: 1px; }

// /* ── STOCK CELL ── */
// .pl-stock { font-size: 13px; font-weight: 600; }
// .pl-stock.good { color: var(--green); }
// .pl-stock.low { color: var(--amber); }
// .pl-stock.none { color: var(--red); }

// /* ── ACTION BUTTONS ── */
// .pl-actions { display: flex; gap: 6px; align-items: center; }
// .pl-action-btn {
//   display: inline-flex; align-items: center; justify-content: center; gap: 5px;
//   padding: 6px 11px; border-radius: var(--radius-sm);
//   font-size: 12px; font-weight: 600; cursor: pointer;
//   transition: all 0.15s; border: 1.5px solid transparent;
//   font-family: 'DM Sans', sans-serif;
// }
// .pl-action-edit { background: var(--blue-bg); color: var(--blue); border-color: var(--blue-border); }
// .pl-action-edit:hover { background: #dbeafe; transform: translateY(-1px); }
// .pl-action-del { background: var(--red-bg); color: var(--red); border-color: var(--red-border); }
// .pl-action-del:hover { background: #fee2e2; transform: translateY(-1px); }
// .pl-action-view { background: var(--surface2); color: var(--ink3); border-color: var(--border); }
// .pl-action-view:hover { background: var(--border); color: var(--ink); transform: translateY(-1px); }

// /* ── CARD VIEW ── */
// .pl-cards {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 16px;
//   padding: 0 28px 40px;
// }
// .pl-card {
//   background: var(--white);
//   border: 1px solid var(--border);
//   border-radius: var(--radius);
//   overflow: hidden;
//   box-shadow: var(--shadow);
//   transition: transform 0.15s, box-shadow 0.15s;
//   cursor: pointer;
//   position: relative;
// }
// .pl-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
// .pl-card.selected { border-color: var(--blue); box-shadow: 0 0 0 2px var(--blue-border); }
// .pl-card-img {
//   width: 100%; aspect-ratio: 1;
//   object-fit: cover; display: block;
//   transition: transform 0.3s;
//   background: var(--surface2);
// }
// .pl-card:hover .pl-card-img { transform: scale(1.03); }
// .pl-card-img-wrap { overflow: hidden; position: relative; }
// .pl-card-bestseller {
//   position: absolute; top: 10px; left: 10px;
//   background: linear-gradient(135deg, #f59e0b, #d97706);
//   color: #fff; border-radius: 5px; padding: 3px 9px;
//   font-size: 10px; font-weight: 700; letter-spacing: 0.4px;
// }
// .pl-card-img-count {
//   position: absolute; top: 10px; right: 10px;
//   background: rgba(0,0,0,0.55); color: #fff;
//   border-radius: 6px; padding: 3px 8px; font-size: 10.5px; font-weight: 700;
// }
// .pl-card-body { padding: 14px 16px; }
// .pl-card-cats { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 8px; }
// .pl-card-cat { background: var(--surface2); color: var(--muted); border-radius: 20px; padding: 2px 9px; font-size: 11px; font-weight: 500; }
// .pl-card-name { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 8px; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
// .pl-card-price-row { display: flex; align-items: baseline; gap: 7px; margin-bottom: 10px; }
// .pl-card-price { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 800; color: var(--ink); }
// .pl-card-old { font-size: 12px; color: var(--muted); text-decoration: line-through; }
// .pl-card-disc { font-size: 11px; color: var(--green); font-weight: 700; background: var(--green-bg); padding: 1px 6px; border-radius: 4px; }
// .pl-card-attrs { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 12px; }
// .pl-card-footer { display: flex; gap: 7px; border-top: 1px solid var(--border2); padding-top: 12px; }
// .pl-card-footer .pl-action-btn { flex: 1; justify-content: center; }
// .pl-card-sel {
//   position: absolute; top: 10px; left: 10px;
//   width: 22px; height: 22px; border-radius: 6px;
//   background: var(--white); border: 2px solid var(--border);
//   display: flex; align-items: center; justify-content: center;
//   cursor: pointer; font-size: 12px; transition: all 0.15s;
// }
// .pl-card-sel.on { background: var(--blue); border-color: var(--blue); color: #fff; }

// /* ── CHECKBOX ── */
// .pl-checkbox { width: 16px; height: 16px; accent-color: var(--ink); cursor: pointer; }
// .pl-chk-cell { display: flex; align-items: center; justify-content: center; }

// /* ── BULK BAR ── */
// .pl-bulk-bar {
//   position: sticky; bottom: 24px;
//   margin: 0 28px 16px;
//   background: var(--ink);
//   color: #fff;
//   border-radius: var(--radius);
//   padding: 14px 20px;
//   display: flex; align-items: center; justify-content: space-between;
//   gap: 14px;
//   box-shadow: var(--shadow-lg);
//   animation: slideUp 0.2s ease;
//   z-index: 100;
// }
// .pl-bulk-info { font-size: 13.5px; font-weight: 600; }
// .pl-bulk-info span { opacity: 0.65; font-weight: 400; margin-left: 4px; }
// .pl-bulk-actions { display: flex; gap: 8px; }
// .pl-bulk-btn {
//   display: inline-flex; align-items: center; gap: 6px;
//   padding: 7px 14px; border-radius: var(--radius-sm);
//   font-size: 12.5px; font-weight: 600; cursor: pointer;
//   transition: all 0.15s; border: none; font-family: 'DM Sans', sans-serif;
// }
// .pl-bulk-del { background: var(--red); color: #fff; }
// .pl-bulk-del:hover { background: #b91c1c; }
// .pl-bulk-cancel { background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
// .pl-bulk-cancel:hover { background: rgba(255,255,255,0.25); }

// /* ── EMPTY STATE ── */
// .pl-empty {
//   text-align: center;
//   padding: 60px 20px;
//   color: var(--muted);
// }
// .pl-empty-icon { font-size: 48px; margin-bottom: 12px; }
// .pl-empty h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: var(--ink2); margin-bottom: 8px; }
// .pl-empty p { font-size: 13.5px; color: var(--muted); }

// /* ── SKELETON ── */
// .pl-skeleton { animation: shimmer 1.5s infinite; background: linear-gradient(90deg, var(--surface2) 25%, var(--border2) 50%, var(--surface2) 75%); background-size: 200% 100%; border-radius: 6px; }
// @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

// /* ── CONFIRM MODAL ── */
// .pl-modal-ov {
//   position: fixed; inset: 0; background: rgba(0,0,0,0.5);
//   z-index: 9999; display: flex; align-items: center; justify-content: center;
//   animation: fadeIn 0.15s ease; backdrop-filter: blur(3px);
// }
// .pl-modal {
//   background: var(--white); border-radius: 16px;
//   padding: 28px; width: 380px; max-width: 90vw;
//   box-shadow: var(--shadow-lg); animation: slideUp 0.2s ease;
//   text-align: center;
// }
// .pl-modal-icon { font-size: 40px; margin-bottom: 12px; }
// .pl-modal h3 { font-family: 'Syne', sans-serif; font-size: 19px; font-weight: 700; margin: 0 0 8px; }
// .pl-modal p { font-size: 13.5px; color: var(--ink3); margin: 0 0 22px; line-height: 1.5; }
// .pl-modal-actions { display: flex; gap: 10px; }
// .pl-modal-actions button { flex: 1; }

// /* ── IMAGE PREVIEW MODAL ── */
// .pl-img-modal-ov {
//   position: fixed; inset: 0; background: rgba(0,0,0,0.88);
//   z-index: 9999; display: flex; align-items: center; justify-content: center;
//   animation: fadeIn 0.18s ease; backdrop-filter: blur(4px);
// }
// .pl-img-modal {
//   position: relative; display: flex; flex-direction: column;
//   align-items: center; gap: 14px; max-width: 90vw;
// }
// .pl-img-modal img {
//   max-width: 82vw; max-height: 74vh;
//   border-radius: 12px; object-fit: contain;
//   box-shadow: var(--shadow-lg);
// }
// .pl-img-modal-close {
//   position: absolute; top: -14px; right: -14px;
//   width: 34px; height: 34px; border-radius: 50%;
//   background: #fff; border: none; cursor: pointer;
//   font-size: 14px; font-weight: 700; color: var(--ink);
//   box-shadow: 0 2px 8px rgba(0,0,0,0.2);
//   display: flex; align-items: center; justify-content: center;
//   transition: transform 0.15s;
// }
// .pl-img-modal-close:hover { transform: rotate(90deg); }
// .pl-img-modal-name { color: rgba(255,255,255,0.65); font-size: 12px; text-align: center; }
// .pl-img-modal-thumbs { display: flex; gap: 8px; }
// .pl-img-modal-thumb {
//   width: 50px; height: 50px; border-radius: 7px;
//   object-fit: cover; cursor: pointer; opacity: 0.55;
//   border: 2px solid transparent; transition: all 0.15s;
// }
// .pl-img-modal-thumb.on { border-color: #fff; opacity: 1; }
// .pl-img-arr {
//   position: absolute; top: 50%; transform: translateY(-50%);
//   background: rgba(255,255,255,0.15); border: none; border-radius: 50%;
//   width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
//   cursor: pointer; font-size: 18px; color: #fff; transition: background 0.15s;
// }
// .pl-img-arr:hover { background: rgba(255,255,255,0.28); }
// .pl-img-prev { left: -56px; } .pl-img-next { right: -56px; }

// /* ── PAGINATION ── */
// .pl-pagination {
//   display: flex; align-items: center; justify-content: center;
//   gap: 6px; padding: 0 28px 40px;
// }
// .pl-page-btn {
//   display: inline-flex; align-items: center; justify-content: center;
//   min-width: 36px; height: 36px; padding: 0 8px;
//   border: 1.5px solid var(--border); border-radius: var(--radius-sm);
//   background: var(--white); color: var(--ink2);
//   font-size: 13px; font-weight: 600; cursor: pointer;
//   transition: all 0.15s; font-family: 'DM Sans', sans-serif;
// }
// .pl-page-btn:hover { background: var(--surface2); }
// .pl-page-btn.on { background: var(--ink); color: #fff; border-color: var(--ink); }
// .pl-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }

// /* ── RESPONSIVE ── */
// @media (max-width: 768px) {
//   .pl-topbar { padding: 0 14px; }
//   .pl-stats, .pl-toolbar, .pl-results, .pl-table-wrap, .pl-cards, .pl-bulk-bar { padding-left: 14px; padding-right: 14px; }
//   .pl-bulk-bar { margin: 0 14px 14px; }
//   .pl-topbar-left h1 { font-size: 17px; }
//   .pl-stat-val { font-size: 18px; }
// }
// @media (max-width: 640px) {
//   .pl-topbar-right .pl-btn-text { display: none; }
// }

// /* ── UTILS ── */
// @keyframes fadeIn { from{opacity:0}to{opacity:1} }
// @keyframes slideUp { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
// .pl-truncate { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px; }
// `;

// /* ═══════════════════════════════════════════════════════════
//    IMAGE PREVIEW MODAL
// ═══════════════════════════════════════════════════════════ */
// const ImgModal = ({ images, start, name, onClose }) => {
//   const [cur, setCur] = useState(start);
//   const imgs = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean);

//   useEffect(() => {
//     const h = (e) => {
//       if (e.key === 'Escape') onClose();
//       if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1));
//       if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1));
//     };
//     window.addEventListener('keydown', h);
//     return () => window.removeEventListener('keydown', h);
//   }, [imgs.length, onClose]);

//   if (!imgs[cur]) return null;

//   return (
//     <div className="pl-img-modal-ov" onClick={onClose}>
//       <div className="pl-img-modal" onClick={e => e.stopPropagation()}>
//         <button className="pl-img-modal-close" onClick={onClose}>✕</button>
//         <img src={imgs[cur]} alt={name} />
//         {cur > 0 && <button className="pl-img-arr pl-img-prev" onClick={() => setCur(p => p - 1)}>‹</button>}
//         {cur < imgs.length - 1 && <button className="pl-img-arr pl-img-next" onClick={() => setCur(p => p + 1)}>›</button>}
//         {imgs.length > 1 && (
//           <div className="pl-img-modal-thumbs">
//             {imgs.map((img, i) => <img key={i} className={`pl-img-modal-thumb ${i === cur ? 'on' : ''}`} src={img} alt="" onClick={() => setCur(i)} />)}
//           </div>
//         )}
//         <div className="pl-img-modal-name">{name} &nbsp;·&nbsp; {cur + 1}/{imgs.length} &nbsp;·&nbsp; Esc to close</div>
//       </div>
//     </div>
//   );
// };

// /* ═══════════════════════════════════════════════════════════
//    CONFIRM MODAL
// ═══════════════════════════════════════════════════════════ */
// const ConfirmModal = ({ title, desc, onConfirm, onCancel }) => (
//   <div className="pl-modal-ov" onClick={onCancel}>
//     <div className="pl-modal" onClick={e => e.stopPropagation()}>
//       <div className="pl-modal-icon">🗑️</div>
//       <h3>{title}</h3>
//       <p>{desc}</p>
//       <div className="pl-modal-actions">
//         <button className="pl-btn pl-btn-ghost" onClick={onCancel}>Cancel</button>
//         <button className="pl-btn pl-btn-danger" onClick={onConfirm}>Yes, Delete</button>
//       </div>
//     </div>
//   </div>
// );

// /* ═══════════════════════════════════════════════════════════
//    HELPERS
// ═══════════════════════════════════════════════════════════ */
// const getStock = (sizes) => {
//   if (!sizes || !Array.isArray(sizes)) return 0;
//   return sizes.reduce((sum, s) => sum + (s.stock || 0), 0);
// };

// const getDiscount = (price, discountPrice) => {
//   if (!discountPrice || !price || +discountPrice >= +price) return null;
//   return Math.round((1 - discountPrice / price) * 100);
// };

// const formatId = (id) => id ? `#${id.toString().slice(-6).toUpperCase()}` : '—';

// /* ═══════════════════════════════════════════════════════════
//    SKELETON ROW
// ═══════════════════════════════════════════════════════════ */
// const SkeletonRow = () => (
//   <tr>
//     <td className="pl-td"><div className="pl-skeleton" style={{ width: 16, height: 16, borderRadius: 3 }} /></td>
//     <td className="pl-td">
//       <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
//         <div className="pl-skeleton" style={{ width: 52, height: 52, borderRadius: 9 }} />
//         <div><div className="pl-skeleton" style={{ width: 140, height: 14, marginBottom: 6 }} /><div className="pl-skeleton" style={{ width: 70, height: 10 }} /></div>
//       </div>
//     </td>
//     {[80, 70, 90, 60, 70, 80, 90].map((w, i) => <td key={i} className="pl-td"><div className="pl-skeleton" style={{ width: w, height: 14 }} /></td>)}
//   </tr>
// );

// /* ═══════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════════════════════ */
// const ProductsList = ({ token }) => {
//   const navigate = useNavigate();
//   const [list, setList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [catFilter, setCatFilter] = useState('all');
//   const [subCatFilter, setSubCatFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');
//   const [sortDir, setSortDir] = useState('desc');
//   const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
//   const [selected, setSelected] = useState([]);
//   const [deletingIds, setDeletingIds] = useState([]);
//   const [confirmDelete, setConfirmDelete] = useState(null); // { id, name } | 'bulk'
//   const [imgModal, setImgModal] = useState(null); // { images, name, start }
//   const [page, setPage] = useState(1);
//   const PER_PAGE = 12;

//   const fetchList = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(backendUrl + '/api/product/list');
//       if (response.data.success) setList(response.data.products);
//       else toast.error(response.data.message);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeProduct = async (id) => {
//     setDeletingIds(p => [...p, id]);
//     try {
//       const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
//       if (response.data.success) { toast.success('Product removed'); await fetchList(); setSelected(p => p.filter(s => s !== id)); }
//       else toast.error(response.data.message);
//     } catch (error) { toast.error(error.message); }
//     finally { setDeletingIds(p => p.filter(x => x !== id)); }
//   };

//   const removeBulk = async () => {
//     const ids = [...selected];
//     for (const id of ids) await removeProduct(id);
//     setSelected([]);
//     toast.success(`${ids.length} products removed`);
//   };

//   useEffect(() => { fetchList(); }, []);
//   useEffect(() => { setPage(1); }, [search, catFilter, subCatFilter, sortBy]);

//   // Categories from list
//   const categories = ['all', ...new Set(list.map(p => p.category).filter(Boolean))];
//   const subCategories = ['all', ...new Set(list.filter(p => catFilter === 'all' || p.category === catFilter).map(p => p.subCategory).filter(Boolean))];

//   // Filter & sort
//   const filtered = list.filter(p => {
//     const q = search.toLowerCase();
//     const matchSearch = !q || p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.subCategory?.toLowerCase().includes(q);
//     const matchCat = catFilter === 'all' || p.category === catFilter;
//     const matchSub = subCatFilter === 'all' || p.subCategory === subCatFilter;
//     return matchSearch && matchCat && matchSub;
//   }).sort((a, b) => {
//     if (sortBy === 'newest') {
//       return sortDir === 'asc' ? a._id.localeCompare(b._id) : b._id.localeCompare(a._id);
//     } else if (sortBy === 'name') {
//       const nameA = a.name || '';
//       const nameB = b.name || '';
//       return sortDir === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
//     } else {
//       let valA, valB;
//       if (sortBy === 'price') {
//         valA = +a.price || 0;
//         valB = +b.price || 0;
//       } else if (sortBy === 'stock') {
//         valA = getStock(a.sizes);
//         valB = getStock(b.sizes);
//       }
//       return sortDir === 'asc' ? valA - valB : valB - valA;
//     }
//   });

//   const totalPages = Math.ceil(filtered.length / PER_PAGE);
//   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//   const toggleSelect = (id) => setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
//   const toggleAll = () => setSelected(selected.length === paginated.length ? [] : paginated.map(p => p._id));

//   const handleSort = (col) => {
//     if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
//     else { setSortBy(col); setSortDir('asc'); }
//   };

//   // Stats
//   const totalStock = list.reduce((s, p) => s + getStock(p.sizes), 0);
//   const bestsellerCount = list.filter(p => p.bestseller).length;
//   const outOfStock = list.filter(p => getStock(p.sizes) === 0).length;

//   const SortIcon = ({ col }) => {
//     if (sortBy !== col) return <span className="pl-sort-icon">↕</span>;
//     return <span className="pl-sort-icon active">{sortDir === 'asc' ? '↑' : '↓'}</span>;
//   };

//   const renderTable = () => (
//     <div className="pl-table-wrap">
//       <table className="pl-table">
//         <thead className="pl-thead">
//           <tr>
//             <th className="pl-th" style={{ width: 40 }}>
//               <input type="checkbox" className="pl-checkbox" checked={paginated.length > 0 && selected.length === paginated.length} onChange={toggleAll} />
//             </th>
//             <th className={`pl-th ${sortBy === 'name' ? 'sorted' : ''}`} style={{ minWidth: 220 }} onClick={() => handleSort('name')}>
//               <span className="pl-th-sort">Product <SortIcon col="name" /></span>
//             </th>
//             <th className="pl-th">Category</th>
//             <th className="pl-th">Sub-cat</th>
//             <th className={`pl-th ${sortBy === 'price' ? 'sorted' : ''}`} onClick={() => handleSort('price')}>
//               <span className="pl-th-sort">Price <SortIcon col="price" /></span>
//             </th>
//             <th className={`pl-th ${sortBy === 'stock' ? 'sorted' : ''}`} onClick={() => handleSort('stock')}>
//               <span className="pl-th-sort">Stock <SortIcon col="stock" /></span>
//             </th>
//             <th className="pl-th">Colors</th>
//             <th className="pl-th">Sizes</th>
//             <th className="pl-th">Status</th>
//             <th className="pl-th" style={{ minWidth: 140 }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody className="pl-tbody">
//           {loading ? (
//             Array(6).fill(0).map((_, i) => <SkeletonRow key={i} />)
//           ) : paginated.length === 0 ? (
//             <tr><td colSpan={10}>
//               <div className="pl-empty">
//                 <div className="pl-empty-icon">🔍</div>
//                 <h3>No products found</h3>
//                 <p>Try adjusting your search or filters</p>
//               </div>
//             </td></tr>
//           ) : paginated.map((item) => {
//             const stock = getStock(item.sizes);
//             const disc = getDiscount(item.price, item.discountPrice);
//             const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean);
//             const colors = item.color || [];
//             const sizes = item.sizes || [];
//             const isDeleting = deletingIds.includes(item._id);

//             return (
//               <tr key={item._id} className={`${selected.includes(item._id) ? 'selected' : ''} ${isDeleting ? 'deleting' : ''}`}>
//                 <td className="pl-td pl-chk-cell">
//                   <input type="checkbox" className="pl-checkbox" checked={selected.includes(item._id)} onChange={() => toggleSelect(item._id)} />
//                 </td>
//                 <td className="pl-td">
//                   <div className="pl-product-cell">
//                     <div className="pl-img-wrap" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>
//                       <img className="pl-img" src={imgs[0]} alt={item.name} />
//                       {imgs.length > 1 && <span className="pl-img-count">+{imgs.length - 1}</span>}
//                     </div>
//                     <div className="pl-product-info">
//                       <div className="pl-product-name" onClick={() => navigate(`/update-product/${item._id}`)}>{item.name}</div>
//                       <div className="pl-product-id">{formatId(item._id)}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="pl-td"><span className="pl-badge pl-badge-gray">{item.category}</span></td>
//                 <td className="pl-td"><span className="pl-badge pl-badge-gray">{item.subCategory}</span></td>
//                 <td className="pl-td">
//                   <div className="pl-price-main">{currency}{item.discountPrice || item.price}</div>
//                   {disc && <><div className="pl-price-old">{currency}{item.price}</div><div className="pl-price-disc">{disc}% off</div></>}
//                 </td>
//                 <td className="pl-td">
//                   <div className={`pl-stock ${stock > 10 ? 'good' : stock > 0 ? 'low' : 'none'}`}>
//                     {stock > 0 ? stock : 'Out'}
//                   </div>
//                   {stock > 0 && stock <= 10 && <div style={{ fontSize: 10, color: 'var(--amber)', fontWeight: 600, marginTop: 1 }}>Low stock</div>}
//                 </td>
//                 <td className="pl-td">
//                   {colors.length > 0 ? (
//                     <div className="pl-colors">
//                       {colors.slice(0, 5).map((c, i) => <div key={i} className="pl-color-dot" style={{ backgroundColor: c.hex || c }} title={c.name || c} />)}
//                       {colors.length > 5 && <span className="pl-color-more">+{colors.length - 5}</span>}
//                     </div>
//                   ) : <span style={{ color: 'var(--muted)', fontSize: 12 }}>—</span>}
//                 </td>
//                 <td className="pl-td">
//                   {sizes.length > 0 ? (
//                     <div className="pl-sizes">
//                       {sizes.slice(0, 4).map((s, i) => <span key={i} className="pl-size-pill">{typeof s === 'object' ? s.size : s}</span>)}
//                       {sizes.length > 4 && <span className="pl-size-pill">+{sizes.length - 4}</span>}
//                     </div>
//                   ) : <span style={{ color: 'var(--muted)', fontSize: 12 }}>—</span>}
//                 </td>
//                 <td className="pl-td">
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
//                     {item.bestseller && <span className="pl-badge pl-badge-amber">⭐ Bestseller</span>}
//                     {stock === 0 ? <span className="pl-badge pl-badge-red">Out of stock</span> : stock <= 10 ? <span className="pl-badge pl-badge-amber">Low stock</span> : <span className="pl-badge pl-badge-green">In stock</span>}
//                   </div>
//                 </td>
//                 <td className="pl-td">
//                   <div className="pl-actions">
//                     <button className="pl-action-btn pl-action-view" title="View images" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>🔍</button>
//                     <button className="pl-action-btn pl-action-edit" onClick={() => navigate(`/update-product/${item._id}`)}>✏️ Edit</button>
//                     <button className="pl-action-btn pl-action-del" onClick={() => setConfirmDelete({ id: item._id, name: item.name })}>🗑</button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderGrid = () => (
//     <div className="pl-cards">
//       {loading ? (
//         Array(8).fill(0).map((_, i) => (
//           <div key={i} className="pl-card" style={{ cursor: 'default' }}>
//             <div className="pl-skeleton" style={{ width: '100%', aspectRatio: '1', borderRadius: 0 }} />
//             <div style={{ padding: 16 }}>
//               <div className="pl-skeleton" style={{ width: '60%', height: 12, marginBottom: 10 }} />
//               <div className="pl-skeleton" style={{ width: '90%', height: 16, marginBottom: 8 }} />
//               <div className="pl-skeleton" style={{ width: '40%', height: 18 }} />
//             </div>
//           </div>
//         ))
//       ) : paginated.length === 0 ? (
//         <div style={{ gridColumn: '1/-1' }}>
//           <div className="pl-empty">
//             <div className="pl-empty-icon">🔍</div>
//             <h3>No products found</h3>
//             <p>Try adjusting your search or filters</p>
//           </div>
//         </div>
//       ) : paginated.map((item) => {
//         const stock = getStock(item.sizes);
//         const disc = getDiscount(item.price, item.discountPrice);
//         const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean);
//         const colors = item.color || [];
//         const sizes = item.sizes || [];

//         return (
//           <div key={item._id} className={`pl-card ${selected.includes(item._id) ? 'selected' : ''}`}>
//             <div className="pl-card-img-wrap" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>
//               <img className="pl-card-img" src={imgs[0]} alt={item.name} />
//               {item.bestseller && <span className="pl-card-bestseller">⭐ BESTSELLER</span>}
//               {imgs.length > 1 && <span className="pl-card-img-count">+{imgs.length - 1} photos</span>}
//               <div className={`pl-card-sel ${selected.includes(item._id) ? 'on' : ''}`} onClick={e => { e.stopPropagation(); toggleSelect(item._id); }}>
//                 {selected.includes(item._id) ? '✓' : ''}
//               </div>
//             </div>
//             <div className="pl-card-body">
//               <div className="pl-card-cats">
//                 <span className="pl-card-cat">{item.category}</span>
//                 {item.subCategory && <span className="pl-card-cat">{item.subCategory}</span>}
//               </div>
//               <div className="pl-card-name" onClick={() => navigate(`/update-product/${item._id}`)}>{item.name}</div>
//               <div className="pl-card-price-row">
//                 <span className="pl-card-price">{currency}{item.discountPrice || item.price}</span>
//                 {disc && <><span className="pl-card-old">{currency}{item.price}</span><span className="pl-card-disc">{disc}% off</span></>}
//               </div>
//               <div className="pl-card-attrs">
//                 {stock === 0 ? <span className="pl-badge pl-badge-red">Out of stock</span> : stock <= 10 ? <span className="pl-badge pl-badge-amber">{stock} left</span> : <span className="pl-badge pl-badge-green">{stock} in stock</span>}
//                 {colors.length > 0 && (
//                   <div className="pl-colors" style={{ alignItems: 'center' }}>
//                     {colors.slice(0, 4).map((c, i) => <div key={i} className="pl-color-dot" style={{ backgroundColor: c.hex || c }} title={c.name || c} />)}
//                     {colors.length > 4 && <span className="pl-color-more">+{colors.length - 4}</span>}
//                   </div>
//                 )}
//                 {sizes.length > 0 && (
//                   <div className="pl-sizes">
//                     {sizes.slice(0, 3).map((s, i) => <span key={i} className="pl-size-pill">{typeof s === 'object' ? s.size : s}</span>)}
//                     {sizes.length > 3 && <span className="pl-size-pill">+{sizes.length - 3}</span>}
//                   </div>
//                 )}
//               </div>
//               <div className="pl-card-footer">
//                 <button className="pl-action-btn pl-action-view pl-btn-xs" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>🔍 View</button>
//                 <button className="pl-action-btn pl-action-edit" onClick={() => navigate(`/update-product/${item._id}`)}>✏️ Edit</button>
//                 <button className="pl-action-btn pl-action-del" onClick={() => setConfirmDelete({ id: item._id, name: item.name })}>🗑</button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );

//   return (
//     <div className="pl">
//       <style>{CSS}</style>

//       {/* ── TOP BAR ── */}
//       <div className="pl-topbar">
//         <div className="pl-topbar-left">
//           <h1>Products</h1>
//           <div className="pl-divider" />
//           <span style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 500 }}>{loading ? '…' : `${list.length} total`}</span>
//         </div>
//         <div className="pl-topbar-right">
//           <button className="pl-btn pl-btn-ghost pl-btn-sm" onClick={fetchList}>
//             <span>↺</span> <span className="pl-btn-text">Refresh</span>
//           </button>
//           <button className="pl-btn pl-btn-primary pl-btn-sm" onClick={() => navigate('/add')}>
//             <span>＋</span> <span className="pl-btn-text">Add Product</span>
//           </button>
//         </div>
//       </div>

//       {/* ── STATS ── */}
//       <div className="pl-stats">
//         {[
//           { icon: '📦', val: list.length, lbl: 'Total Products', bg: 'var(--blue-bg)' },
//           { icon: '🏷️', val: totalStock, lbl: 'Total Stock', bg: 'var(--green-bg)' },
//           { icon: '⭐', val: bestsellerCount, lbl: 'Bestsellers', bg: 'var(--amber-bg)' },
//           { icon: '⚠️', val: outOfStock, lbl: 'Out of Stock', bg: 'var(--red-bg)' },
//         ].map(({ icon, val, lbl, bg }, i) => (
//           <div key={i} className="pl-stat" style={{ animationDelay: `${i * 60}ms` }}>
//             <div className="pl-stat-icon" style={{ background: bg }}>{icon}</div>
//             <div className="pl-stat-body">
//               <div className="pl-stat-val">{loading ? '—' : val.toLocaleString()}</div>
//               <div className="pl-stat-lbl">{lbl}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── TOOLBAR ── */}
//       <div className="pl-toolbar">
//         <div className="pl-search-wrap">
//           <span className="pl-search-icon">🔍</span>
//           <input className="pl-search" type="text" placeholder="Search by name, category…" value={search} onChange={e => setSearch(e.target.value)} />
//           {search && <button className="pl-search-clear" onClick={() => setSearch('')}>✕</button>}
//         </div>

//         <select className="pl-select" value={catFilter} onChange={e => { setCatFilter(e.target.value); setSubCatFilter('all'); }}>
//           {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
//         </select>

//         <select className="pl-select" value={subCatFilter} onChange={e => setSubCatFilter(e.target.value)}>
//           {subCategories.map(s => <option key={s} value={s}>{s === 'all' ? 'All Sub-cats' : s}</option>)}
//         </select>

//         <select className="pl-select" value={sortBy} onChange={e => {
//           const val = e.target.value;
//           setSortBy(val);
//           setSortDir(val === 'newest' ? 'desc' : 'asc');
//         }}>
//           <option value="newest">Newest First</option>
//           <option value="name">Name (A–Z)</option>
//           <option value="price">Price (Low to High)</option>
//           <option value="stock">Stock (Low to High)</option>
//         </select>

//         <div className="pl-view-toggle">
//           <button className={`pl-vbtn ${viewMode === 'table' ? 'on' : ''}`} title="Table view" onClick={() => setViewMode('table')}>☰</button>
//           <button className={`pl-vbtn ${viewMode === 'grid' ? 'on' : ''}`} title="Grid view" onClick={() => setViewMode('grid')}>⊞</button>
//         </div>
//       </div>

//       {/* ── RESULTS BAR ── */}
//       <div className="pl-results">
//         <div className="pl-results-count">
//           {loading ? 'Loading…' : <>Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> products {search && `for "${search}"`}</>}
//         </div>
//         {selected.length > 0 && (
//           <span style={{ fontSize: 12.5, color: 'var(--blue)', fontWeight: 600 }}>{selected.length} selected</span>
//         )}
//       </div>

//       {/* ── CONTENT ── */}
//       {viewMode === 'table' ? renderTable() : renderGrid()}

//       {/* ── PAGINATION ── */}
//       {!loading && totalPages > 1 && (
//         <div className="pl-pagination">
//           <button className="pl-page-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1).reduce((acc, p, i, arr) => {
//             if (i > 0 && arr[i - 1] !== p - 1) acc.push('…');
//             acc.push(p);
//             return acc;
//           }, []).map((p, i) =>
//             p === '…' ? <span key={`e${i}`} style={{ padding: '0 4px', color: 'var(--muted)' }}>…</span> :
//               <button key={p} className={`pl-page-btn ${page === p ? 'on' : ''}`} onClick={() => setPage(p)}>{p}</button>
//           )}
//           <button className="pl-page-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
//         </div>
//       )}

//       {/* ── BULK BAR ── */}
//       {selected.length > 0 && (
//         <div className="pl-bulk-bar">
//           <div className="pl-bulk-info">{selected.length} products selected <span>· Bulk actions</span></div>
//           <div className="pl-bulk-actions">
//             <button className="pl-bulk-btn pl-bulk-cancel" onClick={() => setSelected([])}>✕ Deselect</button>
//             <button className="pl-bulk-btn pl-bulk-del" onClick={() => setConfirmDelete('bulk')}>🗑 Delete Selected</button>
//           </div>
//         </div>
//       )}

//       {/* ── CONFIRM MODAL ── */}
//       {confirmDelete && (
//         <ConfirmModal
//           title={confirmDelete === 'bulk' ? `Delete ${selected.length} Products?` : 'Delete Product?'}
//           desc={confirmDelete === 'bulk' ? `This will permanently remove ${selected.length} selected products. This action cannot be undone.` : `"${confirmDelete.name}" will be permanently removed. This action cannot be undone.`}
//           onConfirm={() => { setConfirmDelete(null); confirmDelete === 'bulk' ? removeBulk() : removeProduct(confirmDelete.id); }}
//           onCancel={() => setConfirmDelete(null)}
//         />
//       )}

//       {/* ── IMAGE MODAL ── */}
//       {imgModal && <ImgModal {...imgModal} onClose={() => setImgModal(null)} />}
//     </div>
//   );
// };

// export default ProductsList;






// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import { backendUrl, currency } from '../../App'
// import { BiSolidCrown } from 'react-icons/bi'
// import { HiOutlineSearch, HiOutlineRefresh } from 'react-icons/hi'
// import { MdOutlineGridView, MdOutlineTableRows, MdOutlineInventory2 } from 'react-icons/md'
// import { TbEdit, TbTrash, TbEye, TbChartBar, TbPackage, TbStar, TbAlertTriangle, TbPlus, TbX, TbFilter } from 'react-icons/tb'
// import { FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// import { BsBoxSeam } from 'react-icons/bs'

// /* ═══════════════════ HELPERS ═══════════════════ */
// const getStock = (sizes) => {
//   if (!sizes || !Array.isArray(sizes)) return 0
//   return sizes.reduce((sum, s) => sum + (s.stock || 0), 0)
// }

// const getDiscount = (price, discountPrice) => {
//   if (!discountPrice || !price || +discountPrice >= +price) return null
//   return Math.round((1 - discountPrice / price) * 100)
// }

// const formatId = (id) => id ? `#${id.toString().slice(-6).toUpperCase()}` : '—'

// /* ═══════════════════ IMAGE MODAL ═══════════════════ */
// const ImgModal = ({ images, start, name, onClose }) => {
//   const [cur, setCur] = useState(start)
//   const imgs = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean)

//   useEffect(() => {
//     const h = (e) => {
//       if (e.key === 'Escape') onClose()
//       if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1))
//       if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1))
//     }
//     window.addEventListener('keydown', h)
//     return () => window.removeEventListener('keydown', h)
//   }, [imgs.length, onClose])

//   if (!imgs[cur]) return null

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
//       <div className="relative flex flex-col items-center gap-4 max-w-[90vw]" onClick={e => e.stopPropagation()}>
//         <button
//           onClick={onClose}
//           className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg text-gray-700 hover:rotate-90 transition-transform z-10"
//         >
//           <TbX size={14} />
//         </button>
//         <img src={imgs[cur]} alt={name} className="max-w-[80vw] max-h-[70vh] rounded-xl object-contain shadow-2xl" />
//         {cur > 0 && (
//           <button onClick={() => setCur(p => p - 1)} className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors">
//             <FiChevronLeft size={22} />
//           </button>
//         )}
//         {cur < imgs.length - 1 && (
//           <button onClick={() => setCur(p => p + 1)} className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors">
//             <FiChevronRight size={22} />
//           </button>
//         )}
//         {imgs.length > 1 && (
//           <div className="flex gap-2">
//             {imgs.map((img, i) => (
//               <img key={i} src={img} alt="" onClick={() => setCur(i)} className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${i === cur ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-75'}`} />
//             ))}
//           </div>
//         )}
//         <p className="text-white/50 text-xs">{name} · {cur + 1}/{imgs.length} · Esc to close</p>
//       </div>
//     </div>
//   )
// }

// /* ═══════════════════ CONFIRM MODAL ═══════════════════ */
// const ConfirmModal = ({ title, desc, onConfirm, onCancel }) => (
//   <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={onCancel}>
//     <div className="bg-white rounded-2xl p-7 w-[360px] max-w-[90vw] shadow-2xl text-center animate-slideUp" onClick={e => e.stopPropagation()}>
//       <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
//         <TbTrash size={26} className="text-red-500" />
//       </div>
//       <h3 className="text-[17px] font-bold text-gray-900 mb-2">{title}</h3>
//       <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">{desc}</p>
//       <div className="flex gap-3">
//         <button onClick={onCancel} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
//         <button onClick={onConfirm} className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white text-[13px] font-semibold hover:bg-red-600 transition-colors">Yes, Delete</button>
//       </div>
//     </div>
//   </div>
// )

// /* ═══════════════════ SKELETON ROW ═══════════════════ */
// const SkeletonRow = () => (
//   <tr className="border-b border-gray-100">
//     {[40, 240, 100, 100, 90, 70, 80, 80, 110, 130].map((w, i) => (
//       <td key={i} className="px-4 py-3.5">
//         <div className="h-4 bg-gray-100 rounded-md animate-pulse" style={{ width: w }} />
//       </td>
//     ))}
//   </tr>
// )

// /* ═══════════════════ STAT CARD ═══════════════════ */
// const StatCard = ({ icon, value, label, color, loading }) => (
//   <div className={`bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}>
//     <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
//       {icon}
//     </div>
//     <div>
//       <div className="text-[22px] font-extrabold text-gray-900 leading-none tracking-tight">
//         {loading ? <div className="w-12 h-6 bg-gray-100 rounded animate-pulse" /> : value?.toLocaleString()}
//       </div>
//       <div className="text-[11.5px] text-gray-400 font-medium mt-1">{label}</div>
//     </div>
//   </div>
// )

// /* ═══════════════════ BADGE ═══════════════════ */
// const Badge = ({ type, children }) => {
//   const styles = {
//     green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
//     amber: 'bg-amber-50 text-amber-700 border border-amber-200',
//     red: 'bg-red-50 text-red-600 border border-red-200',
//     blue: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
//     gray: 'bg-gray-50 text-gray-600 border border-gray-200',
//     violet: 'bg-violet-50 text-violet-700 border border-violet-200',
//   }
//   return (
//     <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${styles[type] || styles.gray}`}>
//       {children}
//     </span>
//   )
// }

// /* ═══════════════════ MAIN ═══════════════════ */
// const ProductsList = ({ token }) => {
//   const navigate = useNavigate()
//   const [list, setList] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [search, setSearch] = useState('')
//   const [catFilter, setCatFilter] = useState('all')
//   const [subCatFilter, setSubCatFilter] = useState('all')
//   const [sortBy, setSortBy] = useState('newest')
//   const [sortDir, setSortDir] = useState('desc')
//   const [viewMode, setViewMode] = useState('table')
//   const [selected, setSelected] = useState([])
//   const [deletingIds, setDeletingIds] = useState([])
//   const [confirmDelete, setConfirmDelete] = useState(null)
//   const [imgModal, setImgModal] = useState(null)
//   const [page, setPage] = useState(1)
//   const PER_PAGE = 12

//   const fetchList = async () => {
//     setLoading(true)
//     try {
//       const res = await axios.get(backendUrl + '/api/product/list')
//       if (res.data.success) setList(res.data.products)
//       else toast.error(res.data.message)
//     } catch (e) { toast.error(e.message) }
//     finally { setLoading(false) }
//   }

//   const removeProduct = async (id) => {
//     setDeletingIds(p => [...p, id])
//     try {
//       const res = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
//       if (res.data.success) { toast.success('Product removed'); await fetchList(); setSelected(p => p.filter(x => x !== id)) }
//       else toast.error(res.data.message)
//     } catch (e) { toast.error(e.message) }
//     finally { setDeletingIds(p => p.filter(x => x !== id)) }
//   }

//   const removeBulk = async () => {
//     const ids = [...selected]
//     for (const id of ids) await removeProduct(id)
//     setSelected([])
//   }

//   useEffect(() => { fetchList() }, [])
//   useEffect(() => { setPage(1) }, [search, catFilter, subCatFilter, sortBy])

//   const categories = ['all', ...new Set(list.map(p => p.category).filter(Boolean))]
//   const subCategories = ['all', ...new Set(list.filter(p => catFilter === 'all' || p.category === catFilter).map(p => p.subCategory).filter(Boolean))]

//   const filtered = list.filter(p => {
//     const q = search.toLowerCase()
//     const matchSearch = !q || p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.subCategory?.toLowerCase().includes(q)
//     const matchCat = catFilter === 'all' || p.category === catFilter
//     const matchSub = subCatFilter === 'all' || p.subCategory === subCatFilter
//     return matchSearch && matchCat && matchSub
//   }).sort((a, b) => {
//     if (sortBy === 'newest') return sortDir === 'asc' ? a._id.localeCompare(b._id) : b._id.localeCompare(a._id)
//     if (sortBy === 'name') {
//       const r = (a.name || '').localeCompare(b.name || '')
//       return sortDir === 'asc' ? r : -r
//     }
//     const getVal = (p) => sortBy === 'price' ? (+p.price || 0) : getStock(p.sizes)
//     return sortDir === 'asc' ? getVal(a) - getVal(b) : getVal(b) - getVal(a)
//   })

//   const totalPages = Math.ceil(filtered.length / PER_PAGE)
//   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

//   const toggleSelect = (id) => setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])
//   const toggleAll = () => setSelected(selected.length === paginated.length ? [] : paginated.map(p => p._id))

//   const handleSort = (col) => {
//     if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
//     else { setSortBy(col); setSortDir('asc') }
//   }

//   const totalStock = list.reduce((s, p) => s + getStock(p.sizes), 0)
//   const bestsellerCount = list.filter(p => p.bestseller).length
//   const outOfStock = list.filter(p => getStock(p.sizes) === 0).length

//   const SortBtn = ({ col, label }) => (
//     <button onClick={() => handleSort(col)} className={`flex items-center gap-1 group transition-colors ${sortBy === col ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-700'}`}>
//       {label}
//       <span className="flex flex-col opacity-60 group-hover:opacity-100">
//         <FiChevronUp size={9} className={sortBy === col && sortDir === 'asc' ? 'text-indigo-600 opacity-100' : ''} />
//         <FiChevronDown size={9} className={sortBy === col && sortDir === 'desc' ? 'text-indigo-600 opacity-100' : ''} />
//       </span>
//     </button>
//   )

//   /* ── SELECT STYLES ── */
//   const selectCls = "border border-gray-200 rounded-xl px-3 py-2.5 text-[13px] text-gray-700 bg-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all appearance-none cursor-pointer pr-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=')] bg-no-repeat bg-[right_10px_center]"

//   /* ══════════════ TABLE ══════════════ */
//   const renderTable = () => (
//     <div className="mx-6 mb-8 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
//       <table className="w-full">
//         <thead>
//           <tr className="bg-gray-50/80 border-b border-gray-100">
//             <th className="px-4 py-3.5 text-left w-10">
//               <input type="checkbox" className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
//                 checked={paginated.length > 0 && selected.length === paginated.length} onChange={toggleAll} />
//             </th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400 min-w-[220px]">
//               <SortBtn col="name" label="Product" />
//             </th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Category</th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Sub-cat</th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
//               <SortBtn col="price" label="Price" />
//             </th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
//               <SortBtn col="stock" label="Stock" />
//             </th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Colors</th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Sizes</th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Status</th>
//             <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400 min-w-[140px]">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-50">
//           {loading ? (
//             Array(8).fill(0).map((_, i) => <SkeletonRow key={i} />)
//           ) : paginated.length === 0 ? (
//             <tr><td colSpan={10}>
//               <div className="flex flex-col items-center justify-center py-20 text-center">
//                 <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
//                   <BsBoxSeam size={28} className="text-gray-300" />
//                 </div>
//                 <h3 className="text-[16px] font-bold text-gray-700 mb-1">No products found</h3>
//                 <p className="text-[13px] text-gray-400">Try adjusting your search or filters</p>
//               </div>
//             </td></tr>
//           ) : paginated.map((item) => {
//             const stock = getStock(item.sizes)
//             const disc = getDiscount(item.price, item.discountPrice)
//             const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean)
//             const colors = item.color || []
//             const sizes = item.sizes || []
//             const isDeleting = deletingIds.includes(item._id)

//             return (
//               <tr key={item._id}
//                 className={`transition-colors group
//                   ${selected.includes(item._id) ? 'bg-indigo-50/60' : 'hover:bg-gray-50/60'}
//                   ${isDeleting ? 'opacity-40 pointer-events-none' : ''}`}>

//                 {/* Checkbox */}
//                 <td className="px-4 py-3.5">
//                   <input type="checkbox" className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
//                     checked={selected.includes(item._id)} onChange={() => toggleSelect(item._id)} />
//                 </td>

//                 {/* Product */}
//                 <td className="px-4 py-3.5">
//                   <div className="flex items-center gap-3">
//                     <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 bg-gray-50 cursor-pointer group/img"
//                       onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>
//                       <img src={imgs[0]} alt={item.name} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-200" />
//                       {imgs.length > 1 && (
//                         <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[8px] font-bold rounded px-1 leading-tight">+{imgs.length - 1}</span>
//                       )}
//                     </div>
//                     <div>
//                       <div className="text-[13.5px] font-semibold text-gray-900 leading-snug cursor-pointer hover:text-indigo-600 transition-colors line-clamp-2 max-w-[180px]"
//                         onClick={() => navigate(`/update-product/${item._id}`)}>
//                         {item.name}
//                       </div>
//                       <div className="text-[10.5px] text-gray-400 font-mono mt-0.5">{formatId(item._id)}</div>
//                     </div>
//                   </div>
//                 </td>

//                 {/* Category */}
//                 <td className="px-4 py-3.5"><Badge type="gray">{item.category}</Badge></td>

//                 {/* Subcat */}
//                 <td className="px-4 py-3.5"><Badge type="gray">{item.subCategory}</Badge></td>

//                 {/* Price */}
//                 <td className="px-4 py-3.5">
//                   <div className="text-[14px] font-bold text-gray-900">{currency}{item.discountPrice || item.price}</div>
//                   {disc && <>
//                     <div className="text-[11px] text-gray-400 line-through">{currency}{item.price}</div>
//                     <div className="text-[10.5px] text-emerald-600 font-bold">{disc}% off</div>
//                   </>}
//                 </td>

//                 {/* Stock */}
//                 <td className="px-4 py-3.5">
//                   <div className={`text-[13px] font-bold ${stock > 10 ? 'text-emerald-600' : stock > 0 ? 'text-amber-600' : 'text-red-500'}`}>
//                     {stock > 0 ? stock : 'Out'}
//                   </div>
//                   {stock > 0 && stock <= 10 && <div className="text-[10px] text-amber-500 font-semibold">Low stock</div>}
//                 </td>

//                 {/* Colors */}
//                 <td className="px-4 py-3.5">
//                   {colors.length > 0 ? (
//                     <div className="flex gap-1 flex-wrap">
//                       {colors.slice(0, 5).map((c, i) => (
//                         <div key={i} className="w-4 h-4 rounded-full border border-black/10 flex-shrink-0" style={{ backgroundColor: c.hex || c }} title={c.name || c} />
//                       ))}
//                       {colors.length > 5 && <span className="text-[10.5px] text-gray-400 font-semibold self-center">+{colors.length - 5}</span>}
//                     </div>
//                   ) : <span className="text-gray-300 text-[12px]">—</span>}
//                 </td>

//                 {/* Sizes */}
//                 <td className="px-4 py-3.5">
//                   {sizes.length > 0 ? (
//                     <div className="flex gap-1 flex-wrap">
//                       {sizes.slice(0, 4).map((s, i) => (
//                         <span key={i} className="bg-gray-100 text-gray-600 border border-gray-200 rounded-md px-1.5 py-0.5 text-[10px] font-bold">
//                           {typeof s === 'object' ? s.size : s}
//                         </span>
//                       ))}
//                       {sizes.length > 4 && <span className="bg-gray-100 text-gray-500 border border-gray-200 rounded-md px-1.5 py-0.5 text-[10px] font-bold">+{sizes.length - 4}</span>}
//                     </div>
//                   ) : <span className="text-gray-300 text-[12px]">—</span>}
//                 </td>

//                 {/* Status */}
//                 <td className="px-4 py-3.5">
//                   <div className="flex flex-col gap-1">
//                     {item.bestseller && <Badge type="amber">⭐ Bestseller</Badge>}
//                     {stock === 0 ? <Badge type="red">Out of stock</Badge>
//                       : stock <= 10 ? <Badge type="amber">Low stock</Badge>
//                         : <Badge type="green">In stock</Badge>}
//                   </div>
//                 </td>

//                 {/* Actions */}
//                 <td className="px-4 py-3.5">
//                   <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
//                     <button title="Preview" onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}
//                       className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all">
//                       <TbEye size={15} />
//                     </button>
//                     <button title="Edit" onClick={() => navigate(`/update-product/${item._id}`)}
//                       className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-all">
//                       <TbEdit size={15} />
//                     </button>
//                     <button title="Delete" onClick={() => setConfirmDelete({ id: item._id, name: item.name })}
//                       className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-100 transition-all">
//                       <TbTrash size={15} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )

//   /* ══════════════ GRID ══════════════ */
//   const renderGrid = () => (
//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-6 mb-8">
//       {loading ? (
//         Array(10).fill(0).map((_, i) => (
//           <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
//             <div className="w-full aspect-square bg-gray-100 animate-pulse" />
//             <div className="p-3 space-y-2">
//               <div className="h-3 bg-gray-100 rounded-md animate-pulse w-3/5" />
//               <div className="h-4 bg-gray-100 rounded-md animate-pulse w-4/5" />
//               <div className="h-4 bg-gray-100 rounded-md animate-pulse w-2/5" />
//             </div>
//           </div>
//         ))
//       ) : paginated.length === 0 ? (
//         <div className="col-span-full flex flex-col items-center justify-center py-20">
//           <BsBoxSeam size={32} className="text-gray-200 mb-3" />
//           <h3 className="text-[15px] font-bold text-gray-600 mb-1">No products found</h3>
//           <p className="text-[13px] text-gray-400">Try adjusting your filters</p>
//         </div>
//       ) : paginated.map((item) => {
//         const stock = getStock(item.sizes)
//         const disc = getDiscount(item.price, item.discountPrice)
//         const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean)
//         const colors = item.color || []
//         const sizes = item.sizes || []

//         return (
//           <div key={item._id}
//             className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group
//               ${selected.includes(item._id) ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-gray-100'}`}>

//             {/* Image */}
//             <div className="relative overflow-hidden aspect-square cursor-pointer bg-gray-50"
//               onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}>
//               <img src={imgs[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
//               {item.bestseller && (
//                 <span className="absolute top-2 left-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
//                   ⭐ BESTSELLER
//                 </span>
//               )}
//               {imgs.length > 1 && (
//                 <span className="absolute top-2 right-2 bg-black/55 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
//                   +{imgs.length - 1}
//                 </span>
//               )}
//               {/* Select */}
//               <div onClick={e => { e.stopPropagation(); toggleSelect(item._id) }}
//                 className={`absolute bottom-2 right-2 w-6 h-6 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all text-xs font-bold
//                   ${selected.includes(item._id) ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-300 text-transparent hover:border-indigo-400'}`}>
//                 ✓
//               </div>
//             </div>

//             {/* Body */}
//             <div className="p-3">
//               <div className="flex gap-1.5 mb-1.5 flex-wrap">
//                 <span className="text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 font-medium">{item.category}</span>
//                 {item.subCategory && <span className="text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 font-medium">{item.subCategory}</span>}
//               </div>

//               <div className="text-[13px] font-bold text-gray-900 line-clamp-2 leading-snug mb-2 cursor-pointer hover:text-indigo-600 transition-colors"
//                 onClick={() => navigate(`/update-product/${item._id}`)}>
//                 {item.name}
//               </div>

//               <div className="flex items-baseline gap-1.5 mb-2">
//                 <span className="text-[16px] font-extrabold text-gray-900">{currency}{item.discountPrice || item.price}</span>
//                 {disc && <>
//                   <span className="text-[11px] text-gray-400 line-through">{currency}{item.price}</span>
//                   <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-full">{disc}% off</span>
//                 </>}
//               </div>

//               <div className="flex flex-wrap gap-1.5 mb-3">
//                 {stock === 0 ? <Badge type="red">Out of stock</Badge>
//                   : stock <= 10 ? <Badge type="amber">{stock} left</Badge>
//                     : <Badge type="green">{stock} in stock</Badge>}
//                 {colors.length > 0 && (
//                   <div className="flex gap-1 items-center">
//                     {colors.slice(0, 4).map((c, i) => (
//                       <div key={i} className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: c.hex || c }} title={c.name || c} />
//                     ))}
//                     {colors.length > 4 && <span className="text-[10px] text-gray-400 font-semibold">+{colors.length - 4}</span>}
//                   </div>
//                 )}
//               </div>

//               {/* Card Footer */}
//               <div className="flex gap-2 pt-2.5 border-t border-gray-100">
//                 <button onClick={() => setImgModal({ images: imgs, name: item.name, start: 0 })}
//                   className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-[11.5px] font-semibold hover:bg-gray-100 transition-colors">
//                   <TbEye size={13} /> View
//                 </button>
//                 <button onClick={() => navigate(`/update-product/${item._id}`)}
//                   className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 text-[11.5px] font-semibold hover:bg-indigo-100 transition-colors">
//                   <TbEdit size={13} /> Edit
//                 </button>
//                 <button onClick={() => setConfirmDelete({ id: item._id, name: item.name })}
//                   className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors flex-shrink-0">
//                   <TbTrash size={13} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )

//   /* ══════════════════════════════════
//      RENDER
//   ══════════════════════════════════ */
//   return (
//     <div className="min-h-screen bg-[#f8f8f6] font-sans">
//       <style>{`
//         @keyframes fadeIn { from{opacity:0}to{opacity:1} }
//         @keyframes slideUp { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
//         .animate-fadeIn { animation: fadeIn 0.15s ease; }
//         .animate-slideUp { animation: slideUp 0.2s ease; }
//       `}</style>

//       {/* ── TOP BAR ── */}
//       <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
//             <TbPackage size={18} className="text-white" />
//           </div>
//           <div>
//             <h1 className="text-[18px] font-extrabold text-gray-900 leading-none tracking-tight">Products</h1>
//             <p className="text-[11px] text-gray-400 mt-0.5">{loading ? '…' : `${list.length} total products`}</p>
//           </div>
//           {!loading && (
//             <span className="ml-1 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold border border-indigo-100">
//               {list.length}
//             </span>
//           )}
//         </div>
//         <div className="flex items-center gap-2">
//           <button onClick={fetchList}
//             className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
//             <HiOutlineRefresh size={15} className={loading ? 'animate-spin' : ''} />
//             <span className="hidden sm:inline">Refresh</span>
//           </button>
//           <button onClick={() => navigate('/add')}
//             className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm">
//             <TbPlus size={16} />
//             <span className="hidden sm:inline">Add Product</span>
//           </button>
//         </div>
//       </div>

//       {/* ── STATS ── */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 pb-0">
//         <StatCard icon={<MdOutlineInventory2 size={20} className="text-indigo-600" />} value={list.length} label="Total Products" color="bg-indigo-50" loading={loading} />
//         <StatCard icon={<TbChartBar size={20} className="text-emerald-600" />} value={totalStock} label="Total Stock Units" color="bg-emerald-50" loading={loading} />
//         <StatCard icon={<TbStar size={20} className="text-amber-600" />} value={bestsellerCount} label="Bestsellers" color="bg-amber-50" loading={loading} />
//         <StatCard icon={<TbAlertTriangle size={20} className="text-red-500" />} value={outOfStock} label="Out of Stock" color="bg-red-50" loading={loading} />
//       </div>

//       {/* ── TOOLBAR ── */}
//       <div className="flex flex-wrap items-center gap-3 px-6 pt-5 pb-4">
//         {/* Search */}
//         <div className="relative flex-1 min-w-[200px]">
//           <HiOutlineSearch size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//           <input
//             type="text"
//             placeholder="Search by name, category…"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//             className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
//           />
//           {search && (
//             <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
//               <TbX size={10} className="text-gray-600" />
//             </button>
//           )}
//         </div>

//         {/* Filters */}
//         <select className={selectCls} value={catFilter} onChange={e => { setCatFilter(e.target.value); setSubCatFilter('all') }}>
//           {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
//         </select>

//         <select className={selectCls} value={subCatFilter} onChange={e => setSubCatFilter(e.target.value)}>
//           {subCategories.map(s => <option key={s} value={s}>{s === 'all' ? 'All Sub-cats' : s}</option>)}
//         </select>

//         <select className={selectCls} value={sortBy} onChange={e => { setSortBy(e.target.value); setSortDir(e.target.value === 'newest' ? 'desc' : 'asc') }}>
//           <option value="newest">Newest First</option>
//           <option value="name">Name (A–Z)</option>
//           <option value="price">Price (Low–High)</option>
//           <option value="stock">Stock (Low–High)</option>
//         </select>

//         {/* View Toggle */}
//         <div className="flex border border-gray-200 rounded-xl overflow-hidden">
//           <button onClick={() => setViewMode('table')}
//             className={`px-3 py-2.5 flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors ${viewMode === 'table' ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
//             <MdOutlineTableRows size={15} />
//             <span className="hidden sm:inline">Table</span>
//           </button>
//           <button onClick={() => setViewMode('grid')}
//             className={`px-3 py-2.5 flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
//             <MdOutlineGridView size={15} />
//             <span className="hidden sm:inline">Grid</span>
//           </button>
//         </div>
//       </div>

//       {/* ── RESULTS BAR ── */}
//       <div className="flex items-center justify-between px-6 pb-3">
//         <p className="text-[12.5px] text-gray-400 font-medium">
//           {loading ? 'Loading…' : <>Showing <span className="font-bold text-gray-700">{paginated.length}</span> of <span className="font-bold text-gray-700">{filtered.length}</span> products {search && <span className="text-indigo-500">for "{search}"</span>}</>}
//         </p>
//         {selected.length > 0 && (
//           <span className="text-[12px] text-indigo-600 font-bold bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
//             {selected.length} selected
//           </span>
//         )}
//       </div>

//       {/* ── CONTENT ── */}
//       {viewMode === 'table' ? renderTable() : renderGrid()}

//       {/* ── PAGINATION ── */}
//       {!loading && totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 px-6 pb-10">
//           <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
//             className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
//             <FiChevronLeft size={16} />
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1)
//             .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
//             .reduce((acc, p, i, arr) => {
//               if (i > 0 && arr[i - 1] !== p - 1) acc.push('…')
//               acc.push(p)
//               return acc
//             }, [])
//             .map((p, i) =>
//               p === '…'
//                 ? <span key={`e${i}`} className="text-gray-400 text-sm px-1">…</span>
//                 : <button key={p} onClick={() => setPage(p)}
//                   className={`w-9 h-9 flex items-center justify-center rounded-xl border text-[13px] font-semibold transition-colors
//                     ${page === p ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
//                   {p}
//                 </button>
//             )}
//           <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
//             className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
//             <FiChevronRight size={16} />
//           </button>
//         </div>
//       )}

//       {/* ── BULK ACTION BAR ── */}
//       {selected.length > 0 && (
//         <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl bg-gray-950 text-white shadow-2xl min-w-[320px] animate-slideUp">
//           <div className="text-[13.5px] font-semibold">
//             {selected.length} selected <span className="opacity-50 font-normal">· Bulk actions</span>
//           </div>
//           <div className="flex gap-2">
//             <button onClick={() => setSelected([])}
//               className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-[12px] font-semibold hover:bg-white/20 transition-colors">
//               <TbX size={12} /> Deselect
//             </button>
//             <button onClick={() => setConfirmDelete('bulk')}
//               className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500 text-[12px] font-semibold hover:bg-red-600 transition-colors">
//               <TbTrash size={13} /> Delete Selected
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ── MODALS ── */}
//       {confirmDelete && (
//         <ConfirmModal
//           title={confirmDelete === 'bulk' ? `Delete ${selected.length} Products?` : 'Delete Product?'}
//           desc={confirmDelete === 'bulk'
//             ? `This will permanently remove ${selected.length} selected products. This cannot be undone.`
//             : `"${confirmDelete.name}" will be permanently deleted. This cannot be undone.`}
//           onConfirm={() => { setConfirmDelete(null); confirmDelete === 'bulk' ? removeBulk() : removeProduct(confirmDelete.id) }}
//           onCancel={() => setConfirmDelete(null)}
//         />
//       )}
//       {imgModal && <ImgModal {...imgModal} onClose={() => setImgModal(null)} />}
//     </div>
//   )
// }

// export default ProductsList


import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { backendUrl, currency, MyContext } from '../../App'
import { HiOutlineSearch, HiOutlineRefresh } from 'react-icons/hi'
import { MdOutlineGridView, MdOutlineTableRows, MdOutlineInventory2 } from 'react-icons/md'
import { TbEdit, TbTrash, TbEye, TbChartBar, TbPackage, TbStar, TbAlertTriangle, TbPlus, TbX, TbFileExport } from 'react-icons/tb'
import { FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { BsBoxSeam } from 'react-icons/bs'

/* ═══════════════════ HELPERS ═══════════════════ */
const getStock = (sizes) => {
  if (!sizes || !Array.isArray(sizes)) return 0
  return sizes.reduce((sum, s) => sum + (Number(s?.stock) || 0), 0)
}

const getDiscount = (price, discountPrice) => {
  if (!discountPrice || !price || +discountPrice >= +price) return null
  return Math.round((1 - discountPrice / price) * 100)
}

const formatId = (id) => id ? `#${id.toString().slice(-6).toUpperCase()}` : '—'

/* ═══════════════════ IMAGE MODAL ═══════════════════ */
const ImgModal = ({ images, start, name, onClose }) => {
  const [cur, setCur] = useState(start ?? 0)
  const imgs = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean)

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1))
      if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1))
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [imgs.length, onClose])

  if (!imgs[cur]) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center gap-4 max-w-[90vw]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg text-gray-700 hover:rotate-90 transition-transform z-10"
        >
          <TbX size={14} />
        </button>

        <img
          src={imgs[cur]}
          alt={name}
          className="max-w-[80vw] max-h-[70vh] rounded-xl object-contain shadow-2xl"
        />

        {cur > 0 && (
          <button
            onClick={() => setCur(p => p - 1)}
            className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <FiChevronLeft size={22} />
          </button>
        )}
        {cur < imgs.length - 1 && (
          <button
            onClick={() => setCur(p => p + 1)}
            className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <FiChevronRight size={22} />
          </button>
        )}

        {imgs.length > 1 && (
          <div className="flex gap-2">
            {imgs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setCur(i)}
                className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${i === cur ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-75'}`}
              />
            ))}
          </div>
        )}
        <p className="text-white/50 text-xs">{name} · {cur + 1}/{imgs.length} · Esc to close</p>
      </div>
    </div>
  )
}

/* ═══════════════════ CONFIRM MODAL ═══════════════════ */
const ConfirmModal = ({ title, desc, onConfirm, onCancel }) => (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
    onClick={onCancel}
  >
    <div
      className="bg-white rounded-2xl p-7 w-[360px] max-w-[90vw] shadow-2xl text-center animate-slideUp"
      onClick={e => e.stopPropagation()}
    >
      <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
        <TbTrash size={26} className="text-red-500" />
      </div>
      <h3 className="text-[17px] font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">{desc}</p>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white text-[13px] font-semibold hover:bg-red-600 transition-colors"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  </div>
)

/* ═══════════════════ SKELETON ROW ═══════════════════ */
const SkeletonRow = () => (
  <tr className="border-b border-gray-100">
    {[40, 240, 100, 100, 90, 70, 80, 80, 110, 130].map((w, i) => (
      <td key={i} className="px-4 py-3.5">
        <div className="h-4 bg-gray-100 rounded-md animate-pulse" style={{ width: w }} />
      </td>
    ))}
  </tr>
)

/* ═══════════════════ STAT CARD ═══════════════════ */
const StatCard = ({ icon, value, label, color, loading }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
      {icon}
    </div>
    <div>
      <div className="text-[22px] font-extrabold text-gray-900 leading-none tracking-tight">
        {loading
          ? <div className="w-12 h-6 bg-gray-100 rounded animate-pulse" />
          : Number(value ?? 0).toLocaleString()
        }
      </div>
      <div className="text-[11.5px] text-gray-400 font-medium mt-1">{label}</div>
    </div>
  </div>
)

/* ═══════════════════ BADGE ═══════════════════ */
const Badge = ({ type, children }) => {
  const styles = {
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200',
    red: 'bg-red-50 text-red-600 border border-red-200',
    blue: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    gray: 'bg-gray-50 text-gray-600 border border-gray-200',
    violet: 'bg-violet-50 text-violet-700 border border-violet-200',
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${styles[type] || styles.gray}`}>
      {children}
    </span>
  )
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
const ProductsList = ({ token }) => {
  const navigate = useNavigate()
  const context = useContext(MyContext)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [catFilter, setCatFilter] = useState('all')
  const [subCatFilter, setSubCatFilter] = useState('all')
  const [stockFilter, setStockFilter] = useState('all')   // NEW: all | in | low | out
  const [sortBy, setSortBy] = useState('newest')
  const [sortDir, setSortDir] = useState('desc')
  const [viewMode, setViewMode] = useState('table')
  const [selected, setSelected] = useState([])
  const [deletingIds, setDeletingIds] = useState([])
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [imgModal, setImgModal] = useState(null)
  const [page, setPage] = useState(1)
  const PER_PAGE = 12

  /* ── fetch ── */
  const fetchList = async () => {
    setLoading(true)
    try {
      const res = await axios.get(backendUrl + '/api/product/list')
      if (res.data.success) setList(res.data.products || [])
      else toast.error(res.data.message)
    } catch (e) {
      toast.error(e?.message || 'Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  /* ── delete single ── */
  const removeProduct = async (id) => {
    setDeletingIds(p => [...p, id])
    try {
      const res = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      )
      if (res.data.success) {
        toast.success('Product removed')
        setList(prev => prev.filter(p => p._id !== id))
        setSelected(prev => prev.filter(x => x !== id))
      } else {
        toast.error(res.data.message)
      }
    } catch (e) {
      toast.error(e?.message || 'Delete failed')
    } finally {
      setDeletingIds(p => p.filter(x => x !== id))
    }
  }

  /* ── bulk delete ── */
  const removeBulk = async () => {
    const ids = [...selected]
    // Sequential deletes to avoid rate limiting
    for (const id of ids) await removeProduct(id)
    setSelected([])
  }

  /* ── export CSV ── */
  const exportCSV = () => {
    const rows = [['ID', 'Name', 'Category', 'Sub-Category', 'Price', 'Discount Price', 'Stock', 'Bestseller']]
    filtered.forEach(p => rows.push([
      p._id,
      `"${(p.name || '').replace(/"/g, '""')}"`,
      p.category || '',
      p.subCategory || '',
      p.price || 0,
      p.discountPrice || '',
      getStock(p.sizes),
      p.bestseller ? 'Yes' : 'No',
    ]))
    const csv = rows.map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `products_${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Products exported!')
  }

  useEffect(() => { fetchList() }, [])
  useEffect(() => { setPage(1) }, [search, catFilter, subCatFilter, stockFilter, sortBy])

  /* ── derived lists for filter dropdowns ── */
  const categories = ['all', ...new Set(list.map(p => p.category).filter(Boolean))]
  const subCategories = [
    'all',
    ...new Set(
      list
        .filter(p => catFilter === 'all' || p.category === catFilter)
        .map(p => p.subCategory)
        .filter(Boolean)
    ),
  ]

  /* ── filtering + sorting ── */
  const filtered = list
    .filter(p => {
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.name?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.subCategory?.toLowerCase().includes(q)
      const matchCat = catFilter === 'all' || p.category === catFilter
      const matchSub = subCatFilter === 'all' || p.subCategory === subCatFilter
      const stock = getStock(p.sizes)
      const matchStock =
        stockFilter === 'all' ? true :
          stockFilter === 'out' ? stock === 0 :
            stockFilter === 'low' ? stock > 0 && stock <= 10 :
        /* in */                  stock > 10
      return matchSearch && matchCat && matchSub && matchStock
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return sortDir === 'asc'
          ? a._id.localeCompare(b._id)
          : b._id.localeCompare(a._id)
      }
      if (sortBy === 'name') {
        const r = (a.name || '').localeCompare(b.name || '')
        return sortDir === 'asc' ? r : -r
      }
      const getVal = (p) =>
        sortBy === 'price' ? (+p.price || 0) : getStock(p.sizes)
      return sortDir === 'asc'
        ? getVal(a) - getVal(b)
        : getVal(b) - getVal(a)
    })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  /* ── selection helpers ── */
  const toggleSelect = (id) =>
    setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])
  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map(p => p._id))

  /* ── sort helper ── */
  const handleSort = (col) => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortBy(col); setSortDir('asc') }
  }

  /* ── stats ── */
  const totalStock = list.reduce((s, p) => s + getStock(p.sizes), 0)
  const bestsellerCount = list.filter(p => p.bestseller).length
  const outOfStock = list.filter(p => getStock(p.sizes) === 0).length

  /* ── shared styles ── */
  const selectCls = "border border-gray-200 rounded-xl px-3 py-2.5 text-[13px] text-gray-700 bg-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all appearance-none cursor-pointer pr-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=')] bg-no-repeat bg-[right_10px_center]"

  /* ── sort button ── */
  const SortBtn = ({ col, label }) => (
    <button
      onClick={() => handleSort(col)}
      className={`flex items-center gap-1 group transition-colors ${sortBy === col ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-700'}`}
    >
      {label}
      <span className="flex flex-col opacity-60 group-hover:opacity-100">
        <FiChevronUp size={9} className={sortBy === col && sortDir === 'asc' ? 'text-indigo-600 opacity-100' : ''} />
        <FiChevronDown size={9} className={sortBy === col && sortDir === 'desc' ? 'text-indigo-600 opacity-100' : ''} />
      </span>
    </button>
  )

  /* ══════════════════════════════════════
     TABLE VIEW
  ══════════════════════════════════════ */
  const renderTable = () => (
    <div className="mx-6 mb-8 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50/80 border-b border-gray-100">
            <th className="px-4 py-3.5 text-left w-10">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
                checked={paginated.length > 0 && selected.length === paginated.length}
                onChange={toggleAll}
              />
            </th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400 min-w-[220px]">
              <SortBtn col="name" label="Product" />
            </th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Category</th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Sub-cat</th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <SortBtn col="price" label="Price" />
            </th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <SortBtn col="stock" label="Stock" />
            </th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Colors</th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Sizes</th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">Status</th>
            <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400 min-w-[140px]">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {loading ? (
            Array(8).fill(0).map((_, i) => <SkeletonRow key={i} />)
          ) : paginated.length === 0 ? (
            <tr>
              <td colSpan={10}>
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                    <BsBoxSeam size={28} className="text-gray-300" />
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-700 mb-1">No products found</h3>
                  <p className="text-[13px] text-gray-400">Try adjusting your search or filters</p>
                  <button
                    onClick={() => { setSearch(''); setCatFilter('all'); setSubCatFilter('all'); setStockFilter('all') }}
                    className="mt-4 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-[13px] font-semibold hover:bg-indigo-100 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </td>
            </tr>
          ) : paginated.map((item) => {
            const stock = getStock(item.sizes)
            const disc = getDiscount(item.price, item.discountPrice)
            const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean)
            const colors = item.color || []
            const sizes = item.sizes || []
            const isDeleting = deletingIds.includes(item._id)

            return (
              <tr
                key={item._id}
                className={`transition-colors group
                  ${selected.includes(item._id) ? 'bg-indigo-50/60' : 'hover:bg-gray-50/60'}
                  ${isDeleting ? 'opacity-40 pointer-events-none' : ''}`}
              >
                {/* Checkbox */}
                <td className="px-4 py-3.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
                    checked={selected.includes(item._id)}
                    onChange={() => toggleSelect(item._id)}
                  />
                </td>

                {/* Product */}
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="relative w-12 h-12 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 bg-gray-50 cursor-pointer group/img"
                      onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
                    >
                      {imgs[0]
                        ? <img src={imgs[0]} alt={item.name} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-200" />
                        : <div className="w-full h-full flex items-center justify-center text-gray-200"><BsBoxSeam size={20} /></div>
                      }
                      {imgs.length > 1 && (
                        <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[8px] font-bold rounded px-1 leading-tight">
                          +{imgs.length - 1}
                        </span>
                      )}
                    </div>
                    <div>
                      <div
                        className="text-[13.5px] font-semibold text-gray-900 leading-snug cursor-pointer hover:text-indigo-600 transition-colors line-clamp-2 max-w-[180px]"
                        onClick={() => navigate(`/update-product/${item._id}`)}
                      >
                        {item.name}
                      </div>
                      <div className="text-[10.5px] text-gray-400 font-mono mt-0.5">{formatId(item._id)}</div>
                      {item.bestseller && (
                        <span className="inline-block mt-0.5 text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">
                          ⭐ Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-4 py-3.5">
                  <Badge type="gray">{item.category || '—'}</Badge>
                </td>

                {/* Sub-cat */}
                <td className="px-4 py-3.5">
                  <Badge type="gray">{item.subCategory || '—'}</Badge>
                </td>

                {/* Price */}
                <td className="px-4 py-3.5">
                  <div className="text-[14px] font-bold text-gray-900">
                    {currency}{(item.discountPrice || item.price || 0).toLocaleString()}
                  </div>
                  {disc && (
                    <>
                      <div className="text-[11px] text-gray-400 line-through">{currency}{(+item.price).toLocaleString()}</div>
                      <div className="text-[10.5px] text-emerald-600 font-bold">{disc}% off</div>
                    </>
                  )}
                </td>

                {/* Stock */}
                <td className="px-4 py-3.5">
                  <div className={`text-[13px] font-bold ${stock > 10 ? 'text-emerald-600' : stock > 0 ? 'text-amber-600' : 'text-red-500'}`}>
                    {stock > 0 ? stock.toLocaleString() : 'Out'}
                  </div>
                  {stock > 0 && stock <= 10 && (
                    <div className="text-[10px] text-amber-500 font-semibold">Low stock</div>
                  )}
                </td>

                {/* Colors */}
                <td className="px-4 py-3.5">
                  {colors.length > 0 ? (
                    <div className="flex gap-1 flex-wrap">
                      {colors.slice(0, 5).map((c, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border border-black/10 flex-shrink-0"
                          style={{ backgroundColor: c?.hex || c }}
                          title={c?.name || c}
                        />
                      ))}
                      {colors.length > 5 && (
                        <span className="text-[10.5px] text-gray-400 font-semibold self-center">+{colors.length - 5}</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-300 text-[12px]">—</span>
                  )}
                </td>

                {/* Sizes */}
                <td className="px-4 py-3.5">
                  {sizes.length > 0 ? (
                    <div className="flex gap-1 flex-wrap">
                      {sizes.slice(0, 4).map((s, i) => (
                        <span key={i} className="bg-gray-100 text-gray-600 border border-gray-200 rounded-md px-1.5 py-0.5 text-[10px] font-bold">
                          {typeof s === 'object' ? (s.size || '?') : s}
                        </span>
                      ))}
                      {sizes.length > 4 && (
                        <span className="bg-gray-100 text-gray-500 border border-gray-200 rounded-md px-1.5 py-0.5 text-[10px] font-bold">
                          +{sizes.length - 4}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-300 text-[12px]">—</span>
                  )}
                </td>

                {/* Status */}
                <td className="px-4 py-3.5">
                  <div className="flex flex-col gap-1">
                    {stock === 0
                      ? <Badge type="red">Out of stock</Badge>
                      : stock <= 10
                        ? <Badge type="amber">Low stock</Badge>
                        : <Badge type="green">In stock</Badge>
                    }
                  </div>
                </td>

                {/* Actions */}
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                    <button
                      title="Preview"
                      onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
                      className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all"
                    >
                      <TbEye size={15} />
                    </button>
                    <button
                      title="Edit"
                      onClick={() => navigate(`/update-product/${item._id}`)}
                      className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-all"
                    >
                      <TbEdit size={15} />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => setConfirmDelete({ id: item._id, name: item.name })}
                      className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-100 transition-all"
                      disabled={isDeleting}
                    >
                      {isDeleting
                        ? <div className="w-3.5 h-3.5 border-2 border-red-300 border-t-red-500 rounded-full animate-spin" />
                        : <TbTrash size={15} />
                      }
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

  /* ══════════════════════════════════════
     GRID VIEW
  ══════════════════════════════════════ */
  const renderGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-6 mb-8">
      {loading ? (
        Array(10).fill(0).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="w-full aspect-square bg-gray-100 animate-pulse" />
            <div className="p-3 space-y-2">
              <div className="h-3 bg-gray-100 rounded-md animate-pulse w-3/5" />
              <div className="h-4 bg-gray-100 rounded-md animate-pulse w-4/5" />
              <div className="h-4 bg-gray-100 rounded-md animate-pulse w-2/5" />
            </div>
          </div>
        ))
      ) : paginated.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-20">
          <BsBoxSeam size={32} className="text-gray-200 mb-3" />
          <h3 className="text-[15px] font-bold text-gray-600 mb-1">No products found</h3>
          <p className="text-[13px] text-gray-400">Try adjusting your filters</p>
          <button
            onClick={() => { setSearch(''); setCatFilter('all'); setSubCatFilter('all'); setStockFilter('all') }}
            className="mt-4 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-[13px] font-semibold hover:bg-indigo-100 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : paginated.map((item) => {
        const stock = getStock(item.sizes)
        const disc = getDiscount(item.price, item.discountPrice)
        const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean)
        const colors = item.color || []

        return (
          <div
            key={item._id}
            className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group
              ${selected.includes(item._id) ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-gray-100'}`}
          >
            {/* Image */}
            <div
              className="relative overflow-hidden aspect-square cursor-pointer bg-gray-50"
              onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
            >
              {imgs[0]
                ? <img src={imgs[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                : <div className="w-full h-full flex items-center justify-center"><BsBoxSeam size={36} className="text-gray-200" /></div>
              }

              {item.bestseller && (
                <span className="absolute top-2 left-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  ⭐ BESTSELLER
                </span>
              )}
              {imgs.length > 1 && (
                <span className="absolute top-2 right-2 bg-black/55 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                  +{imgs.length - 1}
                </span>
              )}

              {/* Checkbox overlay */}
              <div
                onClick={e => { e.stopPropagation(); toggleSelect(item._id) }}
                className={`absolute bottom-2 right-2 w-6 h-6 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all text-xs font-bold
                  ${selected.includes(item._id) ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-300 text-transparent hover:border-indigo-400'}`}
              >
                ✓
              </div>
            </div>

            {/* Body */}
            <div className="p-3">
              <div className="flex gap-1.5 mb-1.5 flex-wrap">
                {item.category && <span className="text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 font-medium">{item.category}</span>}
                {item.subCategory && <span className="text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 font-medium">{item.subCategory}</span>}
              </div>

              <div
                className="text-[13px] font-bold text-gray-900 line-clamp-2 leading-snug mb-2 cursor-pointer hover:text-indigo-600 transition-colors"
                onClick={() => navigate(`/update-product/${item._id}`)}
              >
                {item.name}
              </div>

              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-[16px] font-extrabold text-gray-900">
                  {currency}{(item.discountPrice || item.price || 0).toLocaleString()}
                </span>
                {disc && (
                  <>
                    <span className="text-[11px] text-gray-400 line-through">{currency}{(+item.price).toLocaleString()}</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-full">{disc}% off</span>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {stock === 0
                  ? <Badge type="red">Out of stock</Badge>
                  : stock <= 10
                    ? <Badge type="amber">{stock} left</Badge>
                    : <Badge type="green">{stock} in stock</Badge>
                }
                {colors.length > 0 && (
                  <div className="flex gap-1 items-center">
                    {colors.slice(0, 4).map((c, i) => (
                      <div key={i} className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: c?.hex || c }} title={c?.name || c} />
                    ))}
                    {colors.length > 4 && <span className="text-[10px] text-gray-400 font-semibold">+{colors.length - 4}</span>}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="flex gap-2 pt-2.5 border-t border-gray-100">
                <button
                  onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-[11.5px] font-semibold hover:bg-gray-100 transition-colors"
                >
                  <TbEye size={13} /> View
                </button>
                <button
                  onClick={() => navigate(`/update-product/${item._id}`)}
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 text-[11.5px] font-semibold hover:bg-indigo-100 transition-colors"
                >
                  <TbEdit size={13} /> Edit
                </button>
                <button
                  onClick={() => setConfirmDelete({ id: item._id, name: item.name })}
                  className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors flex-shrink-0"
                >
                  <TbTrash size={13} />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  /* ══════════════════════════════════════
     RENDER
  ══════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-[#f8f8f6] font-sans">
      <style>{`
        @keyframes fadeIn  { from{opacity:0}to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
        .animate-fadeIn  { animation: fadeIn 0.15s ease; }
        .animate-slideUp { animation: slideUp 0.2s ease; }
      `}</style>

      {/* ── TOP BAR ── */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
            <TbPackage size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-[18px] font-extrabold text-gray-900 leading-none tracking-tight">Products</h1>
            <p className="text-[11px] text-gray-400 mt-0.5">
              {loading ? '…' : `${list.length} total products`}
            </p>
          </div>
          {!loading && (
            <span className="ml-1 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold border border-indigo-100">
              {list.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <TbFileExport size={15} />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          <button
            onClick={fetchList}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <HiOutlineRefresh size={15} className={loading ? 'animate-spin' : ''} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-sm"
          >
            <TbPlus size={16} />
            <span className="hidden sm:inline">Add Product</span>
          </button>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 pb-0">
        <StatCard icon={<MdOutlineInventory2 size={20} className="text-indigo-600" />} value={list.length} label="Total Products" color="bg-indigo-50" loading={loading} />
        <StatCard icon={<TbChartBar size={20} className="text-emerald-600" />} value={totalStock} label="Total Stock Units" color="bg-emerald-50" loading={loading} />
        <StatCard icon={<TbStar size={20} className="text-amber-600" />} value={bestsellerCount} label="Bestsellers" color="bg-amber-50" loading={loading} />
        <StatCard icon={<TbAlertTriangle size={20} className="text-red-500" />} value={outOfStock} label="Out of Stock" color="bg-red-50" loading={loading} />
      </div>

      {/* ── TOOLBAR ── */}
      <div className="flex flex-wrap items-center gap-3 px-6 pt-5 pb-4">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <HiOutlineSearch size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, category…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <TbX size={10} className="text-gray-600" />
            </button>
          )}
        </div>

        {/* Category */}
        <select className={selectCls} value={catFilter} onChange={e => { setCatFilter(e.target.value); setSubCatFilter('all') }}>
          {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
        </select>

        {/* Sub-category */}
        <select className={selectCls} value={subCatFilter} onChange={e => setSubCatFilter(e.target.value)}>
          {subCategories.map(s => <option key={s} value={s}>{s === 'all' ? 'All Sub-cats' : s}</option>)}
        </select>

        {/* Stock filter — NEW */}
        <select className={selectCls} value={stockFilter} onChange={e => setStockFilter(e.target.value)}>
          <option value="all">All Stock</option>
          <option value="in">In Stock (&gt;10)</option>
          <option value="low">Low Stock (≤10)</option>
          <option value="out">Out of Stock</option>
        </select>

        {/* Sort */}
        <select
          className={selectCls}
          value={sortBy}
          onChange={e => { setSortBy(e.target.value); setSortDir(e.target.value === 'newest' ? 'desc' : 'asc') }}
        >
          <option value="newest">Newest First</option>
          <option value="name">Name (A–Z)</option>
          <option value="price">Price (Low–High)</option>
          <option value="stock">Stock (Low–High)</option>
        </select>

        {/* View Toggle */}
        <div className="flex border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setViewMode('table')}
            className={`px-3 py-2.5 flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors ${viewMode === 'table' ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            <MdOutlineTableRows size={15} />
            <span className="hidden sm:inline">Table</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-2.5 flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            <MdOutlineGridView size={15} />
            <span className="hidden sm:inline">Grid</span>
          </button>
        </div>
      </div>

      {/* ── RESULTS BAR ── */}
      <div className="flex items-center justify-between px-6 pb-3">
        <p className="text-[12.5px] text-gray-400 font-medium">
          {loading ? 'Loading…' : (
            <>
              Showing{' '}
              <span className="font-bold text-gray-700">{paginated.length}</span> of{' '}
              <span className="font-bold text-gray-700">{filtered.length}</span> products
              {search && <span className="text-indigo-500"> for "{search}"</span>}
            </>
          )}
        </p>
        {selected.length > 0 && (
          <span className="text-[12px] text-indigo-600 font-bold bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
            {selected.length} selected
          </span>
        )}
      </div>

      {/* ── CONTENT ── */}
      {viewMode === 'table' ? renderTable() : renderGrid()}

      {/* ── PAGINATION ── */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 px-6 pb-10">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <FiChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
            .reduce((acc, p, i, arr) => {
              if (i > 0 && arr[i - 1] !== p - 1) acc.push('…')
              acc.push(p)
              return acc
            }, [])
            .map((p, i) =>
              p === '…'
                ? <span key={`e${i}`} className="text-gray-400 text-sm px-1">…</span>
                : <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl border text-[13px] font-semibold transition-colors
                      ${page === p ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                  {p}
                </button>
            )
          }

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      )}

      {/* ── BULK ACTION FLOATING BAR ── */}
      {selected.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl bg-gray-950 text-white shadow-2xl min-w-[320px] animate-slideUp">
          <div className="text-[13.5px] font-semibold">
            {selected.length} selected{' '}
            <span className="opacity-50 font-normal">· Bulk actions</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelected([])}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-[12px] font-semibold hover:bg-white/20 transition-colors"
            >
              <TbX size={12} /> Deselect
            </button>
            <button
              onClick={() => setConfirmDelete('bulk')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500 text-[12px] font-semibold hover:bg-red-600 transition-colors"
            >
              <TbTrash size={13} /> Delete Selected
            </button>
          </div>
        </div>
      )}

      {/* ── MODALS ── */}
      {confirmDelete && (
        <ConfirmModal
          title={confirmDelete === 'bulk' ? `Delete ${selected.length} Products?` : 'Delete Product?'}
          desc={
            confirmDelete === 'bulk'
              ? `This will permanently remove ${selected.length} selected products. This cannot be undone.`
              : `"${confirmDelete.name}" will be permanently deleted. This cannot be undone.`
          }
          onConfirm={() => {
            setConfirmDelete(null)
            if (confirmDelete === 'bulk') removeBulk()
            else removeProduct(confirmDelete.id)
          }}
          onCancel={() => setConfirmDelete(null)}
        />
      )}
      {imgModal && <ImgModal {...imgModal} onClose={() => setImgModal(null)} />}
    </div>
  )
}

export default ProductsList