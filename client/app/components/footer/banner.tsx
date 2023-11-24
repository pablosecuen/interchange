"use client";
import Image from "next/image";
import React from "react";
import teenphoto from "@/public/assets/svg/teenphoto.svg";
import arrow2 from "@/public/assets/svg/arrow2.svg";
import bannergroup from "@/public/assets/svg/bannergroup.png";
import poliform from "@/public/assets/svg/poliform.png";

export const Banner = () => {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/nosotros";
  const imageHtml =
    currentPath === "/nosotros" ? (
      <div className="relative w-64">
        <Image
          src={bannergroup}
          alt="teenphoto"
          width={0}
          height={0}
          className="absolute bottom-0 -right-20 z-10 "
        />
        <Image
          src={poliform}
          alt="poliform"
          width={0}
          height={0}
          className="absolute bottom-0 -right-20 scale-125 -translate-y-[12.5%]"
        />
      </div>
    ) : (
      <Image
        src={teenphoto}
        alt="teenphoto"
        width={0}
        height={0}
        className="absolute bottom-0 -right-20"
      />
    );
  return (
    <article className=" w-screen h-48  bg-gray-700 flex justify-center ">
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
          <div className="md:w-1/2 relative flex justify-center h-full">{imageHtml}</div>
        </div>
      </div>
    </article>
  );
};
