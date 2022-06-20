import React from 'react';
import Image from 'next/image'
import AchivementCounter from './AchievementCounter';
import { BsCloudDownloadFill } from 'react-icons/bs';
import { MdTrackChanges } from 'react-icons/md';
import { FiKey } from 'react-icons/fi';
import { TbNotes } from 'react-icons/tb';


const Achievement = () => {
    const icons = [
        {
            "count": '450',
            "title": 'Teachers',
            "icon": "https://10minuteschool.com/assets/icons/home-page/amader-orjon/teacher.png",
        },
        {
            "count": '18k',
            "title": 'Videos',
            "icon": "https://10minuteschool.com/assets/icons/home-page/amader-orjon/content.png",
        },

        {
            "count": '9.3M',
            "title": 'Students',
            "icon": "https://10minuteschool.com/assets/icons/home-page/amader-orjon/student.png",
        },

        {
            "count": '3.2M',
            "title": 'App Users',
            "icon": "https://10minuteschool.com/assets/icons/home-page/amader-orjon/user.png",
        }


    ]
    return (
        <section className="md:px-20 md:mx-20">
            <h2 className="text-4xl text-center font-bold text-gray-600 my-5">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2">

                <div className="col-span-1 p-3 hidden md:block">
                    <Image src="https://cdn.10minuteschool.com/home/career.jpg" alt="achievement" width="282" height="381" layout="responsive" />

                </div>
                <div className="col-span-1 md:col-span-2">

                    <div className="grid grid-cols-2 content-center h-full gap-2 gap-y-8 md:gap-y-20 justify-items-center p-5">
                        {
                            icons.map((icon, index) => <AchivementCounter key={index} icon={icon} />)
                        }
                    </div>


                </div>


            </div>

            {/* mobile app area */}

            <div className="bg-black rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2 items-center lg:w-3/4">

                    <div className="px-5 py-6">

                        <h4 className="text-2xl font-bold text-white">
                            Download our Mobile App to start learning today!
                        </h4>
                        <div className="grid grid-cols-2 pt-5 gap-4">
                            <div className="flex items-center">
                                <div className="rounded-full bg-red-500 p-2 flex justify-center items-center">
                                    <BsCloudDownloadFill size="25" color="white" />

                                </div>
                                <p className="ml-2 text-sm font-semibold text-white">Download Resources</p>
                            </div>
                            <div className="flex items-center">
                                <div className="rounded-full bg-red-500 p-2 flex justify-center items-center">
                                    <MdTrackChanges size="25" color="white" />

                                </div>
                                <p className="ml-2 text-sm font-semibold text-white">Track Your Progress</p>
                            </div>
                            <div className="flex items-center">
                                <div className="rounded-full bg-red-500 p-2 flex justify-center items-center">
                                    <FiKey size="25" color="white" />

                                </div>
                                <p className="ml-2 text-sm font-semibold text-white">Offline Access</p>
                            </div>
                            <div className="flex items-center">
                                <div className="rounded-full bg-red-500 p-2 flex justify-center items-center">
                                    <TbNotes size="25" color="white" />

                                </div>
                                <p className="ml-2 text-sm font-semibold text-white">Course Notification</p>
                            </div>

                        </div>

                        <div className="flex pt-5 gap-4">
                            <Image className="border-2 border-white cursor-pointer" src="https://cdn.10minuteschool.com/images/Landing_page/playstore.png" width={180} height={60} alt="playstore" />;
                            <Image className="border-2 border-white" src="https://cdn.10minuteschool.com/images/Landing_page/appstore.png" width={180} height={60} alt="playstore" />;
                        </div>
                    </div>

                    <div className="p-3 px-12">
                        <Image src="https://10minuteschool.com/assets/icons/home-page/app-download.png" width={80} height={70} layout="responsive" alt="" />
                    </div>

                </div>
            </div>


            <div className="py-10">
                <div className="grid grid-cols md:grid-cols-2 gap-5">
                    <div className="p-2">
                        <h2 className="text-lg md:text-2xl font-bold">Become a part of the largest learning platform in Bangladesh</h2>
                        <p className="text-md">Create your free account and start learning</p>
                        <button className="btn mt-5 btn-success bg-green-800 text-white">Join Now</button>

                    </div>
                    <div className="justify-self-center">
                        <Image src="https://cdn.10minuteschool.com/home/join.jpg" height="180" width="300" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;