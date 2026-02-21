const colorObj = {
  color1: 'red',
  color2: 'blue',
  color2: 'orange',
  color3: 'green',
  color4: 'orange',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['Red', 'Blue', 'Green', 'Yellow'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
