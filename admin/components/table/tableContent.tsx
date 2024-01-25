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
import { RenderCell } from "./render-cell-content";
import { Toaster } from "sonner";
import LoadingError from "../loadingerror";

interface tableContentProps {
  content: Content[];
  isLoading: boolean;
  error: any;
}

interface Content {
  Title: string;
  Link: string;
  Description: string;
  Tipo: string;
}
export const TableWrapperContent = ({ content, isLoading, error }: tableContentProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

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
        <TableBody items={content}>
          {(item: any) => (
            <TableRow key={item.ID}>
              {(columnKey: any) => (
                <TableCell>
                  {RenderCell({
                    content: item,
                    columnKey: columnKey,
                    onOpen: onOpen,
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
