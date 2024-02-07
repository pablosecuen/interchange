import React from "react";
import { Curso } from "../(...)/cursos";
import ModalCurso from "../modal/modal-cursos";

type CursoKey = "Grado_Categoria" | "Grado_Nombre" |  "actions";

interface Props {
  curso: Curso;
  columnKey: CursoKey;
}

export const RenderCell = ({ curso, columnKey }: Props) => {
  if (columnKey === "Grado_Categoria" || columnKey === "Grado_Nombre") {
    return `${curso.Grado_Categoria} - ${curso.Grado_Nombre}`
  }
   else if (columnKey === "actions") {
    return (
      <div className="flex items-center gap-4 ">
        <ModalCurso curso={curso} />
      </div>
    );
  } else {
    // Renderizar otros campos según sea necesario
    const cellValue = curso[columnKey];
    return cellValue;
  }
};
