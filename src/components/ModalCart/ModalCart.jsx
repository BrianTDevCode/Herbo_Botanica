import { ProductItemCart } from '../ProductItemCart/ProductItemCart';
import './ModalCart.css'

import Modal from "react-bootstrap/Modal";

export const ModalCart = ({ show, handleClose }) => {
  return (

 
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}                
      onHide={handleClose}
    
    >
      {/* <div className="modal__close">
      <CloseIcon onClick={handleClose} />
    </div> */}
      <Modal.Body>
        <ProductItemCart/>
        <ProductItemCart/>
        <ProductItemCart/>
        <ProductItemCart/>
        <ProductItemCart/>
      </Modal.Body>
    </Modal>
    
  );
};
