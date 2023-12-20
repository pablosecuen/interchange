// middleware/validarExamen.js

const validarExamen = (req, res, next) => {
  const { preguntas, respuestas, nota } = req.body;

  // Verificación de preguntas: debe ser un array y tener al menos una pregunta
  if (!Array.isArray(preguntas) || preguntas.length === 0) {
    return res.status(400).json({ message: "Se requiere al menos una pregunta para el examen." });
  }

  // Verificación de respuestas: debe ser un array y tener al menos una respuesta
  if (!Array.isArray(respuestas) || respuestas.length === 0) {
    return res.status(400).json({ message: "Se requiere al menos una respuesta para el examen." });
  }

  // Verificación de la nota: debe ser un número válido entre 0 y 10, por ejemplo
  if (typeof nota !== "number" || nota < 0 || nota > 10) {
    return res.status(400).json({ message: "La nota del examen es inválida." });
  }

  next(); // Si pasa la validación, continúa con el siguiente middleware o controlador
};

const examenesFilters = (req, res, next) => {
  const { id, titulo } = req.query;

  let filtros = {};

  if (titulo) {
    filtros.titulo = titulo;
  }

  if (id) {
    filtros.id = id;
  }

  req.usuariosFiltros = filtros; // Guardar los filtros en el objeto de solicitud

  next();
};

module.exports = { validarExamen, examenesFilters };
