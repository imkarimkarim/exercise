// Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for...in-statement

"use strict";
function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let i2 = 0; i2 < arr[i].length; i2++) {
      if (arr[i][i2] == elem) {
        flag = false;
      }
    }
    if (flag == true) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 4],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  )
);