// InputField.js
import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ initialCount = '', label }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="input-field-container">
            {label && <label className="label">{label}</label>}
            <div className="wrapper">
                <span onClick={decrement} className='minus'>-</span>
                <span className='num'>{count}</span>
                <span onClick={increment} className='plus'>+</span>
            </div>
        </div>
    );
}

export default InputField;