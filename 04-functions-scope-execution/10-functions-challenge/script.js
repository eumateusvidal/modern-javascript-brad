//Challenge 1

// function getCelsius(value) {
//   return value - 30 / 2;
// }

// console.log(`The temperature is ${getCelsius(32)}`)

// function getCelsius(f) {
//   const celcius = (f - 32) * 5/9;
//   return celcius
// }

// const getCelsius2 = (f) => (f - 32) * 5/9; 

// console.log(getCelsius2(32))

//Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  return {
    min,
    max
  }
}

//Result

console.log(minMax([1, 2, 3, 4, 5]))