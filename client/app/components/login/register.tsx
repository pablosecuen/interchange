import React, { useEffect, useState } from "react";
import Image from "next/image";
import eyeicon from "@/public/assets/svg/eyepassword.svg";
import Logo from "../logo";

interface RegisterProps {
  onClose: () => void;
  toggleRegister: () => void;
}

const Register = ({ onClose, toggleRegister }: RegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de validación antes de enviar los datos
    if (formData.password !== formData.confirmPassword) {
      // Lógica para manejar la no coincidencia de contraseñas
      alert("Las contraseñas no coinciden");
      return;
    }
    // Envío de datos o lógica adicional
    console.log("Datos del formulario:", formData);

    // Guardar en localStorage si se marcó "Recuérdame"
    if (rememberMe) {
      localStorage.setItem("formData", JSON.stringify(formData));
    } else {
      localStorage.removeItem("formData"); // Limpiar si no se marcó "Recuérdame"
    }

    // Cerrar el formulario o hacer algo con los datos
    onClose();
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
  }, [rememberMe]);

  return (
    <form
      className="w-1/3 min-h-[50vh] p-10 -mt-12 rounded-3xl backdrop-blur-3xl bg-white/20 shadow-black/30 shadow-xl z-50"
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <label
          htmlFor="firstName"
          className="block  text-sm  font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="block text-sm  font-medium text-gray-900 dark:text-white"
        >
          Apellido
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="block text-sm  font-medium text-gray-900 dark:text-white"
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

      <div className="mb-5 relative">
        <label
          htmlFor="password"
          className="block text-sm  font-medium text-gray-900 dark:text-white"
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
      <div className="mb-5 relative">
        <label
          htmlFor="confirmPassword"
          className="block text-sm  font-medium text-gray-900 dark:text-white"
        >
          Confirmar Contraseña
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
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
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm  font-medium text-gray-900 dark:text-gray-300"
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
    </form>
  );
};

export default Register;
