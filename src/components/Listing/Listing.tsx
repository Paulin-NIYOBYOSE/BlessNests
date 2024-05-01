import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import NewCard from "../Home/NewCard";
import FeaturedCard from "../Home/FeaturedCard";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
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
    img: "NewYork3.jpg",
    location: "Gisenyi, Rubavu, Rwanda",
    bedrooms: 3,
    area: "1,032",
    price: "500,500",
  },
];

const Listing = () => {
  const iframeStyle = {
    width: "100%",
    height: "400px",
    border: "0",
    margin: "0",
  };
  return (
    <>
      <Navbar />
      <div className="px-[100px]">
        <div className="">
          <h3 className="font-semibold text-3xl py-">Find a property</h3>
          <div className="flex border- gap-3 rounded-md">
            <div className="flex h-10 border-[1px] w-72 rounded-md">
              <input
                type="text"
                placeholder="Enter your address"
                className="h-full w-full"
              />
              <IoIosSearch className="h-7 w-7 flex items-center justify-center mt-2" />
            </div>
            <button className="border-2 flex items-center justify-center w-20 rounded-md">
              Buy
              <RiArrowDropDownLine />
            </button>
            <button className="h-10 border-2 flex items-center justify-center rounded-md w-44">
              $15000 - $18000
              <RiArrowDropDownLine />
            </button>
            <button className="h-10 border-2 flex items-center justify-center rounded-md w-24">
              Bed - 3
              <RiArrowDropDownLine />
            </button>
            <button className="h-10 border-2 flex items-center justify-center rounded-md w-20 ">
              More +
              <RiArrowDropDownLine />
            </button>
            <button className="h-10 border-2 flex items-center justify-center bg-black text-white rounded-lg w-28">
              Search
              <IoIosSearch className="ml-2 mt-1 h-5 w-5" />
            </button>
          </div>
          <div></div>
        </div>
        <div className="h-[50rem] flex gap-2">
          <div className="h-full w-1/3 mt-5">
            <div style={{ width: "100%" }}>
              <iframe
                style={iframeStyle}
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Rubavu%20Gisenyi+(Bless%20Nests)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps systems</a>
              </iframe>
            </div>
          </div>
          <div className="h-full gap-3 grid grid-cols-2 ml-10">
            {properties.map((item) => (
              <div key={item.id} className="">
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
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Listing;
