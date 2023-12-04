import React from "react";
import underline from "@/public/assets/svg/underline.svg";
import Image from "next/image";
import Logo from "@/app/components/logo";

const Beneficios = () => {
  return (
    <article className="w-screen min-h-[100vh] h-full mb-36 flex flex-col gap-16 mt-20" id="porque">
      <h4 className="text-4xl font-laila font-bold pb-4">
        Unete y descubre una experiencia de{" "}
        <span className="text-custom-purple relative">
          turismo inolvidable !
          <Image
            src={underline}
            alt="underline"
            width={0}
            height={0}
            className="absolute -bottom-4 right-0 w-auto "
          />
        </span>
      </h4>
      <Logo size="3xl" />
      <div className="w-full flex flex-col gap-10  pt-20">
        <span className="text-center text-xl tracking-widest font-bold uppercase">
          Nuestro Programa
        </span>
        <div className="flex justify-evenly">
          {" "}
          <div className="h-48 w-96 border border-black rounded-3xl text-lg items-center flex p-4">
            <div className="w-6 h-6 bg-custom-yellow m-2 rounded-full"></div>
            <p className="w-4/5">
              {" "}
              Inmersión Total en Inglés: Practica el idioma todos los días en situaciones de la vida
              real mientras te comunicas con hablantes nativos.
            </p>
          </div>
          <div className="h-48 w-96 border border-black rounded-3xl text-lg items-center flex p-4">
            <div className="w-6 h-6 bg-custom-yellow m-2 rounded-full"></div>
            <p className="w-4/5">
              <strong>Clases Intensivas de Inglés:</strong> Participa en clases intensivas diseñadas
              para mejorar tus habilidades lingüísticas de manera rápida y efectiva.
            </p>
          </div>
          <div className="h-48 w-96 border border-black rounded-3xl text-lg items-center flex p-4">
            <div className="w-6 h-6 bg-custom-yellow m-2 rounded-full"></div>
            <p className="w-4/5">
              <strong>Exploración Cultural:</strong> Visita lugares emblemáticos, museos y eventos
              culturales para enriquecer tu comprensión de la historia y sociedad británicas.
            </p>
          </div>
          <div className="h-48 w-96 border border-black rounded-3xl text-lg items-center flex p-4">
            <div className="w-6 h-6 bg-custom-yellow m-2 rounded-full"></div>
            <p className="w-4/5">
              <strong>Actividades Sociales:</strong> Disfruta de actividades en grupo, excursiones y
              eventos sociales que te permitan interactuar con otros estudiantes y lugareños.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10  py-10 ">
        <span className="text-center text-xl tracking-widest font-bold">
          POR QUE VIAJAR CON NOSOTROS?
        </span>
        <div className="flex justify-center gap-20">
          {" "}
          <div className="h-80 w-64 border  rounded-3xl items-center flex flex-col overflow-hidden shadow-lg transition duration-300 hover:translate-y-2 hover:shadow-black/40">
            <div className="w-full h-2/3 bg-gray-200"></div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center">
              {" "}
              <span className=" text-md text-black font-semibold">
                Cuidado infantil con licencia
              </span>
              <p className="text-black/60 text-sm">lorem ipsum</p>
            </div>
          </div>
          <div className="h-80 w-64 border  rounded-3xl items-center flex flex-col overflow-hidden shadow-lg transition duration-300 hover:translate-y-2 hover:shadow-black/40">
            <div className="w-full h-2/3 bg-gray-200"></div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center">
              {" "}
              <span className=" text-md text-black font-semibold">Aprendisaje nativo</span>
              <p className="text-black/60 text-sm">lorem ipsum</p>
            </div>
          </div>
          <div className="h-80 w-64 border  rounded-3xl items-center flex flex-col overflow-hidden shadow-lg transition duration-300 hover:translate-y-2 hover:shadow-black/40">
            <div className="w-full h-2/3 bg-gray-200"></div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center">
              {" "}
              <span className=" text-md text-black font-semibold">Staff super talentoso</span>
              <p className="text-black/60 text-sm">lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Beneficios;
