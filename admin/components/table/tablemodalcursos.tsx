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
import React, { useState } from "react";
import { columnsModalCursosAlumnos } from "./data";
import { RenderCell } from "./render-cell";
import ModalCuotas from "../modal/modal-cuotas";
import ModalAlumnos from "../modal/modal-alumnos";
import { Toaster } from "sonner";

export const TableWrapperModalCurso = ({ users }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(null);

  const {
    isOpen: isOpenAlumnos,
    onOpen: onOpenAlumnos,
    onOpenChange: onOpenChangeAlumnos,
  } = useDisclosure();

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    onOpenChange();
  };

  const handleAlumnoClick = (user: any) => {
    setSelectedUser(user);
    onOpenAlumnos();
  };

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} />
      <Table aria-label="Tabla de usuarios">
        <TableHeader columns={columnsModalCursosAlumnos}>
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
        <TableBody items={users}>
          {(item: any) => (
            <TableRow key={item.ID}>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({
                    user: item,
                    columnKey: columnKey,
                    onOpen: onOpen,
                    handleAlumnoClick: handleAlumnoClick,
                    handleUserClick: handleUserClick,
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedUser && (
        <>
          <ModalCuotas user={selectedUser} onOpenChange={onOpenChange} isOpen={isOpen} />
          <ModalAlumnos
            alumno={selectedUser}
            onOpenChange={onOpenChangeAlumnos}
            isOpen={isOpenAlumnos}
          />
        </>
      )}
    </div>
  );
};
