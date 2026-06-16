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
//   { id: 'image', label: 'Image', minWidth: 100 },
//   { id: 'catName', label: 'Category Name', minWidth: 100 },
//   { id: 'action', label: 'Action', minWidth: 100 },
// ];

// const CategoryList = () => {

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
//               <div className='flex flex-cols items-center justify-between px-3 py-5 bg-[#fff]'>
//                 <h2 className='text-lg font-semibold text-gray-700 w-[30%]'>CategoryList <span className='text-gray-500 font-medium'>(Material UI table)</span></h2>
//                 <div className='col ml-auto flex items-center justify-end gap-2'>
//                   <Button className='!bg-green-600 !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2'><IoCloudDownloadOutline className='text-xl' /> Export</Button>
//                   <Button className='!bg-[#3872fa] !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2 w-full lg:w-[70%]' onClick={()=>context.setIsOpenFullScreenPanel({open:true, modal:'Add New Category'})}><FaPlus className='text-lg' />Add New Category</Button>
//                 </div>
//               </div>

//               <div className='flex items-center w-full px-3 justify-between bg-white'>


//               </div>

//               <TableContainer sx={{ maxHeight: 440 }}>
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>
//                   <TableRow>
//                     <TableCell width={60}><Checkbox {...label} size="small" /></TableCell>
//                     {columns.map((column) => (
//                       <TableCell
//                         width={column.minWidth}
//                         key={column.id}
//                         align={column.align}
//                       >
//                         {column.label}
//                       </TableCell>
//                     ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow >
//                       <TableCell width={50} >
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={100}>
//                         <div className='flex items-center gap-4 w-[60px]'>
//                           <div className='img w-full rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.L_img_1_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell width={100}>
//                          Fashion
//                       </TableCell>
//                       <TableCell width={100}>
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
//                       <TableCell >
//                         <Checkbox {...label} size="small" />
//                       </TableCell>
//                       <TableCell width={100}>
//                         <div className='flex items-center gap-4 w-[60px]'>
//                           <div className='img w-full rounded-md overflow-hidden group'>
//                            <Link to='/product/27368'> <img src={assets.L_img_5_1} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell width={100}>
//                          Fashion
//                       </TableCell>
//                       <TableCell width={100}>
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

// export default CategoryList




// import React, { useState } from "react";
// import { useEffect } from "react";
// import { backendUrl } from '../../App';
// import axios from "axios";

// import {
//   FaFolder,
//   FaPlus,
//   FaTrash,
//   FaSearch,
//   FaLayerGroup
// } from "react-icons/fa";

