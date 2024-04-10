import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Skills from "./Components/Skills/Skills"
import Contact from "./Components/Contact/Contact"




const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Contact />
    </div>
  )
}

export default App