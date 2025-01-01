import React from 'react'
import TopBody from './TopBody'
import MainBody from './MainBody'
import Flowers from './Flowers'
import Jewellery from './Jewellery'

const Body = ({ cart, setCart }) => {  
  return (
    <div>
      <TopBody />
      <MainBody 
       cart={cart}
       setCart={setCart}  />
      <Flowers
       cart={cart}
       setCart={setCart}  />
      <Jewellery 
       cart={cart}
       setCart={setCart}  />
    </div>
  )
};

export default Body;