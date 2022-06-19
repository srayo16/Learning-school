import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
  const images = ['https://cdn.10minuteschool.com/md/images/thumbnails/eid-special/facebook-marketing.jpg',
    'https://cdn.10minuteschool.com/md/images/BCS-500x710.jpg',
    'https://cdn.10minuteschool.com/md/images/HSC-2022-SMP-500x710.jpg',
    'https://cdn.10minuteschool.com/md/images/HSC-Short-2023.jpg',
    'https://cdn.10minuteschool.com/md/images/GBSE-500x710.jpg',
    'https://cdn.10minuteschool.com/md/images/IELTS-Course-by-Munzereen-Shahid-500x710.jpg'
  ]
  return (
    <div className='lg:min-h-screen bg-gray-700 py-16'>
      <div className="pb-8">
        <h1 className="text-4xl text-white text-center py-4">Special Discount!</h1>
        <p className="text-white text-center pb-8 text-xl pt-4">Throughout the month of June, various courses of Ten Minute School can be done more saving Money!</p>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          slidesPerGroup={1}
          slidesPerView={5}
          breakpoints={{
            300: {
              width: 400,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 4,

            },
            1300: {
              width: 1300,
              slidesPerView: 5,

            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper lg:w-3/4"
        >
          {images.map((image, index) => <SwiperSlide key={index} className='align-middle rounded-md justify-center'> <img src={image} alt="" /></SwiperSlide>)}

        </Swiper>
      </>
    </div>
  );
};

export default Banner;