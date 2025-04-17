// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => `Number ${number}`);

// console.log(doubledNumbers);

// // Same with forEach

// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 4);
// });

// console.log(doubledNumbers2)

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

// Create an array of company names

const companyNames = companies.map((company) => company.start && company.end);

console.log(companyNames)

const companyInfo = companies.map((company) => company.name + ' - '+ company.category)

console.log(companyInfo)