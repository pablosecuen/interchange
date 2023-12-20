const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  const ExamenCompletado = sequelize.define(
    "ExamenCompletado",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      examenID: {
        type: DataTypes.UUID, // ID del examen completado
        allowNull: false,
      },
      userID: {
        type: DataTypes.UUID, // ID del usuario que realizó el examen
        allowNull: false,
      },
      respuestas: {
        type: DataTypes.JSON, // Almacena las respuestas del usuario como un objeto JSON
        allowNull: false,
      },
      nota: {
        type: DataTypes.FLOAT, // Puntuación obtenida por el usuario
        allowNull: true,
      },
      // Otros campos relacionados con el examen completado, si los necesitas
    },
    {
      tableName: "ExamenCompletado",
    }
  );

  return ExamenCompletado;
};
