import React from "react";

export const VecinoCarousel = () => {
  return (
    <div id="vecino-carousel" style={{border:"solid 1px red"}} className="d-flex flex-column justify-content-around align-items-center">
      <div style={{border:"solid blue 1px"}} className="publicidad-top">
        <h1>Publicidad 1</h1>
      </div>
      <div style={{border:"solid blue 1px"}} className="publicidad-buttom">
        <h1>Publicidad 2</h1>
      </div>
    </div>
  );
};
