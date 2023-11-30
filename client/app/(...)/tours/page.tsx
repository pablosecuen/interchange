/* eslint-disable react/no-unescaped-entities */

import React from "react";
import PolaroidContainer from "./components/polaroid-container";
import CardContainer from "./components/card-container";

const tours = () => {
  return (
    <section className="min-h-[90vh] h-full w-full mt-20">
      <div className="max-w-7xl w-full flex justify-center h-[60vh]  mx-auto">
        {" "}
        <div className=" w-1/3  flex flex-col justify-center tracking-tight gap-2">
          {" "}
          <h3 className="text-4xl">
            Descrubre el mundo a{" "}
            <span className="text-custom-purple font-laila font-bold">traves del ingles</span>
          </h3>
          <p className="text-base">
            ¡Bienvenidos a la emocionante aventura de aprender inglés en el corazón de Inglaterra!
            En Interchange, creemos en no solo enseñar el idioma, sino también sumergir a nuestros
            estudiantes en una experiencia educativa única: ¡explora, aprende y crea recuerdos
            inolvidables con nosotros!
          </p>
        </div>
        <PolaroidContainer />
      </div>
      <div>
        {" "}
        <CardContainer />
      </div>

      <div className="h-full w-full flex flex-col p-20 gap-4">
        <span className="text-2xl">Informacion turistica de nuestro destino</span>
        <p className="w-1/2">
          Londres, la capital vibrante del Reino Unido, emerge como un mosaico dinámico de historia,
          cultura y modernidad. A lo largo del majestuoso río Támesis, esta ciudad cosmopolita se
          extiende, deslumbrando a sus visitantes con su rica herencia y su energía contemporánea.
          <br />
          El Palacio de Buckingham, residencia oficial de la monarquía británica, con su ceremonia
          de Cambio de Guardia, atrae a multitudes con su esplendor arquitectónico y su tradición
          real. A pocos pasos, el Big Ben, el reloj emblemático en el Palacio de Westminster, se
          yergue imponente, marcando el paso del tiempo desde su torre icónica. <br />
          Los históricos edificios de piedra, como la Torre de Londres, con sus leyendas y el puente
          de la Torre que se alza majestuosamente sobre el río, invitan a los turistas a adentrarse
          en sus intrigantes relatos del pasado. En contraste, el moderno London Eye ofrece vistas
          panorámicas de la ciudad desde las alturas, regalando una experiencia inolvidable.
          <br />
          Los parques verdes, como Hyde Park y Regent's Park, proporcionan un refugio sereno del
          bullicio urbano, mientras que los mercados bulliciosos como Camden Market y Borough Market
          cautivan los sentidos con sus aromas, colores y sabores eclécticos.
          <br />
          Los museos de renombre mundial, como el Museo Británico con sus tesoros históricos y la
          Galería Nacional con sus obras maestras artísticas, deleitan a los amantes del arte y la
          cultura con su inmensa colección. <br />
          El West End londinense, famoso por su teatro y entretenimiento, despliega una alfombra de
          espectáculos teatrales y musicales que encantan a los asistentes con su talento y
          creatividad. <br />
          En los bulliciosos distritos como Soho y Covent Garden, la vida nocturna cobra vida con
          bares, pubs y restaurantes, ofreciendo una amalgama de sabores internacionales y la
          oportunidad de sumergirse en la diversidad culinaria. <br />
          El transporte emblemático de la ciudad, el metro de Londres, con su intrincada red de
          líneas, lleva a los viajeros a través de esta metrópolis de manera eficiente, conectando
          puntos de interés en un laberinto subterráneo. <br />
          Londres, con su fusión única de lo antiguo y lo moderno, seduce y encanta a todos aquellos
          que la visitan, prometiendo una experiencia inolvidable en cada rincón de sus calles
          adoquinadas y bulliciosas avenidas.
        </p>
      </div>
    </section>
  );
};

export default tours;
