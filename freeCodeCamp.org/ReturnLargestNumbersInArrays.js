// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
// Basic Algorithm Scripting: Return Largest Numbers in Arrays

'use strict';
function largestOfFour(arr) {
  let result = []
  let currentMax = 0

  for(let i = 0; i < arr.length; i++){
    currentMax = arr[i][0]

    for(let ii = 0; ii < arr[i].length; ii++){   

      if(arr[i][ii] > currentMax){
        currentMax = arr[i][ii]        
      }
    }

    result.push(currentMax)

  }
  arr = result
  // console.log(arr)
  return arr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
