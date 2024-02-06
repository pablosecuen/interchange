import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import UserTypeModal from "../modal/user-type-moda";
import ModalCuotas from "../modal/modal-cuotas";
import ModalAlumnos from "../modal/modal-alumnos";
import CambiarNotasModal from "../modal/modal-cambiar-notas";
import TableWrapperNotas from "./tableNotas";
import useDeleteUser from "../hooks/useDeleteUsuer";

interface Props {
  user: any;
  columnKey: string | React.Key;
  onOpen?: () => void;
  deleteUser?: (ID: string) => void;
}

// En el componente RenderCell

export const RenderCell = ({ user, columnKey, deleteUser }: Props) => {
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
          <ModalCuotas user={user} />
        </div>
      );
    case "Notas":
      return (
        <div className="z-50 cursor-pointer flex items-center gap-8">
          <CambiarNotasModal alumno={user} />

          <TableWrapperNotas alumno={user} />
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
    case "Tipo":
      return (
        <div className="w-full flex items-center gap-2">
          <span className="capitalize"> {user.Tipo}</span>
          <UserTypeModal alumno={user} />
        </div>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <ModalAlumnos alumno={user} />
          </div>
          <div>
            <Tooltip content="Delete user" color="danger">
              {deleteUser && (
                <button onClick={() => deleteUser(user.ID)}>
                  <DeleteIcon size={20} fill="#FF0080" />
                </button>
              )}
            </Tooltip>
          </div>
        </div>
      );
    default:
      return <span>{columnValue}</span>;
  }
};
