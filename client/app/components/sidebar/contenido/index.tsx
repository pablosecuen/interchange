"use client";
import useCampusData, { CampusItem } from "@/app/hooks/useCampusData";
import React, { useEffect, useState } from "react";
import LoadingError from "../../loadingerror";
import { User } from "../../navbar";
import Link from "next/link";
import ReactPlayer from "react-player";
import Image from "next/image";
import placeholder from "@/public/assets/placeholder/videoplayer.png";

function Contenido() {
  const { campusData, loading, error } = useCampusData();
  const [filteredData, setFilteredData] = useState<CampusItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [playerLinks, setPlayerLinks] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    // Intenta obtener la información del usuario desde el local storage
    const storedUserString = localStorage.getItem("user");

    // Si no está en el local storage, intenta obtenerlo del session storage
    if (!storedUserString) {
      const storedUserSession = sessionStorage.getItem("user");
      setUser(storedUserSession ? JSON.parse(storedUserSession) : null);
    } else {
      setUser(JSON.parse(storedUserString));
    }
  }, []);

  useEffect(() => {
    // Filtra el campusData según la información del grado del usuario logeado
    if (user && user.Grado_ID) {
      const { Grado_ID } = user;

      const filtered = campusData.filter(
        (item) => item.Grado_ID && item.Grado_ID.trim() === Grado_ID.trim()
      );

      setFilteredData(filtered);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, campusData]);

  if (loading) return <LoadingError isLoading={loading} error={error} />;

  const cursoTitle = `${filteredData[0]?.Grado_Categoria}${" "}${filteredData[0]?.Grado_Nombre}`;
  console.log(filteredData);

  return (
    <div className="animate-fade min-h-[90vh] w-full md:p-20 p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-8 p-4 text-3xl uppercase font-bold tracking-widest">
          {cursoTitle}
        </div>
        <div className="col-span-4 md:p-4 md:col-span-4 hidden md:block"></div>
        <div className="col-span-8 md:p-4 h-full md:col-span-8 ">
          <span className="md:p-4 text-xl">Elije el contenido de la lista para reproducirlo</span>
          <div className=" py-8 md:min-h-[470px] md:h-[470px] h-[350px] md:w-[835px]">
            {playerLinks === "" ? (
              <Image src={placeholder} alt="placeholder" width={0} height={0} />
            ) : (
              <ReactPlayer url={playerLinks} controls width="100%" height="100%" />
            )}
          </div>
        </div>
        <div className="col-span-8 md:p-4 md:col-span-4">
          <div className="flex flex-col">
            {" "}
            <span className="pl-4">Contenido de este curso</span>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="my-2"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {filteredData.map((optionItem, optionIndex) => (
                <option key={optionIndex} value={optionItem.Title}>
                  {optionItem.Title}
                </option>
              ))}
            </select>
          </div>

          {filteredData.map((item, index) => (
            <div key={index}>
              {selectedOption === item.Title && (
                <>
                  <h2>{item.Title}</h2>
                  {/* Renderiza la lista de enlaces */}
                  <ul className="w-full border rounded-2xl bg-slate-100  my-2">
                    {item.Link.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {item.Tipo === "Audio" || item.Tipo === "Video" ? (
                          // Agregar al estado para reproducir en el reproductor
                          <button onClick={() => setPlayerLinks(link)} className="my-2 p-1 pl-1">
                            Reproducir {linkIndex + 1}
                          </button>
                        ) : (
                          // Abrir en otra pestaña para descargar
                          <Link href={link} target="_blank" rel="noopener noreferrer">
                            <button className="my-2 p-1 pl-1"> Descargar {linkIndex + 1}</button>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-8 p-4 md:col-span-9">{filteredData[0]?.Description}</div>
      </div>
    </div>
  );
}

export default Contenido;
