"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./image-carousel.css";
import Image from "next/image";
import { Tour } from "@/app/utils";

interface ImageCarouselProps {
  tour: Tour;
  onClose: () => void;
}
const ImageCarousel: React.FC<ImageCarouselProps> = ({ tour, onClose }) => {
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
    <AnimatePresence>
      <motion.article
        className="mt-20"
        initial={{ opacity: 0, height: 1 }}
        animate={{ opacity: 1, height: "100%" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 1 }}
      >
        <main className=" min-h-[70vh]  w-full rounded-3xl overflow-hidden relative">
          <button
            onClick={onClose}
            className="rounded-full yellow-btn my-4 absolute z-30 top-2 right-2"
          >
            Cerrar Carousel
          </button>
          <div className="separador "> </div>
          <div className="slider " ref={sliderRef}>
            {tour.images.map((item: any) => (
              <div key={item.title} className={`item `}>
                <Image
                  src={item.bgImage}
                  alt={item.title}
                  width={0}
                  height={0}
                  className="h-full w-full object-cover rounded-3xl"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <nav className="nav ">
            <span className="btn prev text-2xl font-bold" onClick={activate}>
              {"<"}
            </span>
            <span className="btn next text-2xl font-bold" onClick={activate}>
              {">"}
            </span>
          </nav>
        </main>
        <article className="flex flex-col gap-8 pt-8 h-auto">
          <h4 className="text-2xl md:text-4xl  uppercase tracking-widest font-bold">
            {tour.title}
          </h4>
          <span className="text-xl md:text-2xl uppercase tracking-wider font-bold">
            Descripción Turística:
          </span>
          <p className="md:text-lg text-md "> {tour.description}</p>
        </article>
      </motion.article>
    </AnimatePresence>
  );
};

export default ImageCarousel;
