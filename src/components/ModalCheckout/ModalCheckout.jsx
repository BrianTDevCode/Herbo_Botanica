import './ModalCheckout.css'
import logo from "../../assets/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


export const ModalCheckout = () => {
  return (
    <section className="container checkout__container">
      <div className="checkout__header">
        <figure className="checkout__figure">
          <img className="checkout__img" src={logo} alt="logo" />
        </figure>

        <p className="checkout__title">Información de contacto</p>
      </div>
      <form className="checkout__frm">

       <input className="frm__input" type="text" placeholder="Correo electrónico" />
      <label htmlFor="entrega"></label>


      
    <div className='frm__radio'>
      <div className="frm__opcion">

      <input type="radio" id="envio" name="envio" value="envio"/>
      <ShoppingCartIcon className='frm__icon'/>
      <label for="envio">Envío</label>
      </div>
    
      <div className="frm__opcion">

      <input type="radio" id="retiro" name="retiro" value="retiro"/>
      <LocalShippingIcon className='frm__icon'/>
      <label for="dewey">Retiro</label>
      </div>
    </div>
      </form>
    </section>
  );
};
