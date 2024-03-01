import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React from "react";

interface NotasTableProps {
  curso: any;
  notas: any;
}

const NotasTable = ({ curso, notas }: NotasTableProps) => {


  const categorias = Object.keys(notas[0]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <h2 className="text-2xl uppercase tracking-widest font-bold text-center pb-8">{`Curso ${curso}`}</h2>
      <Table isStriped>
        <TableHeader>
          {categorias.map((categoria, index) => (
            <TableColumn key={index} className="px-6 py-3">
              {categoria}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {notas.map((trimestre: any, index: number) => (
            <TableRow key={index}>
              {/*         <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {`${trimestre.trimestre} Trimestre`}
              </td> */}
              {categorias.map((categoria, colIndex) => (
                <TableCell key={colIndex} className="px-6 py-4">
                  {trimestre[categoria]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NotasTable;
