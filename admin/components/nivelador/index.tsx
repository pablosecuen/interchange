import React, { useState } from "react";
import useGetExams from "../hooks/useGetExams";
import { Button, ButtonGroup, useDisclosure } from "@nextui-org/react";
import ExamenModal from "./modal-examen";
import { Exam } from "./crear-examen";

const Nivelador = () => {
  const { examenes, loading, error } = useGetExams();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [examenSeleccionado, setExamenSeleccionado] = useState<Exam | null>(null);

  const mostrarDetalleExamen = (examen: Exam) => {
    setExamenSeleccionado(examen);
    onOpenChange();
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="w-full h-full max-h-[70vh]  p-10 flex flex-col gap-8 relative ">
      <h2 className="  text-center">Lista de Exámenes</h2>
      <ul className="flex flex-wrap gap-8">
        {examenes.map((examen) => (
          <li
            key={examen.ID}
            className="w-64 h-64 flex flex-col items-center justify-evenly border rounded-3xl"
          >
            <h3 className="flex flex-col text-center">
              Titulo: <span> {examen.titulo}</span>
            </h3>

            <Button onPress={() => mostrarDetalleExamen(examen)}>ver examen</Button>
          </li>
        ))}
      </ul>

      <ExamenModal examen={examenSeleccionado} openchange={onOpenChange} isopen={isOpen} />
      <div className="w-auto fixed bottom-10 left-1/2  translate-x-1/2 ">
        {" "}
        <Button className="bg-[#6f4ef2] hover:bg-[#382e5f] shadow-lg shadow-indigo-500/20">
          Crear examen
        </Button>
      </div>
    </div>
  );
};

export default Nivelador;
