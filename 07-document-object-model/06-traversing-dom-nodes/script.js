// Get child elements
let output;

const parent = document.querySelector('.parent');
output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'purple';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #000';
child.parentElement.style.padding = '1rem';
child.parentElement.style.borderRadius = '1rem';

//Sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;

console.log(output);