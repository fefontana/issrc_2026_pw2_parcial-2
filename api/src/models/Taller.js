import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Taller = sequelize.define('Taller', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  profesor: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  duracionMeses: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  costo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  diaHorario: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  requisitos: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'talleres',
  timestamps: false,
});

export default Taller;