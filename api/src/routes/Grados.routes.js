const express = require("express");
const {
  createGradoHandler,
  getAllGradosHandler,
  getUsersByCursoHandler,
} = require("../handlers/Grados.handler");
const { createPagoHandler } = require("../handlers/Pago.handler");
const { handleGradosFilters } = require("../middleware/Grados.middleware");

const router = express.Router();

router.get("/", handleGradosFilters, getAllGradosHandler);
router.get("/:cursoId/usuarios", getUsersByCursoHandler);
router.post("/", createGradoHandler);
router.post("/:gradoId/pagos", createPagoHandler);

module.exports = router;
