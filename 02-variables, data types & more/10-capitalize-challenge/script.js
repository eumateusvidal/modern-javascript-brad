// const myString = 'developer';

// let myNewString = 'developer';

// myString = myNewString.toLocaleUpperCase();

// console.log(myNewString);

const myString = 'developer';

let myNewString;

//solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
//Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
//Solution 3:
myNewString = myString[0].toUpperCase() + myString.substring(1);

console.log(myNewString);