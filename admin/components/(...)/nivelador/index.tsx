import React, { useState } from "react";

import { Button, Input, useDisclosure } from "@nextui-org/react";
import ExamenModal from "./modal-examen";
import { Exam } from "./crear-examen";

import ExamenModalResultados from "./moda-examen-resultados";

import Link from "next/link";

import { Toaster } from "sonner";

import spinner from "../../public/spinner/Spinner.gif";
import Image from "next/image";

import useGetExams from "../../hooks/useGetExams";
import useGetCompletedExams, { ExamResults } from "../../hooks/useGetCompletedExams";
import { HouseIcon } from "../../icons/breadcrumb/house-icon";
import { UsersIcon } from "../../icons/breadcrumb/users-icon";
import { SettingsIcon } from "../../icons/sidebar/settings-icon";
import { TrashIcon } from "../../icons/accounts/trash-icon";
import { InfoIcon } from "../../icons/accounts/info-icon";
import { DotsIcon } from "../../icons/accounts/dots-icon";
import { ExportIcon } from "../../icons/accounts/export-icon";
import LoadingError from "../../loadingerror";
import { TableWrapperExams } from "../../table/tableNivelador";
import { TableWrapperExamsCompleted } from "../../table/tableNiveladorCompletado";

const Nivelador = () => {
  const { completedExams, loadingResult, errorResult } = useGetCompletedExams();
  const { examenes, loading, error } = useGetExams();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
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
            placeholder="Search examen"
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
        <div className="flex flex-col gap-4">
          <LoadingError isLoading={loading || loadingResult} error={error || errorResult} />
          {!loading && !error && <TableWrapperExams mostrarDetalleExamen={mostrarDetalleExamen} />}

          {!loadingResult && !errorResult && (
            <TableWrapperExamsCompleted
              mostrarDetalleExamenResultado={mostrarDetalleExamenResultado}
            />
          )}
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
