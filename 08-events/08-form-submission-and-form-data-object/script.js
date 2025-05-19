const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();
  // console.log('submit')

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please, fill in all fields')
  }

  console.log(item, priority);
};

function onSubmit2 (e) {
  e.preventDefault();

  const formData = new FormData(form);

  console.log(formData);
}

form.addEventListener('submit', onSubmit);
