import { PiSeatFill } from "react-icons/pi";

const Seat = ({ asiento, seleccionado }) => {
  let clase = "asiento ";
  if (asiento.estado) clase += "ocupado";
  else if (seleccionado) clase += "seleccionado";
  else clase += "libre";

  return (
    <div className={clase}>
      <figure>
        <PiSeatFill />
        <figcaption>#{asiento.id}</figcaption>
      </figure>
    </div>
  );
};

export default Seat;
