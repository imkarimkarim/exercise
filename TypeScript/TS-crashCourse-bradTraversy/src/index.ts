// Basic TYpes
let id: number = 47;
let company: string = "imkarimkarim";
let lifeIsTmp: boolean = true;
let x: any = "Hi";

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "Ola"];

// Truple
let person: [number, string, boolean] = [1, "karim", false];
let employee: [number, string][];

employee = [
  [1, "brad"],
  [2, "mehdi"],
  [3, "karim"],
];

// Union
let pid: string | number;
pid = "22";
pid = 22;

// Enum
enum Direaction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direaction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "karim",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Function
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "karim",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;

// Classes
// class Person {
//   id: number;
//   name: string;
//
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }
//
// const karim = new Person(1, "karim");


// resume:  https://youtu.be/BCg4U1FzODs?t=2031
