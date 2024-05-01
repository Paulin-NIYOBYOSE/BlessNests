import React from "react";
import { FaHome } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className=" element bg-orange-50">
        <div className=" flex gap-20 py-10">
          <div className="flex flex-col gap-7">
            <div className="text-orange-500 flex items-center justify-center ">
              <FaHome className="h-10 w-12" />
              BlessNests
            </div>
            <div>
              Gisenyi, Rubavu, Rwanda <br />
              Po Box 92 Rubavu
              <div className="mt-5">+(123) 456-7890</div>
            </div>
            <div className="text-orange-500 flex">
              <CiFacebook className="h-8 w-10" />
              <FaXTwitter className="h-8 w-10" />
              <CiInstagram className="h-8 w-10" />
              <CiYoutube className="h-8 w-10" />
              <CiLinkedin className="h-8 w-10" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" font-semibold">Features</h3>
            <ul className="flex flex-col gap-1">
              <a href="">Home v1</a>
              <a href="">Home v2</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Search</a>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" font-semibold">Information</h3>
            <ul className="flex flex-col gap-1">
              <a href="">Listing v1</a>
              <a href="">Listing v2</a>
              <a href="">Property Details</a>
              <a href="">Agent-list</a>
              <a href="">Agent Profile</a>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" font-semibold">Documentation</h3>
            <ul className="flex flex-col gap-1">
              <a href="">Blog</a>
              <a href="">FAQ</a>
              <a href="">Privacy Policy</a>
              <a href="">License</a>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className=" font-semibold">Others</h3>
            <ul className="flex flex-col gap-1">
              <a href="">Log in</a>
              <a href="">Enter OTP</a>
              <a href="">New Password</a>
              <a href="">Reset Password</a>
              <a href="">Create Account</a>
            </ul>
          </div>
        </div>
        <div className="pb-10">
          <h3>Copyright © BlessNests. All rights reserved.</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
