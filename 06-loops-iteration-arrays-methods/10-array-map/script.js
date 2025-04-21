const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const doubledNumbers = numbers.map((number) => 'The doubled number is ' + number * 2); 

// console.log(doubledNumbers);

// Same with for each

// const doubledNumbers2 = [];

// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2)
// });

// console.log(doubledNumbers2);

const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  {name: 'Company two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 2096},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// const companyName = companies.map((company) => company.name); 

// console.log(companyName)

// const companyInfo = companies.map((company) => `The company name is ${company.name} with the category: ${company.category}`);

// console.log(companyInfo);


// //Create an array with just company and category
// const companyInfo = companies.map((company) => {
//   return {
//     name: company.name,
//     category: company.category
//   }
// });

// console.log(companyInfo);


// // Create an array of objects with the name and the length of each company years
// const companyYears = companies.map((companies) => {
//   return {
//     name: companies.name,
//     length: companies.end - companies.start + ' years.',
//   }
// });

// console.log(companyYears);

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2)
  
console.log(evenDouble);