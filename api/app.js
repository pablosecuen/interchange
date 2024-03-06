const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./src/routes/Usuarios.routes");
const gradosRoutes = require("./src/routes/Grados.routes");
const pagosRoutes = require("./src/routes/Pagos.routes");
const examenRoutes = require("./src/routes/Examen.routes");
const examenCompletadoRoutes = require("./src/routes/ExamenCompletado.routes");
const notasRoutes = require("./src/routes/Notas.routes");
const campusRoutes = require("./src/routes/Campus.routes");

const { sequelize } = require("./db");
const {
  sendEmailNotificationRegister,
  sendEmailNotificationCurso,
  sendEmailNotificationVencimiento,
  sendEmailPreInscripcion,
  sendEmailAcuerdoinstitucional,
} = require("./src/nodemailer");

const app = express();

// Middleware para habilitar CORS
app.use((req, res, next) => {
  const allowedOrigins = [
       "http://localhost:3000",
    "http://localhost:3002",
    "http://localhost:3001",
    "https://interchange-admin.vercel.app",
    "https://interchange-azure.vercel.app",
    "https://www.interchange.com.ar",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  // Handling preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
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
app.use("/api/notas", notasRoutes);
app.use("/api/campus", campusRoutes);
// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("¡Hola, Interchange!");
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

app.get(
  "/send-email/preinscripcion/:email/:firstName/:lastName/:firstName1/:lastName1/:firstNameStudent/:lastNameStudent/:dateOfBirth/:phoneNumber/:address/:grade/:emailAddress/:phone/:message",
  async (req, res) => {
    try {
      const {
        email: newUserEmail,
        firstName,
        lastName,
        firstName1,
        lastName1,
        firstNameStudent,
        lastNameStudent,
        dateOfBirth,
        phoneNumber,
        address,
        grade,
        emailAddress,
        phone,
        message,
      } = req.params;

      const decodedEmail = decodeURIComponent(newUserEmail);

      const formData = {
        floating_first_name: firstName,
        floating_last_name: lastName,
        floating_first_name1: firstName1,
        floating_last_name1: lastName1,
        floating_first_namestudent: firstNameStudent,
        floating_last_namestudent: lastNameStudent,
        floating_date_of_birth: dateOfBirth,
        floating_phone_numberstudent: phoneNumber,
        floating_addressstudent: address,
        select_title: grade,
        floating_email: emailAddress,
        floating_phone: phone,
        floating_message: message,
      };

      const info = await sendEmailPreInscripcion(decodedEmail, formData);
      res.send(info);
    } catch (error) {
      res.send(error.message, "app");
    }
  }
);

app.get("/send-email/acuerdoinstitucional/:adultemail", async (req, res) => {
  try {
    const { adultemail: EmailAdulto } = req.params;

    const decodedEmail = decodeURIComponent(EmailAdulto);

    const info = await sendEmailAcuerdoinstitucional(decodedEmail);
    res.send(info);
  } catch (error) {
    res.send(error.message);
  }
});

// Iniciar el servidor después de sincronizar los modelos
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});

/* sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}); */
