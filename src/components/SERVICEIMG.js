import React from 'react'
import './SERVICEIMG.css';
import {Link} from 'react-router-dom';
import SERVICEIMAGE from '../images/SERVICEIMAGE1.jpg';
import PROGRAMIMAGE1 from '../images/SERVICEIMAGE3.png';
import PROGRAMIMAGE2 from '../images/SERVICEIMAGE2.png';
import PROGRAMIMAGE3 from '../images/SERVICEIMAGE4.png';
import PROGRAMIMAGE4 from '../images/SERVICEIMAGE5.png';

const SERVICEIMG = () => {
  return (
    <>
    <div className="SERVICE_HEADER">
      <img src={SERVICEIMAGE} alt="SERVICEIMAGE" className='SERVICEHEADER_IMAGE'/>
      <h1 className='SERVICE_HEADING'>OUR PROGRAMS</h1>
      <p className='SERVICE_HEADING'>Explore Our Programs To Shape You</p>
    </div>
    <div className="SERVICE_CONTENT">
      <div className="PROGRAM">
        <img src={PROGRAMIMAGE1} alt="PROGRAMIMAGE1" />
        <h2>Strength Training</h2>
        <p>In this Program, You are trained to improve you through many exercises</p>
        <Link to="/CONTACT">JOIN NOW </Link>
      </div>
      <div className="PROGRAM">
        <img src={PROGRAMIMAGE2} alt="PROGRAMIMAGE2" />
        <h2>Cardio Training</h2>
        <p>In this Program, You are trained to sequential moves in range of 20 to 30 minutes</p>
        <Link to="/CONTACT">JOIN NOW </Link>
      </div>
      <div className="PROGRAM">
        <img src={PROGRAMIMAGE3} alt="PROGRAMIMAGE3" />
        <h2>Fat Burning</h2>
        <p>This program is suitable for the persons who wants to get rid of his fat and lose thier weight</p>
        <Link to="/CONTACT">JOIN NOW </Link>
      </div>
      <div className="PROGRAM">
        <img src={PROGRAMIMAGE4} alt="PROGRAMIMAGE" />
        <h2>Health Fitness</h2>
        <p>This program is assigned for those who exercise only for their body fitness not for body building</p>
        <Link to="/CONTACT">JOIN NOW </Link>
      </div>
    </div>
    </>
  )
}

export default SERVICEIMG
