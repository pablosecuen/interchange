"use client";
import React from "react";
import { gradesContent } from "@/app/utils";
import useInscripcionForm from "@/app/hooks/useInscriptionForm";
import { Toaster } from "sonner";

const Inscripcion = () => {
  const currentYear = new Date().getFullYear();
  let nextYear = currentYear;

  if (new Date().getMonth() > 2) {
    nextYear += 1;
  }

  const initialState = {
    floating_first_name: "",
    floating_last_name: "",
    floating_first_namestudent: "",
    floating_last_namestudent: "",
    floating_date_of_birth: "",
    floating_phone_numberstudent: "",
    floating_addressstudent: "",
    select_title: "",
    floating_email: "",
    floating_phone: "",
    floating_message: "",
  };

  const { formData, handleChange, resetForm, sendFormData } = useInscripcionForm(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Llama a la función sendFormData con el email (podría ser formData.floating_email)
    await sendFormData(formData.floating_email); // Envía los datos del formulario
  };

  return (
    <section className="w-full min-h-screen my-20">
      <Toaster richColors={true} expand={false} position="top-center" />
      <h3 className="md:text-4xl text-2xl font-bold tracking-widest text-center mt-40">
        SOLICITUD DE PRE-INSCRIPCION {nextYear}
      </h3>
      <p className="md:text-lg px-4 md:px-0 font-bold mx-auto text-center py-4 max-w-4xl">
        Introducir los datos requeridos del interesado - La confirmación efectiva de la vacante será
        vía WhatsApp y/o e-mail luego de recibido y confirmado el pago de la matrícula.
      </p>
      <form className="max-w-3xl mx-auto  md:w-full pt-10 px-8 md:px-0" onSubmit={handleSubmit}>
        <span className="pb-10 text-center font-bold">ADULTO RESPONSABLE</span>

        <div className="grid md:grid-cols-2 md:gap-6 my-8">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              value={formData.floating_first_name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              value={formData.floating_last_name}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido
            </label>
          </div>
        </div>
        <span className="pb-4 text-center font-bold">DATOS DEL ESTUDIANTE</span>
        <div className="grid md:grid-cols-2 md:gap-6 my-8">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_namestudent"
              id="floating_first_namestudent"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
              value={formData.floating_first_namestudent}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_first_namestudent"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_namestudent"
              id="floating_last_namestudent"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
              value={formData.floating_last_namestudent}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_last_namestudent"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido
            </label>
          </div>
          {/* Nuevo campo: Fecha de Nacimiento */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="floating_date_of_birth"
              id="floating_date_of_birth"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
              value={formData.floating_date_of_birth}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_date_of_birth"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fecha de Nacimiento
            </label>
          </div>
          {/* Nuevo campo: Teléfono */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_phone_numberstudent"
              id="floating_phone_numberstudent"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
              value={formData.floating_phone_number}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_phone_numberstudent"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Teléfono
            </label>
          </div>
          {/* Nuevo campo: Dirección */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_addressstudent"
              id="floating_addressstudent"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
              value={formData.floating_addressstudent}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_addressstudent"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Dirección
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="select_title"
              id="select_title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              required
              value={formData.select_title}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecciona un grado
              </option>
              {gradesContent.map((grade, index) => (
                <option key={index} value={grade.title}>
                  {grade.title}
                </option>
              ))}
            </select>
            <label
              htmlFor="select_title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Grado
            </label>
          </div>
        </div>
        <span className="pb-4 text-center font-bold my-8">CONTACTO</span>
        <div className="relative z-0 w-full mb-5 group my-8">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.loating_email}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formData.floating_phone}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="floating_message"
            id="floating_message"
            className="block py-2.5 px-0 w-full h-48 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.floating_message}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mensaje
          </label>
        </div>
        <button type="submit" className="yellow-btn">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Inscripcion;
