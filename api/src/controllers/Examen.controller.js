// controllers/examenController.js
// controllers/examenesController.js

const { Examen } = require("../../db");

const crearExamenConPreguntasYRespuestas = async (req, res) => {
  const { titulo, preguntas } = req.body;

  try {
    const nuevoExamen = await Examen.create({
      titulo,
      preguntas, // El campo preguntas se asigna directamente con la estructura recibida
    });

    res.status(201).json({ nuevoExamen });
  } catch (error) {
    res.status(500).json({ message: "Hubo un error al crear el examen.", error: error.message });
  }
};

const obtenerTodosLosExamenes = async (req, res) => {
  try {
    const examenes = await Examen.findAll();
    res.status(200).json({ examenes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al obtener los exámenes.", error: error.message });
  }
};

module.exports = { crearExamenConPreguntasYRespuestas, obtenerTodosLosExamenes };
