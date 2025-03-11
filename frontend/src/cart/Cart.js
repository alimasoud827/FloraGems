import React from 'react';
import CartLine from './CartLine';
import { MdDeleteForever } from "react-icons/md";
import Subtotals from './Subtotals';
import { Link } from 'react-router-dom';

const Cart = ({ setCart, setCartItems, cartItems }) => {
  const add = (id) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCartItems);
      return updatedCartItems;
    });
  };

  const minus = (id) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCartItems);
      return updatedCartItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.filter((item) => item.id !== id);
      setCart(updatedCartItems);
      return updatedCartItems;
    });
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
        { cartItems.length !== 0 ? (
          cartItems.map((item) => (
            <CartLine 
              key={item.id}
              items={<img src={item.imageURL} alt={item.name} className='cart-image' />}
              title={item.name || item.productName}
              price={`Ksh ${item.price.toFixed(2)}`}
              quantity={
                <>
                  <button className='quant-btn' onClick={() => minus(item.id)}>-</button>
                  {item.quantity}
                  <button className='quant-btn' onClick={() => add(item.id)}>+</button>
                </>
              }
              total={`Ksh ${calculateTotal(item.price, item.quantity)}`}
              remove={<MdDeleteForever onClick={() => removeFromCart(item.id)} />}
            />
          ))
        ) : (
          <div className='empty-cart'><h3>Your cart is empty</h3></div>
        )}
      </div>
      <div className='totals-section'>
        <div className="totals-left">          
          <h3>Cart Totals</h3>
          <Subtotals cartItems={cartItems} />
          <Link to='/order' className='proceedBtn'>Proceed to Payment</Link>
        </div>
        <div className="totals-right">
          <p>If you have promo code, Enter code here</p>
          <div>
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
