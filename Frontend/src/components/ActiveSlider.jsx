import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen py-10 bg-[#6c34af]">
  <Swiper
    breakpoints={{
      0: { slidesPerView: 1, spaceBetween: 10 },    // phones
      640: { slidesPerView: 1.2, spaceBetween: 10 }, // small tablets
      768: { slidesPerView: 2, spaceBetween: 15 },   // tablets
      1024: { slidesPerView: 3, spaceBetween: 20 },  // desktops
    }}
    freeMode={true}
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination]}
    className="w-full max-w-[95%] md:max-w-[85%] lg:max-w-[80%]"
  >
    {ServiceData.map((item) => (
      <SwiperSlide key={item.title}>
        <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />

          {/* Content */}
          <div className="relative p-6 sm:p-8 flex flex-col gap-3 h-[220px] sm:h-[260px] md:h-[280px] text-white">
            <item.icon className="w-8 h-8 text-blue-300 group-hover:text-blue-500 transition-all" />
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {item.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              {item.content}
            </p>
          </div>

          {/* Icon bottom-left */}
          <RxArrowTopRight
            className="absolute bottom-5 left-5 w-8 h-8 text-white group-hover:text-blue-500 group-hover:rotate-45 transition-all duration-200"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default ActiveSlider;