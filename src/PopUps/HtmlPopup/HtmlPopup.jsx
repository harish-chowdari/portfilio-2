import React from 'react'
import Design from "./HtmlPopup.module.css"



const HtmlPopup = ({handleClose}) => {
  return (
    <div className={Design.popup}>
      <h3>Html</h3>
      
      <div>
        <p>Created by : </p>
        <p>Year : </p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default HtmlPopup