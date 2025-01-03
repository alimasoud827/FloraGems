import Body from './body/Body.js';
import Header from './header/Header';
import Footer from './Footer/Footer.js';
import Cart from './cart/Cart.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './CartProvider.js';
import { useState } from 'react';
import Admin from './AdminPage/Admin.js';


function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      <CartProvider>
        {!isAdminRoute && <Header cart={cart} setCart={setCart} />}
        <main>
          <Routes>
            <Route path="/" element={<Body cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </CartProvider>
    </div>
  );
}

export default App;