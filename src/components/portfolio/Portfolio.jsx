import React from 'react'
import './portfolio.css'
import  IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const Portfolio = () => {
  

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
          <img src={IMG1} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
         
           </div>
        </article>
        
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
          <img src={IMG2} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
         </div>
        </article>
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
          <img src={IMG3} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
           </div>
        </article>
        <article className='portfolio__iteam'>
          <div className='portfolio__iteam-image'>
          <img src={IMG4} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is a portfolio iteam title</h3>
          <div className='portfolio__iteam-cta'>
          <a href="https://github.com/arj9912" className='btn' target='_blank'>Github</a>
          
           </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio