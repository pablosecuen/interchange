"use client";
import React, { useState } from "react";
import ImageCarousel from "../carousel";

import Image from "next/image";
import { Tour, toursData } from "@/app/utils";

const CardContainer = () => {
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleShowCarousel = (tour: Tour) => {
    setShowCarousel(true);
    setSelectedTour(tour);
  };

  const handleHideCarousel = () => {
    setShowCarousel(false);
    setSelectedTour(null);
  };

  return (
    <div className="h-full w-full flex flex-col p-20 gap-4">
      <span className="text-2xl pb-10">Los destinos visitados en Inglaterra</span>
      <div className="flex gap-8 mx-auto">
        {toursData.map((tour: any, index: number) => (
          <div
            key={index}
            className="w-72 h-72 rounded-2xl border relative cursor-pointer shadow-lg hover:translate-y-1 transition duration-300"
            onClick={() => handleShowCarousel(tour)}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center rounded-2xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button onClick={() => handleShowCarousel(tour)} className="text-white p-10">
                Mostrar Imagenes de {tour.title}
              </button>
            </div>
            {tour.images.length > 0 && (
              <Image
                src={tour.images[0].bgImage}
                alt={tour.title}
                className="w-full h-full object-cover rounded-2xl mb-4"
              />
            )}
            <span className="uppercase pl-2">{tour.title}</span>
          </div>
        ))}
      </div>
      {/* Renderizado condicional del carousel */}
      {showCarousel && selectedTour && (
        <div className="mt-8 w-full ">
          <ImageCarousel tour={selectedTour} onClose={handleHideCarousel} />
        </div>
      )}
    </div>
  );
};

export default CardContainer;
