const express = require("express");
const morgan = require("morgan");
const { conn } = require("./db");
const userRoutes = require("./src/routes/Usuarios.routes");
const gradosRoutes = require("./src/routes/Grados.routes");
const { sequelize } = require("./db");

const app = express();

// Configuración de Morgan
// Modo "dev" muestra mensajes de registro concisos
app.use(morgan("dev"));
app.use(express.json());
// Usar las rutas de usuario
app.use("/api/users", userRoutes);
app.use("/api/grados", gradosRoutes);

// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3001;

// Iniciar el servidor después de sincronizar los modelos
/* sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}); */

 sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}); 
