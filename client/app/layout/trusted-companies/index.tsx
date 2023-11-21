import Carousel from "@/app/components/carousel";
import React from "react";

const Trusted = () => {
  return (
    <section className="flex flex-col min-h-screen py-20">
      <h2 className="uppercase text-4xl tracking-widest text-center">trusted companies</h2>
      <div className="max-w-4xl  overflow-x-hidden h-auto my-10">
        {" "}
        <Carousel />
      </div>

      <div className="w-full md:w-1/2 order-1  flex justify-end items-center p-10 "></div>
      <div className="w-full md:w-1/2 order-2   relative"></div>
    </section>
  );
};

export default Trusted;
