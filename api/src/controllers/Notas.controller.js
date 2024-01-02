// Ajusta la ruta si es necesario

const { Notas } = require("../../db");

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
    if (!userId || !notasData || !Array.isArray(notasData) || notasData.length === 0) {
      throw new Error("Se requiere el ID del usuario y una lista de notas válida.");
    }

    const createdNotas = await Notas.create({
      Usuario_ID: userId,
      notas: notasData,
    });

    return { message: "Notas creadas correctamente.", notas: createdNotas };
  } catch (error) {
    throw new Error("Error al crear las notas: " + error.message);
  }
};

const updateNotasByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const RegistroNotas = req.body.Notas;

    if (!userId || !RegistroNotas || !Array.isArray(RegistroNotas) || RegistroNotas.length === 0) {
      return res
        .status(400)
        .json({ message: "Se requiere el ID del usuario y una lista de notas válida." });
    }

    // Buscar las notas del usuario
    let existingNotas = await Notas.findOne({ where: { Usuario_ID: userId } });

    if (!existingNotas) {
      return res
        .status(404)
        .json({ message: "No se encontraron notas para el usuario especificado." });
    }

    // Reemplazar completamente las notas existentes con los nuevos datos
    existingNotas = Object.assign(existingNotas, { notas: RegistroNotas });

    // Guardar las notas actualizadas en la base de datos
    await existingNotas.save();

    res.status(200).json({ message: "Notas actualizadas correctamente.", notas: existingNotas });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar las notas.", error: error.message });
  }
};

module.exports = { getNotasByUserIdController, createNotas, updateNotasByUserIdController };
