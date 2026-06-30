import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

import { sequelize } from './config/database.js';

const PORT = process.env.PORT || 3000;

// conectar DB ANTES de levantar server
sequelize.sync({ force: false })
  .then(() => {
    console.log('Tablas sincronizadas');

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log('Error al sincronizar:', err);
  });

  /*
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});*/





console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);