const Joi = require("joi");

const userSchema = Joi.object({
  Nombre: Joi.string()
    .max(20)
    .pattern(/^[a-zA-Z\s]+$/)
    .required(),
  Apellido: Joi.string()
    .max(20)
    .pattern(/^[a-zA-Z\s]+$/)
    .required(),
  Email: Joi.string().email().required(),
  Password: Joi.string().min(8).required(),
  Tipo: Joi.string().required(),
  Activo: Joi.boolean().required(),
  Grado_ID: Joi.string().uuid().required(),
  Grado_Nombre: Joi.string().max(20).required(),
  Grado_Categoria: Joi.string().max(20).required(),
});

const patchUserSchema = Joi.object({
  Activo: Joi.boolean().required(),
});

const validateUserData = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const handleUsuariosFilters = (req, res, next) => {
  const { nombre, apellido, email, tipo, activo, grado_id, grado_nombre, categoria, id } =
    req.query;

  let filtros = {};

  if (nombre) {
    filtros.Nombre = nombre;
  }

  if (apellido) {
    filtros.Apellido = apellido;
  }

  if (email) {
    filtros.Email = email;
  }

  if (tipo) {
    filtros.Tipo = tipo;
  }

  if (activo) {
    filtros.Activo = activo;
  }

  if (grado_id) {
    filtros.Grado_ID = grado_id;
  }

  if (grado_nombre) {
    filtros.Grado_Nombre = grado_id;
  }

  if (categoria) {
    filtros.Categoria = grado_id;
  }

  if (id) {
    filtros.ID = id;
  }

  req.usuariosFiltros = filtros; // Guardar los filtros en el objeto de solicitud

  next();
};

const validatePatchUserData = (req, res, next) => {
  const { error } = patchUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateUserData, handleUsuariosFilters, validatePatchUserData };
