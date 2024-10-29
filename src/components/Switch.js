import React from 'react';
import '../Switch.css';

function Switch({ mode, changeMode }) {
    return (
        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            {/* Custom toggle container */}
            <div className="toggle-container">
                {/* Checkbox */}
                <input
                    className="form-check-input toggle-checkbox"
                    type="checkbox"
                    id="mode"
                    onClick={changeMode} // Call changeMode directly
                />
                {/* Label with the toggle ball */}
                <label className="form-check-label toggle-label" htmlFor="mode">
                    <span className={`toggle-ball ${mode === 'light' ? 'sun' : ''}`}></span>
                </label>
            </div>
        </div>
    );
}

export default Switch;
