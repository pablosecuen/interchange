"use client";
import React, { useEffect, useState } from "react";
import Register from "./register";
import { Toaster } from "sonner";
import { User } from "../navbar";
import useLogin from "@/app/hooks/useLogin";
import Logo from "../logo";
import Link from "next/link";
import Image from "next/image";
import eyeicon from "@/public/assets/svg/eyepassword.svg";

interface LoginProps {
  onClose: () => void;
  updateUser: (user: User) => void;
}

const Login = ({ onClose, updateUser }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const initialFormData = { email: "", password: "" };

  // Utiliza el custom hook useLogin
  const { formData, rememberMe, handleRememberMe, handleFormDataChange, handleLogin } = useLogin({
    email: "",
    password: "",
  });

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      updateUser(userData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" h-[100vh] flex justify-center items-center ">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />
      {isRegistering ? (
        <Register onClose={onClose} toggleRegister={toggleRegister} updateUser={updateUser} />
      ) : (
        <form
          className=" md:w-1/3 min-h-[50vh] w-full  p-10 -mt-12 rounded-3xl backdrop-blur-3xl bg-white/20 shadow-black/30 shadow-xl z-50"
          onSubmit={handleLogin}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormDataChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5  relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
            >
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleFormDataChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
          <div className="flex items-center mb-5">
            <div className="flex items-center h-5 flex-col">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMe}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Recuerdame
            </label>
          </div>
          <button
            className="text-center w-full mb-8 border-b cursor-default"
            type="button"
            onClick={toggleRegister}
          >
            <span className="hover:scale-105 transition duration-300 cursor-pointer z-50">
              Registrate aqui
            </span>
          </button>

          <div className="w-full flex justify-between">
            <button type="submit" className="yellow-btn h-10">
              Ingresar
            </button>
            <Logo size="xl" />
            <button type="button" onClick={onClose} className="yellow-btn h-10 !px-6">
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
      )}
    </div>
  );
};

export default Login;
