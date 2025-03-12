
let x;

//Array Literal
const numbers = [12, 45, 33, 29, 39]
const mixed = [12, 'Hello', true, null];

//Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'banana';

//.length will add the new element at the end
fruits[fruits.length] = 'blueberry'

x = fruits;

console.log(x)