import React from "react";
import "./strategies.css";

const Strategies = () => {
  return (
    <div className="trade-strategy-container">
      <p>Trade Strategy</p>
      <form className="trade-strategy-form">
        <label>
          Strategy 1
          <input type="radio" name="trade-strategy" value="strategy1" />
        </label>
        <label>
          Strategy 2
          <input type="radio" name="trade-strategy" value="strategy2" />
        </label>
        <label>
          Strategy 3
          <input type="radio" name="trade-strategy" value="strategy3" />
        </label>
        <label>
          Strategy 4
          <input type="radio" name="trade-strategy" value="strategy4" />
        </label>
        <label>
          Strategy 5
          <input type="radio" name="trade-strategy" value="strategy5" />
        </label>
        <label>
          Strategy 6
          <input type="radio" name="trade-strategy" value="strategy6" />
        </label>
        <label>
          Strategy 7
          <input type="radio" name="trade-strategy" value="strategy7" />
        </label>
        <label>
          Strategy 8
          <input type="radio" name="trade-strategy" value="strategy8" />
        </label>
        <label>
          Strategy 9
          <input type="radio" name="trade-strategy" value="strategy9" />
        </label>
        <label>
          Strategy 10
          <input type="radio" name="trade-strategy" value="strategy10" />
        </label>
        <label>
          Strategy 11
          <input type="radio" name="trade-strategy" value="strategy11" />
        </label>
        <label>
          Strategy 12
          <input type="radio" name="trade-strategy" value="strategy12" />
        </label>
      </form>
    </div>
  );
};

export default Strategies;
