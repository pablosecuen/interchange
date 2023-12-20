const {
  createUserController,
  getAllUsuariosController,
  patchUsuarioController,
  deleteUsuarioController,
  loginController,
  getExamenesAsociadosController,
} = require("../controllers/Usuarios.controller");

const createUserHandler = (req, res) => {
  createUserController(req, res);
};

const getAllUsuariosHandler = (req, res) => {
  getAllUsuariosController(req, res);
};

const patchUsuarioHandler = (req, res) => {
  patchUsuarioController(req, res);
};

const deleteUsuarioHandler = (req, res) => {
  deleteUsuarioController(req, res);
};

const loginHanlder = (req, res) => {
  loginController(req, res);
};
const getExamenesAsociadosHandler = (req, res) => {
  getExamenesAsociadosController(req, res);
};

module.exports = {
  createUserHandler,
  getAllUsuariosHandler,
  patchUsuarioHandler,
  deleteUsuarioHandler,
  loginHanlder,
  getExamenesAsociadosHandler
};
