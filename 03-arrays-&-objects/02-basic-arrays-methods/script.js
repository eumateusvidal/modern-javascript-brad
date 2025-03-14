let x;

const arr = [34, 55, 95, 20, 15];

//Add a data in the end
arr.push(100);

//remove a data from the end
arr.pop();

arr.unshift(99);

arr.shift();

arr.reverse();

//Verifies in the data exist inside of the array
x = arr.includes(200);

x = arr.indexOf(15);

x = arr.slice(1, 4);

x = arr.splice(1, 4);



console.log(x);