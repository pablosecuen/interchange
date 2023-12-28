import React, { useEffect } from "react";
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
import useAssignGrado from "../hooks/useAsignGrado";
import useSendEmailCurso from "../hooks/useSendEmailCurso ";
import LoadingError from "../loadingerror";
import useAnotaciones from "../hooks/useAnotaciones";

interface ModalAlumnos {
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
  alumno: any;
}

export default function ModalAlumnos({ onOpenChange, isOpen, alumno }: ModalAlumnos) {
  const { cursos, isLoading, error } = useFetchCursos();
  const { guardarAnotaciones } = useAnotaciones();
  const { handleGradoChange, assignGrado, selectedGrado, assignmentResult } = useAssignGrado(
    alumno,
    cursos
  );
  //importante aunque enviarEmailCurso no esta siendo llamado, funciona con los argumentos que se le pasan al custom hook
  const { enviarEmailCurso } = useSendEmailCurso(alumno.Email, assignmentResult);
  //no borrar el hook de la linea 29 aunque no este siendo llamado, se ejectuta automaticamente
  const [anotaciones, setAnotaciones] = React.useState("");

  const propiedadesMostrar = ["Nombre", "Apellido", "Email", "Tipo"];

  useEffect(() => {
    if (isOpen && alumno && alumno.Anotaciones) {
      setAnotaciones(alumno.Anotaciones);
    }
  }, [isOpen, alumno]);

  const handleGuardarAnotaciones = () => {
    guardarAnotaciones(alumno.ID, anotaciones);
  };

  const renderSelect = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          {alumno && alumno.Grado && alumno.Grado.length > 0 ? (
            <>
              <p className="font-bold">Grado asignado:</p>
              <p>{`${alumno.Grado[0].Grado_Nombre} - ${alumno.Grado[0].Grado_Categoria}`}</p>
              <span>Cambiar Curso asignado. </span>
              <div className="flex justify-between">
                <select
                  value={JSON.stringify(selectedGrado)}
                  onChange={handleGradoChange}
                  className="h-8"
                >
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
            </>
          ) : (
            <>
              <span>El alumno no tiene asignado un curso. </span>
              <span>Asignar curso:</span>
              <div className="flex justify-between">
                <select
                  value={JSON.stringify(selectedGrado)}
                  onChange={handleGradoChange}
                  className="h-8"
                >
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
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      classNames={{
        body: "py-6 max-h-[90vh] overflow-y-auto",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
     <Toaster richColors position="top-center" expand={true} closeButton={true} />
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
              <LoadingError isLoading={isLoading} error={error} />
              <div className="flex flex-col gap-4">
                <p className="font-bold tracking-wider  underline ">Anotaciones:</p>
                <textarea
                  value={anotaciones}
                  onChange={(e) => setAnotaciones(e.target.value)}
                  rows={8}
                  cols={40}
                  className="p-4 bg-[#19172c] border-2 border-white/40 rounded-2xl"
                />
                <Button color="primary" variant="light" onPress={handleGuardarAnotaciones}>
                  Guardar Anotaciones
                </Button>
              </div>
              <div>{renderSelect()}</div>
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
