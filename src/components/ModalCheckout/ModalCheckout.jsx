import "./ModalCheckout.css";
import logo from "../../assets/Logo_blanco.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const ModalCheckout = () => {
  return (
    <section className="container checkout__container">
      <div className="checkout__header">
        <figure className="checkout__figure">
          <img className="checkout__img" src={logo} alt="logo" />
        </figure>
        <p className="checkout__title">Información de contacto</p>
      </div>
      <Formik
        initialValues={{
          email: "",
          deliveryMethod: "envio",
          country: "",
          firstName: "",
          lastName: "",
          address: "",
          apartment: "",
          postalCode: "",
          city: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="checkout__frm">
          <Field
            className="frm__input"
            type="text"
            name="email"
            placeholder="Correo electrónico"
          />
          <div className="frm__label">FORMA DE ENTREGA</div>
          <div className="frm__radio">
            <div className="frm__opcion">
              <Field
                type="radio"
                id="envio"
                name="deliveryMethod"
                value="envio"
              />
              <ShoppingCartIcon style={{ height: '2em' }} className="frm__icon" />
              <label htmlFor="envio">Envío</label>
            </div>
            <div className="frm__opcion">
              <Field
                type="radio"
                id="retiro"
                name="deliveryMethod"
                value="retiro"
              />
              <LocalShippingIcon style={{ height: '2em' }} className="frm__icon" />
              <label htmlFor="retiro">Retiro</label>
            </div>
          </div>
          <div className="frm__label">Dirección de envío</div>
          <Field
            className="frm__input"
            type="text"
            name="country"
            placeholder="País"
          />
          <div className="frm__group">
            <Field
              className="frm__input"
              type="text"
              name="firstName"
              placeholder="Nombre"
            />
            <Field
              className="frm__input"
              type="text"
              name="lastName"
              placeholder="Apellido"
            />
          </div>
          <div className="frm__group">
            <Field
              className="frm__input"
              type="text"
              name="address"
              placeholder="Dirección"
            />
            <Field
              className="frm__input"
              type="text"
              name="apartment"
              placeholder="Número"
            />
          </div>
          <Field
            className="frm__input"
            type="text"
            name="apartment"
            placeholder="Apartamento, local, etc (opcional)"
          />
          <div className="frm__group">
            <Field
              className="frm__input"
              type="text"
              name="postalCode"
              placeholder="Código postal"
            />
            <Field
              className="frm__input"
              type="text"
              name="city"
              placeholder="Ciudad"
            />
          </div>
          <Field
            className="frm__input"
            type="text"
            name="phone"
            placeholder="Teléfono"
          />
          <button className="frm__btn" type="submit">
            Enviar Formulario
          </button>
        </Form>
      </Formik>
    </section>
  );
};
