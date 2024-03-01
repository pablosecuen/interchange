const { ExamenCompletado } = require("../../db");
const { Usuario, Examen } = require("../../db");
const guardarExamenCompletado = async (req, res) => {
  console.log(req.body);
  const { examenID, userID, preguntas } = req.body;
  try {
    const respuestas = preguntas.map((pregunta) => ({
      enunciado: pregunta.enunciado,
      respuestaUsuario: pregunta.respuestaUsuario,
      respuestaCorrecta: pregunta.respuestaCorrecta,
    }));

    const totalPreguntas = respuestas.length;
    const respuestasCorrectas = respuestas.filter(
      (pregunta) => pregunta.respuestaUsuario === pregunta.respuestaCorrecta
    ).length;

    const porcentajeCorrecto = (respuestasCorrectas / totalPreguntas) * 100;

    const usuario = await Usuario.findByPk(userID);
    const examen = await Examen.findByPk(examenID);

    const examenGuardado = await ExamenCompletado.create({
      examenID,
      userID,
      respuestas,
      nota: porcentajeCorrecto,
      examTitle: examen.examTitle,
    });

    await usuario.removeExamen(examen);

    res
      .status(201)
      .json({ mensaje: "Examen completado guardado exitosamente", examen: examenGuardado });
  } catch (error) {
    console.error("Error al guardar el examen completado:", error);
    res.status(500).json({ error: "Hubo un problema al guardar el examen completado" });
  }
};

const obtenerExamenesCompletados = async (req, res) => {
  try {
    const examenes = await ExamenCompletado.findAll(); // Obtiene todos los exámenes completados de la base de datos

    res.status(200).json({ examenes });
  } catch (error) {
    console.error("Error al obtener los exámenes completados:", error);
    res.status(500).json({ error: "Hubo un problema al obtener los exámenes completados" });
  }
};

module.exports = { guardarExamenCompletado, obtenerExamenesCompletados };
