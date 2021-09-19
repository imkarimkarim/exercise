import { Calc } from "./interfaces";
export const calculator = (calc: Calc): number => {
  switch (calc.operation) {
    case "sum":
      return calc.nums[0] + calc.nums[1];
    case "minues":
      return calc.nums[0] - calc.nums[1];
    case "multiply":
      return calc.nums[0] * calc.nums[1];
    case "divide":
      return calc.nums[0] / calc.nums[1];
    default:
      return 0;
  }
};
