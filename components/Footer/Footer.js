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
                            <h3 className="mb-3 font-bold">জনপ্রিয় স্কিল ডেভেলপমেন্ট কোর্স</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">ঘরে বসে Spoken English</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">IELTS Course by Munzereen Shahid</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">Facebook Marketing</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">২৪ ঘণ্টায় কোরআন শিখি</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">ঘরে বসে Freelancing</li></Link>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold">জনপ্রিয় স্কিল ডেভেলপমেন্ট কোর্স</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC’22 শেষ মুহূর্তের প্রস্তুতি কোর্স</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC 2023 Short Syllabus [Crash Course]</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC - শর্ট সিলেবাস টেস্ট পেপার সল্ভ কোর্স (Bangla, English, ICT)</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC - শর্ট সিলেবাস টেস্ট পেপার সল্ভ কোর্স (Physics, Chemistry, Math, Biology)</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">HSC - শর্ট সিলেবাস টেস্ট পেপার সল্ভ কোর্স (Accounting, Finance)</li></Link>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold">অনলাইন ব্যাচ</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">৯ম - ১০ম শ্রেণি অনলাইন ব্যাচ</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">৮ম শ্রেণি অনলাইন ব্যাচ</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">সপ্তম শ্রেণি অনলাইন ব্যাচ</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">ষষ্ঠ শ্রেণি অনলাইন ব্যাচ</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">পঞ্চম শ্রেণি অনলাইন ব্যাচ</li></Link>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold">চাকরি প্রস্তুতি</h3>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">ব্যাংক জবস কোর্স</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">বিসিএস প্রিলি কোর্স</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">বিসিএস প্রশ্ন সমাধান</li></Link>
                            <Link href="/"><li className="list-none mb-3 cursor-pointer hover:text-red-500 text-sm">প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স</li></Link>
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