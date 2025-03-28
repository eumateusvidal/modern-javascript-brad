// function add(a, b) {
//   return a + b;
// }


//Arrow Function Sintax
const add = (a, b) => {
  return a + b;
};

//Implicit return
const subtract = (a, b) => a - b;


const multiply = (a, b) => a * b;

//Can leave off () with a single param
const double = a => a * 2;

//Returnin an object
const creatObj = () => ({
  name: 'Brad'
});

console.log(add(3, 4));
console.log(subtract(10, 2));
console.log(multiply(7, 2));
console.log(double(5));
console.log(creatObj());
