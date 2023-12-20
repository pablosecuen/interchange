const {
  guardarExamenCompletado,
  obtenerExamenesCompletados,
} = require("../controllers/ExamenCompletado.controller");

const handlerGuardarExamenCompletado = (req, res) => {
  guardarExamenCompletado(req, res);
};

const handlerGetAllExamsWithResults = (req, res) => {
  obtenerExamenesCompletados(req, res);
};

module.exports = { handlerGuardarExamenCompletado, handlerGetAllExamsWithResults };
