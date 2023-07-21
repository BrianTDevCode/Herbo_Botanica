import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bannerMobile1 from "../../assets/bamnerMobile1.png";
import bannerMobile2 from "../../assets/bamnerMobile2.png";


export const CarouselHomePageMobile = () => {
  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <figure className="bannerfigure">
              <img
                src={bannerMobile1}
                className="d-block w-100  bannerimg"
                alt="banner"
              />
            </figure>
      </div>
      <div className="carousel-item">
      <figure className="bannerfigure">
              <img
                src={bannerMobile2}
                className="d-block w-100 bannerimg"
                alt="banner"
              />
            </figure>
      </div>

    </div>

  </div>
   
  );
};
