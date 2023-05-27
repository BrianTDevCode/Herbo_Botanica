import React, { useState, useEffect } from 'react'
import { db } from "../../firebase/firebaseConfig";
import {collection,addDoc,query,where,getDocs, doc} from "firebase/firestore";
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductListContainer.css'



export const ProductListContainer = () => {

  const [products , setProducts] = useState([]);
  
  //modal
  const [modalOpen,setmodalOpen] = useState(false);




  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "productos")
      );
      const querySnapshot = await getDocs(q);

      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
     
      
      setProducts(docs);

    };
    
    
    getProducts();
   }, [])
  

  return (
    <div className='container'>
      {
        
        products.map((prod)=>{
          return (
            <ProductCard key={prod.nombre} data ={prod.nombre}/>
          );
          
        })
      }  
    </div>
  )
}
