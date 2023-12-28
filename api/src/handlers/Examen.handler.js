// handlers/examenHandler.js

const {
  crearExamenConPreguntasYRespuestas,
  obtenerTodosLosExamenes,
  enviarExamenUsuario,
} = require("../controllers/Examen.controller");
const sqlInjectionValidation = require("../middleware/Examen.middleware");

const crearExamenHandler = async (req, res) => {
  await crearExamenConPreguntasYRespuestas(req, res);
};

const obtenerTodosLosExamenesHandler = async (req, res) => {
  await obtenerTodosLosExamenes(req, res);
};

const enviarExamenUsuarioHandler = async (req, res) => {
  await enviarExamenUsuario(req, res);
};

module.exports = { crearExamenHandler, obtenerTodosLosExamenesHandler, enviarExamenUsuarioHandler };
