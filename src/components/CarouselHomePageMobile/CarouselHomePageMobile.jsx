import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bannerMobile1 from "../../assets/bamnerMobile1.png";
import bannerMobile2 from "../../assets/bamnerMobile2.png";

import Carousel from "react-bootstrap/Carousel";

export const CarouselHomePageMobile = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <figure className="banner__figure">
          <img
            src={bannerMobile1}
            className="d-block w-100 banner__img"
            alt="banner"
          />
        </figure>
      </Carousel.Item>
      <Carousel.Item>
        <figure className="banner__figure">
          <img
            src={bannerMobile2}
            className="d-block w-100 banner__img"
            alt="banner"
          />
        </figure>
      </Carousel.Item>
    </Carousel>
  );
};
