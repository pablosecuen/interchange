"use client";
import React from "react";
import Logo from "../../logo";

const CampusHome: React.FC = () => {
  let user = { Nombre: "Usuario Alumno" }; // Valor predeterminado

  // Buscar el objeto de usuario en localStorage o sessionStorage
  const userData = localStorage.getItem("user") || sessionStorage.getItem("user");

  if (userData) {
    try {
      const parsedUser = JSON.parse(userData);
      user = parsedUser || user;
    } catch (error) {
      console.error("Error al parsear los datos del usuario:", error);
    }
  }

  return (
    <div className="min-h-[90vh] w-full mt-20 flex justify-center items-center relative animate-fade">
      <div className="text-center md:w-1/2 mx-2 flex flex-col items-center justify-center">
        <Logo size="2xl" />

        <h1 className="text-4xl font-bold mb-4">¡Bienvenido al Campus Virtual!</h1>
        <p className="text-lg mb-8">
          Hola, <span className="font-bold">{user.Nombre}</span>. Aquí encontrarás una plataforma
          educativa donde podrás acceder a tus exámenes, consultar material didáctico, ver tus notas
          y mucho más.
        </p>
        {/* Agregar aquí más detalles o enlaces según sea necesario */}
      </div>
    </div>
  );
};

export default CampusHome;
