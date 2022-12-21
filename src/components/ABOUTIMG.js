import React from 'react'
import './ABOUTIMG.css'
import HEADERIMAGE from '../images/ABOUT1.jpg'
import ABOUTIMAGE from '../images/ABOUT2.jpg'
import VISIONIMAGE from '../images/ABOUT3.jpg'
import MISSIONIMAGE from '../images/ABOUT4.jpg'
const ABOUTIMG = () => {
  return (
    <>
    <div className="header">
        <img src={HEADERIMAGE} alt="HEADERIMAGE"  className='HEADERIMAGE'/>
        <h1 className='heading'>ABOUT US</h1>
        <p className='heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde laborum modi iure sint magnam vitae officia reprehenderit consectetur iste, porro expedita aliquam ea pariatur explicabo minus facere impedit quibusdam ab ullam culpa quos.</p>
    </div>
    <div className='ABOUT_CONTAINER'>
        <div className='ABOUT'>
           <div className='ABOUT_IMAGE'>
              <img src={ABOUTIMAGE} alt="ABOUTIMAGE" />
           </div>
           <div className='ABOUT_CONTENT'>
            <h1>OUR STORY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatem animi! Quae alias reprehenderit, similique dolorum aperiam magnam provident voluptas nulla maxime tempora at ipsa eaque quos ducimus voluptate assumenda doloremque corporis corrupti distinctio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus ab blanditiis atque corporis cupiditate, quibusdam quisquam ea et incidunt illum ducimus. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos labore, repellat ad rerum reiciendis in nam amet. Lorem ipsum dolor sit.</p>
           </div> 
        </div>
        <div className='VISION'>
            <div className='VISION_CONTENT'>
            <h1>OUR VISION</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque blanditiis laboriosam id, deserunt ab quo. Voluptates incidunt eum ratione amet alias, vel fugit dolor doloremque obcaecati quas rem, iste odit iure? Dolores, possimus.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloribus repudiandae similique doloremque, nesciunt, deserunt fugit harum, expedita eos alias ex officia?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, voluptatem culpa! Laboriosam, tempora. Iure, quam amet!</p>
            </div>
            <div className='VISION_IMAGE'>
               <img src={VISIONIMAGE} alt="VISIONIMAGE" />
            </div>
        </div>
        <div className='MISSION'>
            <div className="MISSION_IMAGE">
                <img src={MISSIONIMAGE} alt="MISSIONIMAGE" />
            </div>
            <div className='MISSION_CONTENT'>
                <h1>OUR MISSION</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ducimus sit voluptas inventore voluptatum ipsa, delectus, libero quam dolorem, totam at non. Optio aliquam illo omnis itaque adipisci aperiam eos modi, ipsa facilis excepturi!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti dignissimos voluptate officiis odio neque, facere id ad sunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe optio neque dignissimos nobis cupiditate ratione quos velit quisquam distinctio quod.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ABOUTIMG
