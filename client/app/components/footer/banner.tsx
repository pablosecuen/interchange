import Image from "next/image";
import React from "react";
import arrow2 from "@/public/assets/svg/arrow2.svg";
import banner1 from "@/public/assets/svg/banner1.png";
import Link from "next/link";

export const Banner = () => {
  return (
    <article className=" w-screen h-48 overflow-x- bg-gray-700 flex justify-center relative ">
      <div className="max-w-7xl w-full flex items-center ">
        <div className="flex justify-center items-center w-full h-full ">
          <h5 className="md:text-4xl text-2xl w-2/3 text-white brightness-200  font-laila font-bold">
            Cree una cuenta gratuita y regístrese ahora
          </h5>
        </div>
        <div className="flex justify-center items-center  w-full h-full ">
          <div className="md:w-1/2  flex h-full justify-center items-center relative">
            <Image
              src={arrow2}
              alt="arrow2"
              width={0}
              height={0}
              className="absolute top-0 md:top-1/4 lg:top-1/4 xl:top-0 -left-24 md:w-24 xl:w-auto"
            />
            <Link href="/inscripcion">
              <button className="yellow-btn ">Registro</button>
            </Link>
          </div>{" "}
          <Image
            src={banner1}
            alt="banner1 "
            width={0}
            height={0}
            className="absolute bottom-0 w-32 md:w-36 -right-6 xs:right-0 xl:w-96"
          />
        </div>
      </div>
    </article>
  );
};
