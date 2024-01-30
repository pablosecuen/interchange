import { User, Tooltip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import ExamenModal from "../(...)/nivelador/modal-examen";

interface Props {
  examen: any;
  columnKey: string | React.Key;

}

export const RenderCellExam = ({ examen, columnKey,  }: Props) => {
  // @ts-ignore

  const cellValue = examen[columnKey];
  switch (columnKey) {
    case "Nombre":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={cellValue}
        >
          {examen.Email}
        </User>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <ExamenModal examen={examen} />
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Editar curso" color="secondary">
              <button onClick={() => console.log(examen)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Borrar curso" color="danger">
              <button onClick={() => console.log("Delete curso", examen.ID)}>
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
