const express = require("express");
const {
  getNotasByUserIdHandler,
  createNotasHandler,
  updateNotasByUserIdHandler,
} = require("../handlers/Notas.handler");
const router = express.Router();

router.get("/:userId", getNotasByUserIdHandler);
router.post("/crear/:userId", createNotasHandler);
router.patch("/:userId", updateNotasByUserIdHandler);
module.exports = router;
