import React from "react";

const PolaroidContainer = () => {
  return (
    <div className="w-2/3 flex justify-center items-center">
      {/* card container*/}
      <div className="relative max-w-full w-full h-full   ">
        {/* card */}
        <div className="absolute top-1/2 bg-white shadow-lg shadow-black/20 -translate-y-1/2 left-[60%] translate-x-1/2 border w-52 h-60 flex flex-col items-center p-4 scale-75 z-20">
          <div className="h-4/5 w-44 border bg-stonehenge bg-cover bg-center"></div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 -translate-y-1/2 shadow-black/20 shadow-lg bg-white left-[30%] -translate-x-1/2 border w-52 h-60 flex flex-col items-center p-4 z-30">
          <div className="h-4/5 w-44 border bg-warwick bg-cover bg-center"></div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 -translate-y-1/2 shadow-lg shadow-black/20 left-1/2 bg-white -translate-x-1/2 border w-52 h-60 flex flex-col items-center p-4 scale-125 z-40">
          <div className="h-4/5 w-44 border bg-londoneye bg-cover bg-center"></div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 -translate-y-1/2 shadow-lg shadow-black/20 bg-white right-[30%] translate-x-1/2 border w-52 h-60 flex flex-col items-center p-4 z-30">
          <div className="h-4/5 w-44 border bg-oxford bg-cover bg-center"></div>
        </div>
        {/* card */}
        <div className="absolute top-1/2 bg-white shadow-lg shadow-black/20 -translate-y-1/2 right-[60%] -translate-x-1/2 border w-52 h-60 flex flex-col items-center p-4 scale-75 z-20">
          <div className="h-4/5 w-44 border bg-stonehenge bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
};

export default PolaroidContainer;
