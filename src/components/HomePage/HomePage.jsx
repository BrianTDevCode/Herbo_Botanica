import { useEffect, useState } from "react";
import LOGO from "../../assets/logo.png";

import Swal from "sweetalert2";

import home__img from "../../assets/home__img.png";
import home__svg from '../../assets/home.svg'
import { CarouselHomePage } from "../CarouselHomePage/CarouselHomePage";

import "./HomePage.css";
import { HelpInfo } from "../HelpInfo/HelpInfo";
import { BtnWhatsapp } from "../../BtnWhatsapp/BtnWhatsapp";
import { BtnCatalog } from "../../BtnCatalog/BtnCatalog";


export const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const hasShownAlert = localStorage.getItem("hasShownAlert");

    if (!hasShownAlert) {
      Swal.fire({
        html: `<div >
          <img src="${LOGO}" alt="Logo" style="width: 100px; height: auto; position: absolute; top: 10px; left: 10px;" />
          <p style="margin-top: 75px;">
          Hola! En nuestro canal mayorista contamos con un monto mínimo de compra. Podés ver los precios y montos en el Catálogo Mayorista. Cualquier duda, nos podés escribir y te ayudamos!
          </p>
        </div>`,
        showConfirmButton: true,
        confirmButtonColor: "#28a745",
        confirmButtonText: "Entendido",
        showCancelButton: false,
        // background: "rgb(159, 180, 179)",
        background: "linear-gradient(177deg, rgba(159, 180, 179, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        
      });

      localStorage.setItem("hasShownAlert", "true");
    }
  }, []);

  return (
    <main className="container">
      <div className="div__carrusel">
        <CarouselHomePage />
      </div>

      <section className="home__info">
        <p className="home__description">
          Hola! Queríamos compartir contigo que hace unos años, creamos Herbo con la intención de acercar las propiedades de las plantas a nuestro día a día y convertirlas en aliados herbales para nuestra salud y bienestar. Con el tiempo, además de desarrollar productos para las personas, agregamos la línea de Herbo Pets, donde acompañamos las emociones de nuestros amigos peludos a través de goteros florales de Bach y otros sistemas. ¡Nos encanta lo que hacemos y esperamos que nuestros productos te ayuden a ti y a tus mascotas!
        </p>
        <figure className="home__figure">
          <img src={home__svg} alt="home" className="home__svg" />
        </figure>
      </section>

      <HelpInfo />
      <BtnCatalog/>
      <BtnWhatsapp/>
     
    </main>
  );
};

