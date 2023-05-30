import "./ModalCheckout.css";
import logo from "../../assets/Logo_blanco.png";
import { Formik, Form, Field } from "formik";
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
        validate={(values) => {
          const errors = {};

          // Validar los campos requeridos
          if (!values.email) {
            errors.email = "Campo requerido";
          }
          if (!values.country) {
            errors.country = "Campo requerido";
          }
          if (!values.firstName) {
            errors.firstName = "Campo requerido";
          }
          if (!values.lastName) {
            errors.lastName = "Campo requerido";
          }
          if (!values.address) {
            errors.address = "Campo requerido";
          }
          if (!values.postalCode) {
            errors.postalCode = "Campo requerido";
          }
          if (!values.city) {
            errors.city = "Campo requerido";
          }
          if (!values.phone) {
            errors.phone = "Campo requerido";
          }

          return errors;
        }}
      >
        <Form className="checkout__frm">
          <Field
            className="frm__input"
            type="text"
            name="email"
            placeholder="  Correo electrónico"
            required
          />

          <div className="frm__label">FORMA DE ENTREGA</div>
          <div className="frm__radio">
            <div className="frm__opcion">
              <Field
                type="radio"
                id="envio"
                name="deliveryMethod"
                value="envio"
                required
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
                required
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
            placeholder="  País"
            required
          />

          <div className="frm__group">
            <Field
              className="frm__input"
              type="text"
              name="firstName"
              placeholder="  Nombre"
              required
            />

            <Field
              className="frm__input"
              type="text"
              name="lastName"
              placeholder="  Apellido"
              required
            />
          </div>

          <div className="frm__group">
            <Field
              className="frm__input"
              type="text"
              name="address"
              placeholder="  Dirección"
              required
            />

            <Field
              className="frm__input"
              type="text"
              name="apartment"
              placeholder="  Número"
            />
          </div>

          <Field
            className="frm__input"
            type="text"
            name="apartment"
            placeholder="  Apartamento, local, etc (opcional)"
          />

          <div className="frm__group">
            <Field
              className="frm__input"
              type="number"
              name="postalCode"
              placeholder="  Código postal"
              required
            />

            <Field
              className="frm__input"
              type="text"
              name="city"
              placeholder="  Ciudad"
              required
            />
          </div>

          <Field
            className="frm__input"
            type="number"
            name="phone"
            placeholder="  Teléfono"
            required
          />

          <button className="frm__btn" type="submit">
            Enviar Formulario
          </button>
        </Form>
      </Formik>
    </section>
  );
};
