import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Libro = sequelize.define('Libro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  paginas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  editorial: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sinopsis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'libros',
  timestamps: false,
});

export default Libro;