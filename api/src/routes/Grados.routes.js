const express = require("express");
const { createGradoHandler, getAllGradosHandler } = require("../handlers/Grados.handler");
const { createPagoHandler } = require("../handlers/Pago.handler");
const { handleGradosFilters } = require("../middleware/Grados.middleware");

const router = express.Router();

router.post("/", createGradoHandler);
router.get("/", handleGradosFilters, getAllGradosHandler);
router.post("/:gradoId/pagos", createPagoHandler);

module.exports = router;
