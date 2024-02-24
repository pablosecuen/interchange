"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import eyeicon from "@/public/assets/svg/eyepassword.svg";
import Logo from "../logo";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";
import Link from "next/link";
import useRegister from "@/app/hooks/useRegister";
import { User } from "../navbar";

interface RegisterProps {
  onClose: () => void;
  toggleRegister: () => void;
  updateUser: (user: User) => void;
}

const Register = ({ onClose, toggleRegister, updateUser }: RegisterProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { formData, setFormData, handleChange, handleSubmit } = useRegister({
    updateUser,
    onClose,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  useEffect(() => {
    // Cargar los datos del localStorage al cargar el componente
    const rememberedData = localStorage.getItem("formData");
    if (rememberedData && rememberMe) {
      setFormData(JSON.parse(rememberedData));
    }

    // Limpiar datos del localStorage si rememberMe es falso
    if (!rememberMe) {
      localStorage.removeItem("formData");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rememberMe]);

  return (
    <>
      <div className="fixed top-12 md:top-20 left-0 w-full h-screen backdrop-blur-3xl"></div>
      <form
        className="w-full  min-h-[50vh] max-h-[92vh] absolute  md:top-1/2 md:-translate-y-1/2 right-1/2 translate-x-1/2 md:w-1/2  p-10 md:-mt-12 rounded-3xl  bg-white/20 shadow-black/30 shadow-xl z-50 overflow-y-auto"
        onSubmit={(e) => handleSubmit(rememberMe, e)}
      >
        <button
          type="button"
          onClick={onClose}
          className="yellow-btn h-10 !px-4  absolute top-1 right-1 drop-shadow-md "
        >
          x
        </button>
        <Toaster richColors={true} expand={false} position="top-center" />

        <h5 className="pb-2">Datos Alumno</h5>

        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="firstName"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="firstName"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido Alumno
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="Dni"
              name="Dni"
              value={formData.Dni}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="Dni"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Documento
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono Alumno
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email alumno
          </label>
        </div>

        <h5 className="pb-2">Datos Adulto Responsable</h5>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="firstNameAdult"
              name="firstNameAdult"
              value={formData.firstNameAdult}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
            />
            <label
              htmlFor="firstNameAdult"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre Adulto
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="lastNameAdult"
              name="lastNameAdult"
              value={formData.lastNameAdult}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
            />
            <label
              htmlFor="lastNameAdult"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido Adulto
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="firstNameAdult2"
              name="firstNameAdult2"
              value={formData.firstNameAdult2}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
            />
            <label
              htmlFor="firstNameAdult2"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre 2do Adulto
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="lastNameAdult2"
              name="lastNameAdult2"
              value={formData.lastNameAdult2}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
            />
            <label
              htmlFor="lastNameAdult2"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido 2do Adulto
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="phoneAdult"
              name="phoneAdult"
              value={formData.phoneAdult}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
            />
            <label
              htmlFor="phoneAdult"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono Adulto 1
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="phoneAdult2"
              name="phoneAdult2"
              value={formData.phoneAdult}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
            />
            <label
              htmlFor="phoneAdult2"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono Adulto
            </label>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contraseña
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
            >
              <Image
                src={eyeicon}
                alt="mostrar password"
                width={30}
                height={30}
                className="absolute right-2  bottom-1/2 translate-y-1/3"
              />
            </button>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="confirmPassword"
              className="peer-focus:font-medium absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirmar Contraseña
            </label>
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none "
            >
              <Image
                src={eyeicon}
                alt="mostrar password"
                width={30}
                height={30}
                className="absolute right-2 bottom-1/2 translate-y-1/3"
              />
            </button>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <div className="flex items-center h-5 flex-col">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMe}
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 md:text-sm text-xs  font-medium text-gray-900 dark:text-gray-300"
          >
            Recuérdame
          </label>
        </div>
        <button
          className="text-center w-full mb-8 border-b cursor-default"
          onClick={toggleRegister}
          type="button"
        >
          <span className="hover:scale-105 transition duration-300 cursor-pointer z-50 ">
            Ya estas registrado? haz click aqui
          </span>
        </button>
        <div className="w-full flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="yellow-btn h-10 !px-10 scale-75 md:scale-100"
          >
            Close
          </button>
          <button type="submit" className="yellow-btn h-10 scale-75 md:scale-100">
            Registrarme
          </button>
        </div>
        <span className="hover:scale-105 transition font-thin text-xs  duration-300 cursor-pointer z-50">
          Al continuar declaras estar de acuerddo con nuestros{" "}
          <Link href="/terms" className="text-blue-500">
            terminos de uso
          </Link>
        </span>
      </form>
    </>
  );
};

export default Register;
