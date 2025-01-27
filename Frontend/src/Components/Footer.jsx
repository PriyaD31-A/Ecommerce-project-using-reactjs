import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SlHeart } from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer1">
        <div className="row mt-5">
          <div className='col-lg-5 col-md-12 mt-5'>
            <h1 className='footer2 text-start m-2'>ShinyCart</h1>
            <p class="footer3">At ShinyCart, we believe in making fashion accessible to everyone. Our curated collection of dresses combines style, quality, and 
              affordability to help you look and feel your best.</p>
            <div className='d-flex pt-3 ps-5 iconss'>
              <h4><FaFacebookSquare /></h4>
              <h4><FaWhatsapp /></h4>
              <h4><CiLinkedin /></h4>
              <h4><FaSquareInstagram /></h4>
             
            </div>
          </div>

          <div className='col-lg-2 col-6'>
            <h4 className='product'>New Products</h4>
            <div>
              <ul className='ul1 g-2'>
                <a href="#"><li className='mt-1'>Women's Winter wears</li></a>
                <a href="#"><li className='mt-1'>Men's fashion wears</li></a>
                <a href="#"><li className='mt-1'>Kids wears</li></a>
                <a href="#"><li className='mt-1'>Traditional wears</li></a>
              </ul>
            </div>
          </div>

          <div className='col-lg-2 col-6'>
            <h4 className='support'>Support</h4>
            <div> 
              <ul className="ul1 g-2">
                <a href="#"><li className='mt-1'>Terms and conditions</li></a>
                <a href="#"><li className='mt-1'>Privacy policy</li></a>
                <a href="#"><li className='mt-1'>Report a payment issue</li></a>
                <a href="#"><li className='mt-1'>Product return</li></a>
              </ul>
            </div>
          </div>

          <div className='col-lg-2 col-6 call'>
            <p>Call Us: +123-456-789</p>
            <p>shinycartinfo@gmail.com</p>
          </div>
           
          <div>
            <p className='copy text-center'>
              copyright©2024 All rights reserved | This template is made with <SlHeart /> by shinycart
            </p>
          </div>
          
          </div>
      </div>
  </footer>
  )
}

export default Footer
