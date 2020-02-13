// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for...in-statement
// Iterate Through the Keys of an Object with a for...in Statement
let users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

function countOnline(usersObj) {
    var a = 0;
    for(let i in usersObj){                
          if(usersObj[i].online){              
              a++
      }      
    }
    return a
  }
  console.log(countOnline(users))
  