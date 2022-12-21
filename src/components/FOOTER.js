import React from 'react'
import './FOOTER.css';
import {Link} from "react-router-dom"
import {GoLocation} from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

const FOOTER = () => {
  return (
    <>
  <div className='FOOTER_CONTAINER'>
    <div className="FOOTER_RIGHT">
      <h2>About the Company</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate ratione libero dolor vitae, harum est doloribus! Praesentium doloribus voluptatum harum distinctio!</p>
      <div className="FOOTER_SOCIALS">
      <Link to="https://www.instagram.com"><BsInstagram size={25} style={{color:'white', margin:'0rem 0.5rem'}}/></Link>
          <Link to="https://www.instagram.com"><AiOutlineTwitter size={25} style={{color:'white', margin:'0rem 0.5rem'}}/></Link>
          <Link to="https://www.instagram.com"><FaFacebookF size={25} style={{color:'white', margin:'0rem 0.5rem'}}/></Link>
          <Link to="https://www.instagram.com"><FaLinkedinIn size={25} style={{color:'white', margin:'0rem 0.5rem'}}/></Link>
      </div>
    </div>
    <div className="FOOTER_MID">
      <h2>Contact Us</h2>
        <div className="FOOTER_ADDRESS">
          <GoLocation size={20}/>
          <p>Gharaunda, (Karnal)</p>
        </div>
        <div className="FOOTER_TELEPHONE">
          <BsTelephone size={20}/>
          <p>+91 98***12*77</p>
        </div>
        <div className="FOOTER_MAIL">
          <AiOutlineMail size={20}/>
          <p>PuneetArora825@gmail.com</p>
        </div>
    </div>
    <div className="FOOTER_LEFT">
      <h2>FitnessPark</h2>
        <div className="FOOTER_LINKS">
         <Link to="/">Home</Link>
         |
         <Link to="/ABOUT">About</Link>
         |
         <Link to="/SERVICES">Services</Link>
         |
         <Link to="/GALLERY">Gallery</Link>
         |
         <Link to="/PLANS">Plans</Link>
         |
         <Link to="/CONTACT">Contact</Link>
        </div>
        <p>Copyright <strong>@FitnessPark </strong>All right reaserved </p>
    </div>
  </div>
    </>
  )
}

export default FOOTER
