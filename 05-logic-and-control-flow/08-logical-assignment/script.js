//= assigns the right side value only if the left is a falsy value.

let a = 10;
// if (!a) {
//   a = 10
// }

// a = a || 10;

a ||= 10;

console.log(a);

//&&= assigns the right side value only if the left is a truthy value.

let b = 10

if (b) {
  b = 20;
}

b = b && 20;
b &&= 20;

console.log(b)

//??= assigns the right side value only if the left is a null or undefined.

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c)
