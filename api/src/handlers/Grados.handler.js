const {
  createGradoController,
  getAllGradosController,
} = require("../controllers/Grados.controller");

const createGradoHandler = (req, res) => {
  createGradoController(req, res);
};

const getAllGradosHandler = (req, res) => {
  getAllGradosController(req, res);
};

module.exports = { createGradoHandler, getAllGradosHandler };
