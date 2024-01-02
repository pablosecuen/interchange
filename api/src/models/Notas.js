const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  const Notas = sequelize.define("Notas", {
    ID: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    Usuario_ID: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    notas: {
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Notas;
};
