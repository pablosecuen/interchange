// routes.ts
const express = require("express");
const { createUserHandler } = require("../handlers/Usuarios.handler");

const router = express.Router();

// Definir la ruta para crear un usuario
router.post("/users", createUserHandler);

module.exports = router;
