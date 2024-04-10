import React from 'react'
import Design from './About.module.css'
import about from "../../assets/IMG_20231019_172442.jpg"


const About = () => {
  return (
    <div id='about' className={Design.about}>

        <h2>About Me</h2>

      <div className={Design.abouttext}>

      <div className={Design.left}>
      <img className={Design.image} src={about} alt='about me' />
      </div>

      <div className={Design.right}>
        <p>
          I am a passionate web developer with a strong foundation 
          in web technologies. I specialize in 
          creating modern and responsive websites 
          that not only look great but also provide 
          a seamless user experience.
        </p>
        <p>
          My journey in web development began during 
          my B.Tech in Information Technology, where 
          I developed a keen interest in coding and 
          building innovative solutions. Since then, 
          I have honed my skills through hands-on 
          experience and various projects.
        </p>
        
        <p>
          In addition to my technical skills, I also 
          have experience working on various projects, 
          ranging from personal websites to collaborative 
          ventures. I thrive in collaborative environments 
          and enjoy bringing ideas to life through teamwork
          and creativity.
        </p>

        </div>
        
      </div>
    </div>
  )
}

export default About
