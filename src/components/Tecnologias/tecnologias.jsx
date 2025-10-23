import React from "react";
import "./tecnologias.css";

export const Tecnologias = ({ nombre }) => {
  return (
    <div className="tecnologiaContainer">
      <img src={`/assets/${nombre}.svg`} alt={`Imagen de ${nombre}`} />
      <p className="tecnologiaText">{nombre.toUpperCase()}</p>
    </div>
  );
};
