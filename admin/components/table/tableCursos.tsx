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

export const TableWrapper = () => {
  const { cursos: Cursos, isLoading, error } = useFetchCursos();

  if (isLoading) {
    return <p>Cargando cursos...</p>;
  }

  if (error) {
    const errorMessage = typeof error === "string" ? error : "Error desconocido";
    return <p>Error al cargar cursos: {errorMessage}</p>;
  }

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" />
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
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
