import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { ExportIcon } from "../../icons/accounts/export-icon";
import { HouseIcon } from "../../icons/breadcrumb/house-icon";
import { UsersIcon } from "../../icons/breadcrumb/users-icon";
import { TableWrapper } from "../../table/tableCursos";
import useFetchCursos from "../../hooks/useFetchCursos";
import * as XLSX from "xlsx";

export interface Curso {
  ID: number;
  Grado_Nombre: string;
  Grado_Categoria: string;
}

export const Cursos = () => {
  const { cursos, isLoading, error } = useFetchCursos();

  const [cursoFilter, setCursoFilter] = useState<string>("");

  const filteredCursos = cursos.filter((curso) => {
    const { Grado_Nombre, Grado_Categoria } = curso;
    const searchLowerCase = cursoFilter.toLowerCase();

    const match =
      Grado_Nombre.toLowerCase().includes(searchLowerCase) ||
      Grado_Categoria.toLowerCase().includes(searchLowerCase);

    return match;
  });

  const sortedCursos = filteredCursos.slice().sort((a, b) => {
    return a.Grado_Categoria.localeCompare(b.Grado_Categoria);
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredCursos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Grados");
    XLSX.writeFile(workbook, "cursos.xlsx");
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
          <span>Cursos</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los Cursos</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Buscar grados"
            value={cursoFilter}
            onChange={(e: any) => setCursoFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          {/*     <AddUser /> */}
          <Button color="primary" startContent={<ExportIcon />} onPress={exportToExcel}>
            Exportar a Excel
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper cursos={sortedCursos} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};
