import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'
import './CarouselHomePage.css'
export const CarouselHomePage = () => {


  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
    <figure className='banner__figure'>
      <img src={banner1} className="d-block w-100 banner__img" alt="banner"/>
    </figure>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
    <figure className='banner__figure'>
      <img src={banner2} className="d-block w-100 banner__img" alt=""/>
    </figure>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
    <figure className='banner__figure'>
      <img src={banner3} className="d-block w-100 banner__img" alt=""/>
    </figure>
    </div>

    <div className="carousel-item"data-bs-interval="5000">
    <figure className='banner__figure'>
      <img src={banner4} className="d-block w-100 banner__img" alt=""/>
    </figure>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}
