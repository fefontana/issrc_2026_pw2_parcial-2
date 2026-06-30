import { useState } from "react";

import LibrosLista from "./components/LibrosLista";
import LibroDetalle from "./components/LibroDetalle";

import TalleresLista from "./components/TalleresLista";
import TallerDetalle from "./components/TallerDetalle";

export default function App() {
  const [libroId, setLibroId] = useState(null);
  const [tallerId, setTallerId] = useState(null);

  return (
    <div className="container">

      <div className="panel">
        <LibrosLista onSelect={setLibroId} />
        <LibroDetalle id={libroId} />
      </div>

      <div className="panel">
        <TalleresLista onSelect={setTallerId} />
        <TallerDetalle id={tallerId} />
      </div>

    </div>
  );
}
