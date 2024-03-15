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
  const { guardarAnotaciones } = useAnotaciones();
  /* "este array evita hacer una llamada a la api para traer los cursos" */
  const cursos = [
    {
      Grado_Categoria: "Adults",
      Grado_Nombre: "1",
      ID: "13ab7d84-2fde-4145-8b02-c3dd6295c6ce",
    },
    {
      Grado_Categoria: "Adults",
      Grado_Nombre: "5",
      ID: "d9084b35-239f-40e0-8bc5-75797f6f692c",
    },
    {
      Grado_Categoria: "Adults",
      Grado_Nombre: "6",
      ID: "50001250-ae62-4aeb-95c2-ffd1ced03e0c",
    },
    {
      Grado_Categoria: "Kids",
      Grado_Nombre: "1",
      ID: "b51211a7-e908-497f-94ff-f5ec84b4552d",
    },
    {
      Grado_Categoria: "Pre Kids",
      Grado_Nombre: "1",
      ID: "53d141dd-bc3f-4a1d-be1c-a7127870094f",
    },
    {
      Grado_Categoria: "Adols",
      Grado_Nombre: "1",
      ID: "6e7faff7-b31c-4965-8b88-40343f351255",
    },
    {
      Grado_Categoria: "Kids",
      Grado_Nombre: "2",
      ID: "864149a5-5a13-49e9-a2d2-d216f570299d",
    },
    {
      Grado_Categoria: "Adols",
      Grado_Nombre: "2",
      ID: "c7728723-d294-4cd6-aef5-6db4821fcc35",
    },
    {
      Grado_Categoria: "Kids",
      Grado_Nombre: "5",
      ID: "5fe234b2-7599-4b9f-8f49-e85eef7ebd89",
    },
    {
      Grado_Categoria: "Beginners",
      Grado_Nombre: "1",
      ID: "5b477837-27a6-42c9-a924-7d4089167d08",
    },
    {
      Grado_Categoria: "Adults",
      Grado_Nombre: "3",
      ID: "e1323d31-6b2c-4c19-84ee-a3edbd8c0c23",
    },
    {
      Grado_Categoria: "Kids",
      Grado_Nombre: "3",
      ID: "ba9a9aa6-fcee-4c65-805d-d76d6f36e25e",
    },
    {
      Grado_Categoria: "Adols",
      Grado_Nombre: "3",
      ID: "781bc89b-0c56-4d6f-a197-70d8e725e2dd",
    },
    {
      Grado_Categoria: "Starters",
      Grado_Nombre: "1",
      ID: "a9df5298-05a6-401e-ad90-5a69d5d79322",
    },
    {
      Grado_Categoria: "Adults",
      Grado_Nombre: "4",
      ID: "fbfeee91-d60c-447d-8688-af1ba5d96899",
    },
    {
      Grado_Categoria: "Kids",
      Grado_Nombre: "4",
      ID: "e736a06b-6c54-45de-ae13-4fcd52348e1a",
    },
    {
      Grado_Categoria: "F C E",
      Grado_Nombre: "1",
      ID: "e32435ed-d9b2-4ec6-b351-915713d10243",
    },
    {
      Grado_Categoria: "Adols",
      Grado_Nombre: "6",
      ID: "b356d17f-dab8-4de4-bcef-64f1bc8f5a38",
    },
    {
      Grado_Categoria: "Adols",
      Grado_Nombre: "5",
      ID: "57c1f97e-3e08-47f7-b4f9-accf0ce354b7",
    },
    {
      Grado_Categoria: "Adols",
      Grado_Nombre: "4",
      ID: "b44f83dd-706b-4fea-8f4a-eb59714e91e8",
    },
    {
      Grado_Categoria: "Adults",
      Grado_Nombre: "2",
      ID: "f9bf8d36-b938-45a1-89eb-3d6563ba5432",
    },
  ];
  /* "este array evita hacer una llamada a la api para traer los cursos" */
  const { handleGradoChange, assignGrado, selectedGrado, assignmentResult } = useAssignGrado(
    alumno,
    cursos
  );

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
    "NombreAdulto",
    "ApellidoAdulto",
    "EmailAdulto",
    "TelefonoAdulto",
    "NombreAdulto2",
    "ApellidoAdulto2",
    "EmailAdulto2",
    "TelefonoAdulto2",
    "Password",
  ];

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
      <div className="flex flex-col gap-4 hover:cursor-move">
        <div className="flex flex-col">
          {alumno && alumno.Grado && alumno.Grado.length > 0 ? (
            <>
              <p className="font-bold">Grado asignado:</p>
              <p>{`${alumno.Grado.Grado_Nombre} - ${alumno.Grado.Grado_Categoria}`}</p>
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
          size="xl"
          classNames={{
            body: "py-6 max-h-[89vh] overflow-y-auto",
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
                  <div className="grid grid-cols-2 gap-2 min-h-52 max-h-52 p-2 border rounded-xl overflow-y-scroll">
                    {propiedadesMostrar.map((propiedad, index) => {
                      if (
                        alumno[propiedad] !== null &&
                        alumno[propiedad] !== undefined &&
                        alumno[propiedad].length > 0
                      ) {
                        return (
                          <li className="flex flex-col gap-2 mb-4" key={index}>
                            <strong>{propiedad}: </strong>
                            {propiedad === "Grado_Nombre" || propiedad === "Grado_Categoria"
                              ? alumno.Grado.length > 0
                                ? alumno.Grado[propiedad.replace("Grado_", "")]
                                : "Valor no definido ou nulo"
                              : alumno[propiedad]}
                          </li>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="font-bold tracking-wider  underline ">Anotaciones:</p>
                    <textarea
                      value={anotaciones}
                      onChange={(e) => setAnotaciones(e.target.value)}
                      rows={6}
                      cols={40}
                      className="p-4 bg-[#19172c] border-2 border-white/40 rounded-2xl max-h-64"
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
