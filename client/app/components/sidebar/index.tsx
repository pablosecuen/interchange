"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useGetNivelationExam from "@/app/hooks/useNivelationExams";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import ExamenNivelador from "./examen-nivelador";
import Notas from "./notas";
import Contenido from "./contenido";
import Consultas from "./consultas";
import { Community } from "../icons/community";
import { NotificationIcon } from "../icons/navbar/notificationicon";

type MenuItem = "examen" | "notas" | "contenido" | "consultas";

const Sidebar: React.FC = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section") as MenuItem;
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>("examen");
  const { userHasExams } = useGetNivelationExam();

  useEffect(() => {
    if (section !== selectedMenuItem) {
      setSelectedMenuItem(section);
    }
  }, [section]);

  const handleMenuItemClick = (itemId: MenuItem) => {
    setSelectedMenuItem(itemId);
    const params = new URLSearchParams(window.location.search);
    params.set("section", itemId);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
  };

  const isActive = (path: string) => selectedMenuItem === path;

  const renderMenuItem = (label: string, path: string, icon: JSX.Element) => (
    <li
      key={path}
      onClick={() => handleMenuItemClick(path as MenuItem)}
      className={`flex items-center gap-2 cursor-pointer text-lg transition duration-300 opacity-80 tracking-wide ${
        isActive(path) ? " opacity-100 brightness-110 font-bold tracking-widest" : ""
      }`}
    >
      {icon}
      {label}
    </li>
  );

  return (
    <div className="min-h-[90vh] flex justify-start items-center overflow-hidden">
      <ul className="flex flex-col justify-center gap-10 w-96 bg-slate-100 px-4 border min-h-[90vh] mt-20">
        {renderMenuItem("Home", "", <HomeIcon />)}
        {/* ... Otros elementos del menú */}
        {userHasExams && renderMenuItem("Examen", "examen", <DevIcon />)}
        {renderMenuItem("Notas", "notas", <ViewIcon />)}
        {renderMenuItem("Contenido", "contenido", <Community />)}
        {renderMenuItem("Consultas", "consultas", <NotificationIcon />)}
      </ul>
      <div className="w-full h-full transition-opacity duration-500 animate-fade-in">
        {/* Renderizar contenido según el item seleccionado */}
        {selectedMenuItem === "examen" && <ExamenNivelador />}
        {selectedMenuItem === "notas" && <Notas />}
        {selectedMenuItem === "contenido" && <Contenido />}
        {selectedMenuItem === "consultas" && <Consultas />}
      </div>
    </div>
  );
};

export default Sidebar;
