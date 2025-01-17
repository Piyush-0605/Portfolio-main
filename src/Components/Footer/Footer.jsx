import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [footerinput,setFooterinput]=useState('')
  return (
    <div className='footer' id="footer" >
      <div className="footer-top">
        <div className="top-left">
            {/* <img src={footer_logo} alt="" /> */}
            <p className='footer-pera'>I am a frontend developer , with 1.5 year of experience in NIOS IT Solutions . </p>            
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" value={footerinput} onChange={(e)=>setFooterinput(e.target.value)} placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe" onClick={()=>setFooterinput("")}  >Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2024 Piyush Choudhary. All rights reserved. </p>
        <div className="footer-bottom-right">
            <p>Team of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
