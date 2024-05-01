import React from "react";
import { FC } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

interface agentProps {
  id: number;
  img: string;
  name: string;
  review: string;
}
const AgentCard: FC<agentProps> = ({ id, img, name, review }) => {
  return (
    <div className="h-[20rem] w-[15rem] border-[1.5px] rounded-lg">
      <img
        className="w-full h-2/3 rounded-t-lg"
        src={`/images/${img}`}
        alt=""
      />
      <div className="h-1/3 w-full px-5 flex flex-col gap-2  border-gray-300 rounded-b-lg border-[1.5px] border-t-0">
        <h3 className="font-semibold text-md">{name}</h3>
        <div className="flex items-center  gap-5">
          <div className="flex text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </div>
          <h3>{review}</h3>
        </div>
        <button className="flex items-center justify-center h-8 w-full border-[1.5px] border-gray-400 rounded-lg">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default AgentCard;
