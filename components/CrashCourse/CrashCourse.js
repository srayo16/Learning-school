import React from 'react';
import { TbNetwork } from 'react-icons/tb';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const CrashCourse = () => {
    return (
        <div className='container mx-auto my-16'>
            <h1 className='text-4xl font-semibold text-center'>Special Crash Course</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-0 mt-10'>
                <div className="card card-compact w-80 lg:w-96 bg-base-100 border mx-auto hover:mb-5">
                    <figure><img src="https://cdn.10minuteschool.com/lg/images/thumbnails/HSC_2023_Short_Syllabus_Crash_Course_Course_Thumbnail_1.91x1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">HSC 2023 Short Syllabus [Crash...</h2>
                        <div className='pt-5 pb-3'>
                            <p className='flex items-center text-gray-600 pb-1  antialiased font-normal tracking-wide'><span><TbNetwork></TbNetwork></span><span className='ml-2'>৪০০টি লাইভ ক্লাস, সাথে আছে মডেল টেস্ট</span></p>
                            <p className='flex items-center text-gray-600 antialiased font-normal tracking-wide'><span><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className='ml-2'>ক্লাস চলবে: ৮ মাস</span></p>
                        </div>
                        <div className="card-actions justify-center border">
                            <button className="btn  hover:bg-slate-100 bg-base-100 border-0 text-green-700 antialiased tracking-wide font-extrabold ">ভর্তি হও</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 lg:w-96 bg-base-100 border mx-auto">
                    <figure><img src="https://cdn.10minuteschool.com/lg/images/thumbnails/hsc-22-shesh-muhurter-prostuti-thumbnail.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">HSC’22 শেষ মুহূর্তের প্রস্তুতি কোর্স</h2>
                        <div className='pt-5 pb-3'>
                            <p className='flex items-center text-gray-600 pb-1  antialiased font-normal tracking-wide'><span><TbNetwork></TbNetwork></span><span className='ml-2'>১০টি বিষয়ে ৬৪টি লাইভ ক্লাস</span></p>
                            <p className='flex items-center text-gray-600 antialiased font-normal tracking-wide'><span><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className='ml-2'>ক্লাস চলবে মোট ১৯২ ঘণ্টা</span></p>
                        </div>
                        <div className="card-actions justify-center border">
                            <button className="btn  hover:bg-slate-100 bg-base-100 border-0 text-green-700 antialiased tracking-wide font-extrabold ">ভর্তি হও</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-80 lg:w-96 bg-base-100 border mx-auto">
                    <figure><img src="https://cdn.10minuteschool.com/lg/images/thumbnails/Sesh-Muhurter-Prostuti-SSC-2022.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">SSC 22 শেষ মুহূর্তের প্রস্তুতি কোর্স</h2>
                        <div className='pt-5 pb-3'>
                            <p className='flex items-center text-gray-600 pb-1  antialiased font-normal tracking-wide'><span><TbNetwork></TbNetwork></span><span className='ml-2'>৫টি বিষয়ে ৩৫টি লাইভ ক্লাস</span></p>
                            <p className='flex items-center text-gray-600 antialiased font-normal tracking-wide'><span><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className='ml-2'>সাথে আছে মডেল টেস্ট</span></p>
                        </div>
                        <div className="card-actions justify-center border">
                            <button className="btn  hover:bg-slate-100 bg-base-100 border-0 text-green-700 antialiased tracking-wide font-extrabold ">ভর্তি হও</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CrashCourse;