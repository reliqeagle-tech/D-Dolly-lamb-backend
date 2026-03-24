// import React from 'react'
// import { AiTwotoneGift } from "react-icons/ai"; 
// import { IoStatsChartSharp } from "react-icons/io5";
// import { AiTwotonePieChart } from "react-icons/ai";
// import { RiProductHuntLine } from "react-icons/ri";
// import { BsBank } from "react-icons/bs";
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// const DashboardBoxes = () => {
//   return (
//     <>
//      <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[]}
//         className="dashboardBoxesSlider"
//       >
//         <SwiperSlide>
//             <div className='box p-5 bg-white cursor-pointer hover:bg-[#f1f1f1] border border-gray-500 rounded-md flex items-center gap-4 '>
//                 <AiTwotoneGift className='text-xl lg:text-[50px] text-[#3872fa]'/>
//                 <div className='info w-[70%]'>
//                     <h3 className='text-xs lg:text-base text-gray-600 font-semibold'>New Orders</h3>
//                     <b className='text-sm lg:text-base'>1,390</b>
//                 </div>
//                     <IoStatsChartSharp className='text-xl lg:text-[50px] text-[#3872fa]'/>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//             <div className='box p-5 bg-white cursor-pointer hover:bg-[#f1f1f1] border border-gray-500 rounded-md flex items-center gap-4 '>
//                 <AiTwotonePieChart className='text-xl lg:text-[50px] text-[#10b981]'/>
//                 <div className='info w-[70%]'>
//                     <h3 className='text-xs lg:text-base text-gray-600 font-medium'>Sales</h3>
//                     <b className='text-sm lg:text-base text-gray-800'>$57,890</b>
//                 </div>
//                     <IoStatsChartSharp className='text-xl lg:text-[50px] text-[#10b981]'/>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//             <div className='box p-5 bg-white cursor-pointer hover:bg-[#f1f1f1] border border-gray-500 rounded-md flex items-center gap-4 '>
//                 <BsBank className='text-xl lg:text-[40px] text-[#7928ca]'/>
//                 <div className='info w-[70%]'>
//                     <h3 className='text-xs lg:text-base text-gray-600 font-medium'>Revenue</h3>
//                     <b className='text-sm lg:text-base text-gray-800'>$12,390</b>
//                 </div>
//                     <IoStatsChartSharp className='text-xl lg:text-[50px] text-[#7928ca]'/>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//             <div className='box p-5 bg-white cursor-pointer hover:bg-[#f1f1f1] border border-gray-500 rounded-md flex items-center gap-4 '>
//                 <RiProductHuntLine className='text-xl lg:text-[50px] text-[#3872fa]'/>
//                 <div className='info w-[70%]'>
//                     <h3 className='text-xs lg:text-base text-gray-600 font-medium'>Totals Products</h3>
//                     <b className='text-sm lg:text-base text-gray-800'>1,390</b>
//                 </div>
//                     <IoStatsChartSharp className='text-xl lg:text-[50px] text-[#3872fa]'/>
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//             <div className='box p-5 bg-white cursor-pointer hover:bg-[#f1f1f1] border border-gray-500 rounded-md flex items-center gap-4 '>
//                 <AiTwotoneGift className='text-xl lg:text-[40px] text-[#3872fa]'/>
//                 <div className='info w-[70%]'>
//                     <h3 className='text-xs lg:text-base text-gray-600 font-medium'>New Orders</h3>
//                     <b className='text-sm lg:text-base text-gray-800'>1,390</b>
//                 </div>
//                     <IoStatsChartSharp className='text-xl lg:text-[50px] text-[#3872fa]'/>
//             </div>
//         </SwiperSlide>
         
//         </Swiper>
//     </>  
//   )
// }

// export default DashboardBoxes




import React from 'react'
import { AiTwotoneGift, AiTwotonePieChart } from "react-icons/ai";
import { GoGift } from "react-icons/go";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { BsBank } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DashboardBoxes = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={15}
      navigation
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      className="dashboardBoxesSlider"
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >

      {/* 🔵 New Orders (Blue) */}
      <SwiperSlide>
        <div className="
          box p-5 rounded-md border border-gray-400
          flex items-center gap-4 cursor-pointer
          bg-[#3872fa] text-white
          transition-all duration-300
          group hover:bg-white hover:shadow-lg
        ">
          <GoGift className="
            text-[30px] lg:text-[40px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>

          <div className="info w-[70%] transition-all duration-300 group-hover:text-gray-600">
            <h3 className="text-xs lg:text-base font-semibold">New Orders</h3>
            <b className="text-sm lg:text-base">1,390</b>
          </div>

          <IoStatsChartSharp className="
            text-[40px] lg:text-[50px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>
        </div>
      </SwiperSlide>

      {/* 🟢 Sales (Green) */}
      <SwiperSlide>
        <div className="
          box p-5 rounded-md border border-gray-400
          flex items-center gap-4 cursor-pointer
          bg-[#10b981] text-white
          transition-all duration-300
          group hover:bg-white hover:shadow-lg
        ">
          <AiOutlinePieChart className="
            text-[40px] lg:text-[50px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>

          <div className="info w-[70%] transition-all duration-300 group-hover:text-gray-600">
            <h3 className="text-xs lg:text-base font-semibold">Sales</h3>
            <b className="text-sm lg:text-base">$57,890</b>
          </div>

          <IoStatsChartSharp className="
            text-[40px] lg:text-[50px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>
        </div>
      </SwiperSlide>

      {/* 🟣 Revenue (Purple) */}
      <SwiperSlide>
        <div className="
          box p-5 rounded-md border border-gray-400
          flex items-center gap-4 cursor-pointer
          bg-[#7928ca] text-white
          transition-all duration-300
          group hover:bg-white hover:shadow-lg
        ">
          <BsBank className="
            text-[30px] lg:text-[40px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>

          <div className="info w-[70%] transition-all duration-300 group-hover:text-gray-600">
            <h3 className="text-xs lg:text-base font-semibold">Revenue</h3>
            <b className="text-sm lg:text-base">$12,390</b>
          </div>

          <IoStatsChartSharp className="
            text-[40px] lg:text-[50px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>
        </div>
      </SwiperSlide>

      {/* 🔵 Total Products (Blue) */}
      <SwiperSlide>
        <div className="
          box p-5 rounded-md border border-gray-400
          flex items-center gap-4 cursor-pointer
          bg-[#3872fa] text-white
          transition-all duration-300
          group hover:bg-white hover:shadow-lg
        ">
          <RiProductHuntLine className="
            text-[40px] lg:text-[50px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>

          <div className="info w-[70%] transition-all duration-300 group-hover:text-gray-600">
            <h3 className="text-xs lg:text-base font-semibold">Total Products</h3>
            <b className="text-sm lg:text-base">1,390</b>
          </div>

          <IoStatsChartSharp className="
            text-[40px] lg:text-[50px]
            transition-all duration-300
            group-hover:text-gray-600
          "/>
        </div>
      </SwiperSlide>

    </Swiper>
  )
}

export default DashboardBoxes
