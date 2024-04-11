import React from 'react';
import "./JsPopup.css"


const JsPopup = ({ isOpen, close, text }) => {
    if (!isOpen) return null;

    const handleClose = () => {
        document.querySelector('.popup-content').style.animation = 'slideOutToBottomLeft 0.33s ease-in-out forwards';
        setTimeout(close, 600); // Wait for animation to finish before closing
    };

    return (
        <div className={`popup-overlay ${isOpen ? 'active' : ''}`}>
            <div className="popup-content">
                <button className="close-btn" onClick={handleClose}>&times;</button>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default JsPopup;