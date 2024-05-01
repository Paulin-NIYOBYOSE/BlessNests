import React from "react";
import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
interface NewsCardProps {
  id: number;
  img: string;
  title: string;
}
const NewCard: FC<NewsCardProps> = ({ id, img, title }) => {
  return (
    <>
      <div className="h-[15rem]">
        <div className="h-[280px]">
          <img
            className="rounded-lg"
            style={{ height: "80%", width: "100%" }}
            src={`/images/${img}`}
            alt=""
          />
          <h3 className="text-white">{title}</h3>
          <h3 className="text-orange-500">
            Read the article <FaLongArrowAltRight />
          </h3>
        </div>
      </div>
    </>
  );
};

export default NewCard;
