import React from 'react'

const Middle = ({ clicked, setClicked }) => {  
  return (
    <nav>
      <ul className='nav-links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#flowers">flowers</a></li>
        <li><a href="#jewellery">jewellery</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>
    </nav>
  )
}

export default Middle