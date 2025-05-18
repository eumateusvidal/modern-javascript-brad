const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  // key
  // console.log(e.key);
  // document.querySelector('h1').innerText = e.key;

  if (e.key === 'Enter') {
    alert('You pressed enter')
  };

  // keyCode

  // code
  console.log('keyup');
};


// itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyDown);