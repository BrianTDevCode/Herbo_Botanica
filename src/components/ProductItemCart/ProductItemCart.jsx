import "./ProductItemCart.css";

import imgCard from "../../assets/pruebaCard.png";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ProductItemCart = () => {
  return (
    <>
    
    
    <section className="item__container">
      <figure className="item__figure">
        <img src={imgCard} alt="" className="item__img" />
      </figure>
      <div className="item__description">
        <p className="item__text">Fórmula Floral Pets - Adaptación</p>
      </div>

      <div className="item__quantity">
        <RemoveIcon style={{fontSize: "40px"}} className="item__quantity--minus"/>
        <p className="item__quantity--text">1</p>
        <AddIcon style={{fontSize: "40px"}} className="item__quantity--plus"/>
      </div>
      <div className="item__delete">
        <DeleteOutlineIcon style={{fontSize: "40px"}}/>
      </div>
    </section>
    <div className="hr"></div>
    
    </>
  );
};
