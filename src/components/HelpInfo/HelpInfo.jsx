import './HelpInfo.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const HelpInfo = () => {
  return (
    <footer className="container footer">
        <h2 className="footer__title">Cómo comprar en nuestra tienda mayorista</h2>

        <section className='footer__cards'>
            <article className='footer__article'>
                <p className="footer_subtitle">Agrega productos al carrito</p>
                <figure className="card__figure">
                  <AddShoppingCartIcon className='card__img' style={{ fontSize: "100px" }} />
                </figure>
            </article>

            <article className='footer__article'>
                <p className="footer_subtitle">Agrega productos al carrito</p>
                <figure className="card__figure">
                  <AddShoppingCartIcon className='card__img' style={{ fontSize: "100px" }} />
                </figure>
            </article>

            <article className='footer__article'>
                <p className="footer_subtitle">Agrega productos al carrito</p>
                <figure className="card__figure">
                  <AddShoppingCartIcon className='card__img' style={{ fontSize: "100px" }} />
                </figure>
            </article>

            <article className='footer__article'>
                <p className="footer_subtitle">Agrega productos al carrito</p>
                <figure className="card__figure">
                  <AddShoppingCartIcon className='card__img' style={{ fontSize: "100px" }} />
                </figure>
            </article>

        </section>

    </footer>
  )
}
