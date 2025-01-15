import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import './footer.css'

const Footer = () => {
  return (
    <div id='contact' className='footer'>
      <div className='footer-main'>
        <div className='left-footer'>
          <div className='logo-container'>
          <p className='poppins'>FloraGems.</p>
          <p className='dancing-script'>Floral Beauty, Gemstone Brilliance.</p>
        </div>
        <p className='desc-p'>At FloraGems, we offer stunning jewelry and beautiful flowers for every occasion. Our collection blends elegance with natural beauty, making it easy to find something special. Explore our unique offerings and add charm to your celebrations!</p>
        <div className='socials'>
          <div className='social-icon'><TfiEmail /><a className='email' href='mailto:floragems@gmail.com'>Email Us</a></div>
          <div className='social-icon'><FaWhatsapp /><a className='email' href='https://whatapp.com' target='_blank' rel="noopener noreferrer">Chat Us</a></div>
        </div>
        </div>
        <div className='middle-footer'>
          <h2>COMPANY</h2>
          <nav>
            <ul className='nav-links footer-nav'>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="#delivery">Delivery</a></li>
              <li><a href="/policy">Privacy Policy</a></li>
            </ul>
          </nav>  
        </div>
        <div className='right-footer'>
          <div>
            <h2>GET IN TOUCH</h2>
            <div className='cont'><IoCallOutline className='tell-icon' /><p>+2547-9930-9978</p></div>
          </div>
          <div className='dev'>
            <p>CONTACT DEVELOPER</p>
            <div className='dev-icon'>👨‍💻 <p>Developer</p></div>
            <div class="developer-info">
              <p>Developed by<strong>Ali Masoud</strong></p>
              <a href="https://github.com/alimasoud827" target="_blank" rel="noopener noreferrer" className='dev-icons'>alimasoud827@gmail.com</a>
              <a href="https://github.com/alimasoud827" target="_blank" rel="noopener noreferrer" className='dev-icons'>👨‍💻 GitHub</a>
            </div>
          </div>
        </div>
      </div>
      <div className='line'>
      </div>
      <div className='copy-right'>
        <p>Copyright 2024 © FloraGems - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer