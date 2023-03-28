import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "../components/Carousel";
/* import { VecinoCarousel } from "../components/VecinoCarousel"; */
import { TopBody } from "../components/TopBody";
import { Producto } from "../components/Producto";

export const Inicio = () => {
  const { store } = useContext(Context);
  return (
    <div id="inicio">
      <div className="d-flex justify-content-center align-items-center carousel-info">
        {/* <h1>CAROUSEL</h1> */}
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
        {/* <VecinoCarousel /> */}
      </div>
      <div className="body">
        <TopBody />
        <div id="body" className="row">
          {store.productos.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-3">
              <Producto
                descripcion={store.productos[index].description}
                title={"Title " + (index + 1)}
                img={store.productos[index].img}
                link={"/algo"}
                alt={index}
              />
            </div>
          ))}
        </div>
        <div id="mirar-mas" className="d-flex justify-content-center">
          {/* <button className="btn btn-info">Mira más aquí</button> */}
          <i id="mostrar-mas" className="bx bx-plus-circle"></i>
        </div>
      </div>
    </div>
  );
};
