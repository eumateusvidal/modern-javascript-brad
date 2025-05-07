const div = document.createElement('div')

div.className = 'matt-vidal';
div.id = 'matt-vidal';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World';

const text = document.createTextNode ('Hellow World');
div.appendChild(text);


console.log(div);