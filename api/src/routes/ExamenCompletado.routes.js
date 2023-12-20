const express = require("express");
const {
  handlerGuardarExamenCompletado,
  handlerGetAllExamsWithResults,
} = require("../handlers/ExamenCompletado.handler");
const router = express.Router();

// Ruta para examenes completado
router.get("/", handlerGetAllExamsWithResults);
router.post("/guardar", handlerGuardarExamenCompletado);

module.exports = router;
