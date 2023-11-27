import Image from "next/image";
import React from "react";
import arrow2 from "@/public/assets/svg/arrow2.svg";
import banner1 from "@/public/assets/svg/banner1.png";

export const Banner = () => {
  return (
    <article className=" w-screen h-48 overflow-x- bg-gray-700 flex justify-center ">
      <div className="max-w-7xl w-full flex items-center ">
        <div className="flex justify-center items-center w-full h-full ">
          <h5 className="text-4xl w-2/3 text-white brightness-200  font-laila font-bold">
            Create a free account & register now
          </h5>
        </div>
        <div className="flex justify-center items-center  w-full h-full ">
          <div className="md:w-1/2  flex h-full justify-center items-center relative">
            <Image
              src={arrow2}
              alt="arrow2"
              width={0}
              height={0}
              className="absolute top-0 -left-24"
            />
            <button className="yellow-btn">Register now</button>
          </div>
          <div className="md:w-1/2 relative flex justify-center h-full">
            {" "}
            <Image
              src={banner1}
              alt="banner1 "
              width={0}
              height={0}
              className="absolute bottom-0 -right-32"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
