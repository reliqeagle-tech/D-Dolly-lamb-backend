import Button from '@mui/material/Button'
import { FaPlus } from "react-icons/fa6";
import React, { useContext, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { IoCloudDownloadOutline } from "react-icons/io5";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import { assets } from '../../assets/assets';
import SearchBox from '../../Components/SearchBox/SearchBox';
import { MyContext } from '../../App';



const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
const columns = [
  { id: 'image', label: 'Image', minWidth: 250 },
  { id: 'action', label: 'Action', minWidth: 100 },
];

const HomeSliderBanners = () => {

   const [page, setPage] = useState(0);
   const [categoryFilterVal, setCategoryFilterValue] = useState('')
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const context = useContext(MyContext)

   const handleChangeCatFilter = (event) => {
    setCategoryFilterValue(event.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>

      <div className='my-3 card shadow-md bg-white sm:rounded-lg'>
              <div className='flex flex-cols items-center justify-between px-3 py-5 bg-[#fff]'>
                <h2 className='text-lg font-semibold text-gray-700 w-[50%]'>Home Slider Bannners <span className='text-gray-500 font-medium'>(Material UI table)</span></h2>
                <div className='col ml-auto flex items-center justify-end gap-2'>
                  <Button className='!bg-green-600 !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2'><IoCloudDownloadOutline className='text-xl' /> Export</Button>
                  <Button className='!bg-[#3872fa] !text-white !py-1 !px-3 !rounded-md !text-[13px] gap-2 w-full lg:w-[70%]' onClick={()=>context.setIsOpenFullScreenPanel({open:true, modal:'Add Home Slide'})}><FaPlus className='text-lg' /> Add Home slide</Button>
                </div>
              </div>

              <div className='flex items-center w-full px-3 justify-between bg-white'>
                
                
              </div>
      
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                  <TableRow>
                    <TableCell width={60}><Checkbox {...label} size="small" /></TableCell>
                    {columns.map((column) => (
                      <TableCell
                        width={column.minWidth}
                        key={column.id}
                        align={column.align}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow >
                      <TableCell >
                        <Checkbox {...label} size="small" />
                      </TableCell>
                      <TableCell width={300}>
                        <div className='flex items-center gap-4 w-[300px]'>
                          <div className='img w-full rounded-md overflow-hidden group'>
                           <Link to='/product/27368'> <img src={assets.slideBanner2} alt="" className='w-full group-hover:scale-105 transition-all' /> </Link>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell width={100}>
                        <div className='flex items-center gap-1'>
                          {/* <Tooltip title="Edit Product" placement="top"> */}
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><AiOutlineEdit className='text-gray-700 text-xl' /></Button>
                          {/* </Tooltip> */}
                          {/* <Tooltip title="View Product Details" placement="top"> */}
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><FaRegEye className='text-gray-700 text-lg' /></Button>
                          {/* </Tooltip> */}
                          {/* <Tooltip title="Remove Product" placement="top"> */}
                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] hover:bg-[#f1f1f1] !text-gray-700 '><GoTrash className='text-gray-700 text-xl' /></Button>
                          {/* </Tooltip> */}
                        </div>
                      </TableCell>
                    </TableRow>
                    
                    
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={10}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </div>
    </>
  )
}

export default HomeSliderBanners
