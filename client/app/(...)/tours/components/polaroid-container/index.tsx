import React from "react";
import tape from "@/public/assets/svg/tape.svg";
import tape1 from "@/public/assets/svg/tape1.svg";
import tape2 from "@/public/assets/svg/tape2.svg";
import clip from "@/public/assets/svg/clip.svg";
import Image from "next/image";

const PolaroidContainer = () => {
  return (
    <div className="lg:w-2/3 w-full  lg:h-full flex justify-center items-center scale-50 md:scale-75 xl:scale-100 h-96  mt-36 lg:mt-0">
      {/* card container*/}
      <div className="relative max-w-full w-full h-full   ">
        {/* card */}
        <div className="absolute top-1/2 bg-white shadow-lg shadow-black/20 -translate-y-1/2 lg:left-[60%] left-[50%] translate-x-1/2 border w-64 h-80 flex flex-col items-center p-4 scale-75 z-20">
          <div className="h-4/5 w-11/12 border bg-stonehenge bg-cover bg-center relative"> </div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 -translate-y-1/2 shadow-black/20 shadow-lg bg-white left-[15%] lg:left-[25%] -rotate-12 lg:rotate-0 -translate-x-1/2 border w-64 h-80 flex flex-col items-center p-4 z-30">
          <div className="h-4/5 w-11/12 border bg-warwick bg-cover bg-center relative">
            {" "}
            <Image
              src={tape2}
              alt="tape"
              className="absolute -top-12 right-1/2 translate-x-1/2 w-36"
              width={0}
              height={0}
            />
          </div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 -translate-y-1/2 shadow-lg shadow-black/20 left-1/2 bg-white -translate-x-1/2 border w-64 h-80 flex flex-col items-center p-4 scale-125 z-40">
          <div className="h-4/5 w-11/12 border bg-londoneye bg-cover bg-center relative">
            <Image
              src={tape}
              alt="tape"
              className="absolute -top-16 right-1/2 translate-x-1/2"
              width={0}
              height={0}
            />
          </div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 -translate-y-1/2 shadow-lg shadow-black/20 bg-white lg:right-[25%] right-[15%] rotate-12 lg:rotate-0 translate-x-1/2 border w-64 h-80 flex flex-col items-center p-4 z-30">
          <div className="h-4/5 w-11/12 border bg-oxford bg-cover bg-center relative">
            <Image
              src={clip}
              alt="clip"
              className="absolute -top-10 right-1/4 translate-x-1/2 "
              width={0}
              height={0}
            />
          </div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 bg-white shadow-lg shadow-black/20 -translate-y-1/2 lg:right-[60%] right-[50%] -translate-x-1/2 border w-64 h-80 flex flex-col items-center p-4 scale-75 z-20">
          <div className="h-4/5 w-11/12 border bg-stonehenge bg-cover bg-center relative">
            {" "}
            <Image
              src={tape1}
              alt="tape"
              className="absolute -top-16 right-1/2 -translate-x-1/2"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolaroidContainer;
