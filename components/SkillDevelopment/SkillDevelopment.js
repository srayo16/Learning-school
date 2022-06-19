import React from 'react';
import Link from 'next/link'

const SkillDevelopment = () => {
    return (
        <section className='py-16'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Skill Development Courses</h1>
                <h2 className='text-gray-500 text-lg my-4'>Which skill will you develop today?</h2>
            </div>
            {/* --------- Skill Navigation Bar----------- */}
            <div className='lg:flex justify-center'>
                <div className='grid lg:grid-cols-6 md:grid-cols-2 text-center gap-6 px-8'>
                    <Link href=""><li className='border hover:border hover:bg-green-100 hover: border-green-500 py-1 rounded-full list-none font-semibold text-lg text-gray-600 cursor-pointer px-5'>Language Learning</li></Link>
                    <Link href=""><li className='border hover:border hover:bg-green-100 hover: border-green-500 py-1 rounded-full list-none font-semibold text-lg text-gray-600 cursor-pointer px-5'>Kids{"'"} Courses</li></Link>
                    <Link href=""><li className='border hover:border hover:bg-green-100 hover: border-green-500 py-1 rounded-full list-none font-semibold text-lg text-gray-600 cursor-pointer px-5'>Skill Development</li></Link>
                    <Link href=""><li className='border hover:border hover:bg-green-100 hover: border-green-500 py-1 rounded-full list-none font-semibold text-lg text-gray-600 cursor-pointer px-5'>Professional Courses</li></Link>
                    <Link href=""><li className='border hover:border hover:bg-green-100 hover: border-green-500 py-1 rounded-full list-none font-semibold text-lg text-gray-600 cursor-pointer px-5'>Job Recruitment</li></Link>
                    <Link href=""><li className='border hover:border hover:bg-green-100 hover: border-green-500 py-1 rounded-full list-none font-semibold text-lg text-gray-600 cursor-pointer px-5'>Free Courses</li></Link>

                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 container mx-auto py-11 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl  cursor-pointer hover:drop-shadow-lg hover:-translate-y-4 transition duration-300">
                    <figure><img src="https://cdn.10minuteschool.com/images/Thumbnails/Ghore-boshe-Spoken-English-Course-Thumbnail.jpg" alt="English Spoken Course" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-xl font-semibold">English Spoken From Home</h2>
                    </div>
                    <div className="border-t-2 h-12 flex justify-center items-center">
                        <h2 className='text-lg font-semibold text-green-700'>See Details</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl cursor-pointer hover:drop-shadow-lg hover:-translate-y-4 transition duration-300">
                    <figure><img src="https://cdn.10minuteschool.com/images/Thumbnails/IELTS-Course-Thumbnail.jpg" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-xl font-semibold">IELTS Course by Munzereen Sha...</h2>
                    </div>
                    <div className="border-t-2 h-12 flex justify-center items-center">
                        <h2 className='text-lg font-semibold text-green-700'>See Details</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl cursor-pointer hover:drop-shadow-lg hover:-translate-y-4 transition duration-300">
                    <figure><img src="https://cdn.10minuteschool.com/images/Thumbnails/24-ghontay-quran-shikhi-Course-Thumbnail-.jpg" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-xl font-semibold">Learn Al-Quran in 24 Hours</h2>
                    </div>
                    <div className="border-t-2 h-12 flex justify-center items-center">
                        <h2 className='text-lg font-semibold text-green-700'>See Details</h2>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <button className='btn bg-green-700'>Explore All Skill Development Courses</button>
            </div>

        </section>
    );
};

export default SkillDevelopment;