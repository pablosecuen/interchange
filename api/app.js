const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./src/routes/Usuarios.routes");
const gradosRoutes = require("./src/routes/Grados.routes");
const pagosRoutes = require("./src/routes/Pagos.routes");
const examenRoutes = require("./src/routes/Examen.routes");
const examenCompletadoRoutes = require("./src/routes/ExamenCompletado.routes");
const { sequelize } = require("./db");

const app = express();

// Middleware para habilitar CORS
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3002",
    "https://interchange-admin.vercel.app",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Configuración de Morgan
// Modo "dev" muestra mensajes de registro concisos
app.use(morgan("dev"));
app.use(express.json());
// Usar las rutas de usuario
app.use("/api/users", userRoutes);
app.use("/api/grados", gradosRoutes);
app.use("/api/pagos", pagosRoutes);
app.use("/api/examen", examenRoutes);
app.use("/api/examen-completado", examenCompletadoRoutes);

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
