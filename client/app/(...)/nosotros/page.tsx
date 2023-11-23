import Image from "next/image";
import React from "react";
import scramble from "@/public/assets/svg/scramble.svg";
import "./perspective.css";
const Nosotros = () => {
  return (
    <>
      <section className="w-full min-h-screen pt-20 relative">
        <div className="w-full h-[80vh] flex border">
          <div className="w-1/2 h-full flex flex-col items-end justify-center  order-1 border">
            {" "}
            <span className="font-bold text-3xl w-[650px] pb-10">NOSOTROS</span>
            <h3 className="text-3xl perspective-container max-w-[650px] font-bold leading-loose pb-2">
              {/*          <Image
              src={scramble}
              alt="scramble"
              width={150}
              height={0}
              className="absolute -top-8 right-20"
            /> */}
              “ Transformando Sueños en Palabras, Palabras en Poder: <br />{" "}
              <div className="flex ">
                creating{" "}
                <div className="text-3xl perspective-container h-auto w-32  flex justify-center items-center relative ml-4">
                  <div className="bg-violet-700 rounded-md perspective-element py-1 px-6 text-white  h-10 w-60 absolute"></div>
                  <span className="w-auto absolute text-white ml-20">Interchange</span>
                </div>
              </div>
              Donde el Ingles Abre Puertas”
            </h3>
            <div className="w-4 h-4 rounded-full bg-custom-yellow  absolute bottom-32 left-28"></div>
            <div className="w-3 h-3 rounded-full bg-custom-green  absolute bottom-48 left-12"></div>
          </div>
          <div className="w-1/2 h-screen order-2"></div>
        </div>
      </section>
      <section className="w-full min-h-screen pt-20 relative">
        <div className="w-1/2 min-h-screen order-1"></div>
        <div className="w-1/2 min-h-screen order-2"></div>
      </section>
    </>
  );
};

export default Nosotros;
