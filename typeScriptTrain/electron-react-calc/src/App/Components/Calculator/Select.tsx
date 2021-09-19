import React from "react";

const Select = () => {
  return (
    <select name="operation" id="operation">
      <option value="sum">+</option>
      <option value="minues">-</option>
      <option value="multiply">x</option>
      <option value="divide">/</option>
    </select>
  );
};

export default Select;
