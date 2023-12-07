const {
  createUserController,
  getAllUsuariosController,
} = require("../controllers/Usuarios.controller");
const { validateUserData } = require("../middleware/Usuarios.middleware");

const createUserHandler = (req, res) => {
  validateUserData(req, res, () => {
    createUserController(req, res);
  });
};

const getAllUsuariosHandler = (req, res) => {
  getAllUsuariosController(req, res);
};

module.exports = { createUserHandler, getAllUsuariosHandler };
