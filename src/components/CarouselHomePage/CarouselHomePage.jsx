import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import bannerDesktop from "../../assets/bannerDesk1.png";
import bannerbannerDesktop2 from "../../assets/bannerDesk2.png";

export const CarouselHomePage = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <figure className="banner__figure">
              <img
                src={bannerDesktop}
                className="d-block w-100  banner__img"
                alt="banner"
              />
            </figure>
      </div>
      <div className="carousel-item">
      <figure className="banner__figure">
              <img
                src={bannerbannerDesktop2}
                className="d-block w-100 banner__img"
                alt="banner"
              />
            </figure>
      </div>

    
    </div>
  
  </div>
  );
};
