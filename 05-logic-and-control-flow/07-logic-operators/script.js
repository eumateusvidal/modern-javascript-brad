console.log(10 < 20 && 30 > 15);
console.log(10 > 20 || 30 < 15);

// && - Will return first falsy value or the last value

// let a;

// a = 10 && 20;
// a = 10 && 20 && 30;
// a = 10 && 0 && 30;
// a = 10 && '' 0 && 30;

// console.log(a);

// const posts = ['Post one', 'Post Two']; 
// posts.lenth > 0 && console.log(posts[0]);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20
c = null ?? 20
c = undefined ?? 20
c = 0 ?? 30

console.log(c)