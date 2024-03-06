const { Pago } = require("../../db");

const createPagoController = async (req, res) => {
  try {
    const { gradoId } = req.params;
    const pagoData = req.body;
    pagoData.Grado_ID = gradoId;
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
  const { mes, nuevoEstado } = req.body;
  const { pagoId } = req.params;


  try {
    const pago = await Pago.findByPk(pagoId);

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
