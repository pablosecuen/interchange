const {
  createPagoController,
  getAllPagosController,
  updatePagadoController,
} = require("../controllers/Pago.controller");

const createPagoHandler = (req, res) => {
  createPagoController(req, res);
};

const getAllPagosHandler = (req, res) => {
  getAllPagosController;
};

const updatePagadoHandler = (req, res) => {
  const { pagoId, mes, nuevoEstado } = req.body;

  updatePagadoController(req, res, { pagoId, mes, nuevoEstado });
};

module.exports = { createPagoHandler, getAllPagosHandler, updatePagadoHandler };
