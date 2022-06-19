
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Pagination } from "swiper";

const Review = () => {
    const reviews = [{
        bg: 'https://10minuteschool.com/assets/icons/home-page/left-bg-shape.svg',
        reviewer: 'https://10minuteschool.com/assets/icons/home-page/testimonial/user6.jpg',
        name: "Alfred Jobs",
        inverted: "https://10minuteschool.com/assets/icons/home-page/cote.png",
        designation: "Student ,Oxford",
        comment: "The Microsoft XL course is really amazing.The content flow of the course add new dimension every time . I have learnt many new thing from this course .Thank you so much"
    }, {
        bg: 'https://10minuteschool.com/assets/icons/home-page/left-bg-shape.svg',
        reviewer: 'https://10minuteschool.com/assets/icons/home-page/testimonial/user6.jpg',
        name: "Alfred Jobs",
        inverted: "https://10minuteschool.com/assets/icons/home-page/cote.png",
        designation: "Student ,Oxford",
        comment: "The Microsoft XL course is really amazing.The content flow of the course add new dimension every time . I have learnt many new thing from this course .Thank you so much"
    }, {
        bg: 'https://10minuteschool.com/assets/icons/home-page/left-bg-shape.svg',
        reviewer: 'https://10minuteschool.com/assets/icons/home-page/testimonial/user6.jpg',
        name: "Alfred Jobs",
        inverted: "https://10minuteschool.com/assets/icons/home-page/cote.png",
        designation: "Student ,Oxford",
        comment: "The Microsoft XL course is really amazing.The content flow of the course add new dimension every time . I have learnt many new thing from this course .Thank you so much"
    }, {
        bg: 'https://10minuteschool.com/assets/icons/home-page/left-bg-shape.svg',
        reviewer: 'https://10minuteschool.com/assets/icons/home-page/testimonial/user6.jpg',
        name: "Alfred Jobs",
        inverted: "https://10minuteschool.com/assets/icons/home-page/cote.png",
        designation: "Student ,Oxford",
        comment: "The Microsoft XL course is really amazing.The content flow of the course add new dimension every time . I have learnt many new thing from this course .Thank you so much"
    }, {
        bg: 'https://10minuteschool.com/assets/icons/home-page/left-bg-shape.svg',
        reviewer: 'https://10minuteschool.com/assets/icons/home-page/testimonial/user6.jpg',
        name: "Alfred Jobs",
        inverted: "https://10minuteschool.com/assets/icons/home-page/cote.png",
        designation: "Student ,Oxford",
        comment: "The Microsoft XL course is really amazing.The content flow of the course add new dimension every time . I have learnt many new thing from this course .Thank you so much"
    }, {
        bg: 'https://10minuteschool.com/assets/icons/home-page/left-bg-shape.svg',
        reviewer: 'https://10minuteschool.com/assets/icons/home-page/testimonial/user6.jpg',
        name: "Alfred Jobs",
        inverted: "https://10minuteschool.com/assets/icons/home-page/cote.png",
        designation: "Student ,Oxford",
        comment: "The Microsoft XL course is really amazing.The content flow of the course add new dimension every time . I have learnt many new thing from this course .Thank you so much"
    },
    ]
    return (
        <div>
            <h1 className="text-center text-2xl my-8 pb-4">Our students and their parents love us!</h1>
            <div className="lg:w-3/4 mx-auto">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                        350: {
                            width: 350,
                            slidesPerView: 1,
                        },
                        850: {
                            width: 850,
                            slidesPerView: 2,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 3,

                        },
                    }}
                    freeMode={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review, index) => <SwiperSlide key={index}>
                            <div className="hover:-mt-4 py-16 mb-8 duration-300 relative ease-in-out bg-no-repeat bg-left-top">
                                <div>
                                    <img src={review.bg} alt="" />
                                </div>
                                <div className="bg-white my-16  ml-4 top-12 absolute rounded-lg shadow-xl pb-12">
                                    <div className="avatar pt-4">
                                        <div className="h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={review?.reviewer} alt="" />
                                        </div>
                                        <div className="px-2 pt-2">
                                            <h2>{review?.name}</h2>
                                            <p>{review?.designation}</p>
                                        </div>
                                    </div>
                                    <p className="text-left px-4 -mt-12">{review.comment}</p>
                                    <div className="w-8 absolute left-8 -top-2">
                                        <img src={review.inverted} alt="" />
                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;