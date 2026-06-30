-- =========================================
-- BASE DE DATOS
-- =========================================
CREATE DATABASE IF NOT EXISTS centromuni;
USE centromuni;

-- =========================================
-- TABLA: libros
-- =========================================
CREATE TABLE IF NOT EXISTS libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  isbn VARCHAR(30) NOT NULL,
  paginas INT NOT NULL,
  editorial VARCHAR(100) NOT NULL,
  sinopsis TEXT
);

-- =========================================
-- TABLA: talleres
-- =========================================
CREATE TABLE IF NOT EXISTS talleres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  profesor VARCHAR(100) NOT NULL,
  duracionMeses INT NOT NULL,
  costo DECIMAL(10,2) NOT NULL,
  diaHorario VARCHAR(100) NOT NULL,
  requisitos TEXT
);

-- =========================================
-- DATOS DE PRUEBA: LIBROS
-- =========================================
INSERT INTO libros (titulo, autor, isbn, paginas, editorial, sinopsis) VALUES
('El Quijote', 'Miguel de Cervantes', '9781234567890', 500, 'Anaya', 'Novela clásica de aventuras y caballería'),
('Cien años de soledad', 'Gabriel García Márquez', '9789876543210', 420, 'Sudamericana', 'Realismo mágico en Macondo'),
('1984', 'George Orwell', '9780451524935', 350, 'Secker & Warburg', 'Distopía sobre vigilancia y control');

-- =========================================
-- DATOS DE PRUEBA: TALLERES
-- =========================================
INSERT INTO talleres (nombre, profesor, duracionMeses, costo, diaHorario, requisitos) VALUES
('Fotografía', 'Juan Pérez', 3, 15000, 'Lunes 18:00', 'Cámara básica'),
('Guitarra', 'María López', 6, 20000, 'Miércoles 17:00', 'Guitarra propia'),
('Programación Web', 'Carlos Díaz', 4, 30000, 'Viernes 19:00', 'PC con internet');