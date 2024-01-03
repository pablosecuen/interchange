import { Grade } from "@/app/utils";
import Image from "next/image";
import React from "react";
import "./courses-detail.css";
import Link from "next/link";
import { Toaster } from "sonner";

interface ModalProps {
  grade: Grade | null;
  onClose: () => void;
  modalOpen: boolean;
}

const ModalCourses: React.FC<ModalProps> = ({ grade, onClose, modalOpen }) => {
  if (!grade) return null;

  const modalClasses = `md:max-w-7xl  overflow-hidden rounded-3xl max-h-[80vh] z-50 shadow-2xl shadow-black/80 w-[95vw] h-[95vh] md:w-full md:h-full  fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white transition ${
    modalOpen
      ? "opacity-100 duration-500 animate-fade"
      : "opacity-0 duration-500 pointer-events-none"
  }`;
  return (
    <div className={modalClasses}>
      <Toaster richColors={true} expand={false} position="top-center" />
      <span
        className="px-2 border z-50 border-black/20 transition duration-200 hover:bg-slate-200 bg-slate-100 rounded-full text-black  shadow-sm cursor-pointer absolute top-2 right-2 font-black "
        onClick={onClose}
      >
        &times;
      </span>
      <div className="w-full h-full flex  relative z-40 ">
        <div className="md:w-1/2 h-full order-1 flex items-center justify-center z-50">
          <div className="w-full h-full relative z-50">
            <Image
              src={grade?.img}
              alt={grade.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg p-10"
            />
          </div>
        </div>
        <div className="md:w-1/3 h-full  order-2 flex flex-col items-start   md:pl-4 px-4 justify-center z-40">
          <h4 className="text-xl  tracking-tighter font-nunito text-custom-orange">
            Acerca de {grade.title}
          </h4>
          <h2 className="md:text-4xl text-2xl mb-6">Aprender no tiene por qué ser aburrido! </h2>
          <p className="text-sm text-black/70 mb-6">{grade.description}</p>
          <ul className="flex text-custom-purple w-full justify-between ">
            <li className="flex flex-col gap-2">
              <span>titular 1 </span>
              <p className="text-gray-500">descripción</p>
            </li>
            <li className="flex flex-col gap-2">
              <span>titular 1 </span>
              <p className="text-gray-500">descripción</p>
            </li>
            <li className="flex flex-col gap-2">
              <span>titular 1 </span>
              <p className="text-gray-500">descripción</p>
            </li>
          </ul>
          <Link href="/inscripcion">
            <button className="yellow-btn mt-20">Comenzar</button>
          </Link>
        </div>
        <div className="hero_area  w-full   h-full  top-0 left-0">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="#000" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(204, 0, 0, 0.8)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,56,168,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0,56,168,0.8)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModalCourses;
