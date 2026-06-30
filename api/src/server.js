import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

import { sequelize } from './config/database.js';

sequelize.sync({ force: false })
  .then(() => {
    console.log('Tablas sincronizadas');
  })
  .catch(err => {
    console.log('Error al sincronizar:', err);
  });