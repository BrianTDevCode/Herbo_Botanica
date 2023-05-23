import React from "react";
import home__img from "../../assets/home__img.png";
import { CarouselHomePage } from "../CarouselHomePage/CarouselHomePage";

import "./HomePage.css";

export const HomePage = () => {
  return (
    <main className="container">
      <br />
      <CarouselHomePage />
      <section className="home__info">
        <p className="home__description">
          Hola! Queríamos compartir contigo que hace unos años, creamos Herbo
          con la intención de acercar las propiedades de las plantas a nuestro
          día a día y convertirlas en aliados herbales para nuestra salud y
          bienestar. Con el tiempo, además de desarrollar productos para las
          personas, agregamos la línea de Herbo Pets, donde acompañamos las
          emociones de nuestros amigos peludos a través de goteros florales de
          Bach y otros sistemas. ¡Nos encanta lo que hacemos y esperamos que
          nuestros productos te ayuden a ti y a tus mascotas!
        </p>
        <figure className="home__figure">
          <img src={home__img} alt="home" className="home__img" />
        </figure>
      </section>
    </main>
  );
};
