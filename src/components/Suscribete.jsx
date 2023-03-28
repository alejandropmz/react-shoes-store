import React from "react";

export const Suscribete = () => {
  return (
    <div>
      <div className="suscribete">
        <h1>Suscribete</h1>
        <p>¡Recibe notificaciones en tiempo real sobre ofertas y descuentos!</p>
        <form id="form" action="">
          <input
            style={{
              border: "2px solid gold",
              borderRadius: "5px",
              padding: "5px 10px",
              textAlign: "center",
            }}
            id="email"
            placeholder="Correo eléctronico"
            type="text"
          />
        </form>
      </div>
      <div className="d-block contacto-pago">
        <div className="contanto">
          <i className="bx bxl-whatsapp"></i>
        </div>
        <div className="d-flex justify-content-center pagos">
          <i className="bx bxl-mastercard"></i>
          <i className="bx bxl-visa"></i>
          <i className="bx bxl-paypal"></i>
        </div>
      </div>
    </div>
  );
};
