import React from 'react';

const CssPopup = ({ openCss, handleClose }) => {
    if (!openCss) return null;

    const Close = () => {
        document.querySelector('.popup-content').style.animation = 'slideOutToBottomLeft 0.33s ease-in-out forwards';
        setTimeout(handleClose, 600); 
    };

    return (
        <div className={`popup-overlay ${openCss ? 'active' : ''}`}>
            
            <div className="popup-content">
              <h3>CSS</h3>
              <div className='data'>
                <p><strong>Created by :</strong> </p>
                <p><strong>Year :</strong> </p>
              </div>
            <button className="close-btn" onClick={Close}>&times;</button>
                
            </div>
        </div>
    );
};

export default CssPopup;