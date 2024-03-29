"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./navbar.css";
import Login from "../login/Login";
import Image from "next/image";
import Logo from "../logo";
import usericon from "../../../public/assets/svg/usericon.png";
import { Toaster } from "sonner";
import LoadingError from "../loadingerror";
import Loading from "../loadingerror/loading";

export interface User {
  ID: string;
  Apellido?: string;
  Nombre?: string;
  Email?: string;
  email?: string;
  Grado_Categoria?: string;
  Grado_ID?: string;
  Grado_Nombre?: string;
  Password?: string;
  firstName?: string;
  lastName?: string;
}

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const updateUser = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
    router.push("/");
    router.refresh();
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (userData) {
      const parsedUserData: User = JSON.parse(userData);
      setUser(parsedUserData);
      setLoadingUser(false);
    }
  }, []);
  return (
    <nav className="bg-white  fixed w-screen h-16 md:h-20 z-50 top-0 start-0  text-black  tracking-wider  font-laila !font-bold">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />
      <div className="max-w-screen  w-screen flex items-center justify-between  md:justify-around p-2 md:p-4  ">
        <Link
          href="/"
          className="flex items-center md:justify-start justify-center  h-auto space-x-3 rtl:space-x-reverse "
        >
          <div className="hidden lg:block ">
            {" "}
            <Logo size="xl" />
          </div>
          <div className=" lg:hidden">
            {" "}
            <Logo size="lg" />
          </div>
        </Link>
        <div
          className="flex md:justify-end md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse  md:w-48      "
          onMouseEnter={handleMouseEnter}
        >
          {loadingUser ? (
            <Loading isLoading={loadingUser} />
          ) : user ? (
            <div className="md:flex gap-4 items-center hidden">
              <Image
                src={usericon}
                alt="user icon"
                width={50}
                height={50}
                className="border-4 rounded-full"
              />
              <div className="text-sm font-medium flex flex-col cursor-pointer">
                <span className="font-medium">Bienvenido</span>
                <span className="font-bold">
                  {user.Nombre && user.Apellido
                    ? `${user.Nombre} ${user.Apellido}`
                    : `${user.firstName} ${user.lastName}`}
                </span>
                <span className="font-bold">
                  {user.Grado_Nombre} {user.Grado_Categoria}
                </span>
                {/* Dropdown */}
                {showMenu && (
                  <div
                    className="absolute right-2 top-16 w-96 z-50 hidden md:block mt-1 bg-white border-b border-l border-r border-gray-200 py-2 rounded-md shadow-lg"
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="flex flex-col gap-4 p-2 items-center">
                      <li className="hover:bg-slate-100 w-full">
                        <span className="text-xl text-gray-700 font-bold font-2xl flex items-center justify-center gap-4">
                          <Image
                            src={usericon}
                            alt="user icon"
                            width={50}
                            height={50}
                            className="border-4 rounded-full"
                          />
                          {user.Email ? `${user.Email}` : `${user.email}`}
                        </span>
                      </li>
                      {user && user?.Grado_Nombre && user?.Grado_Categoria && (
                        <li>
                          <span className="font-bold">
                            {user.Grado_Nombre} {user.Grado_Categoria}
                          </span>
                        </li>
                      )}
                      <li className="flex justify-evenly w-full items-center">
                        <Link href="/campus?section=home">
                          <button className="yellow-btn" type="button">
                            Campus Virtual
                          </button>
                        </Link>
                        <button className="yellow-btn !w-36 text-center" onClick={handleLogout}>
                          <span className="text-center w-full"> Logout</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Si no hay usuario, mostramos el botón de inicio de sesión
            <button
              type="button"
              className="yellow-btn font-bold md:mr-6 lg:mr-10 scale-75 md:scale-100"
              onClick={() => setShowLoginModal(true)}
            >
              Ingreso
            </button>
          )}

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
          className={`items-start w-1/2  md:order-1 bg- md:bg-transparent rounded-lg h-[92vh] pb-8  flex-col justify-between  md:hidden z-50 ${
            isCollapsed
              ? "opacity-100  transform absolute top-14 right-0  translate-x-[100%] md:translate-x-0 !h-0  transition duration-500"
              : "right-0 opacity-100 absolute top-14 bg-white "
          }`}
          id="navbar-sticky"
          style={{ transitionDuration: "1s" }}
        >
          <ul className="flex flex-col    p-4 md:p-0 mt-4 font-medium   w-full justify-center  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
            <li className="w-full h-full mb-4">
              {" "}
              {loadingUser ? (
                <Loading isLoading={loadingUser} />
              ) : user ? (
                <div className="flex flex-col">
                  <div className="md:hidden gap-4 flex justify-center items-center ">
                    <Image
                      src={usericon}
                      alt="user icon"
                      width={50}
                      height={50}
                      className="border-4 rounded-full"
                    />

                    <div className="text-sm font-medium flex flex-col cursor-pointer">
                      <span className="font-medium">Bienvenido</span>
                      <span className="font-bold">
                        {user.Nombre && user.Apellido
                          ? `${user.Nombre} ${user.Apellido}`
                          : `${user.firstName} ${user.lastName}`}
                      </span>
                      <span className="font-bold">
                        {user.Grado_Nombre} {user.Grado_Categoria}
                      </span>
                      {/* Dropdown */}
                      {showMenu && (
                        <div
                          className="absolute right-2 top-16 w-96 z-50 hidden md:block mt-1 bg-white border-b border-l border-r border-gray-200 py-2 rounded-md shadow-lg"
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="flex flex-col gap-4 p-2 items-center">
                            <li className="hover:bg-slate-100 w-full">
                              <span className="text-xl text-gray-700 font-bold font-2xl flex items-center justify-center gap-4">
                                <Image
                                  src={usericon}
                                  alt="user icon"
                                  width={50}
                                  height={50}
                                  className="border-4 rounded-full"
                                />
                                {user.Email ? `${user.Email}` : `${user.email}`}
                              </span>
                            </li>
                            {user && user?.Grado_Nombre && user?.Grado_Categoria && (
                              <li>
                                <span className="font-bold">
                                  {user.Grado_Nombre} {user.Grado_Categoria}
                                </span>
                              </li>
                            )}
                            <li className="flex justify-evenly w-full items-center">
                              <Link href="/campus?section=home">
                                <button className="yellow-btn" type="button">
                                  Campus Virtual
                                </button>
                              </Link>
                              <button className="yellow-btn" onClick={handleLogout}>
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-evenly w-full items-center flex-col gap-2 pt-4">
                    <Link href="/campus?section=home">
                      <button className="yellow-btn" type="button">
                        Campus
                      </button>
                    </Link>
              
                  </div>
                </div>
              ) : (
                // Si no hay usuario, mostramos el botón de inicio de sesión
                <button
                  type="button"
                  className="yellow-btn font-bold md:mr-6 lg:mr-10 !hidden"
                  onClick={() => setShowLoginModal(true)}
                >
                  Ingreso
                </button>
              )}
            </li>

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
              <ul className="!font-laila hidden md:block">
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
              <ul className="!font-laila hidden md:block">
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
          <ul className="flex  p-4 md:p-0 mt-4 font-medium md:text-xs xl:text-base gap-6 md:mt-0  ">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3  rounded md:bg-transparent   md:p-0 font-bold transition duration-[600ms]  ${
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
      {showLoginModal && <Login onClose={toggleLoginModal} updateUser={updateUser} />}
    </nav>
  );
};

export default Navbar;
