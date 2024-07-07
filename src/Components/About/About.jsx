import React from "react";
import "./About.css"
import theme_pattern from "../../../public/Images/assets/theme_pattern.svg"


const About = () => {
  return (
    <div  id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left ">
          <img src="../../../public/Images/ABOUTprofile.jpeg" alt="profile-img"/>
        </div>
        <div className="about-right ">
        
     <p>
            Myself  <span className="nameSpan">   Khushi Meena</span>,I am a passionate Electrical Engineer student of Malaviya National Institute of Technology,Jaipur.
           Posses strong knowledge of electrical principles and advanced understanding of computer science .
           Demonstrated ability to quickly learn and solve problems as well as excel in web development.Eager to learn and grow,I'm dedicated to honing my skills and collaborating with fellow enthusiasts.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
