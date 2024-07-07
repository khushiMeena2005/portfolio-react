import React from 'react'
import "./Projects.css"
import theme_pattern from "../../../public/Images/assets/theme_pattern.svg"

import ProjectData from './ProjectData'

const Projects = () => {
  return (
    <div  id="projects" className='projects'>
     <div className='project-title'>
      <h1>Projects</h1>
      <img src={theme_pattern} alt="theme-pattern" />
     </div>
     <div className='projectContainer'>
           <ProjectData/>
     </div>
         </div>
  )
}

export default Projects
