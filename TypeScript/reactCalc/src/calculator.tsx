import { Calc } from "./InterFaces";
export const calculator = (calc: Calc): number => {
  console.log(calc);
  switch (calc.operation) {
    case "+":
      return calc.nums[0] + calc.nums[1];
    case "-":
      return calc.nums[0] - calc.nums[1];
    case "x":
      return calc.nums[0] * calc.nums[1];
    case "/":
      return calc.nums[0] / calc.nums[1];
    default:
      return 0;
  }
};
