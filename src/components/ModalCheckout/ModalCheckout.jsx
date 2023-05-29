import './ModalCheckout.css'
import logo from "../../assets/Logo_blanco.png";
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

       <input className="frm__input" type="text" placeholder="Correo electrónico"/>
      

    <p className="frm__label">FORMA DE ENTREGA</p>
      
    <div className='frm__radio'>
      <div className="frm__opcion">

      <input type="radio" id="envio" name="envio" value="envio"/>
      <ShoppingCartIcon  style={{maxWidth: '40', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} className='frm__icon'/>
      <label>Envío</label>
      </div>
    
      <div className="frm__opcion">

      <input type="radio" id="retiro" name="retiro" value="retiro"/>
      <LocalShippingIcon style={{maxWidth: '40', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} className='frm__icon'/>
      <label>Retiro</label>
      </div>
    </div>

    <p className="frm__label">Dirección de envíó</p>
    <input className="frm__input" type="text" placeholder="País"/>

    <div className="frm__group">
    <input className="frm__input" type="text" placeholder="Nombre"/>
    <input className="frm__input" type="text" placeholder="Apellido"/>
    </div>



    <div className="frm__group">
    <input className="frm__input" type="text" placeholder="Dirección"/>
    <input className="frm__input" type="text" placeholder="Número"/>
    </div>

    <input className="frm__input" type="text" placeholder="Apartamento, local, etc (opcional)"/>

    <div className="frm__group">
    <input className="frm__input" type="text" placeholder="Código postal"/>
    <input className="frm__input" type="text" placeholder="Ciudad"/>
    </div>

    <input className="frm__input" type="text" placeholder="Teléfono"/>

      <button className='frm__btn'>Enviár Formulario</button>
      </form>
    </section>
  );
};
