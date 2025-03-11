import Body from './body/Body.js';
import Header from './header/Header';
import Footer from './Footer/Footer.js';
import Cart from './cart/Cart.js';
import Order from './Order/Order.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './CartProvider.js';
import { useState, useEffect } from 'react';
import Admin from './AdminPage/Admin.js';
import { assets } from './assets/assets.js';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from './LocalStotageUtils.js';
import AboutUs from './About.js';
import PolicyPage from './PolicyPage.js';

function App() {
  const [cart, setCart] = useState(loadCartFromLocalStorage());

  useEffect(() => {
    saveCartToLocalStorage(cart)
  }, [cart]);

  useEffect(() => {
    const savedCart = loadCartFromLocalStorage();
    if(savedCart){
      setCart(savedCart);
    }
  }, [setCart]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updatedCartItems = cart.map(cartItem => {
      const item = assets.find(asset => asset.id === cartItem.id);
      return item ? { ...item, quantity: cartItem.quantity } : null;
    }).filter(item => item !== null); // Remove null values
    
    setCartItems(updatedCartItems);
  }, [cart, assets]);

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      <CartProvider>
        {!isAdminRoute && <Header cart={cart} setCart={setCart} />}
        <main>
          <Routes>
            <Route path="/" element={<Body cart={cart} setCart={setCart} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/cart" element={<Cart 
              cart={cart}
              setCart={setCart}
              cartItems={cartItems}
              setCartItems={setCartItems} />} />
            <Route path="/order" element={<Order 
              cart={cart} 
              setCart={setCart}
              cartItems={cartItems}
              setCartItems={setCartItems} />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </CartProvider>
    </div>
  );
}

export default App;