const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  const Pago = sequelize.define("Pago", {
    ID: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    EstadoCuota: {
      type: DataTypes.ENUM("Pendiente", "Pagado"),
      allowNull: false,
      defaultValue: "Pendiente",
    },
    EstadoInscripcionGrado: {
      type: DataTypes.ENUM("Pendiente", "Pagado"),
      allowNull: false,
      defaultValue: "Pendiente",
    },
    EstadoInscripcionExamenes: {
      type: DataTypes.ENUM("Pendiente", "Pagado"),
      allowNull: false,
      defaultValue: "Pendiente",
    },
    VencimientoCuota: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    VencimientoExamen: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    VencimientoInscripcionGrado: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    MontoCuota: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    MontoInscripcionGrado: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    MontoInscripcionExamenes: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    
  });

  return Pago;
};
