import "./ProductItemCart.css";

import imgCard from "../../assets/pruebaCard.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductItemCart = ({ data }) => {
  const { items, cleanCart, removeItem } = useContext(CartContext);

  data.cantidad = [];

  let [quantity, setQuantity] = useState(1);
  let [product, setProduct] = useState(data);

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
        
      setQuantity((prevConnt) => prevConnt - 1);
      data.cantidad = quantity;
      setProduct(data);
      console.log(data);
    }
  };

  const handleIncrementQuantity = () => {
      //quantity++;
      setQuantity((prevConnt) => prevConnt + 1);
      data.cantidad = quantity;
     
      setProduct(data);
      console.log(data);
     

    
  };

  return (
    <>
      <section className="item__container">
        <figure className="item__figure">
          <img src={imgCard} alt="" className="item__img" />
        </figure>
        <div className="item__description">
          <p className="item__text">{data.nombre}</p>
        </div>


        <div className="item__quantity">

        {quantity > 1 &&
         <RemoveIcon
            style={{ fontSize: "25px" }}
            className="item__quantity--minus"
            onClick={handleDecrementQuantity}
          />
        }
{quantity == 1 &&
   <RemoveIcon
   style={{ fontSize: "25px", color: "#EBEBEB" }}
   className="item__quantity--minus"
   onClick={handleDecrementQuantity}
 />
}
         
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
            onClick={() => removeItem(data.id, items)}
          />
        </div>
      </section>
      <div className="hr"></div>
    </>
  );
};
