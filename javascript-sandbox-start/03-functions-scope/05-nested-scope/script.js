function first() {
  let x = 100;

  function second() {
    let y = 200;
    console.log(x + y);
  }

  second();
}

first();
