import Image from 'next/image';
import React from 'react';

const Admission = () => {
    const admissionDatas = [
        {
            id: "1",
            admissionTitle: "University Science",
            admissionPrice: 5000,
            admissionImg: "https://cdn.10minuteschool.com/images/Admission/Thumbnails%20V-2/A%20unit.jpg"
        },
        {
            id: "2",
            admissionTitle: "Engineering",
            admissionPrice: 5000,
            admissionImg: "https://cdn.10minuteschool.com/images/Admission/Thumbnails%20V-2/Engineering.jpg"
        },
        {
            id: "3",
            admissionTitle: "Business Studies",
            admissionPrice: 5000,
            admissionImg: "https://cdn.10minuteschool.com/images/Admission/Thumbnails%20V-2/C-unit.jpg"
        },
        {
            id: "4",
            admissionTitle: "D Unit/BBA + Private University",
            admissionPrice: 5000,
            admissionImg: "https://cdn.10minuteschool.com/images/Admission/Thumbnails%20V-2/D-unit.jpg"
        },
        {
            id: "5",
            admissionTitle: "Kha Unit Admisssion Prep..",
            admissionPrice: 5000,
            admissionImg: "https://cdn.10minuteschool.com/images/Admission/Thumbnails%20V-2/B-unit.jpg"
        },
    ]
    return (
        <section className='lg:w-3/4 mx-auto'>
            <h1 className='text-xl font-semibold py-8 pb-5 pl-5'>Programs</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-5 mb-16'>
                {
                    admissionDatas.map(admissionData =>
                        <div key={admissionData.id} className="lg:w-[300px] rounded-xl border border-gray-300 cursor-pointer hover:drop-shadow-lg hover:-translate-y-4 transition duration-300">
                            <img
                                className="rounded-t-lg"
                                src={admissionData.admissionImg}
                                alt="bcs"
                                width="450"
                                height="250"
                                layout="responsive"
                            />
                            <div className="">
                                <div>
                                    <h4 className="text-lg p-3">
                                        {admissionData.admissionTitle}
                                    </h4>
                                    <div className="border"></div>
                                    <div className="flex justify-between items-center px-4">
                                        <p className='text-xl font-semibold'><span>৳</span> {admissionData.admissionPrice}</p>
                                        <a className="text-lg font-semibold cursor-pointer text-green-700 py-2">
                                            See Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Admission;