import React from "react";
import Navbar from "../Home/Navbar";

const NoPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <img
          src="/images/Notfound.png"
          className="h-[20rem] w-20rem mt-28"
          alt=""
        />
        <button className="h-10 w-40 bg-black text-white rounded-lg mt-10">
          Go to Home
        </button>
      </div>
    </>
  );
};

export default NoPage;
