// Ajusta la ruta si es necesario

const { Notas, Usuario } = require("../../db");

const getNotasByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;

    const notas = await Notas.findAll({
      where: { Usuario_ID: userId },
      attributes: ["ID", "Usuario_ID", "notas"], // Obtener solo la columna 'notas'
    });

    res.status(200).json({ notas });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las notas", error: error.message });
  }
};

const createNotas = async (userId, notasData) => {

  try {
    if (!userId || notasData === undefined) {
      throw new Error("Se requiere el ID del usuario y datos válidos de notas.");
    }

    const existingNotas = await Notas.findOne({ where: { Usuario_ID: userId } });

    if (!existingNotas) {
      // Si no hay notas existentes, crea un array vacío como datos iniciales
      const createdNotas = await Notas.create({
        Usuario_ID: userId,
        notas: [],
      });

      return { message: "Notas creadas correctamente.", notas: createdNotas };
    }

    // Si ya existen notas para este usuario, actualiza las notas con los nuevos datos
    await existingNotas.update({ notas: notasData });

    return { message: "Notas actualizadas correctamente.", notas: existingNotas };
  } catch (error) {
    throw new Error("Error al crear o actualizar las notas: " + error.message);
  }
};

/* const updateNotasByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const newNotas = req.body.Notas;

    // ...validaciones de entrada...

    // Buscar al Usuario
    let user = await Usuario.findOne({ where: { ID: userId } });

    if (!user) {
      return res.status(404).json({ message: "No se encontró el usuario." });
    }

    // Eliminar todas las notas existentes asociadas a ese usuario
    await Notas.destroy({ where: { Usuario_ID: userId } });

    // Crear las nuevas notas asociadas al usuario
    await Notas.bulkCreate(
      newNotas.map((nota) => ({
        Usuario_ID: userId,
        notas: nota,
      }))
    );

    // Obtener el usuario actualizado con las notas
    user = await Usuario.findOne({
      where: { ID: userId },
      include: [{ model: Notas, as: "RegistroNotas" }],
    });

    res.status(200).json({ message: "Notas actualizadas correctamente.", user });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar las notas.", error: error.message });
  }
}; */

const updateNotasByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const newNotas = req.body.Notas;

    // ...validaciones de entrada...

    let user = await Usuario.findOne({ where: { ID: userId } });

    if (!user) {
      return res.status(404).json({ message: "No se encontró el usuario." });
    }

    for (const newNota of newNotas) {
      const { grado, examenFinal, trimestres } = newNota;

      const existingNota = await Notas.findOne({
        where: { Usuario_ID: userId, "notas.grado": grado },
      });

      if (existingNota) {
        // Si ya existen notas para ese grado, actualizarlas
        await existingNota.update({ examenFinal, "notas.trimestres": trimestres });
        if (existingNota.notas.examenFinal) {
          await existingNota.update({ "notas.examenFinal": examenFinal });
        } else {
          await existingNota.update({ "notas.examenFinal": examenFinal });
        }
      } else {
        // Si no existen notas para ese grado, crearlas
        await Notas.create({
          Usuario_ID: userId,
          notas: {
            grado,
            examenFinal,
            trimestres,
          },
        });
      }
    }

    user = await Usuario.findOne({
      where: { ID: userId },
      include: [{ model: Notas, as: "RegistroNotas" }],
    });

    res.status(200).json({ message: "Notas actualizadas correctamente.", user });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar las notas.", error: error.message });
  }
};

module.exports = { getNotasByUserIdController, createNotas, updateNotasByUserIdController };
