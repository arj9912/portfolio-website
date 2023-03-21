import React from 'react'
import'./footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>ARJUN</a>
    <ul className='permalinks'>
     <li><a href="#">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#experience">Experience</a></li>
     <li><a href="#Services">Services</a></li>
     <li><a href="#portfolio">Portfolio</a></li>
     <li><a href="#testimonials">Testimonials</a></li>
     <li><a href="#Contact">Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href="https://facebook.com"> < FaFacebook/></a>
      <a href="https://instagram.com"><FaInstagram/></a>
      <a href="https://titok.com"><FaTiktok/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; ARJUN Tutorials. All rights reserved.</small>
    </div>
  </footer>
  )
}

export default Footer