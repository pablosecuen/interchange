/* eslint-disable react/no-unescaped-entities */
import React from "react";
import career1 from "@/public/assets/svg/career1.png";
import career2 from "@/public/assets/svg/career2.png";
import career3 from "@/public/assets/svg/career3.png";
import pinkarrow from "@/public/assets/svg/pinkarrow.svg";
import greensparkle from "@/public/assets/svg/greensparkle.svg";
import Image from "next/image";
import Link from "next/link";

const Career = () => {
  return (
    <section className="max-w-7xl w-screen overflow-x-hidden min-h-[70vh] flex ">
      <div className="w-full md:w-1/2 order-1  flex flex-col  items-start p-10 gap-8 relative">
        <h3 className="text-4xl font-laila font-bold z-40">
          ¡Estamos para crear posibilidades y éxito en tu carrera!
        </h3>
        <p className="text-md text-gray-400">
          Muchas escuelas utilizan el término "excelencia" para destacar la ambición de la escuela
          de ayudar a todos a dar lo mejor de sí mismos.
        </p>
        <ul className="list-disc">
          <li className="pb-2">Estamos para crear posibilidades y éxito en tu carrera</li>
          <li className="pb-2">La educación consiste en crear líderes para el mañana</li>
          <li className="pb-2">La educación es la continuación de una orgullosa tradición</li>
        </ul>
        <Link href="nosotros">
          <button className="yellow-btn">Más información</button>
        </Link>
        <Image
          src={greensparkle}
          alt="greensparkle"
          width={0}
          height={0}
          className="absolute z-10  bottom-4 -right-20"
        />
        <Image
          src={greensparkle}
          alt="greensparkle"
          width={0}
          height={0}
          className="absolute z-10  bottom-24 md:left-0 -right-10 scale-90"
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
          className="absolute z-10  bottom-24 hidden  md:block "
        />
        <Image
          src={career1}
          alt="career1"
          width={0}
          height={0}
          className="absolute z-10  md:top-1/2 md:-translate-y-1/2 md:left-1/3 md:-translate-x-1/2 scale-75 brightness-110 "
        />
        <Image
          src={career2}
          alt="career1"
          width={0}
          height={0}
          className="absolute z-10 md:z-20 top-1/3 md:top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 scale-75 brightness-110"
        />
        <Image
          src={career3}
          alt="career1"
          width={0}
          height={0}
          className="absolute z-10  top-1/2 md:top-1/2 md:-translate-y-1/2 md:left-2/3 md:-translate-x-1/2 scale-75 brightness-110 "
        />
      </div>
    </section>
  );
};

export default Career;
