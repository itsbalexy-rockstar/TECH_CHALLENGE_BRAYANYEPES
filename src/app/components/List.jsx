import React, { useEffect, useState } from "react";
import { getListData } from "../services/localstorage";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    setReservations(getListData);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="">
      {reservations.map((reservation) => (
        <ListItem reservation={reservation} setReservations={setReservations} />
      ))}
      {reservations.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-xl mt-40">No hay ninguna reserva</h1>
          <button
            className="bg-amber-500 text-white p-2 rounded m-4 hover:bg-indigo-500 transition-all"
            onClick={() => navigate("/form")}
          >
            Quiero hacer una reservación
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
