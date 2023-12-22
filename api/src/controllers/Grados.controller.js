const { Grado, Pago } = require("../../db");

const createGradoController = async (req, res) => {
  try {
    const newGrado = req.body;

    const nuevoGrado = await Grado.create(newGrado);
    res.status(201).json(nuevoGrado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el grado", error: error.message });
  }
};

const getAllGradosController = async (req, res) => {
  try {
    const grados = await Grado.findAll({
      where: req.gradosFiltros,
      include: [{ model: Pago }],
    });

    res.status(200).json(grados);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los grados", error: error.message });
  }
};

module.exports = { createGradoController, getAllGradosController };
