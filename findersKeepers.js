// Basic Algorithm Scripting: Finders Keepers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

function findElement(arr, func) {

  for(let i = 0; i < arr.length; i++){
    let num = 0
    if(func(arr[i]) == true){
      num = arr[i]
      return num
    }
  }    
  return undefined  
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
