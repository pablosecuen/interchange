// handlers/examenHandler.js

const {
  crearExamenConPreguntasYRespuestas,
  obtenerTodosLosExamenes,
} = require("../controllers/Examen.controller");

const crearExamenHandler = async (req, res) => {
  await crearExamenConPreguntasYRespuestas(req, res);
};

const obtenerTodosLosExamenesHandler = async (req, res) => {
  await obtenerTodosLosExamenes(req, res);
};

module.exports = { crearExamenHandler, obtenerTodosLosExamenesHandler };
