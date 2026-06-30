import { useState } from "react";

import LibrosList from "./components/LibrosList";
import LibroDetalle from "./components/LibroDetalle";

import TalleresList from "./components/TalleresList";
import TallerDetalle from "./components/TallerDetalle";

export default function App() {
  const [libroId, setLibroId] = useState(null);
  const [tallerId, setTallerId] = useState(null);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      
      <div>
        <LibrosList onSelect={setLibroId} />
        <LibroDetalle id={libroId} />
      </div>

      <div>
        <TalleresList onSelect={setTallerId} />
        <TallerDetalle id={tallerId} />
      </div>

    </div>
  );
}