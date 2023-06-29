import { ModalHeader } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./ModalNavbarMobile.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const ModalNavbarMobile = ({ show, handleClose }) => {
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const showSubCat = (cat) => {
    const element = document.getElementById(cat);
    if (element.style.display == "" || element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal__navDialog"
      className="modal__navContainer"
      contentClassName="modal__navContent"
    >
      <ModalHeader className="menu__header">
        <p className="menu__title">Nuestos productos</p>
      </ModalHeader>
      <Modal.Body className="cart__body">
        <nav className="header__navMobile">
          <ul className="navMobile__ul">
            <li className="navMobile__li">
              <Link
                className="header__link"
                to={`/`}
                onClick={() => handleClose()}
              >
                <div className="navMobile__item">
                  <p className="navMobile__cat"> Home</p>
                </div>
              </Link>
            </li>
            <li className="navMobile__li">
              <div className="cat__container">
                <div className="navMobile__item">
                  <Link
                    className=""
                    to={`/listaproductos/Herbo-Pets`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__cat"> Herbo Pets</p>
                  </Link>
                  <button onClick={() => showSubCat("ul__pets")}>
                    <KeyboardArrowDownIcon className="navMobile__itemIcon" />
                  </button>
                </div>
              </div>
              <ul id="ul__pets" className="navMobile__sub-ul">
                <li className="navMobile__sub-li">
                  <Link
                    className=""
                    to={`/listaproductos/Herbo-Pets/Fórmulas-Florales-Pets`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat"> Florales Pets</p>
                  </Link>
                </li>

                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Pets/Brumas`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat"> Brumas</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navMobile__li">
              <Link
                className=""
                to={`/listaproductos/Sahumo-&-Defumación`}
                onClick={() => handleClose()}
              >
                <div className="navMobile__item">
                  <p className="navMobile__cat"> Sahumos</p>
                </div>
              </Link>
            </li>
            <li className="navMobile__li">
              <div className="cat__container">
                <div className="navMobile__item">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Home`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__cat"> Herbo Home</p>
                  </Link>

                  <button onClick={() => showSubCat("ul__home")}>
                    <KeyboardArrowDownIcon className="navMobile__itemIcon" />
                  </button>
                </div>
              </div>

              <ul id="ul__home" className="navMobile__sub-ul">
                <li className="navMobile__sub-li">
                  <Link
                    className=""
                    to={`/listaproductos/Herbo-Home/Sales-de-Baño`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Sales de baño </p>
                  </Link>
                </li>

                <li className="navMobile__sub-li">
                  <Link
                    className=""
                    to={`listaproductos/Herbo-Home/Esencias-para-hornillos`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Esencias para hornillos</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navMobile__li">
              <div className="cat__container">
                <div className="navMobile__item">
                  <Link
                    className=""
                    to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__cat">
                      Florales & Tónicos Herbales{" "}
                    </p>
                  </Link>
                  <button onClick={() => showSubCat("ul__florales")}>
                    <KeyboardArrowDownIcon className="navMobile__itemIcon" />
                  </button>
                </div>
              </div>

              <ul id="ul__florales" className="navMobile__sub-ul">
                <li className="navMobile__sub-li">
                  <Link
                    className=""
                    to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales
                    Formulas-Florales/Formulas-Florales`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Formulas florales </p>
                  </Link>
                </li>
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales/Tónicos-Herbales`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Tónicos herbales</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navMobile__li">
              <div className="cat__container">
                <div className="navMobile__item">
                  <Link
                    className=""
                    to={`listaproductos/Aromaterapia`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__cat"> Aromaterapias</p>
                  </Link>
                  <button onClick={() => showSubCat("ul__arpmaterapias")}>
                    <KeyboardArrowDownIcon className="navMobile__itemIcon" />
                  </button>
                </div>
              </div>

              <ul id="ul__arpmaterapias" className="navMobile__sub-ul">
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Body-oils`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Body oils</p>
                  </Link>
                </li>
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Brumas-Aúricas`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Brumas Aúricas</p>
                  </Link>
                </li>
                <li className="navMobile__sub-li">
                  <Link
                    className=""
                    to={`listaproductos/Aromaterapia/Roll-on`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Roll on</p>
                  </Link>
                </li>
                {/* <li className="navMobile__sub-li">
                  <Link
                    className=""
                    to={`listaproductos/Aromaterapia/Aceites-Esceniales`}
                    onClick={() => handleClose()}
                  >
                    <p className="navMobile__Subcat">Aceitas escenciales</p>
                  </Link>
                </li> */}
              </ul>
            </li>
          </ul>
        </nav>
      </Modal.Body>
    </Modal>
  );
};
