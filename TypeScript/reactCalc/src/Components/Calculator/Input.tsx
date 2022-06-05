import React from "react";
import { InputProps } from "../../InterFaces";

const Input = ({ setInputs, index, num }: InputProps) => {
  return (
    <input
      className="number"
      type="number"
      name="firstNumber"
      id="firstNumber"
      placeholder="number"
      value={num}
      onChange={(e) => {
        let tmpNum = parseInt(e.target.value);
        setInputs(index, tmpNum);
      }}
    />
  );
};

export default Input;
