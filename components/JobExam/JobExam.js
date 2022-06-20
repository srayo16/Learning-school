import React from "react";
import Image from "next/image";

const JobExam = () => {
  return (
    <div className="bg-[#F3F4F6] py-20">
      <div>
        <h2 className="text-3xl text-center font-bold">Job Exam Preparation</h2>
        <p className="text-xl text-center my-5 text-[#525252]">
          Which job are you preparing for?
        </p>
      </div>

      {/* card  */}

      <div className="grid grid-cols-1 lg:grid-cols-4 w-full lg:w-3/4 mx-auto">
        <div className="p-5 hover:drop-shadow-lg hover:translate-y-4 transition duration-300 cursor-pointer">
          <div className="bg-slate-100 lg:w-[300px] rounded-lg">
            <Image
              className="rounded-t-lg"
              src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BCS-Course-Thumbnail.jpg"
              alt="bcs"
              width="450"
              height="250"
              layout="responsive"
            />
            <div className="">
              <div>
                <h4 className="text-xl font-bold text-center p-3">
                  BCS New Course
                </h4>
                <div className="border"></div>
                <div className="flex justify-center items-center">
                  <a className="text-xl cursor-pointer text-green-400 py-2">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 hover:drop-shadow-lg hover:translate-y-4 transition duration-300 cursor-pointer">
          <div className="bg-slate-100 lg:w-[300px] rounded-lg">
            <Image
              className="rounded-t-lg"
              src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BCS-Course-Thumbnail.jpg"
              alt="bcs"
              width="450"
              height="250"
              layout="responsive"
            />
            <div className="">
              <div>
                <h4 className="text-xl font-bold text-center p-3">
                  BCS New Course
                </h4>
                <div className="border"></div>
                <div className="flex justify-center items-center">
                  <a className="text-xl cursor-pointer text-green-400 py-2">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 hover:drop-shadow-lg hover:translate-y-4 transition duration-300 cursor-pointer">
          <div className="bg-slate-100 lg:w-[300px] rounded-lg">
            <Image
              className="rounded-t-lg"
              src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BCS-Course-Thumbnail.jpg"
              alt="bcs"
              width="450"
              height="250"
              layout="responsive"
            />
            <div className="">
              <div>
                <h4 className="text-xl font-bold text-center p-3">
                  BCS New Course
                </h4>
                <div className="border"></div>
                <div className="flex justify-center items-center">
                  <a className="text-xl cursor-pointer text-green-400 py-2">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 hover:drop-shadow-lg hover:translate-y-4 transition duration-300 cursor-pointer">
          <div className="bg-slate-100 lg:w-[300px] rounded-lg">
            <Image
              className="rounded-t-lg"
              src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BCS-Course-Thumbnail.jpg"
              alt="bcs"
              width="450"
              height="250"
              layout="responsive"
            />
            <div className="">
              <div>
                <h4 className="text-xl font-bold text-center p-3">
                  BCS New Course
                </h4>
                <div className="border"></div>
                <div className="flex justify-center items-center">
                  <a className="text-xl cursor-pointer text-green-400 py-2">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-2">
        <button className="btn bg-[#27895d]">Explore Course</button>
      </div>
    </div>
  );
};

export default JobExam;
