import { ModalFooter, ModalHeader } from "react-bootstrap";
import { ProductItemCart } from "../ProductItemCart/ProductItemCart";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";


import Modal from "react-bootstrap/Modal";
import './ModalNavbarMobile.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const ModalNavbarMobile = ({ show, handleClose }) => {
  const subCatDisplay = (e) =>{
   /* eslint-disable no-debugger, no-console */
    console.log(e.target);
  }


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
              <div className="navMobile__item">
                <p className="navMobile__cat"> Home</p> 

                </div>
              </Link>
            </li>
            <li className="navMobile__li">
              <Link className="header__link" to={`/listaproductos/Herbo-Pets`}>
                <div className="navMobile__item">
                <p className="navMobile__cat"> Herbo Pets</p> 
                <button onClick={(e) => subCatDisplay(e)}>
                <KeyboardArrowDownIcon className="navMobile__itemIcon"  />

                </button>

                </div>
              </Link>
              <ul className="navMobile__sub-ul">

                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Pets/Fórmulas-Florales-Pets`}
                  >
                    Formulas Florales Pets
                  </Link>
                </li>


                <li className="navMobile__sub-li">
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
               <div className="navMobile__item">
                <p className="navMobile__cat"> Sahumos</p> 
                {/* <ArrowForwardIcon className="navMobile__itemIcon"/> */}
                </div>
              </Link>
            </li>
            <li className="navMobile__li">
              <Link className="header__link" to={`/listaproductos/Herbo-Home`}>
               
              <div className="navMobile__item">
                <p className="navMobile__cat"> Herbo Home</p> 
                <KeyboardArrowDownIcon className="navMobile__itemIcon"/>
                </div>

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
                <div className="navMobile__item">
                <p className="navMobile__cat">Formula Florales & Tónicos Herbales </p> 
                <KeyboardArrowDownIcon className="navMobile__itemIcon"/>
                </div>
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
                 
              <div className="navMobile__item">
                <p className="navMobile__cat"> Aromaterapias</p> 
                <KeyboardArrowDownIcon className="navMobile__itemIcon"/>
                </div>

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
