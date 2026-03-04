const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelector('li');

function run() {
  // className
  //   console.log(itemList.className);
  //     text.className = 'card dark';

  // classList

  itemList.classList.forEach((c) => console.log(c));

  //   text.classList.add('dark');
  //   text.classList.remove('dark');

  text.classList.replace('card', 'dark');
}

document.querySelector('button').onclick = run;
