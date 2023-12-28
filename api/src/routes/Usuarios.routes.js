// routes.ts
const express = require("express");
const {
  createUserHandler,
  getAllUsuariosHandler,
  patchUsuarioHandler,
  deleteUsuarioHandler,
  loginHanlder,
  getExamenesAsociadosHandler,
  getAnotacionesHandler,
  createAnotacionesHandler,
  updateAnotacionesHandler,
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
router.get("/:id/", getAnotacionesHandler);
router.post("/", createUserHandler);
router.post("/login", loginHanlder);
router.post("/:id", createAnotacionesHandler);
router.patch("/:id", patchUsuarioHandler);
router.patch("/:id", updateAnotacionesHandler);
router.delete("/:id", deleteUsuarioHandler);

module.exports = router;