// const CategoryManagement = () => {
//   const [search, setSearch] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [categoryName, setCategoryName] = useState("");
//   const [subInputs, setSubInputs] = useState({});

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(
//         `${backendUrl}/api/category/list`
//       );

//       if (response.data.success) {
//         setCategories(response.data.categories);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const addCategory = async () => {
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/category/add`,
//         {
//           categoryName,
//         }
//       );

//       if (response.data.success) {
//         setCategoryName("");
//         fetchCategories();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addSubCategory = async (categoryId) => {
//     try {
//       const value = subInputs[categoryId];

//       if (!value?.trim()) return;

//       const response = await axios.post(
//         `${backendUrl}/api/category/add-subcategory`,
//         {
//           categoryId,
//           subCategory: value,
//         }
//       );

//       if (response.data.success) {
//         fetchCategories();

//         setSubInputs((prev) => ({
//           ...prev,
//           [categoryId]: "",
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const deleteCategory = async (categoryId) => {
//     try {
//       const response = await axios.delete(
//         `${backendUrl}/api/category/delete/${categoryId}`
//       );

//       if (response.data.success) {
//         fetchCategories();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(() => {
//     fetchCategories();
//   }, []);




//   // const [categoryName, setCategoryName] = useState("");
//   // const [subInputs, setSubInputs] = useState({});




//   const filteredCategories = categories.filter((cat) =>
//     cat.categoryName?.toLowerCase().includes(search.toLowerCase())
//   );

//   // const totalSubCategories = categories.reduce(
//   //   (sum, cat) => sum + cat.subCategories.length,
//   //   0
//   // );

//   const totalSubCategories = categories.reduce(
//     (sum, cat) => sum + (cat.subCategories?.length || 0),
//     0
//   );

//   return (
//     <div className="min-h-screen bg-[#f8f8f8] p-6 my-10 text-gray-700">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-black">
//             Category Management
//           </h1>
//           <p className="text-gray-500 mt-2">
//             Manage categories and subcategories across
//             products, collections and navigation.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid md:grid-cols-2 gap-4 mb-8">
//           <div className="bg-white rounded-3xl border p-6">
//             <p className="text-gray-500 text-sm">
//               Total Categories
//             </p>
//             <h2 className="text-3xl font-bold mt-2">
//               {categories.length}
//             </h2>
//           </div>

//           <div className="bg-white rounded-3xl border p-6">
//             <p className="text-gray-500 text-sm">
//               Total Sub Categories
//             </p>
//             <h2 className="text-3xl font-bold mt-2">
//               {totalSubCategories}
//             </h2>
//           </div>
//         </div>

//         {/* Search + Add */}
//         <div className="grid lg:grid-cols-2 gap-5 mb-8">

//           <div className="bg-white rounded-3xl border p-5">
//             <div className="relative">
//               <FaSearch
//                 size={18}
//                 className="absolute left-4 top-4 text-gray-400"
//               />

//               <input
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(e.target.value)
//                 }
//                 placeholder="Search category..."
//                 className="w-full border rounded-2xl pl-11 pr-4 py-3 outline-none"
//               />
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl border p-5">
//             <div className="flex gap-3">
//               <input
//                 value={categoryName}
//                 onChange={(e) =>
//                   setCategoryName(e.target.value)
//                 }
//                 placeholder="New Category"
//                 className="flex-1 border rounded-2xl px-4 py-3 outline-none"
//               />

//               <button
//                 onClick={addCategory}
//                 className="bg-black text-white px-6 rounded-2xl flex items-center gap-2"
//               >
//                 <FaPlus size={18} />
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="grid xl:grid-cols-2 gap-6">

//           {filteredCategories.map((category) => (
//             <div
//               key={category._id}
//               className="bg-white border rounded-3xl p-6 shadow-sm"
//             >
//               {/* Category Header */}
//               <div className="flex items-start justify-between mb-5">
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <FaFolder size={20} />
//                     <h2 className="font-bold text-xl">
//                       {category.categoryName}
//                     </h2>
//                   </div>

//                   <p className="text-sm text-gray-500 mt-1">
//                     {category.subCategories.length} Sub Categories
//                   </p>
//                 </div>

//                 <button
//                   onClick={() =>
//                     deleteCategory(category._id)
//                   }
//                   className="text-red-500 hover:bg-red-50 p-2 rounded-xl"
//                 >
//                   <FaTrash size={18} />
//                 </button>
//               </div>

//               {/* Sub Categories */}
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {category.subCategories.map((sub) => (
//                   <div
//                     key={sub}
//                     className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2"
//                   >
//                     <FaLayerGroup size={14} />
//                     <span className="text-sm font-medium">
//                       {sub}
//                     </span>

//                     <button
//                       onClick={() =>
//                         deleteSubCategory(
//                           category._id,
//                           sub
//                         )
//                       }
//                     >
//                       <FaTrash
//                         size={14}
//                         className="text-red-500"
//                       />
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               {/* Add Sub Category */}
//               <div className="flex gap-3">
//                 <input
//                   value={subInputs[category._id] || ""}
//                   onChange={(e) =>
//                     setSubInputs((prev) => ({
//                       ...prev,
//                       [category._id]: e.target.value,
//                     }))
//                   }
//                   placeholder="Add Sub Category"
//                   className="flex-1 border rounded-2xl px-4 py-3 outline-none"
//                 />

//                 <button
//                   onClick={() =>
//                     addSubCategory(category._id)
//                   }
//                   className="bg-black text-white px-5 rounded-2xl flex items-center gap-2"
//                 >
//                   <FaPlus size={18} />
//                   Add
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryManagement;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  TbCategory, TbPlus, TbPencil, TbTrash, TbCheck, TbX,
  TbChevronDown, TbChevronUp, TbSearch, TbRefresh,
  TbTag, TbAlertTriangle, TbFolder, TbFolderOpen,
  TbDotsVertical, TbArrowsSort
} from 'react-icons/tb';
import { backendUrl } from '../../App';

/* ── Color tokens — D Dolly Lamb theme ── */
const B = {
  bg: '#FAFAF8',
  surface: '#F4F2EE',
  surface2: '#EDE9E2',
  surfaceCard: '#FFFFFF',
  navy: '#1C2B3A',
  navyMid: '#2E4057',
  navySoft: '#4A6070',
  navyGhost: '#8FA0AD',
  green: '#1A7A4A',
  greenLight: '#2A9960',
  greenBg: '#E8F4EE',
  greenBdr: '#A8D5BC',
  gold: '#B8985A',
  goldBg: '#FBF5E8',
  goldBdr: '#DBC98A',
  border: '#E0DBD3',
  borderStrong: '#C8C2B8',
  emerald: { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', dot: '#10B981' },
  amber: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', dot: '#F59E0B' },
  red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444' },
  blue: { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE', dot: '#3B82F6' },
  violet: { bg: '#F5F3FF', text: '#5B21B6', border: '#DDD6FE', dot: '#7C3AED' },
};

const cardStyle = (extra = {}) => ({
  background: B.surfaceCard,
  border: `1px solid ${B.border}`,
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 1px 4px rgba(28,43,58,0.06)',
  ...extra,
});

const inputStyle = (err = false) => ({
  width: '100%',
  padding: '9px 13px',
  borderRadius: 9,
  border: `1px solid ${err ? B.red.border : B.border}`,
  background: err ? '#FEF2F2' : B.surfaceCard,
  color: B.navy,
  fontSize: 13.5,
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color .15s',
  boxSizing: 'border-box',
});

/* ── Confirm Dialog ── */
const ConfirmDialog = ({ msg, onYes, onNo }) => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(28,43,58,0.45)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
    <div style={{ ...cardStyle(), padding: 28, maxWidth: 380, width: '100%', textAlign: 'center', borderRadius: 18, boxShadow: '0 20px 60px rgba(28,43,58,0.18)' }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: B.red.bg, border: `1px solid ${B.red.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        <TbAlertTriangle size={24} style={{ color: B.red.dot }} />
      </div>
      <p style={{ color: B.navy, fontSize: 15, fontWeight: 700, marginBottom: 8, fontFamily: 'Georgia, serif' }}>Confirm Delete</p>
      <p style={{ color: B.navySoft, fontSize: 13, lineHeight: 1.6, marginBottom: 22 }}>{msg}</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onNo} style={{ flex: 1, padding: '10px', borderRadius: 10, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navySoft, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
        <button onClick={onYes} style={{ flex: 1, padding: '10px', borderRadius: 10, border: 'none', background: B.red.dot, color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Delete</button>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const CategoryManagement = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  /* Add category */
  const [newCatName, setNewCatName] = useState('');
  const [addingCat, setAddingCat] = useState(false);

  /* Edit category */
  const [editCatId, setEditCatId] = useState(null);
  const [editCatName, setEditCatName] = useState('');

  /* Expanded categories */
  const [expanded, setExpanded] = useState(new Set());

  /* Add subcategory */
  const [newSubMap, setNewSubMap] = useState({}); // { catId: '' }
  const [addingSubId, setAddingSubId] = useState(null);

  /* Edit subcategory */
  const [editSub, setEditSub] = useState(null); // { catId, idx, val }

  /* Delete confirm */
  const [confirm, setConfirm] = useState(null); // { msg, onYes }

  const newCatRef = useRef(null);

  /* ── Fetch ── */
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${backendUrl}/api/category/list`);
      if (res.data.success) setCategories(res.data.categories);
      else toast.error(res.data.message);
    } catch { toast.error('Failed to load categories'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchCategories(); }, []);

  /* ── Toggle expand ── */
  const toggleExpand = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  /* ── Add Category ── */
  const addCategory = async () => {
    if (!newCatName.trim()) return toast.error('Enter category name');
    setAddingCat(true);
    try {
      const res = await axios.post(`${backendUrl}/api/category/add`, { categoryName: newCatName.trim() }, { headers: { token } });
      if (res.data.success) {
        toast.success(`"${newCatName.trim()}" added!`);
        setNewCatName('');
        fetchCategories();
      } else toast.error(res.data.message);
    } catch { toast.error('Failed to add category'); }
    finally { setAddingCat(false); }
  };

  /* ── Update Category name ── */
  const updateCatName = async (id) => {
    if (!editCatName.trim()) return toast.error('Name cannot be empty');
    try {
      const res = await axios.put(`${backendUrl}/api/category/update/${id}`, { categoryName: editCatName.trim() }, { headers: { token } });
      if (res.data.success) {
        toast.success('Category renamed!');
        setEditCatId(null);
        fetchCategories();
      } else toast.error(res.data.message);
    } catch { toast.error('Update failed'); }
  };

  /* ── Delete Category ── */
  const deleteCategory = (cat) => {
    setConfirm({
      msg: `Delete "${cat.categoryName}" and all its ${cat.subCategories.length} subcategories? This cannot be undone.`,
      onYes: async () => {
        setConfirm(null);
        try {
          const res = await axios.delete(`${backendUrl}/api/category/delete/${cat._id}`, { headers: { token } });
          if (res.data.success) { toast.success('Category deleted!'); fetchCategories(); }
          else toast.error(res.data.message);
        } catch { toast.error('Delete failed'); }
      }
    });
  };

  /* ── Add Subcategory ── */
  const addSubcategory = async (cat) => {
    const val = (newSubMap[cat._id] || '').trim();
    if (!val) return toast.error('Enter subcategory name');
    if (cat.subCategories.includes(val)) return toast.error('Already exists');
    setAddingSubId(cat._id);
    try {
      const updated = [...cat.subCategories, val];
      const res = await axios.put(`${backendUrl}/api/category/update/${cat._id}`, { subCategories: updated }, { headers: { token } });
      if (res.data.success) {
        toast.success(`"${val}" added!`);
        setNewSubMap(prev => ({ ...prev, [cat._id]: '' }));
        fetchCategories();
      } else toast.error(res.data.message);
    } catch { toast.error('Failed to add subcategory'); }
    finally { setAddingSubId(null); }
  };

  /* ── Update Subcategory ── */
  const updateSub = async (cat, idx, newVal) => {
    if (!newVal.trim()) return toast.error('Name cannot be empty');
    const updated = [...cat.subCategories];
    updated[idx] = newVal.trim();
    try {
      const res = await axios.put(`${backendUrl}/api/category/update/${cat._id}`, { subCategories: updated }, { headers: { token } });
      if (res.data.success) { toast.success('Updated!'); setEditSub(null); fetchCategories(); }
      else toast.error(res.data.message);
    } catch { toast.error('Update failed'); }
  };

  /* ── Delete Subcategory ── */
  const deleteSub = (cat, idx) => {
    setConfirm({
      msg: `Delete subcategory "${cat.subCategories[idx]}"?`,
      onYes: async () => {
        setConfirm(null);
        const updated = cat.subCategories.filter((_, i) => i !== idx);
        try {
          const res = await axios.put(`${backendUrl}/api/category/update/${cat._id}`, { subCategories: updated }, { headers: { token } });
          if (res.data.success) { toast.success('Subcategory deleted!'); fetchCategories(); }
          else toast.error(res.data.message);
        } catch { toast.error('Delete failed'); }
      }
    });
  };

  /* ── Filtered categories ── */
  // const filtered = categories.filter(c =>
  //   c.name.toLowerCase().includes(search.toLowerCase()) ||
  //   c.subcategories.some(s => s.toLowerCase().includes(search.toLowerCase()))
  // );

  const filtered = categories.filter(c =>
    (c.categoryName || "")
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    (c.subCategories || []).some(s =>
      s.toLowerCase().includes(search.toLowerCase())
    )
  );

  // const totalSubs = categories.reduce((sum, c) => sum + c.subcategories.length, 0);
  const totalSubs = categories.reduce(
    (sum, c) => sum + (c.subCategories?.length || 0),
    0
  );

  /* ══════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════ */
  return (
    <div style={{ background: B.bg, minHeight: '100vh', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", WebkitFontSmoothing: 'antialiased', marginTop: 50 }}>
      <style>{`
                @keyframes slideDown { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:none} }
                @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
                .cm-card  { animation: fadeIn .25s ease; }
                .cm-sub   { animation: slideDown .2s ease; }
                .cm-btn   { transition: all .15s; }
                .cm-btn:hover { opacity: .85; }
                input::placeholder { color: ${B.navyGhost}; }
            `}</style>

      {/* ══ HEADER ══ */}
      <div style={{ position: 'sticky', top: 0, zIndex: 40, background: `${B.surfaceCard}f2`, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${B.border}`, boxShadow: '0 2px 8px rgba(28,43,58,0.07)', height: 60, display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TbCategory size={18} style={{ color: B.green }} />
          </div>
          <div>
            <h1 style={{ color: B.navy, fontSize: 16, fontWeight: 800, letterSpacing: -.3, margin: 0, fontFamily: 'Georgia, serif' }}>Categories</h1>
            <p style={{ color: B.navyGhost, fontSize: 11, margin: 0 }}>Manage product categories & subcategories</p>
          </div>
        </div>
        <button onClick={fetchCategories} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navySoft, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
          <TbRefresh size={13} /> Refresh
        </button>
      </div>

      <div style={{ padding: '20px 24px 60px', maxWidth: 960, margin: '0 auto' }}>

        {/* ══ STATS ══ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
          {[
            { label: 'Total Categories', val: categories.length, color: B.blue, icon: <TbFolder size={16} style={{ color: B.blue.text }} /> },
            { label: 'Total Subcategories', val: totalSubs, color: B.emerald, icon: <TbTag size={16} style={{ color: B.emerald.text }} /> },
            { label: 'Avg Subcategories', val: categories.length ? (totalSubs / categories.length).toFixed(1) : 0, color: B.violet, icon: <TbArrowsSort size={16} style={{ color: B.violet.text }} /> },
          ].map(({ label, val, color, icon }) => (
            <div key={label} style={{ ...cardStyle(), padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: color.bg, border: `1px solid ${color.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <p style={{ color: B.navy, fontSize: 22, fontWeight: 800, margin: 0, fontFamily: 'Georgia, serif', lineHeight: 1 }}>{val}</p>
                <p style={{ color: B.navyGhost, fontSize: 11, margin: '3px 0 0', fontWeight: 600 }}>{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ══ ADD CATEGORY ══ */}
        <div style={{ ...cardStyle(), marginBottom: 16 }}>
          <div style={{ padding: '14px 20px', borderBottom: `1px solid ${B.border}`, background: B.surface, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TbPlus size={15} style={{ color: B.green }} />
            </div>
            <p style={{ color: B.navy, fontSize: 13.5, fontWeight: 700, margin: 0, fontFamily: 'Georgia, serif' }}>Add New Category</p>
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <input
                ref={newCatRef}
                style={inputStyle()}
                type="text"
                placeholder="e.g. Men's Jackets, Pillow Covers…"
                value={newCatName}
                onChange={e => setNewCatName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addCategory()}
                onFocus={e => e.target.style.borderColor = B.greenBdr}
                onBlur={e => e.target.style.borderColor = B.border}
              />
              <button
                onClick={addCategory}
                disabled={addingCat}
                style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 20px', borderRadius: 9, background: B.green, color: '#fff', border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer', flexShrink: 0, opacity: addingCat ? .6 : 1, transition: 'background .15s' }}
                onMouseEnter={e => { if (!addingCat) e.currentTarget.style.background = B.greenLight; }}
                onMouseLeave={e => e.currentTarget.style.background = B.green}
              >
                <TbPlus size={15} /> {addingCat ? 'Adding…' : 'Add Category'}
              </button>
            </div>
            <p style={{ color: B.navyGhost, fontSize: 11.5, marginTop: 8 }}>Press Enter or click Add. Category name must be unique.</p>
          </div>
        </div>

        {/* ══ SEARCH ══ */}
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <TbSearch size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: B.navyGhost, pointerEvents: 'none' }} />
          <input
            style={{ ...inputStyle(), paddingLeft: 38 }}
            type="text"
            placeholder="Search categories or subcategories…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={e => e.target.style.borderColor = B.greenBdr}
            onBlur={e => e.target.style.borderColor = B.border}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: B.navyGhost, display: 'flex', alignItems: 'center' }}>
              <TbX size={14} />
            </button>
          )}
        </div>

        {/* ══ CATEGORIES LIST ══ */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: `3px solid ${B.border}`, borderTopColor: B.green, animation: 'spin 1s linear infinite', margin: '0 auto 14px' }} />
            <p style={{ color: B.navyGhost, fontSize: 13 }}>Loading categories…</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ ...cardStyle(), padding: '52px 20px', textAlign: 'center' }}>
            <TbFolder size={40} style={{ color: B.navyGhost, margin: '0 auto 14px', display: 'block', opacity: .5 }} />
            <p style={{ color: B.navySoft, fontSize: 15, fontWeight: 600, marginBottom: 6 }}>
              {search ? 'No results found' : 'No categories yet'}
            </p>
            <p style={{ color: B.navyGhost, fontSize: 12.5 }}>
              {search ? `Try a different search term` : 'Add your first category above'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {filtered.map((cat) => {
              const isExpanded = expanded.has(cat._id);
              const isEditingCat = editCatId === cat._id;
              const subInput = newSubMap[cat._id] || '';

              return (
                <div key={cat._id} className="cm-card" style={cardStyle()}>

                  {/* ── Category Row ── */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: isExpanded ? B.greenBg : B.surfaceCard, borderBottom: isExpanded ? `1px solid ${B.greenBdr}` : 'none', transition: 'background .2s' }}>

                    {/* Expand toggle */}
                    <button
                      onClick={() => toggleExpand(cat._id)}
                      style={{ width: 30, height: 30, borderRadius: 8, border: `1px solid ${isExpanded ? B.greenBdr : B.border}`, background: isExpanded ? B.green : B.surface, color: isExpanded ? '#fff' : B.navySoft, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'all .18s' }}>
                      {isExpanded ? <TbChevronUp size={13} /> : <TbChevronDown size={13} />}
                    </button>

                    {/* Icon */}
                    <div style={{ flexShrink: 0 }}>
                      {isExpanded
                        ? <TbFolderOpen size={18} style={{ color: B.green }} />
                        : <TbFolder size={18} style={{ color: B.navySoft }} />}
                    </div>

                    {/* Name / Edit input */}
                    {isEditingCat ? (
                      <div style={{ flex: 1, display: 'flex', gap: 8, alignItems: 'center' }}>
                        <input
                          autoFocus
                          style={{ ...inputStyle(), flex: 1 }}
                          value={editCatName}
                          onChange={e => setEditCatName(e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') updateCatName(cat._id);
                            if (e.key === 'Escape') setEditCatId(null);
                          }}
                          onFocus={e => e.target.style.borderColor = B.greenBdr}
                          onBlur={e => e.target.style.borderColor = B.border}
                        />
                        <button onClick={() => updateCatName(cat._id)} style={{ width: 32, height: 32, borderRadius: 8, background: B.green, border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                          <TbCheck size={14} />
                        </button>
                        <button onClick={() => setEditCatId(null)} style={{ width: 32, height: 32, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                          <TbX size={14} />
                        </button>
                      </div>
                    ) : (
                      <div style={{ flex: 1 }}>
                        <p style={{ color: B.navy, fontSize: 14, fontWeight: 700, margin: 0 }}>{cat.categoryName}</p>
                        <p style={{ color: B.navyGhost, fontSize: 11, margin: '2px 0 0' }}>
                          {cat.subCategories.length} subcategor{cat.subCategories.length === 1 ? 'y' : 'ies'}
                        </p>
                      </div>
                    )}

                    {/* Subcategory count badge */}
                    {!isEditingCat && cat.subCategories.length > 0 && (
                      <span style={{ padding: '3px 10px', borderRadius: 99, background: isExpanded ? B.green : B.surface2, color: isExpanded ? '#fff' : B.navySoft, fontSize: 11, fontWeight: 700, flexShrink: 0, transition: 'all .2s' }}>
                        {cat.subCategories.length}
                      </span>
                    )}

                    {/* Edit / Delete buttons */}
                    {!isEditingCat && (
                      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                        <button
                          onClick={() => { setEditCatId(cat._id); setEditCatName(cat.categoryName); }}
                          style={{ width: 32, height: 32, borderRadius: 8, background: B.blue.bg, border: `1px solid ${B.blue.border}`, color: B.blue.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s' }}
                          title="Rename category">
                          <TbPencil size={13} />
                        </button>
                        <button
                          onClick={() => deleteCategory(cat)}
                          style={{ width: 32, height: 32, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s' }}
                          title="Delete category">
                          <TbTrash size={13} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* ── Subcategories Panel ── */}
                  {isExpanded && (
                    <div className="cm-sub" style={{ padding: '16px 18px', background: B.surfaceCard }}>

                      {/* Add subcategory input */}
                      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                        <input
                          style={{ ...inputStyle(), flex: 1 }}
                          type="text"
                          placeholder={`Add subcategory to "${cat.categoryName}"…`}
                          value={subInput}
                          onChange={e => setNewSubMap(prev => ({ ...prev, [cat._id]: e.target.value }))}
                          onKeyDown={e => e.key === 'Enter' && addSubcategory(cat)}
                          onFocus={e => e.target.style.borderColor = B.greenBdr}
                          onBlur={e => e.target.style.borderColor = B.border}
                        />
                        <button
                          onClick={() => addSubcategory(cat)}
                          disabled={addingSubId === cat._id}
                          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 9, background: B.greenBg, color: B.green, border: `1px solid ${B.greenBdr}`, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', flexShrink: 0, transition: 'all .15s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = B.green; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.color = B.green; }}>
                          <TbPlus size={13} /> {addingSubId === cat._id ? 'Adding…' : 'Add'}
                        </button>
                      </div>

                      {/* Subcategory list */}
                      {cat.subCategories.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '20px', border: `2px dashed ${B.border}`, borderRadius: 10 }}>
                          <TbTag size={22} style={{ color: B.navyGhost, margin: '0 auto 6px', display: 'block', opacity: .5 }} />
                          <p style={{ color: B.navyGhost, fontSize: 12.5 }}>No subcategories yet — add one above</p>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {cat.subCategories.map((sub, idx) => {
                            const isEditingSub = editSub?.catId === cat._id && editSub?.idx === idx;
                            return (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', background: B.surface, border: `1px solid ${B.border}`, borderRadius: 10, transition: 'border-color .15s' }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = B.greenBdr}
                                onMouseLeave={e => e.currentTarget.style.borderColor = B.border}>

                                {/* Sub icon */}
                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: B.green, flexShrink: 0, opacity: .6 }} />

                                {/* Sub name / edit */}
                                {isEditingSub ? (
                                  <div style={{ flex: 1, display: 'flex', gap: 7 }}>
                                    <input
                                      autoFocus
                                      style={{ ...inputStyle(), flex: 1, padding: '6px 10px', fontSize: 13 }}
                                      value={editSub.val}
                                      onChange={e => setEditSub(prev => ({ ...prev, val: e.target.value }))}
                                      onKeyDown={e => {
                                        if (e.key === 'Enter') updateSub(cat, idx, editSub.val);
                                        if (e.key === 'Escape') setEditSub(null);
                                      }}
                                      onFocus={e => e.target.style.borderColor = B.greenBdr}
                                      onBlur={e => e.target.style.borderColor = B.border}
                                    />
                                    <button onClick={() => updateSub(cat, idx, editSub.val)} style={{ width: 28, height: 28, borderRadius: 7, background: B.green, border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                      <TbCheck size={12} />
                                    </button>
                                    <button onClick={() => setEditSub(null)} style={{ width: 28, height: 28, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                      <TbX size={12} />
                                    </button>
                                  </div>
                                ) : (
                                  <span style={{ flex: 1, color: B.navyMid, fontSize: 13, fontWeight: 500 }}>{sub}</span>
                                )}

                                {/* Sub edit/delete buttons */}
                                {!isEditingSub && (
                                  <div style={{ display: 'flex', gap: 5 }}>
                                    <button
                                      onClick={() => setEditSub({ catId: cat._id, idx, val: sub })}
                                      style={{ width: 26, height: 26, borderRadius: 7, background: B.blue.bg, border: `1px solid ${B.blue.border}`, color: B.blue.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      title="Edit">
                                      <TbPencil size={11} />
                                    </button>
                                    <button
                                      onClick={() => deleteSub(cat, idx)}
                                      style={{ width: 26, height: 26, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                      title="Delete">
                                      <TbX size={11} />
                                    </button>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Sub count footer */}
                      {cat.subCategories.length > 0 && (
                        <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 10, textAlign: 'right' }}>
                          {cat.subCategories.length} subcategor{cat.subCategories.length === 1 ? 'y' : 'ies'} in "{cat.categoryName}"
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Result count */}
        {search && filtered.length > 0 && (
          <p style={{ color: B.navyGhost, fontSize: 12, textAlign: 'center', marginTop: 14 }}>
            Showing {filtered.length} of {categories.length} categories
          </p>
        )}
      </div>

      {/* ── Confirm Dialog ── */}
      {confirm && <ConfirmDialog msg={confirm.msg} onYes={confirm.onYes} onNo={() => setConfirm(null)} />}
    </div>
  );
};

export default CategoryManagement;