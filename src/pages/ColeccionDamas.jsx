import React, { useContext } from "react";
import { MiniCard } from "../components/MiniCard";
import { Context } from "../store/appContext";

export const ColeccionDamas = () => {
  const { store } = useContext(Context);
  return (
    <div id="colecciones-contendor" className="row">
      <div id="colecciones-title" className="col-12">
        <h1>Colecciones</h1>
      </div>
      {store.productos2.map((producto, index) => (
        <div id="card" className="col-sm-6 col-md-2">
          <MiniCard
            img={producto.img}
            titulo={producto.title + " " + (index + 1)}
            descripcion={producto.descripcion + " zapato " + (index + 1)}
            precio={"$" + producto.precio}
          />
        </div>
      ))}
    </div>
  );
};

/* 
img, titulo, descripcion, precio
*/
