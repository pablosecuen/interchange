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
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-500 dark:bg-gray-700 text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Trimestre
            </th>
            {categorias.map((categoria, index) => (
              <th key={index} className="px-6 py-3">
                {categoria}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {notas.map((trimestre: any, index: number) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-200"
              } border-b dark:border-gray-700`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {`${trimestre.trimestre} Trimestre`}
              </td>
              {categorias.map((categoria, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {trimestre[categoria]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotasTable;
