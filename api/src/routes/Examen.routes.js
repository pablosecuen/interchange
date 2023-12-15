// routes/examenRoutes.js

const express = require("express");
const router = express.Router();
const {
  crearExamenHandler,
  obtenerTodosLosExamenesHandler,
  enviarExamenUsuarioHandler,
} = require("../handlers/Examen.handler");

// Ruta para crear un examen
router.post("/crear", crearExamenHandler);

// Ruta para obtener todos los exámenes
router.get("/", obtenerTodosLosExamenesHandler);

// Endpoint para enviar un examen a un usuario
router.post("/enviar-examen", enviarExamenUsuarioHandler);

module.exports = router;
