import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineSelector } from "react-icons/hi";
import { GiSpookyHouse } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
// import Featured from "./Featured";
import { CiCircleCheck } from "react-icons/ci";
import Statistics from "./Statistics";
import AboutUs from "../About/AboutUs";
import News from "./News";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Featured from "./Featured";

// import Review from "./Review";

const Home = () => {
  return (
    <>
      {/* <AboutUs /> */}
      {/* <Featured /> */}
      <Navbar />
      <div className="">
        <section className="h-96 w-full flex md:px-[100px] pt-7 gap-3 bg-orange-50">
          <div className="w-1/2 h-full ">
            <h3 className="text-4xl font-bold">
              Find a perfect property <br />
              Where you'll love to live
            </h3>

            <h3 className="mt-5">
              We help businesses customize, automate and scale up their ad
              production and delivery
            </h3>
            <div className="bg-white  rounded-lg h-[350px] w-full flex flex-col gap-7 mt-4">
              <div className="w-full h-1/6 flex gap-7 items-center justify-center mt-4">
                <button className="h-10 w-32 bg-black rounded-lg text-white">
                  Buy
                </button>
                <button className="h-10 w-32 bg-gray-200 rounded-lg">
                  Sell
                </button>
                <button className="h-10 w-32 bg-gray-200 rounded-lg">
                  Rent
                </button>
              </div>
              <div className="flex flex-col px-5 gap-5">
                <div className="w-full h-10 border-[1px] rounded-lg px-5 flex items-center justify-center font-semibold">
                  <input
                    className="h-full w-full"
                    placeholder="City/Street"
                    type="text"
                  />
                  <IoLocationOutline />
                </div>
                <div className="w-full h-10 border-[1px] rounded-lg px-5 flex items-center justify-center font-semibold">
                  <input
                    className="h-full w-full"
                    placeholder="Property Type"
                    type="text"
                  />
                  <HiOutlineSelector />
                </div>
                <div className="w-full h-10 border-[1px] rounded-lg px-5 flex items-center justify-center font-semibold">
                  <input
                    className="h-full w-full"
                    placeholder="Price range"
                    type="text"
                  />
                  <HiOutlineSelector />
                </div>
                <button className="w-full h-10 border-[1px] rounded-lg bg-black text-white ">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full ">
            <img
              src="/images/OrangeHouse.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>
        </section>

        <section className="bg-white">
          <div className=" flex px-[100px] w-full h-[25rem] py-5 gap-5">
            <div className="h-full w-1/2 flex flex-col rounded-lg bg-orange-100 gap-10 p-10">
              <h3 className="text-4xl font-semibold">
                Simple & easy way to find your dream apartment
              </h3>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis nihil deserunt nulla, ad eligendi quam delectus sed.
              </h3>
              <button className="h-10 w-28 rounded-lg bg-black text-white">
                Get started
              </button>
            </div>
            <div className="h-full w-1/2 flex flex-col gap-3">
              <div className=" w-full h-1/2 flex gap-5">
                <div className="bg-pink-100 rounded-lg  h-full w-1/2 p-7 flex flex-col gap-3">
                  <IoMdSearch className="h-8 w-8 text-orange-500" />
                  <h3 className=" text-lg font-bold">
                    Search <br /> your location{" "}
                  </h3>
                </div>
                <div className="bg-pink-100 rounded-lg  h-full w-1/2 p-7 flex flex-col gap-3">
                  <FaRegEye className="h-8 w-8 text-orange-500" />
                  <h3 className=" text-lg font-bold">
                    Visit <br /> Appointment{" "}
                  </h3>
                </div>
              </div>
              <div className=" w-full h-1/2 flex gap-5">
                <div className="bg-pink-100 rounded-lg  h-full w-1/2 p-7 flex flex-col gap-3">
                  <GiSpookyHouse className="h-8 w-8 text-orange-500" />
                  <h3 className=" text-lg font-bold">
                    Get
                    <br /> your dream house{" "}
                  </h3>
                </div>
                <div className="bg-pink-100 rounded-lg  h-full w-1/2 p-7 flex flex-col gap-3">
                  <ImHappy2 className="h-8 w-8 text-orange-500" />
                  <h3 className=" text-lg font-bold">
                    Enjoy <br /> your apartment{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Statistics /> */}

        <section>{/* <Featured /> */}</section>

        <section className="h-[30rem] bg-orange-50 px-[100px] flex gap-2 p-7">
          <div className="h-full w-1/2 flex flex-col rounded-lg  gap-10 pt-10 p-10">
            <h3 className="text-4xl font-semibold">
              Simple & easy way to find your dream apartment
            </h3>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              nihil deserunt nulla, ad eligendi quam delectus sed.
            </h3>
            <button className="h-10 w-28 rounded-lg bg-black text-white">
              Get started
            </button>
          </div>
          <div className="h-full w-1/2 flex gap-3">
            <div className="w-1/2 h-full flex flex-col gap-2">
              <img
                className="w-full h-3/5 rounded-lg"
                src="/images/House1.jpg"
                alt=""
              />
              <img
                className="w-full h-2/5 rounded-lg"
                src="/images/Key.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 h-full  flex flex-col gap-2">
              <img
                className="w-full h-2/5 rounded-lg"
                src="/images/Sign.jpg"
                alt=""
              />
              <img
                className="w-full h-3/5 rounded-lg"
                src="/images/House2.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="px-[100px] h-[30rem] flex gap-10">
          <div className="h-full w-1/2">
            <img className="h-[25rem]" src="/images/OrangeHouse.jpg" alt="" />
          </div>
          <div className="h-full w-1/2 p-10 flex flex-col gap-5">
            <h3 className="font-semibold text-4xl ">
              Best rated host on popular rental sites
            </h3>
            <p className=" text-md font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              voluptatibus alias expedita iure minus. fugit cupiditate unde
              esse, vitae modi ipsa vero dolores.
            </p>
            <div>
              <div className="flex font-semibold">
                <CiCircleCheck className="mt-1" />
                <h3>Find excellent deals</h3>
              </div>
              <div className="flex font-semibold">
                <CiCircleCheck className="mt-1" />
                <h3> Find excellent deals</h3>
              </div>
              <div className="flex font-semibold">
                <CiCircleCheck className="mt-1 " />
                <h3> Find excellent deals</h3>
              </div>
            </div>
            <button className="h-10 w-32 bg-black text-white rounded-lg">
              Learn more
            </button>
          </div>
        </section>

        <section>{/* <Review /> */}</section>
      </div>
      {/* <News /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
