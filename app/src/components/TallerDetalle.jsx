import { useEffect, useState } from "react";
import api from "../api/axios";

export default function TallerDetalle({ id }) {
  const [taller, setTaller] = useState(null);

  useEffect(() => {
    if (!id) return;

    api.get(`/talleres/${id}`)
      .then(res => setTaller(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!id) return <p>Selecciona un taller</p>;
  if (!taller) return <p>Cargando detalle...</p>;

  return (
    <div>
      <h3>{taller.nombre}</h3>
      <p><b>Profesor:</b> {taller.profesor}</p>
      <p><b>Duración:</b> {taller.duracionMeses} meses</p>
      <p><b>Costo:</b> ${taller.costo}</p>
      <p><b>Horario:</b> {taller.diaHorario}</p>
      <p>{taller.requisitos}</p>
    </div>
  );
}