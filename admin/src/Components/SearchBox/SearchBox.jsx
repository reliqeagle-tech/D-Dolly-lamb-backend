import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className='w-full h-auto bg-[#f1f1f1] relative overflow-hidden'>
        <IoSearch className='absolute top-[10px] left-[10px] z-50 pointer-event-none text-gray-700' />
      <input type="text" className='w-full h-[40px] p-2 pl-8 border border-gray-300 focus:outline-none focus:border-gray-500 rounded-md text-[13px] text-gray-700 font-medium' placeholder='Search here..' />
    </div>
  )
} 

export default SearchBox
