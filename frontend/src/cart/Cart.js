import React from 'react';
import CartLine from './CartLine';
import { MdDeleteForever } from "react-icons/md";
import Subtotals from './Subtotals';

const Cart = ({ setCart, setCartItems, cartItems }) => {
  const add = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const minus = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    setCart((prev) => prev.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div className='cart'>
      <div className='cart-collection'>
        <CartLine 
          items={'Items'}
          title={'Title'}
          price={'Price (Ksh)'}
          quantity={'Quantity'}
          total={'Total'}
          remove={'Remove'}
        />
        { cartItems.length !== 0 ?
          cartItems.map((item) => (
            <CartLine 
              key={item.id}
              items={<img src={item.value} alt={item.name} className='cart-image' />}
              title={item.name}
              price={`${item.price}`}
              quantity={
                <>
                  <button className='quant-btn' onClick={() => minus(item.id)}>-</button>
                  {item.quantity}
                  <button className='quant-btn' onClick={() => add(item.id)}>+</button>
                </>
              }
              total={`$${calculateTotal(item.price, item.quantity)}`}
              remove={<MdDeleteForever onClick={() => removeFromCart(item.id)} />}
            />
          ))
          : <div className='empty-cart'><h3>Your cart is empty</h3></div>
        }
      </div>
      <div className='totals-section'>
        <div className="totals-left">          
          <h3>Cart Totals</h3>
          <Subtotals cartItems={cartItems} />
          <a href='/order' className='proceedBtn' >Proceed to Payment</a>
        </div>
        <div className="totals-right">
          <p>If you have promo code, Enter code here</p>
          <div>
            <input type="text" name="" placeholder="promo code" /><button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
