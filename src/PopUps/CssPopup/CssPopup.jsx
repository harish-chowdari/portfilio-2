import React from 'react'
import Design from "./CssPopup.module.css"



const CssPopup = ({handleClose}) => {
  return (
    <div>
    <h3>CSS</h3>
      
      <div>
        <p>Created by : </p>
        <p>Year : </p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default CssPopup