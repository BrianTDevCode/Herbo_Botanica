import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import NavBar from "./components/Nav/NavBar";
import { HomePage } from "./components/HomePage/HomePage";
import { ProductListContainer } from "./components/ProductListContainer/ProductListContainer";
import { ModalCheckout } from "./components/ModalCheckout/ModalCheckout";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/listaproductos/:categoria/:tipo"
            element={<ProductListContainer />}
          />
          <Route
            path="/listaproductos/:categoria"
            element={<ProductListContainer />}
          />
          <Route path="/checkout" element={<ModalCheckout />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
