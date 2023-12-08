const { createPagoController, getAllPagosController } = require("../controllers/Pago.controller");

const createPagoHandler = (req, res) => {
  createPagoController(req, res);
};

const getAllPagosHandler = (req, res) => {
  getAllPagosController;
};

module.exports = { createPagoHandler, getAllPagosHandler };
