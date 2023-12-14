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

const updatePagadoController = async (req, res) => {
  const { pagoId, mes, nuevoEstado } = req.body;
  console.log("Pago ID recibido:", pagoId);

  try {
    const pago = await Pago.findByPk(pagoId);
    console.log("Pago encontrado:", pago);
    if (!pago) {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
    let vencimientos = pago.getDataValue("VencimientoCuota");
    if (typeof vencimientos === "string") {
      vencimientos = JSON.parse(vencimientos);
    }
    if (!Array.isArray(vencimientos)) {
      return res.status(400).json({ message: "Los vencimientos no son un array" });
    }
    const vencimientoAModificar = vencimientos.find((vencimiento) => {
      console.log("Mes almacenado:", vencimiento.mes);
      console.log("Mes buscado:", mes);
      return vencimiento.mes === mes;
    });
    if (!vencimientoAModificar) {
      return res.status(400).json({ message: "No se encontró el vencimiento para ese mes" });
    }
    vencimientoAModificar.pagado = nuevoEstado;
    await pago.update({ VencimientoCuota: vencimientos });
    res.status(200).json({ message: "Estado de pago actualizado exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el estado de pago", error: error.message });
  }
};

module.exports = { createPagoController, getAllPagosController, updatePagadoController };
