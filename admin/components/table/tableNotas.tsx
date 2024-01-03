import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ModalContent,
} from "@nextui-org/react";
import React from "react";
import { Nota } from "../hooks/useChangeNotas";

interface TableWrapperNotasProps {
  alumno: {
    Nombre: string;
    Apellido: string;
    RegistroNotas: Nota[];
  };
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

const TableWrapperNotas = ({ alumno, isOpen, onOpenChange }: TableWrapperNotasProps) => {
  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      size="2xl"
      classNames={{
        body: "py-6",
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
            <ModalHeader>
              Notas de {alumno.Nombre} {alumno.Apellido}
            </ModalHeader>
            <ModalBody>
              <Table aria-label="Tabla de notas">
                <TableHeader>
                  <TableColumn>Grado</TableColumn>
                  <TableColumn>Trimestres</TableColumn>
                  <TableColumn>Examen Final</TableColumn>
                </TableHeader>
                <TableBody>
                  {alumno.RegistroNotas &&
                    alumno.RegistroNotas.map((nota: Nota, index: number) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="w-full text-lg ">{nota.notas.grado} </div>
                        </TableCell>
                        <TableCell>
                          {nota.notas.trimestres.map((trimestre: any, idx: number) => (
                            <div key={idx} className="text-lg flex justify-start">
                              <span>Trimestre {trimestre.trimestre}:</span>{" "}
                              <span className="font-bold ml-4">{trimestre.nota}</span>
                            </div>
                          ))}
                        </TableCell>
                        <TableCell>
                          <span className="text-center w-full font-bold text-lg">
                            {nota.notas.examenFinal}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} variant="light">
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TableWrapperNotas;
