import { Navigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { Formik, Form, Field, useFormikContext } from "formik";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_blanco.png";
import "./ModalCheckout.css";
import { BtnWhatsapp } from "../../BtnWhatsapp/BtnWhatsapp";
import { BtnCatalog } from "../../BtnCatalog/BtnCatalog";


export const ModalCheckout = () => {
  const { setItems, items,cleanCart } = useContext(CartContext);

  const [purchaseID, setPurchaseID] = useState("");
  const [productos, setProductos] = useState("");

  const formikForm = useRef();
  const form = useRef();

  const pedido = () => {
    const delivey = document.getElementsByName("deliveryMethod");
    const divFrm = document.getElementById("datos__envio");

  


    if (delivey[0].checked == true) {
       divFrm.style.display = "block";

      for (let i = 7; i < form.current.length; i++) {
        if (form.current[i].nodeName == "INPUT") {
          if (i != 9) {
            form.current[i].required = true;
          }
        }
      }
    } else {
       divFrm.style.display = "none";
      for (let i = 7; i < form.current.length; i++) {
        if (form.current[i].nodeName == "INPUT") {
          form.current[i].required = false;
        }
      }
    }
  };

  const sendEmail = async (formData) => {
    try {
      const templateParams = {
        firstName: formData.user.firstName,
        lastName: formData.user.lastName,
        user_email: formData.user.user_email,
        deliveryMethod: formData.user.deliveryMethod,
        dni: formData.user.dni,
        phone: formData.user.phone,
        address: formData.user.address,
        number: formData.user.number,
        apartment: formData.user.apartment,
        postalCode: formData.user.postalCode,
        city: formData.user.city,
        country: formData.user.country,
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
      ;
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  const onSubmit = async (values) => {
    if (values.deliveryMethod == "retiro") {
      values.address = "";
      values.number = "";
      values.apartment = "";
      values.postalCode = "";
      values.city = "";
      values.country = "";
    }
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
        confirmButtonColor: "#177f77",
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

        cleanCart();

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

  return items.length > 0 ? (
    <section className="container checkout__container">
      <div className="checkout__header">
        <figure className="checkout__figure">
          <img className="checkout__img" src={logo} alt="logo" />
        </figure>
        <p className="checkout__title">Información de contacto</p>
      </div>
      <Formik
        innerRef={formikForm}
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
          dni: "",
        }}
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          const envio = document.getElementById("datos__envio");

          if (!values.user_email) {
            errors.user_email = "Campo requerido";
          }

          if (!values.dni) {
            errors.country = "Campo requerido";
          }

          if (!values.firstName) {
            errors.firstName = "Campo requerido";
          }
          if (!values.lastName) {
            errors.lastName = "Campo requerido";
          }
          if (!values.phone) {
            errors.phone = "Campo requerido";
          }

          if (values.deliveryMethod!='retiro') {
            
          
          if (!values.country) {
            errors.country = "Campo requerido";
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

          if (!values.number) {
            errors.number = "Campo requerido";
          }
        }
         
          return errors;
        }}
      >
        <Form className="checkout__frm" ref={form}>
          <div className="frm__label">FORMA DE ENTREGA</div>
          <br />
          <div className="frm__radio">
            <div className="frm__opcion">
              <Field
                type="radio"
                id="envio"
                name="deliveryMethod"
                value="envio"
                required
                onClick={() => {
                  pedido();
                }}
              />
              <LocalShippingIcon
                style={{ height: "2em" }}
                className="frm__icon"
              />
              <label htmlFor="envio">Envío</label>
            </div>

            <div className="frm__opcion">
              <Field
                defaultChecked ={true}
                type="radio"
                id="retiro"
                name="deliveryMethod"
                value="retiro"
                required
                
                onClick={() => {
                  pedido();
                }}
              />
              <StoreIcon style={{ height: "2em" }} className="frm__icon" />
              <label htmlFor="retiro">Retiro en tienda</label>
            </div>
          </div>

          <br />

          <div className="frm__group">
            <Field
              className="frm__input"
              type="text"
              name="firstName"
              placeholder="  Nombre"
              required
              defaultChecked={false}
            />

            <Field
              className="frm__input"
              type="text"
              name="lastName"
              placeholder="  Apellido"
              required
            />
          </div>

          <Field
            className="frm__input"
            type="number"
            name="dni"
            placeholder="  DNI"
            required
          />

          <Field
            className="frm__input"
            type="text"
            name="user_email"
            placeholder="  Correo electrónico"
            required
          />

          

          <Field
            className="frm__input"
            type="text"
            name="phone"
            placeholder="  Teléfono"
            required
          />

          <div id="datos__envio" className="frm__envio">
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
              name="country"
              placeholder="  País"
              required
            />
          </div>
          <div className="frm__btns">

            <Link className="frm__cancelarCompra" to={"/"}
              onClick={()=>{
                cleanCart();
              }}
            >
              Cancelar compra
            </Link>
            <button className="frm__btn" type="submit">
              Confirmar compra
            </button>
          </div>
        </Form>
      </Formik>
      <BtnCatalog />
      <BtnWhatsapp />
    </section>
  ) : (
    <Navigate to="/" />
  );
};
