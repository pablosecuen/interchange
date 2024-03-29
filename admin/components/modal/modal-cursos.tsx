import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { Toaster } from "sonner";
import { TableWrapperModalCurso } from "../table/tablemodalcursos";
import useFetchUsuariosByCursos from "../hooks/useFetchUsuariosByCursos";
import LoadingError from "../loadingerror";
import { EyeIcon } from "../icons/table/eye-icon";
import { Curso } from "../(...)/cursos";
import Draggable from "react-draggable";

interface Props {
  curso: Curso;
}

const ModalCurso = ({ curso }: Props) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const { usuarios, loading, error } = useFetchUsuariosByCursos(isOpen, curso);

  if (error) {
    return <p>Ocurrió un error al cargar los usuarios: {error.message}</p>;
  }

  return (
    <>
      <button onClick={onOpen}>
        <EyeIcon size={20} fill="#979797" />{" "}
      </button>
      <Draggable>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          size="3xl"
          classNames={{
            body: "py-6 ",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#19172c]  text-[#a8b0d3] ",
            header: "border-b-[1px] border-[#292f46] ",
            footer: "border-t-[1px] border-[#292f46] ",
            closeButton: "hover:bg-white/5 active:bg-white/10 ",
          }}
        >
          <Toaster richColors position="top-center" expand={true} closeButton={true} />
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 cursor-move">Resumen</ModalHeader>

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
      </Draggable>
    </>
  );
};

export default ModalCurso;
