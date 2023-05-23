import "./ProductCard.css";
import imgCard from "../../assets/pruebaCard.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const ProductCard = () => {
  return (
    <div className="card__container">
      <section className="card__header">
        <figure className="card__figure--product">
          <img className="card__img--product" src={imgCard} />
        </figure>

        <figure className="card__figure--info">
          <AutoStoriesIcon className="card__img--info" />
        </figure>
      </section>

      <section className="card__footer">
        <p className="card__title">Nombre del producto</p>
        <figure className="card__figure--footer">
          <AddShoppingCartIcon className="card__img--footer" />
        </figure>
      </section>
    </div>
  );
};
