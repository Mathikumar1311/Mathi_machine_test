
import React from 'react';
import Radio from './Radio';
import './Aditionals.css'; 

const AdditionalStrategies = () => {
  const radioOptions = [
    { value: 'strategy13', label: 'Allow hedging strategies' },
    { value: 'strategy14', label: 'Use trailing stop-loss' },
    { value: 'strategy15', label: 'Implement risk management rules' },
    { value: 'strategy16', label: 'Trade based on technical indicators' },
    { value: 'strategy17', label: 'Use automated trading systems' },
    { value: 'strategy18', label: 'Diversify trading portfolio' },
  ];

  return (
    <div className="additional-strategies-container">
      <h2>Additional Strategies</h2>
      <Radio options={radioOptions} name="additional-strategies" />
    </div>
  );
};

export default AdditionalStrategies;