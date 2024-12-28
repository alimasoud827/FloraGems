import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";


const Right = () => {
  return (
    <div className='right-sec'>
      <FaSearch style={{ color: 'gray' }} title="Search" className='icon' />
      <IoCartOutline style={{ color: '' }} title="Cart" className='icon' />
      <button className='sign-in-btn'>Sign in</button>
    </div>
  )
}

export default Right