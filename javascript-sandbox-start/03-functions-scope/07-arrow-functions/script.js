// function add(a, b) {
//   return a + b;
// }

// Arrow function sytanx
const add = (a, b) => {
  return a + b;
};

//Implicit return

const subtract = (a, b) => a - b;

const double = (a) => a * 2;

//Returning an object
const creteOb = () => ({
  name: 'Brad',
});
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

console.log(subtract(10, 3));
console.log(double(10));
console.log(creteOb(10));
