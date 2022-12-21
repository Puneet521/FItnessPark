import React from 'react'
import './GALLERYIMG.css';
import GALLERYIMG1 from '../images/GALLERYIMG.jpg'
import GALLERYIMAGE1 from '../images/GALLERY1.jpg'
import GALLERYIMAGE2 from '../images/GALLERY2.jpg'
import GALLERYIMAGE3 from '../images/GALLERY3.jpg'
import GALLERYIMAGE4 from '../images/GALLERY4.jpg'
import GALLERYIMAGE5 from '../images/GALLERY5.jpg'
import GALLERYIMAGE6 from '../images/GALLERY6.jpg'
import GALLERYIMAGE7 from '../images/GALLERY7.jpg'
import GALLERYIMAGE8 from '../images/GALLERY8.jpg'
import GALLERYIMAGE9 from '../images/GALLERY9.jpg'
import GALLERYIMAGE10 from '../images/GALLERY10.jpg'
import GALLERYIMAGE11 from '../images/GALLERY11.jpg'
import GALLERYIMAGE12 from '../images/GALLERY12.jpg'
import GALLERYIMAGE13 from '../images/GALLERY13.jpg'
import GALLERYIMAGE14 from '../images/GALLERY14.jpg'
import GALLERYIMAGE15 from '../images/GALLERY15.jpg'
import GALLERYIMAGE16 from '../images/GALLERY16.jpg'
import GALLERYIMAGE17 from '../images/GALLERY17.jpg'
import GALLERYIMAGE18 from '../images/GALLERY18.jpg'

const GALLERYIMG = () => {
  return (
    <>
    <div className='GALLERY_HEADER'>
        <img src={GALLERYIMG1} alt="GALLERYIMG1" />
        <h1 className='GALLERY_HEADING'>OUR GALLERY</h1>
        <p className='GALLERY_HEADING'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum accusantium architecto sit ad fugiat!</p>
    </div> 
    <div className="GALLERY">
        <img src={GALLERYIMAGE1} alt="GALLERYIMAGE1" className='IMAGESTYLE1'/>
        <img src={GALLERYIMAGE2} alt="GALLERYIMAGE2" className='IMAGESTYLE2'/>
        <img src={GALLERYIMAGE3} alt="GALLERYIMAGE3" className='IMAGESTYLE'/>
        <img src={GALLERYIMAGE4} alt="GALLERYIMAGE4" className='IMAGESTYLE1'/>
        <img src={GALLERYIMAGE5} alt="GALLERYIMAGE5" className='IMAGESTYLE4'/>
        <img src={GALLERYIMAGE6} alt="GALLERYIMAGE6" className='IMAGESTYLE1'/>
        <img src={GALLERYIMAGE7} alt="GALLERYIMAGE7" className='IMAGESTYLE5'/>
        <img src={GALLERYIMAGE8} alt="GALLERYIMAGE8" className='IMAGESTYLE1'/>
        <img src={GALLERYIMAGE9} alt="GALLERYIMAGE9" className='IMAGESTYLE2'/>
        <img src={GALLERYIMAGE10} alt="GALLERYIMAGE10" className='IMAGESTYLE3'/>
        <img src={GALLERYIMAGE11} alt="GALLERYIMAGE11" className='IMAGESTYLE4'/>
        <img src={GALLERYIMAGE12} alt="GALLERYIMAGE12" className='IMAGESTYLE1'/>
        <img src={GALLERYIMAGE13} alt="GALLERYIMAGE13" className='IMAGESTYLE2'/>
        <img src={GALLERYIMAGE14} alt="GALLERYIMAGE14" className='IMAGESTYLE3'/>
        <img src={GALLERYIMAGE15} alt="GALLERYIMAGE15" className='IMAGESTYLE1'/>
        <img src={GALLERYIMAGE16} alt="GALLERYIMAGE16" className='IMAGESTYLE4'/>
        <img src={GALLERYIMAGE17} alt="GALLERYIMAGE17" className='IMAGESTYLE1'/>
        <img src={GALLERYIMAGE18} alt="GALLERYIMAGE18" className='IMAGESTYLE5'/>
    </div>
    </>
  )
}

export default GALLERYIMG
