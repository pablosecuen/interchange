"use client";
import React, { useEffect, useRef, useState } from "react";
import ImageCarousel from "../carousel";
import Image from "next/image";
import { Tour, toursData } from "@/app/utils";
import Logo from "@/app/components/logo";

const CardContainer = () => {
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const handleShowCarousel = (tour: Tour) => {
    setShowCarousel(true);
    setSelectedTour(tour);
  };

  const handleHideCarousel = () => {
    setShowCarousel(false);
    setSelectedTour(null);
  };
  const duplicatedToursData = [...toursData, ...toursData, ...toursData];

  useEffect(() => {
    if (containerRef.current) {
      const firstItem = containerRef.current.querySelector(".product-item");
      if (firstItem) {
        setScrollAmount(firstItem.clientWidth + 8);
      }
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="h-auto w-full flex flex-col xl:p-20 py-32 gap-4 px-4 ">
      <span className="text-2xl pb-10" id="destinos">
        Los destinos visitados en Inglaterra
      </span>

      <div
        className="relative lg:h-96 lg:pl-48 flex gap-8 justify-center  h-52 overflow-x-hidden  lg:max-w-screen w-full mt-4 scroll-smooth"
        ref={containerRef}
      >
        {duplicatedToursData.map((tour: any, index: number) => (
          <div
            key={tour.title}
            className="lg:w-72 lg:h-72 w-36 h-36 b rounded-2xl shadow-lg hover:shadow-black/40 relative cursor-pointer transition duration-300 hover:translate-y-1   scroll-item"
            onClick={() => handleShowCarousel(tour)}
          >
            <div className="rounded-md lg:w-72 lg:h-72 w-36 h-36  lg:px-0  mb-2 product-item">
              <div className="absolute  top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <button
                  onClick={() => handleShowCarousel(tour)}
                  className="text-white p-10 brightness-200"
                >
                  Mostrar Imagenes de <p className="font-bold"> {tour.title}</p>
                </button>{" "}
                <div className="hidden lg:block">
                  {" "}
                  <Logo size="lg" />
                </div>
              </div>
              <Image
                src={tour.images[0].bgImage}
                alt={tour.title}
                className="w-full h-full shadow-lg lg:object-cover hover:shadow-black/40 rounded-2xl  mb-4 relative "
              />
            </div>
            <span className="uppercase text-center z-50 mx-auto text-xs lg:text-sm !text-black">
              {tour.title}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center  lg:mt-12 bg-transparent z-10 gap-2 -mb-10">
        <button onClick={scrollLeft} className="yellow-btn relative !rounded-full w-8 h-8">
          <p className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-2xl cursor-pointer">
            {"<"}
          </p>
        </button>
        <button onClick={scrollRight} className="yellow-btn relative !rounded-full w-8 h-8">
          <p className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-2xl ">
            {">"}
          </p>
        </button>
      </div>
      {/* Renderizado condicional del carousel */}
      {showCarousel && selectedTour && (
        <div className="lg:mt-8  w-full   ">
          <ImageCarousel tour={selectedTour} onClose={handleHideCarousel} />
        </div>
      )}
    </div>
  );
};

export default CardContainer;
