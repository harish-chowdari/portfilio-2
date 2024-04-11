import React from 'react'
import Design from "./TailPopup.module.css"



const TailPopup = ({handleClose}) => {
  return (
    <div>
    <h3>Tailwind CSS</h3>
      
      <div>
        <p>Created by : </p>
        <p>Year : </p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default TailPopup