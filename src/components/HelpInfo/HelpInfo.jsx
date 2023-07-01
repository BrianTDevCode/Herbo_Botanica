import "./HelpInfo.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import WalletIcon from "@mui/icons-material/Wallet";
import InventoryIcon from "@mui/icons-material/Inventory";

export const HelpInfo = () => {
  return (
    <section className="container__help">
      <h2 className="title__help">Cómo comprar en nuestra tienda mayorista</h2>

      <section className="info__help">
        <div className="div__help">
          <article className="card__help">
            <p className="">Agrega productos al carrito</p>

            <figure className="card__figure">
              <AddShoppingCartIcon
                className="card__img"
                style={{ fontSize: "60px" }}
              />
            </figure>
          </article>

          <article className="card__help">
            <p className="">Nosotras te enviamos la cotización por mail</p>

            <figure className="card__figure">
              <ForwardToInboxIcon
                className="card__img"
                style={{ fontSize: "60px" }}
              />
            </figure>
          </article>
        </div>

        <div className="div__help">
          <article className="card__help">
            <p className="">Hacés el pago y ponemos manos a la obra.</p>

            <figure className="card__figure">
              <WalletIcon className="card__img" style={{ fontSize: "60px" }} />
            </figure>
          </article>

          <article className="card__help">
            <p className="">
              Enviamos tu pedido y mucha info para que aprendas cómo vender en
              el mundo herbal.
            </p>

            <figure className="card__figure">
              <InventoryIcon
                className="card__img"
                style={{ fontSize: "60px" }}
              />
            </figure>
          </article>
        </div>
      </section>
    </section>
  );
};
