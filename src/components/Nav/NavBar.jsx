import React from "react";
import "./NavBar.css";

import LOGO from "../../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <figure className="header__figure">
          <img className="header__img" src={LOGO} alt="logo" />
        </figure>

        <div className="header__cart">
          <ShoppingCartIcon className="header__cart-icon" />
        </div>
      </div>

      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <a href="#">Herbo Pets</a>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <a href="#">Formulas Florales</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Brumas</a>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <a href="#">Sahumos</a>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <a href="#">Sahumerios</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Carbones de defumacion</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Velas</a>
              </li>
            </ul>
          </li>
          {/* Resto de las categorías */}
          <li className="header__li">
            <a href="#">Herbo Home</a>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <a href="#">Sales de baño</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Difusores</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Esencias para hornillos</a>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <a href="#">Formula Floral</a>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <a href="#">Tónicos herbales</a>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <a href="#">Aromaterapias</a>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <a href="#">Body Oils</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Brumas Auricas</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Roll On</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Aceites esenciales</a>
              </li>
              <li className="header__sub-li">
                <a href="#">Unguento</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
