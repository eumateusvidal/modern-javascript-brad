// Function Declaration

function addDolllarSign(value) {
  return '$' + value;
}

console.log(addDolllarSign(100));

//Function Expression

const addPlusSign = function (value) {
  return '+' + value;
}

console.log(addPlusSign(200));

const greet = function() {
  console.log('Hello world');
}

greet()

function myNameIs(value) {
  return 'My name is ' + value
}

console.log(myNameIs('Matt Vidal'))

const myName = function(name) {
  return 'My name is: ' + name;
}

console.log(myName('Michael Jackson'))

function yourNumber(number) {
  return 'Your numbers is ' + number
}

console.log(yourNumber(7))
