let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat:42.9384,
      lng: -71.3232
    }
  }
}

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2};
const obj2 = {c:3, d: 4};

// const obj3 = {obj1, obj2};

// How to combine both of them
const obj3 = {...obj1, ...obj2};

const obj4 = Object.assign ({}, obj1, obj2);

const todos = [
  { id: 1, name: 'Buy Milk'},
  { id: 2, name: 'Pickup kids from school'},
  { id: 2, name: 'Buy Milk'},
]

x = todos[0].name;

x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);

x = todo;

console.log(x);