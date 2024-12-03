
import React from "react";
import "./Input.css";
import InputField from "./InputField";

const Input = () => {
  return (
    <div className="Input">
      <div className="input-group">
        <InputField label="Lot Min" />
        <InputField label="Lot Max" />
        <InputField label="Fixed Stoploss" />
        <InputField label="Fixed Take Profit" />
        <InputField label="Force Exit & Stop" />
        <InputField label="Worst Deviation" />
      </div>
    </div>
  );
};

export default Input;