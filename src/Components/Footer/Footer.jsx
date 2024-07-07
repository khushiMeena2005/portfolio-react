import React from 'react'
import "./Footer.css"



const Footer = () => {
  return (
   <div>
  
    <div className='footer'>
       <p>Created By <span>Khushi Meena</span></p>
       <p> Copyright © {new Date().getUTCFullYear()} </p>
    </div>
   </div>
  )
}

export default Footer
