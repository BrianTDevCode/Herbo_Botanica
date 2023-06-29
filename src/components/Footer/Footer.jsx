import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="contenedorFooter">
      <section className="sectionConteiner">
        <div className="divConteiner">
          <ul>
            <li className="instagram">
              
              <a href="https://instagram.com/herbo.botanica" target="_blank">
                <FaInstagram className="icon" /> Instagram
              </a>
            </li>
            <li className="facebook">
              <a href="https://www.facebook.com/herbobotanica/" target="_blank">
              <FaFacebook className="icon" /> Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="divConteiner1">
          <h2>Categorias</h2>
          

          


            <Link to={'/'} className="ulConteiner">Inicio</Link>
            <Link to={`/listaproductos/Herbo-Pets`} className="ulConteiner">Herbo pets</Link>
            <Link to={'/listaproductos/Sahumo-&-Defumación'} className="ulConteiner">Sahumos</Link>
            <Link to={`/listaproductos/Herbo-Home`} className="ulConteiner">Herbo home</Link>
            <Link to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales`} className="ulConteiner">floreales & Tónicos herbales</Link>
            <Link to={`listaproductos/Aromaterapia`} className="ulConteiner">Aromaterapias</Link>
          
        </div>
        <div className="divConteiner">
          <h2 className="h2Title">Contactanos</h2>
          <ul>
            {/* <li className="ulConteiner">541173633708</li> */}
            <li className="ulConteiner">
              <a href="https://wa.me/541173633708" target="_blank">541173633708</a>
              </li>
            <li className="ulConteiner">
            <a href="tel:+54 9 11 7363-3708">+54 9 11 7363-3708</a>
              </li>
            <li className="ulConteiner">
            <a href="mailto:hola@herbobotanica.com">hola@herbobotanica.com</a>
            </li>
            <li className="ulConteiner">
             
              <a href="https://goo.gl/maps/bGnCu52TFEp5o1f1A" target="_blank"> Blanco Encalada 5034 Local 21, paseo de Homs Urquiza</a>
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
