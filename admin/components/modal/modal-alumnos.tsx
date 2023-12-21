import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import useFetchCursos from "../hooks/useFetchCursos";
import { Toaster, toast } from "sonner";

interface ModalAlumnos {
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
  alumno: any;
}

export default function ModalAlumnos({ onOpenChange, isOpen, alumno }: ModalAlumnos) {
  const { cursos, isLoading, error } = useFetchCursos();
  const [selectedGrado, setSelectedGrado] = useState<any>();
  console.log(selectedGrado);

  const propiedadesMostrar = ["Nombre", "Apellido", "Email", "Tipo"];

  const handleGradoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurso = JSON.parse(event.target.value);
    setSelectedGrado(selectedCurso);
  };

  const assignGrado = async () => {
    try {
      if (!selectedGrado) {
        console.error("Por favor, selecciona un grado");
        return;
      }

      const response = await fetch(`http://localhost:3001/api/users/${alumno.ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Grado_ID: selectedGrado.ID,
          Grado_Nombre: selectedGrado.Grado_Nombre,
          Grado_Categoria: selectedGrado.Grado_Categoria,
        }),
      });

      if (!response.ok) {
        console.log(response);
        toast.error("Error al asignar el grado al alumno");
        throw new Error("Error al asignar el grado al alumno");
      }

      if (response.ok) {
        const updatedAlumno = await response.json();

        const cursoEncontrado = cursos.find((curso: any) => curso.ID === selectedGrado);

        if (cursoEncontrado) {
          const { Grado_Nombre, Grado_Categoria } = cursoEncontrado;
          const updatedGrado = {
            ID: selectedGrado,
            Grado_Nombre,
            Grado_Categoria,
          };

          const updatedAlumnoObject = {
            ...updatedAlumno,
            Grado_ID: updatedGrado.ID,
            Grado: [updatedGrado],
          };
          console.log("Alumno actualizado:", updatedAlumnoObject);

          toast.success("Grado asignado exitosamente");

          // Actualizar el estado del alumno con el nuevo objeto
          // Aquí deberías usar el método para actualizar el estado del alumno en tu aplicación
          // Por ejemplo: setAlumno(updatedAlumnoObject);
        } else {
          console.error("No se encontró el curso con el ID seleccionado");
          // Manejar el caso en el que no se encuentra el curso
        }
      }
    } catch (error) {
      toast.error("Error al asignar el grado al alumno");
      console.error("Error al asignar el grado al alumno:", error);
    }
  };

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
