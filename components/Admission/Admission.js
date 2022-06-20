import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Admission = () => {
    const [admissionDatas, setAdmissionDatas] = useState([]);

    useEffect(() => {
        const admissionFetchData = async () => {
                await fetch('https://warm-retreat-39685.herokuapp.com/admission')
                .then(res => res.json())
                .then(data => setAdmissionDatas(data))
        }
        admissionFetchData();
    }, [])

    return (
        <section className='lg:w-3/4 mx-auto'>
            <h1 className='text-xl font-semibold py-8 pb-5 pl-5'>Programs</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-5 mb-16'>
                {
                    admissionDatas.map(admissionData =>
                        <div key={admissionData._id} className="lg:w-[300px] rounded-xl border border-gray-300 cursor-pointer hover:drop-shadow-lg hover:-translate-y-4 transition duration-300">
                            <img
                                className="rounded-t-lg"
                                src={admissionData.courseImg}
                                alt="bcs"
                                width="450"
                                height="250"
                                layout="responsive"
                            />
                            <div className="">
                                <div>
                                    <h4 className="text-lg p-3">
                                        {admissionData.course}
                                    </h4>
                                    <div className="border"></div>
                                    <div className="flex justify-between items-center px-4">
                                        <p className='text-xl font-semibold'><span>৳</span> {admissionData.price}</p>
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