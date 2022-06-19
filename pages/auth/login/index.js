import React from 'react';
import { FaFacebook, FaRegUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link'

const index = () => {
    return (
        <div>
             <div className='flex justify-center items-center h-screen'
            style={{
                background: `url("https://i.ibb.co/HnBRRYn/login-Image.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
            }}
        >
            <div>
                <div className="card w-96 flex bg-base-100 shadow-3xl">
                    <div className="card-body">
                        <div className='flex justify-center text-secondary'>
                            <span><FaRegUserCircle size='40' /></span>
                        </div>
                        <h2 className="text-center text-xl mb-4">Login</h2>
                        <form className="">
                            <input type="email" name="email" placeholder="Your Email" className="input w-full max-w-xs border-gray-200 mb-4" required />
                            <input type="password" name="password" placeholder="Password" className="input w-full max-w-xs border-gray-200 mb-4" required />
                            <input type="submit" value="Submit" className="input w-full max-w-xs border-gray-200 bg-primary text-white cursor-pointer" />
                        </form>
                        <div>
                            <p>Forget Password? <span className='text-secondary text-sm hover:underline cursor-pointer'>Reset Password</span></p>
                            <Link href="/auth/signup"><p className='text-secondary hover:underline cursor-pointer'>Create an Account?</p></Link>
                        </div>
                        <div className="divider">or</div>
                        <div className='flex justify-center'>
                            <span className='hover:shadow-lg hover:translate-y-1 hover:transition  rounded-full mr-3 cursor-pointer'><FcGoogle size="40" /></span>
                            <span className='hover:shadow-lg  rounded-full mr-3 cursor-pointer hover:translate-y-1 hover:transition'><FaFacebook size="40" color='blue' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default index;