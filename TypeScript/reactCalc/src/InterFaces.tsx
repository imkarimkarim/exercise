export interface Calc {
  nums: number[];
  operation: string;
}

export interface ButtonProps {
  onclick: () => void;
}

export interface ResultProps {
  result: string;
}

export type setInputs = (index: 0 | 1, num: number) => void;

export interface InputProps {
  setInputs: setInputs;
  index: 0 | 1;
  num: number;
}
