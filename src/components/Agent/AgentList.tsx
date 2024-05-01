import React from "react";
import Navbar from "../Home/Navbar";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import AgentCard from "./AgentCard";
import Footer from "../Home/Footer";
const AgentList = () => {
  const agents = [
    {
      id: 1,
      img: "Taylor.jpg",
      name: "Taylor Smith",
      review: "4.5 reviews",
    },
    {
      id: 2,
      img: "Agent1.jpeg",
      name: "John Abraham",
      review: "4.5 reviews",
    },
    {
      id: 3,
      img: "Agent2.jpeg",
      name: "John Smith",
      review: "4.5 reviews",
    },
    {
      id: 4,
      img: "Agent1.jpeg",
      name: "John Abraham",
      review: "4.5 reviews",
    },
    {
      id: 5,
      img: "Taylor.jpg",
      name: "Taylor Smith",
      review: "4.5 reviews",
    },
    {
      id: 6,
      img: "Agent2.jpeg",
      name: "John Smith",
      review: "4.5 reviews",
    },
    {
      id: 7,
      img: "Taylor.jpg",
      name: "Taylor Smith",
      review: "4.5 reviews",
    },
    {
      id: 8,
      img: "Taylor.jpg",
      name: "Taylor Smith",
      review: "4.5 reviews",
    },
    {
      id: 9,
      img: "Taylor.jpg",
      name: "Taylor Smith",
      review: "4.5 reviews",
    },
    {
      id: 1,
      img: "Taylor.jpg",
      name: "Taylor Smith",
      review: "4.5 reviews",
    },
    {
      id: 2,
      img: "Agent1.jpeg",
      name: "John Abraham",
      review: "4.5 reviews",
    },
    {
      id: 3,
      img: "Agent2.jpeg",
      name: "John Smith",
      review: "4.5 reviews",
    },
    {
      id: 4,
      img: "Agent1.jpeg",
      name: "John Abraham",
      review: "4.5 reviews",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="px-[100px]">
        <h3 className="text-2xl font-semibold pt-10 pb-5">
          Some Nearby Good Agents
        </h3>
        <div className="flex gap-3">
          <div className="h-10 w-[45rem] rounded-md border-[1.5px] border-gray-400 flex items-center justify-center">
            <input
              type="text"
              className="h-full w-full focus:outline-none pl-3"
              placeholder="Search address"
            />
            <IoIosSearch className="h-44 w-5" />
          </div>
          <button className="h-10 w-28   border-[1.5px] border-gray-400 flex items-center justify-center rounded-lg">
            Review
            <RiArrowDropDownLine className="h-7 w-10" />
          </button>
          <button className="flex h-10 w-32 border-none bg-black rounded-lg text-white  items-center justify-center gap-1 text-lg">
            Search
            <IoIosSearch className="h-44 w-5 mt-1" />
          </button>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-2 mt-5">
            {agents.map((item) => (
              <div key={item.id}>
                <AgentCard
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  review={item.review}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgentList;
