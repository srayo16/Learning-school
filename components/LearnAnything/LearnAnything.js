import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import { GiSecretBook } from 'react-icons/gi';
import { BsFillBriefcaseFill } from 'react-icons/bs';

export default function LearnAnything() {
    return (
        <div>
            <div className='text-center my-16'>
                <h1 className='text-4xl font-semibold text-center'>We have everything you <br />need to learn anything</h1>
                <p className='text-xl pt-4 text-gray-700 text-center'>Choose your topic from our vast library to get started</p>
            </div>
            <div className='md:w-3/4 rounded-lg bg-slate-100 grid grid-cols-2 md:grid-cols-4 mx-auto'>
                <div className='hover:border border-cyan-600 bg-white m-2 flex flex-wrap items-center justify-center p-4 rounded-lg'>
                    <ImBook className='text-3xl mx-2 text-cyan-600' />
                    <p className='text-lg font-bold text-gray-700'>Class 1-12</p>
                </div>
                <div className='hover:border border-emerald-600 bg-white m-2 flex flex-wrap items-center justify-center p-4 rounded-lg'>
                    <FaGraduationCap className='text-3xl mx-2 text-emerald-600' />
                    <p className='text-lg font-bold text-gray-700'>Admission</p>
                </div>
                <div className=' hover:border border-sky-600 bg-white m-2 flex flex-wrap items-center justify-center p-4 rounded-lg'>
                    <BsFillBriefcaseFill className=' text-3xl mx-2 text-sky-600' />
                    <p className='text-lg font-bold text-gray-700'>Job Preparation</p>
                </div>
                <div className='hover:border border-violet-900 bg-white m-2 flex flex-wrap items-center justify-center p-4 rounded-lg'>
                    <GiSecretBook className='text-3xl mx-2 text-violet-900' />
                    <p className='text-lg font-bold text-gray-700'>Courses</p>
                </div>
            </div>
            <div className='container mx-auto my-16'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0'>
                    <div className="card bg-base-100 mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.10minuteschool.com/images/Landing_page/Video%20lecture.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Watch video lectures</h2>
                            <p className='px-5  antialiased text-base text-gray-500 hidden md:block'>Learn at your own pace from our 20,000+ videos</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.10minuteschool.com/images/Landing_page/Exercise.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center mx-auto">
                            <h2 className="card-title">Practice anytime</h2>
                            <p className='px-5  antialiased text-base text-gray-500 hidden md:block'>Instant scores, explanations and leaderboards!</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.10minuteschool.com/images/Landing_page/LIve%20Class.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Attend live classes</h2>
                            <p className='px-5  antialiased text-base text-gray-500 hidden md:block'>Daily live classes help you maintain your routine</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.10minuteschool.com/images/Landing_page/Lecture%20sheet.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Every note you will ever need</h2>
                            <p className='px-5  antialiased text-base text-gray-500 hidden md:block'>Access our lecture sheets and interactive books</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.10minuteschool.com/images/Landing_page/Daily%20result%20and%20leaderboard.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Daily results and leaderboards</h2>
                            <p className='px-5  antialiased text-base text-gray-500 hidden md:block'>See where you stand among your friends</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.10minuteschool.com/images/Landing_page/ask%20question.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Ask your teacher</h2>
                            <p className='px-5  antialiased text-base text-gray-500 hidden md:block'>Get your doubts solved within our platform</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
