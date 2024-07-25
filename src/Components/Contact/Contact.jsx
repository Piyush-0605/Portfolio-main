import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3f37e122-5ed4-4f3e-bb7b-b183b3c2394a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    input.value="";
  };

  return (
    <div className='contact' id="contact" >
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm looking for new job , so feel free to send me a message about anything that you want me to work on. you can contact anytime. </p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" className='cont-detail-img' /> <p>piyushchoudhary853@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" className='cont-detail-img'/> <p>+91 9575960411</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" className='cont-detail-img' /> <p>Neemuch, Madhya Pradesh </p>
                </div>
            </div>
        </div>
        <form action="" className='contact-right' onSubmit={onSubmit} >
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor=''>Your Email</label>
            <input type="text" placeholder='Enter your email' name="email" />
            <label htmlFor='' >Write your message here</label>
            <textarea name="message"  rows="4" placeholder='Enter your message' ></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
      <div className='direct-contect' id="direct-contect" > 
        <a href="https://www.linkedin.com/in/piyush-choudhari-b9607121b/" target="_blank" className='items'>
        <CiLinkedin className='icon'/>
        </a>
        <a href="https://github.com/Piyush-0605" target="_blank" className="items"><FaGithub className='icon' /></a>
        <a href="https://www.google.com" target="_blank" className="items"><FaInstagram className='icon'/></a>
        <a href="https://www.facebook.com/profile.php?id=100076823834815" target="_blank" className="items"><CiFacebook className='icon'/></a>
      </div>
    </div>
  )
}

export default Contact
