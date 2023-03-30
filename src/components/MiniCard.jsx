import React from "react";

export const MiniCard = ({ img, titulo, descripcion, precio }) => {
  return (
    <div id="mini-card-container">
      <div className="content">
        <img src={img} alt="" />
        <h5>{titulo}</h5>
        <p>{descripcion}</p>
        <strong>{precio}</strong>
      </div>
      <div className="d-flex justify-content-end">
        <i id="mini-card-icon" className="bx bx-heart"></i>
      </div>
    </div>
  );
};
