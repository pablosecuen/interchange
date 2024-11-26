"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Toaster } from "sonner";
import Link from "next/link";
import Image from "next/image";
import eyeicon from "../public/eyepassword.svg";
import useLogin from "../components/hooks/useLogin";
import Logo from "../components/logo";
import useAuth from "../components/hooks/useAuth";
import { Button } from "@nextui-org/react";
import router from "next/router";
 
export interface User {
  tipo: string;
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

const LoginForm = () => {
  const { isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (user: User) => {
    setUser(user);
  };

  const initialFormData = { email: "", password: "" };

  // Utiliza el custom hook useLogin
  const { formData, handleFormDataChange, handleLogin } = useLogin({
    email: "",
    password: "",
  });

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
  }, [isAuthenticated]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    await handleLogin({ email: formData.email, password: formData.password });
  };

  const handleCerrarClick = () => {
    // Redirigir al usuario a la URL deseada al hacer clic en el botón
    router.push("https://interchange-azure.vercel.app/");
  };

  return (
    <div className=" h-[100vh]  flex flex-col justify-center gap-20 items-center overflow-y-auto z-50 animate-fade">
      <Toaster richColors position="top-center" expand={true} closeButton={true} />
      <h3 className="text-2xl">Acceso Institucional - Area administrativa</h3>
      <form
        className=" md:w-1/3 min-h-[40vh] w-full relative  p-10 -mt-12 rounded-3xl backdrop-blur-3xl bg-white/20 shadow-black/30 shadow-xl z-50 "
        onSubmit={handleSubmit}
      >
        <Button
          color="secondary"
          variant="faded"
          type="button"
          className=" h-10 !px-6 absolute -top-6 -right-0"
          onPress={handleCerrarClick}
        >
          Cerrar
        </Button>

        <div className="flex flex-col  w-full gap-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormDataChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleFormDataChange}
              className="block py-2.5 px-0 w-full h-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-yellow focus:outline-none focus:ring-0 focus:border-custom-yellow peer "
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-yellow peer-focus:dark:text-custom-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute right-2 bottom-1/2 translate-y-1/3"
              />
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between flex-col gap-8">
          <Button type="submit" color="primary" className="yellow-btn h-10">
            Ingresar
          </Button>
          <span className="hover:scale-105 transition font-thin text-xs  duration-300 cursor-pointer z-50">
            Al continuar declaras estar de acuerdo con nuestros terminos y condiciones de uso
          </span>
          <div className="w-full flex justify-center">
            {" "}
            <Logo size="xl" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
