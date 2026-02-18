// Falsy Values

// - False
// - 0
// - "" 0 '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values

// - Everything else that is not lazy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a strong)
// - [] (empty array)
// - {} {empty object}
// - function () {} (empty function)

const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is false');
}

console.log(Boolean(x));

// Truthy and falsy caveats

const children = 3;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log(`Please enter number of children`);
}

// Check for empty arrays

const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts');
}

// Check for empty objects

const user = {};

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No user');
}
