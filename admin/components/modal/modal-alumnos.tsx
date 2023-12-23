import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import useFetchCursos from "../hooks/useFetchCursos";
import { Toaster } from "sonner";
import useAssignGrado from "../hooks/useAsignGrado";
import useSendEmailCurso from "../hooks/useSendEmailCurso ";

interface ModalAlumnos {
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
  alumno: any;
}

export default function ModalAlumnos({ onOpenChange, isOpen, alumno }: ModalAlumnos) {
  const { cursos, isLoading, error } = useFetchCursos();
  const { handleGradoChange, assignGrado, selectedGrado, assignmentResult } = useAssignGrado(
    alumno,
    cursos
  );

  //importante aunque enviarEmailCurso no esta siendo llamado, funciona con los argumentos que se le pasan al custom hook
  const { enviarEmailCurso } = useSendEmailCurso(alumno.Email, assignmentResult);
  //no borrar el hook de la linea 29 aunque no este siendo llamado, se ejectuta automaticamente

  const propiedadesMostrar = ["Nombre", "Apellido", "Email", "Tipo"];

  const renderSelect = () => {
    if (!alumno || !alumno.Grado || alumno.Grado.length === 0) {
      return (
        <div>
          <p>El alumno no tiene asignado un curso. Asignar curso:</p>
          <select value={JSON.stringify(selectedGrado)} onChange={handleGradoChange}>
            <option value="">Seleccionar un curso</option>
            {cursos.map((curso: any) => (
              <option
                key={curso.ID}
                value={JSON.stringify({
                  ID: curso.ID,
                  Grado_Nombre: curso.Grado_Nombre,
                  Grado_Categoria: curso.Grado_Categoria,
                })}
              >
                {`${curso.Grado_Nombre} - ${curso.Grado_Categoria}`}
              </option>
            ))}
          </select>

          <Button color="success" variant="light" onPress={assignGrado}>
            Asignar Grado
          </Button>
        </div>
      );
    }

    const { Grado_Nombre, Grado_Categoria } = alumno.Grado[0];

    if (Grado_Nombre !== null && Grado_Categoria !== null) {
      return (
        <div>
          <p className="font-bold">Grado asignado:</p>
          <p>{`${Grado_Nombre} - ${Grado_Categoria}`}</p>
        </div>
      );
    }

    return null;
  };

  if (isLoading) {
    return <div>Cargando cursos...</div>;
  }

  if (error) {
    return <div>Ocurrió un error: {error}</div>;
  }

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <Toaster richColors position="top-center" />
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Resumen {alumno.Nombre} {alumno.Apellido}
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 gap-2">
                {propiedadesMostrar.map((propiedad, index) => (
                  <li className="flex flex-col gap-2 mb-4" key={index}>
                    <strong>{propiedad}: </strong>
                    {propiedad === "Grado_Nombre" || propiedad === "Grado_Categoria"
                      ? alumno.Grado.length > 0
                        ? alumno.Grado[0][propiedad.replace("Grado_", "")]
                        : "Valor no definido o nulo"
                      : alumno[propiedad as keyof typeof alumno] || "Valor no definido o nulo"}
                  </li>
                ))}
              </div>
              <div>
                {/* Aquí renderizas el resto de tu contenido */}
                {renderSelect()}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
