import React from "react";
import Navbar from "../Home/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";

const Property = () => {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "0",
    margin: "0",
  };
  return (
    <>
      <Navbar />
      <div className="px-[100px] bg-orange-50">
        <div className="h-[30rem] flex gap-2 mt-3">
          <img
            className="w-2/3 h-full rounded-md"
            src="/images/Room.jpeg"
            alt=""
          />

          <div className="h-full w-1/3 flex flex-col gap-2">
            <img
              className="h-1/2 w-full rounded-md"
              src="/images/Decoration02.jpeg"
              alt=""
            />
            <img
              className="h-1/2 w-full rounded-md"
              src="/images/Decoration02.jpeg"
              alt=""
            />
          </div>
        </div>

        <div className="h-[45rem] bg-orange-50 mt-10 flex gap-3">
          <div className="h-full w-2/3 bg-white p-5 border-[1px] rounded-lg">
            <h3 className="text-2xl font-semibold">
              Trovilla Plan Gishushu, Kigali Rwanda
            </h3>
            <h3 className="mt-2">Kg Streest 102 Avenue</h3>
            <div className="flex gap-2 mt-7">
              <button className="h-12 w-44 border-[1px] border-black rounded-lg flex flex-col items-start justify-start pl-2 ">
                <h3 className="font-semibold text-xl">$600,000</h3>
                <h3 className="text-[10px]">Online/cash payment</h3>
              </button>
              <button className="h-12 w-44 border-[1px] border-black rounded-lg flex flex-col items-start justify-start pl-2 ">
                <h3 className="font-semibold text-xl">$800/ month</h3>
                <h3 className="text-[10px]">0% EMI for 6 Months</h3>
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h3 className="font-semibold ">
                Well structured 1567 Sq Ft Home is now offering To You Uttara
                For Sale
              </h3>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                expedita similique, facilis nihil ut placeat tempora distinctio
                a neque cum ad, eum illo quae rerum debitis quasi, fugit iure
                esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Enim aliquid quidem repellat facilis aspernatur amet
                reprehenderit suscipit tempora non voluptatibus quasi corrupti,
                voluptatem perferendis reiciendis voluptate quam ab quos eum!
              </p>
            </div>

            <div className="mt-5">
              <h3 className="font-bold text-2xl">Local information</h3>
              <div className=" flex gap-2 mt-4">
                <button className="h-8 w-28 rounded-lg border-[1px] border-black">
                  Map
                </button>
                <button className="h-8 w-28 rounded-lg border-none bg-black text-white">
                  Schools
                </button>
                <button className="h-8 w-28 rounded-lg border-[1px] border-black">
                  Crime
                </button>
                <button className="h-8 w-28 rounded-lg border-[1px] border-black">
                  Shop & eat
                </button>
              </div>
            </div>
            <div className="h-[15rem] mt-3">
              <iframe
                style={iframeStyle}
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Rubavu%20Gisenyi+(Bless%20Nests)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/"></a>
              </iframe>
            </div>
          </div>
          <div className="h-[30rem] w-1/3 bg-white  border-[1px] rounded-lg p-5 flex flex-col gap-5">
            <h3 className="font-semibold text-xl flex items-center justify-center">
              Request for visit
            </h3>
            <div className="flex items-center justify-center pl-2 border-[1.5px]  h-10 w-full rounded-lg">
              <AiOutlineUser className="h-8 w-8" />
              <input
                type="text"
                className="h-full w-full focus:outline-none"
                placeholder="Full Name"
              />
            </div>
            <div className="flex items-center justify-center pl-2 border-[1.5px]  h-10 w-full rounded-lg">
              <AiOutlineMail className="h-8 w-8" />
              <input
                type="text"
                className="h-full w-full focus:outline-none"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center justify-center pl-2 border-[1.5px]  h-10 w-full rounded-lg">
              <AiOutlinePhone className="h-8 w-8 " />
              <input
                type="text"
                className="h-full w-full focus:outline-none"
                placeholder="Phone number"
              />
            </div>
            <div className="flex items-center justify-center pl-2 border-[1.5px]  h-10 w-full rounded-lg">
              <CiCalendarDate className="h-8 w-8" />
              <input
                type="date"
                className="h-full w-full focus:outline-none"
                placeholder="Date"
              />
            </div>
            <textarea
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none"
              placeholder="Type your message..."
            ></textarea>
            <button className="h-20 w-full bg-black text-white rounded-lg">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
