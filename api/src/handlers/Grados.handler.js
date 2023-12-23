const {
  createGradoController,
  getAllGradosController,
  getUsersByCursoController,
} = require("../controllers/Grados.controller");

const createGradoHandler = (req, res) => {
  createGradoController(req, res);
};

const getAllGradosHandler = (req, res) => {
  getAllGradosController(req, res);
};

const getUsersByCursoHandler = (req, res) => {
  getUsersByCursoController(req, res);
};

module.exports = { createGradoHandler, getAllGradosHandler, getUsersByCursoHandler };
