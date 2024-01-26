import React, { useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Content } from "../hooks/useFetchContent";
import useEditContent from "../hooks/useEditContent";
import useFetchCursos from "../hooks/useFetchCursos";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { Curso } from "../(...)/cursos";

interface EditContentModalProps {
  content: Content;
}

const EditContentModal: React.FC<EditContentModalProps> = ({ content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { editedContent, setEditedContent, loading, error, editContent } = useEditContent(content);

  const { cursos, isLoading, error: cursosError } = useFetchCursos();

  useEffect(() => {
    setEditedContent(content);
  }, [content, setEditedContent]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setEditedContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditedContent((prevContent) => ({
      ...prevContent,
      Link: value.split(",").map((link) => link.trim()),
    }));
  };

  const handleEditSubmit = async () => {
    await editContent();
    onClose();
  };

  return (
    <>
      <button onClick={onOpen} title="Editar contentido">
        <EditIcon size={20} fill="#979797" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Editar Contenido</ModalHeader>
          <ModalBody>
            <label>Titulo:</label>
            <Input type="text" name="Title" value={editedContent.Title} onChange={handleChange} />

            <label>Descripcion:</label>
            <Input
              type="text"
              name="Description"
              value={editedContent.Description}
              onChange={handleChange}
            />

            <label>Links (comma-separated):</label>
            <Input
              type="text"
              name="Link"
              value={editedContent.Link.join(",")}
              onChange={handleLinkChange}
            />

            <label>Tipo:</label>
            <Select name="Tipo" value={editedContent.Tipo} onChange={handleChange}>
              <SelectItem key="" value="">
                Elije un tipo de contenido
              </SelectItem>
              <SelectItem key="Audio" value="Audio">
                Audio
              </SelectItem>
              <SelectItem key="Video" value="Video">
                Video
              </SelectItem>
            </Select>

            <label>Curso:</label>
            <Select name="Grado_ID" value={editedContent.Grado_ID} onChange={handleChange}>
              {isLoading ? (
                <option value="" disabled>
                  Cargando cursos...
                </option>
              ) : cursosError ? (
                <option value="" disabled>
                  Error al cargar cursos
                </option>
              ) : (
                cursos.map((curso: Curso) => (
                  <SelectItem key={curso.ID} value={curso.ID}>
                    {`${curso.Grado_Categoria} ${curso.Grado_Nombre}`}
                  </SelectItem>
                ))
              )}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onClick={onClose}>
              Cerrar
            </Button>
            <Button color="primary" onPress={handleEditSubmit} disabled={loading}>
              {loading ? "Editando..." : "Editar"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditContentModal;
