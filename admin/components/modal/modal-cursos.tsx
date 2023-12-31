import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { TableWrapperModalCurso } from "../table/tablemodalcursos";
import useFetchUsuariosByCursos from "../hooks/useFetchUsuariosByCursos";
import Image from "next/image";
import spinner from "./../../public/spinner/Spinner.gif";
import LoadingError from "../loadingerror";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  curso: any;
}

const ModalCurso = ({ isOpen, onOpenChange, curso }: Props) => {
  const { usuarios, loading, error } = useFetchUsuariosByCursos(isOpen, curso);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Image src={spinner} alt="Cargando..." />
      </div>
    );
  }

  if (error) {
    return <p>Ocurrió un error al cargar los usuarios: {error.message}</p>;
  }

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      size="3xl"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <Toaster richColors position="top-center" expand={true} closeButton={true} />
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Resumen</ModalHeader>

            <ModalBody>
              <LoadingError isLoading={loading} error={error} />
              {!loading && !error && <TableWrapperModalCurso users={usuarios} />}
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
  );
};

export default ModalCurso;
