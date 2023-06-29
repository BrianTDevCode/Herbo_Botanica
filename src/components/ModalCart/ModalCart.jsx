import { ModalHeader } from "react-bootstrap";
import { ProductItemCart } from "../ProductItemCart/ProductItemCart";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./ModalCart.css";
import Modal from "react-bootstrap/Modal";
import { CartContext } from "../../context/CartContext";

export const ModalCart = ({ show, handleClose }) => {
  const { items, cleanCart } = useContext(CartContext);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal__cart"
        className="cart__container"
        contentClassName="cart_content"
      >
        <ModalHeader className="cart__header">
          <p>Carrito de compras</p>
          <CloseIcon className="cart__close" onClick={() => handleClose()} />
        </ModalHeader>
        <Modal.Body className="cart__body">
          {items.length > 0 ? (
            items.map((item) => {
              return <ProductItemCart key={item.id} data={item} />;
            })
          ) : (
            <p className="cart__productMessage">
              No hay productos en el carrito
            </p>
          )}

          <div className="cart__btns">
            {items.length > 0 ? (
              <>
                <button className="cart__clear" onClick={() => cleanCart()}>
                  Vaciar carrito
                </button>
                <Link
                  className="cart__continue"
                  to={"/checkout"}
                  onClick={handleClose}
                >
                  Continuar compra
                </Link>
              </>
            ) : (
              <>
                <button disabled className="cart__clear--disabled">
                  Vaciar carrito
                </button>
                <button disabled className="cart__continue--disabled">
                  Continuar compra
                </button>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
