import "./NavBar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import LOGO from "../../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ModalCart } from "../ModalCart/ModalCart";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const { items } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <div className="header__container">
        {/* <div className="divOut"></div> */}
        <Link className="header__link" to={`/`}>
          <figure className="header__figure">
            <img className="header__img" src={LOGO} alt="logo" />
          </figure>
        </Link>

        <div className="productCount__container">
          {items.length > 0 && <div className="productCount__indicator" />}
        </div>

        <div className="header__cart">
          <ShoppingCartIcon
            className="header__cart-icon"
            onClick={handleShow}
          />
          {items.length > 0 && <div className="header__cart-indicator" />}
        </div>
      </div>

      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link className="header__link" to={`/`}>
              Inicio
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/category`}>
              Herbo Pets
            </Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Formulas Florales
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Brumas
                </Link>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/category`}>
              Sahumos
            </Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Sahumerios
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Carbones de defumacion
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Velas
                </Link>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/listaproductos/Herbo_Home`}>
              Herbo Home
            </Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/categoria/tipo/Sales_de_Baño`}>
                  Sales de baño
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Difusores
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/listaproductos/Herbo_Home/Esencia_para_hornillo`}>
                  Esencias para hornillos
                </Link>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/category`}>
              Formula Floral
            </Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Tónicos herbales
                </Link>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <Link className="header__link" to={`/category`}>
              Aromaterapias
            </Link>
            <ul className="header__sub-ul">
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Body Oils
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Brumas Auricas
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Roll On
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Aceites esenciales
                </Link>
              </li>
              <li className="header__sub-li">
                <Link className="header__link" to={`/category`}>
                  Unguento
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <ModalCart show={show} handleClose={handleClose} />
    </header>
  );
};

export default NavBar;
