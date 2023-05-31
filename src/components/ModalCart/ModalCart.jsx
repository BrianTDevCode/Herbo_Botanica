import { ModalFooter, ModalHeader } from "react-bootstrap";
import { ProductItemCart } from "../ProductItemCart/ProductItemCart";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ModalCart.css";

import Modal from "react-bootstrap/Modal";
import { CartContext } from "../../context/CartContext";
// import { ModalCheckout } from "../ModalCheckout/ModalCheckout";

export const ModalCart = ({ show, handleClose }) => {

  const {items } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal__cart"
      className="cart__container"
    >
      <ModalHeader className="cart__header">
        <p>Carrito de compras</p>
      </ModalHeader>
      <Modal.Body className="cart__body">
       {
           items.map((item)=>{
            return (
              <ProductItemCart key={item.id} data ={item}/>
            )
       })}
      
      
      </Modal.Body>

      <div className="cart__btns">
        <button className="cart__clear">Vaciar carrito</button>
        <Link className="cart__continue" to={'/checkout'} onClick={handleClose} >Continuar compra</Link>
      </div>
    </Modal>

   


    </>
  );
};
