"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import eyeicon from "@/public/assets/svg/eyepassword.svg";
import Logo from "../logo";
import { useRouter } from "next/navigation";

import { Toaster, toast } from "sonner";
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
    <form
      className="md:w-1/3 min-h-[50vh] w-full  p-10 -mt-12 rounded-3xl backdrop-blur-3xl bg-white/20 shadow-black/30 shadow-xl z-50"
      onSubmit={(e) => handleSubmit(rememberMe, e)}
    >
      <Toaster richColors={true} expand={false} position="top-center" />

      <h5>Datos Alumno</h5>
      <div className="mb-5 flex justify-evenly gap-2 text-">
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="firstName"
            className="block  md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Nombre Alumno
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="lastName"
            className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Apellido Alumno
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-5 flex  justify-evenly gap-2">
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="email"
            className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Email Alumno
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="phone"
            className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Telefono Alumno
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <h5>Datos Adulto Responsable</h5>
      <div className="mb-5 flex  justify-evenly gap-2">
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="firstNameAdult"
            className="block  md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Nombre Adulto
          </label>
          <input
            type="text"
            id="firstNameAdult"
            name="firstNameAdult"
            value={formData.firstNameAdult}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="lastNameAdult"
            className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Apellido Adulto
          </label>
          <input
            type="text"
            id="lastNameAdult"
            name="lastNameAdult"
            value={formData.lastNameAdult}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-5 flex  justify-evenly gap-2">
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="emailAdult"
            className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Email Adulto
          </label>
          <input
            type="email"
            id="emailAdult"
            name="emailAdult"
            value={formData.emailAdult}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col w-full">
          {" "}
          <label
            htmlFor="phoneAdult"
            className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
          >
            Telefono Adulto
          </label>
          <input
            type="phone"
            id="phoneAdult"
            name="phoneAdult"
            value={formData.phoneAdult}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-5 relative">
        <label
          htmlFor="password"
          className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
        >
          Contraseña
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
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
            className="absolute right-2 bottom-1/4 translate-y-1/3"
          />
        </button>
      </div>
      <div className="mb-5 relative">
        <label
          htmlFor="confirmPassword"
          className="block md:text-sm text-xs  font-medium text-gray-900 dark:text-white"
        >
          Confirmar Contraseña
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 h-8 md:h-auto text-gray-900 md:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
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
            className="absolute right-2 bottom-1/4 translate-y-1/3"
          />
        </button>
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
        <span className="hover:scale-105 transition duration-300 cursor-pointer z-50">
          Ya estas registrado? haz click aqui
        </span>
      </button>
      <div className="w-full flex justify-between">
        <button type="submit" className="yellow-btn h-10">
          Registrarme
        </button>
        <Logo size="xl" />
        <button type="button" onClick={onClose} className="yellow-btn h-10 !px-12">
          Close
        </button>
      </div>
      <span className="hover:scale-105 transition font-thin text-xs  duration-300 cursor-pointer z-50">
        Al continuar declaras estar de acuerddo con nuestras{" "}
        <Link href="/terms" className="text-blue-500">
          terminos de uso
        </Link>
      </span>
    </form>
  );
};

export default Register;
