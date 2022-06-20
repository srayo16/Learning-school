import React from 'react';

const GetJobReady = () => {
    const readyJobDatas = [
        {
            id: "1",
            readyJobTitle: "Bank Job Course",
            readyJobPrice: 1500,
            readyJobImg: "https://cdn.10minuteschool.com/lg/images/skills/Updated_Thumbnail_v3/bank_jobs_thumbnail.jpg"
        },
        {
            id: "2",
            readyJobTitle: "BCS Preli Course",
            readyJobPrice: 3000,
            readyJobImg: "https://cdn.10minuteschool.com/lg/images/skills/Updated_Thumbnail_v3/BCS-Course-Thumbnail.jpg"
        },
        {
            id: "3",
            readyJobTitle: "BCS Question Solve",
            readyJobPrice: "Free",
            readyJobImg: "https://cdn.10minuteschool.com/lg/images/skills/Updated_Thumbnail_v3/bcs_qs_thumbnail.jpg"
        },
        {
            id: "4",
            readyJobTitle: "Primary Assistant Teacher...",
            readyJobPrice: 450,
            readyJobImg: "https://cdn.10minuteschool.com/lg/images/skills/Updated_Thumbnail_v3/Prathomik-shohokari-shikkhok-niyog.jpg"
        },
        {
            id: "5",
            readyJobTitle: "44th BCS Final Model...",
            readyJobPrice: "Free",
            readyJobImg: "https://cdn.10minuteschool.com/lg/images/skills/Updated_Thumbnail_v3/44bcsmodel_v2.jpg"
        },
    ]
    return (
        <section className='lg:w-3/4 mx-auto'>
            <h1 className='text-xl font-semibold py-8 pb-5 pl-5'>Job Recruitment</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-5 mb-16'>
                {
                    readyJobDatas.map(readyJobData =>
                        <div key={readyJobData.id} className="lg:w-[300px] rounded-xl border border-gray-300 cursor-pointer hover:drop-shadow-lg hover:-translate-y-4 transition duration-300">
                            <img
                                className="rounded-t-lg"
                                src={readyJobData.readyJobImg}
                                alt="bcs"
                                width="450"
                                height="250"
                                layout="responsive"
                            />
                            <div className="">
                                <div>
                                    <h4 className="text-lg p-3">
                                        {readyJobData.readyJobTitle}
                                    </h4>
                                    <div className="border"></div>
                                    <div className="flex justify-between items-center px-4">
                                        <p className='text-xl font-semibold'><span>৳</span> {readyJobData.readyJobPrice}</p>
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

export default GetJobReady;