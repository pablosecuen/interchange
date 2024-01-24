const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize;

// Usar la URL de la base de datos proporcionada por Railway
sequelize = new Sequelize(process.env.DATABASE_URL, {
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
