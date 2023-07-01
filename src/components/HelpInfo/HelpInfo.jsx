import "./HelpInfo.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import WalletIcon from "@mui/icons-material/Wallet";
import InventoryIcon from "@mui/icons-material/Inventory";

export const HelpInfo = () => {
  return (
    <section className="container__help">
      <h2 className="footer__title">
        Cómo comprar en nuestra tienda mayorista
      </h2>

      <section className="footer__cards">
        <article className="footer__article">
          <div className="divIcons">
            <p className="footer_subtitle--top">Agrega productos al carrito</p>
          </div>
          <figure className="card__figure">
            <AddShoppingCartIcon
              className="card__img"
              style={{ fontSize: "60px" }}
            />
          </figure>
        </article>

        <article className="footer__article">
          <div className="divIcons">
            <p className="footer_subtitle--top">
              Nosotras te enviamos la cotización por mail
            </p>
          </div>
          <figure className="card__figure">
            <ForwardToInboxIcon
              className="card__img"
              style={{ fontSize: "60px" }}
            />
          </figure>
        </article>

        <article className="footer__article">
          <div className="divIcons">
            <p className="footer_subtitle">
              Hacés el pago y ponemos manos a la obra.
            </p>
          </div>
          <figure className="card__figure">
            <WalletIcon className="card__img" style={{ fontSize: "60px" }} />
          </figure>
        </article>

        <article className="footer__article">
          <div className="divIcons">
            <p className="footer_subtitle">
              Enviamos tu pedido y mucha info para que aprendas cómo vender en
              el mundo herbal.
            </p>
          </div>

          <figure className="card__figure">
            <InventoryIcon
              className="card__img"
              style={{ fontSize: "60px" }}
            />
          </figure>
        </article>
      </section>
    </section>
  );
};
