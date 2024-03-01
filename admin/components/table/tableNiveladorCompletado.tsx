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
import { columnsExamscomletados } from "./data";
import { RenderCellExamCompleted } from "./render-cell-examCompleted";
import LoadingError from "../loadingerror";

interface TableWrapperExamsProps {
  mostrarDetalleExamenResultado: (arg0: any) => void;
  loadingResult: boolean;
  errorResult: any;
  completedExams: any;
}

export const TableWrapperExamsCompleted = ({
  mostrarDetalleExamenResultado,
  loadingResult,
  errorResult,
  completedExams,
}: TableWrapperExamsProps) => {
  if (loadingResult || errorResult) {
    <LoadingError isLoading={loadingResult} error={errorResult} />;
  }

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />

      <Table aria-label="Tabla de cursos">
        <TableHeader columns={columnsExamscomletados}>
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
        <TableBody items={completedExams}>
          {(item: any) => (
            <TableRow key={item.ID}>
              {(columnKey: any) => (
                <TableCell>
                  {RenderCellExamCompleted({
                    examenCompletado: item,
                    columnKey: columnKey,
                    mostrarDetalleExamenResultado: mostrarDetalleExamenResultado,
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
