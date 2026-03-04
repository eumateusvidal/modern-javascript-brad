let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;

output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;

output = parent.childNodes[3].innerText = 'Matt Vidal';
output = parent.childNodes[5].style.color = 'blue';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Maitê';

// Parent mode

const child = document.querySelector('.child');

console.log(output);
