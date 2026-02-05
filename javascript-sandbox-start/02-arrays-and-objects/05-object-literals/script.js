let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '553 Main st',
    city: 'Salvador',
    state: 'Bahia',
  },
  hobbies: ['music', 'sports'],
};

// Identify
x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

// Change
person.name = 'Jane Doe';
person['isAdmin'] = false;
person.address.city = 'Camaçari';

// Delete
delete person.age;

// Add
person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my names is ${this.name}`);
};

person.greet();

console.log(x);
