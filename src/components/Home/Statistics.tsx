import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
const Statistics = () => {
  return (
    <section className="bg-orange-50 w-full h-64 flex items-center justify-center pt-7">
      <div className="h-full w-full px-[100px] flex gap-5">
        <div className="h-full w-1/4 flex flex-col gap-5 ">
          <div className="h-12 w-12 rounded-full text-orange-500 bg-white flex items-center justify-center shadow-xl ">
            <AiOutlineDollar className="h-9 w-9" />
          </div>
          <h3 className="text-4xl font-bold">$15.4M</h3>
          <h3 className="text-blue-500 font-semibold">
            Owned from <br /> properties transactions
          </h3>
        </div>
        <div className="h-full w-1/4 flex flex-col gap-5 ">
          <div className="h-12 w-12 rounded-full text-orange-500 bg-white flex items-center justify-center shadow-xl ">
            <AiOutlineDollar className="h-9 w-9" />
          </div>
          <h3 className="text-4xl font-bold">25K+</h3>
          <h3 className="text-blue-500 font-semibold">
            Properties for Buy & Sell
            <br />
            Successfully
          </h3>
        </div>
        <div className="h-full w-1/4 flex flex-col gap-5 ">
          <div className="h-12 w-12 rounded-full text-orange-500 bg-white flex items-center justify-center shadow-xl ">
            <GrTransaction className="h-9 w-9" />
          </div>
          <h3 className="text-4xl font-bold">500</h3>
          <h3 className="text-blue-500 font-semibold">
            Daily completed
            <br /> transactions
          </h3>
        </div>
        <div className="h-full w-1/4 flex flex-col gap-5 ">
          <div className="h-12 w-12 rounded-full text-orange-500 bg-white flex items-center justify-center shadow-xl ">
            <FaRegFaceLaugh className="h-9 w-9" />
          </div>
          <h3 className="text-4xl font-bold">600+</h3>
          <h3 className="text-blue-500 font-semibold">
            Regular
            <br /> clients
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
