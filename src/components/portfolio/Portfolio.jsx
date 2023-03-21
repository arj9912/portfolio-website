import React from 'react'
import './portfolio.css'
import  IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const Portfolio = () => {
  const data =[
    {
    id:1,
    Image:IMG1,
    title:'Odama Pracima - Donation Landing Page',
    github:'https://github.com/odama-pracima',
    demo:'https://odama-pracima.netlify.app/'
  },
  {
    id:2,
    Image:IMG2,
    title:'Odama Pracima - Donation Landing Page',
    github:'https://github.com/odama-pracima',
    demo:'https://odama-pracima.netlify.app/'
  }, {
    id:3,
    Image:IMG3,
    title:'Odama Pracima - Donation Landing Page',
    github:'https://github.com/odama-pracima',
    demo:'https://odama-pracima.netlify.app/'
  }, {
    id:4,
    Image:IMG4,
    title:'Sala Web Site Design: saas landing page, saas website design',
    github:'https://github.com/odama-pracima',
    demo:'https://odama-pracima.netlify.app/'
  },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
            <img src="{ME}" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
          <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
            <img src="{ME}" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
          <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
            <img src="{ME}" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
          <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
            <img src="{ME}" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
          <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio