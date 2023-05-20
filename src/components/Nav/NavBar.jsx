import React from "react";
import "./NavBar.css";

import LOGO from "../../assets/logo.png";
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <figure className="header__figure">
          <img className="header__img" src={LOGO} alt="logo" />
        </figure>

        <div className="header__cart"></div>
      </div>

      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">Herbo Pets</li>
          <li className="header__li">Sahumos</li>
          <li className="header__li">Hermo Home</li>
          <li className="header__li">Formulas Florales</li>
          <li className="header__li">Aromaterapias</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
