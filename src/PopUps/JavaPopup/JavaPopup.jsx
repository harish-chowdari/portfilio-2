import React from 'react'
import Design from "./JavaPopup.module.css"


const JavaPopup = ({handleClose}) => {
  return (
    <div className={Design.popup}>
      <h3>Java</h3>
      
      <div>
        <p>Created by : James Gosling</p>
        <p>Year : 1995</p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default JavaPopup