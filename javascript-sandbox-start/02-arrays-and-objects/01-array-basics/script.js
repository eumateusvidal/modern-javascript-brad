// Array Literal
const numbers = [12, 7, 32, 68, 55];
const mixed = [12, 'Hi', true, null, undefined];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[4];

x = `My favorite fruit is ${fruits[0]}`;

x = numbers.length;

fruits[2] = 'pear';

x = fruits;

// fruits.length = 2;

fruits[3] = 'strawberry';

fruits[fruits.lenth] = 'blueberry';

x = fruits;

console.log(x);
