import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";

import imgCard from "../../assets/pruebaCard.png";
import Button from 'react-bootstrap/Button';

import "./ModalProductDetail.css";
import { CartContext } from "../../context/CartContext";

const ModalProductDetail = ({ data, show, handleClose }) => {


  const {addItem } = useContext(CartContext);

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        dialogClassName="modal__product-detail"
      >
        <div className="modal__product-header">
          <h3 className="modal__product-title">titulo del producto</h3>
          <CloseIcon onClick={handleClose} className="modal__product-close" />
        </div>
       
        <Modal.Body className="modal__product-body">
          <div className="body__description">
            <h3 className="body__title--description">Descripción</h3>
            <p className="body__description--text">
              Para animales reactivos, con problemas de comportamiento. Se
              muestran agresivos dentro de la manada y con los humanxs. Esta
              fórmula trabaja la agresividad, la actitud desafiante, la reacción
              fuera de control y aporta paz y calma y los ayuda a recuperar el
              equilibrio emocional y el control de sus impulsos.
            </p>
          </div>

          <figure className="body__figure">
            <img className="body__img" src={imgCard} />
          </figure>

          <div className="body__use">
            <h3 className="body__title--use">Modo de uso</h3>
          

<div className="body__use--description">
  <p className="body__use--text">
              10 gotas por día en su pote de agua o 4 gotas, 4 veces al día por
              boca. Las esencias florales son 100% naturales. No generan
              adicción, ni tiene contraindicaciones.
            </p>
</div>
            <button className="btn__carrito" onClick={() => addItem(data)}>Agregar al carrito</button>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProductDetail;
