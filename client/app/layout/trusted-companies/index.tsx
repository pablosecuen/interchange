import Carousel from "@/app/components/carousel";
import Image from "next/image";
import React from "react";
import sparks from "@/public/assets/svg/spark.svg";
import girlpic from "@/public/assets/svg/girlpic.webp";
import Link from "next/link";

const Trusted = () => {
  return (
    <section className="flex flex-col min-h-screen max-w-screen py-20">
      <h2 className="uppercase md:text-4xl text-2xl  tracking-widest text-center font-laila font-bold mx-2 sm:mx-0 ">
        EMPRESAS DE CONFIANZA
      </h2>
      <div className="max-w-4xl  overflow-x-hidden mx-auto md:h-auto h-auto my-10 ">
        {" "}
        <Carousel />
      </div>

      <div className="flex flex-col md:flex-row">
        {" "}
        <div className="w-full md:w-1/2 md:order-1 order-2  relative">
          {" "}
          <Image
            src={girlpic}
            alt="girlpic"
            width={0}
            height={0}
            className="md:absolute  top-0 w-96 md:w-auto mx-auto md:mx-0 "
          />{" "}
          <div className="bg-custom-green w-4 h-4 rounded-full absolute bottom-20 -left-32"></div>
          <div className="bg-custom-purple w-4 h-4 rounded-full absolute top-0"></div>
        </div>
        <div className="w-screen mx-auto  md:mx-0 md:w-1/2 md:order-2 order-1 flex flex-col justify-end p-6 gap-4">
          <span className="text-lg text-custom-orange">Métodos de aprendizaje</span>
          <h3 className="text-3xl  tracking-wider relative flex font-laila font-bold">
            Acceso al aprendizaje en cualquier momento y en cualquier lugar
            <Image
              src={sparks}
              alt="sparks"
              width={0}
              height={0}
              className="absolute md:-right-28 -right-4 md:-top-10 -top-28"
            />
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a
            sagittis quis, lobortis eget quam. Nullam nec accumsan sapien.{" "}
          </p>
          <ul className="grid grid-cols-2 decoration-custom-orange list-disc text-custom-orange pl-4 md:px-4 relative">
            <li>Clase mundial</li>
            <li>Fácil aprendizaje</li>
            <li>Flexible</li>
            <li>Asequible</li>
            <div className="bg-custom-orange w-4 h-4 rounded-full absolute md:top-0 bottom-0 right-0"></div>
          </ul>
          <Link href="/inscripcion">
            <button className="yellow-btn w-32 mt-4">Empezar</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
