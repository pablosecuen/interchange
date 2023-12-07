const express = require("express");
const { createGradoHandler, getAllGradosHandler } = require("../handlers/Grados.handler");

const router = express.Router();

router.post("/", createGradoHandler);
router.get("/", getAllGradosHandler);

module.exports = router;
