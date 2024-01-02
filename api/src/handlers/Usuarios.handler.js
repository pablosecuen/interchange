const {
  createUserController,
  getAllUsuariosController,
  patchUsuarioController,
  deleteUsuarioController,
  loginController,
  getExamenesAsociadosController,
  getAnotaciones,
  createAnotaciones,
  updateAnotaciones,
  patchNotasController,
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

const getAnotacionesHandler = (req, res) => {
  getAnotaciones(req, res);
};

const createAnotacionesHandler = async (req, res) => {
  await createAnotaciones(req, res);
};

const updateAnotacionesHandler = async (req, res) => {
  await updateAnotaciones(req, res);
};

const pathNotasHandler = async (req, res) => {
  await patchNotasController(req, res);
};

module.exports = {
  createUserHandler,
  getAllUsuariosHandler,
  patchUsuarioHandler,
  deleteUsuarioHandler,
  loginHanlder,
  getExamenesAsociadosHandler,
  getAnotacionesHandler,
  createAnotacionesHandler,
  updateAnotacionesHandler,
  pathNotasHandler,
};
