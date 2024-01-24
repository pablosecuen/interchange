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
        notEmpty: {
          msg: "El nombre es obligatorio",
        },
        len: {
          args: [2, 50],
          msg: "El nombre debe tener entre 2 y 50 caracteres",
        },
      },
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El apellido es obligatorio",
        },
        len: {
          args: [2, 50],
          msg: "El apellido debe tener entre 2 y 50 caracteres",
        },
      },
    },
    Dni: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El dni es obligatorio",
        },
        len: {
          args: [2, 50],
          msg: "El dni debe tener entre 2 y 50 caracteres",
        },
      },
    },
    Telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El teléfono es obligatorio",
        },
        len: {
          args: [7, 15],
          msg: "El teléfono debe tener entre 7 y 15 caracteres",
        },
      },
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "El email ya está en uso",
      },
      validate: {
        isEmail: {
          msg: "El email debe ser válido",
        },
        len: {
          args: [5, 255],
          msg: "El email debe tener entre 5 y 255 caracteres",
        },
      },
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La contraseña es obligatoria",
        },
        len: {
          args: [6, 100],
          msg: "La contraseña debe tener entre 6 y 100 caracteres",
        },
      },
    },
    Anotaciones: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    Tipo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "El tipo es obligatorio",
        },
      },
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    Grado_ID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    // Nuevos campos para adultos responsables
    NombreAdulto: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: "El nombre del adulto debe tener entre 2 y 50 caracteres",
        },
      },
    },
    ApellidoAdulto: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: "El apellido del adulto debe tener entre 2 y 50 caracteres",
        },
      },
    },
    TelefonoAdulto: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [7, 15],
          msg: "El teléfono del adulto debe tener entre 7 y 15 caracteres",
        },
      },
    },
    EmailAdulto: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: {
          msg: "El email del adulto debe ser válido",
        },
        len: {
          args: [5, 255],
          msg: "El email del adulto debe tener entre 5 y 255 caracteres",
        },
      },
    },
    // Nuevos campos para adultos responsables 2
    NombreAdulto2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: "El nombre del adulto debe tener entre 2 y 50 caracteres",
        },
      },
    },
    ApellidoAdulto2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: "El apellido del adulto debe tener entre 2 y 50 caracteres",
        },
      },
    },
    TelefonoAdulto2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [7, 15],
          msg: "El teléfono del adulto debe tener entre 7 y 15 caracteres",
        },
      },
    },
    EmailAdulto2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: {
          msg: "El email del adulto debe ser válido",
        },
        len: {
          args: [5, 255],
          msg: "El email del adulto debe tener entre 5 y 255 caracteres",
        },
      },
    },
  });

  return Usuario; // Retorna el modelo definido
};
