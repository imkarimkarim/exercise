// Basic Algorithm Scripting: Repeat a String Repeat a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {

  if(num > 0){
    let copyStr = str
    for(let i = 1; i < num; i++){
      str += copyStr;      
    }
    return str

  }else if(num <= 0){
    return ""
    
  }else{
    return "only numbers"
  }
}

repeatStringNumTimes("*", 3);
 
