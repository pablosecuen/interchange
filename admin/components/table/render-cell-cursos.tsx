import { User, Tooltip, Chip, Button } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";

interface Props {
  curso: any;
  columnKey: string | React.Key;
}

export const RenderCell = ({ curso, columnKey }: Props) => {
  // @ts-ignore
  console.log(curso);

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
          <div onClick={() => console.log(curso)}>
            <Tooltip content="Details">
              <button onClick={() => console.log(curso)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Editar curso" color="secondary">
              <button onClick={() => console.log(curso)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Borrar curso" color="danger">
              <button onClick={() => console.log("Delete curso", curso.ID)}>
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
