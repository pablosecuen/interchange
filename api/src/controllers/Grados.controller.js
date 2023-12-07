const { Grado } = require("../../db");

const createGradoController = async (req, res) => {
  try {
    const { Nombre, Categoria } = req.body;
    const nuevoGrado = await Grado.create({ Nombre, Categoria });
    res.status(201).json(nuevoGrado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el grado", error: error.message });
  }
};

const getAllGradosController = async (req, res) => {
    try {
      const { nombre, categoria } = req.query;
      let filtros = {};
  
      if (nombre) {
        filtros.Nombre = nombre;
      }
  
      if (categoria) {
        filtros.Categoria = categoria;
      }
  
      const grados = await Grado.findAll({
        where: filtros,
      });
  
      res.status(200).json(grados);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los grados", error: error.message });
    }
  };


module.exports = { createGradoController,getAllGradosController  };
