// @flow strict
import React from "react";
import { skillsData } from "../../../../utils/Data/skills";
import { skillsImage } from "./skill-image";
import "./Skills.css"
import Marquee from "react-fast-marquee";
import theme_pattern from "../../../../public/Images/assets/theme_pattern.svg"
function Skills() {
  return (
    <> 
    <div  id ="skills" className="skill-container">
       <div className='skill-title'>
      <h1>Skills</h1>
      <img src={theme_pattern} alt="theme-pattern" />
     </div>
       
      <div className="skills">
        {skillsData.map((skill, id) => (
           
                    <div className="card-holder" key={id}>
                      <img
                        className="card-img"
                           src={skillsImage(skill)}
                          alt={skill}
                          height={40}
                          width={40}
                          style={{margin:'10px 0' , color:'transparent'}}
                      />
                       <p>{skill}</p>
                    </div>
           
          ))} 
      </div>
    </div>
    </>
  );
}

export default Skills; 
 

/*

 <Marquee
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div key={id}>
              <div>
                <div className="card-bodySize">
                    <div className="card-holder">
                      <img
                        className="card-img"
                           src={skillsImage(skill)}
                          alt={skill}
                          height={40}
                          width={40}
                          style={{margin:'10px 0' , color:'transparent'}}
                      />
                       <p>{skill}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>

*/