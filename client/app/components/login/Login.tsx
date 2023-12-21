import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Register from "./register";
import Logo from "../logo";
import eyeicon from "@/public/assets/svg/eyepassword.svg";
import useLogin from "@/app/hooks/useLogin";
import { Toaster, toast } from "sonner";

interface LoginProps {
  onClose: () => void;
}
const Login = ({ onClose }: LoginProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const initialFormData = { email: "", password: "" };

  // Utiliza el custom hook useLogin
  const { formData, rememberMe, handleRememberMe, handleFormDataChange } =
    useLogin(initialFormData);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem("loginFormData", JSON.stringify(formData));
          sessionStorage.removeItem("loginFormData");
          toast.success("Bienvenido de nuevo!");
        } else {
          sessionStorage.setItem("loginFormData", JSON.stringify(formData));
          localStorage.removeItem("loginFormData");
          toast.success("Bienvenido de nuevo!");
        }
        router.push("/campus");
      } else {
        toast.error("Error al validar credenciales");
      }
    } catch (error) {
      console.error("Error al validar credenciales:", error);
    }
  };

  /*   useEffect(() => {
    if (!rememberMe) {
      sessionStorage.removeItem("loginFormData");
    } else {
      sessionStorage.setItem("loginFormData", JSON.stringify(formData));
    }
  }, [rememberMe, formData]); */

  return (
    <div className=" h-[100vh] flex justify-center items-center ">
      <Toaster richColors position="top-center" />
      {isRegistering ? (
        <Register onClose={onClose} toggleRegister={toggleRegister} />
      ) : (
        <form
          className=" w-1/3 min-h-[50vh]  p-10 -mt-12 rounded-3xl backdrop-blur-3xl bg-white/20 shadow-black/30 shadow-xl z-50"
          onSubmit={handleSubmit}
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
        </form>
      )}
    </div>
  );
};

export default Login;
