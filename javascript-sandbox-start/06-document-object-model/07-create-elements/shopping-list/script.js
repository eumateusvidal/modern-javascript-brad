const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Matt Vidal';

const text = document.createTextNode('Hello Matt');

div.appendChild(text);

document.body.appendChild(div);

console.log(div);
