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
} = require("../middleware/Usuarios.middleware");

const router = express.Router();

// Definir la ruta para crear un usuario
router.post("/", createUserHandler);
router.get("/", handleUsuariosFilters, getAllUsuariosHandler);
router.patch("/:id", validatePatchUserData, patchUsuarioHandler);
router.delete("/:id", deleteUsuarioHandler);

module.exports = router;
