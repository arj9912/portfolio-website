import React from 'react'
import './about.css'
import ME from '../../assets/my.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>
         <div className="about__content">
           <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>Just start</small>
        
             </article>
           
             <article className='about__card'>
              <VscFolderLibrary className='about__icons'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis esse necessitatibus dolorem sint aperiam et, 
            nam non distinctio aliquam quae veritatis architecto rerum dicta corrupti assumenda, itaque voluptates doloribus! Soluta!</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>

    </section>
  )
}

export default About