import React from "react";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Modal from "react-modal";
import { IoCloseCircle } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { TbPasswordUser } from "react-icons/tb";
import { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
Modal.setAppElement("#root");

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state between true and false
  };

  return (
    <>
      <nav className="">
        {/* Mobile nav */}
        <div className="flex items-center justify-between ">
          <div className="text-orange-500 flex items-center justify-center ">
            <FaHome className="h-10 w-12" />
            BlessNests
          </div>
          <div>
            <CiMenuFries />
          </div>
        </div>
        {/* Desktop view */}
        <div className="hidden element md:flex gap-24 font-semibold  top-0 sticky bg-white h-[4rem] w-full">
          <div className="text-orange-500 flex items-center justify-center ">
            <FaHome className="h-10 w-12" />
            BlessNests
          </div>
          <div className=" hidden md:flex items-center justify-center ">
            <ul className="flex gap-7 items-center justify-center">
              <a className="flex" href="#">
                Home
              </a>
              <a className="flex" href="">
                Listing
              </a>
              <a href="">Agent</a>
              <a className="" href="">
                Property
              </a>
              <a className="" href="">
                Blog
              </a>
            </ul>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex items-center justify-center ">
              <CiSearch className="h-6 w-9" />
              <input
                className=" h-8 w-32 focus:outline  focus:border-red-300 rounded"
                type="text"
                placeholder="Search"
              />
            </div>
            <button
              className="flex items-center justify-center bg-gray-800 text-white w-28 h-8 border-none rounded-lg"
              onClick={openModal}
            >
              Log in
            </button>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              backgroundColor: "#fff",
              width: 400,
              height: 400,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          }}
        >
          <div className="h-full w-full p-4 flex flex-col gap-3 ">
            <div className=" flex gap-56">
              <h3 className="font-bold text-2xl">Log in</h3>
              <IoCloseCircle onClick={closeModal} className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-center pl-2 border-[1.5px]  h-10 w-full rounded-lg">
              <AiOutlineUser className="h-5 w-5" />
              <input
                type="text"
                className="h-full w-full focus:outline-none pl-2"
                placeholder="Full Name"
              />
            </div>
            <div className="flex items-center justify-center pl-2 border-[1.5px] h-10 w-full rounded-lg pr-2">
              <TbPasswordUser className="h-5 w-5" />{" "}
              {/* Assuming this is your custom password icon */}
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-full w-full focus:outline-none pl-2"
                placeholder="Password"
              />
              <button
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}{" "}
                {/* Toggle button with eye icons */}
              </button>
            </div>
            <div className="flex gap-20">
              <div className="flex ">
                <input
                  type="checkbox"
                  className="flex items-center"
                  name=""
                  id=""
                />
                <h3>Remember</h3>
              </div>
              <h3>Forgot Password</h3>
            </div>
            <button className="h-10 bg-black w-full  rounded-lg text-white">
              Log in
            </button>
            <button className="flex border-[1.5px] border-gray-500 h-10 w-full items-center justify-center gap-10 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2443"
                height="2500"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
                id="google"
                className="h-5 w-5"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Log in with Google
            </button>
            <h3 className="flex gap-2 text-gray-400">
              Do not have an account?
              <a href="#">
                <h3 className="text-black">Create One</h3>
              </a>
            </h3>
          </div>
        </Modal>
      </nav>
    </>
  );
};

export default Navbar;
