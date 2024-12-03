// Strategies.js
import React from 'react';
import './strategies.css';
import Radio from './Radio';

const Strategies = () => {
  const radioOptions = [
    { value: 'strategy1', label: 'Copy opened trades and pending orders' },
    { value: 'strategy2', label: 'Limit quantity of simultaneous trades' },
    { value: 'strategy3', label: 'Inversed trading' },
    { value: 'strategy4', label: 'Only long positions' },
    { value: 'strategy5', label: 'Allow scalp/Technical trade' },
    { value: 'strategy6', label: 'Allow swing strategie' },
    { value: 'strategy7', label: 'Allow day trade stratedie' },
    { value: 'strategy8', label: 'Allow position/Fundemental trade' },
    { value: 'strategy9', label: 'Only short positions' },
    { value: 'strategy10', label: 'Long & Short pisitions' },
    { value: 'strategy11', label: 'Allow Martingle' },
    { value: 'strategy12', label: 'Allow holding (Ten Gems)' },
  ];

  return (
    <div>
      <h2>Select a Strategy</h2>
      <Radio options={radioOptions} name="strategies" />
    </div>
  );
};

export default Strategies;