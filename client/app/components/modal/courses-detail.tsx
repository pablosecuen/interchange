import { Grade } from "@/app/utils";
import Image from "next/image";
import React from "react";

interface ModalProps {
  grade: Grade | null;
  onClose: () => void;
  modalOpen: boolean;
}

const ModalCourses: React.FC<ModalProps> = ({ grade, onClose, modalOpen }) => {
  if (!grade) return null;

  const modalClasses = `max-w-7xl max-h-[80vh] z-50 shadow-2xl shadow-black/80 w-full h-full fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white transition-opacity ${
    modalOpen
      ? "opacity-100 duration-500 animate-fade"
      : "opacity-0 duration-500 pointer-events-none"
  }`;
  return (
    <div className={modalClasses}>
      <span
        className="px-2 border rounded-full bg-white shadow-sm cursor-pointer absolute top-1 right-1 z-50"
        onClick={onClose}
      >
        &times;
      </span>
      <div className="w-full h-full flex  relative">
        <div className="md:w-1/2 h-full order-1 flex  p-20 ">
          <Image src={grade?.img} alt={grade.title} width={0} height={0} />
        </div>
        <div className="md:w-1/3 h-full  order-2 flex flex-col items-start   pl-4 justify-center ">
          <h4 className="text-xl  tracking-tighter font-nunito text-custom-orange">
            Acerca de {grade.title}
          </h4>
          <h2 className="text-4xl mb-6">Learning does not have to be boring! </h2>
          <p className="text-sm text-black/70 mb-6">{grade.description}</p>
          <ul className="flex text-custom-purple w-full justify-between ">
            <li className="flex flex-col gap-2">
              <span>titular 1 </span>
              <p className="text-gray-500">descripcion</p>
            </li>
            <li className="flex flex-col gap-2">
              <span>titular 1 </span>
              <p className="text-gray-500">descripcion</p>
            </li>
            <li className="flex flex-col gap-2">
              <span>titular 1 </span>
              <p className="text-gray-500">descripcion</p>
            </li>
          </ul>
          <button className="yellow-btn mt-20">get started</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCourses;
