import React from 'react'
import Design from "./NodePopup.module.css"


const NodePopup = ({handleClose}) => {
  return (
    <div>
    <h3>Node JS</h3>
      
      <div>
        <p>Created by : </p>
        <p>Year : </p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default NodePopup