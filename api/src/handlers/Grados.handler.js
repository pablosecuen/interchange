const { createGradoController, getAllGradosController  } = require("../controllers/Grados.controller");
const { validateGradoData } = require("../middleware/Grados.middleware");

const createGradoHandler = (req, res) => {
  validateGradoData(req, res, () => {
    createGradoController(req, res);
  });
};

const getAllGradosHandler = (req, res) => {
    getAllGradosController(req, res);
  };

module.exports = { createGradoHandler,getAllGradosHandler  };
