import { Table } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { columns } from "./data";
import { RenderCell } from "./render-cell";
import useFetchUsers from "../hooks/useFetchUsers";

export const TableWrapper = () => {
  const { users, isLoading, error } = useFetchUsers(); // Obtenemos los usuarios del hook

  if (isLoading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    const errorMessage = typeof error === "string" ? error : "Error desconocido";
    return <p>Error al cargar usuarios: {errorMessage}</p>;
  }

  return (
    <Box
      css={{
        "& .nextui-table-container": {
          boxShadow: "none",
        },
      }}
    >
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
          boxShadow: "none",
          width: "100%",
          px: 0,
        }}
        selectionMode="multiple"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item) => (
            <Table.Row key={item.ID}>
              {/* Asignando una clave única a cada fila */}
              {columns.map((column) => (
                <Table.Cell key={`${item.ID}-${column.uid}`}>
                  {/* Asignando una clave única a cada celda */}
                  {RenderCell({ user: item, columnKey: column.uid })}
                </Table.Cell>
              ))}
            </Table.Row>
          )}
        </Table.Body>

        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={8}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </Box>
  );
};
