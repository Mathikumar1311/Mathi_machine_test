
import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="toggle-container" onClick={handleToggle}>
            <span className="toggle-label">Customize</span>
            <div className={`toggle ${isOn ? 'on' : 'off'}`}>
                <div className={`toggle-circle ${isOn ? 'active' : ''}`}></div>
            </div>
        </div>
    );
};

export default ToggleButton;