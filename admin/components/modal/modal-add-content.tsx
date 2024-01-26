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
import React, { useEffect } from "react";
import useFetchCursos, { Curso } from "../hooks/useFetchCursos";
import useCreateContent from "../hooks/useCreateContent";

import { useRouter } from "next/navigation";

interface CampusData {
  Title: string;
  Description: string;
  Link: string[];
  Tipo: string;
  Grado_ID: string;
}

const AddContent = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    newContent,
    setNewContent,
    loading,
    error: errorContent,
    createContent,
  } = useCreateContent();
  const { cursos, isLoading, error } = useFetchCursos();

  useEffect(() => {
    const selectedCurso = cursos.find((curso) => String(curso.ID) === newContent.Grado_ID);

    setNewContent((prevContent) => ({
      ...prevContent,
      Grado_Nombre: selectedCurso?.Grado_Nombre || "",
      Grado_Categoria: selectedCurso?.Grado_Categoria || "",
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newContent.Grado_ID, cursos]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setNewContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewContent((prevContent) => ({
      ...prevContent,
      Link: value.split(",").map((link) => link.trim()),
    }));
  };

  const handleSubmit = async () => {
    await createContent();
    router.refresh();
    onClose();
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Subir Contenido
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Nuevo Contenido</ModalHeader>
              <ModalBody>
                <label>Titulo:</label>
                <Input type="text" name="Title" value={newContent.Title} onChange={handleChange} />

                <label>Descripcion:</label>
                <Input
                  type="text"
                  name="Description"
                  value={newContent.Description}
                  onChange={handleChange}
                />

                <label>Links (comma-separated):</label>
                <Input
                  type="text"
                  name="Link"
                  value={newContent.Link.join(",")}
                  onChange={handleLinkChange}
                />

                <label>Tipo:</label>
                <Select name="Tipo" value={newContent.Tipo} onChange={handleChange}>
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
                <Select name="Grado_ID" value={newContent.Grado_ID} onChange={handleChange}>
                  {isLoading ? (
                    <option value="" disabled>
                      Cargando cursos...
                    </option>
                  ) : error ? (
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
                <Button color="primary" onPress={handleSubmit} disabled={loading}>
                  {loading ? "Creando..." : "Crear"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddContent;
