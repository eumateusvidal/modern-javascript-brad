const d = new Date(10, 30, 2022, 18, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Aftnernoon');
} else {
  console.log('Good night');
}

// Nested If

if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake Up');
  }
} else if (hour < 18) {
  console.log('Good Aftnernoon');
} else {
  console.log('Good night');
  if (hour >= 20) {
    console.log('Go to sleep');
  }
}

// Multiple conditions

if (hour >= 9 && hour <= 18) {
  console.log('It is work time');
}

if (hour === 5 || hour === 18) {
  console.log(`Let's pray`);
}
