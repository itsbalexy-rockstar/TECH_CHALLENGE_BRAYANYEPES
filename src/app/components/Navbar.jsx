import { useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 flex justify-between bg-indigo-500 p-2 items-center">
      <div className="text-white">Bookingapp</div>
      <div>
        <button
          className="mx-2 bg-indigo-700 rounded text-white p-2 hover:bg-amber-500 transition-all"
          onClick={() => navigate("/")}
        >
          Reservaciones
        </button>
        <button
          className="mx-2 bg-indigo-700 rounded text-white p-2 hover:bg-amber-500 transition-all"
          onClick={() => navigate("/form")}
        >
          Reservar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
