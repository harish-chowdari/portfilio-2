import React from 'react'
import Design from "./ReactPopup.module.css"



const ReactPopup = ({handleClose}) => {
  return (
    <div className={Design.popup}>
      <h3>React Js</h3>
      
      <div>
        <p>Created by : James Gosling</p>
        <p>Year : 1995</p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default ReactPopup