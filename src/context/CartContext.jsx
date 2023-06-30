import { useState } from 'react';
import { useEffect } from 'react';
import {createContext} from 'react'
import { ToastContainer, toast } from "react-toastify";



export const CartContext = createContext();

export const CartProvider = ({children}) => {

    let data = [];
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('') ;


    function checkLocalStorageInfo(){
      if (items!=[]) {
        if (localStorage.getItem("herboCart")!=null) {
          setItems(JSON.parse(localStorage.getItem("herboCart")));
        }
      }
    }

    function updeateLocalStorageInfo(info){
      localStorage.setItem("herboCart",JSON.stringify(info));
    }

    function addItem(item){
        
      

        //buscar repetidos
         const element = items.find(i=>i.id == item.id);
         if (element == undefined) {
              data = [...items,item];
              setItems(data);

              localStorage.setItem("herboCart",JSON.stringify(data));
              setMessage( toast.success('Se agrego al carrito!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                }));
         }
        
         else{
             
             
            setMessage( toast.warning('El producto ya se encuentra en el carrito!', {
                 position: "top-right",
                 autoClose: 1500,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "colored",
                 }));
         }
     
         
     }

     function removeItem(id){
        
        const filter = items.filter((obj) => obj.id !== id);
        setItems(filter);
        localStorage.setItem("herboCart",JSON.stringify(filter));
        setMessage( toast.error('Se eliminó el prducto del carrito!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          }));
    }

    function cleanCart(){
        
        setItems([]);
        localStorage.removeItem("herboCart");
     
       ;
    }

    useEffect(() => {
    checkLocalStorageInfo();
    console.log(items)
    }, [])
    


  return (
    <CartContext.Provider value={{items,setItems, addItem,removeItem, cleanCart, checkLocalStorageInfo,updeateLocalStorageInfo ,setMessage }}>
    {children} 
    <ToastContainer />

 </CartContext.Provider>
  )
}
