import React from 'react';
import "./JavaPopup.css"

const JavaPopup = ({ openJava, handleClose, text }) => {
    if (!openJava) return null;

    const Close = () => {
        document.querySelector('.popup-content').style.animation = 'slideOutToBottomLeft 0.33s ease-in-out forwards';
        setTimeout(handleClose, 600); 
    };

    return (
        <div className={`popup-overlay ${openJava ? 'active' : ''}`}>
            
            <div className="popup-content">
              <h3>Java</h3>
              <div className='data'>
                <p><strong>Created by :</strong> James Gosling</p>
                <p><strong>Year :</strong> 1995</p>
              </div>
            <button className="close-btn" onClick={Close}>&times;</button>
                
            </div>
        </div>
    );
};

export default JavaPopup;