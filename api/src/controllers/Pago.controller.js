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

module.exports = { createPagoController };
