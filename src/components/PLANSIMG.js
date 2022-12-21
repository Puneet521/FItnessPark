import React from 'react';
import './PLANSIMG.css';
import PLANSHEADERIMG from '../images/PLANSIMG.jpg'

const PLANSIMG = () => {
  return (
    <>
    <div className='PLAN_HEADER'>
    <img src={PLANSHEADERIMG} alt="PLANSHEADERIMG" />
        <h1 className='PLANS_HEADING'>OUR MEMBERSHIP PLANS</h1>
        <p className='PLANS_HEADING'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum accusantium architecto sit ad fugiat!</p>
    </div>
    <div className="PLANS_CONTAINER">
      <div className="PLANS_BOX">
        <h2>Silver Package</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos totam et!</p>
        <h1>$29.99/mo</h1>
        <h3>Features</h3>
        <div className="PLANS_FEATURE">
        <p>First Feature</p>
        <p>Second Feature</p>
        <p>Third Feature</p>
        <p>Fourth Feature</p>
        <p>Fifth Feature</p>
        <p className='Unactive'>Sixth Feature</p>
        <p className='Unactive'>Seventh Feature</p>
        <p className='Unactive'>Eigth Feature</p>
        <p className='Unactive'>Ninth Feature</p>
        <p className='Unactive'>Tenth Feature</p>
        <p className='Unactive'>Eleventh Feature</p>
        </div>
      </div>
      <div className="PLANS_BOX2">
        <h2>Golden Package</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos totam et!</p>
        <h1>$49.99/mo</h1>
        <h3>Features</h3>
        <div className="PLANS_FEATURE">
        <p>First Feature</p>
        <p>Second Feature</p>
        <p>Third Feature</p>
        <p>Fourth Feature</p>
        <p>Fifth Feature</p>
        <p>Sixth Feature</p>
        <p>Seventh Feature</p>
        <p>Eigth Feature</p>
        <p className='Unactive'>Ninth Feature</p>
        <p className='Unactive'>Tenth Feature</p>
        <p className='Unactive'>Eleventh Feature</p>
        </div>
      </div>
      <div className="PLANS_BOX">
        <h2>Platinum Package</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos totam et!</p>
        <h1>$99.99/mo</h1>
        <h3>Features</h3>
        <div className="PLANS_FEATURE">
        <p>First Feature</p>
        <p>Second Feature</p>
        <p>Third Feature</p>
        <p>Fourth Feature</p>
        <p>Fifth Feature</p>
        <p>Sixth Feature</p>
        <p>Seventh Feature</p>
        <p>Eigth Feature</p>
        <p>Ninth Feature</p>
        <p>Tenth Feature</p>
        <p>Eleventh Feature</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default PLANSIMG
