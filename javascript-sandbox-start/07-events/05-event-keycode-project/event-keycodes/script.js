// Method 1

// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert');

//     insert.innerHTML =  ``
// });

// Method 2

function showKeyCodes(e) {
  const insert = document.getElementById('insert');

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
  };
}

window.addEventListener('keydown', showKeyCodes);
