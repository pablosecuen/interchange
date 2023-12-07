// routes.ts
const express = require("express");
const {
  createUserHandler,
  getAllUsuariosHandler,
  patchUsuarioHandler,
  deleteUsuarioHandler,
} = require("../handlers/Usuarios.handler");
const {
  handleUsuariosFilters,
  validatePatchUserData,
  validateUserData,
} = require("../middleware/Usuarios.middleware");

const router = express.Router();

// rutas para  usuarios
router.post("/", validateUserData, createUserHandler);
router.get("/", handleUsuariosFilters, getAllUsuariosHandler);
router.patch("/:id", validatePatchUserData, patchUsuarioHandler);
router.delete("/:id", deleteUsuarioHandler);

module.exports = router;
