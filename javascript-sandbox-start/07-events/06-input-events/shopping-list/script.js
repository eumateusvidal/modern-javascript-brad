const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkboxInput = document.getElementById('checkbox-input');
const heading = document.querySelector('h1');

function onInput(e) {
  console.log(e.key);
}

itemInput.addEventListener('input', onInput);
