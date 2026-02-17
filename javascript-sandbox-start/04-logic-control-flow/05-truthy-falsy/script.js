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

const x = NaN;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is false');
}

console.log(Boolean(x));
