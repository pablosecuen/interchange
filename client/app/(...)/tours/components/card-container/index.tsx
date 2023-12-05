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
  const duplicatedToursData = [...toursData, ...toursData, ...toursData];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => {
      const totalCards = duplicatedToursData.length;
      const newIndex = (prevIndex + 1) % totalCards;
      return newIndex;
    });
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => {
      const totalCards = duplicatedToursData.length;
      const newIndex = (prevIndex - 1 + totalCards) % totalCards;
      return newIndex;
    });
  };

  const cardWidth = 300; // Ancho de la tarjeta en píxeles
  const gapBetweenCards = 32; // Espacio entre las tarjetas en píxeles

  const cardWrapperStyles = {
    transform: `translateX(-${
      currentIndex *
      ((window.innerWidth >= 768 ? cardWidth : cardWidth / 2) +
        (window.innerWidth >= 768 ? gapBetweenCards : gapBetweenCards / 2))
    }px)`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="h-full w-full flex flex-col md:p-20 pt-28 gap-4 px-4 ">
      <span className="text-2xl pb-10" id="destinos">
        Los destinos visitados en Inglaterra
      </span>
      <div className="card-container">
        <div className="md:card-wrapper-container flex gap-8" style={cardWrapperStyles}>
          {duplicatedToursData.map((tour: any, index: number) => (
            <div
              key={index}
              className="md:w-72 md:h-72 w-36 h-36  rounded-2xl  relative cursor-pointer shadow-lg hover:translate-y-1  hover:shadow-black/40 md:card-wrapper"
              onClick={() => handleShowCarousel(tour)}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <button onClick={() => handleShowCarousel(tour)} className="text-white p-10">
                  Mostrar Imagenes de <p className="font-bold"> {tour.title}</p>
                </button>{" "}
                <div className="hidden md:block">
                  {" "}
                  <Logo size="lg" />
                </div>
              </div>
              {tour.images.length > 0 && (
                <Image
                  src={tour.images[0].bgImage}
                  alt={tour.title}
                  className="w-full h-full object-cover rounded-2xl mb-4 relative"
                />
              )}
              <span className="uppercase text-center z-50 mx-auto text-sm !text-black">
                {tour.title}
              </span>
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
          disabled={currentIndex === duplicatedToursData.length - 1}
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
