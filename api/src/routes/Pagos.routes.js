const express = require("express");

const { handlePagosFilters } = require("../middleware/Pago.middleware");
const { getAllPagosController } = require("../controllers/Pago.controller");

const router = express.Router();

router.get("/", handlePagosFilters, getAllPagosController);

module.exports = router;
