import { useEffect, useState } from "react";
import api from "../api/axios";

export default function LibrosList({ onSelect }) {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/libros")
      .then(res => setLibros(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando libros...</p>;

  return (
    <div>
      <h2>Libros</h2>
      {libros.map(libro => (
        <div
          key={libro.id}
          onClick={() => onSelect(libro.id)}
          style={{ cursor: "pointer" }}
        >
          {libro.titulo} - {libro.autor}
        </div>
      ))}
    </div>
  );
}