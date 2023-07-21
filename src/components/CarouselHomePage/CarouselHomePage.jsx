import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import bannerDesktop from "../../assets/bannerDesk1.png";
import bannerbannerDesktop2 from "../../assets/bannerDesk2.png";
import Carousel from "react-bootstrap/Carousel";


export const CarouselHomePage = () => {
  return (
    <Carousel controls={false}>
    <Carousel.Item>
      <figure className="banner__figure">
        <img
          src={bannerDesktop}
          className="d-block w-100 banner__img"
          alt="banner"
        />
      </figure>
    </Carousel.Item>
    <Carousel.Item>
      <figure className="banner__figure">
        <img
          src={bannerbannerDesktop2}
          className="d-block w-100 banner__img"
          alt="banner"
        />
      </figure>
    </Carousel.Item>
  </Carousel>
  );
};
