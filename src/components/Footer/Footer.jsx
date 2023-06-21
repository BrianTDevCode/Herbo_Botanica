import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="contenedorFooter">
      <section className="sectionConteiner">
        <div className="divConteiner">
          <ul>
            <li className="instagram">
              <FaInstagram className="icon" /> Instagram
            </li>
            <li className="facebook">
              <FaFacebook className="icon" /> Facebook
            </li>
          </ul>
        </div>
        <div className="divConteiner1">
          <h2>Categorias</h2>
          
            <li className="ulConteiner">Inicio</li>
            <li className="ulConteiner">Sahumos</li>
            <li className="ulConteiner">Herbo pets</li>
            <li className="ulConteiner">Herbo home</li>
            <li className="ulConteiner">Formulas floreales</li>
            <li className="ulConteiner">Aromaterapia</li>
          
        </div>
        <div className="divConteiner">
          <h2 className="h2Title">Contactanos</h2>
          <ul>
            <li className="ulConteiner">541173633708</li>
            <li className="ulConteiner">+54 911 73633708</li>
            <li className="ulConteiner">hola@herbobotanica.com</li>
            <li className="ulConteiner">
              Blanco Encalada 5034 Local 21, paseo de Homs Urquiza
            </li>
          </ul>
        </div>
      </section>
      <article>
        <h3>Copyright Herbo Botánica - 2023 Todos los derechos reservados</h3>
      </article>
    </footer>
  );
};

export default Footer;
