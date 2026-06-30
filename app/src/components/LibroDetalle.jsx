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

    if (!id) return <p className="vacio">Seleccioná un libro</p>;

    if (!libro) return <p className="vacio">Cargando...</p>;

    return (
    <div className="detalle">
        <h3>{libro.titulo}</h3>
        <p>{libro.autor}</p>
        <p>{libro.sinopsis}</p>
    </div>
    );
}