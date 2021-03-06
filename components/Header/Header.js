import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgLogIn } from 'react-icons/cg';


const Header = () => {
    return (
        <div className="navbar justify-between lg:w-3/4 mx-auto">
            <div className="">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="md:h-12 md:mr-4 w-5 h-5 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex="0">
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link href="/"><img className='md:mr-4 cursor-pointer' src='https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg' alt='' width={150} height={100} /></Link>
            </div>
            <div className="text-xl text-gray-700 navbar-center hidden lg:flex">
                <Link href='/academic'><a className='mx-2 px-2'>Class 1-12</a></Link>
                <Link href='/courses'><a className='mx-2 px-2'>Courses</a></Link>
                <Link href='/admission'><a className='mx-2 px-2'>Admission</a></Link>
                <Link href='/getJob'><a className='mx-2 px-2'>Get Job-Ready</a></Link>
                <Link href='/bookStore'><a className='mx-2 px-2'>Book Store</a></Link>
            </div>
            <div className="navbar-end text-xl">
                <a className='mx-2 hidden md:block'>English</a>
                <Link href="/auth/login"><a className="justify-end bg-gray-600 rounded font-semibold  px-6 text-white py-2 flex items-center"><span className='mr-1'><CgLogIn size={18}/></span> Log in</a></Link>
            </div>
        </div>
    );
};

export default Header;