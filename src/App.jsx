import { useState } from "react"

import NavBar from "./components/Nav/NavBar"
import { HomePage } from "./components/HomePage/HomePage"
import {HelpInfo} from "./components/HelpInfo/HelpInfo"
import {ProductListContainer} from "./components/ProductListContainer/ProductListContainer"
import { BrowserRouter,Routes,Route } from "react-router-dom";




const App = () => {

  const [modalOpen,setModalOpen] = useState(false);

  return (
    
    

<BrowserRouter>
        <NavBar/>
    
        <Routes>
          <Route path='/' element={<HomePage/>}/>
           <Route path='/category' element={<ProductListContainer />}/>
{/*            
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>  */}
        </Routes>
    
        </BrowserRouter>


   
  )
}

export default App