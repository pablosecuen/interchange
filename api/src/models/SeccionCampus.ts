import { DataTypes, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export default function defineSeccionCVModel(sequelize: Sequelize) {
  const SeccionCV = sequelize.define('SeccionCV', {
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
    Grado_ID: {
        type: DataTypes.UUID, // Cambiar el tipo de dato a UUID
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        references: {
          model: 'Grados', 
          key: 'ID', 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
  });

  return SeccionCV;
}
