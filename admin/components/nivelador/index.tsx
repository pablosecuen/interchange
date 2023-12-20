import React, { useState } from "react";
import useGetExams from "../hooks/useGetExams";
import { Button, useDisclosure } from "@nextui-org/react";
import ExamenModal from "./modal-examen";
import { Exam } from "./crear-examen";
import useGetCompletedExams, { ExamResults } from "../hooks/useGetCompletedExams";
import ExamenModalResultados from "./moda-examen-resultados";

const Nivelador = () => {
  const { completedExams, loadingResult, errorResult } = useGetCompletedExams();
  const { examenes, loading, error } = useGetExams();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenResult,
    onOpen: onOpenResult,
    onOpenChange: onOpenChangeResult,
  } = useDisclosure();
  const [examenSeleccionado, setExamenSeleccionado] = useState<Exam | null>(null);
  const [examenSeleccionadoResult, setExamenSeleccionadoResult] = useState<ExamResults | null>(
    null
  );
  console.log(completedExams);

  const [examenResultadosSeleccionado, setExamenResultadosSeleccionado] =
    useState<ExamResults | null>(null);

  const mostrarDetalleExamen = (examen: any) => {
    setExamenSeleccionado(examen);
    onOpenChange();
  };

  const mostrarDetalleExamenResultado = (examen: any) => {
    setExamenSeleccionadoResult(examen);
    onOpenChangeResult();
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loadingResult) {
    return <div>Cargando...</div>;
  }

  if (errorResult) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full flex-col h-full max-h-[70vh]  p-10 flex  relative ">
      <div className="w-full border-b p-4 gap-4">
        {" "}
        <h2 className="  text-center text-xl font-bold mb-4">
          Lista de Exámenes Niveladores para enviar
        </h2>
        <ul className="flex flex-wrap gap-8 justify-center">
          {examenes.map((examen) => (
            <li
              key={examen.ID}
              className="w-64 h-64 flex flex-col items-center justify-evenly border-4 rounded-3xl"
            >
              <h3 className="flex flex-col text-center">
                Titulo: <span> {examen.titulo}</span>
              </h3>

              <Button onPress={() => mostrarDetalleExamen(examen)}>ver examen</Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full border-b-4 p-4 gap-4">
        <h2 className="  text-center text-xl font-bold my-4">
          Examenes completados por alumnos niveladores
        </h2>
        <ul className="flex flex-wrap gap-8">
          {completedExams.map((examen, index) => {
            console.log(examen); // Agregar este console.log para ver los datos de cada examen
            return (
              <li
                key={index}
                className="w-64 h-64 flex flex-col items-center justify-evenly border-4 rounded-3xl"
              >
                <h3 className="flex flex-col text-center">
                  <span>
                    Examen: <span className="text-green-600 capitalize">{examen?.examenTitle}</span>
                  </span>
                  <span className="font-bold"> Alumno:</span>
                  <span className="brightness-200">
                    {examen?.userName} {examen?.userlastname}
                  </span>
                  <span>{examen?.userEmail}</span>
                </h3>
                <Button onPress={() => mostrarDetalleExamenResultado(examen)}>ver examen</Button>
              </li>
            );
          })}
        </ul>
      </div>

      <ExamenModal examen={examenSeleccionado} openchange={onOpenChange} isopen={isOpen} />
      <ExamenModalResultados
        examen={examenSeleccionadoResult}
        openchange={onOpenChangeResult}
        isopen={isOpenResult}
      />
    </div>
  );
};

export default Nivelador;
