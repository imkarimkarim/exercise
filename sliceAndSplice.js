// Basic Algorithm Scripting: Slice and Splice
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice(0)
    arr.splice(n, 0, ...arr1)
    return arr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1)
