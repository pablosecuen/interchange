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
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { Nota } from "../hooks/useChangeNotas";
import NotasTable from "../notas/notas-table";
import ModalTrimestres from "../modal/moda-trimestres";
import { EyeIcon } from "../icons/table/eye-icon";
import Draggable from "react-draggable";

interface TableWrapperNotasProps {
  alumno: {
    Nombre: string;
    Apellido: string;
    RegistroNotas: Nota[];
    ID: string;
  };
}

const TableWrapperNotas = ({ alumno }: TableWrapperNotasProps) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} title="Ver notas">
        <EyeIcon size={20} fill="#979797" />
      </button>
      <Draggable>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          radius="lg"
          size="xl"
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
                          <TableCell className="flex flex-wrap">
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
