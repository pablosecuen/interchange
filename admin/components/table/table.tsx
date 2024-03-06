import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React from "react";
import { columns } from "./data";
import { RenderCell } from "./render-cell";
import { Toaster } from "sonner";
import LoadingError from "../loadingerror";
import { User } from "../hooks/useFetchUsers";
import useDeleteUser from "../hooks/useDeleteUsuer";


interface tableAlumnosProps {
  users: User[];
  isLoading: boolean;
  error: any;
}
export const TableWrapper = ({ users, isLoading, error }: tableAlumnosProps) => {
  const { deleteUser } = useDeleteUser();
  if (isLoading || error) {
    return <LoadingError isLoading={isLoading} error={error} />;
  }

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />

      <Table aria-label="Tabla de usuarios">
        <TableHeader columns={columns}>
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
        <TableBody items={users}>
          {(item: any) => (
            <TableRow key={item.ID}>
              {(columnKey: any) => (
                <TableCell>
                  {RenderCell({
                    user: item,
                    columnKey: columnKey,
                    deleteUser: deleteUser,
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
