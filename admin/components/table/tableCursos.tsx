import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Toaster } from "sonner";
import { columnsCursos } from "./data";
import { RenderCell } from "./render-cell-cursos";
import LoadingError from "../loadingerror";
import { Curso } from "../(...)/cursos";
import Draggable from "react-draggable";

interface CursoTableProps {
  cursos: Curso[];
  isLoading: boolean;
  error: any;
}

export const TableWrapper = ({ cursos, isLoading, error }: CursoTableProps) => {
  if (isLoading || error) {
    return <LoadingError isLoading={isLoading} error={error} />;
  }

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />
      <Draggable>
        <Table aria-label="Tabla de cursos">
          <TableHeader columns={columnsCursos}>
            {(column: any) => (
              <TableColumn
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={cursos}>
            {(item: any) => (
              <TableRow key={item.ID}>
                {(columnKey: any) => (
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
      </Draggable>
    </div>
  );
};
