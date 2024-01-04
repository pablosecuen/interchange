import React from "react";

const termsandprivacy = () => {
  return (
    <div className="w-full min-h-[90vh] h-full md:mt-20 mt-12 flex justify-center items-center text-sm p-4 md:text-base md:p-0">
      <div className="max-w-2xl w-full p-4 py-10 md:py-20">
        <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
        <ol className="list-decimal ">
          <li className="pb-4">
            <span className="text-xl pb-2">Aceptación de Términos:</span>{" "}
            <p>
              Al utilizar nuestra aplicación, aceptas cumplir con estos términos y condiciones, así
              como con nuestra política de privacidad.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Información Personal: </span>
            <p>
              La aplicación recopila información personal de usuarios, alumnos y demás miembros
              relacionados con la institución educativa. Esta información se utiliza únicamente con
              fines educativos y administrativos relacionados con la aplicación.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Uso Adecuado: </span>
            <p>
              Los usuarios se comprometen a utilizar la aplicación de manera responsable y de
              acuerdo con las normativas de la institución educativa. Cualquier uso indebido o
              ilegal de la aplicación está estrictamente prohibido.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Propiedad Intelectual:</span>{" "}
            <p>
              Todos los derechos de propiedad intelectual relacionados con la aplicación y su
              contenido pertenecen a la institución educativa. No se permite la reproducción o
              distribución no autorizada del contenido.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Modificaciones: </span>
            <p>
              {" "}
              Nos reservamos el derecho de realizar cambios o actualizaciones en la aplicación, sus
              características o estos términos y condiciones en cualquier momento sin previo aviso.
            </p>
          </li>
        </ol>
        <h2 className="text-2xl font-bold my-4">Política de Privacidad</h2>
        <ul className="list-decimal">
          <li className="pb-4">
            <span className="text-xl pb-2">Información Recopilada: </span>
            <p>
              La aplicación puede recopilar información personal como nombres, direcciones de correo
              electrónico, información académica y otra información relevante para la gestión
              educativa.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Uso de la Información:</span>{" "}
            <p>
              La información recopilada se utiliza únicamente con fines educativos, administrativos
              y de mejora de la aplicación. No compartimos ni vendemos esta información a terceros.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Seguridad de los Datos:</span>{" "}
            <p>
              {" "}
              Nos comprometemos a proteger la información personal de los usuarios mediante medidas
              de seguridad adecuadas para prevenir accesos no autorizados o divulgación no deseada.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Derechos del Usuario:</span>{" "}
            <p>
              Los usuarios tienen derecho a acceder, corregir o eliminar su información personal.
              Pueden contactarnos para ejercer estos derechos o si tienen alguna pregunta sobre el
              manejo de sus datos.
            </p>
          </li>
          <li className="pb-4">
            <span className="text-xl pb-2">Consentimiento:</span>{" "}
            <p>
              {" "}
              Al utilizar la aplicación, los usuarios otorgan su consentimiento para la recopilación
              y el uso de su información personal según lo descrito en esta política de privacidad.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default termsandprivacy;
