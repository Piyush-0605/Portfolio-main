import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import project from '../data/projects.json'


const MyWork = () => {
  return (
    <div className='mywork' id="work" >
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {/* {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt='' />
        }) } */}
        {
          project.map((data)=>{
            return (
              <div id={data.id} className="projects">
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h5 className='project-title'>{data.title}</h5>
                <p className='project-des'>{data.description}</p>
                <div className="pro-btn">
                <a href={data.demo} target='_blank' className='project-demo' >Demo</a>
                <a href={data.source} target='_blank' className='project-code'  >Code</a>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
