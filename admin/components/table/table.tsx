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
import { columns } from "./data";
import { RenderCell } from "./render-cell";
import useFetchUsers from "../hooks/useFetchUsers";
import ModalCuotas from "../modal/modal-cuotas";
import ModalAlumnos from "../modal/modal-alumnos";
import { Toaster } from "sonner";
import Image from "next/image";
import spinner from "../../public/spinner/Spinner.gif";
import LoadingError from "../loadingerror";

export const TableWrapper = () => {
  const { users, isLoading, error } = useFetchUsers();
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

  if (isLoading || error) {
    return (
      <LoadingError isLoading={isLoading} error={error} /> // Renderizar el componente LoadingError
    );
  }

  return (
    <div className=" w-full flex flex-col gap-4">
      <Toaster richColors position="top-center" expand={true} />
      <Table aria-label="Tabla de usuarios">
        <TableHeader columns={columns}>
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
          {(item) => (
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
