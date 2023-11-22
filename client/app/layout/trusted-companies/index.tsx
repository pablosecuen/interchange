import Carousel from "@/app/components/carousel";
import Image from "next/image";
import React from "react";
import sparks from "@/public/assets/svg/spark.svg";
import girlpic from "@/public/assets/svg/girlpic.svg";

const Trusted = () => {
  return (
    <section className="flex flex-col min-h-screen py-20">
      <h2 className="uppercase text-4xl tracking-widest text-center">trusted companies</h2>
      <div className="max-w-4xl  overflow-x-hidden mx-auto h-auto my-10">
        {" "}
        <Carousel />
      </div>

      <div className="flex">
        {" "}
        <div className="w-full md:w-1/2 order-1   relative">
          {" "}
          <Image
            src={girlpic}
            alt="girlpic"
            width={0}
            height={0}
            className="absolute  top-0"
          />{" "}
          <div className="bg-custom-green w-4 h-4 rounded-full absolute bottom-20 -left-32"></div>
          <div className="bg-custom-purple w-4 h-4 rounded-full absolute top-0"></div>
        </div>
        <div className="w-full md:w-1/2 order-2  flex flex-col justify-end p-10 gap-4">
          <span className="text-lg text-custom-orange">Learging methods</span>
          <h3 className="text-3xl tracking-wider relative flex">
            Access to learning anytime and everywhere
            <Image
              src={sparks}
              alt="sparks"
              width={0}
              height={0}
              className="absolute -right-28 -top-10"
            />
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a
            sagittis quis, lobortis eget quam. Nullam nec accumsan sapien.{" "}
          </p>
          <ul className="grid grid-cols-2 decoration-custom-orange list-disc text-custom-orange  px-4 relative">
            <li>World class</li>
            <li>Easy learning</li>
            <li>Flexible</li>
            <li>Affordable</li>
            <div className="bg-custom-orange w-4 h-4 rounded-full absolute top-0 right-0"></div>
          </ul>
          <button className="yellow-btn w-32">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
