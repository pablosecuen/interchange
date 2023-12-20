import {
  Modal,
  ModalContent,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { ExamResults } from "../hooks/useGetCompletedExams";

interface ExamenModalProps {
  isopen: boolean;
  openchange: (value: boolean) => void;
  examen: ExamResults | null;
}

const ExamenModalResultados: React.FC<ExamenModalProps> = ({ isopen, examen, openchange }) => {
  if (!examen) return null;
  console.log(examen);

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isopen}
        onOpenChange={openchange}
        radius="lg"
        size="5xl"
        classNames={{
          body: "py-6 max-h-[70vh] overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] ",
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
                <Button color="success" variant="light" onPress={onClose}>
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
    </>
  );
};

export default ExamenModalResultados;
