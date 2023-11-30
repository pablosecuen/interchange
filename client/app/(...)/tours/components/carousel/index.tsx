"use client";
import React, { useRef } from "react";
import "./image-carousel.css";
import Image from "next/image";
import { carouselObject } from "@/app/utils";

const ImageCarousel: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const activate = (e: React.MouseEvent<HTMLElement>) => {
    const items = Array.from(document.querySelectorAll(".item"));
    if (!sliderRef.current) return;

    const target = e.target as HTMLElement;

    if (target.matches(".next")) {
      sliderRef.current.append(items[0]);
    } else if (target.matches(".prev")) {
      sliderRef.current.prepend(items[items.length - 1]);
    }
  };

  return (
    <article className="">
      <main className=" min-h-[80vh] h-[80vh] w-full rounded-3xl overflow-hidden">
        <div className="separador "> </div>
        <div className="slider " ref={sliderRef}>
          {carouselObject.map((item) => (
            <div key={item.title} className={`item `}>
              <Image
                src={item.bgImage}
                alt={item.title}
                width={0}
                height={0}
                className="h-full w-full object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <nav className="nav">
          <span className="btn prev text-2xl font-bold" onClick={activate}>
            {"<"}
          </span>
          <span className="btn next text-2xl font-bold" onClick={activate}>
            {">"}
          </span>
        </nav>
      </main>
    </article>
  );
};

export default ImageCarousel;
