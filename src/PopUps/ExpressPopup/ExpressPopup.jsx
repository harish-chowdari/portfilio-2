import React from 'react'
import Design from "./ExpressPopup.module.css"



const ExpressPopup = ({handleClose}) => {
  return (
    <div>
    <h3>Express JS</h3>
      
      <div>
        <p>Created by : </p>
        <p>Year : </p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default ExpressPopup