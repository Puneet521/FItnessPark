import React from 'react';
import './CONTACTIMG.css';
import CONTACTIMAGE from '../images/CONTACTIMG.jpg';
import {AiOutlineMail} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';


const CONTACTIMG = () => {
  return (
    <>
    <div className='CONTACT_HEADER'>
    <img src={CONTACTIMAGE} alt="CONTACTIMAGE" />
        <h1 className='CONTACT_HEADING'>GET IN TOUCH</h1>
        <p className='CONTACT_HEADING'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum accusantium architecto sit ad fugiat!</p>
    </div>
    <div className="CONTACT_WRAPPER">
      <a href="mailto:a92582977@gmail.com" target='_blank' rel='noreferrer noopener'><AiOutlineMail size={50}/></a>
      <a href="https://t.me/HarshAroraA" target='_blank' rel='noreferrer noopener'><FaTelegramPlane size={50}/></a>
      <a href="https://wa.me/+919813812577" target='_blank' rel='noreferrer noopener'><AiOutlineWhatsApp size={50}/></a>
      <a href="tel:+919813812577" target='_blank' rel='noreferrer noopener'><BsTelephone size={50}/></a>
    </div>
    </>
  )
}

export default CONTACTIMG
