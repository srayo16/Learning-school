import React from 'react';
import { TbNetwork } from 'react-icons/tb';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { MdOutlinePeopleAlt } from 'react-icons/md';


const ClassesOne = () => {
    return (
        <div className='container mx-auto my-24'>
            <h1 className='text-4xl font-semibold text-center'>Class 1-12</h1>
            <p className='text-gray-500 text-xl text-center mt-3'>Find all your learning materials from Class 1 to 12 under one roof</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-0 mt-10'>
                <div className="card card-compact w-80  lg:w-96 bg-base-100 border mx-auto hover:-mt-5 mb-auto duration-300 relative ease-in-out bg-no-repeat bg-left-top hover:shadow-xl">
                    <figure><img src="https://10minuteschool.com/assets/icons/home-page/academic-bg.png" alt="Shoes" className='w-full' style={{ backgroundColor: 'rgb(5, 95, 96)' }} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center mx-auto">HSC</h2>
                        <div className='pt-5 pb-3 text-base'>
                            <p className='flex items-center text-gray-600 pb-2 antialiased font-normal tracking-wide'><span><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className='ml-2'>5,077 Free Vide...</span> <span className='ml-5 mr-2'><MdOutlinePeopleAlt></MdOutlinePeopleAlt></span> <span>35 Subjects</span></p>
                            <p className='flex items-center text-gray-600 antialiased font-normal tracking-wide'><span><TbNetwork></TbNetwork></span><span className='ml-2'>Live Class</span><span className='ml-16'><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className=''> MCQ & CQ Solve </span></p>
                        </div>
                        <div className="card-actions justify-center border">
                            <button className="btn  hover:bg-slate-100 bg-base-100 border-0 text-green-700 antialiased tracking-wide font-bold ">See Details</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-80  lg:w-96 bg-base-100 border mx-auto hover:-mt-5 mb-auto duration-300 relative ease-in-out bg-no-repeat bg-left-top hover:shadow-xl">
                    <figure><img src="https://10minuteschool.com/assets/icons/home-page/academic-bg.png" alt="Shoes" className='w-full' style={{ backgroundColor: 'rgb(110, 31, 237)' }} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center mx-auto">SSC</h2>
                        <div className='pt-5 pb-3 text-base'>
                            <p className='flex items-center text-gray-600 pb-2 antialiased font-normal tracking-wide'><span><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className='ml-2'>1,660 Free Vide...</span> <span className='ml-5 mr-2'><MdOutlinePeopleAlt></MdOutlinePeopleAlt></span> <span>19 Subjects</span></p>
                            <p className='flex items-center text-gray-600 antialiased font-normal tracking-wide'><span><TbNetwork></TbNetwork></span><span className='ml-2'>Live Class</span><span className='ml-16'><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className=''> MCQ & CQ Solve </span></p>
                        </div>
                        <div className="card-actions justify-center border">
                            <button className="btn  hover:bg-slate-100 bg-base-100 border-0 text-green-700 antialiased tracking-wide font-bold ">See Details</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-80  lg:w-96 bg-base-100 border mx-auto hover:-mt-5 mb-auto duration-300 relative ease-in-out bg-no-repeat bg-left-top hover:shadow-xl">
                    <figure><img src="https://10minuteschool.com/assets/icons/home-page/academic-bg.png" alt="Shoes" className='w-full' style={{ backgroundColor: 'rgb(207, 42, 70)' }} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center mx-auto">2nd Grade-8th Grade</h2>
                        <div className='pt-5 pb-3 text-base'>
                            <p className='flex items-center text-gray-600 pb-2 antialiased font-normal tracking-wide'><span><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className='ml-2'>1,498 Free Vide...</span> <span className='ml-5 mr-2'><MdOutlinePeopleAlt></MdOutlinePeopleAlt></span> <span>45 Subjects</span></p>
                            <p className='flex items-center text-gray-600 antialiased font-normal tracking-wide'><span><TbNetwork></TbNetwork></span><span className='ml-2'>Live Class</span><span className='ml-16'><AiOutlinePlayCircle></AiOutlinePlayCircle></span><span className=''> MCQ & CQ Solve </span></p>
                        </div>
                        <div className="card-actions justify-center border">
                            <button className="btn  hover:bg-slate-100 bg-base-100 border-0 text-green-700 antialiased tracking-wide font-bold ">See Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClassesOne;