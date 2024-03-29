// controllers/examenController.js


const { Examen, Usuario } = require("../../db");

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
    const examenes = await Examen.findAll({
      where: req.examenesFilters,
    });
    res.status(200).json({ examenes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al obtener los exámenes.", error: error.message });
  }
};

const enviarExamenUsuario = async (req, res) => {
  try {
    const { userID, examenID } = req.body;
    const usuario = await Usuario.findByPk(userID);
    const examen = await Examen.findByPk(examenID);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario  no encontrado" });
    }
    if (!examen) {
      return res.status(404).json({ error: "examen no encontrado" });
    }

    // Utilizar la relación para asociar el examen al usuario
    await usuario.addExamen(examen);

    res.status(200).json({ message: "Examen enviado correctamente al usuario." });
  } catch (error) {
    console.error("Error al enviar el examen al usuario:", error);
    res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
  }
};



module.exports = {
  crearExamenConPreguntasYRespuestas,
  obtenerTodosLosExamenes,
  enviarExamenUsuario,
};
