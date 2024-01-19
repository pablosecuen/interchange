import React from "react";
import underline from "@/public/assets/svg/underline.svg";
import Image from "next/image";
import Logo from "@/app/components/logo";

const Beneficios = () => {
  return (
    <article className="w-screen min-h-[100vh] h-full mb-36 flex flex-col gap-16 mt-20" id="porque">
      <h4 className="md:text-4xl text-3xl px-2  font-laila font-bold pb-4">
        Unite y descubre una experiencia{" "}
        <span className="text-custom-purple relative">
          inolvidable !
          <Image
            src={underline}
            alt="underline"
            width={0}
            height={0}
            className="absolute -bottom-4 right-0 w-auto "
          />
        </span>
      </h4>
      <div className="hidden">
        {" "}
        <Logo size="3xl" />
      </div>
      <div className="block md:hidden">
        {" "}
        <Logo size="2xl" />
      </div>

      <div className="w-full flex flex-col gap-10 text-xs  md:pt-20">
        <span className="text-center md:text-3xl text-2xl font-laila tracking-widest font-bold uppercase">
          Nuestro Programa
        </span>
        <div className="flex justify-evenly flex-col md:flex-row gap-4 lg:gap-0 px-4">
          {" "}
          <div className="md:h-48 md:w-96 border border-black rounded-3xl md:text-lg  items-center flex p-4">
            <div className="w-6 h-6  bg-custom-yellow m-2 rounded-full hidden lg:block"></div>
            <p className="lg:w-4/5 text-xs lg:text-base w-full">
              {" "}
              <strong>Inmersión Total en Inglés:</strong> Practica el idioma todos los días en
              situaciones de la vida real mientras te comunicas con hablantes nativos.
            </p>
          </div>
          <div className="md:h-48 md:w-96 border border-black rounded-3xl md:text-lg items-center flex p-4">
            <div className="w-6 h-6  hidden lg:block bg-custom-yellow m-2 rounded-full"></div>
            <p className="lg:w-4/5 text-xs lg:text-base">
              <strong>Clases Intensivas de Inglés:</strong> Participa en clases intensivas diseñadas
              para mejorar tus habilidades lingüísticas de manera rápida y efectiva.
            </p>
          </div>
          <div className="md:h-48 md:w-96 border border-black rounded-3xl md:text-lg items-center flex p-4">
            <div className="w-6 h-6  hidden lg:block bg-custom-yellow m-2 rounded-full"></div>
            <p className="lg:w-4/5 text-xs lg:text-base">
              <strong>Exploración Cultural:</strong> Visita lugares emblemáticos, museos y eventos
              culturales para enriquecer tu comprensión de la historia y sociedad británicas.
            </p>
          </div>
          <div className="md:h-48 md:w-96 border border-black rounded-3xl md:text-lg items-center flex p-4">
            <div className="w-6 h-6  hidden lg:block bg-custom-yellow m-2 rounded-full"></div>
            <p className="lg:w-4/5 text-xs lg:text-base">
              <strong>Actividades Sociales:</strong> Disfruta de actividades en grupo, excursiones y
              eventos sociales que te permitan interactuar con otros estudiantes y lugareños.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10  py-10 ">
        <span className="text-center md:text-3xl text-xl font-laila tracking-widest font-bold">
          POR QUE VIAJAR CON NOSOTROS?
        </span>
        <div className="flex flex-col md:flex-row items-center justify-evenly  lg:gap-20">
          {" "}
          <div className="lg:h-80 lg:w-64 h-64 w-48 border  rounded-3xl items-center flex flex-col overflow-hidden shadow-lg transition duration-300 hover:translate-y-2 hover:shadow-black/40">
            <div className="w-full h-2/3 bg-gray-200"></div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center">
              {" "}
              <span className=" lg:text-md text-sm text-black font-semibold">Cuidado infantil</span>
              <p className="text-black/60 lg:text-sm text-xs">lorem ipsum</p>
            </div>
          </div>
          <div className="lg:h-80 lg:w-64 h-64 w-48 border  rounded-3xl items-center flex flex-col overflow-hidden shadow-lg transition duration-300 hover:translate-y-2 hover:shadow-black/40">
            <div className="w-full h-2/3 bg-gray-200"></div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center">
              {" "}
              <span className=" lg:text-md text-sm text-black font-semibold">
                Aprendizaje nativo
              </span>
              <p className="text-black/60 lg:text-sm text-xs">lorem ipsum</p>
            </div>
          </div>
          <div className="lg:h-80 lg:w-64 h-64 w-48 border  rounded-3xl items-center flex flex-col overflow-hidden shadow-lg transition duration-300 hover:translate-y-2 hover:shadow-black/40">
            <div className="w-full h-2/3 bg-gray-200"></div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center">
              {" "}
              <span className=" lg:text-md text-sm text-black font-semibold">
                Staff super talentoso
              </span>
              <p className="text-black/60 lg:text-sm text-xs">lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Beneficios;
