import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import useFetchCursos from "../hooks/useFetchCursos";
import { Toaster, toast } from "sonner";
import useAssignGrado from "../hooks/useAsignGrado";
import useSendEmailCurso from "../hooks/useSendEmailCurso ";
import LoadingError from "../loadingerror";
import useAnotaciones from "../hooks/useAnotaciones";
import useEnviarAcuerdoInstitucional from "../hooks/useEnviarAcuerdoInstitucional";
import { EditIcon } from "../icons/table/edit-icon";
import Draggable from "react-draggable";

interface ModalAlumnos {
  alumno: any;
}

export default function ModalAlumnos({ alumno }: ModalAlumnos) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const { cursos, isLoading, error } = useFetchCursos();
  const { guardarAnotaciones } = useAnotaciones();
  const { handleGradoChange, assignGrado, selectedGrado, assignmentResult } = useAssignGrado(
    alumno,
    cursos
  );
  console.log(alumno.Email);
  const { enviarAcuerdoInstitucional, loading } = useEnviarAcuerdoInstitucional();

  //importante aunque enviarEmailCurso no esta siendo llamado, funciona con los argumentos que se le pasan al custom hook
  const { enviarEmailCurso } = useSendEmailCurso(alumno.Email, assignmentResult);
  //no borrar el hook de la linea 29 aunque no este siendo llamado, se ejectuta automaticamente

  const [anotaciones, setAnotaciones] = React.useState("");

  const propiedadesMostrar = [
    "Nombre",
    "Apellido",
    "Email",
    "Tipo",
    "Dni",
    "frida016",
    "NombreAdulto",
    "ApellidoAdulto",
    "EmailAdulto",
    "TelefonoAdulto",
    "NombreAdulto2",
    "ApellidoAdulto2",
    "EmailAdulto2",
    "TelefonoAdulto2",
  ];

  useEffect(() => {
    if (isOpen && alumno && alumno.Anotaciones) {
      setAnotaciones(alumno.Anotaciones);
    }
  }, [isOpen, alumno]);

  const handleGuardarAnotaciones = () => {
    guardarAnotaciones(alumno.ID, anotaciones);
  };

  console.log(alumno);

  const renderSelect = () => {
    return (
      <div className="flex flex-col gap-4 hover:cursor-move">
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

  const handleEnviarAcuerdo = () => {
    if (alumno && alumno.EmailAdulto) {
      enviarAcuerdoInstitucional(alumno.EmailAdulto);
    } else if (!alumno.EmailAdulto) {
      enviarAcuerdoInstitucional(alumno.Email);
      // Manejar el caso en el que no haya un correo electrónico del adulto responsable definido en el alumno
    } else {
      console.error("Correo del alumno o adulto responsable no encontrado");
    }
  };

  return (
    <>
      <button color="primary" title="Detalles alumno" onClick={onOpen}>
        <EditIcon size={20} fill="#979797" />
      </button>
      <Draggable>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          classNames={{
            body: "py-6 max-h-[90vh] overflow-y-auto",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#19172c]  text-[#a8b0d3]",
            header: "border-b-[1px] border-[#292f46]",
            footer: "border-t-[1px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <Toaster richColors position="top-center" expand={true} closeButton={true} />
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 cursor-move">
                  Resumen {alumno.Nombre} {alumno.Apellido}
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-2 gap-2 max-h-40 p-2 border rounded-xl overflow-y-scroll">
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
                <ModalFooter className="w-full flex justify-between">
                  <Button color="secondary" variant="light" onPress={handleEnviarAcuerdo}>
                    Enviar Acuerdo Institucional
                  </Button>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Draggable>
    </>
  );
}
