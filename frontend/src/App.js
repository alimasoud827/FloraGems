import Body from './body/Body.js';
import Header from './header/Header';
import Footer from './Footer/Footer.js';
import Cart from './cart/Cart.js';
import { Routes, Route, } from 'react-router-dom';
import { CartProvider } from './CartProvider.js';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <CartProvider>
        <Header
          cart={cart}
          setCart={setCart}
        />
        <Routes>
            <Route path='/' element={
              <Body
              cart={cart}
              setCart={setCart}   />} 
            />
            <Route path='/cart' element={<Cart
              cart={cart}
              setCart={setCart}  />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;