import {
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
import { Toaster } from "sonner";
import LoadingError from "../loadingerror";
import { User } from "../hooks/useFetchUsers";
import useDeleteUser from "../hooks/useDeleteUsuer";
import ModalCuotas from "../modal/modal-cuotas";

interface tableAlumnosProps {
  users?: User[];
  isLoading: boolean;
  error: any;
}
export const TableWrapper = ({ users, isLoading, error }: tableAlumnosProps) => {
  const { deleteUser } = useDeleteUser();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isLoading || error) {
    return <LoadingError isLoading={isLoading} error={error} />;
  }

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    onOpenChange();
  };

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
                    handleOpenModal: handleOpenModal,
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedUser && (
        <ModalCuotas user={selectedUser} onOpenChange={onOpenChange} isOpen={isOpen} />
      )}
    </div>
  );
};
