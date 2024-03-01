import { User, Tooltip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";

interface Props {
  examenCompletado: any;
  columnKey: string | React.Key;
  mostrarDetalleExamenResultado: (arg0: any) => void;
}

export const RenderCellExamCompleted = ({
  examenCompletado,
  columnKey,
  mostrarDetalleExamenResultado,
}: Props) => {
  // @ts-ignore

  const cellValue = examenCompletado[columnKey];
  switch (columnKey) {
    case "Nombre":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={cellValue}
        >
          {examenCompletado.Email}
        </User>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => mostrarDetalleExamenResultado(examenCompletado)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Editar examenCompletado" color="secondary">
              <button onClick={() => console.log(examenCompletado)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Borrar examenCompletado" color="danger">
              <button onClick={() => console.log("Delete examenCompletado", examenCompletado.ID)}>
                <DeleteIcon size={20} fill="#FF0080" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
