import { DataTypes, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export default function defineContenidoModel(sequelize: Sequelize) {
  const Contenido = sequelize.define('Contenido', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    Titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Archivo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Grado_ID: {
        type: DataTypes.UUID, 
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

  return Contenido;
}
