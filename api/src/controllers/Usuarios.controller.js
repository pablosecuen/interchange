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

const patchUsuarioController = async (req, res) => {
  try {
    const { id } = req.params;
    const { Activo } = req.body;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    usuario.Activo = Activo;
    await usuario.save();

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error: error.message });
  }
};



const deleteUsuarioController = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    usuario.Activo = false;
    await usuario.save();

    res.status(200).json({ message: "Usuario desactivado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al desactivar el usuario", error: error.message });
  }
};




module.exports = { createUserController, getAllUsuariosController, patchUsuarioController, deleteUsuarioController  };
