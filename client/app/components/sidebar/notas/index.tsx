"use client";
import React from "react";

import useFetchNotas from "@/app/hooks/useFetchNotes";
import LoadingError from "../../loadingerror";
import { Toaster } from "sonner";

function Notas() {
  // Obtener el usuario del almacenamiento local
  let storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  if (!storedUser || !storedUser.ID) {
    storedUser = JSON.parse(sessionStorage.getItem("user") || "{}");
  }

  const userId = storedUser.ID;

  const { loading, error, alumno } = useFetchNotas(userId);

  if (loading) {
    return <LoadingError isLoading={loading} error={error} />;
  }

  // Verificar si alumno es null o undefined
  if (!alumno) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <p>No se encontraron notas para este alumno.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade min-h-[90vh] w-full mt-20 flex">
      <Toaster richColors={true} expand={false} position="top-center" />
      <table className="w-[80vw] mx-auto rounded">
        {/* Renderizar las cabeceras de la tabla */}
        <thead>
          <tr className="bg-gray-300">
            <th>Grado</th>
            <th>Trimestres</th>
            <th>Examen Final</th>
          </tr>
        </thead>
        {/* Renderizar el cuerpo de la tabla */}
        <tbody>
          {alumno.RegistroNotas.map((registro, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="text-center">{registro.notas.grado}</td>
              <td>
                {registro.notas.trimestres.map((trimestre, idx) => (
                  <div key={idx} className="text-center">
                    Trimestre {trimestre.trimestre}: {trimestre.nota}
                  </div>
                ))}
              </td>
              <td className="text-center">{registro.notas.examenFinal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Notas;
