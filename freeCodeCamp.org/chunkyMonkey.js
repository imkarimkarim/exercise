// Basic Algorithm Scripting: Chunky Monkey
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

function chunkArrayInGroups(arr, size) {
  let newArr = []
  let tmpArr = []
  let counter = size
  let i = 0

  while(i < arr.length){
    tmpArr = []
    while(i < counter && i < arr.length){
      tmpArr.push(arr[i])
      i++
    }
    counter += size
    newArr.push(tmpArr)
  }
  arr = newArr
  return arr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
