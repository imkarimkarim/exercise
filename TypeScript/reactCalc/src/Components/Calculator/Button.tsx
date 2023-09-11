import React from "react";
import { ButtonProps } from "../../InterFaces";

const Button = ({ onclick }: ButtonProps) => {
  return <button onClick={onclick}>=</button>;
};

export default Button;
