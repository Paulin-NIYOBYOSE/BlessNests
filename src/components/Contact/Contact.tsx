import React from "react";
import Navbar from "../Home/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Footer from "../Home/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="px-[100px] bg-orange-50 flex flex-col gap-5">
        <h3 className="font-bold text-4xl flex justify-center">Get in touch</h3>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
          rem? Commodi nisi earum magnam. Harum, hic? Voluptates saepe commodi
          temporibus? Rerum rem nemo explicabo itaque! Unde distinctio nulla
          voluptatem cumque.
        </p>
        <div className="h-[30rem] bg-white flex p-5">
          <div className="h-full w-1/2 bg-white  border-r-[1.5px] border-r-gray-300   flex flex-col gap-5 pr-5">
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
            <button className="h-10 w-full bg-black text-white rounded-lg">
              Send Request
            </button>
          </div>

          <div className=" p-10">
            <h3 className="font-bold text-xl">Office address</h3>
            <h3 className="text-gray-400">Kigali, Gishushu, Rwanda</h3>
            <h3 className="text-gray-400">KG 100</h3>
            <div className="text-gray-400 flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-1 ">
                <FiPhone className="mt-2" />
                <h3>(123) 456 -7890</h3>
              </div>
              <div className="flex items-center gap-1">
                <AiTwotoneMail className="mt-1" />
                <h3>taylor@gmail.com</h3>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <h3 className="font-bold text-xl flex justify-center">
                Get in touch
              </h3>
              <div className="text-gray-500 flex">
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

export default Contact;
