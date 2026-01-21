let x;

const arr = [30, 26, 40, 56];

// Add an value in the end
arr.push(100);

// Remove the last value
arr.pop();

// Add a value in the beginning
arr.unshift(7);

// Remove a value in the beginning
arr.shift();

// Reverser order of the values
// arr.reverse();

// To verify if a value is in the array (returns true or false)
x = arr.includes(26);

// It gives the index of an specific value
x = arr.indexOf(30);

//
x = arr.slice(1);

x = arr.splice(1);

console.log(x, arr);
