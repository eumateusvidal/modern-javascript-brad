let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// // Nesting Arrays
// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[0][2];

// Concat Arrays

x = fruits.concat(berries);

// Spread Operators (...)
x = [...fruits, ...berries];

// Flatten Arrays (To unify Arrays)

const arr = [1, 2, [3, 4], 5, [6, 7]];

x = arr.flat();

// Static Methods on Array Object

x = Array.isArray(arr);

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
