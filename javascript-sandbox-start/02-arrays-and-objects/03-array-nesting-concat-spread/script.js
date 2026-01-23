let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// // Nesting Arrays
// x = fruits[3][0];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// Concat Arrays

x = fruits.concat(berries);

// Spread Operators (...)
// x = [...fruits, ...berries];
x = [...fruits, berries];

// Flatten Arrays (To unify Arrays)
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object
x = Array.isArray('Hello');

x = Array.from('123456');

const a = 1;
const b = 2;
const c = 3;
const d = 4;

x = Array.of(a, b, c);

console.log(x);
