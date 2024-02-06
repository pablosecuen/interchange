import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Toaster } from "sonner";
import { columnsExams } from "./data";
import useGetExams from "../hooks/useGetExams";
import { RenderCellExam } from "./render-cell-exam";
import LoadingError from "../loadingerror";
import Draggable from "react-draggable";

interface TableWrapperExamsProps {
  mostrarDetalleExamen: (arg0: any) => void;
}

export const TableWrapperExams = ({ mostrarDetalleExamen }: TableWrapperExamsProps) => {
  const { examenes, loading, error } = useGetExams();
  if (loading || error) {
    <LoadingError isLoading={loading} error={error} />;
  }

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />
      <Draggable>
        <Table aria-label="Tabla de cursos">
          <TableHeader columns={columnsExams}>
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
          <TableBody items={examenes}>
            {(item) => (
              <TableRow key={item.ID}>
                {(columnKey) => (
                  <TableCell>
                    {RenderCellExam({
                      examen: item,
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
