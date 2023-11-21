const { Usuario } = require("../../db");

const createUserController = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await Usuario.create(userData); // Utiliza el modelo Usuario directamente
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error: error.message });
  }
};

module.exports = { createUserController };
