import React from 'react'
import './TRAINERIMG.css';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import TRAINERIMAGE1 from '../images/TRAINER1.jpg';
import TRAINERIMAGE2 from '../images/TRAINER2.jpg';
import TRAINERIMAGE3 from '../images/TRAINER3.jpg';
import TRAINERIMAGE4 from '../images/TRAINER4.jpg';
import TRAINERIMAGE5 from '../images/TRAINER5.jpg';
import TRAINERIMAGE6 from '../images/TRAINER6.jpg';

const TRAINERIMG = () => {
  return (
    <>
    <div className="TRAINER_HEADER">
        <h1 className='TRAINER_HEADING'>OUR TRAINERS</h1>
        <p className='TRAINER_HEADING'>Trained yourself from our world class trainers</p>
    </div>
    <div className="TRAINER_CONTAINER">
      <div className="TRAINER_LIST">
        <div className="TRAINER_IMAGE">
          <img src={TRAINERIMAGE1} alt="TRAINERIMAGE1" />
        </div>
        <div className="TRAINER_DETAIL">
        <h2>ANA DE ARMA'S</h2>
        <p>Boxing Trainer</p>
        </div>
        <div className="TRAINER_SOCIAL">
          <a href="https://www.instagram.com"><BsInstagram size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.twitter.com"><AiOutlineTwitter size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.facebook.com"><FaFacebookF size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
        </div>
      </div>
      <div className="TRAINER_LIST">
        <div className="TRAINER_IMAGE">
          <img src={TRAINERIMAGE2} alt="TRAINERIMAGE2" />
        </div>
        <div className="TRAINER_DETAIL">
        <h2>JOHN DOE</h2>
        <p>Body Builder</p>
        </div>
        <div className="TRAINER_SOCIAL">
        <a href="https://www.instagram.com"><BsInstagram size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.twitter.com"><AiOutlineTwitter size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.facebook.com"><FaFacebookF size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
        </div>
      </div>
      <div className="TRAINER_LIST">
        <div className="TRAINER_IMAGE">
          <img src={TRAINERIMAGE3} alt="TRAINERIMAGE3" />
        </div>
        <div className="TRAINER_DETAIL">
        <h2>SCARLET WITCH</h2>
        <p>Flexibity Trainer</p>
        </div>
        <div className="TRAINER_SOCIAL">
        <a href="https://www.instagram.com"><BsInstagram size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.twitter.com"><AiOutlineTwitter size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.facebook.com"><FaFacebookF size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
        </div>
      </div>
      <div className="TRAINER_LIST">
        <div className="TRAINER_IMAGE">
          <img src={TRAINERIMAGE4} alt="TRAINERIMAGE4" />
        </div>
        <div className="TRAINER_DETAIL">
        <h2>DANIEL VINYO</h2>
        <p>Aerobic Trainer</p>
        </div>
        <div className="TRAINER_SOCIAL">
        <a href="https://www.instagram.com"><BsInstagram size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.twitter.com"><AiOutlineTwitter size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.facebook.com"><FaFacebookF size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
        </div>
      </div>
      <div className="TRAINER_LIST">
        <div className="TRAINER_IMAGE">
          <img src={TRAINERIMAGE5} alt="TRAINERIMAGE5" />
        </div>
        <div className="TRAINER_DETAIL">
        <h2>ALEXA BLISS</h2>
        <p>Yoga Trainer</p>
        </div>
        <div className="TRAINER_SOCIAL">
        <a href="https://www.instagram.com"><BsInstagram size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.twitter.com"><AiOutlineTwitter size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.facebook.com"><FaFacebookF size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
        </div>
      </div>
      <div className="TRAINER_LIST">
        <div className="TRAINER_IMAGE">
          <img src={TRAINERIMAGE6} alt="TRAINERIMAGE6" />
        </div>
        <div className="TRAINER_DETAIL">
        <h2>JOHNY GARGANO</h2>
        <p>Cardio Trainer</p>
        </div>
        <div className="TRAINER_SOCIAL">
        <a href="https://www.instagram.com"><BsInstagram size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.twitter.com"><AiOutlineTwitter size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.facebook.com"><FaFacebookF size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn size={20} style={{color:'white', margin:'0rem 0.5rem'}}/></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default TRAINERIMG
