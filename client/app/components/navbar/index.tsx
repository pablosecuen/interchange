"use client";
import React, { useEffect, useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import "./navbar.css";
import Login from "../login/Login";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Establecer isCollapsed como true si el ancho de la pantalla es menor que 768px (tamaño móvil típico)
      if (screenWidth < 768) {
        setIsCollapsed(false);
      }
    };

    // Ejecutar handleResize cuando se carga la página y al cambiar el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white  fixed w-full h-16 md:h-20 z-50 top-0 start-0  text-black  tracking-wider  font-laila !font-bold">
      <div className="max-w-screen  w-screen flex items-center justify-between  md:justify-around p-2 md:p-4  ">
        <Link
          href="/"
          className="flex items-center md:justify-start justify-center  h-auto space-x-3 rtl:space-x-reverse "
        >
          <div className="hidden md:block ">
            {" "}
            <Logo size="xl" />
          </div>
          <div className=" md:hidden">
            {" "}
            <Logo size="lg" />
          </div>
        </Link>
        <div className="flex md:justify-end md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse  md:w-48  ">
          <button type="button" className="yellow-btn  font-bold" onClick={toggleLoginModal}>
            Ingreso
          </button>
          <button
            type="button"
            className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-screen h-screen  bg-black/20 fixed top-0 left-0 z-40 transition duration-500 md:hidden${
            isCollapsed
              ? " transform translate-x-[100%] opacity-0 !h-0"
              : " translate-x-0 opacity-100"
          }`}
          onClick={toggleNavbar}
        ></div>
        <div
          className={`items-start   md:order-1 bg- md:bg-transparent rounded-lg h-[92vh] pb-8  flex-col justify-between  md:hidden z-50 ${
            isCollapsed
              ? "opacity-100  transform absolute top-14 right-0  translate-x-[100%] md:translate-x-0 !h-0  transition duration-500"
              : "right-0 opacity-100 absolute top-14 bg-white "
          }`}
          id="navbar-sticky"
          style={{ transitionDuration: "1s" }}
        >
          <ul className="flex flex-col    p-4 md:p-0 mt-4 font-medium   w-full justify-center  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[600ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                aria-current="page"
                onClick={() => setIsCollapsed(true)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/inscripcion"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[600ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Inscripción
              </Link>
            </li>
            <li className="relative " id="tourheader">
              <Link
                href="/tours"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[600ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Tours
              </Link>
              <ul className="!font-laila hidden sm:block">
                <li>
                  <Link href="/tours#destinos" className="font-bold ">
                    Destinos
                  </Link>
                </li>
                <li>
                  <Link href="/tours#informacion" className="font-bold">
                    Informacion turistica
                  </Link>
                </li>
                <li>
                  <Link href="/tours#porque" className="font-bold">
                    Por que nosotros?
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/cursos"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[700ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[800ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Nosotros
              </Link>
              <ul className="!font-laila hidden sm:block">
                <li>
                  <Link href="/nosotros#instituto" className="font-bold ">
                    Nuestro Instituto
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros#metodologia" className="font-bold">
                    Nuestra Metodologia
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros#mision" className="font-bold">
                    Nuestra Mision
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/contacto"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[900ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={` md:flex  md:order-1 bg- md:bg-transparent rounded-lg h-auto  items-center     hidden z-50 ${
            isCollapsed ? "opacity-100 " : ""
          }`}
          id="navbar-sticky"
          style={{ transitionDuration: "1s" }}
        >
          <ul className="flex  p-4 md:p-0 mt-4 font-medium  gap-6 md:mt-0  ">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[600ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                aria-current="page"
                onClick={() => setIsCollapsed(true)}
              >
                Home
              </Link>
            </li>

            <li className="relative " id="tourheader">
              <Link
                href="/tours"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[600ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Tours
              </Link>
              <ul className="!font-laila hidden sm:block">
                <li>
                  <Link href="/tours#destinos" className="font-bold ">
                    Destinos
                  </Link>
                </li>
                <li>
                  <Link href="/tours#informacion" className="font-bold">
                    Informacion turistica
                  </Link>
                </li>
                <li>
                  <Link href="/tours#porque" className="font-bold">
                    Por que nosotros?
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/cursos"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[700ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[800ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Nosotros
              </Link>
              <ul className="!font-laila hidden sm:block">
                <li>
                  <Link href="/nosotros#instituto" className="font-bold ">
                    Nuestro Instituto
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros#metodologia" className="font-bold">
                    Nuestra Metodologia
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros#mision" className="font-bold">
                    Nuestra Mision
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/inscripcion"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[600ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Inscripción
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 font-bold transition duration-[900ms]  ${
                  isCollapsed ? "opacity-0 md:opacity-100 " : " opacity-100"
                }`}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {showLoginModal && <Login onClose={toggleLoginModal} />}
    </nav>
  );
};

export default Navbar;
