import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import pdf from '../pdf/Piyush__Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero' >
      <img src={profile_img} alt="" />
      <h1><span>I'm Piyush Choudhary,</span> Frontend developer</h1>
      <p>I am a frontend developer with 1.5 years of experience. </p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With Me</AnchorLink> </div>
        <div className="hero-resume">
          <a href={pdf} download="Resume.pdf" className='resume' id="resume" >My resume</a>
        </div>
      </div>


    </div>
  )
}

export default Hero
