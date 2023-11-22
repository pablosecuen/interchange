import React from "react";
import "./perspective.css";
import Image from "next/image";
import arrow from "@/public/assets/svg/arrow.svg";
import scramble from "@/public/assets/svg/scramble.svg";
import child from "@/public/assets/svg/child.svg";
import ilustracion from "@/public/assets/svg/ilustracion.svg";
import ilustracion2 from "@/public/assets/svg/ilustracion2.svg";

const Landing = () => {
  return (
    <section className="overflow-x-hidden w-screen  min-h-[100vh] flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 order-1  flex justify-end items-center p-10 ">
        <div className="flex-col  justify-end flex max-w-[650px] relatve">
          {" "}
          <h1 className="text-5xl perspective-container font-bold leading-relaxed pb-2">
            <Image
              src={scramble}
              alt="scramble"
              width={150}
              height={0}
              className="absolute -top-8 right-20"
            />
            Education is about <br />{" "}
            <div className="flex ">
              creating{" "}
              <div className="text-3xl perspective-container h-auto w-32  flex justify-center items-center relative ">
                <div className="bg-violet-700 rounded-md perspective-element py-1 px-6 text-white  h-10 w-48 absolute"></div>
                <span className="w-auto absolute text-white ml-12">leaders</span>
              </div>
            </div>
            for tomorrow
          </h1>
          <h2 className=" text-gray-400 pb-5 text-md w-2/3">
            Many schools use the term “excellence” to highligth the school´s ambitions to help
            everyone achive their best
          </h2>
          <div className="flex gap-6 pb-4">
            <button type="button" className="yellow-btn">
              Leer mas
            </button>
            <button
              type="button"
              className="  focus:ring-4 focus:outline-none bg-whitew text-gray-500 focus:ring-yellow-400 font-light rounded-full text-sm px-4 py-1 text-center border-2 hover:bg-gray-200 "
            >
              Leer mas
            </button>
          </div>
        </div>
        <Image
          src={arrow}
          alt="arrow"
          width={100}
          height={0}
          className="absolute bottom-10 left-48"
        />
      </div>
      <div className="w-full md:w-1/2 order-2   relative">
        <Image
          src={child}
          alt="child image"
          width={550}
          height={0}
          className="absolute bottom-0 left-20 "
        />
        <Image
          src={ilustracion}
          alt="illustration"
          width={250}
          height={0}
          className="absolute top-20 left-1/2"
        />
        <Image
          src={ilustracion2}
          alt="illustration"
          width={50}
          height={0}
          className="absolute bottom-0 left-0"
        />
      </div>
    </section>
  );
};

export default Landing;
