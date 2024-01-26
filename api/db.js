const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();

const DATABASE_URL = process.env.RAILWAY_DATABASE_URL;

if (DATABASE_URL) {
  const sequelize = new Sequelize(
    "postgresql://postgres:12dGbCC--bgg3-34F*5C35*AgAGEb1AF@viaduct.proxy.rlwy.net:20341/railway",
    {
      dialect: "postgres",
      logging: false,
    }
  );

  const Usuario = require("./src/models/Usuario")(sequelize);
  const Campus = require("./src/models/Campus")(sequelize);
  const Grado = require("./src/models/Grado")(sequelize);
  const Contenido = require("./src/models/Contenido")(sequelize);
  const Pago = require("./src/models/Pagos")(sequelize);
  const ExamenCompletado = require("./src/models/ExamenCompletado")(sequelize);
  const Examen = require("./src/models/Examen")(sequelize);
  const Notas = require("./src/models/Notas")(sequelize);

  // Exporta los modelos y la conexión
  module.exports = {
    Usuario,
    Grado,
    Contenido,
    Pago,
    Examen,
    ExamenCompletado,
    Notas,
    Campus,
    sequelize,
  };

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

  // Relación con Grado
  Campus.belongsTo(Grado, { foreignKey: "Grado_ID" });
  Grado.hasMany(Campus, { foreignKey: "Grado_ID" });
} else {
  console.error("error al conectar la db");
  process.exit(1);
}
