const { Grado, Pago, Usuario } = require("../../db");

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

const getUsersByCursoController = async (req, res) => {
  try {
    const { cursoId } = req.params; // Suponiendo que el ID del curso se pasa como parámetro en la URL

    // Buscar el curso por ID y traer los pagos asociados
    const curso = await Grado.findByPk(cursoId, {
      include: [
        {
          model: Pago,
          include: [{ model: Usuario }], // Incluir modelo Usuario dentro del modelo Pago
        },
      ],
    });

    if (!curso) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }

    // Extraer los usuarios asociados a ese curso desde los pagos
    const usuariosDelCurso = curso.Pagos.map((pago) => pago.Usuario);

    res.status(200).json(usuariosDelCurso);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios por curso", error: error.message });
  }
};

module.exports = { createGradoController, getAllGradosController, getUsersByCursoController };
