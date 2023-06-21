import "./ProductItemCart.css";
import imgCard from "../../assets/pruebaCard.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductItemCart = ({ data }) => {
  const { items, setItems, removeItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === data.id ? { ...item, cantidad: newQuantity } : item
    );
    setItems(updatedItems);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
    }
  };

  const handleIncrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  };

  return (
    <>
      <section className="item__container">
        <figure className="item__figure">
          <img src={data.cover} alt="" className="item__img" />
        </figure>
        <div className="item__description">
          <p className="item__text">{data.nombre}</p>
        </div>

        <div className="item__quantity">
          {quantity > 1 && (
            <RemoveIcon
              style={{ fontSize: "25px" }}
              className="item__quantity--minus"
              onClick={handleDecrementQuantity}
            />
          )}
          {quantity === 1 && (
            <RemoveIcon
              style={{ fontSize: "25px", color: "#EBEBEB" }}
              className="item__quantity--minus"
              onClick={handleDecrementQuantity}
            />
          )}
          <p className="item__quantity--text">{quantity}</p>
          <AddIcon
            style={{ fontSize: "25px" }}
            className="item__quantity--plus"
            onClick={handleIncrementQuantity}
          />
        </div>

        <div className="item__delete">
          <DeleteOutlineIcon
            style={{ fontSize: "30px" }}
            onClick={() => removeItem(data.id)}
          />
        </div>
      </section>
      <div className="hr"></div>
    </>
  );
};
