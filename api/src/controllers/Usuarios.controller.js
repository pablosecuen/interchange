const { Usuario } = require("../../db");

const createUserController = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await Usuario.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error: error.message });
  }
};

const getAllUsuariosController = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      where: req.usuariosFiltros,
    });

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
  }
};

module.exports = { createUserController, getAllUsuariosController };
