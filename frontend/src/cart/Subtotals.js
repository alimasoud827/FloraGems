import React from 'react'

const Subtotals = ({ cartItems }) => {
  const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
  }

  return (    
    <div>
      <div className='subtotals-div'>
        <div className='subtotals-line'>
          <p>Subtotal</p>
          <p>Ksh. {calculateSubtotal(cartItems)}</p>
        </div>
        <div className='subtotals-line'>
          <p>Delivery Fee</p>
          <p>Ksh. {cartItems.length !== 0 ? 200 : 0 }</p>
        </div>
        <div className='subtotals-line'>
          <h5>Total</h5>
          <h5>Ksh. {cartItems.length !== 0 ? (calculateSubtotal(cartItems)) + 200 : 0 }</h5>
        </div>
      </div>
    </div>
  )
}

export default Subtotals