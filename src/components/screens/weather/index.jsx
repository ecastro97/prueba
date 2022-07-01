import React, { useState, useEffect } from "react";
import { getClimaCiudad } from "../../../services/weather/weatherServices";
import Tarjeta from "../../common/card";

export default function Weather() {
  const [ciudad, setCiudad] = useState("");
  const [datosBusqueda, setDatosBusqueda] = useState([]);
  const [region, setRegion] = useState("");

  async function getWeather() {
    if (ciudad == null || ciudad === "") {
      alert("Error, ingrese la ciudad.");
    } else {
      const SERVICIO = await getClimaCiudad(ciudad);
      setRegion(SERVICIO.data.region);
      setDatosBusqueda(SERVICIO.data.next_days);
      console.log("SERVICIO", SERVICIO);
    }
  }

  async function showPosition(position) {
    console.log("position", position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setCiudad(lat + "," + lon);
    const serv = await getClimaCiudad(lat + "," + lon);
    console.log("serv", serv);
  }

  function getLocation() {
    var x = document.getElementById("longitudLatitud");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function onChangeEvent(value) {
    setCiudad(value);
  }

  useEffect(() => {
    //console.log("ciudad", ciudad);
    //getWeather();
  }, [ciudad]);

  return (
    <div className="contenedor">
      <div className="row">
        <div className="col-md-12">
          <input
            placeholder="Ingrese una ciudad"
            type="text"
            onChange={(e) => onChangeEvent(e.target.value)}
          />
          <button
            type="button"
            id="usarUbicacion"
            className="boton"
            onClick={getLocation}
          >
            Usar mi ubicación
          </button>
          <button
            type="button"
            id="buscar"
            className="boton"
            onClick={getWeather}
          >
            Buscar
          </button>
        </div>
        <div className="col-md-12">
          <label>Región: {region}</label>
          <p id="longitudLatitud"></p>
        </div>
      </div>
      <div className="row">
        {datosBusqueda &&
          datosBusqueda.map((item, key) => (
            <div key={key} className="col-2">
              <Tarjeta
                dia={item.day}
                urlImagen={item.iconURL}
                min={item.min_temp.c}
                max={item.max_temp.c}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
