import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";

import imgCard from "../../assets/pruebaCard.png";
import Button from 'react-bootstrap/Button';

import "./ModalProductDetail.css";

const ModalProductDetail = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <div className="modal__header">
          <h3>titulo del producto</h3>
        </div>
        {/* <div className="modal__close">
          <CloseIcon onClick={handleClose} />
        </div> */}
        <Modal.Body>
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
            <p className="body__use--description">
              10 gotas por día en su pote de agua o 4 gotas, 4 veces al día por
              boca. Las esencias florales son 100% naturales. No generan
              adicción, ni tiene contraindicaciones.
            </p>

<div className="btn__carrito">

            <Button className="btn__input" variant="success">Agregar al carrito</Button>
</div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProductDetail;
