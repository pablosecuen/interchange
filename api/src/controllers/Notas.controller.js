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
};

module.exports = { getNotasByUserIdController, createNotas, updateNotasByUserIdController };
