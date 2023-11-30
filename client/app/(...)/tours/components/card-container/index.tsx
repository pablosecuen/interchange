"use client";
import React, { useState } from "react";
import ImageCarousel from "../carousel";

const CardContainer = () => {
  const [showCarousel, setShowCarousel] = useState(true);

  const handleShowCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <div className="h-full w-full flex flex-col p-20 gap-4">
      <span className="text-2xl pb-10">Los destinos visitados en Inglaterra</span>
      <div className="flex gap-8 mx-auto">
        {/* Botones para mostrar el carousel */}
        <div className="w-64 h-96 rounded-2xl border flex justify-center items-center">
          <button onClick={handleShowCarousel}>Mostrar Carousel 1</button>
        </div>
        <div className="w-64 h-96 rounded-2xl border flex justify-center items-center">
          <button onClick={handleShowCarousel}>Mostrar Carousel 2</button>
        </div>
        <div className="w-64 h-96 rounded-2xl border flex justify-center items-center">
          <button onClick={handleShowCarousel}>Mostrar Carousel 3</button>
        </div>
        <div className="w-64 h-96 rounded-2xl border flex justify-center items-center">
          <button onClick={handleShowCarousel}>Mostrar Carousel 4</button>
        </div>
      </div>
      {/* Renderizado condicional del carousel */}
      {showCarousel && <ImageCarousel />}
    </div>
  );
};

export default CardContainer;
