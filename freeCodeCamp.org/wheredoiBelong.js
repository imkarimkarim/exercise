// Basic Algorithm Scripting: Where do I Belong
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
  // sroting array
  arr.sort((a, b) => a - b)
  if(num > arr[0]){
      for(let i = 1; i < arr.length; i++){
        if(num <= arr[i]) return i;
    }
    return arr.length
  }
  else{
    return 0;
  }
}

getIndexToIns([2, 20, 10], 19)
