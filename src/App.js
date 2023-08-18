import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/Shop.jsx';
import Singlepage from './pages/singlepage/Singlepage';
import Cart from './pages/cart/Cart';
import { CartProvider } from './cardcontext/CardContext';

function App() {
  return (
    <>  
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/single' element={<Singlepage/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
