import Swal from "sweetalert2";

export const getListData = () => {
  if (!localStorage["data"]) {
    localStorage["data"] = "[]";
    console.log("No hay nada");
  }
  let data = localStorage.getItem("data");
  let dataParse = JSON.parse(data);
  return dataParse;
};

export const addReservation = (reservation) => {
  const data = getListData();
  data.push(reservation);
  localStorage["data"] = JSON.stringify(data);
};

export const removeReservation = (uuid) => {
  let data = getListData();
  data = data.filter((reservation) => reservation.uuid !== uuid);
  localStorage["data"] = JSON.stringify(data);
  Swal.fire({
    title: "Oh no!",
    text: "Haz eliminado una reserva",
    icon: "warning",
    confirmButtonText: "Cerrar",
  });
};

export const getReservationById = (uuid) => {
  const data = getListData();
  const reservation = data.find((reservation) => reservation.uuid === uuid);
  return reservation;
};

export const editReservation = (uuid, payload) => {
  let data = getListData();
  data = data.filter((reservation) => reservation.uuid !== uuid);
  data.push(payload);
  localStorage["data"] = JSON.stringify(data);
  Swal.fire({
    title: "Genial!",
    text: "Los datos han sido modificados correctamente",
    icon: "success",
    confirmButtonText: "Cerrar",
  });
};
