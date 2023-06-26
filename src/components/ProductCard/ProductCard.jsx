import "./ProductCard.css";
import { useContext, useState } from "react";
import imgCard from "../../assets/pruebaCard.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import  ModalProductDetail  from "../ModalProductDetail/ModalProductDetail";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import logo from '../../assets/logo.png'


export const ProductCard = ({data}) => {
 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    data.cantidad = 1;
    addItem(data);
    handleShow;
  };
  
  return (
    <>
    <div className="card__container">
      <section className="card__header">
        <figure className="card__figure--product"  onClick = {handleShow}>
          {
          data.cover!= "" ? 
            (
          <img className="card__img--product" src={data.cover} />
            )

          :(
          <img className="card__img--product" src={logo} />

          )
          }
        </figure>

        <figure className="card__figure--info">
        <AutoStoriesIcon className="card__img--info" onClick = {handleShow}/>
        </figure>
      </section>

      <section className="card__footer">
        <p className="card__title">{data.nombre}</p>
        <figure className="card__figure--footer">
          <AddShoppingCartIcon className="card__img--footer"  onClick={handleAddToCart} />
        </figure>
      </section>
    </div>
    <ModalProductDetail data={data} show={show} handleClose={handleClose}/>
    {/* <ToastContainer />  */}
    </>
    
  );
};
