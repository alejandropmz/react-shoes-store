import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navItems = ["Inicio", "Colecciones", "Contacto"];
  return (
    <div className="container-fluid">
      <nav id="navbar">
        <div className="nav-top d-flex justify-content-center align-items-center">
          <i className="bx bxs-offer"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            placeat facilis. Unde vero dicta
          </p>
        </div>
        <div className="nav-center d-flex justify-content-center">
          <h2>NAZA SHOES</h2>
        </div>
        <div className="row d-flex justify-content-between nav-bottom">
          <div className="col-md-5 col-sm-12 left d-flex align-items-center">
            {navItems.map((item, index) => (
              <Link
                to={item === "Inicio" ? "/" : "/" + item.toLocaleLowerCase()}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="col-md-6 col-sm-12 right justify-content-end d-flex">
            <form className="d-flex align-items-center">
              <div className="search d-flex align-items-center">
                <i className="bx bx-search-alt"></i>
                <input
                  id="input-nav"
                  className="form-control"
                  type="search"
                  placeholder="Search"
                />
              </div>
              <div className="mail d-flex align-items-center">
                <p>recibe notificaciones</p>
                <i className="bx bx-envelope"></i>
              </div>
              <div className="carrito d-flex align-items-center">
                <p>$0.00</p>
                <i className="bx bx-cart-alt"></i>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};