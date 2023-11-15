import { Sequelize } from "sequelize";
import defineUsuarioModel from "./src/models/Usuario";
import defineGradoModel from "./src/models/Grado";
import defineContenidoModel from "./src/models/Contenido";
import defineSeccionCVModel from "./src/models/SeccionCampus";
import dotenv from 'dotenv';
dotenv.config();


let DATABASE_NAME: string | undefined = process.env.DATABASE_NAME;
let DATABASE_USERNAME: string | undefined = process.env.DATABASE_USERNAME;
let DATABASE_PASSWORD: string | undefined = process.env.DATABASE_PASSWORD;


if (DATABASE_NAME && DATABASE_USERNAME && DATABASE_PASSWORD) {
    const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
        host: 'localhost',
        dialect: "postgres",
        logging: false,
    });

const Usuario = defineUsuarioModel(sequelize);
const Grado = defineGradoModel(sequelize);
const SeccionCV = defineSeccionCVModel(sequelize);
const Contenido = defineContenidoModel(sequelize);


 // Definimos las asociaciones
Usuario.belongsToMany(Grado, { through: 'Usuarios_Grados',  foreignKey: 'usuario_id' }); // Asociación de Usuario con Grado
Grado.belongsToMany(Usuario, { through: 'Usuarios_Grados', foreignKey: 'grado_id' }); // Asociación de GradoEnsenanza con Usuario

Usuario.belongsToMany(SeccionCV, { through: 'Usuarios_SeccionesCV', foreignKey: 'usuario_id' }); // Asociación de Usuario con SeccionCV
SeccionCV.belongsToMany(Usuario, { through: 'Usuarios_SeccionesCV',  foreignKey: 'seccion_cv_id' }); // Asociación de SeccionCV con Usuario

Grado.hasMany(SeccionCV, { foreignKey: 'Grado_ID' }); // Asociación de Grado con SeccionCV
SeccionCV.belongsTo(Grado, { foreignKey: 'Grado_ID' }); // Asociación de SeccionCV con Grado

Grado.hasMany(Contenido, { foreignKey: 'Grado_ID' }); // Asociación de Grado con Contenido
Contenido.belongsTo(Grado, { foreignKey: 'Grado_ID' }); // Asociación de Contenido con Grado


module.exports = {
    conn: sequelize,
    models: {
      Usuario,
      Grado,
      SeccionCV,
      Contenido,
    },
}

  } else {
    console.error('Las variables de entorno de la base de datos no están completamente definidas.');
    process.exit(1); // Salir con un código de error
}    