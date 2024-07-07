import React from 'react'
import "./Hero.css"
/* 👋  */
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src='../../../public/Images/profileImage.jpeg' alt='profile image' className='myImage'/>
        <h1> Hello , I'm <span>Khushi Meena</span></h1>
      
        <p>Undergraduate student at MNIT JAIPUR . Open to opportunities for collboration and growth  . Let's connect to build and flourish together. </p>
        <div className='hero-profiles'>
          <li className='github'>
          <a href='https://github.com/khushiMeena2005' target='_blank'><i className="bi bi-github"></i></a></li>
       
          <li className='linkedin'>
          <a href='https://www.linkedin.com/in/khushi-meena2025/' target='_blank'><i className="bi bi-linkedin"></i> </a></li>

        </div>
        <div className='hero-action'>
          <div className='hero-connect'> <AnchorLink className="anchor-link" offset={50} href="#contact">
         Connect with me  </AnchorLink></div>
          <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero
