import React, { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";
import { Calc } from "../../../InterFaces";

const Calculator = () => {
  const [store, setStore] = useState<Calc>({
    nums: [0, 0],
    operation: "+",
  });
  const [result, setResult] = useState("");

  useEffect(() => {
    api.listen((msg: any) => {
      console.log(msg);
    });
    return () => {
      api.remove();
    };
  });

  const onclick = (): void => {
    api.sayHello();
    setResult("0");
    // setResult(calculator(store).toString());
  };

  const setInputs = (index: 0 | 1, num: number): void => {
    console.log(index, num);
    const tmpNums = index === 0 ? [num, store.nums[1]] : [store.nums[0], num];
    setStore({ ...store, nums: tmpNums });
  };

  return (
    <div className="calc">
      <Input setInputs={setInputs} index={0} num={store.nums[0]} />
      <Select />
      <Input setInputs={setInputs} index={1} num={store.nums[1]} />
      <Button onclick={onclick} />
      <Result result={result} />
    </div>
  );
};

export default Calculator;
