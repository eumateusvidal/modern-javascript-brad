//Default Params
function registerUser (user = 'Matt') {
  // if (!user) {
  //   user = 'Bot';
  // }
  return user + ' is registered';
}

console.log(registerUser());

//Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as Params

function loginUser (user) {
  return `The user ${user.name} with the id ${user.id} is logged in.`;
}

const user = {
  name: 'Matt Vidal',
  id: 7,
}

console.log(loginUser(user));
console.log(loginUser({
    id: 2,
    name: 'Sara',
  })
);

//Arrays as params
function getRandom(arr) {
  const ramdomIndex = Math.floor(Math.radom)
}
