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
  const Grado = require("./src/models/Grado")(sequelize);
  const Contenido = require("./src/models/Contenido")(sequelize);

  // Aquí puedes establecer las relaciones entre los modelos
  Usuario.belongsTo(Grado, { foreignKey: "Grado_ID", as: "CursoActual" });
  Grado.hasMany(Usuario, { foreignKey: "Grado_ID" });

  Contenido.belongsTo(Grado, { foreignKey: "Grado_ID" });
  Grado.hasMany(Contenido, { foreignKey: "Grado_ID" });



  // Exporta los modelos y la conexión
  module.exports = {
    Usuario,
    Grado,
    Contenido,
    sequelize,
  };
} else {
  console.error("Las variables de entorno de la base de datos no están completamente definidas.");
  process.exit(1); // Salir con un código de error
}
