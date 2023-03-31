import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carousel } from "../components/Carousel";
import { VecinoCarousel } from "../components/VecinoCarousel";
import { TopBody } from "../components/TopBody";
import { Producto } from "../components/Producto";

export const Inicio = () => {
  const { store } = useContext(Context);
  return (
    <div id="inicio">
      <div className="row align-items-center carousel-info">
        <div className="col-sm-12 col-md-6">
          <Carousel
            title1={store.carousel[0].title}
            img1={store.carousel[0].img}
            text1={store.carousel[0].text}
            title2={store.carousel[1].title}
            img2={store.carousel[1].img}
            text2={store.carousel[1].text}
            title3={store.carousel[2].title}
            img3={store.carousel[2].img}
            text3={store.carousel[2].text}
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <VecinoCarousel />
        </div>
      </div>
      <div className="body">
        {/* tenis pijamas */}
        <div className="tenis-pijamas d-flex justify-content-center">
          <div className="calzados d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://www.gef.co/dx/api/dam/custom/2021/gef/es-co/imagenes/mujeres/zapatos/cuno_tenis/566x715/calzado-mujer-cuno-tenis-blanco-914-frente-gef.jpg"
              alt=""
            />
            <h5>Calzados</h5>
          </div>
          <div className="pijamas d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://i0.wp.com/pijamas-clover.com/wp-content/uploads/2022/07/hoodie-pijama-rey-leon.jpg?resize=600%2C600&ssl=1"
              alt=""
            />
            <h5>Pijamas</h5>
          </div>
        </div>
        <TopBody />
        <div id="body" className="row">
          {store.productos.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-3">
              <Producto
                descripcion={store.productos[index].description}
                title={"Title " + (index + 1)}
                img={store.productos[index].img}
                link={"/algo"}
                alt={"product number " + index}
              />
            </div>
          ))}
        </div>
        <Link
          to={"/colecciones"}
          id="mirar-mas"
          className="d-flex justify-content-center"
        >
          <i id="mostrar-mas" className="bx bx-plus-circle"></i>
        </Link>
      </div>
    </div>
  );
};
