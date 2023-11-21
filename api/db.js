const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();

let DATABASE_NAME = process.env.DATABASE_NAME;
let DATABASE_USERNAME = process.env.DATABASE_USERNAME;
let DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

if (DATABASE_NAME && DATABASE_USERNAME && DATABASE_PASSWORD) {
  const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });

  const Usuario = require("./src/models/Usuario")(sequelize);
  const SeccionCV = require("./src/models/SeccionCampus")(sequelize);
  const Grado = require("./src/models/Grado")(sequelize);
  const Contenido = require("./src/models/Contenido")(sequelize);

  Usuario.belongsToMany(Grado, {
    through: "usuarios_grado",
    foreignKey: "usuario_id",
    as: "grados",
  });
  Grado.belongsToMany(Usuario, {
    through: "usuarios_grado",
    foreignKey: "grado_id",
    as: "usuarios",
  });

  Usuario.belongsToMany(SeccionCV, {
    through: "Usuarios_SeccionCV",
    foreignKey: "usuario_id",
    as: "seccionesCV",
  });
  SeccionCV.belongsToMany(Usuario, {
    through: "Usuarios_SeccionCV",
    foreignKey: "seccion_cv_id",
    as: "usuarios",
  });

  Grado.hasMany(SeccionCV, { foreignKey: "grado_id", as: "secciones" });
  SeccionCV.belongsTo(Grado, { foreignKey: "grado_id", as: "gradoAsociado" });

  Grado.hasMany(Contenido, { foreignKey: "grado_id", as: "contenidos" });
  Contenido.belongsTo(Grado, { foreignKey: "grado_id" });

  Usuario.belongsTo(Grado, { foreignKey: "grado_actual_id", as: "gradoActual" });
  Usuario.belongsToMany(SeccionCV, {
    through: "Usuarios_SeccionCV",
    foreignKey: "usuario_id",
    scope: {
      grado_id: sequelize.col("grado_actual_id"),
    },
    as: "seccionesDisponibles",
  });
  Grado.hasMany(Usuario, { foreignKey: "grado_actual_id", as: "usuarios_grados" });

  module.exports = {
    conn: sequelize,
    models: {
      Usuario,
      Grado,
      SeccionCV,
      Contenido,
    },
  };
} else {
  console.error("Las variables de entorno de la base de datos no están completamente definidas.");
  process.exit(1); // Salir con un código de error
}
