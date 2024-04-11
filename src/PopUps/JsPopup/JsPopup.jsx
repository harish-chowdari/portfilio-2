import React from 'react';

const JsPopup = ({ openJs, handleClose }) => {
    if (!openJs) return null;

    const Close = () => {
        document.querySelector('.popup-content').style.animation = 'slideOutToBottomLeft 0.33s ease-in-out forwards';
        setTimeout(handleClose, 600); 
    };

    return (
        <div className={`popup-overlay ${openJs ? 'active' : ''}`}>
            
            <div className="popup-content">
              <h3>JavaScript</h3>
              <div className='data'>
                <p><strong>Created by :</strong> </p>
                <p><strong>Year :</strong> </p>
              </div>
            <button className="close-btn" onClick={Close}>&times;</button>
                
            </div>
        </div>
    );
};

export default JsPopup;