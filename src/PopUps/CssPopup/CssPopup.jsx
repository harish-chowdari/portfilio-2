import React from 'react'
import Design from "./CssPopup.module.css"



const CssPopup = ({handleClose}) => {
  return (
    <div>
      <div>CssPopup</div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default CssPopup