import React, { useState } from 'react';
import CartLine from './CartLine';
import { assets } from '../assets/assets';
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    assets.map((asset) => ({ ...asset, quantity: 1 }))
  );

  const add = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const minus = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div>
      <div className='cart-collection'>
        <CartLine 
          items={'Items'}
          title={'Title'}
          price={'Price'}
          quantity={'Quantity'}
          total={'Total'}
          remove={'Remove'}
        />
        {cartItems.map((item) => (
          <CartLine 
            key={item.id}
            items={<img src={item.value} alt={item.name} className='cart-image' />}
            title={item.name}
            price={`$${item.price}`}
            quantity={
              <>
                <button onClick={() => minus(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => add(item.id)}>+</button>
              </>
            }
            total={`$${calculateTotal(item.price, item.quantity)}`}
            remove={<MdDeleteForever onClick={() => removeFromCart(item.id)} />}
          />
        ))} 
      </div>
      <div className='totals-section'>
        <div className="totals-left">
          <h3>Cart Totals</h3>
          <div className='subtotals-div'>
            <div className='subtotals-line'>
              <p>Subtotal</p>
              <p>Ksh. 1200</p>
            </div>
            <div className='subtotals-line'>
              <p>Delivery Fee</p>
              <p>Ksh. 1200</p>
            </div>
            <div className='subtotals-line'>
              <h5>Total</h5>
              <h5>Ksh. 1200</h5>
            </div>
          </div>
          <button>Proceed to Payment</button>
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