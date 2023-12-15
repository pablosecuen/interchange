const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  const Examen = sequelize.define(
    "Examen",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING,
      },
      NotaFinal: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      preguntas: {
        type: DataTypes.JSON, // Almacena preguntas como un objeto JSON
        allowNull: false,
        defaultValue: [], // Valor por defecto: un array vacío
        get() {
          const rawValue = this.getDataValue("preguntas");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
          this.setDataValue("preguntas", JSON.stringify(value));
        },
      },
    },
    {
      tableName: "Examen", // Nombre correcto de la tabla en tu base de datos
    }
  );

  return Examen;
};
