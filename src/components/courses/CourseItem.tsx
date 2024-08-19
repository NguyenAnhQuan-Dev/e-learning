import Image from "next/image";
import React from "react";
import { EyeIcon, StartIcon } from "../icons";

type TProps = {
  urlImg: string;
  title: string;
  rating: string;
  view: string;
  price: string;
};

const CourseItem = (props: TProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer">
      <Image
        src={props.urlImg}
        height={300}
        width={400}
        loading="lazy"
        alt="course-image"
      />
      <div className="p-4">
        <p className=" font-bold text-xl">{props.title}</p>
        <div className="flex justify-between py-4 items-end">
          <div className="flex gap-4">
            <p className="flex gap-1 text-sm">
              <StartIcon className="size-5" />
              {props.rating}
            </p>
            <p className="flex gap-1 text-sm">
              <EyeIcon className="size-5" />
              {props.view}
            </p>
          </div>
          <p className="font-bold text-lg text-orange-600">{props.price}</p>
        </div>
        <button className="w-full h-10 bg-blue-600 rounded-full text-white text-lg font-semibold">
          See detail
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
