import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bannerMobile1 from "../../assets/bamnerMobile1.png";
import bannerMobile2 from "../../assets/bamnerMobile2.png";


export const CarouselHomePageMobile = () => {
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
              src={bannerMobile1}
              className="d-block w-100 h-100 banner__img"
              alt="banner"
            />
          </figure>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <figure className="banner__figure">
            <img
              src={bannerMobile2}
              className="d-block w-100 h-100 banner__img"
              alt="banner"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
