// En tu archivo de rutas (por ejemplo, src/routes/routes.js)

const express = require("express");
const campusHandlers = require("../handlers/Campus.handlers");

const router = express.Router();

router.get("/", campusHandlers.getAllCampusHandler);
router.get("/:gradoId", campusHandlers.getAllCampusByGradoIDHandler);
router.post("/", campusHandlers.createCampusHandler);
router.patch("/:campusId", campusHandlers.updateCampusHandler);
router.delete("/:campusId", campusHandlers.deleteCampusHandler);

module.exports = router;
