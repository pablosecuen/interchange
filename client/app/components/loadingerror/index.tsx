import React from "react";
import Image from "next/image";
import spinner from "@/public/spinner/Spinner.gif";

interface LoadingErrorProps {
  isLoading: boolean;
  error?: any; // Tipo de error según tus necesidades
}

const LoadingError: React.FC<LoadingErrorProps> = ({ isLoading, error }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {isLoading ? (
        <Image src={spinner} alt="Cargando..." width={0} height={0} />
      ) : error ? (
        <p>
          Error al cargar recursos del servidor{" "}
          {typeof error === "string" ? error : "Error desconocido"}
        </p>
      ) : null}
    </div>
  );
};

export default LoadingError;
