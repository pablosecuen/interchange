import { User, Tooltip, Chip, Button } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";

interface Props {
  user: any;
  columnKey: string | React.Key;
  handleUserClick: (user: any) => void;
  onOpen?: () => void;
  handleAlumnoClick: (user: any) => void;
}

// En el componente RenderCell

export const RenderCell = ({ user, columnKey, handleUserClick, handleAlumnoClick }: Props) => {
  const getCourseInfo = () => {
    if (columnKey === "Grado_Categoria") {
      return user?.Grado?.[0]?.Grado_Categoria || "Sin información";
    }
    if (columnKey === "Grado_Nombre") {
      return user?.Grado?.[0]?.Grado_Nombre || "Sin información";
    }
    return "";
  };

  const cellValue = user[columnKey];
  const columnValue =
    columnKey === "Grado_Categoria" || columnKey === "Grado_Nombre" ? getCourseInfo() : cellValue;

  switch (columnKey) {
    case "Nombre":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={cellValue}
        >
          {user.Email}
        </User>
      );
    case "cuota":
      return (
        <div className="z-50 cursor-pointer">
          <button onClick={() => handleUserClick(user)}>
            <EyeIcon size={20} fill="#979797" />
          </button>
        </div>
      );
    case "Activo":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={cellValue === true ? "success" : cellValue === false ? "danger" : "warning"}
        >
          <span className="capitalize text-xs">
            {" "}
            {cellValue === true ? "Activo" : cellValue === false ? "Borrado" : "Sin estado"}
          </span>
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div onClick={() => handleAlumnoClick(user)}>
            <Tooltip content="Details">
              <button onClick={() => handleAlumnoClick(user)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Edit user" color="secondary">
              <button onClick={() => console.log(user)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Delete user" color="danger">
              <button onClick={() => console.log("Delete user", user.ID)}>
                <DeleteIcon size={20} fill="#FF0080" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return <span>{columnValue}</span>;
  }
};
