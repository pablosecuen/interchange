// routes.ts
const express = require("express");
const { createUserHandler, getAllUsuariosHandler } = require("../handlers/Usuarios.handler");
const { handleUsuariosFilters } = require("../middleware/Usuarios.middleware");

const router = express.Router();

// Definir la ruta para crear un usuario
router.post("/", createUserHandler);
router.get("/", handleUsuariosFilters, getAllUsuariosHandler);

module.exports = router;
