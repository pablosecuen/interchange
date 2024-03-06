const Joi = require("joi");

const { Grado } = require("../../db");

const gradoSchema = Joi.object({
  Nombre: Joi.string().required().max(255),
  Categoria: Joi.string().required().max(255),
  PrecioInscripcion: Joi.number().positive().required(),
  PrecioInscripcionExamenes: Joi.number().positive().required(),
  PrecioCuotaMensual: Joi.number().positive().required(),
  FechaVencimientoCuota: Joi.date().iso().required(),
  CuotaPagada: Joi.boolean().required(),
  InscripcionPagada: Joi.boolean().required(),
  InscripcionExamenesPagada: Joi.boolean().required(),
});

const validateGradoData = (req, res, next) => {
  const { error } = gradoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const handleGradosFilters = async (req, res, next) => {
  const {
    ID,
    Grado_Nombre,
    Grado_Categoria,
    PrecioInscripcion,
    PrecioInscripcionExamenes,
    PrecioCuotaMensual,
    FechaVencimientoCuota,
    CuotaPagada,
    InscripcionPagada,
  } = req.query;

  let filtros = {};

  if (ID) {
    // Convertir la cadena de IDs separados por comas en un array de IDs
    const idArray = ID.split(",");
    // Si hay más de un ID, usar un operador lógico OR en la consulta
    if (idArray.length > 1) {
      filtros.ID = idArray;
    } else {
      filtros.ID = ID;
    }
  }

  if (Grado_Nombre) {
    filtros.Grado_Nombre = Grado_Nombre;
  }

  if (Grado_Categoria) {
    filtros.Grado_Categoria = Grado_Categoria;
  }

  if (PrecioInscripcion) {
    filtros.PrecioInscripcion = PrecioInscripcion;
  }

  if (PrecioInscripcionExamenes) {
    filtros.PrecioInscripcionExamenes = PrecioInscripcionExamenes;
  }

  if (PrecioCuotaMensual) {
    filtros.PrecioCuotaMensual = PrecioCuotaMensual;
  }

  if (FechaVencimientoCuota) {
    filtros.FechaVencimientoCuota = FechaVencimientoCuota;
  }

  if (CuotaPagada !== undefined) {
    filtros.CuotaPagada = CuotaPagada === "true"; // Convertir el string a booleano
  }

  if (InscripcionPagada !== undefined) {
    filtros.InscripcionPagada = InscripcionPagada === "true"; // Convertir el string a booleano
  }

  req.gradosFiltros = filtros;

  next();
};

module.exports = { validateGradoData, handleGradosFilters };
