import React, { useState, useEffect, RefObject } from "react";
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


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Spinner}  from "../Spinner/spinner";
import { BtnWhatsapp } from "../../BtnWhatsapp/BtnWhatsapp";
import { BtnCatalog } from "../../BtnCatalog/BtnCatalog";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





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

    products.length == 0 ? (
      
      <div className="Spinner">
        <Spinner />
      </div>
      ):( 
    <div className="products__container">
      {products.map((prod) => {
        return <ProductCard key={prod.id} data={prod} />;
      })}
      <BtnCatalog/>
    <BtnWhatsapp/>
    </div>

    
    )
  )
};
