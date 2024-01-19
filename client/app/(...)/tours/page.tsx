/* eslint-disable react/no-unescaped-entities */

import React from "react";
import PolaroidContainer from "./components/polaroid-container";
import CardContainer from "./components/card-container";
import envelope from "@/public/assets/svg/envelope.svg";
import pencil from "@/public/assets/svg/pencil.svg";
import program from "@/public/assets/svg/programming.svg";
import Image from "next/image";
import Beneficios from "./components/beneficios";

const tours = () => {
  return (
    <section className="min-h-[90vh] h-full w-full mt-28 lg:mt-20 overflow-x-hidden ">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-center h-[60vh]  mx-auto relative px-4">
        <Image src={envelope} alt="envelope" width={0} height={0} className="-right-32 absolute" />
        <Image
          src={pencil}
          alt="pencil"
          width={0}
          height={0}
          className="-right-48 top-20 absolute"
        />
        <Image
          src={program}
          alt="program"
          width={0}
          height={0}
          className="-right-20 top-20 absolute"
        />
        <div className=" lg:w-1/3 lg:mr-10 flex flex-col justify-center tracking-tight gap-2">
          {" "}
          <h3 className="text-4xl">
            Descubre el mundo a{" "}
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
        <div className="w-6 h-6 bg-custom-yellow absolute -left-12 bottom-32 rounded-full"></div>
        <div className="w-4 h-4 bg-custom-purple absolute -left-24 bottom-10 rounded-full"></div>
        <div className="w-6 h-6 bg-custom-green absolute -left-52 bottom-32 rounded-full"></div>
      </div>
      <div>
        {" "}
        <CardContainer />
      </div>

      <div className="h-full w-full flex flex-col lg:p-20 px-4 gap-4">
        <span className="text-2xl" id="informacion">
          Informacion turistica de nuestro destino
        </span>
        <p className="lg:w-1/2">
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
      <Beneficios />
    </section>
  );
};

export default tours;
