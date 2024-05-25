import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ModalContent,
  Table,
  TableColumn,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React from "react";
import { Nota } from "../hooks/useChangeNotas";
import ModalTrimestres from "../modal/moda-trimestres";
import Draggable from "react-draggable";

interface TableWrapperNotasProps {
  alumno: {
    Nombre: string;
    Apellido: string;
    RegistroNotas: Nota[];
    ID: string;
  };
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
}

const TableWrapperNotas = ({ alumno, onOpenChange, isOpen }: TableWrapperNotasProps) => {
  console.log(alumno);
  return (
    <>
      <Draggable>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          radius="lg"
          size="2xl"
          classNames={{
            wrapper: "",
            body: "py-6 ",
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
                <ModalHeader>
                  Notas de {alumno.Nombre} {alumno.Apellido}
                </ModalHeader>
                <ModalBody>
                  <Table aria-label="Tabla de notas">
                    <TableHeader>
                      <TableColumn>Grado</TableColumn>
                      <TableColumn>Trimestre</TableColumn>
                      <TableColumn>Examen Final</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {alumno.RegistroNotas.map((registro, index) => (
                        <TableRow key={index}>
                          <TableCell>{registro.notas.grado}</TableCell>
                          <TableCell className="flex">
                            {registro.notas.trimestres.map((trimestre: any, idx: number) => (
                              <div key={idx}>
                                <ModalTrimestres trimestre={trimestre} />
                              </div>
                            ))}
                          </TableCell>

                          <TableCell>{registro.notas.examenFinal}</TableCell>
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
      </Draggable>
    </>
  );
};

export default TableWrapperNotas;
