import { useEffect, useState } from "react";
import api from "../api/axios";

export default function TalleresLista({ onSelect }) {
  const [talleres, setTalleres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/talleres")
      .then(res => setTalleres(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando talleres...</p>;

  return (
    <div>
      <h2>Talleres</h2>
      {talleres.map(t => (
        <div
          key={t.id}
          onClick={() => onSelect(t.id)}
        >
          {t.nombre} - ${t.costo}
        </div>
      ))}
    </div>
  );
}