import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { ExportIcon } from "../../icons/accounts/export-icon";
import { HouseIcon } from "../../icons/breadcrumb/house-icon";
import { UsersIcon } from "../../icons/breadcrumb/users-icon";
import { TableWrapper } from "../../table/table";
import { AddUser } from "./add-user";
import useFetchUsers from "../../hooks/useFetchUsers";
import * as XLSX from "xlsx";

export const Alumnos = () => {
  const { users, isLoading, error } = useFetchUsers();
  console.log("users", users);

  const [userFilter, setUserFilter] = useState<string>("");

  const filteredUsers = users.filter((user) => {
    const { Nombre, Apellido, Telefono, Email } = user;
    const searchLowerCase = userFilter.toLowerCase();

    const match =
      Nombre.toLowerCase().includes(searchLowerCase) ||
      Apellido.toLowerCase().includes(searchLowerCase) ||
      Telefono.toLowerCase().includes(searchLowerCase) ||
      Email.toLowerCase().includes(searchLowerCase) ||
      Telefono.toLowerCase().includes(searchLowerCase);

    return match;
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredUsers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Alumnos");
    XLSX.writeFile(workbook, "alumnos.xlsx");
  };

  return (
    <div className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Alumnos</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los Alumnos</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Buscar alumnos"
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddUser />
          <Button color="primary" startContent={<ExportIcon />} onPress={exportToExcel}>
            Exportar a Excel
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper users={filteredUsers} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};
