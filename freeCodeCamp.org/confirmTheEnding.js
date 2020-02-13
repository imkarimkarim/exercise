// Basic Algorithm Scripting: Confirm the Ending
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
function confirmEnding(str, target) {
  let lastChar = str.length - 1;
  let check = ""
  let i = str.length - target.length

  while(i <= lastChar){
    check += str[i]
    i++
  }

  if(check == target){
    str = true
  }
  else{
    str = false
  }
  return str;
}

confirmEnding("Congratulation", "on");
