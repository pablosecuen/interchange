"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../logo";

const CampusHome: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  let user = { Nombre: "Usuario Alumno" }; // Valor predeterminado

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Buscar el objeto de usuario en localStorage o sessionStorage

  // Buscar el objeto de usuario en localStorage o sessionStorage
  let userData;

  if (typeof window !== "undefined") {
    userData = localStorage.getItem("user") || sessionStorage.getItem("user");
  }

  if (userData) {
    try {
      const parsedUser = JSON.parse(userData);
      user = parsedUser || user;
    } catch (error) {
      console.error("Error al parsear los datos del usuario:", error);
    }
  }

  return (
    <div className="min-h-[50vh] md:min-h-[80vh] w-full md:mt-20 flex justify-center md:items-center relative animate-fade">
      <div className="text-center md:w-1/2 mx-2 flex flex-col items-center justify-center lg:-mt-32">
        <Logo size="2xl" />

        <h1 className="md:text-4xl text-2xl font-bold mb-4 ">¡Bienvenido al Campus Virtual!</h1>
        <div className="md:text-lg md:mb-8">
          Hola, {isClient && <span className="font-bold">{user.Nombre}</span>}. Aquí encontrarás una
          plataforma educativa donde podrás acceder a tus exámenes, consultar material didáctico,
          ver tus notas y mucho más.
        </div>
        {/* Agregar aquí más detalles o enlaces según sea necesario */}
      </div>
    </div>
  );
};

export default CampusHome;
