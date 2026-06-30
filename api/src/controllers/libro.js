import Libro from '../models/Libro.js';

// Consulta a la BD para crear lista de libros
export const getLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();

    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener libros',
      error: error.message,
    });
  }
};

// Libro por ID
export const getLibroById = async (req, res) => {
  try {
    const { id } = req.params;

    const libro = await Libro.findByPk(id);

    if (!libro) {
      return res.status(404).json({
        message: 'Libro no encontrado',
      });
    }

    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener el libro',
      error: error.message,
    });
  }
};