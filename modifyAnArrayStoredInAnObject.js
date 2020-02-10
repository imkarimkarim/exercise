// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object
// Basic Data Structures: Modify an Array Stored in an ObjectPassed
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // change code below this line
    let tmpArr = userObj.data.friends;
    tmpArr.push(friend);
    userObj.data.friends = tmpArr;
    
    return userObj.data.friends;
    // change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
  