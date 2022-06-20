import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../Shared/Loading";
import { useRouter } from 'next/router'

const AdmissionPrep = () => {
  const [admissionDatas, setAdmissionDatas] = useState([]);

  const router = useRouter()

  useEffect(() => {
    const admissionFetchData = async () => {
      await fetch('https://warm-retreat-39685.herokuapp.com/admission')
        .then(res => res.json())
        .then(data => setAdmissionDatas(data))
    }
    admissionFetchData();
  }, []);

  const fourAdmissionDatas = admissionDatas.length > 4 ? admissionDatas.slice(0, 4) : admissionDatas

  if (!fourAdmissionDatas.length > 0) {
    return <Loading></Loading>
  }

  return (
    <div className="py-20">
      <div>
        <h2 className="text-3xl text-center font-bold">
          University Admission Preparation
        </h2>
        <p className="text-xl text-center my-5 text-[#525252]">
          Prepare for your dream university
        </p>
      </div>

      {/* card  */}

      <div className="grid lg:grid-cols-2 justify-items-center">
        {
          fourAdmissionDatas.map(admissionData =>
            <div key={admissionData._id} className="p-5 hover:drop-shadow-lg hover:scale-110 transition duration-300 cursor-pointer">
              <div className="flex bg-slate-100 lg:w-[500px] rounded-lg">
                <Image
                  width={"200px"}
                  height={"111px"}
                  className="rounded-l-lg"
                  src={admissionData.courseImg}
                  alt="A-unit"
                />
                <div className="flex items-center ml-5">
                  <div>
                    <h2 className="text-xl font-bold">{admissionData.course}</h2>
                    <div className="flex ">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20px] mr-2 mt-1"
                      >
                        <path
                          d="M14.8182 16.5451V14.8178C14.8182 13.9016 14.4542 13.0229 13.8064 12.3751C13.1585 11.7272 12.2798 11.3633 11.3636 11.3633H4.45455C3.53834 11.3633 2.65967 11.7272 2.01181 12.3751C1.36396 13.0229 1 13.9016 1 14.8178V16.5451"
                          stroke="#636161"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.90865 7.90909C9.81654 7.90909 11.3632 6.36244 11.3632 4.45455C11.3632 2.54665 9.81654 1 7.90865 1C6.00075 1 4.4541 2.54665 4.4541 4.45455C4.4541 6.36244 6.00075 7.90909 7.90865 7.90909Z"
                          stroke="#636161"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 16.5451V14.8179C19.9995 14.0524 19.7447 13.3089 19.2758 12.7039C18.8068 12.099 18.1502 11.6669 17.4091 11.4756"
                          stroke="#636161"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.9541 1.1123C14.6972 1.30256 15.3558 1.73473 15.8262 2.34066C16.2965 2.9466 16.5518 3.69184 16.5518 4.4589C16.5518 5.22595 16.2965 5.97119 15.8262 6.57713C15.3558 7.18306 14.6972 7.61523 13.9541 7.80549"
                          stroke="#636161"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p>2222 students have enrolled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
        }
      </div>
      <div className=" flex justify-center">
        <button onClick={() => router.push("/admission")} className="btn bg-green-700">Explore All Programs</button>
      </div>
    </div>
  );
};

export default AdmissionPrep;
