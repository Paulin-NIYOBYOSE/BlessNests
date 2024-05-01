import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import FeaturedCard from "./FeaturedCard";

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

const Featured = () => {
  return (
    <>
      <div className="px-[100px] h-[50rem] bg-white pt-8">
        <div className="flex gap-[650px]">
          <h3 className="flex items-center justify-center text-3xl font-semibold">
            Feautured Properties
          </h3>
          <div className="flex text-orange-500  gap-2">
            <h3>Explore all </h3>
            <FaArrowRightLong className="flex" />
          </div>
        </div>
        <div className="mt-4 flex gap-[150px]">
          <a href="" className="font-bold text-lg">
            Resident Property
          </a>
          <a href="">Commercial Property</a>
          <a href="">Industrial property</a>
          <a href="">Agricultural property</a>
        </div>
        <div className="grid grid-cols-3 gap-4">
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
      </div>
    </>
  );
};

export default Featured;
