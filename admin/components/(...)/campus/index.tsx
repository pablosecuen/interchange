import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { ExportIcon } from "../../icons/accounts/export-icon";
import { HouseIcon } from "../../icons/breadcrumb/house-icon";
import { UsersIcon } from "../../icons/breadcrumb/users-icon";
import * as XLSX from "xlsx";
import { TableWrapperContent } from "../../table/tableContent";
import useFetchContent from "../../hooks/useFetchContent";
import AddContent from "../../modal/modal-add-content";

export const Campus = () => {
  const { contentList, loading, error } = useFetchContent();
  const [contentFilter, setContentFilter] = useState<string>("");

  const filteredContent = contentList.filter((c: any) => {
    const { Title, Link, Description, Tipo } = c;
    const searchLowerCase = contentFilter.toLowerCase();

    const match =
      Title.toLowerCase().includes(searchLowerCase) ||
      Link.toLowerCase().includes(searchLowerCase) ||
      Description.toLowerCase().includes(searchLowerCase) ||
      Tipo.toLowerCase().includes(searchLowerCase);
    return match;
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredContent);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contenido");
    XLSX.writeFile(workbook, "contenido.xlsx");
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
          <span>Contenido</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los archivos</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Buscar contenido"
            value={contentFilter}
            onChange={(e) => setContentFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddContent />
          <Button color="primary" startContent={<ExportIcon />} onPress={exportToExcel}>
            Exportar a Excel
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapperContent content={filteredContent} isLoading={loading} error={error} />
      </div>
    </div>
  );
};
