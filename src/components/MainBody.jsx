import React, { useState } from "react";
import Footer from "./Footer";
import GridSeating from "./GridSeating";
import ReservationForm from "./ReservationForm";
import Header from "./Header";

const crearSala = (filas, columnas) => {
  let id = 1;
  return Array.from({ length: filas }, () =>
    Array.from({ length: columnas }, () => ({
      id: id++,
      estado: false,
    }))
  );
};

const MainBody = () => {
  const [sala, setSala] = useState(() => crearSala(5, 10));
  const [cantidad, setCantidad] = useState(0);
  const [seleccion, setSeleccion] = useState(new Set());

  const sugerirAsientos = (n, sala) => {
    const filas = sala.length;
    const columnas = sala[0].length;
    if (n > columnas) return new Set();

    const centro = Math.floor(filas / 2);
    const ordenFilas = [];

    for (let i = 0; i < filas; i++) {
      const offset = Math.floor((i + 1) / 2);
      const index = i % 2 === 0 ? centro - offset : centro + offset;
      if (index >= 0 && index < filas) ordenFilas.push(index);
    }

    for (const filaIndex of ordenFilas) {
      const fila = sala[filaIndex];
      for (let i = 0; i <= columnas - n; i++) {
        const grupo = fila.slice(i, i + n);
        if (grupo.every((a) => !a.estado)) {
          return new Set(grupo.map((a) => a.id));
        }
      }
    }

    return new Set();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sugerencia = sugerirAsientos(cantidad, sala);
    setSeleccion(sugerencia);
  };

  const ocuparSeleccion = () => {
    const nuevaSala = sala.map((fila) =>
      fila.map((asiento) => ({
        ...asiento,
        estado: seleccion.has(asiento.id) ? true : asiento.estado,
      }))
    );
    setSala(nuevaSala);
    setSeleccion(new Set());
  };

  return (
    <div className="subBody">
      <Header />
      <main className="main-content">
        <div className="Scren">
          <h2>Escenario</h2>
        </div>
        <ReservationForm
          cantidad={cantidad}
          setCantidad={setCantidad}
          handleSubmit={handleSubmit}
        />
        {seleccion.size > 0 && (
          <button onClick={ocuparSeleccion} className="teatro-btn confirmar">
            Confirmar reserva
          </button>
        )}
        <GridSeating sala={sala} seleccion={seleccion} />
      </main>
      <Footer />
    </div>
  );
};

export default MainBody;
