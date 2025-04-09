import React from "react";

const ReservationForm = ({ cantidad, setCantidad, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="teatro-form">
      <span className="formulario">
        <label htmlFor="NumeroAsientos">Numero de asientos a reservar</label>
        <input
          type="number"
          min={1}
          max={10}
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="teatro-input"
        />
      </span>
      <button type="submit" className="teatro-btn sugerir">
        Sugerir
      </button>
    </form>
  );
};

export default ReservationForm;
