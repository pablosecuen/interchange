import React from "react";
import career1 from "@/public/assets/svg/career1.png";
import career2 from "@/public/assets/svg/career2.png";
import career3 from "@/public/assets/svg/career3.png";
import pinkarrow from "@/public/assets/svg/pinkarrow.svg";
import greensparkle from "@/public/assets/svg/greensparkle.svg";
import Image from "next/image";

const Career = () => {
  return (
    <section className="max-w-7xl w-screen min-h-[70vh] flex ">
      <div className="w-full md:w-1/2 order-1  flex flex-col  items-start p-10 gap-8 relative">
        <h3 className="text-4xl">We are to create possibility & success in your career!</h3>
        <p className="text-md text-gray-400">
          Many schools use the term “excellence” to highligth the school´s ambitions to help
          everyone achive their best
        </p>
        <ul className="list-disc">
          <li className="pb-2">We are to create possibility & success in your career</li>
          <li className="pb-2">Education is about creating leaders for tomorrow</li>
          <li className="pb-2">Educaction in continuing a proud tradition</li>
        </ul>
        <button className="yellow-btn">Read More</button>
        <Image
          src={greensparkle}
          alt="greensparkle"
          width={0}
          height={0}
          className="absolute z-10  bottom-1/4"
        />
        <Image
          src={greensparkle}
          alt="greensparkle"
          width={0}
          height={0}
          className="absolute z-10  bottom-24 left-0 scale-90"
        />
      </div>
      <div className="w-full md:w-1/2 order-2 relative ">
        <div className="w-5 h-5 rounded-full bg-custom-yellow absolute top-0 right-0"></div>
        <div className="w-4 h-4 rounded-full bg-custom-orange  absolute -top-10 right-10"></div>
        <div className="w-3 h-3 rounded-full bg-custom-purple  absolute -top-20 -right-10"></div>
        <Image
          src={pinkarrow}
          alt="pinkarrow"
          width={0}
          height={0}
          className="absolute z-10  bottom-1/4"
        />
        <Image
          src={career1}
          alt="career1"
          width={0}
          height={0}
          className="absolute z-10  top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 scale-75 brightness-110"
        />
        <Image
          src={career2}
          alt="career1"
          width={0}
          height={0}
          className="absolute z-20 top-1/3 -translate-y-1/2 left-1/2 -translate-x-32 scale-75 brightness-110"
        />
        <Image
          src={career3}
          alt="career1"
          width={0}
          height={0}
          className="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-32 scale-75 brightness-110"
        />
      </div>
    </section>
  );
};

export default Career;
