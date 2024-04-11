import React from 'react';

const ReactPopup = ({ openReact, handleClose }) => {
    if (!openReact) return null;

    const Close = () => {
        document.querySelector('.popup-content').style.animation = 'slideOutToBottomLeft 0.33s ease-in-out forwards';
        setTimeout(handleClose, 600); 
    };

    return (
        <div className={`popup-overlay ${openReact ? 'active' : ''}`}>
            
            <div className="popup-content">
              <h3>React JS</h3>
              <div className='data'>
                <p><strong>Created by :</strong> </p>
                <p><strong>Year :</strong> </p>
              </div>
            <button className="close-btn" onClick={Close}>&times;</button>
                
            </div>
        </div>
    );
};

export default ReactPopup;