//Getting data with objects
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
}

for (const key in colorObj) {
  console.log (key, colorObj[key])
}


//Getting data with arrays
const colorArr = ['red', 'blue', 'orange', 'green'];

for (const key in colorArr) {
  console.log(colorArr[key])
}
