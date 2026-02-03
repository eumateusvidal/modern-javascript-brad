let x;

const arr = [7, 22, 56, 90, 99];

// Add an value in the end
arr.push(100);

// Remove the last value
arr.pop();

// Add a value in the beginning
arr.unshift(4);

// Remove a value in the beginning
arr.shift();

// Reverser order of the values
// arr.reverse();

// To verify if a value is in the array (returns true or false)
x = arr.includes(22);

// It gives the index of an specific value
x = arr.indexOf(22);

x = arr.slice(1, 4);
// x = arr.splice(1, 4);

// //

console.log(x, arr);
