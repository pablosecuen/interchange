const { getNotasByUserIdController, createNotas, updateNotasByUserIdController } = require("../controllers/Notas.controller");

const getNotasByUserIdHandler = (req, res) => {
  const { userId } = req.params;
  getNotasByUserIdController(req, res, userId);
};

const createNotasHandler = async (req, res, next) => {
  await createNotas(req, res);
};

const updateNotasByUserIdHandler = async (req, res) => {
  try {
    await updateNotasByUserIdController(req, res);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error en el manejador de actualización de notas.", error: error.message });
  }
};

module.exports = { getNotasByUserIdHandler, createNotasHandler, updateNotasByUserIdHandler };
