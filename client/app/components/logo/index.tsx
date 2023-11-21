import React from "react";
import svg from "@/public/assets/logo/interchange.png";
import Image from "next/legacy/image";

type LogoProps = {
  size: "sm" | "md" | "lg" | "xl"; // Tamaños disponibles para el logo
};

const Logo: React.FC<LogoProps> = ({ size }) => {
  let width = 0;
  let height = 0;

  // Asignar ancho y alto basado en el tamaño proporcionado
  switch (size) {
    case "sm":
      width = 50;
      height = 15;
      break;
    case "md":
      width = 80;
      height = 25;
      break;
    case "lg":
      width = 120;
      height = 35;
      break;
    case "xl":
      width = 180;
      height = 55;
      break;
    default:
      break;
  }

  return (
    <div style={{ width, height }} className="px-2 py-1 ">
      <Image src={svg} alt="logo" className="h-full  w-full aspect-auto brightness-200" />
    </div>
  );
};

export default Logo;
