import React from "react";
import "./TradeSize.css";
import ToggleButton from "./ToogleButton.js";

const TradeSize = () => {
  return (
    <div className="tradeSize">
      <div className="heading_button">
        <p>Maximum Trade Size</p>
        <ToggleButton />
      </div>

      <p className="para">
        Set the minimum trade size that will be executed in your brokerage
        account.if the parameter is set to "0.50".our trading server will place
        trades with minimum size od 0.50 lot or 50 000 units of base currency,
        Dedault recommended value is "0.01"
      </p>
    </div>
  );
};

export default TradeSize;
