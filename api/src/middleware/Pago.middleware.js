const Joi = require("joi");

const pagoSchema = Joi.object({
  Fecha: Joi.date().iso().required(),
  EstadoCuota: Joi.string().valid("Pendiente", "Pagado").required(),
  EstadoInscripcionGrado: Joi.string().valid("Pendiente", "Pagado").required(),
  EstadoInscripcionExamenes: Joi.string().valid("Pendiente", "Pagado").required(),
  VencimientoCuota: Joi.date().iso().required(),
  VencimientoExamen: Joi.date().iso().required(),
  VencimientoInscripcionGrado: Joi.date().iso().required(),
  MontoCuota: Joi.number().positive().required(),
  MontoInscripcionGrado: Joi.number().positive().required(),
  MontoInscripcionExamenes: Joi.number().positive().required(),
});

const validatePagoData = (req, res, next) => {
  const { error } = pagoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validatePagoData };
