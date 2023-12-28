const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./src/routes/Usuarios.routes");
const gradosRoutes = require("./src/routes/Grados.routes");
const pagosRoutes = require("./src/routes/Pagos.routes");
const examenRoutes = require("./src/routes/Examen.routes");
const examenCompletadoRoutes = require("./src/routes/ExamenCompletado.routes");
const { sequelize } = require("./db");
const {
  sendEmailNotificationRegister,
  sendEmailNotificationCurso,
  sendEmailNotificationVencimiento,
} = require("./src/nodemailer");

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
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(morgan("dev"));
app.use(express.json());

// Usar las rutas de usuario
app.use("/api/users", userRoutes);
app.use("/api/grados", gradosRoutes);
app.use("/api/pagos", pagosRoutes);
app.use("/api/examen", examenRoutes);
app.use("/api/examen-completado", examenCompletadoRoutes);
app.use("/api/anotaciones", userRoutes);
// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Run /send-email to send test email");
});

app.get("/send-email/register/:email", async (req, res) => {
  try {
    const { email: newUserEmail } = req.params;

    const info = await sendEmailNotificationRegister(newUserEmail);
    res.send(info);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/send-email/curso/:email", async (req, res) => {
  try {
    const { email: newUserEmail } = req.params;

    const info = await sendEmailNotificationCurso(newUserEmail);
    res.send(info);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/send-email/vencimiento/:email", async (req, res) => {
  try {
    const { email: newUserEmail } = req.params;

    const info = await sendEmailNotificationVencimiento(newUserEmail);
    res.send(info);
  } catch (error) {
    res.send(error.message);
  }
});

// Iniciar el servidor después de sincronizar los modelos
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});

/* sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}); */
