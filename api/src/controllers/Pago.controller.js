const { Pago } = require("../../db");

const createPagoController = async (req, res) => {
  try {
    const pagoData = req.body;
    const newPago = await Pago.create(pagoData);
    res.status(201).json(newPago);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el pago", error: error.message });
  }
};

const getAllPagosController = async (req, res) => {
  try {
    const pagos = await Pago.findAll({
      where: req.pagosFiltros,
    });

    res.status(200).json(pagos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los pagos", error: error.message });
  }
};

module.exports = { createPagoController, getAllPagosController };
