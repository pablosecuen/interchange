import React, { useState } from "react";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import ExamenModal from "./modal-examen";
import { Exam } from "./crear-examen";
import ExamenModalResultados from "./moda-examen-resultados";
import Link from "next/link";
import { Toaster } from "sonner";
/* import useGetExams from "../../hooks/useGetExams"; */
import useGetCompletedExams, { ExamResults } from "../../hooks/useGetCompletedExams";
import { HouseIcon } from "../../icons/breadcrumb/house-icon";
import { UsersIcon } from "../../icons/breadcrumb/users-icon";
import { SettingsIcon } from "../../icons/sidebar/settings-icon";
import * as XLSX from "xlsx";
import { ExportIcon } from "../../icons/accounts/export-icon";
import LoadingError from "../../loadingerror";
import { TableWrapperExams } from "../../table/tableNivelador";
import { TableWrapperExamsCompleted } from "../../table/tableNiveladorCompletado";

const Nivelador = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { loadingResult, errorResult, completedExams } = useGetCompletedExams();
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

  const [examenesFilter, setExamenesFilter] = useState<string>("");

  const filteredExams = completedExams.filter((completedExam) => {
    const { userID, respuestas, nota } = completedExam;
    const searchLowerCase = examenesFilter.toLowerCase();

    // Convertir el campo respuestas a una cadena de texto o al formato deseado
    const respuestasString = JSON.stringify(respuestas);

    // Verificar si nota está definido antes de usarlo
    const match =
      userID.toLowerCase().includes(searchLowerCase) ||
      (nota && nota.toString().toLowerCase().includes(searchLowerCase)) ||
      respuestasString.toLowerCase().includes(searchLowerCase);

    return match;
  });

  const exportToExcel = () => {
    // Crear un array para contener todas las filas desenrolladas
    const flattenedData: any[] = [];

    // Iterar sobre los exámenes completados
    filteredExams.forEach((completedExam) => {
      const { userID, respuestas, nota, examenTitle, userName, userEmail } = completedExam;

      // Iterar sobre las respuestas de cada examen
      respuestas.forEach((respuesta) => {
        const { enunciado, respuestaUsuario, respuestaCorrecta } = respuesta;

        // Crear una nueva fila para cada respuesta
        const rowData = {
          userID,
          enunciado,
          respuestaUsuario,
          respuestaCorrecta,
          nota,
          examenTitle,
          userName,
          userEmail,
        };

        // Agregar la fila a la lista
        flattenedData.push(rowData);
      });
    });

    // Crear la hoja de cálculo y exportar a Excel
    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Examenes");
    XLSX.writeFile(workbook, "examenes.xlsx");
  };

  const mostrarDetalleExamen = (examen: any) => {
    setExamenSeleccionado(examen);
    onOpenChange();
  };

  const mostrarDetalleExamenResultado = (examen: any) => {
    setExamenSeleccionadoResult(examen);
    onOpenChangeResult();
  };

  return (
    <div className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />
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
          <span> Lista</span>
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
            placeholder="Search examen"
            value={examenesFilter}
            onChange={(e: any) => setExamenesFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Button color="primary" startContent={<ExportIcon />} onPress={exportToExcel}>
            Exportar a Excel
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full rounded-3xl overflow-hidden">
        <div className="flex flex-col gap-4">
          <span className="pl-4">Examanes en blanco</span>
          <TableWrapperExams mostrarDetalleExamen={mostrarDetalleExamen} />
          <span className="pl-4">Examanes Completados</span>
          <TableWrapperExamsCompleted
            mostrarDetalleExamenResultado={mostrarDetalleExamenResultado}
            loadingResult={loadingResult}
            errorResult={errorResult}
            completedExams={completedExams}
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
