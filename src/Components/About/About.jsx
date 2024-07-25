import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about' id="about" >
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
            <img src={profile_img} alt="" />
        </div> */}
        <div className="about-right">
            <div className="about-para">
                <h2>Software Engineer</h2>
                <h4 className='about-h4'>June 2023, Present Bhopal, Madhya Pradesh</h4>
                <p className='about-peragraph'>Working as a Front-end Developer at NIOS IT Solutions with more than One year of experience, I specialize in creating responsive
                    and user-friendly web interfaces. My responsibilities include developing and maintaining web applications using technologies like
                    HTML, CSS, JavaScript, and React.js to ensure optimal performance and a seamless user experience.</p>
                
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"75%"}} /> </div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /> </div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width:"68%"}} /> </div>
                <div className="about-skill"><p>MySQL</p> <hr style={{width:"58%"}} /> </div>
            </div>
        </div>
      </div>
      

    </div>
  )
}

export default About
