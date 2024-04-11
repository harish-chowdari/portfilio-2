import React from 'react'
import Design from "./MongoPopup.module.css"



const MongoPopup = ({handleClose}) => {
  return (
    <div>
    <h3>MongoDB</h3>
      
      <div>
        <p>Created by : </p>
        <p>Year : </p>
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default MongoPopup