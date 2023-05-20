import React, { useState } from "react";
import "./NavBar.css";
import LOGO from "../../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  const [showHerboPetsSubcategories, setShowHerboPetsSubcategories] = useState(false);
  const [showHermoHomeSubcategories, setShowHermoHomeSubcategories] = useState(false);
  const [showSahumosSubcategories, setShowSahumosSubcategories] = useState(false);
  const [showFormulasFloralSubcategories, setShowFormulasFloralSubcategories] = useState(false);
  const [showAromaterapiasSubcategories, setShowAromaterapiasSubcategories] = useState(false);

  const handleHerboPetsSubcategoriesEnter = () => {
    setShowHerboPetsSubcategories(true);
  };

  const handleHerboPetsSubcategoriesLeave = () => {
    setShowHerboPetsSubcategories(false);
  };

  const handleHermoHomeSubcategoriesEnter = () => {
    setShowHermoHomeSubcategories(true);
  };

  const handleHermoHomeSubcategoriesLeave = () => {
    setShowHermoHomeSubcategories(false);
  };

  const handleSahumosSubcategoriesEnter = () => {
    setShowSahumosSubcategories(true);
  };

  const handleSahumosSubcategoriesLeave = () => {
    setShowSahumosSubcategories(false);
  };

  const handleFormulasFloralSubcategoriesEnter = () => {
    setShowFormulasFloralSubcategories(true);
  };

  const handleFormulasFloralSubcategoriesLeave = () => {
    setShowFormulasFloralSubcategories(false);
  };

  const handleAromaterapiasSubcategoriesEnter = () => {
    setShowAromaterapiasSubcategories(true);
  };

  const handleAromaterapiasSubcategoriesLeave = () => {
    setShowAromaterapiasSubcategories(false);
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
            className={`header__li ${showHerboPetsSubcategories ? "show-subcategories" : ""}`}
            onMouseEnter={handleHerboPetsSubcategoriesEnter}
            onMouseLeave={handleHerboPetsSubcategoriesLeave}
          >
            Herbo Pets
            {showHerboPetsSubcategories && (
              <ul className="header__sub-ul">
                <li className="header__sub-li">Formulas Florales</li>
                <li className="header__sub-li">Brumas</li>
              </ul>
            )}
          </li>
          <li
            className={`header__li ${showHermoHomeSubcategories ? "show-subcategories" : ""}`}
            onMouseEnter={handleHermoHomeSubcategoriesEnter}
            onMouseLeave={handleHermoHomeSubcategoriesLeave}
          >
            Hermo Home
            {showHermoHomeSubcategories && (
              <ul className="header__sub-ul">
                <li className="header__sub-li">Sales de baño</li>
                <li className="header__sub-li">Difusores</li>
                <li className="header__sub-li">Esencias para hornillos</li>
              </ul>
            )}
          </li>
          <li
            className={`header__li ${showSahumosSubcategories ? "show-subcategories" : ""}`}
            onMouseEnter={handleSahumosSubcategoriesEnter}
            onMouseLeave={handleSahumosSubcategoriesLeave}
          >
            Sahumos
            {showSahumosSubcategories && (
              <ul className="header__sub-ul">
                <li className="header__sub-li">Sahumerios</li>
                <li className="header__sub-li">Carbones de defumación</li>
                <li className="header__sub-li">Velas</li>
              </ul>
            )}
          </li>
          <li
            className={`header__li ${showFormulasFloralSubcategories ? "show-subcategories" : ""}`}
            onMouseEnter={handleFormulasFloralSubcategoriesEnter}
            onMouseLeave={handleFormulasFloralSubcategoriesLeave}
          >
            Formulas Floral
            {showFormulasFloralSubcategories && (
              <ul className="header__sub-ul">
                <li className="header__sub-li">Tónicos herbales</li>
              </ul>
            )}
          </li>
          <li
            className={`header__li ${showAromaterapiasSubcategories ? "show-subcategories" : ""}`}
            onMouseEnter={handleAromaterapiasSubcategoriesEnter}
            onMouseLeave={handleAromaterapiasSubcategoriesLeave}
          >
            Aromaterapias
            {showAromaterapiasSubcategories && (
              <ul className="header__sub-ul">
                <li className="header__sub-li">Body Oils</li>
                <li className="header__sub-li">Brumas Auricas</li>
                <li className="header__sub-li">Roll On</li>
                <li className="header__sub-li">Aceites esenciales</li>
                <li className="header__sub-li">Unguento</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
