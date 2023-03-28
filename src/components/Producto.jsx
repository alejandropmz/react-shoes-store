import React from "react";
import { Link } from "react-router-dom";

export const Producto = ({ descripcion, title, img, link, alt }) => {
  return (
    <div>
      <div id="prodcut-card" className="card">
        <img src={img} className="card-img-top" alt={"shoes-" + alt} />
        <div id="product-card-body" className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descripcion}</p>
          <Link id="card-button" to={link} className="btn btn-warning">
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
};
