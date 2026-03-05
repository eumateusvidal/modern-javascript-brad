const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkboxInput = document.getElementById('checkbox-input');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

itemInput.addEventListener('input', onInput);

priorityInput.addEventListener('change', onInput);

checkboxInput.addEventListener('change', onChecked); // 'change', not 'input'
