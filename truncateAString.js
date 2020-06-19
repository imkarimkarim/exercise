// Basic Algorithm Scripting: Truncate a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str, num) {
  if(!(str.length <= num)){
    let strCopy = str
    str = ""
    for(let i = 0; i < num; i++){
      str += strCopy[i]
    }
    str += "..."
    console.log(str)
    return str;
    }else{
      return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 18);
