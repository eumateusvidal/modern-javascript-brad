function removeClearButton() {
 const clearBtn = document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

removeClearButton();
removeFirstItem();