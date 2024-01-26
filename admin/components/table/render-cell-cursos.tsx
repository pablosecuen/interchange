import { User, Tooltip } from "@nextui-org/react";
import React from "react";

import ModalCurso from "../modal/modal-cursos";

interface Props {
  curso: any;
  columnKey: string | React.Key;
}

export const RenderCell = ({ curso, columnKey }: Props) => {
  // @ts-ignore

  const cellValue = curso[columnKey];
  switch (columnKey) {
    case "Nombre":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={cellValue}
        >
          {curso.Email}
        </User>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <ModalCurso curso={curso} />
        </div>
      );
    default:
      return cellValue;
  }
};
