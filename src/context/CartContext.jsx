import { useState } from 'react';
import {createContext} from 'react'
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    let data = [];
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('') ;


    function addItem(item){
        
      

        //buscar repetidos
         const element = items.find(i=>i.id == item.id);
         if (element == undefined) {
              data = [...items,item];
              setItems(data);

           
         }
        
         else{
             
             
            setMessage( toast.success('El producto ya se encuentra en el carrito!', {
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
        
    }

    function cleanCart(){
        
        setItems([]);
       ;
    }

  return (
    <CartContext.Provider value={{items,setItems, addItem,removeItem, cleanCart ,setMessage }}>
    {children} 
    <ToastContainer />

 </CartContext.Provider>
  )
}
