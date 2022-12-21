import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleclick =() => setclick(!click);
  return (
    <div className='HEADER'>
    <h3>FitnessPark</h3>
    <ul className={click?'LINKS active':'LINKS'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ABOUT">About</Link></li>
        <li><Link to="/SERVICES">Services</Link></li>
        <li><Link to="/GALLERY">Gallery</Link></li>
        <li><Link to="/PLANS">Plans</Link></li>
        <li><Link to="/CONTACT">Contact</Link></li>
    </ul>
    <div className='hamburger' onClick={handleclick}>
    {click ?(<FaTimes size={20} style={{color:'white'}}/>):(<FaBars size={20} style={{color:'white'}}/>)}
    </div>
    </div>
  )
}

export default Navbar
