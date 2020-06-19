// Basic Algorithm Scripting: Falsy Bouncer
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

'use strict';
function bouncer(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++){ 
    // removing falsy values by keeping just true values 
    if(arr[i]){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]))
