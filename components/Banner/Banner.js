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
        <div className='min-h-screen bg-gray-700 py-16'>
            <h1 className="text-4xl text-white text-center py-4">বিশেষ মূল্য ছাড় !</h1>
            <p className="text-white text-center pb-8 text-xl pt-4">পুরো জুন মাস জুড়ে টেন মিনিট স্কুলের বিভিন্ন কোর্স করা যাবে আরো সাশ্রয়ে!</p>
           <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper lg:w-3/4 "
      >
        {images.map((image,index)=><SwiperSlide key={index} className='align-middle rounded-md'> <img src={image} alt="" /></SwiperSlide>)}

      </Swiper>
    </>
        </div>
    );
};

export default Banner;