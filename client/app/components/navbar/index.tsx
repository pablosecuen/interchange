"use client";
import React, { useState } from "react";
import Logo from "../logo";
import Link from "next/link";
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <nav className="bg-white  fixed w-full h-20 z-50 top-0 start-0  text-black  tracking-widest font-semibold border">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4 md:px-32">
        <Link
          href="/"
          className="flex items-center md:justify-start justify-center  h-auto space-x-3 rtl:space-x-reverse mr-auto md:w-1/3"
        >
          <Logo size="xl" />
        </Link>
        <div className="flex md:justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse   md:w-1/3">
          <button
            type="button"
            className="  focus:ring-4 focus:outline-none bg-custom-yellow text-white focus:ring-yellow-600 font-medium rounded-full text-sm px-4 py-2 text-center hover:bg-yellow-500 "
          >
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
          className={`items-center justify-center w-full md:flex md:order-1 md:w-1/3 transition-opacity ${
            isCollapsed ? "opacity-0 max-h-0 md:opacity-100" : "opacity-100 max-h-96"
          }`}
          id="navbar-sticky"
          style={{ transitionDuration: "1s" }}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="#"
                className="block py-2 px-3  rounded md:bg-transparent md:text-yellow-500 md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 "
              >
                Inscripcion
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 "
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 "
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 "
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
