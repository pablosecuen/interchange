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
    Estado: {
      type: DataTypes.ENUM("Pendiente", "Pagado"),
      allowNull: false,
      defaultValue: "Pendiente",
    },
    Vencimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    MontoMensual: {
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
