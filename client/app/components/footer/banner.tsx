import Image from "next/image";
import React from "react";
import teenphoto from "@/public/assets/svg/teenphoto.svg";
import arrow2 from "@/public/assets/svg/arrow2.svg";

export const Banner = () => {
  return (
    <article className=" w-screen h-48 bg-gray-700 flex justify-center ">
      <div className="max-w-7xl w-full flex items-center ">
        <div className="flex justify-center items-center w-full h-full ">
          <h5 className="text-4xl w-2/3 text-white brightness-200">
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
            <Image
              src={teenphoto}
              alt="teenphoto"
              width={0}
              height={0}
              className="absolute bottom-0 -right-20"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
