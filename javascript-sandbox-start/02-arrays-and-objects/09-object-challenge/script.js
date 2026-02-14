// Step one

const library = [
  {
    title: 'Bible',
    author: 'God',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Bible 2',
    author: 'Lion of Judah',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Bible',
    author: 'Kink of the kings',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3

const { title } = (firstBook = library);
console.log(firstBook );
