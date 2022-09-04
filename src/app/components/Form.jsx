import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getId from "react-uuid";
import {
  addReservation,
  editReservation,
  getReservationById,
} from "../services/localstorage";
import { useForm } from "./../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    origin: "",
    destination: "",
    passengers: "",
    date: "",
  });

  const navigate = useNavigate();

  const { uuid } = useParams();

  useEffect(() => {
    if (uuid) {
      const reservation = getReservationById(uuid);
      setForm(reservation);
    }
  }, [uuid]);

  const verifyData = () => {
    const { origin, destination, passengers, date } = inputValues;
    if (
      (origin.length < 2) |
      "" |
      ((destination.length < 2) | "") |
      (passengers === "") |
      (date === "")
    ) {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos deben llenarse con datos válidos",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      navigate("/form");
      return;
    }
    uuid
      ? editReservation(uuid, inputValues)
      : addReservation({
          uuid: getId(),
          ...inputValues,
        });
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyData();
    resetForm();
  };

  return (
    <div className="w-full h-full flex flex-col justify-center mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold mt-10">¿Quieres hacer una reservación?</h1>
        <p className="mx-10 text-center text-indigo-500">
          Esta es la oportunidad que necesitas para reservar con nosotros. Hazlo
          ahora y obtén el 30% de descuento en tu reservación
        </p>
      </div>

      <form
        action=""
        className="flex flex-col justify-center items-center mx-48 mt-10 p-4 border rounded"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col my-2">
          <label htmlFor="" className="text-sm my-1 text-gray-500">
            Origen
          </label>
          <input
            type="text"
            placeholder="¿Desde dónde partimos?"
            className="border rounded border-indigo-500 p-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="origin"
            value={inputValues.origin}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="" className="text-sm my-1 text-gray-500">
            Destino
          </label>
          <input
            type="text"
            placeholder="¿Hacia dónde vamos?"
            className="border rounded border-indigo-500 p-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="destination"
            value={inputValues.destination}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="" className="text-sm my-1 text-gray-500">
            Pasajeros
          </label>
          <input
            type="number"
            placeholder="Número de pasajeros"
            className="border rounded border-indigo-500 p-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="passengers"
            value={inputValues.passengers}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="" className="text-sm my-1 text-gray-500">
            Fecha de salida
          </label>
          <input
            type="date"
            placeholder="Origin"
            className="border rounded border-indigo-500 p-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="date"
            value={inputValues.date}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="mt-4 p-2 bg-indigo-500 text-white rounded transition-all hover:bg-amber-500"
          type="submit"
        >
          {uuid ? "Editar" : "Reservar"}
        </button>
      </form>
    </div>
  );
};

export default Form;
