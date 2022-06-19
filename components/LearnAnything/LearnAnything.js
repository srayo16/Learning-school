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
        </div>
    )
}
