const { createUserController } = require("../controllers/Usuarios.controller");
const { validateUserData } = require("../middleware/Usuarios.middleware");

const createUserHandler = (req, res) => {
  // Puedes agregar varios middlewares aquí antes de llamar al controlador
  validateUserData(req, res, () => {
    createUserController(req, res);
  });
};

module.exports = { createUserHandler };
