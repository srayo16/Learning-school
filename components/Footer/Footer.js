import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            {/* ------------------Footer Top----------------------*/}
            <section className='bg-[#F3F4F6]'>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 py-16 px-8 gap-4 ">
                        <div>
                            <h3 className="mb-3 font-bold text-lg">Popular Skill Development Courses</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">Spoken English from Home</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">IELTS Course by Munzereen Shahid</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">Facebook Marketing</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">Learn Al-Quran in 24 Hours</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">Freelancing from Home</li></Link>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-lg">HSC Courses</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC’22 Last Moment Preparation Course</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC 2023 Short Syllabus [Crash Course]</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC - Short Syllabus Test Paper Solve Course (Bangla, English, ICT)</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC - Short Syllabus Test Paper Solve Course (Physics, Chemistry, Math, Biology)</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC - Short Syllabus Test Paper Solve Course (Accounting, Finance)</li></Link>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-lg">Online Batch</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">9th - 10th Class Online Batch</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">8th Class Online Batch</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">7th Class Online Batch</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">6th Class Online Batch</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">5th Class Online Batch</li></Link>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-lg">Job Preparation</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">Bank Job Course</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">BCS Preli Course</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">BCS Question Solve</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">Primary Assistant Teacher Recruitment Examination Course</li></Link>
                        </div>
                    </div>
                </div>

            </section>

            {/*-------------------- Footer botom -----------------------------*/}
            <section className="container mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 py-16 px-8 gap-4">
                    <div>
                        <img src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" className="w-44 h-12" alt="" />
                        <h3 className="py-6 font-bold text-xl">Download Our Mobile App</h3>
                        <div className="lg:flex md:flex gap-3">
                            <a href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool"> <img src="https://cdn.10minuteschool.com/images/Landing_page/playstore.png" className="w-36 h-11 mb-3" alt="Google Play Store" /></a>
                            <a href="https://apps.apple.com/us/app/10-minute-school/id1577061772"><img src="https://cdn.10minuteschool.com/images/Landing_page/appstore.png" className="w-36 h-11" alt="App Store" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-3 font-bold text-lg">Company</h3>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Career</li></Link>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Pirvacy</li></Link>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Policy</li></Link>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Refund policy</li></Link>
                    </div>
                    <div>
                        <h3 className="mb-3 font-bold text-lg">Others</h3>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Notes and Guides</li></Link>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Blog</li></Link>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Become an Affiliate</li></Link>
                        <Link href="/"><li className="list-none mb-2 cursor-pointer">Crash Course</li></Link>
                    </div>
                    <div>
                        <h3 className="mb-3 font-bold text-lg">Keep up with us at</h3>
                        <div>
                            <strong>Contact:</strong> <a className="text-green-600 hover:underline" href="tel:16910">16910</a>
                        </div>
                        <div>
                            <strong>SMS:</strong> <a className="">10MSHelp to 26969 (24X7)</a>
                        </div>
                        <div className="mb-5">
                            <strong>Email:</strong> <a className="text-green-600 hover:underline" href="mailto:support@10minuteschool.com">support@10minuteschool.com</a>
                        </div>

                        <div className="flex gap-3">
                            <a href="http://">
                                <img src="https://cdn.10minuteschool.com/images/Landing_page/facebook.svg" alt="" />
                            </a>
                            <a href="http://">
                                <img src="https://cdn.10minuteschool.com/images/Landing_page/youtube.svg" alt="" />
                            </a>
                            <a href="http://">
                                <img src="https://cdn.10minuteschool.com/images/Landing_page/Tiktok.svg" alt="" />
                            </a>
                            <a href="http://">
                                <img src="https://cdn.10minuteschool.com/images/Landing_page/instagram.svg" alt="" />
                            </a>
                            <a href="http://">
                                <img src="https://cdn.10minuteschool.com/images/Landing_page/linkedin.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-sm">2015 - 2022 Copyright © 10 Minute School. All rights reserved.</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;