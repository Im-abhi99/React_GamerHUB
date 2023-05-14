import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../Styles/Styes.scss";
import "../Styles/Styes.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pt-3 mt-5"
      >
        <SwiperSlide><img className=" img-fluid "src="https://promotions.newegg.com/nepro/22-2246/1920x660.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=" img-fluid " src="	https://www.vedantcomputers.com/image/cache/catalog/vc/slider/compress/1320x600-GOTG-min-1320x600.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  className=" img-fluid "src="	https://www.vedantcomputers.com/image/cache/catalog/vc/slider/compress/1320x600-Overwatch-40-min-1320x600.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=" img-fluid" src="https://www.vedantcomputers.com/image/cache/catalog/vc/slider/compress/1320x600-26999-min-1320x600.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  className=" img-fluid  " src="https://promotions.newegg.com/nepro/23-0590/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=" img-fluid " src="	https://promotions.newegg.com/abs/23-0595/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img className=" img-fluid ps-lg-5 " src="https://www.nvidia.partners/assets/images/GEFORCE_GTX_16SERIES/windows_1280_NV_Brand_Store_Home_Square_40_Series-375x375.jpg" alt="" /><img src="https://www.nvidia.partners/assets/images/US_-_GeForce_RTX_30_Series/windows_1280_NV_Brand_Store_Home_Square_30_Series-375x375.jpg" alt="" /><img src="https://www.nvidia.partners/assets/images/US_-_NVIDIA_STUDIO/windows_1280_NV_Brand_Store_Home_Square_Studio-375x375.jpg" alt="" /></SwiperSlide>
    
      </Swiper>
      
    </>
  );
}
