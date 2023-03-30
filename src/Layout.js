import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext";
import { Inicio } from "./pages/Inicio";
import { Navbar } from "./components/Navbar";
import { ColeccionDamas } from "./pages/ColeccionDamas";
import { Contacto } from "./pages/Contacto";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./pages/ProductDetail";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/:productdetail" element={<ProductDetail />} />
          <Route path="/Colecciones" element={<ColeccionDamas />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
