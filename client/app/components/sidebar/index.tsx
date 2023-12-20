"use client";

import React, { useState } from "react";
import ExamenNivelador from "./examen-nivelador";
import Notas from "./notas";
import Contenido from "./contenido";
import Consultas from "./consultas";
import { menuItems } from "@/app/utils";

type MenuItem = "examen" | "notas" | "contenido" | "consultas"; // Tipos posibles para los elementos del menú

const Sidebar: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>("examen"); // Estado para controlar el elemento seleccionado

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "examen":
        return <ExamenNivelador />; // Componente ExamenNivelador
      case "notas":
        return <Notas />; // Componente Notas
      case "contenido":
        return <Contenido />; // Componente Contenido
      case "consultas":
        return <Consultas />; // Componente Consultas
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[90vh] flex justify-start items-center overflow-hidden">
      <ul className="flex flex-col justify-center gap-10 w-96 bg-slate-100 px-4 border min-h-[90vh] mt-20">
        {menuItems.map((item: any) => (
          <li
            key={item.id}
            onClick={() => setSelectedMenuItem(item.id as MenuItem)}
            className={`cursor-pointer text-lg transition duration-300 opacity-80 tracking-wide ${
              selectedMenuItem === item.id
                ? " opacity-100 brightness-110 font-bold tracking-widest"
                : ""
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="w-full h-full transition-opacity duration-500 animate-fade-in">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
