import React from "react";
import scramble from "@/public/assets/svg/scramble.svg";
import sparks from "@/public/assets/svg/spark.svg";
import Image from "next/image";
const Contacto = () => {
  return (
    <section className="min-h-screen md:mt-20  w-screen md:w-full overflow-x-hidden flex justify-center items-center p-2">
      <div className="md:flex flex-col border items-center xl:flex-row md:w-full max-w-7xl h-full shadow-xl shadow-black/10 relative bg-white rounded-xl mt-20 md:mt-0 ">
        <Image
          src={sparks}
          alt="sparks"
          width={0}
          height={0}
          className="absolute -left-28 -top-10"
        />
        <Image
          src={scramble}
          alt="scramble"
          width={150}
          height={0}
          className="absolute -top-10 -right-20"
        />
        <div className="w-5 h-5 rounded-full bg-custom-yellow absolute bottom-20 -right-10"></div>
        <div className="w-4 h-4 rounded-full bg-custom-orange  absolute -bottom-0 -right-20"></div>
        <div className="w-3 h-3 rounded-full bg-custom-purple  absolute -bottom-10 -right-10"></div>
        <div className="w-96 h-96 rounded-full bg-custom-purple hidden md:block absolute -bottom-48 -left-48 blur-3xl opacity-20 -z-10"></div>
        <div className="md:w-full lg:w-3/4  order-1  flex justify-center items-center p-8">
          <span className="text-3xl bg-custom-green rounded-3xl text-white p-4">
            Queremos saber de vos, podes contactarnos libremente para hacernos saber tus dudas,
            consultas o recomendaciones...
          </span>
        </div>
        <div className="md:w-full order-2 p-8 ">
          {" "}
          <form className="max-w-3xl mx-auto  md:w-full ">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
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
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Telefono (123-456-7890)
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="floating_message"
                id="floating_company"
                className="block py-2.5 px-0 w-full h-48 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mensaje
              </label>
            </div>
            <button type="submit" className="yellow-btn">
              enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
