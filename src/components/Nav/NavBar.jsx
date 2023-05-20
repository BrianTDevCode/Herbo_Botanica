import React, { useRef } from "react";
import "./NavBar.css";

import LOGO from "../../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  const activeCategoryRef = useRef("");

  const handleCategoryClick = (category) => {
    activeCategoryRef.current =
      activeCategoryRef.current === category ? "" : category;
  };

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
          <li
            className={`header__li ${
              activeCategoryRef.current === "Herbo Pets" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("Herbo Pets")}
          >
            Herbo Pets
            <ul className="header__sub-ul">
              <li className="header__sub-li">Formulas Florales</li>
              <li className="header__sub-li">Brumas</li>
            </ul>
          </li>
          <li
            className={`header__li ${
              activeCategoryRef.current === "Sahumos" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("Sahumos")}
          >
            Sahumos
            <ul className="header__sub-ul">
              <li className="header__sub-li">Sahumerios</li>
              <li className="header__sub-li">Carbones de defumacion</li>
              <li className="header__sub-li">Velas</li>
            </ul>
          </li>
          <li
            className={`header__li ${
              activeCategoryRef.current === "Hermo Home" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("Hermo Home")}
          >
            Hermo Home
            <ul className="header__sub-ul">
              <li className="header__sub-li">Sales de baño</li>
              <li className="header__sub-li">Difusores</li>
              <li className="header__sub-li">Esencias para hornillos</li>
            </ul>
          </li>
          <li
            className={`header__li ${
              activeCategoryRef.current === "Formula Floral" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("Formula Floral")}
          >
            Formula Floral
            <ul className="header__sub-ul">
              <li className="header__sub-li">Tónicos herbales</li>
            </ul>
          </li>
          <li
            className={`header__li ${
              activeCategoryRef.current === "Aromaterapias" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("Aromaterapias")}
          >
            Aromaterapias
            <ul className="header__sub-ul">
              <li className="header__sub-li">Body Oils</li>
              <li className="header__sub-li">Brumas Auricas</li>
              <li className="header__sub-li">Roll On</li>
              <li className="header__sub-li">Aceites esenciales</li>
              <li className="header__sub-li">Unguento</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
