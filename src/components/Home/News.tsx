import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import NewsCard from "./NewCard";
import toast, { Toaster } from "react-hot-toast";

const news = [
  {
    id: 1,
    img: "House1.jpg",
    title: "9 Easy-To-Ambitious Projects for your home",
  },
  {
    id: 2,
    img: "House2.jpg",
    title: "9 Easy-To-Ambitious Projects to improve your home ",
  },
  {
    id: 3,
    img: "Site.jpg",
    title: "9 Easy-To-Ambitious Projects to improve your home ",
  },
];

const News = () => {
  const showToast = () => {
    toast.success("Subscribed successfully");
  };

  return (
    <div className="h-[40rem] bg-gray-950 px-[100px] flex flex-col pb-5">
      <div className="flex gap-[40rem]">
        <h3 className="text-white text-4xl font-semibold">News & Consult</h3>
        <h3 className="text-orange-500 flex items-center ">
          Explore all
          <FaLongArrowAltRight />
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {news.map((item) => (
          <div key={item.id} className="my-4">
            <NewsCard id={item.id} img={item.img} title={item.title} />
          </div>
        ))}
        {/* <div className="w-full bg-red-50 border-2 border-red-500"></div> */}
      </div>
      <div className="w-full mt-20 h-[200px] bg-gray-400  flex flex-col items-center justify-center gap-5 rounded-lg">
        <h3 className="font-semibold text-2xl ">For recent Updates,News.</h3>
        <p>
          We help businesses customize and scale up their ad production and
          delivery
        </p>
        <form action="">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-3 h-10 w-80 rounded focus:outline-none"
              required
            />
            <button
              type="submit"
              className="h-10 w-28 bg-black text-white rounded-lg"
              onClick={showToast}
            >
              <Toaster />
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default News;
