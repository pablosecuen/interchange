# Interchange Campus Virtual App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Este repositorio contiene el código fuente de una aplicación de Interchange Campus Virtual desarrollada con tecnologías modernas. La aplicación consta de tres partes principales: una interfaz web desarrollada en Next.js, un dashboard de administrador y un servidor de backend con Node.js. Además, se utiliza una base de datos para gestionar la información del campus virtual.

## Estructura del Repositorio

- **dashboard:** Carpeta que contiene el código fuente del dashboard de administrador.
- **api:** Carpeta que contiene el código fuente del servidor de backend.
- **web:** Carpeta que contiene el código fuente de la interfaz web.

## Tecnologías Utilizadas

### Dashboard de Administrador
- **Next.js:** Framework de React para la creación de aplicaciones web rápidas y eficientes.
- **@nextui-org/react:** Biblioteca de componentes UI para Next.js.
- **apexcharts:** Librería para la creación de gráficos interactivos.
- **framer-motion:** Librería para animaciones en React.
- **react-apexcharts:** Integración de ApexCharts con React.
- **sonner:** Librería para notificaciones.
- **xlsx:** Librería para manipular archivos de Excel.

### Servidor de Backend
- **Node.js:** Entorno de ejecución para JavaScript en el lado del servidor.
- **Express:** Framework web para Node.js.
- **express-openid-connect:** Middleware para la autenticación basada en OpenID Connect.
- **sequelize:** ORM para la comunicación con bases de datos relacionales.
- **axios:** Cliente HTTP para realizar peticiones a servicios externos.
- **joi:** Biblioteca para la validación de datos.
- **nodemailer:** Librería para enviar correos electrónicos.
- **pg:** Cliente de PostgreSQL para Node.js.

### Interfaz Web
- **Next.js:** Framework de React para la creación de aplicaciones web.
- **flowbite:** Conjunto de componentes y estilos para el desarrollo rápido de interfaces.
- **react-magic-motion:** Librería para animaciones entre transiciones de páginas en React.
- **react-player:** Componente de reproductor multimedia para React.

## User Stories

### Como Estudiante
- Puedo iniciar sesión en el campus virtual con mis credenciales.
- Puedo ver mis cursos y materiales de estudio.
- Puedo tomar exámenes online.
- Puedo realizar tareas y enviarlas a través de la plataforma.


### Como Profesor
- Puedo agregar materiales de estudio.
- Puedo crear y calificar tareas asignadas a los estudiantes.

### Como Administrador
- Puedo gestionar usuarios, tanto estudiantes como profesores.
- Puedo gestionar usuarios, tanto estudiantes como profesores.
- Puedo supervisar el rendimiento y la participación de los usuarios.
- Puedo generar informes y estadísticas sobre el uso de la plataforma.
- Puedo realizar acciones administrativas, como cambiar permisos de usuarios, editar notas de alumnos y enviar notificaciones de pagos.

## Configuración del Desarrollo

1. **Clonar el Repositorio:**
   ```bash
   git clone [https://github.com/pablosecuen/interchange.git](https://github.com/pablosecuen/interchange.git)
  



INSTALAR DEPENDENCIAS

cd dashboard
npm install
cd ../api
npm install
cd ../web
npm install




EJECUCION DEL PROYECTO

DASHBOARD ADMINISTRADOR
cd admin
npm run dev

SERVIDOR BACKEND
cd api
npm start


INTERFAZ WEB
cd web
npm run dev

