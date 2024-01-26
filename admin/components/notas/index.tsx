"use client";
import React from "react";

import { Toaster } from "sonner";
import NotasTable from "./notas-table";
import LoadingError from "../loadingerror";
import useFetchNotas from "../hooks/useFetchNotes";

function Notas({ user }: any) {
  const userId = user.ID;

  const { loading, error, alumno } = useFetchNotas(userId);

  if (loading) {
    return <LoadingError isLoading={loading} error={error} />;
  }

  // Verificar si alumno es null o undefined
  if (!alumno) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <p>No se encontraron notas para este alumno.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade h-full w-full mb-20 md:mb-0 md:w-10/12 md:mx-20 mt-20 flex justify-center">
      <Toaster richColors={true} expand={false} position="top-center" />
      <div className="flex flex-col gap-8">
        {alumno.RegistroNotas.map((cursoNotas, index) => (
          <NotasTable
            key={index}
            curso={cursoNotas.notas.grado}
            notas={cursoNotas.notas.trimestres}
          />
        ))}
      </div>
    </div>
  );
}

export default Notas;
