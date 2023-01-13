import React from "react";
import './button.css';

function Boton({manejarClick}) {
  return (
    <button 
    className="btn"
    onClick={manejarClick}>
      Registrar
    </button>
  )
}

export default Boton;