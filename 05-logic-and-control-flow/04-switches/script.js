const d = new Date(2022, 7, 10, 13, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2: 
    console.log('It is February');
    break;
  case 3: {
    console.log('It is March')
    break;
  }
  default:{
    console.log('It is not Jan, Feb, Mar')
  }
}

switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  case hour < 20:
    console.log('Good Night');
}