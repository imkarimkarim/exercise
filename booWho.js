// Basic Algorithm Scripting: Boo who
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

function booWho(bool) {
  if(typeof(bool) == "boolean"){
    bool = true
  }
  else{
    bool = false
  }

  return bool;
}

booWho(true);
console.log(booWho(false))
