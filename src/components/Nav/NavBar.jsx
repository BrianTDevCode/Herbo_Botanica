import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import LOGO from "../../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__container">
      <Link className="header__link" to={`/`}>
        <figure className="header__figure">
          <img className="header__img" src={LOGO} alt="logo" />
        </figure>
        </Link>
        <div className="header__cart">
          <ShoppingCartIcon className="header__cart-icon" />
        </div>
      </div>

      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link className="header__link" to={`/category`}>Herbo Pets</Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Formulas Florales</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Brumas</Link>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/category`}>Sahumos</Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Sahumerios</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Carbones de defumacion</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Velas</Link>
              </li>
            </ul>
          </li>
          {/* Resto de las categorías */}
          <li className="header__li">
            <Link className="header__link" to={`/category`}>Herbo Home</Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Sales de baño</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Difusores</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Esencias para hornillos</Link>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/category`}>Formula Floral</Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Tónicos herbales</Link>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/category`}>Aromaterapias</Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Body Oils</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Brumas Auricas</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Roll On</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Aceites esenciales</Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>Unguento</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
