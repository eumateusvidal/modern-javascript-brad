// JavaScript Event Listener

const clearBtn = document.querySelector('#clear');


// clearBtn.onclick = function () {
//   alert('Matt is handsome')
// }


// addEventListener()

// clearBtn.addEventListener('click', function () {
//   alert('Clear Items')
// })

// clearBtn.addEventListener('click', () => alert('Clear content'));

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

setTimeout(() => clearBtn.click(), 5000);