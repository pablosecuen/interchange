// routes/examenRoutes.js

const express = require("express");
const router = express.Router();
const {
  crearExamenHandler,
  obtenerTodosLosExamenesHandler,
} = require("../handlers/Examen.handler");

// Ruta para crear un examen
router.post("/crear", crearExamenHandler);

// Ruta para obtener todos los exámenes
router.get("/", obtenerTodosLosExamenesHandler);

module.exports = router;
