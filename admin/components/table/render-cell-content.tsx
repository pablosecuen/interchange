import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import UserTypeModal from "../modal/user-type-moda";

interface Props {
  content: any;
  columnKey: string | React.Key;
  onOpen?: () => void;
}

// En el componente RenderCell

export const RenderCell = ({ content, columnKey }: Props) => {
  const getCourseInfo = () => {
    if (columnKey === "Grado_Categoria") {
      return content?.Grado?.[0]?.Grado_Categoria || "Sin información";
    }
    if (columnKey === "Grado_Nombre") {
      return content?.Grado?.[0]?.Grado_Nombre || "Sin información";
    }
    return "";
  };

  const cellValue = content[columnKey];
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
          {content.Title}
        </User>
      );
    case "link":
      return (
        <div className="z-50 cursor-pointer">
          <button onClick={() => console.log(content)}>
            <EyeIcon size={20} fill="#979797" />
          </button>
        </div>
      );
    case "tipo":
      return (
        <div className="z-50 cursor-pointer flex items-center gap-8">
          <button onClick={() => console.log(content)}>
            <EditIcon size={20} fill="#979797" />
          </button>

          <button onClick={() => console.log(content)}>
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
          <div onClick={() => console.log(content)}>
            <Tooltip content="Details">
              <button onClick={() => console.log(content)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Edit user" color="secondary">
              <button onClick={() => console.log(content)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Delete user" color="danger">
              <button onClick={() => console.log("Delete user", content.ID)}>
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
