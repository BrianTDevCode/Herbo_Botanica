import { ModalFooter, ModalHeader } from "react-bootstrap";
import { ProductItemCart } from "../ProductItemCart/ProductItemCart";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";


import Modal from "react-bootstrap/Modal";
import './ModalNavbarMobile.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 const showSubCat = (cat) =>{
   const element = document.getElementById(cat);
   if(element.style.display == '' || element.style.display == 'none'){

     element.style.display = 'block';
   }
   else{
    element.style.display = 'none';
   }
   
  }


export const ModalNavbarMobile = ({ show, handleClose }) => {
 

 ;
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


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
                <button onClick={() => showSubCat('ul__pets')}>
                <KeyboardArrowDownIcon className="navMobile__itemIcon"  />

                </button>

                </div>
              </Link>
              <ul id="ul__pets" className="navMobile__sub-ul">

                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Pets/Fórmulas-Florales-Pets`}
                  >
                    <p className="navMobile__Subcat"> Florales Pets</p>
                  </Link>
                </li>


                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Pets/Brumas`}
                  >
                 <p className="navMobile__Subcat"> Brumas</p>
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
      

                <button onClick={() => showSubCat('ul__home')}>
                <KeyboardArrowDownIcon className="navMobile__itemIcon"  />

                </button>
                </div>

              </Link>
              <ul id="ul__home" className="navMobile__sub-ul">
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`/listaproductos/Herbo-Home/Sales-de-Baño`}
                  >
                    <p className="navMobile__Subcat">Sales de baño </p>
                  </Link>
                </li>

                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Herbo-Home/Esencias-para-hornillos`}
                  >
                    <p className="navMobile__Subcat">Esencias para hornillos</p> 
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
                <p className="navMobile__cat">Florales & Tónicos Herbales </p> 
                <button onClick={() => showSubCat('ul__florales')}>
                <KeyboardArrowDownIcon className="navMobile__itemIcon"  />

                </button>
                </div>
              </Link>
              <ul id="ul__florales" className="navMobile__sub-ul">
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Fórmulas-Florales-&-Tónicos-Herbales/Tónicos-Herbales`}
                  >
                    <p className="navMobile__Subcat">Tónicos herbales</p> 
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navMobile__li">
              <Link className="header__link" to={`listaproductos/Aromaterapia`}>
                 
              <div className="navMobile__item">
                <p className="navMobile__cat"> Aromaterapias</p> 
                <button onClick={() => showSubCat('ul__arpmaterapias')}>
                <KeyboardArrowDownIcon className="navMobile__itemIcon"  />

                </button>
                </div>

              </Link>
              <ul id="ul__arpmaterapias" className="navMobile__sub-ul">
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Body-oils`}
                  >
                    <p className="navMobile__Subcat">Body oils</p>
                  </Link>
                </li>
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Brumas-Aúricas`}
                  >
                    <p className="navMobile__Subcat">Brumas Aúricas</p>
                  </Link>
                </li>
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Roll-on`}
                  >
                    <p className="navMobile__Subcat">Roll on</p>
                  </Link>
                </li>
                <li className="navMobile__sub-li">
                  <Link
                    className="header__link"
                    to={`listaproductos/Aromaterapia/Aceites-Esceniales`}
                  >
                    <p className="navMobile__Subcat">Aceitas escenciales</p>
                  </Link>
                </li>
                
              </ul>
            </li>
          </ul>
        </nav>
      
      </Modal.Body>
    </Modal>

   


    
  );
};
