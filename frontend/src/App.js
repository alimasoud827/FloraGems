import Body from './body/Body.js';
import Header from './header/Header';
import Footer from './Footer/Footer.js';
import Cart from './cart/Cart.js';
import { Routes, Route, } from 'react-router-dom';
import { CartProvider } from './CartProvider.js';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;