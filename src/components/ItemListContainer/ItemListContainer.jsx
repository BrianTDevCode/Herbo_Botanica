import React, { useState, useEffect } from 'react'
import { db } from "../../firebase/firebaseConfig";
import {collection,addDoc,query,where,getDocs, doc} from "firebase/firestore";
import { ProductCard } from '../ProductCard/ProductCard';



export const ItemListContainer = () => {

  const [products , setProducts] = useState([]);
  const prueba = [1,2,3,4,5];

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

      // setCounter( (c) => c + 1 )

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
