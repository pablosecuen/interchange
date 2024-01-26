/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./perspective.css";
import Image from "next/image";
import arrow from "@/public/assets/svg/arrow.svg";
import scramble from "@/public/assets/svg/scramble.svg";
import child from "@/public/assets/svg/child.webp";
import ilustracion from "@/public/assets/svg/ilustracion.svg";
import ilustracion2 from "@/public/assets/svg/Ilustracion2.svg";

const Landing = () => {
  return (
    <section className="overflow-x-hidden w-screen  min-h-[100vh] h-full flex flex-col md:flex-row  mt-20 md:mt-0 z-40">
      <div className="w-full md:w-1/2 md:order-1  md:flex md:justify-end md:items-center md:pl-10  ">
        <div className="flex-col  justify-end flex max-w-[550px] relatve lg:gap-4">
          {" "}
          <h1 className="md:text-5xl text-4xl perspective-container font-bold leading-relaxed pb-2 font-laila mx-auto md:mx-0 ">
            <Image
              src={scramble}
              alt="scramble"
              width={150}
              height={0}
              className="absolute md:-top-8 -top-12 right-2 md:right-10 hidden md:block"
            />
            Educación es <br />{" "}
            <div className="flex font-laila">
              crear los{" "}
              <div className="md:text-3xl perspective-container h-auto w-32 -ml-4 md:-ml-0  flex justify-center items-center relative ">
                <div className="bg-violet-700 rounded-md perspective-element py-1 md:px-6 text-white  h-10 md:w-48 w-44 absolute"></div>
                <span className="w-auto absolute text-white md:ml-12 ml-10">lideres</span>
              </div>
            </div>
            del mañana
          </h1>
          <h2 className=" text-gray-400 pb-5 text-md  md:w-2/3 p-6 md:p-0 md:mx-0">
            Muchas escuelas utilizan el término "excelencia" para resaltar las ambiciones de la
            escuela de ayudar a todos a lograr lo mejor de sí mismos. a todos a dar lo mejor de sí
            mismos.
          </h2>
          <div className="flex gap-6 pb-4 mx-auto md:mx-0">
            <button type="button" className="yellow-btn lg:mt-4">
              Leer mas
            </button>
          </div>
        </div>
        <Image
          src={arrow}
          alt="arrow"
          width={100}
          height={0}
          className="absolute bottom-10 left-48 hidden lg:block"
        />
      </div>
      <div className="w-full md:w-1/2 md:order-2 h-full md:h-auto relative ">
        <Image
          src={child}
          alt="child image"
          width={550}
          height={0}
          className="md:absolute bottom-0 md:left-20 "
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
