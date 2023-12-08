const { createPagoController } = require("../controllers/Pago.controller");

const createPagoHandler = (req, res) => {
  createPagoController(req, res);
};

module.exports = { createPagoHandler };
