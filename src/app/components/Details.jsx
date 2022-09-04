import React from "react";
import { useParams } from "react-router-dom";
import { getReservationById } from "../services/localstorage";
import imageTrip from "../../assets/autobus.jpg";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { uuid } = useParams();
  const { origin, destination, passengers, date } = getReservationById(uuid);
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col">
      <h1 className="text-center text-lg font-bold text-amber-500">
        Conoce los detalles de tu reserva
      </h1>
      <p className="text-center text-md text-gray-500">
        Acá podrás visualizar los detalles de tu ruta para que te sientas más
        cómodo a la hora de viajar con nosotros
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
        <div className="flex flex-col justify-center items-center">
          <img src={imageTrip} alt="" className="rounded w-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-amber-500 font-bold">Información</h4>
          <p className="text-center text-sm text-gray-300 m-4">
            En el viaje, tendrás la posibilidad de conocer lugares increíbles y
            recibir las buenas vibras de los paisajes de nuestro país
          </p>
          <div className="flex">
            <p className="text-md text-amber-500 font-bold">Origen:</p>
            <p className="mx-4">{origin}</p>
          </div>
          <div className="flex">
            <p className="text-md text-amber-500 font-bold">Destino:</p>
            <p className="mx-4">{destination}</p>
          </div>
          <div className="flex">
            <p className="text-md text-amber-500 font-bold">N° pasajeros:</p>
            <p className="mx-4">{passengers}</p>
          </div>
          <div className="flex">
            <p className="text-md text-amber-500 font-bold">Fecha:</p>
            <p className="mx-4">{date}</p>
          </div>
          <p className="text-center text-sm text-gray-300 mx-8 my-4">
            Si necesitas más información, comunícate a la linea de servicio al
            cliente
          </p>
          <button
            className="bg-amber-500 rounded text-white w-[80%] p-1 flex justify-center items-center"
            onClick={() => navigate("/")}
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
