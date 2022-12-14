import React from "react";
import { useNavigate } from "react-router-dom";
import { getListData, removeReservation } from "../services/localstorage";

const ListItem = ({ reservation, setReservations }) => {
  const { uuid, origin, destination, passengers, date } = reservation;
  const navigate = useNavigate();
  const deleteReservation = () => {
    removeReservation(uuid);
    setReservations(getListData());
  };
  return (
    <div
      key={uuid}
      className="bg-gray-200 m-2 p-2 flex justify-between items-center rounded"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-center">Ticket N°</p>
        <span className="text-sm">{uuid}</span>
        <button
          className="p-2 bg-indigo-500 rounded text-white my-1 hidden md:flex"
          onClick={() => navigate(`/details/${uuid}`)}
        >
          Ver detalles
        </button>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center">
        <p className="flex text-amber-500">
          Origen: <span className="mx-4 text-black">{origin}</span>
        </p>
        <p className="flex text-amber-500">
          Destino: <span className="mx-4 text-black">{destination}</span>
        </p>
        <p className="flex text-amber-500">
          N° Pasajeros: <span className="mx-4 text-black">{passengers}</span>
        </p>
        <p className="flex text-amber-500">
          Fecha: <span className="mx-4 text-black">{date}</span>
        </p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => navigate(`/form/${uuid}`)}
          className="p-2 bg-amber-500 rounded text-white my-1"
        >
          Editar
        </button>
        <button
          onClick={() => deleteReservation()}
          className="p-2 bg-red-500 rounded text-white my-1"
        >
          Eliminar
        </button>
        <button
          className="p-2 bg-indigo-500 rounded text-white my-1 flex md:hidden"
          onClick={() => navigate(`/details/${uuid}`)}
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default ListItem;
