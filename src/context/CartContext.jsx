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
     
       ;
    }

  return (
    <CartContext.Provider value={{items,setItems, addItem,removeItem, cleanCart ,setMessage }}>
    {children} 
    <ToastContainer />

 </CartContext.Provider>
  )
}
