import React from 'react'
import Design from "./Hero.module.css"
import dp from "../../assets/IMG_20231019_172442.jpg"
import resumeFile from "../../assets/Resume_l.pdf"// Assuming the path to your resume file
import {Cursor, useTypewriter} from "react-simple-typewriter"


const Hero = () => {

  const [text] = useTypewriter({
    words: ["Harish Nagubadi", "Web Developer"],
    loop:{},
    typeSpeed:140,
    deleteSpeed:50,
    delaySpeed:1250
    
  })
  

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Harish_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={Design.hero}>

      <div className={Design.left}>

        <h4 style={{color:"white"}}>I am, </h4>
        
        <div className={Design.type}>
        <h1> 
            {text}
        </h1>

          <span style={{color: "red"}}>
              <Cursor />
            </span>
        </div>

        <p className={Design.about}>
           based in Bengaluru, 
          specialized in creating modern and responsive websites. 
          I have a strong foundation in web development and am 
          constantly honing my skills to stay updated with the 
          latest technologies and trends in the industry.
        </p>

        <div className={Design.buttons}>

          <button className={Design.hirebtn}>Hire Me</button>
          <button className={Design.resume} onClick={handleDownloadResume}>
          
            Resume 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>

        </div>

      </div>

      <div className={Design.right}>
        <img className={Design.circularImage} src={dp} alt='dp' />
        
      </div>
      
    </div>
  )
}

export default Hero
