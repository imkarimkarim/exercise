import { firstNum, secondNum, operation, button, result } from "./selectors";
import { calc } from "./store";
import { calculator } from "./calculator";

firstNum &&
  firstNum.addEventListener("input", (e) => {
    calc.nums[0] = parseInt((e.target as HTMLInputElement).value);
  });

secondNum &&
  secondNum.addEventListener("input", (e) => {
    calc.nums[1] = parseInt((e.target as HTMLInputElement).value);
  });

operation &&
  operation.addEventListener("input", (e) => {
    calc.operation = (e.target as HTMLInputElement).value;
  });

button &&
  button.addEventListener("click", () => {
    console.log(calc);
    if (result) {
      result.innerHTML = calculator(calc).toString();
    }
  });
