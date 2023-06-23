import { ModalFooter, ModalHeader } from "react-bootstrap";
import { ProductItemCart } from "../ProductItemCart/ProductItemCart";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";


import Modal from "react-bootstrap/Modal";
import './ModalNavbarMobile.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const ModalNavbarMobile = ({ show, handleClose }) => {


 ;
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
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
              <Link className="header__link" to={`/`}>
                Inicio
              </Link>
            </li>
            <li className="navMobile__li">
              <Link className="header__link" to={`/listaproductos/Herbo-Pets`}>
                <div className="navMobile__item">
                <p className="navMobile__cat"> Herbo Pets</p> 
                <ArrowForwardIcon className="navMobile__itemIcon"/>
                </div>
              </Link>
              <ul className="header__sub-ul">
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Pets/Fórmulas-Florales-Pets`}
                  >
                    Formulas Florales & Tónicos Herbales
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
            <li className="navMobile__li">
              <Link
                className="header__link"
                to={`/listaproductos/Sahumo-&-Defumación`}
              >
                Sahumos 
              </Link>
            </li>
            <li className="navMobile__li">
              <Link className="header__link" to={`/listaproductos/Herbo-Home`}>
                Herbo Home <ArrowForwardIcon className="navMobile__itemIcon"/>
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
            <li className="navMobile__li">
              <Link
                className="header__link"
                to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales/Formulas-Florales`}
              >
                Formula Floral 
              </Link>
              <ul className="header__sub-ul">
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
            <li className="navMobile__li">
              <Link className="header__link" to={`listaproductos/Aromaterapia`}>
                Aromaterapias <ArrowForwardIcon className="navMobile__itemIcon"/>
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
                <li className="header__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Aceites-Esceniales`}
                  >
                    Aceites esenciales
                  </Link>
                </li>
                
              </ul>
            </li>
          </ul>
        </nav>
      
      </Modal.Body>
    </Modal>

   


    </>
  );
};
