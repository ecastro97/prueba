import { useState, useEffect } from "react";

export default function Tarjeta({dia, urlImagen, min, max}) {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{dia}</b>
        </h4>
        <hr></hr>
        <img src={urlImagen} alt="Avatar" style={{width:"8"}}></img>
        <p>Min: {min}, Max: {max}</p>
      </div>
    </div>
  );
}
