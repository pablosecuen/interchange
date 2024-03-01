import {
  Modal,
  ModalContent,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Exam } from "./crear-examen";
import ModalEnvioExamen from "./modal-envio-examen";
import { EyeIcon } from "../../icons/table/eye-icon";
import Draggable from "react-draggable";

interface ExamenModalProps {
  examen: Exam | null;
}

const ExamenModal: React.FC<ExamenModalProps> = ({ examen }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  if (!examen) return null;

  return (
    <>
      <button color="primary" title="Ver detalles" onClick={onOpen}>
        <EyeIcon size={20} fill="#979797" />
      </button>
      <Draggable>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          size="4xl"
          classNames={{
            body: "py-6 max-h-[70vh] overflow-y-auto ",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "  text-[#a8b0d3] ",
            header: "border-b-[1px] border-[#292f46] ",
            footer: "border-t-[1px] border-[#292f46] ",
            closeButton: "hover:bg-white/5 active:bg-white/10 ",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  Cuerpo del examen: {examen.titulo}
                </ModalHeader>
                <ModalBody>
                  <div className="flex justify-center flex-wrap gap-8">
                    {" "}
                    {examen.preguntas?.map((pregunta, index) => (
                      <div
                        key={`pregunta-${index}`}
                        className="border w-64 rounded-3xl p-8 relative"
                      >
                        <span className="absolute top-2 right-4 border rounded-full w-6 text-center ">
                          {index}
                        </span>
                        <div className="flex flex-col h-full">
                          <p className="uppercase border-b border-white/30 pb-2 mb-2 text-sm ">
                            {pregunta.enunciado}
                          </p>
                          <div className="flex-1">
                            <ul className="grid grid-cols-2 gap-1 text-sm h-full">
                              {pregunta.respuestas.map((r, index) => (
                                <li key={index}>
                                  {index}) {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <p className="pt-4 text-green-600">{pregunta.respuestaCorrecta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <ModalEnvioExamen examen={examen} />
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
      </Draggable>
    </>
  );
};

export default ExamenModal;
