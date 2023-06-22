import { ModalFooter, ModalHeader } from "react-bootstrap";
import { ProductItemCart } from "../ProductItemCart/ProductItemCart";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";


import Modal from "react-bootstrap/Modal";
import { CartContext } from "../../context/CartContext";
// import { ModalCheckout } from "../ModalCheckout/ModalCheckout";

export const ModalNavbarMobile = ({ show, handleClose }) => {


  const [showModal, setShowModal] = useState(false);
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
      <ModalHeader className="cart__header">
        <p>Carrito de compras</p>
      </ModalHeader>
      <Modal.Body className="cart__body">
      
      </Modal.Body>
    </Modal>

   


    </>
  );
};
