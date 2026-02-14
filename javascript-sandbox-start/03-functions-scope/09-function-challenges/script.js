// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5]));
