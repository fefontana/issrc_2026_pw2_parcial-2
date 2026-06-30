import Taller from '../models/Taller.js';

// Lista de talleres
export const getTalleres = async (req, res) => {
  try {
    const talleres = await Taller.findAll();

    res.status(200).json(talleres);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener talleres',
      error: error.message,
    });
  }
};

// Taller por ID
export const getTallerById = async (req, res) => {
  try {
    const { id } = req.params;

    const taller = await Taller.findByPk(id);

    if (!taller) {
      return res.status(404).json({
        message: 'Taller no encontrado',
      });
    }

    res.status(200).json(taller);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener taller',
      error: error.message,
    });
  }
};