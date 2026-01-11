let x;

const name = 'Matt';
const age = '30';

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template Literals
x = `Hello my name is ${name} and I am ${age} years old`;

// String Properties and Methods

const s = new String('Hello World');

x = typeof s;

x = s.length;

//Access value by key

x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('l');

x = s.substring(1, 3);

x = s.slice(-1);

x = x.trim();
x = s.replace('World, John');

console.log(x);
