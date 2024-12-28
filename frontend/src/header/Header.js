import React from 'react';
import Left from './Left-Sec';
import Middle from './Mid-Sec';
import Right from './Right_Sec';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <Left />
      <Middle />
      <Right />
    </div>
  )
}

export default Header;