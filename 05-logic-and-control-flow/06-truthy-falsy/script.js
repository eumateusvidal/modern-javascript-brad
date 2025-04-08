// const email = 'test@teste.com'

// if (email) {
//   console.log('You passed is an email');
// }

// console.log(Boolean(email))

// Falsy Values:
// - false
// - 0
// - 
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

//Truthy Values
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false is a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = false;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy')
}

console.log(Boolean(x));

// Truthy and Falsy caveats