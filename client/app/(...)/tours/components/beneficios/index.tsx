import React from "react";
import underline from "@/public/assets/svg/underline.svg";
import Image from "next/image";
import Logo from "@/app/components/logo";
import Link from "next/link";

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

      <div className="w-full flex flex-col gap-10 text-xs  ">
        <h4 className="text-center md:text-3xl text-2xl font-laila tracking-widest font-bold uppercase underline-offset-2 underline">
          Nuestro Programa
        </h4>
        <div className="w-full mx-auto  flex flex-col gap-10  py-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4  md:gap-8 gap-4 lg:gap-10 xl:mx-20 mx-auto">
            {" "}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Actividades Sociales
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Disfruta de actividades en grupo, excursiones y eventos sociales que te permitan
                interactuar con otros estudiantes y lugareños.
              </p>
              <Link href="#">
                <button className=" yellow-btn">
                  Consultar
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Clases Intensivas de Inglés
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Participa en clases intensivas diseñadas para mejorar tus habilidades lingüísticas
                de manera rápida y efectiva.
              </p>
              <Link href="#">
                <Link href="#">
                  <button className=" yellow-btn">
                    Consultar
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </Link>
              </Link>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Inmersión Total en Inglés
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Practica el idioma todos los días en situaciones de la vida real mientras te
                comunicas con hablantes nativos.
              </p>
              <Link href="#">
                <Link href="#">
                  <button className=" yellow-btn">
                    Consultar
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </Link>
              </Link>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Exploración Cultural
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Visita lugares emblemáticos, museos y eventos culturales para enriquecer tu
                comprensión de la historia y sociedad británicas.
              </p>
              <Link href="#">
                <Link href="#">
                  <button className=" yellow-btn">
                    Consultar
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Beneficios;
