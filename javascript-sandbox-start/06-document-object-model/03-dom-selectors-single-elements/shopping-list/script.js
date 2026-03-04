// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes

document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

console.log(title);

// Get/change content

console.log(title.textContent);
title.textContent = 'Hey Matt';
title.innerText = 'Hey Matt';
title.innerHTML = '<strogn> Shopping List</strogn>';

// CHange style

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input [type="text"]'));

console.log(document.querySelector('li:nth-child(2)'));

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerHTML = 'Apple Juice';
secondItem.style.color = 'blue';

// Use this methods on other elements

const list = document.querySelector('ul');
console.log(list);

list.querySelector;
