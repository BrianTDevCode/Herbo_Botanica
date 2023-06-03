import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductListContainer.css";
import { useParams } from "react-router-dom";

export const ProductListContainer = () => {
  const [products, setProducts] = useState([]);

  //modal
  const [modalOpen, setmodalOpen] = useState(false);

  let {categoria,tipo } = useParams();

  useEffect(() => {
    if (categoria != undefined) {
      const getProductsByCat = async () => {
        const q = query(
          collection(db, "productos"),
          where("categoria", "==", categoria)
        );
        const querySnapshot = await getDocs(q);

        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setProducts(docs);
      };
    getProductsByCat();

    }

    if (tipo != undefined) {

      const getProductsByTipo = async () => {
        const q = query(
          collection(db, "productos"),
          where("tipo", "==", tipo)
        );
        const querySnapshot = await getDocs(q);

        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setProducts(docs);
      };
    getProductsByTipo();

    }

  }, [categoria,tipo]);

  return (
    <div className="container">
      {products.map((prod) => {
        return <ProductCard key={prod.id} data={prod} />;
      })}
    </div>
  );
};
