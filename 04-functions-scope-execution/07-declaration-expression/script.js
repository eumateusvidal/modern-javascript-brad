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

