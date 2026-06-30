import { useEffect, useState } from "react";
import api from "../api/axios";

export default function LibroDetalle({ id }) {
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    if (!id) return;

    api.get(`/libros/${id}`)
      .then(res => setLibro(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!id) return <p>Selecciona un libro</p>;
  if (!libro) return <p>Cargando detalle...</p>;

  return (
    <div>
      <h3>{libro.titulo}</h3>
      <p><b>Autor:</b> {libro.autor}</p>
      <p><b>ISBN:</b> {libro.isbn}</p>
      <p><b>Páginas:</b> {libro.paginas}</p>
      <p><b>Editorial:</b> {libro.editorial}</p>
      <p>{libro.sinopsis}</p>
    </div>
  );
}