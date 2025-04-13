// Loop through arrays

const itens = ['book', 'table', 'chair', 'kite'];
const users = [
  {name: 'Brad'},
  {name: 'Kate'},
  {name: 'Steve'},
]

// for (const item of itens) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name)
}

// Loop over strings

const str = 'Hello world';

for (const letter of str) {
  console.log(letter)
}

//Loops over Maps

const map = new Map();

map.set('Name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key,value)
}