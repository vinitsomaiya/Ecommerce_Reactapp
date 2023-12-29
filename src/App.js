import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { NavBar } from './Components/navbar'
import {Cart} from "./Pages/cart/cart.jsx"
import {Shop} from "./Pages/shop/shop.jsx"
import { ShopContextProvider } from './context/shop-context.jsx';

function App() {
  return <div className="App">
    <ShopContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>
}

export default App;
