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
  const Pago = require("./src/models/Pagos")(sequelize);
  const ExamenCompletado = require("./src/models/ExamenCompletado")(sequelize);
  const Examen = require("./src/models/Examen")(sequelize);
  const Notas = require("./src/models/Notas")(sequelize);

  // Aquí puedes establecer las relaciones entre los modelos
  Usuario.belongsTo(Grado, { foreignKey: "Grado_ID" });
  Grado.hasMany(Usuario, { foreignKey: "Grado_ID" });

  Contenido.belongsTo(Grado, { foreignKey: "Grado_ID" });
  Grado.hasMany(Contenido, { foreignKey: "Grado_ID" });

  // Relación con Usuario y Grado
  Pago.belongsTo(Usuario, { foreignKey: "Usuario_ID" });
  Pago.belongsTo(Grado, { foreignKey: "Grado_ID" });

  Grado.hasMany(Pago, { foreignKey: "Grado_ID" });
  Usuario.hasOne(Pago, { foreignKey: "usuario_id" });

  // Relación Usuario y Examen
  Usuario.belongsToMany(Examen, { through: "UsuarioExamen", foreignKey: "Usuario_ID" });
  Examen.belongsToMany(Usuario, { through: "UsuarioExamen", foreignKey: "Examen_ID" });

  Usuario.hasMany(ExamenCompletado, { foreignKey: "Usuario_ID" });
  ExamenCompletado.belongsTo(Usuario, { foreignKey: "Usuario_ID" });

  // Relación de Usuario con Notas con un alias 'RegistroNotas'
  Usuario.hasMany(Notas, { foreignKey: "Usuario_ID", as: "RegistroNotas" });
  Notas.belongsTo(Usuario, { foreignKey: "Usuario_ID" });

  // Exporta los modelos y la conexión
  module.exports = {
    Usuario,
    Grado,
    Contenido,
    Pago,
    Examen,
    ExamenCompletado,
    Notas,
    sequelize,
  };
} else {
  console.error("Las variables de entorno de la base de datos no están completamente definidas.");
  process.exit(1);
}
