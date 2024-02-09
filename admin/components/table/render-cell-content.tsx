import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import Link from "next/link";
import EditContentModal from "../modal/modal-edit-content";
import ModalDetailsContent from "../modal/moda-content-detail";
import useDeleteCampus from "../hooks/useDeleteCampus";

interface Props {
  content: any;
  columnKey: string | React.Key;
  onOpen?: () => void;
  deleteCampus: (id: string) => void;
}

// En el componente RenderCell

export const RenderCell = ({ content, columnKey, deleteCampus }: Props) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteCampus(id);
    } catch (error) {
      console.error("Error al eliminar el campus:", error);
    }
  };

  const getCourseInfo = () => {
    if (columnKey === "Grado_Categoria") {
      return content?.Grado_Categoria || "Sin información";
    }
    if (columnKey === "Grado_Nombre") {
      return content?.Grado_Nombre || "Sin información";
    }
    return "";
  };

  const cellValue = content[columnKey];
  const columnValue =
    columnKey === "Grado_Categoria" || columnKey === "Grado_Nombre" ? getCourseInfo() : cellValue;
  console.log(content.Link);

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
    case "Link":
      return (
        <div className="z-50 cursor-pointer">
          {content.Link && content.Link.length > 0 ? (
            content.Link.map((link: string, index: number) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition duration-300"
              >
                {`Link ${index + 1}`}
              </Link>
            ))
          ) : (
            <span>Sin enlaces</span>
          )}
        </div>
      );
    case "tipo":
      return (
        <div className="z-50 cursor-pointer flex items-center gap-8">
          <button onClick={() => console.log(content)}>
            <EditIcon size={20} fill="#979797" />
          </button>
          <EditContentModal content={content} />

          <button onClick={() => console.log(content)}>
            <EyeIcon size={20} fill="#979797" />
          </button>
        </div>
      );
    case "createdAt":
      // Formatear la fecha en dd/mm/yy
      const formattedDate = new Date(cellValue).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
      return <span>{formattedDate}</span>;
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
          <div>
            <Tooltip content="Details">
              <ModalDetailsContent content={content} />
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Edit Content" color="secondary">
              <EditContentModal content={content} />
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Delete Content" color="danger">
              <button onClick={() => handleDelete(content.ID)}>
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
