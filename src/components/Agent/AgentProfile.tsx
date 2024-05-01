import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import FeaturedCard from "../Home/FeaturedCard";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const AgentProfile = () => {
  const properties = [
    {
      id: 1,
      img: "NewYork1.jpg",
      location: "Remera, Kigali, Rwanda",
      bedrooms: 5,
      area: "1,032",
      price: "500,500",
    },
    {
      id: 2,
      img: "NewYork2.jpg",
      location: "Gishushu, Kigali, Rwanda",
      bedrooms: 3,
      area: "1,032",
      price: "500,500",
    },
    {
      id: 3,
      img: "NewYork3.jpg",
      location: "Gisenyi, Rubavu, Rwanda",
      bedrooms: 3,
      area: "1,032",
      price: "500,500",
    },
    {
      id: 4,
      img: "Kigali1.jpg",
      location: "Gisenyi, Rubavu, Rwanda",
      bedrooms: 3,
      area: "1,032",
      price: "500,500",
    },

    {
      id: 3,
      img: "NewYork3.jpg",
      location: "Kimironko, Kigali, Rwanda",
      bedrooms: 5,
      area: "1,032",
      price: "500,500",
    },
    {
      id: 4,
      img: "Kigali1.jpg",
      location: "Musanze, Rwanda",
      bedrooms: 6,
      area: "1,032",
      price: "500,500",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-orange-50">
        <div className="h-[17rem]">
          <div className="relative ">
            <img
              src="/images/Agentbg.jpeg"
              className="h-[10rem] w-full absolute inset-0"
              alt=""
            />
            <div className="ml-[100px] ">
              <div className="ml-[100px] h-[10rem] rounded-lg z-10 absolute inset-0 mt-[6rem] flex ">
                <img
                  className="h-full w-36 rounded-lg"
                  src="/images/Taylor.jpg"
                  alt=""
                />
                <div className=" mt-20 ml-5">
                  <h3 className="font-semibold text-lg">Taylor Smith</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-gray-900">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStarHalfStroke />
                    </div>
                    <h3>4.5 review</h3>
                  </div>
                </div>
                <div className="mt-20 ml-40 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FiPhone />
                    <h3>(123) 456 -7890</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiTwotoneMail />
                    <h3>taylor@gmail.com</h3>
                  </div>
                </div>
                <button className="bg-black text-white h-10 w-32 rounded-lg mt-20 ml-40">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[100px] flex gap-4 px-[100px] items-center justify-center">
          <button className="bg-black h-8 w-1/4 rounded-lg text-white">
            For rent
          </button>
          <button className="border-[1.5px] border-gray-400 text-black h-8 w-1/4 rounded-lg ">
            For sale
          </button>
          <button className="border-[1.5px] border-gray-400 text-black h-8 w-1/4 rounded-lg ">
            About
          </button>
          <button className="border-[1.5px] border-gray-400 text-black h-8 w-1/4 rounded-lg ">
            Review
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 px-[100px]">
          {properties.map((item) => (
            <div key={item.id} className="featured-slide">
              <FeaturedCard
                id={item.id}
                img={item.img}
                location={item.location}
                bedrooms={item.bedrooms}
                area={item.area}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <div className=" h-[30rem] border-[1.5px] border-gray-400 bg-white mt-5 rounded-lg mx-[100px] flex">
          <div className="h-full w-1/2 p-5 flex flex-col gap-10 ">
            <div className="flex gap-5">
              <img
                src="/images/Taylor.jpg"
                className="h-[10rem] rounded-lg"
                alt=""
              />
              <div>
                <div className=" flex flex-col gap-2">
                  <h3 className="font-semibold text-lg mt-2">Taylor Smith</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-gray-900">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStarHalfStroke />
                    </div>
                    <h3>4.5 review</h3>
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <div className=" flex items-center ">
                    <FiPhone />
                    <h3>(123) 456 -7890</h3>
                  </div>
                  <div className=" flex items-center">
                    <AiTwotoneMail />
                    <h3>taylor@gmail.com</h3>
                  </div>
                </div>
              </div>
            </div>
            <p className="  text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates perferendis voluptas cum reiciendis, ea distinctio
              dolorem et asperiores ab amet quasi similique quaerat cumque
              deleniti maxime minus nulla officiis vitae! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Nam similique aliquid
              explicabo, quisquam ipsam facere rerum excepturi, ea officia odit,
              soluta dolore adipisci molestias inventore quam ullam? Dolorem,
              nobis quas!
            </p>
            <button className="h-10 w-full bg-black text-white rounded-lg">
              Contact
            </button>
          </div>
          <div className="h-full w-1/2 p-5 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold text-lg">Experiences</h3>
              <h3 className="text-gray-400">15+ years experience</h3>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Property types</h3>
              <h3 className="text-gray-400">
                Private House, Villa, Townhouse, Apartment
              </h3>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Area</h3>
              <h3 className="font-semibold text-lg">Kigali, Rwanda</h3>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <h3 className="text-gray-400">Kg Street 1002</h3>
            </div>
            <div className="flex gap-40">
              <div>
                <h3 className="font-semibold text-lg">Licence No</h3>
                <h3 className="text-gray-400">BF-0535</h3>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Website</h3>
                <a href="" className="text-blue-400">
                  www.abc.com
                </a>
              </div>
            </div>
            <div>
              <h3>Get in touch </h3>
              <div className="text-orange-500 flex">
                <CiFacebook className="h-8 w-10" />
                <FaXTwitter className="h-8 w-10" />
                <CiInstagram className="h-8 w-10" />
                <CiYoutube className="h-8 w-10" />
                <CiLinkedin className="h-8 w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgentProfile;
