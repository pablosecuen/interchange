"use client";
import React, { useState } from "react";
import ImageCarousel from "../carousel";
import Image from "next/image";
import { Tour, toursData } from "@/app/utils";
import Logo from "@/app/components/logo";
import "./index.css";

const CardContainer = () => {
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardsPerPage = 4;

  const handleShowCarousel = (tour: Tour) => {
    setShowCarousel(true);
    setSelectedTour(tour);
  };

  const handleHideCarousel = () => {
    setShowCarousel(false);
    setSelectedTour(null);
  };
  const duplicatedToursData = [...toursData, ...toursData]; // Duplicar el array

  const nextCard = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > toursData.length - cardsPerPage ? 0 : newIndex;
    });
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const cardWrapperStyles = {
    transform: `translateX(-${currentIndex * (300 + 32)}px)`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="h-full w-full flex flex-col p-20 gap-4">
      <span className="text-2xl pb-10" id="destinos">
        Los destinos visitados en Inglaterra
      </span>
      <div className="card-container">
        <div className="card-wrapper-container flex gap-8" style={cardWrapperStyles}>
          {duplicatedToursData.map((tour: any, index: number) => (
            <div
              key={index}
              className="w-72 h-72 rounded-2xl  relative cursor-pointer shadow-lg hover:translate-y-1  hover:shadow-black/40 card-wrapper"
              onClick={() => handleShowCarousel(tour)}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <button onClick={() => handleShowCarousel(tour)} className="text-white p-10">
                  Mostrar Imagenes de <p className="font-bold"> {tour.title}</p>
                </button>{" "}
                <Logo size="lg" />
              </div>
              {tour.images.length > 0 && (
                <Image
                  src={tour.images[0].bgImage}
                  alt={tour.title}
                  className="w-full h-full object-cover rounded-2xl mb-4 relative"
                />
              )}
              <span className="uppercase pl-2 z-50  !text-black">{tour.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12 bg-transparent z-10 gap-2">
        <button
          onClick={prevCard}
          disabled={currentIndex === 0}
          className="yellow-btn relative !rounded-full w-8 h-8"
        >
          <p className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-2xl cursor-pointer">
            {"<"}
          </p>
        </button>
        <button
          onClick={nextCard}
          disabled={currentIndex === toursData.length - 1}
          className="yellow-btn relative !rounded-full w-8 h-8"
        >
          <p className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-2xl ">
            {">"}
          </p>
        </button>
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
