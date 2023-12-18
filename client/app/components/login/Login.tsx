import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Register from "./register";
import Logo from "../logo";
import eyeicon from "@/public/assets/svg/eyepassword.svg";

interface LoginProps {
  onClose: () => void;
}
const Login = ({ onClose }: LoginProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleRememberMe = () => {
    console.log("Checkbox state before update:", rememberMe);
    console.log("Form data:", formData);
    setRememberMe((prevRememberMe) => {
      console.log(prevRememberMe);

      const newRememberMe = !prevRememberMe;
      if (!newRememberMe) {
        console.log("Removing from sessionStorage");
        sessionStorage.removeItem("loginFormData");
      } else {
        console.log("Storing in sessionStorage:", JSON.stringify(formData));
        sessionStorage.setItem("loginFormData", JSON.stringify(formData));
        console.log("Session storage after update:", sessionStorage.getItem("loginFormData")); // Nuevo console.log para mostrar el resultado de sessionStorage
      }
      console.log("Checkbox state after update:", newRememberMe);
      return newRememberMe;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        // Si la solicitud es exitosa, podrías redirigir a la página principal o realizar acciones necesarias
        alert("Inicio de sesión exitoso");
        router.push("/campus"); // Redirigir a la página principal después del inicio de sesión
      } else {
        // Si la solicitud falla o las credenciales son incorrectas, muestra un mensaje de error
        console.error("Credenciales incorrectas");
      }
    } catch (error) {
      // Manejo de errores en caso de problemas de red u otros errores
      console.error("Error al intentar iniciar sesión:", error);
    }
  };

  useEffect(() => {
    if (!rememberMe) {
      sessionStorage.removeItem("loginFormData");
    } else {
      sessionStorage.setItem("loginFormData", JSON.stringify(formData));
    }
  }, [rememberMe, formData]);

  useEffect(() => {
    const rememberedData = sessionStorage.getItem("loginFormData");
    if (rememberedData) {
      setFormData(JSON.parse(rememberedData));
    }
    console.log("Retrieved from sessionStorage:", rememberedData); // Log para verificar si se está obteniendo algo del sessionStorage
  }, [rememberMe]);

  return (
    <div className=" h-[100vh] flex justify-center items-center ">
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
              onChange={handleChange}
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
              onChange={handleChange}
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
