// const clearBtn = document.querySelector('#clear');

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = document.querySelector('li');

//     //   itemList.innerHTML = '';

//     items.onbeforematch((item)) => item.remove ()
// }

// JavaScript Event Listener

// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// addEventListener()

// clearBtn.addEventListener('click', () => {
//   alert('Clear Items');
// });

clearBtn.addEventListener('click', onClear);

setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
