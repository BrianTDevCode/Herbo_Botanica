import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



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
        contentClassName="modalProductDetail__content"
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
            <p className="body__description--text">{data.descripcion}</p>
          </div>

          <figure className="body__figure">
            <img className="body__img" src={data.cover} alt="product-image" />
          </figure>

          <div className="body__use">
            <h3 className="body__title--use">Modo de uso</h3>
            <div className="body__use--description">
              <p className="body__use--text">
                {data.uso}
              </p>
            </div>
            {/* <button className="btn__carrito" onClick={handleAddToCart}>
              Agregar al carrito
            </button> */}
          </div>
        </Modal.Body>
      </Modal>

   
    </>
  );
};

export default ModalProductDetail;
