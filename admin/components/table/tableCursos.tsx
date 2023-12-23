import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { Toaster } from "sonner";
import { columnsCursos } from "./data";
import useFetchCursos from "../hooks/useFetchCursos";
import { RenderCell } from "./render-cell-cursos";
import { useState } from "react";
import ModalCurso from "../modal/modal-cursos";
import Image from "next/image";
import spinner from "../../public/spinner/Spinner.gif";

export const TableWrapper = () => {
  const { cursos: Cursos, isLoading, error } = useFetchCursos();
  const [selectedCurso, setSelectedCurso] = useState(null);
  const { isOpen, onOpenChange } = useDisclosure();

  const handleSelectCurso = (curso: any) => {
    setSelectedCurso(curso);
    onOpenChange();
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Image src={spinner} alt="Cargando..." />
      </div>
    );
  }

  if (error) {
    const errorMessage = typeof error === "string" ? error : "Error desconocido";
    return <p>Error al cargar cursos: {errorMessage}</p>;
  }

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} />
      <Table aria-label="Tabla de cursos">
        <TableHeader columns={columnsCursos}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={Cursos}>
          {(item) => (
            <TableRow key={item.ID}>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({
                    curso: item,
                    columnKey: columnKey,
                    handleSelectCurso: handleSelectCurso,
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedCurso && (
        <ModalCurso curso={selectedCurso} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
    </div>
  );
};
