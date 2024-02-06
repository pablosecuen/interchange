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
  pathNotasHandler,
  patchTiposHanlder,
} = require("../handlers/Usuarios.handler");
const { handleUsuariosFilters } = require("../middleware/Usuarios.middleware");

const router = express.Router();

// rutas para  usuarios
router.get("/", handleUsuariosFilters, getAllUsuariosHandler);
router.get("/:id/", getAnotacionesHandler);
router.get("/:userId/examenes-asociados", getExamenesAsociadosHandler);
router.post("/", createUserHandler);
router.post("/login", loginHanlder);
router.post("/:id", createAnotacionesHandler);
router.patch("/:id", patchUsuarioHandler);
router.patch("/:id", updateAnotacionesHandler);
router.patch("/notas/:id", pathNotasHandler);
router.patch("/tipo/:id", patchTiposHanlder);
router.delete("/:id", deleteUsuarioHandler);

module.exports = router;
