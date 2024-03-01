import {
  Modal,
  ModalContent,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import { ExamResults } from "../../hooks/useGetCompletedExams";
import * as XLSX from "xlsx";
import Draggable from "react-draggable";

interface ExamenModalProps {
  isopen: boolean;
  openchange: (value: boolean) => void;
  examen: ExamResults | null;
}

const ExamenModalResultados: React.FC<ExamenModalProps> = ({ isopen, examen, openchange }) => {
  if (!examen) return null;

  const exportToExcel = () => {
    // Crear un array para contener todas las filas desenrolladas
    const flattenedData: any[] = [];

    // Iterar sobre los exámenes completados

    const { userID, respuestas, nota, examenTitle, userName, userEmail, titulo } = examen;

    // Iterar sobre las respuestas de cada examen
    respuestas.forEach((respuesta) => {
      const { enunciado, respuestaUsuario, respuestaCorrecta } = respuesta;

      // Crear una nueva fila para cada respuesta
      const rowData = {
        titulo,
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
    // Crear la hoja de cálculo y exportar a Excel
    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Examenes");
    XLSX.writeFile(workbook, "examenes.xlsx");
  };

  return (
    <Draggable>
      <Modal
        backdrop="opaque"
        isOpen={isopen}
        onOpenChange={openchange}
        radius="lg"
        size="5xl"
        classNames={{
          body: "py-6 max-h-[70vh] overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c]  text-[#a8b0d3] ",
          header: "border-b-[1px] border-[#292f46] ",
          footer: "border-t-[1px] border-[#292f46] ",
          closeButton: "hover:bg-white/5 active:bg-white/10 ",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                <span>Titulo del examen: {examen?.examenTitle}</span>
                <span>Puntuacion del alumno: {`${examen?.nota}%`}</span>
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-center flex-wrap gap-8">
                  {" "}
                  {examen?.respuestas?.map((pregunta, index) => (
                    <div key={`pregunta-${index}`} className="border w-96 rounded-3xl p-8 relative">
                      <span className="absolute top-2 right-4 border rounded-full w-6 text-center ">
                        {index}
                      </span>
                      <p className="uppercase border-b border-white/30 pb-2 mb-2">
                        {pregunta.enunciado}
                      </p>
                      <p className="uppercase border-b border-white/30 pb-2 mb-2">
                        Respuesta Alumno: {pregunta.respuestaUsuario}
                      </p>
                      <p className="uppercase border-b border-white/30 pb-2 mb-2 text-green-400">
                        Respuesta Correcta: {pregunta.respuestaCorrecta}
                      </p>
                      <div className="flex">
                        {/*     <ul>
                          {pregunta.respuestaUsuario.map((r: string, index: any) => (
                            <li key={index}>{r}</li>
                          ))}
                          <p className="pt-4 text-green-600">{pregunta.respuestaCorrecta}</p>
                        </ul> */}
                      </div>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="light" onPress={exportToExcel}>
                  exportar a excel
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
  );
};

export default ExamenModalResultados;
