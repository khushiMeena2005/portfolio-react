import React from 'react'
import educationImg from "../../../../public/svg/education.svg"
import "./Education.css"

const Education = () => {
  return (
    <> 
    <hr/>
    <div className='education'>
    <h1 className='education-title'> Education</h1>
    <div className='education-box'>
       <div className='left-educationImg'>
         <img src={educationImg} alt='education'  className='edImage'/>
      </div>
     <div className='right-education'>
      <div className='clg-education'>
        <h4>2021-Present</h4>
        <p><span className='logo-Education'><i className="bi bi-mortarboard-fill"></i></span>B.TECH Electrical Engineering</p>
        <p className='clg'>MNIT Jaipur</p>
      </div>
      <div className='sr-education'>
        <h4>2020</h4>
        <p><span className='logo-Education'><i className="bi bi-mortarboard-fill"></i></span>Sr Secondary School Certificate</p>
        <p>R.G.P.S Jaipur</p>
      </div>
      <div className='sec-education'>
        <h4>2018</h4>
        <p> <span className='logo-Education'><i className="bi bi-mortarboard-fill logo-image"></i> </span>Secondary School Certificate</p>
        <p>R.G.P.S Jaipur</p>
      </div>
     </div>
    </div>
     
    </div>
    </>
  )
}

export default Education
