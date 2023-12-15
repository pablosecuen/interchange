const express = require("express");

const { handlePagosFilters } = require("../middleware/Pago.middleware");
const { getAllPagosController } = require("../controllers/Pago.controller");
const { updatePagadoHandler } = require("../handlers/Pago.handler");

const router = express.Router();

router.get("/", handlePagosFilters, getAllPagosController);
router.put("/:pagoId", updatePagadoHandler);

module.exports = router;
