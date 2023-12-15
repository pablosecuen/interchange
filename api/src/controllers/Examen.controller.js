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

// Examen.controller.js

// Importar el modelo de Examen si es necesario
// const Examen = require('../models/Examen');

const enviarExamenUsuario = async (req, res) => {
  try {
    // Obtener los datos validados y sanitizados del cuerpo de la solicitud
    const { userID, examenID } = req.body;

    // Lógica para asociar el examen al usuario con los IDs proporcionados
    // Por ejemplo:
    // const examen = await Examen.findByPk(examenID);
    // await examen.addUsuario(userID);

    // Envío de respuesta exitosa
    res.status(200).json({ message: "Examen enviado correctamente al usuario." });
  } catch (error) {
    console.error("Error al enviar el examen al usuario:", error);
    res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
  }
};

module.exports = {
  enviarExamenUsuario,
};

module.exports = {
  crearExamenConPreguntasYRespuestas,
  obtenerTodosLosExamenes,
  enviarExamenUsuario,
};
