import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/About/Skills/Skills';
import Education from './Components/About/Education/Education';
import Projects from './Components/PROJECTS/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
     <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
     </>
  )
}

export default App