import React, { useRef, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import logo from "../../assets/Logo_blanco.png";
import "./ModalCheckout.css";

export const ModalCheckout = () => {
  const { setItems, items } = useContext(CartContext);
  const [purchaseID, setPurchaseID] = useState("");
  const [productos, setProductos] = useState("");

  const form = useRef();

  const sendEmail = async (formData) => {
    try {
      const templateParams = {
        firstName: formData.user.firstName,
        lastName: formData.user.lastName,
        user_email: formData.user.user_email,
        deliveryMethod: formData.user.deliveryMethod,
        cart: formData.cart
          .map(
            (item) =>
              `${item.tipo} ---- ${item.nombre} ---- cantidad: ${item.cantidad}`
          )

          .join("\n"),
      };

      await emailjs.send(
        "service_gejbhkv",
        "template_qc54lns",
        templateParams,
        "SWOR8plzU25IDySSw"
      );
      console.log("Email sent successfully.");
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  const onSubmit = async (values) => {
    const formData = {
      cart: items,
      user: values,
    };

    const today = new Date();
    const now = today.toLocaleString();
    formData.user.purchaseDate = now;

    try {
      const resp = await Swal.fire({
        title: "Confirmar compra",
        text: "¿Desea confirmar la compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        confirmButtonColor: "#2b52e0",
        cancelButtonColor: "#dc3545",
      });

      if (resp.isConfirmed) {
        const docRef = await addDoc(collection(db, "pedidos"), {
          user: formData.user,
          cart: formData.cart,
        });
        console.log("Document written with ID:", docRef.id);

        const cartItems = formData.cart
          .map(
            (item) =>
              `${item.tipo} - ${item.nombre} - cantidad: ${item.cantidad}`
          )
          .join("\n");
        setProductos(cartItems);

        setItems([]);

        sendEmail(formData);

        Swal.fire({
          html: `<div>
            <img src="${logo}" alt="Logo" style="width: 100px; height: auto; position: absolute; top: 10px; left: 10px;" />
            <p style="margin-top: 75px;">
              ¡Genial! Recibimos tu formulario y te vamos a estar contactando por correo electrónico para continuar con tu pedido. ¡Muchas gracias!
            </p>
          </div>`,
          showConfirmButton: false,
          confirmButtonColor: "#28a745",
          background:
            "linear-gradient(177deg, rgba(159, 180, 179, 1) 0%, rgba(255, 255, 255, 1) 100%)",
          showCloseButton: true,
        });
      }
    } catch (error) {
      console.error("Error al confirmar la compra:", error);
    }
  };

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
          user_email: "",
          deliveryMethod: "envio",
          country: "",
          firstName: "",
          lastName: "",
          address: "",
          number: "",
          apartment: "",
          postalCode: "",
          city: "",
          phone: "",
        }}
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};

          // Validar los campos requeridos
          if (!values.user_email) {
            errors.user_email = "Campo requerido";
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
        <Form className="checkout__frm" ref={form}>
          <Field
            className="frm__input"
            type="text"
            name="user_email"
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
              <ShoppingCartIcon
                style={{ height: "2em" }}
                className="frm__icon"
              />
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
              <LocalShippingIcon
                style={{ height: "2em" }}
                className="frm__icon"
              />
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
              name="number"
              placeholder="  Número"
              required
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
              type="text"
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
            type="text"
            name="phone"
            placeholder="  Teléfono"
            required
          />

          <button className="frm__btn" type="submit">
            Confirmar compra
          </button>
        </Form>
      </Formik>
    </section>
  );
};
