import React from "react";

export const Carousel = ({
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  text1,
  text2,
  text3,
}) => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div id="texted" className="carousel-caption d-none d-md-block">
              <h5>{title1}</h5>
              <p>{text1}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div id="texted" className="carousel-caption d-none d-md-block">
              <h5>{title2}</h5>
              <p>{text2}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div id="texted" className="carousel-caption d-none d-md-block">
              <h5>{title3}</h5>
              <p>{text3}</p>
            </div>
          </div>
        </div>
        <button
          id="incio-carousel-buttons"
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="bx bx-left-arrow-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          id="incio-carousel-buttons"
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="bx bx-right-arrow-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
