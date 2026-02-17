// const email = 'matt@fasflow.studio';

// if (email) {
//   console.log(`Your email is ${email}`);
// }

// console.log(Boolean(email));

// Falsy Values

// - False
// - 0
// - "" 0 '' (Empty string)
// - null
// - undefined
// - NaN

const x = NaN;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is false');
}

console.log(Boolean(x));
