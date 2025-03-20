const library = [
  {
    title: 'God is good',
    author: 'Matt Vidal',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'My life is blessed',
    author: 'Matt Vidal',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'I am thankfull',
    author: 'Matt Lima',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const { author: authorName } = library[2];

const newLibrary = JSON.stringify(library);

console.log (authorName);