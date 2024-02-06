import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Content } from "../hooks/useFetchContent";
import { EyeIcon } from "../icons/table/eye-icon";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Link from "next/link";

interface ObjectDetailsModalProps {
  content: Content;
}

const ModalDetailsContent: React.FC<ObjectDetailsModalProps> = ({ content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <button color="primary" title="Ver detalles" onClick={onOpen}>
        <EyeIcon size={20} fill="#979797" />
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        placement="top-center"
        size="xl"
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
          <ModalHeader className="flex flex-col gap-1">Detalles del Objeto</ModalHeader>
          <ModalBody>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn key="1">Propiedad</TableColumn>
                <TableColumn key="2">Valor</TableColumn>
              </TableHeader>
              <TableBody>
                {Object.entries(content).map(([key, value], index) => (
                  <TableRow key={index}>
                    <TableCell>{key}</TableCell>
                    <TableCell className="flex gap-3">
                      {Array.isArray(value)
                        ? value.map((link, i) => (
                            <Link
                              key={i}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary underline-offset-2 underline"
                            >
                              Link {i + 1}
                            </Link>
                          ))
                        : value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDetailsContent;
