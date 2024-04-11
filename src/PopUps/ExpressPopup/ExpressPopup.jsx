import React from 'react';

const ExpressPopup = ({ openExpress, handleClose }) => {
    if (!openExpress) return null;

    const Close = () => {
        document.querySelector('.popup-content').style.animation = 'slideOutToBottomLeft 0.33s ease-in-out forwards';
        setTimeout(handleClose, 600); 
    };

    return (
        <div className={`popup-overlay ${openExpress ? 'active' : ''}`}>
            
            <div className="popup-content">
              <h3>Express</h3>
              <div className='data'>
                <p><strong>Created by :</strong> </p>
                <p><strong>Year :</strong> </p>
              </div>
            <button className="close-btn" onClick={Close}>&times;</button>
                
            </div>
        </div>
    );
};

export default ExpressPopup;