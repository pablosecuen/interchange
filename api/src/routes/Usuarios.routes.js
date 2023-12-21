// routes.ts
const express = require("express");
const {
  createUserHandler,
  getAllUsuariosHandler,
  patchUsuarioHandler,
  deleteUsuarioHandler,
  loginHanlder,
  getExamenesAsociadosHandler,
} = require("../handlers/Usuarios.handler");
const {
  handleUsuariosFilters,
  validatePatchUserData,
  validateUserData,
} = require("../middleware/Usuarios.middleware");

const router = express.Router();

// rutas para  usuarios
router.get("/", handleUsuariosFilters, getAllUsuariosHandler);
router.get("/:userId/examenes-asociados", getExamenesAsociadosHandler);
router.post("/", validateUserData, createUserHandler);
router.post("/login", loginHanlder);
router.patch("/:id", patchUsuarioHandler);
router.delete("/:id", deleteUsuarioHandler);

module.exports = router;
