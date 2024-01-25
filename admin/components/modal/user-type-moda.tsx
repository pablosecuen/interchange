import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import useUserType from "../hooks/useUserType"; // Ajusta la ruta según la ubicación real de tu hook
import { User } from "../../pages/login";
import { EditIcon } from "../icons/table/edit-icon";

interface UserTypeModalProps {
  alumno: User; // Ajusta según la interfaz real de tu objeto Alumno
}

const UserTypeModal: React.FC<UserTypeModalProps> = ({ alumno }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedType, setSelectedType] = useState<string>(alumno.tipo || "alumno");
  const { setUserType, updateUserType } = useUserType(selectedType);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedType(value);
    setUserType(value);
  };

  const handleSubmit = async () => {
    await updateUserType(alumno.ID, selectedType);
  };

  return (
    <>
      <button onClick={onOpen}>
        <EditIcon size={20} fill="#979797" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cambiar Tipo de Usuario</ModalHeader>
              <ModalBody>
                <label>Tipo:</label>
                <select value={selectedType} onChange={handleTypeChange}>
                  <option value="alumno">Alumno</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onClick={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Cambiar Tipo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserTypeModal;
