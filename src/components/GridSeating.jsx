import React from "react";
import Seat from "./Seat";

function GridSeating({ sala, seleccion }) {
  return (
    <div className="sala">
      {sala.map((fila, i) => (
        <div key={i} className="fila">
          {fila.map((asiento) => (
            <Seat
              key={asiento.id}
              asiento={asiento}
              seleccionado={seleccion.has(asiento.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GridSeating;
