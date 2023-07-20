import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import LOGO from "../../assets/logo.png";
import Swal from "sweetalert2";
import home__svg from "../../assets/home.svg";
import { CarouselHomePage } from "../CarouselHomePage/CarouselHomePage";
import "./HomePage.css";
import { HelpInfo } from "../HelpInfo/HelpInfo";
import { BtnWhatsapp } from "../../BtnWhatsapp/BtnWhatsapp";
import { BtnCatalog } from "../../BtnCatalog/BtnCatalog";
import { CarouselHomePageMobile } from "../CarouselHomePageMobile/CarouselHomePageMobile";

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
        background:
          "linear-gradient(177deg, rgba(159, 180, 179, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        customClass: {
          confirmButton: "btn__infoMensaje",
        },
      });

      localStorage.setItem("hasShownAlert", "true");
    }
  }, []);

  return (
    <main className="container">
      <div className="div__carrusel--desktop">
        <CarouselHomePage/>
      </div>

      <div className="div__carrusel--mobile">
        <CarouselHomePageMobile/>
      </div>

      <section className="home__info">
        <h1>Bienvenidx a la Magia Herbal</h1>
        <p className="home__description">
        Nuestro propósito desde Herbo es valernos de los beneficios de las plantas y acercarlos a quienes habitamos en la ciudad: humanos y animales.
        </p>
        <h3>¿Queres que seamos parte de tu proyecto?</h3>
        
      </section>

      <HelpInfo />
      <BtnCatalog />
      <BtnWhatsapp />
    </main>
  );
};
