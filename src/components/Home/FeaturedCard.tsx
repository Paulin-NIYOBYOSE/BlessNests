import React from "react";
import { FC } from "react";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineBedroomChild } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

interface FeaturedCardProps {
  id: number;
  img: string;
  location: string;
  bedrooms: number;
  area: string;
  price: string;
}
const FeaturedCard: FC<FeaturedCardProps> = ({
  id,
  img,
  location,
  bedrooms,
  area,
  price,
}) => {
  return (
    <>
      <div className="featured-card h-[300px] w-[250px] mt-5 border-[1.5px] rounded-lg">
        <img className="w-full h-1/2" src={`/images/${img}`} alt="" />
        <div className="flex flex-col gap-2 px-2">
          <div className="flex">
            <MdLocationOn className="mt-1" />
            <h3>{location}</h3>
          </div>
          <div className="flex ">
            <div className="flex gap-1">
              <MdOutlineBedroomChild className="mt-1" />
              {bedrooms}BedRooms
            </div>
            <div className="ml-10">{area} sqft</div>
          </div>
          <div className=" flex text-[#ffb21d]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className="flex gap-2">
            <button className="w-28 h-9 rounded-lg bg-black text-white">
              View Details
            </button>
            <h3 className="font-semibold text-2xl">${price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
