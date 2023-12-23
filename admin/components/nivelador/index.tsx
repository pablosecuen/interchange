import React, { useState } from "react";
import useGetExams from "../hooks/useGetExams";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import ExamenModal from "./modal-examen";
import { Exam } from "./crear-examen";
import useGetCompletedExams, { ExamResults } from "../hooks/useGetCompletedExams";
import ExamenModalResultados from "./moda-examen-resultados";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { TrashIcon } from "../icons/accounts/trash-icon";
import { InfoIcon } from "../icons/accounts/info-icon";
import { DotsIcon } from "../icons/accounts/dots-icon";
import { ExportIcon } from "../icons/accounts/export-icon";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import Link from "next/link";
import { UsersIcon } from "../icons/breadcrumb/users-icon";
import { Toaster } from "sonner";
import { TableWrapperExams } from "../table/tableNivelador";
import { TableWrapperExamsCompleted } from "../table/tableNiveladorCompletado";
import spinner from "../../public/spinner/Spinner.gif";
import Image from "next/image";

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
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Image src={spinner} alt="Cargando..." />
      </div>
    );
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
    <div className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" />
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Examenes Niveladores</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los Examanes Niveladores</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search users"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Button color="primary" startContent={<ExportIcon />}>
            Exportar a Excel
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full rounded-3xl overflow-hidden">
        {/*    <div className="w-full flex-col h-full bg-[#18181b]  p-10 flex  relative ">
            <div className="w-full border-b-4 p-4 gap-4">
              {" "}
              <h2 className="  text-center text-xl font-bold mb-4">
                Lista de Exámenes Niveladores para enviar
              </h2>
              <ul className="flex  gap-8 justify-center ">
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
            <div className="w-full  p-4 gap-4">
              <h2 className="  text-center text-xl font-bold my-4">
                Examenes completados por alumnos niveladores
              </h2>
              <ul className="flex flex-wrap justify-center gap-8">
                {completedExams.map((examen, index) => {
                  console.log(examen); // Agregar este console.log para ver los datos de cada examen
                  return (
                    <li
                      key={index}
                      className="w-64 h-64 flex flex-col items-center justify-evenly border-4 rounded-3xl"
                    >
                      <h3 className="flex flex-col text-center">
                        <span>
                          Examen:{" "}
                          <span className="text-green-600 capitalize">{examen?.examenTitle}</span>
                        </span>
                        <span className="font-bold"> Alumno:</span>
                        <span className="brightness-200">
                          {examen?.userName} {examen?.userlastname}
                        </span>
                        <span>{examen?.userEmail}</span>
                      </h3>
                      <Button onPress={() => mostrarDetalleExamenResultado(examen)}>
                        ver examen
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>

        
          </div> */}
        <div className="flex flex-col gap-4">
          <TableWrapperExams mostrarDetalleExamen={mostrarDetalleExamen} />
          <TableWrapperExamsCompleted
            mostrarDetalleExamenResultado={mostrarDetalleExamenResultado}
          />
        </div>
        <ExamenModal examen={examenSeleccionado} openchange={onOpenChange} isopen={isOpen} />
        <ExamenModalResultados
          examen={examenSeleccionadoResult}
          openchange={onOpenChangeResult}
          isopen={isOpenResult}
        />
      </div>
    </div>
  );
};

export default Nivelador;
