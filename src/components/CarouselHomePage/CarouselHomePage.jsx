import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";

export const CarouselHomePage = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ height: "420px", maxHeight: "138px" }} // Modifica la altura del carrusel aquí
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <figure className="banner__figure">
            <img
              src={banner1}
              className="d-block w-100 h-100 banner__img" // Ajusta altura y ancho de la imagen
              alt="banner"
            />
          </figure>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <figure className="banner__figure">
            <img
              src={banner2}
              className="d-block w-100 h-100 banner__img" // Ajusta altura y ancho de la imagen
              alt="banner"
            />
          </figure>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <figure className="banner__figure">
            <img
              src={banner3}
              className="d-block w-100 h-100 banner__img" // Ajusta altura y ancho de la imagen
              alt="banner"
            />
          </figure>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <figure className="banner__figure">
            <img
              src={banner4}
              className="d-block w-100 h-100 banner__img" // Ajusta altura y ancho de la imagen
              alt="banner"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
