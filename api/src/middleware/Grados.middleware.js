const Joi = require("joi");

const gradoSchema = Joi.object({
  Nombre: Joi.string().required(),
  Categoria: Joi.string().required(),
});

const validateGradoData = (req, res, next) => {
  const { error } = gradoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateGradoData };
