import Image from "next/image";
import React from "react";
import reactangle from "@/public/assets/svg/Rectangle.png";
import rectangle1 from "@/public/assets/svg/Rectangle-1.png";
import rectangle2 from "@/public/assets/svg/Rectangle-2.png";
import rectangle3 from "@/public/assets/svg/Rectangle-3.png";
import highlight from "@/public/assets/svg/highlight.svg";
import highlight3 from "@/public/assets/svg/highlight3.png";
import vector from "@/public/assets/svg/Vector.png";
import label from "@/public/assets/svg/label.png";
import design1 from "@/public/assets/svg/design1.png";
import design2 from "@/public/assets/svg/design2.png";
import design3 from "@/public/assets/svg/design3.png";

import group from "@/public/assets/svg/group.png";
import "./perspective.css";
import { Banner } from "@/app/components/footer/banner";
const Nosotros = () => {
  return (
    <div className=" overflow-x-hidden mt-16">
      <div className="flex flex-col   items-center ">
        <section className="w-full min-h-[80vh] max-w-7xl  relative mb-80 md:mb-0">
          <div className="w-full h-[80vh] flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full flex flex-col items-start justify-center  order-1">
              {" "}
              <span className="font-bold text-3xl pt-16 md:pt-0 text-start  w-auto md:w-[650px] pb-4 md:pb-10 relative font-laila">
                {" "}
                <Image
                  src={highlight}
                  alt="highlight"
                  width={40}
                  height={0}
                  className="absolute -top-5 -left-8 font-laila"
                />
                NOSOTROS
              </span>
              <h3 className="text-3xl  perspective-container max-w-[600px] font-bold  pb-2 font-laila">
                “ Transformando Sueños en Palabras, palabras en Poder:
                <br />{" "}
                <div className="flex  font-laila mt-2">
                  <div className="md:text-3xl perspective-container h-auto md:w-32 w-24  flex justify-center items-center relative ml-4  my-6">
                    <div className="bg-violet-700 rounded-md perspective-element py-1 px-6 text-white  h-10 w-60  absolute"></div>
                    <span className="w-auto absolute text-white ml-20  my-1">Interchange</span>
                  </div>
                </div>
                <p className="font-laila mt-4">Donde el Ingles Abre Puertas”</p>
              </h3>
              <div className="w-4 h-4 rounded-full bg-custom-yellow  absolute bottom-32 left-28"></div>
              <div className="w-3 h-3 rounded-full bg-custom-green  absolute bottom-48 left-12"></div>
            </div>
            <div className="md:w-1/2 w-full md:h-[80vh]  order-2  relative mt-20 md:mt-0">
              <Image
                src={group}
                alt="group"
                width={0}
                height={0}
                className="md:absolute bottom-0 md:right-1/2 md:translate-x-[45%] z-40"
              />

              <div className="w-full md:w-10/12 bg-gradient-to-t h-full md:h-[650px] from-custom-yellow to-transparent rounded-t-full absolute bottom-0 -z-10 "></div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen pt-20 md:pt-0 md:pr-20   relative  flex">
          <div className="w-1/2 h-full order-1 relative hidden md:block">
            <Image
              src={label}
              alt="label"
              width={0}
              height={0}
              className="absolute -top-0 left-0"
            />
            <div className="grid grid-cols-1  justify-items-center">
              <Image
                src={reactangle}
                alt="photo 1"
                width={0}
                height={0}
                className="-translate-x-1/3 translate-y-1/4 shadow-lg shadow-black/20 rounded-3xl"
              />
              <Image
                src={rectangle1}
                alt="photo 1"
                width={0}
                height={0}
                className="translate-x-1/3 shadow-lg rounded-3xl shadow-black/20"
              />
              <Image
                src={rectangle2}
                alt="photo 1"
                width={0}
                height={0}
                className="-translate-x-1/3 -translate-y-1/4 shadow-lg rounded-3xl shadow-black/20"
              />
              <Image
                src={rectangle3}
                alt="photo 1"
                width={0}
                height={0}
                className="translate-x-1/3 -translate-y-1/2 shadow-lg rounded-3xl shadow-black/20"
              />
            </div>
            <div className="w-5 h-5 rounded-full bg-custom-yellow absolute bottom-0 left-10"></div>
            <div className="w-4 h-4 rounded-full bg-custom-orange  absolute bottom-10 left-20"></div>
            <div className="w-3 h-3 rounded-full bg-custom-purple  absolute bottom-20 left-32"></div>
          </div>
          <div className=" w-full md:w-1/2 h-full order-2 relative  px-4 md:px-0 md:p-20 flex flex-col gap-4  ">
            <Image
              src={design1}
              alt="desig1"
              width={40}
              height={0}
              className="absolute top-1/2 -right-8 font-laila"
            />
            <Image
              src={design2}
              alt="highlight3"
              width={40}
              height={0}
              className="absolute top-1/2 -right-8 pt-20 font-laila"
            />
            <Image
              src={design3}
              alt="highlight3"
              width={40}
              height={0}
              className="absolute top-1/2 -right-8 pt-10 mr-14  font-laila"
            />
            <h4 className="text-4xl  font-laila font-bold relative self-center" id="instituto">
              Nuestro Instituto
              <Image
                src={highlight3}
                alt="highlight3"
                width={40}
                height={0}
                className="absolute -top-5 -left-8 font-laila"
              />
              <Image
                src={vector}
                alt="vector"
                width={20}
                height={0}
                className="absolute -top-0 -right-8 font-laila"
              />
            </h4>
            <p className="text-lg pb-8 ">
              Bienvenido a Interchange, tu destino para el aprendizaje del inglés de calidad. Nos
              enorgullece ofrecer una experiencia educativa única y personalizada que va más allá de
              las aulas tradicionales. Nuestra misión es inspirar y capacitar a nuestros estudiantes
              para que alcancen la fluidez en inglés de manera efectiva y confiada.
            </p>
            <h5 className="text-3xl  font-laila font-bold" id="metodologia">
              Nuestra metodología
            </h5>
            <p className="text-lg pb-8">
              Adoptamos una metodología dinámica centrada en el aprendizaje activo y la aplicación
              práctica del inglés en situaciones reales. Nuestro enfoque innovador, respaldado por
              tecnología de vanguardia y profesionales cualificados, garantiza una experiencia de
              aprendizaje efectiva y motivadora.
            </p>
            <h5 className="text-3xl  font-laila font-bold" id="mision">
              Nuestra Misión
            </h5>
            <p className="text-lg pb-8">
              Capacitar a nuestros estudiantes para lograr la fluidez en inglés de manera efectiva,
              ofreciendo una experiencia educativa única y personalizada.
            </p>
            <h5 className="text-3xl  font-laila font-bold">Nuestra Visión</h5>
            <p className="text-lg pb-8">
              Destacar como líderes en educación, proporcionando a nuestros estudiantes las
              herramientas y la inspiración necesarias para sobresalir en un mundo globalizado
              mediante el dominio del inglés, reconocidos por nuestra calidad e innovación.
            </p>
          </div>
        </section>
        <h3 className="md:text-5xl  text-2xl px-4 text-center max-w-[1000px] my-20 font-laila font-bold">
          Únete a nosotros y haz del aprendizaje una experiencia compartida
        </h3>
      </div>
      {/* <Banner /> */}
    </div>
  );
};

export default Nosotros;
