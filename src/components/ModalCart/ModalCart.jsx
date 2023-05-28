import { ModalFooter, ModalHeader } from 'react-bootstrap';
import { ProductItemCart } from '../ProductItemCart/ProductItemCart';
import './ModalCart.css'

import Modal from "react-bootstrap/Modal";

export const ModalCart = ({ show, handleClose }) => {
  return (

 
    <Modal
      
      show={show}                
      onHide={handleClose}
      dialogClassName="modal__cart"
      className='cart__container'
      
    >
    <ModalHeader
      className='cart__header'
    >
      <p>Carrito de compras</p>
    </ModalHeader>
      <Modal.Body className='cart__body'>
        <ProductItemCart/>
        <ProductItemCart/>
        <ProductItemCart/>
        <ProductItemCart/>
        
     
      
      </Modal.Body>

      
        <div className="cart__btns">
          <button className='cart__clear'>Vaciar carrito</button>
          <button className='cart__continue'>Continuar compra</button>
        </div>
      
    </Modal>
    
  );
};
