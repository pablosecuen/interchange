const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  const Usuario = sequelize.define("Usuario", {
    ID: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Tipo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Grado_ID: {
      type: DataTypes.UUID,
      validate: {
        notEmpty: true,
      },
    },
    Grado_Nombre: {
      type: DataTypes.STRING, // Campo para almacenar el nombre del Grado
      validate: {
        notEmpty: true,
      },
    },
    Grado_Categoria: {
      type: DataTypes.STRING, // Campo para almacenar la categoría del Grado
      validate: {
        notEmpty: true,
      },
    },
  });

  return Usuario; // Retorna el modelo definido
};
