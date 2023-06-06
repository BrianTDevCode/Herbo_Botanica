import { useEffect, useState } from "react";
import LOGO from "../../assets/logo.png";

import Swal from "sweetalert2";

import home__img from "../../assets/home__img.png";
import home__svg from '../../assets/home.svg'
import { CarouselHomePage } from "../CarouselHomePage/CarouselHomePage";

import "./HomePage.css";
import { HelpInfo } from "../HelpInfo/HelpInfo";


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
            ¡Hola! Solo queríamos recordarte que en nuestro canal mayorista contamos con un monto mínimo de compra. Esto nos permite brindarte un mejor servicio y asegurarnos de que tu experiencia sea genial. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. ¡Estamos aquí para ayudarte en lo que necesites!
          </p>
        </div>`,
        showConfirmButton: true,
        confirmButtonColor: "#28a745",
        confirmButtonText: "Entendido",
        showCancelButton: false,
        background: "rgb(159, 180, 179)",
        background: "linear-gradient(177deg, rgba(159, 180, 179, 1) 0%, rgba(255, 255, 255, 1) 100%)",
      });

      localStorage.setItem("hasShownAlert", "true");
    }
  }, []);

  return (
    <main className="container">
      <br />
      <CarouselHomePage />
      <section className="home__info">
        <p className="home__description">
          Hola! Queríamos compartir contigo que hace unos años, creamos Herbo con la intención de acercar las propiedades de las plantas a nuestro día a día y convertirlas en aliados herbales para nuestra salud y bienestar. Con el tiempo, además de desarrollar productos para las personas, agregamos la línea de Herbo Pets, donde acompañamos las emociones de nuestros amigos peludos a través de goteros florales de Bach y otros sistemas. ¡Nos encanta lo que hacemos y esperamos que nuestros productos te ayuden a ti y a tus mascotas!
        </p>
        <figure className="home__figure">
          <img src= {home__svg} alt="home" className="home__svg" />
        </figure>
      </section>

      <HelpInfo />
    </main>
  );
};

// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import LOGO from "../../assets/logo.png";

// import Swal from "sweetalert2";

// import home__img from "../../assets/home__img.png";
// import { CarouselHomePage } from "../CarouselHomePage/CarouselHomePage";

// import "./HomePage.css";
// import { HelpInfo } from "../HelpInfo/HelpInfo";
// import { ModalMensaje } from "../ModalMensaje/ModalMensaje";

// export const HomePage = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   useEffect(()=>{
//     Swal.fire({
//       html: `<div >
//       <img src="${LOGO}" alt="Logo" style="width: 100px; height: auto; position: absolute; top: 10px; left: 10px;" />
//       <p style="margin-top: 75px;">
//         ¡Hola! Solo queríamos recordarte que en nuestro canal mayorista contamos con un monto mínimo de compra. Esto nos permite brindarte un mejor servicio y asegurarnos de que tu experiencia sea genial. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. ¡Estamos aquí para ayudarte en lo que necesites!
//       </p>
//     </div>`,

//       showConfirmButton: true,
//       confirmButtonColor: "#28a745",
//       confirmButtonText: "Entendido",
//       showCancelButton: false,
//       background: "rgb(159,180,179)" ,
//       background: "linear-gradient(177deg, rgba(159,180,179,1) 0%, rgba(255,255,255,1) 100%)",
       
//     })
//   },[])

//   return (
//     <main className="container">
//       <br />
//       <CarouselHomePage />
//       <section className="home__info">
//         <p className="home__description">
//           Hola! Queríamos compartir contigo que hace unos años, creamos Herbo
//           con la intención de acercar las propiedades de las plantas a nuestro
//           día a día y convertirlas en aliados herbales para nuestra salud y
//           bienestar. Con el tiempo, además de desarrollar productos para las
//           personas, agregamos la línea de Herbo Pets, donde acompañamos las
//           emociones de nuestros amigos peludos a través de goteros florales de
//           Bach y otros sistemas. ¡Nos encanta lo que hacemos y esperamos que
//           nuestros productos te ayuden a ti y a tus mascotas!
//         </p>
//         <figure className="home__figure">
//           <img src={home__img} alt="home" className="home__img" />
//         </figure>
//       </section>

//       <HelpInfo />

//     </main>
//   );
// };