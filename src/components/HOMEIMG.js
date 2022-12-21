import React from 'react';
import "./HOMEIMG.css";
import HOMEIMAGE from '../images/HOMEIMAGE.jpg'
import HEARTIMAGE from '../images/hearticon.png'
import { Link } from 'react-router-dom';

const HOMEIMG = () => {
  return (
    <>
    <div className='MIDDLE'>
    <div className='bgimg'>
    <img src={HOMEIMAGE} alt="HOMEIMAGE" className='HOMEIMAGE'/>
    </div>
    </div>
    <div className='content'>
    <span>lorem</span>
    <p>THE BEST FITNESS CLUB IN THE TOWN</p>
    </div>
    <div className='tag'>
    <h1 className='stroketext'>SHAPE YOUR</h1>
    <h1>IDEAL BODY</h1>
    <p>Join The Legend Of The Fitness World</p>
    <div className="button">
    <Link to ='/ABOUT' className='btn'>LEARN MORE</Link>
    <Link to ='/CONTACT' className='btnlight'>JOIN US</Link>
    </div>
    </div>
    <div className='heartrate'>
      <img src={HEARTIMAGE} alt="HEARTIMAGE" className='heartimage'/>
      <p>HEARTRATE</p>
      <p className='rating'>116 bpm</p>
    </div>
    </>
  )
}

export default HOMEIMG
