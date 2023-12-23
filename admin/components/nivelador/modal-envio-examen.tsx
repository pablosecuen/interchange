import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableCell,
  TableRow,
} from "@nextui-org/react";
import { Exam } from "./crear-examen";
import useFetchUsers, { User } from "../hooks/useFetchUsers";
import { Toaster, toast } from "sonner";
import Image from "next/image";
import spinner from "../../public/spinner/Spinner.gif";
interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;

  examen: Exam;
}

const ModalEnvioExamen: React.FC<Props> = ({ isOpen, onOpenChange, examen }) => {
  const { users, isLoading, error } = useFetchUsers();
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Image src={spinner} alt="Cargando..." />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSelectUser = async (user: User) => {
    setSelectedUser(user);
    try {
      // Lógica para enviar el examen al usuario seleccionado
      const response = await fetch(`http://localhost:3001/api/examen/enviar-examen`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.ID,
          examenId: examen.ID,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el examen al usuario");
      }
      if ((response.ok && response.status === 202) || response.status === 200) {
        toast.success("Examen enviado al usuario exitosamente");
      }

      // Aquí puedes manejar la lógica adicional después de enviar el examen, si es necesario
    } catch (error) {
      toast.error("Error al enviar el examen");
      console.error("Error al enviar el examen:", error);
      // Aquí puedes manejar el error de manera apropiada, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="2xl"
      radius="lg"
      classNames={{
        body: "py-6 max-h-[80vh] overflow-y-auto",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] ",
        header: "border-b-[1px] border-[#292f46] ",
        footer: "border-t-[1px] border-[#292f46] ",
        closeButton: "hover:bg-white/5 active:bg-white/10 ",
      }}
    >
      <Toaster richColors position="top-center" />
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Seleccionar Usuario</ModalHeader>
            <ModalBody>
              <Table aria-label="Tabla de usuarios">
                <TableHeader>
                  <TableColumn>Nombre</TableColumn>
                  <TableColumn>Email</TableColumn>
                  <TableColumn>Acción</TableColumn>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {user.Nombre} {user.Apellido}
                      </TableCell>
                      <TableCell>{user.Email}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          color="success"
                          variant="light"
                          onClick={() => {
                            // Lógica para seleccionar el usuario y cerrar el modal
                            handleSelectUser;
                            onClose();
                          }}
                          className="max-h-[80vh] overflow-y-auto"
                        >
                          Enviar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalEnvioExamen;
