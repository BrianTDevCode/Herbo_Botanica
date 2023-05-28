import "./ModalMensaje.css";
import Modal from "react-bootstrap/Modal";


export const ModalMensaje = ({ show, handleClose }) => {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
      dialogClassName="modal-mensaje"
      className="mensaje__container"
    >
      <div className="mensaje__header">
       <figure className="mensaje__figure">
        <img className="mensaje__img"></img>
       </figure>
      </div>

      <Modal.Body>
        <div className="mensaje__content">
          <p className="mensaje__content--text">
            ¡Hola! Solo queríamos recordarte que en nuestro canal mayorista
            contamos con un monto mínimo de compra. Esto nos permite brindarte
            un mejor servicio y asegurarnos de que tu experiencia sea genial. Si
            tienes alguna pregunta o necesitas más información, no dudes en
            contactarnos. ¡Estamos aquí para ayudarte en lo que necesites!
          </p>
        </div>

        <div className="mensaje__btn"></div>
      </Modal.Body>
    </Modal>
  );
};
