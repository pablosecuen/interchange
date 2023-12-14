const express = require("express");

const { handlePagosFilters } = require("../middleware/Pago.middleware");
const { getAllPagosController } = require("../controllers/Pago.controller");
const { updatePagadoHandler } = require("../handlers/Pago.handler");

const router = express.Router();

router.get("/", handlePagosFilters, getAllPagosController);
router.put("/:pagoId", (req, res) => {
  console.log("Solicitud PUT recibida en la ruta de actualización de pagos");

  console.log("Datos de la solicitud:", req.body);

  // Llamada al controlador real
  updatePagadoHandler(req, res);
});

module.exports = router;
