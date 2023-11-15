import { DataTypes, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export default function defineGradoEModel(sequelize: Sequelize) {
  const Grado = sequelize.define('Grado', {
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
  });

  return Grado;
}
