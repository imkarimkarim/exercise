// Basic Algorithm Scripting: Title Case a Sentence
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

const convertCharToUpper = (str) =>{

  if(str.length == 1){
    let charr = str[0].charCodeAt()
    if(charr >= 97 && charr <= 122){
      charr -= 32
      str = String.fromCharCode(charr)
      return str
    }
    else{
      return str
    }
  }
    else{
      return "just give me one charectar"
    }
}//pass

const convertCharToLower = (str) =>{

  if(str.length == 1){
    let charr = str[0].charCodeAt()
    if(charr >= 65 && charr <= 90){
      charr += 32
      str = String.fromCharCode(charr)
      return str
    }
    else{
      return str
    }
  }
    else{
      return "just give me one charectar"
    }
}//pass


const titleCase = (str) => {
  let arrTitleCase = []
  let arrStr = str.split(" ")
  let upperWord = ""
  let lowerWord = ""
  let rest = ""
  for(let i = 0; i < arrStr.length; i++){
    upperWord = ""
    rest = ""
    lowerWord = ""
    upperWord = convertCharToUpper(arrStr[i][0])
    for(let ind = 1; ind < arrStr[i].length; ind++){
      lowerWord = convertCharToLower(arrStr[i][ind])
      rest += lowerWord
    }
    arrTitleCase.push(upperWord + rest)
  }
  str = ""
  for(let index = 0; index < arrTitleCase.length; index++){
    str += arrTitleCase[index] + " "
  }
  str = str.slice(0, -1)
  return str
}


titleCase("sHoRt AnD sToUt");
