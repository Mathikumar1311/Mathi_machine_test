import React, { useState } from 'react';
import './Radio.css';

const Radio = ({ options, name }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          {option.label} 
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleChange}
          />
        </label>
      ))}
    </div>
  );
};

export default Radio;