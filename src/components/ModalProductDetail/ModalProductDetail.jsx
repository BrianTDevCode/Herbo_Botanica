import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import imgCard from "../../assets/pruebaCard.png";
import Button from "react-bootstrap/Button";

import "./ModalProductDetail.css";
import { CartContext } from "../../context/CartContext";

const ModalProductDetail = ({ data, show, handleClose }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(data);
    toast.success(`${data.nombre} se ha agregado al carrito`);
  };

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
          <h3 className="modal__product-title">{data.nombre}</h3>
          <figure className="header__figure-ProductDetail">
          <CloseIcon onClick={handleClose} className="header__img-ProductDetail" />

          </figure>
        </div>

        <Modal.Body className="modal__product-body">
          <div className="body__description">
            <h3 className="body__title--description">Descripción</h3>
            <p className="body__description--text">
              Para animales reactivos, con problemas de comportamiento. Se
              muestran agresivos dentro de la manada y con los humanos. Esta
              fórmula trabaja la agresividad, la actitud desafiante, la reacción
              fuera de control y aporta paz y calma y los ayuda a recuperar el
              equilibrio emocional y el control de sus impulsos.
            </p>
          </div>

          <figure className="body__figure">
            <img className="body__img" src={imgCard} alt="product-image" />
          </figure>

          <div className="body__use">
            <h3 className="body__title--use">Modo de uso</h3>
            <div className="body__use--description">
              <p className="body__use--text">
                10 gotas por día en su pote de agua o 4 gotas, 4 veces al día por
                boca. Las esencias florales son 100% naturales. No generan
                adicción ni tienen contraindicaciones.
              </p>
            </div>
            <button className="btn__carrito" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <ToastContainer /> 
    </>
  );
};

export default ModalProductDetail;
