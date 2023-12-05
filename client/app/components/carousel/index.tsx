import React from "react";
import { librerias } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  if (!librerias?.length) return null;
  const libreriasArr = [
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
    ...librerias,
  ];

  return (
    <article className=" w-screen overflow-x-hidden flex items-center pb-6 pt-1 z-40">
      <ul className="flex animate-carousel md:gap-20 gap-8 ">
        {libreriasArr.map((libreria, i) => (
          <li
            key={i}
            className="relative  aspect-square transform transition-transform hover:scale-105 h-auto w-24  flex-none md:w-24"
          >
            <div className="w-full h-full relative hover:cursor-pointer" title={libreria.title}>
              <Link href={libreria.url}>
                <Image src={libreria.img} alt={libreria.title} layout="fill" objectFit="contain" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Carousel;
