import "./NavBar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ModalCart } from "../ModalCart/ModalCart";
import { ModalNavbarMobile } from "../ModalNavbarMobile/ModalNavbarMobile";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const { items } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <MenuIcon className="header__hamburgueza" onClick={handleShowMenu} />
        </div>
        
        <Link className="header__link" to={`/`}>
          <figure className="header__figure">
            <img className="header__img" src={logo} alt="logo" />
          </figure>
        </Link>

       

        <div className="header__cart">
          <ShoppingCartIcon
            className="header__cart-icon"
            onClick={handleShow}
          />
          {items.length > 0 && <div className="header__cart-indicator" />}
        </div>
      </div>
      <div className="nav__header1">
        
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li">
              <Link className="header__link" to={`/`}>
                Inicio
              </Link>
            </li>
            <li className="header__li">
              <Link className="header__link" to={`/listaproductos/Herbo-Pets`}>
                Herbo Pets
              </Link>
              <ul className="header__sub-ul">
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Pets/Fórmulas-Florales-Pets`}
                  >
                    Formulas Florales
                  </Link>
                </li>
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Pets/Brumas`}
                  >
                    Brumas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="header__li">
              <Link
                className="header__link"
                to={`/listaproductos/Sahumo-&-Defumación`}
              >
                Sahumos
              </Link>
            </li>
            <li className="header__li">
              <Link className="header__link" to={`/listaproductos/Herbo-Home`}>
                Herbo Home
              </Link>
              <ul className="header__sub-ul">
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Home/Sales-de-Baño`}
                  >
                    Sales de baño
                  </Link>
                </li>

                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Herbo-Home/Esencias-para-hornillos`}
                  >
                    Esencias para hornillos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="header__li">
              <Link
                className="header__link"
                to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales`}
              >
                Florales & Tónicos herbales
              </Link>
              <ul className="header__sub-ul">
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales
                    Formulas-Florales/Formulas-Florales`}
                  >
                    Formulas florales
                  </Link>
                </li>
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales/Tónicos-Herbales`}
                  >
                    Tónicos herbales
                  </Link>
                </li>
              </ul>
            </li>
            <li className="header__li">
              <Link className="header__link" to={`listaproductos/Aromaterapia`}>
                Aromaterapia
              </Link>
              <ul className="header__sub-ul">
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Body-oils`}
                  >
                    Body Oils
                  </Link>
                </li>
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Brumas-Aúricas`}
                  >
                    Brumas Auricas
                  </Link>
                </li>
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Roll-on`}
                  >
                    Roll On
                  </Link>
                </li>
                
                
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <ModalCart show={show} handleClose={handleClose} />
      <ModalNavbarMobile show={showMenu} handleClose={handleCloseMenu}/>
    </header>
  );
};

export default NavBar;
