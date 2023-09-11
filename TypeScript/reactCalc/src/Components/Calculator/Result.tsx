import React from "react";
import { ResultProps } from "../../InterFaces";

const Result = ({ result }: ResultProps) => {
  return <p id="result">{result}</p>;
};

export default Result;
