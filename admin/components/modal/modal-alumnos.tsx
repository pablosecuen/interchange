import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  alumno: any;
}

export default function ModalAlumnos({ onOpenChange, isOpen, alumno }: Props) {
  const propiedadesMostrar = [
    "Nombre",
    "Apellido",
    "Email",
    "Tipo",
    "Grado_Nombre",
    "Grado_Categoria",
  ];
  return (
    <>
      {/*     <Button onPress={onOpen} color="secondary">
        Open Modal
      </Button> */}
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
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Resumen {alumno.Nombre} {alumno.Apellido}
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-2">
                  {propiedadesMostrar.map((key) => (
                    <div key={key} className="flex flex-col ">
                      <label className="font-bold">{key}:</label>
                      <span className="text-white mb-4">
                        {alumno[key] !== undefined && alumno[key] !== null
                          ? alumno[key].toString()
                          : "Valor no definido o nulo"}
                      </span>
                    </div>
                  ))}
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
    </>
  );
}
