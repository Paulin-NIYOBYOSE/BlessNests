import React from "react";
import { FC } from "react";

interface blogProps {
  id: number;
  img: string;
  category: string;
  title: string;
  date: string;
}

const BlogCard: FC<blogProps> = ({ id, img, category, title, date }) => {
  return (
    <>
      <div className=" h-[22rem] w-[17rem] border-[1.5px] rounded-lg border-gray-400">
        <img className="h-2/3 rounded-t-lg" src={`/images/${img}`} />
        <div className="h-1/3 mt-2 ml-2">
          <button className="h-7 w-24 border-[1px] border-gray-400 rounded-md">
            {category}
          </button>
          <h3 className="text-xl font-semibold">{title}</h3>
          <h3 className="text-gray-400  ">{date}</h3>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
