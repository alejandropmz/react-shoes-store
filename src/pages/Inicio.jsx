import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carousel } from "../components/Carousel";
import { VecinoCarousel } from "../components/VecinoCarousel";
import { TopBody } from "../components/TopBody";
import { Producto } from "../components/Producto";
import { CalzadosPijamasMenu } from "../components/CalzadosPijamasMenu";

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
        <CalzadosPijamasMenu />
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
