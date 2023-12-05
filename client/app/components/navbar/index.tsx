"use client";
import React, { useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import telefono from "@/public/assets/svg/telefono.svg";
import mail from "@/public/assets/svg/mail.svg";
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="bg-white  fixed w-full h-16 md:h-20 z-50 top-0 start-0  text-black  tracking-wider  font-laila !font-bold">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4 md:px-32">
        <Link
          href="/"
          className="flex items-center md:justify-start justify-center  h-auto space-x-3 rtl:space-x-reverse mr-auto md:w-1/3"
        >
          <Logo size="xl" />
        </Link>
        <div className="flex md:justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse   md:w-1/3">
          <button type="button" className="yellow-btn  font-bold">
            Ingreso
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          className={`w-screen h-screen bg-black/20 fixed top-0 left-0 z-40 transition duration-500 md:hidden${
            isCollapsed
              ? " transform translate-x-[100%] opacity-0 !h-0"
              : " translate-x-0 opacity-100"
          }`}
          onClick={toggleNavbar}
        ></div>
        <div
          className={`items-start  w-full flex md:order-1 bg-gray-100 md:bg-transparent rounded-lg h-[92vh] pb-8  flex-col justify-between  md:w-1/3 transition duration-500 z-50 ${
            isCollapsed
              ? "opacity-100 transform translate-x-[103%] md:translate-x-0 !h-0"
              : "translate-x-[50%] opacity-100"
          }`}
          id="navbar-sticky"
          style={{ transitionDuration: "1s" }}
        >
          <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:bg-white">
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
          {/*   <div className="w-1/2 flex flex-col items-center md:!hidden justify-center z-50">
            {" "}
            <Logo size="xl" />
            <div className="border-b w-10/12"></div>
            <span className="text-[9px]">
              <ul className="text-gray-500 dark:text-gray-400 font-medium pt-4">
                <li className=" flex gap-2 items-center  cursor-pointer">
                  <Image src={telefono} alt="" width={9} height={0} />
                  <Link href="tel:0341153119792">0341 15-311-9792</Link>
                </li>
                <li>
                  <Link href="mailto:interchange@gmail.com" className="flex gap-2 items-center ">
                    <Image src={mail} alt="" width={10} height={0} />
                    interchange@gmail.com
                  </Link>
                </li>
              </ul>
            </span>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
